!function() {
    var t, e = {
        7449: function(t, e, n) {
            "use strict";
            n.d(e, {
                c: function() {
                    return r
                },
                n: function() {
                    return i
                }
            });
            function r() {
                return true
            }
            function i() {
                return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
            }
        },
        6903: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return o
                }
            });
            var r = n(9606)
              , i = {};
            function o() {
                return (0,
                r.KV)() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : i
            }
        },
        9606: function(t, e, n) {
            "use strict";
            n.d(e, {
                KV: function() {
                    return i
                },
                l$: function() {
                    return o
                }
            });
            var r = n(7449);
            function i() {
                return !(0,
                r.n)() && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
            }
            function o(t, e) {
                return t.require(e)
            }
            t = n.hmd(t)
        },
        2448: function(t, e, n) {
            "use strict";
            n.d(e, {
                ph: function() {
                    return c
                },
                yW: function() {
                    return u
                }
            });
            var r = n(6903)
              , i = n(9606);
            t = n.hmd(t);
            var o = {
                nowSeconds: function() {
                    return Date.now() / 1e3
                }
            };
            var a = (0,
            i.KV)() ? function() {
                try {
                    return (0,
                    i.l$)(t, "perf_hooks").performance
                } catch (t) {
                    return
                }
            }() : function() {
                var t = (0,
                r.R)().performance;
                if (t && t.now)
                    return {
                        now: function() {
                            return t.now()
                        },
                        timeOrigin: Date.now() - t.now()
                    }
            }()
              , s = void 0 === a ? o : {
                nowSeconds: function() {
                    return (a.timeOrigin + a.now()) / 1e3
                }
            }
              , u = o.nowSeconds.bind(o)
              , c = s.nowSeconds.bind(s);
            !function() {
                var t = (0,
                r.R)().performance;
                if (t && t.now) {
                    var e = 36e5
                      , n = t.now()
                      , i = Date.now()
                      , o = t.timeOrigin ? Math.abs(t.timeOrigin + n - i) : e
                      , a = o < e
                      , s = t.timing && t.timing.navigationStart
                      , u = "number" == typeof s ? Math.abs(s + n - i) : e;
                    return a || u < e ? o <= u ? ("timeOrigin",
                    t.timeOrigin) : ("navigationStart",
                    s) : ("dateNow",
                    i)
                }
                "none"
            }()
        },
        4774: function(t) {
            t.exports = function() {
                return n = {},
                t.m = e = [function(t, e, n) {
                    "use strict";
                    t.exports = function(t, e) {
                        for (var n, r, i = 1; i < arguments.length; i++)
                            for (r in n = arguments[i])
                                n.hasOwnProperty(r) && (t[r] = n[r]);
                        return t
                    }
                }
                , function(t, e, n) {
                    "use strict";
                    var r = n(0);
                    t.exports = {
                        build: function(t, e) {
                            for (var n, i = e.plugins, o = 0, a = i.length; o < a; o++)
                                (n = i[o]).methods && r(t, n.methods),
                                n.properties && Object.defineProperties(t, n.properties)
                        },
                        hook: function(t, e, n) {
                            var r, i, o, a, s = t.config.plugins, u = [t.context];
                            for (n && (u = u.concat(n)),
                            r = 0,
                            i = s.length; r < i; r++)
                                a = s[r],
                                (o = s[r][e]) && o.apply(a, u)
                        }
                    }
                }
                , function(t, e, n) {
                    "use strict";
                    function r(t) {
                        if (0 === t.length)
                            return t;
                        var e, n, r = t.split(/[_-]/);
                        if (1 === r.length && r[0][0].toLowerCase() === r[0][0])
                            return t;
                        for (n = r[0].toLowerCase(),
                        e = 1; e < r.length; e++)
                            n = n + r[e].charAt(0).toUpperCase() + r[e].substring(1).toLowerCase();
                        return n
                    }
                    r.prepended = function(t, e) {
                        return t + (e = r(e))[0].toUpperCase() + e.substring(1)
                    }
                    ,
                    t.exports = r
                }
                , function(t, e, n) {
                    "use strict";
                    var r = n(0)
                      , i = n(2);
                    function o(t, e) {
                        t = t || {},
                        this.options = t,
                        this.defaults = e.defaults,
                        this.states = [],
                        this.transitions = [],
                        this.map = {},
                        this.lifecycle = this.configureLifecycle(),
                        this.init = this.configureInitTransition(t.init),
                        this.data = this.configureData(t.data),
                        this.methods = this.configureMethods(t.methods),
                        this.map[this.defaults.wildcard] = {},
                        this.configureTransitions(t.transitions || []),
                        this.plugins = this.configurePlugins(t.plugins, e.plugin)
                    }
                    r(o.prototype, {
                        addState: function(t) {
                            this.map[t] || (this.states.push(t),
                            this.addStateLifecycleNames(t),
                            this.map[t] = {})
                        },
                        addStateLifecycleNames: function(t) {
                            this.lifecycle.onEnter[t] = i.prepended("onEnter", t),
                            this.lifecycle.onLeave[t] = i.prepended("onLeave", t),
                            this.lifecycle.on[t] = i.prepended("on", t)
                        },
                        addTransition: function(t) {
                            this.transitions.indexOf(t) < 0 && (this.transitions.push(t),
                            this.addTransitionLifecycleNames(t))
                        },
                        addTransitionLifecycleNames: function(t) {
                            this.lifecycle.onBefore[t] = i.prepended("onBefore", t),
                            this.lifecycle.onAfter[t] = i.prepended("onAfter", t),
                            this.lifecycle.on[t] = i.prepended("on", t)
                        },
                        mapTransition: function(t) {
                            var e = t.name
                              , n = t.from
                              , r = t.to;
                            return this.addState(n),
                            "function" != typeof r && this.addState(r),
                            this.addTransition(e),
                            this.map[n][e] = t
                        },
                        configureLifecycle: function() {
                            return {
                                onBefore: {
                                    transition: "onBeforeTransition"
                                },
                                onAfter: {
                                    transition: "onAfterTransition"
                                },
                                onEnter: {
                                    state: "onEnterState"
                                },
                                onLeave: {
                                    state: "onLeaveState"
                                },
                                on: {
                                    transition: "onTransition"
                                }
                            }
                        },
                        configureInitTransition: function(t) {
                            return "string" == typeof t ? this.mapTransition(r({}, this.defaults.init, {
                                to: t,
                                active: !0
                            })) : "object" == typeof t ? this.mapTransition(r({}, this.defaults.init, t, {
                                active: !0
                            })) : (this.addState(this.defaults.init.from),
                            this.defaults.init)
                        },
                        configureData: function(t) {
                            return "function" == typeof t ? t : "object" == typeof t ? function() {
                                return t
                            }
                            : function() {
                                return {}
                            }
                        },
                        configureMethods: function(t) {
                            return t || {}
                        },
                        configurePlugins: function(t, e) {
                            for (var n, r = 0, i = (t = t || []).length; r < i; r++)
                                "function" == typeof (n = t[r]) && (t[r] = n = n()),
                                n.configure && n.configure(this);
                            return t
                        },
                        configureTransitions: function(t) {
                            for (var e, n, r, i, o = this.defaults.wildcard, a = 0; a < t.length; a++)
                                for (n = t[a],
                                r = Array.isArray(n.from) ? n.from : [n.from || o],
                                i = n.to || o,
                                e = 0; e < r.length; e++)
                                    this.mapTransition({
                                        name: n.name,
                                        from: r[e],
                                        to: i
                                    })
                        },
                        transitionFor: function(t, e) {
                            var n = this.defaults.wildcard;
                            return this.map[t][e] || this.map[n][e]
                        },
                        transitionsFor: function(t) {
                            var e = this.defaults.wildcard;
                            return Object.keys(this.map[t]).concat(Object.keys(this.map[e]))
                        },
                        allStates: function() {
                            return this.states
                        },
                        allTransitions: function() {
                            return this.transitions
                        }
                    }),
                    t.exports = o
                }
                , function(t, e, n) {
                    var r = n(0)
                      , i = n(6)
                      , o = n(1)
                      , a = [null, []];
                    function s(t, e) {
                        this.context = t,
                        this.config = e,
                        this.state = e.init.from,
                        this.observers = [t]
                    }
                    r(s.prototype, {
                        init: function(t) {
                            if (r(this.context, this.config.data.apply(this.context, t)),
                            o.hook(this, "init"),
                            this.config.init.active)
                                return this.fire(this.config.init.name, [])
                        },
                        is: function(t) {
                            return Array.isArray(t) ? 0 <= t.indexOf(this.state) : this.state === t
                        },
                        isPending: function() {
                            return this.pending
                        },
                        can: function(t) {
                            return !this.isPending() && !!this.seek(t)
                        },
                        cannot: function(t) {
                            return !this.can(t)
                        },
                        allStates: function() {
                            return this.config.allStates()
                        },
                        allTransitions: function() {
                            return this.config.allTransitions()
                        },
                        transitions: function() {
                            return this.config.transitionsFor(this.state)
                        },
                        seek: function(t, e) {
                            var n = this.config.defaults.wildcard;
                            return "function" == typeof (t = (t = this.config.transitionFor(this.state, t)) && t.to) ? t.apply(this.context, e) : t === n ? this.state : t
                        },
                        fire: function(t, e) {
                            return this.transit(t, this.state, this.seek(t, e), e)
                        },
                        transit: function(t, e, n, r) {
                            var i = this.config.lifecycle
                              , o = this.config.options.observeUnchangedState || e !== n;
                            return n ? this.isPending() ? this.context.onPendingTransition(t, e, n) : (this.config.addState(n),
                            this.beginTransit(),
                            r.unshift({
                                transition: t,
                                from: e,
                                to: n,
                                fsm: this.context
                            }),
                            this.observeEvents([this.observersForEvent(i.onBefore.transition), this.observersForEvent(i.onBefore[t]), o ? this.observersForEvent(i.onLeave.state) : a, o ? this.observersForEvent(i.onLeave[e]) : a, this.observersForEvent(i.on.transition), o ? ["doTransit", [this]] : a, o ? this.observersForEvent(i.onEnter.state) : a, o ? this.observersForEvent(i.onEnter[n]) : a, o ? this.observersForEvent(i.on[n]) : a, this.observersForEvent(i.onAfter.transition), this.observersForEvent(i.onAfter[t]), this.observersForEvent(i.on[t])], r)) : this.context.onInvalidTransition(t, e, n)
                        },
                        beginTransit: function() {
                            this.pending = !0
                        },
                        endTransit: function(t) {
                            return this.pending = !1,
                            t
                        },
                        failTransit: function(t) {
                            throw this.pending = !1,
                            t
                        },
                        doTransit: function(t) {
                            this.state = t.to
                        },
                        observe: function(t) {
                            var e;
                            2 === t.length ? ((e = {})[t[0]] = t[1],
                            this.observers.push(e)) : this.observers.push(t[0])
                        },
                        observersForEvent: function(t) {
                            for (var e, n = 0, r = this.observers.length, i = []; n < r; n++)
                                (e = this.observers[n])[t] && i.push(e);
                            return [t, i, !0]
                        },
                        observeEvents: function(t, e, n, r) {
                            if (0 === t.length)
                                return this.endTransit(void 0 === r || r);
                            var i = t[0][0]
                              , a = t[0][1]
                              , s = t[0][2];
                            return (e[0].event = i) && s && i !== n && o.hook(this, "lifecycle", e),
                            0 === a.length ? (t.shift(),
                            this.observeEvents(t, e, i, r)) : (a = (a = a.shift())[i].apply(a, e)) && "function" == typeof a.then ? a.then(this.observeEvents.bind(this, t, e, i)).catch(this.failTransit.bind(this)) : !1 === a ? this.endTransit(!1) : this.observeEvents(t, e, i, a)
                        },
                        onInvalidTransition: function(t, e, n) {
                            throw new i("transition is invalid in current state",t,e,n,this.state)
                        },
                        onPendingTransition: function(t, e, n) {
                            throw new i("transition is invalid while previous transition is still in progress",t,e,n,this.state)
                        }
                    }),
                    t.exports = s
                }
                , function(t, e, n) {
                    "use strict";
                    var r = n(0)
                      , i = n(2)
                      , o = n(1)
                      , a = n(3)
                      , s = n(4)
                      , u = {
                        is: function(t) {
                            return this._fsm.is(t)
                        },
                        can: function(t) {
                            return this._fsm.can(t)
                        },
                        cannot: function(t) {
                            return this._fsm.cannot(t)
                        },
                        observe: function() {
                            return this._fsm.observe(arguments)
                        },
                        transitions: function() {
                            return this._fsm.transitions()
                        },
                        allTransitions: function() {
                            return this._fsm.allTransitions()
                        },
                        allStates: function() {
                            return this._fsm.allStates()
                        },
                        onInvalidTransition: function(t, e, n) {
                            return this._fsm.onInvalidTransition(t, e, n)
                        },
                        onPendingTransition: function(t, e, n) {
                            return this._fsm.onPendingTransition(t, e, n)
                        }
                    }
                      , c = {
                        state: {
                            configurable: !1,
                            enumerable: !0,
                            get: function() {
                                return this._fsm.state
                            },
                            set: function(t) {
                                throw Error("use transitions to change state")
                            }
                        }
                    };
                    function l(t) {
                        return f(this || {}, t)
                    }
                    function f(t, e) {
                        return d(t, new a(e,l)),
                        t._fsm(),
                        t
                    }
                    function d(t, e) {
                        if ("object" != typeof t || Array.isArray(t))
                            throw Error("StateMachine can only be applied to objects");
                        o.build(t, e),
                        Object.defineProperties(t, c),
                        r(t, u),
                        r(t, e.methods),
                        e.allTransitions().forEach((function(e) {
                            t[i(e)] = function() {
                                return this._fsm.fire(e, [].slice.call(arguments))
                            }
                        }
                        )),
                        t._fsm = function() {
                            this._fsm = new s(this,e),
                            this._fsm.init(arguments)
                        }
                    }
                    l.version = "3.0.1",
                    l.factory = function() {
                        var t, e = "function" == typeof arguments[0] ? (t = arguments[0],
                        arguments[1] || {}) : (t = function() {
                            this._fsm.apply(this, arguments)
                        }
                        ,
                        arguments[0] || {});
                        return e = new a(e,l),
                        d(t.prototype, e),
                        t.prototype._fsm.config = e,
                        t
                    }
                    ,
                    l.apply = f,
                    l.defaults = {
                        wildcard: "*",
                        init: {
                            name: "init",
                            from: "none"
                        }
                    },
                    t.exports = l
                }
                , function(t, e, n) {
                    "use strict";
                    t.exports = function(t, e, n, r, i) {
                        this.message = t,
                        this.transition = e,
                        this.from = n,
                        this.to = r,
                        this.current = i
                    }
                }
                ],
                t.c = n,
                t.i = function(t) {
                    return t
                }
                ,
                t.d = function(e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }
                ,
                t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return t.d(n, "a", n),
                    n
                }
                ,
                t.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                ,
                t.p = "",
                t(t.s = 5);
                function t(r) {
                    if (n[r])
                        return n[r].exports;
                    var i = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(i.exports, i, i.exports, t),
                    i.l = !0,
                    i.exports
                }
                var e, n
            }()
        },
        9868: function(t) {
            var e, n, r, i, o, a;
            t.exports = (e = function(t) {
                return "function" == typeof t
            }
            ,
            n = Math.pow(2, 53) - 1,
            r = function(t) {
                var e = function(t) {
                    var e = Number(t);
                    return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
                }(t);
                return Math.min(Math.max(e, 0), n)
            }
            ,
            i = function(t) {
                if (null != t) {
                    if (["string", "number", "boolean", "symbol"].indexOf(typeof t) > -1)
                        return Symbol.iterator;
                    if ("undefined" != typeof Symbol && "iterator"in Symbol && Symbol.iterator in t)
                        return Symbol.iterator;
                    if ("@@iterator"in t)
                        return "@@iterator"
                }
            }
            ,
            o = function(t, n) {
                if (null != t && null != n) {
                    var r = t[n];
                    if (null == r)
                        return;
                    if (!e(r))
                        throw new TypeError(r + " is not a function");
                    return r
                }
            }
            ,
            a = function(t) {
                var e = t.next();
                return !Boolean(e.done) && e
            }
            ,
            function(t) {
                "use strict";
                var n, s, u, c = this, l = arguments.length > 1 ? arguments[1] : void 0;
                if (void 0 !== l) {
                    if (!e(l))
                        throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (n = arguments[2])
                }
                var f = o(t, i(t));
                if (void 0 !== f) {
                    s = e(c) ? Object(new c) : [];
                    var d, p, h = f.call(t);
                    if (null == h)
                        throw new TypeError("Array.from requires an array-like or iterable object");
                    for (u = 0; ; ) {
                        if (!(d = a(h)))
                            return s.length = u,
                            s;
                        p = d.value,
                        s[u] = l ? l.call(n, p, u) : p,
                        u++
                    }
                } else {
                    var m = Object(t);
                    if (null == t)
                        throw new TypeError("Array.from requires an array-like object - not null or undefined");
                    var y, g = r(m.length);
                    for (s = e(c) ? Object(new c(g)) : new Array(g),
                    u = 0; u < g; )
                        y = m[u],
                        s[u] = l ? l.call(n, y, u) : y,
                        u++;
                    s.length = g
                }
                return s
            }
            )
        },
        9926: function(t, e, n) {
            "use strict";
            var r = n(5360)
              , i = n(1030)
              , o = n(5759)
              , a = n(25)
              , s = n(5612)
              , u = n(3031)
              , c = n(5502)
              , l = n(7372)
              , f = n(8631)
              , d = l("String.prototype.charAt")
              , p = c("%Array.prototype.indexOf%")
              , h = c("%Math.max%");
            t.exports = function(t) {
                var e = arguments.length > 1 ? r(arguments[1]) : 0;
                if (p && !s(t) && u(e) && void 0 !== t)
                    return p.apply(this, arguments) > -1;
                var n = o(this)
                  , c = i(n.length);
                if (0 === c)
                    return !1;
                for (var l = e >= 0 ? e : h(0, c + e); l < c; ) {
                    if (a(t, f(n) ? d(n, l) : n[l]))
                        return !0;
                    l += 1
                }
                return !1
            }
        },
        8165: function(t, e, n) {
            "use strict";
            var r = n(1476)
              , i = n(8069)
              , o = n(5806)
              , a = n(7372)
              , s = n(9926)
              , u = n(4040)
              , c = o.apply(u())
              , l = n(4991)
              , f = a("Array.prototype.slice")
              , d = function(t, e) {
                return i(t),
                c(t, f(arguments, 1))
            };
            r(d, {
                getPolyfill: u,
                implementation: s,
                shim: l
            }),
            t.exports = d
        },
        4040: function(t, e, n) {
            "use strict";
            var r = n(9926);
            t.exports = function() {
                return Array.prototype.includes || r
            }
        },
        4991: function(t, e, n) {
            "use strict";
            var r = n(1476)
              , i = n(4040);
            t.exports = function() {
                var t = i();
                return r(Array.prototype, {
                    includes: t
                }, {
                    includes: function() {
                        return Array.prototype.includes !== t
                    }
                }),
                t
            }
        },
        4005: function(t, e, n) {
            "use strict";
            var r = n(7489)
              , i = n(1419)
              , o = n(6265)
              , a = n(6814)
              , s = n(1030)
              , u = n(5759);
            t.exports = function(t) {
                var e, n = u(this), c = s(o(n, "length"));
                if (!a(t))
                    throw new TypeError("mapperFunction must be a function");
                arguments.length > 1 && (e = arguments[1]);
                var l = r(n, 0);
                return i(l, n, c, 0, 1, t, e),
                l
            }
        },
        3914: function(t, e, n) {
            "use strict";
            var r = n(1476)
              , i = n(5806)
              , o = n(4005)
              , a = n(5967)
              , s = a()
              , u = n(3310)
              , c = i(s);
            r(c, {
                getPolyfill: a,
                implementation: o,
                shim: u
            }),
            t.exports = c
        },
        5967: function(t, e, n) {
            "use strict";
            var r = n(4005);
            t.exports = function() {
                return Array.prototype.flatMap || r
            }
        },
        3310: function(t, e, n) {
            "use strict";
            var r = n(1476)
              , i = n(5967);
            t.exports = function() {
                var t = i();
                return r(Array.prototype, {
                    flatMap: t
                }, {
                    flatMap: function() {
                        return Array.prototype.flatMap !== t
                    }
                }),
                t
            }
        },
        3542: function(t, e, n) {
            "use strict";
            n(7833);
            var r, i, o, a = n(8165), s = n.n(a), u = (n(2758),
            n(2727),
            n(3914)), c = n.n(u), l = n(6811), f = n.n(l), d = ((r = window,
            o = function(t) {
                return t in r[i].m || (r[i].m[t] = {}),
                r[i].m[t]
            }
            ,
            (i = "$sh")in r || (r[i] = {
                m: {},
                module: o
            }),
            o)("core/index"),
            function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")), p = d("dom-helpers/query");
            function h() {
                var t;
                return (t = p).queryAll.apply(t, arguments)
            }
            function m() {
                var t;
                return (t = p).query.apply(t, arguments)
            }
            function y(t) {
                return t || (window.__shadowRoot ? window.__shadowRoot.querySelector("article") : document)
            }
            p.queryAll = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = y(e)
                  , r = n.querySelectorAll(t);
                return Array.from(r)
            }
            ,
            p.query = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = h(t, e);
                return 0 !== n.length && n[0]
            }
            ;
            var g, v;
            n(9698),
            n(7439);
            function b(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            var w, x = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh"), E = x("scrollwatch/index");
            !function(t) {
                t.Near = "nearly visible",
                t.On = "on visibile",
                t.Partial = "partially visible",
                t.Mostly = "mostly visible",
                t.Full = "fully visible",
                t.Lazyload = "lazyload"
            }(w || (w = {})),
            window.Shorthand.lazyloadTriggerMargin = window.Shorthand.lazyloadTriggerMargin || "500%";
            var S = (b(g = {}, w.Near, "100%"),
            b(g, w.On, "0%"),
            b(g, w.Partial, "-10%"),
            b(g, w.Mostly, "-40%"),
            b(g, w.Full, "0px"),
            b(g, w.Lazyload, window.Shorthand.lazyloadTriggerMargin),
            g)
              , T = (b(v = {}, w.Near, [0, .001]),
            b(v, w.Lazyload, [0, .001]),
            b(v, w.On, [0, .001]),
            b(v, w.Mostly, [0, .001]),
            b(v, w.Full, .99),
            b(v, w.Partial, 0),
            v)
              , k = []
              , O = [];
            function _() {
                var t;
                return (t = E).isVisible.apply(t, arguments)
            }
            function A() {
                var t;
                return (t = E).getIntersectionObserver.apply(t, arguments)
            }
            function P() {
                var t;
                return (t = E).onIntersection.apply(t, arguments)
            }
            function I() {
                var t;
                return (t = E).createObservable.apply(t, arguments)
            }
            function C() {
                var t;
                return (t = E).getObservable.apply(t, arguments)
            }
            function j() {
                var t;
                return (t = E).unobserve.apply(t, arguments)
            }
            function L() {
                var t;
                return (t = E).observe.apply(t, arguments)
            }
            function N(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n)
                        return;
                    var r, i, o = [], a = !0, s = !1;
                    try {
                        for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value),
                        !e || o.length !== e); a = !0)
                            ;
                    } catch (t) {
                        s = !0,
                        i = t
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return o
                }(t, e) || function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return R(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return R(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function R(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            E.isVisible = function(t) {
                return t.intersectionRatio >= 1e-5
            }
            ,
            E.getIntersectionObserver = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = k.find((function(n) {
                    return n.triggerPoint === t && n.root === e
                }
                ));
                if (!n) {
                    var r = {
                        rootMargin: S[t],
                        threshold: T[t],
                        root: e
                    }
                      , i = new IntersectionObserver((function(n) {
                        P(n, t, e)
                    }
                    ),r);
                    return k.push({
                        instance: i,
                        triggerPoint: t,
                        root: e
                    }),
                    i
                }
                return n.instance
            }
            ,
            E.onIntersection = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                t.forEach((function(t) {
                    C(t.target, e, n).callbacks.forEach((function(e) {
                        return e(t)
                    }
                    ))
                }
                ))
            }
            ,
            E.createObservable = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , r = {
                    target: t,
                    triggerPoint: e,
                    callbacks: [],
                    root: n
                };
                return O.push(r),
                r
            }
            ,
            E.getObservable = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return O.find((function(r) {
                    return r.target === t && r.triggerPoint === e && r.root === n
                }
                ))
            }
            ,
            E.unobserve = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = e.triggerPoint || w.On
                  , r = e.root || null
                  , i = A(n, r);
                i.unobserve(t)
            }
            ,
            E.observe = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , r = n.triggerPoint || w.On
                  , i = n.root || null
                  , o = A(r)
                  , a = C(t, r, i);
                a || (a = I(t, r, i)),
                a.callbacks.push(e),
                o.observe(t)
            }
            ;
            var M = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , F = M("lazyload/index");
            function D() {
                var t;
                return (t = F).initLazyloadable.apply(t, arguments)
            }
            function B() {
                var t;
                return (t = F).replaceDataAttributes.apply(t, arguments)
            }
            F.initLazyload = function() {
                h("[data-lazyload-container][data-lazyload-trigger]").map((function(t) {
                    return {
                        pictures: h("[data-lazyload-item] picture", t),
                        container: t,
                        trigger: t
                    }
                }
                )).forEach(D)
            }
            ,
            F.initLazyloadable = function(t) {
                var e = t.pictures
                  , n = t.container
                  , r = t.trigger
                  , i = !1
                  , o = function() {
                    i || (j(n),
                    i = !0)
                };
                return L(r, (function(t) {
                    _(t) && (e.forEach((function(t) {
                        return function() {
                            var t;
                            return (t = F).loadPicture.apply(t, arguments)
                        }(t, (function() {
                            return function() {
                                var t;
                                return (t = F).hideLoadingState.apply(t, arguments)
                            }(n)
                        }
                        ))
                    }
                    )),
                    o())
                }
                ), {
                    triggerPoint: w.Lazyload
                }),
                o
            }
            ,
            F.loadPicture = function(t, e) {
                var n = m("img", t)
                  , r = h("source", t);
                n && (n.addEventListener("load", e),
                B(n),
                r.forEach(B))
            }
            ,
            F.replaceDataAttributes = function(t) {
                Object.entries({
                    "data-src": "src",
                    "data-srcset": "srcset"
                }).forEach((function(e) {
                    var n = N(e, 2)
                      , r = n[0]
                      , i = n[1]
                      , o = t.getAttribute(r);
                    o && (t.removeAttribute(r),
                    t.setAttribute(i, o))
                }
                ))
            }
            ,
            F.hideLoadingState = function(t) {
                t.classList.remove("Lazyload--isLoading"),
                t.classList.add("Lazyload--isLoaded")
            }
            ;
            var H = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , z = H("display/index");
            z.initDisplay = function() {}
            ;
            var U = n(1779)
              , W = n.n(U)
              , V = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , $ = V("utils/dom-event-once");
            function q() {
                var t;
                return (t = $).once.apply(t, arguments)
            }
            $.once = function(t, e, n, r) {
                function i() {
                    t.removeEventListener(e, o, r)
                }
                function o() {
                    return i(),
                    n.apply(this, arguments)
                }
                return t.addEventListener(e, o, r),
                i
            }
            ;
            var Y = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , G = Y("device-detect/index")
              , K = n(5856)
              , X = ["android", "ios", "firefoxos", "windows.phone", "windows.mobile", "blackberryos"]
              , J = {
                hasTouch: !1
            }
              , Z = null;
            function Q() {
                var t;
                return (t = G).getDeviceInfo.apply(t, arguments)
            }
            function tt() {
                var t;
                return (t = G).addDeviceClassesToElement.apply(t, arguments)
            }
            function et() {
                var t;
                return (t = G).listenForTouch.apply(t, arguments)
            }
            G.getDeviceInfo = function() {
                if (null === Z) {
                    var t = new K;
                    t.sniff(navigator.userAgent),
                    Z = {
                        isMobile: X.includes(t.os.name),
                        isDesktop: !X.includes(t.os.name),
                        isTablet: !1,
                        isiPhone: "iphone" === t.device.name,
                        isiPad: "ipad" === t.device.name,
                        isAndroid: "android" === t.os.name,
                        isiOS: "ios" === t.os.name,
                        isiOS10: "ios" === t.os.name && 10 === t.os.version[0],
                        isMac: "macos" === t.os.name,
                        isWindows: "windows" === t.os.name,
                        isIE: "ie" === t.browser.name,
                        isEdge: "edge" === t.browser.name,
                        isChrome: "chrome" === t.browser.name,
                        isSafari: "safari" === t.browser.name,
                        isFirefox: "firefox" === t.browser.name,
                        isOpera: "opera" === t.browser.name,
                        isBot: /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent),
                        isCypress: window.Cypress
                    }
                }
                return Z
            }
            ,
            G.addDeviceClassesToElement = function(t) {
                var e = Q()
                  , n = Object.keys(e).reduce((function(t, n) {
                    return t["DeviceDetect--".concat(n)] = e[n],
                    t
                }
                ), {});
                t.className = W()(t.className, n)
            }
            ,
            G.initDeviceDetect = function() {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.documentElement;
                tt((null === (t = window.__shadowRoot) || void 0 === t ? void 0 : t.querySelector("article")) || e),
                et()
            }
            ,
            G.listenForTouch = function() {
                q(document.documentElement, "touchstart", (function() {
                    J.hasTouch = !0,
                    document.documentElement.classList.add("DeviceDetect--isTouch")
                }
                ))
            }
            ;
            var nt = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , rt = nt("layout/flexbox-unsupported");
            rt.isFlexboxSupported = function() {
                var t = document.createElement("div");
                return t.style.display = "flex",
                "flex" === t.style.display
            }
            ,
            rt.initFlexboxUnsupported = function() {
                (function() {
                    var t;
                    return (t = rt).isFlexboxSupported.apply(t, arguments)
                }
                )() || document.documentElement.classList.add("Layout--flexboxUnsupported")
            }
            ;
            var it = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , ot = it("layout/index");
            ot.initLayout = function() {
                !function() {
                    var t;
                    (t = rt).initFlexboxUnsupported.apply(t, arguments)
                }()
            }
            ;
            var at = n(5355)
              , st = n.n(at)
              , ut = (n(3724),
            function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh"))
              , ct = ut("display-container/full-height-flex");
            function lt() {
                var t;
                return (t = ct).initFullHeightFlex.apply(t, arguments)
            }
            function ft(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function dt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            ct.initFullHeightFlex = function() {
                var t = Q()
                  , e = t.isIE
                  , n = t.isEdge;
                if (e || n) {
                    var r = {
                        tallTOMs: []
                    };
                    st().measure((function() {
                        function t() {
                            !function(t) {
                                t.tallTOMs.forEach((function(t) {
                                    st().measure((function() {
                                        var e = t.querySelector(".FullSize--child")
                                          , n = t.querySelector(".DisplayContainer--heightBasis").getBoundingClientRect().height + 200
                                          , r = n + "px"
                                          , i = r;
                                        n < bt.getHeight() ? t.style.setProperty("height", r) : (t.classList.contains("SplitLayout") && bt.getWidth() <= 960 && (r = "calc(".concat(n, " + 50vh)"),
                                        i = "50vh"),
                                        st().mutate((function() {
                                            t.style.setProperty("height", r),
                                            e.style.setProperty("height", i),
                                            h(".FullSize--fixedChild", e).forEach((function(t) {
                                                t.style.setProperty("height", i)
                                            }
                                            )),
                                            e.style.setProperty("clip-path", "polygon(0 0, 0 ".concat(i, ", 100% ").concat(i, ", 100% 0)"))
                                        }
                                        )))
                                    }
                                    ))
                                }
                                ))
                            }(r)
                        }
                        h(".DisplayContainerHeight--flex").forEach((function(t) {
                            r.tallTOMs.push(t)
                        }
                        )),
                        t(),
                        window.addEventListener("resize", t, {
                            passive: !0
                        })
                    }
                    ))
                }
            }
            ;
            var pt, ht = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh"), mt = (ht("display-container/full-view-mode"),
            function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    ft(this, t),
                    this.cache = {
                        width: 0,
                        height: 0,
                        top: 0,
                        bottom: 0
                    },
                    e.measuringElement ? this.measuringElement = e.measuringElement : this.ensureMeasuringElement(),
                    window.addEventListener("resize", this.refresh.bind(this), {
                        passive: !0
                    }),
                    this.refresh()
                }
                var e, n, r;
                return e = t,
                (n = [{
                    key: "ensureMeasuringElement",
                    value: function() {
                        var t = this.measuringElement = document.createElement("div");
                        t.style.width = "100%",
                        t.style.height = "100vh",
                        t.style.zIndex = "-100",
                        t.style.opacity = "0",
                        t.style.position = "absolute",
                        t.style.top = "0",
                        t.setAttribute("id", "viewport-height-element"),
                        document.body.appendChild(t)
                    }
                }, {
                    key: "refresh",
                    value: function() {
                        var t = this.measuringElement.getBoundingClientRect();
                        this.cache.width = t.width,
                        this.cache.height = t.height,
                        this.cache.top = 0,
                        this.cache.bottom = 0
                    }
                }, {
                    key: "getCache",
                    value: function() {
                        return this.cache
                    }
                }]) && dt(e.prototype, n),
                r && dt(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }()), yt = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh"), gt = yt("display-container/index");
            gt.initDisplayContainer = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new mt;
                pt = t,
                lt()
            }
            ;
            var vt = {
                getOrientation: function() {
                    return pt ? vt.getWidth() > vt.getHeight() ? "landscape" : "portrait" : window.innerWidth > window.innerHeight ? "landscape" : "portrait"
                },
                getHeight: function() {
                    return pt.getCache().height
                },
                getWidth: function() {
                    return pt.getCache().width
                },
                getTop: function() {
                    return pt.getCache().top
                },
                getBottom: function() {
                    return pt.getCache().bottom
                },
                getVhUnitsInPixels: function(t) {
                    return vt.getHeight() * (t / 100)
                },
                getDisplayContainer: function() {
                    return pt
                }
            }
              , bt = vt;
            function wt(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n)
                        return;
                    var r, i, o = [], a = !0, s = !1;
                    try {
                        for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value),
                        !e || o.length !== e); a = !0)
                            ;
                    } catch (t) {
                        s = !0,
                        i = t
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return o
                }(t, e) || function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return xt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return xt(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function xt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            var Et, St = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh"), Tt = St("object-fit/index");
            function kt() {
                var t;
                return (t = Tt).ensureObjectFitOrientationIsCorrect.apply(t, arguments)
            }
            function Ot() {
                var t;
                return (t = Tt).applyObjectFit.apply(t, arguments)
            }
            function _t() {
                var t;
                return (t = Tt).fixIEObjectFitForElement.apply(t, arguments)
            }
            function At(t) {
                var e;
                return 0 === (null === (e = t.id) || void 0 === e ? void 0 : e.indexOf("section-")) ? t.className.indexOf("SplitLayout--rowReverse") > -1 ? "media-left" : t.className.indexOf("SplitLayout") > -1 ? "media-right" : "none" : At(t.parentElement)
            }
            function Pt() {
                var t;
                return (t = Tt).initObjectFit.apply(t, arguments)
            }
            function It(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            Tt.doYouEvenFitObjects = function() {
                if (!window)
                    return !1;
                var t = document.querySelector(".ObjectFit--cover");
                if (!t)
                    return !1;
                var e = window.getComputedStyle(t).objectFit
                  , n = Q().isEdge;
                return !!e && /^(contain|cover|fill)$/.test(e) && !n
            }
            ,
            Tt.ensureObjectFitOrientationIsCorrect = function() {
                st().measure((function() {
                    var t = bt.getOrientation();
                    st().mutate((function() {
                        var e = h(".ObjectFit--cover");
                        e.forEach((function(e) {
                            e.dataset.objectFit = "cover";
                            var n = "IMG" === e.tagName ? e.parentElement : e;
                            n.hasAttribute("data-".concat(t, "-focal")) && (e.dataset.objectPosition = n.dataset["".concat(t, "Focal")])
                        }
                        )),
                        Ot(e)
                    }
                    ))
                }
                ))
            }
            ,
            Tt.applyObjectFit = function(t) {
                window.objectFitPolyfill(t),
                function() {
                    var t;
                    (t = Tt).fixIEObjectFit.apply(t, arguments)
                }(t)
            }
            ,
            Tt.fixIEObjectFit = function(t) {
                var e = Q()
                  , n = e.isIE
                  , r = e.isEdge;
                (n || r) && t.forEach((function(t) {
                    return _t(t)
                }
                ))
            }
            ,
            Tt.fixIEObjectFitForElement = function t(e) {
                var n = Q()
                  , r = n.isIE
                  , i = n.isEdge;
                (r || i) && -1 !== e.className.indexOf("FullSize__fixedChild") && st().measure((function() {
                    var n = window.innerWidth > window.innerHeight ? "landscape" : "portrait"
                      , r = At(e);
                    if ("none" !== r) {
                        var o = parseFloat(window.getComputedStyle(e.parentElement).getPropertyValue("width"));
                        if (i)
                            e.style.setProperty("width", "".concat("landscape" === n ? o + "px" : "100%"));
                        else if ("portrait" !== n) {
                            var a = "play"in e ? {
                                width: e.videoWidth,
                                height: e.videoHeight
                            } : {
                                width: e.naturalWidth,
                                height: e.naturalHeight
                            };
                            if (a.width < 1)
                                setTimeout((function() {
                                    return t(e)
                                }
                                ), 100);
                            else {
                                var s = a.width > a.height;
                                st().mutate((function() {
                                    if (s)
                                        "media-left" === r ? "50%" === e.style.getPropertyValue("left") ? e.style.setProperty("transform", "translateX(-".concat(.5 * o, "px)")) : ["", "0px"].includes(e.style.getPropertyValue("margin-left")) ? e.style.setProperty("transform", "translateX(-".concat(.75 * o, "px)")) : e.style.setProperty("transform", "translateX(-".concat(.25 * o, "px)")) : "50%" === e.style.getPropertyValue("left") ? e.style.setProperty("transform", "translateX(".concat(.5 * o, "px)")) : ["", "0px"].includes(e.style.getPropertyValue("margin-left")) ? e.style.setProperty("transform", "translateX(".concat(.25 * o, "px)")) : e.style.setProperty("transform", "translateX(".concat(.75 * o, "px)"));
                                    else {
                                        var t = wt(e.dataset["object-position"].split(" ").map((function(t) {
                                            return parseInt(t, 10)
                                        }
                                        )), 2)
                                          , n = t[0]
                                          , i = t[1]
                                          , a = e.style.getPropertyValue("margin-left") && "0px" !== e.style.getPropertyValue("margin-left")
                                          , u = e.style.getPropertyValue("margin-right") && "0px" !== e.style.getPropertyValue("margin-right");
                                        if ("media-right" === r) {
                                            if (50 === n ? e.style.setProperty("transform", "scale(0.5) translate(".concat(o, "px, 0%)")) : i < 50 ? e.style.setProperty("transform", "scale(0.5) translate(".concat(o, "px, -").concat(50 - i, "%)")) : e.style.setProperty("transform", "scale(0.5) translate(".concat(o, "px, ").concat(i - 50, "%)")),
                                            a)
                                                return void e.style.setProperty("transform", "translateX(".concat(o - Math.abs(parseFloat(e.style.getPropertyValue("margin-left"))), "px)"));
                                            if (u)
                                                return void e.style.setProperty("transform", "translateX(".concat(Math.abs(parseFloat(e.style.getPropertyValue("margin-right"))), "px)"))
                                        } else {
                                            if (50 === i ? e.style.setProperty("transform", "scale(0.5) translate(-".concat(o, "px, 0%)")) : i < 50 ? e.style.setProperty("transform", "scale(0.5) translate(-".concat(o, "px, -").concat(50 - i, "%)")) : e.style.setProperty("transform", "scale(0.5) translate(-".concat(o, "px, ").concat(i - 50, "%)")),
                                            a)
                                                return void e.style.setProperty("transform", "translateX(-".concat(Math.abs(parseFloat(e.style.getPropertyValue("margin-left"))), "px)"));
                                            if (u)
                                                return void e.style.setProperty("transform", "translateX(-".concat(o - Math.abs(parseFloat(e.style.getPropertyValue("margin-right"))), "px)"))
                                        }
                                    }
                                }
                                ))
                            }
                        } else
                            e.style.removeProperty("transform")
                    }
                }
                ))
            }
            ,
            Tt.initObjectFit = function() {
                window.addEventListener("resize", (function() {
                    return kt()
                }
                ), {
                    passive: !0
                }),
                kt()
            }
            ;
            var Ct, jt = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh"), Lt = jt("dom-helpers/inner-size");
            !function(t) {
                t.Width = "clientWidth",
                t.Height = "clientHeight"
            }(Ct || (Ct = {}));
            var Nt = (It(Et = {}, Ct.Width, ["padding-left", "padding-right", "border-left-width", "border-right-width"]),
            It(Et, Ct.Height, ["padding-top", "padding-bottom", "border-top-width", "border-bottom-width"]),
            Et);
            function Rt() {
                var t;
                return (t = Lt).getInnerWidth.apply(t, arguments)
            }
            function Mt() {
                var t;
                return (t = Lt).getInnerHeight.apply(t, arguments)
            }
            function Ft(t, e) {
                var n = Nt[e];
                try {
                    var r = window.getComputedStyle(t)
                      , i = n.reduce((function(t, e) {
                        return t + function(t) {
                            return parseInt(t, 10)
                        }(r.getPropertyValue(e))
                    }
                    ), 0);
                    return function(t, e) {
                        switch (e) {
                        case Ct.Width:
                            return t.clientWidth;
                        case Ct.Height:
                            return t.clientHeight
                        }
                    }(t, e) - i
                } catch (e) {
                    throw new Error("Couldn't get styles for element ".concat(t, " in getInnerDimension"))
                }
            }
            Lt.getInnerWidth = function(t) {
                return Ft(t, Ct.Width)
            }
            ,
            Lt.getInnerHeight = function(t) {
                return Ft(t, Ct.Height)
            }
            ;
            var Dt = n(9200)
              , Bt = n.n(Dt)
              , Ht = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , zt = (Ht("dom-helpers/page-visibility"),
            {
                isHidden: function() {
                    return document[null === Bt() || void 0 === Bt() ? void 0 : Bt().hidden]
                },
                addVisibilityChangeListener: function(t) {
                    return document.addEventListener(Bt().visibilityChange, t)
                }
            })
              , Ut = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Wt = (Ut("utils/request-animation-frame"),
            window.setTimeout)
              , Vt = window.clearTimeout
              , $t = 0
              , qt = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                var e = Date.now()
                  , n = Math.max(0, 16 - (e - $t))
                  , r = Wt((function() {
                    return t(e + n)
                }
                ), n);
                return $t = e + n,
                r
            }
              , Yt = (window.requestAnimationFrame && window.cancelAnimationFrame.bind(window),
            function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh"))
              , Gt = Yt("loop/index")
              , Kt = []
              , Xt = !1;
            function Jt(t) {
                !function(t) {
                    Kt.forEach((function(e) {
                        return e(t)
                    }
                    ))
                }(t),
                Xt && qt(Jt)
            }
            var Zt = !1;
            function Qt() {
                var t;
                return (t = Gt).initLoop.apply(t, arguments)
            }
            function te() {
                var t;
                return (t = Gt).addToLoop.apply(t, arguments)
            }
            function ee() {
                var t;
                return (t = Gt).unLoop.apply(t, arguments)
            }
            Gt.initLoop = function t() {
                Xt || (Zt || (zt.addVisibilityChangeListener((function() {
                    zt.isHidden() ? function() {
                        var t;
                        (t = Gt).stopLoop.apply(t, arguments)
                    }() : t()
                }
                )),
                Zt = !0),
                zt.isHidden() || (Xt = !0,
                qt(Jt)))
            }
            ,
            Gt.stopLoop = function() {
                Xt = !1
            }
            ,
            Gt.addToLoop = function(t) {
                -1 === Kt.indexOf(t) && Kt.push(t),
                Qt()
            }
            ,
            Gt.unLoop = function(t) {
                var e = Kt.indexOf(t);
                -1 !== e && Kt.splice(e, 1)
            }
            ;
            var ne = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , re = ne("stacked-content/index");
            function ie() {
                var t;
                return (t = re).initStackContentEl.apply(t, arguments)
            }
            function oe(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function ae(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? oe(Object(n), !0).forEach((function(e) {
                        se(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function se(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            function ue(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n)
                        return;
                    var r, i, o = [], a = !0, s = !1;
                    try {
                        for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value),
                        !e || o.length !== e); a = !0)
                            ;
                    } catch (t) {
                        s = !0,
                        i = t
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return o
                }(t, e) || function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return ce(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return ce(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ce(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            re.initStackContentEl = function(t) {
                var e = h("[data-stacked-content-fill]", t)
                  , n = h("[data-stacked-content-basis]", t)
                  , r = function() {
                    return function(t, e, n) {
                        if (0 === e.length)
                            return;
                        st().measure((function() {
                            var r = Mt(t);
                            if (r) {
                                var i = n.reduce((function(t, e) {
                                    return t + e.clientHeight
                                }
                                ), 0)
                                  , o = (r - i) / e.length;
                                st().mutate((function() {
                                    e.forEach((function(t) {
                                        return t.style.maxHeight = "".concat(o, "px")
                                    }
                                    ))
                                }
                                ))
                            }
                        }
                        ))
                    }(t, e, n)
                };
                return r(),
                te(r),
                function() {
                    return ee(r)
                }
            }
            ,
            re.initStackedContent = function() {
                return h("[data-stacked-content]").map(ie)
            }
            ;
            var le = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , fe = le("dom-helpers/on-visibility-change")
              , de = Symbol("hidden")
              , pe = Symbol("visible");
            function he() {
                var t;
                return (t = fe).addVisibleElement.apply(t, arguments)
            }
            function me() {
                var t;
                return (t = fe).removeVisibleElement.apply(t, arguments)
            }
            function ye() {
                var t;
                return (t = fe).isPageHidden.apply(t, arguments)
            }
            fe.triggerCallback = function(t, e, n) {
                var r = n.find((function(e) {
                    return ue(e, 1)[0] === t
                }
                ))
                  , i = !!r && r[1];
                return i && i === e || t(e),
                n.filter((function(e) {
                    return ue(e, 1)[0] !== t
                }
                )).concat([[t, e]])
            }
            ,
            fe.render = function(t) {
                var e = t.lastCalls;
                ge.forEach((function(n) {
                    var r = t.isPageHidden || !t.visibleElements.has(n.element) ? de : pe;
                    e = function() {
                        var t;
                        return (t = fe).triggerCallback.apply(t, arguments)
                    }(n.cb, r, e)
                }
                )),
                t.lastCalls = e
            }
            ,
            fe.addVisibleElement = function(t, e) {
                return t.add(e)
            }
            ,
            fe.removeVisibleElement = function(t, e) {
                return t.delete(e),
                t
            }
            ,
            fe.initPageVisibilityChangeListener = function() {
                zt.addVisibilityChangeListener((function() {
                    we({
                        isPageHidden: ye()
                    })
                }
                ))
            }
            ,
            fe.isPageHidden = function() {
                return zt.isHidden()
            }
            ;
            var ge = []
              , ve = {
                isPageHidden: ye(),
                visibleElements: new Set,
                lastCalls: []
            };
            function be() {
                var t;
                return (t = fe).onVisibilityChange.apply(t, arguments)
            }
            function we() {
                var t;
                return (t = fe).setState.apply(t, arguments)
            }
            fe.onVisibilityChange = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w.Near;
                ge.push({
                    cb: e,
                    element: t
                });
                var r = {
                    triggerPoint: n
                }
                  , i = function(e) {
                    var n = ve.visibleElements;
                    we({
                        visibleElements: _(e) ? he(n, t) : me(n, t)
                    })
                };
                return L(t, i, r),
                function() {
                    j(t, r);
                    var n = ge.findIndex((function(n) {
                        return n.element === t && n.cb === e
                    }
                    ));
                    ge.splice(n, 1)
                }
            }
            ,
            fe.setState = function(t) {
                !function() {
                    var t;
                    (t = fe).render.apply(t, arguments)
                }(ve = ae(ae({}, ve), t))
            }
            ,
            fe.initOnVisible = function() {
                !function() {
                    var t;
                    (t = fe).initPageVisibilityChangeListener.apply(t, arguments)
                }()
            }
            ;
            var xe = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Ee = xe("hide-offscreen/index")
              , Se = "HideOffscreen__media--onscreen";
            Ee.initHideOffscreen = function() {
                h(".HideOffscreen--container").map((function(t) {
                    return {
                        container: t,
                        children: h(".HideOffscreen__media", t)
                    }
                }
                )).filter((function(t) {
                    return t.children && t.children.length > 0
                }
                )).forEach((function(t) {
                    be(t.container, (function(e) {
                        switch (e) {
                        case pe:
                            n = t.children,
                            st().mutate((function() {
                                n.forEach((function(t) {
                                    t.classList.add(Se),
                                    Ot([t])
                                }
                                ))
                            }
                            ));
                            break;
                        case de:
                            !function(t) {
                                st().mutate((function() {
                                    t.forEach((function(t) {
                                        return t.classList.remove(Se)
                                    }
                                    ))
                                }
                                ))
                            }(t.children)
                        }
                        var n
                    }
                    ), w.On)
                }
                ))
            }
            ;
            var Te = n(7564)
              , ke = n.n(Te)
              , Oe = n(6763);
            n(674);
            function _e(t) {
                return function(t) {
                    if (Array.isArray(t))
                        return Ae(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                        return Array.from(t)
                }(t) || function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return Ae(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Ae(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Ae(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            function Pe(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a)
                      , u = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i)
            }
            function Ie(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);
                        function a(t) {
                            Pe(o, r, i, a, s, "next", t)
                        }
                        function s(t) {
                            Pe(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            var Ce = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , je = Ce("dom-helpers/classy");
            function Le(t, e, n) {
                return Ne.apply(this, arguments)
            }
            function Ne() {
                return (Ne = Ie(regeneratorRuntime.mark((function t(e, n, r) {
                    var i;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (0 !== r) {
                                    t.next = 3;
                                    break
                                }
                                return e.style.display = n,
                                t.abrupt("return");
                            case 3:
                                return e.style.transition = "all ".concat(r, "ms ease-in-out"),
                                e.style.opacity = "0",
                                e.style.display = n,
                                i = performance.now(),
                                t.next = 9,
                                new Promise((function(t) {
                                    window.requestAnimationFrame((function n(o) {
                                        var a = o - i;
                                        e.style.opacity = "".concat(Math.min(1, a / r)),
                                        a < r ? window.requestAnimationFrame(n) : t()
                                    }
                                    ))
                                }
                                ));
                            case 9:
                                e.style.opacity = "1";
                            case 10:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))).apply(this, arguments)
            }
            function Re() {
                var t;
                return (t = je).updateDisplay.apply(t, arguments)
            }
            function Me(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function Fe(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Me(Object(n), !0).forEach((function(e) {
                        De(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function De(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            function Be(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a)
                      , u = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i)
            }
            je.toggleClassName = function(t, e, n) {
                return void 0 !== n ? function() {
                    var t;
                    return (t = je).ensureClassName.apply(t, arguments)
                }(t, e, n) : t.classList.toggle(e)
            }
            ,
            je.updateDisplay = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200
                  , r = Array.isArray(t) ? t : [t];
                r.forEach((function(t) {
                    Le(t, e, n)
                }
                ))
            }
            ,
            je.ensureClassName = function(t, e, n) {
                var r = t.className.split(/\s+/)
                  , i = r.includes(e)
                  , o = n && !i ? [].concat(_e(r), [e]) : !n && i ? r.filter((function(t) {
                    return t !== e
                }
                )) : r;
                t.className = o.join(" ")
            }
            ;
            var He = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , ze = He("footer/index");
            ze.initFooter = function() {
                var t, e = h("#footer_shorthand_link");
                if (e && function() {
                    var t;
                    (t = ze).updateHost.apply(t, arguments)
                }(e),
                qe.footer) {
                    qe.mobileTitle.forEach((function(t, e) {
                        Ke(qe.mobileTitle[e], qe.footerColumns[e], qe.footerClose[e])
                    }
                    )),
                    Ge(qe.upper),
                    Ge(qe.footerTitles),
                    Ge(qe.footerTitlesTop),
                    Ge(qe.chevron),
                    function() {
                        var t = m(".mailtoForm")
                          , e = new FormData(t)
                          , n = {
                            mailtoEmail: "",
                            previewURL: document.location,
                            title: ""
                        };
                        e.forEach((function(t, e) {
                            n[e] = t
                        }
                        )),
                        "" === n.title && (n.title = "A Shorthand Story");
                        nn(n);
                        var r = m("#mailtoEmail")
                          , i = m("#mailtoButton");
                        r.addEventListener("focus", (function() {
                            i.classList.add("share-btn-active")
                        }
                        )),
                        r.addEventListener("blur", (function(t) {
                            n.mailtoEmail = t.target.value,
                            nn(n),
                            i.classList.remove("share-btn-active")
                        }
                        ));
                        var o = document.querySelector("#qr-code");
                        o && Oe.toCanvas(o, n.previewURL.toString(), {
                            margin: 0,
                            width: 232,
                            color: {
                                dark: "#fff",
                                light: "#353535"
                            }
                        })
                    }(),
                    function() {
                        var t = m("#ShareFooter--form");
                        if (t) {
                            var e = m("#ShareFooter--feedbackButton");
                            t.addEventListener("submit", tn);
                            var n = t.querySelectorAll("input, textarea");
                            n.forEach((function(t) {
                                t.addEventListener("focus", (function() {
                                    e.classList.add("share-btn-active")
                                }
                                ))
                            }
                            )),
                            n.forEach((function(t) {
                                t.addEventListener("blur", (function() {
                                    e.classList.remove("share-btn-active")
                                }
                                ))
                            }
                            ))
                        }
                    }(),
                    Xe(),
                    t = Ue ? "orientationchange" : "resize",
                    window.addEventListener(t, (function() {
                        $e = Ue || window.innerWidth < 900,
                        Xe()
                    }
                    ), {
                        passive: !0
                    });
                    var n = document.body.clientHeight;
                    window.scrollY + window.innerHeight >= n / 3 && qe.footer.classList.add("ShareFooter--open"),
                    document.addEventListener("scroll", Ye, {
                        passive: !0
                    })
                }
            }
            ;
            var Ue = Q().isMobile
              , We = Q().isIE
              , Ve = !1
              , $e = Ue || window.innerWidth < 900
              , qe = {
                footerOuter: m(".ShareFooter--outer"),
                footer: m(".ShareFooter"),
                footerLower: m(".ShareFooter--lower"),
                footerLowerOpen: m(".ShareFooter--lower--open"),
                footerTitles: h(".ShareFooter--col-title"),
                footerTitlesTop: m(".ShareFooter--top-titles"),
                upper: m(".ShareFooter--upper"),
                footerContents: h("[ShareFooter--item]"),
                mobileTitle: h(".ShareFooter--col-title-mobile"),
                footerColumns: h(".ShareFooter--col"),
                footerClose: h(".ShareFooter--mobile-close"),
                openMessage: m(".ShareFooter--open-message"),
                mailtoLink: m(".ShareFooter--mailto"),
                chevron: h(".ShareFooter--chevron-container"),
                mobileHeaders: h(".ShareFooter--mobile-header")
            };
            function Ye() {
                var t = document.body.clientHeight
                  , e = window.scrollY + window.innerHeight;
                e + 1 >= t && !Ve && !$e && (setTimeout((function() {
                    Ve = !0,
                    Xe()
                }
                ), 1500),
                document.removeEventListener("scroll", Ye)),
                e >= t / 3 && !qe.footer.classList.contains("ShareFooter--open") && qe.footer.classList.add("ShareFooter--open")
            }
            function Ge(t) {
                (Array.isArray(t) ? t : [t]).forEach((function(t) {
                    t.addEventListener("click", (function() {
                        Ve = !Ve,
                        Xe()
                    }
                    ), {
                        passive: !0
                    })
                }
                ))
            }
            ze.updateHost = function(t) {
                return (Array.isArray(t) ? t : [t]).forEach((function(t) {
                    t.setAttribute("href", t.getAttribute("href").replace("__host__", window.location.hostname))
                }
                ))
            }
            ;
            var Ke = function(t, e, n) {
                t.addEventListener("click", (function() {
                    Ve = !0,
                    Xe(e)
                }
                ), {
                    passive: !0
                }),
                n.addEventListener("click", (function() {
                    Ve = !1,
                    Xe(e)
                }
                ), {
                    passive: !0
                })
            };
            function Xe() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qe.footerColumns[0];
                switch (!0) {
                case Ve && !$e:
                    Re(qe.upper, "block"),
                    Re(qe.footerTitlesTop, "none", 0),
                    Re(qe.mobileTitle, "none", 0),
                    Re(qe.footerColumns, "flex"),
                    Re(qe.openMessage, "block", 0),
                    Re(qe.footerLower, "none", 0),
                    Re(qe.footerLowerOpen, "grid", 200),
                    Re(qe.chevron, "block", 0),
                    Re(qe.mobileHeaders, "none", 0),
                    Re(qe.footerTitles, "block", 200);
                    break;
                case Ve && $e:
                    Re(qe.footerColumns, "none", 0),
                    Re(t, "block"),
                    Re(qe.upper, "none", 0),
                    Re(qe.mobileTitle, "none", 0),
                    Re(qe.footerLower, "grid"),
                    Re(qe.footerLowerOpen, "grid"),
                    Re(qe.chevron, "none", 0),
                    Re(qe.footerTitles, "none", 0),
                    Re(qe.mobileHeaders, "flex", 200);
                    break;
                case !Ve && $e:
                    Re(qe.footerColumns, "none", 0),
                    Re(qe.upper, "block", 0),
                    Re(qe.mobileTitle, "block", 0),
                    Re(qe.openMessage, "block", 0),
                    Re(qe.footerLower, "grid", 0),
                    Re(qe.footerLowerOpen, "grid", 0),
                    Re(qe.chevron, "none", 0);
                    break;
                case !Ve && !$e:
                    Re(qe.upper, "block"),
                    Re(qe.footerTitlesTop, "grid", 0),
                    Re(qe.footerColumns, "none", 0),
                    Re(qe.mobileTitle, "none", 0),
                    Re(qe.openMessage, "none", 0),
                    Re(qe.footerLower, "grid", 0),
                    Re(qe.footerLowerOpen, "none"),
                    Re(qe.chevron, "block", 0),
                    Re(qe.mobileHeaders, "none", 0);
                    break;
                case We:
                    Re(qe.footerColumns, "none", 0),
                    Re(qe.mobileTitle, "none", 0),
                    Re(qe.openMessage, "none", 0),
                    Re(qe.footerLower, "none", 0),
                    Re(qe.footerLowerOpen, "none"),
                    Re(qe.chevron, "none", 0)
                }
            }
            var Je = {
                feedback: function(t) {
                    if (!(t.length >= 4))
                        return "feedback"
                },
                name: function(t) {
                    if (!t.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/im))
                        return "name"
                },
                email: function(t) {
                    if (!t.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
                        return "email"
                }
            }
              , Ze = function(t) {
                t.reset();
                var e = m("#feedback-success");
                Re(t, "none"),
                Re(e, "block"),
                setTimeout((function() {
                    Re(e, "none"),
                    Re(t, "grid")
                }
                ), 4e3)
            }
              , Qe = function(t, e) {
                function n(t) {
                    var e = m("".concat(t));
                    Re(e, "block"),
                    setTimeout((function() {
                        Re(e, "none")
                    }
                    ), 4e3)
                }
                if ("feedback" !== e.error)
                    if ("name" !== e.error)
                        if ("email" !== e.error) {
                            var r = m("#generic-error");
                            Re(t, "none"),
                            r.innerText = e,
                            Re(r, "block"),
                            setTimeout((function() {
                                Re(r, "none"),
                                Re(t, "grid")
                            }
                            ), 4e3),
                            console.error(e)
                        } else
                            n("#email-error");
                    else
                        n("#name-error");
                else
                    n("#feedback-error")
            }
              , tn = function() {
                var t, e = (t = regeneratorRuntime.mark((function t(e) {
                    var n, r, i, o, a;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e.preventDefault(),
                                n = qe.footer.getAttribute("data-story"),
                                r = e.target,
                                i = new FormData(r),
                                o = {},
                                i.forEach((function(t, e) {
                                    o[e] = ke().sanitize(t)
                                }
                                )),
                                a = Object.keys(Je).reduce((function(t, e) {
                                    var n = Je[e](o[e]);
                                    return n ? Fe(Fe({}, t), {}, {
                                        error: n
                                    }) : t
                                }
                                ), {}),
                                Object.keys(a).length > 0 && Qe(r, a),
                                0 !== Object.keys(a).length) {
                                    t.next = 12;
                                    break
                                }
                                return t.next = 11,
                                en(o, n);
                            case 11:
                                Ze(r);
                            case 12:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )),
                function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);
                        function a(t) {
                            Be(o, r, i, a, s, "next", t)
                        }
                        function s(t) {
                            Be(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    }
                    ))
                }
                );
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            function en(t, e) {
                return fetch("/".concat(e, "/feedback"), {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((function(t) {
                    if (!t.ok)
                        throw new Error("Something went wrong, please try again.")
                }
                ))
            }
            function nn(t) {
                var e = t.mailtoEmail
                  , n = t.previewURL
                  , r = t.title
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qe.mailtoLink;
                i.setAttribute("href", "mailto:".concat(e, "?subject=").concat(encodeURIComponent("Shorthand story for review - ")).concat(r, "&body=").concat(encodeURIComponent("Hello, here's a link to an unpublished (draft) copy of a Shorthand story for the purposes of review:"), "%0D%0A%0D%0A").concat(n, "%0D%0A%0D%0A").concat(encodeURIComponent("This link is for review only, and should not be promoted or shared. The story at this address may still be actively edited, extensively changed, or removed."))),
                i.setAttribute("target", "_blank")
            }
            var rn = n(956)
              , on = n.n(rn)
              , an = n(5856)
              , sn = n.n(an)
              , un = n(7657)
              , cn = n.n(un)
              , ln = n(5654)
              , fn = n.n(ln);
            function dn(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function pn(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? dn(Object(n), !0).forEach((function(e) {
                        hn(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : dn(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function hn(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            var mn = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , yn = mn("position-sticky/sticky-polyfill")
              , gn = {
                listening: !1,
                stickyItems: []
            }
              , vn = {
                top: "StickyPolyfillElement--top",
                stick: "StickyPolyfillElement--stick",
                bottom: "StickyPolyfillElement--bottom"
            }
              , bn = ["scroll", "resize", "load"]
              , wn = cn()("body is scroll container");
            function xn() {
                var t;
                return (t = yn).addStickyElement.apply(t, arguments)
            }
            function En() {
                var t;
                return (t = yn).refreshSticky.apply(t, arguments)
            }
            function Sn() {
                var t;
                return (t = yn).getElementRect.apply(t, arguments)
            }
            function Tn() {
                var t;
                return (t = yn).refreshStickyItem.apply(t, arguments)
            }
            function kn() {
                var t;
                return (t = yn).startListening.apply(t, arguments)
            }
            function On() {
                var t;
                return (t = yn).initStickyPolyfill.apply(t, arguments)
            }
            yn.addStickyElement = function(t) {
                if (!(gn.stickyItems.findIndex((function(e) {
                    return e.element === t
                }
                )) > -1)) {
                    var e = function(t) {
                        return t.parentNode
                    }(t)
                      , n = fn()(e);
                    gn.stickyItems.push({
                        element: t,
                        container: e,
                        scrollContainer: n === document.documentElement || n === document.body ? wn : n,
                        position: t.classList.contains("PositionSticky--bottom") ? "bottom" : "top"
                    }),
                    En(),
                    kn()
                }
            }
            ,
            yn.removeStickyElement = function(t) {
                var e = gn.stickyItems.findIndex((function(e) {
                    return e.element === t
                }
                ));
                -1 !== e && (gn.stickyItems.splice(e, 1),
                0 === gn.stickyItems.length && function() {
                    var t;
                    (t = yn).stopListening.apply(t, arguments)
                }())
            }
            ,
            yn.refreshSticky = function() {
                gn.listening && gn.stickyItems.forEach(Tn)
            }
            ,
            yn.calculateStickyState = function(t, e, n, r) {
                var i = e.top
                  , o = e.bottom - n
                  , a = o - bt.getHeight() < 0
                  , s = o - t.bottom <= 3;
                return ("top" === r ? i > bt.getTop() : bt.getHeight() - t.bottom < 0) ? "top" : a && s ? "bottom" : "stick"
            }
            ,
            yn.getElementRect = function(t) {
                var e = t.getBoundingClientRect()
                  , n = window.getComputedStyle(t);
                return ["top", "right", "bottom", "left"].reduce((function(t, r) {
                    var i = n.getPropertyValue("margin-".concat(r))
                      , o = parseInt(i, 10)
                      , a = Number.isFinite(o) ? o : 0
                      , s = e[r] + a;
                    return pn(pn({}, t), {}, hn({}, r, s))
                }
                ), {})
            }
            ,
            yn.refreshStickyItem = function(t) {
                var e = t.element
                  , n = t.container
                  , r = t.scrollContainer
                  , i = t.position;
                st().measure((function() {
                    var o = Sn(n)
                      , a = function() {
                        var t;
                        return (t = yn).calculateStickyState.apply(t, arguments)
                    }(Sn(e), o, r === wn ? 0 : r.getBoundingClientRect().y, i);
                    if (a !== t.state) {
                        var s = t.element;
                        t.state = a;
                        var u = Object.keys(vn).reduce((function(t, e) {
                            return t[vn[e]] = e === a,
                            t
                        }
                        ), {});
                        st().mutate((function() {
                            s.className = W()(s.className, u)
                        }
                        ))
                    }
                }
                ))
            }
            ,
            yn.startListening = function() {
                gn.listening || (bn.forEach((function(t) {
                    return window.addEventListener(t, En, {
                        passive: !0
                    })
                }
                )),
                [100, 200, 400, 800, 1600, 3200].forEach((function(t) {
                    return setTimeout(En, t)
                }
                )),
                En(),
                gn.listening = !0)
            }
            ,
            yn.stopListening = function() {
                bn.forEach((function(t) {
                    return window.removeEventListener(t, En)
                }
                )),
                gn.listening = !1
            }
            ,
            yn.initStickyPolyfill = function() {
                var t = h(".PositionSticky");
                t.forEach(xn),
                t.forEach((function(t) {
                    return t.classList.remove("PositionSticky")
                }
                )),
                kn()
            }
            ;
            var _n = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , An = _n("position-sticky/index");
            function Pn() {
                on()(".PositionSticky { position: -webkit-sticky !important; position: sticky !important; }")
            }
            An.initSticky = function() {
                var t = function() {
                    var t = "position:"
                      , e = "sticky"
                      , n = document.createElement("a").style
                      , r = " -webkit- -moz- -o- -ms- ".split(" ");
                    n.cssText = t + r.join("sticky;" + t).slice(0, -t.length);
                    var i = -1 !== n.position.indexOf(e)
                      , o = new (sn());
                    o.sniff(navigator.userAgent);
                    var a = o.browser
                      , s = o.os
                      , u = "chrome" === a.name && a.version[0] >= 61 && a.version[0] < 65
                      , c = "ios" === s.name
                      , l = u && !c
                      , f = "edge" === a.name;
                    return i && !l && !f
                }() ? Pn : On;
                t()
            }
            ;
            var In = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Cn = In("text-size/index");
            Cn.noop = function() {}
            ;
            var jn = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Ln = jn("transition-in/fade-in")
              , Nn = {
                mainSelector: ".TransitionIn--fade",
                fadeInClass: "TransitionIn--fadeIn"
            };
            function Rn() {
                var t;
                return (t = Ln).watchTransitionedColumn.apply(t, arguments)
            }
            Ln.initColumnTransitions = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nn
                  , e = h(t.mainSelector);
                e.forEach((function(e) {
                    Rn(e, {
                        fadeInClass: t.fadeInClass
                    })
                }
                ))
            }
            ,
            Ln.watchTransitionedColumn = function(t, e) {
                return t.classList.add(e.fadeInClass),
                L(t, (function(n) {
                    var r = n.rootBounds ? n.rootBounds.top : 0;
                    n.boundingClientRect.top < r && !n.isIntersecting || function() {
                        var t;
                        (t = Ln).toggleTransitionable.apply(t, arguments)
                    }(t, e.fadeInClass, _(n))
                }
                ), {
                    triggerPoint: w.Mostly
                }),
                function() {
                    return j(t)
                }
            }
            ,
            Ln.stopWatchingElement = function(t) {
                j(t)
            }
            ,
            Ln.toggleTransitionable = function(t, e, n) {
                !function() {
                    var t;
                    (t = je).toggleClassName.apply(t, arguments)
                }(t, e, n)
            }
            ;
            var Mn = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Fn = Mn("transition-in/index");
            Fn.inTransitionIn = function() {
                !function() {
                    var t;
                    (t = Ln).initColumnTransitions.apply(t, arguments)
                }()
            }
            ;
            var Dn = n(5853)
              , Bn = n.n(Dn)
              , Hn = n(662)
              , zn = n.n(Hn)
              , Un = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Wn = Un("analytics/element-linger");
            Wn.trackElementLingerTime = function(t, e) {
                var n = {
                    isTracking: !1,
                    trackingStartAt: 0,
                    cumulativeLingerTime: 0
                };
                L(t, (function(t) {
                    if (_(t) && !n.isTracking)
                        n.isTracking = !0,
                        n.trackingStartAt = Date.now();
                    else if (n.isTracking) {
                        n.isTracking = !1;
                        var r = Math.round((Date.now() - n.trackingStartAt) / 1e3);
                        if (r < 5)
                            return;
                        n.cumulativeLingerTime += r,
                        e(r)
                    }
                }
                ))
            }
            ,
            Wn.initElementLinger = function(t, e) {
                t.forEach((function(t, n) {
                    var r, i, o = (r = t.className,
                    null !== (i = r.match(/\bTheme-(\w+Section)\b/)) ? i[1] : "UnknownTypeSection"), a = n.toString().padStart(3, "0") + " " + t.id;
                    !function() {
                        var t;
                        (t = Wn).trackElementLingerTime.apply(t, arguments)
                    }(t, (function(t) {
                        e(o, "linger-seconds", a, t)
                    }
                    ))
                }
                ))
            }
            ;
            var Vn = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , $n = Vn("analytics/google-analytics");
            function qn() {
                var t;
                return (t = $n).gaFallback.apply(t, arguments)
            }
            function Yn() {
                var t;
                return (t = $n).ga.apply(t, arguments)
            }
            $n.gaFallback = function() {}
            ,
            $n.ga = function() {
                var t = window.ga || qn;
                t.apply(void 0, arguments)
            }
            ,
            $n.initGoogleAnalytics = function(t) {
                t.on("logEvent", (function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    Yn.apply(void 0, ["send", "event"].concat(e)),
                    Yn.apply(void 0, ["shorthand.send", "event"].concat(e))
                }
                )),
                t.on("logSocial", (function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    Yn.apply(void 0, ["send", "social"].concat(e)),
                    Yn.apply(void 0, ["shorthand.send", "social"].concat(e))
                }
                ))
            }
            ;
            var Gn = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Kn = Gn("analytics/link-click-tracking");
            Kn.getDataFromLink = function(t) {
                return t.hasAttribute("data-social-share") ? {
                    type: "social",
                    network: t.getAttribute("data-social-share"),
                    target: window.location.href
                } : t.hasAttribute("data-story-nav-item") ? {
                    type: "nav-link",
                    target: t.href
                } : {
                    type: "link",
                    target: t.href,
                    element: t
                }
            }
            ,
            Kn.onLinkClicked = function(t) {
                var e = function() {
                    var t;
                    return (t = Kn).getDataFromLink.apply(t, arguments)
                }(t);
                "social" === e.type ? function() {
                    var t;
                    (t = Jn).logSocial.apply(t, arguments)
                }(e.network, "share", e.target) : Qn(e.type, "click", e.target)
            }
            ,
            Kn.initLinkClickTracking = function() {
                h("a").forEach((function(t) {
                    return t.addEventListener("click", (function() {
                        return function() {
                            var t;
                            return (t = Kn).onLinkClicked.apply(t, arguments)
                        }(t)
                    }
                    ))
                }
                ))
            }
            ;
            var Xn = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Jn = Xn("analytics/index")
              , Zn = new (zn());
            function Qn() {
                var t;
                return (t = Jn).logEvent.apply(t, arguments)
            }
            Jn.logEvent = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                Zn.emit.apply(Zn, ["logEvent"].concat(e))
            }
            ,
            Jn.logSocial = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                Zn.emit.apply(Zn, ["logSocial"].concat(e))
            }
            ,
            Jn.subscribe = function(t, e) {
                Zn.on(t, e)
            }
            ,
            Jn.unsubscribe = function(t, e) {
                Zn.off(t, e)
            }
            ,
            Jn.initAnalytics = function() {
                var t = h(".Theme-Section");
                !function() {
                    var t;
                    (t = $n).initGoogleAnalytics.apply(t, arguments)
                }(Zn),
                function() {
                    var t;
                    (t = Wn).initElementLinger.apply(t, arguments)
                }(t, Qn),
                function() {
                    var t;
                    (t = Kn).initLinkClickTracking.apply(t, arguments)
                }()
            }
            ;
            var tr = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , er = tr("audioboss/index")
              , nr = {};
            function rr() {
                var t;
                return (t = er).makeAudioSourceListener.apply(t, arguments)
            }
            er.makeAudioSourceListener = function(t, e) {
                return function() {
                    nr.pause && nr.instance !== e && nr.pause(),
                    nr.pause = function() {
                        delete nr.pause,
                        t()
                    }
                    ,
                    nr.instance = e
                }
            }
            ;
            var ir = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , or = ir("navigation/prevent-story-scroll");
            or.initPreventStoryScroll = function(t, e) {
                var n = function() {
                    return function() {
                        var t;
                        return (t = or).handleCheck.apply(t, arguments)
                    }(t, e)
                };
                t.addEventListener("change", n),
                n()
            }
            ,
            or.handleCheck = function(t, e) {
                (t.checked ? sr : ur)(e)
            }
            ;
            var ar = function(t) {
                return "".concat(t, "px")
            };
            function sr() {
                var t;
                return (t = or).disableStoryScroll.apply(t, arguments)
            }
            function ur() {
                var t;
                return (t = or).enableStoryScroll.apply(t, arguments)
            }
            function cr(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            or.disableStoryScroll = function(t) {
                var e = t.getBoundingClientRect()
                  , n = e.width
                  , r = e.height
                  , i = e.top;
                Object.assign(t.style, {
                    position: "fixed",
                    top: ar(i),
                    width: ar(n),
                    height: ar(r),
                    overflowY: "scroll"
                })
            }
            ,
            or.enableStoryScroll = function(t) {
                var e = parseInt(t.style.top, 10);
                Object.assign(t.style, {
                    position: "",
                    top: "",
                    width: "",
                    height: "",
                    overflowY: ""
                }),
                window.scrollTo(0, -e)
            }
            ;
            var lr = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , fr = lr("videoplayer/youtube")
              , dr = "[data-videoplayer-youtube]"
              , pr = '[data-projection="360"]'
              , hr = {
                whenApiReady: !1,
                players: []
            };
            function mr() {
                var t;
                return (t = fr).ensureYoutubeScript.apply(t, arguments)
            }
            function yr() {
                var t;
                return (t = fr).initYoutubeVideo.apply(t, arguments)
            }
            function gr() {
                var t;
                return (t = fr).create360VideoLinks.apply(t, arguments)
            }
            function vr() {
                var t;
                return (t = fr).initYoutubeVideos.apply(t, arguments)
            }
            function br(t) {
                return function(t) {
                    if (Array.isArray(t))
                        return wr(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                        return Array.from(t)
                }(t) || function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return wr(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return wr(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function wr(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            fr.ensureYoutubeScript = function(t) {
                hr.whenApiReady || (hr.whenApiReady = new Promise((function(t, e) {
                    window.onYouTubeIframeAPIReady = function() {
                        return t()
                    }
                    ;
                    var n = document.createElement("script");
                    n.src = "//www.youtube.com/player_api",
                    n.id = "__YOUTUBE_API_SCRIPT__",
                    n.async = !0;
                    var r = document.getElementsByTagName("script")[0];
                    r.parentNode.insertBefore(n, r)
                }
                ))),
                hr.whenApiReady.then(t)
            }
            ,
            fr.initYoutubeVideo = function(t) {
                var e = t.getAttribute("data-video-id")
                  , n = new YT.Player(t,{
                    videoId: e,
                    playerVars: {
                        rel: 0
                    },
                    events: {
                        onStateChange: function(t) {
                            if (t.data === YT.PlayerState.PLAYING) {
                                var e = t.target;
                                rr(e.pauseVideo.bind(e), e.getIframe())()
                            }
                            var n = function(t) {
                                var e;
                                return (cr(e = {}, YT.PlayerState.PLAYING, "play"),
                                cr(e, YT.PlayerState.PAUSED, "pause"),
                                cr(e, YT.PlayerState.ENDED, "end"),
                                e)[t.data]
                            }(t);
                            n && function() {
                                var t;
                                (t = fr).logVideoEvent.apply(t, arguments)
                            }(n, t.target)
                        }
                    }
                });
                return n
            }
            ,
            fr.logVideoEvent = function(t, e) {
                var n = e.getVideoData();
                Qn("Videos", t, "".concat(n.title, " (").concat(n.video_id, ")"))
            }
            ,
            fr.getPlayers = function() {
                return hr.players
            }
            ,
            fr.create360VideoLinks = function(t) {
                t.forEach((function(t) {
                    var e = t.getAttribute("data-video-id")
                      , n = t.parentElement
                      , r = document.createElement("div")
                      , i = document.createElement("a");
                    t.removeAttribute("data-videoplayer-youtube"),
                    n.style.backgroundImage = "url('https://img.youtube.com/vi/" + e + "/maxresdefault.jpg')",
                    n.style.backgroundSize = "cover",
                    i.setAttribute("href", "http://www.youtube.com/watch?v=" + e),
                    i.setAttribute("target", "_blank"),
                    i.className = "Theme-360Video-Link",
                    n.parentNode.insertBefore(i, n),
                    i.appendChild(n),
                    i.appendChild(r),
                    r.innerText = "Tap to view 360 video",
                    r.className = "Theme-360Video-Button"
                }
                ))
            }
            ,
            fr.initYoutubeVideos = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dr
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pr
                  , n = h(e);
                Q().isiOS && gr(n);
                var r = h(t);
                0 !== r.length && mr((function() {
                    hr.players = r.map(yr)
                }
                ))
            }
            ;
            var xr = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Er = xr("videoplayer/index")
              , Sr = '<svg xmlns="http://www.w3.org/2000/svg"><symbol id="plyr-captions-off" viewBox="0 0 18 18"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fill-rule="evenodd" fill-opacity=".5"/></symbol><symbol id="plyr-captions-on" viewBox="0 0 18 18"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fill-rule="evenodd"/></symbol><symbol id="plyr-enter-fullscreen" viewBox="0 0 18 18"><path d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"/></symbol><symbol id="plyr-exit-fullscreen" viewBox="0 0 18 18"><path d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"/></symbol><symbol id="plyr-fast-forward" viewBox="0 0 18 18"><path d="M7.875 7.171L0 1v16l7.875-6.171V17L18 9 7.875 1z"/></symbol><symbol id="plyr-muted" viewBox="0 0 18 18"><path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"/></symbol><symbol id="plyr-pause" viewBox="0 0 18 18"><path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM12 1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"/></symbol><symbol id="plyr-play" viewBox="0 0 18 18"><path d="M15.562 8.1L3.87.225C3.052-.337 2 .225 2 1.125v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"/></symbol><symbol id="plyr-restart" viewBox="0 0 18 18"><path d="M9.7 1.2l.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7z"/></symbol><symbol id="plyr-rewind" viewBox="0 0 18 18"><path d="M10.125 1L0 9l10.125 8v-6.171L18 17V1l-7.875 6.171z"/></symbol><symbol id="plyr-volume" viewBox="0 0 18 18"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"/><path d="M11.282 5.282a.909.909 0 0 0 0 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 0 0 0 1.316c.145.145.636.262 1.018.156a.725.725 0 0 0 .298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 0 0-1.316 0zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"/></symbol></svg>'
              , Tr = [];
            function kr() {
                var t;
                return (t = Er).resolveURL.apply(t, arguments)
            }
            Er.initVideoPlayers = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = t.iconUrl;
                if (t.body && !e) {
                    var n = new DOMParser
                      , r = n.parseFromString(Sr, "image/svg+xml")
                      , i = document.createElement("div");
                    i.style.display = "none",
                    i.id = "__PLYR_SVGICON_CONTAINER__",
                    i.appendChild(r.childNodes[0]),
                    t.body.appendChild(i),
                    e = ""
                }
                var o = h("[data-videoplayer]")
                  , a = Ar();
                o.forEach((function(t) {
                    var n = t.querySelector("[data-videoplayer-media]");
                    if (n) {
                        Tr.push.apply(Tr, br(Bn().setup(n, {
                            iconUrl: e,
                            loadSprite: !1
                        })));
                        var r = Tr[Tr.length - 1];
                        r.sources = {
                            portrait: kr(n.getAttribute("data-portrait")),
                            landscape: kr(n.getAttribute("data-landscape"))
                        },
                        r.posters = {
                            portrait: n.getAttribute("data-portrait-poster") || n.getAttribute("data-landscape-poster"),
                            landscape: n.getAttribute("data-landscape-poster")
                        },
                        r.source({
                            type: "video",
                            sources: [{
                                src: r.sources[a],
                                type: "video/mp4"
                            }]
                        }),
                        r.posters[a] && r.poster(r.posters[a]);
                        var i = r.pause.bind(r)
                          , o = document.documentElement
                          , s = t.closest("[class*='Layer--']");
                        r.on("play", rr(i, n)),
                        r.on("enterfullscreen", (function() {
                            return sr(o)
                        }
                        )),
                        r.on("enterfullscreen", (function() {
                            return s.classList.add("Levels--god")
                        }
                        )),
                        r.on("exitfullscreen", (function() {
                            return ur(o)
                        }
                        )),
                        r.on("exitfullscreen", (function() {
                            return s.classList.remove("Levels--god")
                        }
                        )),
                        Or.forEach((function(t) {
                            var e = t.event
                              , n = t.pretty;
                            return r.on(e, _r(r)(n))
                        }
                        ))
                    }
                }
                )),
                vr(),
                ["resize", "orientationchange"].forEach((function(t) {
                    window.addEventListener(t, Pr, {
                        passive: !0
                    })
                }
                ))
            }
            ,
            Er.resolveURL = function(t) {
                var e = document.createElement("a");
                return e.href = t,
                e.href
            }
            ;
            var Or = [{
                event: "play",
                pretty: "play"
            }, {
                event: "pause",
                pretty: "pause"
            }, {
                event: "ended",
                pretty: "end"
            }]
              , _r = function(t) {
                return function(e) {
                    return function() {
                        var n = t.getMedia().currentSrc;
                        Qn("Videos", e, n)
                    }
                }
            };
            function Ar() {
                return bt.getWidth() < 900 ? "portrait" : "landscape"
            }
            function Pr() {
                var t;
                return (t = Er).onVideoPlayerResize.apply(t, arguments)
            }
            Er.onVideoPlayerResize = function() {
                var t = Ar();
                Tr.filter((function(e) {
                    return e.source() !== e.sources[t]
                }
                )).forEach((function(e) {
                    e.source({
                        type: "video",
                        sources: [{
                            src: e.sources[t],
                            type: "video/mp4"
                        }],
                        poster: e.posters[t]
                    })
                }
                ))
            }
            ;
            var Ir = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Cr = Ir("inline-media/index");
            Cr.noop = function() {}
            ;
            var jr = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Lr = jr("soundcloud/index");
            function Nr() {
                var t;
                return (t = Lr).initializePlayer.apply(t, arguments)
            }
            Lr.ensureApiScriptLoaded = function(t) {
                var e = document.createElement("script");
                e.type = "text/javascript",
                e.async = !0,
                e.addEventListener("load", t),
                e.src = "https://w.soundcloud.com/player/api.js";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(e, n)
            }
            ,
            Lr.initializePlayer = function(t) {
                var e = function() {
                    var t;
                    return (t = Lr).makeSoundCloudWidget.apply(t, arguments)
                }({
                    src: t.getAttribute("data-src"),
                    height: t.getAttribute("data-height")
                });
                e.addEventListener("load", (function() {
                    !function() {
                        var t;
                        (t = Lr).ensureApiScriptLoaded.apply(t, arguments)
                    }((function() {
                        t.classList.remove("SoundCloudPlayer--initializing"),
                        function() {
                            var t;
                            (t = Lr).setupAudioBoss.apply(t, arguments)
                        }(new SC.Widget(e), e)
                    }
                    ))
                }
                )),
                t.appendChild(e)
            }
            ,
            Lr.setupAudioBoss = function(t, e) {
                var n = t.pause.bind(t);
                t.bind(SC.Widget.Events.READY, (function() {
                    t.bind(SC.Widget.Events.PLAY, rr(n, e))
                }
                ))
            }
            ,
            Lr.makeSoundCloudWidget = function(t) {
                var e = document.createElement("iframe")
                  , n = {
                    width: "100%",
                    scrolling: "no",
                    frameborder: "no",
                    src: t.src,
                    height: t.height
                };
                return Object.keys(n).forEach((function(t) {
                    return e.setAttribute(t, n[t])
                }
                )),
                e
            }
            ,
            Lr.initSoundCloudWidgets = function() {
                var t = h("[data-soundcloud]");
                window.addEventListener("load", (function() {
                    setTimeout((function() {
                        return t.forEach(Nr)
                    }
                    ), 100)
                }
                ))
            }
            ;
            var Rr = function() {
                return Rr = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n])
                            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }
                ,
                Rr.apply(this, arguments)
            };
            function Mr(t) {
                var e = "function" == typeof Symbol && Symbol.iterator
                  , n = e && t[e]
                  , r = 0;
                if (n)
                    return n.call(t);
                if (t && "number" == typeof t.length)
                    return {
                        next: function() {
                            return t && r >= t.length && (t = void 0),
                            {
                                value: t && t[r++],
                                done: !t
                            }
                        }
                    };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }
            function Fr(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n)
                    return t;
                var r, i, o = n.call(t), a = [];
                try {
                    for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
                        a.push(r.value)
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return a
            }
            function Dr() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t = t.concat(Fr(arguments[e]));
                return t
            }
            var Br = n(6903);
            function Hr() {
                var t = (0,
                Br.R)()
                  , e = t.crypto || t.msCrypto;
                if (void 0 !== e && e.getRandomValues) {
                    var n = new Uint16Array(8);
                    e.getRandomValues(n),
                    n[3] = 4095 & n[3] | 16384,
                    n[4] = 16383 & n[4] | 32768;
                    var r = function(t) {
                        for (var e = t.toString(16); e.length < 4; )
                            e = "0" + e;
                        return e
                    };
                    return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                }
                ))
            }
            var zr = n(2448)
              , Ur = n(7449)
              , Wr = (0,
            Br.R)()
              , Vr = "Sentry Logger "
              , $r = ["debug", "info", "warn", "error", "log", "assert"];
            function qr(t) {
                var e = (0,
                Br.R)();
                if (!("console"in e))
                    return t();
                var n = e.console
                  , r = {};
                $r.forEach((function(t) {
                    t in e.console && n[t].__sentry_original__ && (r[t] = n[t],
                    n[t] = n[t].__sentry_original__)
                }
                ));
                var i = t();
                return Object.keys(r).forEach((function(t) {
                    n[t] = r[t]
                }
                )),
                i
            }
            var Yr = function() {
                function t() {
                    this._enabled = !1
                }
                return t.prototype.disable = function() {
                    this._enabled = !1
                }
                ,
                t.prototype.enable = function() {
                    this._enabled = !0
                }
                ,
                t.prototype.log = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    this._enabled && qr((function() {
                        var e;
                        (e = Wr.console).log.apply(e, Dr([Vr + "[Log]:"], t))
                    }
                    ))
                }
                ,
                t.prototype.warn = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    this._enabled && qr((function() {
                        var e;
                        (e = Wr.console).warn.apply(e, Dr([Vr + "[Warn]:"], t))
                    }
                    ))
                }
                ,
                t.prototype.error = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    this._enabled && qr((function() {
                        var e;
                        (e = Wr.console).error.apply(e, Dr([Vr + "[Error]:"], t))
                    }
                    ))
                }
                ,
                t
            }()
              , Gr = Wr.__SENTRY__ || {}
              , Kr = Gr.logger || new Yr;
            (0,
            Ur.c)() && (Gr.logger = Kr,
            Wr.__SENTRY__ = Gr);
            var Xr = n(9606)
              , Jr = Object.prototype.toString;
            function Zr(t, e) {
                return Jr.call(t) === "[object " + e + "]"
            }
            function Qr(t) {
                return Zr(t, "Object")
            }
            function ti(t) {
                return Boolean(t && t.then && "function" == typeof t.then)
            }
            var ei = function() {
                function t(t) {
                    var e = this;
                    this._state = 0,
                    this._handlers = [],
                    this._resolve = function(t) {
                        e._setResult(1, t)
                    }
                    ,
                    this._reject = function(t) {
                        e._setResult(2, t)
                    }
                    ,
                    this._setResult = function(t, n) {
                        0 === e._state && (ti(n) ? n.then(e._resolve, e._reject) : (e._state = t,
                        e._value = n,
                        e._executeHandlers()))
                    }
                    ,
                    this._executeHandlers = function() {
                        if (0 !== e._state) {
                            var t = e._handlers.slice();
                            e._handlers = [],
                            t.forEach((function(t) {
                                t[0] || (1 === e._state && t[1](e._value),
                                2 === e._state && t[2](e._value),
                                t[0] = !0)
                            }
                            ))
                        }
                    }
                    ;
                    try {
                        t(this._resolve, this._reject)
                    } catch (t) {
                        this._reject(t)
                    }
                }
                return t.prototype.then = function(e, n) {
                    var r = this;
                    return new t((function(t, i) {
                        r._handlers.push([!1, function(n) {
                            if (e)
                                try {
                                    t(e(n))
                                } catch (t) {
                                    i(t)
                                }
                            else
                                t(n)
                        }
                        , function(e) {
                            if (n)
                                try {
                                    t(n(e))
                                } catch (t) {
                                    i(t)
                                }
                            else
                                i(e)
                        }
                        ]),
                        r._executeHandlers()
                    }
                    ))
                }
                ,
                t.prototype.catch = function(t) {
                    return this.then((function(t) {
                        return t
                    }
                    ), t)
                }
                ,
                t.prototype.finally = function(e) {
                    var n = this;
                    return new t((function(t, r) {
                        var i, o;
                        return n.then((function(t) {
                            o = !1,
                            i = t,
                            e && e()
                        }
                        ), (function(t) {
                            o = !0,
                            i = t,
                            e && e()
                        }
                        )).then((function() {
                            o ? r(i) : t(i)
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }()
              , ni = function() {
                function t() {
                    this._notifyingListeners = !1,
                    this._scopeListeners = [],
                    this._eventProcessors = [],
                    this._breadcrumbs = [],
                    this._user = {},
                    this._tags = {},
                    this._extra = {},
                    this._contexts = {},
                    this._sdkProcessingMetadata = {}
                }
                return t.clone = function(e) {
                    var n = new t;
                    return e && (n._breadcrumbs = Dr(e._breadcrumbs),
                    n._tags = Rr({}, e._tags),
                    n._extra = Rr({}, e._extra),
                    n._contexts = Rr({}, e._contexts),
                    n._user = e._user,
                    n._level = e._level,
                    n._span = e._span,
                    n._session = e._session,
                    n._transactionName = e._transactionName,
                    n._fingerprint = e._fingerprint,
                    n._eventProcessors = Dr(e._eventProcessors),
                    n._requestSession = e._requestSession),
                    n
                }
                ,
                t.prototype.addScopeListener = function(t) {
                    this._scopeListeners.push(t)
                }
                ,
                t.prototype.addEventProcessor = function(t) {
                    return this._eventProcessors.push(t),
                    this
                }
                ,
                t.prototype.setUser = function(t) {
                    return this._user = t || {},
                    this._session && this._session.update({
                        user: t
                    }),
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.getUser = function() {
                    return this._user
                }
                ,
                t.prototype.getRequestSession = function() {
                    return this._requestSession
                }
                ,
                t.prototype.setRequestSession = function(t) {
                    return this._requestSession = t,
                    this
                }
                ,
                t.prototype.setTags = function(t) {
                    return this._tags = Rr(Rr({}, this._tags), t),
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.setTag = function(t, e) {
                    var n;
                    return this._tags = Rr(Rr({}, this._tags), ((n = {})[t] = e,
                    n)),
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.setExtras = function(t) {
                    return this._extra = Rr(Rr({}, this._extra), t),
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.setExtra = function(t, e) {
                    var n;
                    return this._extra = Rr(Rr({}, this._extra), ((n = {})[t] = e,
                    n)),
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.setFingerprint = function(t) {
                    return this._fingerprint = t,
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.setLevel = function(t) {
                    return this._level = t,
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.setTransactionName = function(t) {
                    return this._transactionName = t,
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.setTransaction = function(t) {
                    return this.setTransactionName(t)
                }
                ,
                t.prototype.setContext = function(t, e) {
                    var n;
                    return null === e ? delete this._contexts[t] : this._contexts = Rr(Rr({}, this._contexts), ((n = {})[t] = e,
                    n)),
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.setSpan = function(t) {
                    return this._span = t,
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.getSpan = function() {
                    return this._span
                }
                ,
                t.prototype.getTransaction = function() {
                    var t = this.getSpan();
                    return t && t.transaction
                }
                ,
                t.prototype.setSession = function(t) {
                    return t ? this._session = t : delete this._session,
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.getSession = function() {
                    return this._session
                }
                ,
                t.prototype.update = function(e) {
                    if (!e)
                        return this;
                    if ("function" == typeof e) {
                        var n = e(this);
                        return n instanceof t ? n : this
                    }
                    return e instanceof t ? (this._tags = Rr(Rr({}, this._tags), e._tags),
                    this._extra = Rr(Rr({}, this._extra), e._extra),
                    this._contexts = Rr(Rr({}, this._contexts), e._contexts),
                    e._user && Object.keys(e._user).length && (this._user = e._user),
                    e._level && (this._level = e._level),
                    e._fingerprint && (this._fingerprint = e._fingerprint),
                    e._requestSession && (this._requestSession = e._requestSession)) : Qr(e) && (e = e,
                    this._tags = Rr(Rr({}, this._tags), e.tags),
                    this._extra = Rr(Rr({}, this._extra), e.extra),
                    this._contexts = Rr(Rr({}, this._contexts), e.contexts),
                    e.user && (this._user = e.user),
                    e.level && (this._level = e.level),
                    e.fingerprint && (this._fingerprint = e.fingerprint),
                    e.requestSession && (this._requestSession = e.requestSession)),
                    this
                }
                ,
                t.prototype.clear = function() {
                    return this._breadcrumbs = [],
                    this._tags = {},
                    this._extra = {},
                    this._user = {},
                    this._contexts = {},
                    this._level = void 0,
                    this._transactionName = void 0,
                    this._fingerprint = void 0,
                    this._requestSession = void 0,
                    this._span = void 0,
                    this._session = void 0,
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.addBreadcrumb = function(t, e) {
                    var n = "number" == typeof e ? Math.min(e, 100) : 100;
                    if (n <= 0)
                        return this;
                    var r = Rr({
                        timestamp: (0,
                        zr.yW)()
                    }, t);
                    return this._breadcrumbs = Dr(this._breadcrumbs, [r]).slice(-n),
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.clearBreadcrumbs = function() {
                    return this._breadcrumbs = [],
                    this._notifyScopeListeners(),
                    this
                }
                ,
                t.prototype.applyToEvent = function(t, e) {
                    if (this._extra && Object.keys(this._extra).length && (t.extra = Rr(Rr({}, this._extra), t.extra)),
                    this._tags && Object.keys(this._tags).length && (t.tags = Rr(Rr({}, this._tags), t.tags)),
                    this._user && Object.keys(this._user).length && (t.user = Rr(Rr({}, this._user), t.user)),
                    this._contexts && Object.keys(this._contexts).length && (t.contexts = Rr(Rr({}, this._contexts), t.contexts)),
                    this._level && (t.level = this._level),
                    this._transactionName && (t.transaction = this._transactionName),
                    this._span) {
                        t.contexts = Rr({
                            trace: this._span.getTraceContext()
                        }, t.contexts);
                        var n = this._span.transaction && this._span.transaction.name;
                        n && (t.tags = Rr({
                            transaction: n
                        }, t.tags))
                    }
                    return this._applyFingerprint(t),
                    t.breadcrumbs = Dr(t.breadcrumbs || [], this._breadcrumbs),
                    t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0,
                    t.sdkProcessingMetadata = this._sdkProcessingMetadata,
                    this._notifyEventProcessors(Dr(ri(), this._eventProcessors), t, e)
                }
                ,
                t.prototype.setSDKProcessingMetadata = function(t) {
                    return this._sdkProcessingMetadata = Rr(Rr({}, this._sdkProcessingMetadata), t),
                    this
                }
                ,
                t.prototype._notifyEventProcessors = function(t, e, n, r) {
                    var i = this;
                    return void 0 === r && (r = 0),
                    new ei((function(o, a) {
                        var s = t[r];
                        if (null === e || "function" != typeof s)
                            o(e);
                        else {
                            var u = s(Rr({}, e), n);
                            ti(u) ? u.then((function(e) {
                                return i._notifyEventProcessors(t, e, n, r + 1).then(o)
                            }
                            )).then(null, a) : i._notifyEventProcessors(t, u, n, r + 1).then(o).then(null, a)
                        }
                    }
                    ))
                }
                ,
                t.prototype._notifyScopeListeners = function() {
                    var t = this;
                    this._notifyingListeners || (this._notifyingListeners = !0,
                    this._scopeListeners.forEach((function(e) {
                        e(t)
                    }
                    )),
                    this._notifyingListeners = !1)
                }
                ,
                t.prototype._applyFingerprint = function(t) {
                    t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [],
                    this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                    t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                }
                ,
                t
            }();
            function ri() {
                var t = (0,
                Br.R)();
                return t.__SENTRY__ = t.__SENTRY__ || {},
                t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [],
                t.__SENTRY__.globalEventProcessors
            }
            function ii(t) {
                var e, n;
                if (Qr(t)) {
                    var r = t
                      , i = {};
                    try {
                        for (var o = Mr(Object.keys(r)), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            void 0 !== r[s] && (i[s] = ii(r[s]))
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            a && !a.done && (n = o.return) && n.call(o)
                        } finally {
                            if (e)
                                throw e.error
                        }
                    }
                    return i
                }
                return Array.isArray(t) ? t.map(ii) : t
            }
            var oi = function() {
                function t(t) {
                    this.errors = 0,
                    this.sid = Hr(),
                    this.duration = 0,
                    this.status = "ok",
                    this.init = !0,
                    this.ignoreDuration = !1;
                    var e = (0,
                    zr.ph)();
                    this.timestamp = e,
                    this.started = e,
                    t && this.update(t)
                }
                return t.prototype.update = function(t) {
                    if (void 0 === t && (t = {}),
                    t.user && (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address),
                    this.did || t.did || (this.did = t.user.id || t.user.email || t.user.username)),
                    this.timestamp = t.timestamp || (0,
                    zr.ph)(),
                    t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
                    t.sid && (this.sid = 32 === t.sid.length ? t.sid : Hr()),
                    void 0 !== t.init && (this.init = t.init),
                    !this.did && t.did && (this.did = "" + t.did),
                    "number" == typeof t.started && (this.started = t.started),
                    this.ignoreDuration)
                        this.duration = void 0;
                    else if ("number" == typeof t.duration)
                        this.duration = t.duration;
                    else {
                        var e = this.timestamp - this.started;
                        this.duration = e >= 0 ? e : 0
                    }
                    t.release && (this.release = t.release),
                    t.environment && (this.environment = t.environment),
                    !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress),
                    !this.userAgent && t.userAgent && (this.userAgent = t.userAgent),
                    "number" == typeof t.errors && (this.errors = t.errors),
                    t.status && (this.status = t.status)
                }
                ,
                t.prototype.close = function(t) {
                    t ? this.update({
                        status: t
                    }) : "ok" === this.status ? this.update({
                        status: "exited"
                    }) : this.update()
                }
                ,
                t.prototype.toJSON = function() {
                    return ii({
                        sid: "" + this.sid,
                        init: this.init,
                        started: new Date(1e3 * this.started).toISOString(),
                        timestamp: new Date(1e3 * this.timestamp).toISOString(),
                        status: this.status,
                        errors: this.errors,
                        did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                        duration: this.duration,
                        attrs: {
                            release: this.release,
                            environment: this.environment,
                            ip_address: this.ipAddress,
                            user_agent: this.userAgent
                        }
                    })
                }
                ,
                t
            }()
              , ai = function() {
                function t(t, e, n) {
                    void 0 === e && (e = new ni),
                    void 0 === n && (n = 4),
                    this._version = n,
                    this._stack = [{}],
                    this.getStackTop().scope = e,
                    t && this.bindClient(t)
                }
                return t.prototype.isOlderThan = function(t) {
                    return this._version < t
                }
                ,
                t.prototype.bindClient = function(t) {
                    this.getStackTop().client = t,
                    t && t.setupIntegrations && t.setupIntegrations()
                }
                ,
                t.prototype.pushScope = function() {
                    var t = ni.clone(this.getScope());
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: t
                    }),
                    t
                }
                ,
                t.prototype.popScope = function() {
                    return !(this.getStack().length <= 1) && !!this.getStack().pop()
                }
                ,
                t.prototype.withScope = function(t) {
                    var e = this.pushScope();
                    try {
                        t(e)
                    } finally {
                        this.popScope()
                    }
                }
                ,
                t.prototype.getClient = function() {
                    return this.getStackTop().client
                }
                ,
                t.prototype.getScope = function() {
                    return this.getStackTop().scope
                }
                ,
                t.prototype.getStack = function() {
                    return this._stack
                }
                ,
                t.prototype.getStackTop = function() {
                    return this._stack[this._stack.length - 1]
                }
                ,
                t.prototype.captureException = function(t, e) {
                    var n = this._lastEventId = e && e.event_id ? e.event_id : Hr()
                      , r = e;
                    if (!e) {
                        var i = void 0;
                        try {
                            throw new Error("Sentry syntheticException")
                        } catch (t) {
                            i = t
                        }
                        r = {
                            originalException: t,
                            syntheticException: i
                        }
                    }
                    return this._invokeClient("captureException", t, Rr(Rr({}, r), {
                        event_id: n
                    })),
                    n
                }
                ,
                t.prototype.captureMessage = function(t, e, n) {
                    var r = this._lastEventId = n && n.event_id ? n.event_id : Hr()
                      , i = n;
                    if (!n) {
                        var o = void 0;
                        try {
                            throw new Error(t)
                        } catch (t) {
                            o = t
                        }
                        i = {
                            originalException: t,
                            syntheticException: o
                        }
                    }
                    return this._invokeClient("captureMessage", t, e, Rr(Rr({}, i), {
                        event_id: r
                    })),
                    r
                }
                ,
                t.prototype.captureEvent = function(t, e) {
                    var n = e && e.event_id ? e.event_id : Hr();
                    return "transaction" !== t.type && (this._lastEventId = n),
                    this._invokeClient("captureEvent", t, Rr(Rr({}, e), {
                        event_id: n
                    })),
                    n
                }
                ,
                t.prototype.lastEventId = function() {
                    return this._lastEventId
                }
                ,
                t.prototype.addBreadcrumb = function(t, e) {
                    var n = this.getStackTop()
                      , r = n.scope
                      , i = n.client;
                    if (r && i) {
                        var o = i.getOptions && i.getOptions() || {}
                          , a = o.beforeBreadcrumb
                          , s = void 0 === a ? null : a
                          , u = o.maxBreadcrumbs
                          , c = void 0 === u ? 100 : u;
                        if (!(c <= 0)) {
                            var l = (0,
                            zr.yW)()
                              , f = Rr({
                                timestamp: l
                            }, t)
                              , d = s ? qr((function() {
                                return s(f, e)
                            }
                            )) : f;
                            null !== d && r.addBreadcrumb(d, c)
                        }
                    }
                }
                ,
                t.prototype.setUser = function(t) {
                    var e = this.getScope();
                    e && e.setUser(t)
                }
                ,
                t.prototype.setTags = function(t) {
                    var e = this.getScope();
                    e && e.setTags(t)
                }
                ,
                t.prototype.setExtras = function(t) {
                    var e = this.getScope();
                    e && e.setExtras(t)
                }
                ,
                t.prototype.setTag = function(t, e) {
                    var n = this.getScope();
                    n && n.setTag(t, e)
                }
                ,
                t.prototype.setExtra = function(t, e) {
                    var n = this.getScope();
                    n && n.setExtra(t, e)
                }
                ,
                t.prototype.setContext = function(t, e) {
                    var n = this.getScope();
                    n && n.setContext(t, e)
                }
                ,
                t.prototype.configureScope = function(t) {
                    var e = this.getStackTop()
                      , n = e.scope
                      , r = e.client;
                    n && r && t(n)
                }
                ,
                t.prototype.run = function(t) {
                    var e = ui(this);
                    try {
                        t(this)
                    } finally {
                        ui(e)
                    }
                }
                ,
                t.prototype.getIntegration = function(t) {
                    var e = this.getClient();
                    if (!e)
                        return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        return (0,
                        Ur.c)() && Kr.warn("Cannot retrieve integration " + t.id + " from the current Hub"),
                        null
                    }
                }
                ,
                t.prototype.startSpan = function(t) {
                    return this._callExtensionMethod("startSpan", t)
                }
                ,
                t.prototype.startTransaction = function(t, e) {
                    return this._callExtensionMethod("startTransaction", t, e)
                }
                ,
                t.prototype.traceHeaders = function() {
                    return this._callExtensionMethod("traceHeaders")
                }
                ,
                t.prototype.captureSession = function(t) {
                    if (void 0 === t && (t = !1),
                    t)
                        return this.endSession();
                    this._sendSessionUpdate()
                }
                ,
                t.prototype.endSession = function() {
                    var t = this.getStackTop()
                      , e = t && t.scope
                      , n = e && e.getSession();
                    n && n.close(),
                    this._sendSessionUpdate(),
                    e && e.setSession()
                }
                ,
                t.prototype.startSession = function(t) {
                    var e = this.getStackTop()
                      , n = e.scope
                      , r = e.client
                      , i = r && r.getOptions() || {}
                      , o = i.release
                      , a = i.environment
                      , s = ((0,
                    Br.R)().navigator || {}).userAgent
                      , u = new oi(Rr(Rr(Rr({
                        release: o,
                        environment: a
                    }, n && {
                        user: n.getUser()
                    }), s && {
                        userAgent: s
                    }), t));
                    if (n) {
                        var c = n.getSession && n.getSession();
                        c && "ok" === c.status && c.update({
                            status: "exited"
                        }),
                        this.endSession(),
                        n.setSession(u)
                    }
                    return u
                }
                ,
                t.prototype._sendSessionUpdate = function() {
                    var t = this.getStackTop()
                      , e = t.scope
                      , n = t.client;
                    if (e) {
                        var r = e.getSession && e.getSession();
                        r && n && n.captureSession && n.captureSession(r)
                    }
                }
                ,
                t.prototype._invokeClient = function(t) {
                    for (var e, n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    var i = this.getStackTop()
                      , o = i.scope
                      , a = i.client;
                    a && a[t] && (e = a)[t].apply(e, Dr(n, [o]))
                }
                ,
                t.prototype._callExtensionMethod = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                    var r = si()
                      , i = r.__SENTRY__;
                    if (i && i.extensions && "function" == typeof i.extensions[t])
                        return i.extensions[t].apply(this, e);
                    (0,
                    Ur.c)() && Kr.warn("Extension method " + t + " couldn't be found, doing nothing.")
                }
                ,
                t
            }();
            function si() {
                var t = (0,
                Br.R)();
                return t.__SENTRY__ = t.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                },
                t
            }
            function ui(t) {
                var e = si()
                  , n = fi(e);
                return di(e, t),
                n
            }
            function ci() {
                var t = si();
                return li(t) && !fi(t).isOlderThan(4) || di(t, new ai),
                (0,
                Xr.KV)() ? function(t) {
                    try {
                        var e = si().__SENTRY__
                          , n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                        if (!n)
                            return fi(t);
                        if (!li(n) || fi(n).isOlderThan(4)) {
                            var r = fi(t).getStackTop();
                            di(n, new ai(r.client,ni.clone(r.scope)))
                        }
                        return fi(n)
                    } catch (e) {
                        return fi(t)
                    }
                }(t) : fi(t)
            }
            function li(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }
            function fi(t) {
                return t && t.__SENTRY__ && t.__SENTRY__.hub || (t.__SENTRY__ = t.__SENTRY__ || {},
                t.__SENTRY__.hub = new ai),
                t.__SENTRY__.hub
            }
            function di(t, e) {
                return !!t && (t.__SENTRY__ = t.__SENTRY__ || {},
                t.__SENTRY__.hub = e,
                !0)
            }
            function pi(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                var r = ci();
                if (r && r[t])
                    return r[t].apply(r, Dr(e));
                throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
            }
            var hi = n(8405)
              , mi = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , yi = mi("background-videos/index");
            function gi(t) {
                return t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2
            }
            function vi(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    canControl: !0
                }
                  , n = bt.getHeight() > bt.getWidth()
                  , r = n ? t.getAttribute("data-portrait") : t.getAttribute("data-landscape")
                  , i = gi(t)
                  , o = bi(t);
                o.getAttribute("src") !== r && (o.setAttribute("src", r),
                t.load(),
                e.canControl && i && wi(t))
            }
            function bi(t) {
                var e = t.querySelector("source");
                if (e)
                    return e;
                var n = document.createElement("source");
                return n.setAttribute("type", t.getAttribute("data-type")),
                t.appendChild(n),
                n
            }
            function wi(t) {
                try {
                    t.pause()
                } catch (t) {}
                var e = t.play();
                void 0 !== e && e.catch((function() {
                    t.play().catch((function(e) {
                        var n, r;
                        t.pause(),
                        pi("captureException", n = e, {
                            captureContext: r,
                            originalException: n,
                            syntheticException: new Error("Sentry syntheticException")
                        })
                    }
                    ))
                }
                ))
            }
            yi.showWhenPlaying = function(t) {
                var e = function() {
                    return t.style.opacity = "1"
                };
                ["loadeddata", "playing", "canplaythrough"].forEach((function(n) {
                    return q(t, n, e)
                }
                ))
            }
            ,
            yi.initBackgroundVideos = function() {
                var t = Q().isSafari;
                h("[data-background-video]").forEach((function(e) {
                    var n = e.querySelector("[data-video]");
                    if (n) {
                        t && n.className.includes("FullSize__fixedChild") && n.addEventListener("canplay", (function() {
                            n.className = n.className.replace("FullSize__fixedChild", "FullSize__fixedChild--Safari")
                        }
                        )),
                        n.muted = !0,
                        n.defaultMuted = !0,
                        function() {
                            var t;
                            (t = yi).showWhenPlaying.apply(t, arguments)
                        }(n);
                        L(e, (function(t) {
                            vi(n, {
                                canControl: !1
                            }),
                            _t(n),
                            _(t) ? wi(n) : n.pause()
                        }
                        ), {
                            triggerPoint: w.Near
                        }),
                        e.getBoundingClientRect().top < 3 * bt.getHeight() && (wi(n),
                        setTimeout((function() {
                            n.readyState < 2 && n.paused && (n.load(),
                            wi(n))
                        }
                        ), 1e3))
                    }
                }
                ));
                var e = h("[data-background-video] [data-video]")
                  , n = (0,
                hi.D)((function() {
                    return e.forEach((function(t) {
                        return vi(t)
                    }
                    ))
                }
                ), 100);
                ["resize", "orientationchange"].forEach((function(t) {
                    window.addEventListener(t, n, {
                        passive: !0
                    })
                }
                ))
            }
            ;
            var xi = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Ei = xi("parent-width/index")
              , Si = n(6351)
              , Ti = []
              , ki = Si();
            function Oi() {
                var t;
                return (t = Ei).addParentWidthElement.apply(t, arguments)
            }
            function _i() {
                var t;
                return (t = Ei).updateElement.apply(t, arguments)
            }
            function Ai() {
                var t;
                return (t = Ei).initParentWidth.apply(t, arguments)
            }
            Ei.addParentWidthElement = function(t) {
                var e = Ti;
                if (!(e.findIndex((function(e) {
                    return e.element === t
                }
                )) > -1)) {
                    var n = {
                        element: t,
                        onResize: function() {
                            _i(t)
                        }
                    };
                    e.push(n),
                    _i(t, !0),
                    ki.listenTo(n.element.parentElement, n.onResize),
                    Ai()
                }
            }
            ,
            Ei.removeParentWidthElement = function(t) {
                var e = Ti
                  , n = e.findIndex((function(e) {
                    return e.element === t
                }
                ));
                if (-1 !== n) {
                    var r = e[n];
                    ki.removeListener(r.element.parentElement, r.onResize),
                    e.splice(n, 1)
                }
            }
            ,
            Ei.updateParentWidths = function() {
                Ti.forEach((function(t) {
                    return _i(t.element)
                }
                ))
            }
            ,
            Ei.updateElement = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                st().measure((function() {
                    var n = Rt(t.parentNode)
                      , r = t.clientWidth;
                    (n !== r || e) && st().mutate((function() {
                        t.style.width = "".concat(n, "px")
                    }
                    ))
                }
                ))
            }
            ,
            Ei.initParentWidth = function() {
                var t = document.getElementsByClassName("ParentWidth");
                Array.prototype.forEach.call(t, Oi),
                function() {
                    var t;
                    (t = Ei).updateParentWidths.apply(t, arguments)
                }()
            }
            ;
            var Pi = n(8327)
              , Ii = n.n(Pi);
            function Ci(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            var ji = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Li = (ji("media-renderer/models/render-stack"),
            function(t) {
                function e(t) {
                    if (function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    !t)
                        throw new Error("Must instantiate RenderStack with an array of RenderStackItems");
                    this._items = t,
                    this.state = e.STATE_VALID
                }
                var n, r, i;
                return n = e,
                i = [{
                    key: "compare",
                    value: function(t, e) {
                        return Ii()(t, e, {
                            strict: !0
                        })
                    }
                }],
                (r = [{
                    key: "items",
                    get: function() {
                        return this._items
                    },
                    set: function(t) {
                        if (!Array.isArray(t))
                            throw new Error("Items must be an array");
                        this._items = t
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this._items.length
                    }
                }, {
                    key: "getItemsByType",
                    value: function(t) {
                        return this._items.filter((function(e) {
                            return e instanceof t
                        }
                        ))
                    }
                }, {
                    key: t,
                    value: function() {
                        var t = this
                          , e = 0;
                        return {
                            next: function() {
                                return e < t._items.length ? {
                                    value: t._items[e++],
                                    done: !1
                                } : {
                                    done: !0
                                }
                            }
                        }
                    }
                }, {
                    key: "isInvalid",
                    value: function() {
                        return this.state === e.STATE_INVALID
                    }
                }, {
                    key: "isUnchanged",
                    value: function() {
                        return this.state === e.STATE_UNCHANGED
                    }
                }, {
                    key: "isValid",
                    value: function() {
                        return this.state === e.STATE_VALID
                    }
                }]) && Ci(n.prototype, r),
                i && Ci(n, i),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                e
            }(cn().iterator));
            Li.STATE_UNCHANGED = cn()("RenderStack.state=unchanged"),
            Li.STATE_INVALID = cn()("RenderStack.state=invalid"),
            Li.STATE_VALID = cn()("RenderStack.state=valid");
            function Ni(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            ["forEach", "filter", "map", "reduce", "push", "find"].forEach((function(t) {
                Li.prototype[t] = function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    return Array.prototype[t].apply(this._items, n)
                }
            }
            ));
            var Ri = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Mi = (Ri("media-renderer/media-renderer"),
            function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.renderStackPlugins = [],
                    this.renderers = [],
                    Object.assign(this, e),
                    this.setRenderStackPlugins(this.renderStackPlugins)
                }
                var e, n, r;
                return e = t,
                (n = [{
                    key: "setRenderStackPlugins",
                    value: function(t) {
                        var e = this.renderStackPlugins;
                        this.filters = e.filter((function(t) {
                            return "filter"in t
                        }
                        )).map((function(t) {
                            return t.filter
                        }
                        )),
                        this.transformers = e.filter((function(t) {
                            return "transform"in t
                        }
                        )).map((function(t) {
                            return t.transform
                        }
                        )),
                        this.finalizers = e.filter((function(t) {
                            return "finalize"in t
                        }
                        )).map((function(t) {
                            return t.finalize
                        }
                        )),
                        this.beforeRenders = e.filter((function(t) {
                            return "beforeRender"in t
                        }
                        )).map((function(t) {
                            return t.beforeRender
                        }
                        ))
                    }
                }, {
                    key: "render",
                    value: function(t, e) {
                        var n = this.filters
                          , r = this.transformers
                          , i = this.finalizers
                          , o = this.beforeRenders
                          , a = n.reduce((function(e, n) {
                            return n(t, e)
                        }
                        ), e)
                          , s = a.filter((function(t, e) {
                            return a.indexOf(t) === e
                        }
                        )).reduce((function(n, i) {
                            var o = [];
                            return e.indexOf(i),
                            r.forEach((function(e) {
                                o = e(t, i, o)
                            }
                            )),
                            n.concat(o)
                        }
                        ), [])
                          , u = new Li(s);
                        u.items = u.map((function(e) {
                            return i.forEach((function(n) {
                                e = n(t, e)
                            }
                            )),
                            e
                        }
                        )),
                        u = o.reduce((function(e, n) {
                            return n(e, t)
                        }
                        ), u),
                        this.renderers.forEach((function(t) {
                            t.render || console.error("Renderer ".concat(t.constructor.name, " does not have a render() method")),
                            t.render(u)
                        }
                        ))
                    }
                }]) && Ni(e.prototype, n),
                r && Ni(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }())
              , Fi = n(9268)
              , Di = n.n(Fi);
            function Bi(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function Hi(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            function zi(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            var Ui = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Wi = (Ui("media-renderer/models/boxing"),
            function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.sx = 0,
                    this.sy = 0,
                    this.sWidth = 0,
                    this.sHeight = 0,
                    this.dWidth = 0,
                    this.dHeight = 0,
                    this.dx = 0,
                    this.dy = 0,
                    this.opacity = 0,
                    Object.assign(this, e)
                }
                var e, n, r;
                return e = t,
                n = [{
                    key: "createRoundedBoxing",
                    value: function() {
                        var e = this;
                        return ["sx", "sy", "sWidth", "sHeight", "dWidth", "dHeight", "dx", "dy"].reduce((function(t, n) {
                            return Object.assign(t, Hi({}, n, e[n] < .5 ? 0 : e[n]))
                        }
                        ), new t(function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Bi(Object(n), !0).forEach((function(e) {
                                    Hi(t, e, n[e])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bi(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }
                                ))
                            }
                            return t
                        }({}, this)))
                    }
                }],
                r = [{
                    key: "createScaledBoxing",
                    value: function(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        r.scalingMode = r.scalingMode || "cover";
                        var i = r.scalingMode
                          , o = n.width / e.width
                          , a = n.height / e.height
                          , s = "cover" === i ? Math.min : Math.max
                          , u = s(o, a)
                          , c = n.width / u
                          , l = n.height / u
                          , f = c - e.width
                          , d = l - e.height;
                        "fit" === i && (f = Math.max(0, f),
                        d = Math.max(0, d));
                        var p = $i(n.data.image.focal || {
                            x: 50,
                            y: 50
                        })
                          , h = {
                            x: c * (p.x / 100) - e.width / 2,
                            y: l * (p.y / 100) - e.height / 2
                        }
                          , m = {
                            x: c - e.width,
                            y: l - e.height
                        };
                        return new t({
                            sx: Di()(h.x, 0, m.x) * u,
                            sy: Di()(h.y, 0, m.y) * u,
                            sWidth: n.width - f * u,
                            sHeight: n.height - d * u,
                            dWidth: "fit" === i ? c : e.width,
                            dHeight: "fit" === i ? l : e.height,
                            dx: 0,
                            dy: 0,
                            opacity: 1
                        })
                    }
                }],
                n && zi(e.prototype, n),
                r && zi(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }())
              , Vi = {
                13: [0, 1, 6, 18, 30, 38, 50, 59, 70, 84, 91, 96, 100],
                9: [0, 12, 25, 37, 50, 62, 75, 82, 100]
            };
            function $i(t) {
                var e = qi(t.x, "x")
                  , n = qi(t.y, "y");
                return {
                    x: [0, 16.5, 20, 28, 36.5, 42, 50, 56.5, 65, 73, 78, 81.5, 100][Vi[13].indexOf(e)],
                    y: [0, 12, 25, 37, 50, 62, 75, 82, 100][Vi[9].indexOf(n)]
                }
            }
            function qi(t, e) {
                return ("x" === e ? Vi[13] : Vi[9]).reduce((function(e, n) {
                    return Math.abs(e - t) > Math.abs(n - t) ? n : e
                }
                ), 0)
            }
            var Yi = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Gi = (Yi("utils/now"),
            Date.now || function() {
                return (new Date).getTime()
            }
            )
              , Ki = Gi
              , Xi = window.performance;
            if (Xi) {
                var Ji = Xi.now || Xi.mozNow || Xi.msNow || Xi.oNow || Xi.webkitNow;
                Ki = Ji ? Ji.bind(Xi) : Gi
            }
            var Zi = Ki;
            function Qi(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function to(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            var eo = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , no = eo("media-renderer/models/image-source")
              , ro = "loading"
              , io = "loaded"
              , oo = "already_loaded"
              , ao = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    Qi(this, t),
                    this.loadingState = ro,
                    this.src = e,
                    this.whenLoaded = so(e, n),
                    this.whenLoaded.then(this.onLoad.bind(this))
                }
                var e, n, r;
                return e = t,
                (n = [{
                    key: "onLoad",
                    value: function(t) {
                        this.loadingState = t.wasAlreadyLoaded ? oo : io,
                        this.loadedAt = Zi(),
                        this.img = t.loaderElement
                    }
                }, {
                    key: "isLoaded",
                    value: function() {
                        return this.loadingState === oo || this.loadingState === io
                    }
                }, {
                    key: "isLoading",
                    value: function() {
                        return this.loadingState === ro
                    }
                }, {
                    key: "isAlreadyLoaded",
                    value: function() {
                        return this.loadingState === oo
                    }
                }]) && to(e.prototype, n),
                r && to(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }();
            function so() {
                var t;
                return (t = no).loadSource.apply(t, arguments)
            }
            function uo(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            no.loadSource = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return new Promise((function(n, r) {
                    var i = Zi()
                      , o = new window.Image;
                    o.crossOrigin = e ? "use-credentials" : "Anonymous",
                    o.addEventListener("load", (function() {
                        var t = Zi()
                          , e = {
                            wasAlreadyLoaded: !1,
                            loaderElement: o
                        };
                        t - i < 15 && (e.wasAlreadyLoaded = !0),
                        n(e)
                    }
                    )),
                    o.src = t
                }
                ))
            }
            ;
            var co = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , lo = (co("media-renderer/models/image"),
            {});
            var fo = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.width = 0,
                    this.height = 0,
                    this.getSrc = function() {}
                    ,
                    this.captionHTML = "",
                    this.instantImgData = "",
                    this.focal = {
                        x: 0,
                        y: 0
                    },
                    Object.assign(this, e)
                }
                var e, n, r;
                return e = t,
                n = [{
                    key: "loadCurrentImageSource",
                    value: function() {
                        this.getCurrentImageSource()
                    }
                }, {
                    key: "getCurrentImageSource",
                    value: function() {
                        var t = this.getSrc();
                        if (!t)
                            throw Error("Cannot retreive a ImageSource because Image.setSrc() returned nothing");
                        return function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (t in lo)
                                return lo[t];
                            var n = new ao(t,e);
                            return lo[t] = n,
                            n
                        }(t, this.useCredentials)
                    }
                }, {
                    key: "getInstantImgElement",
                    value: function() {
                        if (this.instantImgCache)
                            return this.instantImgCache;
                        var t = this.instantImgCache = document.createElement("img");
                        return t.src = this.instantImgData,
                        t
                    }
                }],
                n && uo(e.prototype, n),
                r && uo(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }();
            function po(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            function ho(t, e, n) {
                return e && po(t.prototype, e),
                n && po(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }
            var mo = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , yo = (mo("media-renderer/models/link"),
            ho((function t(e) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.href = "",
                this.openInNewTab = !0,
                this.titleText = "",
                Object.assign(this, e)
            }
            )));
            function go(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            function vo(t, e, n) {
                return e && go(t.prototype, e),
                n && go(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }
            var bo = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , wo = (bo("media-renderer/models/render-stack-item"),
            vo((function t(e) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                Object.assign(this, e)
            }
            )));
            function xo(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            var Eo = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , So = (Eo("media-renderer/models/scene"),
            function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.width = 0,
                    this.height = 0,
                    this.scrollPercentage = !1,
                    this.heightPercentage = 0,
                    Object.assign(this, e)
                }
                var e, n, r;
                return e = t,
                (n = [{
                    key: "getOrientation",
                    value: function() {
                        return this.width > this.height ? "landscape" : "portrait"
                    }
                }]) && xo(e.prototype, n),
                r && xo(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }());
            function To(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function ko(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? To(Object(n), !0).forEach((function(e) {
                        Oo(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : To(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function Oo(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            function _o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            var Ao = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Po = (Ao("media-renderer/models/transition"),
            {
                down: 1,
                left: 1,
                up: 1,
                right: 1,
                fade: .7
            })
              , Io = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    Object.assign(this, e)
                }
                var e, n, r;
                return e = t,
                r = [{
                    key: "up",
                    value: function(t, e) {
                        var n = new Wi(ko({}, t))
                          , r = 1 - e;
                        return n.sy = t.sy + t.sHeight * r,
                        n.sHeight = t.sHeight * e,
                        n.dy = t.dy + t.dHeight * r,
                        n.dHeight = t.dHeight * e,
                        n
                    }
                }, {
                    key: "down",
                    value: function(t, e) {
                        var n = new Wi(ko({}, t));
                        return n.sHeight = t.sHeight * e,
                        n.dHeight = t.dHeight * e,
                        n
                    }
                }, {
                    key: "right",
                    value: function(t, e) {
                        var n = new Wi(ko({}, t));
                        return n.sWidth = t.sWidth * e,
                        n.dWidth = t.dWidth * e,
                        n
                    }
                }, {
                    key: "left",
                    value: function(t, e) {
                        var n = new Wi(ko({}, t))
                          , r = 1 - e;
                        return n.sx = t.sx + t.sWidth * r,
                        n.sWidth = t.sWidth * e,
                        n.dx = t.dx + t.dWidth * r,
                        n.dWidth = t.dWidth * e,
                        n
                    }
                }, {
                    key: "fade",
                    value: function(t, e) {
                        var n = new Wi(ko({}, t));
                        return n.opacity = e,
                        n
                    }
                }],
                (n = [{
                    key: "calculateTransitionLength",
                    value: function(t) {
                        var e = 1;
                        return this.name in Po && (e = Po[this.name]),
                        t * e
                    }
                }]) && _o(e.prototype, n),
                r && _o(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }();
            function Co(t) {
                return Co = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                Co(t)
            }
            function jo(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            function Lo(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function No(t, e) {
                return No = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                ,
                No(t, e)
            }
            function Ro(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Fo(t);
                    if (e) {
                        var i = Fo(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return Mo(this, n)
                }
            }
            function Mo(t, e) {
                if (e && ("object" === Co(e) || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }
            function Fo(t) {
                return Fo = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                ,
                Fo(t)
            }
            var Do = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Bo = (Do("media-renderer/models/render-stack-items/clear-stack-item"),
            function(t) {
                !function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    e && No(t, e)
                }(o, t);
                var e, n, r, i = Ro(o);
                function o() {
                    var t;
                    return Lo(this, o),
                    (t = i.apply(this, arguments)).type = "clear-operation",
                    t
                }
                return e = o,
                n && jo(e.prototype, n),
                r && jo(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e
            }(wo));
            function Ho(t) {
                return Ho = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                Ho(t)
            }
            function zo(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            function Uo(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Wo(t, e) {
                return Wo = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                ,
                Wo(t, e)
            }
            function Vo(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = qo(t);
                    if (e) {
                        var i = qo(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return $o(this, n)
                }
            }
            function $o(t, e) {
                if (e && ("object" === Ho(e) || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }
            function qo(t) {
                return qo = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                ,
                qo(t)
            }
            var Yo = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Go = (Yo("media-renderer/models/render-stack-items/image-stack-item"),
            function(t) {
                !function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    e && Wo(t, e)
                }(o, t);
                var e, n, r, i = Vo(o);
                function o() {
                    return Uo(this, o),
                    i.apply(this, arguments)
                }
                return e = o,
                n && zo(e.prototype, n),
                r && zo(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e
            }(wo));
            function Ko(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            var Xo = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Jo = (Xo("media-renderer/renderers/canvas-renderer"),
            function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.renderScale = 1,
                    Object.assign(this, e)
                }
                var e, n, r;
                return e = t,
                r = [{
                    key: "clearRect",
                    value: function(t, e) {
                        t.clearRect(e.dx, e.dy, e.dWidth, e.dHeight)
                    }
                }, {
                    key: "drawImage",
                    value: function(t, e, n) {
                        t.globalAlpha = n.opacity;
                        try {
                            t.drawImage(e, n.sx, n.sy, n.sWidth, n.sHeight, n.dx, n.dy, n.dWidth, n.dHeight)
                        } catch (t) {
                            console.error("Could not draw image", e, n)
                        }
                    }
                }],
                (n = [{
                    key: "getWidth",
                    value: function() {
                        return this.canvasElement.width
                    }
                }, {
                    key: "getHeight",
                    value: function() {
                        return this.canvasElement.height
                    }
                }, {
                    key: "getCSSHeight",
                    value: function() {
                        return this.getHeight() / this.renderScale
                    }
                }, {
                    key: "render",
                    value: function(t) {
                        var e = this;
                        if (!t.isUnchanged()) {
                            var n = this.canvasElement.getContext("2d");
                            t.forEach((function(t) {
                                return e.drawStackItem(n, t)
                            }
                            ))
                        }
                    }
                }, {
                    key: "drawStackItem",
                    value: function(e, n) {
                        if (n.boxing) {
                            var r = n.boxing.createRoundedBoxing();
                            n instanceof Bo ? t.clearRect(e, r) : n instanceof Go && t.drawImage(e, n.img, r)
                        }
                    }
                }]) && Ko(e.prototype, n),
                r && Ko(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }())
              , Zo = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Qo = (Zo("media-renderer/index"),
            Mi)
              , ta = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , ea = ta("media-renderer/plugins/plugin-base-boxing");
            function na() {
                var t;
                return (t = ea).baseBoxing.apply(t, arguments)
            }
            ea.baseBoxing = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    finalize: function(e, n) {
                        if (!t.type || n.type === t.type) {
                            var r = Wi.createScaledBoxing(e, n, t);
                            n.boxing = r
                        }
                        return n
                    }
                }
            }
            ;
            var ra = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , ia = ra("media-renderer/plugins/plugin-basic-optimizer");
            function oa() {
                var t;
                return (t = ia).basicOptimizer.apply(t, arguments)
            }
            ia.basicOptimizer = function() {
                var t;
                return {
                    beforeRender: function(e) {
                        return t && Li.compare(e.items, t.items) && (e.state = Li.STATE_UNCHANGED),
                        t = e,
                        e
                    }
                }
            }
            ;
            var aa = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , sa = aa("media-renderer/plugins/plugin-basic-visibility-filter");
            function ua() {
                var t;
                return (t = sa).basicVisibilityFilter.apply(t, arguments)
            }
            sa.basicVisibilityFilter = function() {
                return {
                    filter: function(t, e) {
                        return e.filter((function(n, r) {
                            var i = 0 === r
                              , o = r + 1 === e.length
                              , a = n.transition.start
                              , s = o ? 1 : e[r + 1].transition.start;
                            return !(!i || !o) || (i ? t.scrollPercentage < s : o ? t.scrollPercentage >= a : t.scrollPercentage >= a && t.scrollPercentage < s)
                        }
                        ))
                    }
                }
            }
            ;
            var ca = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , la = ca("media-renderer/plugins/plugin-caption-positioner");
            function fa(t) {
                return t.reduce((function(t, e) {
                    return t ? t.boxing.sHeight < e.boxing.sHeight ? e : t : e
                }
                ))
            }
            function da() {
                var t;
                return (t = la).captionPositioner.apply(t, arguments)
            }
            function pa(t) {
                return pa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                pa(t)
            }
            function ha(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            function ma(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function ya(t, e) {
                return ya = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                ,
                ya(t, e)
            }
            function ga(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = ba(t);
                    if (e) {
                        var i = ba(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return va(this, n)
                }
            }
            function va(t, e) {
                if (e && ("object" === pa(e) || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }
            function ba(t) {
                return ba = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                ,
                ba(t)
            }
            la.captionPositioner = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!t.render)
                    throw new Error("Caption positioner plugin requires a render function");
                return {
                    beforeRender: function(e, n) {
                        if (!e.isValid())
                            return e;
                        var r = t.renderScale || 1
                          , i = e.getItemsByType(Go);
                        if (0 === i.length)
                            return e;
                        var o = fa(i);
                        return t.render(o.boxing.dHeight / r),
                        e
                    }
                }
            }
            ;
            var wa = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , xa = (wa("media-renderer/models/render-stack-items/caption-stack-item"),
            function(t) {
                !function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    e && ya(t, e)
                }(o, t);
                var e, n, r, i = ga(o);
                function o() {
                    var t;
                    return ma(this, o),
                    (t = i.apply(this, arguments)).type = "caption",
                    t
                }
                return e = o,
                n && ha(e.prototype, n),
                r && ha(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e
            }(wo))
              , Ea = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Sa = Ea("media-renderer/utils/get-most-visible-item");
            function Ta() {
                var t;
                return (t = Sa).getMostVisibleItem.apply(t, arguments)
            }
            function ka(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function Oa(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ka(Object(n), !0).forEach((function(e) {
                        _a(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ka(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function _a(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            Sa.getMostVisibleItem = function(t) {
                return 0 === t.length ? null : 1 === t.length ? t[0] : t.reduce((function(t, e) {
                    var n = t && t.data ? t.data.transitionPercentage : 0;
                    return e.data.transitionPercentage >= n ? e : t
                }
                ))
            }
            ;
            var Aa = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Pa = Aa("media-renderer/plugins/plugin-captions")
              , Ia = {
                fadeInThreshold: .7,
                fadeOutThreshold: .15,
                hideWhenOutOfBounds: !1
            };
            function Ca() {
                var t;
                return (t = Pa).captions.apply(t, arguments)
            }
            function ja() {
                var t;
                return (t = Pa).getDefaultState.apply(t, arguments)
            }
            Pa.captions = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t = Object.assign({}, Ia, t),
                {
                    beforeRender: function(e, n) {
                        var r = e.filter((function(t) {
                            return t.hasOwnProperty("caption")
                        }
                        ))
                          , i = ja(r, t);
                        return Fa(n, t) && (i = r.length > 0 ? Da(r, t) : new xa(Oa(Oa({}, Na), {}, {
                            html: !1
                        }))),
                        e.push(i),
                        e
                    }
                }
            }
            ,
            Pa.getDefaultState = function(t, e) {
                if (e.hideWhenOutOfBounds)
                    return new xa(Oa({}, Ma));
                if (0 === t.length)
                    return new xa(Oa({}, La));
                var n = Ta(t);
                return new xa(Oa(Oa({}, Ra), {}, {
                    html: n.caption
                }))
            }
            ;
            var La = {
                html: "",
                display: "block",
                opacity: "0",
                textOpacity: null
            }
              , Na = {
                display: "block",
                opacity: "1",
                textOpacity: "0",
                html: ""
            }
              , Ra = {
                display: "block",
                opacity: "1",
                textOpacity: "1",
                html: ""
            }
              , Ma = {
                html: "",
                display: "none",
                textOpacity: null,
                opacity: "0"
            };
            function Fa() {
                var t;
                return (t = Pa).shouldShowCaptionDisplay.apply(t, arguments)
            }
            function Da() {
                var t;
                return (t = Pa).getCaptionToRender.apply(t, arguments)
            }
            function Ba(t) {
                return function(t) {
                    if (Array.isArray(t))
                        return Ha(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                        return Array.from(t)
                }(t) || function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return Ha(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Ha(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Ha(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            Pa.shouldShowCaptionDisplay = function(t, e) {
                if (!e.hideWhenOutOfBounds)
                    return !0;
                var n = t.heightPercentage * e.fadeInThreshold * .5 - t.heightPercentage > t.scrollPercentage
                  , r = t.scrollPercentage >= 1;
                return !n && !r
            }
            ,
            Pa.getCaptionToRender = function(t, e) {
                var n = Ta(t)
                  , r = Ta(t.filter((function(t) {
                    return t !== n
                }
                )));
                if (n.data.transitionPercentage < e.fadeInThreshold)
                    return new xa(Oa(Oa({}, Ra), {}, {
                        html: n.caption
                    }));
                var i = new xa(Oa(Oa({}, Ra), {}, {
                    html: n.caption
                }));
                if (n.data.image && n.data.image.id && (i.id = n.data.image.id),
                r) {
                    var o = r.data.transitionPercentage
                      , a = o > e.fadeInThreshold
                      , s = o > e.fadeOutThreshold;
                    if (a)
                        i.html = r.caption;
                    else if (s)
                        return n.caption && r.caption ? new xa(Oa(Oa({}, Na), {}, {
                            html: !1
                        })) : new xa(Oa(Oa({}, La), {}, {
                            html: !1
                        }))
                }
                return i || new xa(Oa(Oa({}, La), {}, {
                    html: "<p>&nbsp;</p>"
                }))
            }
            ;
            var za = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Ua = za("media-renderer/plugins/plugin-clear-operation");
            function Wa() {
                var t;
                return (t = Ua).clearOperation.apply(t, arguments)
            }
            Ua.clearOperation = function() {
                return {
                    beforeRender: function(t, e) {
                        var n = new Wi({
                            dx: 0,
                            dy: 0,
                            dWidth: e.width,
                            dHeight: e.height
                        })
                          , r = new Bo({
                            boxing: n
                        });
                        return t.items = [r].concat(Ba(t.items)),
                        t
                    }
                }
            }
            ;
            var Va = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , $a = Va("media-renderer/plugins/plugin-hyperlinker");
            function qa() {
                var t;
                return (t = $a).hyperlinker.apply(t, arguments)
            }
            $a.hyperlinker = function(t) {
                var e = t.linkedItem;
                if (!e || !e.addEventListener)
                    throw new Error("Missing 'linkedItem' option in hyperlinker plugin. Pass in a DOMElement that should be hyperlinked.");
                var n = {
                    hasMostVisibleItem: !1
                };
                return e.addEventListener("click", (function() {
                    if (n.hasMostVisibleItem) {
                        var t = n.mostVisibleItemLink;
                        t.openInNewTab ? window.open(t.href) : window.location.href = t.href
                    }
                }
                )),
                {
                    beforeRender: function(t) {
                        var r = t.filter((function(t) {
                            return t instanceof Go
                        }
                        ))
                          , i = r.filter((function(t) {
                            return t.data.image.link
                        }
                        ));
                        if (0 === i.length && r.length > 0)
                            return n.hasMostVisibleItem = !1,
                            n.mostVisibleItemLink = null,
                            e.classList.remove("Theme-LinkedMediaRenderer"),
                            t;
                        if (0 === r.length)
                            return t;
                        var o = Ta(i);
                        return o && o.data.image.link && (n.hasMostVisibleItem = !0,
                        n.mostVisibleItemLink = o.data.image.link,
                        e.classList.add("Theme-LinkedMediaRenderer")),
                        t
                    }
                }
            }
            ;
            var Ya = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Ga = Ya("media-renderer/plugins/plugin-instant-images");
            function Ka() {
                var t;
                return (t = Ga).instantImages.apply(t, arguments)
            }
            function Xa() {
                var t;
                return (t = Ga).doShowInstantImage.apply(t, arguments)
            }
            function Ja() {
                var t;
                return (t = Ga).calculateInstantImageTransitionPercentage.apply(t, arguments)
            }
            Ga.instantImages = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = t.transitionLength || 1e3;
                return {
                    transform: function(t, n, r) {
                        var i = n.getCurrentImageSource();
                        if (Xa(i, Zi(), e)) {
                            var o = n.getInstantImgElement()
                              , a = new Go({
                                type: "instant-img",
                                img: o,
                                width: o.width,
                                height: o.height,
                                index: n.index,
                                data: {
                                    imageSource: i,
                                    image: n
                                }
                            });
                            r.push(a)
                        }
                        return r
                    },
                    finalize: function(t, n) {
                        if ("instant-img" === n.type) {
                            var r = Ja(n.data.imageSource, Zi(), e);
                            n.boxing = Io.fade(n.boxing, r)
                        }
                        return n
                    }
                }
            }
            ,
            Ga.doShowInstantImage = function(t, e, n) {
                return !!t.isLoading() || !t.isAlreadyLoaded() && !!(t.loadedAt && e - t.loadedAt <= n)
            }
            ,
            Ga.calculateInstantImageTransitionPercentage = function(t, e, n) {
                return t.isLoading() ? 1 : 1 - (e - t.loadedAt) / n
            }
            ;
            var Za = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Qa = Za("media-renderer/plugins/plugin-loaded-sources");
            function ts() {
                var t;
                return (t = Qa).loadedSources.apply(t, arguments)
            }
            Qa.loadedSources = function() {
                return {
                    transform: function(t, e, n) {
                        var r = e.getCurrentImageSource();
                        if (r.isLoaded()) {
                            var i = r.img
                              , o = new Go({
                                img: i,
                                width: i.naturalWidth,
                                height: i.naturalHeight,
                                index: e.index,
                                caption: e.captionHTML,
                                data: {
                                    imageSource: r,
                                    image: e
                                }
                            });
                            n.push(o)
                        }
                        return n
                    }
                }
            }
            ;
            var es = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , ns = es("media-renderer/plugins/plugin-preload-images");
            function rs() {
                var t;
                return (t = ns).preloadImages.apply(t, arguments)
            }
            function is(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            ns.preloadImages = function() {
                return {
                    filter: function(t, e) {
                        return e.forEach((function(t) {
                            return t.loadCurrentImageSource()
                        }
                        )),
                        e
                    }
                }
            }
            ;
            var os = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , as = (os("utils/offscreen-canvas"),
            function() {
                function t(e) {
                    var n = e.width
                      , r = e.height;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.canvasElement = document.createElement("canvas"),
                    this.canvasElement.width = n,
                    this.canvasElement.height = r
                }
                var e, n, r;
                return e = t,
                (n = [{
                    key: "getContext",
                    value: function() {
                        return this.canvasElement.getContext("2d")
                    }
                }]) && is(e.prototype, n),
                r && is(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }())
              , ss = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , us = ss("media-renderer/plugins/plugin-resize-cacher")
              , cs = {};
            function ls() {
                var t;
                return (t = us).resizeCacher.apply(t, arguments)
            }
            function fs(t, e, n) {
                if (e.isLoading())
                    throw new Error("Cannot ensure cache item because the ImageSource has not finished loading");
                var r = e.img.src;
                if (function(t) {
                    return t in cs
                }(r)) {
                    var i = cs[r];
                    if (i.width !== t.width || i.height !== t.height)
                        ds(r, ps(t, n))
                } else {
                    ds(r, ps(t, n))
                }
                return cs[r]
            }
            function ds(t, e) {
                cs[t] = e
            }
            function ps(t, e) {
                var n = new as({
                    width: t.width,
                    height: t.height
                })
                  , r = n.getContext();
                return Jo.drawImage(r, e.img, e.boxing),
                {
                    width: e.boxing.dWidth,
                    height: e.boxing.dHeight,
                    cachedImgElement: n.canvasElement,
                    originalSrc: e.img.src
                }
            }
            us.resizeCacher = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    finalize: function(e, n) {
                        if ("img" === n.type) {
                            var r = n
                              , i = fs(e, r.data.imageSource, r);
                            r.img = i.cachedImgElement,
                            r.width = i.width,
                            r.height = i.height,
                            r.data.cacheItem = i,
                            r.boxing = Wi.createScaledBoxing(e, r, t)
                        }
                        return n
                    }
                }
            }
            ;
            var hs = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , ms = hs("media-renderer/plugins/plugin-separate-orientations");
            function ys() {
                var t;
                return (t = ms).separateOrientations.apply(t, arguments)
            }
            ms.separateOrientations = function() {
                return {
                    filter: function(t, e) {
                        var n = e.filter((function(t) {
                            return "landscape" === t.orientation
                        }
                        ))
                          , r = e.filter((function(t) {
                            return "portrait" === t.orientation
                        }
                        ));
                        return 0 === n.length || 0 === r.length ? e : "portrait" === t.getOrientation() ? r : n
                    }
                }
            }
            ;
            var gs = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , vs = gs("media-renderer/plugins/plugin-transition");
            function bs() {
                var t;
                return (t = vs).transition.apply(t, arguments)
            }
            function ws() {
                var t;
                return (t = vs).calculateTransitionPercentage.apply(t, arguments)
            }
            vs.transition = function() {
                return {
                    filter: function(t, e) {
                        return e.filter((function(n, r) {
                            var i = 0 === r
                              , o = r + 1 === e.length;
                            if (i && o)
                                return !0;
                            var a = n.transition.start
                              , s = 1;
                            if (!o) {
                                var u = e[r + 1].transition
                                  , c = u.calculateTransitionLength(t.heightPercentage);
                                s = u.start + c
                            }
                            return i ? t.scrollPercentage <= s : o ? t.scrollPercentage >= a : t.scrollPercentage >= a && t.scrollPercentage <= s
                        }
                        ))
                    },
                    finalize: function(t, e) {
                        var n = e.data.image.transition.name.split(",")
                          , r = ws(t, e.data.image);
                        return e.data.transitionPercentage = r,
                        n.reduce((function(t, e) {
                            if (e && e in Io) {
                                var n = Io[e];
                                t.boxing = n(t.boxing, r)
                            }
                            return t
                        }
                        ), e)
                    },
                    beforeRender: function(t) {
                        return t.items = t.filter((function(t) {
                            return 0 !== t.boxing.opacity
                        }
                        )),
                        t
                    }
                }
            }
            ,
            vs.calculateTransitionPercentage = function(t, e) {
                var n = e.transition.calculateTransitionLength(t.heightPercentage)
                  , r = (t.scrollPercentage - e.transition.start) / n;
                return r = Math.min(1, r)
            }
            ;
            var xs = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Es = xs("story-media-renderer/calculate-transition-delays");
            function Ss() {
                var t;
                return (t = Es).makeCalculateTransitionDelays.apply(t, arguments)
            }
            Es.makeCalculateTransitionDelays = function(t) {
                var e = {
                    textItemHeights: []
                };
                return function() {
                    var t;
                    (t = Es).initMeasureTextHeights.apply(t, arguments)
                }(t, e),
                function(t, n) {
                    return function() {
                        var t;
                        return (t = Es).calculateTransitionDelays.apply(t, arguments)
                    }(t, n, e)
                }
            }
            ,
            Es.calculateTransitionDelays = function(t, e, n) {
                var r = .4 * bt.getHeight();
                function i(t, i) {
                    var o = t + (0 === i.index ? 0 : n.textItemHeights[i.index - 1]);
                    return i.transition.start = (o - r) / e,
                    0 === i.index && (i.transition.name = "none"),
                    o
                }
                return t.filter((function(t) {
                    return "portrait" === t.orientation
                }
                )).reduce(i, 0),
                t.filter((function(t) {
                    return "landscape" === t.orientation
                }
                )).reduce(i, 0),
                t
            }
            ,
            Es.initMeasureTextHeights = function(t, e) {
                var n = Q()
                  , r = n.isIE
                  , i = n.isEdge
                  , o = n.isFirefox
                  , a = function() {
                    return function() {
                        var t;
                        return (t = Es).measureTextHeights.apply(t, arguments)
                    }(t, e)
                };
                a(),
                (i || r || o) && setInterval(a, 1e3),
                ["resize", "orientationchange", "load"].forEach((function(t) {
                    return window.addEventListener(t, a)
                }
                ))
            }
            ,
            Es.measureTextHeights = function(t, e) {
                st().measure((function() {
                    e.textItemHeights = h(".MediaRenderer__textBlocksInner", t.parentElement || m('[id*="-'.concat(t.id, '"]'))).map((function(t) {
                        return t.getBoundingClientRect().height
                    }
                    ))
                }
                ))
            }
            ;
            var Ts = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , ks = Ts("story-media-renderer/canvas-resizer");
            function Os() {
                var t;
                return (t = ks).resizeCanvas.apply(t, arguments)
            }
            function _s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            ks.initCanvasResizer = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                  , n = []
                  , r = function(t) {
                    n.push(t)
                }
                  , i = function(t, e) {
                    n.forEach((function(n) {
                        return n(t, e)
                    }
                    ))
                }
                  , o = function() {
                    return Os(t, e, i)
                };
                o(),
                ["load", "resize", "orientationchange"].forEach((function(t) {
                    window.addEventListener(t, o, {
                        passive: !0
                    })
                }
                )),
                te(o);
                var a = !1;
                return window.addEventListener("load", (function() {
                    ee(o),
                    be(t, (function(t) {
                        a && (clearInterval(a),
                        a = !1),
                        t === pe && (a = setInterval(o, 160))
                    }
                    ))
                }
                )),
                function() {
                    return {
                        onResize: r
                    }
                }
            }
            ,
            ks.resizeCanvas = function(t, e, n) {
                st().measure((function() {
                    var r = t.getBoundingClientRect()
                      , i = Math.round(r.width) * e
                      , o = Math.round(r.height) * e
                      , a = t.width
                      , s = t.height;
                    if ((i !== a || o !== s) && 0 !== i && 0 !== o) {
                        var u = new as({
                            width: i,
                            height: o
                        }).getContext()
                          , c = t.getContext("2d");
                        u.drawImage(t, 0, 0),
                        st().mutate((function() {
                            try {
                                t.width = i,
                                t.height = o,
                                c.drawImage(u.canvas, 0, 0),
                                n(Math.round(r.width), Math.round(r.height))
                            } catch (t) {
                                console.log(u.canvas),
                                console.error("Canvas Resizer could not draw image", t)
                            }
                        }
                        ))
                    }
                }
                ))
            }
            ;
            var As = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Ps = (As("story-media-renderer/caption-renderer"),
            function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.captionDisplay = e;
                    var n = e.querySelector("[data-mediarenderer-caption-container]");
                    this.captionContainer = n || this.captionDisplay,
                    be(this.captionDisplay.parentElement, this.onVisibilityChange.bind(this))
                }
                var e, n, r;
                return e = t,
                n = [{
                    key: "render",
                    value: function(t) {
                        var e = t.getItemsByType(xa);
                        if (0 !== e.length) {
                            var n = e[0];
                            this.isSameCaption(n) || this.renderCaption(n)
                        }
                    }
                }, {
                    key: "isSameCaption",
                    value: function(t) {
                        return !(!this.lastCaption || !Ii()(t, this.lastCaption)) || (this.lastCaption = t,
                        !1)
                    }
                }, {
                    key: "renderCaption",
                    value: function(t) {
                        var e = this
                          , n = t.opacity
                          , r = t.textOpacity
                          , i = t.display
                          , o = t.html;
                        st().mutate((function() {
                            e.captionDisplay.style.opacity !== n && (e.captionDisplay.style.opacity = n),
                            e.captionDisplay.style.display !== i && (e.captionDisplay.style.display = i),
                            !1 !== o && e.captionContainer.innerHTML !== o && (e.captionContainer.innerHTML = o),
                            e.captionContainer.style.opacity = r
                        }
                        ))
                    }
                }, {
                    key: "onVisibilityChange",
                    value: function(t) {
                        this.captionDisplay.style.display = t === pe ? "" : "none"
                    }
                }],
                n && _s(e.prototype, n),
                r && _s(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }());
            function Is(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n)
                        return;
                    var r, i, o = [], a = !0, s = !1;
                    try {
                        for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value),
                        !e || o.length !== e); a = !0)
                            ;
                    } catch (t) {
                        s = !0,
                        i = t
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return o
                }(t, e) || function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return Cs(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Cs(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Cs(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            function js(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function Ls(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? js(Object(n), !0).forEach((function(e) {
                        Ns(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : js(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function Ns(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            var Rs = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Ms = Rs("story-media-renderer/deserialize-dom");
            function Fs() {
                var t;
                return (t = Ms).buildImage.apply(t, arguments)
            }
            Ms.deserializeDOM = function(t, e) {
                st().measure((function() {
                    var n = function(t) {
                        var e = {
                            landscape: t.filter((function(t) {
                                return "landscape" === t.orientation
                            }
                            )),
                            portrait: t.filter((function(t) {
                                return "portrait" === t.orientation
                            }
                            ))
                        }
                          , n = function(t) {
                            if (t.orientation in e)
                                return e[t.orientation].indexOf(t);
                            throw new Error("Orientation can only be 'portrait' or 'landscape' but got " + t.orientation)
                        };
                        return t.map((function(t) {
                            return new fo(Ls(Ls({}, t), {}, {
                                index: n(t)
                            }))
                        }
                        ))
                    }(h("[data-mediarenderer-item]", t).map(Fs));
                    e(n)
                }
                ))
            }
            ,
            Ms.buildImage = function(t) {
                var e = t.querySelector("[data-mediarenderer-caption]")
                  , n = e ? e.outerHTML : ""
                  , r = t.querySelector("[data-mediarenderer-image-element]")
                  , i = function() {
                    var t;
                    return (t = Ms).buildTransition.apply(t, arguments)
                }(t)
                  , o = function() {
                    var t;
                    return (t = Ms).buildLink.apply(t, arguments)
                }(t)
                  , a = t.getAttribute("data-mediarenderer-item-orientation") || ""
                  , s = Is((t.getAttribute("data-focal-point") || "50 50").split(" "), 2)
                  , u = s[0]
                  , c = s[1]
                  , l = new fo({
                    getSrc: function() {
                        return r.getAttribute("data-src") || r.currentSrc || r.src
                    },
                    instantImgData: r.getAttribute("data-instant-image"),
                    captionHTML: n,
                    width: r.naturalWidth,
                    height: r.naturalHeight,
                    transition: i,
                    orientation: a,
                    focal: {
                        x: u,
                        y: c
                    }
                });
                return o && (l.link = o),
                l
            }
            ,
            Ms.buildLink = function(t) {
                var e = t.querySelector("[data-mediarenderer-item-link]");
                if (!e)
                    return !1;
                var n = e.href
                  , r = "_blank" === e.getAttribute("target")
                  , i = e.getAttribute("title");
                return new yo({
                    href: n,
                    openInNewTab: r,
                    titleText: i
                })
            }
            ,
            Ms.buildTransition = function(t) {
                var e = t.getAttribute("data-transition-start")
                  , n = t.getAttribute("data-transition-delay");
                return n = null === n ? "0" : "0.10",
                new Io({
                    start: parseFloat(e),
                    name: t.getAttribute("data-transition"),
                    delay: parseFloat(n)
                })
            }
            ;
            var Ds = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Bs = Ds("story-media-renderer/fade-text-items");
            function Hs() {
                var t;
                return (t = Bs).initTextItemFades.apply(t, arguments)
            }
            Bs.initTextItemFades = function(t) {
                var e = h(".Theme-Layer-BodyText", t.parentElement);
                window.addEventListener("scroll", (function() {
                    e.forEach((function(t) {
                        st().measure((function() {
                            var e = t.getBoundingClientRect()
                              , n = e.top
                              , r = e.bottom
                              , i = window.innerHeight
                              , o = .3 * i
                              , a = n < i && n > i - o
                              , s = r < o && r > 0;
                            st().mutate((function() {
                                if (a) {
                                    var e = Di()((i - n) / o, 0, 1);
                                    t.style.setProperty("opacity", e.toString())
                                } else if (s) {
                                    var u = Di()(r / o, 0, 1);
                                    t.style.setProperty("opacity", u.toString())
                                } else
                                    r < 0 || n > i ? t.style.setProperty("opacity", "0") : t.style.setProperty("opacity", "1")
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ), {
                    passive: !0
                })
            }
            ;
            var zs = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Us = zs("story-media-renderer/get-scroll-info");
            function Ws() {
                var t;
                return (t = Us).getScrollInfo.apply(t, arguments)
            }
            Us.getNormalizedY = function(t) {
                var e = bt.getHeight()
                  , n = t.getBoundingClientRect()
                  , r = n.top
                  , i = n.bottom;
                return !!(r >= 0 && r <= e || i >= 0 && i <= e || r < 0 && i > 0) && -r
            }
            ,
            Us.getScrollInfo = function(t, e, n) {
                st().measure((function() {
                    var r = function() {
                        var t;
                        return (t = Us).getNormalizedY.apply(t, arguments)
                    }(t);
                    if (!1 === r)
                        return n({
                            scrollPercentage: !1
                        });
                    var i = t.clientHeight - bt.getHeight()
                      , o = r / i
                      , a = e.getCSSHeight() / i;
                    n({
                        scrollPercentage: o,
                        heightPercentage: a,
                        scrollHeight: i
                    })
                }
                ))
            }
            ;
            var Vs = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , $s = Vs("story-media-renderer/twocol-stacker")
              , qs = new Map;
            function Ys() {
                var t;
                return (t = $s).refreshVerticalStacking.apply(t, arguments)
            }
            function Gs() {
                var t;
                return (t = $s).twocolStackerPlugin.apply(t, arguments)
            }
            $s.refreshVerticalStacking = function(t, e, n) {
                var r = Mt(t) - Mt(e);
                return r !== qs.get(t) && (qs.set(t, r),
                n.style.height = "".concat(r, "px"),
                n.height = r,
                !0)
            }
            ,
            $s.makeRenderCaption = function(t) {
                var e;
                return function(n) {
                    e && e.captionHTML === n.captionHTML || n.captionHTML && (e = n,
                    t.innerHTML = n.captionHTML)
                }
            }
            ,
            $s.listenToWindowResize = function(t, e, n) {
                window.addEventListener("resize", (function() {
                    Ys(t, e, n)
                }
                ), {
                    passive: !0
                })
            }
            ,
            $s.twocolStackerPlugin = function(t, e, n) {
                if (!t)
                    throw new Error("Missing container element from twocolStackerPlauging, got ".concat(t));
                e.style.position = "absolute";
                var r = e.cloneNode(!0);
                Object.assign(r.style, {
                    visibility: "hidden",
                    position: "absolute",
                    opacity: 0
                }),
                e.parentNode.appendChild(r);
                var i = function() {
                    var t;
                    return (t = $s).makeRenderCaption.apply(t, arguments)
                }(r)
                  , o = !1;
                return function() {
                    var t;
                    (t = $s).listenToWindowResize.apply(t, arguments)
                }(t, e, n),
                {
                    beforeRender: function(e) {
                        var a = function(t) {
                            return t.find((function(t) {
                                return t instanceof xa
                            }
                            ))
                        }(e);
                        if (o && !e.isInvalid() && (e.state = Li.STATE_VALID,
                        o = !1),
                        !a || e.isUnchanged())
                            return e;
                        var s = r.clientHeight;
                        return i(a),
                        r.clientHeight !== s && (e.state = Li.STATE_INVALID,
                        Ys(t, r, n),
                        o = !0),
                        e
                    }
                }
            }
            ;
            var Ks = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Xs = Ks("story-media-renderer/init-sections");
            function Js(t, e) {
                t.style.top = "".concat(e, "px")
            }
            function Zs() {
                var t;
                return (t = Xs).initSection.apply(t, arguments)
            }
            function Qs() {
                var t;
                return (t = Xs).watch.apply(t, arguments)
            }
            function tu(t) {
                return tu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                tu(t)
            }
            function eu(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            function nu(t, e) {
                if (e && ("object" === tu(e) || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }
            function ru(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return ru = function(t) {
                    if (null === t || (n = t,
                    -1 === Function.toString.call(n).indexOf("[native code]")))
                        return t;
                    var n;
                    if ("function" != typeof t)
                        throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t))
                            return e.get(t);
                        e.set(t, r)
                    }
                    function r() {
                        return iu(t, arguments, su(this).constructor)
                    }
                    return r.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    au(r, t)
                }
                ,
                ru(t)
            }
            function iu(t, e, n) {
                return iu = ou() ? Reflect.construct : function(t, e, n) {
                    var r = [null];
                    r.push.apply(r, e);
                    var i = new (Function.bind.apply(t, r));
                    return n && au(i, n.prototype),
                    i
                }
                ,
                iu.apply(null, arguments)
            }
            function ou() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }
            function au(t, e) {
                return au = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                ,
                au(t, e)
            }
            function su(t) {
                return su = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                ,
                su(t)
            }
            Xs.initSection = function(t) {
                var e = t.querySelector("canvas[data-mediarenderer-canvas]");
                if (!e)
                    throw new Error("initCanvasResizer was called without a valid canvas element, got: ".concat(e, ". Make sure you've got [data-mediarenderer-canvas] on your canvas elements."));
                var n = e.getAttribute("data-mediarenderer-scaling") ? parseInt(e.getAttribute("data-mediarenderer-scaling"), 10) : 1;
                !function() {
                    var t;
                    (t = ks).initCanvasResizer.apply(t, arguments)
                }(e, n);
                var r = e.getAttribute("data-scaling-mode")
                  , i = e.hasAttribute("data-mediarenderer-transition")
                  , o = new Jo({
                    canvasElement: e,
                    renderScale: n
                });
                !function() {
                    var t;
                    (t = Ms).deserializeDOM.apply(t, arguments)
                }(e, (function(a) {
                    !function(t, e, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                          , i = {
                            xPositioning: "center",
                            yPositioning: "center",
                            scalingMode: "cover",
                            isTransitioned: !1
                        }
                          , o = Object.assign({}, i, r)
                          , a = t.querySelector("[data-mediarenderer-caption-display]")
                          , s = new Ps(a)
                          , u = [ys(), rs(), na({
                            scalingMode: o.scalingMode
                        }), ts(), Ka(), ls({
                            scalingMode: o.scalingMode
                        }), o.isTransitioned ? bs() : ua(), Ca({
                            hideWhenOutOfBounds: o.isTransitioned
                        }), oa()];
                        if ("fit" === o.scalingMode) {
                            if (a) {
                                var c = t.querySelector("[data-twocol-stacker]");
                                u.push(Gs(c, a, e.canvasElement)),
                                u.push(da({
                                    render: function(t) {
                                        return Js(a, t)
                                    },
                                    renderScale: o.renderScale
                                }))
                            }
                            u.unshift(Wa())
                        }
                        u.push(qa({
                            linkedItem: e.canvasElement
                        }));
                        var l = new Qo({
                            renderers: [e, s],
                            images: n,
                            renderStackPlugins: u
                        });
                        Hs(t);
                        var f = Ss(t)
                          , d = function r() {
                            st().measure((function() {
                                var e, n = t.getBoundingClientRect();
                                e = n.top > 0 ? "before" : n.bottom < bt.getHeight() ? "after" : "during",
                                st().mutate((function() {
                                    t.firstElementChild.setAttribute("data-attachment", e)
                                }
                                ))
                            }
                            )),
                            Ws(t, e, (function(t) {
                                var i = t.scrollPercentage
                                  , a = t.heightPercentage
                                  , s = t.scrollHeight;
                                try {
                                    if (!1 === i)
                                        return;
                                    var u = new So({
                                        heightPercentage: a,
                                        scrollPercentage: i,
                                        width: e.getWidth(),
                                        height: e.getHeight()
                                    });
                                    u.getOrientation = function() {
                                        return bt.getHeight() > bt.getWidth() ? "portrait" : "landscape"
                                    }
                                    ;
                                    var c = o.isTransitioned ? f(n, s) : n;
                                    l.render(u, c)
                                } catch (t) {
                                    throw ee(r),
                                    t
                                }
                            }
                            ))
                        }
                          , p = function() {
                            return te(d)
                        }
                          , h = function() {
                            return ee(d)
                        }
                          , m = e.canvasElement;
                        Qs(m.parentElement || m, p, h),
                        d(),
                        window.addEventListener("load", d)
                    }(t, o, a, {
                        yPositioning: e.getAttribute("data-y-positioning"),
                        scalingMode: r,
                        isTransitioned: i,
                        renderScale: n
                    })
                }
                ))
            }
            ,
            Xs.init = function() {
                h("[data-mediarenderer]").forEach(Zs)
            }
            ,
            Xs.makeGhostObservable = function(t) {
                var e = document.createElement("div");
                return e.className = "FullSize",
                Object.assign(e.style, {
                    opacity: 0,
                    zIndex: -100
                }),
                t.parentElement.insertBefore(e, t),
                e
            }
            ,
            Xs.watch = function(t, e, n) {
                var r = function() {
                    var t;
                    return (t = Xs).makeGhostObservable.apply(t, arguments)
                }(t);
                L(r, (function(t) {
                    _(t) ? e() : n()
                }
                ), {
                    triggerPoint: w.Near
                })
            }
            ;
            var uu = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , cu = uu("gallery-renderer/gallery-renderer");
            function lu(t) {
                if (t.status >= 200 && t.status < 300)
                    return t;
                var e = new du(t);
                throw e.response = t,
                e
            }
            function fu(t) {
                var e = t.headers.get("content-type");
                if (e && e.includes("application/json"))
                    return t;
                throw new TypeError("Incorrect data for Gallery")
            }
            cu.renderGallery = function(t, e, n) {
                fetch(t).then(lu).then(fu).then((function(t) {
                    return t.json()
                }
                )).then((function(t) {
                    var r = t.items.filter((function(t) {
                        return t.url !== window.location.href
                    }
                    )).map((function(t) {
                        var n = "tiles" === e ? 'class="ObjectFit--cover"' : ""
                          , r = t.mediaSrc ? '<img alt="" src="'.concat(t.mediaSrc, '" ').concat(n, ">") : ""
                          , i = t.openInNewWindow ? 'target="_blank"' : ""
                          , o = t.isNoFollow ? 'rel="nofollow"' : "";
                        return '\n              <li class="Theme-Layer-Gallery-Item" style="overflow:hidden">\n                <a href="'.concat(t.url ? t.url : "/", '" ').concat(i, " ").concat(o, '>\n                  <div class="Theme-Layer-Gallery-Item-Media">\n                  ').concat(r, '\n                  </div>\n                  <div class="Theme-Layer-Gallery-Item-Text">\n                    <h4 class="Theme-Layer-Gallery-Item-Title">').concat(t.title ? t.title : "", '</h4>\n                    <div class="Theme-Layer-Gallery-Item-Description">').concat(t.description ? t.description : "", "</div>\n                  </div>\n                </a>\n              </li>\n            ")
                    }
                    )).join("")
                      , i = '\n          <h3 class="Layout Theme-Layer-Gallery-Heading">'.concat(t.title ? t.title : "", '</h3>\n          <ul class="Layout Theme-Layer-Gallery-List">').concat(r, "</ul>\n        ");
                    return n ? n(i) : i
                }
                )).catch((function(t) {
                    console.log("Gallery was unable to parse external data", t)
                }
                ))
            }
            ;
            var du = function(t) {
                !function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    e && au(t, e)
                }(s, t);
                var e, n, r, i, o, a = (e = s,
                n = ou(),
                function() {
                    var t, r = su(e);
                    if (n) {
                        var i = su(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else
                        t = r.apply(this, arguments);
                    return nu(this, t)
                }
                );
                function s(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, s),
                    (e = a.call(this, t.statusText)).response = t,
                    e
                }
                return r = s,
                i && eu(r.prototype, i),
                o && eu(r, o),
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                r
            }(ru(Error))
              , pu = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , hu = pu("story-gallery-renderer/init-sections");
            function mu() {
                var t;
                return (t = hu).initSection.apply(t, arguments)
            }
            hu.initSection = function(t) {
                !function() {
                    var t;
                    (t = cu).renderGallery.apply(t, arguments)
                }(("file:" === window.location.protocol ? "http:" : window.location.protocol) + t.getAttribute("data-url").replace(/^\w+:/, ""), t.getAttribute("data-mode"), (function(e) {
                    t.innerHTML = e,
                    t.classList.remove("GalleryRenderer--initializing"),
                    Pt()
                }
                ))
            }
            ,
            hu.init = function() {
                h("[data-galleryrenderer]").forEach(mu)
            }
            ;
            var yu = n(8117)
              , gu = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , vu = gu("navigation/active-navitem-tracker")
              , bu = "Theme-ActiveNavigationBarItem";
            function wu() {
                var t;
                return (t = vu).deactivateNavItem.apply(t, arguments)
            }
            vu.getTargettedNavItems = function(t) {
                return t.reduce((function(t, e) {
                    var n = e.getAttribute("href");
                    if (0 !== n.indexOf("#"))
                        return t;
                    var r = n.replace(/^#/, "");
                    try {
                        var i = document.getElementById(r);
                        i || console.warn("navigation: Couldn't locate target via nav item id '".concat(r, "'.")),
                        t.push({
                            target: i,
                            navItem: e
                        })
                    } catch (t) {
                        console.warn("navigation: Bad target via nav item selector ".concat(r, "."))
                    }
                    return t
                }
                ), [])
            }
            ,
            vu.deactivateNavItems = function(t) {
                t.forEach(wu)
            }
            ,
            vu.deactivateNavItem = function(t) {
                t.parentElement.classList.remove(bu)
            }
            ,
            vu.activateNavItem = function(t) {
                t.parentElement.classList.add(bu)
            }
            ;
            var xu = {
                lastMostVisible: !1
            };
            function Eu(t) {
                st().measure((function() {
                    var e = function(t) {
                        var e = bt.getHeight() / 2;
                        return t.find((function(t) {
                            var n = t.target.getBoundingClientRect()
                              , r = null !== t.target.className.match(/\bTheme-TitleSection\b/);
                            return n.top < e && (r || n.bottom > e)
                        }
                        ))
                    }(t.slice().reverse());
                    xu.lastMostVisible !== e && st().mutate((function() {
                        !function() {
                            var t;
                            (t = vu).deactivateNavItems.apply(t, arguments)
                        }(t.map((function(t) {
                            return t.navItem
                        }
                        ))),
                        e && function() {
                            var t;
                            (t = vu).activateNavItem.apply(t, arguments)
                        }(e.navItem),
                        xu.lastMostVisible = e
                    }
                    ))
                }
                ))
            }
            function Su() {
                var t;
                return (t = vu).initNavItemTracker.apply(t, arguments)
            }
            vu.initNavItemTracker = function(t) {
                var e = function() {
                    var t;
                    return (t = vu).getTargettedNavItems.apply(t, arguments)
                }(t);
                if (0 !== e.length) {
                    var n = function() {
                        return Eu(e)
                    };
                    ["scroll", "resize"].forEach((function(t) {
                        return window.addEventListener(t, n)
                    }
                    )),
                    setTimeout(n, 1e3),
                    n()
                }
            }
            ;
            var Tu = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , ku = Tu("navigation/burger-nav");
            function Ou() {
                var t;
                return (t = ku).initBurgerNav.apply(t, arguments)
            }
            ku.initBurgerNav = function() {
                var t = h(".Navigation")
                  , e = h(".Navigation__hamburger");
                if (t.length && e.length) {
                    var n = t[0]
                      , r = e[0]
                      , i = h(".Navigation__item", n);
                    !function() {
                        var t;
                        (t = ku).listenToBurger.apply(t, arguments)
                    }(r, n),
                    function() {
                        var t;
                        (t = ku).listenToNavItems.apply(t, arguments)
                    }(i, n, r),
                    function() {
                        var t;
                        (t = ku).enableBurger.apply(t, arguments)
                    }(r)
                }
            }
            ,
            ku.listenToBurger = function(t, e) {
                t.addEventListener("click", (function(n) {
                    n.preventDefault(),
                    e.classList.toggle("Navigation--isActive");
                    var r = e.classList.contains("Navigation--isActive") ? "true" : "false";
                    t.setAttribute("aria-expanded", r)
                }
                ))
            }
            ,
            ku.enableBurger = function(t) {
                t.classList.remove("Navigation__hamburger--initializing")
            }
            ,
            ku.listenToNavItems = function(t, e, n) {
                var r = function() {
                    e.classList.remove("Navigation--isActive"),
                    n.setAttribute("aria-expanded", "false")
                };
                t.forEach((function(t) {
                    return t.addEventListener("click", r)
                }
                ))
            }
            ;
            var _u = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Au = _u("navigation/index")
              , Pu = "[data-story-nav-item]";
            function Iu() {
                var t;
                return (t = Au).getFixedStoryElementsHeight.apply(t, arguments)
            }
            Au.getFixedStoryElementsHeight = function() {
                return h("[data-fixed-story-element]").reduce((function(t, e) {
                    return t + e.getBoundingClientRect().height
                }
                ), -2)
            }
            ,
            Au.initNavItems = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pu
                  , e = h(t);
                Su(e),
                Ou();
                var n = Iu();
                yu.setup(500, n)
            }
            ;
            var Cu = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , ju = Cu("social-share/index")
              , Lu = {
                facebook: {
                    networkName: "Facebook",
                    shareAction: "Share",
                    popupWidth: 600,
                    popupHeight: 420
                },
                twitter: {
                    networkName: "Twitter",
                    shareAction: "Tweet",
                    popupWidth: 600,
                    popupHeight: 250
                },
                linkedin: {
                    networkName: "LinkedIn",
                    shareAction: "Share",
                    popupWidth: 600,
                    popupHeight: 250
                }
            };
            function Nu() {
                var t;
                return (t = ju).onButtonClick.apply(t, arguments)
            }
            function Ru() {
                var t;
                return (t = ju).initButton.apply(t, arguments)
            }
            ju.showPopup = function(t, e) {
                var n = Math.round(bt.getWidth() / 2 - e.popupWidth / 2)
                  , r = 0;
                bt.getHeight() > e.popupHeight && (r = Math.round(bt.getHeight() / 3 - e.popupHeight / 2));
                var i = {
                    left: n,
                    top: r,
                    width: e.popupWidth,
                    height: e.popupHeight,
                    personalbar: 0,
                    toolbar: 0,
                    scrollbars: 1,
                    resizable: 1
                }
                  , o = Object.keys(i).map((function(t) {
                    return "".concat(t, "=").concat(i[t])
                }
                )).join(",")
                  , a = "social-widget-" + e.networkName.replace(/\s+/, "-")
                  , s = window.open(t, a, o);
                s ? s.focus() : location.href = t
            }
            ,
            ju.onButtonClick = function(t) {
                t.preventDefault();
                var e = t.currentTarget
                  , n = e.getAttribute("data-social-share")
                  , r = Lu[n];
                !function() {
                    var t;
                    (t = ju).showPopup.apply(t, arguments)
                }(e.href, r)
            }
            ,
            ju.initButton = function(t) {
                var e = t.getAttribute("data-social-share");
                e in Lu ? t.addEventListener("click", Nu, {
                    passive: !1
                }) : console.error("Social Share button of type ".concat(e, " is not supported."))
            }
            ,
            ju.initSocialShareButtons = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[data-social-share]"
                  , e = h(t);
                e.forEach(Ru)
            }
            ;
            var Mu = n(9868)
              , Fu = n.n(Mu)
              , Du = n(4774)
              , Bu = n.n(Du)
              , Hu = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , zu = Hu("scrollmation/scroll-info");
            function Uu(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            zu.getScrollInfo = function(t) {
                var e = t.getBoundingClientRect()
                  , n = -e.top / Math.max(1, e.height - document.documentElement.clientHeight);
                return {
                    percentage: n,
                    scrollingIn: n < 0,
                    scrollingOut: n > 1
                }
            }
            ;
            var Wu, Vu, $u, qu = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh"), Yu = qu("scrollmation/index");
            !function(t) {
                t.Ready = "ready",
                t.Primed = "primed",
                t.Transitioning = "transitioning",
                t.Active = "active",
                t.Lingering = "lingering",
                t.Completed = "completed"
            }(Wu || (Wu = {})),
            function(t) {
                t.Reset = "reset",
                t.Prime = "prime",
                t.StartTransition = "startTransition",
                t.ReverseTransition = "reverseTransition",
                t.Activate = "activate",
                t.Linger = "linger",
                t.Complete = "complete"
            }(Vu || (Vu = {})),
            function(t) {
                t.Ready = "ready",
                t.Active = "active",
                t.Complete = "complete"
            }($u || ($u = {}));
            var Gu = Bu().factory({
                init: Wu.Ready,
                transitions: [{
                    name: Vu.Prime,
                    from: Wu.Ready,
                    to: Wu.Primed
                }, {
                    name: Vu.StartTransition,
                    from: Wu.Primed,
                    to: Wu.Transitioning
                }, {
                    name: Vu.Activate,
                    from: Wu.Transitioning,
                    to: Wu.Active
                }, {
                    name: Vu.Linger,
                    from: Wu.Active,
                    to: Wu.Lingering
                }, {
                    name: Vu.Complete,
                    from: [Wu.Active, Wu.Lingering],
                    to: Wu.Completed
                }, {
                    name: Vu.Activate,
                    from: [Wu.Completed, Wu.Lingering],
                    to: Wu.Active
                }, {
                    name: Vu.ReverseTransition,
                    from: Wu.Active,
                    to: Wu.Transitioning
                }, {
                    name: Vu.Reset,
                    from: Wu.Transitioning,
                    to: Wu.Ready
                }],
                methods: {
                    onPrimed: function() {
                        var t = this.item
                          , e = this.classNames;
                        t.itemEl.classList.add(e.prime),
                        this.onItemShown && this.onItemShown(t)
                    },
                    onStartTransition: function() {
                        var t = this
                          , e = this.item
                          , n = this.classNames;
                        q(e.itemEl, "transitionend", (function() {
                            return t.activate()
                        }
                        )),
                        requestAnimationFrame((function() {
                            return e.itemEl.classList.add(n.active)
                        }
                        )),
                        kt()
                    },
                    onReverseTransition: function() {
                        var t = this
                          , e = this.item
                          , n = this.classNames;
                        q(e.itemEl, "transitionend", (function() {
                            return t.reset()
                        }
                        )),
                        e.itemEl.classList.remove(n.active)
                    },
                    onReset: function() {
                        var t = this.item
                          , e = this.classNames;
                        t.itemEl.classList.remove(e.prime),
                        t.itemEl.classList.remove(e.active)
                    },
                    onActive: function() {
                        var t = this.item
                          , e = this.classNames;
                        [e.prime, e.active].forEach((function(e) {
                            return t.itemEl.classList.add(e)
                        }
                        )),
                        this.onItemShown && this.onItemShown(t),
                        kt()
                    },
                    onCompleted: function() {
                        var t = this.item
                          , e = this.classNames;
                        t.itemEl.classList.remove(e.prime),
                        t.itemEl.classList.remove(e.active)
                    },
                    requestReady: function() {
                        this.is(Wu.Ready) || this.is(Wu.Active) && this.reverseTransition()
                    },
                    requestActive: function() {
                        this.is(Wu.Ready) && this.prime(),
                        this.is(Wu.Primed) && this.startTransition(),
                        (this.is(Wu.Completed) || this.is(Wu.Lingering)) && this.activate()
                    },
                    requestComplete: function() {
                        var t = this.shouldLinger(this.item)
                          , e = this.can(Vu.Linger)
                          , n = !t
                          , r = this.can(Vu.Complete);
                        t && e ? this.linger() : n && r && this.complete()
                    },
                    isActive: function() {
                        return this.is(Wu.Active)
                    }
                },
                data: function(t) {
                    return t
                }
            });
            function Ku() {
                var t;
                return (t = Yu).renderScrollmation.apply(t, arguments)
            }
            Yu.renderScrollmation = function(t) {
                if (!t.isRendering) {
                    t.isRendering = !0;
                    var e = function() {
                        var t;
                        return (t = zu).getScrollInfo.apply(t, arguments)
                    }(t.scrollContainer);
                    t.items.forEach((function(n) {
                        var r, i = function(t, e) {
                            var n = t.scrollingIn && e.showDuringScrollIn
                              , r = t.scrollingOut && e.showDuringScrollOut
                              , i = (o = t.percentage,
                            a = e.start,
                            s = e.end,
                            o >= a && o < s);
                            var o, a, s;
                            if (n || r || i)
                                return $u.Active;
                            if (t.percentage < e.start)
                                return $u.Ready;
                            if (t.percentage > e.end)
                                return $u.Complete
                        }(e, n.data);
                        if (i) {
                            var o = t.machines.get(n);
                            (r = {},
                            Uu(r, $u.Ready, o.requestReady),
                            Uu(r, $u.Active, o.requestActive),
                            Uu(r, $u.Complete, o.requestComplete),
                            r)[i].call(o)
                        }
                    }
                    )),
                    t.isRendering = !1
                }
            }
            ;
            var Xu = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Ju = Xu("card-canvas/card-canvas-height");
            Ju.renderCardCanvasHeight = function(t, e) {
                st().measure((function() {
                    var n = window.innerWidth
                      , r = e.reduce((function(t, e) {
                        return t.clientHeight > e.clientHeight ? t : e
                    }
                    ), e[0]).clientHeight;
                    st().mutate((function() {
                        t.style.height = n >= 900 ? "".concat(r, "px") : null
                    }
                    ))
                }
                ))
            }
            ;
            var Zu = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Qu = Zu("card-canvas/card-canvas-item")
              , tc = {
                items: [],
                lastSizes: new WeakMap
            };
            function ec() {
                tc.items.forEach((function(t) {
                    return function(t) {
                        (function(t) {
                            return new Promise((function(e, n) {
                                st().measure((function() {
                                    if ("none" === getComputedStyle(t.el).getPropertyValue("display"))
                                        return n();
                                    var r = window.innerWidth
                                      , i = t.heightReferenceEl.clientHeight
                                      , o = t.caption ? t.caption.clientHeight : 0
                                      , a = tc.lastSizes.has(t) ? tc.lastSizes.get(t) : {
                                        width: 0,
                                        height: 0,
                                        captionHeight: 0
                                    };
                                    if (r === a.width && i === a.height && o === a.captionHeight)
                                        return n();
                                    a.width = r,
                                    a.height = i,
                                    a.captionHeight = o,
                                    tc.lastSizes.set(t, a);
                                    var s = i - o;
                                    st().mutate((function() {
                                        t.img.forEach((function(t) {
                                            return t.style.maxHeight = r >= 900 ? "".concat(s, "px") : null
                                        }
                                        )),
                                        e()
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        )(t).then((function() {
                            return function(t) {
                                return new Promise((function(e) {
                                    if (!t.caption)
                                        return e();
                                    function n(n, r) {
                                        st().mutate((function() {
                                            var i, o, a, s, u, c = (i = r,
                                            o = {
                                                width: n.naturalWidth,
                                                height: n.naturalHeight
                                            },
                                            a = o.width / i.width,
                                            s = o.height / i.height,
                                            u = Math.max(a, s),
                                            {
                                                width: o.width / u,
                                                height: o.height / u
                                            }), l = Math.max(c.width, 250);
                                            t.caption.style.maxWidth = "".concat(l, "px"),
                                            e()
                                        }
                                        ))
                                    }
                                    st().measure((function() {
                                        var e = t.el.querySelector("picture img")
                                          , r = e.getBoundingClientRect();
                                        e.naturalWidth > 0 ? n(e, r) : e.addEventListener("load", (function() {
                                            return n(e, r)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ))
                            }(t)
                        }
                        )).catch((function() {}
                        ))
                    }(t)
                }
                ))
            }
            function nc(t) {
                return {
                    el: t,
                    img: h("img", t),
                    caption: t.querySelector(".CardCanvasItem__caption"),
                    heightReferenceEl: t.parentElement.querySelector("[data-card-canvas-height-reference]")
                }
            }
            function rc(t) {
                return function(t) {
                    if (Array.isArray(t))
                        return ic(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                        return Array.from(t)
                }(t) || function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return ic(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return ic(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ic(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            Qu.initCardCanvasItems = function() {
                var t = h("[data-card-canvas-item]", document.documentElement).map(nc);
                0 !== t.length && (tc.items = t,
                te(ec))
            }
            ,
            Qu.addItemByEl = function(t) {
                if (!tc.items.find((function(e) {
                    return e.el === t
                }
                ))) {
                    var e = nc(t);
                    tc.items.push(e),
                    te(ec)
                }
            }
            ,
            Qu.removeItemByEl = function(t) {
                tc.items = tc.items.filter((function(e) {
                    return e.el !== t
                }
                ))
            }
            ;
            var oc = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , ac = oc("card-canvas/index")
              , sc = {
                instances: new Map,
                isRunning: !1
            }
              , uc = new WeakMap;
            function cc(t, e, n) {
                var r = 1 / n.length
                  , i = e * r;
                return {
                    itemEl: t,
                    index: e,
                    data: {
                        start: i,
                        end: i + r,
                        showDuringScrollIn: 0 === e,
                        showDuringScrollOut: e === n.length - 1
                    }
                }
            }
            function lc() {
                Fu()(sc.instances.values()).map((function(t) {
                    return t.items
                }
                )).map((function(t) {
                    return t.map((function(t) {
                        var e = uc.get(t.itemEl);
                        Object.assign(e.style, {
                            position: "absolute",
                            top: "".concat(100 * t.data.start, "%")
                        })
                    }
                    ))
                }
                ))
            }
            function fc(t, e) {
                Ku(t),
                function() {
                    var t;
                    (t = Ju).renderCardCanvasHeight.apply(t, arguments)
                }(e, t.items.map((function(t) {
                    return t.itemEl
                }
                )))
            }
            function dc() {
                sc.instances.forEach(fc)
            }
            function pc(t) {
                return function(t) {
                    if (Array.isArray(t))
                        return hc(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                        return Array.from(t)
                }(t) || function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return hc(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return hc(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function hc(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            }
            ac.initCardCanvases = function() {
                !function() {
                    var t;
                    (t = Qu).initCardCanvasItems.apply(t, arguments)
                }(),
                h("[data-card-canvas]").forEach((function(t) {
                    return function() {
                        var t;
                        return (t = ac).initCardCanvas.apply(t, arguments)
                    }(t, {
                        doLazyload: !0
                    })
                }
                )),
                ["resize", "orientationchange"].forEach((function(t) {
                    return window.addEventListener(t, lc, {
                        passive: !0
                    })
                }
                ))
            }
            ,
            ac.initCardCanvas = function(t, e, n) {
                var r = h("[data-card-canvas-item]", t);
                if (0 !== r.length) {
                    var i = r.map(cc)
                      , o = function(t) {
                        var e = sc.instances;
                        return e.has(t) || e.set(t, {
                            scrollContainer: t.parentElement,
                            items: [],
                            isRendering: !1,
                            machines: new WeakMap
                        }),
                        e.get(t)
                    }(t);
                    return o.items = i.reduce((function(t, e) {
                        var n = o.items.find((function(t) {
                            return t.itemEl === e.itemEl
                        }
                        ));
                        return n && (n.data = e.data),
                        [].concat(rc(t), [n || e])
                    }
                    ), []),
                    o.items.map((function(n) {
                        return e.doLazyload ? function(t, e) {
                            if (!uc.get(t.itemEl)) {
                                var n = document.createElement("div");
                                n.classList.add("BackgroundScrollmation__lazyloadTriggerElement"),
                                n.setAttribute("data-item-index", String(t.index)),
                                uc.set(t.itemEl, n),
                                e.appendChild(n),
                                D({
                                    pictures: h("picture", t.itemEl),
                                    container: t.itemEl.querySelector("[data-lazyload-container]"),
                                    trigger: n
                                })
                            }
                            return t
                        }(n, t.parentElement) : n
                    }
                    )).filter((function(t) {
                        return !o.machines.get(t)
                    }
                    )).forEach((function(t) {
                        return o.machines.set(t, new Gu({
                            item: t,
                            classNames: {
                                prime: "CardCanvasItem--isPrimed",
                                active: "CardCanvasItem--isActive"
                            },
                            onItemShown: function(t) {
                                n && n(t, o.items.indexOf(t))
                            },
                            shouldLinger: function(t) {
                                return !o.items.filter((function(e) {
                                    return e !== t
                                }
                                )).map((function(t) {
                                    return o.machines.get(t)
                                }
                                )).some((function(t) {
                                    return t.isActive()
                                }
                                ))
                            }
                        }))
                    }
                    )),
                    e.doLazyload && lc(),
                    te(dc),
                    function() {
                        return ee(dc)
                    }
                }
            }
            ;
            var mc = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , yc = mc("background-scrollmation/index")
              , gc = {
                instances: new Map,
                isRunning: !1
            }
              , vc = new WeakMap;
            function bc(t, e, n) {
                var r = 1 / n.length
                  , i = e * r;
                return {
                    itemEl: t,
                    index: e,
                    data: {
                        start: i,
                        end: i + r,
                        showDuringScrollIn: 0 === e,
                        showDuringScrollOut: e === n.length - 1
                    }
                }
            }
            function wc() {
                Fu()(gc.instances.values()).map((function(t) {
                    return t.items
                }
                )).map((function(t) {
                    return t.map((function(t) {
                        var e = vc.get(t.itemEl);
                        Object.assign(e.style, {
                            position: "absolute",
                            top: "".concat(100 * t.data.start, "%")
                        })
                    }
                    ))
                }
                ))
            }
            function xc() {
                gc.instances.forEach((function(t) {
                    return Ku(t)
                }
                ))
            }
            function Ec(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function Sc(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ec(Object(n), !0).forEach((function(e) {
                        Tc(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ec(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function Tc(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            yc.initBackgroundScrollmations = function() {
                h("[data-background-scrollmation]").forEach((function(t) {
                    return function() {
                        var t;
                        return (t = yc).initBackgroundScrollmation.apply(t, arguments)
                    }(t, {
                        doLazyload: !0
                    })
                }
                )),
                ["resize", "orientationchange"].forEach((function(t) {
                    return window.addEventListener(t, wc, {
                        passive: !0
                    })
                }
                ))
            }
            ,
            yc.initBackgroundScrollmation = function(t, e, n) {
                var r = h("[data-background-scrollmation-item]", t);
                if (0 === r.length)
                    return function() {}
                    ;
                var i = r.map(bc)
                  , o = function(t) {
                    var e = gc.instances;
                    return e.has(t) || e.set(t, {
                        scrollContainer: t.parentElement,
                        items: [],
                        isRendering: !1,
                        machines: new WeakMap
                    }),
                    e.get(t)
                }(t);
                return o.items = i.reduce((function(t, e) {
                    var n = o.items.find((function(t) {
                        return t.itemEl === e.itemEl
                    }
                    ));
                    return n && (n.data = e.data),
                    [].concat(pc(t), [n || e])
                }
                ), []),
                o.items.map((function(n) {
                    return e.doLazyload ? function(t, e) {
                        if (!vc.get(t.itemEl)) {
                            var n = document.createElement("div");
                            n.classList.add("BackgroundScrollmation__lazyloadTriggerElement"),
                            n.setAttribute("data-item-index", String(t.index)),
                            vc.set(t.itemEl, n),
                            e.appendChild(n),
                            D({
                                pictures: h("picture", t.itemEl),
                                container: t.itemEl.querySelector("[data-lazyload-container]"),
                                trigger: n
                            })
                        }
                        return t
                    }(n, t.parentElement) : n
                }
                )).filter((function(t) {
                    return !o.machines.get(t)
                }
                )).forEach((function(t) {
                    return o.machines.set(t, new Gu({
                        item: t,
                        classNames: {
                            prime: "BackgroundScrollmationItem--isPrimed",
                            active: "BackgroundScrollmationItem--isActive"
                        },
                        onItemShown: function(t) {
                            n && n(t, o.items.indexOf(t))
                        },
                        shouldLinger: function(t) {
                            return !o.items.filter((function(e) {
                                return e !== t
                            }
                            )).map((function(t) {
                                return o.machines.get(t)
                            }
                            )).some((function(t) {
                                return t.isActive()
                            }
                            ))
                        }
                    }))
                }
                )),
                e.doLazyload && wc(),
                te(xc),
                function() {
                    return ee(xc)
                }
            }
            ;
            var kc, Oc = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh"), _c = Oc("scrollymoly/index"), Ac = !1;
            _c.initScrollymoly = function(t) {
                t && (Pc.getTopOffset = t),
                h("[data-scrollymoly]").forEach(Ic),
                window.addEventListener("orientationchange", (function() {
                    return jc()
                }
                )),
                Ac || (Ac = !0,
                window.addEventListener("resize", Lc),
                te(jc))
            }
            ,
            function(t) {
                t.TranslateDown = "translateDown",
                t.FadeIn = "fadeIn",
                t.FadeOut = "fadeOut"
            }(kc || (kc = {}));
            var Pc = {
                moles: [],
                getTopOffset: function(t) {
                    return t.getBoundingClientRect().top + document.documentElement.scrollTop
                }
            };
            function Ic() {
                var t;
                return (t = _c).initScrollymole.apply(t, arguments)
            }
            function Cc() {
                var t;
                return (t = _c).pushMole.apply(t, arguments)
            }
            function jc() {
                var t;
                return (t = _c).render.apply(t, arguments)
            }
            function Lc() {
                Pc.moles.forEach((function(t) {
                    t.topOffset = Pc.getTopOffset(t.basisEl)
                }
                ))
            }
            function Nc(t) {
                return new Promise((function(e, n) {
                    st().measure((function() {
                        t.effects.forEach((function(n) {
                            n.kind in Fc ? Fc[n.kind](t, n, e) : (console.error("Unknown effect type '".concat(n.kind, "'")),
                            e())
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            function Rc() {
                var t;
                return (t = _c).resetMole.apply(t, arguments)
            }
            function Mc(t, e, n) {
                var r = e.firstElementChild.getBoundingClientRect()
                  , i = t.kind === kc.FadeIn ? r.top : r.bottom
                  , o = bt.getHeight() * t.end
                  , a = o + Math.min(r.height, bt.getHeight() * t.start)
                  , s = i > a ? 1 : (i - o) / (a - o);
                return Math.round(100 * s) / 100
            }
            _c.initScrollymole = function(t) {
                var e = t.getAttribute("data-scrollymoly");
                try {
                    var n = JSON.parse(e).map((function(t) {
                        return Sc(Sc({}, t), {}, {
                            offset: Number.isFinite(t.offset) ? t.offset : 0
                        })
                    }
                    ))
                      , r = t.closest("[data-scrollymoly-basis]");
                    Cc({
                        element: t,
                        basisEl: r,
                        effects: n,
                        topOffset: Pc.getTopOffset(r),
                        state: {}
                    })
                } catch (t) {
                    console.error(t)
                }
            }
            ,
            _c.pushMole = function(t) {
                Pc.moles.push(t),
                jc()
            }
            ,
            _c.removeMole = function(t) {
                var e = Pc.moles.findIndex((function(e) {
                    return e.element === t.element
                }
                ));
                -1 !== e && (Rc(Pc.moles[e]),
                Pc.moles.splice(e, 1)),
                jc()
            }
            ,
            _c.setMole = function(t) {
                var e = Pc.moles.find((function(e) {
                    return e.element === t.element
                }
                ));
                return e ? t.effects.length ? (Object.assign(e, t),
                Rc(e),
                void jc()) : function() {
                    var t;
                    return (t = _c).removeMole.apply(t, arguments)
                }(t) : Cc(t)
            }
            ,
            _c.render = function() {
                Pc.moles.map(Nc)
            }
            ,
            _c.resetMole = function(t) {
                st().mutate((function() {
                    Object.assign(t.element.style, {
                        opacity: null,
                        transform: null
                    })
                }
                ))
            }
            ;
            var Fc = {
                fadeOut: function(t, e, n) {
                    var r = Mc(e, t.basisEl, t.topOffset)
                      , i = Math.max(0, Math.min(1, r));
                    if (t.state.lastOpacity === i)
                        return n();
                    st().mutate((function() {
                        t.state.lastOpacity = i,
                        t.element.style.opacity = i.toString(),
                        n()
                    }
                    ))
                },
                fadeIn: function(t, e, n) {
                    var r = Mc(e, t.basisEl, t.topOffset)
                      , i = Math.max(0, Math.min(1, 1 - r));
                    if (t.state.lastOpacity === i)
                        return n();
                    st().mutate((function() {
                        t.state.lastOpacity = i,
                        t.element.style.opacity = i.toString(),
                        n()
                    }
                    ))
                }
            }
              , Dc = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Bc = Dc("focal-point/index");
            function Hc() {
                var t;
                return (t = Bc).initFocalPoints.apply(t, arguments)
            }
            function zc() {
                st().measure((function() {
                    var t = bt.getOrientation();
                    st().mutate((function() {
                        h("[data-landscape-focal]").forEach((function(e) {
                            var n = e.dataset["".concat(t, "Focal")];
                            if (n) {
                                var r = "PICTURE" === e.tagName ? e.querySelector("img") : e;
                                null == r || r.style.setProperty("object-position", n)
                            }
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            Bc.initFocalPoints = function() {
                window.addEventListener("resize", (function() {
                    return zc()
                }
                ), {
                    passive: !0
                }),
                zc()
            }
            ,
            Bc.exposeInitFocalPointPicture = function() {
                window.Shorthand.initFocalPointPictures = Hc
            }
            ;
            var Uc = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Wc = Uc("split-layout/index");
            function Vc() {
                var t;
                return (t = Wc).initSplitLayout.apply(t, arguments)
            }
            Wc.initSplitLayouts = function() {
                h(".SplitLayout").forEach(Vc)
            }
            ,
            Wc.initSplitLayout = function(t) {
                var e = h(".FullSize__fixedChild.ObjectFit--cover", t);
                (function() {
                    var t;
                    return (t = Tt).doYouEvenFitObjects.apply(t, arguments)
                }
                )() && e.forEach(Oi)
            }
            ;
            var $c = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , qc = $c("footnote/index")
              , Yc = null
              , Gc = !1;
            function Kc() {
                return m("#editor-viewport") || document
            }
            function Xc(t) {
                var e = t.getBoundingClientRect();
                Yc.style.display = "block",
                Yc.innerHTML = decodeURIComponent(t.getAttribute("data-footnote"));
                var n = Yc.getBoundingClientRect()
                  , r = e.top < function() {
                    var t = m(".Theme-Header");
                    if (!t)
                        return 0;
                    var e = getComputedStyle(t).height
                      , n = parseInt(e, 10)
                      , r = m(".Navigation__itemList")
                      , i = r && window.innerWidth >= 1100 && r.childNodes.length ? 36 : 0
                      , o = m(".navbar-editor");
                    return (o ? parseInt(getComputedStyle(o).height, 10) : 0) + n + i
                }() + n.height
                  , i = r ? e.bottom + 5 : e.top - n.height - 5
                  , o = e.left + e.width / 2;
                o - n.width / 2 < 0 ? o = n.width / 2 + 2 : o + n.width / 2 > window.innerWidth && (o = window.innerWidth - n.width / 2 - 2),
                Yc.style.top = "".concat(i, "px"),
                Yc.style.left = "".concat(o, "px"),
                Yc.classList.remove("Theme-Position-Top"),
                Yc.classList.remove("Theme-Position-Bottom"),
                Yc.classList.add(r ? "Theme-Position-Top" : "Theme-Position-Bottom"),
                document.addEventListener("mouseover", Qc),
                document.addEventListener("touchstart", Qc),
                Kc().addEventListener("scroll", Zc),
                Gc = !0
            }
            function Jc() {
                Gc = !1,
                Yc.style.display = "",
                document.removeEventListener("mouseover", Qc),
                document.removeEventListener("touchstart", Qc),
                Kc().removeEventListener("scroll", Zc)
            }
            function Zc() {
                Jc()
            }
            function Qc(t) {
                var e = t.target;
                e.closest(".Theme-Layer-BodyText-Highlight") || e.closest(".Theme-Footnote") || Jc()
            }
            function tl(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            qc.initFootnotes = function() {
                !function() {
                    var t;
                    (t = qc).initFootnoteBalloon.apply(t, arguments)
                }(),
                h("[data-footnote]").forEach((function(t) {
                    return function() {
                        var t;
                        return (t = qc).initFootnote.apply(t, arguments)
                    }(t)
                }
                ))
            }
            ,
            qc.initFootnoteBalloon = function() {
                var t = m(".Theme-Story");
                !t || Yc && m(".Theme-Footnote", t) || ((Yc = document.createElement("div")).classList.add("Theme-Footnote"),
                Yc.setAttribute("role", "tooltip"),
                Yc.setAttribute("aria-live", "polite"),
                Yc.setAttribute("aria-atomic", "true"),
                t.appendChild(Yc))
            }
            ,
            qc.initFootnote = function(t) {
                t.addEventListener("mouseover", (function() {
                    return Xc(t)
                }
                )),
                t.addEventListener("touchstart", (function() {
                    return Xc(t)
                }
                )),
                t.addEventListener("focus", (function() {
                    setTimeout((function() {
                        return Xc(t)
                    }
                    ), 100)
                }
                )),
                t.addEventListener("keydown", (function(e) {
                    switch (e.key) {
                    case "Enter":
                        Gc ? Jc() : Xc(t);
                        break;
                    case "ArrowUp":
                        Gc && (e.preventDefault(),
                        Yc.firstElementChild.scrollBy(0, -20));
                        break;
                    case "ArrowDown":
                        Gc && (e.preventDefault(),
                        Yc.firstElementChild.scrollBy(0, 20))
                    }
                }
                ))
            }
            ;
            var el = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , nl = (el("media-gallery/Lightbox"),
            function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.element = e,
                    this.counter = e.querySelector("[aria-live]"),
                    this.element.parentElement.removeChild(this.element),
                    document.body.appendChild(this.element),
                    this.currentMediaIndex = 0,
                    this.media = h("[data-media-gallery-index]", this.element),
                    this.element.addEventListener("click", (function() {
                        n.close()
                    }
                    )),
                    h("img, .Videoplayer, .Theme-Caption", this.element).forEach((function(t) {
                        t.addEventListener("click", (function(t) {
                            return t.stopPropagation()
                        }
                        ))
                    }
                    ));
                    var r = m('[data-action="previous"]', this.element);
                    r && r.addEventListener("click", (function(t) {
                        t.stopPropagation(),
                        n.prev()
                    }
                    ));
                    var i = m('[data-action="next"]', this.element);
                    i && i.addEventListener("click", (function(t) {
                        t.stopPropagation(),
                        n.next()
                    }
                    )),
                    m('[data-action="close"]', this.element).addEventListener("click", (function(t) {
                        t.stopPropagation(),
                        n.close()
                    }
                    )),
                    this.element.addEventListener("touchmove", (function(t) {
                        return t.preventDefault()
                    }
                    ));
                    var o = -1;
                    h("img, .Videoplayer", this.element).forEach((function(t) {
                        t.addEventListener("touchstart", (function(t) {
                            o = t.touches[0].clientX
                        }
                        )),
                        t.addEventListener("touchend", (function(t) {
                            var e = t.changedTouches[0].clientX - o
                              , r = .1 * window.innerWidth;
                            e < -r ? n.next() : e > r && n.prev(),
                            o = -1
                        }
                        ))
                    }
                    ))
                }
                var e, n, r;
                return e = t,
                n = [{
                    key: "getFocusable",
                    value: function() {
                        var t = h("*[data-action]", this.element)
                          , e = m('[data-media-gallery-index="'.concat(this.currentMediaIndex, '"].active [tabindex]'), this.element);
                        return t.concat(e).filter((function(t) {
                            return t
                        }
                        ))
                    }
                }, {
                    key: "open",
                    value: function(e, n) {
                        var r;
                        null === (r = t.current) || void 0 === r || r.close(!1),
                        h("video", this.element).forEach((function(t) {
                            return t.setAttribute("playsinline", "true")
                        }
                        )),
                        h([".DeviceDetect--isEdge .MediaGallery--lightbox .plyr__progress--seek", ".DeviceDetect--isIE .MediaGallery--lightbox .plyr__progress--seek"].join(",")).forEach((function(t) {
                            t.style.setProperty("width", "0"),
                            setTimeout((function() {
                                return t.style.removeProperty("width")
                            }
                            ), 100)
                        }
                        )),
                        this.goToIndex(e),
                        this.element.classList.add("MediaGallery--lightbox--open"),
                        t.current = this,
                        document.body.classList.add("Body--hasLightbox"),
                        this.getFocusable()[1].focus(),
                        this.onClose = n
                    }
                }, {
                    key: "close",
                    value: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.element.classList.remove("MediaGallery--lightbox--open"),
                        document.body.classList.remove("Body--hasLightbox"),
                        h("video", this.element).forEach((function(t) {
                            return t.pause()
                        }
                        )),
                        e && "function" == typeof this.onClose && this.onClose(),
                        t.current = null
                    }
                }, {
                    key: "prev",
                    value: function() {
                        var t = 0 === this.currentMediaIndex ? this.media.length - 1 : this.currentMediaIndex - 1;
                        this.goToIndex(t)
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this.currentMediaIndex === this.media.length - 1 ? 0 : this.currentMediaIndex + 1;
                        this.goToIndex(t)
                    }
                }, {
                    key: "goToIndex",
                    value: function(t) {
                        this.media[this.currentMediaIndex].classList.remove("active"),
                        h("video", this.element).forEach((function(t) {
                            return t.pause()
                        }
                        )),
                        this.currentMediaIndex = t,
                        m('[data-media-gallery-index="'.concat(this.currentMediaIndex, '"]'), this.element).classList.add("active"),
                        this.counter.innerText = "Item ".concat(t + 1, " of ").concat(this.media.length)
                    }
                }],
                n && tl(e.prototype, n),
                r && tl(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }())
              , rl = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , il = rl("media-gallery/index");
            function ol(t) {
                if (nl.current && bt.getHeight() !== screen.height)
                    switch (t.code) {
                    case "Tab":
                        var e = nl.current.getFocusable()
                          , n = e[0]
                          , r = e[e.length - 1];
                        !e.includes(document.activeElement) || !t.shiftKey && document.activeElement === r ? (t.preventDefault(),
                        t.stopPropagation(),
                        n.focus()) : t.shiftKey && document.activeElement === n && (t.preventDefault(),
                        t.stopPropagation(),
                        r.focus());
                        break;
                    case "Enter":
                        document.activeElement.className.includes("plyr") && (t.preventDefault(),
                        t.stopPropagation(),
                        document.activeElement.querySelector('[data-plyr="fullscreen"]').click());
                        break;
                    case "ArrowRight":
                        t.preventDefault(),
                        t.stopPropagation(),
                        document.activeElement.className.includes("plyr") || nl.current.next();
                        break;
                    case "ArrowLeft":
                        t.preventDefault(),
                        t.stopPropagation(),
                        document.activeElement.className.includes("plyr") || nl.current.prev();
                        break;
                    case "Escape":
                        t.preventDefault(),
                        t.stopPropagation(),
                        nl.current.close()
                    }
            }
            il.initMediaGalleries = function() {
                var t = {};
                function e(e, n) {
                    var r = parseInt(n.getAttribute("data-cell-index"), 10);
                    h("[data-media-gallery] video").forEach((function(t) {
                        return t.pause()
                    }
                    )),
                    t[e].open(r, (function() {
                        h("[data-media-gallery] video").forEach((function(t) {
                            st().measure((function() {
                                var e = t.getBoundingClientRect();
                                e.top < bt.getHeight() && e.bottom > 0 && t.play()
                            }
                            ))
                        }
                        )),
                        n.focus()
                    }
                    ))
                }
                h("[data-media-gallery-lightbox]").forEach((function(e) {
                    var n = e.getAttribute("data-media-gallery-lightbox");
                    t[n] = new nl(e)
                }
                )),
                h("[data-media-gallery]").forEach((function(t) {
                    var n = t.getAttribute("data-media-gallery");
                    h("[data-cell-index]", t).forEach((function(t) {
                        t.addEventListener("click", (function() {
                            return e(n, t)
                        }
                        )),
                        t.addEventListener("keydown", (function(r) {
                            nl.current || "Enter" === r.code && (r.preventDefault(),
                            r.stopPropagation(),
                            e(n, t))
                        }
                        ))
                    }
                    ))
                }
                )),
                window.removeEventListener("keydown", ol),
                window.addEventListener("keydown", ol)
            }
            ;
            var al = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , sl = al("scrollpoints/utils");
            function ul() {
                var t;
                return (t = sl).round.apply(t, arguments)
            }
            sl.round = function t(e) {
                return "number" == typeof e ? Math.round(e) : {
                    x: t(e.x),
                    y: t(e.y),
                    z: e.z
                }
            }
            ,
            sl.distanceBetween = function(t, e) {
                return Math.abs(Math.hypot(t.x - e.x, t.y - e.y))
            }
            ;
            var cl = null;
            function ll() {
                var t;
                return (t = sl).getStyle.apply(t, arguments)
            }
            function fl(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            sl.getStyle = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (null === cl || t) {
                    cl = {};
                    var e = document.createElement("div");
                    e.style.setProperty("display", "none"),
                    document.body.appendChild(e),
                    e.className = "Theme-Scrollpoints";
                    var n = window.getComputedStyle(e);
                    cl.background = n.backgroundColor,
                    cl.backgroundOpacity = parseFloat(n.getPropertyValue("opacity")),
                    e.className = "Theme-Scrollpoints-Marker",
                    n = window.getComputedStyle(e),
                    cl.markerSize = parseInt(n.getPropertyValue("width"), 10),
                    cl.markerLineColor = n.getPropertyValue("border-color"),
                    cl.markerLineWidth = parseInt(n.getPropertyValue("border-width"), 10),
                    e.className = "Theme-Scrollpoints-Highlight",
                    n = window.getComputedStyle(e),
                    cl.lineWidth = parseInt(n.getPropertyValue("border-width"), 10),
                    cl.lineDash = n.getPropertyValue("border-style"),
                    cl.lineColor = n.getPropertyValue("border-color"),
                    cl.transitionDuration = parseFloat(n.getPropertyValue("transition-duration")) || .5,
                    cl.noHighlightsBehaviour = "cover" === n.getPropertyValue("background-size") ? "cover" : "contain",
                    window.matchMedia && window.matchMedia("(prefers-reduced-motion)").matches && (cl.transitionDuration = 0),
                    window.Cypress && (cl.transitionDuration = 0)
                }
                return cl
            }
            ,
            sl.blur = function(t, e) {
                if (!(e <= 0)) {
                    for (var n, r, i, o, a = t.canvas, s = a.height, u = a.width, c = t.getImageData(0, 0, u, s), l = c.data, f = u - 1, d = s - 1, p = e + 1, h = [1, 57, 41, 21, 203, 34, 97, 73, 227, 91, 149, 62, 105, 45, 39, 137, 241, 107, 3, 173, 39, 71, 65, 238, 219, 101, 187, 87, 81, 151, 141, 133, 249, 117, 221, 209, 197, 187, 177, 169, 5, 153, 73, 139, 133, 127, 243, 233, 223, 107, 103, 99, 191, 23, 177, 171, 165, 159, 77, 149, 9, 139, 135, 131, 253, 245, 119, 231, 224, 109, 211, 103, 25, 195, 189, 23, 45, 175, 171, 83, 81, 79, 155, 151, 147, 9, 141, 137, 67, 131, 129, 251, 123, 30, 235, 115, 113, 221, 217, 53, 13, 51, 50, 49, 193, 189, 185, 91, 179, 175, 43, 169, 83, 163, 5, 79, 155, 19, 75, 147, 145, 143, 35, 69, 17, 67, 33, 65, 255, 251, 247, 243, 239, 59, 29, 229, 113, 111, 219, 27, 213, 105, 207, 51, 201, 199, 49, 193, 191, 47, 93, 183, 181, 179, 11, 87, 43, 85, 167, 165, 163, 161, 159, 157, 155, 77, 19, 75, 37, 73, 145, 143, 141, 35, 138, 137, 135, 67, 33, 131, 129, 255, 63, 250, 247, 61, 121, 239, 237, 117, 29, 229, 227, 225, 111, 55, 109, 216, 213, 211, 209, 207, 205, 203, 201, 199, 197, 195, 193, 48, 190, 47, 93, 185, 183, 181, 179, 178, 176, 175, 173, 171, 85, 21, 167, 165, 41, 163, 161, 5, 79, 157, 78, 154, 153, 19, 75, 149, 74, 147, 73, 144, 143, 71, 141, 140, 139, 137, 17, 135, 134, 133, 66, 131, 65, 129, 1][e], m = [0, 9, 10, 10, 14, 12, 14, 14, 16, 15, 16, 15, 16, 15, 15, 17, 18, 17, 12, 18, 16, 17, 17, 19, 19, 18, 19, 18, 18, 19, 19, 19, 20, 19, 20, 20, 20, 20, 20, 20, 15, 20, 19, 20, 20, 20, 21, 21, 21, 20, 20, 20, 21, 18, 21, 21, 21, 21, 20, 21, 17, 21, 21, 21, 22, 22, 21, 22, 22, 21, 22, 21, 19, 22, 22, 19, 20, 22, 22, 21, 21, 21, 22, 22, 22, 18, 22, 22, 21, 22, 22, 23, 22, 20, 23, 22, 22, 23, 23, 21, 19, 21, 21, 21, 23, 23, 23, 22, 23, 23, 21, 23, 22, 23, 18, 22, 23, 20, 22, 23, 23, 23, 21, 22, 20, 22, 21, 22, 24, 24, 24, 24, 24, 22, 21, 24, 23, 23, 24, 21, 24, 23, 24, 22, 24, 24, 22, 24, 24, 22, 23, 24, 24, 24, 20, 23, 22, 23, 24, 24, 24, 24, 24, 24, 24, 23, 21, 23, 22, 23, 24, 24, 24, 22, 24, 24, 24, 23, 22, 24, 24, 25, 23, 25, 25, 23, 24, 25, 25, 24, 22, 25, 25, 25, 24, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 23, 25, 23, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 24, 22, 25, 25, 23, 25, 25, 20, 24, 25, 24, 25, 25, 22, 24, 25, 24, 25, 24, 25, 25, 24, 25, 25, 25, 25, 22, 25, 25, 25, 24, 25, 24, 25, 18][e], y = [], g = [], v = [], b = [], w = [], x = [], E = 3; E-- > 0; ) {
                        for (var S = 0, T = 0, k = 0; k < s; k++) {
                            for (var O = l[S] * p, _ = l[S + 1] * p, A = l[S + 2] * p, P = l[S + 3] * p, I = 1; I <= e; I++)
                                n = S + ((I > f ? f : I) << 2),
                                O += l[n++],
                                _ += l[n++],
                                A += l[n++],
                                P += l[n];
                            for (var C = 0; C < u; C++)
                                y[T] = O,
                                g[T] = _,
                                v[T] = A,
                                b[T] = P,
                                0 === k && (w[C] = ((n = C + p) < f ? n : f) << 2,
                                x[C] = (n = C - e) > 0 ? n << 2 : 0),
                                r = S + w[C],
                                i = S + x[C],
                                O += l[r++] - l[i++],
                                _ += l[r++] - l[i++],
                                A += l[r++] - l[i++],
                                P += l[r] - l[i],
                                T++;
                            S += u << 2
                        }
                        for (var j = 0; j < u; j++) {
                            for (var L = j, N = y[L] * p, R = g[L] * p, M = v[L] * p, F = b[L] * p, D = 1; D <= e; D++)
                                N += y[L += D > d ? 0 : u],
                                R += g[L],
                                M += v[L],
                                F += b[L];
                            T = j << 2;
                            for (var B = 0; B < s; B++)
                                l[T + 3] = o = F * h >>> m,
                                o > 0 ? (o = 255 / o,
                                l[T] = (N * h >>> m) * o,
                                l[T + 1] = (R * h >>> m) * o,
                                l[T + 2] = (M * h >>> m) * o) : l[T] = l[T + 1] = l[T + 2] = 0,
                                0 === j && (w[B] = ((n = B + p) < d ? n : d) * u,
                                x[B] = (n = B - e) > 0 ? n * u : 0),
                                r = j + w[B],
                                i = j + x[B],
                                N += y[r] - y[i],
                                R += g[r] - g[i],
                                M += v[r] - v[i],
                                F += b[r] - b[i],
                                T += u << 2
                        }
                    }
                    t.putImageData(c, 0, 0)
                }
            }
            ;
            var dl = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , pl = (dl("scrollpoints/Tween"),
            function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.onTick = e
                }
                var e, n, r;
                return e = t,
                n = [{
                    key: "start",
                    value: function(t, e, n, r) {
                        this.from = ul(t),
                        this.to = ul(e),
                        this.duration = n,
                        this.bounce = r,
                        isNaN(t.x) || isNaN(t.y) || isNaN(t.z) || isNaN(e.x) || isNaN(e.y) || isNaN(e.z) || (this.secondsRemaining = this.duration,
                        this.lastTickAt = (new Date).getTime(),
                        this.tick = this.tick.bind(this),
                        this.tick())
                    }
                }, {
                    key: "tick",
                    value: function() {
                        if (0 === this.duration)
                            this.onTick({
                                x: this.to.x,
                                y: this.to.y,
                                z: this.to.z
                            });
                        else {
                            var t = (new Date).getTime()
                              , e = (t - this.lastTickAt) / 1e3;
                            if (this.lastTickAt = t,
                            this.secondsRemaining > 0) {
                                this.secondsRemaining = this.secondsRemaining - e;
                                var n = 1 - Math.max(0, this.secondsRemaining) / this.duration
                                  , r = hl(n)
                                  , i = ml(n) * this.bounce;
                                this.onTick({
                                    x: ul(this.from.x + (this.to.x - this.from.x) * r),
                                    y: ul(this.from.y + (this.to.y - this.from.y) * r),
                                    z: this.from.z + (this.to.z - this.from.z) * hl(n) - i
                                }),
                                requestAnimationFrame(this.tick)
                            }
                        }
                    }
                }],
                n && fl(e.prototype, n),
                r && fl(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }())
              , hl = function(t) {
                return 1 - (1 - t) * (1 - t)
            }
              , ml = function(t) {
                return 1 - 4 * t * t + 4 * t - 1
            };
            function yl(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function gl(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? yl(Object(n), !0).forEach((function(e) {
                        vl(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yl(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function vl(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            function bl(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            var wl = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , xl = (wl("scrollpoints/Camera"),
            function() {
                function t(e, n, r, i) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.canvasWidth = 0,
                    this.canvasHeight = 0,
                    this.x = 0,
                    this.y = 0,
                    this.zoom = 1,
                    this.noHighlightsBehaviour = "contain",
                    this.maxX = 0,
                    this.maxY = 0,
                    this.canvas = e,
                    this.offscrenCanvas = document.createElement("canvas"),
                    this.ctx = this.offscrenCanvas.getContext("2d", {
                        alpha: !1
                    }),
                    this.ctx.imageSmoothingEnabled = !1,
                    this.finalCtx = this.canvas.getContext("2d", {
                        alpha: !1
                    }),
                    this.image = n,
                    this.highlights = [],
                    this.backgroundColor = r,
                    this.backgroundOpacity = i,
                    this.bias = "none",
                    this.x = 0,
                    this.y = 0,
                    this.zoom = 1,
                    this.maxX = 0,
                    this.maxY = 0,
                    this.tween = new pl(this.onTweenTick.bind(this)),
                    this._render = this._render.bind(this),
                    this._isRendering = !1,
                    this.adjustSize()
                }
                var e, n, r;
                return e = t,
                n = [{
                    key: "setInstantSrc",
                    value: function(t) {
                        var e = this;
                        if (t !== this.backgroundImageSrc) {
                            this.backgroundImageSrc = t,
                            this.isBackgroundImageReady = !1,
                            this.backgroundImage || (this.backgroundImage = document.createElement("canvas"));
                            var n = document.createElement("img");
                            n.crossOrigin = "use-credentials",
                            n.addEventListener("load", (function() {
                                if (!(n.width <= 0)) {
                                    e.backgroundImage.width = 300,
                                    e.backgroundImage.height = 300;
                                    var t = e.backgroundImage.getContext("2d", {
                                        alpha: !1
                                    });
                                    t.drawImage(n, 0, 0, e.backgroundImage.width, e.backgroundImage.height),
                                    function() {
                                        var t;
                                        (t = sl).blur.apply(t, arguments)
                                    }(t, 10),
                                    e.isBackgroundImageReady = !0,
                                    e.render()
                                }
                            }
                            )),
                            n.src = t
                        }
                    }
                }, {
                    key: "adjustSize",
                    value: function() {
                        var t = bt.getWidth()
                          , e = window.innerHeight
                          , n = 1;
                        "number" == typeof window.devicePixelRatio && (n = Math.min(2, window.devicePixelRatio)),
                        this.canvas.width = t * n,
                        this.canvas.height = e * n,
                        this.canvas.style.width = "".concat(t, "px"),
                        this.canvas.style.height = "".concat(e, "px"),
                        this.canvasWidth = t * n,
                        this.canvasHeight = e * n,
                        this.offscrenCanvas.width = t * n,
                        this.offscrenCanvas.height = e * n,
                        this.render()
                    }
                }, {
                    key: "render",
                    value: function() {
                        requestAnimationFrame(this._render)
                    }
                }, {
                    key: "_render",
                    value: function() {
                        var t = this;
                        if (!this._isRendering) {
                            this._isRendering = !0;
                            var e = this.ctx
                              , n = ll()
                              , r = 1 / this.zoom;
                            e.fillStyle = "black",
                            e.fillRect(0, 0, this.canvasWidth, this.canvasHeight),
                            this.isBackgroundImageReady && this.backgroundImage.width > 0 && this.backgroundOpacity < 1 && (e.imageSmoothingEnabled = !0,
                            e.drawImage(this.backgroundImage, 0, 0, this.backgroundImage.width, this.backgroundImage.height, 0, 0, this.canvasWidth, this.canvasHeight),
                            e.imageSmoothingEnabled = !1),
                            e.fillStyle = this.backgroundColor,
                            e.globalAlpha = this.backgroundOpacity,
                            e.fillRect(0, 0, this.canvasWidth, this.canvasHeight),
                            e.globalAlpha = 1,
                            e.transform(this.zoom, 0, 0, this.zoom, ul(this.canvasWidth / 2), ul(this.canvasHeight / 2)),
                            this.image.width > 0 && e.drawImage(this.image, -this.x, -this.y),
                            this.highlights.forEach((function(i) {
                                var o;
                                if (i.isHidden || (e.strokeStyle = i.color ? i.color : n.lineColor,
                                e.lineWidth = ul(n.lineWidth * r),
                                e.setLineDash([]),
                                e.strokeRect(-t.x + i.x, -t.y + i.y, i.width, i.height)),
                                i.hasDot) {
                                    var a = new Path2D;
                                    a.arc(-t.x + i.dotX, -t.y + i.dotY, ul(n.markerSize * r), 0, 2 * Math.PI),
                                    e.fillStyle = null !== (o = i.dotColor) && void 0 !== o ? o : n.lineColor,
                                    e.fill(a),
                                    e.setLineDash([]),
                                    e.strokeStyle = n.markerLineColor || "black",
                                    e.lineWidth = ul((n.markerLineWidth || 1) * r),
                                    e.stroke(a)
                                }
                            }
                            )),
                            e.setTransform(1, 0, 0, 1, 0, 0),
                            this.finalCtx.drawImage(this.offscrenCanvas, 0, 0),
                            this._isRendering = !1
                        }
                    }
                }, {
                    key: "setBounds",
                    value: function(t, e) {
                        this.maxX = t,
                        this.maxY = e
                    }
                }, {
                    key: "setHighlights",
                    value: function(t, e) {
                        var n = this;
                        this.noHighlightsBehaviour = ll().noHighlightsBehaviour;
                        var r = this.getDimensions();
                        this.highlights = [];
                        var i = this.getDimensions()
                          , o = this.getAutoZoom(i.width, i.height)
                          , a = ll().transitionDuration
                          , s = 0;
                        if (t.length > 0) {
                            this.highlights = t.map((function(t) {
                                return gl(gl({}, t), {}, {
                                    x: ul(t.x / 100 * n.maxX),
                                    y: ul(t.y / 100 * n.maxY),
                                    width: ul(t.width / 100 * n.maxX),
                                    height: ul(t.height / 100 * n.maxY),
                                    dotX: ul(t.dotX / 100 * n.maxX),
                                    dotY: ul(t.dotY / 100 * n.maxY)
                                })
                            }
                            )),
                            i = this.getDimensions(),
                            o = this.getAutoZoom(i.width, i.height);
                            var u = 100 * function() {
                                var t;
                                return (t = sl).distanceBetween.apply(t, arguments)
                            }(r, i) / this.maxX
                              , c = this.getFuzzyDurationAndZoomBounce(u, ll().transitionDuration, o);
                            a = c.duration,
                            s = c.bounce
                        }
                        this.tween.start({
                            x: this.x,
                            y: this.y,
                            z: this.zoom
                        }, {
                            x: i.x + i.width / 2,
                            y: i.y + i.height / 2,
                            z: o
                        }, e === this.key ? 0 : a, s),
                        this.key = e
                    }
                }, {
                    key: "getFuzzyDurationAndZoomBounce",
                    value: function(t, e, n) {
                        var r = e
                          , i = 0;
                        return t > 40 && (r *= 1.2,
                        this.zoom > 1.2 && n > 1.2 && (i = .3)),
                        t > 60 && (r *= 1.3,
                        this.zoom > 1.2 && n > 1.2 && (i = .7)),
                        t > 80 && (r *= 1.4),
                        {
                            duration: r,
                            bounce: i
                        }
                    }
                }, {
                    key: "getDimensions",
                    value: function() {
                        var t = this.highlights.reduce((function(t, e) {
                            var n = gl({}, t);
                            return (-1 === n.x || e.x < n.x) && (n.width = n.x + n.width - e.x,
                            n.x = e.x),
                            (-1 === n.y || e.y < n.y) && (n.height = n.y + n.height - e.y,
                            n.y = e.y),
                            e.x + e.width > n.x + n.width && (n.width = e.x - n.x + e.width),
                            e.y + e.height > n.y + n.height && (n.height = e.y - n.y + e.height),
                            n
                        }
                        ), {
                            x: -1,
                            y: -1,
                            width: 0,
                            height: 0
                        });
                        return 0 === this.highlights.length && (t.x = 0,
                        t.y = 0,
                        t.width = this.maxX,
                        t.height = this.maxY),
                        this.applyBias(t),
                        t
                    }
                }, {
                    key: "applyBias",
                    value: function(t) {
                        if (!(bt.getWidth() < 620)) {
                            var e = t.width > t.height;
                            "left" === this.bias ? t.width *= e ? 2.1 : 2.4 : "right" === this.bias && (t.width *= e ? 2.1 : 2.4,
                            t.x -= t.width / (e ? 1.9 : 1.7))
                        }
                    }
                }, {
                    key: "getAutoZoom",
                    value: function(t, e) {
                        void 0 === t && (t = this.maxX),
                        void 0 === e && (e = this.maxY);
                        var n = "contain" === this.noHighlightsBehaviour || this.highlights.length > 0;
                        n && (t *= 1.1,
                        e *= 1.1);
                        var r = this.canvasWidth / t
                          , i = this.canvasHeight / e
                          , o = n ? Math.min(i, r) : Math.max(i, r);
                        return Di()(o, .1, 3)
                    }
                }, {
                    key: "setZoom",
                    value: function(t) {
                        this.zoom = void 0 === t ? this.getAutoZoom() : t,
                        this.zoom = Di()(this.zoom, .1, 3),
                        this.setCenter(this.x, this.y)
                    }
                }, {
                    key: "setCenter",
                    value: function(t, e) {
                        void 0 !== t ? (this.x = ul(t),
                        this.y = ul(e)) : (this.x = ul(this.maxX / 2),
                        this.y = ul(this.maxY / 2))
                    }
                }, {
                    key: "onTweenTick",
                    value: function(t) {
                        isNaN(t.x) || isNaN(t.y) || isNaN(t.z) || (this.setCenter(t.x, t.y),
                        this.setZoom(t.z),
                        this.render())
                    }
                }, {
                    key: "hasHighlightAtScreenPosition",
                    value: function(t) {
                        var e = this
                          , n = function(t) {
                            return (t - e.x) * e.zoom + e.canvasWidth / 2
                        }
                          , r = function(t) {
                            return (t - e.y) * e.zoom + e.canvasHeight / 2
                        };
                        return this.highlights.reduce((function(e, i) {
                            return !!e || !(t.x < n(i.x) || t.x > n(i.x + i.width)) && !(t.y < r(i.y) || t.y > r(i.y + i.height))
                        }
                        ), !1)
                    }
                }],
                n && bl(e.prototype, n),
                r && bl(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
            }())
              , El = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Sl = El("scrollpoints/index");
            function Tl(t) {
                var e, n = .9 * window.innerHeight, r = t.querySelector("[data-media]"), i = h("[data-box]", t), o = t.getBoundingClientRect();
                return o.bottom < bt.getTop() + bt.getHeight() ? (e = i[i.length - 1],
                r.setAttribute("data-attach", "after")) : o.top < bt.getTop() ? (e = i.reduce((function(t, e) {
                    return e.getBoundingClientRect().top < n ? e : t
                }
                ), i[0]),
                r.setAttribute("data-attach", "during")) : (e = i[0],
                r.setAttribute("data-attach", "before")),
                e
            }
            function kl(t, e) {
                switch (t.getAttribute("data-align")) {
                case "left":
                    e.bias = "right";
                    break;
                case "right":
                    e.bias = "left";
                    break;
                default:
                    e.bias = "none"
                }
            }
            function Ol(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function _l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ol(Object(n), !0).forEach((function(e) {
                        Al(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ol(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function Al(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            Sl.initScrollpointsSections = function() {
                h("[data-scrollpoints]").forEach((function(t) {
                    return function() {
                        var t;
                        return (t = Sl).initScrollpointsSection.apply(t, arguments)
                    }(t)
                }
                ))
            }
            ,
            Sl.initScrollpointsSection = function(t) {
                var e, n, r = t.querySelector("[data-media]"), i = document.createElement("canvas");
                r.appendChild(i);
                var o = new Image;
                o.addEventListener("load", (function() {
                    a.setInstantSrc(r.getAttribute("data-instant")),
                    a.setBounds(o.naturalWidth, o.naturalHeight),
                    a.adjustSize(),
                    u(!0)
                }
                )),
                o.src = r.getAttribute("data-media");
                var a = new xl(i,o,r.getAttribute("data-color"),parseFloat(r.getAttribute("data-opacity") || "10") / 100);
                !function(t, e, n) {
                    if (!document.getElementById("editor-viewport"))
                        return;
                    var r = t.getAttribute("data-section-id");
                    e.addEventListener("mousemove", (function(t) {
                        n.hasHighlightAtScreenPosition({
                            x: t.offsetX,
                            y: t.offsetY
                        }) ? document.body.style.setProperty("cursor", "zoom-in") : document.body.style.setProperty("cursor", "auto")
                    }
                    ), {
                        passive: !0
                    }),
                    e.addEventListener("click", (function(e) {
                        if (n.hasHighlightAtScreenPosition({
                            x: e.offsetX,
                            y: e.offsetY
                        })) {
                            var i = Tl(t);
                            window.dispatchEvent(new CustomEvent("scrollpoint:manage-highlights",{
                                detail: {
                                    sectionId: r,
                                    activeItemId: i.getAttribute("data-item-id")
                                }
                            }))
                        }
                    }
                    ))
                }(t, i, a);
                var s = h("[data-box]", t);
                function u() {
                    var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if ((n = Tl(t)) !== e || !0 === r) {
                        if (e = n,
                        !n)
                            return;
                        kl(n, a);
                        var i = n.getAttribute("data-item-id");
                        if (i && window.dispatchEvent(new CustomEvent("scrollpoint:active-point-changed",{
                            detail: {
                                itemId: i
                            }
                        })),
                        "" === n.getAttribute("data-box"))
                            a.setHighlights([], i);
                        else {
                            var o = JSON.parse(atob(n.getAttribute("data-box"))).map((function(t) {
                                return {
                                    x: parseFloat(t.x),
                                    y: parseFloat(t.y),
                                    width: parseFloat(t.width),
                                    height: parseFloat(t.height),
                                    isHidden: !!t.isHidden,
                                    color: t.color || "red",
                                    hasDot: !!t.hasDot,
                                    dotX: parseFloat(t.dotX),
                                    dotY: parseFloat(t.dotY),
                                    dotColor: t.dotColor
                                }
                            }
                            ));
                            a.setHighlights(o, i)
                        }
                    }
                }
                return a.key = s[0].getAttribute("data-item-id"),
                (document.getElementById("editor-viewport") || document).addEventListener("scroll", (function() {
                    u()
                }
                ), {
                    passive: !0
                }),
                window.addEventListener("resize", (function() {
                    a.adjustSize(),
                    u(!0)
                }
                ), {
                    passive: !0
                }),
                function() {
                    ll(!0);
                    var e = r.getAttribute("data-media");
                    o.src !== e && (o.src = e),
                    a.setInstantSrc(r.getAttribute("data-instant")),
                    s = h("[data-box]", t),
                    a.backgroundColor = r.getAttribute("data-color"),
                    a.backgroundOpacity = parseFloat(r.getAttribute("data-opacity")) / 100,
                    u(!0)
                }
            }
            ;
            var Pl, Il = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh"), Cl = Il("background-media/index");
            !function(t) {
                t[t.BackgroundFilters = 0] = "BackgroundFilters",
                t[t.BackgroundFadeIn = 1] = "BackgroundFadeIn",
                t[t.BackgroundFadeOut = 2] = "BackgroundFadeOut",
                t[t.TextBlurIn = 3] = "TextBlurIn",
                t[t.TextBlurOut = 4] = "TextBlurOut",
                t[t.TextFadeIn = 5] = "TextFadeIn",
                t[t.TextFadeOut = 6] = "TextFadeOut"
            }(Pl || (Pl = {}));
            var jl = [];
            function Ll() {
                jl.forEach((function(t) {
                    return t()
                }
                ))
            }
            function Nl(t) {
                var e = t.getBoundingClientRect()
                  , n = e.top
                  , r = e.height
                  , i = Math.max(bt.getHeight(), r);
                return 1 - (i + n) / (2 * i)
            }
            function Rl(t, e, n) {
                var r = 0
                  , i = 0;
                switch (n) {
                case Pl.BackgroundFilters:
                    e < .8 * bt.getHeight() ? (r = .25,
                    i = .15) : e > 1.2 * bt.getHeight() ? (r = .45,
                    i = .2) : (r = .4,
                    i = .2);
                    break;
                case Pl.BackgroundFadeIn:
                    r = .1,
                    i = .4;
                    break;
                case Pl.BackgroundFadeOut:
                    r = .5,
                    i = .3;
                    break;
                case Pl.TextBlurIn:
                case Pl.TextFadeIn:
                    e < .8 * bt.getHeight() ? (r = .05,
                    i = .1) : e > 1.2 * bt.getHeight() ? (r = .35,
                    i = .1) : (r = .2,
                    i = .2);
                    break;
                case Pl.TextFadeOut:
                case Pl.TextBlurOut:
                    e < .8 * bt.getHeight() ? (r = .4,
                    i = .1) : e > 1.2 * bt.getHeight() ? (r = .6,
                    i = .1) : (r = .5,
                    i = .2)
                }
                return function(t, e, n) {
                    return t <= e ? 0 : t <= e + n ? 1 / n * (t - e) : 1
                }(t, r, i)
            }
            Cl.initBackgroundMedia = function() {
                var t, e = !!document.querySelector("#editor-viewport"), n = null !== (t = document.querySelector("#editor-viewport")) && void 0 !== t ? t : window;
                n.removeEventListener("scroll", Ll),
                n.addEventListener("scroll", Ll, {
                    passive: !0
                }),
                jl = [],
                st().mutate((function() {
                    [].slice.call(document.querySelectorAll("[data-effects]")).forEach((function(t) {
                        var n = function(t) {
                            var e = {
                                textFade: "none",
                                textZoom: "none",
                                textBlur: "none",
                                backgroundFade: "none",
                                backgroundZoom: "none",
                                backgroundBlur: "none",
                                backgroundGrayscale: "none",
                                hasEffects: !1
                            };
                            try {
                                return _l(_l({}, e), JSON.parse(window.atob(t.getAttribute("data-effects"))))
                            } catch (t) {
                                return e
                            }
                        }(t);
                        if (n.hasEffects) {
                            var r = [].slice.call(t.querySelectorAll(e ? ".Theme-Layer-background-viewport" : ".Theme-BackgroundMedia"))
                              , i = [].slice.call(t.querySelectorAll(".Theme-Layer-TextBlock-Container"));
                            r.forEach((function(t) {
                                t.style.setProperty("overflow", "hidden");
                                var r = [].slice.call(t.querySelectorAll("video"));
                                0 === r.length && (r = [].slice.call(t.querySelectorAll("img")).filter((function(t) {
                                    return -1 === t.className.indexOf("InstantImage__img")
                                }
                                ))),
                                [].slice.call(t.querySelectorAll("picture, ".concat(e ? ".BackgroundVideo__sticky" : "video"))).forEach((function(t, e) {
                                    0 !== e && (t.style.setProperty("position", "absolute"),
                                    t.style.setProperty("top", "0"))
                                }
                                )),
                                r.forEach((function(t, e) {
                                    t.style.setProperty("transition", "none");
                                    var r = [];
                                    0 === e ? ("out" === n.backgroundBlur && r.push("blur(10px)"),
                                    "out" === n.backgroundGrayscale && r.push("grayscale(100%)")) : ("in" === n.backgroundBlur && r.push("blur(10px)"),
                                    "in" === n.backgroundGrayscale && r.push("grayscale(100%)")),
                                    t.style.setProperty("filter", r.join(" ")),
                                    t.style.setProperty("transform", "scale(1)"),
                                    t.style.setProperty("opacity", "1")
                                }
                                ))
                            }
                            )),
                            i.forEach((function(t) {
                                t.parentElement.parentElement.style.setProperty("overflow", "hidden"),
                                t.parentElement.style.setProperty("overflow", "visible"),
                                t.className.indexOf("Layout__flex--xleft") > -1 ? t.style.setProperty("transform-origin", "0% 0%") : t.className.indexOf("Layout__flex--xright") > -1 ? t.style.setProperty("transform-origin", "100% 0%") : t.style.removeProperty("transform-origin")
                            }
                            )),
                            o(),
                            jl.push(o)
                        }
                        function o() {
                            var o = Nl(t)
                              , a = t.getBoundingClientRect().height;
                            o <= 0 || (r.forEach((function(t) {
                                var e = Nl(t)
                                  , r = [].slice.call(t.querySelectorAll("video"));
                                0 === r.length && (r = [].slice.call(t.querySelectorAll("img")).filter((function(t) {
                                    return -1 === t.className.indexOf("InstantImage__img")
                                }
                                ))),
                                r.forEach((function(t, i) {
                                    if (1 === i && "currentTime"in t) {
                                        var o = t
                                          , s = r[0];
                                        Math.abs(o.currentTime - s.currentTime) >= .2 && (o.currentTime = s.currentTime)
                                    }
                                    "in" === n.backgroundZoom ? t.style.setProperty("transform", "scale(".concat(1 + .4 * e, ")")) : "out" === n.backgroundZoom && t.style.setProperty("transform", "scale(".concat(1.4 - .4 * e, ")"));
                                    var u = 1;
                                    1 === i && (u = 1 - Rl(e, a, Pl.BackgroundFilters),
                                    t.style.setProperty("opacity", "".concat(u))),
                                    "in" === n.backgroundFade ? t.style.setProperty("opacity", "".concat(u * Rl(e, a, Pl.BackgroundFadeIn))) : "out" === n.backgroundFade && t.style.setProperty("opacity", "".concat(u * (1 - Rl(e, a, Pl.BackgroundFadeOut))))
                                }
                                ))
                            }
                            )),
                            i.forEach((function(t) {
                                var r = o;
                                "in" === n.textZoom ? t.style.setProperty("transform", "scale(".concat(.8 + .4 * r, ")")) : "out" === n.textZoom && t.style.setProperty("transform", "scale(".concat(1.2 - .4 * r, ")"));
                                var i = [];
                                "in" === n.textBlur && i.push("blur(".concat((20 * (1 - Rl(r, a, Pl.TextBlurIn))).toFixed(2), "px)")),
                                "out" === n.textBlur && i.push("blur(".concat((20 * Rl(r, a, Pl.TextBlurOut)).toFixed(2), "px)"));
                                var s = 1;
                                "in" === n.textFade ? s *= Rl(r, a, Pl.TextFadeIn) : "out" === n.textFade && (s *= 1 - Rl(r, a, Pl.TextFadeOut)),
                                [].slice.call(t.querySelectorAll(e ? ".NodeContent" : ".Theme-Layer-TextBlock-Inner")).forEach((function(t) {
                                    t.style.setProperty("filter", i.join(" ")),
                                    t.style.setProperty("opacity", "".concat(s))
                                }
                                ))
                            }
                            )))
                        }
                    }
                    ))
                }
                ))
            }
            ;
            var Ml = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Fl = Ml("stock-media/unsplash");
            Fl.trackView = function(t, e) {
                var n = "https://views.unsplash.com/v?app_id=".concat(t, "&photo_id=").concat(e);
                fetch(n).catch((function(t) {
                    return console.log(t)
                }
                ))
            }
            ,
            Fl.initUnsplash = function() {
                h("[data-unsplash-ids]").forEach((function(t) {
                    var e = t.getAttribute("data-unsplash-ids");
                    !function() {
                        var t;
                        (t = Fl).trackView.apply(t, arguments)
                    }(t.getAttribute("data-unsplash-app"), e)
                }
                ))
            }
            ;
            var Dl = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh")
              , Bl = Dl("ms-smooth-scroll/index");
            function Hl(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100
                  , n = 10
                  , r = t / n
                  , i = setInterval((function() {
                    window.scrollTo(0, Math.round(window.pageYOffset + r)),
                    n > 0 ? n-- : clearInterval(i)
                }
                ), e / n)
            }
            Bl.disableSmoothScroll = function() {
                var t = Q()
                  , e = t.isIE
                  , n = t.isEdge;
                (e || n) && (window.addEventListener("mousewheel", (function(t) {
                    var e = t.wheelDelta
                      , n = t.wheelDeltaY;
                    t.preventDefault(),
                    Hl(1 - (n || e))
                }
                )),
                document.body.addEventListener("keydown", (function(t) {
                    switch (t.keyCode) {
                    case 33:
                        t.preventDefault(),
                        Hl(-.8 * window.innerHeight);
                        break;
                    case 34:
                        t.preventDefault(),
                        Hl(.8 * window.innerHeight);
                        break;
                    case 38:
                        t.preventDefault(),
                        Hl(-120);
                        break;
                    case 40:
                        t.preventDefault(),
                        Hl(120);
                        break;
                    default:
                        return
                    }
                }
                )))
            }
            ;
            var zl = function(t, e) {
                var n = function(n) {
                    return n in t[e].m || (t[e].m[n] = {}),
                    t[e].m[n]
                };
                return e in t || (t[e] = {
                    m: {},
                    module: n
                }),
                n
            }(window, "$sh");
            zl("story.entry");
            c().shim(),
            f().shim(),
            s().shim(),
            function() {
                var t;
                (t = z).initDisplay.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = G).initDeviceDetect.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = gt).initDisplayContainer.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = ot).initLayout.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = F).initLazyload.apply(t, arguments)
            }(),
            Pt(),
            function() {
                var t;
                (t = re).initStackedContent.apply(t, arguments)
            }(),
            Qt(),
            function() {
                var t;
                (t = fe).initOnVisible.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Cn).noop.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = An).initSticky.apply(t, arguments)
            }(),
            Hc(),
            function() {
                var t;
                (t = Fn).inTransitionIn.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Ee).initHideOffscreen.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = ze).initFooter.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Au).initNavItems.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Cr).noop.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Lr).initSoundCloudWidgets.apply(t, arguments)
            }(),
            Ai(),
            function() {
                var t;
                (t = Xs).init.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Er).initVideoPlayers.apply(t, arguments)
            }({
                body: document.body
            }),
            function() {
                var t;
                (t = yi).initBackgroundVideos.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = ju).initSocialShareButtons.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Jn).initAnalytics.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = hu).init.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = ac).initCardCanvases.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = yc).initBackgroundScrollmations.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = _c).initScrollymoly.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Wc).initSplitLayouts.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = il).initMediaGalleries.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = qc).initFootnotes.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Sl).initScrollpointsSections.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Cl).initBackgroundMedia.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Bl).disableSmoothScroll.apply(t, arguments)
            }(),
            function() {
                var t;
                (t = Fl).initUnsplash.apply(t, arguments)
            }()
        },
        7439: function() {
            var t, e, n;
            (t = window,
            n = function(n) {
                return n in t[e].m || (t[e].m[n] = {}),
                t[e].m[n]
            }
            ,
            (e = "$sh")in t || (t[e] = {
                m: {},
                module: n
            }),
            n)("core/globals");
            window.hasOwnProperty("Shorthand") || (window.Shorthand = {})
        },
        5548: function(t, e, n) {
            "use strict";
            var r = n(9513);
            function i() {
                var t = {}
                  , e = 0
                  , n = 0
                  , r = 0;
                return {
                    add: function(i, o) {
                        o || (o = i,
                        i = 0),
                        i > n ? n = i : i < r && (r = i),
                        t[i] || (t[i] = []),
                        t[i].push(o),
                        e++
                    },
                    process: function() {
                        for (var e = r; e <= n; e++)
                            for (var i = t[e], o = 0; o < i.length; o++) {
                                (0,
                                i[o])()
                            }
                    },
                    size: function() {
                        return e
                    }
                }
            }
            t.exports = function(t) {
                var e = (t = t || {}).reporter
                  , n = r.getOption(t, "async", !0)
                  , o = r.getOption(t, "auto", !0);
                o && !n && (e && e.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),
                n = !0);
                var a, s = i(), u = !1;
                function c() {
                    for (u = !0; s.size(); ) {
                        var t = s;
                        s = i(),
                        t.process()
                    }
                    u = !1
                }
                function l() {
                    var t;
                    t = c,
                    a = setTimeout(t, 0)
                }
                return {
                    add: function(t, e) {
                        !u && o && n && 0 === s.size() && l(),
                        s.add(t, e)
                    },
                    force: function(t) {
                        u || (void 0 === t && (t = n),
                        a && (clearTimeout(a),
                        a = null),
                        t ? l() : c())
                    }
                }
            }
        },
        9513: function(t) {
            "use strict";
            (t.exports = {}).getOption = function(t, e, n) {
                var r = t[e];
                if (null == r && void 0 !== n)
                    return n;
                return r
            }
        },
        7372: function(t, e, n) {
            "use strict";
            var r = n(5502)
              , i = n(5806)
              , o = i(r("String.prototype.indexOf"));
            t.exports = function(t, e) {
                var n = r(t, !!e);
                return "function" == typeof n && o(t, ".prototype.") > -1 ? i(n) : n
            }
        },
        5806: function(t, e, n) {
            "use strict";
            var r = n(4148)
              , i = n(5502)
              , o = i("%Function.prototype.apply%")
              , a = i("%Function.prototype.call%")
              , s = i("%Reflect.apply%", !0) || r.call(a, o)
              , u = i("%Object.getOwnPropertyDescriptor%", !0)
              , c = i("%Object.defineProperty%", !0)
              , l = i("%Math.max%");
            if (c)
                try {
                    c({}, "a", {
                        value: 1
                    })
                } catch (t) {
                    c = null
                }
            t.exports = function(t) {
                var e = s(r, a, arguments);
                if (u && c) {
                    var n = u(e, "length");
                    n.configurable && c(e, "length", {
                        value: 1 + l(0, t.length - (arguments.length - 1))
                    })
                }
                return e
            }
            ;
            var f = function() {
                return s(r, o, arguments)
            };
            c ? c(t.exports, "apply", {
                value: f
            }) : t.exports.apply = f
        },
        9268: function(t) {
            t.exports = function(t, e, n) {
                return e < n ? t < e ? e : t > n ? n : t : t < n ? n : t > e ? e : t
            }
        },
        1779: function(t, e) {
            var n;
            /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
            !function() {
                "use strict";
                var r = function() {
                    function t() {}
                    function e(t, e) {
                        for (var n = e.length, r = 0; r < n; ++r)
                            i(t, e[r])
                    }
                    t.prototype = Object.create(null);
                    var n = {}.hasOwnProperty;
                    var r = /\s+/;
                    function i(t, i) {
                        if (i) {
                            var o = typeof i;
                            "string" === o ? function(t, e) {
                                for (var n = e.split(r), i = n.length, o = 0; o < i; ++o)
                                    t[n[o]] = !0
                            }(t, i) : Array.isArray(i) ? e(t, i) : "object" === o ? function(t, e) {
                                if (e.toString === Object.prototype.toString)
                                    for (var r in e)
                                        n.call(e, r) && (t[r] = !!e[r]);
                                else
                                    t[e.toString()] = !0
                            }(t, i) : "number" === o && function(t, e) {
                                t[e] = !0
                            }(t, i)
                        }
                    }
                    return function() {
                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++)
                            r[i] = arguments[i];
                        var o = new t;
                        e(o, r);
                        var a = [];
                        for (var s in o)
                            o[s] && a.push(s);
                        return a.join(" ")
                    }
                }();
                t.exports ? (r.default = r,
                t.exports = r) : void 0 === (n = function() {
                    return r
                }
                .apply(e, [])) || (t.exports = n)
            }()
        },
        4159: function(t, e, n) {
            "use strict";
            var r = n(3650)
              , i = n(9211)
              , o = n(7886)
              , a = n(3633)
              , s = n(8234)
              , u = t.exports = function(t, e) {
                var n, i, u, c, l;
                return arguments.length < 2 || "string" != typeof t ? (c = e,
                e = t,
                t = null) : c = arguments[2],
                r(t) ? (n = s.call(t, "c"),
                i = s.call(t, "e"),
                u = s.call(t, "w")) : (n = u = !0,
                i = !1),
                l = {
                    value: e,
                    configurable: n,
                    enumerable: i,
                    writable: u
                },
                c ? o(a(c), l) : l
            }
            ;
            u.gs = function(t, e, n) {
                var u, c, l, f;
                return "string" != typeof t ? (l = n,
                n = e,
                e = t,
                t = null) : l = arguments[3],
                r(e) ? i(e) ? r(n) ? i(n) || (l = n,
                n = void 0) : n = void 0 : (l = e,
                e = n = void 0) : e = void 0,
                r(t) ? (u = s.call(t, "c"),
                c = s.call(t, "e")) : (u = !0,
                c = !1),
                f = {
                    get: e,
                    set: n,
                    configurable: u,
                    enumerable: c
                },
                l ? o(a(l), f) : f
            }
        },
        8327: function(t, e, n) {
            var r = Array.prototype.slice
              , i = n(5569)
              , o = n(5262)
              , a = t.exports = function(t, e, n) {
                return n || (n = {}),
                t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? n.strict ? t === e : t == e : function(t, e, n) {
                    var c, l;
                    if (s(t) || s(e))
                        return !1;
                    if (t.prototype !== e.prototype)
                        return !1;
                    if (o(t))
                        return !!o(e) && (t = r.call(t),
                        e = r.call(e),
                        a(t, e, n));
                    if (u(t)) {
                        if (!u(e))
                            return !1;
                        if (t.length !== e.length)
                            return !1;
                        for (c = 0; c < t.length; c++)
                            if (t[c] !== e[c])
                                return !1;
                        return !0
                    }
                    try {
                        var f = i(t)
                          , d = i(e)
                    } catch (t) {
                        return !1
                    }
                    if (f.length != d.length)
                        return !1;
                    for (f.sort(),
                    d.sort(),
                    c = f.length - 1; c >= 0; c--)
                        if (f[c] != d[c])
                            return !1;
                    for (c = f.length - 1; c >= 0; c--)
                        if (l = f[c],
                        !a(t[l], e[l], n))
                            return !1;
                    return typeof t == typeof e
                }(t, e, n))
            }
            ;
            function s(t) {
                return null == t
            }
            function u(t) {
                return !(!t || "object" != typeof t || "number" != typeof t.length) && ("function" == typeof t.copy && "function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0]))
            }
        },
        5262: function(t, e) {
            var n = "[object Arguments]" == function() {
                return Object.prototype.toString.call(arguments)
            }();
            function r(t) {
                return "[object Arguments]" == Object.prototype.toString.call(t)
            }
            function i(t) {
                return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
            }
            (e = t.exports = n ? r : i).supported = r,
            e.unsupported = i
        },
        5569: function(t, e) {
            function n(t) {
                var e = [];
                for (var n in t)
                    e.push(n);
                return e
            }
            (t.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
        },
        1476: function(t, e, n) {
            "use strict";
            var r = n(8315)
              , i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo")
              , o = Object.prototype.toString
              , a = Array.prototype.concat
              , s = Object.defineProperty
              , u = s && function() {
                var t = {};
                try {
                    for (var e in s(t, "x", {
                        enumerable: !1,
                        value: t
                    }),
                    t)
                        return !1;
                    return t.x === t
                } catch (t) {
                    return !1
                }
            }()
              , c = function(t, e, n, r) {
                var i;
                (!(e in t) || "function" == typeof (i = r) && "[object Function]" === o.call(i) && r()) && (u ? s(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: n,
                    writable: !0
                }) : t[e] = n)
            }
              , l = function(t, e) {
                var n = arguments.length > 2 ? arguments[2] : {}
                  , o = r(e);
                i && (o = a.call(o, Object.getOwnPropertySymbols(e)));
                for (var s = 0; s < o.length; s += 1)
                    c(t, o[s], e[o[s]], n[o[s]])
            };
            l.supportsDescriptors = !!u,
            t.exports = l
        },
        7742: function(t) {
            "use strict";
            var e = {
                single_source_shortest_paths: function(t, n, r) {
                    var i = {}
                      , o = {};
                    o[n] = 0;
                    var a, s, u, c, l, f, d, p = e.PriorityQueue.make();
                    for (p.push(n, 0); !p.empty(); )
                        for (u in s = (a = p.pop()).value,
                        c = a.cost,
                        l = t[s] || {})
                            l.hasOwnProperty(u) && (f = c + l[u],
                            d = o[u],
                            (void 0 === o[u] || d > f) && (o[u] = f,
                            p.push(u, f),
                            i[u] = s));
                    if (void 0 !== r && void 0 === o[r]) {
                        var h = ["Could not find a path from ", n, " to ", r, "."].join("");
                        throw new Error(h)
                    }
                    return i
                },
                extract_shortest_path_from_predecessor_list: function(t, e) {
                    for (var n = [], r = e; r; )
                        n.push(r),
                        t[r],
                        r = t[r];
                    return n.reverse(),
                    n
                },
                find_path: function(t, n, r) {
                    var i = e.single_source_shortest_paths(t, n, r);
                    return e.extract_shortest_path_from_predecessor_list(i, r)
                },
                PriorityQueue: {
                    make: function(t) {
                        var n, r = e.PriorityQueue, i = {};
                        for (n in t = t || {},
                        r)
                            r.hasOwnProperty(n) && (i[n] = r[n]);
                        return i.queue = [],
                        i.sorter = t.sorter || r.default_sorter,
                        i
                    },
                    default_sorter: function(t, e) {
                        return t.cost - e.cost
                    },
                    push: function(t, e) {
                        var n = {
                            value: t,
                            cost: e
                        };
                        this.queue.push(n),
                        this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            t.exports = e
        },
        7564: function(t) {
            /*! @license DOMPurify 2.3.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.6/LICENSE */
            t.exports = function() {
                "use strict";
                function t(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++)
                            n[e] = t[e];
                        return n
                    }
                    return Array.from(t)
                }
                var e = Object.hasOwnProperty
                  , n = Object.setPrototypeOf
                  , r = Object.isFrozen
                  , i = Object.getPrototypeOf
                  , o = Object.getOwnPropertyDescriptor
                  , a = Object.freeze
                  , s = Object.seal
                  , u = Object.create
                  , c = "undefined" != typeof Reflect && Reflect
                  , l = c.apply
                  , f = c.construct;
                l || (l = function(t, e, n) {
                    return t.apply(e, n)
                }
                ),
                a || (a = function(t) {
                    return t
                }
                ),
                s || (s = function(t) {
                    return t
                }
                ),
                f || (f = function(e, n) {
                    return new (Function.prototype.bind.apply(e, [null].concat(t(n))))
                }
                );
                var d = E(Array.prototype.forEach)
                  , p = E(Array.prototype.pop)
                  , h = E(Array.prototype.push)
                  , m = E(String.prototype.toLowerCase)
                  , y = E(String.prototype.match)
                  , g = E(String.prototype.replace)
                  , v = E(String.prototype.indexOf)
                  , b = E(String.prototype.trim)
                  , w = E(RegExp.prototype.test)
                  , x = S(TypeError);
                function E(t) {
                    return function(e) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                            r[i - 1] = arguments[i];
                        return l(t, e, r)
                    }
                }
                function S(t) {
                    return function() {
                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r];
                        return f(t, n)
                    }
                }
                function T(t, e) {
                    n && n(t, null);
                    for (var i = e.length; i--; ) {
                        var o = e[i];
                        if ("string" == typeof o) {
                            var a = m(o);
                            a !== o && (r(e) || (e[i] = a),
                            o = a)
                        }
                        t[o] = !0
                    }
                    return t
                }
                function k(t) {
                    var n = u(null)
                      , r = void 0;
                    for (r in t)
                        l(e, t, [r]) && (n[r] = t[r]);
                    return n
                }
                function O(t, e) {
                    for (; null !== t; ) {
                        var n = o(t, e);
                        if (n) {
                            if (n.get)
                                return E(n.get);
                            if ("function" == typeof n.value)
                                return E(n.value)
                        }
                        t = i(t)
                    }
                    function r(t) {
                        return console.warn("fallback value for", t),
                        null
                    }
                    return r
                }
                var _ = a(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
                  , A = a(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
                  , P = a(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
                  , I = a(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
                  , C = a(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"])
                  , j = a(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
                  , L = a(["#text"])
                  , N = a(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"])
                  , R = a(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
                  , M = a(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
                  , F = a(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
                  , D = s(/\{\{[\s\S]*|[\s\S]*\}\}/gm)
                  , B = s(/<%[\s\S]*|[\s\S]*%>/gm)
                  , H = s(/^data-[\-\w.\u00B7-\uFFFF]/)
                  , z = s(/^aria-[\-\w]+$/)
                  , U = s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
                  , W = s(/^(?:\w+script|data):/i)
                  , V = s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
                  , $ = s(/^html$/i)
                  , q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ;
                function Y(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++)
                            n[e] = t[e];
                        return n
                    }
                    return Array.from(t)
                }
                var G = function() {
                    return "undefined" == typeof window ? null : window
                }
                  , K = function(t, e) {
                    if ("object" !== (void 0 === t ? "undefined" : q(t)) || "function" != typeof t.createPolicy)
                        return null;
                    var n = null
                      , r = "data-tt-policy-suffix";
                    e.currentScript && e.currentScript.hasAttribute(r) && (n = e.currentScript.getAttribute(r));
                    var i = "dompurify" + (n ? "#" + n : "");
                    try {
                        return t.createPolicy(i, {
                            createHTML: function(t) {
                                return t
                            }
                        })
                    } catch (t) {
                        return console.warn("TrustedTypes policy " + i + " could not be created."),
                        null
                    }
                };
                function X() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G()
                      , e = function(t) {
                        return X(t)
                    };
                    if (e.version = "2.3.6",
                    e.removed = [],
                    !t || !t.document || 9 !== t.document.nodeType)
                        return e.isSupported = !1,
                        e;
                    var n = t.document
                      , r = t.document
                      , i = t.DocumentFragment
                      , o = t.HTMLTemplateElement
                      , s = t.Node
                      , u = t.Element
                      , c = t.NodeFilter
                      , l = t.NamedNodeMap
                      , f = void 0 === l ? t.NamedNodeMap || t.MozNamedAttrMap : l
                      , E = t.HTMLFormElement
                      , S = t.DOMParser
                      , J = t.trustedTypes
                      , Z = u.prototype
                      , Q = O(Z, "cloneNode")
                      , tt = O(Z, "nextSibling")
                      , et = O(Z, "childNodes")
                      , nt = O(Z, "parentNode");
                    if ("function" == typeof o) {
                        var rt = r.createElement("template");
                        rt.content && rt.content.ownerDocument && (r = rt.content.ownerDocument)
                    }
                    var it = K(J, n)
                      , ot = it ? it.createHTML("") : ""
                      , at = r
                      , st = at.implementation
                      , ut = at.createNodeIterator
                      , ct = at.createDocumentFragment
                      , lt = at.getElementsByTagName
                      , ft = n.importNode
                      , dt = {};
                    try {
                        dt = k(r).documentMode ? r.documentMode : {}
                    } catch (t) {}
                    var pt = {};
                    e.isSupported = "function" == typeof nt && st && void 0 !== st.createHTMLDocument && 9 !== dt;
                    var ht = D
                      , mt = B
                      , yt = H
                      , gt = z
                      , vt = W
                      , bt = V
                      , wt = U
                      , xt = null
                      , Et = T({}, [].concat(Y(_), Y(A), Y(P), Y(C), Y(L)))
                      , St = null
                      , Tt = T({}, [].concat(Y(N), Y(R), Y(M), Y(F)))
                      , kt = Object.seal(Object.create(null, {
                        tagNameCheck: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: null
                        },
                        attributeNameCheck: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: null
                        },
                        allowCustomizedBuiltInElements: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: !1
                        }
                    }))
                      , Ot = null
                      , _t = null
                      , At = !0
                      , Pt = !0
                      , It = !1
                      , Ct = !1
                      , jt = !1
                      , Lt = !1
                      , Nt = !1
                      , Rt = !1
                      , Mt = !1
                      , Ft = !1
                      , Dt = !0
                      , Bt = !0
                      , Ht = !1
                      , zt = {}
                      , Ut = null
                      , Wt = T({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"])
                      , Vt = null
                      , $t = T({}, ["audio", "video", "img", "source", "image", "track"])
                      , qt = null
                      , Yt = T({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"])
                      , Gt = "http://www.w3.org/1998/Math/MathML"
                      , Kt = "http://www.w3.org/2000/svg"
                      , Xt = "http://www.w3.org/1999/xhtml"
                      , Jt = Xt
                      , Zt = !1
                      , Qt = void 0
                      , te = ["application/xhtml+xml", "text/html"]
                      , ee = "text/html"
                      , ne = void 0
                      , re = null
                      , ie = r.createElement("form")
                      , oe = function(t) {
                        return t instanceof RegExp || t instanceof Function
                    }
                      , ae = function(t) {
                        re && re === t || (t && "object" === (void 0 === t ? "undefined" : q(t)) || (t = {}),
                        t = k(t),
                        xt = "ALLOWED_TAGS"in t ? T({}, t.ALLOWED_TAGS) : Et,
                        St = "ALLOWED_ATTR"in t ? T({}, t.ALLOWED_ATTR) : Tt,
                        qt = "ADD_URI_SAFE_ATTR"in t ? T(k(Yt), t.ADD_URI_SAFE_ATTR) : Yt,
                        Vt = "ADD_DATA_URI_TAGS"in t ? T(k($t), t.ADD_DATA_URI_TAGS) : $t,
                        Ut = "FORBID_CONTENTS"in t ? T({}, t.FORBID_CONTENTS) : Wt,
                        Ot = "FORBID_TAGS"in t ? T({}, t.FORBID_TAGS) : {},
                        _t = "FORBID_ATTR"in t ? T({}, t.FORBID_ATTR) : {},
                        zt = "USE_PROFILES"in t && t.USE_PROFILES,
                        At = !1 !== t.ALLOW_ARIA_ATTR,
                        Pt = !1 !== t.ALLOW_DATA_ATTR,
                        It = t.ALLOW_UNKNOWN_PROTOCOLS || !1,
                        Ct = t.SAFE_FOR_TEMPLATES || !1,
                        jt = t.WHOLE_DOCUMENT || !1,
                        Rt = t.RETURN_DOM || !1,
                        Mt = t.RETURN_DOM_FRAGMENT || !1,
                        Ft = t.RETURN_TRUSTED_TYPE || !1,
                        Nt = t.FORCE_BODY || !1,
                        Dt = !1 !== t.SANITIZE_DOM,
                        Bt = !1 !== t.KEEP_CONTENT,
                        Ht = t.IN_PLACE || !1,
                        wt = t.ALLOWED_URI_REGEXP || wt,
                        Jt = t.NAMESPACE || Xt,
                        t.CUSTOM_ELEMENT_HANDLING && oe(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (kt.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                        t.CUSTOM_ELEMENT_HANDLING && oe(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (kt.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                        t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (kt.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                        Qt = Qt = -1 === te.indexOf(t.PARSER_MEDIA_TYPE) ? ee : t.PARSER_MEDIA_TYPE,
                        ne = "application/xhtml+xml" === Qt ? function(t) {
                            return t
                        }
                        : m,
                        Ct && (Pt = !1),
                        Mt && (Rt = !0),
                        zt && (xt = T({}, [].concat(Y(L))),
                        St = [],
                        !0 === zt.html && (T(xt, _),
                        T(St, N)),
                        !0 === zt.svg && (T(xt, A),
                        T(St, R),
                        T(St, F)),
                        !0 === zt.svgFilters && (T(xt, P),
                        T(St, R),
                        T(St, F)),
                        !0 === zt.mathMl && (T(xt, C),
                        T(St, M),
                        T(St, F))),
                        t.ADD_TAGS && (xt === Et && (xt = k(xt)),
                        T(xt, t.ADD_TAGS)),
                        t.ADD_ATTR && (St === Tt && (St = k(St)),
                        T(St, t.ADD_ATTR)),
                        t.ADD_URI_SAFE_ATTR && T(qt, t.ADD_URI_SAFE_ATTR),
                        t.FORBID_CONTENTS && (Ut === Wt && (Ut = k(Ut)),
                        T(Ut, t.FORBID_CONTENTS)),
                        Bt && (xt["#text"] = !0),
                        jt && T(xt, ["html", "head", "body"]),
                        xt.table && (T(xt, ["tbody"]),
                        delete Ot.tbody),
                        a && a(t),
                        re = t)
                    }
                      , se = T({}, ["mi", "mo", "mn", "ms", "mtext"])
                      , ue = T({}, ["foreignobject", "desc", "title", "annotation-xml"])
                      , ce = T({}, A);
                    T(ce, P),
                    T(ce, I);
                    var le = T({}, C);
                    T(le, j);
                    var fe = function(t) {
                        var e = nt(t);
                        e && e.tagName || (e = {
                            namespaceURI: Xt,
                            tagName: "template"
                        });
                        var n = m(t.tagName)
                          , r = m(e.tagName);
                        if (t.namespaceURI === Kt)
                            return e.namespaceURI === Xt ? "svg" === n : e.namespaceURI === Gt ? "svg" === n && ("annotation-xml" === r || se[r]) : Boolean(ce[n]);
                        if (t.namespaceURI === Gt)
                            return e.namespaceURI === Xt ? "math" === n : e.namespaceURI === Kt ? "math" === n && ue[r] : Boolean(le[n]);
                        if (t.namespaceURI === Xt) {
                            if (e.namespaceURI === Kt && !ue[r])
                                return !1;
                            if (e.namespaceURI === Gt && !se[r])
                                return !1;
                            var i = T({}, ["title", "style", "font", "a", "script"]);
                            return !le[n] && (i[n] || !ce[n])
                        }
                        return !1
                    }
                      , de = function(t) {
                        h(e.removed, {
                            element: t
                        });
                        try {
                            t.parentNode.removeChild(t)
                        } catch (e) {
                            try {
                                t.outerHTML = ot
                            } catch (e) {
                                t.remove()
                            }
                        }
                    }
                      , pe = function(t, n) {
                        try {
                            h(e.removed, {
                                attribute: n.getAttributeNode(t),
                                from: n
                            })
                        } catch (t) {
                            h(e.removed, {
                                attribute: null,
                                from: n
                            })
                        }
                        if (n.removeAttribute(t),
                        "is" === t && !St[t])
                            if (Rt || Mt)
                                try {
                                    de(n)
                                } catch (t) {}
                            else
                                try {
                                    n.setAttribute(t, "")
                                } catch (t) {}
                    }
                      , he = function(t) {
                        var e = void 0
                          , n = void 0;
                        if (Nt)
                            t = "<remove></remove>" + t;
                        else {
                            var i = y(t, /^[\r\n\t ]+/);
                            n = i && i[0]
                        }
                        "application/xhtml+xml" === Qt && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
                        var o = it ? it.createHTML(t) : t;
                        if (Jt === Xt)
                            try {
                                e = (new S).parseFromString(o, Qt)
                            } catch (t) {}
                        if (!e || !e.documentElement) {
                            e = st.createDocument(Jt, "template", null);
                            try {
                                e.documentElement.innerHTML = Zt ? "" : o
                            } catch (t) {}
                        }
                        var a = e.body || e.documentElement;
                        return t && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null),
                        Jt === Xt ? lt.call(e, jt ? "html" : "body")[0] : jt ? e.documentElement : a
                    }
                      , me = function(t) {
                        return ut.call(t.ownerDocument || t, t, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT, null, !1)
                    }
                      , ye = function(t) {
                        return t instanceof E && ("string" != typeof t.nodeName || "string" != typeof t.textContent || "function" != typeof t.removeChild || !(t.attributes instanceof f) || "function" != typeof t.removeAttribute || "function" != typeof t.setAttribute || "string" != typeof t.namespaceURI || "function" != typeof t.insertBefore)
                    }
                      , ge = function(t) {
                        return "object" === (void 0 === s ? "undefined" : q(s)) ? t instanceof s : t && "object" === (void 0 === t ? "undefined" : q(t)) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
                    }
                      , ve = function(t, n, r) {
                        pt[t] && d(pt[t], (function(t) {
                            t.call(e, n, r, re)
                        }
                        ))
                    }
                      , be = function(t) {
                        var n = void 0;
                        if (ve("beforeSanitizeElements", t, null),
                        ye(t))
                            return de(t),
                            !0;
                        if (y(t.nodeName, /[\u0080-\uFFFF]/))
                            return de(t),
                            !0;
                        var r = ne(t.nodeName);
                        if (ve("uponSanitizeElement", t, {
                            tagName: r,
                            allowedTags: xt
                        }),
                        !ge(t.firstElementChild) && (!ge(t.content) || !ge(t.content.firstElementChild)) && w(/<[/\w]/g, t.innerHTML) && w(/<[/\w]/g, t.textContent))
                            return de(t),
                            !0;
                        if ("select" === r && w(/<template/i, t.innerHTML))
                            return de(t),
                            !0;
                        if (!xt[r] || Ot[r]) {
                            if (!Ot[r] && xe(r)) {
                                if (kt.tagNameCheck instanceof RegExp && w(kt.tagNameCheck, r))
                                    return !1;
                                if (kt.tagNameCheck instanceof Function && kt.tagNameCheck(r))
                                    return !1
                            }
                            if (Bt && !Ut[r]) {
                                var i = nt(t) || t.parentNode
                                  , o = et(t) || t.childNodes;
                                if (o && i)
                                    for (var a = o.length - 1; a >= 0; --a)
                                        i.insertBefore(Q(o[a], !0), tt(t))
                            }
                            return de(t),
                            !0
                        }
                        return t instanceof u && !fe(t) ? (de(t),
                        !0) : "noscript" !== r && "noembed" !== r || !w(/<\/no(script|embed)/i, t.innerHTML) ? (Ct && 3 === t.nodeType && (n = t.textContent,
                        n = g(n, ht, " "),
                        n = g(n, mt, " "),
                        t.textContent !== n && (h(e.removed, {
                            element: t.cloneNode()
                        }),
                        t.textContent = n)),
                        ve("afterSanitizeElements", t, null),
                        !1) : (de(t),
                        !0)
                    }
                      , we = function(t, e, n) {
                        if (Dt && ("id" === e || "name" === e) && (n in r || n in ie))
                            return !1;
                        if (Pt && !_t[e] && w(yt, e))
                            ;
                        else if (At && w(gt, e))
                            ;
                        else if (!St[e] || _t[e]) {
                            if (!(xe(t) && (kt.tagNameCheck instanceof RegExp && w(kt.tagNameCheck, t) || kt.tagNameCheck instanceof Function && kt.tagNameCheck(t)) && (kt.attributeNameCheck instanceof RegExp && w(kt.attributeNameCheck, e) || kt.attributeNameCheck instanceof Function && kt.attributeNameCheck(e)) || "is" === e && kt.allowCustomizedBuiltInElements && (kt.tagNameCheck instanceof RegExp && w(kt.tagNameCheck, n) || kt.tagNameCheck instanceof Function && kt.tagNameCheck(n))))
                                return !1
                        } else if (qt[e])
                            ;
                        else if (w(wt, g(n, bt, "")))
                            ;
                        else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== v(n, "data:") || !Vt[t])
                            if (It && !w(vt, g(n, bt, "")))
                                ;
                            else if (n)
                                return !1;
                        return !0
                    }
                      , xe = function(t) {
                        return t.indexOf("-") > 0
                    }
                      , Ee = function(t) {
                        var n = void 0
                          , r = void 0
                          , i = void 0
                          , o = void 0;
                        ve("beforeSanitizeAttributes", t, null);
                        var a = t.attributes;
                        if (a) {
                            var s = {
                                attrName: "",
                                attrValue: "",
                                keepAttr: !0,
                                allowedAttributes: St
                            };
                            for (o = a.length; o--; ) {
                                var u = n = a[o]
                                  , c = u.name
                                  , l = u.namespaceURI;
                                if (r = b(n.value),
                                i = ne(c),
                                s.attrName = i,
                                s.attrValue = r,
                                s.keepAttr = !0,
                                s.forceKeepAttr = void 0,
                                ve("uponSanitizeAttribute", t, s),
                                r = s.attrValue,
                                !s.forceKeepAttr && (pe(c, t),
                                s.keepAttr))
                                    if (w(/\/>/i, r))
                                        pe(c, t);
                                    else {
                                        Ct && (r = g(r, ht, " "),
                                        r = g(r, mt, " "));
                                        var f = ne(t.nodeName);
                                        if (we(f, i, r))
                                            try {
                                                l ? t.setAttributeNS(l, c, r) : t.setAttribute(c, r),
                                                p(e.removed)
                                            } catch (t) {}
                                    }
                            }
                            ve("afterSanitizeAttributes", t, null)
                        }
                    }
                      , Se = function t(e) {
                        var n = void 0
                          , r = me(e);
                        for (ve("beforeSanitizeShadowDOM", e, null); n = r.nextNode(); )
                            ve("uponSanitizeShadowNode", n, null),
                            be(n) || (n.content instanceof i && t(n.content),
                            Ee(n));
                        ve("afterSanitizeShadowDOM", e, null)
                    };
                    return e.sanitize = function(r, o) {
                        var a = void 0
                          , u = void 0
                          , c = void 0
                          , l = void 0
                          , f = void 0;
                        if ((Zt = !r) && (r = "\x3c!--\x3e"),
                        "string" != typeof r && !ge(r)) {
                            if ("function" != typeof r.toString)
                                throw x("toString is not a function");
                            if ("string" != typeof (r = r.toString()))
                                throw x("dirty is not a string, aborting")
                        }
                        if (!e.isSupported) {
                            if ("object" === q(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                                if ("string" == typeof r)
                                    return t.toStaticHTML(r);
                                if (ge(r))
                                    return t.toStaticHTML(r.outerHTML)
                            }
                            return r
                        }
                        if (Lt || ae(o),
                        e.removed = [],
                        "string" == typeof r && (Ht = !1),
                        Ht) {
                            if (r.nodeName) {
                                var d = ne(r.nodeName);
                                if (!xt[d] || Ot[d])
                                    throw x("root node is forbidden and cannot be sanitized in-place")
                            }
                        } else if (r instanceof s)
                            1 === (u = (a = he("\x3c!----\x3e")).ownerDocument.importNode(r, !0)).nodeType && "BODY" === u.nodeName || "HTML" === u.nodeName ? a = u : a.appendChild(u);
                        else {
                            if (!Rt && !Ct && !jt && -1 === r.indexOf("<"))
                                return it && Ft ? it.createHTML(r) : r;
                            if (!(a = he(r)))
                                return Rt ? null : Ft ? ot : ""
                        }
                        a && Nt && de(a.firstChild);
                        for (var p = me(Ht ? r : a); c = p.nextNode(); )
                            3 === c.nodeType && c === l || be(c) || (c.content instanceof i && Se(c.content),
                            Ee(c),
                            l = c);
                        if (l = null,
                        Ht)
                            return r;
                        if (Rt) {
                            if (Mt)
                                for (f = ct.call(a.ownerDocument); a.firstChild; )
                                    f.appendChild(a.firstChild);
                            else
                                f = a;
                            return St.shadowroot && (f = ft.call(n, f, !0)),
                            f
                        }
                        var h = jt ? a.outerHTML : a.innerHTML;
                        return jt && xt["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && w($, a.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + h),
                        Ct && (h = g(h, ht, " "),
                        h = g(h, mt, " ")),
                        it && Ft ? it.createHTML(h) : h
                    }
                    ,
                    e.setConfig = function(t) {
                        ae(t),
                        Lt = !0
                    }
                    ,
                    e.clearConfig = function() {
                        re = null,
                        Lt = !1
                    }
                    ,
                    e.isValidAttribute = function(t, e, n) {
                        re || ae({});
                        var r = ne(t)
                          , i = ne(e);
                        return we(r, i, n)
                    }
                    ,
                    e.addHook = function(t, e) {
                        "function" == typeof e && (pt[t] = pt[t] || [],
                        h(pt[t], e))
                    }
                    ,
                    e.removeHook = function(t) {
                        pt[t] && p(pt[t])
                    }
                    ,
                    e.removeHooks = function(t) {
                        pt[t] && (pt[t] = [])
                    }
                    ,
                    e.removeAllHooks = function() {
                        pt = {}
                    }
                    ,
                    e
                }
                return X()
            }()
        },
        2758: function() {
            var t;
            "function" != typeof (t = window.Element.prototype).matches && (t.matches = t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || function(t) {
                for (var e = this, n = (e.document || e.ownerDocument).querySelectorAll(t), r = 0; n[r] && n[r] !== e; )
                    ++r;
                return Boolean(n[r])
            }
            ),
            "function" != typeof t.closest && (t.closest = function(t) {
                for (var e = this; e && 1 === e.nodeType; ) {
                    if (e.matches(t))
                        return e;
                    e = e.parentNode
                }
                return null
            }
            )
        },
        7417: function(t) {
            "use strict";
            var e = t.exports = {};
            e.isIE = function(t) {
                return (-1 !== (e = navigator.userAgent.toLowerCase()).indexOf("msie") || -1 !== e.indexOf("trident") || -1 !== e.indexOf(" edge/")) && (!t || t === function() {
                    var t = 3
                      , e = document.createElement("div")
                      , n = e.getElementsByTagName("i");
                    do {
                        e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e"
                    } while (n[0]);
                    return t > 4 ? t : undefined
                }());
                var e
            }
            ,
            e.isLegacyOpera = function() {
                return !!window.opera
            }
        },
        1694: function(t) {
            "use strict";
            (t.exports = {}).forEach = function(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var r = e(t[n]);
                    if (r)
                        return r
                }
            }
        },
        2366: function(t, e, n) {
            "use strict";
            var r = n(7417);
            t.exports = function(t) {
                var e = (t = t || {}).reporter
                  , n = t.batchProcessor
                  , i = t.stateHandler.getState;
                if (!e)
                    throw new Error("Missing required dependency: reporter.");
                function o(e) {
                    var n = t.important ? " !important; " : "; ";
                    return (e.join(n) + n).trim()
                }
                function a(t) {
                    return i(t).object
                }
                return {
                    makeDetectable: function(t, a, s) {
                        s || (s = a,
                        a = t,
                        t = null),
                        (t = t || {}).debug,
                        r.isIE(8) ? s(a) : function(a, s) {
                            var u = o(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"])
                              , c = !1
                              , l = window.getComputedStyle(a)
                              , f = a.offsetWidth
                              , d = a.offsetHeight;
                            function p() {
                                function n() {
                                    if ("static" === l.position) {
                                        a.style.setProperty("position", "relative", t.important ? "important" : "");
                                        var n = function(e, n, r, i) {
                                            var o = r[i];
                                            "auto" !== o && "0" !== function(t) {
                                                return t.replace(/[^-\d\.]/g, "")
                                            }(o) && (e.warn("An element that is positioned static has style." + i + "=" + o + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", n),
                                            n.style.setProperty(i, "0", t.important ? "important" : ""))
                                        };
                                        n(e, a, l, "top"),
                                        n(e, a, l, "right"),
                                        n(e, a, l, "bottom"),
                                        n(e, a, l, "left")
                                    }
                                }
                                "" !== l.position && (n(),
                                c = !0);
                                var o = document.createElement("object");
                                o.style.cssText = u,
                                o.tabIndex = -1,
                                o.type = "text/html",
                                o.setAttribute("aria-hidden", "true"),
                                o.onload = function() {
                                    c || n(),
                                    function t(e, n) {
                                        if (!e.contentDocument) {
                                            var r = i(e);
                                            return r.checkForObjectDocumentTimeoutId && window.clearTimeout(r.checkForObjectDocumentTimeoutId),
                                            void (r.checkForObjectDocumentTimeoutId = setTimeout((function() {
                                                r.checkForObjectDocumentTimeoutId = 0,
                                                t(e, n)
                                            }
                                            ), 100))
                                        }
                                        n(e.contentDocument)
                                    }(this, (function(t) {
                                        s(a)
                                    }
                                    ))
                                }
                                ,
                                r.isIE() || (o.data = "about:blank"),
                                i(a) && (a.appendChild(o),
                                i(a).object = o,
                                r.isIE() && (o.data = "about:blank"))
                            }
                            i(a).startSize = {
                                width: f,
                                height: d
                            },
                            n ? n.add(p) : p()
                        }(a, s)
                    },
                    addListener: function(t, e) {
                        function n() {
                            e(t)
                        }
                        if (r.isIE(8))
                            i(t).object = {
                                proxy: n
                            },
                            t.attachEvent("onresize", n);
                        else {
                            var o = a(t);
                            if (!o)
                                throw new Error("Element is not detectable by this strategy.");
                            o.contentDocument.defaultView.addEventListener("resize", n)
                        }
                    },
                    uninstall: function(t) {
                        if (i(t)) {
                            var e = a(t);
                            e && (r.isIE(8) ? t.detachEvent("onresize", e.proxy) : t.removeChild(e),
                            i(t).checkForObjectDocumentTimeoutId && window.clearTimeout(i(t).checkForObjectDocumentTimeoutId),
                            delete i(t).object)
                        }
                    }
                }
            }
        },
        8687: function(t, e, n) {
            "use strict";
            var r = n(1694).forEach;
            t.exports = function(t) {
                var e = (t = t || {}).reporter
                  , n = t.batchProcessor
                  , i = t.stateHandler.getState
                  , o = (t.stateHandler.hasState,
                t.idHandler);
                if (!n)
                    throw new Error("Missing required dependency: batchProcessor");
                if (!e)
                    throw new Error("Missing required dependency: reporter.");
                var a = function() {
                    var t = 500
                      , e = 500
                      , n = document.createElement("div");
                    n.style.cssText = c(["position: absolute", "width: 1000px", "height: 1000px", "visibility: hidden", "margin: 0", "padding: 0"]);
                    var r = document.createElement("div");
                    r.style.cssText = c(["position: absolute", "width: 500px", "height: 500px", "overflow: scroll", "visibility: none", "top: -1500px", "left: -1500px", "visibility: hidden", "margin: 0", "padding: 0"]),
                    r.appendChild(n),
                    document.body.insertBefore(r, document.body.firstChild);
                    var i = t - r.clientWidth
                      , o = e - r.clientHeight;
                    return document.body.removeChild(r),
                    {
                        width: i,
                        height: o
                    }
                }()
                  , s = "erd_scroll_detection_container";
                function u(t) {
                    !function(t, e, n) {
                        function r(n, r) {
                            r = r || function(e) {
                                t.head.appendChild(e)
                            }
                            ;
                            var i = t.createElement("style");
                            return i.innerHTML = n,
                            i.id = e,
                            r(i),
                            i
                        }
                        if (!t.getElementById(e)) {
                            var i = n + "_animation"
                              , o = n + "_animation_active"
                              , a = "/* Created by the element-resize-detector library. */\n";
                            a += "." + n + " > div::-webkit-scrollbar { " + c(["display: none"]) + " }\n\n",
                            a += "." + o + " { " + c(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + i, "animation-name: " + i]) + " }\n",
                            a += "@-webkit-keyframes " + i + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",
                            r(a += "@keyframes " + i + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")
                        }
                    }(t, "erd_scroll_detection_scrollbar_style", s)
                }
                function c(e) {
                    var n = t.important ? " !important; " : "; ";
                    return (e.join(n) + n).trim()
                }
                function l(t, n, r) {
                    if (t.addEventListener)
                        t.addEventListener(n, r);
                    else {
                        if (!t.attachEvent)
                            return e.error("[scroll] Don't know how to add event listeners.");
                        t.attachEvent("on" + n, r)
                    }
                }
                function f(t, n, r) {
                    if (t.removeEventListener)
                        t.removeEventListener(n, r);
                    else {
                        if (!t.detachEvent)
                            return e.error("[scroll] Don't know how to remove event listeners.");
                        t.detachEvent("on" + n, r)
                    }
                }
                function d(t) {
                    return i(t).container.childNodes[0].childNodes[0].childNodes[0]
                }
                function p(t) {
                    return i(t).container.childNodes[0].childNodes[0].childNodes[1]
                }
                return u(window.document),
                {
                    makeDetectable: function(t, u, f) {
                        function h() {
                            if (t.debug) {
                                var n = Array.prototype.slice.call(arguments);
                                if (n.unshift(o.get(u), "Scroll: "),
                                e.log.apply)
                                    e.log.apply(null, n);
                                else
                                    for (var r = 0; r < n.length; r++)
                                        e.log(n[r])
                            }
                        }
                        function m(t) {
                            var e = i(t).container.childNodes[0]
                              , n = window.getComputedStyle(e);
                            return !n.width || -1 === n.width.indexOf("px")
                        }
                        function y() {
                            var t = window.getComputedStyle(u)
                              , e = {};
                            return e.position = t.position,
                            e.width = u.offsetWidth,
                            e.height = u.offsetHeight,
                            e.top = t.top,
                            e.right = t.right,
                            e.bottom = t.bottom,
                            e.left = t.left,
                            e.widthCSS = t.width,
                            e.heightCSS = t.height,
                            e
                        }
                        function g() {
                            if (h("storeStyle invoked."),
                            i(u)) {
                                var t = y();
                                i(u).style = t
                            } else
                                h("Aborting because element has been uninstalled")
                        }
                        function v(t, e, n) {
                            i(t).lastWidth = e,
                            i(t).lastHeight = n
                        }
                        function b() {
                            return 2 * a.width + 1
                        }
                        function w() {
                            return 2 * a.height + 1
                        }
                        function x(t) {
                            return t + 10 + b()
                        }
                        function E(t) {
                            return t + 10 + w()
                        }
                        function S(t, e, n) {
                            var r = d(t)
                              , i = p(t)
                              , o = x(e)
                              , a = E(n)
                              , s = function(t) {
                                return 2 * t + b()
                            }(e)
                              , u = function(t) {
                                return 2 * t + w()
                            }(n);
                            r.scrollLeft = o,
                            r.scrollTop = a,
                            i.scrollLeft = s,
                            i.scrollTop = u
                        }
                        function T() {
                            var t = i(u).container;
                            if (!t) {
                                (t = document.createElement("div")).className = s,
                                t.style.cssText = c(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]),
                                i(u).container = t,
                                function(t) {
                                    t.className += " " + s + "_animation_active"
                                }(t),
                                u.appendChild(t);
                                var e = function() {
                                    i(u).onRendered && i(u).onRendered()
                                };
                                l(t, "animationstart", e),
                                i(u).onAnimationStart = e
                            }
                            return t
                        }
                        function k() {
                            if (h("Injecting elements"),
                            i(u)) {
                                !function() {
                                    var n = i(u).style;
                                    if ("static" === n.position) {
                                        u.style.setProperty("position", "relative", t.important ? "important" : "");
                                        var r = function(t, e, n, r) {
                                            var i = n[r];
                                            "auto" !== i && "0" !== function(t) {
                                                return t.replace(/[^-\d\.]/g, "")
                                            }(i) && (t.warn("An element that is positioned static has style." + r + "=" + i + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", e),
                                            e.style[r] = 0)
                                        };
                                        r(e, u, n, "top"),
                                        r(e, u, n, "right"),
                                        r(e, u, n, "bottom"),
                                        r(e, u, n, "left")
                                    }
                                }();
                                var n = i(u).container;
                                n || (n = T());
                                var r, o, f, d, p = a.width, m = a.height, y = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]), g = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(["left: " + (r = (r = -(1 + p)) ? r + "px" : "0"), "top: " + (o = (o = -(1 + m)) ? o + "px" : "0"), "right: " + (d = (d = -p) ? d + "px" : "0"), "bottom: " + (f = (f = -m) ? f + "px" : "0")])), v = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), b = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), w = c(["position: absolute", "left: 0", "top: 0"]), x = c(["position: absolute", "width: 200%", "height: 200%"]), E = document.createElement("div"), S = document.createElement("div"), k = document.createElement("div"), O = document.createElement("div"), _ = document.createElement("div"), A = document.createElement("div");
                                E.dir = "ltr",
                                E.style.cssText = y,
                                E.className = s,
                                S.className = s,
                                S.style.cssText = g,
                                k.style.cssText = v,
                                O.style.cssText = w,
                                _.style.cssText = b,
                                A.style.cssText = x,
                                k.appendChild(O),
                                _.appendChild(A),
                                S.appendChild(k),
                                S.appendChild(_),
                                E.appendChild(S),
                                n.appendChild(E),
                                l(k, "scroll", P),
                                l(_, "scroll", I),
                                i(u).onExpandScroll = P,
                                i(u).onShrinkScroll = I
                            } else
                                h("Aborting because element has been uninstalled");
                            function P() {
                                var t = i(u);
                                t && t.onExpand ? t.onExpand() : h("Aborting expand scroll handler: element has been uninstalled")
                            }
                            function I() {
                                var t = i(u);
                                t && t.onShrink ? t.onShrink() : h("Aborting shrink scroll handler: element has been uninstalled")
                            }
                        }
                        function O() {
                            function a(e, n, r) {
                                var i = function(t) {
                                    return d(t).childNodes[0]
                                }(e)
                                  , o = x(n)
                                  , a = E(r);
                                i.style.setProperty("width", o + "px", t.important ? "important" : ""),
                                i.style.setProperty("height", a + "px", t.important ? "important" : "")
                            }
                            function s(r) {
                                var s = u.offsetWidth
                                  , l = u.offsetHeight
                                  , f = s !== i(u).lastWidth || l !== i(u).lastHeight;
                                h("Storing current size", s, l),
                                v(u, s, l),
                                n.add(0, (function() {
                                    if (f)
                                        if (i(u))
                                            if (c()) {
                                                if (t.debug) {
                                                    var n = u.offsetWidth
                                                      , r = u.offsetHeight;
                                                    n === s && r === l || e.warn(o.get(u), "Scroll: Size changed before updating detector elements.")
                                                }
                                                a(u, s, l)
                                            } else
                                                h("Aborting because element container has not been initialized");
                                        else
                                            h("Aborting because element has been uninstalled")
                                }
                                )),
                                n.add(1, (function() {
                                    i(u) ? c() ? S(u, s, l) : h("Aborting because element container has not been initialized") : h("Aborting because element has been uninstalled")
                                }
                                )),
                                f && r && n.add(2, (function() {
                                    i(u) ? c() ? r() : h("Aborting because element container has not been initialized") : h("Aborting because element has been uninstalled")
                                }
                                ))
                            }
                            function c() {
                                return !!i(u).container
                            }
                            function l() {
                                h("notifyListenersIfNeeded invoked");
                                var t = i(u);
                                return void 0 === i(u).lastNotifiedWidth && t.lastWidth === t.startSize.width && t.lastHeight === t.startSize.height ? h("Not notifying: Size is the same as the start size, and there has been no notification yet.") : t.lastWidth === t.lastNotifiedWidth && t.lastHeight === t.lastNotifiedHeight ? h("Not notifying: Size already notified") : (h("Current size not notified, notifying..."),
                                t.lastNotifiedWidth = t.lastWidth,
                                t.lastNotifiedHeight = t.lastHeight,
                                void r(i(u).listeners, (function(t) {
                                    t(u)
                                }
                                )))
                            }
                            function f() {
                                h("Scroll detected."),
                                m(u) ? h("Scroll event fired while unrendered. Ignoring...") : s(l)
                            }
                            if (h("registerListenersAndPositionElements invoked."),
                            i(u)) {
                                i(u).onRendered = function() {
                                    if (h("startanimation triggered."),
                                    m(u))
                                        h("Ignoring since element is still unrendered...");
                                    else {
                                        h("Element rendered.");
                                        var t = d(u)
                                          , e = p(u);
                                        0 !== t.scrollLeft && 0 !== t.scrollTop && 0 !== e.scrollLeft && 0 !== e.scrollTop || (h("Scrollbars out of sync. Updating detector elements..."),
                                        s(l))
                                    }
                                }
                                ,
                                i(u).onExpand = f,
                                i(u).onShrink = f;
                                var y = i(u).style;
                                a(u, y.width, y.height)
                            } else
                                h("Aborting because element has been uninstalled")
                        }
                        function _() {
                            if (h("finalizeDomMutation invoked."),
                            i(u)) {
                                var t = i(u).style;
                                v(u, t.width, t.height),
                                S(u, t.width, t.height)
                            } else
                                h("Aborting because element has been uninstalled")
                        }
                        function A() {
                            f(u)
                        }
                        function P() {
                            var t;
                            h("Installing..."),
                            i(u).listeners = [],
                            t = y(),
                            i(u).startSize = {
                                width: t.width,
                                height: t.height
                            },
                            h("Element start size", i(u).startSize),
                            n.add(0, g),
                            n.add(1, k),
                            n.add(2, O),
                            n.add(3, _),
                            n.add(4, A)
                        }
                        f || (f = u,
                        u = t,
                        t = null),
                        t = t || {},
                        h("Making detectable..."),
                        !function(t) {
                            return !function(t) {
                                var e = t.getRootNode && t.getRootNode().contains(t);
                                return t === t.ownerDocument.body || t.ownerDocument.body.contains(t) || e
                            }(t) || null === window.getComputedStyle(t)
                        }(u) ? P() : (h("Element is detached"),
                        T(),
                        h("Waiting until element is attached..."),
                        i(u).onRendered = function() {
                            h("Element is now attached"),
                            P()
                        }
                        )
                    },
                    addListener: function(t, e) {
                        if (!i(t).listeners.push)
                            throw new Error("Cannot add listener to an element that is not detectable.");
                        i(t).listeners.push(e)
                    },
                    uninstall: function(t) {
                        var e = i(t);
                        e && (e.onExpandScroll && f(d(t), "scroll", e.onExpandScroll),
                        e.onShrinkScroll && f(p(t), "scroll", e.onShrinkScroll),
                        e.onAnimationStart && f(e.container, "animationstart", e.onAnimationStart),
                        e.container && t.removeChild(e.container))
                    },
                    initDocument: u
                }
            }
        },
        6351: function(t, e, n) {
            "use strict";
            var r = n(1694).forEach
              , i = n(4483)
              , o = n(968)
              , a = n(5185)
              , s = n(8031)
              , u = n(3160)
              , c = n(7417)
              , l = n(5548)
              , f = n(6082)
              , d = n(2366)
              , p = n(8687);
            function h(t) {
                return Array.isArray(t) || void 0 !== t.length
            }
            function m(t) {
                if (Array.isArray(t))
                    return t;
                var e = [];
                return r(t, (function(t) {
                    e.push(t)
                }
                )),
                e
            }
            function y(t) {
                return t && 1 === t.nodeType
            }
            function g(t, e, n) {
                var r = t[e];
                return null == r && void 0 !== n ? n : r
            }
            t.exports = function(t) {
                var e;
                if ((t = t || {}).idHandler)
                    e = {
                        get: function(e) {
                            return t.idHandler.get(e, !0)
                        },
                        set: t.idHandler.set
                    };
                else {
                    var n = a()
                      , v = s({
                        idGenerator: n,
                        stateHandler: f
                    });
                    e = v
                }
                var b = t.reporter;
                b || (b = u(!1 === b));
                var w = g(t, "batchProcessor", l({
                    reporter: b
                }))
                  , x = {};
                x.callOnAdd = !!g(t, "callOnAdd", !0),
                x.debug = !!g(t, "debug", !1);
                var E, S = o(e), T = i({
                    stateHandler: f
                }), k = g(t, "strategy", "object"), O = g(t, "important", !1), _ = {
                    reporter: b,
                    batchProcessor: w,
                    stateHandler: f,
                    idHandler: e,
                    important: O
                };
                if ("scroll" === k && (c.isLegacyOpera() ? (b.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),
                k = "object") : c.isIE(9) && (b.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),
                k = "object")),
                "scroll" === k)
                    E = p(_);
                else {
                    if ("object" !== k)
                        throw new Error("Invalid strategy name: " + k);
                    E = d(_)
                }
                var A = {};
                return {
                    listenTo: function(t, n, i) {
                        function o(t) {
                            var e = S.get(t);
                            r(e, (function(e) {
                                e(t)
                            }
                            ))
                        }
                        function a(t, e, n) {
                            S.add(e, n),
                            t && n(e)
                        }
                        if (i || (i = n,
                        n = t,
                        t = {}),
                        !n)
                            throw new Error("At least one element required.");
                        if (!i)
                            throw new Error("Listener required.");
                        if (y(n))
                            n = [n];
                        else {
                            if (!h(n))
                                return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            n = m(n)
                        }
                        var s = 0
                          , u = g(t, "callOnAdd", x.callOnAdd)
                          , c = g(t, "onReady", (function() {}
                        ))
                          , l = g(t, "debug", x.debug);
                        r(n, (function(t) {
                            f.getState(t) || (f.initState(t),
                            e.set(t));
                            var d = e.get(t);
                            if (l && b.log("Attaching listener to element", d, t),
                            !T.isDetectable(t))
                                return l && b.log(d, "Not detectable."),
                                T.isBusy(t) ? (l && b.log(d, "System busy making it detectable"),
                                a(u, t, i),
                                A[d] = A[d] || [],
                                void A[d].push((function() {
                                    ++s === n.length && c()
                                }
                                ))) : (l && b.log(d, "Making detectable..."),
                                T.markBusy(t, !0),
                                E.makeDetectable({
                                    debug: l,
                                    important: O
                                }, t, (function(t) {
                                    if (l && b.log(d, "onElementDetectable"),
                                    f.getState(t)) {
                                        T.markAsDetectable(t),
                                        T.markBusy(t, !1),
                                        E.addListener(t, o),
                                        a(u, t, i);
                                        var e = f.getState(t);
                                        if (e && e.startSize) {
                                            var p = t.offsetWidth
                                              , h = t.offsetHeight;
                                            e.startSize.width === p && e.startSize.height === h || o(t)
                                        }
                                        A[d] && r(A[d], (function(t) {
                                            t()
                                        }
                                        ))
                                    } else
                                        l && b.log(d, "Element uninstalled before being detectable.");
                                    delete A[d],
                                    ++s === n.length && c()
                                }
                                )));
                            l && b.log(d, "Already detecable, adding listener."),
                            a(u, t, i),
                            s++
                        }
                        )),
                        s === n.length && c()
                    },
                    removeListener: S.removeListener,
                    removeAllListeners: S.removeAllListeners,
                    uninstall: function(t) {
                        if (!t)
                            return b.error("At least one element is required.");
                        if (y(t))
                            t = [t];
                        else {
                            if (!h(t))
                                return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            t = m(t)
                        }
                        r(t, (function(t) {
                            S.removeAllListeners(t),
                            E.uninstall(t),
                            f.cleanState(t)
                        }
                        ))
                    },
                    initDocument: function(t) {
                        E.initDocument && E.initDocument(t)
                    }
                }
            }
        },
        4483: function(t) {
            "use strict";
            t.exports = function(t) {
                var e = t.stateHandler.getState;
                return {
                    isDetectable: function(t) {
                        var n = e(t);
                        return n && !!n.isDetectable
                    },
                    markAsDetectable: function(t) {
                        e(t).isDetectable = !0
                    },
                    isBusy: function(t) {
                        return !!e(t).busy
                    },
                    markBusy: function(t, n) {
                        e(t).busy = !!n
                    }
                }
            }
        },
        5185: function(t) {
            "use strict";
            t.exports = function() {
                var t = 1;
                return {
                    generate: function() {
                        return t++
                    }
                }
            }
        },
        8031: function(t) {
            "use strict";
            t.exports = function(t) {
                var e = t.idGenerator
                  , n = t.stateHandler.getState;
                return {
                    get: function(t) {
                        var e = n(t);
                        return e && void 0 !== e.id ? e.id : null
                    },
                    set: function(t) {
                        var r = n(t);
                        if (!r)
                            throw new Error("setId required the element to have a resize detection state.");
                        var i = e.generate();
                        return r.id = i,
                        i
                    }
                }
            }
        },
        968: function(t) {
            "use strict";
            t.exports = function(t) {
                var e = {};
                function n(n) {
                    var r = t.get(n);
                    return void 0 === r ? [] : e[r] || []
                }
                return {
                    get: n,
                    add: function(n, r) {
                        var i = t.get(n);
                        e[i] || (e[i] = []),
                        e[i].push(r)
                    },
                    removeListener: function(t, e) {
                        for (var r = n(t), i = 0, o = r.length; i < o; ++i)
                            if (r[i] === e) {
                                r.splice(i, 1);
                                break
                            }
                    },
                    removeAllListeners: function(t) {
                        var e = n(t);
                        e && (e.length = 0)
                    }
                }
            }
        },
        3160: function(t) {
            "use strict";
            t.exports = function(t) {
                function e() {}
                var n = {
                    log: e,
                    warn: e,
                    error: e
                };
                if (!t && window.console) {
                    var r = function(t, e) {
                        t[e] = function() {
                            var t = console[e];
                            if (t.apply)
                                t.apply(console, arguments);
                            else
                                for (var n = 0; n < arguments.length; n++)
                                    t(arguments[n])
                        }
                    };
                    r(n, "log"),
                    r(n, "warn"),
                    r(n, "error")
                }
                return n
            }
        },
        6082: function(t) {
            "use strict";
            function e(t) {
                return t._erd
            }
            t.exports = {
                initState: function(t) {
                    return t._erd = {},
                    e(t)
                },
                getState: e,
                cleanState: function(t) {
                    delete t._erd
                }
            }
        },
        6869: function(t) {
            "use strict";
            t.exports = function(t) {
                for (var e = [], n = t.length, r = 0; r < n; r++) {
                    var i = t.charCodeAt(r);
                    if (i >= 55296 && i <= 56319 && n > r + 1) {
                        var o = t.charCodeAt(r + 1);
                        o >= 56320 && o <= 57343 && (i = 1024 * (i - 55296) + o - 56320 + 65536,
                        r += 1)
                    }
                    i < 128 ? e.push(i) : i < 2048 ? (e.push(i >> 6 | 192),
                    e.push(63 & i | 128)) : i < 55296 || i >= 57344 && i < 65536 ? (e.push(i >> 12 | 224),
                    e.push(i >> 6 & 63 | 128),
                    e.push(63 & i | 128)) : i >= 65536 && i <= 1114111 ? (e.push(i >> 18 | 240),
                    e.push(i >> 12 & 63 | 128),
                    e.push(i >> 6 & 63 | 128),
                    e.push(63 & i | 128)) : e.push(239, 191, 189)
                }
                return new Uint8Array(e).buffer
            }
        },
        3563: function(t, e, n) {
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              , i = n(4586)
              , o = n(7704)
              , a = n(8811)
              , s = n(58)
              , u = function(t, e) {
                if (null == t)
                    throw new TypeError("Cannot call method on " + t);
                if ("string" != typeof e || "number" !== e && "string" !== e)
                    throw new TypeError('hint must be "string" or "number"');
                var n, r, a, s = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
                for (a = 0; a < s.length; ++a)
                    if (n = t[s[a]],
                    o(n) && (r = n.call(t),
                    i(r)))
                        return r;
                throw new TypeError("No default value")
            }
              , c = function(t, e) {
                var n = t[e];
                if (null != n) {
                    if (!o(n))
                        throw new TypeError(n + " returned for property " + e + " of object " + t + " is not a function");
                    return n
                }
            };
            t.exports = function(t) {
                if (i(t))
                    return t;
                var e, n = "default";
                if (arguments.length > 1 && (arguments[1] === String ? n = "string" : arguments[1] === Number && (n = "number")),
                r && (Symbol.toPrimitive ? e = c(t, Symbol.toPrimitive) : s(t) && (e = Symbol.prototype.valueOf)),
                void 0 !== e) {
                    var o = e.call(t, n);
                    if (i(o))
                        return o;
                    throw new TypeError("unable to convert exotic object to primitive")
                }
                return "default" === n && (a(t) || s(t)) && (n = "string"),
                u(t, "default" === n ? "number" : n)
            }
        },
        1616: function(t, e, n) {
            "use strict";
            var r = Object.prototype.toString
              , i = n(4586)
              , o = n(7704)
              , a = function(t) {
                var e;
                if ((e = arguments.length > 1 ? arguments[1] : "[object Date]" === r.call(t) ? String : Number) === String || e === Number) {
                    var n, a, s = e === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (a = 0; a < s.length; ++a)
                        if (o(t[s[a]]) && (n = t[s[a]](),
                        i(n)))
                            return n;
                    throw new TypeError("No default value")
                }
                throw new TypeError("invalid [[DefaultValue]] hint supplied")
            };
            t.exports = function(t) {
                return i(t) ? t : arguments.length > 1 ? a(t, arguments[1]) : a(t)
            }
        },
        4586: function(t) {
            "use strict";
            t.exports = function(t) {
                return null === t || "function" != typeof t && "object" != typeof t
            }
        },
        377: function(t) {
            "use strict";
            t.exports = function() {}
        },
        7886: function(t, e, n) {
            "use strict";
            t.exports = n(6764)() ? Object.assign : n(9367)
        },
        6764: function(t) {
            "use strict";
            t.exports = function() {
                var t, e = Object.assign;
                return "function" == typeof e && (e(t = {
                    foo: "raz"
                }, {
                    bar: "dwa"
                }, {
                    trzy: "trzy"
                }),
                t.foo + t.bar + t.trzy === "razdwatrzy")
            }
        },
        9367: function(t, e, n) {
            "use strict";
            var r = n(693)
              , i = n(2536)
              , o = Math.max;
            t.exports = function(t, e) {
                var n, a, s, u = o(arguments.length, 2);
                for (t = Object(i(t)),
                s = function(r) {
                    try {
                        t[r] = e[r]
                    } catch (t) {
                        n || (n = t)
                    }
                }
                ,
                a = 1; a < u; ++a)
                    r(e = arguments[a]).forEach(s);
                if (void 0 !== n)
                    throw n;
                return t
            }
        },
        8897: function(t, e, n) {
            "use strict";
            var r = n(377)();
            t.exports = function(t) {
                return t !== r && null !== t
            }
        },
        693: function(t, e, n) {
            "use strict";
            t.exports = n(2224)() ? Object.keys : n(9744)
        },
        2224: function(t) {
            "use strict";
            t.exports = function() {
                try {
                    return Object.keys("primitive"),
                    !0
                } catch (t) {
                    return !1
                }
            }
        },
        9744: function(t, e, n) {
            "use strict";
            var r = n(8897)
              , i = Object.keys;
            t.exports = function(t) {
                return i(r(t) ? Object(t) : t)
            }
        },
        3633: function(t, e, n) {
            "use strict";
            var r = n(8897)
              , i = Array.prototype.forEach
              , o = Object.create
              , a = function(t, e) {
                var n;
                for (n in t)
                    e[n] = t[n]
            };
            t.exports = function(t) {
                var e = o(null);
                return i.call(arguments, (function(t) {
                    r(t) && a(Object(t), e)
                }
                )),
                e
            }
        },
        2536: function(t, e, n) {
            "use strict";
            var r = n(8897);
            t.exports = function(t) {
                if (!r(t))
                    throw new TypeError("Cannot use null or undefined");
                return t
            }
        },
        8234: function(t, e, n) {
            "use strict";
            t.exports = n(2473)() ? String.prototype.contains : n(6243)
        },
        2473: function(t) {
            "use strict";
            var e = "razdwatrzy";
            t.exports = function() {
                return "function" == typeof e.contains && (!0 === e.contains("dwa") && !1 === e.contains("foo"))
            }
        },
        6243: function(t) {
            "use strict";
            var e = String.prototype.indexOf;
            t.exports = function(t) {
                return e.call(this, t, arguments[1]) > -1
            }
        },
        7657: function(t, e, n) {
            "use strict";
            t.exports = n(583)() ? n(659).Symbol : n(1724)
        },
        583: function(t, e, n) {
            "use strict";
            var r = n(659)
              , i = {
                object: !0,
                symbol: !0
            };
            t.exports = function() {
                var t, e = r.Symbol;
                if ("function" != typeof e)
                    return !1;
                t = e("test symbol");
                try {
                    String(t)
                } catch (t) {
                    return !1
                }
                return !!i[typeof e.iterator] && (!!i[typeof e.toPrimitive] && !!i[typeof e.toStringTag])
            }
        },
        429: function(t) {
            "use strict";
            t.exports = function(t) {
                return !!t && ("symbol" == typeof t || !!t.constructor && ("Symbol" === t.constructor.name && "Symbol" === t[t.constructor.toStringTag]))
            }
        },
        4664: function(t, e, n) {
            "use strict";
            var r = n(4159)
              , i = Object.create
              , o = Object.defineProperty
              , a = Object.prototype
              , s = i(null);
            t.exports = function(t) {
                for (var e, n, i = 0; s[t + (i || "")]; )
                    ++i;
                return s[t += i || ""] = !0,
                o(a, e = "@@" + t, r.gs(null, (function(t) {
                    n || (n = !0,
                    o(this, e, r(t)),
                    n = !1)
                }
                ))),
                e
            }
        },
        2716: function(t, e, n) {
            "use strict";
            var r = n(4159)
              , i = n(659).Symbol;
            t.exports = function(t) {
                return Object.defineProperties(t, {
                    hasInstance: r("", i && i.hasInstance || t("hasInstance")),
                    isConcatSpreadable: r("", i && i.isConcatSpreadable || t("isConcatSpreadable")),
                    iterator: r("", i && i.iterator || t("iterator")),
                    match: r("", i && i.match || t("match")),
                    replace: r("", i && i.replace || t("replace")),
                    search: r("", i && i.search || t("search")),
                    species: r("", i && i.species || t("species")),
                    split: r("", i && i.split || t("split")),
                    toPrimitive: r("", i && i.toPrimitive || t("toPrimitive")),
                    toStringTag: r("", i && i.toStringTag || t("toStringTag")),
                    unscopables: r("", i && i.unscopables || t("unscopables"))
                })
            }
        },
        5651: function(t, e, n) {
            "use strict";
            var r = n(4159)
              , i = n(6738)
              , o = Object.create(null);
            t.exports = function(t) {
                return Object.defineProperties(t, {
                    for: r((function(e) {
                        return o[e] ? o[e] : o[e] = t(String(e))
                    }
                    )),
                    keyFor: r((function(t) {
                        var e;
                        for (e in i(t),
                        o)
                            if (o[e] === t)
                                return e
                    }
                    ))
                })
            }
        },
        1724: function(t, e, n) {
            "use strict";
            var r, i, o, a = n(4159), s = n(6738), u = n(659).Symbol, c = n(4664), l = n(2716), f = n(5651), d = Object.create, p = Object.defineProperties, h = Object.defineProperty;
            if ("function" == typeof u)
                try {
                    String(u()),
                    o = !0
                } catch (t) {}
            else
                u = null;
            i = function(t) {
                if (this instanceof i)
                    throw new TypeError("Symbol is not a constructor");
                return r(t)
            }
            ,
            t.exports = r = function t(e) {
                var n;
                if (this instanceof t)
                    throw new TypeError("Symbol is not a constructor");
                return o ? u(e) : (n = d(i.prototype),
                e = void 0 === e ? "" : String(e),
                p(n, {
                    __description__: a("", e),
                    __name__: a("", c(e))
                }))
            }
            ,
            l(r),
            f(r),
            p(i.prototype, {
                constructor: a(r),
                toString: a("", (function() {
                    return this.__name__
                }
                ))
            }),
            p(r.prototype, {
                toString: a((function() {
                    return "Symbol (" + s(this).__description__ + ")"
                }
                )),
                valueOf: a((function() {
                    return s(this)
                }
                ))
            }),
            h(r.prototype, r.toPrimitive, a("", (function() {
                var t = s(this);
                return "symbol" == typeof t ? t : t.toString()
            }
            ))),
            h(r.prototype, r.toStringTag, a("c", "Symbol")),
            h(i.prototype, r.toStringTag, a("c", r.prototype[r.toStringTag])),
            h(i.prototype, r.toPrimitive, a("c", r.prototype[r.toPrimitive]))
        },
        6738: function(t, e, n) {
            "use strict";
            var r = n(429);
            t.exports = function(t) {
                if (!r(t))
                    throw new TypeError(t + " is not a symbol");
                return t
            }
        },
        3668: function(t) {
            var e = function() {
                if ("object" == typeof self && self)
                    return self;
                if ("object" == typeof window && window)
                    return window;
                throw new Error("Unable to resolve global `this`")
            };
            t.exports = function() {
                if (this)
                    return this;
                try {
                    Object.defineProperty(Object.prototype, "__global__", {
                        get: function() {
                            return this
                        },
                        configurable: !0
                    })
                } catch (t) {
                    return e()
                }
                try {
                    return __global__ || e()
                } finally {
                    delete Object.prototype.__global__
                }
            }()
        },
        659: function(t, e, n) {
            "use strict";
            t.exports = n(1323)() ? globalThis : n(3668)
        },
        1323: function(t) {
            "use strict";
            t.exports = function() {
                return "object" == typeof globalThis && (!!globalThis && globalThis.Array === Array)
            }
        },
        5355: function(t, e, n) {
            var r;
            !function(e) {
                "use strict";
                var i = function() {}
                  , o = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                    return setTimeout(t, 16)
                }
                ;
                function a() {
                    var t = this;
                    t.reads = [],
                    t.writes = [],
                    t.raf = o.bind(e),
                    i("initialized", t)
                }
                function s(t) {
                    t.scheduled || (t.scheduled = !0,
                    t.raf(u.bind(null, t)),
                    i("flush scheduled"))
                }
                function u(t) {
                    i("flush");
                    var e, n = t.writes, r = t.reads;
                    try {
                        i("flushing reads", r.length),
                        c(r),
                        i("flushing writes", n.length),
                        c(n)
                    } catch (t) {
                        e = t
                    }
                    if (t.scheduled = !1,
                    (r.length || n.length) && s(t),
                    e) {
                        if (i("task errored", e.message),
                        !t.catch)
                            throw e;
                        t.catch(e)
                    }
                }
                function c(t) {
                    var e;
                    for (i("run tasks"); e = t.shift(); )
                        e()
                }
                function l(t, e) {
                    var n = t.indexOf(e);
                    return !!~n && !!t.splice(n, 1)
                }
                a.prototype = {
                    constructor: a,
                    measure: function(t, e) {
                        i("measure");
                        var n = e ? t.bind(e) : t;
                        return this.reads.push(n),
                        s(this),
                        n
                    },
                    mutate: function(t, e) {
                        i("mutate");
                        var n = e ? t.bind(e) : t;
                        return this.writes.push(n),
                        s(this),
                        n
                    },
                    clear: function(t) {
                        return i("clear", t),
                        l(this.reads, t) || l(this.writes, t)
                    },
                    extend: function(t) {
                        if (i("extend", t),
                        "object" != typeof t)
                            throw new Error("expected object");
                        var e = Object.create(this);
                        return function(t, e) {
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = e[n])
                        }(e, t),
                        e.fastdom = this,
                        e.initialize && e.initialize(),
                        e
                    },
                    catch: null
                };
                var f = e.fastdom = e.fastdom || new a;
                void 0 === (r = function() {
                    return f
                }
                .call(f, n, f, t)) || (t.exports = r)
            }("undefined" != typeof window ? window : this)
        },
        6574: function(t) {
            "use strict";
            var e = "Function.prototype.bind called on incompatible "
              , n = Array.prototype.slice
              , r = Object.prototype.toString
              , i = "[object Function]";
            t.exports = function(t) {
                var o = this;
                if ("function" != typeof o || r.call(o) !== i)
                    throw new TypeError(e + o);
                for (var a, s = n.call(arguments, 1), u = function() {
                    if (this instanceof a) {
                        var e = o.apply(this, s.concat(n.call(arguments)));
                        return Object(e) === e ? e : this
                    }
                    return o.apply(t, s.concat(n.call(arguments)))
                }, c = Math.max(0, o.length - s.length), l = [], f = 0; f < c; f++)
                    l.push("$" + f);
                if (a = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(u),
                o.prototype) {
                    var d = function() {};
                    d.prototype = o.prototype,
                    a.prototype = new d,
                    d.prototype = null
                }
                return a
            }
        },
        4148: function(t, e, n) {
            "use strict";
            var r = n(6574);
            t.exports = Function.prototype.bind || r
        },
        5502: function(t, e, n) {
            "use strict";
            var r, i = SyntaxError, o = Function, a = TypeError, s = function(t) {
                try {
                    return o('"use strict"; return (' + t + ").constructor;")()
                } catch (t) {}
            }, u = Object.getOwnPropertyDescriptor;
            if (u)
                try {
                    u({}, "")
                } catch (t) {
                    u = null
                }
            var c = function() {
                throw new a
            }
              , l = u ? function() {
                try {
                    return c
                } catch (t) {
                    try {
                        return u(arguments, "callee").get
                    } catch (t) {
                        return c
                    }
                }
            }() : c
              , f = n(2499)()
              , d = Object.getPrototypeOf || function(t) {
                return t.__proto__
            }
              , p = {}
              , h = "undefined" == typeof Uint8Array ? r : d(Uint8Array)
              , m = {
                "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                "%ArrayIteratorPrototype%": f ? d([][Symbol.iterator]()) : r,
                "%AsyncFromSyncIteratorPrototype%": r,
                "%AsyncFunction%": p,
                "%AsyncGenerator%": p,
                "%AsyncGeneratorFunction%": p,
                "%AsyncIteratorPrototype%": p,
                "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
                "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                "%Boolean%": Boolean,
                "%DataView%": "undefined" == typeof DataView ? r : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
                "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
                "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
                "%Function%": o,
                "%GeneratorFunction%": p,
                "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
                "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
                "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": f ? d(d([][Symbol.iterator]())) : r,
                "%JSON%": "object" == typeof JSON ? JSON : r,
                "%Map%": "undefined" == typeof Map ? r : Map,
                "%MapIteratorPrototype%": "undefined" != typeof Map && f ? d((new Map)[Symbol.iterator]()) : r,
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": "undefined" == typeof Promise ? r : Promise,
                "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
                "%RegExp%": RegExp,
                "%Set%": "undefined" == typeof Set ? r : Set,
                "%SetIteratorPrototype%": "undefined" != typeof Set && f ? d((new Set)[Symbol.iterator]()) : r,
                "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": f ? d(""[Symbol.iterator]()) : r,
                "%Symbol%": f ? Symbol : r,
                "%SyntaxError%": i,
                "%ThrowTypeError%": l,
                "%TypedArray%": h,
                "%TypeError%": a,
                "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
                "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
                "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
                "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
                "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
            }
              , y = function t(e) {
                var n;
                if ("%AsyncFunction%" === e)
                    n = s("async function () {}");
                else if ("%GeneratorFunction%" === e)
                    n = s("function* () {}");
                else if ("%AsyncGeneratorFunction%" === e)
                    n = s("async function* () {}");
                else if ("%AsyncGenerator%" === e) {
                    var r = t("%AsyncGeneratorFunction%");
                    r && (n = r.prototype)
                } else if ("%AsyncIteratorPrototype%" === e) {
                    var i = t("%AsyncGenerator%");
                    i && (n = d(i.prototype))
                }
                return m[e] = n,
                n
            }
              , g = {
                "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                "%ArrayPrototype%": ["Array", "prototype"],
                "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                "%ArrayProto_values%": ["Array", "prototype", "values"],
                "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                "%BooleanPrototype%": ["Boolean", "prototype"],
                "%DataViewPrototype%": ["DataView", "prototype"],
                "%DatePrototype%": ["Date", "prototype"],
                "%ErrorPrototype%": ["Error", "prototype"],
                "%EvalErrorPrototype%": ["EvalError", "prototype"],
                "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                "%FunctionPrototype%": ["Function", "prototype"],
                "%Generator%": ["GeneratorFunction", "prototype"],
                "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                "%JSONParse%": ["JSON", "parse"],
                "%JSONStringify%": ["JSON", "stringify"],
                "%MapPrototype%": ["Map", "prototype"],
                "%NumberPrototype%": ["Number", "prototype"],
                "%ObjectPrototype%": ["Object", "prototype"],
                "%ObjProto_toString%": ["Object", "prototype", "toString"],
                "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                "%PromisePrototype%": ["Promise", "prototype"],
                "%PromiseProto_then%": ["Promise", "prototype", "then"],
                "%Promise_all%": ["Promise", "all"],
                "%Promise_reject%": ["Promise", "reject"],
                "%Promise_resolve%": ["Promise", "resolve"],
                "%RangeErrorPrototype%": ["RangeError", "prototype"],
                "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                "%RegExpPrototype%": ["RegExp", "prototype"],
                "%SetPrototype%": ["Set", "prototype"],
                "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                "%StringPrototype%": ["String", "prototype"],
                "%SymbolPrototype%": ["Symbol", "prototype"],
                "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                "%TypeErrorPrototype%": ["TypeError", "prototype"],
                "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                "%URIErrorPrototype%": ["URIError", "prototype"],
                "%WeakMapPrototype%": ["WeakMap", "prototype"],
                "%WeakSetPrototype%": ["WeakSet", "prototype"]
            }
              , v = n(4148)
              , b = n(3494)
              , w = v.call(Function.call, Array.prototype.concat)
              , x = v.call(Function.apply, Array.prototype.splice)
              , E = v.call(Function.call, String.prototype.replace)
              , S = v.call(Function.call, String.prototype.slice)
              , T = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
              , k = /\\(\\)?/g
              , O = function(t) {
                var e = S(t, 0, 1)
                  , n = S(t, -1);
                if ("%" === e && "%" !== n)
                    throw new i("invalid intrinsic syntax, expected closing `%`");
                if ("%" === n && "%" !== e)
                    throw new i("invalid intrinsic syntax, expected opening `%`");
                var r = [];
                return E(t, T, (function(t, e, n, i) {
                    r[r.length] = n ? E(i, k, "$1") : e || t
                }
                )),
                r
            }
              , _ = function(t, e) {
                var n, r = t;
                if (b(g, r) && (r = "%" + (n = g[r])[0] + "%"),
                b(m, r)) {
                    var o = m[r];
                    if (o === p && (o = y(r)),
                    void 0 === o && !e)
                        throw new a("intrinsic " + t + " exists, but is not available. Please file an issue!");
                    return {
                        alias: n,
                        name: r,
                        value: o
                    }
                }
                throw new i("intrinsic " + t + " does not exist!")
            };
            t.exports = function(t, e) {
                if ("string" != typeof t || 0 === t.length)
                    throw new a("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof e)
                    throw new a('"allowMissing" argument must be a boolean');
                var n = O(t)
                  , r = n.length > 0 ? n[0] : ""
                  , o = _("%" + r + "%", e)
                  , s = o.name
                  , c = o.value
                  , l = !1
                  , f = o.alias;
                f && (r = f[0],
                x(n, w([0, 1], f)));
                for (var d = 1, p = !0; d < n.length; d += 1) {
                    var h = n[d]
                      , y = S(h, 0, 1)
                      , g = S(h, -1);
                    if (('"' === y || "'" === y || "`" === y || '"' === g || "'" === g || "`" === g) && y !== g)
                        throw new i("property names with quotes must have matching quotes");
                    if ("constructor" !== h && p || (l = !0),
                    b(m, s = "%" + (r += "." + h) + "%"))
                        c = m[s];
                    else if (null != c) {
                        if (!(h in c)) {
                            if (!e)
                                throw new a("base intrinsic for " + t + " exists, but the property is not available.");
                            return
                        }
                        if (u && d + 1 >= n.length) {
                            var v = u(c, h);
                            c = (p = !!v) && "get"in v && !("originalValue"in v.get) ? v.get : c[h]
                        } else
                            p = b(c, h),
                            c = c[h];
                        p && !l && (m[s] = c)
                    }
                }
                return c
            }
        },
        9698: function() {
            !function(t, e) {
                "use strict";
                if (!/Edge\/\d+/i.test(navigator.userAgent) && "IntersectionObserver"in t && "IntersectionObserverEntry"in t && "intersectionRatio"in t.IntersectionObserverEntry.prototype)
                    "isIntersecting"in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                else {
                    var n = [];
                    i.prototype.THROTTLE_TIMEOUT = 100,
                    i.prototype.POLL_INTERVAL = null,
                    i.prototype.USE_MUTATION_OBSERVER = !0,
                    i.prototype.observe = function(t) {
                        if (!this._observationTargets.some((function(e) {
                            return e.element == t
                        }
                        ))) {
                            if (!t || 1 != t.nodeType)
                                throw new Error("target must be an Element");
                            this._registerInstance(),
                            this._observationTargets.push({
                                element: t,
                                entry: null
                            }),
                            this._monitorIntersections(),
                            this._checkForIntersections()
                        }
                    }
                    ,
                    i.prototype.unobserve = function(t) {
                        this._observationTargets = this._observationTargets.filter((function(e) {
                            return e.element != t
                        }
                        )),
                        this._observationTargets.length || (this._unmonitorIntersections(),
                        this._unregisterInstance())
                    }
                    ,
                    i.prototype.disconnect = function() {
                        this._observationTargets = [],
                        this._unmonitorIntersections(),
                        this._unregisterInstance()
                    }
                    ,
                    i.prototype.takeRecords = function() {
                        var t = this._queuedEntries.slice();
                        return this._queuedEntries = [],
                        t
                    }
                    ,
                    i.prototype._initThresholds = function(t) {
                        var e = t || [0];
                        return Array.isArray(e) || (e = [e]),
                        e.sort().filter((function(t, e, n) {
                            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                                throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return t !== n[e - 1]
                        }
                        ))
                    }
                    ,
                    i.prototype._parseRootMargin = function(t) {
                        var e = (t || "0px").split(/\s+/).map((function(t) {
                            var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                            if (!e)
                                throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(e[1]),
                                unit: e[2]
                            }
                        }
                        ));
                        return e[1] = e[1] || e[0],
                        e[2] = e[2] || e[0],
                        e[3] = e[3] || e[1],
                        e
                    }
                    ,
                    i.prototype._monitorIntersections = function() {
                        this._monitoringIntersections || (this._monitoringIntersections = !0,
                        this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(t, "resize", this._checkForIntersections, !0),
                        o(e, "scroll", this._checkForIntersections, !0),
                        this.USE_MUTATION_OBSERVER && "MutationObserver"in t && (this._domObserver = new MutationObserver(this._checkForIntersections),
                        this._domObserver.observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))))
                    }
                    ,
                    i.prototype._unmonitorIntersections = function() {
                        this._monitoringIntersections && (this._monitoringIntersections = !1,
                        clearInterval(this._monitoringInterval),
                        this._monitoringInterval = null,
                        a(t, "resize", this._checkForIntersections, !0),
                        a(e, "scroll", this._checkForIntersections, !0),
                        this._domObserver && (this._domObserver.disconnect(),
                        this._domObserver = null))
                    }
                    ,
                    i.prototype._checkForIntersections = function() {
                        var e = this._rootIsInDom()
                          , n = e ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                        this._observationTargets.forEach((function(i) {
                            var o = i.element
                              , a = s(o)
                              , u = this._rootContainsTarget(o)
                              , c = i.entry
                              , l = e && u && this._computeTargetAndRootIntersection(o, n)
                              , f = i.entry = new r({
                                time: t.performance && performance.now && performance.now(),
                                target: o,
                                boundingClientRect: a,
                                rootBounds: n,
                                intersectionRect: l
                            });
                            c ? e && u ? this._hasCrossedThreshold(c, f) && this._queuedEntries.push(f) : c && c.isIntersecting && this._queuedEntries.push(f) : this._queuedEntries.push(f)
                        }
                        ), this),
                        this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }
                    ,
                    i.prototype._computeTargetAndRootIntersection = function(n, r) {
                        if ("none" != t.getComputedStyle(n).display) {
                            for (var i, o, a, u, l, f, d, p, h = s(n), m = c(n), y = !1; !y; ) {
                                var g = null
                                  , v = 1 == m.nodeType ? t.getComputedStyle(m) : {};
                                if ("none" == v.display)
                                    return;
                                if (m == this.root || m == e ? (y = !0,
                                g = r) : m != e.body && m != e.documentElement && "visible" != v.overflow && (g = s(m)),
                                g && (i = g,
                                o = h,
                                a = void 0,
                                u = void 0,
                                l = void 0,
                                f = void 0,
                                d = void 0,
                                p = void 0,
                                a = Math.max(i.top, o.top),
                                u = Math.min(i.bottom, o.bottom),
                                l = Math.max(i.left, o.left),
                                f = Math.min(i.right, o.right),
                                p = u - a,
                                !(h = (d = f - l) >= 0 && p >= 0 && {
                                    top: a,
                                    bottom: u,
                                    left: l,
                                    right: f,
                                    width: d,
                                    height: p
                                })))
                                    break;
                                m = c(m)
                            }
                            return h
                        }
                    }
                    ,
                    i.prototype._getRootRect = function() {
                        var t;
                        if (this.root)
                            t = s(this.root);
                        else {
                            var n = e.documentElement
                              , r = e.body;
                            t = {
                                top: 0,
                                left: 0,
                                right: n.clientWidth || r.clientWidth,
                                width: n.clientWidth || r.clientWidth,
                                bottom: n.clientHeight || r.clientHeight,
                                height: n.clientHeight || r.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(t)
                    }
                    ,
                    i.prototype._expandRectByRootMargin = function(t) {
                        var e = this._rootMarginValues.map((function(e, n) {
                            return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                        }
                        ))
                          , n = {
                            top: t.top - e[0],
                            right: t.right + e[1],
                            bottom: t.bottom + e[2],
                            left: t.left - e[3]
                        };
                        return n.width = n.right - n.left,
                        n.height = n.bottom - n.top,
                        n
                    }
                    ,
                    i.prototype._hasCrossedThreshold = function(t, e) {
                        var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1
                          , r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                        if (n !== r)
                            for (var i = 0; i < this.thresholds.length; i++) {
                                var o = this.thresholds[i];
                                if (o == n || o == r || o < n != o < r)
                                    return !0
                            }
                    }
                    ,
                    i.prototype._rootIsInDom = function() {
                        return !this.root || u(e, this.root)
                    }
                    ,
                    i.prototype._rootContainsTarget = function(t) {
                        return u(this.root || e, t)
                    }
                    ,
                    i.prototype._registerInstance = function() {
                        n.indexOf(this) < 0 && n.push(this)
                    }
                    ,
                    i.prototype._unregisterInstance = function() {
                        var t = n.indexOf(this);
                        -1 != t && n.splice(t, 1)
                    }
                    ,
                    t.IntersectionObserver = i,
                    t.IntersectionObserverEntry = r
                }
                function r(t) {
                    this.time = t.time,
                    this.target = t.target,
                    this.rootBounds = t.rootBounds,
                    this.boundingClientRect = t.boundingClientRect,
                    this.intersectionRect = t.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    },
                    this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect
                      , n = e.width * e.height
                      , r = this.intersectionRect
                      , i = r.width * r.height;
                    this.intersectionRatio = n ? i / n : this.isIntersecting ? 1 : 0
                }
                function i(t, e) {
                    var n, r, i, o = e || {};
                    if ("function" != typeof t)
                        throw new Error("callback must be a function");
                    if (o.root && 1 != o.root.nodeType)
                        throw new Error("root must be an Element");
                    this._checkForIntersections = (n = this._checkForIntersections.bind(this),
                    r = this.THROTTLE_TIMEOUT,
                    i = null,
                    function() {
                        i || (i = setTimeout((function() {
                            n(),
                            i = null
                        }
                        ), r))
                    }
                    ),
                    this._callback = t,
                    this._observationTargets = [],
                    this._queuedEntries = [],
                    this._rootMarginValues = this._parseRootMargin(o.rootMargin),
                    this.thresholds = this._initThresholds(o.threshold),
                    this.root = o.root || null,
                    this.rootMargin = this._rootMarginValues.map((function(t) {
                        return t.value + t.unit
                    }
                    )).join(" ")
                }
                function o(t, e, n, r) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
                }
                function a(t, e, n, r) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
                }
                function s(t) {
                    var e;
                    try {
                        e = t.getBoundingClientRect()
                    } catch (t) {}
                    return e ? (e.width && e.height || (e = {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    }),
                    e) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }
                function u(t, e) {
                    for (var n = e; n; ) {
                        if (n == t)
                            return !0;
                        n = c(n)
                    }
                    return !1
                }
                function c(t) {
                    var e = t.parentNode;
                    return e && 11 == e.nodeType && e.host ? e.host : e
                }
            }(window, document)
        },
        2499: function(t, e, n) {
            "use strict";
            var r = "undefined" != typeof Symbol && Symbol
              , i = n(2171);
            t.exports = function() {
                return "function" == typeof r && ("function" == typeof Symbol && ("symbol" == typeof r("foo") && ("symbol" == typeof Symbol("bar") && i())))
            }
        },
        2171: function(t) {
            "use strict";
            t.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
                    return !1;
                if ("symbol" == typeof Symbol.iterator)
                    return !0;
                var t = {}
                  , e = Symbol("test")
                  , n = Object(e);
                if ("string" == typeof e)
                    return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(e))
                    return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(n))
                    return !1;
                for (e in t[e] = 42,
                t)
                    return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(t).length)
                    return !1;
                if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length)
                    return !1;
                var r = Object.getOwnPropertySymbols(t);
                if (1 !== r.length || r[0] !== e)
                    return !1;
                if (!Object.prototype.propertyIsEnumerable.call(t, e))
                    return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var i = Object.getOwnPropertyDescriptor(t, e);
                    if (42 !== i.value || !0 !== i.enumerable)
                        return !1
                }
                return !0
            }
        },
        3825: function(t, e, n) {
            "use strict";
            var r = n(2171);
            t.exports = function() {
                return r() && !!Symbol.toStringTag
            }
        },
        3494: function(t, e, n) {
            "use strict";
            var r = n(4148);
            t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
        },
        956: function(t) {
            var e = []
              , n = [];
            function r(t, r) {
                if (r = r || {},
                void 0 === t)
                    throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");
                var i, o = !0 === r.prepend ? "prepend" : "append", a = void 0 !== r.container ? r.container : document.querySelector("head"), s = e.indexOf(a);
                return -1 === s && (s = e.push(a) - 1,
                n[s] = {}),
                void 0 !== n[s] && void 0 !== n[s][o] ? i = n[s][o] : (i = n[s][o] = function() {
                    var t = document.createElement("style");
                    return t.setAttribute("type", "text/css"),
                    t
                }(),
                "prepend" === o ? a.insertBefore(i, a.childNodes[0]) : a.appendChild(i)),
                65279 === t.charCodeAt(0) && (t = t.substr(1, t.length)),
                i.styleSheet ? i.styleSheet.cssText += t : i.textContent += t,
                i
            }
            t.exports = r,
            t.exports.insertCss = r
        },
        7704: function(t) {
            "use strict";
            var e, n, r = Function.prototype.toString, i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
            if ("function" == typeof i && "function" == typeof Object.defineProperty)
                try {
                    e = Object.defineProperty({}, "length", {
                        get: function() {
                            throw n
                        }
                    }),
                    n = {},
                    i((function() {
                        throw 42
                    }
                    ), null, e)
                } catch (t) {
                    t !== n && (i = null)
                }
            else
                i = null;
            var o = /^\s*class\b/
              , a = function(t) {
                try {
                    var e = r.call(t);
                    return o.test(e)
                } catch (t) {
                    return !1
                }
            }
              , s = Object.prototype.toString
              , u = "function" == typeof Symbol && !!Symbol.toStringTag
              , c = "object" == typeof document && void 0 === document.all && void 0 !== document.all ? document.all : {};
            t.exports = i ? function(t) {
                if (t === c)
                    return !0;
                if (!t)
                    return !1;
                if ("function" != typeof t && "object" != typeof t)
                    return !1;
                if ("function" == typeof t && !t.prototype)
                    return !0;
                try {
                    i(t, null, e)
                } catch (t) {
                    if (t !== n)
                        return !1
                }
                return !a(t)
            }
            : function(t) {
                if (t === c)
                    return !0;
                if (!t)
                    return !1;
                if ("function" != typeof t && "object" != typeof t)
                    return !1;
                if ("function" == typeof t && !t.prototype)
                    return !0;
                if (u)
                    return function(t) {
                        try {
                            return !a(t) && (r.call(t),
                            !0)
                        } catch (t) {
                            return !1
                        }
                    }(t);
                if (a(t))
                    return !1;
                var e = s.call(t);
                return "[object Function]" === e || "[object GeneratorFunction]" === e
            }
        },
        8811: function(t, e, n) {
            "use strict";
            var r = Date.prototype.getDay
              , i = Object.prototype.toString
              , o = n(3825)();
            t.exports = function(t) {
                return "object" == typeof t && null !== t && (o ? function(t) {
                    try {
                        return r.call(t),
                        !0
                    } catch (t) {
                        return !1
                    }
                }(t) : "[object Date]" === i.call(t))
            }
        },
        8025: function(t, e, n) {
            "use strict";
            var r, i, o, a, s = n(7372), u = n(3825)();
            if (u) {
                r = s("Object.prototype.hasOwnProperty"),
                i = s("RegExp.prototype.exec"),
                o = {};
                var c = function() {
                    throw o
                };
                a = {
                    toString: c,
                    valueOf: c
                },
                "symbol" == typeof Symbol.toPrimitive && (a[Symbol.toPrimitive] = c)
            }
            var l = s("Object.prototype.toString")
              , f = Object.getOwnPropertyDescriptor;
            t.exports = u ? function(t) {
                if (!t || "object" != typeof t)
                    return !1;
                var e = f(t, "lastIndex");
                if (!(e && r(e, "value")))
                    return !1;
                try {
                    i(t, a)
                } catch (t) {
                    return t === o
                }
            }
            : function(t) {
                return !(!t || "object" != typeof t && "function" != typeof t) && "[object RegExp]" === l(t)
            }
        },
        8631: function(t, e, n) {
            "use strict";
            var r = String.prototype.valueOf
              , i = Object.prototype.toString
              , o = n(3825)();
            t.exports = function(t) {
                return "string" == typeof t || "object" == typeof t && (o ? function(t) {
                    try {
                        return r.call(t),
                        !0
                    } catch (t) {
                        return !1
                    }
                }(t) : "[object String]" === i.call(t))
            }
        },
        58: function(t, e, n) {
            "use strict";
            var r = Object.prototype.toString;
            if (n(2499)()) {
                var i = Symbol.prototype.toString
                  , o = /^Symbol\(.*\)$/;
                t.exports = function(t) {
                    if ("symbol" == typeof t)
                        return !0;
                    if ("[object Symbol]" !== r.call(t))
                        return !1;
                    try {
                        return function(t) {
                            return "symbol" == typeof t.valueOf() && o.test(i.call(t))
                        }(t)
                    } catch (t) {
                        return !1
                    }
                }
            } else
                t.exports = function(t) {
                    return !1
                }
        },
        5363: function(t, e, n) {
            var r = "function" == typeof Map && Map.prototype
              , i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
              , o = r && i && "function" == typeof i.get ? i.get : null
              , a = r && Map.prototype.forEach
              , s = "function" == typeof Set && Set.prototype
              , u = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
              , c = s && u && "function" == typeof u.get ? u.get : null
              , l = s && Set.prototype.forEach
              , f = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null
              , d = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null
              , p = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null
              , h = Boolean.prototype.valueOf
              , m = Object.prototype.toString
              , y = Function.prototype.toString
              , g = String.prototype.match
              , v = String.prototype.slice
              , b = String.prototype.replace
              , w = String.prototype.toUpperCase
              , x = String.prototype.toLowerCase
              , E = RegExp.prototype.test
              , S = Array.prototype.concat
              , T = Array.prototype.join
              , k = Array.prototype.slice
              , O = Math.floor
              , _ = "function" == typeof BigInt ? BigInt.prototype.valueOf : null
              , A = Object.getOwnPropertySymbols
              , P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null
              , I = "function" == typeof Symbol && "object" == typeof Symbol.iterator
              , C = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === I || "symbol") ? Symbol.toStringTag : null
              , j = Object.prototype.propertyIsEnumerable
              , L = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
                return t.__proto__
            }
            : null);
            function N(t, e) {
                if (t === 1 / 0 || t === -1 / 0 || t != t || t && t > -1e3 && t < 1e3 || E.call(/e/, e))
                    return e;
                var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" == typeof t) {
                    var r = t < 0 ? -O(-t) : O(t);
                    if (r !== t) {
                        var i = String(r)
                          , o = v.call(e, i.length + 1);
                        return b.call(i, n, "$&_") + "." + b.call(b.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
                    }
                }
                return b.call(e, n, "$&_")
            }
            var R = n(6050).custom
              , M = R && H(R) ? R : null;
            function F(t, e, n) {
                var r = "double" === (n.quoteStyle || e) ? '"' : "'";
                return r + t + r
            }
            function D(t) {
                return b.call(String(t), /"/g, "&quot;")
            }
            function B(t) {
                return !("[object Array]" !== W(t) || C && "object" == typeof t && C in t)
            }
            function H(t) {
                if (I)
                    return t && "object" == typeof t && t instanceof Symbol;
                if ("symbol" == typeof t)
                    return !0;
                if (!t || "object" != typeof t || !P)
                    return !1;
                try {
                    return P.call(t),
                    !0
                } catch (t) {}
                return !1
            }
            t.exports = function t(e, n, r, i) {
                var s = n || {};
                if (U(s, "quoteStyle") && "single" !== s.quoteStyle && "double" !== s.quoteStyle)
                    throw new TypeError('option "quoteStyle" must be "single" or "double"');
                if (U(s, "maxStringLength") && ("number" == typeof s.maxStringLength ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : null !== s.maxStringLength))
                    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                var u = !U(s, "customInspect") || s.customInspect;
                if ("boolean" != typeof u && "symbol" !== u)
                    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                if (U(s, "indent") && null !== s.indent && "\t" !== s.indent && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
                    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                if (U(s, "numericSeparator") && "boolean" != typeof s.numericSeparator)
                    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                var m = s.numericSeparator;
                if (void 0 === e)
                    return "undefined";
                if (null === e)
                    return "null";
                if ("boolean" == typeof e)
                    return e ? "true" : "false";
                if ("string" == typeof e)
                    return $(e, s);
                if ("number" == typeof e) {
                    if (0 === e)
                        return 1 / 0 / e > 0 ? "0" : "-0";
                    var w = String(e);
                    return m ? N(e, w) : w
                }
                if ("bigint" == typeof e) {
                    var E = String(e) + "n";
                    return m ? N(e, E) : E
                }
                var O = void 0 === s.depth ? 5 : s.depth;
                if (void 0 === r && (r = 0),
                r >= O && O > 0 && "object" == typeof e)
                    return B(e) ? "[Array]" : "[Object]";
                var A = function(t, e) {
                    var n;
                    if ("\t" === t.indent)
                        n = "\t";
                    else {
                        if (!("number" == typeof t.indent && t.indent > 0))
                            return null;
                        n = T.call(Array(t.indent + 1), " ")
                    }
                    return {
                        base: n,
                        prev: T.call(Array(e + 1), n)
                    }
                }(s, r);
                if (void 0 === i)
                    i = [];
                else if (V(i, e) >= 0)
                    return "[Circular]";
                function R(e, n, o) {
                    if (n && (i = k.call(i)).push(n),
                    o) {
                        var a = {
                            depth: s.depth
                        };
                        return U(s, "quoteStyle") && (a.quoteStyle = s.quoteStyle),
                        t(e, a, r + 1, i)
                    }
                    return t(e, s, r + 1, i)
                }
                if ("function" == typeof e) {
                    var z = function(t) {
                        if (t.name)
                            return t.name;
                        var e = g.call(y.call(t), /^function\s*([\w$]+)/);
                        if (e)
                            return e[1];
                        return null
                    }(e)
                      , q = J(e, R);
                    return "[Function" + (z ? ": " + z : " (anonymous)") + "]" + (q.length > 0 ? " { " + T.call(q, ", ") + " }" : "")
                }
                if (H(e)) {
                    var Z = I ? b.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : P.call(e);
                    return "object" != typeof e || I ? Z : Y(Z)
                }
                if (function(t) {
                    if (!t || "object" != typeof t)
                        return !1;
                    if ("undefined" != typeof HTMLElement && t instanceof HTMLElement)
                        return !0;
                    return "string" == typeof t.nodeName && "function" == typeof t.getAttribute
                }(e)) {
                    for (var Q = "<" + x.call(String(e.nodeName)), tt = e.attributes || [], et = 0; et < tt.length; et++)
                        Q += " " + tt[et].name + "=" + F(D(tt[et].value), "double", s);
                    return Q += ">",
                    e.childNodes && e.childNodes.length && (Q += "..."),
                    Q += "</" + x.call(String(e.nodeName)) + ">"
                }
                if (B(e)) {
                    if (0 === e.length)
                        return "[]";
                    var nt = J(e, R);
                    return A && !function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (V(t[e], "\n") >= 0)
                                return !1;
                        return !0
                    }(nt) ? "[" + X(nt, A) + "]" : "[ " + T.call(nt, ", ") + " ]"
                }
                if (function(t) {
                    return !("[object Error]" !== W(t) || C && "object" == typeof t && C in t)
                }(e)) {
                    var rt = J(e, R);
                    return "cause"in e && !j.call(e, "cause") ? "{ [" + String(e) + "] " + T.call(S.call("[cause]: " + R(e.cause), rt), ", ") + " }" : 0 === rt.length ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + T.call(rt, ", ") + " }"
                }
                if ("object" == typeof e && u) {
                    if (M && "function" == typeof e[M])
                        return e[M]();
                    if ("symbol" !== u && "function" == typeof e.inspect)
                        return e.inspect()
                }
                if (function(t) {
                    if (!o || !t || "object" != typeof t)
                        return !1;
                    try {
                        o.call(t);
                        try {
                            c.call(t)
                        } catch (t) {
                            return !0
                        }
                        return t instanceof Map
                    } catch (t) {}
                    return !1
                }(e)) {
                    var it = [];
                    return a.call(e, (function(t, n) {
                        it.push(R(n, e, !0) + " => " + R(t, e))
                    }
                    )),
                    K("Map", o.call(e), it, A)
                }
                if (function(t) {
                    if (!c || !t || "object" != typeof t)
                        return !1;
                    try {
                        c.call(t);
                        try {
                            o.call(t)
                        } catch (t) {
                            return !0
                        }
                        return t instanceof Set
                    } catch (t) {}
                    return !1
                }(e)) {
                    var ot = [];
                    return l.call(e, (function(t) {
                        ot.push(R(t, e))
                    }
                    )),
                    K("Set", c.call(e), ot, A)
                }
                if (function(t) {
                    if (!f || !t || "object" != typeof t)
                        return !1;
                    try {
                        f.call(t, f);
                        try {
                            d.call(t, d)
                        } catch (t) {
                            return !0
                        }
                        return t instanceof WeakMap
                    } catch (t) {}
                    return !1
                }(e))
                    return G("WeakMap");
                if (function(t) {
                    if (!d || !t || "object" != typeof t)
                        return !1;
                    try {
                        d.call(t, d);
                        try {
                            f.call(t, f)
                        } catch (t) {
                            return !0
                        }
                        return t instanceof WeakSet
                    } catch (t) {}
                    return !1
                }(e))
                    return G("WeakSet");
                if (function(t) {
                    if (!p || !t || "object" != typeof t)
                        return !1;
                    try {
                        return p.call(t),
                        !0
                    } catch (t) {}
                    return !1
                }(e))
                    return G("WeakRef");
                if (function(t) {
                    return !("[object Number]" !== W(t) || C && "object" == typeof t && C in t)
                }(e))
                    return Y(R(Number(e)));
                if (function(t) {
                    if (!t || "object" != typeof t || !_)
                        return !1;
                    try {
                        return _.call(t),
                        !0
                    } catch (t) {}
                    return !1
                }(e))
                    return Y(R(_.call(e)));
                if (function(t) {
                    return !("[object Boolean]" !== W(t) || C && "object" == typeof t && C in t)
                }(e))
                    return Y(h.call(e));
                if (function(t) {
                    return !("[object String]" !== W(t) || C && "object" == typeof t && C in t)
                }(e))
                    return Y(R(String(e)));
                if (!function(t) {
                    return !("[object Date]" !== W(t) || C && "object" == typeof t && C in t)
                }(e) && !function(t) {
                    return !("[object RegExp]" !== W(t) || C && "object" == typeof t && C in t)
                }(e)) {
                    var at = J(e, R)
                      , st = L ? L(e) === Object.prototype : e instanceof Object || e.constructor === Object
                      , ut = e instanceof Object ? "" : "null prototype"
                      , ct = !st && C && Object(e) === e && C in e ? v.call(W(e), 8, -1) : ut ? "Object" : ""
                      , lt = (st || "function" != typeof e.constructor ? "" : e.constructor.name ? e.constructor.name + " " : "") + (ct || ut ? "[" + T.call(S.call([], ct || [], ut || []), ": ") + "] " : "");
                    return 0 === at.length ? lt + "{}" : A ? lt + "{" + X(at, A) + "}" : lt + "{ " + T.call(at, ", ") + " }"
                }
                return String(e)
            }
            ;
            var z = Object.prototype.hasOwnProperty || function(t) {
                return t in this
            }
            ;
            function U(t, e) {
                return z.call(t, e)
            }
            function W(t) {
                return m.call(t)
            }
            function V(t, e) {
                if (t.indexOf)
                    return t.indexOf(e);
                for (var n = 0, r = t.length; n < r; n++)
                    if (t[n] === e)
                        return n;
                return -1
            }
            function $(t, e) {
                if (t.length > e.maxStringLength) {
                    var n = t.length - e.maxStringLength
                      , r = "... " + n + " more character" + (n > 1 ? "s" : "");
                    return $(v.call(t, 0, e.maxStringLength), e) + r
                }
                return F(b.call(b.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, q), "single", e)
            }
            function q(t) {
                var e = t.charCodeAt(0)
                  , n = {
                    8: "b",
                    9: "t",
                    10: "n",
                    12: "f",
                    13: "r"
                }[e];
                return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + w.call(e.toString(16))
            }
            function Y(t) {
                return "Object(" + t + ")"
            }
            function G(t) {
                return t + " { ? }"
            }
            function K(t, e, n, r) {
                return t + " (" + e + ") {" + (r ? X(n, r) : T.call(n, ", ")) + "}"
            }
            function X(t, e) {
                if (0 === t.length)
                    return "";
                var n = "\n" + e.prev + e.base;
                return n + T.call(t, "," + n) + "\n" + e.prev
            }
            function J(t, e) {
                var n = B(t)
                  , r = [];
                if (n) {
                    r.length = t.length;
                    for (var i = 0; i < t.length; i++)
                        r[i] = U(t, i) ? e(t[i], t) : ""
                }
                var o, a = "function" == typeof A ? A(t) : [];
                if (I) {
                    o = {};
                    for (var s = 0; s < a.length; s++)
                        o["$" + a[s]] = a[s]
                }
                for (var u in t)
                    U(t, u) && (n && String(Number(u)) === u && u < t.length || I && o["$" + u]instanceof Symbol || (E.call(/[^\w$]/, u) ? r.push(e(u, t) + ": " + e(t[u], t)) : r.push(u + ": " + e(t[u], t))));
                if ("function" == typeof A)
                    for (var c = 0; c < a.length; c++)
                        j.call(t, a[c]) && r.push("[" + e(a[c]) + "]: " + e(t[a[c]], t));
                return r
            }
        },
        3351: function(t, e, n) {
            "use strict";
            var r;
            if (!Object.keys) {
                var i = Object.prototype.hasOwnProperty
                  , o = Object.prototype.toString
                  , a = n(640)
                  , s = Object.prototype.propertyIsEnumerable
                  , u = !s.call({
                    toString: null
                }, "toString")
                  , c = s.call((function() {}
                ), "prototype")
                  , l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
                  , f = function(t) {
                    var e = t.constructor;
                    return e && e.prototype === t
                }
                  , d = {
                    $applicationCache: !0,
                    $console: !0,
                    $external: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $innerHeight: !0,
                    $innerWidth: !0,
                    $onmozfullscreenchange: !0,
                    $onmozfullscreenerror: !0,
                    $outerHeight: !0,
                    $outerWidth: !0,
                    $pageXOffset: !0,
                    $pageYOffset: !0,
                    $parent: !0,
                    $scrollLeft: !0,
                    $scrollTop: !0,
                    $scrollX: !0,
                    $scrollY: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0
                }
                  , p = function() {
                    if ("undefined" == typeof window)
                        return !1;
                    for (var t in window)
                        try {
                            if (!d["$" + t] && i.call(window, t) && null !== window[t] && "object" == typeof window[t])
                                try {
                                    f(window[t])
                                } catch (t) {
                                    return !0
                                }
                        } catch (t) {
                            return !0
                        }
                    return !1
                }();
                r = function(t) {
                    var e = null !== t && "object" == typeof t
                      , n = "[object Function]" === o.call(t)
                      , r = a(t)
                      , s = e && "[object String]" === o.call(t)
                      , d = [];
                    if (!e && !n && !r)
                        throw new TypeError("Object.keys called on a non-object");
                    var h = c && n;
                    if (s && t.length > 0 && !i.call(t, 0))
                        for (var m = 0; m < t.length; ++m)
                            d.push(String(m));
                    if (r && t.length > 0)
                        for (var y = 0; y < t.length; ++y)
                            d.push(String(y));
                    else
                        for (var g in t)
                            h && "prototype" === g || !i.call(t, g) || d.push(String(g));
                    if (u)
                        for (var v = function(t) {
                            if ("undefined" == typeof window || !p)
                                return f(t);
                            try {
                                return f(t)
                            } catch (t) {
                                return !1
                            }
                        }(t), b = 0; b < l.length; ++b)
                            v && "constructor" === l[b] || !i.call(t, l[b]) || d.push(l[b]);
                    return d
                }
            }
            t.exports = r
        },
        8315: function(t, e, n) {
            "use strict";
            var r = Array.prototype.slice
              , i = n(640)
              , o = Object.keys
              , a = o ? function(t) {
                return o(t)
            }
            : n(3351)
              , s = Object.keys;
            a.shim = function() {
                if (Object.keys) {
                    var t = function() {
                        var t = Object.keys(arguments);
                        return t && t.length === arguments.length
                    }(1, 2);
                    t || (Object.keys = function(t) {
                        return i(t) ? s(r.call(t)) : s(t)
                    }
                    )
                } else
                    Object.keys = a;
                return Object.keys || a
            }
            ,
            t.exports = a
        },
        640: function(t) {
            "use strict";
            var e = Object.prototype.toString;
            t.exports = function(t) {
                var n = e.call(t)
                  , r = "[object Arguments]" === n;
                return r || (r = "[object Array]" !== n && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === e.call(t.callee)),
                r
            }
        },
        3724: function() {
            !function() {
                "use strict";
                if ("undefined" != typeof window) {
                    var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./)
                      , e = t ? parseInt(t[1], 10) : null
                      , n = !!e && 16 <= e && e <= 18;
                    if ("objectFit"in document.documentElement.style == 0 || n) {
                        var r = function(t, e, n) {
                            var r, i, o, a, s;
                            if ((n = n.split(" ")).length < 2 && (n[1] = n[0]),
                            "x" === t)
                                r = n[0],
                                i = n[1],
                                o = "left",
                                a = "right",
                                s = e.clientWidth;
                            else {
                                if ("y" !== t)
                                    return;
                                r = n[1],
                                i = n[0],
                                o = "top",
                                a = "bottom",
                                s = e.clientHeight
                            }
                            if (r !== o && i !== o) {
                                if (r !== a && i !== a)
                                    return "center" === r || "50%" === r ? (e.style[o] = "50%",
                                    void (e.style["margin-" + o] = s / -2 + "px")) : void (0 <= r.indexOf("%") ? (r = parseInt(r, 10)) < 50 ? (e.style[o] = r + "%",
                                    e.style["margin-" + o] = s * (r / -100) + "px") : (r = 100 - r,
                                    e.style[a] = r + "%",
                                    e.style["margin-" + a] = s * (r / -100) + "px") : e.style[o] = r);
                                e.style[a] = "0"
                            } else
                                e.style[o] = "0"
                        }
                          , i = function(t) {
                            var e = t.dataset ? t.dataset.objectFit : t.getAttribute("data-object-fit")
                              , n = t.dataset ? t.dataset.objectPosition : t.getAttribute("data-object-position");
                            e = e || "cover",
                            n = n || "50% 50%";
                            var i = t.parentNode;
                            return function(t) {
                                var e = window.getComputedStyle(t, null)
                                  , n = e.getPropertyValue("position")
                                  , r = e.getPropertyValue("overflow")
                                  , i = e.getPropertyValue("display");
                                n && "static" !== n || (t.style.position = "relative"),
                                "hidden" !== r && (t.style.overflow = "hidden"),
                                i && "inline" !== i || (t.style.display = "block"),
                                0 === t.clientHeight && (t.style.height = "100%"),
                                -1 === t.className.indexOf("object-fit-polyfill") && (t.className = t.className + " object-fit-polyfill")
                            }(i),
                            function(t) {
                                var e = window.getComputedStyle(t, null)
                                  , n = {
                                    "max-width": "none",
                                    "max-height": "none",
                                    "min-width": "0px",
                                    "min-height": "0px",
                                    top: "auto",
                                    right: "auto",
                                    bottom: "auto",
                                    left: "auto",
                                    "margin-top": "0px",
                                    "margin-right": "0px",
                                    "margin-bottom": "0px",
                                    "margin-left": "0px"
                                };
                                for (var r in n)
                                    e.getPropertyValue(r) !== n[r] && (t.style[r] = n[r])
                            }(t),
                            t.style.position = "absolute",
                            t.style.width = "auto",
                            t.style.height = "auto",
                            "scale-down" === e && (e = t.clientWidth < i.clientWidth && t.clientHeight < i.clientHeight ? "none" : "contain"),
                            "none" === e ? (r("x", t, n),
                            void r("y", t, n)) : "fill" === e ? (t.style.width = "100%",
                            t.style.height = "100%",
                            r("x", t, n),
                            void r("y", t, n)) : (t.style.height = "100%",
                            void ("cover" === e && t.clientWidth > i.clientWidth || "contain" === e && t.clientWidth < i.clientWidth ? (t.style.top = "0",
                            t.style.marginTop = "0",
                            r("x", t, n)) : (t.style.width = "100%",
                            t.style.height = "auto",
                            t.style.left = "0",
                            t.style.marginLeft = "0",
                            r("y", t, n))))
                        }
                          , o = function(t) {
                            if (void 0 === t || t instanceof Event)
                                t = document.querySelectorAll("[data-object-fit]");
                            else if (t && t.nodeName)
                                t = [t];
                            else {
                                if ("object" != typeof t || !t.length || !t[0].nodeName)
                                    return !1;
                                t = t
                            }
                            for (var e = 0; e < t.length; e++)
                                if (t[e].nodeName) {
                                    var r = t[e].nodeName.toLowerCase();
                                    if ("img" === r) {
                                        if (n)
                                            continue;
                                        t[e].complete ? i(t[e]) : t[e].addEventListener("load", (function() {
                                            i(this)
                                        }
                                        ))
                                    } else
                                        "video" === r ? 0 < t[e].readyState ? i(t[e]) : t[e].addEventListener("loadedmetadata", (function() {
                                            i(this)
                                        }
                                        )) : i(t[e])
                                }
                            return !0
                        };
                        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", o) : o(),
                        window.addEventListener("resize", o),
                        window.objectFitPolyfill = o
                    } else
                        window.objectFitPolyfill = function() {
                            return !1
                        }
                }
            }()
        },
        9200: function(t) {
            var e, n;
            void 0 !== document.hidden ? (e = "hidden",
            n = "visibilitychange") : void 0 !== document.mozHidden ? (e = "mozHidden",
            n = "mozvisibilitychange") : void 0 !== document.msHidden ? (e = "msHidden",
            n = "msvisibilitychange") : void 0 !== document.webkitHidden && (e = "webkitHidden",
            n = "webkitvisibilitychange"),
            t.exports = {
                hidden: e,
                visibilityChange: n
            }
        },
        5853: function(t, e) {
            var n;
            !function(r, i) {
                "use strict";
                "object" == typeof t.exports ? t.exports = i(r, document) : void 0 === (n = function() {
                    return i(r, document)
                }
                .apply(e, [])) || (t.exports = n)
            }("undefined" != typeof window ? window : this, (function(t, e) {
                "use strict";
                function n() {
                    var t, n, r, i = navigator.userAgent, o = navigator.appName, a = "" + parseFloat(navigator.appVersion), s = parseInt(navigator.appVersion, 10), u = !1, c = !1, l = !1, f = !1;
                    return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (u = !0,
                    o = "IE",
                    a = "11") : -1 !== (n = i.indexOf("MSIE")) ? (u = !0,
                    o = "IE",
                    a = i.substring(n + 5)) : -1 !== (n = i.indexOf("Chrome")) ? (l = !0,
                    o = "Chrome",
                    a = i.substring(n + 7)) : -1 !== (n = i.indexOf("Safari")) ? (f = !0,
                    o = "Safari",
                    a = i.substring(n + 7),
                    -1 !== (n = i.indexOf("Version")) && (a = i.substring(n + 8))) : -1 !== (n = i.indexOf("Firefox")) ? (c = !0,
                    o = "Firefox",
                    a = i.substring(n + 8)) : (t = i.lastIndexOf(" ") + 1) < (n = i.lastIndexOf("/")) && (o = i.substring(t, n),
                    a = i.substring(n + 1),
                    o.toLowerCase() === o.toUpperCase() && (o = navigator.appName)),
                    -1 !== (r = a.indexOf(";")) && (a = a.substring(0, r)),
                    -1 !== (r = a.indexOf(" ")) && (a = a.substring(0, r)),
                    s = parseInt("" + a, 10),
                    isNaN(s) && (a = "" + parseFloat(navigator.appVersion),
                    s = parseInt(navigator.appVersion, 10)),
                    {
                        name: o,
                        version: s,
                        isIE: u,
                        isFirefox: c,
                        isChrome: l,
                        isSafari: f,
                        isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
                        isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
                        isTouch: "ontouchstart"in e.documentElement
                    }
                }
                function r(t) {
                    if (!e.querySelectorAll('script[src="' + t + '"]').length) {
                        var n = e.createElement("script");
                        n.src = t;
                        var r = e.getElementsByTagName("script")[0];
                        r.parentNode.insertBefore(n, r)
                    }
                }
                function i(t, e) {
                    return Array.prototype.indexOf && -1 !== t.indexOf(e)
                }
                function o(t, e, n) {
                    return t.replace(new RegExp(e.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"),"g"), n)
                }
                function a(t, e) {
                    t.length || (t = [t]);
                    for (var n = t.length - 1; n >= 0; n--) {
                        var r = n > 0 ? e.cloneNode(!0) : e
                          , i = t[n]
                          , o = i.parentNode
                          , a = i.nextSibling;
                        return r.appendChild(i),
                        a ? o.insertBefore(r, a) : o.appendChild(r),
                        r
                    }
                }
                function s(t) {
                    t && t.parentNode.removeChild(t)
                }
                function u(t, e) {
                    t.insertBefore(e, t.firstChild)
                }
                function c(t, e) {
                    for (var n in e)
                        t.setAttribute(n, P.boolean(e[n]) && e[n] ? "" : e[n])
                }
                function l(t, n, r) {
                    var i = e.createElement(t);
                    c(i, r),
                    u(n, i)
                }
                function f(t, e, n) {
                    if (t)
                        if (t.classList)
                            t.classList[n ? "add" : "remove"](e);
                        else {
                            var r = (" " + t.className + " ").replace(/\s+/g, " ").replace(" " + e + " ", "");
                            t.className = r + (n ? " " + e : "")
                        }
                }
                function d(t, e) {
                    return !!t && (t.classList ? t.classList.contains(e) : new RegExp("(\\s|^)" + e + "(\\s|$)").test(t.className))
                }
                function p(t, n) {
                    var r = Element.prototype;
                    return (r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || function(t) {
                        return -1 !== [].indexOf.call(e.querySelectorAll(t), this)
                    }
                    ).call(t, n)
                }
                function h(t, e, n, r, i) {
                    n && y(t, e, (function(e) {
                        n.apply(t, [e])
                    }
                    ), i),
                    y(t, e, (function(e) {
                        r.apply(t, [e])
                    }
                    ), i)
                }
                function m(t, e, n, r, i) {
                    var o = e.split(" ");
                    if (P.boolean(i) || (i = !1),
                    t instanceof NodeList)
                        for (var a = 0; a < t.length; a++)
                            t[a]instanceof Node && m(t[a], arguments[1], arguments[2], arguments[3]);
                    else
                        for (var s = 0; s < o.length; s++)
                            t[r ? "addEventListener" : "removeEventListener"](o[s], n, i)
                }
                function y(t, e, n, r) {
                    t && m(t, e, n, !0, r)
                }
                function g(t, e, n, r) {
                    t && m(t, e, n, !1, r)
                }
                function v(t, e, n, r) {
                    if (t && e) {
                        P.boolean(n) || (n = !1);
                        var i = new CustomEvent(e,{
                            bubbles: n,
                            detail: r
                        });
                        t.dispatchEvent(i)
                    }
                }
                function b(t, e) {
                    if (t)
                        return e = P.boolean(e) ? e : !t.getAttribute("aria-pressed"),
                        t.setAttribute("aria-pressed", e),
                        e
                }
                function w(t, e) {
                    return 0 === t || 0 === e || isNaN(t) || isNaN(e) ? 0 : (t / e * 100).toFixed(2)
                }
                function x() {
                    var t = arguments;
                    if (t.length) {
                        if (1 === t.length)
                            return t[0];
                        for (var e = Array.prototype.shift.call(t), n = t.length, r = 0; r < n; r++) {
                            var i = t[r];
                            for (var o in i)
                                i[o] && i[o].constructor && i[o].constructor === Object ? (e[o] = e[o] || {},
                                x(e[o], i[o])) : e[o] = i[o]
                        }
                        return e
                    }
                }
                function E(m, E) {
                    function C(t, e, n, r) {
                        v(t, e, n, x({}, r, {
                            plyr: jt
                        }))
                    }
                    function j(e, n) {
                        E.debug && t.console && (n = Array.prototype.slice.call(n),
                        P.string(E.logPrefix) && E.logPrefix.length && n.unshift(E.logPrefix),
                        console[e].apply(console, n))
                    }
                    function L() {
                        return {
                            url: E.iconUrl,
                            absolute: 0 === E.iconUrl.indexOf("http") || Lt.browser.isIE && !t.svg4everybody
                        }
                    }
                    function N() {
                        var t = []
                          , e = L()
                          , n = (e.absolute ? "" : e.url) + "#" + E.iconPrefix;
                        return i(E.controls, "play-large") && t.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + E.i18n.play + "</span>", "</button>"),
                        t.push('<div class="plyr__controls">'),
                        i(E.controls, "restart") && t.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + n + '-restart" /></svg>', '<span class="plyr__sr-only">' + E.i18n.restart + "</span>", "</button>"),
                        i(E.controls, "rewind") && t.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + n + '-rewind" /></svg>', '<span class="plyr__sr-only">' + E.i18n.rewind + "</span>", "</button>"),
                        i(E.controls, "play") && t.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + E.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + n + '-pause" /></svg>', '<span class="plyr__sr-only">' + E.i18n.pause + "</span>", "</button>"),
                        i(E.controls, "fast-forward") && t.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + n + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + E.i18n.forward + "</span>", "</button>"),
                        i(E.controls, "progress") && (t.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + E.i18n.buffered, "</progress>"),
                        E.tooltips.seek && t.push('<span class="plyr__tooltip">00:00</span>'),
                        t.push("</span>")),
                        i(E.controls, "current-time") && t.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + E.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"),
                        i(E.controls, "duration") && t.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + E.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"),
                        i(E.controls, "mute") && t.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + n + '-muted" /></svg>', '<svg><use xlink:href="' + n + '-volume" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleMute + "</span>", "</button>"),
                        i(E.controls, "volume") && t.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + E.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + E.volumeMin + '" max="' + E.volumeMax + '" value="' + E.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + E.volumeMax + '" value="' + E.volumeMin + '" role="presentation"></progress>', "</span>"),
                        i(E.controls, "captions") && t.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + n + '-captions-on" /></svg>', '<svg><use xlink:href="' + n + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleCaptions + "</span>", "</button>"),
                        i(E.controls, "fullscreen") && t.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + n + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + n + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleFullscreen + "</span>", "</button>"),
                        t.push("</div>"),
                        t.join("")
                    }
                    function R() {
                        if ("video" === Lt.type) {
                            B(E.selectors.captions) || Lt.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + function(t) {
                                return t.replace(".", "")
                            }(E.selectors.captions) + '"></div>'),
                            Lt.usingTextTracks = !1,
                            Lt.media.textTracks && (Lt.usingTextTracks = !0);
                            for (var t, e = "", n = Lt.media.childNodes, r = 0; r < n.length; r++)
                                "track" === n[r].nodeName.toLowerCase() && ("captions" !== (t = n[r].kind) && "subtitles" !== t || (e = n[r].getAttribute("src")));
                            if (Lt.captionExists = !0,
                            "" === e ? (Lt.captionExists = !1,
                            Mt("No caption track found")) : Mt("Caption track found; URI: " + e),
                            Lt.captionExists) {
                                for (var i = Lt.media.textTracks, o = 0; o < i.length; o++)
                                    i[o].mode = "hidden";
                                if (function() {
                                    if (Lt.buttons.captions) {
                                        f(Lt.container, E.classes.captions.enabled, !0);
                                        var t = Lt.storage.captionsEnabled;
                                        P.boolean(t) || (t = E.captions.defaultActive),
                                        t && (f(Lt.container, E.classes.captions.active, !0),
                                        b(Lt.buttons.captions, !0))
                                    }
                                }(),
                                (Lt.browser.isIE && Lt.browser.version >= 10 || Lt.browser.isFirefox && Lt.browser.version >= 31) && (Mt("Detected browser with known TextTrack issues - using manual fallback"),
                                Lt.usingTextTracks = !1),
                                Lt.usingTextTracks) {
                                    Mt("TextTracks supported");
                                    for (var a = 0; a < i.length; a++) {
                                        var s = i[a];
                                        "captions" !== s.kind && "subtitles" !== s.kind || y(s, "cuechange", (function() {
                                            this.activeCues[0] && "text"in this.activeCues[0] ? M(this.activeCues[0].getCueAsHTML()) : M()
                                        }
                                        ))
                                    }
                                } else if (Mt("TextTracks not supported so rendering captions manually"),
                                Lt.currentCaption = "",
                                Lt.captions = [],
                                "" !== e) {
                                    var u = new XMLHttpRequest;
                                    u.onreadystatechange = function() {
                                        if (4 === u.readyState)
                                            if (200 === u.status) {
                                                var t, e, n = u.responseText, r = "\r\n";
                                                -1 === n.indexOf(r + r) && (r = -1 !== n.indexOf("\r\r") ? "\r" : "\n"),
                                                e = n.split(r + r);
                                                for (var i = 0; i < e.length; i++) {
                                                    t = e[i],
                                                    Lt.captions[i] = [];
                                                    var o = t.split(r)
                                                      , a = 0;
                                                    -1 === o[a].indexOf(":") && (a = 1),
                                                    Lt.captions[i] = [o[a], o[a + 1]]
                                                }
                                                Lt.captions.shift(),
                                                Mt("Successfully loaded the caption file via AJAX")
                                            } else
                                                Ft(E.logPrefix + "There was a problem loading the caption file via AJAX")
                                    }
                                    ,
                                    u.open("get", e, !0),
                                    u.send()
                                }
                            } else
                                f(Lt.container, E.classes.captions.enabled)
                        }
                    }
                    function M(t) {
                        var n = B(E.selectors.captions)
                          , r = e.createElement("span");
                        n.innerHTML = "",
                        P.undefined(t) && (t = ""),
                        P.string(t) ? r.innerHTML = t.trim() : r.appendChild(t),
                        n.appendChild(r),
                        n.offsetHeight
                    }
                    function F(t) {
                        function e(t, e) {
                            var n = [];
                            n = t.split(" --\x3e ");
                            for (var r = 0; r < n.length; r++)
                                n[r] = n[r].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                            return function(t) {
                                if (null == t)
                                    return 0;
                                var e = []
                                  , n = [];
                                return e = t.split(","),
                                n = e[0].split(":"),
                                Math.floor(60 * n[0] * 60) + Math.floor(60 * n[1]) + Math.floor(n[2])
                            }(n[e])
                        }
                        function n(t) {
                            return e(t, 1)
                        }
                        if (!Lt.usingTextTracks && "video" === Lt.type && Lt.supported.full && (Lt.subcount = 0,
                        t = P.number(t) ? t : Lt.media.currentTime,
                        Lt.captions[Lt.subcount])) {
                            for (; n(Lt.captions[Lt.subcount][0]) < t.toFixed(1); )
                                if (Lt.subcount++,
                                Lt.subcount > Lt.captions.length - 1) {
                                    Lt.subcount = Lt.captions.length - 1;
                                    break
                                }
                            Lt.media.currentTime.toFixed(1) >= function(t) {
                                return e(t, 0)
                            }(Lt.captions[Lt.subcount][0]) && Lt.media.currentTime.toFixed(1) <= n(Lt.captions[Lt.subcount][0]) ? (Lt.currentCaption = Lt.captions[Lt.subcount][1],
                            M(Lt.currentCaption)) : M()
                        }
                    }
                    function D(t) {
                        return Lt.container.querySelectorAll(t)
                    }
                    function B(t) {
                        return D(t)[0]
                    }
                    function H() {
                        try {
                            return t.self !== t.top
                        } catch (t) {
                            return !0
                        }
                    }
                    function z() {
                        var t = D("input:not([disabled]), button:not([disabled])")
                          , e = t[0]
                          , n = t[t.length - 1];
                        y(Lt.container, "keydown", (function(t) {
                            9 === t.which && Lt.isFullscreen && (t.target !== n || t.shiftKey ? t.target === e && t.shiftKey && (t.preventDefault(),
                            n.focus()) : (t.preventDefault(),
                            e.focus()))
                        }
                        ))
                    }
                    function U(t, e) {
                        if (P.string(e))
                            l(t, Lt.media, {
                                src: e
                            });
                        else if (e.constructor === Array)
                            for (var n = e.length - 1; n >= 0; n--)
                                l(t, Lt.media, e[n])
                    }
                    function W() {
                        f(Lt.container, E.selectors.container.replace(".", ""), Lt.supported.full)
                    }
                    function V(t) {
                        t && i(E.types.html5, Lt.type) ? Lt.media.setAttribute("controls", "") : Lt.media.removeAttribute("controls")
                    }
                    function $(t) {
                        var e = E.i18n.play;
                        if (P.string(E.title) && E.title.length && (e += ", " + E.title,
                        Lt.container.setAttribute("aria-label", E.title)),
                        Lt.supported.full && Lt.buttons.play)
                            for (var n = Lt.buttons.play.length - 1; n >= 0; n--)
                                Lt.buttons.play[n].setAttribute("aria-label", e);
                        P.htmlElement(t) && t.setAttribute("title", E.i18n.frameTitle.replace("{title}", E.title))
                    }
                    function q() {
                        var e = null;
                        Lt.storage = {},
                        I.supported && E.storage.enabled && (t.localStorage.removeItem("plyr-volume"),
                        (e = t.localStorage.getItem(E.storage.key)) && (/^\d+(\.\d+)?$/.test(e) ? Y({
                            volume: parseFloat(e)
                        }) : Lt.storage = JSON.parse(e)))
                    }
                    function Y(e) {
                        I.supported && E.storage.enabled && (x(Lt.storage, e),
                        t.localStorage.setItem(E.storage.key, JSON.stringify(Lt.storage)))
                    }
                    function G() {
                        if (Lt.media) {
                            if (Lt.supported.full && (f(Lt.container, E.classes.type.replace("{0}", Lt.type), !0),
                            i(E.types.embed, Lt.type) && f(Lt.container, E.classes.type.replace("{0}", "video"), !0),
                            f(Lt.container, E.classes.stopped, E.autoplay),
                            f(Lt.container, E.classes.isIos, Lt.browser.isIos),
                            f(Lt.container, E.classes.isTouch, Lt.browser.isTouch),
                            "video" === Lt.type)) {
                                var t = e.createElement("div");
                                t.setAttribute("class", E.classes.videoWrapper),
                                a(Lt.media, t),
                                Lt.videoContainer = t
                            }
                            i(E.types.embed, Lt.type) && K()
                        } else
                            Ft("No media element found!")
                    }
                    function K() {
                        var n, i = e.createElement("div"), o = Lt.type + "-" + Math.floor(1e4 * Math.random());
                        switch (Lt.type) {
                        case "youtube":
                            n = function(t) {
                                return t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/) ? RegExp.$2 : t
                            }(Lt.embedId);
                            break;
                        case "vimeo":
                            n = function(t) {
                                return t.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : t
                            }(Lt.embedId);
                            break;
                        default:
                            n = Lt.embedId
                        }
                        for (var a = D('[id^="' + Lt.type + '-"]'), u = a.length - 1; u >= 0; u--)
                            s(a[u]);
                        if (f(Lt.media, E.classes.videoWrapper, !0),
                        f(Lt.media, E.classes.embedWrapper, !0),
                        "youtube" === Lt.type)
                            Lt.media.appendChild(i),
                            i.setAttribute("id", o),
                            P.object(t.YT) ? J(n, i) : (r(E.urls.youtube.api),
                            t.onYouTubeReadyCallbacks = t.onYouTubeReadyCallbacks || [],
                            t.onYouTubeReadyCallbacks.push((function() {
                                J(n, i)
                            }
                            )),
                            t.onYouTubeIframeAPIReady = function() {
                                t.onYouTubeReadyCallbacks.forEach((function(t) {
                                    t()
                                }
                                ))
                            }
                            );
                        else if ("vimeo" === Lt.type)
                            if (Lt.supported.full ? Lt.media.appendChild(i) : i = Lt.media,
                            i.setAttribute("id", o),
                            P.object(t.Vimeo))
                                Z(n, i);
                            else {
                                r(E.urls.vimeo.api);
                                var l = t.setInterval((function() {
                                    P.object(t.Vimeo) && (t.clearInterval(l),
                                    Z(n, i))
                                }
                                ), 50)
                            }
                        else if ("soundcloud" === Lt.type) {
                            var d = e.createElement("iframe");
                            d.loaded = !1,
                            y(d, "load", (function() {
                                d.loaded = !0
                            }
                            )),
                            c(d, {
                                src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + n,
                                id: o
                            }),
                            i.appendChild(d),
                            Lt.media.appendChild(i),
                            t.SC || r(E.urls.soundcloud.api);
                            var p = t.setInterval((function() {
                                t.SC && d.loaded && (t.clearInterval(p),
                                Q.call(d))
                            }
                            ), 50)
                        }
                    }
                    function X() {
                        Lt.supported.full && (It(),
                        Ct()),
                        $(B("iframe"))
                    }
                    function J(e, n) {
                        Lt.embed = new t.YT.Player(n.id,{
                            videoId: e,
                            playerVars: {
                                autoplay: E.autoplay ? 1 : 0,
                                controls: Lt.supported.full ? 0 : 1,
                                rel: 0,
                                showinfo: 0,
                                iv_load_policy: 3,
                                cc_load_policy: E.captions.defaultActive ? 1 : 0,
                                cc_lang_pref: "en",
                                wmode: "transparent",
                                modestbranding: 1,
                                disablekb: 1,
                                origin: "*"
                            },
                            events: {
                                onError: function(t) {
                                    C(Lt.container, "error", !0, {
                                        code: t.data,
                                        embed: t.target
                                    })
                                },
                                onReady: function(e) {
                                    var n = e.target;
                                    Lt.media.play = function() {
                                        n.playVideo(),
                                        Lt.media.paused = !1
                                    }
                                    ,
                                    Lt.media.pause = function() {
                                        n.pauseVideo(),
                                        Lt.media.paused = !0
                                    }
                                    ,
                                    Lt.media.stop = function() {
                                        n.stopVideo(),
                                        Lt.media.paused = !0
                                    }
                                    ,
                                    Lt.media.duration = n.getDuration(),
                                    Lt.media.paused = !0,
                                    Lt.media.currentTime = 0,
                                    Lt.media.muted = n.isMuted(),
                                    "function" == typeof n.getVideoData && (E.title = n.getVideoData().title),
                                    Lt.supported.full && Lt.media.querySelector("iframe").setAttribute("tabindex", "-1"),
                                    X(),
                                    C(Lt.media, "timeupdate"),
                                    C(Lt.media, "durationchange"),
                                    t.clearInterval(Nt.buffering),
                                    Nt.buffering = t.setInterval((function() {
                                        Lt.media.buffered = n.getVideoLoadedFraction(),
                                        (null === Lt.media.lastBuffered || Lt.media.lastBuffered < Lt.media.buffered) && C(Lt.media, "progress"),
                                        Lt.media.lastBuffered = Lt.media.buffered,
                                        1 === Lt.media.buffered && (t.clearInterval(Nt.buffering),
                                        C(Lt.media, "canplaythrough"))
                                    }
                                    ), 200)
                                },
                                onStateChange: function(e) {
                                    var n = e.target;
                                    switch (t.clearInterval(Nt.playing),
                                    e.data) {
                                    case 0:
                                        Lt.media.paused = !0,
                                        C(Lt.media, "ended");
                                        break;
                                    case 1:
                                        Lt.media.paused = !1,
                                        Lt.media.seeking && C(Lt.media, "seeked"),
                                        Lt.media.seeking = !1,
                                        C(Lt.media, "play"),
                                        C(Lt.media, "playing"),
                                        Nt.playing = t.setInterval((function() {
                                            Lt.media.currentTime = n.getCurrentTime(),
                                            C(Lt.media, "timeupdate")
                                        }
                                        ), 100),
                                        Lt.media.duration !== n.getDuration() && (Lt.media.duration = n.getDuration(),
                                        C(Lt.media, "durationchange"));
                                        break;
                                    case 2:
                                        Lt.media.paused = !0,
                                        C(Lt.media, "pause")
                                    }
                                    C(Lt.container, "statechange", !1, {
                                        code: e.data
                                    })
                                }
                            }
                        })
                    }
                    function Z(n, r) {
                        var i = function(t) {
                            return Object.keys(t).map((function(e) {
                                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                            }
                            )).join("&")
                        }({
                            loop: E.loop,
                            autoplay: E.autoplay,
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            speed: !0,
                            transparent: 0
                        })
                          , o = e.createElement("iframe")
                          , a = "https://player.vimeo.com/video/" + n + "?" + i;
                        o.setAttribute("src", a),
                        o.setAttribute("allowfullscreen", ""),
                        r.appendChild(o),
                        Lt.embed = new t.Vimeo.Player(o),
                        Lt.media.play = function() {
                            Lt.embed.play(),
                            Lt.media.paused = !1
                        }
                        ,
                        Lt.media.pause = function() {
                            Lt.embed.pause(),
                            Lt.media.paused = !0
                        }
                        ,
                        Lt.media.stop = function() {
                            Lt.embed.stop(),
                            Lt.media.paused = !0
                        }
                        ,
                        Lt.media.paused = !0,
                        Lt.media.currentTime = 0,
                        X(),
                        Lt.embed.getCurrentTime().then((function(t) {
                            Lt.media.currentTime = t,
                            C(Lt.media, "timeupdate")
                        }
                        )),
                        Lt.embed.getDuration().then((function(t) {
                            Lt.media.duration = t,
                            C(Lt.media, "durationchange")
                        }
                        )),
                        Lt.embed.on("loaded", (function() {
                            P.htmlElement(Lt.embed.element) && Lt.supported.full && Lt.embed.element.setAttribute("tabindex", "-1")
                        }
                        )),
                        Lt.embed.on("play", (function() {
                            Lt.media.paused = !1,
                            C(Lt.media, "play"),
                            C(Lt.media, "playing")
                        }
                        )),
                        Lt.embed.on("pause", (function() {
                            Lt.media.paused = !0,
                            C(Lt.media, "pause")
                        }
                        )),
                        Lt.embed.on("timeupdate", (function(t) {
                            Lt.media.seeking = !1,
                            Lt.media.currentTime = t.seconds,
                            C(Lt.media, "timeupdate")
                        }
                        )),
                        Lt.embed.on("progress", (function(t) {
                            Lt.media.buffered = t.percent,
                            C(Lt.media, "progress"),
                            1 === parseInt(t.percent) && C(Lt.media, "canplaythrough")
                        }
                        )),
                        Lt.embed.on("seeked", (function() {
                            Lt.media.seeking = !1,
                            C(Lt.media, "seeked"),
                            C(Lt.media, "play")
                        }
                        )),
                        Lt.embed.on("ended", (function() {
                            Lt.media.paused = !0,
                            C(Lt.media, "ended")
                        }
                        ))
                    }
                    function Q() {
                        Lt.embed = t.SC.Widget(this),
                        Lt.embed.bind(t.SC.Widget.Events.READY, (function() {
                            Lt.media.play = function() {
                                Lt.embed.play(),
                                Lt.media.paused = !1
                            }
                            ,
                            Lt.media.pause = function() {
                                Lt.embed.pause(),
                                Lt.media.paused = !0
                            }
                            ,
                            Lt.media.stop = function() {
                                Lt.embed.seekTo(0),
                                Lt.embed.pause(),
                                Lt.media.paused = !0
                            }
                            ,
                            Lt.media.paused = !0,
                            Lt.media.currentTime = 0,
                            Lt.embed.getDuration((function(t) {
                                Lt.media.duration = t / 1e3,
                                X()
                            }
                            )),
                            Lt.embed.getPosition((function(t) {
                                Lt.media.currentTime = t,
                                C(Lt.media, "timeupdate")
                            }
                            )),
                            Lt.embed.bind(t.SC.Widget.Events.PLAY, (function() {
                                Lt.media.paused = !1,
                                C(Lt.media, "play"),
                                C(Lt.media, "playing")
                            }
                            )),
                            Lt.embed.bind(t.SC.Widget.Events.PAUSE, (function() {
                                Lt.media.paused = !0,
                                C(Lt.media, "pause")
                            }
                            )),
                            Lt.embed.bind(t.SC.Widget.Events.PLAY_PROGRESS, (function(t) {
                                Lt.media.seeking = !1,
                                Lt.media.currentTime = t.currentPosition / 1e3,
                                C(Lt.media, "timeupdate")
                            }
                            )),
                            Lt.embed.bind(t.SC.Widget.Events.LOAD_PROGRESS, (function(t) {
                                Lt.media.buffered = t.loadProgress,
                                C(Lt.media, "progress"),
                                1 === parseInt(t.loadProgress) && C(Lt.media, "canplaythrough")
                            }
                            )),
                            Lt.embed.bind(t.SC.Widget.Events.FINISH, (function() {
                                Lt.media.paused = !0,
                                C(Lt.media, "ended")
                            }
                            ))
                        }
                        ))
                    }
                    function tt() {
                        "play"in Lt.media && Lt.media.play()
                    }
                    function et() {
                        "pause"in Lt.media && Lt.media.pause()
                    }
                    function nt(t) {
                        return P.boolean(t) || (t = Lt.media.paused),
                        t ? tt() : et(),
                        t
                    }
                    function rt(t) {
                        P.number(t) || (t = E.seekTime),
                        ot(Lt.media.currentTime - t)
                    }
                    function it(t) {
                        P.number(t) || (t = E.seekTime),
                        ot(Lt.media.currentTime + t)
                    }
                    function ot(t) {
                        var e = 0
                          , n = Lt.media.paused
                          , r = at();
                        P.number(t) ? e = t : P.object(t) && i(["input", "change"], t.type) && (e = t.target.value / t.target.max * r),
                        e < 0 ? e = 0 : e > r && (e = r),
                        St(e);
                        try {
                            Lt.media.currentTime = e.toFixed(4)
                        } catch (t) {}
                        if (i(E.types.embed, Lt.type)) {
                            switch (Lt.type) {
                            case "youtube":
                                Lt.embed.seekTo(e);
                                break;
                            case "vimeo":
                                Lt.embed.setCurrentTime(e.toFixed(0));
                                break;
                            case "soundcloud":
                                Lt.embed.seekTo(1e3 * e)
                            }
                            n && et(),
                            C(Lt.media, "timeupdate"),
                            Lt.media.seeking = !0,
                            C(Lt.media, "seeking")
                        }
                        Mt("Seeking to " + Lt.media.currentTime + " seconds"),
                        F(e)
                    }
                    function at() {
                        var t = parseInt(E.duration)
                          , e = 0;
                        return null === Lt.media.duration || isNaN(Lt.media.duration) || (e = Lt.media.duration),
                        isNaN(t) ? e : t
                    }
                    function st() {
                        f(Lt.container, E.classes.playing, !Lt.media.paused),
                        f(Lt.container, E.classes.stopped, Lt.media.paused),
                        kt(Lt.media.paused)
                    }
                    function ut() {
                        _ = {
                            x: t.pageXOffset || 0,
                            y: t.pageYOffset || 0
                        }
                    }
                    function ct() {
                        t.scrollTo(_.x, _.y)
                    }
                    function lt(t) {
                        var n = O.supportsFullScreen;
                        if (n) {
                            if (!t || t.type !== O.fullScreenEventName)
                                return O.isFullScreen(Lt.container) ? O.cancelFullScreen() : (ut(),
                                O.requestFullScreen(Lt.container)),
                                void (Lt.isFullscreen = O.isFullScreen(Lt.container));
                            Lt.isFullscreen = O.isFullScreen(Lt.container)
                        } else
                            Lt.isFullscreen = !Lt.isFullscreen,
                            e.body.style.overflow = Lt.isFullscreen ? "hidden" : "";
                        f(Lt.container, E.classes.fullscreen.active, Lt.isFullscreen),
                        z(Lt.isFullscreen),
                        Lt.buttons && Lt.buttons.fullscreen && b(Lt.buttons.fullscreen, Lt.isFullscreen),
                        C(Lt.container, Lt.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0),
                        !Lt.isFullscreen && n && ct()
                    }
                    function ft(t) {
                        if (P.boolean(t) || (t = !Lt.media.muted),
                        b(Lt.buttons.mute, t),
                        Lt.media.muted = t,
                        0 === Lt.media.volume && dt(E.volume),
                        i(E.types.embed, Lt.type)) {
                            switch (Lt.type) {
                            case "youtube":
                                Lt.embed[Lt.media.muted ? "mute" : "unMute"]();
                                break;
                            case "vimeo":
                            case "soundcloud":
                                Lt.embed.setVolume(Lt.media.muted ? 0 : parseFloat(E.volume / E.volumeMax))
                            }
                            C(Lt.media, "volumechange")
                        }
                    }
                    function dt(t) {
                        var e = E.volumeMax
                          , n = E.volumeMin;
                        if (P.undefined(t) && (t = Lt.storage.volume),
                        (null === t || isNaN(t)) && (t = E.volume),
                        t > e && (t = e),
                        t < n && (t = n),
                        Lt.media.volume = parseFloat(t / e),
                        Lt.volume.display && (Lt.volume.display.value = t),
                        i(E.types.embed, Lt.type)) {
                            switch (Lt.type) {
                            case "youtube":
                                Lt.embed.setVolume(100 * Lt.media.volume);
                                break;
                            case "vimeo":
                            case "soundcloud":
                                Lt.embed.setVolume(Lt.media.volume)
                            }
                            C(Lt.media, "volumechange")
                        }
                        0 === t ? Lt.media.muted = !0 : Lt.media.muted && t > 0 && ft()
                    }
                    function pt(t) {
                        var e = Lt.media.muted ? 0 : Lt.media.volume * E.volumeMax;
                        P.number(t) || (t = E.volumeStep),
                        dt(e + t)
                    }
                    function ht(t) {
                        var e = Lt.media.muted ? 0 : Lt.media.volume * E.volumeMax;
                        P.number(t) || (t = E.volumeStep),
                        dt(e - t)
                    }
                    function mt() {
                        var t = Lt.media.muted ? 0 : Lt.media.volume * E.volumeMax;
                        Lt.supported.full && (Lt.volume.input && (Lt.volume.input.value = t),
                        Lt.volume.display && (Lt.volume.display.value = t)),
                        Y({
                            volume: t
                        }),
                        f(Lt.container, E.classes.muted, 0 === t),
                        Lt.supported.full && Lt.buttons.mute && b(Lt.buttons.mute, 0 === t)
                    }
                    function yt(t) {
                        Lt.supported.full && Lt.buttons.captions && (P.boolean(t) || (t = -1 === Lt.container.className.indexOf(E.classes.captions.active)),
                        Lt.captionsEnabled = t,
                        b(Lt.buttons.captions, Lt.captionsEnabled),
                        f(Lt.container, E.classes.captions.active, Lt.captionsEnabled),
                        C(Lt.container, Lt.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0),
                        Y({
                            captionsEnabled: Lt.captionsEnabled
                        }))
                    }
                    function gt(t) {
                        var e = "waiting" === t.type;
                        clearTimeout(Nt.loading),
                        Nt.loading = setTimeout((function() {
                            f(Lt.container, E.classes.loading, e),
                            kt(e)
                        }
                        ), e ? 250 : 0)
                    }
                    function vt(t) {
                        if (Lt.supported.full) {
                            var e = Lt.progress.played
                              , n = 0
                              , r = at();
                            if (t)
                                switch (t.type) {
                                case "timeupdate":
                                case "seeking":
                                    if (Lt.controls.pressed)
                                        return;
                                    n = w(Lt.media.currentTime, r),
                                    "timeupdate" === t.type && Lt.buttons.seek && (Lt.buttons.seek.value = n);
                                    break;
                                case "playing":
                                case "progress":
                                    e = Lt.progress.buffer,
                                    n = function() {
                                        var t = Lt.media.buffered;
                                        return t && t.length ? w(t.end(0), r) : P.number(t) ? 100 * t : 0
                                    }()
                                }
                            bt(e, n)
                        }
                    }
                    function bt(t, e) {
                        if (Lt.supported.full) {
                            if (P.undefined(e) && (e = 0),
                            P.undefined(t)) {
                                if (!Lt.progress || !Lt.progress.buffer)
                                    return;
                                t = Lt.progress.buffer
                            }
                            P.htmlElement(t) ? t.value = e : t && (t.bar && (t.bar.value = e),
                            t.text && (t.text.innerHTML = e))
                        }
                    }
                    function wt(t, e) {
                        if (e) {
                            isNaN(t) && (t = 0),
                            Lt.secs = parseInt(t % 60),
                            Lt.mins = parseInt(t / 60 % 60),
                            Lt.hours = parseInt(t / 60 / 60 % 60);
                            var n = parseInt(at() / 60 / 60 % 60) > 0;
                            Lt.secs = ("0" + Lt.secs).slice(-2),
                            Lt.mins = ("0" + Lt.mins).slice(-2),
                            e.innerHTML = (n ? Lt.hours + ":" : "") + Lt.mins + ":" + Lt.secs
                        }
                    }
                    function xt() {
                        if (Lt.supported.full) {
                            var t = at() || 0;
                            !Lt.duration && E.displayDuration && Lt.media.paused && wt(t, Lt.currentTime),
                            Lt.duration && wt(t, Lt.duration),
                            Tt()
                        }
                    }
                    function Et(t) {
                        wt(Lt.media.currentTime, Lt.currentTime),
                        t && "timeupdate" === t.type && Lt.media.seeking || vt(t)
                    }
                    function St(t) {
                        P.number(t) || (t = 0);
                        var e = w(t, at());
                        Lt.progress && Lt.progress.played && (Lt.progress.played.value = e),
                        Lt.buttons && Lt.buttons.seek && (Lt.buttons.seek.value = e)
                    }
                    function Tt(t) {
                        var e = at();
                        if (E.tooltips.seek && Lt.progress.container && 0 !== e) {
                            var n = Lt.progress.container.getBoundingClientRect()
                              , r = 0
                              , o = E.classes.tooltip + "--visible";
                            if (t)
                                r = 100 / n.width * (t.pageX - n.left);
                            else {
                                if (!d(Lt.progress.tooltip, o))
                                    return;
                                r = Lt.progress.tooltip.style.left.replace("%", "")
                            }
                            r < 0 ? r = 0 : r > 100 && (r = 100),
                            wt(e / 100 * r, Lt.progress.tooltip),
                            Lt.progress.tooltip.style.left = r + "%",
                            t && i(["mouseenter", "mouseleave"], t.type) && f(Lt.progress.tooltip, o, "mouseenter" === t.type)
                        }
                    }
                    function kt(e) {
                        if (E.hideControls && "audio" !== Lt.type) {
                            var n = 0
                              , r = !1
                              , o = e
                              , a = d(Lt.container, E.classes.loading);
                            if (P.boolean(e) || (e && e.type ? (r = "enterfullscreen" === e.type,
                            o = i(["mousemove", "touchstart", "mouseenter", "focus"], e.type),
                            i(["mousemove", "touchmove"], e.type) && (n = 2e3),
                            "focus" === e.type && (n = 3e3)) : o = d(Lt.container, E.classes.hideControls)),
                            t.clearTimeout(Nt.hover),
                            o || Lt.media.paused || a) {
                                if (f(Lt.container, E.classes.hideControls, !1),
                                Lt.media.paused || a)
                                    return;
                                Lt.browser.isTouch && (n = 3e3)
                            }
                            o && Lt.media.paused || (Nt.hover = t.setTimeout((function() {
                                (!Lt.controls.pressed && !Lt.controls.hover || r) && f(Lt.container, E.classes.hideControls, !0)
                            }
                            ), n))
                        }
                    }
                    function Ot(t) {
                        P.object(t) && "sources"in t && t.sources.length ? (f(Lt.container, E.classes.ready, !1),
                        et(),
                        St(),
                        bt(),
                        function() {
                            if (i(E.types.html5, Lt.type)) {
                                for (var t = Lt.media.querySelectorAll("source"), e = 0; e < t.length; e++)
                                    s(t[e]);
                                Lt.media.setAttribute("src", E.blankUrl),
                                Lt.media.load(),
                                Mt("Cancelled network requests")
                            }
                        }(),
                        Pt((function() {
                            if (Lt.embed = null,
                            s(Lt.media),
                            "video" === Lt.type && Lt.videoContainer && s(Lt.videoContainer),
                            Lt.container && Lt.container.removeAttribute("class"),
                            "type"in t && (Lt.type = t.type,
                            "video" === Lt.type)) {
                                var n = t.sources[0];
                                "type"in n && i(E.types.embed, n.type) && (Lt.type = n.type)
                            }
                            switch (Lt.supported = T(Lt.type),
                            Lt.type) {
                            case "video":
                                Lt.media = e.createElement("video");
                                break;
                            case "audio":
                                Lt.media = e.createElement("audio");
                                break;
                            case "youtube":
                            case "vimeo":
                            case "soundcloud":
                                Lt.media = e.createElement("div"),
                                Lt.embedId = t.sources[0].src
                            }
                            u(Lt.container, Lt.media),
                            P.boolean(t.autoplay) && (E.autoplay = t.autoplay),
                            i(E.types.html5, Lt.type) && (E.crossorigin && Lt.media.setAttribute("crossorigin", ""),
                            E.autoplay && Lt.media.setAttribute("autoplay", ""),
                            "poster"in t && Lt.media.setAttribute("poster", t.poster),
                            E.loop && Lt.media.setAttribute("loop", "")),
                            f(Lt.container, E.classes.fullscreen.active, Lt.isFullscreen),
                            f(Lt.container, E.classes.captions.active, Lt.captionsEnabled),
                            W(),
                            i(E.types.html5, Lt.type) && U("source", t.sources),
                            G(),
                            i(E.types.html5, Lt.type) && ("tracks"in t && U("track", t.tracks),
                            Lt.media.load()),
                            (i(E.types.html5, Lt.type) || i(E.types.embed, Lt.type) && !Lt.supported.full) && (It(),
                            Ct()),
                            E.title = t.title,
                            $()
                        }
                        ), !1)) : Ft("Invalid source format")
                    }
                    function _t() {
                        f(B("." + E.classes.tabFocus), E.classes.tabFocus, !1)
                    }
                    function At() {
                        function n() {
                            var t = nt()
                              , e = Lt.buttons[t ? "play" : "pause"]
                              , n = Lt.buttons[t ? "pause" : "play"];
                            if (n && (n = n.length > 1 ? n[n.length - 1] : n[0]),
                            n) {
                                var r = d(e, E.classes.tabFocus);
                                setTimeout((function() {
                                    n.focus(),
                                    r && (f(e, E.classes.tabFocus, !1),
                                    f(n, E.classes.tabFocus, !0))
                                }
                                ), 100)
                            }
                        }
                        function r() {
                            var t = e.activeElement;
                            return t && t !== e.body ? e.querySelector(":focus") : null
                        }
                        function o(t) {
                            return t.keyCode ? t.keyCode : t.which
                        }
                        function a(t) {
                            var e = o(t)
                              , n = "keydown" === t.type
                              , r = n && e === u;
                            if (P.number(e))
                                if (n) {
                                    switch (i([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67], e) && (t.preventDefault(),
                                    t.stopPropagation()),
                                    e) {
                                    case 48:
                                    case 49:
                                    case 50:
                                    case 51:
                                    case 52:
                                    case 53:
                                    case 54:
                                    case 55:
                                    case 56:
                                    case 57:
                                        r || function() {
                                            var t = Lt.media.duration;
                                            P.number(t) && ot(t / 10 * (e - 48))
                                        }();
                                        break;
                                    case 32:
                                    case 75:
                                        r || nt();
                                        break;
                                    case 38:
                                        pt();
                                        break;
                                    case 40:
                                        ht();
                                        break;
                                    case 77:
                                        r || ft();
                                        break;
                                    case 39:
                                        it();
                                        break;
                                    case 37:
                                        rt();
                                        break;
                                    case 70:
                                        lt();
                                        break;
                                    case 67:
                                        r || yt()
                                    }
                                    !O.supportsFullScreen && Lt.isFullscreen && 27 === e && lt(),
                                    u = e
                                } else
                                    u = null
                        }
                        var s = Lt.browser.isIE ? "change" : "input";
                        if (E.keyboardShorcuts.focused) {
                            var u = null;
                            E.keyboardShorcuts.global && y(t, "keydown keyup", (function(t) {
                                var e = o(t)
                                  , n = r();
                                1 !== k().length || !i([48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67], e) || P.htmlElement(n) && p(n, E.selectors.editable) || a(t)
                            }
                            )),
                            y(Lt.container, "keydown keyup", a)
                        }
                        for (var c in y(t, "keyup", (function(t) {
                            var e = o(t)
                              , n = r();
                            9 === e && function(t) {
                                for (var e in Lt.buttons) {
                                    var n = Lt.buttons[e];
                                    if (P.nodeList(n))
                                        for (var r = 0; r < n.length; r++)
                                            f(n[r], E.classes.tabFocus, n[r] === t);
                                    else
                                        f(n, E.classes.tabFocus, n === t)
                                }
                            }(n)
                        }
                        )),
                        y(e.body, "click", _t),
                        Lt.buttons) {
                            var l = Lt.buttons[c];
                            y(l, "blur", (function() {
                                f(l, "tab-focus", !1)
                            }
                            ))
                        }
                        h(Lt.buttons.play, "click", E.listeners.play, n),
                        h(Lt.buttons.pause, "click", E.listeners.pause, n),
                        h(Lt.buttons.restart, "click", E.listeners.restart, ot),
                        h(Lt.buttons.rewind, "click", E.listeners.rewind, rt),
                        h(Lt.buttons.forward, "click", E.listeners.forward, it),
                        h(Lt.buttons.seek, s, E.listeners.seek, ot),
                        h(Lt.volume.input, s, E.listeners.volume, (function() {
                            dt(Lt.volume.input.value)
                        }
                        )),
                        h(Lt.buttons.mute, "click", E.listeners.mute, ft),
                        h(Lt.buttons.fullscreen, "click", E.listeners.fullscreen, lt),
                        O.supportsFullScreen && y(e, O.fullScreenEventName, lt),
                        h(Lt.buttons.captions, "click", E.listeners.captions, yt),
                        y(Lt.progress.container, "mouseenter mouseleave mousemove", Tt),
                        E.hideControls && (y(Lt.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", kt),
                        y(Lt.controls, "mouseenter mouseleave", (function(t) {
                            Lt.controls.hover = "mouseenter" === t.type
                        }
                        )),
                        y(Lt.controls, "mousedown mouseup touchstart touchend touchcancel", (function(t) {
                            Lt.controls.pressed = i(["mousedown", "touchstart"], t.type)
                        }
                        )),
                        y(Lt.controls, "focus blur", kt, !0)),
                        y(Lt.volume.input, "wheel", (function(t) {
                            t.preventDefault();
                            var e = t.webkitDirectionInvertedFromDevice
                              , n = E.volumeStep / 5;
                            (t.deltaY < 0 || t.deltaX > 0) && (e ? ht(n) : pt(n)),
                            (t.deltaY > 0 || t.deltaX < 0) && (e ? pt(n) : ht(n))
                        }
                        ))
                    }
                    function Pt(n, r) {
                        function i() {
                            clearTimeout(Nt.cleanUp),
                            P.boolean(r) || (r = !0),
                            P.function(n) && n.call(Rt),
                            r && (Lt.init = !1,
                            Lt.container.parentNode.replaceChild(Rt, Lt.container),
                            Lt.container = null,
                            e.body.style.overflow = "",
                            g(e.body, "click", _t),
                            C(Rt, "destroyed", !0))
                        }
                        if (!Lt.init)
                            return null;
                        switch (Lt.type) {
                        case "youtube":
                            t.clearInterval(Nt.buffering),
                            t.clearInterval(Nt.playing),
                            Lt.embed.destroy(),
                            i();
                            break;
                        case "vimeo":
                            Lt.embed.unload().then(i),
                            Nt.cleanUp = t.setTimeout(i, 200);
                            break;
                        case "video":
                        case "audio":
                            V(!0),
                            i()
                        }
                    }
                    function It() {
                        if (!Lt.supported.full)
                            return Ft("Basic support only", Lt.type),
                            s(B(E.selectors.controls.wrapper)),
                            s(B(E.selectors.buttons.play)),
                            void V(!0);
                        var t = !D(E.selectors.controls.wrapper).length;
                        t && function() {
                            if (E.loadSprite) {
                                var t = L();
                                t.absolute ? (Mt("AJAX loading absolute SVG sprite" + (Lt.browser.isIE ? " (due to IE)" : "")),
                                S(t.url, "sprite-plyr")) : Mt("Sprite will be used as external resource directly")
                            }
                            var n, r = E.html;
                            if (Mt("Injecting custom controls"),
                            r || (r = N()),
                            r = o(r = o(r, "{seektime}", E.seekTime), "{id}", Math.floor(1e4 * Math.random())),
                            E.title && (r = o(r, "{title}", E.title)),
                            P.string(E.selectors.controls.container) && (n = e.querySelector(E.selectors.controls.container)),
                            P.htmlElement(n) || (n = Lt.container),
                            n.insertAdjacentHTML("beforeend", r),
                            E.tooltips.controls)
                                for (var i = D([E.selectors.controls.wrapper, " ", E.selectors.labels, " .", E.classes.hidden].join("")), a = i.length - 1; a >= 0; a--) {
                                    var s = i[a];
                                    f(s, E.classes.hidden, !1),
                                    f(s, E.classes.tooltip, !0)
                                }
                        }(),
                        function() {
                            try {
                                return Lt.controls = B(E.selectors.controls.wrapper),
                                Lt.buttons = {},
                                Lt.buttons.seek = B(E.selectors.buttons.seek),
                                Lt.buttons.play = D(E.selectors.buttons.play),
                                Lt.buttons.pause = B(E.selectors.buttons.pause),
                                Lt.buttons.restart = B(E.selectors.buttons.restart),
                                Lt.buttons.rewind = B(E.selectors.buttons.rewind),
                                Lt.buttons.forward = B(E.selectors.buttons.forward),
                                Lt.buttons.fullscreen = B(E.selectors.buttons.fullscreen),
                                Lt.buttons.mute = B(E.selectors.buttons.mute),
                                Lt.buttons.captions = B(E.selectors.buttons.captions),
                                Lt.progress = {},
                                Lt.progress.container = B(E.selectors.progress.container),
                                Lt.progress.buffer = {},
                                Lt.progress.buffer.bar = B(E.selectors.progress.buffer),
                                Lt.progress.buffer.text = Lt.progress.buffer.bar && Lt.progress.buffer.bar.getElementsByTagName("span")[0],
                                Lt.progress.played = B(E.selectors.progress.played),
                                Lt.progress.tooltip = Lt.progress.container && Lt.progress.container.querySelector("." + E.classes.tooltip),
                                Lt.volume = {},
                                Lt.volume.input = B(E.selectors.volume.input),
                                Lt.volume.display = B(E.selectors.volume.display),
                                Lt.duration = B(E.selectors.duration),
                                Lt.currentTime = B(E.selectors.currentTime),
                                Lt.seekTime = D(E.selectors.seekTime),
                                !0
                            } catch (t) {
                                return Ft("It looks like there is a problem with your controls HTML"),
                                V(!0),
                                !1
                            }
                        }() && (t && At(),
                        function() {
                            if (y(Lt.media, "timeupdate seeking", Et),
                            y(Lt.media, "timeupdate", F),
                            y(Lt.media, "durationchange loadedmetadata", xt),
                            y(Lt.media, "ended", (function() {
                                "video" === Lt.type && E.showPosterOnEnd && ("video" === Lt.type && M(),
                                ot(),
                                Lt.media.load())
                            }
                            )),
                            y(Lt.media, "progress playing", vt),
                            y(Lt.media, "volumechange", mt),
                            y(Lt.media, "play pause ended", st),
                            y(Lt.media, "waiting canplay seeked", gt),
                            E.clickToPlay && "audio" !== Lt.type) {
                                var t = B("." + E.classes.videoWrapper);
                                if (!t)
                                    return;
                                t.style.cursor = "pointer",
                                y(t, "click", (function() {
                                    E.hideControls && Lt.browser.isTouch && !Lt.media.paused || (Lt.media.paused ? tt() : Lt.media.ended ? (ot(),
                                    tt()) : et())
                                }
                                ))
                            }
                            E.disableContextMenu && y(Lt.media, "contextmenu", (function(t) {
                                t.preventDefault()
                            }
                            )),
                            y(Lt.media, E.events.concat(["keyup", "keydown"]).join(" "), (function(t) {
                                C(Lt.container, t.type, !0)
                            }
                            ))
                        }(),
                        V(),
                        function() {
                            if (Lt.supported.full && ("audio" !== Lt.type || E.fullscreen.allowAudio) && E.fullscreen.enabled) {
                                var t = O.supportsFullScreen;
                                t || E.fullscreen.fallback && !H() ? (Mt((t ? "Native" : "Fallback") + " fullscreen enabled"),
                                t || f(Lt.container, E.classes.fullscreen.fallback, !0),
                                f(Lt.container, E.classes.fullscreen.enabled, !0)) : Mt("Fullscreen not supported and fallback disabled"),
                                Lt.buttons && Lt.buttons.fullscreen && b(Lt.buttons.fullscreen, !1),
                                z()
                            }
                        }(),
                        R(),
                        dt(),
                        mt(),
                        Et(),
                        st(),
                        xt())
                    }
                    function Ct() {
                        t.setTimeout((function() {
                            C(Lt.media, "ready")
                        }
                        ), 0),
                        f(Lt.media, A.classes.setup, !0),
                        f(Lt.container, E.classes.ready, !0),
                        Lt.media.plyr = jt,
                        E.autoplay && tt()
                    }
                    var jt, Lt = this, Nt = {};
                    Lt.media = m;
                    var Rt = m.cloneNode(!0)
                      , Mt = function() {
                        j("log", arguments)
                    }
                      , Ft = function() {
                        j("warn", arguments)
                    };
                    return Mt("Config", E),
                    jt = {
                        getOriginal: function() {
                            return Rt
                        },
                        getContainer: function() {
                            return Lt.container
                        },
                        getEmbed: function() {
                            return Lt.embed
                        },
                        getMedia: function() {
                            return Lt.media
                        },
                        getType: function() {
                            return Lt.type
                        },
                        getDuration: at,
                        getCurrentTime: function() {
                            return Lt.media.currentTime
                        },
                        getVolume: function() {
                            return Lt.media.volume
                        },
                        isMuted: function() {
                            return Lt.media.muted
                        },
                        isReady: function() {
                            return d(Lt.container, E.classes.ready)
                        },
                        isLoading: function() {
                            return d(Lt.container, E.classes.loading)
                        },
                        isPaused: function() {
                            return Lt.media.paused
                        },
                        on: function(t, e) {
                            return y(Lt.container, t, e),
                            this
                        },
                        play: tt,
                        pause: et,
                        stop: function() {
                            et(),
                            ot()
                        },
                        restart: ot,
                        rewind: rt,
                        forward: it,
                        seek: ot,
                        source: function(t) {
                            if (P.undefined(t)) {
                                var e;
                                switch (Lt.type) {
                                case "youtube":
                                    e = Lt.embed.getVideoUrl();
                                    break;
                                case "vimeo":
                                    Lt.embed.getVideoUrl.then((function(t) {
                                        e = t
                                    }
                                    ));
                                    break;
                                case "soundcloud":
                                    Lt.embed.getCurrentSound((function(t) {
                                        e = t.permalink_url
                                    }
                                    ));
                                    break;
                                default:
                                    e = Lt.media.currentSrc
                                }
                                return e || ""
                            }
                            Ot(t)
                        },
                        poster: function(t) {
                            "video" === Lt.type && Lt.media.setAttribute("poster", t)
                        },
                        setVolume: dt,
                        togglePlay: nt,
                        toggleMute: ft,
                        toggleCaptions: yt,
                        toggleFullscreen: lt,
                        toggleControls: kt,
                        isFullscreen: function() {
                            return Lt.isFullscreen || !1
                        },
                        support: function(t) {
                            return function(t, e) {
                                var n = t.media;
                                if ("video" === t.type)
                                    switch (e) {
                                    case "video/webm":
                                        return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
                                    case "video/mp4":
                                        return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
                                    case "video/ogg":
                                        return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
                                    }
                                else if ("audio" === t.type)
                                    switch (e) {
                                    case "audio/mpeg":
                                        return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
                                    case "audio/ogg":
                                        return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
                                    case "audio/wav":
                                        return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
                                    }
                                return !1
                            }(Lt, t)
                        },
                        destroy: Pt
                    },
                    function() {
                        if (Lt.init)
                            return null;
                        if (O = function() {
                            var t = {
                                supportsFullScreen: !1,
                                isFullScreen: function() {
                                    return !1
                                },
                                requestFullScreen: function() {},
                                cancelFullScreen: function() {},
                                fullScreenEventName: "",
                                element: null,
                                prefix: ""
                            }
                              , n = "webkit o moz ms khtml".split(" ");
                            if (P.undefined(e.cancelFullScreen))
                                for (var r = 0, i = n.length; r < i; r++) {
                                    if (t.prefix = n[r],
                                    !P.undefined(e[t.prefix + "CancelFullScreen"])) {
                                        t.supportsFullScreen = !0;
                                        break
                                    }
                                    if (!P.undefined(e.msExitFullscreen) && e.msFullscreenEnabled) {
                                        t.prefix = "ms",
                                        t.supportsFullScreen = !0;
                                        break
                                    }
                                }
                            else
                                t.supportsFullScreen = !0;
                            return t.supportsFullScreen && (t.fullScreenEventName = "ms" === t.prefix ? "MSFullscreenChange" : t.prefix + "fullscreenchange",
                            t.isFullScreen = function(t) {
                                switch (P.undefined(t) && (t = e.body),
                                this.prefix) {
                                case "":
                                    return e.fullscreenElement === t;
                                case "moz":
                                    return e.mozFullScreenElement === t;
                                default:
                                    return e[this.prefix + "FullscreenElement"] === t
                                }
                            }
                            ,
                            t.requestFullScreen = function(t) {
                                return P.undefined(t) && (t = e.body),
                                "" === this.prefix ? t.requestFullScreen() : t[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
                            }
                            ,
                            t.cancelFullScreen = function() {
                                return "" === this.prefix ? e.cancelFullScreen() : e[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
                            }
                            ,
                            t.element = function() {
                                return "" === this.prefix ? e.fullscreenElement : e[this.prefix + "FullscreenElement"]
                            }
                            ),
                            t
                        }(),
                        Lt.browser = n(),
                        P.htmlElement(Lt.media)) {
                            q();
                            var t = m.tagName.toLowerCase();
                            "div" === t ? (Lt.type = m.getAttribute("data-type"),
                            Lt.embedId = m.getAttribute("data-video-id"),
                            m.removeAttribute("data-type"),
                            m.removeAttribute("data-video-id")) : (Lt.type = t,
                            E.crossorigin = null !== m.getAttribute("crossorigin"),
                            E.autoplay = E.autoplay || null !== m.getAttribute("autoplay"),
                            E.loop = E.loop || null !== m.getAttribute("loop")),
                            Lt.supported = T(Lt.type),
                            Lt.supported.basic && (Lt.container = a(m, e.createElement("div")),
                            Lt.container.setAttribute("tabindex", 0),
                            W(),
                            Mt(Lt.browser.name + " " + Lt.browser.version),
                            G(),
                            (i(E.types.html5, Lt.type) || i(E.types.embed, Lt.type) && !Lt.supported.full) && (It(),
                            Ct(),
                            $()),
                            Lt.init = !0)
                        }
                    }(),
                    Lt.init ? jt : null
                }
                function S(t, n) {
                    var r = new XMLHttpRequest;
                    if (!P.string(n) || !P.htmlElement(e.querySelector("#" + n))) {
                        var i = e.createElement("div");
                        i.setAttribute("hidden", ""),
                        P.string(n) && i.setAttribute("id", n),
                        e.body.insertBefore(i, e.body.childNodes[0]),
                        "withCredentials"in r && (r.open("GET", t, !0),
                        r.onload = function() {
                            i.innerHTML = r.responseText
                        }
                        ,
                        r.send())
                    }
                }
                function T(t) {
                    var r = n()
                      , i = r.isIE && r.version <= 9
                      , o = r.isIos
                      , a = r.isIphone
                      , s = !!e.createElement("audio").canPlayType
                      , u = !!e.createElement("video").canPlayType
                      , c = !1
                      , l = !1;
                    switch (t) {
                    case "video":
                        l = (c = u) && !i && !a;
                        break;
                    case "audio":
                        l = (c = s) && !i;
                        break;
                    case "vimeo":
                        c = !0,
                        l = !i && !o;
                        break;
                    case "youtube":
                        c = !0,
                        l = !i && !o,
                        o && !a && r.version >= 10 && (l = !0);
                        break;
                    case "soundcloud":
                        c = !0,
                        l = !i && !a;
                        break;
                    default:
                        l = (c = s && u) && !i
                    }
                    return {
                        basic: c,
                        full: l
                    }
                }
                function k(t) {
                    if (P.string(t) ? t = e.querySelector(t) : P.undefined(t) && (t = e.body),
                    P.htmlElement(t)) {
                        var n = t.querySelectorAll("." + A.classes.setup)
                          , r = [];
                        return Array.prototype.slice.call(n).forEach((function(t) {
                            P.object(t.plyr) && r.push(t.plyr)
                        }
                        )),
                        r
                    }
                    return []
                }
                var O, _ = {
                    x: 0,
                    y: 0
                }, A = {
                    enabled: !0,
                    debug: !1,
                    autoplay: !1,
                    loop: !1,
                    seekTime: 10,
                    volume: 10,
                    volumeMin: 0,
                    volumeMax: 10,
                    volumeStep: 1,
                    duration: null,
                    displayDuration: !0,
                    loadSprite: !0,
                    iconPrefix: "plyr",
                    iconUrl: "https://cdn.plyr.io/2.0.17/plyr.svg",
                    blankUrl: "https://cdn.plyr.io/static/blank.mp4",
                    clickToPlay: !0,
                    hideControls: !0,
                    showPosterOnEnd: !1,
                    disableContextMenu: !0,
                    keyboardShorcuts: {
                        focused: !0,
                        global: !1
                    },
                    tooltips: {
                        controls: !1,
                        seek: !0
                    },
                    selectors: {
                        html5: "video, audio",
                        embed: "[data-type]",
                        editable: "input, textarea, select, [contenteditable]",
                        container: ".plyr",
                        controls: {
                            container: null,
                            wrapper: ".plyr__controls"
                        },
                        labels: "[data-plyr]",
                        buttons: {
                            seek: '[data-plyr="seek"]',
                            play: '[data-plyr="play"]',
                            pause: '[data-plyr="pause"]',
                            restart: '[data-plyr="restart"]',
                            rewind: '[data-plyr="rewind"]',
                            forward: '[data-plyr="fast-forward"]',
                            mute: '[data-plyr="mute"]',
                            captions: '[data-plyr="captions"]',
                            fullscreen: '[data-plyr="fullscreen"]'
                        },
                        volume: {
                            input: '[data-plyr="volume"]',
                            display: ".plyr__volume--display"
                        },
                        progress: {
                            container: ".plyr__progress",
                            buffer: ".plyr__progress--buffer",
                            played: ".plyr__progress--played"
                        },
                        captions: ".plyr__captions",
                        currentTime: ".plyr__time--current",
                        duration: ".plyr__time--duration"
                    },
                    classes: {
                        setup: "plyr--setup",
                        ready: "plyr--ready",
                        videoWrapper: "plyr__video-wrapper",
                        embedWrapper: "plyr__video-embed",
                        type: "plyr--{0}",
                        stopped: "plyr--stopped",
                        playing: "plyr--playing",
                        muted: "plyr--muted",
                        loading: "plyr--loading",
                        hover: "plyr--hover",
                        tooltip: "plyr__tooltip",
                        hidden: "plyr__sr-only",
                        hideControls: "plyr--hide-controls",
                        isIos: "plyr--is-ios",
                        isTouch: "plyr--is-touch",
                        captions: {
                            enabled: "plyr--captions-enabled",
                            active: "plyr--captions-active"
                        },
                        fullscreen: {
                            enabled: "plyr--fullscreen-enabled",
                            fallback: "plyr--fullscreen-fallback",
                            active: "plyr--fullscreen-active"
                        },
                        tabFocus: "tab-focus"
                    },
                    captions: {
                        defaultActive: !1
                    },
                    fullscreen: {
                        enabled: !0,
                        fallback: !0,
                        allowAudio: !1
                    },
                    storage: {
                        enabled: !0,
                        key: "plyr"
                    },
                    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
                    i18n: {
                        restart: "Restart",
                        rewind: "Rewind {seektime} secs",
                        play: "Play",
                        pause: "Pause",
                        forward: "Forward {seektime} secs",
                        played: "played",
                        buffered: "buffered",
                        currentTime: "Current time",
                        duration: "Duration",
                        volume: "Volume",
                        toggleMute: "Toggle Mute",
                        toggleCaptions: "Toggle Captions",
                        toggleFullscreen: "Toggle Fullscreen",
                        frameTitle: "Player for {title}"
                    },
                    types: {
                        embed: ["youtube", "vimeo", "soundcloud"],
                        html5: ["video", "audio"]
                    },
                    urls: {
                        vimeo: {
                            api: "https://player.vimeo.com/api/player.js"
                        },
                        youtube: {
                            api: "https://www.youtube.com/iframe_api"
                        },
                        soundcloud: {
                            api: "https://w.soundcloud.com/player/api.js"
                        }
                    },
                    listeners: {
                        seek: null,
                        play: null,
                        pause: null,
                        restart: null,
                        rewind: null,
                        forward: null,
                        mute: null,
                        volume: null,
                        captions: null,
                        fullscreen: null
                    },
                    events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied"],
                    logPrefix: "[Plyr]"
                }, P = {
                    object: function(t) {
                        return null !== t && "object" == typeof t
                    },
                    array: function(t) {
                        return null !== t && "object" == typeof t && t.constructor === Array
                    },
                    number: function(t) {
                        return null !== t && ("number" == typeof t && !isNaN(t - 0) || "object" == typeof t && t.constructor === Number)
                    },
                    string: function(t) {
                        return null !== t && ("string" == typeof t || "object" == typeof t && t.constructor === String)
                    },
                    boolean: function(t) {
                        return null !== t && "boolean" == typeof t
                    },
                    nodeList: function(t) {
                        return null !== t && t instanceof NodeList
                    },
                    htmlElement: function(t) {
                        return null !== t && t instanceof HTMLElement
                    },
                    function: function(t) {
                        return null !== t && "function" == typeof t
                    },
                    undefined: function(t) {
                        return null !== t && void 0 === t
                    }
                }, I = {
                    supported: function() {
                        try {
                            t.localStorage.setItem("___test", "OK");
                            var e = t.localStorage.getItem("___test");
                            return t.localStorage.removeItem("___test"),
                            "OK" === e
                        } catch (t) {
                            return !1
                        }
                        return !1
                    }()
                };
                return {
                    setup: function(t, n) {
                        function r(t, e) {
                            d(e, A.classes.hook) || i.push({
                                target: t,
                                media: e
                            })
                        }
                        var i = []
                          , o = []
                          , a = [A.selectors.html5, A.selectors.embed].join(",");
                        if (P.string(t) ? t = e.querySelectorAll(t) : P.htmlElement(t) ? t = [t] : P.nodeList(t) || P.array(t) || P.string(t) || (P.undefined(n) && P.object(t) && (n = t),
                        t = e.querySelectorAll(a)),
                        P.nodeList(t) && (t = Array.prototype.slice.call(t)),
                        !T().basic || !t.length)
                            return !1;
                        for (var s = 0; s < t.length; s++) {
                            var u = t[s]
                              , c = u.querySelectorAll(a);
                            if (c.length)
                                for (var l = 0; l < c.length; l++)
                                    r(u, c[l]);
                            else
                                p(u, a) && r(u, u)
                        }
                        return i.forEach((function(t) {
                            var e = t.target
                              , r = t.media
                              , i = {};
                            try {
                                i = JSON.parse(e.getAttribute("data-plyr"))
                            } catch (t) {}
                            var a = x({}, A, n, i);
                            if (!a.enabled)
                                return null;
                            var s = new E(r,a);
                            if (P.object(s)) {
                                if (a.debug) {
                                    var u = a.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                                    y(s.getContainer(), u.join(" "), (function(t) {
                                        console.log([a.logPrefix, "event:", t.type].join(" "), t.detail.plyr)
                                    }
                                    ))
                                }
                                v(s.getContainer(), "setup", !0, {
                                    plyr: s
                                }),
                                o.push(s)
                            }
                        }
                        )),
                        o
                    },
                    supported: T,
                    loadSprite: S,
                    get: k
                }
            }
            )),
            function() {
                function t(t, e) {
                    e = e || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
                    n
                }
                "function" != typeof window.CustomEvent && (t.prototype = window.Event.prototype,
                window.CustomEvent = t)
            }()
        },
        6763: function(t, e, n) {
            const r = n(3456)
              , i = n(9572)
              , o = n(9933)
              , a = n(6246);
            function s(t, e, n, o, a) {
                const s = [].slice.call(arguments, 1)
                  , u = s.length
                  , c = "function" == typeof s[u - 1];
                if (!c && !r())
                    throw new Error("Callback required as last argument");
                if (!c) {
                    if (u < 1)
                        throw new Error("Too few arguments provided");
                    return 1 === u ? (n = e,
                    e = o = void 0) : 2 !== u || e.getContext || (o = n,
                    n = e,
                    e = void 0),
                    new Promise((function(r, a) {
                        try {
                            const a = i.create(n, o);
                            r(t(a, e, o))
                        } catch (t) {
                            a(t)
                        }
                    }
                    ))
                }
                if (u < 2)
                    throw new Error("Too few arguments provided");
                2 === u ? (a = n,
                n = e,
                e = o = void 0) : 3 === u && (e.getContext && void 0 === a ? (a = o,
                o = void 0) : (a = o,
                o = n,
                n = e,
                e = void 0));
                try {
                    const r = i.create(n, o);
                    a(null, t(r, e, o))
                } catch (t) {
                    a(t)
                }
            }
            e.create = i.create,
            e.toCanvas = s.bind(null, o.render),
            e.toDataURL = s.bind(null, o.renderToDataURL),
            e.toString = s.bind(null, (function(t, e, n) {
                return a.render(t, n)
            }
            ))
        },
        3456: function(t) {
            t.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        6292: function(t, e, n) {
            const r = n(531).getSymbolSize;
            e.getRowColCoords = function(t) {
                if (1 === t)
                    return [];
                const e = Math.floor(t / 7) + 2
                  , n = r(t)
                  , i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2))
                  , o = [n - 7];
                for (let t = 1; t < e - 1; t++)
                    o[t] = o[t - 1] - i;
                return o.push(6),
                o.reverse()
            }
            ,
            e.getPositions = function(t) {
                const n = []
                  , r = e.getRowColCoords(t)
                  , i = r.length;
                for (let t = 0; t < i; t++)
                    for (let e = 0; e < i; e++)
                        0 === t && 0 === e || 0 === t && e === i - 1 || t === i - 1 && 0 === e || n.push([r[t], r[e]]);
                return n
            }
        },
        8895: function(t, e, n) {
            const r = n(725)
              , i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
            function o(t) {
                this.mode = r.ALPHANUMERIC,
                this.data = t
            }
            o.getBitsLength = function(t) {
                return 11 * Math.floor(t / 2) + t % 2 * 6
            }
            ,
            o.prototype.getLength = function() {
                return this.data.length
            }
            ,
            o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }
            ,
            o.prototype.write = function(t) {
                let e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    let n = 45 * i.indexOf(this.data[e]);
                    n += i.indexOf(this.data[e + 1]),
                    t.put(n, 11)
                }
                this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6)
            }
            ,
            t.exports = o
        },
        7606: function(t) {
            function e() {
                this.buffer = [],
                this.length = 0
            }
            e.prototype = {
                get: function(t) {
                    const e = Math.floor(t / 8);
                    return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                },
                put: function(t, e) {
                    for (let n = 0; n < e; n++)
                        this.putBit(1 == (t >>> e - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    const e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0),
                    t && (this.buffer[e] |= 128 >>> this.length % 8),
                    this.length++
                }
            },
            t.exports = e
        },
        9922: function(t) {
            function e(t) {
                if (!t || t < 1)
                    throw new Error("BitMatrix size must be defined and greater than 0");
                this.size = t,
                this.data = new Uint8Array(t * t),
                this.reservedBit = new Uint8Array(t * t)
            }
            e.prototype.set = function(t, e, n, r) {
                const i = t * this.size + e;
                this.data[i] = n,
                r && (this.reservedBit[i] = !0)
            }
            ,
            e.prototype.get = function(t, e) {
                return this.data[t * this.size + e]
            }
            ,
            e.prototype.xor = function(t, e, n) {
                this.data[t * this.size + e] ^= n
            }
            ,
            e.prototype.isReserved = function(t, e) {
                return this.reservedBit[t * this.size + e]
            }
            ,
            t.exports = e
        },
        3145: function(t, e, n) {
            const r = n(6869)
              , i = n(725);
            function o(t) {
                this.mode = i.BYTE,
                this.data = new Uint8Array(r(t))
            }
            o.getBitsLength = function(t) {
                return 8 * t
            }
            ,
            o.prototype.getLength = function() {
                return this.data.length
            }
            ,
            o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }
            ,
            o.prototype.write = function(t) {
                for (let e = 0, n = this.data.length; e < n; e++)
                    t.put(this.data[e], 8)
            }
            ,
            t.exports = o
        },
        4729: function(t, e, n) {
            const r = n(9931)
              , i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]
              , o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            e.getBlocksCount = function(t, e) {
                switch (e) {
                case r.L:
                    return i[4 * (t - 1) + 0];
                case r.M:
                    return i[4 * (t - 1) + 1];
                case r.Q:
                    return i[4 * (t - 1) + 2];
                case r.H:
                    return i[4 * (t - 1) + 3];
                default:
                    return
                }
            }
            ,
            e.getTotalCodewordsCount = function(t, e) {
                switch (e) {
                case r.L:
                    return o[4 * (t - 1) + 0];
                case r.M:
                    return o[4 * (t - 1) + 1];
                case r.Q:
                    return o[4 * (t - 1) + 2];
                case r.H:
                    return o[4 * (t - 1) + 3];
                default:
                    return
                }
            }
        },
        9931: function(t, e) {
            e.L = {
                bit: 1
            },
            e.M = {
                bit: 0
            },
            e.Q = {
                bit: 3
            },
            e.H = {
                bit: 2
            },
            e.isValid = function(t) {
                return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
            }
            ,
            e.from = function(t, n) {
                if (e.isValid(t))
                    return t;
                try {
                    return function(t) {
                        if ("string" != typeof t)
                            throw new Error("Param is not a string");
                        switch (t.toLowerCase()) {
                        case "l":
                        case "low":
                            return e.L;
                        case "m":
                        case "medium":
                            return e.M;
                        case "q":
                        case "quartile":
                            return e.Q;
                        case "h":
                        case "high":
                            return e.H;
                        default:
                            throw new Error("Unknown EC Level: " + t)
                        }
                    }(t)
                } catch (t) {
                    return n
                }
            }
        },
        243: function(t, e, n) {
            const r = n(531).getSymbolSize;
            e.getPositions = function(t) {
                const e = r(t);
                return [[0, 0], [e - 7, 0], [0, e - 7]]
            }
        },
        9553: function(t, e, n) {
            const r = n(531)
              , i = r.getBCHDigit(1335);
            e.getEncodedBits = function(t, e) {
                const n = t.bit << 3 | e;
                let o = n << 10;
                for (; r.getBCHDigit(o) - i >= 0; )
                    o ^= 1335 << r.getBCHDigit(o) - i;
                return 21522 ^ (n << 10 | o)
            }
        },
        7860: function(t, e) {
            const n = new Uint8Array(512)
              , r = new Uint8Array(256);
            !function() {
                let t = 1;
                for (let e = 0; e < 255; e++)
                    n[e] = t,
                    r[t] = e,
                    t <<= 1,
                    256 & t && (t ^= 285);
                for (let t = 255; t < 512; t++)
                    n[t] = n[t - 255]
            }(),
            e.log = function(t) {
                if (t < 1)
                    throw new Error("log(" + t + ")");
                return r[t]
            }
            ,
            e.exp = function(t) {
                return n[t]
            }
            ,
            e.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : n[r[t] + r[e]]
            }
        },
        2891: function(t, e, n) {
            const r = n(725)
              , i = n(531);
            function o(t) {
                this.mode = r.KANJI,
                this.data = t
            }
            o.getBitsLength = function(t) {
                return 13 * t
            }
            ,
            o.prototype.getLength = function() {
                return this.data.length
            }
            ,
            o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }
            ,
            o.prototype.write = function(t) {
                let e;
                for (e = 0; e < this.data.length; e++) {
                    let n = i.toSJIS(this.data[e]);
                    if (n >= 33088 && n <= 40956)
                        n -= 33088;
                    else {
                        if (!(n >= 57408 && n <= 60351))
                            throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                        n -= 49472
                    }
                    n = 192 * (n >>> 8 & 255) + (255 & n),
                    t.put(n, 13)
                }
            }
            ,
            t.exports = o
        },
        9806: function(t, e) {
            e.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            const n = 3
              , r = 3
              , i = 40
              , o = 10;
            function a(t, n, r) {
                switch (t) {
                case e.Patterns.PATTERN000:
                    return (n + r) % 2 == 0;
                case e.Patterns.PATTERN001:
                    return n % 2 == 0;
                case e.Patterns.PATTERN010:
                    return r % 3 == 0;
                case e.Patterns.PATTERN011:
                    return (n + r) % 3 == 0;
                case e.Patterns.PATTERN100:
                    return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                case e.Patterns.PATTERN101:
                    return n * r % 2 + n * r % 3 == 0;
                case e.Patterns.PATTERN110:
                    return (n * r % 2 + n * r % 3) % 2 == 0;
                case e.Patterns.PATTERN111:
                    return (n * r % 3 + (n + r) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + t)
                }
            }
            e.isValid = function(t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }
            ,
            e.from = function(t) {
                return e.isValid(t) ? parseInt(t, 10) : void 0
            }
            ,
            e.getPenaltyN1 = function(t) {
                const e = t.size;
                let r = 0
                  , i = 0
                  , o = 0
                  , a = null
                  , s = null;
                for (let u = 0; u < e; u++) {
                    i = o = 0,
                    a = s = null;
                    for (let c = 0; c < e; c++) {
                        let e = t.get(u, c);
                        e === a ? i++ : (i >= 5 && (r += n + (i - 5)),
                        a = e,
                        i = 1),
                        e = t.get(c, u),
                        e === s ? o++ : (o >= 5 && (r += n + (o - 5)),
                        s = e,
                        o = 1)
                    }
                    i >= 5 && (r += n + (i - 5)),
                    o >= 5 && (r += n + (o - 5))
                }
                return r
            }
            ,
            e.getPenaltyN2 = function(t) {
                const e = t.size;
                let n = 0;
                for (let r = 0; r < e - 1; r++)
                    for (let i = 0; i < e - 1; i++) {
                        const e = t.get(r, i) + t.get(r, i + 1) + t.get(r + 1, i) + t.get(r + 1, i + 1);
                        4 !== e && 0 !== e || n++
                    }
                return n * r
            }
            ,
            e.getPenaltyN3 = function(t) {
                const e = t.size;
                let n = 0
                  , r = 0
                  , o = 0;
                for (let i = 0; i < e; i++) {
                    r = o = 0;
                    for (let a = 0; a < e; a++)
                        r = r << 1 & 2047 | t.get(i, a),
                        a >= 10 && (1488 === r || 93 === r) && n++,
                        o = o << 1 & 2047 | t.get(a, i),
                        a >= 10 && (1488 === o || 93 === o) && n++
                }
                return n * i
            }
            ,
            e.getPenaltyN4 = function(t) {
                let e = 0;
                const n = t.data.length;
                for (let r = 0; r < n; r++)
                    e += t.data[r];
                return Math.abs(Math.ceil(100 * e / n / 5) - 10) * o
            }
            ,
            e.applyMask = function(t, e) {
                const n = e.size;
                for (let r = 0; r < n; r++)
                    for (let i = 0; i < n; i++)
                        e.isReserved(i, r) || e.xor(i, r, a(t, i, r))
            }
            ,
            e.getBestMask = function(t, n) {
                const r = Object.keys(e.Patterns).length;
                let i = 0
                  , o = 1 / 0;
                for (let a = 0; a < r; a++) {
                    n(a),
                    e.applyMask(a, t);
                    const r = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                    e.applyMask(a, t),
                    r < o && (o = r,
                    i = a)
                }
                return i
            }
        },
        725: function(t, e, n) {
            const r = n(433)
              , i = n(3005);
            e.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            },
            e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            },
            e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            },
            e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            },
            e.MIXED = {
                bit: -1
            },
            e.getCharCountIndicator = function(t, e) {
                if (!t.ccBits)
                    throw new Error("Invalid mode: " + t);
                if (!r.isValid(e))
                    throw new Error("Invalid version: " + e);
                return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
            }
            ,
            e.getBestModeForData = function(t) {
                return i.testNumeric(t) ? e.NUMERIC : i.testAlphanumeric(t) ? e.ALPHANUMERIC : i.testKanji(t) ? e.KANJI : e.BYTE
            }
            ,
            e.toString = function(t) {
                if (t && t.id)
                    return t.id;
                throw new Error("Invalid mode")
            }
            ,
            e.isValid = function(t) {
                return t && t.bit && t.ccBits
            }
            ,
            e.from = function(t, n) {
                if (e.isValid(t))
                    return t;
                try {
                    return function(t) {
                        if ("string" != typeof t)
                            throw new Error("Param is not a string");
                        switch (t.toLowerCase()) {
                        case "numeric":
                            return e.NUMERIC;
                        case "alphanumeric":
                            return e.ALPHANUMERIC;
                        case "kanji":
                            return e.KANJI;
                        case "byte":
                            return e.BYTE;
                        default:
                            throw new Error("Unknown mode: " + t)
                        }
                    }(t)
                } catch (t) {
                    return n
                }
            }
        },
        3368: function(t, e, n) {
            const r = n(725);
            function i(t) {
                this.mode = r.NUMERIC,
                this.data = t.toString()
            }
            i.getBitsLength = function(t) {
                return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
            }
            ,
            i.prototype.getLength = function() {
                return this.data.length
            }
            ,
            i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }
            ,
            i.prototype.write = function(t) {
                let e, n, r;
                for (e = 0; e + 3 <= this.data.length; e += 3)
                    n = this.data.substr(e, 3),
                    r = parseInt(n, 10),
                    t.put(r, 10);
                const i = this.data.length - e;
                i > 0 && (n = this.data.substr(e),
                r = parseInt(n, 10),
                t.put(r, 3 * i + 1))
            }
            ,
            t.exports = i
        },
        1088: function(t, e, n) {
            const r = n(7860);
            e.mul = function(t, e) {
                const n = new Uint8Array(t.length + e.length - 1);
                for (let i = 0; i < t.length; i++)
                    for (let o = 0; o < e.length; o++)
                        n[i + o] ^= r.mul(t[i], e[o]);
                return n
            }
            ,
            e.mod = function(t, e) {
                let n = new Uint8Array(t);
                for (; n.length - e.length >= 0; ) {
                    const t = n[0];
                    for (let i = 0; i < e.length; i++)
                        n[i] ^= r.mul(e[i], t);
                    let i = 0;
                    for (; i < n.length && 0 === n[i]; )
                        i++;
                    n = n.slice(i)
                }
                return n
            }
            ,
            e.generateECPolynomial = function(t) {
                let n = new Uint8Array([1]);
                for (let i = 0; i < t; i++)
                    n = e.mul(n, new Uint8Array([1, r.exp(i)]));
                return n
            }
        },
        9572: function(t, e, n) {
            const r = n(531)
              , i = n(9931)
              , o = n(7606)
              , a = n(9922)
              , s = n(6292)
              , u = n(243)
              , c = n(9806)
              , l = n(4729)
              , f = n(6794)
              , d = n(8985)
              , p = n(9553)
              , h = n(725)
              , m = n(9438);
            function y(t, e, n) {
                const r = t.size
                  , i = p.getEncodedBits(e, n);
                let o, a;
                for (o = 0; o < 15; o++)
                    a = 1 == (i >> o & 1),
                    o < 6 ? t.set(o, 8, a, !0) : o < 8 ? t.set(o + 1, 8, a, !0) : t.set(r - 15 + o, 8, a, !0),
                    o < 8 ? t.set(8, r - o - 1, a, !0) : o < 9 ? t.set(8, 15 - o - 1 + 1, a, !0) : t.set(8, 15 - o - 1, a, !0);
                t.set(r - 8, 8, 1, !0)
            }
            function g(t, e, n) {
                const i = new o;
                n.forEach((function(e) {
                    i.put(e.mode.bit, 4),
                    i.put(e.getLength(), h.getCharCountIndicator(e.mode, t)),
                    e.write(i)
                }
                ));
                const a = 8 * (r.getSymbolTotalCodewords(t) - l.getTotalCodewordsCount(t, e));
                for (i.getLengthInBits() + 4 <= a && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
                    i.putBit(0);
                const s = (a - i.getLengthInBits()) / 8;
                for (let t = 0; t < s; t++)
                    i.put(t % 2 ? 17 : 236, 8);
                return function(t, e, n) {
                    const i = r.getSymbolTotalCodewords(e)
                      , o = l.getTotalCodewordsCount(e, n)
                      , a = i - o
                      , s = l.getBlocksCount(e, n)
                      , u = s - i % s
                      , c = Math.floor(i / s)
                      , d = Math.floor(a / s)
                      , p = d + 1
                      , h = c - d
                      , m = new f(h);
                    let y = 0;
                    const g = new Array(s)
                      , v = new Array(s);
                    let b = 0;
                    const w = new Uint8Array(t.buffer);
                    for (let t = 0; t < s; t++) {
                        const e = t < u ? d : p;
                        g[t] = w.slice(y, y + e),
                        v[t] = m.encode(g[t]),
                        y += e,
                        b = Math.max(b, e)
                    }
                    const x = new Uint8Array(i);
                    let E, S, T = 0;
                    for (E = 0; E < b; E++)
                        for (S = 0; S < s; S++)
                            E < g[S].length && (x[T++] = g[S][E]);
                    for (E = 0; E < h; E++)
                        for (S = 0; S < s; S++)
                            x[T++] = v[S][E];
                    return x
                }(i, t, e)
            }
            function v(t, e, n, i) {
                let o;
                if (Array.isArray(t))
                    o = m.fromArray(t);
                else {
                    if ("string" != typeof t)
                        throw new Error("Invalid data");
                    {
                        let r = e;
                        if (!r) {
                            const e = m.rawSplit(t);
                            r = d.getBestVersionForData(e, n)
                        }
                        o = m.fromString(t, r || 40)
                    }
                }
                const l = d.getBestVersionForData(o, n);
                if (!l)
                    throw new Error("The amount of data is too big to be stored in a QR Code");
                if (e) {
                    if (e < l)
                        throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + l + ".\n")
                } else
                    e = l;
                const f = g(e, n, o)
                  , p = r.getSymbolSize(e)
                  , h = new a(p);
                return function(t, e) {
                    const n = t.size
                      , r = u.getPositions(e);
                    for (let e = 0; e < r.length; e++) {
                        const i = r[e][0]
                          , o = r[e][1];
                        for (let e = -1; e <= 7; e++)
                            if (!(i + e <= -1 || n <= i + e))
                                for (let r = -1; r <= 7; r++)
                                    o + r <= -1 || n <= o + r || (e >= 0 && e <= 6 && (0 === r || 6 === r) || r >= 0 && r <= 6 && (0 === e || 6 === e) || e >= 2 && e <= 4 && r >= 2 && r <= 4 ? t.set(i + e, o + r, !0, !0) : t.set(i + e, o + r, !1, !0))
                    }
                }(h, e),
                function(t) {
                    const e = t.size;
                    for (let n = 8; n < e - 8; n++) {
                        const e = n % 2 == 0;
                        t.set(n, 6, e, !0),
                        t.set(6, n, e, !0)
                    }
                }(h),
                function(t, e) {
                    const n = s.getPositions(e);
                    for (let e = 0; e < n.length; e++) {
                        const r = n[e][0]
                          , i = n[e][1];
                        for (let e = -2; e <= 2; e++)
                            for (let n = -2; n <= 2; n++)
                                -2 === e || 2 === e || -2 === n || 2 === n || 0 === e && 0 === n ? t.set(r + e, i + n, !0, !0) : t.set(r + e, i + n, !1, !0)
                    }
                }(h, e),
                y(h, n, 0),
                e >= 7 && function(t, e) {
                    const n = t.size
                      , r = d.getEncodedBits(e);
                    let i, o, a;
                    for (let e = 0; e < 18; e++)
                        i = Math.floor(e / 3),
                        o = e % 3 + n - 8 - 3,
                        a = 1 == (r >> e & 1),
                        t.set(i, o, a, !0),
                        t.set(o, i, a, !0)
                }(h, e),
                function(t, e) {
                    const n = t.size;
                    let r = -1
                      , i = n - 1
                      , o = 7
                      , a = 0;
                    for (let s = n - 1; s > 0; s -= 2)
                        for (6 === s && s--; ; ) {
                            for (let n = 0; n < 2; n++)
                                if (!t.isReserved(i, s - n)) {
                                    let r = !1;
                                    a < e.length && (r = 1 == (e[a] >>> o & 1)),
                                    t.set(i, s - n, r),
                                    o--,
                                    -1 === o && (a++,
                                    o = 7)
                                }
                            if (i += r,
                            i < 0 || n <= i) {
                                i -= r,
                                r = -r;
                                break
                            }
                        }
                }(h, f),
                isNaN(i) && (i = c.getBestMask(h, y.bind(null, h, n))),
                c.applyMask(i, h),
                y(h, n, i),
                {
                    modules: h,
                    version: e,
                    errorCorrectionLevel: n,
                    maskPattern: i,
                    segments: o
                }
            }
            e.create = function(t, e) {
                if (void 0 === t || "" === t)
                    throw new Error("No input text");
                let n, o, a = i.M;
                return void 0 !== e && (a = i.from(e.errorCorrectionLevel, i.M),
                n = d.from(e.version),
                o = c.from(e.maskPattern),
                e.toSJISFunc && r.setToSJISFunction(e.toSJISFunc)),
                v(t, n, a, o)
            }
        },
        6794: function(t, e, n) {
            const r = n(1088);
            function i(t) {
                this.genPoly = void 0,
                this.degree = t,
                this.degree && this.initialize(this.degree)
            }
            i.prototype.initialize = function(t) {
                this.degree = t,
                this.genPoly = r.generateECPolynomial(this.degree)
            }
            ,
            i.prototype.encode = function(t) {
                if (!this.genPoly)
                    throw new Error("Encoder not initialized");
                const e = new Uint8Array(t.length + this.degree);
                e.set(t);
                const n = r.mod(e, this.genPoly)
                  , i = this.degree - n.length;
                if (i > 0) {
                    const t = new Uint8Array(this.degree);
                    return t.set(n, i),
                    t
                }
                return n
            }
            ,
            t.exports = i
        },
        3005: function(t, e) {
            const n = "[0-9]+";
            let r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            r = r.replace(/u/g, "\\u");
            const i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
            e.KANJI = new RegExp(r,"g"),
            e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),
            e.BYTE = new RegExp(i,"g"),
            e.NUMERIC = new RegExp(n,"g"),
            e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+","g");
            const o = new RegExp("^" + r + "$")
              , a = new RegExp("^[0-9]+$")
              , s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            e.testKanji = function(t) {
                return o.test(t)
            }
            ,
            e.testNumeric = function(t) {
                return a.test(t)
            }
            ,
            e.testAlphanumeric = function(t) {
                return s.test(t)
            }
        },
        9438: function(t, e, n) {
            const r = n(725)
              , i = n(3368)
              , o = n(8895)
              , a = n(3145)
              , s = n(2891)
              , u = n(3005)
              , c = n(531)
              , l = n(7742);
            function f(t) {
                return unescape(encodeURIComponent(t)).length
            }
            function d(t, e, n) {
                const r = [];
                let i;
                for (; null !== (i = t.exec(n)); )
                    r.push({
                        data: i[0],
                        index: i.index,
                        mode: e,
                        length: i[0].length
                    });
                return r
            }
            function p(t) {
                const e = d(u.NUMERIC, r.NUMERIC, t)
                  , n = d(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
                let i, o;
                c.isKanjiModeEnabled() ? (i = d(u.BYTE, r.BYTE, t),
                o = d(u.KANJI, r.KANJI, t)) : (i = d(u.BYTE_KANJI, r.BYTE, t),
                o = []);
                return e.concat(n, i, o).sort((function(t, e) {
                    return t.index - e.index
                }
                )).map((function(t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                }
                ))
            }
            function h(t, e) {
                switch (e) {
                case r.NUMERIC:
                    return i.getBitsLength(t);
                case r.ALPHANUMERIC:
                    return o.getBitsLength(t);
                case r.KANJI:
                    return s.getBitsLength(t);
                case r.BYTE:
                    return a.getBitsLength(t)
                }
            }
            function m(t, e) {
                let n;
                const u = r.getBestModeForData(t);
                if (n = r.from(e, u),
                n !== r.BYTE && n.bit < u.bit)
                    throw new Error('"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(u));
                switch (n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE),
                n) {
                case r.NUMERIC:
                    return new i(t);
                case r.ALPHANUMERIC:
                    return new o(t);
                case r.KANJI:
                    return new s(t);
                case r.BYTE:
                    return new a(t)
                }
            }
            e.fromArray = function(t) {
                return t.reduce((function(t, e) {
                    return "string" == typeof e ? t.push(m(e, null)) : e.data && t.push(m(e.data, e.mode)),
                    t
                }
                ), [])
            }
            ,
            e.fromString = function(t, n) {
                const i = function(t) {
                    const e = [];
                    for (let n = 0; n < t.length; n++) {
                        const i = t[n];
                        switch (i.mode) {
                        case r.NUMERIC:
                            e.push([i, {
                                data: i.data,
                                mode: r.ALPHANUMERIC,
                                length: i.length
                            }, {
                                data: i.data,
                                mode: r.BYTE,
                                length: i.length
                            }]);
                            break;
                        case r.ALPHANUMERIC:
                            e.push([i, {
                                data: i.data,
                                mode: r.BYTE,
                                length: i.length
                            }]);
                            break;
                        case r.KANJI:
                            e.push([i, {
                                data: i.data,
                                mode: r.BYTE,
                                length: f(i.data)
                            }]);
                            break;
                        case r.BYTE:
                            e.push([{
                                data: i.data,
                                mode: r.BYTE,
                                length: f(i.data)
                            }])
                        }
                    }
                    return e
                }(p(t, c.isKanjiModeEnabled()))
                  , o = function(t, e) {
                    const n = {}
                      , i = {
                        start: {}
                    };
                    let o = ["start"];
                    for (let a = 0; a < t.length; a++) {
                        const s = t[a]
                          , u = [];
                        for (let t = 0; t < s.length; t++) {
                            const c = s[t]
                              , l = "" + a + t;
                            u.push(l),
                            n[l] = {
                                node: c,
                                lastCount: 0
                            },
                            i[l] = {};
                            for (let t = 0; t < o.length; t++) {
                                const a = o[t];
                                n[a] && n[a].node.mode === c.mode ? (i[a][l] = h(n[a].lastCount + c.length, c.mode) - h(n[a].lastCount, c.mode),
                                n[a].lastCount += c.length) : (n[a] && (n[a].lastCount = c.length),
                                i[a][l] = h(c.length, c.mode) + 4 + r.getCharCountIndicator(c.mode, e))
                            }
                        }
                        o = u
                    }
                    for (let t = 0; t < o.length; t++)
                        i[o[t]].end = 0;
                    return {
                        map: i,
                        table: n
                    }
                }(i, n)
                  , a = l.find_path(o.map, "start", "end")
                  , s = [];
                for (let t = 1; t < a.length - 1; t++)
                    s.push(o.table[a[t]].node);
                return e.fromArray(function(t) {
                    return t.reduce((function(t, e) {
                        const n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                        return n && n.mode === e.mode ? (t[t.length - 1].data += e.data,
                        t) : (t.push(e),
                        t)
                    }
                    ), [])
                }(s))
            }
            ,
            e.rawSplit = function(t) {
                return e.fromArray(p(t, c.isKanjiModeEnabled()))
            }
        },
        531: function(t, e) {
            let n;
            const r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            e.getSymbolSize = function(t) {
                if (!t)
                    throw new Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40)
                    throw new Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }
            ,
            e.getSymbolTotalCodewords = function(t) {
                return r[t]
            }
            ,
            e.getBCHDigit = function(t) {
                let e = 0;
                for (; 0 !== t; )
                    e++,
                    t >>>= 1;
                return e
            }
            ,
            e.setToSJISFunction = function(t) {
                if ("function" != typeof t)
                    throw new Error('"toSJISFunc" is not a valid function.');
                n = t
            }
            ,
            e.isKanjiModeEnabled = function() {
                return void 0 !== n
            }
            ,
            e.toSJIS = function(t) {
                return n(t)
            }
        },
        433: function(t, e) {
            e.isValid = function(t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        8985: function(t, e, n) {
            const r = n(531)
              , i = n(4729)
              , o = n(9931)
              , a = n(725)
              , s = n(433)
              , u = r.getBCHDigit(7973);
            function c(t, e) {
                return a.getCharCountIndicator(t, e) + 4
            }
            function l(t, e) {
                let n = 0;
                return t.forEach((function(t) {
                    const r = c(t.mode, e);
                    n += r + t.getBitsLength()
                }
                )),
                n
            }
            e.from = function(t, e) {
                return s.isValid(t) ? parseInt(t, 10) : e
            }
            ,
            e.getCapacity = function(t, e, n) {
                if (!s.isValid(t))
                    throw new Error("Invalid QR Code version");
                void 0 === n && (n = a.BYTE);
                const o = 8 * (r.getSymbolTotalCodewords(t) - i.getTotalCodewordsCount(t, e));
                if (n === a.MIXED)
                    return o;
                const u = o - c(n, t);
                switch (n) {
                case a.NUMERIC:
                    return Math.floor(u / 10 * 3);
                case a.ALPHANUMERIC:
                    return Math.floor(u / 11 * 2);
                case a.KANJI:
                    return Math.floor(u / 13);
                case a.BYTE:
                default:
                    return Math.floor(u / 8)
                }
            }
            ,
            e.getBestVersionForData = function(t, n) {
                let r;
                const i = o.from(n, o.M);
                if (Array.isArray(t)) {
                    if (t.length > 1)
                        return function(t, n) {
                            for (let r = 1; r <= 40; r++)
                                if (l(t, r) <= e.getCapacity(r, n, a.MIXED))
                                    return r
                        }(t, i);
                    if (0 === t.length)
                        return 1;
                    r = t[0]
                } else
                    r = t;
                return function(t, n, r) {
                    for (let i = 1; i <= 40; i++)
                        if (n <= e.getCapacity(i, r, t))
                            return i
                }(r.mode, r.getLength(), i)
            }
            ,
            e.getEncodedBits = function(t) {
                if (!s.isValid(t) || t < 7)
                    throw new Error("Invalid QR Code version");
                let e = t << 12;
                for (; r.getBCHDigit(e) - u >= 0; )
                    e ^= 7973 << r.getBCHDigit(e) - u;
                return t << 12 | e
            }
        },
        9933: function(t, e, n) {
            const r = n(2747);
            e.render = function(t, e, n) {
                let i = n
                  , o = e;
                void 0 !== i || e && e.getContext || (i = e,
                e = void 0),
                e || (o = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (t) {
                        throw new Error("You need to specify a canvas element")
                    }
                }()),
                i = r.getOptions(i);
                const a = r.getImageWidth(t.modules.size, i)
                  , s = o.getContext("2d")
                  , u = s.createImageData(a, a);
                return r.qrToImageData(u.data, t, i),
                function(t, e, n) {
                    t.clearRect(0, 0, e.width, e.height),
                    e.style || (e.style = {}),
                    e.height = n,
                    e.width = n,
                    e.style.height = n + "px",
                    e.style.width = n + "px"
                }(s, o, a),
                s.putImageData(u, 0, 0),
                o
            }
            ,
            e.renderToDataURL = function(t, n, r) {
                let i = r;
                void 0 !== i || n && n.getContext || (i = n,
                n = void 0),
                i || (i = {});
                const o = e.render(t, n, i)
                  , a = i.type || "image/png"
                  , s = i.rendererOpts || {};
                return o.toDataURL(a, s.quality)
            }
        },
        6246: function(t, e, n) {
            const r = n(2747);
            function i(t, e) {
                const n = t.a / 255
                  , r = e + '="' + t.hex + '"';
                return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }
            function o(t, e, n) {
                let r = t + e;
                return void 0 !== n && (r += " " + n),
                r
            }
            e.render = function(t, e, n) {
                const a = r.getOptions(e)
                  , s = t.modules.size
                  , u = t.modules.data
                  , c = s + 2 * a.margin
                  , l = a.color.light.a ? "<path " + i(a.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : ""
                  , f = "<path " + i(a.color.dark, "stroke") + ' d="' + function(t, e, n) {
                    let r = ""
                      , i = 0
                      , a = !1
                      , s = 0;
                    for (let u = 0; u < t.length; u++) {
                        const c = Math.floor(u % e)
                          , l = Math.floor(u / e);
                        c || a || (a = !0),
                        t[u] ? (s++,
                        u > 0 && c > 0 && t[u - 1] || (r += a ? o("M", c + n, .5 + l + n) : o("m", i, 0),
                        i = 0,
                        a = !1),
                        c + 1 < e && t[u + 1] || (r += o("h", s),
                        s = 0)) : i++
                    }
                    return r
                }(u, s, a.margin) + '"/>'
                  , d = 'viewBox="0 0 ' + c + " " + c + '"'
                  , p = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + l + f + "</svg>\n";
                return "function" == typeof n && n(null, p),
                p
            }
        },
        2747: function(t, e) {
            function n(t) {
                if ("number" == typeof t && (t = t.toString()),
                "string" != typeof t)
                    throw new Error("Color should be defined as hex string");
                let e = t.slice().replace("#", "").split("");
                if (e.length < 3 || 5 === e.length || e.length > 8)
                    throw new Error("Invalid hex color: " + t);
                3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function(t) {
                    return [t, t]
                }
                )))),
                6 === e.length && e.push("F", "F");
                const n = parseInt(e.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + e.slice(0, 6).join("")
                }
            }
            e.getOptions = function(t) {
                t || (t = {}),
                t.color || (t.color = {});
                const e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin
                  , r = t.width && t.width >= 21 ? t.width : void 0
                  , i = t.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : i,
                    margin: e,
                    color: {
                        dark: n(t.color.dark || "#000000ff"),
                        light: n(t.color.light || "#ffffffff")
                    },
                    type: t.type,
                    rendererOpts: t.rendererOpts || {}
                }
            }
            ,
            e.getScale = function(t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
            }
            ,
            e.getImageWidth = function(t, n) {
                const r = e.getScale(t, n);
                return Math.floor((t + 2 * n.margin) * r)
            }
            ,
            e.qrToImageData = function(t, n, r) {
                const i = n.modules.size
                  , o = n.modules.data
                  , a = e.getScale(i, r)
                  , s = Math.floor((i + 2 * r.margin) * a)
                  , u = r.margin * a
                  , c = [r.color.light, r.color.dark];
                for (let e = 0; e < s; e++)
                    for (let n = 0; n < s; n++) {
                        let l = 4 * (e * s + n)
                          , f = r.color.light;
                        if (e >= u && n >= u && e < s - u && n < s - u) {
                            f = c[o[Math.floor((e - u) / a) * i + Math.floor((n - u) / a)] ? 1 : 0]
                        }
                        t[l++] = f.r,
                        t[l++] = f.g,
                        t[l++] = f.b,
                        t[l] = f.a
                    }
            }
        },
        674: function(t) {
            var e = function(t) {
                "use strict";
                var e, n = Object.prototype, r = n.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
                function u(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, n) {
                        return t[e] = n
                    }
                }
                function c(t, e, n, r) {
                    var i = e && e.prototype instanceof y ? e : y
                      , o = Object.create(i.prototype)
                      , a = new A(r || []);
                    return o._invoke = function(t, e, n) {
                        var r = f;
                        return function(i, o) {
                            if (r === p)
                                throw new Error("Generator is already running");
                            if (r === h) {
                                if ("throw" === i)
                                    throw o;
                                return I()
                            }
                            for (n.method = i,
                            n.arg = o; ; ) {
                                var a = n.delegate;
                                if (a) {
                                    var s = k(a, n);
                                    if (s) {
                                        if (s === m)
                                            continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method)
                                    n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (r === f)
                                        throw r = h,
                                        n.arg;
                                    n.dispatchException(n.arg)
                                } else
                                    "return" === n.method && n.abrupt("return", n.arg);
                                r = p;
                                var u = l(t, e, n);
                                if ("normal" === u.type) {
                                    if (r = n.done ? h : d,
                                    u.arg === m)
                                        continue;
                                    return {
                                        value: u.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === u.type && (r = h,
                                n.method = "throw",
                                n.arg = u.arg)
                            }
                        }
                    }(t, n, a),
                    o
                }
                function l(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var f = "suspendedStart"
                  , d = "suspendedYield"
                  , p = "executing"
                  , h = "completed"
                  , m = {};
                function y() {}
                function g() {}
                function v() {}
                var b = {};
                u(b, o, (function() {
                    return this
                }
                ));
                var w = Object.getPrototypeOf
                  , x = w && w(w(P([])));
                x && x !== n && r.call(x, o) && (b = x);
                var E = v.prototype = y.prototype = Object.create(b);
                function S(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function T(t, e) {
                    function n(i, o, a, s) {
                        var u = l(t[i], t, o);
                        if ("throw" !== u.type) {
                            var c = u.arg
                              , f = c.value;
                            return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, a, s)
                            }
                            ), (function(t) {
                                n("throw", t, a, s)
                            }
                            )) : e.resolve(f).then((function(t) {
                                c.value = t,
                                a(c)
                            }
                            ), (function(t) {
                                return n("throw", t, a, s)
                            }
                            ))
                        }
                        s(u.arg)
                    }
                    var i;
                    this._invoke = function(t, r) {
                        function o() {
                            return new e((function(e, i) {
                                n(t, r, e, i)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                }
                function k(t, n) {
                    var r = t.iterator[n.method];
                    if (r === e) {
                        if (n.delegate = null,
                        "throw" === n.method) {
                            if (t.iterator.return && (n.method = "return",
                            n.arg = e,
                            k(t, n),
                            "throw" === n.method))
                                return m;
                            n.method = "throw",
                            n.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return m
                    }
                    var i = l(r, t.iterator, n.arg);
                    if ("throw" === i.type)
                        return n.method = "throw",
                        n.arg = i.arg,
                        n.delegate = null,
                        m;
                    var o = i.arg;
                    return o ? o.done ? (n[t.resultName] = o.value,
                    n.next = t.nextLoc,
                    "return" !== n.method && (n.method = "next",
                    n.arg = e),
                    n.delegate = null,
                    m) : o : (n.method = "throw",
                    n.arg = new TypeError("iterator result is not an object"),
                    n.delegate = null,
                    m)
                }
                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function _(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function A(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(O, this),
                    this.reset(!0)
                }
                function P(t) {
                    if (t) {
                        var n = t[o];
                        if (n)
                            return n.call(t);
                        if ("function" == typeof t.next)
                            return t;
                        if (!isNaN(t.length)) {
                            var i = -1
                              , a = function n() {
                                for (; ++i < t.length; )
                                    if (r.call(t, i))
                                        return n.value = t[i],
                                        n.done = !1,
                                        n;
                                return n.value = e,
                                n.done = !0,
                                n
                            };
                            return a.next = a
                        }
                    }
                    return {
                        next: I
                    }
                }
                function I() {
                    return {
                        value: e,
                        done: !0
                    }
                }
                return g.prototype = v,
                u(E, "constructor", v),
                u(v, "constructor", g),
                g.displayName = u(v, s, "GeneratorFunction"),
                t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v,
                    u(t, s, "GeneratorFunction")),
                    t.prototype = Object.create(E),
                    t
                }
                ,
                t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                S(T.prototype),
                u(T.prototype, a, (function() {
                    return this
                }
                )),
                t.AsyncIterator = T,
                t.async = function(e, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new T(c(e, n, r, i),o);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }
                    ))
                }
                ,
                S(E),
                u(E, s, "Generator"),
                u(E, o, (function() {
                    return this
                }
                )),
                u(E, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                t.keys = function(t) {
                    var e = [];
                    for (var n in t)
                        e.push(n);
                    return e.reverse(),
                    function n() {
                        for (; e.length; ) {
                            var r = e.pop();
                            if (r in t)
                                return n.value = r,
                                n.done = !1,
                                n
                        }
                        return n.done = !0,
                        n
                    }
                }
                ,
                t.values = P,
                A.prototype = {
                    constructor: A,
                    reset: function(t) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = e,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = e,
                        this.tryEntries.forEach(_),
                        !t)
                            for (var n in this)
                                "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done)
                            throw t;
                        var n = this;
                        function i(r, i) {
                            return s.type = "throw",
                            s.arg = t,
                            n.next = r,
                            i && (n.method = "next",
                            n.arg = e),
                            !!i
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o]
                              , s = a.completion;
                            if ("root" === a.tryLoc)
                                return i("end");
                            if (a.tryLoc <= this.prev) {
                                var u = r.call(a, "catchLoc")
                                  , c = r.call(a, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < a.catchLoc)
                                        return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return i(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc)
                                        return i(a.catchLoc, !0)
                                } else {
                                    if (!c)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return i(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t,
                        a.arg = e,
                        o ? (this.method = "next",
                        this.next = o.finallyLoc,
                        m) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        m
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                _(n),
                                m
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    _(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, n, r) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: n,
                            nextLoc: r
                        },
                        "next" === this.method && (this.arg = e),
                        m
                    }
                },
                t
            }(t.exports);
            try {
                regeneratorRuntime = e
            } catch (t) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
            }
        },
        5654: function(t, e) {
            var n, r, i;
            r = [],
            void 0 === (i = "function" == typeof (n = function() {
                var t = /(auto|scroll)/
                  , e = function(t, n) {
                    return null === t.parentNode ? n : e(t.parentNode, n.concat([t]))
                }
                  , n = function(t, e) {
                    return getComputedStyle(t, null).getPropertyValue(e)
                }
                  , r = function(t) {
                    return n(t, "overflow") + n(t, "overflow-y") + n(t, "overflow-x")
                }
                  , i = function(e) {
                    return t.test(r(e))
                };
                return function(t) {
                    if (t instanceof HTMLElement || t instanceof SVGElement) {
                        for (var n = e(t.parentNode, []), r = 0; r < n.length; r += 1)
                            if (i(n[r]))
                                return n[r];
                        return document.scrollingElement || document.documentElement
                    }
                }
            }
            ) ? n.apply(e, r) : n) || (t.exports = i)
        },
        5856: function(t) {
            !function(e) {
                var n = {
                    browser: [[/msie ([\.\_\d]+)/, "ie"], [/trident\/.*?rv:([\.\_\d]+)/, "ie"], [/firefox\/([\.\_\d]+)/, "firefox"], [/chrome\/([\.\_\d]+)/, "chrome"], [/version\/([\.\_\d]+).*?safari/, "safari"], [/mobile safari ([\.\_\d]+)/, "safari"], [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"], [/crios\/([\.\_\d]+).*?safari/, "chrome"], [/opera/, "opera"], [/opera\/([\.\_\d]+)/, "opera"], [/opera ([\.\_\d]+)/, "opera"], [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"], [/opios\/([a-z\.\_\d]+)/, "opera"], [/blackberry/, "blackberry"], [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"], [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"], [/rim.*?version\/([\.\_\d]+)/, "blackberry"], [/iceweasel\/([\.\_\d]+)/, "iceweasel"], [/edge\/([\.\d]+)/, "edge"]],
                    os: [[/linux ()([a-z\.\_\d]+)/, "linux"], [/mac os x/, "macos"], [/mac os x.*?([\.\_\d]+)/, "macos"], [/os ([\.\_\d]+) like mac os/, "ios"], [/openbsd ()([a-z\.\_\d]+)/, "openbsd"], [/android/, "android"], [/android ([a-z\.\_\d]+);/, "android"], [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"], [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"], [/windows phone.*?([\.\_\d]+)/, "windows.phone"], [/windows mobile/, "windows.mobile"], [/blackberry/, "blackberryos"], [/bb\d+/, "blackberryos"], [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]],
                    device: [[/ipad/, "ipad"], [/iphone/, "iphone"], [/lumia/, "lumia"], [/htc/, "htc"], [/nexus/, "nexus"], [/galaxy nexus/, "galaxy.nexus"], [/nokia/, "nokia"], [/ gt\-/, "galaxy"], [/ sm\-/, "galaxy"], [/xbox/, "xbox"], [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]]
                }
                  , r = "Unknown"
                  , i = Object.keys(n);
                function o() {
                    var t = this;
                    i.forEach((function(e) {
                        t[e] = {
                            name: r,
                            version: [],
                            versionString: r
                        }
                    }
                    ))
                }
                function a(t, e, i) {
                    n[e].forEach((function(n) {
                        var o = n[0]
                          , a = n[1]
                          , s = i.match(o);
                        s && (t[e].name = a,
                        s[2] ? (t[e].versionString = s[2],
                        t[e].version = []) : s[1] ? (t[e].versionString = s[1].replace(/_/g, "."),
                        t[e].version = s[1].split(/[\._]/).map((function(t) {
                            return parseInt(t)
                        }
                        ))) : (t[e].versionString = r,
                        t[e].version = []))
                    }
                    ))
                }
                o.prototype.sniff = function(t) {
                    var e = this
                      , n = "undefined" != typeof window ? navigator.userAgent : ""
                      , r = (t || n).toLowerCase();
                    return i.forEach((function(t) {
                        a(e, t, r)
                    }
                    )),
                    this
                }
                ,
                t.exports ? t.exports = o : (e.Sniffr = new o,
                e.Sniffr.sniff(navigator.userAgent))
            }(this)
        },
        7833: function() {
            /*! https://mths.be/includes v0.2.0 by @mathias */
            String.prototype.includes || function() {
                "use strict";
                var t = {}.toString
                  , e = function() {
                    try {
                        var t = {}
                          , e = Object.defineProperty
                          , n = e(t, t, t) && e
                    } catch (t) {}
                    return n
                }()
                  , n = "".indexOf
                  , r = function(e) {
                    if (null == this)
                        throw TypeError();
                    var r = String(this);
                    if (e && "[object RegExp]" == t.call(e))
                        throw TypeError();
                    var i = r.length
                      , o = String(e)
                      , a = o.length
                      , s = arguments.length > 1 ? arguments[1] : void 0
                      , u = s ? Number(s) : 0;
                    u != u && (u = 0);
                    var c = Math.min(Math.max(u, 0), i);
                    return !(a + c > i) && -1 != n.call(r, o, u)
                };
                e ? e(String.prototype, "includes", {
                    value: r,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.includes = r
            }()
        },
        5582: function(t, e, n) {
            "use strict";
            var r = n(1030)
              , i = n(2431)
              , o = n(8069)
              , a = n(7372)("String.prototype.slice");
            t.exports = function(t) {
                var e, n = o(this), s = i(n), u = r(s.length);
                arguments.length > 1 && (e = arguments[1]);
                var c = void 0 === e ? "" : i(e);
                "" === c && (c = " ");
                var l = r(t);
                if (l <= u)
                    return s;
                for (var f = l - u; c.length < f; ) {
                    var d = c.length
                      , p = f - d;
                    c += d > p ? a(c, 0, p) : c
                }
                var h = c.length > f ? a(c, 0, f) : c;
                return h + s
            }
        },
        6811: function(t, e, n) {
            "use strict";
            var r = n(1476)
              , i = n(8069)
              , o = n(5806)
              , a = n(5582)
              , s = n(9421)
              , u = n(6189)
              , c = o.apply(s())
              , l = function(t, e) {
                i(t);
                var n = arguments.length > 2 ? [e, arguments[2]] : [e];
                return c(t, n)
            };
            r(l, {
                getPolyfill: s,
                implementation: a,
                shim: u
            }),
            t.exports = l
        },
        9421: function(t, e, n) {
            "use strict";
            var r = n(5582);
            t.exports = function() {
                return "function" == typeof String.prototype.padStart ? String.prototype.padStart : r
            }
        },
        6189: function(t, e, n) {
            "use strict";
            var r = n(9421)
              , i = n(1476);
            t.exports = function() {
                var t = r();
                return i(String.prototype, {
                    padStart: t
                }, {
                    padStart: function() {
                        return String.prototype.padStart !== t
                    }
                }),
                t
            }
        },
        662: function(t) {
            function e() {}
            e.prototype = {
                on: function(t, e, n) {
                    var r = this.e || (this.e = {});
                    return (r[t] || (r[t] = [])).push({
                        fn: e,
                        ctx: n
                    }),
                    this
                },
                once: function(t, e, n) {
                    var r = this;
                    function i() {
                        r.off(t, i),
                        e.apply(n, arguments)
                    }
                    return i._ = e,
                    this.on(t, i, n)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, i = n.length; r < i; r++)
                        n[r].fn.apply(n[r].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {})
                      , r = n[t]
                      , i = [];
                    if (r && e)
                        for (var o = 0, a = r.length; o < a; o++)
                            r[o].fn !== e && r[o].fn._ !== e && i.push(r[o]);
                    return i.length ? n[t] = i : delete n[t],
                    this
                }
            },
            t.exports = e,
            t.exports.TinyEmitter = e
        },
        8405: function(t, e) {
            e.D = function(t, e, n) {
                var r;
                return void 0 === e && (e = 50),
                void 0 === n && (n = {
                    isImmediate: !1
                }),
                function() {
                    for (var i = [], o = 0; o < arguments.length; o++)
                        i[o] = arguments[o];
                    var a = this
                      , s = n.isImmediate && void 0 === r;
                    void 0 !== r && clearTimeout(r),
                    r = setTimeout((function() {
                        r = void 0,
                        n.isImmediate || t.apply(a, i)
                    }
                    ), e),
                    s && t.apply(a, i)
                }
            }
        },
        3710: function(t, e, n) {
            "use strict";
            var r = n(6527);
            t.exports = function(t) {
                if ("function" != typeof t)
                    return !1;
                if (!hasOwnProperty.call(t, "length"))
                    return !1;
                try {
                    if ("number" != typeof t.length)
                        return !1;
                    if ("function" != typeof t.call)
                        return !1;
                    if ("function" != typeof t.apply)
                        return !1
                } catch (t) {
                    return !1
                }
                return !r(t)
            }
        },
        2027: function(t, e, n) {
            "use strict";
            var r = n(3650)
              , i = {
                object: !0,
                function: !0,
                undefined: !0
            };
            t.exports = function(t) {
                return !!r(t) && hasOwnProperty.call(i, typeof t)
            }
        },
        9211: function(t, e, n) {
            "use strict";
            var r = n(3710)
              , i = /^\s*class[\s{/}]/
              , o = Function.prototype.toString;
            t.exports = function(t) {
                return !!r(t) && !i.test(o.call(t))
            }
        },
        6527: function(t, e, n) {
            "use strict";
            var r = n(2027);
            t.exports = function(t) {
                if (!r(t))
                    return !1;
                try {
                    return !!t.constructor && t.constructor.prototype === t
                } catch (t) {
                    return !1
                }
            }
        },
        3650: function(t) {
            "use strict";
            t.exports = function(t) {
                return null != t
            }
        },
        2727: function() {
            !function(t) {
                "use strict";
                if (!t.fetch) {
                    var e = "URLSearchParams"in t
                      , n = "Symbol"in t && "iterator"in Symbol
                      , r = "FileReader"in t && "Blob"in t && function() {
                        try {
                            return new Blob,
                            !0
                        } catch (t) {
                            return !1
                        }
                    }()
                      , i = "FormData"in t
                      , o = "ArrayBuffer"in t;
                    if (o)
                        var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                          , s = function(t) {
                            return t && DataView.prototype.isPrototypeOf(t)
                        }
                          , u = ArrayBuffer.isView || function(t) {
                            return t && a.indexOf(Object.prototype.toString.call(t)) > -1
                        }
                        ;
                    h.prototype.append = function(t, e) {
                        t = f(t),
                        e = d(e);
                        var n = this.map[t];
                        this.map[t] = n ? n + "," + e : e
                    }
                    ,
                    h.prototype.delete = function(t) {
                        delete this.map[f(t)]
                    }
                    ,
                    h.prototype.get = function(t) {
                        return t = f(t),
                        this.has(t) ? this.map[t] : null
                    }
                    ,
                    h.prototype.has = function(t) {
                        return this.map.hasOwnProperty(f(t))
                    }
                    ,
                    h.prototype.set = function(t, e) {
                        this.map[f(t)] = d(e)
                    }
                    ,
                    h.prototype.forEach = function(t, e) {
                        for (var n in this.map)
                            this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                    }
                    ,
                    h.prototype.keys = function() {
                        var t = [];
                        return this.forEach((function(e, n) {
                            t.push(n)
                        }
                        )),
                        p(t)
                    }
                    ,
                    h.prototype.values = function() {
                        var t = [];
                        return this.forEach((function(e) {
                            t.push(e)
                        }
                        )),
                        p(t)
                    }
                    ,
                    h.prototype.entries = function() {
                        var t = [];
                        return this.forEach((function(e, n) {
                            t.push([n, e])
                        }
                        )),
                        p(t)
                    }
                    ,
                    n && (h.prototype[Symbol.iterator] = h.prototype.entries);
                    var c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    w.prototype.clone = function() {
                        return new w(this,{
                            body: this._bodyInit
                        })
                    }
                    ,
                    b.call(w.prototype),
                    b.call(E.prototype),
                    E.prototype.clone = function() {
                        return new E(this._bodyInit,{
                            status: this.status,
                            statusText: this.statusText,
                            headers: new h(this.headers),
                            url: this.url
                        })
                    }
                    ,
                    E.error = function() {
                        var t = new E(null,{
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error",
                        t
                    }
                    ;
                    var l = [301, 302, 303, 307, 308];
                    E.redirect = function(t, e) {
                        if (-1 === l.indexOf(e))
                            throw new RangeError("Invalid status code");
                        return new E(null,{
                            status: e,
                            headers: {
                                location: t
                            }
                        })
                    }
                    ,
                    t.Headers = h,
                    t.Request = w,
                    t.Response = E,
                    t.fetch = function(t, e) {
                        return new Promise((function(n, i) {
                            var o = new w(t,e)
                              , a = new XMLHttpRequest;
                            a.onload = function() {
                                var t, e, r = {
                                    status: a.status,
                                    statusText: a.statusText,
                                    headers: (t = a.getAllResponseHeaders() || "",
                                    e = new h,
                                    t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                                        var n = t.split(":")
                                          , r = n.shift().trim();
                                        if (r) {
                                            var i = n.join(":").trim();
                                            e.append(r, i)
                                        }
                                    }
                                    )),
                                    e)
                                };
                                r.url = "responseURL"in a ? a.responseURL : r.headers.get("X-Request-URL");
                                var i = "response"in a ? a.response : a.responseText;
                                n(new E(i,r))
                            }
                            ,
                            a.onerror = function() {
                                i(new TypeError("Network request failed"))
                            }
                            ,
                            a.ontimeout = function() {
                                i(new TypeError("Network request failed"))
                            }
                            ,
                            a.open(o.method, o.url, !0),
                            "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1),
                            "responseType"in a && r && (a.responseType = "blob"),
                            o.headers.forEach((function(t, e) {
                                a.setRequestHeader(e, t)
                            }
                            )),
                            a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                        }
                        ))
                    }
                    ,
                    t.fetch.polyfill = !0
                }
                function f(t) {
                    if ("string" != typeof t && (t = String(t)),
                    /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                        throw new TypeError("Invalid character in header field name");
                    return t.toLowerCase()
                }
                function d(t) {
                    return "string" != typeof t && (t = String(t)),
                    t
                }
                function p(t) {
                    var e = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return n && (e[Symbol.iterator] = function() {
                        return e
                    }
                    ),
                    e
                }
                function h(t) {
                    this.map = {},
                    t instanceof h ? t.forEach((function(t, e) {
                        this.append(e, t)
                    }
                    ), this) : Array.isArray(t) ? t.forEach((function(t) {
                        this.append(t[0], t[1])
                    }
                    ), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                        this.append(e, t[e])
                    }
                    ), this)
                }
                function m(t) {
                    if (t.bodyUsed)
                        return Promise.reject(new TypeError("Already read"));
                    t.bodyUsed = !0
                }
                function y(t) {
                    return new Promise((function(e, n) {
                        t.onload = function() {
                            e(t.result)
                        }
                        ,
                        t.onerror = function() {
                            n(t.error)
                        }
                    }
                    ))
                }
                function g(t) {
                    var e = new FileReader
                      , n = y(e);
                    return e.readAsArrayBuffer(t),
                    n
                }
                function v(t) {
                    if (t.slice)
                        return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)),
                    e.buffer
                }
                function b() {
                    return this.bodyUsed = !1,
                    this._initBody = function(t) {
                        if (this._bodyInit = t,
                        t)
                            if ("string" == typeof t)
                                this._bodyText = t;
                            else if (r && Blob.prototype.isPrototypeOf(t))
                                this._bodyBlob = t;
                            else if (i && FormData.prototype.isPrototypeOf(t))
                                this._bodyFormData = t;
                            else if (e && URLSearchParams.prototype.isPrototypeOf(t))
                                this._bodyText = t.toString();
                            else if (o && r && s(t))
                                this._bodyArrayBuffer = v(t.buffer),
                                this._bodyInit = new Blob([this._bodyArrayBuffer]);
                            else {
                                if (!o || !ArrayBuffer.prototype.isPrototypeOf(t) && !u(t))
                                    throw new Error("unsupported BodyInit type");
                                this._bodyArrayBuffer = v(t)
                            }
                        else
                            this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }
                    ,
                    r && (this.blob = function() {
                        var t = m(this);
                        if (t)
                            return t;
                        if (this._bodyBlob)
                            return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }
                    ,
                    this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? m(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
                    }
                    ),
                    this.text = function() {
                        var t, e, n, r = m(this);
                        if (r)
                            return r;
                        if (this._bodyBlob)
                            return t = this._bodyBlob,
                            e = new FileReader,
                            n = y(e),
                            e.readAsText(t),
                            n;
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(function(t) {
                                for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++)
                                    n[r] = String.fromCharCode(e[r]);
                                return n.join("")
                            }(this._bodyArrayBuffer));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }
                    ,
                    i && (this.formData = function() {
                        return this.text().then(x)
                    }
                    ),
                    this.json = function() {
                        return this.text().then(JSON.parse)
                    }
                    ,
                    this
                }
                function w(t, e) {
                    var n, r, i = (e = e || {}).body;
                    if (t instanceof w) {
                        if (t.bodyUsed)
                            throw new TypeError("Already read");
                        this.url = t.url,
                        this.credentials = t.credentials,
                        e.headers || (this.headers = new h(t.headers)),
                        this.method = t.method,
                        this.mode = t.mode,
                        i || null == t._bodyInit || (i = t._bodyInit,
                        t.bodyUsed = !0)
                    } else
                        this.url = String(t);
                    if (this.credentials = e.credentials || this.credentials || "omit",
                    !e.headers && this.headers || (this.headers = new h(e.headers)),
                    this.method = (n = e.method || this.method || "GET",
                    r = n.toUpperCase(),
                    c.indexOf(r) > -1 ? r : n),
                    this.mode = e.mode || this.mode || null,
                    this.referrer = null,
                    ("GET" === this.method || "HEAD" === this.method) && i)
                        throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(i)
                }
                function x(t) {
                    var e = new FormData;
                    return t.trim().split("&").forEach((function(t) {
                        if (t) {
                            var n = t.split("=")
                              , r = n.shift().replace(/\+/g, " ")
                              , i = n.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(r), decodeURIComponent(i))
                        }
                    }
                    )),
                    e
                }
                function E(t, e) {
                    e || (e = {}),
                    this.type = "default",
                    this.status = void 0 === e.status ? 200 : e.status,
                    this.ok = this.status >= 200 && this.status < 300,
                    this.statusText = "statusText"in e ? e.statusText : "OK",
                    this.headers = new h(e.headers),
                    this.url = e.url || "",
                    this._initBody(t)
                }
            }("undefined" != typeof self ? self : this)
        },
        8117: function(t, e) {
            var n, r, i;
            r = [],
            n = function() {
                "use strict";
                var t = function(t) {
                    return t && "getComputedStyle"in window && "smooth" === window.getComputedStyle(t)["scroll-behavior"]
                };
                if ("undefined" == typeof window || !("document"in window))
                    return {};
                var e = function(e, n, r) {
                    var i;
                    n = n || 999,
                    r || 0 === r || (r = 9);
                    var o = function(t) {
                        i = t
                    }
                      , a = function() {
                        clearTimeout(i),
                        o(0)
                    }
                      , s = function(t) {
                        return Math.max(0, e.getTopOf(t) - r)
                    }
                      , u = function(r, i, s) {
                        if (a(),
                        0 === i || i && i < 0 || t(e.body))
                            e.toY(r),
                            s && s();
                        else {
                            var u = e.getY()
                              , c = Math.max(0, r) - u
                              , l = (new Date).getTime();
                            i = i || Math.min(Math.abs(c), n),
                            function t() {
                                o(setTimeout((function() {
                                    var n = Math.min(1, ((new Date).getTime() - l) / i)
                                      , r = Math.max(0, Math.floor(u + c * (n < .5 ? 2 * n * n : n * (4 - 2 * n) - 1)));
                                    e.toY(r),
                                    n < 1 && e.getHeight() + r < e.body.scrollHeight ? t() : (setTimeout(a, 99),
                                    s && s())
                                }
                                ), 9))
                            }()
                        }
                    }
                      , c = function(t, e, n) {
                        u(s(t), e, n)
                    }
                      , l = function(t, n, i) {
                        var o = t.getBoundingClientRect().height
                          , a = e.getTopOf(t) + o
                          , l = e.getHeight()
                          , f = e.getY()
                          , d = f + l;
                        s(t) < f || o + r > l ? c(t, n, i) : a + r > d ? u(a - l + r, n, i) : i && i()
                    }
                      , f = function(t, n, r, i) {
                        u(Math.max(0, e.getTopOf(t) - e.getHeight() / 2 + (r || t.getBoundingClientRect().height / 2)), n, i)
                    };
                    return {
                        setup: function(t, e) {
                            return (0 === t || t) && (n = t),
                            (0 === e || e) && (r = e),
                            {
                                defaultDuration: n,
                                edgeOffset: r
                            }
                        },
                        to: c,
                        toY: u,
                        intoView: l,
                        center: f,
                        stop: a,
                        moving: function() {
                            return !!i
                        },
                        getY: e.getY,
                        getTopOf: e.getTopOf
                    }
                }
                  , n = document.documentElement
                  , r = function() {
                    return window.scrollY || n.scrollTop
                }
                  , i = e({
                    body: document.scrollingElement || document.body,
                    toY: function(t) {
                        window.scrollTo(0, t)
                    },
                    getY: r,
                    getHeight: function() {
                        return window.innerHeight || n.clientHeight
                    },
                    getTopOf: function(t) {
                        return t.getBoundingClientRect().top + r() - n.offsetTop
                    }
                });
                if (i.createScroller = function(t, r, i) {
                    return e({
                        body: t,
                        toY: function(e) {
                            t.scrollTop = e
                        },
                        getY: function() {
                            return t.scrollTop
                        },
                        getHeight: function() {
                            return Math.min(t.clientHeight, window.innerHeight || n.clientHeight)
                        },
                        getTopOf: function(t) {
                            return t.offsetTop
                        }
                    }, r, i)
                }
                ,
                "addEventListener"in window && !window.noZensmooth && !t(document.body)) {
                    var o = "history"in window && "pushState"in history
                      , a = o && "scrollRestoration"in history;
                    a && (history.scrollRestoration = "auto"),
                    window.addEventListener("load", (function() {
                        a && (setTimeout((function() {
                            history.scrollRestoration = "manual"
                        }
                        ), 9),
                        window.addEventListener("popstate", (function(t) {
                            t.state && "zenscrollY"in t.state && i.toY(t.state.zenscrollY)
                        }
                        ), !1)),
                        window.location.hash && setTimeout((function() {
                            var t = i.setup().edgeOffset;
                            if (t) {
                                var e = document.getElementById(window.location.href.split("#")[1]);
                                if (e) {
                                    var n = Math.max(0, i.getTopOf(e) - t)
                                      , r = i.getY() - n;
                                    0 <= r && r < 9 && window.scrollTo(0, n)
                                }
                            }
                        }
                        ), 9)
                    }
                    ), !1);
                    var s = new RegExp("(^|\\s)noZensmooth(\\s|$)");
                    window.addEventListener("click", (function(t) {
                        for (var e = t.target; e && "A" !== e.tagName; )
                            e = e.parentNode;
                        if (!(!e || 1 !== t.which || t.shiftKey || t.metaKey || t.ctrlKey || t.altKey)) {
                            if (a) {
                                var n = history.state && "object" == typeof history.state ? history.state : {};
                                n.zenscrollY = i.getY();
                                try {
                                    history.replaceState(n, "")
                                } catch (t) {}
                            }
                            var r = e.getAttribute("href") || "";
                            if (0 === r.indexOf("#") && !s.test(e.className)) {
                                var u = 0
                                  , c = document.getElementById(r.substring(1));
                                if ("#" !== r) {
                                    if (!c)
                                        return;
                                    u = i.getTopOf(c)
                                }
                                t.preventDefault();
                                var l = function() {
                                    window.location = r
                                }
                                  , f = i.setup().edgeOffset;
                                f && (u = Math.max(0, u - f),
                                o && (l = function() {
                                    history.pushState({}, "", r)
                                }
                                )),
                                i.toY(u, null, l)
                            }
                        }
                    }
                    ), !1)
                }
                return i
            }(),
            void 0 === (i = "function" == typeof n ? n.apply(e, r) : n) || (t.exports = i)
        },
        6050: function() {},
        4508: function(t, e, n) {
            "use strict";
            var r = n(5502)("%Array%")
              , i = !r.isArray && n(7372)("Object.prototype.toString");
            t.exports = r.isArray || function(t) {
                return "[object Array]" === i(t)
            }
        },
        2364: function(t, e, n) {
            "use strict";
            var r = n(5502)
              , i = r("%Array.prototype%")
              , o = r("%RangeError%")
              , a = r("%SyntaxError%")
              , s = r("%TypeError%")
              , u = n(37)
              , c = Math.pow(2, 32) - 1
              , l = r("%Object.setPrototypeOf%", !0) || ([].__proto__ !== i ? null : function(t, e) {
                return t.__proto__ = e,
                t
            }
            );
            t.exports = function(t) {
                if (!u(t) || t < 0)
                    throw new s("Assertion failed: `length` must be an integer Number >= 0");
                if (t > c)
                    throw new o("length is greater than (2**32 - 1)");
                var e = arguments.length > 1 ? arguments[1] : i
                  , n = [];
                if (e !== i) {
                    if (!l)
                        throw new a("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
                    l(n, e)
                }
                return 0 !== t && (n.length = t),
                n
            }
        },
        7489: function(t, e, n) {
            "use strict";
            var r = n(5502)
              , i = r("%Symbol.species%", !0)
              , o = r("%TypeError%")
              , a = n(2364)
              , s = n(6265)
              , u = n(2400)
              , c = n(427)
              , l = n(37)
              , f = n(6410);
            t.exports = function(t, e) {
                if (!l(e) || e < 0)
                    throw new o("Assertion failed: length must be an integer >= 0");
                if (!u(t))
                    return a(e);
                var n = s(t, "constructor");
                if (i && "Object" === f(n) && null === (n = s(n, i)) && (n = void 0),
                void 0 === n)
                    return a(e);
                if (!c(n))
                    throw new o("C must be a constructor");
                return new n(e)
            }
        },
        4561: function(t, e, n) {
            "use strict";
            var r = n(5502)
              , i = n(7372)
              , o = r("%TypeError%")
              , a = n(2400)
              , s = r("%Reflect.apply%", !0) || i("%Function.prototype.apply%");
            t.exports = function(t, e) {
                var n = arguments.length > 2 ? arguments[2] : [];
                if (!a(n))
                    throw new o("Assertion failed: optional `argumentsList`, if provided, must be a List");
                return s(t, e, n)
            }
        },
        3666: function(t, e, n) {
            "use strict";
            var r = n(5502)("%TypeError%")
              , i = n(5830)
              , o = n(6207)
              , a = n(8500)
              , s = n(8601)
              , u = n(7443)
              , c = n(3849)
              , l = n(1886)
              , f = n(6410);
            t.exports = function(t, e, n) {
                if ("Object" !== f(t))
                    throw new r("Assertion failed: Type(O) is not Object");
                if (!c(e))
                    throw new r("Assertion failed: IsPropertyKey(P) is not true");
                var d = a(t, e)
                  , p = !d || u(t);
                return !(d && (!d["[[Writable]]"] || !d["[[Configurable]]"]) || !p) && i(s, l, o, t, e, {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Value]]": n,
                    "[[Writable]]": !0
                })
            }
        },
        9831: function(t, e, n) {
            "use strict";
            var r = n(5502)("%TypeError%")
              , i = n(3666)
              , o = n(3849)
              , a = n(6410);
            t.exports = function(t, e, n) {
                if ("Object" !== a(t))
                    throw new r("Assertion failed: Type(O) is not Object");
                if (!o(e))
                    throw new r("Assertion failed: IsPropertyKey(P) is not true");
                var s = i(t, e, n);
                if (!s)
                    throw new r("unable to create data property");
                return s
            }
        },
        8084: function(t, e, n) {
            "use strict";
            var r = n(5502)("%TypeError%")
              , i = n(9856)
              , o = n(5830)
              , a = n(6207)
              , s = n(3481)
              , u = n(8601)
              , c = n(3849)
              , l = n(1886)
              , f = n(752)
              , d = n(6410);
            t.exports = function(t, e, n) {
                if ("Object" !== d(t))
                    throw new r("Assertion failed: Type(O) is not Object");
                if (!c(e))
                    throw new r("Assertion failed: IsPropertyKey(P) is not true");
                var p = i({
                    Type: d,
                    IsDataDescriptor: u,
                    IsAccessorDescriptor: s
                }, n) ? n : f(n);
                if (!i({
                    Type: d,
                    IsDataDescriptor: u,
                    IsAccessorDescriptor: s
                }, p))
                    throw new r("Assertion failed: Desc is not a valid Property Descriptor");
                return o(u, l, a, t, e, p)
            }
        },
        1419: function(t, e, n) {
            "use strict";
            var r = n(5502)("%TypeError%")
              , i = n(8668)
              , o = n(4561)
              , a = n(9831)
              , s = n(6265)
              , u = n(304)
              , c = n(2400)
              , l = n(5652)
              , f = n(2431);
            t.exports = function t(e, n, d, p, h) {
                var m;
                arguments.length > 5 && (m = arguments[5]);
                for (var y = p, g = 0; g < d; ) {
                    var v = f(g)
                      , b = u(n, v);
                    if (!0 === b) {
                        var w = s(n, v);
                        if (void 0 !== m) {
                            if (arguments.length <= 6)
                                throw new r("Assertion failed: thisArg is required when mapperFunction is provided");
                            w = o(m, arguments[6], [w, g, n])
                        }
                        var x = !1;
                        if (h > 0 && (x = c(w)),
                        x) {
                            var E = l(w);
                            y = t(e, w, E, y, h - 1)
                        } else {
                            if (y >= i)
                                throw new r("index too large");
                            a(e, f(y), w),
                            y += 1
                        }
                    }
                    g += 1
                }
                return y
            }
        },
        6207: function(t, e, n) {
            "use strict";
            var r = n(8221)
              , i = n(6410);
            t.exports = function(t) {
                if (void 0 === t)
                    return t;
                r(i, "Property Descriptor", "Desc", t);
                var e = {};
                return "[[Value]]"in t && (e.value = t["[[Value]]"]),
                "[[Writable]]"in t && (e.writable = t["[[Writable]]"]),
                "[[Get]]"in t && (e.get = t["[[Get]]"]),
                "[[Set]]"in t && (e.set = t["[[Set]]"]),
                "[[Enumerable]]"in t && (e.enumerable = t["[[Enumerable]]"]),
                "[[Configurable]]"in t && (e.configurable = t["[[Configurable]]"]),
                e
            }
        },
        6265: function(t, e, n) {
            "use strict";
            var r = n(5502)("%TypeError%")
              , i = n(5363)
              , o = n(3849)
              , a = n(6410);
            t.exports = function(t, e) {
                if ("Object" !== a(t))
                    throw new r("Assertion failed: Type(O) is not Object");
                if (!o(e))
                    throw new r("Assertion failed: IsPropertyKey(P) is not true, got " + i(e));
                return t[e]
            }
        },
        304: function(t, e, n) {
            "use strict";
            var r = n(5502)("%TypeError%")
              , i = n(3849)
              , o = n(6410);
            t.exports = function(t, e) {
                if ("Object" !== o(t))
                    throw new r("Assertion failed: `O` must be an Object");
                if (!i(e))
                    throw new r("Assertion failed: `P` must be a Property Key");
                return e in t
            }
        },
        3481: function(t, e, n) {
            "use strict";
            var r = n(3494)
              , i = n(8221)
              , o = n(6410);
            t.exports = function(t) {
                return void 0 !== t && (i(o, "Property Descriptor", "Desc", t),
                !(!r(t, "[[Get]]") && !r(t, "[[Set]]")))
            }
        },
        2400: function(t, e, n) {
            "use strict";
            var r = n(5502)("%Array%")
              , i = !r.isArray && n(7372)("Object.prototype.toString");
            t.exports = r.isArray || function(t) {
                return "[object Array]" === i(t)
            }
        },
        6814: function(t, e, n) {
            "use strict";
            t.exports = n(7704)
        },
        427: function(t, e, n) {
            "use strict";
            var r = n(4731)("%Reflect.construct%", !0)
              , i = n(8084);
            try {
                i({}, "", {
                    "[[Get]]": function() {}
                })
            } catch (t) {
                i = null
            }
            if (i && r) {
                var o = {}
                  , a = {};
                i(a, "length", {
                    "[[Get]]": function() {
                        throw o
                    },
                    "[[Enumerable]]": !0
                }),
                t.exports = function(t) {
                    try {
                        r(t, a)
                    } catch (t) {
                        return t === o
                    }
                }
            } else
                t.exports = function(t) {
                    return "function" == typeof t && !!t.prototype
                }
        },
        8601: function(t, e, n) {
            "use strict";
            var r = n(3494)
              , i = n(8221)
              , o = n(6410);
            t.exports = function(t) {
                return void 0 !== t && (i(o, "Property Descriptor", "Desc", t),
                !(!r(t, "[[Value]]") && !r(t, "[[Writable]]")))
            }
        },
        7443: function(t, e, n) {
            "use strict";
            var r = n(5502)("%Object%")
              , i = n(4498)
              , o = r.preventExtensions
              , a = r.isExtensible;
            t.exports = o ? function(t) {
                return !i(t) && a(t)
            }
            : function(t) {
                return !i(t)
            }
        },
        37: function(t, e, n) {
            "use strict";
            var r = n(3217)
              , i = n(1385)
              , o = n(6410)
              , a = n(5612)
              , s = n(3031);
            t.exports = function(t) {
                if ("Number" !== o(t) || a(t) || !s(t))
                    return !1;
                var e = r(t);
                return i(e) === e
            }
        },
        3849: function(t) {
            "use strict";
            t.exports = function(t) {
                return "string" == typeof t || "symbol" == typeof t
            }
        },
        4204: function(t, e, n) {
            "use strict";
            var r = n(5502)("%Symbol.match%", !0)
              , i = n(8025)
              , o = n(6489);
            t.exports = function(t) {
                if (!t || "object" != typeof t)
                    return !1;
                if (r) {
                    var e = t[r];
                    if (void 0 !== e)
                        return o(e)
                }
                return i(t)
            }
        },
        5652: function(t, e, n) {
            "use strict";
            var r = n(5502)("%TypeError%")
              , i = n(6265)
              , o = n(1030)
              , a = n(6410);
            t.exports = function(t) {
                if ("Object" !== a(t))
                    throw new r("Assertion failed: `obj` must be an Object");
                return o(i(t, "length"))
            }
        },
        8500: function(t, e, n) {
            "use strict";
            var r = n(5502)
              , i = n(127)
              , o = r("%TypeError%")
              , a = n(7372)("Object.prototype.propertyIsEnumerable")
              , s = n(3494)
              , u = n(2400)
              , c = n(3849)
              , l = n(4204)
              , f = n(752)
              , d = n(6410);
            t.exports = function(t, e) {
                if ("Object" !== d(t))
                    throw new o("Assertion failed: O must be an Object");
                if (!c(e))
                    throw new o("Assertion failed: P must be a Property Key");
                if (s(t, e)) {
                    if (!i) {
                        var n = u(t) && "length" === e
                          , r = l(t) && "lastIndex" === e;
                        return {
                            "[[Configurable]]": !(n || r),
                            "[[Enumerable]]": a(t, e),
                            "[[Value]]": t[e],
                            "[[Writable]]": !0
                        }
                    }
                    return f(i(t, e))
                }
            }
        },
        8069: function(t, e, n) {
            "use strict";
            t.exports = n(6898)
        },
        1886: function(t, e, n) {
            "use strict";
            var r = n(5612);
            t.exports = function(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : r(t) && r(e)
            }
        },
        25: function(t, e, n) {
            "use strict";
            var r = n(5612);
            t.exports = function(t, e) {
                return t === e || r(t) && r(e)
            }
        },
        6489: function(t) {
            "use strict";
            t.exports = function(t) {
                return !!t
            }
        },
        5360: function(t, e, n) {
            "use strict";
            var r = n(8179)
              , i = n(4122);
            t.exports = function(t) {
                var e = i(t);
                return 0 !== e && (e = r(e)),
                0 === e ? 0 : e
            }
        },
        1030: function(t, e, n) {
            "use strict";
            var r = n(8668)
              , i = n(5360);
            t.exports = function(t) {
                var e = i(t);
                return e <= 0 ? 0 : e > r ? r : e
            }
        },
        4122: function(t, e, n) {
            "use strict";
            var r = n(5502)
              , i = r("%TypeError%")
              , o = r("%Number%")
              , a = r("%RegExp%")
              , s = r("%parseInt%")
              , u = n(7372)
              , c = n(7496)
              , l = n(4498)
              , f = u("String.prototype.slice")
              , d = c(/^0b[01]+$/i)
              , p = c(/^0o[0-7]+$/i)
              , h = c(/^[-+]0x[0-9a-f]+$/i)
              , m = c(new a("[" + ["", "​", "￾"].join("") + "]","g"))
              , y = ["\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join("")
              , g = new RegExp("(^[" + y + "]+)|([" + y + "]+$)","g")
              , v = u("String.prototype.replace")
              , b = n(1535);
            t.exports = function t(e) {
                var n = l(e) ? e : b(e, o);
                if ("symbol" == typeof n)
                    throw new i("Cannot convert a Symbol value to a number");
                if ("bigint" == typeof n)
                    throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
                if ("string" == typeof n) {
                    if (d(n))
                        return t(s(f(n, 2), 2));
                    if (p(n))
                        return t(s(f(n, 2), 8));
                    if (m(n) || h(n))
                        return NaN;
                    var r = function(t) {
                        return v(t, g, "")
                    }(n);
                    if (r !== n)
                        return t(r)
                }
                return o(n)
            }
        },
        5759: function(t, e, n) {
            "use strict";
            var r = n(5502)("%Object%")
              , i = n(8069);
            t.exports = function(t) {
                return i(t),
                r(t)
            }
        },
        1535: function(t, e, n) {
            "use strict";
            var r = n(3563);
            t.exports = function(t) {
                return arguments.length > 1 ? r(t, arguments[1]) : r(t)
            }
        },
        752: function(t, e, n) {
            "use strict";
            var r = n(3494)
              , i = n(5502)("%TypeError%")
              , o = n(6410)
              , a = n(6489)
              , s = n(6814);
            t.exports = function(t) {
                if ("Object" !== o(t))
                    throw new i("ToPropertyDescriptor requires an object");
                var e = {};
                if (r(t, "enumerable") && (e["[[Enumerable]]"] = a(t.enumerable)),
                r(t, "configurable") && (e["[[Configurable]]"] = a(t.configurable)),
                r(t, "value") && (e["[[Value]]"] = t.value),
                r(t, "writable") && (e["[[Writable]]"] = a(t.writable)),
                r(t, "get")) {
                    var n = t.get;
                    if (void 0 !== n && !s(n))
                        throw new i("getter must be a function");
                    e["[[Get]]"] = n
                }
                if (r(t, "set")) {
                    var u = t.set;
                    if (void 0 !== u && !s(u))
                        throw new i("setter must be a function");
                    e["[[Set]]"] = u
                }
                if ((r(e, "[[Get]]") || r(e, "[[Set]]")) && (r(e, "[[Value]]") || r(e, "[[Writable]]")))
                    throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                return e
            }
        },
        2431: function(t, e, n) {
            "use strict";
            var r = n(5502)
              , i = r("%String%")
              , o = r("%TypeError%");
            t.exports = function(t) {
                if ("symbol" == typeof t)
                    throw new o("Cannot convert a Symbol value to a string");
                return i(t)
            }
        },
        6410: function(t, e, n) {
            "use strict";
            var r = n(633);
            t.exports = function(t) {
                return "symbol" == typeof t ? "Symbol" : "bigint" == typeof t ? "BigInt" : r(t)
            }
        },
        3217: function(t, e, n) {
            "use strict";
            var r = n(5502)("%Math.abs%");
            t.exports = function(t) {
                return r(t)
            }
        },
        1385: function(t) {
            "use strict";
            var e = Math.floor;
            t.exports = function(t) {
                return e(t)
            }
        },
        6898: function(t, e, n) {
            "use strict";
            var r = n(5502)("%TypeError%");
            t.exports = function(t, e) {
                if (null == t)
                    throw new r(e || "Cannot call method on " + t);
                return t
            }
        },
        8179: function(t, e, n) {
            "use strict";
            var r = n(2557)
              , i = n(9821)
              , o = n(3882)
              , a = n(5612)
              , s = n(3031)
              , u = n(4571);
            t.exports = function(t) {
                var e = o(t);
                return a(e) ? 0 : 0 !== e && s(e) ? u(e) * i(r(e)) : e
            }
        },
        3882: function(t, e, n) {
            "use strict";
            var r = n(7097);
            t.exports = function(t) {
                var e = r(t, Number);
                if ("string" != typeof e)
                    return +e;
                var n = e.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, "");
                return /^0[ob]|^[+-]0x/.test(n) ? NaN : +n
            }
        },
        7097: function(t, e, n) {
            "use strict";
            t.exports = n(1616)
        },
        633: function(t) {
            "use strict";
            t.exports = function(t) {
                return null === t ? "Null" : void 0 === t ? "Undefined" : "function" == typeof t || "object" == typeof t ? "Object" : "number" == typeof t ? "Number" : "boolean" == typeof t ? "Boolean" : "string" == typeof t ? "String" : void 0
            }
        },
        2557: function(t, e, n) {
            "use strict";
            var r = n(5502)("%Math.abs%");
            t.exports = function(t) {
                return r(t)
            }
        },
        9821: function(t) {
            "use strict";
            var e = Math.floor;
            t.exports = function(t) {
                return e(t)
            }
        },
        4731: function(t, e, n) {
            "use strict";
            t.exports = n(5502)
        },
        5830: function(t, e, n) {
            "use strict";
            var r = n(5502)("%Object.defineProperty%", !0);
            if (r)
                try {
                    r({}, "a", {
                        value: 1
                    })
                } catch (t) {
                    r = null
                }
            var i = Object.defineProperty && 0 === Object.defineProperty([], "length", {
                value: 1
            }).length
              , o = i && n(4508)
              , a = n(7372)("Object.prototype.propertyIsEnumerable");
            t.exports = function(t, e, n, s, u, c) {
                if (!r) {
                    if (!t(c))
                        return !1;
                    if (!c["[[Configurable]]"] || !c["[[Writable]]"])
                        return !1;
                    if (u in s && a(s, u) !== !!c["[[Enumerable]]"])
                        return !1;
                    var l = c["[[Value]]"];
                    return s[u] = l,
                    e(s[u], l)
                }
                return i && "length" === u && "[[Value]]"in c && o(s) && s.length !== c["[[Value]]"] ? (s.length = c["[[Value]]"],
                s.length === c["[[Value]]"]) : (r(s, u, n(c)),
                !0)
            }
        },
        8221: function(t, e, n) {
            "use strict";
            var r = n(5502)
              , i = r("%TypeError%")
              , o = r("%SyntaxError%")
              , a = n(3494)
              , s = {
                "Property Descriptor": function(t, e) {
                    if ("Object" !== t(e))
                        return !1;
                    var n = {
                        "[[Configurable]]": !0,
                        "[[Enumerable]]": !0,
                        "[[Get]]": !0,
                        "[[Set]]": !0,
                        "[[Value]]": !0,
                        "[[Writable]]": !0
                    };
                    for (var r in e)
                        if (a(e, r) && !n[r])
                            return !1;
                    var o = a(e, "[[Value]]")
                      , s = a(e, "[[Get]]") || a(e, "[[Set]]");
                    if (o && s)
                        throw new i("Property Descriptors may not be both accessor and data descriptors");
                    return !0
                }
            };
            t.exports = function(t, e, n, r) {
                var a = s[e];
                if ("function" != typeof a)
                    throw new o("unknown record type: " + e);
                if (!a(t, r))
                    throw new i(n + " must be a " + e)
            }
        },
        127: function(t, e, n) {
            "use strict";
            var r = n(5502)("%Object.getOwnPropertyDescriptor%", !0);
            if (r)
                try {
                    r([], "length")
                } catch (t) {
                    r = null
                }
            t.exports = r
        },
        3031: function(t) {
            "use strict";
            var e = Number.isNaN || function(t) {
                return t != t
            }
            ;
            t.exports = Number.isFinite || function(t) {
                return "number" == typeof t && !e(t) && t !== 1 / 0 && t !== -1 / 0
            }
        },
        5612: function(t) {
            "use strict";
            t.exports = Number.isNaN || function(t) {
                return t != t
            }
        },
        4498: function(t) {
            "use strict";
            t.exports = function(t) {
                return null === t || "function" != typeof t && "object" != typeof t
            }
        },
        9856: function(t, e, n) {
            "use strict";
            var r = n(5502)
              , i = n(3494)
              , o = r("%TypeError%");
            t.exports = function(t, e) {
                if ("Object" !== t.Type(e))
                    return !1;
                var n = {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Get]]": !0,
                    "[[Set]]": !0,
                    "[[Value]]": !0,
                    "[[Writable]]": !0
                };
                for (var r in e)
                    if (i(e, r) && !n[r])
                        return !1;
                if (t.IsDataDescriptor(e) && t.IsAccessorDescriptor(e))
                    throw new o("Property Descriptors may not be both accessor and data descriptors");
                return !0
            }
        },
        8668: function(t, e, n) {
            "use strict";
            var r = n(5502)
              , i = r("%Math%")
              , o = r("%Number%");
            t.exports = o.MAX_SAFE_INTEGER || i.pow(2, 53) - 1
        },
        7496: function(t, e, n) {
            "use strict";
            var r = n(5502)("RegExp.prototype.test")
              , i = n(5806);
            t.exports = function(t) {
                return i(r, t)
            }
        },
        4571: function(t) {
            "use strict";
            t.exports = function(t) {
                return t >= 0 ? 1 : -1
            }
        }
    }, n = {};
    function r(t) {
        var i = n[t];
        if (void 0 !== i)
            return i.exports;
        var o = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, r),
        o.loaded = !0,
        o.exports
    }
    r.m = e,
    t = [],
    r.O = function(e, n, i, o) {
        if (!n) {
            var a = 1 / 0;
            for (l = 0; l < t.length; l++) {
                n = t[l][0],
                i = t[l][1],
                o = t[l][2];
                for (var s = !0, u = 0; u < n.length; u++)
                    (!1 & o || a >= o) && Object.keys(r.O).every((function(t) {
                        return r.O[t](n[u])
                    }
                    )) ? n.splice(u--, 1) : (s = !1,
                    o < a && (a = o));
                if (s) {
                    t.splice(l--, 1);
                    var c = i();
                    void 0 !== c && (e = c)
                }
            }
            return e
        }
        o = o || 0;
        for (var l = t.length; l > 0 && t[l - 1][2] > o; l--)
            t[l] = t[l - 1];
        t[l] = [n, i, o]
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, {
            a: e
        }),
        e
    }
    ,
    r.d = function(t, e) {
        for (var n in e)
            r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.hmd = function(t) {
        return (t = Object.create(t)).children || (t.children = []),
        Object.defineProperty(t, "exports", {
            enumerable: !0,
            set: function() {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
            }
        }),
        t
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    function() {
        var t = {
            180: 0,
            112: 0
        };
        r.O.j = function(e) {
            return 0 === t[e]
        }
        ;
        var e = function(e, n) {
            var i, o, a = n[0], s = n[1], u = n[2], c = 0;
            if (a.some((function(e) {
                return 0 !== t[e]
            }
            ))) {
                for (i in s)
                    r.o(s, i) && (r.m[i] = s[i]);
                if (u)
                    var l = u(r)
            }
            for (e && e(n); c < a.length; c++)
                o = a[c],
                r.o(t, o) && t[o] && t[o][0](),
                t[o] = 0;
            return r.O(l)
        }
          , n = self.webpackChunk_shorthand_story = self.webpackChunk_shorthand_story || [];
        n.forEach(e.bind(null, 0)),
        n.push = e.bind(null, n.push.bind(n))
    }();
    var i = r.O(void 0, [112], (function() {
        return r(3542)
    }
    ));
    i = r.O(i)
}();
