/**
 * crisp-client
 * @version v2.11.0 1f94bd5
 * @author Crisp IM SAS
 * @date 5/16/2023
 */
(function() {
    try {
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        i.prototype.init = function() {
            var i, n, s = this,
                e = "init";
            try {
                this.n && !0 !== this.s && (this.s = !0, (i = document.createElement("div")).id = "crisp-loader", document.getElementsByTagName("body")[0].appendChild(i), n = function() {
                    return "none" === window.getComputedStyle(i).getPropertyValue("display")
                }, function t() {
                    s.f = setTimeout(function() {
                        s.f = null, s.y -= s.w, void 0 !== window[s.v] && "function" == typeof window[s.v].__init && !0 === n() ? (s.x.info(s.ns + "." + e, "Dependencies loaded"), i.parentNode.removeChild(i), window[s.v].__init({
                            dollar_crisp: window[s.v],
                            project_name: s.on,
                            url_go: s.fn,
                            url_image: s._n,
                            url_game: s.fs,
                            url_relay_client: s.ms,
                            url_relay_stream: s.ws,
                            url_website: s.$s,
                            url_assets: s._e,
                            rtc_ice: s.io,
                            socket_affinity: s.do,
                            client_environment: s._a,
                            client_revision: s._f,
                            website_domain: s.el,
                            website_id: s.n,
                            token_id: s.t_,
                            cookie_expire: s.Fn,
                            cookie_domain: s.i_,
                            page_url: s.n_,
                            page_domain: s.s_,
                            browser_useragent: s.e_,
                            browser_timezone: s.o_,
                            browser_capabilities: s.r_,
                            browser_locales: s.c_,
                            ready_trigger: s.h_,
                            runtime_configuration: s.a_,
                            reset_handler: function() {
                                s.reset()
                            }
                        })) : 0 < s.y ? t() : s.x.error(s.ns + "." + e, "Could not load dependencies")
                    }, s.w)
                }())
            } catch (t) {}
        }, i.prototype.reset = function() {
            try {
                null !== this.f && clearTimeout(this.f), this.u_(), this.init()
            } catch (t) {}
        }, i.prototype.d_ = function() {
            try {
                this.f_("dns-prefetch", this.ms), this.f_("preconnect", this._e), this.l_(), this.p_()
            } catch (t) {}
        }, i.prototype.f_ = function(t, i) {
            try {
                var n = document.createElement("link");
                n.setAttribute("href", i), n.setAttribute("rel", t), n.setAttribute("crossorigin", ""), this.__(n), document.getElementsByTagName("head")[0].appendChild(n)
            } catch (t) {}
        }, i.prototype.l_ = function() {
            try {
                var t = document.createElement("script");
                t.src = [this._e + "/", this.y_ + "/", "client.js?" + this._f].join(""), t.type = "text/javascript", t.async = 1, this.__(t), document.getElementsByTagName("head")[0].appendChild(t)
            } catch (t) {}
        }, i.prototype.p_ = function() {
            try {
                var t = this.m_(),
                    i = document.createElement("link");
                i.href = [this._e + "/", this.w_ + "/", "client_" + t + ".css?" + this._f].join(""), i.type = "text/css", i.rel = "stylesheet", this.__(i), document.getElementsByTagName("head")[0].appendChild(i)
            } catch (t) {}
        }, i.prototype.u_ = function() {
            this.I_(), this.v_(), this.C_()
        }, i.prototype.I_ = function() {
            this.s = !1, this.f = null, this.y = this.R_, this.el = document.domain, this.n_ = document.location.href, this.s_ = document.location.hostname, this.e_ = window.navigator.userAgent, this.o_ = (new Date).getTimezoneOffset(), this.c_ = this.S_(), "string" == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID ? this.n = CRISP_WEBSITE_ID : this.n = this.g_(), "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this.t_ = CRISP_TOKEN_ID : "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this.t_ = CRISP_TOKEN_ID.toString() : this.t_ = null, "number" == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE ? this.Fn = CRISP_COOKIE_EXPIRE : this.Fn = null, "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN ? this.i_ = CRISP_COOKIE_DOMAIN : this.i_ = null, "function" == typeof CRISP_READY_TRIGGER ? this.h_ = CRISP_READY_TRIGGER : this.h_ = {}, "object" === ("undefined" == typeof CRISP_RUNTIME_CONFIG ? "undefined" : t(CRISP_RUNTIME_CONFIG)) ? this.a_ = CRISP_RUNTIME_CONFIG : this.a_ = {}, "object" === ("undefined" == typeof CRISP_INCLUDE_ATTRS ? "undefined" : t(CRISP_INCLUDE_ATTRS)) ? this.E_ = CRISP_INCLUDE_ATTRS : this.E_ = {}
        }, i.prototype.v_ = function() {
            try {
                this.r_ = [], "function" == typeof window.MutationObserver && "function" == typeof JSON.stringify && this.r_.push("browsing"), ("function" == typeof window.RTCPeerConnection && "object" === t(navigator.mediaDevices) && "https:" === document.location.protocol && (window.innerWidth || 0) >= this.b_ && (window.innerHeight || 0) >= this.P_ || !0 === this.T_) && this.r_.push("call")
            } catch (t) {}
        }, i.prototype.C_ = function() {
            var t;
            try {
                this.a_.locale && (-1 !== (t = this.c_.indexOf(this.a_.locale)) && this.c_.splice(t, 1), this.c_.unshift(this.a_.locale))
            } catch (t) {}
        }, i.prototype.__ = function(t) {
            try {
                for (var i in this.E_) this.E_.hasOwnProperty(i) && t.setAttribute(i, this.E_[i])
            } catch (t) {}
        }, i.prototype.g_ = function() {
            var t = null;
            try {
                for (var i = document.querySelectorAll("script[src]"), n = 0; n < i.length; n++) {
                    var s = this.D_.exec(i[n].src);
                    if (s && "string" == typeof s[1]) {
                        t = s[1];
                        break
                    }
                }
            } catch (t) {} finally {
                return t
            }
        }, i.prototype.m_ = function() {
            var t = "default";
            try {
                var i = (navigator.userAgent || "").toLowerCase(),
                    n = (navigator.appVersion || "").toLowerCase(),
                    s = !1;
                if (!0 !== s && (-1 === i.indexOf("opera mini/") && -1 === i.indexOf("msie") && -1 === n.indexOf("trident/") || (s = !0)), !0 !== s)
                    for (var e = 0; e < this.O_.length; e++) {
                        var o = this.O_[e],
                            r = i.match(o.pattern);
                        if (r && r[1] && parseInt(r[1], 10) <= o.version) {
                            s = !0;
                            break
                        }
                    }!0 === s && (t = "legacy")
            } catch (t) {} finally {
                return t
            }
        }, i.prototype.N_ = function() {
            var t = !0;
            try {
                (window.innerWidth && window.innerWidth < this.k_ || !0 !== this.K_() || !0 === this.A_(this.s_) || !0 === this.j_(this.e_) || !window.WebSocket || window.__nativePerformance && window.__nativePromise) && (t = !1)
            } catch (t) {} finally {
                return t
            }
        }, i.prototype.K_ = function() {
            var t, i, n = !1;
            try {
                !0 === navigator.cookieEnabled ? n = !0 : window.localStorage && "function" == typeof window.localStorage.setItem && "function" == typeof window.localStorage.getItem && "function" == typeof window.localStorage.removeItem && (t = "" + (new Date).getTime(), i = "crisp-client/loader/storage/check", window.localStorage.setItem(i, t), n = window.localStorage.getItem(i) === t)
            } catch (t) {} finally {
                return n
            }
        }, i.prototype.A_ = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                i = !1;
            try {
                if (t)
                    for (var n = 0; n < this.G_.domains.length; n++) {
                        var s = this.G_.domains[n],
                            e = "." + s;
                        if (t === s || t.slice(-1 * e.length) === e) {
                            i = !0;
                            break
                        }
                    }
            } catch (t) {} finally {
                return i
            }
        }, i.prototype.j_ = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                i = !1;
            try {
                if (t)
                    for (var n = 0; n < this.G_.agents.length; n++)
                        if (-1 !== t.indexOf(this.G_.agents[n])) {
                            i = !0;
                            break
                        }
            } catch (t) {} finally {
                return i
            }
        }, i.prototype.S_ = function() {
            var t = [];
            try {
                for (var i = navigator.languages && 0 < navigator.languages.length ? navigator.languages : [navigator.language || navigator.userLanguage], n = 0; n < i.length; n++) i[n] && t.push(i[n])
            } catch (t) {} finally {
                return t
            }
        }, new i
    } catch (t) {}

    function i() {
        var t, i = this;
        try {
            this.ns = "CrispLoader", this.x = {
                warn: function() {},
                error: function() {},
                info: function() {},
                log: function() {},
                debug: function() {}
            }, this.T_ = !1, this.on = "crisp-client", this.U_ = "client.crisp.chat", this.x_ = "client.relay.crisp.chat", this.B_ = "stream.relay.crisp.chat", this._f = "1f94bd5", this._a = "production", this.L_ = "https:", this.$s = "https://crisp.chat", this.fn = "https://go.crisp.chat", this._n = "https://image.crisp.chat", this.fs = "https://game.crisp.chat", this.ms = this.L_ + "//" + this.x_, this.ws = this.L_ + "//" + this.B_, this._e = this.L_ + "//" + this.U_, this.io = [{
                urls: ["stun:stun.media.crisp.chat:3478", "stun:stun.media.crisp.chat:3479"]
            }, {
                urls: ["turn:turn.media.crisp.chat:3478?transport=udp", "turn:turn.media.crisp.chat:3478?transport=tcp", "turn:turn.media.crisp.chat:3479?transport=udp", "turn:turn.media.crisp.chat:3479?transport=tcp", "turns:turn.media.crisp.chat:443?transport=tcp"],
                username: "client_9F9kh",
                credential: "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p"
            }], this.do = !0, this.G_ = {
                domains: [],
                agents: ["Trident", "Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot", "GTmetrix", "Lighthouse", "Acunetix", "Ahrefs"]
            }, this.y_ = "static/javascripts", this.w_ = "static/stylesheets", this.v = "$__CRISP_INSTANCE", this.M_ = "$__CRISP_INCLUDED", this.w = 100, this.R_ = 3e4, this.F_ = 1e3, this.k_ = 280, this.b_ = 320, this.P_ = 420, this.O_ = [{
                pattern: /edg(?:e)?\/([0-9\.]+)/,
                version: 79
            }, {
                pattern: /chrom(?:e|ium)\/([0-9\.]+)/,
                version: 53
            }, {
                pattern: /firefox\/([0-9\.]+)/,
                version: 49
            }, {
                pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
                version: 10
            }, {
                pattern: /android ([0-9\.]+)/,
                version: 5
            }], this.D_ = /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i, this.u_(), !0 === window[this.M_] || void 0 !== window[this.v] && "function" == typeof window[this.v].__init || !0 !== this.N_() || (window[this.M_] = !0, "interactive" === document.readyState || "complete" === document.readyState ? this.init() : (t = document.onreadystatechange || function() {}, window.addEventListener("DOMContentLoaded", function() {
                i.init()
            }), document.onreadystatechange = function() {
                "function" == typeof t && t(), "interactive" !== document.readyState && "complete" !== document.readyState || setTimeout(function() {
                    i.init()
                }, i.F_)
            }), this.d_())
        } catch (t) {}
    }
})();