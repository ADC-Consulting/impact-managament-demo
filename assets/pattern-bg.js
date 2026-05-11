/*
 * ADC pattern background loader.
 *
 * Loads the pattern-site bundle as a background layer on adc_impact.html.
 * On every page load, a random entry from cache.json is picked and rendered.
 *
 * Usage in adc_impact.html:
 *   <div id="pattern-bg-host" data-base="/" data-colour="#2BEBCB" data-bg="#fbfaf3"></div>
 *   <script type="module" src="assets/pattern-bg.js"></script>
 *
 * data-base   : path prefix where assets/ and cache.json live (default "/")
 * data-colour : shape fill colour (default ADC teal #2BEBCB)
 * data-bg     : SVG background colour (default transparent, falls through to page)
 */
(function () {
  const host = document.getElementById("pattern-bg-host");
  if (!host) {
    console.warn("[pattern-bg] no #pattern-bg-host element");
    return;
  }

  const base = (host.dataset.base || "/").replace(/\/?$/, "/");
  const fillColour = host.dataset.colour || "#2BEBCB";
  const bgColour = host.dataset.bg || "transparent";

  // Build the DOM the bundle expects. The bundle mounts UI into
  // #parameter-manager-container and renders shapes into #mainSvg; we hide
  // its UI via CSS and only keep the SVG visible.
  host.innerHTML = `
    <div class="adc-pattern-bg-wrap">
      <div id="parameter-manager-container"></div>
      <svg id="mainSvg" width="1920" height="1080" viewBox="0 0 1920 1080"
           preserveAspectRatio="xMidYMid slice"></svg>
      <div id="candidates-container"></div>
    </div>
  `;

  // Inject a stylesheet to (a) hide the bundle's UI panels and (b) place the
  // SVG as a fixed-position background that doesn't block clicks on adc_impact.
  const css = document.createElement("style");
  css.textContent = `
    #pattern-bg-host {
      position: fixed; inset: 0; z-index: 0;
      pointer-events: none; overflow: hidden;
    }
    .adc-pattern-bg-wrap { position: relative; width: 100%; height: 100%; }
    #pattern-bg-host #mainSvg {
      position: absolute; inset: 0;
      width: 100% !important; height: 100% !important;
      aspect-ratio: auto !important;
      background: ${bgColour} !important;
      opacity: 1;
    }
    /* Hide everything the bundle injects except the SVG we care about. */
    #pattern-bg-host #parameter-manager-container,
    #pattern-bg-host #candidates-container { display: none !important; }
    /* The bundle also mounts portal content at body level — keep that hidden. */
    body > .candidates-container,
    body > [data-pattern-bundle-portal] { display: none !important; }
  `;
  document.head.appendChild(css);

  // The bundle's own stylesheet. We need it for the renderer's internal SVG
  // positioning but the UI rules inside are scoped to the bundle's React
  // components and don't leak.
  const bundleCss = document.createElement("link");
  bundleCss.rel = "stylesheet";
  bundleCss.href = `${base}assets/main-C6EhI6x7.css`;
  document.head.appendChild(bundleCss);

  // ---------------------------------------------------------------------
  // Fetch interceptor — same trick as the pattern-site's src/main.js:
  // synthesize a /generate response from a random cache.json entry so the
  // bundle never actually hits the backend.
  // ---------------------------------------------------------------------
  let cachePromise = null;
  function loadCache() {
    if (!cachePromise) {
      cachePromise = fetch(`${base}cache.json`)
        .then((r) => (r.ok ? r.json() : []))
        .catch(() => []);
    }
    return cachePromise;
  }

  let lastCandidate = null;
  const jsonResponse = (obj, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { "content-type": "application/json" },
    });

  const isGenerate = (url) => /\/generate(\?|$)/.test(url);
  const isHealth = (url) => /\/health(\?|$)/.test(url);
  const origFetch = window.fetch.bind(window);

  window.fetch = async function (input, init) {
    const url = typeof input === "string" ? input : (input && input.url) || "";
    if (isHealth(url)) return jsonResponse({ status: "healthy" });
    if (isGenerate(url)) {
      const cache = await loadCache();
      if (!cache.length) return jsonResponse({ patterns: {} }, 503);
      const entry = cache[Math.floor(Math.random() * cache.length)];
      lastCandidate = {
        id: entry.patternId,
        config: entry.patternConfig,
        pattern_tag: entry.patternTag,
      };
      return jsonResponse({
        patterns: {
          [entry.patternId]: {
            pattern_tag: entry.patternTag,
            pattern_config: entry.patternConfig,
          },
        },
      });
    }
    return origFetch(input, init);
  };

  // Swallow the bundle's "beforeunload" prompt (only fires on candidate UI).
  const origAEL = window.addEventListener.bind(window);
  window.addEventListener = function (type, listener, options) {
    if (type === "beforeunload") return;
    return origAEL(type, listener, options);
  };

  // Swallow preload-link 404s the bundle's preloader emits.
  window.addEventListener(
    "vite:preloadError",
    (e) => e.preventDefault(),
    true,
  );

  // ---------------------------------------------------------------------
  // SVG watcher — bundle resets size/aspect-ratio on every redraw; we
  // force it back to fullscreen cover. Same approach as the original loader.
  // ---------------------------------------------------------------------
  function forceFullscreenCover(svg) {
    if (!svg) return;
    svg.style.setProperty("aspect-ratio", "auto", "important");
    svg.style.setProperty("width", "100%", "important");
    svg.style.setProperty("height", "100%", "important");
    svg.style.setProperty("background", bgColour, "important");
    if (svg.getAttribute("preserveAspectRatio") !== "xMidYMid slice") {
      svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    }
  }

  function installSvgWatcher() {
    const svg = document.getElementById("mainSvg");
    if (!svg) return;
    forceFullscreenCover(svg);
    new MutationObserver(() => forceFullscreenCover(svg)).observe(svg, {
      attributes: true,
      attributeFilter: ["style", "preserveAspectRatio", "width", "height"],
    });
  }

  // ---------------------------------------------------------------------
  // Recolour — bundle paints shapes with its own fillColor; we override
  // every fill attribute after each redraw to the chosen ADC colour.
  // ---------------------------------------------------------------------
  function recolourSvg() {
    const svg = document.getElementById("mainSvg");
    if (!svg) return;
    svg.querySelectorAll("[fill]").forEach((el) => {
      if (el.tagName.toLowerCase() === "g") return;
      if (el.getAttribute("fill") === "none") return;
      el.setAttribute("fill", fillColour);
    });
  }

  function installSvgChildWatcher() {
    const svg = document.getElementById("mainSvg");
    if (!svg) return;
    new MutationObserver(() => {
      if (svg.dataset.recolourPending === "1") return;
      svg.dataset.recolourPending = "1";
      requestAnimationFrame(() => {
        svg.dataset.recolourPending = "0";
        recolourSvg();
      });
    }).observe(svg, { childList: true, subtree: true });
  }

  // ---------------------------------------------------------------------
  // Boot the bundle. We can't put these in <script src=> directly because
  // the bundle uses dynamic imports relative to its own URL.
  // ---------------------------------------------------------------------
  for (const dep of ["textToParams-Bwwq_J7M.js", "SvgMetadata-B62NTUa0.js"]) {
    const l = document.createElement("link");
    l.rel = "modulepreload";
    l.crossOrigin = "anonymous";
    l.href = `${base}assets/${dep}`;
    document.head.appendChild(l);
  }
  const bundleScript = document.createElement("script");
  bundleScript.type = "module";
  bundleScript.crossOrigin = "anonymous";
  bundleScript.src = `${base}assets/main-Bc2bcQzX.js`;
  document.head.appendChild(bundleScript);

  // ---------------------------------------------------------------------
  // Auto-generate — same pattern as the pattern-site:
  //   1. wait for bundle's React UI to mount (textarea + Generate button)
  //   2. set a random prompt
  //   3. click Generate
  // Fetch interceptor turns the resulting /generate into a cache pick.
  // ---------------------------------------------------------------------
  function reactSetValue(el, value) {
    const proto =
      el instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(proto, "value").set;
    setter.call(el, value);
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function waitFor(predicate, { timeoutMs = 10000, intervalMs = 80 } = {}) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const tick = () => {
        let r;
        try { r = predicate(); } catch { r = null; }
        if (r) return resolve(r);
        if (Date.now() - start > timeoutMs) return reject(new Error("timeout"));
        setTimeout(tick, intervalMs);
      };
      tick();
    });
  }

  function findPromptInput() {
    return (
      document.getElementById("pattern-input") ||
      document.querySelector('textarea[placeholder*="context" i]') ||
      document.querySelector('textarea[placeholder*="describe" i]')
    );
  }
  function findGenerateButton() {
    for (const b of document.querySelectorAll("button")) {
      const txt = (b.textContent || "").trim().toLowerCase();
      if (!txt.startsWith("generate")) continue;
      if (txt === "pattern generated") continue;
      if (!b.disabled) return b;
    }
    return null;
  }

  const PROMPTS = [
    "ocean", "signal", "silk", "fracture", "pulse",
    "aurora", "tundra", "glass", "glow", "syntax",
  ];

  async function autoGenerate() {
    installSvgWatcher();
    installSvgChildWatcher();
    let input;
    try { input = await waitFor(findPromptInput, { timeoutMs: 15000 }); }
    catch {
      console.warn("[pattern-bg] prompt input never appeared — bundle failed to mount");
      return;
    }
    reactSetValue(input, PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
    await new Promise((r) => setTimeout(r, 60));
    let button;
    try {
      button = await waitFor(() => {
        const b = findGenerateButton();
        return b && !b.disabled ? b : null;
      }, { timeoutMs: 5000 });
    } catch {
      console.warn("[pattern-bg] generate button never enabled");
      return;
    }
    button.click();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(autoGenerate, 50));
  } else {
    setTimeout(autoGenerate, 50);
  }
})();
