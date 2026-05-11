import {d as a, W as u, H as c} from "./textToParams-Bwwq_J7M.js";
import {p as g, d as l, a as b} from "./SvgMetadata-B62NTUa0.js";
class m {
    constructor() {
        this.svg = document.getElementById("mainSvg"),
        this.svgElements = [],
        this.setupSvg(),
        this.setupResizeHandler()
    }
    setupSvg() {
        if (!this.svg) {
            a.error("SVG element not found");
            return
        }
        a.debug("Setting up SVG with dimensions:", u, c),
        this.svg.setAttribute("width", u),
        this.svg.setAttribute("height", c),
        this.svg.setAttribute("viewBox", `0 0 ${u} ${c}`),
        this.svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        const t = u / c;
        this.svg.style.aspectRatio = `${t}`
    }
    setupCanvasBorder() {
        a.debug("Setting up canvas border..."),
        this.svg || (this.svg = document.getElementById("mainSvg"),
        a.debug("Re-fetched SVG element:", !!this.svg));
        let t = document.querySelector(".canvas-border-outline");
        if (t)
            a.debug("Border container already exists, updating dimensions");
        else {
            a.debug("Creating new canvas border container"),
            t = document.createElement("div"),
            t.className = "canvas-border-outline";
            const e = document.createElement("div");
            e.className = "canvas-border-frame";
            const s = document.querySelector(".canvas-wrapper");
            if (a.debug("Canvas wrapper found:", !!s),
            a.debug("SVG element found:", !!this.svg),
            s && this.svg)
                a.debug("Inserting border container into DOM"),
                s.insertBefore(t, this.svg),
                t.appendChild(e),
                e.appendChild(this.svg),
                a.debug("Border setup complete!");
            else {
                a.debugWarn("Cannot create border: missing canvas wrapper or SVG element"),
                setTimeout( () => {
                    a.debug("Retrying border setup..."),
                    this.setupCanvasBorder()
                }
                , 100);
                return
            }
        }
        this.updateCanvasBorderInfo()
    }
    ensureBorderVisible() {
        a.debug("Ensuring border is visible..."),
        this.setupCanvasBorder()
    }
    getPixelSizeForCurrentSetting() {
        const t = g.canvasSize || "Square (1:1)"
          , e = l[t];
        return e || (a.debugWarn(`No pixel size found for "${t}", using default`),
        l["Square (1:1)"])
    }
    clear() {
        this.svg.innerHTML = "",
        this.svgElements = [],
        this.setupClipping(),
        this.svg.classList.remove("has-content"),
        this.svg.style.background = ""
    }
    setupClipping() {
        const t = document.createElementNS("http://www.w3.org/2000/svg", "defs")
          , e = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        e.setAttribute("id", "canvas-bounds");
        const s = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        s.setAttribute("x", "0"),
        s.setAttribute("y", "0"),
        s.setAttribute("width", u),
        s.setAttribute("height", c),
        e.appendChild(s),
        t.appendChild(e),
        this.svg.appendChild(t);
        const i = document.createElementNS("http://www.w3.org/2000/svg", "g");
        i.setAttribute("clip-path", "url(#canvas-bounds)"),
        i.setAttribute("id", "main-content"),
        this.svg.appendChild(i)
    }
    setBackground(t) {
        this.svg.style.background = t
    }
    addElement(t) {
        this.svgElements.push(t);
        const e = this.svg.getElementById("main-content");
        if (e ? e.appendChild(t) : this.svg.appendChild(t),
        this.svgElements.length > 0) {
            this.svg.classList.add("has-content");
            const i = (g.fillColor || "").toUpperCase() === "#FFFFFF" ? "#000000" : "#ffffff";
            this.svg.style.background = i
        }
    }
    createRect(t, e, s, i, r="#000") {
        const o = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        return o.setAttribute("x", t),
        o.setAttribute("y", e),
        o.setAttribute("width", s),
        o.setAttribute("height", i),
        o.setAttribute("fill", r),
        o
    }
    createCircle(t, e, s, i="#000") {
        const r = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        return r.setAttribute("cx", t),
        r.setAttribute("cy", e),
        r.setAttribute("r", s),
        r.setAttribute("fill", i),
        r
    }
    createEllipse(t, e, s, i, r="#000") {
        const o = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        return o.setAttribute("cx", t),
        o.setAttribute("cy", e),
        o.setAttribute("rx", s),
        o.setAttribute("ry", i),
        o.setAttribute("fill", r),
        o
    }
    createPolygon(t, e="#000") {
        const s = document.createElementNS("http://www.w3.org/2000/svg", "polygon")
          , i = t.map(r => `${r.x},${r.y}`).join(" ");
        return s.setAttribute("points", i),
        s.setAttribute("fill", e),
        s
    }
    createPath(t, e="#000") {
        const s = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return s.setAttribute("d", t),
        s.setAttribute("fill", e),
        s
    }
    getSvgString() {
        const t = this.svg.style.filter
          , e = this.svg.style.transition
          , s = this.svg.style.background;
        this.svg.style.filter = "",
        this.svg.style.transition = "",
        this.svg.style.background = "";
        const i = new window.XMLSerializer().serializeToString(this.svg);
        this.svg.style.filter = t,
        this.svg.style.transition = e,
        this.svg.style.background = s;
        const r = b.generateMetadataComment()
          , o = i.indexOf(">");
        if (o !== -1) {
            const n = i.substring(0, o + 1)
              , d = i.substring(o + 1);
            return n + `
` + r + `
` + d
        }
        return r + `
` + i
    }
    updateDimensions(t, e) {
        a.debug("Updating SVG dimensions to:", t, e),
        this.svg.setAttribute("width", t),
        this.svg.setAttribute("height", e),
        this.svg.setAttribute("viewBox", `0 0 ${t} ${e}`),
        this.svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        const s = t / e;
        this.svg.style.aspectRatio = `${s}`
    }
    updateCanvasBorderInfo() {}
    setupResizeHandler() {
        let t;
        window.addEventListener("resize", () => {
            clearTimeout(t),
            t = setTimeout( () => {
                this.handleResize()
            }
            , 150)
        }
        )
    }
    handleResize() {
        this.svg && this.svg.style.aspectRatio && (this.svg.style.display = "none",
        this.svg.offsetHeight,
        this.svg.style.display = "block")
    }
    createDebugRect(t, e, s, i, r="#333", o=1) {
        const n = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        return n.setAttribute("x", t),
        n.setAttribute("y", e),
        n.setAttribute("width", s),
        n.setAttribute("height", i),
        n.setAttribute("fill", "none"),
        n.setAttribute("stroke", r),
        n.setAttribute("stroke-width", o),
        n.setAttribute("opacity", "0.7"),
        n.setAttribute("class", "debug-element"),
        n
    }
    createDebugCircle(t, e, s, i="#333") {
        const r = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        return r.setAttribute("cx", t),
        r.setAttribute("cy", e),
        r.setAttribute("r", s),
        r.setAttribute("fill", i),
        r.setAttribute("opacity", "0.7"),
        r.setAttribute("class", "debug-element"),
        r
    }
    createDebugLine(t, e, s, i, r="#333", o=1) {
        const n = document.createElementNS("http://www.w3.org/2000/svg", "line");
        return n.setAttribute("x1", t),
        n.setAttribute("y1", e),
        n.setAttribute("x2", s),
        n.setAttribute("y2", i),
        n.setAttribute("stroke", r),
        n.setAttribute("stroke-width", o),
        n.setAttribute("opacity", "0.7"),
        n.setAttribute("class", "debug-element"),
        n
    }
    createDebugGroup(t) {
        const e = document.createElementNS("http://www.w3.org/2000/svg", "g");
        return e.setAttribute("id", t),
        e.setAttribute("class", "debug-group"),
        e
    }
    addDebugElement(t) {
        this.svg.appendChild(t)
    }
    clearDebugElements() {
        this.svg.querySelectorAll(".debug-element, .debug-group").forEach(e => e.remove())
    }
}
export {m as SvgMainRenderer};
