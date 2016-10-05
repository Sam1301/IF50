/*
 * tagContainer Generator v5
 * Copyright Tag Commander
 * http://www.tagcommander.com/
 * Generated: 2016-09-26 12:30:23 Europe/Paris
 * ---
 * Version	: 16.18
 * IDTC 	: 1
 * IDS		: 878
 */
/*!compressed by YUI*/
if (typeof tC == "undefined") {
    if (typeof document.domain == "undefined" || typeof document.referrer == "undefined") {
        document = window.document
    }(function(m, k) {
        var j, r, y = m.document,
            a = m.location,
            e = m.navigator,
            x = m.tC,
            v = m.$,
            H = Array.prototype.push,
            b = Array.prototype.slice,
            u = Array.prototype.indexOf,
            g = Object.prototype.toString,
            i = Object.prototype.hasOwnProperty,
            o = String.prototype.trim,
            c = function(J, K) {
                return new c.fn.init(J, K, j)
            },
            B = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            q = /\S/,
            t = /\s+/,
            d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            l = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            D = /^[\],:{}\s]*$/,
            z = /(?:^|:|,)(?:\s*\[)+/g,
            G = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            E = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
            I = /^-ms-/,
            p = /-([\da-z])/gi,
            F = function(J, K) {
                return (K + "").toUpperCase()
            },
            f = {};
        c.fn = c.prototype = {
            constructor: c,
            init: function(J, M, P) {
                var L, N, K, O;
                if (!J) {
                    return this
                }
                if (J.nodeType) {
                    this.context = this[0] = J;
                    this.length = 1;
                    return this
                }
                if (typeof J === "string") {
                    if (J.charAt(0) === "<" && J.charAt(J.length - 1) === ">" && J.length >= 3) {
                        L = [null, J, null]
                    } else {
                        L = w.exec(J)
                    }
                    if (L && (L[1] || !M)) {
                        if (L[1]) {
                            M = M instanceof c ? M[0] : M;
                            O = (M && M.nodeType ? M.ownerDocument || M : y);
                            J = c.parseHTML(L[1], O, true);
                            if (l.test(L[1]) && c.isPlainObject(M)) {
                                this.attr.call(J, M, true)
                            }
                            return c.merge(this, J)
                        } else {
                            N = y.getElementById(L[2]);
                            if (N && N.parentNode) {
                                if (N.id !== L[2]) {
                                    return P.find(J)
                                }
                                this.length = 1;
                                this[0] = N
                            }
                            this.context = y;
                            this.selector = J;
                            return this
                        }
                    } else {
                        if (!M || M.tC) {
                            return (M || P).find(J)
                        } else {
                            return this.constructor(M).find(J)
                        }
                    }
                } else {
                    if (c.isFunction(J)) {
                        return P.ready(J)
                    }
                }
                if (J.selector !== k) {
                    this.selector = J.selector;
                    this.context = J.context
                }
                return c.makeArray(J, this)
            },
            each: function(K, J) {
                return c.each(this, K, J)
            },
            ready: function(J) {
                c.ready.promise(J);
                return this
            }
        };
        c.fn.init.prototype = c.fn;
        c.extend = c.fn.extend = function() {
            var S, L, J, K, P, Q, O = arguments[0] || {},
                N = 1,
                M = arguments.length,
                R = false;
            if (typeof O === "boolean") {
                R = O;
                O = arguments[1] || {};
                N = 2
            }
            if (typeof O !== "object" && !c.isFunction(O)) {
                O = {}
            }
            if (M === N) {
                O = this;
                --N
            }
            for (; N < M; N++) {
                if ((S = arguments[N]) != null) {
                    for (L in S) {
                        J = O[L];
                        K = S[L];
                        if (O === K) {
                            continue
                        }
                        if (R && K && (c.isPlainObject(K) || (P = c.isArray(K)))) {
                            if (P) {
                                P = false;
                                Q = J && c.isArray(J) ? J : []
                            } else {
                                Q = J && c.isPlainObject(J) ? J : {}
                            }
                            O[L] = c.extend(R, Q, K)
                        } else {
                            if (K !== k) {
                                O[L] = K
                            }
                        }
                    }
                }
            }
            return O
        };
        c.extend({
            ssl: (("https:" == y.location.protocol) ? "https://manager." : "http://redirect878."),
            randOrd: function() {
                return (Math.round(Math.random()) - 0.5)
            },
            nodeNames: "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            rnocache: /<(?:script|object|embed|option|style)/i,
            rnoshimcache: new RegExp("<(?:" + c.nodeNames + ")[\\s/>]", "i"),
            rchecked: /checked\s*(?:[^=]|=\s*.checked.)/i,
            containersLaunched: {}
        });
        c.extend({
            inArray: function(N, K, M) {
                var J, L = Array.prototype.indexOf;
                if (K) {
                    if (L) {
                        return L.call(K, N, M)
                    }
                    J = K.length;
                    M = M ? M < 0 ? Math.max(0, J + M) : M : 0;
                    for (; M < J; M++) {
                        if (M in K && K[M] === N) {
                            return M
                        }
                    }
                }
                return -1
            },
            isFunction: function(J) {
                return c.type(J) === "function"
            },
            isArray: Array.isArray || function(J) {
                return c.type(J) === "array"
            },
            isWindow: function(J) {
                return J != null && J == J.window
            },
            isNumeric: function(J) {
                return !isNaN(parseFloat(J)) && isFinite(J)
            },
            type: function(J) {
                return J == null ? String(J) : f[g.call(J)] || "object"
            },
            each: function(O, P, L) {
                var K, M = 0,
                    N = O.length,
                    J = N === k || c.isFunction(O);
                if (L) {
                    if (J) {
                        for (K in O) {
                            if (P.apply(O[K], L) === false) {
                                break
                            }
                        }
                    } else {
                        for (; M < N;) {
                            if (P.apply(O[M++], L) === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (J) {
                        for (K in O) {
                            if (P.call(O[K], K, O[K]) === false) {
                                break
                            }
                        }
                    } else {
                        for (; M < N;) {
                            if (P.call(O[M], M, O[M++]) === false) {
                                break
                            }
                        }
                    }
                }
                return O
            },
            log: function(J, K) {
                try {
                    if (c.getCookie("tCdebugLib") && console) {
                        console[K ? K : "log"](J)
                    }
                } catch (L) {}
            }
        });
        c.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(K, J) {
            f["[object " + J + "]"] = J.toLowerCase()
        });
        j = c(y);
        var h = {};

        function C(K) {
            var J = h[K] = {};
            c.each(K.split(t), function(M, L) {
                J[L] = true
            });
            return J
        }
        c.buildFragment = function(M, N, K) {
            var L, J, O, P = M[0];
            N = N || y;
            N = !N.nodeType && N[0] || N;
            N = N.ownerDocument || N;
            if (M.length === 1 && typeof P === "string" && P.length < 512 && N === y && P.charAt(0) === "<" && !c.rnocache.test(P) && (c.support.checkClone || !c.rchecked.test(P)) && (c.support.html5Clone || !c.rnoshimcache.test(P))) {
                J = true;
                L = jQuery.fragments[P];
                O = L !== k
            }
            if (!L) {
                L = N.createDocumentFragment();
                c.clean(M, N, L, K);
                if (J) {
                    c.fragments[P] = O && L
                }
            }
            return {
                fragment: L,
                cacheable: J
            }
        };
        var s = a.hostname,
            n = s.split("."),
            A = "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";
        if (n.length < 2 || s.match(A)) {
            c.maindomain = s
        } else {
            c.maindomain = n[n.length - 2] + "." + n[n.length - 1]
        }
        m.tC = c
    })(window)
}
tC.extend({
    internalvars: typeof tC.internalvars != "undefined" ? tC.internalvars : {},
    internalFunctions: typeof tC.internalFunctions != "undefined" ? tC.internalFunctions : {},
    privacyVersion: "",
    containerVersion: "16.18",
    id_container: "1",
    id_site: "878",
    generatorVersion: "1.0.0",
    dedup_done: typeof tC.dedup_done != "undefined" ? tC.dedup_done : false
});
tC.extend({
    launchTag: function(e, c, d, a, b) {
        tC.array_launched_tags.push(c);
        tC.array_launched_tags_keys.push(e);
        tC.containersLaunched[a][b].t.push({
            id: e,
            label: c,
            idTpl: d
        });
        window.postMessage('TC.EX:{"id":"' + e + '","idc":"' + b + '","idt":"' + d + '","ids":"' + a + '","lb":"' + c.replace(/"/g, '\\"') + '"}', "*")
    }
});
if (tC.containersLaunched === undefined) {
    tC.containersLaunched = {}
}
if (tC.containersLaunched[878] === undefined) {
    tC.containersLaunched[878] = {}
}
tC.containersLaunched[878][1] = {
    v: "16.18",
    t: []
};
tC.extend({
    domReady: false,
    isDOMReady: function() {
        if (document.readyState == "complete" || document.readyState == "loaded") {
            return true
        }
        if (document.readyState != "interactive") {
            return false
        }
        if (!document.documentElement.doScroll) {
            return true
        }
        try {
            document.documentElement.doScroll("left");
            return true
        } catch (a) {
            return false
        }
    },
    waitingOnDomReadyCallBacks: tC.waitingOnDomReadyCallBacks || [],
    excuteOnDomReadyCallBacks: function() {
        for (var a = 0; a < tC.waitingOnDomReadyCallBacks.length; a++) {
            tC.waitingOnDomReadyCallBacks[a]()
        }
        tC.waitingOnDomReadyCallBacks = []
    },
    onDomReady: function(b) {
        if (this.domReady) {
            b();
            return
        }
        tC.waitingOnDomReadyCallBacks.push(b);
        var a = false;
        if (document.addEventListener) {
            a = true;
            document.addEventListener("DOMContentLoaded", function() {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                tC.excuteOnDomReadyCallBacks()
            }, false)
        } else {
            if (document.attachEvent) {
                a = true;
                document.attachEvent("onreadystatechange", function() {
                    if (document.readyState === "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        tC.excuteOnDomReadyCallBacks()
                    }
                });
                if (document.documentElement.doScroll && window == window.top) {
                    (function() {
                        if (tC.domReady) {
                            return
                        }
                        try {
                            document.documentElement.doScroll("left")
                        } catch (c) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        tC.excuteOnDomReadyCallBacks()
                    })()
                }
            }
        }
        if (!a) {
            window.onload = tC.excuteOnDomReadyCallBacks
        }
    }
});
if (tC.isDOMReady()) {
    tC.domReady = true
} else {
    tC.onDomReady(function() {
        tC.domReady = true
    })
}
tC.extend({
    isCurrentVersion: function() {
        var a = tC.getCookie("tc_mode_test"),
            b = "testModeIncludeReplaceThisByTrue";
        return a != "1" || (a == "1" && b == "true")
    }
});
tC.extend({
    pixelTrack: {
        add: function(a, b) {
            a = a || 0;
            b = b || "img";
            tC.onDomReady(function() {
                if (b == "iframe") {
                    var c = document.createElement(b);
                    c.src = a;
                    c.width = 1;
                    c.height = 1;
                    c.style.display = "none";
                    document.body.appendChild(c)
                } else {
                    var c = new Image();
                    c.src = a
                }
            })
        }
    }
});
tC.extend({
    tc_hdoc: false,
    domain: function() {
        this.tc_hdoc = document;
        try {
            try {
                this.tc_hdoc = top.document
            } catch (d) {
                this.tc_hdoc = document
            }
            var a = typeof this.tc_hdoc.domain != "undefined" ? this.tc_hdoc.domain.toLowerCase().split(".") : false,
                g = "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";
            if (a.length < 2 || this.tc_hdoc.domain.match(g)) {
                return ""
            } else {
                var f = a[a.length - 3],
                    c = a[a.length - 2],
                    b = a[a.length - 1];
                if (c == "co" || c == "com") {
                    return "." + f + "." + c + "." + b
                } else {
                    return "." + c + "." + b
                }
            }
        } catch (d) {
            tC.log(["tC.domain error : ", d], "warn")
        }
    }
});
tC.domain();
tC.extend({
    removeCookie: function(a) {
        this.setCookie(a, "", -1)
    },
    setCookie: function(c, e, a, h, d, g) {
        if (!d) {
            d = tC.domain()
        }
        var b = new Date();
        b.setTime(b.getTime());
        if (a) {
            a = a * 1000 * 60 * 60 * 24
        }
        var f = new Date(b.getTime() + (a));
        document.cookie = c + "=" + escape(e) + ((a) ? ";expires=" + f.toGMTString() : "") + ((h) ? ";path=" + h : ";path=/") + ((d) ? ";domain=" + d : "") + ((g) ? ";secure" : "")
    },
    getCookie: function(a) {
        return (result = new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)").exec(document.cookie)) ? unescape(result[1]) : ""
    }
});
tC.extend({
    storage: {
        has: function() {
            try {
                if ("localStorage" in window && window.localStorage !== null) {
                    window.localStorage.setItem("TC_CHECK", "1");
                    window.localStorage.removeItem("TC_CHECK");
                    return true
                }
                return false
            } catch (a) {
                return false
            }
        },
        get: function(a) {
            return this.has() ? window.localStorage.getItem(a) : false
        },
        set: function(b, a) {
            return this.has() ? (window.localStorage.setItem(b, a) || true) : false
        },
        remove: function(a) {
            return this.has() ? (window.localStorage.removeItem(a) || true) : false
        }
    }
});
tC.extend({
    _R: {
        cR: function(a) {
            tC.storage.set("tC_Sync", a);
            tC.pixelTrack.add("//engage.commander1.com/reach?tc_s=878")
        },
        rR: function() {
            if (tC.storage.has()) {
                var a = new Date().getTime();
                var b = tC.storage.get("tC_Sync") || 0;
                b = parseInt(b);
                if (b == 0 || a - b > 604800000) {
                    this.cR(a)
                }
            }
        }
    }
});
tC.onDomReady(function() {
    tC._R.rR()
});
tC.extend({
    hitCounter: function() {
        if (Math.floor(Math.random() * parseInt(230)) == 0) {
            tC.pixelTrack.add("//manager.tagcommander.com/utils/hit.php?id=1&site=878&version=16.18&frequency=230&position=" + tC.container_position + "&rand=" + Math.random())
        }
    }
});
tC.container_position = (typeof tc_container_position !== "undefined") ? tc_container_position : (typeof tC.container_position !== "undefined") ? tC.container_position : 0;
tC.container_position++;
if (typeof tc_container_position !== "undefined") {
    tc_container_position++
}
tC.hitCounter();
tC.extend({
    script: {
        add: function(d, f, c) {
            var a = (document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode),
                b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = d;
            b.charset = "utf-8";
            if (a) {
                if (f) {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            f()
                        }, false)
                    } else {
                        b.onreadystatechange = function() {
                            if (b.readyState in {
                                    loaded: 1,
                                    complete: 1
                                }) {
                                b.onreadystatechange = null;
                                f()
                            }
                        }
                    }
                }
                if (c && typeof c == "number") {
                    setTimeout(function() {
                        if (a && b.parentNode) {
                            a.removeChild(b)
                        }
                    }, c)
                }
                a.insertBefore(b, a.firstChild)
            } else {
                tC.log("tC.script error : the element <script> or <body> is not found ! the file " + d + " is not implemented !", "warn")
            }
        }
    }
});
tC.extend({
    getParamURL: function(p, b) {
        if (typeof p === "undefined") {
            return ""
        }
        p = p.toLowerCase();
        var n = new Array();
        if (!b) {
            var o = "";
            try {
                if (typeof top != "undefined" && typeof top.document != "undefined") {
                    o = top.document
                }
            } catch (h) {}
            if (o === "") {
                o = document
            }
            b = typeof o.location != "undefined" ? o.location.href : ""
        }
        var m = 0;
        var d = b.indexOf("?");
        var c = b.indexOf("#");
        if (d != -1) {
            m = d
        } else {
            if (c != -1) {
                m = c
            }
        }
        var a = "";
        if (m != 0) {
            a = b.substring(m + 1, b.length).split("#").join("&")
        }
        a = a.replace(/%3d/g, "=");
        var f = a.split("&");
        for (var g = 0; g < f.length; g++) {
            var l = f[g].split("="),
                j = (l.shift()).toLowerCase(),
                k = l.join("=");
            n[j] = k
        }
        return ((typeof n[p] != "undefined") ? n[p] : "")
    }
});
tC.extend({
    crypt: function(d) {
        var e = "",
            a;
        for (var b = 0; b < d.length; b++) {
            var f = d.charCodeAt(b);
            if (f >= 32 && f <= 126) {
                a = f + 26;
                if (a > 126) {
                    a = (a % 126) + 32 - 1
                }
                e += String.fromCharCode(a)
            } else {
                e += d.charAt(b)
            }
        }
        return e
    },
    uncrypt: function(c) {
        var d = "",
            a;
        for (var b = 0; b < c.length; b++) {
            if (c.charCodeAt(b) >= 32 && c.charCodeAt(b) <= 126) {
                if (c.charCodeAt(b) >= (32 + 26) && c.charCodeAt(b) <= 126) {
                    a = c.charCodeAt(b) - 26
                } else {
                    a = c.charCodeAt(b) - 26 + (126 - 32) + 1
                }
                d += String.fromCharCode(a)
            } else {
                d += c.charAt(b)
            }
        }
        return d
    }
});
tC.extend({
    match: function(a, d, b) {
        try {
            return (a.match(new RegExp(d, b)))
        } catch (c) {
            tC.log("the tC.match error ! message : " + c.message, "data : " + a, "p : " + d, "flag : " + b, "warn")
        }
    }
});
tC.extend({
    addClass: function(f) {
        var h, d, b, e, g, j, a;
        if (tC.isFunction(f)) {
            return this.each(function(c) {
                jQuery(this).addClass(f.call(this, c, this.className))
            })
        }
        if (f && typeof f === "string") {
            h = f.split(core_rspace);
            for (d = 0, b = this.length; d < b; d++) {
                e = this[d];
                if (e.nodeType === 1) {
                    if (!e.className && h.length === 1) {
                        e.className = f
                    } else {
                        g = " " + e.className + " ";
                        for (j = 0, a = h.length; j < a; j++) {
                            if (g.indexOf(" " + h[j] + " ") < 0) {
                                g += h[j] + " "
                            }
                        }
                        e.className = jQuery.trim(g)
                    }
                }
            }
        }
        return this
    },
    removeClass: function(h) {
        var e, f, g, j, b, d, a;
        if (tC.isFunction(h)) {
            return this.each(function(c) {
                jQuery(this).removeClass(h.call(this, c, this.className))
            })
        }
        if ((h && typeof h === "string") || h === undefined) {
            e = (h || "").split(core_rspace);
            for (d = 0, a = this.length; d < a; d++) {
                g = this[d];
                if (g.nodeType === 1 && g.className) {
                    f = (" " + g.className + " ").replace(rclass, " ");
                    for (j = 0, b = e.length; j < b; j++) {
                        while (f.indexOf(" " + e[j] + " ") >= 0) {
                            f = f.replace(" " + e[j] + " ", " ")
                        }
                    }
                    g.className = h ? jQuery.trim(f) : ""
                }
            }
        }
        return this
    },
    toggleClass: function(d, b) {
        var c = typeof d,
            a = typeof b === "boolean";
        if (tC.isFunction(d)) {
            return this.each(function(e) {
                tC(this).toggleClass(d.call(this, e, this.className, b), b)
            })
        }
        return this.each(function() {
            if (c === "string") {
                var g, f = 0,
                    e = jQuery(this),
                    h = b,
                    j = d.split(core_rspace);
                while ((g = j[f++])) {
                    h = a ? h : !e.hasClass(g);
                    e[h ? "addClass" : "removeClass"](g)
                }
            } else {
                if (c === "undefined" || c === "boolean") {
                    if (this.className) {
                        jQuery._data(this, "__className__", this.className)
                    }
                    this.className = this.className || d === false ? "" : jQuery._data(this, "__className__") || ""
                }
            }
        })
    },
    hasClass: function(a) {
        var d = " " + a + " ",
            c = 0,
            b = this.length;
        for (; c < b; c++) {
            if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(rclass, " ").indexOf(d) >= 0) {
                return true
            }
        }
        return false
    }
});
if (tC.isCurrentVersion()) {
    if (typeof tC.dedup_done == "undefined" || tC.dedup_done === false) {
        tC.extend({
            dedup: {
                crypted: true,
                LeA: false,
                LeAD: false,
                LeC: false,
                LeCD: false,
                LeV: false,
                LeVD: false,
                FeA: false,
                FeAD: false,
                FeC: false,
                FeCD: false,
                FeV: false,
                FeVD: false,
                AeA: [],
                AeC: [],
                AeV: [],
                tc_hdoc: document,
                brands: null,
                d_tags: null,
                tc_scompshop: null,
                tc_scomnet: null,
                tc_ssearchv: null,
                tc_ssearche: null,
                cj_max: null,
                enable_dedup: null,
                ch_A: [],
                ch_C: [],
                ch_V: [],
                ch_0: null,
                detected_channel: "",
                detected_source: "",
                tc_scookcj_name: "tc_cj_v2",
                tc_scookcj_path: "/",
                tc_scookcj_days: 365,
                tc_dm: tC.domain(),
                tc_scooksda_name: "tc_sdauid",
                tc_scooksda_path: "/",
                setup: function(b, a) {
                    this[b] = a;
                    return this
                },
                init: function() {
                    if (!this.enable_dedup) {
                        return
                    }
                    var o = this,
                        h = "",
                        t = "",
                        k = "",
                        G = 0;
                    o.cj = o.getCj();
                    for (x in o.ch_0) {
                        var j = o.ch_0[x];
                        if (j.t == "c" || j.t == "a") {
                            o.ch_C.push(j)
                        }
                        if (j.t == "v" || j.t == "a") {
                            o.ch_V.push(j)
                        }
                        if (j.t != "0" && typeof j.l != "undefined") {
                            o.ch_A.push(j)
                        }
                    }
                    try {
                        o.tc_hdoc = top.document
                    } catch (A) {}
                    if (tC.getCookie("TCID") == "") {
                        tC.setCookie("TCID", o.rand(), 365, "/", "." + o.tc_dm)
                    }
                    if (tC.getCookie("TCSESSION") == "") {
                        tC.setCookie("TCSESSION", o.rand(), 0, "/", "." + o.tc_dm)
                    }
                    var y = tC.getParamURL;
                    if ((y("WT.srch") != "" && y("WT.srch").match(/^1$/))) {
                        h = {
                            l: "SEA"
                        };
                        var F = y("WT.mc_id");
                        if (F != "") {
                            t = (F.split("_")[3] != undefined) ? F.split("_")[3] : ""
                        }
                    }
                    if ((y("WT.tsrc") != "" && y("WT.tsrc").match(/^social$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^socialcampaign$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^Socialcampaign$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^SocialCampaign$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^SOCIALCAMPAIGN$/))) {
                        h = {
                            l: "SocialMedia"
                        };
                        var F = y("WT.mc_id");
                        if (F != "") {
                            t = (F.split("_")[3] != undefined) ? F.split("_")[3] : ""
                        }
                    }
                    if ((y("WT.tsrc") != "" && y("WT.tsrc").match(/^affiliation$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^Affiliation$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^AFFILIATION$/))) {
                        h = {
                            l: "Affiliation"
                        };
                        var F = y("WT.mc_id");
                        if (F != "") {
                            t = (F.split("_")[3] != undefined) ? F.split("_")[3] : ""
                        }
                    }
                    if ((y("WT.tsrc") != "" && y("WT.tsrc").match(/^email$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^Email$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^EMAIL$/))) {
                        h = {
                            l: "Email"
                        };
                        var F = y("WT.mc_id");
                        if (F != "") {
                            t = (F.split("_")[3] != undefined) ? F.split("_")[3] : ""
                        }
                    }
                    if ((y("WT.tsrc") != "" && y("WT.tsrc").match(/^metasearch$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^Metasearch$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^MetaSearch$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^METASEARCH$/))) {
                        h = {
                            l: "Metasearch"
                        };
                        var F = y("WT.mc_id");
                        if (F != "") {
                            t = (F.split("_")[3] != undefined) ? F.split("_")[3] : ""
                        }
                    }
                    if ((y("WT.tsrc") != "" && y("WT.tsrc").match(/^display$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^Display$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^DISPLAY$/))) {
                        h = {
                            l: "Display"
                        };
                        var F = y("WT.mc_id");
                        if (F != "") {
                            t = (F.split("_")[3] != undefined) ? F.split("_")[3] : ""
                        }
                    }
                    if ((y("WT.tsrc") != "" && y("WT.tsrc").match(/^offline$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^Offline$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^OFFLINE$/))) {
                        h = {
                            l: "Offline"
                        };
                        var F = y("WT.mc_id");
                        if (F != "") {
                            t = (F.split("_")[3] != undefined) ? F.split("_")[3] : ""
                        }
                    }
                    if ((y("WT.tsrc") != "" && y("WT.tsrc").match(/^localchannels$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^Localchannels$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^LocalChannels$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^LOCALCHANNELS$/))) {
                        h = {
                            l: "Localchannels"
                        };
                        var F = y("WT.mc_id");
                        if (F != "") {
                            t = (F.split("_")[3] != undefined) ? F.split("_")[3] : ""
                        }
                    }
                    if ((y("WT_tsrc") != "" && y("WT_tsrc").match(/^Mobile$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^Mobile$/))) {
                        h = {
                            l: "Mobile"
                        };
                        var F = y("WT.mc_id");
                        t = F
                    }
                    if ((y("WT.tsrc") != "" && y("WT.tsrc").match(/^Video$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^video$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^VIDEO$/))) {
                        h = {
                            l: "Video"
                        };
                        var F = y("WT.mc_id");
                        t = F
                    }
                    if ((y("WT.tsrc") != "" && y("WT.tsrc").match(/^MCR$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^mcr$/)) || (y("WT.tsrc") != "" && y("WT.tsrc").match(/^Mcr$/))) {
                        h = {
                            l: "MultiChannelRetargeting"
                        };
                        var F = y("")
                    }
                    if (typeof h.l != "undefined") {
                        h = h.l
                    }
                    if (typeof h !== "undefined" && h != null && h != "") {
                        G = 1
                    }
                    if (typeof t !== "undefined" && t != null && t != "") {
                        G = 1
                    }
                    if (!G) {
                        var E = o.meta_origin(o.tc_hdoc.referrer);
                        if (E) {
                            h = (E.split("@@@"))[0];
                            t = (E.split("@@@"))[1]
                        }
                    }
                    if (tC.dedup.redirect != "1") {
                        if (h) {
                            var m = h + "@@@" + t + "@@@" + new Date().getTime() + "@@@C",
                                u = o.cj;
                            if (u.length > 0) {
                                var a = u[u.length - 1],
                                    r = a.split("@@@"),
                                    w = typeof r[0] != "undefined" ? r[0] : "",
                                    B = typeof r[1] != "undefined" ? r[1] : "",
                                    C = typeof r[3] != "undefined" ? r[3].replace("CLICK", "C") : "";
                                if (w == h && B == t && C == "C") {
                                    o.cj.pop()
                                }
                            }
                            o.setCj(m);
                            if ("klm.commander1.com" != "" && "klm.commander1.com".indexOf("commander1.com") !== -1) {
                                tC.pixelTrack.add("https://klm.commander1.com/dc3/?chn=" + h + "&src=" + t + "&type=C&limit=" + tC.dedup.cj_max + "&rand=" + Math.random(), "img")
                            }
                            tC.dedup.detected_channel = h;
                            tC.dedup.detected_source = t
                        }
                    } else {
                        tC.setCookie("TCREDIRECT", "0", 0, "/", tC.domain())
                    }
                    var d = o.cj;
                    var q = "";
                    for (var x = d.length - 1; x >= 0; x--) {
                        var p = d[x].split("@@@");
                        if (p.length != 4) {} else {
                            var n = p[0],
                                D = p[1],
                                v = o.age(p[2]),
                                v = v == "" ? false : v,
                                l = p[3].replace("VIEW", "V").replace("CLICK", "C"),
                                f = o.getChannel({
                                    l: n,
                                    t: "A"
                                }),
                                b = o.getChannel({
                                    l: n,
                                    t: "C"
                                }),
                                z = o.getChannel({
                                    l: n,
                                    t: "V"
                                });
                            if ((b || z) && v !== false) {
                                if (b != false && l == "C" && parseFloat(v) <= parseFloat(b.a)) {
                                    if (!o.LeC) {
                                        o.LeC = n;
                                        o.LeCD = D
                                    }
                                    o.FeC = n;
                                    o.FeCD = D;
                                    o.AeC.push({
                                        c: n,
                                        d: D
                                    });
                                    if (!o.LeA || q == "V") {
                                        o.LeA = n;
                                        o.LeAD = D;
                                        q = "C"
                                    }
                                    o.FeA = n;
                                    o.FeAD = D;
                                    o.AeA.push({
                                        c: n,
                                        d: D
                                    })
                                }
                                if (z != false && l == "V" && parseFloat(v) <= parseFloat(z.b)) {
                                    if (!o.LeV) {
                                        o.LeV = n;
                                        o.LeVD = D
                                    }
                                    o.FeV = n;
                                    o.FeVD = D;
                                    o.AeV.push({
                                        c: n,
                                        d: D
                                    });
                                    if (!o.LeA) {
                                        o.LeA = n;
                                        o.LeAD = D;
                                        q = "V"
                                    }
                                    o.FeA = n;
                                    o.FeAD = D;
                                    o.AeA.push({
                                        c: n,
                                        d: D
                                    })
                                }
                            }
                        }
                    }
                },
                getChannel: function(f) {
                    var c = f.t,
                        b = tC.dedup,
                        e;
                    if (c == "C" || c == "click") {
                        e = b.ch_C
                    } else {
                        if (c == "V" || c == "view") {
                            e = b.ch_V
                        } else {
                            if (c == "A" || c == "all") {
                                e = b.ch_A
                            } else {
                                e = b.ch_0
                            }
                        }
                    }
                    if (typeof f.l != "undefined") {
                        f.l = f.l.replace("DIRECT_ACCESS", "Direct Access").replace("EXTERNAL_LINK", "External links");
                        if (f.l == "COM") {
                            f.l = "Community websites"
                        }
                        if (f.l == "CSS") {
                            f.l = "Comparison shopping services"
                        }
                        if (f.l == "BRAND") {
                            f.l = "Brand"
                        }
                    }
                    for (var a in e) {
                        if ((typeof f.i != "undefined" && parseInt(f.i) == parseInt(e[a].i)) || (typeof f.l != "undefined" && typeof e[a].l != "undefined" && f.l.toLowerCase() == e[a].l.toLowerCase())) {
                            return e[a]
                        }
                    }
                    return false
                },
                rand: function() {
                    var a = new Date();
                    return "" + a.getYear() + (a.getMonth() + 1) + a.getDay() + a.getHours() + a.getMinutes() + a.getSeconds() + parseInt(Math.random() * 12345678942)
                },
                getCj: function() {
                    var a = this.crypted ? tC.uncrypt(tC.getCookie(this.tc_scookcj_name)) : tC.getCookie(this.tc_scookcj_name);
                    return a == "" ? [] : a.split("|||")
                },
                setCj: function(b) {
                    var c = this.cj;
                    if (tC.isArray(b)) {
                        for (var a in b) {
                            c.push(b[a])
                        }
                    } else {
                        c.push(b)
                    }
                    while (c.length > this.cj_max) {
                        c.shift()
                    }
                    this.cj = c;
                    tC.setCookie(this.tc_scookcj_name, (this.crypted ? tC.crypt(c.join("|||")) : c.join("|||")), this.tc_scookcj_days, this.tc_scookcj_path, this.tc_dm)
                },
                removeCj: function() {
                    tC.setCookie(this.tc_scookcj_name, "", 0, this.tc_scookcj_path, this.tc_dm)
                },
                match: function(b, c, a) {
                    if (b && b != "ignored" && a != "") {
                        switch (b) {
                            case "equals":
                                if (a == c) {
                                    return true
                                }
                                break;
                            case "different":
                                if (a != c) {
                                    return true
                                }
                                break;
                            case "contains":
                                if (tC.match(a, c)) {
                                    return true
                                }
                                break;
                            case "notcontains":
                                if (!tC.match(a, c)) {
                                    return true
                                }
                                break;
                            default:
                                return true
                        }
                    } else {
                        return true
                    }
                    return false
                },
                contains_channel: function(c) {
                    for (var a in c.e) {
                        var b = c.e[a];
                        if (typeof b == "object") {
                            if (typeof b.c != "undefined" && typeof c.c != "undefined" && b.c.toLowerCase() == c.c.toLowerCase() && this.match(c.m, c.s, b.d)) {
                                return true
                            }
                        }
                    }
                    return false
                },
                ValidRules: function(id_tag) {
                    var rules = typeof this.d_tags[id_tag] != "undefined" ? this.d_tags[id_tag] : false,
                        valid_rules = true,
                        self = this;
                    if (!rules) {
                        return true
                    }
                    state_rules_string = "";
                    var tab_length = rules.length;
                    for (var i = 0; i < tab_length; i++) {
                        var rule = rules[i];
                        if (typeof rule == "object") {
                            var res = self.test(rule);
                            if (i == 0) {
                                state_rules_string += res
                            } else {
                                state_rules_string += " " + rule.x + " " + res
                            }
                        }
                    }
                    return eval(state_rules_string.replace(/and/g, "&&").replace(/or/g, "||"))
                },
                test: function(k) {
                    var p = this,
                        h = channel_found_in_cj = [],
                        m = k.t.toLowerCase(),
                        e = k.w,
                        n = k.m,
                        a = k.s,
                        l = k.f,
                        o = typeof k.d != "undefined" ? k.d : false,
                        c = k.c;
                    if (m == "all") {
                        if (e == "any") {
                            h = p.AeA
                        } else {
                            if (e == "last") {
                                h = p.LeA ? [{
                                    c: p.LeA,
                                    d: p.LeAD
                                }] : []
                            } else {
                                if (e == "first") {
                                    h = p.FeA ? [{
                                        c: p.FeA,
                                        d: p.FeAD
                                    }] : []
                                }
                            }
                        }
                    } else {
                        if (m == "click") {
                            if (e == "any") {
                                h = p.AeC
                            } else {
                                if (e == "last") {
                                    h = p.LeC ? [{
                                        c: p.LeC,
                                        d: p.LeCD
                                    }] : []
                                } else {
                                    if (e == "first") {
                                        h = p.FeC ? [{
                                            c: p.FeC,
                                            d: p.FeCD
                                        }] : []
                                    }
                                }
                            }
                        } else {
                            if (m == "view") {
                                if (e == "any") {
                                    h = p.AeV
                                } else {
                                    if (e == "last") {
                                        h = p.LeV ? [{
                                            c: p.LeV,
                                            d: p.LeVD
                                        }] : []
                                    } else {
                                        if (e == "first") {
                                            h = p.FeV ? [{
                                                c: p.FeV,
                                                d: p.FeVD
                                            }] : []
                                        }
                                    }
                                }
                            }
                        }
                    }
                    for (var f in c) {
                        if (typeof c[f] != "function") {
                            var j = c[f],
                                b = p.getChannel({
                                    i: j,
                                    t: m
                                }),
                                g = b.l;
                            if (tC.dedup.contains_channel({
                                    c: g,
                                    e: h,
                                    m: n,
                                    s: a
                                })) {
                                channel_found_in_cj.push(j)
                            }
                        }
                    }
                    return ((l == "1" && channel_found_in_cj.length != 0) || (l == "0" && channel_found_in_cj.length == 0))
                },
                age: function(a) {
                    var b = new Date().getTime() + 100;
                    return ((b - a) / 3600 / 24 / 1000).toFixed(2)
                },
                meta_origin: function(c) {
                    if (c == "undefined" || !c || c == "") {
                        return ("DIRECT_ACCESS@@@")
                    }
                    var c = c.toLowerCase(),
                        d = this.tc_hdoc.domain.toLowerCase(),
                        h = ref_d_s = cur_d_s = "",
                        m = this;
                    if (c != "") {
                        var j = c.split("/"),
                            h = j[2];
                        my_d_a = h.split(".");
                        ref_d_s = my_d_a[my_d_a.length - 2]
                    }
                    if (ref_d_s == "co" || ref_d_s == "com" || ref_d_s == "org") {
                        ref_d_s = my_d_a[my_d_a.length - 3]
                    }
                    if (d != "") {
                        var b = d.split(".");
                        cur_d_s = b[b.length - 2];
                        if (cur_d_s == "co" || cur_d_s == "com" || cur_d_s == "org") {
                            cur_d_s = b[b.length - 3]
                        }
                    }
                    if (ref_d_s == cur_d_s) {
                        return false
                    }
                    for (var f = 0; f < m.tc_ssearche.length; f++) {
                        if (ref_d_s == m.tc_ssearche[f]) {
                            var e = tC.getParamURL(m.tc_ssearchv[f], c),
                                e = unescape(e.toLowerCase());
                            for (type in m.brands) {
                                var l = m.brands[type];
                                for (kb in l) {
                                    var a = l[kb];
                                    if (typeof(a) == "string") {
                                        var a = a != "" ? a.toLowerCase() : false,
                                            g = type == "Regex" ? new RegExp(a, "g") : false;
                                        if (a && ((type == "Exact word" && e === a) || (type == "Contain" && e.indexOf(a) != -1) || (type == "Regex" && g.test(e)))) {
                                            return ("BRAND@@@" + m.tc_ssearche[f])
                                        }
                                    }
                                }
                            }
                            return ("SEO@@@" + m.tc_ssearche[f])
                        }
                    }
                    for (var f = 0; f < m.tc_scomnet.length; f++) {
                        if (ref_d_s == m.tc_scomnet[f]) {
                            return ("COM@@@" + m.tc_scomnet[f])
                        }
                    }
                    for (var f = 0; f < m.tc_scompshop.length; f++) {
                        if (ref_d_s == m.tc_scompshop[f]) {
                            return ("CSS@@@" + m.tc_scompshop[f])
                        }
                    }
                    if (ref_d_s != cur_d_s) {
                        return ("EXTERNAL_LINK@@@" + h)
                    }
                    return false
                }
            }
        });
        tC.dedup.redirect = typeof tc_redirect != "undefined" ? tc_redirect : typeof tC.dedup.redirect != "undefined" ? tC.dedup.redirect : tC.getCookie("TCREDIRECT")
    }
    tC.dedup.setup("d_tags", []).setup("ch_0", [{
        i: "1",
        l: "SEA",
        t: "c",
        a: "30.00",
        b: "0.00",
        g: [{
            g: "WT.mc_id",
            s: "split",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "1",
                n: "0"
            }],
            w: "_",
            n: 3
        }]
    }, {
        i: "9",
        l: "SocialMedia",
        t: "c",
        a: "30.00",
        b: "0.00",
        g: [{
            g: "WT.mc_id",
            s: "split",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "social",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "socialcampaign",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "Socialcampaign",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "SocialCampaign",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "SOCIALCAMPAIGN",
                n: "0"
            }],
            w: "_",
            n: 3
        }]
    }, {
        i: "11",
        l: "Affiliation",
        t: "c",
        a: "30.00",
        b: "0.00",
        g: [{
            g: "WT.mc_id",
            s: "split",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "affiliation",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "Affiliation",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "AFFILIATION",
                n: "0"
            }],
            w: "_",
            n: 3
        }]
    }, {
        i: "13",
        l: "Email",
        t: "c",
        a: "30.00",
        b: "0.00",
        g: [{
            g: "WT.mc_id",
            s: "split",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "email",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "Email",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "EMAIL",
                n: "0"
            }],
            w: "_",
            n: 3
        }]
    }, {
        i: "15",
        l: "Metasearch",
        t: "c",
        a: "30.00",
        b: "0.00",
        g: [{
            g: "WT.mc_id",
            s: "split",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "metasearch",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "Metasearch",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "MetaSearch",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "METASEARCH",
                n: "0"
            }],
            w: "_",
            n: 3
        }]
    }, {
        i: "17",
        l: "Display",
        t: "c",
        a: "30.00",
        b: "0.00",
        g: [{
            g: "WT.mc_id",
            s: "split",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "display",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "Display",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "DISPLAY",
                n: "0"
            }],
            w: "_",
            n: 3
        }]
    }, {
        i: "19",
        l: "Offline",
        t: "c",
        a: "30.00",
        b: "0.00",
        g: [{
            g: "WT.mc_id",
            s: "split",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "offline",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "Offline",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "OFFLINE",
                n: "0"
            }],
            w: "_",
            n: 3
        }]
    }, {
        i: "21",
        l: "Localchannels",
        t: "c",
        a: "30.00",
        b: "0.00",
        g: [{
            g: "WT.mc_id",
            s: "split",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "localchannels",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "Localchannels",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "LocalChannels",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "LOCALCHANNELS",
                n: "0"
            }],
            w: "_",
            n: 3
        }]
    }, {
        i: "23",
        l: "Mobile",
        t: "c",
        a: "30.00",
        b: "0.00",
        g: [{
            g: "WT.mc_id",
            s: "takeall",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "Mobile",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "Mobile",
                n: "0"
            }]
        }]
    }, {
        i: "25",
        l: "Video",
        t: "c",
        a: "30.00",
        b: "0.00",
        g: [{
            g: "WT.mc_id",
            s: "takeall",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "Video",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "video",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "VIDEO",
                n: "0"
            }]
        }]
    }, {
        i: "27",
        l: "MultiChannelRetargeting",
        t: "0",
        a: "0.00",
        b: "0.00",
        g: [{
            g: "",
            s: "",
            r: [{
                c: " and ",
                m: "customized",
                a: false,
                l: "MCR",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "mcr",
                n: "0"
            }, {
                c: " or ",
                m: "customized",
                a: false,
                l: "Mcr",
                n: "0"
            }]
        }]
    }]);
    if (typeof tC.dedup_done == "undefined" || tC.dedup_done === false) {
        tC.dedup.setup("brands", []).setup("tc_scompshop", ["shopping", "kelkoo"]).setup("tc_scomnet", ["facebook", "linkedin", "viadeo", "trombi", "myspace", "orkut", "habbo", "xing", "yammer", "twitter"]).setup("tc_ssearchv", ["q", "p", "q", "query", "encquery", "query", "q", "q", "query", "query", "qt", "terms", "query", "q", "q", "rdata", "qs", "q", "wd", "qs", "text", "q", "q", "query", "query", "q", "q", "szukaj", "qt", "q", "q", "q", "k", "q", "searchExpr", "q", "q", "query", "query", "q", "q", "search_for", "q", "q", "search_word", "query", "q", "words", "qt", "q"]).setup("tc_ssearche", ["google", "yahoo", "msn", "aol", "aol", "lycos", "ask", "altavista", "netscape", "cnn", "looksmart", "about", "mamma", "alltheweb", "gigablast", "voila", "virgilio", "live", "baidu", "alice", "yandex", "najdi", "aol", "club-internet", "mama", "seznam", "search", "wp", "onet", "netsprint", "google.interia", "szukacz", "yam", "pchome", "kvasir", "sesam", "ozu", "terra", "nostrum", "mynet", "ekolay", "search.ilse", "bing", "daum", "eniro", "naver", "kvasir", "rambler", "onetcenter", "szukacs"]).setup("cj_max", 10).setup("enable_dedup", tC.isCurrentVersion()).init();
        tC.dedup_done = true
    }
}
tC878_1 = tC; /* RETRO COMPATIBILITY FUNCTIONS */

