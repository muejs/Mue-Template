/* @preserve 
 * @name: BUI v1.6.2  
 * @detail: BUI 是一个免费的UI交互框架, 用于快速定制开发WebApp,微信,混合移动应用(Bingotouch,Link,Dcloud,Apicloud,Appcan等).
 * @site: http://www.muejs.com/ 
 * Copyright © 2017-2020 mue. All Rights Reserved. 
 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t() }(0, function() {
    "use strict";

    function e(e, t) { return t = { exports: {} }, e(t, t.exports), t.exports }
    window.libs = window.Zepto || window.jQuery || {}, window.bui = {}, window.router = {},
        function(e) { e.debug = !0, e.hasRouter = !1, e.nativeRouter = !1, e.isWebapp, e.currentPlatform = "", e.log = !0, e.trace = !1, e.native = {}, e.config = {}, e.config.namespace = "bui", e.config.classNamePrefix = e.config.namespace + "-", e.config.version = "1.6.2", e.config.versionCode = 20200723, e.version = e.config.version, e.versionCode = e.config.versionCode, e.config.viewport = { zoom: !0, create: !0 }, e.config.init = { auto: !0 }, e.config.ready = {}, e.config.ajax = {}, e.config.get = {}, e.config.put = {}, e.config.delete = {}, e.config.post = {}, e.config.back = {}, e.config.load = {}, e.config.getPageParams = {}, e.config.refresh = {}, e.config.run = {}, e.config.checkVersion = {}, e.config.component = { auto: !0 }, e.config.dialog = {}, e.config.confirm = {}, e.config.alert = {}, e.config.hint = {}, e.config.prompt = {}, e.config.loading = {}, e.config.mask = {}, e.config.list = {}, e.config.listview = {}, e.config.scroll = {}, e.config.pullrefresh = {}, e.config.select = {}, e.config.sidebar = {}, e.config.slide = {}, e.config.actionsheet = {}, e.config.dropdown = {}, e.config.accordion = {}, e.config.stepbar = {}, e.config.rating = {}, e.config.number = {}, e.config.file = {}, e.config.fileselect = {}, e.config.upload = {}, e.config.download = {}, e.config.swipe = {}, e.config.router = {}, e.config.loader = {}, e.config.loader.define = {}, e.config.loader.load = {}, e.config.loader.component = {}, e.config.store = {}, e.config.floor = {} }(window.bui);
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        n = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
        }(),
        o = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e },
        r = function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) };
    ! function(e, n) {
        e.prefix = function(t) { return e.config.classNamePrefix + t }, e.showLog = function(n, i) { i = i || ""; var a = ""; "object" == (void 0 === n ? "undefined" : t(n)) && "message" in n && "name" in n ? a = n.message + ":" + n.name + "&&stack:" + n.stack : "string" == typeof n && (a = n), e.log && console.error(i + " " + a), e.trace && console.trace && console.trace(), e.trigger("catcherror", n, i) }, e.guid = function(e) {
            function t() { return (65536 * (1 + Math.random()) | 0).toString(16).substring(1) }
            return (e = void 0 === e ? "bui" : e || "") + t().substr(e.length) + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }, e.swipeDirection = function(e, t, n, i) {
            var a = t - e,
                o = i - n,
                r = Math.abs(a),
                l = Math.abs(o);
            return !(r < 9 && l < 9) && (r / l > 3 ? a > 0 ? "swiperight" : "swipeleft" : o > 0 ? "swipedown" : "swipeup")
        }, e.obj = function(i, a) {
            var o = null;
            a = a || null;
            var r = e.hasRouter ? router.currentPage() || "html" : "html";
            r = a || r;
            var l = n(r),
                c = /^(\d)/,
                s = /^[a-zA-z]/,
                u = /^\[.+\]$/,
                d = /^#\d/,
                f = /^\.\d/,
                h = "string" == typeof i,
                p = /^(html|head|body|header|main|footer|ul|li|section|dt|dd|div|span|img|article|i|strong|input|textarea|select|h1|h2|h3|h4|h5|h6|p|view|component|components|iframe)$/gi;
            if ("object" === (void 0 === i ? "undefined" : t(i))) return o = n(i);
            if (h && c.test(i)) return o = l.find("[id='" + i + "']");
            if (h && s.test(i)) { var g = p.test(i) || u.test(i) || i.indexOf("[") > -1 ? i : "#" + i; return o = l.find(g) }
            return d.test(i) ? o = l.find("[id='" + i.substr(1) + "']") : f.test(i) ? o = l.find("[class='" + i.substr(1) + "']") : i && (o = l.find(i)), o
        }, e.$ = e.obj, e.objId = function(t) { return e.obj(t, "html") }, e.selector = function(e) { return void 0 === e ? this : n(e, this) }, e.widget = function(e) { return e && e in this ? this[e] : this }, e.option = function(t, i) {
            if ("object" !== e.typeof(t) && void 0 === i) return "string" == typeof t ? this.config[t] : this.config;
            if ("id" == t) return e.showLog("不允许修改控件的ID参数"), this;
            if (t && "object" === e.typeof(t)) { var a = n.extend(this.config, t); return this.init(a) }
            if (this.config.hasOwnProperty(t)) {
                var o = {};
                o[t] = i;
                var a = n.extend(this.config, o);
                return this.init(a)
            }
            return this
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.emitter = function() {
            function n() { this.handle = Object.create(null) }
            return n.prototype.on = function(t, n, i) { return "function" == typeof n ? (i = n, n = this) : (i = i, n = n || this), n.handle = n.handle || {}, e.unit.stringToArray(t).forEach(function(e, t) { void 0 === n.handle[e] && (n.handle[e] = []), n.handle[e].push(i) }), n }, n.prototype.off = function(n, i, a) {
                    "function" == typeof i ? (a = i, i = this) : "function" == typeof a ? (a = a, i = i || this) : i = this;
                    var o = e.typeof(n);
                    if (void 0 === n) i.handle = Object.create(null);
                    else if ("string" === o && "function" == typeof a) {
                        var r = i.handle[n] || [];
                        e.array.remove(r, a)
                    } else if ("string" === o || "array" === o) {
                        "object" !== t(i.handle) && (i.handle = {});
                        var l = e.unit.stringToArray(n);
                        l.forEach(function(e, t) { i.handle[e] = [] })
                    }
                    return i
                }, n.prototype.one = function(e, t) {
                    function n() { t && t.apply(i, arguments), i.off(e, n) }
                    var i = this;
                    return this.on(e, n), this
                }, n.prototype.wait = function(t, n) {
                    var i = this,
                        a = e.unit.stringToArray(t),
                        o = [],
                        r = !0;
                    return a.forEach(function(e, t) { i.on(e, function(e) { o[t] = e, o.length === a.length && r && (n && n.apply(i, o), r = !1) }) }), this
                }, n.prototype.trigger = function(e) {
                    try {
                        if (this.handle[arguments[0]] instanceof Array) {
                            var t = this.handle[arguments[0]],
                                n = [].slice.apply(arguments);
                            n.shift();
                            for (var i = 0, a = t.length; i < a; i++) t[i] && t[i].apply(this.self || this, n)
                        }
                    } catch (e) {}
                    return this
                }, n.prototype.notify = function() {
                    try {
                        for (var e in this.handle)
                            if (this.handle[e] instanceof Array)
                                for (var t = this.handle[e], n = 0, i = t.length; n < i; n++) t[n] && t[n].apply(this.self || this)
                    } catch (e) {}
                    return this
                },
                function(e) { return new n }
        }();
        var i = e.emitter();
        e.on = i.on, e.off = i.off, e.trigger = i.trigger, e.one = i.one
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.store = function(i) {
            function a(t) {
                function i(e) {
                    var t = 0;
                    for (t = 0; t < e.length; t++) {
                        var o = e[t];
                        o.beforeMount && ve.beforeMounts.push(o.beforeMount), o.beforeCompile && ve.beforeCompiles.push(o.beforeCompile), o.beforeUpdate && ve.beforeUpdates.push(o.beforeUpdate), o.updated && ve.updateds.push(o.updated), o.compiled && ve.compileds.push(o.compiled), o.mounted && ve.mounteds.push(o.mounted), o.beforeDestroy && ve.beforeDestroys.push(o.beforeDestroy), o.destroyed && ve.destroyeds.push(o.destroyed), a = n.extend(!0, r, o), o.mixins && o.mixins.length && t < e.length - 1 && i(o.mixins)
                    }
                }
                var a = null,
                    o = t && t.extends ? [t.extends] : [];
                e.array.merge(ve.mixins, o, t.mixins || [], [t]);
                var r = n.extend(!0, {}, ve, e.config.store);
                return i(ve.mixins), a = n.extend(!0, ve, a)
            }

            function r() {
                Fe = e.hasRouter ? router.$ : n;
                var i = Fe(me.el);
                Me = "object" === t(me.el) ? n(me.el) : i.length ? i : n(me.el), He = Me && Me.parent(), ze = Me && Me.children(), Ze.$el = Me, Ze.$parent = He, Ze.$children = ze, Ze.$data = be;
                for (var a in ke) ke[a] = ke[a].bind(Ze);
                return Ze.$methods = ke, ke && g(), Te && v(), he.call(Ze, "beforemount"), me.beforeMounts.forEach(function(e, t) { e.call(Ze) }), G(be), c(), Ie && s(Ie), we && p(), Oe ? me.needCompile && router && router.on("complete", function(e) { me.needView ? j({ id: Me, compiled: function() { me.needCompile && m(), qe && me.mounteds.forEach(function(t, n) { t.call(Ze, e) }) } }) : (me.needCompile && m(), qe && me.mounteds.forEach(function(t, n) { t.call(Ze, e) })), Ue = n.extend(!0, {}, be), Le = !1, Pe = !0, he.call(Ze, "mounted", e), qe = !1, Ve = [] }) : (qe || fe(), je && l(), me.needView ? j({ id: Me, compiled: function() { me.needCompile && m(), me.mounteds.forEach(function(e, t) { e.call(Ze) }) } }) : (me.needCompile && m(), me.mounteds.forEach(function(e, t) { e.call(Ze) })), Ue = n.extend(!0, {}, be), Le = !1, Pe = !0, Ve = [], he.call(Ze, "mounted"), qe = !1), this
            }

            function l() { var e = Me.html(); return e = y(e), Me.html(e), this }

            function c() { for (var e in be) ! function(e) { Object.defineProperty(Ze, e, { configurable: !0, get: function() { Ye && console.log("1. module getting " + e, Ve), !Le && Pe ? (Le = !0, Pe = !1, Ve = []) : (Le = !1, Pe = !1); var t = be[e]; return Array.isArray(t) && Ae.target && (Se[e] = [], Se[e].push(Ae.target)), t }, set: function(t) { Ye && console.log("2. module setting " + e, Ve), Ve = [], be[e] = t, Ue[e] = t } }) }(e) }

            function s(t) { try { u(t) } catch (t) { e.showLog(t) } }

            function u(n, i, a) {
                n = n || Ie;
                try {
                    var o = Object.keys(n),
                        r = [];
                    o.forEach(function(o, l) {
                        var c = a || ("object" === t(n[o]) ? n[o].handler : n[o]);
                        r.push(o), i && r.unshift(i);
                        var s = r.join("."),
                            d = n[o];
                        if ("object" === e.typeof(d)) {
                            var f = d.deep ? Object.keys(be[o]) : Object.keys(n[o]),
                                p = e.unit.getKeyValue(o, be);
                            f.forEach(function(t, n) {
                                var i = s + "." + t,
                                    a = p[t];
                                "object" === e.typeof(a) && u(a, i, c), h(i, c), r = []
                            }), d.immediate && d.handler && d.handler.call(Ze, be[o], Ue[o])
                        }
                        h(s, c), r = []
                    })
                } catch (t) { e.showLog(t) }
            }

            function d(t) { return ue("nexttick", function(n) { try { t && t.call(Ze, n) } catch (n) { e.showLog(n) } }), this }

            function f(t, n) { var i = "nexttick-" + t; return Ne.hasOwnProperty(i) ? this : (Ne[i] = n, ue("nexttick", function(n) { if (n.keyname === t) try { Ee[t].pop(), 0 == Ee[t].length && Ne[i] && Ne[i].call(Ze, n) } catch (n) { e.showLog(n) } }), this) }

            function h(t, n) {
                var i = function(t) {
                    try {
                        var i = [t.value, t.preValue || "", t];
                        if ("init" !== t.action) {
                            var a = n;
                            switch (e.typeof(a)) {
                                case "function":
                                    a.apply(Ze, i);
                                    break;
                                case "array":
                                    a.forEach(function(e, t) { e.apply(Ze, i) });
                                    break;
                                case "string":
                                    new Function(a + "(" + t.value + "," + (t.preValue || "") + ")")();
                                    break;
                                default:
                                    a.apply(Ze, i)
                            }
                        }
                    } catch (t) { e.showLog(t) }
                };
                return ue(t, i), fe.bind(this, t, i)
            }

            function p() {
                try {
                    Object.keys(we).forEach(function(t) {
                        if (be.hasOwnProperty(t)) return void e.showLog("不能跟data的键值相同:" + t);
                        var n = we[t];
                        Object.defineProperty(Ze, t, {
                            get: function() {
                                var e, i = "function" == typeof n ? n.bind(this) : n.get.bind(this);
                                return Ae.target && (Se[t] = [], Se[t].push(Ae.target)), Ae.target = function() {
                                    var e = i();
                                    Se[t] && Se[t].forEach(function(e) { return e() }), he(t, { target: null, value: e, action: "set", keyname: t, param: [], origin: Ue }), Ae.target = null, Ve = []
                                }, e = i(), Ae.target = null, Ve = [], e
                            },
                            set: n && "object" === e.typeof(n) ? n.set || function() {} : function() {}
                        })
                    })
                } catch (t) { e.showLog(t) }
            }

            function g() {
                try {
                    Object.keys(ke).forEach(function(t) {
                        if (be.hasOwnProperty(t)) return void e.showLog("不能跟data的键值相同:" + t);
                        Object.defineProperty(Ze, t, { get: function() { return ke[t].bind(this) }, set: function() {} })
                    })
                } catch (t) { e.showLog(t) }
            }

            function v() {
                try {
                    Object.keys(Te).forEach(function(t) {
                        if (be.hasOwnProperty(t)) return void e.showLog("不能跟data的键值相同:" + t);
                        Object.defineProperty(Ze, t, { get: function() { return Te[t].bind(this) }, set: function() {} })
                    })
                } catch (t) { e.showLog(t) }
            }

            function m(i) {
                try {
                    var a = null,
                        o = null;
                    void 0 === i ? (a = Me, o = me) : "string" == typeof i ? (a = Fe(i), o = me) : i && "object" === (void 0 === i ? "undefined" : t(i)) && (a = Fe(i) || n(i), o = n.extend(!0, {}, me, i));
                    var r = !0;
                    if (o.beforeCompiles.forEach(function(e, t) { if (!1 === (r = e.call(Ze, o))) return !1 }), !1 === r) return Ve = [], !1;
                    if (L(a), x(a), o.needComponent) return loader.components({ id: a, compiled: function() { T(a), O(a), I(a), $e = !0, b(), Ve = [], o.compileds.forEach(function(e, t) { e.call(Ze, o) }) } }), this;
                    T(a), O(a), I(a), $e = !0, b(), Ve = [], o.compileds.forEach(function(e, t) { e.call(Ze, o) })
                } catch (t) { e.showLog(t) }
                return this
            }

            function b() {
                return Me.find("[ref]").each(function() {
                    var t = this.getAttribute("ref"),
                        n = Re.hasOwnProperty(t),
                        i = null;
                    n && "htmldivelement" === e.typeof(Re[t]) ? (i = [Re[t]], i.push(this), Re[t] = i) : n && "array" === e.typeof(Re[t]) ? Re[t].push(this) : Re[t] = this
                }), this
            }

            function y(t) {
                try {
                    var i = this,
                        a = "string" == typeof t ? t : "",
                        o = new RegExp("{{[\\s]?" + ye + xe + "(.*?)}}", "mg");
                    return a = a.replace(o, function(t, a) { var o = a.split(ye + xe); "" === n.trim(o[0]) && o.shift(); var r = o.length > 0 && e.unit.getKeyValue(o.join("."), Ue) || ""; return "function" == typeof r ? r.call(i) : r })
                } catch (t) { e.showLog(t) }
            }

            function w(t, n) {
                var i = void 0;
                if (Xe && Xe.hasOwnProperty(t)) i = Xe[t];
                else {
                    if (void 0 === (i = e.unit.getKeyValue(t, n))) return void(Ye && console.warn("请检查 " + t + " 在mue.store scope:" + ye + " 中有没有声明定义"));
                    Xe[t] = i
                }
                return i
            }

            function x(t) {
                try {
                    var n = t,
                        i = [],
                        a = n[0] && n[0].outerHTML || n.html() || "",
                        o = a.match(_e) || [],
                        r = e.array.uniq(o);
                    r.length && r.forEach(function(t, a) {
                        var o = n.find("[" + t + "*=" + ye + "]");
                        o.length < 1 && (o = n.closest("[" + t + "*=" + ye + "]")), o.length && o.each(function(n, a) {
                            var o = this,
                                r = "",
                                l = Z.call(this, "" + t),
                                c = l[0] && l[0].keyname || "",
                                s = c.indexOf(".length"),
                                u = s > -1 ? c.substr(0, s) : c,
                                d = l[0] && l[0].param;
                            w(u, Ze);
                            var f = Z.call(this, "b-linked");
                            if (f.length && f.forEach(function(t, n) { ue(t.keyname, function(t) { he(c, { target: null, value: e.unit.getKeyValue(c, Ze), action: "set", keyname: c, param: d, origin: Ue }) }) }), "b-show" === t) switch (l[0] && l[0].rule) {
                                case "!":
                                    r = "b-hide";
                                    break;
                                default:
                                    r = "b-show"
                            } else r = t;
                            if (Oe) { var h = e.array.compare(Je[r], u);!h && Je[r].push(u), !h && ue(u, Ke[r].bind(o)) } else !qe && 0 === n && fe(u), ue(u, Ke[r].bind(o));
                            e.array.compare(i, u) || i.push(u), Ve = [], Le = !1, Pe = !0
                        })
                    }), k(i)
                } catch (t) { e.showLog(t) }
            }

            function k(e) { e.forEach(function(e, t) { he(e, { target: null, action: "init", value: Xe[e], param: null, keyname: e, origin: Ue }), Ve = [] }) }

            function T(t) {
                function i(t) {
                    var n = t.target.value,
                        i = Z.call(this, "b-model"),
                        a = i[0] && i[0].keyname || "";
                    if ("" === a) return e.showLog("b-model的值不能为空"), !1;
                    re(a, n), Ve = [], t.stopPropagation()
                }

                function a(t) {
                    try {
                        var n = this,
                            i = this.getAttribute("value") || this.checked,
                            a = this.getAttribute("type"),
                            o = Z.call(this, "b-model"),
                            l = o[0].keyname,
                            c = null,
                            s = this.getAttribute("check-value"),
                            u = this.getAttribute("uncheck-value"),
                            d = this.getAttribute("check"),
                            f = this.getAttribute("uncheck");
                        (d || f || s || u) && (i = this.checked ? s || this.value || d : u || f || ""), c = w(l, Ze);
                        var h = /\{.+\}$/g,
                            p = h.test(i),
                            g = p ? null : r.find('[type="checkbox"][b-model="' + ye + "." + l + '"][value="' + i + '"],\n                [type="radio"][b-model="' + ye + "." + l + '"][value="' + i + '"]');
                        switch (a) {
                            case "checkbox":
                                this.checked && (c && "array" === e.typeof(c) ? !e.array.compare(c, i) && e.unit.getKeyValue(l, Ze).push(i) : re(l, i), this.checked = !0), this.checked || (c && "array" === e.typeof(c) ? e.array.remove(e.unit.getKeyValue(l, Ze), i) : re(l, i), this.checked = !1), g && g.each(function(e, t) { this.checked = n.checked });
                                break;
                            case "radio":
                            default:
                                re(l, i)
                        }
                        Ve = [], t.stopPropagation()
                    } catch (t) { e.showLog(t) }
                }

                function o(t) {
                    try {
                        var i = n(this).val(),
                            a = (this.selectedIndex, this.multiple),
                            o = Z.call(this, "b-model"),
                            r = o[0].keyname,
                            l = null;
                        switch (l = w(r, Ze), a) {
                            case !0:
                                "array" !== e.typeof(l) && e.showLog(r + "的类型必须为数组"), i.splice(0, 0, 0, i.length + 1), l.splice.apply(l, i);
                                break;
                            default:
                                re(r, i)
                        }
                        Ve = [], t.stopPropagation()
                    } catch (t) { e.showLog(t) }
                }
                var r = t,
                    l = '[type="text"][b-model*=' + ye + '],\n                                [type="search"][b-model*=' + ye + '],\n                                [type="password"][b-model*=' + ye + '],\n                                [type="url"][b-model*=' + ye + '],\n                                [type="number"][b-model*=' + ye + '],\n                                [type="email"][b-model*=' + ye + '],\n                                [type="range"][b-model*=' + ye + '],\n                                [type="tel"][b-model*=' + ye + "],\n                                textarea[b-model*=" + ye + "]";
                if ("input" === me.modelEvent) {
                    var c = !1;
                    r.off("input compositionstart compositionend", l).on(Ce, l, function(e) { c || i.call(e.target, e) }).on("compositionstart", l, function(e) { c = !0, e.stopPropagation() }).on("compositionend", l, function(e) { c = !1, i.call(e.target, e), e.stopPropagation() })
                } else r.off(Ce, l).on(Ce, l, i);
                var s = '[type="checkbox"][b-model*=' + ye + '],\n                                [type="radio"][b-model*=' + ye + "]";
                r.off("change", s).on("change", s, a);
                var u = "select[b-model*=" + ye + "]";
                r.off("change", u).on("change", u, o)
            }

            function I(e) {
                e.off("change", "[b-checked*=" + ye + "]").on("change", "[b-checked*=" + ye + "]", function(e) {
                    var t = this.checked;
                    re(Z.call(this, "b-checked")[0].keyname, t), Ve = [], e.stopPropagation()
                })
            }

            function O(e) {
                var t = e;
                t.off("click.bui", "[b-click*=" + ye + "]").on("click.bui", "[b-click*=" + ye + "]", function(e) {
                    var t = C.call(this, e, "b-click");
                    if (!1 === t) return !1;
                    void 0 === t && e.stopPropagation()
                }), t.off("touchstart", "[b-touchstart*=" + ye + "]").on("touchstart", "[b-touchstart*=" + ye + "]", function(e) { if (!1 === C.call(this, e, "b-touchstart")) return !1 }), t.off("touchmove", "[b-touchmove*=" + ye + "]").on("touchmove", "[b-touchmove*=" + ye + "]", function(e) { if (!1 === C.call(this, e, "b-touchmove")) return !1 }), t.off("touchend", "[b-touchend*=" + ye + "]").on("touchend", "[b-touchend*=" + ye + "]", function(e) { if (!1 === C.call(this, e, "b-touchend")) return !1 }), t.off("focus", "[b-focus*=" + ye + "]").on("focus", "[b-focus*=" + ye + "]", function(e) { if (!1 === C.call(this, e, "b-focus")) return !1 }), t.off("change", "[b-change*=" + ye + "]").on("change", "[b-change*=" + ye + "]", function(e) { if (!1 === C.call(this, e, "b-change")) return !1 }), t.off("blur", "[b-blur*=" + ye + "]").on("blur", "[b-blur*=" + ye + "]", function(e) { if (!1 === C.call(this, e, "b-blur")) return !1 }), t.off("submit", "[b-submit*=" + ye + "]").on("submit", "[b-submit*=" + ye + "]", function(e) { if (!1 === C.call(this, e, "b-submit")) return !1 })
            }

            function C(t, n) {
                var i = Z.call(this, n),
                    a = i[0].keyname,
                    o = i[0].param,
                    r = null;
                o.push(t);
                try { r = w(a, Ze); var l = "function" == typeof r && r.apply(Ze, o); return Ve = [], he(a, { target: this, value: r, action: "set", keyname: a, param: o, origin: Ue }), l } catch (t) { e.showLog(t) }
            }

            function j(e) { loader.views({ id: e.id, loaded: function(e) { m(e.el) }, compiled: e.compiled }) }

            function L(t) {
                var n = t,
                    i = n.find("[b-template*=" + ye + "]"),
                    a = [];
                if (Ee = {}, i.length) try {
                    i.each(function(t, n) {
                        var i = this,
                            o = Fe(i),
                            r = Z.call(this, "b-template"),
                            l = r[0].keyname,
                            c = r[0].param,
                            s = ye + xe;
                        c[0] || console.error('b-template 没有找到数据源, 格式为: b-template="page.template(page.sources)"');
                        var u = "string" == typeof c[0] && c[0].replace(new RegExp(s), "") || "",
                            d = o.attr("b-command"),
                            f = d || "html",
                            h = o.attr("b-children") || o.children()[0] && o.children()[0].tagName;
                        w(u, Ze);
                        Oe && fe(u), Ee.hasOwnProperty(u) ? Ee[u].push(u) : Ee[u] = [u], ue(u, function(t) {
                            try {
                                var n, i = t.param;
                                switch (t.action) {
                                    case "push":
                                    case "unshift":
                                        n = i;
                                        break;
                                    case "splice":
                                        n = i.slice(2) || "";
                                        break;
                                    default:
                                        n = t.value
                                }
                                if (Te && Te.hasOwnProperty(l)) {
                                    c = c.map(function(e, t) { if ("string" == typeof e && 0 == e.indexOf(ye + xe) && t > 0) { return w(e.replace(new RegExp(s), ""), Ue) } return e }), c[0] = n;
                                    var a = void 0 !== n && "undefined" !== n && Te[l] && Te[l].apply(Ze, c);
                                    void 0 === a && (a = "", e.showLog(l + "模板方法需要返回内容，例如：return html;")), Oe && (o = Fe('[b-template*="' + (s + u) + '"]'));
                                    var r = t.preValue || [];
                                    0 == r.length && o.empty();
                                    var d = h ? o.children(h) : o.children(),
                                        p = d,
                                        g = i && i.length || 0,
                                        v = null;
                                    switch (qe = !0, t.action) {
                                        case "push":
                                            if (o.append(a), d = o.children(h), g && g == d.length) x(d);
                                            else if (g > 1)
                                                for (var m = p.length, b = m; b < d.length; b++) v = d.eq(m + b - 1), x(v);
                                            else v = d.last(), x(v);
                                            break;
                                        case "unshift":
                                            if (o.prepend(a), d = o.children(h), g && g == d.length) x(d);
                                            else if (g > 1)
                                                for (var b = 0; b < g; b++) v = d.eq(b), x(v);
                                            else v = d.first(), x(v);
                                            break;
                                        case "pop":
                                            d.last().remove(), d = o.children(h), v = d.last(), x(v);
                                            break;
                                        case "shift":
                                            d.first().remove(), d = o.children(h), v = d.first(), x(v);
                                            break;
                                        case "length":
                                            break;
                                        case "splice":
                                            var y = parseInt(i[0]),
                                                k = parseInt(i[1]);
                                            k >= r.length && (o.empty(), d = o.children(h));
                                            var T = d.length,
                                                I = T > 0;
                                            if (0 == k)
                                                if (I && T - 1 >= y) { d.eq(y).before(a), d = o.children(h); for (var b = 0; b < n.length; b++) v = d.eq(y + b), x(v) } else { o.append(a), d = o.children(h); for (var b = 0; b < n.length; b++) v = d.eq(T + b), x(v) }
                                            else if (k > 0) {
                                                if (void 0 !== i[2])
                                                    if (I && T - 1 >= y) { d.eq(y).before(a), d = o.children(h); for (var b = 0; b < n.length; b++) v = d.eq(y + b), x(v) } else { o.append(a), d = o.children(h); for (var b = 0; b < n.length; b++) v = d.eq(T + b), x(v) }
                                                for (var b = 0; b < k; b++) d.eq(y + n.length + b).remove();
                                                a && !n.length && o.html(a)
                                            }
                                            break;
                                        case "reverse":
                                        case "sort":
                                            o.html(a), x(o);
                                            break;
                                        default:
                                            o[f](a), x(o)
                                    }
                                    he.call(Ze, "nexttick", t)
                                } else e.showLog("找不到对应的模板,请检查下 scope:" + ye + " 的templates是否存在" + l, "mue.store")
                            } catch (t) { e.showLog(t) }
                        }), e.array.compare(a, u) || a.push(u), Ve = []
                    }), k(a)
                } catch (t) { e.showLog(t) }
            }

            function P(e) { return 0 == this.getAttribute(e).indexOf("!") }

            function S(t) {
                var n = E.call(this, t, "b-text"),
                    i = P.call(this, "b-text"),
                    a = "",
                    o = e.typeof(t.value),
                    r = n.attr("b-text"),
                    l = Z.call(this, "b-text"),
                    c = (l[0].keyname, l[0].param);
                switch (o) {
                    case "array":
                        a = N(t, r);
                        break;
                    case "function":
                        a = t.value.apply(Ze, c);
                        break;
                    default:
                        a = t.value
                }
                a = i ? !a : a, n.text(a), Ve = []
            }

            function E(e, t) { var i = ye + xe + e.keyname; return Oe ? n("[" + t + '="' + i + '"]') : Fe(this) }

            function N(e, t) { return t.indexOf(".length") > -1 ? e.value.length || 0 : e.value instanceof Array ? e.value.join(",") : e.value }

            function B(t) {
                var n = E.call(this, t, "b-html"),
                    i = P.call(this, "b-html"),
                    a = "",
                    o = e.typeof(t.value),
                    r = n.attr("b-html"),
                    l = Z.call(this, "b-html"),
                    c = (l[0].keyname, l[0].param);
                switch (o) {
                    case "array":
                        a = N(t, r);
                        break;
                    case "function":
                        a = t.value.apply(Ze, c);
                        break;
                    default:
                        a = t.value
                }
                a = i ? !a : a, n.html(a), Ve = []
            }

            function R(e) {
                var t = E.call(this, e, "b-value");
                Oe ? t.each(function(t, n) { D.call(this, e) }) : D.call(t[0], e), Ve = []
            }

            function D(t) {
                var n = this.getAttribute("type"),
                    i = this.value,
                    a = this,
                    o = this.getAttribute("b-value");
                switch (n) {
                    case "radio":
                        i == t.value ? this.checked = !0 : this.checked = !1;
                        break;
                    case "checkbox":
                        "array" === e.typeof(t.value) && t.value.forEach(function(e, t) { i == e && (a.checked = !0) });
                        break;
                    default:
                        this.value = N(t, o)
                }
            }

            function A(e) {
                var t = E.call(this, e, "b-model");
                Oe ? t.each(function(t, n) { F.call(this, e) }) : F.call(t[0], e)
            }

            function F(e) {
                var t = this.getAttribute("type"),
                    i = this.value,
                    a = (e.param, this);
                if ("SELECT" === this.nodeName && this.multiple) return void(e.value.length > 1 ? e.value.forEach(function(e, t) { "string" == typeof e ? n(a).find("option[value=" + e + "]").attr("selected", !0) : n(a).find("option[value=" + e.value + "]").attr("selected", !0) }) : this.value = e.value[0]);
                switch (t) {
                    case "radio":
                        i == e.value ? this.checked = !0 : this.checked = !1;
                        break;
                    case "checkbox":
                        if (i && e.value instanceof Array) switch (e.action) {
                            case "push":
                            case "unshift":
                                e.param.filter(function(e, t) { if (i === e) return void(a.checked = !0) });
                                break;
                            case "pop":
                            case "shift":
                                e.param.filter(function(e, t) { i === e && (a.checked = !1) });
                                break;
                            case "splice":
                                var o = e.param,
                                    r = parseInt(o[1]),
                                    l = o.slice(2);
                                0 == r ? l.forEach(function(e, t) { i === e && (a.checked = !0) }) : r > 0 && (e.preValue.forEach(function(t, n) { n <= e.param[1] && (a.checked = !1) }), e.value.forEach(function(e, t) { i === e && (a.checked = !0) }));
                                break;
                            case "length":
                                break;
                            default:
                                e.value.filter(function(e, t) { i == e && (a.checked = !0) })
                        } else e.value === i || 1 == e.value ? this.checked = !0 : this.checked = !1;
                        break;
                    default:
                        if (event && event.target && "INPUT" === event.target.nodeName) break;
                        this.value = e.value
                }
                Ve = []
            }

            function M(e) {
                var t = E.call(this, e, "b-show");
                void 0 !== e.value && 1 == Boolean(e.value) ? this.removeAttribute("style") : void 0 !== e.value && 0 == Boolean(e.value) && t.css("display", "none"), Ve = []
            }

            function H(e) {
                var t = "!" + ye + xe + e.keyname,
                    i = Oe ? n('[b-show="' + t + '"]') : Fe(this);
                void 0 !== e.value && 1 == Boolean(e.value) ? i.css("display", "none") : void 0 !== e.value && 0 == Boolean(e.value) && i.removeAttr("style")
            }

            function z(e) { this.checked = !!e.value, Ve = [] }

            function V(e) {
                var n = E.call(this, e, "b-bind"),
                    i = this,
                    a = e.keyname,
                    o = e.value;
                if ("object" === (void 0 === o ? "undefined" : t(o))) { for (var r in o) ! function(t) { ue(a + "." + t, function(n) { $(E.call(i, e, "b-bind"), t, n.value) }), $(n, t, o[t]) }(r) } else {
                    var l = "string" == typeof a && a.split(".");
                    $(n, l[l.length - 1], o)
                }
            }

            function $(e, n, i) {
                switch (n) {
                    case "disabled":
                        i ? e.attr(n, i) : e.removeAttr(n);
                        break;
                    case "checked":
                        e.prop(n, i);
                        break;
                    default:
                        var a = "object" === (void 0 === i ? "undefined" : t(i)) ? JSON.stringify(i) : i;
                        e.attr(n, a)
                }
                Ve = []
            }

            function q(e) {
                var t = E.call(this, e, "b-src");
                t.attr("src", e.value), Ve = []
            }

            function U(e) {
                var t = E.call(this, e, "b-title");
                t.attr("title", e.value), Ve = []
            }

            function W(e) {
                var t = E.call(this, e, "b-data");
                t.attr("data", e.value), Ve = []
            }

            function Y(e) {
                var t = E.call(this, e, "b-id");
                t.attr("id", e.value), Ve = []
            }

            function _(e) {
                var t = E.call(this, e, "b-href");
                t.attr("href", e.value), Ve = []
            }

            function K(e) {
                var n = E.call(this, e, "b-style"),
                    i = this;
                if ("object" === t(e.value)) { for (var a in e.value) ! function(t) { ue(e.keyname + "." + t, function(n) { E.call(i, e, "b-style").css(t, n.value) }), n.css(e.value) }(a) } else n.css(e.keyname, e.value);
                Ve = []
            }

            function J(i) {
                var a = E.call(this, i, "b-class"),
                    o = this;
                this.classList;
                if ("object" === t(i.value))
                    if ("array" === e.typeof(i.value)) {
                        i.value.length || a.attr("class", ""), i.value.forEach(function(e, t) {!a.hasClass(e) && a.addClass(e) });
                        var r = i.keyname.indeOf(".$index");
                        r > -1 ? ue(i.keyname.substr(0, r) + "." + n(a).index(), function(e) {
                            var t = E.call(o, i, "b-class");
                            X(t, e.value[t.index()], e.value)
                        }) : ue(i.keyname, function(e) {
                            var t = E.call(o, i, "b-class");
                            X(t, e.value[t.index()], e.value)
                        })
                    } else {
                        for (var l in i.value) ! function(e) {
                            var t = i.value[e],
                                n = i.preValue && i.preValue[e] || "";
                            ue(i.keyname + "." + e, function(t) { X(E.call(o, i, "b-class"), e, t.value) }), X(a, e, t, n)
                        }(l)
                    }
                else if ("function" == typeof i.value) {
                    var c = Z.call(this, "b-class"),
                        s = c[0].keyname,
                        u = c[0].param,
                        d = i.value.apply(Ze, u);
                    X(a, s, d, i.preValue)
                } else {
                    var f = "string" == typeof i.keyname && i.keyname.split("."),
                        h = f[f.length - 1];
                    X(a, h, i.value, i.preValue)
                }
                Ve = []
            }

            function X(e, t, n, i) { "boolean" == typeof n ? (n && e.addClass(t), !n && e.removeClass(t)) : "string" == typeof n ? (Oe && e.removeClass(n), i && e.removeClass(i), n && !e.hasClass(n) && e.addClass(n), void 0 !== i && "" === n && e.removeClass(i)) : (Boolean(n) && e.addClass(t), !Boolean(n) && e.removeClass(t)) }

            function Z(t) {
                var n = [],
                    i = this,
                    a = this.getAttribute(t) || "",
                    o = a.indexOf("&") > -1 ? a.split("&") : a && [a] || [];
                try {
                    o.forEach(function(e, a) {
                        var o = {},
                            r = Q.call(i, e, t);
                        o.scope = ye, o.rule = r.rule, o.keyname = r.name, o.param = r.param, o.eventType = r.eventType, o.eventProperty = r.eventProperty, n.push(o)
                    })
                } catch (t) { e.showLog("参数处理出错") }
                return n
            }

            function Q(t, i) {
                try {
                    var a = /([^\(|\)]+)/g,
                        o = t ? t.match(a) : [],
                        r = "",
                        l = "",
                        c = null,
                        s = [],
                        u = null,
                        d = this,
                        f = "",
                        h = n(d).attr("b-target"),
                        p = h ? n(d).parents(h)[0] || d : d,
                        g = "",
                        v = "";
                    if (c = o[0] && o[0].indexOf(ye + xe) > -1 ? o[0].split(ye + xe) : [ye, o[0]], f = c[0].split(ye), f = f[0] || f[1] || "", r = ye, l = c[1] || "", l.indexOf("$index") > -1) {
                        var m = n(p).index();
                        l = l.replace("$index", m)
                    } else if (l.indexOf("$id") > -1) {
                        var b = p.id;
                        l = l.replace("$id", b)
                    } else if (l.indexOf("$parentIndex") > -1) {
                        var y = n(p).parent().index();
                        l = l.replace("$parentIndex", y)
                    }
                    if (void 0 !== o[1]) {
                        var w = o[1] || "";
                        try {
                            var x = /\{.+\}$/g,
                                k = /\[.+\]$/g,
                                T = /(\"(.*?)\".*?)|(\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14})|(^((https|http|ftp|rtsp|mms)?:\/\/)[^\,]+)|([a-zA-Z0-9][-a-zA-Z0-9\._]{0,62})|(\{.+\})|(\[.+])|([$\w\.]+)|([\d\.]+)|([\u4e00-\u9fa5|\w|\d]+)/g,
                                I = w ? w.match(T) : [];
                            s = I.map(function(t, a) {
                                var o = t.replace(/^\"|\"$/g, ""),
                                    r = n(p).attr("b-target"),
                                    l = r ? n(p).parents(r)[0] || p : p;
                                switch (t) {
                                    case "$this":
                                        o = l;
                                        break;
                                    case "$index":
                                        o = n(l).index();
                                        break;
                                    case "$parentIndex":
                                        o = n(l).parent().index();
                                        break;
                                    case "$parent":
                                        o = l.parentNode;
                                        break;
                                    case "$children":
                                        o = n(l).children();
                                        break;
                                    case "$id":
                                        o = l.id;
                                        break;
                                    case "$text":
                                        o = l.textContent;
                                        break;
                                    case "$value":
                                        o = l.value;
                                        break;
                                    case "$html":
                                        o = l.innerHTML
                                }
                                if ("b-template" !== i) {
                                    var c = ye + xe;
                                    e.unit.startWithStr(o, c) && (o = e.unit.getKeyValue(o.split(c)[1], Ze))
                                }
                                return x.test(t) || k.test(t) ? JSON.parse(t) : o
                            })
                        } catch (t) { e.showLog(t, "getArguments"), s = [] }
                    }
                    void 0 !== o[2] && (u = o[2].indexOf(".") > -1 ? o[2].split(".") : [o[2]], g = u[0], v = u[1] || "")
                } catch (n) { e.showLog("参数格式错误:" + t) }
                return { scope: r, rule: f, name: l, param: s, eventType: g, eventProperty: v }
            }

            function G(e, t) { if (!e.hasOwnProperty("widget") || "function" != typeof e.widget) return ee(e, t) }

            function ee(t, n) {
                function i(t, n) { var i = t[n]; if (i instanceof Array ? ne(i, n) : te(t, n), i && "object" === e.typeof(i)) return G(i) }
                if (n && "array" === e.typeof(n))
                    if (n.length > 1) {
                        var a = n.pop(),
                            o = e.unit.getKeyValue(n.join("."), t);
                        i(o, a)
                    } else i(t, n[0]);
                else Object.keys(t).forEach(function(e) { i(t, e) })
            }

            function te(t, n) {
                var i = t[n],
                    a = "function" == typeof i ? i.call(Ze) : i,
                    o = [];
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    configurable: !0,
                    get: function(e) { return Ye && console.log("3. data getting " + n + ":", a), De.target = this, (Le || !Le && Pe) && Ve.push(n), Ae.target && o.push(Ae.target), a },
                    set: function(t) {
                        if (t === a) return Ve = [], Be = !1, Le = !1, Pe = !0, !0;
                        De.target === this && (Ve = []), De.target = this, (!Pe || !Le && Pe) && Ve.push(n);
                        var i = Ve.join(".");
                        !Be && he.call(Ze, "beforeupdate", { action: "set", value: t, preValue: a, keyname: i, origin: Ue }), !Be && me.beforeUpdates.forEach(function(e, n) { e.call(Ze, { action: "set", value: t, preValue: a, keyname: i, origin: Ue }) }), Ye && console.log("4. data setting " + i, t);
                        var r = e.unit.getKeyValue(i, Ue);
                        return a = t, o.forEach(function(e) { return e() }), !Be && he(i, { action: "set", value: a, preValue: r, keyname: i, origin: Ue }), e.unit.setKeyValue(i, a, Ue), a instanceof Array ? G(be, Ve) : "object" === e.typeof(a) && (me.deep && G(t), a && Object.keys(a).forEach(function(e, t) {
                            var i = n + "." + e;
                            Ve = [], he(i, { target: null, value: a[e], preValue: r && r[e], action: "set", keyname: i, origin: Ue })
                        })), !Be && he.call(Ze, "updated", { action: "set", value: a, preValue: r, keyname: i, origin: Ue }), !Be && me.updateds.forEach(function(e, t) { e.call(Ze, { action: "set", value: a, preValue: r, keyname: i, origin: Ue }) }), Ve = [], Be = !1, Le = !1, Pe = !0, !0
                    }
                })
            }

            function ne(t, n) {
                var i = [],
                    a = Array.prototype,
                    o = Object.create(a);
                return ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
                    var r = a[t];
                    Object.defineProperty(o, t, {
                        enumerable: !0,
                        configurable: !0,
                        value: function(a) {
                            var o = [].concat(Array.prototype.slice.call(arguments));
                            he.call(Ze, "beforeupdate", { target: null, action: t, param: o, value: this, prevValue: [], keyname: n, origin: Ue }), i.push(n), be.hasOwnProperty(n) || i.unshift(Ve.join("."));
                            var l = i.join("."),
                                c = this.slice(0),
                                s = r.apply(this, o);
                            switch (Ye && console.log("5. " + l + " action " + t + " "), t) {
                                case "pop":
                                case "shift":
                                    o = [s]
                            }
                            e.unit.setKeyValue(l, this, Ue);
                            var u = Me.find('[b-template*="' + ye + "." + l + '"]');
                            return he(l, { target: u, action: t, param: o, value: this, preValue: c, keyname: n, origin: Ue }), Se[i[0]] && "array" === e.typeof(Se[i[0]]) && Se[i[0]].forEach(function(e) { return e() }), i = [], Ve = [], Le = !1, Pe = !0, he.call(Ze, "updated", { target: u, action: t, param: o, value: this, preValue: c, keyname: n, origin: Ue }), me.updateds.forEach(function(e, i) { e.call(Ze, { target: u, action: t, param: o, value: this, preValue: c, keyname: n, origin: Ue }) }), s
                        }
                    })
                }), o.$index = function(t, n) { return e.array.index(this, t, n) }, o.$include = function(t, n) { return e.array.compare(this, t, n) }, o.$empty = function() { return e.array.empty(this) }, o.$replace = function(t) { return e.array.replace(this, t) }, o.$merge = function() { var t; return (t = e.array).merge.apply(t, [this].concat(Array.prototype.slice.call(arguments))) }, o.$get = function(t, n) { return e.array.get(this, t, n) }, o.$set = function(t, n, i) { return e.array.set(this, t, n, i) }, o.$delete = function(t, n) { return e.array.delete(this, t, n) }, o.$deleteIndex = function(t) { return e.array.deleteIndex(this, t) }, t.__proto__ = o, t
            }

            function ie(t) { if (void 0 === t) return Ue = Ue; if ("string" == typeof t) { var n = e.unit.getKeyValue(t, Ue); return Ve = [], n } return Ue }

            function ae(n, i, a) {
                function o(t, i) {
                    for (var o = Object.keys(i), l = 0; l < o.length; l++) {
                        if ("break" === function(i) {
                                var l = o[i],
                                    c = t + "." + l,
                                    s = "" == a ? l : a + "." + l;
                                if (e.array.compare(Qe, c, "field")) return "break";
                                var u = e.unit.getKeyValue(c, r.$data);
                                void 0 !== a ? n.set(s, u) : n.set(c, u);
                                var d = h(c, function(e) { void 0 !== a ? n.set(s, e) : n.set(c, e) });
                                Qe.push({ field: c, disconnect: d })
                            }(l)) break
                    }
                }
                if ("object" !== (void 0 === n ? "undefined" : t(n))) return Ze;
                var r = this;
                if ("string" == typeof i) {
                    var l = e.array.compare(Qe, i, "field");
                    if (l) return Ze;
                    var c = e.unit.getKeyValue(i, r.$data);
                    if ("object" === e.typeof(c)) o(i, c);
                    else {
                        n.set(a || i, c);
                        var s = h(i, function(e) { n.set(a || i, e) });
                        Qe.push({ field: i, disconnect: s })
                    }
                } else
                    for (var u = Object.keys(Ue), d = 0; d < u.length; d++) { var l, s, f = function() { var t = u[d]; if (l = e.array.compare(Qe, t, "field")) return "break"; if (n.$data.hasOwnProperty(t)) { var i = (n.$data[t], r.$data[t]); "object" === e.typeof(i) ? o(t, i) : (n.set(t, i), s = h(t, function(e) { n.set(t, e) }), Qe.push({ field: t, disconnect: s })) } }(); if ("break" === f) break }
                return Ze
            }

            function oe(t) {
                if ("string" == typeof t) {
                    var n = e.array.get(Qe, t, "field");
                    n && n.disconnect()
                } else Qe.forEach(function(e, t) { e.disconnect() });
                return Ze
            }

            function re(i, a) {
                var r = "string" == typeof i,
                    l = [],
                    c = null;
                if (Ve = [], r && void 0 !== a) {
                    var s, u;
                    Ye && console.log("set " + i + " "), Be = !0, he.call(Ze, "beforeupdate", (s = { action: "set", target: null, value: c, preValue: d }, o(s, "action", "set"), o(s, "keyname", i), o(s, "origin", Ue), s)), me.beforeUpdates.forEach(function(e, t) {
                        var n;
                        e.call(Ze, (n = { action: "set", target: null, value: c, preValue: d }, o(n, "action", "set"), o(n, "keyname", i), o(n, "origin", Ue), n))
                    });
                    var d = e.unit.getKeyValue(i, Ue);
                    a && "object" === e.typeof(a) ? (c = n.extend(!0, {}, a), l.push(i), Object.keys(a).forEach(function(e, t) {
                        var n = i + "." + e;
                        he.call(Ze, n, { target: null, value: a[e], preValue: d, action: "set", keyname: n, origin: Ue })
                    })) : c = a, e.unit.setKeyValue(i, a, be), e.unit.setKeyValue(i, c, Ue), We[i] = c, he.call(Ze, i, { target: null, value: c, preValue: d, action: "set", keyname: i, origin: Ue }), he.call(Ze, "updated", (u = { action: "set", target: null, value: c, preValue: d }, o(u, "action", "set"), o(u, "keyname", i), o(u, "origin", Ue), u)), me.updateds.forEach(function(e, t) {
                        var n;
                        e.call(Ze, (n = { action: "set", target: null, value: c, preValue: d }, o(n, "action", "set"), o(n, "keyname", i), o(n, "origin", Ue), n))
                    }), "object" === (void 0 === a ? "undefined" : t(a)) && (a instanceof Array ? G(be, i.split(xe)) : G(a)), Ve = []
                } else i && "object" === e.typeof(i) && (Ue = n.extend(!0, {}, Ue, i), se(i));
                return Ue
            }

            function le(t, n) { return "string" == typeof t && (e.unit.delKey(t, Ue), n && n.call(Ze, t)), Ue }

            function ce(e, t) { return le(e, function(t) { he(e) }), Ue }

            function se(t, n) {
                for (var i in t) {
                    var a = void 0 === n ? i : n + i,
                        o = t[i];
                    he(a, {
                        target: null,
                        value: o,
                        preValue: Ue[i] || "undefined",
                        action: "set",
                        param: null,
                        keyname: a,
                        origin: Ue
                    }), o && "object" === e.typeof(o) && se(o, i + ".")
                }
            }

            function ue(t, n) { var i = ""; return i = t && "array" === e.typeof(t) ? t.map(function(e, t) { return ye + xe + e }) : ye + xe + t, De.on.call(Ze, i, n), this }

            function de(e, t) { return Ne.hasOwnProperty(e) ? this : (ue(e, t), Ne[e] = t, this) }

            function fe(e, t) {
                if (e) {
                    var n = ye + xe + e;
                    De.off.call(Ze, n, t)
                } else Ze.handle = {};
                return this
            }

            function he(e) { var t = ye + xe + e; return Ye && console.warn(t, "trigger"), arguments[0] = t, De.trigger.apply(Ze, arguments), Le = !1, Pe = !0, this }

            function pe() { return Ve = [], Le = !1, Pe = !0, Be = !1, this }

            function ge() { return Ve = [], me.beforeDestroys.forEach(function(e, t) { e.call(Ze) }), Le = !1, Pe = !0, Be = !1, fe(), me.beforeMounts = [], me.beforeCompiles = [], me.compileds = [], me.mounteds = [], me.beforeUpdates = [], me.updateds = [], me.destroyeds.forEach(function(e, t) { e.call(Ze) }), this }
            var ve = { el: null, scope: "", data: null, extends: null, mixins: [], beforeMounts: [], beforeCompiles: [], compileds: [], beforeUpdates: [], mounteds: [], updateds: [], beforeDestroys: [], destroyeds: [], computed: null, methods: null, watch: null, templates: null, beforeMount: null, mounted: null, beforeCompile: null, compiled: null, beforeUpdate: null, updated: null, beforeDestroy: null, destroyed: null, isPublic: !1, modelEvent: "input", scopeSplit: ".", delayInput: 200, needStatic: !1, needView: !0, needComponent: !1, needCompile: !0, needNative: !1, deep: !0, log: !1, autoinit: !0 },
                me = null;
            me = a(i);
            var be = me.data,
                ye = me.scope || e.guid(),
                we = me.computed,
                xe = me.scopeSplit,
                ke = me.methods,
                Te = me.templates,
                Ie = me.watch || ve.watch,
                Oe = (me.delayInput, me.isPublic),
                Ce = me.modelEvent,
                je = me.needStatic,
                Le = !1,
                Pe = !0,
                Se = {},
                Ee = {},
                Ne = {},
                Be = !1,
                Re = {},
                De = e.emitter(),
                Ae = { target: null };
            me.el ? me.el = me.el : me.el = Oe ? "body" : ".mue-page";
            var Fe = null,
                Me = null,
                He = null,
                ze = null,
                Ve = [],
                $e = !1,
                qe = !0,
                Ue = be,
                We = {},
                Ye = void 0 === me.log ? ve.log : me.log,
                _e = /b-text|b-html|b-value|b-show|b-hide|b-checked|b-src|b-href|b-bind|b-style|b-class|b-model|b-id|b-data|b-title/gim,
                Ke = { "b-text": S, "b-html": B, "b-value": R, "b-show": M, "b-hide": H, "b-checked": z, "b-bind": V, "b-src": q, "b-title": U, "b-data": W, "b-id": Y, "b-href": _, "b-class": J, "b-model": A, "b-style": K },
                Je = { "b-text": [], "b-html": [], "b-value": [], "b-show": [], "b-hide": [], "b-checked": [], "b-bind": [], "b-src": [], "b-href": [], "b-class": [], "b-model": [], "b-style": [] },
                Xe = {},
                Ze = (n.extend(!0, {}, be, ke, Ie, we, Te), { $methods: ke, $refs: Re, mixin: a, $options: me, $templates: Te, config: me, watch: h, nextTick: d, oneTick: f, get: ie, set: re, delete: ce, del: ce, observer: G, compile: m, $mount: m, compileHtml: y, clearKey: pe, destroy: ge, init: r, connect: ae, disconnect: oe, on: ue, off: fe, one: de, trigger: he, emitter: De });
            try { me.autoinit && r() } catch (t) { e.showLog(t) }
            var Qe = [];
            return Ze
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        function n(n, i) {
            function a(t) {
                var n = i || 750,
                    a = document.head.parentNode,
                    o = t || (p / n * 100).toFixed(2);
                return u = o || 48, e.config.viewport.zoom && (a.style.fontSize = u + "px"), e.trigger.call(e, "viewportinit"), this
            }

            function o(e) { return p || t("body").width() || t("#mue-router").width() || t(".mue-page").width() }

            function r(e) { return g || t("body").height() || t("#mue-router").height() || t(".mue-page").height() }

            function l(e) { return v }

            function c(e) { return m }

            function s(e) { return h }
            e.trigger.call(e, "viewportbefore");
            var u, d = document.querySelector("meta[name=viewport]"),
                f = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
                h = window.devicePixelRatio,
                p = document.documentElement.clientWidth,
                g = document.documentElement.clientHeight,
                v = parseInt(p) * parseInt(h),
                m = parseInt(g) * parseInt(h);
            if (p = p > g ? g + 24 : p, d) e.config.viewport.create && (d.content = f);
            else {
                var b = document.createElement("meta");
                b.name = "viewport", b.content = f;
                var y = document.head;
                e.config.viewport.create && y.appendChild(b), b = null
            }
            var w = [240, 320, 360, 375, 384, 393, 412, 414, 435, 480, 512, 540, 768, 1024, 1536, 2048, 2732, 534, 854, 750],
                x = [32, 42.67, 48, 50, 51.2, 52.4, 54.93, 55.2, 58, 64, 68.27, 60, 60, 60, 60, 60, 60, 60, 60, 60],
                k = e.array.index(w, document.documentElement.clientWidth);
            return k > -1 && void 0 === n ? u = x[k] : a(n), { width: o, height: r, fontSize: u, screenWidth: l, screenHeight: c, ratio: s, init: a }
        }
        e.viewport = n
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.loader = function(i) {
            function o(e) { return e = e || {}, Y = n.extend({}, Y, e), G.config = Y, this }

            function r(e) {
                if (void 0 === e) return Z;
                if ("object" === (void 0 === e ? "undefined" : t(e)) && (e.hasOwnProperty("modules") || e.hasOwnProperty("baseUrl") || e.hasOwnProperty("globals"))) Z = n.extend(!0, {}, Z, e), Q = Z.modules;
                else if ("object" === (void 0 === e ? "undefined" : t(e)) && e.hasOwnProperty("moduleName")) {
                    var i = d(e);
                    Q[e.moduleName] = i || {}, Z = n.extend(!0, Z, { modules: Q }), Q = Z.modules
                }
                return Z
            }

            function l(e) {
                if ("object" === (void 0 === e ? "undefined" : t(e))) r({ globals: e });
                else if ("function" == typeof e) {
                    var n = e.call(G, Z.globals);
                    r({ globals: n })
                }
                return G
            }

            function c(e) { if ("string" == typeof e) return Z.modules[e] || null }

            function s(t, n) {
                if (n && "object" === e.typeof(n)) {
                    if (n.moduleName = t, n.hasOwnProperty("loaded") && "function" == typeof n.loaded) {
                        var i = n.loaded;
                        n.loaded = function() {
                            Q = Z.modules;
                            var e = n.moduleName,
                                t = Q[e].depend,
                                a = [m, Q[e] && Q[e].exports, Q[e], Z.globals],
                                o = [];
                            t.length && t.forEach(function(e, t) { Q[e] && o.push(Q[e].exports) });
                            var r = o.concat(a);
                            return i && i.apply(this, r)
                        }, n.script = n.moduleName + ".js", n.path = n.script.substr(0, n.script.lastIndexOf("/") + 1)
                    }
                    n.depend && n.depend.length && (n.depend = h(n.depend, n.script)), r(n)
                }
                return this
            }

            function u(e, t) {
                var n = e,
                    i = t.lastIndexOf("/"),
                    a = t.substr(0, i);
                return e.indexOf("../") > -1 ? (e = e.replace(/\..\//g, function(e) { var t = a.lastIndexOf("/"); return a = a.substr(0, t), "" }), n = a ? a + "/" + e : e) : e.indexOf("./") > -1 && (n = a + "/" + e.replace(/\.\//g, "")), n
            }

            function d(e) {
                var t = { id: "", moduleName: "", template: "", data: null, depend: [], script: "", style: [], isDefined: !1, isLoaded: !1, beforeCreate: null, created: null, beforeLoad: null, loaded: null, show: null, hide: null, beforeDestroy: null, destroyed: null, path: "", exports: {}, dependExports: [] },
                    i = {};
                return Q.hasOwnProperty(e.moduleName) && (i = n.extend(!0, {}, Q[e.moduleName])), n.extend(!0, {}, t, i, e)
            }

            function f(t) {
                Y.log && console.log("destroy " + t);
                var i = "string" == typeof t ? Q[t] : null;
                if (i) {
                    i.beforeDestroy && i.beforeDestroy.call(i);
                    var a = n('script[name="' + t + '"]').attr("src");
                    K = e.array.remove(K, a), n('script[name="' + t + '"]').remove(), delete Z.modules[t], Q = Z.modules, i.destroyed && i.destroyed.call(i)
                }
            }

            function h(e, t) {
                for (var n = [], i = 0; i < e.length; i++) {
                    var a = e[i],
                        o = a.indexOf("./") > -1 ? u(a, t) : a;
                    if (o.indexOf(".css") > -1) o.indexOf("css!") > -1 ? styles.push(o.substr(4)) : styles.push(o);
                    else {
                        var l = o.indexOf(".js");
                        l > -1 && (o = o.substr(0, l)), n.push(o), Q.hasOwnProperty(o) || r({ moduleName: o })
                    }
                }
                return n
            }

            function p(t, i, a) {
                var o = { moduleName: "", template: "", script: "", path: "", data: null, depend: [], beforeCreate: null, created: null, beforeLoad: null, loaded: null, hide: null, exports: null, show: null, beforeDestroy: null, destroyed: null },
                    l = {},
                    c = "";
                try {
                    var s = v().name ? v() : g(),
                        u = s.name
                } catch (e) {}
                var d = [],
                    f = [];
                if (void 0 === t) return e.showLog("define第1个参数不能为空"), this;
                "function" == typeof t ? (a = t, c = u, i = []) : "object" === e.typeof(t) ? (c = u, i = t.depend || [], a = t.loaded, l = n.extend(!0, {}, o, t)) : "array" === e.typeof(t) ? (a = i, i = t, c = u) : "function" == typeof i ? (c = t, a = i, i = []) : (c = t, i = i, a = a);
                var p = Q.hasOwnProperty(c) ? Q[c].script || s.src : s.src,
                    b = window.location.href.substr(0, window.location.href.indexOf("#")).replace("index.html", "");
                if (p = p.replace(b, ""), Y.log && console.log("define " + c), i.length && (d = h(i, p)), "string" == typeof c && "function" == typeof a) {
                    var y = function() {
                        var e = [m, Q[u] && Q[u].exports, Q[u], Z.globals],
                            t = [];
                        d.length && d.forEach(function(e, n) { Q[e] && t.push(Q[e].exports) });
                        var n = t.concat(e);
                        return a && a.apply(this, n)
                    };
                    l = t && "object" === e.typeof(t) ? n.extend(!0, {}, o, Q[c], e.config.loader.define, t) : n.extend(!0, {}, o, Q[c], e.config.loader.define), l.moduleName = c, l.depend = d, l.style = f, l.script = p, l.path = p.substr(0, p.lastIndexOf("/") + 1), l.loaded = y, l.isDefined = !0, r(l)
                } else e.showLog("define " + c + "模块的参数格式不对");
                return this
            }

            function g(e) {
                var t = window.location.pathname,
                    n = t.indexOf(".html"),
                    i = "",
                    a = "";
                return n > -1 ? (i = t.substr(1, n), a = i + ".js") : (i = t.substr(1), a = i + ".js"), { name: i, src: a }
            }

            function v() {
                var e, t, i = window.location.href,
                    o = [],
                    r = document.currentScript;
                if (i.indexOf("#") > -1 ? o = i.split("#") : o.push(i), U = o[0].replace("/index.html", "") + "/", r) return e = r.src.replace(U, ""), t = r.getAttribute("name") || e.substr("0", e.indexOf(Y.scriptSuffix)), { name: t, src: e };
                try { a() } catch (e) {
                    var l = e.stack || e.sourceURL || e.stacktrace || "",
                        c = l.split(/[@ ]/g).pop(),
                        s = c.replace(/(:\d+)?:\d+$/i, ""),
                        s = s.replace(new RegExp(U, "g"), "");
                    return r = n('script[src="' + s + '"]')[0], t = r ? r.getAttribute("name") : s.replace(Y.scriptSuffix, ""), { name: t, src: s }
                }
            }

            function m(t, n) {
                Y.log && console.log("require " + t);
                if (t && "string" == typeof t) {
                    if (t.indexOf(".css") > -1) return N(t, n);
                    if (t.indexOf(".html") > -1) return N(t, n);
                    t = [t]
                }
                if (n && "function" != typeof n) return e.showLog("require第2个参数格式为function", "mue.loader.require"), this;
                try { t = t.map(function(t, n) { return e.unit.resolvePath(t) }), b(t, n) } catch (t) { e.showLog(t, "mue.loader.require") }
                return this
            }

            function b(t, n) {
                function i(t, n) {
                    function o(e, t) { var a = Q[e]; return a && (a.isDefined = !0), !1 !== (a && a.beforeLoad && a.beforeLoad.call(a, a.depend)) && (a && a.depend && a.depend.length ? (Y.log && console.warn(a.moduleName + " depend:"), Y.log && console.log(a.depend), void i(a.depend, n)) : void(t == r.length - 1 && n && n.apply(a))) }
                    t = t || [], Q = Z.modules;
                    var r = e.array.uniq(t);
                    r.length > 1 && r.forEach(function(e, t) {
                        var n = Q[e];
                        (n && 1 == n.isLoaded || n.loaded) && r.splice(t, 1)
                    }), r.forEach(function(t, i) {
                        var l = Q[t];
                        if (Q[t] && Q[t].style && Q[t] && Q[t].style.length && A(Q[t].style), e.array.compare(a, t) || a.unshift(t), l && l.isLoaded) {
                            if (!1 === (l && l.beforeLoad && l.beforeLoad.call(l, l.depend))) return !1;
                            i == r.length - 1 && (n && n.apply(l), a = [])
                        } else if (l && l.loaded) {
                            o(t, i);
                            var c = Q[t].beforeCreate && Q[t].beforeCreate.call(Q[t]);
                            if (!1 === c) return !1;
                            Q[t].created && Q[t].created.call(Q[t])
                        } else D(t, function() {
                            var e = Q[t];
                            if (!1 === (e && e.beforeCreate && e.beforeCreate.call(Q[t]))) return !1;
                            e && e.style && e.style.length && A(e.style), e && e.created && e.created.call(Q[t]), o(t, i)
                        }, function() { i == r.length - 1 && (n && n.apply(null), a = []) })
                    })
                }
                var a = [];
                i(t, function() {
                    if (w(a)) {
                        var e = [];
                        t.forEach(function(i, a) { y(i), e.push(Q[i] && Q[i].exports), a === t.length - 1 && n && n.apply(G, e || []) })
                    }
                })
            }

            function y(t) {
                Q = Z.modules;
                var n = "string" == typeof t ? Q[t] || {} : t,
                    i = n.depend || [],
                    a = null,
                    o = [];
                n.dependExports = [];
                try {
                    if (i.length)
                        for (var r = 0; r < i.length; r++) {
                            var l = i[r],
                                c = Q[l];
                            c.isLoaded ? o[r] = c.exports : o[r] = y(c) || c.exports, c.exports = o[r], n.dependExports.push(o[r]), c.isLoaded = !0
                        }
                    a = n.isLoaded ? n.exports : n.loaded && n.loaded.apply(n, o), n.exports = a || Q[n.moduleName] && Q[n.moduleName].exports, n.isLoaded = !0, q(n.moduleName, n, n.exports), Y.log && console.log("execute " + n.moduleName)
                } catch (t) { e.showLog(t, "mue.loader.execute") }
                return a
            }

            function w(e) {
                var t = !0,
                    n = e || [];
                if (Q = Z.modules, n.length)
                    for (var i = 0; i < n.length; i++) {
                        var a = n[i],
                            o = Q[a];
                        if (o && !1 === o.isDefined) return t = !1, Y.log && console.warn("check defined false:" + o.moduleName), Y.log && console.warn("wait modules:"), Y.log && console.warn(n), t
                    } else
                        for (var r in Q)
                            if (Q[r] && !1 === Q[r].isDefined) return t = !1, Y.log && console.warn("check defined false:" + o.moduleName), t;
                return t
            }

            function x(t) {
                var n = !0,
                    i = [];
                if (Q = Z.modules, "string" == typeof t) { t.indexOf(",") > -1 ? i = t.split(",") : i.push(t) } else t && "array" === e.typeof(t) && (i = t || []);
                if (i.length) i.forEach(function(e, t) { Q.hasOwnProperty(e) || (n = !1), Q[e] && !1 === Q[e].isLoaded && (n = !1) });
                else
                    for (var a in Q) Q[a] && !1 === Q[a].isLoaded && (n = !1);
                return n
            }

            function k(t) {
                var i = n.extend(!0, { id: "", cacheHtml: !1, cache: !1, url: "", script: "", param: null, template: null, beforeLoad: null, loaded: null }, e.config.loader.load, t);
                if (!i.id) return void e.showLog("id不能为空");
                if (!i.url) return void e.showLog("url不能为空");
                if (!1 === ("function" == typeof i.beforeLoad ? i.beforeLoad.call(G) : i.beforeLoad)) return this;
                var a = E(i.url);
                if (i.script) {
                    var o = i.script.indexOf(".js");
                    a.module = i.script.substr(0, o)
                }
                var l = "string" == typeof i.id && (i.id.indexOf("#") > -1 || i.id.indexOf(".") > -1) ? i.id.substr(1) : i.id;
                i.id = l, i.name = a.module, i.url = a.url, r({ id: l, moduleName: a.module }), e.history.getLast().currentComponent = l, e.history.setComponent({ id: i.id, name: i.name, url: i.url, param: i.param || null });
                var c = r().modules[i.name];
                if (c && "function" == typeof c.template) { var s = c.template.call(c) || ""; return !i.cacheHtml && e.obj(i.id).html(s), T(i), this }
                if (i.cacheHtml) return T(i), this;
                if ("function" == typeof a.url) { var u = a.url(i) || ""; return !i.cacheHtml && e.obj(i.id).html(u), T(i), this }
                return N(a.url, function(t) {!i.cacheHtml && e.obj(i.id).html(t), T(i) }, function(e) { i.onFail && i.onFail.call(this, a) }), this
            }

            function T(t) {
                var n = r().modules[t.name];
                if (!1 === (n.beforeLoad && n.beforeLoad.call(n, n.depend))) return !1;
                if (n.isLoaded && "function" == typeof n.loaded && !t.cache) { n.id = t.id, n.exports = n.loaded && n.loaded.call(n, n.exports) || n.exports; var i = { id: t.id, name: t.name, url: t.url, param: t.param || null, exports: n.exports || {} }; return e.history.setComponent(i), window.store && window.store.$mount && window.store.$mount(t.id), t.loaded && t.loaded.call(n, n.exports), q(t.id, i), G }
                e.checkLoad(t.name);
                m(t.name, function(i) {
                    var a = { id: t.id, name: t.name, url: t.url, param: t.param || null, exports: i || {} };
                    e.history.setComponent(a), window.store && window.store.$mount && window.store.$mount(t.id), t.loaded && t.loaded.call(n, i), q(t.id, a)
                })
            }

            function I(i) {
                var a = n.extend(!0, { id: "", isSelf: !0, deepComponent: Y.deepComponent, cache: !1, cacheHtml: !1, delay: !0, param: null, beforeLoad: null, loaded: null, compiled: null }, e.config.loader.component, i),
                    o = null;
                o = "" === a.id ? e.$(Y.componentTag) : a.isSelf ? e.$(a.id) : e.$(a.id).find(Y.componentTag);
                for (var l = [], c = [], s = [], u = [], d = r().modules, f = 0; f < o.length; f++) {
                    var h = o[f],
                        p = e.guid();
                    !h.id && h.setAttribute("id", p);
                    var g = e.unit.getAttributes(h),
                        v = g.parentId = a && a.id || e.history.getLast().id || "mue-page",
                        m = e.$(v).parents("component"),
                        b = a.isSelf ? m[0] && m[0].id : a.id;
                    "array" === e.typeof(v) ? b = a.isSelf ? m && m[0].id : v[0].id : "object" == t(g.parentId) && e.typeof(g.parentId).indexOf("element") > -1 && (b = a.isSelf ? m[0] && m[0].id : v.id);
                    var y = b && e.history.getComponent(b, "name");
                    if (y) g.parentId = b, g.parentName = y;
                    else {
                        var w = e.history.getLast();
                        g.parentId = w.id, g.parentName = w.name
                    }
                    var x = g.name || h.getAttribute("name"),
                        T = "true" === g.rendered || a.cacheHtml;
                    if (x && (!g.delay || !a.delay)) {
                        g = n.extend(!0, {}, g, a.param);
                        var I = d[x],
                            O = h.innerHTML,
                            j = I && "string" == typeof I.template ? I.template : x + ".html",
                            L = I && I.script ? I.script : x + ".js";
                        j = j || x + ".html", I && "function" == typeof I.template ? l.push({ id: h.id, el: h, name: x, cacheHtml: T, cache: a.cache, deepComponent: a.deepComponent, template: I.template || "", url: j, srcript: L, slot: O, param: g }) : (s.push(j), u.push(L), c.push({ id: h.id, el: h, name: x, cacheHtml: T, cache: a.cache, deepComponent: a.deepComponent, url: j, srcript: L, slot: O, param: g }))
                    }
                }
                return l.length && (l.forEach(function(e, t) { k({ id: e.id, url: e.url, param: e.param || null, template: e.template, cacheHtml: e.cacheHtml, cache: e.cache, beforeLoad: a.beforeLoad }) }), a.data = l, C(a)), c.length ? (B(e.array.merge(s, u), function(e) {! function t(n) { var i = c[n]; return n == c.length ? (a.data = c, C(a), this) : i ? (i.template = e[n], void k({ id: i.id, url: i.url, param: i.param || null, cacheHtml: i.cacheHtml, cache: i.cache, beforeLoad: a.beforeLoad, loaded: function(e) { t(n + 1) }, onFail: function() { t(n + 1) } })) : this }(0) }), this) : (a.compiled && a.compiled(a.data), q("componentcompiled", a.data), !1)
            }

            function O(e) { return I(n.extend(!0, { id: "", isSelf: !1, deepComponent: Y.deepComponent, cache: !1, cacheHtml: !1, beforeLoad: null, loaded: null, compiled: null }, e)), this }

            function C(t) {
                for (var n = 0; n < t.data.length; n++) {
                    var i = t.data[n];
                    new RegExp("<" + Y.viewTag + ".+name=", "gi").test(i.template) && P({ id: i.id });
                    var a = new RegExp("<" + Y.componentTag + ".+name=", "gi");
                    new RegExp("<" + Y.componentTag + '.+name="' + i.name + '"', "gi").test(i.template) ? e.showLog("请检查代码, <" + Y.componentTag + ' name="' + i.name + '"></' + Y.componentTag + ">的模板里面存在循环嵌套") : (t.deepComponent && a.test(i.template) && O({ id: i.id }), t.loaded && t.loaded(i), q("componentloaded", i))
                }
                t.compiled && t.compiled(t.data), q("componentcompiled", t.data)
            }

            function j(t) {
                for (var i = n.extend(!0, { id: "", deepView: Y.deepView, deepComponent: Y.deepComponent, delay: !1, everytime: !1, param: null, beforeLoad: null, loaded: null, compiled: null }, t), a = e.$(i.id), o = 0; o < a.length; o++) {
                    var r = a[o],
                        l = r && r.getAttribute("delay"),
                        c = r && r.tagName.toLowerCase();
                    ("true" === l || i.everytime) && ("true" === l && c === Y.componentTag || i.everytime ? (i.isSelf = !0, i.id = r, i.everytime ? r.removeAttribute("delay") : r.setAttribute("delay", "false"), I(i)) : "true" === l && c === Y.viewTag || i.everytime ? (i.isSelf = !0, i.id = r, r.removeAttribute("delay"), S(i)) : (i.isSelf = !1, c = n(r).find('[delay="true"]')[0] && n(r).find('[delay="true"]')[0].tagName.toLowerCase(), n(r).find('[delay="true"]').removeAttr("delay"), c === Y.componentTag && I(i), c === Y.viewTag && S(i)))
                }
                return this
            }

            function L(t) {
                for (var i = 0; i < t.data.length; i++) {
                    var a = t.data[i];
                    if (!a.cacheHtml) {
                        a.el.innerHTML = a.template;
                        var o = new RegExp("<" + Y.componentTag + ".+name", "gi");
                        new RegExp("<" + Y.componentTag + '.+name="' + a.name + '"', "gi");
                        o.test(a.template) && O({ id: a.id });
                        var r = new RegExp("<" + Y.viewTag + '.+name="' + a.name + '"', "gi"),
                            l = new RegExp("<" + Y.viewTag + '.+name="' + a.name + '"', "gi");
                        if (l.test(a.template)) { e.showLog("请检查代码, <" + Y.viewTag + ' name="' + a.name + '"></' + Y.viewTag + ">的模板里面存在循环嵌套"); continue }
                        t.deepView && r.test(a.template) && !l.test(a.template) && P({ id: n(a.el) })
                    }
                    t.loaded && t.loaded(a), q("viewloaded", a)
                }
                t.compiled && t.compiled(t.data), q("viewcompiled", t.data)
            }

            function P(e) { return S(n.extend(!0, { id: "", isSelf: !1, deepView: Y.deepView, loaded: null, compiled: null }, e)), this }

            function S(t) {
                var i = n.extend(!0, { id: "", isSelf: !0, deepView: Y.deepView, loaded: null, compiled: null }, t),
                    a = null;
                a = "" === i.id ? e.$(Y.viewTag) : i.isSelf ? e.$(i.id) : e.$(i.id).find(Y.viewTag);
                for (var o = [], r = [], l = loader.map().modules, c = 0; c < a.length; c++) {
                    var s = a[c],
                        u = s.getAttribute("name"),
                        d = s.getAttribute("delay"),
                        f = l[u],
                        h = "true" === s.getAttribute("rendered"),
                        p = e.guid();
                    if (!s.id && s.setAttribute("id", p), "true" !== d) {
                        var g = s.innerHTML,
                            v = f && f.template ? f.template : u + ".html";
                        f && "function" == typeof f.template ? r.push({ id: s.id, el: s, name: u, cacheHtml: h, template: f.template.call(f) || "", url: v, slot: g }) : o.push({ id: s.id, el: s, name: u, cacheHtml: h, url: v, slot: g })
                    }
                }
                return r.length && (r.forEach(function(e, t) { e.el.innerHTML = e.template, window.store && window.store.$mount && window.store.$mount(i.id) }), i.data = r, L(i)),
                    function e(t) {
                        if (t == o.length) return i.data = o, void L(i);
                        o[t] && R(o[t].url, function(n) { o[t].template = n, e(t + 1) }, function(n) { o[t].template = "", e(t + 1) })
                    }(0), this
            }

            function E(e) {
                var t = Q,
                    n = {},
                    i = e && e.indexOf(".html");
                return i > -1 ? (n.url = e, n.module = e.substr(0, i)) : (n.url = t[e] && t[e].template || e + ".html", n.module = e), n
            }

            function N(t, i, a) {
                return new Promise(function(o, r) {
                    if ("string" == typeof t) t = e.unit.resolvePath(t), t.indexOf(".css") > -1 ? (i && i(t), M(t).then(function(e) { o(t) })) : t.indexOf(".html") > -1 || t.indexOf(".htm") > -1 ? R(t).then(function(e) {
                        if ("function" != typeof i) return n(i).html(e), a && a(e), void o(e);
                        i && i(e), o(e)
                    }, function(e) { a && a(e), r(e) }) : D(t).then(function(e) { i && i(e), o(e) }, function(e) { a && a(e), r(e) });
                    else if (t && "array" === e.typeof(t)) {
                        var l = t.map(function(t, n) { return t = e.unit.resolvePath(t), t.indexOf(".css") > -1 ? M(t) : t.indexOf(".html") > -1 || t.indexOf(".htm") > -1 ? R(t) : D(t) });
                        Promise.all(l).then(function(e) { i && i(e), o(e) }, function(e) { a && a(e), r(e) })
                    }
                })
            }

            function B(t, n, i) {
                return new Promise(function(a, o) {
                    if ("string" == typeof t) N(t, n, i);
                    else if (t && "array" === e.typeof(t)) { var r = [];! function i(o) { if (o == t.length) return n && n(r), void a(r); var l = e.unit.resolvePath(t[o]); return l.indexOf(".css") > -1 ? M(l) : l.indexOf(".html") > -1 || l.indexOf(".htm") > -1 ? R(l, function(e) { r.push(e), i(o + 1) }, function(e) { i(o + 1) }) : D(l, function(e) { r.push(e), i(o + 1) }, function(e) { i(o + 1) }) }(0) }
                })
            }

            function R(t, n, i) { return new Promise(function(a, o) { var r = "function" == typeof n; if (t = e.hasRouter ? t : e.unit.relativePath(t, Y.relativePath), X.hasOwnProperty(t)) return r ? n && n.call(G, X[t], 200) : "string" == typeof n && e.$(n).html(X[t]), a(X[t], 200), this; "string" == typeof t && mue.ajax({ baseUrl: Y.baseUrl, url: t, dataType: "html", contentType: "text/html;charset=UTF-8", mimeType: "html", processData: !1, needNative: Y.needNative, cache: Y.cache, data: null, success: function(o, l, c) { X[t] = o, r ? n && n.call(G, o, l, c) : "string" == typeof n && (e.$(n).html(o), i && i.call(G, o, l, c)), a(o, l) }, error: function(e, t, n) { r && i && i.call(G, e, t, n), o(e, t, n) } }) }) }

            function D(t, i, a) {
                return new Promise(function(o, r) {
                    var l, c = this;
                    if (Q = Z.modules, void 0 === t || "" == t) return a && a.call(c, t), r(t), this;
                    if (t in Q) l = t, t = Q[t].script || l + Y.scriptSuffix;
                    else {
                        var s = t.indexOf(Y.scriptSuffix);
                        s > -1 ? (t = t, l = t.substr(0, s)) : (l = t, t += Y.scriptSuffix)
                    }
                    t = e.hasRouter ? t : e.unit.relativePath(t, Y.relativePath);
                    var u = document.createElement("script") || {},
                        d = Y.cache ? "" : "?t=" + (new Date).getTime(),
                        f = t.indexOf("http://") > -1 || t.indexOf("https://") > -1;
                    u.type = "text/javascript", u.async = !1, u.src = f ? t + d : Z.baseUrl + t + d, u.setAttribute("name", l), u.onload = function() { Y.log && console.log("create " + t), i && i(t), o(t) }, u.onerror = function(e) { Y.log && console.log("createError " + t), a && a(t), r(t) };
                    var h = e.array.index(K, t);
                    return Q[l] && Q[l].isDefined ? (i && i(t), o(t)) : (h > -1 && Q.hasOwnProperty(l) && n('script[name="' + l + '"]').remove(), document.body && document.body.appendChild(u), Y.cache && K.push(t)), u = null, this
                })
            }

            function A(t) { return new Promise(function(n, i) { t.length; if ("array" === e.typeof(t)) { var a = t.map(function(e) { return M(e) }); return Promise.all(a) } return M(t) }) }

            function F(t, n) {
                return new Promise(function(i, a) {
                    if ("string" != typeof t) return void e.showLog(t + "的格式不正确");
                    var o = e.hasRouter ? t : e.unit.relativePath(t, Y.relativePath),
                        r = document.createElement("link") || {};
                    r.href = o + (Y.cache ? "" : "?t=" + (new Date).getTime()), r.setAttribute("rel", "stylesheet"), r.setAttribute("type", "text/css"), n && r.setAttribute("id", n), document.head && document.head.appendChild(r), r = null, i(t, n)
                })
            }

            function M(t) {
                return new Promise(function(n, i) {
                    if ("string" != typeof t) return void e.showLog(t + "的格式不正确");
                    if (e.array.index(J, t) < 0) {
                        var a = e.hasRouter ? t : e.unit.relativePath(t, Y.relativePath),
                            o = document.createElement("link") || {};
                        o.href = a + (Y.cache ? "" : "?t=" + (new Date).getTime()), o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), document.head && document.head.appendChild(o), o = null, J.push(t)
                    }
                    n(t, linkid)
                })
            }

            function H(t, n) {
                var i = e.history.getLast("id"),
                    a = arguments;
                return e.unit.stringToArray(t).forEach(function(e, t) { a[0] = i + "-" + e, _.on.apply(G, a) }), this
            }

            function z(e, t) { return _.one.apply(G, arguments), this }

            function V(e, t) { return _.wait.apply(G, arguments), this }

            function $(t, n) {
                var i = e.history.getLast("id"),
                    a = arguments;
                return e.unit.stringToArray(t).forEach(function(e, t) { a[0] = i + "-" + e, _.off.apply(G, a) }), this
            }

            function q(t) {
                G.self = this == window || this == G ? null : this;
                var n = e.history.getLast("id");
                arguments[0] = n + "-" + t, _.trigger.apply(G, arguments)
            }
            var U, W = { cache: !0, log: !1, baseUrl: "", relativePath: "pages", needNative: !1, deepView: !1, viewTag: "view", componentTag: "component", deepComponent: !0, scriptSuffix: ".js" },
                Y = n.extend({}, W, e.config.loader, i),
                _ = e.emitter(),
                K = [],
                J = [],
                X = {},
                Z = { baseUrl: "", modules: {}, globals: {} },
                Q = {},
                G = { init: o, config: Y, define: p, global: l, require: m, destroy: f, map: r, import: N, importCss: F, importSync: B, importHtml: R, load: k, checkLoad: x, components: O, component: I, delay: j, views: P, view: S, get: c, set: s, one: z, wait: V, on: H, off: $, trigger: q };
            return G
        }, window.loader = e.loader(), e.define = loader.define, e.require = loader.require, e.map = loader.map, e.import = loader.import, e.checkLoad = loader.checkLoad, e.checkDefine = loader.checkDefine
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.toggle = function(n) {
            function i(t) {
                if (t = t || m, y = !1, !t.id) return void e.showLog("toggle id不能为空", "mue.toggle");
                x = e.objId(t.id), m = v.config = t, g = x.attr("class") || "";
                var n = t.effect,
                    i = t.inOrder ? e.array.index(w.hideInOrder, n) : e.array.index(w.hide, n),
                    a = n && (e.array.index(w.show, n) > -1 ? e.array.index(w.show, n) : i);
                return I = !(x[0] && "none" == x[0].style.display || "none" == x.css("display")), a < 0 ? (p = w.show[0], h = t.inOrder ? w.hideInOrder[0] : w.hide[0]) : (p = w.show[a], h = t.inOrder ? w.hideInOrder[a] : w.hide[a]), this
            }

            function a() { return I }

            function o(t, n) { if (!y) return x = e.objId(m.id), !(!k && !T) && (k = !1, "function" == typeof t ? (t = t, n = n || p || "") : (n = t || p || "", t = null), x[0] && "none" == x[0].style.display && x.css("display", b), x.addClass("animated " + n), "showIn" == n || "showOut" == n || "none" == n ? (m.revert && x.removeClass("animated " + n), t && t.call(v, this), I = !0, k = !0) : x.one("webkitAnimationEnd", function() { try {!I && x.css("display", b), m.revert && x.removeClass("animated " + n), t && t.call(v, this), I = !0, k = !0 } catch (t) { e.showLog(t, "toggle show method") } }), this) }

            function r(t, n) { if (!y && (x = e.objId(m.id), k || T)) return T = !1, "function" == typeof t ? (t = t, n = n || h || "") : (n = t || h || "", t = null), x.css("display", b).addClass("animated " + n), "showIn" == n || "showOut" == n || "none" == n ? (x.css("display", "none"), m.revert && x.removeClass("animated " + n), t && t.call(v, this), I = !1, T = !0) : x.one("webkitAnimationEnd", function() { try { x.css("display", "none"), m.revert && x.removeClass("animated " + n), t && t.call(v, this), I = !1, T = !0 } catch (t) { e.showLog(t, "toggle hide method") } }), this }

            function l() { return x.remove(), this }

            function c(e) {
                var e = 1 == e;
                x && (x.off(), e && x.remove()), y = !0
            }

            function s(t) { var n = {}; return e.widget.call(n, t) }

            function u(t, n) { return e.option.call(v, t, n) }
            var d = { id: "", effect: "fadeIn", useBox: !1, revert: !0, inOrder: !1 };
            if ("string" == typeof n) {
                var f = n || "";
                n = {}, n.id = f
            }
            var h, p, g, v = { show: o, hide: r, remove: l, isShow: a, destroy: c, widget: s, option: u, config: m, init: i },
                m = v.config = t.extend(!0, {}, d, n),
                b = m.useBox ? "-webkit-box" : "block",
                y = !1,
                w = { show: ["fadeIn", "fadeInLeft", "fadeInRight", "fadeInDown", "fadeInUp", "fadeInLeftBig", "fadeInRightBig", "fadeInUpBig", "fadeInDownBig", "zoomIn", "bounceIn", "rotateIn", "rollIn", "flipInX", "flipInY", "lightSpeedIn", "showIn", "slideInRight", "slideInLeft", "coverInLeft", "coverInRight", "zoomSlideInLeft", "zoomSlideInRight", "pushInLeft", "pushInRight"], hide: ["fadeOut", "fadeOutLeft", "fadeOutRight", "fadeOutUp", "fadeOutDown", "fadeOutLeftBig", "fadeOutRightBig", "fadeOutDownBig", "fadeOutUpBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY", "lightSpeedOut", "showOut", "slideOutRight", "slideOutLeft", "coverOutLeft", "coverOutRight", "zoomSlideOutLeft", "zoomSlideOutRight", "pushOutLeft", "pushOutRight"], hideInOrder: ["fadeOut", "fadeOutRight", "fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRightBig", "fadeOutLeftBig", "fadeOutUpBig", "fadeOutDownBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY", "lightSpeedOut", "showOut", "slideOutLeft", "slideOutRight", "coverOutRight", "coverOutLeft", "zoomSlideOutRight", "zoomSlideOutLeft", "pushOutRight", "pushOutLeft"] },
                x = null,
                k = !0,
                T = !0,
                I = !1;
            return m.id && i(m), v
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.unit = {}, e.unit.remToPx = function(e) {
            var t = window && window.viewport && window.viewport.fontSize || 100,
                e = (parseFloat(e) * t).toFixed(2);
            return e
        }, e.unit.pxToRem = function(e) {
            var t = window && window.viewport && window.viewport.fontSize || 100,
                e = (parseFloat(e) / t).toFixed(2);
            return e
        }, e.unit.pxToRemZoom = function(e) { var e = (parseFloat(e) / 100).toFixed(2); return e }, e.unit.debounce = function(e, t, n) {
            var i;
            return function() {
                var a = n || this,
                    o = arguments,
                    r = function() { i = null, e.apply(a, o) };
                clearTimeout(i), i = setTimeout(r, t)
            }
        }, e.unit.throttle = function(e, t, n) {
            t || (t = 250);
            var i, a;
            return function() {
                var o = n || this,
                    r = +new Date,
                    l = arguments;
                i && r < i + t ? (clearTimeout(a), a = setTimeout(function() { i = r, e.apply(o, l) }, t)) : (i = r, e.apply(o, l))
            }
        }, e.unit.startWithCss = function(e) { var t = new RegExp("^\\.|^#"); return "string" == typeof e && t.test(e) }, e.unit.startWithStr = function(e, t) { var n = new RegExp("^" + t); return "string" == typeof e && n.test(e) }, e.unit.startWithId = function(e) { var t = new RegExp("^#"); return "string" == typeof e && t.test(e) }, e.unit.startWithClass = function(e) { var t = new RegExp("^\\."); return "string" == typeof e && t.test(e) }, e.unit.endWithImage = function(e) { var t = new RegExp("(.png|.jpg|.gif)$"); return "string" == typeof e && t.test(e) }, e.unit.tel = function(t) {
            var n, t = String(t),
                i = "tel:";
            return 0 == t.indexOf("+") && (i = "wtai://wp/mc;"), n = t, window.location.href = i + n, e
        }, e.unit.sms = function(t, n) {
            var i = navigator.userAgent,
                a = /(iPhone|iPad|iOS)/i.test(i),
                o = a ? "&" : "?";
            return window.location.href = "sms:" + t + o + "body=" + n, e
        }, e.unit.mailto = function(t) { var t = "email" in t ? t : {}; return "string" == typeof t.email && t.email.indexOf("@") > 0 ? window.location.href = "mailto:" + t.email + "?subject=" + (t.subject || "") + "&body=" + (t.body || "") + "&cc=" + (t.cc || "") : e.showLog(email + "格式不正确"), e }, e.unit.openExtral = function(t) {
            var n = [],
                i = "",
                t = String(t);
            if (t.indexOf("mailto:") >= 0)
                if (n = t.split("mailto:"), i = n[1], i.indexOf("?") > -1) {
                    var a = i.split("?"),
                        o = e.unit.keyStringToObject(a[1]);
                    o.email = a[0], e.unit.mailto(o)
                } else e.unit.mailto({ email: i });
            if (t.indexOf("tel:") >= 0 && (n = t.split("tel:"), i = parseInt(n[1]), e.unit.tel(i)), t.indexOf("sms:") >= 0)
                if (n = t.split("sms:"), i = n[1], t.indexOf("=") >= 0) {
                    var r = t.split("="),
                        l = r[1];
                    e.unit.sms(i, l)
                } else e.unit.sms(i);
            return e
        }, e.unit.objectToKeyString = function(e, t) { var n = ""; for (var i in e) { n += "&" + i + "=" + (t ? encodeURIComponent(e[i]) : e[i]) } return n.substr(1) }, e.unit.keyStringToObject = function(t, n) {
            var i, a = {},
                o = [];
            try {
                for (o = t.split("&"), i = 0; i < o.length; i++) {
                    var r = n ? decodeURIComponent(o[i].split("=")[1]) : o[i].split("=")[1];
                    a[o[i].split("=")[0]] = r
                }
            } catch (t) { e.showLog(t) }
            return a
        }, e.unit.checkTargetInclude = function(e, t) {
            var i = t,
                a = [];
            if (i.indexOf(",") > -1) {
                a = i.split(",");
                var o, r = a.length;
                for (o = 0; o < r; o++) {
                    var l = a[o];
                    l.indexOf(".") > -1 && (a[o] = l.substr(1))
                }
            } else i.indexOf(".") > -1 ? a[0] = i.substr(1) : a[0] = i;
            var c, s = a.length;
            for (c = 0; c < s; c++)
                if (n(e).hasClass(a[c]) || n(e).closest("." + a[c]).length) return !0;
            return !1
        }, e.unit.jsonToString = function(n) {
            function i(n) { if (n && "object" === e.typeof(n)) { for (var i in n) { var a = n[i]; "object" === (void 0 === a ? "undefined" : t(a)) && (n[i] = JSON.stringify(a)) } return n } }

            function a(n) { if (n && "array" === e.typeof(n)) return n.forEach(function(e, i) { "object" === (void 0 === e ? "undefined" : t(e)) && (n[i] = JSON.stringify(e)) }), n }
            return "object" === (void 0 === n ? "undefined" : t(n)) ? function(t) {
                function n(t, n) { var o = t[n]; return o && "object" === e.typeof(o) ? t[n] = i(o) : o && "array" === e.typeof(o) ? t[n] = a(o) : t[n] = o, t[n] }
                var o;
                if ("object" === e.typeof(t)) {
                    for (var r in t) t[r] = n(t, r);
                    o = JSON.stringify(t)
                } else "array" === e.typeof(t) ? (t.forEach(function(e, i) { t[i] = n(t, i) }), o = JSON.stringify(t)) : o = t;
                return o
            }(n) : n
        }, e.unit.stringToJson = function(n) {
            function i(n) {
                var a, o;
                try {
                    if (a = "object" === (void 0 === n ? "undefined" : t(n)) ? n : JSON.parse(n), "array" === e.typeof(a)) a.forEach(function(e, t) { a[t] = i(e) });
                    else if ("object" === e.typeof(a))
                        for (var r in a) {
                            var l = a[r];
                            a[r] = i(l)
                        }
                    o = a
                } catch (e) { o = n }
                return o
            }
            return n && i(n)
        }, e.unit.stringToArray = function(t) { var n = e.typeof(t); return "array" === n ? t : "string" === n && t.indexOf(",") > -1 ? t.split(",") : [t] }, e.unit.setKeyValue = function(e, t, n) {
            function i(e, n) {
                if (a.length) return i(a.shift(), n[e] || {});
                n[e] = t
            }
            var a = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return i(a.shift(), n)
        }, e.unit.getKeyValue = function(e, t) {
            function n(e, t) {
                var a = t[e];
                if (a && "string" == typeof a && a.indexOf("{") > -1 && a.indexOf("}") > -1) try { t[e] = JSON.parse(a) } catch (n) { t[e] = a }
                return void 0 !== a && i.length ? n(i.shift(), a) : a
            }
            var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return n(i.shift(), t)
        }, e.unit.getKeyObj = function(e, t) {
            function n(e, t) { var a = t[e]; return !a instanceof Array && a instanceof Object ? n(i.shift(), a) : a }
            var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return n(i.shift(), t)
        }, e.unit.getKeyName = function(e) {
            function t(e, i) { var a = i[e]; return !a instanceof Array && a instanceof Object ? t(n.shift(), a) : a }
            var n = field && field.indexOf(".") > -1 ? field.split(".") : [field];
            return t(n.shift(), e)
        }, e.unit.delKey = function(e, t) {
            function n(e, a) { return i.length ? n(i.shift(), a[e]) : (delete a[e], t) }
            var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
            return n(i.shift(), t)
        }, e.unit.calcHeight = function(e, t) {
            var i = n(e);
            i[0] && (i[0].style.height = "calc(100% - " + t + ")")
        }, e.unit.resolvePath = function(t) {
            if (!e.hasRouter) return t;
            t = t || "";
            var n = t,
                i = router && router.history && router.history.getLast() || { url: n },
                a = i.url || "";
            if ("function" == typeof a) return n;
            var o = a.lastIndexOf("/"),
                r = a.substr(0, o);
            return t.indexOf("../") > -1 ? (t = t.replace(/\..\//g, function(e) { var t = r.lastIndexOf("/"); return r = r.substr(0, t), "" }), n = r ? r + "/" + t : t) : t.indexOf("./") > -1 && (n = r + "/" + t.replace(/\.\//g, "")), n
        }, e.unit.filterField = function(n, i) {
            var a = {};
            if ("object" === (void 0 === i ? "undefined" : t(i))) {
                var o = "object" === e.typeof(n),
                    r = "object" === e.typeof(i),
                    l = "array" === e.typeof(n),
                    c = "array" === e.typeof(i);
                if (o) {
                    if (r)
                        for (var s in i) a[s] = i[s] ? n[i[s]] : n[s];
                    else c && i.forEach(function(e, t) { a[e] = n[e] });
                    return a
                }
                return l ? (a = [], c ? n.forEach(function(e, t) {
                    var n = {};
                    i.forEach(function(t, i) { n[t] = e[t] }), a.push(n)
                }) : r && n.forEach(function(e, t) {
                    var n = {};
                    for (var o in i) n[o] = i[o] ? e[i[o]] : e[o];
                    a.push(n)
                }), a) : void 0
            }
        }, e.unit.fixZero = function(e) { return e < 10 ? "0" + e : e }, e.unit.getAttributes = function(n) {
            if ("object" !== (void 0 === n ? "undefined" : t(n))) return null;
            var i = {},
                a = /\{.+\}$/g,
                o = /\[.+\]$/g;
            return n.attributes && Object.keys(n.attributes).forEach(function(t, r) {
                var l = n.attributes[t],
                    c = l.value;
                if (a.test(c) || o.test(c)) try { c = JSON.parse(c) } catch (t) { c = c, e.showLog(t) }
                i[l.name] = c
            }), i
        }, e.unit.resolvePathname = function(e, t) {
            t = t || 0;
            var n = e.lastIndexOf("/"),
                i = e.substring(t, n);
            return i.indexOf("/") > -1 ? i.split("/") : [i]
        }, e.unit.relativeUrl = function(e, t) {
            var n = [];
            return t.length >= e.length ? t.forEach(function(t, i) {
                var a = e[i];
                a && t === a || (a && t !== a ? (n.unshift(".."), n.push(t)) : n.push(t))
            }) : e.forEach(function(e, i) {
                var a = t[i];
                a && e === a || (a && e !== a ? (n.unshift(".."), n.push(a)) : n.unshift(".."))
            }), n
        }, e.unit.relativePath = function(t, n) {
            n = n || "pages";
            var i = window.self.location.href;
            if (i.indexOf("source.html?url=") > -1 && i.indexOf("code=") > -1) return t;
            if (0 === t.indexOf("http://") || 0 === t.indexOf("https://")) return t;
            var a = window.location.href,
                o = a.indexOf(n),
                r = t && t.indexOf("/") > -1 ? t.split("/") : [t],
                l = [];
            if (o < 0) {
                var c = window.location.pathname.toLocaleLowerCase(),
                    s = c.indexOf("www"),
                    u = c.indexOf("src"),
                    d = c.indexOf("dist");
                if (s > -1) {
                    var f = e.unit.resolvePathname(c, s + 4);
                    l = e.unit.relativeUrl(f, r)
                } else if (d > -1) {
                    var h = e.unit.resolvePathname(c, d + 5);
                    l = e.unit.relativeUrl(h, r)
                } else {
                    if (!(u > -1)) return 0 == t.indexOf("/") ? t.replace("/", "") : t;
                    var p = e.unit.resolvePathname(c, u + 4);
                    l = e.unit.relativeUrl(p, r)
                }
            } else {
                var g = e.unit.resolvePathname(a, o);
                l = e.unit.relativeUrl(g, r)
            }
            return l.join("/")
        }, e.unit.between = function(t, n, i) {
            var a = !0,
                o = new Date;
            if (n = n || 0, i = i || e.date.convert(o.getFullYear + "/12/31").getTime(), "number" == typeof t)(t < n || t > i) && (a = !1);
            else { n || e.showLog("mue.unit.between 第2个参数为最小日期"); try { n = e.date.convert(n).getTime(), i = e.date.convert(i).getTime(), t = e.date.convert(t).getTime(), (t < n || t > i) && (a = !1) } catch (t) { e.showLog("mue.unit.between 用来检测数字或者日期,请检查参数格式是否正确") } }
            return a
        }, e.unit.numberunit = function(e) {
            var t = +e,
                n = t;
            return t > 1e4 && (n = parseFloat(t / 1e4).toFixed(1) + "万"), n
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.history = function() {
            var i = [],
                a = {};
            a.get = function(t, n) { if (void 0 === t) return i; var a = n || "name" || "pid"; return e.array.get(i, t, a) }, a.getLast = function(e) {
                var t = i.length - 1,
                    n = i[t] || {};
                return e ? n[e] : n
            }, a.getPrev = function(e) {
                var t = i.length - 2,
                    n = i[t] || {};
                return e ? n[e] : n
            }, a.getParams = function(e) {
                var t = this.getLast(),
                    n = {};
                switch (e) {
                    case "page":
                        n = this.getPageParam() || n;
                        break;
                    case "part":
                    case "component":
                        n = this.getComponentParam() || n;
                        break;
                    case "url":
                        n = t.param || mue.getUrlParams();
                        break;
                    default:
                        n = this.getComponentParam(e) || this.getPageParam(e) || t.param || mue.getUrlParams()
                }
                return n
            }, a.setComponent = function(e) { return this.getLast().component[e.id] = e, e }, a.getComponentParam = function(e) {
                var t = this.getLast(),
                    n = e || t.currentComponent;
                return n && t.component[n] && t.component[n].param || null
            }, a.getComponent = function(t, n) {
                if (void 0 === t) return void e.showLog("必须传component id才能获取实例");
                n = n || "exports";
                var i = this.getLast();
                return i.component[t] && i.component[t][n] || null
            }, a.getParentComponent = function() { var e = this.getComponentParam(); return e && e.parentId && this.getComponent(e.parentId) || this.getLast("exports") }, a.getParentParams = function() { var e = this.getComponentParam(); return this.getParams(e.parentId) || this.getLast("param") || null }, a.getPage = function(t, n) {
                if (void 0 === t) return void e.showLog("必须传page id 或者 模块名才能获取实例");
                n = n || "exports";
                var i = this.getLast(),
                    a = null,
                    o = i.page;
                if (o.hasOwnProperty(t)) a = o[t] && o[t][n] || {};
                else if (t)
                    for (var r = Object.keys(o), l = 0; l < r.length; l++) { var c = o[r[l]] || {}; if (c.name === t) return c[n] } else {
                        var s = i.currentPage;
                        a = o[s] && o[s][n] || {}
                    }
                return a
            }, a.getPageDialog = function(t) { if (void 0 === t) return void e.showLog("必须传page id才能获取对话框信息"); var n = this.getLast(); return n.page[t] && n.page[t].dialog || null }, a.setPage = function(e) { var i = this.getLast(); if ("object" !== (void 0 === e ? "undefined" : t(e))) return e; if (e && e.hasOwnProperty("id")) { var a = n.extend(!0, {}, i.page[e.id], e); return i.page[e.id] = a, e } }, a.getPageParam = function(e) {
                var t = this.getLast(),
                    n = e || t.currentPage;
                return n && t.page[n] && t.page[n].param || null
            }, a.add = function(t) {
                var a = n.extend(!0, { id: "", name: "", url: "", replace: !1, syncHistory: !0, component: {}, param: {}, part: {}, page: {}, toggle: null, effect: "push" }, t),
                    o = i;
                if (t.toggle) {
                    var r = n.extend(!0, {}, a, t);
                    a.toggle = null, o.push(r)
                } else o.push(a);
                var l = window.location.origin + window.location.pathname + "#" + a.name,
                    c = e.setUrlParams(l, a.param);
                return a.syncHistory && "pushState" in window.history && window.history.pushState(a, null, c), o
            }, a.replace = function(t) {
                var t = n.extend(!0, { id: "", name: "", url: "", replace: !1, syncHistory: !0, param: {}, part: {}, page: {}, toggle: null, effect: "push" }, opts),
                    a = i,
                    o = a.length - 1,
                    r = window.location.origin + window.location.pathname + "#" + t.name,
                    l = e.setUrlParams(r, t.param);
                if (o > -1) {
                    if (opts.toggle) {
                        var c = n.extend(!0, {}, t, opts);
                        t.toggle = null, a.splice(o, 1, c)
                    } else a.splice(o, 1, t);
                    t.syncHistory && "replaceState" in window.history && window.history.replaceState(t, null, l)
                }
                return a
            }, a.refresh = function() {
                if (e.hasRouter) {
                    var t = a.getLast(),
                        i = loader.get(t.name);
                    loader.import(t.url, function(a) { n("#" + t.id).html(a), e.config.init.auto && e.init(), router.config.needView && loader.views(), i.loaded(), router.config.needComponent && loader.components() })
                } else window.location.reload(!0)
            }, a.removeNext = function(t) {
                var n = i,
                    a = t.index;
                if (parseInt(a) < 0) return e.showLog("index 必须大于或者等于0"), n;
                var o = n.length - a;
                n.splice(a, o);
                var r = this.getLast(),
                    l = window.location.origin + window.location.pathname + "#" + r.name,
                    c = e.setUrlParams(l, r.param);
                return t.syncHistory && "replaceState" in window.history && window.history.replaceState(r.param, null, c), n
            }, a.removeLast = function(e) {
                var t = i,
                    n = t.length - 1;
                return this.removeNext({ index: n, syncHistory: !1 !== e })
            }, a.check = function(t) { var n = i; return e.array.compare(n, t, "name") || e.array.compare(n, t, "url") || e.array.compare(n, t, "id") }, a.checkComponent = function(t) {
                var n = this.getLast(),
                    i = Object.keys(n.component);
                return e.array.compare(i, t)
            }, a.checkPage = function(e, t) {
                t = t || "id";
                for (var n = this.getLast(), i = Object.keys(n.page), a = 0; a < i.length; a++) {
                    var o = i[a],
                        r = n.page[o];
                    if (r.name === e || r.id === e) return !0
                }
                return !1
            }, a.epmty = function(e) { return i = [] };
            var o = function(t) {
                t = t && t.replace(window.location.origin, "") || window.location.pathname;
                var n = t.indexOf(".html"),
                    i = t.indexOf("?"),
                    a = "",
                    o = "",
                    r = "",
                    l = null,
                    c = loader.map().modules;
                if (i > -1) {
                    var s = t.substr(i + 1);
                    l = e.unit.keyStringToObject(s, !0)
                }
                return n > -1 ? (a = 0 == t.indexOf("/") ? t.substr(1, n - 1) : t.substr(0, n - 1), o = a + ".html", r = a + ".js") : (a = t, o = c[a] && c[a].template || "", r = c[a] && c[a].script || ""), { pid: a, name: a, url: o, src: r, param: l }
            };
            return function() {
                var t = o(window.location.href),
                    a = e.guid();
                n(document).ready(function() { document.body.setAttribute("id", a) }), i.push({ id: e.guid(), pid: t.pid, name: t.pid, url: t.url, src: t.src, param: t.param, page: {}, component: {} })
            }(), a
        }()
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.router = function(i) {
            function a(t) {
                if (we.store = t.store || null, delete t.store, t = n.extend(!0, {}, U, e.config.router, t), U = we.config = t, be = !0, "pages/main/main.html" === t.indexModule.template && "pages/main/main.js" === t.indexModule.script || (pe = loader.map(t.indexModule)), ne && "effect" in t && ge.forEach(function(e, n) { e.effect = t.effect }), !t.id) return e.showLog("id 不能为空", "mue.router.init"), !1;
                if (z = e.objId(t.id), $ = mue.mask({ appendTo: z, opacity: 0, autoClose: !1 }), V = e.loading({ display: "block", width: 30, height: 30, opacity: 0 }), _ = z.children(".mue-router-main"), Z = t.width || window && window.viewport && window.viewport.width() || document.documentElement.clientWidth || "100%", Q = t.height || window && window.viewport && window.viewport.height() || document.documentElement.clientHeight || "100%", !_.length) {
                    var i = L(t);
                    z.html(i), _ = z.children(".mue-router-main")
                }
                return (t.width > 0 || String(t.width).indexOf("%") > -1) && _.width(t.width), (t.height > 0 || String(t.height).indexOf("%") > -1) && _.height(t.height), X || l(t), D.call(this, "init", { target: z[0] }), we
            }

            function o(e) { var e = e || {}; return e.width = e.width || U.width, e.height = e.height || U.height, window.viewport = mue.viewport(), Z = e.width || window && window.viewport && window.viewport.width() || document.documentElement.clientWidth || "100%", Q = e.height || window && window.viewport && window.viewport.height() || document.documentElement.clientHeight || "100%", _.css({ width: Z, height: Q }), D.call(this, "resize", { target: ge[ge.length - 1] }), this }

            function r() {
                var e = me.get("hasCache", 0);
                Boolean(e) && U.reloadCache ? fe.load() : s(), ue = !0
            }

            function l(t) {
                return r(), window.addEventListener("beforeunload", function(e) { U.reloadCache && fe.save(), D.call(Y, "beforeunload", { target: ge[ge.length - 1] }) }), t.hash ? (window.addEventListener("hashchange", function(t) {
                    var n = u(),
                        i = "" == n.pid || "undefined" == n.pid ? "main" : n.pid,
                        a = e.array.indexs(ge, i, "pid"),
                        o = a[a.length - 1],
                        r = o;
                    r > -1 ? (v({ index: -(ge.length - r - 1 || 1) }), D.call(Y, "popstate", { type: "back", prevTarget: ge[r - 1], target: ge[r] })) : (f({ url: i, param: n.param, replace: !0 }), D.call(Y, "popstate", { type: "load", prevTarget: ge[ge.length - 2], target: ge[ge.length - 1] }))
                }), this) : (U.syncHistory && "pushState" in window.history && window.addEventListener("popstate", function(t) {
                    var n = u(),
                        i = "" == n.pid ? U.indexModule.moduleName : n.pid,
                        a = b(i);
                    e.array.index(ge, i, "pid") > -1 ? (v({ index: a, param: n.param }), D.call(Y, "popstate", { type: "back", prevTarget: ge[a - 1], target: ge[a] })) : (f({ url: i, param: n.param }), D.call(Y, "popstate", { type: "load", prevTarget: ge[ge.length - 2], target: ge[ge.length - 1] }))
                }), this)
            }

            function c(e) {
                var t = window.location.href,
                    n = t.indexOf(U.hashPrefix),
                    n = n > -1 ? n : 0,
                    i = n > -1 ? t.substr(0, n) : t;
                f({ url: U.errorPage || i, param: { error: e } }), D.call(we, "error", { target: e, status: 404 })
            }

            function s(t) {
                try {
                    var n = u();
                    if (n.pid) {
                        if (n.pid.indexOf("http://") > -1 || n.pid.indexOf("https://") > -1) return void f({ url: n.pid, param: n.param, iframe: !0 });
                        f({ url: n.pid, param: n.param })
                    } else f({ url: U.indexModule.moduleName, param: n.param || {} })
                } catch (t) { e.showLog(t, "mue.router.loadUrl") }
            }

            function u(e) {
                function t(t, n) {
                    for (var i = t && t.substr(n + 1), a = i && i.split("&"), o = 0; o < a.length; o++) {
                        var r = e ? decodeURIComponent(a[o].split("=")[1]) : a[o].split("=")[1];
                        u[a[o].split("=")[0]] = r
                    }
                }
                var n = window.location.hash || window.location.search,
                    i = window.location.search,
                    a = i && i.indexOf("?"),
                    e = 0 != e,
                    o = n && n.indexOf("?"),
                    r = o > -1 ? n && n.substr(1, o - 1) : window.location.hash.substr(1),
                    l = r && r.indexOf(U.pageSuffix),
                    c = l > -1 ? r.substr(0, l) : r,
                    s = l > -1 ? r : r + U.pageSuffix,
                    u = {};
                return o > -1 && (t(i, a), t(n, o)), { pid: c, url: s, param: u }
            }

            function d(t) {
                var i = n.Deferred(),
                    a = function(n, a) {
                        return y(n.url, function(i) {
                            var o = e.guid(),
                                r = g(n.url),
                                l = r.pid,
                                c = (S({ id: o, content: i, pid: l }), []);
                            fe.add(l, { id: o, pid: l, template: i }), c.push(l), n.style && "array" === e.typeof(n.style) ? n.style.forEach(function(e, t) { c.push(e) }) : n.style && "string" === e.typeof(n.style) && c.push(n.style), n.script && "array" === e.typeof(n.script) ? n.script.forEach(function(e, t) { c.push(e) }) : n.script && "string" === e.typeof(n.script) && c.push(n.script), loader.import(c, function() { D.call(we, "preloadafter", { prevTarget: null, target: null }), a && a(t) }, function() { D.call(we, "preloadafter", { prevTarget: null, target: null }), a && a(t) })
                        }, function(t) { e.showLog(n.url + "请求失败"), i.reject(n.url) }), i.promise()
                    };
                return t && "object" === e.typeof(t) ? "url" in t && a(t, function() { i.resolve(t) }) : t && "array" === e.typeof(t) && t.forEach(function(e, n) { n == t.length - 1 ? "url" in e && a(e, function() { i.resolve(t) }) : "url" in e && a(e) }), i
            }

            function f(i) {
                function a(n, i, a, o) { if ($ && $.hide(), v.progress && V && V.hide(), re.removeLast(), m.reject(n), "object" === (void 0 === i ? "undefined" : t(i))) return e.showLog("找不到页面" + n, "mue.router.load"), U.errorPage && f(n), !1 }

                function o(t) {
                    te || oe[L] ? (A.exports = oe[L], u({ pid: L }), se && l(), t && t(), U.needComponent && loader.components()) : (loader.checkLoad(L) ? (u({ pid: L }), U.needComponent && loader.components(), t && t()) : loader.require(L, function(n) {
                        try {
                            if (v.firstAnimate && v.progress && V && V.hide(), oe[L] = n || null, B.exports = n, m.resolve(n), G || v.firstAnimate || v.replace) {
                                var i = loader.get(L);
                                i && i.show && i.show({ type: "firstload", target: B })
                            }
                            t && t(), v.loaded && v.loaded({ prevTarget: b, target: B }), v.callback && v.callback({ prevTarget: b, target: B }), U.needComponent && loader.components()
                        } catch (t) { e.showLog(t, "mue.router.load"), m.reject() }
                    }), D.call(we, "complete", { prevTarget: b, target: B }))
                }

                function r() {
                    W = e.objId(A.id);
                    var t = W && W.find(".mue-page");
                    t && t.length && v.autoInit && e.init({ id: t, height: Q })
                }

                function l(t) {
                    W = e.objId(k), C(), j();
                    try {
                        if (G || te || v.replace || v.part) {
                            !v.firstAnimate && v.progress && V && V.hide(), t && t(), $ && $.hide(), W && W.css("zIndex", 5);
                            var n = re.getLast(),
                                i = "pageshow-" + n.pid;
                            D.call(we, "pageshow", { type: "load", target: re.getLast() }), D.call(we, i, { type: "load", target: re.getLast() })
                        } else K && K.hide(), J && J.show(function() {
                            !v.firstAnimate && v.progress && V && V.hide(), t && t(), W && W.css("zIndex", 5), $ && $.hide();
                            var e = ge[ge.length - 2] || {},
                                n = re.getLast(),
                                i = loader.get(n.pid),
                                a = e && e.pid && loader.get(e.pid) || null,
                                o = "pageshow-" + n.pid,
                                r = "pagehide-" + e.pid;
                            D.call(we, r, { type: "load", target: ge[ge.length - 2] }), D.call(we, o, { type: "load", target: re.getLast() }), D.call(we, "pagehide", { type: "load", target: ge[ge.length - 2] }), D.call(we, "pageshow", { type: "load", target: re.getLast() }), a && a.hide && a.hide({ type: "load", target: ge[ge.length - 2] }), i && i.show && i.show({ type: "load", target: re.getLast() })
                        })
                    } catch (t) { e.showLog(t, "mue.router.doAnimate") }
                }

                function s(t) {
                    var n = "";
                    if (we.store && (t = we.store.compileHtml(t)), v.part) n = E({ content: t }), v.id ? T.html(n) : e.showLog("id 不能为空", "router.loadPart");
                    else if (v.replace) {
                        var i = re.getLast();
                        T = ge.length ? e.objId(i.id) : _, i.pid = L, i.url = N, i.param = w;
                        e.array.index(ge, L, "pid");
                        n = L in le ? fe.get(L, "template") : E({ content: t }), T.html(n).attr("data-page", L)
                    } else te || (n = S({ id: k, content: t, pid: L }), _ && _.attr("data-main", k).append(n));
                    return U.needView && loader.views({ compiled: function() { we.store && !we.store.config.isPublic && we.store.config.needCompile && we.store.compile("#" + k) } }), !we.store || U.needView || we.store.config.isPublic || we.store.config.needCompile && we.store.compile("#" + k), n
                }

                function u(e) {
                    var t = re.getLast(),
                        n = ve[e.pid] && ve[e.pid] || {},
                        i = n.loaded,
                        a = i && i.apply(n, n.dependExports) || n.exports;
                    oe[e.pid] = a || null, n.exports = a, t.exports = a, te && D.call(we, "refresh", { prevTarget: b, target: t }), $ && $.hide(), U.progress && V && V.hide(), m.resolve(a), te = !1, G = !1
                }

                function d() {
                    var e = ge[ge.length - 2] || null,
                        t = re.getLast();
                    G && !v.part && (D.call(we, "firstload", { prevTarget: e, target: t }), G = !1), v.part ? D.call(we, "loadpart", { prevTarget: e, target: t }) : D.call(we, "load", { prevTarget: e, target: t })
                }

                function f(e) { c(e) }
                var h = { id: "", url: "", param: {}, effect: "", command: "html", path: U.path, firstAnimate: U.firstAnimate, progress: U.progress, reload: U.reload, autoInit: U.autoInit, needView: U.needView, needComponent: U.needComponent, replace: !1, iframe: !1, decode: !1, part: !1, cache: U.cache, callback: null, beforeLoad: U.beforeLoad, loaded: U.loaded },
                    v = n.extend(!0, {}, h, i),
                    m = n.Deferred(),
                    b = re.getLast() || null;
                ge[ge.length - 2];
                v.url.indexOf("./") > -1 && (v.url = p(v.url, b)), v.path && (v.path = "/" == v.path[v.path.length - 1] ? v.path : v.path + "/"), v.url = v.url in ve || v.iframe || v.url.indexOf("http:") > -1 ? v.url : v.path + v.url, document.activeElement.blur();
                var w = null,
                    x = {};
                v.id = (v.id && v.id.indexOf("#") > -1 ? v.id.substr(1) : v.id) || "";
                var k = v.replace || v.part ? b.id : v.id || e.guid(),
                    T = e.objId(k);
                if (!v.url) return e.showLog("url 不能为空", "mue.router.load"), m.promise();
                if (v.url = v.decode ? decodeURIComponent(v.url) : v.url, v.url.indexOf("tel:") >= 0 || v.url.indexOf("mailto:") >= 0 || v.url.indexOf("sms:") >= 0) return e.unit.openExtral(v.url), m.promise();
                if (v.url && v.url.indexOf("?") > -1) {
                    var I = v.url.split("?");
                    x = e.unit.keyStringToObject(I[1]), v.url = I[0]
                }
                w = n.extend(!0, {}, x, v.param), "undefined" == v.url && (v.url = "main"), v.iframe = Boolean(v.iframe);
                var O = g(v.url),
                    L = O.pid,
                    N = v.iframe ? v.url : O.url,
                    B = { id: k, pid: L, name: L, url: "function" == typeof N ? v.url : N, replace: v.replace, param: w, component: {}, page: {}, toggle: null, exports: {}, effect: i.effect || U.effect, syncHistory: U.syncHistory };
                ie = v.part ? b : B, $ && $.show(), v.progress && V && V.show(), loader.map({ moduleName: L, id: k });
                loader.get(B.pid);
                if (ge.length && v.effect) {
                    var R = ge.length - 1;
                    ge[R].effect = v.effect
                }!te && !v.part && !v.replace && re.add(B), v.replace && re.replace(B);
                var A = B,
                    F = "function" == typeof v.beforeLoad ? v.beforeLoad.call(we, { prevTarget: b, target: B }) : v.beforeLoad;
                if (D.call(we, "loadbefore", { prevTarget: b, target: B }), D.call(we, "beforeload", { prevTarget: b, target: B }), !1 === F) return G = !1, this;
                if (v.part && (e.history.setComponent({ id: k, pid: L, url: N, param: w }), A.currentComponent = k, ge.splice(ge.length - 1, 1, A)), v.part || (de = B), le[L]) ! function(e) { s(fe.get(e.pid, "template")), e.part ? u(e) : (r(), !te && l(function() { e.progress && V && V.hide() }), u(e)) }({ pid: L, progress: v.progress, part: v.part }), D.call(we, "complete", { prevTarget: b, target: B }), v.loaded && v.loaded({ prevTarget: b, target: B }), v.callback && v.callback({ prevTarget: b, target: B }), U.needComponent && loader.components();
                else {
                    if (v.iframe) return function(e) {
                        var t = P({ id: e.id, pid: e.pid, url: e.url, param: e.param });
                        _ && _.attr("data-main", e.id).append(t), l(function() { v.progress && V && V.hide() })
                    }({ id: k, pid: L, url: v.url, param: w }), m.promise();
                    if (v.part) return function() { y(N, function(t, n, i) { e.objId(k)[v.command](t), o(d), v.cache && fe.add(L, { id: k, pid: L, template: t }), $ && $.hide(), v.progress && V && V.hide() }, function(e, t, n) { a(N, e, t, n), D.call(we, "loadfail", e, t, n) }) }(), m.promise();
                    ! function() { y(N, function(e, n, i) { return "object" === (void 0 === e ? "undefined" : t(e)) ? (a(N, e, n, i), !1) : (s(e), v.cache && fe.add(L, { id: k, pid: L, template: e }), r(), v.firstAnimate ? void l(function() { o(d), v.progress && V && V.hide(), he.add(L, { id: k, pid: L, param: w }) }) : (l(function() { v.progress && V && V.hide() }), o(d), he.add(L, { id: k, pid: L, param: w }), void 0)) }, function(e, t, n) { a(N, e, t, n), D.call(we, "loadfail", e, t, n) }) }()
                }
                return m.promise()
            }

            function h(e) {
                var t = { id: "", url: "", param: {}, loaded: null },
                    i = n.Deferred(),
                    a = n.extend(!0, {}, t, e),
                    o = function(t) { e.loaded && e.loaded.call(we, t), i.resolve(t), D.call(we, "loadpart", t) };
                return a.loaded = o, loader.load(a), i.promise()
            }

            function p(e, t) {
                var n = e,
                    i = t.url.lastIndexOf("/"),
                    a = t.url.substr(0, i);
                return e.indexOf("../") > -1 ? (e = e.replace(/\..\//g, function(e) { var t = a.lastIndexOf("/"); return a = a.substr(0, t), "" }), n = a ? a + "/" + e : e) : e.indexOf("./") > -1 && (n = a + "/" + e.replace(/\.\//g, "")), n
            }

            function g(e) {
                var t = "",
                    n = e;
                pe = loader.map(), ve = pe.modules;
                var i = n.indexOf(U.pageSuffix);
                return i > -1 ? (t = n, n = t.substr(0, i), ve.hasOwnProperty(n) && (t = ve[n] && ve[n].template || t || "")) : (n = n, t = ve[n] && ve[n].template || n + U.pageSuffix || ""), { pid: n, url: t }
            }

            function v(t) {
                var i = this,
                    a = {};
                "function" == typeof t ? a.callback = t : a = t || {};
                var o = n.extend(!0, { index: -1, name: "", beforeBack: U.beforeBack, callback: null, loaded: U.loaded }, a),
                    r = parseInt(o.index),
                    l = ge.length;
                if (pe = loader.map(), ve = pe.modules, r > 0) return void e.showLog("index 参数只能是负数", "mue.router.back");
                var c = re.getLast(),
                    s = l - 1,
                    u = c.toggle;
                if (u) return u.hide(), void C();
                var d = "function" == typeof o.beforeBack ? o.beforeBack.call(we, { prevTarget: null, target: c }) : a.beforeBack;
                D.call(we, "beforeback", { prevTarget: null, target: c });
                var f = loader.get(c.pid);
                return f && f.beforeDestroy && f.beforeDestroy(), !1 === d ? this : (o.name && (r = b(o.name)), Math.abs(r) > s && (r = -s), l > 1 && ee && (r < -1 && j(r), ee = !1, a.effect && (K.option({ effect: a.effect }), J.option({ effect: a.effect })), K && K.show(), J && J.hide(function() {
                    var t = l + r;
                    O(t), re.removeNext(t), j();
                    var n = C(),
                        a = n.pid;
                    e.objId(n.id).css("zIndex", 5),
                        function() {
                            var e = {};
                            e = oe[a] || {};
                            var t = loader.get(n.pid);
                            o.callback && o.callback.call(i, e, n), o.backed && o.backed.call(we, { prevTarget: c, target: n }), D.call(we, "back", { prevTarget: c, target: n }), de = n;
                            var r = "pageshow-" + n.pid,
                                l = "pagehide-" + c.pid;
                            f && f.hide && f.hide({ type: "back", target: c }), t && t.show && t.show({ type: "back", target: n }), D.call(we, l, { type: "back", target: c }), D.call(we, r, { type: "back", target: n }), D.call(we, "pageshow", { type: "back", target: n }), D.call(we, "pagehide", { type: "back", target: c }), f && f.destroyed && f.destroyed(), ee = !0
                        }()
                })), this)
            }

            function m(t) { return "string" == typeof t && "main" !== t ? (loader.destroy(t), fe.del(t), t in oe && delete oe[t]) : e.showLog("参数只能是字符串"), this }

            function b(t) {
                var n, i = e.array.indexs(ge, t, "pid"),
                    a = i.length;
                if (a) {
                    var o = -(ge.length - i[a - 1] - 1);
                    n = 0 == o ? -1 : o
                } else n = -1;
                return n
            }

            function y(t, n, i) {
                if ("string" == typeof t) {
                    var a = null;
                    t.indexOf(".js") > -1 && (a = loader.get(de.pid)) && a.beforeCreate && a.beforeCreate(), loader.importHtml(t, function(e, t, i) { "" === e && D.call(we, "fail", e, t, i), n && n(e, t, i), D.call(we, "success", e, t, i), a && a.created && a.created() }, function(e, t, n) { i && i(e, t, n), D.call(we, "fail", e, t, n) })
                } else if ("function" == typeof t) {
                    var o = t && t();
                    n && n(o, 200, {}), D.call(we, "success", o, 200, {})
                } else e.showLog("url 不能为空", "mue.router.requestUrl")
            }

            function w() {
                var t = ge.length - 1,
                    n = ge[t],
                    i = ge.length > 1 ? ge[ge.length - 2] : null;
                return e.history.refresh(), D.call(we, "refresh", { prevTarget: i, target: n }), this
            }

            function x(e) { return e = e || {}, f({ url: e.url || "", param: e.param || {}, replace: !0 }), this }

            function k() { return re.getLast().param }

            function T(t) { return e.history.getComponentParam(t) }

            function I(e) { var t; return e && (t = e in oe), t }

            function O(e) { _.children().each(function(t, i) { t >= e && n(i).remove() }) }

            function C() {
                var t = re.getLast(),
                    n = t.id || "",
                    i = t.effect || U.effect;
                return n && (D.call(we, "beforepageshow", { target: t }), J = null, J = e.toggle({ id: document.getElementById(n), effect: ae[i] && ae[i].inRight || "" }), _ && _.attr("data-main", n)), t
            }

            function j(t) {
                t = t || -1;
                var n = ge.length + t - 1,
                    i = ge[n],
                    a = i && i.id || "",
                    o = i && i.effect || U.effect;
                return a && (D.call(we, "beforepagehide", { target: i }), K = null, K = e.toggle({ id: document.getElementById(a), effect: ae[o] && ae[o].inLeft || "" })), i
            }

            function L(e) {
                e = e || {};
                var t = "";
                String(Z).indexOf("%"), String(Q).indexOf("%");
                return t += '<div class="mue-router-main">', t += "</div>"
            }

            function P(t) {
                var n = t.param ? e.setUrlParams(t.url, t.param) : t.url,
                    i = "",
                    a = e.platform.isIos() ? 'scrolling="no"' : "";
                return i += '<div id="' + t.id + '" class="mue-router-item mue-router-fixiframe" data-page="' + t.pid + '">', i += '<iframe class="mue-router-iframe" src="' + n + '" ' + a + "></iframe>", i += "</div>"
            }

            function S(e) { var t = ""; return t += '<div id="' + e.id + '" class="mue-router-item" data-page="' + e.pid + '">', t += e.content || "", t += "</div>" }

            function E(e) { var t = ""; return t += e.content }

            function N(t, n) { return ne = !0, e.option.call(we, t, n) }

            function B(t, n) { return e.on.apply(we, arguments), this }

            function R(t, n) { return e.off.apply(we, arguments), this }

            function D(t) { we.self = this == window || this == we ? null : this, e.trigger.apply(we, arguments) }

            function A() { return re.getLast() }

            function F() { var e = re.getLast(); return document.getElementById(e.id) }

            function M(e) { return re.getLast().id }

            function H(i) {
                var a = re.getLast(),
                    o = e.objId(a.id),
                    r = "object" === (void 0 === i ? "undefined" : t(i)) ? n(i) : o.find(".mue-page");
                return r.length && e.init({ id: r, height: Q }), this
            }
            var z, V, $, q = { id: "", progress: !1, syncHistory: !0, autoInit: !0, firstAnimate: !1, path: "", indexModule: { moduleName: "main", template: "pages/main/main.html", script: "pages/main/main.js" }, errorPage: "", hash: !1, cache: !0, reloadCache: !1, reload: !1, needNative: !1, needView: !1, needComponent: !0, useScroll: ".mue-scroll-x", beforeBack: null, beforeLoad: null, loaded: null, store: null, width: 0, height: 0, async: !0, effect: "push", hashPrefix: "#", scriptSuffix: ".js", pageSuffix: ".html" },
                U = n.extend({}, q, e.config.router, i),
                W = null,
                Y = this,
                _ = null,
                K = null,
                J = null,
                X = !1,
                Z = "",
                Q = "",
                G = !0,
                ee = !0,
                te = !1,
                ne = !1,
                ie = null,
                ae = { none: { inRight: "showIn", inLeft: "showIn" }, fadein: { inRight: "fadeIn", inLeft: "fadeIn" }, fadeinslide: { inRight: "fadeInRight", inLeft: "fadeInLeft" }, slide: { inRight: "slideInRight", inLeft: "slideInLeft" }, push: { inRight: "pushInRight", inLeft: "pushInLeft" }, zoom: { inRight: "zoomIn", inLeft: "zoomIn" }, cover: { inRight: "coverInRight", inLeft: "coverInLeft" }, zoomslide: { inRight: "zoomSlideInRight", inLeft: "zoomSlideInLeft" }, fadeinslideback: { inRight: "fadeInLeft", inLeft: "fadeInRight" }, slideback: { inRight: "slideInLeft", inLeft: "slideInRight" }, pushback: { inRight: "pushInLeft", inLeft: "pushInRight" }, coverback: { inRight: "coverInLeft", inLeft: "coverInRight" }, zoomslideback: { inRight: "zoomSlideInLeft", inLeft: "zoomSlideInRight" } },
                oe = {},
                re = {},
                le = {},
                ce = {},
                se = !1,
                ue = !1,
                de = {},
                fe = {},
                he = {},
                pe = loader.map(U.indexModule),
                ge = e.history.epmty(),
                ve = pe.modules,
                me = e.storage({ local: !1 }),
                be = !1;
            e.hasRouter = !0, re.get = function() { return ge }, re.add = function(t) {
                if (t = t || {}, t.toggle) {
                    var i = n.extend(!0, {}, t);
                    t.toggle = null, ge.push(i)
                } else ge.push(t);
                var a = window.location.origin + window.location.pathname + "#" + t.pid,
                    o = e.setUrlParams(a, t.param);
                return G ? void(U.syncHistory && "replaceState" in window.history && window.history.replaceState(t, null, o)) : (U.syncHistory && "pushState" in window.history && window.history.pushState(t, null, o), ge)
            }, re.prepend = function(t) {
                t = t || {};
                var n = window.location.origin + window.location.pathname + "#" + t.pid;
                e.setUrlParams(n, t.param);
                return ge.unshift(t), ge
            }, re.replace = function(t) {
                t = t || {};
                var n = ge.length - 1,
                    i = window.location.origin + window.location.pathname + "#" + t.pid,
                    a = e.setUrlParams(i, t.param);
                return n > -1 && (ge.splice(n, 1, t), U.syncHistory && "replaceState" in window.history && window.history.replaceState(t, null, a)), ge
            }, re.getLast = function(e) {
                var t = ge.length - 1,
                    n = ge[t] || {};
                return e ? n[e] : n
            }, re.removeNext = function(t) {
                var n = ge.length - t;
                ge.splice(t, n);
                var i = re.getLast(),
                    a = window.location.origin + window.location.pathname + "#" + i.pid,
                    o = e.setUrlParams(a, i.param);
                U.syncHistory && "replaceState" in window.history && window.history.replaceState(i.param, null, o)
            }, re.removeLast = function() {
                var e = ge.length - 1;
                re.removeNext(e)
            }, re.checkLoad = function(t) { return e.array.compare(ge, t, "pid") || e.array.compare(ge, t, "url") || e.array.compare(ge, t, "id") }, fe.add = function(e, t) { return le[e] = t || {}, le[e] }, fe.del = function(e) { delete le[e] }, fe.get = function(e, t) { if (t) { return (le[e] || {})[t] } return le[e] }, fe.save = function() {
                if (ge.length > 1) {
                    var e = z.html();
                    me.set("cacheHtml", e), me.set("cacheHistory", ge), me.set("hasCache", "true")
                }
            }, fe.load = function() {
                var t = me.get("cacheHtml", 0),
                    n = me.get("cacheHistory", 0),
                    i = [];
                if (n.length > 1) {
                    z.html(t), _ = z.children(".mue-router-main");
                    v({ name: u().pid });
                    try {
                        n.forEach(function(e, t) {
                            var n = "string" == typeof e ? JSON.parse(e) : e;
                            i.push(n)
                        });
                        var a = i[i.length - 1];
                        de = a, loader.require(a.pid, function(e) { oe[a.pid] = e || null }), B("back", function(e) { loader.require(e.target.pid, function(t) { oe[e.target.pid] = t || null }) })
                    } catch (t) { e.showLog(t) }
                    ge = i, C(), j(), G = !1, se = !0, fe.clear()
                }
            }, fe.clear = function() { me.remove("cacheHistory"), me.remove("cacheHtml"), me.remove("hasCache") }, he.add = function(e, t) { return ce[e] = t || {}, ce[e] }, he.get = function(e, t) { if (t) { return (ce[e] || {})[t] } return ce[e] };
            var ye = function(t) {
                    var n = re.getLast(),
                        i = document.getElementById(n.id) || document;
                    return e.obj(t, i)
                },
                we = { init: a, option: N, config: U, data: {}, on: B, off: R, trigger: D, load: f, resize: o, destroy: m, loadPart: h, replace: x, refresh: w, back: v, isLoad: I, $: ye, currentId: M, currentPage: F, currentModule: A, getPageParams: k, getPartParams: T, getHistory: re.get, preload: d, initScroll: H, history: { get: re.get, check: re.checkLoad, getLast: re.getLast, add: re.add, removeLast: re.removeLast, replace: re.replace } };
            return we
        }
    }(window.bui || {}, window.libs),
    function(e, a) {
        var o = function() {
            function o(t) {
                n(this, o), this._default = { log: !1, hasLife: !0, onBeforeInit: null, onInited: null }, this._plugin = t || { name: "", depend: null, config: null, param: null, callback: null };
                var i = e.config.hasOwnProperty(this._plugin.name) ? e.config[this._plugin.name] : null;
                this.config = a.extend(!0, {}, this._default, i, this._plugin.config, this._plugin.param), this.initStatus = !1, this.reinitStatus = !1, this.widgets = Object.create(null), this.init()
            }
            return i(o, [{ key: "widget", value: function(e) { return e && e in this.widgets ? this.widgets[e] : this.widgets } }, {
                key: "init",
                value: function(e) {
                    var t = this,
                        n = e || null;
                    t.config = a.extend(!0, this.config, n);
                    var i = t.config,
                        o = i.hasLife && i.onBeforeInit && i.onBeforeInit.call(t, i);
                    return i.log && console.log(t._plugin.name + " before init"), !1 === o ? t : (t._plugin.callback && t._plugin.callback.call(t, i), i.log && console.log(t._plugin.name + " init"), i.hasLife && i.onInited && i.onInited.call(t, i), i.log && console.log(t._plugin.name + " after inited"), this.initStatus = !0, t)
                }
            }, { key: "reinit", value: function() { return this.destroy(), this.init(), this.config.log && console.log(this._plugin.name + " reinit"), this } }, { key: "destroy", value: function(e) { return this.beforeDestroy && this.beforeDestroy(), this.beforeDestroy = null, this.widgets = {}, this.off(), this.initStatus = !1, e && e.call(this), this.config.log && console.log(this._plugin.name + " destroyed"), this } }, { key: "prefix", value: function(t) { return e.config.classNamePrefix + t } }, { key: "showLog", value: function(n, i) { i = i || ""; var a = ""; return "object" == (void 0 === n ? "undefined" : t(n)) && "message" in n && "name" in n ? a = n.message + ":" + n.name + "&&stack:" + n.stack : "string" == typeof n && (a = n), e.log && console.error(i + " " + a), e.trace && console.trace && console.trace(), this } }, {
                key: "option",
                value: function(t, n) {
                    if ("object" !== e.typeof(t) && void 0 === n) return "string" == typeof t ? this.config[t] : this.config;
                    var i = this;
                    if ("id" == t) return e.showLog("不允许修改控件的ID参数"), this;
                    if (t && "object" === e.typeof(t)) { var o = a.extend(this.config, t); return i && i.init(o) }
                    if (this.config.hasOwnProperty(t)) {
                        var r = {};
                        r[t] = n;
                        var l = a.extend(this.config, r);
                        return i && i.init(l)
                    }
                    return this
                }
            }, { key: "emitter", get: function() { return e.emitter() } }, { key: "on", get: function() { return this.emitter.on } }, { key: "off", get: function() { return this.emitter.off } }, { key: "trigger", get: function() { return this.emitter.trigger } }]), o
        }();
        e.extend = function(t) {
            var a = function() {
                function a(e) { n(this, a), this.init(e) }
                return i(a, [{ key: "init", value: function(n) { var i = n.name; return this.checkName(i) ? (e[i] = function(e) { return t.param = e, new o(t) }, this) : this } }, { key: "checkName", value: function(t) { return t ? e.hasOwnProperty(t) ? (console.warn("已有相同名为" + t + "的插件或方法,请重新换个名称注册."), !1) : (this.name = t, !0) : (console.warn("插件名字不能为空"), !1) } }]), a
            }();
            new a(t)
        }
    }(window.bui || {}, window.libs);
    e(function(e) {
        ! function(n, i) {
            var a;
            n.extend({
                name: "page",
                config: (a = { dialogid: "", url: "", param: null, script: "", appendTo: "", className: "mue-dialog-page", effect: "", pageSuffix: ".html", height: 0, width: 0, iframe: !1, openFirst: !0, closeFirst: !1, autoClose: !1, needRemove: !1, useBox: !0, syncHistory: !1, title: "", buttons: null, mask: !1, life: !0, scroll: !1, needView: !1, needComponent: !0, cache: !0, close: !1, autoload: !0, fullscreen: !0 }, o(a, "effect", "fadeInRight"), o(a, "onError", null), o(a, "beforeClose", null), o(a, "closed", null), o(a, "beforeOpen", null), o(a, "opened", null), o(a, "beforeLoad", null), o(a, "loaded", null), a),
                callback: function(a) {
                    function o(e, t) { var n = ""; return n += '<div class="mue-dialog-main">' + e + "</div>" + (t.close ? '<div class="mue-dialog-close"><i class="icon-close"></i></div>' : "") }

                    function r(e) {
                        var t = loader.map().modules[v.module] || {};
                        if (t.hide && u.life) {
                            var i = n.hasRouter ? n.history.getLast() : {};
                            t.hide({ type: "page", target: i })
                        }
                        "function" == typeof e && e.call(s, t), u.closed && u.closed.call(s, t)
                    }

                    function l(t, i) {
                        var a = n.history.getLast();
                        p = loader.map().modules || {};
                        var o = p[t];
                        if (u.cache && h && !m) return !u.openFirst && g.open(), "function" == typeof i && i.call(s, o.exports), s;
                        if (n.history.setPage({ id: g.config.id, name: t, url: u.url, dialog: g, param: u.param }), m = !1, o && "function" == typeof o.loaded) {
                            var r = o.loaded && o.loaded.call(e, o.exports) || o.exports;
                            n.history.setPage({ id: g.config.id, name: t, url: u.url, dialog: g, exports: r, param: u.param });
                            var l = loader.map().modules[t] || {};
                            return l.show && u.life && l.show({ type: "page", target: a }), "function" == typeof i && i.call(s, r), s.compile({ id: g.config.id }), u.opened && u.opened.call(s, r), !u.openFirst && g.open(), this
                        }
                        loader.require(t, function(e) {
                            var o = loader.map().modules[t] || {};
                            n.history.setPage({ id: g.config.id, name: t, url: u.url, dialog: g, exports: e, param: u.param }), o.show && u.life && o.show({ type: "page", target: a }), "function" == typeof i && i.call(s, e), s.compile({ id: g.config.id }), u.opened && u.opened.call(s, e)
                        }), h = !0
                    }

                    function c(e) {
                        var t = loader.map().modules,
                            n = {},
                            i = e.indexOf(u.pageSuffix);
                        return i > -1 ? (n.url = e, n.module = e.substr(0, i)) : (n.url = t[e] && t[e].template || e + u.pageSuffix, n.module = e), n
                    }
                    var s = this,
                        u = s.config,
                        d = "body" == s.appendTo ? i : n.obj,
                        f = "",
                        h = !1,
                        p = loader.map().modules || {},
                        g = s.widgets.dialog = n.dialog({ autoinit: !1, needRemove: a.needRemove }),
                        v = null,
                        m = !1;
                    s.init = function(e) {
                        var a = i.extend(!0, {}, s.config, e);
                        if (a.onClose = function() { n.hasRouter && a.syncHistory && mue.back(), r() }, v = c(a.url), a.iframe) { var l = n.platform.isIos() ? 'scrolling="no"' : ""; return a.content = '<iframe class="mue-router-iframe" src="' + a.url + '" ' + l + " ></iframe>", g.create(a), a.autoload && g.open(), a.loaded && a.loaded.call(s, v), s }
                        if (a.script) {
                            var u = a.script.indexOf(".js");
                            v.module = a.script.substr(0, u)
                        }
                        return !1 === (a.beforeLoad && a.beforeLoad.call(s, v)) ? this : (loader.import(v.url, function(e) {
                            if ("object" === (void 0 === e ? "undefined" : t(e))) return void(a.onError && a.onError.call(s, e));
                            f = o(e, a), a.id ? (g.init(a), d(a.id).html(e)) : (a.content = e, g = g.create(a)), a.autoload && s.open(), a.loaded && a.loaded.call(s, v)
                        }), s)
                    }, s.compile = function(e) {
                        var t = i.extend(!0, { id: g.config.id, cacheHtml: !1, cache: !1, needComponent: u.needComponent, needView: u.needView }, e);
                        t.needView && loader.views(t),
                            t.needComponent && loader.components(t)
                    }, s.reload = function(e) {
                        var n = u = i.extend(!0, s.config, u, e);
                        if (m = !0, v = c(n.url), n.script) {
                            var a = n.script.indexOf(".js");
                            v.module = n.script.substr(0, a)
                        }
                        if (!1 === (n.beforeLoad && n.beforeLoad.call(s, v))) return this;
                        loader.import(v.url, function(e) {
                            if ("object" === (void 0 === e ? "undefined" : t(e))) return void(n.onError && n.onError.call(s, e));
                            f = o(e, n), d("#" + (g.config.id || n.dialogid)).html(f), l(v.module), n.loaded && n.loaded.call(s, v)
                        })
                    }, s.toggle = function(e, t) { return s.isOpen() ? s.close(t) : s.open(e), s }, s.isOpen = g.isOpen, s.close = function(e) { return !1 === (a.beforeClose && u.beforeClose.call(s)) ? this : (n.hasRouter && u.syncHistory && n.history.removeLast(u.syncHistory), u.closeFirst ? (g.close(function() { s.trigger("close"), r(e) }), s) : (r(e), g.close(), s.trigger("close"), s)) }, s.remove = function(e) { return g.remove(e), s.trigger("remove"), s }, s.open = function(e) { if (!1 === (u.beforeOpen && u.beforeOpen.call(s))) return this; if (u.iframe) return g.open(e), s; var t = { hide: s.close, show: s.open }; return n.hasRouter && u.syncHistory && n.history.add({ id: g.config.id, name: v.module, url: u.url, replace: !1, param: u.param || {}, part: {}, page: {}, effect: "push", toggle: t, syncHistory: u.syncHistory }), loader.map({ moduleName: v.module, id: g.config.id }), n.history.getLast().currentPage = g.config.id, u.openFirst ? (g.open(function() { s.trigger("open"), l(v.module, e) }), s) : (l(v.module, e), s.trigger("open"), s) }, s.setParam = function(e) {
                        var t = i.extend(!0, {}, u.param, e);
                        n.history.setPage({ id: g.config.id, param: t })
                    }, s.init(u)
                }
            })
        }(window.bui || {}, window.libs)
    });
    ! function(e, n) {
        e.setUrlParams = function(n, i, a) {
            var a = 0 != a,
                i = "object" == (void 0 === i ? "undefined" : t(i)) ? i : {},
                o = e.unit.objectToKeyString(i, a);
            return "" == o ? n : n + "?" + o
        }, e.getUrlParams = function(t) {
            var t = 0 != t,
                n = window.location.href,
                i = n.indexOf("?"),
                a = {};
            if (i > -1) {
                var o = n.substr(i + 1);
                a = e.unit.keyStringToObject(o, t)
            }
            return a
        }, e.getUrlParam = function(e) {
            var t = window.location.href,
                n = new RegExp("(^|&|.)" + e + "=([^&]*)(&|$)", "i"),
                i = t.substr(1).match(n);
            return null != i ? decodeURIComponent(i[2]) : null
        }, e.typeof = function(e) { var t = Object.prototype.toString.call(e).slice(8, -1); return t = t.toLowerCase() }, e.setting = function(n, i) { return "string" == typeof n && "object" === (void 0 === i ? "undefined" : t(i)) ? e.config[n] = i : "string" == typeof n && void 0 === i ? e.config[n] : e.config }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.array = {}, e.array.index = e.inArray = function(e, t, n) {
            var i, a;
            e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);
            for (var o = 0; o < i.length; o++) { var r = i[o]; if ((r && r[n] || r) === a) return parseInt(o) }
            return -1
        }, e.array.compare = e.compareArray = function(e, t, n) {
            var i, a;
            e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);
            for (var o = 0; o < i.length; o++) { var r = i[o]; if ((r && r[n] || r) === a) return !0 }
            return !1
        }, e.array.remove = e.removeArray = function(t, n, i) { var a, o; return t instanceof Array ? (a = t || [], o = n) : (a = n || [], o = t || []), e.array.delete(a, o, i), a }, e.array.filter = e.filterArray = function(t, n, i) {
            var a, o;
            t instanceof Array ? (a = t || [], o = n) : (a = n || [], o = t);
            var r = [];
            for (var l in a) try {
                var c = a[l] && a[l][i] || a[l];
                new RegExp(o).test(c) && r.push(a[l])
            } catch (t) { e.showLog(t) }
            return r
        }, e.array.indexs = e.indexArray = function(e, t, n) {
            var i, a;
            e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);
            var o = [];
            for (var r in i) {
                (i[r] && i[r][n] || i[r]) === a && o.push(+r)
            }
            return o
        }, e.array.excess = e.excessArray = function(e, t, n) {
            var i;
            e instanceof Array ? i = e || [] : i = t || [];
            var a = {},
                o = [];
            for (var r in i) try {
                var l = i[r] && i[r][n] || i[r];
                a[l] !== l && (a[l] = l, o.push(i[r]))
            } catch (e) {}
            return o
        }, e.array.uniq = function(t, n) {
            for (var i = [], a = 0; a < t.length; a++) {
                var o = void 0 === n,
                    r = t[a],
                    l = o ? r : r[n] || r;
                e.array.index(i, l, n) < 0 && i.push(r)
            }
            return i
        }, e.array.copy = e.copyArray = function(t, n, i) { var a = []; if (n = n || 0, i = i || t && t.length, !t || "array" === e.typeof(t)) { t.forEach(function(e, t) { a.push(e) }); return a.splice(n, i) || [] } }, e.array.empty = function(t) { if (!t || "array" === e.typeof(t)) return t.splice(0, t.length) }, e.array.replace = function(t, n) { if (!(t && "array" !== e.typeof(t) || n && "array" !== e.typeof(n))) { var i = [0, t.length].concat(n); return t.splice.apply(t, i) } }, e.array.merge = function(t) {
            var n;
            if (!t || "array" === e.typeof(t)) {
                var i = arguments,
                    a = i.length - 1,
                    o = i[a];
                if ("string" == typeof o && i.length > 1) {
                    for (var l, c = a, s = [], u = 0; u < c; u++) ! function(e) {
                        var n = Array.prototype.slice.call(i[e], 0);
                        t.forEach(function(e, t) {
                            var i = e[o] || e;
                            n instanceof Array && n.forEach(function(t, a) {
                                var r = t[o] || t;
                                if (i === r) {
                                    for (var l in t) e[l] = t[l];
                                    n.splice(a, 1)
                                }
                            })
                        }), s.push(n)
                    }(u);
                    return (l = e.array).merge.apply(l, [t].concat(s))
                }
                var d = (n = [t.length, 0]).concat.apply(n, r(Array.prototype.slice.call(arguments, 1)));
                return t.splice.apply(t, d), t
            }
        }, e.array.get = function(t, n, i) {
            if (!t || "array" === e.typeof(t)) {
                for (var a, o = null, r = 0; r < t.length; r++) {
                    o = t[r];
                    (o && o[i] || o) === n && (a = o)
                }
                return a
            }
        }, e.array.getAll = function(e, t, n) {
            var e = e || [],
                i = [],
                a = null;
            for (var o in e) try {
                a = e[o];
                var r = a && a[n] || a;
                t && t instanceof Array ? t.forEach(function(e, t) { r === e && i.push(a) }) : r === t && i.push(a)
            } catch (e) {}
            return i
        }, e.array.set = function(t, n, i, a) {
            if (!t || "array" === e.typeof(t)) {
                for (var o = /\d/.test(n) && "number" == typeof n, r = 0; r < t.length; r++) {
                    var l = t[r],
                        c = void 0 === a ? l : l[a] || l;
                    if (o ? r === n : c === n) {
                        if (a) {
                            if (i && "object" === e.typeof(i))
                                for (var s in i) l[s] = i[s];
                            else l[a] = i;
                            t.splice(r, 1, l)
                        } else t.splice(r, 1, i);
                        return t
                    }
                }
                return t
            }
        }, e.array.setAll = function(t, n, i, a) {
            if (!t || "array" === e.typeof(t)) return t.filter(function(o, r) {
                var l = void 0 === a ? o : o[a] || o;
                if (r == n || l === n)
                    if (a) {
                        if (i && "object" === e.typeof(i))
                            for (var c in i) o[c] = i[c];
                        else o[a] = i;
                        t.splice(r, 1, o)
                    } else t.splice(r, 1, i)
            }), t
        }, e.array.delete = function(t, n, i) {
            function a(e) {
                for (var n = 0, a = 0; a < r.length; a++) {
                    var l = a - n,
                        c = t.length !== r.length,
                        s = c ? t[l] || {} : t[a] || {};
                    (void 0 !== i ? s[i] || s : s) === e && (c ? t.splice(l, 1) : t.splice(a, 1), o.push(a), ++n)
                }
            }
            if (!t || "array" === e.typeof(t)) {
                var o = [],
                    r = e.array.copy(t);
                return n && "array" === e.typeof(n) ? n.forEach(function(e, t) { a(void 0 !== i ? e[i] || e : e) }) : a(n), o
            }
        }, e.array.deleteIndex = function(t, n) { if (!t || "array" === e.typeof(t)) { var i = []; return n && "array" === e.typeof(n) ? n.forEach(function(n, a) { i.push(t[n]), e.array.remove(t, t[n]) }) : (i.push(t[n]), e.array.remove(t, t[n])), i } }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.storage = function(n) {
            function i(t, n, i) {
                t = u + t;
                var a = 1 == c ? null : p.getItem(t),
                    o = [],
                    r = "",
                    l = i ? n[i] : n;
                if (null === a) { o.push(n), r = JSON.stringify(o); try { p.setItem(t, r) } catch (e) { "QuotaExceededError" == e.name && console.log("超出本地存储限额！") } } else { var s = JSON.parse(a); if (e.array.compare(s, l, i)) { e.array.remove(s, l, i), s[h](n); try { r = JSON.stringify(s), p.setItem(t, r) } catch (e) { "QuotaExceededError" == e.name && console.log("超出本地存储限额！") } } else { s[h](n), s.length > c && 0 != c && ("unshift" == h ? s.pop() : s.shift()); try { r = JSON.stringify(s), p.setItem(t, r) } catch (e) { "QuotaExceededError" == e.name && console.log("超出本地存储限额！") } } }
                return this
            }

            function a(t, n, i) {
                t = u + t;
                var a, o = p.getItem(t) || "";
                try { a = d ? o && e.unit.stringToJson(o) : o && JSON.parse(o) } catch (t) { a = o, e.showLog(t.name + ": " + t.message, "mue.storage.get") }
                if ("number" == typeof n && i) a = a && a[n] && a[n][i] || void 0;
                else if ("string" == typeof n) {
                    var r = e.array.index(a, n, i);
                    a = a && a[r]
                } else a = "number" == typeof n ? a && a[n] || void 0 : a;
                return a
            }

            function o(t, n, i) {
                if ("string" != typeof(t = u + t)) return void e.showLog("要删除的字段名只能是字符串", "mue.storage.remove");
                var o = a(t) || [];
                if ("number" == typeof n) {
                    var r = "number" == typeof i ? i : r;
                    o.splice(n, r);
                    try {
                        var l = JSON.stringify(o) || "";
                        p.setItem(t, l)
                    } catch (t) { e.showLog(t.name + ": " + t.message, "mue.storage.remove") }
                } else if ("string" == typeof n) {
                    var c = e.array.remove(o, n, i);
                    try {
                        var l = JSON.stringify(c) || "";
                        p.setItem(t, l)
                    } catch (t) { e.showLog(t.name + ": " + t.message, "mue.storage.remove") }
                } else p.removeItem(t);
                return this
            }

            function r() {
                if (u)
                    for (var e = 0; e < localStorage.length; e++) {
                        var t = localStorage.key(e);
                        0 === t.indexOf(u) && p.removeItem(t)
                    } else p.clear();
                return this
            }

            function l(e) {
                for (var t = {}, n = parseInt(e) || 0, i = 0; i < localStorage.length; i++) {
                    var a = localStorage.key(i);
                    a.substr(u.length);
                    if (u && 0 === a.indexOf(u)) try {
                        var o = JSON.parse(p.getItem(a));
                        t[a] = void 0 !== e ? o[n] : o
                    } catch (e) { t[a] = p.getItem(a) }
                    if ("" === u) try { t[a] = JSON.parse(p.getItem(a)) } catch (e) { t[a] = p.getItem(a) }
                }
                return t
            }
            var c = 1,
                s = !0,
                u = "",
                d = !1,
                f = !0;
            "number" == typeof n || "string" == typeof n ? c = 0 == parseInt(n) ? 0 : parseInt(n) || 1 : "object" === (void 0 === n ? "undefined" : t(n)) && (c = n && 0 == n.size ? 0 : n.size || 1, f = !n || 0 != n.local, s = !n || 0 != n.reverse, d = !(!n || 1 != n.deep), u = n.prefix || "");
            var h = s ? "push" : "unshift",
                p = f ? localStorage : sessionStorage;
            return { get: a, getAll: l, set: i, remove: o, clear: r }
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.platform = function() {
            function e(e) { return /Windows NT/i.test(s) }

            function t() { return /Macintosh/i.test(s) }

            function n(e) { return /(Android|Linux)/i.test(s) }

            function i(e) { return /(iPhone)/i.test(s) }

            function a(e) {
                var t = !1,
                    n = 3 == window.devicePixelRatio && 375 == window.screen.width && 812 == window.screen.height,
                    i = 2 == window.devicePixelRatio && 414 == window.screen.width && 896 == window.screen.height,
                    a = 3 == window.devicePixelRatio && 414 == window.screen.width && 896 == window.screen.height;
                return (n || i || a) && (t = !0), t
            }

            function o(e) { return /(iPad)/i.test(s) }

            function r(e) { return /(iPhone|iPad|iOS)/i.test(s) }

            function l(e) { return /(micromessenger)/i.test(s) }

            function c(e) { return /(crosswalk)/i.test(s) }
            var s = navigator.userAgent;
            return { isAndroid: n, isIphone: i, isIpad: o, isIos: r, isWeiXin: l, isBingotouch: c, isMac: t, isIphoneX: a, isWindow: e }
        }()
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.date = {}, e.date.format = function(e, t) {
            if (null == e) return "";
            var n = this.convert(e);
            t = t || "yyyy-MM-dd";
            var i = { "M+": n.getMonth() + 1, "d+": n.getDate(), "h+": n.getHours(), "m+": n.getMinutes(), "s+": n.getSeconds(), "q+": Math.floor((n.getMonth() + 3) / 3), S: n.getMilliseconds() };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var a in i) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[a] : ("00" + i[a]).substr(("" + i[a]).length)));
            return t
        }, e.date.convert = function(e, t) {
            if (e && e.constructor == Date) return e;
            if ("number" == typeof e && 13 === String(e).length) return new Date(e);
            e = String(e);
            var n = new Date,
                i = n.getFullYear(),
                a = n.getMonth() + 1,
                o = n.getDate();
            if (e = e.replace(/[-|年|月]/gim, "/").replace(/[时|分|秒|小时|分钟]/gim, ":").replace(/^(\d{4}\/\d+?)($|\s)/, function(e, t) { return t + "/1" }).replace(/[日|号]/gim, "").replace(/^(\d{1,2}\/\d{1,2}?)($|\s)/, function(e, t) { return n.getFullYear() + "/" + t }), e.indexOf("T") > -1 && -1 == e.indexOf("GMT")) { e = e.replace("T", " "); var r = e.indexOf(".") > -1 ? e.split(".") : [e]; return new Date(r[0]) }
            if (e.indexOf("GMT") > -1) {
                var r = e.split(" "),
                    l = { Jan: "1", Feb: "2", Mar: "3", Apr: "4", May: "5", Jun: "6", Jul: "7", Aug: "8", Sep: "9", Oct: "10", Nov: "11", Dec: "12" },
                    c = r[3] + "/" + l[r[1]] + "/" + r[2] + " " + r[4];
                return new Date(c)
            }
            return e.indexOf("/") < 0 && e.indexOf(":") > -1 && (e = i + "/" + a + "/" + o + " " + e), 4 === e.length ? e += "/1/1 00:00:00" : "MM" === t || "M" === t ? e = i + "/" + e + "/1 00:00:00" : "dd" !== t && "d" !== t || (e = i + "/" + a + "/" + e + " 00:00:00"), new Date(e)
        }, e.date.after = function(e, t, n) {
            var t = 0 === t ? 0 : t || 1,
                i = this.convert(e),
                a = i.getTime(),
                o = 1e3 * parseInt(t) * 3600 * 24,
                r = a + o;
            return this.format(r, n || "yyyy-MM-dd")
        }, e.date.afterTime = function(e, t, n) {
            var i = 0 === t ? 0 : t || 30,
                a = this.format(new Date, "yyyy/MM/dd") + " " + e,
                o = new Date(a),
                r = o.getTime(),
                l = 1e3 * i * 60,
                c = r + l;
            return this.format(c, n || "hh:mm")
        }, e.date.count = function(t, n, i) {
            var a, o;
            switch (i) {
                case "number":
                    a = t, o = n;
                    break;
                case "hour":
                    var r = this.format(new Date, "yyyy/MM/dd"),
                        l = r + " " + t,
                        c = this.convert(l),
                        s = r + " " + n,
                        u = this.convert(s);
                    a = c.getTime(), o = u.getTime();
                    break;
                case "date":
                default:
                    a = this.convert(t).getTime(), o = this.convert(n).getTime()
            }
            var d = a - o;
            d = Math.abs(d);
            var f = parseInt(d / 1e3 / 3600 / 24, 10),
                h = parseInt(d / 1e3 / 3600 % 24, 10),
                p = parseInt(d / 1e3 / 60 % 60, 10),
                g = parseInt(d / 1e3 % 60, 10);
            return { value: d, day: f, hour: h, minute: p, second: g, tip: f + "天 " + e.unit.fixZero(h) + ":" + e.unit.fixZero(p) + ":" + e.unit.fixZero(g) }
        }, e.date.countMonth = function(e) {
            var t = this.convert(e),
                n = t.getMonth() + 1;
            return t.setMonth(n), t.setDate(0), t.getDate()
        }, e.date.toWeek = function(e, t) {
            var n = this.convert(e),
                i = null;
            switch (t) {
                case 1:
                    i = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
                    break;
                default:
                    i = t || ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            }
            return i[n.getDay()]
        }, e.date.today = function(e) { return e = e || "M-d", this.format(new Date, e) }, e.date.fromnow = function(e) {
            var t = +new Date,
                n = this.convert(e).getTime(),
                i = "",
                a = this.count(t, n, "date"),
                o = t > n ? "前" : "后";
            return a.day ? i = a.day + "天" + o : a.hour ? i = a.hour + "小时" + o : a.minute ? i = a.minute + "分钟" + o : a.second && (i = a.second + "秒" + o), i
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.animate = function(i) {
            function a(t) { return t.id ? (E = e.objId(t.id), E.css({ "-webkit-transition": H, transition: H }), N = t.open3D, B = t.zoom, R = t.animates || [], A = D.config = t, this) : void e.showLog("animate id不能为空", "mue.animate") }

            function o(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e : B ? -t / 100 + "rem" : -t + "px";
                var n = "translateX(" + e + ")";
                return R.push(n), F.push(n), this
            }

            function r(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? e : B ? t / 100 + "rem" : t + "px";
                var n = "translateX(" + e + ")";
                return R.push(n), F.push(n), this
            }

            function l(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e : B ? -t / 100 + "rem" : -t + "px";
                var n = "translateY(" + e + ")";
                return R.push(n), F.push(n), this
            }

            function c(e) {
                var e = e,
                    t = Math.abs(parseFloat(e));
                e = "string" == typeof e && e.indexOf("%") > -1 ? e : B ? t / 100 + "rem" : t + "px";
                var n = "translateY(" + e + ")";
                return R.push(n), F.push(n), this
            }

            function s(e) {
                var t = String(e),
                    e = t.indexOf(",") > -1 ? t : e + ",1",
                    n = "scale(" + e + ")";
                return R.push(n), F.push(n), this
            }

            function u(e) {
                var e = String(e),
                    t = "scaleX(" + e + ")";
                return R.push(t), F.push(t), this
            }

            function d(e) {
                var e = String(e),
                    t = "scaleY(" + e + ")";
                return R.push(t), F.push(t), this
            }

            function f(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "rotate(" + e + ")";
                return R.push(n), F.push(n), this
            }

            function h(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "rotateX(" + e + ")";
                return R.push(n), F.push(n), this
            }

            function p(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "rotateY(" + e + ")";
                return R.push(n), F.push(n), this
            }

            function g(e) {
                var e, t = String(e),
                    i = [];
                t.indexOf(",") > -1 ? (i = t.split(","), e = "", n.each(i, function(t, n) { t < 2 && (e += n.indexOf("deg") > -1 ? "," + n : "," + n + "deg") }), e = e.substr(1)) : e = t.indexOf("deg") > -1 ? t : t + "deg,0";
                var a = "skew(" + e + ")";
                return R.push(a), F.push(a), this
            }

            function v(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "skewX(" + e + ")";
                return R.push(n), F.push(n), this
            }

            function m(e) {
                var t = String(e),
                    e = t.indexOf("deg") > -1 ? t : t + "deg",
                    n = "skewY(" + e + ")";
                return R.push(n), F.push(n), this
            }

            function b(e) { var t = String(e); return E.css({ "-webkit-transform-origin": t, "transform-origin": t }), this }

            function y(e, t) { var n = t || "ease-out"; return H = "number" == typeof e ? "all " + e + "ms " + n : 0 == e || "none" == e ? "none" : 1 == e ? "all 300ms " + n : e || "all 300ms " + n, E.css({ "-webkit-transition": H, transition: H }), this }

            function w() { return R = [], F = [], M = [], z = 0, this }

            function x(e) { return V && (y(), V = !1), E.css({ "-webkit-transform": "", transform: "" }), "none" != H && E.one("webkitTransitionEnd", function() { e && e.call(D, this) }), w(), this }

            function k(e) { var t = N ? F.join("") + "translateZ(0)" : F.join(""); try { M[z] = [], M[z].push(R.join("")), R = [], z++ } catch (e) {} return E.css({ "-webkit-transform": t, transform: t }), "none" != H ? E.one("webkitTransitionEnd", function() { e && e.call(D, this) }) : e && e.call(D, this), this }

            function T(e) {
                function t(e) {
                    var o = e[i] || [],
                        r = e[i + 1] || [];
                    n = N ? o.join("") + "translateZ(0)" : o.join(""), n = F.join("") + n.replace(/\(.*?\)/g, "(0)"), E.css({ "-webkit-transform": "", transform: "" }), i++;
                    try {
                        E.one("webkitTransitionEnd", function() {
                            if (!r || !r.length) return i = 0, void(historyCache = []);
                            t(a)
                        })
                    } catch (e) {}
                }
                var n, i = 0,
                    a = M.reverse();
                return t(a), this
            }

            function I(e, t) { return E.css({ "-webkit-transform": e, transform: e }), t && "none" != y && E.one("webkitTransitionEnd", function() { t.call(D, this) }), this }

            function O(e) { return e = parseFloat(e) || 100, N = !0, E.parent().css({ perspective: e + "px" }), this }

            function C(e, n) { var i = {}; return "object" === (void 0 === e ? "undefined" : t(e)) ? (i = e, n = "") : "string" == typeof e && (i[e] = n || ""), E.css(i), this }

            function j(t) { var n = {}; return e.widget.call(n, t) }

            function L(t, n) { return e.option.call(D, t, n) }
            var P = { id: "", zoom: !0, open3D: !1, animates: [] };
            if ("object" === (void 0 === i ? "undefined" : t(i)) && i.id) i = i || {};
            else {
                var S = i || "";
                i = {}, i.id = S
            }
            var E, N, B, R, D = { origin: b, transition: y, property: C, open3D: O, transform: I, start: k, stop: x, clear: w, left: o, right: r, up: l, down: c, scale: s, scaleX: u, scaleY: d, rotate: f, rotateX: h, rotateY: p, skew: g, skewX: v, skewY: m, reverse: T, widget: j, option: L, config: A, init: a },
                A = D.config = n.extend(!0, {}, P, i),
                F = [],
                M = [],
                H = "all 300ms ease-out";
            a(A);
            var z = 0,
                V = !1;
            return D
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.mask = function(n) {
            function i(n) { L = !1; var i = t.extend(!0, y, x, n); return i.onBeforeInit && i.onBeforeInit.call(w, i), i.appendTo = i.appendTo || "body", I = e.objId(i.appendTo), j = I[0] && "COMPONENT" === I[0].tagName, x = w.config = i, m = I.css("position"), i.autoTrigger && r(i), O = e.objId(i.id), i.onInited && i.onInited.call(w, i), this }

            function a(e) {
                var t = function(t) { e.callback && e.callback.call(w, t), e.autoClose && s(), t.stopPropagation() };
                O.off("click.bui").on("click.bui", t), C = !0
            }

            function o(t) {
                var n = t.background ? t.background : "rgba(0,0,0," + t.opacity + ")",
                    i = "";
                return i += '<div id="' + T + '" class="' + e.prefix("mask") + " " + t.className + '" style="background:' + n + ";z-index:" + t.zIndex + '"></div>'
            }

            function r(n) {
                if (!L) {
                    var i = t.extend(!0, {}, y, x, n),
                        r = o(i);
                    return O = e.objId(T), O && O.length ? O.css("display", "block") : (I.append(r), !j && I.css("position", "relative"), O = e.objId(T)), b = !0, v.call(w, "show"), C || a(i), this
                }
            }

            function l() { if (!L) return O && O.remove(), O = null, I.css("position", m || "static"), b = !1, C = !1, v.call(w, "hide"), this }

            function c(t) { if (!L) return O = e.objId(T), O && O.length ? (O.css("display", "block"), !j && I.css("position", "relative"), b = !0) : r(x), v.call(w, "show"), this }

            function s() { if (!L) return O && O.css("display", "none"), !j && I.css("position", "relative"), b = !1, v.call(w, "hide"), this }

            function u() { return b }

            function d(e) { l(), I && I.off("click.mask"), g("show"), g("hide"), L = !0 }

            function f(t) { var n = {}; return e.widget.call(n, t) }

            function h(t, n) { return e.option.call(w, t, n) }

            function p(t, n) { return e.on.apply(w, arguments), this }

            function g(t, n) { return e.off.apply(w, arguments), this }

            function v(t) { w.self = this == window || this == w ? null : this, e.trigger.apply(w, arguments) }
            var m, b, y = { id: "", appendTo: "", className: "", opacity: .3, background: "", zIndex: 100, autoTrigger: !1, autoClose: !1, onBeforeInit: null, onInited: null, callback: null },
                w = { name: "mask", handle: {}, on: p, off: g, hide: s, show: c, isShow: u, remove: l, destroy: d, widget: f, option: h, config: x, init: i },
                x = w.config = t.extend(!0, {}, y, e.config.mask, n),
                k = e.guid(),
                T = x.id ? x.id.indexOf("#") > -1 ? x.id.substring(1) : x.id : k,
                I = (t("body"), e.objId(x.appendTo)),
                O = null,
                C = !1,
                j = !1,
                L = !1;
            return i(x), w
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.loading = function(n) {
            function i(i) { E = !1; var a = t.extend(!0, {}, O, i); return a.onBeforeInit && a.onBeforeInit.call(I, n), a.appendTo = a.appendTo || "body", C = t(a.appendTo), O = I.config = a, a.autoTrigger && P.length < 1 && r(a), P = e.objId(j), a.onInited && a.onInited.call(I, a), this }

            function a(e) {
                var t = e || O,
                    n = function(e) { t.callback && t.callback.call(I, e), e.stopPropagation() };
                return C.off("click.bui", "#" + j).on("click.bui", "#" + j, n), S = !0, this
            }

            function o(t) {
                t = t || {};
                var n = t.text,
                    i = C.width() || document.documentElement.clientWidth,
                    a = n && "block" == t.display ? parseInt(t.height) + 30 : parseInt(t.height),
                    o = -i / 2,
                    r = -a / 2,
                    l = "block" == t.display ? e.prefix("loading-block") : e.prefix("loading-inline"),
                    c = "";
                return c += '<div id="' + j + '" class="' + e.prefix("loading") + " " + l + '" style="width:' + i + "px;height:" + a + "px;line-height:" + a + "px;margin-left:" + o + "px;margin-top:" + r + "px;" + (t.zIndex ? "z-index:" + t.zIndex : "") + '" >', t.onlyText || (c += '<div class="' + e.prefix("loading-cell") + '" style="width:' + parseFloat(t.width) + "px;height:" + parseFloat(t.height) + 'px;"></div>'), c += '<div class="' + e.prefix("loading-text") + '">' + t.text + "</div>", c += "</div>", t && t.template ? t.template.call(I, t) : c
            }

            function r(n) {
                if (!E) {
                    var i = t.extend(!0, {}, O, n);
                    if (P = e.objId(j), k = P.children(".mue-loading-cell"), P.hasClass("mue-loading-pause")) P.removeClass("mue-loading-pause"), w.call(this, "start");
                    else {
                        P.length && P.remove();
                        var r = o(i);
                        C.append(r), A && A.show(), w.call(this, "show")
                    }
                    return i.timeout && (B && clearTimeout(B), B = setTimeout(function() { d() }, i.timeout)), S || a(i), N = !0, this
                }
            }

            function l(t) { if (!E) { P = e.objId(j), x = P.children(".mue-loading-text"); return void 0 === t ? x && x.text() : (x && x.html(t), this) } }

            function c() { if (!E) return P = e.objId(j), k = P.children(".mue-loading-cell"), k.css("display", "inline-block"), P.removeClass("mue-loading-pause"), this }

            function s() { if (!E) return P = e.objId(j), k = P.children(".mue-loading-cell"), k.css("display", "none"), P.addClass("mue-loading-pause"), this }

            function u() { return N }

            function d() { if (!E) return P = e.objId(j), P && P.remove(), P = null, A && A.remove(), S = !1, N = !1, w.call(this, "remove"), w.call(this, "hide"), this }

            function f() { if (!E) return P && P.addClass("mue-loading-pause"), w.call(this, "pause"), this }

            function h(n) { var i = n || {}; if (!E) { var a = t.extend(!0, O, i); return P = e.objId(a.id), P && P.length ? (l(a.text), P[0].style.display = "-webkit-box", A && A.show(), w.call(this, "show")) : r(a), O.timeout && (B && clearTimeout(B), B = setTimeout(function(e) { p() }, O.timeout)), N = !0, this } }

            function p() { if (!E) return P = e.objId(j), O.appendTo ? (P.css("display", "none"), A && A.hide()) : P && P.length && (P.css("display", "none"), A && A.hide()), N = !1, w.call(this, "hide"), this }

            function g(e) {
                var e = 1 == e;
                d(), C && C.off("click.bui"), y("show"), y("hide"), y("start"), y("stop"), y("pause"), y("remove"), A && A.destroy(e), E = !0
            }

            function v(t) { var n = { mask: A || {} }; return e.widget.call(n, t) }

            function m(t, n) { return e.option.call(I, t, n) }

            function b(t, n) { return e.on.apply(I, arguments), this }

            function y(t, n) { return e.off.apply(I, arguments), this }

            function w(t) { I.self = this == window || this == I ? null : this, e.trigger.apply(I, arguments) }
            var x, k, T = { appendTo: "", width: 30, height: 30, text: "", onlyText: !1, mask: !0, zIndex: "", autoTrigger: !1, autoClose: !0, timeout: 0, opacity: 0, display: "block", template: null, onBeforeInit: null, onInited: null, callback: null },
                I = { name: "loading", handle: {}, on: b, off: y, start: r, stop: d, isLoading: u, pause: f, text: l, showRing: c, hideRing: s, show: h, hide: p, destroy: g, widget: v, option: m, config: O, init: i },
                O = I.config = t.extend(!0, {}, T, e.config.loading, n),
                C = (t("body"), null),
                j = e.guid(),
                L = j + "-mask",
                P = e.objId(j),
                S = !1,
                E = !1,
                N = !1,
                B = null;
            O.id = j;
            var R = O.callback;
            O.callback = function(e) { O.autoClose && d(), R && R.call(I, e) };
            var D = t.extend(!0, {}, O, { id: L }),
                A = O.mask ? e.mask(D) : null;
            return i(O), I
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.slide = function(n) {
            function i(n) {
                var i = t.extend(!1, ge, n);
                if (!1 === (i.onBeforeInit && i.onBeforeInit.call(pe, i))) return this;
                if (!i.id) return void e.showLog("slide id不能为空", "mue.slide.init");
                if (V = e.obj(i.id), i.relative) {
                    var l = V.parent().width();
                    i.width = l
                }
                if (ge = pe.config = i, G = i.direction, "function" == typeof i.template) V.html(i.template.call(pe, i.data || []) || "");
                else if (i.data && !i.template) {
                    var c = V.find(i.main).length <= 0;
                    if (c) {
                        var s = N(i);
                        V.html(s)
                    }
                    var u = V.find(i.children),
                        d = B.call(pe, i.data);
                    u.html(d)
                }
                if (i.needLoading && (ke = mue.loading({ appendTo: V })), $ = 0 == i.menu.indexOf("#") ? e.obj(i.menu) : V.find(i.menu).eq(0), q = $.children(), U = V.find(i.children).eq(0), W = U.parent(), Y = U.children(), de = Y.length, i.loop && Y.length) {
                    var f = Y.eq(Y.length - 1).clone(!0),
                        h = Y.eq(0).clone(!0);
                    U.prepend(f).append(h), Y = U.children();
                    var p = Y.length - 1;
                    H("afterto"), M("afterto", function(e) { 0 == e && g(p - 1, "none"), e == p && g(1, "none") }), g(1, "none");
                    !V.hasClass(".mue-slide-loop") && V.addClass("mue-slide-loop"), ye = !0
                }
                if (i.cross && Y.length) {
                    var m = function(e) {
                        var t = Y.eq(e);
                        t.removeClass("mue-cross-prev").removeClass("mue-cross-next"), t.prev().removeClass("mue-cross-next").addClass("mue-cross-prev"), t.next().removeClass("mue-cross-prev").addClass("mue-cross-next")
                    };
                    !V.hasClass(".mue-slide-cross") && V.addClass("mue-slide-cross"), H("to", m), M("to", m), i.loop ? g(1, "none") : g(0, "none"), we = !0
                }
                return a(i), r(i), ue = i.autoplay, ue && v(), be || (o(), Oe = !0), me = U.children(".active").length ? U.children(".active").index() : me || i.index, parseInt(i.index) > 0 ? g(i.index, "none") : g(me, "none"), i.onInited && i.onInited.call(pe, i), this
            }

            function a(e) {
                le = document.documentElement.clientWidth, ce = document.documentElement.clientHeight, e.height = String(e.height).indexOf("%") > -1 ? parseFloat(e.height) / 100 * ce : parseFloat(e.height), e.width = String(e.width).indexOf("%") > -1 ? parseFloat(e.width) / 100 * le : parseFloat(e.width), Y = U.children();
                var t = V.parents(".mue-page"),
                    n = (V.parents("main"), V[0] && V[0].offsetTop || 0),
                    i = t.children(e.header),
                    a = (i[0] && i[0].offsetHeight, t.children(e.footer)),
                    o = a[0] && a[0].offsetHeight || 0;
                ae = ce - (o || 0) - n, ae = V.parent("main").length ? V.parent("main").height() : ae, oe = 0 == e.height ? ae : e.height;
                var r = "static" == $.parent().css("position") ? $.css("position") : $.parent().css("position");
                re = V.find(e.menu).length ? "absolute" == r || "fixed" == r ? oe : oe - ($[0] && $[0].offsetHeight || 0) : oe, Q = e.fullscreen ? ce : 0 == e.height ? re : e.height, Z = e.fullscreen ? le : e.width || le, _ = Y.length, ee = "x" == G ? Z / ge.visibleNum : Z, ie = "y" == G ? Q / ge.visibleNum : Q, se = "y" == ge.direction ? ie * ge.scrollNum : ee * ge.scrollNum, J = Z * _ / ge.visibleNum, X = Q * _ / ge.visibleNum
            }

            function o() {
                var e = function(e) {
                    var n = t(this).hasClass("active"),
                        i = t(this).index(),
                        a = t(this).attr("disabled"),
                        o = t(this).hasClass("disabled") || "" == a || "true" == a || "disabled" == a;
                    if (e.currentIndex = i, e.prevIndex = me, !1 === (ge.onBeforeTo && ge.onBeforeTo.call(pe, e))) return !1;
                    n || o || (ge.animate ? g(i) : g(i, "none"), ue && v()), e.stopPropagation()
                };
                0 == ge.menu.indexOf("#") ? $.off("click.bui", "li").on("click.bui", "li", e) : V.off("click.bui", ge.menu + " li").on("click.bui", ge.menu + " li", e), V.off("click.bui", ge.prev).on("click.bui", ge.prev, w), V.off("click.bui", ge.next).on("click.bui", ge.next, x);
                var n = ge.children + " " + ge.item;
                ge.data && V.off("click.bui", n).on("click.bui", n, function(e) {
                    var n = t(e.currentTarget),
                        i = n.attr("href"),
                        a = "true" == n.attr("data-reload"),
                        o = "true" == n.attr("data-iframe"),
                        r = "true" == n.attr("data-page"),
                        l = "true" == n.attr("data-close"),
                        c = "true" == n.attr("data-synchistory");
                    i && r ? mue.page({ url: i, iframe: o, close: l, synchistory: c }) : i && mue.load({ url: i, reload: a, iframe: o }), z.call(pe, "click", e), ge.callback && ge.callback.call(pe, e, pe), e.stopPropagation()
                }), O(), ge.swipe || I(), be = !0
            }

            function r(e) {
                Y = U.children(), de = e.loop ? Y.length - 2 : Y.length, Ce = { x: { swipeDir: "swipeleft", swipeDir2: "swiperight", width: se }, y: { swipeDir: "swipeup", swipeDir2: "swipedown", width: se } }, fe = { x: { parentInitKey: "width", parentInitValue: J, boxCss: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;", boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + ee + "px;height:" + ie + "px;" }, y: { parentInitKey: "height", parentInitValue: X, box: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;-webkit-box-orient: vertical;box-orient: vertical;", boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + ee + "px;height:" + ie + "px;" } }, W[fe[G].parentInitKey](fe[G].parentInitValue);
                var n, i = Y.length;
                for (n = 0; n < i; n++) {
                    var a = Y[n].getAttribute("data-scroll"),
                        o = null == a ? ge.scroll : "false" != a;
                    fe[G].boxItemCSS = fe[G].boxItemCSS + (o ? "overflow:auto;" : "overflow:hidden;"), Y[n].style.cssText = fe[G].boxItemCSS
                }
                try { U[0] && (U[0].style.cssText = fe[G].boxCss) } catch (e) { console.log("请检查下children参数是否正确.", "mue.slide id:" + ge.id) }
                var r = "y" == G && ge.visibleNum > 1 ? re / ge.visibleNum : re,
                    c = ge.zoom ? oe / 100 + "rem" : oe + "px",
                    s = ge.zoom ? r / 100 + "rem" : r + "px";
                ge.zoom;
                if (ge.fullscreen ? (t("main").css({ position: "static" }), V.addClass("mue-slide-fullscreen").css({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, "z-index": 10, overflow: "hidden", width: Z, height: ce }), Y.addClass(ge.alignClassName || "mue-box-center").css("height", ce)) : (V.css({ position: "relative", overflow: "hidden", width: Z, height: c }), Y.addClass(ge.alignClassName).height(s)), ge.autoheight && V.addClass("mue-slide-autoheight"), ge.autopage) {
                    var u = l(),
                        d = U.find(".active").index() + 1,
                        f = C(u, d);
                    V.children(".mue-slide-head").remove(), V.append(f), q = V.find(ge.menu).eq(0).children()
                }
            }

            function l() {
                var e = de,
                    t = parseInt(e / ge.visibleNum),
                    n = parseInt(e / ge.scrollNum),
                    i = 1 == ge.visibleNum ? t : t + 1,
                    a = 1 == ge.scrollNum ? n : n + 1,
                    o = 1 == ge.scrollNum || ge.scrollNum == e ? i : a;
                return o = ge.loop ? o + 2 : o
            }

            function c(t) {
                var n = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches,
                    i = Le ? n[0] : t;
                return ve.x1 = i.pageX, ve.y1 = i.pageY, ve.direction = "", !1 !== (ge.onBeforeTouchstart && ge.onBeforeTouchstart.call(pe, t, ve)) && (ge.stopHandle && e.unit.checkTargetInclude(t.target, ge.stopHandle) ? void(Ee = !1) : (Be = -me * se, Re = -me * se, n.length > 1 || t.scale && 1 !== t.scale ? void f("x" == G ? Be : Re) : (ue && (m(), ue = !0), z.call(pe, "touchstart", t, ve), ge.onStart && ge.onStart.call(pe, t, ve, pe), void(Ee = !0))))
            }

            function s(n) {
                var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches;
                if (i.length > 1 || n.scale && 1 !== n.scale) return void f("x" == G ? Be : Re);
                if (Ee) {
                    var a = Le ? i[0] : n;
                    ve.x2 = a.pageX, ve.y2 = a.pageY;
                    if (!1 === (ge.onBeforeTouchmove && ge.onBeforeTouchmove.call(pe, n, ve))) return !1;
                    ve.direction || (ve.direction = e.swipeDirection(ve.x1, ve.x2, ve.y1, ve.y2)), "swipeleft" !== ve.direction && "swiperight" !== ve.direction || (n.preventDefault(), n.stopPropagation()), z.call(pe, "touchmove", n, ve);
                    try {
                        if ("y" == G && ge.scroll) {
                            var o = t(n.target).closest(".active"),
                                r = o[0].scrollTop || 0,
                                c = o[0].scrollHeight || 0,
                                s = o[0].offsetHeight || 0;
                            if ("swipedown" === ve.direction && r > 1) return void(Ne = !1);
                            if ("swipeup" === ve.direction && c - r - s >= 2) return void(Ne = !1)
                        }
                    } catch (n) {}
                    te = ve.x2 - ve.x1, ne = ve.y2 - ve.y1, Ce.x.move = Be + te, Ce.x.absDelta = Math.abs(te), Ce.y.move = Re + ne, Ce.y.absDelta = Math.abs(ne);
                    var u = l();
                    ve.direction !== Ce[G].swipeDir && ve.direction !== Ce[G].swipeDir2 || (ge.delay && Ce[G].absDelta > ge.distance && f(Ce[G].move, "none"), ge.delay || (ge.bufferEffect ? f(Ce[G].move, "none") : 0 == me && u > 1 && ("swipeleft" == ve.direction || "swipeup" == ve.direction) ? f(Ce[G].move, "none") : me == u - 1 && u > 1 && ("swiperight" == ve.direction || "swipedown" == ve.direction) ? f(Ce[G].move, "none") : me > 0 && me < u - 1 && u > 1 && f(Ce[G].move, "none"), n.preventDefault()), ge.onMove && ge.onMove.call(pe, n, ve, pe)), Ne = !0
                }
            }

            function u(e) {
                switch (z.call(pe, "touchend", e, ve), ve.direction) {
                    case "swiperight":
                    case "swipedown":
                        e.currentIndex = me - 1;
                        break;
                    case "swipeleft":
                    case "swipeup":
                        e.currentIndex = me + 1
                }
                if (e.prevIndex = me, !1 === (ge.onBeforeTouchend && ge.onBeforeTouchend.call(pe, e, ve))) return !1;
                if (Ne) {
                    if (te = ve.x2 - ve.x1, ne = ve.y2 - ve.y1, Ce.x.delta = Be, Ce.x.absDelta = Math.abs(te), Ce.y.delta = Re, Ce.y.absDelta = Math.abs(ne), "x" != ge.direction || "swipeleft" != ve.direction && "swiperight" != ve.direction) { if ("y" == ge.direction && ("swipeup" == ve.direction || "swipedown" == ve.direction)) var t = ge.onBeforeTo && ge.onBeforeTo.call(pe, e) } else var t = ge.onBeforeTo && ge.onBeforeTo.call(pe, e);
                    if (!1 === t) return f(Ce[G].delta), "swipeleft" != ve.direction && "swiperight" != ve.direction || e.stopPropagation(), Pe += ve.y2 - ve.y1, Se += ve.x2 - ve.x1, ve.lastX = Se, ve.lastY = Pe, ve = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, Ee = !1, Ne = !1, p(), !1;
                    Ce[G].absDelta > ge.distance ? (d.call(this, e, ve, Ce), ge.onEnd && ge.onEnd.call(pe, e, ve, pe)) : Ce[G].absDelta < ge.distance && f(Ce[G].delta), ue && v(), "swipeleft" != ve.direction && "swiperight" != ve.direction || e.stopPropagation(), Pe += ve.y2 - ve.y1, Se += ve.x2 - ve.x1, ve.lastX = Se, ve.lastY = Pe, ve = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, Ee = !1, Ne = !1, p()
                }
            }

            function d(e, t, i) {
                k(), me = U.children(".active").index();
                var a;
                if (t.direction == i[G].swipeDir) {
                    var o = Y.length,
                        r = o - ge.visibleNum,
                        l = o % ge.scrollNum != 0 ? r + 1 : r / ge.scrollNum + 1;
                    if (me >= l - 1) a = me, i[G].delta = -a * i[G].width, f(i[G].delta), me = a, T(a), z.call(pe, "last", a);
                    else if (a = me + 1, i[G].delta = -a * i[G].width, f(i[G].delta), me = a, T(a), n.autoload) j(me);
                    else {
                        Y.eq(me);
                        if (n.loop && me > de) return;
                        z.call(pe, "to", a)
                    }
                    z.call(pe, "next", a)
                } else if (t.direction == i[G].swipeDir2)
                    if (me > 0) {
                        if (a = me - 1, i[G].delta = -a * i[G].width, f(i[G].delta), me = a, T(a), n.autoload) j(me);
                        else {
                            Y.eq(me);
                            if (n.loop && 0 == me) return;
                            z.call(pe, "to", a)
                        }
                        z.call(pe, "prev", a)
                    } else a = me, i[G].delta = -a * i[G].width, f(i[G].delta), me = a, T(a), z.call(pe, "first", a)
            }

            function f(e, t) {
                var n = ge.transition,
                    t = t || "all " + n + "ms",
                    e = e || 0;
                switch (G) {
                    case "x":
                        h(e + "px", 0, t, W);
                        break;
                    case "y":
                        h(0, e + "px", t, W)
                }
                return this
            }

            function h(e, t, n, i) {
                var a = t || 0;
                "y" == G && ge.zoom && String(t).indexOf("%") <= -1 && (a = parseInt(t) / 100 + "rem");
                var n, i = i || V,
                    e = e || 0,
                    o = e,
                    r = String(e).indexOf("%") > -1 ? String(e) : o,
                    l = String(t).indexOf("%") > -1 ? String(t) : a;
                n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms";
                try { i.css({ "-webkit-transition": n, transition: n, "-webkit-transform": "translate(" + r + "," + l + ")", transform: "translate(" + r + "," + l + ")" }) } catch (e) { console.log(e.message) }
            }

            function p(e) { W.one("webkitTransitionEnd", function() { W.css({ "-webkit-transition": "none", transition: "none" }), e && e.call(pe, me), z.call(pe, "afterto", me) }) }

            function g(e, i, a) {
                k();
                var o = 0,
                    r = null,
                    a = 0 != a;
                if ("string" == typeof e && e.indexOf(".html") > -1) {
                    var c = [];
                    q.each(function(n, i) {
                        var a = t(i).attr("href") || void 0;
                        c[n] = a, a == e && (o = n)
                    })
                } else o = parseInt(e);
                "function" == typeof i && (r = i, i = "");
                var s = { x: { transform: -o * parseFloat(se) }, y: { transform: -o * parseFloat(se) } },
                    u = l();
                if (t(".mue-slide-video video").each(function(e, t) { this.pause() }), o >= u || o < 0) return !1;
                if (f(s[G].transform, i), me = o, T(o), ue && v(), n.autoload) j(me);
                else {
                    Y.eq(me);
                    if (!a) return;
                    z.call(pe, "to", o)
                }
                return p(r), this
            }

            function v(e) {
                var e = e || ge.interval;
                m(), ue = !0;
                var t = me;
                K = setInterval(function() {
                    var e = l();
                    t >= 0 && t < e - 1 ? t += 1 : t = 0, g(t)
                }, e), z.call(pe, "play")
            }

            function m(e) {
                if (K) try { window.clearInterval(K), ue = !1, z.call(pe, "stop") } catch (e) {}
                return this
            }

            function b(e) { v(e) }

            function y() { return ge.loop ? me - 1 : me }

            function w() { var e = me - 1; return ge.loop && e < 1 && (e = parseInt(de / ge.scrollNum)), g(e), z.call(pe, "prev", e), this }

            function x() { var e = me + 1; return ge.loop && e > parseInt(de / ge.scrollNum) + 1 && (e = 1), g(e), z.call(pe, "next", e), this }

            function k(t) { t = ge, $ = 0 == t.menu.indexOf("#") ? e.obj(t.menu) : V.find(t.menu).eq(0), q = $.children(), U = V.find(t.children).eq(0), W = U.parent(), Y = U.children() }

            function T(e) { e = e || 0, Y.removeClass("active"), Y.eq(e).addClass("active"), q.removeClass("active"), q.eq(e).addClass("active") }

            function I() { return V.off("touchstart", ge.children, c).off("touchmove", ge.children, s).off("touchend", ge.children, u).off("touchcancel"), z.call(pe, "lock"), this }

            function O(e) { return V.on("touchstart", ge.children, c).on("touchmove", ge.children, s).on("touchend", ge.children, u).on("touchcancel", function() { f("x" == G ? Be : Re) }), z.call(pe, "unlock"), this }

            function C(e, t) {
                var n, i = "",
                    t = t || 1,
                    a = e;
                for (i += '<div class="mue-slide-head mue-align-' + ge.alignPage + '">', i += "<ul >", n = 1; n < Number(a) + 1; n++) i += "<li " + (n == t ? 'class="active"' : "") + ">" + n + "</li>";
                return i += "</ul >", i += "</div >"
            }

            function j(t) {
                var n = Y.eq(t),
                    i = q.eq(t),
                    a = i.attr("href") || "";
                if (e.array.compare(Te, t)) return z.call(pe, "to", t, "200"), !1;
                ge.autoload && (a ? (a = e.unit.resolvePath(a), a in xe ? (n.html(xe[a]), Te.push(t), !Oe && z.call(pe, "load", t, status), !Oe && z.call(pe, "to", t, status), Oe = !1) : (xe[a] = "", ke && ke.show(), loader && loader.import(a, function(e) { xe[a] = e, n.html(e), Te.push(t), z.call(pe, "load", t, status), !Oe && z.call(pe, "to", t, status), Oe = !1, ke && ke.hide() }, function(e, n) { z.call(pe, "loadfail", t, n), ke && ke.hide() }))) : (!Oe && z.call(pe, "to", t), Oe = !1))
            }

            function L(t) {
                var n, i = e.guid(),
                    t = t || 1,
                    a = "";
                for (n = 0; n < t; n++) a += '<li id="' + i + '" style="-webkit-box-flex:1;box-flex:1;width:' + ee + "px;height:" + ie + 'px;"></li>';
                U.append(a), Y = U.children();
                var o = ee * Y.length;
                _ = Y.length, W.width(o)
            }

            function P(n) {
                var i = { id: null, url: "", preload: !1, param: {}, success: null, fail: null },
                    a = t.extend(!0, {}, i, n),
                    o = a.url || "",
                    r = null,
                    l = Y.length ? me + 1 : 0;
                if (a.id) r = e.obj(a.id);
                else {
                    var c = Y.eq(l);
                    c.length ? r = c : (L(), Y = U.children(), r = Y.eq(l))
                }
                if (o)
                    if (me = l, Ie[l] = a.param, o in xe) { e.array.compare(Te, l) || (Te.push(l), r.html(xe[o]), a.success && a.success.call(pe, xe[o], "cache"), z.call(pe, "load", xe[o], "cache")), a.preload || g(l) } else loader.importHtml(o, function(t, n) { t ? (xe[o] = t, e.array.compare(Te, l) || (Te.push(l), r.html(xe[o]), a.success && a.success.call(pe, xe[o], n), z.call(pe, "load", t, n)), a.preload || g(l)) : (a.fail && a.fail.call(r, t, n), z.call(pe, "loadfail", t, n)) }, function(e, t) { a.fail && a.fail.call(pe, e, t), z.call(pe, "loadfail", e, t) });
                return this
            }

            function S(e) { var e = "number" == typeof e ? e : me; return Ie[e] || {} }

            function E(e) { return Y.eq(me)[0] }

            function N(e) { return '<div class="' + e.main.substr(1) + '">\n              <ul class="mue-slide-main-ul">\n              </ul>\n            </div>' }

            function B(e) {
                var e = e || [],
                    t = "";
                return e.length && e.forEach(function(e, n) {
                    var i = e.title ? '<div class="mue-slide-title">' + e.title + "</div>" : "",
                        a = e.background ? '<div class="mue-slide-img" style="background-image:url(' + e.background + ')"></div>' : '<div class="mue-slide-img"><img src="' + e.image + '" alt="' + (e.title || "") + '"/></div>',
                        o = "";
                    if ("video" == e.type || e.video) {
                        var r = e.video || {};
                        o = '<div class="mue-slide-video">\n                        <video class="mue-video" src="' + (e.src || r.src) + '" width="' + (e.width || r.width || "100%") + '" height="' + (e.height || r.height || "100%") + '" poster="' + (e.poster || r.poster || "") + '" ' + (e.preload || r.preload ? "preload" : "") + " " + (e.muted || r.muted ? "muted" : "") + " " + (e.autoplay || r.autoplay ? "autoplay" : "") + " " + (e.controls || r.controls ? "controls" : "") + " " + (e.loop || r.loop ? "loop" : "") + " " + (e.fullscreen || r.fullscreen ? "fullscreen" : "") + "></video>\n                        </div>"
                    }
                    t += '<li data-id="' + (e.id || "") + '" href="' + (e.url || "") + '" data-reload="' + (e.reload || !1) + '" data-iframe="' + (e.iframe || !1) + '" data-page="' + (e.page || !1) + '" data-close="' + (e.page || !0) + '" data-synchistory="' + (e.synchistory || !1) + '">\n                  ' + (o || a) + "\n                  " + i + "\n                  </li>"
                }), t
            }

            function R(e) { var i = t.extend(!0, {}, n, e); return a(i), r(i), g(me, "none"), this }

            function D(e) {
                var e = 1 == e;
                m(), $ && ($.off("click.bui"), e && $.remove()), V && (V.off(), e && V.remove()), H("stop"), H("play"), H("first"), H("last"), H("to")
            }

            function A(t) { var n = { loading: ke }; return e.widget.call(n, t) }

            function F(t, n) { return e.option.call(pe, t, n) }

            function M(t, n) { return e.on.apply(pe, arguments), this }

            function H(t, n) { return e.off.apply(pe, arguments), this }

            function z(t) { pe.self = this == window || this == pe ? null : this, e.trigger.apply(pe, arguments) }
            var V, $, q, U, W, Y, _, K, J, X, Z, Q, G, ee, te, ne, ie, ae, oe, re, le, ce, se, ue, de, fe, he = { id: "", menu: ".mue-slide-head > ul", children: ".mue-slide-main > ul", main: ".mue-slide-main", header: "header", footer: "footer", item: "li", prev: ".mue-slide-prev", next: ".mue-slide-next", alignClassName: "", alignPage: "center", stopHandle: "", width: 0, height: 0, data: null, zoom: !0, transition: 200, interval: 5e3, relative: !1, swipe: !0, animate: !0, delay: !1, bufferEffect: !0, visibleNum: 1, scrollNum: 1, distance: 40, direction: "x", autoplay: !1, loop: !1, cross: !1, autoheight: !1, autoinit: !0, scroll: !1, index: 0, fullscreen: !1, autopage: !1, autoload: !1, needLoading: !1, async: !0, template: null, callback: null, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeTo: null, onBeforeInit: null, onInited: null, onStart: null, onMove: null, onEnd: null },
                pe = { name: "slide", handle: {}, on: M, off: H, to: g, load: P, resize: R, getPageParams: S, getPages: l, $active: E, prev: w, next: x, stop: m, start: b, lock: I, index: y, unlock: O, destroy: D, widget: A, option: F, config: ge, init: i },
                ge = pe.config = t.extend(!0, {}, he, e.config.slide, n),
                ve = {},
                me = 0,
                be = !1,
                ye = !1,
                we = !1,
                xe = {},
                ke = null,
                Te = [],
                Ie = [],
                Oe = !1,
                Ce = { x: {}, y: {} },
                je = /hp-tablet/gi.test(navigator.appVersion),
                Le = "ontouchstart" in window && !je,
                G = "",
                Pe = 0,
                Se = 0,
                Ee = !1,
                Ne = !1,
                ve = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" };
            try { ge.autoinit && i(ge) } catch (t) { e.showLog(t) }
            var Be, Re;
            return pe
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.swipe = function() {
            var n = null,
                i = null;
            return function(a) {
                function o(i) { var a = t.extend(!0, X, i); return a.onBeforeInit && a.onBeforeInit.call(J, a), pe = !1, a.id ? (A = e.obj(a.id), z = a.width > 0 ? a.width : Te.clientWidth, V = a.height > 0 ? a.height : Te.clientHeight, F = A.children(a.handle), M = G ? A.children() : A, q = M.children(a.swipeleft), U = M.children(a.swiperight), W = M.children(a.swipeup), Y = M.children(a.swipedown), _ = parseFloat(a.movingDistance), H = _, c(), ee || (r(a), ee = !0), n && n.close(), de || (S(), L()), a.onInited && a.onInited.call(J, a), this) : void e.showLog("swipe id不能为空", "mue.swipe.init") }

                function r(e) {
                    M.css({ width: z, position: "relative", overflow: "hidden" }), !G && M.css({ height: V }), F.css({ position: "relative", "z-index": 10 });
                    try {
                        var t = q.attr("data-moving") || _,
                            n = U.attr("data-moving") || _,
                            i = W.attr("data-moving") || _,
                            a = Y.attr("data-moving") || _,
                            o = l(t),
                            r = l(n),
                            c = l(i),
                            s = l(a);
                        ne && q.css({ width: o }), te && U.css({ width: r }), ae && Y.css({ height: s }), ie && W.css({ height: c })
                    } catch (e) {}
                }

                function l(e) { return X.zoom ? e / 100 + "rem" : e + "px" }

                function c() { "x" == Q ? (te = !!U.length, ne = !!q.length) : "y" == Q ? (ae = !!Y.length, ie = !!W.length) : "xy" == Q && (ae = !!Y.length, ie = !!W.length, ne = !!q.length, te = !!U.length) }

                function s(n) {
                    var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches;
                    if (i.length > 1 || n.scale && 1 !== n.scale) return void(be = !1);
                    if (X.stopHandle && e.unit.checkTargetInclude(n.target, X.stopHandle)) return void(be = !1);
                    var a = me ? i[0] : n;
                    if (Z.id = X.id, Z.x1 = a.pageX, Z.y1 = a.pageY, Z.direction = "", $ = t(n.target).closest(X.handle), !1 === (X.onBeforeTouchstart && X.onBeforeTouchstart.call(J, n, Z))) return !1;
                    D.call(J, "touchstart", n, Z);
                    var o = t(n.target).closest(".mue-scroll"),
                        l = t(n.target).closest(".mue-tab-main li.active"),
                        s = t(n.target).closest("main"),
                        u = t(n.target).closest(".swipedown"),
                        d = t(n.target).closest(".swipeup"),
                        f = u.length ? u : d.length ? d : $;
                    if (Z.scrollObj = o.length ? o : l.length ? l : s.length ? s : u.length ? u : f, Ie = Z.scrollObj.scrollTop() || 0, G && !ge) {
                        F = $, M = F.parent(), q = M.children(X.swipeleft), U = M.children(X.swiperight), W = M.children(X.swipeup), Y = M.children(X.swipedown), c();
                        M.index();
                        r(X), (0 == X.height || "" == M[0].style.height) && M.height($[0] && $[0].offsetHeight)
                    }
                    if (Z.movingleft = parseInt(q.attr("data-moving") || _), Z.movingright = parseInt(U.attr("data-moving") || _), Z.movingup = parseInt(W.attr("data-moving") || _), Z.movingdown = parseInt(Y.attr("data-moving") || _), $.length) {
                        var h = !1;
                        switch (Q) {
                            case "x":
                                h = !(!ne && !te);
                                break;
                            case "y":
                                h = !(!ie && !ae);
                                break;
                            case "xy":
                                h = !!(ne || te || ie || ae)
                        }
                    }
                    be = void 0 == h || 1 == h
                }

                function u(t) {
                    var a = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches;
                    if (a.length > 1 || t.scale && 1 !== t.scale) return void k();
                    var o = me ? a[0] : t;
                    if (Z.x2 = o.pageX, Z.y2 = o.pageY, !1 === (X.onBeforeTouchmove && X.onBeforeTouchmove.call(J, t, Z))) return !1;
                    if (D.call(J, "touchmove", t, Z), n && t.stopPropagation(), be) {
                        var r = Z.scrollObj.scrollTop() <= 0,
                            l = (Z.scrollObj[0] && Z.scrollObj[0].scrollHeight) - (Z.scrollObj[0] && Z.scrollObj[0].offsetHeight) - Z.scrollObj.scrollTop() <= 2,
                            c = Z.y2 - Z.y1 > 0,
                            s = Z.y2 - Z.y1 < 0;
                        if (le) { if (c && r) return ye = !1, void t.preventDefault(); if (s && l && t.preventDefault(), s && !l) return void(ye = !1); if (c && !r) return void(ye = !1) }
                        if (ae && !le && (c && r && t.preventDefault(), s && l && t.preventDefault()), !ae && c && r && t.preventDefault(), ce) { if (c && r && t.preventDefault(), s && l) return t.preventDefault(), void(ye = !1); if (s && !l) return void(ye = !1); if (c && !r) return void(ye = !1) }
                        Z.direction || (Z.direction = e.swipeDirection(Z.x1, Z.x2, Z.y1, Z.y2)), "swipeleft" !== Z.direction && "swiperight" !== Z.direction || t.preventDefault();
                        try {
                            if ("swipeup" === Z.direction || "swipedown" === Z.direction) {
                                var u = A[0].scrollTop || 0,
                                    d = (A[0].scrollHeight, $[0].scrollTop, $[0].scrollHeight, Z.scrollObj[0] && Z.scrollObj[0].scrollTop || 0),
                                    p = Z.scrollObj[0] && Z.scrollObj[0].offsetHeight || 0,
                                    g = Z.scrollObj[0] && Z.scrollObj[0].scrollHeight || 0,
                                    v = !1,
                                    m = !1;
                                u <= 0 && d <= 0 && (v = !0), g - d - p <= 2 && (m = !0)
                            }
                        } catch (t) {}
                        var b = "swiperight" == Z.direction || "swipeleft" == Z.direction ? Z.x2 - Z.x1 : Z.y2 - Z.y1,
                            y = 0;
                        Z.deltax = ge ? Math.abs(b) : Math.abs(b) + xe, !te || "swiperight" != Z.direction || re || ge || i ? !v || !ae || "swipedown" != Z.direction || le || ge || i ? !ne || "swipeleft" != Z.direction || oe || ge || i ? !m || !ie || "swipeup" != Z.direction || ce || ge || i ? "swipeleft" == Z.direction && re ? (H = Z.movingright, y = f(Z, Z.movingright), ue && P(-Z.deltax, 0, "none", i || U), se && P(-y, 0, "none", F), D.call(J, "movingleft", t, Z), ye = !0, t.stopPropagation()) : "swipeup" == Z.direction && le ? (H = Z.movingdown, y = f(Z, Z.movingdown), ue && P(0, -Z.deltax, "none", i || Y), se && P(0, -y, "none", F), D.call(J, "movingup", t, Z), ye = !0, t.preventDefault(), t.stopPropagation()) : "swiperight" == Z.direction && oe ? (H = Z.movingleft, y = f(Z, Z.movingleft), ue && P(Z.deltax, 0, "none", i || q), se && P(y, 0, "none", F), D.call(J, "movingright", t, Z), ye = !0, t.stopPropagation()) : "swipedown" == Z.direction && ce && (H = Z.movingup, y = f(Z, Z.movingup), ue && P(0, Z.deltax, "none", i || W), se && P(0, y, "none", F), D.call(J, "movingdown", t, Z), ye = !0, t.preventDefault(), t.stopPropagation()) : (H = Z.movingup, y = h(Z, Z.movingup), ue && P(0, y, "none", W), se && P(0, -Z.deltax, "none", F), D.call(J, "movingup", t, Z), ye = !0, t.preventDefault(), t.stopPropagation()) : (H = Z.movingleft, y = h(Z, Z.movingleft), ue && P(y, 0, "none", q), se && P(-Z.deltax, 0, "none", F), D.call(J, "movingleft", t, Z), ye = !0, t.stopPropagation()) : (H = Z.movingdown, y = f(Z, Z.movingdown), ue && P(0, y, "none", Y), se && P(0, Z.deltax, "none", F), D.call(J, "movingdown", t, Z), ye = !0, t.preventDefault(), t.stopPropagation()) : (H = Z.movingright, y = f(Z, Z.movingright), ue && P(y, 0, "none", U), se && P(Z.deltax, 0, "none", F), D.call(J, "movingright", t, Z), ye = !0, t.stopPropagation())
                    }
                }

                function d(e) {
                    if (D.call(J, "touchend", e, Z), !1 === (X.onBeforeTouchend && X.onBeforeTouchend.call(J, e, Z))) return !1;
                    if (ye) {
                        var t = "swiperight" == Z.direction || "swipeleft" == Z.direction ? Math.abs(Z.x2 - Z.x1) : Math.abs(Z.y2 - Z.y1),
                            n = "";
                        switch (Z.direction) {
                            case "swiperight":
                                n = "swipeleft";
                                break;
                            case "swipeleft":
                                n = "swiperight";
                                break;
                            case "swipeup":
                                n = "swipedown";
                                break;
                            case "swipedown":
                                n = "swipeup"
                        }
                        te && "swiperight" == Z.direction && t > X.distance && !re && !ge ? (g(), D.call(J, Z.direction, e, Z), D.call(J, "open", Z.direction)) : ne && "swipeleft" == Z.direction && t > X.distance && !oe && !ge ? (p(), D.call(J, Z.direction, e, Z), D.call(J, "open", Z.direction)) : ie && "swipeup" == Z.direction && t > X.distance && !ce && !ge ? (v(), D.call(J, Z.direction, e, Z), D.call(J, "open", Z.direction)) : ae && "swipedown" == Z.direction && t > X.distance && !le && !ge ? (m(), D.call(J, Z.direction, e, Z), D.call(J, "open", Z.direction)) : ge && t < X.distance ? (ne && oe && p(), te && re && g(), ie && ce && v(), ae && le && m(), D.call(J, Z.direction, e, Z), X.alwaysTrigger && D.call(J, "open", Z.direction)) : ge && t > X.distance ? (ne && oe && y(), te && re && b(), ie && ce && w(), ae && le && x(), D.call(J, Z.direction, e, Z), D.call(J, "close", n)) : !ge && t < X.distance && ("swipeleft" === Z.direction && ne && !oe && y(), "swiperight" === Z.direction && te && !re && b(), "swipeup" === Z.direction && ie && !ce && w(), "swipedown" === Z.direction && ae && !le && x(), X.alwaysTrigger && D.call(J, "close", n), D.call(J, Z.direction, e, Z)), we = Z.direction, be = !1, ye = !1, e.stopPropagation()
                    }
                }

                function f(e, t) { var n = -t + e.deltax; return n = n > 0 ? 0 : n }

                function h(e, t) { var n = t - e.deltax; return n = n > t ? t : n }

                function p(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || q, e.handle = e.handle || F, n && n.close(), ge = !0, oe = !0, G && (n = J, i = q, Te.addEventListener("click", j, !0)), ue && P(0, 0, e.transition, e.target), se && P(-H, 0, e.transition, e.handle) }

                function g(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || U, e.handle = e.handle || F, n && n.close(), ge = !0, re = !0, G && (n = J, i = U, Te.addEventListener("click", j, !0)), ue && P(0, 0, e.transition, e.target), se && P(H, 0, e.transition, e.handle) }

                function v(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || W, e.handle = e.handle || F, n && n.close(), ge = !0, ce = !0, G && (n = J, i = W, Te.addEventListener("click", j, !0)), ue && P(0, 0, e.transition, e.target), se && P(0, -H, e.transition, e.handle) }

                function m(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || Y, e.handle = e.handle || F, n && n.close(), ge = !0, le = !0, G && (n = J, i = Y, Te.addEventListener("click", j, !0)), ue && P(0, 0, e.transition, e.target), se && P(0, H, e.transition, e.handle) }

                function b(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = U, e.handle = he || F, ge = !1, re = !1, G && (n = null, i = null, fe = null, he = null, Te.removeEventListener("click", j, !0)), ue && P(-(H + 1), 0, e.transition, e.target), se && P(xe, 0, e.transition, e.handle) }

                function y(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = q, e.handle = he || F, ge = !1, oe = !1, G && (n = null, i = null, fe = null, he = null, Te.removeEventListener("click", j, !0)), ue && P("101%", 0, e.transition, e.target), se && P(-xe, 0, e.transition, e.handle) }

                function w(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = W, e.handle = he || F, ge = !1, ce = !1, G && (n = null, i = null, fe = null, he = null, Te.removeEventListener("click", j, !0)), ue && P(0, "100%", e.transition, e.target), se && P(0, -xe, e.transition, e.handle) }

                function x(e) { e = e || {}, e.transition = e.transition || X.transition, e.target = Y, e.handle = he || F, ge = !1, le = !1, G && (n = null, i = null, fe = null, he = null, Te.removeEventListener("click", j, !0)), ue && P(0, -H, e.transition, e.target), se && P(0, xe, e.transition, e.handle) }

                function k() { re && b(), oe && y(), le && x(), ce && w(), D.call(J, "close", we) }

                function T() { if (!pe) return k(), this }

                function I(e) {
                    if (!pe) {
                        var t = e || {};
                        t.transition = t.transition || X.transition, t.index = t.index || 0;
                        var n, i = t.target;
                        switch (we = i, i) {
                            case "swiperight":
                                t.target = U.eq(t.index), n = t.target.parent().index(), t.handle = G ? A.children().eq(n).children(X.handle) : F, he = t.handle, fe = t.target, H = U.attr("data-moving") || _, te && g(t);
                                break;
                            case "swipeleft":
                                t.target = q.eq(t.index), n = t.target.parent().index(), t.handle = G ? A.children().eq(n).children(X.handle) : F, he = t.handle, fe = t.target, H = q.attr("data-moving") || _, ne && p(t);
                                break;
                            case "swipedown":
                                t.target = Y.eq(t.index), n = t.target.parent().index(), t.handle = G ? A.children().eq(n).children(X.handle) : F, he = t.handle, fe = t.target, H = Y.attr("data-moving") || _, ae && m(t);
                                break;
                            case "swipeup":
                                t.target = W.eq(t.index), n = t.target.parent().index(), t.handle = G ? A.children().eq(n).children(X.handle) : F, he = t.handle, fe = t.target, H = W.attr("data-moving") || _, ie && v(t);
                                break;
                            default:
                                t.target = U.eq(t.index), n = t.target.parent().index(), t.handle = G ? A.children().eq(n).children(X.handle) : F, he = t.handle, fe = t.target, te && g(t)
                        }
                        return D.call(J, "open", i), this
                    }
                }

                function O() { return n }

                function C() { return ge }

                function j(e) {
                    var i = t(e.target),
                        a = i.closest(q).length || i.closest(U).length || i.closest(W).length || i.closest(Y).length || e.target.className.indexOf("mue-mask") > -1 || e.target.className.indexOf("mue-click") > -1;
                    n && (a || (n.close(), e.stopPropagation()))
                }

                function L() { A.on("touchstart", s).on("touchmove", u).on("touchend", d).on("touchcancel", function() {}), de = !0 }

                function P(e, t, n, i) {
                    var n, a = i || A,
                        e = e || 0,
                        t = t || 0,
                        o = X.zoom ? parseFloat(e) / 100 + "rem" : parseFloat(e) + "px",
                        r = X.zoom ? parseFloat(t) / 100 + "rem" : parseFloat(t) + "px",
                        l = String(e).indexOf("%") > -1 ? e : o,
                        c = String(t).indexOf("%") > -1 ? t : r;
                    return n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms", a.css({ "-webkit-transition": n, transition: n, "-webkit-transform": "translate(" + l + "," + c + ")", transform: "translate(" + l + "," + c + ")" }).one("webkitTransitionEnd", function() { a.css({ "-webkit-transition": "none", transition: "none" }) }), this
                }

                function S() { if (!pe) return A.off("touchmove", u).off("touchend", d).off("touchcancel", function() {}), D.call(J, "lock"), this }

                function E() { if (!pe) return A.on("touchmove", u).on("touchend", d).on("touchcancel", function() {}), D.call(J, "unlock"), this }

                function N(e) {
                    var e = 1 == e;
                    A && (A.off(), e && A.remove()), R("open"), R("close"), pe = !0
                }

                function B(t, n) { return e.on.apply(J, arguments), this }

                function R(t, n) { return e.off.apply(J, arguments), this }

                function D(t) { J.self = this == window || this == J ? null : this, e.trigger.apply(J, arguments) }
                var A, F, M, H, z, V, $, q, U, W, Y, _, K = { id: "", handle: ".handle", swiperight: ".swiperight", swipeleft: ".swipeleft", swipeup: ".swipeup", swipedown: ".swipedown", direction: "x", stopHandle: "", hasChild: !1, handleMove: !0, targetMove: !0, alwaysTrigger: !1, width: 0, height: 0, movingDistance: 280, initDistance: 0, zoom: !1, distance: 40, autoinit: !0, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, transition: 300 },
                    J = { name: "swipe", handle: {}, active: O, isActive: C, on: B, off: R, close: T, open: I, destroy: N, lock: S, unlock: E, init: o },
                    X = J.config = t.extend(!0, {}, K, e.config.swipe, a),
                    Z = {},
                    Q = X.direction,
                    G = X.hasChild,
                    ee = !1,
                    te = !1,
                    ne = !1,
                    ie = !1,
                    ae = !1,
                    oe = !1,
                    re = !1,
                    le = !1,
                    ce = !1,
                    se = X.handleMove,
                    ue = X.targetMove,
                    de = !1,
                    fe = null,
                    he = null,
                    pe = !1,
                    ge = !1,
                    ve = /hp-tablet/gi.test(navigator.appVersion),
                    me = "ontouchstart" in window && !ve,
                    be = !1,
                    ye = !1,
                    Z = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "", deltax: 0, movingleft: 0, movingright: 0, movingup: 0, movingdown: 0, scrollObj: null },
                    we = "",
                    xe = X.initDistance,
                    ke = document,
                    Te = ke.documentElement;
                X.autoinit && o(X);
                var Ie = 0;
                return J
            }
        }()
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.sidebar = function(n) {
            function i(n) { var i = t.extend(!0, w, n); return i.onBeforeInit && i.onBeforeInit.call(y, i), w = y.config = i, i.trigger && (O = e.obj(i.trigger)), k = e.obj(i.handle), m || (m = e.swipe({ id: i.id, handle: i.handle, movingDistance: i.width, swiperight: i.swiperight, swipeleft: i.swipeleft, direction: "x", hasChild: !1, width: 0, height: 0, onBeforeTouchstart: i.onBeforeTouchstart, onBeforeTouchmove: i.onBeforeTouchmove, onBeforeTouchend: i.onBeforeTouchend, handleMove: i.handleMove, zoom: i.zoom, distance: i.distance, transition: 300 })), w.mask && !x && (x = mue.mask({ id: i.id + "-mask", appendTo: k, autoTrigger: !1, zIndex: i.zIndex - 1, opacity: i.opacity, callback: function() { m.close() } })), I || (a(), i.height > 0 && e.obj(i.id).height(i.height)), i.onInited && i.onInited.call(y, i), this }

            function a() {
                var e = this;
                m.on("open", function(t) { O && O.addClass("active"), x && x.show(), k.css("overflow-y", "hidden"), T = !0, v.call(e, "open", t) }), m.on("close", function() { O && O.removeClass("active"), x && x.hide(), k.css("overflow-y", "auto"), T = !1, v.call(e, "close") }), O && O.off("click.bui").on("click.bui", function(e) {
                    if (!t(this).hasClass("disabled")) {
                        var n = t(this).attr("data-target") || "swiperight";
                        T ? r() : o({ target: n })
                    }
                }), I = !0
            }

            function o(e) { var t = e || {}; return t.target = t.target || "swiperight", t.transition = t.transition || 300, m.open(t), this }

            function r() { return m.close(), this }

            function l() { return m.lock(), v.call(this, "lock"), this }

            function c(e) { return m.unlock(), v.call(this, "unlock"), this }

            function s() { return T }

            function u() { return m.active() }

            function d(e) {
                var e = 1 == e;
                O && O.off("click.bui"), g("open"), g("close"), x && x.destroy(e), m && m.destroy(e)
            }

            function f(t) { var n = { swipe: m, mask: x }; return e.widget.call(n, t) }

            function h(t, n) { return e.option.call(y, t, n) }

            function p(t, n) { return e.on.apply(y, arguments), this }

            function g(t, n) { return e.off.apply(y, arguments), this }

            function v(t) { y.self = this == window || this == y ? null : this, e.trigger.apply(y, arguments) }
            var m, b = { id: "", trigger: "", handle: ".mue-page", swiperight: ".swiperight", swipeleft: ".swipeleft", handleMove: !0, zIndex: 121, mask: !0, width: 280, opacity: .1, height: 0, zoom: !0, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, autoinit: !0, onBeforeInit: null, onInited: null, distance: 40 },
                y = { name: "sidebar", handle: {}, on: p, off: g, active: u, isActive: s, open: o, close: r, lock: l, unlock: c, destroy: d, widget: f, option: h, config: w, init: i },
                w = y.config = t.extend(!0, {}, b, e.config.sidebar, n),
                x = null,
                k = null,
                T = !1,
                I = !1,
                O = null;
            return w.autoinit && i(w), y
        }
    }(bui || {}, libs),
    function(e, t) {
        e.listview = function(n) {
            function i(n) { var i = t.extend(!0, k, n); return i.onBeforeInit && i.onBeforeInit.call(x, i), k = x.config = i, b = e.obj(i.id), y = b.children(), y.length && a(i), T || o(i), i.onInited && i.onInited.call(x, i), this }

            function a(e) {
                e.height > 0 && b.height(e.height), e.data && e.data.length ? y.each(function(n, i) {
                    var a = t(i),
                        o = a.attr("status"),
                        l = e.menuHeight > 0 ? e.menuHeight : i.offsetHeight;
                    if (!o) {
                        var c = "function" == typeof e.template ? e.template.call(x, e.data) : r(e);
                        a.append(c).attr("status", "1")
                    }
                    i.style.height || t(i).height(l)
                }) : y.each(function(n, i) {
                    var a = e.menuHeight > 0 ? e.menuHeight : i.offsetHeight;
                    i.style.height || t(i).height(a)
                })
            }

            function o(e) {
                var t = this,
                    n = function(t) { t.ui = x, e.callback && e.callback.call(x, t, m) };
                b.off("click.bui", ".mue-listview-menu .mue-btn").on("click.bui", ".mue-listview-menu .mue-btn", n), m = mue.swipe({ id: e.id, handle: e.handle, movingDistance: e.menuWidth, swiperight: e.swiperight, swipeleft: e.swipeleft, direction: "x", hasChild: !0, width: e.width, height: 0, zoom: e.zoom, distance: e.distance, onBeforeTouchstart: e.onBeforeTouchstart, onBeforeTouchmove: e.onBeforeTouchmove, onBeforeTouchend: e.onBeforeTouchend, transition: 300 }), m.on("open", function(e) { I = !0, v.call(t, "open", e) }), m.on("close", function(e) { I = !1, v.call(t, "close", e) }), T = !0
            }

            function r(e) {
                var n = "",
                    i = "right" == e.position ? e.swipeleft.substr(1) : e.swiperight.substr(1);
                return n += '<div class="mue-listview-menu ' + i + '">', t.each(e.data, function(e, t) { n += '    <div class="mue-btn ' + t.classname + '">' + t.text + "</div>" }), n += "</div>"
            }

            function l() { return m.active() }

            function c(e) { var t = e || {}; return t.target = t.target || ("right" == k.position ? k.swipeleft.substr(1) : k.swiperight.substr(1)), t.transition = t.transition || 300, t.index = t.index || 0, m.open(t), this }

            function s() { return m.close(), this }

            function u() { return m.lock(), v.call(this, "lock"), this }

            function d(e) { return m.unlock(), v.call(this, "unlock"), this }

            function f(e) {
                var e = 1 == e;
                y && (y.off("click.bui"), y = null), b && (b.off("click.bui"), e && b.remove(), b = null), g("open"), g("close"), m && m.destroy(e), k = null, x = null
            }

            function h(t) { var n = { swipe: m }; return e.widget.call(n, t) }

            function p(t, n) { return e.option.call(x, t, n) }

            function g(t, n) { return e.off.apply(x, arguments), this }

            function v(t) { x.self = this == window || this == x ? null : this, e.trigger.apply(x, arguments) }
            var m, b, y, w = { id: "", data: [], handle: ".mue-btn", swiperight: ".swiperight", swipeleft: ".swipeleft", position: "right", width: 0, height: 0, menuWidth: 160, menuHeight: 0, distance: 80, zoom: !1, autoinit: !0, template: null, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, callback: null },
                x = { name: "listview", active: l, lock: u, unlock: d, open: c, close: s, destroy: f, widget: h, option: p, config: k, init: i },
                k = x.config = t.extend(!0, {}, w, e.config.listview, n),
                T = !1,
                I = !1;
            return k.autoinit && i(k), x
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.btn = function(n) {
            function i(n) {
                var n = n,
                    i = 0;
                l.off("click.bui", u).on("click.bui", u, function(a) {
                    var o = t(this),
                        r = d.beforeCallback || d.beforeLoad;
                    if (!1 === (r && r.call(f, a))) return a.preventDefault(), a.stopPropagation(), !1;
                    var l = n || o.attr("href"),
                        u = o.attr("target"),
                        h = "true" === o.attr("iframe"),
                        p = "true" === o.attr("firstAnimate"),
                        g = o.attr("disabled"),
                        v = o.hasClass("disabled") || "" == g || "true" == g || "disabled" == g;
                    if (l && !v && !(l && l.indexOf("javascript:") > -1)) {
                        var m = o.attr("param") || "",
                            b = m && m.indexOf("{") > -1 && m.indexOf("}") > -1 ? JSON.parse(o.attr("param")) : {},
                            y = b;
                        (o.attr("progress") ? "false" != o.attr("progress") : c) && e.loading({ autoTrigger: !0, display: "block", opacity: 0, timeout: d.timeout });
                        var w = +new Date;
                        if (w - i < 350) return !1;
                        i = w;
                        var x = { url: l, param: y, replace: s, firstAnimate: p, iframe: h };
                        return "_blank" == u ? e.run({ id: l, data: y }) : e.load(x), a.preventDefault(), a.stopPropagation(), !1
                    }
                })
            }

            function a(n, i) {
                function a(a) {
                    if (!1 === (d.beforeCallback && d.beforeCallback.call(this, a))) return a.preventDefault(), a.stopPropagation(), !1;
                    var r = this,
                        l = t(r).css("background-color");
                    if (!t(this).hasClass("disabled") && "true" != t(this).attr("disabled")) {
                        var c = "none" == l ? "#fff" : l;
                        if (i.appendTo = r, i.background = i.background || c, i.display = i.display || "inline", i.width = i.width || 15, i.height = i.height || 15, i.text = i.text || "加载中", i.autoClose = 1 == i.autoClose, i.autoTrigger = 0 != i.autoTrigger, o) {
                            if (o.isLoading()) return;
                            o.show()
                        } else o = e.loading(i);
                        return n && n.call(r, o, a)
                    }
                }
                var i = i || {},
                    o = null;
                d.id && d.handle ? l.off("click.bui", u).on("click.bui", u, a) : l.click(a)
            }

            function o(e) {
                function n(n) { if (!1 === (d.beforeCallback && d.beforeCallback.call(this, n))) return n.preventDefault(), n.stopPropagation(), !1; var a = this; if (!t(this).hasClass("disabled") && "true" != t(this).attr("disabled")) { var o = +new Date; return !(o - i < 350) && (i = o, e && e.call(a, n)) } }
                var i = 0;
                d.id && d.handle ? l.off("click.bui", u).on("click.bui", u, n) : l.click(n)
            }

            function r() { return l.off("click.bui", u), this }
            var l, c, s, u, d = {},
                f = { load: i, submit: a, click: o, off: r };
            return function(n) { n && "object" === e.typeof(n) ? (d.id = n.id || "", d.handle = n.handle || "", d.progress = "progress" in n && n.progress, d.replace = "replace" in n && n.replace, d.timeout = n.timeout || 3e3, d.beforeCallback = n.beforeCallback || null, l = t(d.id)) : "string" == typeof n && (d.id = n || "", d.handle = "", d.progress = !1, d.replace = !1, d.timeout = 3e3, d.beforeCallback = null, l = e.obj(d.id)), u = d.handle, c = d.progress, s = d.replace }(n), f
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.dialog = function(i) {
            function a(i) {
                var a = n.extend(!0, L, i);
                switch (a.onBeforeInit && a.onBeforeInit.call(j, a), a.appendTo = a.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), F = !1, I = a.effect, R = "" !== a.needRemove ? a.needRemove : !!a.render, D = window && window.viewport && window.viewport.width() || document.documentElement.clientWidth, A = window && window.viewport && window.viewport.height() || document.documentElement.clientHeight, a.position) {
                    case "top":
                        P = "mue-dialog-top", I = a.effect || "fadeInDown";
                        break;
                    case "bottom":
                        P = "mue-dialog-bottom", I = a.effect || "fadeInUp";
                        break;
                    case "left":
                        P = "mue-dialog-left", I = a.effect || "fadeInLeft";
                        break;
                    case "right":
                        P = "mue-dialog-right", I = a.effect || "fadeInRight";
                        break;
                    case "center":
                        P = "mue-dialog-center", I = a.effect || N;
                        break;
                    case "custom":
                        P = "mue-dialog-custom", I = a.effect || N
                }
                a.fullscreen && (P = "mue-dialog-fullscreen", I = a.effect || N), a.render ? (a.id = a.dialogid || e.guid(), u(a), k = e.objId(a.id)) : (k = e.obj(a.id), k.addClass(P).css("z-index", a.zIndex), a.useBox && k.addClass("mue-box-vertical")), a.style && k.css(a.style), S = k.width() > D ? D : k.width(), E = k.height() > A ? A : k.height(), k.css("display", "none"), T || (T = e.toggle({ id: a.id, effect: I, useBox: a.useBox })), L = j.config = a;
                try {
                    var o = "object" === t(a.id) ? n(a.id).attr("id") + "-mask" : a.id + "-mask";
                    i.mask && !O && (O = e.mask({
                        id: o,
                        opacity: i.opacity,
                        appendTo: k.parent(),
                        autoTrigger: !1,
                        onlyOne: !0,
                        autoClose: !1,
                        zIndex: parseInt(i.zIndex, 10) - 1,
                        callback: function(e) {
                            if (!1 === (i.onMask && i.onMask.call(j, e))) return !1;
                            L.autoClose && (R ? c(s) : c())
                        }
                    }))
                } catch (t) { e.showLog(t) }
                return B && !L.render || d(), a.onInited && a.onInited.call(j, a), j
            }

            function o(e) {
                var t = "",
                    i = e.useBox ? "mue-box-vertical " : "";
                return t += '<div id="' + e.id + '" class="mue-dialog ' + i + P + " " + e.className + '" style="display:block;z-index:' + e.zIndex + '">', e.title && (t += '\t<div class="mue-dialog-head">' + e.title + "</div>"), t += '\t<div class="mue-dialog-main">', e.content && (t += e.content), t += "\t</div>", e.buttons && e.buttons.length && (t += '\t<div class="mue-dialog-foot"><div class="mue-box">', n(e.buttons).each(function(e, n) { t += '\t\t<div class="mue-btn span1 ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name || n) + "</div>" }), t += "\t</div></div>"), e.close && (t += '   <div class="mue-dialog-close">' + (e.closeText ? e.closeText : '<i class="icon-close"></i>') + "</div>"), t += "</div>"
            }

            function r(t) {
                if (!l && !F) {
                    var i = { width: L.width, height: L.height, zoom: L.zoom, fullscreen: L.fullscreen, position: L.position, scroll: L.scroll, onBeforeOpen: L.onBeforeOpen, useBox: L.useBox, effect: "", callback: null },
                        a = i;
                    "function" == typeof t ? a.callback = t : "string" == typeof t ? a.effect = t : t && "object" === e.typeof(t) && (a = n.extend(!0, {}, i, t));
                    var o = a.onBeforeOpen && a.onBeforeOpen.call(j, { toggle: T });
                    if (x.call(j, "beforeopen", { toggle: T }), !1 === o) return this;
                    var r = L.useBox ? "-webkit-box" : "block";
                    k && k.css("display", r);
                    if (0 == (k.attr("status") || 0)) {
                        S = String(a.width).indexOf("%") > -1 ? D * parseFloat(a.width) / 100 : a.width || k.width(), E = String(a.height).indexOf("%") > -1 ? A * parseFloat(a.height) / 100 : a.height || k.height();
                        var c = e.unit.pxToRemZoom(S),
                            s = e.unit.pxToRemZoom(E),
                            u = a.zoom ? c + "rem" : S + "px",
                            f = a.zoom ? s + "rem" : E + "px",
                            h = a.zoom ? "-" + s / 2 + "rem" : "-" + E / 2 + "px",
                            p = a.zoom ? "-" + c / 2 + "rem" : "-" + S / 2 + "px";
                        if (a.fullscreen && "custom" != a.position || k.css({ width: u, height: f }), "center" != a.position || a.fullscreen || k.css({ top: "50%", "margin-top": h, left: "50%", "margin-left": p, right: "auto" }), a.fullscreen && k.addClass("mue-dialog-fullscreen"), a.scroll && !a.useBox) {
                            var g = k.children(".mue-dialog-head"),
                                v = k.children(".mue-dialog-foot"),
                                m = k.children(".mue-dialog-main"),
                                b = g.length ? g.height() : 0,
                                y = v.length ? v.height() : 0,
                                w = k.height() - b - y;
                            m.css({ height: w })
                        }
                        k.attr("status", "1")
                    }
                    return O && O.show(), T.show(function(e) { l = !0, a.callback && a.callback.call(j, { toggle: T }), x.call(j, "openafter", { toggle: T }), x.call(j, "afteropen", { toggle: T }) }, a.effect), B || d(), x.call(j, "open", { toggle: T }), this
                }
            }

            function l(e) { return l }

            function c(t) { if (l && !F) { var n = {}; "function" == typeof t ? n.callback = t : "string" == typeof t ? (n.effect = t, n.callback = L.onClose) : t && "object" === e.typeof(t) && (n = t), n.onBeforeClose = L.onBeforeClose; var i = n.onBeforeClose && n.onBeforeClose.call(j, { toggle: T }); if (x.call(j, "beforeclose", { toggle: T }), !1 === i) return this; try { T.hide(function(e) { l = !1, n.callback && n.callback.call(j, { toggle: T }) }, n.effect), O && O.hide(), x.call(this, "close", { toggle: T }) } catch (t) { e.showLog(t, "mue.dialog.close") } return this } }

            function s() { try { k.remove(), O && O.remove(), x.call(this, "remove") } catch (t) { e.showLog(t, "mue.dialog.remove") } return this }

            function u(t) {
                var i = o(t),
                    a = e.$("#" + t.id);
                return a.length && a.remove(), n(t.appendTo).append(i), this
            }

            function d() {
                return k.off("click.bui", ".mue-dialog-close").on("click.bui", ".mue-dialog-close", function(e) { R ? c(s) : c(), L.onClose && L.onClose.call(j, e, j), e.stopPropagation() }), k.on("click.bui", ".mue-dialog-foot .mue-btn", function(e) {
                    if (e.target = this, !1 === (L.callback && L.callback.call(j, e, j))) return !1;
                    L.autoClose && (R ? c(s) : c()), e.stopPropagation()
                }), B = !0, this
            }

            function f(t) { return e.selector.call(k, t) }

            function h(e) {
                var t = e || {};
                C.title = L.title || "提示", C.content = L.content || "", C.close = !1, C.render = !0, C.autoClose = L.autoClose, C.mask = L.mask, C.buttons = L.buttons && L.buttons.length ? L.buttons : ["确定"], C.callback = L.callback || null;
                var i = n.extend(!0, C, t);
                return x.call(j, "create"), a(i)
            }

            function p(e, t) { return j.isOpen() ? j.close(t) : j.open(e), this }

            function g(t) { return t = t || L.zIndex + e.$(".mue-dialog").length, e.$(".mue-dialog").css("z-index", L.zIndex), e.$(".mue-mask").css("z-index", L.zIndex - 1), k.css("z-index", t), O && e.$("#" + O.config.id).css("z-index", t - 1), j.config.zIndex = t, L.zIndex = t, this }

            function v() {
                var e = 1 == e;
                k && (k.off("click.bui"), k.remove(), k = null), w("open"), w("close"), O && O.destroy(e), T && T.destroy(e), F = !0
            }

            function m(t) { var n = { toggle: T, mask: O }; return e.widget.call(n, t) }

            function b(t, n) { return e.option.call(j, t, n) }

            function y(t, n) { return e.on.apply(j, arguments), this }

            function w(t, n) { return e.off.apply(j, arguments), this }

            function x(t) {
                j.self = this == window || this == j ? null : this, e.trigger.apply(j, arguments)
            }
            var k, T, I, O, C = { id: "", dialogid: "", title: "", effect: "zoomIn", content: "", className: "", appendTo: "", position: "center", style: null, fullscreen: !1, useBox: !1, width: 0, height: 0, mask: !0, opacity: .3, render: !1, needRemove: "", autoClose: !0, close: !0, scroll: !0, closeText: "", zoom: !1, zIndex: 101, buttons: [], onBeforeClose: null, onBeforeOpen: null, onBeforeInit: null, autoinit: !0, onInited: null, onMask: null, onClose: null, callback: null },
                j = { name: "dialog", selector: f, $el: f, $: f, handle: {}, on: y, off: w, open: r, close: c, isOpen: l, top: g, template: o, toggle: p, create: h, remove: s, destroy: v, widget: m, option: b, config: L, init: a },
                L = j.config = n.extend(!1, {}, C, e.config.dialog, i),
                P = "",
                S = "",
                E = "",
                N = "fadeInDown",
                l = !1,
                B = !1,
                R = "" !== L.needRemove ? L.needRemove : !!L.render,
                D = window && window.viewport && window.viewport.width() || document.documentElement.clientWidth,
                A = window && window.viewport && window.viewport.height() || document.documentElement.clientHeight,
                F = !1;
            return L.id && L.autoinit && a(L), j
        }
    }(bui || {}, libs),
    function(e, t) {
        e.alert = function(n, i) {
            var a = e.dialog(),
                o = {};
            o.className = "mue-alert", o.title = "", o.width = 580, o.height = 360, o.scroll = !0, o.zIndex = 121, o.position = "center", o.autoClose = !0, o.zoom = !0, o.buttons = [{ name: "确定", className: "primary-reverse" }], o.callback = i || function() {};
            var r = t.extend(o, e.config.alert),
                l = "";
            try { l = "string" == typeof n && n.indexOf("<") > -1 && n.indexOf(">") > -1 ? "<xmp>" + n + "</xmp>" : !n || "object" !== e.typeof(n) && "array" !== e.typeof(n) ? n && "function" === e.typeof(n) ? n.toString() : n : JSON.stringify(n), r.content = '<div class="mue-dialog-text mue-box-center" style="height:100%;">' + l + "</div>" } catch (t) { e.showLog(t, "mue.alert") }
            return a.create(r).open(), a
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.confirm = function(i, a) {
            var o = e.dialog(),
                r = {};
            r.className = "mue-confirm", r.title = "", r.width = 580, r.height = 360, r.scroll = !0, r.zIndex = 121, r.autoClose = !0, r.zoom = !0, r.position = "center", r.buttons = [{ name: "取消", className: "" }, { name: "确定", className: "primary-reverse" }], r.callback = a || function() {};
            var l = {};
            return "object" === (void 0 === i ? "undefined" : t(i)) ? (i.content = '<div class="mue-dialog-text mue-box-center" style="height:100%;">' + i.content + "</div>", l = n.extend(r, e.config.confirm, i)) : (l = n.extend(r, e.config.confirm), l.content = '<div class="mue-dialog-text mue-box-center" style="height:100%;">' + i + "</div>", l.callback = a || function() {}), o.create(l).open(), o
        }
    }(window.bui || {}, window.libs);
    e(function(e) {
        ! function(n, i) {
            n.prompt = function(a, o) {
                var r = n.dialog(),
                    l = {};
                l.className = "mue-prompt", l.title = "", l.width = 580, l.height = 400, l.scroll = !0, l.autoClose = !1, l.zoom = !0, l.zIndex = 121, l.position = "center", l.buttons = [{ name: "取消", className: "" }, { name: "确定", className: "primary-reverse" }], l.callback = o || function() {}, l.placeholder = "", l.row = 1, l.type = "text", l.value = "", l.onChange = null;
                var c = {},
                    s = "",
                    u = "";
                switch ("object" === (void 0 === a ? "undefined" : t(a)) ? (c = i.extend(l, n.config.prompt, a), s = c.content || "") : (c = i.extend(l, n.config.prompt), c.callback = o || function() {}, s = a || ""), c.type) {
                    case "number":
                        c.content = '<div class="mue-prompt-main mue-box-vertical"> <div class="mue-prompt-label">' + s + '</div> <div class="span1"> <input class="mue-prompt-text" placeholder="' + c.placeholder + '" type="' + c.type + '" value="' + c.value + '"/> </div> </div>';
                        break;
                    default:
                        c.content = '<div class="mue-prompt-main mue-box-vertical"> <div class="mue-prompt-label">' + s + '</div> <div class="span1"> <textarea class="mue-prompt-text" placeholder="' + c.placeholder + '" rows="' + c.row + '" >' + c.value + "</textarea> </div> </div>"
                }
                return r.create(c).open(), i("#" + r.config.id).on("change", ".mue-prompt-text", function(t) { u = this.value, c.onChange && c.onChange.call(e, t) }), r.value = function(e) { return void 0 === e ? u : (i("#" + r.config.id).find(".mue-prompt-text").val(e), u = e) }, r.focus = function(e) { i("#" + r.config.id).find(".mue-prompt-text").focus() }, r
            }
        }(window.bui || {}, window.libs)
    });
    ! function(e, n) {
        e.hint = function(i, a) {
            function o(t) { var i = n.extend(!0, I, t); return i.onBeforeInit && i.onBeforeInit.call(T, i), x = e.guid(), L = "top" === i.position ? "fadeInDown" : "bottom" === i.position ? "fadeInUp" : i.effect, I = T.config = i, l(x, i.content, O, i.appendTo), ++O, j = e.objId(x), C || (C = e.toggle({ id: j, effect: L, useBox: i.useBox })), P = !0, i.autoTrigger ? C.show() : C.hide("showIn"), i.autoClose && (k && clearTimeout(k), k = setTimeout(function() { i.autoTrigger ? s(i.onHided) : C.hide(i.onHided), i.onClose && i.onClose.call(T) }, i.timeout)), S || r(i), i.onInited && i.onInited.call(T, i), this }

            function r(e) { e.showClose && j.off("click.bui", ".mue-hint-close").on("click.bui", ".mue-hint-close", function(t) { e.autoTrigger ? s(e.onHided) : C.hide(e.onHided), e.onClose && e.onClose.call(T, t) }), S = !0 }

            function l(t, i, a, o) {
                var r, l = "12" + a,
                    c = o ? e.obj(o) : n("body");
                switch (I.position) {
                    case "top":
                        r = "mue-hint-top";
                        break;
                    case "bottom":
                        r = "mue-hint-bottom";
                        break;
                    case "center":
                        r = "mue-hint-center"
                }
                var s = I.height;
                I.width = String(I.width).indexOf("%") > -1 ? 750 * parseFloat(I.width) / 100 : parseFloat(I.width), I.height = parseFloat(I.height) || 0;
                var u = I.background ? "background:" + I.background : "",
                    d = I.width > 0 ? "width:" + I.width / 100 + "rem;margin-left:-" + I.width / 100 / 2 + "rem;" : "",
                    f = I.height > 0 ? "height:" + I.height / 100 + "rem;" : "",
                    h = "auto" == s ? "height:auto;" : f,
                    p = "center" === I.position && I.width > 0 ? "margin-top:-" + I.height / 100 / 2 + "rem;" : "",
                    g = u + ";z-index:" + l + ";opacity:" + I.opacity + ";" + d + h + p,
                    v = '<div id="' + t + '" class="mue-hint ' + r + " " + I.skin + '" style="' + g + '"><span class="mue-hint-inner">' + i + "</span>" + (I.showClose ? '<div class="mue-hint-close"><i class="icon-close"></i></div>' : "") + "</div>";
                c.append(v), o && c.css("position", "relative")
            }

            function c() { return P }

            function s(e) { var t = this; return C && (P = !1, C.hide(function() { C.remove(), e && e.call(T), b.call(t, "remove", { toggle: C }), C = null })), this }

            function u(e, t) { var n = this; return "function" == typeof e ? (e = e, t = t || I.effect || "") : (t = e || I.effect || "", e = null), C && (P = !1, C.hide(function() { e && e.call(T, { toggle: C }), b.call(n, "hide", { toggle: C }) }, t)), this }

            function d(e, t) { var n = this; return "function" == typeof e ? (e = e, t = t || I.effect || "") : (t = e || I.effect || "", e = null), C && (P = !0, C.show(function(t) { b.call(n, "show", { toggle: C }), e && e.call(T, { toggle: C }) }, t)), I.autoClose && (k && clearTimeout(k), k = setTimeout(function() { I.autoTrigger ? s() : C.hide(), I.onClose && I.onClose.call(T) }, I.timeout)), this }

            function f(e) {
                var e = 1 == e;
                j.off("click.bui"), C && C.destroy(e), m("show"), m("hide")
            }

            function h(t) { var n = { toggle: C }; return e.widget.call(n, t) }

            function p(t, n) { return e.option.call(T, t, n) }

            function g(e) { return j.find(".mue-hint-inner").length && j.find(".mue-hint-inner").html(e), this }

            function v(t, n) { return e.on.apply(T, arguments), this }

            function m(t, n) { return e.off.apply(T, arguments), this }

            function b(t) { T.self = this == window || this == T ? null : this, e.trigger.apply(T, arguments) }
            var y = { appendTo: "", content: "", timeout: 2e3, autoClose: !0, showClose: !1, autoTrigger: !0, useBox: !0, opacity: 1, background: "", effect: "fadeInUp", skin: "", position: "bottom", width: 0, height: 0, onBeforeInit: null, onInited: null, onClose: null, onHided: null };
            if ("number" == typeof i || "string" == typeof i) {
                var w = i || "";
                i = {}, i.content = w, i.onClose = a || null
            } else "object" === (void 0 === i ? "undefined" : t(i)) && (i = i);
            var x, k, T = { name: "hint", handle: {}, on: v, off: m, remove: s, hide: u, show: d, text: g, isShow: c, destroy: f, widget: h, option: p, config: I, init: o },
                I = T.config = n.extend(!0, {}, y, e.config.hint, i),
                O = 0,
                C = null,
                j = null,
                L = "",
                P = !1,
                S = !1;
            return o(I), T
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.pullrefresh = function(n) {
            function i(n) { var i = t.extend(!0, M, n); return i.onBeforeInit && i.onBeforeInit.call(F, i), i.id ? (O = e.obj(i.id), M = F.config = i, C = O[0], j = O.children(B), L = O.children(R), P = O.children(D), N = a, E = i.refreshTips.end, W || (W = e.loading({ appendTo: j, width: 15, height: 15, autoClose: !1, text: E, onlyText: !0, display: "inline", autoTrigger: !1, mask: !1 })), i.autoLoad && ($ = !0, W.start({ text: i.refreshTips.start, onlyText: !1 }), N()), q || r(i), m(i.height), i.onInited && i.onInited.call(F, i), this) : void e.hint("pullrefresh id不能为空") }

            function a() { z = (new Date).getTime(), M.onBeforeRefresh && M.onBeforeRefresh.call(F), M.onRefresh && M.onRefresh.call(F), I.call(F, "refresh") }

            function o() {
                var e = (new Date).getTime(),
                    t = e - z,
                    n = Math.floor(t / 36e5),
                    i = Math.floor(t / 6e4);
                Math.floor(t / 1e3);
                return n <= 0 && i <= 0 ? "刚刚更新" : n <= 0 && i > 0 ? i + "分钟前更新" : "上次更新时间:" + (n < 10 ? "0" + n : n) + ":" + (i < 10 ? "0" + i : i)
            }

            function r(e) { H || d(), q = !0 }

            function l(n) {
                var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches,
                    a = _ ? i[0] : n;
                return Q.x1 = a.pageX, Q.y1 = a.pageY, Q.direction = "", G = O.scrollTop(), M.stopHandle && e.unit.checkTargetInclude(n.target, M.stopHandle) ? void(X = !1) : i.length > 1 || n.scale && 1 !== n.scale ? void(X = !1) : !1 !== (M.onBeforeTouchstart && M.onBeforeTouchstart.call(F, n, Q)) && (E = M.lastUpdated ? o() : M.refreshTips.end, I.call(F, "touchstart", n, Q), t(window).scrollTop() <= 0 && G <= 0 && M.onRefresh && !$ ? (X = !0, t(this).css("touch-action", "none")) : X = !1, void(M.stopPropagation && n.stopPropagation()))
            }

            function c(t) {
                var n = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches || [];
                if (!X) return void h();
                if (n.length > 1 || t.scale && 1 !== t.scale) return void h();
                var i = _ ? n[0] : t;
                if (Q.x2 = i.pageX, Q.y2 = i.pageY, !1 === (M.onBeforeTouchmove && M.onBeforeTouchmove.call(F, t, Q))) return !1;
                Q.direction || (Q.direction = e.swipeDirection(Q.x1, Q.x2, Q.y1, Q.y2)), I.call(F, "touchmove", t, Q), "swipeleft" !== Q.direction && "swiperight" !== Q.direction || t.preventDefault(), Q.y2 - Q.y1 > 0 && G <= 0 && t.preventDefault(), "swipedown" == Q.direction ? (I.call(F, "movingdown", t, Q), S = Math.abs(Q.y2 - Q.y1), h(S / 2, !1), S >= M.distance ? ee || (W.show({ text: M.refreshTips.release, onlyText: !1 }).pause(), ee = !0) : te || (W.show({ text: E, onlyText: !1 }).pause(), te = !0), Z = !0, M.maxDistance > M.distance && S >= M.maxDistance && (W.show({ text: M.refreshTips.start, onlyText: !1 }), $ = !0, M.onRefresh && N(), Z = !1, ee = !1, te = !1, Q = {}, K += Q.y2 - Q.y1, J += Q.x2 - Q.x1, Q.lastX = J, Q.lastY = K, Q = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, X = !1, Z = !1), t.preventDefault(), t.stopPropagation()) : "swipeup" == Q.direction && (I.call(F, "movingup", t, Q), Z = !0, t.stopPropagation()), W && W.pause()
            }

            function s(e) { return I.call(F, "touchend", e, Q), !1 !== (M.onBeforeTouchend && M.onBeforeTouchend.call(F, e, Q)) && (t(this).css("touch-action", "auto"), Z ? ("swipedown" == Q.direction ? (I.call(F, Q.direction, e, Q), S >= M.distance ? (h(M.distance / 2), W.show({ text: M.refreshTips.start, onlyText: !1 }).start(), $ = !0, M.onRefresh && N()) : h(), e.stopPropagation(), ee = !1, te = !1, Q = {}) : "swipeup" == Q.direction && (I.call(F, Q.direction, e, Q), e.stopPropagation()), K += Q.y2 - Q.y1, J += Q.x2 - Q.x1, Q.lastX = J, Q.lastY = K, Q = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, X = !1, void(Z = !1)) : (Q = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" }, X = !1, void(Z = !1))) }

            function u(e) { return H = !0, O.off("touchstart", l).off("touchmove", c).off("touchend", s).off("touchcancel", h), h(), e && e.call(F), I.call(F, "lock"), this }

            function d(e) { return H = !1, O.on("touchstart", l).on("touchmove", c).on("touchend", s).on("touchcancel", h), e && e.call(this), I.call(F, "unlock"), this }

            function f(e, t, n) { return U || (W.show({ text: M.refreshTips.success, onlyText: !1 }), h(e, t), L.one("webkitTransitionEnd", function() { W && W.hide().pause(), U = !1, n && n.call(F) })), this }

            function h(e, t) { t = 0 != t, e = e || 0, $ = !1; var n = t ? "all 300ms ease-out" : "none"; return p(0, e + "px", n, L), P.length && p(0, e + "px", n, P), this }

            function p(e, t, n, i) {
                var n, i = i || O,
                    e = e || 0,
                    t = t || 0,
                    a = e,
                    o = t,
                    r = String(e).indexOf("%") > -1 ? String(e) : a,
                    l = String(t).indexOf("%") > -1 ? String(t) : o;
                n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms";
                try { i.css({ "-webkit-transition": n, transition: n, "-webkit-transform": "translate(" + r + "," + l + ")", transform: "translate(" + r + "," + l + ")" }), i.one("webkitTransitionEnd", function() { i.css({ "-webkit-transition": "none", transition: "none" }), W.hide() }) } catch (e) { console.log(e.message) }
            }

            function g() { U = !0, h(), e.hint(M.refreshTips.fail), I.call(F, "fail") }

            function v() { h(M.distance / 2, !0), W.start({ text: M.refreshTips.start, onlyText: !1 }), M.onRefresh && N() }

            function m(t) {
                var n = (e.$(".mue-page"), O.parents(".active").length ? O.parents(".active") : O.parents(".mue-tab-main")),
                    i = n.length ? n.height() : O.parents(".mue-tab").height(),
                    a = (i || O.parents(".mue-page").height() || O.parents(".mue-dialog-main")) - (O[0] && O[0].offsetTop),
                    o = t ? parseFloat(t) : a;
                0 == V && (V = o);
                M.cacheHeight;
                O.height(V)
            }

            function b(e) { var t = e || { height: 0, width: 0 }; return this.setHeight(t), t && t.width > 0 && O.width(t.width), this }

            function y(e) {
                var e = 1 == e;
                O && (O.off(), e && O.remove()), W && W.destroy(e), T("refresh"), T("movingdown"), T("swipedown")
            }

            function w(t) { var n = { loading: W }; return e.widget.call(n, t) }

            function x(t, n) { return e.option.call(F, t, n) }

            function k(t, n) { return e.on.apply(F, arguments), this }

            function T(t, n) { return e.off.apply(F, arguments), this }

            function I(t) { F.self = this == window || this == F ? null : this, e.trigger.apply(F, arguments) }
            var O, C, j, L, P, S, E, N, B = "." + e.prefix("scroll-head"),
                R = "." + e.prefix("scroll-main"),
                D = "." + e.prefix("scroll-foot"),
                A = { id: "", stopHandle: "", childrenTop: B, childrenMain: R, header: ".mue-page header", footer: ".mue-page footer", distance: 90, maxDistance: 0, autoLoad: !0, lastUpdated: !1, height: 0, cacheHeight: !0, refreshTips: { start: "刷新中..", release: "松开刷新", end: "下拉刷新", fail: "刷新失败,请检查下网络再试试", success: "刷新成功" }, autoinit: !0, stopPropagation: !1, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onBeforeRefresh: null, onInited: null, onRefresh: null },
                F = { name: "pullrefresh", handle: {}, on: k, off: T, reverse: f, refresh: v, setHeight: m, resize: b, fail: g, lock: u, unlock: d, destroy: y, widget: w, option: x, config: M, init: i },
                M = F.config = t.extend(!0, {}, A, e.config.pullrefresh, n),
                H = !1,
                z = (new Date).getTime(),
                V = 0,
                $ = !1,
                q = !1,
                U = !1,
                W = null,
                Y = /hp-tablet/gi.test(navigator.appVersion),
                _ = "ontouchstart" in window && !Y,
                K = 0,
                J = 0,
                X = !1,
                Z = !1,
                Q = { x1: 0, x2: 0, y1: 0, y2: 0, direction: "" };
            M.autoinit && i(M);
            var G = 0,
                ee = !1,
                te = !1;
            return F
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.scroll = function(i) {
            function a(t) {
                var i = n.extend(!0, X, t);
                if (i.onBeforeInit && i.onBeforeInit.call(J, i), A = n(window), !i.id) return void e.hint("scroll id不能为空");
                R = e.obj(i.id), le = i.page, ce = i.pageSize, X = J.config = i, ie = !0, ae = !0, oe = !1, re = !1, D = R[0], M = R.children(W), z = R.children(Y), H = R.children(_), z.css({ position: "relative" }), G || (G = e.loading({ appendTo: H, width: 20, height: 20, autoClose: !1, text: i.scrollTips.start, zIndex: 10, display: "inline", autoTrigger: !1, mask: !1 })), V = c, $ = l, q ? q.init({ id: i.id, onBeforeRefresh: i.onBeforeRefresh, onRefresh: V, distance: i.distance, maxDistance: i.maxDistance, lastUpdated: i.lastUpdated, height: i.height, cacheHeight: i.cacheHeight, stopPropagation: i.stopPropagation, refreshTips: i.refreshTips, autoLoad: i.autoRefresh }) : i.refresh && i.onRefresh ? (q = e.pullrefresh({ id: i.id, onBeforeRefresh: i.onBeforeRefresh, onRefresh: V, distance: i.distance, stopHandle: i.stopHandle, maxDistance: i.maxDistance, lastUpdated: i.lastUpdated, header: i.header, footer: i.footer, height: i.height, cacheHeight: i.cacheHeight, stopPropagation: i.stopPropagation, onBeforeTouchstart: i.onBeforeTouchstart, onBeforeTouchmove: i.onBeforeTouchmove, onBeforeTouchend: i.onBeforeTouchend, refreshTips: i.refreshTips, autoLoad: i.autoRefresh }), q.lock(), te = !0) : "y" === i.direction && w(i.height), "x" === i.direction && R.addClass("mue-box-center").attr("direction", "x");
                try { $ && $.call(J, le, ce) } catch (t) { e.showLog(t, "mue.scroll.init") }
                return se || i.scroll && o(i), i.onInited && i.onInited.call(J, i), this
            }

            function o(t) { R.off("scroll").on("scroll", e.unit.debounce(r, t.delayTime)), se = !0 }

            function r(e) {
                var t = e.target,
                    n = t.scrollTop || 0,
                    i = t.scrollLeft || 0;
                "y" === X.direction ? 0 == n ? B.call(J, "scrolltop", e) : t.scrollTop + t.clientHeight >= (t && t.scrollHeight - X.endDistance) && X.onLoad && (X.page = J.config.page = ++le, X.autoScroll && $ && $.call(J, X.page, ce), B.call(J, "scrollbottom", e)) : 0 == i ? B.call(J, "scrolltop", e) : t.scrollLeft + t.clientWidth >= (t && t.scrollWidth - X.endDistance) && X.onLoad && (X.page = J.config.page = ++le, X.autoScroll && $ && $.call(J, X.page, ce), B.call(J, "scrollbottom", e)), B.call(J, "scrollend", e), X.onScrolling && X.onScrolling.call(J, e, J)
            }

            function l(e, t) { return ne = !0, re = !1, ae && !oe && (X.page = J.config.page = e, X.onBeforeLoad && X.onBeforeLoad.call(J, e, t), X.onLoad && G && G.start({ text: X.scrollTips.start, onlyText: !1 }), X.onLoad && X.onLoad.call(J, e, t)), te && X.refresh && q && q.unlock(), this }

            function c() { ne = !0, ae = !0, oe = !1, ie = !0, re = !0, X.refreshPage && (le = Z, ce = X.pageSize, ue = {}), X.page = J.config.page = le, B.call(J, "refresh", le), X.onRefresh && X.onRefresh.call(J, le, ce) }

            function s() { return X.page }

            function u(t, n, i) {
                var i = 0 != i;
                if (!n || "array" != e.typeof(n)) return G && G.stop(), e.showLog("scroll 控件的updatePage 第2个参数,必须是一个数组,如果是list控件,检测field的data映射是否准确", "mue.scroll.updatePage"), void(n = []);
                n = n, ne = !1, de && clearTimeout(de), de = setTimeout(function() {
                    var e = parseInt(R.height()),
                        a = parseInt(R.find(X.childrenMain)[0] && R.find(X.childrenMain)[0].scrollHeight);
                    if (i)
                        if (n && n.length > ce - 1) {
                            if (ae = !0, oe = !1, ie = !1, G && G.start({ text: X.scrollTips.end, onlyText: !0 }), a >= 10 && a < e && X.autoNext && X.onLoad) {
                                var o = ++le;
                                $ && $.call(J, o, ce)
                            }
                            B.call(J, "loadpage", n, le)
                        } else {
                            ae = !1, oe = !0;
                            var r = ie && n && n.length < 1 ? X.scrollTips.nodata : X.scrollTips.last;
                            G && G.start({ text: r, onlyText: !0 }), B.call(J, "loadpage", n, le), B.call(J, "lastpage", n, le)
                        }
                    else ae = !1, oe = !0, G && G.stop();
                    return ue[t] = n
                }, 10)
            }

            function d(e) { return q && q.reverse(), e && e.call(J, q), this }

            function f() { return re }

            function h(e) { return ue }

            function p(e) { ue = {} }

            function g(e, t) { return ee = !0, te = !0, G.show({ text: X.scrollTips.fail, onlyText: !0, callback: function(n) { l(e, t) } }), q && q.lock(), this }

            function v(t, n) {
                var i, a, o = [];
                if (t && n)
                    for (i in ue) {
                        var r = e.array.filter(ue[i], t, n) || [];
                        if (r.length)
                            for (a in r) o.push(r[a])
                    }
                return o
            }

            function m(e, t) {
                var e = e || 0;
                F = R.find(X.children).children(X.handle);
                var n = R.height(),
                    i = parseFloat(F.height()),
                    a = D.scrollHeight,
                    o = i * parseInt(e) - i;
                return a > n && (D.scrollTop = o, B.call(J, "to", e), t && t.call(J, parseInt(e))), this
            }

            function b(e) { return R[0] && (R[0].scrollTop = R[0].scrollHeight, e && e.call(J)), this }

            function y(e) { var i = 0; return i = "object" === (void 0 === e ? "undefined" : t(e)) ? n(e)[0].offsetTop : "string" == typeof e && e.indexOf("#") > -1 ? n(e)[0].offsetTop : parseInt(e) || 0, D.scrollTop = i, this }

            function w(t) {
                var n = (e.$(".mue-page"), R.parents(".active").length ? R.parents(".active") : R.parents(".mue-tab-main")),
                    i = n.length ? n.height() : R.parents(".mue-tab").height(),
                    a = (i || R.parents(".mue-page").height()) - (R[0] && R[0].offsetTop),
                    o = t ? parseFloat(t) : a;
                0 == Q && (Q = o);
                X.cacheHeight;
                R.height(Q)
            }

            function x() { return R.off("scroll"), B.call(J, "lock"), this }

            function k(t) { return R.on("scroll", e.unit.debounce(r, X.delayTime)), B.call(J, "unlock"), this }

            function T() { return m(1), q && q.refresh(), this }

            function I(e) { var e = e || le; return le = e, $ && $.call(J, le, ce), this }

            function O() { return $ && $.call(J, ++le, ce), this }

            function C() { return le-- > 0 && $ && $.call(J, le--, ce), this }

            function j(e) { var t = e || { height: 0, width: 0 }; return Q = 0, this.setHeight(t), t && t.width > 0 && R.width(t.width), this }

            function L(e) {
                var e = 1 == e;
                R && (R.off("scroll"), e && R.remove()), q && q.destroy(e), G && G.destroy(e), N("loadpage"), N("lastpage"), N("scrolltop"), N("scrollbottom"), N("scrollend")
            }

            function P(t) { var n = { pullrefresh: q, loading: G }; return e.widget.call(n, t) }

            function S(t, n) { return e.option.call(J, t, n) }

            function E(t, n) { return e.on.apply(J, arguments), this }

            function N(t, n) { return e.off.apply(J, arguments), this }

            function B(t) { J.self = this == window || this == J ? null : this, e.trigger.apply(J, arguments) }
            var R, D, A, F, M, H, z, V, $, q, U = "." + e.prefix("list"),
                W = "." + e.prefix("scroll-head"),
                Y = "." + e.prefix("scroll-main"),
                _ = "." + e.prefix("scroll-foot"),
                K = { id: "", childrenTop: W, childrenMain: Y, childrenBottom: _, children: U, stopHandle: "", header: ".mue-page header", footer: ".mue-page footer", handle: "li", distance: 100, endDistance: 5, height: 0, page: 1, pageSize: 10, stopPropagation: !1, lastUpdated: !0, autoRefresh: !1, autoNext: !0, autoScroll: !0, refresh: !0, cacheHeight: !0, refreshPage: !0, scroll: !0, delayTime: 100, direction: "y", scrollTips: { start: "努力加载中..", end: "上拉加载更多", nodata: "没有更多内容", last: "没有更多内容", fail: "点击重新加载" }, refreshTips: { start: "刷新中..", release: "松开刷新", end: "下拉刷新", fail: "点击加载", success: "刷新成功" }, autoinit: !0, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, onScrolling: null, onBeforeRefresh: null, onRefresh: null, onBeforeLoad: null, onLoad: null },
                J = { name: "scroll", handle: {}, on: E, off: N, reverse: d, updateCache: u, updatePage: u, getPage: s, getCache: h, clearCache: p, resize: j, fail: g, filter: v, to: m, toBottom: b, scrollTop: y, lock: x, unlock: k, refresh: T, load: I, nextPage: O, prevPage: C, setHeight: w, isRefresh: f, destroy: L, widget: P, option: S, config: X, init: a },
                X = J.config = n.extend(!0, {}, K, e.config.scroll, i),
                Z = X.page,
                Q = 0,
                G = null,
                ee = !1,
                te = !1,
                ne = !1,
                ee = !1,
                ie = !0,
                ae = !0,
                oe = !1,
                re = !1,
                le = X.page,
                ce = X.pageSize,
                se = !1,
                ue = {};
            X.autoinit && a(X);
            var de;
            return J
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.list = function(n) {
            function i(n) {
                var i = P = t.extend(!0, P, n);
                i.onBeforeInit && i.onBeforeInit.call(L, i), k = e.obj(i.id), T = k.find(i.children), P = L.config = i, N = P.data;
                var r = 0 == P.refresh ? null : s,
                    c = { id: i.id, children: i.children, handle: i.handle, header: i.header, footer: i.footer, page: i.page, pageSize: i.pageSize, distance: i.distance, stopHandle: i.stopHandle, maxDistance: i.maxDistance, height: i.height, refresh: i.refresh, autoNext: i.autoNext, refreshPage: i.refreshPage, autoScroll: i.autoScroll, scroll: i.scroll, cacheHeight: i.cacheHeight, stopPropagation: i.stopPropagation, scrollTips: i.scrollTips, refreshTips: i.refreshTips, direction: i.direction, lastUpdated: i.lastUpdated, onBeforeTouchstart: i.onBeforeTouchstart, onBeforeTouchmove: i.onBeforeTouchmove, onBeforeTouchend: i.onBeforeTouchend, onBeforeRefresh: i.onBeforeRefresh, onBeforeLoad: i.onBeforeLoad, onRefresh: r, onLoad: l };
                return "html" != i.commandRefresh && (i.refreshPage = !1), i.urlrule && (i.url = a(i)), C ? C.init(c) : C = mue.scroll(c), L.toBottom = C.toBottom, L.scrollTop = C.scrollTop, L.to = C.to, B || o(i), i.onInited && i.onInited.call(L, i), this
            }

            function a(e) { return S.replace("(page)", e.page).replace("(size)", e.pageSize) }

            function o(e) { return e.callback && k.off("click.bui", e.handle).on("click.bui", e.handle, function(t) { e.callback.call(L, t) }), B = !0, this }

            function r() { return C.getPage() }

            function l(i, o, r) {
                function l(e, t, n) { var i = (e - 1) * t; return i + t >= n.length ? n.slice(i, n.length) : n.slice(i, i + t) }

                function c(t, a, o) {
                    var r, c, d;
                    r = "string" == typeof t ? t && JSON.parse(t) || {} : t || {}, c = P && P.field && "" == P.field.data ? r || [] : "object" === e.typeof(r) && e.unit.getKeyValue(P.field.data, r) || [];
                    var f = /\[?.+\]$/g;
                    if ("string" == typeof c && f.test(c)) try { d = JSON.parse(c) } catch (t) { d = c, e.showLog(t) } else d = c;
                    c = d && "array" === e.typeof(d) ? d : [], P.localData && (c = l(i, P.pageSize, c));
                    var h = n.template && n.template.call(L, c, r, i) || "";
                    T && T[u](h);
                    var p = C && C.isRefresh() || !1;
                    x.call(s, "success", t, i, o);
                    try { p ? (P.onRefresh && P.onRefresh.call(L, C, r, o), x.call(s, "refresh", t, i, o), P.refresh && C.reverse()) : (x.call(this, "onloadbefore"), P.onLoad && P.onLoad.call(L, C, r, o), x.call(s, "onload", t, i, o)), P.localData ? P.autoUpdatePage && s && s.updatePage(i, c) : P.autoUpdatePage && C && C.updatePage(i, c), O = c } catch (e) {}
                }
                var s = this,
                    u = r || P.commandLoad;
                return N = t.extend(!0, {}, R, P.data, N), P.field.page.length && e.unit.setKeyValue(P.field.page, i, N), P.field.size.length && e.unit.setKeyValue(P.field.size, o, N), P.page = L.config.page = i, P.data = N, P.localData ? void c(P.localData, 200) : (P.urlrule && (P.url = a(P)), P.success = c, P.fail = function(e, t, n) { x.call(s, "fail", e, i, n), P.onFail && P.onFail.call(L, e, i, n), C && C.fail(i, o, e) }, I = e.ajax(P), this)
            }

            function c() { var e = C.getPage(); return C.updatePage(e, O), this }

            function s() {
                var e = E;
                P.refreshPage || (e = L.config.page + 1);
                var t = P.pageSize;
                return x.call(this, "refreshbefore"), l(e, t, P.commandRefresh), this
            }

            function u() { return x.call(this, "refreshbefore"), C.refresh(), this }

            function d() { return x.call(this, "refreshbefore"), s(), this }

            function f(n, i) { var a; if ("string" == typeof i) try { a = JSON.parse(i) } catch (t) { return void e.showLog("data 参数必须为对象", "mue.list.modifyData") } else a = i; return N = t.extend(!0, {}, R, a) }

            function h() { return T.html(""), this }

            function p(e) {
                var e = 1 == e;
                k && (k.off("click.bui"), e && k.remove(), k = null), w("refreshbefore"), w("refresh"), w("success"), w("fail"), C && C.destroy(e)
            }

            function g(t) { var n = { scroll: C, ajax: I }; return e.widget.call(n, t) }

            function v(t, n) { return "data" == t && void 0 !== n ? f(t, n) : e.option.call(L, t, n) }

            function m(e) { return P = L.config = t.extend(!0, {}, L.config, e), N = P.data, this }

            function b(e) { return C.resize(e), this }

            function y(t, n) { return e.on.apply(L, arguments), this }

            function w(t, n) { return e.off.apply(L, arguments), this }

            function x(t) { L.self = this == window || this == L ? null : this, e.trigger.apply(L, arguments) }
            var k, T, I, O, C, j = { id: "", url: "", data: {}, method: "GET", dataType: "json", headers: {}, contentType: null, timeout: 2e4, field: { page: "page", size: "pageSize", data: "" }, scrollTips: { start: "努力加载中..", end: "上拉加载更多", nodata: "没有更多内容", last: "没有更多内容", fail: "点击重新加载" }, refreshTips: { start: "刷新中..", release: "松开刷新", end: "下拉刷新", fail: "点击加载", success: "刷新成功" }, lastUpdated: !1, cacheHeight: !0, page: 1, pageSize: 10, autoNext: !0, refreshPage: !0, autoUpdatePage: !0, autoScroll: !0, stopPropagation: !1, autoinit: !0, urlrule: !1, native: !0, needNative: !1, relative: !1, refresh: !0, direction: "y", stopHandle: "", children: ".mue-list", handle: ".mue-btn", header: ".mue-page header", footer: ".mue-page footer", height: 0, commandRefresh: "html", commandLoad: "append", scroll: !0, localData: null, template: null, onBeforeTouchstart: null, onBeforeTouchmove: null, onBeforeTouchend: null, onBeforeInit: null, onInited: null, onBeforeRefresh: null, onRefresh: null, onLoad: null, onFail: null, callback: null },
                L = { name: "list", handle: {}, on: y, off: w, empty: h, updatePage: c, getPage: r, refresh: u, reload: d, resize: b, modify: m, destroy: p, widget: g, option: v, config: P, init: i },
                P = L.config = t.extend(!0, {}, j, e.config.list, n),
                S = P.url,
                E = P.page,
                N = (P.page, {}),
                B = !1,
                R = P.data;
            return P.autoinit && i(P), L
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.searchbar = function(n) {
            function i(n) { var i = t.extend(!0, w, n); return i.onBeforeInit && i.onBeforeInit.call(y, i), p = e.obj(i.id), y.$el = p, w = y.config = i, v = p.find("input"), m = p.find(i.handleRemove), m.length < 1 && (v.after('<i class="' + i.handleRemove.substr(1) + '"></i>'), m = p.find(i.handleRemove)), m.hide(), x || a(i), i.onInited && i.onInited.call(y, i), this }

            function a(e) {
                p.off("click.bui", e.handle).on("click.bui", e.handle, function(t) {
                    document.activeElement.blur();
                    var n = v.val();
                    g = n, h.call(y, "search", t, n), e.callback && e.callback.call(y, t, n)
                }), p.off("click.bui", e.handleRemove).on("click.bui", e.handleRemove, function(n) {
                    document.activeElement.blur(), v.val("");
                    var i = v.val();
                    g = i, t(this).hide(), h.call(y, "remove", n, i), e.onRemove && e.onRemove.call(y, n, i)
                });
                var n = !1;
                return e.onInput && p.off("input", "input").on("compositionstart", function() { n = !0 }).on("compositionend", function(t) {
                    n = !1;
                    var i = v.val();
                    e.onInput.call(y, t, i)
                }).on("input", "input", function(t) {
                    var i = v.val();
                    g = i, i ? m.show() : m.hide(), h.call(y, "input", t, i), n || e.onInput.call(y, t, i)
                }), e.onChange && p.off("change", "input").on("change", "input", function(t) {
                    var n = v.val();
                    g = n, n ? m.show() : m.hide(), h.call(y, "change", t, n), e.onChange.call(y, t, n)
                }), x = !0, this
            }

            function o(e) { var t = e || g; return g = t, h.call(this, "search", {}, t), w.callback && w.callback.call(this, {}, t), this }

            function r(e) { return void 0 === e ? v.val() : (v.val(e), e && m.show(), y) }

            function l() { return v.val(""), m.hide(), this }

            function c(e) {
                var e = 1 == e;
                p && (p.off(), e && p.remove()), f("search"), f("remove"), f("input")
            }

            function s(t) { var n = {}; return e.widget.call(n, t) }

            function u(t, n) { return e.option.call(y, t, n) }

            function d(t, n) { return e.on.apply(y, arguments), this }

            function f(t, n) { return e.off.apply(y, arguments), this }

            function h(t) { y.self = this == window || this == y ? null : this, e.trigger.apply(y, arguments) }
            var p, g, v, m, b = { id: "", handle: ".icon-search,.btn-search", handleRemove: ".icon-removefill", delayTime: 400, onInput: null, onChange: null, onRemove: null, autoinit: !0, onBeforeInit: null, onInited: null, callback: null },
                y = { name: "searchbar", handle: {}, on: d, off: f, search: o, reset: l, value: r, destroy: c, widget: s, option: u, config: w, init: i },
                w = y.config = t.extend(!0, {}, b, e.config.searchbar, n),
                x = !1;
            return w.autoinit && i(w), y
        }
    }(bui || {}, libs),
    function(e, n) {
        e.select = function(i) {
            function a(t) {
                var i = n.extend(!0, Y, t);
                if (i.onBeforeInit && i.onBeforeInit.call(W, i), i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), te = [], ne = [], ie = [], ae = [], _ = i.id ? e.obj(i.id).attr("id") : _, Y = W.config = i, ee = "function" == typeof i.template ? i.template : f, i.data && i.data.length || re) var a = ee.call(this, i.data);
                if (W.template = ee, i.popup)
                    if (q) H.find(".mue-dialog-list").html(a);
                    else {
                        if (i.id) H = e.obj(i.id);
                        else {
                            var r = u();
                            n(i.appendTo).append(r), H = e.obj(_), H.find(".mue-dialog-list").html(a)
                        }
                        q = e.dialog({ id: _, effect: i.effect, mask: i.mask, zIndex: i.zIndex, position: i.position, autoClose: !1, height: i.height, width: i.width, zoom: !1, fullscreen: i.fullscreen, onMask: function(e) { g() } }), i.appendTo && i.id && (n(i.appendTo).append(H.prop("outerHTML")), H.remove(), H = n(i.id))
                    }
                else {
                    if (!i.id) return void e.hint("select id 必须有");
                    H = e.obj(i.id), (i.data && i.data.length || re) && H.html(a)
                }
                return W.$el = H, $ = H.find(i.handle), i.data && i.data.length < 1 && o(), c(i), i.value && m(i.value), i.onInited && i.onInited.call(W, i), this
            }

            function o() {
                var e = [],
                    t = [];
                return $.find("input").each(function(i, a) {
                    var o = n(this);
                    if (!(o.length < 1)) {
                        var l = o.val(),
                            c = o.attr("text"),
                            s = o.attr("image"),
                            u = o.attr("icon"),
                            d = o.is(":checked");
                        Y.data[i] = {}, Y.data[i][X] = c, Y.data[i][Z] = l, Y.data[i][Q] = s, Y.data[i][G] = u, e.push(l), t.push(c), d && r({ name: c, value: l, index: i })
                    }
                }), { value: e, text: t }
            }

            function r(e) {
                var t = parseInt(e.index, 10);
                switch (Y.type) {
                    case "radio":
                    case "select":
                        te = [], ne = [], ie = [], ae = [], te.push(e.name), ne.push(e.value), ae.push(e.icon), ie.push(t);
                        break;
                    case "checkbox":
                        te.push(e.name), ne.push(e.value), ae.push(e.icon), ie.push(t)
                }
            }

            function l(t) {
                var n = e.array.filter(i.data, t, Y.field.name),
                    a = '没有与此相关的结果:<span class="danger-reverse">' + t + "</span>",
                    o = e.guid();
                n.length && (a = f(n, o)), H.find(".mue-dialog-result").css("display", "block").html(a)
            }

            function c(t) {
                function i(e) { e ? (d.css("display", "block"), u.css("display", "block")) : (d.css("display", "none"), u.css("display", "none")) }
                t.trigger && (M = e.obj(t.trigger), oe = t.placeholder || M.text() || t.title, V = M.find(t.triggerChildren).length ? M.find(t.triggerChildren) : M, z = t.placeholder || n.trim(V.html() || ""), t.placeholder && V.html(t.placeholder), M.off("click.bui").on("click.bui", function(e) {
                    var i = t.onBeforeOpen && t.onBeforeOpen.call(W);
                    n(this).hasClass("disabled") || 0 == i || h()
                }));
                var a = function(i) {
                        var a = n(i.target[i.target.length - 1]);
                        if (!a.attr("disabled")) {
                            var o = a.val(),
                                l = a.attr("text"),
                                c = a.attr("index"),
                                s = "INPUT" !== i.srcElement.nodeName ? a.is(":checked") : !a.is(":checked");
                            i.target = a[0], i.index = c, s ? s && (t.toggle || "checkbox" == t.type) && (F.call(W, "uncheck", i), e.array.remove(te, l), e.array.remove(ne, o), e.array.remove(ie, c), e.array.remove(ae, c)) : (F.call(W, "check", i), r({ name: l, value: o, index: c })), J && t.onChange && t.onChange.call(W, i), m(ne.join(",") || "", i), w(te.join(",") || ""), i.stopPropagation()
                        }
                    },
                    o = function(e) {
                        var i = null;
                        e.srcElement = e.originalEvent && e.originalEvent.srcElement || e.srcElement, i = n(this).find("input"), e.target = [i[0]], a.call(W, e), t.popup && t.autoClose && g(), F.call(W, "select", e), e.stopPropagation()
                    },
                    c = t.needSearch ? ".mue-dialog-list " + t.handle : t.handle;
                H.off("click.bui", c).on("click.bui", c, o);
                var s = function(e) { t.callback && t.callback.call(W, e, W), e.stopPropagation() };
                H.off("click.bui", t.callbackHandle).on("click.bui", t.callbackHandle, s);
                var u = H.find(".mue-searchbar-close"),
                    d = H.find(".mue-dialog-result"),
                    f = H.find(".mue-searchbar input");
                t.data && t.data.length && t.needSearch && (H.find(".btn-search").click(function(e) {
                    var t = H.find(".mue-searchbar input").val();
                    l(t), i(t), e.stopPropagation()
                }), f.on("input", function(e) {
                    var t = n(this).val();
                    l(t), i(t), e.stopPropagation()
                }), u.click(function(e) { f.val(""), d.css("display", "none"), n(this).css("display", "none"), e.stopPropagation() }), H.on("click.bui", ".mue-dialog-result .mue-btn", function(i) {
                    var a = n(this).find("input"),
                        o = "INPUT" !== i.srcElement.nodeName ? a.is(":checked") : !a.is(":checked"),
                        l = a.attr("text"),
                        c = a.attr("value"),
                        s = e.array.index(t.data, c, "value");
                    o && (t.toggle || "checkbox" == t.type) ? (a.prop("checked", !1), F.call(W, "uncheck", i), e.array.remove(te, l), e.array.remove(ne, c), e.array.remove(ie, s), e.array.remove(ae, s), t.onChange && t.onChange.call(W, i)) : (a.prop("checked", !0), F.call(W, "check", i), r({ name: l, value: c, index: s }), t.onChange && t.onChange.call(W, i)), m(ne.join(",") || "", i), w(te.join(",") || ""), i.stopPropagation()
                })), re = !0
            }

            function s() { H.find(".mue-searchbar-close").trigger("click") }

            function u(e) {
                var t = "",
                    i = Y.templateTitle ? Y.templateTitle.call(W, Y) || "" : '<div class="mue-dialog-title">' + Y.title + "</div>";
                return Y.popup && (t += '<div id="' + _ + '" class="mue-dialog mue-dialog-select">',
                    (Y.title || Y.needSearch) && (t += '<div class="mue-dialog-head">\n                                ' + (Y.title || Y.templateTitle ? i : "") + "\n                                " + (Y.needSearch ? '<div class="mue-searchbar mue-box">\n                                    <div class="span1">\n                                        <div class="mue-input">\n                                            <i class="icon-search"></i>\n                                            <input type="search" value="" placeholder="请输入关键字" />\n                                            <div class="mue-searchbar-close"><i class="icon-removefill"></i></div>\n                                        </div>\n                                    </div>\n                                </div>' : "") + "\n                            </div>"), t += '  <div class="mue-dialog-main">'), Y.popup && (t += '<div class="mue-dialog-list"></div>', t += Y.needSearch ? '<div class="mue-dialog-result"></div>' : "", t += "  </div>", Y.buttons.length > 0 && (t += '    <div class="mue-dialog-foot mue-box">', n.each(Y.buttons, function(e, n) { t += '        <div class="span1">', t += '             <div class="mue-btn ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name || n) + "</div>", t += "        </div>" }), t += "    </div>"), t += "</div>"), t
            }

            function d(t) {
                var t = t || {},
                    n = document.createElement("input");
                for (var i in t) "string" != typeof t[i] && "number" != typeof t[i] || n.setAttribute(i, t[i]);
                switch (Y.type) {
                    case "mulelect":
                        n.setAttribute("type", "checkbox"), n.setAttribute("class", Y.className || "mue-choose");
                        break;
                    case "select":
                        n.setAttribute("type", "radio"), n.setAttribute("class", Y.className || "mue-choose");
                        break;
                    case "radio":
                        n.setAttribute("type", "radio"), n.setAttribute("class", Y.className || "mue-radio");
                        break;
                    case "checkbox":
                        n.setAttribute("type", "checkbox"), n.setAttribute("class", Y.className || "mue-choose");
                        break;
                    default:
                        n.setAttribute("type", "checkbox")
                }
                return e.array.compare(ne, t.value) && n.setAttribute("checked", "true"), n
            }

            function f(t, i) {
                var a = i || K,
                    o = "",
                    r = "";
                return n.each(t, function(t, i) {
                    var o = "string" == typeof i ? i : i[X] || i || "",
                        l = i && i[Q] ? i[Q] || i : "",
                        c = i && i[G] ? i[G] || i : "",
                        s = i && i[Z] ? i[Z] || i : i || o || t,
                        u = t,
                        f = { name: a, value: s, text: o, index: u };
                    l && (f.image = l), c && (f.icon = c), i = i && "object" === e.typeof(i) ? i : {};
                    var h = n.extend(!0, {}, i, f),
                        p = d(h).outerHTML;
                    if (r += '    <div class="mue-btn mue-box mue-btn-line">', "left" == Y.direction && (r += p), l) {
                        var g = e.unit.endWithImage(l) ? '<div class="thumbnail"><img src="' + l + '" alt="" /></div>' : '<div class="thumbnail ' + l + '"></div>';
                        r += g
                    }
                    if (c) {
                        var v = e.unit.endWithImage(c) ? '<i class="icon"><img src="' + c + '" alt="" /></i>' : '<i class="icon ' + c + '"></i>';
                        r += v
                    }
                    "center" == Y.direction ? (r += '        <div class="span1" align="center">' + o + "</div>", r += p) : r += '        <div class="span1">' + o + "</div>", "right" == Y.direction && (r += p), r += "    </div>"
                }), o += '    <div class="mue-list mue-list-select">', o += r, o += "    </div>"
            }

            function h(e) { F.call(this, "beforeshow"); var n = {}; return "function" == typeof e ? n.callback = function() { e && e.call(W), F.call(W, "show") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), Y.popup && q ? (!q.isOpen() && q.open(n), F.call(W, "show")) : (H.css("display", "block"), n.callback ? n.callback() : F.call(W, "show")), this }

            function p() { return H.html(""), Y.data = [], re = !1, this }

            function g(e) { F.call(this, "beforehide"); var n = {}; return "function" == typeof e ? n.callback = function() { e && e.call(W) } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), Y.popup && q ? (q.isOpen() && q.close(n.effect || n.callback), F.call(W, "hide")) : (H.css("display", "none"), n.callback ? n.callback() : F.call(W, "hide")), this }

            function v() { return ie.join(",") }

            function m(t, n) {
                if (void 0 === t) return ne.join(",");
                n = n || event, $ = H.find(Y.handle);
                var i = [],
                    a = [],
                    o = [],
                    r = [],
                    l = [],
                    c = [];
                "string" == typeof t && t.indexOf(",") > -1 ? c = t.split(",") : t instanceof Array ? c = t : t && c.push(t), Y.data && Y.data.forEach(function(t, n) {
                    var s = t && "object" === e.typeof(t) && t.hasOwnProperty(X) ? String(t[X]) : String(t),
                        u = t && "object" === e.typeof(t) && t.hasOwnProperty(G) ? String(t[G]) : "",
                        d = t && "object" === e.typeof(t) && t.hasOwnProperty(Z) ? String(t[Z]) : String(t) || String(n),
                        f = $.eq(n).find("input");
                    if ("" == t) return f.prop("checked", !1), te = [], ne = [], ie = [], void(ae = []);
                    var h = e.array.index(c, s);
                    e.array.index(c, d) > -1 || h > -1 ? ("radio" != Y.type && "select" != Y.type || (a = [], o = [], l = [], r = []), a.push(s), o.push(d), r.push(u), l.push(n), i[n] = f, f.prop("checked", !0)) : f.prop("checked", !1)
                }), te = a.slice(0), ne = o.slice(0), ie = l.slice(0), ae = r.slice(0);
                var s = n || { target: i[i.length - 1], index: ie };
                F.call(W, "change", s), !J && Y.onChange && Y.onChange.call(W, n), M && Y.change && (M.attr("value", o.join(",")), V.text(te.join(",") || oe)), H.attr("value", o.join(",")), J = !1
            }

            function b() { var e = []; return ne.forEach(function(t, n) { e.push({ value: t, name: te[n], index: ie[n], icon: ae[n] }) }), e }

            function y() {
                var e = [];
                return Y.data && Y.data.forEach(function(t, n) {
                    var i = $.eq(n).find("input"),
                        a = i.prop("checked");
                    t.checked = a, e.push(t)
                }), e
            }

            function w(e) { return void 0 === e ? te.join(",") : (M && Y.change && (M.attr("text", e), V.html(e || z)), H.attr("text", e), this) }

            function x(e) { var t = []; return String(e).indexOf(",") > -1 ? t = e.split(",") : t.push(parseInt(e)), te = [], ne = [], t.forEach(function(e, t) { Y.data[e] && te.push(Y.data[e][X] || Y.data[e]), Y.data[e] && ne.push(Y.data[e][Z] || Y.data[e] || t) }), "checkbox" == Y.type || "mulselect" == Y.type ? (w(te.join(",")), m(ne.join(","))) : (w(te[0]), m(ne[0])), this }

            function k(t) {
                var n = [];
                return String(t).indexOf(",") > -1 ? n = t.split(",") : n.push(parseInt(t)), n.forEach(function(t, n) {
                    var i = $.eq(t).find("input"),
                        a = i.val(),
                        o = i.attr("text");
                    e.array.delete(te, o), e.array.delete(ne, a), i.prop("checked", null)
                }), F.call(W, "change", {}), this
            }

            function T() { if ("checkbox" == Y.type) { x(Y.data.map(function(e, t) { return t }).join(",")) } else x(0); return this }

            function I() { return te = [], ne = [], ie = [], ae = [], $.find("input").prop("checked", null), m(""), w(""), F.call(this, "reset"), this }

            function O() { return I(), w(oe), this }

            function C() {
                if ("checkbox" == Y.type) {
                    var t = te.map(function(e, t) { return e });
                    ne.map(function(e, t) { return e });
                    te = [], ne = [], Y.data && Y.data.forEach(function(n, i) {
                        var a = $.eq(i).find("input");
                        e.array.index(t, n[X]) > -1 ? a.prop("checked", null) : (a.prop("checked", !0), te.push(n[X]), ne.push(n[Z]))
                    }), m(ne.join(",") || ""), w(te.join(",") || "")
                } else I();
                return this
            }

            function j(t) {
                var n = [];
                return String(t).indexOf(",") > -1 ? n = t.split(",") : n.push(t), n.forEach(function(t, n) {
                    var i = null;
                    Y.data.forEach(function(n, a) {
                        var o = n[X] || n,
                            r = n[Z] || n;
                        t != r && t != o || (i = $.eq(a).find("input"), i.prop("checked", null), e.array.remove(te, o), e.array.remove(ne, r))
                    })
                }), F.call(W, "change", {}), this
            }

            function L() { var e = M; return e && e.addClass("disabled"), this }

            function P() { var e = M; return e && e.removeClass("disabled"), this }

            function S(e) {
                if (void 0 === e) $.find("input").attr("disabled", !0);
                else {
                    if ("number" != typeof e) return void console.log("index 必须为数字");
                    $.eq(e).find("input").attr("disabled", !0)
                }
                return this
            }

            function E(e) {
                if (void 0 === e) $.find("input").removeAttr("disabled");
                else {
                    if ("number" != typeof e) return void console.log("index 必须为数字");
                    $.eq(e).find("input").removeAttr("disabled")
                }
                return this
            }

            function N(e) { var e = 1 == e; return H && (H.off(), e && H.remove()), M && (M.off("click.bui"), e && M.remove()), q && q.destroy(e), re = !1, A("show"), A("hide"), A("change"), A("select"), A("check"), A("uncheck"), this }

            function B(t) { var n = { dialog: q || {} }; return e.widget.call(n, t) }

            function R(t, n) { return e.option.call(W, t, n) }

            function D(t, n) { return e.on.apply(W, arguments), this }

            function A(t, n) { return e.off.apply(W, arguments), this }

            function F(t) { W.self = this == window || this == W ? null : this, e.trigger.apply(W, arguments) }
            var M, H, z, V, $, q, U = { id: "", trigger: "", triggerChildren: ".span1", handle: ".mue-list .mue-btn", className: "", name: "", appendTo: "", data: [], popup: !0, title: "", autoClose: !1, placeholder: "", field: { name: "name", value: "value", image: "image", icon: "icon" }, height: 0, width: 0, mask: !0, zIndex: 110, change: !0, toggle: !1, effect: "fadeInUp", type: "select", direction: "left", position: "bottom", fullscreen: !1, needSearch: !1, value: "", buttons: [], onChange: null, autoinit: !0, onBeforeOpen: null, onBeforeInit: null, template: null, onInited: null, callbackHandle: ".mue-dialog-foot .mue-btn", callback: null },
                W = { name: "select", handle: {}, on: D, off: A, value: m, values: b, allValues: y, index: v, active: x, unactive: k, disabled: L, enabled: P, disabledSelect: S, enabledSelect: E, template: ee, empty: p, text: w, show: h, hide: g, selectAll: T, selectNone: I, reset: O, clearSearch: s, unselect: C, unselected: j, destroy: N, widget: B, option: R, config: Y, init: a },
                Y = W.config = n.extend(!0, {}, U, e.config.select, i),
                _ = e.guid(),
                K = Y.name || e.guid(),
                J = !0,
                X = Y.field.name,
                Z = Y.field.value,
                Q = Y.field.image,
                G = Y.field.icon,
                ee = null,
                te = [],
                ne = [],
                ie = [],
                ae = [],
                oe = "",
                re = !1;
            return Y.autoinit && a(Y), W
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.dropdown = function(n) {
            function i(n) {
                var i = t.extend(!0, E, n);
                if (i.onBeforeInit && i.onBeforeInit.call(S, i), !i.id) return void e.showLog("dropdown id不能为空", "mue.dropdown.init");
                if (T = e.obj(i.id), S.$el = T, E = S.config = i, I = T.children(i.handle), L = i.target ? T.find(i.target) : I.next(), R = I.text(), i.data && i.data.length) {
                    var l = "function" == typeof i.template ? i.template.call(S, i.data) : p(i.data);
                    L.length ? L.remove() && I.after(l) : T.append(l), L = T.find(i.target)
                }
                C = i.relative, O = T.attr("position") || i.position;
                var c = T[0] && T[0].offsetLeft >= document.documentElement.clientWidth ? 0 : T[0] && T[0].offsetLeft,
                    u = i.width ? "auto" : -c + "px",
                    d = { bottom: { menuPosition: "mue-menu-bottom", arrowPosition: "mue-arrow-up", left: u }, top: { menuPosition: "mue-menu-top", arrowPosition: "mue-arrow-down", left: u }, left: { menuPosition: "mue-menu-left", arrowPosition: "mue-arrow-right", left: "auto" }, right: { menuPosition: "mue-menu-right", arrowPosition: "mue-arrow-left", left: "100%" } };
                if (j = i.width > 0 ? i.width : C ? N : i.width, parseFloat(j) > 0 && L.width(j), o(i.showArrow ? d[O].arrowPosition + " " + d[O].menuPosition : d[O].menuPosition, d[O].left), i.value) r(i.value);
                else {
                    var f = L.find(i.targetHandle + ".active").eq(0),
                        h = f.index();
                    h > -1 && s(h)
                }
                return B || a(i), i.onInited && i.onInited.call(S, i), this
            }

            function a(e) {
                var n = function(n) {
                        if (!t(this).hasClass("disabled")) {
                            var i = t(this).hasClass("active"),
                                a = e.target ? t(this).parent().find(e.target) : t(this).next();
                            h(), i ? (t(this).removeClass("active"), a.css("display", "none"), k.call(S, "hide")) : (t(this).addClass("active"), a.css("display", "block"), k.call(S, "show")), n.stopPropagation()
                        }
                    },
                    i = function(n) {
                        var i = t(this),
                            a = i.parent(),
                            o = r(),
                            l = i.attr("value") || "";
                        t.trim(i.text()), void 0 != a.attr("change") ? a.attr("change") : e.change;
                        e.showActive && i.addClass("active").siblings().removeClass("active"), r.call(this, l), E.autoClose && d(), n.target = this, e.callback && e.callback.call(S, n), o !== l && e.onChange && e.onChange.call(S, n), E.stopPropagation && n.stopPropagation()
                    };
                I.off("click.bui").on("click.bui", n), T.off("click.bui", e.targetHandle).on("click.bui", e.targetHandle, i);
                var a = function(e) { h(), e.stopPropagation() };
                E.autoClose && t("body").off("click.bui").on("click.bui", ":not(.mue-dropdown)", a), B = !0
            }

            function o(e, t) { L.addClass(e), C && L.css({ left: t }) }

            function r(n) {
                if (void 0 === n) { return I.attr("value") }
                var i = "htmllielement" === e.typeof(this),
                    a = i && t(this).parent(),
                    o = i ? t(this).parents(".mue-dropdown").children(E.handle) : I,
                    r = i ? a.find(E.targetHandle) : L.find(E.targetHandle);
                if (r.removeClass("active"), E.data && E.data.length) {
                    if ("" == n) return D = "", void o.attr("value", n);
                    var l = e.array.index(E.data, String(n), "value"),
                        c = e.array.index(E.data, String(n), "name");
                    l > -1 ? (r.eq(l).addClass("active"), o.attr("value", n), E.change && u.call(this, E.data[l].name), D = n) : c > -1 && (r.eq(c).addClass("active"), o.attr("value", E.data[c].value), E.change && u.call(this, n), D = E.data[c].value)
                } else r.each(function(e, i) {
                    var a = i.innerText,
                        r = i.getAttribute("value");
                    a != n && r != n || (t(this).addClass("active"), o.attr("value", r), E.change && u.call(this, a), D = r)
                });
                E.change || k.call(S, "change")
            }

            function l() { return { name: A, value: D } }

            function c() { return D = "", r(""), u(R), d(), this }

            function s(e) { e = parseInt(e); var n = L.find(E.targetHandle).eq(e); if (n.length >= 0) { r(n.attr("value") || t.trim(n.text()) || ""), E.showActive && n.addClass("active").siblings().removeClass("active") } return this }

            function u(n) {
                if (void 0 === n) { return A || t.trim(I.text()) }
                var i = "htmllielement" === e.typeof(this),
                    a = i ? t(this).parents(".mue-dropdown").children(E.handle) : I,
                    o = a.children(E.handleChildren);
                return o.length ? o.text(n) : a.text(n), A = n, k.call(S, "change"), this
            }

            function d() { return I.removeClass("active"), L.css("display", "none"), k.call(this, "hide"), this }

            function f() { return I.addClass("active"), L.css("display", "block"), k.call(this, "show"), this }

            function h() { return t(".mue-dropdown > .mue-btn").removeClass("active"), t(".mue-dropdown > .mue-list").css("display", "none"), k.call(this, "hide"), this }

            function p(e) { var t = ""; return t += '<ul class="mue-list">', e.map(function(e, n) { t += '<li class="mue-btn" value="' + e.value + '">' + e.name + "</li>" }), t += "</ul>" }

            function g() { var e = I; return e && e.addClass("disabled"), this }

            function v() { var e = I; return e && e.removeClass("disabled"), this }

            function m(e) {
                var e = 1 == e;
                T && (T.off("click.bui"), e && T.remove()), I && (I.off("click.bui"), e && I.remove()), t("body").off("click.bui"), x("show"), x("hide")
            }

            function b(t) { var n = {}; return e.widget.call(n, t) }

            function y(t, n) { return e.option.call(S, t, n) }

            function w(t, n) { return e.on.apply(S, arguments), this }

            function x(t, n) { return e.off.apply(S, arguments), this }

            function k(t) { S.self = this == window || this == S ? null : this, e.trigger.apply(S, arguments) }
            var T, I, O, C, j, L, P = { id: "", handle: ".mue-btn", handleChildren: ".span1", target: ".mue-list", targetHandle: ".mue-btn", data: null, position: "bottom", showArrow: !1, showActive: !0, autoClose: !0, stopPropagation: !1, width: 0, value: "", relative: !0, change: !0, autoinit: !0, template: null, onBeforeInit: null, onInited: null, callback: null, onChange: null },
                S = { name: "dropdown", handle: {}, on: w, off: x, active: s, disabled: g, enabled: v, value: r, values: l, reset: c, text: u, hide: d, show: f, hideAll: h, destroy: m, widget: b, option: y, config: E, init: i },
                E = S.config = t.extend(!0, {}, P, e.config.dropdown, n),
                N = document.documentElement.clientWidth,
                B = !1,
                R = "",
                D = "",
                A = "";
            return E.autoinit && i(E), S
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.accordion = function(n) {
            function i(n) { var i = t.extend(!0, j, n); return i.onBeforeInit && i.onBeforeInit.call(C, i), x = document.documentElement.clientWidth, k = document.documentElement.clientHeight, L = e.obj(i.id) || e.obj("." + e.prefix("accordion")), j = C.config = i, T = i.handle.indexOf("#") > -1 ? e.obj(i.handle) : L.children(i.handle), I = i.target.indexOf("#") > -1 ? e.obj(i.target) : L.children(i.target), a(i), P || o(i), i.onInited && i.onInited.call(C, i), this }

            function a(e) { T.removeClass("active"), I.css("display", "none"), parseFloat(e.targetHeight) > 0 && I.height(e.targetHeight), parseFloat(e.height) > 0 && L.height(e.height) }

            function o(e) {
                var n = function(n) {
                    if (!t(this).hasClass("disabled") && !t(this).attr("href")) {
                        if (!1 === (e.callback && e.callback.call(C, n))) return !1;
                        c.call(this, n, e), (e.stopPropagation || !t(this).attr("href")) && n.stopPropagation()
                    }
                };
                e.handle.indexOf("#") > -1 ? !e.lock && T.off("click.bui").on("click.bui", n) : !e.lock && L.off("click.bui").on("click.bui", e.handle, n), P = !0
            }

            function r(e) { var t; return t = "number" == typeof e ? T.eq(e) : T, t && t.addClass("disabled"), this }

            function l(e) { var t; return t = "number" == typeof e ? T.eq(e) : T, t && t.removeClass("disabled"), this }

            function c(n, i) {
                var a = t(this),
                    o = a.hasClass("active"),
                    r = (T.index(this), i.target.indexOf("#") > -1 ? e.obj(i.target) : a.next(i.target));
                i.single ? o ? (a.removeClass("active"), r.css("display", "none"), w.call(C, "hide", n)) : (p(), a.addClass("active"), r.css("display", "block"), w.call(C, "show", n)) : o ? (a.removeClass("active"), r.css("display", "none"), w.call(C, "hide", n)) : (a.addClass("active"), r.css("display", "block"), w.call(C, "show", n))
            }

            function s(e) {
                var e = Number(e) || 0,
                    t = T.eq(e).length ? T.eq(e) : T,
                    n = I.eq(e).length ? I.eq(e) : t.next(j.target);
                return t.addClass("active"), n.css("display", "block"), w.call(this, "show", { target: T[e] }), this
            }

            function u(e) {
                var e = Number(e) || 0,
                    t = T.eq(e).length ? T.eq(e) : T,
                    n = I.eq(e).length ? I.eq(e) : t.next(j.target);
                return t.removeClass("active"), n.css("display", "none"), w.call(this, "hide", { target: T[e] }), this
            }

            function d() { return L.length > 1 ? L.each(function(e, t) { f(0, t) }) : f(0), w.call(this, "show", { target: T[0] }), this }

            function f(e, n) {
                var e = e || 0;
                (n ? t(n) : L).children(j.handle).eq(e).addClass("active").next(j.target).css("display", "block")
            }

            function h() { return T.each(function(e, n) { t(n).addClass("active").next(j.target).css("display", "block") }), w.call(this, "showall", { target: T }), this }

            function p() { return T.each(function(e, n) { t(n).removeClass("active").next(j.target).css("display", "none") }), w.call(this, "hideall", { target: T }), this }

            function g(e) { L && (L.off("click.bui"), L.remove(), L = null), y("hide"), y("show") }

            function v(t) { var n = {}; return e.widget.call(n, t) }

            function m(t, n) { return e.option.call(C, t, n) }

            function b(t, n) { return e.on.apply(C, arguments), this }

            function y(t, n) { return e.off.apply(C, arguments), this }

            function w(t) { C.self = this == window || this == C ? null : this, e.trigger.apply(C, arguments) }
            var x, k, T, I, O = { id: "", handle: "dt", target: "dd", height: 0, targetHeight: 0, single: !1, stopPropagation: !1, lock: !1, autoinit: !0, onBeforeInit: null, onInited: null, callback: null },
                C = { name: "accordion", handle: {}, on: b, off: y, showFirst: d, showAll: h, hideAll: p, disabled: r, enabled: l, destroy: g, show: s, hide: u, widget: v, option: m, config: j, init: i },
                j = C.config = t.extend(!0, {}, O, e.config.accordion, n),
                L = null,
                P = !1;
            return j.autoinit && i(j), C
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.rating = function(n) {
            function i(n) { var i = t.extend(!0, j, n); return i.onBeforeInit && i.onBeforeInit.call(C, i), i.id ? (w = e.obj(i.id), C.$el = w, j = C.config = i, x = i.fullClassName, k = i.halfClassName, l(i), L || r(i), i.onInited && i.onInited.call(C, i), this) : void e.hint("rating id不能为空") }

            function a(t) {
                var n = (e.guid(), ""),
                    i = 0,
                    a = t.stars;
                for (i = 0; i < a; i++) n += '<div class="mue-rating-cell" ></div>';
                return n
            }

            function o(e) {
                var t, n = "",
                    e = String(e) || String(T),
                    i = 0,
                    a = j.stars,
                    o = [];
                o = e.indexOf(".") > -1 ? e.split(".") : [e, 0];
                var r = parseInt(o[0]);
                for (t = o[1] / 10 * 100 + "%", i = 0; i < a; i++) i < r && (n += '<div class="mue-rating-cell" ><div class="mue-rating-cell-full" style="width:100%;">&nbsp;</div></div>'), i == r && (n += '<div class="mue-rating-cell" ><div class="mue-rating-cell-full" style="width:' + t + ';">&nbsp;</div></div>'), i > r && (n += '<div class="mue-rating-cell" ><div class="mue-rating-cell-full" style="width:0;">&nbsp;</div></div>');
                return n
            }

            function r(e) {
                if (!e.disabled) {
                    var n = String(e.value).indexOf(".") > -1 ? 1 : 0;
                    w.off("click.bui", e.handle).on("click.bui", e.handle, function(i) {
                        var a = t(this).index(),
                            o = parseInt(s()),
                            r = 0;
                        if (e.half) { r = n % 2 == 0 ? a + .5 : a + 1 } else r = a + 1;
                        c(r), s(r), n++, o !== r && e.onChange && e.onChange.call(C, i), e.callback && e.callback.call(C, i), i.stopPropagation()
                    })
                }
                L = !0
            }

            function l(e) {
                if (e.render) {
                    var t = a(e);
                    w.html(t), I = w.children(e.handle)
                } else I = w.children(e.handle);
                s(e.value)
            }

            function c(e) {
                var n = [];
                e = String(e), j.half && e.indexOf(".") > -1 ? n = e.split(".") : n.push(e), I.removeClass(x).removeClass(k), I.each(function(e, i) {
                    var a = parseInt(n[0]);
                    1 == n.length && e < a ? t(i).addClass(x) : 2 == n.length && (e < a && t(i).addClass(x), e == a && t(i).addClass(k))
                })
            }

            function s(e) { var t = /^-?\d+(\.\d+)?$/; return void 0 !== e && t.test(e) ? (w.attr("value", e), c(e), T = e, y.call(C, "change", e)) : T = w.attr("value"), T }

            function u() { return s(j.value), this }

            function d(e) {
                var t = o(e);
                w.attr("value", e).html(t), T = e
            }

            function f(e) { var e = 0 != e; return e ? (w.off("click.bui", j.handle), y.call(C, "disabled")) : h(), this }

            function h(e) { return j.disabled = !1, r(), y.call(C, "undisabled"), this }

            function p(e) {
                var e = 1 == e;
                w && (w.off("click.bui"), e && w.remove()), b("change")
            }

            function g(t) { var n = {}; return e.widget.call(n, t) }

            function v(t, n) { return e.option.call(C, t, n) }

            function m(t, n) { return e.on.apply(C, arguments), this }

            function b(t, n) { return e.off.apply(C, arguments), this }

            function y(t) { C.self = this == window || this == C ? null : this, e.trigger.apply(C, arguments) }
            var w, x, k, T, I, O = { id: "", handle: ".mue-rating-cell", fullClassName: "mue-rating-cell-full", halfClassName: "mue-rating-cell-half", half: !1, stars: 5, value: 0, disabled: !1, render: !0, autoinit: !0, onBeforeInit: null, onChange: null, onInited: null, callback: null },
                C = { name: "rating", handle: {}, on: m, off: b, disabled: f, show: d, value: s, reset: u, destroy: p, widget: g, option: v, config: j, init: i },
                j = C.config = t.extend(!0, {}, O, e.config.rating, n),
                L = !1;
            return j.autoinit && i(j), C
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.actionsheet = function(i) {
            function a(t) {
                var i = n.extend(!0, O, t);
                if (i.onBeforeInit && i.onBeforeInit.call(I, i), x = e.obj(i.trigger), O = I.config = i, C) e.obj(O.id).find(".mue-list").html(l(i.data || i.buttons));
                else {
                    var a = "function" == typeof i.template ? i.template.call(I, i.data || i.buttons) : r(i.data || i.buttons);
                    e.obj(i.appendTo).append(a)
                }
                return y || (y = e.dialog({ id: O.id, position: i.position, mask: i.mask, effect: i.effect, opacity: i.opacity, zIndex: i.zIndex, onBeforeOpen: i.onBeforeOpen, onBeforeClose: i.onBeforeClose, onMask: function() { c(), i.onMask && i.onMask() } })), k = y.$el(), w = k.find(i.handle), C || o(), i.onInited && i.onInited.call(I, i), this
            }

            function o() {
                var e = function(e) { e.target = this, O.callback && O.callback.call(I, e, I), b.call(I, "click", e) },
                    t = function(e) { n(this).hasClass("disabled") || s.call(this) };
                k && k.off("click.bui", O.handle).on("click.bui", O.handle, e), x && x.off("click.bui").on("click.bui", t), C = !0
            }

            function r(e) {
                var t = parseFloat(O.width),
                    n = t > 0 ? "width:" + t + "px;left:50%;right:0;margin-left:-" + t / 2 + "px;" : "",
                    i = "";
                return e && e.length && (i += '<div id="' + O.id + '" class="mue-actionsheet" style="' + n + '">', i += '    <ul class="mue-list">', i += l(e), i += "    </ul>", O.cancelText && (i += '    <div class="mue-btn" value="cancel">' + O.cancelText + "</div>"), i += "</div>"), i
            }

            function l(e) { var t = ""; return n.each(e, function(e, n) { t += '        <li class="mue-btn ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name || "") + "</li>" }), t }

            function c(e) { b.call(this, "beforehide"); var n = {}; return "function" == typeof e ? n.callback = function() { e && e.call(I), b.call(I, "hide") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), y.isOpen() && y.close(n), this }

            function s(e) { b.call(this, "beforeshow"); var n = {}; return "function" == typeof e ? n.callback = function() { e && e.call(I), b.call(I, "show") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), !y.isOpen() && y.open(n), this }

            function u(e) { var t = x; return t && t.addClass("disabled"), this }

            function d() { var e = x; return e && e.removeClass("disabled"), this }

            function f(e) {
                var e = 1 == e;
                x && x.off("click.bui"), m("hide"), m("show"), y && y.destroy(e)
            }

            function h(t) { var n = { dialog: y }; return e.widget.call(n, t) }

            function p(t, n) { return "buttons" == t && void 0 !== n ? g(t, n) : e.option.call(I, t, n) }

            function g(t, n) {
                if (n && "array" === e.typeof(n)) {
                    var i = l(n);
                    e.obj(O.id).find(".mue-list").html(i)
                }
            }

            function v(t, n) { return e.on.apply(I, arguments), this }

            function m(t, n) { return e.off.apply(I, arguments), this }

            function b(t) { I.self = this == window || this == I ? null : this, e.trigger.apply(I, arguments) }
            var y, w, x, k, T = { id: "", appendTo: ".mue-page", trigger: "", handle: ".mue-btn", position: "bottom", effect: "fadeInUp", zIndex: 110, width: 0, mask: !0, opacity: .6, data: null, buttons: [], template: null, cancelText: "取消", autoinit: !0, onMask: null, onBeforeOpen: null, onBeforeClose: null, onBeforeInit: null, onInited: null, callback: null },
                I = { name: "actionsheet", handle: {}, on: v, off: m, disabled: u, enabled: d, hide: c, show: s, destroy: f, widget: h, option: p, config: O, init: a },
                O = I.config = n.extend(!1, {}, T, e.config.actionsheet, i),
                C = !1;
            return O.id = O.id || e.guid(), O.autoinit && a(O), I
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.number = function(i) {
            function a(i) { var a = n.extend(!0, D, i); return a.onBeforeInit && a.onBeforeInit.call(R, a), M = !1, C = a.max, j = a.min, L = a.step, H = e.obj(a.parentId), "object" === t(a.id) ? (N = e.obj(a.id), F = !1) : "string" == typeof a.id && 0 === a.id.indexOf("#") ? (N = e.obj(a.id), F = !0) : (N = H.find(a.id), F = !1), D = R.config = a, a.render && l(a), P = N.children(a.prev), S = N.children(a.next), E = N.children(a.input), A || s(a), a.disabled && E.attr("disabled", "disabled"), d(a.value), a.target = E, a.value = a.value, a.onInited && a.onInited.call(R, a), a.inited && a.inited.call(R, a), this }

            function o(e, t, n) { return t = t || D.min, n = n || D.max, e < t ? e = t : e > n && (e = n), e }

            function r(t) { var n = ""; return n += '    <div class="mue-number-prev"><i class="icon-minus"></i></div>', n += '    <input class="mue-number-input" type="text" name="' + (t.name || e.guid()) + '" value="' + t.value + '"/>', n += '    <div class="mue-number-next"><i class="icon-plus"></i></div>' }

            function l(e) { var t = r(e); return N.html(t), this }

            function c(t) { return e.selector.call(N, t) }

            function s(t) {
                var i = ".mue-number " + t.input,
                    a = ".mue-number " + t.prev,
                    r = ".mue-number " + t.next,
                    l = function(e) {
                        var i = n(this).val();
                        e.value = o(i), t.onInput && t.onInput.call(R, e), e.stopPropagation()
                    },
                    c = function(e) { var i = t.autocheck && isNaN(parseInt(n(this).val(), 10)) ? 0 : parseInt(n(this).val(), 10); /^[-\\+]?([0-9])+$/i.test(i) && d.call(this, o(i)), e.value = o(i), t.onChange && t.onChange.call(R, e), e.stopPropagation() },
                    s = function(e) {
                        var i = n(this).next(D.input);
                        e.value = i.val(), b.call(i, e), t.callback && t.callback.call(R, e), e.preventDefault(), e.stopPropagation()
                    },
                    u = function(e) {
                        var i = n(this).prev(D.input);
                        e.value = i.val(), y.call(i, e), t.callback && t.callback.call(R, e), e.preventDefault(), e.stopPropagation()
                    };
                return F ? (t.onInput && N.off("input", t.input).on("input", t.input, e.unit.debounce(l, 400)), N.off("change", t.input).on("change", t.input, c), N.off("click.bui", t.prev).on("click.bui", t.prev, s), N.off("click.bui", t.next).on("click.bui", t.next, u)) : (t.onInput && H.off("input", i).on("input", i, e.unit.debounce(l, 400)), H.off("change", i).on("change", i, c), H.off("click.bui", a).on("click.bui", a, s), H.off("click.bui", r).on("click.bui", r, u)), A = !0, this
            }

            function u() { m(); var t = this && "htmldivelement" === e.typeof(this) ? n(this) : E; return parseInt(t.val(), 10) }

            function d(t) {
                m();
                var i = this && "htmldivelement" === e.typeof(this) ? n(this) : E;
                return Array.prototype.slice.call(i).forEach(function(n, i) {
                    var a = n.getAttribute("max") || n.parentElement.getAttribute("data-max") || D.max,
                        o = n.getAttribute("min") || n.parentElement.getAttribute("data-min") || D.min,
                        r = D.autocheck ? f(t, o, a) : t;
                    n.value = r;
                    this && e.typeof(this);
                    O.call(R, "change", { target: n, value: t }), D.onChange && D.onChange.call(R, { target: n, value: t })
                }), this
            }

            function f(e, t, n) { var i = e || 0; return i > n && (i = n), i < t && (i = t), i && i >= t && i <= n && (i = i), i }

            function h(e) { var t = 0; return void 0 !== e ? (d.call(this, e), t = e) : t = u.call(this), t }

            function p() { var e = D.value || D.min; return d.call(this, e), e }

            function g(t) {
                if (N.length < 1 && (N = H.find(D.id)), t && "array" === e.typeof(t)) return Array.prototype.slice.call(N).forEach(function(e, n) {
                    (e.id || e.getAttribute("name") || "") == t[n].id && (e.querySelector("input").value = t[n].value)
                }), this;
                var n = [];
                return Array.prototype.slice.call(N).forEach(function(e, t) {
                    var i = e.id || e.getAttribute("name") || "",
                        a = parseInt(e.querySelector("input").value, 10);
                    n.push({ id: i, value: a })
                }), n
            }

            function v(t) {
                m();
                var i = this && "htmldivelement" === e.typeof(this) ? n(this) : E,
                    t = 0 != t;
                return t ? i.attr("disabled", "disabled") : i.removeAttr("disabled"), this
            }

            function m() { "object" === t(D.id) ? (N = e.obj(D.id), F = !1) : "string" == typeof D.id && 0 === D.id.indexOf("#") ? (N = e.obj(D.id), F = !0) : (N = H.find(D.id), F = !1), P = N.children(D.prev), S = N.children(D.next), E = N.children(D.input) }

            function b() {
                m();
                var t = this && "htmldivelement" === e.typeof(this) ? n(this) : E,
                    i = t.val(),
                    a = parseInt(i, 10),
                    o = a -= L;
                return d.call(t, o), O.call(R, "prev", o), this
            }

            function y() {
                m();
                var t = this && "htmldivelement" === e.typeof(this) ? n(this) : E,
                    i = t.val(),
                    a = parseInt(i, 10),
                    o = a += L;
                return d.call(t, o), O.call(R, "next", o), this
            }

            function w(e) {
                var e = 1 == e;
                N = H.find(D.id), N && (N.off("click.bui"), N.off("input"), e && N.remove()), I("prev"), I("next"), I("change"), M = !0
            }

            function x(t) { var n = {}; return e.widget.call(n, t) }

            function k(t, n) { return e.option.call(R, t, n) }

            function T(t, n) { return e.on.apply(R, arguments), this }

            function I(t, n) { return e.off.apply(R, arguments), this }

            function O(t) { R.self = this == window || this && this.hasOwnProperty("widget") ? null : this, e.trigger.apply(R, arguments) }
            var C, j, L, P, S, E, N, B = { parentId: ".mue-page", id: ".mue-number", min: 0, max: 100, step: 1, value: 1, disabled: !1, render: !0, tips: !1, autocheck: !0, name: "", prev: ".mue-number-prev", input: "input", next: ".mue-number-next", onInput: null, autoinit: !0, inited: null, onBeforeInit: null, onInited: null, onChange: null, callback: null },
                R = { name: "number", handle: {}, on: T, off: I, $el: c, disabled: v, reset: p, value: h, values: g, prev: b, next: y, destroy: w, widget: x, option: k, config: D, init: a },
                D = R.config = n.extend(!0, {}, B, e.config.number, i),
                A = !1,
                F = !1,
                M = !1,
                H = null;
            return D.autoinit && a(D), R
        }
    }(bui || {}, libs),
    function(e, t) {
        e.stepbar = function(n) {
            function i(n) {
                var i = t.extend(!0, y, n);
                if (i.onBeforeInit && i.onBeforeInit.call(b, i), !i.id) return void e.hint("stepbar id不能为空");
                g = e.obj(i.id), y = b.config = i;
                var l = "function" == typeof i.template ? i.template.call(b, i.data) : a(i.data);
                return i.lineCenter && g.addClass("mue-stepbar-center"), i.data.length && g.html(l), b.$el = g, v = g.children(), w || o(i), "number" == typeof i.value && r(i.value), i.onInited && i.onInited.call(b, i), this
            }

            function a(e) {
                var n = "";
                return t.each(e, function(e, t) {
                    var i = y.hasNumber ? e + 1 : "",
                        a = y.hasNumber ? "mue-stepbar-number " : "",
                        o = t.className || "";
                    n += '<div class="mue-stepbar-cell ' + a + o + '">', n += '    <span class="mue-stepbar-dot">' + i + "</span>", n += '    <div class="mue-stepbar-text">', t.title && (n += "        <h3>" + t.title + "</h3>"), t.subtitle && (n += '        <p class="mue-stepbar-time">' + t.subtitle + "</p>"), t.content && (n += '        <p class="mue-stepbar-desc">' + t.content + "</p>"), n += "    </div>", n += "</div>"
                }), n
            }

            function o(e) {
                var n = function(n) {
                    if (e.click) { r(t(this).index()) }
                    e.callback && e.callback.call(b, n, b)
                };
                return g.off("click.bui", e.handle).on("click.bui", e.handle, n), w = !0, this
            }

            function r(e, n) { if (n = n || "", "number" == typeof e) return e = e >= v.length - 1 ? v.length - 1 : e < 0 ? 0 : e, v.each(function(i, a) { i < e && t(a).removeClass("active " + n).addClass("visited"), i == e && t(a).removeClass("visited " + n).addClass("active " + n), i > e && t(a).removeClass("visited active " + n) }), p.call(this, "change", e), e; var e = g.children(".active").index(); return e }

            function l(e) { var t = r() + 1; return p.call(this, "next", t), r(t, e) }

            function c(e) { var t = r() - 1; return p.call(this, "prev", t), r(t, e) }

            function s(e) {
                var e = 1 == e;
                g && (g.off("click.bui"), e && g.remove()), h("next"), h("prev"), h("change")
            }

            function u(t) { var n = {}; return e.widget.call(n, t) }

            function d(t, n) { return e.option.call(b, t, n) }

            function f(t, n) { return e.on.apply(b, arguments), this }

            function h(t, n) { return e.off.apply(b, arguments), this }

            function p(t) { b.self = this == window || this == b ? null : this, e.trigger.apply(b, arguments) }
            var g, v, m = { id: null, handle: ".mue-stepbar-cell", hasNumber: !1, lineCenter: !1, click: !0, autoinit: !0, data: [], template: null, value: null, onBeforeInit: null, onInited: null, callback: null },
                b = { name: "stepbar", handle: {}, on: f, off: h, value: r, next: l, prev: c, destroy: s, widget: u, option: d, config: y, init: i },
                y = b.config = t.extend(!0, {}, m, e.config.stepbar, n),
                w = !1;
            return y.autoinit && i(y), b
        }
    }(window.bui || {}, window.libs);
    var l = function(e) {
        function t(e) { return window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(e) : window.clearTimeout(e) }

        function n(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n].style;
                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
            }
            return e
        }

        function i(e, t) {
            "string" != typeof t && (t += "ms");
            for (var n = 0; n < e.length; n++) {
                var i = e[n].style;
                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
            }
            return e
        }

        function a(e, t) { var n, i, a, o; return void 0 === t && (t = "x"), a = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function(e) { return e.replace(",", ".") }).join(", ")), o = new WebKitCSSMatrix("none" === i ? "" : i)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = window.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0 }
        var o = this,
            r = { updateValuesOnTouchmove: !1, rotateEffect: !1, momentumRatio: 7, freeMode: !1 };
        e = e || {};
        for (var l in r) void 0 === e[l] && (e[l] = r[l]);
        o.params = e, o.cols = [], o.initialized = !1;
        var c = function() {
            var e = navigator.userAgent,
                t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                n = e.match(/(iPad).*OS\s([\d_]+)/),
                i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                a = !n && e.match(/(iPhone\sOS)\s([\d_]+)/),
                o = n || i || a,
                r = !!t;
            return o || navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !r
        }();
        return o.setValue = function(e, t) {
            var n = 0;
            if (0 === o.cols.length) return o.value = e,
                void o.updateValue(e);
            for (var i = 0; i < o.cols.length; i++) o.cols[i] && !o.cols[i].divider && (o.cols[i].setValue(e[n], t), n++)
        }, o.updateValue = function(e) {
            for (var t = e || [], n = [], i = 0; i < o.cols.length; i++) o.cols[i].divider || (t.push(o.cols[i].value), n.push(o.cols[i].displayValue));
            t.indexOf(void 0) >= 0 || (o.value = t, o.displayValue = n, o.params.onChange && o.params.onChange(o, o.value, o.displayValue))
        }, o.initPickerCol = function(e, r) {
            function l(e) {
                if (!k && !x) {
                    var t = e.originalEvent || e;
                    t.preventDefault(), x = !0, T = I = t.targetTouches ? t.targetTouches[0].pageY : t.pageY, O = (new Date).getTime(), B = !0, j = P = a(p.wrapper[0], "y")
                }
            }

            function s(e) {
                if (x) {
                    var r = e.originalEvent || e;
                    r.preventDefault(), B = !1, I = r.targetTouches ? r.targetTouches[0].pageY : r.pageY, k || (t(w), k = !0, j = P = a(p.wrapper[0], "y"), i(p.wrapper, "0ms")), r.preventDefault();
                    P = j + (I - T), L = void 0, P < b && (P = b - Math.pow(b - P, .8), L = "min"), P > y && (P = y + Math.pow(P - y, .8), L = "max"), n(p.wrapper, "translate3d(0," + P + "px,0)"), p.updateItems(void 0, P, 0, o.params.updateValuesOnTouchmove), E = P - S || P, N = (new Date).getTime(), S = P
                }
            }

            function u(e) {
                if (!x || !k) return void(x = k = !1);
                x = k = !1, i(p.wrapper, ""), L && ("min" === L ? n(p.wrapper, "translate3d(0," + b + "px,0)") : n(p.wrapper, "translate3d(0," + y + "px,0)")), C = (new Date).getTime();
                var t;
                C - O > 300 ? t = P : (Math.abs(E / (C - N)), t = P + E * o.params.momentumRatio), t = Math.max(Math.min(t, y), b);
                var a = -Math.floor((t - y) / v);
                o.params.freeMode || (t = -a * v + y), n(p.wrapper, "translate3d(0," + parseInt(t, 10) + "px,0)"), p.updateItems(a, t, "", !0), setTimeout(function() { B = !0 }, 100)
            }

            function d(e) {
                if (B) {
                    t(w);
                    var n = $(this).attr("data-picker-value");
                    p.setValue(n)
                }
            }
            var f = $(e),
                h = f.index(),
                p = o.cols[h];
            if (!p.divider) {
                p.container = f, p.wrapper = p.container.find(".picker-items-col-wrapper"), p.items = p.wrapper.find(".picker-item");
                var g, v, m, b, y;
                p.replaceValues = function(e, t, n) {
                    p.destroyEvents(), p.values = e, p.displayValues = t;
                    var i = o.columnHTML(p, !0);
                    p.wrapper.html(i), p.items = p.wrapper.find(".picker-item"), p.calcSize(), p.setValue(n || p.values[0], 0, !0), p.initEvents()
                }, p.calcSize = function() {
                    o.params.rotateEffect && (p.container.removeClass("picker-items-col-absolute"), p.width || (p.container[0].style.width = ""));
                    var e, t;
                    e = 0, t = p.container[0].offsetHeight, g = p.wrapper[0].offsetHeight, v = p.items[0].offsetHeight, m = v * p.items.length, b = t / 2 - m + v / 2, y = t / 2 - v / 2, p.width && (e = p.width, parseInt(e, 10) === e && (e += "px"), p.container[0].style.width = e), o.params.rotateEffect && (p.width || (p.items.each(function() {
                        var t = $(this);
                        t[0].style.width = "auto", e = Math.max(e, t[0].offsetWidth), t[0].style.width = ""
                    }), p.container[0].style.width = e + 2 + "px"), p.container.addClass("picker-items-col-absolute"))
                }, p.calcSize(), n(p.wrapper, "translate3d(0," + y + "px,0)"), i(p.wrapper, "0ms");
                var w;
                p.setValue = function(e, t, a) {
                    void 0 === t && (t = "");
                    var o = p.wrapper.find('.picker-item[data-picker-value="' + e + '"]').index();
                    void 0 !== o && -1 !== o || (o = 0);
                    var r = -o * v + y;
                    n(p.wrapper, "translate3d(0," + r + "px,0)"), i(p.wrapper, t + "ms"), p.updateItems(o, r, t, a)
                }, p.updateItems = function(e, t, r, l) {
                    void 0 === t && (t = a(p.wrapper[0], "y")), void 0 === e && (e = -Math.round((t - y) / v)), e < 0 && (e = 0), e >= p.items.length && (e = p.items.length - 1);
                    var s = p.activeIndex;
                    p.wrapper.find(".picker-selected").removeClass("picker-selected"), i(p.items, r);
                    var u = p.items.eq(e).addClass("picker-selected");
                    if (n(u, ""), o.params.rotateEffect) {
                        Math.floor((t - y) / v);
                        p.items.each(function() {
                            var e = $(this),
                                i = e.index() * v,
                                a = y - t,
                                o = i - a,
                                r = o / v,
                                l = Math.ceil(p.height / v / 2) + 1,
                                s = -18 * r;
                            s > 180 && (s = 180), s < -180 && (s = -180), Math.abs(r) > l ? e.addClass("picker-item-far") : e.removeClass("picker-item-far"), n(e, "translate3d(0, " + (-t + y) + "px, " + (c ? -110 : 0) + "px) rotateX(" + s + "deg)")
                        })
                    }(l || void 0 === l) && (p.value = u.attr("data-picker-value"), p.displayValue = p.displayValues ? p.displayValues[e] : p.value, s != e && (p.onChange && p.onChange(o, p.value, p.displayValue), o.updateValue()))
                }, r && p.updateItems(0, y, 0);
                var x, k, T, I, O, C, j, L, P, S, E, N, B = !0;
                p.initEvents = function(e) {
                    var t = /hp-tablet/gi.test(navigator.appVersion),
                        n = "ontouchstart" in window && !t,
                        i = n ? "touchstart" : "mousedown",
                        a = n ? "touchmove" : "mousemove",
                        o = n ? "touchend" : "mouseup",
                        r = e ? "off" : "on";
                    p.container[r](i, l), p.container[r](a, s), p.container[r](o, u), "mouseup" == o && document.documentElement.addEventListener("mouseleave", u, !1), p.items[r]("click", d)
                }, p.destroyEvents = function() { p.initEvents(!0) }, p.initEvents()
            }
        }, o.columnHTML = function(e, t) {
            var n = "",
                i = "";
            if (e.divider) i += '<div class="picker-items-col picker-items-col-divider ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '">' + e.content + "</div>";
            else {
                for (var a = 0; a < e.values.length; a++) n += '<div class="picker-item" data-picker-value="' + e.values[a] + '">' + (e.displayValues ? e.displayValues[a] : e.values[a]) + "</div>";
                i += '<div class="picker-items-col ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '"><div class="picker-items-col-wrapper">' + n + "</div></div>"
            }
            return t ? n : i
        }, o.layout = function() {
            var e, t = "",
                n = "";
            o.cols = [];
            var i = "";
            for (e = 0; e < o.params.cols.length; e++) {
                var a = o.params.cols[e];
                i += o.columnHTML(o.params.cols[e]), o.cols.push(a)
            }
            n = "picker-modal picker-columns " + (o.params.cssClass || "") + (o.params.rotateEffect ? " picker-3d" : ""), t = '<div class="' + n + '"><div class="picker-modal-inner picker-items">' + i + '<div class="picker-center-highlight"></div></div></div>', o.pickerHTML = t
        }, o.init = function() {
            o.initialized || (o.layout(), o.container = $(o.pickerHTML), o.container.addClass("picker-modal-inline"), $(o.params.container).html(o.container), o.container.find(".picker-items-col").each(function() {
                var e = !0;
                (!o.initialized && o.params.value || o.initialized && o.value) && (e = !1), o.initPickerCol(this, e)
            }), o.value ? o.setValue(o.value, 0) : o.params.value && o.setValue(o.params.value, 0)), o.initialized = !0
        }, o.init(), o
    };
    ! function(e, t) { e.picker = function(e) { return new l(e) } }(window.bui || {}, window.libs),
    function(e, n) {
        e.pickerdate = function() {
            function i(e, t) {
                if (e && e.constructor == Date) return e;
                if ("number" == typeof e && 13 === String(e).length) return new Date(e);
                e = String(e);
                var n = new Date,
                    i = n.getFullYear(),
                    a = n.getMonth() + 1,
                    o = n.getDate();
                return e = e.replace(/[-|年|月]/gim, "/").replace(/[时|分|秒|小时|分钟]/gim, ":").replace(/^(\d{4}\/\d+?)($|\s)/, function(e, t) { return t + "/1" }).replace(/[日|号]/gim, "").replace(/^(\d{1,2}\/\d{1,2}?)($|\s)/, function(e, t) { return n.getFullYear() + "/" + t }), e.indexOf("/") < 0 && e.indexOf(":") > -1 && (e = i + "/" + a + "/" + o + " " + e), 4 === e.length ? e += "/1/1 00:00:00" : "MM" === t || "M" === t ? e = i + "/" + e + "/1 00:00:00" : "dd" !== t && "d" !== t || (e = i + "/" + a + "/" + e + " 00:00:00"), new Date(e)
            }

            function a(e, t) { var e, t, n = new Date; return n.getTime() < e.getTime() ? e : n.getTime() > t.getTime() ? t : n }

            function o(o) {
                function r(e) { var t = new Date("1970/1/1"); return E.forEach(function(n, i) { t["set" + n](e[j[n]].value - ("Month" == n ? 1 : 0)) }), t }

                function l(e) { var t = i(e); return E.map(function(e, n) { return t["get" + e]() + ("Month" == e ? 1 : 0) }) }

                function c() {
                    if (!n(this).hasClass("disabled")) {
                        if (C.bindValue) {
                            k = n(this), T.el = this;
                            var e = k.val() || k.text();
                            T.value(e)
                        }
                        O && !O.isOpen() && O.open()
                    }
                }

                function s(t) { T.self = this == window || this == T ? null : this, e.trigger.apply(T, arguments) }
                var u, d, f, h, p, g, v, m, b, y, w = e.guid(),
                    x = { id: w, title: "", height: 260, popup: !0, mask: !0, autoinit: !0, zIndex: 110, bindValue: !1, handleParent: "", position: "bottom", effect: "fadeInUp", appendTo: "", rotateEffect: !1, buttons: [{ name: "取消", className: "" }, { name: "确定", className: "primary-reverse" }], onBeforeInit: null, onInited: null, onMask: function() { O && O.close() }, callback: null },
                    k = null,
                    T = this,
                    I = function() {},
                    O = null,
                    C = n.extend(!0, {}, x, o);
                C.appendTo = C.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), C.callback = function(e) {
                    var t = o.callback && o.callback.call(T, e);
                    if (!1 === t) return !1;
                    if (1 == t || void 0 === t)
                        if ("取消" == n(e.target).text().trim() || "cancel" == n(e.target).text().trim() || "关闭" == n(e.target).text().trim()) try {
                            var a = i(u);
                            T.value(a)
                        } catch (e) {} else u = T.value();
                    k = null
                };
                var j = {},
                    L = ["FullYear", "Month", "Date"],
                    P = ["Hours", "Minutes", "Seconds"],
                    S = { FullYear: "year", Month: "month", Date: "date", Hours: "hour", Minutes: "minute", Seconds: "second" },
                    E = [],
                    N = !1;
                this.config = {}, this.option = function() {}, this.cols = function(e) { e = e || {}; var t = []; return b = [], m = [], j = {}, E = [], L.forEach(function(n, i) { "none" !== e[S[n]] && (E.push(n), t.push(n)) }), P.forEach(function(t, n) { "none" !== e[S[t]] && (E.push(t), b.push(t)) }), t.forEach(function(t, n) { j[t] = m.length, m.push(D[t](e[S[t]])) }), b.forEach(function(n, i) { 0 == i && 0 != t.length ? m.push(D.Space()) : m.push(D.Divider()), 0 == t.length && (m[0].content = ""), j[n] = m.length, m.push(D[n](e[S[n]])) }), T.picker && (T.picker.params.cols = m, T.picker.initialized = !1, T.picker.init()), N = !1, this }, this.id = function(e) { e && !p && (p = e) }, this.reset = function() { return T.picker && (T.picker.initialized = !1, T.picker.init()), this }, this.empty = function() { return T.picker && e.obj(o.handle).val(""), this }, this.min = function(e) { var t = (new Date).getFullYear() - 1 + "/01/01 00:00:00"; return f = i(e || C.min || t), this }, this.max = function(e) { var t = (new Date).getFullYear() + 1 + "/12/31 00:00:00"; return h = i(e || C.max || t), this }, this.value = function(e) {
                    if (e) {
                        var t = i(e, T.config.formatValue),
                            n = l(t);
                        return T.picker.setValue(n, 0), this
                    }
                    return v(T.picker, T.value, T.displayValue)
                }, this.handler = function(t) { return t && d !== t && (d = t, o.handleParent ? e.$(o.handleParent).off("click.bui", d).on("click.bui", d, c) : e.$(d).off("click.bui").on("click.bui", c), c.hasOpen = !1, d = t), this };
                var B = { y: function(e, t) { return e.getFullYear().toString().slice(-t) }, M: function(e, t) { return ((t > 1 ? "0" : "") + (e.getMonth() + 1)).slice(-2) }, d: function(e, t) { return ((t > 1 ? "0" : "") + e.getDate()).slice(-2) }, h: function(e, t) { return ((t > 1 ? "0" : "") + e.getHours()).slice(-2) }, m: function(e, t) { return ((t > 1 ? "0" : "") + e.getMinutes()).slice(-2) }, s: function(e, t) { return ((t > 1 ? "0" : "") + e.getSeconds()).slice(-2) } };
                this.formatValue = function(e) { return v = function(t, n, i) { var a = r(t.cols); return e.replace(/y+|M+|d+|h+|m+|s+/g, function(e) { return B[e[0]](a, e.length) }) }, T.picker && T.picker.updateValue(), N = !1, this }, this.formatDate = function(e, t) {
                    if (null == e) return "";
                    var n = i(e);
                    t = t || "yyyy-MM-dd";
                    var a = { "M+": n.getMonth() + 1, "d+": n.getDate(), "h+": n.getHours(), "m+": n.getMinutes(), "s+": n.getSeconds(), "q+": Math.floor((n.getMonth() + 3) / 3), S: n.getMilliseconds() };
                    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
                    for (var o in a) new RegExp("(" + o + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[o] : ("00" + a[o]).substr(("" + a[o]).length)));
                    return t
                }, this.onChange = function(t) { var n = this; return g = C.bindValue ? function(i) { k ? k[0] && "INPUT" === k[0].nodeName ? k.val(i) : k.text(i) : e.obj(d).each(function(e, t) { "INPUT" === t.nodeName ? t.value = i : t.innerTEXT = i }), t && t.call(n, i) } : t || I, s.call(this, "change", y), this }, this.popup = function(i) {
                    if (i.popup && !O) {
                        var a = '<div id="' + w + '" class="mue-dialog" >';
                        i.title && (a += '<div class="mue-dialog-head">' + i.title + "</div>"), a += '<div class="mue-dialog-main"><div id="' + w + '-picker"></div></div>', i.buttons && i.buttons.length && (a += '<div class="mue-dialog-foot mue-box">', n.each(i.buttons, function(e, n) {
                            var i = "object" == (void 0 === n ? "undefined" : t(n)) && "className" in n ? " " + n.className : "",
                                o = "object" == (void 0 === n ? "undefined" : t(n)) && "name" in n ? n.name : n;
                            a += '<div class="span1"><div class="mue-btn' + i + '">' + o + "</div></div>"
                        }), a += "</div>"), a += "</div>";
                        n(i.appendTo).append(a);
                        p = e.obj(w + "-picker")
                    } else p = e.obj(i.id);
                    return this
                };
                var R = function(e, t, n) {
                        var i = r(e.cols),
                            a = f["get" + t](),
                            o = h["get" + t](),
                            l = i.getTime(),
                            c = f.getTime(),
                            s = h.getTime();
                        return l < c && i["get" + t]() < a ? ("Month" == t && (a += 1), void e.cols[j[t]].setValue(a)) : l > s && i["get" + t]() > o ? ("Month" == t && (o += 1), void e.cols[j[t]].setValue(o)) : void(n && (l < c || l > s) && e.cols[j[n]].onChange(e))
                    },
                    D = {};
                D.FullYear = function(e) { return e = e || { values: function() { for (var e = [], t = f.getFullYear(), n = h.getFullYear(), i = t; i <= n; i++) e.push(i); return e }() }, { values: e.values, displayValues: e.displayValues, onChange: function(e, t, n) { R(e, "FullYear", j.Month ? "Month" : "") } } }, D.Month = function(e) {
                    return e = e || { values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], displayValues: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, {
                        values: e.values,
                        displayValues: e.displayValues,
                        textAlign: "right",
                        onChange: function(e, t, n) {
                            for (var i = new Date, a = e.cols[j.FullYear] ? e.cols[j.FullYear].value : i.getFullYear(), o = e.cols[j.Month] ? e.cols[j.Month].value : i.getMonth() + 1, r = new Date(a, parseInt(o), 0).getDate(), l = [], c = 1; c <= r; c++) l.push(c);
                            var s = e.cols[j.Date];
                            s && s.replaceValues && s.replaceValues(l, null, s.value < r ? s.value : r), R(e, "Month", j.Date ? "Date" : "")
                        }
                    }
                }, D.Date = function(e) {
                    return e = e || {
                        values: function() {
                            var e = 31,
                                t = [];
                            do { t.unshift(e) } while (e--);
                            return t
                        }(),
                        displayValues: function() {
                            var e = 31,
                                t = [];
                            do { t.unshift(e + "天") } while (e--);
                            return t
                        }()
                    }, { values: e.values, displayValues: e.displayValues, onChange: function(e, t, n) { R(e, "Date") } }
                }, D.Space = function() { return { divider: !0, content: "  " } }, D.Hours = function(e) { return e = e || function() { for (var e = [], t = [], n = 0; n < 24; n++) e.push(n), t.push(("0" + n).slice(-2)); return { values: e, displayValues: t } }(), { values: e.values, displayValues: e.displayValues, onChange: function(e, t, n) { R(e, "Hours", j.Minutes ? "Minutes" : "") } } }, D.Divider = function() { return { divider: !0, textAlign: "center", content: ":" } }, D.Minutes = function(e) { return e = e || function() { for (var e = [], t = [], n = 0; n < 60; n++) e.push(n), t.push(("0" + n).slice(-2)); return { values: e, displayValues: t } }(), { values: e.values, displayValues: e.displayValues, onChange: function(e, t, n) { R(e, "Minutes", j.Seconds ? "Seconds" : "") } } }, D.Seconds = function(e) { return e = e || function() { for (var e = [], t = [], n = 0; n < 60; n++) e.push(n), t.push(("0" + n).slice(-2)); return { values: e, displayValues: t } }(), { values: e.values, displayValues: e.displayValues, onChange: function(e, t, n) { R(e, "Seconds") } } }, T.init = function(t) {
                    var o = n.extend(!0, C, t);
                    o.onBeforeInit && o.onBeforeInit.call(T, o), T.config = o, T.min(o.min), T.max(o.max), T.cols(o.cols), T.id(o.id), T.$el = e.obj(o.handle) || null, T.el = T.$el ? T.$el[0] : null, T.handler(o.handle), T.popup(o), T.onChange(o.onChange), T.formatValue(o.formatValue || "yyyy-MM-dd hh:mm:ss"), T.picker = e.picker({
                        container: p,
                        rotateEffect: o.rotateEffect,
                        value: l(o.value ? i(o.value) : a(f, h)),
                        onChange: function(e, t, n) {
                            var i = v(e, t, n);
                            y != i && (y = i, g && g.call(T, i), s.call(this, "change", i))
                        },
                        cols: m
                    }), o.popup && !O && (O = e.dialog.call(T, o), O && O.on("open", function() { u = v(T.picker, T.value, T.displayValue), T.picker && (T.picker.initialized = !1, T.picker.init()), s.call(T, "show") }), O && O.on("close", function() { s.call(T, "hide") })), o.onInited && o.onInited.call(T, o)
                }, C.autoinit && T.init(C), this.name = "pickerdate", this.disabled = function() { var t = e.obj(d); return t && t.addClass("disabled"), this }, this.open = function(e) { return O.open(e), this }, this.isOpen = function() { return O.isOpen() }, this.close = function(e) { return O.close(e), this }, this.modifyTitle = function(t) { return e.obj(w).find(".mue-dialog-head").html(t), this }, this.enabled = function() { var t = e.obj(d); return t && t.removeClass("disabled"), this }, this.destroy = function(e) {
                    var e = 1 == e;
                    this.off("show"), this.off("hide"), this.off("change"), O && O.destroy(e), T = null
                }, this.widget = function(t) { var n = { dialog: O || {} }; return e.widget.call(n, t) }, this.on = function(t, n) { return e.on.apply(T, arguments), this }, this.off = function(t, n) { return e.off.apply(T, arguments), this }
            }
            return function(e) { return new o(e) }
        }()
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.levelselect = function(i) {
            function a(t) {
                var i = I = M.config = n.extend(!0, {}, I, t);
                i.onBeforeInit && i.onBeforeInit.call(M, i);
                var a = "";
                i.popup ? (F || (a = g(i), H.append(a), F = mue.dialog({ id: C, height: i.height, mask: i.mask, scroll: !1, zIndex: i.zIndex, autoClose: i.autoClose, fullscreen: i.fullscreen, position: i.position, effect: i.effect, onMask: i.onMask })), L = e.obj(C)) : (a = v(i), H.append(a), L = e.objId(C)), M.$el = L, P = e.objId(j);
                var o = 0;
                for (o = 0; o < i.level; o++) ! function(t) {
                    D[t] = e.$(".select-level-val-" + t, L), R[t] = e.$(".select-level-" + t, P), i.trigger && (A[t] = e.$(i.trigger).eq(t)), B[t] || (B[t] = mue.select({ id: R[t], type: "select", direction: "right", field: { name: i.field.name, icon: i.field.icon, image: i.field.image, value: i.field.value || i.field.name }, popup: !1, toggle: i.toggle, data: [], template: i.template }), B[t].on("change", function(a) {
                        i.log && console.log("change", t);
                        var o = B[t].index() || 0,
                            r = B[t].value() || "",
                            l = B[t].text() || B[t].value();
                        E[t] = { name: l, value: r, index: o };
                        var c = [];
                        "string" == typeof i.field.data ? c = O[t][o][i.field.data] || O[t][o] : i.field.data && "array" === e.typeof(i.field.data) && i.field.data.forEach(function(e, n) { O[t][o][i.field.data[n]] && O[t][o][i.field.data[n]].length && (c = O[t][o][i.field.data[n]]) }), O[t + 1] = c, B[t + 1] && B[t + 1].option("data", c), B[t + 2] && B[t + 2].option("data", []), R[t] && R[t].find(".mue-btn").removeClass("active"), n(a.target).parents(".mue-btn").addClass("active"), f(t), D[t] && D[t].text(l), D[t + 1] && D[t + 1].text(i.placeholder), D[t + 2] && D[t + 2].text(""), A[t] && A[t].text(l), A[t + 1] && A[t + 1].text(i.placeholder), A[t + 2] && A[t + 2].text(""), a.context = { trigger: A[t], selector: D[t], index: t, select: B[t], data: O[t] };
                        var s = O[t],
                            u = O[t + 1] || [];
                        y.call(M, "change", a, s, u), i.onChange && i.onChange.call(M, a, s, u), (t == i.level - 1 || u.length < 1) && y.call(M, "lastchange", a, s, u), 1 == i.visibleNum && (i.log && console.log("next"), N.next()), i.popup && !F.isOpen() || (t == i.level - 1 ? (i.log && console.log("close"), i.autoClose && F && F.close()) : 0 != t && (i.log && console.log("next"), N.next()))
                    }), D[t].on("click.bui", function() {
                        var e = n(this).index(),
                            t = N.index();
                        1 == i.visibleNum ? N.to(e) : (e > t ? N.next() : N.prev(), n(this).addClass("active").siblings().removeClass("active"))
                    }))
                }(o);
                var r = window && window.viewport && window.viewport.height() || n(window).height(),
                    l = i.fullscreen ? r : String(i.height).indexOf("%") > -1 ? r * parseFloat(i.height) / 100 : i.height;
                i.popup && F ? F.on("open", function(e) { S = l - L.find(".select-value").height() - L.children(".mue-dialog-head").height(), u(i) }) : (S = l, u(i)), D[0] && D[0].text(i.placeholder), A[0] && A[0].text(i.placeholder), O[0] = i.data, B[0].option("data", O[0]), i.value && d(i.value), i.onInited && i.onInited.call(this, i), z = !1
            }

            function o(e, t) { return N && N.to(e, t), this }

            function r() { return N && N.prev(), this }

            function l() { return N && N.next(), this }

            function c(e) { y.call(this, "beforeshow"); var n = {}; "function" == typeof e ? n.callback = function() { e && e.call(M), y.call(M, "show") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), F && F.open(n) }

            function s(e) { y.call(this, "beforehide"); var n = {}; "function" == typeof e ? n.callback = function() { e && e.call(M), y.call(M, "hide") } : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), F && F.close(n) }

            function u(e) { N || (N = mue.tab({ id: j, height: S, scroll: !0, zoom: !1, visibleNum: e.visibleNum, scrollNum: e.scrollNum }).lock(), N.on("to", function(e) { f(e) })) }

            function d(n) {
                if (void 0 === n) return E;
                n && "array" === e.typeof(n) ? n.forEach(function(e, n) { "string" == typeof e ? B[n].value(e) : "object" === (void 0 === e ? "undefined" : t(e)) && (B[n].text(e.name || ""), B[n].value(e.value || "")) }) : e.showLog("levelselect.value() 参数是一个数组类型")
            }

            function f(e) { n(".select-value div", L).removeClass("active"), n(".select-value div", L).eq(e).addClass("active") }

            function h(e, t) { return n(".select-value div", L).eq(e).html(t), A[e].html(t), this }

            function p() { return B.forEach(function(e, t) { e.value(""), 0 == t ? (h(t, I.placeholder), e.text(I.placeholder), N && N.to(t)) : (h(t, ""), e.text("")) }), this }

            function g(e) { var t = ""; return t += '<div id="' + C + '" class="mue-dialog mue-levelselect" style="display:none;">', t += '    <div class="mue-dialog-head">' + e.title + "</div>", t += '    <div class="mue-dialog-main">', t += v(e), t += "    </div>", t += '    <div class="mue-dialog-close"><i class="icon-close"></i></div>', t += "</div>" }

            function v(e) {
                var t = "",
                    n = 0;
                if (e.popup || (t += '<div id="' + C + '" class="mue-levelselect">'), e.showValue) {
                    for (t += '    <div class="mue-box select-value">', n = 0; n < e.level; n++) t += '        <div class="select-level-val-' + n + '"></div>';
                    t += "    </div>"
                }
                for (t += '<div id="' + j + '" class="mue-tab mue-levelselect-tab">', t += '    <div class="mue-tab-main">', t += "        <ul>", n = 0; n < e.level; n++) t += "            <li>", t += '                <div class="select-level-' + n + '"></div>', t += "            </li>";
                return t += "        </ul>", t += "    </div>", t += "</div>", e.popup || (t += "</div>"), t
            }

            function m(t, n) { return e.on.apply(M, arguments), this }

            function b(t, n) { return e.off.apply(M, arguments), this }

            function y(t) { M.self = this == window || this == M ? null : this, e.trigger.apply(M, arguments) }

            function w(t, n) { return e.option.call(M, t, n) }

            function x(e) {
                for (var t = 0; t < B.length; t++) B[t].destroy(), A[t].text(""), D[t].off("change"), R[t].off("click");
                F.destroy(), F = null, N.destroy(), N = null, O = [], L = null, P = null, S = 0, E = [], B = [], R = [], D = [], A = [], b("change"), b("lastchange"), z = !0
            }

            function k(t) { var n = { dialog: F, slide: N, select: B }; return e.widget.call(n, t) }
            var T = { popup: !0, data: [], height: 300, appendTo: "", title: "所在地区", trigger: null, placeholder: "请选择", level: 3, visibleNum: 2, scrollNum: 1, log: !1, mask: !0, zIndex: 121, autoClose: !0, fullscreen: !1, position: "bottom", effect: "fadeInUp", showValue: !0, onMask: null, value: [], autoinit: !0, onChange: null, onBeforeInit: null, template: null, onInited: null, toggle: !1, field: { name: "n", icon: "icon", image: "image", value: "", data: ["c", "a"] } },
                I = n.extend(!0, {}, T, i),
                O = [],
                C = mue.guid(),
                j = C + "-slide",
                L = null,
                P = null,
                S = 0,
                E = [],
                N = null,
                B = [],
                R = [],
                D = [],
                A = [],
                F = null,
                M = { name: "levelselect", init: a, show: c, hide: s, widget: k, value: d, reset: p, setNav: h, destroy: x, option: w, to: o, prev: r, next: l, on: m, off: b, trigger: y };
            i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body");
            var H = n(i.id ? i.id : i.appendTo),
                z = !0;
            return I.onBeforeInit && I.onBeforeInit.call(M, I), I.autoinit && a(I), M
        }
    }(window.bui || {}, window.libs);
    e(function(e) {
        ! function(t, n) {
            t.tab = function(i) {
                function a(e, n) {
                    if (e && !/[0-9]/.test(e)) return this;
                    var i = t.$(v.id).find(v.menu).children().eq(e),
                        a = void 0 !== n ? n : "",
                        o = i.find(".mue-badges"),
                        r = i.find("i");
                    return o.size() ? o.text(n) : r.size() && v.iconBadge ? r.append('<span class="mue-badges">' + a + "</span>") : i.append('<span class="mue-badges">' + a + "</span>"), this
                }

                function o(e) { var n = t.$(v.id).find(v.menu).children(); return void 0 !== e ? n.eq(e).find(".mue-badges").remove() : n.find(".mue-badges").remove(), this }

                function r(e) {
                    y = v.template || p;
                    var n = y(e);
                    t.$(v.id).html(n)
                }

                function l(e, n) {
                    var i = templatesNav(n || b);
                    t.$(e).html(i)
                }

                function c(e) {
                    var t = "bottom" == v.position ? "mue-tab-foot" : "",
                        n = '<div class="mue-tab-head ' + t + '">';
                    return n += s(e), n += "</div>"
                }

                function s(e) {
                    var t = "left" == v.position || "right" == v.position ? " mue-tab-sidenav" : "",
                        n = v.navscroll ? '<div class="mue-navbar">' : "",
                        i = n + '<ul class="mue-nav ' + w + "-menu " + t + '">';
                    return e && e.forEach(function(e, t) { i += u(e, t) }), i += "</ul>\n                " + (v.navscroll ? "</div>" : "")
                }

                function u(e, t) {
                    var n = "",
                        i = d(e, t) || f(e, t),
                        a = e.className ? "" + e.className : "";
                    switch (v.iconPosition) {
                        case "left":
                            n += '<li class="mue-btn mue-align-' + v.align + " " + a + '">' + i + e.title + "</li>";
                            break;
                        case "right":
                            n += '<li class="mue-btn mue-align-' + v.align + " mue-box " + a + '"><div class="span1">' + e.title + "</div>" + i + "</li>";
                            break;
                        case "bottom":
                            n += '<li class="mue-btn mue-align-' + v.align + " mue-box-vertical " + a + '"><div class="span1">' + e.title + "</div>" + i + "</li>";
                            break;
                        default:
                            n += '<li class="mue-btn mue-align-' + v.align + " mue-box-vertical " + a + '">' + i + '<div class="span1">' + e.title + "</div></li>"
                    }
                    return n
                }

                function d(e, t) { return e.icon ? e.icon.indexOf("&#") > -1 ? '<i class="icon">' + e.icon + "</i>" : '<i class="' + e.icon + '"></i>' : "" }

                function f(e, t) { return e.image ? '<i class="icon"><img src="' + e.image + '" /></i>' : "" }

                function h(e) {
                    var t = "left" == v.position || "right" == v.position ? '<div class="span1">' : "",
                        n = t + '<div class="mue-tab-main"><ul class="' + w + '-main">';
                    return e && e.forEach(function(e, t) { n += '<li class="mue-tab-main-item">\n                            <component id="' + e.id + '" class="delay-item" name="' + e.name + '" delay="true"></component>\n                        </li>' }), n += "</ul></div>", n += "left" == v.position || "right" == v.position ? "</div>" : ""
                }

                function p(e) {
                    var t = "",
                        n = v.menu.indexOf("#") > -1 ? "" : c(e),
                        i = h(e);
                    switch (v.position) {
                        case "top":
                            t = n + i;
                            break;
                        case "bottom":
                            t = i + n;
                            break;
                        default:
                            t = n + i
                    }
                    return t
                }
                var g = { id: "", menu: ".mue-tab-head > ul", children: ".mue-tab-main > ul", header: "header", footer: "footer", main: ".mue-tab-main", item: "li", prev: ".mue-tab-prev", next: ".mue-tab-next", data: null, navscroll: !1, loadall: !1, position: "top", BiconBadge: !0, iconPosition: "left", loaded: null, compiled: null, sideWidth: 0, align: "center", alignClassName: "", stopHandle: "", width: 0, height: 0, relative: !1, zoom: !1, swipe: !0, animate: !0, bufferEffect: !1, visibleNum: 1, scrollNum: 1, distance: 40, direction: "x", autoplay: !1, autoheight: !1, scroll: !0, index: 0, fullscreen: !1, autopage: !1, autoload: !1, autoinit: !0, template: null, async: !0, callback: null, onBeforeInit: null, onInited: null, onStart: null, onMove: null, onEnd: null },
                    v = e.config = n.extend(!0, {}, g, t.config.slide, i),
                    m = null,
                    b = null,
                    y = null,
                    w = t.guid();
                return function(e) {
                    b = n.extend(!0, e.data), e.data && (e.menu = "." + w + "-menu", e.children = "." + w + "-main", r(b), e.data = null);
                    var i = t.$(".mue-tab-sidenav");
                    if (b && "left" == e.position) {
                        e.sideWidth && i.width(e.sideWidth);
                        var c = e.sideWidth || i.width();
                        e.width = e.width || n(window).width() - c, t.$(e.id).addClass("mue-tab-left"), t.$(e.id).css({ "margin-left": c }), i.css("left", -c)
                    } else if (b && "right" == e.position) {
                        e.sideWidth && i.width(e.sideWidth);
                        var c = e.sideWidth || i.width();
                        e.width = e.width || n(window).width() - c, t.$(e.id).addClass("mue-tab-right"), i.css({ left: "100%" })
                    }
                    return m = t.slide(e), "left" != e.position && "right" != e.position || t.$(e.id).css({ overflow: "visible" }), b && m.on("to", function() {
                        var e = this.index(),
                            t = b && b[e] || {},
                            n = v.loadall ? ".delay-item" : "#" + t.id;
                        loader.delay({ id: n, param: t.param, everytime: t.everytime, loaded: v.loaded, compiled: v.compiled })
                    }).to(e.index), m.name = "tab", m.templateNav = s, m.renderNav = l, m.addBadge = a, m.removeBadge = o, m
                }(v)
            }
        }(window.bui || {}, window.libs)
    });
    ! function(e, t) {
        e.input = function(n) {
            function i(n) {
                var i = t.extend(!0, T, n);
                if (i.onBeforeInit && i.onBeforeInit.call(k, i), T = k.config = i, "" != i.id && null !== i.id) {
                    if (g = e.obj(i.id), k.$el = g, w = g.find(i.target), m = w.eq(0), b = e.unit.startWithClass(i.iconClass) ? i.iconClass : "." + i.iconClass, !I) {
                        if (a(i), i.showLength) {
                            var r = o(i);
                            g.append(r)
                        }
                        i.maxLength > 0 && w.attr("maxlength", i.maxLength)
                    }
                    return i.showLength && w.trigger(i.event), i.onInited && i.onInited.call(k, i), this
                }
            }

            function a(e) {
                var n = !1;
                return w.on(e.event, function(i) {
                    var a = this.value,
                        o = t(this).parent(),
                        r = o.find(b);
                    v = a, a.length > 0 && e.showIcon ? r && r.length ? r.css("display", "block") : (o.append('<i class="' + b.replace(/\./g, " ").substr(1) + '"></i>'), r = w.find(b)) : r && r.css("display", "none"), e.showLength && (y = o.find("em"), y.text(a.length)), n || (e.onInput && e.onInput.call(k, i), p.call(k, "input", i))
                }).on("compositionstart", function() { n = !0 }).on("compositionend", function(t) {
                    n = !1;
                    var i = m.val();
                    e.onInput && e.onInput.call(k, t, i)
                }), e.onChange && w.off("change").on("change", function(t) { e.onChange.call(k, t), p.call(k, "change", t) }), e.onFocus && w.off("focus").on("focus", function(n) {
                    var i = this.value;
                    v = i, m = t(this), e.showIcon && (g.find(b).css("display", "none"), i && t(this).next().css("display", "block")), e.onFocus.call(k, n), p.call(k, "focus", n)
                }), e.onBlur && w.off("blur").on("blur", function(t) {
                    var n = e.onBlur && e.onBlur.call(k, t);
                    v = 1 == n || null === n ? this.value : "", p.call(k, "blur", t)
                }), e.showIcon && g.off("click.bui", b).on("click.bui", b, function(t) { e.callback && e.callback.call(k, t), p.call(k, "click", t) }), I = !0, this
            }

            function o(e) { m.parent(); return '<span class="mue-input-length"><em>0</em>/' + e.maxLength + "</span>" }

            function r(e) { return void 0 !== e ? (m.val(e), w.trigger(T.event), this) : m.val() }

            function l() { return m.val(""), w.trigger(T.event), this }

            function c() { return m.val(""), m.next().css("display", "none"), T.showLength && y.text(0), this }

            function s() { return "text" == m.attr("type") ? m.attr("type", "password") : m.attr("type", "text"), this }

            function u(t) { var n = {}; return e.widget.call(n, t) }

            function d(t, n) { return e.option.call(k, t, n) }

            function f(t, n) { return e.on.apply(k, arguments), this }

            function h(t, n) { return e.off.apply(k, arguments), this }

            function p(t) { k.self = this == window || this == k ? null : this, e.trigger.apply(k, arguments) }
            var g, v, m, b, y, w, x = { id: "", target: "input,textarea", event: "input", iconClass: ".icon-remove", showIcon: !0, showLength: !1, maxLength: 0, onInput: null, onBlur: null, onFocus: null, autoinit: !0, onBeforeInit: null, onChange: null, onInited: null, callback: null },
                k = { name: "input", handle: {}, empty: c, value: r, reset: l, toggleType: s, on: f, off: h, widget: u, option: d, config: T, init: i },
                T = k.config = t.extend(!0, {}, x, e.config.searchbar, n),
                I = !1;
            return T.autoinit && i(T), k
        }
    }(bui || {}, libs),
    function(e, t) {
        e.timer = function(n) {
            function i(t) {
                var n = null;
                switch (t.type) {
                    case "minute":
                        n = 60 * parseInt(v, 10);
                        break;
                    case "hour":
                        n = 60 * parseInt(v, 10) * 60;
                        break;
                    case "day":
                        n = 60 * parseInt(v, 10) * 60 * 24;
                        break;
                    case "date":
                        n = (e.date.convert(v).getTime() - (new Date).getTime()) / 1e3;
                        break;
                    case "second":
                    default:
                        n = parseInt(v, 10)
                }
                return f || (v = n, n = 0), n
            }

            function a() { return p = b, g = !0, clearTimeout(y), this }

            function o() { return p = 0, b = i(d), y = clearTimeout(y), w(), this }

            function r(t) {
                var n = new Date,
                    i = e.date.format(n, "yyyy-MM-dd"),
                    a = 0,
                    o = 0,
                    r = 0,
                    c = "",
                    s = parseInt(t % 60, 10);
                switch (d.type) {
                    case "minute":
                        o = parseInt(t / 60, 10), c = l(o) + ":" + l(s);
                        break;
                    case "hour":
                        a = parseInt(t / 60 / 60, 10), o = parseInt(t / 60 % 60, 10), c = l(a) + ":" + l(o) + ":" + l(s);
                        break;
                    case "date":
                        i = e.date.format(d.times || d.time, "yyyy-MM-dd"), r = parseInt(t / 60 / 60 / 24, 10), a = parseInt(t / 60 / 60 % 24, 10), o = parseInt(t / 60 % 60, 10), c = "剩余" + r + "天 " + l(a) + ":" + l(o) + ":" + l(s);
                        break;
                    case "day":
                        i = e.date.format(n.getTime() + 1e3 * t, "yyyy-MM-dd"), r = parseInt(t / 60 / 60 / 24, 10), a = parseInt(t / 60 / 60 % 24, 10), o = parseInt(t / 60 % 60, 10), c = "剩余" + r + "天 " + l(a) + ":" + l(o) + ":" + l(s);
                        break;
                    case "second":
                        o = parseInt(t / 60, 10), c = l(o) + ":" + l(s);
                        break;
                    case "number":
                        o = parseInt(t / 60, 10), c = "" + l(parseInt(t, 10))
                }
                return { date: i, day: r, hour: a, minute: o, second: s, count: t, value: c, target: h && h[0] }
            }

            function l(e) { return e < 10 && d.fixZero ? "0" + e : e }

            function c() { g && (b = p, g = !1); var e = r(b); return b <= 0 ? (b = 0, h && h.text(e.value), d.onEnd && d.onEnd.call(this, e), clearTimeout(y), void(m = !1)) : (h && h.text(e.value), d.onProcess && d.onProcess.call(this, e), b--, m = !0, y = setTimeout(function() { c() }, d.interval), this) }

            function s() { g && (b = p, g = !1); var e = r(b); return b >= v ? (h && h.text(e.value), b = v, d.onEnd && d.onEnd.call(this, e), clearTimeout(y), void(m = !1)) : (h && h.text(e.value), d.onProcess && d.onProcess.call(this, e), b++, m = !0, y = setTimeout(function() { s() }, d.interval), this) }
            var u = { interval: 1e3, target: null, reduce: !0, onEnd: null, onProcess: null, fixZero: !0, type: "number", time: 10, times: 0 },
                d = t.extend({}, u, n),
                f = d.reduce,
                h = d.target ? e.obj(d.target) : null,
                p = 0,
                g = !1,
                v = d.times || d.time,
                m = !1,
                b = i(d),
                y = null,
                w = f ? c : s;
            return { name: "timer", stop: function(e) { p = 0, b = i(d), clearTimeout(y), y = null, e && e.call(this) }, start: w, restart: o, status: function() { return m }, pause: a }
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.extend({
            name: "floor",
            config: { id: "", menu: "", handle: ".mue-btn", floorItem: ".mue-floor-item", footer: ".mue-floor-footer", area: .5, delay: 200, height: "inherit", distance: 1, onScroll: null, onScrollTop: null, onScrollBottom: null, onLoaded: null },
            callback: function(n) {
                function i(e) {
                    var n = function(n) {
                        if (d) {
                            var i = t(this).scrollTop();
                            0 === i && (n.index = 0, o.trigger("scrolltop", n), e.onScrollTop && e.onScrollTop.call(o, n)), i > 5 && h && (a(), h = !1);
                            var r = v * parseFloat(e.area),
                                l = 0;
                            for (l = 0; l < m.length; l++) {
                                var s = m[l];
                                if (s.top > -1) {
                                    var u = s.top - i;
                                    if (s.top == i && 0 == i) return c && c.removeClass("active"), c && c.eq(l).addClass("active"), n.index = l, void o.trigger("scrollto", n);
                                    u < r && (c && c.removeClass("active"), c && c.eq(l).addClass("active"), n.index = l, o.trigger("scrollto", n))
                                }
                            }
                            parseInt(i + this.offsetHeight, 10) == parseInt(this.scrollHeight, 10) && (n.index = m.length - 1, o.trigger("scrollbottom", n), e.onScrollBottom && e.onScrollBottom.call(o, n))
                        }
                        o.trigger("scroll", n), e.onScroll && e.onScroll.call(o, n)
                    };
                    r.scroll(n), l && l.off("click.bui", e.handle).on("click.bui", e.handle, function(e) {
                        d = !1, p && (a(), p = !1);
                        var n = t(this).index();
                        o.to(n), o.trigger("click", e)
                    }), r.parents("main").css("position", "relative"), f = !0
                }

                function a() {
                    m = [], s.each(function(e, t) {
                        var n = { top: "none" === this.style.display ? -1 : this.offsetTop, display: this.style.display };
                        m.push(n)
                    })
                }
                var o = this,
                    r = null,
                    l = null,
                    c = null,
                    s = null,
                    u = null,
                    d = !0,
                    f = !1,
                    h = !0,
                    p = !0,
                    g = null,
                    v = 0,
                    m = [];
                o.init = function(n) {
                        var d = t.extend(!0, o.config, n);
                        if (o.config = d, d.id || e.showLog("id 不能为空"), r = e.$(d.id), l = e.$(d.menu), c = l && l.find(d.handle), s = r.find(d.floorItem), u = r.find(d.footer), "string" == typeof d.height && "inherit" !== d.height) {
                            var h = t(window).height() - e.$("header").height() - e.$("footer").height() - r[0].offsetTop;
                            h = d.height.indexOf("%") > -1 ? t(window).height() * parseInt(d.height, 10) / 100 : h, r.height(h).css("position", "relative"), v = h
                        } else "number" == typeof d.height && d.height > 0 ? (r.height(d.height).css("position", "relative"), v = d.height) : v = r.height();
                        a(), f || i(d), d.onLoaded && d.onLoaded.call(o, d)
                    }, o.to = function(e, t) {
                        c = l && l.find(o.config.handle);
                        var n = m[e] && m[e].top || 0;
                        r[0].scrollTop = n, c && c.removeClass("active"), c && c.eq(e).addClass("active"), g && clearTimeout(g), g = setTimeout(function() { d = !0 }, o.config.delay), t && t.call(o, e), o.trigger("to", e);
                        var i = { target: r[0], index: e };
                        o.trigger("scrollto", i)
                    },
                    o.destroy = function(e) {
                        var e = 1 == e;
                        r && (r.off("click.bui"), r.off("scroll"), e && r.remove(), r = null), l && (l.off("click.bui"), l = null), o.off("click"), o.off("to"), o.off("scroll"), o.off("scrollto"), o.off("scrolltop"), o.off("scrollbottom"), f = !1
                    }, o.init(o.config)
            }
        })
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.ajax = function(i) {
            function a(e) {
                var t = function(t, n, i) {
                        var a = null;
                        if ("string" == typeof t && "json" == e.dataType) try { a = JSON.parse(t) } catch (e) { a = t } else a = t || {};
                        a = e.transformResponse ? e.transformResponse.call(o, a) || a : a, s && s(a, n, i), o.resolve(a, n, i)
                    },
                    i = function(t, n, i) {
                        var a;
                        if ("string" == typeof t && "json" == e.dataType) try { a = JSON.parse(t) } catch (e) { a = t } else a = t || {};
                        u && u(a, n, i), o.reject(a, n, i)
                    };
                e.success = t, e.error = i;
                var a = e.type && e.type.toUpperCase();
                e.type = a || e.method.toUpperCase(), r = n.ajax(e)
            }
            var o = n.Deferred(),
                r = null,
                l = { baseUrl: "", data: {}, method: "GET", dataType: "json", timeout: 6e4, headers: {}, processData: !0, mimeType: "none", cache: !0, async: !0, needJsonString: !1, contentType: null, localData: null, transformRequest: null, transformResponse: null, native: !0, needNative: !1 },
                c = n.extend(!0, {}, l, e.config.ajax, i),
                s = c.success,
                u = c.fail || c.error;
            null === c.contentType && "get" == c.method.toLocaleLowerCase() ? c.contentType = "text/html;charset=UTF-8" : null === c.contentType && "post" == c.method.toLocaleLowerCase() ? c.contentType = "application/x-www-form-urlencoded" : c.contentType = c.contentType;
            "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
            if (c.needJsonString) try { c.data = "object" === t(c.data) ? JSON.stringify(c.data) : c.data } catch (e) { c.data = c.data }
            if (c.data = c.transformRequest ? c.transformRequest.call(o, c.data) || c.data : c.data, !c.url) return e.showLog("url不能为空", "mue.ajax"), o;
            if (c.url.indexOf("://") > -1 ? c.url = c.url : c.url.indexOf("./") > -1 || c.url.indexOf("../") > -1 ? c.url = mue.unit.resolvePath(c.url) : c.url = c.baseUrl + c.url, c.proxy) {
                var d = c.url.indexOf(c.proxy),
                    f = d > -1 ? d + 1 : -1;
                c.url = c.url.substr(f)
            }
            if (o.abort = function() { r && r.abort() }, c.localData) return c.localData = c.transformResponse ? c.transformResponse.call(o, c.localData) || c.localData : c.localData, s && s(c.localData, 200), o.resolve(c.localData, 200), o;
            if (c.needNative) { if (void 0 === e.native.ajax) return a(c), o; try { o = e.native.ajax && e.native.ajax(c) || o } catch (e) {} } else a(c);
            return o
        }, e.get = function(t, i, a) {
            var o = {};
            o.method = "GET", o.url = t, o.data = i || {};
            var r = null,
                l = a && a[0];
            return r = a && "array" === e.typeof(a) && "object" == e.typeof(l) ? n.extend(!0, {}, e.config.get, o, l) : o, mue.ajax(r)
        }, e.post = function(i, a, o) {
            var r = {};
            r.method = "POST", r.contentType = "application/x-www-form-urlencoded", r.url = i, r.data = a || {};
            var l = null,
                c = o && o[0];
            return l = o && "array" === e.typeof(o) && "object" == e.typeof(c) ? n.extend(!0, {}, e.config.post, r, c) : r, l.contentType.indexOf("application/json") > -1 && (l.data = "object" === t(l.data) ? JSON.stringify(l.data) : l.data), mue.ajax(l)
        }, e.put = function(i, a, o) {
            var r = {};
            r.method = "PUT", r.contentType = "application/json", r.url = i, r.data = a || {};
            var l = null,
                c = o && o[0];
            return l = o && "array" === e.typeof(o) && "object" == e.typeof(c) ? n.extend(!0, {}, e.config.put, r, c) : r, l.contentType.indexOf("application/json") > -1 && (l.data = "object" === t(l.data) ? JSON.stringify(l.data) : l.data), mue.ajax(l)
        }, e.delete = function(i, a, o) {
            var r = {};
            r.method = "DELETE", r.contentType = "application/json", r.url = i, r.data = a || {};
            var l = null,
                c = o && o[0];
            return l = o && "array" === e.typeof(o) && "object" == e.typeof(c) ? n.extend(!0, {}, e.config.delete, r, c) : r, l.contentType.indexOf("application/json") > -1 && (l.data = "object" === t(l.data) ? JSON.stringify(l.data) : l.data), mue.ajax(l)
        }, e.all = function(t) { var i = null; return i = t && "array" === e.typeof(t) ? t : Array.prototype.slice.apply(arguments), n.when.apply(null, i) }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.load = function(n) {
            var i, a = !!e.hasRouter && router.config.reload,
                o = { url: "", param: {}, reload: a, replace: !1, native: !0, needNative: !1 },
                r = t.extend(!0, {}, o, e.config.load, n),
                l = {},
                c = r.url;
            if (!r.url) return void e.showLog("url 不能为空!", "mue.load:web");
            if (document.activeElement.blur(), c.indexOf("tel:") >= 0 || c.indexOf("mailto:") >= 0 || c.indexOf("sms:") >= 0) return void e.unit.openExtral(c);
            if (c && c.indexOf("?") > -1) {
                var s = c.split("?");
                l = e.unit.keyStringToObject(s[1]), r.url = s[0]
            }
            try {
                var u = "string" == typeof r.param && JSON.parse(r.param) || r.param || {};
                r.param = t.extend(!0, {}, l, u)
            } catch (t) { return void e.showLog("param 参数值必须是一个{}对象", "mue.load:web") }
            return n && n.needNative || e.nativeRouter ? void(e.native.load && e.native.load(r)) : (i = e.setUrlParams(r.url, r.param), r.reload ? void(window.location.href = e.hasRouter ? "index.html#" + i : i) : r.replace && !e.hasRouter ? void window.location.replace(i) : void(e.hasRouter ? window.router.load(r) : window.location.href = i))
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.getPageParams = function(i) {
            var a = n.Deferred(),
                o = { callback: null, native: !0, needNative: !1 };
            i = i || {};
            var r = n.extend(!0, {}, o, e.config.getPageParams);
            "function" == typeof i ? r.callback = i : i && "object" === e.typeof(i) && (r = n.extend(!0, {}, o, e.config.getPageParams, i));
            "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
            if (i && i.needNative || e.nativeRouter) return a = e.native.getPageParams && e.native.getPageParams(r) || a;
            if (e.hasRouter) {
                var l = window.router.getPageParams && window.router.getPageParams() || e.getUrlParams();
                r.callback && r.callback(l), a.resolve(l)
            } else {
                var c = e.getUrlParams();
                r.callback && r.callback(c), a.resolve(c)
            }
            return a
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.back = function(i) {
            function a() {
                var t = e.hasRouter && e.history.getPrev() || {},
                    n = t.exports || {};
                window.history.go(o.index), f && clearTimeout(f), o.delay && o.callback ? f = setTimeout(function() { e.hasRouter ? o.callback.call(router, n) : o.callback.call(e, {}) }, 500) : o.callback && o.callback()
            }
            var o, r = { index: -1, name: "", delay: !0, native: !0, beforeBack: !0, callback: null };
            "function" == typeof i ? (r.callback = i, o = n.extend(!0, {}, r, e.config.back)) : o = i && "object" === e.typeof(i) ? n.extend(!0, {}, r, e.config.back, i) : n.extend(!0, {}, r, e.config.back);
            var l = ("object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp, e.hasRouter ? router.history && router.history.getLast() || null : null);
            if (!1 !== ("function" == typeof o.beforeBack ? o.beforeBack.call(this, { prevTarget: null, target: l }) : o.beforeBack)) {
                if (i && i.needNative || e.nativeRouter) return void(e.native.back && e.native.back(o));
                if (e.hasRouter)
                    if (window.router.config.syncHistory) {
                        var c = e.history.get(),
                            s = c.length - 1;
                        if (o.name) {
                            var u = e.array.indexs(c, o.name, "name"),
                                d = u.length;
                            o.index = d ? -(c.length - u[d - 1] - 1) : -1
                        }
                        if (Math.abs(o.index) >= c.length && (o.index = -s), Math.abs(o.index) >= window.history.length && window.router.config.hash && (o.index = window.router.config.reloadCache ? -s : -(window.history.length - 1)), 0 == o.index && (o.index = -1), window.router.config.hash && !window.router.config.reloadCache) return void a();
                        (c.length > 1 || window.history.length > 1) && a()
                    } else window.router.back && window.router.back(o);
                else a();
                var f = null
            }
        }
    }(window.bui || {}, window.libs),
    function(e, t) { e.refresh = e.history.refresh }(window.bui || {}, window.libs),
    function(e, n) {
        e.run = function(i) {
            var a = {},
                o = { id: "", name: "", data: null, onFail: null, native: !0, needNative: !0 };
            "string" == typeof i ? a.id = i : i && "object" === e.typeof(i) && (a = n.extend(!0, {}, o, e.config.run, i));
            var r = String(a.id);
            "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
            if (i.needNative) e.native.run && e.native.run(a);
            else if (r.indexOf("http://") > -1 || r.indexOf("https://") > -1) {
                var l = e.setUrlParams(a.id, a.data);
                if (e.platform.isIos()) return void(window.location.href = l);
                var c = window.open("", "_blank") || window.open("", "_newtab");
                c.location.href = l
            }
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.fileselect = function(i) {
            function a(t) {
                var i = n.extend(!0, T, t);
                switch (T.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), i.mediaType) {
                    case "allmedeia":
                        S = "*";
                        break;
                    case "picture":
                    case "image":
                        S = "image/*";
                        break;
                    case "video":
                        S = "video/*";
                        break;
                    case "audio":
                        S = "audio/*";
                        break;
                    default:
                        S = i.mediaType
                }
                return L = [], N = new Image, B = new FileReader, R = document.createElement("canvas"), D = R.getContext("2d"), P ? (f(), E || o(i)) : x = e.native.fileselect && e.native.fileselect.call(this, t, { module: O }) || {}, this
            }

            function o(t) {
                return w.on("change", function(t) {
                    var n = this.files;
                    if (!(n.length < 1)) {
                        n.length > 1 && e.showLog("一次只能选一张图片", "mue.fileselect:web");
                        var i = n[0];
                        C = i;
                        var a = { name: i.name, data: i, type: i.type, size: i.size };
                        if (L.push(a), j.needCompress) {
                            j.data = i, j.mimeType = j.mimeType ? j.mimeType : i.type;
                            r(j)
                        } else j.onSuccess && j.onSuccess.call(I, i, L);
                        this.value = ""
                    }
                }), E = !0, this
            }

            function r(i) {
                var a = n.extend(!0, { destinationType: "file", data: null, mimeType: "", quality: .8, width: 800, height: 800, needCompress: !0, needChangeData: !1, onSuccess: null, onFail: null }, T, i);
                N.onload = function() {
                    var t = this.width,
                        n = this.height,
                        i = null,
                        o = a.width,
                        r = a.height,
                        c = t,
                        s = n;
                    a.needCompress && (t > o || n > r) && (t / n > o / r ? (c = o, s = Math.round(o * (n / t))) : (s = r, c = Math.round(r * (t / n)))), R.width = c, R.height = s, D.clearRect(0, 0, c, s), D.drawImage(N, 0, 0, c, s);
                    var f = R.toDataURL(a.mimeType || a.data && a.data.type || "image/jpeg", a.quality),
                        h = l(a.data.name) || "";
                    switch (a.destinationType) {
                        case "file":
                            i = u(f, h);
                            break;
                        case "blob":
                            i = d(f);
                            break;
                        case "data":
                            i = f
                    }
                    if (a.needChangeData) {
                        C = i;
                        var p = e.array.index(L, a.data.name, "name");
                        p > -1 && (L[p].data = i, i.size && (L[p].size = i.size), i.type && (L[p].type = i.type))
                    }
                    return a.onSuccess && a.onSuccess.call(I, i, L), i
                }, N.onerror = function() { a.onFail && a.onFail.call(I, N.src) }, B.onload = function(e) { N.src = e.target.result };
                try {
                    var o = a.data && a.data.type || "";
                    o = "object" === (void 0 === o ? "undefined" : t(o)) ? o.type || "" : o || "", a.data && 0 == o.indexOf("image") && B.readAsDataURL(i.data)
                } catch (t) { e.showLog(t) }
            }

            function l(e) { return e.indexOf(".png") > -1 || e.indexOf(".jpg") > -1 || e.indexOf(".gif") > -1 || e.indexOf(".jpeg") > -1 ? e.substr(0, e.lastIndexOf(".")) : e }

            function c(t) { C = null; var i = n.extend(!0, { needChangeData: !0, needCompress: !1, name: "resize.jpg" }, T, t); return j = i, j.mimeType = t.mimeType ? t.mimeType : "", P ? (t.from ? "picture" === t.from || "photo" === t.from || "savephoto" === t.from ? w.removeAttr("capture") : w.attr("capture", t.from) : w.removeAttr("capture"), e.platform.isIos() && "function" == typeof FastClick ? w[0].dispatchEvent(new Event("click")) : w.trigger("click")) : x.add(i), this }

            function s(t) { var i = n.extend(!0, { needCompress: !1, destinationType: "data", mimeType: "", needChangeData: !1 }, t); if (i.data = i.data || C, i.mimeType = t.mimeType ? t.mimeType : i.data && i.data.type || "image/jpeg", P) try { r(i) } catch (t) { e.showLog(t) } else x.toBase64(i); return this }

            function u(t, n) { try { n = n || "file"; for (var i = t.split(","), a = i[0].match(/:(.*?);/) || [], o = a[1] || "image/jpeg", r = o.split("/")[1], l = atob(i[1]), c = l.length, s = new Uint8Array(c); c--;) s[c] = l.charCodeAt(c); return new File([s], n + "." + r, { type: o }) } catch (t) { e.showLog(t) } }

            function d(e) { for (var t = e.split(","), n = t[0].match(/:(.*?);/)[1], i = atob(t[1]), a = i.length, o = new Uint8Array(a); a--;) o[a] = i.charCodeAt(a); return new Blob([o], { type: n }) }

            function f() {
                if (void 0 == w) {
                    y = mue.guid();
                    var e = T.from ? 'capture="' + T.from + '"' : "",
                        t = '<input type="file" accept="' + S + '" name="uploadFiles" id="' + y + '" ' + e + ' style="display:none"/>';
                    n(T.appendTo).append(t), w = n("#" + y) || n('input[name="uploadFiles"]')
                }
            }

            function h(t, n) { var n = n || "name"; if (!P) return L = x.remove(t, n); if ("string" == typeof t) { L.length && e.array.remove(L, t, n); var i = L.length ? L[L.length - 1].data : null; return C = i, w[0].value = "", L } return this }

            function p() { return L = [], C = null, P ? w[0].value = "" : x.clear(), L }

            function g() { return L = P ? L : x.data() }

            function v() { return C = P ? C : x.value() }

            function m() { return P ? L[L.length - 1].name : x.value().name }

            function b() { return P ? L.length - 1 : x.data().length - 1 }
            var y, w, x, k = { native: !0, needNative: !1, needCompress: !1, appendTo: "", quality: .8, from: "camera", width: 800, height: 800, duration: 10, onSuccess: null, onFail: null, mediaType: "picture" },
                T = n.extend(!0, {}, k, e.config.fileselect, i),
                I = this,
                O = { add: c, remove: h, clear: p, value: v, data: g, toFile: u, toBase64: s, resize: r, toBlob: d, currentIndex: b, currentName: m, init: a },
                C = null,
                j = null,
                L = [],
                P = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp,
                S = "*",
                E = !1,
                N = null,
                B = null,
                R = null,
                D = null;
            return a(T), O
        }
    }(bui || {}, libs),
    function(e, n) {
        e.file = function(i) {
            function a(t) { return y = e.fileselect(t), v = o(t), !t.needNative && (m = r({ root: !0, create: !0 })), this }

            function o(t) {
                function i(e) {
                    var t = "";
                    try {
                        switch (e.code) {
                            case FileError.QUOTA_EXCEEDED_ERR:
                                t = "QUOTA_EXCEEDED_ERR";
                                break;
                            case FileError.NOT_FOUND_ERR:
                                t = "NOT_FOUND_ERR";
                                break;
                            case FileError.SECURITY_ERR:
                                t = "SECURITY_ERR";
                                break;
                            case FileError.INVALID_MODIFICATION_ERR:
                                t = "INVALID_MODIFICATION_ERR";
                                break;
                            case FileError.INVALID_STATE_ERR:
                                t = "INVALID_STATE_ERR";
                                break;
                            default:
                                t = "Unknown Error"
                        }
                    } catch (e) {}
                    var n = { msg: t };
                    a.reject(n)
                }
                var a = n.Deferred();
                return t.needNative ? w = e.native.file && e.native.file(t, { fileselect: y, module: T }) || {} : (p = "mue.app", g = window, b = 1024 * parseInt(I.size) * 1024, window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, navigator.webkitPersistentStorage && navigator.webkitPersistentStorage.requestQuota(b, function(e) { window.requestFileSystem(window.PERSISTENT, e, function(e) { a.resolve(e) }, i) })), a
            }

            function r(e) {
                var t = { folderName: p, root: !1, create: !1, msg: "", param: { create: !1, exclusive: !1 }, onSuccess: null, onFail: null },
                    i = n.extend({}, t, e),
                    a = "";
                if (i.create ? (a = "创建 ", i.param.create = !0) : (a = "获取 ", i.param.create = !1), I.needNative) w.getFolder(i);
                else {
                    var o = l(i.folderName);
                    o = i.root ? o : p + "/" + o, v.done(function(e) {
                        e.root.getDirectory(o, i.param, function(t) { i.onSuccess && i.onSuccess.call(T, t, e) }, function(e) {
                            var t = { msg: a + o + " 文件夹失败" };
                            i.onFail && i.onFail.call(T, t)
                        })
                    }).fail(function(e) {
                        var t = { msg: "文件系统还没准备好." };
                        i.onFail && i.onFail.call(T, t)
                    })
                }
                return this
            }

            function l(e) { var t; return "." == e[0] || "/" == e[0] || " " == e[0] ? (t = e.slice(1), l(t)) : "." != e[0] && "/" != e[0] && " " != e[0] ? e : void 0 }

            function c(e) { return e && e.indexOf("/") > -1 ? e.slice(e.lastIndexOf("/") + 1, e.indexOf("?") > -1 ? e.indexOf("?") : void 0) : e }

            function s(e) {
                var t = { fileName: "", folderName: "", root: !1, create: !1, param: { create: !1, exclusive: !1 }, onSuccess: null, onFail: null },
                    i = n.extend({}, t, e),
                    a = "";
                if (i.create ? (a = "创建 ", i.param.create = !0) : (a = "获取 ", i.param.create = !1), !i.fileName || i.fileName.indexOf(".") < 0) return void(i.onFail && i.onFail());
                if (I.needNative) w.getFile(i);
                else {
                    var o = c(i.fileName);
                    r({
                        root: i.root,
                        folderName: i.folderName,
                        create: !0,
                        onSuccess: function(e, t) {
                            var n = e.name == p ? e.name + "/" + o : p + "/" + e.name + "/" + o;
                            t.root.getFile(n, i.param, function(e) { x = e, i.onSuccess && i.onSuccess.call(T, e, t) }, function(e) {
                                var t = { msg: a + o + " 文件失败" };
                                i.onFail && i.onFail.call(T, t)
                            })
                        },
                        onFail: function(e) { i.onFail && i.onFail(e) }
                    })
                }
                return this
            }

            function u(e) {
                var t = n.extend(!0, {}, e);
                return I.needNative ? w.removeFolder(t) : r({
                    root: t.root,
                    folderName: t.folderName,
                    create: t.create,
                    onSuccess: function(e, n) {
                        e.removeRecursively(function() { t.onSuccess && t.onSuccess.call(T, e, n) }, function(n) {
                            var i = { msg: "删除 " + t.folderName + " 文件失败" };
                            t.onFail && t.onFail.call(T, i, e)
                        })
                    },
                    onFail: function(e) {
                        var n = { msg: "删除 " + t.folderName + " 文件失败" };
                        t.onFail && t.onFail.call(T, n)
                    }
                }), this
            }

            function d(e) {
                var t = n.extend(!0, {}, e);
                return I.needNative ? w.removeFile(t) : s({
                    root: t.root,
                    create: t.create,
                    folderName: t.folderName,
                    fileName: t.fileName,
                    onSuccess: function(e, n) {
                        e.remove(function() { t.onSuccess && t.onSuccess.call(T, e, n) }, function(n) {
                            var i = { msg: "删除 " + t.fileName + " 文件失败" };
                            t.onFail && t.onFail.call(T, i, e)
                        })
                    },
                    onFail: function(e) {
                        var n = { msg: "删除 " + t.fileName + " 文件失败" };
                        t.onFail && t.onFail.call(T, n)
                    }
                }), this
            }

            function f(t) { var n = t || {}; if (n.url) return I.needNative ? w.open(n) : e.showLog("web暂不支持open方法", "mue.file.open:web"), this }

            function h(e) { return y.toBase64(e), this }
            var p, g, v, m, b, y, w, x, k = { size: 10, native: !0, needNative: !1 },
                T = { getFolder: r, removeFolder: u, getFile: s, getFileName: c, removeFile: d, toBase64: h, open: f, init: a },
                I = T.config = n.extend(!0, {}, k, e.config.file, i);
            "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
            return a(I), T
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.upload = function(i) {
            function a(t) { return x = e.loading({ display: "block", width: 30, height: 30, opacity: 0, autoClose: t.autoClose, callback: t.onMask }), k = e.fileselect.call(E, { native: t.native, needNative: t.needNative, from: t.from, mediaType: t.mediaType }), t && t.needNative && (I = e.native.upload && e.native.upload(t, { loading: x, fileselect: k, module: E }) || {}), t.data ? (d(t), this) : this }

            function o(e) { return k.resize(e), this }

            function r(e) { return e.onSuccess = e.onSuccess ? e.onSuccess.bind(E) : null, e.onFail = e.onFail ? e.onFail.bind(E) : null, k.add(e), this }

            function l(e, t) {
                var n = u(),
                    i = n.length;
                return i < 1 ? this : (/\d/.test(e) && e.indexOf(".") < 0 ? k.remove(n[e].name, t) : "string" == typeof e ? k.remove(e, t) : k.remove(n[i - 1].name, t), this)
            }

            function c() { return k.clear(), this }

            function s(e) { return k.toBase64(e), this }

            function u() { return k.data() }

            function d(e) {
                var t = n.extend(!0, {}, P, e);
                if (C = t.url, O = k.value(), N = t.showProgress, O) {
                    if (N && x.show(), t && t.needNative) return I.start(t) || S;
                    var i = t.data,
                        a = Object.keys(i),
                        o = new FormData,
                        r = !1;
                    return a.forEach(function(e, n) { t.fileKey === e && (r = !0), o.append(e, i[e]) }), !r && o.append(t.fileKey, O), t.data = o, p(t)
                }
            }

            function f(e) {
                var t = n.extend(!0, { needFileinfo: !1 }, P, e),
                    i = t[t.fileKey] || k.data();
                t.data || (t.data = {});
                for (var a = [], o = 0; o < i.length; o++) {
                    i[o];
                    ! function(e) {
                        if (!(e > i.length - 1)) {
                            if (t.data[t.fileKey] = i[e] && i[e].data, t.needFileinfo)
                                for (var n in i[e]) "data" !== n && (t.data[n] = i[e] && i[e][n]);
                            var o = t.onSuccess,
                                r = t.onFail;
                            t.onSuccess = function(n) { o && o.call(E, n), a[e] = n, e == i.length - 1 && t.onEnd && t.onEnd.call(E, a) }, t.onFail = function(n) { r && r.call(E, n), a[e] = n, e == i.length - 1 && t.onEnd && t.onEnd.call(E, a) }, d(t)
                        }
                    }(o)
                }
                return S
            }

            function h(e) { return P && P.needNative ? I.stop(e) : (x && x.stop(), T && T.abort(), e && e.call(E, x, T)), this }

            function p(e) {
                var t = e.onSuccess,
                    i = e.onFail;
                return T = n.ajax({ url: C, type: e.method, data: e.data, cache: e.cache, headers: e.headers, dataType: e.dataType, contentType: e.contentType, processData: e.processData, timeout: e.timeout, xhr: function() { var e = n.ajaxSettings.xhr(); if (g && e.upload) return e.upload.addEventListener("progress", g, !1), e }, success: function(e) { m(), t && t.call(E, e), S.resolve(e) }, error: function(e, t, n) { m(), i && i.call(E, e, t), S.reject(e, t, n) } }), S
            }

            function g(e) {
                window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame, window.requestAnimationFrame(function() {
                    if (e.lengthComputable) {
                        var t = Math.round(100 * e.loaded / e.total);
                        j = t.toString() + "%", t < 100 ? v(j) : m(), B && B.call(E, j)
                    }
                })
            }

            function v(e) { return N && x && x.show({ text: e }), this }

            function m() { return x && x.stop(), this }

            function b() { return k.currentName() }

            function y() { return k.currentIndex() }

            function w(t) { var n = { loading: x, fileselect: k, ajax: T }; return e.widget.call(n, t) }
            var x, k, T, I, O, C, j, L = { url: "", data: null, headers: {}, showProgress: !0, timeout: 6e4, contentType: !1, processData: !1, autoClose: !0, native: !0, needNative: !1, method: "POST", fileKey: "file", dataType: "json", mediaType: "picture", from: "picture", onProgress: null, onMask: function() { h() }, onSuccess: null, onFail: null },
                P = n.extend(!0, {}, L, e.config.upload, i),
                S = n.Deferred(),
                E = { init: a, add: r, remove: l, resize: o, currentIndex: y, currentName: b, clear: c, data: u, start: d, startAll: f, stop: h, toBase64: s, widget: w },
                N = P.showProgress,
                B = P.onProgress;
            "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
            return a(P), E
        }
    }(window.bui || {}, window.libs),
    function(e, n) {
        e.download = function(i) {
            function a(t) { return S = t.showProgress && e.loading({ display: "block", width: 30, height: 30, opacity: 0, callback: function() { u() } }), m = e.file({ native: t.native, needNative: t.needNative }), t.needNative ? b = e.native.download && e.native.download(t, { file: m, loading: S, module: I }) || {} : function(e) { m.getFolder({ folderName: e.folderName, create: !1, onSuccess: function(e, t) { w = e.fullPath }, onFail: function(t) { m.getFolder({ folderName: e.folderName, create: !0, onSuccess: function(e, t) { w = e.fullPath }, onFail: function(e) { P && P.call(I, e) } }) } }), e.url && o(e) }(t), this }

            function o(e) {
                var t = n.extend(!0, {}, O, e);
                y = t.needEncode ? encodeURI(t.url) : t.url, L = t.onProgress, j = t.showProgress, j && S && S.show({ text: "0%" }), x = w + "/" + (e.fileName || m.getFileName(t.url)), t.needNative ? b.start(t) : (t.cache = !1, t.contentType = !1, t.processData = !1, v = n.ajax({
                    url: y,
                    type: t.method,
                    data: t.data,
                    cache: t.cache,
                    headers: t.headers,
                    contentType: t.contentType,
                    processData: t.processData,
                    timeout: t.timeout,
                    xhr: function() { var e = n.ajaxSettings.xhr(); if (d && e) return e.addEventListener("progress", d, !1), e },
                    success: function(n) {
                        var i = e.fileName || m.getFileName(t.url);
                        m.getFile({ fileName: i, folderName: t.folderName, create: !0, onSuccess: function(e, n) { t.onSuccess && t.onSuccess.call(I, e.fullPath, n) } })
                    },
                    fail: function(e) { h(), t.onFail && t.onFail.call(I, e) }
                }))
            }

            function r(e) {
                var t = n.extend(!0, { autoDown: !0 }, O, e),
                    i = e.fileName || m.getFileName(t.url);
                m.getFile({ fileName: i, folderName: t.folderName, onSuccess: function(e, n) { t.onSuccess && t.onSuccess.call(I, e.fullPath || e, e, n) }, onFail: function(e) { t.autoDown = o(t) } })
            }

            function l(t) { return t.fileName ? (t.folderName = t.folderName || O.folderName, m.removeFile(t), this) : (e.showLog("请告诉我们你要删除哪个文件, fileName "), this) }

            function c(e) { return e.folderName = e.folderName || O.folderName, m.removeFolder(e), this }

            function s(e) { return m.open(e), this }

            function u(e) { C ? (h(), v && v.abort(), E && window.cancelAnimationFrame(E)) : b.stop(), e && e.call(I, S, v) }

            function d(e) {
                window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame, E = window.requestAnimationFrame(function() {
                    if (e.lengthComputable) {
                        var t = Math.round(100 * e.loaded / e.total);
                        k = t.toString() + "%", t < 100 ? f(k) : h(), L && L.call(I, k)
                    }
                })
            }

            function f(e) { j && S && S.show({ text: e }) }

            function h() { j && S && S.stop() }

            function p(e) { return m.toBase64(e), this }

            function g(t) { var n = { loading: S, file: m, ajax: v }; return e.widget.call(n, t) }
            var v, m, b, y, w, x, k, T = { url: "", data: {}, headers: {}, method: "GET", showProgress: !0, timeout: 6e4, fileName: "", folderName: "download", native: !0, needNative: !0, onProgress: null, onSuccess: null, onFail: null },
                I = { open: s, getFile: r, removeFile: l, removeFolder: c, start: o, stop: u, toBase64: p, init: a, widget: g },
                O = I.config = n.extend(!0, {}, T, e.config.download, i),
                C = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp,
                j = O.showProgress,
                L = O.onProgress,
                P = O.onFail,
                S = null,
                E = null;
            return a(O), I
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.currentPlatform = "webapp", e.on("pagereadybefore", function() { e.platform.isWindow() || e.platform.isMac() ? window.viewport = e.viewport(40) : window.viewport = e.viewport(), e.config.init.auto && e.init(), !e.hasRouter && e.config.component.auto && loader.components({ id: "body" }) }), e.webready = function(n) { t(document).ready(function() { e.trigger.call(e, "pagereadybefore"), n && n.call(e), e.trigger.call(e, "pageready") }) }, e.ready = function(n) {
            e.isWebapp = void 0 === e.isWebapp ? e.debug : e.isWebapp;
            var i = t.Deferred();
            if (e.isWebapp) t(document).ready(function() { e.trigger.call(e, "pagereadybefore"), n && n.call(e), e.trigger.call(e, "pageready"), i.resolve() });
            else {
                if (void 0 === e.native.ready) return e.showLog("当前 mue.isWebapp = false; 但mue.js为webapp版本,不支持原生方法,请使用 buijs update -p xxx, 更换mue.js为对应xxx平台版本;"), e.webready(n), i;
                i = e.native.ready && e.native.ready(n) || i
            }
            return i
        }
    }(window.bui || {}, window.libs),
    function(e, t) {
        e.init = function(n) {
            var i, a = { id: ".mue-page", height: 0, header: "header", main: "main", footer: "footer", reduceRem: 0 };
            if ("object" == e.typeof(n)) i = t.extend({}, a, e.config.init, n);
            else {
                var o = {};
                o.height = n, i = t.extend({}, a, o)
            }
            var r = i.height || document.documentElement.clientHeight || t("body").height() || t("#mue-router").height() || t(".mue-page").height();
            if (!(e.obj(i.main).length < 1)) {
                try {
                    var l = e.obj(i.id),
                        c = i.header.indexOf("#") > -1 ? e.obj(i.header)[0] : l.children(i.header)[0],
                        s = i.footer.indexOf("#") > -1 ? e.obj(i.footer)[0] : l.children(i.footer)[0],
                        u = i.main.indexOf("#") > -1 ? e.obj(i.main) : l.children(i.main),
                        d = c ? c.offsetHeight : 0,
                        f = s ? s.offsetHeight : 0,
                        h = i.reduceRem > 0 ? e.unit.remToPx(i.reduceRem) : 0,
                        p = r - d - f - h;
                    if (parseInt(p) > 0) u.height(p);
                    else {
                        var g = d + f + h + "px";
                        e.unit.calcHeight(u, g)
                    }
                } catch (t) { e.showLog(t, "mue.init") }
                return p
            }
        }, window.addEventListener ? window.addEventListener("load", function(t) { e.trigger.call(e, "onload") }, !1) : window.attachEvent("onload", function(t) { e.trigger.call(e, "onload") }), t(document).ready(function() { e.isWebapp = void 0 === e.isWebapp ? e.debug : e.isWebapp, e.trigger.call(e, "pagebefore"), "function" == typeof FastClick && FastClick.attach(document.body), e.trigger.call(e, "pageinit") });
        try {
            var n = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "",
                i = n.replace(/hidden/i, "visibilitychange"),
                a = function(t) { document[n] ? e.trigger.call(e, "pagehide", t) : e.trigger.call(e, "pageshow", t) };
            document.addEventListener(i, a)
        } catch (e) {}
        try { navigator.control.gesture(!1), navigator.control.longpressMenu(!1) } catch (e) {}
    }(window.bui || {}, window.libs)
});