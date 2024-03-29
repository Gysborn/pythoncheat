/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        }, u = t.push, i = t.indexOf, n = {}, o = n.toString, y = n.hasOwnProperty, a = y.toString, l = a.call(Object),
        v = {}, m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }, x = function (e) {
            return null != e && e === e.window
        }, S = C.document, c = {type: !0, src: !0, nonce: !0, noModule: !0};

    function b(e, t, n) {
        var r, i, o = (n = n || S).createElement("script");
        if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }

    var f = "3.6.3", E = function (e, t) {
        return new E.fn.init(e, t)
    };

    function p(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    E.fn = E.prototype = {
        jquery: f, constructor: E, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return E.each(this, e)
        }, map: function (n) {
            return this.pushStack(E.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(E.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(E.grep(this, function (e, t) {
                return t % 2
            }))
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: u, sort: t.sort, splice: t.splice
    }, E.extend = E.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e, t, n) {
            b(e, {nonce: t && t.nonce}, n)
        }, each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        }, guid: 1, support: v
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, S, y, s, c, v, E = "sizzle" + 1 * new Date, p = n.document, k = 0,
            r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function (e, t) {
                return e === t && (l = !0), 0
            }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, oe = function () {
                T()
            }, ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {dir: "parentNode", next: "legend"});
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, S)) {
                if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = e.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                }
                if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = E)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        if (d.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))")) throw new Error;
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === E && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[E] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"), r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ye(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        for (e in d = se.support = {}, i = se.isXML = function (e) {
            var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }, T = se.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, S = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }), d.cssSupportsSelector = ce(function () {
                return CSS.supports("selector(*)") && C.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
            }), d.attributes = ce(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), d.getElementsByTagName = ce(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                return a.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
            }), d.getById ? (b.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && S) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(te, ne);
                return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && S) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && S) return t.getElementsByClassName(e)
            }, s = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
            }), ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
            }), d.cssSupportsSelector || y.push(":has"), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), v = t || K.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType && e.documentElement || e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, j = t ? function (e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o) return pe(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }), C
        }, se.matches = function (e, t) {
            return se(e, null, null, t)
        }, se.matchesSelector = function (e, t) {
            if (T(e), d.matchesSelector && S && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
                N(t, !0)
            }
            return 0 < se(t, C, null, [e]).length
        }, se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), v(e, t)
        }, se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
            return void 0 !== r ? r : d.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function (e) {
            return (e + "").replace(re, ie)
        }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1)
            }
            return u = null, e
        }, o = se.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else while (t = e[r++]) n += o(t);
            return n
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, i) {
                    return function (e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (h, e, t, g, y) {
                    var v = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === y ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling", c = e.parentNode,
                            f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (v) {
                                while (l) {
                                    a = e;
                                    while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                d = (s = (r = (i = (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [k, s, d];
                                    break
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                            return (d -= y) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[E] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: le(function (e) {
                    var r = [], i = [], s = f(e.replace(B, "$1"));
                    return s[E] ? le(function (e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }), has: le(function (t) {
                    return function (e) {
                        return 0 < se(t, e).length
                    }
                }), contains: le(function (t) {
                    return t = t.replace(te, ne), function (e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }), lang: le(function (n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return J.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: ye(function () {
                    return [0]
                }), last: ye(function (e, t) {
                    return [t - 1]
                }), eq: ye(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: ye(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: ye(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: ye(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                    return e
                }), gt: ye(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = de(e);
        for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);

        function me() {
        }

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                    if ((i[c] = a)[2] = s(e, t, n)) return !0
                }
                return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--) if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, y, v, e) {
            return y && !y[E] && (y = Ce(y)), v && !v[E] && (v = Ce(v, e)), le(function (e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? v || (e ? d : l || y) ? [] : t : f;
                if (g && g(f, p, n, r), y) {
                    i = Te(p, u), y(i, [], n, r), o = i.length;
                    while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (v || d) {
                        if (v) {
                            i = [], o = p.length;
                            while (o--) (a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--) (a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : H.apply(t, p)
            })
        }

        function Se(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                return e === i
            }, a, !0), l = be(function (e) {
                return -1 < P(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
                    for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                    return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(B, "$1"), t, s < n && Se(e.slice(s, n)), n < r && Se(e = e.slice(n)), n < r && xe(e))
                }
                c.push(t)
            }
            return we(c)
        }

        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, y, v, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--) (a = Se(t[n]))[E] ? i.push(a) : o.push(a);
                (a = A(e, (y = o, m = 0 < (v = i).length, x = 0 < y.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !S);
                            while (s = y[a++]) if (s(o, t || C, n)) {
                                r.push(o);
                                break
                            }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = v[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && S && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !S, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, d.sortStable = E.split("").sort(j).join("") === E, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains, E.escapeSelector = d.escape;
    var h = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && E(e).is(n)) break;
            r.push(e)
        }
        return r
    }, T = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, k = E.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? E.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }

    E.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
                for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), N.test(r[1]) && E.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = S.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }).prototype = E.fn, D = E(S);
    var L = /^(?:parents|prev(?:Until|All))/, H = {children: !0, contents: !0, next: !0, prev: !0};

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }

    E.fn.extend({
        has: function (e) {
            var t = E(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && E(e);
            if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return h(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        }, next: function (e) {
            return O(e, "nextSibling")
        }, prev: function (e) {
            return O(e, "previousSibling")
        }, nextAll: function (e) {
            return h(e, "nextSibling")
        }, prevAll: function (e) {
            return h(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        }, siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return T(e.firstChild)
        }, contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function (r, i) {
        E.fn[r] = function (e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    E.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function () {
            for (a = a || r.once, o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
            }
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    E.each(e, function (e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments), t && !i && c()), this
            }, remove: function () {
                return E.each(arguments, function (e, t) {
                    var n;
                    while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? -1 < E.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return a = u = [], s = t = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = u = [], t || i || (s = t = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return f
    }, E.extend({
        Deferred: function (e) {
            var o = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return a.then(null, e)
                    }, pipe: function () {
                        var i = arguments;
                        return E.Deferred(function (r) {
                            E.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this, r = arguments, e = function () {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }, t = s ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                    }
                                };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }

                        return E.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? E.extend(e, a) : a
                    }
                }, s = {};
            return E.each(o, function (e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = E.Deferred(), a = function (t) {
                return function (e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exceptions: " + e.message, e.stack, t)
    }, E.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = E.Deferred();

    function $() {
        S.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), E.ready()
    }

    E.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || F.resolveWith(S, [E])
        }
    }), E.ready.then = F.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(E.ready) : (S.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
    var B = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === w(n)) for (s in i = !0, n) B(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(E(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, _ = /^-ms-/, z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }

    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = E.expando + G.uid++
    }

    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
            } catch (e) {
            }
            Q.set(e, t, n)
        } else n = void 0;
        return n
    }

    E.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        }, data: function (e, t, n) {
            return Q.access(e, t, n)
        }, removeData: function (e, t) {
            Q.remove(e, t)
        }, _data: function (e, t, n) {
            return Y.access(e, t, n)
        }, _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), E.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : B(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), E.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = E.queue(e, t), r = n.length, i = n.shift(), o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                E.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = E.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], re = S.documentElement, ie = function (e) {
            return E.contains(e.ownerDocument, e)
        }, oe = {composed: !0};
    re.getRootNode && (ie = function (e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return E.css(e, t, "")
            }, u = s(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, E.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }

    E.fn.extend({
        show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = S.createDocumentFragment().appendChild(S.createElement("div")), (fe = S.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }

    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) E.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            E.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && -1 < E.inArray(o, r)) i && i.push(o); else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }

    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function () {
            try {
                return S.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return E().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
            E.event.add(this, t, i, r, n)
        })
    }

    function Ee(e, i, o) {
        o ? (Y.set(e, i, !1), E.event.add(e, i, {
            namespace: !1, handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length) (E.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && E.event.add(e, i, we)
    }

    E.event = {
        global: {}, add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function (e) {
                    return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || E.removeEvent(e, d, y.handle), delete u[d])
                } else for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = E.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = E.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = E.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[E.expando] ? e : new E.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we), !1
                }, trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), !0
                }, _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function (e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp), E.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        E.event.special[t] = {
            setup: function () {
                return Ee(this, t, Ce), !1
            }, trigger: function () {
                return Ee(this, t), !0
            }, _default: function (e) {
                return Y.get(e.target, t)
            }, delegateType: e
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        E.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function (e, t, n, r) {
            return Se(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return Se(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = E.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(ye(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), s && E.merge(a, ye(u, "script"))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    E.extend({
        htmlPrefilter: function (e) {
            return e
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]); else Le(e, c);
            return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
        }, cleanData: function (e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
                if (t = n[Y.expando]) {
                    if (t.events) for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                    n[Y.expando] = void 0
                }
                n[Q.expando] && (n[Q.expando] = void 0)
            }
        }
    }), E.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        }, remove: function (e) {
            return Oe(this, e)
        }, text: function (e) {
            return B(this, function (e) {
                return void 0 === e ? E.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return He(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        }, prepend: function () {
            return He(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ye(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return E.clone(this, e, t)
            })
        }, html: function (e) {
            return B(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return He(this, arguments, function (e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ye(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        E.fn[e] = function (e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = /^--/, Me = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        }, Ie = function (e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        }, We = new RegExp(ne.join("|"), "i"), Fe = "[\\x20\\t\\r\\n\\f]",
        $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

    function Be(e, t, n) {
        var r, i, o, a, s = Re.test(t), u = e.style;
        return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace($e, "$1") || void 0), "" !== a || ie(e) || (a = E.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var n, r, i, o, a, s, u = S.createElement("div"), l = S.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(v, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), o
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), s
            }, scrollboxSize: function () {
                return e(), i
            }, reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = S.createElement("table"), t = S.createElement("tr"), n = S.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"], Ue = S.createElement("div").style, Xe = {};

    function Ve(e) {
        var t = E.cssProps[e] || Xe[e];
        return t || (e in Ue ? e : Xe[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1), n = ze.length;
            while (n--) if ((e = ze[n] + t) in Ue) return e
        }(e) || e)
    }

    var Ge = /^(none|table(?!-c[ea]).+)/, Ye = {position: "absolute", visibility: "hidden", display: "block"},
        Qe = {letterSpacing: "0", fontWeight: "400"};

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Me(e), i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r), o = i,
            a = Be(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }

    E.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Re.test(t), l = e.style;
                if (u || (t = Ve(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Re.test(t) || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), E.each(["height", "width"], function (e, u) {
        E.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function () {
                    return Ze(e, u, n)
                })
            }, set: function (e, t, n) {
                var r, i = Me(e), o = !v.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Je(0, t, s)
            }
        }
    }), E.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({margin: "", padding: "", border: "Width"}, function (i, o) {
        E.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (E.cssHooks[i + o].set = Je)
    }), E.fn.extend({
        css: function (e, t) {
            return B(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((E.Tween = et).prototype = {
        constructor: et, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, E.fx = et.prototype.init, E.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;

    function st() {
        nt && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, E.fx.interval), E.fx.tick())
    }

    function ut() {
        return C.setTimeout(function () {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = E.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        }, l = s.promise({
            elem: o,
            props: E.extend({}, e),
            opts: E.extend(!0, {specialEasing: {}, easing: E.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
            }
        }), c = l.props;
        for (!function (e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return E.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), E.fx.timer(E.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    E.Animation = E.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
                g = e.nodeType && ae(e), y = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, E.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (i = t[r], ot.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || E.style(e, r)
            }
            if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Y.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = E.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {display: l}), o && (y.hidden = !g), g && le([e], !0), p.done(function () {
                for (r in g || le([e]), Y.remove(e, "fxshow"), d) E.style(e, r, d[r])
            })), u = ct(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }], prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), E.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
        }, r
    }, E.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = E.isEmptyObject(t), o = E.speed(e, n, r), a = function () {
                var e = ft(this, E.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = E.timers, r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = E.timers, o = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function (e, r) {
        var i = E.fn[r];
        E.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), E.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        E.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function () {
        var e, t = 0, n = E.timers;
        for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), tt = void 0
    }, E.fx.timer = function (e) {
        E.timers.push(e), E.fx.start()
    }, E.fx.interval = 13, E.fx.start = function () {
        nt || (nt = !0, st())
    }, E.fx.stop = function () {
        nt = null
    }, E.fx.speeds = {slow: 600, fast: 200, _default: 400}, E.fn.delay = function (r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, rt = S.createElement("input"), it = S.createElement("select").appendChild(S.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = S.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value;
    var pt, dt = E.expr.attrHandle;
    E.fn.extend({
        attr: function (e, t) {
            return B(this, E.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function (e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = dt[t] || E.find.attr;
        dt[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(P) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }

    E.fn.extend({
        prop: function (e, t) {
            return B(this, E.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), v.optSelected || (E.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function (e) {
                E(this).addClass(t.call(this, e, vt(this)))
            }) : (e = mt(t)).length ? this.each(function () {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        }, removeClass: function (t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function (e) {
                E(this).removeClass(t.call(this, e, vt(this)))
            }) : arguments.length ? (e = mt(t)).length ? this.each(function () {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        }, toggleClass: function (t, n) {
            var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t);
            return m(t) ? this.each(function (e) {
                E(this).toggleClass(t.call(this, e, vt(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t), this.each(function () {
                if (s) for (o = E(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r); else void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
            }))
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    E.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : yt(E.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (t = E(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = E.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function () {
        E.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, v.checkOn || (E.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/, wt = function (e) {
        e.stopPropagation()
    };
    E.extend(E.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || S], d = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e : new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || S) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), E.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (e, t, n) {
            var r = E.extend(new E.Event, n, {type: e, isSimulated: !0});
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                E.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), v.focusin || E.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        var i = function (e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location, Ct = {guid: Date.now()}, St = /\?/;
    E.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
        }
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function (e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Et = /\[\]$/, kt = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) E.each(e, function (e, t) {
            r || Et.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) jt(n + "[" + t + "]", e[t], r, i)
    }

    E.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, E.fn.extend({
        serialize: function () {
            return E.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
                    return {name: t.name, value: e.replace(kt, "\r\n")}
                }) : {name: t.name, value: n.replace(kt, "\r\n")}
            }).get()
        }
    });
    var Dt = /%20/g, qt = /#.*$/, Lt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//, Rt = {}, Mt = {}, It = "*/".concat("*"), Wt = S.createElement("a");

    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function $t(t, i, o, a) {
        var s = {}, u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, E.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Bt(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e
    }

    Wt.href = Tt.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, E.ajaxSettings), t) : Bt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, y = E.ajaxSetup({}, t), v = y.context || y,
                m = y.context && (v.nodeType || v.jquery) ? E(v) : E.event, x = E.Deferred(),
                b = E.Callbacks("once memory"), w = y.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (y.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) {
                r = S.createElement("a");
                try {
                    r.href = y.url, r.href = r.href, y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    y.crossDomain = !0
                }
            }
            if (y.data && y.processData && "string" != typeof y.data && (y.data = E.param(y.data, y.traditional)), $t(Rt, y, t, T), h) return T;
            for (i in (g = E.event && y.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ot.test(y.type), f = y.url.replace(qt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (St.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Lt, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), y.url = f + o), y.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);
            if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
            if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = $t(Mt, y, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
                y.async && 0 < y.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, y.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(y, T, n)), !i && -1 < E.inArray("script", y.dataTypes) && E.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function () {
                }), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --E.active || E.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function (e, i) {
        E[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), E._evalUrl = function (e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                E.globalEval(e, t, n)
            }
        })
    }, E.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = E(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function (e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, E.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {
        }
    };
    var _t = {0: 200, 1223: 204}, zt = E.ajaxSettings.xhr();
    v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, E.ajaxTransport(function (i) {
        var o, a;
        if (v.cors || zt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            }, abort: function () {
                o && o()
            }
        }
    }), E.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), E.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = E("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), S.head.appendChild(r[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Xt.pop() || E.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o,
            a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || E.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? E(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = ((Ut = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), E.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(r)) : t = S), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
        var r, i, o
    }, E.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, E.expr.pseudos.animated = function (t) {
        return E.grep(E.timers, function (e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"), c = E(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === E.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), E.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function (e) {
            return B(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function (e, n) {
        E.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
            if (t) return t = Be(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({Height: "height", Width: "width"}, function (a, s) {
        E.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
            E.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        E.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), E.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        E.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    E.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, i
    }, E.holdReady = function (e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = m, E.isWindow = x, E.camelCase = X, E.type = w, E.now = Date.now, E.isNumeric = function (e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, E.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return E
    });
    var Yt = C.jQuery, Qt = C.$;
    return E.noConflict = function (e) {
        return C.$ === E && (C.$ = Qt), e && C.jQuery === E && (C.jQuery = Yt), E
    }, "undefined" == typeof e && (C.jQuery = C.$ = E), E
});
;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
(function () {
    var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
    window.drupalSettings = {};
    if (settingsElement !== null) {
        window.drupalSettings = JSON.parse(settingsElement.textContent);
    }
})();
;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
window.Drupal = {
    behaviors: {},
    locale: {}
};
(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
    Drupal.throwError = function (error) {
        setTimeout(function () {
            throw error;
        }, 0);
    };
    Drupal.attachBehaviors = function (context, settings) {
        context = context || document;
        settings = settings || drupalSettings;
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function (i) {
            if (typeof behaviors[i].attach === 'function') {
                try {
                    behaviors[i].attach(context, settings);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    };
    Drupal.detachBehaviors = function (context, settings, trigger) {
        context = context || document;
        settings = settings || drupalSettings;
        trigger = trigger || 'unload';
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function (i) {
            if (typeof behaviors[i].detach === 'function') {
                try {
                    behaviors[i].detach(context, settings, trigger);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    };
    Drupal.checkPlain = function (str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return str;
    };
    Drupal.formatString = function (str, args) {
        var processedArgs = {};
        Object.keys(args || {}).forEach(function (key) {
            switch (key.charAt(0)) {
                case '@':
                    processedArgs[key] = Drupal.checkPlain(args[key]);
                    break;
                case '!':
                    processedArgs[key] = args[key];
                    break;
                default:
                    processedArgs[key] = Drupal.theme('placeholder', args[key]);
                    break;
            }
        });
        return Drupal.stringReplace(str, processedArgs, null);
    };
    Drupal.stringReplace = function (str, args, keys) {
        if (str.length === 0) {
            return str;
        }
        if (!Array.isArray(keys)) {
            keys = Object.keys(args || {});
            keys.sort(function (a, b) {
                return a.length - b.length;
            });
        }
        if (keys.length === 0) {
            return str;
        }
        var key = keys.pop();
        var fragments = str.split(key);
        if (keys.length) {
            for (var i = 0; i < fragments.length; i++) {
                fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
            }
        }
        return fragments.join(args[key]);
    };
    Drupal.t = function (str, args, options) {
        options = options || {};
        options.context = options.context || '';
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
            str = drupalTranslations.strings[options.context][str];
        }
        if (args) {
            str = Drupal.formatString(str, args);
        }
        return str;
    };
    Drupal.url = function (path) {
        return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
    };
    Drupal.url.toAbsolute = function (url) {
        var urlParsingNode = document.createElement('a');
        try {
            url = decodeURIComponent(url);
        } catch (e) {
        }
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href;
    };
    Drupal.url.isLocal = function (url) {
        var absoluteUrl = Drupal.url.toAbsolute(url);
        var protocol = window.location.protocol;
        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
            protocol = 'https:';
        }
        var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));
        try {
            absoluteUrl = decodeURIComponent(absoluteUrl);
        } catch (e) {
        }
        try {
            baseUrl = decodeURIComponent(baseUrl);
        } catch (e) {
        }
        return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
    };
    Drupal.formatPlural = function (count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        var pluralDelimiter = drupalSettings.pluralDelimiter;
        var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
        var index = 0;
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
            index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
        } else if (args['@count'] !== 1) {
            index = 1;
        }
        return translations[index];
    };
    Drupal.encodePath = function (item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/');
    };
    Drupal.deprecationError = function (_ref) {
        var message = _ref.message;
        if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
            console.warn("[Deprecation] ".concat(message));
        }
    };
    Drupal.deprecatedProperty = function (_ref2) {
        var target = _ref2.target,
            deprecatedProperty = _ref2.deprecatedProperty,
            message = _ref2.message;
        if (!Proxy || !Reflect) {
            return target;
        }
        return new Proxy(target, {
            get: function get(target, key) {
                if (key === deprecatedProperty) {
                    Drupal.deprecationError({
                        message: message
                    });
                }
                for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    rest[_key - 2] = arguments[_key];
                }
                return Reflect.get.apply(Reflect, [target, key].concat(rest));
            }
        });
    };
    Drupal.theme = function (func) {
        if (func in Drupal.theme) {
            var _Drupal$theme;
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }
            return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
        }
    };
    Drupal.theme.placeholder = function (str) {
        return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
    };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);
;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
if (window.jQuery) {
    jQuery.noConflict();
}
document.documentElement.className += ' js';
(function (Drupal, drupalSettings) {
    var domReady = function domReady(callback) {
        var listener = function listener() {
            callback();
            document.removeEventListener('DOMContentLoaded', listener);
        };
        if (document.readyState !== 'loading') {
            setTimeout(callback, 0);
        } else {
            document.addEventListener('DOMContentLoaded', listener);
        }
    };
    domReady(function () {
        Drupal.attachBehaviors(document, drupalSettings);
    });
})(Drupal, window.drupalSettings);
;
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Vue = t()
}(this, function () {
    "use strict";
    var e = Object.freeze({});

    function t(e) {
        return null == e
    }

    function n(e) {
        return null != e
    }

    function r(e) {
        return !0 === e
    }

    function i(e) {
        return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
    }

    function o(e) {
        return null !== e && "object" == typeof e
    }

    var a = Object.prototype.toString;

    function s(e) {
        return "[object Object]" === a.call(e)
    }

    function c(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e)
    }

    function u(e) {
        return n(e) && "function" == typeof e.then && "function" == typeof e.catch
    }

    function l(e) {
        return null == e ? "" : Array.isArray(e) || s(e) && e.toString === a ? JSON.stringify(e, null, 2) : String(e)
    }

    function f(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    }

    function p(e, t) {
        for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
        return t ? function (e) {
            return n[e.toLowerCase()]
        } : function (e) {
            return n[e]
        }
    }

    var d = p("slot,component", !0), v = p("key,ref,slot,slot-scope,is");

    function h(e, t) {
        if (e.length) {
            var n = e.indexOf(t);
            if (n > -1) return e.splice(n, 1)
        }
    }

    var m = Object.prototype.hasOwnProperty;

    function y(e, t) {
        return m.call(e, t)
    }

    function g(e) {
        var t = Object.create(null);
        return function (n) {
            return t[n] || (t[n] = e(n))
        }
    }

    var _ = /-(\w)/g, b = g(function (e) {
        return e.replace(_, function (e, t) {
            return t ? t.toUpperCase() : ""
        })
    }), $ = g(function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }), w = /\B([A-Z])/g, C = g(function (e) {
        return e.replace(w, "-$1").toLowerCase()
    });
    var x = Function.prototype.bind ? function (e, t) {
        return e.bind(t)
    } : function (e, t) {
        function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
        }

        return n._length = e.length, n
    };

    function k(e, t) {
        t = t || 0;
        for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
        return r
    }

    function A(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function O(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && A(t, e[n]);
        return t
    }

    function S(e, t, n) {
    }

    var T = function (e, t, n) {
        return !1
    }, N = function (e) {
        return e
    };

    function E(e, t) {
        if (e === t) return !0;
        var n = o(e), r = o(t);
        if (!n || !r) return !n && !r && String(e) === String(t);
        try {
            var i = Array.isArray(e), a = Array.isArray(t);
            if (i && a) return e.length === t.length && e.every(function (e, n) {
                return E(e, t[n])
            });
            if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
            if (i || a) return !1;
            var s = Object.keys(e), c = Object.keys(t);
            return s.length === c.length && s.every(function (n) {
                return E(e[n], t[n])
            })
        } catch (e) {
            return !1
        }
    }

    function j(e, t) {
        for (var n = 0; n < e.length; n++) if (E(e[n], t)) return n;
        return -1
    }

    function D(e) {
        var t = !1;
        return function () {
            t || (t = !0, e.apply(this, arguments))
        }
    }

    var L = "data-server-rendered", I = ["component", "directive", "filter"],
        M = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
        F = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: T,
            isReservedAttr: T,
            isUnknownElement: T,
            getTagNamespace: S,
            parsePlatformTagName: N,
            mustUseProp: T,
            async: !0,
            _lifecycleHooks: M
        },
        P = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    function R(e, t, n, r) {
        Object.defineProperty(e, t, {value: n, enumerable: !!r, writable: !0, configurable: !0})
    }

    var H = new RegExp("[^" + P.source + ".$_\\d]");
    var B, U = "__proto__" in {}, V = "undefined" != typeof window,
        z = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        K = z && WXEnvironment.platform.toLowerCase(), J = V && window.navigator.userAgent.toLowerCase(),
        q = J && /msie|trident/.test(J), W = J && J.indexOf("msie 9.0") > 0, Z = J && J.indexOf("edge/") > 0,
        G = (J && J.indexOf("android"), J && /iphone|ipad|ipod|ios/.test(J) || "ios" === K),
        X = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)), Y = {}.watch,
        Q = !1;
    if (V) try {
        var ee = {};
        Object.defineProperty(ee, "passive", {
            get: function () {
                Q = !0
            }
        }), window.addEventListener("test-passive", null, ee)
    } catch (e) {
    }
    var te = function () {
        return void 0 === B && (B = !V && !z && "undefined" != typeof global && (global.process && "server" === global.process.env.VUE_ENV)), B
    }, ne = V && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    function re(e) {
        return "function" == typeof e && /native code/.test(e.toString())
    }

    var ie, oe = "undefined" != typeof Symbol && re(Symbol) && "undefined" != typeof Reflect && re(Reflect.ownKeys);
    ie = "undefined" != typeof Set && re(Set) ? Set : function () {
        function e() {
            this.set = Object.create(null)
        }

        return e.prototype.has = function (e) {
            return !0 === this.set[e]
        }, e.prototype.add = function (e) {
            this.set[e] = !0
        }, e.prototype.clear = function () {
            this.set = Object.create(null)
        }, e
    }();
    var ae = S, se = 0, ce = function () {
        this.id = se++, this.subs = []
    };
    ce.prototype.addSub = function (e) {
        this.subs.push(e)
    }, ce.prototype.removeSub = function (e) {
        h(this.subs, e)
    }, ce.prototype.depend = function () {
        ce.target && ce.target.addDep(this)
    }, ce.prototype.notify = function () {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
    }, ce.target = null;
    var ue = [];

    function le(e) {
        ue.push(e), ce.target = e
    }

    function fe() {
        ue.pop(), ce.target = ue[ue.length - 1]
    }

    var pe = function (e, t, n, r, i, o, a, s) {
        this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
    }, de = {child: {configurable: !0}};
    de.child.get = function () {
        return this.componentInstance
    }, Object.defineProperties(pe.prototype, de);
    var ve = function (e) {
        void 0 === e && (e = "");
        var t = new pe;
        return t.text = e, t.isComment = !0, t
    };

    function he(e) {
        return new pe(void 0, void 0, void 0, String(e))
    }

    function me(e) {
        var t = new pe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
    }

    var ye = Array.prototype, ge = Object.create(ye);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
        var t = ye[e];
        R(ge, e, function () {
            for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
            var i, o = t.apply(this, n), a = this.__ob__;
            switch (e) {
                case"push":
                case"unshift":
                    i = n;
                    break;
                case"splice":
                    i = n.slice(2)
            }
            return i && a.observeArray(i), a.dep.notify(), o
        })
    });
    var _e = Object.getOwnPropertyNames(ge), be = !0;

    function $e(e) {
        be = e
    }

    var we = function (e) {
        var t;
        this.value = e, this.dep = new ce, this.vmCount = 0, R(e, "__ob__", this), Array.isArray(e) ? (U ? (t = ge, e.__proto__ = t) : function (e, t, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var o = n[r];
                R(e, o, t[o])
            }
        }(e, ge, _e), this.observeArray(e)) : this.walk(e)
    };

    function Ce(e, t) {
        var n;
        if (o(e) && !(e instanceof pe)) return y(e, "__ob__") && e.__ob__ instanceof we ? n = e.__ob__ : be && !te() && (Array.isArray(e) || s(e)) && Object.isExtensible(e) && !e._isVue && (n = new we(e)), t && n && n.vmCount++, n
    }

    function xe(e, t, n, r, i) {
        var o = new ce, a = Object.getOwnPropertyDescriptor(e, t);
        if (!a || !1 !== a.configurable) {
            var s = a && a.get, c = a && a.set;
            s && !c || 2 !== arguments.length || (n = e[t]);
            var u = !i && Ce(n);
            Object.defineProperty(e, t, {
                enumerable: !0, configurable: !0, get: function () {
                    var t = s ? s.call(e) : n;
                    return ce.target && (o.depend(), u && (u.dep.depend(), Array.isArray(t) && function e(t) {
                        for (var n = void 0, r = 0, i = t.length; r < i; r++) (n = t[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && e(n)
                    }(t))), t
                }, set: function (t) {
                    var r = s ? s.call(e) : n;
                    t === r || t != t && r != r || s && !c || (c ? c.call(e, t) : n = t, u = !i && Ce(t), o.notify())
                }
            })
        }
    }

    function ke(e, t, n) {
        if (Array.isArray(e) && c(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
        if (t in e && !(t in Object.prototype)) return e[t] = n, n;
        var r = e.__ob__;
        return e._isVue || r && r.vmCount ? n : r ? (xe(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
    }

    function Ae(e, t) {
        if (Array.isArray(e) && c(t)) e.splice(t, 1); else {
            var n = e.__ob__;
            e._isVue || n && n.vmCount || y(e, t) && (delete e[t], n && n.dep.notify())
        }
    }

    we.prototype.walk = function (e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) xe(e, t[n])
    }, we.prototype.observeArray = function (e) {
        for (var t = 0, n = e.length; t < n; t++) Ce(e[t])
    };
    var Oe = F.optionMergeStrategies;

    function Se(e, t) {
        if (!t) return e;
        for (var n, r, i, o = oe ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < o.length; a++) "__ob__" !== (n = o[a]) && (r = e[n], i = t[n], y(e, n) ? r !== i && s(r) && s(i) && Se(r, i) : ke(e, n, i));
        return e
    }

    function Te(e, t, n) {
        return n ? function () {
            var r = "function" == typeof t ? t.call(n, n) : t, i = "function" == typeof e ? e.call(n, n) : e;
            return r ? Se(r, i) : i
        } : t ? e ? function () {
            return Se("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
        } : t : e
    }

    function Ne(e, t) {
        var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
        return n ? function (e) {
            for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(n) : n
    }

    function Ee(e, t, n, r) {
        var i = Object.create(e || null);
        return t ? A(i, t) : i
    }

    Oe.data = function (e, t, n) {
        return n ? Te(e, t, n) : t && "function" != typeof t ? e : Te(e, t)
    }, M.forEach(function (e) {
        Oe[e] = Ne
    }), I.forEach(function (e) {
        Oe[e + "s"] = Ee
    }), Oe.watch = function (e, t, n, r) {
        if (e === Y && (e = void 0), t === Y && (t = void 0), !t) return Object.create(e || null);
        if (!e) return t;
        var i = {};
        for (var o in A(i, e), t) {
            var a = i[o], s = t[o];
            a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
        }
        return i
    }, Oe.props = Oe.methods = Oe.inject = Oe.computed = function (e, t, n, r) {
        if (!e) return t;
        var i = Object.create(null);
        return A(i, e), t && A(i, t), i
    }, Oe.provide = Te;
    var je = function (e, t) {
        return void 0 === t ? e : t
    };

    function De(e, t, n) {
        if ("function" == typeof t && (t = t.options), function (e, t) {
            var n = e.props;
            if (n) {
                var r, i, o = {};
                if (Array.isArray(n)) for (r = n.length; r--;) "string" == typeof (i = n[r]) && (o[b(i)] = {type: null}); else if (s(n)) for (var a in n) i = n[a], o[b(a)] = s(i) ? i : {type: i};
                e.props = o
            }
        }(t), function (e, t) {
            var n = e.inject;
            if (n) {
                var r = e.inject = {};
                if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r[n[i]] = {from: n[i]}; else if (s(n)) for (var o in n) {
                    var a = n[o];
                    r[o] = s(a) ? A({from: o}, a) : {from: a}
                }
            }
        }(t), function (e) {
            var t = e.directives;
            if (t) for (var n in t) {
                var r = t[n];
                "function" == typeof r && (t[n] = {bind: r, update: r})
            }
        }(t), !t._base && (t.extends && (e = De(e, t.extends, n)), t.mixins)) for (var r = 0, i = t.mixins.length; r < i; r++) e = De(e, t.mixins[r], n);
        var o, a = {};
        for (o in e) c(o);
        for (o in t) y(e, o) || c(o);

        function c(r) {
            var i = Oe[r] || je;
            a[r] = i(e[r], t[r], n, r)
        }

        return a
    }

    function Le(e, t, n, r) {
        if ("string" == typeof n) {
            var i = e[t];
            if (y(i, n)) return i[n];
            var o = b(n);
            if (y(i, o)) return i[o];
            var a = $(o);
            return y(i, a) ? i[a] : i[n] || i[o] || i[a]
        }
    }

    function Ie(e, t, n, r) {
        var i = t[e], o = !y(n, e), a = n[e], s = Re(Boolean, i.type);
        if (s > -1) if (o && !y(i, "default")) a = !1; else if ("" === a || a === C(e)) {
            var c = Re(String, i.type);
            (c < 0 || s < c) && (a = !0)
        }
        if (void 0 === a) {
            a = function (e, t, n) {
                if (!y(t, "default")) return;
                var r = t.default;
                if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
                return "function" == typeof r && "Function" !== Fe(t.type) ? r.call(e) : r
            }(r, i, e);
            var u = be;
            $e(!0), Ce(a), $e(u)
        }
        return a
    }

    var Me = /^\s*function (\w+)/;

    function Fe(e) {
        var t = e && e.toString().match(Me);
        return t ? t[1] : ""
    }

    function Pe(e, t) {
        return Fe(e) === Fe(t)
    }

    function Re(e, t) {
        if (!Array.isArray(t)) return Pe(t, e) ? 0 : -1;
        for (var n = 0, r = t.length; n < r; n++) if (Pe(t[n], e)) return n;
        return -1
    }

    function He(e, t, n) {
        le();
        try {
            if (t) for (var r = t; r = r.$parent;) {
                var i = r.$options.errorCaptured;
                if (i) for (var o = 0; o < i.length; o++) try {
                    if (!1 === i[o].call(r, e, t, n)) return
                } catch (e) {
                    Ue(e, r, "errorCaptured hook")
                }
            }
            Ue(e, t, n)
        } finally {
            fe()
        }
    }

    function Be(e, t, n, r, i) {
        var o;
        try {
            (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && u(o) && !o._handled && (o.catch(function (e) {
                return He(e, r, i + " (Promise/async)")
            }), o._handled = !0)
        } catch (e) {
            He(e, r, i)
        }
        return o
    }

    function Ue(e, t, n) {
        if (F.errorHandler) try {
            return F.errorHandler.call(null, e, t, n)
        } catch (t) {
            t !== e && Ve(t, null, "config.errorHandler")
        }
        Ve(e, t, n)
    }

    function Ve(e, t, n) {
        if (!V && !z || "undefined" == typeof console) throw e;
        console.error(e)
    }

    var ze, Ke = !1, Je = [], qe = !1;

    function We() {
        qe = !1;
        var e = Je.slice(0);
        Je.length = 0;
        for (var t = 0; t < e.length; t++) e[t]()
    }

    if ("undefined" != typeof Promise && re(Promise)) {
        var Ze = Promise.resolve();
        ze = function () {
            Ze.then(We), G && setTimeout(S)
        }, Ke = !0
    } else if (q || "undefined" == typeof MutationObserver || !re(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ze = "undefined" != typeof setImmediate && re(setImmediate) ? function () {
        setImmediate(We)
    } : function () {
        setTimeout(We, 0)
    }; else {
        var Ge = 1, Xe = new MutationObserver(We), Ye = document.createTextNode(String(Ge));
        Xe.observe(Ye, {characterData: !0}), ze = function () {
            Ge = (Ge + 1) % 2, Ye.data = String(Ge)
        }, Ke = !0
    }

    function Qe(e, t) {
        var n;
        if (Je.push(function () {
            if (e) try {
                e.call(t)
            } catch (e) {
                He(e, t, "nextTick")
            } else n && n(t)
        }), qe || (qe = !0, ze()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
            n = e
        })
    }

    var et = new ie;

    function tt(e) {
        !function e(t, n) {
            var r, i;
            var a = Array.isArray(t);
            if (!a && !o(t) || Object.isFrozen(t) || t instanceof pe) return;
            if (t.__ob__) {
                var s = t.__ob__.dep.id;
                if (n.has(s)) return;
                n.add(s)
            }
            if (a) for (r = t.length; r--;) e(t[r], n); else for (i = Object.keys(t), r = i.length; r--;) e(t[i[r]], n)
        }(e, et), et.clear()
    }

    var nt = g(function (e) {
        var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0),
            r = "!" === (e = n ? e.slice(1) : e).charAt(0);
        return {name: e = r ? e.slice(1) : e, once: n, capture: r, passive: t}
    });

    function rt(e, t) {
        function n() {
            var e = arguments, r = n.fns;
            if (!Array.isArray(r)) return Be(r, null, arguments, t, "v-on handler");
            for (var i = r.slice(), o = 0; o < i.length; o++) Be(i[o], null, e, t, "v-on handler")
        }

        return n.fns = e, n
    }

    function it(e, n, i, o, a, s) {
        var c, u, l, f;
        for (c in e) u = e[c], l = n[c], f = nt(c), t(u) || (t(l) ? (t(u.fns) && (u = e[c] = rt(u, s)), r(f.once) && (u = e[c] = a(f.name, u, f.capture)), i(f.name, u, f.capture, f.passive, f.params)) : u !== l && (l.fns = u, e[c] = l));
        for (c in n) t(e[c]) && o((f = nt(c)).name, n[c], f.capture)
    }

    function ot(e, i, o) {
        var a;
        e instanceof pe && (e = e.data.hook || (e.data.hook = {}));
        var s = e[i];

        function c() {
            o.apply(this, arguments), h(a.fns, c)
        }

        t(s) ? a = rt([c]) : n(s.fns) && r(s.merged) ? (a = s).fns.push(c) : a = rt([s, c]), a.merged = !0, e[i] = a
    }

    function at(e, t, r, i, o) {
        if (n(t)) {
            if (y(t, r)) return e[r] = t[r], o || delete t[r], !0;
            if (y(t, i)) return e[r] = t[i], o || delete t[i], !0
        }
        return !1
    }

    function st(e) {
        return i(e) ? [he(e)] : Array.isArray(e) ? function e(o, a) {
            var s = [];
            var c, u, l, f;
            for (c = 0; c < o.length; c++) t(u = o[c]) || "boolean" == typeof u || (l = s.length - 1, f = s[l], Array.isArray(u) ? u.length > 0 && (ct((u = e(u, (a || "") + "_" + c))[0]) && ct(f) && (s[l] = he(f.text + u[0].text), u.shift()), s.push.apply(s, u)) : i(u) ? ct(f) ? s[l] = he(f.text + u) : "" !== u && s.push(he(u)) : ct(u) && ct(f) ? s[l] = he(f.text + u.text) : (r(o._isVList) && n(u.tag) && t(u.key) && n(a) && (u.key = "__vlist" + a + "_" + c + "__"), s.push(u)));
            return s
        }(e) : void 0
    }

    function ct(e) {
        return n(e) && n(e.text) && !1 === e.isComment
    }

    function ut(e, t) {
        if (e) {
            for (var n = Object.create(null), r = oe ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
                var o = r[i];
                if ("__ob__" !== o) {
                    for (var a = e[o].from, s = t; s;) {
                        if (s._provided && y(s._provided, a)) {
                            n[o] = s._provided[a];
                            break
                        }
                        s = s.$parent
                    }
                    if (!s && "default" in e[o]) {
                        var c = e[o].default;
                        n[o] = "function" == typeof c ? c.call(t) : c
                    }
                }
            }
            return n
        }
    }

    function lt(e, t) {
        if (!e || !e.length) return {};
        for (var n = {}, r = 0, i = e.length; r < i; r++) {
            var o = e[r], a = o.data;
            if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== t && o.fnContext !== t || !a || null == a.slot) (n.default || (n.default = [])).push(o); else {
                var s = a.slot, c = n[s] || (n[s] = []);
                "template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o)
            }
        }
        for (var u in n) n[u].every(ft) && delete n[u];
        return n
    }

    function ft(e) {
        return e.isComment && !e.asyncFactory || " " === e.text
    }

    function pt(e) {
        return e.isComment && e.asyncFactory
    }

    function dt(t, n, r) {
        var i, o = Object.keys(n).length > 0, a = t ? !!t.$stable : !o, s = t && t.$key;
        if (t) {
            if (t._normalized) return t._normalized;
            if (a && r && r !== e && s === r.$key && !o && !r.$hasNormal) return r;
            for (var c in i = {}, t) t[c] && "$" !== c[0] && (i[c] = vt(n, c, t[c]))
        } else i = {};
        for (var u in n) u in i || (i[u] = ht(n, u));
        return t && Object.isExtensible(t) && (t._normalized = i), R(i, "$stable", a), R(i, "$key", s), R(i, "$hasNormal", o), i
    }

    function vt(e, t, n) {
        var r = function () {
            var e = arguments.length ? n.apply(null, arguments) : n({}),
                t = (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : st(e)) && e[0];
            return e && (!t || 1 === e.length && t.isComment && !pt(t)) ? void 0 : e
        };
        return n.proxy && Object.defineProperty(e, t, {get: r, enumerable: !0, configurable: !0}), r
    }

    function ht(e, t) {
        return function () {
            return e[t]
        }
    }

    function mt(e, t) {
        var r, i, a, s, c;
        if (Array.isArray(e) || "string" == typeof e) for (r = new Array(e.length), i = 0, a = e.length; i < a; i++) r[i] = t(e[i], i); else if ("number" == typeof e) for (r = new Array(e), i = 0; i < e; i++) r[i] = t(i + 1, i); else if (o(e)) if (oe && e[Symbol.iterator]) {
            r = [];
            for (var u = e[Symbol.iterator](), l = u.next(); !l.done;) r.push(t(l.value, r.length)), l = u.next()
        } else for (s = Object.keys(e), r = new Array(s.length), i = 0, a = s.length; i < a; i++) c = s[i], r[i] = t(e[c], c, i);
        return n(r) || (r = []), r._isVList = !0, r
    }

    function yt(e, t, n, r) {
        var i, o = this.$scopedSlots[e];
        o ? (n = n || {}, r && (n = A(A({}, r), n)), i = o(n) || ("function" == typeof t ? t() : t)) : i = this.$slots[e] || ("function" == typeof t ? t() : t);
        var a = n && n.slot;
        return a ? this.$createElement("template", {slot: a}, i) : i
    }

    function gt(e) {
        return Le(this.$options, "filters", e) || N
    }

    function _t(e, t) {
        return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
    }

    function bt(e, t, n, r, i) {
        var o = F.keyCodes[t] || n;
        return i && r && !F.keyCodes[t] ? _t(i, r) : o ? _t(o, e) : r ? C(r) !== t : void 0 === e
    }

    function $t(e, t, n, r, i) {
        if (n) if (o(n)) {
            var a;
            Array.isArray(n) && (n = O(n));
            var s = function (o) {
                if ("class" === o || "style" === o || v(o)) a = e; else {
                    var s = e.attrs && e.attrs.type;
                    a = r || F.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                }
                var c = b(o), u = C(o);
                c in a || u in a || (a[o] = n[o], i && ((e.on || (e.on = {}))["update:" + o] = function (e) {
                    n[o] = e
                }))
            };
            for (var c in n) s(c)
        } else ;
        return e
    }

    function wt(e, t) {
        var n = this._staticTrees || (this._staticTrees = []), r = n[e];
        return r && !t ? r : (xt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r)
    }

    function Ct(e, t, n) {
        return xt(e, "__once__" + t + (n ? "_" + n : ""), !0), e
    }

    function xt(e, t, n) {
        if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && kt(e[r], t + "_" + r, n); else kt(e, t, n)
    }

    function kt(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n
    }

    function At(e, t) {
        if (t) if (s(t)) {
            var n = e.on = e.on ? A({}, e.on) : {};
            for (var r in t) {
                var i = n[r], o = t[r];
                n[r] = i ? [].concat(i, o) : o
            }
        } else ;
        return e
    }

    function Ot(e, t, n, r) {
        t = t || {$stable: !n};
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            Array.isArray(o) ? Ot(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn)
        }
        return r && (t.$key = r), t
    }

    function St(e, t) {
        for (var n = 0; n < t.length; n += 2) {
            var r = t[n];
            "string" == typeof r && r && (e[t[n]] = t[n + 1])
        }
        return e
    }

    function Tt(e, t) {
        return "string" == typeof e ? t + e : e
    }

    function Nt(e) {
        e._o = Ct, e._n = f, e._s = l, e._l = mt, e._t = yt, e._q = E, e._i = j, e._m = wt, e._f = gt, e._k = bt, e._b = $t, e._v = he, e._e = ve, e._u = Ot, e._g = At, e._d = St, e._p = Tt
    }

    function Et(t, n, i, o, a) {
        var s, c = this, u = a.options;
        y(o, "_uid") ? (s = Object.create(o))._original = o : (s = o, o = o._original);
        var l = r(u._compiled), f = !l;
        this.data = t, this.props = n, this.children = i, this.parent = o, this.listeners = t.on || e, this.injections = ut(u.inject, o), this.slots = function () {
            return c.$slots || dt(t.scopedSlots, c.$slots = lt(i, o)), c.$slots
        }, Object.defineProperty(this, "scopedSlots", {
            enumerable: !0, get: function () {
                return dt(t.scopedSlots, this.slots())
            }
        }), l && (this.$options = u, this.$slots = this.slots(), this.$scopedSlots = dt(t.scopedSlots, this.$slots)), u._scopeId ? this._c = function (e, t, n, r) {
            var i = Ht(s, e, t, n, r, f);
            return i && !Array.isArray(i) && (i.fnScopeId = u._scopeId, i.fnContext = o), i
        } : this._c = function (e, t, n, r) {
            return Ht(s, e, t, n, r, f)
        }
    }

    function jt(e, t, n, r, i) {
        var o = me(e);
        return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o
    }

    function Dt(e, t) {
        for (var n in t) e[b(n)] = t[n]
    }

    Nt(Et.prototype);
    var Lt = {
        init: function (e, t) {
            if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                var r = e;
                Lt.prepatch(r, r)
            } else {
                (e.componentInstance = function (e, t) {
                    var r = {_isComponent: !0, _parentVnode: e, parent: t}, i = e.data.inlineTemplate;
                    n(i) && (r.render = i.render, r.staticRenderFns = i.staticRenderFns);
                    return new e.componentOptions.Ctor(r)
                }(e, Zt)).$mount(t ? e.elm : void 0, t)
            }
        }, prepatch: function (t, n) {
            var r = n.componentOptions;
            !function (t, n, r, i, o) {
                var a = i.data.scopedSlots, s = t.$scopedSlots,
                    c = !!(a && !a.$stable || s !== e && !s.$stable || a && t.$scopedSlots.$key !== a.$key || !a && t.$scopedSlots.$key),
                    u = !!(o || t.$options._renderChildren || c);
                t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i);
                if (t.$options._renderChildren = o, t.$attrs = i.data.attrs || e, t.$listeners = r || e, n && t.$options.props) {
                    $e(!1);
                    for (var l = t._props, f = t.$options._propKeys || [], p = 0; p < f.length; p++) {
                        var d = f[p], v = t.$options.props;
                        l[d] = Ie(d, v, n, t)
                    }
                    $e(!0), t.$options.propsData = n
                }
                r = r || e;
                var h = t.$options._parentListeners;
                t.$options._parentListeners = r, Wt(t, r, h), u && (t.$slots = lt(o, i.context), t.$forceUpdate())
            }(n.componentInstance = t.componentInstance, r.propsData, r.listeners, n, r.children)
        }, insert: function (e) {
            var t, n = e.context, r = e.componentInstance;
            r._isMounted || (r._isMounted = !0, Qt(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, tn.push(t)) : Yt(r, !0))
        }, destroy: function (e) {
            var t = e.componentInstance;
            t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                if (n && (t._directInactive = !0, Xt(t))) return;
                if (!t._inactive) {
                    t._inactive = !0;
                    for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
                    Qt(t, "deactivated")
                }
            }(t, !0) : t.$destroy())
        }
    }, It = Object.keys(Lt);

    function Mt(i, a, s, c, l) {
        if (!t(i)) {
            var f = s.$options._base;
            if (o(i) && (i = f.extend(i)), "function" == typeof i) {
                var p;
                if (t(i.cid) && void 0 === (i = function (e, i) {
                    if (r(e.error) && n(e.errorComp)) return e.errorComp;
                    if (n(e.resolved)) return e.resolved;
                    var a = Ut;
                    a && n(e.owners) && -1 === e.owners.indexOf(a) && e.owners.push(a);
                    if (r(e.loading) && n(e.loadingComp)) return e.loadingComp;
                    if (a && !n(e.owners)) {
                        var s = e.owners = [a], c = !0, l = null, f = null;
                        a.$on("hook:destroyed", function () {
                            return h(s, a)
                        });
                        var p = function (e) {
                            for (var t = 0, n = s.length; t < n; t++) s[t].$forceUpdate();
                            e && (s.length = 0, null !== l && (clearTimeout(l), l = null), null !== f && (clearTimeout(f), f = null))
                        }, d = D(function (t) {
                            e.resolved = Vt(t, i), c ? s.length = 0 : p(!0)
                        }), v = D(function (t) {
                            n(e.errorComp) && (e.error = !0, p(!0))
                        }), m = e(d, v);
                        return o(m) && (u(m) ? t(e.resolved) && m.then(d, v) : u(m.component) && (m.component.then(d, v), n(m.error) && (e.errorComp = Vt(m.error, i)), n(m.loading) && (e.loadingComp = Vt(m.loading, i), 0 === m.delay ? e.loading = !0 : l = setTimeout(function () {
                            l = null, t(e.resolved) && t(e.error) && (e.loading = !0, p(!1))
                        }, m.delay || 200)), n(m.timeout) && (f = setTimeout(function () {
                            f = null, t(e.resolved) && v(null)
                        }, m.timeout)))), c = !1, e.loading ? e.loadingComp : e.resolved
                    }
                }(p = i, f))) return function (e, t, n, r, i) {
                    var o = ve();
                    return o.asyncFactory = e, o.asyncMeta = {data: t, context: n, children: r, tag: i}, o
                }(p, a, s, c, l);
                a = a || {}, wn(i), n(a.model) && function (e, t) {
                    var r = e.model && e.model.prop || "value", i = e.model && e.model.event || "input";
                    (t.attrs || (t.attrs = {}))[r] = t.model.value;
                    var o = t.on || (t.on = {}), a = o[i], s = t.model.callback;
                    n(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[i] = [s].concat(a)) : o[i] = s
                }(i.options, a);
                var d = function (e, r, i) {
                    var o = r.options.props;
                    if (!t(o)) {
                        var a = {}, s = e.attrs, c = e.props;
                        if (n(s) || n(c)) for (var u in o) {
                            var l = C(u);
                            at(a, c, u, l, !0) || at(a, s, u, l, !1)
                        }
                        return a
                    }
                }(a, i);
                if (r(i.options.functional)) return function (t, r, i, o, a) {
                    var s = t.options, c = {}, u = s.props;
                    if (n(u)) for (var l in u) c[l] = Ie(l, u, r || e); else n(i.attrs) && Dt(c, i.attrs), n(i.props) && Dt(c, i.props);
                    var f = new Et(i, c, a, o, t), p = s.render.call(null, f._c, f);
                    if (p instanceof pe) return jt(p, i, f.parent, s);
                    if (Array.isArray(p)) {
                        for (var d = st(p) || [], v = new Array(d.length), h = 0; h < d.length; h++) v[h] = jt(d[h], i, f.parent, s);
                        return v
                    }
                }(i, d, a, s, c);
                var v = a.on;
                if (a.on = a.nativeOn, r(i.options.abstract)) {
                    var m = a.slot;
                    a = {}, m && (a.slot = m)
                }
                !function (e) {
                    for (var t = e.hook || (e.hook = {}), n = 0; n < It.length; n++) {
                        var r = It[n], i = t[r], o = Lt[r];
                        i === o || i && i._merged || (t[r] = i ? Ft(o, i) : o)
                    }
                }(a);
                var y = i.options.name || l;
                return new pe("vue-component-" + i.cid + (y ? "-" + y : ""), a, void 0, void 0, void 0, s, {
                    Ctor: i,
                    propsData: d,
                    listeners: v,
                    tag: l,
                    children: c
                }, p)
            }
        }
    }

    function Ft(e, t) {
        var n = function (n, r) {
            e(n, r), t(n, r)
        };
        return n._merged = !0, n
    }

    var Pt = 1, Rt = 2;

    function Ht(e, a, s, c, u, l) {
        return (Array.isArray(s) || i(s)) && (u = c, c = s, s = void 0), r(l) && (u = Rt), function (e, i, a, s, c) {
            if (n(a) && n(a.__ob__)) return ve();
            n(a) && n(a.is) && (i = a.is);
            if (!i) return ve();
            Array.isArray(s) && "function" == typeof s[0] && ((a = a || {}).scopedSlots = {default: s[0]}, s.length = 0);
            c === Rt ? s = st(s) : c === Pt && (s = function (e) {
                for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                return e
            }(s));
            var u, l;
            if ("string" == typeof i) {
                var f;
                l = e.$vnode && e.$vnode.ns || F.getTagNamespace(i), u = F.isReservedTag(i) ? new pe(F.parsePlatformTagName(i), a, s, void 0, void 0, e) : a && a.pre || !n(f = Le(e.$options, "components", i)) ? new pe(i, a, s, void 0, void 0, e) : Mt(f, a, e, s, i)
            } else u = Mt(i, a, e, s);
            return Array.isArray(u) ? u : n(u) ? (n(l) && function e(i, o, a) {
                i.ns = o;
                "foreignObject" === i.tag && (o = void 0, a = !0);
                if (n(i.children)) for (var s = 0, c = i.children.length; s < c; s++) {
                    var u = i.children[s];
                    n(u.tag) && (t(u.ns) || r(a) && "svg" !== u.tag) && e(u, o, a)
                }
            }(u, l), n(a) && function (e) {
                o(e.style) && tt(e.style);
                o(e.class) && tt(e.class)
            }(a), u) : ve()
        }(e, a, s, c, u)
    }

    var Bt, Ut = null;

    function Vt(e, t) {
        return (e.__esModule || oe && "Module" === e[Symbol.toStringTag]) && (e = e.default), o(e) ? t.extend(e) : e
    }

    function zt(e) {
        if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
            var r = e[t];
            if (n(r) && (n(r.componentOptions) || pt(r))) return r
        }
    }

    function Kt(e, t) {
        Bt.$on(e, t)
    }

    function Jt(e, t) {
        Bt.$off(e, t)
    }

    function qt(e, t) {
        var n = Bt;
        return function r() {
            null !== t.apply(null, arguments) && n.$off(e, r)
        }
    }

    function Wt(e, t, n) {
        Bt = e, it(t, n || {}, Kt, Jt, qt, e), Bt = void 0
    }

    var Zt = null;

    function Gt(e) {
        var t = Zt;
        return Zt = e, function () {
            Zt = t
        }
    }

    function Xt(e) {
        for (; e && (e = e.$parent);) if (e._inactive) return !0;
        return !1
    }

    function Yt(e, t) {
        if (t) {
            if (e._directInactive = !1, Xt(e)) return
        } else if (e._directInactive) return;
        if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) Yt(e.$children[n]);
            Qt(e, "activated")
        }
    }

    function Qt(e, t) {
        le();
        var n = e.$options[t], r = t + " hook";
        if (n) for (var i = 0, o = n.length; i < o; i++) Be(n[i], e, null, e, r);
        e._hasHookEvent && e.$emit("hook:" + t), fe()
    }

    var en = [], tn = [], nn = {}, rn = !1, on = !1, an = 0;
    var sn = 0, cn = Date.now;
    if (V && !q) {
        var un = window.performance;
        un && "function" == typeof un.now && cn() > document.createEvent("Event").timeStamp && (cn = function () {
            return un.now()
        })
    }

    function ln() {
        var e, t;
        for (sn = cn(), on = !0, en.sort(function (e, t) {
            return e.id - t.id
        }), an = 0; an < en.length; an++) (e = en[an]).before && e.before(), t = e.id, nn[t] = null, e.run();
        var n = tn.slice(), r = en.slice();
        an = en.length = tn.length = 0, nn = {}, rn = on = !1, function (e) {
            for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Yt(e[t], !0)
        }(n), function (e) {
            var t = e.length;
            for (; t--;) {
                var n = e[t], r = n.vm;
                r._watcher === n && r._isMounted && !r._isDestroyed && Qt(r, "updated")
            }
        }(r), ne && F.devtools && ne.emit("flush")
    }

    var fn = 0, pn = function (e, t, n, r, i) {
        this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++fn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ie, this.newDepIds = new ie, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
            if (!H.test(e)) {
                var t = e.split(".");
                return function (e) {
                    for (var n = 0; n < t.length; n++) {
                        if (!e) return;
                        e = e[t[n]]
                    }
                    return e
                }
            }
        }(t), this.getter || (this.getter = S)), this.value = this.lazy ? void 0 : this.get()
    };
    pn.prototype.get = function () {
        var e;
        le(this);
        var t = this.vm;
        try {
            e = this.getter.call(t, t)
        } catch (e) {
            if (!this.user) throw e;
            He(e, t, 'getter for watcher "' + this.expression + '"')
        } finally {
            this.deep && tt(e), fe(), this.cleanupDeps()
        }
        return e
    }, pn.prototype.addDep = function (e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
    }, pn.prototype.cleanupDeps = function () {
        for (var e = this.deps.length; e--;) {
            var t = this.deps[e];
            this.newDepIds.has(t.id) || t.removeSub(this)
        }
        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
    }, pn.prototype.update = function () {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
            var t = e.id;
            if (null == nn[t]) {
                if (nn[t] = !0, on) {
                    for (var n = en.length - 1; n > an && en[n].id > e.id;) n--;
                    en.splice(n + 1, 0, e)
                } else en.push(e);
                rn || (rn = !0, Qe(ln))
            }
        }(this)
    }, pn.prototype.run = function () {
        if (this.active) {
            var e = this.get();
            if (e !== this.value || o(e) || this.deep) {
                var t = this.value;
                if (this.value = e, this.user) {
                    var n = 'callback for watcher "' + this.expression + '"';
                    Be(this.cb, this.vm, [e, t], this.vm, n)
                } else this.cb.call(this.vm, e, t)
            }
        }
    }, pn.prototype.evaluate = function () {
        this.value = this.get(), this.dirty = !1
    }, pn.prototype.depend = function () {
        for (var e = this.deps.length; e--;) this.deps[e].depend()
    }, pn.prototype.teardown = function () {
        if (this.active) {
            this.vm._isBeingDestroyed || h(this.vm._watchers, this);
            for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
            this.active = !1
        }
    };
    var dn = {enumerable: !0, configurable: !0, get: S, set: S};

    function vn(e, t, n) {
        dn.get = function () {
            return this[t][n]
        }, dn.set = function (e) {
            this[t][n] = e
        }, Object.defineProperty(e, n, dn)
    }

    function hn(e) {
        e._watchers = [];
        var t = e.$options;
        t.props && function (e, t) {
            var n = e.$options.propsData || {}, r = e._props = {}, i = e.$options._propKeys = [];
            e.$parent && $e(!1);
            var o = function (o) {
                i.push(o);
                var a = Ie(o, t, n, e);
                xe(r, o, a), o in e || vn(e, "_props", o)
            };
            for (var a in t) o(a);
            $e(!0)
        }(e, t.props), t.methods && function (e, t) {
            e.$options.props;
            for (var n in t) e[n] = "function" != typeof t[n] ? S : x(t[n], e)
        }(e, t.methods), t.data ? function (e) {
            var t = e.$options.data;
            s(t = e._data = "function" == typeof t ? function (e, t) {
                le();
                try {
                    return e.call(t, t)
                } catch (e) {
                    return He(e, t, "data()"), {}
                } finally {
                    fe()
                }
            }(t, e) : t || {}) || (t = {});
            var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length);
            for (; i--;) {
                var o = n[i];
                r && y(r, o) || (a = void 0, 36 !== (a = (o + "").charCodeAt(0)) && 95 !== a && vn(e, "_data", o))
            }
            var a;
            Ce(t, !0)
        }(e) : Ce(e._data = {}, !0), t.computed && function (e, t) {
            var n = e._computedWatchers = Object.create(null), r = te();
            for (var i in t) {
                var o = t[i], a = "function" == typeof o ? o : o.get;
                r || (n[i] = new pn(e, a || S, S, mn)), i in e || yn(e, i, o)
            }
        }(e, t.computed), t.watch && t.watch !== Y && function (e, t) {
            for (var n in t) {
                var r = t[n];
                if (Array.isArray(r)) for (var i = 0; i < r.length; i++) bn(e, n, r[i]); else bn(e, n, r)
            }
        }(e, t.watch)
    }

    var mn = {lazy: !0};

    function yn(e, t, n) {
        var r = !te();
        "function" == typeof n ? (dn.get = r ? gn(t) : _n(n), dn.set = S) : (dn.get = n.get ? r && !1 !== n.cache ? gn(t) : _n(n.get) : S, dn.set = n.set || S), Object.defineProperty(e, t, dn)
    }

    function gn(e) {
        return function () {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), ce.target && t.depend(), t.value
        }
    }

    function _n(e) {
        return function () {
            return e.call(this, this)
        }
    }

    function bn(e, t, n, r) {
        return s(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
    }

    var $n = 0;

    function wn(e) {
        var t = e.options;
        if (e.super) {
            var n = wn(e.super);
            if (n !== e.superOptions) {
                e.superOptions = n;
                var r = function (e) {
                    var t, n = e.options, r = e.sealedOptions;
                    for (var i in n) n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
                    return t
                }(e);
                r && A(e.extendOptions, r), (t = e.options = De(n, e.extendOptions)).name && (t.components[t.name] = e)
            }
        }
        return t
    }

    function Cn(e) {
        this._init(e)
    }

    function xn(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function (e) {
            e = e || {};
            var n = this, r = n.cid, i = e._Ctor || (e._Ctor = {});
            if (i[r]) return i[r];
            var o = e.name || n.options.name, a = function (e) {
                this._init(e)
            };
            return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = De(n.options, e), a.super = n, a.options.props && function (e) {
                var t = e.options.props;
                for (var n in t) vn(e.prototype, "_props", n)
            }(a), a.options.computed && function (e) {
                var t = e.options.computed;
                for (var n in t) yn(e.prototype, n, t[n])
            }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, I.forEach(function (e) {
                a[e] = n[e]
            }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = A({}, a.options), i[r] = a, a
        }
    }

    function kn(e) {
        return e && (e.Ctor.options.name || e.tag)
    }

    function An(e, t) {
        return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, "[object RegExp]" === a.call(n) && e.test(t));
        var n
    }

    function On(e, t) {
        var n = e.cache, r = e.keys, i = e._vnode;
        for (var o in n) {
            var a = n[o];
            if (a) {
                var s = a.name;
                s && !t(s) && Sn(n, o, r, i)
            }
        }
    }

    function Sn(e, t, n, r) {
        var i = e[t];
        !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, h(n, t)
    }

    !function (t) {
        t.prototype._init = function (t) {
            var n = this;
            n._uid = $n++, n._isVue = !0, t && t._isComponent ? function (e, t) {
                var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
                n.parent = t.parent, n._parentVnode = r;
                var i = r.componentOptions;
                n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
            }(n, t) : n.$options = De(wn(n.constructor), t || {}, n), n._renderProxy = n, n._self = n, function (e) {
                var t = e.$options, n = t.parent;
                if (n && !t.abstract) {
                    for (; n.$options.abstract && n.$parent;) n = n.$parent;
                    n.$children.push(e)
                }
                e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
            }(n), function (e) {
                e._events = Object.create(null), e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && Wt(e, t)
            }(n), function (t) {
                t._vnode = null, t._staticTrees = null;
                var n = t.$options, r = t.$vnode = n._parentVnode, i = r && r.context;
                t.$slots = lt(n._renderChildren, i), t.$scopedSlots = e, t._c = function (e, n, r, i) {
                    return Ht(t, e, n, r, i, !1)
                }, t.$createElement = function (e, n, r, i) {
                    return Ht(t, e, n, r, i, !0)
                };
                var o = r && r.data;
                xe(t, "$attrs", o && o.attrs || e, null, !0), xe(t, "$listeners", n._parentListeners || e, null, !0)
            }(n), Qt(n, "beforeCreate"), function (e) {
                var t = ut(e.$options.inject, e);
                t && ($e(!1), Object.keys(t).forEach(function (n) {
                    xe(e, n, t[n])
                }), $e(!0))
            }(n), hn(n), function (e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t)
            }(n), Qt(n, "created"), n.$options.el && n.$mount(n.$options.el)
        }
    }(Cn), function (e) {
        var t = {
            get: function () {
                return this._data
            }
        }, n = {
            get: function () {
                return this._props
            }
        };
        Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = ke, e.prototype.$delete = Ae, e.prototype.$watch = function (e, t, n) {
            if (s(t)) return bn(this, e, t, n);
            (n = n || {}).user = !0;
            var r = new pn(this, e, t, n);
            if (n.immediate) {
                var i = 'callback for immediate watcher "' + r.expression + '"';
                le(), Be(t, this, [r.value], this, i), fe()
            }
            return function () {
                r.teardown()
            }
        }
    }(Cn), function (e) {
        var t = /^hook:/;
        e.prototype.$on = function (e, n) {
            var r = this;
            if (Array.isArray(e)) for (var i = 0, o = e.length; i < o; i++) r.$on(e[i], n); else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
            return r
        }, e.prototype.$once = function (e, t) {
            var n = this;

            function r() {
                n.$off(e, r), t.apply(n, arguments)
            }

            return r.fn = t, n.$on(e, r), n
        }, e.prototype.$off = function (e, t) {
            var n = this;
            if (!arguments.length) return n._events = Object.create(null), n;
            if (Array.isArray(e)) {
                for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
                return n
            }
            var o, a = n._events[e];
            if (!a) return n;
            if (!t) return n._events[e] = null, n;
            for (var s = a.length; s--;) if ((o = a[s]) === t || o.fn === t) {
                a.splice(s, 1);
                break
            }
            return n
        }, e.prototype.$emit = function (e) {
            var t = this._events[e];
            if (t) {
                t = t.length > 1 ? k(t) : t;
                for (var n = k(arguments, 1), r = 'event handler for "' + e + '"', i = 0, o = t.length; i < o; i++) Be(t[i], this, n, this, r)
            }
            return this
        }
    }(Cn), function (e) {
        e.prototype._update = function (e, t) {
            var n = this, r = n.$el, i = n._vnode, o = Gt(n);
            n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
        }, e.prototype.$forceUpdate = function () {
            this._watcher && this._watcher.update()
        }, e.prototype.$destroy = function () {
            var e = this;
            if (!e._isBeingDestroyed) {
                Qt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                var t = e.$parent;
                !t || t._isBeingDestroyed || e.$options.abstract || h(t.$children, e), e._watcher && e._watcher.teardown();
                for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Qt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
            }
        }
    }(Cn), function (e) {
        Nt(e.prototype), e.prototype.$nextTick = function (e) {
            return Qe(e, this)
        }, e.prototype._render = function () {
            var e, t = this, n = t.$options, r = n.render, i = n._parentVnode;
            i && (t.$scopedSlots = dt(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;
            try {
                Ut = t, e = r.call(t._renderProxy, t.$createElement)
            } catch (n) {
                He(n, t, "render"), e = t._vnode
            } finally {
                Ut = null
            }
            return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof pe || (e = ve()), e.parent = i, e
        }
    }(Cn);
    var Tn = [String, RegExp, Array], Nn = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {include: Tn, exclude: Tn, max: [String, Number]},
            methods: {
                cacheVNode: function () {
                    var e = this.cache, t = this.keys, n = this.vnodeToCache, r = this.keyToCache;
                    if (n) {
                        var i = n.tag, o = n.componentInstance, a = n.componentOptions;
                        e[r] = {
                            name: kn(a),
                            tag: i,
                            componentInstance: o
                        }, t.push(r), this.max && t.length > parseInt(this.max) && Sn(e, t[0], t, this._vnode), this.vnodeToCache = null
                    }
                }
            },
            created: function () {
                this.cache = Object.create(null), this.keys = []
            },
            destroyed: function () {
                for (var e in this.cache) Sn(this.cache, e, this.keys)
            },
            mounted: function () {
                var e = this;
                this.cacheVNode(), this.$watch("include", function (t) {
                    On(e, function (e) {
                        return An(t, e)
                    })
                }), this.$watch("exclude", function (t) {
                    On(e, function (e) {
                        return !An(t, e)
                    })
                })
            },
            updated: function () {
                this.cacheVNode()
            },
            render: function () {
                var e = this.$slots.default, t = zt(e), n = t && t.componentOptions;
                if (n) {
                    var r = kn(n), i = this.include, o = this.exclude;
                    if (i && (!r || !An(i, r)) || o && r && An(o, r)) return t;
                    var a = this.cache, s = this.keys,
                        c = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                    a[c] ? (t.componentInstance = a[c].componentInstance, h(s, c), s.push(c)) : (this.vnodeToCache = t, this.keyToCache = c), t.data.keepAlive = !0
                }
                return t || e && e[0]
            }
        }
    };
    !function (e) {
        var t = {
            get: function () {
                return F
            }
        };
        Object.defineProperty(e, "config", t), e.util = {
            warn: ae,
            extend: A,
            mergeOptions: De,
            defineReactive: xe
        }, e.set = ke, e.delete = Ae, e.nextTick = Qe, e.observable = function (e) {
            return Ce(e), e
        }, e.options = Object.create(null), I.forEach(function (t) {
            e.options[t + "s"] = Object.create(null)
        }), e.options._base = e, A(e.options.components, Nn), function (e) {
            e.use = function (e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1) return this;
                var n = k(arguments, 1);
                return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
            }
        }(e), function (e) {
            e.mixin = function (e) {
                return this.options = De(this.options, e), this
            }
        }(e), xn(e), function (e) {
            I.forEach(function (t) {
                e[t] = function (e, n) {
                    return n ? ("component" === t && s(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                }
            })
        }(e)
    }(Cn), Object.defineProperty(Cn.prototype, "$isServer", {get: te}), Object.defineProperty(Cn.prototype, "$ssrContext", {
        get: function () {
            return this.$vnode && this.$vnode.ssrContext
        }
    }), Object.defineProperty(Cn, "FunctionalRenderContext", {value: Et}), Cn.version = "2.6.14";
    var En = p("style,class"), jn = p("input,textarea,option,select,progress"), Dn = function (e, t, n) {
            return "value" === n && jn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        }, Ln = p("contenteditable,draggable,spellcheck"), In = p("events,caret,typing,plaintext-only"),
        Mn = function (e, t) {
            return Bn(t) || "false" === t ? "false" : "contenteditable" === e && In(t) ? t : "true"
        },
        Fn = p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),
        Pn = "http://www.w3.org/1999/xlink", Rn = function (e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
        }, Hn = function (e) {
            return Rn(e) ? e.slice(6, e.length) : ""
        }, Bn = function (e) {
            return null == e || !1 === e
        };

    function Un(e) {
        for (var t = e.data, r = e, i = e; n(i.componentInstance);) (i = i.componentInstance._vnode) && i.data && (t = Vn(i.data, t));
        for (; n(r = r.parent);) r && r.data && (t = Vn(t, r.data));
        return function (e, t) {
            if (n(e) || n(t)) return zn(e, Kn(t));
            return ""
        }(t.staticClass, t.class)
    }

    function Vn(e, t) {
        return {staticClass: zn(e.staticClass, t.staticClass), class: n(e.class) ? [e.class, t.class] : t.class}
    }

    function zn(e, t) {
        return e ? t ? e + " " + t : e : t || ""
    }

    function Kn(e) {
        return Array.isArray(e) ? function (e) {
            for (var t, r = "", i = 0, o = e.length; i < o; i++) n(t = Kn(e[i])) && "" !== t && (r && (r += " "), r += t);
            return r
        }(e) : o(e) ? function (e) {
            var t = "";
            for (var n in e) e[n] && (t && (t += " "), t += n);
            return t
        }(e) : "string" == typeof e ? e : ""
    }

    var Jn = {svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML"},
        qn = p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        Wn = p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        Zn = function (e) {
            return qn(e) || Wn(e)
        };

    function Gn(e) {
        return Wn(e) ? "svg" : "math" === e ? "math" : void 0
    }

    var Xn = Object.create(null);
    var Yn = p("text,number,password,search,email,tel,url");

    function Qn(e) {
        if ("string" == typeof e) {
            var t = document.querySelector(e);
            return t || document.createElement("div")
        }
        return e
    }

    var er = Object.freeze({
        createElement: function (e, t) {
            var n = document.createElement(e);
            return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
        }, createElementNS: function (e, t) {
            return document.createElementNS(Jn[e], t)
        }, createTextNode: function (e) {
            return document.createTextNode(e)
        }, createComment: function (e) {
            return document.createComment(e)
        }, insertBefore: function (e, t, n) {
            e.insertBefore(t, n)
        }, removeChild: function (e, t) {
            e.removeChild(t)
        }, appendChild: function (e, t) {
            e.appendChild(t)
        }, parentNode: function (e) {
            return e.parentNode
        }, nextSibling: function (e) {
            return e.nextSibling
        }, tagName: function (e) {
            return e.tagName
        }, setTextContent: function (e, t) {
            e.textContent = t
        }, setStyleScope: function (e, t) {
            e.setAttribute(t, "")
        }
    }), tr = {
        create: function (e, t) {
            nr(t)
        }, update: function (e, t) {
            e.data.ref !== t.data.ref && (nr(e, !0), nr(t))
        }, destroy: function (e) {
            nr(e, !0)
        }
    };

    function nr(e, t) {
        var r = e.data.ref;
        if (n(r)) {
            var i = e.context, o = e.componentInstance || e.elm, a = i.$refs;
            t ? Array.isArray(a[r]) ? h(a[r], o) : a[r] === o && (a[r] = void 0) : e.data.refInFor ? Array.isArray(a[r]) ? a[r].indexOf(o) < 0 && a[r].push(o) : a[r] = [o] : a[r] = o
        }
    }

    var rr = new pe("", {}, []), ir = ["create", "activate", "update", "remove", "destroy"];

    function or(e, i) {
        return e.key === i.key && e.asyncFactory === i.asyncFactory && (e.tag === i.tag && e.isComment === i.isComment && n(e.data) === n(i.data) && function (e, t) {
            if ("input" !== e.tag) return !0;
            var r, i = n(r = e.data) && n(r = r.attrs) && r.type, o = n(r = t.data) && n(r = r.attrs) && r.type;
            return i === o || Yn(i) && Yn(o)
        }(e, i) || r(e.isAsyncPlaceholder) && t(i.asyncFactory.error))
    }

    function ar(e, t, r) {
        var i, o, a = {};
        for (i = t; i <= r; ++i) n(o = e[i].key) && (a[o] = i);
        return a
    }

    var sr = {
        create: cr, update: cr, destroy: function (e) {
            cr(e, rr)
        }
    };

    function cr(e, t) {
        (e.data.directives || t.data.directives) && function (e, t) {
            var n, r, i, o = e === rr, a = t === rr, s = lr(e.data.directives, e.context),
                c = lr(t.data.directives, t.context), u = [], l = [];
            for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, pr(i, "update", t, e), i.def && i.def.componentUpdated && l.push(i)) : (pr(i, "bind", t, e), i.def && i.def.inserted && u.push(i));
            if (u.length) {
                var f = function () {
                    for (var n = 0; n < u.length; n++) pr(u[n], "inserted", t, e)
                };
                o ? ot(t, "insert", f) : f()
            }
            l.length && ot(t, "postpatch", function () {
                for (var n = 0; n < l.length; n++) pr(l[n], "componentUpdated", t, e)
            });
            if (!o) for (n in s) c[n] || pr(s[n], "unbind", e, e, a)
        }(e, t)
    }

    var ur = Object.create(null);

    function lr(e, t) {
        var n, r, i = Object.create(null);
        if (!e) return i;
        for (n = 0; n < e.length; n++) (r = e[n]).modifiers || (r.modifiers = ur), i[fr(r)] = r, r.def = Le(t.$options, "directives", r.name);
        return i
    }

    function fr(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
    }

    function pr(e, t, n, r, i) {
        var o = e.def && e.def[t];
        if (o) try {
            o(n.elm, e, n, r, i)
        } catch (r) {
            He(r, n.context, "directive " + e.name + " " + t + " hook")
        }
    }

    var dr = [tr, sr];

    function vr(e, r) {
        var i = r.componentOptions;
        if (!(n(i) && !1 === i.Ctor.options.inheritAttrs || t(e.data.attrs) && t(r.data.attrs))) {
            var o, a, s = r.elm, c = e.data.attrs || {}, u = r.data.attrs || {};
            for (o in n(u.__ob__) && (u = r.data.attrs = A({}, u)), u) a = u[o], c[o] !== a && hr(s, o, a, r.data.pre);
            for (o in (q || Z) && u.value !== c.value && hr(s, "value", u.value), c) t(u[o]) && (Rn(o) ? s.removeAttributeNS(Pn, Hn(o)) : Ln(o) || s.removeAttribute(o))
        }
    }

    function hr(e, t, n, r) {
        r || e.tagName.indexOf("-") > -1 ? mr(e, t, n) : Fn(t) ? Bn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Ln(t) ? e.setAttribute(t, Mn(t, n)) : Rn(t) ? Bn(n) ? e.removeAttributeNS(Pn, Hn(t)) : e.setAttributeNS(Pn, t, n) : mr(e, t, n)
    }

    function mr(e, t, n) {
        if (Bn(n)) e.removeAttribute(t); else {
            if (q && !W && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                var r = function (t) {
                    t.stopImmediatePropagation(), e.removeEventListener("input", r)
                };
                e.addEventListener("input", r), e.__ieph = !0
            }
            e.setAttribute(t, n)
        }
    }

    var yr = {create: vr, update: vr};

    function gr(e, r) {
        var i = r.elm, o = r.data, a = e.data;
        if (!(t(o.staticClass) && t(o.class) && (t(a) || t(a.staticClass) && t(a.class)))) {
            var s = Un(r), c = i._transitionClasses;
            n(c) && (s = zn(s, Kn(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s)
        }
    }

    var _r, br, $r, wr, Cr, xr, kr = {create: gr, update: gr}, Ar = /[\w).+\-_$\]]/;

    function Or(e) {
        var t, n, r, i, o, a = !1, s = !1, c = !1, u = !1, l = 0, f = 0, p = 0, d = 0;
        for (r = 0; r < e.length; r++) if (n = t, t = e.charCodeAt(r), a) 39 === t && 92 !== n && (a = !1); else if (s) 34 === t && 92 !== n && (s = !1); else if (c) 96 === t && 92 !== n && (c = !1); else if (u) 47 === t && 92 !== n && (u = !1); else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || l || f || p) {
            switch (t) {
                case 34:
                    s = !0;
                    break;
                case 39:
                    a = !0;
                    break;
                case 96:
                    c = !0;
                    break;
                case 40:
                    p++;
                    break;
                case 41:
                    p--;
                    break;
                case 91:
                    f++;
                    break;
                case 93:
                    f--;
                    break;
                case 123:
                    l++;
                    break;
                case 125:
                    l--
            }
            if (47 === t) {
                for (var v = r - 1, h = void 0; v >= 0 && " " === (h = e.charAt(v)); v--) ;
                h && Ar.test(h) || (u = !0)
            }
        } else void 0 === i ? (d = r + 1, i = e.slice(0, r).trim()) : m();

        function m() {
            (o || (o = [])).push(e.slice(d, r).trim()), d = r + 1
        }

        if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== d && m(), o) for (r = 0; r < o.length; r++) i = Sr(i, o[r]);
        return i
    }

    function Sr(e, t) {
        var n = t.indexOf("(");
        if (n < 0) return '_f("' + t + '")(' + e + ")";
        var r = t.slice(0, n), i = t.slice(n + 1);
        return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i)
    }

    function Tr(e, t) {
        console.error("[Vue compiler]: " + e)
    }

    function Nr(e, t) {
        return e ? e.map(function (e) {
            return e[t]
        }).filter(function (e) {
            return e
        }) : []
    }

    function Er(e, t, n, r, i) {
        (e.props || (e.props = [])).push(Hr({name: t, value: n, dynamic: i}, r)), e.plain = !1
    }

    function jr(e, t, n, r, i) {
        (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Hr({
            name: t,
            value: n,
            dynamic: i
        }, r)), e.plain = !1
    }

    function Dr(e, t, n, r) {
        e.attrsMap[t] = n, e.attrsList.push(Hr({name: t, value: n}, r))
    }

    function Lr(e, t, n, r, i, o, a, s) {
        (e.directives || (e.directives = [])).push(Hr({
            name: t,
            rawName: n,
            value: r,
            arg: i,
            isDynamicArg: o,
            modifiers: a
        }, s)), e.plain = !1
    }

    function Ir(e, t, n) {
        return n ? "_p(" + t + ',"' + e + '")' : e + t
    }

    function Mr(t, n, r, i, o, a, s, c) {
        var u;
        (i = i || e).right ? c ? n = "(" + n + ")==='click'?'contextmenu':(" + n + ")" : "click" === n && (n = "contextmenu", delete i.right) : i.middle && (c ? n = "(" + n + ")==='click'?'mouseup':(" + n + ")" : "click" === n && (n = "mouseup")), i.capture && (delete i.capture, n = Ir("!", n, c)), i.once && (delete i.once, n = Ir("~", n, c)), i.passive && (delete i.passive, n = Ir("&", n, c)), i.native ? (delete i.native, u = t.nativeEvents || (t.nativeEvents = {})) : u = t.events || (t.events = {});
        var l = Hr({value: r.trim(), dynamic: c}, s);
        i !== e && (l.modifiers = i);
        var f = u[n];
        Array.isArray(f) ? o ? f.unshift(l) : f.push(l) : u[n] = f ? o ? [l, f] : [f, l] : l, t.plain = !1
    }

    function Fr(e, t, n) {
        var r = Pr(e, ":" + t) || Pr(e, "v-bind:" + t);
        if (null != r) return Or(r);
        if (!1 !== n) {
            var i = Pr(e, t);
            if (null != i) return JSON.stringify(i)
        }
    }

    function Pr(e, t, n) {
        var r;
        if (null != (r = e.attrsMap[t])) for (var i = e.attrsList, o = 0, a = i.length; o < a; o++) if (i[o].name === t) {
            i.splice(o, 1);
            break
        }
        return n && delete e.attrsMap[t], r
    }

    function Rr(e, t) {
        for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            if (t.test(o.name)) return n.splice(r, 1), o
        }
    }

    function Hr(e, t) {
        return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e
    }

    function Br(e, t, n) {
        var r = n || {}, i = r.number, o = "$$v";
        r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
        var a = Ur(t, o);
        e.model = {value: "(" + t + ")", expression: JSON.stringify(t), callback: "function ($$v) {" + a + "}"}
    }

    function Ur(e, t) {
        var n = function (e) {
            if (e = e.trim(), _r = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < _r - 1) return (wr = e.lastIndexOf(".")) > -1 ? {
                exp: e.slice(0, wr),
                key: '"' + e.slice(wr + 1) + '"'
            } : {exp: e, key: null};
            br = e, wr = Cr = xr = 0;
            for (; !zr();) Kr($r = Vr()) ? qr($r) : 91 === $r && Jr($r);
            return {exp: e.slice(0, Cr), key: e.slice(Cr + 1, xr)}
        }(e);
        return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
    }

    function Vr() {
        return br.charCodeAt(++wr)
    }

    function zr() {
        return wr >= _r
    }

    function Kr(e) {
        return 34 === e || 39 === e
    }

    function Jr(e) {
        var t = 1;
        for (Cr = wr; !zr();) if (Kr(e = Vr())) qr(e); else if (91 === e && t++, 93 === e && t--, 0 === t) {
            xr = wr;
            break
        }
    }

    function qr(e) {
        for (var t = e; !zr() && (e = Vr()) !== t;) ;
    }

    var Wr, Zr = "__r", Gr = "__c";

    function Xr(e, t, n) {
        var r = Wr;
        return function i() {
            null !== t.apply(null, arguments) && ei(e, i, n, r)
        }
    }

    var Yr = Ke && !(X && Number(X[1]) <= 53);

    function Qr(e, t, n, r) {
        if (Yr) {
            var i = sn, o = t;
            t = o._wrapper = function (e) {
                if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments)
            }
        }
        Wr.addEventListener(e, t, Q ? {capture: n, passive: r} : n)
    }

    function ei(e, t, n, r) {
        (r || Wr).removeEventListener(e, t._wrapper || t, n)
    }

    function ti(e, r) {
        if (!t(e.data.on) || !t(r.data.on)) {
            var i = r.data.on || {}, o = e.data.on || {};
            Wr = r.elm, function (e) {
                if (n(e[Zr])) {
                    var t = q ? "change" : "input";
                    e[t] = [].concat(e[Zr], e[t] || []), delete e[Zr]
                }
                n(e[Gr]) && (e.change = [].concat(e[Gr], e.change || []), delete e[Gr])
            }(i), it(i, o, Qr, ei, Xr, r.context), Wr = void 0
        }
    }

    var ni, ri = {create: ti, update: ti};

    function ii(e, r) {
        if (!t(e.data.domProps) || !t(r.data.domProps)) {
            var i, o, a = r.elm, s = e.data.domProps || {}, c = r.data.domProps || {};
            for (i in n(c.__ob__) && (c = r.data.domProps = A({}, c)), s) i in c || (a[i] = "");
            for (i in c) {
                if (o = c[i], "textContent" === i || "innerHTML" === i) {
                    if (r.children && (r.children.length = 0), o === s[i]) continue;
                    1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                }
                if ("value" === i && "PROGRESS" !== a.tagName) {
                    a._value = o;
                    var u = t(o) ? "" : String(o);
                    oi(a, u) && (a.value = u)
                } else if ("innerHTML" === i && Wn(a.tagName) && t(a.innerHTML)) {
                    (ni = ni || document.createElement("div")).innerHTML = "<svg>" + o + "</svg>";
                    for (var l = ni.firstChild; a.firstChild;) a.removeChild(a.firstChild);
                    for (; l.firstChild;) a.appendChild(l.firstChild)
                } else if (o !== s[i]) try {
                    a[i] = o
                } catch (e) {
                }
            }
        }
    }

    function oi(e, t) {
        return !e.composing && ("OPTION" === e.tagName || function (e, t) {
            var n = !0;
            try {
                n = document.activeElement !== e
            } catch (e) {
            }
            return n && e.value !== t
        }(e, t) || function (e, t) {
            var r = e.value, i = e._vModifiers;
            if (n(i)) {
                if (i.number) return f(r) !== f(t);
                if (i.trim) return r.trim() !== t.trim()
            }
            return r !== t
        }(e, t))
    }

    var ai = {create: ii, update: ii}, si = g(function (e) {
        var t = {}, n = /:(.+)/;
        return e.split(/;(?![^(]*\))/g).forEach(function (e) {
            if (e) {
                var r = e.split(n);
                r.length > 1 && (t[r[0].trim()] = r[1].trim())
            }
        }), t
    });

    function ci(e) {
        var t = ui(e.style);
        return e.staticStyle ? A(e.staticStyle, t) : t
    }

    function ui(e) {
        return Array.isArray(e) ? O(e) : "string" == typeof e ? si(e) : e
    }

    var li, fi = /^--/, pi = /\s*!important$/, di = function (e, t, n) {
        if (fi.test(t)) e.style.setProperty(t, n); else if (pi.test(n)) e.style.setProperty(C(t), n.replace(pi, ""), "important"); else {
            var r = hi(t);
            if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) e.style[r] = n[i]; else e.style[r] = n
        }
    }, vi = ["Webkit", "Moz", "ms"], hi = g(function (e) {
        if (li = li || document.createElement("div").style, "filter" !== (e = b(e)) && e in li) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < vi.length; n++) {
            var r = vi[n] + t;
            if (r in li) return r
        }
    });

    function mi(e, r) {
        var i = r.data, o = e.data;
        if (!(t(i.staticStyle) && t(i.style) && t(o.staticStyle) && t(o.style))) {
            var a, s, c = r.elm, u = o.staticStyle, l = o.normalizedStyle || o.style || {}, f = u || l,
                p = ui(r.data.style) || {};
            r.data.normalizedStyle = n(p.__ob__) ? A({}, p) : p;
            var d = function (e, t) {
                var n, r = {};
                if (t) for (var i = e; i.componentInstance;) (i = i.componentInstance._vnode) && i.data && (n = ci(i.data)) && A(r, n);
                (n = ci(e.data)) && A(r, n);
                for (var o = e; o = o.parent;) o.data && (n = ci(o.data)) && A(r, n);
                return r
            }(r, !0);
            for (s in f) t(d[s]) && di(c, s, "");
            for (s in d) (a = d[s]) !== f[s] && di(c, s, null == a ? "" : a)
        }
    }

    var yi = {create: mi, update: mi}, gi = /\s+/;

    function _i(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(gi).forEach(function (t) {
            return e.classList.add(t)
        }) : e.classList.add(t); else {
            var n = " " + (e.getAttribute("class") || "") + " ";
            n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
        }
    }

    function bi(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(gi).forEach(function (t) {
            return e.classList.remove(t)
        }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class"); else {
            for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
            (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class")
        }
    }

    function $i(e) {
        if (e) {
            if ("object" == typeof e) {
                var t = {};
                return !1 !== e.css && A(t, wi(e.name || "v")), A(t, e), t
            }
            return "string" == typeof e ? wi(e) : void 0
        }
    }

    var wi = g(function (e) {
            return {
                enterClass: e + "-enter",
                enterToClass: e + "-enter-to",
                enterActiveClass: e + "-enter-active",
                leaveClass: e + "-leave",
                leaveToClass: e + "-leave-to",
                leaveActiveClass: e + "-leave-active"
            }
        }), Ci = V && !W, xi = "transition", ki = "animation", Ai = "transition", Oi = "transitionend", Si = "animation",
        Ti = "animationend";
    Ci && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ai = "WebkitTransition", Oi = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Si = "WebkitAnimation", Ti = "webkitAnimationEnd"));
    var Ni = V ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
        return e()
    };

    function Ei(e) {
        Ni(function () {
            Ni(e)
        })
    }

    function ji(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t), _i(e, t))
    }

    function Di(e, t) {
        e._transitionClasses && h(e._transitionClasses, t), bi(e, t)
    }

    function Li(e, t, n) {
        var r = Mi(e, t), i = r.type, o = r.timeout, a = r.propCount;
        if (!i) return n();
        var s = i === xi ? Oi : Ti, c = 0, u = function () {
            e.removeEventListener(s, l), n()
        }, l = function (t) {
            t.target === e && ++c >= a && u()
        };
        setTimeout(function () {
            c < a && u()
        }, o + 1), e.addEventListener(s, l)
    }

    var Ii = /\b(transform|all)(,|$)/;

    function Mi(e, t) {
        var n, r = window.getComputedStyle(e), i = (r[Ai + "Delay"] || "").split(", "),
            o = (r[Ai + "Duration"] || "").split(", "), a = Fi(i, o), s = (r[Si + "Delay"] || "").split(", "),
            c = (r[Si + "Duration"] || "").split(", "), u = Fi(s, c), l = 0, f = 0;
        return t === xi ? a > 0 && (n = xi, l = a, f = o.length) : t === ki ? u > 0 && (n = ki, l = u, f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? xi : ki : null) ? n === xi ? o.length : c.length : 0, {
            type: n,
            timeout: l,
            propCount: f,
            hasTransform: n === xi && Ii.test(r[Ai + "Property"])
        }
    }

    function Fi(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max.apply(null, t.map(function (t, n) {
            return Pi(t) + Pi(e[n])
        }))
    }

    function Pi(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."))
    }

    function Ri(e, r) {
        var i = e.elm;
        n(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
        var a = $i(e.data.transition);
        if (!t(a) && !n(i._enterCb) && 1 === i.nodeType) {
            for (var s = a.css, c = a.type, u = a.enterClass, l = a.enterToClass, p = a.enterActiveClass, d = a.appearClass, v = a.appearToClass, h = a.appearActiveClass, m = a.beforeEnter, y = a.enter, g = a.afterEnter, _ = a.enterCancelled, b = a.beforeAppear, $ = a.appear, w = a.afterAppear, C = a.appearCancelled, x = a.duration, k = Zt, A = Zt.$vnode; A && A.parent;) k = A.context, A = A.parent;
            var O = !k._isMounted || !e.isRootInsert;
            if (!O || $ || "" === $) {
                var S = O && d ? d : u, T = O && h ? h : p, N = O && v ? v : l, E = O && b || m,
                    j = O && "function" == typeof $ ? $ : y, L = O && w || g, I = O && C || _,
                    M = f(o(x) ? x.enter : x), F = !1 !== s && !W, P = Ui(j), R = i._enterCb = D(function () {
                        F && (Di(i, N), Di(i, T)), R.cancelled ? (F && Di(i, S), I && I(i)) : L && L(i), i._enterCb = null
                    });
                e.data.show || ot(e, "insert", function () {
                    var t = i.parentNode, n = t && t._pending && t._pending[e.key];
                    n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), j && j(i, R)
                }), E && E(i), F && (ji(i, S), ji(i, T), Ei(function () {
                    Di(i, S), R.cancelled || (ji(i, N), P || (Bi(M) ? setTimeout(R, M) : Li(i, c, R)))
                })), e.data.show && (r && r(), j && j(i, R)), F || P || R()
            }
        }
    }

    function Hi(e, r) {
        var i = e.elm;
        n(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
        var a = $i(e.data.transition);
        if (t(a) || 1 !== i.nodeType) return r();
        if (!n(i._leaveCb)) {
            var s = a.css, c = a.type, u = a.leaveClass, l = a.leaveToClass, p = a.leaveActiveClass, d = a.beforeLeave,
                v = a.leave, h = a.afterLeave, m = a.leaveCancelled, y = a.delayLeave, g = a.duration,
                _ = !1 !== s && !W, b = Ui(v), $ = f(o(g) ? g.leave : g), w = i._leaveCb = D(function () {
                    i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null), _ && (Di(i, l), Di(i, p)), w.cancelled ? (_ && Di(i, u), m && m(i)) : (r(), h && h(i)), i._leaveCb = null
                });
            y ? y(C) : C()
        }

        function C() {
            w.cancelled || (!e.data.show && i.parentNode && ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), d && d(i), _ && (ji(i, u), ji(i, p), Ei(function () {
                Di(i, u), w.cancelled || (ji(i, l), b || (Bi($) ? setTimeout(w, $) : Li(i, c, w)))
            })), v && v(i, w), _ || b || w())
        }
    }

    function Bi(e) {
        return "number" == typeof e && !isNaN(e)
    }

    function Ui(e) {
        if (t(e)) return !1;
        var r = e.fns;
        return n(r) ? Ui(Array.isArray(r) ? r[0] : r) : (e._length || e.length) > 1
    }

    function Vi(e, t) {
        !0 !== t.data.show && Ri(t)
    }

    var zi = function (e) {
        var o, a, s = {}, c = e.modules, u = e.nodeOps;
        for (o = 0; o < ir.length; ++o) for (s[ir[o]] = [], a = 0; a < c.length; ++a) n(c[a][ir[o]]) && s[ir[o]].push(c[a][ir[o]]);

        function l(e) {
            var t = u.parentNode(e);
            n(t) && u.removeChild(t, e)
        }

        function f(e, t, i, o, a, c, l) {
            if (n(e.elm) && n(c) && (e = c[l] = me(e)), e.isRootInsert = !a, !function (e, t, i, o) {
                var a = e.data;
                if (n(a)) {
                    var c = n(e.componentInstance) && a.keepAlive;
                    if (n(a = a.hook) && n(a = a.init) && a(e, !1), n(e.componentInstance)) return d(e, t), v(i, e.elm, o), r(c) && function (e, t, r, i) {
                        for (var o, a = e; a.componentInstance;) if (a = a.componentInstance._vnode, n(o = a.data) && n(o = o.transition)) {
                            for (o = 0; o < s.activate.length; ++o) s.activate[o](rr, a);
                            t.push(a);
                            break
                        }
                        v(r, e.elm, i)
                    }(e, t, i, o), !0
                }
            }(e, t, i, o)) {
                var f = e.data, p = e.children, m = e.tag;
                n(m) ? (e.elm = e.ns ? u.createElementNS(e.ns, m) : u.createElement(m, e), g(e), h(e, p, t), n(f) && y(e, t), v(i, e.elm, o)) : r(e.isComment) ? (e.elm = u.createComment(e.text), v(i, e.elm, o)) : (e.elm = u.createTextNode(e.text), v(i, e.elm, o))
            }
        }

        function d(e, t) {
            n(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, m(e) ? (y(e, t), g(e)) : (nr(e), t.push(e))
        }

        function v(e, t, r) {
            n(e) && (n(r) ? u.parentNode(r) === e && u.insertBefore(e, t, r) : u.appendChild(e, t))
        }

        function h(e, t, n) {
            if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) f(t[r], n, e.elm, null, !0, t, r); else i(e.text) && u.appendChild(e.elm, u.createTextNode(String(e.text)))
        }

        function m(e) {
            for (; e.componentInstance;) e = e.componentInstance._vnode;
            return n(e.tag)
        }

        function y(e, t) {
            for (var r = 0; r < s.create.length; ++r) s.create[r](rr, e);
            n(o = e.data.hook) && (n(o.create) && o.create(rr, e), n(o.insert) && t.push(e))
        }

        function g(e) {
            var t;
            if (n(t = e.fnScopeId)) u.setStyleScope(e.elm, t); else for (var r = e; r;) n(t = r.context) && n(t = t.$options._scopeId) && u.setStyleScope(e.elm, t), r = r.parent;
            n(t = Zt) && t !== e.context && t !== e.fnContext && n(t = t.$options._scopeId) && u.setStyleScope(e.elm, t)
        }

        function _(e, t, n, r, i, o) {
            for (; r <= i; ++r) f(n[r], o, e, t, !1, n, r)
        }

        function b(e) {
            var t, r, i = e.data;
            if (n(i)) for (n(t = i.hook) && n(t = t.destroy) && t(e), t = 0; t < s.destroy.length; ++t) s.destroy[t](e);
            if (n(t = e.children)) for (r = 0; r < e.children.length; ++r) b(e.children[r])
        }

        function $(e, t, r) {
            for (; t <= r; ++t) {
                var i = e[t];
                n(i) && (n(i.tag) ? (w(i), b(i)) : l(i.elm))
            }
        }

        function w(e, t) {
            if (n(t) || n(e.data)) {
                var r, i = s.remove.length + 1;
                for (n(t) ? t.listeners += i : t = function (e, t) {
                    function n() {
                        0 == --n.listeners && l(e)
                    }

                    return n.listeners = t, n
                }(e.elm, i), n(r = e.componentInstance) && n(r = r._vnode) && n(r.data) && w(r, t), r = 0; r < s.remove.length; ++r) s.remove[r](e, t);
                n(r = e.data.hook) && n(r = r.remove) ? r(e, t) : t()
            } else l(e.elm)
        }

        function C(e, t, r, i) {
            for (var o = r; o < i; o++) {
                var a = t[o];
                if (n(a) && or(e, a)) return o
            }
        }

        function x(e, i, o, a, c, l) {
            if (e !== i) {
                n(i.elm) && n(a) && (i = a[c] = me(i));
                var p = i.elm = e.elm;
                if (r(e.isAsyncPlaceholder)) n(i.asyncFactory.resolved) ? O(e.elm, i, o) : i.isAsyncPlaceholder = !0; else if (r(i.isStatic) && r(e.isStatic) && i.key === e.key && (r(i.isCloned) || r(i.isOnce))) i.componentInstance = e.componentInstance; else {
                    var d, v = i.data;
                    n(v) && n(d = v.hook) && n(d = d.prepatch) && d(e, i);
                    var h = e.children, y = i.children;
                    if (n(v) && m(i)) {
                        for (d = 0; d < s.update.length; ++d) s.update[d](e, i);
                        n(d = v.hook) && n(d = d.update) && d(e, i)
                    }
                    t(i.text) ? n(h) && n(y) ? h !== y && function (e, r, i, o, a) {
                        for (var s, c, l, p = 0, d = 0, v = r.length - 1, h = r[0], m = r[v], y = i.length - 1, g = i[0], b = i[y], w = !a; p <= v && d <= y;) t(h) ? h = r[++p] : t(m) ? m = r[--v] : or(h, g) ? (x(h, g, o, i, d), h = r[++p], g = i[++d]) : or(m, b) ? (x(m, b, o, i, y), m = r[--v], b = i[--y]) : or(h, b) ? (x(h, b, o, i, y), w && u.insertBefore(e, h.elm, u.nextSibling(m.elm)), h = r[++p], b = i[--y]) : or(m, g) ? (x(m, g, o, i, d), w && u.insertBefore(e, m.elm, h.elm), m = r[--v], g = i[++d]) : (t(s) && (s = ar(r, p, v)), t(c = n(g.key) ? s[g.key] : C(g, r, p, v)) ? f(g, o, e, h.elm, !1, i, d) : or(l = r[c], g) ? (x(l, g, o, i, d), r[c] = void 0, w && u.insertBefore(e, l.elm, h.elm)) : f(g, o, e, h.elm, !1, i, d), g = i[++d]);
                        p > v ? _(e, t(i[y + 1]) ? null : i[y + 1].elm, i, d, y, o) : d > y && $(r, p, v)
                    }(p, h, y, o, l) : n(y) ? (n(e.text) && u.setTextContent(p, ""), _(p, null, y, 0, y.length - 1, o)) : n(h) ? $(h, 0, h.length - 1) : n(e.text) && u.setTextContent(p, "") : e.text !== i.text && u.setTextContent(p, i.text), n(v) && n(d = v.hook) && n(d = d.postpatch) && d(e, i)
                }
            }
        }

        function k(e, t, i) {
            if (r(i) && n(e.parent)) e.parent.data.pendingInsert = t; else for (var o = 0; o < t.length; ++o) t[o].data.hook.insert(t[o])
        }

        var A = p("attrs,class,staticClass,staticStyle,key");

        function O(e, t, i, o) {
            var a, s = t.tag, c = t.data, u = t.children;
            if (o = o || c && c.pre, t.elm = e, r(t.isComment) && n(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
            if (n(c) && (n(a = c.hook) && n(a = a.init) && a(t, !0), n(a = t.componentInstance))) return d(t, i), !0;
            if (n(s)) {
                if (n(u)) if (e.hasChildNodes()) if (n(a = c) && n(a = a.domProps) && n(a = a.innerHTML)) {
                    if (a !== e.innerHTML) return !1
                } else {
                    for (var l = !0, f = e.firstChild, p = 0; p < u.length; p++) {
                        if (!f || !O(f, u[p], i, o)) {
                            l = !1;
                            break
                        }
                        f = f.nextSibling
                    }
                    if (!l || f) return !1
                } else h(t, u, i);
                if (n(c)) {
                    var v = !1;
                    for (var m in c) if (!A(m)) {
                        v = !0, y(t, i);
                        break
                    }
                    !v && c.class && tt(c.class)
                }
            } else e.data !== t.text && (e.data = t.text);
            return !0
        }

        return function (e, i, o, a) {
            if (!t(i)) {
                var c, l = !1, p = [];
                if (t(e)) l = !0, f(i, p); else {
                    var d = n(e.nodeType);
                    if (!d && or(e, i)) x(e, i, p, null, null, a); else {
                        if (d) {
                            if (1 === e.nodeType && e.hasAttribute(L) && (e.removeAttribute(L), o = !0), r(o) && O(e, i, p)) return k(i, p, !0), e;
                            c = e, e = new pe(u.tagName(c).toLowerCase(), {}, [], void 0, c)
                        }
                        var v = e.elm, h = u.parentNode(v);
                        if (f(i, p, v._leaveCb ? null : h, u.nextSibling(v)), n(i.parent)) for (var y = i.parent, g = m(i); y;) {
                            for (var _ = 0; _ < s.destroy.length; ++_) s.destroy[_](y);
                            if (y.elm = i.elm, g) {
                                for (var w = 0; w < s.create.length; ++w) s.create[w](rr, y);
                                var C = y.data.hook.insert;
                                if (C.merged) for (var A = 1; A < C.fns.length; A++) C.fns[A]()
                            } else nr(y);
                            y = y.parent
                        }
                        n(h) ? $([e], 0, 0) : n(e.tag) && b(e)
                    }
                }
                return k(i, p, l), i.elm
            }
            n(e) && b(e)
        }
    }({
        nodeOps: er, modules: [yr, kr, ri, ai, yi, V ? {
            create: Vi, activate: Vi, remove: function (e, t) {
                !0 !== e.data.show ? Hi(e, t) : t()
            }
        } : {}].concat(dr)
    });
    W && document.addEventListener("selectionchange", function () {
        var e = document.activeElement;
        e && e.vmodel && Yi(e, "input")
    });
    var Ki = {
        inserted: function (e, t, n, r) {
            "select" === n.tag ? (r.elm && !r.elm._vOptions ? ot(n, "postpatch", function () {
                Ki.componentUpdated(e, t, n)
            }) : Ji(e, t, n.context), e._vOptions = [].map.call(e.options, Zi)) : ("textarea" === n.tag || Yn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Gi), e.addEventListener("compositionend", Xi), e.addEventListener("change", Xi), W && (e.vmodel = !0)))
        }, componentUpdated: function (e, t, n) {
            if ("select" === n.tag) {
                Ji(e, t, n.context);
                var r = e._vOptions, i = e._vOptions = [].map.call(e.options, Zi);
                if (i.some(function (e, t) {
                    return !E(e, r[t])
                })) (e.multiple ? t.value.some(function (e) {
                    return Wi(e, i)
                }) : t.value !== t.oldValue && Wi(t.value, i)) && Yi(e, "change")
            }
        }
    };

    function Ji(e, t, n) {
        qi(e, t, n), (q || Z) && setTimeout(function () {
            qi(e, t, n)
        }, 0)
    }

    function qi(e, t, n) {
        var r = t.value, i = e.multiple;
        if (!i || Array.isArray(r)) {
            for (var o, a, s = 0, c = e.options.length; s < c; s++) if (a = e.options[s], i) o = j(r, Zi(a)) > -1, a.selected !== o && (a.selected = o); else if (E(Zi(a), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
            i || (e.selectedIndex = -1)
        }
    }

    function Wi(e, t) {
        return t.every(function (t) {
            return !E(t, e)
        })
    }

    function Zi(e) {
        return "_value" in e ? e._value : e.value
    }

    function Gi(e) {
        e.target.composing = !0
    }

    function Xi(e) {
        e.target.composing && (e.target.composing = !1, Yi(e.target, "input"))
    }

    function Yi(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n)
    }

    function Qi(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : Qi(e.componentInstance._vnode)
    }

    var eo = {
        model: Ki, show: {
            bind: function (e, t, n) {
                var r = t.value, i = (n = Qi(n)).data && n.data.transition,
                    o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                r && i ? (n.data.show = !0, Ri(n, function () {
                    e.style.display = o
                })) : e.style.display = r ? o : "none"
            }, update: function (e, t, n) {
                var r = t.value;
                !r != !t.oldValue && ((n = Qi(n)).data && n.data.transition ? (n.data.show = !0, r ? Ri(n, function () {
                    e.style.display = e.__vOriginalDisplay
                }) : Hi(n, function () {
                    e.style.display = "none"
                })) : e.style.display = r ? e.__vOriginalDisplay : "none")
            }, unbind: function (e, t, n, r, i) {
                i || (e.style.display = e.__vOriginalDisplay)
            }
        }
    }, to = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
    };

    function no(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? no(zt(t.children)) : e
    }

    function ro(e) {
        var t = {}, n = e.$options;
        for (var r in n.propsData) t[r] = e[r];
        var i = n._parentListeners;
        for (var o in i) t[b(o)] = i[o];
        return t
    }

    function io(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {props: t.componentOptions.propsData})
    }

    var oo = function (e) {
        return e.tag || pt(e)
    }, ao = function (e) {
        return "show" === e.name
    }, so = {
        name: "transition", props: to, abstract: !0, render: function (e) {
            var t = this, n = this.$slots.default;
            if (n && (n = n.filter(oo)).length) {
                var r = this.mode, o = n[0];
                if (function (e) {
                    for (; e = e.parent;) if (e.data.transition) return !0
                }(this.$vnode)) return o;
                var a = no(o);
                if (!a) return o;
                if (this._leaving) return io(e, o);
                var s = "__transition-" + this._uid + "-";
                a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : i(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                var c = (a.data || (a.data = {})).transition = ro(this), u = this._vnode, l = no(u);
                if (a.data.directives && a.data.directives.some(ao) && (a.data.show = !0), l && l.data && !function (e, t) {
                    return t.key === e.key && t.tag === e.tag
                }(a, l) && !pt(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                    var f = l.data.transition = A({}, c);
                    if ("out-in" === r) return this._leaving = !0, ot(f, "afterLeave", function () {
                        t._leaving = !1, t.$forceUpdate()
                    }), io(e, o);
                    if ("in-out" === r) {
                        if (pt(a)) return u;
                        var p, d = function () {
                            p()
                        };
                        ot(c, "afterEnter", d), ot(c, "enterCancelled", d), ot(f, "delayLeave", function (e) {
                            p = e
                        })
                    }
                }
                return o
            }
        }
    }, co = A({tag: String, moveClass: String}, to);

    function uo(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
    }

    function lo(e) {
        e.data.newPos = e.elm.getBoundingClientRect()
    }

    function fo(e) {
        var t = e.data.pos, n = e.data.newPos, r = t.left - n.left, i = t.top - n.top;
        if (r || i) {
            e.data.moved = !0;
            var o = e.elm.style;
            o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s"
        }
    }

    delete co.mode;
    var po = {
        Transition: so, TransitionGroup: {
            props: co, beforeMount: function () {
                var e = this, t = this._update;
                this._update = function (n, r) {
                    var i = Gt(e);
                    e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r)
                }
            }, render: function (e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = ro(this), s = 0; s < i.length; s++) {
                    var c = i[s];
                    c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a)
                }
                if (r) {
                    for (var u = [], l = [], f = 0; f < r.length; f++) {
                        var p = r[f];
                        p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : l.push(p)
                    }
                    this.kept = e(t, null, u), this.removed = l
                }
                return e(t, null, o)
            }, updated: function () {
                var e = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
                e.length && this.hasMove(e[0].elm, t) && (e.forEach(uo), e.forEach(lo), e.forEach(fo), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
                    if (e.data.moved) {
                        var n = e.elm, r = n.style;
                        ji(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Oi, n._moveCb = function e(r) {
                            r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Oi, e), n._moveCb = null, Di(n, t))
                        })
                    }
                }))
            }, methods: {
                hasMove: function (e, t) {
                    if (!Ci) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach(function (e) {
                        bi(n, e)
                    }), _i(n, t), n.style.display = "none", this.$el.appendChild(n);
                    var r = Mi(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform
                }
            }
        }
    };
    Cn.config.mustUseProp = Dn, Cn.config.isReservedTag = Zn, Cn.config.isReservedAttr = En, Cn.config.getTagNamespace = Gn, Cn.config.isUnknownElement = function (e) {
        if (!V) return !0;
        if (Zn(e)) return !1;
        if (e = e.toLowerCase(), null != Xn[e]) return Xn[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1 ? Xn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Xn[e] = /HTMLUnknownElement/.test(t.toString())
    }, A(Cn.options.directives, eo), A(Cn.options.components, po), Cn.prototype.__patch__ = V ? zi : S, Cn.prototype.$mount = function (e, t) {
        return function (e, t, n) {
            var r;
            return e.$el = t, e.$options.render || (e.$options.render = ve), Qt(e, "beforeMount"), r = function () {
                e._update(e._render(), n)
            }, new pn(e, r, S, {
                before: function () {
                    e._isMounted && !e._isDestroyed && Qt(e, "beforeUpdate")
                }
            }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, Qt(e, "mounted")), e
        }(this, e = e && V ? Qn(e) : void 0, t)
    }, V && setTimeout(function () {
        F.devtools && ne && ne.emit("init", Cn)
    }, 0);
    var vo = /\{\{((?:.|\r?\n)+?)\}\}/g, ho = /[-.*+?^${}()|[\]\/\\]/g, mo = g(function (e) {
        var t = e[0].replace(ho, "\\$&"), n = e[1].replace(ho, "\\$&");
        return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
    });
    var yo = {
        staticKeys: ["staticClass"], transformNode: function (e, t) {
            t.warn;
            var n = Pr(e, "class");
            n && (e.staticClass = JSON.stringify(n));
            var r = Fr(e, "class", !1);
            r && (e.classBinding = r)
        }, genData: function (e) {
            var t = "";
            return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
        }
    };
    var go, _o = {
            staticKeys: ["staticStyle"], transformNode: function (e, t) {
                t.warn;
                var n = Pr(e, "style");
                n && (e.staticStyle = JSON.stringify(si(n)));
                var r = Fr(e, "style", !1);
                r && (e.styleBinding = r)
            }, genData: function (e) {
                var t = "";
                return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
            }
        }, bo = function (e) {
            return (go = go || document.createElement("div")).innerHTML = e, go.textContent
        }, $o = p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        wo = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        Co = p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        xo = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        ko = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Ao = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + P.source + "]*", Oo = "((?:" + Ao + "\\:)?" + Ao + ")",
        So = new RegExp("^<" + Oo), To = /^\s*(\/?)>/, No = new RegExp("^<\\/" + Oo + "[^>]*>"),
        Eo = /^<!DOCTYPE [^>]+>/i, jo = /^<!\--/, Do = /^<!\[/, Lo = p("script,style,textarea", !0), Io = {},
        Mo = {"&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t", "&#39;": "'"},
        Fo = /&(?:lt|gt|quot|amp|#39);/g, Po = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, Ro = p("pre,textarea", !0),
        Ho = function (e, t) {
            return e && Ro(e) && "\n" === t[0]
        };

    function Bo(e, t) {
        var n = t ? Po : Fo;
        return e.replace(n, function (e) {
            return Mo[e]
        })
    }

    var Uo, Vo, zo, Ko, Jo, qo, Wo, Zo, Go = /^@|^v-on:/, Xo = /^v-|^@|^:|^#/,
        Yo = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, Qo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, ea = /^\(|\)$/g,
        ta = /^\[.*\]$/, na = /:(.*)$/, ra = /^:|^\.|^v-bind:/, ia = /\.[^.\]]+(?=[^\]]*$)/g, oa = /^v-slot(:|$)|^#/,
        aa = /[\r\n]/, sa = /[ \f\t\r\n]+/g, ca = g(bo), ua = "_empty_";

    function la(e, t, n) {
        return {type: 1, tag: e, attrsList: t, attrsMap: ya(t), rawAttrsMap: {}, parent: n, children: []}
    }

    function fa(e, t) {
        Uo = t.warn || Tr, qo = t.isPreTag || T, Wo = t.mustUseProp || T, Zo = t.getTagNamespace || T;
        t.isReservedTag;
        zo = Nr(t.modules, "transformNode"), Ko = Nr(t.modules, "preTransformNode"), Jo = Nr(t.modules, "postTransformNode"), Vo = t.delimiters;
        var n, r, i = [], o = !1 !== t.preserveWhitespace, a = t.whitespace, s = !1, c = !1;

        function u(e) {
            if (l(e), s || e.processed || (e = pa(e, t)), i.length || e === n || n.if && (e.elseif || e.else) && va(n, {
                exp: e.elseif,
                block: e
            }), r && !e.forbidden) if (e.elseif || e.else) a = e, (u = function (e) {
                var t = e.length;
                for (; t--;) {
                    if (1 === e[t].type) return e[t];
                    e.pop()
                }
            }(r.children)) && u.if && va(u, {exp: a.elseif, block: a}); else {
                if (e.slotScope) {
                    var o = e.slotTarget || '"default"';
                    (r.scopedSlots || (r.scopedSlots = {}))[o] = e
                }
                r.children.push(e), e.parent = r
            }
            var a, u;
            e.children = e.children.filter(function (e) {
                return !e.slotScope
            }), l(e), e.pre && (s = !1), qo(e.tag) && (c = !1);
            for (var f = 0; f < Jo.length; f++) Jo[f](e, t)
        }

        function l(e) {
            if (!c) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) e.children.pop()
        }

        return function (e, t) {
            for (var n, r, i = [], o = t.expectHTML, a = t.isUnaryTag || T, s = t.canBeLeftOpenTag || T, c = 0; e;) {
                if (n = e, r && Lo(r)) {
                    var u = 0, l = r.toLowerCase(),
                        f = Io[l] || (Io[l] = new RegExp("([\\s\\S]*?)(</" + l + "[^>]*>)", "i")),
                        p = e.replace(f, function (e, n, r) {
                            return u = r.length, Lo(l) || "noscript" === l || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Ho(l, n) && (n = n.slice(1)), t.chars && t.chars(n), ""
                        });
                    c += e.length - p.length, e = p, A(l, c - u, c)
                } else {
                    var d = e.indexOf("<");
                    if (0 === d) {
                        if (jo.test(e)) {
                            var v = e.indexOf("--\x3e");
                            if (v >= 0) {
                                t.shouldKeepComment && t.comment(e.substring(4, v), c, c + v + 3), C(v + 3);
                                continue
                            }
                        }
                        if (Do.test(e)) {
                            var h = e.indexOf("]>");
                            if (h >= 0) {
                                C(h + 2);
                                continue
                            }
                        }
                        var m = e.match(Eo);
                        if (m) {
                            C(m[0].length);
                            continue
                        }
                        var y = e.match(No);
                        if (y) {
                            var g = c;
                            C(y[0].length), A(y[1], g, c);
                            continue
                        }
                        var _ = x();
                        if (_) {
                            k(_), Ho(_.tagName, e) && C(1);
                            continue
                        }
                    }
                    var b = void 0, $ = void 0, w = void 0;
                    if (d >= 0) {
                        for ($ = e.slice(d); !(No.test($) || So.test($) || jo.test($) || Do.test($) || (w = $.indexOf("<", 1)) < 0);) d += w, $ = e.slice(d);
                        b = e.substring(0, d)
                    }
                    d < 0 && (b = e), b && C(b.length), t.chars && b && t.chars(b, c - b.length, c)
                }
                if (e === n) {
                    t.chars && t.chars(e);
                    break
                }
            }

            function C(t) {
                c += t, e = e.substring(t)
            }

            function x() {
                var t = e.match(So);
                if (t) {
                    var n, r, i = {tagName: t[1], attrs: [], start: c};
                    for (C(t[0].length); !(n = e.match(To)) && (r = e.match(ko) || e.match(xo));) r.start = c, C(r[0].length), r.end = c, i.attrs.push(r);
                    if (n) return i.unarySlash = n[1], C(n[0].length), i.end = c, i
                }
            }

            function k(e) {
                var n = e.tagName, c = e.unarySlash;
                o && ("p" === r && Co(n) && A(r), s(n) && r === n && A(n));
                for (var u = a(n) || !!c, l = e.attrs.length, f = new Array(l), p = 0; p < l; p++) {
                    var d = e.attrs[p], v = d[3] || d[4] || d[5] || "",
                        h = "a" === n && "href" === d[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                    f[p] = {name: d[1], value: Bo(v, h)}
                }
                u || (i.push({
                    tag: n,
                    lowerCasedTag: n.toLowerCase(),
                    attrs: f,
                    start: e.start,
                    end: e.end
                }), r = n), t.start && t.start(n, f, u, e.start, e.end)
            }

            function A(e, n, o) {
                var a, s;
                if (null == n && (n = c), null == o && (o = c), e) for (s = e.toLowerCase(), a = i.length - 1; a >= 0 && i[a].lowerCasedTag !== s; a--) ; else a = 0;
                if (a >= 0) {
                    for (var u = i.length - 1; u >= a; u--) t.end && t.end(i[u].tag, n, o);
                    i.length = a, r = a && i[a - 1].tag
                } else "br" === s ? t.start && t.start(e, [], !0, n, o) : "p" === s && (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o))
            }

            A()
        }(e, {
            warn: Uo,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function (e, o, a, l, f) {
                var p = r && r.ns || Zo(e);
                q && "svg" === p && (o = function (e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var r = e[n];
                        ga.test(r.name) || (r.name = r.name.replace(_a, ""), t.push(r))
                    }
                    return t
                }(o));
                var d, v = la(e, o, r);
                p && (v.ns = p), "style" !== (d = v).tag && ("script" !== d.tag || d.attrsMap.type && "text/javascript" !== d.attrsMap.type) || te() || (v.forbidden = !0);
                for (var h = 0; h < Ko.length; h++) v = Ko[h](v, t) || v;
                s || (!function (e) {
                    null != Pr(e, "v-pre") && (e.pre = !0)
                }(v), v.pre && (s = !0)), qo(v.tag) && (c = !0), s ? function (e) {
                    var t = e.attrsList, n = t.length;
                    if (n) for (var r = e.attrs = new Array(n), i = 0; i < n; i++) r[i] = {
                        name: t[i].name,
                        value: JSON.stringify(t[i].value)
                    }, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end); else e.pre || (e.plain = !0)
                }(v) : v.processed || (da(v), function (e) {
                    var t = Pr(e, "v-if");
                    if (t) e.if = t, va(e, {exp: t, block: e}); else {
                        null != Pr(e, "v-else") && (e.else = !0);
                        var n = Pr(e, "v-else-if");
                        n && (e.elseif = n)
                    }
                }(v), function (e) {
                    null != Pr(e, "v-once") && (e.once = !0)
                }(v)), n || (n = v), a ? u(v) : (r = v, i.push(v))
            },
            end: function (e, t, n) {
                var o = i[i.length - 1];
                i.length -= 1, r = i[i.length - 1], u(o)
            },
            chars: function (e, t, n) {
                if (r && (!q || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
                    var i, u, l, f = r.children;
                    if (e = c || e.trim() ? "script" === (i = r).tag || "style" === i.tag ? e : ca(e) : f.length ? a ? "condense" === a && aa.test(e) ? "" : " " : o ? " " : "" : "") c || "condense" !== a || (e = e.replace(sa, " ")), !s && " " !== e && (u = function (e, t) {
                        var n = t ? mo(t) : vo;
                        if (n.test(e)) {
                            for (var r, i, o, a = [], s = [], c = n.lastIndex = 0; r = n.exec(e);) {
                                (i = r.index) > c && (s.push(o = e.slice(c, i)), a.push(JSON.stringify(o)));
                                var u = Or(r[1].trim());
                                a.push("_s(" + u + ")"), s.push({"@binding": u}), c = i + r[0].length
                            }
                            return c < e.length && (s.push(o = e.slice(c)), a.push(JSON.stringify(o))), {
                                expression: a.join("+"),
                                tokens: s
                            }
                        }
                    }(e, Vo)) ? l = {
                        type: 2,
                        expression: u.expression,
                        tokens: u.tokens,
                        text: e
                    } : " " === e && f.length && " " === f[f.length - 1].text || (l = {
                        type: 3,
                        text: e
                    }), l && f.push(l)
                }
            },
            comment: function (e, t, n) {
                if (r) {
                    var i = {type: 3, text: e, isComment: !0};
                    r.children.push(i)
                }
            }
        }), n
    }

    function pa(e, t) {
        var n, r;
        (r = Fr(n = e, "key")) && (n.key = r), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
            var t = Fr(e, "ref");
            t && (e.ref = t, e.refInFor = function (e) {
                var t = e;
                for (; t;) {
                    if (void 0 !== t.for) return !0;
                    t = t.parent
                }
                return !1
            }(e))
        }(e), function (e) {
            var t;
            "template" === e.tag ? (t = Pr(e, "scope"), e.slotScope = t || Pr(e, "slot-scope")) : (t = Pr(e, "slot-scope")) && (e.slotScope = t);
            var n = Fr(e, "slot");
            n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || jr(e, "slot", n, function (e, t) {
                return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t]
            }(e, "slot")));
            if ("template" === e.tag) {
                var r = Rr(e, oa);
                if (r) {
                    var i = ha(r), o = i.name, a = i.dynamic;
                    e.slotTarget = o, e.slotTargetDynamic = a, e.slotScope = r.value || ua
                }
            } else {
                var s = Rr(e, oa);
                if (s) {
                    var c = e.scopedSlots || (e.scopedSlots = {}), u = ha(s), l = u.name, f = u.dynamic,
                        p = c[l] = la("template", [], e);
                    p.slotTarget = l, p.slotTargetDynamic = f, p.children = e.children.filter(function (e) {
                        if (!e.slotScope) return e.parent = p, !0
                    }), p.slotScope = s.value || ua, e.children = [], e.plain = !1
                }
            }
        }(e), function (e) {
            "slot" === e.tag && (e.slotName = Fr(e, "name"))
        }(e), function (e) {
            var t;
            (t = Fr(e, "is")) && (e.component = t);
            null != Pr(e, "inline-template") && (e.inlineTemplate = !0)
        }(e);
        for (var i = 0; i < zo.length; i++) e = zo[i](e, t) || e;
        return function (e) {
            var t, n, r, i, o, a, s, c, u = e.attrsList;
            for (t = 0, n = u.length; t < n; t++) if (r = i = u[t].name, o = u[t].value, Xo.test(r)) if (e.hasBindings = !0, (a = ma(r.replace(Xo, ""))) && (r = r.replace(ia, "")), ra.test(r)) r = r.replace(ra, ""), o = Or(o), (c = ta.test(r)) && (r = r.slice(1, -1)), a && (a.prop && !c && "innerHtml" === (r = b(r)) && (r = "innerHTML"), a.camel && !c && (r = b(r)), a.sync && (s = Ur(o, "$event"), c ? Mr(e, '"update:"+(' + r + ")", s, null, !1, 0, u[t], !0) : (Mr(e, "update:" + b(r), s, null, !1, 0, u[t]), C(r) !== b(r) && Mr(e, "update:" + C(r), s, null, !1, 0, u[t])))), a && a.prop || !e.component && Wo(e.tag, e.attrsMap.type, r) ? Er(e, r, o, u[t], c) : jr(e, r, o, u[t], c); else if (Go.test(r)) r = r.replace(Go, ""), (c = ta.test(r)) && (r = r.slice(1, -1)), Mr(e, r, o, a, !1, 0, u[t], c); else {
                var l = (r = r.replace(Xo, "")).match(na), f = l && l[1];
                c = !1, f && (r = r.slice(0, -(f.length + 1)), ta.test(f) && (f = f.slice(1, -1), c = !0)), Lr(e, r, i, o, f, c, a, u[t])
            } else jr(e, r, JSON.stringify(o), u[t]), !e.component && "muted" === r && Wo(e.tag, e.attrsMap.type, r) && Er(e, r, "true", u[t])
        }(e), e
    }

    function da(e) {
        var t;
        if (t = Pr(e, "v-for")) {
            var n = function (e) {
                var t = e.match(Yo);
                if (!t) return;
                var n = {};
                n.for = t[2].trim();
                var r = t[1].trim().replace(ea, ""), i = r.match(Qo);
                i ? (n.alias = r.replace(Qo, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r;
                return n
            }(t);
            n && A(e, n)
        }
    }

    function va(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
    }

    function ha(e) {
        var t = e.name.replace(oa, "");
        return t || "#" !== e.name[0] && (t = "default"), ta.test(t) ? {
            name: t.slice(1, -1),
            dynamic: !0
        } : {name: '"' + t + '"', dynamic: !1}
    }

    function ma(e) {
        var t = e.match(ia);
        if (t) {
            var n = {};
            return t.forEach(function (e) {
                n[e.slice(1)] = !0
            }), n
        }
    }

    function ya(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
        return t
    }

    var ga = /^xmlns:NS\d+/, _a = /^NS\d+:/;

    function ba(e) {
        return la(e.tag, e.attrsList.slice(), e.parent)
    }

    var $a = [yo, _o, {
        preTransformNode: function (e, t) {
            if ("input" === e.tag) {
                var n, r = e.attrsMap;
                if (!r["v-model"]) return;
                if ((r[":type"] || r["v-bind:type"]) && (n = Fr(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
                    var i = Pr(e, "v-if", !0), o = i ? "&&(" + i + ")" : "", a = null != Pr(e, "v-else", !0),
                        s = Pr(e, "v-else-if", !0), c = ba(e);
                    da(c), Dr(c, "type", "checkbox"), pa(c, t), c.processed = !0, c.if = "(" + n + ")==='checkbox'" + o, va(c, {
                        exp: c.if,
                        block: c
                    });
                    var u = ba(e);
                    Pr(u, "v-for", !0), Dr(u, "type", "radio"), pa(u, t), va(c, {
                        exp: "(" + n + ")==='radio'" + o,
                        block: u
                    });
                    var l = ba(e);
                    return Pr(l, "v-for", !0), Dr(l, ":type", n), pa(l, t), va(c, {
                        exp: i,
                        block: l
                    }), a ? c.else = !0 : s && (c.elseif = s), c
                }
            }
        }
    }];
    var wa, Ca, xa = {
        expectHTML: !0,
        modules: $a,
        directives: {
            model: function (e, t, n) {
                var r = t.value, i = t.modifiers, o = e.tag, a = e.attrsMap.type;
                if (e.component) return Br(e, r, i), !1;
                if ("select" === o) !function (e, t, n) {
                    var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                    r = r + " " + Ur(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Mr(e, "change", r, null, !0)
                }(e, r, i); else if ("input" === o && "checkbox" === a) !function (e, t, n) {
                    var r = n && n.number, i = Fr(e, "value") || "null", o = Fr(e, "true-value") || "true",
                        a = Fr(e, "false-value") || "false";
                    Er(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), Mr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Ur(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Ur(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Ur(t, "$$c") + "}", null, !0)
                }(e, r, i); else if ("input" === o && "radio" === a) !function (e, t, n) {
                    var r = n && n.number, i = Fr(e, "value") || "null";
                    Er(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), Mr(e, "change", Ur(t, i), null, !0)
                }(e, r, i); else if ("input" === o || "textarea" === o) !function (e, t, n) {
                    var r = e.attrsMap.type, i = n || {}, o = i.lazy, a = i.number, s = i.trim, c = !o && "range" !== r,
                        u = o ? "change" : "range" === r ? Zr : "input", l = "$event.target.value";
                    s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");
                    var f = Ur(t, l);
                    c && (f = "if($event.target.composing)return;" + f), Er(e, "value", "(" + t + ")"), Mr(e, u, f, null, !0), (s || a) && Mr(e, "blur", "$forceUpdate()")
                }(e, r, i); else if (!F.isReservedTag(o)) return Br(e, r, i), !1;
                return !0
            }, text: function (e, t) {
                t.value && Er(e, "textContent", "_s(" + t.value + ")", t)
            }, html: function (e, t) {
                t.value && Er(e, "innerHTML", "_s(" + t.value + ")", t)
            }
        },
        isPreTag: function (e) {
            return "pre" === e
        },
        isUnaryTag: $o,
        mustUseProp: Dn,
        canBeLeftOpenTag: wo,
        isReservedTag: Zn,
        getTagNamespace: Gn,
        staticKeys: function (e) {
            return e.reduce(function (e, t) {
                return e.concat(t.staticKeys || [])
            }, []).join(",")
        }($a)
    }, ka = g(function (e) {
        return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
    });

    function Aa(e, t) {
        e && (wa = ka(t.staticKeys || ""), Ca = t.isReservedTag || T, function e(t) {
            t.static = function (e) {
                if (2 === e.type) return !1;
                if (3 === e.type) return !0;
                return !(!e.pre && (e.hasBindings || e.if || e.for || d(e.tag) || !Ca(e.tag) || function (e) {
                    for (; e.parent;) {
                        if ("template" !== (e = e.parent).tag) return !1;
                        if (e.for) return !0
                    }
                    return !1
                }(e) || !Object.keys(e).every(wa)))
            }(t);
            if (1 === t.type) {
                if (!Ca(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
                for (var n = 0, r = t.children.length; n < r; n++) {
                    var i = t.children[n];
                    e(i), i.static || (t.static = !1)
                }
                if (t.ifConditions) for (var o = 1, a = t.ifConditions.length; o < a; o++) {
                    var s = t.ifConditions[o].block;
                    e(s), s.static || (t.static = !1)
                }
            }
        }(e), function e(t, n) {
            if (1 === t.type) {
                if ((t.static || t.once) && (t.staticInFor = n), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void (t.staticRoot = !0);
                if (t.staticRoot = !1, t.children) for (var r = 0, i = t.children.length; r < i; r++) e(t.children[r], n || !!t.for);
                if (t.ifConditions) for (var o = 1, a = t.ifConditions.length; o < a; o++) e(t.ifConditions[o].block, n)
            }
        }(e, !1))
    }

    var Oa = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/, Sa = /\([^)]*?\);*$/,
        Ta = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        Na = {esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46]}, Ea = {
            esc: ["Esc", "Escape"],
            tab: "Tab",
            enter: "Enter",
            space: [" ", "Spacebar"],
            up: ["Up", "ArrowUp"],
            left: ["Left", "ArrowLeft"],
            right: ["Right", "ArrowRight"],
            down: ["Down", "ArrowDown"],
            delete: ["Backspace", "Delete", "Del"]
        }, ja = function (e) {
            return "if(" + e + ")return null;"
        }, Da = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: ja("$event.target !== $event.currentTarget"),
            ctrl: ja("!$event.ctrlKey"),
            shift: ja("!$event.shiftKey"),
            alt: ja("!$event.altKey"),
            meta: ja("!$event.metaKey"),
            left: ja("'button' in $event && $event.button !== 0"),
            middle: ja("'button' in $event && $event.button !== 1"),
            right: ja("'button' in $event && $event.button !== 2")
        };

    function La(e, t) {
        var n = t ? "nativeOn:" : "on:", r = "", i = "";
        for (var o in e) {
            var a = Ia(e[o]);
            e[o] && e[o].dynamic ? i += o + "," + a + "," : r += '"' + o + '":' + a + ","
        }
        return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r
    }

    function Ia(e) {
        if (!e) return "function(){}";
        if (Array.isArray(e)) return "[" + e.map(function (e) {
            return Ia(e)
        }).join(",") + "]";
        var t = Ta.test(e.value), n = Oa.test(e.value), r = Ta.test(e.value.replace(Sa, ""));
        if (e.modifiers) {
            var i = "", o = "", a = [];
            for (var s in e.modifiers) if (Da[s]) o += Da[s], Na[s] && a.push(s); else if ("exact" === s) {
                var c = e.modifiers;
                o += ja(["ctrl", "shift", "alt", "meta"].filter(function (e) {
                    return !c[e]
                }).map(function (e) {
                    return "$event." + e + "Key"
                }).join("||"))
            } else a.push(s);
            return a.length && (i += function (e) {
                return "if(!$event.type.indexOf('key')&&" + e.map(Ma).join("&&") + ")return null;"
            }(a)), o && (i += o), "function($event){" + i + (t ? "return " + e.value + ".apply(null, arguments)" : n ? "return (" + e.value + ").apply(null, arguments)" : r ? "return " + e.value : e.value) + "}"
        }
        return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}"
    }

    function Ma(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = Na[e], r = Ea[e];
        return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
    }

    var Fa = {
        on: function (e, t) {
            e.wrapListeners = function (e) {
                return "_g(" + e + "," + t.value + ")"
            }
        }, bind: function (e, t) {
            e.wrapData = function (n) {
                return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
            }
        }, cloak: S
    }, Pa = function (e) {
        this.options = e, this.warn = e.warn || Tr, this.transforms = Nr(e.modules, "transformCode"), this.dataGenFns = Nr(e.modules, "genData"), this.directives = A(A({}, Fa), e.directives);
        var t = e.isReservedTag || T;
        this.maybeComponent = function (e) {
            return !!e.component || !t(e.tag)
        }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1
    };

    function Ra(e, t) {
        var n = new Pa(t);
        return {
            render: "with(this){return " + (e ? "script" === e.tag ? "null" : Ha(e, n) : '_c("div")') + "}",
            staticRenderFns: n.staticRenderFns
        }
    }

    function Ha(e, t) {
        if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Ba(e, t);
        if (e.once && !e.onceProcessed) return Ua(e, t);
        if (e.for && !e.forProcessed) return za(e, t);
        if (e.if && !e.ifProcessed) return Va(e, t);
        if ("template" !== e.tag || e.slotTarget || t.pre) {
            if ("slot" === e.tag) return function (e, t) {
                var n = e.slotName || '"default"', r = Wa(e, t),
                    i = "_t(" + n + (r ? ",function(){return " + r + "}" : ""),
                    o = e.attrs || e.dynamicAttrs ? Xa((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
                        return {name: b(e.name), value: e.value, dynamic: e.dynamic}
                    })) : null, a = e.attrsMap["v-bind"];
                !o && !a || r || (i += ",null");
                o && (i += "," + o);
                a && (i += (o ? "" : ",null") + "," + a);
                return i + ")"
            }(e, t);
            var n;
            if (e.component) n = function (e, t, n) {
                var r = t.inlineTemplate ? null : Wa(t, n, !0);
                return "_c(" + e + "," + Ka(t, n) + (r ? "," + r : "") + ")"
            }(e.component, e, t); else {
                var r;
                (!e.plain || e.pre && t.maybeComponent(e)) && (r = Ka(e, t));
                var i = e.inlineTemplate ? null : Wa(e, t, !0);
                n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
            }
            for (var o = 0; o < t.transforms.length; o++) n = t.transforms[o](e, n);
            return n
        }
        return Wa(e, t) || "void 0"
    }

    function Ba(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Ha(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
    }

    function Ua(e, t) {
        if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Va(e, t);
        if (e.staticInFor) {
            for (var n = "", r = e.parent; r;) {
                if (r.for) {
                    n = r.key;
                    break
                }
                r = r.parent
            }
            return n ? "_o(" + Ha(e, t) + "," + t.onceId++ + "," + n + ")" : Ha(e, t)
        }
        return Ba(e, t)
    }

    function Va(e, t, n, r) {
        return e.ifProcessed = !0, function e(t, n, r, i) {
            if (!t.length) return i || "_e()";
            var o = t.shift();
            return o.exp ? "(" + o.exp + ")?" + a(o.block) + ":" + e(t, n, r, i) : "" + a(o.block);

            function a(e) {
                return r ? r(e, n) : e.once ? Ua(e, n) : Ha(e, n)
            }
        }(e.ifConditions.slice(), t, n, r)
    }

    function za(e, t, n, r) {
        var i = e.for, o = e.alias, a = e.iterator1 ? "," + e.iterator1 : "", s = e.iterator2 ? "," + e.iterator2 : "";
        return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Ha)(e, t) + "})"
    }

    function Ka(e, t) {
        var n = "{", r = function (e, t) {
            var n = e.directives;
            if (!n) return;
            var r, i, o, a, s = "directives:[", c = !1;
            for (r = 0, i = n.length; r < i; r++) {
                o = n[r], a = !0;
                var u = t.directives[o.name];
                u && (a = !!u(e, o, t.warn)), a && (c = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},")
            }
            if (c) return s.slice(0, -1) + "]"
        }(e, t);
        r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
        for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
        if (e.attrs && (n += "attrs:" + Xa(e.attrs) + ","), e.props && (n += "domProps:" + Xa(e.props) + ","), e.events && (n += La(e.events, !1) + ","), e.nativeEvents && (n += La(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
            var r = e.for || Object.keys(t).some(function (e) {
                var n = t[e];
                return n.slotTargetDynamic || n.if || n.for || Ja(n)
            }), i = !!e.if;
            if (!r) for (var o = e.parent; o;) {
                if (o.slotScope && o.slotScope !== ua || o.for) {
                    r = !0;
                    break
                }
                o.if && (i = !0), o = o.parent
            }
            var a = Object.keys(t).map(function (e) {
                return qa(t[e], n)
            }).join(",");
            return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function (e) {
                var t = 5381, n = e.length;
                for (; n;) t = 33 * t ^ e.charCodeAt(--n);
                return t >>> 0
            }(a) : "") + ")"
        }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
            var o = function (e, t) {
                var n = e.children[0];
                if (n && 1 === n.type) {
                    var r = Ra(n, t.options);
                    return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (e) {
                        return "function(){" + e + "}"
                    }).join(",") + "]}"
                }
            }(e, t);
            o && (n += o + ",")
        }
        return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + Xa(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
    }

    function Ja(e) {
        return 1 === e.type && ("slot" === e.tag || e.children.some(Ja))
    }

    function qa(e, t) {
        var n = e.attrsMap["slot-scope"];
        if (e.if && !e.ifProcessed && !n) return Va(e, t, qa, "null");
        if (e.for && !e.forProcessed) return za(e, t, qa);
        var r = e.slotScope === ua ? "" : String(e.slotScope),
            i = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if + ")?" + (Wa(e, t) || "undefined") + ":undefined" : Wa(e, t) || "undefined" : Ha(e, t)) + "}",
            o = r ? "" : ",proxy:true";
        return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + o + "}"
    }

    function Wa(e, t, n, r, i) {
        var o = e.children;
        if (o.length) {
            var a = o[0];
            if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) {
                var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
                return "" + (r || Ha)(a, t) + s
            }
            var c = n ? function (e, t) {
                for (var n = 0, r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (1 === i.type) {
                        if (Za(i) || i.ifConditions && i.ifConditions.some(function (e) {
                            return Za(e.block)
                        })) {
                            n = 2;
                            break
                        }
                        (t(i) || i.ifConditions && i.ifConditions.some(function (e) {
                            return t(e.block)
                        })) && (n = 1)
                    }
                }
                return n
            }(o, t.maybeComponent) : 0, u = i || Ga;
            return "[" + o.map(function (e) {
                return u(e, t)
            }).join(",") + "]" + (c ? "," + c : "")
        }
    }

    function Za(e) {
        return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
    }

    function Ga(e, t) {
        return 1 === e.type ? Ha(e, t) : 3 === e.type && e.isComment ? (r = e, "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = e).type ? n.expression : Ya(JSON.stringify(n.text))) + ")";
        var n, r
    }

    function Xa(e) {
        for (var t = "", n = "", r = 0; r < e.length; r++) {
            var i = e[r], o = Ya(i.value);
            i.dynamic ? n += i.name + "," + o + "," : t += '"' + i.name + '":' + o + ","
        }
        return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
    }

    function Ya(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }

    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");

    function Qa(e, t) {
        try {
            return new Function(e)
        } catch (n) {
            return t.push({err: n, code: e}), S
        }
    }

    function es(e) {
        var t = Object.create(null);
        return function (n, r, i) {
            (r = A({}, r)).warn;
            delete r.warn;
            var o = r.delimiters ? String(r.delimiters) + n : n;
            if (t[o]) return t[o];
            var a = e(n, r), s = {}, c = [];
            return s.render = Qa(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function (e) {
                return Qa(e, c)
            }), t[o] = s
        }
    }

    var ts, ns, rs = (ts = function (e, t) {
        var n = fa(e.trim(), t);
        !1 !== t.optimize && Aa(n, t);
        var r = Ra(n, t);
        return {ast: n, render: r.render, staticRenderFns: r.staticRenderFns}
    }, function (e) {
        function t(t, n) {
            var r = Object.create(e), i = [], o = [];
            if (n) for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = A(Object.create(e.directives || null), n.directives)), n) "modules" !== a && "directives" !== a && (r[a] = n[a]);
            r.warn = function (e, t, n) {
                (n ? o : i).push(e)
            };
            var s = ts(t.trim(), r);
            return s.errors = i, s.tips = o, s
        }

        return {compile: t, compileToFunctions: es(t)}
    })(xa), is = (rs.compile, rs.compileToFunctions);

    function os(e) {
        return (ns = ns || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', ns.innerHTML.indexOf("&#10;") > 0
    }

    var as = !!V && os(!1), ss = !!V && os(!0), cs = g(function (e) {
        var t = Qn(e);
        return t && t.innerHTML
    }), us = Cn.prototype.$mount;
    return Cn.prototype.$mount = function (e, t) {
        if ((e = e && Qn(e)) === document.body || e === document.documentElement) return this;
        var n = this.$options;
        if (!n.render) {
            var r = n.template;
            if (r) if ("string" == typeof r) "#" === r.charAt(0) && (r = cs(r)); else {
                if (!r.nodeType) return this;
                r = r.innerHTML
            } else e && (r = function (e) {
                if (e.outerHTML) return e.outerHTML;
                var t = document.createElement("div");
                return t.appendChild(e.cloneNode(!0)), t.innerHTML
            }(e));
            if (r) {
                var i = is(r, {
                    outputSourceRange: !1,
                    shouldDecodeNewlines: as,
                    shouldDecodeNewlinesForHref: ss,
                    delimiters: n.delimiters,
                    comments: n.comments
                }, this), o = i.render, a = i.staticRenderFns;
                n.render = o, n.staticRenderFns = a
            }
        }
        return us.call(this, e, t)
    }, Cn.compile = is, Cn
});
;