if (typeof tc_vars == 'undefined') var tc_vars = [];
(function() {
    var l = 'z_application|z_host|z_country|z_language|z_eventplace|z_eventtype|z_eventvalue|z_app_version|z_widget|z_origin|z_destination|z_nb_adults|z_trip_type|z_cabin_code|z_departure_date|z_return_date|z_pos|z_currency|z_fare_basis|z_tax|z_booking_fee|z_outbound_prices|z_outbound_selected|z_outbound_journey_durations|z_outbound_departure_times|z_outbound_number_of_stops|z_outbound_subclass|z_outbound_marketing_carrier_flight_nr|z_inbound_prices|z_inbound_selected|z_inbound_journey_durations|z_inbound_departure_times|z_inbound_number_of_stops|z_inbound_subclass|z_inbound_marketing_carrier_flight_nr|z_passenger|z_day_before_flight|z_stay_duration|z_ship_costs|z_event|z_nb_children|z_nb_infants|z_package_order|z_nb_passengers|z_flight_nr|datasourceid|z_departure_day|z_departure_month|z_departure_year|z_booking_day|ti|dnt|application|cg_n|cg_s|host|country|language|dcsuri|error_severity|error_errordescription|error_errorcode|event_value|tx_u|tx_e|si_x|si_n|si_cs|shipping_costs|product_prices|product_ids|PNR_number|payment_status|payment_method_status|payment_method|flight_nr|destination|day_before_flight|currency|booking_year|booking_time|booking_month|booking_day|departure_date|departure_day|departure_month|departure_year|error_code|event|event_place|origin|product_group|product_subgroup|upgradeyourself_eligable|event_type|app_version|seg_3|tx_id|tx_it|tx_i|z_tc_version|cg_s1|cg_s2|nb_adults|nb_children|nb_infants|package_order_number|passenger|pn_sku|pos|return_date|stay_duration|tx_s|tail_nr|identification_type|eticket|pnr|ffp_tier_level|login|voucher_code|z_tail_nr'.split('|');
    for (var k in l) {
        if (!tc_vars.hasOwnProperty(l[k])) {
            tc_vars[l[k]] = '';
        }
    }
})();

