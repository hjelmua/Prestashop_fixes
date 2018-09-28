!function(t) {
    function e(n) {
        if (i[n])
            return i[n].exports;
        var o = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var i = {};
    e.m = t, e.c = i, e.i = function(t) {
        return t
    }, e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 32)
}([function(t, e) {
    t.exports = jQuery
}, function(t, e) {
    t.exports = prestashop
}, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = i(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        a = function() {
            function t() {
                n(this, t)
            }
            return o(t, [{
                key: "init",
                value: function() {
                    (0, s.default)(".js-product-miniature").each(function(t, e) {
                        (0, s.default)(e).find(".color").length > 5 && function() {
                            var t = 0;
                            (0, s.default)(e).find(".color").each(function(e, i) {
                                e > 4 && ((0, s.default)(i).hide(), t++)
                            }), (0, s.default)(e).find(".js-count").append("+" + t)
                        }()
                    })
                }
            }]), t
        }();
    e.default = a, t.exports = e.default
}, function(t, e, i) {
    "use strict";
    var n,
        o;
    !function(t) {
        function e(t) {
            var e = t.length,
                n = i.type(t);
            return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }
        if (!t.jQuery) {
            var i = function t(e, i) {
                return new t.fn.init(e, i)
            };
            i.isWindow = function(t) {
                return t && t === t.window
            }, i.type = function(t) {
                return t ? "object" == typeof t || "function" == typeof t ? o[s.call(t)] || "object" : typeof t : t + ""
            }, i.isArray = Array.isArray || function(t) {
                return "array" === i.type(t)
            }, i.isPlainObject = function(t) {
                var e;
                if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t))
                    return !1;
                try {
                    if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (t) {
                    return !1
                }
                for (e in t)
                    ;
                return void 0 === e || r.call(t, e)
            }, i.each = function(t, i, n) {
                var o = 0,
                    r = t.length,
                    s = e(t);
                if (n) {
                    if (s)
                        for (; o < r && !1 !== i.apply(t[o], n); o++)
                            ;
                    else
                        for (o in t)
                            if (t.hasOwnProperty(o) && !1 === i.apply(t[o], n))
                                break
                } else if (s)
                    for (; o < r && !1 !== i.call(t[o], o, t[o]); o++)
                        ;
                else
                    for (o in t)
                        if (t.hasOwnProperty(o) && !1 === i.call(t[o], o, t[o]))
                            break;
                return t
            }, i.data = function(t, e, o) {
                if (void 0 === o) {
                    var r = t[i.expando],
                        s = r && n[r];
                    if (void 0 === e)
                        return s;
                    if (s && e in s)
                        return s[e]
                } else if (void 0 !== e) {
                    var a = t[i.expando] || (t[i.expando] = ++i.uuid);
                    return n[a] = n[a] || {}, n[a][e] = o, o
                }
            }, i.removeData = function(t, e) {
                var o = t[i.expando],
                    r = o && n[o];
                r && (e ? i.each(e, function(t, e) {
                    delete r[e]
                }) : delete n[o])
            }, i.extend = function() {
                var t,
                    e,
                    n,
                    o,
                    r,
                    s,
                    a = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === c && (a = this, l--); l < c; l++)
                    if (r = arguments[l])
                        for (o in r)
                            r.hasOwnProperty(o) && (t = a[o], n = r[o], a !== n && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, s = t && i.isArray(t) ? t : []) : s = t && i.isPlainObject(t) ? t : {}, a[o] = i.extend(u, s, n)) : void 0 !== n && (a[o] = n)));
                return a
            }, i.queue = function(t, n, o) {
                if (t) {
                    n = (n || "fx") + "queue";
                    var r = i.data(t, n);
                    return o ? (!r || i.isArray(o) ? r = i.data(t, n, function(t, i) {
                        var n = i || [];
                        return t && (e(Object(t)) ? function(t, e) {
                            for (var i = +e.length, n = 0, o = t.length; n < i;)
                                t[o++] = e[n++];
                            if (i !== i)
                                for (; void 0 !== e[n];)
                                    t[o++] = e[n++];
                            t.length = o
                        }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
                    }(o)) : r.push(o), r) : r || []
                }
            }, i.dequeue = function(t, e) {
                i.each(t.nodeType ? [t] : t, function(t, n) {
                    e = e || "fx";
                    var o = i.queue(n, e),
                        r = o.shift();
                    "inprogress" === r && (r = o.shift()), r && ("fx" === e && o.unshift("inprogress"), r.call(n, function() {
                        i.dequeue(n, e)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function(t) {
                    if (t.nodeType)
                        return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    var t = this[0],
                        e = function(t) {
                            for (var e = t.offsetParent; e && "html" !== e.nodeName.toLowerCase() && e.style && "static" === e.style.position;)
                                e = e.offsetParent;
                            return e || document
                        }(t),
                        n = this.offset(),
                        o = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: n.top - o.top,
                        left: n.left - o.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var o = {}, r = o.hasOwnProperty, s = o.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++)
                o["[object " + a[l] + "]"] = a[l].toLowerCase();
            i.fn.init.prototype = i.fn, t.Velocity = {
                Utilities: i
            }
        }
    }(window), function(r) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = r() : (n = r, void 0 !== (o = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = o))
    }(function() {
        return function(t, e, i, n) {
            function o(t) {
                for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                    var o = t[e];
                    o && n.push(o)
                }
                return n
            }
            function r(t) {
                return b.isWrapped(t) ? t = y.call(t) : b.isNode(t) && (t = [t]), t
            }
            function s(t) {
                var e = p.data(t, "velocity");
                return null === e ? n : e
            }
            function a(t, e) {
                var i = s(t);
                i && i.delayTimer && !i.delayPaused && (i.delayRemaining = i.delay - e + i.delayBegin, i.delayPaused = !0, clearTimeout(i.delayTimer.setTimeout))
            }
            function l(t, e) {
                var i = s(t);
                i && i.delayTimer && i.delayPaused && (i.delayPaused = !1, i.delayTimer.setTimeout = setTimeout(i.delayTimer.next, i.delayRemaining))
            }
            function c(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }
            function u(t, i, n, o) {
                function r(t, e) {
                    return 1 - 3 * e + 3 * t
                }
                function s(t, e) {
                    return 3 * e - 6 * t
                }
                function a(t) {
                    return 3 * t
                }
                function l(t, e, i) {
                    return ((r(e, i) * t + s(e, i)) * t + a(e)) * t
                }
                function c(t, e, i) {
                    return 3 * r(e, i) * t * t + 2 * s(e, i) * t + a(e)
                }
                function u(e, i) {
                    for (var o = 0; o < g; ++o) {
                        var r = c(i, t, n);
                        if (0 === r)
                            return i;
                        i -= (l(i, t, n) - e) / r
                    }
                    return i
                }
                function d() {
                    for (var e = 0; e < _; ++e)
                        S[e] = l(e * b, t, n)
                }
                function h(e, i, o) {
                    var r,
                        s,
                        a = 0;
                    do {
                        s = i + (o - i) / 2, r = l(s, t, n) - e, r > 0 ? o = s : i = s
                    } while (Math.abs(r) > v && ++a < y);
                    return s
                }
                function f(e) {
                    for (var i = 0, o = 1, r = _ - 1; o !== r && S[o] <= e; ++o)
                        i += b;
                    --o;
                    var s = (e - S[o]) / (S[o + 1] - S[o]),
                        a = i + s * b,
                        l = c(a, t, n);
                    return l >= m ? u(e, a) : 0 === l ? a : h(e, i, i + b)
                }
                function p() {
                    C = !0, t === i && n === o || d()
                }
                var g = 4,
                    m = .001,
                    v = 1e-7,
                    y = 10,
                    _ = 11,
                    b = 1 / (_ - 1),
                    w = "Float32Array" in e;
                if (4 !== arguments.length)
                    return !1;
                for (var x = 0; x < 4; ++x)
                    if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x]))
                        return !1;
                t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
                var S = w ? new Float32Array(_) : new Array(_),
                    C = !1,
                    k = function(e) {
                        return C || p(), t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(f(e), i, o)
                    };
                k.getControlPoints = function() {
                    return [{
                        x: t,
                        y: i
                    }, {
                        x: n,
                        y: o
                    }]
                };
                var E = "generateBezier(" + [t, i, n, o] + ")";
                return k.toString = function() {
                    return E
                }, k
            }
            function d(t, e) {
                var i = t;
                return b.isString(t) ? C.Easings[t] || (i = !1) : i = b.isArray(t) && 1 === t.length ? c.apply(null, t) : b.isArray(t) && 2 === t.length ? k.apply(null, t.concat([e])) : !(!b.isArray(t) || 4 !== t.length) && u.apply(null, t), !1 === i && (i = C.Easings[C.defaults.easing] ? C.defaults.easing : S), i
            }
            function h(t) {
                if (t) {
                    var e = C.timestamp && !0 !== t ? t : v.now(),
                        i = C.State.calls.length;
                    i > 1e4 && (C.State.calls = o(C.State.calls), i = C.State.calls.length);
                    for (var r = 0; r < i; r++)
                        if (C.State.calls[r]) {
                            var a = C.State.calls[r],
                                l = a[0],
                                c = a[2],
                                u = a[3],
                                d = !!u,
                                m = null,
                                y = a[5],
                                _ = a[6];
                            if (u || (u = C.State.calls[r][3] = e - 16), y) {
                                if (!0 !== y.resume)
                                    continue;
                                u = a[3] = Math.round(e - _ - 16), a[5] = null
                            }
                            _ = a[6] = e - u;
                            for (var w = Math.min(_ / c.duration, 1), x = 0, S = l.length; x < S; x++) {
                                var k = l[x],
                                    T = k.element;
                                if (s(T)) {
                                    var I = !1;
                                    if (c.display !== n && null !== c.display && "none" !== c.display) {
                                        if ("flex" === c.display) {
                                            var O = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            p.each(O, function(t, e) {
                                                E.setPropertyValue(T, "display", e)
                                            })
                                        }
                                        E.setPropertyValue(T, "display", c.display)
                                    }
                                    c.visibility !== n && "hidden" !== c.visibility && E.setPropertyValue(T, "visibility", c.visibility);
                                    for (var D in k)
                                        if (k.hasOwnProperty(D) && "element" !== D) {
                                            var P,
                                                N = k[D],
                                                $ = b.isString(N.easing) ? C.Easings[N.easing] : N.easing;
                                            if (b.isString(N.pattern)) {
                                                var L = 1 === w ? function(t, e, i) {
                                                    var n = N.endValue[e];
                                                    return i ? Math.round(n) : n
                                                } : function(t, e, i) {
                                                    var n = N.startValue[e],
                                                        o = N.endValue[e] - n,
                                                        r = n + o * $(w, c, o);
                                                    return i ? Math.round(r) : r
                                                };
                                                P = N.pattern.replace(/{(\d+)(!)?}/g, L)
                                            } else if (1 === w)
                                                P = N.endValue;
                                            else {
                                                var j = N.endValue - N.startValue;
                                                P = N.startValue + j * $(w, c, j)
                                            }
                                            if (!d && P === N.currentValue)
                                                continue;
                                            if (N.currentValue = P, "tween" === D)
                                                m = P;
                                            else {
                                                var B;
                                                if (E.Hooks.registered[D]) {
                                                    B = E.Hooks.getRoot(D);
                                                    var M = s(T).rootPropertyValueCache[B];
                                                    M && (N.rootPropertyValue = M)
                                                }
                                                var V = E.setPropertyValue(T, D, N.currentValue + (g < 9 && 0 === parseFloat(P) ? "" : N.unitType), N.rootPropertyValue, N.scrollData);
                                                E.Hooks.registered[D] && (E.Normalizations.registered[B] ? s(T).rootPropertyValueCache[B] = E.Normalizations.registered[B]("extract", null, V[1]) : s(T).rootPropertyValueCache[B] = V[1]), "transform" === V[0] && (I = !0)
                                            }
                                        }
                                    c.mobileHA && s(T).transformCache.translate3d === n && (s(T).transformCache.translate3d = "(0px, 0px, 0px)", I = !0), I && E.flushTransformCache(T)
                                }
                            }
                            c.display !== n && "none" !== c.display && (C.State.calls[r][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (C.State.calls[r][2].visibility = !1), c.progress && c.progress.call(a[1], a[1], w, Math.max(0, u + c.duration - e), u, m), 1 === w && f(r)
                        }
                }
                C.State.isTicking && A(h)
            }
            function f(t, e) {
                if (!C.State.calls[t])
                    return !1;
                for (var i = C.State.calls[t][0], o = C.State.calls[t][1], r = C.State.calls[t][2], a = C.State.calls[t][4], l = !1, c = 0, u = i.length; c < u; c++) {
                    var d = i[c].element;
                    e || r.loop || ("none" === r.display && E.setPropertyValue(d, "display", r.display), "hidden" === r.visibility && E.setPropertyValue(d, "visibility", r.visibility));
                    var h = s(d);
                    if (!0 !== r.loop && (p.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && h) {
                        h.isAnimating = !1, h.rootPropertyValueCache = {};
                        var f = !1;
                        p.each(E.Lists.transforms3D, function(t, e) {
                            var i = /^scale/.test(e) ? 1 : 0,
                                o = h.transformCache[e];
                            h.transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (f = !0, delete h.transformCache[e])
                        }), r.mobileHA && (f = !0, delete h.transformCache.translate3d), f && E.flushTransformCache(d), E.Values.removeClass(d, "velocity-animating")
                    }
                    if (!e && r.complete && !r.loop && c === u - 1)
                        try {
                            r.complete.call(o, o)
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 1)
                        }
                    a && !0 !== r.loop && a(o), h && !0 === r.loop && !e && (p.each(h.tweensContainer, function(t, e) {
                        if (/^rotate/.test(t) && (parseFloat(e.startValue) - parseFloat(e.endValue)) % 360 == 0) {
                            var i = e.startValue;
                            e.startValue = e.endValue, e.endValue = i
                        }
                        /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), C(d, "reverse", {
                        loop: !0,
                        delay: r.delay
                    })), !1 !== r.queue && p.dequeue(d, r.queue)
                }
                C.State.calls[t] = !1;
                for (var g = 0, m = C.State.calls.length; g < m; g++)
                    if (!1 !== C.State.calls[g]) {
                        l = !0;
                        break
                    }
                !1 === l && (C.State.isTicking = !1, delete C.State.calls, C.State.calls = [])
            }
            var p,
                g = function() {
                    if (i.documentMode)
                        return i.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = i.createElement("div");
                        if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length)
                            return e = null, t
                    }
                    return n
                }(),
                m = function() {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                            var i,
                                n = (new Date).getTime();
                            return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function() {
                                e(n + i)
                            }, i)
                        }
                }(),
                v = function() {
                    var t = e.performance || {};
                    if ("function" != typeof t.now) {
                        var i = t.timing && t.timing.navigationStart ? t.timing.navigationStart : (new Date).getTime();
                        t.now = function() {
                            return (new Date).getTime() - i
                        }
                    }
                    return t
                }(),
                y = function() {
                    var t = Array.prototype.slice;
                    try {
                        return t.call(i.documentElement), t
                    } catch (e) {
                        return function(e, i) {
                            var n = this.length;
                            if ("number" != typeof e && (e = 0), "number" != typeof i && (i = n), this.slice)
                                return t.call(this, e, i);
                            var o,
                                r = [],
                                s = e >= 0 ? e : Math.max(0, n + e),
                                a = i < 0 ? n + i : Math.min(i, n),
                                l = a - s;
                            if (l > 0)
                                if (r = new Array(l), this.charAt)
                                    for (o = 0; o < l; o++)
                                        r[o] = this.charAt(s + o);
                                else
                                    for (o = 0; o < l; o++)
                                        r[o] = this[s + o];
                            return r
                        }
                    }
                }(),
                _ = function() {
                    return Array.prototype.includes ? function(t, e) {
                        return t.includes(e)
                    } : Array.prototype.indexOf ? function(t, e) {
                        return t.indexOf(e) >= 0
                    } : function(t, e) {
                        for (var i = 0; i < t.length; i++)
                            if (t[i] === e)
                                return !0;
                        return !1
                    }
                },
                b = {
                    isNumber: function(t) {
                        return "number" == typeof t
                    },
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isFunction: function(t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    },
                    isNode: function(t) {
                        return t && t.nodeType
                    },
                    isWrapped: function(t) {
                        return t && t !== e && b.isNumber(t.length) && !b.isString(t) && !b.isFunction(t) && !b.isNode(t) && (0 === t.length || b.isNode(t[0]))
                    },
                    isSVG: function(t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function(t) {
                        for (var e in t)
                            if (t.hasOwnProperty(e))
                                return !1;
                        return !0
                    }
                },
                w = !1;
            if (t.fn && t.fn.jquery ? (p = t, w = !0) : p = e.Velocity.Utilities, g <= 8 && !w)
                throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (g <= 7)
                return void (jQuery.fn.velocity = jQuery.fn.animate);
            var x = 400,
                S = "swing",
                C = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: e.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: i.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                        delayedElements: {
                            count: 0
                        }
                    },
                    CSS: {},
                    Utilities: p,
                    Redirects: {},
                    Easings: {},
                    Promise: e.Promise,
                    defaults: {
                        queue: "",
                        duration: x,
                        easing: S,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0,
                        promiseRejectEmpty: !0
                    },
                    init: function(t) {
                        p.data(t, "velocity", {
                            isSVG: b.isSVG(t),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 5,
                        patch: 0
                    },
                    debug: !1,
                    timestamp: !0,
                    pauseAll: function(t) {
                        var e = (new Date).getTime();
                        p.each(C.State.calls, function(e, i) {
                            if (i) {
                                if (t !== n && (i[2].queue !== t || !1 === i[2].queue))
                                    return !0;
                                i[5] = {
                                    resume: !1
                                }
                            }
                        }), p.each(C.State.delayedElements, function(t, i) {
                            i && a(i, e)
                        })
                    },
                    resumeAll: function(t) {
                        var e = (new Date).getTime();
                        p.each(C.State.calls, function(e, i) {
                            if (i) {
                                if (t !== n && (i[2].queue !== t || !1 === i[2].queue))
                                    return !0;
                                i[5] && (i[5].resume = !0)
                            }
                        }), p.each(C.State.delayedElements, function(t, i) {
                            i && l(i, e)
                        })
                    }
                };
            e.pageYOffset !== n ? (C.State.scrollAnchor = e, C.State.scrollPropertyLeft = "pageXOffset", C.State.scrollPropertyTop = "pageYOffset") : (C.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, C.State.scrollPropertyLeft = "scrollLeft", C.State.scrollPropertyTop = "scrollTop");
            var k = function() {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }
                function e(e, i, n) {
                    var o = {
                        x: e.x + n.dx * i,
                        v: e.v + n.dv * i,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: o.v,
                        dv: t(o)
                    }
                }
                function i(i, n) {
                    var o = {
                            dx: i.v,
                            dv: t(i)
                        },
                        r = e(i, .5 * n, o),
                        s = e(i, .5 * n, r),
                        a = e(i, n, s),
                        l = 1 / 6 * (o.dx + 2 * (r.dx + s.dx) + a.dx),
                        c = 1 / 6 * (o.dv + 2 * (r.dv + s.dv) + a.dv);
                    return i.x = i.x + l * n, i.v = i.v + c * n, i
                }
                return function t(e, n, o) {
                    var r,
                        s,
                        a,
                        l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        c = [0],
                        u = 0;
                    for (e = parseFloat(e) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = e, l.friction = n, r = null !== o, r ? (u = t(e, n), s = u / o * .016) : s = .016;;)
                        if (a = i(a || l, s), c.push(1 + a.x), u += 16, !(Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4))
                            break;
                    return r ? function(t) {
                        return c[t * (c.length - 1) | 0]
                    } : u
                }
            }();
            C.Easings = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function(t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            }, p.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(t, e) {
                C.Easings[e[0]] = u.apply(null, e[1])
            });
            var E = C.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t = 0; t < E.Lists.colors.length; t++) {
                            var e = "color" === E.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            E.Hooks.templates[E.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var i,
                            n,
                            o;
                        if (g)
                            for (i in E.Hooks.templates)
                                if (E.Hooks.templates.hasOwnProperty(i)) {
                                    n = E.Hooks.templates[i], o = n[0].split(" ");
                                    var r = n[1].match(E.RegEx.valueSplit);
                                    "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), E.Hooks.templates[i] = [o.join(" "), r.join(" ")])
                                }
                        for (i in E.Hooks.templates)
                            if (E.Hooks.templates.hasOwnProperty(i)) {
                                n = E.Hooks.templates[i], o = n[0].split(" ");
                                for (var s in o)
                                    if (o.hasOwnProperty(s)) {
                                        var a = i + o[s],
                                            l = s;
                                        E.Hooks.registered[a] = [i, l]
                                    }
                            }
                    },
                    getRoot: function(t) {
                        var e = E.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    getUnit: function(t, e) {
                        var i = (t.substr(e || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return i && _(E.Lists.units, i) ? i : ""
                    },
                    fixColors: function(t) {
                        return t.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(t, e, i) {
                            return E.Lists.colorNames.hasOwnProperty(i) ? (e || "rgba(") + E.Lists.colorNames[i] + (e ? "" : ",1)") : e + i
                        })
                    },
                    cleanRootPropertyValue: function(t, e) {
                        return E.RegEx.valueUnwrap.test(e) && (e = e.match(E.RegEx.valueUnwrap)[1]), E.Values.isCSSNullValue(e) && (e = E.Hooks.templates[t][1]), e
                    },
                    extractValue: function(t, e) {
                        var i = E.Hooks.registered[t];
                        if (i) {
                            var n = i[0],
                                o = i[1];
                            return e = E.Hooks.cleanRootPropertyValue(n, e), e.toString().match(E.RegEx.valueSplit)[o]
                        }
                        return e
                    },
                    injectValue: function(t, e, i) {
                        var n = E.Hooks.registered[t];
                        if (n) {
                            var o,
                                r = n[0],
                                s = n[1];
                            return i = E.Hooks.cleanRootPropertyValue(r, i), o = i.toString().match(E.RegEx.valueSplit), o[s] = e, o.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(t, e, i) {
                            switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var n;
                                return E.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(E.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                            case "inject":
                                return "rect(" + i + ")"
                            }
                        },
                        blur: function(t, e, i) {
                            switch (t) {
                            case "name":
                                return C.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var n = parseFloat(i);
                                if (!n && 0 !== n) {
                                    var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = o ? o[1] : 0
                                }
                                return n;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(t, e, i) {
                            if (g <= 8)
                                switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i = n ? n[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                }
                            else
                                switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return i
                                }
                        }
                    },
                    register: function() {
                        function t(t, e, i) {
                            if ("border-box" === E.getPropertyValue(e, "boxSizing").toString().toLowerCase() === (i || !1)) {
                                var n,
                                    o,
                                    r = 0,
                                    s = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
                                    a = ["padding" + s[0], "padding" + s[1], "border" + s[0] + "Width", "border" + s[1] + "Width"];
                                for (n = 0; n < a.length; n++)
                                    o = parseFloat(E.getPropertyValue(e, a[n])), isNaN(o) || (r += o);
                                return i ? -r : r
                            }
                            return 0
                        }
                        function e(e, i) {
                            return function(n, o, r) {
                                switch (n) {
                                case "name":
                                    return e;
                                case "extract":
                                    return parseFloat(r) + t(e, o, i);
                                case "inject":
                                    return parseFloat(r) - t(e, o, i) + "px"
                                }
                            }
                        }
                        g && !(g > 9) || C.State.isGingerbread || (E.Lists.transformsBase = E.Lists.transformsBase.concat(E.Lists.transforms3D));
                        for (var i = 0; i < E.Lists.transformsBase.length; i++)
                            !function() {
                                var t = E.Lists.transformsBase[i];
                                E.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return s(i) === n || s(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : s(i).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var r = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            r = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                            break;
                                        case "scal":
                                        case "scale":
                                            C.State.isAndroid && s(i).transformCache[t] === n && o < 1 && (o = 1), r = !/(\d)$/i.test(o);
                                            break;
                                        case "skew":
                                        case "rotate":
                                            r = !/(deg|\d)$/i.test(o)
                                        }
                                        return r || (s(i).transformCache[t] = "(" + o + ")"), s(i).transformCache[t]
                                    }
                                }
                            }();
                        for (var o = 0; o < E.Lists.colors.length; o++)
                            !function() {
                                var t = E.Lists.colors[o];
                                E.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var r;
                                        if (E.RegEx.wrappedValueAlreadyExtracted.test(o))
                                            r = o;
                                        else {
                                            var s,
                                                a = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                            /^[A-z]+$/i.test(o) ? s = a[o] !== n ? a[o] : a.black : E.RegEx.isHex.test(o) ? s = "rgb(" + E.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (s = a.black), r = (s || o).toString().match(E.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return (!g || g > 8) && 3 === r.split(" ").length && (r += " 1"), r;
                                    case "inject":
                                        return /^rgb/.test(o) ? o : (g <= 8 ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (g <= 8 ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                    }
                                }
                            }();
                        E.Normalizations.registered.innerWidth = e("width", !0), E.Normalizations.registered.innerHeight = e("height", !0), E.Normalizations.registered.outerWidth = e("width"), E.Normalizations.registered.outerHeight = e("height")
                    }
                },
                Names: {
                    camelCase: function(t) {
                        return t.replace(/-(\w)/g, function(t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (g || C.State.isAndroid && !C.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                    },
                    prefixCheck: function(t) {
                        if (C.State.prefixMatches[t])
                            return [C.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; i < n; i++) {
                            var o;
                            if (o = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                return t.toUpperCase()
                            }), b.isString(C.State.prefixElement.style[o]))
                                return C.State.prefixMatches[t] = o, [o, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(t) {
                        var e,
                            i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(i, function(t, e, i, n) {
                            return e + e + i + i + n + n
                        }), e = n.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(t) {
                        return !t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function(t, e) {
                        if (t)
                            if (t.classList)
                                t.classList.add(e);
                            else if (b.isString(t.className))
                                t.className += (t.className.length ? " " : "") + e;
                            else {
                                var i = t.getAttribute(g <= 7 ? "className" : "class") || "";
                                t.setAttribute("class", i + (i ? " " : "") + e)
                            }
                    },
                    removeClass: function(t, e) {
                        if (t)
                            if (t.classList)
                                t.classList.remove(e);
                            else if (b.isString(t.className))
                                t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                            else {
                                var i = t.getAttribute(g <= 7 ? "className" : "class") || "";
                                t.setAttribute("class", i.replace(new RegExp("(^|s)" + e.split(" ").join("|") + "(s|$)", "gi"), " "))
                            }
                    }
                },
                getPropertyValue: function(t, i, o, r) {
                    function a(t, i) {
                        var o = 0;
                        if (g <= 8)
                            o = p.css(t, i);
                        else {
                            var l = !1;
                            /^(width|height)$/.test(i) && 0 === E.getPropertyValue(t, "display") && (l = !0, E.setPropertyValue(t, "display", E.Values.getDisplayType(t)));
                            var c = function() {
                                l && E.setPropertyValue(t, "display", "none")
                            };
                            if (!r) {
                                if ("height" === i && "border-box" !== E.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var u = t.offsetHeight - (parseFloat(E.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(E.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(E.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(E.getPropertyValue(t, "paddingBottom")) || 0);
                                    return c(), u
                                }
                                if ("width" === i && "border-box" !== E.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var d = t.offsetWidth - (parseFloat(E.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(E.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(E.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(E.getPropertyValue(t, "paddingRight")) || 0);
                                    return c(), d
                                }
                            }
                            var h;
                            h = s(t) === n ? e.getComputedStyle(t, null) : s(t).computedStyle ? s(t).computedStyle : s(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), o = 9 === g && "filter" === i ? h.getPropertyValue(i) : h[i], "" !== o && null !== o || (o = t.style[i]), c()
                        }
                        if ("auto" === o && /^(top|right|bottom|left)$/i.test(i)) {
                            var f = a(t, "position");
                            ("fixed" === f || "absolute" === f && /top|left/i.test(i)) && (o = p(t).position()[i] + "px")
                        }
                        return o
                    }
                    var l;
                    if (E.Hooks.registered[i]) {
                        var c = i,
                            u = E.Hooks.getRoot(c);
                        o === n && (o = E.getPropertyValue(t, E.Names.prefixCheck(u)[0])), E.Normalizations.registered[u] && (o = E.Normalizations.registered[u]("extract", t, o)), l = E.Hooks.extractValue(c, o)
                    } else if (E.Normalizations.registered[i]) {
                        var d,
                            h;
                        d = E.Normalizations.registered[i]("name", t), "transform" !== d && (h = a(t, E.Names.prefixCheck(d)[0]), E.Values.isCSSNullValue(h) && E.Hooks.templates[i] && (h = E.Hooks.templates[i][1])), l = E.Normalizations.registered[i]("extract", t, h)
                    }
                    if (!/^[\d-]/.test(l)) {
                        var f = s(t);
                        if (f && f.isSVG && E.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i))
                                try {
                                    l = t.getBBox()[i]
                                } catch (t) {
                                    l = 0
                                }
                            else
                                l = t.getAttribute(i);
                        else
                            l = a(t, E.Names.prefixCheck(i)[0])
                    }
                    return E.Values.isCSSNullValue(l) && (l = 0), C.debug, l
                },
                setPropertyValue: function(t, i, n, o, r) {
                    var a = i;
                    if ("scroll" === i)
                        r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? e.scrollTo(n, r.alternateValue) : e.scrollTo(r.alternateValue, n);
                    else if (E.Normalizations.registered[i] && "transform" === E.Normalizations.registered[i]("name", t))
                        E.Normalizations.registered[i]("inject", t, n), a = "transform", n = s(t).transformCache[i];
                    else {
                        if (E.Hooks.registered[i]) {
                            var l = i,
                                c = E.Hooks.getRoot(i);
                            o = o || E.getPropertyValue(t, c), n = E.Hooks.injectValue(l, n, o), i = c
                        }
                        if (E.Normalizations.registered[i] && (n = E.Normalizations.registered[i]("inject", t, n), i = E.Normalizations.registered[i]("name", t)), a = E.Names.prefixCheck(i)[0], g <= 8)
                            try {
                                t.style[a] = n
                            } catch (t) {
                                C.debug
                            }
                        else {
                            var u = s(t);
                            u && u.isSVG && E.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[a] = n
                        }
                        C.debug
                    }
                    return [a, n]
                },
                flushTransformCache: function(t) {
                    var e = "",
                        i = s(t);
                    if ((g || C.State.isAndroid && !C.State.isChrome) && i && i.isSVG) {
                        var n = function(e) {
                                return parseFloat(E.getPropertyValue(t, e))
                            },
                            o = {
                                translate: [n("translateX"), n("translateY")],
                                skewX: [n("skewX")],
                                skewY: [n("skewY")],
                                scale: 1 !== n("scale") ? [n("scale"), n("scale")] : [n("scaleX"), n("scaleY")],
                                rotate: [n("rotateZ"), 0, 0]
                            };
                        p.each(s(t).transformCache, function(t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), o[t] && (e += t + "(" + o[t].join(" ") + ") ", delete o[t])
                        })
                    } else {
                        var r,
                            a;
                        p.each(s(t).transformCache, function(i) {
                            if (r = s(t).transformCache[i], "transformPerspective" === i)
                                return a = r, !0;
                            9 === g && "rotateZ" === i && (i = "rotate"), e += i + r + " "
                        }), a && (e = "perspective" + a + " " + e)
                    }
                    E.setPropertyValue(t, "transform", e)
                }
            };
            E.Hooks.register(), E.Normalizations.register(), C.hook = function(t, e, i) {
                var o;
                return t = r(t), p.each(t, function(t, r) {
                    if (s(r) === n && C.init(r), i === n)
                        o === n && (o = E.getPropertyValue(r, e));
                    else {
                        var a = E.setPropertyValue(r, e, i);
                        "transform" === a[0] && C.CSS.flushTransformCache(r), o = a
                    }
                }), o
            };
            var T = function t() {
                function o() {
                    return g ? T.promise || null : m
                }
                function c(t, o) {
                    function r(r) {
                        var u,
                            f;
                        if (l.begin && 0 === I)
                            try {
                                l.begin.call(y, y)
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 1)
                            }
                        if ("scroll" === P) {
                            var g,
                                m,
                                v,
                                x = /^x$/i.test(l.axis) ? "Left" : "Top",
                                k = parseFloat(l.offset) || 0;
                            l.container ? b.isWrapped(l.container) || b.isNode(l.container) ? (l.container = l.container[0] || l.container, g = l.container["scroll" + x], v = g + p(t).position()[x.toLowerCase()] + k) : l.container = null : (g = C.State.scrollAnchor[C.State["scrollProperty" + x]], m = C.State.scrollAnchor[C.State["scrollProperty" + ("Left" === x ? "Top" : "Left")]], v = p(t).offset()[x.toLowerCase()] + k), c = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: g,
                                    currentValue: g,
                                    endValue: v,
                                    unitType: "",
                                    easing: l.easing,
                                    scrollData: {
                                        container: l.container,
                                        direction: x,
                                        alternateValue: m
                                    }
                                },
                                element: t
                            }, C.debug
                        } else if ("reverse" === P) {
                            if (!(u = s(t)))
                                return;
                            if (!u.tweensContainer)
                                return void p.dequeue(t, l.queue);
                            "none" === u.opts.display && (u.opts.display = "auto"), "hidden" === u.opts.visibility && (u.opts.visibility = "visible"), u.opts.loop = !1, u.opts.begin = null, u.opts.complete = null, S.easing || delete l.easing, S.duration || delete l.duration, l = p.extend({}, u.opts, l), f = p.extend(!0, {}, u ? u.tweensContainer : null);
                            for (var O in f)
                                if (f.hasOwnProperty(O) && "element" !== O) {
                                    var D = f[O].startValue;
                                    f[O].startValue = f[O].currentValue = f[O].endValue, f[O].endValue = D, b.isEmptyObject(S) || (f[O].easing = l.easing), C.debug
                                }
                            c = f
                        } else if ("start" === P) {
                            u = s(t), u && u.tweensContainer && !0 === u.isAnimating && (f = u.tweensContainer);
                            var N = function(o, r) {
                                var s,
                                    d = E.Hooks.getRoot(o),
                                    h = !1,
                                    g = r[0],
                                    m = r[1],
                                    v = r[2];
                                if (!(u && u.isSVG || "tween" === d || !1 !== E.Names.prefixCheck(d)[1] || E.Normalizations.registered[d] !== n))
                                    return void C.debug;
                                (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(o) && !v && 0 !== g && (v = 0), l._cacheValues && f && f[o] ? (v === n && (v = f[o].endValue + f[o].unitType), h = u.rootPropertyValueCache[d]) : E.Hooks.registered[o] ? v === n ? (h = E.getPropertyValue(t, d), v = E.getPropertyValue(t, o, h)) : h = E.Hooks.templates[d][1] : v === n && (v = E.getPropertyValue(t, o));
                                var y,
                                    _,
                                    w,
                                    x = !1,
                                    S = function(t, e) {
                                        var i,
                                            n;
                                        return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                            return i = t, ""
                                        }), i || (i = E.Values.getUnitType(t)), [n, i]
                                    };
                                if (v !== g && b.isString(v) && b.isString(g)) {
                                    s = "";
                                    var k = 0,
                                        T = 0,
                                        A = [],
                                        I = [],
                                        O = 0,
                                        D = 0,
                                        P = 0;
                                    for (v = E.Hooks.fixColors(v), g = E.Hooks.fixColors(g); k < v.length && T < g.length;) {
                                        var N = v[k],
                                            $ = g[T];
                                        if (/[\d\.-]/.test(N) && /[\d\.-]/.test($)) {
                                            for (var L = N, j = $, B = ".", V = "."; ++k < v.length;) {
                                                if ((N = v[k]) === B)
                                                    B = "..";
                                                else if (!/\d/.test(N))
                                                    break;
                                                L += N
                                            }
                                            for (; ++T < g.length;) {
                                                if (($ = g[T]) === V)
                                                    V = "..";
                                                else if (!/\d/.test($))
                                                    break;
                                                j += $
                                            }
                                            var F = E.Hooks.getUnit(v, k),
                                                R = E.Hooks.getUnit(g, T);
                                            if (k += F.length, T += R.length, F === R)
                                                L === j ? s += L + F : (s += "{" + A.length + (D ? "!" : "") + "}" + F, A.push(parseFloat(L)), I.push(parseFloat(j)));
                                            else {
                                                var H = parseFloat(L),
                                                    W = parseFloat(j);
                                                s += (O < 5 ? "calc" : "") + "(" + (H ? "{" + A.length + (D ? "!" : "") + "}" : "0") + F + " + " + (W ? "{" + (A.length + (H ? 1 : 0)) + (D ? "!" : "") + "}" : "0") + R + ")", H && (A.push(H), I.push(0)), W && (A.push(0), I.push(W))
                                            }
                                        } else {
                                            if (N !== $) {
                                                O = 0;
                                                break
                                            }
                                            s += N, k++, T++, 0 === O && "c" === N || 1 === O && "a" === N || 2 === O && "l" === N || 3 === O && "c" === N || O >= 4 && "(" === N ? O++ : (O && O < 5 || O >= 4 && ")" === N && --O < 5) && (O = 0), 0 === D && "r" === N || 1 === D && "g" === N || 2 === D && "b" === N || 3 === D && "a" === N || D >= 3 && "(" === N ? (3 === D && "a" === N && (P = 1), D++) : P && "," === N ? ++P > 3 && (D = P = 0) : (P && D < (P ? 5 : 4) || D >= (P ? 4 : 3) && ")" === N && --D < (P ? 5 : 4)) && (D = P = 0)
                                        }
                                    }
                                    k === v.length && T === g.length || (C.debug, s = n), s && (A.length ? (C.debug, v = A, g = I, _ = w = "") : s = n)
                                }
                                s || (y = S(o, v), v = y[0], w = y[1], y = S(o, g), g = y[0].replace(/^([+-\/*])=/, function(t, e) {
                                    return x = e, ""
                                }), _ = y[1], v = parseFloat(v) || 0, g = parseFloat(g) || 0, "%" === _ && (/^(fontSize|lineHeight)$/.test(o) ? (g /= 100, _ = "em") : /^scale/.test(o) ? (g /= 100, _ = "") : /(Red|Green|Blue)$/i.test(o) && (g = g / 100 * 255, _ = "")));
                                if (/[\/*]/.test(x))
                                    _ = w;
                                else if (w !== _ && 0 !== v)
                                    if (0 === g)
                                        _ = w;
                                    else {
                                        a = a || function() {
                                            var n = {
                                                    myParent: t.parentNode || i.body,
                                                    position: E.getPropertyValue(t, "position"),
                                                    fontSize: E.getPropertyValue(t, "fontSize")
                                                },
                                                o = n.position === M.lastPosition && n.myParent === M.lastParent,
                                                r = n.fontSize === M.lastFontSize;
                                            M.lastParent = n.myParent, M.lastPosition = n.position, M.lastFontSize = n.fontSize;
                                            var s = {};
                                            if (r && o)
                                                s.emToPx = M.lastEmToPx, s.percentToPxWidth = M.lastPercentToPxWidth, s.percentToPxHeight = M.lastPercentToPxHeight;
                                            else {
                                                var a = u && u.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                                C.init(a), n.myParent.appendChild(a), p.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                                    C.CSS.setPropertyValue(a, e, "hidden")
                                                }), C.CSS.setPropertyValue(a, "position", n.position), C.CSS.setPropertyValue(a, "fontSize", n.fontSize), C.CSS.setPropertyValue(a, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                                    C.CSS.setPropertyValue(a, e, "100%")
                                                }), C.CSS.setPropertyValue(a, "paddingLeft", "100em"), s.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(E.getPropertyValue(a, "width", null, !0)) || 1) / 100, s.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(E.getPropertyValue(a, "height", null, !0)) || 1) / 100, s.emToPx = M.lastEmToPx = (parseFloat(E.getPropertyValue(a, "paddingLeft")) || 1) / 100, n.myParent.removeChild(a)
                                            }
                                            return null === M.remToPx && (M.remToPx = parseFloat(E.getPropertyValue(i.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(e.innerWidth) / 100, M.vhToPx = parseFloat(e.innerHeight) / 100), s.remToPx = M.remToPx, s.vwToPx = M.vwToPx, s.vhToPx = M.vhToPx, C.debug, s
                                        }();
                                        var z = /margin|padding|left|right|width|text|word|letter/i.test(o) || /X$/.test(o) || "x" === o ? "x" : "y";
                                        switch (w) {
                                        case "%":
                                            v *= "x" === z ? a.percentToPxWidth : a.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            v *= a[w + "ToPx"]
                                        }
                                        switch (_) {
                                        case "%":
                                            v *= 1 / ("x" === z ? a.percentToPxWidth : a.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            v *= 1 / a[_ + "ToPx"]
                                        }
                                    }
                                switch (x) {
                                case "+":
                                    g = v + g;
                                    break;
                                case "-":
                                    g = v - g;
                                    break;
                                case "*":
                                    g *= v;
                                    break;
                                case "/":
                                    g = v / g
                                }
                                c[o] = {
                                    rootPropertyValue: h,
                                    startValue: v,
                                    currentValue: v,
                                    endValue: g,
                                    unitType: _,
                                    easing: m
                                }, s && (c[o].pattern = s), C.debug
                            };
                            for (var $ in w)
                                if (w.hasOwnProperty($)) {
                                    var L = E.Names.camelCase($),
                                        j = function(e, i) {
                                            var n,
                                                r,
                                                s;
                                            return b.isFunction(e) && (e = e.call(t, o, A)), b.isArray(e) ? (n = e[0], !b.isArray(e[1]) && /^[\d-]/.test(e[1]) || b.isFunction(e[1]) || E.RegEx.isHex.test(e[1]) ? s = e[1] : b.isString(e[1]) && !E.RegEx.isHex.test(e[1]) && C.Easings[e[1]] || b.isArray(e[1]) ? (r = i ? e[1] : d(e[1], l.duration), s = e[2]) : s = e[1] || e[2]) : n = e, i || (r = r || l.easing), b.isFunction(n) && (n = n.call(t, o, A)), b.isFunction(s) && (s = s.call(t, o, A)), [n || 0, r, s]
                                        }(w[$]);
                                    if (_(E.Lists.colors, L)) {
                                        var B = j[0],
                                            F = j[1],
                                            R = j[2];
                                        if (E.RegEx.isHex.test(B)) {
                                            for (var H = ["Red", "Green", "Blue"], W = E.Values.hexToRgb(B), z = R ? E.Values.hexToRgb(R) : n, q = 0; q < H.length; q++) {
                                                var U = [W[q]];
                                                F && U.push(F), z !== n && U.push(z[q]), N(L + H[q], U)
                                            }
                                            continue
                                        }
                                    }
                                    N(L, j)
                                }
                            c.element = t
                        }
                        c.element && (E.Values.addClass(t, "velocity-animating"), V.push(c), u = s(t), u && ("" === l.queue && (u.tweensContainer = c, u.opts = l), u.isAnimating = !0), I === A - 1 ? (C.State.calls.push([V, y, l, null, T.resolver, null, 0]), !1 === C.State.isTicking && (C.State.isTicking = !0, h())) : I++)
                    }
                    var a,
                        l = p.extend({}, C.defaults, S),
                        c = {};
                    switch (s(t) === n && C.init(t), parseFloat(l.delay) && !1 !== l.queue && p.queue(t, l.queue, function(e) {
                        C.velocityQueueEntryFlag = !0;
                        var i = C.State.delayedElements.count++;
                        C.State.delayedElements[i] = t;
                        var n = function(t) {
                            return function() {
                                C.State.delayedElements[t] = !1, e()
                            }
                        }(i);
                        s(t).delayBegin = (new Date).getTime(), s(t).delay = parseFloat(l.delay), s(t).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(l.delay)),
                            next: n
                        }
                    }), l.duration.toString().toLowerCase()) {
                    case "fast":
                        l.duration = 200;
                        break;
                    case "normal":
                        l.duration = x;
                        break;
                    case "slow":
                        l.duration = 600;
                        break;
                    default:
                        l.duration = parseFloat(l.duration) || 1
                    }
                    if (!1 !== C.mock && (!0 === C.mock ? l.duration = l.delay = 1 : (l.duration *= parseFloat(C.mock) || 1, l.delay *= parseFloat(C.mock) || 1)), l.easing = d(l.easing, l.duration), l.begin && !b.isFunction(l.begin) && (l.begin = null), l.progress && !b.isFunction(l.progress) && (l.progress = null), l.complete && !b.isFunction(l.complete) && (l.complete = null), l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = C.CSS.Values.getDisplayType(t))), l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && C.State.isMobile && !C.State.isGingerbread, !1 === l.queue)
                        if (l.delay) {
                            var u = C.State.delayedElements.count++;
                            C.State.delayedElements[u] = t;
                            var f = function(t) {
                                return function() {
                                    C.State.delayedElements[t] = !1, r()
                                }
                            }(u);
                            s(t).delayBegin = (new Date).getTime(), s(t).delay = parseFloat(l.delay), s(t).delayTimer = {
                                setTimeout: setTimeout(r, parseFloat(l.delay)),
                                next: f
                            }
                        } else
                            r();
                    else
                        p.queue(t, l.queue, function(t, e) {
                            if (!0 === e)
                                return T.promise && T.resolver(y), !0;
                            C.velocityQueueEntryFlag = !0, r(t)
                        });
                    "" !== l.queue && "fx" !== l.queue || "inprogress" === p.queue(t)[0] || p.dequeue(t)
                }
                var u,
                    g,
                    m,
                    v,
                    y,
                    w,
                    S,
                    k = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || b.isString(arguments[0].properties));
                b.isWrapped(this) ? (g = !1, v = 0, y = this, m = this) : (g = !0, v = 1, y = k ? arguments[0].elements || arguments[0].e : arguments[0]);
                var T = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (g && C.Promise && (T.promise = new C.Promise(function(t, e) {
                    T.resolver = t, T.rejecter = e
                })), k ? (w = arguments[0].properties || arguments[0].p, S = arguments[0].options || arguments[0].o) : (w = arguments[v], S = arguments[v + 1]), !(y = r(y)))
                    return void (T.promise && (w && S && !1 === S.promiseRejectEmpty ? T.resolver() : T.rejecter()));
                var A = y.length,
                    I = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(w) && !p.isPlainObject(S)) {
                    var O = v + 1;
                    S = {};
                    for (var D = O; D < arguments.length; D++)
                        b.isArray(arguments[D]) || !/^(fast|normal|slow)$/i.test(arguments[D]) && !/^\d/.test(arguments[D]) ? b.isString(arguments[D]) || b.isArray(arguments[D]) ? S.easing = arguments[D] : b.isFunction(arguments[D]) && (S.complete = arguments[D]) : S.duration = arguments[D]
                }
                var P;
                switch (w) {
                case "scroll":
                    P = "scroll";
                    break;
                case "reverse":
                    P = "reverse";
                    break;
                case "pause":
                    var N = (new Date).getTime();
                    return p.each(y, function(t, e) {
                        a(e, N)
                    }), p.each(C.State.calls, function(t, e) {
                        var i = !1;
                        e && p.each(e[1], function(t, o) {
                            var r = S === n ? "" : S;
                            return !0 !== r && e[2].queue !== r && (S !== n || !1 !== e[2].queue) || (p.each(y, function(t, n) {
                                    if (n === o)
                                        return e[5] = {
                                            resume: !1
                                        }, i = !0, !1
                                }), !i && void 0)
                        })
                    }), o();
                case "resume":
                    return p.each(y, function(t, e) {
                        l(e, N)
                    }), p.each(C.State.calls, function(t, e) {
                        var i = !1;
                        e && p.each(e[1], function(t, o) {
                            var r = S === n ? "" : S;
                            return !0 !== r && e[2].queue !== r && (S !== n || !1 !== e[2].queue) || (!e[5] || (p.each(y, function(t, n) {
                                    if (n === o)
                                        return e[5].resume = !0, i = !0, !1
                                }), !i && void 0))
                        })
                    }), o();
                case "finish":
                case "finishAll":
                case "stop":
                    p.each(y, function(t, e) {
                        s(e) && s(e).delayTimer && (clearTimeout(s(e).delayTimer.setTimeout), s(e).delayTimer.next && s(e).delayTimer.next(), delete s(e).delayTimer), "finishAll" !== w || !0 !== S && !b.isString(S) || (p.each(p.queue(e, b.isString(S) ? S : ""), function(t, e) {
                            b.isFunction(e) && e()
                        }), p.queue(e, b.isString(S) ? S : "", []))
                    });
                    var $ = [];
                    return p.each(C.State.calls, function(t, e) {
                        e && p.each(e[1], function(i, o) {
                            var r = S === n ? "" : S;
                            if (!0 !== r && e[2].queue !== r && (S !== n || !1 !== e[2].queue))
                                return !0;
                            p.each(y, function(i, n) {
                                if (n === o)
                                    if ((!0 === S || b.isString(S)) && (p.each(p.queue(n, b.isString(S) ? S : ""), function(t, e) {
                                        b.isFunction(e) && e(null, !0)
                                    }), p.queue(n, b.isString(S) ? S : "", [])), "stop" === w) {
                                        var a = s(n);
                                        a && a.tweensContainer && !1 !== r && p.each(a.tweensContainer, function(t, e) {
                                            e.endValue = e.currentValue
                                        }), $.push(t)
                                    } else
                                        "finish" !== w && "finishAll" !== w || (e[2].duration = 1)
                            })
                        })
                    }), "stop" === w && (p.each($, function(t, e) {
                        f(e, !0)
                    }), T.promise && T.resolver(y)), o();
                default:
                    if (!p.isPlainObject(w) || b.isEmptyObject(w)) {
                        if (b.isString(w) && C.Redirects[w]) {
                            u = p.extend({}, S);
                            var L = u.duration,
                                j = u.delay || 0;
                            return !0 === u.backwards && (y = p.extend(!0, [], y).reverse()), p.each(y, function(t, e) {
                                parseFloat(u.stagger) ? u.delay = j + parseFloat(u.stagger) * t : b.isFunction(u.stagger) && (u.delay = j + u.stagger.call(e, t, A)), u.drag && (u.duration = parseFloat(L) || (/^(callout|transition)/.test(w) ? 1e3 : x), u.duration = Math.max(u.duration * (u.backwards ? 1 - t / A : (t + 1) / A), .75 * u.duration, 200)), C.Redirects[w].call(e, e, u || {}, t, A, y, T.promise ? T : n)
                            }), o()
                        }
                        var B = "Velocity: First argument (" + w + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return T.promise ? T.rejecter(new Error(B)) : e.console, o()
                    }
                    P = "start"
                }
                var M = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    V = [];
                p.each(y, function(t, e) {
                    b.isNode(e) && c(e, t)
                }), u = p.extend({}, C.defaults, S), u.loop = parseInt(u.loop, 10);
                var F = 2 * u.loop - 1;
                if (u.loop)
                    for (var R = 0; R < F; R++) {
                        var H = {
                            delay: u.delay,
                            progress: u.progress
                        };
                        R === F - 1 && (H.display = u.display, H.visibility = u.visibility, H.complete = u.complete), t(y, "reverse", H)
                    }
                return o()
            };
            C = p.extend(T, C), C.animate = T;
            var A = e.requestAnimationFrame || m;
            if (!C.State.isMobile && i.hidden !== n) {
                var I = function() {
                    i.hidden ? (A = function(t) {
                        return setTimeout(function() {
                            t(!0)
                        }, 16)
                    }, h()) : A = e.requestAnimationFrame || m
                };
                I(), i.addEventListener("visibilitychange", I)
            }
            return t.Velocity = C, t !== e && (t.fn.velocity = T, t.fn.velocity.defaults = C.defaults), p.each(["Down", "Up"], function(t, e) {
                C.Redirects["slide" + e] = function(t, i, o, r, s, a) {
                    var l = p.extend({}, i),
                        c = l.begin,
                        u = l.complete,
                        d = {},
                        h = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        };
                    l.display === n && (l.display = "Down" === e ? "inline" === C.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                        0 === o && c && c.call(s, s);
                        for (var i in h)
                            if (h.hasOwnProperty(i)) {
                                d[i] = t.style[i];
                                var n = E.getPropertyValue(t, i);
                                h[i] = "Down" === e ? [n, 0] : [0, n]
                            }
                        d.overflow = t.style.overflow, t.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var e in d)
                            d.hasOwnProperty(e) && (t.style[e] = d[e]);
                        o === r - 1 && (u && u.call(s, s), a && a.resolver(s))
                    }, C(t, h, l)
                }
            }), p.each(["In", "Out"], function(t, e) {
                C.Redirects["fade" + e] = function(t, i, o, r, s, a) {
                    var l = p.extend({}, i),
                        c = l.complete,
                        u = {
                            opacity: "In" === e ? 1 : 0
                        };
                    0 !== o && (l.begin = null), l.complete = o !== r - 1 ? null : function() {
                        c && c.call(s, s), a && a.resolver(s)
                    }, l.display === n && (l.display = "In" === e ? "auto" : "none"), C(this, u, l)
                }
            }), C
        }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
    })
}, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    i(31), i(25), i(27), i(24), i(28), i(23), i(7), i(15), i(21), i(22), i(6);
    var o = i(9),
        r = n(o),
        s = i(10),
        a = n(s),
        l = i(2),
        c = n(l),
        u = i(11),
        d = n(u),
        h = i(12),
        f = n(h),
        p = i(1),
        g = n(p),
        m = i(26),
        v = n(m);
    i(16), i(17), i(18), i(19), i(20), i(8), i(13), i(14);
    for (var y in v.default.prototype)
        g.default[y] = v.default.prototype[y];
    $(document).ready(function() {
        var t = $(".js-dropdown"),
            e = new a.default,
            i = new r.default(t),
            n = new c.default,
            o = new d.default,
            s = new f.default;
        i.init(), e.init(), n.init(), o.init(), s.init()
    })
}, function(t, e) {}, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o() {
        s.default.each((0, s.default)(c), function(t, e) {
            (0, s.default)(e).TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "material-icons touchspin-up",
                verticaldownclass: "material-icons touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin js-increase-product-quantity",
                buttonup_class: "btn btn-touchspin js-touchspin js-decrease-product-quantity",
                min: parseInt((0, s.default)(e).attr("min"), 10),
                max: 1e6
            })
        }), f.switchErrorStat()
    }
    var r = i(0),
        s = n(r),
        a = i(1),
        l = n(a);
    l.default.cart = l.default.cart || {}, l.default.cart.active_inputs = null;
    var c = 'input[name="product-quantity-spin"]',
        u = !1,
        d = !1,
        h = "";
    (0, s.default)(document).ready(function() {
        function t(t) {
            return "on.startupspin" === t || "on.startdownspin" === t
        }
        function e(t) {
            return "on.startupspin" === t
        }
        function i(t) {
            var e = t.parents(".bootstrap-touchspin").find(p);
            return e.is(":focus") ? null : e
        }
        function n(t) {
            var e = t.split("-"),
                i = void 0,
                n = void 0,
                o = "";
            for (i = 0; i < e.length; i++)
                n = e[i], 0 !== i && (n = n.substring(0, 1).toUpperCase() + n.substring(1)), o += n;
            return o
        }
        function r(o, r) {
            if (!t(r))
                return {
                    url: o.attr("href"),
                    type: n(o.data("link-action"))
                };
            var s = i(o);
            if (s) {
                return e(r) ? {
                    url: s.data("up-url"),
                    type: "increaseProductQuantity"
                } : {
                    url: s.data("down-url"),
                    type: "decreaseProductQuantity"
                }
            }
        }
        function a(t, e, i) {
            return v(), s.default.ajax({
                url: t,
                method: "POST",
                data: e,
                dataType: "json",
                beforeSend: function(t) {
                    g.push(t)
                }
            }).then(function(t) {
                f.checkUpdateOpertation(t), i.val(t.quantity);
                var e;
                e = i && i.dataset ? i.dataset : t, l.default.emit("updateCart", {
                    reason: e
                })
            }).fail(function(t) {
                l.default.emit("handleError", {
                    eventType: "updateProductQuantityInCart",
                    resp: t
                })
            })
        }
        function u(t) {
            return {
                ajax: "1",
                qty: Math.abs(t),
                action: "update",
                op: d(t)
            }
        }
        function d(t) {
            return t > 0 ? "up" : "down"
        }
        function h(t) {
            var e = (0, s.default)(t.currentTarget),
                i = e.data("update-url"),
                n = e.attr("value"),
                o = e.val();
            if (o != parseInt(o) || o < 0 || isNaN(o))
                return void e.val(n);
            var r = o - n;
            if (0 != r) {
                a(i, u(r), e)
            }
        }
        var p = ".js-cart-line-product-quantity",
            g = [];
        l.default.on("updateCart", function() {
            (0, s.default)(".quickview").modal("hide")
        }), l.default.on("updatedCart", function() {
            o()
        }), o();
        var m = (0, s.default)("body"),
            v = function() {
                for (var t; g.length > 0;)
                    t = g.pop(), t.abort()
            },
            y = function(t) {
                return (0, s.default)(t.parents(".bootstrap-touchspin").find("input"))
            },
            _ = function(t) {
                t.preventDefault();
                var e = (0, s.default)(t.currentTarget),
                    i = t.currentTarget.dataset,
                    n = r(e, t.namespace),
                    o = {
                        ajax: "1",
                        action: "update"
                    };
                void 0 !== n && (v(), s.default.ajax({
                    url: n.url,
                    method: "POST",
                    data: o,
                    dataType: "json",
                    beforeSend: function(t) {
                        g.push(t)
                    }
                }).then(function(t) {
                    f.checkUpdateOpertation(t), y(e).val(t.quantity), l.default.emit("updateCart", {
                        reason: i
                    })
                }).fail(function(t) {
                    l.default.emit("handleError", {
                        eventType: "updateProductInCart",
                        resp: t,
                        cartAction: n.type
                    })
                }))
            };
        m.on("click", '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', _), m.on("touchspin.on.startdownspin", c, _), m.on("touchspin.on.startupspin", c, _), m.on("focusout", p, function(t) {
            h(t)
        }), m.on("keyup", p, function(t) {
            13 == t.keyCode && h(t)
        }), m.on("click", ".js-discount .code", function(t) {
            t.stopPropagation();
            var e = (0, s.default)(t.currentTarget);
            return (0, s.default)("[name=discount_name]").val(e.text()), !1
        })
    });
    var f = {
        switchErrorStat: function() {
            var t = (0, s.default)(".checkout a");
            if (((0, s.default)("#notifications article.alert-danger").length || "" !== h && !u) && t.addClass("disabled"), "" !== h) {
                var e = ' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>' + h + "</li></ul></article>";
                (0, s.default)("#notifications .container").html(e), h = "", d = !1, u && t.removeClass("disabled")
            } else
                !u && d && (u = !1, d = !1, (0, s.default)("#notifications .container").html(""), t.removeClass("disabled"))
        },
        checkUpdateOpertation: function(t) {
            u = t.hasOwnProperty("hasError");
            var e = t.errors || "";
            h = e instanceof Array ? e.join(" ") : e, d = !0
        }
    }
}, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o() {
        0 !== (0, s.default)(".js-cancel-address").length && (0, s.default)(".checkout-step:not(.js-current-step) .step-title").addClass("not-allowed"), (0, s.default)(".js-terms a").on("click", function(t) {
            t.preventDefault();
            var e = (0, s.default)(t.target).attr("href");
            e && (e += "?content_only=1", s.default.get(e, function(t) {
                (0, s.default)("#modal").find(".js-modal-content").html((0, s.default)(t).find(".page-cms").contents())
            }).fail(function(t) {
                l.default.emit("handleError", {
                    eventType: "clickTerms",
                    resp: t
                })
            })), (0, s.default)("#modal").modal("show")
        }), (0, s.default)(".js-gift-checkbox").on("click", function(t) {
            (0, s.default)("#gift").collapse("toggle")
        })
    }
    var r = i(0),
        s = n(r),
        a = i(1),
        l = n(a);
    (0, s.default)(document).ready(function() {
        1 === (0, s.default)("body#checkout").length && o(), l.default.on("updatedDeliveryForm", function(t) {
            void 0 !== t.deliveryOption && 0 !== t.deliveryOption.length && ((0, s.default)(".carrier-extra-content").hide(), t.deliveryOption.next(".carrier-extra-content").slideDown())
        })
    })
}, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = i(1),
        r = n(o),
        s = i(0),
        a = n(s);
    r.default.blockcart = r.default.blockcart || {}, r.default.blockcart.showModal = function(t) {
        function e() {
            return (0, a.default)("#blockcart-modal")
        }
        var i = e();
        i.length && i.remove(), (0, a.default)("body").append(t), i = e(), i.modal("show").on("hidden.bs.modal", function(t) {
            r.default.emit("updateProduct", {
                reason: t.currentTarget.dataset
            })
        })
    }
}, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = i(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        a = function() {
            function t(e) {
                n(this, t), this.el = e
            }
            return o(t, [{
                key: "init",
                value: function() {
                    this.el.on("show.bs.dropdown", function(t, e) {
                        e ? (0, s.default)("#" + e).find(".dropdown-menu").first().stop(!0, !0).slideDown() : (0, s.default)(t.target).find(".dropdown-menu").first().stop(!0, !0).slideDown()
                    }), this.el.on("hide.bs.dropdown", function(t, e) {
                        e ? (0, s.default)("#" + e).find(".dropdown-menu").first().stop(!0, !0).slideUp() : (0, s.default)(t.target).find(".dropdown-menu").first().stop(!0, !0).slideUp()
                    }), this.el.find("select.link").each(function(t, e) {
                        (0, s.default)(e).on("change", function(t) {
                            window.location = (0, s.default)(this).val()
                        })
                    })
                }
            }]), t
        }();
    e.default = a, t.exports = e.default
}, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = i(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        a = function() {
            function t() {
                n(this, t)
            }
            return o(t, [{
                key: "init",
                value: function() {
                    this.parentFocus(), this.togglePasswordVisibility()
                }
            }, {
                key: "parentFocus",
                value: function() {
                    (0, s.default)(".js-child-focus").focus(function() {
                        (0, s.default)(this).closest(".js-parent-focus").addClass("focus")
                    }), (0, s.default)(".js-child-focus").focusout(function() {
                        (0, s.default)(this).closest(".js-parent-focus").removeClass("focus")
                    })
                }
            }, {
                key: "togglePasswordVisibility",
                value: function() {
                    (0, s.default)('button[data-action="show-password"]').on("click", function() {
                        var t = (0, s.default)(this).closest(".input-group").children("input.js-visible-password");
                        "password" === t.attr("type") ? (t.attr("type", "text"), (0, s.default)(this).text((0, s.default)(this).data("textHide"))) : (t.attr("type", "password"), (0, s.default)(this).text((0, s.default)(this).data("textShow")))
                    })
                }
            }]), t
        }();
    e.default = a, t.exports = e.default
}, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = i(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    i(3);
    var a = function() {
        function t() {
            n(this, t)
        }
        return o(t, [{
            key: "init",
            value: function() {
                var t = this,
                    e = (0, s.default)(".js-modal-arrows"),
                    i = (0, s.default)(".js-modal-product-images");
                (0, s.default)(".on-sale");
                (0, s.default)("body").on("click", ".js-modal-thumb", function(t) {
                    (0, s.default)(".js-modal-thumb").hasClass("selected") && (0, s.default)(".js-modal-thumb").removeClass("selected"), (0, s.default)(t.currentTarget).addClass("selected"), (0, s.default)(".js-modal-product-cover").attr("src", (0, s.default)(t.target).data("image-large-src")), (0, s.default)(".js-modal-product-cover").attr("title", (0, s.default)(t.target).attr("title")), (0, s.default)(".js-modal-product-cover").attr("alt", (0, s.default)(t.target).attr("alt"))
                }).on("click", "aside#thumbnails", function(t) {
                    "thumbnails" == t.target.id && (0, s.default)("#product-modal").modal("hide")
                }), (0, s.default)(".js-modal-product-images li").length <= 5 ? e.css("opacity", ".2") : e.on("click", function(e) {
                    (0, s.default)(e.target).hasClass("arrow-up") && i.position().top < 0 ? (t.move("up"), (0, s.default)(".js-modal-arrow-down").css("opacity", "1")) : (0, s.default)(e.target).hasClass("arrow-down") && i.position().top + i.height() > (0, s.default)(".js-modal-mask").height() && (t.move("down"), (0, s.default)(".js-modal-arrow-up").css("opacity", "1"))
                })
            }
        }, {
            key: "move",
            value: function(t) {
                var e = (0, s.default)(".js-modal-product-images"),
                    i = (0, s.default)(".js-modal-product-images li img").height() + 10,
                    n = e.position().top;
                e.velocity({
                    translateY: "up" === t ? n + i : n - i
                }, function() {
                    e.position().top >= 0 ? (0, s.default)(".js-modal-arrow-up").css("opacity", ".2") : e.position().top + e.height() <= (0, s.default)(".js-modal-mask").height() && (0, s.default)(".js-modal-arrow-down").css("opacity", ".2")
                })
            }
        }]), t
    }();
    e.default = a, t.exports = e.default
}, function(t, e, i) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = i(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        a = function() {
            function t() {
                n(this, t)
            }
            return o(t, [{
                key: "init",
                value: function() {
                    (0, s.default)("#megamenu").dcVerticalMegaMenu(), (0, s.default)("#tptnhtmlbox1 ul").rotator(), this.tptnExtras(), this.tptnCarousels()
                }
            }, {
                key: "tptnExtras",
                value: function() {
                    (TptnBackTop || TptnStickyLG || TptnStickySM) && ((0, s.default)(window).scroll(function() {
                        (0, s.default)(this).scrollTop() > 300 ? (TptnBackTop && (0, s.default)("#back-top").addClass("back-top-show"), TptnStickyLG && (0, s.default)(".header-bottom").addClass("sticky-header"), TptnStickySM && (0, s.default)(".mobile-header-bottom").addClass("sticky-header")) : (TptnBackTop && (0, s.default)("#back-top").removeClass("back-top-show"), TptnStickyLG && (0, s.default)(".header-bottom").removeClass("sticky-header"), TptnStickySM && (0, s.default)(".mobile-header-bottom").removeClass("sticky-header"))
                    }), TptnBackTop && (0, s.default)("#back-top").on("click", function(t) {
                        t.preventDefault(), (0, s.default)("body,html").animate({
                            scrollTop: 0
                        }, 500)
                    })), (0, s.default)("body").on("click", ".tptnmobilemenu .m-toggle", function(t) {
                        t.preventDefault(), (0, s.default)(".tptnmobilemenu .mobilemenu").addClass("menu-show"), (0, s.default)(".tptn-overlay").show()
                    }), (0, s.default)("body").on("click", ".tptnmobilemenu .mobilemenu-title, .tptn-overlay", function(t) {
                        t.preventDefault(), (0, s.default)(".tptnmobilemenu .mobilemenu").removeClass("menu-show"), (0, s.default)(".tptn-overlay").hide()
                    }), (0, s.default)("body").on("click", ".tptncart .m-toggle", function(t) {
                        t.preventDefault(), (0, s.default)(".tptncart").addClass("minicart-show"), (0, s.default)(".tptn-overlay").show()
                    }), (0, s.default)("body").on("click", ".tptncart .minicart-title, .tptn-overlay", function(t) {
                        t.preventDefault(), (0, s.default)(".tptncart").removeClass("minicart-show"), (0, s.default)(".tptn-overlay").hide()
                    })
                }
            }, {
                key: "tptnCarousels",
                value: function() {
                    (0, s.default)(".owlslider").owlCarousel({
                        items: 1,
                        autoplay: (0, s.default)("#tptnhomeslider").data("play"),
                        autoplayTimeout: (0, s.default)("#tptnhomeslider").data("speed"),
                        loop: !0,
                        dots: !1,
                        nav: !0,
                        navText: ["", ""]
                    }), (0, s.default)(".prodcrsl").owlCarousel({
                        autoplay: TptnCrslAutoplay,
                        nav: !0,
                        dots: !1,
                        navText: ["", ""],
                        responsive: {
                            0: {
                                items: 1
                            },
                            544: {
                                items: 2
                            },
                            992: {
                                items: 4
                            }
                        }
                    }), (0, s.default)(".brandcrsl").owlCarousel({
                        autoplay: TptnCrslAutoplay,
                        nav: !0,
                        dots: !1,
                        navText: ["", ""],
                        responsive: {
                            0: {
                                items: 2
                            },
                            544: {
                                items: 3
                            },
                            992: {
                                items: 5
                            }
                        }
                    }), (0, s.default)(".blogcrsl").owlCarousel({
                        autoplay: TptnCrslAutoplay,
                        nav: !0,
                        dots: !1,
                        navText: ["", ""],
                        responsive: {
                            0: {
                                items: 1
                            },
                            640: {
                                items: 2
                            },
                            992: {
                                items: 3
                            }
                        }
                    })
                }
            }]), t
        }();
    e.default = a, t.exports = e.default
}, function(t, e, i) {
    "use strict";
    $(document).ready(function() {
        var t = ".tptnsearch .search-form, .tptn-overlay";
        $(".tptnsearch .search-btn").on("click", function() {
            $(t).show()
        }), $(".tptnsearch .search-close, .tptn-overlay").on("click", function() {
            $(t).hide()
        });
        var e;
        $("#input_search").keyup(function() {
            clearTimeout(e), e = setTimeout(function() {
                var t = $("#input_search").val();
                $.ajax({
                    type: "GET",
                    url: prestashop.urls.base_url + "modules/tptnsearch/tptnsearch-ajax.php",
                    headers: {
                        "cache-control": "no-cache"
                    },
                    async: !0,
                    data: "search_key=" + t,
                    success: function(t) {
                        $("#search_popup").innerHTML = t
                    }
                }).done(function(t) {
                    $("#search_popup").html(t)
                })
            }, 1e3)
        }), $("html").click(function() {
            $("#search_popup").html("")
        }), $("#search_popup").click(function(t) {
            t.stopPropagation()
        })
    })
}, function(t, e, i) {
    "use strict";
    $(document).ready(function() {
        $(".tptn-config-switch").click(function() {
            return $(this).hasClass("config-close") ? ($(".tptn-config-inner").hide(), $(this).removeClass("config-close"), $.cookie("ckconfigclose", 0)) : ($(".tptn-config-inner").show(), $(this).addClass("config-close"), $.cookie("ckconfigclose", 1)), !1
        }), 0 == $.cookie("ckconfigclose") ? ($(".tptn-config-inner").css("display", "none"), $(".tptn-config-switch").removeClass("config-close")) : 1 == $.cookie("ckconfigclose") && ($(".tptn-config-inner").css("display", "block"), $(".tptn-config-switch").addClass("config-close"));
        var t;
        t = $.cookie("ckbodybkg") ? $.cookie("ckbodybkg") : tptnbodybkg_default, $("#bodybkg-input").colpick({
            color: t,
            onShow: function(t) {
                return $(t).show(), !1
            },
            onHide: function(t) {
                return $(t).hide(), !1
            },
            onChange: function(t, e, i) {
                $("#wrapper").css("background-color", "#" + e), $("#bodybkg-input").css("background-color", "#" + e), $(".apply").click(function() {
                    $.cookie("ckbodybkg", e)
                })
            }
        });
        var e;
        e = $.cookie("cktopbkg") ? $.cookie("cktopbkg") : tptntopbkg_default, $("#topbkg-input").colpick({
            color: e,
            onShow: function(t) {
                return $(t).show(), !1
            },
            onHide: function(t) {
                return $(t).hide(), !1
            },
            onChange: function(t, e, i) {
                $("#header .header-bottom, #header .mobile-header-bottom").css("background-color", "#" + e), $("#topbkg-input").css("background-color", "#" + e), $(".apply").click(function() {
                    $.cookie("cktopbkg", e)
                })
            }
        });
        var i;
        i = $.cookie("cktitlebkg") ? $.cookie("cktitlebkg") : tptntitlebkg_default, $("#titlebkg-input").colpick({
            color: i,
            onShow: function(t) {
                return $(t).show(), !1
            },
            onHide: function(t) {
                return $(t).hide(), !1
            },
            onChange: function(t, e, i) {
                $("#header .desktopmenu-title, #header .mobilemenu-title").css("background-color", "#" + e), $("#titlebkg-input").css("background-color", "#" + e), $(".apply").click(function() {
                    $.cookie("cktitlebkg", e)
                })
            }
        });
        var n;
        n = $.cookie("ckcartbkg") ? $.cookie("ckcartbkg") : tptncartbkg_default, $("#cartbkg-input").colpick({
            color: n,
            onShow: function(t) {
                return $(t).show(), !1
            },
            onHide: function(t) {
                return $(t).hide(), !1
            },
            onChange: function(t, e, i) {
                $("#_desktop_blockcart-wrapper .m-toggle, .tptncart .minicart-title").css("background-color", "#" + e), $("#cartbkg-input").css("background-color", "#" + e), $(".apply").click(function() {
                    $.cookie("ckcartbkg", e)
                })
            }
        });
        var o;
        o = $.cookie("ckpnameclr") ? $.cookie("ckpnameclr") : tptnpnameclr_default, $("#pnameclr-input").colpick({
            color: o,
            onShow: function(t) {
                return $(t).show(), !1
            },
            onHide: function(t) {
                return $(t).hide(), !1
            },
            onChange: function(t, e, i) {
                $(".product-title a").css({
                    color: "#" + e
                }), $("#pnameclr-input").css("background-color", "#" + e), $(".apply").click(function() {
                    $.cookie("ckpnameclr", e)
                })
            }
        });
        var r;
        r = $.cookie("ckpriceclr") ? $.cookie("ckpriceclr") : tptnpriceclr_default, $("#priceclr-input").colpick({
            color: r,
            onShow: function(t) {
                return $(t).show(), !1
            },
            onHide: function(t) {
                return $(t).hide(), !1
            },
            onChange: function(t, e, i) {
                $(".product-price-and-shipping .price, .product-price").css({
                    color: "#" + e
                }), $("#priceclr-input").css("background-color", "#" + e), $(".apply").click(function() {
                    $.cookie("ckpriceclr", e)
                })
            }
        });
        var s;
        s = $.cookie("cknewbkg") ? $.cookie("cknewbkg") : tptnnewbkg_default, $("#newbkg-input").colpick({
            color: s,
            onShow: function(t) {
                return $(t).show(), !1
            },
            onHide: function(t) {
                return $(t).hide(), !1
            },
            onChange: function(t, e, i) {
                $(".product-flags .new").css("background-color", "#" + e), $("#newbkg-input").css("background-color", "#" + e), $(".apply").click(function() {
                    $.cookie("cknewbkg", e)
                })
            }
        });
        var a;
        a = $.cookie("cksalebkg") ? $.cookie("cksalebkg") : tptnsalebkg_default, $("#salebkg-input").colpick({
            color: a,
            onShow: function(t) {
                return $(t).show(), !1
            },
            onHide: function(t) {
                return $(t).hide(), !1
            },
            onChange: function(t, e, i) {
                $(".product-flags .discount, .product-flags .on-sale").css("background-color", "#" + e), $("#salebkg-input").css("background-color", "#" + e), $(".apply").click(function() {
                    $.cookie("cksalebkg", e)
                })
            }
        });
        var l;
        l = $.cookie("ckbtnbkg") ? $.cookie("ckbtnbkg") : tptnbtnbkg_default, $("#btnbkg-input").colpick({
            color: l,
            onShow: function(t) {
                return $(t).show(), !1
            },
            onHide: function(t) {
                return $(t).hide(), !1
            },
            onChange: function(t, e, i) {
                $(".btn-primary").css("background-color", "#" + e), $("#btnbkg-input").css("background-color", "#" + e), $(".apply").click(function() {
                    $.cookie("ckbtnbkg", e)
                })
            }
        }), $(".reset").click(function() {
            $.cookie("ckbodybkg", null), $.cookie("cktopbkg", null), $.cookie("cktitlebkg", null), $.cookie("ckcartbkg", null), $.cookie("ckpnameclr", null), $.cookie("ckpriceclr", null), $.cookie("cknewbkg", null), $.cookie("cksalebkg", null), $.cookie("ckbtnbkg", null)
        })
    })
}, function(t, e, i) {
    "use strict";
    function n() {
        (0, s.default)("#order-return-form table thead input[type=checkbox]").on("click", function() {
            var t = (0, s.default)(this).prop("checked");
            (0, s.default)("#order-return-form table tbody input[type=checkbox]").each(function(e, i) {
                (0, s.default)(i).prop("checked", t)
            })
        })
    }
    function o() {
        (0, s.default)("body#order-detail") && n()
    }
    var r = i(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    (0, s.default)(document).ready(o)
}, function(t, e, i) {
    "use strict";
    !function(t) {
        var e = 0,
            i = function(e, i) {
                this.options = i, this.$elementFilestyle = [], this.$element = t(e)
            };
        i.prototype = {
            clear: function() {
                this.$element.val(""), this.$elementFilestyle.find(":text").val(""), this.$elementFilestyle.find(".badge").remove()
            },
            destroy: function() {
                this.$element.removeAttr("style").removeData("filestyle"), this.$elementFilestyle.remove()
            },
            disabled: function(t) {
                if (!0 === t)
                    this.options.disabled || (this.$element.attr("disabled", "true"), this.$elementFilestyle.find("label").attr("disabled", "true"), this.options.disabled = !0);
                else {
                    if (!1 !== t)
                        return this.options.disabled;
                    this.options.disabled && (this.$element.removeAttr("disabled"), this.$elementFilestyle.find("label").removeAttr("disabled"), this.options.disabled = !1)
                }
            },
            buttonBefore: function(t) {
                if (!0 === t)
                    this.options.buttonBefore || (this.options.buttonBefore = !0, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()));
                else {
                    if (!1 !== t)
                        return this.options.buttonBefore;
                    this.options.buttonBefore && (this.options.buttonBefore = !1, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()))
                }
            },
            icon: function(t) {
                if (!0 === t)
                    this.options.icon || (this.options.icon = !0, this.$elementFilestyle.find("label").prepend(this.htmlIcon()));
                else {
                    if (!1 !== t)
                        return this.options.icon;
                    this.options.icon && (this.options.icon = !1, this.$elementFilestyle.find(".icon-span-filestyle").remove())
                }
            },
            input: function(t) {
                if (!0 === t)
                    this.options.input || (this.options.input = !0, this.options.buttonBefore ? this.$elementFilestyle.append(this.htmlInput()) : this.$elementFilestyle.prepend(this.htmlInput()), this.$elementFilestyle.find(".badge").remove(), this.pushNameFiles(), this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));
                else {
                    if (!1 !== t)
                        return this.options.input;
                    if (this.options.input) {
                        this.options.input = !1, this.$elementFilestyle.find(":text").remove();
                        var e = this.pushNameFiles();
                        e.length > 0 && this.options.badge && this.$elementFilestyle.find("label").append(' <span class="badge">' + e.length + "</span>"), this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")
                    }
                }
            },
            size: function(t) {
                if (void 0 === t)
                    return this.options.size;
                var e = this.$elementFilestyle.find("label"),
                    i = this.$elementFilestyle.find("input");
                e.removeClass("btn-lg btn-sm"), i.removeClass("input-lg input-sm"), "nr" != t && (e.addClass("btn-" + t), i.addClass("input-" + t))
            },
            placeholder: function(t) {
                if (void 0 === t)
                    return this.options.placeholder;
                this.options.placeholder = t, this.$elementFilestyle.find("input").attr("placeholder", t)
            },
            buttonText: function(t) {
                if (void 0 === t)
                    return this.options.buttonText;
                this.options.buttonText = t, this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText)
            },
            buttonName: function(t) {
                if (void 0 === t)
                    return this.options.buttonName;
                this.options.buttonName = t, this.$elementFilestyle.find("label").attr({
                    class: "btn " + this.options.buttonName
                })
            },
            iconName: function(t) {
                if (void 0 === t)
                    return this.options.iconName;
                this.$elementFilestyle.find(".icon-span-filestyle").attr({
                    class: "icon-span-filestyle " + this.options.iconName
                })
            },
            htmlIcon: function() {
                return this.options.icon ? '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ' : ""
            },
            htmlInput: function() {
                return this.options.input ? '<input type="text" class="form-control ' + ("nr" == this.options.size ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ' : ""
            },
            pushNameFiles: function() {
                var t = "",
                    e = [];
                void 0 === this.$element[0].files ? e[0] = {
                    name: this.$element[0] && this.$element[0].value
                } : e = this.$element[0].files;
                for (var i = 0; i < e.length; i++)
                    t += e[i].name.split("\\").pop() + ", ";
                return "" !== t ? this.$elementFilestyle.find(":text").val(t.replace(/\, $/g, "")) : this.$elementFilestyle.find(":text").val(""), e
            },
            constructor: function() {
                var i = this,
                    n = "",
                    o = i.$element.attr("id"),
                    r = "";
                "" !== o && o || (o = "filestyle-" + e, i.$element.attr({
                    id: o
                }), e++), r = '<span class="group-span-filestyle ' + (i.options.input ? "input-group-btn" : "") + '"><label for="' + o + '" class="btn ' + i.options.buttonName + " " + ("nr" == i.options.size ? "" : "btn-" + i.options.size) + '" ' + (i.options.disabled ? 'disabled="true"' : "") + ">" + i.htmlIcon() + '<span class="buttonText">' + i.options.buttonText + "</span></label></span>", n = i.options.buttonBefore ? r + i.htmlInput() : i.htmlInput() + r, i.$elementFilestyle = t('<div class="bootstrap-filestyle input-group">' + n + "</div>"), i.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function(t) {
                    if (13 === t.keyCode || 32 === t.charCode)
                        return i.$elementFilestyle.find("label").click(), !1
                }), i.$element.css({
                    position: "absolute",
                    clip: "rect(0px 0px 0px 0px)"
                }).attr("tabindex", "-1").after(i.$elementFilestyle), i.options.disabled && i.$element.attr("disabled", "true"), i.$element.change(function() {
                    var t = i.pushNameFiles();
                    0 == i.options.input && i.options.badge ? 0 == i.$elementFilestyle.find(".badge").length ? i.$elementFilestyle.find("label").append(' <span class="badge">' + t.length + "</span>") : 0 == t.length ? i.$elementFilestyle.find(".badge").remove() : i.$elementFilestyle.find(".badge").html(t.length) : i.$elementFilestyle.find(".badge").remove()
                }), window.navigator.userAgent.search(/firefox/i) > -1 && i.$elementFilestyle.find("label").click(function() {
                    return i.$element.click(), !1
                })
            }
        };
        var n = t.fn.filestyle;
        t.fn.filestyle = function(e, n) {
            var o = "",
                r = this.each(function() {
                    if ("file" === t(this).attr("type")) {
                        var r = t(this),
                            s = r.data("filestyle"),
                            a = t.extend({}, t.fn.filestyle.defaults, e, "object" == typeof e && e);
                        s || (r.data("filestyle", s = new i(this, a)), s.constructor()), "string" == typeof e && (o = s[e](n))
                    }
                });
            return void 0 !== typeof o ? o : r
        }, t.fn.filestyle.defaults = {
            buttonText: "Choose file",
            iconName: "glyphicon glyphicon-folder-open",
            buttonName: "btn-default",
            size: "nr",
            input: !0,
            badge: !0,
            icon: !0,
            buttonBefore: !1,
            disabled: !1,
            placeholder: ""
        }, t.fn.filestyle.noConflict = function() {
            return t.fn.filestyle = n, this
        }, t(function() {
            t(".filestyle").each(function() {
                var e = t(this),
                    i = {
                        input: "false" !== e.attr("data-input"),
                        icon: "false" !== e.attr("data-icon"),
                        buttonBefore: "true" === e.attr("data-buttonBefore"),
                        disabled: "true" === e.attr("data-disabled"),
                        size: e.attr("data-size"),
                        buttonText: e.attr("data-buttonText"),
                        buttonName: e.attr("data-buttonName"),
                        iconName: e.attr("data-iconName"),
                        badge: "false" !== e.attr("data-badge"),
                        placeholder: e.attr("data-placeholder")
                    };
                e.filestyle(i)
            })
        })
    }(window.jQuery)
}, function(t, e, i) {
    "use strict";
    !function(t) {
        var e = function() {
                var e = {
                        showEvent: "click",
                        onShow: function() {},
                        onBeforeShow: function() {},
                        onHide: function() {},
                        onChange: function() {},
                        onSubmit: function() {},
                        colorScheme: "light",
                        color: "3289c7",
                        livePreview: !0,
                        flat: !1,
                        layout: "hex",
                        submit: 0,
                        submitText: "OK",
                        height: 156
                    },
                    i = function(e, i) {
                        var n = r(e);
                        t(i).data("colpick").fields.eq(1).val(n.r).end().eq(2).val(n.g).end().eq(3).val(n.b).end()
                    },
                    s = function(e, i) {
                        t(i).data("colpick").fields.eq(4).val(Math.round(e.h)).end().eq(5).val(Math.round(e.s)).end().eq(6).val(Math.round(e.b)).end()
                    },
                    l = function(e, i) {
                        t(i).data("colpick").fields.eq(0).val(a(e))
                    },
                    c = function(e, i) {
                        t(i).data("colpick").selector.css("backgroundColor", "#" + a({
                            h: e.h,
                            s: 100,
                            b: 100
                        })), t(i).data("colpick").selectorIndic.css({
                            left: parseInt(t(i).data("colpick").height * e.s / 100, 10),
                            top: parseInt(t(i).data("colpick").height * (100 - e.b) / 100, 10)
                        })
                    },
                    u = function(e, i) {
                        t(i).data("colpick").hue.css("top", parseInt(t(i).data("colpick").height - t(i).data("colpick").height * e.h / 360, 10))
                    },
                    d = function(e, i) {
                        t(i).data("colpick").currentColor.css("backgroundColor", "#" + a(e))
                    },
                    h = function(e, i) {
                        t(i).data("colpick").newColor.css("backgroundColor", "#" + a(e))
                    },
                    f = function(e) {
                        var d,
                            f = t(this).parent().parent();
                        this.parentNode.className.indexOf("_hex") > 0 ? (f.data("colpick").color = d = n(D(this.value)), i(d, f.get(0)), s(d, f.get(0))) : this.parentNode.className.indexOf("_hsb") > 0 ? (f.data("colpick").color = d = I({
                            h: parseInt(f.data("colpick").fields.eq(4).val(), 10),
                            s: parseInt(f.data("colpick").fields.eq(5).val(), 10),
                            b: parseInt(f.data("colpick").fields.eq(6).val(), 10)
                        }), i(d, f.get(0)), l(d, f.get(0))) : (f.data("colpick").color = d = o(O({
                            r: parseInt(f.data("colpick").fields.eq(1).val(), 10),
                            g: parseInt(f.data("colpick").fields.eq(2).val(), 10),
                            b: parseInt(f.data("colpick").fields.eq(3).val(), 10)
                        })), l(d, f.get(0)), s(d, f.get(0))), c(d, f.get(0)), u(d, f.get(0)), h(d, f.get(0)), f.data("colpick").onChange.apply(f.parent(), [d, a(d), r(d), f.data("colpick").el, 0])
                    },
                    p = function(e) {
                        t(this).parent().removeClass("colpick_focus")
                    },
                    g = function() {
                        t(this).parent().parent().data("colpick").fields.parent().removeClass("colpick_focus"), t(this).parent().addClass("colpick_focus")
                    },
                    m = function(e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                        var i = t(this).parent().find("input").focus(),
                            n = {
                                el: t(this).parent().addClass("colpick_slider"),
                                max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,
                                y: e.pageY,
                                field: i,
                                val: parseInt(i.val(), 10),
                                preview: t(this).parent().parent().data("colpick").livePreview
                            };
                        t(document).mouseup(n, y), t(document).mousemove(n, v)
                    },
                    v = function(t) {
                        return t.data.field.val(Math.max(0, Math.min(t.data.max, parseInt(t.data.val - t.pageY + t.data.y, 10)))), t.data.preview && f.apply(t.data.field.get(0), [!0]), !1
                    },
                    y = function e(i) {
                        return f.apply(i.data.field.get(0), [!0]), i.data.el.removeClass("colpick_slider").find("input").focus(), t(document).off("mouseup", e), t(document).off("mousemove", v), !1
                    },
                    _ = function(e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                        var i = {
                            cal: t(this).parent(),
                            y: t(this).offset().top
                        };
                        t(document).on("mouseup touchend", i, w), t(document).on("mousemove touchmove", i, b);
                        var n = "touchstart" == e.type ? e.originalEvent.changedTouches[0].pageY : e.pageY;
                        return f.apply(i.cal.data("colpick").fields.eq(4).val(parseInt(360 * (i.cal.data("colpick").height - (n - i.y)) / i.cal.data("colpick").height, 10)).get(0), [i.cal.data("colpick").livePreview]), !1
                    },
                    b = function(t) {
                        var e = "touchmove" == t.type ? t.originalEvent.changedTouches[0].pageY : t.pageY;
                        return f.apply(t.data.cal.data("colpick").fields.eq(4).val(parseInt(360 * (t.data.cal.data("colpick").height - Math.max(0, Math.min(t.data.cal.data("colpick").height, e - t.data.y))) / t.data.cal.data("colpick").height, 10)).get(0), [t.data.preview]), !1
                    },
                    w = function e(n) {
                        return i(n.data.cal.data("colpick").color, n.data.cal.get(0)), l(n.data.cal.data("colpick").color, n.data.cal.get(0)), t(document).off("mouseup touchend", e), t(document).off("mousemove touchmove", b), !1
                    },
                    x = function(e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                        var i = {
                            cal: t(this).parent(),
                            pos: t(this).offset()
                        };
                        i.preview = i.cal.data("colpick").livePreview, t(document).on("mouseup touchend", i, C), t(document).on("mousemove touchmove", i, S);
                        var n,
                            o;
                        return "touchstart" == e.type ? (n = e.originalEvent.changedTouches[0].pageX, o = e.originalEvent.changedTouches[0].pageY) : (n = e.pageX, o = e.pageY), f.apply(i.cal.data("colpick").fields.eq(6).val(parseInt(100 * (i.cal.data("colpick").height - (o - i.pos.top)) / i.cal.data("colpick").height, 10)).end().eq(5).val(parseInt(100 * (n - i.pos.left) / i.cal.data("colpick").height, 10)).get(0), [i.preview]), !1
                    },
                    S = function(t) {
                        var e,
                            i;
                        return "touchmove" == t.type ? (e = t.originalEvent.changedTouches[0].pageX, i = t.originalEvent.changedTouches[0].pageY) : (e = t.pageX, i = t.pageY), f.apply(t.data.cal.data("colpick").fields.eq(6).val(parseInt(100 * (t.data.cal.data("colpick").height - Math.max(0, Math.min(t.data.cal.data("colpick").height, i - t.data.pos.top))) / t.data.cal.data("colpick").height, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(t.data.cal.data("colpick").height, e - t.data.pos.left)) / t.data.cal.data("colpick").height, 10)).get(0), [t.data.preview]), !1
                    },
                    C = function e(n) {
                        return i(n.data.cal.data("colpick").color, n.data.cal.get(0)), l(n.data.cal.data("colpick").color, n.data.cal.get(0)), t(document).off("mouseup touchend", e), t(document).off("mousemove touchmove", S), !1
                    },
                    k = function(e) {
                        var i = t(this).parent(),
                            n = i.data("colpick").color;
                        i.data("colpick").origColor = n, d(n, i.get(0)), i.data("colpick").onSubmit(n, a(n), r(n), i.data("colpick").el)
                    },
                    E = function(e) {
                        e.stopPropagation();
                        var i = t("#" + t(this).data("colpickId"));
                        i.data("colpick").onBeforeShow.apply(this, [i.get(0)]);
                        var n = t(this).offset(),
                            o = n.top + this.offsetHeight,
                            r = n.left,
                            s = A(),
                            a = i.width();
                        r + a > s.l + s.w && (r -= a), i.css({
                            left: r + "px",
                            top: o + "px"
                        }), 0 != i.data("colpick").onShow.apply(this, [i.get(0)]) && i.show(), t("html").mousedown({
                            cal: i
                        }, T), i.mousedown(function(t) {
                            t.stopPropagation()
                        })
                    },
                    T = function e(i) {
                        0 != i.data.cal.data("colpick").onHide.apply(this, [i.data.cal.get(0)]) && i.data.cal.hide(), t("html").off("mousedown", e)
                    },
                    A = function() {
                        var t = "CSS1Compat" == document.compatMode;
                        return {
                            l: window.pageXOffset || (t ? document.documentElement.scrollLeft : document.body.scrollLeft),
                            w: window.innerWidth || (t ? document.documentElement.clientWidth : document.body.clientWidth)
                        }
                    },
                    I = function(t) {
                        return {
                            h: Math.min(360, Math.max(0, t.h)),
                            s: Math.min(100, Math.max(0, t.s)),
                            b: Math.min(100, Math.max(0, t.b))
                        }
                    },
                    O = function(t) {
                        return {
                            r: Math.min(255, Math.max(0, t.r)),
                            g: Math.min(255, Math.max(0, t.g)),
                            b: Math.min(255, Math.max(0, t.b))
                        }
                    },
                    D = function(t) {
                        var e = 6 - t.length;
                        if (e > 0) {
                            for (var i = [], n = 0; n < e; n++)
                                i.push("0");
                            i.push(t), t = i.join("")
                        }
                        return t
                    },
                    P = function() {
                        var e = t(this).parent(),
                            n = e.data("colpick").origColor;
                        e.data("colpick").color = n, i(n, e.get(0)), l(n, e.get(0)), s(n, e.get(0)), c(n, e.get(0)), u(n, e.get(0)), h(n, e.get(0))
                    };
                return {
                    init: function(r) {
                        if (r = t.extend({}, e, r || {}), "string" == typeof r.color)
                            r.color = n(r.color);
                        else if (void 0 != r.color.r && void 0 != r.color.g && void 0 != r.color.b)
                            r.color = o(r.color);
                        else {
                            if (void 0 == r.color.h || void 0 == r.color.s || void 0 == r.color.b)
                                return this;
                            r.color = I(r.color)
                        }
                        return this.each(function() {
                            if (!t(this).data("colpickId")) {
                                var e = t.extend({}, r);
                                e.origColor = r.color;
                                var n = "collorpicker_" + parseInt(1e3 * Math.random());
                                t(this).data("colpickId", n);
                                var o = t('<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>').attr("id", n);
                                o.addClass("colpick_" + e.layout + (e.submit ? "" : " colpick_" + e.layout + "_ns")), "light" != e.colorScheme && o.addClass("colpick_" + e.colorScheme), o.find("div.colpick_submit").html(e.submitText).click(k), e.fields = o.find("input").change(f).blur(p).focus(g), o.find("div.colpick_field_arrs").mousedown(m).end().find("div.colpick_current_color").click(P), e.selector = o.find("div.colpick_color").on("mousedown touchstart", x), e.selectorIndic = e.selector.find("div.colpick_selector_outer"), e.el = this, e.hue = o.find("div.colpick_hue_arrs");
                                var a = e.hue.parent(),
                                    v = navigator.userAgent.toLowerCase(),
                                    y = "Microsoft Internet Explorer" === navigator.appName,
                                    b = y ? parseFloat(v.match(/msie ([0-9]{1,}[\.0-9]{0,})/)[1]) : 0,
                                    w = y && b < 10,
                                    S = ["#ff0000", "#ff0080", "#ff00ff", "#8000ff", "#0000ff", "#0080ff", "#00ffff", "#00ff80", "#00ff00", "#80ff00", "#ffff00", "#ff8000", "#ff0000"];
                                if (w) {
                                    var C,
                                        T;
                                    for (C = 0; C <= 11; C++)
                                        T = t("<div></div>").attr("style", "height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=" + S[C] + ", endColorstr=" + S[C + 1] + '); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=' + S[C] + ", endColorstr=" + S[C + 1] + ')";'), a.append(T)
                                } else {
                                    var A = S.join(",");
                                    a.attr("style", "background:-webkit-linear-gradient(top," + A + "); background: -o-linear-gradient(top," + A + "); background: -ms-linear-gradient(top," + A + "); background:-moz-linear-gradient(top," + A + "); -webkit-linear-gradient(top," + A + "); background:linear-gradient(to bottom," + A + "); ")
                                }
                                o.find("div.colpick_hue").on("mousedown touchstart", _), e.newColor = o.find("div.colpick_new_color"), e.currentColor = o.find("div.colpick_current_color"), o.data("colpick", e), i(e.color, o.get(0)), s(e.color, o.get(0)), l(e.color, o.get(0)), u(e.color, o.get(0)), c(e.color, o.get(0)), d(e.color, o.get(0)), h(e.color, o.get(0)), e.flat ? (o.appendTo(this).show(), o.css({
                                    position: "relative",
                                    display: "block"
                                })) : (o.appendTo(document.body), t(this).on(e.showEvent, E), o.css({
                                    position: "absolute"
                                }))
                            }
                        })
                    },
                    showPicker: function() {
                        return this.each(function() {
                            t(this).data("colpickId") && E.apply(this)
                        })
                    },
                    hidePicker: function() {
                        return this.each(function() {
                            t(this).data("colpickId") && t("#" + t(this).data("colpickId")).hide()
                        })
                    },
                    setColor: function(e, f) {
                        if (f = void 0 === f ? 1 : f, "string" == typeof e)
                            e = n(e);
                        else if (void 0 != e.r && void 0 != e.g && void 0 != e.b)
                            e = o(e);
                        else {
                            if (void 0 == e.h || void 0 == e.s || void 0 == e.b)
                                return this;
                            e = I(e)
                        }
                        return this.each(function() {
                            if (t(this).data("colpickId")) {
                                var n = t("#" + t(this).data("colpickId"));
                                n.data("colpick").color = e, n.data("colpick").origColor = e, i(e, n.get(0)), s(e, n.get(0)), l(e, n.get(0)), u(e, n.get(0)), c(e, n.get(0)), h(e, n.get(0)), n.data("colpick").onChange.apply(n.parent(), [e, a(e), r(e), n.data("colpick").el, 1]), f && d(e, n.get(0))
                            }
                        })
                    }
                }
            }(),
            i = function(t) {
                var t = parseInt(t.indexOf("#") > -1 ? t.substring(1) : t, 16);
                return {
                    r: t >> 16,
                    g: (65280 & t) >> 8,
                    b: 255 & t
                }
            },
            n = function(t) {
                return o(i(t))
            },
            o = function(t) {
                var e = {
                        h: 0,
                        s: 0,
                        b: 0
                    },
                    i = Math.min(t.r, t.g, t.b),
                    n = Math.max(t.r, t.g, t.b),
                    o = n - i;
                return e.b = n, e.s = 0 != n ? 255 * o / n : 0, 0 != e.s ? t.r == n ? e.h = (t.g - t.b) / o : t.g == n ? e.h = 2 + (t.b - t.r) / o : e.h = 4 + (t.r - t.g) / o : e.h = -1, e.h *= 60, e.h < 0 && (e.h += 360), e.s *= 100 / 255, e.b *= 100 / 255, e
            },
            r = function(t) {
                var e = {},
                    i = t.h,
                    n = 255 * t.s / 100,
                    o = 255 * t.b / 100;
                if (0 == n)
                    e.r = e.g = e.b = o;
                else {
                    var r = o,
                        s = (255 - n) * o / 255,
                        a = i % 60 * (r - s) / 60;
                    360 == i && (i = 0), i < 60 ? (e.r = r, e.b = s, e.g = s + a) : i < 120 ? (e.g = r, e.b = s, e.r = r - a) : i < 180 ? (e.g = r, e.r = s, e.b = s + a) : i < 240 ? (e.b = r, e.r = s, e.g = r - a) : i < 300 ? (e.b = r, e.g = s, e.r = s + a) : i < 360 ? (e.r = r, e.g = s, e.b = r - a) : (e.r = 0, e.g = 0, e.b = 0)
                }
                return {
                    r: Math.round(e.r),
                    g: Math.round(e.g),
                    b: Math.round(e.b)
                }
            },
            s = function(e) {
                var i = [e.r.toString(16), e.g.toString(16), e.b.toString(16)];
                return t.each(i, function(t, e) {
                    1 == e.length && (i[t] = "0" + e)
                }), i.join("")
            },
            a = function(t) {
                return s(r(t))
            };
        t.fn.extend({
            colpick: e.init,
            colpickHide: e.hidePicker,
            colpickShow: e.showPicker,
            colpickSetColor: e.setColor
        }), t.extend({
            colpick: {
                rgbToHex: s,
                rgbToHsb: o,
                hsbToHex: a,
                hsbToRgb: r,
                hexToHsb: n,
                hexToRgb: i
            }
        })
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    !function(t) {
        t.fn.dcVerticalMegaMenu = function(e) {
            var i = {
                    classParent: "tptn-mega",
                    arrow: !0,
                    classArrow: "material-icons",
                    classContainer: "sub-container",
                    classSubMenu: "sub",
                    classMega: "mega",
                    classSubParent: "mega-hdr",
                    classSubLink: "mega-hdr",
                    classRow: "tptnrow",
                    rowItems: 4,
                    speed: "fast",
                    effect: "slide",
                    direction: "right"
                },
                e = t.extend(i, e),
                n = this;
            return n.each(function(e) {
                function o() {
                    t(this).addClass("mega-hover");
                    var e = t("> a", this),
                        n = (t(".sub", this), t(".sub-container", this)),
                        o = n.width(),
                        r = n.outerHeight(!0),
                        s = n.height(),
                        l = t(this).outerHeight(!0),
                        c = e.offset(),
                        u = t(window).scrollTop();
                    c = c.top - u;
                    var d = t(window).height(),
                        h = d - c,
                        f = h - r - l;
                    if (f < 0) {
                        var p = f - l;
                        n.css({
                            marginTop: p + "px"
                        })
                    }
                    var g = {
                        right: a
                    };
                    "right" == i.direction && (g = {
                        left: a
                    }), "fade" == i.effect && n.css(g).fadeIn(i.speed), "show" == i.effect && n.css(g).show(), "slide" == i.effect && (n.css({
                        width: 0,
                        height: 0,
                        opacity: 0
                    }), "right" == i.direction ? n.show().css({
                        left: a
                    }) : n.show().css({
                        right: a
                    }), n.animate({
                        width: o,
                        height: s,
                        opacity: 1
                    }, i.speed))
                }
                function r() {
                    t(this).removeClass("mega-hover"), t(".sub-container", this).hide()
                }
                var s = t(this);
                "left" == i.direction ? s.addClass("left") : s.addClass("right");
                var a = s.width();
                t("> li", s).each(function() {
                    var e = t(this),
                        n = t("> ul", e);
                    if (n.length > 0) {
                        t("> a", e).addClass(i.classParent).append('<span class="' + i.classArrow + '"></span>'), n.addClass(i.classSubMenu).wrap('<div class="' + i.classContainer + '" />');
                        var o = t("." + i.classContainer, e);
                        if (t("ul", n).length > 0) {
                            e.addClass(i.classParent + "-li"), o.addClass(i.classMega), t("> li", n).each(function() {
                                t(this).addClass("mega-unit"), t("> ul", this).length ? (t(this).addClass(i.classSubParent), t("> a", this).addClass(i.classSubParent + "-a")) : (t(this).addClass(i.classSubLink), t("> a", this).addClass(i.classSubLink + "-a"))
                            });
                            for (var r = t(".mega-unit", e), s = parseInt(i.rowItems), a = 0; a < r.length; a += s)
                                r.slice(a, a + s).wrapAll('<div class="' + i.classRow + '" />');
                            var l = t(".mega-unit", n).outerWidth(!0),
                                c = t(".tptnrow:eq(0) .mega-unit", n).length,
                                u = l * c;
                            t(".tptnrow", this).each(function() {
                                t(".mega-unit:last", this).addClass("last"), t(this).css("width", u + "px")
                            });
                            var d = n.outerWidth(!0);
                            o.outerWidth(!0);
                            t(".tptnrow", n).each(function() {
                                var e = t(this).height();
                                t(this).parent(".tptnrow").css("height", e + "px")
                            }), t(".tptnrow:last", n).addClass("last"), t(".tptnrow:first", n).addClass("first")
                        } else
                            o.addClass("non-" + i.classMega)
                    }
                    var o = t("." + i.classContainer, e),
                        h = o.height();
                    o.css({
                        height: h + "px",
                        width: d + "px"
                    }).hide()
                });
                var l = {
                    sensitivity: 2,
                    interval: 0,
                    over: o,
                    timeout: 0,
                    out: r
                };
                t("li", n).hoverIntent(l)
            })
        }
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    !function(t) {
        t.fn.extend({
            rotator: function(e) {
                var i = {
                        fadeSpeed: 300,
                        pauseSpeed: 3e3,
                        child: null
                    },
                    e = t.extend(i, e);
                return this.each(function() {
                    var i = e,
                        n = t(this);
                    if (t(n.children(), n).each(function() {
                        t(this).hide()
                    }), i.child)
                        var o = i.child;
                    else
                        var o = t(n).children(":first");
                    t(o).fadeIn(i.fadeSpeed, function() {
                        t(o).delay(i.pauseSpeed).fadeOut(i.fadeSpeed, function() {
                            var e = t(this).next();
                            0 == e.length && (e = t(n).children(":first")), t(n).rotator({
                                child: e,
                                fadeSpeed: i.fadeSpeed,
                                pauseSpeed: i.pauseSpeed
                            })
                        })
                    })
                })
            }
        })
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    !function(t) {
        t.fn.scrollbox = function(e) {
            var i = {
                linear: !1,
                startDelay: 2,
                delay: 3,
                step: 5,
                speed: 32,
                switchItems: 1,
                direction: "vertical",
                distance: "auto",
                autoPlay: !0,
                onMouseOverPause: !0,
                paused: !1,
                queue: null,
                listElement: "ul",
                listItemElement: "li",
                infiniteLoop: !0,
                switchAmount: 0,
                afterForward: null,
                afterBackward: null,
                triggerStackable: !1
            };
            return e = t.extend(i, e), e.scrollOffset = "vertical" === e.direction ? "scrollTop" : "scrollLeft", e.queue && (e.queue = t("#" + e.queue)), this.each(function() {
                var i,
                    n,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d = t(this),
                    h = null,
                    f = null,
                    p = !1,
                    g = 0,
                    m = 0;
                e.onMouseOverPause && (d.bind("mouseover", function() {
                    p = !0
                }), d.bind("mouseout", function() {
                    p = !1
                })), i = d.children(e.listElement + ":first-child"), !1 === e.infiniteLoop && 0 === e.switchAmount && (e.switchAmount = i.children().length), a = function() {
                    if (!p) {
                        var o,
                            s,
                            a,
                            l,
                            c;
                        if (o = i.children(e.listItemElement + ":first-child"), l = "auto" !== e.distance ? e.distance : "vertical" === e.direction ? o.outerHeight(!0) : o.outerWidth(!0), e.linear ? a = Math.min(d[0][e.scrollOffset] + e.step, l) : (c = Math.max(3, parseInt(.3 * (l - d[0][e.scrollOffset]), 10)), a = Math.min(d[0][e.scrollOffset] + c, l)), d[0][e.scrollOffset] = a, a >= l) {
                            for (s = 0; s < e.switchItems; s++)
                                e.queue && e.queue.find(e.listItemElement).length > 0 ? (i.append(e.queue.find(e.listItemElement)[0]), i.children(e.listItemElement + ":first-child").remove()) : i.append(i.children(e.listItemElement + ":first-child")), ++g;
                            if (d[0][e.scrollOffset] = 0, clearInterval(h), h = null, t.isFunction(e.afterForward) && e.afterForward.call(d, {
                                switchCount: g,
                                currentFirstChild: i.children(e.listItemElement + ":first-child")
                            }), e.triggerStackable && 0 !== m)
                                return void n();
                            if (!1 === e.infiniteLoop && g >= e.switchAmount)
                                return;
                            e.autoPlay && (f = setTimeout(r, 1e3 * e.delay))
                        }
                    }
                }, l = function() {
                    if (!p) {
                        var o,
                            s,
                            a,
                            l,
                            c;
                        if (0 === d[0][e.scrollOffset]) {
                            for (s = 0; s < e.switchItems; s++)
                                i.children(e.listItemElement + ":last-child").insertBefore(i.children(e.listItemElement + ":first-child"));
                            o = i.children(e.listItemElement + ":first-child"), l = "auto" !== e.distance ? e.distance : "vertical" === e.direction ? o.height() : o.width(), d[0][e.scrollOffset] = l
                        }
                        if (e.linear ? a = Math.max(d[0][e.scrollOffset] - e.step, 0) : (c = Math.max(3, parseInt(.3 * d[0][e.scrollOffset], 10)), a = Math.max(d[0][e.scrollOffset] - c, 0)), d[0][e.scrollOffset] = a, 0 === a) {
                            if (--g, clearInterval(h), h = null, t.isFunction(e.afterBackward) && e.afterBackward.call(d, {
                                switchCount: g,
                                currentFirstChild: i.children(e.listItemElement + ":first-child")
                            }), e.triggerStackable && 0 !== m)
                                return void n();
                            e.autoPlay && (f = setTimeout(r, 1e3 * e.delay))
                        }
                    }
                }, n = function() {
                    0 !== m && (m > 0 ? (m--, f = setTimeout(r, 0)) : (m++, f = setTimeout(o, 0)))
                }, r = function() {
                    clearInterval(h), h = setInterval(a, e.speed)
                }, o = function() {
                    clearInterval(h), h = setInterval(l, e.speed)
                }, c = function() {
                    e.autoPlay = !0, p = !1, clearInterval(h), h = setInterval(a, e.speed)
                }, u = function() {
                    p = !0
                }, s = function(t) {
                    e.delay = t || e.delay, clearTimeout(f), e.autoPlay && (f = setTimeout(r, 1e3 * e.delay))
                }, e.autoPlay && (f = setTimeout(r, 1e3 * e.startDelay)), d.bind("resetClock", function(t) {
                    s(t)
                }), d.bind("forward", function() {
                    e.triggerStackable ? null !== h ? m++ : r() : (clearTimeout(f), r())
                }), d.bind("backward", function() {
                    e.triggerStackable ? null !== h ? m-- : o() : (clearTimeout(f), o())
                }), d.bind("pauseHover", function() {
                    u()
                }), d.bind("forwardHover", function() {
                    c()
                }), d.bind("speedUp", function(t, i) {
                    "undefined" === i && (i = Math.max(1, parseInt(e.speed / 2, 10))), e.speed = i
                }), d.bind("speedDown", function(t, i) {
                    "undefined" === i && (i = 2 * e.speed), e.speed = i
                }), d.bind("updateConfig", function(i, n) {
                    e = t.extend(e, n)
                })
            })
        }
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t) {
        (0, s.default)("#search_filters").replaceWith(t.rendered_facets), (0, s.default)("#js-active-search-filters").replaceWith(t.rendered_active_filters), (0, s.default)("#js-product-list-top").replaceWith(t.rendered_products_top), (0, s.default)("#js-product-list").replaceWith(t.rendered_products), (0, s.default)("#js-product-list-bottom").replaceWith(t.rendered_products_bottom), (new u.default).init()
    }
    var r = i(0),
        s = n(r),
        a = i(1),
        l = n(a);
    i(3);
    var c = i(2),
        u = n(c);
    (0, s.default)(document).ready(function() {
        l.default.on("clickQuickView", function(e) {
            var i = {
                action: "quickview",
                id_product: e.dataset.idProduct,
                id_product_attribute: e.dataset.idProductAttribute
            };
            s.default.post(l.default.urls.pages.product, i, null, "json").then(function(e) {
                (0, s.default)("body").append(e.quickview_html);
                var i = (0, s.default)("#quickview-modal-" + e.product.id + "-" + e.product.id_product_attribute);
                i.modal("show"), t(i), i.on("hidden.bs.modal", function() {
                    i.remove()
                })
            }).fail(function(t) {
                l.default.emit("handleError", {
                    eventType: "clickQuickView",
                    resp: t
                })
            })
        });
        var t = function(t) {
                var i = (0, s.default)(".js-arrows"),
                    n = t.find(".js-qv-product-images");
                (0, s.default)(".js-thumb").on("click", function(t) {
                    (0, s.default)(".js-thumb").hasClass("selected") && (0, s.default)(".js-thumb").removeClass("selected"), (0, s.default)(t.currentTarget).addClass("selected"), (0, s.default)(".js-qv-product-cover").attr("src", (0, s.default)(t.target).data("image-large-src"))
                }), n.find("li").length <= 4 ? i.hide() : i.on("click", function(t) {
                    (0, s.default)(t.target).hasClass("arrow-up") && (0, s.default)(".js-qv-product-images").position().top < 0 ? (e("up"), (0, s.default)(".arrow-down").css("opacity", "1")) : (0, s.default)(t.target).hasClass("arrow-down") && n.position().top + n.height() > (0, s.default)(".js-qv-mask").height() && (e("down"), (0, s.default)(".arrow-up").css("opacity", "1"))
                }), t.find("#quantity_wanted").TouchSpin({
                    verticalbuttons: !0,
                    verticalupclass: "material-icons touchspin-up",
                    verticaldownclass: "material-icons touchspin-down",
                    buttondown_class: "btn btn-touchspin js-touchspin",
                    buttonup_class: "btn btn-touchspin js-touchspin",
                    min: parseInt(quantityInput.attr('min'), 10),
                    max: parseInt(quantityInput.attr('max'), 10),
                    step: parseInt(quantityInput.attr('step'), 10)
                })
            },
            e = function(t) {
                var e = (0, s.default)(".js-qv-product-images"),
                    i = (0, s.default)(".js-qv-product-images li img").height() + 20,
                    n = e.position().top;
                e.velocity({
                    translateY: "up" === t ? n + i : n - i
                }, function() {
                    e.position().top >= 0 ? (0, s.default)(".arrow-up").css("opacity", ".2") : e.position().top + e.height() <= (0, s.default)(".js-qv-mask").height() && (0, s.default)(".arrow-down").css("opacity", ".2")
                })
            };
        (0, s.default)("body").on("click", "#search_filter_toggler", function() {
            (0, s.default)("#search_filters_wrapper").addClass("filter-show"), (0, s.default)(".tptn-overlay").addClass("z-104").show()
        }), (0, s.default)("#search_filter_controls .clear, #search_filter_controls .ok, .tptn-overlay").on("click", function() {
            (0, s.default)("#search_filters_wrapper").removeClass("filter-show"), (0, s.default)(".tptn-overlay").removeClass("z-104").hide()
        });
        var i = function(t) {
            if (void 0 !== t.target.dataset.searchUrl)
                return t.target.dataset.searchUrl;
            if (void 0 === (0, s.default)(t.target).parent()[0].dataset.searchUrl)
                throw new Error("Can not parse search URL");
            return (0, s.default)(t.target).parent()[0].dataset.searchUrl
        };
        (0, s.default)("body").on("change", "#search_filters input[data-search-url]", function(t) {
            l.default.emit("updateFacets", i(t))
        }), (0, s.default)("body").on("click", ".js-search-filters-clear-all", function(t) {
            l.default.emit("updateFacets", i(t))
        }), (0, s.default)("body").on("click", ".js-search-link", function(t) {
            t.preventDefault(), l.default.emit("updateFacets", (0, s.default)(t.target).closest("a").get(0).href)
        }), (0, s.default)("body").on("change", "#search_filters select", function(t) {
            var e = (0, s.default)(t.target).closest("form");
            l.default.emit("updateFacets", "?" + e.serialize())
        }), l.default.on("updateProductList", function(t) {
            o(t)
        })
    })
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
    (0, o.default)(document).ready(function() {
        function t() {
            (0, o.default)(".js-thumb").on("click", function(t) {
                (0, o.default)(".js-modal-product-cover").attr("src", (0, o.default)(t.target).data("image-large-src")), (0, o.default)(".selected").removeClass("selected"), (0, o.default)(t.target).addClass("selected"), (0, o.default)(".js-qv-product-cover").prop("src", (0, o.default)(t.currentTarget).data("image-large-src"))
            })
        }
        function e() {
            (0, o.default)(".thumbcrsl").owlCarousel({
                nav: !0,
                dots: !1,
                navText: ["", ""],
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 4
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 4
                    }
                }
            })
        }
        function i() {
            (0, o.default)(".js-file-input").on("change", function(t) {
                var e = void 0,
                    i = void 0;
                (e = (0, o.default)(t.currentTarget)[0]) && (i = e.files[0]) && (0, o.default)(e).prev().text(i.name)
            })
        }
        !function() {
            var t = (0, o.default)("#quantity_wanted");
            t.TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "material-icons touchspin-up",
                verticaldownclass: "material-icons touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin",
                buttonup_class: "btn btn-touchspin js-touchspin",
                min: parseInt(quantityInput.attr('min'), 10),
                max: parseInt(quantityInput.attr('max'), 10),
                step: parseInt(quantityInput.attr('step'), 10)
            });
            var e = t.val();
            t.on("keyup change", function(t) {
                var i = (0, o.default)(this).val();
                if (i !== e) {
                    e = i;
                    var n = (0, o.default)(".product-refresh");
                    (0, o.default)(t.currentTarget).trigger("touchspin.stopspin"), n.trigger("click", {
                        eventType: "updatedProductQuantity"
                    })
                }
                return t.preventDefault(), !1
            })
        }(), i(), t(), e(), prestashop.on("updatedProduct", function(n) {
            if (i(), t(), n && n.product_minimal_quantity) {
                var r = parseInt(n.product_minimal_quantity, 10);
                (0, o.default)("#quantity_wanted").trigger("touchspin.updatesettings", {
            min: parseInt(quantityInput.attr('min'), 10),
            max: parseInt(quantityInput.attr('max'), 10),
            step: parseInt(quantityInput.attr('step'), 10)
                })
            }
            e(), (0, o.default)((0, o.default)(".tabs .nav-link.active").attr("href")).addClass("active").removeClass("fade"), (0, o.default)(".js-product-images-modal").replaceWith(n.product_images_modal)
        })
    })
}, function(t, e, i) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        var i = e.children().detach();
        e.empty().append(t.children().detach()), t.append(i)
    }
    function r() {
        c.default.responsive.mobile ? (0, a.default)("*[id^='_desktop_']").each(function(t, e) {
            var i = (0, a.default)("#" + e.id.replace("_desktop_", "_mobile_"));
            i.length && o((0, a.default)(e), i)
        }) : (0, a.default)("*[id^='_mobile_']").each(function(t, e) {
            var i = (0, a.default)("#" + e.id.replace("_mobile_", "_desktop_"));
            i.length && o((0, a.default)(e), i)
        }), c.default.emit("responsive update", {
            mobile: c.default.responsive.mobile
        })
    }
    var s = i(0),
        a = n(s),
        l = i(1),
        c = n(l);
    c.default.responsive = c.default.responsive || {}, c.default.responsive.current_width = window.innerWidth, c.default.responsive.min_width = 1199, c.default.responsive.mobile = c.default.responsive.current_width < c.default.responsive.min_width, (0, a.default)(window).on("resize", function() {
        var t = c.default.responsive.current_width,
            e = c.default.responsive.min_width,
            i = window.innerWidth,
            n = t >= e && i < e || t < e && i >= e;
        c.default.responsive.current_width = i, c.default.responsive.mobile = c.default.responsive.current_width < c.default.responsive.min_width, n && r()
    }), (0, a.default)(document).ready(function() {
        c.default.responsive.mobile && r()
    })
}, function(t, e, i) {
    "use strict";
    !function(t) {
        function e(t, e) {
            return t + ".touchspin_" + e
        }
        function i(i, n) {
            return t.map(i, function(t) {
                return e(t, n)
            })
        }
        var n = 0;
        t.fn.TouchSpin = function(e) {
            if ("destroy" === e)
                return void this.each(function() {
                    var e = t(this),
                        n = e.data();
                    t(document).off(i(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], n.spinnerid).join(" "))
                });
            var o = {
                    min: 0,
                    max: 100,
                    initval: "",
                    replacementval: "",
                    step: 1,
                    decimals: 0,
                    stepinterval: 100,
                    forcestepdivisibility: "round",
                    stepintervaldelay: 500,
                    verticalbuttons: !1,
                    verticalupclass: "glyphicon glyphicon-chevron-up",
                    verticaldownclass: "glyphicon glyphicon-chevron-down",
                    prefix: "",
                    postfix: "",
                    prefix_extraclass: "",
                    postfix_extraclass: "",
                    booster: !0,
                    boostat: 10,
                    maxboostedstep: !1,
                    mousewheel: !0,
                    buttondown_class: "btn btn-default",
                    buttonup_class: "btn btn-default",
                    buttondown_txt: "-",
                    buttonup_txt: "+"
                },
                r = {
                    min: "min",
                    max: "max",
                    initval: "init-val",
                    replacementval: "replacement-val",
                    step: "step",
                    decimals: "decimals",
                    stepinterval: "step-interval",
                    verticalbuttons: "vertical-buttons",
                    verticalupclass: "vertical-up-class",
                    verticaldownclass: "vertical-down-class",
                    forcestepdivisibility: "force-step-divisibility",
                    stepintervaldelay: "step-interval-delay",
                    prefix: "prefix",
                    postfix: "postfix",
                    prefix_extraclass: "prefix-extra-class",
                    postfix_extraclass: "postfix-extra-class",
                    booster: "booster",
                    boostat: "boostat",
                    maxboostedstep: "max-boosted-step",
                    mousewheel: "mouse-wheel",
                    buttondown_class: "button-down-class",
                    buttonup_class: "button-up-class",
                    buttondown_txt: "button-down-txt",
                    buttonup_txt: "button-up-txt"
                };
            return this.each(function() {
                function s() {
                    "" !== E.initval && "" === $.val() && $.val(E.initval)
                }
                function a(t) {
                    u(t), _();
                    var e = A.input.val();
                    "" !== e && (e = Number(A.input.val()), A.input.val(e.toFixed(E.decimals)))
                }
                function l() {
                    E = t.extend({}, o, L, c(), e)
                }
                function c() {
                    var e = {};
                    return t.each(r, function(t, i) {
                        var n = "bts-" + i;
                        $.is("[data-" + n + "]") && (e[t] = $.data(n))
                    }), e
                }
                function u(e) {
                    E = t.extend({}, E, e)
                }
                function d() {
                    var t = $.val(),
                        e = $.parent();
                    "" !== t && (t = Number(t).toFixed(E.decimals)), $.data("initvalue", t).val(t), $.addClass("form-control"), e.hasClass("input-group") ? h(e) : f()
                }
                function h(e) {
                    e.addClass("bootstrap-touchspin");
                    var i,
                        n,
                        o = $.prev(),
                        r = $.next(),
                        s = '<span class="input-group-addon bootstrap-touchspin-prefix">' + E.prefix + "</span>",
                        a = '<span class="input-group-addon bootstrap-touchspin-postfix">' + E.postfix + "</span>";
                    o.hasClass("input-group-btn") ? (i = '<button class="' + E.buttondown_class + ' bootstrap-touchspin-down" type="button">' + E.buttondown_txt + "</button>", o.append(i)) : (i = '<span class="input-group-btn"><button class="' + E.buttondown_class + ' bootstrap-touchspin-down" type="button">' + E.buttondown_txt + "</button></span>", t(i).insertBefore($)), r.hasClass("input-group-btn") ? (n = '<button class="' + E.buttonup_class + ' bootstrap-touchspin-up" type="button">' + E.buttonup_txt + "</button>", r.prepend(n)) : (n = '<span class="input-group-btn"><button class="' + E.buttonup_class + ' bootstrap-touchspin-up" type="button">' + E.buttonup_txt + "</button></span>", t(n).insertAfter($)), t(s).insertBefore($), t(a).insertAfter($), T = e
                }
                function f() {
                    var e;
                    e = E.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + E.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + E.postfix + '</span><span class="input-group-btn-vertical"><button class="' + E.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + E.verticalupclass + '"></i></button><button class="' + E.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + E.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + E.buttondown_class + ' bootstrap-touchspin-down" type="button">' + E.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + E.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + E.postfix + '</span><span class="input-group-btn"><button class="' + E.buttonup_class + ' bootstrap-touchspin-up" type="button">' + E.buttonup_txt + "</button></span></div>", T = t(e).insertBefore($), t(".bootstrap-touchspin-prefix", T).after($), $.hasClass("input-sm") ? T.addClass("input-group-sm") : $.hasClass("input-lg") && T.addClass("input-group-lg")
                }
                function p() {
                    A = {
                        down: t(".bootstrap-touchspin-down", T),
                        up: t(".bootstrap-touchspin-up", T),
                        input: t("input", T),
                        prefix: t(".bootstrap-touchspin-prefix", T).addClass(E.prefix_extraclass),
                        postfix: t(".bootstrap-touchspin-postfix", T).addClass(E.postfix_extraclass)
                    }
                }
                function g() {
                    "" === E.prefix && A.prefix.hide(), "" === E.postfix && A.postfix.hide()
                }
                function m() {
                    $.on("keydown", function(t) {
                        var e = t.keyCode || t.which;
                        38 === e ? ("up" !== B && (w(), C()), t.preventDefault()) : 40 === e && ("down" !== B && (x(), S()), t.preventDefault())
                    }), $.on("keyup", function(t) {
                        var e = t.keyCode || t.which;
                        38 === e ? k() : 40 === e && k()
                    }), $.on("blur", function() {
                        _()
                    }), A.down.on("keydown", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || ("down" !== B && (x(), S()), t.preventDefault())
                    }), A.down.on("keyup", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || k()
                    }), A.up.on("keydown", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || ("up" !== B && (w(), C()), t.preventDefault())
                    }), A.up.on("keyup", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || k()
                    }), A.down.on("mousedown.touchspin", function(t) {
                        A.down.off("touchstart.touchspin"), $.is(":disabled") || (x(), S(), t.preventDefault(), t.stopPropagation())
                    }), A.down.on("touchstart.touchspin", function(t) {
                        A.down.off("mousedown.touchspin"), $.is(":disabled") || (x(), S(), t.preventDefault(), t.stopPropagation())
                    }), A.up.on("mousedown.touchspin", function(t) {
                        A.up.off("touchstart.touchspin"), $.is(":disabled") || (w(), C(), t.preventDefault(), t.stopPropagation())
                    }), A.up.on("touchstart.touchspin", function(t) {
                        A.up.off("mousedown.touchspin"), $.is(":disabled") || (w(), C(), t.preventDefault(), t.stopPropagation())
                    }), A.up.on("mouseout touchleave touchend touchcancel", function(t) {
                        B && (t.stopPropagation(), k())
                    }), A.down.on("mouseout touchleave touchend touchcancel", function(t) {
                        B && (t.stopPropagation(), k())
                    }), A.down.on("mousemove touchmove", function(t) {
                        B && (t.stopPropagation(), t.preventDefault())
                    }), A.up.on("mousemove touchmove", function(t) {
                        B && (t.stopPropagation(), t.preventDefault())
                    }), t(document).on(i(["mouseup", "touchend", "touchcancel"], n).join(" "), function(t) {
                        B && (t.preventDefault(), k())
                    }), t(document).on(i(["mousemove", "touchmove", "scroll", "scrollstart"], n).join(" "), function(t) {
                        B && (t.preventDefault(), k())
                    }), $.on("mousewheel DOMMouseScroll", function(t) {
                        if (E.mousewheel && $.is(":focus")) {
                            var e = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                            t.stopPropagation(), t.preventDefault(), e < 0 ? x() : w()
                        }
                    })
                }
                function v() {
                    $.on("touchspin.uponce", function() {
                        k(), w()
                    }), $.on("touchspin.downonce", function() {
                        k(), x()
                    }), $.on("touchspin.startupspin", function() {
                        C()
                    }), $.on("touchspin.startdownspin", function() {
                        S()
                    }), $.on("touchspin.stopspin", function() {
                        k()
                    }), $.on("touchspin.updatesettings", function(t, e) {
                        a(e)
                    })
                }
                function y(t) {
                    switch (E.forcestepdivisibility) {
                    case "round":
                        return (Math.round(t / E.step) * E.step).toFixed(E.decimals);
                    case "floor":
                        return (Math.floor(t / E.step) * E.step).toFixed(E.decimals);
                    case "ceil":
                        return (Math.ceil(t / E.step) * E.step).toFixed(E.decimals);
                    default:
                        return t
                    }
                }
                function _() {
                    var t,
                        e,
                        i;
                    if ("" === (t = $.val()))
                        return void ("" !== E.replacementval && ($.val(E.replacementval), $.trigger("change")));
                    E.decimals > 0 && "." === t || (e = parseFloat(t), isNaN(e) && (e = "" !== E.replacementval ? E.replacementval : 0), i = e, e.toString() !== t && (i = e), e < E.min && (i = E.min), e > E.max && (i = E.max), i = y(i), Number(t).toString() !== i.toString() && ($.val(i), $.trigger("change")))
                }
                function b() {
                    if (E.booster) {
                        var t = Math.pow(2, Math.floor(j / E.boostat)) * E.step;
                        return E.maxboostedstep && t > E.maxboostedstep && (t = E.maxboostedstep, I = Math.round(I / t) * t), Math.max(E.step, t)
                    }
                    return E.step
                }
                function w() {
                    _(), I = parseFloat(A.input.val()), isNaN(I) && (I = 0);
                    var t = I,
                        e = b();
                    I += e, I > E.max && (I = E.max, $.trigger("touchspin.on.max"), k()), A.input.val(Number(I).toFixed(E.decimals)), t !== I && $.trigger("change")
                }
                function x() {
                    _(), I = parseFloat(A.input.val()), isNaN(I) && (I = 0);
                    var t = I,
                        e = b();
                    I -= e, I < E.min && (I = E.min, $.trigger("touchspin.on.min"), k()), A.input.val(I.toFixed(E.decimals)), t !== I && $.trigger("change")
                }
                function S() {
                    k(), j = 0, B = "down", $.trigger("touchspin.on.startspin"), $.trigger("touchspin.on.startdownspin"), P = setTimeout(function() {
                        O = setInterval(function() {
                            j++, x()
                        }, E.stepinterval)
                    }, E.stepintervaldelay)
                }
                function C() {
                    k(), j = 0, B = "up", $.trigger("touchspin.on.startspin"), $.trigger("touchspin.on.startupspin"), N = setTimeout(function() {
                        D = setInterval(function() {
                            j++, w()
                        }, E.stepinterval)
                    }, E.stepintervaldelay)
                }
                function k() {
                    switch (clearTimeout(P), clearTimeout(N), clearInterval(O), clearInterval(D), B) {
                    case "up":
                        $.trigger("touchspin.on.stopupspin"), $.trigger("touchspin.on.stopspin");
                        break;
                    case "down":
                        $.trigger("touchspin.on.stopdownspin"), $.trigger("touchspin.on.stopspin")
                    }
                    j = 0, B = !1
                }
                var E,
                    T,
                    A,
                    I,
                    O,
                    D,
                    P,
                    N,
                    $ = t(this),
                    L = $.data(),
                    j = 0,
                    B = !1;
                !function() {
                    $.data("alreadyinitialized") || ($.data("alreadyinitialized", !0), n += 1, $.data("spinnerid", n), $.is("input") && (l(), s(), _(), d(), p(), g(), m(), v(), A.input.css("display", "block")))
                }()
            })
        }
    }(jQuery)
}, function(t, e, i) {
    "use strict";
    if ("undefined" == typeof jQuery)
        throw new Error("Bootstrap's JavaScript requires jQuery");
    +function(t) {
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(jQuery), function() {
        function t(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function e(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            o = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            r = function(t) {
                function e(t) {
                    return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                }
                function i(t) {
                    return (t[0] || t).nodeType
                }
                function n() {
                    return {
                        bindType: s.end,
                        delegateType: s.end,
                        handle: function(e) {
                            if (t(e.target).is(this))
                                return e.handleObj.handler.apply(this, arguments)
                        }
                    }
                }
                function o() {
                    if (window.QUnit)
                        return !1;
                    var t = document.createElement("bootstrap");
                    for (var e in a)
                        if (void 0 !== t.style[e])
                            return {
                                end: a[e]
                            };
                    return !1
                }
                function r(e) {
                    var i = this,
                        n = !1;
                    return t(this).one(l.TRANSITION_END, function() {
                        n = !0
                    }), setTimeout(function() {
                        n || l.triggerTransitionEnd(i)
                    }, e), this
                }
                var s = !1,
                    a = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    l = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function(t) {
                            do {
                                t += ~~(1e6 * Math.random())
                            } while (document.getElementById(t));
                            return t
                        },
                        getSelectorFromElement: function(t) {
                            var e = t.getAttribute("data-target");
                            return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
                        },
                        reflow: function(t) {
                            new Function("bs", "return bs")(t.offsetHeight)
                        },
                        triggerTransitionEnd: function(e) {
                            t(e).trigger(s.end)
                        },
                        supportsTransitionEnd: function() {
                            return Boolean(s)
                        },
                        typeCheckConfig: function(t, n, o) {
                            for (var r in o)
                                if (o.hasOwnProperty(r)) {
                                    var s = o[r],
                                        a = n[r],
                                        l = void 0;
                                    if (l = a && i(a) ? "element" : e(a), !new RegExp(s).test(l))
                                        throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".')
                                }
                        }
                    };
                return function() {
                    s = o(), t.fn.emulateTransitionEnd = r, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = n())
                }(), l
            }(jQuery),
            s = (function(t) {
                var e = "alert",
                    n = "bs.alert",
                    s = "." + n,
                    a = t.fn[e],
                    l = {
                        DISMISS: '[data-dismiss="alert"]'
                    },
                    c = {
                        CLOSE: "close" + s,
                        CLOSED: "closed" + s,
                        CLICK_DATA_API: "click" + s + ".data-api"
                    },
                    u = {
                        ALERT: "alert",
                        FADE: "fade",
                        IN: "in"
                    },
                    d = function() {
                        function e(t) {
                            i(this, e), this._element = t
                        }
                        return e.prototype.close = function(t) {
                            t = t || this._element;
                            var e = this._getRootElement(t);
                            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                        }, e.prototype.dispose = function() {
                            t.removeData(this._element, n), this._element = null
                        }, e.prototype._getRootElement = function(e) {
                            var i = r.getSelectorFromElement(e),
                                n = !1;
                            return i && (n = t(i)[0]), n || (n = t(e).closest("." + u.ALERT)[0]), n
                        }, e.prototype._triggerCloseEvent = function(e) {
                            var i = t.Event(c.CLOSE);
                            return t(e).trigger(i), i
                        }, e.prototype._removeElement = function(e) {
                            return t(e).removeClass(u.IN), r.supportsTransitionEnd() && t(e).hasClass(u.FADE) ? void t(e).one(r.TRANSITION_END, t.proxy(this._destroyElement, this, e)).emulateTransitionEnd(150) : void this._destroyElement(e)
                        }, e.prototype._destroyElement = function(e) {
                            t(e).detach().trigger(c.CLOSED).remove()
                        }, e._jQueryInterface = function(i) {
                            return this.each(function() {
                                var o = t(this),
                                    r = o.data(n);
                                r || (r = new e(this), o.data(n, r)), "close" === i && r[i](this)
                            })
                        }, e._handleDismiss = function(t) {
                            return function(e) {
                                e && e.preventDefault(), t.close(this)
                            }
                        }, o(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.5"
                            }
                        }]), e
                    }();
                t(document).on(c.CLICK_DATA_API, l.DISMISS, d._handleDismiss(new d)), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                    return t.fn[e] = a, d._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "button",
                    n = "bs.button",
                    r = "." + n,
                    s = ".data-api",
                    a = t.fn[e],
                    l = {
                        ACTIVE: "active",
                        BUTTON: "btn",
                        FOCUS: "focus"
                    },
                    c = {
                        DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                        DATA_TOGGLE: '[data-toggle="buttons"]',
                        INPUT: "input",
                        ACTIVE: ".active",
                        BUTTON: ".btn"
                    },
                    u = {
                        CLICK_DATA_API: "click" + r + s,
                        FOCUS_BLUR_DATA_API: "focus" + r + s + " blur" + r + s
                    },
                    d = function() {
                        function e(t) {
                            i(this, e), this._element = t
                        }
                        return e.prototype.toggle = function() {
                            var e = !0,
                                i = t(this._element).closest(c.DATA_TOGGLE)[0];
                            if (i) {
                                var n = t(this._element).find(c.INPUT)[0];
                                if (n) {
                                    if ("radio" === n.type)
                                        if (n.checked && t(this._element).hasClass(l.ACTIVE))
                                            e = !1;
                                        else {
                                            var o = t(i).find(c.ACTIVE)[0];
                                            o && t(o).removeClass(l.ACTIVE)
                                        }
                                    e && (n.checked = !t(this._element).hasClass(l.ACTIVE), t(this._element).trigger("change")), n.focus()
                                }
                            } else
                                this._element.setAttribute("aria-pressed", !t(this._element).hasClass(l.ACTIVE));
                            e && t(this._element).toggleClass(l.ACTIVE)
                        }, e.prototype.dispose = function() {
                            t.removeData(this._element, n), this._element = null
                        }, e._jQueryInterface = function(i) {
                            return this.each(function() {
                                var o = t(this).data(n);
                                o || (o = new e(this), t(this).data(n, o)), "toggle" === i && o[i]()
                            })
                        }, o(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.5"
                            }
                        }]), e
                    }();
                t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                    e.preventDefault();
                    var i = e.target;
                    t(i).hasClass(l.BUTTON) || (i = t(i).closest(c.BUTTON)), d._jQueryInterface.call(t(i), "toggle")
                }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                    var i = t(e.target).closest(c.BUTTON)[0];
                    t(i).toggleClass(l.FOCUS, /^focus(in)?$/.test(e.type))
                }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                    return t.fn[e] = a, d._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "carousel",
                    s = "bs.carousel",
                    a = "." + s,
                    l = ".data-api",
                    c = t.fn[e],
                    u = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0
                    },
                    d = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean"
                    },
                    h = {
                        NEXT: "next",
                        PREVIOUS: "prev"
                    },
                    f = {
                        SLIDE: "slide" + a,
                        SLID: "slid" + a,
                        KEYDOWN: "keydown" + a,
                        MOUSEENTER: "mouseenter" + a,
                        MOUSELEAVE: "mouseleave" + a,
                        LOAD_DATA_API: "load" + a + l,
                        CLICK_DATA_API: "click" + a + l
                    },
                    p = {
                        CAROUSEL: "carousel",
                        ACTIVE: "active",
                        SLIDE: "slide",
                        RIGHT: "right",
                        LEFT: "left",
                        ITEM: "carousel-item"
                    },
                    g = {
                        ACTIVE: ".active",
                        ACTIVE_ITEM: ".active.carousel-item",
                        ITEM: ".carousel-item",
                        NEXT_PREV: ".next, .prev",
                        INDICATORS: ".carousel-indicators",
                        DATA_SLIDE: "[data-slide], [data-slide-to]",
                        DATA_RIDE: '[data-ride="carousel"]'
                    },
                    m = function() {
                        function l(e, n) {
                            i(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(g.INDICATORS)[0], this._addEventListeners()
                        }
                        return l.prototype.next = function() {
                            this._isSliding || this._slide(h.NEXT)
                        }, l.prototype.nextWhenVisible = function() {
                            document.hidden || this.next()
                        }, l.prototype.prev = function() {
                            this._isSliding || this._slide(h.PREVIOUS)
                        }, l.prototype.pause = function(e) {
                            e || (this._isPaused = !0), t(this._element).find(g.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }, l.prototype.cycle = function(e) {
                            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(t.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                        }, l.prototype.to = function(e) {
                            var i = this;
                            this._activeElement = t(this._element).find(g.ACTIVE_ITEM)[0];
                            var n = this._getItemIndex(this._activeElement);
                            if (!(e > this._items.length - 1 || e < 0)) {
                                if (this._isSliding)
                                    return void t(this._element).one(f.SLID, function() {
                                        return i.to(e)
                                    });
                                if (n === e)
                                    return this.pause(), void this.cycle();
                                var o = e > n ? h.NEXT : h.PREVIOUS;
                                this._slide(o, this._items[e])
                            }
                        }, l.prototype.dispose = function() {
                            t(this._element).off(a), t.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }, l.prototype._getConfig = function(i) {
                            return i = t.extend({}, u, i), r.typeCheckConfig(e, i, d), i
                        }, l.prototype._addEventListeners = function() {
                            this._config.keyboard && t(this._element).on(f.KEYDOWN, t.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(f.MOUSEENTER, t.proxy(this.pause, this)).on(f.MOUSELEAVE, t.proxy(this.cycle, this))
                        }, l.prototype._keydown = function(t) {
                            if (t.preventDefault(), !/input|textarea/i.test(t.target.tagName))
                                switch (t.which) {
                                case 37:
                                    this.prev();
                                    break;
                                case 39:
                                    this.next();
                                    break;
                                default:
                                    return
                                }
                        }, l.prototype._getItemIndex = function(e) {
                            return this._items = t.makeArray(t(e).parent().find(g.ITEM)), this._items.indexOf(e)
                        }, l.prototype._getItemByDirection = function(t, e) {
                            var i = t === h.NEXT,
                                n = t === h.PREVIOUS,
                                o = this._getItemIndex(e),
                                r = this._items.length - 1;
                            if ((n && 0 === o || i && o === r) && !this._config.wrap)
                                return e;
                            var s = t === h.PREVIOUS ? -1 : 1,
                                a = (o + s) % this._items.length;
                            return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                        }, l.prototype._triggerSlideEvent = function(e, i) {
                            var n = t.Event(f.SLIDE, {
                                relatedTarget: e,
                                direction: i
                            });
                            return t(this._element).trigger(n), n
                        }, l.prototype._setActiveIndicatorElement = function(e) {
                            if (this._indicatorsElement) {
                                t(this._indicatorsElement).find(g.ACTIVE).removeClass(p.ACTIVE);
                                var i = this._indicatorsElement.children[this._getItemIndex(e)];
                                i && t(i).addClass(p.ACTIVE)
                            }
                        }, l.prototype._slide = function(e, i) {
                            var n = this,
                                o = t(this._element).find(g.ACTIVE_ITEM)[0],
                                s = i || o && this._getItemByDirection(e, o),
                                a = Boolean(this._interval),
                                l = e === h.NEXT ? p.LEFT : p.RIGHT;
                            if (s && t(s).hasClass(p.ACTIVE))
                                return void (this._isSliding = !1);
                            if (!this._triggerSlideEvent(s, l).isDefaultPrevented() && o && s) {
                                this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
                                var c = t.Event(f.SLID, {
                                    relatedTarget: s,
                                    direction: l
                                });
                                r.supportsTransitionEnd() && t(this._element).hasClass(p.SLIDE) ? (t(s).addClass(e), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function() {
                                    t(s).removeClass(l).removeClass(e), t(s).addClass(p.ACTIVE), t(o).removeClass(p.ACTIVE).removeClass(e).removeClass(l), n._isSliding = !1, setTimeout(function() {
                                        return t(n._element).trigger(c)
                                    }, 0)
                                }).emulateTransitionEnd(600)) : (t(o).removeClass(p.ACTIVE), t(s).addClass(p.ACTIVE), this._isSliding = !1, t(this._element).trigger(c)), a && this.cycle()
                            }
                        }, l._jQueryInterface = function(e) {
                            return this.each(function() {
                                var i = t(this).data(s),
                                    o = t.extend({}, u, t(this).data());
                                "object" === (void 0 === e ? "undefined" : n(e)) && t.extend(o, e);
                                var r = "string" == typeof e ? e : o.slide;
                                if (i || (i = new l(this, o), t(this).data(s, i)), "number" == typeof e)
                                    i.to(e);
                                else if ("string" == typeof r) {
                                    if (void 0 === i[r])
                                        throw new Error('No method named "' + r + '"');
                                    i[r]()
                                } else
                                    o.interval && (i.pause(), i.cycle())
                            })
                        }, l._dataApiClickHandler = function(e) {
                            var i = r.getSelectorFromElement(this);
                            if (i) {
                                var n = t(i)[0];
                                if (n && t(n).hasClass(p.CAROUSEL)) {
                                    var o = t.extend({}, t(n).data(), t(this).data()),
                                        a = this.getAttribute("data-slide-to");
                                    a && (o.interval = !1), l._jQueryInterface.call(t(n), o), a && t(n).data(s).to(a), e.preventDefault()
                                }
                            }
                        }, o(l, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.5"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return u
                            }
                        }]), l
                    }();
                t(document).on(f.CLICK_DATA_API, g.DATA_SLIDE, m._dataApiClickHandler), t(window).on(f.LOAD_DATA_API, function() {
                    t(g.DATA_RIDE).each(function() {
                        var e = t(this);
                        m._jQueryInterface.call(e, e.data())
                    })
                }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
                    return t.fn[e] = c, m._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "collapse",
                    s = "bs.collapse",
                    a = "." + s,
                    l = t.fn[e],
                    c = {
                        toggle: !0,
                        parent: ""
                    },
                    u = {
                        toggle: "boolean",
                        parent: "string"
                    },
                    d = {
                        SHOW: "show" + a,
                        SHOWN: "shown" + a,
                        HIDE: "hide" + a,
                        HIDDEN: "hidden" + a,
                        CLICK_DATA_API: "click" + a + ".data-api"
                    },
                    h = {
                        IN: "in",
                        COLLAPSE: "collapse",
                        COLLAPSING: "collapsing",
                        COLLAPSED: "collapsed"
                    },
                    f = {
                        WIDTH: "width",
                        HEIGHT: "height"
                    },
                    p = {
                        ACTIVES: ".card > .in, .card > .collapsing",
                        DATA_TOGGLE: '[data-toggle="collapse"]'
                    },
                    g = function() {
                        function a(e, n) {
                            i(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                        }
                        return a.prototype.toggle = function() {
                            t(this._element).hasClass(h.IN) ? this.hide() : this.show()
                        }, a.prototype.show = function() {
                            var e = this;
                            if (!this._isTransitioning && !t(this._element).hasClass(h.IN)) {
                                var i = void 0,
                                    n = void 0;
                                if (this._parent && (i = t.makeArray(t(p.ACTIVES)), i.length || (i = null)), !(i && (n = t(i).data(s)) && n._isTransitioning)) {
                                    var o = t.Event(d.SHOW);
                                    if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                        i && (a._jQueryInterface.call(t(i), "hide"), n || t(i).data(s, null));
                                        var l = this._getDimension();
                                        t(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var c = function() {
                                            t(e._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.IN), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(d.SHOWN)
                                        };
                                        if (!r.supportsTransitionEnd())
                                            return void c();
                                        var u = l[0].toUpperCase() + l.slice(1),
                                            f = "scroll" + u;
                                        t(this._element).one(r.TRANSITION_END, c).emulateTransitionEnd(600), this._element.style[l] = this._element[f] + "px"
                                    }
                                }
                            }
                        }, a.prototype.hide = function() {
                            var e = this;
                            if (!this._isTransitioning && t(this._element).hasClass(h.IN)) {
                                var i = t.Event(d.HIDE);
                                if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
                                    var n = this._getDimension(),
                                        o = n === f.WIDTH ? "offsetWidth" : "offsetHeight";
                                    this._element.style[n] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(h.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                    var s = function() {
                                        e.setTransitioning(!1), t(e._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(d.HIDDEN)
                                    };
                                    return this._element.style[n] = "", r.supportsTransitionEnd() ? void t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(600) : void s()
                                }
                            }
                        }, a.prototype.setTransitioning = function(t) {
                            this._isTransitioning = t
                        }, a.prototype.dispose = function() {
                            t.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }, a.prototype._getConfig = function(i) {
                            return i = t.extend({}, c, i), i.toggle = Boolean(i.toggle), r.typeCheckConfig(e, i, u), i
                        }, a.prototype._getDimension = function() {
                            return t(this._element).hasClass(f.WIDTH) ? f.WIDTH : f.HEIGHT
                        }, a.prototype._getParent = function() {
                            var e = this,
                                i = t(this._config.parent)[0],
                                n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return t(i).find(n).each(function(t, i) {
                                e._addAriaAndCollapsedClass(a._getTargetFromElement(i), [i])
                            }), i
                        }, a.prototype._addAriaAndCollapsedClass = function(e, i) {
                            if (e) {
                                var n = t(e).hasClass(h.IN);
                                e.setAttribute("aria-expanded", n), i.length && t(i).toggleClass(h.COLLAPSED, !n).attr("aria-expanded", n)
                            }
                        }, a._getTargetFromElement = function(e) {
                            var i = r.getSelectorFromElement(e);
                            return i ? t(i)[0] : null
                        }, a._jQueryInterface = function(e) {
                            return this.each(function() {
                                var i = t(this),
                                    o = i.data(s),
                                    r = t.extend({}, c, i.data(), "object" === (void 0 === e ? "undefined" : n(e)) && e);
                                if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new a(this, r), i.data(s, o)), "string" == typeof e) {
                                    if (void 0 === o[e])
                                        throw new Error('No method named "' + e + '"');
                                    o[e]()
                                }
                            })
                        }, o(a, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.5"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return c
                            }
                        }]), a
                    }();
                t(document).on(d.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
                    e.preventDefault();
                    var i = g._getTargetFromElement(this),
                        n = t(i).data(s),
                        o = n ? "toggle" : t(this).data();
                    g._jQueryInterface.call(t(i), o)
                }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
                    return t.fn[e] = l, g._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "dropdown",
                    n = "bs.dropdown",
                    s = "." + n,
                    a = ".data-api",
                    l = t.fn[e],
                    c = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        CLICK: "click" + s,
                        CLICK_DATA_API: "click" + s + a,
                        KEYDOWN_DATA_API: "keydown" + s + a
                    },
                    u = {
                        BACKDROP: "dropdown-backdrop",
                        DISABLED: "disabled",
                        OPEN: "open"
                    },
                    d = {
                        BACKDROP: ".dropdown-backdrop",
                        DATA_TOGGLE: '[data-toggle="dropdown"]',
                        FORM_CHILD: ".dropdown form",
                        ROLE_MENU: '[role="menu"]',
                        ROLE_LISTBOX: '[role="listbox"]',
                        NAVBAR_NAV: ".navbar-nav",
                        VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                    },
                    h = function() {
                        function e(t) {
                            i(this, e), this._element = t, this._addEventListeners()
                        }
                        return e.prototype.toggle = function() {
                            if (this.disabled || t(this).hasClass(u.DISABLED))
                                return !1;
                            var i = e._getParentFromElement(this),
                                n = t(i).hasClass(u.OPEN);
                            if (e._clearMenus(), n)
                                return !1;
                            if ("ontouchstart" in document.documentElement && !t(i).closest(d.NAVBAR_NAV).length) {
                                var o = document.createElement("div");
                                o.className = u.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
                            }
                            var r = {
                                    relatedTarget: this
                                },
                                s = t.Event(c.SHOW, r);
                            return t(i).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), t(i).toggleClass(u.OPEN), t(i).trigger(t.Event(c.SHOWN, r)), !1)
                        }, e.prototype.dispose = function() {
                            t.removeData(this._element, n), t(this._element).off(s), this._element = null
                        }, e.prototype._addEventListeners = function() {
                            t(this._element).on(c.CLICK, this.toggle)
                        }, e._jQueryInterface = function(i) {
                            return this.each(function() {
                                var o = t(this).data(n);
                                if (o || t(this).data(n, o = new e(this)), "string" == typeof i) {
                                    if (void 0 === o[i])
                                        throw new Error('No method named "' + i + '"');
                                    o[i].call(this)
                                }
                            })
                        }, e._clearMenus = function(i) {
                            if (!i || 3 !== i.which) {
                                var n = t(d.BACKDROP)[0];
                                n && n.parentNode.removeChild(n);
                                for (var o = t.makeArray(t(d.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                                    var s = e._getParentFromElement(o[r]),
                                        a = {
                                            relatedTarget: o[r]
                                        };
                                    if (t(s).hasClass(u.OPEN) && !(i && "click" === i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s, i.target))) {
                                        var l = t.Event(c.HIDE, a);
                                        t(s).trigger(l), l.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(u.OPEN).trigger(t.Event(c.HIDDEN, a)))
                                    }
                                }
                            }
                        }, e._getParentFromElement = function(e) {
                            var i = void 0,
                                n = r.getSelectorFromElement(e);
                            return n && (i = t(n)[0]), i || e.parentNode
                        }, e._dataApiKeydownHandler = function(i) {
                            if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName) && (i.preventDefault(), i.stopPropagation(), !this.disabled && !t(this).hasClass(u.DISABLED))) {
                                var n = e._getParentFromElement(this),
                                    o = t(n).hasClass(u.OPEN);
                                if (!o && 27 !== i.which || o && 27 === i.which) {
                                    if (27 === i.which) {
                                        var r = t(n).find(d.DATA_TOGGLE)[0];
                                        t(r).trigger("focus")
                                    }
                                    return void t(this).trigger("click")
                                }
                                var s = t.makeArray(t(d.VISIBLE_ITEMS));
                                if (s = s.filter(function(t) {
                                    return t.offsetWidth || t.offsetHeight
                                }), s.length) {
                                    var a = s.indexOf(i.target);
                                    38 === i.which && a > 0 && a--, 40 === i.which && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                                }
                            }
                        }, o(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.5"
                            }
                        }]), e
                    }();
                t(document).on(c.KEYDOWN_DATA_API, d.DATA_TOGGLE, h._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, d.ROLE_MENU, h._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, d.ROLE_LISTBOX, h._dataApiKeydownHandler).on(c.CLICK_DATA_API, h._clearMenus).on(c.CLICK_DATA_API, d.DATA_TOGGLE, h.prototype.toggle).on(c.CLICK_DATA_API, d.FORM_CHILD, function(t) {
                    t.stopPropagation()
                }), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function() {
                    return t.fn[e] = l, h._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "modal",
                    s = "bs.modal",
                    a = "." + s,
                    l = t.fn[e],
                    c = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    },
                    u = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    },
                    d = {
                        HIDE: "hide" + a,
                        HIDDEN: "hidden" + a,
                        SHOW: "show" + a,
                        SHOWN: "shown" + a,
                        FOCUSIN: "focusin" + a,
                        RESIZE: "resize" + a,
                        CLICK_DISMISS: "click.dismiss" + a,
                        KEYDOWN_DISMISS: "keydown.dismiss" + a,
                        MOUSEUP_DISMISS: "mouseup.dismiss" + a,
                        MOUSEDOWN_DISMISS: "mousedown.dismiss" + a,
                        CLICK_DATA_API: "click" + a + ".data-api"
                    },
                    h = {
                        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                        BACKDROP: "modal-backdrop",
                        OPEN: "modal-open",
                        FADE: "fade",
                        IN: "in"
                    },
                    f = {
                        DIALOG: ".modal-dialog",
                        DATA_TOGGLE: '[data-toggle="modal"]',
                        DATA_DISMISS: '[data-dismiss="modal"]',
                        FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                    },
                    p = function() {
                        function l(e, n) {
                            i(this, l), this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(f.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                        }
                        return l.prototype.toggle = function(t) {
                            return this._isShown ? this.hide() : this.show(t)
                        }, l.prototype.show = function(e) {
                            var i = this,
                                n = t.Event(d.SHOW, {
                                    relatedTarget: e
                                });
                            t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(h.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(d.CLICK_DISMISS, f.DATA_DISMISS, t.proxy(this.hide, this)), t(this._dialog).on(d.MOUSEDOWN_DISMISS, function() {
                                t(i._element).one(d.MOUSEUP_DISMISS, function(e) {
                                    t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(t.proxy(this._showElement, this, e)))
                        }, l.prototype.hide = function(e) {
                            e && e.preventDefault();
                            var i = t.Event(d.HIDE);
                            t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(d.FOCUSIN), t(this._element).removeClass(h.IN), t(this._element).off(d.CLICK_DISMISS), t(this._dialog).off(d.MOUSEDOWN_DISMISS), r.supportsTransitionEnd() && t(this._element).hasClass(h.FADE) ? t(this._element).one(r.TRANSITION_END, t.proxy(this._hideModal, this)).emulateTransitionEnd(300) : this._hideModal())
                        }, l.prototype.dispose = function() {
                            t.removeData(this._element, s), t(window).off(a), t(document).off(a), t(this._element).off(a), t(this._backdrop).off(a), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                        }, l.prototype._getConfig = function(i) {
                            return i = t.extend({}, c, i), r.typeCheckConfig(e, i, u), i
                        }, l.prototype._showElement = function(e) {
                            var i = this,
                                n = r.supportsTransitionEnd() && t(this._element).hasClass(h.FADE);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && r.reflow(this._element), t(this._element).addClass(h.IN), this._config.focus && this._enforceFocus();
                            var o = t.Event(d.SHOWN, {
                                    relatedTarget: e
                                }),
                                s = function() {
                                    i._config.focus && i._element.focus(), t(i._element).trigger(o)
                                };
                            n ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(300) : s()
                        }, l.prototype._enforceFocus = function() {
                            var e = this;
                            t(document).off(d.FOCUSIN).on(d.FOCUSIN, function(i) {
                                document === i.target || e._element === i.target || t(e._element).has(i.target).length || e._element.focus()
                            })
                        }, l.prototype._setEscapeEvent = function() {
                            var e = this;
                            this._isShown && this._config.keyboard ? t(this._element).on(d.KEYDOWN_DISMISS, function(t) {
                                27 === t.which && e.hide()
                            }) : this._isShown || t(this._element).off(d.KEYDOWN_DISMISS)
                        }, l.prototype._setResizeEvent = function() {
                            this._isShown ? t(window).on(d.RESIZE, t.proxy(this._handleUpdate, this)) : t(window).off(d.RESIZE)
                        }, l.prototype._hideModal = function() {
                            var e = this;
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function() {
                                t(document.body).removeClass(h.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(d.HIDDEN)
                            })
                        }, l.prototype._removeBackdrop = function() {
                            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                        }, l.prototype._showBackdrop = function(e) {
                            var i = this,
                                n = t(this._element).hasClass(h.FADE) ? h.FADE : "";
                            if (this._isShown && this._config.backdrop) {
                                var o = r.supportsTransitionEnd() && n;
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = h.BACKDROP, n && t(this._backdrop).addClass(n), t(this._backdrop).appendTo(document.body), t(this._element).on(d.CLICK_DISMISS, function(t) {
                                    return i._ignoreBackdropClick ? void (i._ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()))
                                }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(h.IN), !e)
                                    return;
                                if (!o)
                                    return void e();
                                t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(150)
                            } else if (!this._isShown && this._backdrop) {
                                t(this._backdrop).removeClass(h.IN);
                                var s = function() {
                                    i._removeBackdrop(), e && e()
                                };
                                r.supportsTransitionEnd() && t(this._element).hasClass(h.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s()
                            } else
                                e && e()
                        }, l.prototype._handleUpdate = function() {
                            this._adjustDialog()
                        }, l.prototype._adjustDialog = function() {
                            var t = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }, l.prototype._resetAdjustments = function() {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }, l.prototype._checkScrollbar = function() {
                            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                        }, l.prototype._setScrollbar = function() {
                            var e = parseInt(t(f.FIXED_CONTENT).css("padding-right") || 0, 10);
                            this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                        }, l.prototype._resetScrollbar = function() {
                            document.body.style.paddingRight = this._originalBodyPadding
                        }, l.prototype._getScrollbarWidth = function() {
                            var t = document.createElement("div");
                            t.className = h.SCROLLBAR_MEASURER, document.body.appendChild(t);
                            var e = t.offsetWidth - t.clientWidth;
                            return document.body.removeChild(t), e
                        }, l._jQueryInterface = function(e, i) {
                            return this.each(function() {
                                var o = t(this).data(s),
                                    r = t.extend({}, l.Default, t(this).data(), "object" === (void 0 === e ? "undefined" : n(e)) && e);
                                if (o || (o = new l(this, r), t(this).data(s, o)), "string" == typeof e) {
                                    if (void 0 === o[e])
                                        throw new Error('No method named "' + e + '"');
                                    o[e](i)
                                } else
                                    r.show && o.show(i)
                            })
                        }, o(l, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.5"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return c
                            }
                        }]), l
                    }();
                t(document).on(d.CLICK_DATA_API, f.DATA_TOGGLE, function(e) {
                    var i = this,
                        n = void 0,
                        o = r.getSelectorFromElement(this);
                    o && (n = t(o)[0]);
                    var a = t(n).data(s) ? "toggle" : t.extend({}, t(n).data(), t(this).data());
                    "A" === this.tagName && e.preventDefault();
                    var l = t(n).one(d.SHOW, function(e) {
                        e.isDefaultPrevented() || l.one(d.HIDDEN, function() {
                            t(i).is(":visible") && i.focus()
                        })
                    });
                    p._jQueryInterface.call(t(n), a, this)
                }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function() {
                    return t.fn[e] = l, p._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "scrollspy",
                    s = "bs.scrollspy",
                    a = "." + s,
                    l = t.fn[e],
                    c = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    u = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    d = {
                        ACTIVATE: "activate" + a,
                        SCROLL: "scroll" + a,
                        LOAD_DATA_API: "load" + a + ".data-api"
                    },
                    h = {
                        DROPDOWN_ITEM: "dropdown-item",
                        DROPDOWN_MENU: "dropdown-menu",
                        NAV_LINK: "nav-link",
                        NAV: "nav",
                        ACTIVE: "active"
                    },
                    f = {
                        DATA_SPY: '[data-spy="scroll"]',
                        ACTIVE: ".active",
                        LIST_ITEM: ".list-item",
                        LI: "li",
                        LI_DROPDOWN: "li.dropdown",
                        NAV_LINKS: ".nav-link",
                        DROPDOWN: ".dropdown",
                        DROPDOWN_ITEMS: ".dropdown-item",
                        DROPDOWN_TOGGLE: ".dropdown-toggle"
                    },
                    p = {
                        OFFSET: "offset",
                        POSITION: "position"
                    },
                    g = function() {
                        function l(e, n) {
                            i(this, l), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(d.SCROLL, t.proxy(this._process, this)), this.refresh(), this._process()
                        }
                        return l.prototype.refresh = function() {
                            var e = this,
                                i = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
                                n = "auto" === this._config.method ? i : this._config.method,
                                o = n === p.POSITION ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(e) {
                                var i = void 0,
                                    s = r.getSelectorFromElement(e);
                                return s && (i = t(s)[0]), i && (i.offsetWidth || i.offsetHeight) ? [t(i)[n]().top + o, s] : null
                            }).filter(function(t) {
                                return t
                            }).sort(function(t, e) {
                                return t[0] - e[0]
                            }).forEach(function(t) {
                                e._offsets.push(t[0]), e._targets.push(t[1])
                            })
                        }, l.prototype.dispose = function() {
                            t.removeData(this._element, s), t(this._scrollElement).off(a), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }, l.prototype._getConfig = function(i) {
                            if (i = t.extend({}, c, i), "string" != typeof i.target) {
                                var n = t(i.target).attr("id");
                                n || (n = r.getUID(e), t(i.target).attr("id", n)), i.target = "#" + n
                            }
                            return r.typeCheckConfig(e, i, u), i
                        }, l.prototype._getScrollTop = function() {
                            return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                        }, l.prototype._getScrollHeight = function() {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }, l.prototype._process = function() {
                            var t = this._getScrollTop() + this._config.offset,
                                e = this._getScrollHeight(),
                                i = this._config.offset + e - this._scrollElement.offsetHeight;
                            if (this._scrollHeight !== e && this.refresh(), t >= i) {
                                var n = this._targets[this._targets.length - 1];
                                this._activeTarget !== n && this._activate(n)
                            }
                            if (this._activeTarget && t < this._offsets[0])
                                return this._activeTarget = null, void this._clear();
                            for (var o = this._offsets.length; o--;) {
                                this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                            }
                        }, l.prototype._activate = function(e) {
                            this._activeTarget = e, this._clear();
                            var i = this._selector.split(",");
                            i = i.map(function(t) {
                                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                            });
                            var n = t(i.join(","));
                            n.hasClass(h.DROPDOWN_ITEM) ? (n.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(h.ACTIVE), n.addClass(h.ACTIVE)) : n.parents(f.LI).find(f.NAV_LINKS).addClass(h.ACTIVE), t(this._scrollElement).trigger(d.ACTIVATE, {
                                relatedTarget: e
                            })
                        }, l.prototype._clear = function() {
                            t(this._selector).filter(f.ACTIVE).removeClass(h.ACTIVE)
                        }, l._jQueryInterface = function(e) {
                            return this.each(function() {
                                var i = t(this).data(s),
                                    o = "object" === (void 0 === e ? "undefined" : n(e)) && e || null;
                                if (i || (i = new l(this, o), t(this).data(s, i)), "string" == typeof e) {
                                    if (void 0 === i[e])
                                        throw new Error('No method named "' + e + '"');
                                    i[e]()
                                }
                            })
                        }, o(l, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.5"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return c
                            }
                        }]), l
                    }();
                t(window).on(d.LOAD_DATA_API, function() {
                    for (var e = t.makeArray(t(f.DATA_SPY)), i = e.length; i--;) {
                        var n = t(e[i]);
                        g._jQueryInterface.call(n, n.data())
                    }
                }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
                    return t.fn[e] = l, g._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "tab",
                    n = "bs.tab",
                    s = "." + n,
                    a = t.fn[e],
                    l = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        CLICK_DATA_API: "click" + s + ".data-api"
                    },
                    c = {
                        DROPDOWN_MENU: "dropdown-menu",
                        ACTIVE: "active",
                        FADE: "fade",
                        IN: "in"
                    },
                    u = {
                        A: "a",
                        LI: "li",
                        DROPDOWN: ".dropdown",
                        UL: "ul:not(.dropdown-menu)",
                        FADE_CHILD: "> .nav-item .fade, > .fade",
                        ACTIVE: ".active",
                        ACTIVE_CHILD: "> .nav-item > .active, > .active",
                        DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                        DROPDOWN_TOGGLE: ".dropdown-toggle",
                        DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                    },
                    d = function() {
                        function e(t) {
                            i(this, e), this._element = t
                        }
                        return e.prototype.show = function() {
                            var e = this;
                            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !t(this._element).hasClass(c.ACTIVE)) {
                                var i = void 0,
                                    n = void 0,
                                    o = t(this._element).closest(u.UL)[0],
                                    s = r.getSelectorFromElement(this._element);
                                o && (n = t.makeArray(t(o).find(u.ACTIVE)), n = n[n.length - 1]);
                                var a = t.Event(l.HIDE, {
                                        relatedTarget: this._element
                                    }),
                                    d = t.Event(l.SHOW, {
                                        relatedTarget: n
                                    });
                                if (n && t(n).trigger(a), t(this._element).trigger(d), !d.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                    s && (i = t(s)[0]), this._activate(this._element, o);
                                    var h = function() {
                                        var i = t.Event(l.HIDDEN, {
                                                relatedTarget: e._element
                                            }),
                                            o = t.Event(l.SHOWN, {
                                                relatedTarget: n
                                            });
                                        t(n).trigger(i), t(e._element).trigger(o)
                                    };
                                    i ? this._activate(i, i.parentNode, h) : h()
                                }
                            }
                        }, e.prototype.dispose = function() {
                            t.removeClass(this._element, n), this._element = null
                        }, e.prototype._activate = function(e, i, n) {
                            var o = t(i).find(u.ACTIVE_CHILD)[0],
                                s = n && r.supportsTransitionEnd() && (o && t(o).hasClass(c.FADE) || Boolean(t(i).find(u.FADE_CHILD)[0])),
                                a = t.proxy(this._transitionComplete, this, e, o, s, n);
                            o && s ? t(o).one(r.TRANSITION_END, a).emulateTransitionEnd(150) : a(), o && t(o).removeClass(c.IN)
                        }, e.prototype._transitionComplete = function(e, i, n, o) {
                            if (i) {
                                t(i).removeClass(c.ACTIVE);
                                var s = t(i).find(u.DROPDOWN_ACTIVE_CHILD)[0];
                                s && t(s).removeClass(c.ACTIVE), i.setAttribute("aria-expanded", !1)
                            }
                            if (t(e).addClass(c.ACTIVE), e.setAttribute("aria-expanded", !0), n ? (r.reflow(e), t(e).addClass(c.IN)) : t(e).removeClass(c.FADE), e.parentNode && t(e.parentNode).hasClass(c.DROPDOWN_MENU)) {
                                var a = t(e).closest(u.DROPDOWN)[0];
                                a && t(a).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE), e.setAttribute("aria-expanded", !0)
                            }
                            o && o()
                        }, e._jQueryInterface = function(i) {
                            return this.each(function() {
                                var o = t(this),
                                    r = o.data(n);
                                if (r || (r = r = new e(this), o.data(n, r)), "string" == typeof i) {
                                    if (void 0 === r[i])
                                        throw new Error('No method named "' + i + '"');
                                    r[i]()
                                }
                            })
                        }, o(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.5"
                            }
                        }]), e
                    }();
                t(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function(e) {
                    e.preventDefault(), d._jQueryInterface.call(t(this), "show")
                }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                    return t.fn[e] = a, d._jQueryInterface
                }
            }(jQuery), function(t) {
                if (void 0 === window.Tether)
                    throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
                var e = "tooltip",
                    s = "bs.tooltip",
                    a = "." + s,
                    l = t.fn[e],
                    c = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: "0 0",
                        constraints: []
                    },
                    u = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "string",
                        constraints: "array"
                    },
                    d = {
                        TOP: "bottom center",
                        RIGHT: "middle left",
                        BOTTOM: "top center",
                        LEFT: "middle right"
                    },
                    h = {
                        IN: "in",
                        OUT: "out"
                    },
                    f = {
                        HIDE: "hide" + a,
                        HIDDEN: "hidden" + a,
                        SHOW: "show" + a,
                        SHOWN: "shown" + a,
                        INSERTED: "inserted" + a,
                        CLICK: "click" + a,
                        FOCUSIN: "focusin" + a,
                        FOCUSOUT: "focusout" + a,
                        MOUSEENTER: "mouseenter" + a,
                        MOUSELEAVE: "mouseleave" + a
                    },
                    p = {
                        FADE: "fade",
                        IN: "in"
                    },
                    g = {
                        TOOLTIP: ".tooltip",
                        TOOLTIP_INNER: ".tooltip-inner"
                    },
                    m = {
                        element: !1,
                        enabled: !1
                    },
                    v = {
                        HOVER: "hover",
                        FOCUS: "focus",
                        CLICK: "click",
                        MANUAL: "manual"
                    },
                    y = function() {
                        function l(t, e) {
                            i(this, l), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                        }
                        return l.prototype.enable = function() {
                            this._isEnabled = !0
                        }, l.prototype.disable = function() {
                            this._isEnabled = !1
                        }, l.prototype.toggleEnabled = function() {
                            this._isEnabled = !this._isEnabled
                        }, l.prototype.toggle = function(e) {
                            if (e) {
                                var i = this.constructor.DATA_KEY,
                                    n = t(e.currentTarget).data(i);
                                n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                            } else {
                                if (t(this.getTipElement()).hasClass(p.IN))
                                    return void this._leave(null, this);
                                this._enter(null, this)
                            }
                        }, l.prototype.dispose = function() {
                            clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                        }, l.prototype.show = function() {
                            var e = this,
                                i = t.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                t(this.element).trigger(i);
                                var n = t.contains(this.element.ownerDocument.documentElement, this.element);
                                if (i.isDefaultPrevented() || !n)
                                    return;
                                var o = this.getTipElement(),
                                    s = r.getUID(this.constructor.NAME);
                                o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(p.FADE);
                                var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                    c = this._getAttachment(a);
                                t(o).data(this.constructor.DATA_KEY, this).appendTo(document.body), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                    attachment: c,
                                    element: o,
                                    target: this.element,
                                    classes: m,
                                    classPrefix: "bs-tether",
                                    offset: this.config.offset,
                                    constraints: this.config.constraints,
                                    addTargetClasses: !1
                                }), r.reflow(o), this._tether.position(), t(o).addClass(p.IN);
                                var u = function() {
                                    var i = e._hoverState;
                                    e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), i === h.OUT && e._leave(null, e)
                                };
                                if (r.supportsTransitionEnd() && t(this.tip).hasClass(p.FADE))
                                    return void t(this.tip).one(r.TRANSITION_END, u).emulateTransitionEnd(l._TRANSITION_DURATION);
                                u()
                            }
                        }, l.prototype.hide = function(e) {
                            var i = this,
                                n = this.getTipElement(),
                                o = t.Event(this.constructor.Event.HIDE),
                                s = function() {
                                    i._hoverState !== h.IN && n.parentNode && n.parentNode.removeChild(n), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), i.cleanupTether(), e && e()
                                };
                            t(this.element).trigger(o), o.isDefaultPrevented() || (t(n).removeClass(p.IN), r.supportsTransitionEnd() && t(this.tip).hasClass(p.FADE) ? t(n).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s(), this._hoverState = "")
                        }, l.prototype.isWithContent = function() {
                            return Boolean(this.getTitle())
                        }, l.prototype.getTipElement = function() {
                            return this.tip = this.tip || t(this.config.template)[0]
                        }, l.prototype.setContent = function() {
                            var e = t(this.getTipElement());
                            this.setElementContent(e.find(g.TOOLTIP_INNER), this.getTitle()), e.removeClass(p.FADE).removeClass(p.IN), this.cleanupTether()
                        }, l.prototype.setElementContent = function(e, i) {
                            var o = this.config.html;
                            "object" === (void 0 === i ? "undefined" : n(i)) && (i.nodeType || i.jquery) ? o ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text()) : e[o ? "html" : "text"](i)
                        }, l.prototype.getTitle = function() {
                            var t = this.element.getAttribute("data-original-title");
                            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                        }, l.prototype.cleanupTether = function() {
                            this._tether && this._tether.destroy()
                        }, l.prototype._getAttachment = function(t) {
                            return d[t.toUpperCase()]
                        }, l.prototype._setListeners = function() {
                            var e = this;
                            this.config.trigger.split(" ").forEach(function(i) {
                                if ("click" === i)
                                    t(e.element).on(e.constructor.Event.CLICK, e.config.selector, t.proxy(e.toggle, e));
                                else if (i !== v.MANUAL) {
                                    var n = i === v.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                        o = i === v.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                    t(e.element).on(n, e.config.selector, t.proxy(e._enter, e)).on(o, e.config.selector, t.proxy(e._leave, e))
                                }
                            }), this.config.selector ? this.config = t.extend({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }, l.prototype._fixTitle = function() {
                            var t = n(this.element.getAttribute("data-original-title"));
                            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }, l.prototype._enter = function(e, i) {
                            var n = this.constructor.DATA_KEY;
                            return i = i || t(e.currentTarget).data(n), i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusin" === e.type ? v.FOCUS : v.HOVER] = !0), t(i.getTipElement()).hasClass(p.IN) || i._hoverState === h.IN ? void (i._hoverState = h.IN) : (clearTimeout(i._timeout), i._hoverState = h.IN, i.config.delay && i.config.delay.show ? void (i._timeout = setTimeout(function() {
                                i._hoverState === h.IN && i.show()
                            }, i.config.delay.show)) : void i.show())
                        }, l.prototype._leave = function(e, i) {
                            var n = this.constructor.DATA_KEY;
                            if (i = i || t(e.currentTarget).data(n), i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusout" === e.type ? v.FOCUS : v.HOVER] = !1), !i._isWithActiveTrigger())
                                return clearTimeout(i._timeout), i._hoverState = h.OUT, i.config.delay && i.config.delay.hide ? void (i._timeout = setTimeout(function() {
                                    i._hoverState === h.OUT && i.hide()
                                }, i.config.delay.hide)) : void i.hide()
                        }, l.prototype._isWithActiveTrigger = function() {
                            for (var t in this._activeTrigger)
                                if (this._activeTrigger[t])
                                    return !0;
                            return !1
                        }, l.prototype._getConfig = function(i) {
                            return i = t.extend({}, this.constructor.Default, t(this.element).data(), i), i.delay && "number" == typeof i.delay && (i.delay = {
                                show: i.delay,
                                hide: i.delay
                            }), r.typeCheckConfig(e, i, this.constructor.DefaultType), i
                        }, l.prototype._getDelegateConfig = function() {
                            var t = {};
                            if (this.config)
                                for (var e in this.config)
                                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                            return t
                        }, l._jQueryInterface = function(e) {
                            return this.each(function() {
                                var i = t(this).data(s),
                                    o = "object" === (void 0 === e ? "undefined" : n(e)) ? e : null;
                                if ((i || !/dispose|hide/.test(e)) && (i || (i = new l(this, o), t(this).data(s, i)), "string" == typeof e)) {
                                    if (void 0 === i[e])
                                        throw new Error('No method named "' + e + '"');
                                    i[e]()
                                }
                            })
                        }, o(l, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.5"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return c
                            }
                        }, {
                            key: "NAME",
                            get: function() {
                                return e
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function() {
                                return s
                            }
                        }, {
                            key: "Event",
                            get: function() {
                                return f
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function() {
                                return a
                            }
                        }, {
                            key: "DefaultType",
                            get: function() {
                                return u
                            }
                        }]), l
                    }();
                return t.fn[e] = y._jQueryInterface, t.fn[e].Constructor = y, t.fn[e].noConflict = function() {
                    return t.fn[e] = l, y._jQueryInterface
                }, y
            }(jQuery));
        !function(r) {
            var a = "popover",
                l = "bs.popover",
                c = "." + l,
                u = r.fn[a],
                d = r.extend({}, s.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }),
                h = r.extend({}, s.DefaultType, {
                    content: "(string|element|function)"
                }),
                f = {
                    FADE: "fade",
                    IN: "in"
                },
                p = {
                    TITLE: ".popover-title",
                    CONTENT: ".popover-content"
                },
                g = {
                    HIDE: "hide" + c,
                    HIDDEN: "hidden" + c,
                    SHOW: "show" + c,
                    SHOWN: "shown" + c,
                    INSERTED: "inserted" + c,
                    CLICK: "click" + c,
                    FOCUSIN: "focusin" + c,
                    FOCUSOUT: "focusout" + c,
                    MOUSEENTER: "mouseenter" + c,
                    MOUSELEAVE: "mouseleave" + c
                },
                m = function(s) {
                    function u() {
                        return i(this, u), t(this, s.apply(this, arguments))
                    }
                    return e(u, s), u.prototype.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, u.prototype.getTipElement = function() {
                        return this.tip = this.tip || r(this.config.template)[0]
                    }, u.prototype.setContent = function() {
                        var t = r(this.getTipElement());
                        this.setElementContent(t.find(p.TITLE), this.getTitle()), this.setElementContent(t.find(p.CONTENT), this._getContent()), t.removeClass(f.FADE).removeClass(f.IN), this.cleanupTether()
                    }, u.prototype._getContent = function() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }, u._jQueryInterface = function(t) {
                        return this.each(function() {
                            var e = r(this).data(l),
                                i = "object" === (void 0 === t ? "undefined" : n(t)) ? t : null;
                            if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this, i), r(this).data(l, e)), "string" == typeof t)) {
                                if (void 0 === e[t])
                                    throw new Error('No method named "' + t + '"');
                                e[t]()
                            }
                        })
                    }, o(u, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.5"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return c
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return h
                        }
                    }]), u
                }(s);
            r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function() {
                return r.fn[a] = u, m._jQueryInterface
            }
        }(jQuery)
    }()
}, function(t, e, i) {
    "use strict";
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }
    function o(t) {
        return "function" == typeof t
    }
    function r(t) {
        return "number" == typeof t
    }
    function s(t) {
        return "object" == typeof t && null !== t
    }
    function a(t) {
        return void 0 === t
    }
    t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(t) {
        if (!r(t) || t < 0 || isNaN(t))
            throw TypeError("n must be a positive number");
        return this._maxListeners = t, this
    }, n.prototype.emit = function(t) {
        var e,
            i,
            n,
            r,
            l,
            c;
        if (this._events || (this._events = {}), "error" === t && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
            if ((e = arguments[1]) instanceof Error)
                throw e;
            var u = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw u.context = e, u
        }
        if (i = this._events[t], a(i))
            return !1;
        if (o(i))
            switch (arguments.length) {
            case 1:
                i.call(this);
                break;
            case 2:
                i.call(this, arguments[1]);
                break;
            case 3:
                i.call(this, arguments[1], arguments[2]);
                break;
            default:
                r = Array.prototype.slice.call(arguments, 1), i.apply(this, r)
            }
        else if (s(i))
            for (r = Array.prototype.slice.call(arguments, 1), c = i.slice(), n = c.length, l = 0; l < n; l++)
                c[l].apply(this, r);
        return !0
    }, n.prototype.addListener = function(t, e) {
        var i;
        if (!o(e))
            throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, o(e.listener) ? e.listener : e), this._events[t] ? s(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, s(this._events[t]) && !this._events[t].warned && (i = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, console.trace), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(t, e) {
        function i() {
            this.removeListener(t, i), n || (n = !0, e.apply(this, arguments))
        }
        if (!o(e))
            throw TypeError("listener must be a function");
        var n = !1;
        return i.listener = e, this.on(t, i), this
    }, n.prototype.removeListener = function(t, e) {
        var i,
            n,
            r,
            a;
        if (!o(e))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[t])
            return this;
        if (i = this._events[t], r = i.length, n = -1, i === e || o(i.listener) && i.listener === e)
            delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
        else if (s(i)) {
            for (a = r; a-- > 0;)
                if (i[a] === e || i[a].listener && i[a].listener === e) {
                    n = a;
                    break
                }
            if (n < 0)
                return this;
            1 === i.length ? (i.length = 0, delete this._events[t]) : i.splice(n, 1), this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }, n.prototype.removeAllListeners = function(t) {
        var e,
            i;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
        if (0 === arguments.length) {
            for (e in this._events)
                "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (i = this._events[t], o(i))
            this.removeListener(t, i);
        else if (i)
            for (; i.length;)
                this.removeListener(t, i[i.length - 1]);
        return delete this._events[t], this
    }, n.prototype.listeners = function(t) {
        return this._events && this._events[t] ? o(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }, n.prototype.listenerCount = function(t) {
        if (this._events) {
            var e = this._events[t];
            if (o(e))
                return 1;
            if (e)
                return e.length
        }
        return 0
    }, n.listenerCount = function(t, e) {
        return t.listenerCount(e)
    }
}, function(t, e, i) {
    "use strict";
    var n,
        n;
    !function(e) {
        t.exports = e()
    }(function() {
        return function t(e, i, o) {
            function r(a, l) {
                if (!i[a]) {
                    if (!e[a]) {
                        var c = "function" == typeof n && n;
                        if (!l && c)
                            return n(a, !0);
                        if (s)
                            return s(a, !0);
                        var u = new Error("Cannot find module '" + a + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var d = i[a] = {
                        exports: {}
                    };
                    e[a][0].call(d.exports, function(t) {
                        var i = e[a][1][t];
                        return r(i || t)
                    }, d, d.exports, t, e, i, o)
                }
                return i[a].exports
            }
            for (var s = "function" == typeof n && n, a = 0; a < o.length; a++)
                r(o[a]);
            return r
        }({
            1: [function(t, e, i) {
                e.exports = function(t) {
                    var e,
                        i,
                        n,
                        o = -1;
                    if (t.lines.length > 1 && "flex-start" === t.style.alignContent)
                        for (e = 0; n = t.lines[++o];)
                            n.crossStart = e, e += n.cross;
                    else if (t.lines.length > 1 && "flex-end" === t.style.alignContent)
                        for (e = t.flexStyle.crossSpace; n = t.lines[++o];)
                            n.crossStart = e, e += n.cross;
                    else if (t.lines.length > 1 && "center" === t.style.alignContent)
                        for (e = t.flexStyle.crossSpace / 2; n = t.lines[++o];)
                            n.crossStart = e, e += n.cross;
                    else if (t.lines.length > 1 && "space-between" === t.style.alignContent)
                        for (i = t.flexStyle.crossSpace / (t.lines.length - 1), e = 0; n = t.lines[++o];)
                            n.crossStart = e, e += n.cross + i;
                    else if (t.lines.length > 1 && "space-around" === t.style.alignContent)
                        for (i = 2 * t.flexStyle.crossSpace / (2 * t.lines.length), e = i / 2; n = t.lines[++o];)
                            n.crossStart = e, e += n.cross + i;
                    else
                        for (i = t.flexStyle.crossSpace / t.lines.length, e = t.flexStyle.crossInnerBefore; n = t.lines[++o];)
                            n.crossStart = e, n.cross += i, e += n.cross
                }
            }, {}],
            2: [function(t, e, i) {
                e.exports = function(t) {
                    for (var e, i = -1; line = t.lines[++i];)
                        for (e = -1; child = line.children[++e];) {
                            var n = child.style.alignSelf;
                            "auto" === n && (n = t.style.alignItems), "flex-start" === n ? child.flexStyle.crossStart = line.crossStart : "flex-end" === n ? child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter : "center" === n ? child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2 : (child.flexStyle.crossStart = line.crossStart, child.flexStyle.crossOuter = line.cross, child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter)
                        }
                }
            }, {}],
            3: [function(t, e, i) {
                e.exports = function(t, e) {
                    var i = "row" === e || "row-reverse" === e,
                        n = t.mainAxis;
                    if (n) {
                        i && "inline" === n || !i && "block" === n || (t.flexStyle = {
                            main: t.flexStyle.cross,
                            cross: t.flexStyle.main,
                            mainOffset: t.flexStyle.crossOffset,
                            crossOffset: t.flexStyle.mainOffset,
                            mainBefore: t.flexStyle.crossBefore,
                            mainAfter: t.flexStyle.crossAfter,
                            crossBefore: t.flexStyle.mainBefore,
                            crossAfter: t.flexStyle.mainAfter,
                            mainInnerBefore: t.flexStyle.crossInnerBefore,
                            mainInnerAfter: t.flexStyle.crossInnerAfter,
                            crossInnerBefore: t.flexStyle.mainInnerBefore,
                            crossInnerAfter: t.flexStyle.mainInnerAfter,
                            mainBorderBefore: t.flexStyle.crossBorderBefore,
                            mainBorderAfter: t.flexStyle.crossBorderAfter,
                            crossBorderBefore: t.flexStyle.mainBorderBefore,
                            crossBorderAfter: t.flexStyle.mainBorderAfter
                        })
                    } else
                        t.flexStyle = i ? {
                            main: t.style.width,
                            cross: t.style.height,
                            mainOffset: t.style.offsetWidth,
                            crossOffset: t.style.offsetHeight,
                            mainBefore: t.style.marginLeft,
                            mainAfter: t.style.marginRight,
                            crossBefore: t.style.marginTop,
                            crossAfter: t.style.marginBottom,
                            mainInnerBefore: t.style.paddingLeft,
                            mainInnerAfter: t.style.paddingRight,
                            crossInnerBefore: t.style.paddingTop,
                            crossInnerAfter: t.style.paddingBottom,
                            mainBorderBefore: t.style.borderLeftWidth,
                            mainBorderAfter: t.style.borderRightWidth,
                            crossBorderBefore: t.style.borderTopWidth,
                            crossBorderAfter: t.style.borderBottomWidth
                        } : {
                            main: t.style.height,
                            cross: t.style.width,
                            mainOffset: t.style.offsetHeight,
                            crossOffset: t.style.offsetWidth,
                            mainBefore: t.style.marginTop,
                            mainAfter: t.style.marginBottom,
                            crossBefore: t.style.marginLeft,
                            crossAfter: t.style.marginRight,
                            mainInnerBefore: t.style.paddingTop,
                            mainInnerAfter: t.style.paddingBottom,
                            crossInnerBefore: t.style.paddingLeft,
                            crossInnerAfter: t.style.paddingRight,
                            mainBorderBefore: t.style.borderTopWidth,
                            mainBorderAfter: t.style.borderBottomWidth,
                            crossBorderBefore: t.style.borderLeftWidth,
                            crossBorderAfter: t.style.borderRightWidth
                        }, "content-box" === t.style.boxSizing && ("number" == typeof t.flexStyle.main && (t.flexStyle.main += t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter), "number" == typeof t.flexStyle.cross && (t.flexStyle.cross += t.flexStyle.crossInnerBefore + t.flexStyle.crossInnerAfter + t.flexStyle.crossBorderBefore + t.flexStyle.crossBorderAfter));
                    t.mainAxis = i ? "inline" : "block", t.crossAxis = i ? "block" : "inline", "number" == typeof t.style.flexBasis && (t.flexStyle.main = t.style.flexBasis + t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter), t.flexStyle.mainOuter = t.flexStyle.main, t.flexStyle.crossOuter = t.flexStyle.cross, "auto" === t.flexStyle.mainOuter && (t.flexStyle.mainOuter = t.flexStyle.mainOffset), "auto" === t.flexStyle.crossOuter && (t.flexStyle.crossOuter = t.flexStyle.crossOffset), "number" == typeof t.flexStyle.mainBefore && (t.flexStyle.mainOuter += t.flexStyle.mainBefore), "number" == typeof t.flexStyle.mainAfter && (t.flexStyle.mainOuter += t.flexStyle.mainAfter), "number" == typeof t.flexStyle.crossBefore && (t.flexStyle.crossOuter += t.flexStyle.crossBefore), "number" == typeof t.flexStyle.crossAfter && (t.flexStyle.crossOuter += t.flexStyle.crossAfter)
                }
            }, {}],
            4: [function(t, e, i) {
                var n = t("../reduce");
                e.exports = function(t) {
                    if (t.mainSpace > 0) {
                        var e = n(t.children, function(t, e) {
                            return t + parseFloat(e.style.flexGrow)
                        }, 0);
                        e > 0 && (t.main = n(t.children, function(i, n) {
                            return "auto" === n.flexStyle.main ? n.flexStyle.main = n.flexStyle.mainOffset + parseFloat(n.style.flexGrow) / e * t.mainSpace : n.flexStyle.main += parseFloat(n.style.flexGrow) / e * t.mainSpace, n.flexStyle.mainOuter = n.flexStyle.main + n.flexStyle.mainBefore + n.flexStyle.mainAfter, i + n.flexStyle.mainOuter
                        }, 0), t.mainSpace = 0)
                    }
                }
            }, {
                "../reduce": 12
            }],
            5: [function(t, e, i) {
                var n = t("../reduce");
                e.exports = function(t) {
                    if (t.mainSpace < 0) {
                        var e = n(t.children, function(t, e) {
                            return t + parseFloat(e.style.flexShrink)
                        }, 0);
                        e > 0 && (t.main = n(t.children, function(i, n) {
                            return n.flexStyle.main += parseFloat(n.style.flexShrink) / e * t.mainSpace, n.flexStyle.mainOuter = n.flexStyle.main + n.flexStyle.mainBefore + n.flexStyle.mainAfter, i + n.flexStyle.mainOuter
                        }, 0), t.mainSpace = 0)
                    }
                }
            }, {
                "../reduce": 12
            }],
            6: [function(t, e, i) {
                var n = t("../reduce");
                e.exports = function(t) {
                    var e;
                    t.lines = [e = {
                        main: 0,
                        cross: 0,
                        children: []
                    }];
                    for (var i, o = -1; i = t.children[++o];)
                        "nowrap" === t.style.flexWrap || 0 === e.children.length || "auto" === t.flexStyle.main || t.flexStyle.main - t.flexStyle.mainInnerBefore - t.flexStyle.mainInnerAfter - t.flexStyle.mainBorderBefore - t.flexStyle.mainBorderAfter >= e.main + i.flexStyle.mainOuter ? (e.main += i.flexStyle.mainOuter, e.cross = Math.max(e.cross, i.flexStyle.crossOuter)) : t.lines.push(e = {
                            main: i.flexStyle.mainOuter,
                            cross: i.flexStyle.crossOuter,
                            children: []
                        }), e.children.push(i);
                    t.flexStyle.mainLines = n(t.lines, function(t, e) {
                        return Math.max(t, e.main)
                    }, 0), t.flexStyle.crossLines = n(t.lines, function(t, e) {
                        return t + e.cross
                    }, 0), "auto" === t.flexStyle.main && (t.flexStyle.main = Math.max(t.flexStyle.mainOffset, t.flexStyle.mainLines + t.flexStyle.mainInnerBefore + t.flexStyle.mainInnerAfter + t.flexStyle.mainBorderBefore + t.flexStyle.mainBorderAfter)), "auto" === t.flexStyle.cross && (t.flexStyle.cross = Math.max(t.flexStyle.crossOffset, t.flexStyle.crossLines + t.flexStyle.crossInnerBefore + t.flexStyle.crossInnerAfter + t.flexStyle.crossBorderBefore + t.flexStyle.crossBorderAfter)), t.flexStyle.crossSpace = t.flexStyle.cross - t.flexStyle.crossInnerBefore - t.flexStyle.crossInnerAfter - t.flexStyle.crossBorderBefore - t.flexStyle.crossBorderAfter - t.flexStyle.crossLines, t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter, t.flexStyle.crossOuter = t.flexStyle.cross + t.flexStyle.crossBefore + t.flexStyle.crossAfter
                }
            }, {
                "../reduce": 12
            }],
            7: [function(t, e, i) {
                function n(e) {
                    for (var i, n = -1; i = e.children[++n];)
                        t("./flex-direction")(i, e.style.flexDirection);
                    t("./flex-direction")(e, e.style.flexDirection), t("./order")(e), t("./flexbox-lines")(e), t("./align-content")(e), n = -1;
                    for (var o; o = e.lines[++n];)
                        o.mainSpace = e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter - o.main, t("./flex-grow")(o), t("./flex-shrink")(o), t("./margin-main")(o), t("./margin-cross")(o), t("./justify-content")(o, e.style.justifyContent, e);
                    t("./align-items")(e)
                }
                e.exports = n
            }, {
                "./align-content": 1,
                "./align-items": 2,
                "./flex-direction": 3,
                "./flex-grow": 4,
                "./flex-shrink": 5,
                "./flexbox-lines": 6,
                "./justify-content": 8,
                "./margin-cross": 9,
                "./margin-main": 10,
                "./order": 11
            }],
            8: [function(t, e, i) {
                e.exports = function(t, e, i) {
                    var n,
                        o,
                        r,
                        s = i.flexStyle.mainInnerBefore,
                        a = -1;
                    if ("flex-end" === e)
                        for (n = t.mainSpace, n += s; r = t.children[++a];)
                            r.flexStyle.mainStart = n, n += r.flexStyle.mainOuter;
                    else if ("center" === e)
                        for (n = t.mainSpace / 2, n += s; r = t.children[++a];)
                            r.flexStyle.mainStart = n, n += r.flexStyle.mainOuter;
                    else if ("space-between" === e)
                        for (o = t.mainSpace / (t.children.length - 1), n = 0, n += s; r = t.children[++a];)
                            r.flexStyle.mainStart = n, n += r.flexStyle.mainOuter + o;
                    else if ("space-around" === e)
                        for (o = 2 * t.mainSpace / (2 * t.children.length), n = o / 2, n += s; r = t.children[++a];)
                            r.flexStyle.mainStart = n, n += r.flexStyle.mainOuter + o;
                    else
                        for (n = 0, n += s; r = t.children[++a];)
                            r.flexStyle.mainStart = n, n += r.flexStyle.mainOuter
                }
            }, {}],
            9: [function(t, e, i) {
                e.exports = function(t) {
                    for (var e, i = -1; e = t.children[++i];) {
                        var n = 0;
                        "auto" === e.flexStyle.crossBefore && ++n, "auto" === e.flexStyle.crossAfter && ++n;
                        var o = t.cross - e.flexStyle.crossOuter;
                        "auto" === e.flexStyle.crossBefore && (e.flexStyle.crossBefore = o / n), "auto" === e.flexStyle.crossAfter && (e.flexStyle.crossAfter = o / n), "auto" === e.flexStyle.cross ? e.flexStyle.crossOuter = e.flexStyle.crossOffset + e.flexStyle.crossBefore + e.flexStyle.crossAfter : e.flexStyle.crossOuter = e.flexStyle.cross + e.flexStyle.crossBefore + e.flexStyle.crossAfter
                    }
                }
            }, {}],
            10: [function(t, e, i) {
                e.exports = function(t) {
                    for (var e, i = 0, n = -1; e = t.children[++n];)
                        "auto" === e.flexStyle.mainBefore && ++i, "auto" === e.flexStyle.mainAfter && ++i;
                    if (i > 0) {
                        for (n = -1; e = t.children[++n];)
                            "auto" === e.flexStyle.mainBefore && (e.flexStyle.mainBefore = t.mainSpace / i), "auto" === e.flexStyle.mainAfter && (e.flexStyle.mainAfter = t.mainSpace / i), "auto" === e.flexStyle.main ? e.flexStyle.mainOuter = e.flexStyle.mainOffset + e.flexStyle.mainBefore + e.flexStyle.mainAfter : e.flexStyle.mainOuter = e.flexStyle.main + e.flexStyle.mainBefore + e.flexStyle.mainAfter;
                        t.mainSpace = 0
                    }
                }
            }, {}],
            11: [function(t, e, i) {
                var n = /^(column|row)-reverse$/;
                e.exports = function(t) {
                    t.children.sort(function(t, e) {
                        return t.style.order - e.style.order || t.index - e.index
                    }), n.test(t.style.flexDirection) && t.children.reverse()
                }
            }, {}],
            12: [function(t, e, i) {
                function n(t, e, i) {
                    for (var n = t.length, o = -1; ++o < n;)
                        o in t && (i = e(i, t[o], o));
                    return i
                }
                e.exports = n
            }, {}],
            13: [function(t, e, i) {
                function n(t) {
                    a(s(t))
                }
                var o = t("./read"),
                    r = t("./write"),
                    s = t("./readAll"),
                    a = t("./writeAll");
                e.exports = n, e.exports.read = o, e.exports.write = r, e.exports.readAll = s, e.exports.writeAll = a
            }, {
                "./read": 15,
                "./readAll": 16,
                "./write": 17,
                "./writeAll": 18
            }],
            14: [function(t, e, i) {
                function n(t, e) {
                    var i = String(t).match(r);
                    if (!i)
                        return t;
                    var n = i[1],
                        s = i[2];
                    return "px" === s ? 1 * n : "cm" === s ? .3937 * n * 96 : "in" === s ? 96 * n : "mm" === s ? .3937 * n * 96 / 10 : "pc" === s ? 12 * n * 96 / 72 : "pt" === s ? 96 * n / 72 : "rem" === s ? 16 * n : o(t, e)
                }
                function o(t, e) {
                    s.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + t + "!important", e.parentNode.insertBefore(s, e.nextSibling);
                    var i = s.offsetWidth;
                    return e.parentNode.removeChild(s), i
                }
                e.exports = n;
                var r = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/,
                    s = document.createElement("div")
            }, {}],
            15: [function(t, e, i) {
                function n(t) {
                    var e = {
                        alignContent: "stretch",
                        alignItems: "stretch",
                        alignSelf: "auto",
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        boxSizing: "content-box",
                        display: "inline",
                        flexBasis: "auto",
                        flexDirection: "row",
                        flexGrow: 0,
                        flexShrink: 1,
                        flexWrap: "nowrap",
                        justifyContent: "flex-start",
                        height: "auto",
                        marginTop: 0,
                        marginRight: 0,
                        marginLeft: 0,
                        marginBottom: 0,
                        paddingTop: 0,
                        paddingRight: 0,
                        paddingLeft: 0,
                        paddingBottom: 0,
                        maxHeight: "none",
                        maxWidth: "none",
                        minHeight: 0,
                        minWidth: 0,
                        order: 0,
                        position: "static",
                        width: "auto"
                    };
                    if (t instanceof Element) {
                        var i = t.hasAttribute("data-style"),
                            n = i ? t.getAttribute("data-style") : t.getAttribute("style") || "";
                        i || t.setAttribute("data-style", n), s(e, window.getComputedStyle && getComputedStyle(t) || {}), o(e, t.currentStyle || {}), r(e, n);
                        for (var a in e)
                            e[a] = l(e[a], t);
                        var c = t.getBoundingClientRect();
                        e.offsetHeight = c.height || t.offsetHeight, e.offsetWidth = c.width || t.offsetWidth
                    }
                    return {
                        element: t,
                        style: e
                    }
                }
                function o(t, e) {
                    for (var i in t) {
                        if (i in e)
                            t[i] = e[i];
                        else {
                            var n = i.replace(/[A-Z]/g, "-$&").toLowerCase();
                            n in e && (t[i] = e[n])
                        }
                    }
                    "-js-display" in e && (t.display = e["-js-display"])
                }
                function r(t, e) {
                    for (var i; i = a.exec(e);) {
                        t[i[1].toLowerCase().replace(/-[a-z]/g, function(t) {
                            return t.slice(1).toUpperCase()
                        })] = i[2]
                    }
                }
                function s(t, e) {
                    for (var i in t) {
                        i in e && !/^(alignSelf|height|width)$/.test(i) && (t[i] = e[i])
                    }
                }
                e.exports = n;
                var a = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,
                    l = t("./getComputedLength")
            }, {
                "./getComputedLength": 14
            }],
            16: [function(t, e, i) {
                function n(t) {
                    var e = [];
                    return o(t, e), e
                }
                function o(t, e) {
                    for (var i, n = r(t), a = [], l = -1; i = t.childNodes[++l];) {
                        var c = 3 === i.nodeType && !/^\s*$/.test(i.nodeValue);
                        if (n && c) {
                            var u = i;
                            i = t.insertBefore(document.createElement("flex-item"), u), i.appendChild(u)
                        }
                        if (i instanceof Element) {
                            var d = o(i, e);
                            if (n) {
                                var h = i.style;
                                h.display = "inline-block", h.position = "absolute", d.style = s(i).style, a.push(d)
                            }
                        }
                    }
                    var f = {
                        element: t,
                        children: a
                    };
                    return n && (f.style = s(t).style, e.push(f)), f
                }
                function r(t) {
                    var e = t instanceof Element,
                        i = e && t.getAttribute("data-style"),
                        n = e && t.currentStyle && t.currentStyle["-js-display"];
                    return a.test(i) || l.test(n)
                }
                e.exports = n;
                var s = t("../read"),
                    a = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,
                    l = /^(inline-)?flex$/i
            }, {
                "../read": 15
            }],
            17: [function(t, e, i) {
                function n(t) {
                    r(t);
                    var e = t.element.style,
                        i = "inline" === t.mainAxis ? ["main", "cross"] : ["cross", "main"];
                    e.boxSizing = "content-box", e.display = "block", e.position = "relative", e.width = o(t.flexStyle[i[0]] - t.flexStyle[i[0] + "InnerBefore"] - t.flexStyle[i[0] + "InnerAfter"] - t.flexStyle[i[0] + "BorderBefore"] - t.flexStyle[i[0] + "BorderAfter"]), e.height = o(t.flexStyle[i[1]] - t.flexStyle[i[1] + "InnerBefore"] - t.flexStyle[i[1] + "InnerAfter"] - t.flexStyle[i[1] + "BorderBefore"] - t.flexStyle[i[1] + "BorderAfter"]);
                    for (var n, s = -1; n = t.children[++s];) {
                        var a = n.element.style,
                            l = "inline" === n.mainAxis ? ["main", "cross"] : ["cross", "main"];
                        a.boxSizing = "content-box", a.display = "block", a.position = "absolute", "auto" !== n.flexStyle[l[0]] && (a.width = o(n.flexStyle[l[0]] - n.flexStyle[l[0] + "InnerBefore"] - n.flexStyle[l[0] + "InnerAfter"] - n.flexStyle[l[0] + "BorderBefore"] - n.flexStyle[l[0] + "BorderAfter"])), "auto" !== n.flexStyle[l[1]] && (a.height = o(n.flexStyle[l[1]] - n.flexStyle[l[1] + "InnerBefore"] - n.flexStyle[l[1] + "InnerAfter"] - n.flexStyle[l[1] + "BorderBefore"] - n.flexStyle[l[1] + "BorderAfter"])), a.top = o(n.flexStyle[l[1] + "Start"]), a.left = o(n.flexStyle[l[0] + "Start"]), a.marginTop = o(n.flexStyle[l[1] + "Before"]), a.marginRight = o(n.flexStyle[l[0] + "After"]), a.marginBottom = o(n.flexStyle[l[1] + "After"]), a.marginLeft = o(n.flexStyle[l[0] + "Before"])
                    }
                }
                function o(t) {
                    return "string" == typeof t ? t : Math.max(t, 0) + "px"
                }
                e.exports = n;
                var r = t("../flexbox")
            }, {
                "../flexbox": 7
            }],
            18: [function(t, e, i) {
                function n(t) {
                    for (var e, i = -1; e = t[++i];)
                        o(e)
                }
                e.exports = n;
                var o = t("../write")
            }, {
                "../write": 17
            }]
        }, {}, [13])(13)
    })
}, function(t, e, i) {
    "use strict";
    !function(t, e, i, n) {
        function o(e, i) {
            this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
                this._handlers[i] = t.proxy(this[i], this)
            }, this)), t.each(o.Plugins, t.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(o.Workers, t.proxy(function(e, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        o.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, o.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, o.Type = {
            Event: "event",
            State: "state"
        }, o.Plugins = {}, o.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    o = {
                        width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
                    };
                !i && this.$stage.children().css(o), t.css = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    o = !this.settings.autoWidth,
                    r = [];
                for (t.items = {
                    merge: !1,
                    width: e
                }; n--;)
                    i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, r[n] = o ? e * i : this._items[n].width();
                this._widths = r
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var e = [],
                    i = this._items,
                    n = this.settings,
                    o = Math.max(2 * n.items, 4),
                    r = 2 * Math.ceil(i.length / 2),
                    s = n.loop && i.length ? n.rewind ? o : Math.max(o, r) : 0,
                    a = "",
                    l = "";
                for (s /= 2; s--;)
                    e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
                this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, r = []; ++i < e;)
                    n = r[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, r.push(n + o * t);
                this._coordinates = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;)
                        t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else
                    i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t,
                    e,
                    i,
                    n,
                    o = this.settings.rtl ? 1 : -1,
                    r = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + r,
                    a = s + this.width() * o,
                    l = [];
                for (i = 0, n = this._coordinates.length; n > i; i++)
                    t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + r * o, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], o.prototype.initialize = function() {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var e,
                    i,
                    o;
                e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, o = this.$element.children(i).width(), e.length && 0 >= o && this.preloadAutoWidthImages(e)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, o.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                o = null;
            i ? (t.each(i, function(t) {
                e >= t && t > n && (n = Number(t))
            }), o = t.extend({}, this.options, i[n]), "function" == typeof o.stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : o = t.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: o
                }
            }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, o.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, o.prototype.prepare = function(e) {
            var i = this.trigger("prepare", {
                content: e
            });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, o.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                    return this[t]
                }, this._invalidated), o = {}; i > e;)
                (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, o.prototype.width = function(t) {
            switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, o.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, o.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, o.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
        }, o.prototype.registerEventHandlers = function() {
            t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
        }, o.prototype.onDragStart = function(e) {
            var n = null;
            3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
                x: n[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
            }) : (n = this.$stage.position(), n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top
            }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, o.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                o = this.difference(this._drag.pointer, this.pointer(t)),
                r = this.difference(this._drag.stage.start, o);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + n), i + n)), this._drag.stage.current = r, this.animate(r.x))
        }, o.prototype.onDragEnd = function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)),
                o = this._drag.stage.current,
                r = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== n.x ? r : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = r, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, o.prototype.closest = function(e, i) {
            var n = -1,
                o = this.width(),
                r = this.coordinates();
            return this.settings.freeDrag || t.each(r, t.proxy(function(t, s) {
                return "left" === i && e > s - 30 && s + 30 > e ? n = t : "right" === i && e > s - o - 30 && s - o + 30 > e ? n = t + 1 : this.op(e, "<", s) && this.op(e, ">", r[t + 1] || s - o) && (n = "left" === i ? t + 1 : t), -1 === n
            }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())), n
        }, o.prototype.animate = function(e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : i ? this.$stage.animate({
                left: e + "px"
            }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: e + "px"
            })
        }, o.prototype.is = function(t) {
            return this._states.current[t] && this._states.current[t] > 0
        }, o.prototype.current = function(t) {
            if (t === n)
                return this._current;
            if (0 === this._items.length)
                return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, o.prototype.invalidate = function(e) {
            return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
                return e
            })
        }, o.prototype.reset = function(t) {
            (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, o.prototype.normalize = function(t, e) {
            var i = this._items.length,
                o = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || 1 > i ? t = n : (0 > t || t >= i + o) && (t = ((t - o / 2) % i + i) % i + o / 2), t
        }, o.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, o.prototype.maximum = function(t) {
            var e,
                i,
                n,
                o = this.settings,
                r = this._coordinates.length;
            if (o.loop)
                r = this._clones.length / 2 + this._items.length - 1;
            else if (o.autoWidth || o.merge) {
                for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n);)
                    ;
                r = e + 1
            } else
                r = o.center ? this._items.length - 1 : this._items.length - o.items;
            return t && (r -= this._clones.length / 2), Math.max(r, 0)
        }, o.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, o.prototype.items = function(t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, o.prototype.mergers = function(t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, o.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                o = i + this._items.length,
                r = function(t) {
                    return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2
                };
            return e === n ? t.map(this._clones, function(t, e) {
                return r(e)
            }) : t.map(this._clones, function(t, i) {
                return t === e ? r(i) : null
            })
        }, o.prototype.speed = function(t) {
            return t !== n && (this._speed = t), this._speed
        }, o.prototype.coordinates = function(e) {
            var i,
                o = 1,
                r = e - 1;
            return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, r = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[r] || 0)) / 2 * o) : i = this._coordinates[r] || 0, i = Math.ceil(i))
        }, o.prototype.duration = function(t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, o.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                o = t - this.relative(i),
                r = (o > 0) - (0 > o),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), t = i + o, (n = ((t - a) % s + s) % s + a) !== t && l >= n - o && n - o > 0 && (i = n - o, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, o.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, o.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, o.prototype.onTransitionEnd = function(t) {
            return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
        }, o.prototype.viewport = function() {
            var n;
            if (this.options.responsiveBaseElement !== e)
                n = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth)
                n = e.innerWidth;
            else {
                if (!i.documentElement || !i.documentElement.clientWidth)
                    throw "Can not detect viewport width.";
                n = i.documentElement.clientWidth
            }
            return n
        }, o.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, o.prototype.add = function(e, i) {
            var o = this.relative(this._current);
            i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                content: e,
                position: i
            }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
                content: e,
                position: i
            })
        }, o.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, o.prototype.preloadAutoWidthImages = function(e) {
            e.each(t.proxy(function(e, i) {
                this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                    i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
            }, this))
        }, o.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
            for (var n in this._plugins)
                this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, o.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
            case "<":
                return n ? t > i : i > t;
            case ">":
                return n ? i > t : t > i;
            case ">=":
                return n ? i >= t : t >= i;
            case "<=":
                return n ? t >= i : i >= t
            }
        }, o.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, o.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, o.prototype.trigger = function(e, i, n, r, s) {
            var a = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                l = t.camelCase(t.grep(["on", e, n], function(t) {
                    return t
                }).join("-").toLowerCase()),
                c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, a, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(c)
            }), this.register({
                type: o.Type.Event,
                name: e
            }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
        }, o.prototype.enter = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, o.prototype.leave = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, o.prototype.register = function(e) {
            if (e.type === o.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var i = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function(t) {
                        return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                    }, t.event.special[e.name].owl = !0
                }
            } else
                e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
                    return t.inArray(i, this._states.tags[e.name]) === n
                }, this)))
        }, o.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, o.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, o.prototype.pointer = function(t) {
            var i = {
                x: null,
                y: null
            };
            return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
        }, o.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, o.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, t.fn.owlCarousel = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = t(this),
                    r = n.data("owl.carousel");
                r || (r = new o(this, "object" == typeof e && e), n.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                    r.register({
                        type: o.Type.Event,
                        name: i
                    }), r.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                    }, r))
                })), "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, i)
            })
        }, t.fn.owlCarousel.Constructor = o
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var o = function e(i) {
            this._core = i, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, o.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, o.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, o.prototype.destroy = function() {
            var t,
                i;
            e.clearInterval(this._interval);
            for (t in this._handlers)
                this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var o = function e(i) {
            this._core = i, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, r = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o, s = this._core.clones().length, a = t.proxy(function(t, e) {
                                this.load(e)
                            }, this); o++ < n;)
                            this.load(s / 2 + this._core.relative(r)), s && t.each(this._core.clones(this._core.relative(r)), a), r++
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            lazyLoad: !1
        }, o.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                o = n && n.find(".owl-lazy");
            !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
                var o,
                    r = t(n),
                    s = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
                this._core.trigger("load", {
                    element: r,
                    url: s
                }, "lazy"), r.is("img") ? r.one("load.owl.lazy", t.proxy(function() {
                    r.css("opacity", 1), this._core.trigger("loaded", {
                        element: r,
                        url: s
                    }, "lazy")
                }, this)).attr("src", s) : (o = new Image, o.onload = t.proxy(function() {
                    r.css({
                        "background-image": "url(" + s + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: r,
                        url: s
                    }, "lazy")
                }, this), o.src = s)
            }, this)), this._loaded.push(n.get(0)))
        }, o.prototype.destroy = function() {
            var t,
                e;
            for (t in this.handlers)
                this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var o = function e(i) {
            this._core = i, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, o.prototype.update = function() {
            var e = this._core._current,
                i = e + this._core.settings.items,
                n = this._core.$stage.children().toArray().slice(e, i),
                o = [],
                r = 0;
            t.each(n, function(e, i) {
                o.push(t(i).height())
            }), r = Math.max.apply(null, o), this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
        }, o.prototype.destroy = function() {
            var t,
                e;
            for (t in this._handlers)
                this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var o = function e(i) {
            this._core = i, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                    }
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        o.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, o.prototype.fetch = function(t, e) {
            var i = function() {
                    return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
                }(),
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                r = t.attr("data-height") || this._core.settings.videoHeight,
                s = t.attr("href");
            if (!s)
                throw new Error("Missing video URL.");
            if (n = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1)
                i = "youtube";
            else if (n[3].indexOf("vimeo") > -1)
                i = "vimeo";
            else {
                if (!(n[3].indexOf("vzaar") > -1))
                    throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[s] = {
                type: i,
                id: n,
                width: o,
                height: r
            }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
        }, o.prototype.thumbnail = function(e, i) {
            var n,
                o,
                r,
                s = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                c = "",
                u = this._core.settings,
                d = function(t) {
                    o = '<div class="owl-video-play-icon"></div>', n = u.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(o)
                };
            return e.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (d(a.attr(l)), a.remove(), !1) : void ("youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(r)) : "vimeo" === i.type ? t.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    r = t[0].thumbnail_large, d(r)
                }
            }) : "vzaar" === i.type && t.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    r = t.framegrab_url, d(r)
                }
            }))
        }, o.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, o.prototype.play = function(e) {
            var i,
                n = t(e.target),
                o = n.closest("." + this._core.settings.itemClass),
                r = this._videos[o.attr("data-video")],
                s = r.width || "100%",
                a = r.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), o = this._core.items(this._core.relative(o.index())), this._core.reset(o.index()), "youtube" === r.type ? i = '<iframe width="' + s + '" height="' + a + '" src="//www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type ? i = '<iframe src="//player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + s + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === r.type && (i = '<iframe frameborder="0"height="' + a + '"width="' + s + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + r.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(o.find(".owl-video")), this._playing = o.addClass("owl-video-playing"))
        }, o.prototype.isInFullScreen = function() {
            var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame")
        }, o.prototype.destroy = function() {
            var t,
                e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers)
                this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = o
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var o = function e(i) {
            this.core = i, this.core.options = t.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": t.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        o.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, o.prototype.swap = function() {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e,
                    i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    o = this.core.$stage.children().eq(this.next),
                    r = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(s)), r && o.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
            }
        }, o.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, o.prototype.destroy = function() {
            var t,
                e;
            for (t in this.handlers)
                this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var o = function e(i) {
            this._core = i, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, i) {
                    t.namespace && this.play(e, i)
                }, this),
                "stop.owl.autoplay": t.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, e.Defaults, this._core.options)
        };
        o.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, o.prototype.play = function(t, e) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, o.prototype._getNextTimeout = function(n, o) {
            return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(o || this._core.settings.autoplaySpeed)
            }, this), n || this._core.settings.autoplayTimeout)
        }, o.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, o.prototype.stop = function() {
            this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, o.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, o.prototype.destroy = function() {
            var t,
                e;
            this.stop();
            for (t in this._handlers)
                this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var o = function e(i) {
            this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        o.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, o.prototype.initialize = function() {
            var e,
                i = this._core.settings;
            this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this));
            for (e in this._overrides)
                this._core[e] = t.proxy(this[e], this)
        }, o.prototype.destroy = function() {
            var t,
                e,
                i,
                n;
            for (t in this._handlers)
                this.$element.off(t, this._handlers[t]);
            for (e in this._controls)
                this._controls[e].remove();
            for (n in this.overides)
                this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null)
        }, o.prototype.update = function() {
            var t,
                e,
                i,
                n = this._core.clones().length / 2,
                o = n + this._core.items().length,
                r = this._core.maximum(!0),
                s = this._core.settings,
                a = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
            if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
                for (this._pages = [], t = n, e = 0, i = 0; o > t; t++) {
                    if (e >= a || 0 === e) {
                        if (this._pages.push({
                            start: Math.min(r, t - n),
                            end: t - n + a - 1
                        }), Math.min(r, t - n) === r)
                            break;
                        e = 0, ++i
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, o.prototype.draw = function() {
            var e,
                i = this._core.settings,
                n = this._core.items().length <= i.items,
                o = this._core.relative(this._core.current()),
                r = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !r && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : 0 > e && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
        }, o.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        }, o.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, t.proxy(function(t, i) {
                return t.start <= e && t.end >= e
            }, this)).pop()
        }, o.prototype.getPosition = function(e) {
            var i,
                n,
                o = this._core.settings;
            return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
        }, o.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, o.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, o.prototype.to = function(e, i, n) {
            var o;
            !n && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var o = function i(n) {
            this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i)
                            return;
                        this._hashes[i] = e.content
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            o = t.map(this._hashes, function(t, e) {
                                return t === n ? e : null
                            }).join();
                        if (!o || e.location.hash.slice(1) === o)
                            return;
                        e.location.hash = o
                    }
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                var i = e.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    o = this._hashes[i] && n.index(this._hashes[i]);
                void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
            }, this))
        };
        o.Defaults = {
            URLhashListener: !1
        }, o.prototype.destroy = function() {
            var i,
                n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers)
                this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this))
                "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        function o(e, i) {
            var o = !1,
                r = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + a.join(r + " ") + r).split(" "), function(t, e) {
                return s[e] !== n ? (o = !i || e, !1) : void 0
            }), o
        }
        function r(t) {
            return o(t, !0)
        }
        var s = t("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            c = {
                csstransforms: function() {
                    return !!o("transform")
                },
                csstransforms3d: function() {
                    return !!o("perspective")
                },
                csstransitions: function() {
                    return !!o("transition")
                },
                cssanimations: function() {
                    return !!o("animation")
                }
            };
        c.csstransitions() && (t.support.transition = new String(r("transition")), t.support.transition.end = l.transition.end[t.support.transition]), c.cssanimations() && (t.support.animation = new String(r("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c.csstransforms() && (t.support.transform = new String(r("transform")), t.support.transform3d = c.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document)
}, function(t, e, i) {
    "use strict";
    var n,
        o;
    !function(r, s) {
        n = s, void 0 !== (o = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = o)
    }(0, function(t, e, i) {
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(t) {
            var e = t.getBoundingClientRect(),
                i = {};
            for (var n in e)
                i[n] = e[n];
            if (t.ownerDocument !== document) {
                var r = t.ownerDocument.defaultView.frameElement;
                if (r) {
                    var s = o(r);
                    i.top += s.top, i.bottom += s.top, i.left += s.left, i.right += s.left
                }
            }
            return i
        }
        function r(t) {
            var e = getComputedStyle(t) || {},
                i = e.position,
                n = [];
            if ("fixed" === i)
                return [t];
            for (var o = t; (o = o.parentNode) && o && 1 === o.nodeType;) {
                var r = void 0;
                try {
                    r = getComputedStyle(o)
                } catch (t) {}
                if (void 0 === r || null === r)
                    return n.push(o), n;
                var s = r,
                    a = s.overflow,
                    l = s.overflowX;
                /(auto|scroll|overlay)/.test(a + s.overflowY + l) && ("absolute" !== i || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && n.push(o)
            }
            return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n
        }
        function s() {
            k && document.body.removeChild(k), k = null
        }
        function a(t) {
            var e = void 0;
            t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
            var i = e.documentElement,
                n = o(t),
                r = A();
            return n.top -= r.top, n.left -= r.left, void 0 === n.width && (n.width = document.body.scrollWidth - n.left - n.right), void 0 === n.height && (n.height = document.body.scrollHeight - n.top - n.bottom), n.top = n.top - i.clientTop, n.left = n.left - i.clientLeft, n.right = e.body.clientWidth - n.width - n.left, n.bottom = e.body.clientHeight - n.height - n.top, n
        }
        function l(t) {
            return t.offsetParent || document.documentElement
        }
        function c() {
            if (I)
                return I;
            var t = document.createElement("div");
            t.style.width = "100%", t.style.height = "200px";
            var e = document.createElement("div");
            u(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), e.appendChild(t), document.body.appendChild(e);
            var i = t.offsetWidth;
            e.style.overflow = "scroll";
            var n = t.offsetWidth;
            i === n && (n = e.clientWidth), document.body.removeChild(e);
            var o = i - n;
            return I = {
                width: o,
                height: o
            }
        }
        function u() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = [];
            return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
                if (e)
                    for (var i in e)
                        ({}).hasOwnProperty.call(e, i) && (t[i] = e[i])
            }), t
        }
        function d(t, e) {
            if (void 0 !== t.classList)
                e.split(" ").forEach(function(e) {
                    e.trim() && t.classList.remove(e)
                });
            else {
                var i = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                    n = p(t).replace(i, " ");
                g(t, n)
            }
        }
        function h(t, e) {
            if (void 0 !== t.classList)
                e.split(" ").forEach(function(e) {
                    e.trim() && t.classList.add(e)
                });
            else {
                d(t, e);
                var i = p(t) + " " + e;
                g(t, i)
            }
        }
        function f(t, e) {
            if (void 0 !== t.classList)
                return t.classList.contains(e);
            var i = p(t);
            return new RegExp("(^| )" + e + "( |$)", "gi").test(i)
        }
        function p(t) {
            return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
        }
        function g(t, e) {
            t.setAttribute("class", e)
        }
        function m(t, e, i) {
            i.forEach(function(i) {
                -1 === e.indexOf(i) && f(t, i) && d(t, i)
            }), e.forEach(function(e) {
                f(t, e) || h(t, e)
            })
        }
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function v(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function y(t, e) {
            var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return t + i >= e && e >= t - i
        }
        function _() {
            return "object" == typeof performance && "function" == typeof performance.now ? performance.now() : +new Date
        }
        function b() {
            for (var t = {
                    top: 0,
                    left: 0
                }, e = arguments.length, i = Array(e), n = 0; n < e; n++)
                i[n] = arguments[n];
            return i.forEach(function(e) {
                var i = e.top,
                    n = e.left;
                "string" == typeof i && (i = parseFloat(i, 10)), "string" == typeof n && (n = parseFloat(n, 10)), t.top += i, t.left += n
            }), t
        }
        function w(t, e) {
            return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
        }
        function x(t, e) {
            return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), void 0 !== e.nodeType && function() {
                var t = e,
                    i = a(e),
                    n = i,
                    o = getComputedStyle(e);
                if (e = [n.left, n.top, i.width + n.left, i.height + n.top], t.ownerDocument !== document) {
                    var r = t.ownerDocument.defaultView;
                    e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
                }
                Y.forEach(function(t, i) {
                    t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[i] += parseFloat(o["border" + t + "Width"]) : e[i] -= parseFloat(o["border" + t + "Width"])
                })
            }(), e
        }
        var S = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            C = void 0;
        void 0 === C && (C = {
            modules: []
        });
        var k = null,
            E = function() {
                var t = 0;
                return function() {
                    return ++t
                }
            }(),
            T = {},
            A = function() {
                var t = k;
                t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", E()), u(t.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), document.body.appendChild(t), k = t);
                var e = t.getAttribute("data-tether-id");
                return void 0 === T[e] && (T[e] = o(t), D(function() {
                    delete T[e]
                })), T[e]
            },
            I = null,
            O = [],
            D = function(t) {
                O.push(t)
            },
            P = function() {
                for (var t = void 0; t = O.pop();)
                    t()
            },
            N = function() {
                function t() {
                    n(this, t)
                }
                return S(t, [{
                    key: "on",
                    value: function(t, e, i) {
                        var n = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                            handler: e,
                            ctx: i,
                            once: n
                        })
                    }
                }, {
                    key: "once",
                    value: function(t, e, i) {
                        this.on(t, e, i, !0)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        if (void 0 !== this.bindings && void 0 !== this.bindings[t])
                            if (void 0 === e)
                                delete this.bindings[t];
                            else
                                for (var i = 0; i < this.bindings[t].length;)
                                    this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : ++i
                    }
                }, {
                    key: "trigger",
                    value: function(t) {
                        if (void 0 !== this.bindings && this.bindings[t]) {
                            for (var e = 0, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                                n[o - 1] = arguments[o];
                            for (; e < this.bindings[t].length;) {
                                var r = this.bindings[t][e],
                                    s = r.handler,
                                    a = r.ctx,
                                    l = r.once,
                                    c = a;
                                void 0 === c && (c = this), s.apply(c, n), l ? this.bindings[t].splice(e, 1) : ++e
                            }
                        }
                    }
                }]), t
            }();
        C.Utils = {
            getActualBoundingClientRect: o,
            getScrollParents: r,
            getBounds: a,
            getOffsetParent: l,
            extend: u,
            addClass: h,
            removeClass: d,
            hasClass: f,
            updateClasses: m,
            defer: D,
            flush: P,
            uniqueId: E,
            Evented: N,
            getScrollBarSize: c,
            removeUtilElements: s
        };
        var $ = function() {
                function t(t, e) {
                    var i = [],
                        n = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0)
                            ;
                    } catch (t) {
                        o = !0, r = t
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (o)
                                throw r
                        }
                    }
                    return i
                }
                return function(e, i) {
                    if (Array.isArray(e))
                        return e;
                    if (Symbol.iterator in Object(e))
                        return t(e, i);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            S = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            L = function(t, e, i) {
                for (var n = !0; n;) {
                    var o = t,
                        r = e,
                        s = i;
                    n = !1, null === o && (o = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(o, r);
                    if (void 0 !== a) {
                        if ("value" in a)
                            return a.value;
                        var l = a.get;
                        if (void 0 === l)
                            return;
                        return l.call(s)
                    }
                    var c = Object.getPrototypeOf(o);
                    if (null === c)
                        return;
                    t = c, e = r, i = s, n = !0, a = c = void 0
                }
            };
        if (void 0 === C)
            throw new Error("You must include the utils.js file before tether.js");
        var j = C.Utils,
            r = j.getScrollParents,
            a = j.getBounds,
            l = j.getOffsetParent,
            u = j.extend,
            h = j.addClass,
            d = j.removeClass,
            m = j.updateClasses,
            D = j.defer,
            P = j.flush,
            c = j.getScrollBarSize,
            s = j.removeUtilElements,
            B = function() {
                if ("undefined" == typeof document)
                    return "";
                for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], i = 0; i < e.length; ++i) {
                    var n = e[i];
                    if (void 0 !== t.style[n])
                        return n
                }
            }(),
            M = [],
            V = function() {
                M.forEach(function(t) {
                    t.position(!1)
                }), P()
            };
        !function() {
            var t = null,
                e = null,
                i = null,
                n = function n() {
                    if (void 0 !== e && e > 16)
                        return e = Math.min(e - 16, 250), void (i = setTimeout(n, 250));
                    void 0 !== t && _() - t < 10 || (null != i && (clearTimeout(i), i = null), t = _(), V(), e = _() - t)
                };
            "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
                window.addEventListener(t, n)
            })
        }();
        var F = {
                center: "center",
                left: "right",
                right: "left"
            },
            R = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            H = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            W = function(t, e) {
                var i = t.left,
                    n = t.top;
                return "auto" === i && (i = F[e.left]), "auto" === n && (n = R[e.top]), {
                    left: i,
                    top: n
                }
            },
            z = function(t) {
                var e = t.left,
                    i = t.top;
                return void 0 !== H[t.left] && (e = H[t.left]), void 0 !== H[t.top] && (i = H[t.top]), {
                    left: e,
                    top: i
                }
            },
            q = function(t) {
                var e = t.split(" "),
                    i = $(e, 2);
                return {
                    top: i[0],
                    left: i[1]
                }
            },
            U = q,
            Q = function(t) {
                function e(t) {
                    var i = this;
                    n(this, e), L(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), M.push(this), this.history = [], this.setOptions(t, !1), C.modules.forEach(function(t) {
                        void 0 !== t.initialize && t.initialize.call(i)
                    }), this.position()
                }
                return v(e, t), S(e, [{
                    key: "getClass",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            e = this.options.classes;
                        return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                    }
                }, {
                    key: "setOptions",
                    value: function(t) {
                        var e = this,
                            i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                            n = {
                                offset: "0 0",
                                targetOffset: "0 0",
                                targetAttachment: "auto auto",
                                classPrefix: "tether"
                            };
                        this.options = u(n, t);
                        var o = this.options,
                            s = o.element,
                            a = o.target,
                            l = o.targetModifier;
                        if (this.element = s, this.target = a, this.targetModifier = l, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                            if (void 0 === e[t])
                                throw new Error("Tether Error: Both element and target must be defined");
                            void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        }), h(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && h(this.target, this.getClass("target")), !this.options.attachment)
                            throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = U(this.options.targetAttachment), this.attachment = U(this.options.attachment), this.offset = q(this.options.offset), this.targetOffset = q(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), !1 !== this.options.enabled && this.enable(i)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function() {
                        if (void 0 === this.targetModifier)
                            return a(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body)
                                return {
                                    top: pageYOffset,
                                    left: pageXOffset,
                                    height: innerHeight,
                                    width: innerWidth
                                };
                            var t = a(this.target),
                                e = {
                                    height: t.height,
                                    width: t.width,
                                    top: t.top,
                                    left: t.left
                                };
                            return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var t = void 0,
                                i = this.target;
                            i === document.body ? (i = document.documentElement, t = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : t = a(i);
                            var n = getComputedStyle(i),
                                o = i.scrollWidth > i.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                                r = 0;
                            o && (r = 15);
                            var s = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - r,
                                e = {
                                    width: 15,
                                    height: .975 * s * (s / i.scrollHeight),
                                    left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
                                },
                                l = 0;
                            s < 408 && this.target === document.body && (l = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                            var c = this.target.scrollTop / (i.scrollHeight - s);
                            return e.top = c * (s - e.height - l) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function(t, e) {
                        return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        !1 !== this.options.addTargetClasses && h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                            e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                        }), e && this.position()
                    }
                }, {
                    key: "disable",
                    value: function() {
                        var t = this;
                        d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function(e) {
                            e.removeEventListener("scroll", t.position)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        this.disable(), M.forEach(function(e, i) {
                            e === t && M.splice(i, 1)
                        }), 0 === M.length && s()
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function(t, e) {
                        var i = this;
                        t = t || this.attachment, e = e || this.targetAttachment;
                        var n = ["left", "top", "bottom", "right", "middle", "center"];
                        void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                        var o = this._addAttachClasses;
                        t.top && o.push(this.getClass("element-attached") + "-" + t.top), t.left && o.push(this.getClass("element-attached") + "-" + t.left), e.top && o.push(this.getClass("target-attached") + "-" + e.top), e.left && o.push(this.getClass("target-attached") + "-" + e.left);
                        var r = [];
                        n.forEach(function(t) {
                            r.push(i.getClass("element-attached") + "-" + t), r.push(i.getClass("target-attached") + "-" + t)
                        }), D(function() {
                            void 0 !== i._addAttachClasses && (m(i.element, i._addAttachClasses, r), !1 !== i.options.addTargetClasses && m(i.target, i._addAttachClasses, r), delete i._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function() {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var i = W(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, i);
                            var n = this.cache("element-bounds", function() {
                                    return a(t.element)
                                }),
                                o = n.width,
                                r = n.height;
                            if (0 === o && 0 === r && void 0 !== this.lastSize) {
                                var s = this.lastSize;
                                o = s.width, r = s.height
                            } else
                                this.lastSize = {
                                    width: o,
                                    height: r
                                };
                            var u = this.cache("target-bounds", function() {
                                    return t.getTargetBounds()
                                }),
                                d = u,
                                h = w(z(this.attachment), {
                                    width: o,
                                    height: r
                                }),
                                f = w(z(i), d),
                                p = w(this.offset, {
                                    width: o,
                                    height: r
                                }),
                                g = w(this.targetOffset, d);
                            h = b(h, p), f = b(f, g);
                            for (var m = u.left + f.left - h.left, v = u.top + f.top - h.top, y = 0; y < C.modules.length; ++y) {
                                var _ = C.modules[y],
                                    x = _.position.call(this, {
                                        left: m,
                                        top: v,
                                        targetAttachment: i,
                                        targetPos: u,
                                        elementPos: n,
                                        offset: h,
                                        targetOffset: f,
                                        manualOffset: p,
                                        manualTargetOffset: g,
                                        scrollbarSize: T,
                                        attachment: this.attachment
                                    });
                                if (!1 === x)
                                    return !1;
                                void 0 !== x && "object" == typeof x && (v = x.top, m = x.left)
                            }
                            var S = {
                                    page: {
                                        top: v,
                                        left: m
                                    },
                                    viewport: {
                                        top: v - pageYOffset,
                                        bottom: pageYOffset - v - r + innerHeight,
                                        left: m - pageXOffset,
                                        right: pageXOffset - m - o + innerWidth
                                    }
                                },
                                k = this.target.ownerDocument,
                                E = k.defaultView,
                                T = void 0;
                            return E.innerHeight > k.documentElement.clientHeight && (T = this.cache("scrollbar-size", c), S.viewport.bottom -= T.height), E.innerWidth > k.documentElement.clientWidth && (T = this.cache("scrollbar-size", c), S.viewport.right -= T.width), -1 !== ["", "static"].indexOf(k.body.style.position) && -1 !== ["", "static"].indexOf(k.body.parentElement.style.position) || (S.page.bottom = k.body.scrollHeight - v - r, S.page.right = k.body.scrollWidth - m - o), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function() {
                                var e = t.cache("target-offsetparent", function() {
                                        return l(t.target)
                                    }),
                                    i = t.cache("target-offsetparent-bounds", function() {
                                        return a(e)
                                    }),
                                    n = getComputedStyle(e),
                                    o = i,
                                    r = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                    r[t.toLowerCase()] = parseFloat(n["border" + t + "Width"])
                                }), i.right = k.body.scrollWidth - i.left - o.width + r.right, i.bottom = k.body.scrollHeight - i.top - o.height + r.bottom, S.page.top >= i.top + r.top && S.page.bottom >= i.bottom && S.page.left >= i.left + r.left && S.page.right >= i.right) {
                                    var s = e.scrollTop,
                                        c = e.scrollLeft;
                                    S.offset = {
                                        top: S.page.top - i.top + s - r.top,
                                        left: S.page.left - i.left + c - r.left
                                    }
                                }
                            }(), this.move(S), this.history.unshift(S), this.history.length > 3 && this.history.pop(), e && P(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function(t) {
                        var e = this;
                        if (void 0 !== this.element.parentNode) {
                            var i = {};
                            for (var n in t) {
                                i[n] = {};
                                for (var o in t[n]) {
                                    for (var r = !1, s = 0; s < this.history.length; ++s) {
                                        var a = this.history[s];
                                        if (void 0 !== a[n] && !y(a[n][o], t[n][o])) {
                                            r = !0;
                                            break
                                        }
                                    }
                                    r || (i[n][o] = !0)
                                }
                            }
                            var c = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                d = function(t, i) {
                                    if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
                                        var n = void 0,
                                            o = void 0;
                                        t.top ? (c.top = 0, n = i.top) : (c.bottom = 0, n = -i.bottom), t.left ? (c.left = 0, o = i.left) : (c.right = 0, o = -i.right), window.matchMedia && (window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (o = Math.round(o), n = Math.round(n))), c[B] = "translateX(" + o + "px) translateY(" + n + "px)", "msTransform" !== B && (c[B] += " translateZ(0)")
                                    } else
                                        t.top ? c.top = i.top + "px" : c.bottom = i.bottom + "px", t.left ? c.left = i.left + "px" : c.right = i.right + "px"
                                },
                                h = !1;
                            if ((i.page.top || i.page.bottom) && (i.page.left || i.page.right) ? (c.position = "absolute", d(i.page, t.page)) : (i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right) ? (c.position = "fixed", d(i.viewport, t.viewport)) : void 0 !== i.offset && i.offset.top && i.offset.left ? function() {
                                c.position = "absolute";
                                var n = e.cache("target-offsetparent", function() {
                                    return l(e.target)
                                });
                                l(e.element) !== n && D(function() {
                                    e.element.parentNode.removeChild(e.element), n.appendChild(e.element)
                                }), d(i.offset, t.offset), h = !0
                            }() : (c.position = "absolute", d({
                                top: !0,
                                left: !0
                            }, t.page)), !h)
                                if (this.options.bodyElement)
                                    this.element.parentNode !== this.options.bodyElement && this.options.bodyElement.appendChild(this.element);
                                else {
                                    for (var f = !0, p = this.element.parentNode; p && 1 === p.nodeType && "BODY" !== p.tagName;) {
                                        if ("static" !== getComputedStyle(p).position) {
                                            f = !1;
                                            break
                                        }
                                        p = p.parentNode
                                    }
                                    f || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                                }
                            var g = {},
                                m = !1;
                            for (var o in c) {
                                var v = c[o];
                                this.element.style[o] !== v && (m = !0, g[o] = v)
                            }
                            m && D(function() {
                                u(e.element.style, g), e.trigger("repositioned")
                            })
                        }
                    }
                }]), e
            }(N);
        Q.modules = [], C.position = V;
        var G = u(Q, C),
            $ = function() {
                function t(t, e) {
                    var i = [],
                        n = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0)
                            ;
                    } catch (t) {
                        o = !0, r = t
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (o)
                                throw r
                        }
                    }
                    return i
                }
                return function(e, i) {
                    if (Array.isArray(e))
                        return e;
                    if (Symbol.iterator in Object(e))
                        return t(e, i);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            j = C.Utils,
            a = j.getBounds,
            u = j.extend,
            m = j.updateClasses,
            D = j.defer,
            Y = ["left", "top", "right", "bottom"];
        C.modules.push({
            position: function(t) {
                var e = this,
                    i = t.top,
                    n = t.left,
                    o = t.targetAttachment;
                if (!this.options.constraints)
                    return !0;
                var r = this.cache("element-bounds", function() {
                        return a(e.element)
                    }),
                    s = r.height,
                    l = r.width;
                if (0 === l && 0 === s && void 0 !== this.lastSize) {
                    var c = this.lastSize;
                    l = c.width, s = c.height
                }
                var d = this.cache("target-bounds", function() {
                        return e.getTargetBounds()
                    }),
                    h = d.height,
                    f = d.width,
                    p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(t) {
                    var e = t.outOfBoundsClass,
                        i = t.pinnedClass;
                    e && p.push(e), i && p.push(i)
                }), p.forEach(function(t) {
                    ["left", "top", "right", "bottom"].forEach(function(e) {
                        p.push(t + "-" + e)
                    })
                });
                var g = [],
                    v = u({}, o),
                    y = u({}, this.attachment);
                return this.options.constraints.forEach(function(t) {
                    var r = t.to,
                        a = t.attachment,
                        c = t.pin;
                    void 0 === a && (a = "");
                    var u = void 0,
                        d = void 0;
                    if (a.indexOf(" ") >= 0) {
                        var p = a.split(" "),
                            m = $(p, 2);
                        d = m[0], u = m[1]
                    } else
                        u = d = a;
                    var _ = x(e, r);
                    "target" !== d && "both" !== d || (i < _[1] && "top" === v.top && (i += h, v.top = "bottom"), i + s > _[3] && "bottom" === v.top && (i -= h, v.top = "top")), "together" === d && ("top" === v.top && ("bottom" === y.top && i < _[1] ? (i += h, v.top = "bottom", i += s, y.top = "top") : "top" === y.top && i + s > _[3] && i - (s - h) >= _[1] && (i -= s - h, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && i + s > _[3] ? (i -= h, v.top = "top", i -= s, y.top = "bottom") : "bottom" === y.top && i < _[1] && i + (2 * s - h) <= _[3] && (i += s - h, v.top = "top", y.top = "top")), "middle" === v.top && (i + s > _[3] && "top" === y.top ? (i -= s, y.top = "bottom") : i < _[1] && "bottom" === y.top && (i += s, y.top = "top"))), "target" !== u && "both" !== u || (n < _[0] && "left" === v.left && (n += f, v.left = "right"), n + l > _[2] && "right" === v.left && (n -= f, v.left = "left")), "together" === u && (n < _[0] && "left" === v.left ? "right" === y.left ? (n += f, v.left = "right", n += l, y.left = "left") : "left" === y.left && (n += f, v.left = "right", n -= l, y.left = "right") : n + l > _[2] && "right" === v.left ? "left" === y.left ? (n -= f, v.left = "left", n -= l, y.left = "right") : "right" === y.left && (n -= f, v.left = "left", n += l, y.left = "left") : "center" === v.left && (n + l > _[2] && "left" === y.left ? (n -= l, y.left = "right") : n < _[0] && "right" === y.left && (n += l, y.left = "left"))), "element" !== d && "both" !== d || (i < _[1] && "bottom" === y.top && (i += s, y.top = "top"), i + s > _[3] && "top" === y.top && (i -= s, y.top = "bottom")), "element" !== u && "both" !== u || (n < _[0] && ("right" === y.left ? (n += l, y.left = "left") : "center" === y.left && (n += l / 2, y.left = "left")), n + l > _[2] && ("left" === y.left ? (n -= l, y.left = "right") : "center" === y.left && (n -= l / 2, y.left = "right"))), "string" == typeof c ? c = c.split(",").map(function(t) {
                        return t.trim()
                    }) : !0 === c && (c = ["top", "left", "right", "bottom"]), c = c || [];
                    var b = [],
                        w = [];
                    i < _[1] && (c.indexOf("top") >= 0 ? (i = _[1], b.push("top")) : w.push("top")), i + s > _[3] && (c.indexOf("bottom") >= 0 ? (i = _[3] - s, b.push("bottom")) : w.push("bottom")), n < _[0] && (c.indexOf("left") >= 0 ? (n = _[0], b.push("left")) : w.push("left")), n + l > _[2] && (c.indexOf("right") >= 0 ? (n = _[2] - l, b.push("right")) : w.push("right")), b.length && function() {
                        var t = void 0;
                        t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), b.forEach(function(e) {
                            g.push(t + "-" + e)
                        })
                    }(), w.length && function() {
                        var t = void 0;
                        t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), w.forEach(function(e) {
                            g.push(t + "-" + e)
                        })
                    }(), (b.indexOf("left") >= 0 || b.indexOf("right") >= 0) && (y.left = v.left = !1), (b.indexOf("top") >= 0 || b.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === o.top && v.left === o.left && y.top === e.attachment.top && y.left === e.attachment.left || (e.updateAttachClasses(y, v), e.trigger("update", {
                        attachment: y,
                        targetAttachment: v
                    }))
                }), D(function() {
                    !1 !== e.options.addTargetClasses && m(e.target, g, p), m(e.element, g, p)
                }), {
                    top: i,
                    left: n
                }
            }
        });
        var j = C.Utils,
            a = j.getBounds,
            m = j.updateClasses,
            D = j.defer;
        C.modules.push({
            position: function(t) {
                var e = this,
                    i = t.top,
                    n = t.left,
                    o = this.cache("element-bounds", function() {
                        return a(e.element)
                    }),
                    r = o.height,
                    s = o.width,
                    l = this.getTargetBounds(),
                    c = i + r,
                    u = n + s,
                    d = [];
                i <= l.bottom && c >= l.top && ["left", "right"].forEach(function(t) {
                    var e = l[t];
                    e !== n && e !== u || d.push(t)
                }), n <= l.right && u >= l.left && ["top", "bottom"].forEach(function(t) {
                    var e = l[t];
                    e !== i && e !== c || d.push(t)
                });
                var h = [],
                    f = [],
                    p = ["left", "top", "right", "bottom"];
                return h.push(this.getClass("abutted")), p.forEach(function(t) {
                    h.push(e.getClass("abutted") + "-" + t)
                }), d.length && f.push(this.getClass("abutted")), d.forEach(function(t) {
                    f.push(e.getClass("abutted") + "-" + t)
                }), D(function() {
                    !1 !== e.options.addTargetClasses && m(e.target, f, h), m(e.element, f, h)
                }), !0
            }
        });
        var $ = function() {
            function t(t, e) {
                var i = [],
                    n = !0,
                    o = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0)
                        ;
                } catch (t) {
                    o = !0, r = t
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return i
            }
            return function(e, i) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return C.modules.push({
            position: function(t) {
                var e = t.top,
                    i = t.left;
                if (this.options.shift) {
                    var n = this.options.shift;
                    "function" == typeof this.options.shift && (n = this.options.shift.call(this, {
                        top: e,
                        left: i
                    }));
                    var o = void 0,
                        r = void 0;
                    if ("string" == typeof n) {
                        n = n.split(" "), n[1] = n[1] || n[0];
                        var s = n,
                            a = $(s, 2);
                        o = a[0], r = a[1], o = parseFloat(o, 10), r = parseFloat(r, 10)
                    } else
                        o = n.top, r = n.left;
                    return e += o, i += r, {
                        top: e,
                        left: i
                    }
                }
            }
        }), G
    })
}, function(t, e, i) {
    "use strict";
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, i) {
    (function(e) {
        t.exports = e.Tether = i(29)
    }).call(e, i(30))
}, function(t, e, i) {
    i(4), t.exports = i(5)
}]);


