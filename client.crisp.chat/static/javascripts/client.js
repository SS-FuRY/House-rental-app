/**
 * crisp-client
 * @version v2.11.0 1f94bd5
 * @author Crisp IM SAS
 * @date 5/16/2023
 */
(function() {
    try {
        var m = {};
        m.Library = new function() {
            var t, i, n, e, s;
            try {
                this.ns = "CrispLibrary";
                var c = {},
                    h = m;
                c.Console = ((s = {}).i = "production", s.c = "development" == s.i, s.a = void 0 !== window.console, s.o = s.c && s.a, s.h = function(t, i, n) {}, s.warn = function(t, i) {
                    s.o && console.warn(t, i), s.h("warn", t, i)
                }, s.error = function(t, i) {
                    s.o && console.error(t, i), s.h("error", t, i)
                }, s.info = function(t, i) {
                    s.o && console.info(t, i), s.h("info", t, i)
                }, s.log = function(t, i) {
                    s.o && console.log(t, i), s.h("log", t, i)
                }, s.debug = function(t, i) {
                    s.o && (void 0 !== console.debug ? console.debug(t, i) : console.log(t, i)), s.h("debug", t, i)
                }, s.set_log_sink = function(t) {
                    if ("function" != typeof t) throw new Error("Invalid function");
                    s.h = t
                }, s), n = function() {
                    return function e(s, c, a) {
                        function r(i, t) {
                            if (!c[i]) {
                                if (!s[i]) {
                                    var n = "function" == typeof require && require;
                                    if (!t && n) return n(i, !0);
                                    if (o) return o(i, !0);
                                    n = new Error("Cannot find module '" + i + "'");
                                    throw n.code = "MODULE_NOT_FOUND", n
                                }
                                n = c[i] = {
                                    exports: {}
                                };
                                s[i][0].call(n.exports, function(t) {
                                    return r(s[i][1][t] || t)
                                }, n, n.exports, e, s, c, a)
                            }
                            return c[i].exports
                        }
                        for (var o = "function" == typeof require && require, t = 0; t < a.length; t++) r(a[t]);
                        return r
                    }({
                        1: [function(r, t, o) {
                            "use strict";

                            function h(t) {
                                return null != t && "" !== t
                            }

                            function l(i) {
                                return (Array.isArray(i) ? i.map(l) : i && "object" == typeof i ? Object.keys(i).filter(function(t) {
                                    return i[t]
                                }) : [i]).filter(h).join(" ")
                            }
                            o.merge = function t(i, n) {
                                if (1 === arguments.length) {
                                    for (var e = i[0], s = 1; s < i.length; s++) e = t(e, i[s]);
                                    return e
                                }
                                var c, a = i.class,
                                    r = n.class;
                                for (c in (a || r) && (a = a || [], r = r || [], Array.isArray(a) || (a = [a]), Array.isArray(r) || (r = [r]), i.class = a.concat(r).filter(h)), n) "class" != c && (i[c] = n[c]);
                                return i
                            }, o.joinClasses = l, o.cls = function(t, i) {
                                for (var n = [], e = 0; e < t.length; e++) i && i[e] ? n.push(o.escape(l([t[e]]))) : n.push(l(t[e]));
                                var s = l(n);
                                return s.length ? ' class="' + s + '"' : ""
                            }, o.style = function(i) {
                                return i && "object" == typeof i ? Object.keys(i).map(function(t) {
                                    return t + ":" + i[t]
                                }).join(";") : i
                            }, o.attr = function(t, i, n, e) {
                                return "boolean" == typeof(i = "style" === t ? o.style(i) : i) || null == i ? i ? " " + (e ? t : t + '="' + t + '"') : "" : 0 == t.indexOf("data") && "string" != typeof i ? " " + t + "='" + JSON.stringify(i).replace(/'/g, "&apos;") + "'" : n ? " " + t + '="' + o.escape(i) + '"' : " " + t + '="' + i + '"'
                            }, o.attrs = function(t, i) {
                                var n = [],
                                    e = Object.keys(t);
                                if (e.length)
                                    for (var s = 0; s < e.length; ++s) {
                                        var c = e[s],
                                            a = t[c];
                                        "class" == c ? (a = l(a)) && n.push(" " + c + '="' + a + '"') : n.push(o.attr(c, a, !1, i))
                                    }
                                return n.join("")
                            }, o.escape = function(t) {
                                var i = String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                                return i === "" + t ? t : i
                            }, o.rethrow = function i(n, t, e, s) {
                                if (!(n instanceof Error)) throw n;
                                if (!("undefined" == typeof window && t || s)) throw n.message += " on line " + e, n;
                                try {
                                    s = s || r("fs").readFileSync(t, "utf8")
                                } catch (t) {
                                    i(n, null, e)
                                }
                                var c = s.split("\n"),
                                    a = Math.max(e - 3, 0),
                                    s = Math.min(c.length, e + 3),
                                    s = c.slice(a, s).map(function(t, i) {
                                        i = i + a + 1;
                                        return (i == e ? "  > " : "    ") + i + "| " + t
                                    }).join("\n");
                                throw n.path = t, n.message = (t || "Jade") + ":" + e + "\n" + s + "\n\n" + n.message, n
                            }
                        }, {
                            fs: 2
                        }],
                        2: [function(t, i, n) {}, {}]
                    }, {}, [1])(1)
                }, "object" == typeof __crisp_void_exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof __crisp_void_define && define.amd ? define([], n) : (void 0 !== c ? e = c : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.jade = n());
                var li = function(t, i) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return function(t, i) {
                            var n = [],
                                e = !0,
                                s = !1,
                                c = void 0;
                            try {
                                for (var a, r = t[Symbol.iterator](); !(e = (a = r.next()).done) && (n.push(a.value), !i || n.length !== i); e = !0);
                            } catch (t) {
                                s = !0, c = t
                            } finally {
                                try {
                                    !e && r.return && r.return()
                                } finally {
                                    if (s) throw c
                                }
                            }
                            return n
                        }(t, i);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    },
                    ui = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    };

                function fi(t, i, n) {
                    return d(t, "symbol" != (void 0 === i ? "undefined" : ui(i)) ? i + "" : i, n), n
                }
                var a = Object.defineProperty,
                    r = Object.defineProperties,
                    o = Object.getOwnPropertyDescriptors,
                    l = Object.getOwnPropertySymbols,
                    u = Object.prototype.hasOwnProperty,
                    f = Object.prototype.propertyIsEnumerable,
                    d = function(t, i, n) {
                        return i in t ? a(t, i, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: n
                        }) : t[i] = n
                    },
                    di = function(t, i) {
                        for (var n in i = i || {}) u.call(i, n) && d(t, n, i[n]);
                        if (l) {
                            var e = !0,
                                s = !1,
                                c = void 0;
                            try {
                                for (var a, r = l(i)[Symbol.iterator](); !(e = (a = r.next()).done); e = !0) n = a.value, f.call(i, n) && d(t, n, i[n])
                            } catch (t) {
                                s = !0, c = t
                            } finally {
                                try {
                                    !e && r.return && r.return()
                                } finally {
                                    if (s) throw c
                                }
                            }
                        }
                        return t
                    },
                    vi = function(t, i) {
                        return r(t, o(i))
                    };
                c.PetiteVue = function(t) {
                    function r(t) {
                        if (k(t)) {
                            for (var i = {}, n = 0; n < t.length; n++) {
                                var e = t[n],
                                    s = (f(e) ? function(t) {
                                        var i = {};
                                        return t.split(a).forEach(function(t) {
                                            !t || 1 < (t = t.split(o)).length && (i[t[0].trim()] = t[1].trim())
                                        }), i
                                    } : r)(e);
                                if (s)
                                    for (var c in s) i[c] = s[c]
                            }
                            return i
                        }
                        return f(t) || x(t) ? t : void 0
                    }
                    var a = /;(?![^(]*\))/g,
                        o = /:(.+)/;

                    function p(t, i) {
                        if (t === i) return !0;
                        var n = u(t),
                            e = u(i);
                        if (n || e) return !(!n || !e) && t.getTime() === i.getTime();
                        if (n = k(t), e = k(i), n || e) return !(!n || !e) && function(t, i) {
                            if (t.length !== i.length) return !1;
                            for (var n = !0, e = 0; n && e < t.length; e++) n = p(t[e], i[e]);
                            return n
                        }(t, i);
                        if (n = x(t), e = x(i), n || e) {
                            if (!n || !e) return !1;
                            if (Object.keys(t).length !== Object.keys(i).length) return !1;
                            for (var s in t) {
                                var c = t.hasOwnProperty(s),
                                    a = i.hasOwnProperty(s);
                                if (c && !a || !c && a || !p(t[s], i[s])) return !1
                            }
                        }
                        return String(t) === String(i)
                    }

                    function y(t, i) {
                        return t.findIndex(function(t) {
                            return p(t, i)
                        })
                    }

                    function h(t, i) {
                        return n.call(t, i)
                    }

                    function v(t) {
                        return "[object Map]" === d(t)
                    }

                    function l(t) {
                        return "symbol" == (void 0 === t ? "undefined" : ui(t))
                    }

                    function m(t) {
                        return f(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t
                    }

                    function i(i) {
                        var n = Object.create(null);
                        return function(t) {
                            return n[t] || (n[t] = i(t))
                        }
                    }

                    function _(t) {
                        var i = parseFloat(t);
                        return isNaN(i) ? t : i
                    }
                    var e = Object.assign,
                        n = Object.prototype.hasOwnProperty,
                        k = Array.isArray,
                        u = function(t) {
                            return t instanceof Date
                        },
                        f = function(t) {
                            return "string" == typeof t
                        },
                        x = function(t) {
                            return null !== t && "object" == (void 0 === t ? "undefined" : ui(t))
                        },
                        s = Object.prototype.toString,
                        d = function(t) {
                            return s.call(t)
                        },
                        c = /-(\w)/g,
                        g = i(function(t) {
                            return t.replace(c, function(t, i) {
                                return i ? i.toUpperCase() : ""
                            })
                        }),
                        w = /\B([A-Z])/g,
                        b = i(function(t) {
                            return t.replace(w, "-$1").toLowerCase()
                        });

                    function $(t, i) {
                        i && i.active && i.effects.push(t)
                    }
                    var F = function(t) {
                            t = new Set(t);
                            return t.w = 0, t.n = 0, t
                        },
                        E = function(t) {
                            return 0 < (t.w & A)
                        },
                        j = function(t) {
                            return 0 < (t.n & A)
                        },
                        z = new WeakMap,
                        C = 0,
                        A = 1,
                        S = void 0,
                        I = Symbol(""),
                        q = Symbol(""),
                        O = (D.prototype.run = function() {
                            if (!this.active) return this.fn();
                            for (var t = S, i = N; t;) {
                                if (t === this) return;
                                t = t.parent
                            }
                            try {
                                return this.parent = S, N = !0, A = 1 << ++C, (C <= 30 ? function(t) {
                                    var i = t.deps;
                                    if (i.length)
                                        for (var n = 0; n < i.length; n++) i[n].w |= A
                                } : R)(S = this), this.fn()
                            } finally {
                                C <= 30 && function(t) {
                                    var i = t.deps;
                                    if (i.length) {
                                        for (var n = 0, e = 0; e < i.length; e++) {
                                            var s = i[e];
                                            E(s) && !j(s) ? s.delete(t) : i[n++] = s, s.w &= ~A, s.n &= ~A
                                        }
                                        i.length = n
                                    }
                                }(this), A = 1 << --C, S = this.parent, N = i, this.parent = void 0
                            }
                        }, D.prototype.stop = function() {
                            this.active && (R(this), this.onStop && this.onStop(), this.active = !1)
                        }, D);

                    function D(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments[2];
                        this.fn = t, this.scheduler = i, this.active = !0, this.deps = [], this.parent = void 0, $(this, n)
                    }

                    function R(t) {
                        var i = t.deps;
                        if (i.length) {
                            for (var n = 0; n < i.length; n++) i[n].delete(t);
                            i.length = 0
                        }
                    }

                    function B(t) {
                        t.effect.stop()
                    }
                    var N = !0,
                        M = [];

                    function T(t, i, n) {
                        var e;
                        N && S && ((e = z.get(t)) || z.set(t, e = new Map), (t = e.get(n)) || e.set(n, t = F()), n = t, t = !1, C <= 30 ? j(n) || (n.n |= A, t = !E(n)) : t = !n.has(S), t && (n.add(S), S.deps.push(n)))
                    }

                    function U(t, i, n, e, s, c) {
                        var a = z.get(t);
                        if (a) {
                            var r = [];
                            if ("clear" === i) r = [...a.values()];
                            else if ("length" === n && k(t)) a.forEach(function(t, i) {
                                ("length" === i || e <= i) && r.push(t)
                            });
                            else switch (void 0 !== n && r.push(a.get(n)), i) {
                                case "add":
                                    k(t) ? m(n) && r.push(a.get("length")) : (r.push(a.get(I)), v(t) && r.push(a.get(q)));
                                    break;
                                case "delete":
                                    k(t) || (r.push(a.get(I)), v(t) && r.push(a.get(q)));
                                    break;
                                case "set":
                                    v(t) && r.push(a.get(I))
                            }
                            if (1 === r.length) r[0] && P(r[0]);
                            else {
                                var o = [],
                                    h = !0,
                                    l = !1,
                                    i = void 0;
                                try {
                                    for (var u, f = r[Symbol.iterator](); !(h = (u = f.next()).done); h = !0) {
                                        var d = u.value;
                                        d && o.push(...d)
                                    }
                                } catch (t) {
                                    l = !0, i = t
                                } finally {
                                    try {
                                        !h && f.return && f.return()
                                    } finally {
                                        if (l) throw i
                                    }
                                }
                                P(F(o))
                            }
                        }
                    }

                    function P(t, i) {
                        var n = !0,
                            e = !1,
                            s = void 0;
                        try {
                            for (var c, a = (k(t) ? t : [...t])[Symbol.iterator](); !(n = (c = a.next()).done); n = !0) {
                                var r = c.value;
                                r === S && !r.allowRecurse || (r.scheduler ? r.scheduler() : r.run())
                            }
                        } catch (t) {
                            e = !0, s = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (e) throw s
                            }
                        }
                    }
                    var L, J = function(t, i) {
                            for (var n = Object.create(null), e = "__proto__,__v_isRef,__isVue".split(","), s = 0; s < e.length; s++) n[e[s]] = !0;
                            return function(t) {
                                return !!n[t]
                            }
                        }(),
                        V = new Set(Object.getOwnPropertyNames(Symbol).map(function(t) {
                            return Symbol[t]
                        }).filter(l)),
                        W = G(),
                        H = G(!0),
                        K = (L = {}, ["includes", "indexOf", "lastIndexOf"].forEach(function(r) {
                            L[r] = function() {
                                for (var t = ct(this), i = 0, n = this.length; i < n; i++) T(t, 0, i + "");
                                for (var e = arguments.length, s = Array(e), c = 0; c < e; c++) s[c] = arguments[c];
                                var a = t[r](...s);
                                return -1 === a || !1 === a ? t[r](...s.map(ct)) : a
                            }
                        }), ["push", "pop", "shift", "unshift", "splice"].forEach(function(c) {
                            L[c] = function() {
                                for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                M.push(N), N = !1;
                                var e = ct(this)[c].apply(this, i),
                                    s = M.pop();
                                return N = void 0 === s || s, e
                            }
                        }), L);

                    function G() {
                        var s = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                            c = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        return function(t, i, n) {
                            if ("__v_isReactive" === i) return !s;
                            if ("__v_isReadonly" === i) return s;
                            if ("__v_isShallow" === i) return c;
                            if ("__v_raw" === i && n === (s ? c ? it : tt : c ? Q : X).get(t)) return t;
                            var e = k(t);
                            if (!s && e && h(K, i)) return Reflect.get(K, i, n);
                            n = Reflect.get(t, i, n);
                            return (l(i) ? V.has(i) : J(i)) || (s || T(t, 0, i), c) ? n : at(n) ? e && m(i) ? n : n.value : x(n) ? s ? et(n, !0, Z, null, tt) : nt(n) : n
                        }
                    }
                    var Y = {
                            get: W,
                            set: function() {
                                var r = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                return function(t, i, n, e) {
                                    var s = t[i];
                                    if (st(s) && at(s) && !at(n)) return !1;
                                    if (!r && !st(n) && (n && n.__v_isShallow || (n = ct(n), s = ct(s)), !k(t) && at(s) && !at(n))) return s.value = n, !0;
                                    var c = k(t) && m(i) ? Number(i) < t.length : h(t, i),
                                        a = Reflect.set(t, i, n, e);
                                    return t === ct(e) && (c ? (c = n, s = s, Object.is(c, s) || U(t, "set", i, n)) : U(t, "add", i, n)), a
                                }
                            }(),
                            deleteProperty: function(t, i) {
                                var n = h(t, i);
                                t[i];
                                var e = Reflect.deleteProperty(t, i);
                                return e && n && U(t, "delete", i, void 0), e
                            },
                            has: function(t, i) {
                                var n = Reflect.has(t, i);
                                return l(i) && V.has(i) || T(t, 0, i), n
                            },
                            ownKeys: function(t) {
                                return T(t, 0, k(t) ? "length" : I), Reflect.ownKeys(t)
                            }
                        },
                        Z = {
                            get: H,
                            set: function(t, i) {
                                return !0
                            },
                            deleteProperty: function(t, i) {
                                return !0
                            }
                        },
                        X = new WeakMap,
                        Q = new WeakMap,
                        tt = new WeakMap,
                        it = new WeakMap;

                    function nt(t) {
                        return st(t) ? t : et(t, !1, Y, null, X)
                    }

                    function et(t, i, n, e, s) {
                        if (!x(t) || t.__v_raw && (!i || !t.__v_isReactive)) return t;
                        i = s.get(t);
                        if (i) return i;
                        var c, i = (c = t).l || !Object.isExtensible(c) ? 0 : function(t) {
                            switch (d(c).slice(8, -1)) {
                                case "Object":
                                case "Array":
                                    return 1;
                                case "Map":
                                case "Set":
                                case "WeakMap":
                                case "WeakSet":
                                    return 2;
                                default:
                                    return 0
                            }
                        }();
                        if (0 === i) return t;
                        n = new Proxy(t, 2 === i ? e : n);
                        return s.set(t, n), n
                    }

                    function st(t) {
                        return t && t.__v_isReadonly
                    }

                    function ct(t) {
                        var i = t && t.__v_raw;
                        return i ? ct(i) : t
                    }

                    function at(t) {
                        return t && !0 === t.__v_isRef
                    }

                    function rt(t) {
                        return bt.then(t)
                    }

                    function ot() {
                        var t = !0,
                            i = !1,
                            n = void 0;
                        try {
                            for (var e, s = wt[Symbol.iterator](); !(t = (e = s.next()).done); t = !0)(0, e.value)()
                        } catch (t) {
                            i = !0, n = t
                        } finally {
                            try {
                                !t && s.return && s.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                        wt.length = 0, gt = !1
                    }

                    function ht(t) {
                        var e = t.el,
                            s = t.get,
                            i = t.effect,
                            c = t.arg,
                            a = t.modifiers,
                            r = void 0;
                        "class" === c && (e.u = e.className), i(function() {
                            var t = s();
                            if (c) null != a && a.camel && (c = g(c)), lt(e, c, t, r);
                            else {
                                for (var i in t) lt(e, i, t[i], r && r[i]);
                                for (var n in r) t && n in t || lt(e, n, null)
                            }
                            r = t
                        })
                    }

                    function lt(t, i, n, e) {
                        if ("class" === i) t.setAttribute("class", function t(i) {
                            var n = "";
                            if (f(i)) n = i;
                            else if (k(i))
                                for (var e = 0; e < i.length; e++) {
                                    var s = t(i[e]);
                                    s && (n += s + " ")
                                } else if (x(i))
                                    for (var c in i) i[c] && (n += c + " ");
                            return n.trim()
                        }(t.u ? [t.u, n] : n) || "");
                        else if ("style" === i) {
                            n = r(n);
                            var s = t.style;
                            if (n)
                                if (f(n)) n !== e && (s.cssText = n);
                                else {
                                    for (var c in n) Ft(s, c, n[c]);
                                    if (e && !f(e))
                                        for (var a in e) null == n[a] && Ft(s, a, "")
                                }
                            else t.removeAttribute("style")
                        } else t instanceof SVGElement || !(i in t) || xt.test(i) ? "true-value" === i ? t._trueValue = n : "false-value" === i ? t._falseValue = n : null != n ? t.setAttribute(i, n) : t.removeAttribute(i) : (t[i] = n, "value" === i && (t._value = n))
                    }

                    function ut(t, i, n, e) {
                        t.addEventListener(i, n, e)
                    }

                    function ft(t) {
                        var i = t.el,
                            n = t.get,
                            e = t.exp,
                            s = t.arg,
                            c = t.ctx,
                            a = t.modifiers;
                        if (s) {
                            var r, o = function(t) {
                                jt.test(e) ? n("" + e)(t) : (c.scope.$event = t, n("" + e), delete c.scope.$event)
                            };
                            if ("vue:mounted" !== s) {
                                if ("vue:unmounted" === s) return function() {
                                    return o()
                                };
                                a && ("click" === s && (a.right && (s = "contextmenu"), a.middle && (s = "mouseup")), r = o, o = function(t) {
                                    if (!("key" in t) || b(t.key) in a) {
                                        for (var i in a) {
                                            i = Ct[i];
                                            if (i && i(t, a)) return
                                        }
                                        return r(t)
                                    }
                                }), ut(i, s, o, a)
                            } else rt(o)
                        }
                    }

                    function dt(t) {
                        return null == t ? "" : x(t) ? JSON.stringify(t, null, 2) : String(t)
                    }

                    function vt(t) {
                        return "_value" in t ? t._value : t.value
                    }

                    function pt(t, i) {
                        var n = i ? "_trueValue" : "_falseValue";
                        return n in t ? t[n] : i
                    }

                    function yt(t) {
                        t.target.composing = !0
                    }

                    function mt(t) {
                        var i = t.target;
                        i.composing && (i.composing = !1, t = i, (i = document.createEvent("HTMLEvents")).initEvent("input", !0, !0), t.dispatchEvent(i))
                    }

                    function _t() {
                        for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                        throw console.error(i), "ERROR"
                    }
                    Promise.resolve();
                    var gt = !1,
                        wt = [],
                        bt = Promise.resolve(),
                        kt = function(t) {
                            wt.includes(t) || wt.push(t), gt || (gt = !0, rt(ot))
                        },
                        xt = /^(spellcheck|draggable|form|list|type)$/,
                        $t = /\s*!important$/,
                        Ft = function i(n, e, t) {
                            k(t) ? t.forEach(function(t) {
                                return i(n, e, t)
                            }) : e.startsWith("--") ? n.setProperty(e, t) : $t.test(t) ? n.setProperty(b(e), t.replace($t, ""), "important") : n[e] = t
                        },
                        Et = function(t, i) {
                            var n = t.getAttribute(i);
                            return null != n && t.removeAttribute(i), n
                        },
                        jt = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
                        zt = ["ctrl", "shift", "alt", "meta"],
                        Ct = {
                            stop: function(t) {
                                return t.stopPropagation()
                            },
                            prevent: function(t) {
                                return t.preventDefault()
                            },
                            self: function(t) {
                                return t.target !== t.currentTarget
                            },
                            ctrl: function(t) {
                                return !t.ctrlKey
                            },
                            shift: function(t) {
                                return !t.shiftKey
                            },
                            alt: function(t) {
                                return !t.altKey
                            },
                            meta: function(t) {
                                return !t.metaKey
                            },
                            left: function(t) {
                                return "button" in t && 0 !== t.button
                            },
                            middle: function(t) {
                                return "button" in t && 1 !== t.button
                            },
                            right: function(t) {
                                return "button" in t && 2 !== t.button
                            },
                            exact: function(i, n) {
                                return zt.some(function(t) {
                                    return i[t + "Key"] && !n[t]
                                })
                            }
                        },
                        At = function(t) {
                            var i = t.el,
                                n = t.get;
                            (0, t.effect)(function() {
                                i.textContent = dt(n())
                            })
                        };
                    ({}).constructor.prototype.valueOf;
                    var St = {
                            true: !0,
                            false: !1,
                            null: null,
                            undefined: void 0
                        },
                        It = {};

                    function qt() {}
                    "+ - * / % === !== == != < > <= >= && || ! =".split(" ").forEach(function(t) {
                        It[t] = !0
                    });
                    var Ot = {
                        n: "\n",
                        f: "\f",
                        r: "\r",
                        t: "\t",
                        v: "\v",
                        "'": "'",
                        '"': '"'
                    };

                    function Dt(t, i) {
                        this.lexer = t, this.options = i
                    }

                    function Rt(t) {
                        return t.type === Dt.Identifier || t.type === Dt.MemberExpression
                    }

                    function Bt() {}

                    function Nt(t, i) {
                        this.ast = new Dt(t, i), this.astCompiler = new Bt
                    }

                    function Mt(t, i, n) {
                        try {
                            return Pt(i)(t)
                        } catch (t) {
                            console.error(t)
                        }
                    }

                    function Tt(t, i) {
                        var n = t.nodeType;
                        if (1 === n) {
                            var e = t;
                            if (!e.hasAttribute("v-pre")) {
                                var s = void 0;
                                if (Et(e, "v-cloak"), s = Et(e, "v-if")) return function(t, i, e) {
                                    var s = t.parentElement,
                                        c = new Comment("v-if");
                                    s.insertBefore(c, t);
                                    for (var n, a = [{
                                            exp: i,
                                            el: t
                                        }], r = void 0;
                                        (n = t.nextElementSibling) && (r = null, "" === Et(n, "v-else") || (r = Et(n, "v-else-if")));) s.removeChild(n), a.push({
                                        exp: r,
                                        el: n
                                    });
                                    i = t.nextSibling;

                                    function o() {
                                        h && (s.insertBefore(c, h.el), h.remove(), h = void 0)
                                    }
                                    s.removeChild(t);
                                    var h = void 0,
                                        l = -1;
                                    return e.effect(function() {
                                        for (var t = 0; t < a.length; t++) {
                                            var i = a[t],
                                                n = i.exp,
                                                i = i.el;
                                            if (!n || Lt(e.scope, n)) return void(t !== l && (o(), (h = new ai(i, e)).insert(s, c), s.removeChild(c), l = t))
                                        }
                                        l = -1, o()
                                    }), i
                                }(e, s, i);
                                if (s = Et(e, "v-for")) return Gt(e, s, i);
                                !(s = Et(e, "v-scope")) && "" !== s || (f = s ? Lt(i.scope, s) : {}, i = si(i, f), f.$template && ei(e, f.$template));
                                var c = null != Et(e, "v-once");
                                c && (Qt = !0), (s = Et(e, "ref")) && ni(e, Yt, '"' + s + '"', i), ti(e, i);
                                for (var a = [], r = [...e.attributes], o = 0; o < r.length; o++) {
                                    var h = r[o],
                                        l = h.name,
                                        h = h.value;
                                    Zt.test(l) && "v-cloak" !== l && ("v-model" === l ? a.unshift([l, h]) : "@" === l[0] || /^v-on\b/.test(l) ? a.push([l, h]) : ii(e, l, h, i))
                                }
                                var u = !0,
                                    f = !1,
                                    s = void 0;
                                try {
                                    for (var d, v = a[Symbol.iterator](); !(u = (d = v.next()).done); u = !0) {
                                        var p = d.value,
                                            y = li(p, 2),
                                            m = y[0],
                                            _ = y[1];
                                        ii(e, m, _, i)
                                    }
                                } catch (t) {
                                    f = !0, s = t
                                } finally {
                                    try {
                                        !u && v.return && v.return()
                                    } finally {
                                        if (f) throw s
                                    }
                                }
                                c && (Qt = !1)
                            }
                        } else if (3 === n) {
                            var g = t.data;
                            if (g.includes(i.delimiters[0])) {
                                for (var w, b = [], k = 0; w = i.delimitersRE.exec(g);) {
                                    var x = g.slice(k, w.index);
                                    x && b.push(JSON.stringify(x)), b.push("$s(" + w[1] + ")"), k = w.index + w[0].length
                                }
                                k < g.length && b.push(JSON.stringify(g.slice(k))), ni(t, At, b.join("+"), i)
                            }
                        } else 11 === n && ti(t, i)
                    }

                    function Ut(t) {
                        var n = vi(di({
                            delimiters: ["{{", "}}"],
                            delimitersRE: /\{\{([^]+?)\}\}/g
                        }, t), {
                            scope: t ? t.scope : nt({}),
                            dirs: t ? t.dirs : {},
                            effects: [],
                            blocks: [],
                            cleanups: [],
                            effect: function(t) {
                                if (Qt) return kt(t), t;
                                var i = function(t, i) {
                                    t.effect && (t = t.effect.fn);
                                    t = new O(t);
                                    e(t, i), i.scope && $(t, i.scope), i.lazy || t.run();
                                    i = t.run.bind(t);
                                    return i.effect = t, i
                                }(t, {
                                    scheduler: function() {
                                        return kt(i)
                                    }
                                });
                                return n.effects.push(i), i
                            }
                        });
                        return n
                    }
                    qt.prototype = {
                        constructor: qt,
                        lex: function(t) {
                            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                                var i, n, e, s, c, a = this.text.charAt(this.index);
                                '"' === a || "'" === a ? this.readString(a) : this.isNumber(a) || "." === a && this.isNumber(this.peek()) ? this.readNumber() : this.isIdentifierStart(this.peekMultichar()) ? this.readIdent() : this.is(a, "(){}[].,;:?") ? (this.tokens.push({
                                    index: this.index,
                                    text: a
                                }), this.index++) : this.isWhitespace(a) ? this.index++ : (n = (i = a + this.peek()) + this.peek(2), e = It[a], s = It[i], c = It[n], e || s || c ? (this.tokens.push({
                                    index: this.index,
                                    text: a = c ? n : s ? i : a,
                                    operator: !0
                                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1))
                            }
                            return this.tokens
                        },
                        is: function(t, i) {
                            return -1 !== i.indexOf(t)
                        },
                        peek: function(t) {
                            t = t || 1;
                            return this.index + t < this.text.length && this.text.charAt(this.index + t)
                        },
                        isNumber: function(t) {
                            return "0" <= t && t <= "9" && "string" == typeof t
                        },
                        isWhitespace: function(t) {
                            return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t
                        },
                        isIdentifierStart: function(t) {
                            return this.isValidIdentifierStart(t)
                        },
                        isValidIdentifierStart: function(t) {
                            return "a" <= t && t <= "z" || "A" <= t && t <= "Z" || "_" === t || "$" === t
                        },
                        isIdentifierContinue: function(t) {
                            return this.isValidIdentifierContinue(t)
                        },
                        isValidIdentifierContinue: function(t, i) {
                            return this.isValidIdentifierStart(t, i) || this.isNumber(t)
                        },
                        codePointAt: function(t) {
                            return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888
                        },
                        peekMultichar: function() {
                            var t = this.text.charAt(this.index),
                                i = this.peek();
                            if (!i) return t;
                            var n = t.charCodeAt(0),
                                e = i.charCodeAt(0);
                            return 55296 <= n && n <= 56319 && 56320 <= e && e <= 57343 ? t + i : t
                        },
                        isExpOperator: function(t) {
                            return "-" === t || "+" === t || this.isNumber(t)
                        },
                        throwError: function(t, i, n) {
                            throw n = n || this.index, _t("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, void 0 !== i ? "s " + i + "-" + this.index + " [" + this.text.substring(i, n) + "]" : " " + n, this.text)
                        },
                        readNumber: function() {
                            for (var t = "", i = this.index; this.index < this.text.length;) {
                                var n = this.text.charAt(this.index).toLowerCase();
                                if ("." === n || this.isNumber(n)) t += n;
                                else {
                                    var e = this.peek();
                                    if ("e" === n && this.isExpOperator(e)) t += n;
                                    else if (this.isExpOperator(n) && e && this.isNumber(e) && "e" === t.charAt(t.length - 1)) t += n;
                                    else {
                                        if (!this.isExpOperator(n) || e && this.isNumber(e) || "e" !== t.charAt(t.length - 1)) break;
                                        this.throwError("Invalid exponent")
                                    }
                                }
                                this.index++
                            }
                            this.tokens.push({
                                index: i,
                                text: t,
                                constant: !0,
                                value: Number(t)
                            })
                        },
                        readIdent: function() {
                            var t = this.index;
                            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                                var i = this.peekMultichar();
                                if (!this.isIdentifierContinue(i)) break;
                                this.index += i.length
                            }
                            this.tokens.push({
                                index: t,
                                text: this.text.slice(t, this.index),
                                identifier: !0
                            })
                        },
                        readString: function(t) {
                            var i = this.index;
                            this.index++;
                            for (var n = "", e = t, s = !1; this.index < this.text.length;) {
                                var c, a = this.text.charAt(this.index);
                                if (e += a, s) "u" === a ? ((c = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + c + "]"), this.index += 4, n += String.fromCharCode(parseInt(c, 16))) : n += Ot[a] || a, s = !1;
                                else if ("\\" === a) s = !0;
                                else {
                                    if (a === t) return this.index++, void this.tokens.push({
                                        index: i,
                                        text: e,
                                        constant: !0,
                                        value: n
                                    });
                                    n += a
                                }
                                this.index++
                            }
                            this.throwError("Unterminated quote", i)
                        }
                    }, Dt.Program = "Program", Dt.ExpressionStatement = "ExpressionStatement", Dt.AssignmentExpression = "AssignmentExpression", Dt.ConditionalExpression = "ConditionalExpression", Dt.LogicalExpression = "LogicalExpression", Dt.BinaryExpression = "BinaryExpression", Dt.UnaryExpression = "UnaryExpression", Dt.CallExpression = "CallExpression", Dt.MemberExpression = "MemberExpression", Dt.Identifier = "Identifier", Dt.Literal = "Literal", Dt.ArrayExpression = "ArrayExpression", Dt.Property = "Property", Dt.ObjectExpression = "ObjectExpression", Dt.ThisExpression = "ThisExpression", Dt.LocalsExpression = "LocalsExpression", Dt.NGValueParameter = "NGValueParameter", Dt.prototype = {
                        ast: function(t) {
                            this.text = t, this.tokens = this.lexer.lex(t);
                            t = this.program();
                            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
                        },
                        program: function() {
                            for (var t = [];;)
                                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return {
                                    type: Dt.Program,
                                    body: t
                                }
                        },
                        expressionStatement: function() {
                            return {
                                type: Dt.ExpressionStatement,
                                expression: this.expression()
                            }
                        },
                        expression: function() {
                            return this.assignment()
                        },
                        assignment: function() {
                            var t = this.ternary();
                            if (this.expect("=")) {
                                if (!Rt(t)) throw _t("lval", "Trying to assign a value to a non l-value");
                                t = {
                                    type: Dt.AssignmentExpression,
                                    left: t,
                                    right: this.assignment(),
                                    operator: "="
                                }
                            }
                            return t
                        },
                        ternary: function() {
                            var t, i, n = this.logicalOR();
                            return this.expect("?") && (t = this.expression(), this.consume(":")) ? (i = this.expression(), {
                                type: Dt.ConditionalExpression,
                                test: n,
                                alternate: t,
                                consequent: i
                            }) : n
                        },
                        logicalOR: function() {
                            for (var t = this.logicalAND(); this.expect("||");) t = {
                                type: Dt.LogicalExpression,
                                operator: "||",
                                left: t,
                                right: this.logicalAND()
                            };
                            return t
                        },
                        logicalAND: function() {
                            for (var t = this.equality(); this.expect("&&");) t = {
                                type: Dt.LogicalExpression,
                                operator: "&&",
                                left: t,
                                right: this.equality()
                            };
                            return t
                        },
                        equality: function() {
                            for (var t, i = this.relational(); t = this.expect("==", "!=", "===", "!==");) i = {
                                type: Dt.BinaryExpression,
                                operator: t.text,
                                left: i,
                                right: this.relational()
                            };
                            return i
                        },
                        relational: function() {
                            for (var t, i = this.additive(); t = this.expect("<", ">", "<=", ">=");) i = {
                                type: Dt.BinaryExpression,
                                operator: t.text,
                                left: i,
                                right: this.additive()
                            };
                            return i
                        },
                        additive: function() {
                            for (var t, i = this.multiplicative(); t = this.expect("+", "-");) i = {
                                type: Dt.BinaryExpression,
                                operator: t.text,
                                left: i,
                                right: this.multiplicative()
                            };
                            return i
                        },
                        multiplicative: function() {
                            for (var t, i = this.unary(); t = this.expect("*", "/", "%");) i = {
                                type: Dt.BinaryExpression,
                                operator: t.text,
                                left: i,
                                right: this.unary()
                            };
                            return i
                        },
                        unary: function() {
                            var t;
                            return (t = this.expect("+", "-", "!")) ? {
                                type: Dt.UnaryExpression,
                                operator: t.text,
                                prefix: !0,
                                argument: this.unary()
                            } : this.primary()
                        },
                        primary: function() {
                            var t, i;
                            for (this.expect("(") ? (t = this.expression(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = Object.assign({}, this.selfReferential[this.consume().text]) : St.hasOwnProperty(this.peek().text) ? t = {
                                    type: Dt.Literal,
                                    value: St[this.consume().text]
                                } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek()); i = this.expect("(", "[", ".");) "(" === i.text ? (t = {
                                type: Dt.CallExpression,
                                callee: t,
                                arguments: this.parseArguments()
                            }, this.consume(")")) : "[" === i.text ? (t = {
                                type: Dt.MemberExpression,
                                object: t,
                                property: this.expression(),
                                computed: !0
                            }, this.consume("]")) : "." === i.text ? t = {
                                type: Dt.MemberExpression,
                                object: t,
                                property: this.identifier(),
                                computed: !1
                            } : this.throwError("IMPOSSIBLE");
                            return t
                        },
                        parseArguments: function() {
                            var t = [];
                            if (")" !== this.peekToken().text)
                                for (; t.push(this.expression()), this.expect(","););
                            return t
                        },
                        identifier: function() {
                            var t = this.consume();
                            return t.identifier || this.throwError("is not a valid identifier", t), {
                                type: Dt.Identifier,
                                name: t.text
                            }
                        },
                        constant: function() {
                            return {
                                type: Dt.Literal,
                                value: this.consume().value
                            }
                        },
                        arrayDeclaration: function() {
                            var t = [];
                            if ("]" !== this.peekToken().text)
                                for (; !this.peek("]") && (t.push(this.expression()), this.expect(",")););
                            return this.consume("]"), {
                                type: Dt.ArrayExpression,
                                elements: t
                            }
                        },
                        object: function() {
                            var t, i = [];
                            if ("}" !== this.peekToken().text)
                                for (; !this.peek("}") && (t = {
                                        type: Dt.Property,
                                        kind: "init"
                                    }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(":"), t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), t.computed = !1, this.peek(":") ? (this.consume(":"), t.value = this.expression()) : t.value = t.key) : this.peek("[") ? (this.consume("["), t.key = this.expression(), this.consume("]"), t.computed = !0, this.consume(":"), t.value = this.expression()) : this.throwError("invalid key", this.peek()), i.push(t), this.expect(",")););
                            return this.consume("}"), {
                                type: Dt.ObjectExpression,
                                properties: i
                            }
                        },
                        throwError: function(t, i) {
                            throw _t("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", i.text, t, i.index + 1, this.text, this.text.substring(i.index))
                        },
                        consume: function(t) {
                            if (0 === this.tokens.length) throw _t("ueoe", "Unexpected end of expression: {0}", this.text);
                            var i = this.expect(t);
                            return i || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), i
                        },
                        peekToken: function() {
                            if (0 === this.tokens.length) throw _t("ueoe", "Unexpected end of expression: {0}", this.text);
                            return this.tokens[0]
                        },
                        peek: function(t, i, n, e) {
                            return this.peekAhead(0, t, i, n, e)
                        },
                        peekAhead: function(t, i, n, e, s) {
                            if (this.tokens.length > t) {
                                var c = this.tokens[t],
                                    t = c.text;
                                if (t === i || t === n || t === e || t === s || !i && !n && !e && !s) return c
                            }
                            return !1
                        },
                        expect: function(t, i, n, e) {
                            e = this.peek(t, i, n, e);
                            return !!e && (this.tokens.shift(), e)
                        },
                        selfReferential: {
                            this: {
                                type: Dt.ThisExpression
                            },
                            $locals: {
                                type: Dt.LocalsExpression
                            }
                        }
                    }, Bt.prototype = {
                        compile: function(i) {
                            var e, s = this;
                            (function i(t, n) {
                                var e, s, c = t.isPure = function(t, i) {
                                    switch (t.type) {
                                        case Dt.MemberExpression:
                                            if (t.computed) return !1;
                                            break;
                                        case Dt.UnaryExpression:
                                            return 1;
                                        case Dt.BinaryExpression:
                                            return "+" !== t.operator && 1;
                                        case Dt.CallExpression:
                                            return !1
                                    }
                                    return void 0 === i ? 2 : i
                                }(t, n);
                                switch (t.type) {
                                    case Dt.Program:
                                        e = !0, t.body.forEach(function(t) {
                                            i(t.expression, c), e = e && t.expression.constant
                                        }), t.constant = e;
                                        break;
                                    case Dt.Literal:
                                        t.constant = !0, t.toWatch = [];
                                        break;
                                    case Dt.UnaryExpression:
                                        i(t.argument, c), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
                                        break;
                                    case Dt.BinaryExpression:
                                        i(t.left, c), i(t.right, c), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
                                        break;
                                    case Dt.LogicalExpression:
                                        i(t.left, c), i(t.right, c), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
                                        break;
                                    case Dt.ConditionalExpression:
                                        i(t.test, c), i(t.alternate, c), i(t.consequent, c), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
                                        break;
                                    case Dt.Identifier:
                                        t.constant = !1, t.toWatch = [t];
                                        break;
                                    case Dt.MemberExpression:
                                        i(t.object, c), t.computed && i(t.property, c), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = t.constant ? [] : [t];
                                        break;
                                    case Dt.CallExpression:
                                        e = !1, s = [], t.arguments.forEach(function(t) {
                                            i(t, c), e = e && t.constant, s.push.apply(s, t.toWatch)
                                        }), t.constant = e, t.toWatch = [t];
                                        break;
                                    case Dt.AssignmentExpression:
                                        i(t.left, c), i(t.right, c), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
                                        break;
                                    case Dt.ArrayExpression:
                                        e = !0, s = [], t.elements.forEach(function(t) {
                                            i(t, c), e = e && t.constant, s.push.apply(s, t.toWatch)
                                        }), t.constant = e, t.toWatch = s;
                                        break;
                                    case Dt.ObjectExpression:
                                        e = !0, s = [], t.properties.forEach(function(t) {
                                            i(t.value, c), e = e && t.value.constant, s.push.apply(s, t.value.toWatch), t.computed && (i(t.key, !1), e = e && t.key.constant, s.push.apply(s, t.key.toWatch))
                                        }), t.constant = e, t.toWatch = s;
                                        break;
                                    case Dt.ThisExpression:
                                    case Dt.LocalsExpression:
                                        t.constant = !1, t.toWatch = []
                                }
                            })(i), (t = function(t) {
                                if (1 === i.body.length && Rt(i.body[0].expression)) return {
                                    type: Dt.AssignmentExpression,
                                    left: i.body[0].expression,
                                    right: {
                                        type: Dt.NGValueParameter
                                    },
                                    operator: "="
                                }
                            }()) && (e = this.recurse(t));
                            var c, t = function(t) {
                                if (1 === t.length) {
                                    var i = t[0].expression,
                                        t = i.toWatch;
                                    return 1 !== t.length || t[0] !== i ? t : void 0
                                }
                            }(i.body);
                            t && (c = [], t.forEach(function(t, i) {
                                var n = s.recurse(t);
                                n.isPure = t.isPure, t.input = n, c.push(n), t.watchId = i
                            }));
                            var a = [];
                            i.body.forEach(function(t) {
                                a.push(s.recurse(t.expression))
                            });
                            t = 0 === i.body.length ? noop : 1 === i.body.length ? a[0] : function(i, n) {
                                var e;
                                return a.forEach(function(t) {
                                    e = t(i, n)
                                }), e
                            };
                            return e && (t.assign = function(t, i, n) {
                                return e(t, n, i)
                            }), c && (t.inputs = c), t
                        },
                        recurse: function(t, o, i) {
                            var c, h, l, n = this;
                            if (t.input) return this.inputs(t.input, t.watchId);
                            switch (t.type) {
                                case Dt.Literal:
                                    return this.value(t.value, o);
                                case Dt.UnaryExpression:
                                    return h = this.recurse(t.argument), this["unary" + t.operator](h, o);
                                case Dt.BinaryExpression:
                                case Dt.LogicalExpression:
                                    return c = this.recurse(t.left), h = this.recurse(t.right), this["binary" + t.operator](c, h, o);
                                case Dt.ConditionalExpression:
                                    return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), o);
                                case Dt.Identifier:
                                    return n.identifier(t.name, o, i);
                                case Dt.MemberExpression:
                                    return c = this.recurse(t.object, !1, !!i), t.computed || (h = t.property.name), t.computed && (h = this.recurse(t.property)), t.computed ? this.computedMember(c, h, o, i) : this.nonComputedMember(c, h, o, i);
                                case Dt.CallExpression:
                                    return l = [], t.arguments.forEach(function(t) {
                                            l.push(n.recurse(t))
                                        }), h = this.recurse(t.callee, !0),
                                        function(t, i, n, e) {
                                            var s, c = h(t, i, n, e);
                                            if (null != c.value) {
                                                for (var a = [], r = 0; r < l.length; ++r) a.push(l[r](t, i, n, e));
                                                s = c.value.apply(c.context, a)
                                            }
                                            return o ? {
                                                value: s
                                            } : s
                                        };
                                case Dt.AssignmentExpression:
                                    return c = this.recurse(t.left, !0, 1), h = this.recurse(t.right),
                                        function(t, i, n, e) {
                                            var s = c(t, i, n, e),
                                                e = h(t, i, n, e);
                                            return s.context[s.name] = e, o ? {
                                                value: e
                                            } : e
                                        };
                                case Dt.ArrayExpression:
                                    return l = [], t.elements.forEach(function(t) {
                                            l.push(n.recurse(t))
                                        }),
                                        function(t, i, n, e) {
                                            for (var s = [], c = 0; c < l.length; ++c) s.push(l[c](t, i, n, e));
                                            return o ? {
                                                value: s
                                            } : s
                                        };
                                case Dt.ObjectExpression:
                                    return l = [], t.properties.forEach(function(t) {
                                            t.computed ? l.push({
                                                key: n.recurse(t.key),
                                                computed: !0,
                                                value: n.recurse(t.value)
                                            }) : l.push({
                                                key: t.key.type === Dt.Identifier ? t.key.name : "" + t.key.value,
                                                computed: !1,
                                                value: n.recurse(t.value)
                                            })
                                        }),
                                        function(t, i, n, e) {
                                            for (var s = {}, c = 0; c < l.length; ++c) l[c].computed ? s[l[c].key(t, i, n, e)] = l[c].value(t, i, n, e) : s[l[c].key] = l[c].value(t, i, n, e);
                                            return o ? {
                                                value: s
                                            } : s
                                        };
                                case Dt.ThisExpression:
                                    return function(t) {
                                        return o ? {
                                            value: t
                                        } : t
                                    };
                                case Dt.LocalsExpression:
                                    return function(t, i) {
                                        return o ? {
                                            value: i
                                        } : i
                                    };
                                case Dt.NGValueParameter:
                                    return function(t, i, n) {
                                        return o ? {
                                            value: n
                                        } : n
                                    }
                            }
                        },
                        "unary+": function(s, c) {
                            return function(t, i, n, e) {
                                e = void 0 !== (e = s(t, i, n, e)) ? +e : 0;
                                return c ? {
                                    value: e
                                } : e
                            }
                        },
                        "unary-": function(s, c) {
                            return function(t, i, n, e) {
                                e = void 0 !== (e = s(t, i, n, e)) ? -e : -0;
                                return c ? {
                                    value: e
                                } : e
                            }
                        },
                        "unary!": function(s, c) {
                            return function(t, i, n, e) {
                                e = !s(t, i, n, e);
                                return c ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary+": function(c, a, r) {
                            return function(t, i, n, e) {
                                var s, e = (s = c(t, i, n, e), e = a(t, i, n, e), void 0 === s ? e : void 0 === e ? s : s + e);
                                return r ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary-": function(c, a, r) {
                            return function(t, i, n, e) {
                                var s = c(t, i, n, e),
                                    e = a(t, i, n, e),
                                    e = (void 0 !== s ? s : 0) - (void 0 !== e ? e : 0);
                                return r ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary*": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) * c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary/": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) / c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary%": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) % c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary===": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) === c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary!==": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) !== c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary==": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) == c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary!=": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) != c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary<": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) < c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary>": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) > c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary<=": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) <= c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary>=": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) >= c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary&&": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) && c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "binary||": function(s, c, a) {
                            return function(t, i, n, e) {
                                e = s(t, i, n, e) || c(t, i, n, e);
                                return a ? {
                                    value: e
                                } : e
                            }
                        },
                        "ternary?:": function(s, c, a, r) {
                            return function(t, i, n, e) {
                                e = (s(t, i, n, e) ? c : a)(t, i, n, e);
                                return r ? {
                                    value: e
                                } : e
                            }
                        },
                        value: function(t, i) {
                            return function() {
                                return i ? {
                                    context: void 0,
                                    name: void 0,
                                    value: t
                                } : t
                            }
                        },
                        identifier: function(s, c, a) {
                            return function(t, i, n, e) {
                                i = i && s in i ? i : t;
                                a && 1 !== a && i && null == i[s] && (i[s] = {});
                                t = i ? i[s] : void 0;
                                return c ? {
                                    context: i,
                                    name: s,
                                    value: t
                                } : t
                            }
                        },
                        computedMember: function(r, o, h, l) {
                            return function(t, i, n, e) {
                                var s, c, a = r(t, i, n, e);
                                return null != a && (s = o(t, i, n, e), s += "", l && 1 !== l && a && !a[s] && (a[s] = {}), c = a[s]), h ? {
                                    context: a,
                                    name: s,
                                    value: c
                                } : c
                            }
                        },
                        nonComputedMember: function(s, c, a, r) {
                            return function(t, i, n, e) {
                                n = s(t, i, n, e);
                                r && 1 !== r && n && null == n[c] && (n[c] = {});
                                e = null != n ? n[c] : void 0;
                                return a ? {
                                    context: n,
                                    name: c,
                                    value: e
                                } : e
                            }
                        },
                        inputs: function(s, c) {
                            return function(t, i, n, e) {
                                return e ? e[c] : s(t, i, n)
                            }
                        }
                    };
                    var Pt = new function() {
                            var e = {};
                            return function(t, i) {
                                var n;
                                return t = t.trim(), (n = e[t]) ? n : new Nt(new qt).parse(t)
                            }
                        },
                        Lt = function(t, i, n) {
                            return Mt(t, i)
                        },
                        Jt = {
                            bind: ht,
                            on: ft,
                            show: function(t) {
                                var i = t.el,
                                    n = t.get,
                                    t = t.effect,
                                    e = i.style.display;
                                t(function() {
                                    i.style.display = n() ? e : "none"
                                })
                            },
                            text: At,
                            html: function(t) {
                                var i = t.el,
                                    n = t.get;
                                (0, t.effect)(function() {
                                    i.innerHTML = n()
                                })
                            },
                            model: function(t) {
                                function c(t) {
                                    t = (t = t.replace(l, "\\\\")).replace(u, '\\"');
                                    o(e + ' = "' + t + '"')
                                }
                                var a, i, n, r = t.el,
                                    e = t.exp,
                                    o = t.get,
                                    s = t.effect,
                                    h = t.modifiers,
                                    l = /\\/g,
                                    u = /"/g,
                                    f = r.type,
                                    t = h || {},
                                    d = t.trim,
                                    t = t.number,
                                    v = void 0 === t ? "number" === f : t;
                                "SELECT" === r.tagName ? (ut(a = r, "change", function() {
                                    var t = Array.prototype.filter.call(a.options, function(t) {
                                        return t.selected
                                    }).map(function(t) {
                                        return v ? _(vt(t)) : vt(t)
                                    });
                                    c(a.multiple ? t : t[0])
                                }), s(function() {
                                    for (var t = o(), i = a.multiple, n = 0, e = a.options.length; n < e; n++) {
                                        var s = a.options[n],
                                            c = vt(s);
                                        if (i) k(t) ? s.selected = -1 < y(t, c) : s.selected = t.has(c);
                                        else if (p(vt(s), t)) return void(a.selectedIndex !== n && (a.selectedIndex = n))
                                    }
                                    i || -1 === a.selectedIndex || (a.selectedIndex = -1)
                                })) : "checkbox" === f ? (i = void 0, ut(r, "change", function() {
                                    var t, i, n, e = o(),
                                        s = r.checked;
                                    k(e) ? (n = -1 !== (i = y(e, t = vt(r))), s && !n ? c(e.concat(t)) : !s && n && ((e = [...e]).splice(i, 1), c(e))) : c(pt(r, s))
                                }), s(function() {
                                    var t = o();
                                    k(t) ? r.checked = -1 < y(t, vt(r)) : t !== i && (r.checked = p(t, pt(r, !0))), i = t
                                })) : "radio" === f ? (ut(r, "change", function() {
                                    c(vt(r))
                                }), s(function() {
                                    var t = o();
                                    void 0 !== t && (r.checked = p(t, vt(r)))
                                })) : (n = function(t) {
                                    return d ? t.trim() : v ? _(t) : t
                                }, ut(r, "compositionstart", yt), ut(r, "compositionend", mt), ut(r, null != h && h.lazy ? "change" : "input", function() {
                                    r.composing || c(n(r.value))
                                }), d && ut(r, "change", function() {
                                    r.value = r.value.trim()
                                }), s(function() {
                                    var t, i;
                                    r.composing || (t = r.value, i = o(), document.activeElement === r && n(t) === i || t !== i && (r.value = i))
                                }))
                            },
                            effect: function(t) {
                                t.el;
                                var i = t.ctx,
                                    n = t.exp,
                                    e = t.effect;
                                rt(function() {
                                    return e(function() {
                                        return Mt(i.scope, n)
                                    })
                                })
                            }
                        },
                        Vt = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                        Wt = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                        Ht = /^\(|\)$/g,
                        Kt = /^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,
                        Gt = function(e, t, l) {
                            var i = t.match(Vt);
                            if (i) {
                                var n = e.nextSibling,
                                    u = e.parentElement,
                                    f = new Text("");
                                u.insertBefore(f, e), u.removeChild(e);
                                var d = i[2].trim(),
                                    a = void 0,
                                    r = void 0,
                                    o = void 0,
                                    t = void 0,
                                    h = i[1].trim().replace(Ht, "").trim(),
                                    v = !1,
                                    i = "key",
                                    p = e.getAttribute(i) || e.getAttribute(i = ":key") || e.getAttribute(i = "v-bind:key");

                                function y(t, n, i, e) {
                                    var s = {};
                                    a ? a.forEach(function(t, i) {
                                        return s[t] = n[v ? i : t]
                                    }) : s[h] = n, e ? (r && (s[r] = e), o && (s[o] = i)) : r && (s[r] = i);
                                    var c = si(l, s),
                                        e = p ? Lt(c.scope, p) : i;
                                    return t.set(e, i), c.key = e, c
                                }

                                function m(t, i) {
                                    var n = new ai(e, t);
                                    return n.key = t.key, n.insert(u, i), n
                                }
                                p && (e.removeAttribute(i), "key" === i && (p = JSON.stringify(p))), (t = h.match(Wt)) && (h = h.replace(Wt, "").trim(), r = t[1].trim(), t[2] && (o = t[2].trim())), (t = h.match(Kt)) && (a = t[1].split(",").map(function(t) {
                                    return t.trim()
                                }), v = "[" === h[0]);
                                var _ = void 0,
                                    g = void 0,
                                    w = void 0,
                                    b = !1;
                                return l.effect(function() {
                                    var t = Lt(l.scope, d),
                                        i = w,
                                        t = function(t) {
                                            var i = new Map,
                                                n = [];
                                            if (k(t))
                                                for (var e = 0; e < t.length; e++) n.push(y(i, t[e], e));
                                            else if ("number" == typeof t)
                                                for (var s = 0; s < t; s++) n.push(y(i, s + 1, s));
                                            else if (x(t)) {
                                                var c, a = 0;
                                                for (c in t) n.push(y(i, t[c], a++, c))
                                            }
                                            return [n, i]
                                        }(t),
                                        t = li(t, 2);
                                    if (g = t[0], w = t[1], b) {
                                        for (var n = 0; n < _.length; n++) w.has(_[n].key) || _[n].remove();
                                        for (var e = [], s = void 0, c = void 0, a = g.length; a--;) {
                                            var r = g[a],
                                                o = i.get(r.key),
                                                h = void 0;
                                            null == o ? h = m(r, s ? s.el : f) : (h = _[o], Object.assign(h.ctx.scope, r.scope), o === a || _[o + 1] === s && c !== s || (c = h).insert(u, s ? s.el : f)), e.unshift(s = h)
                                        }
                                        _ = e
                                    } else _ = g.map(function(t) {
                                        return m(t, f)
                                    }), b = !0
                                }), n
                            }
                        },
                        Yt = function(t) {
                            var i = t.el,
                                n = t.ctx.scope.$refs,
                                e = t.get,
                                t = t.effect,
                                s = void 0;
                            return t(function() {
                                    var t = e();
                                    n[t] = i, s && t !== s && delete n[s], s = t
                                }),
                                function() {
                                    s && delete n[s]
                                }
                        },
                        Zt = /^(?:v-|:|@)/,
                        Xt = /\.([\w-]+)/g,
                        Qt = !(Nt.prototype = {
                            constructor: Nt,
                            parse: function(t) {
                                var i = this.getAst(t),
                                    n = this.astCompiler.compile(i.ast);
                                return n.literal = 0 === (t = i.ast).body.length || 1 === t.body.length && (t.body[0].expression.type === Dt.Literal || t.body[0].expression.type === Dt.ArrayExpression || t.body[0].expression.type === Dt.ObjectExpression), n.constant = i.ast.constant, n.oneTime = i.oneTime, n
                            },
                            getAst: function(t) {
                                var i = !1;
                                return ":" === (t = t.trim()).charAt(0) && ":" === t.charAt(1) && (i = !0, t = t.substring(2)), {
                                    ast: this.ast.ast(t),
                                    oneTime: i
                                }
                            }
                        }),
                        ti = function(t, i) {
                            for (var n = t.firstChild; n;) n = Tt(n, i) || n.nextSibling
                        },
                        ii = function(t, i, n, e) {
                            var s, c = void 0,
                                a = void 0,
                                r = i.replace(Xt, function(t, i) {
                                    return (a = a || {})[i] = !0, ""
                                }),
                                o = ":" === r[0] ? (c = ht, r.slice(1)) : "@" === r[0] ? (c = ft, r.slice(1)) : (s = 0 < (o = r.indexOf(":")) ? r.slice(2, o) : r.slice(2), c = Jt[s] || e.dirs[s], 0 < o ? r.slice(o + 1) : void 0);
                            c && (ni(t, c = c === ht && "ref" === o ? Yt : c, n, e, o, a), t.removeAttribute(i))
                        },
                        ni = function(t, i, n, e, s, c) {
                            c = i({
                                el: t,
                                get: function() {
                                    return Lt(e.scope, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : n)
                                },
                                effect: e.effect,
                                ctx: e,
                                exp: n,
                                arg: s,
                                modifiers: c
                            });
                            c && e.cleanups.push(c)
                        },
                        ei = function(t, i) {
                            "#" !== i[0] ? t.innerHTML = i : (i = document.querySelector(i), t.appendChild(i.content.cloneNode(!0)))
                        },
                        si = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                s = t.scope,
                                n = Object.create(s);
                            Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)), n.$refs = Object.create(s.$refs);
                            var c = nt(new Proxy(n, {
                                set: function(t, i, n, e) {
                                    return e !== c || t.hasOwnProperty(i) ? Reflect.set(t, i, n, e) : Reflect.set(s, i, n)
                                }
                            }));
                            return ci(c), vi(di({}, t), {
                                scope: c
                            })
                        },
                        ci = function(t) {
                            var i = !0,
                                n = !1,
                                e = void 0;
                            try {
                                for (var s, c = Object.keys(t)[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                    var a = s.value;
                                    "function" == typeof t[a] && (t[a] = t[a].bind(t))
                                }
                            } catch (t) {
                                n = !0, e = t
                            } finally {
                                try {
                                    !i && c.return && c.return()
                                } finally {
                                    if (n) throw e
                                }
                            }
                        },
                        ai = (ri.prototype.insert = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                            if (this.isFragment)
                                if (this.start)
                                    for (var n = void 0, e = this.start; e && (n = e.nextSibling, t.insertBefore(e, i), e !== this.end);) e = n;
                                else this.start = new Text(""), this.end = new Text(""), t.insertBefore(this.end, i), t.insertBefore(this.start, this.end), t.insertBefore(this.template, this.end);
                            else t.insertBefore(this.template, i)
                        }, ri.prototype.remove = function() {
                            if (this.parentCtx && -1 < (s = (e = this.parentCtx.blocks).indexOf(this)) && e.splice(s, 1), this.start)
                                for (var t = this.start.parentNode, i = void 0, n = this.start; n && (i = n.nextSibling, t.removeChild(n), n !== this.end);) n = i;
                            else this.template.parentNode.removeChild(this.template);
                            var e, s;
                            this.teardown()
                        }, ri.prototype.teardown = function() {
                            this.ctx.blocks.forEach(function(t) {
                                t.teardown()
                            }), this.ctx.effects.forEach(B), this.ctx.cleanups.forEach(function(t) {
                                return t()
                            })
                        }, pi(ri.prototype, [{
                            key: "el",
                            get: function() {
                                return this.start || this.template
                            }
                        }]), ri);

                    function ri(t, i) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                        fi(this, "template"), fi(this, "ctx"), fi(this, "key"), fi(this, "parentCtx"), fi(this, "isFragment"), fi(this, "start"), fi(this, "end"), this.isFragment = t instanceof HTMLTemplateElement, n ? this.template = t : this.isFragment ? this.template = t.content.cloneNode(!0) : this.template = t.cloneNode(!0), n ? this.ctx = i : ((this.parentCtx = i).blocks.push(this), this.ctx = Ut(i)), Tt(this.template, this.ctx)
                    }

                    function oi(t) {
                        return t.replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&")
                    }

                    function hi(t) {
                        var i, n = Ut();
                        t && (n.scope = nt(t), ci(n.scope), t.$delimiters) && (i = n.delimiters = t.$delimiters, i = (t = li(i, 2))[0], t = t[1], n.delimitersRE = new RegExp(oi(i) + "([^]+?)" + oi(t), "g"));
                        var e = void 0;
                        return n.scope.$s = dt, n.scope.$nextTick = rt, n.scope.$refs = Object.create(null), {
                            directive: function(t, i) {
                                return i ? (n.dirs[t] = i, this) : n.dirs[t]
                            },
                            mount: function(t) {
                                if ("string" != typeof t || (t = document.querySelector(t))) {
                                    var i = void 0;
                                    return (i = (t = t || document.documentElement).hasAttribute("v-scope") ? [t] : [...t.querySelectorAll("[v-scope]")].filter(function(t) {
                                        return !t.matches("[v-scope] [v-scope]")
                                    })).length || (i = [t]), e = i.map(function(t) {
                                        return new ai(t, n, !0)
                                    }), this
                                }
                            },
                            unmount: function() {
                                e.forEach(function(t) {
                                    return t.teardown()
                                })
                            }
                        }
                    }
                    H = document.currentScript;
                    return H && H.hasAttribute("init") && hi().mount(), t.createApp = hi, t.nextTick = rt, t.reactive = nt, Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t[Symbol.toStringTag] = "Module", t
                }({}), i = c, y.prototype.init = function(t) {
                    var i = (n.prototype.code = function(t) {
                        return this.parent.template.render("smiley", {
                            name: t,
                            size: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "small"
                        })
                    }, n.prototype.parse = function(t) {
                        var i, n, e = void 0,
                            s = void 0,
                            c = t;
                        for (e in this.d)
                            if (this.d.hasOwnProperty(e))
                                for (i = this.d[e]; null !== (n = c.match(i));) s = "small", c === n[2] && (s = "large"), n = this.code(e, s), c = c.replace(i, "$1" + n + "$3");
                        return c
                    }, n.prototype.count = function(t) {
                        var i = 0,
                            n = void 0,
                            e = void 0,
                            s = t;
                        for (n in this.d)
                            if (this.d.hasOwnProperty(n))
                                for (e = this.d[n]; !0 === e.test(s);) i++, s = s.replace(e, "$1[]$3");
                        return i
                    }, n.prototype.name = function(t) {
                        var i, n = void 0,
                            e = null;
                        for (n in this.d)
                            if (this.d.hasOwnProperty(n) && (i = this.d[n], t.match(i))) {
                                e = n;
                                break
                            }
                        return e
                    }, n.prototype.p = function() {
                        var t = void 0;
                        for (t in this.d = {}, this.m) this.d[t] = new RegExp("(^|\\s|\\()" + this.m[t] + "($|\\s|\\))", "i")
                    }, n);

                    function n(t) {
                        this.parent = t, this.smiley_map = {
                            angry: ":@",
                            blushing: ":$",
                            confused: "x)",
                            cool: "8)",
                            crying: ":'(",
                            embarrased: ":/",
                            heart: "<3",
                            laughing: ":'D",
                            sad: ":(",
                            sick: ":S",
                            "small-smile": ":)",
                            "big-smile": ":D",
                            "thumbs-up": "+1",
                            surprised: ":o",
                            tongue: ":P",
                            winking: ";)"
                        }, this.m = {
                            angry: "((?:=|:)(?:-)?@)",
                            blushing: "((?:=|:)(?:-)?\\$)",
                            cool: "(8(?:-)?\\))",
                            confused: "(x(?:-)?\\))",
                            crying: "((?:=|:)'(?:-)?\\()",
                            embarrased: "((?:=|:)(?:-)?\\/)",
                            heart: "(&lt;3)",
                            laughing: "((?:=|:)(?:-)?'D)",
                            sad: "((?:=|:)(?:-)?(?:\\(|\\|))",
                            sick: "((?:=|:)(?:-)?S)",
                            "small-smile": "((?:=|:)(?:-)?\\))",
                            "big-smile": "((?:=|:)(?:-)?D)",
                            "thumbs-up": "(\\+1)",
                            surprised: "((?:=|:)(?:-)?o)",
                            tongue: "((?:=|:)(?:-)?P)",
                            winking: "(;(?:-)?\\))"
                        }, this.p()
                    }
                    var e = (s.prototype.format = function(t) {
                        for (var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [], s = void 0, c = t, s = 0; s < this._.length; s++) i = this._[s], -1 === e.indexOf(i) && (c = this.g[i].bind(this)(c, n));
                        return c
                    }, s.prototype.replace = function(t) {
                        for (var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], n = void 0, e = t, n = 0; n < i.length; n++) e = e.replace("%" + (n + 1) + "s", i[n]);
                        return e
                    }, s.prototype.attribute = function(t) {
                        return this.b(t, {}, this.k)
                    }, s.prototype.html = function(t) {
                        return this.b(t, {}, !0 === (1 < arguments.length && void 0 !== arguments[1] && arguments[1]) ? this.$ : this.F)
                    }, s.prototype.escape_regex = function(t) {
                        return t.replace(this.j, "\\$&")
                    }, s.prototype.b = function(t) {
                        var i, n = void 0,
                            e = t,
                            s = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null) || this.F;
                        for (n in s) s.hasOwnProperty(n) && (i = s[n], e = e.replace(i, n));
                        return e
                    }, s.prototype.z = function(t) {
                        return t.replace(/\n(\s+)?\n(\s+)?\n/g, "\n\n")
                    }, s.prototype.C = function(t) {
                        var i = this.parent.template.render("new_line", {}, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {});
                        return t.trim().replace(/\n/g, i)
                    }, s.prototype.A = function(t) {
                        var s = this,
                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.S(t, this.I.email, function(t, i, n, e) {
                            return "" + i + s.parent.template.render("link_email", {
                                email: n,
                                no_external_link: s.parent.config.runtime.no_external_link || !1
                            }, c) + e
                        })
                    }, s.prototype.q = function(t) {
                        var s = this,
                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.S(t, this.I.phone, function(t, i, n, e) {
                            return "" + i + s.parent.template.render("link_phone", {
                                phone: n,
                                no_external_link: s.parent.config.runtime.no_external_link || !1
                            }, c) + e
                        })
                    }, s.prototype.O = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        t = "\n" + t + "\n";
                        for (var n = 0; n < this.D.length; n++) t = t.replace(this.D[n][1], this.R(this.D[n], i));
                        return t = t.trim()
                    }, s.prototype.B = function(t) {
                        var s = this,
                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.S(t, this.I.domain, function(t, i, n, e) {
                            return "" + i + s.parent.template.render("link_domain", {
                                domain_value: n,
                                domain_name: n,
                                no_external_link: s.parent.config.runtime.no_external_link || !1
                            }, c) + e
                        })
                    }, s.prototype.N = function(t) {
                        var c = this,
                            a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.S(t, this.I.uri, function(t, i, n, e) {
                            var s = !0 === c.M.test(n) ? "http://" + n : n;
                            return "" + i + c.parent.template.render("link_uri", {
                                uri_value: s,
                                uri_name: n,
                                no_external_link: c.parent.config.runtime.no_external_link || !1
                            }, a) + e
                        })
                    }, s.prototype.T = function(t) {
                        return this.parent.Smileys.parse(t)
                    }, s.prototype.U = function(t) {
                        var i = (t.value || "").match(this.P);
                        i && i[1] ? (t.type = i[1], t.value = i[2]) : t.type = "none", t.value = (t.value || "").trim()
                    }, s.prototype.L = function(t) {
                        var i = t.type.split("|"),
                            s = i.slice(1, i.length - 1).map(function(t) {
                                return (t || "").trim()
                            }),
                            i = t.value.split("\n").map(function(t) {
                                var t = t.split("|"),
                                    i = t.slice(1, t.length - 1).map(function(t) {
                                        return (t || "").trim()
                                    }),
                                    n = s.length - i.length;
                                if (0 != n)
                                    if (n < 0) i = i.slice(0, s.length);
                                    else
                                        for (var e = 0; e < n; e++) i.push("");
                                return i
                            });
                        t.type = s, t.value = i
                    }, s.prototype.R = function(r) {
                        var o = this,
                            h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        return function(t, i, n, e, s) {
                            var c = "markdown_" + r[0],
                                a = {
                                    type: null,
                                    value: null,
                                    url_crisp_image: o.parent.config.url.crisp_image,
                                    no_external_link: o.parent.config.runtime.no_external_link || !1
                                },
                                i = ("string" == typeof i ? i : null) || "",
                                s = ("string" == typeof s ? s : null) || "";
                            a.type = n, a.value = e, -1 !== o.J.indexOf(r[0]) && "string" == typeof a.value && (a.value = a.value.trim()), -1 !== o.V.indexOf(r[0]) && "string" == typeof a.value && (a.value = o.W(a.value));
                            e = o.H[c] || null;
                            return null !== e && e.bind(o)(a), "" + i + o.parent.template.render(c, a, h) + s
                        }
                    }, s.prototype.S = function(t, i, s) {
                        var c = this,
                            n = t.match(i);
                        if (n)
                            for (var e = 0; e < n.length; e++) {
                                var a = n[e].replace(this.K, function(t, i, n) {
                                    return "" + i + n
                                });
                                t = t.replace(n[e], a)
                            }
                        return t.replace(i, function(t, i, n, e) {
                            return s(t, i, n, e.replace(c.G, ""))
                        })
                    }, s.prototype.W = function(t) {
                        return (t = this.b(t, {}, this.Y)).replace(this.Z, function(t) {
                            return "&#" + t.charCodeAt(0) + ";"
                        })
                    }, s.prototype.X = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "gi",
                            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        return new RegExp("" + (n.prefix || "") + t + (n.suffix || ""), i)
                    }, s.prototype.Q = function() {
                        this.I = {
                            email: this.X("([\\w\\._-]+@[\\w\\.\\/_-]+)", "gi", this.tt.links),
                            phone: this.X("(\\+[0-9]{1,3}[ \\(\\)\\-0-9]{7,20})", "gi", this.tt.links),
                            domain: this.X(["((?:[^<>\\(\\)\\s,@]+)(?:\\.(?:", this.it.map(this.escape_regex.bind(this)).join("|"), ")))"].join(""), "gim", this.tt.links),
                            uri: this.X("((?:(?:(?:https?|ftps?|file):)|(?:www\\.))(?:[^<>\\(\\)\\s]+))", "gim", this.tt.links)
                        }
                    }, s.prototype.nt = function() {
                        this.D = [
                            ["code_block", this.X("(`{2,3})((?:\\n+)?(?:(?!\\2).(?:\\n+)?)*)(?:\\2)", "gi", {
                                prefix: "(\\s|<[^<>]+\\/>|^)",
                                suffix: "(\\s|\\.|,|:|$)"
                            })],
                            ["code_inline", this.X("(`{1})([^`]*)(?:\\2)", "gim", {
                                prefix: "(\\s|<[^<>]+\\/>|\\(|^)",
                                suffix: "(\\s|\\.|,|:|\\)|<\\/[^<>]+>|$)"
                            })],
                            ["title", this.X("(#{1})(?:[\\s]+)([^#].*)", "gim", this.tt.markdown_simple)],
                            ["title", this.X("(#{2})(?:[\\s]+)([^#].*)", "gim", this.tt.markdown_simple)],
                            ["title", this.X("(#{3})(?:[\\s]+)([^#].*)", "gim", this.tt.markdown_simple)],
                            ["title", this.X("(#{4})(?:[\\s]+)([^#].*)", "gim", this.tt.markdown_simple)],
                            ["title", this.X("(#{5})(?:[\\s]+)([^#].*)", "gim", this.tt.markdown_simple)],
                            ["title", this.X("(#{6})(?:[\\s]+)([^#].*)", "gim", this.tt.markdown_simple)],
                            ["link_image", this.X("\\[!\\[(?:[^\\[]*)\\]\\(([^\\)]+)\\)\\]\\(([^\\)]+)\\)", "gim", this.tt.markdown_includes)],
                            ["image", this.X("!\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.tt.markdown_includes)],
                            ["link_text", this.X("\\[([^\\[]+)\\]\\(([^\\)]+)\\)", "gim", {
                                prefix: "(\\s|<[^<>]+\\/>|<[^a][^<>]*>|\\(|^)",
                                suffix: "(\\s|.|,|:|<[^<>]+\\/>|</[^a][^<>]*>|\\)|$)"
                            })],
                            ["youtube", this.X("\\$\\{youtube\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.tt.markdown_includes)],
                            ["vimeo", this.X("\\$\\{vimeo\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.tt.markdown_includes)],
                            ["dailymotion", this.X("\\$\\{dailymotion\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.tt.markdown_includes)],
                            ["frame", this.X("\\$\\{frame\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.tt.markdown_includes)],
                            ["bold", this.X("(\\*\\*)(.*?)(?:\\2)", "gim", this.tt.markdown_formatting)],
                            ["underline", this.X("(__)(.*?)(?:\\2)", "gim", this.tt.markdown_formatting)],
                            ["italic", this.X("(\\*|_)(.*?)(?:\\2)", "gim", this.tt.markdown_formatting)],
                            ["delete", this.X("(\\~\\~)(.*?)(?:\\2)", "gim", this.tt.markdown_formatting)],
                            ["highlight", this.X("(\\+\\+)(.*?)(?:\\2)", "gim", this.tt.markdown_formatting)],
                            ["list", this.X("(\\*)(?:[\\s]+)", "gim", this.tt.markdown_list)],
                            ["list", this.X("(?:([\\d]{1,2})\\.)(?:[\\s]+)", "gim", this.tt.markdown_list)],
                            ["blockquote", this.X("(&gt;|\\>)(?:[\\s]+)(.*)", "gim", this.tt.markdown_simple)],
                            ["table", this.X("(?:(\\|(?:[^\\|\\r\\n]{0,999}\\|){1,19})(?: *\\n)(?:\\|(?: *\\-{1,99} *\\|){1,19}))((?: *\\n\\|(?:[^\\|\\r\\n]{0,999}\\|){1,19}){1,49})", "gi", {
                                prefix: "(\\s|^)",
                                suffix: "(\\s|$)"
                            })],
                            ["emphasis", this.X("(\\|{1})(?:[\\s]+)([^\\|].*)", "gim", this.tt.markdown_simple)],
                            ["emphasis", this.X("(\\|{2})(?:[\\s]+)([^\\|].*)", "gim", this.tt.markdown_simple)],
                            ["emphasis", this.X("(\\|{3})(?:[\\s]+)([^\\|].*)", "gim", this.tt.markdown_simple)],
                            ["interpolate", this.X('(?:\\{\\{\\s*)([^\\{\\}\\|\\s]+)(?:\\s*\\|\\s*(?:(?:&quot;)|")([^&"]*)(?:(?:&quot;)|"))?(?:\\s*\\}\\})', "gim", {
                                prefix: "(\\s|\\(|^)",
                                suffix: ""
                            })],
                            ["line", this.X("(-{3,})", "gim", {
                                prefix: "(^)(\\s+)?",
                                suffix: "(\\s|$)"
                            })],
                            ["color", this.X("\\$\\{color\\}\\[(#[0-9A-Fa-f]{6})\\]\\(([^\\)]+)\\)", "gim", this.tt.markdown_includes)]
                        ]
                    }, s);

                    function s(t) {
                        this.parent = t, this.it = ["com", "net", "org", "info", "biz", "mobi", "chat", "email", "help", "watch", "name", "pro", "aero", "asia", "cat", "coop", "edu", "gov", "int", "jobs", "mil", "museum", "post", "tel", "travel", "xxx", "xyz", "top", "site", "online", "club", "shop", "work", "app", "live", "store", "space", "website", "tech", "life", "dev", "blog", "cloud", "page", "link", "design", "group", "company", "agency", "network", "media", "immo", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "um", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"], this.$ = {
                            "&": /&amp;/g,
                            "<": /&lt;/g,
                            ">": /&gt;/g,
                            '"': /&quot;/g
                        }, this.F = {
                            "&amp;": /&/g,
                            "&lt;": /</g,
                            "&gt;": />/g,
                            "&quot;": /"/g
                        }, this.k = {
                            "\\\\": /\\/g,
                            "\\t": /\t/g,
                            "\\n": /\n/g,
                            "\\u00A0": /\u00A0/g,
                            "&quot;": /"/g,
                            "&apos;": /'/g,
                            "&lowbar;": /_/g,
                            "&ast;": /\*/g,
                            "&plus;": /\+/g,
                            "&#126;": /~/g
                        }, this.Y = {
                            "<": /&lt;/g,
                            ">": /&gt;/g
                        }, this.j = /[-\/\\^$*+?.()|[\]{}]/g, this.Z = /([\#$\*\_\-+![\]\(\)`~><\.|{}])/g, this.P = /^([a-z]{1,20})\n((?:\n?.*)*)$/, this.K = /(,|\.)(\s|$)/g, this.G = /\u0001/g, this.M = /^(www\.)/i, this.tt = {
                            links: {
                                prefix: "(\\s|<[^<>]+\\/>|<[^a][^<>]*>|\\(|^)",
                                suffix: "(\\s||<[^<>]+\\/>|</[^a][^<>]*>|\\)|$)"
                            },
                            markdown_simple: {
                                prefix: "(^)",
                                suffix: "($)"
                            },
                            markdown_includes: {
                                prefix: "(\\s|<[^<>]+\\/>|<[^<>]+>|\\(|^)",
                                suffix: "(\\s|.|,|:|<[^<>]+\\/>|\\)|$)"
                            },
                            markdown_formatting: {
                                prefix: "(\\s|<[^<>]+\\/>|\\(|^)",
                                suffix: ""
                            },
                            markdown_list: {
                                prefix: "(^\\s*)",
                                suffix: "(.*?)($)"
                            }
                        }, this.J = ["title", "list", "code_inline", "blockquote", "table", "emphasis"], this.V = ["code_block", "code_inline"], this._ = ["escape", "consecutive_lines", "markdown", "links_uri", "links_domain", "emails", "phones", "smileys", "new_lines"], this.g = {
                            escape: this.b,
                            consecutive_lines: this.z,
                            new_lines: this.C,
                            emails: this.A,
                            phones: this.q,
                            markdown: this.O,
                            links_domain: this.B,
                            links_uri: this.N,
                            smileys: this.T
                        }, this.H = {
                            markdown_code_block: this.U,
                            markdown_table: this.L
                        }, this.Q(), this.nt()
                    }
                    var c = (a.prototype.parse_first_name = function(t) {
                        return this.et(t, 1)
                    }, a.prototype.parse_last_name = function(t) {
                        return this.et(t, 3)
                    }, a.prototype.et = function(t, i) {
                        var n = (t || "").trim();
                        return !n || (t = n.match(this.st)) && t[i] && (n = t[i].trim()), n
                    }, a);

                    function a(t) {
                        this.parent = t, this.st = /^(\S+)((?:\s+)(.+))?$/
                    }
                    this.ct(t), this.Smileys = new i(this), this.Parse = new e(this), this.Name = new c(this)
                }, y.prototype.ct = function(t) {
                    t && t.template && (this.template = t.template), t && t.config && (this.config = t.config)
                }, i.CrispLibraryWeb = new y, ui = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t = c, p.prototype.init = function(t) {
                    var r = {},
                        i = (n.prototype.set_ignore_privacy = function() {
                            this.at = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                        }, n.prototype.set_visitor_compose = function() {
                            this.rt = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
                        }, n.prototype.reset = function() {
                            this.ot()
                        }, n.prototype.ot = function() {
                            this.at = !1, this.rt = !0
                        }, n);

                    function n(t) {
                        this.parent = t, this.ot()
                    }
                    var e = (s.prototype.get = function(t) {
                        var i, n = this.parent.cookie.get(t);
                        if (void 0 === n) try {
                            window.localStorage && "function" == typeof window.localStorage.getItem && (0 < (i = parseInt(window.localStorage.getItem(t + ":e") || "0", 10)) && i <= (new Date).getTime() ? (n = void 0, "function" == typeof window.localStorage.removeItem && (window.localStorage.removeItem(t), window.localStorage.removeItem(t + ":e"))) : n = window.localStorage.getItem(t))
                        } catch (t) {}
                        return void 0 !== n ? n : null
                    }, s.prototype.set = function(t, i) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        this.parent.cookie.set(t, i, n);
                        try {
                            window.localStorage && "function" == typeof window.localStorage.setItem && (window.localStorage.setItem(t + ":e", void 0 !== n.expires ? (new Date).getTime() + n.expires : 0), window.localStorage.setItem(t, i))
                        } catch (t) {}
                    }, s.prototype.expire = function(t) {
                        this.parent.cookie.expire(t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {});
                        try {
                            window.localStorage && "function" == typeof window.localStorage.removeItem && (window.localStorage.removeItem(t), window.localStorage.removeItem(t + ":e"))
                        } catch (t) {}
                    }, s);

                    function s(t) {
                        this.parent = t
                    }
                    var c = (a.prototype.set_timeout = function(t) {
                        var i = this,
                            n = setTimeout(function() {
                                delete i.ht[n], t()
                            }, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0);
                        return this.ht[n] = n
                    }, a.prototype.clear_timeout = function(t) {
                        t in this.ht && (clearTimeout(this.ht[t]), delete this.ht[t])
                    }, a.prototype.set_interval = function(t) {
                        var i = setInterval(t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0);
                        return this.lt[i] = i
                    }, a.prototype.clear_interval = function(t) {
                        t in this.lt && (clearInterval(this.lt[t]), delete this.lt[t])
                    }, a.prototype.reset = function() {
                        for (var t in this.ht) this.clear_timeout(t);
                        for (var i in this.lt) this.clear_interval(i);
                        this.ot()
                    }, a.prototype.ot = function() {
                        this.ht = {}, this.lt = {}
                    }, a);

                    function a(t) {
                        this.parent = t, this.ot()
                    }
                    var o = (h.prototype.add_event = function(t, i, n, e) {
                        var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
                            c = this.ut(t, i, n);
                        if (c in this.ft) throw new Error("Event listener is already registered for '" + n + "' event on '" + i + "' instance, cannot re-register");
                        window[i].addEventListener(n, e, s), this.ft[c] = [e, s]
                    }, h.prototype.remove_event = function(t, i, n) {
                        var e = this.ut(t, i, n);
                        e in this.ft && (t = this.ft[e], window[i].removeEventListener(n, t[0], t[1]), delete this.ft[e])
                    }, h.prototype.apply_patch = function(t, i, n, e, s) {
                        t = this.ut(t, i, n);
                        if (t in this.dt) throw new Error("Patch is already registered for '" + n + "' method on '" + i + "' instance, cannot re-register");
                        var c = e[n];
                        "function" == typeof c && (e[n] = function() {
                            var t = c.apply(e, arguments);
                            return s(arguments), t
                        }, this.dt[t] = [e, c])
                    }, h.prototype.revoke_patch = function(t, i, n) {
                        t = this.ut(t, i, n);
                        t in this.dt && ((i = this.dt[t])[0][n] = i[1], delete this.dt[t])
                    }, h.prototype.reset = function() {
                        for (var t in this.ft) {
                            t = this.vt(t);
                            null !== t && this.remove_event(t[0], t[1], t[2])
                        }
                        for (var i in this.dt) {
                            i = this.vt(i);
                            null !== i && this.revoke_patch(i[0], i[1], i[2])
                        }
                        this.ot()
                    }, h.prototype.ut = function(t, i, n) {
                        return t + ":" + i + ":" + n
                    }, h.prototype.vt = function(t) {
                        t = t.split(":");
                        return 3 === t.length ? t : null
                    }, h.prototype.ot = function() {
                        this.ft = {}, this.dt = {}
                    }, h);

                    function h(t) {
                        this.parent = t, this.ot()
                    }
                    var l = (u.prototype.get_state = function() {
                        this.pt(this.parent.socket.connected || !1)
                    }, u.prototype.yt = function() {
                        var t = this;
                        this.parent.socket.on("connect", function() {
                            t.pt(!0)
                        }), this.parent.socket.on("disconnect", function() {
                            t.pt(!1)
                        }), this.parent.socket.io.on("reconnect_failed", function() {
                            t.pt(!1, !0)
                        })
                    }, u.prototype.pt = function() {
                        this.parent.event.publish("socket:state", {
                            connected: !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                            failed_reconnect: 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                        })
                    }, u);

                    function u(t) {
                        this.parent = t, this.yt()
                    }
                    var f = (d.prototype.ot = function() {
                        this.mt = !1, this._t = null, this.ft = [], this.gt = {}, this.wt = null, this.bt = null, this.kt = null, this.xt = null
                    }, d.prototype.bind_to = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                            s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;
                        this._t = t, this.ft = i, this.gt = n, this.wt = e, this.bt = s, !0 !== this.mt ? this.parent.stream.connect() : this.$t()
                    }, d.prototype.unbind_from = function() {
                        this.Ft(), this.parent.stream.disconnect()
                    }, d.prototype.reset = function() {
                        this.ot()
                    }, d.prototype.yt = function() {
                        var t = this;
                        this.parent.stream.on("connect", function() {
                            t.mt = !0, t.$t()
                        }), this.parent.stream.on("disconnect", function() {
                            t.mt = !1, t.Et()
                        }), this.parent.stream.on("socket:bound", function() {
                            t.jt()
                        })
                    }, d.prototype.$t = function() {
                        var t;
                        this.kt !== this._t || this.xt !== this.ft ? (this.kt = this._t, this.xt = this.ft, t = [], this.kt && t.push(this.kt), this.parent.stream.emit("socket:bind", {
                            ray: "client",
                            events: this.xt,
                            rooms: t,
                            context: this.gt
                        })) : this.jt()
                    }, d.prototype.Et = function() {
                        null !== this.bt && this.bt(), this.Ft(), this.kt = null, this.xt = null
                    }, d.prototype.jt = function() {
                        null !== this.wt && this.wt(), this.Ft()
                    }, d.prototype.Ft = function() {
                        this._t = null, this.ft = [], this.gt = {}, this.wt = null, this.bt = null
                    }, d);

                    function d(t) {
                        this.parent = t, this.ot(), this.yt()
                    }
                    var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        p = (y.prototype.update = function(t, i) {
                            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                                s = {
                                    ray: this.zt(t),
                                    type: t,
                                    data: i
                                };
                            this.Ct.push(s.ray), this.At[s.ray] = {
                                success: n,
                                error: e
                            }, this.parent.socket.emit("storage:sync:update", s), this.parent.event.publish("storage:sync:update", s)
                        }, y.prototype.get_stamp_local = function(t) {
                            var i = this.St(t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []);
                            return "object" === v(window.localStorage) && window.localStorage.getItem(i) || ""
                        }, y.prototype.set_stamp_local = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                                i = this.St(t, i);
                            return "object" === v(window.localStorage) && (window.localStorage.setItem(i, n), !0)
                        }, y.prototype.is_syncing_storage = function() {
                            return 0 < this.Ct.length && !0
                        }, y.prototype.reset = function() {
                            this.ot()
                        }, y.prototype.St = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                                n = this.It + "/" + t;
                            return 0 < i.length && (n += "/" + i.join("/")), n
                        }, y.prototype.ot = function() {
                            this.qt = 1, this.Ot = 0, this.At = {}, this.Ct = []
                        }, y.prototype.yt = function() {
                            this.parent.socket.on("storage:sync:updated", this.Rt.Dt(this))
                        }, y.prototype.Rt = function(t) {
                            var i;
                            "object" === v(this.At[t.ray]) && (t.error ? this.At[t.ray].error() : this.At[t.ray].success(), delete this.At[t.ray], -1 !== (i = this.Ct.indexOf(t.ray)) && this.Ct.splice(i, 1)), this.parent.event.publish("storage:sync:updated", t)
                        }, y.prototype.zt = function(t) {
                            return t + "/" + Math.floor(Math.random() * this.Bt) + "/" + this.Ot++
                        }, y);

                    function y(t) {
                        this.parent = t, this.Bt = 1e5, this.It = "crisp-client", this.ot(), this.yt()
                    }
                    var m = (_.prototype.update_message = function(t, i) {
                        i = {
                            fingerprint: t,
                            content: i
                        };
                        this.parent.socket.emit("message:update", i), this.Nt(i, "local")
                    }, _.prototype.send_raw_message = function(t) {
                        var i, n = this,
                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0; - 1 === this.Mt.indexOf(t.fingerprint) && this.Mt.push(t.fingerprint), this.parent.platform_name && this.parent.platform_signature_key && (_signature_data = [this.parent.Session.Tt, t.fingerprint, t.type], (i = this.parent.sha256.hmac.create(this.parent.platform_signature_key.split("/").map(function(t) {
                            return String.fromCharCode(parseInt(t, 36))
                        }).join(""))).update("[" + _signature_data.join("|") + "]"), t.signature = this.parent.platform_name + ":" + i.hex()), this.parent.event.publish("message:send", t), this.parent.Schedule.set_timeout(function() {
                            n.parent.socket.emit("message:send", t)
                        }, e)
                    }, _.prototype.send_text_message = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                        this.send_raw_message({
                            type: "text",
                            origin: "chat",
                            content: t,
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Ut()
                        }, i)
                    }, _.prototype.send_file_message = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                        this.send_raw_message({
                            type: "file",
                            origin: "chat",
                            content: {
                                name: t,
                                url: i,
                                type: n
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Ut()
                        }, e)
                    }, _.prototype.send_animation_message = function(t, i) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        this.send_raw_message({
                            type: "animation",
                            origin: "chat",
                            content: {
                                url: t,
                                type: i
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Ut()
                        }, n)
                    }, _.prototype.send_audio_message = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                        this.send_raw_message({
                            type: "audio",
                            origin: "chat",
                            content: {
                                url: t,
                                type: i,
                                duration: n
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Ut()
                        }, e)
                    }, _.prototype.send_picker_message = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                        this.send_raw_message({
                            type: "picker",
                            origin: "chat",
                            content: {
                                id: t,
                                text: i,
                                choices: n
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Ut()
                        }, e)
                    }, _.prototype.send_field_message = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                        this.send_raw_message({
                            type: "field",
                            origin: "chat",
                            content: {
                                id: t,
                                text: i,
                                explain: n
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Ut()
                        }, e)
                    }, _.prototype.send_carousel_message = function(t, i) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        this.send_raw_message({
                            type: "carousel",
                            origin: "chat",
                            content: {
                                text: t,
                                targets: i
                            },
                            timestamp: (new Date).getTime(),
                            fingerprint: this.Ut()
                        }, n)
                    }, _.prototype.send_message_compose = function(t) {
                        var i = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                        (!0 !== this.parent.Config.at && "1" === (navigator || {}).doNotTrack || !1 === this.parent.Config.rt) && (n = null);
                        var n = this.Pt(n),
                            e = t !== this.Lt.local.type && !0;
                        (1 == e || n !== (this.Lt.local.excerpt || null) || "start" === this.Lt.local.type && this.Jt && (new Date).getTime() - this.Jt >= this.Vt) && (this.Jt = (new Date).getTime(), this.Lt.local = {
                            type: t
                        }, n && (this.Lt.local.excerpt = n), 1 == e && null !== this.Wt && (this.parent.Schedule.clear_timeout(this.Wt), this.Wt = null), null === this.Wt && (this.Wt = this.parent.Schedule.set_timeout(function() {
                            i.Wt = null, i.parent.socket.emit("message:compose:send", i.Lt.local), i.parent.event.publish("message:compose:send", i.Lt.local)
                        }, 1 == e ? 0 : this.Ht)))
                    }, _.prototype.send_message_thread = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                            n = {
                                type: t
                            };
                        i && (n.text = i), this.parent.socket.emit("message:thread", n), this.parent.event.publish("message:thread", n)
                    }, _.prototype.receive_message_local = function(t, i, n) {
                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                            e = {
                                from: "operator",
                                type: t,
                                origin: "local",
                                timestamp: (new Date).getTime(),
                                content: i,
                                fingerprint: null !== e ? e : this.Ut(),
                                user: n
                            };
                        this.parent.socket.emit("message:received:local", e), this.Kt(e)
                    }, _.prototype.receive_message_mirror = function(t, i, n, e) {
                        e = {
                            from: "operator",
                            type: t,
                            origin: i,
                            timestamp: (new Date).getTime(),
                            content: n,
                            fingerprint: e
                        };
                        this.parent.socket.emit("message:received:mirror", e)
                    }, _.prototype.get_message_compose = function() {
                        this.parent.event.publish("message:compose:received", this.Lt.remote)
                    }, _.prototype.get_cached_messages = function() {
                        return this.Gt
                    }, _.prototype.count_message_history = function() {
                        return this.Gt.length
                    }, _.prototype.count_message_history_diff = function() {
                        return this.Yt.length
                    }, _.prototype.get_message_history = function() {
                        if (0 < this.Gt.length) {
                            for (var t = 0; t < this.Gt.length; t++) this.Gt[t].origin = "history";
                            this.parent.event.publish("history:messages", this.Gt)
                        }
                        for (var i = 0; i < this.Yt.length; i++) this.Zt(this.Yt[i], "diff");
                        this.Yt = []
                    }, _.prototype.is_sending_messages = function() {
                        return 0 < this.Mt.length && !0
                    }, _.prototype.mark_messages_as_read = function() {
                        !0 === this.Xt(void 0, void 0, !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]) && this.Qt()
                    }, _.prototype.set_messages_in_view = function(t) {
                        this.ti = t, this.mark_messages_as_read(!1)
                    }, _.prototype.get_unread_messages = function() {
                        this.ii = -1, this.ni()
                    }, _.prototype.set_unread_messages_callback = function(t) {
                        this.ei = t
                    }, _.prototype.reset = function() {
                        this.ot()
                    }, _.prototype.si = function(t) {
                        this.ci(t)
                    }, _.prototype.ai = function(t) {
                        t && (this.Lt.remote = t)
                    }, _.prototype.ri = function(t) {
                        if (t) {
                            this.oi(t);
                            for (var i = 0; i < t.length; i++) this.Yt.push(t[i]);
                            this.ni()
                        }
                    }, _.prototype.ci = function(t) {
                        this.Gt = t = t || [], this.hi = [], this.oi(this.Gt);
                        for (var i = 0; i < this.Gt.length; i++) {
                            var n = this.Gt[i];
                            this.hi.push(n.fingerprint), t[i].is_me || n.read || this.li.push(n.fingerprint)
                        }
                        this.ni()
                    }, _.prototype.ot = function() {
                        this.Gt = [], this.hi = [], this.Yt = [], this.li = [], this.Mt = [], this.ui = [], this.Wt = null, this.ti = !1, this.ei = function() {}, this.ii = -1, this.Jt = 0, this.Lt = {
                            local: {
                                type: "stop"
                            },
                            remote: {
                                type: "stop"
                            }
                        }
                    }, _.prototype.yt = function() {
                        this.parent.socket.on("message:updated", this.Nt.Dt(this)), this.parent.socket.on("message:sent", this.fi.Dt(this)), this.parent.socket.on("message:received", this.di.Dt(this)), this.parent.socket.on("message:received:local", this.Kt.Dt(this)), this.parent.socket.on("message:removed", this.vi.Dt(this)), this.parent.socket.on("message:compose:received", this.pi.Dt(this)), this.parent.socket.on("message:acknowledge:read:send", this.yi.Dt(this)), this.parent.socket.on("message:acknowledge:read:received", this.mi.Dt(this)), this.parent.socket.on("message:acknowledge:pending", this._i.Dt(this))
                    }, _.prototype.Pt = function(t) {
                        var i = null;
                        return null === t || (t = t.match(this.gi)) && (i = (t[1] || "").trim()), i
                    }, _.prototype.wi = function(t) {
                        this.parent.socket.emit("message:acknowledge:pending", {
                            origin: "chat",
                            fingerprints: t
                        }), this.parent.socket.emit("message:acknowledge:delivered", {
                            origin: "chat",
                            fingerprints: t
                        })
                    }, _.prototype.bi = function(t) {
                        this.parent.socket.emit("message:acknowledge:read:received", {
                            origin: "chat",
                            fingerprints: t
                        })
                    }, _.prototype.ki = function(t, i) {
                        var n = !1;
                        !1 === i && (this.li = [], this.ni());
                        for (var e = 0; e < this.Gt.length; e++) {
                            var s = this.Gt[e];
                            !0 === s.read || 0 !== t.length && -1 === t.indexOf(s.fingerprint) || i === (!0 === s.is_me) && (n = s.read = !0, this.xi(s))
                        }
                        return n
                    }, _.prototype.Xt = function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                            i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            n = i || !1;
                        return !1 === i && (!0 === (2 < arguments.length && void 0 !== arguments[2] && arguments[2]) || !0 === this.ti) && 0 < this.li.length && (this.bi(this.li), n = !0), !0 === n && this.ki(t, i)
                    }, _.prototype.Qt = function(t, i) {
                        if (0 < this.ui.length) {
                            for (var n = [], e = 0; e < this.Gt.length; e++) {
                                var s = this.Gt[e]; - 1 !== this.ui.indexOf(s.fingerprint) && (delete s.index, n.push(s))
                            }
                            this.ui = [], this.parent.Storage.update("message", n, t, i)
                        } else "function" == typeof t && t()
                    }, _.prototype.$i = function(t, i, n) {
                        null === this.Fi(t.fingerprint) ? (this.hi.push(t.fingerprint), this.Gt.push(t), this.Xt(), this.xi(t), this.Qt(i, n)) : "function" == typeof i && i()
                    }, _.prototype.Ei = function(i, n, t) {
                        var e = this,
                            s = this.hi.indexOf(i.fingerprint); - 1 !== s ? (this.xi(i), this.Qt(function() {
                            e.hi.splice(s, 1), e.Gt.splice(s, 1);
                            var t = e.li.indexOf(i.fingerprint); - 1 !== t && (e.li.splice(t, 1), e.ni()), "function" == typeof n && n()
                        }, t)) : "function" == typeof n && n()
                    }, _.prototype.Fi = function(t) {
                        t = this.hi.indexOf(t);
                        return 0 <= t && this.Gt[t] || null
                    }, _.prototype.xi = function(t) {
                        -1 === this.ui.indexOf(t.fingerprint) && this.ui.push(t.fingerprint)
                    }, _.prototype.oi = function(t) {
                        t.sort(function(t, i) {
                            return t.timestamp < i.timestamp ? -1 : t.timestamp > i.timestamp ? 1 : 0
                        })
                    }, _.prototype.Ut = function() {
                        var t = "" + (new Date).getTime() + Math.ceil(100 * Math.random());
                        return t.length < 15 && (t += new Array(15 - t.length + 1).join("0")), parseInt(t, 10)
                    }, _.prototype.Zt = function(t, i) {
                        t.is_me ? this.fi(t, i) : this.di(t, i)
                    }, _.prototype.ni = function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                            i = this.li.length;
                        i !== this.ii && (this.ii = i, "function" == typeof this.ei && this.ei(i, this.li, [].concat(this.Gt, t)))
                    }, _.prototype.Nt = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "network",
                            n = this.Fi(t.fingerprint);
                        null !== n && (n.content = t.content, n.edited = !0, this.Zt(n, "update"), "local" !== i && (this.xi(n), this.Qt()))
                    }, _.prototype.fi = function(t) {
                        var i = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "network",
                            e = this.Mt.indexOf(t.fingerprint); - 1 !== e && this.Mt.splice(e, 1);
                        var s = t.origin;
                        t.origin = n, t.index = {
                            current: 1,
                            total: 1
                        }, this.$i(t, function() {
                            "chat" === s || "network" !== n && "diff" !== n || i.wi([t.fingerprint]), i.parent.event.publish("message:sent", t)
                        }), 1 === this.count_message_history() && this.parent.Session.ji()
                    }, _.prototype.di = function(t) {
                        var i = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "network",
                            e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "message:received";
                        t.origin = n, t.index = {
                            current: 1,
                            total: 1
                        }, "update" !== n && (this.li.push(t.fingerprint), this.ni([t])), this.$i(t, function() {
                            "network" !== n && "diff" !== n || i.wi([t.fingerprint]), i.parent.event.publish(e, t)
                        })
                    }, _.prototype.Kt = function(t) {
                        this.di(t, "local", "message:received:local")
                    }, _.prototype.vi = function(t) {
                        var i = this,
                            n = this.Fi(t.fingerprint);
                        null !== n && (n.removed = !0, this.Ei(n, function() {
                            i.parent.event.publish("message:removed", n)
                        }))
                    }, _.prototype.pi = function(t) {
                        this.Lt.remote = t, this.parent.event.publish("message:compose:received", t)
                    }, _.prototype.yi = function(t) {
                        !0 === this.Xt(t.fingerprints, !0) && this.Qt(), this.parent.event.publish("message:acknowledge:read:send", t.fingerprints)
                    }, _.prototype.mi = function(t) {
                        for (var i = 0; i < t.fingerprints.length; i++) {
                            var n = this.li.indexOf(t.fingerprints[i]); - 1 !== n && this.li.splice(n, 1)
                        }
                        this.ni()
                    }, _.prototype._i = function(t) {
                        this.parent.event.publish("message:acknowledge:pending", t.fingerprints)
                    }, _);

                    function _(t) {
                        this.parent = t, this.Vt = 6e4, this.Ht = 6e3, this.gi = new RegExp(["(^(?:\\S+(?:(?:\\s+|\\?|\\!|\\.|\\(|\\)|:|;)|(?:[\\u4e00-\\u9fff])|(?:[\\u0e00-\\u0e7f])))+).*$"].join(""), "i"), this.ot(), this.yt()
                    }
                    var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        g = (w.prototype.save = function() {
                            var t = {
                                    domain: this.zi(),
                                    expires: this.Ci()
                                },
                                i = this.Ai();
                            t.sameSite = i.policy, !0 === i.secure && (t.secure = !0), this.parent.Register.set(this.Si(), this.Tt, t), this.parent.token_id && this.parent.Register.set(this.Si(this.parent.token_id), this.Tt, t), this.parent.event.publish("session:saved", this.Tt)
                        }, w.prototype.storage_session_retrieve = function(t) {
                            this.Ii(t.state), this.parent.Message.si(t.message)
                        }, w.prototype.sync_session_diff = function(t) {
                            this.parent.Message.ai(t.compose), this.parent.Message.ri(t.messages)
                        }, w.prototype.sync_user_data = function(t) {
                            for (var i = 0; i < this.qi.length; i++) {
                                var n = this.qi[i];
                                this.Oi[n] && this.Oi[n] !== t[n] ? this["set_" + n](this.Oi[n], !0, this.Di[n]) : this.Oi[n] = t[n] || null
                            }
                            this.Ri(t.segments || [], this.Oi.segments), this.Bi(t.data || {}, this.Oi.data)
                        }, w.prototype.send_device = function() {
                            var t = this.Ni();
                            null !== t && this.parent.socket.emit("session:device", t)
                        }, w.prototype.send_event = function() {
                            for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], i = {
                                    events: []
                                }, n = 0; n < t.length; n++) {
                                var e = t[n],
                                    s = {
                                        text: e[0]
                                    };
                                null !== e[1] && (s.data = e[1]), null !== e[2] && (s.color = e[2]), i.events.push(s)
                            }
                            0 < i.events.length && this.parent.socket.emit("session:event", i)
                        }, w.prototype.send_feedback_rate = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                n = {
                                    rating: {
                                        stars: t
                                    }
                                };
                            null !== i && (n.rating.comment = i), this.parent.socket.emit("session:feedback:rate", n), this.parent.event.publish("session:feedback:rate", n)
                        }, w.prototype.get_request_initiate = function(t) {
                            Object.keys && 0 === Object.keys(this.Mi).length && 0 < this.parent.Message.count_message_history_diff() && this.Ti({}), "function" == typeof t && t()
                        }, w.prototype.get_state = function(t) {
                            this.handle_state(this.Mi, t)
                        }, w.prototype.handle_state = function(t, i) {
                            this.Mi = t, this.parent.event.publish("session:state", this.Mi), "function" == typeof i && i()
                        }, w.prototype.set_state = function(t, i) {
                            for (var n in t) this.Mi[n] = t[n];
                            this.parent.Storage.update("state", t), this.sync_state(t, i)
                        }, w.prototype.sync_state = function(t, i) {
                            this.parent.socket.emit("session:state", t), "function" == typeof i && i()
                        }, w.prototype.create = function() {
                            var t = {
                                website_id: this.parent.website_id,
                                website_domain: this.parent.website_domain,
                                useragent: this.parent.device.useragent || "",
                                timezone: this.parent.device.timezone || 0,
                                capabilities: this.parent.device.capabilities || [],
                                locales: this.parent.device.locales || []
                            };
                            this.parent.token_id && (t.token_id = this.parent.token_id), this.parent.socket.emit("session:create", t)
                        }, w.prototype.get_email = function() {
                            return this.Oi.email
                        }, w.prototype.set_email = function(t) {
                            var i, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                                e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                                s = {};
                            null !== e && ("string" === (i = void 0 === e ? "undefined" : v(e)) ? s.verify = e : "object" === i && (s = e)), !0 === this.Ui("email", t, n, s) && this.ji()
                        }, w.prototype.get_phone = function() {
                            return this.Oi.phone
                        }, w.prototype.set_phone = function(t) {
                            this.Ui("phone", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                        }, w.prototype.get_nickname = function() {
                            return this.Oi.nickname
                        }, w.prototype.set_nickname = function(t) {
                            this.Ui("nickname", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                        }, w.prototype.get_avatar = function() {
                            return this.Oi.avatar
                        }, w.prototype.set_avatar = function(t) {
                            this.Ui("avatar", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                        }, w.prototype.get_company = function() {
                            return this.Oi.company
                        }, w.prototype.set_company = function(t) {
                            this.Ui("company", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                        }, w.prototype.get_data = function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                            return null === t ? this.Oi.data : this.Oi.data[t] || null
                        }, w.prototype.set_data = function(t) {
                            var i = this;
                            if (this.Pi.data = this.Pi.data || {}, t)
                                for (var n in t) this.Pi.data[n] = t[n];
                            this.Li("data", function() {
                                i.Bi(i.Oi.data || {}, i.Pi.data), delete i.Pi.data
                            })
                        }, w.prototype.set_segments = function(t) {
                            var i = this,
                                n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                            if (!0 === n) this.Pi.segments = t || [];
                            else if (this.Pi.segments = this.Pi.segments || [], t)
                                for (var e = 0; e < t.length; e++) this.Pi.segments.push(t[e]);
                            this.Li("segments", function() {
                                i.Ri(i.Oi.segments || [], i.Pi.segments, n), delete i.Pi.segments
                            }, n || !1)
                        }, w.prototype.mark_active = function() {
                            var t = (new Date).getTime();
                            t - Math.min(this.Ji || t, this.Vi || t) >= this.Wi && this.Hi(!0), this.Ji = t
                        }, w.prototype.acquire_saved = function() {
                            var t = this.Ki(),
                                i = null,
                                n = (location.search || "").match(this.Gi),
                                e = (document.referrer || "").match(this.Yi);
                            n && n[2] && n[2] !== t.current && (i = n[2] || null);
                            e = (i = e && e[1] === this.parent.url_go && e[3] !== t.current ? e[3] || null : i) || t.current, i = null;
                            return {
                                session_id: e,
                                merge: i = t.previous && t.current !== t.previous && t.current === e ? t.previous : i
                            }
                        }, w.prototype.restore = function() {
                            var t = this.acquire_saved();
                            this.Zi(t.session_id, t.merge)
                        }, w.prototype.join = function() {
                            var t, i = {
                                session_id: this.Tt,
                                expire: this.Xi,
                                storage: !0,
                                sync: 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                                useragent: this.parent.device.useragent || "",
                                timezone: this.parent.device.timezone || 0,
                                capabilities: this.parent.device.capabilities || [],
                                locales: this.parent.device.locales || []
                            };
                            this.Qi || null !== (t = this.Ni()) && (i.device = t), null !== this.tn && (i.merge = {
                                session_id: this.tn
                            }), this.parent.socket.emit("session:join", i)
                        }, w.prototype.reset = function(t, i) {
                            var n = null;
                            try {
                                for (var e in this.parent) {
                                    var s = this.parent[e];
                                    s !== this && s && "object" === (void 0 === s ? "undefined" : v(s)) && "function" == typeof s.reset && s.reset()
                                }
                                this.in()
                            } catch (t) {
                                n = t
                            }
                            n ? "function" == typeof i && i(n) : "function" == typeof t && t()
                        }, w.prototype.ji = function() {
                            var t = this;
                            this.Oi.email && (this.nn && this.parent.Schedule.clear_timeout(this.nn), this.nn = this.parent.Schedule.set_timeout(function() {
                                t.nn = null, t.Hi(!0)
                            }, this.en))
                        }, w.prototype.ot = function() {
                            if ("object" === v(this.sn))
                                for (var t in this.sn) this.parent.Schedule.clear_timeout(this.sn[t]);
                            this.Tt = null, this.tn = null, this.Qi = !1, this.Ji = 0, this.Vi = (new Date).getTime(), this.cn = null, this.nn = null, this.an = null, this.rn = null, this.Oi = {}, this.Di = {}, this.Mi = {}, this.sn = {}, this.Pi = {}
                        }, w.prototype.yt = function() {
                            var t = this;
                            this.parent.socket.on("session:created", this.hn.Dt(this)), this.parent.socket.on("session:joined", this.ln.Dt(this)), this.parent.socket.on("session:state", this.un.Dt(this)), this.parent.socket.on("session:error", this.dn.Dt(this)), this.parent.socket.on("session:request:initiate", this.Ti.Dt(this)), this.parent.socket.on("session:request:purge", this.vn.Dt(this)), this.parent.socket.on("session:request:feedback", this.pn.Dt(this)), this.parent.socket.on("session:feedback:rated", this.yn.Dt(this)), this.parent.socket.on("connect", function() {
                                t.Qi ? t.join(!0) : t.restore()
                            })
                        }, w.prototype.hn = function(t) {
                            var i;
                            t.error ? this.parent.event.publish("session:created", {
                                error: t.error
                            }) : (i = !!this.parent.token_id, this.Tt = t.session_id, this.save(), this.join(i), this.parent.event.publish("session:created", {
                                session_id: this.Tt
                            }))
                        }, w.prototype.ln = function(t) {
                            t.error ? this.parent.event.publish("session:joined", {
                                error: t.error
                            }) : (this.Qi || (this.Qi = !0), this.parent.Website.set_users_available(t.users_available), this.storage_session_retrieve(t.storage || {}), this.sync_session_diff(t.sync || {}), this.sync_user_data(t), this.parent.Browsing.restore_browsing_state(), this.parent.event.publish("session:joined", t), this.mn(t.last_active))
                        }, w.prototype.un = function(t) {
                            this.handle_state(t)
                        }, w.prototype.dn = function(t) {
                            "email:invalid_format" === t.type && (delete this.Oi.email, delete this.Di.email), this.parent.event.publish("session:error", t)
                        }, w.prototype.Ti = function(t) {
                            this.parent.event.publish("session:request:initiate", t)
                        }, w.prototype.vn = function(t) {
                            this.parent.event.publish("session:request:purge", t)
                        }, w.prototype.pn = function(t) {
                            this.parent.event.publish("session:request:feedback", t)
                        }, w.prototype.yn = function(t) {
                            this.parent.event.publish("session:feedback:rated", t)
                        }, w.prototype.in = function() {
                            this.ot();
                            var t = {
                                domain: this.zi()
                            };
                            this.parent.Register.expire(this.Si(), t), this.parent.token_id && this.parent.Register.expire(this.Si(this.parent.token_id), t)
                        }, w.prototype.Ki = function() {
                            var t = {
                                previous: null,
                                current: null
                            };
                            return this.parent.token_id ? (this.parent.runtime_configuration && !0 === this.parent.runtime_configuration.session_merge && (t.previous = this.parent.Register.get(this.Si()) || null), t.current = this.parent.Register.get(this.Si(this.parent.token_id)) || null) : t.current = this.parent.Register.get(this.Si()) || null, t
                        }, w.prototype.Zi = function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                            null !== i && (this.tn = i), t ? (this.Tt = t, this.save(), this.join(!0)) : this.create()
                        }, w.prototype.Ii = function(t) {
                            this.Mi = t || {}
                        }, w.prototype.mn = function() {
                            this.Ji = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0) || (new Date).getTime(), this.Hi()
                        }, w.prototype.Hi = function() {
                            var t = this,
                                i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                            this.cn && this.parent.Schedule.clear_timeout(this.cn), this.cn = this.parent.Schedule.set_timeout(function() {
                                t.cn = null, t.Vi = (new Date).getTime(), t.parent.socket.emit("session:heartbeat", {
                                    last_active: t.Ji || 0,
                                    availability: {
                                        type: "online",
                                        time: {
                                            for: t.Xi
                                        }
                                    }
                                }), t.Hi()
                            }, !0 === i ? 0 : this.gn)
                        }, w.prototype.Ni = function() {
                            var t = document.location.href || "";
                            if (this.an !== t) {
                                this.an = t;
                                var i = (new Date).getTime();
                                if (i - (this.rn || 0) >= this.wn) {
                                    this.rn = i;
                                    var n = document.title || "";
                                    if (n.length > this.bn && (n = n.substring(0, this.bn - this.kn.length), n += this.kn), !0 === this.xn.test(t) && ("?" !== (i = (t = t.replace(this.xn, "$1$3"))[t.length - 1]) && "&" !== i || (t = t.substr(0, t.length - 1))), (t = t.length > this.$n ? t.split("?")[0] || "" : t) && n && t.length <= this.$n) {
                                        t = {
                                            page_url: t,
                                            page_title: n
                                        }, n = (document.referrer || "").split("?")[0] || "";
                                        return n && n.length <= this.$n && (t.page_referrer = n), t
                                    }
                                }
                            }
                            return null
                        }, w.prototype.Si = function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                i = [this.parent.website_id];
                            return t && i.push(t), this.parent.Storage.St("session", i)
                        }, w.prototype.Ci = function() {
                            return "number" == typeof this.parent.cookie_expire && 0 < this.parent.cookie_expire ? this.parent.cookie_expire : this.Fn
                        }, w.prototype.zi = function() {
                            return "string" == typeof this.parent.cookie_domain && this.parent.cookie_domain ? this.parent.cookie_domain : this.En()
                        }, w.prototype.Ai = function() {
                            return !0 === this.parent.runtime_configuration.cross_origin_cookies && "https:" === document.location.protocol ? {
                                policy: "none",
                                secure: !0
                            } : {
                                policy: "lax"
                            }
                        }, w.prototype.En = function() {
                            var t = document.domain,
                                i = t,
                                n = this.Ai(),
                                e = "samesite=" + n.policy + ";" + (!0 === n.secure ? "secure;" : "");
                            try {
                                for (var s = 0, c = i.split("."), a = this.parent.Storage.St("domain-detect", ["" + (new Date).getTime()]); s < c.length - 1 && -1 === document.cookie.indexOf(a + "=" + a);) i = c.slice(-1 - ++s).join("."), document.cookie = a + "=" + a + ";domain=" + i + ";" + e;
                                document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + i + ";" + e
                            } catch (t) {} finally {
                                return i || t
                            }
                        }, w.prototype.Ui = function(t, i) {
                            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                                s = !1;
                            if (!0 === n ? s = !0 : i instanceof Object ? !1 === this.jn(this.Oi[t], i) && (s = !0) : this.Oi[t] !== i && (s = !0), !0 !== s || (this.Oi[t] = i, this.Di[t] = e, !0 !== this.Qi)) return !1;
                            var c, a = {};
                            for (c in a[t] = i, e) a[c] = e[c];
                            return this.parent.socket.emit("session:set_" + t, a), !0
                        }, w.prototype.Ri = function(t) {
                            for (var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], e = [], s = 0; s < i.length; s++) {
                                var c = (i[s] || "").trim().toLowerCase();
                                c && -1 === t.indexOf(c) && e.push(c)
                            }
                            var a = void 0;
                            !0 === n ? 0 < e.length || t.length !== i.length ? (a = [].concat(i), this.Oi.segments = a) : a = [] : this.Oi.segments = t.concat(a = e), 0 < a.length && !0 === this.Qi && (a = {
                                segments: a
                            }, !0 === n && (a.overwrite = !0), this.parent.socket.emit("session:set_segments", a))
                        }, w.prototype.Bi = function(t) {
                            var i, n, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                s = !1,
                                c = {};
                            for (i in e) t[i] !== e[i] && (s = !0, c[i] = e[i]);
                            for (n in this.Oi.data = t, c) this.Oi.data[n] = c[n];
                            !0 === s && !0 === this.Qi && this.parent.socket.emit("session:set_data", {
                                data: c
                            })
                        }, w.prototype.jn = function(t, i) {
                            if (t instanceof Object && i instanceof Object) {
                                var n, e, s = {};
                                for (n in t) s[n] = !0;
                                for (e in i) s[e] = !0;
                                var c, a = !0;
                                for (c in s)
                                    if (!1 === this.jn(t[c], i[c])) {
                                        a = !1;
                                        break
                                    }
                                return a
                            }
                            return t === i && !0
                        }, w.prototype.Li = function(t, i) {
                            var n = this;
                            !0 === (2 < arguments.length && void 0 !== arguments[2] && arguments[2]) ? (void 0 !== this.sn[t] && (this.parent.Schedule.clear_timeout(this.sn[t]), delete this.sn[t]), i()) : void 0 === this.sn[t] && (this.sn[t] = this.parent.Schedule.set_timeout(function() {
                                delete n.sn[t], i()
                            }, this.zn))
                        }, w);

                    function w(t) {
                        this.parent = t, this.Yi = new RegExp("^(https?\\:\\/\\/[^/]+)\\/chat\\/resume\\/\\?target_url=(.+)&session_id=(.+)$"), this.Gi = /^\?.*(crisp_sid=([^&=]+)).*$/, this.xn = /(\?.*)(crisp_sid=[^&=]+&?)(.*)$/, this.Wi = 9e4, this.en = 5e3, this.wn = 3e3, this.$n = 240, this.bn = 80, this.kn = "...", this.gn = 24e4, this.Xi = 3e5, this.Fn = 15768e3, this.zn = 500, this.qi = ["email", "phone", "nickname", "avatar", "company"], this.parent.disable_autoload || (this.ot(), this.yt())
                    }
                    var b = (k.prototype.get_users_available = function() {
                        this.Cn(!1)
                    }, k.prototype.set_users_available = function(t) {
                        this.An = t
                    }, k.prototype.reset = function() {
                        this.ot()
                    }, k.prototype.ot = function() {
                        this.An = !1
                    }, k.prototype.yt = function() {
                        this.parent.socket.on("website:users:available", this.Sn.Dt(this))
                    }, k.prototype.Sn = function(t) {
                        "boolean" == typeof t && (this.set_users_available(t), this.Cn(!0))
                    }, k.prototype.Cn = function() {
                        this.parent.event.publish("website:users:available", {
                            available: this.An,
                            changed: 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                        })
                    }, k);

                    function k(t) {
                        this.parent = t, this.ot(), this.yt()
                    }
                    var x = ($.prototype.get_url_upload = function(t, i) {
                        i = {
                            id: "" + (new Date).getTime(),
                            from: "visitor",
                            file: {
                                name: t,
                                type: i
                            }
                        };
                        this.parent.socket.emit("bucket:url:upload:generate", i), this.parent.event.publish("bucket:url:upload:generate", i)
                    }, $.prototype.yt = function() {
                        this.parent.socket.on("bucket:url:upload:generated", this.In.Dt(this))
                    }, $.prototype.In = function(t) {
                        this.parent.event.publish("bucket:url:upload:generated", t)
                    }, $);

                    function $(t) {
                        this.parent = t, this.yt()
                    }
                    var F = (E.prototype.get_animation_list = function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                            i = {
                                id: (new Date).getTime(),
                                from: "visitor",
                                list: {
                                    page: i
                                }
                            };
                        t && (i.list.query = t), this.parent.socket.emit("media:animation:list", i), this.parent.event.publish("media:animation:list", i)
                    }, E.prototype.yt = function() {
                        this.parent.socket.on("media:animation:listed", this.qn.Dt(this))
                    }, E.prototype.qn = function(t) {
                        this.parent.event.publish("media:animation:listed", t)
                    }, E);

                    function E(t) {
                        this.parent = t, this.yt()
                    }

                    function j(t, i, n) {
                        return i in t ? Object.defineProperty(t, i, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[i] = n, t
                    }
                    var z = (C.prototype.get_article_search = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                        return this.On("search", this.Dn, "query", this.Rn.Dt(this), t, i)
                    }, C.prototype.get_article_suggest = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                        return this.On("suggest", this.Bn, "part", this.Nn.Dt(this), t, i)
                    }, C.prototype.report_article_search = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        (i = (i || "").trim()) && (this.parent.socket.emit("helpdesk:article:report", i = {
                            report: {
                                locale: t,
                                query: i
                            }
                        }), this.parent.event.publish("helpdesk:article:report", i))
                    }, C.prototype.reset = function() {
                        this.ot()
                    }, C.prototype.ot = function() {
                        this.Dn = {}, this.Bn = {}
                    }, C.prototype.yt = function() {
                        this.parent.socket.on("helpdesk:article:searched", this.Rn.Dt(this)), this.parent.socket.on("helpdesk:article:suggested", this.Nn.Dt(this))
                    }, C.prototype.Rn = function(t) {
                        return this.Mn("search", this.Dn, "query", t)
                    }, C.prototype.Nn = function(t) {
                        return this.Mn("suggest", this.Bn, "part", t)
                    }, C.prototype.On = function(t, i, n, e, s) {
                        var c = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
                            a = (i[c || "default"] || {})[s],
                            r = "helpdesk:article:" + t,
                            o = j({
                                id: (new Date).getTime(),
                                from: "visitor"
                            }, t, j({
                                locale: c
                            }, n, s));
                        this.parent.event.publish(r, o), a ? this.parent.Schedule.set_timeout(function() {
                            e(j({
                                id: o.id,
                                results: a
                            }, t, j({
                                locale: c
                            }, n, s)))
                        }, this.Tn) : this.parent.socket.emit(r, o)
                    }, C.prototype.Mn = function(t, i, n, e) {
                        var s;
                        e[t] && "string" == typeof e[t][n] && (i[s = e[t].locale || "default"] = i[s] || {}, i[s][e[t][n]] = e.results), this.parent.event.publish("helpdesk:article:" + t + "ed", e)
                    }, C);

                    function C(t) {
                        this.parent = t, this.Tn = 100, this.ot(), this.yt()
                    }
                    v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    };
                    var A = (S.prototype.init = function(t, i, n) {
                        var e = this;
                        this.parent.Stream.bind_to(null, this.Un, {
                            session_id: this.parent.Session.Tt
                        }, function() {
                            -1 === (e.parent.device.capabilities || []).indexOf("browsing") || !0 !== e.parent.Config.at && "1" === (navigator || {}).doNotTrack ? (e.parent.stream.emit("client:browsing:request:decline", {}), e.Pn()) : (e.Ln = t.deps.tree_mirror || null, (e.Jn = !0) === t.resume ? (e.parent.stream.emit("client:browsing:resume", {
                                browsing_id: e.Vn
                            }), e.Hi(!0), !0 === e.Wn && e.Hn(!0)) : (e.Hi(!0), e.parent.stream.emit("client:browsing:request:accept", {
                                useragent: navigator.userAgent
                            }))), "function" == typeof i && i()
                        }, function() {
                            "function" == typeof n && n()
                        })
                    }, S.prototype.restore_browsing_state = function() {
                        this.Vn && (!1 === this.Kn() ? this.Gn({
                            resume: !0
                        }) : this.Pn())
                    }, S.prototype.toggle_ignore_scroll_event = function() {
                        this.Yn = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                    }, S.prototype.reset = function() {
                        !0 === this.Wn && this.Pn(), this.ot(), this.Zn()
                    }, S.prototype.ot = function() {
                        if (this.parent.Schedule.clear_interval(this.Xn), this.parent.Schedule.clear_interval(this.Qn), this.parent.Schedule.clear_interval(this.te), this.parent.Schedule.clear_interval(this.ie), "object" === v(this.sn))
                            for (var t in this.sn) this.parent.Schedule.clear_timeout(this.sn[t]);
                        if ("object" === v(this.ne))
                            for (var i in this.ne) this.parent.Schedule.clear_timeout(this.ne[i].dead_timeout);
                        (this.ee || {}).defer_event && this.parent.Schedule.clear_timeout(this.ee.defer_event), this.Jn = !1, this.Vn = null, this.Wn = !1, this.Vi = null, this.Xn = null, this.Qn = null, this.te = null, this.ie = null, this.Yn = !1, this.se = null, this.Ln = null, this.ce = null, this.sn = {}, this.ae = [], this.ne = {
                            assist: {
                                ongoing: !1,
                                last_heartbeat: null,
                                dead_timeout: null
                            }
                        }, this.re = {
                            x: 0,
                            y: 0,
                            last_x: 0,
                            last_y: 0
                        }, this.oe = {
                            x: 0,
                            y: 0,
                            last_x: 0,
                            last_y: 0
                        }, this.ee = {
                            last_call: (new Date).getTime(),
                            defer_event: null
                        }
                    }, S.prototype.Si = function() {
                        return this.parent.Storage.St("browsing", [this.parent.website_id])
                    }, S.prototype.yt = function() {
                        this.parent.socket.on("browsing:request:initiate", this.Gn.Dt(this)), this.parent.stream.on("client:browsing:request:initiated", this.he.Dt(this)), this.parent.stream.on("client:browsing:action:start", this.le.Dt(this)), this.parent.stream.on("client:browsing:action:stop", this.ue.Dt(this)), this.parent.stream.on("client:browsing:action:heartbeat", this.fe.Dt(this)), this.parent.stream.on("client:browsing:assist:start", this.de.Dt(this)), this.parent.stream.on("client:browsing:assist:stop", this.ve.Dt(this)), this.parent.stream.on("client:browsing:assist:heartbeat", this.pe.Dt(this)), this.parent.stream.on("client:browsing:assist:mouse", this.ye.Dt(this)), this.parent.stream.on("client:browsing:assist:scroll", this.me.Dt(this)), this.parent.stream.on("client:browsing:assist:click", this.ge.Dt(this))
                    }, S.prototype.we = function() {
                        var t;
                        "object" !== v(window.sessionStorage) || (t = window.sessionStorage.getItem(this.Si())) && (t = JSON.parse(t), this.Vn = t.browsing_id || null, this.Wn = t.is_playing || !1, this.Vi = t.last_heartbeat || null)
                    }, S.prototype.Gn = function(t) {
                        !0 === this.Jn && !0 !== t.resume || (!0 !== t.resume && this.Pn(), this.parent.event.publish("browsing:request:initiate", t || {}))
                    }, S.prototype.he = function(t) {
                        !0 === this.Jn && (this.Vn = t.browsing_id, this.Vi = (new Date).getTime(), this.be())
                    }, S.prototype.le = function() {
                        !0 === this.Jn && this.Vn && this.Hn()
                    }, S.prototype.ue = function() {
                        !0 === this.Jn && this.Vn && this.Pn()
                    }, S.prototype.fe = function() {
                        !0 === this.Jn && this.Vn && (this.Vi = (new Date).getTime(), this.be())
                    }, S.prototype.de = function() {
                        !0 === this.Jn && this.Vn && !0 === this.ke("assist") && this.parent.event.publish("browsing:assist:started", {})
                    }, S.prototype.ve = function() {
                        !0 === this.Jn && this.Vn && !0 === this.xe("assist") && this.parent.event.publish("browsing:assist:stopped", {})
                    }, S.prototype.pe = function() {
                        !0 === this.Jn && this.Vn && this.$e("assist")
                    }, S.prototype.ye = function(t) {
                        !0 === this.Jn && this.Vn && !0 === this.ne.assist.ongoing && this.parent.event.publish("browsing:assist:mouse", t)
                    }, S.prototype.me = function(t) {
                        !0 === this.Jn && this.Vn && !0 === this.ne.assist.ongoing && this.parent.event.publish("browsing:assist:scroll", t)
                    }, S.prototype.ge = function(t) {
                        !0 === this.Jn && this.Vn && !0 === this.ne.assist.ongoing && this.parent.event.publish("browsing:assist:click", t)
                    }, S.prototype.be = function() {
                        "object" === v(window.sessionStorage) && JSON && "function" == typeof JSON.stringify && window.sessionStorage.setItem(this.Si(), JSON.stringify({
                            browsing_id: this.Vn,
                            is_playing: this.Wn,
                            last_heartbeat: this.Vi
                        }))
                    }, S.prototype.Zn = function() {
                        "object" === v(window.sessionStorage) && "object" === v(window.sessionStorage) && window.sessionStorage.removeItem(this.Si())
                    }, S.prototype.Hn = function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                        this.Wn = !0, this.Vi = (new Date).getTime(), this.be(), this.Fe(), this.Ee(!0), this.je(!0), this.ze(!0), !0 !== t && this.parent.stream.emit("client:browsing:action:started", {})
                    }, S.prototype.Pn = function() {
                        var t = this.Wn;
                        this.ce && this.ce.disconnect(), this.ot(), this.be(), !0 === t && this.parent.stream.emit("client:browsing:action:stopped", {}), this.parent.Stream.unbind_from()
                    }, S.prototype.Fe = function() {
                        var s = this;
                        if (this.Ce(), this.Ae(), this.Se(), this.ce) return this.Ie(this.se);
                        this.ce = new this.Ln(document, {
                            initialize: function(t, i) {
                                s.se = {
                                    f: "initialize",
                                    args: [t, i]
                                }, s.Ie(s.se)
                            },
                            applyChanged: function(t, i, n, e) {
                                s.ae.push({
                                    f: "applyChanged",
                                    args: [t, i, n, e]
                                })
                            }
                        })
                    }, S.prototype.Ie = function(t) {
                        t.f && t.args && "function" == typeof JSON.stringify && this.parent.stream.emit("client:browsing:stream:mirror", {
                            f: t.f,
                            args: JSON.stringify(t.args)
                        })
                    }, S.prototype.Ae = function() {
                        this.parent.stream.emit("client:browsing:stream:tab", {
                            title: document.title,
                            url: document.location.href,
                            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                        })
                    }, S.prototype.Ce = function() {
                        this.parent.stream.emit("client:browsing:stream:mouse", {
                            x: this.re.x,
                            y: this.re.y
                        })
                    }, S.prototype.Se = function() {
                        this.parent.stream.emit("client:browsing:stream:scroll", {
                            x: this.oe.x,
                            y: this.oe.y
                        })
                    }, S.prototype.qe = function() {
                        this.parent.stream.emit("client:browsing:stream:click", {})
                    }, S.prototype.ke = function(t) {
                        var i = !0 !== this.ne[t].ongoing && !0;
                        return this.ne[t].ongoing = !0, this.$e(t), this.parent.stream.emit("client:browsing:" + t + ":started", {}), i
                    }, S.prototype.xe = function(t) {
                        return !0 === this.ne[t].ongoing && (this.$e(t, !1), this.ne[t].ongoing = !1, this.parent.stream.emit("client:browsing:" + t + ":stopped", {}), !0)
                    }, S.prototype.$e = function(t) {
                        var i = this,
                            n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                        !0 === this.ne[t].ongoing && (null !== this.ne[t].dead_timeout && (this.parent.Schedule.clear_timeout(this.ne[t].dead_timeout), this.ne[t].dead_timeout = null), !0 === n ? (this.ne[t].last_heartbeat = (new Date).getTime(), this.ne[t].dead_timeout = this.parent.Schedule.set_timeout(function() {
                            i.xe(t)
                        }, this.Oe)) : this.ne[t].last_heartbeat = null)
                    }, S.prototype.De = function() {
                        var i = this;
                        this.parent.Listener.add_event("browsing", "document", "mousemove", function(t) {
                            i.re.last_x = t.pageX, i.re.last_y = t.pageY
                        })
                    }, S.prototype.Re = function() {
                        var n = this;
                        this.parent.Listener.add_event("browsing", "window", "resize", function() {
                            null !== n.ee.defer_event && n.parent.Schedule.clear_timeout(n.ee.defer_event), n.ee.defer_event = n.parent.Schedule.set_timeout(function() {
                                n.ee.defer_event = null;
                                var t = n.ee.last_call,
                                    i = (new Date).getTime();
                                n.ee.last_call = i, t && i > t + n.Be && !0 === n.Wn && n.Ae()
                            }, n.Ne)
                        })
                    }, S.prototype.Me = function() {
                        var i = this;
                        this.parent.Listener.add_event("browsing", "window", "scroll", function() {
                            var t;
                            !0 !== i.Yn && (t = document.documentElement, i.oe.last_x = (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), i.oe.last_y = (window.pageYOffset || t.scrollTop) - (t.clientTop || 0))
                        })
                    }, S.prototype.Te = function() {
                        var i = this;
                        this.parent.Listener.add_event("browsing", "window", "click", function(t) {
                            !0 !== i.Wn || t.Ue || i.Pe("click", function() {
                                i.qe(), i.Ce()
                            })
                        })
                    }, S.prototype.Kn = function() {
                        return null === this.Vi || null !== this.Vi && (new Date).getTime() - this.Vi >= this.Le
                    }, S.prototype.Hi = function() {
                        var t = this,
                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        null !== this.Xn && this.parent.Schedule.clear_interval(this.Xn), !0 === i && (this.Xn = this.parent.Schedule.set_interval(function() {
                            t.parent.stream.emit("client:browsing:heartbeat", {}), !0 === t.Kn() && t.Pn()
                        }, this.Je))
                    }, S.prototype.Ee = function() {
                        var t = this,
                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        null !== this.te && (this.parent.Schedule.clear_interval(this.te), this.te = null), !0 === i && (this.te = this.parent.Schedule.set_interval(function() {
                            t.re.last_x === t.re.x && t.re.last_y === t.re.y || !0 !== t.Wn || (t.re.x = t.re.last_x, t.re.y = t.re.last_y, t.Ce())
                        }, this.Be))
                    }, S.prototype.je = function() {
                        var t = this,
                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        null !== this.ie && (this.parent.Schedule.clear_interval(this.ie), this.ie = null), !0 === i && (this.ie = this.parent.Schedule.set_interval(function() {
                            t.oe.last_x === t.oe.x && t.oe.last_y === t.oe.y || !0 !== t.Wn || (t.oe.x = t.oe.last_x, t.oe.y = t.oe.last_y, t.Ce(), t.Se())
                        }, this.Be))
                    }, S.prototype.ze = function() {
                        var i = this,
                            t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        null !== this.Qn && this.parent.Schedule.clear_interval(this.Qn), !0 === t && (this.Qn = this.parent.Schedule.set_interval(function() {
                            for (var t = 0; t < i.ae.length && !(t >= i.Ve); t++) i.Ie(i.ae[t]);
                            i.ae.splice(0, i.Ve)
                        }, this.We))
                    }, S.prototype.Pe = function(t, i) {
                        var n = this;
                        void 0 === this.sn[t] && (this.sn[t] = this.parent.Schedule.set_timeout(function() {
                            delete n.sn[t], i()
                        }, this.zn))
                    }, S);

                    function S(t) {
                        this.parent = t, this.Je = 1e4, this.Le = 45e3, this.Oe = 45e3, this.Ne = 1e3, this.Be = 1e3, this.zn = 500, this.We = 1e3, this.Ve = 10, this.Un = ["browsing:action:start", "browsing:action:stop", "browsing:action:heartbeat", "browsing:assist:start", "browsing:assist:stop", "browsing:assist:heartbeat", "browsing:assist:mouse", "browsing:assist:scroll", "browsing:assist:click"], this.ot(), this.yt(), this.we(), this.De(), this.Re(), this.Me(), this.Te()
                    }
                    v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    };
                    var I = (q.prototype.init = function(t, i, n) {
                        var e = this;
                        this.parent.Stream.bind_to(null, this.Un, {
                            session_id: this.parent.Session.Tt
                        }, function() {
                            e.He = t.mode || null, e.Ke = t.ice || [], !0 === t.has_support ? (e.parent.stream.emit("client:call:request:initiated", {
                                call_id: t.call_id
                            }), e.Hi(!0)) : e.parent.stream.emit("client:call:request:decline", {}), "function" == typeof i && i()
                        }, function() {
                            "function" == typeof n && n()
                        })
                    }, q.prototype.accept = function() {
                        !0 === this.Jn && (this.Ge = !0, this.parent.stream.emit("client:call:request:accept", {}))
                    }, q.prototype.decline = function() {
                        !0 === this.Jn && (this.parent.stream.emit("client:call:request:decline", {}), this.Pn())
                    }, q.prototype.stop = function() {
                        !0 === this.Jn && (this.parent.stream.emit("client:call:action:stopped", {}), this.Pn())
                    }, q.prototype.toggle_audio = function() {
                        return this.Ye("audio", "getAudioTracks")
                    }, q.prototype.toggle_video = function() {
                        return this.Ye("video", "getVideoTracks")
                    }, q.prototype.toggle_screensharing = function() {
                        return !0 === this.Jn && null !== this.Ze.local && (!1 === this.Xe ? this.Qe() : this.ts()), this.Xe
                    }, q.prototype.is_ongoing = function() {
                        return !0 === this.Jn && null !== this.es && !0
                    }, q.prototype.has_support_screensharing = function() {
                        return !(!navigator.mediaDevices || "function" != typeof navigator.mediaDevices.getDisplayMedia)
                    }, q.prototype.get_stream = function(t) {
                        return this.Ze[t] || null
                    }, q.prototype.reset = function() {
                        !0 === this.Jn && this.Pn(), this.ot()
                    }, q.prototype.ot = function() {
                        this.Jn = !1, this.Xe = !1, this.Ge = !1, this.ss = !1, this.Vn = null, this.es = null, this.Xn = null, this.cs = null, this.He = null, this.Ke = [], this.Ze = {
                            local: null,
                            remote: null
                        }, this.as = {
                            video: null
                        }
                    }, q.prototype.yt = function() {
                        this.parent.socket.on("call:request:initiate", this.Gn.Dt(this)), this.parent.stream.on("client:call:request:accepted", this.rs.Dt(this)), this.parent.stream.on("client:call:request:declined", this.os.Dt(this)), this.parent.stream.on("client:call:action:stopped", this.hs.Dt(this)), this.parent.stream.on("client:call:signaling:sdp", this.ls.Dt(this)), this.parent.stream.on("client:call:signaling:candidate", this.us.Dt(this))
                    }, q.prototype.Gn = function(t) {
                        !0 !== this.Jn && (t.has_support = -1 !== (this.parent.device.capabilities || []).indexOf("call"), this.Jn = !0, this.parent.event.publish("call:request:initiate", t))
                    }, q.prototype.rs = function() {
                        !0 === this.Jn && !0 !== this.Ge && this.Pn()
                    }, q.prototype.os = function() {
                        !0 === this.Jn && this.Pn()
                    }, q.prototype.hs = function() {
                        !0 === this.Jn && this.Pn()
                    }, q.prototype.ls = function(t) {
                        var i = this;
                        !0 === this.Jn && (this.ds(), "operator" === t.from && this.es.setRemoteDescription(new RTCSessionDescription(t.sdp)).then(function() {
                            return i.parent.event.publish("call:peer:remote:success", {}), null === i.Ze.local ? i.vs() : "offer" === t.sdp.type ? i.ps("answer") : Promise.resolve()
                        }).catch(function() {
                            i.parent.event.publish("call:peer:remote:error", {})
                        }))
                    }, q.prototype.us = function(t) {
                        !0 === this.Jn && (this.ds(), "operator" === t.from && "object" === v(t.candidate) && null !== t.candidate && this.es.addIceCandidate(new RTCIceCandidate({
                            sdpMLineIndex: t.candidate.sdpMLineIndex,
                            candidate: t.candidate.candidate
                        })).catch(function() {}))
                    }, q.prototype.ds = function() {
                        var n = this;
                        null === this.es && (this.es = new RTCPeerConnection({
                            iceServers: this.Ke
                        }), this.es.onicecandidate = function(t) {
                            t && t.candidate && n.parent.stream.emit("client:call:signaling:candidate", {
                                from: "user",
                                candidate: t.candidate
                            })
                        }, this.es.ontrack = function(t) {
                            t = t.streams[0];
                            n.Ze.remote = t, n.parent.event.publish("call:media:remote:success", {}), t.onremovetrack = function() {
                                n.parent.event.publish("call:media:remote:success", {})
                            }
                        }, this.es.oniceconnectionstatechange = function(t) {
                            var i = n.es;
                            null !== i && "failed" !== i.iceConnectionState && "closed" !== i.iceConnectionState || n.ys(), null !== i && "disconnected" === i.iceConnectionState && (n.cs = n.parent.Schedule.set_timeout(function() {
                                (n.cs = null) !== n.es && "connected" === i.iceConnectionState || n.ys()
                            }, n._s)), null !== i && "connected" === i.iceConnectionState && !0 !== n.ss && n.parent.Schedule.set_timeout(function() {
                                n.vs(!0)
                            }, n.gs)
                        }, this.es.onnegotiationneeded = function() {
                            n.ps("offer")
                        }, this.es.onclose = function() {
                            n.ys()
                        })
                    }, q.prototype.vs = function() {
                        function i(t) {
                            n.parent.event.publish("call:peer:local:error", {})
                        }
                        var n = this,
                            e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                        this.bs(function(t) {
                            navigator.mediaDevices.getUserMedia({
                                audio: !0,
                                video: "video" === n.He && !0 === t.video
                            }).then(function(t) {
                                return n.Ze.local = t, n.parent.event.publish("call:media:local:success", {
                                    retried: e || !1
                                }), !0 === e && (n.ss = !0), n.ks(t, e)
                            }).catch(i)
                        }, i)
                    }, q.prototype.ks = function(t) {
                        var i = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            e = t.getTracks();
                        !0 === n && this.es.getSenders().forEach(function(t) {
                            t.track && t.track.stop(), i.es.removeTrack(t)
                        });
                        for (var s = 0; s < e.length; s++) this.es.addTrack(e[s], t);
                        !0 !== n && this.ps("answer")
                    }, q.prototype.bs = function(n, e) {
                        var s = {
                            audio: !1,
                            video: !1
                        };
                        navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(function(t) {
                            for (var i = 0; i < t.length; i++) switch (t[i].kind) {
                                case "audioinput":
                                    s.audio = !0;
                                    break;
                                case "videoinput":
                                    s.video = !0
                            }!0 !== s.audio ? e() : n(s)
                        }).catch(e) : n(s)
                    }, q.prototype.ps = function() {
                        var i = this,
                            n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "offer",
                            e = void 0;
                        return Promise.resolve().then(function() {
                            var t = {
                                OfferToReceiveAudio: !0,
                                OfferToReceiveVideo: !0
                            };
                            return "answer" === n ? i.es.createAnswer(t) : i.es.createOffer(t)
                        }).then(function(t) {
                            return e = t, i.es.setLocalDescription(e)
                        }).then(function() {
                            return i.parent.stream.emit("client:call:signaling:sdp", {
                                from: "user",
                                sdp: e
                            }), i.parent.event.publish("call:peer:local:success", {}), Promise.resolve()
                        }).catch(function() {
                            return i.parent.event.publish("call:peer:local:error", {}), Promise.resolve()
                        })
                    }, q.prototype.Pn = function() {
                        this.ys()
                    }, q.prototype.ys = function() {
                        if (null !== this.es) {
                            for (var t = this.es.getSenders(), i = 0; i < t.length; i++) null !== t[i].track && t[i].track.stop();
                            null !== this.as.video && this.as.video.stop(), this.es.close(), this.es = null
                        }
                        null !== this.cs && (this.parent.Schedule.clear_timeout(this.cs), this.cs = null), this.parent.Stream.unbind_from(), this.Jn = !1, this.Xe = !1, this.Ge = !1, this.ss = !1, this.He = null, this.Ke = [], this.Ze.local = null, this.Ze.remote = null, this.as.video = null, this.Hi(!1), this.parent.event.publish("call:action:stopped", {})
                    }, q.prototype.Ye = function(t, i) {
                        var n = !1;
                        if (!0 === this.Jn && null !== this.Ze.local) {
                            for (var e = !1, s = this.Ze.local[i](), c = 0; c < s.length; c++) e = !0, n = !s[c].enabled, s[c].enabled = n;
                            !0 === e && this.parent.event.publish("call:track:local:" + (!0 === n ? "started" : "ended"), {
                                media: t
                            })
                        }
                        return n
                    }, q.prototype.Qe = function() {
                        var s = this;
                        !0 === this.has_support_screensharing() && (this.Xe = !0, navigator.mediaDevices.getDisplayMedia({
                            video: !0
                        }).then(function(t) {
                            for (var t = t.getTracks()[0], i = s.es.getSenders(), n = null, e = 0; e < i.length; e++)
                                if (i[e].track && "video" === i[e].track.kind) {
                                    n = i[e];
                                    break
                                }
                            null !== n ? (s.as.video = n.track, n.replaceTrack(t)) : n = s.es.addTrack(t, s.Ze.local), t.onended = function() {
                                null !== s.es && (s.xs(n), s.parent.event.publish("call:track:local:ended", {
                                    media: "screensharing"
                                }))
                            }, s.parent.event.publish("call:track:local:started", {
                                media: "screensharing"
                            })
                        }).catch(function(t) {
                            s.Xe = !1
                        }))
                    }, q.prototype.ts = function() {
                        for (var t = this.es.getSenders(), i = null, n = 0; n < t.length; n++)
                            if (t[n].track && "video" === t[n].track.kind) {
                                i = t[n];
                                break
                            }
                        null !== i && (i.track.stop(), i.track.dispatchEvent(new Event("ended")))
                    }, q.prototype.xs = function(t) {
                        null !== this.as.video ? (t.replaceTrack(this.as.video), this.as.video = null) : this.es.removeTrack(t), this.Xe = !1
                    }, q.prototype.Hi = function() {
                        var t = this,
                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        null !== this.Xn && this.parent.Schedule.clear_interval(this.Xn), !0 === i && (this.Xn = this.parent.Schedule.set_interval(function() {
                            t.parent.stream.emit("client:call:heartbeat", {})
                        }, this.Je))
                    }, q);

                    function q(t) {
                        this.parent = t, this.Je = 1e4, this._s = 5e3, this.gs = 200, this.Un = ["call:request:initiate", "call:request:accepted", "call:request:declined", "call:action:stopped", "call:signaling:sdp", "call:signaling:candidate"], this.ot(), this.yt()
                    }
                    var O = (D.prototype.fired = function(t, i) {
                        i = {
                            identifier: t,
                            name: i
                        };
                        this.parent.socket.emit("trigger:fired", i), this.parent.event.publish("trigger:fired", i)
                    }, D);

                    function D(t) {
                        this.parent = t
                    }
                    v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    };
                    var R, B, N = (M.prototype.configure = function(t) {
                        this.Fs = t.project, this.Es = t.revision, this.js = t.environment, this.zs = t.useragent, this.Cs = t.page
                    }, M.prototype.report = function(t, i, n) {
                        if (!(this.Fs && this.Es && this.js && this.zs && this.Cs)) throw new Error("Missing a configuration parameter. Did you call configure() before?");
                        "object" === (void 0 === n ? "undefined" : v(n)) && n instanceof Error && (n = {
                            fileName: n.fileName,
                            lineNumber: n.lineNumber,
                            columnNumber: n.columnNumber,
                            message: n.message,
                            stack: n.stack
                        });
                        n = {
                            project: this.Fs,
                            revision: this.Es,
                            environment: this.js,
                            useragent: this.zs,
                            page: this.Cs,
                            level: t,
                            namespace: i,
                            traceback: n
                        };
                        this.parent.socket.emit("issue:report", n), this.parent.event.publish("issue:report", n)
                    }, M.prototype.ot = function() {
                        this.Fs = null, this.Es = null, this.js = null, this.zs = null, this.Cs = null
                    }, M);

                    function M(t) {
                        this.parent = t, this.ot()
                    }
                    R = r, B = function() {
                            "use strict";

                            function o(t) {
                                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }

                            function e(t, i) {
                                for (var n = 0; n < i.length; n++) {
                                    var e = i[n];
                                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
                                }
                            }

                            function c(t, i, n) {
                                return i && e(t.prototype, i), n && e(t, n), t
                            }

                            function s() {
                                return (s = Object.assign || function(t) {
                                    for (var i = 1; i < arguments.length; i++) {
                                        var n, e = arguments[i];
                                        for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                                    }
                                    return t
                                }).apply(this, arguments)
                            }

                            function a(t, i) {
                                if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(i && i.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), i && r(t, i)
                            }

                            function h(t) {
                                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                })(t)
                            }

                            function r(t, i) {
                                return (r = Object.setPrototypeOf || function(t, i) {
                                    return t.__proto__ = i, t
                                })(t, i)
                            }

                            function l() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                } catch (t) {
                                    return !1
                                }
                            }

                            function u(t, i, n) {
                                return (u = l() ? Reflect.construct : function(t, i, n) {
                                    var e = [null];
                                    e.push.apply(e, i);
                                    e = new(Function.bind.apply(t, e));
                                    return n && r(e, n.prototype), e
                                }).apply(null, arguments)
                            }

                            function n(t) {
                                var n = "function" == typeof Map ? new Map : void 0;
                                return function(t) {
                                    if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== n) {
                                        if (n.has(t)) return n.get(t);
                                        n.set(t, i)
                                    }

                                    function i() {
                                        return u(t, arguments, h(this).constructor)
                                    }
                                    return i.prototype = Object.create(t.prototype, {
                                        constructor: {
                                            value: i,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), r(i, t)
                                }(t)
                            }

                            function f(t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t
                            }

                            function d(n) {
                                var e = l();
                                return function() {
                                    var t, i = h(n);
                                    return function(t, i) {
                                        if (i && ("object" == typeof i || "function" == typeof i)) return i;
                                        if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                                        return f(t)
                                    }(this, e ? (t = h(this).constructor, Reflect.construct(i, arguments, t)) : i.apply(this, arguments))
                                }
                            }

                            function v(t, i, n) {
                                return (v = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, i, n) {
                                    t = function(t, i) {
                                        for (; !Object.prototype.hasOwnProperty.call(t, i) && null !== (t = h(t)););
                                        return t
                                    }(t, i);
                                    if (t) {
                                        i = Object.getOwnPropertyDescriptor(t, i);
                                        return i.get ? i.get.call(n) : i.value
                                    }
                                })(t, i, n || t)
                            }

                            function p(t, i) {
                                (null == i || i > t.length) && (i = t.length);
                                for (var n = 0, e = new Array(i); n < i; n++) e[n] = t[n];
                                return e
                            }
                            var y = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                m = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                                _ = Object.create(null);
                            _.open = "0", _.close = "1", _.ping = "2", _.pong = "3", _.message = "4", _.upgrade = "5", _.noop = "6";
                            var g = Object.create(null);
                            Object.keys(_).forEach(function(t) {
                                g[_[t]] = t
                            });
                            for (var w = {
                                    type: "error",
                                    data: "parser error"
                                }, b = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), k = "function" == typeof ArrayBuffer, x = function(t, i) {
                                    var n = new FileReader;
                                    return n.onload = function() {
                                        var t = n.result.split(",")[1];
                                        i("b" + t)
                                    }, n.readAsDataURL(t)
                                }, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $ = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i = 0; i < t.length; i++) $[t.charCodeAt(i)] = i;

                            function F(t, i) {
                                return "blob" === i && t instanceof ArrayBuffer ? new Blob([t]) : t
                            }
                            var E = "function" == typeof ArrayBuffer,
                                j = z;

                            function z(t) {
                                if (t) return function(t) {
                                    for (var i in z.prototype) t[i] = z.prototype[i];
                                    return t
                                }(t)
                            }
                            z.prototype.on = z.prototype.addEventListener = function(t, i) {
                                return this.As = this.As || {}, (this.As["$" + t] = this.As["$" + t] || []).push(i), this
                            }, z.prototype.once = function(t, i) {
                                function n() {
                                    this.off(t, n), i.apply(this, arguments)
                                }
                                return n.fn = i, this.on(t, n), this
                            }, z.prototype.off = z.prototype.removeListener = z.prototype.removeAllListeners = z.prototype.removeEventListener = function(t, i) {
                                if (this.As = this.As || {}, 0 == arguments.length) return this.As = {}, this;
                                var n, e = this.As["$" + t];
                                if (!e) return this;
                                if (1 == arguments.length) return delete this.As["$" + t], this;
                                for (var s = 0; s < e.length; s++)
                                    if ((n = e[s]) === i || n.fn === i) {
                                        e.splice(s, 1);
                                        break
                                    }
                                return 0 === e.length && delete this.As["$" + t], this
                            }, z.prototype.emitReserved = z.prototype.emit = function(t) {
                                this.As = this.As || {};
                                for (var i = new Array(arguments.length - 1), n = this.As["$" + t], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
                                if (n)
                                    for (var e = 0, s = (n = n.slice(0)).length; e < s; ++e) n[e].apply(this, i);
                                return this
                            }, z.prototype.listeners = function(t) {
                                return this.As = this.As || {}, this.As["$" + t] || []
                            }, z.prototype.hasListeners = function(t) {
                                return !!this.listeners(t).length
                            }, "undefined" != typeof self || "undefined" != typeof window || Function("return this")();
                            var C = setTimeout,
                                A = clearTimeout;

                            function S(t, i) {
                                i.useNativeTimers ? (t.setTimeoutFn = C.bind(window), t.clearTimeoutFn = A.bind(window)) : (t.setTimeoutFn = setTimeout.bind(window), t.clearTimeoutFn = clearTimeout.bind(window))
                            }
                            var I, q = function(t) {
                                    a(i, n(Error));
                                    var e = d(i);

                                    function i(t, i, n) {
                                        t = e.call(this, t);
                                        return t.description = i, t.context = n, t.type = "TransportError", t
                                    }
                                    return i
                                }(),
                                O = function(t) {
                                    a(e, j);
                                    var n = d(e);

                                    function e(t) {
                                        var i = n.call(this);
                                        return i.writable = !1, S(f(i), t), i.opts = t, i.query = t.query, i.readyState = "", i.socket = t.socket, i
                                    }
                                    return c(e, [{
                                        key: "onError",
                                        value: function(t, i, n) {
                                            return v(h(e.prototype), "emitReserved", this).call(this, "error", new q(t, i, n)), this
                                        }
                                    }, {
                                        key: "open",
                                        value: function() {
                                            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
                                        }
                                    }, {
                                        key: "close",
                                        value: function() {
                                            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                                        }
                                    }, {
                                        key: "send",
                                        value: function(t) {
                                            "open" === this.readyState && this.write(t)
                                        }
                                    }, {
                                        key: "onOpen",
                                        value: function() {
                                            this.readyState = "open", this.writable = !0, v(h(e.prototype), "emitReserved", this).call(this, "open")
                                        }
                                    }, {
                                        key: "onData",
                                        value: function(t) {
                                            t = function(t, i) {
                                                if ("string" != typeof t) return {
                                                    type: "message",
                                                    data: F(t, i)
                                                };
                                                var n, e = t.charAt(0);
                                                return "b" === e ? {
                                                    type: "message",
                                                    data: (n = t.substring(1), i = i, E ? F(function(t) {
                                                        var i, n, e, s, c = .75 * t.length,
                                                            a = t.length,
                                                            r = 0;
                                                        "=" === t[t.length - 1] && (c--, "=" === t[t.length - 2] && c--);
                                                        for (var c = new ArrayBuffer(c), o = new Uint8Array(c), h = 0; h < a; h += 4) i = $[t.charCodeAt(h)], n = $[t.charCodeAt(h + 1)], e = $[t.charCodeAt(h + 2)], s = $[t.charCodeAt(h + 3)], o[r++] = i << 2 | n >> 4, o[r++] = (15 & n) << 4 | e >> 2, o[r++] = (3 & e) << 6 | 63 & s;
                                                        return c
                                                    }(n), i) : {
                                                        base64: !0,
                                                        data: n
                                                    })
                                                } : g[e] ? 1 < t.length ? {
                                                    type: g[e],
                                                    data: t.substring(1)
                                                } : {
                                                    type: g[e]
                                                } : w
                                            }(t, this.socket.binaryType);
                                            this.onPacket(t)
                                        }
                                    }, {
                                        key: "onPacket",
                                        value: function(t) {
                                            v(h(e.prototype), "emitReserved", this).call(this, "packet", t)
                                        }
                                    }, {
                                        key: "onClose",
                                        value: function(t) {
                                            this.readyState = "closed", v(h(e.prototype), "emitReserved", this).call(this, "close", t)
                                        }
                                    }]), e
                                }(),
                                D = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                                R = {},
                                B = 0,
                                N = 0;

                            function M(t) {
                                for (var i = ""; i = D[t % 64] + i, 0 < (t = Math.floor(t / 64)););
                                return i
                            }
                            for (; N < 64; N++) R[D[N]] = N;
                            var T = "function" == typeof Promise && "function" == typeof Promise.resolve ? function(t) {
                                    return Promise.resolve().then(t)
                                } : function(t, i) {
                                    return i(t, 0)
                                },
                                U = window.WebSocket || window.MozWebSocket,
                                P = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
                                L = {
                                    websocket: function(t) {
                                        a(i, O);
                                        var n = d(i);

                                        function i(t) {
                                            var i = n.call(this, t);
                                            return i.supportsBinary = !t.forceBase64, i
                                        }
                                        return c(i, [{
                                            key: "name",
                                            get: function() {
                                                return "websocket"
                                            }
                                        }, {
                                            key: "doOpen",
                                            value: function() {
                                                if (this.check()) {
                                                    var t = this.uri(),
                                                        i = this.opts.protocols,
                                                        n = P ? {} : function(n) {
                                                            for (var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), e = 1; e < t; e++) i[e - 1] = arguments[e];
                                                            return i.reduce(function(t, i) {
                                                                return n.hasOwnProperty(i) && (t[i] = n[i]), t
                                                            }, {})
                                                        }(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                                                    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                                                    try {
                                                        this.ws = P ? new U(t, i, n) : i ? new U(t, i) : new U(t)
                                                    } catch (t) {
                                                        return this.emitReserved("error", t)
                                                    }
                                                    this.ws.binaryType = this.socket.binaryType || "arraybuffer", this.addEventListeners()
                                                }
                                            }
                                        }, {
                                            key: "addEventListeners",
                                            value: function() {
                                                var i = this;
                                                this.ws.onopen = function() {
                                                    i.opts.autoUnref && i.ws.Ss.unref(), i.onOpen()
                                                }, this.ws.onclose = function(t) {
                                                    return i.onClose({
                                                        description: "websocket connection closed",
                                                        context: t
                                                    })
                                                }, this.ws.onmessage = function(t) {
                                                    return i.onData(t.data)
                                                }, this.ws.onerror = function(t) {
                                                    return i.onError("websocket error", t)
                                                }
                                            }
                                        }, {
                                            key: "write",
                                            value: function(a) {
                                                var r = this;
                                                this.writable = !1;
                                                for (var t = 0; t < a.length; t++)(function(t) {
                                                    function i(t) {
                                                        try {
                                                            r.ws.send(t)
                                                        } catch (t) {}
                                                        e && T(function() {
                                                            r.writable = !0, r.emitReserved("drain")
                                                        }, r.setTimeoutFn)
                                                    }
                                                    var n = a[t],
                                                        e = t === a.length - 1,
                                                        s = r.supportsBinary,
                                                        c = n.type,
                                                        t = n.data;
                                                    b && t instanceof Blob ? s ? i(t) : x(t, i) : k && (t instanceof ArrayBuffer || (n = t, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer)) ? s ? i(t) : x(new Blob([t]), i) : i(_[c] + (t || ""))
                                                })(t)
                                            }
                                        }, {
                                            key: "doClose",
                                            value: function() {
                                                void 0 !== this.ws && (this.ws.close(), this.ws = null)
                                            }
                                        }, {
                                            key: "uri",
                                            value: function() {
                                                var t, i = this.query || {},
                                                    n = this.opts.secure ? "wss" : "ws",
                                                    e = "";
                                                this.opts.port && ("wss" == n && 443 !== Number(this.opts.port) || "ws" == n && 80 !== Number(this.opts.port)) && (e = ":" + this.opts.port), this.opts.timestampRequests && (i[this.opts.timestampParam] = (t = M(+new Date)) !== I ? (B = 0, I = t) : t + "." + M(B++)), this.supportsBinary || (i.b64 = 1);
                                                i = function(t) {
                                                    var i, n = "";
                                                    for (i in t) t.hasOwnProperty(i) && (n.length && (n += "&"), n += encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
                                                    return n
                                                }(i);
                                                return n + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + e + this.opts.path + (i.length ? "?" + i : "")
                                            }
                                        }, {
                                            key: "check",
                                            value: function() {
                                                return !(!U || "Is" in U && this.name === i.prototype.name)
                                            }
                                        }]), i
                                    }()
                                },
                                J = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                V = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

                            function W(t) {
                                var i = t,
                                    n = t.indexOf("["),
                                    e = t.indexOf("]"); - 1 != n && -1 != e && (t = t.substring(0, n) + t.substring(n, e).replace(/:/g, ";") + t.substring(e, t.length));
                                for (var s, c = J.exec(t || ""), a = {}, r = 14; r--;) a[V[r]] = c[r] || "";
                                return -1 != n && -1 != e && (a.source = i, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = (i = (e = a.path).replace(/\/{2,9}/g, "/").split("/"), "/" != e.substr(0, 1) && 0 !== e.length || i.splice(0, 1), "/" == e.substr(e.length - 1, 1) && i.splice(i.length - 1, 1), i), a.queryKey = (i = a.query, s = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t, i, n) {
                                    i && (s[i] = n)
                                }), s), a
                            }
                            var H = function(t) {
                                a(u, j);
                                var n = d(u);

                                function u(t) {
                                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                        a = n.call(this);
                                    return t && "object" === o(t) && (i = t, t = null), t ? (t = W(t), i.hostname = t.host, i.secure = "https" === t.protocol || "wss" === t.protocol, i.port = t.port, t.query && (i.query = t.query)) : i.host && (i.hostname = W(i.host).host), S(f(a), i), a.secure = null != i.secure ? i.secure : "undefined" != typeof location && "https:" === location.protocol, i.hostname && !i.port && (i.port = a.secure ? "443" : "80"), a.hostname = i.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), a.port = i.port || ("undefined" != typeof location && location.port ? location.port : a.secure ? "443" : "80"), a.transports = i.transports || ["websocket"], a.readyState = "", a.writeBuffer = [], a.prevBufferLen = 0, a.opts = s({
                                        path: "/engine.io",
                                        agent: !1,
                                        withCredentials: !1,
                                        upgrade: !0,
                                        timestampParam: "t",
                                        rememberUpgrade: !1,
                                        rejectUnauthorized: !0,
                                        perMessageDeflate: {
                                            threshold: 1024
                                        },
                                        transportOptions: {},
                                        closeOnBeforeunload: !0
                                    }, i), a.opts.path = a.opts.path.replace(/\/$/, "") + "/", "string" == typeof a.opts.query && (a.opts.query = function(t) {
                                        for (var i = {}, n = a.opts.query.split("&"), e = 0, s = n.length; e < s; e++) {
                                            var c = n[e].split("=");
                                            i[decodeURIComponent(c[0])] = decodeURIComponent(c[1])
                                        }
                                        return i
                                    }()), a.id = null, a.upgrades = null, a.pingInterval = null, a.pingTimeout = null, a.pingTimeoutTimer = null, "function" == typeof addEventListener && (a.opts.closeOnBeforeunload && addEventListener("beforeunload", function() {
                                        a.transport && (a.transport.removeAllListeners(), a.transport.close())
                                    }, !1), "localhost" !== a.hostname && (a.offlineEventListener = function() {
                                        a.onClose("transport close", {
                                            description: "network connection lost"
                                        })
                                    }, addEventListener("offline", a.offlineEventListener, !1))), a.open(), a
                                }
                                return c(u, [{
                                    key: "createTransport",
                                    value: function(t) {
                                        var i = function(t) {
                                            var i, n = {};
                                            for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                                            return n
                                        }(this.opts.query);
                                        i.EIO = 4, i.transport = t, this.id && (i.sid = this.id);
                                        i = s({}, this.opts.transportOptions[t], this.opts, {
                                            query: i,
                                            socket: this,
                                            hostname: this.hostname,
                                            secure: this.secure,
                                            port: this.port
                                        });
                                        return new L[t](i)
                                    }
                                }, {
                                    key: "open",
                                    value: function() {
                                        var t, i = this;
                                        if (this.opts.rememberUpgrade && u.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                                        else {
                                            if (0 === this.transports.length) return void this.setTimeoutFn(function() {
                                                i.emitReserved("error", "No transports available")
                                            }, 0);
                                            t = this.transports[0]
                                        }
                                        this.readyState = "opening";
                                        try {
                                            t = this.createTransport(t)
                                        } catch (t) {
                                            return this.transports.shift(), void this.open()
                                        }
                                        t.open(), this.setTransport(t)
                                    }
                                }, {
                                    key: "setTransport",
                                    value: function(t) {
                                        var i = this;
                                        this.transport && this.transport.removeAllListeners(), (this.transport = t).on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function(t) {
                                            return i.onClose("transport close", t)
                                        })
                                    }
                                }, {
                                    key: "probe",
                                    value: function(t) {
                                        var i = this,
                                            n = this.createTransport(t),
                                            e = !1;
                                        u.priorWebsocketSuccess = !1;
                                        var s = function() {
                                            e || (n.send([{
                                                type: "ping",
                                                data: "probe"
                                            }]), n.once("packet", function(t) {
                                                e || ("pong" === t.type && "probe" === t.data ? (i.upgrading = !0, i.emitReserved("upgrading", n), n && (u.priorWebsocketSuccess = "websocket" === n.name, i.transport.pause(function() {
                                                    e || "closed" !== i.readyState && (l(), i.setTransport(n), n.send([{
                                                        type: "upgrade"
                                                    }]), i.emitReserved("upgrade", n), n = null, i.upgrading = !1, i.flush())
                                                }))) : ((t = new Error("probe error")).transport = n.name, i.emitReserved("upgradeError", t)))
                                            }))
                                        };

                                        function c() {
                                            e || (e = !0, l(), n.close(), n = null)
                                        }
                                        var a = function(t) {
                                            t = new Error("probe error: " + t);
                                            t.transport = n.name, c(), i.emitReserved("upgradeError", t)
                                        };

                                        function r() {
                                            a("transport closed")
                                        }

                                        function o() {
                                            a("socket closed")
                                        }

                                        function h(t) {
                                            n && t.name !== n.name && c()
                                        }
                                        var l = function() {
                                            n.removeListener("open", s), n.removeListener("error", a), n.removeListener("close", r), i.off("close", o), i.off("upgrading", h)
                                        };
                                        n.once("open", s), n.once("error", a), n.once("close", r), this.once("close", o), this.once("upgrading", h), n.open()
                                    }
                                }, {
                                    key: "onOpen",
                                    value: function() {
                                        if (this.readyState = "open", u.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause)
                                            for (var t = 0, i = this.upgrades.length; t < i; t++) this.probe(this.upgrades[t])
                                    }
                                }, {
                                    key: "onPacket",
                                    value: function(t) {
                                        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
                                            case "open":
                                                this.onHandshake(JSON.parse(t.data));
                                                break;
                                            case "ping":
                                                this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                                                break;
                                            case "error":
                                                var i = new Error("server error");
                                                i.code = t.data, this.onError(i);
                                                break;
                                            case "message":
                                                this.emitReserved("data", t.data), this.emitReserved("message", t.data)
                                        }
                                    }
                                }, {
                                    key: "onHandshake",
                                    value: function(t) {
                                        this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
                                    }
                                }, {
                                    key: "resetPingTimeout",
                                    value: function() {
                                        var t = this;
                                        this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(function() {
                                            t.onClose("ping timeout")
                                        }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
                                    }
                                }, {
                                    key: "onDrain",
                                    value: function() {
                                        this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0) === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
                                    }
                                }, {
                                    key: "flush",
                                    value: function() {
                                        var t;
                                        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (t = this.getWritablePackets(), this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush"))
                                    }
                                }, {
                                    key: "getWritablePackets",
                                    value: function() {
                                        if (!(this.maxPayload && "polling" === this.transport.name && 1 < this.writeBuffer.length)) return this.writeBuffer;
                                        for (var t = 1, i = 0; i < this.writeBuffer.length; i++) {
                                            var n = this.writeBuffer[i].data;
                                            if (n && (t += "string" == typeof(n = n) ? function(t) {
                                                    for (var i, n = 0, e = 0, s = t.length; e < s; e++)(i = t.charCodeAt(e)) < 128 ? n += 1 : i < 2048 ? n += 2 : i < 55296 || 57344 <= i ? n += 3 : (e++, n += 4);
                                                    return n
                                                }(n) : Math.ceil(1.33 * (n.byteLength || n.size))), 0 < i && t > this.maxPayload) return this.writeBuffer.slice(0, i);
                                            t += 2
                                        }
                                        return this.writeBuffer
                                    }
                                }, {
                                    key: "write",
                                    value: function(t, i, n) {
                                        return this.sendPacket("message", t, i, n), this
                                    }
                                }, {
                                    key: "send",
                                    value: function(t, i, n) {
                                        return this.sendPacket("message", t, i, n), this
                                    }
                                }, {
                                    key: "sendPacket",
                                    value: function(t, i, n, e) {
                                        "function" == typeof i && (e = i, i = void 0), "function" == typeof n && (e = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState && ((n = n || {}).compress = !1 !== n.compress, this.emitReserved("packetCreate", n = {
                                            type: t,
                                            data: i,
                                            options: n
                                        }), this.writeBuffer.push(n), e && this.once("flush", e), this.flush())
                                    }
                                }, {
                                    key: "close",
                                    value: function() {
                                        function t() {
                                            n.off("upgrade", t), n.off("upgradeError", t), e()
                                        }

                                        function i() {
                                            n.once("upgrade", t), n.once("upgradeError", t)
                                        }
                                        var n = this,
                                            e = function() {
                                                n.onClose("forced close"), n.transport.close()
                                            };
                                        return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", function() {
                                            (n.upgrading ? i : e)()
                                        }) : (this.upgrading ? i : e)()), this
                                    }
                                }, {
                                    key: "onError",
                                    value: function(t) {
                                        u.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t)
                                    }
                                }, {
                                    key: "onClose",
                                    value: function(t, i) {
                                        "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emitReserved("close", t, i), this.writeBuffer = [], this.prevBufferLen = 0)
                                    }
                                }, {
                                    key: "filterUpgrades",
                                    value: function(t) {
                                        for (var i = [], n = 0, e = t.length; n < e; n++) ~this.transports.indexOf(t[n]) && i.push(t[n]);
                                        return i
                                    }
                                }]), u
                            }();
                            H.protocol = 4;
                            var K = "function" == typeof ArrayBuffer,
                                G = Object.prototype.toString,
                                Y = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === G.call(Blob),
                                Z = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === G.call(File);

                            function X(t) {
                                return K && (t instanceof ArrayBuffer || (i = t, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(i) : i.buffer instanceof ArrayBuffer)) || Y && t instanceof Blob || Z && t instanceof File;
                                var i
                            }
                            var Q = {
                                    CONNECT: 0,
                                    0: "CONNECT",
                                    DISCONNECT: 1,
                                    1: "DISCONNECT",
                                    EVENT: 2,
                                    2: "EVENT",
                                    ACK: 3,
                                    3: "ACK",
                                    CONNECT_ERROR: 4,
                                    4: "CONNECT_ERROR",
                                    BINARY_EVENT: 5,
                                    5: "BINARY_EVENT",
                                    BINARY_ACK: 6,
                                    6: "BINARY_ACK"
                                },
                                tt = function() {
                                    function t() {}
                                    return c(t, [{
                                        key: "encode",
                                        value: function(t) {
                                            return t.type !== Q.EVENT && t.type !== Q.ACK || ! function t(i, n) {
                                                if (!i || "object" !== o(i)) return !1;
                                                if (Array.isArray(i)) {
                                                    for (var e = 0, s = i.length; e < s; e++)
                                                        if (t(i[e])) return !0;
                                                    return !1
                                                }
                                                if (X(i)) return !0;
                                                if (i.toJSON && "function" == typeof i.toJSON && 1 === arguments.length) return t(i.toJSON(), !0);
                                                for (var c in i)
                                                    if (Object.prototype.hasOwnProperty.call(i, c) && t(i[c])) return !0;
                                                return !1
                                            }(t) ? [this.encodeAsString(t)] : (t.type = t.type === Q.EVENT ? Q.BINARY_EVENT : Q.BINARY_ACK, this.encodeAsBinary(t))
                                        }
                                    }, {
                                        key: "encodeAsString",
                                        value: function(t) {
                                            var i = "" + t.type;
                                            return t.type !== Q.BINARY_EVENT && t.type !== Q.BINARY_ACK || (i += t.attachments + "-"), t.nsp && "/" !== t.nsp && (i += t.nsp + ","), null != t.id && (i += t.id), null != t.data && (i += JSON.stringify(t.data)), i
                                        }
                                    }, {
                                        key: "encodeAsBinary",
                                        value: function(t) {
                                            var t = (i = t.data, (t = t).data = function t(i, n) {
                                                    if (!i) return i;
                                                    if (X(i)) {
                                                        var e = {
                                                            qs: !0,
                                                            num: n.length
                                                        };
                                                        return n.push(i), e
                                                    }
                                                    if (Array.isArray(i)) {
                                                        for (var s = new Array(i.length), c = 0; c < i.length; c++) s[c] = t(i[c], n);
                                                        return s
                                                    }
                                                    if ("object" !== o(i) || i instanceof Date) return i;
                                                    var a, r = {};
                                                    for (a in i) i.hasOwnProperty(a) && (r[a] = t(i[a], n));
                                                    return r
                                                }(i, i = []), t.attachments = i.length, {
                                                    packet: t,
                                                    buffers: i
                                                }),
                                                i = this.encodeAsString(t.packet),
                                                t = t.buffers;
                                            return t.unshift(i), t
                                        }
                                    }]), t
                                }(),
                                G = function(t) {
                                    a(r, j);
                                    var i = d(r);

                                    function r() {
                                        return i.call(this)
                                    }
                                    return c(r, [{
                                        key: "add",
                                        value: function(t) {
                                            var i;
                                            if ("string" == typeof t)(i = this.decodeString(t)).type === Q.BINARY_EVENT || i.type === Q.BINARY_ACK ? (this.reconstructor = new it(i), 0 === i.attachments && v(h(r.prototype), "emitReserved", this).call(this, "decoded", i)) : v(h(r.prototype), "emitReserved", this).call(this, "decoded", i);
                                            else {
                                                if (!X(t) && !t.base64) throw new Error("Unknown type: " + t);
                                                if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                                                (i = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, v(h(r.prototype), "emitReserved", this).call(this, "decoded", i))
                                            }
                                        }
                                    }, {
                                        key: "decodeString",
                                        value: function(t) {
                                            var i = 0,
                                                n = {
                                                    type: Number(t.charAt(0))
                                                };
                                            if (void 0 === Q[n.type]) throw new Error("unknown packet type " + n.type);
                                            if (n.type === Q.BINARY_EVENT || n.type === Q.BINARY_ACK) {
                                                for (var e = i + 1;
                                                    "-" !== t.charAt(++i) && i != t.length;);
                                                e = t.substring(e, i);
                                                if (e != Number(e) || "-" !== t.charAt(i)) throw new Error("Illegal attachments");
                                                n.attachments = Number(e)
                                            }
                                            if ("/" === t.charAt(i + 1)) {
                                                for (var s = i + 1; ++i && "," !== t.charAt(i) && i !== t.length;);
                                                n.nsp = t.substring(s, i)
                                            } else n.nsp = "/";
                                            s = t.charAt(i + 1);
                                            if ("" !== s && Number(s) == s) {
                                                for (var c = i + 1; ++i;) {
                                                    var a = t.charAt(i);
                                                    if (null == a || Number(a) != a) {
                                                        --i;
                                                        break
                                                    }
                                                    if (i === t.length) break
                                                }
                                                n.id = Number(t.substring(c, i + 1))
                                            }
                                            if (t.charAt(++i)) {
                                                c = function(t) {
                                                    try {
                                                        return JSON.parse(t)
                                                    } catch (t) {
                                                        return !1
                                                    }
                                                }(t.substr(i));
                                                if (!r.isPayloadValid(n.type, c)) throw new Error("invalid payload");
                                                n.data = c
                                            }
                                            return n
                                        }
                                    }, {
                                        key: "destroy",
                                        value: function() {
                                            this.reconstructor && this.reconstructor.finishedReconstruction()
                                        }
                                    }], [{
                                        key: "isPayloadValid",
                                        value: function(t, i) {
                                            switch (t) {
                                                case Q.CONNECT:
                                                    return "object" === o(i);
                                                case Q.DISCONNECT:
                                                    return void 0 === i;
                                                case Q.CONNECT_ERROR:
                                                    return "string" == typeof i || "object" === o(i);
                                                case Q.EVENT:
                                                case Q.BINARY_EVENT:
                                                    return Array.isArray(i) && 0 < i.length;
                                                case Q.ACK:
                                                case Q.BINARY_ACK:
                                                    return Array.isArray(i)
                                            }
                                        }
                                    }]), r
                                }(),
                                it = function() {
                                    function t(t) {
                                        this.packet = t, this.buffers = [], this.reconPack = t
                                    }
                                    return c(t, [{
                                        key: "takeBinaryData",
                                        value: function(t) {
                                            if (this.buffers.push(t), this.buffers.length !== this.reconPack.attachments) return null;
                                            var i = (i = this.reconPack, t = this.buffers, i.data = function t(i, n) {
                                                if (!i) return i;
                                                if (i && i.qs) return n[i.num];
                                                if (Array.isArray(i))
                                                    for (var e = 0; e < i.length; e++) i[e] = t(i[e], n);
                                                else if ("object" === o(i))
                                                    for (var s in i) i.hasOwnProperty(s) && (i[s] = t(i[s], n));
                                                return i
                                            }(i.data, t), i.attachments = void 0, i);
                                            return this.finishedReconstruction(), i
                                        }
                                    }, {
                                        key: "finishedReconstruction",
                                        value: function() {
                                            this.reconPack = null, this.buffers = []
                                        }
                                    }]), t
                                }(),
                                nt = Object.freeze({
                                    __proto__: null,
                                    protocol: 5,
                                    get PacketType() {
                                        return Q
                                    },
                                    Encoder: tt,
                                    Decoder: G
                                });

                            function et(t, i, n) {
                                return t.on(i, n),
                                    function() {
                                        t.off(i, n)
                                    }
                            }
                            var st = Object.freeze({
                                    connect: 1,
                                    connect_error: 1,
                                    disconnect: 1,
                                    disconnecting: 1,
                                    newListener: 1,
                                    removeListener: 1
                                }),
                                ct = function(t) {
                                    a(e, j);
                                    var s = d(e);

                                    function e(t, i, n) {
                                        var e = s.call(this);
                                        return e.connected = !1, e.disconnected = !0, e.receiveBuffer = [], e.sendBuffer = [], e.ids = 0, e.acks = {}, e.flags = {}, e.io = t, e.nsp = i, n && n.auth && (e.auth = n.auth), e.io._autoConnect && e.open(), e
                                    }
                                    return c(e, [{
                                        key: "subEvents",
                                        value: function() {
                                            var t;
                                            this.subs || (t = this.io, this.subs = [et(t, "open", this.onopen.bind(this)), et(t, "packet", this.onpacket.bind(this)), et(t, "error", this.onerror.bind(this)), et(t, "close", this.onclose.bind(this))])
                                        }
                                    }, {
                                        key: "active",
                                        get: function() {
                                            return !!this.subs
                                        }
                                    }, {
                                        key: "connect",
                                        value: function() {
                                            return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
                                        }
                                    }, {
                                        key: "open",
                                        value: function() {
                                            return this.connect()
                                        }
                                    }, {
                                        key: "send",
                                        value: function() {
                                            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                            return i.unshift("message"), this.emit.apply(this, i), this
                                        }
                                    }, {
                                        key: "emit",
                                        value: function(t) {
                                            if (st.hasOwnProperty(t)) throw new Error('"' + t + '" is a reserved event name');
                                            for (var i = arguments.length, n = new Array(1 < i ? i - 1 : 0), e = 1; e < i; e++) n[e - 1] = arguments[e];
                                            n.unshift(t);
                                            var s = {
                                                type: Q.EVENT,
                                                data: n,
                                                options: {}
                                            };
                                            s.options.compress = !1 !== this.flags.compress, "function" == typeof n[n.length - 1] && (c = this.ids++, t = n.pop(), this._registerAckCallback(c, t), s.id = c);
                                            var c = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                                            return (!this.flags.volatile || c && this.connected) && (this.connected ? this.packet(s) : this.sendBuffer.push(s)), this.flags = {}, this
                                        }
                                    }, {
                                        key: "_registerAckCallback",
                                        value: function(i, e) {
                                            var s, c = this,
                                                t = this.flags.timeout;
                                            void 0 !== t ? (s = this.io.setTimeoutFn(function() {
                                                delete c.acks[i];
                                                for (var t = 0; t < c.sendBuffer.length; t++) c.sendBuffer[t].id === i && c.sendBuffer.splice(t, 1);
                                                e.call(c, new Error("operation has timed out"))
                                            }, t), this.acks[i] = function() {
                                                c.io.clearTimeoutFn(s);
                                                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                                e.apply(c, [null].concat(i))
                                            }) : this.acks[i] = e
                                        }
                                    }, {
                                        key: "packet",
                                        value: function(t) {
                                            t.nsp = this.nsp, this.io._packet(t)
                                        }
                                    }, {
                                        key: "onopen",
                                        value: function() {
                                            var i = this;
                                            "function" == typeof this.auth ? this.auth(function(t) {
                                                i.packet({
                                                    type: Q.CONNECT,
                                                    data: t
                                                })
                                            }) : this.packet({
                                                type: Q.CONNECT,
                                                data: this.auth
                                            })
                                        }
                                    }, {
                                        key: "onerror",
                                        value: function(t) {
                                            this.connected || this.emitReserved("connect_error", t)
                                        }
                                    }, {
                                        key: "onclose",
                                        value: function(t) {
                                            this.connected = !1, this.disconnected = !0, delete this.id, this.emitReserved("disconnect", t)
                                        }
                                    }, {
                                        key: "onpacket",
                                        value: function(t) {
                                            if (t.nsp === this.nsp) switch (t.type) {
                                                case Q.CONNECT:
                                                    t.data && t.data.sid ? (i = t.data.sid, this.onconnect(i)) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                                                    break;
                                                case Q.EVENT:
                                                case Q.BINARY_EVENT:
                                                    this.onevent(t);
                                                    break;
                                                case Q.ACK:
                                                case Q.BINARY_ACK:
                                                    this.onack(t);
                                                    break;
                                                case Q.DISCONNECT:
                                                    this.ondisconnect();
                                                    break;
                                                case Q.CONNECT_ERROR:
                                                    this.destroy();
                                                    var i = new Error(t.data.message);
                                                    i.data = t.data.data, this.emitReserved("connect_error", i)
                                            }
                                        }
                                    }, {
                                        key: "onevent",
                                        value: function(t) {
                                            var i = t.data || [];
                                            null != t.id && i.push(this.ack(t.id)), this.connected ? this.emitEvent(i) : this.receiveBuffer.push(Object.freeze(i))
                                        }
                                    }, {
                                        key: "emitEvent",
                                        value: function(t) {
                                            if (this._anyListeners && this._anyListeners.length) {
                                                var i, n = function(t, i) {
                                                    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                                    if (!n) {
                                                        if (Array.isArray(t) || (n = function(t, i) {
                                                                if (t) {
                                                                    if ("string" == typeof t) return p(t, void 0);
                                                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                                                    return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, void 0) : void 0
                                                                }
                                                            }(t))) {
                                                            n && (t = n);
                                                            var e = 0,
                                                                s = function() {};
                                                            return {
                                                                s: s,
                                                                n: function() {
                                                                    return e >= t.length ? {
                                                                        done: !0
                                                                    } : {
                                                                        done: !1,
                                                                        value: t[e++]
                                                                    }
                                                                },
                                                                e: function(t) {
                                                                    throw t
                                                                },
                                                                f: s
                                                            }
                                                        }
                                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                    }
                                                    var c, a = !0,
                                                        r = !1;
                                                    return {
                                                        s: function() {
                                                            n = n.call(t)
                                                        },
                                                        n: function() {
                                                            var t = n.next();
                                                            return a = t.done, t
                                                        },
                                                        e: function(t) {
                                                            r = !0, c = t
                                                        },
                                                        f: function() {
                                                            try {
                                                                a || null == n.return || n.return()
                                                            } finally {
                                                                if (r) throw c
                                                            }
                                                        }
                                                    }
                                                }(this._anyListeners.slice());
                                                try {
                                                    for (n.s(); !(i = n.n()).done;) i.value.apply(this, t)
                                                } catch (t) {
                                                    n.e(t)
                                                } finally {
                                                    n.f()
                                                }
                                            }
                                            v(h(e.prototype), "emit", this).apply(this, t)
                                        }
                                    }, {
                                        key: "ack",
                                        value: function(e) {
                                            var s = this,
                                                c = !1;
                                            return function() {
                                                if (!c) {
                                                    c = !0;
                                                    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                                    s.packet({
                                                        type: Q.ACK,
                                                        id: e,
                                                        data: i
                                                    })
                                                }
                                            }
                                        }
                                    }, {
                                        key: "onack",
                                        value: function(t) {
                                            var i = this.acks[t.id];
                                            "function" == typeof i && (i.apply(this, t.data), delete this.acks[t.id])
                                        }
                                    }, {
                                        key: "onconnect",
                                        value: function(t) {
                                            this.id = t, this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emitReserved("connect")
                                        }
                                    }, {
                                        key: "emitBuffered",
                                        value: function() {
                                            var i = this;
                                            this.receiveBuffer.forEach(function(t) {
                                                return i.emitEvent(t)
                                            }), this.receiveBuffer = [], this.sendBuffer.forEach(function(t) {
                                                return i.packet(t)
                                            }), this.sendBuffer = []
                                        }
                                    }, {
                                        key: "ondisconnect",
                                        value: function() {
                                            this.destroy(), this.onclose("io server disconnect")
                                        }
                                    }, {
                                        key: "destroy",
                                        value: function() {
                                            this.subs && (this.subs.forEach(function(t) {
                                                return t()
                                            }), this.subs = void 0), this.io._destroy(this)
                                        }
                                    }, {
                                        key: "disconnect",
                                        value: function() {
                                            return this.connected && this.packet({
                                                type: Q.DISCONNECT
                                            }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
                                        }
                                    }, {
                                        key: "close",
                                        value: function() {
                                            return this.disconnect()
                                        }
                                    }, {
                                        key: "compress",
                                        value: function(t) {
                                            return this.flags.compress = t, this
                                        }
                                    }, {
                                        key: "volatile",
                                        get: function() {
                                            return this.flags.volatile = !0, this
                                        }
                                    }, {
                                        key: "timeout",
                                        value: function(t) {
                                            return this.flags.timeout = t, this
                                        }
                                    }, {
                                        key: "onAny",
                                        value: function(t) {
                                            return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
                                        }
                                    }, {
                                        key: "prependAny",
                                        value: function(t) {
                                            return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
                                        }
                                    }, {
                                        key: "offAny",
                                        value: function(t) {
                                            if (!this._anyListeners) return this;
                                            if (t) {
                                                for (var i = this._anyListeners, n = 0; n < i.length; n++)
                                                    if (t === i[n]) return i.splice(n, 1), this
                                            } else this._anyListeners = [];
                                            return this
                                        }
                                    }, {
                                        key: "listenersAny",
                                        value: function() {
                                            return this._anyListeners || []
                                        }
                                    }]), e
                                }(),
                                at = rt;

                            function rt(t) {
                                this.ms = (t = t || {}).min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = 0 < t.jitter && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
                            }
                            rt.prototype.duration = function() {
                                var t, i, n = this.ms * Math.pow(this.factor, this.attempts++);
                                return this.jitter && (t = Math.random(), i = Math.floor(t * this.jitter * n), n = 0 == (1 & Math.floor(10 * t)) ? n - i : n + i), 0 | Math.min(n, this.max)
                            }, rt.prototype.reset = function() {
                                this.attempts = 0
                            }, rt.prototype.setMin = function(t) {
                                this.ms = t
                            }, rt.prototype.setMax = function(t) {
                                this.max = t
                            }, rt.prototype.setJitter = function(t) {
                                this.jitter = t
                            };
                            var ot = function(t) {
                                    a(i, j);
                                    var s = d(i);

                                    function i(t, i) {
                                        var n, e = s.call(this);
                                        e.nsps = {}, e.subs = [], t && "object" === o(t) && (i = t, t = void 0), (i = i || {}).path = i.path || "/socket.io", e.opts = i, S(f(e), i), e.reconnection(!1 !== i.reconnection), e.reconnectionAttempts(i.reconnectionAttempts || 1 / 0), e.reconnectionDelay(i.reconnectionDelay || 1e3), e.reconnectionDelayMax(i.reconnectionDelayMax || 5e3), e.randomizationFactor(null !== (n = i.randomizationFactor) && void 0 !== n ? n : .5), e.backoff = new at({
                                            min: e.reconnectionDelay(),
                                            max: e.reconnectionDelayMax(),
                                            jitter: e.randomizationFactor()
                                        }), e.timeout(null == i.timeout ? 2e4 : i.timeout), e._readyState = "closed", e.uri = t;
                                        t = i.parser || nt;
                                        return e.encoder = new t.Encoder, e.decoder = new t.Decoder, e._autoConnect = !1 !== i.autoConnect, e._autoConnect && e.open(), e
                                    }
                                    return c(i, [{
                                        key: "reconnection",
                                        value: function(t) {
                                            return arguments.length ? (this.Os = !!t, this) : this.Os
                                        }
                                    }, {
                                        key: "reconnectionAttempts",
                                        value: function(t) {
                                            return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
                                        }
                                    }, {
                                        key: "reconnectionDelay",
                                        value: function(t) {
                                            var i;
                                            return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null !== (i = this.backoff) && void 0 !== i && i.setMin(t), this)
                                        }
                                    }, {
                                        key: "randomizationFactor",
                                        value: function(t) {
                                            var i;
                                            return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null !== (i = this.backoff) && void 0 !== i && i.setJitter(t), this)
                                        }
                                    }, {
                                        key: "reconnectionDelayMax",
                                        value: function(t) {
                                            var i;
                                            return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null !== (i = this.backoff) && void 0 !== i && i.setMax(t), this)
                                        }
                                    }, {
                                        key: "timeout",
                                        value: function(t) {
                                            return arguments.length ? (this.Ds = t, this) : this.Ds
                                        }
                                    }, {
                                        key: "maybeReconnectOnOpen",
                                        value: function() {
                                            !this._reconnecting && this.Os && 0 === this.backoff.attempts && this.reconnect()
                                        }
                                    }, {
                                        key: "open",
                                        value: function(i) {
                                            var n = this;
                                            if (~this._readyState.indexOf("open")) return this;
                                            this.engine = new H(this.uri, this.opts);
                                            var t = this.engine,
                                                e = this;
                                            this._readyState = "opening", this.skipReconnect = !1;
                                            var s, c, a = et(t, "open", function() {
                                                    e.onopen(), i && i()
                                                }),
                                                r = et(t, "error", function(t) {
                                                    e.cleanup(), e._readyState = "closed", n.emitReserved("error", t), i ? i(t) : e.maybeReconnectOnOpen()
                                                });
                                            return !1 !== this.Ds && (0 === (s = this.Ds) && a(), c = this.setTimeoutFn(function() {
                                                a(), t.close(), t.emit("error", new Error("timeout"))
                                            }, s), this.opts.autoUnref && c.unref(), this.subs.push(function() {
                                                clearTimeout(c)
                                            })), this.subs.push(a), this.subs.push(r), this
                                        }
                                    }, {
                                        key: "connect",
                                        value: function(t) {
                                            return this.open(t)
                                        }
                                    }, {
                                        key: "onopen",
                                        value: function() {
                                            this.cleanup(), this._readyState = "open", this.emitReserved("open");
                                            var t = this.engine;
                                            this.subs.push(et(t, "ping", this.onping.bind(this)), et(t, "data", this.ondata.bind(this)), et(t, "error", this.onerror.bind(this)), et(t, "close", this.onclose.bind(this)), et(this.decoder, "decoded", this.ondecoded.bind(this)))
                                        }
                                    }, {
                                        key: "onping",
                                        value: function() {
                                            this.emitReserved("ping")
                                        }
                                    }, {
                                        key: "ondata",
                                        value: function(t) {
                                            this.decoder.add(t)
                                        }
                                    }, {
                                        key: "ondecoded",
                                        value: function(t) {
                                            this.emitReserved("packet", t)
                                        }
                                    }, {
                                        key: "onerror",
                                        value: function(t) {
                                            this.emitReserved("error", t)
                                        }
                                    }, {
                                        key: "socket",
                                        value: function(t, i) {
                                            var n;
                                            return (n = this.nsps[t]) || (n = new ct(this, t, i), this.nsps[t] = n), n
                                        }
                                    }, {
                                        key: "_destroy",
                                        value: function(t) {
                                            for (var i = 0, n = Object.keys(this.nsps); i < n.length; i++) {
                                                var e = n[i];
                                                if (this.nsps[e].active) return
                                            }
                                            this._close()
                                        }
                                    }, {
                                        key: "_packet",
                                        value: function(t) {
                                            for (var i = this.encoder.encode(t), n = 0; n < i.length; n++) this.engine.write(i[n], t.options)
                                        }
                                    }, {
                                        key: "cleanup",
                                        value: function() {
                                            this.subs.forEach(function(t) {
                                                return t()
                                            }), this.subs.length = 0, this.decoder.destroy()
                                        }
                                    }, {
                                        key: "_close",
                                        value: function() {
                                            this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
                                        }
                                    }, {
                                        key: "disconnect",
                                        value: function() {
                                            return this._close()
                                        }
                                    }, {
                                        key: "onclose",
                                        value: function(t) {
                                            this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t), this.Os && !this.skipReconnect && this.reconnect()
                                        }
                                    }, {
                                        key: "reconnect",
                                        value: function() {
                                            var i = this;
                                            if (this._reconnecting || this.skipReconnect) return this;
                                            var t, n, e = this;
                                            this.backoff.attempts >= this._reconnectionAttempts ? (this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1) : (t = this.backoff.duration(), this._reconnecting = !0, n = this.setTimeoutFn(function() {
                                                e.skipReconnect || (i.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open(function(t) {
                                                    t ? (e._reconnecting = !1, e.reconnect(), i.emitReserved("reconnect_error", t)) : e.onreconnect()
                                                }))
                                            }, t), this.opts.autoUnref && n.unref(), this.subs.push(function() {
                                                clearTimeout(n)
                                            }))
                                        }
                                    }, {
                                        key: "onreconnect",
                                        value: function() {
                                            var t = this.backoff.attempts;
                                            this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
                                        }
                                    }]), i
                                }(),
                                ht = {};

                            function lt(t, i) {
                                "object" === o(t) && (i = t, t = void 0);
                                var n = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                                            n = t,
                                            e = (2 < arguments.length ? arguments[2] : void 0) || "undefined" != typeof location && location;
                                        "string" == typeof(t = null == t ? e.protocol + "//" + e.host : t) && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), n = function(t) {
                                            var i = t,
                                                n = t.indexOf("["),
                                                e = t.indexOf("]"); - 1 != n && -1 != e && (t = t.substring(0, n) + t.substring(n, e).replace(/:/g, ";") + t.substring(e, t.length));
                                            for (var s, c = y.exec(t || ""), a = {}, r = 14; r--;) a[m[r]] = c[r] || "";
                                            return -1 != n && -1 != e && (a.source = i, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = (i = (e = a.path).replace(/\/{2,9}/g, "/").split("/"), "/" != e.substr(0, 1) && 0 !== e.length || i.splice(0, 1), "/" == e.substr(e.length - 1, 1) && i.splice(i.length - 1, 1), i), a.queryKey = (i = a.query, s = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t, i, n) {
                                                i && (s[i] = n)
                                            }), s), a
                                        }(t = /^(https?|wss?):\/\//.test(t) ? t : e.protocol + "//" + t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
                                        t = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
                                        return n.id = n.protocol + "://" + t + ":" + n.port + i, n.href = n.protocol + "://" + t + (e && e.port === n.port ? "" : ":" + n.port), n
                                    }(t, (i = i || {}).path || "/socket.io"),
                                    e = n.source,
                                    s = n.id,
                                    t = n.path,
                                    t = ht[s] && t in ht[s].nsps,
                                    s = i.forceNew || i["force new connection"] || !1 === i.multiplex || t ? new ot(e, i) : (ht[s] || (ht[s] = new ot(e, i)), ht[s]);
                                return n.query && !i.query && (i.query = n.queryKey), s.socket(n.path, i)
                            }
                            return s(lt, {
                                Manager: ot,
                                Socket: ct,
                                io: lt,
                                connect: lt
                            }), lt
                        }, "object" == typeof __crisp_void_exports && "undefined" != typeof module ? module.exports = B() : "function" == typeof __crisp_void_define && define.amd ? define(B) : (R = "undefined" != typeof __crisp_void_global_this ? globalThis : R || self).io = B(),
                        function(t, i) {
                            "use strict";
                            "function" == typeof __crisp_void_define && define.amd ? define(["exports"], i) : "object" == typeof __crisp_void_exports ? i(exports) : i(t.PubSub = {})
                        }("object" == typeof r ? r : this, function(n) {
                            "use strict";
                            var o = {},
                                e = -1;

                            function r(t) {
                                for (var i in t)
                                    if (t.hasOwnProperty(i)) return !0;
                                return !1
                            }

                            function h(t, i, n) {
                                try {
                                    t(i, n)
                                } catch (t) {
                                    setTimeout((e = t, function() {
                                        throw e
                                    }), 0)
                                }
                                var e
                            }

                            function l(t, i, n) {
                                t(i, n)
                            }

                            function u(t, i, n, e) {
                                var s, c = o[i],
                                    a = e ? l : h;
                                if (o.hasOwnProperty(i))
                                    for (s in c) c.hasOwnProperty(s) && a(c[s], t, n)
                            }

                            function s(t, i, n, e) {
                                var s, c, a, e = (c = i, a = e, function() {
                                    var t = String(s),
                                        i = t.lastIndexOf(".");
                                    for (u(s, s, c, a); - 1 !== i;) i = (t = t.substr(0, i)).lastIndexOf("."), u(s, t, c, a)
                                });
                                return !! function(t) {
                                    for (var i = String(s), n = Boolean(o.hasOwnProperty(i) && r(o[i])), e = i.lastIndexOf("."); !n && -1 !== e;) e = (i = i.substr(0, e)).lastIndexOf("."), n = Boolean(o.hasOwnProperty(i) && r(o[i]));
                                    return n
                                }(s = t) && (!0 === n ? e() : setTimeout(e, 0), !0)
                            }
                            n.publish = function(t, i) {
                                return s(t, i, !1, n.immediateExceptions)
                            }, n.publishSync = function(t, i) {
                                return s(t, i, !0, n.immediateExceptions)
                            }, n.subscribe = function(t, i) {
                                if ("function" != typeof i) return !1;
                                o.hasOwnProperty(t) || (o[t] = {});
                                var n = "uid_" + String(++e);
                                return o[t][n] = i, n
                            }, n.clearAllSubscriptions = function() {
                                o = {}
                            }, n.clearSubscriptions = function(t) {
                                for (var i in o) o.hasOwnProperty(i) && 0 === i.indexOf(t) && delete o[i]
                            }, n.unsubscribe = function(t) {
                                var i, n, e, s = "string" == typeof t && o.hasOwnProperty(t),
                                    c = !s && "string" == typeof t,
                                    a = "function" == typeof t,
                                    r = !1;
                                if (!s) {
                                    for (i in o)
                                        if (o.hasOwnProperty(i)) {
                                            if (n = o[i], c && n[t]) {
                                                delete n[t], r = t;
                                                break
                                            }
                                            if (a)
                                                for (e in n) n.hasOwnProperty(e) && n[e] === t && (delete n[e], r = !0)
                                        }
                                    return r
                                }
                                delete o[t]
                            }
                        }),
                        function(t, a) {
                            "use strict";

                            function i(t) {
                                function c(t, i, n) {
                                    return 1 === arguments.length ? c.get(t) : c.set(t, i, n)
                                }
                                return c.Rs = t.document, c._cacheKeyPrefix = "cookey.", c._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"), c.defaults = {
                                    path: "/",
                                    secure: !1,
                                    sameSite: a
                                }, c.get = function(t) {
                                    c._cachedDocumentCookie !== c.Rs.cookie && c._renewCache();
                                    t = c.Bs[c._cacheKeyPrefix + t];
                                    return t === a ? a : decodeURIComponent(t)
                                }, c.set = function(t, i, n) {
                                    return (n = c._getExtendedOptions(n)).expires = c._getExpiresDate(i === a ? -1 : n.expires), c.Rs.cookie = c._generateCookieString(t, i, n), c
                                }, c.expire = function(t, i) {
                                    return c.set(t, a, i)
                                }, c._getExtendedOptions = function(t) {
                                    return {
                                        path: t && t.path || c.defaults.path,
                                        domain: t && t.domain || c.defaults.domain,
                                        expires: t && t.expires || c.defaults.expires,
                                        secure: (t && t.secure !== a ? t : c.defaults).secure,
                                        sameSite: t && t.sameSite || c.defaults.sameSite
                                    }
                                }, c._isValidDate = function(t) {
                                    return "[object Date]" === Object.prototype.toString.call(t) && !isNaN(t.getTime())
                                }, c._getExpiresDate = function(t, i) {
                                    if (i = i || new Date, "number" == typeof t ? t = t === 1 / 0 ? c._maxExpireDate : new Date(i.getTime() + 1e3 * t) : "string" == typeof t && (t = new Date(t)), t && !c._isValidDate(t)) throw new Error("Invalid expires");
                                    return t
                                }, c._generateSameSiteString = function(t) {
                                    switch (t && t.sameSite || c.defaults.sameSite) {
                                        case a:
                                            return "";
                                        case "None":
                                        case "none":
                                            return ";sameSite=None";
                                        case "Lax":
                                        case "lax":
                                            return ";sameSite=Lax";
                                        case "Strict":
                                        case "strict":
                                            return ";sameSite=Strict";
                                        default:
                                            throw new TypeError("Invalid sameSite")
                                    }
                                }, c._generateCookieString = function(t, i, n) {
                                    i = (t = (t = t.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")) + "=" + (i = (i + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent));
                                    return i += (n = n || {}).path ? ";path=" + n.path : "", i += n.domain ? ";domain=" + n.domain : "", i += n.expires ? ";expires=" + n.expires.toUTCString() : "", (i += n.secure ? ";secure" : "") + c._generateSameSiteString(n)
                                }, c._getCacheFromString = function(t) {
                                    for (var i = {}, n = t ? t.split("; ") : [], e = 0; e < n.length; e++) {
                                        var s = c._getKeyValuePairFromCookieString(n[e]);
                                        i[c._cacheKeyPrefix + s.key] === a && (i[c._cacheKeyPrefix + s.key] = s.value)
                                    }
                                    return i
                                }, c._getKeyValuePairFromCookieString = function(t) {
                                    var i, n = (n = t.indexOf("=")) < 0 ? t.length : n,
                                        e = t.substr(0, n);
                                    try {
                                        i = decodeURIComponent(e)
                                    } catch (t) {}
                                    return {
                                        key: i,
                                        value: t.substr(n + 1)
                                    }
                                }, c._renewCache = function() {
                                    c.Bs = c._getCacheFromString(c.Rs.cookie), c._cachedDocumentCookie = c.Rs.cookie
                                }, c
                            }
                            t.Cookies = t && "object" == typeof t.document ? i(t) : i
                        }(r),
                        function() {
                            "use strict";
                            var t = r,
                                u = "invalid",
                                f = "undefined" != typeof ArrayBuffer,
                                o = "0123456789abcdef".split(""),
                                n = [-2147483648, 8388608, 32768, 128],
                                h = [24, 16, 8, 0],
                                y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                                i = [];

                            function d(t) {
                                t ? (i[0] = i[16] = i[1] = i[2] = i[3] = i[4] = i[5] = i[6] = i[7] = i[8] = i[9] = i[10] = i[11] = i[12] = i[13] = i[14] = i[15] = 0, this.blocks = i) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                            }

                            function e(t, i) {
                                var n = typeof t;
                                if ("string" == n) {
                                    for (var e, s = [], c = t.length, a = 0, r = 0; r < c; ++r)(e = t.charCodeAt(r)) < 128 ? s[a++] = e : (e < 2048 ? s[a++] = 192 | e >> 6 : (e < 55296 || 57344 <= e ? s[a++] = 224 | e >> 12 : (e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(++r)), s[a++] = 240 | e >> 18, s[a++] = 128 | e >> 12 & 63), s[a++] = 128 | e >> 6 & 63), s[a++] = 128 | 63 & e);
                                    t = s
                                } else {
                                    if ("object" != n) throw new Error(u);
                                    if (null === t) throw new Error(u);
                                    if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                    else if (!(Array.isArray(t) || f && ArrayBuffer.isView(t))) throw new Error(u)
                                }
                                64 < t.length && (t = new d(!0).update(t).digest());
                                for (var o = [], h = [], r = 0; r < 64; ++r) {
                                    var l = t[r] || 0;
                                    o[r] = 92 ^ l, h[r] = 54 ^ l
                                }
                                d.call(this, i), this.update(h), this.oKeyPad = o, this.inner = !0, this.memory = i
                            }
                            Array.isArray || (Array.isArray = function(t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            }), f && !ArrayBuffer.isView && (ArrayBuffer.isView = function(t) {
                                return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                            }), d.prototype.update = function(t) {
                                if (!this.finalized) {
                                    var i, n = typeof t;
                                    if ("string" != n) {
                                        if ("object" != n) throw new Error(u);
                                        if (null === t) throw new Error(u);
                                        if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                        else if (!(Array.isArray(t) || f && ArrayBuffer.isView(t))) throw new Error(u);
                                        i = !0
                                    }
                                    for (var e, s, c = 0, a = t.length, r = this.blocks; c < a;) {
                                        if (this.hashed && (this.hashed = !1, r[0] = this.block, r[16] = r[1] = r[2] = r[3] = r[4] = r[5] = r[6] = r[7] = r[8] = r[9] = r[10] = r[11] = r[12] = r[13] = r[14] = r[15] = 0), i)
                                            for (s = this.start; c < a && s < 64; ++c) r[s >> 2] |= t[c] << h[3 & s++];
                                        else
                                            for (s = this.start; c < a && s < 64; ++c)(e = t.charCodeAt(c)) < 128 ? r[s >> 2] |= e << h[3 & s++] : (e < 2048 ? r[s >> 2] |= (192 | e >> 6) << h[3 & s++] : (e < 55296 || 57344 <= e ? r[s >> 2] |= (224 | e >> 12) << h[3 & s++] : (e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(++c)), r[s >> 2] |= (240 | e >> 18) << h[3 & s++], r[s >> 2] |= (128 | e >> 12 & 63) << h[3 & s++]), r[s >> 2] |= (128 | e >> 6 & 63) << h[3 & s++]), r[s >> 2] |= (128 | 63 & e) << h[3 & s++]);
                                        this.lastByteIndex = s, this.bytes += s - this.start, 64 <= s ? (this.block = r[16], this.start = s - 64, this.hash(), this.hashed = !0) : this.start = s
                                    }
                                    return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                                }
                            }, d.prototype.finalize = function() {
                                var t, i;
                                this.finalized || (this.finalized = !0, t = this.blocks, i = this.lastByteIndex, t[16] = this.block, t[i >> 2] |= n[3 & i], this.block = t[16], 56 <= i && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash())
                            }, d.prototype.hash = function() {
                                for (var t, i, n, e, s, c, a = this.h0, r = this.h1, o = this.h2, h = this.h3, l = this.h4, u = this.h5, f = this.h6, d = this.h7, v = this.blocks, p = 16; p < 64; ++p) t = ((i = v[p - 15]) >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3, i = v[p - 2], v[p] = v[p - 16] + t + v[p - 7] + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) << 0;
                                for (c = r & o, p = 0; p < 64; p += 4) this.first ? (d = (i = v[0] - 210244248) - 1521486534 << 0, h = i + 143694565 << 0, this.first = !(n = 704751109)) : (d = h + (i = d + ((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & u ^ ~l & f) + y[p] + v[p]) << 0, h = i + ((t = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + ((n = a & r) ^ a & o ^ c)) << 0), f = o + (i = f + ((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & l ^ ~d & u) + y[p + 1] + v[p + 1]) << 0, o = i + ((t = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((e = h & a) ^ h & r ^ n)) << 0, u = r + (i = u + ((f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & d ^ ~f & l) + y[p + 2] + v[p + 2]) << 0, r = i + ((t = (o >>> 2 | o << 30) ^ (o >>> 13 | o << 19) ^ (o >>> 22 | o << 10)) + ((s = o & h) ^ o & a ^ e)) << 0, l = a + (i = l + ((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & f ^ ~u & d) + y[p + 3] + v[p + 3]) << 0, a = i + ((t = (r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + ((c = r & o) ^ r & h ^ s)) << 0;
                                this.h0 = this.h0 + a << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + o << 0, this.h3 = this.h3 + h << 0, this.h4 = this.h4 + l << 0, this.h5 = this.h5 + u << 0, this.h6 = this.h6 + f << 0, this.h7 = this.h7 + d << 0
                            }, d.prototype.toString = d.prototype.hex = function() {
                                this.finalize();
                                var t = this.h0,
                                    i = this.h1,
                                    n = this.h2,
                                    e = this.h3,
                                    s = this.h4,
                                    c = this.h5,
                                    a = this.h6,
                                    r = this.h7;
                                return o[t >> 28 & 15] + o[t >> 24 & 15] + o[t >> 20 & 15] + o[t >> 16 & 15] + o[t >> 12 & 15] + o[t >> 8 & 15] + o[t >> 4 & 15] + o[15 & t] + o[i >> 28 & 15] + o[i >> 24 & 15] + o[i >> 20 & 15] + o[i >> 16 & 15] + o[i >> 12 & 15] + o[i >> 8 & 15] + o[i >> 4 & 15] + o[15 & i] + o[n >> 28 & 15] + o[n >> 24 & 15] + o[n >> 20 & 15] + o[n >> 16 & 15] + o[n >> 12 & 15] + o[n >> 8 & 15] + o[n >> 4 & 15] + o[15 & n] + o[e >> 28 & 15] + o[e >> 24 & 15] + o[e >> 20 & 15] + o[e >> 16 & 15] + o[e >> 12 & 15] + o[e >> 8 & 15] + o[e >> 4 & 15] + o[15 & e] + o[s >> 28 & 15] + o[s >> 24 & 15] + o[s >> 20 & 15] + o[s >> 16 & 15] + o[s >> 12 & 15] + o[s >> 8 & 15] + o[s >> 4 & 15] + o[15 & s] + o[c >> 28 & 15] + o[c >> 24 & 15] + o[c >> 20 & 15] + o[c >> 16 & 15] + o[c >> 12 & 15] + o[c >> 8 & 15] + o[c >> 4 & 15] + o[15 & c] + o[a >> 28 & 15] + o[a >> 24 & 15] + o[a >> 20 & 15] + o[a >> 16 & 15] + o[a >> 12 & 15] + o[a >> 8 & 15] + o[a >> 4 & 15] + o[15 & a] + o[r >> 28 & 15] + o[r >> 24 & 15] + o[r >> 20 & 15] + o[r >> 16 & 15] + o[r >> 12 & 15] + o[r >> 8 & 15] + o[r >> 4 & 15] + o[15 & r]
                            }, d.prototype.digest = function() {
                                this.finalize();
                                var t = this.h0,
                                    i = this.h1,
                                    n = this.h2,
                                    e = this.h3,
                                    s = this.h4,
                                    c = this.h5,
                                    a = this.h6,
                                    r = this.h7;
                                return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r]
                            }, (e.prototype = new d).finalize = function() {
                                var t;
                                d.prototype.finalize.call(this), this.inner && (this.inner = !1, t = this.digest(), d.call(this, this.memory), this.update(this.oKeyPad), this.update(t), d.prototype.finalize.call(this))
                            };
                            var s = (c.create = function() {
                                return new d
                            }, c.update = function(t) {
                                return c.create().update(t)
                            }, c);

                            function c(t) {
                                return new d(!0).update(t).hex()
                            }

                            function a(t, i) {
                                return new e(t, !0).update(i).hex()
                            }(s.sha256 = s).sha256.hmac = (a.create = function(t) {
                                return new e(t)
                            }, a.update = function(t, i) {
                                return a.create(t).update(i)
                            }, a), t.sha256 = s.sha256
                        }(), this.Ns = /^((?:https?|wss?):\/\/[^\/]+)(\/.*)?$/, this.Ms(), this.ct(t), this.Ts(t, r), this.Config = new i(this), this.Register = new e(this), this.Schedule = new c(this), this.Listener = new o(this), this.Socket = new l(this), this.Stream = new f(this), this.Storage = new p(this), this.Browsing = new A(this), this.Call = new I(this), this.Message = new m(this), this.Session = new g(this), this.Website = new b(this), this.Bucket = new x(this), this.Media = new F(this), this.Helpdesk = new z(this), this.Trigger = new O(this), this.Issue = new N(this), this.ft(), !0 === t.connect_socket && this.socket.connect()
                }, p.prototype.Ms = function() {
                    this.ot()
                }, p.prototype.ot = function() {
                    delete this.environment, delete this.disable_autoload, delete this.url_go, delete this.website_domain, delete this.website_id, delete this.token_id, delete this.cookie_expire, delete this.cookie_domain, delete this.platform_name, delete this.platform_signature_key, delete this.runtime_configuration, delete this.device, this.Us = !1, this.Ps = !1
                }, p.prototype.ct = function(t) {
                    t && t.environment && (this.environment = t.environment || "development"), t && t.disable_autoload && (this.disable_autoload = t.disable_autoload), t && t.url_go && (this.url_go = t.url_go), t && t.website_domain && (this.website_domain = t.website_domain), t && t.website_id && (this.website_id = t.website_id), t && t.token_id && (this.token_id = t.token_id), t && t.cookie_expire && (this.cookie_expire = t.cookie_expire), t && t.cookie_domain && (this.cookie_domain = t.cookie_domain), t && t.platform_name && (this.platform_name = t.platform_name), t && t.platform_signature_key && (this.platform_signature_key = t.platform_signature_key), t && t.runtime_configuration && (this.runtime_configuration = t.runtime_configuration), this.device = {}, t && t.useragent && (this.device.useragent = t.useragent), t && t.timezone && (this.device.timezone = t.timezone), t && t.capabilities && (this.device.capabilities = t.capabilities), t && t.locales && (this.device.locales = t.locales)
                }, p.prototype.Ts = function(t, i) {
                    var n = ["websocket"],
                        e = (t.url_relay_client || "").match(this.Ns) || [],
                        t = (t.url_relay_stream || "").match(this.Ns) || [];
                    this.event = i.PubSub, this.socket = i.io(e[1] || null, {
                        path: e[2] || "/",
                        transports: n,
                        autoConnect: !1,
                        timeout: 25e3,
                        reconnectionDelay: 15e3,
                        reconnectionDelayMax: 6e4,
                        reconnectionAttempts: 5,
                        randomizationFactor: .5
                    }), this.stream = i.io(t[1] || null, {
                        path: t[2] || "/",
                        transports: n,
                        reconnection: !1,
                        autoConnect: !1
                    }), this.cookie = i.Cookies(window), this.sha256 = i.sha256
                }, p.prototype.ft = function() {
                    var t = this;
                    this.Listener.add_event("index", "window", "pagehide", function() {
                        t.Us = t.socket.connected || !1, t.Ps = t.stream.connected || !1, !0 === t.socket.connected && t.socket.disconnect(), !0 === t.stream.connected && t.stream.disconnect()
                    }), this.Listener.add_event("index", "window", "pageshow", function() {
                        !0 === t.Us && (t.Us = !1, t.socket.connect()), !0 === t.Ps && (t.Ps = !1, t.stream.connect())
                    }), this.Listener.add_event("index", "window", "popstate", function() {
                        t.Ls()
                    }), "object" === ui(window.history) && (this.Listener.apply_patch("index", "window.history", "pushState", window.history, function() {
                        t.Ls()
                    }), this.Listener.apply_patch("index", "window.history", "replaceState", window.history, function() {
                        t.Ls()
                    }))
                }, p.prototype.Ls = function() {
                    this.Session.send_device(), this.event.publish("window:history", {
                        page_url: document.location.href,
                        page_domain: document.location.hostname
                    })
                }, t.CrispLibraryClient = new p;
                var v = {
                    client: function(t) {
                        var n = [],
                            t = t || {};
                        return function(t, i) {
                            n.push('<div aria-live="polite" class="crisp-client"><div class="cc-1s47"></div><div id="crisp-chatbox" :data-hidden="$store.base.is_hidden" :data-force-show="$store.base.force_show" :data-availability="$store.base.availability" :data-lock-maximized="$store.base.runtime.lock_maximized ? true : false" :data-last-operator-face="($store.base.configuration.chat.last_operator_face &amp;&amp; $store.base.active_operators.length &gt; 0) ? true : false" :data-ongoing-operator-face="($store.base.configuration.chat.ongoing_operator_face &amp;&amp; $store.chat.ongoing_operator.url) ? true : false" :data-availability-tooltip="$store.base.configuration.chat.availability_tooltip" :data-hide-vacation="$store.base.configuration.chat.hide_vacation" :data-blocked="$store.base.is_blocked" :data-mobile-view="$store.base.is_mobile_view" :data-full-view="$store.base.is_full_view" :data-small-view="$store.base.is_small_view" :data-large-view="$store.base.is_large_view" :data-has-local-messages="$store.base.has_local_messages" :data-was-availability-online="$store.base.was_availability_online" :data-is-activity-ongoing="$store.base.is_activity_ongoing" :data-hide-on-away="$store.base.configuration.chat.hide_on_away" :data-hide-on-mobile="$store.base.configuration.chat.hide_on_mobile" :data-position-reverse="$store.base.configuration.chat.position_reverse"' + h.Library.jade.runtime.attr("lang", "" + i, !0, !0) + h.Library.jade.runtime.attr("dir", "" + t, !0, !0) + ' translate="no" tabindex="-1" class="cc-tlyw"></div></div>')
                        }.call(this, "direction" in t ? t.direction : "undefined" != typeof direction ? direction : void 0, "lang" in t ? t.lang : "undefined" != typeof lang ? lang : void 0), n.join("")
                    },
                    viewport: function(t) {
                        var i = [],
                            t = t || {};
                        return function(t) {
                            i.push('<meta name="viewport"' + h.Library.jade.runtime.attr("content", "" + t, !0, !0) + ">")
                        }.call(this, "content" in t ? t.content : "undefined" != typeof content ? content : void 0), i.join("")
                    },
                    clear: function(t) {
                        var i = [];
                        return i.push('<span class="cc-1vzn"></span>'), i.join("")
                    },
                    style_color: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div class="cc-1kpe"><style type="text/css">.crisp-client *:focus-visible {\n  outline-color: ' + h.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1v0h {\n  color: " + h.Library.jade.runtime.escape(null == (i = t.reverse.hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-uv5q {\n  color: " + h.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1cu8 {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t.reverse.hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-ycwi {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-18qu {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[600].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-qfnu {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-qfnu *:focus-visible {\n  outline-color: " + h.Library.jade.runtime.escape(null == (i = t[10].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1ms5 {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[20].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1r50 {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[10].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-zkg3 {\n  border-color: " + h.Library.jade.runtime.escape(null == (i = t.reverse.hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-ut0j,\n.crisp-client .cc-tlyw .cc-dpkb:hover {\n  border-color: " + h.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-zg42 {\n  border-color: " + h.Library.jade.runtime.escape(null == (i = t[500].rgba(.2)) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1sel {\n  border-bottom-color: " + h.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-jf4n::placeholder {\n  color: " + h.Library.jade.runtime.escape(null == (i = t[200].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-4upc::placeholder {\n  color: " + h.Library.jade.runtime.escape(null == (i = t[200].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-f23s,\n.crisp-client .cc-tlyw .cc-f23s:active,\n.crisp-client .cc-tlyw .cc-eugx:hover .cc-1una,\n.crisp-client .cc-tlyw .cc-eugx .cc-1una:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + ' !important;\n}\n\n.crisp-client .cc-tlyw .cc-1oci,\n.crisp-client .cc-tlyw .cc-a691:hover,\n.crisp-client .cc-tlyw .cc-jf9n[data-active="true"] .cc-1lnv {\n  background: ' + h.Library.jade.runtime.escape(null == (i = t[700].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-f23s:hover,\n.crisp-client .cc-tlyw .cc-1oci:hover,\n.crisp-client .cc-tlyw .cc-a691:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[800].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1oci:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-raer:hover .cc-y80i {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[700].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-raer .cc-y80i:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[800].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1t4x,\n.crisp-client .cc-tlyw .cc-pyh5:hover .cc-13te,\n.crisp-client .cc-tlyw .cc-pyh5 .cc-13te:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1t4x:hover {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[600].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1t4x:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[700].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-14b7::selection,\n.crisp-client .cc-tlyw .cc-14b7 *::selection {\n  color: #1c293b !important;\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[100].hex) ? "" : i) + " !important;\n}</style></div>")
                        }.call(this, "colors" in t ? t.colors : "undefined" != typeof colors ? colors : void 0), n.join("")
                    },
                    style_other: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div class="cc-15aw"><style type="text/css">.crisp-client .cc-tlyw {\n  z-index: ' + h.Library.jade.runtime.escape(null == (i = t) ? "" : i) + ";\n}</style></div>")
                        }.call(this, "container_index" in t ? t.container_index : "undefined" != typeof container_index ? container_index : void 0), n.join("")
                    },
                    style_position: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div class="cc-17eb">'), t.default_button_horizontal && n.push('<style type="text/css">.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="false"] .cc-kxkl .cc-nsge,\n.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="false"] .cc-kxkl .cc-1hqb {\n  margin-right: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="false"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-right: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="true"] .cc-kxkl .cc-nsge,\n.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="true"] .cc-kxkl .cc-1hqb {\n  margin-left: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="true"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-left: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + "px !important;\n}\n</style>"), t.default_button_vertical && n.push('<style type="text/css">.crisp-client .cc-tlyw[data-full-view="false"] .cc-kxkl .cc-nsge,\n.crisp-client .cc-tlyw[data-full-view="false"] .cc-kxkl .cc-1hqb {\n  margin-bottom: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_vertical) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="false"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-bottom: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_vertical) ? "" : i) + "px !important;\n}\n</style>"), t.mobile_button_horizontal && n.push('<style type="text/css">.crisp-client .cc-tlyw[data-full-view="true"][data-position-reverse="false"] .cc-kxkl .cc-nsge {\n  margin-right: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="true"][data-position-reverse="false"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-right: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="true"][data-position-reverse="true"] .cc-kxkl .cc-nsge {\n  margin-left: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="true"][data-position-reverse="true"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-left: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + "px !important;\n}\n</style>"), t.mobile_button_vertical && n.push('<style type="text/css">.crisp-client .cc-tlyw[data-full-view="true"] .cc-kxkl .cc-nsge {\n  margin-bottom: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_vertical) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="true"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-bottom: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_vertical) ? "" : i) + "px !important;\n}</style>"), n.push("</div>")
                        }.call(this, "position" in t ? t.position : "undefined" != typeof position ? position : void 0), n.join("")
                    },
                    new_line: function(t) {
                        var i = [];
                        return i.push('<br class="cc-mrr9">'), i.join("")
                    },
                    link_phone: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push("<a" + h.Library.jade.runtime.attr("href", "tel:" + t, !1, !0) + ' class="cc-unsu cc-1c9j">' + (null == (i = t) ? "" : i) + "</a>")
                        }.call(this, "phone" in t ? t.phone : "undefined" != typeof phone ? phone : void 0), n.join("")
                    },
                    link_email: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push("<a" + h.Library.jade.runtime.attr("href", "mailto:" + t, !1, !0) + ' class="cc-unsu cc-cieh">' + (null == (i = t) ? "" : i) + "</a>")
                        }.call(this, "email" in t ? t.email : "undefined" != typeof email ? email : void 0), n.join("")
                    },
                    link_uri: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push("<a" + h.Library.jade.runtime.attr("href", "" + i, !1, !0) + ' rel="noopener noreferrer" target="_blank" class="cc-unsu cc-e1vc">' + (null == (n = t) ? "" : n) + "</a>")
                        }.call(this, "uri_name" in t ? t.uri_name : "undefined" != typeof uri_name ? uri_name : void 0, "uri_value" in t ? t.uri_value : "undefined" != typeof uri_value ? uri_value : void 0), e.join("")
                    },
                    link_domain: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push("<a" + h.Library.jade.runtime.attr("href", "http://" + i + "/", !1, !0) + ' rel="noopener noreferrer" target="_blank" class="cc-unsu cc-1lq3">' + (null == (n = t) ? "" : n) + "</a>")
                        }.call(this, "domain_name" in t ? t.domain_name : "undefined" != typeof domain_name ? domain_name : void 0, "domain_value" in t ? t.domain_value : "undefined" != typeof domain_value ? domain_value : void 0), e.join("")
                    },
                    markdown_blockquote: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-1d9x cc-h2ac">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_table: function(t) {
                        var c, a = [],
                            t = t || {};
                        return function(s, t, e) {
                            a.push('<table class="cc-1d9x cc-9afi">'), 0 < s.length && (a.push('<thead class="cc-179w"><tr>'), function() {
                                    var t = s;
                                    if ("number" == typeof t.length)
                                        for (var i = 0, n = t.length; i < n; i++) {
                                            var e = t[i];
                                            a.push("<th>" + (null == (c = e) ? "" : c) + "</th>")
                                        } else
                                            for (i in n = 0, t) n++, e = t[i], a.push("<th>" + (null == (c = e) ? "" : c) + "</th>")
                                }.call(this), a.push("</tr></thead>")), a.push("<tbody>"),
                                function() {
                                    var t = e;
                                    if ("number" == typeof t.length)
                                        for (var i = 0, n = t.length; i < n; i++) {
                                            var s = t[i];
                                            a.push("<tr>"),
                                                function() {
                                                    var t = s;
                                                    if ("number" == typeof t.length)
                                                        for (var i = 0, n = t.length; i < n; i++) {
                                                            var e = t[i];
                                                            a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                        } else
                                                            for (i in n = 0, t) n++, e = t[i], a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                }.call(this), a.push("</tr>")
                                        } else
                                            for (i in n = 0, t) n++, s = t[i], a.push("<tr>"),
                                                function() {
                                                    var t = s;
                                                    if ("number" == typeof t.length)
                                                        for (var i = 0, n = t.length; i < n; i++) {
                                                            var e = t[i];
                                                            a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                        } else
                                                            for (i in n = 0, t) n++, e = t[i], a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                }.call(this), a.push("</tr>")
                                }.call(this), a.push("</tbody></table>")
                        }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "undefined" in t ? t.undefined : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), a.join("")
                    },
                    markdown_color: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push("<span" + h.Library.jade.runtime.attr("style", "color: " + t + " !important;", !0, !0) + ' class="cc-1d9x cc-1djk">' + (null == (n = i) ? "" : n) + "</span>")
                        }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                    },
                    markdown_bold: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-1d9x cc-b2np cc-179w">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_code_inline: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-1d9x cc-188s cc-1vqo cc-1ms5">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_code_block: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-1d9x cc-188s cc-1xuf cc-1ms5">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_delete: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-1d9x cc-xymf">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_highlight: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-1d9x cc-1lge">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_emphasis: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-1d9x cc-8jm9 cc-179w">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_image: function(t) {
                        var s = [],
                            t = t || {};
                        return function(t, i, n, e) {
                            s.push("");
                            e = t(e);
                            s.push('<span class="cc-1d9x cc-1spa"><img' + h.Library.jade.runtime.attr("src", n + "/process/original/?url=" + e, !1, !0) + h.Library.jade.runtime.attr("alt", "" + i, !1, !0) + "></span>")
                        }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), s.join("")
                    },
                    markdown_interpolate: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<span class="cc-1d9x cc-1c09">{{ ' + h.Library.jade.runtime.escape(null == (n = t) ? "" : n) + h.Library.jade.runtime.escape(null == (n = i ? ' | "' + i + '"' : "") ? "" : n) + " }}</span>")
                        }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                    },
                    markdown_italic: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-1d9x cc-s248">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_line: function(t) {
                        var i = [];
                        return i.push('<span class="cc-1d9x cc-1ux6"></span>'), i.join("")
                    },
                    markdown_link_text: function(t) {
                        var e, s = [],
                            t = t || {};
                        return function(t, i, n) {
                            s.push("<a" + h.Library.jade.runtime.attr("href", "" + t.filter_link_safe(n), !1, !0) + h.Library.jade.runtime.attr("target", "" + t.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-1d9x cc-s0i4 cc-13qg">' + (null == (e = i) ? "" : e) + "</a>")
                        }.call(this, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), s.join("")
                    },
                    markdown_link_image: function(t) {
                        var c = [],
                            t = t || {};
                        return function(t, i, n, e, s) {
                            c.push("");
                            n = t(n);
                            c.push("<a" + h.Library.jade.runtime.attr("href", "" + i.filter_link_safe(s), !1, !0) + h.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-1d9x cc-s0i4 cc-1jsk"><span class="cc-1d9x cc-1spa"><img' + h.Library.jade.runtime.attr("src", e + "/process/original/?url=" + n, !1, !0) + ' alt=""></span></a>')
                        }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), c.join("")
                    },
                    markdown_list: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push("<span" + h.Library.jade.runtime.attr("data-type", "" + t, !1, !0) + ' class="cc-1d9x cc-s39d">' + (null == (n = i) ? "" : n) + "</span>")
                        }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                    },
                    markdown_title: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push("<span" + h.Library.jade.runtime.attr("data-type", "" + t, !1, !0) + ' class="cc-1d9x cc-17lj cc-179w">' + (null == (n = i) ? "" : n) + "</span>")
                        }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                    },
                    markdown_underline: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span class="cc-1d9x cc-dzm3">' + (null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                    },
                    markdown_youtube: function(t) {
                        var a = [],
                            t = t || {};
                        return function(t, i, n, e, s) {
                            a.push("");
                            var c = "https://www.youtube.com/embed/" + t(s) + "?autoplay=1&rel=0",
                                s = t("https://img.youtube.com/vi/" + t(s) + "/hqdefault.jpg");
                            a.push("<a" + h.Library.jade.runtime.attr("href", c, !0, !0) + h.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-1d9x cc-sput cc-wzp2"><span class="cc-mxp0 cc-qy8o cc-9siz cc-1jnc"><img' + h.Library.jade.runtime.attr("src", e + "/process/resize/?url=" + s + "&width=960&height=960", !0, !0) + h.Library.jade.runtime.attr("alt", "" + n, !0, !0) + "></span></a>")
                        }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), a.join("")
                    },
                    markdown_vimeo: function(t) {
                        var s, c = [],
                            t = t || {};
                        return function(t, i, n, e) {
                            c.push("");
                            e = "https://vimeo.com/" + t(e) + "?autoplay=1";
                            c.push("<a" + h.Library.jade.runtime.attr("href", e, !1, !0) + h.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-unsu cc-e1vc">' + (null == (s = n || e) ? "" : s) + "</a>")
                        }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), c.join("")
                    },
                    markdown_dailymotion: function(t) {
                        var a = [],
                            t = t || {};
                        return function(t, i, n, e, s) {
                            a.push("");
                            var c = "https://www.dailymotion.com/embed/video/" + t(s),
                                s = t("https://www.dailymotion.com/thumbnail/video/" + t(s));
                            a.push("<a" + h.Library.jade.runtime.attr("href", c, !0, !0) + h.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-1d9x cc-sput cc-kkqo"><span class="cc-mxp0 cc-vxmv cc-9siz cc-1jnc"><img' + h.Library.jade.runtime.attr("src", e + "/process/resize/?url=" + s + "&width=320&height=240", !0, !0) + h.Library.jade.runtime.attr("alt", "" + n, !0, !0) + "></span></a>")
                        }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), a.join("")
                    },
                    markdown_frame: function(t) {
                        var e, s = [],
                            t = t || {};
                        return function(t, i, n) {
                            s.push("<a" + h.Library.jade.runtime.attr("href", "" + t.filter_link_safe(n), !1, !0) + h.Library.jade.runtime.attr("target", "" + t.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-unsu cc-e1vc">' + (null == (e = i || n) ? "" : e) + "</a>")
                        }.call(this, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), s.join("")
                    },
                    smiley: function(t) {
                        var n = [],
                            t = t || {};
                        return function(t, i) {
                            n.push("<span" + h.Library.jade.runtime.attr("data-size", i, !0, !0) + h.Library.jade.runtime.attr("data-name", t, !0, !0) + ' class="cc-1eqs"></span>')
                        }.call(this, "name" in t ? t.name : "undefined" != typeof name ? name : void 0, "size" in t ? t.size : "undefined" != typeof size ? size : void 0), n.join("")
                    },
                    magnify: function(t) {
                        var i = [];
                        return i.push('<div @click="$events.magnify.disappear_fuzzy" @keydown="$events.magnify.keydown" :data-type="$store.magnify.type" :data-state="$store.magnify.state" tabindex="0" class="cc-uxns"><span class="cc-irw3 cc-1gcw cc-1sel"></span><img v-if="$store.magnify.type === \'image\'" v-on:load="$store.magnify.state = \'loaded\'" @click="$events.magnify.disappear()" :src="$store.magnify.source" alt="" class="cc-5moc"><video v-else-if="$store.magnify.type === \'video\'" v-on:loadeddata="$store.magnify.state = \'loaded\'" :src="$store.magnify.source" autoplay controls class="cc-5moc"></video><iframe v-else v-on:load="$store.magnify.state = \'loaded\'" type="text/html" :src="$store.magnify.source" frameborder="0" sandbox="allow-popups allow-same-origin allow-scripts" class="cc-5moc"></iframe><div class="cc-1scn"><div class="cc-iy3v"><a v-if="$store.magnify.messages.previous" v-crisp-accessibility="{ role: \'button\' }" @click="$events.magnify.navigate_click(\'previous\')" data-action="previous" class="cc-fupn"></a><a v-if="$store.magnify.type === \'image\' || $store.magnify.type === \'video\'" v-crisp-accessibility="{ role: \'button\' }" :href="$store.magnify.source" :download="$store.magnify.name || $store.magnify.source" data-action="download" rel="noopener noreferrer" target="_blank" class="cc-fupn"></a><a v-crisp-accessibility="{ role: \'button\' }" @click="$events.magnify.disappear()" data-action="close" class="cc-fupn"></a><a v-if="$store.magnify.messages.next" v-crisp-accessibility="{ role: \'button\' }" @click="$events.magnify.navigate_click(\'next\')" data-action="next" class="cc-fupn"></a></div></div></div>'), i.join("")
                    },
                    date_now: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="now" class="cc-q065">' + h.Library.jade.runtime.escape(null == (i = t("date", "now")) ? "" : i) + "</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    date_seconds: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="seconds" class="cc-q065">' + h.Library.jade.runtime.escape(null == (i = t("date", "second")) ? "" : i) + "</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    date_minutes: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<span data-type="minutes" class="cc-q065">'), 1 === i ? e.push(h.Library.jade.runtime.escape(null == (n = t("date", "minute_singular")) ? "" : n)) : e.push(h.Library.jade.runtime.escape(null == (n = t("date", "minute_plural", [i])) ? "" : n)), e.push("</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "minutes" in t ? t.minutes : "undefined" != typeof minutes ? minutes : void 0), e.join("")
                    },
                    date_hours: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<span data-type="hours" class="cc-q065">'), 1 === i ? e.push(h.Library.jade.runtime.escape(null == (n = t("date", "hour_singular")) ? "" : n)) : e.push(h.Library.jade.runtime.escape(null == (n = t("date", "hour_plural", [i])) ? "" : n)), e.push("</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "hours" in t ? t.hours : "undefined" != typeof hours ? hours : void 0), e.join("")
                    },
                    date_far_away: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="far_away" class="cc-q065">' + h.Library.jade.runtime.escape(null == (i = t) ? "" : i) + "</span>")
                        }.call(this, "date_full" in t ? t.date_full : "undefined" != typeof date_full ? date_full : void 0), n.join("")
                    },
                    duration_now: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="now" class="cc-k09t">' + h.Library.jade.runtime.escape(null == (i = t("duration", "now")) ? "" : i) + "</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    duration_seconds: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="seconds" class="cc-k09t">' + h.Library.jade.runtime.escape(null == (i = t("duration", "second")) ? "" : i) + "</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    duration_minutes: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<span data-type="minutes" class="cc-k09t">'), 1 === i ? e.push(h.Library.jade.runtime.escape(null == (n = t("duration", "minute_singular")) ? "" : n)) : e.push(h.Library.jade.runtime.escape(null == (n = t("duration", "minute_plural", [i])) ? "" : n)), e.push("</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "minutes" in t ? t.minutes : "undefined" != typeof minutes ? minutes : void 0), e.join("")
                    },
                    duration_hours: function(t) {
                        var n, e = [],
                            t = t || {};
                        return function(t, i) {
                            e.push('<span data-type="hours" class="cc-k09t">'), 1 === i ? e.push(h.Library.jade.runtime.escape(null == (n = t("duration", "hour_singular")) ? "" : n)) : e.push(h.Library.jade.runtime.escape(null == (n = t("duration", "hour_plural", [i])) ? "" : n)), e.push("</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "hours" in t ? t.hours : "undefined" != typeof hours ? hours : void 0), e.join("")
                    },
                    duration_days: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<span data-type="days" class="cc-k09t">' + h.Library.jade.runtime.escape(null == (i = t("duration", "days")) ? "" : i) + "</span>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    chat: function(t) {
                        var a, r = [],
                            o = {},
                            t = t || {};
                        return function(e, s, t, i) {
                            r.push(""), r.push(""), o["text-space"] = a = function() {
                                    this && this.block, this && this.attributes, r.push("<span> </span>")
                                }, r.push('<div class="cc-kxkl cc-14b7"><div @wheel="$events.chat.fuzzy_wheel" :data-visible="$store.chat.is_opened" :data-chat-status="$store.chat.status_marker" :data-animate-minimize="$store.chat.animate_minimize" :data-animate-maximize="$store.chat.animate_maximize" class="cc-1hqb"><div v-effect="has_tile = (($store.base.configuration.chat.tile &amp;&amp; $store.base.configuration.chat.tile !== \'default\') ? true : false)" class="cc-13tl"><div :data-mode="$store.chat.mode" :data-helpdesk-collapsed="(($store.chat.mode === \'helpdesk\') &amp;&amp; $store.chat.helpdesk_viewer.url) ? \'true\' : \'false\'" :data-tile="(has_tile ? $store.base.configuration.chat.tile : null)" :data-overflow="$store.chat.has_channels" class="cc-1cff cc-qfnu"><span class="cc-143a">'),
                                function() {
                                    var t = ["chat", "helpdesk"];
                                    if ("number" == typeof t.length)
                                        for (var i = 0, n = t.length; i < n; i++) {
                                            var e = t[i];
                                            r.push("<a" + h.Library.jade.runtime.attr("v-if", "helpdesk" === e ? "$store.chat.helpdesk.search" : null, !0, !0) + h.Library.jade.runtime.attr("v-crisp-accessibility", "{ role: 'button', is_first: " + (0 === i) + " }", !0, !0) + h.Library.jade.runtime.attr("@click.stop.prevent", "$events.chat.pane_mode_click('" + e + "')", !0, !0) + h.Library.jade.runtime.attr(":class", "{ 'cc-1oci cc-a691': ($store.chat.mode === '" + e + "'), 'cc-a691': ($store.chat.mode !== '" + e + "') }", !0, !0) + h.Library.jade.runtime.attr(":data-disabled", "helpdesk" === e ? "($store.chat.has_offline && $store.chat.mode !== 'helpdesk') ? 'true' : 'false'" : null, !0, !0) + h.Library.jade.runtime.attr("data-mode", "" + e, !0, !0) + ' class="cc-3opp"><span class="cc-443p cc-1cu8"></span><span class="cc-ptjr cc-179w cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_mode_" + e)) ? "" : a) + "</span></a>")
                                        } else
                                            for (i in n = 0, t) n++, r.push("<a" + h.Library.jade.runtime.attr("v-if", "helpdesk" === (e = t[i]) ? "$store.chat.helpdesk.search" : null, !0, !0) + h.Library.jade.runtime.attr("v-crisp-accessibility", "{ role: 'button', is_first: " + (0 === i) + " }", !0, !0) + h.Library.jade.runtime.attr("@click.stop.prevent", "$events.chat.pane_mode_click('" + e + "')", !0, !0) + h.Library.jade.runtime.attr(":class", "{ 'cc-1oci cc-a691': ($store.chat.mode === '" + e + "'), 'cc-a691': ($store.chat.mode !== '" + e + "') }", !0, !0) + h.Library.jade.runtime.attr(":data-disabled", "helpdesk" === e ? "($store.chat.has_offline && $store.chat.mode !== 'helpdesk') ? 'true' : 'false'" : null, !0, !0) + h.Library.jade.runtime.attr("data-mode", "" + e, !0, !0) + ' class="cc-3opp"><span class="cc-443p cc-1cu8"></span><span class="cc-ptjr cc-179w cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_mode_" + e)) ? "" : a) + "</span></a>")
                                }.call(this), r.push('</span><div v-if="$store.chat.mode === \'chat\'" class="cc-ac94"><span class="cc-15os"><span v-if="$store.chat.status_marker === \'ongoing\'" class="cc-18pq"><span class="cc-1g88 cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.chat.ongoing_operator.type, $store.chat.ongoing_operator.user_id, $store.chat.ongoing_operator.url) + \') !important\') }" class="cc-1b4q cc-4yys"></span><span v-if="$store.base.availability === \'online\'" class="cc-acrr cc-ut0j"></span></span><span class="cc-1vzn"></span></span><span v-else class="cc-18pq"><span v-for="active_avatar in $store.base.active_operators" class="cc-1g88 cc-18ij cc-10fp cc-ut0j"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, active_avatar.type, active_avatar.identifier, active_avatar.avatar) + \') !important\') }" class="cc-1b4q cc-4yys"></span><span v-if="active_avatar.name || (active_avatar.type === \'website\' &amp;&amp; $store.base.other_operators_count &gt; 0 &amp;&amp; $store.chat.show_operator_count === true)" class="cc-1shv cc-1npw cc-1o14 cc-e871"><span class="cc-1hb6 cc-l4vy cc-1ev6">{{ (active_avatar.type === \'website\' && $store.base.other_operators_count > 0 && $store.chat.show_operator_count === true) ? $render._e("chat", "chat_header_initial_avatar_website_tooltip", [$store.base.other_operators_count]) : active_avatar.name }}</span></span></span><span class="cc-1vzn"></span></span></span><span class="cc-hiql"><span v-if="$store.chat.status_marker === \'ongoing\'" class="cc-1lcq"><span class="cc-i5ze cc-1v0h cc-179w"><span class="cc-1ede cc-gjan cc-1v0h">{{ $store.chat.ongoing_operator.name }}</span><span v-if="$store.chat.ongoing_operator.name !== $store.base.configuration.website.name" class="cc-1ede cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_ongoing_from")) ? "" : a) + ' {{ $store.base.configuration.website.name }}</span><span class="cc-1vzn"></span></span></span><span v-else class="cc-1lcq"><span class="cc-r03y cc-1v0h cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("theme_text", ["default_chat", t.chat.theme_text + "_chat"])) ? "" : a) + '</span><span class="cc-gsm6"><span v-if="$store.base.availability === \'online\'" data-type="online" class="cc-qx87 cc-1v0h"><span v-if="$store.base.configuration.chat.activity_metrics === true &amp;&amp; $store.chat.activity.metrics" v-crisp-date="{ type: \'duration\', date : $store.chat.activity.metrics, format : $render._e(\'chat\', \'chat_header_ongoing_status_metrics\')}" class="cc-zacj cc-1v0h cc-1ev6"></span><span v-else class="cc-zacj cc-1v0h cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_ongoing_status_online")) ? "" : a) + '</span></span><span v-else data-type="away" class="cc-qx87 cc-1v0h"><span v-if="$store.base.configuration.chat.activity_metrics === true &amp;&amp; $store.chat.activity.last" v-crisp-date="{ date : $store.chat.activity.last, format : $render._e(\'chat\', \'chat_header_ongoing_status_last\')}" class="cc-zacj cc-1v0h cc-1ev6"></span><span v-else class="cc-zacj cc-1v0h cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_ongoing_status_away")) ? "" : a) + '</span></span></span></span></span><span v-if="$store.chat.status_marker === \'ongoing\' &amp;&amp; $store.chat.channels.length &gt; 0" :data-active="$store.chat.has_channels" class="cc-skli cc-jf9n"><a v-crisp-accessibility="{ role: \'button\' }" @click.stop="$events.chat.header_channels_button_click" class="cc-1cx4 cc-10fp cc-1lnv"><span v-if="!$store.chat.has_channels" class="cc-1npw cc-1o14 cc-e871"><span class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_channels")) ? "" : a) + '</span></span><span class="cc-k0lh cc-1cu8"></span></a><span class="cc-12c8"><span @click="$events.chat.header_channels_dropdown_click" class="cc-8noq"><a v-for="channel in $store.chat.channels" @click.stop="$events.chat.header_channels_dropdown_entry_click" :data-channel="channel.name" :target="((channel.name === \'email\') || (channel.name === \'phone\')) ? \'_parent\' : \'_blank\'" :href="channel.link" :aria-label="channel.name" rel="noopener noreferrer" class="cc-uu6n cc-10fp cc-pyh5"><span class="cc-1npw cc-1o14 cc-e871"><span class="cc-l4vy cc-1ev6">{{ $render._e("chat", "chat_header_ongoing_channel_continue", [channel.format]) }}</span></span><span class="cc-alsu cc-13te"></span></a><span class="cc-1vzn"></span></span></span></span></div><div v-else-if="$store.chat.mode === \'helpdesk\'" class="cc-ac94"><span v-if="!$store.chat.helpdesk_viewer.url" class="cc-i73x"><span v-if="$store.chat.helpdesk_search.has_search" class="cc-4fqf cc-179w cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_helpdesk_results")) ? "" : a) + '</span><span v-else class="cc-4fqf cc-179w cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_helpdesk_curated")) ? "" : a) + '</span></span></div><span @click.prevent="$events.chat.pane_minimize_click" :class="(has_tile ? \'cc-eugx\' : \'cc-raer\')" class="cc-w9jl"><span :class="(has_tile ? \'cc-1una\' : \'cc-y80i\')" class="cc-13se"><span class="cc-ecxg cc-1cu8"></span></span></span></div><span class="cc-126v"></span></div><div @click="$events.chat.fuzzy_click" :data-has-health="(($store.chat.status.url &amp;&amp; $store.base.configuration.chat.status_health_dead === true &amp;&amp; $store.base.configuration.website.status &amp;&amp; $store.base.configuration.website.status.health === \'dead\' &amp;&amp; ($render.current_time() - $store.base.configuration.website.status.since) &gt;= 180000))" :data-has-offline="$store.chat.has_offline" :data-has-feedback="$store.chat.feedback.is_visible" :data-has-alert="$store.chat.current_alert ? true : false" :data-has-drop-zone="$store.chat.has_drop_zone" :data-is-hidden-prompt="$store.chat.is_hidden_prompt" class="cc-gye0"><div v-effect="has_form_disabled = ($store.base.runtime.lock_maximized !== true &amp;&amp; ($store.base.configuration.chat.hide_vacation === true || $store.chat.blocked === true))" @wheel="$events.chat.chat_wheel" @dragover="$events.chat.file_drop_dragover" :data-visible="$store.chat.mode === \'chat\'" class="cc-11uv"><div :data-reconnect-failed="$store.chat.reconnect_failed" :data-reconnect-inactive="$store.chat.reconnect_inactive" class="cc-1dp6 cc-1vf3"><div class="cc-jdpj"><span class="cc-10vv cc-gr6h"></span><span class="cc-1enr"><span v-if="!$store.chat.reconnect_failed &amp;&amp; !$store.chat.reconnect_inactive" class="cc-snfi cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_offline_main")) ? "" : a) + '</span><span v-else-if="$store.chat.reconnect_failed" class="cc-1aml cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_offline_fail")) ? "" : a) + '</span><span v-else-if="$store.chat.reconnect_inactive" class="cc-squm cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_offline_inactive")) ? "" : a) + '</span><span v-if="$store.chat.reconnect_inactive" class="cc-11bg cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_offline_label_resume")) ? "" : a) + '</span><span v-else class="cc-m99z cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_offline_label_frozen")) ? "" : a) + '</span></span></div></div><div v-if="$store.chat.status.url" class="cc-1by5 cc-1vf3"><div class="cc-v1eh"><span class="cc-or7a cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_health_main")) ? "" : a) + '</span><span class="cc-k0w5 cc-1ev6"><a :href="$store.chat.status.url" target="_blank" rel="noopener noreferrer" class="cc-3j1q cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_health_label_link")) ? "" : a) + "</a>"), o["text-space"](), r.push(h.Library.jade.runtime.escape(null == (a = s("chat", "chat_health_label_updates")) ? "" : a) + '</span></div></div><div v-crisp-accessibility="{ role: \'log\' }" id="cc-1hzo" aria-live="polite" aria-atomic="false" class="cc-1hzo"><div @scroll="$events.chat.flow_scroll" @touchstart="$events.chat.flow_touch" class="cc-19vt"><div class="cc-nasd wp-exclude-emoji"><div v-for="(message, index) in $store.messages.list" :key="message.fingerprint" :date-has-timestamp="message.timestamp ? true : false" tabindex="-1" class="cc-1sbg"><div v-if="$store.chat.is_different_date(index, (index - 1))" class="cc-1kii"><div class="cc-n24r"><div class="cc-3ed4 cc-179w">{{ $store.chat.timestamp_to_properties(message.timestamp).title }}</div></div></div><div :class="{ \'cc-1lsb\': message.metas.is_new }" :data-from="(message.from === \'operator\') ? \'operator\' : \'visitor\'" :data-type="message.type" :data-first-of-group="$store.chat.is_first_of_group(message, index)" :data-last-of-group="$store.chat.is_last_of_group(message, index)" :data-last-of-thread="$store.chat.is_last_of_thread(message, index)" class="cc-s2y8"><span v-if="message.from === \'operator\'" class="cc-1yu7 cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, (message.user.type || message.from), message.user.user_id, message.user.avatar) + \') !important\') }" class="cc-aez0 cc-4yys"></span></span><span v-if="(message.from === \'operator\') &amp;&amp; message.user.nickname" class="cc-1k48 cc-1ev6">{{ ((message.user.type === \'website\') ? message.user.nickname : $render._n(message.user.nickname)) }}</span><span class="cc-1vkl"><span class="cc-yiv0 cc-10fp"><span @click="$events.chat.message_common_click" :class="(message.from === \'operator\') ? \'cc-qfnu cc-1v0h\' : \'\'" class="cc-1yd3 cc-1ev6 cc-x1l1"><span v-if="message.type === \'text\'" class="cc-1o1o"><div v-html="$render._f(message.content, $render.format_context)" @click="$events.chat.message_text_click" class="cc-s3gl"></div></span><span v-else-if="message.type === \'file\'" class="cc-1o1o"><span class="cc-14cs"><a v-if="$store.base.environment.types.file_preview.image.indexOf(message.content.type) !== -1" @click.prevent="$events.chat.message_file_click(\'image\', message.content.url, message.content.name, message.fingerprint)" :href="message.content.url" :data-name="message.content.name" data-action="image" rel="noopener noreferrer" class="cc-15ec"><span v-if="message.content.type === \'image/gif\'" :style="{ backgroundImage: (\'url(\' + $render.image_url_original(message.content.url) + \') !important\') }" class="cc-1bwm"></span><span v-else :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(message.content.url) + \') !important\') }" class="cc-1bwm"></span></a><span v-else class="cc-3sqg"><a v-if="$store.base.environment.types.file_preview.video.indexOf(message.content.type) !== -1" @click.prevent="$events.chat.message_file_click(\'video\', message.content.url, message.content.name, message.fingerprint)" :class="(message.from === \'operator\') ? \'cc-f23s\' : \'cc-1t4x\'" :href="message.content.url" :data-name="message.content.name" data-action="video" rel="noopener noreferrer" class="cc-vlob"><span class="cc-dvab cc-1cu8"></span></a><a v-else :class="(message.from === \'operator\') ? \'cc-f23s\' : \'cc-1t4x\'" :href="message.content.url" :download="(message.content.type === \'text/html\') ? null : (message.content.name || message.content.url)" data-action="download" rel="noopener noreferrer" target="_blank" class="cc-vlob"><span class="cc-dvab cc-1cu8"></span></a><span v-if="message.content.name" class="cc-1f9h cc-179w">{{ message.content.name }}</span><span v-else class="cc-1f9h cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_file_name")) ? "" : a) + '</span></span></span></span><span v-else-if="message.type === \'animation\'" class="cc-1o1o"><span :data-source="$store.chat.content_source(message.content.url)" class="cc-j6r5"><span :style="{ backgroundImage: (\'url(\' + $render.image_url_original(message.content.url) + \') !important\') }" class="cc-ussf"><span class="cc-ukph"><span class="cc-qnzz"></span></span></span></span></span><span v-else-if="message.type === \'audio\'" class="cc-1o1o"><span v-crisp-audio="{ duration : message.content.duration }" data-state="none" class="cc-8gvm"><span class="cc-nmh8"><a :class="(message.from === \'operator\') ? \'cc-f23s\' : \'cc-1t4x\'" v-crisp-accessibility="{ role: \'button\' }" class="cc-nub9"><span class="cc-1t41 cc-1cu8"></span></a><span :class="(message.from === \'operator\') ? \'cc-1cu8\' : \'\'" class="cc-1hbt"><span :class="(message.from === \'operator\') ? \'cc-ycwi\' : \'cc-qfnu\'" class="cc-o0b7"><span :class="(message.from === \'operator\') ? \'cc-ycwi\' : \'cc-qfnu\'" class="cc-qsec"><span :class="(message.from === \'operator\') ? \'cc-ycwi\' : \'cc-qfnu\'" class="cc-1sgl"></span></span></span></span><span class="cc-1knx"><a :class="(message.from === \'operator\') ? \'cc-f23s\' : \'cc-1t4x\'" v-crisp-accessibility="{ role: \'button\' }" class="cc-7bm2 cc-179w cc-1v0h">1x</a><span class="cc-xszf cc-1ev6">{{ $render.format_time(message.content.duration) }}</span></span></span><audio preload="none" class="cc-1lzb"><source :src="message.content.url" :type="message.content.type"></audio></span></span><span v-else-if="message.type === \'field\'" class="cc-1o1o"><span :data-has-value="message.content.value ? \'true\' : \'false\'" class="cc-1ghj"><a v-crisp-accessibility="{ role: \'button\' }" v-if="message.content.previous &amp;&amp; (message.from === \'operator\')" @click="$events.chat.message_previous_click(message)" class="cc-19x0 cc-1oci"><span class="cc-hnkf cc-1cu8"></span></a><span v-html="$render._f(message.content.text, $render.format_context)" class="cc-s3gl"></span></span></span><span v-else-if="message.type === \'picker\'" class="cc-1o1o"><span v-html="$render._f(message.content.text, $render.format_context)" class="cc-s3gl"></span></span><span v-else-if="message.type === \'carousel\'" class="cc-1o1o"><span v-html="$render._f(message.content.text, $render.format_context)" class="cc-s3gl"></span></span></span><span v-if="message.timestamp" class="cc-15od cc-1npw cc-1o14 cc-e871"><span class="cc-l4vy cc-1ev6"><span v-crisp-date="{ date : message.timestamp }" class="cc-wg68"></span><span v-if="(message.user.type === \'participant\') || (message.edited === true) || (message.translated === true)" class="cc-14yz"><span class="cc-18f2">(<span v-if="message.user.type === \'participant\'">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_tag_participant")) ? "" : a) + '<span v-if="(message.edited === true) || (message.translated === true)">,'), o["text-space"](), r.push('</span></span><span v-if="message.edited === true">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_tag_edited")) ? "" : a) + '<span v-if="message.translated === true">,'), o["text-space"](), r.push('</span></span><span v-if="message.translated === true">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_tag_translated")) ? "" : a) + '</span>)</span></span></span></span><span class="cc-1vzn"></span></span><span v-if="message.type === \'field\' || message.type === \'picker\' || message.type === \'carousel\'" class="cc-151c"><span class="cc-1vzn"></span><span class="cc-1el3"><span class="cc-1q8g"><span v-if="message.type === \'field\'" class="cc-jh08"><span v-if="message.content.value || (message.from !== \'operator\')" :data-has-value="message.content.value ? true : false" class="cc-8jds"><span :class="message.content.value ? \'cc-179w cc-x1l1\' : \'cc-1ev6\'" class="cc-1aiu">{{ (message.content.value || message.content.explain) }}</span></span><form v-else action="#" method="post" class="cc-1o15"><input v-model="message.metas.field.value" @keydown="$events.chat.message_field_input_keydown($event, message)" @focus="$events.chat.message_field_input_focus($event)" @blur="$events.chat.message_field_input_blur($event)" :name="\'message_field_\' + message.content.id" :placeholder="message.content.explain" type="text" autocapitalize="off" autocorrect="off" spellcheck="false" tabindex="0" class="cc-k6m4 cc-jf4n cc-x1l1 cc-1ev6"><a @click.prevent="$events.chat.message_field_send(message)" v-crisp-accessibility="{ role: \'button\' }" class="cc-7mio cc-1t4x cc-179w"><span class="cc-13fr cc-1cu8"></span></a></form></span><span v-else-if="message.type === \'picker\'" :data-has-selected="$store.chat.has_picker_selected(message)" class="cc-e323"><a v-for="choice in message.content.choices" v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.chat.message_picker_button_click(message, choice)" :class="{ \'cc-ut0j cc-uv5q\': (!choice.selected &amp;&amp; message.from === \'operator\'), \'cc-qfnu cc-ut0j cc-1v0h\': (choice.selected &amp;&amp; message.from === \'operator\') }" :data-selected="(choice.selected === true) ? \'true\' : \'false\'" :data-has-action="choice.action ? \'true\' : \'false\'" class="cc-nwb0 cc-179w"><span v-if="choice.icon" aria-hidden="true" class="cc-181l">{{ choice.icon }}</span>{{ choice.label }}</a></span><span v-else-if="message.type === \'carousel\'" class="cc-1b24"><span @wheel="$events.chat.message_carousel_wheel" class="cc-1nq3"><span :data-target-count="message.content.targets.length" class="cc-37uh"><span v-for="target in message.content.targets" class="cc-px18"><span v-if="target.image" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(target.image, 340, 340) + \') !important\') }" class="cc-1fwm"></span><span class="cc-1yzg"><span class="cc-xaz5 cc-179w">{{ target.title }}</span><span class="cc-m1yy cc-1ev6">{{ target.description }}</span><span v-if="target.actions.length &gt; 0" class="cc-10o8"><a v-for="action in target.actions" :class="{ \'cc-qfnu cc-1v0h\': (message.from === \'operator\') }" :href="action.url" target="_blank" rel="noopener noreferrer" class="cc-56j7 cc-1x3g cc-18lb cc-179w">{{ action.label }}</a></span></span></span></span></span></span></span><span class="cc-1vzn"></span></span></span><span v-if="message.preview" class="cc-7sl7"><span class="cc-1vzn"></span><span v-for="link_preview in message.preview" class="cc-g2cm"><span v-if="link_preview.preview &amp;&amp; link_preview.preview.embed &amp;&amp; link_preview.preview.image" class="cc-yvpg"><a @click.prevent="$events.chat.message_file_click(\'embed\', link_preview.preview.embed)" :href="link_preview.preview.embed" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(link_preview.preview.image) + \') !important\') }" rel="noopener noreferrer" target="_blank" data-type="embed" class="cc-1ve7 cc-9siz cc-1jnc"><span class="cc-ipxv"></span></a></span><span v-else class="cc-yvpg"><a v-if="link_preview.preview &amp;&amp; link_preview.preview.image" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(link_preview.preview.image) + \') !important\') }" :href="link_preview.url" rel="noopener noreferrer" target="_blank" data-type="image" class="cc-1ve7"></a><a v-crisp-accessibility="{ role: \'button\' }" :href="link_preview.url" rel="noopener noreferrer" target="_blank" data-type="link" class="cc-1ve7 cc-179w">{{ (link_preview.title || link_preview.website || link_preview.url) }}</a></span><span class="cc-1vzn"></span></span></span></span><span class="cc-1vzn"></span><span v-if="(message.from === \'user\') &amp;&amp; message.read &amp;&amp; ($store.messages.latest_fingerprint === message.fingerprint)" class="cc-15ci"><span class="cc-1iio"><span class="cc-4oyp"></span><span class="cc-1fja cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_info_read")) ? "" : a) + '</span><span class="cc-1vzn"></span></span><span class="cc-1vzn"></span></span><a v-if="(message.from === \'user\') &amp;&amp; message.metas.has_error" v-crisp-accessibility="{ role: \'button\' }" @click="$events.chat.message_send_retry_click(message)" class="cc-pz9u"><span class="cc-1ei9 cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_error_retry")) ? "" : a) + '</span><span class="cc-12bp cc-gr6h"></span><span class="cc-1vzn"></span></a><span class="cc-1vzn"></span></div><span class="cc-1vzn"></span></div></div><div class="cc-1q1g"><div v-if="$store.messages.is_composing" class="cc-1b1c"><span class="cc-1kij cc-qfnu">'),
                                function() {
                                    var t = e(3);
                                    if ("number" == typeof t.length)
                                        for (var i = 0, n = t.length; i < n; i++) t[i], r.push('<span class="cc-ou2z cc-1cu8"></span>');
                                    else
                                        for (i in n = 0, t) n++, t[i], r.push('<span class="cc-ou2z cc-1cu8"></span>')
                                }.call(this), r.push('</span><span class="cc-1vzn"></span></div></div></div></div><div v-if="$store.base.configuration.chat.file_transfer" class="cc-1du9"><div @drop="$events.chat.file_drop" @dragleave="$events.chat.file_drop_dragleave" class="cc-1dj0"></div><div class="cc-175h"><div class="cc-1ige"><div class="cc-4pq8 cc-qfnu"></div><div class="cc-sjap cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_attach_tooltip")) ? "" : a) + '</div></div></div></div><div v-if="$store.chat.feedback.is_visible" @click="$events.chat.feedback_click" data-has-animation="true" class="cc-tbnr cc-v9te"><div class="cc-idg0"><div class="cc-1vb5"><div data-type="rate" class="cc-1kwg cc-15e8">');
                            var n = s("chat", "chat_feedback_rate_placeholder");
                            r.push('<span class="cc-j7w1 cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_feedback_rate_title")) ? "" : a) + '</span><span class="cc-2961"><span @mouseleave="$store.chat.feedback.stars.hovered = 0" :data-stars-hovered="$store.chat.feedback.stars.hovered" :data-stars-selected="$store.chat.feedback.stars.selected" class="cc-eelg">'),
                                function() {
                                    var t = e(5);
                                    if ("number" == typeof t.length)
                                        for (var i = 0, n = t.length; i < n; i++) t[i], r.push("<a v-crisp-accessibility=\"{ role: 'button' }\"" + h.Library.jade.runtime.attr("@click", "$store.chat.feedback.stars.selected = " + (i + 1), !0, !0) + h.Library.jade.runtime.attr("@mouseenter", "$store.chat.feedback.stars.hovered = " + (i + 1), !0, !0) + h.Library.jade.runtime.attr("aria-label", i + 1 + "/5", !0, !0) + ' class="cc-jrl7"></a>');
                                    else
                                        for (i in n = 0, t) n++, t[i], r.push("<a v-crisp-accessibility=\"{ role: 'button' }\"" + h.Library.jade.runtime.attr("@click", "$store.chat.feedback.stars.selected = " + (i + 1), !0, !0) + h.Library.jade.runtime.attr("@mouseenter", "$store.chat.feedback.stars.hovered = " + (i + 1), !0, !0) + h.Library.jade.runtime.attr("aria-label", i + 1 + "/5", !0, !0) + ' class="cc-jrl7"></a>')
                                }.call(this), r.push('</span></span><textarea v-model.trim="$store.chat.feedback.comment" name="feedback_rate"' + h.Library.jade.runtime.attr("placeholder", "" + n, !0, !0) + ' cols="10" rows="1" dir="auto" class="cc-7fhf cc-x1l1"></textarea><a v-crisp-accessibility="{ role: \'button\' }" @click="$events.chat.feedback_submit_click" :data-disabled="($store.chat.has_offline || !$store.chat.feedback.stars.selected || !$store.chat.feedback.comment) ? \'true\' : \'false\'" class="cc-103c cc-1x3g cc-18lb cc-179w cc-qfnu cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_feedback_rate_submit")) ? "" : a) + '</a></div></div></div></div><div v-if="$store.chat.picker.is_visible" @click="$events.chat.picker_click" :data-has-animation="$store.chat.picker.has_animation" class="cc-tbnr cc-143w"><div class="cc-idg0"><div class="cc-1vb5"><div v-if="$store.chat.picker.type === \'smiley\'" data-type="smiley" class="cc-1kwg cc-1tka"><span class="cc-z6ad"><span v-for="(smiley_value, smiley_name) in $store.base.environment.smileys" @click="$events.chat.picker_smiley_click(smiley_value)" :data-name="smiley_name" data-size="large" class="cc-1lef cc-1eqs"></span></span></div><div v-if="$store.chat.picker.type === \'gif\'" :data-has-search="$store.chat.picker.gif.input.length &gt; 0" data-type="gif" class="cc-1kwg cc-1tka"><span class="cc-1mtx"><span data-action="search" class="cc-162v">');
                            var c = s("chat", "chat_pickers_gif_search");
                            r.push('<a @click="$events.chat.picker_gif_input_reset" v-crisp-accessibility="{ role: \'button\' }" class="cc-qd2o"></a><input v-effect="$el.focus()" v-model="$store.chat.picker.gif.input" @keyup="$events.chat.picker_gif_input_keyup" :disabled="$store.chat.has_offline" type="text" name="gif_search"' + h.Library.jade.runtime.attr("placeholder", "" + c, !0, !0) + ' maxlength="25" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" tabindex="0" class="cc-1ibt cc-x1l1 cc-1ev6"></span></span><span class="cc-z6ad"><span v-for="gif in $store.chat.picker.gif.results" :data-type="gif.type" :data-loading="gif.loading" class="cc-1lef cc-zkg3 cc-dpkb"><span v-if="gif.url" @click="$events.chat.picker_gif_item_click(gif)" :style="{ backgroundImage: (\'url(\' + $store.base.environment.url.crisp_image + \'/process/original/?url=\' + gif.url + \') !important\') }" class="cc-16l6"></span></span></span><span class="cc-1s6g"><span v-if="$store.chat.picker.gif.results.length === 0" data-notice="no_results" class="cc-14dg cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_pickers_gif_no_results")) ? "" : a) + "</span></span></div></div><div class=\"cc-1jjn\"><a v-crisp-accessibility=\"{ role: 'button' }\" @click=\"$events.chat.picker_show_click('smiley')\" :class=\"($store.chat.picker.type === 'smiley') ? 'cc-qfnu cc-1v0h' : null\" :data-active=\"($store.chat.picker.type === 'smiley') ? 'true' : 'false'\" data-type=\"smiley\" class=\"cc-tn1f cc-179w\">" + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_pickers_selector_smileys")) ? "" : a) + "</a><a v-crisp-accessibility=\"{ role: 'button' }\" @click=\"$events.chat.picker_show_click('gif')\" :class=\"($store.chat.picker.type === 'gif') ? 'cc-qfnu cc-1v0h' : null\" :data-active=\"($store.chat.picker.type === 'gif') ? 'true' : 'false'\" :data-disabled=\"($store.chat.has_offline &amp;&amp; $store.chat.picker.type !== 'gif') ? 'true' : 'false'\" data-type=\"gif\" class=\"cc-tn1f cc-179w\">" + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_pickers_selector_gifs")) ? "" : a) + '</a></div></div></div><div v-if="$store.chat.current_alert" class="cc-14gd"><a v-if="$store.chat.current_alert === \'new_messages\'" v-crisp-accessibility="{ role: \'alert\' }" @click.prevent="$events.chat.alert_new_messages_click()" data-type="new_messages" class="cc-16md"><span class="cc-u38s"></span><span class="cc-djns cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_new_messages")) ? "" : a) + '</span></a><a v-else-if="$store.chat.current_alert === \'warn_reply\'" v-crisp-accessibility="{ role: \'alert\' }" @click.prevent="$events.chat.alert_warn_reply_click()" data-type="warn_reply" class="cc-16md"><span class="cc-u38s"></span><span class="cc-djns cc-179w">');
                            n = "email_default";
                            !0 === t.chat.phone_visitors && !0 !== t.chat.email_visitors ? n = !0 === t.chat.force_identify ? "phone_force" : "phone_default" : !0 === t.chat.force_identify && (n = "email_force"), r.push(h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_warn_reply_" + n)) ? "" : a) + '</span></a><a v-else-if="$store.chat.current_alert === \'email_invalid\'" v-crisp-accessibility="{ role: \'alert\' }" @click.prevent="$events.chat.alert_email_invalid_click()" data-type="email_invalid" class="cc-16md"><span class="cc-djns cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_email_invalid")) ? "" : a) + '</span></a><div v-else-if="$store.chat.current_alert === \'wait_reply\'" v-crisp-accessibility="{ role: \'alert\' }" data-type="wait_reply" class="cc-16md"><span v-if="$store.base.availability === \'online\'" class="cc-djns cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_wait_reply_online")) ? "" : a) + '</span><span v-else class="cc-djns cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_wait_reply_away")) ? "" : a) + '</span></div></div><div :data-has-value="$store.chat.field.has_value" :data-is-locked="has_form_disabled || $store.chat.is_locked_identify || $store.chat.is_locked_prompt" :data-retain-lock="has_form_disabled" class="cc-1tyx"><form name="form_message" action="#" method="post" class="cc-cx3x">');
                            c = s("chat", "chat_form_field_message"), n = s("chat", "chat_form_field_disabled");
                            r.push('<textarea @keyup="$events.chat.textarea_keyup" @keydown="$events.chat.textarea_keydown" @paste="$events.chat.textarea_paste" :disabled="has_form_disabled || $store.chat.is_locked_identify || $store.chat.is_locked_prompt"' + h.Library.jade.runtime.attr(":placeholder", "has_form_disabled ? '" + n + "' : '" + c + "'", !0, !0) + h.Library.jade.runtime.attr(":aria-label", "has_form_disabled ? '" + n + "' : '" + c + "'", !0, !0) + ' name="message" cols="20" rows="1" dir="auto" autocapitalize="off" autocomplete="off" aria-controls="cc-1hzo" tab="0" tabindex="0" class="cc-c5c3 cc-x1l1 cc-4upc cc-1ev6"></textarea></form><div class="cc-1xqi"><span v-crisp-accessibility="{ role: \'button\' }" @click="$events.chat.textarea_send_click" :aria-label="$render._e(\'chat\', \'chat_form_send_hint\')" class="cc-fpwe cc-1t4x"><span class="cc-o9pn cc-1cu8"></span></span></div></div><div class="cc-15ak"><div :data-has-popover="$store.chat.picker.is_visible || $store.chat.feedback.is_visible" class="cc-e8o6"><span v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.chat.picker_toggle_click" :aria-label="$render._e(\'chat\', \'chat_form_smiley_tooltip\')" :data-state="$store.chat.picker.is_visible ? \'active\' : \'none\'" data-type="smiley" class="cc-cti3 cc-10fp"><span class="cc-1npw cc-1o14 cc-854b"><span class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_smiley_tooltip")) ? "" : a) + '</span></span><span :class="$store.chat.picker.is_visible ? \'cc-qfnu\' : null" class="cc-1w5b"></span></span>'), !0 === t.chat.file_transfer && r.push('<span v-crisp-accessibility="{ role: \'button\' }" :aria-label="$render._e(\'chat\', \'chat_form_attach_tooltip\')" :data-state="$store.chat.file.state" :data-disabled="(has_form_disabled || $store.chat.is_locked_identify || $store.chat.has_offline) ? \'true\' : \'false\'" data-type="file" class="cc-cti3 cc-10fp"><span v-if="$store.chat.file.state === \'none\'" class="cc-1npw cc-1o14 cc-e871"><span class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_attach_tooltip")) ? "" : a) + '</span></span><span class="cc-1xif"><input @change.prevent="$events.chat.file_change" type="file" name="attach_file" title="" multiple tabindex="-1" aria-hidden="true" class="cc-oky3"></span><span v-if="$store.chat.file.state === \'preparing\' || $store.chat.file.state === \'uploading\'" class="cc-1aau"><span class="cc-lbx1 cc-1gcw cc-zg42 cc-1sel"></span><span v-if="$store.chat.file.state === \'preparing\'" class="cc-qrf8 cc-179w cc-uv5q">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_attach_wait_preparing")) ? "" : a) + '</span><span v-else class="cc-qrf8 cc-179w cc-uv5q">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_attach_wait_uploading")) ? "" : a) + '</span></span><span v-else class="cc-1w5b"></span></span><span v-if="$store.chat.speech.state !== \'none\'" :data-state="$store.chat.speech.state" class="cc-wqeg"><span class="cc-39hr"><span :style="{ width: ($store.chat.speech.progress + \'% !important\') }" class="cc-1pl3"></span><span class="cc-1u2a cc-1ev6">{{ $render.format_time($store.chat.speech.duration) }}</span></span><span class="cc-xml7"><span @click.prevent="$events.chat.speech_cancel_click" data-action="cancel" class="cc-7fpw"></span><span @click.prevent="$events.chat.speech_send_click" data-action="send" class="cc-7fpw"></span></span></span><span v-else-if="$store.base.features.audio_recording" v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.chat.speech_record_click" :aria-label="$render._e(\'chat\', \'chat_form_speech_tooltip\')" :data-state="$store.chat.speech.state" :data-disabled="(has_form_disabled || $store.chat.is_locked_identify || $store.chat.has_offline) ? \'true\' : \'false\'" data-type="speech" class="cc-cti3 cc-10fp"><span class="cc-1npw cc-1o14 cc-e871"><span v-if="$store.chat.speech.state === \'none\'" class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_speech_tooltip")) ? "" : a) + '</span></span><span v-else class="cc-1w5b"></span></span>'), r.push('<span v-if="$store.chat.feedback.is_available" v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.chat.feedback_toggle_click" :aria-label="$render._e(\'chat\', \'chat_form_feedback_tooltip\')" :data-state="$store.chat.feedback.is_visible ? \'active\' : \'none\'" data-type="feedback" class="cc-cti3 cc-10fp"><span class="cc-1npw cc-1o14 cc-e871"><span class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_feedback_tooltip")) ? "" : a) + '</span></span><span class="cc-1w5b"></span></span><span class="cc-1vzn"></span></div><div v-if="(!$store.base.configuration.plugins[\'urn:crisp.im:debranding:0\'] || $store.base.configuration.website.trial === true) &amp;&amp; $store.chat.branding_link" class="cc-acjo"><a :href="$store.chat.branding_link" target="_blank" rel="noopener noreferrer nofollow" class="cc-nmj4"><span class="cc-17ym cc-k5d6 cc-1ev6">We run on</span><span class="cc-yd9z"></span><span class="cc-17ym cc-1287 cc-179w">Crisp</span><span class="cc-1vzn"></span></a></div></div></div><div v-if="$store.chat.mode === \'helpdesk\'" @wheel="$events.chat.helpdesk_wheel" data-visible="true" class="cc-11uv"><div class="cc-1m29"><div v-if="$store.chat.helpdesk_viewer.url" class="cc-f51i"><div class="cc-4ou1"><a @click.prevent="$events.chat.helpdesk_viewer_previous_click()" v-crisp-accessibility="{ role: \'button\' }" class="cc-50jt cc-1t4x"><span class="cc-uiwj cc-1cu8"></span></a><span class="cc-j6oe"><span v-if="$store.chat.helpdesk_viewer.title" class="cc-72dk"><span v-if="$store.chat.helpdesk_viewer.category" class="cc-1nu4 cc-1ev6">{{ $store.chat.helpdesk_viewer.category }}</span><span v-if="$store.chat.helpdesk_viewer.category" class="cc-hsfq cc-1ev6">/</span><span class="cc-sfco cc-179w">{{ $store.chat.helpdesk_viewer.title }}</span></span></span><span class="cc-1343 cc-10fp"><span class="cc-1npw cc-1c4p cc-854b"><span class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_helpdesk_viewer_open_tooltip")) ? "" : a) + '</span></span><a :href="$store.chat.helpdesk_viewer.url" rel="noopener noreferrer" target="_blank" class="cc-12lx"></a></span></div><div class="cc-1eb5 cc-1r50"><iframe v-on:load="$store.chat.helpdesk_viewer.loaded = true" :src="$store.chat.helpdesk_viewer.url + \'reader/compact/\'" type="text/html" frameborder="0" class="cc-1crj"></iframe></div><div v-if="!$store.chat.helpdesk_viewer.loaded" class="cc-1bj3"><span class="cc-168q"><span class="cc-auok cc-1gcw cc-zg42 cc-1sel"></span></span></div></div><div v-else @keydown="$events.chat.helpdesk_search_keydown" class="cc-1r2q"><div class="cc-1or4"><div v-if="!$store.chat.helpdesk_search.initialized" class="cc-1lbh"><span class="cc-1w3b cc-1gcw cc-zg42 cc-1sel"></span></div><ul v-else-if="$store.chat.helpdesk_search.articles.length &gt; 0" @mouseleave="$store.chat.helpdesk_search.current_index = -1" class="cc-1tz2"><li v-for="(result, index) in $store.chat.helpdesk_search.articles" class="cc-1194"><a @click.prevent="$events.chat.helpdesk_search_article_click(result.locale, result.slug, result.title, result.category)" @mouseenter="$store.chat.helpdesk_search.current_index = index" :href="$store.chat.helpdesk_search.url + \'/\' + result.locale + \'/article/\' + result.slug + \'/\'" :data-active="index === $store.chat.helpdesk_search.current_index" rel="noopener noreferrer" target="_blank" class="cc-1i08"><span class="cc-m99f cc-179w"><span class="cc-13uf cc-qfnu"></span>{{ result.title }}</span><span class="cc-11qf cc-1ev6">{{ result.excerpt }}</span></a></li></ul><div v-else-if="$store.chat.helpdesk_search.has_search" class="cc-11ga"><span class="cc-sfbs cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_helpdesk_search_empty")) ? "" : a) + '</span></div><div v-else class="cc-11ga"><span class="cc-sfbs cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_helpdesk_search_unpopulated")) ? "" : a) + '</span></div></div><div class="cc-5p9s"><form name="form_helpdesk" action="#" method="post" class="cc-18a3"><span v-if="$store.chat.helpdesk_search.initialized &amp;&amp; $store.chat.helpdesk_search.loading" class="cc-94gm"><span class="cc-mc5n cc-1gcw cc-zg42 cc-1sel"></span></span><span v-else class="cc-oaxo"></span><input v-model="$store.chat.helpdesk_search.input" @keyup="$events.chat.helpdesk_search_field_keyup" :disabled="$store.chat.has_offline" type="text" name="helpdesk_search"' + h.Library.jade.runtime.attr("placeholder", "" + s("chat", "chat_helpdesk_search_form_field"), !0, !0) + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="100" class="cc-guux cc-x1l1 cc-jf4n cc-1ev6"><span class="cc-x1r7 cc-1ev6"></span><span class="cc-fayq cc-1ev6"></span></form></div></div></div></div></div></div><a v-crisp-accessibility="{ role: \'button\', is_last: true }" @click.prevent.stop="$events.chat.pane_toggle_click" :data-visible="$store.chat.is_opened" :data-maximized="$store.chat.is_opened" :data-animate-maximize="$store.chat.animate_maximize" :data-animate-minimize="$store.chat.animate_minimize" :data-pane-animate-entrance="$store.minimized.pane.animate_entrance" :aria-label="$store.chat.is_opened ? $render._e(\'minimized\', \'tooltip_button_close_hint\') : $render._e(\'minimized\', \'tooltip_button_open_hint\')" data-is-failure="false" class="cc-nsge"><span class="cc-ujvn"><span v-if="!$store.chat.is_opened &amp;&amp; $store.minimized.tooltips.new_messages.visible" @click="$events.chat.pane_tooltip_new_messages_click" :class="{ \'cc-6z8x\': $store.minimized.tooltips.new_messages.animate }" data-id="new_messages" class="cc-1fs0"><span v-if="$store.messages.preview.length &gt; 0" class="cc-5mxk"><span class="cc-18a9"><span class="cc-1kn9 cc-yx2c"></span></span><span class="cc-16dw"><span v-for="message in $store.messages.preview" :class="{ \'cc-1u4l\': message.animate }" class="cc-1cx3"><span class="cc-41ym"><span class="cc-1vk5 cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, (message.user.type || message.from), message.user.user_id, message.user.avatar) + \') !important\') }" class="cc-3tv5 cc-4yys"></span></span><span class="cc-vind"><span class="cc-q6ar"></span><span class="cc-bxu9"><span class="cc-hctt cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "minimized_tooltip_message_from")) ? "" : a) + '</span><span class="cc-nmlj cc-179w">{{ (message.user.type === \'website\') ? message.user.nickname : $render._n(message.user.nickname) }}</span><span class="cc-1vzn"></span></span><span v-if="message.type === \'text\'" v-html="$render._f(message.content, $render.format_context)" class="cc-26eu cc-1ev6"></span><span v-else-if="message.type === \'picker\' || message.type === \'field\' || message.type === \'carousel\'" v-html="$render._f(message.content.text, $render.format_context)" class="cc-26eu cc-1ev6"></span><span v-else-if="message.type === \'file\' || message.type === \'animation\'" class="cc-26eu"><span v-if="message.content.type === \'image/gif\' || message.type === \'animation\'" :style="{ backgroundImage: (\'url(\' + $render.image_url_original(message.content.url) + \') !important\') }" class="cc-atpp"></span><span v-else-if="message.content.type === \'image/jpg\' || message.content.type === \'image/jpeg\' || message.content.type === \'image/png\'" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(message.content.url, 180, 180) + \') !important\') }" class="cc-atpp"></span><span v-else class="cc-26eu cc-1ev6">📦 {{ message.content.name }}</span></span><span v-else-if="message.type === \'audio\'" class="cc-26eu cc-1ev6">🎧</span></span></span><span class="cc-1vzn"></span></span></span></span><span class="cc-1fe2"><span class="cc-9q9h cc-qfnu"><span class="cc-nndd cc-1cu8"></span><span data-for-id="new_messages" class="cc-19x6 cc-179w cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "minimized_tooltip_message_compose")) ? "" : a) + '</span></span></span></span></span><span :data-has-unread="$store.minimized.pane.unread.visible" class="cc-imbb cc-qfnu"><span :data-is-ongoing="$store.minimized.pane.is_ongoing" data-id="chat_opened" class="cc-11f2"><span class="cc-15e7"><span v-if="$store.base.configuration.chat.last_operator_face &amp;&amp; $store.base.configuration.website.active_operators.length &gt; 0" class="cc-1d2k cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, \'operator\', $store.base.configuration.website.active_operators[0].user_id, $store.base.configuration.website.active_operators[0].avatar) + \') !important\') }" class="cc-ci26 cc-4yys"></span></span><span v-else-if="$store.chat.ongoing_operator.url" class="cc-1d2k cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $store.chat.ongoing_operator.url + \') !important\') }" class="cc-ci26 cc-4yys"></span></span></span><span class="cc-1ygf"></span><span v-if="$store.minimized.pane.unread.visible" class="cc-1bck cc-179w">{{ $store.minimized.pane.unread.count }}</span></span></span></a><span :data-visible="$store.chat.is_opened || $store.minimized.tooltips.new_messages.visible" :data-animate-minimize="$store.chat.animate_minimize" :data-animate-maximize="$store.chat.animate_maximize" class="cc-1ajr"><span class="cc-ygcd"></span></span></div>')
                        }.call(this, "Array" in t ? t.Array : "undefined" != typeof Array ? Array : void 0, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "configuration" in t ? t.configuration : "undefined" != typeof configuration ? configuration : void 0, "undefined" in t ? t.undefined : void 0), r.join("")
                    },
                    minimized_authorized: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push(""), n.push('<div class="cc-kxkl cc-14b7"><a v-crisp-accessibility="{ role: \'button\' }" @click.prevent.stop="$events.minimized.pane_click" :aria-label="$store.chat.is_opened ? $render._e(\'minimized\', \'tooltip_button_close_hint\') : $render._e(\'minimized\', \'tooltip_button_open_hint\')" :data-pane-animate-entrance="$store.minimized.pane.animate_entrance" data-maximized="false"' + h.Library.jade.runtime.attr("data-is-failure", "false", !0, !0) + ' class="cc-nsge"><span class="cc-ujvn">'), n.push('<span v-if="$store.minimized.pane.general_entice.visible" :class="{ \'cc-6z8x\': $store.minimized.pane.general_entice.animate_full, \'cc-14wx\': $store.minimized.pane.general_entice.animate_short }" :data-with-helpdesk="$store.minimized.pane.helpdesk.url !== null" :data-is-concealed="$store.minimized.pane.general_entice.is_concealed" data-id="general_entice" class="cc-1fs0"><span class="cc-1fe2"><span class="cc-9q9h cc-1ev6"><span class="cc-1503"><span class="cc-xzla"><span v-crisp-accessibility="{ role: \'button\' }" class="cc-1rzf cc-yx2c"></span><span class="cc-123q"><span class="cc-1upp cc-179w">{{ $render._e("theme_text", "default_chat", [$store.base.configuration.chat.theme_text + "_chat"]) }}</span><span class="cc-oe8p"><span v-if="$store.base.availability === \'online\'" data-id="online" class="cc-gx6h cc-179w cc-uv5q">' + h.Library.jade.runtime.escape(null == (i = t("minimized", "tooltip_entice_status_online")) ? "" : i) + '</span><span v-else data-id="away" class="cc-gx6h cc-1ev6">' + h.Library.jade.runtime.escape(null == (i = t("minimized", "tooltip_entice_status_away")) ? "" : i) + '</span><span class="cc-mtsi"><span v-for="active_avatar in $store.base.active_operators" class="cc-1lj1"><span class="cc-zeky cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(60, active_avatar.type, active_avatar.identifier, active_avatar.avatar) + \') !important\') }" class="cc-h8d1 cc-4yys"></span></span></span></span></span></span></span></span><span class="cc-195r"><span data-type="chat" v-crisp-accessibility="{ role: \'button\' }" class="cc-rknl cc-1t4x"><span class="cc-1cfg cc-1cu8"></span><span class="cc-m8ji cc-179w cc-1v0h">{{ $render._e("minimized", "tooltip_entice_action_chat", [$store.base.configuration.website.name]) }}</span></span><span v-if="$store.minimized.pane.helpdesk.url &amp;&amp; !$store.minimized.pane.is_offline" v-crisp-accessibility="{ role: \'button\' }" data-type="helpdesk" data-pop="helpdesk:search" class="cc-rknl"><span class="cc-1cfg"></span><span class="cc-m8ji cc-179w">' + h.Library.jade.runtime.escape(null == (i = t("minimized", "tooltip_entice_action_helpdesk")) ? "" : i) + "</span></span></span></span></span></span>"), n.push("</span>"), n.push('<span class="cc-imbb cc-qfnu"><span data-id="chat_closed" data-is-ongoing="false" class="cc-11f2"><span v-if="$store.minimized.pane.is_waiting" class="cc-1ype"><span class="cc-1npz cc-1gcw"></span></span><span v-else class="cc-15e7"><span v-if="$store.base.configuration.chat.last_operator_face &amp;&amp; $store.base.active_operators.length &gt; 0" class="cc-1d2k cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.base.active_operators[0].type, $store.base.active_operators[0].identifier, $store.base.active_operators[0].avatar) + \') !important\') }" class="cc-ci26 cc-4yys"></span></span></span></span></span>'), n.push("</a></div>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    minimized_unauthorized: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push(""), n.push('<div class="cc-kxkl cc-14b7"><a v-crisp-accessibility="{ role: \'button\' }" @click.prevent.stop="$events.minimized.pane_click" :aria-label="$store.chat.is_opened ? $render._e(\'minimized\', \'tooltip_button_close_hint\') : $render._e(\'minimized\', \'tooltip_button_open_hint\')" :data-pane-animate-entrance="$store.minimized.pane.animate_entrance" data-maximized="false"' + h.Library.jade.runtime.attr("data-is-failure", "true", !0, !0) + ' class="cc-nsge"><span class="cc-ujvn">'), n.push('<span data-id="failure_notice" class="cc-1fs0"><span class="cc-1fe2"><span class="cc-9q9h"><span class="cc-19x6 cc-179w">' + h.Library.jade.runtime.escape(null == (i = t("minimized", "unauthorized_pane")) ? "" : i) + "</span></span></span></span>"), n.push("</span>"), n.push('<span class="cc-imbb cc-krwc"><span data-id="in_failure" data-is-ongoing="false" class="cc-11f2"><span class="cc-15e7"></span></span></span>'), n.push("</a></div>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    chat_frame: function(t) {
                        var i = [];
                        return i.push('<div :data-loaded="$store.chat.frame.loaded" class="cc-adem"><span class="cc-1khc cc-qfnu"><a @click.prevent="$events.chat.frame_previous_click()" v-crisp-accessibility="{ role: \'button\' }" class="cc-vqaq cc-1oci"><span class="cc-1iop cc-1cu8"></span></a><span v-if="$store.chat.frame.title" class="cc-k5oh cc-179w cc-1v0h">{{ $store.chat.frame.title }}</span></span><iframe v-on:load="$store.chat.frame.loaded = true" :src="$store.chat.frame.target" type="text/html" frameborder="0" class="cc-vz1f"></iframe><span v-if="!$store.chat.frame.loaded" class="cc-1daw"><span class="cc-12mo cc-1gcw cc-zg42 cc-1sel"></span></span></div>'), i.join("")
                    },
                    chat_game: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div :data-loaded="$store.chat.game.loaded" class="cc-1692"><span class="cc-ekij"><a v-crisp-accessibility="{ role: \'button\' }" @click="$events.chat.game_stop_click()" class="cc-1s95 cc-1x3g cc-ngrj cc-179w cc-qfnu cc-1v0h">' + h.Library.jade.runtime.escape(null == (i = t("chat", "chat_game_controls_stop")) ? "" : i) + '</a></span><iframe v-on:load="$store.chat.game.loaded = true" :src="$store.base.environment.url.crisp_game + \'/\'" type="text/html" frameborder="0" class="cc-13em"></iframe><span v-if="!$store.chat.game.loaded" class="cc-jxsk"><span class="cc-1sun cc-1gcw cc-zg42 cc-1sel"></span></span></div>')
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    browsing_assist: function(t) {
                        var i = [];
                        return i.push('<div class="cc-1hgs"><div class="cc-1ps6"><span class="cc-trvs cc-10fp cc-1prk"><span class="cc-18rg"></span><span class="cc-vthc"></span><span class="cc-1npw cc-1236 cc-e871"><span class="cc-l4vy cc-1ev6">{{ $render._e("browsing", "assist_mouse_tooltip", [$store.base.configuration.website.name]) }}</span></span></span></div></div>'), i.join("")
                    },
                    call_ring: function(t) {
                        var i, n = [],
                            t = t || {};
                        return function(t) {
                            n.push('<div data-browsing-ignore="true" class="cc-qfip"><div class="cc-1x39"><div class="cc-15kc cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.call.user.type, $store.call.user.user_id) + \') !important\') }" class="cc-am5o cc-4yys"></span></div><div class="cc-z44l"><div class="cc-1ip4 cc-179w">{{ $render._e("call", "ring_title_label", [$store.call.user.nickname]) }}</div><div class="cc-qg9v cc-1ev6">{{ $render._e("call", "ring_title_website", [$store.base.configuration.website.name]) }}</div></div><ul class="cc-m1mp"><li data-action="decline" class="cc-glj8"><a v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.call.ring_decline_click()" class="cc-1pgh"></a><span class="cc-181c cc-179w">' + h.Library.jade.runtime.escape(null == (i = t("call", "ring_actions_decline")) ? "" : i) + '</span></li><li :data-mode="$store.call.mode" data-action="accept" class="cc-glj8"><a v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.call.ring_accept_click()" class="cc-1pgh"></a><span class="cc-181c cc-179w">' + h.Library.jade.runtime.escape(null == (i = t("call", "ring_actions_accept")) ? "" : i) + "</span></li></ul></div></div>")
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                    },
                    call_screen: function(t) {
                        var a, r = [],
                            t = t || {};
                        return function(s, t) {
                            r.push('<div data-browsing-ignore="true" class="cc-qfip"><div :data-mode="$store.call.mode" :data-size="$store.call.size" tabindex="0" class="cc-q3eu"><div class="cc-9k07"><div data-type="remote" class="cc-18c0"><span v-if="$store.call.mode === \'audio\'" class="cc-b2q4 cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(480, $store.call.user.type, $store.call.user.user_id) + \') !important\') }" class="cc-8yua cc-4yys"></span></span><video v-on:dblclick="$events.call.toggle_fullscreen_mode_click" v-on:fullscreenchange="$events.call.toggle_fullscreen_aspect_ratio_click" alt="" autoplay playsinline class="cc-17rk"></video></div><ul class="cc-a1wo"><li v-if="$store.call.muted.audio" data-type="audio" class="cc-x085 cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("call", "screen_label_audio_muted")) ? "" : a) + '</li><li v-if="$store.call.mode === \'video\' &amp;&amp; $store.call.muted.video" data-type="video" class="cc-x085 cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("call", "screen_label_video_muted")) ? "" : a) + '</li></ul><div class="cc-nt3f"><div class="cc-15ky"><span class="cc-1ewy cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.call.user.type, $store.call.user.user_id) + \') !important\') }" class="cc-4z34 cc-4yys"></span></span><div class="cc-zmui"><span class="cc-10c4"><span class="cc-15ph cc-179w">{{ $store.call.user.nickname }}</span></span><span class="cc-f941">');
                            var c = ["connecting", "ongoing"];
                            (function() {
                                var t = c;
                                if ("number" == typeof t.length)
                                    for (var i = 0, n = t.length; i < n; i++) {
                                        var e = t[i];
                                        r.push("<span" + h.Library.jade.runtime.attr("v-if", "$store.call.state === '" + e + "'", !0, !0) + h.Library.jade.runtime.attr("data-state", "" + e, !0, !0) + ' class="cc-1d6x cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("call", "screen_status_" + e)) ? "" : a) + "</span>")
                                    } else
                                        for (i in n = 0, t) n++, r.push("<span" + h.Library.jade.runtime.attr("v-if", "$store.call.state === '" + (e = t[i]) + "'", !0, !0) + h.Library.jade.runtime.attr("data-state", "" + e, !0, !0) + ' class="cc-1d6x cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("call", "screen_status_" + e)) ? "" : a) + "</span>")
                            }).call(this), r.push('<span v-if="$store.call.state === \'ongoing\'" class="cc-sae2"></span><span v-if="$store.call.state === \'ongoing\'" class="cc-viln cc-1ev6">{{ $render.format_time($store.call.duration) }}</span></span></div></div><div class="cc-rhyu"><a v-for="action in $store.call.actions" v-crisp-accessibility="{ role: \'button\' }" @click="$events.call.action_click(action.type)" :data-type="action.type" :data-state="action.state" :data-visible="action.visible" :data-unsupported="action.supported === false" class="cc-k9ak"></a></div></div><div v-if="$store.call.mode === \'video\'" data-type="local" class="cc-18c0"><video alt="" autoplay playsinline muted></video><span v-if="$store.call.muted.audio" class="cc-1gps"><span class="cc-dtnk"></span></span></div></div></div></div>')
                        }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "undefined" in t ? t.undefined : void 0), r.join("")
                    }
                };
                this.logger = c.Console, this.vue = c.PetiteVue, this.crisp = {
                    web: c.CrispLibraryWeb,
                    client: c.CrispLibraryClient
                }, this.jade = {
                    runtime: c.jade,
                    client: v
                }
            } catch (t) {}

            function p() {}

            function y() {}

            function pi(t, i) {
                for (var n = 0; n < i.length; n++) {
                    var e = i[n];
                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
                }
            }
        }, m.Compatibility = (Q.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, Q.prototype.schedule_warn_incompatible = function() {
            var t = this,
                i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                null !== this.Js && clearTimeout(this.Js), this.Js = setTimeout(function() {
                    !(t.Js = null) !== m.Pipeline.Vs && (t.Ws(), t.Hs())
                }, !0 === i ? 0 : this.Ks)
            } catch (t) {}
        }, Q.prototype.Gs = function() {
            try {
                this.Ys()
            } catch (t) {}
        }, Q.prototype.Ys = function() {
            try {
                Function.prototype.Dt = function(t) {
                    var i, n = void 0,
                        e = void 0,
                        s = void 0;
                    if ("function" != typeof this) throw new TypeError("Function.prototype.__crisp_bind - not callable");
                    return n = Array.prototype.slice.call(arguments, 1), s = function() {}, i = function() {
                        return e.apply(this instanceof s ? this : t, n.concat(Array.prototype.slice.call(arguments)))
                    }, (e = this).prototype && (s.prototype = this.prototype), i.prototype = new s, i
                }
            } catch (t) {}
        }, Q.prototype.Ws = function() {
            try {
                var t = (document.characterSet || document.charset || "").toUpperCase();
                t !== this.Zs && window.console && "function" == typeof window.console.warn && console.warn("[WARNING] Crisp found an incompatible charset on your page. You are currently using the " + t + " charset. We recommend using the " + this.Zs + " charset instead to avoid rendering issues.\n\n" + this.Xs)
            } catch (t) {}
        }, Q.prototype.Hs = function() {
            try {
                var t = window;
                if (t && t.console && "function" == typeof t.console.warn && "function" == typeof Function.prototype.toString) {
                    for (var i, n, e, s = [
                            [null, t, ["eval", "escape", "unescape", "decodeURI", "encodeURI", "decodeURIComponent", "encodeURIComponent", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "parseInt", "parseFloat", "RTCPeerConnection", "MutationObserver", "XMLHttpRequest", "AudioContext", "WebSocket", "Proxy", "Text", "Comment"]],
                            [null, t, ["Array", "Object", "String", "Number", "Date", "Function", "RegExp", "Symbol", "Set", "Map", "WeakMap", "Event", "Error"]],
                            ["Array", t.Array, ["from", "isArray"]],
                            ["Array.prototype", t.Array.prototype, ["push", "pop", "indexOf", "includes", "sort", "splice", "slice", "shift", "unshift", "map", "filter", "find", "findIndex", "forEach"]],
                            ["Object", t.Object, ["assign", "create", "keys", "values", "is", "isExtensible", "defineProperty", "defineProperties", "getOwnPropertyNames", "getOwnPropertyDescriptors"]],
                            ["Object.prototype", t.Object.prototype, ["hasOwnProperty", "propertyIsEnumerable", "toString"]],
                            ["String", t.String, ["fromCharCode"]],
                            ["String.prototype", t.String.prototype, ["indexOf", "charAt", "charCodeAt", "trim", "toLowerCase", "toUpperCase", "slice", "replace", "match"]],
                            ["Math", t.Math, ["random", "round", "floor", "ceil", "abs"]],
                            ["Date", t.Date, ["now"]],
                            ["Date.prototype", t.Date.prototype, ["getTime", "toISOString"]],
                            ["Function.prototype", t.Function.prototype, ["bind", "apply", "call"]],
                            ["RegExp.prototype", t.RegExp.prototype, ["test", "exec"]],
                            ["Event.prototype", t.Event.prototype, ["preventDefault", "stopPropagation"]],
                            ["Reflect", t.Reflect, ["get", "set", "has", "ownKeys", "deleteProperty"]],
                            ["document", t.document, ["querySelector", "querySelectorAll", "createElement", "createEvent", "addEventListener", "removeEventListener"]],
                            ["JSON", t.JSON, ["stringify", "parse"]],
                            ["localStorage", t.localStorage, ["setItem", "getItem", "removeItem"]],
                            ["sessionStorage", t.sessionStorage, ["setItem", "getItem", "removeItem"]]
                        ], c = [], a = 0; a < s.length; a++)
                        if (void 0 === (n = (i = s[a])[1])) c.push(i[0] || "[root]");
                        else
                            for (var r = i[2] || [], o = 0; o < r.length; o++) void 0 === (e = n[r[o]]) || this.Qs.test("" + e) || (null !== i[0] ? c.push(i[0] + "." + r[o]) : c.push(r[o]));
                    0 < c.length && console.warn("[WARNING] Crisp found shims of native JavaScript methods. This can alter the chatbox behavior and break things. Make sure not to override listed functions to ensure your chatbox works as expected. You may be looking for other JavaScript libraries in use on this page.\n\n" + this.Xs + "\n\nMethods to check:", c)
                }
            } catch (t) {}
        }, Q.prototype.ot = function() {
            try {
                this.Js = null
            } catch (t) {}
        }, new Q);
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        m.Utility = (X.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, X.prototype.get_or_fallback = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = t;
            try {
                e = null !== n ? (void 0 === t ? "undefined" : r(t)) !== n ? i : t : t || i
            } catch (t) {} finally {
                return e
            }
        }, X.prototype.lower_string_first = function(t) {
            var i = t;
            try {
                t && (i = "" + t.charAt(0).toLowerCase() + t.slice(1))
            } catch (t) {} finally {
                return i
            }
        }, X.prototype.pad_number = function(t) {
            var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "00",
                e = n;
            try {
                0 <= t && (i = n.length - Math.ceil((t + 1) / 10), e = t ? n.substr(0, i) + t : n)
            } catch (t) {} finally {
                return e
            }
        }, X.prototype.insert_link_query_values = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = t;
            try {
                if (n && 0 < n.length) {
                    var e, s, c = "";
                    for (e in i) c && (c += "&"), c += e + "=" + encodeURIComponent(i[e]);
                    c && 0 < c.length && ("?" !== (s = n[n.length - 1]) && "&" !== s && (n += !0 === n.includes("?") ? "&" : "?"), n += c)
                }
            } catch (t) {} finally {
                return n
            }
        }, X.prototype.filter_link_safe = function(t) {
            var i = "#";
            try {
                t && !1 === this.tc.test(t) && (i = t)
            } catch (t) {} finally {
                return i
            }
        }, X.prototype.filter_image_url_resize = function(t, i, n) {
            var e = "";
            try {
                e = this.ic(t, m.Base.nc + "/process/resize/?url=" + encodeURIComponent(t) + "&width=" + i + "&height=" + n)
            } catch (t) {} finally {
                return e
            }
        }, X.prototype.filter_image_url_original = function(t) {
            var i = "";
            try {
                i = this.ic(t, m.Base.nc + "/process/original/?url=" + encodeURIComponent(t))
            } catch (t) {} finally {
                return i
            }
        }, X.prototype.to_hashcode = function(t) {
            var i = 0;
            try {
                if (0 < t.length)
                    for (var n = 0; n < t.length; n++) i = (i << 5) - i + t.charCodeAt(n), i &= i
            } catch (t) {} finally {
                return i
            }
        }, X.prototype.is_empty = function(t) {
            var i = !0;
            try {
                0 < this.keys(t).length && (i = !1)
            } catch (t) {} finally {
                return i
            }
        }, X.prototype.is_equal = function(t, i) {
            var n = !0;
            try {
                var e, s = -1,
                    c = void 0;
                if ((void 0 === t ? "undefined" : r(t)) !== (void 0 === i ? "undefined" : r(i))) n = !1;
                else if (t && "object" === (void 0 === t ? "undefined" : r(t)) && i && "object" === (void 0 === i ? "undefined" : r(i)))
                    for (t instanceof Array || i instanceof Array ? (c = this.union(t, i), t.length === c.length && i.length === c.length || (n = !1)) : c = this.union(this.keys(t), this.keys(i)); ++s < c.length && !0 === n;) e = c[s], n = this.is_equal(t[e], i[e]);
                else n = t === i && !0
            } catch (t) {} finally {
                return n
            }
        }, X.prototype.keys = function(t) {
            var i = [];
            try {
                "object" === (void 0 === t ? "undefined" : r(t)) && t && (i = Object.keys(t))
            } catch (t) {} finally {
                return i
            }
        }, X.prototype.clone = function(t) {
            var i = void 0;
            try {
                var n, e = void 0,
                    i = Array.isArray(t) ? [] : {};
                for (e in t) n = t[e], i[e] = "object" === (void 0 === n ? "undefined" : r(n)) ? this.clone(n) : n
            } catch (t) {} finally {
                return i
            }
        }, X.prototype.merge = function(t, i) {
            try {
                "object" === (void 0 === t ? "undefined" : r(t)) && t && Object.assign(t, i)
            } catch (t) {} finally {
                return t
            }
        }, X.prototype.intersect = function(t, i) {
            var n = [];
            try {
                for (var e = 0; e < t.length; e++) - 1 !== i.indexOf(t[e]) && n.push(t[e])
            } catch (t) {} finally {
                return n
            }
        }, X.prototype.union = function(t, i) {
            var n = [];
            try {
                for (var e = 0; e < t.length; e++) - 1 === n.indexOf(t[e]) && n.push(t[e]);
                for (var s = 0; s < i.length; s++) - 1 === n.indexOf(i[s]) && n.push(i[s])
            } catch (t) {} finally {
                return n
            }
        }, X.prototype.extract = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1,
                s = i || n || "";
            try {
                var c = (i || "").trim().match(t),
                    s = c && c[e] ? c[e] : n || ""
            } catch (t) {} finally {
                return s
            }
        }, X.prototype.compare_rule = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ".",
                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ".",
                s = !1;
            try {
                s = -1 !== (i = !0 === this.ec.test(i) ? (i = i.replace(this.ec, this.sc)).replace(this.cc, "") : i).indexOf("*") ? (i = (i = (i = (i = i.replace(this.ac, this.rc)).replace(this.oc, this.hc)).replace(this.lc, e + "*")).replace(this.uc, n + "*"), new RegExp("^" + i + "$").test(t) && !0) : t === i && !0
            } catch (t) {} finally {
                return s
            }
        }, X.prototype.compare_rules = function(t, i, n) {
            var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ".",
                s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : ".",
                c = !1,
                a = !1,
                r = !1;
            try {
                if (0 < i.length) {
                    for (var o = 0; o < i.length && !0 !== a;) a = this.compare_rule(t, i[o], e, s), o++;
                    !1 === a && (c = !0)
                }
                if (!1 === a && 0 < n.length) {
                    for (var h = 0; h < n.length && !0 !== r;) r = this.compare_rule(t, n[h], e, s), h++;
                    c = r
                }
            } catch (t) {} finally {
                return c
            }
        }, X.prototype.normalize_url_path = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                e = "";
            try {
                i ? 1 < i.length && "/" !== i[i.length - 1] && "*" !== i[i.length - 1] && (i += "/") : i = "/", e = "" + n + t + i
            } catch (t) {} finally {
                return e
            }
        }, X.prototype.compare_page_rules = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = !1;
            try {
                if (0 < i.length) {
                    var s, c = [],
                        a = [],
                        r = [];
                    null === n && (n = m.Base.fc);
                    for (var o = 0; o < i.length; o++) {
                        var h = (i[o] || "").trim();
                        h && ((s = (h = !1 === this.dc.test(h) ? this.normalize_url_path(n, h) : h).match(this.dc)) ? c.push(this.normalize_url_path(s[2], s[3], s[1])) : c.push("" + n + h))
                    }
                    for (var l = t.match(this.dc), u = l ? this.normalize_url_path(l[2], l[3], l[1]) : null, f = 0; f < c.length; f++)(!0 === this.ec.test(c[f]) ? a : r).push(c[f]);
                    !0 === this.compare_rules(u, a, r, "[^/]", ".") && (e = !0)
                }
            } catch (t) {} finally {
                return e
            }
        }, X.prototype.play_media = function(t) {
            try {
                var i = t.play();
                void 0 !== i && "function" == typeof i.catch && i.catch(function(t) {})
            } catch (t) {}
        }, X.prototype.open_link = function(t) {
            try {
                var i = window.open();
                i.opener = null, i.location = t
            } catch (t) {}
        }, X.prototype.acquire_channel_url_regex = function(t, i) {
            var n, e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                s = null;
            try {
                m.Base.vc.channels[t] && ((s = (this.pc[t] || {})[i]) || (n = m.Chat.Interface.yc("helpdesk"), s = new RegExp("^" + m.Library.crisp.web.Parse.escape_regex(n) + e + "$"), this.pc[t] = this.pc[t] || {}, this.pc[t][i] = s))
            } catch (t) {} finally {
                return s
            }
        }, X.prototype.next_render = function(t) {
            try {
                m.Library.vue.nextTick(t)
            } catch (t) {}
        }, X.prototype.set_timeout = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                n = null;
            try {
                if (!m.Library.crisp.client.Schedule) throw new Error("Could not set timeout after " + i + "ms, as the schedule wrapper is not yet available");
                n = m.Library.crisp.client.Schedule.set_timeout(t, i)
            } catch (t) {} finally {
                return n
            }
        }, X.prototype.clear_timeout = function(t) {
            try {
                if (!m.Library.crisp.client.Schedule) throw new Error("Could not clear timeout #" + t + ", as the schedule wrapper is not yet available");
                m.Library.crisp.client.Schedule.clear_timeout(t)
            } catch (t) {}
        }, X.prototype.set_interval = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                n = null;
            try {
                if (!m.Library.crisp.client.Schedule) throw new Error("Could not set interval every " + i + "ms, as the schedule wrapper is not yet available");
                n = m.Library.crisp.client.Schedule.set_interval(t, i)
            } catch (t) {} finally {
                return n
            }
        }, X.prototype.clear_interval = function(t) {
            try {
                if (!m.Library.crisp.client.Schedule) throw new Error("Could not clear interval #" + t + ", as the schedule wrapper is not yet available");
                m.Library.crisp.client.Schedule.clear_interval(t)
            } catch (t) {}
        }, X.prototype.add_event_listener = function(t, i, n, e) {
            var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {};
            try {
                if (!m.Library.crisp.client.Listener) throw new Error("Could not add event listener '" + n + "' to '" + i + "' instance, as the listener wrapper is not yet available");
                m.Library.crisp.client.Listener.add_event(t, i, n, e, s)
            } catch (t) {}
        }, X.prototype.remove_event_listener = function(t, i, n) {
            try {
                if (!m.Library.crisp.client.Listener) throw new Error("Could not remove event listener '" + n + "' from '" + i + "' instance, as the listener wrapper is not yet available");
                m.Library.crisp.client.Listener.remove_event(t, i, n)
            } catch (t) {}
        }, X.prototype.reset_instance_children = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            try {
                var n, e = null !== i ? i : t,
                    s = [];
                for (n in t) {
                    var c = t[n];
                    c !== e && c && "object" === (void 0 === c ? "undefined" : r(c)) && "function" == typeof c.reset && c.reset(s)
                }
                for (; 0 < s.length;) s.shift()()
            } catch (t) {}
        }, X.prototype.ic = function(t, i) {
            var n = "";
            try {
                n = t.substring(0, m.Base.nc.length) === m.Base.nc ? t : i
            } catch (t) {} finally {
                return n
            }
        }, X.prototype.ot = function() {
            try {
                this.pc = {}
            } catch (t) {}
        }, new X), m.Feature = (Z.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, Z.prototype.has_screen_touch = function() {
            try {
                return this.mc
            } catch (t) {}
        }, Z.prototype.has_css_animations = function() {
            try {
                return this._c
            } catch (t) {}
        }, Z.prototype.has_audio_recording = function() {
            try {
                return this.gc
            } catch (t) {}
        }, Z.prototype.has_html_audio = function() {
            try {
                return null !== this.wc && !0
            } catch (t) {}
        }, Z.prototype.html_audio_format = function() {
            try {
                return this.wc
            } catch (t) {}
        }, Z.prototype.bc = function(t) {
            var i = !1;
            try {
                i = !!(t in window)
            } catch (t) {} finally {
                return i
            }
        }, Z.prototype.kc = function(t) {
            var i = !1;
            try {
                var n = document.documentElement.style,
                    e = ["Khtml", "Ms", "O", "Moz", "Webkit"],
                    s = e.length;
                if (t in n) i = !0;
                else
                    for (t = t.replace(/^[a-z]/, function(t) {
                            return t.toUpperCase()
                        }); s--;)
                        if (e[s] + t in n) {
                            i = !0;
                            break
                        }
            } catch (t) {} finally {
                return i
            }
        }, Z.prototype.xc = function() {
            var n = this;
            try {
                this.gc = !1, window.MediaRecorder && window.File && navigator.mediaDevices && "function" == typeof window.MediaRecorder.isTypeSupported && "function" == typeof navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.enumerateDevices().then(function(t) {
                    for (var i = 0; i < (t || []).length; i++)
                        if ("audioinput" === t[i].kind) {
                            n.gc = !0;
                            break
                        }
                    m.Store.$store.base.features.audio_recording = n.gc
                }).catch(function(t) {})
            } catch (t) {}
        }, Z.prototype.$c = function() {
            var i = this;
            try {
                this.mc = !!(this.bc("ontouchstart") || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints), window.addEventListener("touchstart", function t() {
                    i.mc = !0, window.removeEventListener("touchstart", t)
                }, !1)
            } catch (t) {}
        }, Z.prototype.Fc = function() {
            var t = null;
            try {
                var i = document.createElement("audio"),
                    n = !(!i.canPlayType || !i.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "")),
                    e = !(!i.canPlayType || !i.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, "")),
                    s = !(!i.canPlayType || !i.canPlayType("audio/mpeg;").replace(/no/, ""));
                1 == n ? t = "oga" : 1 == e ? t = "m4a" : 1 == s && (t = "mp3")
            } catch (t) {} finally {
                return t
            }
        }, Z.prototype.ot = function() {
            try {
                this._c = this.kc("animation"), this.wc = this.Fc(), this.xc(), this.$c()
            } catch (t) {}
        }, new Z), m.Store = (Y.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, Y.prototype.Ec = function(t, i, n) {
            try {
                if (void 0 === m.Store.$events[t]) {
                    m.Store.$events[t] = {};
                    for (var e = 0; e < i.length; e++) {
                        var s = i[e],
                            c = n[s];
                        if ("function" != typeof c) throw new Error("Event to bind not found in realm: " + t + " for name: " + s);
                        m.Store.$events[t][s] = c.Dt(n)
                    }
                }
            } catch (t) {}
        }, Y.prototype.yt = function() {
            try {
                this.$events = {}
            } catch (t) {}
        }, Y.prototype.jc = function() {
            try {
                this.$store = {}, this.zc(), this.Cc(), this.Ac(), this.Sc(), this.Ic(), this.qc()
            } catch (t) {}
        }, Y.prototype.zc = function() {
            try {
                this.$store.base = m.Library.vue.reactive({
                    availability: "none",
                    is_lock_maximized: !1,
                    is_hidden: !1,
                    is_blocked: !1,
                    is_mobile_view: !1,
                    is_full_view: !1,
                    is_small_view: !1,
                    is_large_view: !1,
                    is_activity_ongoing: !1,
                    has_local_messages: !1,
                    was_availability_online: !1,
                    force_show: !1,
                    active_operators: [],
                    other_operators_count: 0,
                    website: {
                        id: "",
                        domain: "",
                        name: ""
                    },
                    environment: {
                        types: {
                            file_preview: {}
                        }
                    },
                    features: {
                        audio_recording: !1
                    },
                    configuration: {},
                    runtime: {}
                })
            } catch (t) {}
        }, Y.prototype.Cc = function() {
            try {
                this.$store.chat = m.Library.vue.reactive({
                    mode: "chat",
                    status_marker: "none",
                    is_visible: !1,
                    is_locked_identify: !1,
                    is_locked_prompt: !1,
                    is_hidden_prompt: !1,
                    has_offline: !1,
                    has_drop_zone: !1,
                    has_channels: !1,
                    show_operator_count: !0,
                    animate_minimize: !1,
                    animate_maximize: !1,
                    reconnect_failed: !1,
                    reconnect_inactive: !1,
                    blocked: !1,
                    ongoing_operator: {
                        user_id: "",
                        type: "",
                        name: "",
                        url: ""
                    },
                    current_alert: null,
                    channels: [],
                    branding_link: null,
                    activity: {
                        metrics: null,
                        last: null
                    },
                    speech: {
                        state: "none",
                        duration: 0,
                        progress: 0
                    },
                    file: {
                        state: "none"
                    },
                    game: {
                        loaded: !1
                    },
                    frame: {
                        target: "",
                        title: "",
                        loaded: !1
                    },
                    status: {
                        url: ""
                    },
                    field: {
                        has_value: !1
                    },
                    picker: {
                        type: "smiley",
                        is_visible: !1,
                        has_animation: !1,
                        gif: {
                            results: [],
                            input: ""
                        }
                    },
                    feedback: {
                        is_visible: !1,
                        is_available: !1,
                        stars: {
                            hovered: 0,
                            selected: 0
                        },
                        comment: ""
                    },
                    helpdesk_search: {
                        input: "",
                        url: "",
                        articles: [],
                        current_index: 0,
                        has_search: !1,
                        initialized: !1,
                        loading: !1
                    },
                    helpdesk_viewer: {
                        url: "",
                        category: "",
                        title: "",
                        loaded: !1
                    }
                })
            } catch (t) {}
        }, Y.prototype.Ac = function() {
            try {
                this.$store.magnify = m.Library.vue.reactive({
                    state: null,
                    type: null,
                    source: null,
                    name: null,
                    messages: null
                })
            } catch (t) {}
        }, Y.prototype.Sc = function() {
            try {
                this.$store.call = m.Library.vue.reactive({
                    mode: null,
                    size: "maximized",
                    state: null,
                    duration: 0,
                    user: {
                        user_id: "",
                        nickname: "",
                        type: ""
                    },
                    muted: {
                        audio: !1,
                        video: !1
                    },
                    actions: []
                })
            } catch (t) {}
        }, Y.prototype.Ic = function() {
            try {
                this.$store.minimized = m.Library.vue.reactive({
                    pane: {
                        is_ongoing: !1,
                        is_waiting: !1,
                        is_offline: !1,
                        animate_entrance: !1,
                        general_entice: {
                            visible: !1,
                            is_concealed: !1,
                            animate_full: !1,
                            animate_short: !1
                        },
                        unread: {
                            visible: !1,
                            count: 0
                        },
                        helpdesk: {
                            url: null
                        }
                    },
                    tooltips: {
                        new_messages: {
                            visible: !1,
                            animate: !0
                        }
                    }
                })
            } catch (t) {}
        }, Y.prototype.qc = function() {
            try {
                this.$store.messages = m.Library.vue.reactive({
                    list: [],
                    preview: [],
                    fingerprints: {},
                    is_composing: !1,
                    prompt_fingerprints: [],
                    latest_fingerprint: null
                })
            } catch (t) {}
        }, Y.prototype.ot = function() {
            try {
                this.yt(), this.jc()
            } catch (t) {}
        }, new Y), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m.Action = (G.prototype.reset = function() {
            try {
                void 0 === m.Base.Oc.__spool.pending_actions && (m.Base.Oc.__spool.pending_actions = [])
            } catch (t) {}
        }, G.prototype.do_chat_open = function() {
            !0 === m.Chat.Dc ? m.Chat.Interface.Rc() : m.Minimized.Interface.Bc()
        }, G.prototype.do_chat_close = function() {
            !0 === m.Chat.Dc && m.Chat.Interface.Nc()
        }, G.prototype.do_chat_toggle = function() {
            !0 === this.is_chat_closed() ? this.do_chat_open() : this.do_chat_close()
        }, G.prototype.do_chat_show = function() {
            !0 === this.is_chat_hidden() && (m.Store.$store.base.is_hidden = !1, (m.Store.$store.base.force_show = !0) === m.Chat.Dc && m.Chat.Interface.Mc())
        }, G.prototype.do_chat_hide = function() {
            !0 === this.is_chat_visible() && (m.Store.$store.base.is_hidden = !0, m.Store.$store.base.force_show = !1)
        }, G.prototype.do_helpdesk_search = function() {
            if (!0 !== m.Chat.Helpdesk.Tc()) throw new Error("Helpdesk search is unavailable");
            this.do_chat_show(), this.do_chat_open()
        }, G.prototype.do_helpdesk_article_open = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            if ("string" != typeof t || !t) throw new Error("Invalid article locale");
            if ("string" != typeof i || !i) throw new Error("Invalid article slug");
            if (!0 !== m.Chat.Helpdesk.Uc(t, i, n, e)) throw new Error("Helpdesk article is unavailable");
            this.do_chat_show(), this.do_chat_open()
        }, G.prototype.do_helpdesk_query = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            m.Base.Pc(function() {
                m.Library.crisp.client.Helpdesk.get_article_search(t, m.Locale.code())
            })
        }, G.prototype.do_message_send = function(n, e) {
            var s = this;
            m.Base.Pc(function() {
                var t = s.Lc(n, e);
                if (null !== t.type && null !== t.content) {
                    var i = !0 === m.Chat.Message.Jc() ? s.Vc : 0;
                    switch (t.type) {
                        case "text":
                            m.Library.crisp.client.Message.send_text_message(t.content, i);
                            break;
                        case "file":
                            m.Library.crisp.client.Message.send_file_message(t.content.name, t.content.url, t.content.type, i);
                            break;
                        case "animation":
                            m.Library.crisp.client.Message.send_animation_message(t.content.url, t.content.type, i);
                            break;
                        case "audio":
                            m.Library.crisp.client.Message.send_audio_message(t.content.url, t.content.type, t.content.duration, i);
                            break;
                        case "picker":
                            m.Library.crisp.client.Message.send_picker_message(t.content.id, t.content.text, t.content.choices, i);
                            break;
                        case "field":
                            m.Library.crisp.client.Message.send_field_message(t.content.id, t.content.text, t.content.explain, i);
                            break;
                        case "carousel":
                            m.Library.crisp.client.Message.send_carousel_message(t.content.text, t.content.targets, i)
                    }
                    m.Chat.Wc()
                }
            })
        }, G.prototype.do_message_show = function(i, n) {
            var e = this,
                s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                c = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
            m.Base.Pc(function() {
                var t = e.Lc(i, n);
                null !== t.type && null !== t.content && m.Chat.Message.Hc(t.type, t.content, s, c)
            })
        }, G.prototype.do_message_read = function() {
            !0 === m.Chat.Dc && m.Library.crisp.client.Message.mark_messages_as_read()
        }, G.prototype.do_message_thread_start = function(t) {
            if ("string" != typeof t || !t) throw new Error("Invalid message thread start text");
            if (!0 !== m.Chat.Dc) throw new Error("Chat must be active for message thread to start");
            m.Base.Pc(function() {
                m.Library.crisp.client.Message.send_message_thread("start", t)
            })
        }, G.prototype.do_message_thread_end = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            if (t && ("string" != typeof t || !t)) throw new Error("Invalid message thread end text");
            if (!0 !== m.Chat.Dc) throw new Error("Chat must be active for message thread to end");
            m.Base.Pc(function() {
                m.Library.crisp.client.Message.send_message_thread("end", t || "")
            })
        }, G.prototype.do_session_reset = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            m.Base.Kc(!1, !0), m.Library.crisp.client.Session.reset(), !1 === t ? (m.Base.Gc(), m.Base.reset(), m.Base.Yc()) : document.location.reload(!1)
        }, G.prototype.do_trigger_run = function(t) {
            if (!0 !== m.Trigger.Zc(t)) throw new Error("Trigger does not exist")
        }, G.prototype.is_chat_opened = function() {
            return !(!0 !== m.Store.$store.chat.is_opened || !0 !== m.Chat.Dc)
        }, G.prototype.is_chat_closed = function() {
            return !1 === this.is_chat_opened() && !0
        }, G.prototype.is_chat_visible = function() {
            return !1 === this.is_chat_hidden() && !0
        }, G.prototype.is_chat_hidden = function() {
            return (null === m.Base.Xc || !0 === m.Store.$store.base.is_hidden || null === m.Base.Xc.offsetParent) && !0
        }, G.prototype.is_chat_small = function() {
            return !1 === m.Base.Qc() && !0
        }, G.prototype.is_chat_large = function() {
            return !1 === this.is_chat_small() && !0
        }, G.prototype.is_session_ongoing = function() {
            return (!0 === m.Chat.Message.ta || !0 === m.Chat.Message.ia) && !0
        }, G.prototype.is_website_available = function() {
            return m.Availability.na && !0
        }, G.prototype.get_chat_unread_count = function() {
            return m.Chat.Notification.ea || 0
        }, G.prototype.get_message_text = function() {
            return !0 === m.Chat.Dc && m.Chat.Selector.get("form_textarea_message").value || ""
        }, G.prototype.get_session_identifier = function() {
            return m.Broker.Tt || null
        }, G.prototype.get_session_data = function() {
            return m.Library.crisp.client.Session.get_data(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null) || null
        }, G.prototype.get_user_email = function() {
            return m.Library.crisp.client.Session.get_email() || null
        }, G.prototype.get_user_phone = function() {
            return m.Library.crisp.client.Session.get_phone() || null
        }, G.prototype.get_user_nickname = function() {
            return m.Library.crisp.client.Session.get_nickname() || null
        }, G.prototype.get_user_avatar = function() {
            return m.Library.crisp.client.Session.get_avatar() || null
        }, G.prototype.get_user_company = function() {
            var t = m.Library.crisp.client.Session.get_company() || null;
            return ((t || {}).employment || {}).title && (t.employment = [t.employment.title, t.employment.role]), ((t || {}).geolocation || {}).country && (t.geolocation = [t.geolocation.country, t.geolocation.city || null]), t
        }, G.prototype.set_message_text = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            if ("string" != typeof t) throw new Error("Invalid message text");
            var i = m.Chat.Selector.get("form_textarea_message");
            i && !0 !== i.disabled && (i.value = t, i.dispatchEvent(new window.KeyboardEvent("keydown")))
        }, G.prototype.set_session_data = function(c, a) {
            m.Base.Pc(function() {
                for (var t, i = c instanceof Array && c[0] instanceof Array ? c : [
                        [c, a]
                    ], n = {}, e = 0; e < i.length; e++) {
                    var s = i[e][1];
                    s && "string" == typeof s && ("false" === s ? s = !1 : "true" === s ? s = !0 : !1 === isNaN(s) && (s = Number(s))), n[i[e][0]] = s
                }
                if (!0 !== m.Validate.is_data(n)) throw new Error("Invalid data");
                for (t in m.Library.crisp.client.Session.set_data(n), n) m.Trigger.sa("user_data", {
                    key: t,
                    value: n[t]
                })
            }, !0)
        }, G.prototype.set_session_segments = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            m.Base.Pc(function() {
                if (!t || !0 !== m.Validate.are_segments(t)) throw new Error("Invalid segments value");
                m.Library.crisp.client.Session.set_segments(t, i)
            }, !0)
        }, G.prototype.set_session_event = function(n) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            m.Base.Pc(function() {
                var t = n instanceof Array && n[0] instanceof Array ? n : [
                    [n, e, s]
                ];
                if (!0 !== m.Validate.are_events(t)) throw new Error("Invalid event text or data");
                m.Library.crisp.client.Session.send_event(t);
                for (var i = 0; i < t.length; i++) m.Trigger.sa("user_event", {
                    text: t[i][0]
                })
            }, !0)
        }, G.prototype.set_user_email = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            if (!t || !0 !== m.Validate.is_email(t)) throw new Error("Invalid email");
            if (null !== i && !0 !== this.ca.test(i)) throw new Error("Invalid verify signature (should be lowercase HMAC-SHA256)");
            m.Library.crisp.client.Session.set_email(t, !1, i), this.aa(), this.ra("user:email:changed", t)
        }, G.prototype.set_user_phone = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            if (!(t = "number" == typeof t ? "" + t : t) || !0 !== m.Validate.is_phone(t)) throw new Error("Invalid phone");
            m.Library.crisp.client.Session.set_phone(t), this.aa(), this.ra("user:phone:changed", t)
        }, G.prototype.set_user_nickname = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            if ("string" != typeof t || !t) throw new Error("Invalid nickname");
            m.Library.crisp.client.Session.set_nickname(t), this.ra("user:nickname:changed", t)
        }, G.prototype.set_user_avatar = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            if (!t || !0 !== m.Validate.is_avatar(t)) throw new Error("Invalid avatar");
            m.Library.crisp.client.Session.set_avatar(t), this.ra("user:avatar:changed", t)
        }, G.prototype.set_user_company = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (!t) throw new Error("Invalid company name");
            var n = {
                name: t
            };
            if (i.url) {
                if ("string" != typeof i.url) throw new Error("Invalid URL");
                n.url = i.url
            }
            if (i.description) {
                if ("string" != typeof i.description) throw new Error("Invalid description");
                n.description = i.description
            }
            if ((i.employment || [])[0]) {
                if ("string" != typeof i.employment[0] || "string" != typeof i.employment[1]) throw new Error("Invalid employment");
                n.employment = {
                    title: i.employment[0],
                    role: i.employment[1]
                }
            }
            if ((i.geolocation || [])[0]) {
                if ("string" != typeof i.geolocation[0] || i.geolocation[1] && "string" != typeof i.geolocation[1]) throw new Error("Invalid geolocation");
                n.geolocation = {
                    country: i.geolocation[0],
                    city: i.geolocation[1] || null
                }
            }
            m.Library.crisp.client.Session.set_company(n)
        }, G.prototype.config_availability_tooltip = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            m.Base.oa("availability_tooltip", t), !0 === t && !0 !== m.Base.Qc() && m.Minimized.Interface.ha()
        }, G.prototype.config_hide_vacation = function() {
            m.Base.oa("hide_vacation", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        }, G.prototype.config_hide_on_away = function() {
            m.Base.oa("hide_on_away", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        }, G.prototype.config_hide_on_mobile = function() {
            m.Base.oa("hide_on_mobile", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        }, G.prototype.config_position_reverse = function() {
            m.Base.oa("position_reverse", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        }, G.prototype.config_sound_mute = function() {
            m.Sound.mute(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
        }, G.prototype.config_color_theme = function() {
            m.Base.la({
                color: {
                    theme: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                }
            })
        }, G.prototype.config_container_index = function() {
            m.Base.la({
                other: {
                    container_index: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                }
            })
        }, G.prototype.config_show_operator_count = function() {
            m.Store.$store.chat.show_operator_count = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
        }, G.prototype.ua = function(t, i) {
            if ("function" != typeof i) throw new Error("Handler must be a function");
            this.fa[t] = i
        }, G.prototype.da = function(t) {
            void 0 !== this.fa[t] && delete this.fa[t]
        }, G.prototype.ra = function(t) {
            var i = this,
                n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
            if (-1 === this.va.indexOf(t)) throw new Error("Event namespace not recognized: " + t);
            "function" == typeof this.fa[t] && m.Utility.next_render(function() {
                try {
                    i.fa[t].apply(window, n instanceof Array ? n : void 0 !== n ? [n] : [])
                } catch (t) {}
            })
        }, G.prototype.pa = function() {
            try {
                var t = m.Base.Oc.__spool.pending_actions;
                if (delete m.Base.Oc.__spool.pending_actions, t && 0 < t.length)
                    for (var i = 0; i < t.length; i++) try {
                        m.Pipeline.push(t[i])
                    } catch (t) {}
            } catch (t) {}
        }, G.prototype.aa = function() {
            !0 === m.Chat.Dc && (!0 === m.Chat.Message.ta && m.Chat.Alert.ya("wait_reply", "show"), m.Chat.Alert.ya("warn_reply", "hide"), m.Chat.Alert.ya("email_invalid", "hide"), m.Chat.Intent.ya("identity", !1))
        }, G.prototype.Lc = function(t, i) {
            var n = {
                type: null,
                content: null
            };
            switch (t) {
                case "text":
                    if ("string" != typeof i || !i) throw new Error("Invalid text message");
                    n.type = "text", n.content = i;
                    break;
                case "file":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.name || !i.url || !i.type) throw new Error("Invalid file message");
                    n.type = "file", n.content = {
                        name: i.name,
                        url: i.url,
                        type: i.type
                    };
                    break;
                case "animation":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.url || !i.type) throw new Error("Invalid animation message");
                    n.type = "animation", n.content = {
                        url: i.url,
                        type: i.type
                    };
                    break;
                case "audio":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.url || !i.type || !i.duration) throw new Error("Invalid audio message");
                    n.type = "audio", n.content = {
                        url: i.url,
                        type: i.type,
                        duration: i.duration
                    };
                    break;
                case "picker":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.id || !i.text || 0 === (i.choices || []).length) throw new Error("Invalid picker message");
                    n.type = "picker", n.content = {
                        id: i.id,
                        text: i.text,
                        choices: i.choices
                    };
                    break;
                case "field":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.id || !i.text || !i.explain) throw new Error("Invalid field message");
                    n.type = "field", n.content = {
                        id: i.id,
                        text: i.text,
                        explain: i.explain
                    };
                    break;
                case "carousel":
                    if ("object" !== (void 0 === i ? "undefined" : r(i)) || !i.text || 0 === (i.targets || []).length) throw new Error("Invalid carousel message");
                    n.type = "carousel", n.content = {
                        text: i.text,
                        targets: i.targets
                    }
            }
            return n
        }, new G), m.Accessibility = (K.prototype.directive = function(i) {
            var n = this,
                t = void 0;
            try {
                function e(t) {
                    switch (t.keyCode) {
                        case 13:
                        case 32:
                            t.target && t.target.role && -1 !== n.ma.indexOf(t.target.role) && (t.stopImmediatePropagation(), t.preventDefault(), t.target.click());
                            break;
                        case 9:
                            null !== n.ga && null !== n.wa && n.ga === i.el && "hidden" !== window.getComputedStyle(n.wa).visibility && (t.stopImmediatePropagation(), t.preventDefault(), n.wa.focus())
                    }
                }
                t = function() {
                    i.el.removeEventListener("keydown", e);
                    var t = n.ba.indexOf(i.el); - 1 < t && n.ba.splice(t, 1)
                }, i.el.setAttribute("tabindex", 0), i.get() && (i.get().role && i.el.setAttribute("role", i.get().role), !0 === i.get().is_first && null === this.wa && (this.wa = i.el), !0 === i.get().is_last && null === this.ga && (this.ga = i.el)), i.el.addEventListener("keydown", e), this.ba.push(i.el)
            } catch (t) {} finally {
                return t || function() {}
            }
        }, K.prototype.ot = function() {
            try {
                this.wa = null, this.ga = null, this.ba = []
            } catch (t) {}
        }, new K), m.Pipeline = (H.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, H.prototype.push = function(t) {
            var i = (window.$__CRISP_INSTANCE || {}).__spool || {};
            void 0 !== i.pending_actions ? i.pending_actions.push(t) : t[0] && void 0 !== t[1] && -1 !== this.ka.indexOf(t[0]) && "function" == typeof this[t[0]] && this[t[0]](t[1], t[2] || [])
        }, H.prototype.get = function(t) {
            return this.xa("get", t, this.$a(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
        }, H.prototype.set = function(t) {
            return this.xa("set", t, this.$a(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
        }, H.prototype.is = function(t) {
            return this.xa("is", t)
        }, H.prototype.do = function(t) {
            return this.xa("do", t, this.$a(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
        }, H.prototype.on = function(t, i) {
            return this.Fa("on", t, [t, i])
        }, H.prototype.off = function(t) {
            return this.Fa("off", t, [t])
        }, H.prototype.config = function(t) {
            return this.xa("config", t, this.$a(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
        }, H.prototype.safe = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            if ("boolean" != typeof t) throw new Error("Safe mode value must be 'true' or 'false'.");
            this.Vs = t
        }, H.prototype.help = function() {
            var t, i = [];
            for (t in m.Action) {
                var n = t.split("_");
                1 < n.length && -1 !== this.ka.indexOf(n[0]) && "function" == typeof m.Action[t] && i.push("$crisp." + n[0] + "('" + n.slice(1).join(":") + "')")
            }
            for (var e = 0; e < this.Ea.length; e++)
                for (var s = 0; s < m.Action.va.length; s++) i.push("$crisp." + this.Ea[e] + "('" + m.Action.va[s] + "')");
            return i
        }, H.prototype.$a = function(t) {
            return t ? t instanceof Array ? t : [t] : []
        }, H.prototype.xa = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
            try {
                var e = t + "_" + (i || "").replace(/:/g, "_");
                if ("function" == typeof m.Action[e]) return m.Action[e].apply(m.Action, n);
                this.ja(i)
            } catch (t) {
                if (!0 !== this.Vs) throw t
            }
        }, H.prototype.Fa = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
            try {
                var e = m.Action.za[t];
                if ("function" != typeof e) throw new Error("No such event method for action: " + t);
                if (-1 !== m.Action.va.indexOf(i)) return e.apply(m.Action, n);
                this.ja(i)
            } catch (t) {
                if (!0 !== this.Vs) throw t
            }
        }, H.prototype.ja = function(t) {
            throw new Error("No such namespace: " + t + " - Call $crisp.help() for a list of available actions.")
        }, H.prototype.ot = function() {
            try {
                this.Vs = !1
            } catch (t) {}
        }, new H), m.Validate = (W.prototype.is_email = function(t) {
            var i = !1;
            try {
                t.match(this.Ca) && (i = !0)
            } catch (t) {} finally {
                return i
            }
        }, W.prototype.is_phone = function(t) {
            var i = !1;
            try {
                t.match(this.Aa) && (i = !0)
            } catch (t) {} finally {
                return i
            }
        }, W.prototype.is_avatar = function(t) {
            var i = !1;
            try {
                t.match(this.Sa) && (i = !0)
            } catch (t) {} finally {
                return i
            }
        }, W.prototype.is_data = function(t) {
            var i = !1;
            try {
                if (t instanceof Object)
                    for (var n in i = 0 < m.Utility.keys(t).length && !0, t) {
                        var e = t[n];
                        ("string" != typeof n || !0 !== this.Ia.test(n) || "string" != typeof e && "boolean" != typeof e && "number" != typeof e) && (i = !1)
                    }
            } catch (t) {} finally {
                return i
            }
        }, W.prototype.are_events = function(t) {
            var i = !1;
            try {
                if (t instanceof Array)
                    for (var i = 0 < t.length && !0, n = 0; n < t.length; n++) "string" == typeof t[n][0] && t[n][0] && (!1 !== m.Utility.is_empty(t[n][1]) || !1 !== this.is_data(t[n][1])) || (i = !1)
            } catch (t) {} finally {
                return i
            }
        }, W.prototype.are_segments = function(t) {
            var i = !1;
            try {
                if (t instanceof Array)
                    for (var i = !0, n = [], e = 0; e < t.length; e++) {
                        var s = (t[e] || "").trim();
                        if (!s || s.length > this.qa || -1 !== n.indexOf(s)) {
                            i = !1;
                            break
                        }
                        n.push(s)
                    }
            } catch (t) {} finally {
                return i
            }
        }, new W), m.Date = (V.prototype.directive = function(i) {
            var n = this,
                t = void 0;
            try {
                var e = i.get() || {},
                    s = e.date,
                    c = e.format || "",
                    a = e.type || "date",
                    r = null,
                    o = function() {
                        m.Utility.clear_timeout(r), r = null
                    },
                    h = function() {
                        o(), r = m.Utility.set_timeout(function() {
                            l()
                        }, n.Oa * n.Da)
                    },
                    l = function() {
                        var t = "";
                        switch (a) {
                            case "date":
                                t = n.format_date(n.timestamp_to_iso(s));
                                break;
                            case "duration":
                                t = n.format_duration(s)
                        }
                        c && (t = m.Library.crisp.web.Parse.replace(c, [m.Utility.lower_string_first(t)])), i.el.innerText = t, h()
                    };
                i.effect(function() {
                    var t = i.get() || {};
                    s = t.date, c = t.format || "", l()
                }), t = function() {
                    o()
                }
            } catch (t) {} finally {
                return t || function() {}
            }
        }, V.prototype.timestamp_to_iso = function(t) {
            try {
                return new Date(t).toISOString()
            } catch (t) {}
        }, V.prototype.iso_to_timestamp = function(t) {
            try {
                return new Date(t).getTime()
            } catch (t) {}
        }, V.prototype.timestamp_to_properties = function(t) {
            var i, n, e, s = {
                day: "none",
                month: "none",
                year: "none",
                title: null
            };
            try {
                0 < t && (i = new Date(t), n = m.Locale.text("days", this.Ra[i.getDay()]), e = m.Locale.text("months", this.Ba[i.getMonth()]), s.day = "" + i.getDate(), s.month = "" + (i.getMonth() + 1), s.year = "" + i.getFullYear(), s.title = n + ", " + i.getDate() + " " + e, (new Date).getYear() !== i.getYear() && (s.title += " (" + s.year + ")"))
            } catch (t) {} finally {
                return s
            }
        }, V.prototype.seconds_in_timestamp = function(t) {
            var i = 0;
            try {
                if (isNaN(t)) throw new Error("Timestamp is not a number");
                i = Math.floor(parseInt(t, 10) / this.Da)
            } catch (t) {} finally {
                return i
            }
        }, V.prototype.timestamp = function() {
            try {
                return (new Date).getTime()
            } catch (t) {}
        }, V.prototype.difference = function(t, i) {
            var n = -1;
            try {
                n = this.iso_to_timestamp(t) - this.iso_to_timestamp(i)
            } catch (t) {} finally {
                return n
            }
        }, V.prototype.equal = function(t, i) {
            var n = !1;
            try {
                n = 0 === this.difference(t, i) && !0
            } catch (t) {} finally {
                return n
            }
        }, V.prototype.format_time = function(t) {
            var i, n, e, s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                c = "0:00";
            try {
                0 <= t && (t = Math.round(t), i = Math.floor(t / this.Na), n = Math.floor(t % this.Na / this.Ma), e = t % this.Ma % this.Na, c = 0 < i || !0 === s ? i + ":" + m.Utility.pad_number(n, "00") + ":" + m.Utility.pad_number(e, "00") : n + ":" + m.Utility.pad_number(e, "00"))
            } catch (t) {} finally {
                return c
            }
        }, V.prototype.format_date = function(t) {
            var i = null;
            try {
                var n = new Date,
                    e = new Date(t),
                    s = n.getTime() - e.getTime(),
                    c = this.Ta(s);
                if (c.type || (c.type = "far_away", c.data = {
                        date_full: e.toLocaleDateString()
                    }), !(i = m.Template.dom(m.Template.render("date_" + c.type, c.data)).innerText)) throw new Error("Empty parsed date for ISO string: " + t)
            } catch (t) {} finally {
                return i
            }
        }, V.prototype.format_duration = function(t) {
            var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = null;
            try {
                var e = this.Ta(t, i);
                if (e.type || (e.type = "days"), !(n = m.Template.dom(m.Template.render("duration_" + e.type, e.data)).innerText)) throw new Error("Empty parsed duration for duration: " + t)
            } catch (t) {} finally {
                return n
            }
        }, V.prototype.Ta = function(t) {
            var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = {};
            try {
                var e = Math.round(t / this.Da);
                e < 10 && !0 === i ? n.type = "now" : e < this.Ma ? n.type = "seconds" : e < this.Na ? (n.type = "minutes", n.data = {
                    minutes: Math.floor(e / this.Ma)
                }) : e < this.Ua && (n.type = "hours", n.data = {
                    hours: Math.floor(e / this.Na)
                })
            } catch (t) {} finally {
                return n
            }
        }, new V), m.Theme = (J.prototype.colors = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = {};
            try {
                var e, s = !0 !== i ? m.Plugin.get_customization("color", "chatbox") : {},
                    c = this.Pa[t] || this.Pa[this.La];
                for (e in this.Ja(s, c), s) n[e] = {
                    hex: s[e],
                    rgba: this.Va.Dt(this, s[e])
                }
            } catch (t) {} finally {
                return n
            }
        }, J.prototype.Ja = function(t, i) {
            try {
                for (var n in i) t[n] || (t[n] = i[n])
            } catch (t) {}
        }, J.prototype.Va = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                n = "rgba(0, 0, 0, 1)";
            try {
                var e = [0, 0, 0],
                    s = t.match(this.Wa);
                s && (e[0] = parseInt(s[1], this.Ha), e[1] = parseInt(s[2], this.Ha), e[2] = parseInt(s[3], this.Ha)), n = "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + i + ")"
            } catch (t) {} finally {
                return n
            }
        }, new J), m.Plugin = (L.prototype.get_triggers = function() {
            var t = {};
            try {
                t = ((m.Base.vc.plugins["urn:crisp.im:triggers:0"] || {}).settings || {}).triggers || {}
            } catch (t) {} finally {
                return t
            }
        }, L.prototype.get_customization = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = null;
            try {
                e = (((m.Base.vc.plugins["urn:crisp.im:customization:0"] || {}).settings || {})[t] || {})[i] || {}, n && (e = e[n] || null)
            } catch (t) {} finally {
                return e
            }
        }, new L), m.Sound = (P.prototype.reset = function() {
            try {
                this.stop(), this.ot()
            } catch (t) {}
        }, P.prototype.allow = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                this.Ka = t
            } catch (t) {}
        }, P.prototype.mute = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                this.Ga = t
            } catch (t) {}
        }, P.prototype.initialize = function(t) {
            try {
                if (!1 === this.Ka) return;
                this.Ya[t] = this.Ya[t] || {};
                for (var i = this.Za[t], n = 0; n < i.length; n++) void 0 === this.Ya[t][i[n]] && this.Xa(t, i[n])
            } catch (t) {}
        }, P.prototype.start = function(n, e) {
            var s = this,
                c = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 50;
            try {
                if (!1 === this.Ka) return;
                if (!0 === m.Feature.has_html_audio() && !0 === this.Qa(n)) {
                    var t = this.Za[n];
                    if (void 0 === t) throw new Error("Subset does not exist: " + n);
                    if (-1 === t.indexOf(e)) throw new Error("Sound does not exist: " + e + " in subset " + n);
                    this.stop(), this.Xa(n, e, function(t) {
                        var i;
                        null !== s.tr && ("suspended" === s.tr.state && s.tr.resume(), (i = s.tr.createGain()).gain.setValueAtTime(a / 100, 0), i.connect(s.tr.destination), s.ir = s.tr.createBufferSource(), s.ir.buffer = t, s.ir.loop = c, s.ir.connect(i), s.ir.start(), s.nr = n, s.er = e)
                    }, function(t) {})
                }
            } catch (t) {}
        }, P.prototype.stop = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            try {
                null === this.ir || null !== t && t !== this.nr || null !== i && i !== this.er || (this.ir.stop(), this.ir = null, this.nr = null, this.er = null)
            } catch (t) {}
        }, P.prototype.Xa = function(i, n) {
            var t, e, s = this,
                c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {};
            try {
                this.Ya[i] = this.Ya[i] || {}, this.sr[i] = this.sr[i] || {}, void 0 === this.sr[i][n] ? (this.sr[i][n] = {
                    success: [c],
                    error: [a]
                }, void 0 !== this.Ya[i][n] ? this.cr("success", i, n, this.Ya[i][n]) : (t = this.ar(i, n)) && ((e = new window.XMLHttpRequest).open("GET", t, !0), e.responseType = "arraybuffer", e.onload = function() {
                    null === s.tr && (s.tr = s.rr()), null !== s.tr ? s.tr.decodeAudioData(e.response, function(t) {
                        s.Ya[i][n] = t, s.cr("success", i, n, t)
                    }, function(t) {
                        s.cr("error", i, n, t)
                    }) : s.cr("error", i, n)
                }, e.onerror = function(t) {
                    s.cr("error", i, n, t)
                }, e.send())) : (this.sr[i][n].success.push(c), this.sr[i][n].error.push(a))
            } catch (t) {}
        }, P.prototype.cr = function(t, i, n) {
            var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                s = (this.sr[i] || {})[n];
            if (void 0 !== s) {
                for (var c = 0; c < s[t].length; c++) s[t][c](e);
                delete this.sr[i][n]
            }
        }, P.prototype.ar = function(t, i) {
            var n = null;
            try {
                var e = m.Feature.html_audio_format();
                null !== e && (n = m.Base.or + "/static/sounds/" + t + "/" + i + "." + e + "?" + m.Base.hr)
            } catch (t) {} finally {
                return n
            }
        }, P.prototype.rr = function() {
            var t = null;
            try {
                try {
                    !0 === m.Event.lr && ("function" == typeof window.AudioContext ? t = new window.AudioContext : "function" == typeof window.webkitAudioContext && (t = new window.webkitAudioContext))
                } catch (t) {}
            } catch (t) {} finally {
                return t
            }
        }, P.prototype.Qa = function(t) {
            var i = !0;
            try {
                var n = !this.Ga && !0,
                    e = "call" === t || !0 !== m.Library.crisp.client.Call.is_ongoing(),
                    i = n && e && !0
            } catch (t) {} finally {
                return i
            }
        }, P.prototype.ot = function() {
            try {
                this.Ka = !0, this.Ga = !1, this.tr = null, this.ir = null, this.nr = null, this.er = null, this.Ya = {}, this.sr = {}
            } catch (t) {}
        }, new P), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m.Locale = (U.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, U.prototype.detect = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                i = this.ur;
            try {
                var n = void 0,
                    e = void 0,
                    s = [];
                for (t.length && (this.fr = m.Utility.intersect(t, this.dr), 0 < this.fr.length && -1 === this.fr.indexOf(i) && (i = this.ur = this.fr[0])), n = 0; n < m.Base.vr.length; n++)(e = m.Base.vr[n]) && (s.push(e.toLowerCase()), -1 !== e.indexOf("-") && (e = e.split("-")[0]) && s.push(e.toLowerCase()));
                for (n = 0; n < s.length; n++)
                    if (-1 !== this.fr.indexOf(s[n])) {
                        i = s[n];
                        break
                    }
            } catch (t) {} finally {
                return i
            }
        }, U.prototype.load = function(t, i) {
            var n = this;
            try {
                var e = t; - 1 === this.fr.indexOf(t) && (e = this.ur), null !== this.pr && this.pr._meta.locale_code !== t && (this.pr = null), null === this.pr ? m.Base.yr("locale", "locales/" + e + ".js", function(t) {
                    try {
                        n.mr(e, t, i)
                    } catch (t) {}
                }) : "function" == typeof i && i()
            } catch (t) {}
        }, U.prototype.name = function() {
            var t = null;
            try {
                if (null === this.pr) throw new Error("Cannot get locale name, locale data not loaded");
                t = this.pr._meta.locale_name
            } catch (t) {} finally {
                return t
            }
        }, U.prototype.code = function() {
            var t = null;
            try {
                if (null === this.pr) throw new Error("Cannot get locale code, locale data not loaded");
                t = this.pr._meta.locale_code
            } catch (t) {} finally {
                return t
            }
        }, U.prototype.direction = function() {
            var t = null;
            try {
                if (null === this.pr) throw new Error("Cannot get locale direction, locale data not loaded");
                t = this.pr._meta.locale_direction, -1 === this._r.indexOf(t) && (t = this.gr)
            } catch (t) {} finally {
                return t
            }
        }, U.prototype.text = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
                e = null;
            try {
                var s = void 0,
                    c = void 0;
                if ("object" === (void 0 === i ? "undefined" : r(i)) ? (s = i[0], c = i[1]) : s = c = i, null === this.pr) throw new Error("Cannot get locale text, locale data not loaded");
                if (void 0 === this.pr._strings[t]) throw new Error("Locale text group not found: " + t);
                if (void 0 === this.pr._strings[t][c]) throw new Error("Locale text namespace not found in group: " + c + " in " + t);
                e = m.Plugin.get_customization("text", t, s) || this.pr._strings[t][c], e = m.Library.crisp.web.Parse.replace(e, n), e = this.wr(e)
            } catch (t) {} finally {
                return e
            }
        }, U.prototype.web = function() {
            var t = null;
            try {
                var t = this.br,
                    i = this.code();
                !0 === this.kr.includes(i) && (t = i)
            } catch (t) {} finally {
                return t
            }
        }, U.prototype.mr = function(t, i, n) {
            try {
                if (null !== this.pr) throw new Error("Locale has already been loaded (double requested handled?)");
                if ("object" !== (void 0 === i ? "undefined" : r(i))) throw new Error("Did not receive a proper locale data file");
                if (i._meta.locale_code !== t) throw new Error("Received a mismatching locale code, expected: " + t);
                this.pr = i, "function" == typeof n && n()
            } catch (t) {} finally {
                return null
            }
        }, U.prototype.wr = function(i) {
            var n = null;
            try {
                try {
                    n = decodeURIComponent(escape(i))
                } catch (t) {
                    n = i
                }
            } catch (t) {} finally {
                return n
            }
        }, U.prototype.ot = function() {
            try {
                this.pr = null
            } catch (t) {}
        }, new U), m.Audio = (T.prototype.directive = function(i) {
            var n = this;
            try {
                var t, e = !1,
                    s = !1,
                    c = !1,
                    a = this.xr,
                    r = i.el,
                    o = i.el.querySelector(".cc-nub9"),
                    h = i.el.querySelector(".cc-7bm2"),
                    l = i.el.querySelector(".cc-xszf"),
                    u = i.el.querySelector(".cc-1lzb"),
                    f = i.el.querySelector(".cc-o0b7");
                u && (t = u.querySelector("source"), u.addEventListener("play", function() {
                    u.playbackRate = a, r.setAttribute("data-state", !0 === c ? "playing" : "loading")
                }), u.addEventListener("pause", function() {
                    r.setAttribute("data-state", "paused")
                }), u.addEventListener("canplay", function() {
                    c = !0, n.$r(i, u, l, f), r.setAttribute("data-state", "playing")
                }), u.addEventListener("stalled", function() {
                    r.setAttribute("data-state", "none")
                }), t && t.addEventListener("error", function() {
                    u.paused || u.pause(), (s = !0) === e && alert(m.Locale.text("chat", "chat_message_audio_play_error"))
                }), f && l && u.addEventListener("timeupdate", function(t) {
                    t.target && n.$r(i, t.target, l, f, !1)
                }), o && o.addEventListener("click", function() {
                    try {
                        u && (e = !0, u.paused ? (!0 === s && (u.load(), s = !1), m.Utility.play_media(u)) : u.pause())
                    } catch (t) {} finally {
                        return !1
                    }
                }), h && h.addEventListener("click", function() {
                    try {
                        (a += n.Fr) > n.Er && (a = n.xr), u.playbackRate = a, h.innerText = a % 1 == 0 ? "x" + parseInt(a, 10) : "" + a
                    } catch (t) {} finally {
                        return !1
                    }
                }))
            } catch (t) {} finally {
                return function() {}
            }
        }, T.prototype.$r = function(t, i, n, e) {
            var s = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4];
            try {
                var c = i.duration !== 1 / 0 ? i.duration : (t.get().duration || 0) + 1,
                    a = Math.ceil(i.currentTime / c * 100),
                    r = a < 100 ? a : 0,
                    o = 0 === r && !0 !== s ? t.get().duration || 0 : Math.floor(i.currentTime);
                n.innerText = m.Date.format_time(o), e.style.setProperty("width", r + "%", "important")
            } catch (t) {}
        }, new T), m.Avatar = (M.prototype.url = function(t, i, n) {
            var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                s = "";
            try {
                s = e ? e.substring(0, m.Base.nc.length) === m.Base.nc ? e : m.Base.nc + "/process/thumbnail/?url=" + encodeURIComponent(e) + "&width=" + t + "&height=" + t + "&" + m.Base.vc.website.buster : m.Base.nc + "/avatar/" + i + "/" + (n || "default") + "/" + t + "/?" + m.Base.vc.website.buster
            } catch (t) {} finally {
                return s
            }
        }, new M), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m.Template = (N.prototype.render = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                e = "";
            try {
                if ("function" != typeof m.Library.jade.client[t]) throw new Error("No such template: " + t);
                if ("object" !== (void 0 === i ? "undefined" : r(i))) throw new Error("Object argument is not an object");
                if (i._e = m.Locale.text.Dt(m.Locale), !1 === m.Utility.is_empty(n))
                    for (var s in n) void 0 === i[s] && (i[s] = n[s]);
                e = m.Library.jade.client[t](i).trim()
            } catch (t) {} finally {
                return e
            }
        }, N.prototype.dom = function(t) {
            var i = null;
            try {
                var n = document.createElement("div");
                n.innerHTML = t, i = n.firstChild
            } catch (t) {} finally {
                return i
            }
        }, N.prototype.vue = function(t) {
            var e = this;
            try {
                var i = {
                    _f: function(t, i) {
                        return m.Library.crisp.web.Parse.format("string" == typeof t ? t : "", i)
                    },
                    _n: function(t) {
                        return m.Library.crisp.web.Name.parse_first_name("string" == typeof t ? t : "")
                    }
                };
                i._e = m.Locale.text.Dt(m.Locale), i._a = m.Avatar.url.Dt(m.Avatar), i.format_context = {
                    methods: {
                        filter_link_safe: m.Utility.filter_link_safe.Dt(m.Utility),
                        html_attribute: m.Library.crisp.web.Parse.attribute.Dt(m.Library.crisp.web.Parse)
                    }
                }, i.format_time = m.Date.format_time.Dt(m.Date), i.image_url_resize = function(t) {
                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    return m.Utility.filter_image_url_resize(t, null !== i ? i : e.jr, null !== n ? n : e.zr)
                }, i.image_url_original = function(t) {
                    return m.Utility.filter_image_url_original(t)
                }, i.current_time = function() {
                    return (new Date).getTime()
                }, m.Library.vue.createApp({
                    $store: m.Store.$store,
                    $events: m.Store.$events,
                    $render: i
                }).directive("crisp-date", m.Date.directive.Dt(m.Date)).directive("crisp-audio", m.Audio.directive.Dt(m.Audio)).directive("crisp-accessibility", m.Accessibility.directive.Dt(m.Accessibility)).mount(t)
            } catch (t) {}
        }, new N), m.Broker = (B.prototype.init = function(t, i, n, e, s, c, a, r, o, h, l, u, f, d) {
            var v = !(14 < arguments.length && void 0 !== arguments[14]) || arguments[14];
            try {
                m.Library.crisp.client.init({
                    environment: t,
                    url_relay_client: i,
                    url_relay_stream: n,
                    url_go: e,
                    website_domain: s,
                    website_id: c,
                    token_id: a,
                    cookie_expire: r,
                    cookie_domain: o,
                    useragent: h,
                    timezone: l,
                    capabilities: u,
                    locales: f,
                    runtime_configuration: d,
                    connect_socket: v,
                    platform_name: "crisp-client",
                    platform_signature_key: "25/2z/2h/3e/33/34/2g/20/2i/1v/2t/24/24/3c/2s/22"
                }), this.Cr = m.Library.crisp.client.event, m.Base.Ar(), this.Sr(), this.Ir(), this.qr(), this.Or(), this.Dr(), this.Rr(), this.Br(), this.Nr(), this.Mr(), this.Tr(), this.Ur(), this.Pr(), this.Lr(), this.Jr(), this.Vr(), this.Wr(), this.Hr(), this.Kr(), this.Gr(), this.Yr(), this.Zr(), this.Xr(), this.Qr(), this.no(), this.eo(), this.so(), this.co(), this.ao(), this.ro(), this.oo(), this.ho(), this.lo(), this.uo(), this.fo(), this.vo(), this.po(), this.yo(), this.mo(), this._o(), this.go(), this.wo(), this.bo(), this.ko(), this.xo(), this.$o(), this.Fo(), this.Eo(), this.jo(), this.zo(), this.Co(), this.Ao(), this.So()
            } catch (t) {}
        }, B.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, B.prototype.Sr = function() {
            var n = this;
            try {
                this.Cr.subscribe("socket:state", function(t, i) {
                    i.connected === n.Io && i.failed_reconnect === n.qo || (n.Io = i.connected || !1, n.qo = i.failed_reconnect || !1, !0 === m.Chat.Dc ? m.Chat.Interface.Oo(n.Io, n.qo) : m.Store.$store.minimized.pane.is_offline = !0 !== n.Io, !0 === n.Io && m.Event.check_activity_autokill())
                })
            } catch (t) {}
        }, B.prototype.Ir = function() {
            var n = this;
            try {
                this.Cr.subscribe("session:created", function(t, i) {
                    i.error ? "invalid_website_id" === i.error && m.Base.run_error() : i.session_id && (n.Do = !0)
                })
            } catch (t) {}
        }, B.prototype.qr = function() {
            var n = this;
            try {
                this.Cr.subscribe("session:joined", function(t, i) {
                    i.error ? "invalid_session" === i.error && ++n.Ro <= n.Bo && m.Library.crisp.client.Session.reset(function() {
                        m.Library.crisp.client.Session.create()
                    }, function() {}) : (n.Tt = i.session_id || null, n.No = i.session_hash || null, !1 === i.socket && !0 !== i.initiated && m.Base.Kc(!0), !0 === n.Mo ? (n.Mo = !1, m.Base.To(i, function(t, i, n) {
                        !0 !== n && (m.Base.spawn_client(t), m.Library.crisp.client.Website.get_users_available())
                    })) : !0 === m.Chat.Dc && m.Chat.Message.Uo())
                })
            } catch (t) {}
        }, B.prototype.Or = function() {
            var e = this;
            try {
                this.Cr.subscribe("session:state", function(t, i) {
                    if (1 === e.Po && (e.Po++, e.Lo = !0), !1 === m.Chat.Dc) {
                        if (null !== e.Jo.master) {
                            e.Jo.master(m.Utility.is_empty(i) ? null : i);
                            for (var n = 0; n < e.Jo.actions.length; n++) e.Jo.actions[n]();
                            e.Jo.master = null, e.Jo.actions = []
                        } else m.Utility.is_empty(i) ? (m.Minimized.init(!0, e.Do), m.Library.crisp.client.Session.get_request_initiate()) : m.Chat.init(i);
                        m.Utility.next_render(function() {
                            m.Base.Vo()
                        })
                    } else !0 === m.Chat.Dc && m.Chat.State.receive(i);
                    e.Wo()
                })
            } catch (t) {}
        }, B.prototype.Dr = function() {
            try {
                this.Cr.subscribe("session:error", function(t, i) {
                    "email:invalid_format" === i.type && m.Chat.Alert.ya({
                        warn_reply: "hide",
                        wait_reply: "hide",
                        email_invalid: "show"
                    })
                })
            } catch (t) {}
        }, B.prototype.Rr = function() {
            try {
                this.Cr.subscribe("session:request:initiate", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Br = function() {
            try {
                this.Cr.subscribe("session:request:purge", function(t, i) {
                    m.Action.do_session_reset()
                })
            } catch (t) {}
        }, B.prototype.Nr = function() {
            try {
                this.Cr.subscribe("session:request:feedback", function(t, i) {
                    m.Chat.Feedback.Ho()
                })
            } catch (t) {}
        }, B.prototype.Mr = function() {
            try {
                this.Cr.subscribe("session:feedback:rate", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Tr = function() {
            try {
                this.Cr.subscribe("session:feedback:rated", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Ur = function() {
            var n = this;
            try {
                this.Cr.subscribe("website:users:available", function(t, i) {
                    m.Availability.receive(i.available, i.changed), 0 === n.Po ? (n.Po++, m.Library.crisp.client.Session.get_state()) : m.Availability.apply()
                })
            } catch (t) {}
        }, B.prototype.Pr = function() {
            var n = this;
            try {
                this.Cr.subscribe("message:received", function(t, i) {
                    n.di(i)
                })
            } catch (t) {}
        }, B.prototype.Lr = function() {
            var n = this;
            try {
                this.Cr.subscribe("message:received:local", function(t, i) {
                    n.di(i)
                })
            } catch (t) {}
        }, B.prototype.Jr = function() {
            try {
                this.Cr.subscribe("message:send", function(t, i) {
                    !0 === m.Chat.Dc && m.Chat.Message.sent(i)
                })
            } catch (t) {}
        }, B.prototype.Vr = function() {
            try {
                this.Cr.subscribe("message:sent", function(t, i) {
                    !0 === m.Chat.Dc && m.Chat.Message.sent_acknowledgement(i), m.Action.ra("message:sent", i)
                })
            } catch (t) {}
        }, B.prototype.Wr = function() {
            try {
                this.Cr.subscribe("message:removed", function(t, i) {
                    !0 === m.Chat.Dc && m.Chat.Message.removed(i)
                })
            } catch (t) {}
        }, B.prototype.Kr = function() {
            try {
                this.Cr.subscribe("message:compose:send", function(t, i) {
                    m.Action.ra("message:compose:sent", i)
                })
            } catch (t) {}
        }, B.prototype.Gr = function() {
            try {
                this.Cr.subscribe("message:acknowledge:pending", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Yr = function() {
            try {
                this.Cr.subscribe("message:acknowledge:read:send", function(t, i) {
                    m.Chat.Message.Ko(i)
                })
            } catch (t) {}
        }, B.prototype.Zr = function() {
            try {
                this.Cr.subscribe("message:acknowledge:read:received", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Xr = function() {
            try {
                this.Cr.subscribe("message:thread", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Hr = function() {
            try {
                this.Cr.subscribe("message:compose:received", function(t, i) {
                    if (!0 === m.Chat.Dc && !0 !== m.Base.vc.chat.operator_privacy) switch (i.type) {
                        case "start":
                            m.Chat.Message.Go(i.timestamp);
                            break;
                        case "stop":
                            m.Chat.Message.Yo()
                    }
                    m.Action.ra("message:compose:received", i)
                })
            } catch (t) {}
        }, B.prototype.Qr = function() {
            try {
                this.Cr.subscribe("history:messages", function(t, i) {
                    !0 === m.Chat.Dc && m.Chat.Message.history(i)
                })
            } catch (t) {}
        }, B.prototype.no = function() {
            try {
                this.Cr.subscribe("call:request:initiate", function(t, i) {
                    m.Library.crisp.client.Call.init({
                        ice: m.Base.Zo,
                        call_id: i.call_id,
                        mode: i.mode,
                        has_support: i.has_support
                    }, function() {
                        m.Call.ring(i)
                    }, function() {})
                })
            } catch (t) {}
        }, B.prototype.eo = function() {
            try {
                this.Cr.subscribe("call:action:stopped", function(t, i) {
                    m.Call.stop(i)
                })
            } catch (t) {}
        }, B.prototype.so = function() {
            try {
                this.Cr.subscribe("call:peer:local:error", function(t, i) {
                    m.Call.error("peer_local")
                })
            } catch (t) {}
        }, B.prototype.co = function() {
            try {
                this.Cr.subscribe("call:peer:remote:error", function(t, i) {
                    m.Call.error("peer_remote")
                })
            } catch (t) {}
        }, B.prototype.ao = function() {
            try {
                this.Cr.subscribe("call:media:local:success", function(t, i) {
                    m.Call.success("media_local")
                })
            } catch (t) {}
        }, B.prototype.ro = function() {
            try {
                this.Cr.subscribe("call:media:local:error", function(t, i) {
                    m.Call.error("media_local")
                })
            } catch (t) {}
        }, B.prototype.oo = function() {
            try {
                this.Cr.subscribe("call:media:remote:success", function(t, i) {
                    m.Call.success("media_remote")
                })
            } catch (t) {}
        }, B.prototype.ho = function() {
            try {
                this.Cr.subscribe("call:track:local:started", function(t, i) {
                    m.Call.toggle_media_status(i.media, !0)
                })
            } catch (t) {}
        }, B.prototype.lo = function() {
            try {
                this.Cr.subscribe("call:track:local:ended", function(t, i) {
                    m.Call.toggle_media_status(i.media, !1)
                })
            } catch (t) {}
        }, B.prototype.uo = function() {
            var n = this;
            try {
                this.Cr.subscribe("browsing:request:initiate", function(t, i) {
                    n.Xo.push(function() {
                        m.Base.yr("browsing", "browsing.js", function(t) {
                            try {
                                m.Library.crisp.client.Browsing.init({
                                    resume: i.resume || !1,
                                    deps: {
                                        tree_mirror: t.TreeMirrorClient
                                    }
                                }, function() {}, function() {})
                            } catch (t) {}
                        })
                    }), n.Wo()
                })
            } catch (t) {}
        }, B.prototype.fo = function() {
            try {
                this.Cr.subscribe("browsing:assist:started", function(t, i) {
                    m.Browsing.Assist.start()
                })
            } catch (t) {}
        }, B.prototype.vo = function() {
            try {
                this.Cr.subscribe("browsing:assist:stopped", function(t, i) {
                    m.Browsing.Assist.stop()
                })
            } catch (t) {}
        }, B.prototype.po = function() {
            try {
                this.Cr.subscribe("browsing:assist:mouse", function(t, i) {
                    m.Browsing.Assist.Qo(i)
                })
            } catch (t) {}
        }, B.prototype.yo = function() {
            try {
                this.Cr.subscribe("browsing:assist:scroll", function(t, i) {
                    m.Browsing.Assist.th(i)
                })
            } catch (t) {}
        }, B.prototype.mo = function() {
            try {
                this.Cr.subscribe("browsing:assist:click", function(t, i) {
                    m.Browsing.Assist.ih(i)
                })
            } catch (t) {}
        }, B.prototype._o = function() {
            var n = this;
            try {
                this.Cr.subscribe("bucket:url:upload:generate", function(t, i) {
                    n.nh.bucket_url_upload_generate = i.id
                })
            } catch (t) {}
        }, B.prototype.go = function() {
            var s = this;
            try {
                this.Cr.subscribe("bucket:url:upload:generated", function(t, i) {
                    var n, e;
                    s.nh.bucket_url_upload_generate === i.id && "preparing" === (m.Store.$store.chat.file.state || null) && (n = (i.url || {}).signed || "", e = (i.url || {}).resource || "", i = (i.policy || {}).size_limit || 0, m.Chat.File.eh(n, e, i))
                })
            } catch (t) {}
        }, B.prototype.wo = function() {
            var n = this;
            try {
                this.Cr.subscribe("media:animation:list", function(t, i) {
                    n.nh.media_animation_list = i.id
                })
            } catch (t) {}
        }, B.prototype.bo = function() {
            var n = this;
            try {
                this.Cr.subscribe("media:animation:listed", function(t, i) {
                    n.nh.media_animation_list === i.id && (m.Store.$store.chat.picker.gif.results = i.results)
                })
            } catch (t) {}
        }, B.prototype.ko = function() {
            var n = this;
            try {
                this.Cr.subscribe("helpdesk:article:search", function(t, i) {
                    n.nh.helpdesk_article_search = i.id
                })
            } catch (t) {}
        }, B.prototype.xo = function() {
            var r = this;
            try {
                this.Cr.subscribe("helpdesk:article:searched", function(t, i) {
                    if (r.nh.helpdesk_article_search === i.id) {
                        var n = !!i.search.query;
                        m.Chat.Helpdesk.sh(i.results, i.search, n);
                        var e = m.Chat.Interface.yc("helpdesk");
                        if (e) {
                            for (var s, c = [], a = 0; a < i.results.length; a++) s = i.results[a], c.push({
                                title: s.title,
                                url: "" + e + s.locale + "/article/" + s.slug + "/"
                            });
                            m.Action.ra("helpdesk:queried", {
                                query: i.search.query,
                                results: c
                            })
                        }
                    }
                })
            } catch (t) {}
        }, B.prototype.$o = function() {
            var n = this;
            try {
                this.Cr.subscribe("helpdesk:article:suggest", function(t, i) {
                    n.nh.helpdesk_article_suggest = i.id
                })
            } catch (t) {}
        }, B.prototype.Fo = function() {
            var n = this;
            try {
                this.Cr.subscribe("helpdesk:article:suggested", function(t, i) {
                    n.nh.helpdesk_article_suggest === i.id && m.Chat.Helpdesk.ch(i.results)
                })
            } catch (t) {}
        }, B.prototype.Eo = function() {
            try {
                this.Cr.subscribe("helpdesk:article:report", function(t, i) {})
            } catch (t) {}
        }, B.prototype.jo = function() {
            try {
                this.Cr.subscribe("storage:sync:update", function(t, i) {})
            } catch (t) {}
        }, B.prototype.zo = function() {
            try {
                this.Cr.subscribe("storage:sync:updated", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Co = function() {
            try {
                this.Cr.subscribe("trigger:fired", function(t, i) {})
            } catch (t) {}
        }, B.prototype.Ao = function() {
            try {
                this.Cr.subscribe("issue:report", function(t, i) {})
            } catch (t) {}
        }, B.prototype.So = function() {
            try {
                this.Cr.subscribe("window:history", function(t, i) {
                    m.Base.ah = i.page_url, m.Base.rh = i.page_domain;
                    i = m.Base.oh();
                    null !== m.Base.Xc && (m.Store.$store.base.is_blocked = i, !0 === m.Chat.Dc && !1 === i && m.Chat.Interface.Mc()), m.Trigger.hh()
                })
            } catch (t) {}
        }, B.prototype.di = function(t) {
            try {
                m.Chat.lh();
                var i = "network" === t.origin && !0;
                m.Chat.Message.received(t, i, i, !0, !1), m.Action.ra("message:received", t)
            } catch (t) {}
        }, B.prototype.Wo = function() {
            try {
                if (!0 === this.Lo)
                    for (; 0 < this.Xo.length;) this.Xo.shift()()
            } catch (t) {}
        }, B.prototype.ot = function() {
            try {
                this.Tt = null, this.No = null, this.Io = !0, this.nh = {}, this.Jo = {
                    master: null,
                    actions: []
                }, this.Cr = null, this.Do = !1, this.Mo = !0, this.qo = !1, this.Po = 0, this.Lo = !1, this.Xo = [], this.Ro = 0
            } catch (t) {}
        }, new B), m.Availability = (R.prototype.init = function() {}, R.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, R.prototype.receive = function() {
            var t, i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                this.na = i, !0 === n && (t = m.Date.timestamp(), m.Base.vc.website.last_available = t), m.Action.ra("website:availability:changed", this.na)
            } catch (t) {}
        }, R.prototype.apply = function() {
            try {
                var t = !0 === this.na ? "online" : "away";
                m.Store.$store.base.availability = t, !1 === m.Store.$store.base.was_availability_online && "online" == t && (m.Store.$store.base.was_availability_online = !0)
            } catch (t) {}
        }, R.prototype.ot = function() {
            try {
                this.na = !1
            } catch (t) {}
        }, new R), m.Event = (D.prototype.init = function(t) {
            try {
                this.uh()
            } catch (t) {}
        }, D.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, D.prototype.trigger_interacted = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                this.lr = !0, this.fh(), !0 === t && this.dh()
            } catch (t) {}
        }, D.prototype.check_activity_autokill = function() {
            try {
                null === this.vh && this.ph(), null === this.yh && this.mh()
            } catch (t) {}
        }, D.prototype.uh = function() {
            try {
                this._h(), this.gh(), this.wh()
            } catch (t) {}
        }, D.prototype._h = function() {
            try {
                m.Utility.add_event_listener(this.ns, "window", "resize", function() {
                    try {
                        !0 === m.Chat.Dc ? (m.Chat.Interface.bh(), m.Chat.Interface.Mc()) : m.Base.kh()
                    } catch (t) {}
                })
            } catch (t) {}
        }, D.prototype.gh = function() {
            try {
                this.fh(), m.Utility.add_event_listener(this.ns, "window", "click", this.xh.Dt(this), this.$h), m.Utility.add_event_listener(this.ns, "window", "touchend", this.xh.Dt(this), this.$h), m.Utility.add_event_listener(this.ns, "window", "touchmove", this.xh.Dt(this), this.$h), m.Utility.add_event_listener(this.ns, "window", "keydown", this.xh.Dt(this), this.$h), m.Utility.add_event_listener(this.ns, "window", "mousemove", this.fh.Dt(this), this.$h), m.Utility.add_event_listener(this.ns, "window", "focus", this.fh.Dt(this), this.$h), m.Utility.add_event_listener(this.ns, "window", "blur", this.fh.Dt(this), this.$h)
            } catch (t) {}
        }, D.prototype.wh = function() {
            try {
                this.dh()
            } catch (t) {}
        }, D.prototype.xh = function() {
            try {
                this.trigger_interacted()
            } catch (t) {}
        }, D.prototype.fh = function() {
            var t = this;
            try {
                null !== this.vh && m.Utility.clear_timeout(this.vh), this.vh = m.Utility.set_timeout(function() {
                    t.vh = null, t.ph()
                }, this.Fh), !0 === this.Eh && !1 === this.jh && m.Library.crisp.client.socket.connect(), this.Eh = !1, m.Library.crisp.client.Session.mark_active()
            } catch (t) {}
        }, D.prototype.ph = function() {
            try {
                !0 === m.Library.crisp.client.socket.connected && (this.Eh = !0, m.Library.crisp.client.socket.disconnect())
            } catch (t) {}
        }, D.prototype.dh = function() {
            var t = this;
            try {
                null !== this.yh && m.Utility.clear_timeout(this.yh), this.yh = m.Utility.set_timeout(function() {
                    t.yh = null, t.mh()
                }, this.zh), !0 === this.jh && m.Library.crisp.client.socket.connect(), this.jh = !1
            } catch (t) {}
        }, D.prototype.mh = function() {
            try {
                !0 !== m.Library.crisp.client.socket.connected && !0 !== this.Eh || (this.jh = !0) === m.Library.crisp.client.socket.connected && m.Library.crisp.client.socket.disconnect()
            } catch (t) {}
        }, D.prototype.ot = function() {
            try {
                this.lr = !1, this.Eh = !1, this.jh = !1, this.vh = null, this.yh = null
            } catch (t) {}
        }, new D), m.Trigger = (O.prototype.init = function(t) {
            try {
                this.Ch = t, this.Ah()
            } catch (t) {}
        }, O.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, O.prototype.Zc = function(t) {
            var i = !1;
            try {
                var n = (this.Ch || {})[t];
                n && !0 === n.enabled && (this.ka(t, n), i = !0)
            } catch (t) {} finally {
                return i
            }
        }, O.prototype.sa = function(t, i) {
            try {
                for (var n = this.Sh[t] || [], e = 0; e < n.length; e++) n[e](i)
            } catch (t) {}
        }, O.prototype.Ih = function(t) {
            try {
                -1 === this.qh.indexOf(t) && this.qh.push(t), m.Library.crisp.client.Storage.set_stamp_local(this.Oh, [m.Base.Dh, "status", t], this.Rh)
            } catch (t) {}
        }, O.prototype.hh = function() {
            try {
                var t, i, n, e;
                for (e in this.Ch)
                    if (!0 === (t = this.Ch[e]).enabled && (i = t.events))
                        for (var s in i) "page" === s && !0 === (n = i[s]).enabled && this.Bh(e, t, i, n.settings || {})
            } catch (t) {}
        }, O.prototype.Ah = function() {
            try {
                var t, i, n, e, s = void 0,
                    c = !1;
                for (e in this.Ch)
                    if (!0 === (t = this.Ch[e]).enabled && (i = t.events))
                        for (var a in i) !0 === (n = i[a]).enabled && "function" == typeof(s = this.Nh[a]) && (s.Dt(this)(e, t, i, n.settings || {}), c = !0);
                !0 === c && this.Mh()
            } catch (t) {}
        }, O.prototype.ka = function(s, c) {
            var t, a = this;
            try {
                !0 === this.Th(c) && !1 === this.Uh(s) && ((t = m.Utility.clone(this.qh)).push(s), this.Ph(function() {
                    m.Chat.State.propagate("trigger", t, !1, function(t) {
                        if (!0 === t && !0 === a.Th(c) && c.actions) {
                            var i, n, e = void 0;
                            for (n in c.actions) !0 === (i = c.actions[n]).enabled && "function" == typeof(e = a.Lh[n]) && (e.Dt(a)(s, c, i.settings || {}), m.Library.crisp.client.Trigger.fired(s, c.name))
                        }
                    })
                }))
            } catch (t) {}
        }, O.prototype.Ph = function(t) {
            var i = this;
            try {
                m.Base.Pc(function() {
                    !0 !== i.Jh && (i.Jh = !0, m.Chat.lh()), t()
                })
            } catch (t) {}
        }, O.prototype.Th = function(t) {
            var i = !1;
            try {
                if (i = !1 === m.Base.Vh(), !0 === this.Wh(t, "if_website_online") && (i = !0 === m.Action.is_website_available() && i), !0 === this.Wh(t, "if_first_visit") && (i = "1" === m.Library.crisp.client.Storage.get_stamp_local(this.Oh, this.Hh("count")) && i), !0 === this.Wh(t, "if_trigger_sole") && (i = !0 !== m.Chat.Message.Kh && i), !0 === this.Wh(t, "if_countries")) {
                    var n = !1,
                        e = (t.behaviors.if_countries || {}).settings;
                    if (e)
                        for (var s in e) s === m.Base.vc.chat.country && (n = !0);
                    i = !0 === n && i
                }!1 === m.Base.Gh() && !1 === this.Yh(t, "desktop") && (i = !1), !0 === m.Base.Gh() && !1 === this.Yh(t, "mobile") && (i = !1)
            } catch (t) {} finally {
                return i
            }
        }, O.prototype.Zh = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = 100;
            try {
                !0 === t && i.after && 0 < i.after && (n = i.after * this.Da)
            } catch (t) {} finally {
                return n
            }
        }, O.prototype.Xh = function(t, i, n, e) {
            try {
                if (e.after && 0 < e.after) {
                    var s, c = !1;
                    for (s in n)
                        if ("delay" !== s && !0 === n[s].enabled) {
                            c = !0;
                            break
                        }!1 === c && this.Qh(t, i, {
                        enabled: !0,
                        settings: e
                    })
                }
            } catch (t) {}
        }, O.prototype.tl = function(i, n, e, t) {
            var s = this;
            try {
                for (var c = !0, a = 0; a < this.il.length; a++) {
                    var r = this.il[a];
                    if (!0 === (e[r] || {}).enabled && !1 === (c = this.nl[r].Dt(this)(e))) break
                }!0 === c && (m.Utility.remove_event_listener(this.ns, "window", "mouseout"), m.Utility.add_event_listener(this.ns, "window", "mouseout", function(t) {
                    try {
                        !0 === s.sl && !t.relatedTarget && !t.toElement && t.clientY <= s.cl && (s.sl = !1, null === s.al && (s.al = s.Qh(i, n, e.delay)))
                    } catch (t) {}
                }), m.Utility.remove_event_listener(this.ns, "window", "mouseover"), m.Utility.add_event_listener(this.ns, "window", "mouseover", function() {
                    try {
                        !0 !== s.sl && (s.sl = !0, null !== s.al && (m.Utility.clear_timeout(s.al), s.al = null))
                    } catch (t) {}
                }))
            } catch (t) {}
        }, O.prototype.rl = function(a, r, o, h) {
            var l = this;
            try {
                h.ids && 0 < h.ids.length && m.Utility.add_event_listener(this.ns, "document", "click", function(t) {
                    try {
                        if (t && t.target && "a" === (t.target.nodeName || "").toLowerCase())
                            for (var i = 0; i < h.ids.length; i++) {
                                var n = document.getElementById(h.ids[i]),
                                    e = "function" == typeof document.querySelectorAll ? document.querySelectorAll(h.ids[i]) : null,
                                    s = !1;
                                if (e && 0 < e.length)
                                    for (var c = 0; c < e.length; c++)
                                        if (e[c] === t.target) {
                                            s = !0;
                                            break
                                        }
                                if (n === t.target || !0 === s) {
                                    l.Qh(a, r, o.delay);
                                    break
                                }
                            }
                    } catch (t) {}
                })
            } catch (t) {}
        }, O.prototype.Bh = function(t, i, n, e) {
            try {
                !0 !== (n.leave || {}).enabled && !0 === this.ol(n) && this.Qh(t, i, n.delay)
            } catch (t) {}
        }, O.prototype.hl = function(t, i, n, e) {
            try {
                !0 !== (n.leave || {}).enabled && !0 === this.ll(n) && this.Qh(t, i, n.delay)
            } catch (t) {}
        }, O.prototype.ul = function(i, n, e, s) {
            var c = this;
            try {
                s.points && 0 < m.Utility.keys(s.points).length && this.fl("user_data", function(t) {
                    t.key && t.value && s.points[t.key] === t.value && c.Qh(i, n, e.delay)
                })
            } catch (t) {}
        }, O.prototype.dl = function(i, n, e, s) {
            var c = this;
            try {
                s.texts && 0 < s.texts.length && this.fl("user_event", function(t) {
                    -1 !== s.texts.indexOf(t.text) && c.Qh(i, n, e.delay)
                })
            } catch (t) {}
        }, O.prototype.vl = function(t, i, n) {
            var e, s, c;
            try {
                !n || (e = (n[m.Locale.code()] || n.default || "").trim()) && (s = m.Utility.to_hashcode("trigger/" + t), !(c = !1) === this.Wh(i, "show_as_website") && (c = !0), m.Action.do_message_show("text", e, s, c))
            } catch (t) {}
        }, O.prototype.pl = function(t, i, n) {
            try {
                m.Action.do_chat_open()
            } catch (t) {}
        }, O.prototype.yl = function(t, i, n) {
            try {
                m.Sound.start("events", "chat-message-receive")
            } catch (t) {}
        }, O.prototype.ol = function(t) {
            var i = !1;
            try {
                var n = (t.page || {}).settings;
                n && n.urls && 0 < n.urls.length && (i = m.Utility.compare_page_rules(m.Base.ah, n.urls))
            } catch (t) {} finally {
                return i
            }
        }, O.prototype.ll = function(t) {
            var i = !1;
            try {
                var n = (t.url_parameter || {}).settings || {};
                if (0 < m.Utility.keys(n.parameters || {}).length) {
                    for (var e, s = document.location.search || "", c = s.slice(s.indexOf("?") + 1).split("&"), a = {}, r = 0; r < c.length; r++) {
                        var o = function(t, i) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, i) {
                                    var n = [],
                                        e = !0,
                                        s = !1,
                                        c = void 0;
                                    try {
                                        for (var a, r = t[Symbol.iterator](); !(e = (a = r.next()).done) && (n.push(a.value), 2 !== n.length); e = !0);
                                    } catch (t) {
                                        s = !0, c = t
                                    } finally {
                                        try {
                                            !e && r.return && r.return()
                                        } finally {
                                            if (s) throw c
                                        }
                                    }
                                    return n
                                }(t);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }(c[r].split("=")),
                            h = o[0],
                            l = o[1];
                        h && (a[h.toLowerCase()] = decodeURIComponent(l || "").toLowerCase())
                    }
                    for (e in n.parameters) {
                        var u = e.toLowerCase(),
                            f = n.parameters[u].toLowerCase() + "";
                        if (a[u] === f) {
                            i = !0;
                            break
                        }
                    }
                }
            } catch (t) {} finally {
                return i
            }
        }, O.prototype.Qh = function(t, i) {
            var n = this,
                e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                s = null;
            try {
                s = m.Utility.set_timeout(function() {
                    n.ka(t, i)
                }, this.Zh((e || {}).enabled, (e || {}).settings))
            } catch (t) {} finally {
                return s
            }
        }, O.prototype.fl = function(t, i) {
            try {
                this.Sh[t] = this.Sh[t] || [], this.Sh[t].push(i)
            } catch (t) {}
        }, O.prototype.Wh = function(t, i) {
            var n = !1;
            try {
                !0 === ((t.behaviors || {})[i] || {}).enabled && (n = !0)
            } catch (t) {} finally {
                return n
            }
        }, O.prototype.Uh = function(t) {
            var i = !1;
            try {
                1 != (i = -1 !== this.qh.indexOf(t) && !0) && (i = m.Library.crisp.client.Storage.get_stamp_local(this.Oh, [m.Base.Dh, "status", t]) === this.Rh && !0)
            } catch (t) {} finally {
                return i
            }
        }, O.prototype.Yh = function(t, i) {
            var n = !0;
            try {
                !1 === ((t.platforms || {})[i] || {}).enabled && (n = !1)
            } catch (t) {} finally {
                return n
            }
        }, O.prototype.Mh = function() {
            try {
                var t = this.Hh("last"),
                    i = this.Hh("count"),
                    n = parseInt(m.Library.crisp.client.Storage.get_stamp_local(this.Oh, t) || "0", 10),
                    e = parseInt(m.Library.crisp.client.Storage.get_stamp_local(this.Oh, i) || "0", 10),
                    s = m.Date.timestamp();
                (isNaN(n) || isNaN(e) || e <= 0 || s - n >= this.ml) && (e += 1, n = s, m.Library.crisp.client.Storage.set_stamp_local(this.Oh, i, "" + e)), m.Library.crisp.client.Storage.set_stamp_local(this.Oh, t, "" + s)
            } catch (t) {}
        }, O.prototype.Hh = function(t) {
            var i = [];
            try {
                i = [m.Base.Dh, "visit", t]
            } catch (t) {} finally {
                return i
            }
        }, O.prototype.ot = function() {
            try {
                this.qh = [], this.Ch = null, this.Jh = !1, this.sl = !1, this.al = null, this.cl = 10, this.Sh = {}
            } catch (t) {}
        }, new O), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m.Base = (q.prototype.init = function() {
            var i = this,
                t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            try {
                !1 === this.Dc && (this.Dc = !0, this.Oc = t.dollar_crisp || null, this._l = t.project_name || null, this.gl = t.url_relay_client || null, this.wl = t.url_relay_stream || null, this.bl = t.url_website || null, this.kl = t.url_go || null, this.nc = t.url_image || null, this.xl = t.url_game || null, this.or = t.url_assets || null, this.Zo = t.rtc_ice || null, this.$l = t.socket_affinity || null, this.Fl = t.client_environment || null, this.hr = t.client_revision || null, this.fc = t.website_domain || null, this.Dh = t.website_id || null, this.El = t.token_id || null, this.jl = t.cookie_expire || null, this.zl = t.cookie_domain || null, this.ah = t.page_url || null, this.rh = t.page_domain || null, this.Cl = t.browser_useragent || null, this.Al = t.browser_timezone || null, this.Sl = t.browser_capabilities || null, this.vr = t.browser_locales || null, this.Il = t.ready_trigger || null, this.ql = t.reset_handler || null, this.Ol = t.runtime_configuration || {}, m.Compatibility.schedule_warn_incompatible(!1), this.Dl(function(t) {
                    i.Rl = t.socket, i.Bl = t.buster || 1, i.Nl = t.endpoints || {};
                    t = -1 === document.cookie.indexOf(i.Ml(!0)) && !1 !== i.Rl && !0;
                    !0 === (t = !1 === t && !0 === i.Ol.lock_maximized || t) ? i.Tl() : i.Ul(), m.Event.init()
                }, function(t) {
                    "invalid_website_id" === t && i.run_error()
                }))
            } catch (t) {}
        }, q.prototype.reset = function() {
            try {
                var t = this.ql;
                m.Utility.reset_instance_children(m, this), this.ot(), this.Pl(), this.ql = t
            } catch (t) {}
        }, q.prototype.spawn_client = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                this.Ll(), this.vc = t, m.Library.crisp.web.init({
                    template: m.Template,
                    config: {
                        url: {
                            crisp_image: this.nc
                        },
                        runtime: this.Ol
                    }
                }), !0 !== i && (m.Library.crisp.client.Config.set_ignore_privacy(this.vc.chat.ignore_privacy), m.Library.crisp.client.Config.set_visitor_compose(this.vc.chat.visitor_compose)), m.Trigger.init(m.Plugin.get_triggers()), this.jc(), this.Jl = m.Template.dom(m.Template.render("client", {
                    lang: m.Locale.code(),
                    direction: m.Locale.direction()
                })), this.Vl = this.Jl.querySelector(".cc-1s47"), this.Xc = this.Jl.querySelector(".cc-tlyw"), this.la(), this.Wl()
            } catch (t) {}
        }, q.prototype.run_error = function() {
            var t = this;
            try {
                m.Locale.load(m.Broker.Hl.chat.locale, function() {
                    t.spawn_client(m.Broker.Hl, !0), m.Minimized.init(!0, !1, !0)
                })
            } catch (t) {}
        }, q.prototype.kh = function() {
            try {
                m.Store.$store.base.is_mobile_view = this.Gh(), m.Store.$store.base.is_full_view = this.Qc(), m.Store.$store.base.is_small_view = this.Kl(), m.Store.$store.base.is_large_view = this.Gl()
            } catch (t) {}
        }, q.prototype.Gh = function() {
            try {
                return !0 === m.Base.Qc() && !0 === m.Feature.has_screen_touch()
            } catch (t) {}
        }, q.prototype.Qc = function() {
            try {
                return !0 === this.Ol.lock_full_view || window.innerHeight < this.Yl || window.innerWidth < this.Zl
            } catch (t) {}
        }, q.prototype.Kl = function() {
            try {
                return window.innerHeight < this.Xl || window.innerWidth < this.Ql
            } catch (t) {}
        }, q.prototype.Gl = function() {
            try {
                return window.innerHeight >= this.tu && window.innerWidth >= this.iu
            } catch (t) {}
        }, q.prototype.Vh = function() {
            try {
                if (!0 !== this.Ol.lock_maximized && (!0 !== m.Chat.Message.Kh || !0 === this.nu())) {
                    if (!0 === this.eu()) return !0;
                    if (!0 === this.vc.chat.hide_vacation) return !0;
                    if (!0 === this.vc.chat.hide_on_away && !0 !== m.Store.$store.base.was_availability_online && !0 !== m.Availability.na) return !0;
                    if (!0 === this.vc.chat.hide_on_mobile && !0 === this.Gh()) return !0
                }
                return !1
            } catch (t) {}
        }, q.prototype.eu = function() {
            try {
                return (!0 === this.su || !0 === this.cu) && !0
            } catch (t) {}
        }, q.prototype.nu = function() {
            try {
                return 0 < m.Chat.Message.au && m.Date.timestamp() - m.Chat.Message.au >= this.ru
            } catch (t) {}
        }, q.prototype.oh = function() {
            try {
                var t = m.Locale.code();
                return this.su = !(!(0 < this.vc.chat.allowed_pages.length) || m.Utility.compare_page_rules(this.ah, this.vc.chat.allowed_pages)) || m.Utility.compare_page_rules(this.ah, this.vc.chat.blocked_pages) && !0, this.cu = -1 !== this.vc.chat.blocked_locales.indexOf(t), this.eu() || !1
            } catch (t) {}
        }, q.prototype.Vo = function() {
            try {
                if ("function" == typeof this.Il) try {
                    this.Il(), this.Il = null
                } catch (t) {}
                m.Action.pa(), m.Action.ra("session:loaded", m.Broker.Tt), m.Compatibility.schedule_warn_incompatible(!0)
            } catch (t) {}
        }, q.prototype.Kc = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                var n = this.Ml(t),
                    e = void 0,
                    e = !0 === i ? new Date(0) : new Date((new Date).getTime() + (!0 === t ? this.ou : this.hu));
                document.cookie = n + "; expires=" + e.toUTCString() + "; path=/; samesite=lax;"
            } catch (t) {}
        }, q.prototype.oa = function(t) {
            var i, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                r((this.vc.chat || {})[t]) === (void 0 === n ? "undefined" : r(n)) && (this.vc.chat[t] = n, null !== this.Xc && (i = t.replace(this.lu, "-"), this.Xc.setAttribute("data-" + i, !0 === n ? "true" : "false")))
            } catch (t) {}
        }, q.prototype.la = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            try {
                var i, n = this.uu;
                for (i in t)
                    if (t.hasOwnProperty(i)) {
                        n[i] = n[i] || {};
                        var e = t[i];
                        if (null !== e)
                            for (var s in e) e.hasOwnProperty(s) && (n[i][s] = e[s])
                    }
                this.Vl.innerHTML = "", this.Vl.appendChild(m.Template.dom(m.Template.render("style_color", {
                    colors: m.Theme.colors(n.color.theme || this.vc.chat.theme, !!n.color.theme)
                }))), this.Vl.appendChild(m.Template.dom(m.Template.render("style_other", {
                    container_index: ("number" == typeof n.other.container_index ? n : this.fu).other.container_index
                })));
                var c = m.Plugin.get_customization("position", "chatbox");
                m.Utility.is_empty(c) || this.Vl.appendChild(m.Template.dom(m.Template.render("style_position", {
                    position: c
                })))
            } catch (t) {}
        }, q.prototype.yr = function(t, i, n) {
            var e = this,
                s = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
                c = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;
            try {
                var a, r = t + "_handler",
                    o = document.createElement("script");
                o.type = "text/javascript", o.async = 1, !0 === s ? (a = i + "?callback=" + encodeURIComponent("window.$__CRISP_INSTANCE.__spool." + r), c && (a += "&" + encodeURIComponent(c)), o.src = a) : o.src = [this.or + "/static/javascripts/" + i, "?" + this.hr].join(""), this.Oc.__spool[r] = function(t) {
                    o.parentNode.removeChild(o), delete e.Oc.__spool[r], "function" == typeof n && n(t)
                };
                var h = document.getElementsByTagName("head");
                h && h[0] && h[0].appendChild(o)
            } catch (t) {}
        }, q.prototype.To = function(e, s) {
            var c = this,
                t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            try {
                this.yr("website", [this.or + "/settings/website/", encodeURIComponent(this.Dh) + "/"].join(""), function(t) {
                    var i = !(t && !t.error);
                    (t = t || {}).settings = t.settings || {};
                    var n = {
                        website: {
                            name: t.website || "",
                            domain: m.Utility.extract(c.du, t.domain, c.fc, 1),
                            mailer: t.mailer || "",
                            buster: e.buster || 1,
                            count_operators: e.count_operators || 0,
                            active_operators: e.active_operators || t.operators || [],
                            response_metrics: e.response_metrics || {},
                            last_available: e.last_available || m.Date.timestamp(),
                            status: e.status || null,
                            trial: t.trial || !1
                        },
                        channels: t.channels || {},
                        plugins: t.plugins || {},
                        chat: {
                            country: m.Utility.get_or_fallback((e.context || {}).country, null),
                            locale: m.Locale.detect(t.settings.locale ? [t.settings.locale] : []),
                            theme: m.Utility.get_or_fallback(t.settings.color_theme, "default"),
                            allowed_pages: m.Utility.get_or_fallback(t.settings.allowed_pages, []),
                            blocked_pages: m.Utility.get_or_fallback(t.settings.blocked_pages, []),
                            blocked_locales: m.Utility.get_or_fallback(t.settings.blocked_locales, []),
                            tile: m.Utility.get_or_fallback(t.settings.tile, "default", "string"),
                            last_operator_face: m.Utility.get_or_fallback(t.settings.last_operator_face, !1, "boolean"),
                            ongoing_operator_face: m.Utility.get_or_fallback(t.settings.ongoing_operator_face, !0, "boolean"),
                            activity_metrics: m.Utility.get_or_fallback(t.settings.activity_metrics, !0, "boolean"),
                            operator_privacy: m.Utility.get_or_fallback(t.settings.operator_privacy, !1, "boolean"),
                            availability_tooltip: m.Utility.get_or_fallback(t.settings.availability_tooltip, !0, "boolean"),
                            hide_vacation: m.Utility.get_or_fallback(t.settings.hide_vacation, !1, "boolean"),
                            hide_on_away: m.Utility.get_or_fallback(t.settings.hide_on_away, !1, "boolean"),
                            hide_on_mobile: m.Utility.get_or_fallback(t.settings.hide_on_mobile, !1, "boolean"),
                            position_reverse: m.Utility.get_or_fallback(t.settings.position_reverse, !1, "boolean"),
                            email_visitors: m.Utility.get_or_fallback(t.settings.email_visitors, !0, "boolean"),
                            phone_visitors: m.Utility.get_or_fallback(t.settings.phone_visitors, !0, "boolean"),
                            force_identify: m.Utility.get_or_fallback(t.settings.force_identify, !1, "boolean"),
                            ignore_privacy: m.Utility.get_or_fallback(t.settings.ignore_privacy, !1, "boolean"),
                            visitor_compose: m.Utility.get_or_fallback(t.settings.visitor_compose, !0, "boolean"),
                            file_transfer: m.Utility.get_or_fallback(t.settings.file_transfer, !0, "boolean"),
                            helpdesk_link: m.Utility.get_or_fallback(t.settings.helpdesk_link, !0, "boolean"),
                            status_health_dead: m.Utility.get_or_fallback(t.settings.status_health_dead, !0, "boolean"),
                            wait_game: m.Utility.get_or_fallback(t.settings.wait_game, !1, "boolean"),
                            theme_text: m.Utility.get_or_fallback(t.settings.text_theme, "default"),
                            theme_welcome: m.Utility.get_or_fallback(t.settings.welcome_message, "default")
                        }
                    };
                    m.Locale.load(n.chat.locale, function() {
                        s(n, t, i)
                    })
                }, !0, t || e.buster)
            } catch (t) {}
        }, q.prototype.Pc = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            !0 === m.Library.crisp.client.socket.connected ? t() : !1 !== this.Rl && (m.Broker.Jo.actions.push(t), null === m.Broker.Jo.master && (m.Broker.Jo.master = function() {
                !0 === i && m.Minimized.init(!0, !1, !1, !1)
            }), m.Library.crisp.client.socket.connect())
        }, q.prototype.Ar = function() {
            var s = this;
            try {
                "production" === this.Fl && (m.Library.crisp.client.Issue.configure({
                    project: this._l,
                    revision: this.hr,
                    environment: this.Fl,
                    useragent: this.Cl,
                    page: this.ah
                }), m.Library.logger.set_log_sink(function(t, i, n) {
                    var e;
                    "error" === t && ("object" === r((s.Oc || {}).__spool) && (s.Oc.__spool.error_last = {
                        ns: i,
                        value: n
                    }), (e = m.Date.timestamp()) - s.vu >= s.pu && (s.vu = e, m.Library.crisp.client.Issue.report(t, i, n)))
                }))
            } catch (t) {}
        }, q.prototype.Gc = function() {
            try {
                "MutationObserver" in window && (this.yu("html"), this.yu("body")), m.Library.crisp.client.socket.disconnect(), this.Ll()
            } catch (t) {}
        }, q.prototype.Yc = function() {
            try {
                "function" == typeof this.ql && this.ql()
            } catch (t) {}
        }, q.prototype.Dl = function(n, e) {
            var s = this;
            try {
                var t = new Date,
                    i = t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate() + "-" + t.getHours() + "-" + t.getMinutes();
                this.yr("website", [this.or + "/settings/website/", encodeURIComponent(this.Dh) + "/prelude/"].join(""), function(t) {
                    var i = t && t.error ? t.error : null;
                    i ? e(i) : n(t || s.mu)
                }, !0, i)
            } catch (t) {}
        }, q.prototype.Wl = function() {
            try {
                this._u(), "MutationObserver" in window && (this.gu(document.documentElement), this.wu(document.body))
            } catch (t) {}
        }, q.prototype._u = function() {
            try {
                var t = document.querySelector("body");
                t && t.appendChild(this.Jl), m.Template.vue(this.Jl)
            } catch (t) {}
        }, q.prototype.Ll = function() {
            try {
                null !== this.Jl && (this.Jl.remove(), this.Jl = null)
            } catch (t) {}
        }, q.prototype.Tl = function() {
            try {
                this.bu(!0)
            } catch (t) {}
        }, q.prototype.Ul = function() {
            var e = this;
            try {
                this.bu(!1), this.To({}, function(t, i, n) {
                    !0 !== n && m.Availability.receive(i.online || !1, !1), e.spawn_client(t), m.Minimized.init(!1, !1, n), m.Utility.next_render(function() {
                        e.Vo()
                    })
                }, this.Bl)
            } catch (t) {}
        }, q.prototype.bu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                var i = this.Nl.socket || {},
                    n = (!0 === this.$l ? i.client : null) || this.gl,
                    e = (!0 === this.$l ? i.stream : null) || this.wl;
                m.Broker.init(this.Fl, n, e, this.kl, this.fc, this.Dh, this.El, this.jl, this.zl, this.Cl, this.Al, this.Sl, this.vr, this.Ol, t)
            } catch (t) {}
        }, q.prototype.gu = function(t) {
            var c = this;
            try {
                this.yu("html"), this.ku.html = new window.MutationObserver(function(t) {
                    for (var i = 0; i < (t || []).length; i++) {
                        var n = t[i];
                        if ("childList" === n.type && n.addedNodes)
                            for (var e = 0; e < n.addedNodes.length; e++) {
                                var s = n.addedNodes[e];
                                if ("body" === (s.tagName || "").toLowerCase()) {
                                    c.wu(s), c.xu();
                                    break
                                }
                            }
                    }
                }), this.ku.html.observe(t, this.$u)
            } catch (t) {}
        }, q.prototype.wu = function(t) {
            var s = this;
            try {
                this.yu("body"), this.ku.body = new window.MutationObserver(function(t) {
                    for (var i = 0; i < (t || []).length; i++) {
                        var n = t[i];
                        if ("childList" === n.type && n.removedNodes)
                            for (var e = 0; e < n.removedNodes.length; e++)
                                if (n.removedNodes[e] === s.Jl) {
                                    s.xu();
                                    break
                                }
                    }
                }), this.ku.body.observe(t, this.$u)
            } catch (t) {}
        }, q.prototype.yu = function(t) {
            try {
                var i = this.ku[t];
                void 0 !== i && (i.disconnect(), delete this.ku[t])
            } catch (t) {}
        }, q.prototype.xu = function() {
            var t = this;
            try {
                null === this.Fu && (this.Fu = m.Utility.set_timeout(function() {
                    t.Fu = null, t._u()
                }, this.Eu))
            } catch (t) {}
        }, q.prototype.Ml = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                i = null;
            try {
                i = encodeURIComponent("crisp-client/socket/" + this.Dh) + "=" + encodeURIComponent(!0 === t ? "0" : "1")
            } catch (t) {} finally {
                return i
            }
        }, q.prototype.jc = function() {
            var t = {
                configuration: this.vc || {},
                runtime: this.Ol || {},
                environment: {
                    smileys: {
                        "small-smile": ":)",
                        "big-smile": ":D",
                        blushing: ":$",
                        confused: "x)",
                        cool: "8)",
                        crying: ":'(",
                        embarrased: ":/",
                        heart: "<3",
                        laughing: ":'D",
                        sad: ":(",
                        angry: ":@",
                        sick: ":S",
                        "thumbs-up": "+1",
                        surprised: ":o",
                        tongue: ":P",
                        winking: ";)"
                    },
                    url: {
                        crisp_web: this.bl,
                        crisp_image: this.nc,
                        crisp_game: this.xl
                    },
                    types: {
                        file_preview: m.Magnify.ju
                    }
                },
                website: {
                    id: m.Base.Dh,
                    domain: m.Base.vc.website.domain,
                    name: m.Base.vc.website.name
                },
                is_blocked: this.oh(),
                is_mobile_view: this.Gh(),
                is_full_view: this.Qc(),
                is_small_view: this.Kl(),
                is_large_view: this.Gl()
            };
            m.Utility.merge(m.Store.$store.base, t), this.zu(), this.Cu()
        }, q.prototype.Pl = function() {
            try {
                this.Jl = null, this.Vl = null, this.Xc = null
            } catch (t) {}
        }, q.prototype.zu = function() {
            try {
                var t = [],
                    i = m.Store.$store.base.configuration.website.active_operators;
                if (0 < i.length)
                    for (var n = 0; n < i.length; n++) n < this.Au && t.push({
                        type: "operator",
                        identifier: i[n].user_id,
                        avatar: i[n].avatar,
                        name: m.Library.crisp.web.Name.parse_first_name(i[n].nickname)
                    });
                t.push({
                    type: "website",
                    identifier: this.Dh
                }), m.Store.$store.base.active_operators = t
            } catch (t) {}
        }, q.prototype.Cu = function() {
            try {
                var t = 0,
                    i = m.Store.$store.base.configuration,
                    n = (i.website.active_operators || []).length || 0;
                i.website.count_operators > n && (t = i.website.count_operators - n), m.Store.$store.base.other_operators_count = t
            } catch (t) {}
        }, q.prototype.ot = function() {
            try {
                this.Dc = !1, this.vc = {}, this.Oc = null, this._l = null, this.gl = null, this.wl = null, this.bl = null, this.kl = null, this.nc = null, this.xl = null, this.or = null, this.Zo = null, this.$l = null, this.Fl = null, this.hr = null, this.fc = null, this.Dh = null, this.El = null, this.jl = null, this.zl = null, this.ah = null, this.rh = null, this.Cl = null, this.Al = null, this.Sl = null, this.vr = null, this.Bl = 1, this.Rl = !0, this.Nl = {}, this.su = !1, this.cu = !1, this.Il = null, this.ql = null, this.Ol = {}, this.vu = 0, this.Fu = null, this.uu = {
                    color: {},
                    other: {}
                }, this.ku = {}
            } catch (t) {}
        }, new q), m.Minimized = (I.prototype.init = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                e = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
            try {
                this.Su(n), this.Iu(i, n, t, e), this.Dc = !0
            } catch (t) {}
        }, I.prototype.reset = function() {
            try {
                m.Utility.reset_instance_children(m.Minimized), this.ot()
            } catch (t) {}
        }, I.prototype.Su = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                for (var i = void 0, n = [m.Minimized.Interface, m.Minimized.Event], i = 0; i < n.length; i++) n[i].init(t)
            } catch (t) {}
        }, I.prototype.Iu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                e = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
            try {
                !0 !== i ? m.Minimized.Interface.qu(t, n, e) : m.Minimized.Interface.Ou(t, e), !0 === m.Base.Ol.lock_maximized && m.Minimized.Interface.Bc()
            } catch (t) {}
        }, I.prototype.ot = function() {
            try {
                this.Dc = !1
            } catch (t) {}
        }, new I), m.Minimized.Event = (S.prototype.init = function() {}, S.prototype.pane_click = function(t) {
            try {
                var i, n, e = t.target;
                e && ((i = e.getAttribute("data-pop")) || (n = e.closest("[data-pop]")) && (i = n.getAttribute("data-pop") || null), i ? "helpdesk:search" === i && m.Action.do_helpdesk_search() : e && !0 === e.classList.contains("cc-1rzf") ? m.Minimized.Interface.Du() : m.Minimized.Interface.Bc())
            } catch (t) {}
        }, S.prototype.Ru = function() {
            try {
                m.Store.Ec("minimized", this.ft, this)
            } catch (t) {}
        }, new S), m.Minimized.Interface = (A.prototype.init = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                this.Iu(t)
            } catch (t) {}
        }, A.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, A.prototype.qu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                n = this,
                e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            try {
                var s = !1;
                !0 === m.Base.vc.chat.availability_tooltip && (m.Store.$store.minimized.pane.general_entice.is_concealed = m.Library.crisp.client.Storage.get_stamp_local(this.Bu, [m.Base.Dh, "general_entice", "conceal"]) === this.Nu && !0), !0 === m.Base.vc.chat.helpdesk_link && m.Base.vc.channels.helpdesk && m.Base.rh !== m.Base.vc.channels.helpdesk && !0 === m.Library.crisp.client.socket.connected && (m.Store.$store.minimized.pane.helpdesk.url = m.Chat.Interface.yc("helpdesk")), this.Mu("minimized_authorized", !0, t, i), this.Bc = function() {
                    var i;
                    !1 === s && (!(s = !0) === e ? (n.Tu(!0), m.Event.trigger_interacted(!0), i = m.Utility.set_timeout(function() {
                        m.Broker.Tt || (alert(m.Locale.text("chat", "minimized_connect_alert_failure")), m.Library.crisp.client.socket.disconnect(), n.Tu(!1), m.Action.do_chat_hide())
                    }, n.Uu), m.Broker.Jo.master = function(t) {
                        m.Utility.clear_timeout(i), m.Chat.init(t)
                    }, m.Library.crisp.client.socket.connect()) : m.Chat.init())
                }, m.Availability.apply()
            } catch (t) {}
        }, A.prototype.Ou = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                this.Mu("minimized_unauthorized", !1, t, i), this.Bc = function() {}
            } catch (t) {}
        }, A.prototype.ha = function() {
            try {
                m.Store.$store.minimized.pane.general_entice.visible = !0
            } catch (t) {}
        }, A.prototype.Du = function() {
            try {
                m.Store.$store.minimized.pane.general_entice.is_concealed = !0, m.Library.crisp.client.Storage.set_stamp_local(this.Bu, [m.Base.Dh, "general_entice", "conceal"], this.Nu)
            } catch (t) {}
        }, A.prototype.Mu = function(t) {
            var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = this,
                e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                s = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
            try {
                m.Minimized.Event.Ru();
                var c, a, r = m.Template.dom(m.Template.render(t));
                m.Base.Xc.innerHTML = "", m.Base.Xc.appendChild(r), m.Template.vue(r), !0 === i && (c = m.Base.vc, a = !0 !== m.Base.Qc() && !0 === c.chat.availability_tooltip, !0 === s && m.Feature.has_css_animations() ? (!0 === e && (m.Store.$store.minimized.pane.animate_entrance = !0, m.Utility.set_timeout(function() {
                    m.Store.$store.minimized.pane.animate_entrance = !1
                }, this.Pu)), a && m.Utility.set_timeout(function() {
                    var t = m.Store.$store.minimized.pane;
                    n.ha();
                    var i = !0 === e ? "animate_full" : "animate_short";
                    t.general_entice[i] = !0, m.Utility.set_timeout(function() {
                        t.general_entice[i] = !1
                    }, n.Lu)
                }, this.Da * (!0 === e ? this.Ju : this.Vu))) : this.ha())
            } catch (t) {}
        }, A.prototype.Tu = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                m.Store.$store.minimized.pane.is_waiting = t
            } catch (t) {}
        }, A.prototype.Iu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                !0 !== t && m.Library.crisp.client.Message.get_message_history()
            } catch (t) {}
        }, A.prototype.ot = function() {
            try {
                this.Bc = function() {}
            } catch (t) {}
        }, new A), m.Chat = (C.prototype.init = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            try {
                this.Su(), null !== t && m.Chat.State.Wu(t), null === t && m.Action.ra("chat:initiated"), this.Iu(), m.Base.Kc(!1), this.Dc = !0
            } catch (t) {}
        }, C.prototype.reset = function() {
            try {
                m.Utility.reset_instance_children(m.Chat), this.ot()
            } catch (t) {}
        }, C.prototype.lh = function() {
            try {
                this.Hu(!1)
            } catch (t) {}
        }, C.prototype.Wc = function() {
            try {
                this.Hu(!0)
            } catch (t) {}
        }, C.prototype.Hu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                !0 !== this.Dc && (this.init({
                    maximized: t
                }), m.Chat.State.propagate("maximized", t, !0))
            } catch (t) {}
        }, C.prototype.Su = function() {
            try {
                for (var t = void 0, i = [m.Chat.Alert, m.Chat.Intent, m.Chat.Field, m.Chat.Interface, m.Chat.Message, m.Chat.Misc, m.Chat.Notification, m.Chat.Scroll, m.Chat.State, m.Chat.Selector, m.Chat.Event, m.Chat.Viewport], t = 0; t < i.length; t++) i[t].init()
            } catch (t) {}
        }, C.prototype.Iu = function() {
            try {
                m.Chat.Interface.Ku(), m.Chat.Field.Gu(), m.Availability.apply(), m.Library.crisp.client.Socket.get_state(), m.Sound.initialize("events"), m.Chat.Message.Wu()
            } catch (t) {}
        }, C.prototype.ot = function() {
            try {
                this.Dc = !1
            } catch (t) {}
        }, new C), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, m.Chat.Alert = (z.prototype.init = function() {}, z.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, z.prototype.ya = function(t, i) {
            try {
                var n, e = void 0,
                    s = void 0,
                    c = void 0;
                "object" === (void 0 === t ? "undefined" : r(t)) ? e = t: (e = {})[t] = i;
                var a = m.Utility.clone(this.Yu);
                for (s in e) e.hasOwnProperty(s) && (n = e[s], c = !1, void 0 !== this.Yu[s] && this.Yu[s] === n && (c = !0), !1 === (c = "lock" === this.Yu[s] && "unlock" !== n || c) && (a[s] = n));
                m.Chat.State.propagate("alert", a)
            } catch (t) {}
        }, z.prototype.Zu = function(t) {
            var i = !1;
            try {
                i = ("show" === this.Yu[t] || "unlock" === this.Yu[t]) && !0
            } catch (t) {} finally {
                return i
            }
        }, z.prototype.Xu = function(t, i) {
            try {
                var n = this.Qu[i];
                "function" == typeof n && n.Dt(this)(t)
            } catch (t) {}
        }, z.prototype.tf = function(t) {
            try {
                this.if(t)
            } catch (t) {}
        }, z.prototype.nf = function(t) {
            try {
                this.if(t)
            } catch (t) {}
        }, z.prototype.if = function(t) {
            try {
                "show" === t ? m.Chat.Message.ef() : m.Chat.Message.sf()
            } catch (t) {}
        }, z.prototype.ot = function() {
            try {
                this.Yu = {}
            } catch (t) {}
        }, new z), m.Chat.Intent = (j.prototype.init = function() {}, j.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, j.prototype.ya = function(t) {
            var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "default",
                e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            try {
                if (-1 === this.cf.indexOf(t)) throw new Error("Unknown intent: " + t);
                !0 !== e && !1 === this.Yu[t] || (i = m.Utility.clone(this.Yu), n || !1 === n ? i[t] = n : delete i[t], m.Chat.State.propagate("intent", i))
            } catch (t) {}
        }, j.prototype.af = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            try {
                for (var i, n = void 0, n = 0; n < this.cf.length; n++) i = this.cf[n], (t || this.Yu)[i] || this.rf(i, null)
            } catch (t) {}
        }, j.prototype.rf = function(t) {
            var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "default",
                e = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            try {
                -1 === this.cf.indexOf(t) || "function" == typeof(i = this.hf[t]) && i.Dt(this)(n, e)
            } catch (t) {}
        }, j.prototype.lf = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "default",
                i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                t ? "default" === t ? m.Chat.Message.uf(i) : m.Chat.Message.ff(t, i) : m.Chat.Message.df()
            } catch (t) {}
        }, j.prototype.vf = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "default",
                i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                t ? m.Chat.Message.pf(i) : m.Chat.Message.yf()
            } catch (t) {}
        }, j.prototype.mf = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "default",
                i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                switch (t) {
                    case "default":
                        m.Chat.Message.gf(i);
                        break;
                    case "submitted":
                        m.Chat.Message.wf(i);
                        break;
                    default:
                        m.Chat.Message.bf()
                }
                m.Chat.Feedback.kf(!(!t || "submitted" === t))
            } catch (t) {}
        }, j.prototype.ot = function() {
            try {
                this.Yu = {}
            } catch (t) {}
        }, new j), m.Chat.Picker = (E.prototype.init = function() {}, E.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, E.prototype.rf = function(t) {
            try {
                this.xf = null, m.Store.$store.chat.picker.is_visible = !0 !== m.Store.$store.chat.picker.is_visible, m.Store.$store.chat.picker.has_animation = !0, m.Store.$store.chat.picker.type = "smiley", !0 !== m.Store.$store.chat.picker.is_visible ? m.Chat.Field.Gu() : m.Chat.Feedback.$f()
            } catch (t) {}
        }, E.prototype.$f = function() {
            try {
                this.xf = null, m.Store.$store.chat.picker.is_visible = !1, m.Store.$store.chat.picker.has_animation = !1, m.Store.$store.chat.picker.gif.results = [], m.Store.$store.chat.picker.gif.input = ""
            } catch (t) {}
        }, E.prototype.Ff = function(t) {
            try {
                m.Store.$store.chat.picker.type !== t && (this.$f(), m.Store.$store.chat.picker.is_visible = !0, "gif" === (m.Store.$store.chat.picker.type = t) && this.Ef())
            } catch (t) {}
        }, E.prototype.Ef = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            try {
                if (null !== m.Chat.Event.jf && (m.Utility.clear_timeout(m.Chat.Event.jf), m.Chat.Event.jf = null), this.xf !== t) {
                    this.xf = t, m.Library.crisp.client.Media.get_animation_list(t), m.Store.$store.chat.picker.gif.results = [];
                    for (var i = 0; i < this.zf; i++) m.Store.$store.chat.picker.gif.results.push({
                        loading: !0
                    })
                }
            } catch (t) {}
        }, E.prototype.Cf = function() {
            var t = !1;
            try {
                t = m.Store.$store.chat.picker.is_visible
            } catch (t) {} finally {
                return t
            }
        }, E.prototype.ot = function() {
            try {
                this.Af = null, this.xf = null
            } catch (t) {}
        }, new E), m.Chat.Feedback = (F.prototype.init = function() {}, F.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, F.prototype.Ho = function() {
            try {
                m.Chat.Intent.ya("feedback")
            } catch (t) {}
        }, F.prototype.rf = function(t) {
            try {
                m.Store.$store.chat.feedback.is_visible = !0 !== m.Store.$store.chat.feedback.is_visible, !0 !== m.Store.$store.chat.feedback.is_visible ? m.Chat.Field.Gu() : m.Chat.Picker.$f()
            } catch (t) {}
        }, F.prototype.$f = function() {
            try {
                m.Store.$store.chat.feedback.is_visible = !1
            } catch (t) {}
        }, F.prototype.Ff = function(t) {
            try {
                this.$f(), m.Store.$store.chat.feedback.is_visible = !0
            } catch (t) {}
        }, F.prototype.Cf = function() {
            var t = !1;
            try {
                t = m.Store.$store.chat.feedback.is_visible
            } catch (t) {} finally {
                return t
            }
        }, F.prototype.kf = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                m.Store.$store.chat.feedback.is_available = t
            } catch (t) {}
        }, F.prototype.ot = function() {
            try {
                this.Af = null
            } catch (t) {}
        }, new F), m.Chat.Event = ($.prototype.init = function() {}, $.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, $.prototype.message_common_click = function(t) {
            var i, n;
            try {
                t && t.target && t.target.href && m.Base.vc.channels.helpdesk && m.Base.rh !== m.Base.vc.channels.helpdesk && !0 !== m.Feature.has_screen_touch() && (null === (i = m.Utility.acquire_channel_url_regex("helpdesk", "article", "([^/]+)/article/([^/]+)/.*")) || (n = t.target.href.match(i)) && n[1] && n[2] && (m.Action.do_helpdesk_article_open(n[1], n[2]), t.preventDefault()))
            } catch (t) {}
        }, $.prototype.message_text_click = function(t) {
            try {
                var i, n = t.target;
                !n || (i = n.closest(".cc-sput")) && i.href && (t.preventDefault(), m.Magnify.Sf("embed", i.href))
            } catch (t) {}
        }, $.prototype.message_file_click = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            try {
                m.Magnify.Sf(t, i, n, e)
            } catch (t) {}
        }, $.prototype.message_carousel_wheel = function(t) {
            try {
                m.Chat.Scroll.If(t, "cc-1nq3", "scrollLeft")
            } catch (t) {}
        }, $.prototype.message_picker_button_click = function(t, i) {
            try {
                if ("user" !== t.from && !0 === m.Chat.Message.qf()) {
                    for (var n = !1, e = i.value, s = null, c = 0; c < t.content.choices.length; c++) {
                        var a = t.content.choices[c];
                        a.value === e ? !0 !== a.selected && (n = a.selected = !0, s = a.handler) : a.selected = !1
                    }
                    if (i.action) switch (i.action.type) {
                        case "frame":
                            m.Chat.Frame.Of(i.action.target, t.content.text, {
                                fingerprint: t.fingerprint || "",
                                picker_id: t.content.id || "",
                                choice_value: i.value || ""
                            });
                            break;
                        case "link":
                            m.Utility.open_link(i.action.target)
                    }!0 === n && ("function" == typeof s ? s(t) : m.Library.crisp.client.Message.update_message(t.fingerprint, t.content), m.Sound.start("events", "chat-message-action"))
                }
            } catch (t) {}
        }, $.prototype.message_field_input_keydown = function(t, i) {
            try {
                if (13 === t.keyCode) return t.preventDefault(), void this.message_field_send(i)
            } catch (t) {}
        }, $.prototype.message_field_input_focus = function(t) {
            try {
                !0 === m.Base.Gh() && (m.Store.$store.chat.is_hidden_prompt = !0)
            } catch (t) {}
        }, $.prototype.message_field_input_blur = function(t) {
            try {
                m.Store.$store.chat.is_hidden_prompt = !1
            } catch (t) {}
        }, $.prototype.message_field_send = function(t) {
            var i;
            try {
                !0 !== m.Chat.Message.qf() || 0 < (i = (t.metas.field.value || "").trim()).length && ("function" == typeof t.content.handler ? t.content.handler(i) : (t.content.value = i, m.Library.crisp.client.Message.update_message(t.fingerprint, t.content)), m.Sound.start("events", "chat-message-action"), m.Utility.set_timeout(function() {
                    m.Chat.Field.Gu()
                }, this.Df))
            } catch (t) {}
        }, $.prototype.message_send_retry_click = function(t) {
            try {
                !0 === m.Chat.Message.qf() && (m.Chat.Message.Rf(t.fingerprint), m.Action.do_message_send(t.type, t.content))
            } catch (t) {}
        }, $.prototype.message_previous_click = function(t) {
            try {
                m.Chat.Intent.ya(t.content.previous), m.Sound.start("events", "chat-message-action")
            } catch (t) {}
        }, $.prototype.frame_previous_click = function() {
            try {
                m.Chat.Frame._close()
            } catch (t) {}
        }, $.prototype.game_stop_click = function() {
            try {
                m.Chat.Game.Bf()
            } catch (t) {}
        }, $.prototype.fuzzy_wheel = function(t) {
            try {
                t.stopPropagation(), t.preventDefault(), t.returnValue = !1
            } catch (t) {}
        }, $.prototype.fuzzy_click = function(t) {
            try {
                var i = t.target;
                i && !0 !== i.classList.contains("cc-x1l1") && !i.closest(".cc-x1l1") && m.Chat.Field.Gu(), m.Chat.Interface.Nf(!1)
            } catch (t) {}
        }, $.prototype.pane_minimize_click = function() {
            try {
                m.Action.do_chat_close()
            } catch (t) {}
        }, $.prototype.pane_mode_click = function(t) {
            try {
                var i = !1;
                switch (t) {
                    case "chat":
                        m.Store.$store.chat.mode = t, i = !0;
                        break;
                    case "helpdesk":
                        m.Action.do_helpdesk_search()
                }
                m.Chat.Interface.Mf(), m.Chat.Field.Gu(), m.Chat.Interface.Nf(!1), !0 === i && m.Chat.Interface.Mc()
            } catch (t) {}
        }, $.prototype.pane_toggle_click = function(t) {
            try {
                var i = t.target;
                i && !0 === i.classList.contains("cc-1kn9") ? m.Action.do_message_read() : m.Action.do_chat_toggle()
            } catch (t) {}
        }, $.prototype.pane_tooltip_new_messages_click = function(t) {
            try {
                "chat" !== m.Store.$store.chat.mode && (m.Store.$store.chat.mode = "chat", m.Chat.Interface.Mc())
            } catch (t) {}
        }, $.prototype.flow_scroll = function(t) {
            try {
                m.Chat.Interface.Tf(t.target.scrollTop), t.preventDefault(), t.stopPropagation()
            } catch (t) {}
        }, $.prototype.flow_touch = function(t) {
            try {
                t.stopPropagation()
            } catch (t) {}
        }, $.prototype.file_drop_dragover = function(t) {
            try {
                t.preventDefault(), t.stopPropagation(), m.Chat.File.Uf(!0)
            } catch (t) {}
        }, $.prototype.file_drop_dragleave = function(t) {
            try {
                t.preventDefault(), t.stopPropagation(), m.Chat.File.Uf(!1)
            } catch (t) {}
        }, $.prototype.file_drop = function(t) {
            try {
                t.preventDefault(), t.stopPropagation(), t.dataTransfer && t.dataTransfer.files && 0 < t.dataTransfer.files.length && m.Chat.File.Pf(t.dataTransfer.files), m.Chat.File.Uf(!1)
            } catch (t) {}
        }, $.prototype.file_change = function(t) {
            try {
                !0 === m.Base.vc.chat.file_transfer && t.target.files && 0 < t.target.files.length && (m.Event.trigger_interacted(!0), m.Chat.File.Pf(t.target.files))
            } catch (t) {}
        }, $.prototype.header_channels_button_click = function() {
            try {
                m.Chat.Interface.Nf()
            } catch (t) {}
        }, $.prototype.header_channels_dropdown_click = function(t) {
            try {
                t.stopPropagation()
            } catch (t) {}
        }, $.prototype.header_channels_dropdown_entry_click = function() {
            try {
                m.Chat.Interface.Nf(!1)
            } catch (t) {}
        }, $.prototype.picker_click = function(t) {
            try {
                var i = t.target;
                !i || !0 !== i.classList.contains("cc-143w") && i.closest(".cc-143w") || m.Chat.Picker.$f()
            } catch (t) {}
        }, $.prototype.picker_show_click = function(t) {
            try {
                m.Chat.Picker.Ff(t)
            } catch (t) {}
        }, $.prototype.picker_toggle_click = function() {
            try {
                m.Chat.Picker.rf(), !0 === m.Store.$store.chat.picker.is_visible && m.Event.trigger_interacted(!0)
            } catch (t) {}
        }, $.prototype.picker_smiley_click = function(t) {
            try {
                var i, n = void 0,
                    e = m.Chat.Selector.get("form_textarea_message"),
                    s = e.selectionStart;
                (n = m.Action.get_message_text()) && (0 < s && " " !== n[s - 1] && (t = " " + t), s < n.length && " " !== n[s] && (t += " ")), i = n.substr(0, s) + t + n.substr(s), m.Action.set_message_text(i), e.dispatchEvent(new window.KeyboardEvent("keyup")), m.Utility.set_timeout(function() {
                    s += t.length, e.selectionStart = e.selectionEnd = s
                }, 0), m.Chat.Picker.$f(), m.Chat.Field.Gu()
            } catch (t) {}
        }, $.prototype.picker_gif_input_keyup = function(t) {
            var i = this;
            try {
                null !== this.jf && m.Utility.clear_timeout(this.jf), this.jf = m.Utility.set_timeout(function() {
                    i.jf = null, m.Chat.Picker.Ef((t.target.value || "").trim())
                }, this.Lf)
            } catch (t) {}
        }, $.prototype.picker_gif_input_reset = function(t) {
            try {
                m.Store.$store.chat.picker.gif.input && (m.Store.$store.chat.picker.gif.input = "", m.Chat.Picker.Ef(""))
            } catch (t) {}
        }, $.prototype.picker_gif_item_click = function(t) {
            try {
                t.type && t.url && m.Action.do_message_send("animation", {
                    type: t.type,
                    url: t.url
                }), m.Chat.Picker.$f()
            } catch (t) {}
        }, $.prototype.speech_record_click = function() {
            try {
                m.Event.trigger_interacted(!0), m.Chat.Speech.Jf()
            } catch (t) {}
        }, $.prototype.speech_cancel_click = function() {
            try {
                m.Chat.Speech.Vf()
            } catch (t) {}
        }, $.prototype.speech_send_click = function() {
            try {
                m.Chat.Speech.Wf()
            } catch (t) {}
        }, $.prototype.feedback_click = function(t) {
            try {
                var i = t.target;
                !i || !0 !== i.classList.contains("cc-v9te") && i.closest(".cc-v9te") || m.Chat.Feedback.$f()
            } catch (t) {}
        }, $.prototype.feedback_submit_click = function(t) {
            try {
                0 < m.Store.$store.chat.feedback.stars.selected && m.Store.$store.chat.feedback.comment && (m.Library.crisp.client.Session.send_feedback_rate(m.Store.$store.chat.feedback.stars.selected, m.Store.$store.chat.feedback.comment), m.Chat.Feedback.$f(), m.Chat.Intent.ya("feedback", "submitted"))
            } catch (t) {}
        }, $.prototype.feedback_toggle_click = function() {
            try {
                m.Chat.Feedback.rf(), !0 === m.Store.$store.chat.feedback.is_visible && m.Event.trigger_interacted(!0)
            } catch (t) {}
        }, $.prototype.alert_warn_reply_click = function() {
            try {
                !0 === m.Base.vc.chat.phone_visitors && !0 !== m.Base.vc.chat.email_visitors ? m.Chat.Intent.ya("identity", "phone") : m.Chat.Intent.ya("identity", "email"), m.Chat.Field.Gu(!0)
            } catch (t) {}
        }, $.prototype.alert_new_messages_click = function() {
            try {
                m.Chat.Scroll.Hf()
            } catch (t) {}
        }, $.prototype.alert_email_invalid_click = function() {
            try {
                m.Chat.Intent.ya("identity", "email", !0)
            } catch (t) {}
        }, $.prototype.textarea_keyup = function(t) {
            try {
                m.Chat.Field.Kf(t)
            } catch (t) {}
        }, $.prototype.textarea_keydown = function(t) {
            try {
                if (13 === t.keyCode && !t.shiftKey) return t.preventDefault(), void m.Chat.Field.Gf();
                if (70 === t.keyCode && t.ctrlKey && !0 === m.Store.$store.chat.helpdesk.search) return t.preventDefault(), void m.Action.do_helpdesk_search();
                m.Event.trigger_interacted(), m.Chat.Field.Kf(t)
            } catch (t) {}
        }, $.prototype.textarea_paste = function(t) {
            try {
                var i = (t.clipboardData || t.originalEvent.clipboardData || {}).items || [];
                if (0 < i.length) {
                    for (var n, e = [], s = 0; s < i.length; s++) "file" !== i[s].kind || (n = i[s].getAsFile()) && n.type && -1 !== n.type.indexOf("image/") && e.push(n);
                    0 < e.length && (t.preventDefault(), !0 === confirm(m.Locale.text("chat", "chat_form_attach_confirm_upload")) && m.Chat.File.Pf(e))
                }
                m.Utility.set_timeout(function() {
                    m.Chat.Field.Kf(null)
                }, 0)
            } catch (t) {}
        }, $.prototype.textarea_send_click = function(t) {
            try {
                m.Chat.Field.Gf()
            } catch (t) {}
        }, $.prototype.chat_wheel = function(t) {
            try {
                m.Chat.Scroll.If(t, "cc-19vt")
            } catch (t) {}
        }, $.prototype.helpdesk_wheel = function(t) {
            try {
                m.Chat.Scroll.If(t, "cc-1tz2")
            } catch (t) {}
        }, $.prototype.helpdesk_search_keydown = function(t) {
            try {
                switch (t.keyCode) {
                    case 13:
                        t.preventDefault(), m.Chat.Helpdesk.Yf();
                        break;
                    case 38:
                        m.Chat.Helpdesk.Zf(-1);
                        break;
                    case 40:
                        m.Chat.Helpdesk.Zf(1);
                        break;
                    case 9:
                        t.target && t.target.value && (t.preventDefault(), m.Chat.Helpdesk.Xf());
                        break;
                    default:
                        !0 !== t.shiftKey && !0 !== t.metaKey && !0 !== t.ctrlKey && !0 !== t.altKey && m.Chat.Helpdesk.ch([])
                }
            } catch (t) {}
        }, $.prototype.helpdesk_search_field_keyup = function() {
            try {
                m.Chat.Helpdesk.Qf(m.Store.$store.chat.helpdesk_search.input)
            } catch (t) {}
        }, $.prototype.helpdesk_search_article_click = function(t, i, n) {
            var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            try {
                m.Action.do_helpdesk_article_open(t, i, n, e || null)
            } catch (t) {}
        }, $.prototype.helpdesk_viewer_previous_click = function() {
            try {
                m.Store.$store.chat.helpdesk_viewer.url = "", m.Chat.Interface.Mc()
            } catch (t) {}
        }, $.prototype.Ru = function() {
            try {
                m.Store.Ec("chat", this.ft, this), this.td()
            } catch (t) {}
        }, $.prototype.td = function() {
            try {
                m.Utility.add_event_listener(this.ns, "window", "beforeunload", function(t) {
                    var i, n, e = null;
                    if (!0 === m.Library.crisp.client.Message.is_sending_messages() && (e = m.Locale.text("chat", "chat_message_send_abort_warn")), !0 === m.Base.vc.chat.file_transfer && (i = m.Store.$store.chat.file.state, n = m.Store.$store.chat.speech.state, -1 !== ["preparing", "uploading"].indexOf(i) && (e = m.Locale.text("chat", "chat_form_attach_abort_warn")), -1 !== ["recording", "paused"].indexOf(n) && (e = m.Locale.text("chat", "chat_form_speech_abort_warn"))), e = !0 === m.Library.crisp.client.Call.is_ongoing() ? m.Locale.text("call", "call_abort_warn") : e) return t.returnValue = e
                })
            } catch (t) {}
        }, $.prototype.ot = function() {
            try {
                this.jf = null
            } catch (t) {}
        }, new $), m.Chat.Field = (x.prototype.init = function() {}, x.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, x.prototype.Gf = function() {
            try {
                m.Event.trigger_interacted(!0), m.Chat.Message.send()
            } catch (t) {}
        }, x.prototype.Kf = function(t) {
            try {
                var i, n, e, s, c, a, r = "";
                null !== t && 13 === t.keyCode && !t.shiftKey || (r = m.Action.get_message_text(), i = m.Chat.Selector.get("form_container"), n = m.Chat.Selector.get("form_textarea_message"), 0 === this.nd && (this.nd = parseInt(n.getAttribute("rows"), 10)), this.ed(), r ? (e = 8.5 * r.length / m.Chat.Interface.sd, e += (r.match(this.cd) || []).length, ((s = Math.ceil(e)) - e < this.ad || s !== this.rd) && (e = s, this.rd = e, c = m.Chat.Interface.od - m.Chat.Interface.hd + m.Chat.Interface.hd * e, a = m.Chat.Interface.hd * (e - 1), c < m.Chat.Interface.ld + m.Chat.Interface.od - this.ud && (n.setAttribute("rows", this.nd + (e - 1)), m.Chat.Field.fd(a), i.style.setProperty("height", c + "px", "important"))), m.Store.$store.chat.field.has_value = !0) : (m.Store.$store.chat.field.has_value = !1, i.style.height = null, n.setAttribute("rows", this.nd), this.fd(0))), m.Library.crisp.client.Message.send_message_compose(r ? "start" : "stop", r || null)
            } catch (t) {}
        }, x.prototype.Gu = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                !0 !== t && m.Feature.has_screen_touch() || !0 !== m.Chat.Interface.dd() || null === m.Chat.Selector.vd || m.Utility.next_render(function() {
                    var t = m.Chat.Selector.get("flow_messages");
                    if (t) {
                        var i = null;
                        switch (m.Store.$store.chat.mode) {
                            case "chat":
                                var n = t.querySelector(".cc-k6m4"),
                                    i = !0 === m.Chat.Picker.Cf() ? m.Chat.Selector.get("content").querySelector(".cc-1ibt") : !0 === m.Chat.Feedback.Cf() ? m.Chat.Selector.get("content").querySelector(".cc-7fhf") : n || m.Chat.Selector.get("form_textarea_message");
                                break;
                            case "helpdesk":
                                i = m.Chat.Selector.get("content").querySelector(".cc-guux")
                        }
                        i && i.focus()
                    }
                })
            } catch (t) {}
        }, x.prototype.pd = function() {
            try {
                for (var t = m.Base.Xc.querySelectorAll("input"), i = 0; i < t.length; i++) t[i].blur()
            } catch (t) {}
        }, x.prototype.fd = function(t) {
            try {
                for (var i = m.Chat.Selector.yd.querySelectorAll([".cc-1hzo", ".cc-16md"].join(", ")), n = 0; n < i.length; n++) i[n].style.setProperty("margin-bottom", t + "px", "important")
            } catch (t) {}
        }, x.prototype.ed = function() {
            var t = this;
            try {
                null !== this.md && m.Utility.clear_timeout(this.md), this.md = m.Utility.set_timeout(function() {
                    t.md = null, m.Chat.State.propagate("textarea", m.Action.get_message_text())
                }, this._d)
            } catch (t) {}
        }, x.prototype.ot = function() {
            try {
                this.gd = "", this.nd = 0, this.rd = 1, this.md = null
            } catch (t) {}
        }, new x), m.Chat.File = (k.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, k.prototype.eh = function(t, i, n) {
            try {
                if (!0 === m.Base.vc.chat.file_transfer) {
                    if (!this.wd[0]) return void this.bd();
                    if (!t || !i) return alert(m.Locale.text("chat", "chat_form_attach_alert_quota")), void this.bd();
                    if (this.wd[0].size >= n) return alert(m.Locale.text("chat", "chat_form_attach_alert_size")), void this.bd();
                    this.kd = i, this.xd(t, this.wd[0])
                }
            } catch (t) {}
        }, k.prototype.Uf = function(t) {
            try {
                !0 === m.Base.vc.chat.file_transfer && (m.Store.$store.chat.has_drop_zone = t)
            } catch (t) {}
        }, k.prototype.Pf = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            try {
                if (!0 === m.Chat.Message.qf() && 0 < t.length && "none" === m.Store.$store.chat.file.state) {
                    this.wd = [];
                    for (var i = 0; i < t.length; i++) m.Chat.File.wd.push(t[i]);
                    m.Store.$store.chat.file.state = "preparing", m.Library.crisp.client.Bucket.get_url_upload(t[0].name || this.$d, t[0].type || this.Fd)
                }
            } catch (t) {}
        }, k.prototype.xd = function(t, i) {
            try {
                this.Ed = new window.XMLHttpRequest, this.Ed.file = i, this.Ed.addEventListener("loadstart", this.jd.Dt(this), !1), this.Ed.addEventListener("error", this.zd.Dt(this), !1), this.Ed.addEventListener("abort", this.zd.Dt(this), !1), this.Ed.addEventListener("load", this.Cd.Dt(this), !1), this.Ed.open("PUT", t, !0), this.Ed.setRequestHeader("Content-Disposition", "attachment"), this.Ed.send(i)
            } catch (t) {}
        }, k.prototype.jd = function() {
            try {
                m.Store.$store.chat.file.state = "uploading"
            } catch (t) {}
        }, k.prototype.zd = function() {
            try {
                0 < this.wd.length && alert(m.Locale.text("chat", "chat_form_attach_alert_error")), this.bd()
            } catch (t) {}
        }, k.prototype.Cd = function() {
            var t, i = this;
            try {
                0 < this.wd.length && this.kd && (t = this.wd[0], m.Utility.set_timeout(function() {
                    t.type && -1 !== t.type.indexOf("audio/") && "number" == typeof t.duration ? m.Action.do_message_send("audio", {
                        url: i.kd,
                        type: t.type,
                        duration: t.duration
                    }) : m.Action.do_message_send("file", {
                        url: i.kd,
                        name: t.name || i.$d,
                        type: t.type || i.Fd
                    }), i.bd()
                }, this.Ad))
            } catch (t) {}
        }, k.prototype.bd = function() {
            try {
                this.Ed && (this.Ed.removeEventListener("loadstart", this.jd, !1), this.Ed.removeEventListener("error", this.zd, !1), this.Ed.removeEventListener("abort", this.zd, !1), this.Ed.removeEventListener("load", this.Cd, !1)), m.Chat.Selector.get("form_input_attach").value = null, m.Store.$store.chat.file.state = "none", this.wd.shift(), 0 < this.wd.length && this.Pf(this.wd)
            } catch (t) {}
        }, k.prototype.ot = function() {
            try {
                this.wd = [], this.kd = null
            } catch (t) {}
        }, new k), m.Chat.Frame = (b.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, b.prototype.Of = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            try {
                var e = m.Utility.insert_link_query_values(t, m.Utility.merge({
                    website_id: m.Base.Dh,
                    session_id: m.Broker.Tt
                }, n));
                null !== this.Sd && m.Store.$store.chat.frame.target !== e && this._close(), null === this.Sd && (m.Store.$store.chat.frame.loaded = !1, m.Store.$store.chat.frame.target = e, m.Store.$store.chat.frame.title = i || "", this.Sd = m.Template.dom(m.Template.render("chat_frame")), m.Template.vue(this.Sd), m.Chat.Selector.yd.appendChild(this.Sd))
            } catch (t) {}
        }, b.prototype._close = function() {
            try {
                null !== this.Sd && (this.Sd.remove(), this.Sd = null, m.Store.$store.chat.frame.target = "", m.Store.$store.chat.frame.title = "", m.Store.$store.chat.frame.loaded = !1)
            } catch (t) {}
        }, b.prototype.ot = function() {
            try {
                this.Sd = null
            } catch (t) {}
        }, new b), m.Chat.Game = (w.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, w.prototype.Id = function() {
            try {
                null === this.qd && (m.Store.$store.chat.game.loaded = !1, this.qd = m.Template.dom(m.Template.render("chat_game")), m.Template.vue(this.qd), m.Chat.Selector.yd.appendChild(this.qd))
            } catch (t) {}
        }, w.prototype.Bf = function() {
            try {
                null !== this.qd && (this.qd.remove(), this.qd = null)
            } catch (t) {}
        }, w.prototype.ot = function() {
            try {
                this.qd = null
            } catch (t) {}
        }, new w), m.Chat.Helpdesk = (g.prototype.init = function() {}, g.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, g.prototype.Tc = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                i = !1;
            try {
                var n = m.Chat.Interface.yc("helpdesk");
                n && (i = !0, "helpdesk" !== m.Store.$store.chat.mode ? (m.Utility.merge(m.Store.$store.chat.helpdesk_search, {
                    input: "",
                    url: n,
                    articles: [],
                    current_index: 0,
                    has_search: !1,
                    initialized: !1,
                    loading: !1
                }), m.Store.$store.chat.mode = "helpdesk", m.Action.do_helpdesk_query("")) : m.Store.$store.chat.helpdesk_viewer.url = "", !1 === t && m.Chat.Interface.Mc())
            } catch (t) {} finally {
                return i
            }
        }, g.prototype.Uc = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                s = !1;
            try {
                var c = m.Chat.Interface.yc("helpdesk");
                c && (s = this.Tc(!0), m.Store.$store.chat.helpdesk_viewer.loaded = !1, m.Store.$store.chat.helpdesk_viewer.title = n || "", m.Store.$store.chat.helpdesk_viewer.category = e || "", m.Store.$store.chat.helpdesk_viewer.url = "" + c + t + "/article/" + i + "/", m.Chat.Interface.Mc())
            } catch (t) {} finally {
                return s
            }
        }, g.prototype.Qf = function() {
            var i = this,
                n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            try {
                n !== this.Od && (this.Dd(), m.Store.$store.chat.helpdesk_search.loading = !0, this.Rd = m.Utility.set_timeout(function() {
                    var t;
                    i.Rd = null, i.Od = n, m.Action.do_helpdesk_query(n), !n || (t = n.substring(n.lastIndexOf(" ") + 1).trim()) && t.length >= i.Bd && m.Library.crisp.client.Helpdesk.get_article_suggest(t, m.Locale.code())
                }, this.Nd))
            } catch (t) {}
        }, g.prototype.sh = function() {
            var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                e = this,
                s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                t = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            try {
                "helpdesk" === m.Store.$store.chat.mode && (m.Store.$store.chat.helpdesk_search.articles = [], m.Store.$store.chat.helpdesk_search.current_index = 0, m.Store.$store.chat.helpdesk_search.has_search = t, m.Store.$store.chat.helpdesk_search.articles = n, null !== this.Md && m.Utility.clear_timeout(this.Md), s.query && (this.Td = m.Utility.set_timeout(function() {
                    e.Td = null;
                    var t = (s.query || "").trim(),
                        i = s.locale || null;
                    (i = n[0] && n[0].locale ? n[0].locale : i) && t && m.Library.crisp.client.Helpdesk.report_article_search(i, t)
                }, this.Ud)), m.Store.$store.chat.helpdesk_search.initialized = !0, m.Store.$store.chat.helpdesk_search.loading = !1)
            } catch (t) {}
        }, g.prototype.Yf = function() {
            try {
                var t = m.Chat.Selector.get("content").querySelector('.cc-1i08[data-active="true"]');
                t && t.click()
            } catch (t) {}
        }, g.prototype.ch = function() {
            var t, i, n, e, s, c, a, r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            try {
                "helpdesk" === m.Store.$store.chat.mode && (t = (r[0] || "").toLowerCase(), n = i = null, !t || (e = (n = m.Store.$store.chat.helpdesk_search.input).substring(n.lastIndexOf(" ") + 1).trim().toLowerCase()) && e.length < t.length && t.substring(0, e.length) === e && (i = t.substring(e.length)), s = m.Chat.Selector.get("content").querySelector(".cc-fayq"), c = m.Chat.Selector.get("content").querySelector(".cc-x1r7"), i && n && s ? (s.innerText = n, c.innerText = i, a = "rtl" === m.Locale.direction() ? "right" : "left", c.style.setProperty(a, s.offsetWidth + "px", "important"), c.style.setProperty("display", "block", "important")) : (c.style.setProperty("display", "none", "important"), c.innerText = ""))
            } catch (t) {}
        }, g.prototype.Xf = function() {
            try {
                var t = (m.Chat.Selector.get("content").querySelector(".cc-x1r7").innerText || "").trim();
                t && (m.Store.$store.chat.helpdesk_search.input = m.Store.$store.chat.helpdesk_search.input + "" + t, this.ch([]))
            } catch (t) {}
        }, g.prototype.Zf = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
            try {
                var i = m.Store.$store.chat.helpdesk_search.current_index + t;
                (i = i >= m.Store.$store.chat.helpdesk_search.articles.length ? 0 : i) < 0 && (i = m.Store.$store.chat.helpdesk_search.articles.length - 1), m.Store.$store.chat.helpdesk_search.current_index = i, m.Utility.next_render(function() {
                    var t = m.Chat.Selector.get("content").querySelector('.cc-1i08[data-active="true"]');
                    t && t.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    })
                })
            } catch (t) {}
        }, g.prototype.Dd = function() {
            try {
                null !== this.Rd && (m.Utility.clear_timeout(this.Rd), this.Rd = null), null !== this.Td && (m.Utility.clear_timeout(this.Td), this.Td = null)
            } catch (t) {}
        }, g.prototype.ot = function() {
            try {
                this.Td = null, this.Od = ""
            } catch (t) {}
        }, new g), m.Chat.Interface = (_.prototype.init = function() {
            try {
                this.Pd()
            } catch (t) {}
        }, _.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, _.prototype.Ld = function() {
            var t, i, n, e = this,
                s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "pane",
                c = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                function a(t, i) {
                    1 == (t !== i) && (m.Store.$store.chat.is_opened = t, m.Utility.next_render(function() {
                        e.Jd(t)
                    }))
                }
                t = "pane" !== s, n = m.Store.$store.chat.is_opened, e.Vd = t, !0 === c ? (i = 1 != t ? "animate_minimize" : "animate_maximize", 1 == t ? m.Store.$store.chat.is_opened = !0 : e.Jd(!1), null !== e.Wd && (m.Utility.clear_timeout(e.Wd), m.Store.$store.chat.animate_minimize = !1, m.Store.$store.chat.animate_maximize = !1), m.Store.$store.chat[i] = !0, e.Wd = m.Utility.set_timeout(function() {
                    e.Wd = null, m.Store.$store.chat[i] = !1, a(t, n)
                }, e.Hd)) : a(t, n), this.Mf()
            } catch (t) {}
        }, _.prototype.Oo = function() {
            var n = this,
                e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                null !== this.Kd && m.Utility.clear_timeout(this.Kd), this.Kd = m.Utility.set_timeout(function() {
                    n.Kd = null, m.Store.$store.chat.has_offline = !0 !== e;
                    var t, i = {
                        failed: s,
                        inactive: m.Event.Eh || m.Event.jh || !1
                    };
                    for (t in i) m.Store.$store.chat["reconnect_" + t] = i[t]
                }, !0 === e ? 0 : this.Gd)
            } catch (t) {}
        }, _.prototype.Nc = function() {
            try {
                !0 !== m.Base.Ol.lock_maximized && m.Chat.State.propagate("maximized", !1)
            } catch (t) {}
        }, _.prototype.Rc = function() {
            try {
                m.Chat.State.propagate("maximized", !0, !1, function() {
                    m.Utility.next_render(function() {
                        m.Chat.Scroll.Hf()
                    })
                })
            } catch (t) {}
        }, _.prototype.dd = function() {
            var t = !0;
            try {
                t = this.Vd || !1
            } catch (t) {} finally {
                return t
            }
        }, _.prototype.Mf = function() {
            try {
                var t = this.Yd();
                m.Library.crisp.client.Message.set_messages_in_view(t)
            } catch (t) {}
        }, _.prototype.Ku = function() {
            try {
                var t = m.Base.vc || {};
                t.website, this.jc(), m.Chat.Selector.vd = m.Template.dom(m.Template.render("chat", {
                    configuration: t,
                    environment: {
                        smileys: this.Zd,
                        url: {
                            crisp_web: m.Base.bl
                        }
                    },
                    methods: {
                        generate_channel_link: this.yc.Dt(this)
                    },
                    website: {
                        id: m.Base.Dh,
                        domain: m.Base.vc.website.domain,
                        name: m.Base.vc.website.name
                    }
                })), m.Base.Xc.innerHTML = "", m.Base.Xc.appendChild(m.Chat.Selector.vd), m.Template.vue(m.Chat.Selector.vd), m.Chat.Selector.Ru(), m.Chat.Event.Ru(), this.Xd(), m.Chat.State.Qd(["intent"])
            } catch (t) {}
        }, _.prototype.jc = function() {
            var i = this,
                t = (m.Base.vc || {}).website || {},
                t = {
                    blocked: m.Base.eu(),
                    helpdesk: {
                        search: m.Base.vc.chat.helpdesk_link && m.Base.vc.channels.helpdesk && m.Base.rh !== m.Base.vc.channels.helpdesk && !0
                    },
                    status: {
                        url: this.yc("status")
                    },
                    activity: {
                        metrics: t.response_metrics && t.response_metrics.mean && t.response_metrics.mean >= this.tv && t.response_metrics.mean < this.iv ? t.response_metrics.mean : null,
                        last: t.last_available && 0 < t.last_available ? t.last_available : null
                    },
                    channels: this.nv(),
                    branding_link: m.Store.$store.base.environment.url.crisp_web + "/" + m.Locale.web() + "/livechat/?ref=chatbox&domain=" + m.Store.$store.base.website.domain + "&name=" + encodeURIComponent(m.Store.$store.base.website.name)
                };
            m.Store.$store.chat.content_source = function(t) {
                return t.match(i.ev)[1]
            }, m.Store.$store.chat.timestamp_to_properties = function(t) {
                return m.Date.timestamp_to_properties(t)
            }, m.Store.$store.chat.is_different_date = function(t, i) {
                t = m.Store.$store.messages.list[t], i = m.Store.$store.messages.list[i];
                if (t && 0 === t.timestamp) return !1;
                if (!t || !i) return !0;
                i = m.Date.timestamp_to_properties(i.timestamp), t = m.Date.timestamp_to_properties(t.timestamp);
                return i.day !== t.day || i.month !== t.month || i.year !== t.year || !1
            }, m.Store.$store.chat.is_first_of_group = function(t, i) {
                if (0 === i) return !0;
                var n = m.Store.$store.messages.list[i - 1];
                return m.Store.$store.chat.is_last_of_group(n, i - 1)
            }, m.Store.$store.chat.is_last_of_group = function(t, i) {
                var n = m.Store.$store.messages.list[i + 1],
                    e = (n || {}).user || {},
                    s = t.user || {};
                return m.Store.$store.chat.is_different_date(i + 1, i) || !n && !0 || (t.sending || t.error) && !(n.sending || n.error) || n && e.user_id !== s.user_id || (e.type || s.type) && s.nickname != s.nickname || !1
            }, m.Store.$store.chat.is_last_of_thread = function(t, i) {
                return m.Store.$store.chat.is_different_date(i + 1, i) || !m.Store.$store.messages.list[i + 1] && !0 || !1
            }, m.Store.$store.chat.has_picker_selected = function(t) {
                if ("picker" === t.type)
                    for (var i = 0; i < t.content.choices.length; i++)
                        if (!0 === t.content.choices[i].selected) return !0;
                return !1
            }, m.Utility.merge(m.Store.$store.chat, t)
        }, _.prototype.Nf = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            try {
                (t = null === t ? !1 === m.Store.$store.chat.has_channels : t) !== m.Store.$store.chat.has_channels && (m.Store.$store.chat.has_channels = t)
            } catch (t) {}
        }, _.prototype.yc = function(t) {
            var i = "";
            try {
                var n = m.Base.vc.channels[t] || null;
                switch (t) {
                    case "email":
                        var e, s, c = m.Broker.No;
                        c ? (e = m.Base.vc.website.name, s = "s." + c + ".i@" + m.Base.vc.website.mailer, i = "mailto:", e && (i += '"' + encodeURI(e) + '"'), i += "<" + encodeURI(s) + ">") : n && (i = "mailto:" + n);
                        break;
                    case "phone":
                        n && (i = "tel:" + n);
                        break;
                    case "messenger":
                        n && (i = "https://m.me/" + encodeURI(n));
                        break;
                    case "telegram":
                        n && (i = "https://telegram.me/" + encodeURI(n));
                        break;
                    case "twitter":
                        n && (i = "https://twitter.com/" + encodeURI(n));
                        break;
                    case "whatsapp":
                        n && (i = "https://wa.me/" + encodeURI(n));
                        break;
                    case "instagram":
                        n && (i = "https://www.instagram.com/" + encodeURI(n) + "/");
                        break;
                    case "helpdesk":
                    case "status":
                        n && (i = ("production" === m.Base.Fl ? "https" : "http") + "://" + n + "/")
                }
            } catch (t) {} finally {
                return i
            }
        }, _.prototype.Mc = function() {
            var t = this,
                i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                !0 !== this.sv && (this.sv = !0, m.Utility.next_render(function() {
                    "function" == typeof window.requestAnimationFrame ? window.requestAnimationFrame(function() {
                        t.cv(i), t.sv = !1
                    }) : (t.cv(i), t.sv = !1)
                }))
            } catch (t) {}
        }, _.prototype.bh = function() {
            var t, i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                window.scroll && !0 === m.Store.$store.chat.is_opened && -1 < this.av && (!0 !== i && !0 === m.Base.Gh() ? window.scrollTo(0, -1) : ((t = document.querySelector("html")) && t.classList.remove("cc-f079"), m.Utility.remove_event_listener(this.ns, "document", "touchstart"), m.Utility.remove_event_listener(this.ns, "document", "touchmove"), window.scroll(window.scrollX, this.av), this.av = -1))
            } catch (t) {}
        }, _.prototype.Yd = function() {
            try {
                return this.rv && this.dd() && "chat" === m.Store.$store.chat.mode && !0
            } catch (t) {}
        }, _.prototype.Tf = function(t) {
            try {
                (Math.abs(t - (m.Chat.Scroll.ov || 0)) >= this.hv || null !== this.lv) && (m.Chat.Scroll.ov = t, this.uv(m.Chat.Scroll.ov))
            } catch (t) {}
        }, _.prototype.nv = function() {
            for (var t = [], i = 0; i < this.fv.length; i++) {
                var n = this.fv[i][0],
                    e = this.fv[i][1],
                    s = this.yc(n);
                s && ("email" !== n && "phone" !== n || (e = m.Locale.text.Dt(m.Locale)("chat", "chat_header_ongoing_channel_continue_" + n)), t.push({
                    name: n,
                    format: e,
                    link: s
                }))
            }
            return t
        }, _.prototype.cv = function() {
            var t, i, n, e, s, c, a, r, o = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                !0 === m.Action.is_chat_visible() && (r = !0 === m.Base.Gl() ? (this.dv = this.vv, this.pv = this.yv, this.mv) : !0 === m.Base.Kl() ? (this.dv = this._v, this.pv = this.gv, this.wv) : (this.dv = this.bv, this.pv = this.kv, this.xv), "helpdesk" === m.Store.$store.chat.mode && m.Store.$store.chat.helpdesk_viewer.url && (t = parseInt(window.getComputedStyle(m.Chat.Selector.yd).bottom.replace("px", ""), 10), this.pv = r, this.dv = window.innerHeight - t - m.Chat.Selector.get("header").offsetHeight - this.$v), m.Base.kh(), !0 === m.Base.Qc() && (this.dv = window.innerHeight, this.pv = window.innerWidth, window.visualViewport && (this.dv = window.visualViewport.height + window.visualViewport.offsetTop), this.dv -= m.Chat.Selector.get("header").offsetHeight), !0 !== m.Chat.Dc && !0 !== o || (i = "rtl" === m.Locale.direction() ? "right" : "left", n = "rtl" === m.Locale.direction() ? "left" : "right", e = parseInt(window.getComputedStyle(m.Chat.Selector.get("form_textarea_message"))[i].replace("px", ""), 10), s = parseInt(window.getComputedStyle(m.Chat.Selector.get("form_act"))[n].replace("px", ""), 10), c = this.pv - this.Fv - e - s - m.Chat.Selector.get("form_act").offsetWidth, m.Chat.Selector.yd.style.setProperty("width", this.pv + "px", "important"), m.Chat.Selector.get("content").style.setProperty("height", this.dv + "px", "important"), m.Chat.Selector.get("form_textarea_message").style.setProperty("width", c + "px", "important"), this.ld = m.Chat.Selector.get("flow").offsetHeight, this.sd = m.Chat.Selector.get("form_textarea_message").offsetWidth, 0 === this.od && (this.od = m.Chat.Selector.get("form_container").offsetHeight), 0 === this.hd && (a = window.getComputedStyle(m.Chat.Selector.get("form_textarea_message")).lineHeight || "", this.hd = parseInt(a.replace("px", ""), 10)), m.Chat.Scroll.Ev = this.ld, m.Base.Qc() && !0 === this.dd() ? m.Chat.Viewport.jv() : m.Chat.Viewport.zv(), m.Chat.Selector.get("form_textarea_message").dispatchEvent(new window.KeyboardEvent("keyup"))), m.Sound.allow(!m.Base.Gh()))
            } catch (t) {}
        }, _.prototype.uv = function(t) {
            var i = this;
            try {
                null !== this.lv && m.Utility.clear_timeout(this.lv), this.lv = m.Utility.set_timeout(function() {
                    i.lv = null, m.Chat.State.propagate("scroll", t)
                }, this.Cv)
            } catch (t) {}
        }, _.prototype.Jd = function() {
            var t, i, n = this,
                e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                !0 === m.Base.Gh() && window.scroll && !0 === e ? -1 === this.av && (this.av = window.scrollY, (t = document.querySelector("html")) && t.classList.add("cc-f079"), window.scroll(window.scrollX, 0), i = 0, m.Utility.add_event_listener(this.ns, "document", "touchstart", function(t) {
                    t.changedTouches && t.changedTouches[0] && (i = t.changedTouches[0].pageY)
                }), m.Utility.add_event_listener(this.ns, "document", "touchmove", function(t) {
                    document.activeElement && t.changedTouches && t.changedTouches[0] && ("input" !== document.activeElement.tagName && "textarea" !== document.activeElement.tagName || t.preventDefault(), t = t.changedTouches[0].pageY || 0, Math.abs(t - i) > n.hv && document.activeElement.blur())
                }, {
                    passive: !1,
                    capture: !0
                })) : this.bh(!0)
            } catch (t) {}
        }, _.prototype.Pd = function() {
            var t = this;
            try {
                this.rv = (!window.hasFocus || window.hasFocus()) && !0, m.Utility.add_event_listener(this.ns, "window", "focus", function() {
                    t.rv = !0, t.Mf()
                }, {
                    capture: !1
                }), m.Utility.add_event_listener(this.ns, "window", "blur", function() {
                    t.rv = !1, t.Mf()
                }, {
                    capture: !1
                })
            } catch (t) {}
        }, _.prototype.Xd = function() {
            try {
                this.Vd = !1, m.Store.$store.chat.is_opened = !1
            } catch (t) {}
        }, _.prototype.ot = function() {
            try {
                this.Vd = !0, this.ld = 0, this.od = 0, this.sd = 0, this.hd = 0, this.Av = 40, this.Kd = null, this.Wd = null, this.pv = 0, this.dv = 0, this.av = -1, this.lv = null, this.rv = !0
            } catch (t) {}
        }, new _), m.Chat.Message = (y.prototype.init = function() {
            try {
                this.Sv()
            } catch (t) {}
        }, y.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, y.prototype.send = function() {
            var t;
            try {
                !0 !== this.qf() || (t = (t = m.Action.get_message_text()).trim()) && (m.Action.do_message_send("text", t), m.Action.set_message_text(""), m.Chat.Selector.get("form_textarea_message").dispatchEvent(new window.KeyboardEvent("keyup")))
            } catch (t) {}
        }, y.prototype.received = function(t) {
            var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                e = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
            try {
                var c = this.Iv(t);
                !0 === i && !1 === m.Chat.Interface.Yd() && m.Sound.start("events", "chat-message-receive"), !0 === n && !0 === c && this.qv(t.fingerprint), t.user && -1 === this.Ov.indexOf(t.user.source) && m.Chat.Misc.Dv(t.user), !1 === s && m.Chat.Game.Bf(), this.Rv && 0 < t.timestamp && this.Rv < t.timestamp && this.Yo(), !0 === e && m.Utility.next_render(function() {
                    m.Chat.Scroll.Bv("from")
                })
            } catch (t) {}
        }, y.prototype.sent = function(t) {
            var i, n, e, s, c = this;
            try {
                t.from = "user", !0 === this.Iv(t) && this.qv(t.fingerprint), this.Nv(t.fingerprint), m.Chat.Intent.Yu.identity || !1 === m.Chat.Intent.Yu.identity || (i = m.Action.get_user_email(), n = m.Action.get_user_phone(), e = m.Base.vc.chat.email_visitors, s = m.Base.vc.chat.phone_visitors, (i || !0 !== e) && (n || !0 !== s) || i || n ? m.Chat.Alert.ya("wait_reply", "show") : (null !== this.Mv && m.Utility.clear_timeout(this.Mv), this.Mv = m.Utility.set_timeout(function() {
                    c.Mv = null;
                    var t = "default";
                    !1 === (e && s) && (!0 === e ? t = "email" : !0 === s && (t = "phone")), m.Chat.Intent.ya("identity", t), m.Chat.Alert.ya("warn_reply", "show")
                }, this.Tv))), m.Utility.next_render(function() {
                    m.Chat.Scroll.Bv("to")
                })
            } catch (t) {}
        }, y.prototype.sent_acknowledgement = function(t) {
            try {
                var i = this.Uv.indexOf(t.fingerprint); - 1 !== i && this.Uv.splice(i, 1), this.Iv(t), this.Pv(), m.Utility.next_render(function() {
                    m.Chat.Scroll.Bv("to")
                })
            } catch (t) {}
        }, y.prototype.history = function(t) {
            try {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    this.Iv(n), "user" === n.from && !0 === n.read && this.Lv.push(n.fingerprint)
                }
                this.Jv()
            } catch (t) {}
        }, y.prototype.removed = function(t) {
            try {
                this.Vv(t.fingerprint)
            } catch (t) {}
        }, y.prototype.Wv = function() {
            try {
                var t = m.Locale.text("theme_welcome", ["default_chat", m.Base.vc.chat.theme_welcome + "_chat"], [m.Base.vc.website.name]);
                this.Hv("welcome", "default", "text", t, !1, !1)
            } catch (t) {}
        }, y.prototype.uf = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                for (var i = "**" + m.Locale.text("chat", "chat_message_text_identity_main") + "**\n_" + m.Locale.text("chat", "chat_message_text_identity_ask") + "_", n = [], e = 0; e < this.Kv.length; e++) {
                    var s = this.Kv[e],
                        c = this.Gv[e];
                    !0 === m.Base.vc.chat[s + "_visitors"] && n.push({
                        value: s,
                        icon: c,
                        selected: !1,
                        label: m.Locale.text("chat", "chat_message_text_identity_pick_" + s),
                        handler: function(t) {
                            return function() {
                                m.Chat.Intent.ya("identity", t)
                            }
                        }(s)
                    })
                }
                0 < n.length && this.Hv("identity", "default", "picker", {
                    id: "ask-identity",
                    text: i,
                    choices: n
                }, t, t)
            } catch (t) {}
        }, y.prototype.df = function() {
            try {
                this.Yv("identity")
            } catch (t) {}
        }, y.prototype.ff = function(i) {
            var t, n, e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            try {
                -1 !== this.Kv.indexOf(i) && (t = "chat_message_text_identity_ask_" + i, n = "chat_message_text_identity_ask_field_" + i, this.Hv("identity", i, "field", {
                    id: "identity-" + i,
                    text: "_" + m.Locale.text("chat", t) + "_",
                    explain: m.Locale.text("chat", n),
                    previous: "identity",
                    handler: function(t) {
                        try {
                            m.Action["set_user_" + i](t)
                        } catch (t) {}
                    }
                }, e, e))
            } catch (t) {}
        }, y.prototype.pf = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                var i = "**" + m.Locale.text("chat", "chat_message_text_game_main") + "**\n_" + m.Locale.text("chat", "chat_message_text_game_ask") + "_";
                this.Hv("game", "default", "picker", {
                    id: "ask-game",
                    text: i,
                    choices: [{
                        value: "play",
                        icon: "🕹️",
                        selected: !1,
                        label: m.Locale.text("chat", "chat_message_text_game_pick_yes"),
                        handler: function() {
                            m.Chat.Game.Id(), m.Chat.Intent.ya("game", !1)
                        }
                    }, {
                        value: "ignore",
                        selected: !1,
                        label: m.Locale.text("chat", "chat_message_text_game_pick_no"),
                        handler: function() {
                            m.Chat.Intent.ya("game", !1)
                        }
                    }]
                }, t, t)
            } catch (t) {}
        }, y.prototype.yf = function() {
            try {
                this.Yv("game")
            } catch (t) {}
        }, y.prototype.gf = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                var i = "**" + m.Locale.text("chat", "chat_message_text_feedback_main") + "**\n_" + m.Locale.text("chat", "chat_message_text_feedback_ask") + "_";
                this.Hv("feedback", "default", "picker", {
                    id: "ask-feedback",
                    text: i,
                    choices: [{
                        value: "rate",
                        icon: "⭐️",
                        selected: !1,
                        label: m.Locale.text("chat", "chat_message_text_feedback_pick_rate"),
                        handler: function() {
                            m.Chat.Feedback.Ff(), m.Chat.Intent.ya("feedback", "rate")
                        }
                    }, {
                        value: "ignore",
                        selected: !1,
                        label: m.Locale.text("chat", "chat_message_text_feedback_pick_ignore"),
                        handler: function() {
                            m.Chat.Intent.ya("feedback", !1)
                        }
                    }]
                }, t, t)
            } catch (t) {}
        }, y.prototype.wf = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            try {
                var i = m.Locale.text("chat", "chat_message_text_feedback_submitted");
                this.Hv("feedback", "submitted", "text", i, t, t)
            } catch (t) {}
        }, y.prototype.bf = function() {
            try {
                this.Yv("feedback")
            } catch (t) {}
        }, y.prototype.Go = function(t) {
            try {
                var i = m.Store.$store.messages.is_composing || !1;
                this.Rv = t, (m.Store.$store.messages.is_composing = !0) !== i && (this.Zv(), m.Utility.next_render(function() {
                    m.Chat.Scroll.Bv(null)
                }))
            } catch (t) {}
        }, y.prototype.Yo = function() {
            try {
                m.Store.$store.messages.is_composing = !1, this.Rv = null
            } catch (t) {}
        }, y.prototype.Ko = function(t) {
            try {
                if (!0 !== m.Base.vc.chat.operator_privacy) {
                    var i = null;
                    if (0 < t.length)
                        for (var n = 0; n < m.Store.$store.messages.list.length; n++) {
                            var e = m.Store.$store.messages.list[n].fingerprint; - 1 !== t.indexOf(e) && (m.Store.$store.messages.list[n].read = !0, i = e)
                        }
                    null !== i && (m.Store.$store.messages.latest_fingerprint = i)
                }
            } catch (t) {}
        }, y.prototype.Jc = function() {
            var t = !1;
            try {
                for (var i = [], n = m.Library.crisp.client.Message.get_cached_messages(), e = n.length - 1; 0 <= e && "local" === (n[e].user || {}).source; e--) i.push(n[e]);
                for (var s = 0; s < i.length; s++) {
                    var c = i[s]; - 1 === this.Xv.indexOf(c.fingerprint) && (this.Xv.push(c.fingerprint), m.Library.crisp.client.Message.receive_message_mirror(c.type, this.Qv, c.content, c.fingerprint), t = !0)
                }
            } catch (t) {} finally {
                return t
            }
        }, y.prototype.Hc = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                e = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
            try {
                var s = m.Base.vc.website.active_operators || [],
                    c = {
                        source: "local"
                    };
                s[0] && !0 !== e ? (c.user_id = s[0].user_id, c.nickname = s[0].nickname, s[0].avatar && (c.avatar = s[0].avatar)) : (c.type = "website", c.user_id = m.Base.Dh, c.nickname = m.Base.vc.website.name), m.Library.crisp.client.Message.receive_message_local(t, i, c, n)
            } catch (t) {}
        }, y.prototype.Rf = function(t) {
            try {
                for (var i = 0; i < m.Store.$store.messages.list.length; i++)
                    if (m.Store.$store.messages.list[i].fingerprint === t) {
                        m.Store.$store.messages.list.splice(i, 1), delete m.Store.$store.messages.fingerprints[t];
                        break
                    }
            } catch (t) {}
        }, y.prototype.Wu = function() {
            try {
                m.Chat.Message.Wv(), this.Uo()
            } catch (t) {}
        }, y.prototype.Uo = function() {
            try {
                m.Library.crisp.client.Message.get_message_compose(), m.Library.crisp.client.Message.get_unread_messages(), m.Library.crisp.client.Message.get_message_history(), 0 === m.Library.crisp.client.Message.count_message_history() && this.Jv()
            } catch (t) {}
        }, y.prototype.tp = function(t) {
            var i = null;
            try {
                for (var n = 0; n < m.Store.$store.messages.list.length; n++)
                    if (m.Store.$store.messages.list[n].fingerprint === t) {
                        i = m.Store.$store.messages.list[n];
                        break
                    }
            } catch (t) {} finally {
                return i
            }
        }, y.prototype.qf = function() {
            var t = !0;
            try {
                !0 !== m.Broker.Io && (t = !1, m.Library.crisp.client.socket.connect())
            } catch (t) {} finally {
                return t
            }
        }, y.prototype.ef = function() {
            try {
                !0 === m.Base.vc.chat.force_identify && (m.Store.$store.chat.is_locked_identify = !0)
            } catch (t) {}
        }, y.prototype.sf = function() {
            try {
                "true" !== m.Chat.Selector.get("form_container").getAttribute("data-retain-lock") && (m.Store.$store.chat.is_locked_identify = !1)
            } catch (t) {}
        }, y.prototype.ip = function(t, i, n) {
            try {
                if (!0 === this.np.includes(t) && !0 === i.required) {
                    var e = !1;
                    switch (t) {
                        case "field":
                            i.value && (e = !0);
                            break;
                        case "picker":
                            for (var s = 0; s < i.choices.length; s++)
                                if (!0 === i.choices[s].selected) {
                                    e = !0;
                                    break
                                }
                    }
                    var c = m.Store.$store.messages.prompt_fingerprints.indexOf(n);
                    !1 === e ? -1 === c && m.Store.$store.messages.prompt_fingerprints.push(n) : -1 < c && m.Store.$store.messages.prompt_fingerprints.splice(c, 1), m.Store.$store.chat.is_locked_prompt = 0 < m.Store.$store.messages.prompt_fingerprints.length
                }
            } catch (t) {}
        }, y.prototype.ep = function(t, i, n) {
            var e;
            try {
                !0 !== this.np.includes(t) || !0 !== i.required || -1 < (e = m.Store.$store.messages.prompt_fingerprints.indexOf(n)) && (m.Store.$store.messages.prompt_fingerprints.splice(e, 1), 0 === m.Store.$store.messages.prompt_fingerprints.length && (m.Store.$store.chat.is_locked_prompt = !1))
            } catch (t) {}
        }, y.prototype.Zv = function() {
            var t = this;
            try {
                this.Rv && (m.Date.timestamp() - this.Rv >= this.sp ? this.Yo() : m.Utility.set_timeout(function() {
                    t.Zv()
                }, this.cp))
            } catch (t) {}
        }, y.prototype.Iv = function(t) {
            var i = !0;
            try {
                var n = m.Utility.clone(t);
                if (1 == (i = !m.Store.$store.messages.fingerprints[n.fingerprint])) void 0 === n.read && (n.read = !1), void 0 === n.metas && (n.metas = {
                    is_new: !1,
                    has_error: !1
                }, "field" !== n.type && "picker" !== n.type || (n.metas.field = {
                    value: ""
                })), m.Store.$store.messages.fingerprints[n.fingerprint] = !0, m.Store.$store.messages.list.push(n);
                else
                    for (var e = 0; e < m.Store.$store.messages.list.length; e++)
                        if (m.Store.$store.messages.list[e].fingerprint === n.fingerprint) {
                            m.Utility.merge(m.Store.$store.messages.list[e], n);
                            break
                        }
                this.ap(n.type, n.content, n.fingerprint, n.from, n.user || {}, n.timestamp)
            } catch (t) {} finally {
                return i
            }
        }, y.prototype.Vv = function(t) {
            var i = !1;
            try {
                if (!0 === m.Store.$store.messages.fingerprints[t]) {
                    delete m.Store.$store.messages.fingerprints[t];
                    var n, e = {
                        messages: m.Store.$store.messages.list,
                        preview: m.Store.$store.messages.preview
                    };
                    for (n in e) {
                        var s = e[n];
                        if (0 < s.length)
                            for (var c = 0; c < s.length; c++) {
                                var a = s[c];
                                if (a.fingerprint === t) {
                                    s.splice(c, 1), this.rp(a.type, a.content, a.fingerprint, a.from, a.timestamp);
                                    break
                                }
                            }
                    }
                    i = !0
                }
            } catch (t) {} finally {
                return i
            }
        }, y.prototype.ap = function(t, i, n, e, s, c) {
            try {
                var a = "local" !== s.source && -1 === this.Ov.indexOf(s.source) && !0;
                "operator" === e && (this.Rv && 0 < c && c > this.Rv && this.Yo(), 0 < c && 1 == a && (m.Chat.Alert.ya("wait_reply", "lock"), m.Chat.Intent.ya("game", !1), this.ip(t, i, n))), 0 < c && (this.Kh = !0, this.au = c, 1 == a && ("operator" === e ? this.ia = !0 : this.ta = !0), this.op()), !1 === m.Store.$store.base.has_local_messages && "local" === s.source && (m.Store.$store.base.has_local_messages = !0)
            } catch (t) {}
        }, y.prototype.rp = function(t, i, n, e, s) {
            try {
                "operator" === e && 0 < s && this.ep(t, i, n)
            } catch (t) {}
        }, y.prototype.op = function() {
            try {
                var t, i = !0 === this.Kh && !0 !== m.Base.nu();
                m.Store.$store.base.is_activity_ongoing !== i && (m.Store.$store.base.is_activity_ongoing = i, "input" !== (t = ((document.activeElement || {}).tagName || "").toLowerCase()) && "textarea" !== t && m.Chat.Interface.Mc())
            } catch (t) {}
        }, y.prototype.qv = function(t) {
            try {
                var i = this.tp(t);
                i.metas.is_new = !0, m.Utility.set_timeout(function() {
                    i.metas.is_new = !1
                }, this.hp)
            } catch (t) {}
        }, y.prototype.Jv = function() {
            try {
                this.lp = !0, 0 < this.Lv.length && (this.Ko(this.Lv, !0), this.Lv = []), m.Chat.State.up("intent"), m.Chat.State.up("scroll"), m.Chat.Field.Gu(), this.Pv(!0)
            } catch (t) {}
        }, y.prototype.Sv = function() {
            try {
                m.Library.crisp.client.Message.set_unread_messages_callback(function(t, i, n) {
                    m.Utility.set_timeout(function() {
                        m.Chat.Notification.fp(t, i, n)
                    }, 0)
                })
            } catch (t) {}
        }, y.prototype.Nv = function(n) {
            var e = this;
            try {
                this.Uv.push(n), m.Utility.set_timeout(function() {
                    try {
                        var t, i = e.Uv.indexOf(n); - 1 === i || (t = e.tp(n)) && (t.metas.has_error = !0), e.Uv.splice(i, 1)
                    } catch (t) {}
                }, this.dp)
            } catch (t) {}
        }, y.prototype.Pv = function() {
            var t = this,
                i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            try {
                m.Chat.Intent.Yu.game || !1 === m.Chat.Intent.Yu.game || !0 !== this.ta || !0 === this.ia || null === this.vp && (this.vp = m.Utility.set_timeout(function() {
                    try {
                        !(t.vp = null) !== t.ia && !0 === m.Base.vc.chat.wait_game && m.Chat.Intent.ya("game")
                    } catch (t) {}
                }, !0 === i ? this.pp : this.yp))
            } catch (t) {}
        }, y.prototype.Hv = function(t, i, n, e) {
            var s, c = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                a = !(5 < arguments.length && void 0 !== arguments[5]) || arguments[5];
            try {
                if (-1 === this.Ov.indexOf(t)) throw new Error("Source " + t + " not allowed");
                this.mp[t] !== i && (this.mp[t] = i, s = (new Date).getTime(), "welcome" === t && (s = 0), this.received({
                    type: n,
                    timestamp: s,
                    content: e,
                    fingerprint: "$" + t,
                    from: "operator",
                    user: {
                        source: t,
                        type: "website",
                        user_id: m.Base.Dh,
                        nickname: m.Base.vc.website.name
                    }
                }, !1, c, a, !0))
            } catch (t) {}
        }, y.prototype.Yv = function(t) {
            try {
                if (-1 === this.Ov.indexOf(t)) throw new Error("Source " + t + " not allowed");
                this.mp[t] && (delete this.mp[t], this.Rf("$" + t))
            } catch (t) {}
        }, y.prototype.ot = function() {
            try {
                this.Kh = !1, this.ia = !1, this.ta = !1, this.lp = !1, this.au = 0, this.Uv = [], this.Lv = [], this.Xv = [], this.Mv = null, this.vp = null, this.Rv = null, this.mp = {}
            } catch (t) {}
        }, new y), m.Chat.Misc = (p.prototype.init = function() {}, p.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, p.prototype.Dv = function(t) {
            try {
                m.Utility.is_equal(t, this._p) || m.Chat.State.propagate("operator", t)
            } catch (t) {}
        }, p.prototype.ot = function() {
            try {
                this._p = {}
            } catch (t) {}
        }, new p), m.Chat.Notification = (v.prototype.init = function() {}, v.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, v.prototype.fp = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                i = this,
                n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
            try {
                var s, c = m.Store.$store.minimized.tooltips;
                0 < (this.ea = t) ? (m.Store.$store.minimized.pane.unread.count = t, s = !1 === m.Store.$store.minimized.tooltips.new_messages.visible, this.gp(t, n, e, s), null === this.wp && (this.wp = document.title), this.wp && !0 !== m.Base.Vh() && (document.title = "💬" + t + " - " + this.wp), 1 == s && (null !== this.bp && m.Utility.clear_timeout(this.bp), this.bp = m.Utility.set_timeout(function() {
                    i.bp = null, c.new_messages.visible = !0, c.new_messages.animate = !0, m.Utility.set_timeout(function() {
                        c.new_messages.animate = !1
                    }, i.kp)
                }, this.xp * this.Da), m.Store.$store.minimized.pane.unread.visible = !0)) : (null !== this.bp && m.Utility.clear_timeout(this.bp), c.new_messages.visible = !1, c.new_messages.animate = !1, m.Store.$store.minimized.pane.unread.visible = !1, this.wp && (document.title = this.wp))
            } catch (t) {}
        }, v.prototype.$p = function() {
            try {
                var t = m.Chat.Selector.get("flow").scrollTop,
                    i = m.Chat.Selector.get("flow").scrollHeight;
                m.Chat.Selector.get("flow").clientHeight + t >= i - m.Chat.Interface.Av && m.Chat.Alert.ya("new_messages", "hide")
            } catch (t) {}
        }, v.prototype.gp = function(t, i, n, e) {
            var s = [];
            try {
                for (var c = null, a = [], r = n.length - 1; 0 <= r && !(-1 !== i.indexOf(n[r].fingerprint) && (s.unshift(n[r]), s.length >= this.Fp)); r--);
                m.Store.$store.messages.preview = [];
                for (var o = 0; o < s.length; o++) {
                    var h = s[o],
                        l = m.Utility.clone(h); - 1 !== this.Ep.indexOf(h.type) && m.Store.$store.messages.preview.push(l), null === (c = o === s.length - 1 && null === c ? l.fingerprint : c) && null !== this.jp || a.push(l)
                }
                null !== c && (this.jp = c);
                for (var u = 0; u < a.length; u++) a[u].animate = !0;
                m.Utility.set_timeout(function() {
                    for (var t = 0; t < a.length; t++) a[t].animate = !1
                }, (!0 === e ? this.xp * this.Da : 0) + this.zp)
            } catch (t) {} finally {
                return s
            }
        }, v.prototype.ot = function() {
            try {
                this.ea = 0, this.Da = 1e3, this.xp = .1, this.bp = null, this.jp = null, this.wp = null, this.kp = 500, this.zp = 1e3
            } catch (t) {}
        }, new v), m.Chat.Scroll = (d.prototype.init = function() {}, d.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, d.prototype.Hf = function() {
            var t, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            try {
                null === i && (i = (t = m.Chat.Selector.get("flow")).scrollHeight - t.clientHeight), m.Chat.State.propagate("scroll", i), m.Chat.Notification.$p()
            } catch (t) {}
        }, d.prototype.Bv = function() {
            var t, i, n, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "to",
                s = !1;
            try {
                !0 === m.Chat.Interface.dd() && !0 === m.Chat.Message.lp && (t = m.Chat.Selector.get("flow").scrollTop, i = m.Chat.Selector.get("flow").scrollHeight, n = m.Chat.Selector.get("flow").clientHeight, (!t || n + t >= i - this.Ev) && (s = !0, this.Hf()), !1 === s && "from" === e && !1 === m.Chat.Alert.Zu("warn_reply") && !1 === m.Chat.Alert.Zu("email_invalid") && !1 === m.Chat.Alert.Zu("wait_reply") && m.Chat.Alert.ya("new_messages", "show"))
            } catch (t) {} finally {
                return s
            }
        }, d.prototype.If = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "scrollTop";
            try {
                var e, s, c = t.target;
                c && "number" == typeof t.wheelDelta && ((s = null) !== (s = !0 === c.classList.contains(i) ? c : c.closest("." + i) || null) && (e = s[n] - t.wheelDelta, s[n] = 0 <= e ? e : 0), t.stopPropagation(), t.preventDefault(), t.returnValue = !1)
            } catch (t) {}
        }, d.prototype.ot = function() {
            try {
                this.Ev = 0, this.ov = 0
            } catch (t) {}
        }, new d), m.Chat.Selector = (f.prototype.init = function() {}, f.prototype.reset = function() {
            try {
                this.ot(), this.Pl()
            } catch (t) {}
        }, f.prototype.get = function(t) {
            var i = null;
            try {
                if (void 0 !== this.Cp[t]) i = this.Cp[t];
                else {
                    if (void 0 === this.Ap[t]) throw new Error("Selector with namespace " + t + " not found");
                    if (this.vd) {
                        if (null === (i = this.vd.querySelector("." + this.Ap[t]))) throw new Error("Could not select the element with namespace: " + t);
                        this.Cp[t] = i
                    }
                }
            } catch (t) {} finally {
                return i
            }
        }, f.prototype.Ru = function() {
            try {
                this.Sp(), this.Ip()
            } catch (t) {}
        }, f.prototype.Sp = function() {
            try {
                this.qp = document.querySelector('head meta[name="viewport"]')
            } catch (t) {}
        }, f.prototype.Ip = function() {
            try {
                this.yd = this.vd.querySelector(".cc-1hqb")
            } catch (t) {}
        }, f.prototype.Pl = function() {
            try {
                this.qp = null, this.vd = null, this.yd = null
            } catch (t) {}
        }, f.prototype.ot = function() {
            try {
                this.Cp = {}
            } catch (t) {}
        }, new f), m.Chat.Speech = (u.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, u.prototype.Jf = function() {
            var e = this;
            try {
                !0 === m.Feature.has_audio_recording() && !0 === m.Base.vc.chat.file_transfer && null === this.Op && navigator.mediaDevices.getUserMedia({
                    audio: !0,
                    video: !1
                }).then(function(t) {
                    for (var i = 0; i < e.Dp.length; i++) {
                        var n = e.Dp[i];
                        if (!0 === window.MediaRecorder.isTypeSupported(n[1])) {
                            e.Rp = n[0], e.Bp = n[1];
                            break
                        }
                    }
                    if (null === e.Rp || null === e.Bp) throw new Error("No acceptable audio codec supported");
                    e.Op = new window.MediaRecorder(t, {
                        mimeType: e.Bp,
                        audioBitsPerSecond: e.Np
                    }), e.Op.addEventListener("start", e.Mp.Dt(e)), e.Op.addEventListener("stop", e.Tp.Dt(e)), e.Op.addEventListener("resume", e.Up.Dt(e)), e.Op.addEventListener("pause", e.Pp.Dt(e)), e.Op.addEventListener("dataavailable", e.Lp.Dt(e)), e.Op.addEventListener("error", e.Jp.Dt(e)), e.Op.start()
                }).catch(function(t) {
                    alert(m.Locale.text("chat", "chat_form_speech_capture_error"))
                })
            } catch (t) {}
        }, u.prototype.Vf = function() {
            try {
                null !== this.Op && !0 !== this.Vp && (this.Vp = !0, this.Wp = !0, this.Op.stop())
            } catch (t) {}
        }, u.prototype.Wf = function() {
            try {
                null !== this.Op && !0 !== this.Vp && (this.Vp = !0, this.Op.stop())
            } catch (t) {}
        }, u.prototype.Mp = function() {
            try {
                this.Hp = 0, this.Kp = 0, m.Store.$store.chat.speech.duration = this.Hp, m.Store.$store.chat.speech.progress = this.Kp, this.Up()
            } catch (t) {}
        }, u.prototype.Tp = function() {
            var t, i;
            try {
                m.Store.$store.chat.speech.state = "none", this.Gp(), !0 !== this.Wp && (t = m.Date.timestamp(), (i = new window.File(this.Yp, "audio_" + t + "." + this.Rp, {
                    type: this.Bp.split(";")[0].trim(),
                    lastModified: t
                })).duration = this.Hp, !0 === m.Base.vc.chat.file_transfer && m.Chat.File.Pf([i]));
                for (var n = this.Op.stream.getTracks(), e = 0; e < n.length; e++) n[e].stop();
                this.ot()
            } catch (t) {}
        }, u.prototype.Pp = function() {
            try {
                this.Gp(), m.Store.$store.chat.speech.state = "paused"
            } catch (t) {}
        }, u.prototype.Up = function() {
            try {
                m.Store.$store.chat.speech.state = "recording", this.Zp()
            } catch (t) {}
        }, u.prototype.Lp = function(t) {
            try {
                0 < t.data.size && this.Yp.push(t.data)
            } catch (t) {}
        }, u.prototype.Jp = function(t) {
            try {
                alert(m.Locale.text("chat", "chat_form_speech_capture_error"))
            } catch (t) {}
        }, u.prototype.Zp = function() {
            var t, i = this;
            try {
                null === this.Xp && (t = this.Qp / this.Da, this.Xp = m.Utility.set_interval(function() {
                    i.Hp >= t ? i.Op.pause() : (i.Hp++, i.Kp = Math.floor(100 * Math.min(i.Hp / t, 1)), m.Store.$store.chat.speech.duration = i.Hp, m.Store.$store.chat.speech.progress = i.Kp)
                }, this.Da))
            } catch (t) {}
        }, u.prototype.Gp = function() {
            try {
                null !== this.Xp && (m.Utility.clear_interval(this.Xp), this.Xp = null)
            } catch (t) {}
        }, u.prototype.ot = function() {
            try {
                this.Op = null, this.Yp = [], this.Hp = 0, this.Kp = 0, this.Rp = null, this.Bp = null, this.Vp = !1, this.Wp = !1, this.Xp = null
            } catch (t) {}
        }, new u), m.Chat.State = (l.prototype.init = function() {}, l.prototype.reset = function(t) {
            var i = this;
            try {
                this.ot(), t.push(function() {
                    i.t0()
                })
            } catch (t) {}
        }, l.prototype.receive = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                var n = void 0,
                    e = void 0,
                    s = [];
                for (n in t) t.hasOwnProperty(n) && (m.Utility.is_equal(t[n], this.i0[n]) || (s.push(n), this.i0[n] = t[n], !1 === i && void 0 !== this.n0[n] && delete this.n0[n]));
                for (e = 0; e < s.length; e++) n = s[e], this.e0[n].Dt(this)(this.i0[n])
            } catch (t) {}
        }, l.prototype.propagate = function(t, i) {
            var n, e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                s = this,
                c = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : function() {};
            try {
                !0 !== e && m.Utility.is_equal(this.i0[t], i) ? "function" == typeof c && c(!1) : (this.n0[t] = i, null !== this.s0 && (m.Utility.clear_timeout(this.s0), this.s0 = null), (n = m.Utility.clone(this.i0))[t] = i, this.receive(n, !0), this.s0 = m.Utility.set_timeout(function() {
                    var t;
                    m.Utility.is_empty(s.n0) ? "function" == typeof c && c(!1) : (t = m.Utility.clone(s.n0), s.n0 = {}, s.s0 = null, m.Library.crisp.client.Session.set_state(t, function(t) {
                        t ? "function" == typeof a && a() : "function" == typeof c && c(!0)
                    }))
                }, this.c0))
            } catch (t) {}
        }, l.prototype.Wu = function(t) {
            try {
                for (var i in !0 === m.Base.Qc() && !0 !== m.Base.Ol.lock_maximized && (t.maximized = !1), this.a0) void 0 === t[i] && (t[i] = this.a0[i]);
                this.r0 = !0, this.i0 = t, this.o0 = m.Utility.keys(this.i0)
            } catch (t) {}
        }, l.prototype.up = function(t) {
            try {
                this.l0(t, this.a0[t])
            } catch (t) {}
        }, l.prototype.Qd = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            try {
                var i = void 0;
                for (i in this.a0) this.a0.hasOwnProperty(i) && this.l0(i, this.a0[i], -1 !== t.indexOf(i))
            } catch (t) {}
        }, l.prototype.l0 = function(t, i) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            try {
                if ("function" != typeof this.e0[t]) throw new Error("No such state handler: " + t);
                void 0 === this.i0[t] && (this.i0[t] = i), this.e0[t].Dt(this)(this.i0[t], n)
            } catch (t) {}
        }, l.prototype.u0 = function(t) {
            var i = !1;
            try {
                var n = this.o0.indexOf(t); - 1 !== n && (this.o0.splice(n, 1), i = !0)
            } catch (t) {} finally {
                return i
            }
        }, l.prototype.f0 = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                if (!1 === i && (this.u0("trigger"), t && 0 < t.length))
                    for (var n = 0; n < t.length; n++) m.Trigger.Ih(t[n])
            } catch (t) {}
        }, l.prototype.d0 = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                if (!1 === i) {
                    this.u0("alert");
                    var n, e, s, c = void 0,
                        a = void 0,
                        r = void 0,
                        o = [
                            ["show", "unlock"],
                            ["unlock", "show"],
                            ["hide", "lock"],
                            ["lock", "hide"],
                            ["lock", "show"]
                        ];
                    for (a in t)
                        if (t.hasOwnProperty(a)) {
                            if (n = t[a], e = m.Chat.Alert.Yu[a], c = !1, e === n) c = !0;
                            else if ("unlock" !== n && "lock" === e) c = !0;
                            else
                                for (r = 0; r < o.length; r++) e === (s = o[r])[0] && n === s[1] && (c = !0);
                            if (!1 === c) {
                                if ("show" === n || "unlock" === n) m.Store.$store.chat.current_alert = a, m.Chat.Alert.Xu("show", a);
                                else {
                                    if ("hide" !== n && "lock" !== n) throw new Error("Unknown action: " + n);
                                    m.Store.$store.chat.current_alert === a && (m.Store.$store.chat.current_alert = ""), m.Chat.Alert.Xu("hide", a)
                                }
                                m.Chat.Alert.Yu[a] = n, m.Chat.Field.Gu()
                            } else m.Chat.Alert.Yu[a] = n
                        }
                }
            } catch (t) {}
        }, l.prototype.v0 = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                if (m.Chat.Intent.Yu = t, !1 === i) {
                    var n = this.u0("intent"),
                        e = void 0;
                    for (e in t) m.Chat.Intent.rf(e, t[e], !n);
                    m.Chat.Intent.af(t)
                }
            } catch (t) {}
        }, l.prototype.p0 = function(t) {
            var i, n, e, s, c, a, r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                !1 === r && (this.u0("operator"), a = c = s = e = n = i = void 0, m.Chat.Misc._p = t || {}, m.Utility.is_empty(m.Chat.Misc._p) ? (i = "initial", e = "website", s = m.Base.Dh) : (i = "ongoing", e = t.type || "operator", s = t.user_id, c = t.avatar, n = "website" === t.type ? t.nickname : m.Library.crisp.web.Name.parse_first_name(t.nickname)), (a = c || s ? m.Avatar.url(this.y0, e, s, c) : a) && ("ongoing" === i && (m.Store.$store.chat.ongoing_operator = {
                    type: e,
                    name: n,
                    user_id: s,
                    url: a
                }, !0 === m.Base.vc.chat.ongoing_operator_face && (m.Store.$store.minimized.pane.is_ongoing = !0)), m.Store.$store.chat.status_marker = i), m.Chat.Interface.Mc(!0))
            } catch (t) {}
        }, l.prototype.m0 = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                !1 === i && !1 === this.u0("scroll") && (m.Chat.Scroll.ov = t, m.Utility.next_render(function() {
                    m.Chat.Selector.get("flow").scrollTop = m.Chat.Scroll.ov
                }))
            } catch (t) {}
        }, l.prototype._0 = function(t) {
            var i, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                !1 === n && (i = !0 !== this.u0("maximized") && !0, !1 === (t = !0 === m.Base.Ol.lock_maximized || t) ? (m.Chat.Interface.Ld("pane", i), m.Chat.Field.pd(), m.Chat.Viewport.zv(), m.Chat.Picker.$f(), m.Chat.Feedback.$f(), m.Chat.Interface.Nf(!1), m.Chat.Frame._close(), m.Chat.Game.Bf(), m.Action.ra("chat:closed")) : (m.Chat.Interface.Ld("chat", i), m.Chat.Field.Gu(), m.Chat.Viewport.jv(), m.Chat.Notification.$p(), m.Action.ra("chat:opened")))
            } catch (t) {}
        }, l.prototype.g0 = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                !1 === i && (this.u0("textarea"), m.Action.set_message_text(t))
            } catch (t) {}
        }, l.prototype.t0 = function() {
            try {
                this.a0 = {
                    trigger: m.Trigger.qh,
                    alert: m.Chat.Alert.Yu,
                    intent: m.Chat.Intent.Yu,
                    operator: m.Chat.Misc._p,
                    scroll: m.Chat.Scroll.ov,
                    maximized: m.Chat.Interface.Vd,
                    textarea: m.Chat.Field.gd
                }
            } catch (t) {}
        }, l.prototype.ot = function() {
            try {
                this.r0 = !1, this.i0 = {}, this.n0 = {}, this.o0 = [], this.s0 = null
            } catch (t) {}
        }, new l), m.Chat.Viewport = (h.prototype.init = function() {}, h.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, h.prototype.jv = function() {
            var t, i;
            try {
                !0 === m.Base.Qc() ? (!1 === this.w0 && (null === this.b0 && (this.b0 = this.et()), (t = m.Utility.clone(this.b0)).width = "device-width", t["initial-scale"] = "1", t["maximum-scale"] = "1", t["user-scalable"] = "0", i = this.k0(t), null !== m.Chat.Selector.qp ? m.Chat.Selector.qp.setAttribute("content", i) : (m.Chat.Selector.qp = m.Template.dom(m.Template.render("viewport", {
                    content: i
                })), document.querySelector("head").appendChild(m.Chat.Selector.qp))), this.w0 = !0) : this.w0 = !1
            } catch (t) {}
        }, h.prototype.zv = function() {
            var t;
            try {
                !0 === this.w0 && (null !== m.Chat.Selector.qp && 0 < m.Chat.Selector.qp.length && ((t = this.k0(this.b0)) ? m.Chat.Selector.qp.setAttribute("content", t) : (m.Chat.Selector.qp.remove(), m.Chat.Selector.qp = null)), this.w0 = !1)
            } catch (t) {}
        }, h.prototype.et = function() {
            var t = {};
            try {
                if (t = {}, null !== m.Chat.Selector.qp) {
                    var i = m.Chat.Selector.qp.getAttribute("content");
                    if (i = (i = i.trim()).replace(this.x0, ","))
                        for (var n, e, s = void 0, c = void 0, a = void 0, r = void 0, r = -1 !== i.indexOf(",") ? i.split(",") : [i], s = 0; s < r.length; s++) - 1 !== (c = r[s]).indexOf("=") && (n = (a = c.split("="))[0].trim(), e = a[1].trim(), n && e && (t[n] = e))
                }
            } catch (t) {} finally {
                return t
            }
        }, h.prototype.k0 = function(t) {
            var i = "";
            try {
                var n = void 0,
                    e = [];
                for (n in t) t.hasOwnProperty(n) && e.push([n, t[n]].join("="));
                i = e.join(", ")
            } catch (t) {} finally {
                return i
            }
        }, h.prototype.ot = function() {
            try {
                this.w0 = !1, this.b0 = null
            } catch (t) {}
        }, new h), m.Magnify = (o.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, o.prototype.Sf = function(t, i) {
            var n = this,
                e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            try {
                var c = document.querySelector(".cc-uxns"),
                    a = this.$0(-1 !== this.F0.indexOf(t) ? s : null);
                m.Utility.merge(m.Store.$store.magnify, {
                    state: "loading",
                    type: t,
                    source: i,
                    name: e,
                    messages: a
                });
                var r = m.Template.dom(m.Template.render("magnify"));
                this.E0 = r, c ? c.parentNode.replaceChild(this.E0, c) : m.Base.Xc.appendChild(r), m.Magnify.Event.Ru(), m.Template.vue(this.E0), m.Utility.set_timeout(function() {
                    n.E0.focus()
                }, this.j0)
            } catch (t) {}
        }, o.prototype.z0 = function() {
            try {
                this.E0 && this.E0.remove(), !0 === m.Chat.Dc && m.Chat.Field.Gu()
            } catch (t) {}
        }, o.prototype.C0 = function(t) {
            try {
                var i, n = m.Store.$store.magnify.messages[t];
                !n || !0 !== m.Chat.Dc || (i = m.Chat.Message.tp(n.fingerprint)) && this.Sf(n.type, i.content.url, i.content.name, i.fingerprint)
            } catch (t) {}
        }, o.prototype.$0 = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                i = {
                    previous: null,
                    next: null
                };
            try {
                if (null !== t && !isNaN(t))
                    for (var n = parseInt(t, 10), e = m.Library.crisp.client.Message.get_cached_messages(), s = 0; s < e.length; s++)
                        if (e[s].fingerprint === n) {
                            if (0 < s)
                                for (var c = s - 1; 0 <= c; c--) {
                                    var a = e[c],
                                        r = this.A0(a);
                                    if (r && a) {
                                        i.previous = {
                                            fingerprint: a.fingerprint,
                                            type: r
                                        };
                                        break
                                    }
                                }
                            if (s < e.length - 1)
                                for (var o = s + 1; o < e.length; o++) {
                                    var h = e[o],
                                        l = this.A0(h);
                                    if (l) {
                                        i.next = {
                                            fingerprint: h.fingerprint,
                                            type: l
                                        };
                                        break
                                    }
                                }
                            break
                        }
            } catch (t) {} finally {
                return i
            }
        }, o.prototype.A0 = function(t) {
            var i = null;
            try {
                var n = (t.content || {}).type || null;
                "file" === t.type && (!0 === this.ju.image.includes(n) && (i = "image"), !0 === this.ju.video.includes(n) && (i = "video"))
            } catch (t) {} finally {
                return i
            }
        }, o.prototype.ot = function() {
            try {
                this.E0 = null
            } catch (t) {}
        }, new o), m.Magnify.Event = (a.prototype.disappear_fuzzy = function(t) {
            try {
                t && t.target && !0 === t.target.classList.contains("cc-uxns") && m.Magnify.z0()
            } catch (t) {}
        }, a.prototype.disappear = function() {
            try {
                m.Magnify.z0()
            } catch (t) {}
        }, a.prototype.navigate_click = function(t) {
            try {
                m.Magnify.C0(t)
            } catch (t) {}
        }, a.prototype.keydown = function(t) {
            try {
                switch (t.keyCode) {
                    case 27:
                        m.Magnify.z0();
                        break;
                    case 37:
                        m.Magnify.C0("previous");
                        break;
                    case 39:
                        m.Magnify.C0("next")
                }
            } catch (t) {}
        }, a.prototype.Ru = function() {
            try {
                m.Store.Ec("magnify", this.ft, this)
            } catch (t) {}
        }, new a), m.Browsing = (c.prototype.reset = function() {
            try {
                m.Utility.reset_instance_children(m.Browsing), this.Pl()
            } catch (t) {}
        }, c.prototype.Pl = function() {
            try {
                this.S0 = null, this.I0 = null
            } catch (t) {}
        }, new c), m.Browsing.Assist = (s.prototype.reset = function() {
            try {
                this.stop(), this.Pl(), this.ot()
            } catch (t) {}
        }, s.prototype.start = function() {
            try {
                null === m.Browsing.I0 && (m.Browsing.I0 = this.q0, m.Browsing.S0 = m.Template.dom(m.Template.render("browsing_assist")), this.O0 = m.Browsing.S0.querySelector(".cc-trvs"), m.Base.Xc.appendChild(m.Browsing.S0), m.Template.vue(m.Browsing.S0))
            } catch (t) {}
        }, s.prototype.stop = function() {
            try {
                m.Browsing.I0 === this.q0 && (m.Browsing.I0 = null, m.Browsing.S0.remove(), m.Browsing.S0 = null, this.O0 = null)
            } catch (t) {}
        }, s.prototype.Qo = function(t) {
            try {
                m.Browsing.I0 === this.q0 && null !== this.O0 && t.mouse && (this.O0.style.setProperty("display", "inline-block", "important"), this.O0.style.setProperty("left", t.mouse.x + "px", "important"), this.O0.style.setProperty("top", t.mouse.y + "px", "important"))
            } catch (t) {}
        }, s.prototype.th = function(t) {
            var i = this;
            try {
                if (m.Browsing.I0 === this.q0 && t.scroll && window.scroll) {
                    null !== this.D0 && m.Utility.clear_interval(this.D0);
                    var n, e = {
                            x: window.scrollX,
                            y: window.scrollY
                        },
                        s = {
                            x: 0,
                            y: 0
                        };
                    for (n in s) s.hasOwnProperty(n) && (s[n] = (t.scroll[n] - e[n]) / this.R0);
                    var c = 0,
                        a = this.B0 / this.R0;
                    0 < a && (0 !== s.x || 0 !== s.y) && (m.Library.crisp.client.Browsing.toggle_ignore_scroll_event(!0), this.D0 = m.Utility.set_interval(function() {
                        e.x += s.x, e.y += s.y, window.scroll(e.x, e.y), ++c >= i.R0 && (m.Utility.clear_interval(i.D0), (i.D0 = null) !== i.N0 && m.Utility.clear_timeout(i.N0), i.N0 = m.Utility.set_timeout(function() {
                            i.N0 = null, m.Library.crisp.client.Browsing.toggle_ignore_scroll_event(!1)
                        }, i.M0))
                    }, a))
                }
            } catch (t) {}
        }, s.prototype.ih = function(t) {
            var i, n, e, s, c = this;
            try {
                m.Browsing.I0 === this.q0 && (null !== this.O0 && (this.O0.setAttribute("data-is-clicking", "true"), null !== this.T0 && m.Utility.clear_timeout(this.T0), this.T0 = m.Utility.set_timeout(function() {
                    c.T0 = null, c.O0.removeAttribute("data-is-clicking")
                }, this.U0)), t.click && (i = t.click.x - this.P0, n = t.click.y, i < 0 && (i = 0), e = document.elementFromPoint(i, n), (s = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, window, null, t.click.x, t.click.y, 0, 0, !1, !1, !1, !1, 0, null), s.Ue = !0, e && e.dispatchEvent(s)))
            } catch (t) {}
        }, s.prototype.Pl = function() {
            try {
                this.O0 = null
            } catch (t) {}
        }, s.prototype.ot = function() {
            try {
                this.D0 = null, this.N0 = null, this.T0 = null
            } catch (t) {}
        }, new s), m.Call = (e.prototype.reset = function() {
            try {
                this.ot()
            } catch (t) {}
        }, e.prototype.ring = function(t) {
            try {
                this.L0(), m.Sound.initialize("call"), m.Utility.merge(m.Store.$store.call, {
                    mode: t.mode,
                    size: "maximized",
                    state: null,
                    duration: 0,
                    user: {
                        user_id: t.user.user_id || m.Base.Dh,
                        nickname: m.Library.crisp.web.Name.parse_first_name(t.user.nickname) || m.Base.vc.website.name,
                        type: t.user.user_id ? "operator" : "website"
                    },
                    actions: this.J0(t.mode),
                    muted: {
                        audio: !1,
                        video: !1
                    }
                }), this.V0 = m.Template.dom(m.Template.render("call_ring")), m.Call.Event.Ru(), m.Template.vue(this.V0), m.Base.Xc.appendChild(this.V0), m.Sound.start("call", "call-ring", !0)
            } catch (t) {}
        }, e.prototype.screen = function() {
            try {
                this.L0(), this.V0 = m.Template.dom(m.Template.render("call_screen")), m.Call.Event.Ru(), m.Template.vue(this.V0), this.W0(), this.H0("connecting"), m.Base.Xc.appendChild(this.V0)
            } catch (t) {}
        }, e.prototype.stop = function() {
            try {
                this.L0(), m.Sound.start("call", "call-hangup")
            } catch (t) {}
        }, e.prototype.success = function(t) {
            try {
                switch (t) {
                    case "media_remote":
                        this.K0();
                        break;
                    case "media_local":
                        this.G0()
                }
            } catch (t) {}
        }, e.prototype.error = function(t) {
            try {
                this.L0(), m.Sound.start("call", "call-hangup")
            } catch (t) {}
        }, e.prototype.toggle_media_status = function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            try {
                for (var n = null, e = 0; e < m.Store.$store.call.actions.length; e++) {
                    var s = m.Store.$store.call.actions[e];
                    if (s.type === t) {
                        n = s;
                        break
                    }
                }
                null !== n && (n.state = i), m.Store.$store.call.muted[t] = !1 === i
            } catch (t) {}
        }, e.prototype.toggle_fullscreen_mode = function() {
            var t, i;
            try {
                "minimized" === m.Store.$store.call.size || !0 !== this.Y0("remote") || (t = this.V0.querySelector('.cc-18c0[data-type="remote"] video')) && (i = null, "function" == typeof(i = !1 === this.Z0 ? t.requestFullscreen || t.msRequestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || null : t.exitFullscreen || t.msExitFullscreen || t.mozExitFullScreen || t.webkitExitFullScreen || null) && i.Dt(t)())
            } catch (t) {}
        }, e.prototype.toggle_fullscreen_aspect_ratio = function() {
            var t;
            try {
                this.Z0 = !!document.fullscreenElement, !0 !== this.Y0("remote") || (t = this.V0.querySelector('.cc-18c0[data-type="remote"]')) && (!0 === this.Z0 ? t.setAttribute("data-aspect", "contain") : t.removeAttribute("data-aspect"))
            } catch (t) {}
        }, e.prototype.reset_position = function() {
            try {
                var t = this.V0.querySelector(".cc-q3eu");
                t && (t.style.removeProperty("top"), t.style.removeProperty("left"))
            } catch (t) {}
        }, e.prototype.L0 = function() {
            try {
                null !== this.V0 && (this.V0.remove(), this.V0 = null, this.Z0 = !1, this.X0(), m.Sound.stop("call", "call-ring"))
            } catch (t) {}
        }, e.prototype.G0 = function() {
            try {
                this.Q0("local")
            } catch (t) {}
        }, e.prototype.K0 = function() {
            try {
                !0 === this.Q0("remote") && (this.H0("ongoing"), m.Sound.start("call", "call-established"))
            } catch (t) {}
        }, e.prototype.Q0 = function(t) {
            var i = this.V0.querySelector('.cc-18c0[data-type="' + t + '"]');
            if (i) {
                var n = i.querySelector("video");
                if (n) return n.srcObject = m.Library.crisp.client.Call.get_stream(t), n.onloadeddata = function() {
                    var t = n.videoWidth < n.videoHeight ? "contain" : null;
                    null !== t && n.setAttribute("data-aspect", t)
                }, !0
            }
            return !1
        }, e.prototype.J0 = function(t) {
            var i = void 0;
            try {
                i = [{
                    type: "audio",
                    state: !0,
                    visible: !0,
                    supported: !0
                }, {
                    type: "video",
                    state: !0,
                    visible: !0,
                    supported: "video" === t
                }, {
                    type: "hangup",
                    state: !1,
                    visible: !0,
                    supported: !0
                }, {
                    type: "toggle",
                    state: !1,
                    visible: !0,
                    supported: !0
                }, {
                    type: "screensharing",
                    state: !1,
                    visible: !0,
                    supported: m.Library.crisp.client.Call.has_support_screensharing()
                }]
            } catch (t) {} finally {
                return i || []
            }
        }, e.prototype.H0 = function(t) {
            try {
                "ongoing" === (m.Store.$store.call.state = t) && this.t1()
            } catch (t) {}
        }, e.prototype.t1 = function() {
            var t = this;
            try {
                this.X0(), null === this.i1 && (this.n1 = 0, this.i1 = m.Utility.set_interval(function() {
                    t.n1++, m.Store.$store.call.duration = t.n1
                }, this.Da))
            } catch (t) {}
        }, e.prototype.X0 = function() {
            try {
                null !== this.i1 && (m.Utility.clear_interval(this.i1), this.i1 = null, m.Store.$store.call.duration = 0)
            } catch (t) {}
        }, e.prototype.W0 = function() {
            var a = this;
            try {
                var r, o, h, l, i, s, n, e, u = this.V0.querySelector(".cc-q3eu");
                u && (l = h = o = r = void 0, i = function(t, i, n, e) {
                    r = u.offsetLeft, o = u.offsetTop, h = t.clientX, l = t.clientY, m.Utility.add_event_listener(a.ns, "document", i, s), m.Utility.add_event_listener(a.ns, "document", n, e)
                }, s = function(t) {
                    t.preventDefault(), t.stopPropagation();
                    var i = (t.touches || [])[0] ? t.touches[0] : t,
                        n = o + (i.clientY - l),
                        e = r + (i.clientX - h),
                        s = a.e1,
                        c = a.e1,
                        t = window.innerWidth - u.clientWidth - a.e1,
                        i = window.innerHeight - u.clientHeight - a.e1;
                    return e < s ? e = s : t < e && (e = t), n < c ? n = c : i < n && (n = i), u.style.setProperty("top", n + "px", "important"), u.style.setProperty("left", e + "px", "important"), !1
                }, n = function() {
                    m.Utility.remove_event_listener(a.ns, "document", "mousemove"), m.Utility.remove_event_listener(a.ns, "document", "mouseup")
                }, e = function() {
                    m.Utility.remove_event_listener(a.ns, "document", "touchmove"), m.Utility.remove_event_listener(a.ns, "document", "touchend")
                }, u.addEventListener("mousedown", function(t) {
                    "minimized" === m.Store.$store.call.size && i(t, "mousemove", "mouseup", n)
                }), u.addEventListener("touchstart", function(t) {
                    "minimized" !== m.Store.$store.call.size || null !== (t = (t.touches || [])[0] || null) && i(t, "touchmove", "touchend", e)
                }))
            } catch (t) {}
        }, e.prototype.Y0 = function(t) {
            t = m.Library.crisp.client.Call.get_stream(t);
            return null !== t && 0 < t.getVideoTracks().length
        }, e.prototype.ot = function() {
            try {
                this.V0 = null, this.n1 = 0, this.i1 = null, this.Z0 = !1
            } catch (t) {}
        }, new e), m.Call.Event = (n.prototype.ring_accept_click = function(t) {
            try {
                m.Library.crisp.client.Call.accept(), m.Call.screen()
            } catch (t) {}
        }, n.prototype.ring_decline_click = function(t) {
            try {
                m.Library.crisp.client.Call.decline()
            } catch (t) {}
        }, n.prototype.action_click = function(t) {
            try {
                switch (t) {
                    case "video":
                        m.Library.crisp.client.Call.toggle_video();
                        break;
                    case "audio":
                        m.Library.crisp.client.Call.toggle_audio();
                        break;
                    case "screensharing":
                        m.Library.crisp.client.Call.toggle_screensharing();
                        break;
                    case "hangup":
                        m.Library.crisp.client.Call.stop();
                        break;
                    case "toggle":
                        m.Store.$store.call.size = "minimized" === m.Store.$store.call.size ? "maximized" : "minimized", m.Call.reset_position()
                }
            } catch (t) {}
        }, n.prototype.toggle_fullscreen_mode_click = function() {
            try {
                m.Call.toggle_fullscreen_mode()
            } catch (t) {}
        }, n.prototype.toggle_fullscreen_aspect_ratio_click = function() {
            try {
                m.Call.toggle_fullscreen_aspect_ratio()
            } catch (t) {}
        }, n.prototype.Ru = function() {
            try {
                m.Store.Ec("call", this.ft, this)
            } catch (t) {}
        }, new n);
        var t = {
            push: m.Pipeline.push.Dt(m.Pipeline),
            get: m.Pipeline.get.Dt(m.Pipeline),
            set: m.Pipeline.set.Dt(m.Pipeline),
            is: m.Pipeline.is.Dt(m.Pipeline),
            on: m.Pipeline.on.Dt(m.Pipeline),
            off: m.Pipeline.off.Dt(m.Pipeline),
            do: m.Pipeline.do.Dt(m.Pipeline),
            config: m.Pipeline.config.Dt(m.Pipeline),
            safe: m.Pipeline.safe.Dt(m.Pipeline),
            help: m.Pipeline.help.Dt(m.Pipeline)
        };
        if (Object.defineProperty(t, "__init", {
                enumerable: !1,
                value: m.Base.init.Dt(m.Base)
            }), Object.defineProperty(t, "__spool", {
                enumerable: !1,
                value: {}
            }), Object.defineProperty(t, "__debug", {
                enumerable: !1,
                value: m
            }), t.__spool.pending_actions = [], "object" == typeof window.$crisp && 0 < window.$crisp.length)
            for (var i = 0; i < window.$crisp.length; i++) t.__spool.pending_actions.push(window.$crisp[i]);
        window.$__CRISP_INSTANCE = t, window.$crisp = t
    } catch (t) {}

    function n() {
        try {
            this.ns = "CrispCallEvent", this.ft = ["ring_accept_click", "ring_decline_click", "action_click", "toggle_fullscreen_mode_click", "toggle_fullscreen_aspect_ratio_click"]
        } catch (t) {}
    }

    function e() {
        try {
            this.ns = "CrispCall", this.e1 = 6, this.Da = 1e3, this.ot()
        } catch (t) {}
    }

    function s() {
        try {
            this.ns = "CrispBrowsingAssist", this.q0 = "assist", this.B0 = 500, this.M0 = 750, this.R0 = 100, this.P0 = 5, this.U0 = 600, this.Pl(), this.ot()
        } catch (t) {}
    }

    function c() {
        try {
            this.ns = "CrispBrowsing", this.Pl()
        } catch (t) {}
    }

    function a() {
        try {
            this.ns = "CrispMagnifyEvent", this.ft = ["disappear_fuzzy", "disappear", "keydown", "navigate_click"]
        } catch (t) {}
    }

    function o() {
        try {
            this.ns = "CrispMagnify", this.ju = {
                image: ["image/jpg", "image/jpeg", "image/png", "image/gif"],
                video: ["video/mp4", "video/webm"]
            }, this.j0 = 250, this.F0 = ["image", "video"], this.ot()
        } catch (t) {}
    }

    function h() {
        try {
            this.ns = "CrispChatViewport", this.x0 = /;/g, this.ot()
        } catch (t) {}
    }

    function l() {
        try {
            this.ns = "CrispChatState", this.c0 = 250, this.y0 = 240, this.e0 = {
                trigger: this.f0,
                alert: this.d0,
                intent: this.v0,
                operator: this.p0,
                scroll: this.m0,
                maximized: this._0,
                textarea: this.g0
            }, this.t0(), this.ot()
        } catch (t) {}
    }

    function u() {
        try {
            this.ns = "CrispChatSpeech", this.Da = 1e3, this.Qp = 9e4, this.Np = 64e3, this.Dp = [
                ["weba", "audio/webm; codecs=opus"],
                ["weba", "audio/webm; codecs=vorbis"],
                ["oga", "audio/ogg; codecs=vorbis"],
                ["m4a", "audio/mp4; codecs=mp4a.40.5"]
            ], this.ot()
        } catch (t) {}
    }

    function f() {
        try {
            this.ns = "CrispChatSelector", this.Ap = {
                header: "cc-1cff",
                content: "cc-gye0",
                flow: "cc-19vt",
                flow_messages: "cc-nasd",
                form_container: "cc-1tyx",
                form_act: "cc-1xqi",
                form_textarea_message: "cc-c5c3",
                form_input_attach: "cc-oky3"
            }, this.Pl(), this.ot()
        } catch (t) {}
    }

    function d() {
        try {
            this.ns = "CrispChatScroll", this.ot()
        } catch (t) {}
    }

    function v() {
        try {
            this.ns = "CrispChatNotification", this.Fp = 5, this.Ep = ["text", "file", "animation", "audio", "picker", "field", "carousel"], this.ot()
        } catch (t) {}
    }

    function p() {
        try {
            this.ns = "CrispChatMisc", this.ot()
        } catch (t) {}
    }

    function y() {
        try {
            this.ns = "CrispChatMessage", this.Tv = 1500, this.dp = 3e4, this.yp = 6e4, this.pp = 3e4, this.hp = 400, this.cp = 5e3, this.sp = 12e4, this.Qv = "urn:crisp.im:triggers:0", this.Ov = ["welcome", "identity", "game", "feedback"], this.Kv = ["email", "phone"], this.Gv = ["📨", "☎️"], this.np = ["field", "picker"], this.ot()
        } catch (t) {}
    }

    function _() {
        try {
            this.ns = "CrispChatInterface", this.gv = 320, this._v = 340, this.kv = 360, this.bv = 460, this.yv = 400, this.vv = 580, this.wv = 440, this.xv = 500, this.mv = 600, this.$v = 22, this.Fv = 8, this.Hd = 350, this.Gd = 1e3, this.tv = 1e3, this.iv = 216e5, this.Cv = 1e3, this.hv = 10, this.sv = !1, this.fv = [
                ["email", "Email"],
                ["phone", "Phone"],
                ["messenger", "Messenger"],
                ["telegram", "Telegram"],
                ["twitter", "Twitter"],
                ["whatsapp", "WhatsApp"],
                ["instagram", "Instagram"]
            ], this.ev = /^(?:https?:)?(?:\/\/)?([^\/\?]+)/, this.ot()
        } catch (t) {}
    }

    function g() {
        try {
            this.ns = "CrispChatHelpdesk", this.Ud = 1e3, this.Nd = 100, this.Bd = 2, this.ot()
        } catch (t) {}
    }

    function w() {
        try {
            this.ns = "CrispChatGame", this.ot()
        } catch (t) {}
    }

    function b() {
        try {
            this.ns = "CrispChatFrame", this.ot()
        } catch (t) {}
    }

    function k() {
        try {
            this.ns = "CrispChatFile", this.$d = "File", this.Fd = "application/octet-stream", this.Ad = 2e3, this.ot()
        } catch (t) {}
    }

    function x() {
        try {
            this.ns = "CrispChatField", this._d = 1e3, this.ud = 150, this.ad = .2, this.cd = /\n/g, this.ot()
        } catch (t) {}
    }

    function $() {
        try {
            this.ns = "CrispChatEvent", this.ft = ["fuzzy_wheel", "fuzzy_click", "pane_toggle_click", "pane_tooltip_new_messages_click", "pane_minimize_click", "pane_mode_click", "picker_click", "picker_toggle_click", "picker_show_click", "picker_smiley_click", "picker_gif_input_keyup", "picker_gif_input_reset", "picker_gif_item_click", "speech_record_click", "speech_cancel_click", "speech_send_click", "feedback_click", "feedback_submit_click", "feedback_toggle_click", "message_common_click", "message_text_click", "message_send_retry_click", "message_previous_click", "message_picker_button_click", "message_field_input_keydown", "message_field_input_focus", "message_field_input_blur", "message_field_send", "message_file_click", "message_carousel_wheel", "alert_email_invalid_click", "alert_warn_reply_click", "alert_new_messages_click", "frame_previous_click", "game_stop_click", "flow_scroll", "flow_touch", "file_drop_dragover", "file_drop_dragleave", "file_drop", "file_change", "textarea_keydown", "textarea_keyup", "textarea_paste", "textarea_send_click", "header_channels_button_click", "header_channels_dropdown_click", "header_channels_dropdown_entry_click", "chat_wheel", "helpdesk_wheel", "helpdesk_search_keydown", "helpdesk_search_field_keyup", "helpdesk_search_article_click", "helpdesk_viewer_previous_click"], this.Lf = 500, this.Df = 500, this.ot()
        } catch (t) {}
    }

    function F() {
        try {
            this.ns = "CrispChatFeedback", this.ot()
        } catch (t) {}
    }

    function E() {
        try {
            this.ns = "CrispChatPicker", this.zf = 10, this.ot()
        } catch (t) {}
    }

    function j() {
        try {
            this.ns = "CrispChatIntent", this.cf = ["identity", "game", "feedback"], this.hf = {
                identity: this.lf,
                game: this.vf,
                feedback: this.mf
            }, this.ot()
        } catch (t) {}
    }

    function z() {
        try {
            this.ns = "CrispChatAlert", this.Qu = {
                warn_reply: this.tf,
                email_invalid: this.nf
            }, this.ot()
        } catch (t) {}
    }

    function C() {
        try {
            this.ns = "CrispChat", this.ot()
        } catch (t) {}
    }

    function A() {
        try {
            this.ns = "CrispMinimizedInterface", this.Da = 1e3, this.Vu = .25, this.Ju = 2, this.Pu = 1e3, this.Lu = 500, this.Uu = 12e3, this.Bu = "minimized", this.Nu = "1", this.ot()
        } catch (t) {}
    }

    function S() {
        try {
            this.ns = "CrispMinimizedEvent", this.ft = ["pane_click"]
        } catch (t) {}
    }

    function I() {
        try {
            this.ns = "CrispMinimized", this.ot()
        } catch (t) {}
    }

    function q() {
        try {
            this.ns = "CrispBase", this.Yl = 600, this.Zl = 480, this.Xl = 720, this.Ql = 540, this.tu = 840, this.iu = 640, this.ru = 6e5, this.ou = 6e5, this.hu = 1728e5, this.Eu = 1e3, this.pu = 1e4, this.Au = 3, this.lu = /_/g, this.mu = {
                socket: !0,
                buster: 1
            }, this.fu = {
                other: {
                    container_index: 1e6
                }
            }, this.$u = {
                childList: !0,
                attributes: !1,
                subtree: !1,
                characterData: !1
            }, this.du = /^(?:https?:[\/]*)?([^\/]+)(?:\/.*)?$/i, this.Pl(), this.ot()
        } catch (t) {}
    }

    function O() {
        try {
            this.ns = "CrispTrigger", this.Da = 1e3, this.ml = 18e5, this.Oh = "trigger", this.Rh = "1", this.il = ["page", "url_parameter"], this.Nh = {
                delay: this.Xh,
                leave: this.tl,
                link: this.rl,
                page: this.Bh,
                url_parameter: this.hl,
                user_data: this.ul,
                user_event: this.dl
            }, this.Lh = {
                message: this.vl,
                open: this.pl,
                sound: this.yl
            }, this.nl = {
                page: this.ol,
                url_parameter: this.ll
            }, this.ot()
        } catch (t) {}
    }

    function D() {
        try {
            this.ns = "CrispEvent", this.Fh = 6e5, this.zh = 36e5, this.$h = {
                capture: !1
            }, this.ot()
        } catch (t) {}
    }

    function R() {
        try {
            this.ns = "CrispAvailability", this.ot()
        } catch (t) {}
    }

    function B() {
        try {
            this.ns = "CrispBroker", this.Bo = 1, this.Hl = {
                chat: {
                    country: null,
                    locale: "en",
                    theme: "default",
                    theme_text: "default",
                    theme_welcome: "default",
                    tile: "default",
                    allowed_pages: [],
                    blocked_pages: [],
                    blocked_locales: [],
                    last_operator_face: !1,
                    ongoing_operator_face: !0,
                    activity_metrics: !0,
                    operator_privacy: !1,
                    availability_tooltip: !1,
                    hide_vacation: !1,
                    hide_on_away: !1,
                    hide_on_mobile: !1,
                    position_reverse: !1,
                    email_visitors: !0,
                    phone_visitors: !1,
                    force_identify: !1,
                    ignore_privacy: !1,
                    visitor_compose: !0,
                    file_transfer: !0,
                    helpdesk_link: !0,
                    status_health_dead: !0,
                    wait_game: !0
                },
                website: {
                    name: "",
                    domain: "",
                    mailer: "",
                    buster: 1,
                    count_operators: 0,
                    active_operators: [],
                    response_metrics: {},
                    last_available: m.Date.timestamp(),
                    status: null,
                    trial: !1
                },
                channels: {},
                plugins: {}
            }, this.ot()
        } catch (t) {}
    }

    function N() {
        try {
            this.ns = "CrispTemplate", this.jr = 600, this.zr = 600
        } catch (t) {}
    }

    function M() {
        try {
            this.ns = "CrispAvatar"
        } catch (t) {}
    }

    function T() {
        try {
            this.ns = "CrispAudio", this.xr = 1, this.Er = 2, this.Fr = .5
        } catch (t) {}
    }

    function U() {
        try {
            this.ns = "CrispLocale", this.ur = "en", this.gr = "ltr", this.dr = ["af", "ar-ae", "ar-sa", "ar-ye", "ar", "az", "bg", "bn", "ca", "cs", "da", "de", "el", "en", "eo", "es", "et", "eu", "fa", "fi", "fo", "fr", "gu", "he", "hi", "hr", "hu", "hy", "id", "is", "it", "ja", "ka", "ko", "lt", "lv", "ml", "mn", "ms", "nl-be", "nl", "no", "pl", "ps", "pt-br", "pt", "ro", "ru", "sk", "sl", "sr-cyrl-cs", "sr", "sv", "ta", "th", "tr", "uk", "vi", "zh-hk", "zh-tw", "zh"], this.br = "en", this.kr = ["en", "fr", "de", "es", "fi", "nl", "pt", "tr", "pl", "ru", "zh"], this.fr = this.dr, this._r = ["ltr", "rtl"], this.ot()
        } catch (t) {}
    }

    function P() {
        try {
            this.ns = "CrispSound", this.Za = {
                events: ["chat-message-receive", "chat-message-action"],
                call: ["call-established", "call-hangup", "call-ring"]
            }, this.ot()
        } catch (t) {}
    }

    function L() {
        try {
            this.ns = "CrispPlugin"
        } catch (t) {}
    }

    function J() {
        try {
            this.ns = "CrispTheme", this.Ha = 16, this.La = "default", this.Pa = {
                default: {
                    10: "#F0F2F5",
                    20: "#EFF5FE",
                    100: "#E2EEFF",
                    200: "#92A9C1",
                    500: "#1972F5",
                    600: "#055EE1",
                    700: "#0057D7",
                    800: "#0051C8",
                    900: "#004AB5",
                    reverse: "#FFFFFF"
                },
                red: {
                    10: "#F0F2F5",
                    20: "#F9F3F3",
                    100: "#FFE5E4",
                    200: "#92A9C1",
                    500: "#E51E0F",
                    600: "#CC1B0E",
                    700: "#C5170A",
                    800: "#B81206",
                    900: "#A71004",
                    reverse: "#FFFFFF"
                },
                pink: {
                    10: "#F0F2F5",
                    20: "#F7F2F2",
                    100: "#FFE0EB",
                    200: "#92A9C1",
                    500: "#F11D64",
                    600: "#DB165A",
                    700: "#CE1454",
                    800: "#C20F4D",
                    900: "#B40A45",
                    reverse: "#FFFFFF"
                },
                purple: {
                    10: "#F0F2F5",
                    20: "#F8F3FA",
                    100: "#FADDFF",
                    200: "#92A9C1",
                    500: "#B520CF",
                    600: "#9B19B2",
                    700: "#9614AE",
                    800: "#8A0DA1",
                    900: "#800896",
                    reverse: "#FFFFFF"
                },
                deep_purple: {
                    10: "#F0F2F5",
                    20: "#F6F5FA",
                    100: "#EDE2FF",
                    200: "#92A9C1",
                    500: "#682AD5",
                    600: "#581FBB",
                    700: "#5019B0",
                    800: "#441599",
                    900: "#3B0F89",
                    reverse: "#FFFFFF"
                },
                indigo: {
                    10: "#F0F2F5",
                    20: "#F5F5FB",
                    100: "#DDE2FF",
                    200: "#92A9C1",
                    500: "#2943D1",
                    600: "#1732C4",
                    700: "#112BB9",
                    800: "#0F249A",
                    900: "#091C87",
                    reverse: "#FFFFFF"
                },
                blue: {
                    10: "#F0F2F5",
                    20: "#EFF5FE",
                    100: "#E2EEFF",
                    200: "#92A9C1",
                    500: "#1972F5",
                    600: "#055EE1",
                    700: "#0057D7",
                    800: "#0051C8",
                    900: "#004AB5",
                    reverse: "#FFFFFF"
                },
                light_blue: {
                    10: "#F0F2F5",
                    20: "#EFF5F7",
                    100: "#DCF0F9",
                    200: "#92A9C1",
                    500: "#009FDF",
                    600: "#008CCB",
                    700: "#0088C5",
                    800: "#007EB7",
                    900: "#0076AB",
                    reverse: "#FFFFFF"
                },
                cyan: {
                    10: "#F0F2F5",
                    20: "#F1F7F7",
                    100: "#DBF7F9",
                    200: "#92A9C1",
                    500: "#01A2B4",
                    600: "#009CAE",
                    700: "#008A9A",
                    800: "#008493",
                    900: "#007B89",
                    reverse: "#FFFFFF"
                },
                teal: {
                    10: "#F0F2F5",
                    20: "#E7F4F4",
                    100: "#D6EEE9",
                    200: "#92A9C1",
                    500: "#00947C",
                    600: "#00816C",
                    700: "#007B66",
                    800: "#00705D",
                    900: "#006655",
                    reverse: "#FFFFFF"
                },
                green: {
                    10: "#F0F2F5",
                    20: "#EDF5ED",
                    100: "#D6F3D7",
                    200: "#92A9C1",
                    500: "#28A52D",
                    600: "#1A941F",
                    700: "#148919",
                    800: "#0F7B13",
                    900: "#0A6C0E",
                    reverse: "#FFFFFF"
                },
                light_green: {
                    10: "#F0F2F5",
                    20: "#F0F7F0",
                    100: "#DFF6C6",
                    200: "#92A9C1",
                    500: "#6EB700",
                    600: "#64A500",
                    700: "#5E9C00",
                    800: "#528800",
                    900: "#487800",
                    reverse: "#FFFFFF"
                },
                amber: {
                    10: "#F0F2F5",
                    20: "#F6F4ED",
                    100: "#FFF0C1",
                    200: "#92A9C1",
                    500: "#E1AE01",
                    600: "#CD9E00",
                    700: "#C49700",
                    800: "#B88E00",
                    900: "#A37E00",
                    reverse: "#FFFFFF"
                },
                orange: {
                    10: "#F0F2F5",
                    20: "#F5F5EF",
                    100: "#FFECCF",
                    200: "#92A9C1",
                    500: "#EC6800",
                    600: "#E16300",
                    700: "#CE5B00",
                    800: "#BE5400",
                    900: "#B54F00",
                    reverse: "#FFFFFF"
                },
                deep_orange: {
                    10: "#F0F2F5",
                    20: "#FDF5F5",
                    100: "#FFE8E0",
                    200: "#92A9C1",
                    500: "#E45300",
                    600: "#CD4A00",
                    700: "#C24702",
                    800: "#B84200",
                    900: "#AC3E00",
                    reverse: "#FFFFFF"
                },
                brown: {
                    10: "#F0F2F5",
                    20: "#F7F1EF",
                    100: "#F2EAE7",
                    200: "#92A9C1",
                    500: "#924B32",
                    600: "#8C462D",
                    700: "#7F3D25",
                    800: "#75361F",
                    900: "#692E19",
                    reverse: "#FFFFFF"
                },
                grey: {
                    10: "#F0F2F5",
                    20: "#F4F4F4",
                    100: "#E5E5E5",
                    200: "#92A9C1",
                    500: "#7A7A7A",
                    600: "#6B6B6B",
                    700: "#646464",
                    800: "#5B5B5B",
                    900: "#505050",
                    reverse: "#FFFFFF"
                },
                blue_grey: {
                    10: "#F0F2F5",
                    20: "#F2F7F8",
                    100: "#DCEDF6",
                    200: "#92A9C1",
                    500: "#447991",
                    600: "#3C7189",
                    700: "#32657C",
                    800: "#2A5A70",
                    900: "#27556A",
                    reverse: "#FFFFFF"
                },
                black: {
                    10: "#F0F2F5",
                    20: "#F2F2F2",
                    100: "#E9E9E9",
                    200: "#92A9C1",
                    500: "#2A2A2A",
                    600: "#313131",
                    700: "#454545",
                    800: "#525252",
                    900: "#5B5B5B",
                    reverse: "#FFFFFF"
                }
            }, this.Wa = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i
        } catch (t) {}
    }

    function V() {
        try {
            this.ns = "CrispDate", this.Oa = 20, this.Da = 1e3, this.s1 = 60, this.c1 = 24, this.Ma = 60, this.Na = this.s1 * this.Ma, this.Ua = this.c1 * this.Na, this.Ra = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], this.Ba = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
        } catch (t) {}
    }

    function W() {
        try {
            this.ns = "CrispValidate", this.qa = 80, this.Ca = /^(([^\s@]+)@([^\s@]+)\.([^\s@]+))$/, this.Aa = new RegExp(["^(?:(?:\\(?(?:00|\\+)([1-4]\\d\\d|[1-9]\\d?)\\)?)?", "[\\-\\.\\ \\\\\\/]?)?((?:\\(?\\d{1,}\\)?[\\-\\.\\ \\\\\\/]?){0,})", "(?:[\\-\\.\\ \\\\\\/]?(?:#|ext\\.?|extension|x)[\\-\\.\\ \\\\/]?", "(\\d+))?$"].join(""), "i"), this.Sa = /^https?:\/\/(.+)$/, this.Ia = /^([A-Za-z0-9_\\-]{1,50})$/
        } catch (t) {}
    }

    function H() {
        try {
            this.ns = "CrispPipeline", this.ka = ["get", "set", "is", "do", "on", "off", "config", "safe", "help"], this.Ea = ["on", "off"], this.ot()
        } catch (t) {}
    }

    function K() {
        try {
            this.ns = "CrispAccessibility", this.ma = ["button", "alert"], this.ot()
        } catch (t) {}
    }

    function G() {
        try {
            this.ns = "CrispAction", this.va = ["session:loaded", "chat:initiated", "chat:opened", "chat:closed", "message:sent", "message:received", "message:compose:sent", "message:compose:received", "user:email:changed", "user:phone:changed", "user:nickname:changed", "user:avatar:changed", "website:availability:changed", "helpdesk:queried"], this.za = {
                on: this.ua,
                off: this.da
            }, this.Vc = 500, this.ca = /^([a-f0-9]{64})$/, this.fa = {}
        } catch (t) {}
    }

    function Y() {
        try {
            this.ns = "CrispStore", this.ot()
        } catch (t) {}
    }

    function Z() {
        try {
            this.ns = "CrispFeature", this.ot()
        } catch (t) {}
    }

    function X() {
        try {
            this.ns = "CrispUtility", this.hc = "[match:single]", this.rc = "[match:double]", this.sc = "[match:negate]", this.oc = /([\*]{1})/g, this.ac = /([\*]{2})/g, this.ec = /^([\!]{1})/, this.uc = /(\[match:single\])/g, this.lc = /(\[match:double\])/g, this.cc = /(\[match:negate\])/g, this.dc = new RegExp(["^(\\!)?", "(?:https?:[\\/]*)?", "(?:www\\.)?([^\\/]+)([^#?]*)?", "(?:[\\/]+)?", "(?:[#?].*)?"].join(""), "i"), this.tc = /^(?:\s*)(?:(?:javascript|vbscript):)/i, this.ot()
        } catch (t) {}
    }

    function Q() {
        try {
            this.ns = "CrispCompatibility", this.Ks = 2e4, this.Zs = "UTF-8", this.Xs = 'You can disable this warning by adding: $crisp.push(["safe", true]) to your page JavaScript.', this.Qs = /\{\s*\[native code\]\s*\}$/, this.ot(), this.Gs()
        } catch (t) {}
    }
})();