/*DYNAMIC JS BLOCK 1*/

/*END DYNAMIC JS BLOCK 1*/

/*CUSTOM_JS_BLOCK1*/
var tc_wt_mapping = [];

function tc_events_41(myObject, myID, my_tab) {
    tc_vars = my_tab;
    window._tmsQueue = window._tmsQueue || [];
    window._tmsQueue.push(tc_vars);
    return tc_events_1(myObject, 'WT_Click', my_tab);
}

function tCGetUrlParam(paramName) {
    var oRegex = new RegExp('[\?&]' + paramName + '=([^&]+)', 'i');
    var oMatch = oRegex.exec(window.top.location.search);
    if (oMatch && oMatch.length > 1)
        return oMatch[1];
    else
        return;
}

/*END_CUSTOM_JS_BLOCK1*/
tC.array_launched_tags = [];
tC.array_launched_tags_keys = [];
tC.id_site = '878';
if (tC.getCookie('tc_mode_test') == 1) {
    (function() {
        var tc_testmodescriptload = document.createElement('script');
        tc_testmodescriptload.type = 'text/javascript';
        tc_testmodescriptload.src = '//manager.tagcommander.com/utils/test_mode_include.php?id=1&site=878&type=load&rand=' + Math.random() + '&version=';
        (document.getElementsByTagName('body')[0] || document.getElementsByTagName('head')[0] || document.getElementsByTagName('script')[0].parentNode).appendChild(tc_testmodescriptload);
    })();
} else {
    /*VARIABLES_BLOCK*/

    tC.internalvars.fulldomain = window.location.hostname;
    tC.internalvars.maindomain = '';
    var tmp1 = window.location.hostname.split('.');
    if (tmp1[tmp1.length - 3].length <= 2) {
        tC.internalvars.maindomain = '.' + tmp1[tmp1.length - 3] + '.' + tmp1[tmp1.length - 2] + '.' + tmp1[tmp1.length - 1];
    } else {
        tC.internalvars.maindomain = '.' + tmp1[tmp1.length - 2] + '.' + tmp1[tmp1.length - 1];
    }
    tC.internalvars.pax = tCGetUrlParam("pax");
    tC.internalvars.pathname = window.location.pathname;
    tC.internalvars.WTMCID = tC.getParamURL("WT.mc_id", document.location.href).split("_");
    tC.internalvars.WTMCIDLocalisation = tC.internalvars.WTMCID["0"];
    tC.internalvars.WTMCIDCountry = tC.internalvars.WTMCID["1"];
    tC.internalvars.WTMCIDChannel = tC.internalvars.WTMCID["2"];
    tC.internalvars.WTMCIDPartner = tC.internalvars.WTMCID["3"];
    tC.internalvars.WTMCIDMarketingProgram = tC.internalvars.WTMCID["4"];
    tC.internalvars.WTMCIDOffer = tC.internalvars.WTMCID["5"];
    tC.internalvars.WTMCIDCmpName = tC.internalvars.WTMCID["6"];
    tC.internalvars.WTMCIDOther = tC.internalvars.WTMCID["7"];
    tC.internalvars.tc_dscid = "";
    switch (tC.internalvars.fulldomain) {
        case "ite1.klm.com":
            tC.internalvars.tc_dscid = "dcsw02gke10000gkyw16xkpms_9u6b";
            break;
        case "ute3.klm.com":
            tC.internalvars.tc_dscid = "dcsw02gke10000gkyw16xkpms_9u6b";
            break;
        case "ute1.klm.com":
            tC.internalvars.tc_dscid = "dcsw02gke10000gkyw16xkpms_9u6b";
            break;
        case "ute2.klm.com":
            tC.internalvars.tc_dscid = "dcsw02gke10000gkyw16xkpms_9u6b_2r3j";
            break;
        case "ave1.klm.com":
            tC.internalvars.tc_dscid = "dcsw02gke10000gkyw16xkpms_9u6b";
            break;
        case "se2.klm.com":
            tC.internalvars.tc_dscid = "dcsw02gke10000gkyw16xkpms_9u6b";
            break;
        case "ite2.klm.com":
            tC.internalvars.tc_dscid = "dcsw02gke10000gkyw16xkpms_9u6b";
            break;
        case "mobile.klm.com":
            tC.internalvars.tc_dscid = "dcscayhhsuz5bdfycynyj8xcm_4q2r";
            break;
        case "livejms.klm.com":
            tC.internalvars.tc_dscid = "dcscayhhsuz5bdfycynyj8xcm_4q2r";
            break;
        case "kltest.mobileaware.com":
            tC.internalvars.tc_dscid = "dcslnjhji10000sx834b6fqms_1o8v";
            break;
        case "klm.com":
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e ";
            break;
        case "businessdeals.klm.com":
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e ";
            break;
        case "mustseemap.klm.com":
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e ";
            break;
        case "wannagives.klm.com":
            tC.internalvars.tc_dscid = "dcs0001kc100000cday3tyow0_6w4p";
            break;
        case "bookmobile.klm.com":
            tC.internalvars.tc_dscid = "dcscayhhsuz5bdfycynyj8xcm_4q2r";
            break;
        case "stage.ebuilders.nl":
            tC.internalvars.tc_dscid = "dcsw02gke10000gkyw16xkpms_9u6b";
            break;
        case "www.bookmobile.klm.com":
            tC.internalvars.tc_dscid = "dcscayhhsuz5bdfycynyj8xcm_4q2r";
            break;
        case "shop.klm.com":
            tC.internalvars.tc_dscid = "dcsemjq7bvz5bdb5x1o540vuc_5l8u";
            break;
        case "testshop1.klm.com":
            tC.internalvars.tc_dscid = "dcskhhdbl1000043tf721gdjr_4d5b";
            break;
        case "testshop2.klm.com":
            tC.internalvars.tc_dscid = "dcskhhdbl1000043tf721gdjr_4d5b";
            break;
        case "testshop3.klm.com":
            tC.internalvars.tc_dscid = "dcskhhdbl1000043tf721gdjr_4d5b";
            break;
        case "testshop4.klm.com":
            tC.internalvars.tc_dscid = "dcskhhdbl1000043tf721gdjr_4d5b";
            break;
        case "testshop5.klm.com":
            tC.internalvars.tc_dscid = "dcskhhdbl1000043tf721gdjr_4d5b";
            break;
        case "testshop.klm.com":
            tC.internalvars.tc_dscid = "dcskhhdbl1000043tf721gdjr_4d5b";
            break;
        case "testwannagives1.klm.com":
            tC.internalvars.tc_dscid = "dcskhhdbl1000043tf721gdjr_4d5b";
            break;
        case "testwannagives.klm.com":
            tC.internalvars.tc_dscid = "dcskhhdbl1000043tf721gdjr_4d5b";
            break;
        case "testwannagives2.klm.com":
            tC.internalvars.tc_dscid = "dcskhhdbl1000043tf721gdjr_4d5b";
            break;
        case "werelddealweken.klm.com":
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e";
            break;
        case "worlddealweeks.klm.com":
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e";
            break;
        case "vakantie.klm.com":
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e";
            break;
        case "holiday.klm.com":
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e";
            break;
        case "packandgo.klm.com":
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e";
            break;
        case "ott.klm.com":
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e";
            break;
        case "onboard.klm.com ":
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e";
            break;
        case "onboard.local.klm.com":
            tC.internalvars.tc_dscid = "dcs4z9qji9dv0hgshpyukkh36_2r3j";
            break;
        case "onboard.ite1.klm.com":
            tC.internalvars.tc_dscid = "dcs4z9qji9dv0hgshpyukkh36_2r3j";
            break;
        case "onboard.ute1.klm.com":
            tC.internalvars.tc_dscid = "dcs4z9qji9dv0hgshpyukkh36_2r3j";
            break;
        case "onboard.ute2.klm.com":
            tC.internalvars.tc_dscid = "dcs4z9qji9dv0hgshpyukkh36_2r3j";
            break;
        case "onboard.ute3.klm.com":
            tC.internalvars.tc_dscid = "dcs4z9qji9dv0hgshpyukkh36_2r3j";
            break;
        case "onboard.airfrance.com":
            tC.internalvars.tc_dscid = "dcsb82wbr00000c5cqct20nkx_9u3w";
            break;
        case "onboard.local.airfrance.com":
            tC.internalvars.tc_dscid = "dcslekwvr10000stxfr3o9nkx_7c4f";
            break;
        case "onboard.ite1.airfrance.com":
            tC.internalvars.tc_dscid = "dcslekwvr10000stxfr3o9nkx_7c4f";
            break;
        case "onboard.ute1.airfrance.com":
            tC.internalvars.tc_dscid = "dcslekwvr10000stxfr3o9nkx_7c4f";
            break;
        case "onboard.ute2.airfrance.com":
            tC.internalvars.tc_dscid = "dcslekwvr10000stxfr3o9nkx_7c4f";
            break;
        case "onboard.ute3.airfrance.com ":
            tC.internalvars.tc_dscid = "dcslekwvr10000stxfr3o9nkx_7c4f";
            break;
        default:
            tC.internalvars.tc_dscid = "dcs8i7h6p00000om5mqog2xmv_9h5e";
            break;
    }

    /*END_VARIABLES_BLOCK*/

    /*DYNAMIC JS BLOCK 2*/

    /*END DYNAMIC JS BLOCK 2*/

    /*CUSTOM_JS_BLOCK2*/

    /*END_CUSTOM_JS_BLOCK2*/
    tC.inclusion_webtrends_min_1 = "var n=void 0;(function(i,j,k,l){function m(a){if(a){if(!a.forEach)a.forEach=function(a,c){for(var e=c||window,d=0,g=this.length;d<g;++d)a.call(e,this[d],d,this)};if(!a.filter)a.filter=function(a,c){for(var e=c||window,d=[],g=0,h=this.length;g<h;++g)a.call(e,this[g],g,this)&&d.push(this[g]);return d};if(!a.indexOf)a.indexOf=function(a){for(var c=0;c<this.length;++c)if(this[c]===a)return c;return-1}}return a}if(!i.Ba||!i.Ba.zb){var d={zb:!0,e:{},plugins:{},hb:0,f:{},addEventListener:i.addEventListener?function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}:function(a,b,c){a.attachEvent&&a.attachEvent(\"on\"+b,c,!1)},h:{},version:\"10.4.1\",i:{},pb:!1,t:25,$:function(){if(/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(k.userAgent)!=null)d.da=parseFloat(RegExp.$1);if(l.search)d.i=d.pa(l.search);if(i.webtrendsAsyncInit&&!i.webtrendsAsyncInit.hasRun)i.webtrendsAsyncInit(),i.webtrendsAsyncInit.hasRun=!0;d.addEventListener(i,\"load\",function(){d.pb=!0})},g:function(a){return Object.prototype.toString.call(a)===\"[object Function]\"},qb:function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&a[c]!=\"\"&&a[c]!=n&&typeof a[c]!=\"function\"&&b.push({k:c,v:a[c]});return b},extend:function(a,b,c){for(var e in b)if(c||typeof a[e]===\"undefined\")a[e]=b[e];return a},find:function(a){if(!d.wa)d.wa=d.nb();return d.wa(a)},nb:function(){var a=/MSIE (\\d+)/.exec(k.userAgent),a=a?a[1]:99;if(j.querySelectorAll&&j.body&&a>8){var b=j.body;return function(a){return b.querySelectorAll(a)}}if(i.jQuery)return i.jQuery.find;if(i.Sizzle)return i.Sizzle;if(i.YAHOO&&YAHOO.za&&YAHOO.za.Aa)return YAHOO.za.Aa.Nb;if(\"qwery\"in i)return qwery;i.YUI&&YUI().Pb(\"node\",function(a){return a.all});return j.querySelectorAll?(b=j.body)?function(a){return b.querySelectorAll(a)}:function(){return[]}:function(){return[]}},pa:function(a){var a=a.split(/[&?]/g),b={};try{for(var c=0,e=a.length;c<e;++c){var d=a[c].match(/^([^=]+)(?:=([\\s\\S]*))?/);if(d&&d[1]){var g=\"\";try{g=decodeURIComponent(d[1])}catch(h){try{g=unescape(d[1])}catch(j){g=d[1]}}var i=\"\";try{i=decodeURIComponent(d[2])}catch(k){try{i=unescape(d[2])}catch(l){i=d[2]}}b[g]?(b[g]=[b[g]],b[g].push(i)):b[g]=i}}}catch(m){}return b},aa:function(a,b,c){arguments.length<2&&(b=!0);var e=j.createElement(\"script\");e.type=\"text/javascript\";e.async=b;e.src=a;var d=j.getElementsByTagName(\"script\")[0];d.parentNode.insertBefore(e,d)},V:function(a,b){var c=a.target||a.srcElement;if(typeof b==\"string\"){var e=b,b={};b[e.toUpperCase()]=1}for(;c&&c.tagName&&!b[c.tagName.toUpperCase()];)c=c.parentElement||c.parentNode;return c},fa:function(a){return typeof encodeURIComponent==\"function\"?encodeURIComponent(a):escape(a)},sa:function(a){for(var b in d.e)d.e[b].ha(a);return!1},Q:function(a,b,c){b||(b=\"collect\");c?d.D(\"transform.\"+b,a,c):d.D(\"transform.\"+b,a);return this},D:function(a,b,c){function e(b,c){d.h[a][b.n]||(d.h[a][b.n]=m([]));d.h[a][b.n].push(c)}if(a&&b&&a!=\"\"&&d.g(b)){a===\"wtmouseup\"&&(a=\"wtmouse\");if(a===\"wtmouse\"&&!d.ta){var f=/MSIE (\\d+)/.exec(k.userAgent);d.addEventListener(j,(f?f[1]:99)>=8?\"mousedown\":\"mouseup\",function(b){if(!b)b=window.event;d.Pa(a,{event:b})});d.ta=!0}d.h[a]||(d.h[a]={});if(c)e(c,b);else for(var g in d.e)e(d.e[g],b)}},Pa:function(a,b){for(var c in d.e)d.fireEvent(a,d.e[c],b)},Ca:function(a,b,c,e){if(typeof b===\"function\")return b.onetime?(c.push(b),!0):(b(a,e),!1)},fireEvent:function(a,b,c){var e=m([]);if(d.h[a]&&d.h[a][b.n]){a=d.h[a][b.n];if(!a.length)return;for(var f=a.length-1;f>=0;f--)d.Ca(b,a[f],e,c)&&a.pop()}e.forEach(function(a){a(b,c)})},ca:function(a,b){var c=!1,e;for(e in d.e){var f=d.e[e];a in f.plugins&&(c=!0,f.ca(a,b))}c||b({Mb:!0})},T:function(a,b){for(var c=j.cookie.split(\"; \"),e=[],d=0,g=0,h=a.length,p=c.length,g=0;g<p;g++){var i=c[g];i.substring(0,h+1)==a+\"=\"&&(e[d++]=i)}c=e.length;if(c>0){d=0;if(c>1&&a==b){p=new Date(0);for(g=0;g<c;g++)i=new Date(parseInt(this.Wa(e[g],\"lv\"))),i>p&&(p.setTime(i.getTime()),d=g)}return unescape(e[d].substring(h+1))}else return null},Wa:function(a,b,c){a=a.split(c||\":\");for(c=0;c<a.length;c++){var e=a[c].split(\"=\");if(b==e[0])return e[1]}return null}},q=d.fireEvent,r=d.D;d.b=function(){this.na=i.RegExp?/dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)/i:\"\";this.va={};this.plugins=this.plugins={};this.d=this.WT={};this.j=this.DCS={};this.q=this.DCSext={};this.n=this.dcssID=\"dcsobj_\"+d.hb++;this.images=this.images=[];this.ma=this.errors=[];this.a=this.FPCConfig={};this.c=this.TPCConfig={};this.images=[];this.w=[];this.Eb=[];this.l=[];this.N=[];this.P=\"\";this.ba=this.p=0;this.X=this.oa=\"\";this.ta=!1;return this};d.b.prototype={$:function(a){function b(b,c){return a.hasOwnProperty(b)?a[b]:c}function c(a,b,c){return!a?c:a.hasOwnProperty(b)?a[b]:c}this.Gb=a;this.I=b(\"errorlogger\",function(){});this.gb=this.dcsid=a.dcsid;this.L=this.queue=b(\"queue\",[]);this.domain=this.domain=b(\"domain\",\"statse.webtrendslive.com\");this.Bb=this.timezone=b(\"timezone\",-8);this.enabled=this.enabled=b(\"enabled\",!0);this.Z=this.i18n=b(\"i18n\",!0);this.va=i.RegExp?this.Z?{\"%25\":/\\%/g,\"%26\":/\\&/g,\"%23\":/\\#/g}:{\"%09\":/\\t/g,\"%20\":/ /g,\"%23\":/\\#/g,\"%26\":/\\&/g,\"%2B\":/\\+/g,\"%3F\":/\\?/g,\"%5C\":/\\\\/g,\"%22\":/\\\"/g,\"%7F\":/\\x7F/g,\"%A0\":/\\xA0/g}:\"\";if(a.metanames)this.ra=m(a.metanames.toLowerCase().split(\",\"));i.webtrendsAsyncLoad&&typeof i.webtrendsAsyncLoad===\"function\"&&!b(\"privateFlag\",!1)&&d.D(\"onready\",window.webtrendsAsyncLoad,this);this.M=this.vtid=b(\"vtid\",n);this.ua=b(\"paidsearchparams\",\"gclid\");this.yb=this.splitvalue=b(\"splitvalue\",\"\");d.t=a.dcsdelay||d.t;this.ib=this.delayAll=b(\"delayAll\",!1);this.K=this.preserve=b(\"preserve\",!0);this.w=m(b(\"navigationtag\",\"div,table\").toLowerCase().split(\",\"));this.l=b(\"onsitedoms\",\"\");if(!d.g(this.l.test))this.l=m(this.l.toLowerCase().split(\",\")),this.l.forEach(function(a,b,c){c[b]=a.replace(/^\\s\*\/,\"\").replace(/\\s*$/,\"\")});this.N=m(b(\"downloadtypes\",\"xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip\").toLowerCase().split(\",\"));this.N.forEach(function(a,b,c){c[b]=a.replace(/^\\s\*\/,\"\").replace(/\\s*$/,\"\")});if(b(\"adimpressions\",!1))this.P=b(\"adsparam\",\"WT.ac\");this.a.enabled=this.FPCConfig.enabled=c(a.FPCConfig,\"enabled\",!0);this.a.domain=this.FPCConfig.domain=c(a.FPCConfig,\"domain\",b(\"fpcdom\",\"\"));this.a.name=this.FPCConfig.name=c(a.FPCConfig,\"name\",b(\"fpc\",\"WT_FPC\"));this.a.u=this.FPCConfig.expiry=c(a.FPCConfig,\"expires\",b(\"cookieexpires\",63113851500));this.a.u=this.a.u<63113851500?this.a.u:63113851500;this.a.kb=new Date(this.getTime()+this.a.u);this.a.wb=this.a.u===0;this.c.enabled=this.TPCConfig.enabled=c(a.TPCConfig,\"enabled\",!b(\"disablecookie\",!1));this.c.R=this.TPCConfig.cfgType=c(a.TPCConfig,\"cfgType\",!this.c.enabled?\"1\":\"\");if(a.cookieTypes)if(a.cookieTypes.toLowerCase()===\"none\")this.a.enabled=!1,this.c.enabled=!1,this.c.R=\"1\";else if(a.cookieTypes.toLowerCase()===\"firstpartyonly\")this.a.enabled=!0,this.c.enabled=!1,this.c.R=\"1\";else if(a.cookieTypes.toLowerCase()===\"all\")this.a.enabled=!0,this.c.enabled=!0,this.c.R=c(a.TPCConfig,\"cfgType\",\"\");this.Jb=this.fpc=this.a.name;this.Kb=this.fpcdom=this.a.domain;this.Ib=this.cookieExp=this.a.u;m(b(\"pageEvents\",[])).forEach(function(b){this.Db=a[b.toLowerCase()]=!0});b(\"offsite\",!1)&&this.Ma();b(\"download\",!1)&&this.Ka();b(\"anchor\",!1)&&this.Ja();b(\"javascript\",!1)&&this.La();b(\"rightclick\",!1)&&this.Na();b(\"privateFlag\",!1)||(d.e[this.n]=this);this.plugins=a.plugins||{};this.Fa();d.f[this.domain]||(d.f[this.domain]=\"\");!b(\"privateFlag\",!1)&&this.a.enabled&&this.Ya(this.n);this.F();return this},Fa:function(){for(var a in this.plugins){var b=this.plugins[a];if(!d.plugins[a]){d.plugins[a]=b;var c=b.src;d.g(c)?i.setTimeout(function(a){return function(){a()}}(c),1):d.aa(c,!1)}if(!b.async){var e=this;b.loaded=!1;this.p++;b.Qb&&this.ba++;b.timeout&&i.setTimeout(function(a){return function(){if(!a.loaded)a.Ab=!0,e.p--,e.F()}}(b),b.timeout)}}},Za:function(a){if(typeof a!=\"undefined\")!d.f[this.domain]&&a.gTempWtId&&(d.f[this.domain]=a.gTempWtId),this.X=a.gTempWtId,!d.f[this.domain]&&a.gWtId&&(d.f[this.domain]=a.gWtId),this.oa=a.gWtAccountRollup;this.p--;this.F()},Ya:function(a){return j.cookie.indexOf(this.a.name+\"=\")==-1&&j.cookie.indexOf(\"WTLOPTOUT=\")==-1&&this.c.enabled?(this.enabled&&(d.aa(\"\/\/\"+this.domain+\"/\"+this.gb+\"/wtid.js?callback=Webtrends.dcss.\"+a+\".dcsGetIdCallback\",!0),this.p++),!1):!0},ca:function(a,b){var c=this.plugins[a];if(c)d.g(b)&&(this.tb()?b(this,c):r(\"pluginsLoaded\",function(a,b,c){function d(){a(b,c)}d.onetime=!0;return d}(b,this,c),this)),c.loaded=!0,!c.async&&!c.Ab&&this.p--;this.F()},vb:function(){this.ba--;this.F()},tb:function(){return this.p<=0},F:function(){if(this.p<=0){if(!this.Ea)q(\"pluginsLoaded\",this),this.Ea=!0;this.ba<=0&&this.xb()}},xb:function(){if(!this.Ga)q(\"onready\",this),this.ob(),this.ub(),this.Ga=!0},ob:function(){for(var a=0;a<this.L.length;a++)this.ka(this.L[a]);this.L=[]},ub:function(){var a=this;this.L.push=function(b){a.ka(b)}},Q:function(a,b){d.Q(a,b,this)},r:function(a,b){var c=this,e=d.extend({domEvent:\"click\",callback:n,argsa:[],args:{},delayTime:n,transform:n,filter:n,actionElems:{A:1,INPUT:1},finish:n},b,!0);r(\"wtmouse\",function(b,g){c.Oa(c,a,d.extend(g,e,!0))},c);return this},xa:function(a,b,c,e){b.element=c;if(e===\"form\"||e===\"input\"||e===\"button\")b.domEvent=\"submit\";a.ea(b)},Oa:function(a,b,c){var e=d.find;if(e&&c.event&&c.actionElems){var f=d.V(c.event,c.actionElems),g=f?(f.tagName?f.tagName.toLowerCase():\"\"):\"\";if(b.toUpperCase()in c.actionElems&&b.toUpperCase()===g.toUpperCase())return this.xa(a,c,f,g);if((b=e(b))&&f&&b&&b.length)for(e=0;e<b.length;e++)if(b[e]===f){this.xa(a,c,f,g);break}}},W:function(a,b){var c=m(j.cookie.split(\"; \")).filter(function(b){return b.indexOf(a+\"=\")!=-1})[0];if(!c||c.length<a.length+1)return!1;m(c.split(a+\"=\")[1].split(\":\")).forEach(function(a){a=a.split(\"=\");b[a[0]]=a[1]});return!0},T:function(a){return d.T(a,this.a.name)},cb:function(a,b,c){var e=[],b=d.qb(b);m(b).forEach(function(a){e.push(a.k+\"=\"+a.v)});e=e.sort().join(\":\");j.cookie=a+\"=\"+e+c},Ta:function(a,b,c){a+=\"=\";a+=\"; expires=expires=Thu, 01 Jan 1970 00:00:01 GMT\";a+=\"; path=\"+b;a+=c?\";domain=\"+c:\"\";document.cookie=a},$a:function(a,b,c,d){var f={};return this.W(a,f)?b==f.id&&c==f.lv&&d==f.ss?0:3:2},Xa:function(){var a={};this.W(this.a.name,a);return a},Va:function(){if(j.cookie.indexOf(\"WTLOPTOUT=\")==-1)if(this.d.ce=!this.a.enabled&&!this.c.enabled?\"0\":this.a.enabled&&!this.c.enabled?\"1\":\"2\",this.a.enabled){var a=this.d,b=this.a.name,c=new Date,e=c.getTimezoneOffset()*6E4+this.Bb*36E5;c.setTime(c.getTime()+e);var f=new Date(c.getTime());a.co_f=a.vtid=a.vtvs=a.vt_f=a.vt_f_a=a.vt_f_s=a.vt_f_d=a.vt_f_tlh=a.vt_f_tlv=\"\";var g={};if(this.W(b,g)){var h=g.id,p=parseInt(g.lv),i=parseInt(g.ss);if(h==null||h==\"null\"||isNaN(p)||isNaN(i))return;a.co_f=h;h=new Date(p);a.vt_f_tlh=Math.floor((h.getTime()-e)/1E3);f.setTime(i);if(c.getTime()>h.getTime()+18E5||c.getTime()>f.getTime()+288E5)a.vt_f_tlv=Math.floor((f.getTime()-e)/1E3),f.setTime(c.getTime()),a.vt_f_s=\"1\";if(c.getDate()!=h.getDate()||c.getMonth()!=h.getMonth()||c.getFullYear()!=h.getFullYear())a.vt_f_d=\"1\"}else{if(this.X.length)a.co_f=d.f[this.domain].length?d.f[this.domain]:this.X,a.vt_f=\"1\";else if(d.f[this.domain].length)a.co_f=d.f[this.domain];else{a.co_f=\"2\";i=c.getTime().toString();for(h=2;h<=32-i.length;h++)a.co_f+=Math.floor(Math.random()*16).toString(16);a.co_f+=i;a.vt_f=\"1\"}this.oa.length==0&&(a.vt_f_a=\"1\");a.vt_f_s=a.vt_f_d=\"1\";a.vt_f_tlh=a.vt_f_tlv=\"0\"}a.co_f=escape(a.co_f);a.vtid=typeof this.M==\"undefined\"?a.co_f:this.M||\"\";a.vtvs=(f.getTime()-e).toString();e=(this.a.wb?\"\":\"; expires=\"+this.a.kb.toGMTString())+\"; path=/\"+(this.a.domain!=\"\"?\"; domain=\"+this.a.domain:\"\");c=c.getTime().toString();f=f.getTime().toString();g.id=a.co_f;g.lv=c;g.ss=f;this.cb(b,g,e);b=this.$a(b,a.co_f,c,f);if(b!=0)a.co_f=a.vtvs=a.vt_f_s=a.vt_f_d=a.vt_f_tlh=a.vt_f_tlv=\"\",typeof this.M==\"undefined\"&&(a.vtid=\"\"),a.vt_f=a.vt_f_a=b}else this.d.vtid=this.M?this.M:\"\",this.Ta(this.a.name,\"/\",this.a.domain)},Cb:function(){try{var a;arguments&&arguments.length>1?a={argsa:Array.prototype.slice.call(arguments)}:arguments.length===1&&(a=arguments[0]);typeof a===\"undefined\"&&(a={element:n,event:n,Fb:[]});typeof a.argsa===\"undefined\"&&(a.argsa=[]);this.la(\"collect\",a);return this}catch(b){this.ma.push(b),this.I(b)}},ha:function(a){a&&a.length>1&&(a={argsa:Array.prototype.slice.call(arguments)});this.ea(a)},ea:function(a){try{typeof a===\"undefined\"&&(a={});this.la(\"multitrack\",a);if(a.delayTime){var b=Number(a.delayTime);this.ya(isNaN(b)?d.t:b)}else this.ib&&this.ya(d.t);return!1}catch(c){this.ma.push(c),this.I(c)}},Ra:function(){this.j={};this.d={};this.q={};arguments.length%2==0&&this.U(arguments)},U:function(a){if(a)for(var b=0,c=a.length;b<c;b+=2)a[b].indexOf(\"WT.\")==0?this.d[a[b].substring(3)]=a[b+1]:a[b].indexOf(\"DCS.\")==0?this.j[a[b].substring(4)]=a[b+1]:a[b].indexOf(\"DCSext.\")==0&&(this.q[a[b].substring(7)]=a[b+1])},eb:function(a){var b,c;if(this.K){this.C=[];for(var d=0,f=a.length;d<f;d+=2)c=a[d],c.indexOf(\"WT.\")==0?(b=c.substring(3),this.C.push(c,this.d[b]||\"\")):c.indexOf(\"DCS.\")==0?(b=c.substring(4),this.C.push(c,this.j[b]||\"\")):c.indexOf(\"DCSext.\")==0&&(b=c.substring(7),this.C.push(c,this.q[b]||\"\"))}},bb:function(){if(this.K)this.U(this.C),this.C=[]},fb:function(){var a=new Date,b=this,c=this.d,e=this.j;c.tz=parseInt(a.getTimezoneOffset()/60*-1)||\"0\";c.bh=a.getHours()||\"0\";c.ul=k.language||k.userLanguage;if(typeof screen==\"object\")c.cd=k.appName==\"Netscape\"?screen.pixelDepth:screen.colorDepth,c.sr=screen.width+\"x\"+screen.height;typeof k.javaEnabled()==\"boolean\"&&(c.jo=k.javaEnabled()?\"Yes\":\"No\");j.title&&(c.ti=i.RegExp?j.title.replace(RegExp(\"^\"+l.protocol+\"\/\/\"+l.hostname+\"\\\\s-\\\\s\"),\"\"):j.title);c.js=\"Yes\";c.jv=function(){var a=navigator.userAgent.toLowerCase(),b=parseInt(navigator.appVersion),c=a.indexOf(\"mac\")!=-1,d=a.indexOf(\"firefox\")!=-1,e=a.indexOf(\"firefox/0.\")!=-1,f=a.indexOf(\"firefox/1.0\")!=-1,g=a.indexOf(\"firefox/1.5\")!=-1,h=a.indexOf(\"firefox/2.0\")!=-1,j=!d&&a.indexOf(\"mozilla\")!=-1&&a.indexOf(\"compatible\")==-1,i=a.indexOf(\"msie\")!=-1&&a.indexOf(\"opera\")==-1,k=i&&b==4&&a.indexOf(\"msie 4\")!=-1,i=i&&!k,l=a.indexOf(\"opera 5\")!=-1||a.indexOf(\"opera/5\")!=-1,m=a.indexOf(\"opera 6\")!=-1||a.indexOf(\"opera/6\")!=-1,a=a.indexOf(\"opera\")!=-1&&!l&&!m,o=\"1.1\";d&&!e&&!f&!g&!h?o=\"1.8\":h?o=\"1.7\":g?o=\"1.6\":e||f||j&&b>=5||a?o=\"1.5\":c&&i||m?o=\"1.4\":i||j&&b==4||l?o=\"1.3\":k&&(o=\"1.2\");return o}();c.ct=\"unknown\";if(j.body&&j.body.addBehavior)try{j.body.addBehavior(\"#default#clientCaps\"),c.ct=j.body.Hb||\"unknown\",j.body.addBehavior(\"#default#homePage\"),c.hp=j.body.Lb(location.href)?\"1\":\"0\"}catch(f){b.I(f)}var g=0,h=0;if(typeof i.innerWidth==\"number\")g=i.innerWidth,h=i.innerHeight;else if(j.documentElement&&(j.documentElement.clientWidth||j.documentElement.clientHeight))g=j.documentElement.clientWidth,h=j.documentElement.clientHeight;else if(j.body&&(j.body.clientWidth||j.body.clientHeight))g=j.body.clientWidth,h=j.body.clientHeight;c.bs=g+\"x\"+h;c.fv=function(){var a;if(i.ActiveXObject)for(a=15;a>0;a--)try{return new ActiveXObject(\"ShockwaveFlash.ShockwaveFlash.\"+a),a+\".0\"}catch(c){b.I(c)}else if(k.plugins&&k.plugins.length)for(a=0;a<k.plugins.length;a++)if(k.plugins[a].name.indexOf(\"Shockwave Flash\")!=-1)return k.plugins[a].description.split(\" \")[2];return\"Not enabled\"}();c.slv=function(){var a=\"Not enabled\";try{k.userAgent.indexOf(\"MSIE\")!=-1?new ActiveXObject(\"AgControl.AgControl\")&&(a=\"Unknown\"):k.plugins[\"Silverlight Plug-In\"]&&(a=\"Unknown\")}catch(c){b.I(c)}if(a!=\"Not enabled\"){var d,e,f;if(typeof Silverlight==\"object\"&&typeof Silverlight.qa==\"function\"){for(d=9;d>0;d--){e=d;if(Silverlight.qa(e+\".0\"))break;if(a==e)break}for(d=9;d>=0;d--){f=e+\".\"+d;if(Silverlight.qa(f)){a=f;break}if(a==f)break}}}return a}();this.Z&&(c.le=typeof j.defaultCharset==\"string\"?j.defaultCharset:typeof j.characterSet==\"string\"?j.characterSet:\"unknown\");c.tv=d.version;c.sp=this.yb;c.dl=\"0\";if(d.i&&d.i.lb)c.fb_ref=d.i.lb;if(d.i&&d.i.mb)c.fb_source=d.i.mb;c.ssl=l.protocol.indexOf(\"https:\")==0?\"1\":\"0\";e.dcsdat=a.getTime();e.dcssip=l.hostname;e.dcsuri=l.pathname;c.es=e.dcssip+e.dcsuri;if(l.search)e.dcsqry=l.search;if(e.dcsqry){a=e.dcsqry.toLowerCase();g=this.ua.length?this.ua.toLowerCase().split(\",\"):[];for(h=0;h<g.length;h++)if(a.indexOf(g[h]+\"=\")!=-1){c.srch=\"1\";break}}if(j.referrer!=\"\"&&j.referrer!=\"-\"&&!(k.appName==\"Microsoft Internet Explorer\"&&parseInt(k.appVersion)<4))e.dcsref=j.referrer;e.dcscfg=this.c.R},Ua:function(a,b){if(b!=\"\"){if(a===null||a===n)return\"\";var a=a.toString(),c;for(c in b)b[c]instanceof RegExp&&(a=a.replace(b[c],c));return a}else return escape(a)},S:function(a,b){if(this.Z&&this.na!=\"\"&&!this.na.test(a))if(a==\"dcsqry\"){for(var c=\"\",e=b.substring(1).split(\"&\"),f=0;f<e.length;f++){var g=e[f],h=g.indexOf(\"=\");if(h!=-1){var i=g.substring(0,h),g=g.substring(h+1);f!=0&&(c+=\"&\");c+=i+\"=\"+d.fa(g)}}b=b.substring(0,1)+c}else b=d.fa(b);return\"&\"+a+\"=\"+this.Ua(b,this.va)},Sa:function(a,b){if(j.images){var c=new Image;this.images.push(c);if(arguments.length===2&&b&&d.g(b.callback)){var e=!1,f=b.callback,g=this;c.onload=function(){if(!e)return e=!0,f(g,b),!0};i.setTimeout(function(){if(!e)return e=!0,f(g,b),!0},d.t)}c.src=a}},ab:function(){var a;j.documentElement?a=j.getElementsByTagName(\"meta\"):j.all&&(a=j.all.Ob(\"meta\"));if(typeof a!=\"undefined\")for(var b=a.length,c=0;c<b;c++){var d=a.item(c).name,f=a.item(c).content;a.item(c);d.length>0&&(d=d.toLowerCase(),d.toUpperCase().indexOf(\"WT.\")==0?this.d[d.substring(3)]=f:d.toUpperCase().indexOf(\"DCSEXT.\")==0?this.q[d.substring(7)]=f:d.toUpperCase().indexOf(\"DCS.\")==0?this.j[d.substring(4)]=f:this.ra&&this.ra.indexOf(d)!=-1&&(this.q[\"meta_\"+d]=f))}},ia:function(a){if(j.cookie.indexOf(\"WTLOPTOUT=\")==-1){var b=this.d,c=this.j,e=this.q,f=this.i18n,g=\"http\"+(l.protocol.indexOf(\"https:\")==0?\"s\":\"\")+\":\/\/\"+this.domain+(this.dcsid==\"\"?\"\":\"/\"+this.dcsid)+\"/dcs.gif?\";f&&(b.dep=\"\");for(var h in c)c[h]!=\"\"&&c[h]!=n&&typeof c[h]!=\"function\"&&(g+=this.S(h,c[h]));for(h in b)b[h]!=\"\"&&b[h]!=n&&typeof b[h]!=\"function\"&&(g+=this.S(\"WT.\"+h,b[h]));for(h in e)if(e[h]!=\"\"&&e[h]!=n&&typeof e[h]!=\"function\")f&&(b.dep=b.dep.length==0?h:b.dep+\";\"+h),g+=this.S(h,e[h]);f&&b.dep.length>0&&(g+=this.S(\"WT.dep\",b.dep));d.da&&d.da<9&&g.length>2048&&(g=g.substring(0,2040)+\"&WT.tu=1\");this.Sa(g,a);this.d.ad=\"\"}},rb:function(){this.fb();this.ab();this.P&&this.P.length>0&&this.Qa();this.sb=!0},getTime:function(){return(new Date).getTime()},jb:0,ya:function(a){for(var b=this.getTime();this.getTime()-\n" + "b<a;)this.jb++},la:function(a,b){a||(a=\"collect\");this.L.push({action:a,message:b})},ka:function(a){var b=\"action_\"+a.action,c=a.message;this.sb||this.rb();c.event&&!c.element&&(c.element=d.V(c.event,{A:1}));if(!d.g(c.filter)||!c.filter(this,c)){if(c.args){c.argsa=c.argsa||[];for(var e in c.args)c.argsa.push(e,c.args[e])}c.element&&c.element.getAttribute&&c.element.getAttribute(\"data-wtmt\")&&(c.argsa=c.argsa.concat(c.element.getAttribute(\"data-wtmt\").split(\",\")));q(\"transform.\"+a.action,this,c);q(\"transform.all\",this,c);c.transform&&d.g(c.transform)&&c.transform(this,c);if(this.enabled){this.Va();if(d.g(this[b]))this[b](c);q(\"finish.\"+a.action,this,c);q(\"finish.all\",this,c);c.finish&&d.g(c.finish)&&c.finish(this,c)}}},Ia:function(a){var b=a&&a.argsa&&a.argsa.length%2==0;b&&(this.eb(a.argsa),this.U(a.argsa));this.j.dcsdat=this.getTime();this.ia(a);b&&this.bb()},Ha:function(a){a&&a.argsa&&a.argsa.length%2==0&&this.U(a.argsa);this.ia(a)},J:function(a){var b=document.createElement(\"a\");b.href=a.href;a={};a.H=b.hostname?b.hostname.split(\":\")[0]:window.location.hostname;a.o=b.pathname?b.pathname.indexOf(\"/\")!=0?\"/\"+b.pathname:b.pathname:\"/\";a.m=b.search?b.search.substring(b.search.indexOf(\"?\")+1,b.search.length):\"\";a.G=i.location;return a},ga:function(a,b){if(a.length>0){a=a.toLowerCase();if(a==window.location.hostname.toLowerCase())return!0;if(d.g(b.test))return b.test(a);else if(b.length>0)for(var c=b.length,e=0;e<c;e++)if(a==b[e])return!0}return!1},ja:function(a,b){for(var c=a.toLowerCase().substring(a.lastIndexOf(\".\")+\n" + "1,a.length),d=b.length,f=0;f<d;f++)if(c==b[f])return!0;return!1},s:function(a,b){var c=\"\",e=\"\",f=b.length,g,h;for(g=0;g<f;g++)if(h=b[g],h.length&&(e=d.V(a,h),c=e.getAttribute&&e.getAttribute(\"id\")?e.getAttribute(\"id\"):\"\",e=e.className||\"\",c.length||e.length))break;return c.length?c:e},Y:function(a,b,c){var e=j.all?b.innerText:b.text,a=d.V(a,{IMG:1}),f;if(a&&a.alt)f=a.alt;else if(e)f=e;else if(b.innerHTML)f=b.innerHTML;return f?f:c},B:function(){if(!this.K)this.Da=this.K=!0},z:function(){this.Da=this.K=!1},O:function(a){var b=!1;if(!a)a=window.event;a.which?b=a.which==3:a.button&&(b=a.button==2);return b},Ma:function(){this.r(\"a\",{filter:function(a,b){var c=b.element||{},d=b.event||{};return c.hostname&&!a.ga(c.hostname,a.l)&&!a.O(d)?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.B(b);d=a.J(d);b.argsa.push(\"DCS.dcssip\",d.H,\"DCS.dcsuri\",d.o,\"DCS.dcsqry\",d.m,\"DCS.dcsref\",d.G,\"WT.ti\",\"Offsite:\"+d.H+d.o+(d.m.length?\"?\"+d.m:\"\"),\"WT.dl\",\"24\",\"WT.nv\",a.s(c,a.w))},finish:function(a){a.z()}})},Ja:function(){this.r(\"a\",{filter:function(a,b){var c=b.element||{},d=b.event||{};return a.ga(c.hostname,a.l)&&c.hash&&c.hash!=\"\"&&c.hash!=\"#\"&&!a.O(d)?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.B(b);d=a.J(d);b.argsa.push(\"DCS.dcssip\",d.H,\"DCS.dcsuri\",escape(d.o+b.element.hash),\"DCS.dcsqry\",d.m,\"DCS.dcsref\",d.G,\"WT.ti\",escape(\"Anchor:\"+b.element.hash),\"WT.nv\",a.s(c,a.w),\"WT.dl\",\"21\")},finish:function(a){a.z()}})},Ka:function(){this.r(\"a\",{filter:function(a,b){var c=b.event||{};return a.ja((b.element||{}).pathname,a.N)&&!a.O(c)?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.B(b);var f=a.J(d),d=a.Y(c,d,f.o);b.argsa.push(\"DCS.dcssip\",f.H,\"DCS.dcsuri\",f.o,\"DCS.dcsqry\",f.m,\"DCS.dcsref\",f.G,\"WT.ti\",\"Download:\"+d,\"WT.nv\",a.s(c,a.w),\"WT.dl\",\"20\")},finish:function(a){a.z()}})},Na:function(){this.r(\"a\",{filter:function(a,b){var c=b.event||{};return a.ja((b.element||{}).pathname,a.N)&&a.O(c)?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.B(b);var f=a.J(d),d=a.Y(c,d,f.o);b.argsa.push(\"DCS.dcssip\",f.H,\"DCS.dcsuri\",f.o,\"DCS.dcsqry\",f.m,\"DCS.dcsref\",f.G,\"WT.ti\",\"RightClick:\"+d,\"WT.nv\",a.s(c,a.w),\"WT.dl\",\"25\")},finish:function(a){a.z()}})},La:function(){this.r(\"a\",{filter:function(a,b){var c=b.element||{};return c.href&&c.protocol&&c.protocol.toLowerCase()===\"javascript:\"?!1:!0},transform:function(a,b){var c=b.event||{},d=b.element||{};a.B(b);var f=a.J(d);b.argsa.push(\"DCS.dcssip\",i.location.hostname,\"DCS.dcsuri\",d.href,\"DCS.dcsqry\",f.m,\"DCS.dcsref\",f.G,\"WT.ti\",\"JavaScript:\"+(d.innerHTML?d.innerHTML:\"\"),\"WT.dl\",\"22\",\"WT.nv\",a.s(c,a.w))},finish:function(a){a.z()}})},Qa:function(){if(j.links){var a=this.P+\"=\",b=a.length,a=RegExp(a,\"i\"),c=j.links.length,d=end=-1,f=urlp=value=\"\",g,f=j.URL+\"\",d=f.search(a);d!=-1&&(end=f.indexOf(\"&\",d),urlp=f.substring(d,end!=-1?end:f.length),g=RegExp(urlp+\"(&|#)\",\"i\"));for(var h=0;h<c;h++)if(j.links[h].href&&(f=j.links[h].href+\"\",urlp.length>0&&(f=f.replace(g,\"$1\")),d=f.search(a),d!=-1))d+=b,end=f.indexOf(\"&\",d),value=f.substring(d,end!=-1?end:f.length),this.d.ad=this.d.ad?this.d.ad+\";\"+value:value}}};d.b.prototype.action_multitrack=d.b.prototype.Ia;d.b.prototype.action_collect=d.b.prototype.Ha;i.dcsMultiTrack=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];d.sa({argsa:a})};i.Webtrends=d;i.WebTrends=d;d.multiTrack=d.sa;d.dcs=d.b;d.dcss=d.e;d.addTransform=d.Q;d.bindEvent=d.D;d.getQryParams=d.pa;d.qryparams=d.i;d.dcsdelay=d.t;d.find=d.find;d.loadJS=d.aa;d.registerPlugin=d.ca;d.registerPluginCallback=d.vb;d.dcsGetCookie=d.T;d.b.prototype.init=d.b.prototype.$;d.b.prototype.dcsMultiTrack=d.b.prototype.ha;d.b.prototype.track=d.b.prototype.Cb;d.b.prototype.addSelector=d.b.prototype.r;d.b.prototype.dcsGetIdCallback=d.b.prototype.Za;d.b.prototype.dcsCleanUp=d.b.prototype.Ra;d.b.prototype.dcsGetFPC=d.b.prototype.Xa;d.b.prototype.addTransform=d.b.prototype.Q;d.b.prototype.dcsGetCookie=d.b.prototype.T;d.b.prototype.dcsNavigation=d.b.prototype.s;d.b.prototype.getTTL=d.b.prototype.Y;d.$()}})(window,window.document,window.navigator,window.location);";
}