var webrefSearch = new Vue({
    el: "#w-search", data: {isSearchBar: false}, methods: {
        setFocus() {
            this.isSearchBar = !this.isSearchBar;
            if (this.isSearchBar) {
                setTimeout(x => {
                    this.$nextTick(() => this.$refs.search.focus());
                }, 100);
            }
        }
    }
});
Vue.config.devtools = false;
document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
});
;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
(function ($, Drupal, drupalSettings) {
    $(document).ready(function () {
        $.ajax({
            type: 'POST',
            cache: false,
            url: drupalSettings.statistics.url,
            data: drupalSettings.statistics.data
        });
    });
})(jQuery, Drupal, drupalSettings);
;

Vue.component('b-tabs', {
    props: {value: Number, type: {type: String, default: 'is-boxed'}}, data() {
        return {currentTab: this.value || 0, tabs: []}
    }, created() {
        this.tabs = this.$children;
    }, methods: {
        selectTab: function (selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.label == selectedTab.label);
            });
        }, activeTab: function (selectedTab) {
            this.tabs[selectedTab].isActive = true;
        }
    }, mounted() {
        this.tabs[this.currentTab].isActive = true;
    }, template: `<div class="w-tabs-wrapper">
<nav class="w-tabs" :class="type">
	<ul>
		<li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
			<a @click="selectTab(tab)"><span v-if="tab.icon" class="icon"><i class="icon" :class="tab.icon"></i></span><span>{{ tab.label }}</span></a>
		</li>
	</ul>
</nav>
<section class="tab-content">
	<slot></slot>
</section>
</div>`
});
Vue.component('b-tab-item', {
    props: {label: {type: String, required: true}, icon: {type: String,}},
    template: `<div class="w-tabs-item" :class="{ 'is-active': isActive }"><slot></slot></div>`,
    data() {
        return {isActive: false}
    }
});
;
/* Rainbow v2.1.4 rainbowco.de | included languages: css, generic, html, javascript, lua */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Rainbow = t()
}(this, function () {
    "use strict";

    function e() {
        return "undefined" != typeof module && "object" == typeof module.exports
    }

    function t() {
        return "undefined" == typeof document && "undefined" != typeof self
    }

    function n(e) {
        var t = e.getAttribute("data-language") || e.parentNode.getAttribute("data-language");
        if (!t) {
            var n = /\blang(?:uage)?-(\w+)/, r = e.className.match(n) || e.parentNode.className.match(n);
            r && (t = r[1])
        }
        return t ? t.toLowerCase() : null
    }

    function r(e, t, n, r) {
        return (n !== e || r !== t) && (n <= e && r >= t)
    }

    function a(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&(?![\w\#]+;)/g, "&amp;")
    }

    function o(e, t) {
        for (var n = 0, r = 1; r < t; ++r) e[r] && (n += e[r].length);
        return n
    }

    function i(e, t, n, r) {
        return n >= e && n < t || r > e && r < t
    }

    function s(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(n);
        return t.sort(function (e, t) {
            return t - e
        })
    }

    function u(e, t, n, r) {
        var a = r.substr(e);
        return r.substr(0, e) + a.replace(t, n)
    }

    function c(t, Prism) {
        if (e()) return global.Worker = require("webworker-threads").Worker, new Worker(__filename);
        var n = Prism.toString(), c = s.toString();
        c += a.toString(), c += r.toString(), c += i.toString(), c += u.toString(), c += o.toString(), c += n;
        var l = c + "\tthis.onmessage=" + t.toString(), f = new Blob([l], {type: "text/javascript"});
        return new Worker((window.URL || window.webkitURL).createObjectURL(f))
    }

    function l(e) {
        function t() {
            self.postMessage({id: n.id, lang: n.lang, result: a})
        }

        var n = e.data, r = new Prism(n.options), a = r.refract(n.code, n.lang);
        return n.isNode ? (t(), void self.close()) : void setTimeout(function () {
            t()
        }, 1e3 * n.options.delay)
    }

    function f() {
        return (R || null === j) && (j = c(l, Prism)), j
    }

    function d(e, t) {
        function n(a) {
            a.data.id === e.id && (t(a.data), r.removeEventListener("message", n))
        }

        var r = f();
        r.addEventListener("message", n), r.postMessage(e)
    }

    function g(e, t, n) {
        return function (r) {
            e.innerHTML = r.result, e.classList.remove("loading"), e.classList.add("rainbow-show"), "PRE" === e.parentNode.tagName && (e.parentNode.classList.remove("loading"), e.parentNode.classList.add("rainbow-show")), M && M(e, r.lang), 0 === --t.c && n()
        }
    }

    function m(e) {
        return {
            patterns: C,
            inheritenceMap: S,
            aliases: T,
            globalClass: e.globalClass,
            delay: isNaN(e.delay) ? 0 : e.delay
        }
    }

    function v(e, t) {
        var n = {};
        "object" == typeof t && (n = t, t = n.language), t = T[t] || t;
        var r = {id: A++, code: e, lang: t, options: m(n), isNode: R};
        return r
    }

    function p(e, t) {
        for (var r = {c: 0}, a = 0, o = e; a < o.length; a += 1) {
            var i = o[a], s = n(i);
            if (!i.classList.contains("rainbow") && s) {
                i.classList.add("loading"), i.classList.add("rainbow"), "PRE" === i.parentNode.tagName && i.parentNode.classList.add("loading");
                var u = i.getAttribute("data-global-class"), c = parseInt(i.getAttribute("data-delay"), 10);
                ++r.c, d(v(i.innerHTML, {language: s, globalClass: u, delay: c}), g(i, r, t))
            }
        }
        0 === r.c && t()
    }

    function h(e) {
        var t = document.createElement("div");
        t.className = "preloader";
        for (var n = 0; n < 7; n++) t.appendChild(document.createElement("div"));
        e.appendChild(t)
    }

    function b(e, t) {
        t = t || function () {
        }, e = e && "function" == typeof e.getElementsByTagName ? e : document;
        for (var n = e.getElementsByTagName("pre"), r = e.getElementsByTagName("code"), a = [], o = [], i = 0, s = n; i < s.length; i += 1) {
            var u = s[i];
            h(u), u.getElementsByTagName("code").length ? u.getAttribute("data-trimmed") || (u.setAttribute("data-trimmed", !0), u.innerHTML = u.innerHTML.trim()) : a.push(u)
        }
        for (var c = 0, l = r; c < l.length; c += 1) {
            var f = l[c];
            o.push(f)
        }
        p(o.concat(a), t)
    }

    function w(e) {
        M = e
    }

    function y(e, t, n) {
        S[e] || (S[e] = n), C[e] = t.concat(C[e] || [])
    }

    function L(e) {
        delete S[e], delete C[e]
    }

    function N() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        if ("string" == typeof e[0]) {
            var n = v(e[0], e[1]);
            return void d(n, function (e) {
                return function (t) {
                    e && e(t.result, t.lang)
                }
            }(e[2]))
        }
        return "function" == typeof e[0] ? void b(0, e[0]) : void b(e[0], e[1])
    }

    function E(e, t) {
        T[e] = t
    }

    var M, Prism = function Prism(e) {
        function t(e, t) {
            for (var n in h) if (n = parseInt(n, 10), r(n, h[n], e, t) && (delete h[n], delete p[n]), i(n, h[n], e, t)) return !0;
            return !1
        }

        function n(t, n) {
            var r = t.replace(/\./g, " "), a = e.globalClass;
            return a && (r += " " + a), '<span class="' + r + '">' + n + "</span>"
        }

        function c(e) {
            for (var t = s(p), n = 0, r = t; n < r.length; n += 1) {
                var a = r[n], o = p[a];
                e = u(a, o.replace, o["with"], e)
            }
            return e
        }

        function l(e) {
            var t = "";
            return e.ignoreCase && (t += "i"), e.multiline && (t += "m"), new RegExp(e.source, t)
        }

        function f(r, a, i) {
            function c(e) {
                return r.name && (e = n(r.name, e)), p[w] = {
                    replace: m[0],
                    "with": e
                }, h[w] = y, !g && {remaining: a.substr(y - i), offset: y}
            }

            function f(t) {
                var a = m[t];
                if (a) {
                    var i = r.matches[t], s = i.language, c = i.name && i.matches ? i.matches : i,
                        l = function (e, r, a) {
                            b = u(o(m, t), e, a ? n(a, r) : r, b)
                        };
                    if ("string" == typeof i) return void l(a, a, i);
                    var f, d = new Prism(e);
                    if (s) return f = d.refract(a, s), void l(a, f);
                    f = d.refract(a, v, c.length ? c : [c]), l(a, f, i.matches ? i.name : 0)
                }
            }

            void 0 === i && (i = 0);
            var d = r.pattern;
            if (!d) return !1;
            var g = !d.global;
            d = l(d);
            var m = d.exec(a);
            if (!m) return !1;
            !r.name && r.matches && "string" == typeof r.matches[0] && (r.name = r.matches[0], delete r.matches[0]);
            var b = m[0], w = m.index + i, y = m[0].length + w;
            if (w === y) return !1;
            if (t(w, y)) return {remaining: a.substr(y - i), offset: y};
            for (var L = s(r.matches), N = 0, E = L; N < E.length; N += 1) {
                var M = E[N];
                f(M)
            }
            return c(b)
        }

        function d(e, t) {
            for (var n = 0, r = t; n < r.length; n += 1) for (var a = r[n], o = f(a, e); o;) o = f(a, o.remaining, o.offset);
            return c(e)
        }

        function g(t) {
            for (var n = e.patterns[t] || []; e.inheritenceMap[t];) t = e.inheritenceMap[t], n = n.concat(e.patterns[t] || []);
            return n
        }

        function m(e, t, n) {
            return v = t, n = n || g(t), d(a(e), n)
        }

        var v, p = {}, h = {};
        this.refract = m
    }, C = {}, S = {}, T = {}, x = {}, A = 0, R = e(), k = t(), j = null;
    x = {extend: y, remove: L, onHighlight: w, addAlias: E, color: N}, R && (x.colorSync = function (e, t) {
        var n = v(e, t), r = new Prism(n.options);
        return r.refract(n.code, n.lang)
    }), R || k || document.addEventListener("DOMContentLoaded", function (e) {
        x.defer || x.color(e)
    }, !1), k && (self.onmessage = l);
    var B = x;
    return B
});
Rainbow.extend("css", [{name: "comment", pattern: /\/\*[\s\S]*?\*\//gm}, {
    name: "constant.hex-color",
    pattern: /#([a-f0-9]{3}|[a-f0-9]{6})(?=;|\s|,|\))/gi
}, {matches: {1: "constant.numeric", 2: "keyword.unit"}, pattern: /(\d+)(px|em|cm|s|%)?/g}, {
    name: "string",
    pattern: /('|")(.*?)\1/g
}, {
    name: "support.css-property",
    matches: {1: "support.vendor-prefix"},
    pattern: /(-o-|-moz-|-webkit-|-ms-)?[\w-]+(?=\s?:)(?!.*\{)/g
}, {
    matches: {
        1: [{name: "entity.name.sass", pattern: /&amp;/g}, {
            name: "direct-descendant",
            pattern: /&gt;/g
        }, {name: "entity.name.class", pattern: /\.[\w\-_]+/g}, {
            name: "entity.name.id",
            pattern: /\#[\w\-_]+/g
        }, {name: "entity.name.pseudo", pattern: /:[\w\-_]+/g}, {name: "entity.name.tag", pattern: /\w+/g}]
    }, pattern: /([\w\ ,\n:\.\#\&\;\-_]+)(?=.*\{)/g
}, {
    matches: {2: "support.vendor-prefix", 3: "support.css-value"},
    pattern: /(:|,)\s*(-o-|-moz-|-webkit-|-ms-)?([a-zA-Z-]*)(?=\b)(?!.*\{)/g
}]), Rainbow.addAlias("scss", "css"), Rainbow.extend("generic", [{
    matches: {
        1: [{
            name: "keyword.operator",
            pattern: /\=|\+/g
        }, {name: "keyword.dot", pattern: /\./g}],
        2: {name: "string", matches: {name: "constant.character.escape", pattern: /\\('|"){1}/g}}
    }, pattern: /(\(|\s|\[|\=|:|\+|\.|\{|,)(('|")([^\\\1]|\\.)*?(\3))/gm
}, {name: "comment", pattern: /\/\*[\s\S]*?\*\/|(\/\/|\#)(?!.*('|").*?[^:](\/\/|\#)).*?$/gm}, {
    name: "constant.numeric",
    pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
}, {
    matches: {1: "keyword"},
    pattern: /\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\b)/gi
}, {name: "constant.language", pattern: /true|false|null/g}, {
    name: "keyword.operator",
    pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g
}, {matches: {1: "function.call"}, pattern: /(\w+?)(?=\()/g}, {
    matches: {
        1: "storage.function",
        2: "entity.name.function"
    }, pattern: /(function)\s(.*?)(?=\()/g
}]), Rainbow.extend("html", [{
    name: "source.php.embedded",
    matches: {1: "variable.language.php-tag", 2: {language: "php"}, 3: "variable.language.php-tag"},
    pattern: /(&lt;\?php|&lt;\?=?(?!xml))([\s\S]*?)(\?&gt;)/gm
}, {
    name: "source.css.embedded",
    matches: {
        1: {
            matches: {
                1: "support.tag.style",
                2: [{name: "entity.tag.style", pattern: /^style/g}, {
                    name: "string",
                    pattern: /('|")(.*?)(\1)/g
                }, {name: "entity.tag.style.attribute", pattern: /(\w+)/g}],
                3: "support.tag.style"
            }, pattern: /(&lt;\/?)(style.*?)(&gt;)/g
        }, 2: {language: "css"}, 3: "support.tag.style", 4: "entity.tag.style", 5: "support.tag.style"
    },
    pattern: /(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm
}, {
    name: "source.js.embedded",
    matches: {
        1: {
            matches: {
                1: "support.tag.script",
                2: [{name: "entity.tag.script", pattern: /^script/g}, {
                    name: "string",
                    pattern: /('|")(.*?)(\1)/g
                }, {name: "entity.tag.script.attribute", pattern: /(\w+)/g}],
                3: "support.tag.script"
            }, pattern: /(&lt;\/?)(script.*?)(&gt;)/g
        }, 2: {language: "javascript"}, 3: "support.tag.script", 4: "entity.tag.script", 5: "support.tag.script"
    },
    pattern: /(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm
}, {name: "comment.html", pattern: /&lt;\!--[\S\s]*?--&gt;/g}, {
    matches: {
        1: "support.tag.open",
        2: "support.tag.close"
    }, pattern: /(&lt;)|(\/?\??&gt;)/g
}, {
    name: "support.tag",
    matches: {1: "support.tag", 2: "support.tag.special", 3: "support.tag-name"},
    pattern: /(&lt;\??)(\/|\!?)(\w+)/g
}, {matches: {1: "support.attribute"}, pattern: /([a-z-]+)(?=\=)/gi}, {
    matches: {
        1: "support.operator",
        2: "string.quote",
        3: "string.value",
        4: "string.quote"
    }, pattern: /(=)('|")(.*?)(\2)/g
}, {
    matches: {1: "support.operator", 2: "support.value"},
    pattern: /(=)([a-zA-Z\-0-9]*)\b/g
}, {
    matches: {1: "support.attribute"},
    pattern: /\s([\w-]+)(?=\s|&gt;)(?![\s\S]*&lt;)/g
}]), Rainbow.addAlias("xml", "html"), Rainbow.extend("javascript", [{
    name: "selector",
    pattern: /\$(?=\.|\()/g
}, {name: "support", pattern: /\b(window|document)\b/g}, {
    name: "keyword",
    pattern: /\b(export|default|from)\b/g
}, {name: "function.call", pattern: /\b(then)(?=\()/g}, {
    name: "variable.language.this",
    pattern: /\bthis\b/g
}, {name: "variable.language.super", pattern: /super(?=\.|\()/g}, {
    name: "storage.type",
    pattern: /\b(const|let|var)(?=\s)/g
}, {matches: {1: "support.property"}, pattern: /\.(length|node(Name|Value))\b/g}, {
    matches: {1: "support.function"},
    pattern: /(setTimeout|setInterval)(?=\()/g
}, {
    matches: {1: "support.method"},
    pattern: /\.(getAttribute|replace|push|getElementById|getElementsByClassName|setTimeout|setInterval)(?=\()/g
}, {
    name: "string.regexp",
    matches: {
        1: "string.regexp.open",
        2: {name: "constant.regexp.escape", pattern: /\\(.){1}/g},
        3: "string.regexp.close",
        4: "string.regexp.modifier"
    },
    pattern: /(\/)((?![*+?])(?:[^\r\n\[\/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+)(\/)(?!\/)([igm]{0,3})/g
}, {
    matches: {1: "storage.type", 3: "entity.function"},
    pattern: /(var)?(\s|^)(\S+)(?=\s?=\s?function\()/g
}, {
    matches: {1: "keyword", 2: "variable.type"},
    pattern: /(new)\s+(?!Promise)([^\(]*)(?=\()/g
}, {name: "entity.function", pattern: /(\w+)(?=:\s{0,}function)/g}, {
    name: "constant.other",
    pattern: /\*(?= as)/g
}, {matches: {1: "keyword", 2: "constant.other"}, pattern: /(export)\s+(\*)/g}, {
    matches: {
        1: "storage.type.accessor",
        2: "entity.name.function"
    }, pattern: /(get|set)\s+(\w+)(?=\()/g
}, {
    matches: {2: "entity.name.function"},
    pattern: /(^\s*)(\w+)(?=\([^\)]*?\)\s*\{)/gm
}, {
    matches: {
        1: "storage.type.class",
        2: "entity.name.class",
        3: "storage.modifier.extends",
        4: "entity.other.inherited-class"
    }, pattern: /(class)\s+(\w+)(?:\s+(extends)\s+(\w+))?(?=\s*\{)/g
}, {name: "storage.type.function.arrow", pattern: /=&gt;/g}, {
    name: "support.class.promise",
    pattern: /\bPromise(?=(\(|\.))/g
}], "generic"), Rainbow.addAlias("js", "javascript"), Rainbow.extend("lua", [{
    matches: {
        1: {
            name: "keyword.operator",
            pattern: /\=/g
        }, 2: {name: "string", matches: {name: "constant.character.escape", pattern: /\\('|"){1}/g}}
    }, pattern: /(\(|\s|\[|\=)(('|")([^\\\1]|\\.)*?(\3))/gm
}, {name: "comment", pattern: /\-{2}\[{2}\-{2}[\s\S]*?\-{2}\]{2}\-{2}|(\-{2})[\s\S]*?$/gm}, {
    name: "constant.numeric",
    pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
}, {
    matches: {1: "keyword"},
    pattern: /\b((a|e)nd|in|repeat|break|local|return|do|for|then|else(if)?|function|not|if|or|until|while)(?=\b)/gi
}, {name: "constant.language", pattern: /true|false|nil/g}, {
    name: "keyword.operator",
    pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=|#|\.{2}/g
}, {
    matches: {1: "storage.function", 2: "entity.name.function"},
    pattern: /(function)\s+(\w+[\:|\.]?\w+?)(?=\()/g
}, {matches: {1: "support.function"}, pattern: /\b(print|require|module|\w+\.\w+)(?=\()/g}]);
;

Vue.component('w-example', {
    props: {
        lang: {type: String, default: 'html'},
        isResult: {type: Boolean, default: true},
        isBase: {type: Boolean, default: true}
    }, data() {
        return {
            id: null,
            active: false,
            code: '',
            hasMoved: false,
            percent: 50,
            darkMode: false,
            horizontalMode: true,
            sandbox: {'html': '', 'css': '', 'js': '', 'title': '', 'descr': ''}
        }
    }, mounted() {
        var html = this.$slots.default[0].text;
        var doctype = html.toLowerCase().indexOf('<!doctype');
        if (doctype == -1) {
            this.code = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>webref.ru</title>';
            if (this.$props.isBase == true) this.code += '<base target="_blank" href="/example/">';
            this.code += '</head><body>' + html + '</body></html>';
        } else {
            if (this.$props.isBase == true) this.code = html.replace('</head>', '<base href="/example/" target="_blank"></head>'); else this.code = html;
        }
        if (this.$props.lang != 'html') {
            this.$props.isResult = false;
        }
        if (this.$props.isResult == true) {
            let result = this.$refs.result.contentWindow;
            result.document.write(this.code);
            result.document.close();
        }
        this.id = this._uid;
        this.sandbox = sandbox(this.code);
        if (localStorage.horizontalMode) {
            this.horizontalMode = localStorage.horizontalMode === 'true';
        }
        this.percent = (this.horizontalMode === true && this.$props.isResult === true) ? 50 : 100;
    }, watch: {
        darkMode: function () {
            localStorage.darkMode = this.darkMode;
        }
    }, methods: {
        reloadExample: function () {
            let result = this.$refs.result.contentWindow;
            result.document.open();
            result.document.write(this.code);
            result.document.close();
        }, splitMode: function () {
            this.horizontalMode = !this.horizontalMode;
            localStorage.horizontalMode = this.horizontalMode;
            this.percent = (this.horizontalMode === true) ? 50 : 100;
        }, newTab: function () {
            this.$refs.webref.submit();
        }, copyCode() {
            if (!navigator.clipboard) {
                let range = document.createRange();
                range.selectNodeContents(document.querySelector('.w-example-code'));
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
            } else {
                var text_to_copy = document.querySelector('.w-example-code').innerHTML;
                navigator.clipboard.writeText(text_to_copy);
            }
        }, jsFiddle: function () {
            this.$refs.jsFiddle.submit();
        }, codePen: function () {
            this.$refs.codePen.submit();
        }, onMouseDown() {
            this.active = true;
            this.hasMoved = false;
        }, onMouseUp() {
            this.active = false;
        }, onMouseMove(e) {
            if (e.buttons === 0 || e.which === 0) {
                this.active = false
            }
            if (this.active) {
                let offset = 0
                let target = e.currentTarget;
                while (target) {
                    offset += target.offsetLeft;
                    target = target.offsetParent;
                }
                const currentPage = e.pageX;
                const targetOffset = e.currentTarget.offsetWidth;
                const percent = Math.floor(((currentPage - offset) / targetOffset) * 10000) / 100
                if (percent > 20 && percent < 80) {
                    this.percent = percent;
                }
                this.$emit('resize', this.percent)
                this.hasMoved = true
            }
        },
    }, computed: {
        userSelect() {
            return this.active ? 'none' : '';
        },
    }, template: `<div class="w-example" :class="isResult==true ? '' : 'no-result'">
<div class="w-example-toolbar" v-if="isResult==true">
<div class="is-pulled-left">
</div>
<div class="is-pulled-right">
<span @click="reloadExample" title="Обновить результат"><i class="icon-play"></i></span>
<span @click="splitMode"><i :class="horizontalMode==true ? 'icon-vertical-split' : 'icon-horizontal-split'"></i></span>
<span @click="newTab" title="Открыть в новой вкладке"><i class="icon-popup"></i></span>
<form action="/example/" method="post" target="_blank" ref="webref" hidden><input type="hidden" name="codetext" :value="code"></form>
<span @click="copyCode" title="Скопировать код в буфер"><i class="icon-copy"></i></span>
<span @click="jsFiddle" title="Открыть в JSFiddle"><i class="icon-jsfiddle"></i></span>
<form action="https://jsfiddle.net/api/post/library/pure/" method="post" target="_blank" ref="jsFiddle" hidden><input type="hidden" name="title" :value="sandbox.title"><input type="hidden" name="description" :value="sandbox.descr"><input type="hidden" name="html" :value="sandbox.html"><input type="hidden" name="css" :value="sandbox.css"><input type="hidden" name="js" :value="sandbox.js"></form>
<span @click="codePen" title="Открыть в CodePen"><i class="icon-codepen"></i></span>
<form action="https://codepen.io/pen/define" method="post" target="_blank" ref="codePen" hidden><input type="hidden" name="data" :value="sandbox.codepen"></form>
</div>
</div>
<div class="multipane" :class="horizontalMode==true ? 'multipane-horizontal' : 'multipane-vertical'" :style="userSelect" @mouseup="onMouseUp" @mousemove="onMouseMove">
<div class="pane pane-mobile" :class="isResult==true ? 'pane-l-desktop' : 'pane-l-mobile'" :style="{ width: percent+'%'}">
<pre><code :data-language="lang" ref="source" class="w-example-code"><slot></slot></code></pre>
</div>
<div class="multipane-resizer" v-if="isResult==true && horizontalMode==true" @mousedown="onMouseDown"></div>
<div class="pane pane-r-desktop pane-mobile" v-if="isResult==true">
<iframe class="w-example-result" ref="result"></iframe>
</div>
</div>
</div>`
});

function sandbox(_code) {
    var data = {'html': '', 'css': '', 'js': '', 'title': '', 'descr': '', 'codepen': ''};
    var title, css, js, html;
    title = _code.match("<title>(.*)<\/title>");
    css = _code.match("<style[^>]*>((?:.|\r?\n)*?)<\/style>");
    js = _code.match("<script>((?:.|\r?\n)*?)</script>");
    html = _code.match("<body[^>]*>((?:.|\r?\n)*?)<\/body>");
    if (!!html) {
        var img = new RegExp('<img src="image/', 'g');
        data.html = html[1].replace(img, '<img src="//webref.ru/example/image/');
    }
    if (!!css) {
        var img = new RegExp('url\\(/example/image/', 'g');
        data.css = css[1].replace(img, 'url(//webref.ru/example/image/');
    }
    if (!!js) data.js = js[1];
    if (!!title) data.title = title[1];
    data.descr = window.location.href;
    codepen = {'title': data.title, 'description': data.descr, 'html': data.html, 'css': data.css, 'js': data.js};
    data.codepen = JSON.stringify(codepen);
    return data;
};

Vue.component('w-task-drag-the-words', {
    props: {
        question: {type: String, default: 'Расставьте в правильном порядке.'},
        separator: {type: String, default: '*'},
        quiz: {type: String, required: true},
    }, data: function () {
        return {
            stageQuiz: false,
            stageResult: false,
            text: this.quiz,
            count: 0,
            answerList: [],
            valueList: [],
            userAnswer: [],
            correct: 0,
            classDrag: '',
            isFillBlanks: false
        }
    }, created() {
        this.getAnswers();
        this.userAnswer = Array(this.count).fill('');
        this.randomize();
        this.stageQuiz = true;
    }, computed: {
        selectComponent() {
            return {
                data: function () {
                    return {value: [], isDragOver: [],}
                }, created() {
                    this.value = Array(this.$parent.count).fill('');
                    this.isDragOver = Array(this.$parent.count).fill(false);
                }, methods: {
                    onDrop(event, key) {
                        const item = event.dataTransfer.getData('item');
                        Vue.set(this.value, key, item);
                        Vue.set(this.isDragOver, key, false);
                        for (let i = 0; i < this.$parent.count; i++) {
                            if (this.value[i] == '' || this.value[i] == undefined) {
                                this.$parent.isFillBlanks = false;
                                break;
                            } else {
                                this.$parent.isFillBlanks = true;
                                this.$parent.userAnswer = this.value;
                            }
                        }
                    }, onDragEnter(key) {
                        Vue.set(this.isDragOver, key, true);
                    }, onDragLeave(key) {
                        Vue.set(this.isDragOver, key, false);
                    },
                }, template: `<pre class="w-inter-text">${this.prepareText()}</pre>`,
            }
        }, resultComponent() {
            return {template: `<pre class="w-inter-text">${this.resultText()}</pre>`,}
        },
    }, methods: {
        prepareText() {
            let text = this.text;
            this.answerList.forEach((item, index) => {
                item = item.replace(/\</g, '&lt;');
                item = item.replace(/\>/g, '&gt;');
                text = text.replace(this.separator + item + this.separator, `<span class="w-drop-zone"
			  :class="{ 'w-drop-zone-fill': value[${index}]!='', 'dragover': isDragOver[${index}] }"
			  :key="${index}"
			  @drop="onDrop($event, ${index})"
			  @dragover.prevent
			  @dragenter="onDragEnter(${index})"
			  @dragleave="onDragLeave(${index})"
			  >{{value[${index}]}}</span>`);
            });
            return text;
        }, resultText() {
            let text = this.text;
            this.answerList.forEach((item, index) => {
                let itemWithBrackets;
                itemWithBrackets = item.replace(/\</g, '&lt;');
                itemWithBrackets = itemWithBrackets.replace(/\>/g, '&gt;');
                let userAnswer = this.userAnswer[index];
                userAnswer = userAnswer.replace(/\</g, '&lt;');
                userAnswer = userAnswer.replace(/\>/g, '&gt;');
                let checkClass = 'w-answer-pre-wrong';
                if (this.userAnswer[index] == item) {
                    checkClass = 'w-answer-pre-correct';
                    this.correct++;
                }
                text = text.replace(this.separator + itemWithBrackets + this.separator, '<span class="' + checkClass + '">' + userAnswer + '</span>');
            });
            return text;
        }, getAnswers() {
            this.text = this.text.replace(/\</g, '&lt;');
            this.text = this.text.replace(/\>/g, '&gt;');
            const regex = RegExp(`[${this.separator}](.*?)[${this.separator}]`, 'gmi');
            let resultMatchGroup = this.quiz.match(regex);
            this.answerList = resultMatchGroup.map(match => match.replace(regex, "$1"));
            this.valueList = [...this.answerList];
            this.count = this.answerList.length;
        }, randomize() {
            this.shuffleArray(this.valueList);
        }, shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                Vue.set(array, i, array[j]);
                Vue.set(array, j, temp);
            }
        }, startDrag(event, item) {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('item', item);
            this.classDrag = 'w-drag';
        }, endDrag() {
            this.classDrag = '';
        }, showResult() {
            this.stageQuiz = false;
            this.stageResult = true;
        }, repeatQuiz() {
            this.stageResult = false;
            this.stageQuiz = true;
            this.correct = 0;
            this.isFillBlanks = false;
            this.userAnswer = Array(this.count).fill('');
            this.randomize();
        }
    }, template: `<div class="w-inter-select">
	  	<section v-if="stageQuiz">
			<div class="w-quiz-question">{{ question }}</div>
			<component :is="selectComponent" />
			<div class="w-inter-draggable-list">
				<span v-for="item in valueList" class="w-inter-drag-el" 
						:class="classDrag"
						@dragstart="startDrag($event, item)" 
						@dragend="endDrag()" 
						draggable>{{ item }}</span>  
			</div>
			<p class="w-inter-buttons"><button class="button w-modal-button" :disabled="!isFillBlanks"
			  	@click="showResult">Ответить</button></p>
	 	</section>
	  	<transition name="fade">
			<section v-if="stageResult">
		  		<h2>Результаты</h2>
		  		<p>Правильных ответов: {{ correct }} из {{ count }}</p>
		  		<component :is="resultComponent" />
		  		<p><button class="button w-modal-button" @click="repeatQuiz">Повторить</button></p>
			</section>
	  	</transition>
	</div>`
});
Vue.component('w-task-fill-in-the-blanks', {
    props: {
        question: {type: String, default: 'Заполните пустые поля.'},
        separator: {type: String, default: '*'},
        quiz: {type: String, required: true},
    }, data: function () {
        return {
            stageQuiz: false,
            stageResult: false,
            text: this.quiz,
            count: 0,
            answerList: [],
            userAnswer: [],
            correct: 0,
            isFillBlanks: false
        }
    }, created() {
        this.getAnswers();
        this.prepareText();
        this.stageQuiz = true;
    }, computed: {
        blankComponent() {
            return {
                data: function () {
                    return {value: []}
                }, methods: {
                    onChange() {
                        for (let i = 0; i < this.$parent.count; i++) {
                            if (this.value[i] == '' || this.value[i] == undefined) {
                                this.$parent.isFillBlanks = false;
                                break;
                            } else {
                                this.$parent.isFillBlanks = true;
                                this.$parent.userAnswer = this.value;
                            }
                        }
                    }
                }, template: `<pre class="w-inter-text">${this.prepareText()}</pre>`,
            }
        }, resultComponent() {
            return {template: `<pre class="w-inter-text">${this.resultText()}</pre>`,}
        },
    }, methods: {
        prepareText() {
            let text = this.text;
            text = text.replace(/\</g, '&lt;');
            text = text.replace(/\>/g, '&gt;');
            this.answerList.forEach((item, index) => {
                text = text.replace(this.separator + item + this.separator, '<input class="w-quiz-input" v-model="value[' + index + ']" @input="onChange" :key="' + index + '">');
            });
            return text;
        }, resultText() {
            let text = this.text;
            this.answerList.forEach((item, index) => {
                let checkClass = 'w-answer-pre-wrong';
                let itemWithBrackets;
                itemWithBrackets = this.userAnswer[index].replace(/\</g, '&lt;');
                itemWithBrackets = itemWithBrackets.replace(/\>/g, '&gt;');
                let userAnswer = itemWithBrackets.toLowerCase();
                let allAnswers = item.split('|');
                allAnswers.forEach((answer) => {
                    if (userAnswer == answer) {
                        checkClass = 'w-answer-pre-correct';
                        this.correct++;
                    }
                });
                text = text.replace(this.separator + item + this.separator, '<span class="' + checkClass + '">' + itemWithBrackets + '</span>');
            });
            return text;
        }, onChange(data) {
            Vue.set(this.userAnswer, data.key, data.value);
            for (let i = 0; i < this.count; i++) {
                if (this.userAnswer[i] == '' || this.userAnswer[i] == undefined) {
                    this.isSelectAnswer = false;
                    break;
                } else
                    this.isSelectAnswer = true;
            }
        }, getAnswers() {
            this.text = this.text.replace(/\</g, '&lt;');
            this.text = this.text.replace(/\>/g, '&gt;');
            const regex = RegExp(`[${this.separator}](.*?)[${this.separator}]`, 'gmi');
            let resultMatchGroup = this.text.match(regex);
            this.answerList = resultMatchGroup.map(match => match.replace(regex, "$1"));
            this.valueList = [...this.answerList];
            this.count = this.answerList.length;
        }, showResult() {
            this.stageQuiz = false;
            this.stageResult = true;
        }, repeatQuiz() {
            this.stageResult = false;
            this.stageQuiz = true;
            this.correct = 0;
            this.isFillBlanks = false;
            this.userAnswer = Array(this.count).fill('');
        }
    }, template: `<div class="w-inter-fill-blanks">
		<section v-if="stageQuiz">
		<div class="w-quiz-question">{{ question }}</div>
		<component :is="blankComponent" />
		<p class="w-inter-buttons"><button class="button w-modal-button" :disabled="!isFillBlanks"
			@click="showResult">Ответить</button></p>
		</section>
		<transition name="fade">
		<section v-if="stageResult">
			<h2>Результаты</h2>
			<p>Правильных ответов: {{ correct }} из {{ count }}</p>
			<component :is="resultComponent" />
			<p><button class="button w-modal-button" @click="repeatQuiz">Повторить</button></p>
		</section>
		</transition>
	</div>`
});
Vue.component('w-task-image-choice', {
    props: {quiz: {type: [Array, Object], required: true,},}, data: function () {
        return {
            stageQuiz: false,
            stageResult: false,
            isSelectAnswer: false,
            questionIndex: 0,
            count: this.quiz.length,
            userAnswer: [this.count],
            correct: 0,
            summaryQuiz: [this.count]
        }
    }, created() {
        this.randomize();
        this.stageQuiz = true;
    }, methods: {
        randomize() {
            this.shuffleArray(this.quiz);
            for (let i = 0; i < this.count; i++) {
                this.shuffleArray(this.quiz[i].answers);
            }
        }, shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                Vue.set(array, i, array[j]);
                Vue.set(array, j, temp);
            }
        }, nextQuestion() {
            let a = this.userAnswer[this.questionIndex];
            if (this.quiz[this.questionIndex].answers[a].correct) {
                this.correct++;
            }
            this.summaryQuiz[this.questionIndex] = {
                'question': this.quiz[this.questionIndex].question,
                'code': this.quiz[this.questionIndex].code,
                'answer': this.quiz[this.questionIndex].answers[a].img,
                'correct': this.quiz[this.questionIndex].answers[a].correct
            };
            this.questionIndex++;
            this.isSelectAnswer = false;
            if (this.questionIndex == this.count) this.showResult();
        }, showResult() {
            this.stageQuiz = false;
            this.stageResult = true;
        }, selectOption(index) {
            Vue.set(this.userAnswer, this.questionIndex, index);
            this.isSelectAnswer = true;
        }, repeatQuiz() {
            this.stageQuiz = true;
            this.stageResult = false;
            this.isSelectAnswer = false;
            this.questionIndex = 0;
            this.correct = 0;
            this.userAnswer = Array(this.count).fill(null);
            this.randomize();
        }
    }, template: `<div class="w-task-quiz">
		<section v-if="stageQuiz">
			<div class="w-task" v-for="(item, indexQ) in quiz">
				<div class="w-task-questions" v-if="indexQ === questionIndex">
					<p class="w-quiz-progress">Вопрос {{ indexQ+1 }} из {{ count }}</p>
					<transition name="slide" appear>
						<div class="w-task-slider" :key="indexQ">
							<div class="w-quiz-question">{{ item.question }}</div>
							<pre class="w-quiz-code" v-if="item.code"><code>{{ item.code }}</code></pre>
							<div class="w-task-answers columns is-multiline">
								<div class="column is-6" v-for="(answer, indexA) in item.answers">
									<div class="w-quiz-answer w-quiz-image"
										@click="selectOption(indexA)" :class="{'is-selected':userAnswer[questionIndex]==indexA}">
											<img :src="'/assets/images/task/' + answer.img" alt="">
									</div>
								</div>
							</div>
							<p><button class="button w-modal-button" @click="nextQuestion" :disabled="!isSelectAnswer">Ответить</button></p>
						</div>
					</transition>
				</div>
			</div>
		</section>
		<transition name="fade" mode="out-in">
			<section v-if="stageResult">
				<h2 class="w-quiz-header">Результаты</h2>
				<p>Правильных ответов: {{ correct }} из {{ count }}</p>
				<div class="w-quiz-summary" v-for="item in summaryQuiz" :class="item.correct? 'w-answer-correct' : 'w-answer-wrong'">
					<div>Вопрос: {{ item.question}}</div>
					<pre v-if="item.code">{{ item.code}}</pre>
					<div><img :src="'/assets/images/task/' + item.answer" alt="" width="200"></div>
					<div>Правильно: {{ item.correct ? 'Да' : 'Нет' }}</div>
				</div>
				<p><button class="button w-modal-button" @click="repeatQuiz">Повторить</button></p>
			</section>
		</transition>
	</div>`
});
Vue.component('w-task-select-answer', {
    props: {
        question: {type: String, default: 'Выберите из списка правильные варианты.'},
        separator: {type: String, default: '*'},
        quiz: {type: String, required: true},
    }, data: function () {
        return {
            stageQuiz: false,
            stageResult: false,
            text: this.quiz,
            count: 0,
            answerList: [],
            valueList: [],
            userAnswer: [],
            correct: 0,
            isSelectAnswer: false
        }
    }, created() {
        this.getAnswers();
        this.randomize();
        this.stageQuiz = true;
    }, computed: {
        selectComponent() {
            return {
                props: {
                    list: {
                        type: null, default: () => {
                            return this.valueList
                        }
                    }
                }, methods: {
                    onChange(data) {
                        this.$parent.onChange({key: data.key, value: data.value});
                    }
                }, template: `<pre class="w-inter-text">${this.prepareText()}</pre>`,
            }
        }, resultComponent() {
            return {template: `<pre class="w-inter-text">${this.resultText()}</pre>`,}
        },
    }, methods: {
        prepareText() {
            let text = this.text;
            this.answerList.forEach((item, index) => {
                item = item.replace(/\</g, '&lt;');
                item = item.replace(/\>/g, '&gt;');
                text = text.replace(this.separator + item + this.separator, '<w-inter-select @change="onChange($event)" :list="list" :key="' + index + '"></w-inter-select>');
            });
            return text;
        }, resultText() {
            let text = this.text;
            this.answerList.forEach((item, index) => {
                let itemWithBrackets;
                itemWithBrackets = item.replace(/\</g, '&lt;');
                itemWithBrackets = itemWithBrackets.replace(/\>/g, '&gt;');
                let userAnswer = this.userAnswer[index];
                userAnswer = userAnswer.replace(/\</g, '&lt;');
                userAnswer = userAnswer.replace(/\>/g, '&gt;');
                console.log(userAnswer)
                let checkClass = 'w-answer-pre-wrong';
                if (this.userAnswer[index] == item) {
                    checkClass = 'w-answer-pre-correct';
                }
                text = text.replace(this.separator + itemWithBrackets + this.separator, '<span class="' + checkClass + '">' + userAnswer + '</span>');
            });
            return text;
        }, onChange(data) {
            Vue.set(this.userAnswer, data.key, data.value);
            for (let i = 0; i < this.count; i++) {
                if (this.userAnswer[i] == '' || this.userAnswer[i] == undefined) {
                    this.isSelectAnswer = false;
                    break;
                } else
                    this.isSelectAnswer = true;
            }
        }, getAnswers() {
            this.text = this.text.replace(/\</g, '&lt;');
            this.text = this.text.replace(/\>/g, '&gt;');
            const regex = RegExp(`[${this.separator}](.*?)[${this.separator}]`, 'gmi');
            let resultMatchGroup = this.quiz.match(regex);
            this.answerList = resultMatchGroup.map(match => match.replace(regex, "$1"));
            this.valueList = [...this.answerList];
            this.count = this.answerList.length;
        }, randomize() {
            this.shuffleArray(this.valueList);
        }, shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                Vue.set(array, i, array[j]);
                Vue.set(array, j, temp);
            }
        }, showResult() {
            for (let i = 0; i < this.count; i++) {
                if (this.userAnswer[i] == this.answerList[i]) this.correct++;
            }
            this.stageQuiz = false;
            this.stageResult = true;
        }, repeatQuiz() {
            this.stageResult = false;
            this.stageQuiz = true;
            this.correct = 0;
            this.isSelectAnswer = false;
            this.userAnswer = Array(this.count).fill('');
            this.randomize();
        }
    }, template: `<div class="w-inter-select">
	  	<section v-if="stageQuiz">
			<div class="w-quiz-question">{{ question }}</div>
			<component :is="selectComponent" />
			<p class="w-inter-buttons"><button class="button w-modal-button" :disabled="!isSelectAnswer"
				@click="showResult">Ответить</button></p>
	  	</section>
	  	<transition name="fade">
			<section v-if="stageResult">
				<h2>Результаты</h2>
				<p>Правильных ответов: {{ correct }} из {{ count }}</p>
				<component :is="resultComponent" />
				<p><button class="button w-modal-button" @click="repeatQuiz">Повторить</button></p>
			</section>
	  	</transition>
	</div>`
});
Vue.component('w-inter-select', {
    props: ['list'], data: function () {
        return {placeholderText: 'Выберите', selected: '', isChanged: false}
    }, methods: {
        onChange() {
            this.$parent.onChange({key: this.$vnode.key, value: this.selected});
        }
    }, template: `<select class="w-inter-select" @change="onChange($event)" v-model="selected" :class="isChanged ? 'w-select-answer-yes' : 'w-select-answer-no'">
		<option disabled selected hidden value="">{{ placeholderText }}</option>
		<option v-for="item in list">
			{{ item }}
		</option>
	</select>`
});
Vue.component('w-task-single-choice', {
    props: {quiz: {type: [Array, Object], required: true,},}, data: function () {
        return {
            stageQuiz: false,
            stageResult: false,
            isSelectAnswer: false,
            questionIndex: 0,
            count: this.quiz.length,
            userAnswer: [this.count],
            correct: 0,
            summaryQuiz: [this.count]
        }
    }, created() {
        this.randomize();
        this.stageQuiz = true;
    }, methods: {
        randomize() {
            this.shuffleArray(this.quiz);
            for (let i = 0; i < this.count; i++) {
                this.shuffleArray(this.quiz[i].answers);
            }
        }, shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                Vue.set(array, i, array[j]);
                Vue.set(array, j, temp);
            }
        }, nextQuestion() {
            let a = this.userAnswer[this.questionIndex];
            if (this.quiz[this.questionIndex].answers[a].correct) {
                this.correct++;
            }
            this.summaryQuiz[this.questionIndex] = {
                'question': this.quiz[this.questionIndex].question,
                'img': this.quiz[this.questionIndex].img,
                'code': this.quiz[this.questionIndex].code,
                'answer_text': this.quiz[this.questionIndex].answers[a].text,
                'answer_code': this.quiz[this.questionIndex].answers[a].code,
                'correct': this.quiz[this.questionIndex].answers[a].correct
            };
            this.questionIndex++;
            this.isSelectAnswer = false;
            if (this.questionIndex == this.count) this.showResult();
        }, showResult() {
            this.stageQuiz = false;
            this.stageResult = true;
        }, selectOption(index) {
            Vue.set(this.userAnswer, this.questionIndex, index);
            this.isSelectAnswer = true;
        }, repeatQuiz() {
            this.stageQuiz = true;
            this.stageResult = false;
            this.isSelectAnswer = false;
            this.questionIndex = 0;
            this.correct = 0;
            this.userAnswer = Array(this.count).fill(null);
            this.randomize();
        }
    }, template: `<div class="w-task-quiz">
		<section v-if="stageQuiz">
			<div class="w-task" v-for="(item, indexQ) in quiz">
				<div class="w-task-questions" v-if="indexQ === questionIndex">
					<p class="w-quiz-progress">Вопрос {{ indexQ+1 }} из {{ count }}</p>
					<transition name="slide" appear>
						<div class="w-task-slider" :key="indexQ">
							<div class="w-quiz-question">{{ item.question }}</div>
							<pre class="w-quiz-code" v-if="item.code"><code>{{ item.code }}</code></pre>
							<div class="w-quiz-img" v-if="item.img"><img :src="'/assets/images/task/' + item.img" alt=""></div>
							<div class="w-task-answers">
								<div class="w-quiz-answer" v-for="(answer, indexA) in item.answers"
											@click="selectOption(indexA)" :class="{'is-selected':userAnswer[questionIndex]==indexA}">
									{{ answer.text }}
									<pre class="w-quiz-answer-code" v-if="answer.code"><code>{{ answer.code }}</code></pre>
								</div>
							</div>
							<p><button class="button w-modal-button" @click="nextQuestion" :disabled="!isSelectAnswer">Ответить</button></p>
						</div>
					</transition>
				</div>
			</div>
		</section>
		<transition name="fade" mode="out-in">
			<section v-if="stageResult">
				<h2 class="w-quiz-header">Результаты</h2>
				<p>Правильных ответов: {{ correct }} из {{ count }}</p>
				<div class="w-quiz-summary" v-for="item in summaryQuiz" :class="item.correct? 'w-answer-correct' : 'w-answer-wrong'">
					<div>Вопрос: {{ item.question}}</div>
					<pre v-if="item.code">{{ item.code}}</pre>
					<div v-if="item.img"><img :src="'/assets/images/task/' + item.img" alt="" width="200"></div>					
					<div v-if="item.answer_text">Ответ: {{ item.answer_text }}</div>
					<div v-if="item.answer_code">Ответ: 
						<pre>{{ item.answer_code }}</pre>
					</div>
					<div>Правильно: {{ item.correct ? 'Да' : 'Нет' }}</div>
				</div>
				<p><button class="button w-modal-button" @click="repeatQuiz">Повторить</button></p>
			</section>
		</transition>
  	</div>`
});
Vue.component('w-task-write-answer', {
    props: {quiz: {type: [Array, Object], required: true,},}, data: function () {
        return {
            stageQuiz: false,
            stageResult: false,
            questionIndex: 0,
            count: this.quiz.length,
            userAnswer: [this.count],
            correct: 0,
            summaryQuiz: [this.count]
        }
    }, created() {
        this.randomize();
        this.userAnswer = Array(this.count).fill('');
        this.stageQuiz = true;
    }, mounted() {
        this.$refs['answer_' + this.questionIndex][0].focus();
    }, methods: {
        randomize() {
            this.shuffleArray(this.quiz);
        }, shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                Vue.set(array, i, array[j]);
                Vue.set(array, j, temp);
            }
        }, onEnter() {
            if (this.userAnswer[this.questionIndex] != '') this.nextQuestion();
        }, nextQuestion() {
            let correctAnswer = false;
            if (this.userAnswer[this.questionIndex].toLowerCase() == this.quiz[this.questionIndex].answer) {
                this.correct++;
                correctAnswer = true;
            }
            this.summaryQuiz[this.questionIndex] = {
                'question': this.quiz[this.questionIndex].question,
                'code': this.quiz[this.questionIndex].code,
                'img': this.quiz[this.questionIndex].img,
                'answer': this.userAnswer[this.questionIndex],
                'correct': correctAnswer
            };
            this.questionIndex++;
            if (this.questionIndex == this.count) this.showResult(); else {
                this.$nextTick(() => {
                    this.$refs['answer_' + this.questionIndex][0].focus();
                });
            }
        }, showResult() {
            this.stageQuiz = false;
            this.stageResult = true;
        }, repeatQuiz() {
            this.stageQuiz = true;
            this.stageResult = false;
            this.questionIndex = 0;
            this.correct = 0;
            this.userAnswer = Array(this.count).fill('');
            this.randomize();
            this.$nextTick(() => {
                this.$refs['answer_' + this.questionIndex][0].focus();
            });
        }
    }, template: `<div class="w-task-quiz">
		<section v-if="stageQuiz">
			<div class="w-task" v-for="(item, indexQ) in quiz">
				<div class="w-task-questions" v-if="indexQ === questionIndex">
					<p class="w-quiz-progress">Вопрос {{ indexQ+1 }} из {{ count }}</p>
					<transition name="fade" appear>
						<div class="w-task-slider" :key="indexQ">
							<div class="w-quiz-question">{{ item.question }}</div>
							<div class="w-quiz-img" v-if="item.img"><img :src="'/assets/images/task/' + item.img" alt=""></div>
							<p class="w-task-write">
								<input class="w-task-input" value="" autofocus 
									:ref="'answer_'+indexQ" v-model="userAnswer[questionIndex]"
									@keyup.enter="onEnter">
							</p>
							<p><button class="button w-modal-button" @click="nextQuestion" :disabled="userAnswer[questionIndex]==''">Ответить</button></p>  
						</div>
					</transition>
				</div>
			</div>
		</section>
		<transition name="fade">
			<section v-if="stageResult">
			<h2 class="w-quiz-header">Результаты</h2>
			<p>Правильных ответов: {{ correct }} из {{ count }}</p>
			<div class="w-quiz-summary" v-for="item in summaryQuiz" :class="item.correct? 'w-answer-correct' : 'w-answer-wrong'">
				<div>Вопрос: {{ item.question}}</div>
				<pre v-if="item.code">{{ item.code}}</pre>
				<div><img :src="'/assets/images/task/' + item.img" alt="" width="200"></div>
				<div>Ответ: {{ item.answer }}</div>
				<div>Правильно: {{ item.correct ? 'Да' : 'Нет' }}</div>
			</div>
			<p><button class="button w-modal-button" @click="repeatQuiz">Повторить</button></p>
			</section>
		</transition>
	</div>`
});
;

Vue.component('w-individual', {
    data() {
        return {isShowing: false}
    }, computed: {
        buttonValue: function () {
            return (this.isShowing) ? 'Скрыть ответ' : 'Показать ответ';
        }
    }, template: `<section class="w-individual-result">
	<p><button class="button w-modal-button" @click="isShowing=!isShowing">{{ buttonValue }}</button></p>
<div class="individual-answer" v-show="isShowing">
<slot></slot>
</div>
</section>`
});
;

Vue.component('w-modal', {
    template: `<div class="w-modal-overlay" @click="$emit('close')">
	<div class="w-modal w-modal-info" role="dialog" aria-modal="true" @click.stop>
	<div class="w-modal-icon w-modal-icon--info"></div>
	<h3 class="w-modal-title"><slot name="header"></slot></h3>
	<div class="w-modal-text"><slot></slot></div>
	<div class="w-modal-footer">
	    <button class="w-modal-button w-modal-button--close" aria-label="close" @click="$emit('close')">Закрыть</button>
	</div>
</div>
</div>`
});
var webrefMain = new Vue({
    el: "#w-main",
    data: {isHintSyntax: false, isHintBrowser: false, isHintSpec: false, playgroundValue: '', delimiters: ['%%', '%%']}
});
;