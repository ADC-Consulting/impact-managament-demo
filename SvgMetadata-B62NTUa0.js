import {a as S, x as P, y as z, d as m, F as C, z as p} from "./textToParams-Bwwq_J7M.js";
const y = {
    "Square (1:1)": 1,
    "Portrait (3:4)": 3 / 4,
    "Portrait (9:16)": 9 / 16,
    "Portrait A4 (1:√2)": 1 / Math.sqrt(2),
    "Landscape (4:3)": 4 / 3,
    "Landscape (16:9)": 16 / 9,
    "Landscape A4 (√2:1)": Math.sqrt(2) / 1,
    "Ultrawide (21:9)": 21 / 9,
    "Business Card (3.5:2)": 3.5 / 2,
    Custom: "custom"
}
  , I = {
    "Square (1:1)": {
        width: 1080,
        height: 1080
    },
    "Portrait (3:4)": {
        width: 1200,
        height: 1600
    },
    "Portrait (9:16)": {
        width: 1080,
        height: 1920
    },
    "Portrait A4 (1:√2)": {
        width: 2480,
        height: 3508
    },
    "Landscape (4:3)": {
        width: 1600,
        height: 1200
    },
    "Landscape (16:9)": {
        width: 1920,
        height: 1080
    },
    "Landscape A4 (√2:1)": {
        width: 3508,
        height: 2480
    },
    "Ultrawide (21:9)": {
        width: 2560,
        height: 1080
    },
    "Business Card (3.5:2)": {
        width: 1050,
        height: 600
    },
    Custom: {
        width: 1080,
        height: 1080
    }
}
  , A = {
    "Wide (21:9)": "Ultrawide (21:9)",
    "Slide Deck (16:9)": "Landscape (16:9)",
    "Instagram Story (9:16)": "Portrait (9:16)",
    "Instagram Post (1:1)": "Square (1:1)",
    "LinkedIn Post (1:1)": "Square (1:1)",
    "LinkedIn Landscape (16:9)": "Landscape (16:9)",
    "Desktop 1080p (16:9)": "Landscape (16:9)",
    "Desktop 4K (16:9)": "Landscape (16:9)",
    "Tablet (4:3)": "Landscape (4:3)",
    "Standard Video (16:9)": "Landscape (16:9)",
    "Vertical Video (9:16)": "Portrait (9:16)",
    "Thumbnail (16:9)": "Landscape (16:9)",
    "A4 Portrait (1:√2)": "Portrait A4 (1:√2)",
    "A4 Landscape (√2:1)": "Landscape A4 (√2:1)",
    "Business Card (3.5:2)": "Business Card (3.5:2)"
}
  , V = (n="Square (1:1)") => A[n] || n
  , M = {}
  , L = ["cols", "sizingQuadtreePoints"]
  , x = (n, e, t={}) => {
    const o = n.debug?.ignoreWeights ?? !1
      , s = {};
    return Object.entries(n).forEach( ([r,h]) => {
        Object.entries(h).forEach( ([a,i]) => {
            const d = t.overrides?.[r]?.[a] ?? i
              , c = a;
            if (typeof d == "object" && !Array.isArray(d) && d.values == null && d.weighted == null && d.min == null && d.default == null)
                s[c] = d;
            else {
                const f = L.includes(a) && C.weightedGridScaleEnabled;
                s[c] = z(d, {
                    randomize: e,
                    ignoreWeights: f ? !1 : o
                })
            }
        }
        )
    }
    ),
    s
}
  , k = n => (Object.defineProperty(n, "fillColor", {
    configurable: !0,
    enumerable: !0,
    get() {
        return S.fillColor || "#000000"
    },
    set(e) {
        S.fillColor = e
    }
}),
n)
  , v = () => typeof window > "u" || typeof window.URLSearchParams > "u" ? new globalThis.URLSearchParams("") : new window.URLSearchParams(window.location.search)
  , G = (n={}) => {
    const e = v()
      , t = n.canvas?.hasCustomMask ?? e.has("mask")
      , o = n.mask?.forceNone ?? (e.has("nomask") || t)
      , s = n.legacy?.debugQuadtree ?? e.has("debugQuadtree");
    return {
        hasCustomMask: t,
        shouldDisableMask: o,
        debugQuadtree: s
    }
}
  , H = (n, e) => (e.hasCustomMask && (n.canvasSize = "Portrait A4 (1:√2)"),
e.shouldDisableMask && (n.maskMode = "none"),
e.debugQuadtree && (n.debugQuadtree = !0),
n)
  , b = ({randomize: n=!1, overrides: e={}}={}) => {
    const t = G(e)
      , o = x(P, n, {
        overrides: D(M, e)
    });
    return H(o, t)
}
  , D = (n, e) => {
    const t = {
        ...n
    };
    return Object.entries(e).forEach( ([o,s]) => {
        t[o] = {
            ...t[o] || {},
            ...s
        }
    }
    ),
    t
}
  , l = k(b())
  , $ = () => {
    if (l.canvasSize === "Custom")
        return l.customRatio || 1;
    const n = y[l.canvasSize];
    return n === void 0 ? (m.warn(`Unknown canvas size preset: "${l.canvasSize}", defaulting to square (1:1)`),
    1) : n
}
  , T = () => {
    const n = {
        canvas: {
            canvasSize: l.canvasSize,
            customRatio: l.customRatio
        }
    }
      , e = b({
        randomize: !0,
        overrides: n
    });
    Object.assign(l, e),
    m.debug("Parameters after randomization:", l),
    m.debug("Parameters randomized with seed-based values")
}
  , E = /^(0x)?[0-9a-fA-F]{64}$/
  , w = () => {
    const n = new Uint8Array(32);
    if (typeof window < "u" && window.crypto?.getRandomValues)
        window.crypto.getRandomValues(n);
    else
        for (let e = 0; e < n.length; e += 1)
            n[e] = Math.floor(Math.random() * 256);
    return "0x" + Array.from(n).map(e => e.toString(16).padStart(2, "0")).join("")
}
;
class O {
    constructor() {
        this.currentSeed = null,
        this.currentSeedHash = null,
        this.hasGenerated = !1,
        this.debugMode = !1,
        this.serverSeedContainer = null
    }
    contextualSeedToHash(e) {
        if (!e || e.trim() === "")
            return null;
        let t = e.toLowerCase().trim()
          , o = ""
          , s = 2166136261
          , r = 16777619
          , h = 2654435769;
        for (let a = 0; a < t.length; a++) {
            const i = t.charCodeAt(a);
            s = (s ^ i) * r,
            r = r * 16777619 >>> 0,
            h = (h ^ i * (a + 1)) + 2654435769
        }
        for (let a = 0; a < 64; a++) {
            const i = s + r + h + a * t.length >>> 0;
            s = (s << 5 ^ s >>> 27 ^ i) >>> 0,
            r = (r << 3 ^ r >>> 29 ^ i * 31) >>> 0,
            h = (h << 7 ^ h >>> 25 ^ i * 37) >>> 0;
            const u = (i & 15).toString(16);
            o += u
        }
        return "0x" + o
    }
    updateGlobalHash(e) {
        const t = typeof e == "string" ? e.trim() : "";
        if (!t)
            return !1;
        const s = this.normalizeHexSeed(t) ?? this.contextualSeedToHash(t);
        if (!s)
            return !1;
        const r = this.ensureGlobalSeedContainer();
        return r.hash = s,
        p(s),
        this.currentSeed = t,
        this.currentSeedHash = s,
        !0
    }
    hasSeed() {
        return this.debugMode ? !0 : !!this.currentSeedHash
    }
    markGenerated() {
        this.hasGenerated = !0
    }
    isGenerated() {
        return this.hasGenerated && this.hasSeed()
    }
    resetGeneration() {
        this.hasGenerated = !1
    }
    getCurrentSeed() {
        return this.currentSeed || this.currentSeedHash
    }
    getCurrentSeedHash() {
        return this.currentSeedHash
    }
    clearSeed() {
        this.currentSeed = null,
        this.currentSeedHash = null,
        this.hasGenerated = !1
    }
    ensureGlobalSeedContainer() {
        return typeof window > "u" ? (this.serverSeedContainer || (this.serverSeedContainer = {
            hash: w(),
            seedId: "0"
        }),
        this.serverSeedContainer) : ((!window.patternSeed || !this.isHexSeed(window.patternSeed.hash)) && (window.patternSeed = {
            hash: w(),
            seedId: window.patternSeed?.seedId ?? "0"
        }),
        window.patternSeed)
    }
    initializeFromExistingSeed() {
        if (typeof window > "u")
            return;
        const t = this.ensureGlobalSeedContainer().hash;
        this.isHexSeed(t) && (p(t),
        this.currentSeed = t,
        this.currentSeedHash = t)
    }
    isHexSeed(e) {
        return typeof e != "string" ? !1 : E.test(e.trim())
    }
    normalizeHexSeed(e) {
        if (!this.isHexSeed(e))
            return null;
        const t = e.trim();
        return t.startsWith("0x") ? t : `0x${t}`
    }
}
const R = new O;
class U {
    constructor() {
        this.downloadManager = null
    }
    setDownloadManager(e) {
        this.downloadManager = e
    }
    generateMetadataComment() {
        const e = ["Generated by ADC Pattern Generator", "=====================================", ""]
          , o = new Date().toLocaleString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: !1
        });
        e.push(`Generated: ${o}`),
        e.push("");
        const s = this.downloadManager?.generatedSeed || R.getCurrentSeed();
        s && (e.push(`Seed: "${s}"`),
        e.push(""));
        const r = this.downloadManager?.getConfirmedUnifiedParams();
        if (r && Object.keys(r).length > 0 && (e.push("Unified Parameters:"),
        this.formatUnifiedParams(e, r),
        e.push("")),
        typeof window < "u" && window.zoomManager) {
            const a = window.zoomManager.getZoom();
            a > 0 && (e.push(`Zoom level: ${Math.round(a * 100)}`),
            e.push(""))
        }
        return e.push("To reproduce this pattern, use the same seed"),
        e.push("and unified parameters shown above."),
        `<!-- 
    ${e.join(`
    `)}
-->`
    }
    formatUnifiedParams(e, t) {
        const o = {
            global: ["gridScale", "randomPickThreshold", "shapeOffset", "minSize", "maxSize", "randomSizingThreshold"],
            distribution: ["noiseScale", "warpStrength", "distributionOffset", "distributionIntensity"],
            sizing: ["sizingNoiseScale", "sizingWarpStrength", "sizingOffset", "sizingIntensity", "sizingQuadtreeIntensity"],
            mask: ["maskThreshold", "maskStrength"]
        }
          , s = {
            global: "Global",
            distribution: "Distribution",
            sizing: "Sizing",
            mask: "Mask"
        }
          , r = new Set(["distributionMode", "sizingMode", "maskMode", "sizingQuadtreeDistribution"])
          , h = new Set;
        for (const [i,u] of Object.entries(o)) {
            const d = u.filter(c => c in t);
            if (d.length !== 0) {
                e.push(`  ${s[i]}:`);
                for (const c of d) {
                    const g = t[c]
                      , f = typeof g == "number" ? this.formatNumber(g) : g;
                    e.push(`    ${c}: ${f}`),
                    h.add(c)
                }
            }
        }
        const a = Object.keys(t).filter(i => !h.has(i) && !r.has(i));
        if (a.length > 0) {
            e.push("  Other:");
            for (const i of a) {
                const u = t[i]
                  , d = typeof u == "number" ? this.formatNumber(u) : u;
                e.push(`    ${i}: ${d}`)
            }
        }
    }
    formatNumber(e) {
        return Number.isInteger(e) ? e.toString() : e.toFixed(4)
    }
}
const _ = new U;
export {_ as a, V as b, y as c, I as d, $ as g, l as p, T as r, R as s};