//----------------------------------------------------

//----

if (tC.getCookie('tc_mode_test') == 1) {
    (function() {
        var tc_testmodescriptexec = document.createElement('script');
        tc_testmodescriptexec.type = 'text/javascript';
        tc_testmodescriptexec.src = '//manager.tagcommander.com/utils/test_mode_include.php?id=1&site=878&type=exec&rand=' + Math.random() + '&version=16.18';
        (document.getElementsByTagName('body')[0] || document.getElementsByTagName('head')[0] || document.getElementsByTagName('script')[0].parentNode).appendChild(tc_testmodescriptexec);
    })();
    (function() {
        setTimeout(function() {
            if (typeof top.tc_count !== 'undefined') {
                top.tc_count++;
            } else {
                top.tc_count = 1;
            }
            var tc_newscript = document.createElement('script');
            tc_newscript.type = 'text/javascript';
            tc_newscript.src = '//manager.tagcommander.com/utils/livetest/bookmarklet.php?r=' + Math.random() + '&nb=' + top.tc_count + '&container=878!1&version=16.18';
            (document.getElementsByTagName('body')[0] || document.getElementsByTagName('head')[0] || document.getElementsByTagName('script')[0].parentNode).appendChild(tc_newscript);
        }, 1000);
    })();
} else {
    if (tC.dedup.ValidRules('1')) {
        tC.launchTag('1', 'WT Basic Tags', '127', '878', '1');
        tc_wt_mapping.ti = tc_vars["ti"];
        tc_wt_mapping.dnt = tc_vars["dnt"];
        tc_wt_mapping.z_application = (tc_vars["application"]) ? tc_vars["application"] : tc_vars["z_application"];
        tc_wt_mapping.cg_n = tc_vars["cg_n"];
        tc_wt_mapping.cg_s = tc_vars["cg_s"];
        tc_wt_mapping.z_host = (tc_vars["host"]) ? tc_vars["host"] : tc_vars["z_host"];
        tc_wt_mapping.z_country = (tc_vars["country"]) ? tc_vars["country"] : tc_vars["z_country"];
        tc_wt_mapping.z_language = (tc_vars["language"]) ? tc_vars["language"] : tc_vars["z_language"];
        tc_wt_mapping.z_pos = (tc_vars["country"]) ? tc_vars["country"] : tc_vars["z_country"];
        tc_wt_mapping.datasourceid = tc_vars["datasourceid"];
        tc_wt_mapping.z_tc_version = tC.id_container + "_" + tC.containerVersion;
    }
    if (tC.dedup.ValidRules('5')) {
        tC.launchTag('5', 'Webtrends Extra Values', '127', '878', '1');
        tc_wt_mapping.z_error_severity = tc_vars["error_severity"];
        tc_wt_mapping.z_error_errordescription = tc_vars["error_errordescription"];
        tc_wt_mapping.z_error_errorcode = tc_vars["error_errorcode"];
        tc_wt_mapping.tx_u = tc_vars["tx_u"];
        tc_wt_mapping.tx_e = tc_vars["tx_e"];
        tc_wt_mapping.si_x = tc_vars["si_x"];
        tc_wt_mapping.si_n = tc_vars["si_n"];
        tc_wt_mapping.si_cs = tc_vars["si_cs"];
        tc_wt_mapping.z_shipping_costs = (tc_vars["shipping_costs"]) ? tc_vars["shipping_costs"] : tc_vars["z_ship_costs"];
        tc_wt_mapping.tx_s = tc_vars["product_prices"];
        tc_wt_mapping.pn_sku = tc_vars["product_ids"];
        tc_wt_mapping.tx_i = tc_vars["tx_i"];
        tc_wt_mapping.z_app_version = (tc_vars["app_version"]) ? tc_vars["app_version"] : tc_vars["z_app_version"];
        tc_wt_mapping.z_payment_status = tc_vars["payment_status"];
        tc_wt_mapping.z_payment_status_methode = tc_vars["payment_method_status"];
        tc_wt_mapping.z_payment_method = tc_vars["payment_method"];
        tc_wt_mapping.z_flight_nr = tc_vars["flight_nr"];
        tc_wt_mapping.z_destination = tc_vars["destination"] ? (tc_vars["destination"]) : tc_vars["z_destination"];
        tc_wt_mapping.z_day_before_flight = tc_vars["day_before_flight"];
        tc_wt_mapping.z_currency = tc_vars["currency"];
        tc_wt_mapping.z_booking_year = tc_vars["booking_year"];
        tc_wt_mapping.z_booking_time = tc_vars["booking_time"];
        tc_wt_mapping.z_booking_month = tc_vars["booking_month"];
        tc_wt_mapping.z_booking_day = tc_vars["booking_day"];
        tc_wt_mapping.z_departure_date = tc_vars["departure_date"];
        tc_wt_mapping.z_departure_day = tc_vars["departure_day"];
        tc_wt_mapping.z_departure_month = tc_vars["departure_month"];
        tc_wt_mapping.z_departure_year = tc_vars["departure_year"];
        tc_wt_mapping.z_origin = (tc_vars["origin"]) ? tc_vars["origin"] : tc_vars["z_origin"];
        tc_wt_mapping.z_event = (tc_vars["event"]) ? tc_vars["event"] : tc_vars["z_event"];
        tc_wt_mapping.z_event_place = (tc_vars["event_place"]) ? tc_vars["event_place"] : tc_vars["z_eventplace"];
        tc_wt_mapping.z_event_type = (tc_vars["event_type"]) ? tc_vars["event_type"] : tc_vars["z_eventtype"];
        tc_wt_mapping.z_event_value = (tc_vars["event_value"]) ? tc_vars["event_value"] : tc_vars["z_eventvalue"];
        tc_wt_mapping.pn_gr = tc_vars["product_group"];
        tc_wt_mapping.pn_sc = tc_vars["product_subgroup"];
        tc_wt_mapping.z_upgradeyourself_eligable = tc_vars["upgradeyourself_eligable"];
        tc_wt_mapping.z_pnr_number = tc_vars["PNR_number"];
        tc_wt_mapping.tx_it = tc_vars["tx_it"];
        tc_wt_mapping.tx_id = tc_vars["tx_id"];
        tc_wt_mapping.seg_3 = tc_vars["seg_3"];
        tc_wt_mapping.cg_s1 = tc_vars["cg_s1"];
        tc_wt_mapping.cg_s2 = tc_vars["cg_s2"];
        tc_wt_mapping.z_nb_adults = (tc_vars["nb_adults"]) ? tc_vars["nb_adults"] : tc_vars["z_nb_adults"];
        tc_wt_mapping.z_nb_children = (tc_vars["nb_children"]) ? tc_vars["nb_children"] : tc_vars["z_nb_children"];
        tc_wt_mapping.z_nb_infants = (tc_vars["nb_infants"]) ? tc_vars["nb_infants"] : tc_vars["z_nb_infants"];
        tc_wt_mapping.z_package_order = (tc_vars["package_order_number"]) ? tc_vars["package_order_number"] : tc_vars["z_package_order"];
        tc_wt_mapping.z_nb_passengers = (tc_vars["passenger"]) ? tc_vars["passenger"] : tc_vars["z_nb_passengers"];
        tc_wt_mapping.z_pos = (tc_vars["pos"]) ? tc_vars["pos"] : tc_vars["z_pos"];
        tc_wt_mapping.z_return_date = (tc_vars["return_date"]) ? tc_vars["return_date"] : tc_vars["z_return_date"];
        tc_wt_mapping.si_c = tc_vars["si_cs"];
        tc_wt_mapping.z_stay_duration = (tc_vars["stay_duration"]) ? tc_vars["stay_duration"] : tc_vars["z_stay_duration"];
        tc_wt_mapping.tx_s = tc_vars["tx_s"];
        tc_wt_mapping.z_widget = tc_vars["z_widget"];
        tc_wt_mapping.z_passenger = tc_vars["z_passenger"];
        tc_wt_mapping.z_cabin_code = tc_vars["z_cabin_code"];
        tc_wt_mapping.z_trip_type = tc_vars["z_trip_type"];
        tc_wt_mapping.z_fare_basis = tc_vars["z_fare_basis"];
        tc_wt_mapping.z_tax = tc_vars["z_tax"];
        tc_wt_mapping.z_booking_fee = tc_vars["z_booking_fee"];
        tc_wt_mapping.z_outbound_prices = tc_vars["z_outbound_prices"];
        tc_wt_mapping.z_outbound_selected = tc_vars["z_outbound_selected"];
        tc_wt_mapping.z_outbound_journey_durations = tc_vars["z_outbound_journey_durations"];
        tc_wt_mapping.z_outbound_departure_times = tc_vars["z_outbound_departure_times"];
        tc_wt_mapping.z_outbound_number_of_stops = tc_vars["z_outbound_number_of_stops"];
        tc_wt_mapping.z_outbound_subclass = tc_vars["z_outbound_subclass"];
        tc_wt_mapping.z_outbound_marketing_carrier_flight_nr = tc_vars["z_outbound_marketing_carrier_flight_nr"];
        tc_wt_mapping.z_inbound_prices = tc_vars["z_inbound_prices"];
        tc_wt_mapping.z_inbound_selected = tc_vars["z_inbound_selected"];
        tc_wt_mapping.z_inbound_journey_durations = tc_vars["z_inbound_journey_durations"];
        tc_wt_mapping.z_inbound_departure_times = tc_vars["z_inbound_departure_times"];
        tc_wt_mapping.z_inbound_number_of_stops = tc_vars["z_inbound_number_of_stops"];
        tc_wt_mapping.z_inbound_subclass = tc_vars["z_inbound_subclass"];
        tc_wt_mapping.z_inbound_marketing_carrier_flight_nr = tc_vars["z_inbound_marketing_carrier_flight_nr"];
        tc_wt_mapping.z_tail_nr = tc_vars["tail_nr"] ? tc_vars["tail_nr"] : tc_vars["z_tail_nr"];
        tc_wt_mapping.identification_type = tc_vars["identification_type"];
        tc_wt_mapping.eticket = tc_vars["eticket"];
        tc_wt_mapping.pnr = tc_vars["pnr"];
        tc_wt_mapping.ffp_tier_level = tc_vars["ffp_tier_level"];
        tc_wt_mapping.login = tc_vars["login"];
        tc_wt_mapping.voucher_code = tc_vars["voucher_code"];
    }
    if (tC.dedup.ValidRules('3')) {
        tC.launchTag('3', 'Webtrends - main tag', '26', '878', '1');
        var datasourceid = tc_vars["datasourceid"];
        window.webtrendsAsyncInit = function() {
            var dcs = new Webtrends.dcs().init({
                dcsid: (datasourceid && (datasourceid !== '')) ? datasourceid : tC.internalvars.tc_dscid,
                domain: "statse.webtrendslive.com",
                timezone: 1,
                i18n: true,
                download: false,
                downloadtypes: "xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip",
                anchor: false,
                javascript: false,
                fpcdom: tC.internalvars.maindomain,
                plugins: {}
            });
            Webtrends.addTransform(function(dcsObject, _tag) {
                _tag.argsa.push("DCS.dcsuri", tC.internalvars.pathname)
            }, "all", dcs);
            dcs.track({
                transform: function(_tag, options) {
                    for (var tc_wt_key in tc_wt_mapping) {
                        _tag.WT[tc_wt_key] = tc_wt_mapping[tc_wt_key];
                    }
                }
            });
        };
        (function() {
            eval(tC.inclusion_webtrends_min_1);
        }());
    }
    if (tC.dedup.ValidRules('9')) {
        tC.launchTag('9', 'AMS V3 - Click + Site Tracking', '1099', '878', '1');
        if (typeof tC.ams !== "object") {
            tC.ams = [];
        }
        tC.onDomReady(function() {
            tC.ams.page_name = tc_vars["ti"];
            tC.ams.page_type = tc_vars["cg_s"];
            tC.ams.channel = tC.internalvars.WTMCIDChannel;
            tC.ams.source = tC.internalvars.WTMCIDPartner;
            tC.ams.campaign = tC.internalvars.WTMCIDCmpName;
            tC.ams.medium = tC.getParamURL('WT.srch');
            tC.ams.dns = 'klm.commander1.com';
            tC.ams.sbrand = [];
            tC.ams.sbrand[0] = 'klm';
            tC.ams.sbrand[1] = 'mkl';
            tC.ams.sbrand[2] = 'kml';
            tC.ams.sbrand[3] = '';
            tC.ams.id_site = '395';
            tC.ams.scriptElt1 = document.createElement("script");
            tC.ams.additional_params = '&lcl=' + tC.internalvars.WTMCIDLocalisation + '&ctry=' + tC.internalvars.WTMCIDCountry + '&prtn_pub=' + tC.internalvars.WTMCIDPartner + '&mktg_prg=' + tC.internalvars.WTMCIDMarketingProgram + '&oth=' + tC.internalvars.WTMCIDOther + '&off=' + tC.internalvars.WTMCIDOffer;
            tC.ams.scriptElt1.id = "tc_script__1";
            tC.ams.scriptElt1.src = "//cdn.tagcommander.com/ams/ams_klm.js";
            tC.ams.scriptElt1.async = true;
            tC.ams.scriptElt1.defer = 'defer';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tC.ams.scriptElt1, null);
        });
    }
    if (tC.dedup.ValidRules('41')) {
        tC.launchTag('41', 'Usabilla', '72', '878', '1');
        (function() {
            if (((window.top.location).toString().toLowerCase().indexOf(('shop.klm.com/nl_en').toLowerCase()) != -1) || ((window.top.location).toString().toLowerCase().indexOf(('shop.klm.com/nl_nl').toLowerCase()) != -1) || ((window.top.location).toString().toLowerCase().indexOf(('campagnes.klm.com').toLowerCase()) != -1) || ((window.top.location).toString().toLowerCase().indexOf(('klmpackagedeals.klm.nl').toLowerCase()) != -1) || ((window.top.location).toString().toLowerCase().indexOf(('klmpackagedeals.klm.com').toLowerCase()) != -1) || ((window.top.location).toString().toLowerCase().indexOf(('packagedeals.klm.com/nl').toLowerCase()) != -1) || ((window.top.location).toString().toLowerCase().indexOf(('packagedeals.klm.com/en').toLowerCase()) != -1) || ((window.top.location).toString().toLowerCase().indexOf(('groepen.klm.com').toLowerCase()) != -1) || ((window.top.location).toString().toLowerCase().indexOf(('stedentrips.klm.com').toLowerCase()) != -1) || ((window.top.location).toString().toLowerCase().indexOf(('ondernemen.klm.com').toLowerCase()) != -1)) {
                var tc = document.createElement('script');
                tc.type = 'text/javascript';
                tc.async = true;
                tc.src = (window.location.protocol === 'https:' ? 'https://www.klm.com' : 'http://www.klm.com') + '/ams/tmspixel/static/js/usabilla/usabilla.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(tc, null);
            }
        })();
    }
}

