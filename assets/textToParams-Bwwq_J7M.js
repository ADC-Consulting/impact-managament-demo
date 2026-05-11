const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/SvgMainRenderer-Cl6i8evs.js", "assets/SvgMetadata-B62NTUa0.js"]))) => i.map(i => d[i]);
(function() {
    const d = document.createElement("link").relList;
    if (d && d.supports && d.supports("modulepreload"))
        return;
    for (const O of document.querySelectorAll('link[rel="modulepreload"]'))
        o(O);
    new MutationObserver(O => {
        for (const _ of O)
            if (_.type === "childList")
                for (const B of _.addedNodes)
                    B.tagName === "LINK" && B.rel === "modulepreload" && o(B)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function g(O) {
        const _ = {};
        return O.integrity && (_.integrity = O.integrity),
        O.referrerPolicy && (_.referrerPolicy = O.referrerPolicy),
        O.crossOrigin === "use-credentials" ? _.credentials = "include" : O.crossOrigin === "anonymous" ? _.credentials = "omit" : _.credentials = "same-origin",
        _
    }
    function o(O) {
        if (O.ep)
            return;
        O.ep = !0;
        const _ = g(O);
        fetch(O.href, _)
    }
}
)();
let Bn = function(f=Math.random) {
    this.p = [...Array(256)].map(d => Qc(f() * 256)),
    this.pm = [...this.p, ...this.p]
};
const {floor: Qc, sqrt: Zd} = Math
  , Mc = (f, d, g) => f[0] * d + f[1] * g
  , Oc = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1], [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]];
Bn.prototype.noise = function(f, d) {
    const g = this.pm;
    let o, O, _, B = .5 * (Zd(3) - 1), V = (f + d) * B, N = Qc(f + V), p = Qc(d + V), j = (3 - Zd(3)) / 6, q = (N + p) * j, I = N - q, Yt = p - q, vt = f - I, bt = d - Yt, kt, Ct;
    vt > bt ? (kt = 1,
    Ct = 0) : (kt = 0,
    Ct = 1);
    let gl = vt - kt + j
      , Mt = bt - Ct + j
      , Lt = vt - 1 + 2 * j
      , $t = bt - 1 + 2 * j
      , Ht = N & 255
      , K = p & 255
      , Vt = g[Ht + g[K]] % 12
      , yl = g[Ht + kt + g[K + Ct]] % 12
      , ee = g[Ht + 1 + g[K + 1]] % 12
      , Kt = .5 - vt * vt - bt * bt;
    Kt < 0 ? o = 0 : (Kt *= Kt,
    o = Kt * Kt * Mc(Oc[Vt], vt, bt));
    let Ot = .5 - gl * gl - Mt * Mt;
    Ot < 0 ? O = 0 : (Ot *= Ot,
    O = Ot * Ot * Mc(Oc[yl], gl, Mt));
    let nl = .5 - Lt * Lt - $t * $t;
    return nl < 0 ? _ = 0 : (nl *= nl,
    _ = nl * nl * Mc(Oc[ee], Lt, $t)),
    70 * (o + O + _)
}
;
const Hh = "modulepreload"
  , qh = function(f) {
    try { return new URL("../" + f, import.meta.url).pathname } catch (e) { return "/" + f }
}
  , Ld = {}
  , Qh = function(d, g, o) {
    let O = Promise.resolve();
    if (g && g.length > 0) {
        let N = function(p) {
            return Promise.all(p.map(j => Promise.resolve(j).then(q => ({
                status: "fulfilled",
                value: q
            }), q => ({
                status: "rejected",
                reason: q
            }))))
        };
        document.getElementsByTagName("link");
        const B = document.querySelector("meta[property=csp-nonce]")
          , V = B?.nonce || B?.getAttribute("nonce");
        O = N(g.map(p => {
            if (p = qh(p),
            p in Ld)
                return;
            Ld[p] = !0;
            const j = p.endsWith(".css")
              , q = j ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${p}"]${q}`))
                return;
            const I = document.createElement("link");
            if (I.rel = j ? "stylesheet" : Hh,
            j || (I.as = "script"),
            I.crossOrigin = "",
            I.href = p,
            V && I.setAttribute("nonce", V),
            document.head.appendChild(I),
            j)
                return new Promise( (Yt, vt) => {
                    I.addEventListener("load", Yt),
                    I.addEventListener("error", () => vt(new Error(`Unable to preload CSS for ${p}`)))
                }
                )
        }
        ))
    }
    function _(B) {
        const V = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (V.payload = B,
        window.dispatchEvent(V),
        !V.defaultPrevented)
            throw B
    }
    return O.then(B => {
        for (const V of B || [])
            V.status === "rejected" && _(V.reason);
        return d().catch(_)
    }
    )
};
let _c = null, De = null, Dc = null, ei, ai, Bh, Yh, jh, St = {}, Ba = {};
const Kg = async f => {
    let {width: d, height: g, ratio: o} = f || {};
    Gh(d, g, o),
    xh();
    try {
        const {SvgMainRenderer: O} = await Qh(async () => {
            const {SvgMainRenderer: _} = await import("./SvgMainRenderer-Cl6i8evs.js");
            return {
                SvgMainRenderer: _
            }
        }
        , __vite__mapDeps([0, 1]));
        Dc || (Dc = new O),
        Dc.updateDimensions(ei, ai)
    } catch (O) {
        console.error("Failed to load SVG renderer:", O)
    }
    if (De = document.getElementById("defaultCanvas0") || document.createElement("canvas"),
    _c = De.getContext ? De.getContext("2d") : null,
    De.style && (De.style.width = `${ei}px`,
    De.style.height = `${ai}px`),
    _c) {
        const O = window.devicePixelRatio;
        De.width = Math.round(ei * O),
        De.height = Math.round(ai * O),
        _c.scale(O, O)
    }
}
  , Gh = (f=!1, d=!1, g=!1) => {
    let o = window.innerWidth / window.innerHeight
      , O = g || 1;
    St.b = 1e3,
    St.h = window.innerHeight,
    St.r = O,
    o > O ? St.w = O * St.h : (St.w = window.innerWidth,
    St.h = St.w / O),
    f && (St.w = f),
    d && (St.h = d),
    St.frameCount = 0,
    St.s = Math.min(St.w, St.h),
    St.m = St.s / St.b,
    [ei,ai,Bh,Yh,jh] = [St.w, St.h, St.m, St.w * .1, St.b]
}
  , Xh = (f=1) => {
    let d = {}
      , g = "0x";
    for (let o = 0; o < 64; o++)
        g += Math.floor(Math.random() * 16).toString(16);
    d.seedId = (f * 1e6 + Math.floor(Math.random() * 1e3)).toString(),
    Ba = {
        hash: g,
        seedId: d.seedId
    },
    window.patternSeed = Ba
}
  , xh = () => {
    const f = window.requestAnimationFrame;
    window.requestAnimationFrame = d => (St.frameCount++,
    f(d))
}
;
!window.patternSeed || !window.patternSeed.hash ? (Xh(),
console.log("Sketch uses seed:", Ba.hash)) : (Ba = window.patternSeed,
console.log("Using provided seed string:", Ba.hash));
let Ql = Uint32Array.from([0, 0, 0, 0].map( (f, d) => parseInt(Ba.hash.substr(d * 8 + 2, 8), 16)));
const wg = f => {
    Ql = Uint32Array.from([0, 0, 0, 0].map( (d, g) => parseInt(f.substr(g * 8 + 2, 8), 16)))
}
  , Bt = () => {
    let f, d = Ql[3];
    return Ql[3] = Ql[2],
    Ql[2] = Ql[1],
    Ql[1] = f = Ql[0],
    d ^= d << 11,
    d ^= d >>> 8,
    Ql[0] = d ^ f ^ f >>> 19,
    Ql[0] / 4294967296
}
  , Ya = (f, d) => f + (d - f) * Bt()
  , ni = (f, d) => Math.floor(Ya(f, d))
  , Bc = f => f[Math.floor(Bt() * f.length)]
  , Zh = f => {
    let d = [];
    for (let g in f)
        d = d.concat(new Array(f[g][1]).fill(f[g][0]));
    return Bc(d)
}
;
let Bl = {
    simplex: null,
    maskSimplex: null,
    distSimplex: null,
    gridSimplex: null,
    quadTree: null,
    quadTreePoints: [],
    colors: {
        white: "#ffffff",
        black: "#000000",
        palette: ["#A187FF", "#FF9BFC", "#2BEBCB", "#58EB81", "#FFF347", "#E5C574"]
    },
    fillColor: null,
    triangleOrientation: 0,
    emptyArea: "top-left",
    extensiveLogging: !1
};
function Lh() {
    Bl.simplex = new Bn(Bt),
    Bl.maskSimplex = new Bn(Bt),
    Bl.distSimplex = new Bn(Bt),
    Bl.gridSimplex = new Bn(Bt)
}
function Jg() {
    Lh(),
    Bl.quadTree = null,
    Bl.quadTreePoints = []
}
class Vh {
    enableExtensiveLogging() {
        Bl.extensiveLogging = !0,
        console.log("Extensive logging enabled. All debug messages will now be shown.")
    }
    disableExtensiveLogging() {
        Bl.extensiveLogging = !1,
        console.log("Extensive logging disabled. Only important messages will be shown.")
    }
    always(d, ...g) {
        console.log(d, ...g)
    }
    debug(d, ...g) {
        Bl.extensiveLogging && console.log(d, ...g)
    }
    debugWarn(d, ...g) {
        Bl.extensiveLogging && console.warn(d, ...g)
    }
    error(d, ...g) {
        console.error(d, ...g)
    }
    warn(d, ...g) {
        console.warn(d, ...g)
    }
}
let Yc = new Vh;
Yc.disableExtensiveLogging();
typeof window < "u" && (window.debugLogger = Yc);
const a0 = [["noise", 5], ["clustered", 5], ["sine", 4], ["organic", 4], ["grid", 3], ["random", 2], ["cross", 2]]
  , Kh = ["organic", "centered", "grid", "circular", "vertical", "horizontal", "sine", "cross", "fibonacci"];
function n0(f, d={}) {
    return {
        [`${f}ClusterMode`]: {
            default: "organic",
            weighted: Kh.map(g => [g, g === "sine" ? 1 : 10])
        },
        [`${f}ClusterCount`]: {
            default: d.count ?? 5,
            min: 3,
            max: 10,
            type: "int"
        },
        [`${f}ClusterRadius`]: {
            default: d.radius ?? 100,
            min: 60,
            max: 160,
            type: "int"
        },
        [`${f}ClusterSineFrequency`]: {
            default: 2,
            min: .5,
            max: 3
        },
        [`${f}ClusterSineAmplitude`]: {
            default: .3,
            min: .1,
            max: .5
        }
    }
}
const wh = {
    canvasSize: "Portrait A4 (1:√2)",
    customRatio: 1
}
  , Jh = {
    cols: {
        default: 20,
        type: "int",
        weightedRanges: [[{
            min: 10,
            max: 14
        }, 10], [{
            min: 14,
            max: 24
        }, 6], [{
            min: 24,
            max: 36
        }, 4]]
    },
    backgroundColor: "#ffffff",
    showGrid: !1,
    strictBounds: {
        default: !1,
        type: "chance",
        min: 0,
        max: 1,
        threshold: .9
    },
    minCellSize: 4
}
  , Wh = {
    distributionMode: {
        default: "noise",
        values: ["noise", "horizontal", "vertical", "radial", "angle", "quadtree"]
    },
    randomPickThreshold: {
        default: .4,
        min: .2,
        max: .8
    },
    shapeOffset: {
        default: 1,
        min: 0,
        max: 3,
        type: "int"
    },
    noiseScale: {
        default: .1,
        min: .03,
        max: .25
    },
    warpStrength: {
        default: .5,
        min: 0,
        max: 1
    },
    horizontalOffset: {
        default: 0,
        min: -.5,
        max: .5
    },
    verticalOffset: {
        default: 0,
        min: -.5,
        max: .5
    },
    angleOffset: {
        default: 0,
        min: -3.14,
        max: 3.14
    },
    radialScale: {
        default: 1,
        min: .5,
        max: 2
    }
}
  , kh = {
    distributionQuadtreePoints: {
        default: 900,
        min: 400,
        max: 1500,
        type: "int"
    },
    distributionQuadtreeSkipEmpty: !1,
    distributionQuadtreeDistribution: {
        default: "clustered",
        weighted: a0
    },
    distributionQuadtreeNoiseScale: {
        default: .1,
        min: .05,
        max: .2
    },
    distributionQuadtreeNoiseThreshold: {
        default: .5,
        min: .3,
        max: .7
    },
    ...n0("distributionQuadtree", {
        count: 6,
        radius: 120
    })
}
  , $h = {
    sizingMode: {
        default: "quadtree",
        weighted: [["quadtree", 15], ["noise", 7], ["random", 5], ["horizontal", 3], ["vertical", 3]]
    },
    minSize: {
        default: .55,
        min: .3,
        max: .8
    },
    maxSize: {
        default: 2.2,
        min: 1.8,
        max: 2.5
    },
    maxShapeSizePercent: 15,
    uniformSizing: !1,
    randomSizingEnabled: !0,
    randomSizingThreshold: {
        default: .6,
        min: .5,
        max: .8
    },
    sizingNoiseScale: {
        default: .1,
        min: .03,
        max: .25
    },
    sizingWarpStrength: {
        default: .5,
        min: 0,
        max: 1
    },
    sizingHorizontalOffset: {
        default: 0,
        min: -.5,
        max: .5
    },
    sizingVerticalOffset: {
        default: 0,
        min: -.5,
        max: .5
    },
    sizingAngleOffset: {
        default: 0,
        min: -3.14,
        max: 3.14
    },
    sizingRadialScale: {
        default: 1,
        min: .5,
        max: 2
    }
}
  , Fh = {
    sizingQuadtreePoints: {
        default: 1e3,
        type: "int",
        weightedRanges: [[{
            min: 100,
            max: 400
        }, 6], [{
            min: 400,
            max: 1200
        }, 12], [{
            min: 1200,
            max: 2500
        }, 6], [{
            min: 2500,
            max: 5e3
        }, 4]]
    },
    sizingQuadtreeSkipEmpty: !1,
    sizingQuadtreeDistribution: {
        default: "clustered",
        weighted: a0
    },
    sizingQuadtreeNoiseScale: {
        default: .1,
        min: .05,
        max: .2
    },
    sizingQuadtreeNoiseThreshold: {
        default: .4,
        min: .2,
        max: .6
    },
    ...n0("sizingQuadtree", {
        count: 5,
        radius: 90
    })
}
  , Ih = {
    maskMode: {
        default: "noise",
        weighted: [["noise", 12], ["flow", 8], ["fbm", 8], ["spiral", 6], ["ridged", 6], ["concentric", 2], ["none", 0]]
    },
    noiseMaskThreshold: {
        default: .5,
        min: .3,
        max: .65
    },
    noiseMaskWarpStrength: {
        default: .5,
        min: 0,
        max: 1
    }
}
  , Ph = {
    fbmScale: {
        default: .08,
        min: .03,
        max: .18
    },
    fbmOctaves: {
        default: 5,
        min: 3,
        max: 7,
        type: "int"
    },
    fbmPersistence: {
        default: .5,
        min: .25,
        max: .75
    },
    fbmLacunarity: {
        default: 2,
        min: 1.4,
        max: 2.8
    },
    fbmMaskThreshold: {
        default: .45,
        min: .35,
        max: .55
    }
}
  , tg = {
    flowScale: {
        default: .03,
        min: .015,
        max: .06
    },
    flowStrength: {
        default: .5,
        min: .3,
        max: .8
    },
    flowThreshold: {
        default: .5,
        min: .35,
        max: .65
    },
    flowLayers: {
        default: 3,
        min: 2,
        max: 5,
        type: "int"
    },
    flowDirection: {
        default: "horizontal",
        values: ["horizontal", "vertical", "diagonal"]
    }
}
  , lg = {
    spiralTightness: {
        default: .2,
        min: .15,
        max: .35
    },
    spiralArms: {
        default: 4,
        min: 2,
        max: 7,
        type: "int"
    },
    spiralNoise: {
        default: .25,
        min: .2,
        max: .5
    },
    spiralThreshold: {
        default: .25,
        min: .15,
        max: .5
    },
    spiralRotation: {
        default: 0,
        min: 0,
        max: 6.28
    }
}
  , eg = {
    concentricRingCount: {
        default: 6,
        min: 3,
        max: 10,
        type: "int"
    },
    concentricRingThickness: {
        default: .28,
        min: .1,
        max: .6
    },
    concentricRingSpacing: {
        default: .55,
        min: .2,
        max: .9
    },
    concentricOffsetX: {
        default: 0,
        min: -.25,
        max: .25
    },
    concentricOffsetY: {
        default: 0,
        min: -.25,
        max: .25
    }
}
  , ag = {
    ridgeScale: {
        default: .04,
        min: .03,
        max: .08
    },
    ridgeSharpness: {
        default: 2,
        min: 1.2,
        max: 3
    },
    ridgeOctaves: {
        default: 4,
        min: 2,
        max: 6,
        type: "int"
    },
    ridgeThreshold: {
        default: .45,
        min: .38,
        max: .65
    }
}
  , ng = {
    mergeEnabled: !0,
    smoothingEnabled: !0,
    smoothingRadius: 20,
    shapeCornerRadius: .15
}
  , ug = {
    debugQuadtree: !1,
    emptyArea: "none",
    ignoreWeights: !1
}
  , jc = {
    canvas: wh,
    grid: Jh,
    distribution: Wh,
    distributionQuadtree: kh,
    sizing: $h,
    sizingQuadtree: Fh,
    mask: Ih,
    fbm: Ph,
    flow: tg,
    spiral: lg,
    concentric: eg,
    ridged: ag,
    processing: ng,
    debug: ug
}
  , u0 = {
    ignoreWeights: !0,
    weightedGridScaleEnabled: !0,
    multiOutputEnabled: !0
}
  , ig = f => {
    if (f == null)
        return !1;
    if (f === "" || f === "1")
        return !0;
    const d = f.toLowerCase();
    return d === "true" || d === "yes" || d === "on"
}
  , li = f => {
    if (typeof window > "u")
        return !1;
    try {
        const d = new URLSearchParams(window.location.search);
        return d.has(f) ? ig(d.get(f)) : !1
    } catch (d) {
        return Yc.warn("Failed to parse feature flag override from URL", f, d),
        !1
    }
}
  , i0 = {
    uiGeneration: li("uigeneration"),
    ignoreWeights: u0.ignoreWeights,
    randomGeneration: li("randomGeneration"),
    singleOutput: li("singleOutput"),
    seedingData: li("seedingData")
}
  , fg = f => {
    if (f == null)
        return f;
    if (typeof f == "object") {
        if ("default"in f)
            return f.default;
        if (Array.isArray(f.values))
            return f.values[0];
        if (Array.isArray(f.weighted))
            return f.weighted[0]?.[0];
        if (f.type === "chance")
            return f.default ?? !1;
        if ("min"in f && "max"in f)
            return f.min
    }
    return f
}
  , f0 = () => i0.ignoreWeights
  , cg = (f, d=!1, g) => {
    if (g ?? f0()) {
        const B = f[Math.floor(Bt() * f.length)][0];
        return d ? ni(B.min, B.max) : Ya(B.min, B.max)
    }
    const o = f.reduce( (B, [,V]) => B + V, 0);
    let O = Bt() * o;
    for (const [B,V] of f)
        if (O -= V,
        O <= 0)
            return d ? ni(B.min, B.max) : Ya(B.min, B.max);
    const _ = f[f.length - 1][0];
    return d ? ni(_.min, _.max) : Ya(_.min, _.max)
}
  , sg = (f, {randomize: d=!0, ignoreWeights: g}={}) => {
    if (!d)
        return fg(f);
    if (f == null)
        return f;
    if (Array.isArray(f.values))
        return Bc(f.values);
    if (Array.isArray(f.weighted)) {
        if (g ?? f0()) {
            const o = f.weighted.filter( ([,O]) => O > 0).map( ([O]) => O);
            return Bc(o)
        }
        return Zh(f.weighted)
    }
    return Array.isArray(f.weightedRanges) ? cg(f.weightedRanges, f.type === "int", g) : typeof f == "object" && f.min != null && f.max != null ? f.type === "int" ? ni(f.min, f.max) : f.type === "chance" ? Ya(f.min, f.max) > (f.threshold ?? .5) : Ya(f.min, f.max) : f
}
;
var Uc = {
    exports: {}
}
  , Hn = {};
var Vd;
function og() {
    if (Vd)
        return Hn;
    Vd = 1;
    var f = Symbol.for("react.transitional.element")
      , d = Symbol.for("react.fragment");
    function g(o, O, _) {
        var B = null;
        if (_ !== void 0 && (B = "" + _),
        O.key !== void 0 && (B = "" + O.key),
        "key"in O) {
            _ = {};
            for (var V in O)
                V !== "key" && (_[V] = O[V])
        } else
            _ = O;
        return O = _.ref,
        {
            $$typeof: f,
            type: o,
            key: B,
            ref: O !== void 0 ? O : null,
            props: _
        }
    }
    return Hn.Fragment = d,
    Hn.jsx = g,
    Hn.jsxs = g,
    Hn
}
var Kd;
function rg() {
    return Kd || (Kd = 1,
    Uc.exports = og()),
    Uc.exports
}
var Wg = rg()
  , Nc = {
    exports: {}
}
  , qn = {}
  , Rc = {
    exports: {}
}
  , Cc = {};
var wd;
function dg() {
    return wd || (wd = 1,
    (function(f) {
        function d(T, D) {
            var G = T.length;
            T.push(D);
            t: for (; 0 < G; ) {
                var ct = G - 1 >>> 1
                  , dt = T[ct];
                if (0 < O(dt, D))
                    T[ct] = D,
                    T[G] = dt,
                    G = ct;
                else
                    break t
            }
        }
        function g(T) {
            return T.length === 0 ? null : T[0]
        }
        function o(T) {
            if (T.length === 0)
                return null;
            var D = T[0]
              , G = T.pop();
            if (G !== D) {
                T[0] = G;
                t: for (var ct = 0, dt = T.length, m = dt >>> 1; ct < m; ) {
                    var M = 2 * (ct + 1) - 1
                      , U = T[M]
                      , C = M + 1
                      , x = T[C];
                    if (0 > O(U, G))
                        C < dt && 0 > O(x, U) ? (T[ct] = x,
                        T[C] = G,
                        ct = C) : (T[ct] = U,
                        T[M] = G,
                        ct = M);
                    else if (C < dt && 0 > O(x, G))
                        T[ct] = x,
                        T[C] = G,
                        ct = C;
                    else
                        break t
                }
            }
            return D
        }
        function O(T, D) {
            var G = T.sortIndex - D.sortIndex;
            return G !== 0 ? G : T.id - D.id
        }
        if (f.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var _ = performance;
            f.unstable_now = function() {
                return _.now()
            }
        } else {
            var B = Date
              , V = B.now();
            f.unstable_now = function() {
                return B.now() - V
            }
        }
        var N = []
          , p = []
          , j = 1
          , q = null
          , I = 3
          , Yt = !1
          , vt = !1
          , bt = !1
          , kt = !1
          , Ct = typeof setTimeout == "function" ? setTimeout : null
          , gl = typeof clearTimeout == "function" ? clearTimeout : null
          , Mt = typeof setImmediate < "u" ? setImmediate : null;
        function Lt(T) {
            for (var D = g(p); D !== null; ) {
                if (D.callback === null)
                    o(p);
                else if (D.startTime <= T)
                    o(p),
                    D.sortIndex = D.expirationTime,
                    d(N, D);
                else
                    break;
                D = g(p)
            }
        }
        function $t(T) {
            if (bt = !1,
            Lt(T),
            !vt)
                if (g(N) !== null)
                    vt = !0,
                    Ht || (Ht = !0,
                    Ot());
                else {
                    var D = g(p);
                    D !== null && _l($t, D.startTime - T)
                }
        }
        var Ht = !1
          , K = -1
          , Vt = 5
          , yl = -1;
        function ee() {
            return kt ? !0 : !(f.unstable_now() - yl < Vt)
        }
        function Kt() {
            if (kt = !1,
            Ht) {
                var T = f.unstable_now();
                yl = T;
                var D = !0;
                try {
                    t: {
                        vt = !1,
                        bt && (bt = !1,
                        gl(K),
                        K = -1),
                        Yt = !0;
                        var G = I;
                        try {
                            l: {
                                for (Lt(T),
                                q = g(N); q !== null && !(q.expirationTime > T && ee()); ) {
                                    var ct = q.callback;
                                    if (typeof ct == "function") {
                                        q.callback = null,
                                        I = q.priorityLevel;
                                        var dt = ct(q.expirationTime <= T);
                                        if (T = f.unstable_now(),
                                        typeof dt == "function") {
                                            q.callback = dt,
                                            Lt(T),
                                            D = !0;
                                            break l
                                        }
                                        q === g(N) && o(N),
                                        Lt(T)
                                    } else
                                        o(N);
                                    q = g(N)
                                }
                                if (q !== null)
                                    D = !0;
                                else {
                                    var m = g(p);
                                    m !== null && _l($t, m.startTime - T),
                                    D = !1
                                }
                            }
                            break t
                        } finally {
                            q = null,
                            I = G,
                            Yt = !1
                        }
                        D = void 0
                    }
                } finally {
                    D ? Ot() : Ht = !1
                }
            }
        }
        var Ot;
        if (typeof Mt == "function")
            Ot = function() {
                Mt(Kt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var nl = new MessageChannel
              , Yl = nl.port2;
            nl.port1.onmessage = Kt,
            Ot = function() {
                Yl.postMessage(null)
            }
        } else
            Ot = function() {
                Ct(Kt, 0)
            }
            ;
        function _l(T, D) {
            K = Ct(function() {
                T(f.unstable_now())
            }, D)
        }
        f.unstable_IdlePriority = 5,
        f.unstable_ImmediatePriority = 1,
        f.unstable_LowPriority = 4,
        f.unstable_NormalPriority = 3,
        f.unstable_Profiling = null,
        f.unstable_UserBlockingPriority = 2,
        f.unstable_cancelCallback = function(T) {
            T.callback = null
        }
        ,
        f.unstable_forceFrameRate = function(T) {
            0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Vt = 0 < T ? Math.floor(1e3 / T) : 5
        }
        ,
        f.unstable_getCurrentPriorityLevel = function() {
            return I
        }
        ,
        f.unstable_next = function(T) {
            switch (I) {
            case 1:
            case 2:
            case 3:
                var D = 3;
                break;
            default:
                D = I
            }
            var G = I;
            I = D;
            try {
                return T()
            } finally {
                I = G
            }
        }
        ,
        f.unstable_requestPaint = function() {
            kt = !0
        }
        ,
        f.unstable_runWithPriority = function(T, D) {
            switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                T = 3
            }
            var G = I;
            I = T;
            try {
                return D()
            } finally {
                I = G
            }
        }
        ,
        f.unstable_scheduleCallback = function(T, D, G) {
            var ct = f.unstable_now();
            switch (typeof G == "object" && G !== null ? (G = G.delay,
            G = typeof G == "number" && 0 < G ? ct + G : ct) : G = ct,
            T) {
            case 1:
                var dt = -1;
                break;
            case 2:
                dt = 250;
                break;
            case 5:
                dt = 1073741823;
                break;
            case 4:
                dt = 1e4;
                break;
            default:
                dt = 5e3
            }
            return dt = G + dt,
            T = {
                id: j++,
                callback: D,
                priorityLevel: T,
                startTime: G,
                expirationTime: dt,
                sortIndex: -1
            },
            G > ct ? (T.sortIndex = G,
            d(p, T),
            g(N) === null && T === g(p) && (bt ? (gl(K),
            K = -1) : bt = !0,
            _l($t, G - ct))) : (T.sortIndex = dt,
            d(N, T),
            vt || Yt || (vt = !0,
            Ht || (Ht = !0,
            Ot()))),
            T
        }
        ,
        f.unstable_shouldYield = ee,
        f.unstable_wrapCallback = function(T) {
            var D = I;
            return function() {
                var G = I;
                I = D;
                try {
                    return T.apply(this, arguments)
                } finally {
                    I = G
                }
            }
        }
    }
    )(Cc)),
    Cc
}
var Jd;
function mg() {
    return Jd || (Jd = 1,
    Rc.exports = dg()),
    Rc.exports
}
var Hc = {
    exports: {}
}
  , X = {};