function tc_events_1(tc_elt, tc_id_event, tc_array_events) {
    tc_array_events["id"] = tc_id_event;
    (function() {
        var l = 'id|ti|event_place|event_type|event_value|event|application|cg_n|cg_s|host|country|language|dcsuri|error_severity|error_errordescription|error_errorcode|tx_u|tx_e|si_x|si_n|si_cs|shipping_costs|product_prices|product_ids|PNR_number|payment_status|payment_method_status|payment_method|flight_nr|destination|day_before_flight|currency|booking_year|booking_time|booking_month|booking_day|seg_3|z_event|z_event_place|z_event_type|z_event_value|z_day_before_flight|z_flight_nr'.split('|');
        for (var k in l) {
            if (!tc_array_events.hasOwnProperty(l[k])) {
                tc_array_events[l[k]] = '';
            }
        }
    })();
    if (tc_array_events["id"] == 'WT_Click') {
        tC.launchTag('eWT_Click', 'Main Event', '-1', '878', '1');
        Webtrends.multiTrack({
            argsa: ['WT.ti', tc_array_events["ti"], 'WT.z_eventplace', (tc_array_events["event_place"]) ? tc_array_events["event_place"] : tc_array_events["z_event_place"], 'WT.z_eventtype', (tc_array_events["event_type"]) ? tc_array_events["event_type"] : tc_array_events["z_event_type"], 'WT.z_eventvalue', (tc_array_events["event_value"]) ? tc_array_events["event_value"] : tc_array_events["z_event_value"], 'WT.z_event', (tc_array_events["event"]) ? tc_array_events["event"] : tc_array_events["z_event"], 'WT.cg_n', tc_array_events["cg_n"], 'WT.cg_s', tc_array_events["cg_s"], 'WT.product_ids', tc_array_events["product_ids"], 'WT.tx_u', tc_array_events["tx_u"], 'WT.tx_e', tc_array_events["tx_e"], 'WT.si_n', tc_array_events["si_n"], 'WT.si_x', tc_array_events["si_x"], 'WT.z_day_before_flight', (tc_array_events["day_before_flight"]) ? tc_array_events["day_before_flight"] : tc_array_events["z_day_before_flight"], 'WT.z_flight_nr', (tc_array_events["flight_nr"]) ? tc_array_events["flight_nr"] : tc_array_events["z_flight_nr"], 'WT.payment_method_status', tc_array_events["payment_method_status"], 'WT.payment_method', tc_array_events["payment_method"], 'WT.tx_s', tc_array_events["product_prices"], 'WT.currency', tc_vars["currency"], 'WT.PNR_number', tc_array_events["PNR_number"], 'WT.booking_time', tc_array_events["booking_time"], 'WT.booking_day', tc_array_events["booking_day"], 'WT.booking_month', tc_array_events["booking_month"], 'WT.booking_year', tc_array_events["booking_year"], 'WT.z_passenger', tc_vars["z_passenger"], 'WT.z_cabin_code', tc_vars["z_cabin_code"], 'WT.z_trip_type', tc_vars["z_trip_type"], 'WT.si_cs', tc_array_events["si_cs"], 'WT.seg_3', tc_array_events["seg_3"], 'WT.payment_status', tc_vars["payment_status"], 'WT.dl', '99', 'WT.z_error_severity', tc_vars["error_severity"], 'WT.z_error_errordescription', tc_vars["error_errordescription"], 'WT.z_error_errorcode', tc_vars["error_errorcode"], 'WT.z_shipping_costs', (tc_vars["shipping_costs"]) ? tc_vars["shipping_costs"] : tc_vars["z_ship_costs"], 'WT.pn_sku', tc_vars["product_ids"], 'WT.tx_i', tc_vars["tx_i"], 'WT.z_app_version', (tc_vars["app_version"]) ? tc_vars["app_version"] : tc_vars["z_app_version"], 'WT.z_payment_status', tc_vars["payment_status"], 'WT.z_payment_status_method', tc_vars["payment_method_status"], 'WT.z_destination', tc_vars["destination"] ? (tc_vars["destination"]) : tc_vars["z_destination"], 'WT.z_currency', tc_vars["currency"], 'WT.z_booking_year', tc_vars["booking_year"], 'WT.z_booking_time', tc_vars["booking_time"], 'WT.z_booking_month', tc_vars["booking_month"], 'WT.z_booking_day', tc_vars["booking_day"], 'WT.z_departure_date', tc_vars["departure_date"] ? (tc_vars["departure_date"]) : tc_vars["z_departure_date"], 'WT.z_departure_day', tc_vars["departure_day"] ? (tc_vars["departure_day"]) : tc_vars["z_departure_day"], 'WT.z_departure_month', tc_vars["departure_month"] ? (tc_vars["departure_month"]) : tc_vars["z_departure_month"], 'WT.z_departure_year', tc_vars["departure_year"] ? (tc_vars["departure_year"]) : tc_vars["z_departure_year"], 'WT.z_origin', (tc_vars["origin"]) ? tc_vars["origin"] : tc_vars["z_origin"], 'WT.pn_gr', tc_vars["product_group"], 'WT.pn_sc', tc_vars["product_subgroup"], 'WT.z_upgradeyourself_eligable', tc_vars["upgradeyourself_eligable"], 'WT.z_pnr_number', tc_array_events["PNR_number"], 'WT.tx_it', tc_vars["tx_it"], 'WT.tx_id', tc_vars["tx_id"], 'WT.cg_s1', tc_vars["cg_s1"], 'WT.cg_s2', tc_vars["cg_s2"], 'WT.z_nb_adults', (tc_vars["nb_adults"]) ? tc_vars["nb_adults"] : tc_vars["z_nb_adults"], 'WT.z_nb_children', (tc_vars["nb_children"]) ? tc_vars["nb_children"] : tc_vars["z_nb_children"], 'WT.z_nb_infants', (tc_vars["nb_infants"]) ? tc_vars["nb_infants"] : tc_vars["z_nb_infants"], 'WT.z_package_order', (tc_vars["package_order_number"]) ? tc_vars["package_order_number"] : tc_vars["z_package_order"], 'WT.z_nb_passengers', (tc_vars["passenger"]) ? tc_vars["passenger"] : tc_vars["z_nb_passengers"], 'WT.z_pos', (tc_vars["pos"]) ? tc_vars["pos"] : tc_vars["z_pos"], 'WT.z_return_date', (tc_vars["return_date"]) ? tc_vars["return_date"] : tc_vars["z_return_date"], 'WT.si_c', tc_vars["si_cs"], 'WT.z_stay_duration', (tc_vars["stay_duration"]) ? tc_vars["stay_duration"] : tc_vars["z_stay_duration"], 'WT.tx_s', tc_vars["tx_s"], 'WT.z_widget', tc_vars["z_widget"], 'WT.z_fare_basis', tc_vars["z_fare_basis"], 'WT.z_tax', tc_vars["z_tax"], 'WT.z_booking_fee', tc_vars["z_booking_fee"], 'WT.z_outbound_prices', tc_vars["z_outbound_prices"], 'WT.z_outbound_selected', tc_vars["z_outbound_selected"], 'WT.z_outbound_journey_durations', tc_vars["z_outbound_journey_durations"], 'WT.z_outbound_departure_times', tc_vars["z_outbound_departure_times"], 'WT.z_outbound_number_of_stops', tc_vars["z_outbound_number_of_stops"], 'WT.z_outbound_subclass', tc_vars["z_outbound_subclass"], 'WT.z_outbound_marketing_carrier_flight_nr', tc_vars["z_outbound_marketing_carrier_flight_nr"], 'WT.z_inbound_prices', tc_vars["z_inbound_prices"], 'WT.z_inbound_selected', tc_vars["z_inbound_selected"], 'WT.z_inbound_journey_durations', tc_vars["z_inbound_journey_durations"], 'WT.z_inbound_departure_times', tc_vars["z_inbound_departure_times"], 'WT.z_inbound_number_of_stops', tc_vars["z_inbound_number_of_stops"], 'WT.z_inbound_subclass', tc_vars["z_inbound_subclass"], 'WT.z_inbound_marketing_carrier_flight_nr', tc_vars["z_inbound_marketing_carrier_flight_nr"], 'WT.z_tail_nr', tc_vars["tail_nr"] ? tc_vars["tail_nr"] : tc_vars["z_tail_nr"], 'WT.identification_type', tc_vars["identification_type"], 'WT.eticket', tc_vars["eticket"], 'WT.pnr', tc_vars["pnr"], 'WT.ffp_tier_level', tc_vars["ffp_tier_level"], 'WT.login', tc_vars["login"], 'WT.voucher_code', tc_vars["voucher_code"]]
        });
    }
}