var Wd;
function hg() {
    if (Wd)
        return X;
    Wd = 1;
    var f = Symbol.for("react.transitional.element")
      , d = Symbol.for("react.portal")
      , g = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , O = Symbol.for("react.profiler")
      , _ = Symbol.for("react.consumer")
      , B = Symbol.for("react.context")
      , V = Symbol.for("react.forward_ref")
      , N = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , j = Symbol.for("react.lazy")
      , q = Symbol.for("react.activity")
      , I = Symbol.iterator;
    function Yt(m) {
        return m === null || typeof m != "object" ? null : (m = I && m[I] || m["@@iterator"],
        typeof m == "function" ? m : null)
    }
    var vt = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , bt = Object.assign
      , kt = {};
    function Ct(m, M, U) {
        this.props = m,
        this.context = M,
        this.refs = kt,
        this.updater = U || vt
    }
    Ct.prototype.isReactComponent = {},
    Ct.prototype.setState = function(m, M) {
        if (typeof m != "object" && typeof m != "function" && m != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, M, "setState")
    }
    ,
    Ct.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate")
    }
    ;
    function gl() {}
    gl.prototype = Ct.prototype;
    function Mt(m, M, U) {
        this.props = m,
        this.context = M,
        this.refs = kt,
        this.updater = U || vt
    }
    var Lt = Mt.prototype = new gl;
    Lt.constructor = Mt,
    bt(Lt, Ct.prototype),
    Lt.isPureReactComponent = !0;
    var $t = Array.isArray;
    function Ht() {}
    var K = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Vt = Object.prototype.hasOwnProperty;
    function yl(m, M, U) {
        var C = U.ref;
        return {
            $$typeof: f,
            type: m,
            key: M,
            ref: C !== void 0 ? C : null,
            props: U
        }
    }
    function ee(m, M) {
        return yl(m.type, M, m.props)
    }
    function Kt(m) {
        return typeof m == "object" && m !== null && m.$$typeof === f
    }
    function Ot(m) {
        var M = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + m.replace(/[=:]/g, function(U) {
            return M[U]
        })
    }
    var nl = /\/+/g;
    function Yl(m, M) {
        return typeof m == "object" && m !== null && m.key != null ? Ot("" + m.key) : M.toString(36)
    }
    function _l(m) {
        switch (m.status) {
        case "fulfilled":
            return m.value;
        case "rejected":
            throw m.reason;
        default:
            switch (typeof m.status == "string" ? m.then(Ht, Ht) : (m.status = "pending",
            m.then(function(M) {
                m.status === "pending" && (m.status = "fulfilled",
                m.value = M)
            }, function(M) {
                m.status === "pending" && (m.status = "rejected",
                m.reason = M)
            })),
            m.status) {
            case "fulfilled":
                return m.value;
            case "rejected":
                throw m.reason
            }
        }
        throw m
    }
    function T(m, M, U, C, x) {
        var J = typeof m;
        (J === "undefined" || J === "boolean") && (m = null);
        var ut = !1;
        if (m === null)
            ut = !0;
        else
            switch (J) {
            case "bigint":
            case "string":
            case "number":
                ut = !0;
                break;
            case "object":
                switch (m.$$typeof) {
                case f:
                case d:
                    ut = !0;
                    break;
                case j:
                    return ut = m._init,
                    T(ut(m._payload), M, U, C, x)
                }
            }
        if (ut)
            return x = x(m),
            ut = C === "" ? "." + Yl(m, 0) : C,
            $t(x) ? (U = "",
            ut != null && (U = ut.replace(nl, "$&/") + "/"),
            T(x, M, U, "", function(Ga) {
                return Ga
            })) : x != null && (Kt(x) && (x = ee(x, U + (x.key == null || m && m.key === x.key ? "" : ("" + x.key).replace(nl, "$&/") + "/") + ut)),
            M.push(x)),
            1;
        ut = 0;
        var Jt = C === "" ? "." : C + ":";
        if ($t(m))
            for (var pt = 0; pt < m.length; pt++)
                C = m[pt],
                J = Jt + Yl(C, pt),
                ut += T(C, M, U, J, x);
        else if (pt = Yt(m),
        typeof pt == "function")
            for (m = pt.call(m),
            pt = 0; !(C = m.next()).done; )
                C = C.value,
                J = Jt + Yl(C, pt++),
                ut += T(C, M, U, J, x);
        else if (J === "object") {
            if (typeof m.then == "function")
                return T(_l(m), M, U, C, x);
            throw M = String(m),
            Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ut
    }
    function D(m, M, U) {
        if (m == null)
            return m;
        var C = []
          , x = 0;
        return T(m, C, "", "", function(J) {
            return M.call(U, J, x++)
        }),
        C
    }
    function G(m) {
        if (m._status === -1) {
            var M = m._result;
            M = M(),
            M.then(function(U) {
                (m._status === 0 || m._status === -1) && (m._status = 1,
                m._result = U)
            }, function(U) {
                (m._status === 0 || m._status === -1) && (m._status = 2,
                m._result = U)
            }),
            m._status === -1 && (m._status = 0,
            m._result = M)
        }
        if (m._status === 1)
            return m._result.default;
        throw m._result
    }
    var ct = typeof reportError == "function" ? reportError : function(m) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var M = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
                error: m
            });
            if (!window.dispatchEvent(M))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", m);
            return
        }
        console.error(m)
    }
      , dt = {
        map: D,
        forEach: function(m, M, U) {
            D(m, function() {
                M.apply(this, arguments)
            }, U)
        },
        count: function(m) {
            var M = 0;
            return D(m, function() {
                M++
            }),
            M
        },
        toArray: function(m) {
            return D(m, function(M) {
                return M
            }) || []
        },
        only: function(m) {
            if (!Kt(m))
                throw Error("React.Children.only expected to receive a single React element child.");
            return m
        }
    };
    return X.Activity = q,
    X.Children = dt,
    X.Component = Ct,
    X.Fragment = g,
    X.Profiler = O,
    X.PureComponent = Mt,
    X.StrictMode = o,
    X.Suspense = N,
    X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K,
    X.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(m) {
            return K.H.useMemoCache(m)
        }
    },
    X.cache = function(m) {
        return function() {
            return m.apply(null, arguments)
        }
    }
    ,
    X.cacheSignal = function() {
        return null
    }
    ,
    X.cloneElement = function(m, M, U) {
        if (m == null)
            throw Error("The argument must be a React element, but you passed " + m + ".");
        var C = bt({}, m.props)
          , x = m.key;
        if (M != null)
            for (J in M.key !== void 0 && (x = "" + M.key),
            M)
                !Vt.call(M, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && M.ref === void 0 || (C[J] = M[J]);
        var J = arguments.length - 2;
        if (J === 1)
            C.children = U;
        else if (1 < J) {
            for (var ut = Array(J), Jt = 0; Jt < J; Jt++)
                ut[Jt] = arguments[Jt + 2];
            C.children = ut
        }
        return yl(m.type, x, C)
    }
    ,
    X.createContext = function(m) {
        return m = {
            $$typeof: B,
            _currentValue: m,
            _currentValue2: m,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        m.Provider = m,
        m.Consumer = {
            $$typeof: _,
            _context: m
        },
        m
    }
    ,
    X.createElement = function(m, M, U) {
        var C, x = {}, J = null;
        if (M != null)
            for (C in M.key !== void 0 && (J = "" + M.key),
            M)
                Vt.call(M, C) && C !== "key" && C !== "__self" && C !== "__source" && (x[C] = M[C]);
        var ut = arguments.length - 2;
        if (ut === 1)
            x.children = U;
        else if (1 < ut) {
            for (var Jt = Array(ut), pt = 0; pt < ut; pt++)
                Jt[pt] = arguments[pt + 2];
            x.children = Jt
        }
        if (m && m.defaultProps)
            for (C in ut = m.defaultProps,
            ut)
                x[C] === void 0 && (x[C] = ut[C]);
        return yl(m, J, x)
    }
    ,
    X.createRef = function() {
        return {
            current: null
        }
    }
    ,
    X.forwardRef = function(m) {
        return {
            $$typeof: V,
            render: m
        }
    }
    ,
    X.isValidElement = Kt,
    X.lazy = function(m) {
        return {
            $$typeof: j,
            _payload: {
                _status: -1,
                _result: m
            },
            _init: G
        }
    }
    ,
    X.memo = function(m, M) {
        return {
            $$typeof: p,
            type: m,
            compare: M === void 0 ? null : M
        }
    }
    ,
    X.startTransition = function(m) {
        var M = K.T
          , U = {};
        K.T = U;
        try {
            var C = m()
              , x = K.S;
            x !== null && x(U, C),
            typeof C == "object" && C !== null && typeof C.then == "function" && C.then(Ht, ct)
        } catch (J) {
            ct(J)
        } finally {
            M !== null && U.types !== null && (M.types = U.types),
            K.T = M
        }
    }
    ,
    X.unstable_useCacheRefresh = function() {
        return K.H.useCacheRefresh()
    }
    ,
    X.use = function(m) {
        return K.H.use(m)
    }
    ,
    X.useActionState = function(m, M, U) {
        return K.H.useActionState(m, M, U)
    }
    ,
    X.useCallback = function(m, M) {
        return K.H.useCallback(m, M)
    }
    ,
    X.useContext = function(m) {
        return K.H.useContext(m)
    }
    ,
    X.useDebugValue = function() {}
    ,
    X.useDeferredValue = function(m, M) {
        return K.H.useDeferredValue(m, M)
    }
    ,
    X.useEffect = function(m, M) {
        return K.H.useEffect(m, M)
    }
    ,
    X.useEffectEvent = function(m) {
        return K.H.useEffectEvent(m)
    }
    ,
    X.useId = function() {
        return K.H.useId()
    }
    ,
    X.useImperativeHandle = function(m, M, U) {
        return K.H.useImperativeHandle(m, M, U)
    }
    ,
    X.useInsertionEffect = function(m, M) {
        return K.H.useInsertionEffect(m, M)
    }
    ,
    X.useLayoutEffect = function(m, M) {
        return K.H.useLayoutEffect(m, M)
    }
    ,
    X.useMemo = function(m, M) {
        return K.H.useMemo(m, M)
    }
    ,
    X.useOptimistic = function(m, M) {
        return K.H.useOptimistic(m, M)
    }
    ,
    X.useReducer = function(m, M, U) {
        return K.H.useReducer(m, M, U)
    }
    ,
    X.useRef = function(m) {
        return K.H.useRef(m)
    }
    ,
    X.useState = function(m) {
        return K.H.useState(m)
    }
    ,
    X.useSyncExternalStore = function(m, M, U) {
        return K.H.useSyncExternalStore(m, M, U)
    }
    ,
    X.useTransition = function() {
        return K.H.useTransition()
    }
    ,
    X.version = "19.2.3",
    X
}
var kd;
function Gc() {
    return kd || (kd = 1,
    Hc.exports = hg()),
    Hc.exports
}
var qc = {
    exports: {}
}
  , wt = {};
var $d;
function gg() {
    if ($d)
        return wt;
    $d = 1;
    var f = Gc();
    function d(N) {
        var p = "https://react.dev/errors/" + N;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var j = 2; j < arguments.length; j++)
                p += "&args[]=" + encodeURIComponent(arguments[j])
        }
        return "Minified React error #" + N + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function g() {}
    var o = {
        d: {
            f: g,
            r: function() {
                throw Error(d(522))
            },
            D: g,
            C: g,
            L: g,
            m: g,
            X: g,
            S: g,
            M: g
        },
        p: 0,
        findDOMNode: null
    }
      , O = Symbol.for("react.portal");
    function _(N, p, j) {
        var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: O,
            key: q == null ? null : "" + q,
            children: N,
            containerInfo: p,
            implementation: j
        }
    }
    var B = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function V(N, p) {
        if (N === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    wt.createPortal = function(N, p) {
        var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(d(299));
        return _(N, p, null, j)
    }
    ,
    wt.flushSync = function(N) {
        var p = B.T
          , j = o.p;
        try {
            if (B.T = null,
            o.p = 2,
            N)
                return N()
        } finally {
            B.T = p,
            o.p = j,
            o.d.f()
        }
    }
    ,
    wt.preconnect = function(N, p) {
        typeof N == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        o.d.C(N, p))
    }
    ,
    wt.prefetchDNS = function(N) {
        typeof N == "string" && o.d.D(N)
    }
    ,
    wt.preinit = function(N, p) {
        if (typeof N == "string" && p && typeof p.as == "string") {
            var j = p.as
              , q = V(j, p.crossOrigin)
              , I = typeof p.integrity == "string" ? p.integrity : void 0
              , Yt = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            j === "style" ? o.d.S(N, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: q,
                integrity: I,
                fetchPriority: Yt
            }) : j === "script" && o.d.X(N, {
                crossOrigin: q,
                integrity: I,
                fetchPriority: Yt,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    wt.preinitModule = function(N, p) {
        if (typeof N == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var j = V(p.as, p.crossOrigin);
                    o.d.M(N, {
                        crossOrigin: j,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && o.d.M(N)
    }
    ,
    wt.preload = function(N, p) {
        if (typeof N == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var j = p.as
              , q = V(j, p.crossOrigin);
            o.d.L(N, j, {
                crossOrigin: q,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    wt.preloadModule = function(N, p) {
        if (typeof N == "string")
            if (p) {
                var j = V(p.as, p.crossOrigin);
                o.d.m(N, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: j,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                o.d.m(N)
    }
    ,
    wt.requestFormReset = function(N) {
        o.d.r(N)
    }
    ,
    wt.unstable_batchedUpdates = function(N, p) {
        return N(p)
    }
    ,
    wt.useFormState = function(N, p, j) {
        return B.H.useFormState(N, p, j)
    }
    ,
    wt.useFormStatus = function() {
        return B.H.useHostTransitionStatus()
    }
    ,
    wt.version = "19.2.3",
    wt
}
var Fd;
function yg() {
    if (Fd)
        return qc.exports;
    Fd = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (d) {
                console.error(d)
            }
    }
    return f(),
    qc.exports = gg(),
    qc.exports
}
var Id;
function vg() {
    if (Id)
        return qn;
    Id = 1;
    var f = mg()
      , d = Gc()
      , g = yg();
    function o(t) {
        var l = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            l += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++)
                l += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function O(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function _(t) {
        var l = t
          , e = t;
        if (t.alternate)
            for (; l.return; )
                l = l.return;
        else {
            t = l;
            do
                l = t,
                (l.flags & 4098) !== 0 && (e = l.return),
                t = l.return;
            while (t)
        }
        return l.tag === 3 ? e : null
    }
    function B(t) {
        if (t.tag === 13) {
            var l = t.memoizedState;
            if (l === null && (t = t.alternate,
            t !== null && (l = t.memoizedState)),
            l !== null)
                return l.dehydrated
        }
        return null
    }
    function V(t) {
        if (t.tag === 31) {
            var l = t.memoizedState;
            if (l === null && (t = t.alternate,
            t !== null && (l = t.memoizedState)),
            l !== null)
                return l.dehydrated
        }
        return null
    }
    function N(t) {
        if (_(t) !== t)
            throw Error(o(188))
    }
    function p(t) {
        var l = t.alternate;
        if (!l) {
            if (l = _(t),
            l === null)
                throw Error(o(188));
            return l !== t ? null : t
        }
        for (var e = t, a = l; ; ) {
            var n = e.return;
            if (n === null)
                break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return,
                a !== null) {
                    e = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u; ) {
                    if (u === e)
                        return N(n),
                        t;
                    if (u === a)
                        return N(n),
                        l;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (e.return !== a.return)
                e = n,
                a = u;
            else {
                for (var i = !1, c = n.child; c; ) {
                    if (c === e) {
                        i = !0,
                        e = n,
                        a = u;
                        break
                    }
                    if (c === a) {
                        i = !0,
                        a = n,
                        e = u;
                        break
                    }
                    c = c.sibling
                }
                if (!i) {
                    for (c = u.child; c; ) {
                        if (c === e) {
                            i = !0,
                            e = u,
                            a = n;
                            break
                        }
                        if (c === a) {
                            i = !0,
                            a = u,
                            e = n;
                            break
                        }
                        c = c.sibling
                    }
                    if (!i)
                        throw Error(o(189))
                }
            }
            if (e.alternate !== a)
                throw Error(o(190))
        }
        if (e.tag !== 3)
            throw Error(o(188));
        return e.stateNode.current === e ? t : l
    }
    function j(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (l = j(t),
            l !== null)
                return l;
            t = t.sibling
        }
        return null
    }
    var q = Object.assign
      , I = Symbol.for("react.element")
      , Yt = Symbol.for("react.transitional.element")
      , vt = Symbol.for("react.portal")
      , bt = Symbol.for("react.fragment")
      , kt = Symbol.for("react.strict_mode")
      , Ct = Symbol.for("react.profiler")
      , gl = Symbol.for("react.consumer")
      , Mt = Symbol.for("react.context")
      , Lt = Symbol.for("react.forward_ref")
      , $t = Symbol.for("react.suspense")
      , Ht = Symbol.for("react.suspense_list")
      , K = Symbol.for("react.memo")
      , Vt = Symbol.for("react.lazy")
      , yl = Symbol.for("react.activity")
      , ee = Symbol.for("react.memo_cache_sentinel")
      , Kt = Symbol.iterator;
    function Ot(t) {
        return t === null || typeof t != "object" ? null : (t = Kt && t[Kt] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var nl = Symbol.for("react.client.reference");
    function Yl(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === nl ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case bt:
            return "Fragment";
        case Ct:
            return "Profiler";
        case kt:
            return "StrictMode";
        case $t:
            return "Suspense";
        case Ht:
            return "SuspenseList";
        case yl:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case vt:
                return "Portal";
            case Mt:
                return t.displayName || "Context";
            case gl:
                return (t._context.displayName || "Context") + ".Consumer";
            case Lt:
                var l = t.render;
                return t = t.displayName,
                t || (t = l.displayName || l.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case K:
                return l = t.displayName || null,
                l !== null ? l : Yl(t.type) || "Memo";
            case Vt:
                l = t._payload,
                t = t._init;
                try {
                    return Yl(t(l))
                } catch {}
            }
        return null
    }
    var _l = Array.isArray
      , T = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , D = g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , G = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ct = []
      , dt = -1;
    function m(t) {
        return {
            current: t
        }
    }
    function M(t) {
        0 > dt || (t.current = ct[dt],
        ct[dt] = null,
        dt--)
    }
    function U(t, l) {
        dt++,
        ct[dt] = t.current,
        t.current = l
    }
    var C = m(null)
      , x = m(null)
      , J = m(null)
      , ut = m(null);
    function Jt(t, l) {
        switch (U(J, l),
        U(x, t),
        U(C, null),
        l.nodeType) {
        case 9:
        case 11:
            t = (t = l.documentElement) && (t = t.namespaceURI) ? rd(t) : 0;
            break;
        default:
            if (t = l.tagName,
            l = l.namespaceURI)
                l = rd(l),
                t = dd(l, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        M(C),
        U(C, t)
    }
    function pt() {
        M(C),
        M(x),
        M(J)
    }
    function Ga(t) {
        t.memoizedState !== null && U(ut, t);
        var l = C.current
          , e = dd(l, t.type);
        l !== e && (U(x, t),
        U(C, e))
    }
    function Yn(t) {
        x.current === t && (M(C),
        M(x)),
        ut.current === t && (M(ut),
        Un._currentValue = G)
    }
    var ii, Xc;
    function Ne(t) {
        if (ii === void 0)
            try {
                throw Error()
            } catch (e) {
                var l = e.stack.trim().match(/\n( *(at )?)/);
                ii = l && l[1] || "",
                Xc = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + ii + t + Xc
    }
    var fi = !1;
    function ci(t, l) {
        if (!t || fi)
            return "";
        fi = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (l) {
                            var E = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(E.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(E, [])
                                } catch (b) {
                                    var S = b
                                }
                                Reflect.construct(t, [], E)
                            } else {
                                try {
                                    E.call()
                                } catch (b) {
                                    S = b
                                }
                                t.call(E.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (b) {
                                S = b
                            }
                            (E = t()) && typeof E.catch == "function" && E.catch(function() {})
                        }
                    } catch (b) {
                        if (b && S && typeof b.stack == "string")
                            return [b.stack, S.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot()
              , i = u[0]
              , c = u[1];
            if (i && c) {
                var s = i.split(`
`)
                  , v = c.split(`
`);
                for (n = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; n < v.length && !v[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                if (a === s.length || n === v.length)
                    for (a = s.length - 1,
                    n = v.length - 1; 1 <= a && 0 <= n && s[a] !== v[n]; )
                        n--;
                for (; 1 <= a && 0 <= n; a--,
                n--)
                    if (s[a] !== v[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--,
                                n--,
                                0 > n || s[a] !== v[n]) {
                                    var z = `
` + s[a].replace(" at new ", " at ");
                                    return t.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", t.displayName)),
                                    z
                                }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            fi = !1,
            Error.prepareStackTrace = e
        }
        return (e = t ? t.displayName || t.name : "") ? Ne(e) : ""
    }
    function o0(t, l) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return Ne(t.type);
        case 16:
            return Ne("Lazy");
        case 13:
            return t.child !== l && l !== null ? Ne("Suspense Fallback") : Ne("Suspense");
        case 19:
            return Ne("SuspenseList");
        case 0:
        case 15:
            return ci(t.type, !1);
        case 11:
            return ci(t.type.render, !1);
        case 1:
            return ci(t.type, !0);
        case 31:
            return Ne("Activity");
        default:
            return ""
        }
    }
    function xc(t) {
        try {
            var l = ""
              , e = null;
            do
                l += o0(t, e),
                e = t,
                t = t.return;
            while (t);
            return l
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var si = Object.prototype.hasOwnProperty
      , oi = f.unstable_scheduleCallback
      , ri = f.unstable_cancelCallback
      , r0 = f.unstable_shouldYield
      , d0 = f.unstable_requestPaint
      , ul = f.unstable_now
      , m0 = f.unstable_getCurrentPriorityLevel
      , Zc = f.unstable_ImmediatePriority
      , Lc = f.unstable_UserBlockingPriority
      , jn = f.unstable_NormalPriority
      , h0 = f.unstable_LowPriority
      , Vc = f.unstable_IdlePriority
      , g0 = f.log
      , y0 = f.unstable_setDisableYieldValue
      , Xa = null
      , il = null;
    function ae(t) {
        if (typeof g0 == "function" && y0(t),
        il && typeof il.setStrictMode == "function")
            try {
                il.setStrictMode(Xa, t)
            } catch {}
    }
    var fl = Math.clz32 ? Math.clz32 : b0
      , v0 = Math.log
      , S0 = Math.LN2;
    function b0(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (v0(t) / S0 | 0) | 0
    }
    var Gn = 256
      , Xn = 262144
      , xn = 4194304;
    function Re(t) {
        var l = t & 42;
        if (l !== 0)
            return l;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function Zn(t, l, e) {
        var a = t.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0
          , u = t.suspendedLanes
          , i = t.pingedLanes;
        t = t.warmLanes;
        var c = a & 134217727;
        return c !== 0 ? (a = c & ~u,
        a !== 0 ? n = Re(a) : (i &= c,
        i !== 0 ? n = Re(i) : e || (e = c & ~t,
        e !== 0 && (n = Re(e))))) : (c = a & ~u,
        c !== 0 ? n = Re(c) : i !== 0 ? n = Re(i) : e || (e = a & ~t,
        e !== 0 && (n = Re(e)))),
        n === 0 ? 0 : l !== 0 && l !== n && (l & u) === 0 && (u = n & -n,
        e = l & -l,
        u >= e || u === 32 && (e & 4194048) !== 0) ? l : n
    }
    function xa(t, l) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0
    }
    function z0(t, l) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return l + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Kc() {
        var t = xn;
        return xn <<= 1,
        (xn & 62914560) === 0 && (xn = 4194304),
        t
    }
    function di(t) {
        for (var l = [], e = 0; 31 > e; e++)
            l.push(t);
        return l
    }
    function Za(t, l) {
        t.pendingLanes |= l,
        l !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function T0(t, l, e, a, n, u) {
        var i = t.pendingLanes;
        t.pendingLanes = e,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= e,
        t.entangledLanes &= e,
        t.errorRecoveryDisabledLanes &= e,
        t.shellSuspendCounter = 0;
        var c = t.entanglements
          , s = t.expirationTimes
          , v = t.hiddenUpdates;
        for (e = i & ~e; 0 < e; ) {
            var z = 31 - fl(e)
              , E = 1 << z;
            c[z] = 0,
            s[z] = -1;
            var S = v[z];
            if (S !== null)
                for (v[z] = null,
                z = 0; z < S.length; z++) {
                    var b = S[z];
                    b !== null && (b.lane &= -536870913)
                }
            e &= ~E
        }
        a !== 0 && wc(t, a, 0),
        u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~l))
    }
    function wc(t, l, e) {
        t.pendingLanes |= l,
        t.suspendedLanes &= ~l;
        var a = 31 - fl(l);
        t.entangledLanes |= l,
        t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930
    }
    function Jc(t, l) {
        var e = t.entangledLanes |= l;
        for (t = t.entanglements; e; ) {
            var a = 31 - fl(e)
              , n = 1 << a;
            n & l | t[a] & l && (t[a] |= l),
            e &= ~n
        }
    }
    function Wc(t, l) {
        var e = l & -l;
        return e = (e & 42) !== 0 ? 1 : mi(e),
        (e & (t.suspendedLanes | l)) !== 0 ? 0 : e
    }
    function mi(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function hi(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function kc() {
        var t = D.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Qd(t.type))
    }
    function $c(t, l) {
        var e = D.p;
        try {
            return D.p = t,
            l()
        } finally {
            D.p = e
        }
    }
    var ne = Math.random().toString(36).slice(2)
      , jt = "__reactFiber$" + ne
      , Ft = "__reactProps$" + ne
      , $e = "__reactContainer$" + ne
      , gi = "__reactEvents$" + ne
      , p0 = "__reactListeners$" + ne
      , A0 = "__reactHandles$" + ne
      , Fc = "__reactResources$" + ne
      , La = "__reactMarker$" + ne;
    function yi(t) {
        delete t[jt],
        delete t[Ft],
        delete t[gi],
        delete t[p0],
        delete t[A0]
    }
    function Fe(t) {
        var l = t[jt];
        if (l)
            return l;
        for (var e = t.parentNode; e; ) {
            if (l = e[$e] || e[jt]) {
                if (e = l.alternate,
                l.child !== null || e !== null && e.child !== null)
                    for (t = bd(t); t !== null; ) {
                        if (e = t[jt])
                            return e;
                        t = bd(t)
                    }
                return l
            }
            t = e,
            e = t.parentNode
        }
        return null
    }
    function Ie(t) {
        if (t = t[jt] || t[$e]) {
            var l = t.tag;
            if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
                return t
        }
        return null
    }
    function Va(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6)
            return t.stateNode;
        throw Error(o(33))
    }
    function Pe(t) {
        var l = t[Fc];
        return l || (l = t[Fc] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        l
    }
    function qt(t) {
        t[La] = !0
    }
    var Ic = new Set
      , Pc = {};
    function Ce(t, l) {
        ta(t, l),
        ta(t + "Capture", l)
    }
    function ta(t, l) {
        for (Pc[t] = l,
        t = 0; t < l.length; t++)
            Ic.add(l[t])
    }
    var E0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , ts = {}
      , ls = {};
    function M0(t) {
        return si.call(ls, t) ? !0 : si.call(ts, t) ? !1 : E0.test(t) ? ls[t] = !0 : (ts[t] = !0,
        !1)
    }
    function Ln(t, l, e) {
        if (M0(l))
            if (e === null)
                t.removeAttribute(l);
            else {
                switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(l);
                    return;
                case "boolean":
                    var a = l.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        t.removeAttribute(l);
                        return
                    }
                }
                t.setAttribute(l, "" + e)
            }
    }
    function Vn(t, l, e) {
        if (e === null)
            t.removeAttribute(l);
        else {
            switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(l);
                return
            }
            t.setAttribute(l, "" + e)
        }
    }
    function jl(t, l, e, a) {
        if (a === null)
            t.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttributeNS(l, e, "" + a)
        }
    }
    function vl(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function es(t) {
        var l = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio")
    }
    function O0(t, l, e) {
        var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
        if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get
              , u = a.set;
            return Object.defineProperty(t, l, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(i) {
                    e = "" + i,
                    u.call(this, i)
                }
            }),
            Object.defineProperty(t, l, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return e
                },
                setValue: function(i) {
                    e = "" + i
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[l]
                }
            }
        }
    }
    function vi(t) {
        if (!t._valueTracker) {
            var l = es(t) ? "checked" : "value";
            t._valueTracker = O0(t, l, "" + t[l])
        }
    }
    function as(t) {
        if (!t)
            return !1;
        var l = t._valueTracker;
        if (!l)
            return !0;
        var e = l.getValue()
          , a = "";
        return t && (a = es(t) ? t.checked ? "true" : "false" : t.value),
        t = a,
        t !== e ? (l.setValue(t),
        !0) : !1
    }
    function Kn(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var _0 = /[\n"\\]/g;
    function Sl(t) {
        return t.replace(_0, function(l) {
            return "\\" + l.charCodeAt(0).toString(16) + " "
        })
    }
    function Si(t, l, e, a, n, u, i, c) {
        t.name = "",
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"),
        l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + vl(l)) : t.value !== "" + vl(l) && (t.value = "" + vl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"),
        l != null ? bi(t, i, vl(l)) : e != null ? bi(t, i, vl(e)) : a != null && t.removeAttribute("value"),
        n == null && u != null && (t.defaultChecked = !!u),
        n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"),
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + vl(c) : t.removeAttribute("name")
    }
    function ns(t, l, e, a, n, u, i, c) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u),
        l != null || e != null) {
            if (!(u !== "submit" && u !== "reset" || l != null)) {
                vi(t);
                return
            }
            e = e != null ? "" + vl(e) : "",
            l = l != null ? "" + vl(l) : e,
            c || l === t.value || (t.value = l),
            t.defaultValue = l
        }
        a = a ?? n,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        t.checked = c ? t.checked : !!a,
        t.defaultChecked = !!a,
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i),
        vi(t)
    }
    function bi(t, l, e) {
        l === "number" && Kn(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e)
    }
    function la(t, l, e, a) {
        if (t = t.options,
        l) {
            l = {};
            for (var n = 0; n < e.length; n++)
                l["$" + e[n]] = !0;
            for (e = 0; e < t.length; e++)
                n = l.hasOwnProperty("$" + t[e].value),
                t[e].selected !== n && (t[e].selected = n),
                n && a && (t[e].defaultSelected = !0)
        } else {
            for (e = "" + vl(e),
            l = null,
            n = 0; n < t.length; n++) {
                if (t[n].value === e) {
                    t[n].selected = !0,
                    a && (t[n].defaultSelected = !0);
                    return
                }
                l !== null || t[n].disabled || (l = t[n])
            }
            l !== null && (l.selected = !0)
        }
    }
    function us(t, l, e) {
        if (l != null && (l = "" + vl(l),
        l !== t.value && (t.value = l),
        e == null)) {
            t.defaultValue !== l && (t.defaultValue = l);
            return
        }
        t.defaultValue = e != null ? "" + vl(e) : ""
    }
    function is(t, l, e, a) {
        if (l == null) {
            if (a != null) {
                if (e != null)
                    throw Error(o(92));
                if (_l(a)) {
                    if (1 < a.length)
                        throw Error(o(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""),
            l = e
        }
        e = vl(l),
        t.defaultValue = e,
        a = t.textContent,
        a === e && a !== "" && a !== null && (t.value = a),
        vi(t)
    }
    function ea(t, l) {
        if (l) {
            var e = t.firstChild;
            if (e && e === t.lastChild && e.nodeType === 3) {
                e.nodeValue = l;
                return
            }
        }
        t.textContent = l
    }
    var D0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function fs(t, l, e) {
        var a = l.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || D0.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px"
    }
    function cs(t, l, e) {
        if (l != null && typeof l != "object")
            throw Error(o(62));
        if (t = t.style,
        e != null) {
            for (var a in e)
                !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var n in l)
                a = l[n],
                l.hasOwnProperty(n) && e[n] !== a && fs(t, n, a)
        } else
            for (var u in l)
                l.hasOwnProperty(u) && fs(t, u, l[u])
    }
    function zi(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var U0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , N0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function wn(t) {
        return N0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function Gl() {}
    var Ti = null;
    function pi(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var aa = null
      , na = null;
    function ss(t) {
        var l = Ie(t);
        if (l && (t = l.stateNode)) {
            var e = t[Ft] || null;
            t: switch (t = l.stateNode,
            l.type) {
            case "input":
                if (Si(t, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name),
                l = e.name,
                e.type === "radio" && l != null) {
                    for (e = t; e.parentNode; )
                        e = e.parentNode;
                    for (e = e.querySelectorAll('input[name="' + Sl("" + l) + '"][type="radio"]'),
                    l = 0; l < e.length; l++) {
                        var a = e[l];
                        if (a !== t && a.form === t.form) {
                            var n = a[Ft] || null;
                            if (!n)
                                throw Error(o(90));
                            Si(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                        }
                    }
                    for (l = 0; l < e.length; l++)
                        a = e[l],
                        a.form === t.form && as(a)
                }
                break t;
            case "textarea":
                us(t, e.value, e.defaultValue);
                break t;
            case "select":
                l = e.value,
                l != null && la(t, !!e.multiple, l, !1)
            }
        }
    }
    var Ai = !1;
    function os(t, l, e) {
        if (Ai)
            return t(l, e);
        Ai = !0;
        try {
            var a = t(l);
            return a
        } finally {
            if (Ai = !1,
            (aa !== null || na !== null) && (Hu(),
            aa && (l = aa,
            t = na,
            na = aa = null,
            ss(l),
            t)))
                for (l = 0; l < t.length; l++)
                    ss(t[l])
        }
    }
    function Ka(t, l) {
        var e = t.stateNode;
        if (e === null)
            return null;
        var a = e[Ft] || null;
        if (a === null)
            return null;
        e = a[l];
        t: switch (l) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (t = t.type,
            a = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !a;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (e && typeof e != "function")
            throw Error(o(231, l, typeof e));
        return e
    }
    var Xl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Ei = !1;
    if (Xl)
        try {
            var wa = {};
            Object.defineProperty(wa, "passive", {
                get: function() {
                    Ei = !0
                }
            }),
            window.addEventListener("test", wa, wa),
            window.removeEventListener("test", wa, wa)
        } catch {
            Ei = !1
        }
    var ue = null
      , Mi = null
      , Jn = null;
    function rs() {
        if (Jn)
            return Jn;
        var t, l = Mi, e = l.length, a, n = "value"in ue ? ue.value : ue.textContent, u = n.length;
        for (t = 0; t < e && l[t] === n[t]; t++)
            ;
        var i = e - t;
        for (a = 1; a <= i && l[e - a] === n[u - a]; a++)
            ;
        return Jn = n.slice(t, 1 < a ? 1 - a : void 0)
    }
    function Wn(t) {
        var l = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && l === 13 && (t = 13)) : t = l,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function kn() {
        return !0
    }
    function ds() {
        return !1
    }
    function It(t) {
        function l(e, a, n, u, i) {
            this._reactName = e,
            this._targetInst = n,
            this.type = a,
            this.nativeEvent = u,
            this.target = i,
            this.currentTarget = null;
            for (var c in t)
                t.hasOwnProperty(c) && (e = t[c],
                this[c] = e ? e(u) : u[c]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? kn : ds,
            this.isPropagationStopped = ds,
            this
        }
        return q(l.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1),
                this.isDefaultPrevented = kn)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
                this.isPropagationStopped = kn)
            },
            persist: function() {},
            isPersistent: kn
        }),
        l
    }
    var He = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, $n = It(He), Ja = q({}, He, {
        view: 0,
        detail: 0
    }), R0 = It(Ja), Oi, _i, Wa, Fn = q({}, Ja, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ui,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== Wa && (Wa && t.type === "mousemove" ? (Oi = t.screenX - Wa.screenX,
            _i = t.screenY - Wa.screenY) : _i = Oi = 0,
            Wa = t),
            Oi)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : _i
        }
    }), ms = It(Fn), C0 = q({}, Fn, {
        dataTransfer: 0
    }), H0 = It(C0), q0 = q({}, Ja, {
        relatedTarget: 0
    }), Di = It(q0), Q0 = q({}, He, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), B0 = It(Q0), Y0 = q({}, He, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), j0 = It(Y0), G0 = q({}, He, {
        data: 0
    }), hs = It(G0), X0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, x0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Z0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function L0(t) {
        var l = this.nativeEvent;
        return l.getModifierState ? l.getModifierState(t) : (t = Z0[t]) ? !!l[t] : !1
    }
    function Ui() {
        return L0
    }
    var V0 = q({}, Ja, {
        key: function(t) {
            if (t.key) {
                var l = X0[t.key] || t.key;
                if (l !== "Unidentified")
                    return l
            }
            return t.type === "keypress" ? (t = Wn(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? x0[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ui,
        charCode: function(t) {
            return t.type === "keypress" ? Wn(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Wn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , K0 = It(V0)
      , w0 = q({}, Fn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , gs = It(w0)
      , J0 = q({}, Ja, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ui
    })
      , W0 = It(J0)
      , k0 = q({}, He, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , $0 = It(k0)
      , F0 = q({}, Fn, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , I0 = It(F0)
      , P0 = q({}, He, {
        newState: 0,
        oldState: 0
    })
      , tm = It(P0)
      , lm = [9, 13, 27, 32]
      , Ni = Xl && "CompositionEvent"in window
      , ka = null;
    Xl && "documentMode"in document && (ka = document.documentMode);
    var em = Xl && "TextEvent"in window && !ka
      , ys = Xl && (!Ni || ka && 8 < ka && 11 >= ka)
      , vs = " "
      , Ss = !1;
    function bs(t, l) {
        switch (t) {
        case "keyup":
            return lm.indexOf(l.keyCode) !== -1;
        case "keydown":
            return l.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function zs(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var ua = !1;
    function am(t, l) {
        switch (t) {
        case "compositionend":
            return zs(l);
        case "keypress":
            return l.which !== 32 ? null : (Ss = !0,
            vs);
        case "textInput":
            return t = l.data,
            t === vs && Ss ? null : t;
        default:
            return null
        }
    }
    function nm(t, l) {
        if (ua)
            return t === "compositionend" || !Ni && bs(t, l) ? (t = rs(),
            Jn = Mi = ue = null,
            ua = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
                if (l.char && 1 < l.char.length)
                    return l.char;
                if (l.which)
                    return String.fromCharCode(l.which)
            }
            return null;
        case "compositionend":
            return ys && l.locale !== "ko" ? null : l.data;
        default:
            return null
        }
    }
    var um = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Ts(t) {
        var l = t && t.nodeName && t.nodeName.toLowerCase();
        return l === "input" ? !!um[t.type] : l === "textarea"
    }
    function ps(t, l, e, a) {
        aa ? na ? na.push(a) : na = [a] : aa = a,
        l = Xu(l, "onChange"),
        0 < l.length && (e = new $n("onChange","change",null,e,a),
        t.push({
            event: e,
            listeners: l
        }))
    }
    var $a = null
      , Fa = null;
    function im(t) {
        ud(t, 0)
    }
    function In(t) {
        var l = Va(t);
        if (as(l))
            return t
    }
    function As(t, l) {
        if (t === "change")
            return l
    }
    var Es = !1;
    if (Xl) {
        var Ri;
        if (Xl) {
            var Ci = "oninput"in document;
            if (!Ci) {
                var Ms = document.createElement("div");
                Ms.setAttribute("oninput", "return;"),
                Ci = typeof Ms.oninput == "function"
            }
            Ri = Ci
        } else
            Ri = !1;
        Es = Ri && (!document.documentMode || 9 < document.documentMode)
    }
    function Os() {
        $a && ($a.detachEvent("onpropertychange", _s),
        Fa = $a = null)
    }
    function _s(t) {
        if (t.propertyName === "value" && In(Fa)) {
            var l = [];
            ps(l, Fa, t, pi(t)),
            os(im, l)
        }
    }
    function fm(t, l, e) {
        t === "focusin" ? (Os(),
        $a = l,
        Fa = e,
        $a.attachEvent("onpropertychange", _s)) : t === "focusout" && Os()
    }
    function cm(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return In(Fa)
    }
    function sm(t, l) {
        if (t === "click")
            return In(l)
    }
    function om(t, l) {
        if (t === "input" || t === "change")
            return In(l)
    }
    function rm(t, l) {
        return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l
    }
    var cl = typeof Object.is == "function" ? Object.is : rm;
    function Ia(t, l) {
        if (cl(t, l))
            return !0;
        if (typeof t != "object" || t === null || typeof l != "object" || l === null)
            return !1;
        var e = Object.keys(t)
          , a = Object.keys(l);
        if (e.length !== a.length)
            return !1;
        for (a = 0; a < e.length; a++) {
            var n = e[a];
            if (!si.call(l, n) || !cl(t[n], l[n]))
                return !1
        }
        return !0
    }
    function Ds(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Us(t, l) {
        var e = Ds(t);
        t = 0;
        for (var a; e; ) {
            if (e.nodeType === 3) {
                if (a = t + e.textContent.length,
                t <= l && a >= l)
                    return {
                        node: e,
                        offset: l - t
                    };
                t = a
            }
            t: {
                for (; e; ) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break t
                    }
                    e = e.parentNode
                }
                e = void 0
            }
            e = Ds(e)
        }
    }
    function Ns(t, l) {
        return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Ns(t, l.parentNode) : "contains"in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1
    }
    function Rs(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var l = Kn(t.document); l instanceof t.HTMLIFrameElement; ) {
            try {
                var e = typeof l.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e)
                t = l.contentWindow;
            else
                break;
            l = Kn(t.document)
        }
        return l
    }
    function Hi(t) {
        var l = t && t.nodeName && t.nodeName.toLowerCase();
        return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true")
    }
    var dm = Xl && "documentMode"in document && 11 >= document.documentMode
      , ia = null
      , qi = null
      , Pa = null
      , Qi = !1;
    function Cs(t, l, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        Qi || ia == null || ia !== Kn(a) || (a = ia,
        "selectionStart"in a && Hi(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Pa && Ia(Pa, a) || (Pa = a,
        a = Xu(qi, "onSelect"),
        0 < a.length && (l = new $n("onSelect","select",null,l,e),
        t.push({
            event: l,
            listeners: a
        }),
        l.target = ia)))
    }
    function qe(t, l) {
        var e = {};
        return e[t.toLowerCase()] = l.toLowerCase(),
        e["Webkit" + t] = "webkit" + l,
        e["Moz" + t] = "moz" + l,
        e
    }
    var fa = {
        animationend: qe("Animation", "AnimationEnd"),
        animationiteration: qe("Animation", "AnimationIteration"),
        animationstart: qe("Animation", "AnimationStart"),
        transitionrun: qe("Transition", "TransitionRun"),
        transitionstart: qe("Transition", "TransitionStart"),
        transitioncancel: qe("Transition", "TransitionCancel"),
        transitionend: qe("Transition", "TransitionEnd")
    }
      , Bi = {}
      , Hs = {};
    Xl && (Hs = document.createElement("div").style,
    "AnimationEvent"in window || (delete fa.animationend.animation,
    delete fa.animationiteration.animation,
    delete fa.animationstart.animation),
    "TransitionEvent"in window || delete fa.transitionend.transition);
    function Qe(t) {
        if (Bi[t])
            return Bi[t];
        if (!fa[t])
            return t;
        var l = fa[t], e;
        for (e in l)
            if (l.hasOwnProperty(e) && e in Hs)
                return Bi[t] = l[e];
        return t
    }
    var qs = Qe("animationend")
      , Qs = Qe("animationiteration")
      , Bs = Qe("animationstart")
      , mm = Qe("transitionrun")
      , hm = Qe("transitionstart")
      , gm = Qe("transitioncancel")
      , Ys = Qe("transitionend")
      , js = new Map
      , Yi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Yi.push("scrollEnd");
    function Dl(t, l) {
        js.set(t, l),
        Ce(l, [t])
    }
    var Pn = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var l = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(l))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , bl = []
      , ca = 0
      , ji = 0;
    function tu() {
        for (var t = ca, l = ji = ca = 0; l < t; ) {
            var e = bl[l];
            bl[l++] = null;
            var a = bl[l];
            bl[l++] = null;
            var n = bl[l];
            bl[l++] = null;
            var u = bl[l];
            if (bl[l++] = null,
            a !== null && n !== null) {
                var i = a.pending;
                i === null ? n.next = n : (n.next = i.next,
                i.next = n),
                a.pending = n
            }
            u !== 0 && Gs(e, n, u)
        }
    }
    function lu(t, l, e, a) {
        bl[ca++] = t,
        bl[ca++] = l,
        bl[ca++] = e,
        bl[ca++] = a,
        ji |= a,
        t.lanes |= a,
        t = t.alternate,
        t !== null && (t.lanes |= a)
    }
    function Gi(t, l, e, a) {
        return lu(t, l, e, a),
        eu(t)
    }
    function Be(t, l) {
        return lu(t, null, null, l),
        eu(t)
    }
    function Gs(t, l, e) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e);
        for (var n = !1, u = t.return; u !== null; )
            u.childLanes |= e,
            a = u.alternate,
            a !== null && (a.childLanes |= e),
            u.tag === 22 && (t = u.stateNode,
            t === null || t._visibility & 1 || (n = !0)),
            t = u,
            u = u.return;
        return t.tag === 3 ? (u = t.stateNode,
        n && l !== null && (n = 31 - fl(e),
        t = u.hiddenUpdates,
        a = t[n],
        a === null ? t[n] = [l] : a.push(l),
        l.lane = e | 536870912),
        u) : null
    }
    function eu(t) {
        if (50 < pn)
            throw pn = 0,
            kf = null,
            Error(o(185));
        for (var l = t.return; l !== null; )
            t = l,
            l = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var sa = {};
    function ym(t, l, e, a) {
        this.tag = t,
        this.key = e,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = l,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function sl(t, l, e, a) {
        return new ym(t,l,e,a)
    }
    function Xi(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function xl(t, l) {
        var e = t.alternate;
        return e === null ? (e = sl(t.tag, l, t.key, t.mode),
        e.elementType = t.elementType,
        e.type = t.type,
        e.stateNode = t.stateNode,
        e.alternate = t,
        t.alternate = e) : (e.pendingProps = l,
        e.type = t.type,
        e.flags = 0,
        e.subtreeFlags = 0,
        e.deletions = null),
        e.flags = t.flags & 65011712,
        e.childLanes = t.childLanes,
        e.lanes = t.lanes,
        e.child = t.child,
        e.memoizedProps = t.memoizedProps,
        e.memoizedState = t.memoizedState,
        e.updateQueue = t.updateQueue,
        l = t.dependencies,
        e.dependencies = l === null ? null : {
            lanes: l.lanes,
            firstContext: l.firstContext
        },
        e.sibling = t.sibling,
        e.index = t.index,
        e.ref = t.ref,
        e.refCleanup = t.refCleanup,
        e
    }
    function Xs(t, l) {
        t.flags &= 65011714;
        var e = t.alternate;
        return e === null ? (t.childLanes = 0,
        t.lanes = l,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = e.childLanes,
        t.lanes = e.lanes,
        t.child = e.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = e.memoizedProps,
        t.memoizedState = e.memoizedState,
        t.updateQueue = e.updateQueue,
        t.type = e.type,
        l = e.dependencies,
        t.dependencies = l === null ? null : {
            lanes: l.lanes,
            firstContext: l.firstContext
        }),
        t
    }
    function au(t, l, e, a, n, u) {
        var i = 0;
        if (a = t,
        typeof t == "function")
            Xi(t) && (i = 1);
        else if (typeof t == "string")
            i = Th(t, e, C.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case yl:
                return t = sl(31, e, l, n),
                t.elementType = yl,
                t.lanes = u,
                t;
            case bt:
                return Ye(e.children, n, u, l);
            case kt:
                i = 8,
                n |= 24;
                break;
            case Ct:
                return t = sl(12, e, l, n | 2),
                t.elementType = Ct,
                t.lanes = u,
                t;
            case $t:
                return t = sl(13, e, l, n),
                t.elementType = $t,
                t.lanes = u,
                t;
            case Ht:
                return t = sl(19, e, l, n),
                t.elementType = Ht,
                t.lanes = u,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case Mt:
                        i = 10;
                        break t;
                    case gl:
                        i = 9;
                        break t;
                    case Lt:
                        i = 11;
                        break t;
                    case K:
                        i = 14;
                        break t;
                    case Vt:
                        i = 16,
                        a = null;
                        break t
                    }
                i = 29,
                e = Error(o(130, t === null ? "null" : typeof t, "")),
                a = null
            }
        return l = sl(i, e, l, n),
        l.elementType = t,
        l.type = a,
        l.lanes = u,
        l
    }
    function Ye(t, l, e, a) {
        return t = sl(7, t, a, l),
        t.lanes = e,
        t
    }
    function xi(t, l, e) {
        return t = sl(6, t, null, l),
        t.lanes = e,
        t
    }
    function xs(t) {
        var l = sl(18, null, null, 0);
        return l.stateNode = t,
        l
    }
    function Zi(t, l, e) {
        return l = sl(4, t.children !== null ? t.children : [], t.key, l),
        l.lanes = e,
        l.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        l
    }
    var Zs = new WeakMap;
    function zl(t, l) {
        if (typeof t == "object" && t !== null) {
            var e = Zs.get(t);
            return e !== void 0 ? e : (l = {
                value: t,
                source: l,
                stack: xc(l)
            },
            Zs.set(t, l),
            l)
        }
        return {
            value: t,
            source: l,
            stack: xc(l)
        }
    }
    var oa = []
      , ra = 0
      , nu = null
      , tn = 0
      , Tl = []
      , pl = 0
      , ie = null
      , Rl = 1
      , Cl = "";
    function Zl(t, l) {
        oa[ra++] = tn,
        oa[ra++] = nu,
        nu = t,
        tn = l
    }
    function Ls(t, l, e) {
        Tl[pl++] = Rl,
        Tl[pl++] = Cl,
        Tl[pl++] = ie,
        ie = t;
        var a = Rl;
        t = Cl;
        var n = 32 - fl(a) - 1;
        a &= ~(1 << n),
        e += 1;
        var u = 32 - fl(l) + n;
        if (30 < u) {
            var i = n - n % 5;
            u = (a & (1 << i) - 1).toString(32),
            a >>= i,
            n -= i,
            Rl = 1 << 32 - fl(l) + n | e << n | a,
            Cl = u + t
        } else
            Rl = 1 << u | e << n | a,
            Cl = t
    }
    function Li(t) {
        t.return !== null && (Zl(t, 1),
        Ls(t, 1, 0))
    }
    function Vi(t) {
        for (; t === nu; )
            nu = oa[--ra],
            oa[ra] = null,
            tn = oa[--ra],
            oa[ra] = null;
        for (; t === ie; )
            ie = Tl[--pl],
            Tl[pl] = null,
            Cl = Tl[--pl],
            Tl[pl] = null,
            Rl = Tl[--pl],
            Tl[pl] = null
    }
    function Vs(t, l) {
        Tl[pl++] = Rl,
        Tl[pl++] = Cl,
        Tl[pl++] = ie,
        Rl = l.id,
        Cl = l.overflow,
        ie = t
    }
    var Gt = null
      , ht = null
      , P = !1
      , fe = null
      , Al = !1
      , Ki = Error(o(519));
    function ce(t) {
        var l = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw ln(zl(l, t)),
        Ki
    }
    function Ks(t) {
        var l = t.stateNode
          , e = t.type
          , a = t.memoizedProps;
        switch (l[jt] = t,
        l[Ft] = a,
        e) {
        case "dialog":
            k("cancel", l),
            k("close", l);
            break;
        case "iframe":
        case "object":
        case "embed":
            k("load", l);
            break;
        case "video":
        case "audio":
            for (e = 0; e < En.length; e++)
                k(En[e], l);
            break;
        case "source":
            k("error", l);
            break;
        case "img":
        case "image":
        case "link":
            k("error", l),
            k("load", l);
            break;
        case "details":
            k("toggle", l);
            break;
        case "input":
            k("invalid", l),
            ns(l, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            k("invalid", l);
            break;
        case "textarea":
            k("invalid", l),
            is(l, a.value, a.defaultValue, a.children)
        }
        e = a.children,
        typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || sd(l.textContent, e) ? (a.popover != null && (k("beforetoggle", l),
        k("toggle", l)),
        a.onScroll != null && k("scroll", l),
        a.onScrollEnd != null && k("scrollend", l),
        a.onClick != null && (l.onclick = Gl),
        l = !0) : l = !1,
        l || ce(t, !0)
    }
    function ws(t) {
        for (Gt = t.return; Gt; )
            switch (Gt.tag) {
            case 5:
            case 31:
            case 13:
                Al = !1;
                return;
            case 27:
            case 3:
                Al = !0;
                return;
            default:
                Gt = Gt.return
            }
    }
    function da(t) {
        if (t !== Gt)
            return !1;
        if (!P)
            return ws(t),
            P = !0,
            !1;
        var l = t.tag, e;
        if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type,
        e = !(e !== "form" && e !== "button") || oc(t.type, t.memoizedProps)),
        e = !e),
        e && ht && ce(t),
        ws(t),
        l === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            ht = Sd(t)
        } else if (l === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            ht = Sd(t)
        } else
            l === 27 ? (l = ht,
            pe(t.type) ? (t = gc,
            gc = null,
            ht = t) : ht = l) : ht = Gt ? Ml(t.stateNode.nextSibling) : null;
        return !0
    }
    function je() {
        ht = Gt = null,
        P = !1
    }
    function wi() {
        var t = fe;
        return t !== null && (el === null ? el = t : el.push.apply(el, t),
        fe = null),
        t
    }
    function ln(t) {
        fe === null ? fe = [t] : fe.push(t)
    }
    var Ji = m(null)
      , Ge = null
      , Ll = null;
    function se(t, l, e) {
        U(Ji, l._currentValue),
        l._currentValue = e
    }
    function Vl(t) {
        t._currentValue = Ji.current,
        M(Ji)
    }
    function Wi(t, l, e) {
        for (; t !== null; ) {
            var a = t.alternate;
            if ((t.childLanes & l) !== l ? (t.childLanes |= l,
            a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l),
            t === e)
                break;
            t = t.return
        }
    }
    function ki(t, l, e, a) {
        var n = t.child;
        for (n !== null && (n.return = t); n !== null; ) {
            var u = n.dependencies;
            if (u !== null) {
                var i = n.child;
                u = u.firstContext;
                t: for (; u !== null; ) {
                    var c = u;
                    u = n;
                    for (var s = 0; s < l.length; s++)
                        if (c.context === l[s]) {
                            u.lanes |= e,
                            c = u.alternate,
                            c !== null && (c.lanes |= e),
                            Wi(u.return, e, t),
                            a || (i = null);
                            break t
                        }
                    u = c.next
                }
            } else if (n.tag === 18) {
                if (i = n.return,
                i === null)
                    throw Error(o(341));
                i.lanes |= e,
                u = i.alternate,
                u !== null && (u.lanes |= e),
                Wi(i, e, t),
                i = null
            } else
                i = n.child;
            if (i !== null)
                i.return = n;
            else
                for (i = n; i !== null; ) {
                    if (i === t) {
                        i = null;
                        break
                    }
                    if (n = i.sibling,
                    n !== null) {
                        n.return = i.return,
                        i = n;
                        break
                    }
                    i = i.return
                }
            n = i
        }
    }
    function ma(t, l, e, a) {
        t = null;
        for (var n = l, u = !1; n !== null; ) {
            if (!u) {
                if ((n.flags & 524288) !== 0)
                    u = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var i = n.alternate;
                if (i === null)
                    throw Error(o(387));
                if (i = i.memoizedProps,
                i !== null) {
                    var c = n.type;
                    cl(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c])
                }
            } else if (n === ut.current) {
                if (i = n.alternate,
                i === null)
                    throw Error(o(387));
                i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Un) : t = [Un])
            }
            n = n.return
        }
        t !== null && ki(l, t, e, a),
        l.flags |= 262144
    }
    function uu(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!cl(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Xe(t) {
        Ge = t,
        Ll = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function Xt(t) {
        return Js(Ge, t)
    }
    function iu(t, l) {
        return Ge === null && Xe(t),
        Js(t, l)
    }
    function Js(t, l) {
        var e = l._currentValue;
        if (l = {
            context: l,
            memoizedValue: e,
            next: null
        },
        Ll === null) {
            if (t === null)
                throw Error(o(308));
            Ll = l,
            t.dependencies = {
                lanes: 0,
                firstContext: l
            },
            t.flags |= 524288
        } else
            Ll = Ll.next = l;
        return e
    }
    var vm = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , l = this.signal = {
            aborted: !1,
            addEventListener: function(e, a) {
                t.push(a)
            }
        };
        this.abort = function() {
            l.aborted = !0,
            t.forEach(function(e) {
                return e()
            })
        }
    }
      , Sm = f.unstable_scheduleCallback
      , bm = f.unstable_NormalPriority
      , _t = {
        $$typeof: Mt,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function $i() {
        return {
            controller: new vm,
            data: new Map,
            refCount: 0
        }
    }
    function en(t) {
        t.refCount--,
        t.refCount === 0 && Sm(bm, function() {
            t.controller.abort()
        })
    }
    var an = null
      , Fi = 0
      , ha = 0
      , ga = null;
    function zm(t, l) {
        if (an === null) {
            var e = an = [];
            Fi = 0,
            ha = lc(),
            ga = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    e.push(a)
                }
            }
        }
        return Fi++,
        l.then(Ws, Ws),
        l
    }
    function Ws() {
        if (--Fi === 0 && an !== null) {
            ga !== null && (ga.status = "fulfilled");
            var t = an;
            an = null,
            ha = 0,
            ga = null;
            for (var l = 0; l < t.length; l++)
                (0,
                t[l])()
        }
    }
    function Tm(t, l) {
        var e = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(n) {
                e.push(n)
            }
        };
        return t.then(function() {
            a.status = "fulfilled",
            a.value = l;
            for (var n = 0; n < e.length; n++)
                (0,
                e[n])(l)
        }, function(n) {
            for (a.status = "rejected",
            a.reason = n,
            n = 0; n < e.length; n++)
                (0,
                e[n])(void 0)
        }),
        a
    }
    var ks = T.S;
    T.S = function(t, l) {
        Hr = ul(),
        typeof l == "object" && l !== null && typeof l.then == "function" && zm(t, l),
        ks !== null && ks(t, l)
    }
    ;
    var xe = m(null);
    function Ii() {
        var t = xe.current;
        return t !== null ? t : mt.pooledCache
    }
    function fu(t, l) {
        l === null ? U(xe, xe.current) : U(xe, l.pool)
    }
    function $s() {
        var t = Ii();
        return t === null ? null : {
            parent: _t._currentValue,
            pool: t
        }
    }
    var ya = Error(o(460))
      , Pi = Error(o(474))
      , cu = Error(o(542))
      , su = {
        then: function() {}
    };
    function Fs(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function Is(t, l, e) {
        switch (e = t[e],
        e === void 0 ? t.push(l) : e !== l && (l.then(Gl, Gl),
        l = e),
        l.status) {
        case "fulfilled":
            return l.value;
        case "rejected":
            throw t = l.reason,
            to(t),
            t;
        default:
            if (typeof l.status == "string")
                l.then(Gl, Gl);
            else {
                if (t = mt,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(o(482));
                t = l,
                t.status = "pending",
                t.then(function(a) {
                    if (l.status === "pending") {
                        var n = l;
                        n.status = "fulfilled",
                        n.value = a
                    }
                }, function(a) {
                    if (l.status === "pending") {
                        var n = l;
                        n.status = "rejected",
                        n.reason = a
                    }
                })
            }
            switch (l.status) {
            case "fulfilled":
                return l.value;
            case "rejected":
                throw t = l.reason,
                to(t),
                t
            }
            throw Le = l,
            ya
        }
    }
    function Ze(t) {
        try {
            var l = t._init;
            return l(t._payload)
        } catch (e) {
            throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Le = e,
            ya) : e
        }
    }
    var Le = null;
    function Ps() {
        if (Le === null)
            throw Error(o(459));
        var t = Le;
        return Le = null,
        t
    }
    function to(t) {
        if (t === ya || t === cu)
            throw Error(o(483))
    }
    var va = null
      , nn = 0;
    function ou(t) {
        var l = nn;
        return nn += 1,
        va === null && (va = []),
        Is(va, t, l)
    }
    function un(t, l) {
        l = l.props.ref,
        t.ref = l !== void 0 ? l : null
    }
    function ru(t, l) {
        throw l.$$typeof === I ? Error(o(525)) : (t = Object.prototype.toString.call(l),
        Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t)))
    }
    function lo(t) {
        function l(h, r) {
            if (t) {
                var y = h.deletions;
                y === null ? (h.deletions = [r],
                h.flags |= 16) : y.push(r)
            }
        }
        function e(h, r) {
            if (!t)
                return null;
            for (; r !== null; )
                l(h, r),
                r = r.sibling;
            return null
        }
        function a(h) {
            for (var r = new Map; h !== null; )
                h.key !== null ? r.set(h.key, h) : r.set(h.index, h),
                h = h.sibling;
            return r
        }
        function n(h, r) {
            return h = xl(h, r),
            h.index = 0,
            h.sibling = null,
            h
        }
        function u(h, r, y) {
            return h.index = y,
            t ? (y = h.alternate,
            y !== null ? (y = y.index,
            y < r ? (h.flags |= 67108866,
            r) : y) : (h.flags |= 67108866,
            r)) : (h.flags |= 1048576,
            r)
        }
        function i(h) {
            return t && h.alternate === null && (h.flags |= 67108866),
            h
        }
        function c(h, r, y, A) {
            return r === null || r.tag !== 6 ? (r = xi(y, h.mode, A),
            r.return = h,
            r) : (r = n(r, y),
            r.return = h,
            r)
        }
        function s(h, r, y, A) {
            var Q = y.type;
            return Q === bt ? z(h, r, y.props.children, A, y.key) : r !== null && (r.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Vt && Ze(Q) === r.type) ? (r = n(r, y.props),
            un(r, y),
            r.return = h,
            r) : (r = au(y.type, y.key, y.props, null, h.mode, A),
            un(r, y),
            r.return = h,
            r)
        }
        function v(h, r, y, A) {
            return r === null || r.tag !== 4 || r.stateNode.containerInfo !== y.containerInfo || r.stateNode.implementation !== y.implementation ? (r = Zi(y, h.mode, A),
            r.return = h,
            r) : (r = n(r, y.children || []),
            r.return = h,
            r)
        }
        function z(h, r, y, A, Q) {
            return r === null || r.tag !== 7 ? (r = Ye(y, h.mode, A, Q),
            r.return = h,
            r) : (r = n(r, y),
            r.return = h,
            r)
        }
        function E(h, r, y) {
            if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
                return r = xi("" + r, h.mode, y),
                r.return = h,
                r;
            if (typeof r == "object" && r !== null) {
                switch (r.$$typeof) {
                case Yt:
                    return y = au(r.type, r.key, r.props, null, h.mode, y),
                    un(y, r),
                    y.return = h,
                    y;
                case vt:
                    return r = Zi(r, h.mode, y),
                    r.return = h,
                    r;
                case Vt:
                    return r = Ze(r),
                    E(h, r, y)
                }
                if (_l(r) || Ot(r))
                    return r = Ye(r, h.mode, y, null),
                    r.return = h,
                    r;
                if (typeof r.then == "function")
                    return E(h, ou(r), y);
                if (r.$$typeof === Mt)
                    return E(h, iu(h, r), y);
                ru(h, r)
            }
            return null
        }
        function S(h, r, y, A) {
            var Q = r !== null ? r.key : null;
            if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
                return Q !== null ? null : c(h, r, "" + y, A);
            if (typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                case Yt:
                    return y.key === Q ? s(h, r, y, A) : null;
                case vt:
                    return y.key === Q ? v(h, r, y, A) : null;
                case Vt:
                    return y = Ze(y),
                    S(h, r, y, A)
                }
                if (_l(y) || Ot(y))
                    return Q !== null ? null : z(h, r, y, A, null);
                if (typeof y.then == "function")
                    return S(h, r, ou(y), A);
                if (y.$$typeof === Mt)
                    return S(h, r, iu(h, y), A);
                ru(h, y)
            }
            return null
        }
        function b(h, r, y, A, Q) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return h = h.get(y) || null,
                c(r, h, "" + A, Q);
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case Yt:
                    return h = h.get(A.key === null ? y : A.key) || null,
                    s(r, h, A, Q);
                case vt:
                    return h = h.get(A.key === null ? y : A.key) || null,
                    v(r, h, A, Q);
                case Vt:
                    return A = Ze(A),
                    b(h, r, y, A, Q)
                }
                if (_l(A) || Ot(A))
                    return h = h.get(y) || null,
                    z(r, h, A, Q, null);
                if (typeof A.then == "function")
                    return b(h, r, y, ou(A), Q);
                if (A.$$typeof === Mt)
                    return b(h, r, y, iu(r, A), Q);
                ru(r, A)
            }
            return null
        }
        function R(h, r, y, A) {
            for (var Q = null, et = null, H = r, L = r = 0, F = null; H !== null && L < y.length; L++) {
                H.index > L ? (F = H,
                H = null) : F = H.sibling;
                var at = S(h, H, y[L], A);
                if (at === null) {
                    H === null && (H = F);
                    break
                }
                t && H && at.alternate === null && l(h, H),
                r = u(at, r, L),
                et === null ? Q = at : et.sibling = at,
                et = at,
                H = F
            }
            if (L === y.length)
                return e(h, H),
                P && Zl(h, L),
                Q;
            if (H === null) {
                for (; L < y.length; L++)
                    H = E(h, y[L], A),
                    H !== null && (r = u(H, r, L),
                    et === null ? Q = H : et.sibling = H,
                    et = H);
                return P && Zl(h, L),
                Q
            }
            for (H = a(H); L < y.length; L++)
                F = b(H, h, L, y[L], A),
                F !== null && (t && F.alternate !== null && H.delete(F.key === null ? L : F.key),
                r = u(F, r, L),
                et === null ? Q = F : et.sibling = F,
                et = F);
            return t && H.forEach(function(_e) {
                return l(h, _e)
            }),
            P && Zl(h, L),
            Q
        }
        function Y(h, r, y, A) {
            if (y == null)
                throw Error(o(151));
            for (var Q = null, et = null, H = r, L = r = 0, F = null, at = y.next(); H !== null && !at.done; L++,
            at = y.next()) {
                H.index > L ? (F = H,
                H = null) : F = H.sibling;
                var _e = S(h, H, at.value, A);
                if (_e === null) {
                    H === null && (H = F);
                    break
                }
                t && H && _e.alternate === null && l(h, H),
                r = u(_e, r, L),
                et === null ? Q = _e : et.sibling = _e,
                et = _e,
                H = F
            }
            if (at.done)
                return e(h, H),
                P && Zl(h, L),
                Q;
            if (H === null) {
                for (; !at.done; L++,
                at = y.next())
                    at = E(h, at.value, A),
                    at !== null && (r = u(at, r, L),
                    et === null ? Q = at : et.sibling = at,
                    et = at);
                return P && Zl(h, L),
                Q
            }
            for (H = a(H); !at.done; L++,
            at = y.next())
                at = b(H, h, L, at.value, A),
                at !== null && (t && at.alternate !== null && H.delete(at.key === null ? L : at.key),
                r = u(at, r, L),
                et === null ? Q = at : et.sibling = at,
                et = at);
            return t && H.forEach(function(Ch) {
                return l(h, Ch)
            }),
            P && Zl(h, L),
            Q
        }
        function rt(h, r, y, A) {
            if (typeof y == "object" && y !== null && y.type === bt && y.key === null && (y = y.props.children),
            typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                case Yt:
                    t: {
                        for (var Q = y.key; r !== null; ) {
                            if (r.key === Q) {
                                if (Q = y.type,
                                Q === bt) {
                                    if (r.tag === 7) {
                                        e(h, r.sibling),
                                        A = n(r, y.props.children),
                                        A.return = h,
                                        h = A;
                                        break t
                                    }
                                } else if (r.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Vt && Ze(Q) === r.type) {
                                    e(h, r.sibling),
                                    A = n(r, y.props),
                                    un(A, y),
                                    A.return = h,
                                    h = A;
                                    break t
                                }
                                e(h, r);
                                break
                            } else
                                l(h, r);
                            r = r.sibling
                        }
                        y.type === bt ? (A = Ye(y.props.children, h.mode, A, y.key),
                        A.return = h,
                        h = A) : (A = au(y.type, y.key, y.props, null, h.mode, A),
                        un(A, y),
                        A.return = h,
                        h = A)
                    }
                    return i(h);
                case vt:
                    t: {
                        for (Q = y.key; r !== null; ) {
                            if (r.key === Q)
                                if (r.tag === 4 && r.stateNode.containerInfo === y.containerInfo && r.stateNode.implementation === y.implementation) {
                                    e(h, r.sibling),
                                    A = n(r, y.children || []),
                                    A.return = h,
                                    h = A;
                                    break t
                                } else {
                                    e(h, r);
                                    break
                                }
                            else
                                l(h, r);
                            r = r.sibling
                        }
                        A = Zi(y, h.mode, A),
                        A.return = h,
                        h = A
                    }
                    return i(h);
                case Vt:
                    return y = Ze(y),
                    rt(h, r, y, A)
                }
                if (_l(y))
                    return R(h, r, y, A);
                if (Ot(y)) {
                    if (Q = Ot(y),
                    typeof Q != "function")
                        throw Error(o(150));
                    return y = Q.call(y),
                    Y(h, r, y, A)
                }
                if (typeof y.then == "function")
                    return rt(h, r, ou(y), A);
                if (y.$$typeof === Mt)
                    return rt(h, r, iu(h, y), A);
                ru(h, y)
            }
            return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y,
            r !== null && r.tag === 6 ? (e(h, r.sibling),
            A = n(r, y),
            A.return = h,
            h = A) : (e(h, r),
            A = xi(y, h.mode, A),
            A.return = h,
            h = A),
            i(h)) : e(h, r)
        }
        return function(h, r, y, A) {
            try {
                nn = 0;
                var Q = rt(h, r, y, A);
                return va = null,
                Q
            } catch (H) {
                if (H === ya || H === cu)
                    throw H;
                var et = sl(29, H, null, h.mode);
                return et.lanes = A,
                et.return = h,
                et
            }
        }
    }
    var Ve = lo(!0)
      , eo = lo(!1)
      , oe = !1;
    function tf(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function lf(t, l) {
        t = t.updateQueue,
        l.updateQueue === t && (l.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function re(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function de(t, l, e) {
        var a = t.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (nt & 2) !== 0) {
            var n = a.pending;
            return n === null ? l.next = l : (l.next = n.next,
            n.next = l),
            a.pending = l,
            l = eu(t),
            Gs(t, null, e),
            l
        }
        return lu(t, a, l, e),
        eu(t)
    }
    function fn(t, l, e) {
        if (l = l.updateQueue,
        l !== null && (l = l.shared,
        (e & 4194048) !== 0)) {
            var a = l.lanes;
            a &= t.pendingLanes,
            e |= a,
            l.lanes = e,
            Jc(t, e)
        }
    }
    function ef(t, l) {
        var e = t.updateQueue
          , a = t.alternate;
        if (a !== null && (a = a.updateQueue,
        e === a)) {
            var n = null
              , u = null;
            if (e = e.firstBaseUpdate,
            e !== null) {
                do {
                    var i = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? n = u = i : u = u.next = i,
                    e = e.next
                } while (e !== null);
                u === null ? n = u = l : u = u.next = l
            } else
                n = u = l;
            e = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            },
            t.updateQueue = e;
            return
        }
        t = e.lastBaseUpdate,
        t === null ? e.firstBaseUpdate = l : t.next = l,
        e.lastBaseUpdate = l
    }
    var af = !1;
    function cn() {
        if (af) {
            var t = ga;
            if (t !== null)
                throw t
        }
    }
    function sn(t, l, e, a) {
        af = !1;
        var n = t.updateQueue;
        oe = !1;
        var u = n.firstBaseUpdate
          , i = n.lastBaseUpdate
          , c = n.shared.pending;
        if (c !== null) {
            n.shared.pending = null;
            var s = c
              , v = s.next;
            s.next = null,
            i === null ? u = v : i.next = v,
            i = s;
            var z = t.alternate;
            z !== null && (z = z.updateQueue,
            c = z.lastBaseUpdate,
            c !== i && (c === null ? z.firstBaseUpdate = v : c.next = v,
            z.lastBaseUpdate = s))
        }
        if (u !== null) {
            var E = n.baseState;
            i = 0,
            z = v = s = null,
            c = u;
            do {
                var S = c.lane & -536870913
                  , b = S !== c.lane;
                if (b ? ($ & S) === S : (a & S) === S) {
                    S !== 0 && S === ha && (af = !0),
                    z !== null && (z = z.next = {
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var R = t
                          , Y = c;
                        S = l;
                        var rt = e;
                        switch (Y.tag) {
                        case 1:
                            if (R = Y.payload,
                            typeof R == "function") {
                                E = R.call(rt, E, S);
                                break t
                            }
                            E = R;
                            break t;
                        case 3:
                            R.flags = R.flags & -65537 | 128;
                        case 0:
                            if (R = Y.payload,
                            S = typeof R == "function" ? R.call(rt, E, S) : R,
                            S == null)
                                break t;
                            E = q({}, E, S);
                            break t;
                        case 2:
                            oe = !0
                        }
                    }
                    S = c.callback,
                    S !== null && (t.flags |= 64,
                    b && (t.flags |= 8192),
                    b = n.callbacks,
                    b === null ? n.callbacks = [S] : b.push(S))
                } else
                    b = {
                        lane: S,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null
                    },
                    z === null ? (v = z = b,
                    s = E) : z = z.next = b,
                    i |= S;
                if (c = c.next,
                c === null) {
                    if (c = n.shared.pending,
                    c === null)
                        break;
                    b = c,
                    c = b.next,
                    b.next = null,
                    n.lastBaseUpdate = b,
                    n.shared.pending = null
                }
            } while (!0);
            z === null && (s = E),
            n.baseState = s,
            n.firstBaseUpdate = v,
            n.lastBaseUpdate = z,
            u === null && (n.shared.lanes = 0),
            ve |= i,
            t.lanes = i,
            t.memoizedState = E
        }
    }
    function ao(t, l) {
        if (typeof t != "function")
            throw Error(o(191, t));
        t.call(l)
    }
    function no(t, l) {
        var e = t.callbacks;
        if (e !== null)
            for (t.callbacks = null,
            t = 0; t < e.length; t++)
                ao(e[t], l)
    }
    var Sa = m(null)
      , du = m(0);
    function uo(t, l) {
        t = Pl,
        U(du, t),
        U(Sa, l),
        Pl = t | l.baseLanes
    }
    function nf() {
        U(du, Pl),
        U(Sa, Sa.current)
    }
    function uf() {
        Pl = du.current,
        M(Sa),
        M(du)
    }
    var ol = m(null)
      , El = null;
    function me(t) {
        var l = t.alternate;
        U(At, At.current & 1),
        U(ol, t),
        El === null && (l === null || Sa.current !== null || l.memoizedState !== null) && (El = t)
    }
    function ff(t) {
        U(At, At.current),
        U(ol, t),
        El === null && (El = t)
    }
    function io(t) {
        t.tag === 22 ? (U(At, At.current),
        U(ol, t),
        El === null && (El = t)) : he()
    }
    function he() {
        U(At, At.current),
        U(ol, ol.current)
    }
    function rl(t) {
        M(ol),
        El === t && (El = null),
        M(At)
    }
    var At = m(0);
    function mu(t) {
        for (var l = t; l !== null; ) {
            if (l.tag === 13) {
                var e = l.memoizedState;
                if (e !== null && (e = e.dehydrated,
                e === null || mc(e) || hc(e)))
                    return l
            } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
                if ((l.flags & 128) !== 0)
                    return l
            } else if (l.child !== null) {
                l.child.return = l,
                l = l.child;
                continue
            }
            if (l === t)
                break;
            for (; l.sibling === null; ) {
                if (l.return === null || l.return === t)
                    return null;
                l = l.return
            }
            l.sibling.return = l.return,
            l = l.sibling
        }
        return null
    }
    var Kl = 0
      , Z = null
      , st = null
      , Dt = null
      , hu = !1
      , ba = !1
      , Ke = !1
      , gu = 0
      , on = 0
      , za = null
      , pm = 0;
    function zt() {
        throw Error(o(321))
    }
    function cf(t, l) {
        if (l === null)
            return !1;
        for (var e = 0; e < l.length && e < t.length; e++)
            if (!cl(t[e], l[e]))
                return !1;
        return !0
    }
    function sf(t, l, e, a, n, u) {
        return Kl = u,
        Z = l,
        l.memoizedState = null,
        l.updateQueue = null,
        l.lanes = 0,
        T.H = t === null || t.memoizedState === null ? Vo : Ef,
        Ke = !1,
        u = e(a, n),
        Ke = !1,
        ba && (u = co(l, e, a, n)),
        fo(t),
        u
    }
    function fo(t) {
        T.H = mn;
        var l = st !== null && st.next !== null;
        if (Kl = 0,
        Dt = st = Z = null,
        hu = !1,
        on = 0,
        za = null,
        l)
            throw Error(o(300));
        t === null || Ut || (t = t.dependencies,
        t !== null && uu(t) && (Ut = !0))
    }
    function co(t, l, e, a) {
        Z = t;
        var n = 0;
        do {
            if (ba && (za = null),
            on = 0,
            ba = !1,
            25 <= n)
                throw Error(o(301));
            if (n += 1,
            Dt = st = null,
            t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            T.H = Ko,
            u = l(e, a)
        } while (ba);
        return u
    }
    function Am() {
        var t = T.H
          , l = t.useState()[0];
        return l = typeof l.then == "function" ? rn(l) : l,
        t = t.useState()[0],
        (st !== null ? st.memoizedState : null) !== t && (Z.flags |= 1024),
        l
    }
    function of() {
        var t = gu !== 0;
        return gu = 0,
        t
    }
    function rf(t, l, e) {
        l.updateQueue = t.updateQueue,
        l.flags &= -2053,
        t.lanes &= ~e
    }
    function df(t) {
        if (hu) {
            for (t = t.memoizedState; t !== null; ) {
                var l = t.queue;
                l !== null && (l.pending = null),
                t = t.next
            }
            hu = !1
        }
        Kl = 0,
        Dt = st = Z = null,
        ba = !1,
        on = gu = 0,
        za = null
    }
    function Wt() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Dt === null ? Z.memoizedState = Dt = t : Dt = Dt.next = t,
        Dt
    }
    function Et() {
        if (st === null) {
            var t = Z.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = st.next;
        var l = Dt === null ? Z.memoizedState : Dt.next;
        if (l !== null)
            Dt = l,
            st = t;
        else {
            if (t === null)
                throw Z.alternate === null ? Error(o(467)) : Error(o(310));
            st = t,
            t = {
                memoizedState: st.memoizedState,
                baseState: st.baseState,
                baseQueue: st.baseQueue,
                queue: st.queue,
                next: null
            },
            Dt === null ? Z.memoizedState = Dt = t : Dt = Dt.next = t
        }
        return Dt
    }
    function yu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function rn(t) {
        var l = on;
        return on += 1,
        za === null && (za = []),
        t = Is(za, t, l),
        l = Z,
        (Dt === null ? l.memoizedState : Dt.next) === null && (l = l.alternate,
        T.H = l === null || l.memoizedState === null ? Vo : Ef),
        t
    }
    function vu(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return rn(t);
            if (t.$$typeof === Mt)
                return Xt(t)
        }
        throw Error(o(438, String(t)))
    }
    function mf(t) {
        var l = null
          , e = Z.updateQueue;
        if (e !== null && (l = e.memoCache),
        l == null) {
            var a = Z.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (l = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (l == null && (l = {
            data: [],
            index: 0
        }),
        e === null && (e = yu(),
        Z.updateQueue = e),
        e.memoCache = l,
        e = l.data[l.index],
        e === void 0)
            for (e = l.data[l.index] = Array(t),
            a = 0; a < t; a++)
                e[a] = ee;
        return l.index++,
        e
    }
    function wl(t, l) {
        return typeof l == "function" ? l(t) : l
    }
    function Su(t) {
        var l = Et();
        return hf(l, st, t)
    }
    function hf(t, l, e) {
        var a = t.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = e;
        var n = t.baseQueue
          , u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var i = n.next;
                n.next = u.next,
                u.next = i
            }
            l.baseQueue = n = u,
            a.pending = null
        }
        if (u = t.baseState,
        n === null)
            t.memoizedState = u;
        else {
            l = n.next;
            var c = i = null
              , s = null
              , v = l
              , z = !1;
            do {
                var E = v.lane & -536870913;
                if (E !== v.lane ? ($ & E) === E : (Kl & E) === E) {
                    var S = v.revertLane;
                    if (S === 0)
                        s !== null && (s = s.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: v.action,
                            hasEagerState: v.hasEagerState,
                            eagerState: v.eagerState,
                            next: null
                        }),
                        E === ha && (z = !0);
                    else if ((Kl & S) === S) {
                        v = v.next,
                        S === ha && (z = !0);
                        continue
                    } else
                        E = {
                            lane: 0,
                            revertLane: v.revertLane,
                            gesture: null,
                            action: v.action,
                            hasEagerState: v.hasEagerState,
                            eagerState: v.eagerState,
                            next: null
                        },
                        s === null ? (c = s = E,
                        i = u) : s = s.next = E,
                        Z.lanes |= S,
                        ve |= S;
                    E = v.action,
                    Ke && e(u, E),
                    u = v.hasEagerState ? v.eagerState : e(u, E)
                } else
                    S = {
                        lane: E,
                        revertLane: v.revertLane,
                        gesture: v.gesture,
                        action: v.action,
                        hasEagerState: v.hasEagerState,
                        eagerState: v.eagerState,
                        next: null
                    },
                    s === null ? (c = s = S,
                    i = u) : s = s.next = S,
                    Z.lanes |= E,
                    ve |= E;
                v = v.next
            } while (v !== null && v !== l);
            if (s === null ? i = u : s.next = c,
            !cl(u, t.memoizedState) && (Ut = !0,
            z && (e = ga,
            e !== null)))
                throw e;
            t.memoizedState = u,
            t.baseState = i,
            t.baseQueue = s,
            a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0),
        [t.memoizedState, a.dispatch]
    }
    function gf(t) {
        var l = Et()
          , e = l.queue;
        if (e === null)
            throw Error(o(311));
        e.lastRenderedReducer = t;
        var a = e.dispatch
          , n = e.pending
          , u = l.memoizedState;
        if (n !== null) {
            e.pending = null;
            var i = n = n.next;
            do
                u = t(u, i.action),
                i = i.next;
            while (i !== n);
            cl(u, l.memoizedState) || (Ut = !0),
            l.memoizedState = u,
            l.baseQueue === null && (l.baseState = u),
            e.lastRenderedState = u
        }
        return [u, a]
    }
    function so(t, l, e) {
        var a = Z
          , n = Et()
          , u = P;
        if (u) {
            if (e === void 0)
                throw Error(o(407));
            e = e()
        } else
            e = l();
        var i = !cl((st || n).memoizedState, e);
        if (i && (n.memoizedState = e,
        Ut = !0),
        n = n.queue,
        Sf(mo.bind(null, a, n, t), [t]),
        n.getSnapshot !== l || i || Dt !== null && Dt.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            Ta(9, {
                destroy: void 0
            }, ro.bind(null, a, n, e, l), null),
            mt === null)
                throw Error(o(349));
            u || (Kl & 127) !== 0 || oo(a, l, e)
        }
        return e
    }
    function oo(t, l, e) {
        t.flags |= 16384,
        t = {
            getSnapshot: l,
            value: e
        },
        l = Z.updateQueue,
        l === null ? (l = yu(),
        Z.updateQueue = l,
        l.stores = [t]) : (e = l.stores,
        e === null ? l.stores = [t] : e.push(t))
    }
    function ro(t, l, e, a) {
        l.value = e,
        l.getSnapshot = a,
        ho(l) && go(t)
    }
    function mo(t, l, e) {
        return e(function() {
            ho(l) && go(t)
        })
    }
    function ho(t) {
        var l = t.getSnapshot;
        t = t.value;
        try {
            var e = l();
            return !cl(t, e)
        } catch {
            return !0
        }
    }
    function go(t) {
        var l = Be(t, 2);
        l !== null && al(l, t, 2)
    }
    function yf(t) {
        var l = Wt();
        if (typeof t == "function") {
            var e = t;
            if (t = e(),
            Ke) {
                ae(!0);
                try {
                    e()
                } finally {
                    ae(!1)
                }
            }
        }
        return l.memoizedState = l.baseState = t,
        l.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: wl,
            lastRenderedState: t
        },
        l
    }
    function yo(t, l, e, a) {
        return t.baseState = e,
        hf(t, st, typeof a == "function" ? a : wl)
    }
    function Em(t, l, e, a, n) {
        if (Tu(t))
            throw Error(o(485));
        if (t = l.action,
        t !== null) {
            var u = {
                payload: n,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    u.listeners.push(i)
                }
            };
            T.T !== null ? e(!0) : u.isTransition = !1,
            a(u),
            e = l.pending,
            e === null ? (u.next = l.pending = u,
            vo(l, u)) : (u.next = e.next,
            l.pending = e.next = u)
        }
    }
    function vo(t, l) {
        var e = l.action
          , a = l.payload
          , n = t.state;
        if (l.isTransition) {
            var u = T.T
              , i = {};
            T.T = i;
            try {
                var c = e(n, a)
                  , s = T.S;
                s !== null && s(i, c),
                So(t, l, c)
            } catch (v) {
                vf(t, l, v)
            } finally {
                u !== null && i.types !== null && (u.types = i.types),
                T.T = u
            }
        } else
            try {
                u = e(n, a),
                So(t, l, u)
            } catch (v) {
                vf(t, l, v)
            }
    }
    function So(t, l, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            bo(t, l, a)
        }, function(a) {
            return vf(t, l, a)
        }) : bo(t, l, e)
    }
    function bo(t, l, e) {
        l.status = "fulfilled",
        l.value = e,
        zo(l),
        t.state = e,
        l = t.pending,
        l !== null && (e = l.next,
        e === l ? t.pending = null : (e = e.next,
        l.next = e,
        vo(t, e)))
    }
    function vf(t, l, e) {
        var a = t.pending;
        if (t.pending = null,
        a !== null) {
            a = a.next;
            do
                l.status = "rejected",
                l.reason = e,
                zo(l),
                l = l.next;
            while (l !== a)
        }
        t.action = null
    }
    function zo(t) {
        t = t.listeners;
        for (var l = 0; l < t.length; l++)
            (0,
            t[l])()
    }
    function To(t, l) {
        return l
    }
    function po(t, l) {
        if (P) {
            var e = mt.formState;
            if (e !== null) {
                t: {
                    var a = Z;
                    if (P) {
                        if (ht) {
                            l: {
                                for (var n = ht, u = Al; n.nodeType !== 8; ) {
                                    if (!u) {
                                        n = null;
                                        break l
                                    }
                                    if (n = Ml(n.nextSibling),
                                    n === null) {
                                        n = null;
                                        break l
                                    }
                                }
                                u = n.data,
                                n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                ht = Ml(n.nextSibling),
                                a = n.data === "F!";
                                break t
                            }
                        }
                        ce(a)
                    }
                    a = !1
                }
                a && (l = e[0])
            }
        }
        return e = Wt(),
        e.memoizedState = e.baseState = l,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: To,
            lastRenderedState: l
        },
        e.queue = a,
        e = xo.bind(null, Z, a),
        a.dispatch = e,
        a = yf(!1),
        u = Af.bind(null, Z, !1, a.queue),
        a = Wt(),
        n = {
            state: l,
            dispatch: null,
            action: t,
            pending: null
        },
        a.queue = n,
        e = Em.bind(null, Z, n, u, e),
        n.dispatch = e,
        a.memoizedState = t,
        [l, e, !1]
    }
    function Ao(t) {
        var l = Et();
        return Eo(l, st, t)
    }
    function Eo(t, l, e) {
        if (l = hf(t, l, To)[0],
        t = Su(wl)[0],
        typeof l == "object" && l !== null && typeof l.then == "function")
            try {
                var a = rn(l)
            } catch (i) {
                throw i === ya ? cu : i
            }
        else
            a = l;
        l = Et();
        var n = l.queue
          , u = n.dispatch;
        return e !== l.memoizedState && (Z.flags |= 2048,
        Ta(9, {
            destroy: void 0
        }, Mm.bind(null, n, e), null)),
        [a, u, t]
    }
    function Mm(t, l) {
        t.action = l
    }
    function Mo(t) {
        var l = Et()
          , e = st;
        if (e !== null)
            return Eo(l, e, t);
        Et(),
        l = l.memoizedState,
        e = Et();
        var a = e.queue.dispatch;
        return e.memoizedState = t,
        [l, a, !1]
    }
    function Ta(t, l, e, a) {
        return t = {
            tag: t,
            create: e,
            deps: a,
            inst: l,
            next: null
        },
        l = Z.updateQueue,
        l === null && (l = yu(),
        Z.updateQueue = l),
        e = l.lastEffect,
        e === null ? l.lastEffect = t.next = t : (a = e.next,
        e.next = t,
        t.next = a,
        l.lastEffect = t),
        t
    }
    function Oo() {
        return Et().memoizedState
    }
    function bu(t, l, e, a) {
        var n = Wt();
        Z.flags |= t,
        n.memoizedState = Ta(1 | l, {
            destroy: void 0
        }, e, a === void 0 ? null : a)
    }
    function zu(t, l, e, a) {
        var n = Et();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        st !== null && a !== null && cf(a, st.memoizedState.deps) ? n.memoizedState = Ta(l, u, e, a) : (Z.flags |= t,
        n.memoizedState = Ta(1 | l, u, e, a))
    }
    function _o(t, l) {
        bu(8390656, 8, t, l)
    }
    function Sf(t, l) {
        zu(2048, 8, t, l)
    }
    function Om(t) {
        Z.flags |= 4;
        var l = Z.updateQueue;
        if (l === null)
            l = yu(),
            Z.updateQueue = l,
            l.events = [t];
        else {
            var e = l.events;
            e === null ? l.events = [t] : e.push(t)
        }
    }
    function Do(t) {
        var l = Et().memoizedState;
        return Om({
            ref: l,
            nextImpl: t
        }),
        function() {
            if ((nt & 2) !== 0)
                throw Error(o(440));
            return l.impl.apply(void 0, arguments)
        }
    }
    function Uo(t, l) {
        return zu(4, 2, t, l)
    }
    function No(t, l) {
        return zu(4, 4, t, l)
    }
    function Ro(t, l) {
        if (typeof l == "function") {
            t = t();
            var e = l(t);
            return function() {
                typeof e == "function" ? e() : l(null)
            }
        }
        if (l != null)
            return t = t(),
            l.current = t,
            function() {
                l.current = null
            }
    }
    function Co(t, l, e) {
        e = e != null ? e.concat([t]) : null,
        zu(4, 4, Ro.bind(null, l, t), e)
    }
    function bf() {}
    function Ho(t, l) {
        var e = Et();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        return l !== null && cf(l, a[1]) ? a[0] : (e.memoizedState = [t, l],
        t)
    }
    function qo(t, l) {
        var e = Et();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        if (l !== null && cf(l, a[1]))
            return a[0];
        if (a = t(),
        Ke) {
            ae(!0);
            try {
                t()
            } finally {
                ae(!1)
            }
        }
        return e.memoizedState = [a, l],
        a
    }
    function zf(t, l, e) {
        return e === void 0 || (Kl & 1073741824) !== 0 && ($ & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e,
        t = Qr(),
        Z.lanes |= t,
        ve |= t,
        e)
    }
    function Qo(t, l, e, a) {
        return cl(e, l) ? e : Sa.current !== null ? (t = zf(t, e, a),
        cl(t, l) || (Ut = !0),
        t) : (Kl & 42) === 0 || (Kl & 1073741824) !== 0 && ($ & 261930) === 0 ? (Ut = !0,
        t.memoizedState = e) : (t = Qr(),
        Z.lanes |= t,
        ve |= t,
        l)
    }
    function Bo(t, l, e, a, n) {
        var u = D.p;
        D.p = u !== 0 && 8 > u ? u : 8;
        var i = T.T
          , c = {};
        T.T = c,
        Af(t, !1, l, e);
        try {
            var s = n()
              , v = T.S;
            if (v !== null && v(c, s),
            s !== null && typeof s == "object" && typeof s.then == "function") {
                var z = Tm(s, a);
                dn(t, l, z, hl(t))
            } else
                dn(t, l, a, hl(t))
        } catch (E) {
            dn(t, l, {
                then: function() {},
                status: "rejected",
                reason: E
            }, hl())
        } finally {
            D.p = u,
            i !== null && c.types !== null && (i.types = c.types),
            T.T = i
        }
    }
    function _m() {}
    function Tf(t, l, e, a) {
        if (t.tag !== 5)
            throw Error(o(476));
        var n = Yo(t).queue;
        Bo(t, n, l, G, e === null ? _m : function() {
            return jo(t),
            e(a)
        }
        )
    }
    function Yo(t) {
        var l = t.memoizedState;
        if (l !== null)
            return l;
        l = {
            memoizedState: G,
            baseState: G,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: wl,
                lastRenderedState: G
            },
            next: null
        };
        var e = {};
        return l.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: wl,
                lastRenderedState: e
            },
            next: null
        },
        t.memoizedState = l,
        t = t.alternate,
        t !== null && (t.memoizedState = l),
        l
    }
    function jo(t) {
        var l = Yo(t);
        l.next === null && (l = t.alternate.memoizedState),
        dn(t, l.next.queue, {}, hl())
    }
    function pf() {
        return Xt(Un)
    }
    function Go() {
        return Et().memoizedState
    }
    function Xo() {
        return Et().memoizedState
    }
    function Dm(t) {
        for (var l = t.return; l !== null; ) {
            switch (l.tag) {
            case 24:
            case 3:
                var e = hl();
                t = re(e);
                var a = de(l, t, e);
                a !== null && (al(a, l, e),
                fn(a, l, e)),
                l = {
                    cache: $i()
                },
                t.payload = l;
                return
            }
            l = l.return
        }
    }
    function Um(t, l, e) {
        var a = hl();
        e = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Tu(t) ? Zo(l, e) : (e = Gi(t, l, e, a),
        e !== null && (al(e, t, a),
        Lo(e, l, a)))
    }
    function xo(t, l, e) {
        var a = hl();
        dn(t, l, e, a)
    }
    function dn(t, l, e, a) {
        var n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Tu(t))
            Zo(l, n);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer,
            u !== null))
                try {
                    var i = l.lastRenderedState
                      , c = u(i, e);
                    if (n.hasEagerState = !0,
                    n.eagerState = c,
                    cl(c, i))
                        return lu(t, l, n, 0),
                        mt === null && tu(),
                        !1
                } catch {}
            if (e = Gi(t, l, n, a),
            e !== null)
                return al(e, t, a),
                Lo(e, l, a),
                !0
        }
        return !1
    }
    function Af(t, l, e, a) {
        if (a = {
            lane: 2,
            revertLane: lc(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Tu(t)) {
            if (l)
                throw Error(o(479))
        } else
            l = Gi(t, e, a, 2),
            l !== null && al(l, t, 2)
    }
    function Tu(t) {
        var l = t.alternate;
        return t === Z || l !== null && l === Z
    }
    function Zo(t, l) {
        ba = hu = !0;
        var e = t.pending;
        e === null ? l.next = l : (l.next = e.next,
        e.next = l),
        t.pending = l
    }
    function Lo(t, l, e) {
        if ((e & 4194048) !== 0) {
            var a = l.lanes;
            a &= t.pendingLanes,
            e |= a,
            l.lanes = e,
            Jc(t, e)
        }
    }
    var mn = {
        readContext: Xt,
        use: vu,
        useCallback: zt,
        useContext: zt,
        useEffect: zt,
        useImperativeHandle: zt,
        useLayoutEffect: zt,
        useInsertionEffect: zt,
        useMemo: zt,
        useReducer: zt,
        useRef: zt,
        useState: zt,
        useDebugValue: zt,
        useDeferredValue: zt,
        useTransition: zt,
        useSyncExternalStore: zt,
        useId: zt,
        useHostTransitionStatus: zt,
        useFormState: zt,
        useActionState: zt,
        useOptimistic: zt,
        useMemoCache: zt,
        useCacheRefresh: zt
    };
    mn.useEffectEvent = zt;
    var Vo = {
        readContext: Xt,
        use: vu,
        useCallback: function(t, l) {
            return Wt().memoizedState = [t, l === void 0 ? null : l],
            t
        },
        useContext: Xt,
        useEffect: _o,
        useImperativeHandle: function(t, l, e) {
            e = e != null ? e.concat([t]) : null,
            bu(4194308, 4, Ro.bind(null, l, t), e)
        },
        useLayoutEffect: function(t, l) {
            return bu(4194308, 4, t, l)
        },
        useInsertionEffect: function(t, l) {
            bu(4, 2, t, l)
        },
        useMemo: function(t, l) {
            var e = Wt();
            l = l === void 0 ? null : l;
            var a = t();
            if (Ke) {
                ae(!0);
                try {
                    t()
                } finally {
                    ae(!1)
                }
            }
            return e.memoizedState = [a, l],
            a
        },
        useReducer: function(t, l, e) {
            var a = Wt();
            if (e !== void 0) {
                var n = e(l);
                if (Ke) {
                    ae(!0);
                    try {
                        e(l)
                    } finally {
                        ae(!1)
                    }
                }
            } else
                n = l;
            return a.memoizedState = a.baseState = n,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: n
            },
            a.queue = t,
            t = t.dispatch = Um.bind(null, Z, t),
            [a.memoizedState, t]
        },
        useRef: function(t) {
            var l = Wt();
            return t = {
                current: t
            },
            l.memoizedState = t
        },
        useState: function(t) {
            t = yf(t);
            var l = t.queue
              , e = xo.bind(null, Z, l);
            return l.dispatch = e,
            [t.memoizedState, e]
        },
        useDebugValue: bf,
        useDeferredValue: function(t, l) {
            var e = Wt();
            return zf(e, t, l)
        },
        useTransition: function() {
            var t = yf(!1);
            return t = Bo.bind(null, Z, t.queue, !0, !1),
            Wt().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, l, e) {
            var a = Z
              , n = Wt();
            if (P) {
                if (e === void 0)
                    throw Error(o(407));
                e = e()
            } else {
                if (e = l(),
                mt === null)
                    throw Error(o(349));
                ($ & 127) !== 0 || oo(a, l, e)
            }
            n.memoizedState = e;
            var u = {
                value: e,
                getSnapshot: l
            };
            return n.queue = u,
            _o(mo.bind(null, a, u, t), [t]),
            a.flags |= 2048,
            Ta(9, {
                destroy: void 0
            }, ro.bind(null, a, u, e, l), null),
            e
        },
        useId: function() {
            var t = Wt()
              , l = mt.identifierPrefix;
            if (P) {
                var e = Cl
                  , a = Rl;
                e = (a & ~(1 << 32 - fl(a) - 1)).toString(32) + e,
                l = "_" + l + "R_" + e,
                e = gu++,
                0 < e && (l += "H" + e.toString(32)),
                l += "_"
            } else
                e = pm++,
                l = "_" + l + "r_" + e.toString(32) + "_";
            return t.memoizedState = l
        },
        useHostTransitionStatus: pf,
        useFormState: po,
        useActionState: po,
        useOptimistic: function(t) {
            var l = Wt();
            l.memoizedState = l.baseState = t;
            var e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return l.queue = e,
            l = Af.bind(null, Z, !0, e),
            e.dispatch = l,
            [t, l]
        },
        useMemoCache: mf,
        useCacheRefresh: function() {
            return Wt().memoizedState = Dm.bind(null, Z)
        },
        useEffectEvent: function(t) {
            var l = Wt()
              , e = {
                impl: t
            };
            return l.memoizedState = e,
            function() {
                if ((nt & 2) !== 0)
                    throw Error(o(440));
                return e.impl.apply(void 0, arguments)
            }
        }
    }
      , Ef = {
        readContext: Xt,
        use: vu,
        useCallback: Ho,
        useContext: Xt,
        useEffect: Sf,
        useImperativeHandle: Co,
        useInsertionEffect: Uo,
        useLayoutEffect: No,
        useMemo: qo,
        useReducer: Su,
        useRef: Oo,
        useState: function() {
            return Su(wl)
        },
        useDebugValue: bf,
        useDeferredValue: function(t, l) {
            var e = Et();
            return Qo(e, st.memoizedState, t, l)
        },
        useTransition: function() {
            var t = Su(wl)[0]
              , l = Et().memoizedState;
            return [typeof t == "boolean" ? t : rn(t), l]
        },
        useSyncExternalStore: so,
        useId: Go,
        useHostTransitionStatus: pf,
        useFormState: Ao,
        useActionState: Ao,
        useOptimistic: function(t, l) {
            var e = Et();
            return yo(e, st, t, l)
        },
        useMemoCache: mf,
        useCacheRefresh: Xo
    };
    Ef.useEffectEvent = Do;
    var Ko = {
        readContext: Xt,
        use: vu,
        useCallback: Ho,
        useContext: Xt,
        useEffect: Sf,
        useImperativeHandle: Co,
        useInsertionEffect: Uo,
        useLayoutEffect: No,
        useMemo: qo,
        useReducer: gf,
        useRef: Oo,
        useState: function() {
            return gf(wl)
        },
        useDebugValue: bf,
        useDeferredValue: function(t, l) {
            var e = Et();
            return st === null ? zf(e, t, l) : Qo(e, st.memoizedState, t, l)
        },
        useTransition: function() {
            var t = gf(wl)[0]
              , l = Et().memoizedState;
            return [typeof t == "boolean" ? t : rn(t), l]
        },
        useSyncExternalStore: so,
        useId: Go,
        useHostTransitionStatus: pf,
        useFormState: Mo,
        useActionState: Mo,
        useOptimistic: function(t, l) {
            var e = Et();
            return st !== null ? yo(e, st, t, l) : (e.baseState = t,
            [t, e.queue.dispatch])
        },
        useMemoCache: mf,
        useCacheRefresh: Xo
    };
    Ko.useEffectEvent = Do;
    function Mf(t, l, e, a) {
        l = t.memoizedState,
        e = e(a, l),
        e = e == null ? l : q({}, l, e),
        t.memoizedState = e,
        t.lanes === 0 && (t.updateQueue.baseState = e)
    }
    var Of = {
        enqueueSetState: function(t, l, e) {
            t = t._reactInternals;
            var a = hl()
              , n = re(a);
            n.payload = l,
            e != null && (n.callback = e),
            l = de(t, n, a),
            l !== null && (al(l, t, a),
            fn(l, t, a))
        },
        enqueueReplaceState: function(t, l, e) {
            t = t._reactInternals;
            var a = hl()
              , n = re(a);
            n.tag = 1,
            n.payload = l,
            e != null && (n.callback = e),
            l = de(t, n, a),
            l !== null && (al(l, t, a),
            fn(l, t, a))
        },
        enqueueForceUpdate: function(t, l) {
            t = t._reactInternals;
            var e = hl()
              , a = re(e);
            a.tag = 2,
            l != null && (a.callback = l),
            l = de(t, a, e),
            l !== null && (al(l, t, e),
            fn(l, t, e))
        }
    };
    function wo(t, l, e, a, n, u, i) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : l.prototype && l.prototype.isPureReactComponent ? !Ia(e, a) || !Ia(n, u) : !0
    }
    function Jo(t, l, e, a) {
        t = l.state,
        typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a),
        typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a),
        l.state !== t && Of.enqueueReplaceState(l, l.state, null)
    }
    function we(t, l) {
        var e = l;
        if ("ref"in l) {
            e = {};
            for (var a in l)
                a !== "ref" && (e[a] = l[a])
        }
        if (t = t.defaultProps) {
            e === l && (e = q({}, e));
            for (var n in t)
                e[n] === void 0 && (e[n] = t[n])
        }
        return e
    }
    function Wo(t) {
        Pn(t)
    }
    function ko(t) {
        console.error(t)
    }
    function $o(t) {
        Pn(t)
    }
    function pu(t, l) {
        try {
            var e = t.onUncaughtError;
            e(l.value, {
                componentStack: l.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function Fo(t, l, e) {
        try {
            var a = t.onCaughtError;
            a(e.value, {
                componentStack: e.stack,
                errorBoundary: l.tag === 1 ? l.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function _f(t, l, e) {
        return e = re(e),
        e.tag = 3,
        e.payload = {
            element: null
        },
        e.callback = function() {
            pu(t, l)
        }
        ,
        e
    }
    function Io(t) {
        return t = re(t),
        t.tag = 3,
        t
    }
    function Po(t, l, e, a) {
        var n = e.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            t.payload = function() {
                return n(u)
            }
            ,
            t.callback = function() {
                Fo(l, e, a)
            }
        }
        var i = e.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            Fo(l, e, a),
            typeof n != "function" && (Se === null ? Se = new Set([this]) : Se.add(this));
            var c = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: c !== null ? c : ""
            })
        }
        )
    }
    function Nm(t, l, e, a, n) {
        if (e.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (l = e.alternate,
            l !== null && ma(l, e, n, !0),
            e = ol.current,
            e !== null) {
                switch (e.tag) {
                case 31:
                case 13:
                    return El === null ? qu() : e.alternate === null && Tt === 0 && (Tt = 3),
                    e.flags &= -257,
                    e.flags |= 65536,
                    e.lanes = n,
                    a === su ? e.flags |= 16384 : (l = e.updateQueue,
                    l === null ? e.updateQueue = new Set([a]) : l.add(a),
                    If(t, a, n)),
                    !1;
                case 22:
                    return e.flags |= 65536,
                    a === su ? e.flags |= 16384 : (l = e.updateQueue,
                    l === null ? (l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    e.updateQueue = l) : (e = l.retryQueue,
                    e === null ? l.retryQueue = new Set([a]) : e.add(a)),
                    If(t, a, n)),
                    !1
                }
                throw Error(o(435, e.tag))
            }
            return If(t, a, n),
            qu(),
            !1
        }
        if (P)
            return l = ol.current,
            l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            l.flags |= 65536,
            l.lanes = n,
            a !== Ki && (t = Error(o(422), {
                cause: a
            }),
            ln(zl(t, e)))) : (a !== Ki && (l = Error(o(423), {
                cause: a
            }),
            ln(zl(l, e))),
            t = t.current.alternate,
            t.flags |= 65536,
            n &= -n,
            t.lanes |= n,
            a = zl(a, e),
            n = _f(t.stateNode, a, n),
            ef(t, n),
            Tt !== 4 && (Tt = 2)),
            !1;
        var u = Error(o(520), {
            cause: a
        });
        if (u = zl(u, e),
        Tn === null ? Tn = [u] : Tn.push(u),
        Tt !== 4 && (Tt = 2),
        l === null)
            return !0;
        a = zl(a, e),
        e = l;
        do {
            switch (e.tag) {
            case 3:
                return e.flags |= 65536,
                t = n & -n,
                e.lanes |= t,
                t = _f(e.stateNode, a, t),
                ef(e, t),
                !1;
            case 1:
                if (l = e.type,
                u = e.stateNode,
                (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Se === null || !Se.has(u))))
                    return e.flags |= 65536,
                    n &= -n,
                    e.lanes |= n,
                    n = Io(n),
                    Po(n, t, e, a),
                    ef(e, n),
                    !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var Df = Error(o(461))
      , Ut = !1;
    function xt(t, l, e, a) {
        l.child = t === null ? eo(l, null, e, a) : Ve(l, t.child, e, a)
    }
    function tr(t, l, e, a, n) {
        e = e.render;
        var u = l.ref;
        if ("ref"in a) {
            var i = {};
            for (var c in a)
                c !== "ref" && (i[c] = a[c])
        } else
            i = a;
        return Xe(l),
        a = sf(t, l, e, i, u, n),
        c = of(),
        t !== null && !Ut ? (rf(t, l, n),
        Jl(t, l, n)) : (P && c && Li(l),
        l.flags |= 1,
        xt(t, l, a, n),
        l.child)
    }
    function lr(t, l, e, a, n) {
        if (t === null) {
            var u = e.type;
            return typeof u == "function" && !Xi(u) && u.defaultProps === void 0 && e.compare === null ? (l.tag = 15,
            l.type = u,
            er(t, l, u, a, n)) : (t = au(e.type, null, a, l, l.mode, n),
            t.ref = l.ref,
            t.return = l,
            l.child = t)
        }
        if (u = t.child,
        !Bf(t, n)) {
            var i = u.memoizedProps;
            if (e = e.compare,
            e = e !== null ? e : Ia,
            e(i, a) && t.ref === l.ref)
                return Jl(t, l, n)
        }
        return l.flags |= 1,
        t = xl(u, a),
        t.ref = l.ref,
        t.return = l,
        l.child = t
    }
    function er(t, l, e, a, n) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (Ia(u, a) && t.ref === l.ref)
                if (Ut = !1,
                l.pendingProps = a = u,
                Bf(t, n))
                    (t.flags & 131072) !== 0 && (Ut = !0);
                else
                    return l.lanes = t.lanes,
                    Jl(t, l, n)
        }
        return Uf(t, l, e, a, n)
    }
    function ar(t, l, e, a) {
        var n = a.children
          , u = t !== null ? t.memoizedState : null;
        if (t === null && l.stateNode === null && (l.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((l.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | e : e,
                t !== null) {
                    for (a = l.child = t.child,
                    n = 0; a !== null; )
                        n = n | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = n & ~u
                } else
                    a = 0,
                    l.child = null;
                return nr(t, l, u, e, a)
            }
            if ((e & 536870912) !== 0)
                l.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && fu(l, u !== null ? u.cachePool : null),
                u !== null ? uo(l, u) : nf(),
                io(l);
            else
                return a = l.lanes = 536870912,
                nr(t, l, u !== null ? u.baseLanes | e : e, e, a)
        } else
            u !== null ? (fu(l, u.cachePool),
            uo(l, u),
            he(),
            l.memoizedState = null) : (t !== null && fu(l, null),
            nf(),
            he());
        return xt(t, l, n, e),
        l.child
    }
    function hn(t, l) {
        return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.sibling
    }
    function nr(t, l, e, a, n) {
        var u = Ii();
        return u = u === null ? null : {
            parent: _t._currentValue,
            pool: u
        },
        l.memoizedState = {
            baseLanes: e,
            cachePool: u
        },
        t !== null && fu(l, null),
        nf(),
        io(l),
        t !== null && ma(t, l, a, !0),
        l.childLanes = n,
        null
    }
    function Au(t, l) {
        return l = Mu({
            mode: l.mode,
            children: l.children
        }, t.mode),
        l.ref = t.ref,
        t.child = l,
        l.return = t,
        l
    }
    function ur(t, l, e) {
        return Ve(l, t.child, null, e),
        t = Au(l, l.pendingProps),
        t.flags |= 2,
        rl(l),
        l.memoizedState = null,
        t
    }
    function Rm(t, l, e) {
        var a = l.pendingProps
          , n = (l.flags & 128) !== 0;
        if (l.flags &= -129,
        t === null) {
            if (P) {
                if (a.mode === "hidden")
                    return t = Au(l, a),
                    l.lanes = 536870912,
                    hn(null, t);
                if (ff(l),
                (t = ht) ? (t = vd(t, Al),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (l.memoizedState = {
                    dehydrated: t,
                    treeContext: ie !== null ? {
                        id: Rl,
                        overflow: Cl
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = xs(t),
                e.return = l,
                l.child = e,
                Gt = l,
                ht = null)) : t = null,
                t === null)
                    throw ce(l);
                return l.lanes = 536870912,
                null
            }
            return Au(l, a)
        }
        var u = t.memoizedState;
        if (u !== null) {
            var i = u.dehydrated;
            if (ff(l),
            n)
                if (l.flags & 256)
                    l.flags &= -257,
                    l = ur(t, l, e);
                else if (l.memoizedState !== null)
                    l.child = t.child,
                    l.flags |= 128,
                    l = null;
                else
                    throw Error(o(558));
            else if (Ut || ma(t, l, e, !1),
            n = (e & t.childLanes) !== 0,
            Ut || n) {
                if (a = mt,
                a !== null && (i = Wc(a, e),
                i !== 0 && i !== u.retryLane))
                    throw u.retryLane = i,
                    Be(t, i),
                    al(a, t, i),
                    Df;
                qu(),
                l = ur(t, l, e)
            } else
                t = u.treeContext,
                ht = Ml(i.nextSibling),
                Gt = l,
                P = !0,
                fe = null,
                Al = !1,
                t !== null && Vs(l, t),
                l = Au(l, a),
                l.flags |= 4096;
            return l
        }
        return t = xl(t.child, {
            mode: a.mode,
            children: a.children
        }),
        t.ref = l.ref,
        l.child = t,
        t.return = l,
        t
    }
    function Eu(t, l) {
        var e = l.ref;
        if (e === null)
            t !== null && t.ref !== null && (l.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object")
                throw Error(o(284));
            (t === null || t.ref !== e) && (l.flags |= 4194816)
        }
    }
    function Uf(t, l, e, a, n) {
        return Xe(l),
        e = sf(t, l, e, a, void 0, n),
        a = of(),
        t !== null && !Ut ? (rf(t, l, n),
        Jl(t, l, n)) : (P && a && Li(l),
        l.flags |= 1,
        xt(t, l, e, n),
        l.child)
    }
    function ir(t, l, e, a, n, u) {
        return Xe(l),
        l.updateQueue = null,
        e = co(l, a, e, n),
        fo(t),
        a = of(),
        t !== null && !Ut ? (rf(t, l, u),
        Jl(t, l, u)) : (P && a && Li(l),
        l.flags |= 1,
        xt(t, l, e, u),
        l.child)
    }
    function fr(t, l, e, a, n) {
        if (Xe(l),
        l.stateNode === null) {
            var u = sa
              , i = e.contextType;
            typeof i == "object" && i !== null && (u = Xt(i)),
            u = new e(a,u),
            l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = Of,
            l.stateNode = u,
            u._reactInternals = l,
            u = l.stateNode,
            u.props = a,
            u.state = l.memoizedState,
            u.refs = {},
            tf(l),
            i = e.contextType,
            u.context = typeof i == "object" && i !== null ? Xt(i) : sa,
            u.state = l.memoizedState,
            i = e.getDerivedStateFromProps,
            typeof i == "function" && (Mf(l, e, i, a),
            u.state = l.memoizedState),
            typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            i !== u.state && Of.enqueueReplaceState(u, u.state, null),
            sn(l, a, u, n),
            cn(),
            u.state = l.memoizedState),
            typeof u.componentDidMount == "function" && (l.flags |= 4194308),
            a = !0
        } else if (t === null) {
            u = l.stateNode;
            var c = l.memoizedProps
              , s = we(e, c);
            u.props = s;
            var v = u.context
              , z = e.contextType;
            i = sa,
            typeof z == "object" && z !== null && (i = Xt(z));
            var E = e.getDerivedStateFromProps;
            z = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            c = l.pendingProps !== c,
            z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || v !== i) && Jo(l, u, a, i),
            oe = !1;
            var S = l.memoizedState;
            u.state = S,
            sn(l, a, u, n),
            cn(),
            v = l.memoizedState,
            c || S !== v || oe ? (typeof E == "function" && (Mf(l, e, E, a),
            v = l.memoizedState),
            (s = oe || wo(l, e, s, a, S, v, i)) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308),
            l.memoizedProps = a,
            l.memoizedState = v),
            u.props = a,
            u.state = v,
            u.context = i,
            a = s) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308),
            a = !1)
        } else {
            u = l.stateNode,
            lf(t, l),
            i = l.memoizedProps,
            z = we(e, i),
            u.props = z,
            E = l.pendingProps,
            S = u.context,
            v = e.contextType,
            s = sa,
            typeof v == "object" && v !== null && (s = Xt(v)),
            c = e.getDerivedStateFromProps,
            (v = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== E || S !== s) && Jo(l, u, a, s),
            oe = !1,
            S = l.memoizedState,
            u.state = S,
            sn(l, a, u, n),
            cn();
            var b = l.memoizedState;
            i !== E || S !== b || oe || t !== null && t.dependencies !== null && uu(t.dependencies) ? (typeof c == "function" && (Mf(l, e, c, a),
            b = l.memoizedState),
            (z = oe || wo(l, e, z, a, S, b, s) || t !== null && t.dependencies !== null && uu(t.dependencies)) ? (v || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, b, s),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, b, s)),
            typeof u.componentDidUpdate == "function" && (l.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 1024),
            l.memoizedProps = a,
            l.memoizedState = b),
            u.props = a,
            u.state = b,
            u.context = s,
            a = z) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (l.flags |= 1024),
            a = !1)
        }
        return u = a,
        Eu(t, l),
        a = (l.flags & 128) !== 0,
        u || a ? (u = l.stateNode,
        e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(),
        l.flags |= 1,
        t !== null && a ? (l.child = Ve(l, t.child, null, n),
        l.child = Ve(l, null, e, n)) : xt(t, l, e, n),
        l.memoizedState = u.state,
        t = l.child) : t = Jl(t, l, n),
        t
    }
    function cr(t, l, e, a) {
        return je(),
        l.flags |= 256,
        xt(t, l, e, a),
        l.child
    }
    var Nf = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Rf(t) {
        return {
            baseLanes: t,
            cachePool: $s()
        }
    }
    function Cf(t, l, e) {
        return t = t !== null ? t.childLanes & ~e : 0,
        l && (t |= ml),
        t
    }
    function sr(t, l, e) {
        var a = l.pendingProps, n = !1, u = (l.flags & 128) !== 0, i;
        if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (At.current & 2) !== 0),
        i && (n = !0,
        l.flags &= -129),
        i = (l.flags & 32) !== 0,
        l.flags &= -33,
        t === null) {
            if (P) {
                if (n ? me(l) : he(),
                (t = ht) ? (t = vd(t, Al),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (l.memoizedState = {
                    dehydrated: t,
                    treeContext: ie !== null ? {
                        id: Rl,
                        overflow: Cl
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = xs(t),
                e.return = l,
                l.child = e,
                Gt = l,
                ht = null)) : t = null,
                t === null)
                    throw ce(l);
                return hc(t) ? l.lanes = 32 : l.lanes = 536870912,
                null
            }
            var c = a.children;
            return a = a.fallback,
            n ? (he(),
            n = l.mode,
            c = Mu({
                mode: "hidden",
                children: c
            }, n),
            a = Ye(a, n, e, null),
            c.return = l,
            a.return = l,
            c.sibling = a,
            l.child = c,
            a = l.child,
            a.memoizedState = Rf(e),
            a.childLanes = Cf(t, i, e),
            l.memoizedState = Nf,
            hn(null, a)) : (me(l),
            Hf(l, c))
        }
        var s = t.memoizedState;
        if (s !== null && (c = s.dehydrated,
        c !== null)) {
            if (u)
                l.flags & 256 ? (me(l),
                l.flags &= -257,
                l = qf(t, l, e)) : l.memoizedState !== null ? (he(),
                l.child = t.child,
                l.flags |= 128,
                l = null) : (he(),
                c = a.fallback,
                n = l.mode,
                a = Mu({
                    mode: "visible",
                    children: a.children
                }, n),
                c = Ye(c, n, e, null),
                c.flags |= 2,
                a.return = l,
                c.return = l,
                a.sibling = c,
                l.child = a,
                Ve(l, t.child, null, e),
                a = l.child,
                a.memoizedState = Rf(e),
                a.childLanes = Cf(t, i, e),
                l.memoizedState = Nf,
                l = hn(null, a));
            else if (me(l),
            hc(c)) {
                if (i = c.nextSibling && c.nextSibling.dataset,
                i)
                    var v = i.dgst;
                i = v,
                a = Error(o(419)),
                a.stack = "",
                a.digest = i,
                ln({
                    value: a,
                    source: null,
                    stack: null
                }),
                l = qf(t, l, e)
            } else if (Ut || ma(t, l, e, !1),
            i = (e & t.childLanes) !== 0,
            Ut || i) {
                if (i = mt,
                i !== null && (a = Wc(i, e),
                a !== 0 && a !== s.retryLane))
                    throw s.retryLane = a,
                    Be(t, a),
                    al(i, t, a),
                    Df;
                mc(c) || qu(),
                l = qf(t, l, e)
            } else
                mc(c) ? (l.flags |= 192,
                l.child = t.child,
                l = null) : (t = s.treeContext,
                ht = Ml(c.nextSibling),
                Gt = l,
                P = !0,
                fe = null,
                Al = !1,
                t !== null && Vs(l, t),
                l = Hf(l, a.children),
                l.flags |= 4096);
            return l
        }
        return n ? (he(),
        c = a.fallback,
        n = l.mode,
        s = t.child,
        v = s.sibling,
        a = xl(s, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = s.subtreeFlags & 65011712,
        v !== null ? c = xl(v, c) : (c = Ye(c, n, e, null),
        c.flags |= 2),
        c.return = l,
        a.return = l,
        a.sibling = c,
        l.child = a,
        hn(null, a),
        a = l.child,
        c = t.child.memoizedState,
        c === null ? c = Rf(e) : (n = c.cachePool,
        n !== null ? (s = _t._currentValue,
        n = n.parent !== s ? {
            parent: s,
            pool: s
        } : n) : n = $s(),
        c = {
            baseLanes: c.baseLanes | e,
            cachePool: n
        }),
        a.memoizedState = c,
        a.childLanes = Cf(t, i, e),
        l.memoizedState = Nf,
        hn(t.child, a)) : (me(l),
        e = t.child,
        t = e.sibling,
        e = xl(e, {
            mode: "visible",
            children: a.children
        }),
        e.return = l,
        e.sibling = null,
        t !== null && (i = l.deletions,
        i === null ? (l.deletions = [t],
        l.flags |= 16) : i.push(t)),
        l.child = e,
        l.memoizedState = null,
        e)
    }
    function Hf(t, l) {
        return l = Mu({
            mode: "visible",
            children: l
        }, t.mode),
        l.return = t,
        t.child = l
    }
    function Mu(t, l) {
        return t = sl(22, t, null, l),
        t.lanes = 0,
        t
    }
    function qf(t, l, e) {
        return Ve(l, t.child, null, e),
        t = Hf(l, l.pendingProps.children),
        t.flags |= 2,
        l.memoizedState = null,
        t
    }
    function or(t, l, e) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l),
        Wi(t.return, l, e)
    }
    function Qf(t, l, e, a, n, u) {
        var i = t.memoizedState;
        i === null ? t.memoizedState = {
            isBackwards: l,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: n,
            treeForkCount: u
        } : (i.isBackwards = l,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = a,
        i.tail = e,
        i.tailMode = n,
        i.treeForkCount = u)
    }
    function rr(t, l, e) {
        var a = l.pendingProps
          , n = a.revealOrder
          , u = a.tail;
        a = a.children;
        var i = At.current
          , c = (i & 2) !== 0;
        if (c ? (i = i & 1 | 2,
        l.flags |= 128) : i &= 1,
        U(At, i),
        xt(t, l, a, e),
        a = P ? tn : 0,
        !c && t !== null && (t.flags & 128) !== 0)
            t: for (t = l.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && or(t, e, l);
                else if (t.tag === 19)
                    or(t, e, l);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === l)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (n) {
        case "forwards":
            for (e = l.child,
            n = null; e !== null; )
                t = e.alternate,
                t !== null && mu(t) === null && (n = e),
                e = e.sibling;
            e = n,
            e === null ? (n = l.child,
            l.child = null) : (n = e.sibling,
            e.sibling = null),
            Qf(l, !1, n, e, u, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (e = null,
            n = l.child,
            l.child = null; n !== null; ) {
                if (t = n.alternate,
                t !== null && mu(t) === null) {
                    l.child = n;
                    break
                }
                t = n.sibling,
                n.sibling = e,
                e = n,
                n = t
            }
            Qf(l, !0, e, null, u, a);
            break;
        case "together":
            Qf(l, !1, null, null, void 0, a);
            break;
        default:
            l.memoizedState = null
        }
        return l.child
    }
    function Jl(t, l, e) {
        if (t !== null && (l.dependencies = t.dependencies),
        ve |= l.lanes,
        (e & l.childLanes) === 0)
            if (t !== null) {
                if (ma(t, l, e, !1),
                (e & l.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && l.child !== t.child)
            throw Error(o(153));
        if (l.child !== null) {
            for (t = l.child,
            e = xl(t, t.pendingProps),
            l.child = e,
            e.return = l; t.sibling !== null; )
                t = t.sibling,
                e = e.sibling = xl(t, t.pendingProps),
                e.return = l;
            e.sibling = null
        }
        return l.child
    }
    function Bf(t, l) {
        return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && uu(t)))
    }
    function Cm(t, l, e) {
        switch (l.tag) {
        case 3:
            Jt(l, l.stateNode.containerInfo),
            se(l, _t, t.memoizedState.cache),
            je();
            break;
        case 27:
        case 5:
            Ga(l);
            break;
        case 4:
            Jt(l, l.stateNode.containerInfo);
            break;
        case 10:
            se(l, l.type, l.memoizedProps.value);
            break;
        case 31:
            if (l.memoizedState !== null)
                return l.flags |= 128,
                ff(l),
                null;
            break;
        case 13:
            var a = l.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (me(l),
                l.flags |= 128,
                null) : (e & l.child.childLanes) !== 0 ? sr(t, l, e) : (me(l),
                t = Jl(t, l, e),
                t !== null ? t.sibling : null);
            me(l);
            break;
        case 19:
            var n = (t.flags & 128) !== 0;
            if (a = (e & l.childLanes) !== 0,
            a || (ma(t, l, e, !1),
            a = (e & l.childLanes) !== 0),
            n) {
                if (a)
                    return rr(t, l, e);
                l.flags |= 128
            }
            if (n = l.memoizedState,
            n !== null && (n.rendering = null,
            n.tail = null,
            n.lastEffect = null),
            U(At, At.current),
            a)
                break;
            return null;
        case 22:
            return l.lanes = 0,
            ar(t, l, e, l.pendingProps);
        case 24:
            se(l, _t, t.memoizedState.cache)
        }
        return Jl(t, l, e)
    }
    function dr(t, l, e) {
        if (t !== null)
            if (t.memoizedProps !== l.pendingProps)
                Ut = !0;
            else {
                if (!Bf(t, e) && (l.flags & 128) === 0)
                    return Ut = !1,
                    Cm(t, l, e);
                Ut = (t.flags & 131072) !== 0
            }
        else
            Ut = !1,
            P && (l.flags & 1048576) !== 0 && Ls(l, tn, l.index);
        switch (l.lanes = 0,
        l.tag) {
        case 16:
            t: {
                var a = l.pendingProps;
                if (t = Ze(l.elementType),
                l.type = t,
                typeof t == "function")
                    Xi(t) ? (a = we(t, a),
                    l.tag = 1,
                    l = fr(null, l, t, a, e)) : (l.tag = 0,
                    l = Uf(null, l, t, a, e));
                else {
                    if (t != null) {
                        var n = t.$$typeof;
                        if (n === Lt) {
                            l.tag = 11,
                            l = tr(null, l, t, a, e);
                            break t
                        } else if (n === K) {
                            l.tag = 14,
                            l = lr(null, l, t, a, e);
                            break t
                        }
                    }
                    throw l = Yl(t) || t,
                    Error(o(306, l, ""))
                }
            }
            return l;
        case 0:
            return Uf(t, l, l.type, l.pendingProps, e);
        case 1:
            return a = l.type,
            n = we(a, l.pendingProps),
            fr(t, l, a, n, e);
        case 3:
            t: {
                if (Jt(l, l.stateNode.containerInfo),
                t === null)
                    throw Error(o(387));
                a = l.pendingProps;
                var u = l.memoizedState;
                n = u.element,
                lf(t, l),
                sn(l, a, null, e);
                var i = l.memoizedState;
                if (a = i.cache,
                se(l, _t, a),
                a !== u.cache && ki(l, [_t], e, !0),
                cn(),
                a = i.element,
                u.isDehydrated)
                    if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: i.cache
                    },
                    l.updateQueue.baseState = u,
                    l.memoizedState = u,
                    l.flags & 256) {
                        l = cr(t, l, a, e);
                        break t
                    } else if (a !== n) {
                        n = zl(Error(o(424)), l),
                        ln(n),
                        l = cr(t, l, a, e);
                        break t
                    } else
                        for (t = l.stateNode.containerInfo,
                        t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t,
                        ht = Ml(t.firstChild),
                        Gt = l,
                        P = !0,
                        fe = null,
                        Al = !0,
                        e = eo(l, null, a, e),
                        l.child = e; e; )
                            e.flags = e.flags & -3 | 4096,
                            e = e.sibling;
                else {
                    if (je(),
                    a === n) {
                        l = Jl(t, l, e);
                        break t
                    }
                    xt(t, l, a, e)
                }
                l = l.child
            }
            return l;
        case 26:
            return Eu(t, l),
            t === null ? (e = Ad(l.type, null, l.pendingProps, null)) ? l.memoizedState = e : P || (e = l.type,
            t = l.pendingProps,
            a = xu(J.current).createElement(e),
            a[jt] = l,
            a[Ft] = t,
            Zt(a, e, t),
            qt(a),
            l.stateNode = a) : l.memoizedState = Ad(l.type, t.memoizedProps, l.pendingProps, t.memoizedState),
            null;
        case 27:
            return Ga(l),
            t === null && P && (a = l.stateNode = zd(l.type, l.pendingProps, J.current),
            Gt = l,
            Al = !0,
            n = ht,
            pe(l.type) ? (gc = n,
            ht = Ml(a.firstChild)) : ht = n),
            xt(t, l, l.pendingProps.children, e),
            Eu(t, l),
            t === null && (l.flags |= 4194304),
            l.child;
        case 5:
            return t === null && P && ((n = a = ht) && (a = ch(a, l.type, l.pendingProps, Al),
            a !== null ? (l.stateNode = a,
            Gt = l,
            ht = Ml(a.firstChild),
            Al = !1,
            n = !0) : n = !1),
            n || ce(l)),
            Ga(l),
            n = l.type,
            u = l.pendingProps,
            i = t !== null ? t.memoizedProps : null,
            a = u.children,
            oc(n, u) ? a = null : i !== null && oc(n, i) && (l.flags |= 32),
            l.memoizedState !== null && (n = sf(t, l, Am, null, null, e),
            Un._currentValue = n),
            Eu(t, l),
            xt(t, l, a, e),
            l.child;
        case 6:
            return t === null && P && ((t = e = ht) && (e = sh(e, l.pendingProps, Al),
            e !== null ? (l.stateNode = e,
            Gt = l,
            ht = null,
            t = !0) : t = !1),
            t || ce(l)),
            null;
        case 13:
            return sr(t, l, e);
        case 4:
            return Jt(l, l.stateNode.containerInfo),
            a = l.pendingProps,
            t === null ? l.child = Ve(l, null, a, e) : xt(t, l, a, e),
            l.child;
        case 11:
            return tr(t, l, l.type, l.pendingProps, e);
        case 7:
            return xt(t, l, l.pendingProps, e),
            l.child;
        case 8:
            return xt(t, l, l.pendingProps.children, e),
            l.child;
        case 12:
            return xt(t, l, l.pendingProps.children, e),
            l.child;
        case 10:
            return a = l.pendingProps,
            se(l, l.type, a.value),
            xt(t, l, a.children, e),
            l.child;
        case 9:
            return n = l.type._context,
            a = l.pendingProps.children,
            Xe(l),
            n = Xt(n),
            a = a(n),
            l.flags |= 1,
            xt(t, l, a, e),
            l.child;
        case 14:
            return lr(t, l, l.type, l.pendingProps, e);
        case 15:
            return er(t, l, l.type, l.pendingProps, e);
        case 19:
            return rr(t, l, e);
        case 31:
            return Rm(t, l, e);
        case 22:
            return ar(t, l, e, l.pendingProps);
        case 24:
            return Xe(l),
            a = Xt(_t),
            t === null ? (n = Ii(),
            n === null && (n = mt,
            u = $i(),
            n.pooledCache = u,
            u.refCount++,
            u !== null && (n.pooledCacheLanes |= e),
            n = u),
            l.memoizedState = {
                parent: a,
                cache: n
            },
            tf(l),
            se(l, _t, n)) : ((t.lanes & e) !== 0 && (lf(t, l),
            sn(l, null, null, e),
            cn()),
            n = t.memoizedState,
            u = l.memoizedState,
            n.parent !== a ? (n = {
                parent: a,
                cache: a
            },
            l.memoizedState = n,
            l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n),
            se(l, _t, a)) : (a = u.cache,
            se(l, _t, a),
            a !== n.cache && ki(l, [_t], e, !0))),
            xt(t, l, l.pendingProps.children, e),
            l.child;
        case 29:
            throw l.pendingProps
        }
        throw Error(o(156, l.tag))
    }
    function Wl(t) {
        t.flags |= 4
    }
    function Yf(t, l, e, a, n) {
        if ((l = (t.mode & 32) !== 0) && (l = !1),
        l) {
            if (t.flags |= 16777216,
            (n & 335544128) === n)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (Gr())
                    t.flags |= 8192;
                else
                    throw Le = su,
                    Pi
        } else
            t.flags &= -16777217
    }
    function mr(t, l) {
        if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !Dd(l))
            if (Gr())
                t.flags |= 8192;
            else
                throw Le = su,
                Pi
    }
    function Ou(t, l) {
        l !== null && (t.flags |= 4),
        t.flags & 16384 && (l = t.tag !== 22 ? Kc() : 536870912,
        t.lanes |= l,
        Ma |= l)
    }
    function gn(t, l) {
        if (!P)
            switch (t.tailMode) {
            case "hidden":
                l = t.tail;
                for (var e = null; l !== null; )
                    l.alternate !== null && (e = l),
                    l = l.sibling;
                e === null ? t.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = t.tail;
                for (var a = null; e !== null; )
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
            }
    }
    function gt(t) {
        var l = t.alternate !== null && t.alternate.child === t.child
          , e = 0
          , a = 0;
        if (l)
            for (var n = t.child; n !== null; )
                e |= n.lanes | n.childLanes,
                a |= n.subtreeFlags & 65011712,
                a |= n.flags & 65011712,
                n.return = t,
                n = n.sibling;
        else
            for (n = t.child; n !== null; )
                e |= n.lanes | n.childLanes,
                a |= n.subtreeFlags,
                a |= n.flags,
                n.return = t,
                n = n.sibling;
        return t.subtreeFlags |= a,
        t.childLanes = e,
        l
    }
    function Hm(t, l, e) {
        var a = l.pendingProps;
        switch (Vi(l),
        l.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return gt(l),
            null;
        case 1:
            return gt(l),
            null;
        case 3:
            return e = l.stateNode,
            a = null,
            t !== null && (a = t.memoizedState.cache),
            l.memoizedState.cache !== a && (l.flags |= 2048),
            Vl(_t),
            pt(),
            e.pendingContext && (e.context = e.pendingContext,
            e.pendingContext = null),
            (t === null || t.child === null) && (da(l) ? Wl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024,
            wi())),
            gt(l),
            null;
        case 26:
            var n = l.type
              , u = l.memoizedState;
            return t === null ? (Wl(l),
            u !== null ? (gt(l),
            mr(l, u)) : (gt(l),
            Yf(l, n, null, a, e))) : u ? u !== t.memoizedState ? (Wl(l),
            gt(l),
            mr(l, u)) : (gt(l),
            l.flags &= -16777217) : (t = t.memoizedProps,
            t !== a && Wl(l),
            gt(l),
            Yf(l, n, t, a, e)),
            null;
        case 27:
            if (Yn(l),
            e = J.current,
            n = l.type,
            t !== null && l.stateNode != null)
                t.memoizedProps !== a && Wl(l);
            else {
                if (!a) {
                    if (l.stateNode === null)
                        throw Error(o(166));
                    return gt(l),
                    null
                }
                t = C.current,
                da(l) ? Ks(l) : (t = zd(n, a, e),
                l.stateNode = t,
                Wl(l))
            }
            return gt(l),
            null;
        case 5:
            if (Yn(l),
            n = l.type,
            t !== null && l.stateNode != null)
                t.memoizedProps !== a && Wl(l);
            else {
                if (!a) {
                    if (l.stateNode === null)
                        throw Error(o(166));
                    return gt(l),
                    null
                }
                if (u = C.current,
                da(l))
                    Ks(l);
                else {
                    var i = xu(J.current);
                    switch (u) {
                    case 1:
                        u = i.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            u = i.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            u = i.createElement("div"),
                            u.innerHTML = "<script><\/script>",
                            u = u.removeChild(u.firstChild);
                            break;
                        case "select":
                            u = typeof a.is == "string" ? i.createElement("select", {
                                is: a.is
                            }) : i.createElement("select"),
                            a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                            break;
                        default:
                            u = typeof a.is == "string" ? i.createElement(n, {
                                is: a.is
                            }) : i.createElement(n)
                        }
                    }
                    u[jt] = l,
                    u[Ft] = a;
                    t: for (i = l.child; i !== null; ) {
                        if (i.tag === 5 || i.tag === 6)
                            u.appendChild(i.stateNode);
                        else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                            i.child.return = i,
                            i = i.child;
                            continue
                        }
                        if (i === l)
                            break t;
                        for (; i.sibling === null; ) {
                            if (i.return === null || i.return === l)
                                break t;
                            i = i.return
                        }
                        i.sibling.return = i.return,
                        i = i.sibling
                    }
                    l.stateNode = u;
                    t: switch (Zt(u, n, a),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break t;
                    case "img":
                        a = !0;
                        break t;
                    default:
                        a = !1
                    }
                    a && Wl(l)
                }
            }
            return gt(l),
            Yf(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, e),
            null;
        case 6:
            if (t && l.stateNode != null)
                t.memoizedProps !== a && Wl(l);
            else {
                if (typeof a != "string" && l.stateNode === null)
                    throw Error(o(166));
                if (t = J.current,
                da(l)) {
                    if (t = l.stateNode,
                    e = l.memoizedProps,
                    a = null,
                    n = Gt,
                    n !== null)
                        switch (n.tag) {
                        case 27:
                        case 5:
                            a = n.memoizedProps
                        }
                    t[jt] = l,
                    t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || sd(t.nodeValue, e)),
                    t || ce(l, !0)
                } else
                    t = xu(t).createTextNode(a),
                    t[jt] = l,
                    l.stateNode = t
            }
            return gt(l),
            null;
        case 31:
            if (e = l.memoizedState,
            t === null || t.memoizedState !== null) {
                if (a = da(l),
                e !== null) {
                    if (t === null) {
                        if (!a)
                            throw Error(o(318));
                        if (t = l.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(o(557));
                        t[jt] = l
                    } else
                        je(),
                        (l.flags & 128) === 0 && (l.memoizedState = null),
                        l.flags |= 4;
                    gt(l),
                    t = !1
                } else
                    e = wi(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e),
                    t = !0;
                if (!t)
                    return l.flags & 256 ? (rl(l),
                    l) : (rl(l),
                    null);
                if ((l.flags & 128) !== 0)
                    throw Error(o(558))
            }
            return gt(l),
            null;
        case 13:
            if (a = l.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (n = da(l),
                a !== null && a.dehydrated !== null) {
                    if (t === null) {
                        if (!n)
                            throw Error(o(318));
                        if (n = l.memoizedState,
                        n = n !== null ? n.dehydrated : null,
                        !n)
                            throw Error(o(317));
                        n[jt] = l
                    } else
                        je(),
                        (l.flags & 128) === 0 && (l.memoizedState = null),
                        l.flags |= 4;
                    gt(l),
                    n = !1
                } else
                    n = wi(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
                    n = !0;
                if (!n)
                    return l.flags & 256 ? (rl(l),
                    l) : (rl(l),
                    null)
            }
            return rl(l),
            (l.flags & 128) !== 0 ? (l.lanes = e,
            l) : (e = a !== null,
            t = t !== null && t.memoizedState !== null,
            e && (a = l.child,
            n = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool),
            u = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048)),
            e !== t && e && (l.child.flags |= 8192),
            Ou(l, l.updateQueue),
            gt(l),
            null);
        case 4:
            return pt(),
            t === null && uc(l.stateNode.containerInfo),
            gt(l),
            null;
        case 10:
            return Vl(l.type),
            gt(l),
            null;
        case 19:
            if (M(At),
            a = l.memoizedState,
            a === null)
                return gt(l),
                null;
            if (n = (l.flags & 128) !== 0,
            u = a.rendering,
            u === null)
                if (n)
                    gn(a, !1);
                else {
                    if (Tt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = l.child; t !== null; ) {
                            if (u = mu(t),
                            u !== null) {
                                for (l.flags |= 128,
                                gn(a, !1),
                                t = u.updateQueue,
                                l.updateQueue = t,
                                Ou(l, t),
                                l.subtreeFlags = 0,
                                t = e,
                                e = l.child; e !== null; )
                                    Xs(e, t),
                                    e = e.sibling;
                                return U(At, At.current & 1 | 2),
                                P && Zl(l, a.treeForkCount),
                                l.child
                            }
                            t = t.sibling
                        }
                    a.tail !== null && ul() > Ru && (l.flags |= 128,
                    n = !0,
                    gn(a, !1),
                    l.lanes = 4194304)
                }
            else {
                if (!n)
                    if (t = mu(u),
                    t !== null) {
                        if (l.flags |= 128,
                        n = !0,
                        t = t.updateQueue,
                        l.updateQueue = t,
                        Ou(l, t),
                        gn(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !u.alternate && !P)
                            return gt(l),
                            null
                    } else
                        2 * ul() - a.renderingStartTime > Ru && e !== 536870912 && (l.flags |= 128,
                        n = !0,
                        gn(a, !1),
                        l.lanes = 4194304);
                a.isBackwards ? (u.sibling = l.child,
                l.child = u) : (t = a.last,
                t !== null ? t.sibling = u : l.child = u,
                a.last = u)
            }
            return a.tail !== null ? (t = a.tail,
            a.rendering = t,
            a.tail = t.sibling,
            a.renderingStartTime = ul(),
            t.sibling = null,
            e = At.current,
            U(At, n ? e & 1 | 2 : e & 1),
            P && Zl(l, a.treeForkCount),
            t) : (gt(l),
            null);
        case 22:
        case 23:
            return rl(l),
            uf(),
            a = l.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192),
            a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (gt(l),
            l.subtreeFlags & 6 && (l.flags |= 8192)) : gt(l),
            e = l.updateQueue,
            e !== null && Ou(l, e.retryQueue),
            e = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            a = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool),
            a !== e && (l.flags |= 2048),
            t !== null && M(xe),
            null;
        case 24:
            return e = null,
            t !== null && (e = t.memoizedState.cache),
            l.memoizedState.cache !== e && (l.flags |= 2048),
            Vl(_t),
            gt(l),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, l.tag))
    }
    function qm(t, l) {
        switch (Vi(l),
        l.tag) {
        case 1:
            return t = l.flags,
            t & 65536 ? (l.flags = t & -65537 | 128,
            l) : null;
        case 3:
            return Vl(_t),
            pt(),
            t = l.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128,
            l) : null;
        case 26:
        case 27:
        case 5:
            return Yn(l),
            null;
        case 31:
            if (l.memoizedState !== null) {
                if (rl(l),
                l.alternate === null)
                    throw Error(o(340));
                je()
            }
            return t = l.flags,
            t & 65536 ? (l.flags = t & -65537 | 128,
            l) : null;
        case 13:
            if (rl(l),
            t = l.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (l.alternate === null)
                    throw Error(o(340));
                je()
            }
            return t = l.flags,
            t & 65536 ? (l.flags = t & -65537 | 128,
            l) : null;
        case 19:
            return M(At),
            null;
        case 4:
            return pt(),
            null;
        case 10:
            return Vl(l.type),
            null;
        case 22:
        case 23:
            return rl(l),
            uf(),
            t !== null && M(xe),
            t = l.flags,
            t & 65536 ? (l.flags = t & -65537 | 128,
            l) : null;
        case 24:
            return Vl(_t),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function hr(t, l) {
        switch (Vi(l),
        l.tag) {
        case 3:
            Vl(_t),
            pt();
            break;
        case 26:
        case 27:
        case 5:
            Yn(l);
            break;
        case 4:
            pt();
            break;
        case 31:
            l.memoizedState !== null && rl(l);
            break;
        case 13:
            rl(l);
            break;
        case 19:
            M(At);
            break;
        case 10:
            Vl(l.type);
            break;
        case 22:
        case 23:
            rl(l),
            uf(),
            t !== null && M(xe);
            break;
        case 24:
            Vl(_t)
        }
    }
    function yn(t, l) {
        try {
            var e = l.updateQueue
              , a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                e = n;
                do {
                    if ((e.tag & t) === t) {
                        a = void 0;
                        var u = e.create
                          , i = e.inst;
                        a = u(),
                        i.destroy = a
                    }
                    e = e.next
                } while (e !== n)
            }
        } catch (c) {
            ft(l, l.return, c)
        }
    }
    function ge(t, l, e) {
        try {
            var a = l.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        var i = a.inst
                          , c = i.destroy;
                        if (c !== void 0) {
                            i.destroy = void 0,
                            n = l;
                            var s = e
                              , v = c;
                            try {
                                v()
                            } catch (z) {
                                ft(n, s, z)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (z) {
            ft(l, l.return, z)
        }
    }
    function gr(t) {
        var l = t.updateQueue;
        if (l !== null) {
            var e = t.stateNode;
            try {
                no(l, e)
            } catch (a) {
                ft(t, t.return, a)
            }
        }
    }
    function yr(t, l, e) {
        e.props = we(t.type, t.memoizedProps),
        e.state = t.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            ft(t, l, a)
        }
    }
    function vn(t, l) {
        try {
            var e = t.ref;
            if (e !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var a = t.stateNode;
                    break;
                case 30:
                    a = t.stateNode;
                    break;
                default:
                    a = t.stateNode
                }
                typeof e == "function" ? t.refCleanup = e(a) : e.current = a
            }
        } catch (n) {
            ft(t, l, n)
        }
    }
    function Hl(t, l) {
        var e = t.ref
          , a = t.refCleanup;
        if (e !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    ft(t, l, n)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof e == "function")
                try {
                    e(null)
                } catch (n) {
                    ft(t, l, n)
                }
            else
                e.current = null
    }
    function vr(t) {
        var l = t.type
          , e = t.memoizedProps
          , a = t.stateNode;
        try {
            t: switch (l) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                e.autoFocus && a.focus();
                break t;
            case "img":
                e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
            }
        } catch (n) {
            ft(t, t.return, n)
        }
    }
    function jf(t, l, e) {
        try {
            var a = t.stateNode;
            eh(a, t.type, e, l),
            a[Ft] = l
        } catch (n) {
            ft(t, t.return, n)
        }
    }
    function Sr(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && pe(t.type) || t.tag === 4
    }
    function Gf(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || Sr(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && pe(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Xf(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            l.appendChild(t),
            e = e._reactRootContainer,
            e != null || l.onclick !== null || (l.onclick = Gl));
        else if (a !== 4 && (a === 27 && pe(t.type) && (e = t.stateNode,
        l = null),
        t = t.child,
        t !== null))
            for (Xf(t, l, e),
            t = t.sibling; t !== null; )
                Xf(t, l, e),
                t = t.sibling
    }
    function _u(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            l ? e.insertBefore(t, l) : e.appendChild(t);
        else if (a !== 4 && (a === 27 && pe(t.type) && (e = t.stateNode),
        t = t.child,
        t !== null))
            for (_u(t, l, e),
            t = t.sibling; t !== null; )
                _u(t, l, e),
                t = t.sibling
    }
    function br(t) {
        var l = t.stateNode
          , e = t.memoizedProps;
        try {
            for (var a = t.type, n = l.attributes; n.length; )
                l.removeAttributeNode(n[0]);
            Zt(l, a, e),
            l[jt] = t,
            l[Ft] = e
        } catch (u) {
            ft(t, t.return, u)
        }
    }
    var kl = !1
      , Nt = !1
      , xf = !1
      , zr = typeof WeakSet == "function" ? WeakSet : Set
      , Qt = null;
    function Qm(t, l) {
        if (t = t.containerInfo,
        cc = Wu,
        t = Rs(t),
        Hi(t)) {
            if ("selectionStart"in t)
                var e = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    e = (e = t.ownerDocument) && e.defaultView || window;
                    var a = e.getSelection && e.getSelection();
                    if (a && a.rangeCount !== 0) {
                        e = a.anchorNode;
                        var n = a.anchorOffset
                          , u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            e.nodeType,
                            u.nodeType
                        } catch {
                            e = null;
                            break t
                        }
                        var i = 0
                          , c = -1
                          , s = -1
                          , v = 0
                          , z = 0
                          , E = t
                          , S = null;
                        l: for (; ; ) {
                            for (var b; E !== e || n !== 0 && E.nodeType !== 3 || (c = i + n),
                            E !== u || a !== 0 && E.nodeType !== 3 || (s = i + a),
                            E.nodeType === 3 && (i += E.nodeValue.length),
                            (b = E.firstChild) !== null; )
                                S = E,
                                E = b;
                            for (; ; ) {
                                if (E === t)
                                    break l;
                                if (S === e && ++v === n && (c = i),
                                S === u && ++z === a && (s = i),
                                (b = E.nextSibling) !== null)
                                    break;
                                E = S,
                                S = E.parentNode
                            }
                            E = b
                        }
                        e = c === -1 || s === -1 ? null : {
                            start: c,
                            end: s
                        }
                    } else
                        e = null
                }
            e = e || {
                start: 0,
                end: 0
            }
        } else
            e = null;
        for (sc = {
            focusedElem: t,
            selectionRange: e
        },
        Wu = !1,
        Qt = l; Qt !== null; )
            if (l = Qt,
            t = l.child,
            (l.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = l,
                Qt = t;
            else
                for (; Qt !== null; ) {
                    switch (l = Qt,
                    u = l.alternate,
                    t = l.flags,
                    l.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = l.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (e = 0; e < t.length; e++)
                                n = t[e],
                                n.ref.impl = n.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && u !== null) {
                            t = void 0,
                            e = l,
                            n = u.memoizedProps,
                            u = u.memoizedState,
                            a = e.stateNode;
                            try {
                                var R = we(e.type, n);
                                t = a.getSnapshotBeforeUpdate(R, u),
                                a.__reactInternalSnapshotBeforeUpdate = t
                            } catch (Y) {
                                ft(e, e.return, Y)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = l.stateNode.containerInfo,
                            e = t.nodeType,
                            e === 9)
                                dc(t);
                            else if (e === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    dc(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (t = l.sibling,
                    t !== null) {
                        t.return = l.return,
                        Qt = t;
                        break
                    }
                    Qt = l.return
                }
    }
    function Tr(t, l, e) {
        var a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Fl(t, e),
            a & 4 && yn(5, e);
            break;
        case 1:
            if (Fl(t, e),
            a & 4)
                if (t = e.stateNode,
                l === null)
                    try {
                        t.componentDidMount()
                    } catch (i) {
                        ft(e, e.return, i)
                    }
                else {
                    var n = we(e.type, l.memoizedProps);
                    l = l.memoizedState;
                    try {
                        t.componentDidUpdate(n, l, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        ft(e, e.return, i)
                    }
                }
            a & 64 && gr(e),
            a & 512 && vn(e, e.return);
            break;
        case 3:
            if (Fl(t, e),
            a & 64 && (t = e.updateQueue,
            t !== null)) {
                if (l = null,
                e.child !== null)
                    switch (e.child.tag) {
                    case 27:
                    case 5:
                        l = e.child.stateNode;
                        break;
                    case 1:
                        l = e.child.stateNode
                    }
                try {
                    no(t, l)
                } catch (i) {
                    ft(e, e.return, i)
                }
            }
            break;
        case 27:
            l === null && a & 4 && br(e);
        case 26:
        case 5:
            Fl(t, e),
            l === null && a & 4 && vr(e),
            a & 512 && vn(e, e.return);
            break;
        case 12:
            Fl(t, e);
            break;
        case 31:
            Fl(t, e),
            a & 4 && Er(t, e);
            break;
        case 13:
            Fl(t, e),
            a & 4 && Mr(t, e),
            a & 64 && (t = e.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (e = Vm.bind(null, e),
            oh(t, e))));
            break;
        case 22:
            if (a = e.memoizedState !== null || kl,
            !a) {
                l = l !== null && l.memoizedState !== null || Nt,
                n = kl;
                var u = Nt;
                kl = a,
                (Nt = l) && !u ? Il(t, e, (e.subtreeFlags & 8772) !== 0) : Fl(t, e),
                kl = n,
                Nt = u
            }
            break;
        case 30:
            break;
        default:
            Fl(t, e)
        }
    }
    function pr(t) {
        var l = t.alternate;
        l !== null && (t.alternate = null,
        pr(l)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (l = t.stateNode,
        l !== null && yi(l)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var yt = null
      , Pt = !1;
    function $l(t, l, e) {
        for (e = e.child; e !== null; )
            Ar(t, l, e),
            e = e.sibling
    }
    function Ar(t, l, e) {
        if (il && typeof il.onCommitFiberUnmount == "function")
            try {
                il.onCommitFiberUnmount(Xa, e)
            } catch {}
        switch (e.tag) {
        case 26:
            Nt || Hl(e, l),
            $l(t, l, e),
            e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode,
            e.parentNode.removeChild(e));
            break;
        case 27:
            Nt || Hl(e, l);
            var a = yt
              , n = Pt;
            pe(e.type) && (yt = e.stateNode,
            Pt = !1),
            $l(t, l, e),
            On(e.stateNode),
            yt = a,
            Pt = n;
            break;
        case 5:
            Nt || Hl(e, l);
        case 6:
            if (a = yt,
            n = Pt,
            yt = null,
            $l(t, l, e),
            yt = a,
            Pt = n,
            yt !== null)
                if (Pt)
                    try {
                        (yt.nodeType === 9 ? yt.body : yt.nodeName === "HTML" ? yt.ownerDocument.body : yt).removeChild(e.stateNode)
                    } catch (u) {
                        ft(e, l, u)
                    }
                else
                    try {
                        yt.removeChild(e.stateNode)
                    } catch (u) {
                        ft(e, l, u)
                    }
            break;
        case 18:
            yt !== null && (Pt ? (t = yt,
            gd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.stateNode),
            Ha(t)) : gd(yt, e.stateNode));
            break;
        case 4:
            a = yt,
            n = Pt,
            yt = e.stateNode.containerInfo,
            Pt = !0,
            $l(t, l, e),
            yt = a,
            Pt = n;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            ge(2, e, l),
            Nt || ge(4, e, l),
            $l(t, l, e);
            break;
        case 1:
            Nt || (Hl(e, l),
            a = e.stateNode,
            typeof a.componentWillUnmount == "function" && yr(e, l, a)),
            $l(t, l, e);
            break;
        case 21:
            $l(t, l, e);
            break;
        case 22:
            Nt = (a = Nt) || e.memoizedState !== null,
            $l(t, l, e),
            Nt = a;
            break;
        default:
            $l(t, l, e)
        }
    }
    function Er(t, l) {
        if (l.memoizedState === null && (t = l.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                Ha(t)
            } catch (e) {
                ft(l, l.return, e)
            }
        }
    }
    function Mr(t, l) {
        if (l.memoizedState === null && (t = l.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Ha(t)
            } catch (e) {
                ft(l, l.return, e)
            }
    }
    function Bm(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var l = t.stateNode;
            return l === null && (l = t.stateNode = new zr),
            l;
        case 22:
            return t = t.stateNode,
            l = t._retryCache,
            l === null && (l = t._retryCache = new zr),
            l;
        default:
            throw Error(o(435, t.tag))
        }
    }
    function Du(t, l) {
        var e = Bm(t);
        l.forEach(function(a) {
            if (!e.has(a)) {
                e.add(a);
                var n = Km.bind(null, t, a);
                a.then(n, n)
            }
        })
    }
    function tl(t, l) {
        var e = l.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var n = e[a]
                  , u = t
                  , i = l
                  , c = i;
                t: for (; c !== null; ) {
                    switch (c.tag) {
                    case 27:
                        if (pe(c.type)) {
                            yt = c.stateNode,
                            Pt = !1;
                            break t
                        }
                        break;
                    case 5:
                        yt = c.stateNode,
                        Pt = !1;
                        break t;
                    case 3:
                    case 4:
                        yt = c.stateNode.containerInfo,
                        Pt = !0;
                        break t
                    }
                    c = c.return
                }
                if (yt === null)
                    throw Error(o(160));
                Ar(u, i, n),
                yt = null,
                Pt = !1,
                u = n.alternate,
                u !== null && (u.return = null),
                n.return = null
            }
        if (l.subtreeFlags & 13886)
            for (l = l.child; l !== null; )
                Or(l, t),
                l = l.sibling
    }
    var Ul = null;
    function Or(t, l) {
        var e = t.alternate
          , a = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            tl(l, t),
            ll(t),
            a & 4 && (ge(3, t, t.return),
            yn(3, t),
            ge(5, t, t.return));
            break;
        case 1:
            tl(l, t),
            ll(t),
            a & 512 && (Nt || e === null || Hl(e, e.return)),
            a & 64 && kl && (t = t.updateQueue,
            t !== null && (a = t.callbacks,
            a !== null && (e = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
        case 26:
            var n = Ul;
            if (tl(l, t),
            ll(t),
            a & 512 && (Nt || e === null || Hl(e, e.return)),
            a & 4) {
                var u = e !== null ? e.memoizedState : null;
                if (a = t.memoizedState,
                e === null)
                    if (a === null)
                        if (t.stateNode === null) {
                            t: {
                                a = t.type,
                                e = t.memoizedProps,
                                n = n.ownerDocument || n;
                                l: switch (a) {
                                case "title":
                                    u = n.getElementsByTagName("title")[0],
                                    (!u || u[La] || u[jt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a),
                                    n.head.insertBefore(u, n.querySelector("head > title"))),
                                    Zt(u, a, e),
                                    u[jt] = t,
                                    qt(u),
                                    a = u;
                                    break t;
                                case "link":
                                    var i = Od("link", "href", n).get(a + (e.href || ""));
                                    if (i) {
                                        for (var c = 0; c < i.length; c++)
                                            if (u = i[c],
                                            u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                i.splice(c, 1);
                                                break l
                                            }
                                    }
                                    u = n.createElement(a),
                                    Zt(u, a, e),
                                    n.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (i = Od("meta", "content", n).get(a + (e.content || ""))) {
                                        for (c = 0; c < i.length; c++)
                                            if (u = i[c],
                                            u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                i.splice(c, 1);
                                                break l
                                            }
                                    }
                                    u = n.createElement(a),
                                    Zt(u, a, e),
                                    n.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(o(468, a))
                                }
                                u[jt] = t,
                                qt(u),
                                a = u
                            }
                            t.stateNode = a
                        } else
                            _d(n, t.type, t.stateNode);
                    else
                        t.stateNode = Md(n, a, t.memoizedProps);
                else
                    u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode,
                    e.parentNode.removeChild(e)) : u.count--,
                    a === null ? _d(n, t.type, t.stateNode) : Md(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && jf(t, t.memoizedProps, e.memoizedProps)
            }
            break;
        case 27:
            tl(l, t),
            ll(t),
            a & 512 && (Nt || e === null || Hl(e, e.return)),
            e !== null && a & 4 && jf(t, t.memoizedProps, e.memoizedProps);
            break;
        case 5:
            if (tl(l, t),
            ll(t),
            a & 512 && (Nt || e === null || Hl(e, e.return)),
            t.flags & 32) {
                n = t.stateNode;
                try {
                    ea(n, "")
                } catch (R) {
                    ft(t, t.return, R)
                }
            }
            a & 4 && t.stateNode != null && (n = t.memoizedProps,
            jf(t, n, e !== null ? e.memoizedProps : n)),
            a & 1024 && (xf = !0);
            break;
        case 6:
            if (tl(l, t),
            ll(t),
            a & 4) {
                if (t.stateNode === null)
                    throw Error(o(162));
                a = t.memoizedProps,
                e = t.stateNode;
                try {
                    e.nodeValue = a
                } catch (R) {
                    ft(t, t.return, R)
                }
            }
            break;
        case 3:
            if (Vu = null,
            n = Ul,
            Ul = Zu(l.containerInfo),
            tl(l, t),
            Ul = n,
            ll(t),
            a & 4 && e !== null && e.memoizedState.isDehydrated)
                try {
                    Ha(l.containerInfo)
                } catch (R) {
                    ft(t, t.return, R)
                }
            xf && (xf = !1,
            _r(t));
            break;
        case 4:
            a = Ul,
            Ul = Zu(t.stateNode.containerInfo),
            tl(l, t),
            ll(t),
            Ul = a;
            break;
        case 12:
            tl(l, t),
            ll(t);
            break;
        case 31:
            tl(l, t),
            ll(t),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Du(t, a)));
            break;
        case 13:
            tl(l, t),
            ll(t),
            t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Nu = ul()),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Du(t, a)));
            break;
        case 22:
            n = t.memoizedState !== null;
            var s = e !== null && e.memoizedState !== null
              , v = kl
              , z = Nt;
            if (kl = v || n,
            Nt = z || s,
            tl(l, t),
            Nt = z,
            kl = v,
            ll(t),
            a & 8192)
                t: for (l = t.stateNode,
                l._visibility = n ? l._visibility & -2 : l._visibility | 1,
                n && (e === null || s || kl || Nt || Je(t)),
                e = null,
                l = t; ; ) {
                    if (l.tag === 5 || l.tag === 26) {
                        if (e === null) {
                            s = e = l;
                            try {
                                if (u = s.stateNode,
                                n)
                                    i = u.style,
                                    typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    c = s.stateNode;
                                    var E = s.memoizedProps.style
                                      , S = E != null && E.hasOwnProperty("display") ? E.display : null;
                                    c.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim()
                                }
                            } catch (R) {
                                ft(s, s.return, R)
                            }
                        }
                    } else if (l.tag === 6) {
                        if (e === null) {
                            s = l;
                            try {
                                s.stateNode.nodeValue = n ? "" : s.memoizedProps
                            } catch (R) {
                                ft(s, s.return, R)
                            }
                        }
                    } else if (l.tag === 18) {
                        if (e === null) {
                            s = l;
                            try {
                                var b = s.stateNode;
                                n ? yd(b, !0) : yd(s.stateNode, !1)
                            } catch (R) {
                                ft(s, s.return, R)
                            }
                        }
                    } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
                        l.child.return = l,
                        l = l.child;
                        continue
                    }
                    if (l === t)
                        break t;
                    for (; l.sibling === null; ) {
                        if (l.return === null || l.return === t)
                            break t;
                        e === l && (e = null),
                        l = l.return
                    }
                    e === l && (e = null),
                    l.sibling.return = l.return,
                    l = l.sibling
                }
            a & 4 && (a = t.updateQueue,
            a !== null && (e = a.retryQueue,
            e !== null && (a.retryQueue = null,
            Du(t, e))));
            break;
        case 19:
            tl(l, t),
            ll(t),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Du(t, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            tl(l, t),
            ll(t)
        }
    }
    function ll(t) {
        var l = t.flags;
        if (l & 2) {
            try {
                for (var e, a = t.return; a !== null; ) {
                    if (Sr(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null)
                    throw Error(o(160));
                switch (e.tag) {
                case 27:
                    var n = e.stateNode
                      , u = Gf(t);
                    _u(t, u, n);
                    break;
                case 5:
                    var i = e.stateNode;
                    e.flags & 32 && (ea(i, ""),
                    e.flags &= -33);
                    var c = Gf(t);
                    _u(t, c, i);
                    break;
                case 3:
                case 4:
                    var s = e.stateNode.containerInfo
                      , v = Gf(t);
                    Xf(t, v, s);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (z) {
                ft(t, t.return, z)
            }
            t.flags &= -3
        }
        l & 4096 && (t.flags &= -4097)
    }
    function _r(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var l = t;
                _r(l),
                l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
                t = t.sibling
            }
    }
    function Fl(t, l) {
        if (l.subtreeFlags & 8772)
            for (l = l.child; l !== null; )
                Tr(t, l.alternate, l),
                l = l.sibling
    }
    function Je(t) {
        for (t = t.child; t !== null; ) {
            var l = t;
            switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ge(4, l, l.return),
                Je(l);
                break;
            case 1:
                Hl(l, l.return);
                var e = l.stateNode;
                typeof e.componentWillUnmount == "function" && yr(l, l.return, e),
                Je(l);
                break;
            case 27:
                On(l.stateNode);
            case 26:
            case 5:
                Hl(l, l.return),
                Je(l);
                break;
            case 22:
                l.memoizedState === null && Je(l);
                break;
            case 30:
                Je(l);
                break;
            default:
                Je(l)
            }
            t = t.sibling
        }
    }
    function Il(t, l, e) {
        for (e = e && (l.subtreeFlags & 8772) !== 0,
        l = l.child; l !== null; ) {
            var a = l.alternate
              , n = t
              , u = l
              , i = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                Il(n, u, e),
                yn(4, u);
                break;
            case 1:
                if (Il(n, u, e),
                a = u,
                n = a.stateNode,
                typeof n.componentDidMount == "function")
                    try {
                        n.componentDidMount()
                    } catch (v) {
                        ft(a, a.return, v)
                    }
                if (a = u,
                n = a.updateQueue,
                n !== null) {
                    var c = a.stateNode;
                    try {
                        var s = n.shared.hiddenCallbacks;
                        if (s !== null)
                            for (n.shared.hiddenCallbacks = null,
                            n = 0; n < s.length; n++)
                                ao(s[n], c)
                    } catch (v) {
                        ft(a, a.return, v)
                    }
                }
                e && i & 64 && gr(u),
                vn(u, u.return);
                break;
            case 27:
                br(u);
            case 26:
            case 5:
                Il(n, u, e),
                e && a === null && i & 4 && vr(u),
                vn(u, u.return);
                break;
            case 12:
                Il(n, u, e);
                break;
            case 31:
                Il(n, u, e),
                e && i & 4 && Er(n, u);
                break;
            case 13:
                Il(n, u, e),
                e && i & 4 && Mr(n, u);
                break;
            case 22:
                u.memoizedState === null && Il(n, u, e),
                vn(u, u.return);
                break;
            case 30:
                break;
            default:
                Il(n, u, e)
            }
            l = l.sibling
        }
    }
    function Zf(t, l) {
        var e = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        t = null,
        l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool),
        t !== e && (t != null && t.refCount++,
        e != null && en(e))
    }
    function Lf(t, l) {
        t = null,
        l.alternate !== null && (t = l.alternate.memoizedState.cache),
        l = l.memoizedState.cache,
        l !== t && (l.refCount++,
        t != null && en(t))
    }
    function Nl(t, l, e, a) {
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; )
                Dr(t, l, e, a),
                l = l.sibling
    }
    function Dr(t, l, e, a) {
        var n = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            Nl(t, l, e, a),
            n & 2048 && yn(9, l);
            break;
        case 1:
            Nl(t, l, e, a);
            break;
        case 3:
            Nl(t, l, e, a),
            n & 2048 && (t = null,
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            l = l.memoizedState.cache,
            l !== t && (l.refCount++,
            t != null && en(t)));
            break;
        case 12:
            if (n & 2048) {
                Nl(t, l, e, a),
                t = l.stateNode;
                try {
                    var u = l.memoizedProps
                      , i = u.id
                      , c = u.onPostCommit;
                    typeof c == "function" && c(i, l.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (s) {
                    ft(l, l.return, s)
                }
            } else
                Nl(t, l, e, a);
            break;
        case 31:
            Nl(t, l, e, a);
            break;
        case 13:
            Nl(t, l, e, a);
            break;
        case 23:
            break;
        case 22:
            u = l.stateNode,
            i = l.alternate,
            l.memoizedState !== null ? u._visibility & 2 ? Nl(t, l, e, a) : Sn(t, l) : u._visibility & 2 ? Nl(t, l, e, a) : (u._visibility |= 2,
            pa(t, l, e, a, (l.subtreeFlags & 10256) !== 0 || !1)),
            n & 2048 && Zf(i, l);
            break;
        case 24:
            Nl(t, l, e, a),
            n & 2048 && Lf(l.alternate, l);
            break;
        default:
            Nl(t, l, e, a)
        }
    }
    function pa(t, l, e, a, n) {
        for (n = n && ((l.subtreeFlags & 10256) !== 0 || !1),
        l = l.child; l !== null; ) {
            var u = t
              , i = l
              , c = e
              , s = a
              , v = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                pa(u, i, c, s, n),
                yn(8, i);
                break;
            case 23:
                break;
            case 22:
                var z = i.stateNode;
                i.memoizedState !== null ? z._visibility & 2 ? pa(u, i, c, s, n) : Sn(u, i) : (z._visibility |= 2,
                pa(u, i, c, s, n)),
                n && v & 2048 && Zf(i.alternate, i);
                break;
            case 24:
                pa(u, i, c, s, n),
                n && v & 2048 && Lf(i.alternate, i);
                break;
            default:
                pa(u, i, c, s, n)
            }
            l = l.sibling
        }
    }
    function Sn(t, l) {
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; ) {
                var e = t
                  , a = l
                  , n = a.flags;
                switch (a.tag) {
                case 22:
                    Sn(e, a),
                    n & 2048 && Zf(a.alternate, a);
                    break;
                case 24:
                    Sn(e, a),
                    n & 2048 && Lf(a.alternate, a);
                    break;
                default:
                    Sn(e, a)
                }
                l = l.sibling
            }
    }
    var bn = 8192;
    function Aa(t, l, e) {
        if (t.subtreeFlags & bn)
            for (t = t.child; t !== null; )
                Ur(t, l, e),
                t = t.sibling
    }
    function Ur(t, l, e) {
        switch (t.tag) {
        case 26:
            Aa(t, l, e),
            t.flags & bn && t.memoizedState !== null && ph(e, Ul, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            Aa(t, l, e);
            break;
        case 3:
        case 4:
            var a = Ul;
            Ul = Zu(t.stateNode.containerInfo),
            Aa(t, l, e),
            Ul = a;
            break;
        case 22:
            t.memoizedState === null && (a = t.alternate,
            a !== null && a.memoizedState !== null ? (a = bn,
            bn = 16777216,
            Aa(t, l, e),
            bn = a) : Aa(t, l, e));
            break;
        default:
            Aa(t, l, e)
        }
    }
    function Nr(t) {
        var l = t.alternate;
        if (l !== null && (t = l.child,
        t !== null)) {
            l.child = null;
            do
                l = t.sibling,
                t.sibling = null,
                t = l;
            while (t !== null)
        }
    }
    function zn(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (l !== null)
                for (var e = 0; e < l.length; e++) {
                    var a = l[e];
                    Qt = a,
                    Cr(a, t)
                }
            Nr(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Rr(t),
                t = t.sibling
    }
    function Rr(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            zn(t),
            t.flags & 2048 && ge(9, t, t.return);
            break;
        case 3:
            zn(t);
            break;
        case 12:
            zn(t);
            break;
        case 22:
            var l = t.stateNode;
            t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3,
            Uu(t)) : zn(t);
            break;
        default:
            zn(t)
        }
    }
    function Uu(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (l !== null)
                for (var e = 0; e < l.length; e++) {
                    var a = l[e];
                    Qt = a,
                    Cr(a, t)
                }
            Nr(t)
        }
        for (t = t.child; t !== null; ) {
            switch (l = t,
            l.tag) {
            case 0:
            case 11:
            case 15:
                ge(8, l, l.return),
                Uu(l);
                break;
            case 22:
                e = l.stateNode,
                e._visibility & 2 && (e._visibility &= -3,
                Uu(l));
                break;
            default:
                Uu(l)
            }
            t = t.sibling
        }
    }
    function Cr(t, l) {
        for (; Qt !== null; ) {
            var e = Qt;
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ge(8, e, l);
                break;
            case 23:
            case 22:
                if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                    var a = e.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                en(e.memoizedState.cache)
            }
            if (a = e.child,
            a !== null)
                a.return = e,
                Qt = a;
            else
                t: for (e = t; Qt !== null; ) {
                    a = Qt;
                    var n = a.sibling
                      , u = a.return;
                    if (pr(a),
                    a === e) {
                        Qt = null;
                        break t
                    }
                    if (n !== null) {
                        n.return = u,
                        Qt = n;
                        break t
                    }
                    Qt = u
                }
        }
    }
    var Ym = {
        getCacheForType: function(t) {
            var l = Xt(_t)
              , e = l.data.get(t);
            return e === void 0 && (e = t(),
            l.data.set(t, e)),
            e
        },
        cacheSignal: function() {
            return Xt(_t).controller.signal
        }
    }
      , jm = typeof WeakMap == "function" ? WeakMap : Map
      , nt = 0
      , mt = null
      , W = null
      , $ = 0
      , it = 0
      , dl = null
      , ye = !1
      , Ea = !1
      , Vf = !1
      , Pl = 0
      , Tt = 0
      , ve = 0
      , We = 0
      , Kf = 0
      , ml = 0
      , Ma = 0
      , Tn = null
      , el = null
      , wf = !1
      , Nu = 0
      , Hr = 0
      , Ru = 1 / 0
      , Cu = null
      , Se = null
      , Rt = 0
      , be = null
      , Oa = null
      , te = 0
      , Jf = 0
      , Wf = null
      , qr = null
      , pn = 0
      , kf = null;
    function hl() {
        return (nt & 2) !== 0 && $ !== 0 ? $ & -$ : T.T !== null ? lc() : kc()
    }
    function Qr() {
        if (ml === 0)
            if (($ & 536870912) === 0 || P) {
                var t = Xn;
                Xn <<= 1,
                (Xn & 3932160) === 0 && (Xn = 262144),
                ml = t
            } else
                ml = 536870912;
        return t = ol.current,
        t !== null && (t.flags |= 32),
        ml
    }
    function al(t, l, e) {
        (t === mt && (it === 2 || it === 9) || t.cancelPendingCommit !== null) && (_a(t, 0),
        ze(t, $, ml, !1)),
        Za(t, e),
        ((nt & 2) === 0 || t !== mt) && (t === mt && ((nt & 2) === 0 && (We |= e),
        Tt === 4 && ze(t, $, ml, !1)),
        ql(t))
    }
    function Br(t, l, e) {
        if ((nt & 6) !== 0)
            throw Error(o(327));
        var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || xa(t, l)
          , n = a ? xm(t, l) : Ff(t, l, !0)
          , u = a;
        do {
            if (n === 0) {
                Ea && !a && ze(t, l, 0, !1);
                break
            } else {
                if (e = t.current.alternate,
                u && !Gm(e)) {
                    n = Ff(t, l, !1),
                    u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = l,
                    t.errorRecoveryDisabledLanes & u)
                        var i = 0;
                    else
                        i = t.pendingLanes & -536870913,
                        i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        l = i;
                        t: {
                            var c = t;
                            n = Tn;
                            var s = c.current.memoizedState.isDehydrated;
                            if (s && (_a(c, i).flags |= 256),
                            i = Ff(c, i, !1),
                            i !== 2) {
                                if (Vf && !s) {
                                    c.errorRecoveryDisabledLanes |= u,
                                    We |= u,
                                    n = 4;
                                    break t
                                }
                                u = el,
                                el = n,
                                u !== null && (el === null ? el = u : el.push.apply(el, u))
                            }
                            n = i
                        }
                        if (u = !1,
                        n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    _a(t, 0),
                    ze(t, l, 0, !0);
                    break
                }
                t: {
                    switch (a = t,
                    u = n,
                    u) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((l & 4194048) !== l)
                            break;
                    case 6:
                        ze(a, l, ml, !ye);
                        break t;
                    case 2:
                        el = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((l & 62914560) === l && (n = Nu + 300 - ul(),
                    10 < n)) {
                        if (ze(a, l, ml, !ye),
                        Zn(a, 0, !0) !== 0)
                            break t;
                        te = l,
                        a.timeoutHandle = md(Yr.bind(null, a, e, el, Cu, wf, l, ml, We, Ma, ye, u, "Throttled", -0, 0), n);
                        break t
                    }
                    Yr(a, e, el, Cu, wf, l, ml, We, Ma, ye, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        ql(t)
    }
    function Yr(t, l, e, a, n, u, i, c, s, v, z, E, S, b) {
        if (t.timeoutHandle = -1,
        E = l.subtreeFlags,
        E & 8192 || (E & 16785408) === 16785408) {
            E = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Gl
            },
            Ur(l, u, E);
            var R = (u & 62914560) === u ? Nu - ul() : (u & 4194048) === u ? Hr - ul() : 0;
            if (R = Ah(E, R),
            R !== null) {
                te = u,
                t.cancelPendingCommit = R(Kr.bind(null, t, l, u, e, a, n, i, c, s, z, E, null, S, b)),
                ze(t, u, i, !v);
                return
            }
        }
        Kr(t, l, u, e, a, n, i, c, s)
    }
    function Gm(t) {
        for (var l = t; ; ) {
            var e = l.tag;
            if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue,
            e !== null && (e = e.stores,
            e !== null)))
                for (var a = 0; a < e.length; a++) {
                    var n = e[a]
                      , u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!cl(u(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (e = l.child,
            l.subtreeFlags & 16384 && e !== null)
                e.return = l,
                l = e;
            else {
                if (l === t)
                    break;
                for (; l.sibling === null; ) {
                    if (l.return === null || l.return === t)
                        return !0;
                    l = l.return
                }
                l.sibling.return = l.return,
                l = l.sibling
            }
        }
        return !0
    }
    function ze(t, l, e, a) {
        l &= ~Kf,
        l &= ~We,
        t.suspendedLanes |= l,
        t.pingedLanes &= ~l,
        a && (t.warmLanes |= l),
        a = t.expirationTimes;
        for (var n = l; 0 < n; ) {
            var u = 31 - fl(n)
              , i = 1 << u;
            a[u] = -1,
            n &= ~i
        }
        e !== 0 && wc(t, e, l)
    }
    function Hu() {
        return (nt & 6) === 0 ? (An(0),
        !1) : !0
    }
    function $f() {
        if (W !== null) {
            if (it === 0)
                var t = W.return;
            else
                t = W,
                Ll = Ge = null,
                df(t),
                va = null,
                nn = 0,
                t = W;
            for (; t !== null; )
                hr(t.alternate, t),
                t = t.return;
            W = null
        }
    }
    function _a(t, l) {
        var e = t.timeoutHandle;
        e !== -1 && (t.timeoutHandle = -1,
        uh(e)),
        e = t.cancelPendingCommit,
        e !== null && (t.cancelPendingCommit = null,
        e()),
        te = 0,
        $f(),
        mt = t,
        W = e = xl(t.current, null),
        $ = l,
        it = 0,
        dl = null,
        ye = !1,
        Ea = xa(t, l),
        Vf = !1,
        Ma = ml = Kf = We = ve = Tt = 0,
        el = Tn = null,
        wf = !1,
        (l & 8) !== 0 && (l |= l & 32);
        var a = t.entangledLanes;
        if (a !== 0)
            for (t = t.entanglements,
            a &= l; 0 < a; ) {
                var n = 31 - fl(a)
                  , u = 1 << n;
                l |= t[n],
                a &= ~u
            }
        return Pl = l,
        tu(),
        e
    }
    function jr(t, l) {
        Z = null,
        T.H = mn,
        l === ya || l === cu ? (l = Ps(),
        it = 3) : l === Pi ? (l = Ps(),
        it = 4) : it = l === Df ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1,
        dl = l,
        W === null && (Tt = 1,
        pu(t, zl(l, t.current)))
    }
    function Gr() {
        var t = ol.current;
        return t === null ? !0 : ($ & 4194048) === $ ? El === null : ($ & 62914560) === $ || ($ & 536870912) !== 0 ? t === El : !1
    }
    function Xr() {
        var t = T.H;
        return T.H = mn,
        t === null ? mn : t
    }
    function xr() {
        var t = T.A;
        return T.A = Ym,
        t
    }
    function qu() {
        Tt = 4,
        ye || ($ & 4194048) !== $ && ol.current !== null || (Ea = !0),
        (ve & 134217727) === 0 && (We & 134217727) === 0 || mt === null || ze(mt, $, ml, !1)
    }
    function Ff(t, l, e) {
        var a = nt;
        nt |= 2;
        var n = Xr()
          , u = xr();
        (mt !== t || $ !== l) && (Cu = null,
        _a(t, l)),
        l = !1;
        var i = Tt;
        t: do
            try {
                if (it !== 0 && W !== null) {
                    var c = W
                      , s = dl;
                    switch (it) {
                    case 8:
                        $f(),
                        i = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        ol.current === null && (l = !0);
                        var v = it;
                        if (it = 0,
                        dl = null,
                        Da(t, c, s, v),
                        e && Ea) {
                            i = 0;
                            break t
                        }
                        break;
                    default:
                        v = it,
                        it = 0,
                        dl = null,
                        Da(t, c, s, v)
                    }
                }
                Xm(),
                i = Tt;
                break
            } catch (z) {
                jr(t, z)
            }
        while (!0);
        return l && t.shellSuspendCounter++,
        Ll = Ge = null,
        nt = a,
        T.H = n,
        T.A = u,
        W === null && (mt = null,
        $ = 0,
        tu()),
        i
    }
    function Xm() {
        for (; W !== null; )
            Zr(W)
    }
    function xm(t, l) {
        var e = nt;
        nt |= 2;
        var a = Xr()
          , n = xr();
        mt !== t || $ !== l ? (Cu = null,
        Ru = ul() + 500,
        _a(t, l)) : Ea = xa(t, l);
        t: do
            try {
                if (it !== 0 && W !== null) {
                    l = W;
                    var u = dl;
                    l: switch (it) {
                    case 1:
                        it = 0,
                        dl = null,
                        Da(t, l, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (Fs(u)) {
                            it = 0,
                            dl = null,
                            Lr(l);
                            break
                        }
                        l = function() {
                            it !== 2 && it !== 9 || mt !== t || (it = 7),
                            ql(t)
                        }
                        ,
                        u.then(l, l);
                        break t;
                    case 3:
                        it = 7;
                        break t;
                    case 4:
                        it = 5;
                        break t;
                    case 7:
                        Fs(u) ? (it = 0,
                        dl = null,
                        Lr(l)) : (it = 0,
                        dl = null,
                        Da(t, l, u, 7));
                        break;
                    case 5:
                        var i = null;
                        switch (W.tag) {
                        case 26:
                            i = W.memoizedState;
                        case 5:
                        case 27:
                            var c = W;
                            if (i ? Dd(i) : c.stateNode.complete) {
                                it = 0,
                                dl = null;
                                var s = c.sibling;
                                if (s !== null)
                                    W = s;
                                else {
                                    var v = c.return;
                                    v !== null ? (W = v,
                                    Qu(v)) : W = null
                                }
                                break l
                            }
                        }
                        it = 0,
                        dl = null,
                        Da(t, l, u, 5);
                        break;
                    case 6:
                        it = 0,
                        dl = null,
                        Da(t, l, u, 6);
                        break;
                    case 8:
                        $f(),
                        Tt = 6;
                        break t;
                    default:
                        throw Error(o(462))
                    }
                }
                Zm();
                break
            } catch (z) {
                jr(t, z)
            }
        while (!0);
        return Ll = Ge = null,
        T.H = a,
        T.A = n,
        nt = e,
        W !== null ? 0 : (mt = null,
        $ = 0,
        tu(),
        Tt)
    }
    function Zm() {
        for (; W !== null && !r0(); )
            Zr(W)
    }
    function Zr(t) {
        var l = dr(t.alternate, t, Pl);
        t.memoizedProps = t.pendingProps,
        l === null ? Qu(t) : W = l
    }
    function Lr(t) {
        var l = t
          , e = l.alternate;
        switch (l.tag) {
        case 15:
        case 0:
            l = ir(e, l, l.pendingProps, l.type, void 0, $);
            break;
        case 11:
            l = ir(e, l, l.pendingProps, l.type.render, l.ref, $);
            break;
        case 5:
            df(l);
        default:
            hr(e, l),
            l = W = Xs(l, Pl),
            l = dr(e, l, Pl)
        }
        t.memoizedProps = t.pendingProps,
        l === null ? Qu(t) : W = l
    }
    function Da(t, l, e, a) {
        Ll = Ge = null,
        df(l),
        va = null,
        nn = 0;
        var n = l.return;
        try {
            if (Nm(t, n, l, e, $)) {
                Tt = 1,
                pu(t, zl(e, t.current)),
                W = null;
                return
            }
        } catch (u) {
            if (n !== null)
                throw W = n,
                u;
            Tt = 1,
            pu(t, zl(e, t.current)),
            W = null;
            return
        }
        l.flags & 32768 ? (P || a === 1 ? t = !0 : Ea || ($ & 536870912) !== 0 ? t = !1 : (ye = t = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = ol.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Vr(l, t)) : Qu(l)
    }
    function Qu(t) {
        var l = t;
        do {
            if ((l.flags & 32768) !== 0) {
                Vr(l, ye);
                return
            }
            t = l.return;
            var e = Hm(l.alternate, l, Pl);
            if (e !== null) {
                W = e;
                return
            }
            if (l = l.sibling,
            l !== null) {
                W = l;
                return
            }
            W = l = t
        } while (l !== null);
        Tt === 0 && (Tt = 5)
    }
    function Vr(t, l) {
        do {
            var e = qm(t.alternate, t);
            if (e !== null) {
                e.flags &= 32767,
                W = e;
                return
            }
            if (e = t.return,
            e !== null && (e.flags |= 32768,
            e.subtreeFlags = 0,
            e.deletions = null),
            !l && (t = t.sibling,
            t !== null)) {
                W = t;
                return
            }
            W = t = e
        } while (t !== null);
        Tt = 6,
        W = null
    }
    function Kr(t, l, e, a, n, u, i, c, s) {
        t.cancelPendingCommit = null;
        do
            Bu();
        while (Rt !== 0);
        if ((nt & 6) !== 0)
            throw Error(o(327));
        if (l !== null) {
            if (l === t.current)
                throw Error(o(177));
            if (u = l.lanes | l.childLanes,
            u |= ji,
            T0(t, e, u, i, c, s),
            t === mt && (W = mt = null,
            $ = 0),
            Oa = l,
            be = t,
            te = e,
            Jf = u,
            Wf = n,
            qr = a,
            (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            wm(jn, function() {
                return $r(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            a = (l.flags & 13878) !== 0,
            (l.subtreeFlags & 13878) !== 0 || a) {
                a = T.T,
                T.T = null,
                n = D.p,
                D.p = 2,
                i = nt,
                nt |= 4;
                try {
                    Qm(t, l, e)
                } finally {
                    nt = i,
                    D.p = n,
                    T.T = a
                }
            }
            Rt = 1,
            wr(),
            Jr(),
            Wr()
        }
    }
    function wr() {
        if (Rt === 1) {
            Rt = 0;
            var t = be
              , l = Oa
              , e = (l.flags & 13878) !== 0;
            if ((l.subtreeFlags & 13878) !== 0 || e) {
                e = T.T,
                T.T = null;
                var a = D.p;
                D.p = 2;
                var n = nt;
                nt |= 4;
                try {
                    Or(l, t);
                    var u = sc
                      , i = Rs(t.containerInfo)
                      , c = u.focusedElem
                      , s = u.selectionRange;
                    if (i !== c && c && c.ownerDocument && Ns(c.ownerDocument.documentElement, c)) {
                        if (s !== null && Hi(c)) {
                            var v = s.start
                              , z = s.end;
                            if (z === void 0 && (z = v),
                            "selectionStart"in c)
                                c.selectionStart = v,
                                c.selectionEnd = Math.min(z, c.value.length);
                            else {
                                var E = c.ownerDocument || document
                                  , S = E && E.defaultView || window;
                                if (S.getSelection) {
                                    var b = S.getSelection()
                                      , R = c.textContent.length
                                      , Y = Math.min(s.start, R)
                                      , rt = s.end === void 0 ? Y : Math.min(s.end, R);
                                    !b.extend && Y > rt && (i = rt,
                                    rt = Y,
                                    Y = i);
                                    var h = Us(c, Y)
                                      , r = Us(c, rt);
                                    if (h && r && (b.rangeCount !== 1 || b.anchorNode !== h.node || b.anchorOffset !== h.offset || b.focusNode !== r.node || b.focusOffset !== r.offset)) {
                                        var y = E.createRange();
                                        y.setStart(h.node, h.offset),
                                        b.removeAllRanges(),
                                        Y > rt ? (b.addRange(y),
                                        b.extend(r.node, r.offset)) : (y.setEnd(r.node, r.offset),
                                        b.addRange(y))
                                    }
                                }
                            }
                        }
                        for (E = [],
                        b = c; b = b.parentNode; )
                            b.nodeType === 1 && E.push({
                                element: b,
                                left: b.scrollLeft,
                                top: b.scrollTop
                            });
                        for (typeof c.focus == "function" && c.focus(),
                        c = 0; c < E.length; c++) {
                            var A = E[c];
                            A.element.scrollLeft = A.left,
                            A.element.scrollTop = A.top
                        }
                    }
                    Wu = !!cc,
                    sc = cc = null
                } finally {
                    nt = n,
                    D.p = a,
                    T.T = e
                }
            }
            t.current = l,
            Rt = 2
        }
    }
    function Jr() {
        if (Rt === 2) {
            Rt = 0;
            var t = be
              , l = Oa
              , e = (l.flags & 8772) !== 0;
            if ((l.subtreeFlags & 8772) !== 0 || e) {
                e = T.T,
                T.T = null;
                var a = D.p;
                D.p = 2;
                var n = nt;
                nt |= 4;
                try {
                    Tr(t, l.alternate, l)
                } finally {
                    nt = n,
                    D.p = a,
                    T.T = e
                }
            }
            Rt = 3
        }
    }
    function Wr() {
        if (Rt === 4 || Rt === 3) {
            Rt = 0,
            d0();
            var t = be
              , l = Oa
              , e = te
              , a = qr;
            (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Rt = 5 : (Rt = 0,
            Oa = be = null,
            kr(t, t.pendingLanes));
            var n = t.pendingLanes;
            if (n === 0 && (Se = null),
            hi(e),
            l = l.stateNode,
            il && typeof il.onCommitFiberRoot == "function")
                try {
                    il.onCommitFiberRoot(Xa, l, void 0, (l.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                l = T.T,
                n = D.p,
                D.p = 2,
                T.T = null;
                try {
                    for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
                        var c = a[i];
                        u(c.value, {
                            componentStack: c.stack
                        })
                    }
                } finally {
                    T.T = l,
                    D.p = n
                }
            }
            (te & 3) !== 0 && Bu(),
            ql(t),
            n = t.pendingLanes,
            (e & 261930) !== 0 && (n & 42) !== 0 ? t === kf ? pn++ : (pn = 0,
            kf = t) : pn = 0,
            An(0)
        }
    }
    function kr(t, l) {
        (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache,
        l != null && (t.pooledCache = null,
        en(l)))
    }
    function Bu() {
        return wr(),
        Jr(),
        Wr(),
        $r()
    }
    function $r() {
        if (Rt !== 5)
            return !1;
        var t = be
          , l = Jf;
        Jf = 0;
        var e = hi(te)
          , a = T.T
          , n = D.p;
        try {
            D.p = 32 > e ? 32 : e,
            T.T = null,
            e = Wf,
            Wf = null;
            var u = be
              , i = te;
            if (Rt = 0,
            Oa = be = null,
            te = 0,
            (nt & 6) !== 0)
                throw Error(o(331));
            var c = nt;
            if (nt |= 4,
            Rr(u.current),
            Dr(u, u.current, i, e),
            nt = c,
            An(0, !1),
            il && typeof il.onPostCommitFiberRoot == "function")
                try {
                    il.onPostCommitFiberRoot(Xa, u)
                } catch {}
            return !0
        } finally {
            D.p = n,
            T.T = a,
            kr(t, l)
        }
    }
    function Fr(t, l, e) {
        l = zl(e, l),
        l = _f(t.stateNode, l, 2),
        t = de(t, l, 2),
        t !== null && (Za(t, 2),
        ql(t))
    }
    function ft(t, l, e) {
        if (t.tag === 3)
            Fr(t, t, e);
        else
            for (; l !== null; ) {
                if (l.tag === 3) {
                    Fr(l, t, e);
                    break
                } else if (l.tag === 1) {
                    var a = l.stateNode;
                    if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Se === null || !Se.has(a))) {
                        t = zl(e, t),
                        e = Io(2),
                        a = de(l, e, 2),
                        a !== null && (Po(e, a, l, t),
                        Za(a, 2),
                        ql(a));
                        break
                    }
                }
                l = l.return
            }
    }
    function If(t, l, e) {
        var a = t.pingCache;
        if (a === null) {
            a = t.pingCache = new jm;
            var n = new Set;
            a.set(l, n)
        } else
            n = a.get(l),
            n === void 0 && (n = new Set,
            a.set(l, n));
        n.has(e) || (Vf = !0,
        n.add(e),
        t = Lm.bind(null, t, l, e),
        l.then(t, t))
    }
    function Lm(t, l, e) {
        var a = t.pingCache;
        a !== null && a.delete(l),
        t.pingedLanes |= t.suspendedLanes & e,
        t.warmLanes &= ~e,
        mt === t && ($ & e) === e && (Tt === 4 || Tt === 3 && ($ & 62914560) === $ && 300 > ul() - Nu ? (nt & 2) === 0 && _a(t, 0) : Kf |= e,
        Ma === $ && (Ma = 0)),
        ql(t)
    }
    function Ir(t, l) {
        l === 0 && (l = Kc()),
        t = Be(t, l),
        t !== null && (Za(t, l),
        ql(t))
    }
    function Vm(t) {
        var l = t.memoizedState
          , e = 0;
        l !== null && (e = l.retryLane),
        Ir(t, e)
    }
    function Km(t, l) {
        var e = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var a = t.stateNode
              , n = t.memoizedState;
            n !== null && (e = n.retryLane);
            break;
        case 19:
            a = t.stateNode;
            break;
        case 22:
            a = t.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        a !== null && a.delete(l),
        Ir(t, e)
    }
    function wm(t, l) {
        return oi(t, l)
    }
    var Yu = null
      , Ua = null
      , Pf = !1
      , ju = !1
      , tc = !1
      , Te = 0;
    function ql(t) {
        t !== Ua && t.next === null && (Ua === null ? Yu = Ua = t : Ua = Ua.next = t),
        ju = !0,
        Pf || (Pf = !0,
        Wm())
    }
    function An(t, l) {
        if (!tc && ju) {
            tc = !0;
            do
                for (var e = !1, a = Yu; a !== null; ) {
                    if (t !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0)
                            var u = 0;
                        else {
                            var i = a.suspendedLanes
                              , c = a.pingedLanes;
                            u = (1 << 31 - fl(42 | t) + 1) - 1,
                            u &= n & ~(i & ~c),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (e = !0,
                        ed(a, u))
                    } else
                        u = $,
                        u = Zn(a, a === mt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (u & 3) === 0 || xa(a, u) || (e = !0,
                        ed(a, u));
                    a = a.next
                }
            while (e);
            tc = !1
        }
    }
    function Jm() {
        Pr()
    }
    function Pr() {
        ju = Pf = !1;
        var t = 0;
        Te !== 0 && nh() && (t = Te);
        for (var l = ul(), e = null, a = Yu; a !== null; ) {
            var n = a.next
              , u = td(a, l);
            u === 0 ? (a.next = null,
            e === null ? Yu = n : e.next = n,
            n === null && (Ua = e)) : (e = a,
            (t !== 0 || (u & 3) !== 0) && (ju = !0)),
            a = n
        }
        Rt !== 0 && Rt !== 5 || An(t),
        Te !== 0 && (Te = 0)
    }
    function td(t, l) {
        for (var e = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
            var i = 31 - fl(u)
              , c = 1 << i
              , s = n[i];
            s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = z0(c, l)) : s <= l && (t.expiredLanes |= c),
            u &= ~c
        }
        if (l = mt,
        e = $,
        e = Zn(t, t === l ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a = t.callbackNode,
        e === 0 || t === l && (it === 2 || it === 9) || t.cancelPendingCommit !== null)
            return a !== null && a !== null && ri(a),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((e & 3) === 0 || xa(t, e)) {
            if (l = e & -e,
            l === t.callbackPriority)
                return l;
            switch (a !== null && ri(a),
            hi(e)) {
            case 2:
            case 8:
                e = Lc;
                break;
            case 32:
                e = jn;
                break;
            case 268435456:
                e = Vc;
                break;
            default:
                e = jn
            }
            return a = ld.bind(null, t),
            e = oi(e, a),
            t.callbackPriority = l,
            t.callbackNode = e,
            l
        }
        return a !== null && a !== null && ri(a),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function ld(t, l) {
        if (Rt !== 0 && Rt !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var e = t.callbackNode;
        if (Bu() && t.callbackNode !== e)
            return null;
        var a = $;
        return a = Zn(t, t === mt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a === 0 ? null : (Br(t, a, l),
        td(t, ul()),
        t.callbackNode != null && t.callbackNode === e ? ld.bind(null, t) : null)
    }
    function ed(t, l) {
        if (Bu())
            return null;
        Br(t, l, !0)
    }
    function Wm() {
        ih(function() {
            (nt & 6) !== 0 ? oi(Zc, Jm) : Pr()
        })
    }
    function lc() {
        if (Te === 0) {
            var t = ha;
            t === 0 && (t = Gn,
            Gn <<= 1,
            (Gn & 261888) === 0 && (Gn = 256)),
            Te = t
        }
        return Te
    }
    function ad(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : wn("" + t)
    }
    function nd(t, l) {
        var e = l.ownerDocument.createElement("input");
        return e.name = l.name,
        e.value = l.value,
        t.id && e.setAttribute("form", t.id),
        l.parentNode.insertBefore(e, l),
        t = new FormData(t),
        e.parentNode.removeChild(e),
        t
    }
    function km(t, l, e, a, n) {
        if (l === "submit" && e && e.stateNode === n) {
            var u = ad((n[Ft] || null).action)
              , i = a.submitter;
            i && (l = (l = i[Ft] || null) ? ad(l.formAction) : i.getAttribute("formAction"),
            l !== null && (u = l,
            i = null));
            var c = new $n("action","action",null,a,n);
            t.push({
                event: c,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Te !== 0) {
                                var s = i ? nd(n, i) : new FormData(n);
                                Tf(e, {
                                    pending: !0,
                                    data: s,
                                    method: n.method,
                                    action: u
                                }, null, s)
                            }
                        } else
                            typeof u == "function" && (c.preventDefault(),
                            s = i ? nd(n, i) : new FormData(n),
                            Tf(e, {
                                pending: !0,
                                data: s,
                                method: n.method,
                                action: u
                            }, u, s))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var ec = 0; ec < Yi.length; ec++) {
        var ac = Yi[ec]
          , $m = ac.toLowerCase()
          , Fm = ac[0].toUpperCase() + ac.slice(1);
        Dl($m, "on" + Fm)
    }
    Dl(qs, "onAnimationEnd"),
    Dl(Qs, "onAnimationIteration"),
    Dl(Bs, "onAnimationStart"),
    Dl("dblclick", "onDoubleClick"),
    Dl("focusin", "onFocus"),
    Dl("focusout", "onBlur"),
    Dl(mm, "onTransitionRun"),
    Dl(hm, "onTransitionStart"),
    Dl(gm, "onTransitionCancel"),
    Dl(Ys, "onTransitionEnd"),
    ta("onMouseEnter", ["mouseout", "mouseover"]),
    ta("onMouseLeave", ["mouseout", "mouseover"]),
    ta("onPointerEnter", ["pointerout", "pointerover"]),
    ta("onPointerLeave", ["pointerout", "pointerover"]),
    Ce("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ce("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ce("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ce("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ce("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ce("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Im = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En));
    function ud(t, l) {
        l = (l & 4) !== 0;
        for (var e = 0; e < t.length; e++) {
            var a = t[e]
              , n = a.event;
            a = a.listeners;
            t: {
                var u = void 0;
                if (l)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var c = a[i]
                          , s = c.instance
                          , v = c.currentTarget;
                        if (c = c.listener,
                        s !== u && n.isPropagationStopped())
                            break t;
                        u = c,
                        n.currentTarget = v;
                        try {
                            u(n)
                        } catch (z) {
                            Pn(z)
                        }
                        n.currentTarget = null,
                        u = s
                    }
                else
                    for (i = 0; i < a.length; i++) {
                        if (c = a[i],
                        s = c.instance,
                        v = c.currentTarget,
                        c = c.listener,
                        s !== u && n.isPropagationStopped())
                            break t;
                        u = c,
                        n.currentTarget = v;
                        try {
                            u(n)
                        } catch (z) {
                            Pn(z)
                        }
                        n.currentTarget = null,
                        u = s
                    }
            }
        }
    }
    function k(t, l) {
        var e = l[gi];
        e === void 0 && (e = l[gi] = new Set);
        var a = t + "__bubble";
        e.has(a) || (id(l, t, 2, !1),
        e.add(a))
    }
    function nc(t, l, e) {
        var a = 0;
        l && (a |= 4),
        id(e, t, a, l)
    }
    var Gu = "_reactListening" + Math.random().toString(36).slice(2);
    function uc(t) {
        if (!t[Gu]) {
            t[Gu] = !0,
            Ic.forEach(function(e) {
                e !== "selectionchange" && (Im.has(e) || nc(e, !1, t),
                nc(e, !0, t))
            });
            var l = t.nodeType === 9 ? t : t.ownerDocument;
            l === null || l[Gu] || (l[Gu] = !0,
            nc("selectionchange", !1, l))
        }
    }
    function id(t, l, e, a) {
        switch (Qd(l)) {
        case 2:
            var n = Oh;
            break;
        case 8:
            n = _h;
            break;
        default:
            n = zc
        }
        e = n.bind(null, l, e, t),
        n = void 0,
        !Ei || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0),
        a ? n !== void 0 ? t.addEventListener(l, e, {
            capture: !0,
            passive: n
        }) : t.addEventListener(l, e, !0) : n !== void 0 ? t.addEventListener(l, e, {
            passive: n
        }) : t.addEventListener(l, e, !1)
    }
    function ic(t, l, e, a, n) {
        var u = a;
        if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
            t: for (; ; ) {
                if (a === null)
                    return;
                var i = a.tag;
                if (i === 3 || i === 4) {
                    var c = a.stateNode.containerInfo;
                    if (c === n)
                        break;
                    if (i === 4)
                        for (i = a.return; i !== null; ) {
                            var s = i.tag;
                            if ((s === 3 || s === 4) && i.stateNode.containerInfo === n)
                                return;
                            i = i.return
                        }
                    for (; c !== null; ) {
                        if (i = Fe(c),
                        i === null)
                            return;
                        if (s = i.tag,
                        s === 5 || s === 6 || s === 26 || s === 27) {
                            a = u = i;
                            continue t
                        }
                        c = c.parentNode
                    }
                }
                a = a.return
            }
        os(function() {
            var v = u
              , z = pi(e)
              , E = [];
            t: {
                var S = js.get(t);
                if (S !== void 0) {
                    var b = $n
                      , R = t;
                    switch (t) {
                    case "keypress":
                        if (Wn(e) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        b = K0;
                        break;
                    case "focusin":
                        R = "focus",
                        b = Di;
                        break;
                    case "focusout":
                        R = "blur",
                        b = Di;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        b = Di;
                        break;
                    case "click":
                        if (e.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        b = ms;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        b = H0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        b = W0;
                        break;
                    case qs:
                    case Qs:
                    case Bs:
                        b = B0;
                        break;
                    case Ys:
                        b = $0;
                        break;
                    case "scroll":
                    case "scrollend":
                        b = R0;
                        break;
                    case "wheel":
                        b = I0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        b = j0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        b = gs;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        b = tm
                    }
                    var Y = (l & 4) !== 0
                      , rt = !Y && (t === "scroll" || t === "scrollend")
                      , h = Y ? S !== null ? S + "Capture" : null : S;
                    Y = [];
                    for (var r = v, y; r !== null; ) {
                        var A = r;
                        if (y = A.stateNode,
                        A = A.tag,
                        A !== 5 && A !== 26 && A !== 27 || y === null || h === null || (A = Ka(r, h),
                        A != null && Y.push(Mn(r, A, y))),
                        rt)
                            break;
                        r = r.return
                    }
                    0 < Y.length && (S = new b(S,R,null,e,z),
                    E.push({
                        event: S,
                        listeners: Y
                    }))
                }
            }
            if ((l & 7) === 0) {
                t: {
                    if (S = t === "mouseover" || t === "pointerover",
                    b = t === "mouseout" || t === "pointerout",
                    S && e !== Ti && (R = e.relatedTarget || e.fromElement) && (Fe(R) || R[$e]))
                        break t;
                    if ((b || S) && (S = z.window === z ? z : (S = z.ownerDocument) ? S.defaultView || S.parentWindow : window,
                    b ? (R = e.relatedTarget || e.toElement,
                    b = v,
                    R = R ? Fe(R) : null,
                    R !== null && (rt = _(R),
                    Y = R.tag,
                    R !== rt || Y !== 5 && Y !== 27 && Y !== 6) && (R = null)) : (b = null,
                    R = v),
                    b !== R)) {
                        if (Y = ms,
                        A = "onMouseLeave",
                        h = "onMouseEnter",
                        r = "mouse",
                        (t === "pointerout" || t === "pointerover") && (Y = gs,
                        A = "onPointerLeave",
                        h = "onPointerEnter",
                        r = "pointer"),
                        rt = b == null ? S : Va(b),
                        y = R == null ? S : Va(R),
                        S = new Y(A,r + "leave",b,e,z),
                        S.target = rt,
                        S.relatedTarget = y,
                        A = null,
                        Fe(z) === v && (Y = new Y(h,r + "enter",R,e,z),
                        Y.target = y,
                        Y.relatedTarget = rt,
                        A = Y),
                        rt = A,
                        b && R)
                            l: {
                                for (Y = Pm,
                                h = b,
                                r = R,
                                y = 0,
                                A = h; A; A = Y(A))
                                    y++;
                                A = 0;
                                for (var Q = r; Q; Q = Y(Q))
                                    A++;
                                for (; 0 < y - A; )
                                    h = Y(h),
                                    y--;
                                for (; 0 < A - y; )
                                    r = Y(r),
                                    A--;
                                for (; y--; ) {
                                    if (h === r || r !== null && h === r.alternate) {
                                        Y = h;
                                        break l
                                    }
                                    h = Y(h),
                                    r = Y(r)
                                }
                                Y = null
                            }
                        else
                            Y = null;
                        b !== null && fd(E, S, b, Y, !1),
                        R !== null && rt !== null && fd(E, rt, R, Y, !0)
                    }
                }
                t: {
                    if (S = v ? Va(v) : window,
                    b = S.nodeName && S.nodeName.toLowerCase(),
                    b === "select" || b === "input" && S.type === "file")
                        var et = As;
                    else if (Ts(S))
                        if (Es)
                            et = om;
                        else {
                            et = cm;
                            var H = fm
                        }
                    else
                        b = S.nodeName,
                        !b || b.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? v && zi(v.elementType) && (et = As) : et = sm;
                    if (et && (et = et(t, v))) {
                        ps(E, et, e, z);
                        break t
                    }
                    H && H(t, S, v),
                    t === "focusout" && v && S.type === "number" && v.memoizedProps.value != null && bi(S, "number", S.value)
                }
                switch (H = v ? Va(v) : window,
                t) {
                case "focusin":
                    (Ts(H) || H.contentEditable === "true") && (ia = H,
                    qi = v,
                    Pa = null);
                    break;
                case "focusout":
                    Pa = qi = ia = null;
                    break;
                case "mousedown":
                    Qi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Qi = !1,
                    Cs(E, e, z);
                    break;
                case "selectionchange":
                    if (dm)
                        break;
                case "keydown":
                case "keyup":
                    Cs(E, e, z)
                }
                var L;
                if (Ni)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var F = "onCompositionStart";
                            break t;
                        case "compositionend":
                            F = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            F = "onCompositionUpdate";
                            break t
                        }
                        F = void 0
                    }
                else
                    ua ? bs(t, e) && (F = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (F = "onCompositionStart");
                F && (ys && e.locale !== "ko" && (ua || F !== "onCompositionStart" ? F === "onCompositionEnd" && ua && (L = rs()) : (ue = z,
                Mi = "value"in ue ? ue.value : ue.textContent,
                ua = !0)),
                H = Xu(v, F),
                0 < H.length && (F = new hs(F,t,null,e,z),
                E.push({
                    event: F,
                    listeners: H
                }),
                L ? F.data = L : (L = zs(e),
                L !== null && (F.data = L)))),
                (L = em ? am(t, e) : nm(t, e)) && (F = Xu(v, "onBeforeInput"),
                0 < F.length && (H = new hs("onBeforeInput","beforeinput",null,e,z),
                E.push({
                    event: H,
                    listeners: F
                }),
                H.data = L)),
                km(E, t, v, e, z)
            }
            ud(E, l)
        })
    }
    function Mn(t, l, e) {
        return {
            instance: t,
            listener: l,
            currentTarget: e
        }
    }
    function Xu(t, l) {
        for (var e = l + "Capture", a = []; t !== null; ) {
            var n = t
              , u = n.stateNode;
            if (n = n.tag,
            n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ka(t, e),
            n != null && a.unshift(Mn(t, n, u)),
            n = Ka(t, l),
            n != null && a.push(Mn(t, n, u))),
            t.tag === 3)
                return a;
            t = t.return
        }
        return []
    }
    function Pm(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function fd(t, l, e, a, n) {
        for (var u = l._reactName, i = []; e !== null && e !== a; ) {
            var c = e
              , s = c.alternate
              , v = c.stateNode;
            if (c = c.tag,
            s !== null && s === a)
                break;
            c !== 5 && c !== 26 && c !== 27 || v === null || (s = v,
            n ? (v = Ka(e, u),
            v != null && i.unshift(Mn(e, v, s))) : n || (v = Ka(e, u),
            v != null && i.push(Mn(e, v, s)))),
            e = e.return
        }
        i.length !== 0 && t.push({
            event: l,
            listeners: i
        })
    }
    var th = /\r\n?/g
      , lh = /\u0000|\uFFFD/g;
    function cd(t) {
        return (typeof t == "string" ? t : "" + t).replace(th, `
`).replace(lh, "")
    }
    function sd(t, l) {
        return l = cd(l),
        cd(t) === l
    }
    function ot(t, l, e, a, n, u) {
        switch (e) {
        case "children":
            typeof a == "string" ? l === "body" || l === "textarea" && a === "" || ea(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && ea(t, "" + a);
            break;
        case "className":
            Vn(t, "class", a);
            break;
        case "tabIndex":
            Vn(t, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Vn(t, e, a);
            break;
        case "style":
            cs(t, a, u);
            break;
        case "data":
            if (l !== "object") {
                Vn(t, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (l !== "a" || e !== "href")) {
                t.removeAttribute(e);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(e);
                break
            }
            a = wn("" + a),
            t.setAttribute(e, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                t.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (e === "formAction" ? (l !== "input" && ot(t, l, "name", n.name, n, null),
                ot(t, l, "formEncType", n.formEncType, n, null),
                ot(t, l, "formMethod", n.formMethod, n, null),
                ot(t, l, "formTarget", n.formTarget, n, null)) : (ot(t, l, "encType", n.encType, n, null),
                ot(t, l, "method", n.method, n, null),
                ot(t, l, "target", n.target, n, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(e);
                break
            }
            a = wn("" + a),
            t.setAttribute(e, a);
            break;
        case "onClick":
            a != null && (t.onclick = Gl);
            break;
        case "onScroll":
            a != null && k("scroll", t);
            break;
        case "onScrollEnd":
            a != null && k("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(o(61));
                if (e = a.__html,
                e != null) {
                    if (n.children != null)
                        throw Error(o(60));
                    t.innerHTML = e
                }
            }
            break;
        case "multiple":
            t.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            t.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            e = wn("" + a),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
            break;
        case "capture":
        case "download":
            a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
            break;
        case "popover":
            k("beforetoggle", t),
            k("toggle", t),
            Ln(t, "popover", a);
            break;
        case "xlinkActuate":
            jl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            jl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            jl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            jl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            jl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            jl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            jl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            jl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            jl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Ln(t, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = U0.get(e) || e,
            Ln(t, e, a))
        }
    }
    function fc(t, l, e, a, n, u) {
        switch (e) {
        case "style":
            cs(t, a, u);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(o(61));
                if (e = a.__html,
                e != null) {
                    if (n.children != null)
                        throw Error(o(60));
                    t.innerHTML = e
                }
            }
            break;
        case "children":
            typeof a == "string" ? ea(t, a) : (typeof a == "number" || typeof a == "bigint") && ea(t, "" + a);
            break;
        case "onScroll":
            a != null && k("scroll", t);
            break;
        case "onScrollEnd":
            a != null && k("scrollend", t);
            break;
        case "onClick":
            a != null && (t.onclick = Gl);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Pc.hasOwnProperty(e))
                t: {
                    if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"),
                    l = e.slice(2, n ? e.length - 7 : void 0),
                    u = t[Ft] || null,
                    u = u != null ? u[e] : null,
                    typeof u == "function" && t.removeEventListener(l, u, n),
                    typeof a == "function")) {
                        typeof u != "function" && u !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)),
                        t.addEventListener(l, a, n);
                        break t
                    }
                    e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : Ln(t, e, a)
                }
        }
    }
    function Zt(t, l, e) {
        switch (l) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            k("error", t),
            k("load", t);
            var a = !1, n = !1, u;
            for (u in e)
                if (e.hasOwnProperty(u)) {
                    var i = e[u];
                    if (i != null)
                        switch (u) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, l));
                        default:
                            ot(t, l, u, i, e, null)
                        }
                }
            n && ot(t, l, "srcSet", e.srcSet, e, null),
            a && ot(t, l, "src", e.src, e, null);
            return;
        case "input":
            k("invalid", t);
            var c = u = i = n = null
              , s = null
              , v = null;
            for (a in e)
                if (e.hasOwnProperty(a)) {
                    var z = e[a];
                    if (z != null)
                        switch (a) {
                        case "name":
                            n = z;
                            break;
                        case "type":
                            i = z;
                            break;
                        case "checked":
                            s = z;
                            break;
                        case "defaultChecked":
                            v = z;
                            break;
                        case "value":
                            u = z;
                            break;
                        case "defaultValue":
                            c = z;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (z != null)
                                throw Error(o(137, l));
                            break;
                        default:
                            ot(t, l, a, z, e, null)
                        }
                }
            ns(t, u, c, s, v, i, n, !1);
            return;
        case "select":
            k("invalid", t),
            a = i = u = null;
            for (n in e)
                if (e.hasOwnProperty(n) && (c = e[n],
                c != null))
                    switch (n) {
                    case "value":
                        u = c;
                        break;
                    case "defaultValue":
                        i = c;
                        break;
                    case "multiple":
                        a = c;
                    default:
                        ot(t, l, n, c, e, null)
                    }
            l = u,
            e = i,
            t.multiple = !!a,
            l != null ? la(t, !!a, l, !1) : e != null && la(t, !!a, e, !0);
            return;
        case "textarea":
            k("invalid", t),
            u = n = a = null;
            for (i in e)
                if (e.hasOwnProperty(i) && (c = e[i],
                c != null))
                    switch (i) {
                    case "value":
                        a = c;
                        break;
                    case "defaultValue":
                        n = c;
                        break;
                    case "children":
                        u = c;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (c != null)
                            throw Error(o(91));
                        break;
                    default:
                        ot(t, l, i, c, e, null)
                    }
            is(t, a, n, u);
            return;
        case "option":
            for (s in e)
                e.hasOwnProperty(s) && (a = e[s],
                a != null) && (s === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : ot(t, l, s, a, e, null));
            return;
        case "dialog":
            k("beforetoggle", t),
            k("toggle", t),
            k("cancel", t),
            k("close", t);
            break;
        case "iframe":
        case "object":
            k("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < En.length; a++)
                k(En[a], t);
            break;
        case "image":
            k("error", t),
            k("load", t);
            break;
        case "details":
            k("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            k("error", t),
            k("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (v in e)
                if (e.hasOwnProperty(v) && (a = e[v],
                a != null))
                    switch (v) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, l));
                    default:
                        ot(t, l, v, a, e, null)
                    }
            return;
        default:
            if (zi(l)) {
                for (z in e)
                    e.hasOwnProperty(z) && (a = e[z],
                    a !== void 0 && fc(t, l, z, a, e, void 0));
                return
            }
        }
        for (c in e)
            e.hasOwnProperty(c) && (a = e[c],
            a != null && ot(t, l, c, a, e, null))
    }
    function eh(t, l, e, a) {
        switch (l) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var n = null
              , u = null
              , i = null
              , c = null
              , s = null
              , v = null
              , z = null;
            for (b in e) {
                var E = e[b];
                if (e.hasOwnProperty(b) && E != null)
                    switch (b) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        s = E;
                    default:
                        a.hasOwnProperty(b) || ot(t, l, b, null, a, E)
                    }
            }
            for (var S in a) {
                var b = a[S];
                if (E = e[S],
                a.hasOwnProperty(S) && (b != null || E != null))
                    switch (S) {
                    case "type":
                        u = b;
                        break;
                    case "name":
                        n = b;
                        break;
                    case "checked":
                        v = b;
                        break;
                    case "defaultChecked":
                        z = b;
                        break;
                    case "value":
                        i = b;
                        break;
                    case "defaultValue":
                        c = b;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(o(137, l));
                        break;
                    default:
                        b !== E && ot(t, l, S, b, a, E)
                    }
            }
            Si(t, i, c, s, v, z, u, n);
            return;
        case "select":
            b = i = c = S = null;
            for (u in e)
                if (s = e[u],
                e.hasOwnProperty(u) && s != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        b = s;
                    default:
                        a.hasOwnProperty(u) || ot(t, l, u, null, a, s)
                    }
            for (n in a)
                if (u = a[n],
                s = e[n],
                a.hasOwnProperty(n) && (u != null || s != null))
                    switch (n) {
                    case "value":
                        S = u;
                        break;
                    case "defaultValue":
                        c = u;
                        break;
                    case "multiple":
                        i = u;
                    default:
                        u !== s && ot(t, l, n, u, a, s)
                    }
            l = c,
            e = i,
            a = b,
            S != null ? la(t, !!e, S, !1) : !!a != !!e && (l != null ? la(t, !!e, l, !0) : la(t, !!e, e ? [] : "", !1));
            return;
        case "textarea":
            b = S = null;
            for (c in e)
                if (n = e[c],
                e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
                    switch (c) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        ot(t, l, c, null, a, n)
                    }
            for (i in a)
                if (n = a[i],
                u = e[i],
                a.hasOwnProperty(i) && (n != null || u != null))
                    switch (i) {
                    case "value":
                        S = n;
                        break;
                    case "defaultValue":
                        b = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null)
                            throw Error(o(91));
                        break;
                    default:
                        n !== u && ot(t, l, i, n, a, u)
                    }
            us(t, S, b);
            return;
        case "option":
            for (var R in e)
                S = e[R],
                e.hasOwnProperty(R) && S != null && !a.hasOwnProperty(R) && (R === "selected" ? t.selected = !1 : ot(t, l, R, null, a, S));
            for (s in a)
                S = a[s],
                b = e[s],
                a.hasOwnProperty(s) && S !== b && (S != null || b != null) && (s === "selected" ? t.selected = S && typeof S != "function" && typeof S != "symbol" : ot(t, l, s, S, a, b));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var Y in e)
                S = e[Y],
                e.hasOwnProperty(Y) && S != null && !a.hasOwnProperty(Y) && ot(t, l, Y, null, a, S);
            for (v in a)
                if (S = a[v],
                b = e[v],
                a.hasOwnProperty(v) && S !== b && (S != null || b != null))
                    switch (v) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (S != null)
                            throw Error(o(137, l));
                        break;
                    default:
                        ot(t, l, v, S, a, b)
                    }
            return;
        default:
            if (zi(l)) {
                for (var rt in e)
                    S = e[rt],
                    e.hasOwnProperty(rt) && S !== void 0 && !a.hasOwnProperty(rt) && fc(t, l, rt, void 0, a, S);
                for (z in a)
                    S = a[z],
                    b = e[z],
                    !a.hasOwnProperty(z) || S === b || S === void 0 && b === void 0 || fc(t, l, z, S, a, b);
                return
            }
        }
        for (var h in e)
            S = e[h],
            e.hasOwnProperty(h) && S != null && !a.hasOwnProperty(h) && ot(t, l, h, null, a, S);
        for (E in a)
            S = a[E],
            b = e[E],
            !a.hasOwnProperty(E) || S === b || S == null && b == null || ot(t, l, E, S, a, b)
    }
    function od(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function ah() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
                var n = e[a]
                  , u = n.transferSize
                  , i = n.initiatorType
                  , c = n.duration;
                if (u && c && od(i)) {
                    for (i = 0,
                    c = n.responseEnd,
                    a += 1; a < e.length; a++) {
                        var s = e[a]
                          , v = s.startTime;
                        if (v > c)
                            break;
                        var z = s.transferSize
                          , E = s.initiatorType;
                        z && od(E) && (s = s.responseEnd,
                        i += z * (s < c ? 1 : (c - v) / (s - v)))
                    }
                    if (--a,
                    l += 8 * (u + i) / (n.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return l / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var cc = null
      , sc = null;
    function xu(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function rd(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function dd(t, l) {
        if (t === 0)
            switch (l) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && l === "foreignObject" ? 0 : t
    }
    function oc(t, l) {
        return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null
    }
    var rc = null;
    function nh() {
        var t = window.event;
        return t && t.type === "popstate" ? t === rc ? !1 : (rc = t,
        !0) : (rc = null,
        !1)
    }
    var md = typeof setTimeout == "function" ? setTimeout : void 0
      , uh = typeof clearTimeout == "function" ? clearTimeout : void 0
      , hd = typeof Promise == "function" ? Promise : void 0
      , ih = typeof queueMicrotask == "function" ? queueMicrotask : typeof hd < "u" ? function(t) {
        return hd.resolve(null).then(t).catch(fh)
    }
    : md;
    function fh(t) {
        setTimeout(function() {
            throw t
        })
    }
    function pe(t) {
        return t === "head"
    }
    function gd(t, l) {
        var e = l
          , a = 0;
        do {
            var n = e.nextSibling;
            if (t.removeChild(e),
            n && n.nodeType === 8)
                if (e = n.data,
                e === "/$" || e === "/&") {
                    if (a === 0) {
                        t.removeChild(n),
                        Ha(l);
                        return
                    }
                    a--
                } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
                    a++;
                else if (e === "html")
                    On(t.ownerDocument.documentElement);
                else if (e === "head") {
                    e = t.ownerDocument.head,
                    On(e);
                    for (var u = e.firstChild; u; ) {
                        var i = u.nextSibling
                          , c = u.nodeName;
                        u[La] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u),
                        u = i
                    }
                } else
                    e === "body" && On(t.ownerDocument.body);
            e = n
        } while (e);
        Ha(l)
    }
    function yd(t, l) {
        var e = t;
        t = 0;
        do {
            var a = e.nextSibling;
            if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display,
            e.style.display = "none") : (e.style.display = e._stashedDisplay || "",
            e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue,
            e.nodeValue = "") : e.nodeValue = e._stashedText || ""),
            a && a.nodeType === 8)
                if (e = a.data,
                e === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
            e = a
        } while (e)
    }
    function dc(t) {
        var l = t.firstChild;
        for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
            var e = l;
            switch (l = l.nextSibling,
            e.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                dc(e),
                yi(e);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (e.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(e)
        }
    }
    function ch(t, l, e, a) {
        for (; t.nodeType === 1; ) {
            var n = e;
            if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
                if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (a) {
                if (!t[La])
                    switch (l) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"),
                        u === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"),
                        (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (l === "input" && t.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && t.getAttribute("name") === u)
                    return t
            } else
                return t;
            if (t = Ml(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function sh(t, l, e) {
        if (l === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ml(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function vd(t, l) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ml(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function mc(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function hc(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function oh(t, l) {
        var e = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = l;
        else if (t.data !== "$?" || e.readyState !== "loading")
            l();
        else {
            var a = function() {
                l(),
                e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a),
            t._reactRetry = a
        }
    }
    function Ml(t) {
        for (; t != null; t = t.nextSibling) {
            var l = t.nodeType;
            if (l === 1 || l === 3)
                break;
            if (l === 8) {
                if (l = t.data,
                l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
                    break;
                if (l === "/$" || l === "/&")
                    return null
            }
        }
        return t
    }
    var gc = null;
    function Sd(t) {
        t = t.nextSibling;
        for (var l = 0; t; ) {
            if (t.nodeType === 8) {
                var e = t.data;
                if (e === "/$" || e === "/&") {
                    if (l === 0)
                        return Ml(t.nextSibling);
                    l--
                } else
                    e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++
            }
            t = t.nextSibling
        }
        return null
    }
    function bd(t) {
        t = t.previousSibling;
        for (var l = 0; t; ) {
            if (t.nodeType === 8) {
                var e = t.data;
                if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
                    if (l === 0)
                        return t;
                    l--
                } else
                    e !== "/$" && e !== "/&" || l++
            }
            t = t.previousSibling
        }
        return null
    }
    function zd(t, l, e) {
        switch (l = xu(e),
        t) {
        case "html":
            if (t = l.documentElement,
            !t)
                throw Error(o(452));
            return t;
        case "head":
            if (t = l.head,
            !t)
                throw Error(o(453));
            return t;
        case "body":
            if (t = l.body,
            !t)
                throw Error(o(454));
            return t;
        default:
            throw Error(o(451))
        }
    }
    function On(t) {
        for (var l = t.attributes; l.length; )
            t.removeAttributeNode(l[0]);
        yi(t)
    }
    var Ol = new Map
      , Td = new Set;
    function Zu(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var le = D.d;
    D.d = {
        f: rh,
        r: dh,
        D: mh,
        C: hh,
        L: gh,
        m: yh,
        X: Sh,
        S: vh,
        M: bh
    };
    function rh() {
        var t = le.f()
          , l = Hu();
        return t || l
    }
    function dh(t) {
        var l = Ie(t);
        l !== null && l.tag === 5 && l.type === "form" ? jo(l) : le.r(t)
    }
    var Na = typeof document > "u" ? null : document;
    function pd(t, l, e) {
        var a = Na;
        if (a && typeof l == "string" && l) {
            var n = Sl(l);
            n = 'link[rel="' + t + '"][href="' + n + '"]',
            typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
            Td.has(n) || (Td.add(n),
            t = {
                rel: t,
                crossOrigin: e,
                href: l
            },
            a.querySelector(n) === null && (l = a.createElement("link"),
            Zt(l, "link", t),
            qt(l),
            a.head.appendChild(l)))
        }
    }
    function mh(t) {
        le.D(t),
        pd("dns-prefetch", t, null)
    }
    function hh(t, l) {
        le.C(t, l),
        pd("preconnect", t, l)
    }
    function gh(t, l, e) {
        le.L(t, l, e);
        var a = Na;
        if (a && t && l) {
            var n = 'link[rel="preload"][as="' + Sl(l) + '"]';
            l === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + Sl(e.imageSrcSet) + '"]',
            typeof e.imageSizes == "string" && (n += '[imagesizes="' + Sl(e.imageSizes) + '"]')) : n += '[href="' + Sl(t) + '"]';
            var u = n;
            switch (l) {
            case "style":
                u = Ra(t);
                break;
            case "script":
                u = Ca(t)
            }
            Ol.has(u) || (t = q({
                rel: "preload",
                href: l === "image" && e && e.imageSrcSet ? void 0 : t,
                as: l
            }, e),
            Ol.set(u, t),
            a.querySelector(n) !== null || l === "style" && a.querySelector(_n(u)) || l === "script" && a.querySelector(Dn(u)) || (l = a.createElement("link"),
            Zt(l, "link", t),
            qt(l),
            a.head.appendChild(l)))
        }
    }
    function yh(t, l) {
        le.m(t, l);
        var e = Na;
        if (e && t) {
            var a = l && typeof l.as == "string" ? l.as : "script"
              , n = 'link[rel="modulepreload"][as="' + Sl(a) + '"][href="' + Sl(t) + '"]'
              , u = n;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Ca(t)
            }
            if (!Ol.has(u) && (t = q({
                rel: "modulepreload",
                href: t
            }, l),
            Ol.set(u, t),
            e.querySelector(n) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (e.querySelector(Dn(u)))
                        return
                }
                a = e.createElement("link"),
                Zt(a, "link", t),
                qt(a),
                e.head.appendChild(a)
            }
        }
    }
    function vh(t, l, e) {
        le.S(t, l, e);
        var a = Na;
        if (a && t) {
            var n = Pe(a).hoistableStyles
              , u = Ra(t);
            l = l || "default";
            var i = n.get(u);
            if (!i) {
                var c = {
                    loading: 0,
                    preload: null
                };
                if (i = a.querySelector(_n(u)))
                    c.loading = 5;
                else {
                    t = q({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": l
                    }, e),
                    (e = Ol.get(u)) && yc(t, e);
                    var s = i = a.createElement("link");
                    qt(s),
                    Zt(s, "link", t),
                    s._p = new Promise(function(v, z) {
                        s.onload = v,
                        s.onerror = z
                    }
                    ),
                    s.addEventListener("load", function() {
                        c.loading |= 1
                    }),
                    s.addEventListener("error", function() {
                        c.loading |= 2
                    }),
                    c.loading |= 4,
                    Lu(i, l, a)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: c
                },
                n.set(u, i)
            }
        }
    }
    function Sh(t, l) {
        le.X(t, l);
        var e = Na;
        if (e && t) {
            var a = Pe(e).hoistableScripts
              , n = Ca(t)
              , u = a.get(n);
            u || (u = e.querySelector(Dn(n)),
            u || (t = q({
                src: t,
                async: !0
            }, l),
            (l = Ol.get(n)) && vc(t, l),
            u = e.createElement("script"),
            qt(u),
            Zt(u, "link", t),
            e.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function bh(t, l) {
        le.M(t, l);
        var e = Na;
        if (e && t) {
            var a = Pe(e).hoistableScripts
              , n = Ca(t)
              , u = a.get(n);
            u || (u = e.querySelector(Dn(n)),
            u || (t = q({
                src: t,
                async: !0,
                type: "module"
            }, l),
            (l = Ol.get(n)) && vc(t, l),
            u = e.createElement("script"),
            qt(u),
            Zt(u, "link", t),
            e.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function Ad(t, l, e, a) {
        var n = (n = J.current) ? Zu(n) : null;
        if (!n)
            throw Error(o(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Ra(e.href),
            e = Pe(n).hoistableStyles,
            a = e.get(l),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            e.set(l, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                t = Ra(e.href);
                var u = Pe(n).hoistableStyles
                  , i = u.get(t);
                if (i || (n = n.ownerDocument || n,
                i = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(t, i),
                (u = n.querySelector(_n(t))) && !u._p && (i.instance = u,
                i.state.loading = 5),
                Ol.has(t) || (e = {
                    rel: "preload",
                    as: "style",
                    href: e.href,
                    crossOrigin: e.crossOrigin,
                    integrity: e.integrity,
                    media: e.media,
                    hrefLang: e.hrefLang,
                    referrerPolicy: e.referrerPolicy
                },
                Ol.set(t, e),
                u || zh(n, t, e, i.state))),
                l && a === null)
                    throw Error(o(528, ""));
                return i
            }
            if (l && a !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return l = e.async,
            e = e.src,
            typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Ca(e),
            e = Pe(n).hoistableScripts,
            a = e.get(l),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            e.set(l, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, t))
        }
    }
    function Ra(t) {
        return 'href="' + Sl(t) + '"'
    }
    function _n(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function Ed(t) {
        return q({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function zh(t, l, e, a) {
        t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"),
        a.preload = l,
        l.addEventListener("load", function() {
            return a.loading |= 1
        }),
        l.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Zt(l, "link", e),
        qt(l),
        t.head.appendChild(l))
    }
    function Ca(t) {
        return '[src="' + Sl(t) + '"]'
    }
    function Dn(t) {
        return "script[async]" + t
    }
    function Md(t, l, e) {
        if (l.count++,
        l.instance === null)
            switch (l.type) {
            case "style":
                var a = t.querySelector('style[data-href~="' + Sl(e.href) + '"]');
                if (a)
                    return l.instance = a,
                    qt(a),
                    a;
                var n = q({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return a = (t.ownerDocument || t).createElement("style"),
                qt(a),
                Zt(a, "style", n),
                Lu(a, e.precedence, t),
                l.instance = a;
            case "stylesheet":
                n = Ra(e.href);
                var u = t.querySelector(_n(n));
                if (u)
                    return l.state.loading |= 4,
                    l.instance = u,
                    qt(u),
                    u;
                a = Ed(e),
                (n = Ol.get(n)) && yc(a, n),
                u = (t.ownerDocument || t).createElement("link"),
                qt(u);
                var i = u;
                return i._p = new Promise(function(c, s) {
                    i.onload = c,
                    i.onerror = s
                }
                ),
                Zt(u, "link", a),
                l.state.loading |= 4,
                Lu(u, e.precedence, t),
                l.instance = u;
            case "script":
                return u = Ca(e.src),
                (n = t.querySelector(Dn(u))) ? (l.instance = n,
                qt(n),
                n) : (a = e,
                (n = Ol.get(u)) && (a = q({}, e),
                vc(a, n)),
                t = t.ownerDocument || t,
                n = t.createElement("script"),
                qt(n),
                Zt(n, "link", a),
                t.head.appendChild(n),
                l.instance = n);
            case "void":
                return null;
            default:
                throw Error(o(443, l.type))
            }
        else
            l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance,
            l.state.loading |= 4,
            Lu(a, e.precedence, t));
        return l.instance
    }
    function Lu(t, l, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
            var c = a[i];
            if (c.dataset.precedence === l)
                u = c;
            else if (u !== n)
                break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (l = e.nodeType === 9 ? e.head : e,
        l.insertBefore(t, l.firstChild))
    }
    function yc(t, l) {
        t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
        t.title == null && (t.title = l.title)
    }
    function vc(t, l) {
        t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
        t.integrity == null && (t.integrity = l.integrity)
    }
    var Vu = null;
    function Od(t, l, e) {
        if (Vu === null) {
            var a = new Map
              , n = Vu = new Map;
            n.set(e, a)
        } else
            n = Vu,
            a = n.get(e),
            a || (a = new Map,
            n.set(e, a));
        if (a.has(t))
            return a;
        for (a.set(t, null),
        e = e.getElementsByTagName(t),
        n = 0; n < e.length; n++) {
            var u = e[n];
            if (!(u[La] || u[jt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = u.getAttribute(l) || "";
                i = t + i;
                var c = a.get(i);
                c ? c.push(u) : a.set(i, [u])
            }
        }
        return a
    }
    function _d(t, l, e) {
        t = t.ownerDocument || t,
        t.head.insertBefore(e, l === "title" ? t.querySelector("head > title") : null)
    }
    function Th(t, l, e) {
        if (e === 1 || l.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
                break;
            return !0;
        case "link":
            if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
                break;
            return l.rel === "stylesheet" ? (t = l.disabled,
            typeof l.precedence == "string" && t == null) : !0;
        case "script":
            if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
                return !0
        }
        return !1
    }
    function Dd(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function ph(t, l, e, a) {
        if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var n = Ra(a.href)
                  , u = l.querySelector(_n(n));
                if (u) {
                    l = u._p,
                    l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++,
                    t = Ku.bind(t),
                    l.then(t, t)),
                    e.state.loading |= 4,
                    e.instance = u,
                    qt(u);
                    return
                }
                u = l.ownerDocument || l,
                a = Ed(a),
                (n = Ol.get(n)) && yc(a, n),
                u = u.createElement("link"),
                qt(u);
                var i = u;
                i._p = new Promise(function(c, s) {
                    i.onload = c,
                    i.onerror = s
                }
                ),
                Zt(u, "link", a),
                e.instance = u
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(e, l),
            (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++,
            e = Ku.bind(t),
            l.addEventListener("load", e),
            l.addEventListener("error", e))
        }
    }
    var Sc = 0;
    function Ah(t, l) {
        return t.stylesheets && t.count === 0 && Ju(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(e) {
            var a = setTimeout(function() {
                if (t.stylesheets && Ju(t, t.stylesheets),
                t.unsuspend) {
                    var u = t.unsuspend;
                    t.unsuspend = null,
                    u()
                }
            }, 6e4 + l);
            0 < t.imgBytes && Sc === 0 && (Sc = 62500 * ah());
            var n = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && Ju(t, t.stylesheets),
                t.unsuspend)) {
                    var u = t.unsuspend;
                    t.unsuspend = null,
                    u()
                }
            }, (t.imgBytes > Sc ? 50 : 800) + l);
            return t.unsuspend = e,
            function() {
                t.unsuspend = null,
                clearTimeout(a),
                clearTimeout(n)
            }
        }
        : null
    }
    function Ku() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Ju(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var wu = null;
    function Ju(t, l) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        wu = new Map,
        l.forEach(Eh, t),
        wu = null,
        Ku.call(t))
    }
    function Eh(t, l) {
        if (!(l.state.loading & 4)) {
            var e = wu.get(t);
            if (e)
                var a = e.get(null);
            else {
                e = new Map,
                wu.set(t, e);
                for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var i = n[u];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i),
                    a = i)
                }
                a && e.set(null, a)
            }
            n = l.instance,
            i = n.getAttribute("data-precedence"),
            u = e.get(i) || a,
            u === a && e.set(null, n),
            e.set(i, n),
            this.count++,
            a = Ku.bind(this),
            n.addEventListener("load", a),
            n.addEventListener("error", a),
            u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(n, t.firstChild)),
            l.state.loading |= 4
        }
    }
    var Un = {
        $$typeof: Mt,
        Provider: null,
        Consumer: null,
        _currentValue: G,
        _currentValue2: G,
        _threadCount: 0
    };
    function Mh(t, l, e, a, n, u, i, c, s) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = di(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = di(0),
        this.hiddenUpdates = di(null),
        this.identifierPrefix = a,
        this.onUncaughtError = n,
        this.onCaughtError = u,
        this.onRecoverableError = i,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = s,
        this.incompleteTransitions = new Map
    }
    function Ud(t, l, e, a, n, u, i, c, s, v, z, E) {
        return t = new Mh(t,l,e,i,s,v,z,E,c),
        l = 1,
        u === !0 && (l |= 24),
        u = sl(3, null, null, l),
        t.current = u,
        u.stateNode = t,
        l = $i(),
        l.refCount++,
        t.pooledCache = l,
        l.refCount++,
        u.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: l
        },
        tf(u),
        t
    }
    function Nd(t) {
        return t ? (t = sa,
        t) : sa
    }
    function Rd(t, l, e, a, n, u) {
        n = Nd(n),
        a.context === null ? a.context = n : a.pendingContext = n,
        a = re(l),
        a.payload = {
            element: e
        },
        u = u === void 0 ? null : u,
        u !== null && (a.callback = u),
        e = de(t, a, l),
        e !== null && (al(e, t, l),
        fn(e, t, l))
    }
    function Cd(t, l) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var e = t.retryLane;
            t.retryLane = e !== 0 && e < l ? e : l
        }
    }
    function bc(t, l) {
        Cd(t, l),
        (t = t.alternate) && Cd(t, l)
    }
    function Hd(t) {
        if (t.tag === 13 || t.tag === 31) {
            var l = Be(t, 67108864);
            l !== null && al(l, t, 67108864),
            bc(t, 67108864)
        }
    }
    function qd(t) {
        if (t.tag === 13 || t.tag === 31) {
            var l = hl();
            l = mi(l);
            var e = Be(t, l);
            e !== null && al(e, t, l),
            bc(t, l)
        }
    }
    var Wu = !0;
    function Oh(t, l, e, a) {
        var n = T.T;
        T.T = null;
        var u = D.p;
        try {
            D.p = 2,
            zc(t, l, e, a)
        } finally {
            D.p = u,
            T.T = n
        }
    }
    function _h(t, l, e, a) {
        var n = T.T;
        T.T = null;
        var u = D.p;
        try {
            D.p = 8,
            zc(t, l, e, a)
        } finally {
            D.p = u,
            T.T = n
        }
    }
    function zc(t, l, e, a) {
        if (Wu) {
            var n = Tc(a);
            if (n === null)
                ic(t, l, a, ku, e),
                Bd(t, a);
            else if (Uh(n, t, l, e, a))
                a.stopPropagation();
            else if (Bd(t, a),
            l & 4 && -1 < Dh.indexOf(t)) {
                for (; n !== null; ) {
                    var u = Ie(n);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var i = Re(u.pendingLanes);
                                if (i !== 0) {
                                    var c = u;
                                    for (c.pendingLanes |= 2,
                                    c.entangledLanes |= 2; i; ) {
                                        var s = 1 << 31 - fl(i);
                                        c.entanglements[1] |= s,
                                        i &= ~s
                                    }
                                    ql(u),
                                    (nt & 6) === 0 && (Ru = ul() + 500,
                                    An(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            c = Be(u, 2),
                            c !== null && al(c, u, 2),
                            Hu(),
                            bc(u, 2)
                        }
                    if (u = Tc(a),
                    u === null && ic(t, l, a, ku, e),
                    u === n)
                        break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else
                ic(t, l, a, null, e)
        }
    }
    function Tc(t) {
        return t = pi(t),
        pc(t)
    }
    var ku = null;
    function pc(t) {
        if (ku = null,
        t = Fe(t),
        t !== null) {
            var l = _(t);
            if (l === null)
                t = null;
            else {
                var e = l.tag;
                if (e === 13) {
                    if (t = B(l),
                    t !== null)
                        return t;
                    t = null
                } else if (e === 31) {
                    if (t = V(l),
                    t !== null)
                        return t;
                    t = null
                } else if (e === 3) {
                    if (l.stateNode.current.memoizedState.isDehydrated)
                        return l.tag === 3 ? l.stateNode.containerInfo : null;
                    t = null
                } else
                    l !== t && (t = null)
            }
        }
        return ku = t,
        null
    }
    function Qd(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (m0()) {
            case Zc:
                return 2;
            case Lc:
                return 8;
            case jn:
            case h0:
                return 32;
            case Vc:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Ac = !1
      , Ae = null
      , Ee = null
      , Me = null
      , Nn = new Map
      , Rn = new Map
      , Oe = []
      , Dh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Bd(t, l) {
        switch (t) {
        case "focusin":
        case "focusout":
            Ae = null;
            break;
        case "dragenter":
        case "dragleave":
            Ee = null;
            break;
        case "mouseover":
        case "mouseout":
            Me = null;
            break;
        case "pointerover":
        case "pointerout":
            Nn.delete(l.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Rn.delete(l.pointerId)
        }
    }
    function Cn(t, l, e, a, n, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: l,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [n]
        },
        l !== null && (l = Ie(l),
        l !== null && Hd(l)),
        t) : (t.eventSystemFlags |= a,
        l = t.targetContainers,
        n !== null && l.indexOf(n) === -1 && l.push(n),
        t)
    }
    function Uh(t, l, e, a, n) {
        switch (l) {
        case "focusin":
            return Ae = Cn(Ae, t, l, e, a, n),
            !0;
        case "dragenter":
            return Ee = Cn(Ee, t, l, e, a, n),
            !0;
        case "mouseover":
            return Me = Cn(Me, t, l, e, a, n),
            !0;
        case "pointerover":
            var u = n.pointerId;
            return Nn.set(u, Cn(Nn.get(u) || null, t, l, e, a, n)),
            !0;
        case "gotpointercapture":
            return u = n.pointerId,
            Rn.set(u, Cn(Rn.get(u) || null, t, l, e, a, n)),
            !0
        }
        return !1
    }
    function Yd(t) {
        var l = Fe(t.target);
        if (l !== null) {
            var e = _(l);
            if (e !== null) {
                if (l = e.tag,
                l === 13) {
                    if (l = B(e),
                    l !== null) {
                        t.blockedOn = l,
                        $c(t.priority, function() {
                            qd(e)
                        });
                        return
                    }
                } else if (l === 31) {
                    if (l = V(e),
                    l !== null) {
                        t.blockedOn = l,
                        $c(t.priority, function() {
                            qd(e)
                        });
                        return
                    }
                } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function $u(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var l = t.targetContainers; 0 < l.length; ) {
            var e = Tc(t.nativeEvent);
            if (e === null) {
                e = t.nativeEvent;
                var a = new e.constructor(e.type,e);
                Ti = a,
                e.target.dispatchEvent(a),
                Ti = null
            } else
                return l = Ie(e),
                l !== null && Hd(l),
                t.blockedOn = e,
                !1;
            l.shift()
        }
        return !0
    }
    function jd(t, l, e) {
        $u(t) && e.delete(l)
    }
    function Nh() {
        Ac = !1,
        Ae !== null && $u(Ae) && (Ae = null),
        Ee !== null && $u(Ee) && (Ee = null),
        Me !== null && $u(Me) && (Me = null),
        Nn.forEach(jd),
        Rn.forEach(jd)
    }
    function Fu(t, l) {
        t.blockedOn === l && (t.blockedOn = null,
        Ac || (Ac = !0,
        f.unstable_scheduleCallback(f.unstable_NormalPriority, Nh)))
    }
    var Iu = null;
    function Gd(t) {
        Iu !== t && (Iu = t,
        f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
            Iu === t && (Iu = null);
            for (var l = 0; l < t.length; l += 3) {
                var e = t[l]
                  , a = t[l + 1]
                  , n = t[l + 2];
                if (typeof a != "function") {
                    if (pc(a || e) === null)
                        continue;
                    break
                }
                var u = Ie(e);
                u !== null && (t.splice(l, 3),
                l -= 3,
                Tf(u, {
                    pending: !0,
                    data: n,
                    method: e.method,
                    action: a
                }, a, n))
            }
        }))
    }
    function Ha(t) {
        function l(s) {
            return Fu(s, t)
        }
        Ae !== null && Fu(Ae, t),
        Ee !== null && Fu(Ee, t),
        Me !== null && Fu(Me, t),
        Nn.forEach(l),
        Rn.forEach(l);
        for (var e = 0; e < Oe.length; e++) {
            var a = Oe[e];
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < Oe.length && (e = Oe[0],
        e.blockedOn === null); )
            Yd(e),
            e.blockedOn === null && Oe.shift();
        if (e = (t.ownerDocument || t).$$reactFormReplay,
        e != null)
            for (a = 0; a < e.length; a += 3) {
                var n = e[a]
                  , u = e[a + 1]
                  , i = n[Ft] || null;
                if (typeof u == "function")
                    i || Gd(e);
                else if (i) {
                    var c = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u,
                        i = u[Ft] || null)
                            c = i.formAction;
                        else if (pc(n) !== null)
                            continue
                    } else
                        c = i.action;
                    typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3),
                    a -= 3),
                    Gd(e)
                }
            }
    }
    function Xd() {
        function t(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(i) {
                        return n = i
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function l() {
            n !== null && (n(),
            n = null),
            a || setTimeout(e, 20)
        }
        function e() {
            if (!a && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , n = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", l),
            navigation.addEventListener("navigateerror", l),
            setTimeout(e, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", l),
                navigation.removeEventListener("navigateerror", l),
                n !== null && (n(),
                n = null)
            }
        }
    }
    function Ec(t) {
        this._internalRoot = t
    }
    Pu.prototype.render = Ec.prototype.render = function(t) {
        var l = this._internalRoot;
        if (l === null)
            throw Error(o(409));
        var e = l.current
          , a = hl();
        Rd(e, a, t, l, null, null)
    }
    ,
    Pu.prototype.unmount = Ec.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var l = t.containerInfo;
            Rd(t.current, 2, null, t, null, null),
            Hu(),
            l[$e] = null
        }
    }
    ;
    function Pu(t) {
        this._internalRoot = t
    }
    Pu.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var l = kc();
            t = {
                blockedOn: null,
                target: t,
                priority: l
            };
            for (var e = 0; e < Oe.length && l !== 0 && l < Oe[e].priority; e++)
                ;
            Oe.splice(e, 0, t),
            e === 0 && Yd(t)
        }
    }
    ;
    var xd = d.version;
    if (xd !== "19.2.3")
        throw Error(o(527, xd, "19.2.3"));
    D.findDOMNode = function(t) {
        var l = t._reactInternals;
        if (l === void 0)
            throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","),
            Error(o(268, t)));
        return t = p(l),
        t = t !== null ? j(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var Rh = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: T,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ti.isDisabled && ti.supportsFiber)
            try {
                Xa = ti.inject(Rh),
                il = ti
            } catch {}
    }
    return qn.createRoot = function(t, l) {
        if (!O(t))
            throw Error(o(299));
        var e = !1
          , a = ""
          , n = Wo
          , u = ko
          , i = $o;
        return l != null && (l.unstable_strictMode === !0 && (e = !0),
        l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
        l.onCaughtError !== void 0 && (u = l.onCaughtError),
        l.onRecoverableError !== void 0 && (i = l.onRecoverableError)),
        l = Ud(t, 1, !1, null, null, e, a, null, n, u, i, Xd),
        t[$e] = l.current,
        uc(t),
        new Ec(l)
    }
    ,
    qn.hydrateRoot = function(t, l, e) {
        if (!O(t))
            throw Error(o(299));
        var a = !1
          , n = ""
          , u = Wo
          , i = ko
          , c = $o
          , s = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0),
        e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
        e.onCaughtError !== void 0 && (i = e.onCaughtError),
        e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
        e.formState !== void 0 && (s = e.formState)),
        l = Ud(t, 1, !0, l, e ?? null, a, n, s, u, i, c, Xd),
        l.context = Nd(null),
        e = l.current,
        a = hl(),
        a = mi(a),
        n = re(a),
        n.callback = null,
        de(e, n, a),
        e = a,
        l.current.lanes = e,
        Za(l, e),
        ql(l),
        t[$e] = l.current,
        uc(t),
        new Pu(l)
    }
    ,
    qn.version = "19.2.3",
    qn
}
var Pd;
function Sg() {
    if (Pd)
        return Nc.exports;
    Pd = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (d) {
                console.error(d)
            }
    }
    return f(),
    Nc.exports = vg(),
    Nc.exports
}
var kg = Sg()
  , $g = Gc();
const bg = ["noise", "horizontal", "vertical", "radial", "angle", "quadtree"]
  , zg = ["quadtree", "noise", "random", "horizontal", "vertical", "radial", "angle"]
  , Tg = ["noise", "flow", "spiral", "ridged", "fbm", "concentric", "none"]
  , pg = ["noise", "clustered", "sine", "organic", "grid", "random", "cross"]
  , c0 = {
    randomPickThreshold: [.2, .8],
    shapeOffset: [0, 3.5],
    cols: [10, 36],
    minSize: [.3, .8],
    maxSize: [1.8, 2.5],
    randomSizingThreshold: [.4, .8],
    noiseScale: [.03, .25],
    warpStrength: [0, 1],
    horizontalOffset: [-.5, .5],
    verticalOffset: [-.5, .5],
    angleOffset: [-Math.PI, Math.PI],
    radialScale: [.5, 2],
    distributionQuadtreePoints: [400, 1500],
    sizingNoiseScale: [.03, .25],
    sizingWarpStrength: [0, 1],
    sizingHorizontalOffset: [-.5, .5],
    sizingVerticalOffset: [-.5, .5],
    sizingAngleOffset: [-Math.PI, Math.PI],
    sizingRadialScale: [.5, 2],
    sizingQuadtreePoints: [100, 5e3],
    sizingQuadtreeNoiseThreshold: [.2, .6],
    sizingQuadtreeClusterCount: [3, 10],
    sizingQuadtreeClusterSineFrequency: [.5, 3],
    noiseMaskThreshold: [.3, .65],
    noiseMaskWarpStrength: [0, 1],
    flowThreshold: [.35, .65],
    flowStrength: [.3, .8],
    flowScale: [.015, .06],
    flowLayers: [2, 5],
    spiralThreshold: [.15, .5],
    spiralNoise: [.2, .5],
    spiralTightness: [.15, .35],
    spiralArms: [2, 7],
    ridgeThreshold: [.38, .65],
    ridgeSharpness: [1.2, 3],
    ridgeScale: [.03, .08],
    ridgeOctaves: [2, 6],
    fbmMaskThreshold: [.35, .55],
    fbmScale: [.03, .18],
    fbmOctaves: [3, 7],
    fbmPersistence: [.25, .75],
    fbmLacunarity: [1.4, 2.8],
    clusterRadius: [60, 160],
    clusterSineAmplitude: [.1, .5]
}
  , ja = {
    randomPickThreshold: {
        type: "float",
        min: 0,
        max: 1,
        category: "global",
        label: "Random pick chance",
        description: "Chance of picking a random shape",
        mapping: [{
            target: "randomPickThreshold",
            range: [.2, .8]
        }]
    },
    shapeOffset: {
        type: "float",
        min: 0,
        max: 1,
        category: "global",
        label: "Shape offset",
        description: "Global rotation offset for shapes",
        mapping: [{
            target: "shapeOffset",
            range: [0, 3.5]
        }]
    },
    gridScale: {
        type: "float",
        min: 0,
        max: 1,
        category: "global",
        label: "Grid density",
        description: "Controls grid density and base quadtree points",
        mapping: [{
            target: "cols",
            range: [10, 40],
            type: "int"
        }, {
            target: "sizingQuadtreePoints",
            range: [100, 4e3],
            type: "int"
        }]
    },
    minSize: {
        type: "float",
        min: 0,
        max: 1,
        category: "global",
        label: "Minimum size",
        description: "Minimum shape size",
        mapping: [{
            target: "minSize",
            range: [.3, .8]
        }]
    },
    maxSize: {
        type: "float",
        min: 0,
        max: 1,
        category: "global",
        label: "Maximum size",
        description: "Maximum shape size",
        mapping: [{
            target: "maxSize",
            range: [1.8, 2.5]
        }]
    },
    randomSizingThreshold: {
        type: "float",
        min: 0,
        max: 1,
        category: "global",
        label: "Random sizing chance",
        description: "Threshold for choosing random sizing",
        mapping: [{
            target: "randomSizingThreshold",
            range: [.4, .8]
        }]
    },
    distributionMode: {
        type: "categorical",
        category: "global",
        label: "Distribution mode",
        description: "Active distribution mode",
        options: bg
    },
    sizingMode: {
        type: "categorical",
        category: "global",
        label: "Sizing mode",
        description: "Active sizing mode",
        options: zg
    },
    maskMode: {
        type: "categorical",
        category: "global",
        label: "Mask mode",
        description: "Active masking mode",
        options: Tg
    },
    noiseScale: {
        type: "float",
        min: 0,
        max: 1,
        category: "distribution",
        label: "Noise scale",
        description: "Noise texture scale for distribution",
        conditionalMappings: [{
            when: {
                distributionMode: "noise"
            },
            target: "noiseScale",
            range: [.05, .2]
        }]
    },
    warpStrength: {
        type: "float",
        min: 0,
        max: 1,
        category: "distribution",
        label: "Warp strength",
        description: "Noise warp strength for distribution",
        conditionalMappings: [{
            when: {
                distributionMode: "noise"
            },
            target: "warpStrength",
            range: [0, 1]
        }]
    },
    distributionOffset: {
        type: "float",
        min: 0,
        max: 1,
        category: "distribution",
        label: "Distribution offset",
        description: "Directional offset/scale",
        conditionalMappings: [{
            when: {
                distributionMode: "horizontal"
            },
            target: "horizontalOffset",
            range: [-.5, .5]
        }, {
            when: {
                distributionMode: "vertical"
            },
            target: "verticalOffset",
            range: [-.5, .5]
        }, {
            when: {
                distributionMode: "angle"
            },
            target: "angleOffset",
            range: [-Math.PI, Math.PI],
            notes: "Radians"
        }, {
            when: {
                distributionMode: "radial"
            },
            target: "radialScale",
            range: [.5, 2]
        }]
    },
    distributionIntensity: {
        type: "float",
        min: 0,
        max: 1,
        category: "distribution",
        label: "Distribution strength",
        description: "Distribution effect strength (only applies to quadtree mode)",
        conditionalMappings: [{
            when: {
                distributionMode: "quadtree"
            },
            target: "distributionQuadtreePoints",
            range: [400, 1500],
            type: "int"
        }]
    },
    maskThreshold: {
        type: "float",
        min: 0,
        max: 1,
        category: "mask",
        label: "Mask threshold",
        description: "Mask visibility threshold",
        conditionalMappings: [{
            when: {
                maskMode: "noise"
            },
            target: "noiseMaskThreshold",
            range: [.3, .65]
        }, {
            when: {
                maskMode: "flow"
            },
            target: "flowThreshold",
            range: [.35, .65]
        }, {
            when: {
                maskMode: "spiral"
            },
            target: "spiralThreshold",
            range: [.15, .5]
        }, {
            when: {
                maskMode: "ridged"
            },
            target: "ridgeThreshold",
            range: [.25, .65]
        }, {
            when: {
                maskMode: "fbm"
            },
            target: "fbmMaskThreshold",
            range: [.45, .5]
        }]
    },
    maskStrength: {
        type: "float",
        min: 0,
        max: 1,
        category: "mask",
        label: "Mask strength",
        description: "Mask intensity control",
        conditionalMappings: [{
            when: {
                maskMode: "noise"
            },
            target: "noiseMaskWarpStrength",
            range: [0, 1]
        }, {
            when: {
                maskMode: "flow"
            },
            target: "flowStrength",
            range: [.3, .8]
        }, {
            when: {
                maskMode: "spiral"
            },
            target: "spiralNoise",
            range: [.2, .5]
        }, {
            when: {
                maskMode: "ridged"
            },
            target: "ridgeSharpness",
            range: [1.2, 3]
        }, {
            when: {
                maskMode: "fbm"
            },
            target: "fbmPersistence",
            range: [.3, .7]
        }]
    },
    sizingNoiseScale: {
        type: "float",
        min: 0,
        max: 1,
        category: "sizing",
        label: "Sizing noise scale",
        description: "Noise texture scale for sizing",
        conditionalMappings: [{
            when: {
                sizingMode: "noise"
            },
            target: "sizingNoiseScale",
            range: [.05, .2]
        }]
    },
    sizingWarpStrength: {
        type: "float",
        min: 0,
        max: 1,
        category: "sizing",
        label: "Sizing warp strength",
        description: "Noise warp for sizing",
        conditionalMappings: [{
            when: {
                sizingMode: "noise"
            },
            target: "sizingWarpStrength",
            range: [0, 1]
        }]
    },
    sizingOffset: {
        type: "float",
        min: 0,
        max: 1,
        category: "sizing",
        label: "Sizing offset",
        description: "Directional sizing offset",
        conditionalMappings: [{
            when: {
                sizingMode: "horizontal"
            },
            target: "sizingHorizontalOffset",
            range: [-.5, .5]
        }, {
            when: {
                sizingMode: "vertical"
            },
            target: "sizingVerticalOffset",
            range: [-.5, .5]
        }, {
            when: {
                sizingMode: "angle"
            },
            target: "sizingAngleOffset",
            range: [-Math.PI, Math.PI],
            notes: "Radians"
        }, {
            when: {
                sizingMode: "radial"
            },
            target: "sizingRadialScale",
            range: [.5, 2]
        }]
    },
    sizingIntensity: {
        type: "float",
        min: 0,
        max: 1,
        category: "sizing",
        label: "Sizing strength",
        description: "Sizing effect strength (only applies to quadtree mode)",
        conditionalMappings: [{
            when: {
                sizingMode: "quadtree"
            },
            target: "sizingQuadtreePoints",
            range: [100, 4e3],
            type: "int"
        }]
    },
    sizingQuadtreeDistribution: {
        type: "categorical",
        category: "sizing",
        label: "Quadtree distribution",
        description: "Quadtree distribution pattern",
        options: pg
    },
    sizingQuadtreeIntensity: {
        type: "float",
        min: 0,
        max: 1,
        category: "sizing",
        label: "Quadtree intensity",
        description: "Distribution-specific quadtree control",
        conditionalMappings: [{
            when: {
                sizingMode: "quadtree",
                sizingQuadtreeDistribution: "noise"
            },
            target: "sizingQuadtreeNoiseThreshold",
            range: [.2, .6]
        }, {
            when: {
                sizingMode: "quadtree",
                sizingQuadtreeDistribution: "clustered"
            },
            target: "sizingQuadtreeClusterCount",
            range: [3, 10],
            type: "int"
        }, {
            when: {
                sizingMode: "quadtree",
                sizingQuadtreeDistribution: "sine"
            },
            target: "sizingQuadtreeClusterSineFrequency",
            range: [.5, 3]
        }]
    }
}
  , Ag = Object.entries(ja).filter( ([,f]) => f.type === "float").map( ([f]) => f)
  , Eg = Object.entries(ja).filter( ([,f]) => f.type === "categorical").map( ([f]) => f)
  , Mg = () => {
    const f = {};
    return Object.values(jc).forEach(d => {
        Object.entries(d).forEach( ([g,o]) => {
            f[g] = Og(o)
        }
        )
    }
    ),
    f
}
  , Og = f => f && typeof f == "object" && !Array.isArray(f) && "default"in f ? f.default : f
  , _g = Mg()
  , lt = (f, d, g) => d + f * (g - d)
  , ke = (f, d, g) => Math.round(lt(f, d, g))
  , Dg = (f, d) => {
    const g = Math.floor(Math.min(d(), .999999999) * f.length);
    return f[g]
}
  , Ug = f => {
    const d = Bt
      , g = {};
    return Ag.forEach(o => {
        g[o] = d()
    }
    ),
    Eg.forEach(o => {
        const O = ja[o].options;
        g[o] = Dg(O, d)
    }
    ),
    g
}
  , Ng = f => {
    const d = [];
    return !f || typeof f != "object" ? (d.push("Unified parameters must be provided as an object."),
    d) : (Object.entries(ja).forEach( ([g,o]) => {
        if (!(g in f)) {
            d.push(`Missing parameter: ${g}`);
            return
        }
        const O = f[g];
        o.type === "float" ? typeof O != "number" || Number.isNaN(O) ? d.push(`Parameter ${g} must be a number between ${o.min} and ${o.max}.`) : (O < o.min || O > o.max) && d.push(`Parameter ${g} must be between ${o.min} and ${o.max}.`) : o.type === "categorical" && (typeof O != "string" ? d.push(`Parameter ${g} must be one of: ${o.options.join(", ")}.`) : o.options.includes(O) || d.push(`Parameter ${g} must be one of: ${o.options.join(", ")}.`))
    }
    ),
    d)
}
  , Rg = f => {
    const d = Ng(f);
    if (d.length > 0)
        throw new Error(`Invalid unified parameters:
${d.join(`
`)}`);
    return {
        ...f
    }
}
  , w = f => c0[f]
  , qa = f => lt(Bt(), ...w(f))
  , Qa = f => ke(Bt(), ...w(f))
  , t0 = ["horizontal", "vertical", "diagonal"]
  , Cg = () => t0[Math.floor(Bt() * t0.length)]
  , Fg = f => {
    const d = Rg(f)
      , g = {
        ..._g
    };
    g.randomPickThreshold = lt(d.randomPickThreshold, ...w("randomPickThreshold")),
    g.shapeOffset = lt(d.shapeOffset, ...w("shapeOffset")),
    g.cols = ke(d.gridScale, ...w("cols"));
    const o = ke(d.gridScale, ...w("sizingQuadtreePoints"));
    return g.sizingQuadtreePoints = o,
    g.__gridScaleSizingQuadtreePoints = o,
    g.minSize = lt(d.minSize, ...w("minSize")),
    g.maxSize = lt(d.maxSize, ...w("maxSize")),
    g.randomSizingThreshold = lt(d.randomSizingThreshold, ...w("randomSizingThreshold")),
    g.distributionMode = d.distributionMode,
    g.sizingMode = d.sizingMode,
    g.maskMode = d.maskMode,
    Hg(g, d),
    qg(g, d),
    Qg(g, d),
    g.strictBounds = Bt() < .35,
    g
}
  , Hg = (f, d) => {
    const g = d.distributionMode;
    if (g === "noise") {
        f.noiseScale = lt(d.noiseScale, ...w("noiseScale")),
        f.warpStrength = lt(d.warpStrength, ...w("warpStrength"));
        return
    }
    if (g === "horizontal") {
        f.horizontalOffset = lt(d.distributionOffset, ...w("horizontalOffset"));
        return
    }
    if (g === "vertical") {
        f.verticalOffset = lt(d.distributionOffset, ...w("verticalOffset"));
        return
    }
    if (g === "radial") {
        f.radialScale = lt(d.distributionOffset, ...w("radialScale"));
        return
    }
    if (g === "angle") {
        f.angleOffset = lt(d.distributionOffset, ...w("angleOffset"));
        return
    }
    g === "quadtree" && (f.distributionQuadtreePoints = ke(d.distributionIntensity, ...w("distributionQuadtreePoints")))
}
  , qg = (f, d) => {
    const g = d.maskMode;
    if (g === "noise") {
        f.noiseMaskThreshold = lt(d.maskThreshold, ...w("noiseMaskThreshold")),
        f.noiseMaskWarpStrength = lt(d.maskStrength, ...w("noiseMaskWarpStrength"));
        return
    }
    if (g === "flow") {
        f.flowThreshold = lt(d.maskThreshold, ...w("flowThreshold")),
        f.flowStrength = lt(d.maskStrength, ...w("flowStrength")),
        f.flowScale = qa("flowScale"),
        f.flowLayers = Qa("flowLayers"),
        f.flowDirection = Cg();
        return
    }
    if (g === "spiral") {
        f.spiralThreshold = lt(d.maskThreshold, ...w("spiralThreshold")),
        f.spiralNoise = lt(d.maskStrength, ...w("spiralNoise")),
        f.spiralTightness = qa("spiralTightness"),
        f.spiralArms = Qa("spiralArms"),
        f.spiralRotation = Bt() * Math.PI * 2;
        return
    }
    if (g === "ridged") {
        f.ridgeThreshold = lt(d.maskThreshold, ...w("ridgeThreshold")),
        f.ridgeSharpness = lt(d.maskStrength, ...w("ridgeSharpness")),
        f.ridgeScale = qa("ridgeScale"),
        f.ridgeOctaves = Qa("ridgeOctaves");
        return
    }
    if (g === "fbm") {
        f.fbmMaskThreshold = lt(d.maskThreshold, ...w("fbmMaskThreshold")),
        f.fbmPersistence = lt(d.maskStrength, ...w("fbmPersistence")),
        f.fbmScale = qa("fbmScale"),
        f.fbmOctaves = Qa("fbmOctaves"),
        f.fbmLacunarity = qa("fbmLacunarity");
        return
    }
    if (g === "concentric") {
        f.concentricRingThickness = lt(d.maskStrength, .2, .65),
        f.concentricRingSpacing = lt(d.maskThreshold, .25, .65),
        f.concentricRingCount = ke(Bt(), 4, 10),
        f.concentricOffsetX = (Bt() - .5) * .3,
        f.concentricOffsetY = (Bt() - .5) * .3;
        return
    }
}
  , Qg = (f, d) => {
    const g = d.sizingMode;
    if (g === "noise") {
        f.sizingNoiseScale = lt(d.sizingNoiseScale, ...w("sizingNoiseScale")),
        f.sizingWarpStrength = lt(d.sizingWarpStrength, ...w("sizingWarpStrength"));
        return
    }
    if (g === "horizontal") {
        f.sizingHorizontalOffset = lt(d.sizingOffset, ...w("sizingHorizontalOffset"));
        return
    }
    if (g === "vertical") {
        f.sizingVerticalOffset = lt(d.sizingOffset, ...w("sizingVerticalOffset"));
        return
    }
    if (g === "radial") {
        f.sizingRadialScale = lt(d.sizingOffset, ...w("sizingRadialScale"));
        return
    }
    if (g === "angle") {
        f.sizingAngleOffset = lt(d.sizingOffset, ...w("sizingAngleOffset"));
        return
    }
    if (g === "quadtree") {
        const o = f.__gridScaleSizingQuadtreePoints ?? f.sizingQuadtreePoints ?? 1e3;
        f.sizingQuadtreePoints = Math.min(w("sizingQuadtreePoints")[1], Math.max(w("sizingQuadtreePoints")[0], o)),
        delete f.__gridScaleSizingQuadtreePoints;
        const O = d.sizingQuadtreeDistribution;
        ["sine", "organic", "cross", "centered", "circular", "vertical", "horizontal", "fibonacci"].includes(O) ? (f.sizingQuadtreeDistribution = "clustered",
        f.sizingQuadtreeClusterMode = O,
        f.sizingQuadtreeClusterCount = ke(d.sizingQuadtreeIntensity, ...w("sizingQuadtreeClusterCount")),
        f.sizingQuadtreeClusterRadius = Qa("clusterRadius"),
        O === "sine" && (f.sizingQuadtreeClusterSineFrequency = lt(d.sizingQuadtreeIntensity, ...w("sizingQuadtreeClusterSineFrequency")),
        f.sizingQuadtreeClusterSineAmplitude = qa("clusterSineAmplitude"))) : O === "noise" ? (f.sizingQuadtreeDistribution = "noise",
        f.sizingQuadtreeNoiseThreshold = lt(d.sizingQuadtreeIntensity, ...w("sizingQuadtreeNoiseThreshold"))) : O === "clustered" ? (f.sizingQuadtreeDistribution = "clustered",
        f.sizingQuadtreeClusterMode = "centered",
        f.sizingQuadtreeClusterCount = ke(d.sizingQuadtreeIntensity, ...w("sizingQuadtreeClusterCount")),
        f.sizingQuadtreeClusterRadius = Qa("clusterRadius")) : f.sizingQuadtreeDistribution = O || "random"
    } else
        delete f.__gridScaleSizingQuadtreePoints
}
  , Ig = () => typeof globalThis.structuredClone == "function" ? globalThis.structuredClone(ja) : JSON.parse(JSON.stringify(ja));
jc.debug?.ignoreWeights;
const Bg = () => i0.ignoreWeights
  , Yg = ["cols", "sizingQuadtreePoints"]
  , jg = f => typeof f == "object" && f != null && !Array.isArray(f) && f.values == null && f.weighted == null && f.weightedRanges == null && f.min == null && f.default == null
  , Gg = () => {
    const f = {};
    return Object.entries(jc).forEach( ([,d]) => {
        Object.entries(d).forEach( ([g,o]) => {
            if (jg(o))
                f[g] = o;
            else {
                const O = Yg.includes(g) && u0.weightedGridScaleEnabled;
                f[g] = sg(o, {
                    randomize: !0,
                    ignoreWeights: O ? !1 : Bg()
                })
            }
        }
        )
    }
    ),
    f
}
  , l0 = .02
  , Xg = f => Math.max(l0, Math.min(1 - l0, f))
  , xg = (f, d, g) => typeof f != "number" || Number.isNaN(f) || g === d ? .5 : Xg((f - d) / (g - d))
  , tt = (f, d) => xg(f, ...c0[d])
  , Ue = () => Bt()
  , Zg = f => {
    const d = f.distributionMode || "noise"
      , g = f.sizingMode || "quadtree"
      , o = f.maskMode || "noise"
      , O = f.sizingQuadtreeDistribution || "clustered"
      , _ = {
        randomPickThreshold: tt(f.randomPickThreshold, "randomPickThreshold"),
        shapeOffset: tt(f.shapeOffset, "shapeOffset"),
        gridScale: tt(f.cols, "cols"),
        minSize: tt(f.minSize, "minSize"),
        maxSize: tt(f.maxSize, "maxSize"),
        randomSizingThreshold: tt(f.randomSizingThreshold, "randomSizingThreshold"),
        distributionMode: d,
        sizingMode: g,
        maskMode: o,
        noiseScale: tt(f.noiseScale, "noiseScale"),
        warpStrength: tt(f.warpStrength, "warpStrength"),
        distributionOffset: Ue(),
        distributionIntensity: Ue(),
        maskThreshold: Ue(),
        maskStrength: Ue(),
        sizingNoiseScale: tt(f.sizingNoiseScale, "sizingNoiseScale"),
        sizingWarpStrength: tt(f.sizingWarpStrength, "sizingWarpStrength"),
        sizingOffset: Ue(),
        sizingIntensity: Ue(),
        sizingQuadtreeDistribution: O,
        sizingQuadtreeIntensity: Ue()
    };
    return d === "horizontal" ? _.distributionOffset = tt(f.horizontalOffset, "horizontalOffset") : d === "vertical" ? _.distributionOffset = tt(f.verticalOffset, "verticalOffset") : d === "radial" ? _.distributionOffset = tt(f.radialScale, "radialScale") : d === "angle" ? _.distributionOffset = tt(f.angleOffset, "angleOffset") : d === "quadtree" && (_.distributionIntensity = tt(f.distributionQuadtreePoints, "distributionQuadtreePoints")),
    o === "noise" ? (_.maskThreshold = tt(f.noiseMaskThreshold, "noiseMaskThreshold"),
    _.maskStrength = tt(f.noiseMaskWarpStrength, "noiseMaskWarpStrength")) : o === "flow" ? (_.maskThreshold = tt(f.flowThreshold, "flowThreshold"),
    _.maskStrength = tt(f.flowStrength, "flowStrength")) : o === "spiral" ? (_.maskThreshold = tt(f.spiralThreshold, "spiralThreshold"),
    _.maskStrength = tt(f.spiralNoise, "spiralNoise")) : o === "ridged" ? (_.maskThreshold = tt(f.ridgeThreshold, "ridgeThreshold"),
    _.maskStrength = tt(f.ridgeSharpness, "ridgeSharpness")) : o === "fbm" && (_.maskThreshold = tt(f.fbmMaskThreshold, "fbmMaskThreshold"),
    _.maskStrength = tt(f.fbmPersistence, "fbmPersistence")),
    g === "noise" ? (_.sizingNoiseScale = tt(f.sizingNoiseScale, "sizingNoiseScale"),
    _.sizingWarpStrength = tt(f.sizingWarpStrength, "sizingWarpStrength")) : g === "horizontal" ? _.sizingOffset = tt(f.sizingHorizontalOffset, "sizingHorizontalOffset") : g === "vertical" ? _.sizingOffset = tt(f.sizingVerticalOffset, "sizingVerticalOffset") : g === "radial" ? _.sizingOffset = tt(f.sizingRadialScale, "sizingRadialScale") : g === "angle" ? _.sizingOffset = tt(f.sizingAngleOffset, "sizingAngleOffset") : g === "quadtree" && (_.sizingIntensity = tt(f.sizingQuadtreePoints, "sizingQuadtreePoints")),
    O === "noise" ? _.sizingQuadtreeIntensity = tt(f.sizingQuadtreeNoiseThreshold, "sizingQuadtreeNoiseThreshold") : O === "clustered" ? _.sizingQuadtreeIntensity = tt(f.sizingQuadtreeClusterCount, "sizingQuadtreeClusterCount") : O === "sine" ? _.sizingQuadtreeIntensity = tt(f.sizingQuadtreeClusterSineFrequency, "sizingQuadtreeClusterSineFrequency") : _.sizingQuadtreeIntensity = Ue(),
    _
}
  , Lg = () => {
    const f = Gg();
    return Zg(f)
}
  , e0 = {
    seed: "Seed",
    safe: "Safe",
    creative: "Creative",
    chaotic: "Chaotic",
    unknown: "Pattern"
}
  , s0 = (f, d=0) => f && e0[f] ? e0[f] : `Pattern ${String.fromCharCode(65 + d)}`
  , Pg = ["Pattern A", "Pattern B", "Pattern C"]
  , ui = () => window.ENV?.BACKEND_API_URL ? window.ENV.BACKEND_API_URL : null
  , Vg = () => {
    const f = new Uint8Array(32);
    return window.crypto.getRandomValues(f),
    "0x" + Array.from(f).map(d => d.toString(16).padStart(2, "0")).join("")
}
  , Qn = (f, d) => {
    const g = []
      , o = new Set
      , O = ["safe", "creative", "chaotic"];
    for (let _ = 0; _ < d; _++) {
        let B, V = 0;
        do
            B = Vg(),
            V++;
        while (o.has(B) && V < 100);
        o.add(B);
        const N = Lg() || Ug();
        N.seed = B;
        const p = `local-${Date.now()}-${_}`
          , j = O[_ % O.length];
        g.push({
            patternId: p,
            patternConfig: N,
            patternTag: j,
            _sourceText: f,
            _variationType: s0(j, _),
            _isLocal: !0
        })
    }
    return g
}
  , ty = async (f, d=3) => {
    if (!f || typeof f != "string" || f.trim().length === 0)
        throw new Error("Text input is required");
    const g = ui();
    if (!g)
        return console.log("[textToParams] No backend configured, using local generation"),
        Qn(f, d);
    try {
        console.log("[textToParams] Calling backend:", g);
        const o = await fetch(`${g}/generate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: f
            })
        });
        if (!o.ok)
            throw new Error(`Backend error: ${o.status} ${o.statusText}`);
        const O = await o.json();
        if (!O || typeof O != "object" || Array.isArray(O))
            return console.warn("[textToParams] Backend returned invalid response format, falling back to local generation"),
            Qn(f, d);
        if (!O.patterns || typeof O.patterns != "object")
            return console.warn('[textToParams] Backend response missing "patterns" key, falling back to local generation'),
            Qn(f, d);
        const _ = []
          , B = Object.keys(O.patterns);
        for (let V = 0; V < B.length; V++) {
            const N = B[V]
              , p = O.patterns[N];
            if (!p || typeof p != "object") {
                console.warn(`[textToParams] Skipping invalid pattern data for ID: ${N}`);
                continue
            }
            const {pattern_config: j, pattern_tag: q} = p;
            if (!j || typeof j != "object") {
                console.warn(`[textToParams] Skipping pattern with missing config for ID: ${N}`);
                continue
            }
            _.push({
                patternId: N,
                patternConfig: {
                    ...j
                },
                patternTag: q || "unknown",
                _sourceText: f,
                _variationType: s0(q, V),
                _isLocal: !1
            })
        }
        return _.length === 0 ? (console.warn("[textToParams] Backend returned no valid patterns, falling back to local generation"),
        Qn(f, d)) : (console.log("[textToParams] Received configs from backend:", _.length),
        _)
    } catch (o) {
        return console.warn("[textToParams] Backend call failed, falling back to local generation:", o.message),
        Qn(f, d)
    }
}
  , ly = async () => {
    const f = ui();
    if (!f)
        return !1;
    try {
        const d = await fetch(`${f}/health`);
        return d.ok ? (await d.json()).status === "healthy" : !1
    } catch {
        return !1
    }
}
  , ey = async f => {
    const d = ui();
    if (!d)
        return console.warn("[savePattern] No backend configured, pattern selection not saved"),
        {
            success: !1,
            message: "No backend configured"
        };
    if (!f || f.startsWith("local-"))
        return console.warn("[savePattern] Cannot save local pattern without backend ID"),
        {
            success: !1,
            message: "Pattern was generated locally without backend"
        };
    try {
        console.log("[savePattern] Calling /store with pattern_id:", f);
        const g = await fetch(`${d}/store`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                pattern_id: f
            })
        });
        if (!g.ok) {
            const O = await g.json().catch( () => ({}));
            throw new Error(O.detail || `Store failed: ${g.status}`)
        }
        const o = await g.json();
        return console.log("[savePattern] Pattern marked as chosen:", o.message || "OK"),
        {
            success: !0,
            message: o.message || "Pattern saved",
            ...o
        }
    } catch (g) {
        return console.error("[savePattern] Failed to save pattern selection:", g.message),
        {
            success: !1,
            message: g.message
        }
    }
}
  , ay = async () => {
    const f = ui();
    if (!f)
        return console.warn("[fetchPatterns] No backend configured"),
        [];
    try {
        console.log("[fetchPatterns] Fetching patterns from backend:", f);
        const d = await fetch(`${f}/patterns`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!d.ok)
            throw new Error(`Failed to fetch patterns: ${d.status} ${d.statusText}`);
        const g = await d.json();
        return !g || !Array.isArray(g.patterns) ? (console.warn("[fetchPatterns] Backend returned invalid response format"),
        []) : (console.log("[fetchPatterns] Retrieved patterns:", g.patterns.length),
        g.patterns)
    } catch (d) {
        return console.error("[fetchPatterns] Failed to fetch patterns:", d.message),
        []
    }
}
;
export {u0 as F, ai as H, e0 as P, Bt as R, Pg as V, ei as W, Qh as _, Bl as a, yg as b, Bc as c, Yc as d, $g as e, Ug as f, Lg as g, _c as h, Kg as i, Lh as j, Jg as k, ey as l, Fg as m, i0 as n, Wg as o, Ig as p, Rg as q, Ya as r, Dc as s, ty as t, ly as u, kg as v, ay as w, jc as x, sg as y, wg as z};
