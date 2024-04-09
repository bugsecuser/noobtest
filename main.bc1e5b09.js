/*! For license information please see main.bc1e5b09.js.LICENSE.txt */ ! function() {
    var e = {
            2357: function(e, t, n) {
                "use strict";
                var r = n(9823);
                e.exports = r
            },
            9823: function(e, t, n) {
                "use strict";
                var r = n(1759),
                    o = n(6868),
                    i = n(9689),
                    a = n(4140),
                    l = n(5523);

                function u(e) {
                    throw Error("Minified Lexical error #".concat(e, "; see codes.json for the full message or ") + "use the non-minified dev environment for full errors and additional helpful warnings.")
                }

                function s(e, t, n) {
                    (l.$isGridSelection(n) || null !== a.$findMatchingParent(n.anchor.getNode(), (function(e) {
                        return l.$isGridCellNode(e)
                    })) && null !== a.$findMatchingParent(n.focus.getNode(), (function(e) {
                        return l.$isGridCellNode(e)
                    }))) && 1 === t.length && l.$isGridNode(t[0]) ? function(e, t, n, r) {
                        1 === e.length && l.$isGridNode(e[0]) || u(42);
                        var o = e[0];
                        e = o.getChildren(), n = o.getFirstChildOrThrow().getChildrenSize();
                        var i = o.getChildrenSize(),
                            s = a.$findMatchingParent(t.anchor.getNode(), (function(e) {
                                return l.$isGridCellNode(e)
                            }));
                        t = (o = s && a.$findMatchingParent(s, (function(e) {
                            return l.$isGridRowNode(e)
                        }))) && a.$findMatchingParent(o, (function(e) {
                            return l.$isGridNode(e)
                        })), l.$isGridCellNode(s) && l.$isGridRowNode(o) && l.$isGridNode(t) || u(43);
                        var c, f, d = o.getIndexWithinParent(),
                            p = Math.min(t.getChildrenSize() - 1, d + i - 1);
                        i = s.getIndexWithinParent(), s = Math.min(o.getChildrenSize() - 1, i + n - 1), n = Math.min(i, s), o = Math.min(d, p), i = Math.max(i, s), d = Math.max(d, p), p = t.getChildren(), s = 0;
                        for (var h = o; h <= d; h++) {
                            var g = p[h];
                            l.$isGridRowNode(g) || u(24);
                            var v = e[s];
                            l.$isGridRowNode(v) || u(24), g = g.getChildren(), v = v.getChildren();
                            for (var m = 0, y = function(e) {
                                    var t = g[e];
                                    l.$isGridCellNode(t) || u(25);
                                    var r = v[m];
                                    l.$isGridCellNode(r) || u(25), h === o && e === n ? c = t.getKey() : h === d && e === i && (f = t.getKey());
                                    var a = t.getChildren();
                                    r.getChildren().forEach((function(e) {
                                        l.$isTextNode(e) && l.$createParagraphNode().append(e), t.append(e)
                                    })), a.forEach((function(e) {
                                        return e.remove()
                                    })), m++
                                }, _ = n; _ <= i; _++) y(_);
                            s++
                        }
                        c && f && ((e = l.$createGridSelection()).set(t.getKey(), c, f), l.$setSelection(e), r.dispatchCommand(l.SELECTION_CHANGE_COMMAND, void 0))
                    }(t, n, !1, e) : function(e, t) {
                        for (var n, r = [], i = null, a = null, s = 0; s < e.length; s++) {
                            var c = e[s];
                            o.$isListItemNode(c) ? (null == a && (a = o.$createListNode("bullet"), r.push(a)), a.append(c)) : (null != a && (a = null), l.$isDecoratorNode(c) && !c.isTopLevel() || l.$isElementNode(c) && c.isInline() || l.$isTextNode(c) || l.$isLineBreakNode(c) ? (null === i && (i = l.$createParagraphNode(), r.push(i)), null !== i && i.append(c)) : (r.push(c), i = null))
                        }
                        l.$isRangeSelection(t) ? t.insertNodes(r) : l.$isGridSelection(t) && (e = t.anchor.getNode(), l.$isGridCellNode(e) || u(41), (n = e).append.apply(n, r))
                    }(t, n)
                }

                function c(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                        o = null == t || n.isSelected(),
                        a = l.$isElementNode(n) && n.excludeFromCopy("html"),
                        s = i.$cloneWithProperties(n);
                    s = l.$isTextNode(s) && null != t ? i.$sliceSelectedTextNodeContent(t, s) : s;
                    var f = l.$isElementNode(s) ? s.getChildren() : [],
                        d = s,
                        p = d.exportJSON();
                    p.type !== d.constructor.getType() && u(58);
                    var h = p.children;
                    for (l.$isElementNode(d) && (Array.isArray(h) || u(59)), l.$isTextNode(s) && (p.text = s.__text), s = 0; s < f.length; s++) h = c(e, t, d = f[s], p.children), !o && l.$isElementNode(n) && h && n.extractWithChild(d, t, "clone") && (o = !0);
                    if (o && !a) r.push(p);
                    else if (Array.isArray(p.children))
                        for (e = 0; e < p.children.length; e++) r.push(p.children[e]);
                    return o
                }
                t.$getHtmlContent = function(e) {
                    var t = l.$getSelection();
                    if (null == t) throw Error("Expected valid LexicalSelection");
                    return l.$isRangeSelection(t) && t.isCollapsed() || 0 === t.getNodes().length ? null : r.$generateHtmlFromNodes(e, t)
                }, t.$getLexicalContent = function(e) {
                    var t = l.$getSelection();
                    if (null == t) throw Error("Expected valid LexicalSelection");
                    if (l.$isRangeSelection(t) && t.isCollapsed() || 0 === t.getNodes().length) return null;
                    for (var n = JSON, r = n.stringify, o = [], i = l.$getRoot().getChildren(), a = 0; a < i.length; a++) c(e, t, i[a], o);
                    return r.call(n, {
                        namespace: e._config.namespace,
                        nodes: o
                    })
                }, t.$insertDataTransferForPlainText = function(e, t) {
                    null != (e = e.getData("text/plain")) && t.insertRawText(e)
                }, t.$insertDataTransferForRichText = function(e, t, n) {
                    var o = e.getData("application/x-lexical-editor");
                    if (o) try {
                        var a = JSON.parse(o);
                        if (a.namespace === n._config.namespace && Array.isArray(a.nodes)) {
                            var u = a.nodes;
                            for (o = [], a = 0; a < u.length; a++) {
                                var c = l.$parseSerializedNode(u[a]);
                                l.$isTextNode(c) && i.$addNodeStyle(c), o.push(c)
                            }
                            return s(n, o, t)
                        }
                    } catch (d) {}
                    if (u = e.getData("text/html")) try {
                        var f = (new DOMParser).parseFromString(u, "text/html");
                        return s(n, r.$generateNodesFromDOM(n, f), t)
                    } catch (p) {}
                    if (null != (e = e.getData("text/plain")))
                        if (l.$isRangeSelection(t))
                            for (n = (e = e.split(/\r?\n/)).length, f = 0; f < n; f++) t.insertText(e[f]), f < n - 1 && t.insertParagraph();
                        else t.insertRawText(e)
                }
            },
            6700: function(e, t, n) {
                "use strict";
                var r = n(6734);
                e.exports = r
            },
            6734: function(e, t, n) {
                "use strict";
                var r = n(7424).default,
                    o = n(5523);
                t.registerDragonSupport = function(e) {
                    var t = function(t) {
                        var n = e.getRootElement();
                        if (document.activeElement === n && "string" === typeof(n = t.data)) {
                            try {
                                var i = JSON.parse(n)
                            } catch (l) {
                                return
                            }
                            if (i && "nuanria_messaging" === i.protocol && "request" === i.type && (i = i.payload) && "makeChanges" === i.functionId && (i = i.args)) {
                                var a = r(i, 5),
                                    l = a[0],
                                    u = a[1],
                                    s = a[2],
                                    c = a[3],
                                    f = a[4];
                                e.update((function() {
                                    var e = o.$getSelection();
                                    if (o.$isRangeSelection(e)) {
                                        var n = e.anchor,
                                            r = n.getNode(),
                                            i = 0,
                                            a = 0;
                                        o.$isTextNode(r) && 0 <= l && 0 <= u && (i = l, a = l + u, e.setTextNodeRange(r, i, r, a)), i === a && "" === s || (e.insertRawText(s), r = n.getNode()), o.$isTextNode(r) && (a = c + f, i = (i = c) > (n = r.getTextContentSize()) ? n : i, a = a > n ? n : a, e.setTextNodeRange(r, i, r, a)), t.stopImmediatePropagation()
                                    }
                                }))
                            }
                        }
                    };
                    return window.addEventListener("message", t, !0),
                        function() {
                            window.removeEventListener("message", t, !0)
                        }
                }
            },
            7711: function(e, t, n) {
                "use strict";
                var r = n(1621);
                e.exports = r
            },
            1621: function(e, t, n) {
                "use strict";
                var r = n(2122).default,
                    o = n(7424).default,
                    i = n(4704).default,
                    a = n(4140),
                    l = n(5523);

                function u(e, t) {
                    var n = Date.now(),
                        r = 0;
                    return function(a, u, s, c, f, d) {
                        var p = Date.now();
                        if (d.has("historic")) return r = 0, n = p, 2;
                        var h = function(e, t, n, r, a) {
                                if (null === e || 0 === n.size && 0 === r.size && !a) return 0;
                                var u = t._selection,
                                    s = e._selection;
                                if (a) return 1;
                                if (!(l.$isRangeSelection(u) && l.$isRangeSelection(s) && s.isCollapsed() && u.isCollapsed())) return 0;
                                a = t._nodeMap;
                                var c, f = [],
                                    d = i(n);
                                try {
                                    for (d.s(); !(c = d.n()).done;) {
                                        var p = c.value;
                                        void 0 !== (n = a.get(p)) && f.push(n)
                                    }
                                } catch (y) {
                                    d.e(y)
                                } finally {
                                    d.f()
                                }
                                var h, g = i(r);
                                try {
                                    for (g.s(); !(h = g.n()).done;) {
                                        var v = o(h.value, 2),
                                            m = v[0];
                                        v[1] && (void 0 === (r = a.get(m)) || l.$isRootNode(r) || f.push(r))
                                    }
                                } catch (y) {
                                    g.e(y)
                                } finally {
                                    g.f()
                                }
                                return 0 === f.length ? 0 : 1 < f.length ? (t = (r = t._nodeMap).get(u.anchor.key), s = r.get(s.anchor.key), t && s && !e._nodeMap.has(t.__key) && l.$isTextNode(t) && 1 === t.__text.length && 1 === u.anchor.offset ? 2 : 0) : (t = f[0], e = e._nodeMap.get(t.__key), l.$isTextNode(e) && l.$isTextNode(t) && e.__mode === t.__mode ? (e = e.__text) === (t = t.__text) ? 0 : (u = u.anchor, s = s.anchor, u.key !== s.key || "text" !== u.type ? 0 : (u = u.offset, s = s.offset, 1 === (e = t.length - e.length) && s === u - 1 ? 2 : -1 === e && s === u + 1 ? 3 : -1 === e && s === u ? 4 : 0)) : 0)
                            }(a, u, c, f, e.isComposing()),
                            g = function() {
                                var o = d.has("history-push");
                                if (!o && d.has("history-merge")) return 0;
                                if (null === a) return 1;
                                var i = u._selection,
                                    g = a._selection;
                                return 0 < c.size || 0 < f.size ? (i = null === s || s.editor === e, !1 === o && 0 !== h && h === r && p < n + t && i || 1 === c.size && (i = Array.from(c)[0], o = a._nodeMap.get(i), i = u._nodeMap.get(i), o = !(!l.$isTextNode(o) || !l.$isTextNode(i)) && (o.__type === i.__type && o.__text === i.__text && o.__mode === i.__mode && o.__detail === i.__detail && o.__style === i.__style && o.__format === i.__format)) ? 0 : 1) : null === g && null !== i ? 0 : 2
                            }();
                        return n = p, r = h, g
                    }
                }
                t.createEmptyHistoryState = function() {
                    return {
                        current: null,
                        redoStack: [],
                        undoStack: []
                    }
                }, t.registerHistory = function(e, t, n) {
                    var o = u(e, n);
                    n = function(n) {
                        var i = n.editorState,
                            a = n.prevEditorState,
                            u = n.dirtyLeaves,
                            s = n.dirtyElements,
                            c = n.tags,
                            f = t.current,
                            d = t.redoStack,
                            p = t.undoStack,
                            h = null === f ? null : f.editorState;
                        if (null === f || i !== h) {
                            if (1 === (u = o(a, i, f, u, s, c))) 0 !== d.length && (t.redoStack = []), null !== f && (p.push(r(r({}, f), {}, {
                                undoSelection: a.read(l.$getSelection)
                            })), e.dispatchCommand(l.CAN_UNDO_COMMAND, !0));
                            else if (2 === u) return;
                            t.current = {
                                editor: e,
                                editorState: i
                            }
                        }
                    };
                    var i = a.mergeRegister(e.registerCommand(l.UNDO_COMMAND, (function() {
                            var n = t.redoStack,
                                r = t.undoStack;
                            if (0 !== r.length) {
                                var o = t.current,
                                    i = r.pop();
                                null !== o && (n.push(o), e.dispatchCommand(l.CAN_REDO_COMMAND, !0)), 0 === r.length && e.dispatchCommand(l.CAN_UNDO_COMMAND, !1), t.current = i || null, i && i.editor.setEditorState(i.editorState.clone(i.undoSelection), {
                                    tag: "historic"
                                })
                            }
                            return !0
                        }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.REDO_COMMAND, (function() {
                            var n = t.redoStack,
                                r = t.undoStack;
                            if (0 !== n.length) {
                                var o = t.current;
                                null !== o && (r.push(o), e.dispatchCommand(l.CAN_UNDO_COMMAND, !0)), r = n.pop(), 0 === n.length && e.dispatchCommand(l.CAN_REDO_COMMAND, !1), t.current = r || null, r && r.editor.setEditorState(r.editorState, {
                                    tag: "historic"
                                })
                            }
                            return !0
                        }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.CLEAR_EDITOR_COMMAND, (function() {
                            return t.undoStack = [], t.redoStack = [], t.current = null, !1
                        }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.CLEAR_HISTORY_COMMAND, (function() {
                            return t.undoStack = [], t.redoStack = [], t.current = null, !0
                        }), l.COMMAND_PRIORITY_EDITOR), e.registerUpdateListener(n)),
                        s = e.registerUpdateListener(n);
                    return function() {
                        i(), s()
                    }
                }
            },
            1759: function(e, t, n) {
                "use strict";
                var r = n(5313);
                e.exports = r
            },
            5313: function(e, t, n) {
                "use strict";
                var r = n(861).default,
                    o = n(7424).default,
                    i = n(4704).default,
                    a = n(9689),
                    l = n(5523);

                function u(e, t, n, r) {
                    var o = null == t || n.isSelected(),
                        i = l.$isElementNode(n) && n.excludeFromCopy("html"),
                        s = a.$cloneWithProperties(n);
                    s = l.$isTextNode(s) && null != t ? a.$sliceSelectedTextNodeContent(t, s) : s;
                    var c = l.$isElementNode(s) ? s.getChildren() : [],
                        f = s.exportDOM(e),
                        d = f.element,
                        p = f.after;
                    if (!d) return !1;
                    for (var h = new DocumentFragment, g = 0; g < c.length; g++) {
                        var v = c[g],
                            m = u(e, t, v, h);
                        !o && l.$isElementNode(n) && m && n.extractWithChild(v, t, "html") && (o = !0)
                    }
                    return o && !i ? (d.append(h), r.append(d), p && (e = p.call(s, d)) && d.replaceWith(e)) : r.append(h), o
                }
                var s = new Set(["STYLE"]);

                function c(e, t) {
                    var n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map,
                        u = arguments.length > 3 ? arguments[3] : void 0,
                        f = [];
                    if (s.has(e.nodeName)) return f;
                    var d, p = null,
                        h = e,
                        g = h.nodeName,
                        v = t._htmlConversions.get(g.toLowerCase());
                    if (g = null, void 0 !== v) {
                        var m, y = i(v);
                        try {
                            for (y.s(); !(m = y.n()).done;) null !== (v = (d = m.value)(e)) && (null === g || g.priority < v.priority) && (g = v)
                        } catch (S) {
                            y.e(S)
                        } finally {
                            y.f()
                        }
                    }
                    if (g = (d = null !== g ? g.conversion : null) ? d(e) : null, d = null, null !== g) {
                        if (d = g.after, null !== (p = g.node)) {
                            var _, b = i(a);
                            try {
                                for (b.s(); !(_ = b.n()).done;) {
                                    var x = o(_.value, 2),
                                        k = x[1];
                                    if (!(p = k(p, u))) break
                                }
                            } catch (S) {
                                b.e(S)
                            } finally {
                                b.f()
                            }
                            p && f.push(p)
                        }
                        null != g.forChild && a.set(e.nodeName, g.forChild)
                    }
                    for (e = e.childNodes, u = [], k = 0; k < e.length; k++) {
                        var C;
                        (C = u).push.apply(C, r(c(e[k], t, new Map(a), p)))
                    }
                    return null != d && (u = d(u)), null == p ? f = f.concat(u) : l.$isElementNode(p) && (n = p).append.apply(n, r(u)), f
                }
                t.$generateHtmlFromNodes = function(e, t) {
                    if (null == document || null == window) throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
                    for (var n = document.createElement("div"), r = l.$getRoot().getChildren(), o = 0; o < r.length; o++) {
                        var i = r[o];
                        void 0 !== t && u(e, t, i, n)
                    }
                    return n.innerHTML
                }, t.$generateNodesFromDOM = function(e, t) {
                    for (var n = [], r = (t = t.body ? Array.from(t.body.childNodes) : []).length, o = 0; o < r; o++) {
                        var i = t[o];
                        s.has(i.nodeName) || null !== (i = c(i, e)) && (n = n.concat(i))
                    }
                    return n
                }
            },
            6868: function(e, t, n) {
                "use strict";
                var r = n(8154);
                e.exports = r
            },
            8154: function(e, t, n) {
                "use strict";
                var r = n(861).default,
                    o = n(2122).default,
                    i = n(6690).default,
                    a = n(9728).default,
                    l = n(1588).default,
                    u = n(3808).default,
                    s = n(1655).default,
                    c = n(6389).default,
                    f = n(5523),
                    d = n(4140);

                function p(e) {
                    throw Error("Minified Lexical error #".concat(e, "; see codes.json for the full message or ") + "use the non-minified dev environment for full errors and additional helpful warnings.")
                }

                function h(e) {
                    var t = 1;
                    for (e = e.getParent(); null != e;) {
                        if (P(e)) {
                            if (F(e = e.getParent())) {
                                t++, e = e.getParent();
                                continue
                            }
                            p(40)
                        }
                        break
                    }
                    return t
                }

                function g(e) {
                    F(e = e.getParent()) || p(40);
                    for (var t = e; null !== t;) F(t = t.getParent()) && (e = t);
                    return e
                }

                function v(e) {
                    var t = [];
                    e = e.getChildren().filter(P);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            o = r.getFirstChild();
                        F(o) ? t = t.concat(v(o)) : t.push(r)
                    }
                    return t
                }

                function m(e) {
                    return P(e) && F(e.getFirstChild())
                }

                function y(e) {
                    return M().append(e)
                }

                function _(e, t) {
                    return P(e) && (0 === t.length || 1 === t.length && e.is(t[0]) && 0 === e.getChildrenSize())
                }

                function b(e, t) {
                    e.splice(e.getChildrenSize(), 0, t)
                }

                function x(e, t) {
                    if (F(e)) return e;
                    var n = e.getPreviousSibling(),
                        r = e.getNextSibling(),
                        o = M();
                    return b(o, e.getChildren()), F(n) && t === n.getListType() ? (n.append(o), e.remove(), F(r) && t === r.getListType() && (b(n, r.getChildren()), r.remove()), n) : F(r) && t === r.getListType() ? (r.getFirstChildOrThrow().insertBefore(o), e.remove(), r) : ((t = $(t)).append(o), e.replace(t), k(t), t)
                }

                function k(e, t) {
                    (t || e.getChildren()).forEach((function(e) {
                        var t = e.getValue(),
                            n = e.getParent(),
                            r = 1;
                        null != n && (F(n) ? r = n.getStart() : p(44)), n = e.getPreviousSiblings();
                        for (var o = 0; o < n.length; o++) {
                            var i = n[o];
                            P(i) && !F(i.getFirstChild()) && r++
                        }
                        t !== r && e.setValue(r)
                    }))
                }

                function C(e) {
                    var t = new Set;
                    e.forEach((function(e) {
                        if (!m(e) && !t.has(e.getKey())) {
                            var n = e.getParent(),
                                r = e.getNextSibling(),
                                o = e.getPreviousSibling();
                            if (m(r) && m(o)) F(o = o.getFirstChild()) && (o.append(e), F(e = r.getFirstChild()) && (b(o, e = e.getChildren()), r.remove(), t.add(r.getKey())), k(o));
                            else if (m(r)) F(r = r.getFirstChild()) && (null !== (o = r.getFirstChild()) && o.insertBefore(e), k(r));
                            else if (m(o)) F(r = o.getFirstChild()) && (r.append(e), k(r));
                            else if (F(n)) {
                                var i = M(),
                                    a = $(n.getListType());
                                i.append(a), a.append(e), o ? o.insertAfter(i) : r ? r.insertBefore(i) : n.append(i)
                            }
                            F(n) && k(n)
                        }
                    }))
                }

                function S(e) {
                    e.forEach((function(e) {
                        if (!m(e)) {
                            var t = e.getParent(),
                                n = t ? t.getParent() : void 0,
                                r = n ? n.getParent() : void 0;
                            if (F(r) && P(n) && F(t)) {
                                var o = t ? t.getFirstChild() : void 0,
                                    i = t ? t.getLastChild() : void 0;
                                if (e.is(o)) n.insertBefore(e), t.isEmpty() && n.remove();
                                else if (e.is(i)) n.insertAfter(e), t.isEmpty() && n.remove();
                                else {
                                    var a = t.getListType();
                                    o = M();
                                    var l = $(a);
                                    o.append(l), e.getPreviousSiblings().forEach((function(e) {
                                        return l.append(e)
                                    })), i = M(), a = $(a), i.append(a), b(a, e.getNextSiblings()), n.insertBefore(o), n.insertAfter(i), n.replace(e)
                                }
                                k(t), k(r)
                            }
                        }
                    }))
                }

                function N(e) {
                    var t = f.$getSelection();
                    if (f.$isRangeSelection(t)) {
                        var n = t.getNodes(),
                            r = [];
                        if (0 === n.length && n.push(t.anchor.getNode()), 1 === n.length) {
                            e: {
                                for (n = n[0]; null !== n;) {
                                    if (P(n)) break e;
                                    n = n.getParent()
                                }
                                n = null
                            }
                            null !== n && (r = [n])
                        }
                        else {
                            for (r = new Set, t = 0; t < n.length; t++) {
                                var o = n[t];
                                P(o) && r.add(o)
                            }
                            r = Array.from(r)
                        }
                        0 < r.length && ("indent" === e ? C(r) : S(r))
                    }
                }
                var E = function(e) {
                    s(n, e);
                    var t = c(n);

                    function n(e, r, o) {
                        var a;
                        return i(this, n), (a = t.call(this, o)).__value = void 0 === e ? 1 : e, a.__checked = r, a
                    }
                    return a(n, [{
                        key: "createDOM",
                        value: function(e) {
                            var t = document.createElement("li"),
                                n = this.getParent();
                            return F(n) && (k(n), T(t, this, null, n)), t.value = this.__value, w(t, e.theme, this), t
                        }
                    }, {
                        key: "updateDOM",
                        value: function(e, t, n) {
                            var r = this.getParent();
                            return F(r) && (k(r), T(t, this, e, r)), t.value = this.__value, w(t, n.theme, this), !1
                        }
                    }, {
                        key: "exportJSON",
                        value: function() {
                            return o(o({}, l(u(n.prototype), "exportJSON", this).call(this)), {}, {
                                checked: this.getChecked(),
                                type: "listitem",
                                value: this.getValue(),
                                version: 1
                            })
                        }
                    }, {
                        key: "append",
                        value: function() {
                            for (var e = 0; e < arguments.length; e++) {
                                var t = e < 0 || arguments.length <= e ? void 0 : arguments[e];
                                if (f.$isElementNode(t) && this.canMergeWith(t)) {
                                    var o = t.getChildren();
                                    this.append.apply(this, r(o)), t.remove()
                                } else l(u(n.prototype), "append", this).call(this, t)
                            }
                            return this
                        }
                    }, {
                        key: "replace",
                        value: function(e) {
                            if (P(e)) return l(u(n.prototype), "replace", this).call(this, e);
                            var t = this.getParentOrThrow();
                            if (F(t)) {
                                var r = t.__children,
                                    o = r.length,
                                    i = r.indexOf(this.__key);
                                if (0 === i) t.insertBefore(e);
                                else if (i === o - 1) t.insertAfter(e);
                                else {
                                    r = $(t.getListType());
                                    var a = t.getChildren();
                                    for (i += 1; i < o; i++) r.append(a[i]);
                                    t.insertAfter(e), e.insertAfter(r)
                                }
                                this.remove(), 1 === o && t.remove()
                            }
                            return e
                        }
                    }, {
                        key: "insertAfter",
                        value: function(e) {
                            var t = this.getParentOrThrow();
                            F(t) || p(39);
                            var r = this.getNextSiblings();
                            if (P(e)) return t = l(u(n.prototype), "insertAfter", this).call(this, e), F(e = e.getParentOrThrow()) && k(e), t;
                            if (F(e) && e.getListType() === t.getListType()) {
                                for (t = e, r = (e = e.getChildren()).length - 1; 0 <= r; r--) t = e[r], this.insertAfter(t);
                                return t
                            }
                            if (t.insertAfter(e), 0 !== r.length) {
                                var o = $(t.getListType());
                                r.forEach((function(e) {
                                    return o.append(e)
                                })), e.insertAfter(o)
                            }
                            return e
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            var t = this.getNextSibling();
                            l(u(n.prototype), "remove", this).call(this, e), null !== t && (F(e = t.getParent()) && k(e))
                        }
                    }, {
                        key: "insertNewAfter",
                        value: function() {
                            var e = M(null == this.__checked && void 0);
                            return this.insertAfter(e), e
                        }
                    }, {
                        key: "collapseAtStart",
                        value: function(e) {
                            var t = f.$createParagraphNode();
                            this.getChildren().forEach((function(e) {
                                return t.append(e)
                            }));
                            var n = this.getParentOrThrow(),
                                r = n.getParentOrThrow(),
                                o = P(r);
                            return 1 === n.getChildrenSize() ? o ? (n.remove(), r.select()) : (n.replace(t), n = e.anchor, e = e.focus, r = t.getKey(), "element" === n.type && n.getNode().is(this) && n.set(r, n.offset, "element"), "element" === e.type && e.getNode().is(this) && e.set(r, e.offset, "element")) : (n.insertBefore(t), this.remove()), !0
                        }
                    }, {
                        key: "getValue",
                        value: function() {
                            return this.getLatest().__value
                        }
                    }, {
                        key: "setValue",
                        value: function(e) {
                            this.getWritable().__value = e
                        }
                    }, {
                        key: "getChecked",
                        value: function() {
                            return this.getLatest().__checked
                        }
                    }, {
                        key: "setChecked",
                        value: function(e) {
                            this.getWritable().__checked = e
                        }
                    }, {
                        key: "toggleChecked",
                        value: function() {
                            this.setChecked(!this.__checked)
                        }
                    }, {
                        key: "getIndent",
                        value: function() {
                            var e = this.getParent();
                            if (null === e) return this.getLatest().__indent;
                            e = e.getParentOrThrow();
                            for (var t = 0; P(e);) e = e.getParentOrThrow().getParentOrThrow(), t++;
                            return t
                        }
                    }, {
                        key: "setIndent",
                        value: function(e) {
                            for (var t = this.getIndent(); t !== e;) t < e ? (C([this]), t++) : (S([this]), t--);
                            return this
                        }
                    }, {
                        key: "canIndent",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "insertBefore",
                        value: function(e) {
                            if (P(e)) {
                                var t = this.getParentOrThrow();
                                if (F(t)) k(t, this.getNextSiblings())
                            }
                            return l(u(n.prototype), "insertBefore", this).call(this, e)
                        }
                    }, {
                        key: "canInsertAfter",
                        value: function(e) {
                            return P(e)
                        }
                    }, {
                        key: "canReplaceWith",
                        value: function(e) {
                            return P(e)
                        }
                    }, {
                        key: "canMergeWith",
                        value: function(e) {
                            return f.$isParagraphNode(e) || P(e)
                        }
                    }, {
                        key: "extractWithChild",
                        value: function(e, t) {
                            if (!f.$isRangeSelection(t)) return !1;
                            e = t.anchor.getNode();
                            var n = t.focus.getNode();
                            return this.isParentOf(e) && this.isParentOf(n) && this.getTextContent().length === t.getTextContent().length
                        }
                    }], [{
                        key: "getType",
                        value: function() {
                            return "listitem"
                        }
                    }, {
                        key: "clone",
                        value: function(e) {
                            return new n(e.__value, e.__checked, e.__key)
                        }
                    }, {
                        key: "importDOM",
                        value: function() {
                            return {
                                li: function() {
                                    return {
                                        conversion: O,
                                        priority: 0
                                    }
                                }
                            }
                        }
                    }, {
                        key: "importJSON",
                        value: function(e) {
                            var t = new n(e.value, e.checked);
                            return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                        }
                    }]), n
                }(f.ElementNode);

                function w(e, t, n) {
                    var o = [],
                        i = [],
                        a = (t = t.list) ? t.listitem : void 0;
                    if (t && t.nested) var l = t.nested.listitem;
                    if (void 0 !== a && (a = a.split(" "), o.push.apply(o, r(a))), t) {
                        a = F(a = n.getParent()) && "check" === a.getListType();
                        var u = n.getChecked();
                        a && !u || i.push(t.listitemUnchecked), a && u || i.push(t.listitemChecked), a && o.push(u ? t.listitemChecked : t.listitemUnchecked)
                    }
                    void 0 !== l && (l = l.split(" "), n.getChildren().some((function(e) {
                        return F(e)
                    })) ? o.push.apply(o, r(l)) : i.push.apply(i, r(l))), 0 < i.length && d.removeClassNamesFromElement.apply(d, [e].concat(i)), 0 < o.length && d.addClassNamesToElement.apply(d, [e].concat(o))
                }

                function T(e, t, n, r) {
                    "check" === r.getListType() ? F(t.getFirstChild()) ? (e.removeAttribute("role"), e.removeAttribute("tabIndex"), e.removeAttribute("aria-checked")) : (e.setAttribute("role", "checkbox"), e.setAttribute("tabIndex", "-1"), n && t.__checked === n.__checked || e.setAttribute("aria-checked", t.getChecked() ? "true" : "false")) : null != t.getChecked() && t.setChecked(void 0)
                }

                function O() {
                    return {
                        node: M()
                    }
                }

                function M(e) {
                    return new E(void 0, e)
                }

                function P(e) {
                    return e instanceof E
                }
                var R = function(e) {
                    s(n, e);
                    var t = c(n);

                    function n(e, r, o) {
                        var a;
                        return i(this, n), (a = t.call(this, o)).__listType = e = I[e] || e, a.__tag = "number" === e ? "ol" : "ul", a.__start = r, a
                    }
                    return a(n, [{
                        key: "getTag",
                        value: function() {
                            return this.__tag
                        }
                    }, {
                        key: "getListType",
                        value: function() {
                            return this.__listType
                        }
                    }, {
                        key: "getStart",
                        value: function() {
                            return this.__start
                        }
                    }, {
                        key: "createDOM",
                        value: function(e) {
                            var t = document.createElement(this.__tag);
                            return 1 !== this.__start && t.setAttribute("start", String(this.__start)), t.__lexicalListType = this.__listType, D(t, e.theme, this), t
                        }
                    }, {
                        key: "updateDOM",
                        value: function(e, t, n) {
                            return e.__tag !== this.__tag || (D(t, n.theme, this), !1)
                        }
                    }, {
                        key: "exportJSON",
                        value: function() {
                            return o(o({}, l(u(n.prototype), "exportJSON", this).call(this)), {}, {
                                listType: this.getListType(),
                                start: this.getStart(),
                                tag: this.getTag(),
                                type: "list",
                                version: 1
                            })
                        }
                    }, {
                        key: "canBeEmpty",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "canIndent",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "append",
                        value: function() {
                            for (var e = 0; e < arguments.length; e++) {
                                var t = e < 0 || arguments.length <= e ? void 0 : arguments[e];
                                if (P(t)) l(u(n.prototype), "append", this).call(this, t);
                                else {
                                    var r = M();
                                    F(t) || (t = f.$createTextNode(t.getTextContent())), r.append(t), l(u(n.prototype), "append", this).call(this, r)
                                }
                            }
                            return this
                        }
                    }, {
                        key: "extractWithChild",
                        value: function(e) {
                            return P(e)
                        }
                    }], [{
                        key: "getType",
                        value: function() {
                            return "list"
                        }
                    }, {
                        key: "clone",
                        value: function(e) {
                            return new n(e.__listType || I[e.__tag], e.__start, e.__key)
                        }
                    }, {
                        key: "importDOM",
                        value: function() {
                            return {
                                ol: function() {
                                    return {
                                        conversion: L,
                                        priority: 0
                                    }
                                },
                                ul: function() {
                                    return {
                                        conversion: L,
                                        priority: 0
                                    }
                                }
                            }
                        }
                    }, {
                        key: "importJSON",
                        value: function(e) {
                            var t = $(e.listType, e.start);
                            return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                        }
                    }]), n
                }(f.ElementNode);

                function D(e, t, n) {
                    var o = [],
                        i = [],
                        a = t.list;
                    if (void 0 !== a) {
                        var l, u = a["".concat(n.__tag, "Depth")] || [],
                            s = (t = h(n) - 1) % u.length,
                            c = u[s],
                            f = a[n.__tag];
                        if (void 0 !== (a = a.nested) && a.list && (l = a.list), void 0 !== f && o.push(f), void 0 !== c)
                            for (c = c.split(" "), o.push.apply(o, r(c)), c = 0; c < u.length; c++) c !== s && i.push(n.__tag + c);
                        void 0 !== l && (n = l.split(" "), 1 < t ? o.push.apply(o, r(n)) : i.push.apply(i, r(n)))
                    }
                    0 < i.length && d.removeClassNamesFromElement.apply(d, [e].concat(i)), 0 < o.length && d.addClassNamesToElement.apply(d, [e].concat(o))
                }

                function A(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var r = e[n];
                        P(r) ? (t.push(r), r.getChildren().forEach((function(e) {
                            F(e) && t.push(y(e))
                        }))) : t.push(y(r))
                    }
                    return t
                }

                function L(e) {
                    var t = null;
                    return "ol" === (e = e.nodeName.toLowerCase()) ? t = $("number") : "ul" === e && (t = $("bullet")), {
                        after: A,
                        node: t
                    }
                }
                var I = {
                    ol: "number",
                    ul: "bullet"
                };

                function $(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return new R(e, t)
                }

                function F(e) {
                    return e instanceof R
                }
                var j = f.createCommand(),
                    z = f.createCommand(),
                    B = f.createCommand(),
                    U = f.createCommand();
                t.$createListItemNode = M, t.$createListNode = $, t.$getListDepth = h, t.$handleListInsertParagraph = function() {
                    var e = f.$getSelection();
                    if (!f.$isRangeSelection(e) || !e.isCollapsed()) return !1;
                    if (!P(e = e.anchor.getNode()) || "" !== e.getTextContent()) return !1;
                    var t = g(e),
                        n = e.getParent();
                    F(n) || p(40);
                    var r, o = n.getParent();
                    if (f.$isRootNode(o)) r = f.$createParagraphNode(), t.insertAfter(r);
                    else {
                        if (!P(o)) return !1;
                        r = M(), o.insertAfter(r)
                    }
                    if (r.select(), 0 < (t = e.getNextSiblings()).length) {
                        var i = $(n.getListType());
                        f.$isParagraphNode(r) ? r.insertAfter(i) : ((n = M()).append(i), r.insertAfter(n)), t.forEach((function(e) {
                            e.remove(), i.append(e)
                        }))
                    }
                    return function(e) {
                        for (; null == e.getNextSibling() && null == e.getPreviousSibling();) {
                            var t = e.getParent();
                            if (null == t || !P(e) && !F(e)) break;
                            e = t
                        }
                        e.remove()
                    }(e), !0
                }, t.$isListItemNode = P, t.$isListNode = F, t.INSERT_CHECK_LIST_COMMAND = B, t.INSERT_ORDERED_LIST_COMMAND = z, t.INSERT_UNORDERED_LIST_COMMAND = j, t.ListItemNode = E, t.ListNode = R, t.REMOVE_LIST_COMMAND = U, t.indentList = function() {
                    N("indent")
                }, t.insertList = function(e, t) {
                    e.update((function() {
                        var e = f.$getSelection();
                        if (f.$isRangeSelection(e)) {
                            var n = e.getNodes(),
                                r = (e = e.anchor.getNode()).getParent();
                            if (_(e, n)) n = $(t), f.$isRootNode(r) ? (e.replace(n), e = M(), n.append(e)) : P(e) && (b(n, (e = e.getParentOrThrow()).getChildren()), e.replace(n));
                            else
                                for (e = new Set, r = 0; r < n.length; r++) {
                                    var o = n[r];
                                    if (f.$isElementNode(o) && o.isEmpty() && !e.has(o.getKey())) x(o, t);
                                    else if (f.$isLeafNode(o))
                                        for (o = o.getParent(); null != o;) {
                                            var i = o.getKey();
                                            if (F(o)) {
                                                if (!e.has(i)) {
                                                    var a = $(t);
                                                    b(a, o.getChildren()), o.replace(a), k(a), e.add(i)
                                                }
                                                break
                                            }
                                            if (a = o.getParent(), f.$isRootNode(a) && !e.has(i)) {
                                                e.add(i), x(o, t);
                                                break
                                            }
                                            o = a
                                        }
                                }
                        }
                    }))
                }, t.outdentList = function() {
                    N("outdent")
                }, t.removeList = function(e) {
                    e.update((function() {
                        var e = f.$getSelection();
                        if (f.$isRangeSelection(e)) {
                            var t = new Set,
                                n = e.getNodes();
                            if (_(e = e.anchor.getNode(), n)) t.add(g(e));
                            else
                                for (e = 0; e < n.length; e++) {
                                    var r = n[e];
                                    f.$isLeafNode(r) && (null != (r = d.$getNearestNodeOfType(r, E)) && t.add(g(r)))
                                }
                            t.forEach((function(e) {
                                var t = e;
                                v(e).forEach((function(e) {
                                    if (null != e) {
                                        var n = f.$createParagraphNode();
                                        b(n, e.getChildren()), t.insertAfter(n), t = n, e.remove()
                                    }
                                })), e.remove()
                            }))
                        }
                    }))
                }
            },
            7022: function(e, t, n) {
                "use strict";
                var r = n(6164);
                e.exports = r
            },
            6164: function(e, t, n) {
                "use strict";
                var r = n(7424).default,
                    o = n(1665),
                    i = n(2791);
                t.AutoFocusPlugin = function() {
                    var e = o.useLexicalComposerContext(),
                        t = r(e, 1)[0];
                    return i.useEffect((function() {
                        t.focus((function() {
                            var e = document.activeElement,
                                n = t.getRootElement();
                            n.contains(e) && null === n && null !== e || n.focus({
                                preventScroll: !0
                            })
                        }))
                    }), [t]), null
                }
            },
            5224: function(e, t, n) {
                "use strict";
                var r = n(3653);
                e.exports = r
            },
            3653: function(e, t, n) {
                "use strict";
                var r = n(7424).default,
                    o = n(1665),
                    i = n(5523),
                    a = n(2791),
                    l = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? a.useLayoutEffect : a.useEffect,
                    u = {
                        tag: "history-merge"
                    };
                t.LexicalComposer = function(e) {
                    var t = e.initialConfig,
                        n = e.children,
                        s = a.useMemo((function() {
                            var e = t.theme,
                                n = t.namespace,
                                r = t.editor__DEPRECATED,
                                a = t.nodes,
                                l = t.onError,
                                s = t.editorState,
                                c = o.createLexicalComposerContext(null, e),
                                f = r || null;
                            if (null === f) {
                                var d = i.createEditor({
                                    namespace: n,
                                    nodes: a,
                                    onError: function(e) {
                                        return l(e, d)
                                    },
                                    readOnly: !0,
                                    theme: e
                                });
                                ! function(e, t) {
                                    if (null !== t && void 0 !== t && null !== t) switch (typeof t) {
                                        case "string":
                                            var n = e.parseEditorState(t);
                                            e.setEditorState(n, u);
                                            break;
                                        case "object":
                                            e.setEditorState(t, u);
                                            break;
                                        case "function":
                                            e.update((function() {
                                                i.$getRoot().isEmpty() && t(e)
                                            }), u)
                                    }
                                }(d, s), f = d
                            }
                            return [f, c]
                        }), []);
                    return l((function() {
                        var e = t.readOnly;
                        r(s, 1)[0].setReadOnly(e || !1)
                    }), []), a.createElement(o.LexicalComposerContext.Provider, {
                        value: s
                    }, n)
                }
            },
            1665: function(e, t, n) {
                "use strict";
                var r = n(2916);
                e.exports = r
            },
            2916: function(e, t, n) {
                "use strict";
                var r = n(2791),
                    o = r.createContext(null);
                t.LexicalComposerContext = o, t.createLexicalComposerContext = function(e, t) {
                    var n = null;
                    return null != e && (n = e[1]), {
                        getTheme: function() {
                            return null != t ? t : null != n ? n.getTheme() : null
                        }
                    }
                }, t.useLexicalComposerContext = function() {
                    var e = r.useContext(o);
                    if (null == e) throw Error("Minified Lexical error #8; see codes.json for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
                    return e
                }
            },
            4588: function(e, t, n) {
                "use strict";
                var r = n(7921);
                e.exports = r
            },
            7921: function(e, t, n) {
                "use strict";
                var r = n(7424).default,
                    o = n(1665),
                    i = n(2791),
                    a = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? i.useLayoutEffect : i.useEffect;
                t.ContentEditable = function(e) {
                    var t = e.ariaActiveDescendantID,
                        n = e.ariaAutoComplete,
                        l = e.ariaControls,
                        u = e.ariaDescribedBy,
                        s = e.ariaExpanded,
                        c = e.ariaLabel,
                        f = e.ariaLabelledBy,
                        d = e.ariaMultiline,
                        p = e.ariaOwneeID,
                        h = e.ariaRequired,
                        g = e.autoCapitalize,
                        v = e.autoComplete,
                        m = e.autoCorrect,
                        y = e.className,
                        _ = e.id,
                        b = e.role,
                        x = void 0 === b ? "textbox" : b,
                        k = e.spellCheck,
                        C = void 0 === k || k,
                        S = e.style,
                        N = e.tabIndex,
                        E = e.testid,
                        w = o.useLexicalComposerContext(),
                        T = r(w, 1)[0],
                        O = i.useState(!0),
                        M = r(O, 2),
                        P = M[0],
                        R = M[1],
                        D = i.useCallback((function(e) {
                            T.setRootElement(e)
                        }), [T]);
                    return a((function() {
                        return R(T.isReadOnly()), T.registerReadOnlyListener((function(e) {
                            R(e)
                        }))
                    }), [T]), i.createElement("div", {
                        "aria-activedescendant": P ? null : t,
                        "aria-autocomplete": P ? null : n,
                        "aria-controls": P ? null : l,
                        "aria-describedby": u,
                        "aria-expanded": P ? null : "combobox" === x ? !!s : null,
                        "aria-label": c,
                        "aria-labelledby": f,
                        "aria-multiline": d,
                        "aria-owns": P ? null : p,
                        "aria-required": h,
                        autoCapitalize: void 0 !== g ? String(g) : void 0,
                        autoComplete: v,
                        autoCorrect: void 0 !== m ? String(m) : void 0,
                        className: y,
                        contentEditable: !P,
                        "data-testid": E,
                        id: _,
                        ref: D,
                        role: P ? void 0 : x,
                        spellCheck: C,
                        style: S,
                        tabIndex: N
                    })
                }
            },
            3527: function(e, t, n) {
                "use strict";
                var r = n(6400);
                e.exports = r
            },
            6400: function(e, t, n) {
                "use strict";
                var r = n(7424).default,
                    o = n(1665),
                    i = n(7711),
                    a = n(2791);
                t.createEmptyHistoryState = i.createEmptyHistoryState, t.HistoryPlugin = function(e) {
                    var t = e.externalHistoryState,
                        n = o.useLexicalComposerContext();
                    return function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                            r = a.useMemo((function() {
                                return t || i.createEmptyHistoryState()
                            }), [t]);
                        a.useEffect((function() {
                            return i.registerHistory(e, r, n)
                        }), [n, e, r])
                    }(r(n, 1)[0], t), null
                }
            },
            6010: function(e, t, n) {
                "use strict";
                var r = n(1724);
                e.exports = r
            },
            1724: function(e, t, n) {
                "use strict";
                var r = n(7424).default,
                    o = n(6868),
                    i = n(1665),
                    a = n(2791),
                    l = n(4140),
                    u = n(5523);
                t.ListPlugin = function() {
                    var e = i.useLexicalComposerContext(),
                        t = r(e, 1)[0];
                    return a.useEffect((function() {
                            if (!t.hasNodes([o.ListNode, o.ListItemNode])) throw Error("ListPlugin: ListNode and/or ListItemNode not registered on editor")
                        }), [t]),
                        function(e) {
                            a.useEffect((function() {
                                return l.mergeRegister(e.registerCommand(u.INDENT_CONTENT_COMMAND, (function() {
                                    return o.indentList(), !1
                                }), u.COMMAND_PRIORITY_LOW), e.registerCommand(u.OUTDENT_CONTENT_COMMAND, (function() {
                                    return o.outdentList(), !1
                                }), u.COMMAND_PRIORITY_LOW), e.registerCommand(o.INSERT_ORDERED_LIST_COMMAND, (function() {
                                    return o.insertList(e, "number"), !0
                                }), u.COMMAND_PRIORITY_LOW), e.registerCommand(o.INSERT_UNORDERED_LIST_COMMAND, (function() {
                                    return o.insertList(e, "bullet"), !0
                                }), u.COMMAND_PRIORITY_LOW), e.registerCommand(o.REMOVE_LIST_COMMAND, (function() {
                                    return o.removeList(e), !0
                                }), u.COMMAND_PRIORITY_LOW), e.registerCommand(u.INSERT_PARAGRAPH_COMMAND, (function() {
                                    return !!o.$handleListInsertParagraph()
                                }), u.COMMAND_PRIORITY_LOW))
                            }), [e])
                        }(t), null
                }
            },
            5528: function(e, t, n) {
                "use strict";
                var r = n(6793);
                e.exports = r
            },
            6793: function(e, t, n) {
                "use strict";
                var r = n(7424).default,
                    o = n(1665),
                    i = n(2791),
                    a = n(4249),
                    l = n(4140),
                    u = n(4164),
                    s = n(6700),
                    c = n(9473),
                    f = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? i.useLayoutEffect : i.useEffect;

                function d(e) {
                    return e.getEditorState().read(a.$canShowPlaceholderCurry(e.isComposing(), e.isReadOnly()))
                }
                t.RichTextPlugin = function(e) {
                    var t = e.contentEditable,
                        n = e.placeholder,
                        a = e.initialEditorState,
                        p = o.useLexicalComposerContext(),
                        h = r(p, 1)[0],
                        g = function(e) {
                            var t = i.useState((function() {
                                    return d(e)
                                })),
                                n = r(t, 2),
                                o = n[0],
                                a = n[1];
                            return f((function() {
                                function t() {
                                    var t = d(e);
                                    a(t)
                                }
                                return t(), l.mergeRegister(e.registerUpdateListener((function() {
                                    t()
                                })), e.registerReadOnlyListener((function() {
                                    t()
                                })))
                            }), [e]), o
                        }(h),
                        v = function(e) {
                            var t = i.useState((function() {
                                    return e.getDecorators()
                                })),
                                n = r(t, 2),
                                o = n[0],
                                a = n[1];
                            return f((function() {
                                return e.registerDecoratorListener((function(e) {
                                    u.flushSync((function() {
                                        a(e)
                                    }))
                                }))
                            }), [e]), i.useEffect((function() {
                                a(e.getDecorators())
                            }), [e]), i.useMemo((function() {
                                for (var t = [], n = Object.keys(o), r = 0; r < n.length; r++) {
                                    var i = n[r],
                                        a = o[i];
                                    null !== (i = e.getElementByKey(i)) && t.push(u.createPortal(a, i))
                                }
                                return t
                            }), [o, e])
                        }(h);
                    return function(e, t) {
                        f((function() {
                            return l.mergeRegister(c.registerRichText(e, t), s.registerDragonSupport(e))
                        }), [e])
                    }(h, a), i.createElement(i.Fragment, null, t, g && n, v)
                }
            },
            9473: function(e, t, n) {
                "use strict";
                var r = n(7421);
                e.exports = r
            },
            7421: function(e, t, n) {
                "use strict";
                var r = n(4704).default,
                    o = n(2122).default,
                    i = n(6690).default,
                    a = n(9728).default,
                    l = n(1588).default,
                    u = n(3808).default,
                    s = n(1655).default,
                    c = n(6389).default,
                    f = n(2357),
                    d = n(9689),
                    p = n(4140),
                    h = n(5523),
                    g = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
                    v = g && "documentMode" in document ? document.documentMode : null;
                g && /Mac|iPod|iPhone|iPad/.test(navigator.platform), g && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
                var m = !(!g || !("InputEvent" in window) || v) && "getTargetRanges" in new window.InputEvent("input"),
                    y = g && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
                    _ = g && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                    b = {
                        tag: "history-merge"
                    },
                    x = function(e) {
                        s(n, e);
                        var t = c(n);

                        function n(e) {
                            return i(this, n), t.call(this, e)
                        }
                        return a(n, [{
                            key: "createDOM",
                            value: function(e) {
                                var t = document.createElement("blockquote");
                                return p.addClassNamesToElement(t, e.theme.quote), t
                            }
                        }, {
                            key: "updateDOM",
                            value: function() {
                                return !1
                            }
                        }, {
                            key: "exportJSON",
                            value: function() {
                                return o(o({}, l(u(n.prototype), "exportJSON", this).call(this)), {}, {
                                    type: "quote"
                                })
                            }
                        }, {
                            key: "insertNewAfter",
                            value: function() {
                                var e = h.$createParagraphNode(),
                                    t = this.getDirection();
                                return e.setDirection(t), this.insertAfter(e), e
                            }
                        }, {
                            key: "collapseAtStart",
                            value: function() {
                                var e = h.$createParagraphNode();
                                return this.getChildren().forEach((function(t) {
                                    return e.append(t)
                                })), this.replace(e), !0
                            }
                        }], [{
                            key: "getType",
                            value: function() {
                                return "quote"
                            }
                        }, {
                            key: "clone",
                            value: function(e) {
                                return new n(e.__key)
                            }
                        }, {
                            key: "importDOM",
                            value: function() {
                                return {
                                    blockquote: function() {
                                        return {
                                            conversion: N,
                                            priority: 0
                                        }
                                    }
                                }
                            }
                        }, {
                            key: "importJSON",
                            value: function(e) {
                                var t = k();
                                return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                            }
                        }]), n
                    }(h.ElementNode);

                function k() {
                    return new x
                }
                var C = function(e) {
                    s(n, e);
                    var t = c(n);

                    function n(e, r) {
                        var o;
                        return i(this, n), (o = t.call(this, r)).__tag = e, o
                    }
                    return a(n, [{
                        key: "getTag",
                        value: function() {
                            return this.__tag
                        }
                    }, {
                        key: "createDOM",
                        value: function(e) {
                            var t = this.__tag,
                                n = document.createElement(t);
                            return void 0 !== (e = e.theme.heading) && p.addClassNamesToElement(n, e[t]), n
                        }
                    }, {
                        key: "updateDOM",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "exportJSON",
                        value: function() {
                            return o(o({}, l(u(n.prototype), "exportJSON", this).call(this)), {}, {
                                tag: this.getTag(),
                                type: "heading",
                                version: 1
                            })
                        }
                    }, {
                        key: "insertNewAfter",
                        value: function() {
                            var e = h.$createParagraphNode(),
                                t = this.getDirection();
                            return e.setDirection(t), this.insertAfter(e), e
                        }
                    }, {
                        key: "collapseAtStart",
                        value: function() {
                            var e = h.$createParagraphNode();
                            return this.getChildren().forEach((function(t) {
                                return e.append(t)
                            })), this.replace(e), !0
                        }
                    }, {
                        key: "extractWithChild",
                        value: function() {
                            return !0
                        }
                    }], [{
                        key: "getType",
                        value: function() {
                            return "heading"
                        }
                    }, {
                        key: "clone",
                        value: function(e) {
                            return new n(e.__tag, e.__key)
                        }
                    }, {
                        key: "importDOM",
                        value: function() {
                            return {
                                h1: function() {
                                    return {
                                        conversion: S,
                                        priority: 0
                                    }
                                },
                                h2: function() {
                                    return {
                                        conversion: S,
                                        priority: 0
                                    }
                                },
                                h3: function() {
                                    return {
                                        conversion: S,
                                        priority: 0
                                    }
                                },
                                h4: function() {
                                    return {
                                        conversion: S,
                                        priority: 0
                                    }
                                },
                                h5: function() {
                                    return {
                                        conversion: S,
                                        priority: 0
                                    }
                                },
                                h6: function() {
                                    return {
                                        conversion: S,
                                        priority: 0
                                    }
                                }
                            }
                        }
                    }, {
                        key: "importJSON",
                        value: function(e) {
                            var t = E(e.tag);
                            return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                        }
                    }]), n
                }(h.ElementNode);

                function S(e) {
                    var t = null;
                    return "h1" !== (e = e.nodeName.toLowerCase()) && "h2" !== e && "h3" !== e && "h4" !== e && "h5" !== e && "h6" !== e || (t = E(e)), {
                        node: t
                    }
                }

                function N() {
                    return {
                        node: k()
                    }
                }

                function E(e) {
                    return new C(e)
                }

                function w(e, t) {
                    e.preventDefault();
                    var n = h.$getSelection();
                    if (null !== n) {
                        e = e.clipboardData;
                        var r = f.$getHtmlContent(t);
                        t = f.$getLexicalContent(t), null != e ? (null !== r && e.setData("text/html", r), null !== t && e.setData("application/x-lexical-editor", t), n = n.getTextContent(), e.setData("text/plain", n)) : null != (n = navigator.clipboard) && (e = [new ClipboardItem({
                            "text/html": new Blob([r], {
                                type: "text/html"
                            })
                        })], n.write(e))
                    }
                }

                function T(e, t) {
                    var n = h.$getSelection();
                    if (h.$isRangeSelection(n)) {
                        var r = new Set;
                        n = n.getNodes();
                        for (var o = 0; o < n.length; o++) {
                            var i = n[o],
                                a = i.getKey();
                            r.has(a) || (r.add(a), (a = p.$getNearestBlockElementAncestorOrThrow(i)).canInsertTab() ? e(i) : a.canIndent() && t(a))
                        }
                    }
                }

                function O(e) {
                    return e = h.$getNearestNodeFromDOMNode(e), h.$isDecoratorNode(e)
                }
                t.$createHeadingNode = E, t.$createQuoteNode = k, t.$isHeadingNode = function(e) {
                    return e instanceof C
                }, t.$isQuoteNode = function(e) {
                    return e instanceof x
                }, t.HeadingNode = C, t.QuoteNode = x, t.registerRichText = function(e, t) {
                    var n = p.mergeRegister(e.registerCommand(h.CLICK_COMMAND, (function() {
                        var e = h.$getSelection();
                        return !!h.$isNodeSelection(e) && (e.clear(), !0)
                    }), 0), e.registerCommand(h.DELETE_CHARACTER_COMMAND, (function(e) {
                        var t = h.$getSelection();
                        return !!h.$isRangeSelection(t) && (t.deleteCharacter(e), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.DELETE_WORD_COMMAND, (function(e) {
                        var t = h.$getSelection();
                        return !!h.$isRangeSelection(t) && (t.deleteWord(e), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.DELETE_LINE_COMMAND, (function(e) {
                        var t = h.$getSelection();
                        return !!h.$isRangeSelection(t) && (t.deleteLine(e), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.CONTROLLED_TEXT_INSERTION_COMMAND, (function(t) {
                        var n = h.$getSelection();
                        if ("string" === typeof t) h.$isRangeSelection(n) ? n.insertText(t) : h.$isGridSelection(n);
                        else {
                            if (!h.$isRangeSelection(n) && !h.$isGridSelection(n)) return !1;
                            var r = t.dataTransfer;
                            null != r ? f.$insertDataTransferForRichText(r, n, e) : h.$isRangeSelection(n) && (t = t.data) && n.insertText(t)
                        }
                        return !0
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.REMOVE_TEXT_COMMAND, (function() {
                        var e = h.$getSelection();
                        return !!h.$isRangeSelection(e) && (e.removeText(), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.FORMAT_TEXT_COMMAND, (function(e) {
                        var t = h.$getSelection();
                        return !!h.$isRangeSelection(t) && (t.formatText(e), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.FORMAT_ELEMENT_COMMAND, (function(e) {
                        var t = h.$getSelection();
                        if (!h.$isRangeSelection(t) && !h.$isNodeSelection(t)) return !1;
                        t = t.getNodes();
                        var n, o = r(t);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var i = n.value;
                                p.$getNearestBlockElementAncestorOrThrow(i).setFormat(e)
                            }
                        } catch (a) {
                            o.e(a)
                        } finally {
                            o.f()
                        }
                        return !0
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.INSERT_LINE_BREAK_COMMAND, (function(e) {
                        var t = h.$getSelection();
                        return !!h.$isRangeSelection(t) && (t.insertLineBreak(e), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.INSERT_PARAGRAPH_COMMAND, (function() {
                        var e = h.$getSelection();
                        return !!h.$isRangeSelection(e) && (e.insertParagraph(), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.INDENT_CONTENT_COMMAND, (function() {
                        return T((function() {
                            e.dispatchCommand(h.CONTROLLED_TEXT_INSERTION_COMMAND, "\t")
                        }), (function(e) {
                            var t = e.getIndent();
                            10 !== t && e.setIndent(t + 1)
                        })), !0
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.OUTDENT_CONTENT_COMMAND, (function() {
                        return T((function(t) {
                            h.$isTextNode(t) && ("\t" === (t = t.getTextContent())[t.length - 1] && e.dispatchCommand(h.DELETE_CHARACTER_COMMAND, !0))
                        }), (function(e) {
                            var t = e.getIndent();
                            0 !== t && e.setIndent(t - 1)
                        })), !0
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.KEY_ARROW_LEFT_COMMAND, (function(e) {
                        var t = h.$getSelection();
                        if (!h.$isRangeSelection(t)) return !1;
                        var n = e.shiftKey;
                        return !!d.$shouldOverrideDefaultCharacterSelection(t, !0) && (e.preventDefault(), d.$moveCharacter(t, n, !0), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.KEY_ARROW_RIGHT_COMMAND, (function(e) {
                        var t = h.$getSelection();
                        if (!h.$isRangeSelection(t)) return !1;
                        var n = e.shiftKey;
                        return !!d.$shouldOverrideDefaultCharacterSelection(t, !1) && (e.preventDefault(), d.$moveCharacter(t, n, !1), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.KEY_BACKSPACE_COMMAND, (function(t) {
                        if (O(t.target)) return !1;
                        var n = h.$getSelection();
                        return !!h.$isRangeSelection(n) && (t.preventDefault(), t = n.anchor, n.isCollapsed() && 0 === t.offset && 0 < p.$getNearestBlockElementAncestorOrThrow(t.getNode()).getIndent() ? e.dispatchCommand(h.OUTDENT_CONTENT_COMMAND, void 0) : e.dispatchCommand(h.DELETE_CHARACTER_COMMAND, !0))
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.KEY_DELETE_COMMAND, (function(t) {
                        if (O(t.target)) return !1;
                        var n = h.$getSelection();
                        return !!h.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(h.DELETE_CHARACTER_COMMAND, !1))
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.KEY_ENTER_COMMAND, (function(t) {
                        var n = h.$getSelection();
                        if (!h.$isRangeSelection(n)) return !1;
                        if (null !== t) {
                            if ((_ || y) && m) return !1;
                            if (t.preventDefault(), t.shiftKey) return e.dispatchCommand(h.INSERT_LINE_BREAK_COMMAND, !1)
                        }
                        return e.dispatchCommand(h.INSERT_PARAGRAPH_COMMAND, void 0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.KEY_TAB_COMMAND, (function(t) {
                        var n = h.$getSelection();
                        return !!h.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(t.shiftKey ? h.OUTDENT_CONTENT_COMMAND : h.INDENT_CONTENT_COMMAND, void 0))
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.KEY_ESCAPE_COMMAND, (function() {
                        var t = h.$getSelection();
                        return !!h.$isRangeSelection(t) && (e.blur(), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.DROP_COMMAND, (function(e) {
                        var t = h.$getSelection();
                        return !!h.$isRangeSelection(t) && (e.preventDefault(), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.DRAGSTART_COMMAND, (function(e) {
                        var t = h.$getSelection();
                        return !!h.$isRangeSelection(t) && (e.preventDefault(), !0)
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.COPY_COMMAND, (function(t) {
                        return w(t, e), !0
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.CUT_COMMAND, (function(t) {
                        return function(e, t) {
                            w(e, t), e = h.$getSelection(), h.$isRangeSelection(e) ? e.removeText() : h.$isNodeSelection(e) && e.getNodes().forEach((function(e) {
                                return e.remove()
                            }))
                        }(t, e), !0
                    }), h.COMMAND_PRIORITY_EDITOR), e.registerCommand(h.PASTE_COMMAND, (function(t) {
                        var n = h.$getSelection();
                        return !(!h.$isRangeSelection(n) && !h.$isGridSelection(n)) && (function(e, t) {
                            e.preventDefault(), t.update((function() {
                                var n = h.$getSelection(),
                                    r = e.clipboardData;
                                null != r && (h.$isRangeSelection(n) || h.$isGridSelection(n)) && f.$insertDataTransferForRichText(r, n, t)
                            }))
                        }(t, e), !0)
                    }), h.COMMAND_PRIORITY_EDITOR));
                    return function(e, t) {
                        if (null !== t)
                            if (void 0 === t) e.update((function() {
                                var t = h.$getRoot();
                                if (t.isEmpty()) {
                                    var n = h.$createParagraphNode();
                                    t.append(n), t = document.activeElement, (null !== h.$getSelection() || null !== t && t === e.getRootElement()) && n.select()
                                }
                            }), b);
                            else if (null !== t) switch (typeof t) {
                            case "string":
                                var n = e.parseEditorState(t);
                                e.setEditorState(n, b);
                                break;
                            case "object":
                                e.setEditorState(t, b);
                                break;
                            case "function":
                                e.update((function() {
                                    h.$getRoot().isEmpty() && t(e)
                                }), b)
                        }
                    }(e, t), n
                }
            },
            9689: function(e, t, n) {
                "use strict";
                var r = n(161);
                e.exports = r
            },
            161: function(e, t, n) {
                "use strict";
                var r = n(4704).default,
                    o = n(2122).default,
                    i = n(7424).default,
                    a = n(5523),
                    l = new Map;

                function u(e) {
                    var t = (e = e.getLatest()).constructor.clone(e);
                    return t.__parent = e.__parent, a.$isElementNode(e) && a.$isElementNode(t) ? (t.__children = Array.from(e.__children), t.__format = e.__format, t.__indent = e.__indent, t.__dir = e.__dir) : a.$isTextNode(e) && a.$isTextNode(t) && (t.__format = e.__format, t.__style = e.__style, t.__mode = e.__mode, t.__detail = e.__detail), t
                }

                function s(e, t, n, r, o, i) {
                    for (var l = t; null !== e;) {
                        for (t = e.getParent(); null !== t && t.excludeFromCopy("clone");) t = t.getParent();
                        if (null === t) break;
                        if (!a.$isElementNode(e) || !e.excludeFromCopy("clone")) {
                            var s = e.getKey(),
                                c = i.get(s),
                                f = void 0 === c;
                            if (f && (c = u(e), i.set(s, c)), !a.$isTextNode(c) || c.isSegmented() || c.isToken() ? a.$isElementNode(c) && (c.__children = c.__children.slice(r ? l : 0, r ? void 0 : (l || 0) + 1)) : c.__text = c.__text.slice(r ? l : 0, r ? n : l), a.$isRootNode(t)) {
                                f && o.push(s);
                                break
                            }
                        }
                        l = i.get(t.getKey()), l = a.$isElementNode(l) ? l.__children.indexOf(e.getKey()) : e.getIndexWithinParent(), e = t
                    }
                }

                function c(e) {
                    return l.get(e) || null
                }

                function f(e, t) {
                    var n = c(e.getStyle());
                    for (r in t = n ? o(o({}, n), t) : t, n = "", t) r && (n += "".concat(r, ": ").concat(t[r], ";"));
                    var r = n;
                    e.setStyle(r), l.set(r, t)
                }

                function d(e, t, n, r) {
                    e.modify(t ? "extend" : "move", n, r)
                }

                function p(e) {
                    return e = e.anchor.getNode(), "rtl" === (a.$isRootNode(e) ? e : e.getParentOrThrow()).getDirection()
                }

                function h(e) {
                    for (; null !== e && !a.$isRootNode(e);) {
                        var t = e.getLatest(),
                            n = e.getParent();
                        0 === t.__children.length && e.remove(!0), e = n
                    }
                }

                function g(e) {
                    for (; null != e;) {
                        if (e.nodeType === Node.TEXT_NODE) return e;
                        e = e.firstChild
                    }
                    return null
                }

                function v(e) {
                    var t = e.parentNode;
                    if (null == t) throw Error("Should never happen");
                    return [t, Array.from(t.childNodes).indexOf(e)]
                }
                t.$addNodeStyle = function(e) {
                    var t, n = {},
                        o = (e = e.getStyle()).split(";"),
                        i = r(o);
                    try {
                        for (i.s(); !(t = i.n()).done;) {
                            var a = t.value;
                            "" !== a && (n[(o = a.split(":"))[0].trim()] = o[1].trim())
                        }
                    } catch (u) {
                        i.e(u)
                    } finally {
                        i.f()
                    }
                    l.set(e, n)
                }, t.$cloneContents = function(e) {
                    return function(e) {
                        if (a.$isRangeSelection(e)) {
                            var t = e.anchor,
                                n = e.focus,
                                r = e.getCharacterOffsets(),
                                o = i(r, 2),
                                l = o[0],
                                c = o[1];
                            if (0 === (e = e.getNodes()).length) return {
                                nodeMap: [],
                                range: []
                            };
                            var f = e.length,
                                d = e[0],
                                p = d.getParent();
                            if (null !== p && (!p.canBeEmpty() || a.$isRootNode(p))) {
                                var h = p.__children;
                                if (h.length === f) {
                                    for (var g = !0, v = 0; v < h.length; v++)
                                        if (h[v] !== e[v].__key) {
                                            g = !1;
                                            break
                                        } g && (f++, e.push(p))
                                }
                            }
                            for (p = e[f - 1], t = t.isBefore(n), n = new Map, h = [], s(d, t ? l : c, (g = a.$isTextNode(d) && 1 === f) ? t ? c : l : void 0, !0, h, n), d = 0; d < f; d++) {
                                var m = (v = e[d]).getKey();
                                if (!(n.has(m) || a.$isElementNode(v) && v.excludeFromCopy("clone"))) {
                                    var y = u(v);
                                    a.$isRootNode(v.getParent()) && h.push(v.getKey()), "root" !== m && n.set(m, y)
                                }
                            }
                            return s(p, g ? void 0 : t ? c : l, void 0, !1, h, n), {
                                nodeMap: Array.from(n.entries()),
                                range: h
                            }
                        }
                        if (a.$isGridSelection(e)) return {
                            nodeMap: e.getNodes().map((function(e) {
                                return [e.getKey(), e = u(e)]
                            })),
                            range: [e.gridKey]
                        };
                        throw Error("Minified Lexical error #1; see codes.json for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")
                    }(e)
                }, t.$cloneWithProperties = u, t.$getSelectionStyleValueForProperty = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        r = null,
                        o = e.getNodes(),
                        i = e.anchor,
                        l = e.focus,
                        u = e.isBackward();
                    for (e = u ? l.offset : i.offset, i = u ? l.getNode() : i.getNode(), l = 0; l < o.length; l++) {
                        var s = o[l];
                        if ((0 === l || 0 !== e || !s.is(i)) && a.$isTextNode(s)) {
                            u = t;
                            var f = n;
                            if (u = null !== (s = c(s = s.getStyle())) && s[u] || f, null === r) r = u;
                            else if (r !== u) {
                                r = "";
                                break
                            }
                        }
                    }
                    return null === r ? n : r
                }, t.$isAtNodeEnd = function(e) {
                    return "text" === e.type ? e.offset === e.getNode().getTextContentSize() : e.offset === e.getNode().getChildrenSize()
                }, t.$isParentElementRTL = p, t.$moveCaretSelection = d, t.$moveCharacter = function(e, t, n) {
                    var r = p(e);
                    d(e, t, n ? !r : r, "character")
                }, t.$patchStyleText = function(e, t) {
                    var n = e.getNodes(),
                        r = n.length - 1,
                        o = n[0],
                        l = n[r];
                    if (!e.isCollapsed()) {
                        var u = e.anchor,
                            s = e.focus;
                        e = o.getTextContent().length;
                        var c = s.offset,
                            d = u.offset;
                        if (u = (s = u.isBefore(s)) ? d : c, s = s ? c : d, u === o.getTextContentSize()) {
                            var p = o.getNextSibling();
                            a.$isTextNode(p) && (u = d = 0, o = p)
                        }
                        if (o.is(l)) a.$isTextNode(o) && ((u = d > c ? c : d) !== (s = d > c ? d : c) && (0 === u && s === e ? (f(o, t), o.select(u, s)) : (n = o.splitText(u, s), f(n = 0 === u ? n[0] : n[1], t), n.select(0, s - u))));
                        else
                            for (a.$isTextNode(o) && (0 !== u && (o = o.splitText(u)[1]), f(o, t)), a.$isTextNode(l) && (s !== (e = l.getTextContent().length) && (h = l.splitText(s), l = i(h, 1)[0]), 0 !== s && f(l, t)), e = 1; e < r; e++) {
                                var h;
                                d = (c = n[e]).getKey(), a.$isTextNode(c) && d !== o.getKey() && d !== l.getKey() && !c.isToken() && f(c, t)
                            }
                    }
                }, t.$selectAll = function(e) {
                    var t = e.anchor;
                    e = e.focus;
                    var n = t.getNode().getTopLevelElementOrThrow().getParentOrThrow(),
                        r = n.getFirstDescendant();
                    n = n.getLastDescendant();
                    var o = "element",
                        i = "element",
                        l = 0;
                    a.$isTextNode(r) ? o = "text" : a.$isElementNode(r) || null === r || (r = r.getParentOrThrow()), a.$isTextNode(n) ? (i = "text", l = n.getTextContentSize()) : a.$isElementNode(n) || null === n || (n = n.getParentOrThrow()), r && n && (t.set(r.getKey(), 0, o), e.set(n.getKey(), l, i))
                }, t.$shouldOverrideDefaultCharacterSelection = function(e, t) {
                    return e = a.$getDecoratorNode(e.focus, t), a.$isDecoratorNode(e) && !e.isIsolated()
                }, t.$sliceSelectedTextNodeContent = function(e, t) {
                    if (t.isSelected() && !t.isSegmented() && !t.isToken() && (a.$isRangeSelection(e) || a.$isGridSelection(e))) {
                        var n = e.anchor.getNode(),
                            r = e.focus.getNode(),
                            o = t.is(n),
                            l = t.is(r);
                        if (o || l) {
                            o = e.isBackward();
                            var u = e.getCharacterOffsets(),
                                s = i(u, 2),
                                c = s[0],
                                f = s[1];
                            e = n.is(r), l = t.is(o ? r : n), r = t.is(o ? n : r), n = 0;
                            var d = void 0;
                            e ? (n = c > f ? f : c, d = c > f ? c : f) : l ? (n = o ? f : c, d = void 0) : r && (n = 0, d = o = o ? c : f), t.__text = t.__text.slice(n, d)
                        }
                    }
                    return t
                }, t.$wrapLeafNodesInElements = function(e, t, n) {
                    var r = e.getNodes(),
                        o = r.length,
                        i = e.anchor;
                    if (0 === o || 1 === o && "element" === i.type && 0 === i.getNode().getChildrenSize()) {
                        e = "text" === i.type ? i.getNode().getParentOrThrow() : i.getNode(), i = e.getChildren();
                        var l = t();
                        i.forEach((function(e) {
                            return l.append(e)
                        })), n && (l = n.append(l)), e.replace(l)
                    } else {
                        var u = r[0],
                            s = new Map;
                        for (i = [], (u = a.$isElementNode(u) ? u : u.getParentOrThrow()).isInline() && (u = u.getParentOrThrow()); null !== u;) {
                            var c = u.getPreviousSibling();
                            if (null !== c) {
                                u = c;
                                break
                            }
                            if (u = u.getParentOrThrow(), a.$isRootNode(u)) break
                        }
                        c = new Set;
                        for (var f = 0; f < o; f++) {
                            var d = r[f];
                            a.$isElementNode(d) && 0 === d.getChildrenSize() && c.add(d.getKey())
                        }
                        var p = new Set;
                        for (f = 0; f < o; f++) {
                            var g = r[f];
                            null !== (d = g.getParent()) && d.isInline() && (d = d.getParent()), null !== d && a.$isLeafNode(g) && !p.has(g.getKey()) ? (g = d.getKey(), void 0 === s.get(g) && function() {
                                var e = t();
                                i.push(e), s.set(g, e), d.getChildren().forEach((function(t) {
                                    e.append(t), p.add(t.getKey())
                                })), h(d)
                            }()) : c.has(g.getKey()) && (i.push(t()), g.remove())
                        }
                        if (n)
                            for (t = 0; t < i.length; t++) n.append(i[t]);
                        if (a.$isRootNode(u))
                            if (t = u.getFirstChild(), a.$isElementNode(t) && (u = t), null === t)
                                if (n) u.append(n);
                                else
                                    for (n = 0; n < i.length; n++) u.append(i[n]);
                        else if (n) t.insertBefore(n);
                        else
                            for (n = 0; n < i.length; n++) t.insertBefore(i[n]);
                        else if (n) u.insertAfter(n);
                        else
                            for (n = i.length - 1; 0 <= n; n--) u.insertAfter(i[n]);
                        n = a.$getPreviousSelection(), a.$isRangeSelection(n) && n.anchor.getNode().isAttached() && n.focus.getNode().isAttached() ? a.$setSelection(n.clone()) : e.dirty = !0
                    }
                }, t.createDOMRange = function(e, t, n, r, o) {
                    var l, u, s, c, f = t.getKey(),
                        d = r.getKey(),
                        p = document.createRange(),
                        h = e.getElementByKey(f);
                    if (e = e.getElementByKey(d), a.$isTextNode(t) && (h = g(h)), a.$isTextNode(r) && (e = g(e)), void 0 === t || void 0 === r || null === h || null === e) return null;
                    "BR" === h.nodeName && (l = v(h), h = (u = i(l, 2))[0], n = u[1]), "BR" === e.nodeName && (s = v(e), e = (c = i(s, 2))[0], o = c[1]), t = h.firstChild, h === e && null != t && "BR" === t.nodeName && 0 === n && 0 === o && (o = 1);
                    try {
                        p.setStart(h, n), p.setEnd(e, o)
                    } catch (m) {
                        return null
                    }
                    return !p.collapsed || n === o && f === d || (p.setStart(e, o), p.setEnd(h, n)), p
                }, t.createRectsFromDOMRange = function(e, t) {
                    var n = e.getRootElement();
                    if (null === n) return [];
                    e = n.getBoundingClientRect(), n = getComputedStyle(n), n = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight);
                    for (var r, o = (t = Array.from(t.getClientRects())).length, i = 0; i < o; i++) {
                        var a = t[i],
                            l = a.width + n === e.width;
                        r && r.top === a.top && r.left === a.left && r.width === a.width && r.height === a.height || l ? (t.splice(i--, 1), o--) : r = a
                    }
                    return t
                }, t.getStyleObjectFromCSS = c, t.trimTextContentFromAnchor = function(e, t, n) {
                    var r = t.getNode();
                    if (a.$isElementNode(r)) {
                        var o = r.getDescendantByIndex(t.offset);
                        null !== o && (r = o)
                    }
                    for (; 0 < n && null !== r;) {
                        var l = r.getPreviousSibling(),
                            u = 0;
                        if (null === l) {
                            for (var s = (o = r.getParentOrThrow()).getPreviousSibling(); null === s;) {
                                if (null === (o = o.getParent())) {
                                    l = null;
                                    break
                                }
                                s = o.getPreviousSibling()
                            }
                            null !== o && (u = o.isInline() ? 0 : 2, l = a.$isElementNode(s) ? s.getLastDescendant() : s)
                        }
                        var c = r.getTextContent();
                        "" === c && a.$isElementNode(r) && !r.isInline() && (c = "\n\n"), o = c.length, s = o - n;
                        var f = c.slice(0, s);
                        !a.$isTextNode(r) || n >= o ? (s = r.getParent(), r.remove(), null != s && 0 === s.getChildrenSize() && s.remove(), n -= o + u, r = l) : function() {
                            var d, p, h, g, v = r.getKey();
                            null !== (l = e.getEditorState().read((function() {
                                var e = a.$getNodeByKey(v);
                                return a.$isTextNode(e) && e.isSimpleText() ? e.getTextContent() : null
                            }))) && l !== c ? (n = a.$getPreviousSelection(), o = r, r.isSimpleText() ? r.setTextContent(l) : (o = a.$createTextNode(l), r.replace(o)), a.$isRangeSelection(n) && n.isCollapsed() && (n = n.anchor.offset, o.select(n, n))) : r.isSimpleText() ? (l = t.key === v, (u = t.offset) < n && (u = o), n = l ? u - n : 0, o = l ? u : s, l && 0 === n ? (d = r.splitText(n, o), p = i(d, 1), (n = p[0]).remove()) : (h = r.splitText(n, o), g = i(h, 2), (n = g[1]).remove())) : (n = a.$createTextNode(f), r.replace(n)), n = 0
                        }()
                    }
                }
            },
            4249: function(e, t, n) {
                "use strict";
                var r = n(8083);
                e.exports = r
            },
            8083: function(e, t, n) {
                "use strict";
                var r = n(7424).default,
                    o = n(5523);

                function i(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return !e && (e = a(), t && (e = e.trim()), "" === e)
                }

                function a() {
                    return o.$getRoot().getTextContent()
                }

                function l(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (t || !i(e, !1)) return !1;
                    if (1 < (t = (e = o.$getRoot().getChildren()).length)) return !1;
                    for (var n = 0; n < t; n++) {
                        var r = e[n];
                        if (o.$isElementNode(r)) {
                            if ("paragraph" !== r.__type || 0 !== r.__indent) return !1;
                            for (var a = (r = r.getChildren()).length, l = 0; l < a; l++)
                                if (!o.$isTextNode(r[n])) return !1
                        }
                    }
                    return !0
                }
                t.$canShowPlaceholder = l, t.$canShowPlaceholderCurry = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return function() {
                        return l(e, t)
                    }
                }, t.$findNodeWithOffsetFromJoinedText = function(e, t, n, r) {
                    for (var i = (r = r.getChildren()).length, a = 0, l = !1, u = 0; u < i && !(a > t); ++u) {
                        var s = r[u],
                            c = o.$isTextNode(s),
                            f = c ? s.getTextContent().length : n;
                        if (f = a + f, (!1 === l && a === e || 0 === a && a === e || a < e && e <= f) && o.$isTextNode(s)) return {
                            node: s,
                            offset: e - a
                        };
                        a = f, l = c
                    }
                    return null
                }, t.$findTextIntersectionFromCharacters = function(e, t) {
                    var n = e.getFirstChild();
                    e = 0;
                    e: for (; null !== n;) {
                        if (o.$isElementNode(n)) {
                            var r = n.getFirstChild();
                            if (null !== r) {
                                n = r;
                                continue
                            }
                        } else if (o.$isTextNode(n)) {
                            if (e + (r = n.getTextContentSize()) > t) return {
                                node: n,
                                offset: t - e
                            };
                            e += r
                        }
                        if (null === (r = n.getNextSibling())) {
                            for (n = n.getParent(); null !== n;) {
                                if (null !== (r = n.getNextSibling())) {
                                    n = r;
                                    continue e
                                }
                                n = n.getParent()
                            }
                            break
                        }
                        n = r
                    }
                    return null
                }, t.$isRootTextContentEmpty = i, t.$isRootTextContentEmptyCurry = function(e, t) {
                    return function() {
                        return i(e, t)
                    }
                }, t.$joinTextNodesInElementNode = function(e, t, n) {
                    for (var r = "", i = (e = e.getChildren()).length, a = 0; a < i; ++a) {
                        var l = e[a];
                        if (o.$isTextNode(l)) {
                            var u = l.getTextContent();
                            if (l.is(n.node)) {
                                if (n.offset > u.length) throw Error("Minified Lexical error #2; see codes.json for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
                                r += l.getTextContent().substr(0, n.offset);
                                break
                            }
                            r += u
                        } else r += t
                    }
                    return r
                }, t.$rootTextContent = a, t.registerLexicalTextEntity = function(e, t, n, i) {
                    var a = function(e) {
                        var t = o.$createTextNode(e.getTextContent());
                        t.setFormat(e.getFormat()), e.replace(t)
                    };
                    return [e.registerNodeTransform(o.TextNode, (function(e) {
                        if (e.isSimpleText()) {
                            var l = e.getPreviousSibling(),
                                u = e.getTextContent(),
                                s = e;
                            if (o.$isTextNode(l)) {
                                var c = l.getTextContent(),
                                    f = t(c + u);
                                if (l instanceof n) {
                                    if (null === f || 0 !== l.getLatest().__mode) return void a(l);
                                    if (0 < (f = f.end - c.length)) return s = c + (s = u.slice(0, f)), l.select(), l.setTextContent(s), void(f === u.length ? e.remove() : (l = u.slice(f), e.setTextContent(l)))
                                } else if (null === f || f.start < c.length) return
                            }
                            for (;;) {
                                var d, p, h, g;
                                if (u = f = null === (e = t(u)) ? "" : u.slice(e.end), "" === f) {
                                    if (c = s.getNextSibling(), o.$isTextNode(c)) {
                                        if (f = s.getTextContent() + c.getTextContent(), null === (f = t(f))) {
                                            c instanceof n ? a(c) : c.markDirty();
                                            break
                                        }
                                        if (0 !== f.start) break
                                    }
                                } else if (null !== (c = t(f)) && 0 === c.start) break;
                                if (null === e) break;
                                if (0 !== e.start || !o.$isTextNode(l) || !l.isTextEntity()) {
                                    var v = void 0;
                                    if (0 === e.start ? (d = s.splitText(e.end), v = (p = r(d, 2))[0], s = p[1]) : (h = s.splitText(e.start, e.end), v = (g = r(h, 3))[1], s = g[2]), e = i(v), v.replace(e), null == s) break
                                }
                            }
                        }
                    })), e = e.registerNodeTransform(n, (function(e) {
                        var r = e.getTextContent(),
                            i = t(r);
                        null === i || 0 !== i.start ? a(e) : r.length > i.end ? e.splitText(i.end) : (r = e.getPreviousSibling(), o.$isTextNode(r) && r.isTextEntity() && (a(r), a(e)), r = e.getNextSibling(), o.$isTextNode(r) && r.isTextEntity() && (a(r), e instanceof n && a(e)))
                    }))]
                }
            },
            4140: function(e, t, n) {
                "use strict";
                var r = n(8693);
                e.exports = r
            },
            8693: function(e, t, n) {
                "use strict";
                var r = n(861).default,
                    o = n(5523);

                function i(e) {
                    throw Error("Minified Lexical error #".concat(e, "; see codes.json for the full message or ") + "use the non-minified dev environment for full errors and additional helpful warnings.")
                }

                function a(e, t) {
                    for (; e !== o.$getRoot() && null != e;) {
                        if (t(e)) return e;
                        e = e.getParent()
                    }
                    return null
                }

                function l(e, t, n, r, a) {
                    var u = n._nodes.get(e.__type);
                    for (var c in void 0 === u && i(5), e) {
                        var f = e[c];
                        if (null != f && "object" === typeof f && null != (f = f.editorState)) {
                            var d = o.createEditor({
                                namespace: f.namespace
                            });
                            d._nodes = n._nodes, d._parentEditor = n._parentEditor, d._pendingEditorState = s(d, f), e[c] = d
                        }
                    }
                    if (u = u.klass, c = e.__key, e.__key = void 0, u = u.clone(e), e.__key = c, c = u.__key, a._nodeMap.set(c, u), u.__parent = r, o.$isElementNode(u)) {
                        for (r = e.__children, f = 0; f < r.length; f++) void 0 !== (d = t.get(r[f])) && (d = l(d, t, n, c, a).__key, u.__children.push(d));
                        u.__indent = e.__indent, u.__format = e.__format, u.__dir = e.__dir
                    } else o.$isTextNode(u) && (u.__format = e.__format, u.__style = e.__style, u.__mode = e.__mode, u.__detail = e.__detail);
                    return u
                }

                function u(e, t) {
                    var n = new(0, t._editorState.constructor)(new Map),
                        r = new Map(e._nodeMap),
                        o = r.get("root");
                    e = t._updating;
                    try {
                        t._updating = !1, t.update((function() {
                            var e = t._dirtyElements,
                                i = t._dirtyLeaves,
                                a = t._dirtyType;
                            t._dirtyElements = new Map, t._dirtyLeaves = new Set, t._dirtyType = 0;
                            try {
                                l(o, r, t, null, n)
                            } finally {
                                t._dirtyElements = e, t._dirtyLeaves = i, t._dirtyType = a
                            }
                        }))
                    } finally {
                        t._updating = e
                    }
                    return n._readOnly = !0, n
                }

                function s(e, t) {
                    return u(t = "string" === typeof t ? JSON.parse(t) : t, e)
                }
                t.$dfs = function(e, t) {
                    var n = [];
                    e = (e || o.$getRoot()).getLatest(), t = t || (o.$isElementNode(e) ? e.getLastDescendant() : e);
                    for (var r = e, i = 0; null !== (r = r.getParent());) i++;
                    for (r = i; null !== e && !e.is(t);)
                        if (n.push({
                                depth: r,
                                node: e
                            }), o.$isElementNode(e) && 0 < e.getChildrenSize()) e = e.getFirstChild(), r++;
                        else
                            for (i = null; null === i && null !== e;) null === (i = e.getNextSibling()) ? (e = e.getParent(), r--) : e = i;
                    return null !== e && e.is(t) && n.push({
                        depth: r,
                        node: e
                    }), n
                }, t.$findMatchingParent = a, t.$getNearestBlockElementAncestorOrThrow = function(e) {
                    return e = a(e, (function(e) {
                        return o.$isElementNode(e) && !e.isInline()
                    })), o.$isElementNode(e) || i(4), e
                }, t.$getNearestNodeOfType = function(e, t) {
                    for (; null != e && !(e instanceof t);) e = e.getParent();
                    return e
                }, t.$restoreEditorState = function(e, t) {
                    var n = new Map(t._nodeMap),
                        r = e._pendingEditorState;
                    r && (r._nodeMap = n), e._dirtyType = 2, e = t._selection, o.$setSelection(null === e ? null : e.clone())
                }, t.addClassNamesToElement = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    n.forEach((function(t) {
                        var n;
                        "string" === typeof t && (n = e.classList).add.apply(n, r(t.split(" ")))
                    }))
                }, t.mergeRegister = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function() {
                        t.forEach((function(e) {
                            return e()
                        }))
                    }
                }, t.registerNestedElementResolver = function(e, t, n, r) {
                    return e.registerNodeTransform(t, (function(e) {
                        e: {
                            for (var o = e.getChildren(), i = 0; i < o.length; i++)
                                if (o[i] instanceof t) {
                                    o = null;
                                    break e
                                } for (o = e; null !== o;)
                                if (i = o, (o = o.getParent()) instanceof t) {
                                    o = {
                                        child: i,
                                        parent: o
                                    };
                                    break e
                                } o = null
                        }
                        if (null !== o) {
                            var a = o,
                                l = a.child,
                                u = a.parent;
                            if (l.is(e)) {
                                if (r(u, e), o = (e = l.getNextSiblings()).length, u.insertAfter(l), 0 !== o) {
                                    i = n(u), l.insertAfter(i);
                                    for (var s = 0; s < o; s++) i.append(e[s])
                                }
                                u.canBeEmpty() || 0 !== u.getChildrenSize() || u.remove()
                            }
                        }
                    }))
                }, t.removeClassNamesFromElement = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    n.forEach((function(t) {
                        var n;
                        "string" === typeof t && (n = e.classList).remove.apply(n, r(t.split(" ")))
                    }))
                }, t.unstable_convertLegacyJSONEditorState = s
            },
            4569: function(e, t, n) {
                e.exports = n(8036)
            },
            3381: function(e, t, n) {
                "use strict";
                var r = n(3589),
                    o = n(7297),
                    i = n(9301),
                    a = n(9774),
                    l = n(1804),
                    u = n(9145),
                    s = n(5411),
                    c = n(6789),
                    f = n(4531),
                    d = n(6569),
                    p = n(6261);
                e.exports = function(e) {
                    return new Promise((function(t, n) {
                        var h, g = e.data,
                            v = e.headers,
                            m = e.responseType;

                        function y() {
                            e.cancelToken && e.cancelToken.unsubscribe(h), e.signal && e.signal.removeEventListener("abort", h)
                        }
                        r.isFormData(g) && r.isStandardBrowserEnv() && delete v["Content-Type"];
                        var _ = new XMLHttpRequest;
                        if (e.auth) {
                            var b = e.auth.username || "",
                                x = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                            v.Authorization = "Basic " + btoa(b + ":" + x)
                        }
                        var k = l(e.baseURL, e.url);

                        function C() {
                            if (_) {
                                var r = "getAllResponseHeaders" in _ ? u(_.getAllResponseHeaders()) : null,
                                    i = {
                                        data: m && "text" !== m && "json" !== m ? _.response : _.responseText,
                                        status: _.status,
                                        statusText: _.statusText,
                                        headers: r,
                                        config: e,
                                        request: _
                                    };
                                o((function(e) {
                                    t(e), y()
                                }), (function(e) {
                                    n(e), y()
                                }), i), _ = null
                            }
                        }
                        if (_.open(e.method.toUpperCase(), a(k, e.params, e.paramsSerializer), !0), _.timeout = e.timeout, "onloadend" in _ ? _.onloadend = C : _.onreadystatechange = function() {
                                _ && 4 === _.readyState && (0 !== _.status || _.responseURL && 0 === _.responseURL.indexOf("file:")) && setTimeout(C)
                            }, _.onabort = function() {
                                _ && (n(new f("Request aborted", f.ECONNABORTED, e, _)), _ = null)
                            }, _.onerror = function() {
                                n(new f("Network Error", f.ERR_NETWORK, e, _, _)), _ = null
                            }, _.ontimeout = function() {
                                var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
                                    r = e.transitional || c;
                                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new f(t, r.clarifyTimeoutError ? f.ETIMEDOUT : f.ECONNABORTED, e, _)), _ = null
                            }, r.isStandardBrowserEnv()) {
                            var S = (e.withCredentials || s(k)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                            S && (v[e.xsrfHeaderName] = S)
                        }
                        "setRequestHeader" in _ && r.forEach(v, (function(e, t) {
                            "undefined" === typeof g && "content-type" === t.toLowerCase() ? delete v[t] : _.setRequestHeader(t, e)
                        })), r.isUndefined(e.withCredentials) || (_.withCredentials = !!e.withCredentials), m && "json" !== m && (_.responseType = e.responseType), "function" === typeof e.onDownloadProgress && _.addEventListener("progress", e.onDownloadProgress), "function" === typeof e.onUploadProgress && _.upload && _.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (h = function(e) {
                            _ && (n(!e || e && e.type ? new d : e), _.abort(), _ = null)
                        }, e.cancelToken && e.cancelToken.subscribe(h), e.signal && (e.signal.aborted ? h() : e.signal.addEventListener("abort", h))), g || (g = null);
                        var N = p(k);
                        N && -1 === ["http", "https", "file"].indexOf(N) ? n(new f("Unsupported protocol " + N + ":", f.ERR_BAD_REQUEST, e)) : _.send(g)
                    }))
                }
            },
            8036: function(e, t, n) {
                "use strict";
                var r = n(3589),
                    o = n(4049),
                    i = n(3773),
                    a = n(777);
                var l = function e(t) {
                    var n = new i(t),
                        l = o(i.prototype.request, n);
                    return r.extend(l, i.prototype, n), r.extend(l, n), l.create = function(n) {
                        return e(a(t, n))
                    }, l
                }(n(1709));
                l.Axios = i, l.CanceledError = n(6569), l.CancelToken = n(6857), l.isCancel = n(5517), l.VERSION = n(7600).version, l.toFormData = n(1397), l.AxiosError = n(4531), l.Cancel = l.CanceledError, l.all = function(e) {
                    return Promise.all(e)
                }, l.spread = n(8089), l.isAxiosError = n(9580), e.exports = l, e.exports.default = l
            },
            6857: function(e, t, n) {
                "use strict";
                var r = n(6569);

                function o(e) {
                    if ("function" !== typeof e) throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise((function(e) {
                        t = e
                    }));
                    var n = this;
                    this.promise.then((function(e) {
                        if (n._listeners) {
                            var t, r = n._listeners.length;
                            for (t = 0; t < r; t++) n._listeners[t](e);
                            n._listeners = null
                        }
                    })), this.promise.then = function(e) {
                        var t, r = new Promise((function(e) {
                            n.subscribe(e), t = e
                        })).then(e);
                        return r.cancel = function() {
                            n.unsubscribe(t)
                        }, r
                    }, e((function(e) {
                        n.reason || (n.reason = new r(e), t(n.reason))
                    }))
                }
                o.prototype.throwIfRequested = function() {
                    if (this.reason) throw this.reason
                }, o.prototype.subscribe = function(e) {
                    this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
                }, o.prototype.unsubscribe = function(e) {
                    if (this._listeners) {
                        var t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                    }
                }, o.source = function() {
                    var e;
                    return {
                        token: new o((function(t) {
                            e = t
                        })),
                        cancel: e
                    }
                }, e.exports = o
            },
            6569: function(e, t, n) {
                "use strict";
                var r = n(4531);

                function o(e) {
                    r.call(this, null == e ? "canceled" : e, r.ERR_CANCELED), this.name = "CanceledError"
                }
                n(3589).inherits(o, r, {
                    __CANCEL__: !0
                }), e.exports = o
            },
            5517: function(e) {
                "use strict";
                e.exports = function(e) {
                    return !(!e || !e.__CANCEL__)
                }
            },
            3773: function(e, t, n) {
                "use strict";
                var r = n(3589),
                    o = n(9774),
                    i = n(7470),
                    a = n(2733),
                    l = n(777),
                    u = n(1804),
                    s = n(7835),
                    c = s.validators;

                function f(e) {
                    this.defaults = e, this.interceptors = {
                        request: new i,
                        response: new i
                    }
                }
                f.prototype.request = function(e, t) {
                    "string" === typeof e ? (t = t || {}).url = e : t = e || {}, (t = l(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                    var n = t.transitional;
                    void 0 !== n && s.assertOptions(n, {
                        silentJSONParsing: c.transitional(c.boolean),
                        forcedJSONParsing: c.transitional(c.boolean),
                        clarifyTimeoutError: c.transitional(c.boolean)
                    }, !1);
                    var r = [],
                        o = !0;
                    this.interceptors.request.forEach((function(e) {
                        "function" === typeof e.runWhen && !1 === e.runWhen(t) || (o = o && e.synchronous, r.unshift(e.fulfilled, e.rejected))
                    }));
                    var i, u = [];
                    if (this.interceptors.response.forEach((function(e) {
                            u.push(e.fulfilled, e.rejected)
                        })), !o) {
                        var f = [a, void 0];
                        for (Array.prototype.unshift.apply(f, r), f = f.concat(u), i = Promise.resolve(t); f.length;) i = i.then(f.shift(), f.shift());
                        return i
                    }
                    for (var d = t; r.length;) {
                        var p = r.shift(),
                            h = r.shift();
                        try {
                            d = p(d)
                        } catch (g) {
                            h(g);
                            break
                        }
                    }
                    try {
                        i = a(d)
                    } catch (g) {
                        return Promise.reject(g)
                    }
                    for (; u.length;) i = i.then(u.shift(), u.shift());
                    return i
                }, f.prototype.getUri = function(e) {
                    e = l(this.defaults, e);
                    var t = u(e.baseURL, e.url);
                    return o(t, e.params, e.paramsSerializer)
                }, r.forEach(["delete", "get", "head", "options"], (function(e) {
                    f.prototype[e] = function(t, n) {
                        return this.request(l(n || {}, {
                            method: e,
                            url: t,
                            data: (n || {}).data
                        }))
                    }
                })), r.forEach(["post", "put", "patch"], (function(e) {
                    function t(t) {
                        return function(n, r, o) {
                            return this.request(l(o || {}, {
                                method: e,
                                headers: t ? {
                                    "Content-Type": "multipart/form-data"
                                } : {},
                                url: n,
                                data: r
                            }))
                        }
                    }
                    f.prototype[e] = t(), f.prototype[e + "Form"] = t(!0)
                })), e.exports = f
            },
            4531: function(e, t, n) {
                "use strict";
                var r = n(3589);

                function o(e, t, n, r, o) {
                    Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
                }
                r.inherits(o, Error, {
                    toJSON: function() {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: this.config,
                            code: this.code,
                            status: this.response && this.response.status ? this.response.status : null
                        }
                    }
                });
                var i = o.prototype,
                    a = {};
                ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach((function(e) {
                    a[e] = {
                        value: e
                    }
                })), Object.defineProperties(o, a), Object.defineProperty(i, "isAxiosError", {
                    value: !0
                }), o.from = function(e, t, n, a, l, u) {
                    var s = Object.create(i);
                    return r.toFlatObject(e, s, (function(e) {
                        return e !== Error.prototype
                    })), o.call(s, e.message, t, n, a, l), s.name = e.name, u && Object.assign(s, u), s
                }, e.exports = o
            },
            7470: function(e, t, n) {
                "use strict";
                var r = n(3589);

                function o() {
                    this.handlers = []
                }
                o.prototype.use = function(e, t, n) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t,
                        synchronous: !!n && n.synchronous,
                        runWhen: n ? n.runWhen : null
                    }), this.handlers.length - 1
                }, o.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, o.prototype.forEach = function(e) {
                    r.forEach(this.handlers, (function(t) {
                        null !== t && e(t)
                    }))
                }, e.exports = o
            },
            1804: function(e, t, n) {
                "use strict";
                var r = n(4044),
                    o = n(9549);
                e.exports = function(e, t) {
                    return e && !r(t) ? o(e, t) : t
                }
            },
            2733: function(e, t, n) {
                "use strict";
                var r = n(3589),
                    o = n(2693),
                    i = n(5517),
                    a = n(1709),
                    l = n(6569);

                function u(e) {
                    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new l
                }
                e.exports = function(e) {
                    return u(e), e.headers = e.headers || {}, e.data = o.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                        delete e.headers[t]
                    })), (e.adapter || a.adapter)(e).then((function(t) {
                        return u(e), t.data = o.call(e, t.data, t.headers, e.transformResponse), t
                    }), (function(t) {
                        return i(t) || (u(e), t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                    }))
                }
            },
            777: function(e, t, n) {
                "use strict";
                var r = n(3589);
                e.exports = function(e, t) {
                    t = t || {};
                    var n = {};

                    function o(e, t) {
                        return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                    }

                    function i(n) {
                        return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(e[n], t[n])
                    }

                    function a(e) {
                        if (!r.isUndefined(t[e])) return o(void 0, t[e])
                    }

                    function l(n) {
                        return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(void 0, t[n])
                    }

                    function u(n) {
                        return n in t ? o(e[n], t[n]) : n in e ? o(void 0, e[n]) : void 0
                    }
                    var s = {
                        url: a,
                        method: a,
                        data: a,
                        baseURL: l,
                        transformRequest: l,
                        transformResponse: l,
                        paramsSerializer: l,
                        timeout: l,
                        timeoutMessage: l,
                        withCredentials: l,
                        adapter: l,
                        responseType: l,
                        xsrfCookieName: l,
                        xsrfHeaderName: l,
                        onUploadProgress: l,
                        onDownloadProgress: l,
                        decompress: l,
                        maxContentLength: l,
                        maxBodyLength: l,
                        beforeRedirect: l,
                        transport: l,
                        httpAgent: l,
                        httpsAgent: l,
                        cancelToken: l,
                        socketPath: l,
                        responseEncoding: l,
                        validateStatus: u
                    };
                    return r.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
                        var t = s[e] || i,
                            o = t(e);
                        r.isUndefined(o) && t !== u || (n[e] = o)
                    })), n
                }
            },
            7297: function(e, t, n) {
                "use strict";
                var r = n(4531);
                e.exports = function(e, t, n) {
                    var o = n.config.validateStatus;
                    n.status && o && !o(n.status) ? t(new r("Request failed with status code " + n.status, [r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
                }
            },
            2693: function(e, t, n) {
                "use strict";
                var r = n(3589),
                    o = n(1709);
                e.exports = function(e, t, n) {
                    var i = this || o;
                    return r.forEach(n, (function(n) {
                        e = n.call(i, e, t)
                    })), e
                }
            },
            1709: function(e, t, n) {
                "use strict";
                var r = n(3589),
                    o = n(4341),
                    i = n(4531),
                    a = n(6789),
                    l = n(1397),
                    u = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function s(e, t) {
                    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var c = {
                    transitional: a,
                    adapter: function() {
                        var e;
                        return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof process && "[object process]" === Object.prototype.toString.call(process)) && (e = n(3381)), e
                    }(),
                    transformRequest: [function(e, t) {
                        if (o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e)) return e;
                        if (r.isArrayBufferView(e)) return e.buffer;
                        if (r.isURLSearchParams(e)) return s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
                        var n, i = r.isObject(e),
                            a = t && t["Content-Type"];
                        if ((n = r.isFileList(e)) || i && "multipart/form-data" === a) {
                            var u = this.env && this.env.FormData;
                            return l(n ? {
                                "files[]": e
                            } : e, u && new u)
                        }
                        return i || "application/json" === a ? (s(t, "application/json"), function(e, t, n) {
                            if (r.isString(e)) try {
                                return (t || JSON.parse)(e), r.trim(e)
                            } catch (o) {
                                if ("SyntaxError" !== o.name) throw o
                            }
                            return (n || JSON.stringify)(e)
                        }(e)) : e
                    }],
                    transformResponse: [function(e) {
                        var t = this.transitional || c.transitional,
                            n = t && t.silentJSONParsing,
                            o = t && t.forcedJSONParsing,
                            a = !n && "json" === this.responseType;
                        if (a || o && r.isString(e) && e.length) try {
                            return JSON.parse(e)
                        } catch (l) {
                            if (a) {
                                if ("SyntaxError" === l.name) throw i.from(l, i.ERR_BAD_RESPONSE, this, null, this.response);
                                throw l
                            }
                        }
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {
                        FormData: n(3035)
                    },
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                r.forEach(["delete", "get", "head"], (function(e) {
                    c.headers[e] = {}
                })), r.forEach(["post", "put", "patch"], (function(e) {
                    c.headers[e] = r.merge(u)
                })), e.exports = c
            },
            6789: function(e) {
                "use strict";
                e.exports = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                }
            },
            7600: function(e) {
                e.exports = {
                    version: "0.27.2"
                }
            },
            4049: function(e) {
                "use strict";
                e.exports = function(e, t) {
                    return function() {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                        return e.apply(t, n)
                    }
                }
            },
            9774: function(e, t, n) {
                "use strict";
                var r = n(3589);

                function o(e) {
                    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                e.exports = function(e, t, n) {
                    if (!t) return e;
                    var i;
                    if (n) i = n(t);
                    else if (r.isURLSearchParams(t)) i = t.toString();
                    else {
                        var a = [];
                        r.forEach(t, (function(e, t) {
                            null !== e && "undefined" !== typeof e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                                r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
                            })))
                        })), i = a.join("&")
                    }
                    if (i) {
                        var l = e.indexOf("#"); - 1 !== l && (e = e.slice(0, l)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
                    }
                    return e
                }
            },
            9549: function(e) {
                "use strict";
                e.exports = function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            },
            9301: function(e, t, n) {
                "use strict";
                var r = n(3589);
                e.exports = r.isStandardBrowserEnv() ? {
                    write: function(e, t, n, o, i, a) {
                        var l = [];
                        l.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()), r.isString(o) && l.push("path=" + o), r.isString(i) && l.push("domain=" + i), !0 === a && l.push("secure"), document.cookie = l.join("; ")
                    },
                    read: function(e) {
                        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                }
            },
            4044: function(e) {
                "use strict";
                e.exports = function(e) {
                    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
                }
            },
            9580: function(e, t, n) {
                "use strict";
                var r = n(3589);
                e.exports = function(e) {
                    return r.isObject(e) && !0 === e.isAxiosError
                }
            },
            5411: function(e, t, n) {
                "use strict";
                var r = n(3589);
                e.exports = r.isStandardBrowserEnv() ? function() {
                    var e, t = /(msie|trident)/i.test(navigator.userAgent),
                        n = document.createElement("a");

                    function o(e) {
                        var r = e;
                        return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                            href: n.href,
                            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                            host: n.host,
                            search: n.search ? n.search.replace(/^\?/, "") : "",
                            hash: n.hash ? n.hash.replace(/^#/, "") : "",
                            hostname: n.hostname,
                            port: n.port,
                            pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                        }
                    }
                    return e = o(window.location.href),
                        function(t) {
                            var n = r.isString(t) ? o(t) : t;
                            return n.protocol === e.protocol && n.host === e.host
                        }
                }() : function() {
                    return !0
                }
            },
            4341: function(e, t, n) {
                "use strict";
                var r = n(3589);
                e.exports = function(e, t) {
                    r.forEach(e, (function(n, r) {
                        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                    }))
                }
            },
            3035: function(e) {
                e.exports = null
            },
            9145: function(e, t, n) {
                "use strict";
                var r = n(3589),
                    o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function(e) {
                    var t, n, i, a = {};
                    return e ? (r.forEach(e.split("\n"), (function(e) {
                        if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                            if (a[t] && o.indexOf(t) >= 0) return;
                            a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                        }
                    })), a) : a
                }
            },
            6261: function(e) {
                "use strict";
                e.exports = function(e) {
                    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }
            },
            8089: function(e) {
                "use strict";
                e.exports = function(e) {
                    return function(t) {
                        return e.apply(null, t)
                    }
                }
            },
            1397: function(e, t, n) {
                "use strict";
                var r = n(3589);
                e.exports = function(e, t) {
                    t = t || new FormData;
                    var n = [];

                    function o(e) {
                        return null === e ? "" : r.isDate(e) ? e.toISOString() : r.isArrayBuffer(e) || r.isTypedArray(e) ? "function" === typeof Blob ? new Blob([e]) : Buffer.from(e) : e
                    }
                    return function e(i, a) {
                        if (r.isPlainObject(i) || r.isArray(i)) {
                            if (-1 !== n.indexOf(i)) throw Error("Circular reference detected in " + a);
                            n.push(i), r.forEach(i, (function(n, i) {
                                if (!r.isUndefined(n)) {
                                    var l, u = a ? a + "." + i : i;
                                    if (n && !a && "object" === typeof n)
                                        if (r.endsWith(i, "{}")) n = JSON.stringify(n);
                                        else if (r.endsWith(i, "[]") && (l = r.toArray(n))) return void l.forEach((function(e) {
                                        !r.isUndefined(e) && t.append(u, o(e))
                                    }));
                                    e(n, u)
                                }
                            })), n.pop()
                        } else t.append(a, o(i))
                    }(e), t
                }
            },
            7835: function(e, t, n) {
                "use strict";
                var r = n(7600).version,
                    o = n(4531),
                    i = {};
                ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                    i[e] = function(n) {
                        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                    }
                }));
                var a = {};
                i.transitional = function(e, t, n) {
                    function i(e, t) {
                        return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                    }
                    return function(n, r, l) {
                        if (!1 === e) throw new o(i(r, " has been removed" + (t ? " in " + t : "")), o.ERR_DEPRECATED);
                        return t && !a[r] && (a[r] = !0, console.warn(i(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, l)
                    }
                }, e.exports = {
                    assertOptions: function(e, t, n) {
                        if ("object" !== typeof e) throw new o("options must be an object", o.ERR_BAD_OPTION_VALUE);
                        for (var r = Object.keys(e), i = r.length; i-- > 0;) {
                            var a = r[i],
                                l = t[a];
                            if (l) {
                                var u = e[a],
                                    s = void 0 === u || l(u, a, e);
                                if (!0 !== s) throw new o("option " + a + " must be " + s, o.ERR_BAD_OPTION_VALUE)
                            } else if (!0 !== n) throw new o("Unknown option " + a, o.ERR_BAD_OPTION)
                        }
                    },
                    validators: i
                }
            },
            3589: function(e, t, n) {
                "use strict";
                var r, o = n(4049),
                    i = Object.prototype.toString,
                    a = (r = Object.create(null), function(e) {
                        var t = i.call(e);
                        return r[t] || (r[t] = t.slice(8, -1).toLowerCase())
                    });

                function l(e) {
                    return e = e.toLowerCase(),
                        function(t) {
                            return a(t) === e
                        }
                }

                function u(e) {
                    return Array.isArray(e)
                }

                function s(e) {
                    return "undefined" === typeof e
                }
                var c = l("ArrayBuffer");

                function f(e) {
                    return null !== e && "object" === typeof e
                }

                function d(e) {
                    if ("object" !== a(e)) return !1;
                    var t = Object.getPrototypeOf(e);
                    return null === t || t === Object.prototype
                }
                var p = l("Date"),
                    h = l("File"),
                    g = l("Blob"),
                    v = l("FileList");

                function m(e) {
                    return "[object Function]" === i.call(e)
                }
                var y = l("URLSearchParams");

                function _(e, t) {
                    if (null !== e && "undefined" !== typeof e)
                        if ("object" !== typeof e && (e = [e]), u(e))
                            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                        else
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
                }
                var b, x = (b = "undefined" !== typeof Uint8Array && Object.getPrototypeOf(Uint8Array), function(e) {
                    return b && e instanceof b
                });
                e.exports = {
                    isArray: u,
                    isArrayBuffer: c,
                    isBuffer: function(e) {
                        return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                    },
                    isFormData: function(e) {
                        var t = "[object FormData]";
                        return e && ("function" === typeof FormData && e instanceof FormData || i.call(e) === t || m(e.toString) && e.toString() === t)
                    },
                    isArrayBufferView: function(e) {
                        return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && c(e.buffer)
                    },
                    isString: function(e) {
                        return "string" === typeof e
                    },
                    isNumber: function(e) {
                        return "number" === typeof e
                    },
                    isObject: f,
                    isPlainObject: d,
                    isUndefined: s,
                    isDate: p,
                    isFile: h,
                    isBlob: g,
                    isFunction: m,
                    isStream: function(e) {
                        return f(e) && m(e.pipe)
                    },
                    isURLSearchParams: y,
                    isStandardBrowserEnv: function() {
                        return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
                    },
                    forEach: _,
                    merge: function e() {
                        var t = {};

                        function n(n, r) {
                            d(t[r]) && d(n) ? t[r] = e(t[r], n) : d(n) ? t[r] = e({}, n) : u(n) ? t[r] = n.slice() : t[r] = n
                        }
                        for (var r = 0, o = arguments.length; r < o; r++) _(arguments[r], n);
                        return t
                    },
                    extend: function(e, t, n) {
                        return _(t, (function(t, r) {
                            e[r] = n && "function" === typeof t ? o(t, n) : t
                        })), e
                    },
                    trim: function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    },
                    stripBOM: function(e) {
                        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                    },
                    inherits: function(e, t, n, r) {
                        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, n && Object.assign(e.prototype, n)
                    },
                    toFlatObject: function(e, t, n) {
                        var r, o, i, a = {};
                        t = t || {};
                        do {
                            for (o = (r = Object.getOwnPropertyNames(e)).length; o-- > 0;) a[i = r[o]] || (t[i] = e[i], a[i] = !0);
                            e = Object.getPrototypeOf(e)
                        } while (e && (!n || n(e, t)) && e !== Object.prototype);
                        return t
                    },
                    kindOf: a,
                    kindOfTest: l,
                    endsWith: function(e, t, n) {
                        e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                        var r = e.indexOf(t, n);
                        return -1 !== r && r === n
                    },
                    toArray: function(e) {
                        if (!e) return null;
                        var t = e.length;
                        if (s(t)) return null;
                        for (var n = new Array(t); t-- > 0;) n[t] = e[t];
                        return n
                    },
                    isTypedArray: x,
                    isFileList: v
                }
            },
            5523: function(e, t, n) {
                "use strict";
                var r = n(5885);
                e.exports = r
            },
            5885: function(e, t, n) {
                "use strict";
                var r = n(2122).default,
                    o = n(1588).default,
                    i = n(3808).default,
                    a = n(1655).default,
                    l = n(6389).default,
                    u = n(6690).default,
                    s = n(9728).default,
                    c = n(861).default,
                    f = n(7424).default,
                    d = n(4704).default,
                    p = {},
                    h = {},
                    g = {},
                    v = {},
                    m = {},
                    y = {},
                    _ = {},
                    b = {},
                    x = {},
                    k = {},
                    C = {},
                    S = {},
                    N = {},
                    E = {},
                    w = {},
                    T = {},
                    O = {},
                    M = {},
                    P = {},
                    R = {},
                    D = {},
                    A = {},
                    L = {},
                    I = {},
                    $ = {},
                    F = {},
                    j = {},
                    z = {},
                    B = {},
                    U = {},
                    W = {},
                    K = {},
                    H = {},
                    V = {};

                function Y(e) {
                    throw Error("Minified Lexical error #".concat(e, "; see codes.json for the full message or ") + "use the non-minified dev environment for full errors and additional helpful warnings.")
                }
                var Q = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
                    q = Q && "documentMode" in document ? document.documentMode : null,
                    J = Q && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
                    G = Q && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                    X = !(!Q || !("InputEvent" in window) || q) && "getTargetRanges" in new window.InputEvent("input"),
                    Z = Q && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
                    ee = Q && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                    te = Z || ee ? "\xa0" : "\u200b",
                    ne = G ? "\xa0" : te,
                    re = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/,
                    oe = /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
                    ie = {
                        bold: 1,
                        code: 16,
                        italic: 2,
                        strikethrough: 4,
                        subscript: 32,
                        superscript: 64,
                        underline: 8
                    },
                    ae = {
                        directionless: 1,
                        unmergeable: 2
                    },
                    le = {
                        center: 2,
                        justify: 4,
                        left: 1,
                        right: 3
                    },
                    ue = {
                        2: "center",
                        4: "justify",
                        1: "left",
                        3: "right"
                    },
                    se = {
                        inert: 3,
                        normal: 0,
                        segmented: 2,
                        token: 1
                    },
                    ce = {
                        3: "inert",
                        0: "normal",
                        2: "segmented",
                        1: "token"
                    },
                    fe = !1,
                    de = 0;

                function pe(e) {
                    de = e.timeStamp
                }

                function he(e, t, n) {
                    return t.__lexicalLineBreak === e || void 0 !== e["__lexicalKey_".concat(n._key)]
                }

                function ge(e, t, n) {
                    fe = !0;
                    var r = 100 < performance.now() - de;
                    try {
                        Ln(e, (function() {
                            for (var o = pn() || function(e) {
                                    return e.getEditorState().read((function() {
                                        var e = pn();
                                        return null !== e ? e.clone() : null
                                    }))
                                }(e), i = new Map, a = e.getRootElement(), l = e._editorState, u = !1, s = "", c = 0; c < t.length; c++) {
                                var p = t[c],
                                    h = p.type,
                                    g = p.target,
                                    v = De(g, l);
                                if (!zn(v))
                                    if ("characterData" === h) {
                                        if (p = r && sr(v)) e: {
                                            h = g;
                                            var m = v;
                                            if (Gt(p = o)) {
                                                var y = p.anchor.getNode();
                                                if (y.is(m) && p.format !== y.getFormat()) {
                                                    p = !1;
                                                    break e
                                                }
                                            }
                                            p = 3 === h.nodeType && m.isAttached()
                                        }
                                        p && (h = p = null, null !== (m = window.getSelection()) && m.anchorNode === g && (p = m.anchorOffset, h = m.focusOffset), null !== (g = g.nodeValue) && Ue(v, g, p, h, !1))
                                    } else if ("childList" === h) {
                                    for (u = !0, h = p.addedNodes, m = 0; m < h.length; m++) {
                                        var _ = Re(y = h[m]),
                                            b = y.parentNode;
                                        null == b || null !== _ || "BR" === y.nodeName && he(y, b, e) || (G && (_ = y.innerText || y.nodeValue) && (s += _), b.removeChild(y))
                                    }
                                    if (0 < (h = (p = p.removedNodes).length)) {
                                        for (m = 0, y = 0; y < h; y++) "BR" === (b = p[y]).nodeName && he(b, g, e) && (g.appendChild(b), m++);
                                        h !== m && (g === a && (v = l._nodeMap.get("root")), i.set(g, v))
                                    }
                                }
                            }
                            if (0 < i.size) {
                                var x, k = d(i);
                                try {
                                    for (k.s(); !(x = k.n()).done;) {
                                        var C = f(x.value, 2),
                                            S = C[0],
                                            N = C[1];
                                        if (Un(N))
                                            for (i = N.__children, a = S.firstChild, l = 0; l < i.length; l++) null !== (c = e.getElementByKey(i[l])) && (null == a ? (S.appendChild(c), a = c) : a !== c && S.replaceChild(c, a), a = a.nextSibling);
                                        else sr(N) && N.markDirty()
                                    }
                                } catch (E) {
                                    k.e(E)
                                } finally {
                                    k.f()
                                }
                            }
                            if (0 < (i = n.takeRecords()).length) {
                                for (a = 0; a < i.length; a++)
                                    for (l = (c = i[a]).addedNodes, c = c.target, v = 0; v < l.length; v++) null == (p = (g = l[v]).parentNode) || "BR" !== g.nodeName || he(g, c, e) || p.removeChild(g);
                                n.takeRecords()
                            }
                            null !== o && (u && (o.dirty = !0, $e(o)), G && Qe() && o.insertRawText(s))
                        }))
                    } finally {
                        fe = !1
                    }
                }

                function ve(e) {
                    var t = e._observer;
                    null !== t && ge(e, t.takeRecords(), t)
                }

                function me(e) {
                    0 === de && window.addEventListener("textInput", pe, !0), e._observer = new MutationObserver((function(t, n) {
                        ge(e, t, n)
                    }))
                }
                var ye = 1,
                    _e = "function" === typeof queueMicrotask ? queueMicrotask : function(e) {
                        Promise.resolve().then(e)
                    };

                function be(e, t, n) {
                    var r = e.getRootElement();
                    try {
                        var o;
                        if (o = null !== r && r.contains(t) && r.contains(n) && null !== t) {
                            var i = document.activeElement,
                                a = null !== i ? i.nodeName : null;
                            o = !zn(De(t)) || "INPUT" !== a && "TEXTAREA" !== a
                        }
                        return o && xe(t) === e
                    } catch (i) {
                        return !1
                    }
                }

                function xe(e) {
                    for (; null != e;) {
                        var t = e.__lexicalEditor;
                        if (null != t && !t.isReadOnly()) return t;
                        e = e.parentNode
                    }
                    return null
                }

                function ke(e) {
                    return Ce(e) || e.isSegmented()
                }

                function Ce(e) {
                    return e.isToken() || e.isInert()
                }

                function Se(e) {
                    for (; null != e;) {
                        if (3 === e.nodeType) return e;
                        e = e.firstChild
                    }
                    return null
                }

                function Ne(e, t, n) {
                    return e & (t = ie[t]) && (null === n || 0 === (n & t)) ? e ^ t : null === n || n & t ? e | t : e
                }

                function Ee(e) {
                    return sr(e) || Gn(e) || zn(e)
                }

                function we(e) {
                    var t = e.getParent();
                    if (null !== t) {
                        var n = (t = t.getWritable().__children).indexOf(e.__key); - 1 === n && Y(31), Oe(e), t.splice(n, 1)
                    }
                }

                function Te(e) {
                    99 < Cn && Y(14);
                    var t = e.getLatest(),
                        n = t.__parent,
                        r = Nn(),
                        o = En(),
                        i = r._nodeMap;
                    if (r = o._dirtyElements, null !== n) e: for (; null !== n && !r.has(n);) {
                        var a = i.get(n);
                        if (void 0 === a) break;
                        r.set(n, !1), n = a.__parent
                    }
                    t = t.__key, o._dirtyType = 1, Un(e) ? r.set(t, !0) : o._dirtyLeaves.add(t)
                }

                function Oe(e) {
                    var t = e.getPreviousSibling();
                    e = e.getNextSibling(), null !== t && Te(t), null !== e && Te(e)
                }

                function Me(e) {
                    Sn();
                    var t = En(),
                        n = t._compositionKey;
                    e !== n && (t._compositionKey = e, null !== n && (null !== (t = Pe(n)) && t.getWritable()), null !== e && (null !== (e = Pe(e)) && e.getWritable()))
                }

                function Pe(e, t) {
                    return void 0 === (e = (t || Nn())._nodeMap.get(e)) ? null : e
                }

                function Re(e, t) {
                    var n = En();
                    return void 0 !== (e = e["__lexicalKey_".concat(n._key)]) ? Pe(e, t) : null
                }

                function De(e, t) {
                    for (; null != e;) {
                        var n = Re(e, t);
                        if (null !== n) return n;
                        e = e.parentNode
                    }
                    return null
                }

                function Ae(e) {
                    var t = Object.assign({}, e._decorators);
                    return e._pendingDecorators = t
                }

                function Le(e) {
                    return e.read((function() {
                        return Ie().getTextContent()
                    }))
                }

                function Ie() {
                    return Nn()._nodeMap.get("root")
                }

                function $e(e) {
                    var t = Nn();
                    null !== e && (e.dirty = !0, e._cachedNodes = null), t._selection = e
                }

                function Fe(e) {
                    var t, n = En();
                    e: {
                        for (t = e; null != t;) {
                            var r = t["__lexicalKey_".concat(n._key)];
                            if (void 0 !== r) {
                                t = r;
                                break e
                            }
                            t = t.parentNode
                        }
                        t = null
                    }
                    return null === t ? e === (n = n.getRootElement()) ? Pe("root") : null : Pe(t)
                }

                function je(e) {
                    for (var t = []; null !== e;) t.push(e), e = e._parentEditor;
                    return t
                }

                function ze() {
                    return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5)
                }

                function Be(e, t, n) {
                    if (null !== (e = window.getSelection())) {
                        var r = e.anchorNode,
                            o = e,
                            i = o.anchorOffset,
                            a = o.focusOffset;
                        if (null !== r && 3 === r.nodeType && sr(e = De(r))) {
                            if ((r = r.nodeValue) === te && n) r = n, a = i = n.length;
                            null !== r && Ue(e, r, i, a, t)
                        }
                    }
                }

                function Ue(e, t, n, r, o) {
                    var i = e;
                    if (i.isAttached() && (o || !i.isDirty())) {
                        var a = i.isComposing();
                        if (e = t, (a || o) && t[t.length - 1] === te && (e = t.slice(0, -1)), t = i.getTextContent(), o || e !== t)
                            if ("" === e)
                                if (Me(null), Z || ee) i.remove();
                                else {
                                    var l = En();
                                    setTimeout((function() {
                                        l.update((function() {
                                            i.isAttached() && i.remove()
                                        }))
                                    }), 20)
                                }
                        else o = i.getParent(), t = hn(), Ce(i) || null !== En()._compositionKey && !a || null !== o && Gt(t) && !o.canInsertTextBefore() && 0 === t.anchor.offset ? i.markDirty() : (Gt(a = pn()) && null !== n && null !== r && (a.setTextNodeRange(i, n, i, r), i.isSegmented() && (n = ur(n = i.getTextContent()), i.replace(n), i = n)), i.setTextContent(e))
                    }
                }

                function We(e, t) {
                    var n = e.anchor,
                        r = e.focus,
                        o = n.getNode(),
                        i = window.getSelection();
                    i = null !== i ? i.anchorNode : null;
                    var a = n.key,
                        l = En().getElementByKey(a);
                    return t = t.length, (n = a !== r.key || !sr(o) || 2 > t && n.offset !== r.offset && !o.isComposing() || ke(o) || o.isDirty() && 1 < t || null !== l && !o.isComposing() && i !== Se(l) || o.getFormat() !== e.format) || (o.isSegmented() ? n = !0 : e.isCollapsed() ? (e = e.anchor.offset, n = o.getParentOrThrow(), r = o.isToken(), (t = 0 === e) && !(t = !o.canInsertTextBefore() || !n.canInsertTextBefore() || r) && (t = (sr(t = o.getPreviousSibling()) || Un(t) && t.isInline()) && !t.canInsertTextAfter()), o = o.getTextContentSize() === e && (!o.canInsertTextBefore() || !n.canInsertTextBefore() || r), n = t || o) : n = !1), n
                }

                function Ke(e, t) {
                    var n = e[t];
                    return "string" === typeof n ? (n = n.split(" "), e[t] = n) : n
                }

                function He(e, t, n, r, o) {
                    0 !== n.size && (n = r.__key, void 0 === (t = t.get(r.__type)) && Y(33), t = t.klass, void 0 === (r = e.get(t)) && (r = new Map, e.set(t, r)), r.has(n) || r.set(n, o))
                }

                function Ve(e, t, n) {
                    var r = e.getParent(),
                        o = n;
                    return null !== r && (t && 0 === n ? (o = e.getIndexWithinParent(), e = r) : t || n !== e.getChildrenSize() || (o = e.getIndexWithinParent() + 1, e = r)), e.getChildAtIndex(t ? o - 1 : o)
                }

                function Ye(e, t) {
                    var n = e.offset;
                    return "element" === e.type ? Ve(e = e.getNode(), t, n) : (e = e.getNode(), t && 0 === n || !t && n === e.getTextContentSize() ? null === (n = t ? e.getPreviousSibling() : e.getNextSibling()) ? Ve(e.getParentOrThrow(), t, e.getIndexWithinParent() + (t ? 0 : 1)) : n : null)
                }

                function Qe() {
                    var e = window.event;
                    return "insertFromPaste" === (e = e && e.inputType) || "insertFromPasteAsQuotation" === e
                }

                function qe(e) {
                    return !Kn(e) && !e.isLastChild() && !e.isInline()
                }

                function Je(e, t) {
                    return void 0 === (e = e._keyToDOMMap.get(t)) && Y(34), e
                }

                function Ge(e, t, n, r, o) {
                    for (var i = (e = e.__children).length, a = 0; a < i; a++) {
                        var l = e[a],
                            u = r.get(l);
                        void 0 !== u && u.__parent === t && (Un(u) && Ge(u, l, n, r, o), n.has(l) || o.delete(l), r.delete(l))
                    }
                }

                function Xe(e, t) {
                    var n = e.__mode,
                        r = e.__format;
                    e = e.__style;
                    var o = t.__mode,
                        i = t.__format;
                    return t = t.__style, (null === n || n === o) && (null === r || r === i) && (null === e || e === t)
                }

                function Ze(e, t) {
                    var n = e.mergeWithSibling(t),
                        r = En()._normalizedNodes;
                    return r.add(e.__key), r.add(t.__key), n
                }

                function et(e) {
                    if ("" === e.__text && e.isSimpleText() && !e.isUnmergeable()) e.remove();
                    else {
                        for (var t; null !== (t = e.getPreviousSibling()) && sr(t) && t.isSimpleText() && !t.isUnmergeable();) {
                            if ("" !== t.__text) {
                                Xe(t, e) && (e = Ze(t, e));
                                break
                            }
                            t.remove()
                        }
                        for (var n; null !== (n = e.getNextSibling()) && sr(n) && n.isSimpleText() && !n.isUnmergeable();) {
                            if ("" !== n.__text) {
                                Xe(e, n) && Ze(e, n);
                                break
                            }
                            n.remove()
                        }
                    }
                }
                var tt, nt, rt, ot, it, at, lt, ut, st, ct, ft = "",
                    dt = "",
                    pt = "",
                    ht = !1,
                    gt = !1,
                    vt = null;

                function mt(e, t) {
                    var n = lt.get(e);
                    if (null !== t) {
                        var r = Ot(e);
                        t.removeChild(r)
                    }
                    ut.has(e) || nt._keyToDOMMap.delete(e), Un(n) && yt(e = n.__children, 0, e.length - 1, null), void 0 !== n && He(ct, rt, ot, n, "destroyed")
                }

                function yt(e, t, n, r) {
                    for (; t <= n; ++t) {
                        var o = e[t];
                        void 0 !== o && mt(o, r)
                    }
                }

                function _t(e, t) {
                    e.setProperty("text-align", t)
                }

                function bt(e, t) {
                    e.style.setProperty("padding-inline-start", 0 === t ? "" : 20 * t + "px")
                }

                function xt(e, t) {
                    e = e.style, 0 === t ? _t(e, "") : 1 === t ? _t(e, "left") : 2 === t ? _t(e, "center") : 3 === t ? _t(e, "right") : 4 === t && _t(e, "justify")
                }

                function kt(e, t, n) {
                    var r = ut.get(e);
                    void 0 === r && Y(60);
                    var o = r.createDOM(tt, nt),
                        i = nt._keyToDOMMap;
                    if (o["__lexicalKey_" + nt._key] = e, i.set(e, o), sr(r) ? o.setAttribute("data-lexical-text", "true") : zn(r) && o.setAttribute("data-lexical-decorator", "true"), Un(r)) {
                        0 !== (e = r.__indent) && bt(o, e);
                        var a = (e = r.__children).length;
                        if (0 !== a) {
                            --a;
                            var l = dt;
                            dt = "", Ct(i = e, 0, a, o, null), Et(r, o), dt = l
                        }
                        0 !== (i = r.__format) && xt(o, i), Nt(null, e, o), qe(r) && (ft += "\n\n", pt += "\n\n")
                    } else i = r.getTextContent(), zn(r) ? (null !== (a = r.decorate(nt, tt)) && Tt(e, a), o.contentEditable = "false") : sr(r) && (r.isDirectionless() || (dt += i), r.isInert() && ((e = o.style).pointerEvents = "none", e.userSelect = "none", o.contentEditable = "false", e.setProperty("-webkit-user-select", "none"))), ft += i, pt += i;
                    return null !== t && (null != n ? t.insertBefore(o, n) : null != (n = t.__lexicalLineBreak) ? t.insertBefore(o, n) : t.appendChild(o)), He(ct, rt, ot, r, "created"), o
                }

                function Ct(e, t, n, r, o) {
                    var i = ft;
                    for (ft = ""; t <= n; ++t) kt(e[t], r, o);
                    r.__lexicalTextContent = ft, ft = i + ft
                }

                function St(e, t) {
                    return Gn(e = t.get(e[e.length - 1])) || zn(e)
                }

                function Nt(e, t, n) {
                    e = null !== e && (0 === e.length || St(e, lt)), t = null !== t && (0 === t.length || St(t, ut)), e ? t || (null != (t = n.__lexicalLineBreak) && n.removeChild(t), n.__lexicalLineBreak = null) : t && (t = document.createElement("br"), n.__lexicalLineBreak = t, n.appendChild(t))
                }

                function Et(e, t) {
                    var n = t.__lexicalDir;
                    if (t.__lexicalDirTextContent !== dt || n !== vt) {
                        var r = "" === dt;
                        if (r) var o = vt;
                        else o = dt, o = re.test(o) ? "rtl" : oe.test(o) ? "ltr" : null;
                        if (o !== n) {
                            var i = t.classList,
                                a = tt.theme,
                                l = null !== n ? a[n] : void 0,
                                u = null !== o ? a[o] : void 0;
                            void 0 !== l && ("string" === typeof l && (l = l.split(" "), l = a[n] = l), i.remove.apply(i, c(l))), null === o || r && "ltr" === o ? t.removeAttribute("dir") : (void 0 !== u && ("string" === typeof u && (n = u.split(" "), u = a[o] = n), void 0 !== u && i.add.apply(i, c(u))), t.dir = o), gt || (e.getWritable().__dir = o)
                        }
                        vt = o, t.__lexicalDirTextContent = dt, t.__lexicalDir = o
                    }
                }

                function wt(e, t) {
                    var n = lt.get(e),
                        r = ut.get(e);
                    void 0 !== n && void 0 !== r || Y(61);
                    var o = ht || at.has(e) || it.has(e),
                        i = Je(nt, e);
                    if (n === r && !o) return Un(n) ? (void 0 !== (r = i.__lexicalTextContent) && (ft += r, pt += r), void 0 !== (r = i.__lexicalDirTextContent) && (dt += r)) : (r = n.getTextContent(), sr(n) && !n.isDirectionless() && (dt += r), pt += r, ft += r), i;
                    if (n !== r && o && He(ct, rt, ot, r, "updated"), r.updateDOM(n, i, tt)) return r = kt(e, null, null), null === t && Y(62), t.replaceChild(r, i), mt(e, null), r;
                    if (Un(n) && Un(r)) {
                        if ((e = r.__indent) !== n.__indent && bt(i, e), (e = r.__format) !== n.__format && xt(i, e), (e = n.__children) !== (n = r.__children) || o) {
                            var a = e,
                                l = n;
                            o = r, t = dt, dt = "";
                            var u = ft;
                            ft = "";
                            var s = a.length,
                                c = l.length;
                            if (1 === s && 1 === c) {
                                var f = a[0];
                                if (f === (l = l[0])) wt(f, i);
                                else {
                                    var d = Ot(f);
                                    l = kt(l, null, null), i.replaceChild(l, d), mt(f, null)
                                }
                            } else if (0 === s) 0 !== c && Ct(l, 0, c - 1, i, null);
                            else if (0 === c) 0 !== s && (yt(a, 0, s - 1, (f = null == i.__lexicalLineBreak) ? null : i), f && (i.textContent = ""));
                            else {
                                var p = s - 1;
                                s = c - 1;
                                var h = i.firstChild,
                                    g = 0;
                                for (c = 0; g <= p && c <= s;) {
                                    var v = a[g],
                                        m = l[c];
                                    if (v === m) h = wt(m, i).nextSibling, g++, c++;
                                    else {
                                        void 0 === f && (f = new Set(a)), void 0 === d && (d = new Set(l));
                                        var y = d.has(v),
                                            _ = f.has(m);
                                        y ? (_ ? ((v = Je(nt, m)) === h ? h = wt(m, i).nextSibling : (null != h ? i.insertBefore(v, h) : i.appendChild(v), wt(m, i)), g++) : kt(m, i, h), c++) : (h = Ot(v).nextSibling, mt(v, i), g++)
                                    }
                                }
                                d = c > s, (f = g > p) && !d ? Ct(l, c, s, i, f = void 0 === (f = l[s + 1]) ? null : nt.getElementByKey(f)) : d && !f && yt(a, g, p, i)
                            }
                            qe(o) && (ft += "\n\n"), i.__lexicalTextContent = ft, ft = u + ft, Et(o, i), dt = t, Kn(r) || Nt(e, n, i)
                        }
                        qe(r) && (ft += "\n\n", pt += "\n\n")
                    } else n = r.getTextContent(), zn(r) ? (null !== (o = r.decorate(nt, tt)) && Tt(e, o), ft += n, pt += n) : sr(r) && !r.isDirectionless() && (dt += n), ft += n, pt += n;
                    return !gt && Kn(r) && r.__cachedText !== pt && ((r = r.getWritable()).__cachedText = pt), i
                }

                function Tt(e, t) {
                    var n = nt._pendingDecorators,
                        r = nt._decorators;
                    if (null === n) {
                        if (r[e] === t) return;
                        n = Ae(nt)
                    }
                    n[e] = t
                }

                function Ot(e) {
                    return void 0 === (e = st.get(e)) && Y(34), e
                }
                var Mt = Object.freeze({}),
                    Pt = [
                        ["keydown", function(e, t) {
                            if (Rt = e.timeStamp, Dt = e.keyCode, !t.isComposing()) {
                                var n = e.keyCode,
                                    r = e.shiftKey,
                                    o = e.ctrlKey,
                                    i = e.metaKey,
                                    a = e.altKey;
                                if (39 !== n || o || i || a)
                                    if (39 !== n || a || r || !o && !i)
                                        if (37 !== n || o || i || a)
                                            if (37 !== n || a || r || !o && !i)
                                                if (38 !== n || o || i)
                                                    if (40 !== n || o || i)
                                                        if (13 === n && r) It = !0, Rn(t, R, e);
                                                        else if (32 === n) Rn(t, D, e);
                                else if (J && o && 79 === n) e.preventDefault(), It = !0, Rn(t, v, !0);
                                else if (13 !== n || r) {
                                    var l = J ? !a && !i && (8 === n || 72 === n && o) : !(o || a || i) && 8 === n;
                                    l ? 8 === n ? Rn(t, A, e) : (e.preventDefault(), Rn(t, g, !0)) : 27 === n ? Rn(t, L, e) : (l = J ? !(r || a || i) && (46 === n || 68 === n && o) : !(o || a || i) && 46 === n) ? 46 === n ? Rn(t, I, e) : (e.preventDefault(), Rn(t, g, !1)) : 8 === n && (J ? a : o) ? (e.preventDefault(), Rn(t, x, !0)) : 46 === n && (J ? a : o) ? (e.preventDefault(), Rn(t, x, !1)) : J && i && 8 === n ? (e.preventDefault(), Rn(t, k, !0)) : J && i && 46 === n ? (e.preventDefault(), Rn(t, k, !1)) : 66 === n && !a && (J ? i : o) ? (e.preventDefault(), Rn(t, C, "bold")) : 85 === n && !a && (J ? i : o) ? (e.preventDefault(), Rn(t, C, "underline")) : 73 === n && !a && (J ? i : o) ? (e.preventDefault(), Rn(t, C, "italic")) : 9 !== n || a || o || i ? 90 === n && !r && (J ? i : o) ? (e.preventDefault(), Rn(t, S, void 0)) : (l = J ? 90 === n && i && r : 89 === n && o || 90 === n && o && r) ? (e.preventDefault(), Rn(t, N, void 0)) : tn(t._editorState._selection) && ((l = !r && (67 === n && (J ? i : o))) ? (e.preventDefault(), Rn(t, U, e)) : (l = !r && (88 === n && (J ? i : o))) && (e.preventDefault(), Rn(t, W, e))) : Rn(t, $, e)
                                } else It = !1, Rn(t, R, e);
                                else Rn(t, P, e);
                                else Rn(t, M, e);
                                else Rn(t, O, e);
                                else Rn(t, T, e);
                                else Rn(t, w, e);
                                else Rn(t, E, e);
                                (o || r || a || i) && Rn(t, V, e)
                            }
                        }],
                        ["compositionstart", function(e, t) {
                            Ln(t, (function() {
                                var n = pn();
                                if (Gt(n) && !t.isComposing()) {
                                    var r = n.anchor;
                                    Me(r.key), (e.timeStamp < Rt + 30 || "element" === r.type || !n.isCollapsed() || n.anchor.getNode().getFormat() !== n.format) && Rn(t, y, ne)
                                }
                            }))
                        }],
                        ["compositionend", function(e, t) {
                            G ? $t = !0 : Ln(t, (function() {
                                Bt(t, e.data)
                            }))
                        }],
                        ["input", function(e, t) {
                            e.stopPropagation(), Ln(t, (function() {
                                var n = pn(),
                                    r = e.data;
                                null != r && Gt(n) && We(n, r) ? ($t && (Bt(t, r), $t = !1), Rn(t, y, r), r = r.length, G && 1 < r && "insertCompositionText" === e.inputType && !t.isComposing() && (n.anchor.offset -= r), Z || ee || !t.isComposing() || (Rt = 0, Me(null))) : (Be(t, !1), $t && (Bt(t, r || void 0), $t = !1)), Sn(), ve(n = En())
                            }))
                        }],
                        ["click", function(e, t) {
                            Ln(t, (function() {
                                var n = pn(),
                                    r = window.getSelection(),
                                    o = hn();
                                if (Gt(n)) {
                                    var i = n.anchor,
                                        a = i.getNode();
                                    r && "element" === i.type && 0 === i.offset && n.isCollapsed() && !Kn(a) && 1 === Ie().getChildrenSize() && a.getTopLevelElementOrThrow().isEmpty() && null !== o && n.is(o) && (r.removeAllRanges(), n.dirty = !0)
                                } else r && tn(n) && r.isCollapsed && (i = [1, 3], null !== (n = r.anchorNode) && i.includes(n.nodeType) && $e(r = dn(o, r, t)));
                                Rn(t, h, e)
                            }))
                        }],
                        ["cut", Mt],
                        ["copy", Mt],
                        ["dragstart", Mt],
                        ["dragover", Mt],
                        ["paste", Mt],
                        ["focus", Mt],
                        ["blur", Mt],
                        ["drop", Mt]
                    ];
                X && Pt.push(["beforeinput", function(e, t) {
                    return function(e, t) {
                        var n = e.inputType;
                        if (!("deleteCompositionText" === n || G && Qe()))
                            if ("insertCompositionText" === n) {
                                var r = e.data;
                                r && Ln(t, (function() {
                                    var e = pn();
                                    if (Gt(e)) {
                                        var n = e.anchor,
                                            o = n.getNode(),
                                            i = o.getPreviousSibling();
                                        0 === n.offset && sr(o) && sr(i) && o.getTextContent() === ne && i.getFormat() !== e.format && (e = i.getTextContent(), 0 === r.indexOf(e) && (e = r.slice(e.length), Rn(t, y, e), setTimeout((function() {
                                            Ln(t, (function() {
                                                o.select()
                                            }))
                                        }), 30)))
                                    }
                                }))
                            } else Ln(t, (function() {
                                var r = pn();
                                if ("deleteContentBackward" === n) {
                                    if (null === r) {
                                        var o = hn();
                                        if (!Gt(o)) return;
                                        $e(o.clone())
                                    }
                                    if (Gt(r)) return void(229 === Dt && e.timeStamp < Rt + 30 && r.anchor.key === r.focus.key ? (Me(null), Rt = 0, setTimeout((function() {
                                        Ln(t, (function() {
                                            Me(null)
                                        }))
                                    }), 30), Gt(r) && (o = r.anchor.getNode(), o.markDirty(), r.format = o.getFormat())) : (e.preventDefault(), Rn(t, g, !1)))
                                }
                                if (Gt(r)) {
                                    o = e.data, r.dirty || !r.isCollapsed() || Kn(r.anchor.getNode()) || function(e, t) {
                                        t.getTargetRanges && (t = t.getTargetRanges()[0]) && e.applyDOMRange(t)
                                    }(r, e);
                                    var i = r.focus,
                                        a = r.anchor.getNode();
                                    if (i = i.getNode(), "insertText" === n) "\n" === o ? (e.preventDefault(), Rn(t, v, void 0)) : "\n\n" === o ? (e.preventDefault(), Rn(t, m, void 0)) : null == o && e.dataTransfer ? (o = e.dataTransfer.getData("text/plain"), e.preventDefault(), r.insertRawText(o)) : null != o && We(r, o) && (e.preventDefault(), Rn(t, y, o));
                                    else switch (e.preventDefault(), n) {
                                        case "insertFromYank":
                                        case "insertFromDrop":
                                        case "insertReplacementText":
                                            Rn(t, y, e);
                                            break;
                                        case "insertFromComposition":
                                            Me(null), Rn(t, y, e);
                                            break;
                                        case "insertLineBreak":
                                            Me(null), Rn(t, v, void 0);
                                            break;
                                        case "insertParagraph":
                                            Me(null), It ? (It = !1, Rn(t, v, void 0)) : Rn(t, m, void 0);
                                            break;
                                        case "insertFromPaste":
                                        case "insertFromPasteAsQuotation":
                                            Rn(t, _, e);
                                            break;
                                        case "deleteByComposition":
                                            (function(e, t) {
                                                return e !== t || Un(e) || Un(t) || !Ce(e) || !Ce(t)
                                            })(a, i) && Rn(t, b, void 0);
                                            break;
                                        case "deleteByDrag":
                                        case "deleteByCut":
                                            Rn(t, b, void 0);
                                            break;
                                        case "deleteContent":
                                            Rn(t, g, !1);
                                            break;
                                        case "deleteWordBackward":
                                            Rn(t, x, !0);
                                            break;
                                        case "deleteWordForward":
                                            Rn(t, x, !1);
                                            break;
                                        case "deleteHardLineBackward":
                                        case "deleteSoftLineBackward":
                                            Rn(t, k, !0);
                                            break;
                                        case "deleteContentForward":
                                        case "deleteHardLineForward":
                                        case "deleteSoftLineForward":
                                            Rn(t, k, !1);
                                            break;
                                        case "formatStrikeThrough":
                                            Rn(t, C, "strikethrough");
                                            break;
                                        case "formatBold":
                                            Rn(t, C, "bold");
                                            break;
                                        case "formatItalic":
                                            Rn(t, C, "italic");
                                            break;
                                        case "formatUnderline":
                                            Rn(t, C, "underline");
                                            break;
                                        case "historyUndo":
                                            Rn(t, S, void 0);
                                            break;
                                        case "historyRedo":
                                            Rn(t, N, void 0)
                                    }
                                }
                            }))
                    }(e, t)
                }]);
                var Rt = 0,
                    Dt = 0,
                    At = 0,
                    Lt = !1,
                    It = !1,
                    $t = !1,
                    Ft = [0, 0, "root", 0];

                function jt(e, t) {
                    return null !== e && null !== e.nodeValue && 3 === e.nodeType && 0 !== t && t !== e.nodeValue.length
                }

                function zt(e, t, n) {
                    var r = e.anchorNode,
                        o = e.anchorOffset,
                        i = e.focusNode,
                        a = e.focusOffset;
                    Lt && (Lt = !1, jt(r, o) && jt(i, a)) || Ln(t, (function() {
                        if (n) {
                            if (be(t, r, i)) {
                                var o = pn();
                                if (Gt(o)) {
                                    var a = o.anchor,
                                        l = a.getNode();
                                    if (o.isCollapsed()) {
                                        "Range" === e.type && (o.dirty = !0);
                                        var u = window.event;
                                        u = u ? u.timeStamp : performance.now();
                                        var s = f(Ft, 4),
                                            c = s[0],
                                            d = s[1],
                                            h = s[2];
                                        u < s[3] + 200 && a.offset === d && a.key === h ? o.format = c : "text" === a.type ? o.format = l.getFormat() : "element" === a.type && (o.format = 0)
                                    } else {
                                        var g = (u = o.focus).getNode(),
                                            v = 0;
                                        "text" === a.type && (v |= l.getFormat()), "text" !== u.type || l.is(g) || (v |= g.getFormat()), o.format = v
                                    }
                                }
                                Rn(t, p, void 0)
                            }
                        } else $e(null)
                    }))
                }

                function Bt(e, t) {
                    var n = e._compositionKey;
                    if (Me(null), null !== n && null != t) {
                        if ("" === t) return t = Pe(n), void(null !== (e = Se(e.getElementByKey(n))) && null !== e.nodeValue && sr(t) && Ue(t, e.nodeValue, null, null, !0));
                        if ("\n" === t[t.length - 1] && Gt(n = pn())) return t = n.focus, n.anchor.set(t.key, t.offset, t.type), void Rn(e, R, null)
                    }
                    Be(e, !0, t)
                }

                function Ut(e) {
                    var t = e.__lexicalEventHandles;
                    return void 0 === t && (t = [], e.__lexicalEventHandles = t), t
                }
                var Wt = new Map;

                function Kt() {
                    var e = window.getSelection();
                    if (e) {
                        var t = xe(e.anchorNode);
                        if (null !== t) {
                            var n = je(t),
                                r = (n = n[n.length - 1])._key,
                                o = Wt.get(r),
                                i = o || n;
                            i !== t && zt(e, i, !1), zt(e, t, !0), t !== n ? Wt.set(r, t) : o && Wt.delete(r)
                        }
                    }
                }
                var Ht = function() {
                    function e(t, n, r) {
                        u(this, e), this._selection = null, this.key = t, this.offset = n, this.type = r
                    }
                    return s(e, [{
                        key: "is",
                        value: function(e) {
                            return this.key === e.key && this.offset === e.offset && this.type === e.type
                        }
                    }, {
                        key: "isBefore",
                        value: function(e) {
                            var t = this.getNode(),
                                n = e.getNode(),
                                r = this.offset;
                            if (e = e.offset, Un(t)) {
                                var o = t.getDescendantByIndex(r);
                                t = null != o ? o : t
                            }
                            return Un(n) && (o = n.getDescendantByIndex(e), n = null != o ? o : n), t === n ? r < e : t.isBefore(n)
                        }
                    }, {
                        key: "getNode",
                        value: function() {
                            var e = Pe(this.key);
                            return null === e && Y(20), e
                        }
                    }, {
                        key: "set",
                        value: function(e, t, n) {
                            var r = this._selection,
                                o = this.key;
                            this.key = e, this.offset = t, this.type = n, xn || (En()._compositionKey === o && Me(e), null !== r && (r._cachedNodes = null, r.dirty = !0))
                        }
                    }]), e
                }();

                function Vt(e, t) {
                    var n = t.__key,
                        r = e.offset,
                        o = "element";
                    if (sr(t)) o = "text", r > (t = t.getTextContentSize()) && (r = t);
                    else if (!Un(t)) {
                        var i = t.getNextSibling();
                        sr(i) ? (n = i.__key, r = 0) : (i = t.getParent()) && (n = i.__key, r = t.getIndexWithinParent() + 1)
                    }
                    e.set(n, r, o)
                }

                function Yt(e, t) {
                    if (Un(t)) {
                        var n = t.getLastDescendant();
                        Un(n) || sr(n) ? Vt(e, n) : Vt(e, t)
                    } else Vt(e, t)
                }

                function Qt(e, t, n) {
                    var r = e.getNode(),
                        o = r.getChildAtIndex(e.offset),
                        i = ur(),
                        a = Kn(r) ? dr().append(i) : i;
                    i.setFormat(n), null === o ? r.append(a) : o.insertBefore(a), e.is(t) && t.set(i.__key, 0, "text"), e.set(i.__key, 0, "text")
                }

                function qt(e, t, n, r) {
                    e.key = t, e.offset = n, e.type = r
                }
                var Jt = function() {
                    function e(t) {
                        u(this, e), this.dirty = !1, this._nodes = t, this._cachedNodes = null
                    }
                    return s(e, [{
                        key: "is",
                        value: function(e) {
                            if (!tn(e)) return !1;
                            var t = this._nodes,
                                n = e._nodes;
                            return t.size === n.size && Array.from(t).every((function(e) {
                                return n.has(e)
                            }))
                        }
                    }, {
                        key: "add",
                        value: function(e) {
                            this.dirty = !0, this._nodes.add(e), this._cachedNodes = null
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            this.dirty = !0, this._nodes.delete(e), this._cachedNodes = null
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.dirty = !0, this._nodes.clear(), this._cachedNodes = null
                        }
                    }, {
                        key: "has",
                        value: function(e) {
                            return this._nodes.has(e)
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return new e(new Set(this._nodes))
                        }
                    }, {
                        key: "extract",
                        value: function() {
                            return this.getNodes()
                        }
                    }, {
                        key: "insertRawText",
                        value: function() {}
                    }, {
                        key: "insertText",
                        value: function() {}
                    }, {
                        key: "getNodes",
                        value: function() {
                            var e = this._cachedNodes;
                            if (null !== e) return e;
                            var t = this._nodes;
                            e = [];
                            var n, r = d(t);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    null !== (t = Pe(n.value)) && e.push(t)
                                }
                            } catch (o) {
                                r.e(o)
                            } finally {
                                r.f()
                            }
                            return xn || (this._cachedNodes = e), e
                        }
                    }, {
                        key: "getTextContent",
                        value: function() {
                            for (var e = this.getNodes(), t = "", n = 0; n < e.length; n++) t += e[n].getTextContent();
                            return t
                        }
                    }]), e
                }();

                function Gt(e) {
                    return e instanceof en
                }
                var Xt = function() {
                    function e(t, n, r) {
                        u(this, e), this.gridKey = t, this.anchor = n, this.focus = r, this.dirty = !1, this._cachedNodes = null, n._selection = this, r._selection = this
                    }
                    return s(e, [{
                        key: "is",
                        value: function(e) {
                            return !!Zt(e) && (this.gridKey === e.gridKey && this.anchor.is(this.focus))
                        }
                    }, {
                        key: "set",
                        value: function(e, t, n) {
                            this.dirty = !0, this.gridKey = e, this.anchor.key = t, this.focus.key = n, this._cachedNodes = null
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return new e(this.gridKey, this.anchor, this.focus)
                        }
                    }, {
                        key: "isCollapsed",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "isBackward",
                        value: function() {
                            return this.focus.isBefore(this.anchor)
                        }
                    }, {
                        key: "getCharacterOffsets",
                        value: function() {
                            return rn(this)
                        }
                    }, {
                        key: "extract",
                        value: function() {
                            return this.getNodes()
                        }
                    }, {
                        key: "insertRawText",
                        value: function() {}
                    }, {
                        key: "insertText",
                        value: function() {}
                    }, {
                        key: "getShape",
                        value: function() {
                            var e = Pe(this.anchor.key);
                            null === e && Y(21);
                            var t = e.getIndexWithinParent();
                            e = e.getParentOrThrow().getIndexWithinParent();
                            var n = Pe(this.focus.key);
                            null === n && Y(22);
                            var r = n.getIndexWithinParent(),
                                o = n.getParentOrThrow().getIndexWithinParent();
                            return n = Math.min(t, r), t = Math.max(t, r), r = Math.min(e, o), e = Math.max(e, o), {
                                fromX: Math.min(n, t),
                                fromY: Math.min(r, e),
                                toX: Math.max(n, t),
                                toY: Math.max(r, e)
                            }
                        }
                    }, {
                        key: "getNodes",
                        value: function() {
                            var e = this._cachedNodes;
                            if (null !== e) return e;
                            e = new Set;
                            var t = this.getShape(),
                                n = t.fromX,
                                r = t.fromY,
                                o = t.toX,
                                i = t.toY,
                                a = Pe(this.gridKey);
                            yr(a) || Y(23), e.add(a), a = a.getChildren();
                            for (var l = r; l <= i; l++) {
                                var u = a[l];
                                e.add(u), br(u) || Y(24), u = u.getChildren();
                                for (var s = n; s <= o; s++) {
                                    var f = u[s];
                                    for (vr(f) || Y(25), e.add(f), f = f.getChildren(); 0 < f.length;) {
                                        var d, p = f.shift();
                                        e.add(p), Un(p) && (d = f).unshift.apply(d, c(p.getChildren()))
                                    }
                                }
                            }
                            return e = Array.from(e), xn || (this._cachedNodes = e), e
                        }
                    }, {
                        key: "getTextContent",
                        value: function() {
                            for (var e = this.getNodes(), t = "", n = 0; n < e.length; n++) t += e[n].getTextContent();
                            return t
                        }
                    }]), e
                }();

                function Zt(e) {
                    return e instanceof Xt
                }
                var en = function() {
                    function e(t, n, r) {
                        u(this, e), this.anchor = t, this.focus = n, this.dirty = !1, this.format = r, this._cachedNodes = null, t._selection = this, n._selection = this
                    }
                    return s(e, [{
                        key: "is",
                        value: function(e) {
                            return !!Gt(e) && (this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format)
                        }
                    }, {
                        key: "isBackward",
                        value: function() {
                            return this.focus.isBefore(this.anchor)
                        }
                    }, {
                        key: "isCollapsed",
                        value: function() {
                            return this.anchor.is(this.focus)
                        }
                    }, {
                        key: "getNodes",
                        value: function() {
                            var e = this._cachedNodes;
                            if (null !== e) return e;
                            var t = this.anchor,
                                n = this.focus;
                            e = t.getNode();
                            var r = n.getNode();
                            return Un(e) && (t = e.getDescendantByIndex(t.offset), e = null != t ? t : e), Un(r) && (n = r.getDescendantByIndex(n.offset), r = null != n ? n : r), e = e.is(r) ? Un(e) && (0 < e.getChildrenSize() || e.excludeFromCopy()) ? [] : [e] : e.getNodesBetween(r), xn || (this._cachedNodes = e), e
                        }
                    }, {
                        key: "setTextNodeRange",
                        value: function(e, t, n, r) {
                            qt(this.anchor, e.__key, t, "text"), qt(this.focus, n.__key, r, "text"), this._cachedNodes = null, this.dirty = !0
                        }
                    }, {
                        key: "getTextContent",
                        value: function() {
                            var e = this.getNodes();
                            if (0 === e.length) return "";
                            for (var t = e[0], n = e[e.length - 1], r = this.anchor.isBefore(this.focus), o = rn(this), i = f(o, 2), a = i[0], l = i[1], u = "", s = !0, c = 0; c < e.length; c++) {
                                var d = e[c];
                                if (Un(d) && !d.isInline()) s || (u += "\n"), s = !d.isEmpty();
                                else if (s = !1, sr(d)) {
                                    var p = d.getTextContent();
                                    d === t ? p = d === n ? a < l ? p.slice(a, l) : p.slice(l, a) : r ? p.slice(a) : p.slice(l) : d === n && (p = r ? p.slice(0, l) : p.slice(0, a)), u += p
                                } else !zn(d) && !Gn(d) || d === n && this.isCollapsed() || (u += d.getTextContent())
                            }
                            return u
                        }
                    }, {
                        key: "applyDOMRange",
                        value: function(e) {
                            var t = En(),
                                n = t.getEditorState()._selection;
                            if (null !== (e = sn(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n))) {
                                var r = f(e, 2),
                                    o = r[0],
                                    i = r[1];
                                qt(this.anchor, o.key, o.offset, o.type), qt(this.focus, i.key, i.offset, i.type), this._cachedNodes = null
                            }
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            var t = this.anchor,
                                n = this.focus;
                            return new e(new Ht(t.key, t.offset, t.type), new Ht(n.key, n.offset, n.type), this.format)
                        }
                    }, {
                        key: "toggleFormat",
                        value: function(e) {
                            this.format = Ne(this.format, e, null), this.dirty = !0
                        }
                    }, {
                        key: "hasFormat",
                        value: function(e) {
                            return 0 !== (this.format & ie[e])
                        }
                    }, {
                        key: "insertRawText",
                        value: function(e) {
                            var t = e.split(/\r?\n/);
                            if (1 === t.length) this.insertText(e);
                            else {
                                e = [];
                                for (var n = t.length, r = 0; r < n; r++) {
                                    var o = t[r];
                                    "" !== o && e.push(ur(o)), r !== n - 1 && e.push(Jn())
                                }
                                this.insertNodes(e)
                            }
                        }
                    }, {
                        key: "insertText",
                        value: function(e) {
                            var t = this.anchor,
                                n = this.focus,
                                r = this.isCollapsed() || t.isBefore(n),
                                o = this.format;
                            r && "element" === t.type ? Qt(t, n, o) : r || "element" !== n.type || Qt(n, t, o);
                            var i = this.getNodes(),
                                a = i.length,
                                l = r ? n : t;
                            n = (r ? t : n).offset;
                            var u = l.offset;
                            sr(t = i[0]) || Y(26), r = t.getTextContent().length;
                            var s = t.getParentOrThrow(),
                                d = i[a - 1];
                            if (this.isCollapsed() && n === r && (t.isSegmented() || t.isToken() || !t.canInsertTextAfter() || !s.canInsertTextAfter() && null === t.getNextSibling())) {
                                var p = t.getNextSibling();
                                if (sr(p) && !ke(p) || ((p = ur()).setFormat(o), s.canInsertTextAfter() ? t.insertAfter(p) : s.insertAfter(p)), p.select(0, 0), t = p, "" !== e) return void this.insertText(e)
                            } else if (this.isCollapsed() && 0 === n && (t.isSegmented() || t.isToken() || !t.canInsertTextBefore() || !s.canInsertTextBefore() && null === t.getPreviousSibling())) {
                                if (sr(p = t.getPreviousSibling()) && !ke(p) || ((p = ur()).setFormat(o), s.canInsertTextBefore() ? t.insertBefore(p) : s.insertBefore(p)), p.select(), t = p, "" !== e) return void this.insertText(e)
                            } else if (t.isSegmented() && n !== r)(s = ur(t.getTextContent())).setFormat(o), t.replace(s), t = s;
                            else if (!(this.isCollapsed() || "" === e || (p = d.getParent(), s.canInsertTextBefore() && s.canInsertTextAfter() && (!Un(p) || p.canInsertTextBefore() && p.canInsertTextAfter())))) return this.insertText(""), un(this.anchor, this.focus, null), void this.insertText(e);
                            if (1 === a)
                                if (Ce(t))(e = ur(e)).select(), t.replace(e);
                                else {
                                    if (i = t.getFormat(), n === u && i !== o) {
                                        var h;
                                        if ("" !== t.getTextContent()) return (i = ur(e)).setFormat(o), i.select(), 0 === n ? t.insertBefore(i) : (h = t.splitText(n), (a = f(h, 1)[0]).insertAfter(i)), void(i.isComposing() && "text" === this.anchor.type && (this.anchor.offset -= e.length));
                                        t.setFormat(o)
                                    }
                                    "" === (t = t.spliceText(n, u - n, e, !0)).getTextContent() ? t.remove() : "text" === this.anchor.type && (t.isComposing() ? this.anchor.offset -= e.length : this.format = i)
                                }
                            else {
                                o = new Set([].concat(c(t.getParentKeys()), c(d.getParentKeys())));
                                var g = Un(t) ? t : t.getParentOrThrow();
                                if (s = Un(d) ? d : d.getParentOrThrow(), p = d, !g.is(s) && s.isInline())
                                    do {
                                        p = s, s = s.getParentOrThrow()
                                    } while (s.isInline());
                                "text" === l.type && (0 !== u || "" === d.getTextContent()) || "element" === l.type && d.getIndexWithinParent() < u ? sr(d) && !Ce(d) && u !== d.getTextContentSize() ? (d.isSegmented() && (l = ur(d.getTextContent()), d.replace(l), d = l), d = d.spliceText(0, u, ""), o.add(d.__key)) : (l = d.getParentOrThrow()).canBeEmpty() || 1 !== l.getChildrenSize() ? d.remove() : l.remove() : o.add(d.__key), l = s.getChildren(), u = new Set(i), d = g.is(s), g = g.isInline() && null === t.getNextSibling() ? g : t;
                                for (var v = l.length - 1; 0 <= v; v--) {
                                    var m = l[v];
                                    if (m.is(t) || Un(m) && m.isParentOf(t)) break;
                                    m.isAttached() && (!u.has(m) || m.is(p) ? d || g.insertAfter(m) : m.remove())
                                }
                                if (!d)
                                    for (l = s, u = null; null !== l;)(0 === (s = (d = l.getChildren()).length) || d[s - 1].is(u)) && (o.delete(l.__key), u = l), l = l.getParent();
                                for (Ce(t) ? n === r ? t.select() : ((e = ur(e)).select(), t.replace(e)) : "" === (t = t.spliceText(n, r - n, e, !0)).getTextContent() ? t.remove() : t.isComposing() && "text" === this.anchor.type && (this.anchor.offset -= e.length), e = 1; e < a; e++) t = i[e], o.has(t.__key) || t.remove()
                            }
                        }
                    }, {
                        key: "removeText",
                        value: function() {
                            this.insertText("")
                        }
                    }, {
                        key: "formatText",
                        value: function(e) {
                            var t, n = this.getNodes(),
                                r = [],
                                o = d(n);
                            try {
                                for (o.s(); !(t = o.n()).done;) {
                                    var i = t.value;
                                    sr(i) && r.push(i)
                                }
                            } catch (b) {
                                o.e(b)
                            } finally {
                                o.f()
                            }
                            var a = 0;
                            n = r.length - 1, i = r[0];
                            var l = r[n];
                            if (this.isCollapsed()) this.toggleFormat(e), Me(null);
                            else {
                                var u = this.anchor,
                                    s = this.focus,
                                    c = u.offset,
                                    p = s.offset,
                                    h = i.getFormatFlags(e, null),
                                    g = i.getTextContent().length,
                                    v = u.isBefore(s),
                                    m = v ? p : c;
                                if ((c = v ? c : p) === i.getTextContentSize() && 1 < r.length && (c = 0, a = 1, i = h = r[1], g = h.getTextContentSize(), h = h.getFormatFlags(e, null)), i.is(l)) sr(i) && ("element" === u.type && "element" === s.type ? (i.setFormat(h), i.select(c, m), this.format = h) : c !== m && (0 === c && m === g ? (i.setFormat(h), i.select(c, m)) : (e = i.splitText(c, m), (e = 0 === c ? e[0] : e[1]).setFormat(h), e.select(0, m - c)), this.format = h));
                                else
                                    for (sr(i) && c !== g && (0 !== c && (y = i.splitText(c), i = f(y, 2)[1]), i.setFormat(h)), u = h, sr(l) && (u = l.getFormatFlags(e, h), s = l.getTextContent().length, 0 !== m && (m !== s && (_ = l.splitText(m), l = f(_, 1)[0]), l.setFormat(u))), this.format = h | u, m = a + 1; m < n; m++) {
                                        var y, _;
                                        a = (h = r[m]).__key, sr(h) && a !== i.__key && a !== l.__key && !h.isToken() && (a = h.getFormatFlags(e, u), h.setFormat(a))
                                    }
                            }
                        }
                    }, {
                        key: "insertNodes",
                        value: function(e, t) {
                            var n;
                            this.isCollapsed() || this.removeText();
                            var r = this.anchor,
                                o = r.offset,
                                i = r.getNode(),
                                a = i;
                            "element" === r.type && (a = r.getNode(), r = a.getChildAtIndex(o - 1), a = null === r ? a : r), r = [];
                            var l = i.getNextSiblings(),
                                u = Kn(i) ? null : i.getTopLevelElementOrThrow();
                            if (sr(i))
                                if (a = i.getTextContent().length, 0 === o && 0 !== a) a = null !== (a = i.getPreviousSibling()) ? a : i.getParentOrThrow(), r.push(i);
                                else if (o === a) a = i;
                            else {
                                if (Ce(i)) return !1;
                                var s = i.splitText(o),
                                    d = f(s, 2);
                                a = d[0], i = d[1], r.push(i)
                            }
                            i = a, (n = r).push.apply(n, c(l)), l = e[0];
                            for (var p = !1, h = null, g = 0; g < e.length; g++) {
                                var v = e[g];
                                if (Un(v) && !v.isInline()) {
                                    if (v.is(l)) {
                                        if (Un(a) && a.isEmpty() && a.canReplaceWith(v)) {
                                            a.replace(v), a = v, p = !0;
                                            continue
                                        }
                                        var m = v.getFirstDescendant();
                                        if (Ee(m)) {
                                            for (m = m.getParentOrThrow(); m.isInline();) m = m.getParentOrThrow();
                                            if (p = (h = m.getChildren()).length, Un(a))
                                                for (var y = 0; y < p; y++) a.append(h[y]);
                                            else {
                                                for (y = p - 1; 0 <= y; y--) a.insertAfter(h[y]);
                                                a = a.getParentOrThrow()
                                            }
                                            if (h = h[p - 1], m.remove(), p = !0, m.is(v)) continue
                                        }
                                    }
                                    sr(a) && (null === u && Y(27), a = u)
                                } else p && !zn(v) && Kn(a.getParent()) && Y(28);
                                p = !1, Un(a) && !a.isInline() ? (h = v, zn(v) && v.isTopLevel() ? a = a.insertAfter(v) : Un(v) ? !v.canBeEmpty() && v.isEmpty() || (Kn(a) ? (null !== (m = a.getChildAtIndex(o)) ? m.insertBefore(v) : a.append(v), a = v) : a = a.insertAfter(v)) : (null !== (m = a.getFirstChild()) ? m.insertBefore(v) : a.append(v), a = v)) : !Un(v) || Un(v) && v.isInline() || zn(a) && a.isTopLevel() || Gn(a) ? (h = v, a = a.insertAfter(v)) : (a = v.getParentOrThrow(), g--)
                            }
                            if (t && (sr(i) ? i.select() : sr(e = a.getPreviousSibling()) ? e.select() : (e = a.getIndexWithinParent(), a.getParentOrThrow().select(e, e))), Un(a)) {
                                if (e = sr(h) ? h : a.getLastDescendant(), t || (null === e ? a.select() : sr(e) ? e.select() : e.selectNext()), 0 !== r.length)
                                    for (t = a, e = r.length - 1; 0 <= e; e--) u = (o = r[e]).getParentOrThrow(), Un(a) && !cn(o) ? (t === a ? a.append(o) : a.insertBefore(o), a = o) : Un(a) || cn(o) ? Un(o) && !o.canInsertAfter(a) ? (Un(i = u.constructor.clone(u)) || Y(29), i.append(o), a.insertAfter(i)) : a.insertAfter(o) : (a.insertBefore(o), a = o), u.isEmpty() && !u.canBeEmpty() && u.remove()
                            } else t || (sr(a) ? a.select() : (r = a.getParentOrThrow(), a = a.getIndexWithinParent() + 1, r.select(a, a)));
                            return !0
                        }
                    }, {
                        key: "insertParagraph",
                        value: function() {
                            this.isCollapsed() || this.removeText();
                            var e = this.anchor,
                                t = e.offset,
                                n = [];
                            if ("text" === e.type) {
                                var r, o = e.getNode(),
                                    i = o.getNextSiblings().reverse(),
                                    a = o.getParentOrThrow(),
                                    l = a.isInline(),
                                    u = l ? a.getTextContentSize() : o.getTextContentSize();
                                0 === t ? i.push(o) : (l && (n = a.getNextSiblings()), t === u || l && t === o.getTextContentSize() || (r = o.splitText(t), o = f(r, 2)[1], i.push(o)))
                            } else {
                                if (Kn(a = e.getNode())) return i = dr(), n = a.getChildAtIndex(t), i.select(), void(null !== n ? n.insertBefore(i) : a.append(i));
                                i = a.getChildren().slice(t).reverse()
                            }
                            if (o = i.length, 0 === t && 0 < o && a.isInline()) {
                                if (Un(i = (n = a.getParentOrThrow()).insertNewAfter(this)))
                                    for (n = n.getChildren(), a = 0; a < n.length; a++) i.append(n[a])
                            } else if (null === (l = a.insertNewAfter(this))) this.insertLineBreak();
                            else if (Un(l))
                                if (u = a.getFirstChild(), 0 === t && (a.is(e.getNode()) || u && u.is(e.getNode())) && 0 < o) a.insertBefore(l);
                                else {
                                    if (a = null, t = n.length, e = l.getParentOrThrow(), 0 < t)
                                        for (u = 0; u < t; u++) e.append(n[u]);
                                    if (0 !== o)
                                        for (n = 0; n < o; n++) t = i[n], null === a ? l.append(t) : a.insertBefore(t), a = t;
                                    l.canBeEmpty() || 0 !== l.getChildrenSize() ? l.selectStart() : (l.selectPrevious(), l.remove())
                                }
                        }
                    }, {
                        key: "insertLineBreak",
                        value: function(e) {
                            var t = Jn(),
                                n = this.anchor;
                            "element" === n.type && (Kn(n = n.getNode()) && this.insertParagraph()), e ? this.insertNodes([t], !0) : this.insertNodes([t]) && t.selectNext(0, 0)
                        }
                    }, {
                        key: "getCharacterOffsets",
                        value: function() {
                            return rn(this)
                        }
                    }, {
                        key: "extract",
                        value: function() {
                            var e, t, n = this.getNodes(),
                                r = n.length,
                                o = r - 1,
                                i = this.anchor,
                                a = this.focus,
                                l = n[0],
                                u = n[o],
                                s = rn(this),
                                c = f(s, 2),
                                d = c[0],
                                p = c[1];
                            return 0 === r ? [] : 1 === r ? sr(l) ? (n = d > p ? p : d, o = l.splitText(n, d > p ? d : p), null != (n = 0 === n ? o[0] : o[1]) ? [n] : []) : [l] : (r = i.isBefore(a), sr(l) && ((i = r ? d : p) === l.getTextContentSize() ? n.shift() : 0 !== i && (e = l.splitText(i), l = f(e, 2)[1], n[0] = l)), sr(u) && (l = u.getTextContent().length, 0 === (r = r ? p : d) ? n.pop() : r !== l && (t = u.splitText(r), u = f(t, 1)[0], n[o] = u)), n)
                        }
                    }, {
                        key: "modify",
                        value: function(e, t, n) {
                            var r = this.focus,
                                o = this.anchor,
                                i = "move" === e,
                                a = Ye(r, t);
                            zn(a) && !a.isIsolated() ? sr(e = t ? a.getPreviousSibling() : a.getNextSibling()) ? (a = e.__key, t = t ? e.getTextContent().length : 0, r.set(a, t, "text"), i && o.set(a, t, "text")) : (n = a.getParentOrThrow(), Un(e) ? (n = e.__key, a = t ? e.getChildrenSize() : 0) : (a = a.getIndexWithinParent(), n = n.__key, t || a++), r.set(n, a, "element"), i && o.set(n, a, "element")) : (r = window.getSelection()) && (r.modify(e, t ? "backward" : "forward", n), 0 < r.rangeCount && (t = r.getRangeAt(0), this.applyDOMRange(t), this.dirty = !0, i || r.anchorNode === t.startContainer && r.anchorOffset === t.startOffset || (i = this.focus, r = (t = this.anchor).key, o = t.offset, a = t.type, qt(t, i.key, i.offset, i.type), qt(i, r, o, a), this._cachedNodes = null)))
                        }
                    }, {
                        key: "deleteCharacter",
                        value: function(e) {
                            if (this.isCollapsed()) {
                                var t = this.anchor,
                                    n = this.focus,
                                    r = t.getNode();
                                if (!e && ("element" === t.type && Un(r) && t.offset === r.getChildrenSize() || "text" === t.type && t.offset === r.getTextContentSize()) && (Un(r = r.getNextSibling() || r.getParentOrThrow().getNextSibling()) && !r.canExtractContents())) return;
                                if (this.modify("extend", e, "character"), this.isCollapsed()) {
                                    if (e && 0 === t.offset && ("element" === t.type ? t.getNode() : t.getNode().getParentOrThrow()).collapseAtStart(this)) return
                                } else {
                                    var o = "text" === n.type ? n.getNode() : null;
                                    if (r = "text" === t.type ? t.getNode() : null, null !== o && o.isSegmented()) {
                                        if (t = n.offset, n = o.getTextContentSize(), o.is(r) || e && t !== n || !e && 0 !== t) return void on(o, e, t)
                                    } else if (null !== r && r.isSegmented() && (t = t.offset, n = r.getTextContentSize(), r.is(o) || e && 0 !== t || !e && t !== n)) return void on(r, e, t);
                                    if (r = this.anchor, o = this.focus, (t = r.getNode()) === (n = o.getNode()) && "text" === r.type && "text" === o.type) {
                                        var i = r.offset,
                                            a = o.offset,
                                            l = i < a;
                                        (n = l ? i : a) !== (i = (a = l ? a : i) - 1) && (t = t.getTextContent().slice(n, a), /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t) || (e ? o.offset = i : r.offset = i))
                                    }
                                }
                            }
                            this.removeText()
                        }
                    }, {
                        key: "deleteLine",
                        value: function(e) {
                            this.isCollapsed() && this.modify("extend", e, "lineboundary"), this.removeText()
                        }
                    }, {
                        key: "deleteWord",
                        value: function(e) {
                            this.isCollapsed() && this.modify("extend", e, "word"), this.removeText()
                        }
                    }]), e
                }();

                function tn(e) {
                    return e instanceof Jt
                }

                function nn(e) {
                    var t = e.offset;
                    return "text" === e.type ? t : t === (e = e.getNode()).getChildrenSize() ? e.getTextContent().length : 0
                }

                function rn(e) {
                    var t = e.anchor;
                    return e = e.focus, "element" === t.type && "element" === e.type && t.key === e.key && t.offset === e.offset ? [0, 0] : [nn(t), nn(e)]
                }

                function on(e, t, n) {
                    for (var r = e.getTextContent().split(/(?=\s)/g), o = r.length, i = 0, a = 0, l = 0; l < o; l++) {
                        var u = l === o - 1;
                        if (a = i, i += r[l].length, t && i === n || i > n || u) {
                            r.splice(l, 1), u && (a = void 0);
                            break
                        }
                    }
                    "" === (t = r.join("").trim()) ? e.remove(): (e.setTextContent(t), e.select(a, a))
                }

                function an(e, t, n) {
                    var r = t;
                    if (1 === e.nodeType) {
                        var o = !1,
                            i = e.childNodes,
                            a = i.length;
                        if (r === a && (o = !0, r = a - 1), sr(i = Fe(i[r]))) r = o ? i.getTextContentSize() : 0;
                        else {
                            if (null === (a = Fe(e))) return null;
                            if (Un(a) ? ((t = Un(e = a.getChildAtIndex(r))) && (t = e.getParent(), t = null === n || null === t || !t.canBeEmpty() || t !== n.getNode()), t && (null === (n = o ? e.getLastDescendant() : e.getFirstDescendant()) ? (a = e, r = 0) : a = (e = n).getParentOrThrow()), sr(e) ? (i = e, a = null, r = o ? e.getTextContentSize() : 0) : e !== a && o && r++) : (r = a.getIndexWithinParent(), r = 0 === t && zn(a) && Fe(e) === a ? r : r + 1, a = a.getParentOrThrow()), Un(a)) return new Ht(a.__key, r, "element")
                        }
                    } else i = Fe(e);
                    return sr(i) ? new Ht(i.__key, r, "text") : null
                }

                function ln(e, t, n) {
                    var r = e.offset,
                        o = e.getNode();
                    0 === r ? (r = o.getPreviousSibling(), o = o.getParent(), t ? (n || !t) && null === r && Un(o) && o.isInline() && (sr(t = o.getPreviousSibling()) && (e.key = t.__key, e.offset = t.getTextContent().length)) : Un(r) && !n && r.isInline() ? (e.key = r.__key, e.offset = r.getChildrenSize(), e.type = "element") : sr(r) && !r.isInert() && (e.key = r.__key, e.offset = r.getTextContent().length)) : r === o.getTextContent().length && (r = o.getNextSibling(), o = o.getParent(), t && Un(r) && r.isInline() ? (e.key = r.__key, e.offset = 0, e.type = "element") : (n || t) && null === r && Un(o) && o.isInline() && !o.canInsertTextAfter() && (sr(t = o.getNextSibling()) && (e.key = t.__key, e.offset = 0)))
                }

                function un(e, t, n) {
                    if ("text" === e.type && "text" === t.type) {
                        var r = e.isBefore(t),
                            o = e.is(t);
                        ln(e, r, o), ln(t, !r, o), o && (t.key = e.key, t.offset = e.offset, t.type = e.type), (r = En()).isComposing() && r._compositionKey !== e.key && Gt(n) && (r = n.anchor, n = n.focus, qt(e, r.key, r.offset, r.type), qt(t, n.key, n.offset, n.type))
                    }
                }

                function sn(e, t, n, r, o, i) {
                    return null !== e && null !== n && be(o, e, n) ? null === (t = an(e, t, Gt(i) ? i.anchor : null)) || null === (r = an(n, r, Gt(i) ? i.focus : null)) || "element" === t.type && "element" === r.type && (e = Fe(e), n = Fe(n), zn(e) && zn(n)) ? null : (un(t, r, i), [t, r]) : null
                }

                function cn(e) {
                    return Un(e) && !e.isInline()
                }

                function fn(e, t, n, r, o, i) {
                    var a = Nn();
                    return (e = new en(new Ht(e, t, o), new Ht(n, r, i), 0)).dirty = !0, a._selection = e
                }

                function dn(e, t, n) {
                    var r, o = window.event,
                        i = o ? o.type : void 0,
                        a = "selectionchange" === i;
                    if (o = !fe && (a || "beforeinput" === i || "compositionstart" === i || "compositionend" === i || "click" === i && o && 3 === o.detail || void 0 === i), Gt(e) && !o) return e.clone();
                    if (null === t) return null;
                    if (o = t.anchorNode, i = t.focusNode, r = t.anchorOffset, t = t.focusOffset, a && Gt(e) && !be(n, o, i)) return e.clone();
                    if (null === (n = sn(o, r, i, t, n, e))) return null;
                    var l = f(n, 2),
                        u = l[0],
                        s = l[1];
                    return new en(u, s, Gt(e) ? e.format : 0)
                }

                function pn() {
                    return Nn()._selection
                }

                function hn() {
                    return En()._editorState._selection
                }

                function gn(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        o = e.anchor,
                        i = e.focus,
                        a = o.getNode(),
                        l = i.getNode();
                    if (t.is(a) || t.is(l))
                        if (a = t.__key, e.isCollapsed()) n <= (t = o.offset) && (n = Math.max(0, t + r), o.set(a, n, "element"), i.set(a, n, "element"), vn(e));
                        else {
                            var u = e.isBackward(),
                                s = (l = u ? i : o).getNode();
                            i = (o = u ? o : i).getNode(), t.is(s) && (n <= (s = l.offset) && l.set(a, Math.max(0, s + r), "element")), t.is(i) && (n <= (t = o.offset) && o.set(a, Math.max(0, t + r), "element")), vn(e)
                        }
                }

                function vn(e) {
                    var t = e.anchor,
                        n = t.offset,
                        r = e.focus,
                        o = r.offset,
                        i = t.getNode(),
                        a = r.getNode();
                    if (e.isCollapsed()) Un(i) && (sr(a = (o = n >= (a = i.getChildrenSize())) ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(n)) && (n = 0, o && (n = a.getTextContentSize()), t.set(a.__key, n, "text"), r.set(a.__key, n, "text")));
                    else {
                        if (Un(i)) {
                            var l = i.getChildrenSize();
                            sr(n = (e = n >= l) ? i.getChildAtIndex(l - 1) : i.getChildAtIndex(n)) && (i = 0, e && (i = n.getTextContentSize()), t.set(n.__key, i, "text"))
                        }
                        Un(a) && (sr(o = (t = o >= (n = a.getChildrenSize())) ? a.getChildAtIndex(n - 1) : a.getChildAtIndex(o)) && (a = 0, t && (a = o.getTextContentSize()), r.set(o.__key, a, "text")))
                    }
                }

                function mn(e, t, n, r, o) {
                    var i = null,
                        a = 0,
                        l = null;
                    null !== r ? (i = r.__key, sr(r) ? (a = r.getTextContentSize(), l = "text") : Un(r) && (a = r.getChildrenSize(), l = "element")) : null !== o && (i = o.__key, sr(o) ? l = "text" : Un(o) && (l = "element")), null !== i && null !== l ? e.set(i, a, l) : (-1 === (a = t.getIndexWithinParent()) && (a = n.getChildrenSize()), e.set(n.__key, a, "element"))
                }

                function yn(e, t, n, r, o) {
                    "text" === e.type ? (e.key = n, t || (e.offset += o)) : e.offset > r.getIndexWithinParent() && --e.offset
                }
                var _n = null,
                    bn = null,
                    xn = !1,
                    kn = !1,
                    Cn = 0;

                function Sn() {
                    xn && Y(13)
                }

                function Nn() {
                    return null === _n && Y(15), _n
                }

                function En() {
                    return null === bn && Y(16), bn
                }

                function wn(e, t, n) {
                    var r = t.__type,
                        o = e._nodes.get(r);
                    for (void 0 === o && Y(30), void 0 === (e = n.get(r)) && (e = Array.from(o.transforms), n.set(r, e)), n = e.length, r = 0; r < n && (e[r](t), t.isAttached()); r++);
                }

                function Tn(e, t) {
                    var n = t.get(e.type);
                    if (void 0 === n && Y(17), n = n.klass, e.type !== n.getType() && Y(18), n = n.importJSON(e), e = e.children, Un(n) && Array.isArray(e))
                        for (var r = 0; r < e.length; r++) {
                            var o = Tn(e[r], t);
                            n.append(o)
                        }
                    return n
                }

                function On(e, t) {
                    var n = _n,
                        r = xn,
                        o = bn;
                    _n = e, xn = !0, bn = null;
                    try {
                        return t()
                    } finally {
                        _n = n, xn = r, bn = o
                    }
                }

                function Mn(e) {
                    var t = e._pendingEditorState,
                        n = e._rootElement,
                        r = e._headless;
                    if ((null !== n || r) && null !== t) {
                        var o = e._editorState,
                            i = o._selection,
                            a = t._selection,
                            l = 0 !== e._dirtyType,
                            u = _n,
                            s = xn,
                            c = bn,
                            d = e._updating,
                            p = e._observer,
                            h = null;
                        if (e._pendingEditorState = null, e._editorState = t, !r && l && null !== p) {
                            bn = e, _n = t, xn = !1, e._updating = !0;
                            try {
                                var g = e._dirtyType,
                                    v = e._dirtyElements,
                                    m = e._dirtyLeaves;
                                p.disconnect(), dt = pt = ft = "", ht = 2 === g, vt = null, nt = e, tt = e._config, rt = e._nodes, ot = nt._listeners.mutation, it = v, at = m, lt = o._nodeMap, ut = t._nodeMap, gt = t._readOnly, st = new Map(e._keyToDOMMap);
                                var y = new Map;
                                ct = y, wt("root", null), ct = st = tt = ut = lt = at = it = rt = nt = void 0, h = y
                            } catch (x) {
                                if (x instanceof Error && e._onError(x), kn) throw x;
                                return pr(e, null, n, t), me(e), e._dirtyType = 2, kn = !0, Mn(e), void(kn = !1)
                            } finally {
                                p.observe(n, {
                                    characterData: !0,
                                    childList: !0,
                                    subtree: !0
                                }), e._updating = d, _n = u, xn = s, bn = c
                            }
                        }
                        t._readOnly = !0, d = e._dirtyLeaves, p = e._dirtyElements, y = e._normalizedNodes, g = e._updateTags, m = e._pendingDecorators, s = e._deferred, l && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = new Set, e._dirtyElements = new Map, e._normalizedNodes = new Set, e._updateTags = new Set), v = e._decorators;
                        var _ = e._pendingDecorators || v,
                            b = t._nodeMap;
                        for (I in _) b.has(I) || (_ === v && (_ = Ae(e)), delete _[I]);
                        if (r = r ? null : window.getSelection(), !e._readOnly && null !== r && (l || null === a || a.dirty)) {
                            bn = e, _n = t;
                            try {
                                e: {
                                    var x = r.anchorNode,
                                        k = r.focusNode,
                                        C = r.anchorOffset,
                                        S = r.focusOffset,
                                        N = document.activeElement;
                                    if (!g.has("collaboration") || N === n)
                                        if (Gt(a)) {
                                            var E = a.anchor,
                                                w = a.focus,
                                                T = E.key,
                                                O = w.key,
                                                M = Je(e, T),
                                                P = Je(e, O),
                                                R = E.offset,
                                                D = w.offset,
                                                A = a.format,
                                                L = a.isCollapsed();
                                            l = M, O = P;
                                            var I = !1;
                                            if ("text" === E.type && (l = Se(M), I = E.getNode().getFormat() !== A), "text" === w.type && (O = Se(P)), null !== l && null !== O) {
                                                if (L && (null === i || I || Gt(i) && i.format !== A)) {
                                                    var $ = performance.now();
                                                    Ft = [A, R, T, $]
                                                }
                                                if (C === R && S === D && x === l && k === O && ("Range" !== r.type || !L) && (null === n || null !== N && n.contains(N) || n.focus({
                                                        preventScroll: !0
                                                    }), !ee && !Z || "element" !== E.type)) break e;
                                                try {
                                                    if (r.setBaseAndExtent(l, R, O, D), a.isCollapsed() && null !== n && n === N) {
                                                        var F = E.getNode();
                                                        if (Un(F)) {
                                                            var j = F.getDescendantByIndex(E.offset);
                                                            null !== j && (F = j)
                                                        }
                                                        var z = e.getElementByKey(F.__key);
                                                        if (null !== z) {
                                                            var B = z.getBoundingClientRect();
                                                            if (B.bottom > window.innerHeight) z.scrollIntoView(!1);
                                                            else if (0 > B.top) z.scrollIntoView();
                                                            else {
                                                                var U = n.getBoundingClientRect();
                                                                Math.floor(B.bottom) > Math.floor(U.bottom) ? z.scrollIntoView(!1) : Math.floor(B.top) < Math.floor(U.top) && z.scrollIntoView()
                                                            }
                                                            g.add("scroll-into-view")
                                                        }
                                                    }
                                                    Lt = !0
                                                } catch (F) {}
                                            }
                                        } else null !== i && be(e, x, k) && r.removeAllRanges()
                                }
                            }
                            finally {
                                bn = c, _n = u
                            }
                        }
                        if (null !== h && function(e, t, n, r) {
                                e._listeners.mutation.forEach((function(e, t) {
                                    void 0 !== (e = r.get(e)) && t(e)
                                }))
                            }(e, 0, 0, h), null !== m && (e._decorators = m, e._pendingDecorators = null, Pn("decorator", e, !0, m)), (n = Le(o)) !== (i = Le(t)) && Pn("textcontent", e, !0, i), Pn("update", e, !0, {
                                dirtyElements: p,
                                dirtyLeaves: d,
                                editorState: t,
                                normalizedNodes: y,
                                prevEditorState: o,
                                tags: g
                            }), e._deferred = [], 0 !== s.length) {
                            t = e._updating, e._updating = !0;
                            try {
                                for (o = 0; o < s.length; o++) s[o]()
                            } finally {
                                e._updating = t
                            }
                        }
                        if (0 !== (t = e._updates).length && (t = t.shift())) {
                            var W = f(t, 2);
                            An(e, W[0], W[1])
                        }
                    }
                }

                function Pn(e, t, n) {
                    var r = t._updating;
                    t._updating = n;
                    try {
                        for (var o = Array.from(t._listeners[e]), i = arguments.length, a = new Array(i > 3 ? i - 3 : 0), l = 3; l < i; l++) a[l - 3] = arguments[l];
                        for (e = 0; e < o.length; e++) o[e].apply(null, a)
                    } finally {
                        t._updating = r
                    }
                }

                function Rn(e, t, n) {
                    if (!1 === e._updating || bn !== e) {
                        var r = !1;
                        return e.update((function() {
                            r = Rn(e, t, n)
                        })), r
                    }
                    for (var o = je(e), i = 4; 0 <= i; i--)
                        for (var a = 0; a < o.length; a++) {
                            var l = o[a]._commands.get(t);
                            if (void 0 !== l && void 0 !== (l = l[i])) {
                                var u, s = d(l);
                                try {
                                    for (s.s(); !(u = s.n()).done;) {
                                        if (!0 === (0, u.value)(n, e)) return !0
                                    }
                                } catch (c) {
                                    s.e(c)
                                } finally {
                                    s.f()
                                }
                            }
                        }
                    return !1
                }

                function Dn(e, t) {
                    var n = e._updates;
                    for (t = t || !1; 0 !== n.length;) {
                        var r = n.shift();
                        if (r) {
                            var o = f(r, 2),
                                i = o[0],
                                a = o[1],
                                l = void 0;
                            void 0 !== a && (r = a.onUpdate, l = a.tag, a.skipTransforms && (t = !0), r && e._deferred.push(r), l && e._updateTags.add(l)), i()
                        }
                    }
                    return t
                }

                function An(e, t, n) {
                    var r = e._updateTags,
                        o = !1;
                    if (void 0 !== n) {
                        var i = n.onUpdate;
                        null != (o = n.tag) && r.add(o), o = n.skipTransforms || !1
                    }
                    i && e._deferred.push(i), n = e._editorState;
                    var a = !1;
                    null === (i = e._pendingEditorState) && (i = e._pendingEditorState = new Yn(new Map(n._nodeMap)), a = !0);
                    var l = _n,
                        u = xn,
                        s = bn,
                        c = e._updating;
                    _n = i, xn = !1, e._updating = !0, bn = e;
                    try {
                        a && !e._headless && (i._selection = function(e) {
                            var t = e.getEditorState()._selection,
                                n = window.getSelection();
                            return tn(t) || Zt(t) ? t.clone() : dn(t, n, e)
                        }(e));
                        var p = e._compositionKey;
                        t(), o = Dn(e, o),
                            function(e, t) {
                                if (t = t.getEditorState()._selection, Gt(e = e._selection)) {
                                    var n, r = e.anchor,
                                        o = e.focus;
                                    "text" === r.type && (n = r.getNode()).selectionTransform(t, e), "text" === o.type && n !== (r = o.getNode()) && r.selectionTransform(t, e)
                                }
                            }(i, e), 0 !== e._dirtyType && (o ? function(e, t) {
                                t = t._dirtyLeaves, e = e._nodeMap;
                                var n, r = d(t);
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        var o = n.value;
                                        sr(t = e.get(o)) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable() && et(t)
                                    }
                                } catch (i) {
                                    r.e(i)
                                } finally {
                                    r.f()
                                }
                            }(i, e) : function(e, t) {
                                var n = t._dirtyLeaves,
                                    r = t._dirtyElements;
                                e = e._nodeMap;
                                for (var o = En()._compositionKey, i = new Map, a = n, l = a.size, u = r, s = u.size; 0 < l || 0 < s;) {
                                    if (0 < l) {
                                        t._dirtyLeaves = new Set;
                                        var c, f = d(a);
                                        try {
                                            for (f.s(); !(c = f.n()).done;) {
                                                var p = c.value;
                                                sr(a = e.get(p)) && a.isAttached() && a.isSimpleText() && !a.isUnmergeable() && et(a), void 0 !== a && void 0 !== a && a.__key !== o && a.isAttached() && wn(t, a, i), n.add(p)
                                            }
                                        } catch (m) {
                                            f.e(m)
                                        } finally {
                                            f.f()
                                        }
                                        if (0 < (l = (a = t._dirtyLeaves).size)) {
                                            Cn++;
                                            continue
                                        }
                                    }
                                    t._dirtyLeaves = new Set, t._dirtyElements = new Map;
                                    var h, g = d(u);
                                    try {
                                        for (g.s(); !(h = g.n()).done;) {
                                            var v = h.value;
                                            u = v[0], s = v[1], ("root" === u || s) && (void 0 !== (a = e.get(u)) && void 0 !== a && a.__key !== o && a.isAttached() && wn(t, a, i), r.set(u, s))
                                        }
                                    } catch (m) {
                                        g.e(m)
                                    } finally {
                                        g.f()
                                    }
                                    l = (a = t._dirtyLeaves).size, s = (u = t._dirtyElements).size, Cn++
                                }
                                t._dirtyLeaves = n, t._dirtyElements = r
                            }(i, e), Dn(e), function(e, t, n, r) {
                                e = e._nodeMap, t = t._nodeMap;
                                var o, i = d(n);
                                try {
                                    for (i.s(); !(o = i.n()).done;) {
                                        var a = o.value,
                                            l = t.get(a);
                                        void 0 === l || l.isAttached() || (e.has(a) || n.delete(a), t.delete(a))
                                    }
                                } catch (p) {
                                    i.e(p)
                                } finally {
                                    i.f()
                                }
                                var u, s = d(r);
                                try {
                                    for (s.s(); !(u = s.n()).done;) {
                                        var c = f(u.value, 1)[0];
                                        void 0 === (n = t.get(c)) || n.isAttached() || (Un(n) && Ge(n, c, e, t, r), e.has(c) || r.delete(c), t.delete(c))
                                    }
                                } catch (p) {
                                    s.e(p)
                                } finally {
                                    s.f()
                                }
                            }(n, i, e._dirtyLeaves, e._dirtyElements)), p !== e._compositionKey && (i._flushSync = !0);
                        var h = i._selection;
                        if (Gt(h)) {
                            var g = i._nodeMap,
                                v = h.focus.key;
                            void 0 !== g.get(h.anchor.key) && void 0 !== g.get(v) || Y(19)
                        } else tn(h) && 0 === h._nodes.size && (i._selection = null)
                    } catch (p) {
                        return p instanceof Error && e._onError(p), e._pendingEditorState = n, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = new Set, e._dirtyElements.clear(), void Mn(e)
                    } finally {
                        _n = l, xn = u, bn = s, e._updating = c, Cn = 0
                    }
                    0 !== e._dirtyType || function(e, t) {
                        if (t = t.getEditorState()._selection, null !== (e = e._selection)) {
                            if (e.dirty || !e.is(t)) return !0
                        } else if (null !== t) return !0;
                        return !1
                    }(i, e) ? i._flushSync ? (i._flushSync = !1, Mn(e)) : a && _e((function() {
                        Mn(e)
                    })) : (i._flushSync = !1, a && (r.clear(), e._deferred = [], e._pendingEditorState = null))
                }

                function Ln(e, t, n) {
                    e._updating ? e._updates.push([t, n]) : An(e, t, n)
                }

                function In(e, t, n) {
                    Sn();
                    var r = e.__key,
                        o = e.getParent();
                    if (null !== o) {
                        var i = pn(),
                            a = !1;
                        if (Gt(i) && t) {
                            var l = i.anchor,
                                u = i.focus;
                            l.key === r && (mn(l, e, o, e.getPreviousSibling(), e.getNextSibling()), a = !0), u.key === r && (mn(u, e, o, e.getPreviousSibling(), e.getNextSibling()), a = !0)
                        } - 1 === (r = (l = o.getWritable().__children).indexOf(r)) && Y(31), Oe(e), l.splice(r, 1), e.getWritable().__parent = null, Gt(i) && t && !a && gn(i, o, r, -1), n || null === o || Kn(o) || o.canBeEmpty() || !o.isEmpty() || In(o, t), null !== o && Kn(o) && o.isEmpty() && o.selectEnd()
                    }
                }

                function $n(e) {
                    return null === (e = Pe(e)) && Y(63), e
                }
                var Fn = function() {
                        function e(t) {
                            if (u(this, e), this.__type = this.constructor.getType(), this.__parent = null, null != t) this.__key = t;
                            else {
                                Sn(), 99 < Cn && Y(14), t = En();
                                var n = Nn(),
                                    r = "" + ye++;
                                n._nodeMap.set(r, this), Un(this) ? t._dirtyElements.set(r, !0) : t._dirtyLeaves.add(r), t._cloneNotNeeded.add(r), t._dirtyType = 1, this.__key = r
                            }
                        }
                        return s(e, [{
                            key: "getType",
                            value: function() {
                                return this.__type
                            }
                        }, {
                            key: "isAttached",
                            value: function() {
                                for (var e = this.__key; null !== e;) {
                                    if ("root" === e) return !0;
                                    if (null === (e = Pe(e))) break;
                                    e = e.__parent
                                }
                                return !1
                            }
                        }, {
                            key: "isSelected",
                            value: function() {
                                var e = this,
                                    t = pn();
                                if (null == t) return !1;
                                var n = t.getNodes().some((function(t) {
                                    return t.__key === e.__key
                                }));
                                return (sr(this) || !Gt(t) || "element" !== t.anchor.type || "element" !== t.focus.type || t.anchor.key !== t.focus.key || t.anchor.offset !== t.focus.offset) && n
                            }
                        }, {
                            key: "getKey",
                            value: function() {
                                return this.__key
                            }
                        }, {
                            key: "getIndexWithinParent",
                            value: function() {
                                var e = this.getParent();
                                return null === e ? -1 : e.__children.indexOf(this.__key)
                            }
                        }, {
                            key: "getParent",
                            value: function() {
                                var e = this.getLatest().__parent;
                                return null === e ? null : Pe(e)
                            }
                        }, {
                            key: "getParentOrThrow",
                            value: function() {
                                var e = this.getParent();
                                return null === e && Y(66), e
                            }
                        }, {
                            key: "getTopLevelElement",
                            value: function() {
                                for (var e = this; null !== e;) {
                                    var t = e.getParent();
                                    if (Kn(t) && Un(e)) return e;
                                    e = t
                                }
                                return null
                            }
                        }, {
                            key: "getTopLevelElementOrThrow",
                            value: function() {
                                var e = this.getTopLevelElement();
                                return null === e && Y(67), e
                            }
                        }, {
                            key: "getParents",
                            value: function() {
                                for (var e = [], t = this.getParent(); null !== t;) e.push(t), t = t.getParent();
                                return e
                            }
                        }, {
                            key: "getParentKeys",
                            value: function() {
                                for (var e = [], t = this.getParent(); null !== t;) e.push(t.__key), t = t.getParent();
                                return e
                            }
                        }, {
                            key: "getPreviousSibling",
                            value: function() {
                                var e = this.getParent();
                                if (null === e) return null;
                                var t = (e = e.__children).indexOf(this.__key);
                                return 0 >= t ? null : Pe(e[t - 1])
                            }
                        }, {
                            key: "getPreviousSiblings",
                            value: function() {
                                var e = this.getParent();
                                if (null === e) return [];
                                var t = (e = e.__children).indexOf(this.__key);
                                return e.slice(0, t).map((function(e) {
                                    return $n(e)
                                }))
                            }
                        }, {
                            key: "getNextSibling",
                            value: function() {
                                var e = this.getParent();
                                if (null === e) return null;
                                var t = (e = e.__children).length,
                                    n = e.indexOf(this.__key);
                                return n >= t - 1 ? null : Pe(e[n + 1])
                            }
                        }, {
                            key: "getNextSiblings",
                            value: function() {
                                var e = this.getParent();
                                if (null === e) return [];
                                var t = (e = e.__children).indexOf(this.__key);
                                return e.slice(t + 1).map((function(e) {
                                    return $n(e)
                                }))
                            }
                        }, {
                            key: "getCommonAncestor",
                            value: function(e) {
                                var t = this.getParents(),
                                    n = e.getParents();
                                Un(this) && t.unshift(this), Un(e) && n.unshift(e), e = t.length;
                                var r = n.length;
                                if (0 === e || 0 === r || t[e - 1] !== n[r - 1]) return null;
                                for (n = new Set(n), r = 0; r < e; r++) {
                                    var o = t[r];
                                    if (n.has(o)) return o
                                }
                                return null
                            }
                        }, {
                            key: "is",
                            value: function(e) {
                                return null != e && this.__key === e.__key
                            }
                        }, {
                            key: "isBefore",
                            value: function(e) {
                                if (e.isParentOf(this)) return !0;
                                if (this.isParentOf(e)) return !1;
                                for (var t = this.getCommonAncestor(e), n = this;;) {
                                    var r = n.getParentOrThrow();
                                    if (r === t) {
                                        r = r.__children.indexOf(n.__key);
                                        break
                                    }
                                    n = r
                                }
                                for (n = e;;) {
                                    if ((e = n.getParentOrThrow()) === t) {
                                        t = e.__children.indexOf(n.__key);
                                        break
                                    }
                                    n = e
                                }
                                return r < t
                            }
                        }, {
                            key: "isParentOf",
                            value: function(e) {
                                var t = this.__key;
                                if (t === e.__key) return !1;
                                for (; null !== e;) {
                                    if (e.__key === t) return !0;
                                    e = e.getParent()
                                }
                                return !1
                            }
                        }, {
                            key: "getNodesBetween",
                            value: function(e) {
                                for (var t = this.isBefore(e), n = [], r = new Set, o = this;;) {
                                    var i = o.__key;
                                    if (r.has(i) || (r.add(i), n.push(o)), o === e) break;
                                    if (null !== (i = Un(o) ? t ? o.getFirstChild() : o.getLastChild() : null)) o = i;
                                    else if (null !== (i = t ? o.getNextSibling() : o.getPreviousSibling())) o = i;
                                    else {
                                        if (o = o.getParentOrThrow(), r.has(o.__key) || n.push(o), o === e) break;
                                        i = o;
                                        do {
                                            null === i && Y(68), o = t ? i.getNextSibling() : i.getPreviousSibling(), null !== (i = i.getParent()) && (null !== o || r.has(i.__key) || n.push(i))
                                        } while (null === o)
                                    }
                                }
                                return t || n.reverse(), n
                            }
                        }, {
                            key: "isDirty",
                            value: function() {
                                var e = En()._dirtyLeaves;
                                return null !== e && e.has(this.__key)
                            }
                        }, {
                            key: "getLatest",
                            value: function() {
                                var e = Pe(this.__key);
                                return null === e && Y(69), e
                            }
                        }, {
                            key: "getWritable",
                            value: function() {
                                Sn();
                                var e = Nn(),
                                    t = En();
                                e = e._nodeMap;
                                var n = this.__key,
                                    r = this.getLatest(),
                                    o = r.__parent;
                                t = t._cloneNotNeeded;
                                var i = pn();
                                return null !== i && (i._cachedNodes = null), t.has(n) ? (Te(r), r) : ((i = r.constructor.clone(r)).__parent = o, Un(r) && Un(i) ? (i.__children = Array.from(r.__children), i.__indent = r.__indent, i.__format = r.__format, i.__dir = r.__dir) : sr(r) && sr(i) && (i.__format = r.__format, i.__style = r.__style, i.__mode = r.__mode, i.__detail = r.__detail), t.add(n), i.__key = n, Te(i), e.set(n, i), i)
                            }
                        }, {
                            key: "getTextContent",
                            value: function() {
                                return ""
                            }
                        }, {
                            key: "getTextContentSize",
                            value: function(e, t) {
                                return this.getTextContent(e, t).length
                            }
                        }, {
                            key: "createDOM",
                            value: function() {
                                Y(70)
                            }
                        }, {
                            key: "updateDOM",
                            value: function() {
                                Y(71)
                            }
                        }, {
                            key: "exportDOM",
                            value: function(e) {
                                return {
                                    element: this.createDOM(e._config, e)
                                }
                            }
                        }, {
                            key: "exportJSON",
                            value: function() {
                                Y(72)
                            }
                        }, {
                            key: "remove",
                            value: function(e) {
                                Sn(), In(this, !0, e)
                            }
                        }, {
                            key: "replace",
                            value: function(e) {
                                Sn();
                                var t = this.__key;
                                we(e = e.getWritable());
                                var n = this.getParentOrThrow(),
                                    r = n.getWritable().__children,
                                    o = r.indexOf(this.__key),
                                    i = e.__key;
                                return -1 === o && Y(31), r.splice(o, 0, i), e.__parent = n.__key, In(this, !1), Oe(e), Gt(r = pn()) && (n = r.anchor, r = r.focus, n.key === t && Yt(n, e), r.key === t && Yt(r, e)), En()._compositionKey === t && Me(i), e
                            }
                        }, {
                            key: "insertAfter",
                            value: function(e) {
                                Sn();
                                var t = this.getWritable(),
                                    n = e.getWritable(),
                                    r = n.getParent(),
                                    o = pn(),
                                    i = e.getIndexWithinParent(),
                                    a = !1,
                                    l = !1;
                                null !== r && (we(n), Gt(o) && (l = r.__key, a = o.anchor, r = o.focus, a = "element" === a.type && a.key === l && a.offset === i + 1, l = "element" === r.type && r.key === l && r.offset === i + 1)), i = this.getParentOrThrow().getWritable(), r = n.__key, n.__parent = t.__parent;
                                var u = i.__children;
                                return -1 === (t = u.indexOf(t.__key)) && Y(31), u.splice(t + 1, 0, r), Oe(n), Gt(o) && (gn(o, i, t + 1), n = i.__key, a && o.anchor.set(n, t + 2, "element"), l && o.focus.set(n, t + 2, "element")), e
                            }
                        }, {
                            key: "insertBefore",
                            value: function(e) {
                                Sn();
                                var t = this.getWritable(),
                                    n = e.getWritable();
                                we(n);
                                var r = this.getParentOrThrow().getWritable(),
                                    o = n.__key;
                                n.__parent = t.__parent;
                                var i = r.__children;
                                return -1 === (t = i.indexOf(t.__key)) && Y(31), i.splice(t, 0, o), Oe(n), Gt(n = pn()) && gn(n, r, t), e
                            }
                        }, {
                            key: "selectPrevious",
                            value: function(e, t) {
                                Sn();
                                var n = this.getPreviousSibling(),
                                    r = this.getParentOrThrow();
                                return null === n ? r.select(0, 0) : Un(n) ? n.select() : sr(n) ? n.select(e, t) : (e = n.getIndexWithinParent() + 1, r.select(e, e))
                            }
                        }, {
                            key: "selectNext",
                            value: function(e, t) {
                                Sn();
                                var n = this.getNextSibling(),
                                    r = this.getParentOrThrow();
                                return null === n ? r.select() : Un(n) ? n.select(0, 0) : sr(n) ? n.select(e, t) : (e = n.getIndexWithinParent(), r.select(e, e))
                            }
                        }, {
                            key: "markDirty",
                            value: function() {
                                this.getWritable()
                            }
                        }], [{
                            key: "getType",
                            value: function() {
                                Y(64)
                            }
                        }, {
                            key: "clone",
                            value: function() {
                                Y(65)
                            }
                        }, {
                            key: "importJSON",
                            value: function() {
                                Y(18)
                            }
                        }]), e
                    }(),
                    jn = function(e) {
                        a(n, e);
                        var t = l(n);

                        function n(e) {
                            return u(this, n), t.call(this, e)
                        }
                        return s(n, [{
                            key: "decorate",
                            value: function() {
                                Y(47)
                            }
                        }, {
                            key: "isIsolated",
                            value: function() {
                                return !1
                            }
                        }, {
                            key: "isTopLevel",
                            value: function() {
                                return !1
                            }
                        }]), n
                    }(Fn);

                function zn(e) {
                    return e instanceof jn
                }
                var Bn = function(e) {
                    a(n, e);
                    var t = l(n);

                    function n(e) {
                        var r;
                        return u(this, n), (r = t.call(this, e)).__children = [], r.__indent = r.__format = 0, r.__dir = null, r
                    }
                    return s(n, [{
                        key: "getFormat",
                        value: function() {
                            return this.getLatest().__format
                        }
                    }, {
                        key: "getFormatType",
                        value: function() {
                            var e = this.getFormat();
                            return ue[e] || ""
                        }
                    }, {
                        key: "getIndent",
                        value: function() {
                            return this.getLatest().__indent
                        }
                    }, {
                        key: "getChildren",
                        value: function() {
                            for (var e = this.getLatest().__children, t = [], n = 0; n < e.length; n++) {
                                var r = Pe(e[n]);
                                null !== r && t.push(r)
                            }
                            return t
                        }
                    }, {
                        key: "getChildrenKeys",
                        value: function() {
                            return this.getLatest().__children
                        }
                    }, {
                        key: "getChildrenSize",
                        value: function() {
                            return this.getLatest().__children.length
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return 0 === this.getChildrenSize()
                        }
                    }, {
                        key: "isDirty",
                        value: function() {
                            var e = En()._dirtyElements;
                            return null !== e && e.has(this.__key)
                        }
                    }, {
                        key: "isLastChild",
                        value: function() {
                            var e = this.getLatest();
                            return e.getParentOrThrow().getLastChild() === e
                        }
                    }, {
                        key: "getAllTextNodes",
                        value: function(e) {
                            for (var t = [], n = this.getLatest().__children, r = 0; r < n.length; r++) {
                                var o = Pe(n[r]);
                                !sr(o) || !e && o.isInert() ? Un(o) && (o = o.getAllTextNodes(e), t.push.apply(t, c(o))) : t.push(o)
                            }
                            return t
                        }
                    }, {
                        key: "getFirstDescendant",
                        value: function() {
                            for (var e = this.getFirstChild(); null !== e;) {
                                if (Un(e)) {
                                    var t = e.getFirstChild();
                                    if (null !== t) {
                                        e = t;
                                        continue
                                    }
                                }
                                break
                            }
                            return e
                        }
                    }, {
                        key: "getLastDescendant",
                        value: function() {
                            for (var e = this.getLastChild(); null !== e;) {
                                if (Un(e)) {
                                    var t = e.getLastChild();
                                    if (null !== t) {
                                        e = t;
                                        continue
                                    }
                                }
                                break
                            }
                            return e
                        }
                    }, {
                        key: "getDescendantByIndex",
                        value: function(e) {
                            var t = this.getChildren(),
                                n = t.length;
                            return e >= n ? Un(e = t[n - 1]) && e.getLastDescendant() || e || null : Un(e = t[e]) && e.getFirstDescendant() || e || null
                        }
                    }, {
                        key: "getFirstChild",
                        value: function() {
                            var e = this.getLatest().__children;
                            return 0 === e.length ? null : Pe(e[0])
                        }
                    }, {
                        key: "getFirstChildOrThrow",
                        value: function() {
                            var e = this.getFirstChild();
                            return null === e && Y(45), e
                        }
                    }, {
                        key: "getLastChild",
                        value: function() {
                            var e = this.getLatest().__children,
                                t = e.length;
                            return 0 === t ? null : Pe(e[t - 1])
                        }
                    }, {
                        key: "getChildAtIndex",
                        value: function(e) {
                            return void 0 === (e = this.getLatest().__children[e]) ? null : Pe(e)
                        }
                    }, {
                        key: "getTextContent",
                        value: function(e, t) {
                            for (var n = "", r = this.getChildren(), o = r.length, i = 0; i < o; i++) {
                                var a = r[i];
                                n += a.getTextContent(e, t), Un(a) && i !== o - 1 && !a.isInline() && (n += "\n\n")
                            }
                            return n
                        }
                    }, {
                        key: "getDirection",
                        value: function() {
                            return this.getLatest().__dir
                        }
                    }, {
                        key: "hasFormat",
                        value: function(e) {
                            return "" !== e && (e = le[e], 0 !== (this.getFormat() & e))
                        }
                    }, {
                        key: "select",
                        value: function(e, t) {
                            Sn();
                            var n = pn(),
                                r = this.getChildrenSize();
                            return void 0 === e && (e = r), void 0 === t && (t = r), r = this.__key, Gt(n) ? (n.anchor.set(r, e, "element"), n.focus.set(r, t, "element"), n.dirty = !0, n) : fn(r, e, r, t, "element", "element")
                        }
                    }, {
                        key: "selectStart",
                        value: function() {
                            var e = this.getFirstDescendant();
                            return Un(e) || sr(e) ? e.select(0, 0) : null !== e ? e.selectPrevious() : this.select(0, 0)
                        }
                    }, {
                        key: "selectEnd",
                        value: function() {
                            var e = this.getLastDescendant();
                            return Un(e) || sr(e) ? e.select() : null !== e ? e.selectNext() : this.select()
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            Sn();
                            var e = this.getWritable();
                            return this.getChildren().forEach((function(e) {
                                return e.remove()
                            })), e
                        }
                    }, {
                        key: "append",
                        value: function() {
                            Sn();
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.splice(this.getChildrenSize(), 0, t)
                        }
                    }, {
                        key: "setDirection",
                        value: function(e) {
                            Sn();
                            var t = this.getWritable();
                            return t.__dir = e, t
                        }
                    }, {
                        key: "setFormat",
                        value: function(e) {
                            return Sn(), this.getWritable().__format = "" !== e ? le[e] : 0, this
                        }
                    }, {
                        key: "setIndent",
                        value: function(e) {
                            return Sn(), this.getWritable().__indent = e, this
                        }
                    }, {
                        key: "splice",
                        value: function(e, t, n) {
                            Sn();
                            for (var r = this.getWritable(), o = r.__key, i = r.__children, a = n.length, l = [], u = 0; u < a; u++) {
                                var s = n[u],
                                    f = s.getWritable();
                                s.__key === o && Y(46), we(f), f.__parent = o, l.push(f.__key)
                            }
                            if ((n = this.getChildAtIndex(e - 1)) && Te(n), (o = this.getChildAtIndex(e + t)) && Te(o), e === i.length ? (i.push.apply(i, c(l)), e = []) : e = i.splice.apply(i, [e, t].concat(c(l))), e.length && Gt(t = pn())) {
                                var d = new Set(e),
                                    p = new Set(l);
                                l = function(e) {
                                    for (e = e.getNode(); e;) {
                                        var t = e.__key;
                                        if (d.has(t) && !p.has(t)) return !0;
                                        e = e.getParent()
                                    }
                                    return !1
                                };
                                var h = t,
                                    g = h.anchor,
                                    v = h.focus;
                                for (l(g) && mn(g, g.getNode(), this, n, o), l(v) && mn(v, v.getNode(), this, n, o), l = e.length, t = 0; t < l; t++) null != (n = Pe(e[t])) && (n.getWritable().__parent = null);
                                0 !== i.length || this.canBeEmpty() || Kn(this) || this.remove()
                            }
                            return r
                        }
                    }, {
                        key: "exportJSON",
                        value: function() {
                            return {
                                children: [],
                                direction: this.getDirection(),
                                format: this.getFormatType(),
                                indent: this.getIndent(),
                                type: "element",
                                version: 1
                            }
                        }
                    }, {
                        key: "insertNewAfter",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "canInsertTab",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "canIndent",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "collapseAtStart",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "excludeFromCopy",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "canExtractContents",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "canReplaceWith",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "canInsertAfter",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "canBeEmpty",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "canInsertTextBefore",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "canInsertTextAfter",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "isInline",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "canMergeWith",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "extractWithChild",
                        value: function() {
                            return !1
                        }
                    }]), n
                }(Fn);

                function Un(e) {
                    return e instanceof Bn
                }
                var Wn = function(e) {
                    a(n, e);
                    var t = l(n);

                    function n() {
                        var e;
                        return u(this, n), (e = t.call(this, "root")).__cachedText = null, e
                    }
                    return s(n, [{
                        key: "getTopLevelElementOrThrow",
                        value: function() {
                            Y(51)
                        }
                    }, {
                        key: "getTextContent",
                        value: function(e, t) {
                            var r = this.__cachedText;
                            return !xn && 0 !== En()._dirtyType || null === r || e && !1 === t ? o(i(n.prototype), "getTextContent", this).call(this, e, t) : r
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            Y(52)
                        }
                    }, {
                        key: "replace",
                        value: function() {
                            Y(53)
                        }
                    }, {
                        key: "insertBefore",
                        value: function() {
                            Y(54)
                        }
                    }, {
                        key: "insertAfter",
                        value: function() {
                            Y(55)
                        }
                    }, {
                        key: "updateDOM",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "append",
                        value: function() {
                            for (var e, t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                            for (var l = 0; l < r.length; l++) {
                                var u = r[l];
                                Un(u) || zn(u) || Y(56)
                            }
                            return (e = o(i(n.prototype), "append", this)).call.apply(e, [this].concat(r))
                        }
                    }, {
                        key: "exportJSON",
                        value: function() {
                            return {
                                children: [],
                                direction: this.getDirection(),
                                format: this.getFormatType(),
                                indent: this.getIndent(),
                                type: "root",
                                version: 1
                            }
                        }
                    }], [{
                        key: "getType",
                        value: function() {
                            return "root"
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return new n
                        }
                    }, {
                        key: "importJSON",
                        value: function(e) {
                            var t = Ie();
                            return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                        }
                    }]), n
                }(Bn);

                function Kn(e) {
                    return e instanceof Wn
                }

                function Hn() {
                    return new Yn(new Map([
                        ["root", new Wn]
                    ]))
                }

                function Vn(e) {
                    var t = e.exportJSON();
                    t.type !== e.constructor.getType() && Y(58);
                    var n = t.children;
                    if (Un(e)) {
                        Array.isArray(n) || Y(59), e = e.getChildren();
                        for (var r = 0; r < e.length; r++) {
                            var o = Vn(e[r]);
                            n.push(o)
                        }
                    }
                    return t
                }
                var Yn = function() {
                        function e(t, n) {
                            u(this, e), this._nodeMap = t, this._selection = n || null, this._readOnly = this._flushSync = !1
                        }
                        return s(e, [{
                            key: "isEmpty",
                            value: function() {
                                return 1 === this._nodeMap.size && null === this._selection
                            }
                        }, {
                            key: "read",
                            value: function(e) {
                                return On(this, e)
                            }
                        }, {
                            key: "clone",
                            value: function(t) {
                                return (t = new e(this._nodeMap, void 0 === t ? this._selection : t))._readOnly = !0, t
                            }
                        }, {
                            key: "toJSON",
                            value: function() {
                                return On(this, (function() {
                                    return {
                                        root: Vn(Ie())
                                    }
                                }))
                            }
                        }]), e
                    }(),
                    Qn = function(e) {
                        a(n, e);
                        var t = l(n);

                        function n(e) {
                            return u(this, n), t.call(this, e)
                        }
                        return s(n, [{
                            key: "getTextContent",
                            value: function() {
                                return "\n"
                            }
                        }, {
                            key: "createDOM",
                            value: function() {
                                return document.createElement("br")
                            }
                        }, {
                            key: "updateDOM",
                            value: function() {
                                return !1
                            }
                        }, {
                            key: "exportJSON",
                            value: function() {
                                return {
                                    type: "linebreak",
                                    version: 1
                                }
                            }
                        }], [{
                            key: "getType",
                            value: function() {
                                return "linebreak"
                            }
                        }, {
                            key: "clone",
                            value: function(e) {
                                return new n(e.__key)
                            }
                        }, {
                            key: "importDOM",
                            value: function() {
                                return {
                                    br: function(e) {
                                        var t = e.parentElement;
                                        return null != t && t.firstChild === e && t.lastChild === e ? null : {
                                            conversion: qn,
                                            priority: 0
                                        }
                                    }
                                }
                            }
                        }, {
                            key: "importJSON",
                            value: function() {
                                return Jn()
                            }
                        }]), n
                    }(Fn);

                function qn() {
                    return {
                        node: Jn()
                    }
                }

                function Jn() {
                    return new Qn
                }

                function Gn(e) {
                    return e instanceof Qn
                }

                function Xn(e, t) {
                    return 16 & t ? "code" : 32 & t ? "sub" : 64 & t ? "sup" : null
                }

                function Zn(e, t) {
                    return 1 & t ? "strong" : 2 & t ? "em" : "span"
                }

                function er(e, t, n, r, o) {
                    var i, a, l;
                    e = r.classList, void 0 !== (r = Ke(o, "base")) && (i = e).add.apply(i, c(r)), r = Ke(o, "underlineStrikethrough");
                    var u = !1,
                        s = 8 & t && 4 & t,
                        f = 8 & n && 4 & n;
                    for (var d in void 0 !== r && (f ? (u = !0, s || (a = e).add.apply(a, c(r))) : s && (l = e).remove.apply(l, c(r))), ie) {
                        var p, h, g;
                        f = ie[d], void 0 !== (r = Ke(o, d)) && (n & f ? !u || "underline" !== d && "strikethrough" !== d ? (0 === (t & f) || s && "underline" === d || "strikethrough" === d) && (p = e).add.apply(p, c(r)) : t & f && (h = e).remove.apply(h, c(r)) : t & f && (g = e).remove.apply(g, c(r)))
                    }
                }

                function tr(e, t, n) {
                    var r = t.firstChild;
                    if (e += (n = n.isComposing()) ? te : "", null == r) t.textContent = e;
                    else if ((t = r.nodeValue) !== e)
                        if (n || G) {
                            n = t.length;
                            for (var o = e.length, i = 0, a = 0; i < n && i < o && t[i] === e[i];) i++;
                            for (; a + i < n && a + i < o && t[n - a - 1] === e[o - a - 1];) a++;
                            e = [i, n - i - a, e.slice(i, o - a)];
                            var l = f(e, 3),
                                u = l[0],
                                s = l[1],
                                c = l[2];
                            0 !== s && r.deleteData(u, s), r.insertData(u, c)
                        } else r.nodeValue = e
                }
                var nr = function(e) {
                    a(n, e);
                    var t = l(n);

                    function n(e, r) {
                        var o;
                        return u(this, n), (o = t.call(this, r)).__text = e, o.__format = 0, o.__style = "", o.__detail = o.__mode = 0, o
                    }
                    return s(n, [{
                        key: "getFormat",
                        value: function() {
                            return this.getLatest().__format
                        }
                    }, {
                        key: "getDetail",
                        value: function() {
                            return this.getLatest().__detail
                        }
                    }, {
                        key: "getMode",
                        value: function() {
                            var e = this.getLatest();
                            return ce[e.__mode]
                        }
                    }, {
                        key: "getStyle",
                        value: function() {
                            return this.getLatest().__style
                        }
                    }, {
                        key: "isToken",
                        value: function() {
                            return 1 === this.getLatest().__mode
                        }
                    }, {
                        key: "isComposing",
                        value: function() {
                            return this.__key === En()._compositionKey
                        }
                    }, {
                        key: "isSegmented",
                        value: function() {
                            return 2 === this.getLatest().__mode
                        }
                    }, {
                        key: "isInert",
                        value: function() {
                            return 3 === this.getLatest().__mode
                        }
                    }, {
                        key: "isDirectionless",
                        value: function() {
                            return 0 !== (1 & this.getLatest().__detail)
                        }
                    }, {
                        key: "isUnmergeable",
                        value: function() {
                            return 0 !== (2 & this.getLatest().__detail)
                        }
                    }, {
                        key: "hasFormat",
                        value: function(e) {
                            return e = ie[e], 0 !== (this.getFormat() & e)
                        }
                    }, {
                        key: "isSimpleText",
                        value: function() {
                            return "text" === this.__type && 0 === this.__mode
                        }
                    }, {
                        key: "getTextContent",
                        value: function(e, t) {
                            return !e && this.isInert() || !1 === t && this.isDirectionless() ? "" : this.getLatest().__text
                        }
                    }, {
                        key: "getFormatFlags",
                        value: function(e, t) {
                            return Ne(this.getLatest().__format, e, t)
                        }
                    }, {
                        key: "createDOM",
                        value: function(e) {
                            var t = this.__format,
                                n = Xn(0, t),
                                r = Zn(0, t),
                                o = document.createElement(null === n ? r : n),
                                i = o;
                            return null !== n && (i = document.createElement(r), o.appendChild(i)), n = i, tr(this.__text, n, this), void 0 !== (e = e.theme.text) && er(r, 0, t, n, e), "" !== (t = this.__style) && (o.style.cssText = t), o
                        }
                    }, {
                        key: "updateDOM",
                        value: function(e, t, n) {
                            var r = this.__text,
                                o = e.__format,
                                i = this.__format,
                                a = Xn(0, o),
                                l = Xn(0, i),
                                u = Zn(0, o),
                                s = Zn(0, i);
                            return (null === a ? u : a) !== (null === l ? s : l) || (a === l && u !== s ? (null == (o = t.firstChild) && Y(48), tr(r, e = a = document.createElement(s), this), void 0 !== (n = n.theme.text) && er(s, 0, i, e, n), t.replaceChild(a, o), !1) : (u = t, null !== l && null !== a && (null == (u = t.firstChild) && Y(49)), tr(r, u, this), void 0 !== (n = n.theme.text) && o !== i && er(s, o, i, u, n), i = this.__style, e.__style !== i && (t.style.cssText = i), !1))
                        }
                    }, {
                        key: "exportJSON",
                        value: function() {
                            return {
                                detail: this.getDetail(),
                                format: this.getFormat(),
                                mode: this.getMode(),
                                style: this.getStyle(),
                                text: this.getTextContent(),
                                type: "text",
                                version: 1
                            }
                        }
                    }, {
                        key: "selectionTransform",
                        value: function() {}
                    }, {
                        key: "setFormat",
                        value: function(e) {
                            Sn();
                            var t = this.getWritable();
                            return t.__format = "string" === typeof e ? ie[e] : e, t
                        }
                    }, {
                        key: "setDetail",
                        value: function(e) {
                            Sn();
                            var t = this.getWritable();
                            return t.__detail = "string" === typeof e ? ae[e] : e, t
                        }
                    }, {
                        key: "setStyle",
                        value: function(e) {
                            Sn();
                            var t = this.getWritable();
                            return t.__style = e, t
                        }
                    }, {
                        key: "toggleFormat",
                        value: function(e) {
                            return e = ie[e], this.setFormat(this.getFormat() ^ e)
                        }
                    }, {
                        key: "toggleDirectionless",
                        value: function() {
                            Sn();
                            var e = this.getWritable();
                            return e.__detail ^= 1, e
                        }
                    }, {
                        key: "toggleUnmergeable",
                        value: function() {
                            Sn();
                            var e = this.getWritable();
                            return e.__detail ^= 2, e
                        }
                    }, {
                        key: "setMode",
                        value: function(e) {
                            Sn(), e = se[e];
                            var t = this.getWritable();
                            return t.__mode = e, t
                        }
                    }, {
                        key: "setTextContent",
                        value: function(e) {
                            Sn();
                            var t = this.getWritable();
                            return t.__text = e, t
                        }
                    }, {
                        key: "select",
                        value: function(e, t) {
                            Sn();
                            var n = pn(),
                                r = this.getTextContent(),
                                o = this.__key;
                            return "string" === typeof r ? (r = r.length, void 0 === e && (e = r), void 0 === t && (t = r)) : t = e = 0, Gt(n) ? ((r = En()._compositionKey) !== n.anchor.key && r !== n.focus.key || Me(o), n.setTextNodeRange(this, e, this, t), n) : fn(o, e, o, t, "text", "text")
                        }
                    }, {
                        key: "spliceText",
                        value: function(e, t, n, r) {
                            Sn();
                            var o = this.getWritable(),
                                i = o.__text,
                                a = n.length,
                                l = e;
                            0 > l && (0 > (l = a + l) && (l = 0));
                            var u = pn();
                            return r && Gt(u) && (e += a, u.setTextNodeRange(o, e, o, e)), t = i.slice(0, l) + n + i.slice(l + t), o.__text = t, o
                        }
                    }, {
                        key: "canInsertTextBefore",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "canInsertTextAfter",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "splitText",
                        value: function() {
                            for (var e, t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                            Sn();
                            var i = this.getLatest(),
                                a = i.getTextContent(),
                                l = i.__key,
                                u = En()._compositionKey,
                                s = new Set(r);
                            r = [];
                            for (var f = a.length, d = "", p = 0; p < f; p++) "" !== d && s.has(p) && (r.push(d), d = ""), d += a[p];
                            if ("" !== d && r.push(d), 0 === (s = r.length)) return [];
                            if (r[0] === a) return [i];
                            var h = r[0];
                            p = (a = i.getParentOrThrow()).__key;
                            var g = i.getFormat(),
                                v = i.getStyle(),
                                m = i.__detail;
                            f = !1, i.isSegmented() ? ((d = ur(h)).__parent = p, d.__format = g, d.__style = v, d.__detail = m, f = !0) : (d = i.getWritable()).__text = h, i = pn(), d = [d], h = h.length;
                            for (var y = 1; y < s; y++) {
                                var _ = r[y],
                                    b = _.length;
                                (_ = ur(_).getWritable()).__format = g, _.__style = v, _.__detail = m;
                                var x = _.__key;
                                if (b = h + b, Gt(i)) {
                                    var k = i.anchor,
                                        C = i.focus;
                                    k.key === l && "text" === k.type && k.offset > h && k.offset <= b && (k.key = x, k.offset -= h, i.dirty = !0), C.key === l && "text" === C.type && C.offset > h && C.offset <= b && (C.key = x, C.offset -= h, i.dirty = !0)
                                }
                                u === l && Me(x), h = b, _.__parent = p, d.push(_)
                            }
                            return Oe(this), l = (u = a.getWritable().__children).indexOf(l), r = d.map((function(e) {
                                return e.__key
                            })), f ? ((e = u).splice.apply(e, [l, 0].concat(c(r))), this.remove()) : (t = u).splice.apply(t, [l, 1].concat(c(r))), Gt(i) && gn(i, a, l, s - 1), d
                        }
                    }, {
                        key: "mergeWithSibling",
                        value: function(e) {
                            var t = e === this.getPreviousSibling();
                            t || e === this.getNextSibling() || Y(50);
                            var n = this.__key,
                                r = e.__key,
                                o = this.__text,
                                i = o.length;
                            En()._compositionKey === r && Me(n);
                            var a = pn();
                            if (Gt(a)) {
                                var l = a.anchor,
                                    u = a.focus;
                                null !== l && l.key === r && (yn(l, t, n, e, i), a.dirty = !0), null !== u && u.key === r && (yn(u, t, n, e, i), a.dirty = !0)
                            }
                            return n = e.__text, this.setTextContent(t ? n + o : o + n), t = this.getWritable(), e.remove(), t
                        }
                    }, {
                        key: "isTextEntity",
                        value: function() {
                            return !1
                        }
                    }], [{
                        key: "getType",
                        value: function() {
                            return "text"
                        }
                    }, {
                        key: "clone",
                        value: function(e) {
                            return new n(e.__text, e.__key)
                        }
                    }, {
                        key: "importDOM",
                        value: function() {
                            return {
                                "#text": function() {
                                    return {
                                        conversion: ir,
                                        priority: 0
                                    }
                                },
                                b: function() {
                                    return {
                                        conversion: or,
                                        priority: 0
                                    }
                                },
                                em: function() {
                                    return {
                                        conversion: lr,
                                        priority: 0
                                    }
                                },
                                i: function() {
                                    return {
                                        conversion: lr,
                                        priority: 0
                                    }
                                },
                                span: function() {
                                    return {
                                        conversion: rr,
                                        priority: 0
                                    }
                                },
                                strong: function() {
                                    return {
                                        conversion: lr,
                                        priority: 0
                                    }
                                },
                                u: function() {
                                    return {
                                        conversion: lr,
                                        priority: 0
                                    }
                                }
                            }
                        }
                    }, {
                        key: "importJSON",
                        value: function(e) {
                            var t = ur(e.text);
                            return t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t
                        }
                    }]), n
                }(Fn);

                function rr(e) {
                    var t = "700" === e.style.fontWeight,
                        n = "line-through" === e.style.textDecoration,
                        r = "italic" === e.style.fontStyle,
                        o = "underline" === e.style.textDecoration;
                    return {
                        forChild: function(e) {
                            return sr(e) && t && e.toggleFormat("bold"), sr(e) && n && e.toggleFormat("strikethrough"), sr(e) && r && e.toggleFormat("italic"), sr(e) && o && e.toggleFormat("underline"), e
                        },
                        node: null
                    }
                }

                function or(e) {
                    var t = "normal" === e.style.fontWeight;
                    return {
                        forChild: function(e) {
                            return sr(e) && !t && e.toggleFormat("bold"), e
                        },
                        node: null
                    }
                }

                function ir(e) {
                    var t = e.parentElement,
                        n = (e = e.textContent || "").trim();
                    return null != t && "pre" === t.tagName.toLowerCase() || 0 !== n.length || !e.includes("\n") ? {
                        node: ur(e)
                    } : {
                        node: null
                    }
                }
                var ar = {
                    em: "italic",
                    i: "italic",
                    strong: "bold",
                    u: "underline"
                };

                function lr(e) {
                    var t = ar[e.nodeName.toLowerCase()];
                    return void 0 === t ? {
                        node: null
                    } : {
                        forChild: function(e) {
                            return sr(e) && e.toggleFormat(t), e
                        },
                        node: null
                    }
                }

                function ur() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return new nr(e)
                }

                function sr(e) {
                    return e instanceof nr
                }
                var cr = function(e) {
                    a(n, e);
                    var t = l(n);

                    function n() {
                        return u(this, n), t.apply(this, arguments)
                    }
                    return s(n, [{
                        key: "createDOM",
                        value: function(e) {
                            var t, n = document.createElement("p");
                            return void 0 !== (e = Ke(e.theme, "paragraph")) && (t = n.classList).add.apply(t, c(e)), n
                        }
                    }, {
                        key: "updateDOM",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "exportDOM",
                        value: function(e) {
                            return (e = o(i(n.prototype), "exportDOM", this).call(this, e).element) && this.isEmpty() && e.append(document.createElement("br")), {
                                element: e
                            }
                        }
                    }, {
                        key: "exportJSON",
                        value: function() {
                            return r(r({}, o(i(n.prototype), "exportJSON", this).call(this)), {}, {
                                type: "paragraph",
                                version: 1
                            })
                        }
                    }, {
                        key: "insertNewAfter",
                        value: function() {
                            var e = dr(),
                                t = this.getDirection();
                            return e.setDirection(t), this.insertAfter(e), e
                        }
                    }, {
                        key: "collapseAtStart",
                        value: function() {
                            var e = this.getChildren();
                            if (0 === e.length || sr(e[0]) && "" === e[0].getTextContent().trim()) {
                                if (null !== this.getNextSibling()) return this.selectNext(), this.remove(), !0;
                                if (null !== this.getPreviousSibling()) return this.selectPrevious(), this.remove(), !0
                            }
                            return !1
                        }
                    }], [{
                        key: "getType",
                        value: function() {
                            return "paragraph"
                        }
                    }, {
                        key: "clone",
                        value: function(e) {
                            return new n(e.__key)
                        }
                    }, {
                        key: "importDOM",
                        value: function() {
                            return {
                                p: function() {
                                    return {
                                        conversion: fr,
                                        priority: 0
                                    }
                                }
                            }
                        }
                    }, {
                        key: "importJSON",
                        value: function(e) {
                            var t = dr();
                            return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                        }
                    }]), n
                }(Bn);

                function fr() {
                    return {
                        node: dr()
                    }
                }

                function dr() {
                    return new cr
                }

                function pr(e, t, n, r) {
                    var o = e._keyToDOMMap;
                    o.clear(), e._editorState = Hn(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = new Set, e._dirtyElements.clear(), e._normalizedNodes = new Set, e._updateTags = new Set, e._updates = [], null !== (r = e._observer) && (r.disconnect(), e._observer = null), null !== t && (t.textContent = ""), null !== n && (n.textContent = "", o.set("root", n))
                }
                var hr = function() {
                        function e(t, n, r, o, i, a) {
                            u(this, e), this._parentEditor = n, this._rootElement = null, this._editorState = t, this._compositionKey = this._pendingEditorState = null, this._deferred = [], this._keyToDOMMap = new Map, this._updates = [], this._updating = !1, this._listeners = {
                                decorator: new Set,
                                mutation: new Map,
                                readonly: new Set,
                                root: new Set,
                                textcontent: new Set,
                                update: new Set
                            }, this._commands = new Map, this._config = o, this._nodes = r, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = new Set, this._dirtyLeaves = new Set, this._dirtyElements = new Map, this._normalizedNodes = new Set, this._updateTags = new Set, this._observer = null, this._key = ze(), this._onError = i, this._htmlConversions = a, this._headless = this._readOnly = !1
                        }
                        return s(e, [{
                            key: "isComposing",
                            value: function() {
                                return null != this._compositionKey
                            }
                        }, {
                            key: "registerUpdateListener",
                            value: function(e) {
                                var t = this._listeners.update;
                                return t.add(e),
                                    function() {
                                        t.delete(e)
                                    }
                            }
                        }, {
                            key: "registerReadOnlyListener",
                            value: function(e) {
                                var t = this._listeners.readonly;
                                return t.add(e),
                                    function() {
                                        t.delete(e)
                                    }
                            }
                        }, {
                            key: "registerDecoratorListener",
                            value: function(e) {
                                var t = this._listeners.decorator;
                                return t.add(e),
                                    function() {
                                        t.delete(e)
                                    }
                            }
                        }, {
                            key: "registerTextContentListener",
                            value: function(e) {
                                var t = this._listeners.textcontent;
                                return t.add(e),
                                    function() {
                                        t.delete(e)
                                    }
                            }
                        }, {
                            key: "registerRootListener",
                            value: function(e) {
                                var t = this,
                                    n = this._listeners.root;
                                return e(this._rootElement, null), n.add(e),
                                    function() {
                                        e(null, t._rootElement), n.delete(e)
                                    }
                            }
                        }, {
                            key: "registerCommand",
                            value: function(e, t, n) {
                                void 0 === n && Y(35);
                                var r = this._commands;
                                r.has(e) || r.set(e, [new Set, new Set, new Set, new Set, new Set]);
                                var o = r.get(e);
                                void 0 === o && Y(36);
                                var i = o[n];
                                return i.add(t),
                                    function() {
                                        i.delete(t), o.every((function(e) {
                                            return 0 === e.size
                                        })) && r.delete(e)
                                    }
                            }
                        }, {
                            key: "registerMutationListener",
                            value: function(e, t) {
                                void 0 === this._nodes.get(e.getType()) && Y(37);
                                var n = this._listeners.mutation;
                                return n.set(t, e),
                                    function() {
                                        n.delete(t)
                                    }
                            }
                        }, {
                            key: "registerNodeTransform",
                            value: function(e, t) {
                                e = e.getType();
                                var n = this._nodes.get(e);
                                void 0 === n && Y(37);
                                var r = n.transforms;
                                return r.add(t),
                                    function(e, t) {
                                        Ln(e, (function() {
                                            var e = Nn();
                                            if (!e.isEmpty())
                                                if ("root" === t) Ie().markDirty();
                                                else {
                                                    e = e._nodeMap;
                                                    var n, r = d(e);
                                                    try {
                                                        for (r.s(); !(n = r.n()).done;) f(n.value, 2)[1].markDirty()
                                                    } catch (o) {
                                                        r.e(o)
                                                    } finally {
                                                        r.f()
                                                    }
                                                }
                                        }), null === e._pendingEditorState ? {
                                            tag: "history-merge"
                                        } : void 0)
                                    }(this, e),
                                    function() {
                                        r.delete(t)
                                    }
                            }
                        }, {
                            key: "hasNodes",
                            value: function(e) {
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t].getType();
                                    if (!this._nodes.has(n)) return !1
                                }
                                return !0
                            }
                        }, {
                            key: "dispatchCommand",
                            value: function(e, t) {
                                return Rn(this, e, t)
                            }
                        }, {
                            key: "getDecorators",
                            value: function() {
                                return this._decorators
                            }
                        }, {
                            key: "getRootElement",
                            value: function() {
                                return this._rootElement
                            }
                        }, {
                            key: "getKey",
                            value: function() {
                                return this._key
                            }
                        }, {
                            key: "setRootElement",
                            value: function(e) {
                                var t = this._rootElement;
                                if (e !== t) {
                                    var n = this._pendingEditorState || this._editorState;
                                    if (this._rootElement = e, pr(this, t, e, n), null !== t && !this._config.disableEvents) {
                                        if (0 !== At && (0 === --At && t.ownerDocument.removeEventListener("selectionchange", Kt)), null !== (n = t.__lexicalEditor) && void 0 !== n) {
                                            if (null !== n._parentEditor) {
                                                var r = je(n);
                                                r = r[r.length - 1]._key, Wt.get(r) === n && Wt.delete(r)
                                            } else Wt.delete(n._key);
                                            t.__lexicalEditor = null
                                        }
                                        for (n = Ut(t), r = 0; r < n.length; r++) n[r]();
                                        t.__lexicalEventHandles = []
                                    }
                                    null !== e && ((n = e.style).userSelect = "text", n.whiteSpace = "pre-wrap", n.wordBreak = "break-word", e.setAttribute("data-lexical-editor", "true"), this._dirtyType = 2, me(this), this._updateTags.add("history-merge"), Mn(this), this._config.disableEvents || function(e, t) {
                                        0 === At && e.ownerDocument.addEventListener("selectionchange", Kt), At++, e.__lexicalEditor = t;
                                        for (var n = Ut(e), r = function(r) {
                                                var o = f(Pt[r], 2),
                                                    i = o[0],
                                                    a = o[1],
                                                    l = "function" === typeof a ? function(e) {
                                                        t.isReadOnly() || a(e, t)
                                                    } : function(e) {
                                                        if (!t.isReadOnly()) switch (i) {
                                                            case "cut":
                                                                return Rn(t, W, e);
                                                            case "copy":
                                                                return Rn(t, U, e);
                                                            case "paste":
                                                                return Rn(t, _, e);
                                                            case "dragstart":
                                                                return Rn(t, j, e);
                                                            case "dragover":
                                                                return Rn(t, z, e);
                                                            case "dragend":
                                                                return Rn(t, B, e);
                                                            case "focus":
                                                                return Rn(t, K, e);
                                                            case "blur":
                                                                return Rn(t, H, e);
                                                            case "drop":
                                                                return Rn(t, F, e)
                                                        }
                                                    };
                                                e.addEventListener(i, l), n.push((function() {
                                                    e.removeEventListener(i, l)
                                                }))
                                            }, o = 0; o < Pt.length; o++) r(o)
                                    }(e, this)), Pn("root", this, !1, e, t)
                                }
                            }
                        }, {
                            key: "getElementByKey",
                            value: function(e) {
                                return this._keyToDOMMap.get(e) || null
                            }
                        }, {
                            key: "getEditorState",
                            value: function() {
                                return this._editorState
                            }
                        }, {
                            key: "setEditorState",
                            value: function(e, t) {
                                e.isEmpty() && Y(38), ve(this);
                                var n = this._pendingEditorState,
                                    r = this._updateTags;
                                t = void 0 !== t ? t.tag : null, null === n || n.isEmpty() || (null != t && r.add(t), Mn(this)), this._pendingEditorState = e, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, null != t && r.add(t), Mn(this)
                            }
                        }, {
                            key: "parseEditorState",
                            value: function(e, t) {
                                e = "string" === typeof e ? JSON.parse(e) : e;
                                var n = Hn(),
                                    r = _n,
                                    o = xn,
                                    i = bn,
                                    a = this._dirtyElements,
                                    l = this._dirtyLeaves,
                                    u = this._cloneNotNeeded,
                                    s = this._dirtyType;
                                this._dirtyElements = new Map, this._dirtyLeaves = new Set, this._cloneNotNeeded = new Set, this._dirtyType = 0, _n = n, xn = !1, bn = this;
                                try {
                                    Tn(e.root, this._nodes), t && t(), n._readOnly = !0
                                } finally {
                                    this._dirtyElements = a, this._dirtyLeaves = l, this._cloneNotNeeded = u, this._dirtyType = s, _n = r, xn = o, bn = i
                                }
                                return n
                            }
                        }, {
                            key: "update",
                            value: function(e, t) {
                                Ln(this, e, t)
                            }
                        }, {
                            key: "focus",
                            value: function(e) {
                                var t = this._rootElement;
                                null !== t && (t.setAttribute("autocapitalize", "off"), Ln(this, (function() {
                                    var e = pn(),
                                        t = Ie();
                                    null !== e ? e.dirty = !0 : 0 !== t.getChildrenSize() && t.selectEnd()
                                }), {
                                    onUpdate: function() {
                                        t.removeAttribute("autocapitalize"), e && e()
                                    }
                                }))
                            }
                        }, {
                            key: "blur",
                            value: function() {
                                var e = this._rootElement;
                                null !== e && e.blur(), null !== (e = window.getSelection()) && e.removeAllRanges()
                            }
                        }, {
                            key: "isReadOnly",
                            value: function() {
                                return this._readOnly
                            }
                        }, {
                            key: "setReadOnly",
                            value: function(e) {
                                this._readOnly !== e && (this._readOnly = e, Pn("readonly", this, !0, e))
                            }
                        }, {
                            key: "toJSON",
                            value: function() {
                                return {
                                    editorState: this._editorState.toJSON()
                                }
                            }
                        }]), e
                    }(),
                    gr = function(e) {
                        a(n, e);
                        var t = l(n);

                        function n(e, r) {
                            var o;
                            return u(this, n), (o = t.call(this, r)).__colSpan = e, o
                        }
                        return s(n, [{
                            key: "exportJSON",
                            value: function() {
                                return r(r({}, o(i(n.prototype), "exportJSON", this).call(this)), {}, {
                                    colSpan: this.__colSpan
                                })
                            }
                        }]), n
                    }(Bn);

                function vr(e) {
                    return e instanceof gr
                }
                var mr = function(e) {
                    a(n, e);
                    var t = l(n);

                    function n() {
                        return u(this, n), t.apply(this, arguments)
                    }
                    return s(n)
                }(Bn);

                function yr(e) {
                    return e instanceof mr
                }
                var _r = function(e) {
                    a(n, e);
                    var t = l(n);

                    function n() {
                        return u(this, n), t.apply(this, arguments)
                    }
                    return s(n)
                }(Bn);

                function br(e) {
                    return e instanceof _r
                }
                t.$createGridSelection = function() {
                    var e = new Ht("root", 0, "element"),
                        t = new Ht("root", 0, "element");
                    return new Xt("root", e, t)
                }, t.$createLineBreakNode = Jn, t.$createNodeSelection = function() {
                    return new Jt(new Set)
                }, t.$createParagraphNode = dr, t.$createRangeSelection = function() {
                    var e = new Ht("root", 0, "element"),
                        t = new Ht("root", 0, "element");
                    return new en(e, t, 0)
                }, t.$createTextNode = ur, t.$getDecoratorNode = Ye, t.$getNearestNodeFromDOMNode = De, t.$getNodeByKey = Pe, t.$getPreviousSelection = hn, t.$getRoot = Ie, t.$getSelection = pn, t.$isDecoratorNode = zn, t.$isElementNode = Un, t.$isGridCellNode = vr, t.$isGridNode = yr, t.$isGridRowNode = br, t.$isGridSelection = Zt, t.$isLeafNode = Ee, t.$isLineBreakNode = Gn, t.$isNodeSelection = tn, t.$isParagraphNode = function(e) {
                    return e instanceof cr
                }, t.$isRangeSelection = Gt, t.$isRootNode = Kn, t.$isTextNode = sr, t.$nodesOfType = function(e) {
                    var t = Nn(),
                        n = t._readOnly,
                        r = e.getType();
                    t = t._nodeMap;
                    var o, i = [],
                        a = d(t);
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var l = f(o.value, 2)[1];
                            l instanceof e && l.__type === r && (n || l.isAttached()) && i.push(l)
                        }
                    } catch (u) {
                        a.e(u)
                    } finally {
                        a.f()
                    }
                    return i
                }, t.$parseSerializedNode = function(e) {
                    return Tn(e, En()._nodes)
                }, t.$setCompositionKey = Me, t.$setSelection = $e, t.BLUR_COMMAND = H, t.CAN_REDO_COMMAND = {}, t.CAN_UNDO_COMMAND = {}, t.CLEAR_EDITOR_COMMAND = {}, t.CLEAR_HISTORY_COMMAND = {}, t.CLICK_COMMAND = h, t.COMMAND_PRIORITY_CRITICAL = 4, t.COMMAND_PRIORITY_EDITOR = 0, t.COMMAND_PRIORITY_HIGH = 3, t.COMMAND_PRIORITY_LOW = 1, t.COMMAND_PRIORITY_NORMAL = 2, t.CONTROLLED_TEXT_INSERTION_COMMAND = y, t.COPY_COMMAND = U, t.CUT_COMMAND = W, t.DELETE_CHARACTER_COMMAND = g, t.DELETE_LINE_COMMAND = k, t.DELETE_WORD_COMMAND = x, t.DRAGEND_COMMAND = B, t.DRAGOVER_COMMAND = z, t.DRAGSTART_COMMAND = j, t.DROP_COMMAND = F, t.DecoratorNode = jn, t.ElementNode = Bn, t.FOCUS_COMMAND = K, t.FORMAT_ELEMENT_COMMAND = {}, t.FORMAT_TEXT_COMMAND = C, t.GridCellNode = gr, t.GridNode = mr, t.GridRowNode = _r, t.INDENT_CONTENT_COMMAND = {}, t.INSERT_LINE_BREAK_COMMAND = v, t.INSERT_PARAGRAPH_COMMAND = m, t.KEY_ARROW_DOWN_COMMAND = P, t.KEY_ARROW_LEFT_COMMAND = T, t.KEY_ARROW_RIGHT_COMMAND = E, t.KEY_ARROW_UP_COMMAND = M, t.KEY_BACKSPACE_COMMAND = A, t.KEY_DELETE_COMMAND = I, t.KEY_ENTER_COMMAND = R, t.KEY_ESCAPE_COMMAND = L, t.KEY_MODIFIER_COMMAND = V, t.KEY_SPACE_COMMAND = D, t.KEY_TAB_COMMAND = $, t.LineBreakNode = Qn, t.MOVE_TO_END = w, t.MOVE_TO_START = O, t.OUTDENT_CONTENT_COMMAND = {}, t.PASTE_COMMAND = _, t.ParagraphNode = cr, t.REDO_COMMAND = N, t.REMOVE_TEXT_COMMAND = b, t.RootNode = Wn, t.SELECTION_CHANGE_COMMAND = p, t.TextNode = nr, t.UNDO_COMMAND = S, t.VERSION = "0.3.6", t.createCommand = function() {
                    return {}
                }, t.createEditor = function(e) {
                    var t = e || {},
                        n = bn,
                        r = t.theme || {},
                        o = void 0 === e ? n : t.parentEditor || null,
                        i = t.disableEvents || !1,
                        a = Hn(),
                        l = t.namespace || (null !== o ? o._config.namespace : ze()),
                        u = t.editorState,
                        s = [Wn, nr, Qn, cr].concat(c(t.nodes || [])),
                        f = t.onError;
                    if (t = t.readOnly || !1, void 0 === e && null !== n) e = n._nodes;
                    else
                        for (e = new Map, n = 0; n < s.length; n++) {
                            var d = s[n],
                                p = d.getType();
                            e.set(p, {
                                klass: d,
                                transforms: new Set
                            })
                        }
                    return r = new hr(a, o, e, {
                        disableEvents: i,
                        namespace: l,
                        theme: r
                    }, f || console.error, function(e) {
                        var t = new Map,
                            n = new Set;
                        return e.forEach((function(e) {
                            if (null != (e = null != e.klass.importDOM ? e.klass.importDOM.bind(e.klass) : null) && !n.has(e)) {
                                n.add(e);
                                var r = e();
                                null !== r && Object.keys(r).forEach((function(e) {
                                    var n = t.get(e);
                                    void 0 === n && (n = [], t.set(e, n)), n.push(r[e])
                                }))
                            }
                        })), t
                    }(e), t), void 0 !== u && (r._pendingEditorState = u, r._dirtyType = 2), r
                }
            },
            4463: function(e, t, n) {
                "use strict";
                var r = n(2791),
                    o = n(5296);

                function i(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var a = new Set,
                    l = {};

                function u(e, t) {
                    s(e, t), s(e + "Capture", t)
                }

                function s(e, t) {
                    for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e])
                }
                var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    f = Object.prototype.hasOwnProperty,
                    d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = {},
                    h = {};

                function g(e, t, n, r, o, i, a) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
                }
                var v = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    v[e] = new g(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    v[t] = new g(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    v[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    v[e] = new g(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    v[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    v[e] = new g(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    v[e] = new g(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    v[e] = new g(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    v[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var m = /[\-:]([a-z])/g;

                function y(e) {
                    return e[1].toUpperCase()
                }

                function _(e, t, n, r) {
                    var o = v.hasOwnProperty(t) ? v[t] : null;
                    (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, o, r) && (n = null), r || null === o ? function(e) {
                        return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(m, y);
                    v[t] = new g(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(m, y);
                    v[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(m, y);
                    v[t] = new g(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    v[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), v.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    v[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    x = Symbol.for("react.element"),
                    k = Symbol.for("react.portal"),
                    C = Symbol.for("react.fragment"),
                    S = Symbol.for("react.strict_mode"),
                    N = Symbol.for("react.profiler"),
                    E = Symbol.for("react.provider"),
                    w = Symbol.for("react.context"),
                    T = Symbol.for("react.forward_ref"),
                    O = Symbol.for("react.suspense"),
                    M = Symbol.for("react.suspense_list"),
                    P = Symbol.for("react.memo"),
                    R = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var D = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var A = Symbol.iterator;

                function L(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = A && e[A] || e["@@iterator"]) ? e : null
                }
                var I, $ = Object.assign;

                function F(e) {
                    if (void 0 === I) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        I = t && t[1] || ""
                    }
                    return "\n" + I + e
                }
                var j = !1;

                function z(e, t) {
                    if (!e || j) return "";
                    j = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (s) {
                                    var r = s
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (s) {
                                    r = s
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (s) {
                                r = s
                            }
                            e()
                        }
                    } catch (s) {
                        if (s && r && "string" === typeof s.stack) {
                            for (var o = s.stack.split("\n"), i = r.stack.split("\n"), a = o.length - 1, l = i.length - 1; 1 <= a && 0 <= l && o[a] !== i[l];) l--;
                            for (; 1 <= a && 0 <= l; a--, l--)
                                if (o[a] !== i[l]) {
                                    if (1 !== a || 1 !== l)
                                        do {
                                            if (a--, 0 > --l || o[a] !== i[l]) {
                                                var u = "\n" + o[a].replace(" at new ", " at ");
                                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                                            }
                                        } while (1 <= a && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        j = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? F(e) : ""
                }

                function B(e) {
                    switch (e.tag) {
                        case 5:
                            return F(e.type);
                        case 16:
                            return F("Lazy");
                        case 13:
                            return F("Suspense");
                        case 19:
                            return F("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = z(e.type, !1);
                        case 11:
                            return e = z(e.type.render, !1);
                        case 1:
                            return e = z(e.type, !0);
                        default:
                            return ""
                    }
                }

                function U(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case C:
                            return "Fragment";
                        case k:
                            return "Portal";
                        case N:
                            return "Profiler";
                        case S:
                            return "StrictMode";
                        case O:
                            return "Suspense";
                        case M:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case w:
                            return (e.displayName || "Context") + ".Consumer";
                        case E:
                            return (e._context.displayName || "Context") + ".Provider";
                        case T:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case P:
                            return null !== (t = e.displayName || null) ? t : U(e.type) || "Memo";
                        case R:
                            t = e._payload, e = e._init;
                            try {
                                return U(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function W(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return U(t);
                        case 8:
                            return t === S ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof t) return t.displayName || t.name || null;
                            if ("string" === typeof t) return t
                    }
                    return null
                }

                function K(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function H(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function V(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = H(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var o = n.get,
                                i = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return o.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, i.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function Y(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = H(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function Q(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function q(e, t) {
                    var n = t.checked;
                    return $({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function J(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = K(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function G(e, t) {
                    null != (t = t.checked) && _(e, "checked", t, !1)
                }

                function X(e, t) {
                    G(e, t);
                    var n = K(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, K(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function Z(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && Q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + K(n), t = null, o = 0; o < e.length; o++) {
                            if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
                            null !== t || e[o].disabled || (t = e[o])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                    return $({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function oe(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(i(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(i(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: K(n)
                    }
                }

                function ie(e, t) {
                    var n = K(t.value),
                        r = K(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function ae(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function le(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function ue(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var se, ce, fe = (ce = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ce(e, t)
                    }))
                } : ce);

                function de(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var pe = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    he = ["Webkit", "ms", "Moz", "O"];

                function ge(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
                }

                function ve(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                o = ge(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                        }
                }
                Object.keys(pe).forEach((function(e) {
                    he.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
                    }))
                }));
                var me = $({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function ye(e, t) {
                    if (t) {
                        if (me[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(i(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(i(62))
                    }
                }

                function _e(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
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
                var be = null;

                function xe(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var ke = null,
                    Ce = null,
                    Se = null;

                function Ne(e) {
                    if (e = bo(e)) {
                        if ("function" !== typeof ke) throw Error(i(280));
                        var t = e.stateNode;
                        t && (t = ko(t), ke(e.stateNode, e.type, t))
                    }
                }

                function Ee(e) {
                    Ce ? Se ? Se.push(e) : Se = [e] : Ce = e
                }

                function we() {
                    if (Ce) {
                        var e = Ce,
                            t = Se;
                        if (Se = Ce = null, Ne(e), t)
                            for (e = 0; e < t.length; e++) Ne(t[e])
                    }
                }

                function Te(e, t) {
                    return e(t)
                }

                function Oe() {}
                var Me = !1;

                function Pe(e, t, n) {
                    if (Me) return e(t, n);
                    Me = !0;
                    try {
                        return Te(e, t, n)
                    } finally {
                        Me = !1, (null !== Ce || null !== Se) && (Oe(), we())
                    }
                }

                function Re(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = ko(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
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
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                    return n
                }
                var De = !1;
                if (c) try {
                    var Ae = {};
                    Object.defineProperty(Ae, "passive", {
                        get: function() {
                            De = !0
                        }
                    }), window.addEventListener("test", Ae, Ae), window.removeEventListener("test", Ae, Ae)
                } catch (ce) {
                    De = !1
                }

                function Le(e, t, n, r, o, i, a, l, u) {
                    var s = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, s)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var Ie = !1,
                    $e = null,
                    Fe = !1,
                    je = null,
                    ze = {
                        onError: function(e) {
                            Ie = !0, $e = e
                        }
                    };

                function Be(e, t, n, r, o, i, a, l, u) {
                    Ie = !1, $e = null, Le.apply(ze, arguments)
                }

                function Ue(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function We(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function Ke(e) {
                    if (Ue(e) !== e) throw Error(i(188))
                }

                function He(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Ue(e))) throw Error(i(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var o = n.return;
                            if (null === o) break;
                            var a = o.alternate;
                            if (null === a) {
                                if (null !== (r = o.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (o.child === a.child) {
                                for (a = o.child; a;) {
                                    if (a === n) return Ke(o), e;
                                    if (a === r) return Ke(o), t;
                                    a = a.sibling
                                }
                                throw Error(i(188))
                            }
                            if (n.return !== r.return) n = o, r = a;
                            else {
                                for (var l = !1, u = o.child; u;) {
                                    if (u === n) {
                                        l = !0, n = o, r = a;
                                        break
                                    }
                                    if (u === r) {
                                        l = !0, r = o, n = a;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!l) {
                                    for (u = a.child; u;) {
                                        if (u === n) {
                                            l = !0, n = a, r = o;
                                            break
                                        }
                                        if (u === r) {
                                            l = !0, r = a, n = o;
                                            break
                                        }
                                        u = u.sibling
                                    }
                                    if (!l) throw Error(i(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(i(190))
                        }
                        if (3 !== n.tag) throw Error(i(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? Ve(e) : null
                }

                function Ve(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = Ve(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var Ye = o.unstable_scheduleCallback,
                    Qe = o.unstable_cancelCallback,
                    qe = o.unstable_shouldYield,
                    Je = o.unstable_requestPaint,
                    Ge = o.unstable_now,
                    Xe = o.unstable_getCurrentPriorityLevel,
                    Ze = o.unstable_ImmediatePriority,
                    et = o.unstable_UserBlockingPriority,
                    tt = o.unstable_NormalPriority,
                    nt = o.unstable_LowPriority,
                    rt = o.unstable_IdlePriority,
                    ot = null,
                    it = null;
                var at = Math.clz32 ? Math.clz32 : function(e) {
                        return 0 === (e >>>= 0) ? 32 : 31 - (lt(e) / ut | 0) | 0
                    },
                    lt = Math.log,
                    ut = Math.LN2;
                var st = 64,
                    ct = 4194304;

                function ft(e) {
                    switch (e & -e) {
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
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function dt(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        o = e.suspendedLanes,
                        i = e.pingedLanes,
                        a = 268435455 & n;
                    if (0 !== a) {
                        var l = a & ~o;
                        0 !== l ? r = ft(l) : 0 !== (i &= a) && (r = ft(i))
                    } else 0 !== (a = n & ~o) ? r = ft(a) : 0 !== i && (r = ft(i));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 === (t & o) && ((o = r & -r) >= (i = t & -t) || 16 === o && 0 !== (4194240 & i))) return t;
                    if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - at(t)), r |= e[n], t &= ~o;
                    return r
                }

                function pt(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
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
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function ht(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function gt() {
                    var e = st;
                    return 0 === (4194240 & (st <<= 1)) && (st = 64), e
                }

                function vt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function mt(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - at(t)] = n
                }

                function yt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - at(n),
                            o = 1 << r;
                        o & t | e[r] & t && (e[r] |= t), n &= ~o
                    }
                }
                var _t = 0;

                function bt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var xt, kt, Ct, St, Nt, Et = !1,
                    wt = [],
                    Tt = null,
                    Ot = null,
                    Mt = null,
                    Pt = new Map,
                    Rt = new Map,
                    Dt = [],
                    At = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function Lt(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Tt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Ot = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Mt = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Pt.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Rt.delete(t.pointerId)
                    }
                }

                function It(e, t, n, r, o, i) {
                    return null === e || e.nativeEvent !== i ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: i,
                        targetContainers: [o]
                    }, null !== t && (null !== (t = bo(t)) && kt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
                }

                function $t(e) {
                    var t = _o(e.target);
                    if (null !== t) {
                        var n = Ue(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = We(n))) return e.blockedOn = t, void Nt(e.priority, (function() {
                                    Ct(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Ft(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = bo(n)) && kt(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        be = r, n.target.dispatchEvent(r), be = null, t.shift()
                    }
                    return !0
                }

                function jt(e, t, n) {
                    Ft(e) && n.delete(t)
                }

                function zt() {
                    Et = !1, null !== Tt && Ft(Tt) && (Tt = null), null !== Ot && Ft(Ot) && (Ot = null), null !== Mt && Ft(Mt) && (Mt = null), Pt.forEach(jt), Rt.forEach(jt)
                }

                function Bt(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, Et || (Et = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, zt)))
                }

                function Ut(e) {
                    function t(t) {
                        return Bt(t, e)
                    }
                    if (0 < wt.length) {
                        Bt(wt[0], e);
                        for (var n = 1; n < wt.length; n++) {
                            var r = wt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Tt && Bt(Tt, e), null !== Ot && Bt(Ot, e), null !== Mt && Bt(Mt, e), Pt.forEach(t), Rt.forEach(t), n = 0; n < Dt.length; n++)(r = Dt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn;) $t(n), null === n.blockedOn && Dt.shift()
                }
                var Wt = b.ReactCurrentBatchConfig,
                    Kt = !0;

                function Ht(e, t, n, r) {
                    var o = _t,
                        i = Wt.transition;
                    Wt.transition = null;
                    try {
                        _t = 1, Yt(e, t, n, r)
                    } finally {
                        _t = o, Wt.transition = i
                    }
                }

                function Vt(e, t, n, r) {
                    var o = _t,
                        i = Wt.transition;
                    Wt.transition = null;
                    try {
                        _t = 4, Yt(e, t, n, r)
                    } finally {
                        _t = o, Wt.transition = i
                    }
                }

                function Yt(e, t, n, r) {
                    if (Kt) {
                        var o = qt(e, t, n, r);
                        if (null === o) Kr(e, t, r, Qt, n), Lt(e, r);
                        else if (function(e, t, n, r, o) {
                                switch (t) {
                                    case "focusin":
                                        return Tt = It(Tt, e, t, n, r, o), !0;
                                    case "dragenter":
                                        return Ot = It(Ot, e, t, n, r, o), !0;
                                    case "mouseover":
                                        return Mt = It(Mt, e, t, n, r, o), !0;
                                    case "pointerover":
                                        var i = o.pointerId;
                                        return Pt.set(i, It(Pt.get(i) || null, e, t, n, r, o)), !0;
                                    case "gotpointercapture":
                                        return i = o.pointerId, Rt.set(i, It(Rt.get(i) || null, e, t, n, r, o)), !0
                                }
                                return !1
                            }(o, e, t, n, r)) r.stopPropagation();
                        else if (Lt(e, r), 4 & t && -1 < At.indexOf(e)) {
                            for (; null !== o;) {
                                var i = bo(o);
                                if (null !== i && xt(i), null === (i = qt(e, t, n, r)) && Kr(e, t, r, Qt, n), i === o) break;
                                o = i
                            }
                            null !== o && r.stopPropagation()
                        } else Kr(e, t, r, null, n)
                    }
                }
                var Qt = null;

                function qt(e, t, n, r) {
                    if (Qt = null, null !== (e = _o(e = xe(r))))
                        if (null === (t = Ue(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = We(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return Qt = e, null
                }

                function Jt(e) {
                    switch (e) {
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
                            return 1;
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
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Xe()) {
                                case Ze:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Gt = null,
                    Xt = null,
                    Zt = null;

                function en() {
                    if (Zt) return Zt;
                    var e, t, n = Xt,
                        r = n.length,
                        o = "value" in Gt ? Gt.value : Gt.textContent,
                        i = o.length;
                    for (e = 0; e < r && n[e] === o[e]; e++);
                    var a = r - e;
                    for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
                    return Zt = o.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function on(e) {
                    function t(t, n, r, o, i) {
                        for (var a in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(a) && (t = e[a], this[a] = t ? t(o) : o[a]);
                        return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return $(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function() {},
                        isPersistent: nn
                    }), t
                }
                var an, ln, un, sn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    cn = on(sn),
                    fn = $({}, sn, {
                        view: 0,
                        detail: 0
                    }),
                    dn = on(fn),
                    pn = $({}, fn, {
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
                        getModifierState: Nn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (an = e.screenX - un.screenX, ln = e.screenY - un.screenY) : ln = an = 0, un = e), an)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : ln
                        }
                    }),
                    hn = on(pn),
                    gn = on($({}, pn, {
                        dataTransfer: 0
                    })),
                    vn = on($({}, fn, {
                        relatedTarget: 0
                    })),
                    mn = on($({}, sn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    yn = $({}, sn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    _n = on(yn),
                    bn = on($({}, sn, {
                        data: 0
                    })),
                    xn = {
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
                    },
                    kn = {
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
                    },
                    Cn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Sn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = Cn[e]) && !!t[e]
                }

                function Nn() {
                    return Sn
                }
                var En = $({}, fn, {
                        key: function(e) {
                            if (e.key) {
                                var t = xn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: Nn,
                        charCode: function(e) {
                            return "keypress" === e.type ? tn(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    wn = on(En),
                    Tn = on($({}, pn, {
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
                    })),
                    On = on($({}, fn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: Nn
                    })),
                    Mn = on($({}, sn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Pn = $({}, pn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Rn = on(Pn),
                    Dn = [9, 13, 27, 32],
                    An = c && "CompositionEvent" in window,
                    Ln = null;
                c && "documentMode" in document && (Ln = document.documentMode);
                var In = c && "TextEvent" in window && !Ln,
                    $n = c && (!An || Ln && 8 < Ln && 11 >= Ln),
                    Fn = String.fromCharCode(32),
                    jn = !1;

                function zn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Dn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Bn(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Un = !1;
                var Wn = {
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

                function Kn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Wn[e.type] : "textarea" === t
                }

                function Hn(e, t, n, r) {
                    Ee(r), 0 < (t = Vr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Vn = null,
                    Yn = null;

                function Qn(e) {
                    Fr(e, 0)
                }

                function qn(e) {
                    if (Y(xo(e))) return e
                }

                function Jn(e, t) {
                    if ("change" === e) return t
                }
                var Gn = !1;
                if (c) {
                    var Xn;
                    if (c) {
                        var Zn = "oninput" in document;
                        if (!Zn) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Zn = "function" === typeof er.oninput
                        }
                        Xn = Zn
                    } else Xn = !1;
                    Gn = Xn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    Vn && (Vn.detachEvent("onpropertychange", nr), Yn = Vn = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && qn(Yn)) {
                        var t = [];
                        Hn(t, Yn, e, xe(e)), Pe(Qn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), Yn = n, (Vn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function or(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return qn(Yn)
                }

                function ir(e, t) {
                    if ("click" === e) return qn(t)
                }

                function ar(e, t) {
                    if ("input" === e || "change" === e) return qn(t)
                }
                var lr = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                };

                function ur(e, t) {
                    if (lr(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (!f.call(t, o) || !lr(e[o], t[o])) return !1
                    }
                    return !0
                }

                function sr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function cr(e, t) {
                    var n, r = sr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = sr(r)
                    }
                }

                function fr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function dr() {
                    for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = Q((e = t.contentWindow).document)
                    }
                    return t
                }

                function pr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function hr(e) {
                    var t = dr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && pr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var o = n.textContent.length,
                                i = Math.min(r.start, o);
                            r = void 0 === r.end ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = cr(n, i);
                            var a = cr(n, r);
                            o && a && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var gr = c && "documentMode" in document && 11 >= document.documentMode,
                    vr = null,
                    mr = null,
                    yr = null,
                    _r = !1;

                function br(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    _r || null == vr || vr !== Q(r) || ("selectionStart" in (r = vr) && pr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, yr && ur(yr, r) || (yr = r, 0 < (r = Vr(mr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = vr)))
                }

                function xr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var kr = {
                        animationend: xr("Animation", "AnimationEnd"),
                        animationiteration: xr("Animation", "AnimationIteration"),
                        animationstart: xr("Animation", "AnimationStart"),
                        transitionend: xr("Transition", "TransitionEnd")
                    },
                    Cr = {},
                    Sr = {};

                function Nr(e) {
                    if (Cr[e]) return Cr[e];
                    if (!kr[e]) return e;
                    var t, n = kr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Sr) return Cr[e] = n[t];
                    return e
                }
                c && (Sr = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
                var Er = Nr("animationend"),
                    wr = Nr("animationiteration"),
                    Tr = Nr("animationstart"),
                    Or = Nr("transitionend"),
                    Mr = new Map,
                    Pr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Rr(e, t) {
                    Mr.set(e, t), u(t, [e])
                }
                for (var Dr = 0; Dr < Pr.length; Dr++) {
                    var Ar = Pr[Dr];
                    Rr(Ar.toLowerCase(), "on" + (Ar[0].toUpperCase() + Ar.slice(1)))
                }
                Rr(Er, "onAnimationEnd"), Rr(wr, "onAnimationIteration"), Rr(Tr, "onAnimationStart"), Rr("dblclick", "onDoubleClick"), Rr("focusin", "onFocus"), Rr("focusout", "onBlur"), Rr(Or, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Ir = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));

                function $r(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, o, a, l, u, s) {
                            if (Be.apply(this, arguments), Ie) {
                                if (!Ie) throw Error(i(198));
                                var c = $e;
                                Ie = !1, $e = null, Fe || (Fe = !0, je = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Fr(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            o = r.event;
                        r = r.listeners;
                        e: {
                            var i = void 0;
                            if (t)
                                for (var a = r.length - 1; 0 <= a; a--) {
                                    var l = r[a],
                                        u = l.instance,
                                        s = l.currentTarget;
                                    if (l = l.listener, u !== i && o.isPropagationStopped()) break e;
                                    $r(o, l, s), i = u
                                } else
                                    for (a = 0; a < r.length; a++) {
                                        if (u = (l = r[a]).instance, s = l.currentTarget, l = l.listener, u !== i && o.isPropagationStopped()) break e;
                                        $r(o, l, s), i = u
                                    }
                        }
                    }
                    if (Fe) throw e = je, Fe = !1, je = null, e
                }

                function jr(e, t) {
                    var n = t[vo];
                    void 0 === n && (n = t[vo] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Wr(t, e, 2, !1), n.add(r))
                }

                function zr(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Wr(n, e, r, t)
                }
                var Br = "_reactListening" + Math.random().toString(36).slice(2);

                function Ur(e) {
                    if (!e[Br]) {
                        e[Br] = !0, a.forEach((function(t) {
                            "selectionchange" !== t && (Ir.has(t) || zr(t, !1, e), zr(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Br] || (t[Br] = !0, zr("selectionchange", !1, t))
                    }
                }

                function Wr(e, t, n, r) {
                    switch (Jt(t)) {
                        case 1:
                            var o = Ht;
                            break;
                        case 4:
                            o = Vt;
                            break;
                        default:
                            o = Yt
                    }
                    n = o.bind(null, t, n, e), o = void 0, !De || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: o
                    }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
                        passive: o
                    }) : e.addEventListener(t, n, !1)
                }

                function Kr(e, t, n, r, o) {
                    var i = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var a = r.tag;
                        if (3 === a || 4 === a) {
                            var l = r.stateNode.containerInfo;
                            if (l === o || 8 === l.nodeType && l.parentNode === o) break;
                            if (4 === a)
                                for (a = r.return; null !== a;) {
                                    var u = a.tag;
                                    if ((3 === u || 4 === u) && ((u = a.stateNode.containerInfo) === o || 8 === u.nodeType && u.parentNode === o)) return;
                                    a = a.return
                                }
                            for (; null !== l;) {
                                if (null === (a = _o(l))) return;
                                if (5 === (u = a.tag) || 6 === u) {
                                    r = i = a;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                    Pe((function() {
                        var r = i,
                            o = xe(n),
                            a = [];
                        e: {
                            var l = Mr.get(e);
                            if (void 0 !== l) {
                                var u = cn,
                                    s = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        u = wn;
                                        break;
                                    case "focusin":
                                        s = "focus", u = vn;
                                        break;
                                    case "focusout":
                                        s = "blur", u = vn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        u = vn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        u = hn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        u = gn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        u = On;
                                        break;
                                    case Er:
                                    case wr:
                                    case Tr:
                                        u = mn;
                                        break;
                                    case Or:
                                        u = Mn;
                                        break;
                                    case "scroll":
                                        u = dn;
                                        break;
                                    case "wheel":
                                        u = Rn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        u = _n;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        u = Tn
                                }
                                var c = 0 !== (4 & t),
                                    f = !c && "scroll" === e,
                                    d = c ? null !== l ? l + "Capture" : null : l;
                                c = [];
                                for (var p, h = r; null !== h;) {
                                    var g = (p = h).stateNode;
                                    if (5 === p.tag && null !== g && (p = g, null !== d && (null != (g = Re(h, d)) && c.push(Hr(h, g, p)))), f) break;
                                    h = h.return
                                }
                                0 < c.length && (l = new u(l, s, null, n, o), a.push({
                                    event: l,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === be || !(s = n.relatedTarget || n.fromElement) || !_o(s) && !s[go]) && (u || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? _o(s) : null) && (s !== (f = Ue(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                                if (c = hn, g = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Tn, g = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? l : xo(u), p = null == s ? l : xo(s), (l = new c(g, h + "leave", u, n, o)).target = f, l.relatedTarget = p, g = null, _o(o) === r && ((c = new c(d, h + "enter", s, n, o)).target = p, c.relatedTarget = f, g = c), f = g, u && s) e: {
                                    for (d = s, h = 0, p = c = u; p; p = Yr(p)) h++;
                                    for (p = 0, g = d; g; g = Yr(g)) p++;
                                    for (; 0 < h - p;) c = Yr(c),
                                    h--;
                                    for (; 0 < p - h;) d = Yr(d),
                                    p--;
                                    for (; h--;) {
                                        if (c === d || null !== d && c === d.alternate) break e;
                                        c = Yr(c), d = Yr(d)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== u && Qr(a, l, u, c, !1), null !== s && null !== f && Qr(a, f, s, c, !0)
                            }
                            if ("select" === (u = (l = r ? xo(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var v = Jn;
                            else if (Kn(l))
                                if (Gn) v = ar;
                                else {
                                    v = or;
                                    var m = rr
                                }
                            else(u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = ir);
                            switch (v && (v = v(e, r)) ? Hn(a, v, n, o) : (m && m(e, l, r), "focusout" === e && (m = l._wrapperState) && m.controlled && "number" === l.type && ee(l, "number", l.value)), m = r ? xo(r) : window, e) {
                                case "focusin":
                                    (Kn(m) || "true" === m.contentEditable) && (vr = m, mr = r, yr = null);
                                    break;
                                case "focusout":
                                    yr = mr = vr = null;
                                    break;
                                case "mousedown":
                                    _r = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    _r = !1, br(a, n, o);
                                    break;
                                case "selectionchange":
                                    if (gr) break;
                                case "keydown":
                                case "keyup":
                                    br(a, n, o)
                            }
                            var y;
                            if (An) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var _ = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        _ = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        _ = "onCompositionUpdate";
                                        break e
                                }
                                _ = void 0
                            }
                            else Un ? zn(e, n) && (_ = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (_ = "onCompositionStart");
                            _ && ($n && "ko" !== n.locale && (Un || "onCompositionStart" !== _ ? "onCompositionEnd" === _ && Un && (y = en()) : (Xt = "value" in (Gt = o) ? Gt.value : Gt.textContent, Un = !0)), 0 < (m = Vr(r, _)).length && (_ = new bn(_, e, null, n, o), a.push({
                                event: _,
                                listeners: m
                            }), y ? _.data = y : null !== (y = Bn(n)) && (_.data = y))), (y = In ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Bn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (jn = !0, Fn);
                                    case "textInput":
                                        return (e = t.data) === Fn && jn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Un) return "compositionend" === e || !An && zn(e, t) ? (e = en(), Zt = Xt = Gt = null, Un = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return $n && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Vr(r, "onBeforeInput")).length && (o = new bn("onBeforeInput", "beforeinput", null, n, o), a.push({
                                event: o,
                                listeners: r
                            }), o.data = y))
                        }
                        Fr(a, t)
                    }))
                }

                function Hr(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Vr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var o = e,
                            i = o.stateNode;
                        5 === o.tag && null !== i && (o = i, null != (i = Re(e, n)) && r.unshift(Hr(e, i, o)), null != (i = Re(e, t)) && r.push(Hr(e, i, o))), e = e.return
                    }
                    return r
                }

                function Yr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Qr(e, t, n, r, o) {
                    for (var i = t._reactName, a = []; null !== n && n !== r;) {
                        var l = n,
                            u = l.alternate,
                            s = l.stateNode;
                        if (null !== u && u === r) break;
                        5 === l.tag && null !== s && (l = s, o ? null != (u = Re(n, i)) && a.unshift(Hr(n, u, l)) : o || null != (u = Re(n, i)) && a.push(Hr(n, u, l))), n = n.return
                    }
                    0 !== a.length && e.push({
                        event: t,
                        listeners: a
                    })
                }
                var qr = /\r\n?/g,
                    Jr = /\u0000|\uFFFD/g;

                function Gr(e) {
                    return ("string" === typeof e ? e : "" + e).replace(qr, "\n").replace(Jr, "")
                }

                function Xr(e, t, n) {
                    if (t = Gr(t), Gr(e) !== t && n) throw Error(i(425))
                }

                function Zr() {}
                var eo = null,
                    to = null;

                function no(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ro = "function" === typeof setTimeout ? setTimeout : void 0,
                    oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    io = "function" === typeof Promise ? Promise : void 0,
                    ao = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof io ? function(e) {
                        return io.resolve(null).then(e).catch(lo)
                    } : ro;

                function lo(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function uo(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var o = n.nextSibling;
                        if (e.removeChild(n), o && 8 === o.nodeType)
                            if ("/$" === (n = o.data)) {
                                if (0 === r) return e.removeChild(o), void Ut(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = o
                    } while (n);
                    Ut(t)
                }

                function so(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function co(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var fo = Math.random().toString(36).slice(2),
                    po = "__reactFiber$" + fo,
                    ho = "__reactProps$" + fo,
                    go = "__reactContainer$" + fo,
                    vo = "__reactEvents$" + fo,
                    mo = "__reactListeners$" + fo,
                    yo = "__reactHandles$" + fo;

                function _o(e) {
                    var t = e[po];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[go] || n[po]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = co(e); null !== e;) {
                                    if (n = e[po]) return n;
                                    e = co(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function bo(e) {
                    return !(e = e[po] || e[go]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function xo(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(i(33))
                }

                function ko(e) {
                    return e[ho] || null
                }
                var Co = [],
                    So = -1;

                function No(e) {
                    return {
                        current: e
                    }
                }

                function Eo(e) {
                    0 > So || (e.current = Co[So], Co[So] = null, So--)
                }

                function wo(e, t) {
                    So++, Co[So] = e.current, e.current = t
                }
                var To = {},
                    Oo = No(To),
                    Mo = No(!1),
                    Po = To;

                function Ro(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return To;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var o, i = {};
                    for (o in n) i[o] = t[o];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
                }

                function Do(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function Ao() {
                    Eo(Mo), Eo(Oo)
                }

                function Lo(e, t, n) {
                    if (Oo.current !== To) throw Error(i(168));
                    wo(Oo, t), wo(Mo, n)
                }

                function Io(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var o in r = r.getChildContext())
                        if (!(o in t)) throw Error(i(108, W(e) || "Unknown", o));
                    return $({}, n, r)
                }

                function $o(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || To, Po = Oo.current, wo(Oo, e), wo(Mo, Mo.current), !0
                }

                function Fo(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(i(169));
                    n ? (e = Io(e, t, Po), r.__reactInternalMemoizedMergedChildContext = e, Eo(Mo), Eo(Oo), wo(Oo, e)) : Eo(Mo), wo(Mo, n)
                }
                var jo = null,
                    zo = !1,
                    Bo = !1;

                function Uo(e) {
                    null === jo ? jo = [e] : jo.push(e)
                }

                function Wo() {
                    if (!Bo && null !== jo) {
                        Bo = !0;
                        var e = 0,
                            t = _t;
                        try {
                            var n = jo;
                            for (_t = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            jo = null, zo = !1
                        } catch (o) {
                            throw null !== jo && (jo = jo.slice(e + 1)), Ye(Ze, Wo), o
                        } finally {
                            _t = t, Bo = !1
                        }
                    }
                    return null
                }
                var Ko = [],
                    Ho = 0,
                    Vo = null,
                    Yo = 0,
                    Qo = [],
                    qo = 0,
                    Jo = null,
                    Go = 1,
                    Xo = "";

                function Zo(e, t) {
                    Ko[Ho++] = Yo, Ko[Ho++] = Vo, Vo = e, Yo = t
                }

                function ei(e, t, n) {
                    Qo[qo++] = Go, Qo[qo++] = Xo, Qo[qo++] = Jo, Jo = e;
                    var r = Go;
                    e = Xo;
                    var o = 32 - at(r) - 1;
                    r &= ~(1 << o), n += 1;
                    var i = 32 - at(t) + o;
                    if (30 < i) {
                        var a = o - o % 5;
                        i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Go = 1 << 32 - at(t) + o | n << o | r, Xo = i + e
                    } else Go = 1 << i | n << o | r, Xo = e
                }

                function ti(e) {
                    null !== e.return && (Zo(e, 1), ei(e, 1, 0))
                }

                function ni(e) {
                    for (; e === Vo;) Vo = Ko[--Ho], Ko[Ho] = null, Yo = Ko[--Ho], Ko[Ho] = null;
                    for (; e === Jo;) Jo = Qo[--qo], Qo[qo] = null, Xo = Qo[--qo], Qo[qo] = null, Go = Qo[--qo], Qo[qo] = null
                }
                var ri = null,
                    oi = null,
                    ii = !1,
                    ai = null;

                function li(e, t) {
                    var n = Ps(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function ui(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ri = e, oi = so(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ri = e, oi = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Jo ? {
                                id: Go,
                                overflow: Xo
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = Ps(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ri = e, oi = null, !0);
                        default:
                            return !1
                    }
                }

                function si(e) {
                    return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
                }

                function ci(e) {
                    if (ii) {
                        var t = oi;
                        if (t) {
                            var n = t;
                            if (!ui(e, t)) {
                                if (si(e)) throw Error(i(418));
                                t = so(n.nextSibling);
                                var r = ri;
                                t && ui(e, t) ? li(r, n) : (e.flags = -4097 & e.flags | 2, ii = !1, ri = e)
                            }
                        } else {
                            if (si(e)) throw Error(i(418));
                            e.flags = -4097 & e.flags | 2, ii = !1, ri = e
                        }
                    }
                }

                function fi(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    ri = e
                }

                function di(e) {
                    if (e !== ri) return !1;
                    if (!ii) return fi(e), ii = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !no(e.type, e.memoizedProps)), t && (t = oi)) {
                        if (si(e)) throw pi(), Error(i(418));
                        for (; t;) li(e, t), t = so(t.nextSibling)
                    }
                    if (fi(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            oi = so(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            oi = null
                        }
                    } else oi = ri ? so(e.stateNode.nextSibling) : null;
                    return !0
                }

                function pi() {
                    for (var e = oi; e;) e = so(e.nextSibling)
                }

                function hi() {
                    oi = ri = null, ii = !1
                }

                function gi(e) {
                    null === ai ? ai = [e] : ai.push(e)
                }
                var vi = b.ReactCurrentBatchConfig;

                function mi(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = $({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var yi = No(null),
                    _i = null,
                    bi = null,
                    xi = null;

                function ki() {
                    xi = bi = _i = null
                }

                function Ci(e) {
                    var t = yi.current;
                    Eo(yi), e._currentValue = t
                }

                function Si(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Ni(e, t) {
                    _i = e, xi = bi = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (bl = !0), e.firstContext = null)
                }

                function Ei(e) {
                    var t = e._currentValue;
                    if (xi !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === bi) {
                            if (null === _i) throw Error(i(308));
                            bi = e, _i.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else bi = bi.next = e;
                    return t
                }
                var wi = null;

                function Ti(e) {
                    null === wi ? wi = [e] : wi.push(e)
                }

                function Oi(e, t, n, r) {
                    var o = t.interleaved;
                    return null === o ? (n.next = n, Ti(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Mi(e, r)
                }

                function Mi(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var Pi = !1;

                function Ri(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function Di(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Ai(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function Li(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & Tu)) {
                        var o = r.pending;
                        return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Mi(e, n)
                    }
                    return null === (o = r.interleaved) ? (t.next = t, Ti(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Mi(e, n)
                }

                function Ii(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }

                function $i(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var o = null,
                            i = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var a = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === i ? o = i = a : i = i.next = a, n = n.next
                            } while (null !== n);
                            null === i ? o = i = t : i = i.next = t
                        } else o = i = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: o,
                            lastBaseUpdate: i,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function Fi(e, t, n, r) {
                    var o = e.updateQueue;
                    Pi = !1;
                    var i = o.firstBaseUpdate,
                        a = o.lastBaseUpdate,
                        l = o.shared.pending;
                    if (null !== l) {
                        o.shared.pending = null;
                        var u = l,
                            s = u.next;
                        u.next = null, null === a ? i = s : a.next = s, a = u;
                        var c = e.alternate;
                        null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== a && (null === l ? c.firstBaseUpdate = s : l.next = s, c.lastBaseUpdate = u))
                    }
                    if (null !== i) {
                        var f = o.baseState;
                        for (a = 0, c = s = u = null, l = i;;) {
                            var d = l.lane,
                                p = l.eventTime;
                            if ((r & d) === d) {
                                null !== c && (c = c.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: l.tag,
                                    payload: l.payload,
                                    callback: l.callback,
                                    next: null
                                });
                                e: {
                                    var h = e,
                                        g = l;
                                    switch (d = t, p = n, g.tag) {
                                        case 1:
                                            if ("function" === typeof(h = g.payload)) {
                                                f = h.call(p, f, d);
                                                break e
                                            }
                                            f = h;
                                            break e;
                                        case 3:
                                            h.flags = -65537 & h.flags | 128;
                                        case 0:
                                            if (null === (d = "function" === typeof(h = g.payload) ? h.call(p, f, d) : h) || void 0 === d) break e;
                                            f = $({}, f, d);
                                            break e;
                                        case 2:
                                            Pi = !0
                                    }
                                }
                                null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (d = o.effects) ? o.effects = [l] : d.push(l))
                            } else p = {
                                eventTime: p,
                                lane: d,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            }, null === c ? (s = c = p, u = f) : c = c.next = p, a |= d;
                            if (null === (l = l.next)) {
                                if (null === (l = o.shared.pending)) break;
                                l = (d = l).next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null
                            }
                        }
                        if (null === c && (u = f), o.baseState = u, o.firstBaseUpdate = s, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
                            o = t;
                            do {
                                a |= o.lane, o = o.next
                            } while (o !== t)
                        } else null === i && (o.shared.lanes = 0);
                        Iu |= a, e.lanes = a, e.memoizedState = f
                    }
                }

                function ji(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                o = r.callback;
                            if (null !== o) {
                                if (r.callback = null, r = n, "function" !== typeof o) throw Error(i(191, o));
                                o.call(r)
                            }
                        }
                }
                var zi = (new r.Component).refs;

                function Bi(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : $({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var Ui = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Ue(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = es(),
                            o = ts(e),
                            i = Ai(r, o);
                        i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Li(e, i, o)) && (ns(t, e, o, r), Ii(t, e, o))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = es(),
                            o = ts(e),
                            i = Ai(r, o);
                        i.tag = 1, i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Li(e, i, o)) && (ns(t, e, o, r), Ii(t, e, o))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = es(),
                            r = ts(e),
                            o = Ai(n, r);
                        o.tag = 2, void 0 !== t && null !== t && (o.callback = t), null !== (t = Li(e, o, r)) && (ns(t, e, r, n), Ii(t, e, r))
                    }
                };

                function Wi(e, t, n, r, o, i, a) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, a) : !t.prototype || !t.prototype.isPureReactComponent || (!ur(n, r) || !ur(o, i))
                }

                function Ki(e, t, n) {
                    var r = !1,
                        o = To,
                        i = t.contextType;
                    return "object" === typeof i && null !== i ? i = Ei(i) : (o = Do(t) ? Po : Oo.current, i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Ro(e, o) : To), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ui, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
                }

                function Hi(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ui.enqueueReplaceState(t, t.state, null)
                }

                function Vi(e, t, n, r) {
                    var o = e.stateNode;
                    o.props = n, o.state = e.memoizedState, o.refs = zi, Ri(e);
                    var i = t.contextType;
                    "object" === typeof i && null !== i ? o.context = Ei(i) : (i = Do(t) ? Po : Oo.current, o.context = Ro(e, i)), o.state = e.memoizedState, "function" === typeof(i = t.getDerivedStateFromProps) && (Bi(e, t, i, n), o.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state, "function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Ui.enqueueReplaceState(o, o.state, null), Fi(e, n, o, r), o.state = e.memoizedState), "function" === typeof o.componentDidMount && (e.flags |= 4194308)
                }

                function Yi(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(i(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(i(147, e));
                            var o = r,
                                a = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === a ? t.ref : (t = function(e) {
                                var t = o.refs;
                                t === zi && (t = o.refs = {}), null === e ? delete t[a] : t[a] = e
                            }, t._stringRef = a, t)
                        }
                        if ("string" !== typeof e) throw Error(i(284));
                        if (!n._owner) throw Error(i(290, e))
                    }
                    return e
                }

                function Qi(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function qi(e) {
                    return (0, e._init)(e._payload)
                }

                function Ji(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function o(e, t) {
                        return (e = Ds(e, t)).index = 0, e.sibling = null, e
                    }

                    function a(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function l(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function u(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = $s(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                    }

                    function s(e, t, n, r) {
                        var i = n.type;
                        return i === C ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" === typeof i && null !== i && i.$$typeof === R && qi(i) === t.type) ? ((r = o(t, n.props)).ref = Yi(e, t, n), r.return = e, r) : ((r = As(n.type, n.key, n.props, null, e.mode, r)).ref = Yi(e, t, n), r.return = e, r)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Fs(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                    }

                    function f(e, t, n, r, i) {
                        return null === t || 7 !== t.tag ? ((t = Ls(n, e.mode, r, i)).return = e, t) : ((t = o(t, n)).return = e, t)
                    }

                    function d(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = $s("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case x:
                                    return (n = As(t.type, t.key, t.props, null, e.mode, n)).ref = Yi(e, null, t), n.return = e, n;
                                case k:
                                    return (t = Fs(t, e.mode, n)).return = e, t;
                                case R:
                                    return d(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || L(t)) return (t = Ls(t, e.mode, n, null)).return = e, t;
                            Qi(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var o = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== o ? null : u(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case x:
                                    return n.key === o ? s(e, t, n, r) : null;
                                case k:
                                    return n.key === o ? c(e, t, n, r) : null;
                                case R:
                                    return p(e, t, (o = n._init)(n._payload), r)
                            }
                            if (te(n) || L(n)) return null !== o ? null : f(e, t, n, r, null);
                            Qi(e, n)
                        }
                        return null
                    }

                    function h(e, t, n, r, o) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return u(t, e = e.get(n) || null, "" + r, o);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case x:
                                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                                case k:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                                case R:
                                    return h(e, t, n, (0, r._init)(r._payload), o)
                            }
                            if (te(r) || L(r)) return f(t, e = e.get(n) || null, r, o, null);
                            Qi(t, r)
                        }
                        return null
                    }

                    function g(o, i, l, u) {
                        for (var s = null, c = null, f = i, g = i = 0, v = null; null !== f && g < l.length; g++) {
                            f.index > g ? (v = f, f = null) : v = f.sibling;
                            var m = p(o, f, l[g], u);
                            if (null === m) {
                                null === f && (f = v);
                                break
                            }
                            e && f && null === m.alternate && t(o, f), i = a(m, i, g), null === c ? s = m : c.sibling = m, c = m, f = v
                        }
                        if (g === l.length) return n(o, f), ii && Zo(o, g), s;
                        if (null === f) {
                            for (; g < l.length; g++) null !== (f = d(o, l[g], u)) && (i = a(f, i, g), null === c ? s = f : c.sibling = f, c = f);
                            return ii && Zo(o, g), s
                        }
                        for (f = r(o, f); g < l.length; g++) null !== (v = h(f, o, g, l[g], u)) && (e && null !== v.alternate && f.delete(null === v.key ? g : v.key), i = a(v, i, g), null === c ? s = v : c.sibling = v, c = v);
                        return e && f.forEach((function(e) {
                            return t(o, e)
                        })), ii && Zo(o, g), s
                    }

                    function v(o, l, u, s) {
                        var c = L(u);
                        if ("function" !== typeof c) throw Error(i(150));
                        if (null == (u = c.call(u))) throw Error(i(151));
                        for (var f = c = null, g = l, v = l = 0, m = null, y = u.next(); null !== g && !y.done; v++, y = u.next()) {
                            g.index > v ? (m = g, g = null) : m = g.sibling;
                            var _ = p(o, g, y.value, s);
                            if (null === _) {
                                null === g && (g = m);
                                break
                            }
                            e && g && null === _.alternate && t(o, g), l = a(_, l, v), null === f ? c = _ : f.sibling = _, f = _, g = m
                        }
                        if (y.done) return n(o, g), ii && Zo(o, v), c;
                        if (null === g) {
                            for (; !y.done; v++, y = u.next()) null !== (y = d(o, y.value, s)) && (l = a(y, l, v), null === f ? c = y : f.sibling = y, f = y);
                            return ii && Zo(o, v), c
                        }
                        for (g = r(o, g); !y.done; v++, y = u.next()) null !== (y = h(g, o, v, y.value, s)) && (e && null !== y.alternate && g.delete(null === y.key ? v : y.key), l = a(y, l, v), null === f ? c = y : f.sibling = y, f = y);
                        return e && g.forEach((function(e) {
                            return t(o, e)
                        })), ii && Zo(o, v), c
                    }
                    return function e(r, i, a, u) {
                        if ("object" === typeof a && null !== a && a.type === C && null === a.key && (a = a.props.children), "object" === typeof a && null !== a) {
                            switch (a.$$typeof) {
                                case x:
                                    e: {
                                        for (var s = a.key, c = i; null !== c;) {
                                            if (c.key === s) {
                                                if ((s = a.type) === C) {
                                                    if (7 === c.tag) {
                                                        n(r, c.sibling), (i = o(c, a.props.children)).return = r, r = i;
                                                        break e
                                                    }
                                                } else if (c.elementType === s || "object" === typeof s && null !== s && s.$$typeof === R && qi(s) === c.type) {
                                                    n(r, c.sibling), (i = o(c, a.props)).ref = Yi(r, c, a), i.return = r, r = i;
                                                    break e
                                                }
                                                n(r, c);
                                                break
                                            }
                                            t(r, c), c = c.sibling
                                        }
                                        a.type === C ? ((i = Ls(a.props.children, r.mode, u, a.key)).return = r, r = i) : ((u = As(a.type, a.key, a.props, null, r.mode, u)).ref = Yi(r, i, a), u.return = r, r = u)
                                    }
                                    return l(r);
                                case k:
                                    e: {
                                        for (c = a.key; null !== i;) {
                                            if (i.key === c) {
                                                if (4 === i.tag && i.stateNode.containerInfo === a.containerInfo && i.stateNode.implementation === a.implementation) {
                                                    n(r, i.sibling), (i = o(i, a.children || [])).return = r, r = i;
                                                    break e
                                                }
                                                n(r, i);
                                                break
                                            }
                                            t(r, i), i = i.sibling
                                        }(i = Fs(a, r.mode, u)).return = r,
                                        r = i
                                    }
                                    return l(r);
                                case R:
                                    return e(r, i, (c = a._init)(a._payload), u)
                            }
                            if (te(a)) return g(r, i, a, u);
                            if (L(a)) return v(r, i, a, u);
                            Qi(r, a)
                        }
                        return "string" === typeof a && "" !== a || "number" === typeof a ? (a = "" + a, null !== i && 6 === i.tag ? (n(r, i.sibling), (i = o(i, a)).return = r, r = i) : (n(r, i), (i = $s(a, r.mode, u)).return = r, r = i), l(r)) : n(r, i)
                    }
                }
                var Gi = Ji(!0),
                    Xi = Ji(!1),
                    Zi = {},
                    ea = No(Zi),
                    ta = No(Zi),
                    na = No(Zi);

                function ra(e) {
                    if (e === Zi) throw Error(i(174));
                    return e
                }

                function oa(e, t) {
                    switch (wo(na, t), wo(ta, e), wo(ea, Zi), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                            break;
                        default:
                            t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    Eo(ea), wo(ea, t)
                }

                function ia() {
                    Eo(ea), Eo(ta), Eo(na)
                }

                function aa(e) {
                    ra(na.current);
                    var t = ra(ea.current),
                        n = ue(t, e.type);
                    t !== n && (wo(ta, e), wo(ea, n))
                }

                function la(e) {
                    ta.current === e && (Eo(ea), Eo(ta))
                }
                var ua = No(0);

                function sa(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var ca = [];

                function fa() {
                    for (var e = 0; e < ca.length; e++) ca[e]._workInProgressVersionPrimary = null;
                    ca.length = 0
                }
                var da = b.ReactCurrentDispatcher,
                    pa = b.ReactCurrentBatchConfig,
                    ha = 0,
                    ga = null,
                    va = null,
                    ma = null,
                    ya = !1,
                    _a = !1,
                    ba = 0,
                    xa = 0;

                function ka() {
                    throw Error(i(321))
                }

                function Ca(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!lr(e[n], t[n])) return !1;
                    return !0
                }

                function Sa(e, t, n, r, o, a) {
                    if (ha = a, ga = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, da.current = null === e || null === e.memoizedState ? ll : ul, e = n(r, o), _a) {
                        a = 0;
                        do {
                            if (_a = !1, ba = 0, 25 <= a) throw Error(i(301));
                            a += 1, ma = va = null, t.updateQueue = null, da.current = sl, e = n(r, o)
                        } while (_a)
                    }
                    if (da.current = al, t = null !== va && null !== va.next, ha = 0, ma = va = ga = null, ya = !1, t) throw Error(i(300));
                    return e
                }

                function Na() {
                    var e = 0 !== ba;
                    return ba = 0, e
                }

                function Ea() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === ma ? ga.memoizedState = ma = e : ma = ma.next = e, ma
                }

                function wa() {
                    if (null === va) {
                        var e = ga.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = va.next;
                    var t = null === ma ? ga.memoizedState : ma.next;
                    if (null !== t) ma = t, va = e;
                    else {
                        if (null === e) throw Error(i(310));
                        e = {
                            memoizedState: (va = e).memoizedState,
                            baseState: va.baseState,
                            baseQueue: va.baseQueue,
                            queue: va.queue,
                            next: null
                        }, null === ma ? ga.memoizedState = ma = e : ma = ma.next = e
                    }
                    return ma
                }

                function Ta(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function Oa(e) {
                    var t = wa(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = va,
                        o = r.baseQueue,
                        a = n.pending;
                    if (null !== a) {
                        if (null !== o) {
                            var l = o.next;
                            o.next = a.next, a.next = l
                        }
                        r.baseQueue = o = a, n.pending = null
                    }
                    if (null !== o) {
                        a = o.next, r = r.baseState;
                        var u = l = null,
                            s = null,
                            c = a;
                        do {
                            var f = c.lane;
                            if ((ha & f) === f) null !== s && (s = s.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                            else {
                                var d = {
                                    lane: f,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                };
                                null === s ? (u = s = d, l = r) : s = s.next = d, ga.lanes |= f, Iu |= f
                            }
                            c = c.next
                        } while (null !== c && c !== a);
                        null === s ? l = r : s.next = u, lr(r, t.memoizedState) || (bl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        o = e;
                        do {
                            a = o.lane, ga.lanes |= a, Iu |= a, o = o.next
                        } while (o !== e)
                    } else null === o && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function Ma(e) {
                    var t = wa(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        o = n.pending,
                        a = t.memoizedState;
                    if (null !== o) {
                        n.pending = null;
                        var l = o = o.next;
                        do {
                            a = e(a, l.action), l = l.next
                        } while (l !== o);
                        lr(a, t.memoizedState) || (bl = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
                    }
                    return [a, r]
                }

                function Pa() {}

                function Ra(e, t) {
                    var n = ga,
                        r = wa(),
                        o = t(),
                        a = !lr(r.memoizedState, o);
                    if (a && (r.memoizedState = o, bl = !0), r = r.queue, Ka(La.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || null !== ma && 1 & ma.memoizedState.tag) {
                        if (n.flags |= 2048, ja(9, Aa.bind(null, n, r, o, t), void 0, null), null === Ou) throw Error(i(349));
                        0 !== (30 & ha) || Da(n, t, o)
                    }
                    return o
                }

                function Da(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = ga.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, ga.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Aa(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Ia(t) && $a(e)
                }

                function La(e, t, n) {
                    return n((function() {
                        Ia(t) && $a(e)
                    }))
                }

                function Ia(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !lr(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function $a(e) {
                    var t = Mi(e, 1);
                    null !== t && ns(t, e, 1, -1)
                }

                function Fa(e) {
                    var t = Ea();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: Ta,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = nl.bind(null, ga, e), [t.memoizedState, e]
                }

                function ja(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = ga.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, ga.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function za() {
                    return wa().memoizedState
                }

                function Ba(e, t, n, r) {
                    var o = Ea();
                    ga.flags |= e, o.memoizedState = ja(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Ua(e, t, n, r) {
                    var o = wa();
                    r = void 0 === r ? null : r;
                    var i = void 0;
                    if (null !== va) {
                        var a = va.memoizedState;
                        if (i = a.destroy, null !== r && Ca(r, a.deps)) return void(o.memoizedState = ja(t, n, i, r))
                    }
                    ga.flags |= e, o.memoizedState = ja(1 | t, n, i, r)
                }

                function Wa(e, t) {
                    return Ba(8390656, 8, e, t)
                }

                function Ka(e, t) {
                    return Ua(2048, 8, e, t)
                }

                function Ha(e, t) {
                    return Ua(4, 2, e, t)
                }

                function Va(e, t) {
                    return Ua(4, 4, e, t)
                }

                function Ya(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function Qa(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ua(4, 4, Ya.bind(null, t, e), n)
                }

                function qa() {}

                function Ja(e, t) {
                    var n = wa();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && Ca(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Ga(e, t) {
                    var n = wa();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && Ca(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Xa(e, t, n) {
                    return 0 === (21 & ha) ? (e.baseState && (e.baseState = !1, bl = !0), e.memoizedState = n) : (lr(n, t) || (n = gt(), ga.lanes |= n, Iu |= n, e.baseState = !0), t)
                }

                function Za(e, t) {
                    var n = _t;
                    _t = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = pa.transition;
                    pa.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        _t = n, pa.transition = r
                    }
                }

                function el() {
                    return wa().memoizedState
                }

                function tl(e, t, n) {
                    var r = ts(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, rl(e)) ol(t, n);
                    else if (null !== (n = Oi(e, t, n, r))) {
                        ns(n, e, r, es()), il(n, t, r)
                    }
                }

                function nl(e, t, n) {
                    var r = ts(e),
                        o = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (rl(e)) ol(t, o);
                    else {
                        var i = e.alternate;
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var a = t.lastRenderedState,
                                l = i(a, n);
                            if (o.hasEagerState = !0, o.eagerState = l, lr(l, a)) {
                                var u = t.interleaved;
                                return null === u ? (o.next = o, Ti(t)) : (o.next = u.next, u.next = o), void(t.interleaved = o)
                            }
                        } catch (s) {}
                        null !== (n = Oi(e, t, o, r)) && (ns(n, e, r, o = es()), il(n, t, r))
                    }
                }

                function rl(e) {
                    var t = e.alternate;
                    return e === ga || null !== t && t === ga
                }

                function ol(e, t) {
                    _a = ya = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function il(e, t, n) {
                    if (0 !== (4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }
                var al = {
                        readContext: Ei,
                        useCallback: ka,
                        useContext: ka,
                        useEffect: ka,
                        useImperativeHandle: ka,
                        useInsertionEffect: ka,
                        useLayoutEffect: ka,
                        useMemo: ka,
                        useReducer: ka,
                        useRef: ka,
                        useState: ka,
                        useDebugValue: ka,
                        useDeferredValue: ka,
                        useTransition: ka,
                        useMutableSource: ka,
                        useSyncExternalStore: ka,
                        useId: ka,
                        unstable_isNewReconciler: !1
                    },
                    ll = {
                        readContext: Ei,
                        useCallback: function(e, t) {
                            return Ea().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Ei,
                        useEffect: Wa,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ba(4194308, 4, Ya.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return Ba(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return Ba(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = Ea();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = Ea();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = tl.bind(null, ga, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, Ea().memoizedState = e
                        },
                        useState: Fa,
                        useDebugValue: qa,
                        useDeferredValue: function(e) {
                            return Ea().memoizedState = e
                        },
                        useTransition: function() {
                            var e = Fa(!1),
                                t = e[0];
                            return e = Za.bind(null, e[1]), Ea().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = ga,
                                o = Ea();
                            if (ii) {
                                if (void 0 === n) throw Error(i(407));
                                n = n()
                            } else {
                                if (n = t(), null === Ou) throw Error(i(349));
                                0 !== (30 & ha) || Da(r, t, n)
                            }
                            o.memoizedState = n;
                            var a = {
                                value: n,
                                getSnapshot: t
                            };
                            return o.queue = a, Wa(La.bind(null, r, a, e), [e]), r.flags |= 2048, ja(9, Aa.bind(null, r, a, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = Ea(),
                                t = Ou.identifierPrefix;
                            if (ii) {
                                var n = Xo;
                                t = ":" + t + "R" + (n = (Go & ~(1 << 32 - at(Go) - 1)).toString(32) + n), 0 < (n = ba++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = xa++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    ul = {
                        readContext: Ei,
                        useCallback: Ja,
                        useContext: Ei,
                        useEffect: Ka,
                        useImperativeHandle: Qa,
                        useInsertionEffect: Ha,
                        useLayoutEffect: Va,
                        useMemo: Ga,
                        useReducer: Oa,
                        useRef: za,
                        useState: function() {
                            return Oa(Ta)
                        },
                        useDebugValue: qa,
                        useDeferredValue: function(e) {
                            return Xa(wa(), va.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Oa(Ta)[0], wa().memoizedState]
                        },
                        useMutableSource: Pa,
                        useSyncExternalStore: Ra,
                        useId: el,
                        unstable_isNewReconciler: !1
                    },
                    sl = {
                        readContext: Ei,
                        useCallback: Ja,
                        useContext: Ei,
                        useEffect: Ka,
                        useImperativeHandle: Qa,
                        useInsertionEffect: Ha,
                        useLayoutEffect: Va,
                        useMemo: Ga,
                        useReducer: Ma,
                        useRef: za,
                        useState: function() {
                            return Ma(Ta)
                        },
                        useDebugValue: qa,
                        useDeferredValue: function(e) {
                            var t = wa();
                            return null === va ? t.memoizedState = e : Xa(t, va.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Ma(Ta)[0], wa().memoizedState]
                        },
                        useMutableSource: Pa,
                        useSyncExternalStore: Ra,
                        useId: el,
                        unstable_isNewReconciler: !1
                    };

                function cl(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += B(r), r = r.return
                        } while (r);
                        var o = n
                    } catch (i) {
                        o = "\nError generating stack: " + i.message + "\n" + i.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: o,
                        digest: null
                    }
                }

                function fl(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function dl(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                var pl = "function" === typeof WeakMap ? WeakMap : Map;

                function hl(e, t, n) {
                    (n = Ai(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        Ku || (Ku = !0, Hu = r), dl(0, t)
                    }, n
                }

                function gl(e, t, n) {
                    (n = Ai(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var o = t.value;
                        n.payload = function() {
                            return r(o)
                        }, n.callback = function() {
                            dl(0, t)
                        }
                    }
                    var i = e.stateNode;
                    return null !== i && "function" === typeof i.componentDidCatch && (n.callback = function() {
                        dl(0, t), "function" !== typeof r && (null === Vu ? Vu = new Set([this]) : Vu.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function vl(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new pl;
                        var o = new Set;
                        r.set(t, o)
                    } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
                    o.has(n) || (o.add(n), e = Ns.bind(null, e, t, n), t.then(e, e))
                }

                function ml(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function yl(e, t, n, r, o) {
                    return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ai(-1, 1)).tag = 2, Li(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e)
                }
                var _l = b.ReactCurrentOwner,
                    bl = !1;

                function xl(e, t, n, r) {
                    t.child = null === e ? Xi(t, null, n, r) : Gi(t, e.child, n, r)
                }

                function kl(e, t, n, r, o) {
                    n = n.render;
                    var i = t.ref;
                    return Ni(t, o), r = Sa(e, t, n, r, i, o), n = Na(), null === e || bl ? (ii && n && ti(t), t.flags |= 1, xl(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Kl(e, t, o))
                }

                function Cl(e, t, n, r, o) {
                    if (null === e) {
                        var i = n.type;
                        return "function" !== typeof i || Rs(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = As(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Sl(e, t, i, r, o))
                    }
                    if (i = e.child, 0 === (e.lanes & o)) {
                        var a = i.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : ur)(a, r) && e.ref === t.ref) return Kl(e, t, o)
                    }
                    return t.flags |= 1, (e = Ds(i, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Sl(e, t, n, r, o) {
                    if (null !== e) {
                        var i = e.memoizedProps;
                        if (ur(i, r) && e.ref === t.ref) {
                            if (bl = !1, t.pendingProps = r = i, 0 === (e.lanes & o)) return t.lanes = e.lanes, Kl(e, t, o);
                            0 !== (131072 & e.flags) && (bl = !0)
                        }
                    }
                    return wl(e, t, n, r, o)
                }

                function Nl(e, t, n) {
                    var r = t.pendingProps,
                        o = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, wo(Du, Ru), Ru |= n;
                        else {
                            if (0 === (1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, wo(Du, Ru), Ru |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== i ? i.baseLanes : n, wo(Du, Ru), Ru |= r
                        }
                    else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, wo(Du, Ru), Ru |= r;
                    return xl(e, t, o, n), t.child
                }

                function El(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function wl(e, t, n, r, o) {
                    var i = Do(n) ? Po : Oo.current;
                    return i = Ro(t, i), Ni(t, o), n = Sa(e, t, n, r, i, o), r = Na(), null === e || bl ? (ii && r && ti(t), t.flags |= 1, xl(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Kl(e, t, o))
                }

                function Tl(e, t, n, r, o) {
                    if (Do(n)) {
                        var i = !0;
                        $o(t)
                    } else i = !1;
                    if (Ni(t, o), null === t.stateNode) Wl(e, t), Ki(t, n, r), Vi(t, n, r, o), r = !0;
                    else if (null === e) {
                        var a = t.stateNode,
                            l = t.memoizedProps;
                        a.props = l;
                        var u = a.context,
                            s = n.contextType;
                        "object" === typeof s && null !== s ? s = Ei(s) : s = Ro(t, s = Do(n) ? Po : Oo.current);
                        var c = n.getDerivedStateFromProps,
                            f = "function" === typeof c || "function" === typeof a.getSnapshotBeforeUpdate;
                        f || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (l !== r || u !== s) && Hi(t, a, r, s), Pi = !1;
                        var d = t.memoizedState;
                        a.state = d, Fi(t, r, a, o), u = t.memoizedState, l !== r || d !== u || Mo.current || Pi ? ("function" === typeof c && (Bi(t, n, c, r), u = t.memoizedState), (l = Pi || Wi(t, n, l, r, d, u, s)) ? (f || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" === typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = s, r = l) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        a = t.stateNode, Di(e, t), l = t.memoizedProps, s = t.type === t.elementType ? l : mi(t.type, l), a.props = s, f = t.pendingProps, d = a.context, "object" === typeof(u = n.contextType) && null !== u ? u = Ei(u) : u = Ro(t, u = Do(n) ? Po : Oo.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" === typeof p || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (l !== f || d !== u) && Hi(t, a, r, u), Pi = !1, d = t.memoizedState, a.state = d, Fi(t, r, a, o);
                        var h = t.memoizedState;
                        l !== f || d !== h || Mo.current || Pi ? ("function" === typeof p && (Bi(t, n, p, r), h = t.memoizedState), (s = Pi || Wi(t, n, s, r, d, h, u) || !1) ? (c || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, h, u), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, u)), "function" === typeof a.componentDidUpdate && (t.flags |= 4), "function" === typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof a.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), a.props = r, a.state = h, a.context = u, r = s) : ("function" !== typeof a.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return Ol(e, t, n, r, i, o)
                }

                function Ol(e, t, n, r, o, i) {
                    El(e, t);
                    var a = 0 !== (128 & t.flags);
                    if (!r && !a) return o && Fo(t, n, !1), Kl(e, t, i);
                    r = t.stateNode, _l.current = t;
                    var l = a && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && a ? (t.child = Gi(t, e.child, null, i), t.child = Gi(t, null, l, i)) : xl(e, t, l, i), t.memoizedState = r.state, o && Fo(t, n, !0), t.child
                }

                function Ml(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Lo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Lo(0, t.context, !1), oa(e, t.containerInfo)
                }

                function Pl(e, t, n, r, o) {
                    return hi(), gi(o), t.flags |= 256, xl(e, t, n, r), t.child
                }
                var Rl, Dl, Al, Ll = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function Il(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function $l(e, t, n) {
                    var r, o = t.pendingProps,
                        a = ua.current,
                        l = !1,
                        u = 0 !== (128 & t.flags);
                    if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (a |= 1), wo(ua, 1 & a), null === e) return ci(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = o.children, e = o.fallback, l ? (o = t.mode, l = t.child, u = {
                        mode: "hidden",
                        children: u
                    }, 0 === (1 & o) && null !== l ? (l.childLanes = 0, l.pendingProps = u) : l = Is(u, o, 0, null), e = Ls(e, o, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Il(n), t.memoizedState = Ll, e) : Fl(t, u));
                    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated)) return function(e, t, n, r, o, a, l) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, jl(e, t, l, r = fl(Error(i(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, o = t.mode, r = Is({
                            mode: "visible",
                            children: r.children
                        }, o, 0, null), (a = Ls(a, o, l, null)).flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, 0 !== (1 & t.mode) && Gi(t, e.child, null, l), t.child.memoizedState = Il(l), t.memoizedState = Ll, a);
                        if (0 === (1 & t.mode)) return jl(e, t, l, null);
                        if ("$!" === o.data) {
                            if (r = o.nextSibling && o.nextSibling.dataset) var u = r.dgst;
                            return r = u, jl(e, t, l, r = fl(a = Error(i(419)), r, void 0))
                        }
                        if (u = 0 !== (l & e.childLanes), bl || u) {
                            if (null !== (r = Ou)) {
                                switch (l & -l) {
                                    case 4:
                                        o = 2;
                                        break;
                                    case 16:
                                        o = 8;
                                        break;
                                    case 64:
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
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        o = 32;
                                        break;
                                    case 536870912:
                                        o = 268435456;
                                        break;
                                    default:
                                        o = 0
                                }
                                0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) && o !== a.retryLane && (a.retryLane = o, Mi(e, o), ns(r, e, o, -1))
                            }
                            return gs(), jl(e, t, l, r = fl(Error(i(421))))
                        }
                        return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = ws.bind(null, e), o._reactRetry = t, null) : (e = a.treeContext, oi = so(o.nextSibling), ri = t, ii = !0, ai = null, null !== e && (Qo[qo++] = Go, Qo[qo++] = Xo, Qo[qo++] = Jo, Go = e.id, Xo = e.overflow, Jo = t), (t = Fl(t, r.children)).flags |= 4096, t)
                    }(e, t, u, o, r, a, n);
                    if (l) {
                        l = o.fallback, u = t.mode, r = (a = e.child).sibling;
                        var s = {
                            mode: "hidden",
                            children: o.children
                        };
                        return 0 === (1 & u) && t.child !== a ? ((o = t.child).childLanes = 0, o.pendingProps = s, t.deletions = null) : (o = Ds(a, s)).subtreeFlags = 14680064 & a.subtreeFlags, null !== r ? l = Ds(r, l) : (l = Ls(l, u, n, null)).flags |= 2, l.return = t, o.return = t, o.sibling = l, t.child = o, o = l, l = t.child, u = null === (u = e.child.memoizedState) ? Il(n) : {
                            baseLanes: u.baseLanes | n,
                            cachePool: null,
                            transitions: u.transitions
                        }, l.memoizedState = u, l.childLanes = e.childLanes & ~n, t.memoizedState = Ll, o
                    }
                    return e = (l = e.child).sibling, o = Ds(l, {
                        mode: "visible",
                        children: o.children
                    }), 0 === (1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
                }

                function Fl(e, t) {
                    return (t = Is({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function jl(e, t, n, r) {
                    return null !== r && gi(r), Gi(t, e.child, null, n), (e = Fl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function zl(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), Si(e.return, t, n)
                }

                function Bl(e, t, n, r, o) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: o
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
                }

                function Ul(e, t, n) {
                    var r = t.pendingProps,
                        o = r.revealOrder,
                        i = r.tail;
                    if (xl(e, t, r.children, n), 0 !== (2 & (r = ua.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && zl(e, n, t);
                            else if (19 === e.tag) zl(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (wo(ua, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (o) {
                        case "forwards":
                            for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === sa(e) && (o = n), n = n.sibling;
                            null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Bl(t, !1, o, n, i);
                            break;
                        case "backwards":
                            for (n = null, o = t.child, t.child = null; null !== o;) {
                                if (null !== (e = o.alternate) && null === sa(e)) {
                                    t.child = o;
                                    break
                                }
                                e = o.sibling, o.sibling = n, n = o, o = e
                            }
                            Bl(t, !0, n, null, i);
                            break;
                        case "together":
                            Bl(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Wl(e, t) {
                    0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function Kl(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Iu |= t.lanes, 0 === (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(i(153));
                    if (null !== t.child) {
                        for (n = Ds(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ds(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Hl(e, t) {
                    if (!ii) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function Vl(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling;
                    else
                        for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Yl(e, t, n) {
                    var r = t.pendingProps;
                    switch (ni(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return Vl(t), null;
                        case 1:
                        case 17:
                            return Do(t.type) && Ao(), Vl(t), null;
                        case 3:
                            return r = t.stateNode, ia(), Eo(Mo), Eo(Oo), fa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (di(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ai && (as(ai), ai = null))), Vl(t), null;
                        case 5:
                            la(t);
                            var o = ra(na.current);
                            if (n = t.type, null !== e && null != t.stateNode) Dl(e, t, n, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return Vl(t), null
                                }
                                if (e = ra(ea.current), di(t)) {
                                    r = t.stateNode, n = t.type;
                                    var a = t.memoizedProps;
                                    switch (r[po] = t, r[ho] = a, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            jr("cancel", r), jr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            jr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (o = 0; o < Lr.length; o++) jr(Lr[o], r);
                                            break;
                                        case "source":
                                            jr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            jr("error", r), jr("load", r);
                                            break;
                                        case "details":
                                            jr("toggle", r);
                                            break;
                                        case "input":
                                            J(r, a), jr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!a.multiple
                                            }, jr("invalid", r);
                                            break;
                                        case "textarea":
                                            oe(r, a), jr("invalid", r)
                                    }
                                    for (var u in ye(n, a), o = null, a)
                                        if (a.hasOwnProperty(u)) {
                                            var s = a[u];
                                            "children" === u ? "string" === typeof s ? r.textContent !== s && (!0 !== a.suppressHydrationWarning && Xr(r.textContent, s, e), o = ["children", s]) : "number" === typeof s && r.textContent !== "" + s && (!0 !== a.suppressHydrationWarning && Xr(r.textContent, s, e), o = ["children", "" + s]) : l.hasOwnProperty(u) && null != s && "onScroll" === u && jr("scroll", r)
                                        } switch (n) {
                                        case "input":
                                            V(r), Z(r, a, !0);
                                            break;
                                        case "textarea":
                                            V(r), ae(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof a.onClick && (r.onclick = Zr)
                                    }
                                    r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    u = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = u.createElement(n, {
                                        is: r.is
                                    }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[po] = t, e[ho] = r, Rl(e, t), t.stateNode = e;
                                    e: {
                                        switch (u = _e(n, r), n) {
                                            case "dialog":
                                                jr("cancel", e), jr("close", e), o = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                jr("load", e), o = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (o = 0; o < Lr.length; o++) jr(Lr[o], e);
                                                o = r;
                                                break;
                                            case "source":
                                                jr("error", e), o = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                jr("error", e), jr("load", e), o = r;
                                                break;
                                            case "details":
                                                jr("toggle", e), o = r;
                                                break;
                                            case "input":
                                                J(e, r), o = q(e, r), jr("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                o = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, o = $({}, r, {
                                                    value: void 0
                                                }), jr("invalid", e);
                                                break;
                                            case "textarea":
                                                oe(e, r), o = re(e, r), jr("invalid", e)
                                        }
                                        for (a in ye(n, o), s = o)
                                            if (s.hasOwnProperty(a)) {
                                                var c = s[a];
                                                "style" === a ? ve(e, c) : "dangerouslySetInnerHTML" === a ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === a ? "string" === typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" === typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (l.hasOwnProperty(a) ? null != c && "onScroll" === a && jr("scroll", e) : null != c && _(e, a, c, u))
                                            } switch (n) {
                                            case "input":
                                                V(e), Z(e, r, !1);
                                                break;
                                            case "textarea":
                                                V(e), ae(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + K(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (a = r.value) ? ne(e, !!r.multiple, a, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof o.onClick && (e.onclick = Zr)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return Vl(t), null;
                        case 6:
                            if (e && null != t.stateNode) Al(0, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                                if (n = ra(na.current), ra(ea.current), di(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[po] = t, (a = r.nodeValue !== n) && null !== (e = ri)) switch (e.tag) {
                                        case 3:
                                            Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Xr(r.nodeValue, n, 0 !== (1 & e.mode))
                                    }
                                    a && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t, t.stateNode = r
                            }
                            return Vl(t), null;
                        case 13:
                            if (Eo(ua), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (ii && null !== oi && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) pi(), hi(), t.flags |= 98560, a = !1;
                                else if (a = di(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!a) throw Error(i(318));
                                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(i(317));
                                        a[po] = t
                                    } else hi(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Vl(t), a = !1
                                } else null !== ai && (as(ai), ai = null), a = !0;
                                if (!a) return 65536 & t.flags ? t : null
                            }
                            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & ua.current) ? 0 === Au && (Au = 3) : gs())), null !== t.updateQueue && (t.flags |= 4), Vl(t), null);
                        case 4:
                            return ia(), null === e && Ur(t.stateNode.containerInfo), Vl(t), null;
                        case 10:
                            return Ci(t.type._context), Vl(t), null;
                        case 19:
                            if (Eo(ua), null === (a = t.memoizedState)) return Vl(t), null;
                            if (r = 0 !== (128 & t.flags), null === (u = a.rendering))
                                if (r) Hl(a, !1);
                                else {
                                    if (0 !== Au || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (u = sa(e))) {
                                                for (t.flags |= 128, Hl(a, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (a = n).flags &= 14680066, null === (u = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = u.childLanes, a.lanes = u.lanes, a.child = u.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = u.memoizedProps, a.memoizedState = u.memoizedState, a.updateQueue = u.updateQueue, a.type = u.type, e = u.dependencies, a.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return wo(ua, 1 & ua.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== a.tail && Ge() > Uu && (t.flags |= 128, r = !0, Hl(a, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = sa(u))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Hl(a, !0), null === a.tail && "hidden" === a.tailMode && !u.alternate && !ii) return Vl(t), null
                                    } else 2 * Ge() - a.renderingStartTime > Uu && 1073741824 !== n && (t.flags |= 128, r = !0, Hl(a, !1), t.lanes = 4194304);
                                a.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = a.last) ? n.sibling = u : t.child = u, a.last = u)
                            }
                            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ge(), t.sibling = null, n = ua.current, wo(ua, r ? 1 & n | 2 : 1 & n), t) : (Vl(t), null);
                        case 22:
                        case 23:
                            return fs(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Ru) && (Vl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Vl(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(i(156, t.tag))
                }

                function Ql(e, t) {
                    switch (ni(t), t.tag) {
                        case 1:
                            return Do(t.type) && Ao(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return ia(), Eo(Mo), Eo(Oo), fa(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return la(t), null;
                        case 13:
                            if (Eo(ua), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(i(340));
                                hi()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return Eo(ua), null;
                        case 4:
                            return ia(), null;
                        case 10:
                            return Ci(t.type._context), null;
                        case 22:
                        case 23:
                            return fs(), null;
                        default:
                            return null
                    }
                }
                Rl = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Dl = function(e, t, n, r) {
                    var o = e.memoizedProps;
                    if (o !== r) {
                        e = t.stateNode, ra(ea.current);
                        var i, a = null;
                        switch (n) {
                            case "input":
                                o = q(e, o), r = q(e, r), a = [];
                                break;
                            case "select":
                                o = $({}, o, {
                                    value: void 0
                                }), r = $({}, r, {
                                    value: void 0
                                }), a = [];
                                break;
                            case "textarea":
                                o = re(e, o), r = re(e, r), a = [];
                                break;
                            default:
                                "function" !== typeof o.onClick && "function" === typeof r.onClick && (e.onclick = Zr)
                        }
                        for (c in ye(n, r), n = null, o)
                            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                                if ("style" === c) {
                                    var u = o[c];
                                    for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                                } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
                        for (c in r) {
                            var s = r[c];
                            if (u = null != o ? o[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                                if ("style" === c)
                                    if (u) {
                                        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i])
                                    } else n || (a || (a = []), a.push(c, n)), n = s;
                            else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (a = a || []).push(c, s)) : "children" === c ? "string" !== typeof s && "number" !== typeof s || (a = a || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != s && "onScroll" === c && jr("scroll", e), a || u === s || (a = [])) : (a = a || []).push(c, s))
                        }
                        n && (a = a || []).push("style", n);
                        var c = a;
                        (t.updateQueue = c) && (t.flags |= 4)
                    }
                }, Al = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var ql = !1,
                    Jl = !1,
                    Gl = "function" === typeof WeakSet ? WeakSet : Set,
                    Xl = null;

                function Zl(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n) try {
                            n(null)
                        } catch (r) {
                            Ss(e, t, r)
                        } else n.current = null
                }

                function eu(e, t, n) {
                    try {
                        n()
                    } catch (r) {
                        Ss(e, t, r)
                    }
                }
                var tu = !1;

                function nu(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var o = r = r.next;
                        do {
                            if ((o.tag & e) === e) {
                                var i = o.destroy;
                                o.destroy = void 0, void 0 !== i && eu(t, n, i)
                            }
                            o = o.next
                        } while (o !== r)
                    }
                }

                function ru(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function ou(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                    }
                }

                function iu(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, iu(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[po], delete t[ho], delete t[vo], delete t[mo], delete t[yo])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function au(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function lu(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || au(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function uu(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Zr));
                    else if (4 !== r && null !== (e = e.child))
                        for (uu(e, t, n), e = e.sibling; null !== e;) uu(e, t, n), e = e.sibling
                }

                function su(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (su(e, t, n), e = e.sibling; null !== e;) su(e, t, n), e = e.sibling
                }
                var cu = null,
                    fu = !1;

                function du(e, t, n) {
                    for (n = n.child; null !== n;) pu(e, t, n), n = n.sibling
                }

                function pu(e, t, n) {
                    if (it && "function" === typeof it.onCommitFiberUnmount) try {
                        it.onCommitFiberUnmount(ot, n)
                    } catch (l) {}
                    switch (n.tag) {
                        case 5:
                            Jl || Zl(n, t);
                        case 6:
                            var r = cu,
                                o = fu;
                            cu = null, du(e, t, n), fu = o, null !== (cu = r) && (fu ? (e = cu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cu.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== cu && (fu ? (e = cu, n = n.stateNode, 8 === e.nodeType ? uo(e.parentNode, n) : 1 === e.nodeType && uo(e, n), Ut(e)) : uo(cu, n.stateNode));
                            break;
                        case 4:
                            r = cu, o = fu, cu = n.stateNode.containerInfo, fu = !0, du(e, t, n), cu = r, fu = o;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Jl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                o = r = r.next;
                                do {
                                    var i = o,
                                        a = i.destroy;
                                    i = i.tag, void 0 !== a && (0 !== (2 & i) || 0 !== (4 & i)) && eu(n, t, a), o = o.next
                                } while (o !== r)
                            }
                            du(e, t, n);
                            break;
                        case 1:
                            if (!Jl && (Zl(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (l) {
                                Ss(n, t, l)
                            }
                            du(e, t, n);
                            break;
                        case 21:
                            du(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Jl = (r = Jl) || null !== n.memoizedState, du(e, t, n), Jl = r) : du(e, t, n);
                            break;
                        default:
                            du(e, t, n)
                    }
                }

                function hu(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Gl), t.forEach((function(t) {
                            var r = Ts.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function gu(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            try {
                                var a = e,
                                    l = t,
                                    u = l;
                                e: for (; null !== u;) {
                                    switch (u.tag) {
                                        case 5:
                                            cu = u.stateNode, fu = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            cu = u.stateNode.containerInfo, fu = !0;
                                            break e
                                    }
                                    u = u.return
                                }
                                if (null === cu) throw Error(i(160));
                                pu(a, l, o), cu = null, fu = !1;
                                var s = o.alternate;
                                null !== s && (s.return = null), o.return = null
                            } catch (c) {
                                Ss(o, t, c)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) vu(t, e), t = t.sibling
                }

                function vu(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (gu(t, e), mu(e), 4 & r) {
                                try {
                                    nu(3, e, e.return), ru(3, e)
                                } catch (v) {
                                    Ss(e, e.return, v)
                                }
                                try {
                                    nu(5, e, e.return)
                                } catch (v) {
                                    Ss(e, e.return, v)
                                }
                            }
                            break;
                        case 1:
                            gu(t, e), mu(e), 512 & r && null !== n && Zl(n, n.return);
                            break;
                        case 5:
                            if (gu(t, e), mu(e), 512 & r && null !== n && Zl(n, n.return), 32 & e.flags) {
                                var o = e.stateNode;
                                try {
                                    de(o, "")
                                } catch (v) {
                                    Ss(e, e.return, v)
                                }
                            }
                            if (4 & r && null != (o = e.stateNode)) {
                                var a = e.memoizedProps,
                                    l = null !== n ? n.memoizedProps : a,
                                    u = e.type,
                                    s = e.updateQueue;
                                if (e.updateQueue = null, null !== s) try {
                                    "input" === u && "radio" === a.type && null != a.name && G(o, a), _e(u, l);
                                    var c = _e(u, a);
                                    for (l = 0; l < s.length; l += 2) {
                                        var f = s[l],
                                            d = s[l + 1];
                                        "style" === f ? ve(o, d) : "dangerouslySetInnerHTML" === f ? fe(o, d) : "children" === f ? de(o, d) : _(o, f, d, c)
                                    }
                                    switch (u) {
                                        case "input":
                                            X(o, a);
                                            break;
                                        case "textarea":
                                            ie(o, a);
                                            break;
                                        case "select":
                                            var p = o._wrapperState.wasMultiple;
                                            o._wrapperState.wasMultiple = !!a.multiple;
                                            var h = a.value;
                                            null != h ? ne(o, !!a.multiple, h, !1) : p !== !!a.multiple && (null != a.defaultValue ? ne(o, !!a.multiple, a.defaultValue, !0) : ne(o, !!a.multiple, a.multiple ? [] : "", !1))
                                    }
                                    o[ho] = a
                                } catch (v) {
                                    Ss(e, e.return, v)
                                }
                            }
                            break;
                        case 6:
                            if (gu(t, e), mu(e), 4 & r) {
                                if (null === e.stateNode) throw Error(i(162));
                                o = e.stateNode, a = e.memoizedProps;
                                try {
                                    o.nodeValue = a
                                } catch (v) {
                                    Ss(e, e.return, v)
                                }
                            }
                            break;
                        case 3:
                            if (gu(t, e), mu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Ut(t.containerInfo)
                            } catch (v) {
                                Ss(e, e.return, v)
                            }
                            break;
                        case 4:
                        default:
                            gu(t, e), mu(e);
                            break;
                        case 13:
                            gu(t, e), mu(e), 8192 & (o = e.child).flags && (a = null !== o.memoizedState, o.stateNode.isHidden = a, !a || null !== o.alternate && null !== o.alternate.memoizedState || (Bu = Ge())), 4 & r && hu(e);
                            break;
                        case 22:
                            if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Jl = (c = Jl) || f, gu(t, e), Jl = c) : gu(t, e), mu(e), 8192 & r) {
                                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                                    for (Xl = e, f = e.child; null !== f;) {
                                        for (d = Xl = f; null !== Xl;) {
                                            switch (h = (p = Xl).child, p.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    nu(4, p, p.return);
                                                    break;
                                                case 1:
                                                    Zl(p, p.return);
                                                    var g = p.stateNode;
                                                    if ("function" === typeof g.componentWillUnmount) {
                                                        r = p, n = p.return;
                                                        try {
                                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
                                                        } catch (v) {
                                                            Ss(r, n, v)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    Zl(p, p.return);
                                                    break;
                                                case 22:
                                                    if (null !== p.memoizedState) {
                                                        xu(d);
                                                        continue
                                                    }
                                            }
                                            null !== h ? (h.return = p, Xl = h) : xu(d)
                                        }
                                        f = f.sibling
                                    }
                                e: for (f = null, d = e;;) {
                                    if (5 === d.tag) {
                                        if (null === f) {
                                            f = d;
                                            try {
                                                o = d.stateNode, c ? "function" === typeof(a = o.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (u = d.stateNode, l = void 0 !== (s = d.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null, u.style.display = ge("display", l))
                                            } catch (v) {
                                                Ss(e, e.return, v)
                                            }
                                        }
                                    } else if (6 === d.tag) {
                                        if (null === f) try {
                                            d.stateNode.nodeValue = c ? "" : d.memoizedProps
                                        } catch (v) {
                                            Ss(e, e.return, v)
                                        }
                                    } else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                                        d.child.return = d, d = d.child;
                                        continue
                                    }
                                    if (d === e) break e;
                                    for (; null === d.sibling;) {
                                        if (null === d.return || d.return === e) break e;
                                        f === d && (f = null), d = d.return
                                    }
                                    f === d && (f = null), d.sibling.return = d.return, d = d.sibling
                                }
                            }
                            break;
                        case 19:
                            gu(t, e), mu(e), 4 & r && hu(e);
                        case 21:
                    }
                }

                function mu(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (au(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(i(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var o = r.stateNode;
                                    32 & r.flags && (de(o, ""), r.flags &= -33), su(e, lu(e), o);
                                    break;
                                case 3:
                                case 4:
                                    var a = r.stateNode.containerInfo;
                                    uu(e, lu(e), a);
                                    break;
                                default:
                                    throw Error(i(161))
                            }
                        }
                        catch (l) {
                            Ss(e, e.return, l)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function yu(e, t, n) {
                    Xl = e, _u(e, t, n)
                }

                function _u(e, t, n) {
                    for (var r = 0 !== (1 & e.mode); null !== Xl;) {
                        var o = Xl,
                            i = o.child;
                        if (22 === o.tag && r) {
                            var a = null !== o.memoizedState || ql;
                            if (!a) {
                                var l = o.alternate,
                                    u = null !== l && null !== l.memoizedState || Jl;
                                l = ql;
                                var s = Jl;
                                if (ql = a, (Jl = u) && !s)
                                    for (Xl = o; null !== Xl;) u = (a = Xl).child, 22 === a.tag && null !== a.memoizedState ? ku(o) : null !== u ? (u.return = a, Xl = u) : ku(o);
                                for (; null !== i;) Xl = i, _u(i, t, n), i = i.sibling;
                                Xl = o, ql = l, Jl = s
                            }
                            bu(e)
                        } else 0 !== (8772 & o.subtreeFlags) && null !== i ? (i.return = o, Xl = i) : bu(e)
                    }
                }

                function bu(e) {
                    for (; null !== Xl;) {
                        var t = Xl;
                        if (0 !== (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Jl || ru(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Jl)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var o = t.elementType === t.type ? n.memoizedProps : mi(t.type, n.memoizedProps);
                                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            } var a = t.updateQueue;
                                        null !== a && ji(t, a, r);
                                        break;
                                    case 3:
                                        var l = t.updateQueue;
                                        if (null !== l) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            ji(t, l, n)
                                        }
                                        break;
                                    case 5:
                                        var u = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = u;
                                            var s = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    s.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    s.src && (n.src = s.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var c = t.alternate;
                                            if (null !== c) {
                                                var f = c.memoizedState;
                                                if (null !== f) {
                                                    var d = f.dehydrated;
                                                    null !== d && Ut(d)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(i(163))
                                }
                                Jl || 512 & t.flags && ou(t)
                            } catch (p) {
                                Ss(t, t.return, p)
                            }
                        }
                        if (t === e) {
                            Xl = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, Xl = n;
                            break
                        }
                        Xl = t.return
                    }
                }

                function xu(e) {
                    for (; null !== Xl;) {
                        var t = Xl;
                        if (t === e) {
                            Xl = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, Xl = n;
                            break
                        }
                        Xl = t.return
                    }
                }

                function ku(e) {
                    for (; null !== Xl;) {
                        var t = Xl;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        ru(4, t)
                                    } catch (u) {
                                        Ss(t, n, u)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" === typeof r.componentDidMount) {
                                        var o = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (u) {
                                            Ss(t, o, u)
                                        }
                                    }
                                    var i = t.return;
                                    try {
                                        ou(t)
                                    } catch (u) {
                                        Ss(t, i, u)
                                    }
                                    break;
                                case 5:
                                    var a = t.return;
                                    try {
                                        ou(t)
                                    } catch (u) {
                                        Ss(t, a, u)
                                    }
                            }
                        } catch (u) {
                            Ss(t, t.return, u)
                        }
                        if (t === e) {
                            Xl = null;
                            break
                        }
                        var l = t.sibling;
                        if (null !== l) {
                            l.return = t.return, Xl = l;
                            break
                        }
                        Xl = t.return
                    }
                }
                var Cu, Su = Math.ceil,
                    Nu = b.ReactCurrentDispatcher,
                    Eu = b.ReactCurrentOwner,
                    wu = b.ReactCurrentBatchConfig,
                    Tu = 0,
                    Ou = null,
                    Mu = null,
                    Pu = 0,
                    Ru = 0,
                    Du = No(0),
                    Au = 0,
                    Lu = null,
                    Iu = 0,
                    $u = 0,
                    Fu = 0,
                    ju = null,
                    zu = null,
                    Bu = 0,
                    Uu = 1 / 0,
                    Wu = null,
                    Ku = !1,
                    Hu = null,
                    Vu = null,
                    Yu = !1,
                    Qu = null,
                    qu = 0,
                    Ju = 0,
                    Gu = null,
                    Xu = -1,
                    Zu = 0;

                function es() {
                    return 0 !== (6 & Tu) ? Ge() : -1 !== Xu ? Xu : Xu = Ge()
                }

                function ts(e) {
                    return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Tu) && 0 !== Pu ? Pu & -Pu : null !== vi.transition ? (0 === Zu && (Zu = gt()), Zu) : 0 !== (e = _t) ? e : e = void 0 === (e = window.event) ? 16 : Jt(e.type)
                }

                function ns(e, t, n, r) {
                    if (50 < Ju) throw Ju = 0, Gu = null, Error(i(185));
                    mt(e, n, r), 0 !== (2 & Tu) && e === Ou || (e === Ou && (0 === (2 & Tu) && ($u |= n), 4 === Au && ls(e, Pu)), rs(e, r), 1 === n && 0 === Tu && 0 === (1 & t.mode) && (Uu = Ge() + 500, zo && Wo()))
                }

                function rs(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                            var a = 31 - at(i),
                                l = 1 << a,
                                u = o[a]; - 1 === u ? 0 !== (l & n) && 0 === (l & r) || (o[a] = pt(l, t)) : u <= t && (e.expiredLanes |= l), i &= ~l
                        }
                    }(e, t);
                    var r = dt(e, e === Ou ? Pu : 0);
                    if (0 === r) null !== n && Qe(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && Qe(n), 1 === t) 0 === e.tag ? function(e) {
                            zo = !0, Uo(e)
                        }(us.bind(null, e)) : Uo(us.bind(null, e)), ao((function() {
                            0 === (6 & Tu) && Wo()
                        })), n = null;
                        else {
                            switch (bt(r)) {
                                case 1:
                                    n = Ze;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = Os(n, os.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function os(e, t) {
                    if (Xu = -1, Zu = 0, 0 !== (6 & Tu)) throw Error(i(327));
                    var n = e.callbackNode;
                    if (ks() && e.callbackNode !== n) return null;
                    var r = dt(e, e === Ou ? Pu : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
                    else {
                        t = r;
                        var o = Tu;
                        Tu |= 2;
                        var a = hs();
                        for (Ou === e && Pu === t || (Wu = null, Uu = Ge() + 500, ds(e, t));;) try {
                            ys();
                            break
                        } catch (u) {
                            ps(e, u)
                        }
                        ki(), Nu.current = a, Tu = o, null !== Mu ? t = 0 : (Ou = null, Pu = 0, t = Au)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (o = ht(e)) && (r = o, t = is(e, o))), 1 === t) throw n = Lu, ds(e, 0), ls(e, r), rs(e, Ge()), n;
                        if (6 === t) ls(e, r);
                        else {
                            if (o = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var o = n[r],
                                                        i = o.getSnapshot;
                                                    o = o.value;
                                                    try {
                                                        if (!lr(i(), o)) return !1
                                                    } catch (l) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(o) && (2 === (t = vs(e, r)) && (0 !== (a = ht(e)) && (r = a, t = is(e, a))), 1 === t)) throw n = Lu, ds(e, 0), ls(e, r), rs(e, Ge()), n;
                            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(i(345));
                                case 2:
                                case 5:
                                    xs(e, zu, Wu);
                                    break;
                                case 3:
                                    if (ls(e, r), (130023424 & r) === r && 10 < (t = Bu + 500 - Ge())) {
                                        if (0 !== dt(e, 0)) break;
                                        if (((o = e.suspendedLanes) & r) !== r) {
                                            es(), e.pingedLanes |= e.suspendedLanes & o;
                                            break
                                        }
                                        e.timeoutHandle = ro(xs.bind(null, e, zu, Wu), t);
                                        break
                                    }
                                    xs(e, zu, Wu);
                                    break;
                                case 4:
                                    if (ls(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, o = -1; 0 < r;) {
                                        var l = 31 - at(r);
                                        a = 1 << l, (l = t[l]) > o && (o = l), r &= ~a
                                    }
                                    if (r = o, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Su(r / 1960)) - r)) {
                                        e.timeoutHandle = ro(xs.bind(null, e, zu, Wu), r);
                                        break
                                    }
                                    xs(e, zu, Wu);
                                    break;
                                default:
                                    throw Error(i(329))
                            }
                        }
                    }
                    return rs(e, Ge()), e.callbackNode === n ? os.bind(null, e) : null
                }

                function is(e, t) {
                    var n = ju;
                    return e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256), 2 !== (e = vs(e, t)) && (t = zu, zu = n, null !== t && as(t)), e
                }

                function as(e) {
                    null === zu ? zu = e : zu.push.apply(zu, e)
                }

                function ls(e, t) {
                    for (t &= ~Fu, t &= ~$u, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - at(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function us(e) {
                    if (0 !== (6 & Tu)) throw Error(i(327));
                    ks();
                    var t = dt(e, 0);
                    if (0 === (1 & t)) return rs(e, Ge()), null;
                    var n = vs(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = ht(e);
                        0 !== r && (t = r, n = is(e, r))
                    }
                    if (1 === n) throw n = Lu, ds(e, 0), ls(e, t), rs(e, Ge()), n;
                    if (6 === n) throw Error(i(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, xs(e, zu, Wu), rs(e, Ge()), null
                }

                function ss(e, t) {
                    var n = Tu;
                    Tu |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Tu = n) && (Uu = Ge() + 500, zo && Wo())
                    }
                }

                function cs(e) {
                    null !== Qu && 0 === Qu.tag && 0 === (6 & Tu) && ks();
                    var t = Tu;
                    Tu |= 1;
                    var n = wu.transition,
                        r = _t;
                    try {
                        if (wu.transition = null, _t = 1, e) return e()
                    } finally {
                        _t = r, wu.transition = n, 0 === (6 & (Tu = t)) && Wo()
                    }
                }

                function fs() {
                    Ru = Du.current, Eo(Du)
                }

                function ds(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, oo(n)), null !== Mu)
                        for (n = Mu.return; null !== n;) {
                            var r = n;
                            switch (ni(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Ao();
                                    break;
                                case 3:
                                    ia(), Eo(Mo), Eo(Oo), fa();
                                    break;
                                case 5:
                                    la(r);
                                    break;
                                case 4:
                                    ia();
                                    break;
                                case 13:
                                case 19:
                                    Eo(ua);
                                    break;
                                case 10:
                                    Ci(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    fs()
                            }
                            n = n.return
                        }
                    if (Ou = e, Mu = e = Ds(e.current, null), Pu = Ru = t, Au = 0, Lu = null, Fu = $u = Iu = 0, zu = ju = null, null !== wi) {
                        for (t = 0; t < wi.length; t++)
                            if (null !== (r = (n = wi[t]).interleaved)) {
                                n.interleaved = null;
                                var o = r.next,
                                    i = n.pending;
                                if (null !== i) {
                                    var a = i.next;
                                    i.next = o, r.next = a
                                }
                                n.pending = r
                            } wi = null
                    }
                    return e
                }

                function ps(e, t) {
                    for (;;) {
                        var n = Mu;
                        try {
                            if (ki(), da.current = al, ya) {
                                for (var r = ga.memoizedState; null !== r;) {
                                    var o = r.queue;
                                    null !== o && (o.pending = null), r = r.next
                                }
                                ya = !1
                            }
                            if (ha = 0, ma = va = ga = null, _a = !1, ba = 0, Eu.current = null, null === n || null === n.return) {
                                Au = 1, Lu = t, Mu = null;
                                break
                            }
                            e: {
                                var a = e,
                                    l = n.return,
                                    u = n,
                                    s = t;
                                if (t = Pu, u.flags |= 32768, null !== s && "object" === typeof s && "function" === typeof s.then) {
                                    var c = s,
                                        f = u,
                                        d = f.tag;
                                    if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                                        var p = f.alternate;
                                        p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null)
                                    }
                                    var h = ml(l);
                                    if (null !== h) {
                                        h.flags &= -257, yl(h, l, u, 0, t), 1 & h.mode && vl(a, c, t), s = c;
                                        var g = (t = h).updateQueue;
                                        if (null === g) {
                                            var v = new Set;
                                            v.add(s), t.updateQueue = v
                                        } else g.add(s);
                                        break e
                                    }
                                    if (0 === (1 & t)) {
                                        vl(a, c, t), gs();
                                        break e
                                    }
                                    s = Error(i(426))
                                } else if (ii && 1 & u.mode) {
                                    var m = ml(l);
                                    if (null !== m) {
                                        0 === (65536 & m.flags) && (m.flags |= 256), yl(m, l, u, 0, t), gi(cl(s, u));
                                        break e
                                    }
                                }
                                a = s = cl(s, u),
                                4 !== Au && (Au = 2),
                                null === ju ? ju = [a] : ju.push(a),
                                a = l;do {
                                    switch (a.tag) {
                                        case 3:
                                            a.flags |= 65536, t &= -t, a.lanes |= t, $i(a, hl(0, s, t));
                                            break e;
                                        case 1:
                                            u = s;
                                            var y = a.type,
                                                _ = a.stateNode;
                                            if (0 === (128 & a.flags) && ("function" === typeof y.getDerivedStateFromError || null !== _ && "function" === typeof _.componentDidCatch && (null === Vu || !Vu.has(_)))) {
                                                a.flags |= 65536, t &= -t, a.lanes |= t, $i(a, gl(a, u, t));
                                                break e
                                            }
                                    }
                                    a = a.return
                                } while (null !== a)
                            }
                            bs(n)
                        } catch (b) {
                            t = b, Mu === n && null !== n && (Mu = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function hs() {
                    var e = Nu.current;
                    return Nu.current = al, null === e ? al : e
                }

                function gs() {
                    0 !== Au && 3 !== Au && 2 !== Au || (Au = 4), null === Ou || 0 === (268435455 & Iu) && 0 === (268435455 & $u) || ls(Ou, Pu)
                }

                function vs(e, t) {
                    var n = Tu;
                    Tu |= 2;
                    var r = hs();
                    for (Ou === e && Pu === t || (Wu = null, ds(e, t));;) try {
                        ms();
                        break
                    } catch (o) {
                        ps(e, o)
                    }
                    if (ki(), Tu = n, Nu.current = r, null !== Mu) throw Error(i(261));
                    return Ou = null, Pu = 0, Au
                }

                function ms() {
                    for (; null !== Mu;) _s(Mu)
                }

                function ys() {
                    for (; null !== Mu && !qe();) _s(Mu)
                }

                function _s(e) {
                    var t = Cu(e.alternate, e, Ru);
                    e.memoizedProps = e.pendingProps, null === t ? bs(e) : Mu = t, Eu.current = null
                }

                function bs(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (32768 & t.flags)) {
                            if (null !== (n = Yl(n, t, Ru))) return void(Mu = n)
                        } else {
                            if (null !== (n = Ql(n, t))) return n.flags &= 32767, void(Mu = n);
                            if (null === e) return Au = 6, void(Mu = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (t = t.sibling)) return void(Mu = t);
                        Mu = t = e
                    } while (null !== t);
                    0 === Au && (Au = 5)
                }

                function xs(e, t, n) {
                    var r = _t,
                        o = wu.transition;
                    try {
                        wu.transition = null, _t = 1,
                            function(e, t, n, r) {
                                do {
                                    ks()
                                } while (null !== Qu);
                                if (0 !== (6 & Tu)) throw Error(i(327));
                                n = e.finishedWork;
                                var o = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var a = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var o = 31 - at(n),
                                                i = 1 << o;
                                            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
                                        }
                                    }(e, a), e === Ou && (Mu = Ou = null, Pu = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Yu || (Yu = !0, Os(tt, (function() {
                                        return ks(), null
                                    }))), a = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || a) {
                                    a = wu.transition, wu.transition = null;
                                    var l = _t;
                                    _t = 1;
                                    var u = Tu;
                                    Tu |= 4, Eu.current = null,
                                        function(e, t) {
                                            if (eo = Kt, pr(e = dr())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var o = r.anchorOffset,
                                                            a = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, a.nodeType
                                                        } catch (x) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var l = 0,
                                                            u = -1,
                                                            s = -1,
                                                            c = 0,
                                                            f = 0,
                                                            d = e,
                                                            p = null;
                                                        t: for (;;) {
                                                            for (var h; d !== n || 0 !== o && 3 !== d.nodeType || (u = l + o), d !== a || 0 !== r && 3 !== d.nodeType || (s = l + r), 3 === d.nodeType && (l += d.nodeValue.length), null !== (h = d.firstChild);) p = d, d = h;
                                                            for (;;) {
                                                                if (d === e) break t;
                                                                if (p === n && ++c === o && (u = l), p === a && ++f === r && (s = l), null !== (h = d.nextSibling)) break;
                                                                p = (d = p).parentNode
                                                            }
                                                            d = h
                                                        }
                                                        n = -1 === u || -1 === s ? null : {
                                                            start: u,
                                                            end: s
                                                        }
                                                    } else n = null
                                                }
                                                n = n || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else n = null;
                                            for (to = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, Kt = !1, Xl = t; null !== Xl;)
                                                if (e = (t = Xl).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Xl = e;
                                                else
                                                    for (; null !== Xl;) {
                                                        t = Xl;
                                                        try {
                                                            var g = t.alternate;
                                                            if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== g) {
                                                                        var v = g.memoizedProps,
                                                                            m = g.memoizedState,
                                                                            y = t.stateNode,
                                                                            _ = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : mi(t.type, v), m);
                                                                        y.__reactInternalSnapshotBeforeUpdate = _
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var b = t.stateNode.containerInfo;
                                                                    1 === b.nodeType ? b.textContent = "" : 9 === b.nodeType && b.documentElement && b.removeChild(b.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(i(163))
                                                            }
                                                        } catch (x) {
                                                            Ss(t, t.return, x)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, Xl = e;
                                                            break
                                                        }
                                                        Xl = t.return
                                                    }
                                            g = tu, tu = !1
                                        }(e, n), vu(n, e), hr(to), Kt = !!eo, to = eo = null, e.current = n, yu(n, e, o), Je(), Tu = u, _t = l, wu.transition = a
                                } else e.current = n;
                                if (Yu && (Yu = !1, Qu = e, qu = o), 0 === (a = e.pendingLanes) && (Vu = null), function(e) {
                                        if (it && "function" === typeof it.onCommitFiberRoot) try {
                                            it.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags))
                                        } catch (t) {}
                                    }(n.stateNode), rs(e, Ge()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((o = t[n]).value, {
                                        componentStack: o.stack,
                                        digest: o.digest
                                    });
                                if (Ku) throw Ku = !1, e = Hu, Hu = null, e;
                                0 !== (1 & qu) && 0 !== e.tag && ks(), 0 !== (1 & (a = e.pendingLanes)) ? e === Gu ? Ju++ : (Ju = 0, Gu = e) : Ju = 0, Wo()
                            }(e, t, n, r)
                    } finally {
                        wu.transition = o, _t = r
                    }
                    return null
                }

                function ks() {
                    if (null !== Qu) {
                        var e = bt(qu),
                            t = wu.transition,
                            n = _t;
                        try {
                            if (wu.transition = null, _t = 16 > e ? 16 : e, null === Qu) var r = !1;
                            else {
                                if (e = Qu, Qu = null, qu = 0, 0 !== (6 & Tu)) throw Error(i(331));
                                var o = Tu;
                                for (Tu |= 4, Xl = e.current; null !== Xl;) {
                                    var a = Xl,
                                        l = a.child;
                                    if (0 !== (16 & Xl.flags)) {
                                        var u = a.deletions;
                                        if (null !== u) {
                                            for (var s = 0; s < u.length; s++) {
                                                var c = u[s];
                                                for (Xl = c; null !== Xl;) {
                                                    var f = Xl;
                                                    switch (f.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            nu(8, f, a)
                                                    }
                                                    var d = f.child;
                                                    if (null !== d) d.return = f, Xl = d;
                                                    else
                                                        for (; null !== Xl;) {
                                                            var p = (f = Xl).sibling,
                                                                h = f.return;
                                                            if (iu(f), f === c) {
                                                                Xl = null;
                                                                break
                                                            }
                                                            if (null !== p) {
                                                                p.return = h, Xl = p;
                                                                break
                                                            }
                                                            Xl = h
                                                        }
                                                }
                                            }
                                            var g = a.alternate;
                                            if (null !== g) {
                                                var v = g.child;
                                                if (null !== v) {
                                                    g.child = null;
                                                    do {
                                                        var m = v.sibling;
                                                        v.sibling = null, v = m
                                                    } while (null !== v)
                                                }
                                            }
                                            Xl = a
                                        }
                                    }
                                    if (0 !== (2064 & a.subtreeFlags) && null !== l) l.return = a, Xl = l;
                                    else e: for (; null !== Xl;) {
                                        if (0 !== (2048 & (a = Xl).flags)) switch (a.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                nu(9, a, a.return)
                                        }
                                        var y = a.sibling;
                                        if (null !== y) {
                                            y.return = a.return, Xl = y;
                                            break e
                                        }
                                        Xl = a.return
                                    }
                                }
                                var _ = e.current;
                                for (Xl = _; null !== Xl;) {
                                    var b = (l = Xl).child;
                                    if (0 !== (2064 & l.subtreeFlags) && null !== b) b.return = l, Xl = b;
                                    else e: for (l = _; null !== Xl;) {
                                        if (0 !== (2048 & (u = Xl).flags)) try {
                                            switch (u.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ru(9, u)
                                            }
                                        } catch (k) {
                                            Ss(u, u.return, k)
                                        }
                                        if (u === l) {
                                            Xl = null;
                                            break e
                                        }
                                        var x = u.sibling;
                                        if (null !== x) {
                                            x.return = u.return, Xl = x;
                                            break e
                                        }
                                        Xl = u.return
                                    }
                                }
                                if (Tu = o, Wo(), it && "function" === typeof it.onPostCommitFiberRoot) try {
                                    it.onPostCommitFiberRoot(ot, e)
                                } catch (k) {}
                                r = !0
                            }
                            return r
                        } finally {
                            _t = n, wu.transition = t
                        }
                    }
                    return !1
                }

                function Cs(e, t, n) {
                    e = Li(e, t = hl(0, t = cl(n, t), 1), 1), t = es(), null !== e && (mt(e, 1, t), rs(e, t))
                }

                function Ss(e, t, n) {
                    if (3 === e.tag) Cs(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Cs(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Vu || !Vu.has(r))) {
                                    t = Li(t, e = gl(t, e = cl(n, e), 1), 1), e = es(), null !== t && (mt(t, 1, e), rs(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Ns(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = es(), e.pingedLanes |= e.suspendedLanes & n, Ou === e && (Pu & n) === n && (4 === Au || 3 === Au && (130023424 & Pu) === Pu && 500 > Ge() - Bu ? ds(e, 0) : Fu |= n), rs(e, t)
                }

                function Es(e, t) {
                    0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                    var n = es();
                    null !== (e = Mi(e, t)) && (mt(e, t, n), rs(e, n))
                }

                function ws(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Es(e, n)
                }

                function Ts(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                o = e.memoizedState;
                            null !== o && (n = o.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(i(314))
                    }
                    null !== r && r.delete(t), Es(e, n)
                }

                function Os(e, t) {
                    return Ye(e, t)
                }

                function Ms(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Ps(e, t, n, r) {
                    return new Ms(e, t, n, r)
                }

                function Rs(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Ds(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Ps(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function As(e, t, n, r, o, a) {
                    var l = 2;
                    if (r = e, "function" === typeof e) Rs(e) && (l = 1);
                    else if ("string" === typeof e) l = 5;
                    else e: switch (e) {
                        case C:
                            return Ls(n.children, o, a, t);
                        case S:
                            l = 8, o |= 8;
                            break;
                        case N:
                            return (e = Ps(12, n, t, 2 | o)).elementType = N, e.lanes = a, e;
                        case O:
                            return (e = Ps(13, n, t, o)).elementType = O, e.lanes = a, e;
                        case M:
                            return (e = Ps(19, n, t, o)).elementType = M, e.lanes = a, e;
                        case D:
                            return Is(n, o, a, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case E:
                                    l = 10;
                                    break e;
                                case w:
                                    l = 9;
                                    break e;
                                case T:
                                    l = 11;
                                    break e;
                                case P:
                                    l = 14;
                                    break e;
                                case R:
                                    l = 16, r = null;
                                    break e
                            }
                            throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Ps(l, n, t, o)).elementType = e, t.type = r, t.lanes = a, t
                }

                function Ls(e, t, n, r) {
                    return (e = Ps(7, e, r, t)).lanes = n, e
                }

                function Is(e, t, n, r) {
                    return (e = Ps(22, e, r, t)).elementType = D, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function $s(e, t, n) {
                    return (e = Ps(6, e, null, t)).lanes = n, e
                }

                function Fs(e, t, n) {
                    return (t = Ps(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function js(e, t, n, r, o) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
                }

                function zs(e, t, n, r, o, i, a, l, u) {
                    return e = new js(e, t, n, l, u), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = Ps(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, Ri(i), e
                }

                function Bs(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: k,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }

                function Us(e) {
                    if (!e) return To;
                    e: {
                        if (Ue(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(i(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Do(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(i(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (Do(n)) return Io(e, n, t)
                    }
                    return t
                }

                function Ws(e, t, n, r, o, i, a, l, u) {
                    return (e = zs(n, r, !0, e, 0, i, 0, l, u)).context = Us(null), n = e.current, (i = Ai(r = es(), o = ts(n))).callback = void 0 !== t && null !== t ? t : null, Li(n, i, o), e.current.lanes = o, mt(e, o, r), rs(e, r), e
                }

                function Ks(e, t, n, r) {
                    var o = t.current,
                        i = es(),
                        a = ts(o);
                    return n = Us(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ai(i, a)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Li(o, t, a)) && (ns(e, o, a, i), Ii(e, o, a)), a
                }

                function Hs(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Vs(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function Ys(e, t) {
                    Vs(e, t), (e = e.alternate) && Vs(e, t)
                }
                Cu = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Mo.current) bl = !0;
                        else {
                            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return bl = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Ml(t), hi();
                                            break;
                                        case 5:
                                            aa(t);
                                            break;
                                        case 1:
                                            Do(t.type) && $o(t);
                                            break;
                                        case 4:
                                            oa(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                o = t.memoizedProps.value;
                                            wo(yi, r._currentValue), r._currentValue = o;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (wo(ua, 1 & ua.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? $l(e, t, n) : (wo(ua, 1 & ua.current), null !== (e = Kl(e, t, n)) ? e.sibling : null);
                                            wo(ua, 1 & ua.current);
                                            break;
                                        case 19:
                                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                                if (r) return Ul(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), wo(ua, ua.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, Nl(e, t, n)
                                    }
                                    return Kl(e, t, n)
                                }(e, t, n);
                            bl = 0 !== (131072 & e.flags)
                        }
                    else bl = !1, ii && 0 !== (1048576 & t.flags) && ei(t, Yo, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Wl(e, t), e = t.pendingProps;
                            var o = Ro(t, Oo.current);
                            Ni(t, n), o = Sa(null, t, r, e, o, n);
                            var a = Na();
                            return t.flags |= 1, "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Do(r) ? (a = !0, $o(t)) : a = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, Ri(t), o.updater = Ui, t.stateNode = o, o._reactInternals = t, Vi(t, r, e, n), t = Ol(null, t, r, !0, a, n)) : (t.tag = 0, ii && a && ti(t), xl(null, t, o, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Wl(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function(e) {
                                        if ("function" === typeof e) return Rs(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === T) return 11;
                                            if (e === P) return 14
                                        }
                                        return 2
                                    }(r), e = mi(r, e), o) {
                                    case 0:
                                        t = wl(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = Tl(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = kl(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = Cl(null, t, r, mi(r.type, e), n);
                                        break e
                                }
                                throw Error(i(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, o = t.pendingProps, wl(e, t, r, o = t.elementType === r ? o : mi(r, o), n);
                        case 1:
                            return r = t.type, o = t.pendingProps, Tl(e, t, r, o = t.elementType === r ? o : mi(r, o), n);
                        case 3:
                            e: {
                                if (Ml(t), null === e) throw Error(i(387));r = t.pendingProps,
                                o = (a = t.memoizedState).element,
                                Di(e, t),
                                Fi(t, r, null, n);
                                var l = t.memoizedState;
                                if (r = l.element, a.isDehydrated) {
                                    if (a = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: l.cache,
                                            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                            transitions: l.transitions
                                        }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                                        t = Pl(e, t, r, n, o = cl(Error(i(423)), t));
                                        break e
                                    }
                                    if (r !== o) {
                                        t = Pl(e, t, r, n, o = cl(Error(i(424)), t));
                                        break e
                                    }
                                    for (oi = so(t.stateNode.containerInfo.firstChild), ri = t, ii = !0, ai = null, n = Xi(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (hi(), r === o) {
                                        t = Kl(e, t, n);
                                        break e
                                    }
                                    xl(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return aa(t), null === e && ci(t), r = t.type, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, l = o.children, no(r, o) ? l = null : null !== a && no(r, a) && (t.flags |= 32), El(e, t), xl(e, t, l, n), t.child;
                        case 6:
                            return null === e && ci(t), null;
                        case 13:
                            return $l(e, t, n);
                        case 4:
                            return oa(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Gi(t, null, r, n) : xl(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, o = t.pendingProps, kl(e, t, r, o = t.elementType === r ? o : mi(r, o), n);
                        case 7:
                            return xl(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return xl(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, o = t.pendingProps, a = t.memoizedProps, l = o.value, wo(yi, r._currentValue), r._currentValue = l, null !== a)
                                    if (lr(a.value, l)) {
                                        if (a.children === o.children && !Mo.current) {
                                            t = Kl(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (a = t.child) && (a.return = t); null !== a;) {
                                            var u = a.dependencies;
                                            if (null !== u) {
                                                l = a.child;
                                                for (var s = u.firstContext; null !== s;) {
                                                    if (s.context === r) {
                                                        if (1 === a.tag) {
                                                            (s = Ai(-1, n & -n)).tag = 2;
                                                            var c = a.updateQueue;
                                                            if (null !== c) {
                                                                var f = (c = c.shared).pending;
                                                                null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s
                                                            }
                                                        }
                                                        a.lanes |= n, null !== (s = a.alternate) && (s.lanes |= n), Si(a.return, n, t), u.lanes |= n;
                                                        break
                                                    }
                                                    s = s.next
                                                }
                                            } else if (10 === a.tag) l = a.type === t.type ? null : a.child;
                                            else if (18 === a.tag) {
                                                if (null === (l = a.return)) throw Error(i(341));
                                                l.lanes |= n, null !== (u = l.alternate) && (u.lanes |= n), Si(l, n, t), l = a.sibling
                                            } else l = a.child;
                                            if (null !== l) l.return = a;
                                            else
                                                for (l = a; null !== l;) {
                                                    if (l === t) {
                                                        l = null;
                                                        break
                                                    }
                                                    if (null !== (a = l.sibling)) {
                                                        a.return = l.return, l = a;
                                                        break
                                                    }
                                                    l = l.return
                                                }
                                            a = l
                                        }
                                xl(e, t, o.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return o = t.type, r = t.pendingProps.children, Ni(t, n), r = r(o = Ei(o)), t.flags |= 1, xl(e, t, r, n), t.child;
                        case 14:
                            return o = mi(r = t.type, t.pendingProps), Cl(e, t, r, o = mi(r.type, o), n);
                        case 15:
                            return Sl(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mi(r, o), Wl(e, t), t.tag = 1, Do(r) ? (e = !0, $o(t)) : e = !1, Ni(t, n), Ki(t, r, o), Vi(t, r, o, n), Ol(null, t, r, !0, e, n);
                        case 19:
                            return Ul(e, t, n);
                        case 22:
                            return Nl(e, t, n)
                    }
                    throw Error(i(156, t.tag))
                };
                var Qs = "function" === typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function qs(e) {
                    this._internalRoot = e
                }

                function Js(e) {
                    this._internalRoot = e
                }

                function Gs(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Xs(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Zs() {}

                function ec(e, t, n, r, o) {
                    var i = n._reactRootContainer;
                    if (i) {
                        var a = i;
                        if ("function" === typeof o) {
                            var l = o;
                            o = function() {
                                var e = Hs(a);
                                l.call(e)
                            }
                        }
                        Ks(t, a, e, o)
                    } else a = function(e, t, n, r, o) {
                        if (o) {
                            if ("function" === typeof r) {
                                var i = r;
                                r = function() {
                                    var e = Hs(a);
                                    i.call(e)
                                }
                            }
                            var a = Ws(t, r, e, 0, null, !1, 0, "", Zs);
                            return e._reactRootContainer = a, e[go] = a.current, Ur(8 === e.nodeType ? e.parentNode : e), cs(), a
                        }
                        for (; o = e.lastChild;) e.removeChild(o);
                        if ("function" === typeof r) {
                            var l = r;
                            r = function() {
                                var e = Hs(u);
                                l.call(e)
                            }
                        }
                        var u = zs(e, 0, !1, null, 0, !1, 0, "", Zs);
                        return e._reactRootContainer = u, e[go] = u.current, Ur(8 === e.nodeType ? e.parentNode : e), cs((function() {
                            Ks(t, u, n, r)
                        })), u
                    }(n, t, e, o, r);
                    return Hs(a)
                }
                Js.prototype.render = qs.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(i(409));
                    Ks(e, t, null, null)
                }, Js.prototype.unmount = qs.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        cs((function() {
                            Ks(null, e, null, null)
                        })), t[go] = null
                    }
                }, Js.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = St();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Dt.length && 0 !== t && t < Dt[n].priority; n++);
                        Dt.splice(n, 0, e), 0 === n && $t(e)
                    }
                }, xt = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = ft(t.pendingLanes);
                                0 !== n && (yt(t, 1 | n), rs(t, Ge()), 0 === (6 & Tu) && (Uu = Ge() + 500, Wo()))
                            }
                            break;
                        case 13:
                            cs((function() {
                                var t = Mi(e, 1);
                                if (null !== t) {
                                    var n = es();
                                    ns(t, e, 1, n)
                                }
                            })), Ys(e, 1)
                    }
                }, kt = function(e) {
                    if (13 === e.tag) {
                        var t = Mi(e, 134217728);
                        if (null !== t) ns(t, e, 134217728, es());
                        Ys(e, 134217728)
                    }
                }, Ct = function(e) {
                    if (13 === e.tag) {
                        var t = ts(e),
                            n = Mi(e, t);
                        if (null !== n) ns(n, e, t, es());
                        Ys(e, t)
                    }
                }, St = function() {
                    return _t
                }, Nt = function(e, t) {
                    var n = _t;
                    try {
                        return _t = e, t()
                    } finally {
                        _t = n
                    }
                }, ke = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (X(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var o = ko(r);
                                        if (!o) throw Error(i(90));
                                        Y(r), X(r, o)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ie(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Te = ss, Oe = cs;
                var tc = {
                        usingClientEntryPoint: !1,
                        Events: [bo, xo, ko, Ee, we, ss]
                    },
                    nc = {
                        findFiberByHostInstance: _o,
                        bundleType: 0,
                        version: "18.2.0",
                        rendererPackageName: "react-dom"
                    },
                    rc = {
                        bundleType: nc.bundleType,
                        version: nc.version,
                        rendererPackageName: nc.rendererPackageName,
                        rendererConfig: nc.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: b.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = He(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: nc.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!oc.isDisabled && oc.supportsFiber) try {
                        ot = oc.inject(rc), it = oc
                    } catch (ce) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Gs(t)) throw Error(i(200));
                    return Bs(e, t, null, n)
                }, t.createRoot = function(e, t) {
                    if (!Gs(e)) throw Error(i(299));
                    var n = !1,
                        r = "",
                        o = Qs;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = zs(e, 1, !1, null, 0, n, 0, r, o), e[go] = t.current, Ur(8 === e.nodeType ? e.parentNode : e), new qs(t)
                }, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(i(188));
                        throw e = Object.keys(e).join(","), Error(i(268, e))
                    }
                    return e = null === (e = He(t)) ? null : e.stateNode
                }, t.flushSync = function(e) {
                    return cs(e)
                }, t.hydrate = function(e, t, n) {
                    if (!Xs(t)) throw Error(i(200));
                    return ec(null, e, t, !0, n)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!Gs(e)) throw Error(i(405));
                    var r = null != n && n.hydratedSources || null,
                        o = !1,
                        a = "",
                        l = Qs;
                    if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Ws(t, null, e, 1, null != n ? n : null, o, 0, a, l), e[go] = t.current, Ur(e), r)
                        for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
                    return new Js(t)
                }, t.render = function(e, t, n) {
                    if (!Xs(t)) throw Error(i(200));
                    return ec(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!Xs(e)) throw Error(i(40));
                    return !!e._reactRootContainer && (cs((function() {
                        ec(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[go] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = ss, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!Xs(n)) throw Error(i(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                    return ec(e, t, n, !1, r)
                }, t.version = "18.2.0-next-9e3b772b8-20220608"
            },
            1250: function(e, t, n) {
                "use strict";
                var r = n(4164);
                t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
            },
            4164: function(e, t, n) {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(4463)
            },
            6374: function(e, t, n) {
                "use strict";
                var r = n(2791),
                    o = Symbol.for("react.element"),
                    i = Symbol.for("react.fragment"),
                    a = Object.prototype.hasOwnProperty,
                    l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    u = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function s(e, t, n) {
                    var r, i = {},
                        s = null,
                        c = null;
                    for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
                    return {
                        $$typeof: o,
                        type: e,
                        key: s,
                        ref: c,
                        props: i,
                        _owner: l.current
                    }
                }
                t.Fragment = i, t.jsx = s, t.jsxs = s
            },
            9117: function(e, t) {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    o = Symbol.for("react.fragment"),
                    i = Symbol.for("react.strict_mode"),
                    a = Symbol.for("react.profiler"),
                    l = Symbol.for("react.provider"),
                    u = Symbol.for("react.context"),
                    s = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    f = Symbol.for("react.memo"),
                    d = Symbol.for("react.lazy"),
                    p = Symbol.iterator;
                var h = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    g = Object.assign,
                    v = {};

                function m(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || h
                }

                function y() {}

                function _(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || h
                }
                m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, m.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, y.prototype = m.prototype;
                var b = _.prototype = new y;
                b.constructor = _, g(b, m.prototype), b.isPureReactComponent = !0;
                var x = Array.isArray,
                    k = Object.prototype.hasOwnProperty,
                    C = {
                        current: null
                    },
                    S = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function N(e, t, r) {
                    var o, i = {},
                        a = null,
                        l = null;
                    if (null != t)
                        for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t) k.call(t, o) && !S.hasOwnProperty(o) && (i[o] = t[o]);
                    var u = arguments.length - 2;
                    if (1 === u) i.children = r;
                    else if (1 < u) {
                        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
                        i.children = s
                    }
                    if (e && e.defaultProps)
                        for (o in u = e.defaultProps) void 0 === i[o] && (i[o] = u[o]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: a,
                        ref: l,
                        props: i,
                        _owner: C.current
                    }
                }

                function E(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }
                var w = /\/+/g;

                function T(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function O(e, t, o, i, a) {
                    var l = typeof e;
                    "undefined" !== l && "boolean" !== l || (e = null);
                    var u = !1;
                    if (null === e) u = !0;
                    else switch (l) {
                        case "string":
                        case "number":
                            u = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    u = !0
                            }
                    }
                    if (u) return a = a(u = e), e = "" === i ? "." + T(u, 0) : i, x(a) ? (o = "", null != e && (o = e.replace(w, "$&/") + "/"), O(a, t, o, "", (function(e) {
                        return e
                    }))) : null != a && (E(a) && (a = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(a, o + (!a.key || u && u.key === a.key ? "" : ("" + a.key).replace(w, "$&/") + "/") + e)), t.push(a)), 1;
                    if (u = 0, i = "" === i ? "." : i + ":", x(e))
                        for (var s = 0; s < e.length; s++) {
                            var c = i + T(l = e[s], s);
                            u += O(l, t, o, c, a)
                        } else if (c = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof c)
                            for (e = c.call(e), s = 0; !(l = e.next()).done;) u += O(l = l.value, t, o, c = i + T(l, s++), a);
                        else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return u
                }

                function M(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        o = 0;
                    return O(e, r, "", "", (function(e) {
                        return t.call(n, e, o++)
                    })), r
                }

                function P(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var R = {
                        current: null
                    },
                    D = {
                        transition: null
                    },
                    A = {
                        ReactCurrentDispatcher: R,
                        ReactCurrentBatchConfig: D,
                        ReactCurrentOwner: C
                    };
                t.Children = {
                    map: M,
                    forEach: function(e, t, n) {
                        M(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return M(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return M(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!E(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = m, t.Fragment = o, t.Profiler = a, t.PureComponent = _, t.StrictMode = i, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A, t.cloneElement = function(e, t, r) {
                    if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var o = g({}, e.props),
                        i = e.key,
                        a = e.ref,
                        l = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (a = t.ref, l = C.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                        for (s in t) k.call(t, s) && !S.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
                    }
                    var s = arguments.length - 2;
                    if (1 === s) o.children = r;
                    else if (1 < s) {
                        u = Array(s);
                        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
                        o.children = u
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: i,
                        ref: a,
                        props: o,
                        _owner: l
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: u,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: l,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = N, t.createFactory = function(e) {
                    var t = N.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: s,
                        render: e
                    }
                }, t.isValidElement = E, t.lazy = function(e) {
                    return {
                        $$typeof: d,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: P
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: f,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = D.transition;
                    D.transition = {};
                    try {
                        e()
                    } finally {
                        D.transition = t
                    }
                }, t.unstable_act = function() {
                    throw Error("act(...) is not supported in production builds of React.")
                }, t.useCallback = function(e, t) {
                    return R.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return R.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return R.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return R.current.useEffect(e, t)
                }, t.useId = function() {
                    return R.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return R.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return R.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return R.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return R.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return R.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return R.current.useRef(e)
                }, t.useState = function(e) {
                    return R.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return R.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return R.current.useTransition()
                }, t.version = "18.2.0"
            },
            2791: function(e, t, n) {
                "use strict";
                e.exports = n(9117)
            },
            184: function(e, t, n) {
                "use strict";
                e.exports = n(6374)
            },
            6813: function(e, t) {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            o = e[r];
                        if (!(0 < i(o, t))) break e;
                        e[r] = t, e[n] = o, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function o(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, o = e.length, a = o >>> 1; r < a;) {
                            var l = 2 * (r + 1) - 1,
                                u = e[l],
                                s = l + 1,
                                c = e[s];
                            if (0 > i(u, n)) s < o && 0 > i(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[l] = n, r = l);
                            else {
                                if (!(s < o && 0 > i(c, n))) break e;
                                e[r] = c, e[s] = n, r = s
                            }
                        }
                    }
                    return t
                }

                function i(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var a = performance;
                    t.unstable_now = function() {
                        return a.now()
                    }
                } else {
                    var l = Date,
                        u = l.now();
                    t.unstable_now = function() {
                        return l.now() - u
                    }
                }
                var s = [],
                    c = [],
                    f = 1,
                    d = null,
                    p = 3,
                    h = !1,
                    g = !1,
                    v = !1,
                    m = "function" === typeof setTimeout ? setTimeout : null,
                    y = "function" === typeof clearTimeout ? clearTimeout : null,
                    _ = "undefined" !== typeof setImmediate ? setImmediate : null;

                function b(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) o(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            o(c), t.sortIndex = t.expirationTime, n(s, t)
                        }
                        t = r(c)
                    }
                }

                function x(e) {
                    if (v = !1, b(e), !g)
                        if (null !== r(s)) g = !0, D(k);
                        else {
                            var t = r(c);
                            null !== t && A(x, t.startTime - e)
                        }
                }

                function k(e, n) {
                    g = !1, v && (v = !1, y(E), E = -1), h = !0;
                    var i = p;
                    try {
                        for (b(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !O());) {
                            var a = d.callback;
                            if ("function" === typeof a) {
                                d.callback = null, p = d.priorityLevel;
                                var l = a(d.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof l ? d.callback = l : d === r(s) && o(s), b(n)
                            } else o(s);
                            d = r(s)
                        }
                        if (null !== d) var u = !0;
                        else {
                            var f = r(c);
                            null !== f && A(x, f.startTime - n), u = !1
                        }
                        return u
                    } finally {
                        d = null, p = i, h = !1
                    }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var C, S = !1,
                    N = null,
                    E = -1,
                    w = 5,
                    T = -1;

                function O() {
                    return !(t.unstable_now() - T < w)
                }

                function M() {
                    if (null !== N) {
                        var e = t.unstable_now();
                        T = e;
                        var n = !0;
                        try {
                            n = N(!0, e)
                        } finally {
                            n ? C() : (S = !1, N = null)
                        }
                    } else S = !1
                }
                if ("function" === typeof _) C = function() {
                    _(M)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var P = new MessageChannel,
                        R = P.port2;
                    P.port1.onmessage = M, C = function() {
                        R.postMessage(null)
                    }
                } else C = function() {
                    m(M, 0)
                };

                function D(e) {
                    N = e, S || (S = !0, C())
                }

                function A(e, n) {
                    E = m((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    g || h || (g = !0, D(k))
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return p
                }, t.unstable_getFirstCallbackNode = function() {
                    return r(s)
                }, t.unstable_next = function(e) {
                    switch (p) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = p
                    }
                    var n = p;
                    p = t;
                    try {
                        return e()
                    } finally {
                        p = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = p;
                    p = e;
                    try {
                        return t()
                    } finally {
                        p = n
                    }
                }, t.unstable_scheduleCallback = function(e, o, i) {
                    var a = t.unstable_now();
                    switch ("object" === typeof i && null !== i ? i = "number" === typeof(i = i.delay) && 0 < i ? a + i : a : i = a, e) {
                        case 1:
                            var l = -1;
                            break;
                        case 2:
                            l = 250;
                            break;
                        case 5:
                            l = 1073741823;
                            break;
                        case 4:
                            l = 1e4;
                            break;
                        default:
                            l = 5e3
                    }
                    return e = {
                        id: f++,
                        callback: o,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: l = i + l,
                        sortIndex: -1
                    }, i > a ? (e.sortIndex = i, n(c, e), null === r(s) && e === r(c) && (v ? (y(E), E = -1) : v = !0, A(x, i - a))) : (e.sortIndex = l, n(s, e), g || h || (g = !0, D(k))), e
                }, t.unstable_shouldYield = O, t.unstable_wrapCallback = function(e) {
                    var t = p;
                    return function() {
                        var n = p;
                        p = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            p = n
                        }
                    }
                }
            },
            5296: function(e, t, n) {
                "use strict";
                e.exports = n(6813)
            },
            3897: function(e) {
                e.exports = function(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            5372: function(e) {
                e.exports = function(e) {
                    if (Array.isArray(e)) return e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            3405: function(e, t, n) {
                var r = n(3897);
                e.exports = function(e) {
                    if (Array.isArray(e)) return r(e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6115: function(e) {
                e.exports = function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6690: function(e) {
                e.exports = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            9728: function(e) {
                function t(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                e.exports = function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            4704: function(e, t, n) {
                var r = n(6116);
                e.exports = function(e, t) {
                    var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = r(e)) || t && e && "number" === typeof e.length) {
                            n && (e = n);
                            var o = 0,
                                i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return o >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[o++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var a, l = !0,
                        u = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return l = e.done, e
                        },
                        e: function(e) {
                            u = !0, a = e
                        },
                        f: function() {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw a
                            }
                        }
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6389: function(e, t, n) {
                var r = n(3808),
                    o = n(9617),
                    i = n(4993);
                e.exports = function(e) {
                    var t = o();
                    return function() {
                        var n, o = r(e);
                        if (t) {
                            var a = r(this).constructor;
                            n = Reflect.construct(o, arguments, a)
                        } else n = o.apply(this, arguments);
                        return i(this, n)
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            8416: function(e) {
                e.exports = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            1588: function(e, t, n) {
                var r = n(1753);

                function o() {
                    return "undefined" !== typeof Reflect && Reflect.get ? (e.exports = o = Reflect.get.bind(), e.exports.__esModule = !0, e.exports.default = e.exports) : (e.exports = o = function(e, t, n) {
                        var o = r(e, t);
                        if (o) {
                            var i = Object.getOwnPropertyDescriptor(o, t);
                            return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
                        }
                    }, e.exports.__esModule = !0, e.exports.default = e.exports), o.apply(this, arguments)
                }
                e.exports = o, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            3808: function(e) {
                function t(n) {
                    return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            1655: function(e, t, n) {
                var r = n(6015);
                e.exports = function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && r(e, t)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            9617: function(e) {
                e.exports = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            9498: function(e) {
                e.exports = function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            8872: function(e) {
                e.exports = function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                        } catch (u) {
                            l = !0, o = u
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            2218: function(e) {
                e.exports = function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            2281: function(e) {
                e.exports = function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            2122: function(e, t, n) {
                var r = n(8416);

                function o(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }
                e.exports = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(n), !0).forEach((function(t) {
                            r(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            4993: function(e, t, n) {
                var r = n(8698).default,
                    o = n(6115);
                e.exports = function(e, t) {
                    if (t && ("object" === r(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return o(e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6015: function(e) {
                function t(n, r) {
                    return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n, r)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            7424: function(e, t, n) {
                var r = n(5372),
                    o = n(8872),
                    i = n(6116),
                    a = n(2218);
                e.exports = function(e, t) {
                    return r(e) || o(e, t) || i(e, t) || a()
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            1753: function(e, t, n) {
                var r = n(3808);
                e.exports = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)););
                    return e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            861: function(e, t, n) {
                var r = n(3405),
                    o = n(9498),
                    i = n(6116),
                    a = n(2281);
                e.exports = function(e) {
                    return r(e) || o(e) || i(e) || a()
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            8698: function(e) {
                function t(n) {
                    return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6116: function(e, t, n) {
                var r = n(3897);
                e.exports = function(e, t) {
                    if (e) {
                        if ("string" === typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n), i.exports
    }
    n.m = e, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.f = {}, n.e = function(e) {
            return Promise.all(Object.keys(n.f).reduce((function(t, r) {
                return n.f[r](e, t), t
            }), []))
        }, n.u = function(e) {
            return "static/js/" + e + ".06b4182c.chunk.js"
        }, n.miniCssF = function(e) {}, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            var e = {},
                t = "lexical-editor-ts:";
            n.l = function(r, o, i, a) {
                if (e[r]) e[r].push(o);
                else {
                    var l, u;
                    if (void 0 !== i)
                        for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                            var f = s[c];
                            if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + i) {
                                l = f;
                                break
                            }
                        }
                    l || (u = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, n.nc && l.setAttribute("nonce", n.nc), l.setAttribute("data-webpack", t + i), l.src = r), e[r] = [o];
                    var d = function(t, n) {
                            l.onerror = l.onload = null, clearTimeout(p);
                            var o = e[r];
                            if (delete e[r], l.parentNode && l.parentNode.removeChild(l), o && o.forEach((function(e) {
                                    return e(n)
                                })), t) return t(n)
                        },
                        p = setTimeout(d.bind(null, void 0, {
                            type: "timeout",
                            target: l
                        }), 12e4);
                    l.onerror = d.bind(null, l.onerror), l.onload = d.bind(null, l.onload), u && document.head.appendChild(l)
                }
            }
        }(), n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "/beta/",
        function() {
            var e = {
                179: 0
            };
            n.f.j = function(t, r) {
                var o = n.o(e, t) ? e[t] : void 0;
                if (0 !== o)
                    if (o) r.push(o[2]);
                    else {
                        var i = new Promise((function(n, r) {
                            o = e[t] = [n, r]
                        }));
                        r.push(o[2] = i);
                        var a = n.p + n.u(t),
                            l = new Error;
                        n.l(a, (function(r) {
                            if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                                var i = r && ("load" === r.type ? "missing" : r.type),
                                    a = r && r.target && r.target.src;
                                l.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", l.name = "ChunkLoadError", l.type = i, l.request = a, o[1](l)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = function(t, r) {
                    var o, i, a = r[0],
                        l = r[1],
                        u = r[2],
                        s = 0;
                    if (a.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (o in l) n.o(l, o) && (n.m[o] = l[o]);
                        if (u) u(n)
                    }
                    for (t && t(r); s < a.length; s++) i = a[s], n.o(e, i) && e[i] && e[i][0](), e[i] = 0
                },
                r = self.webpackChunklexical_editor_ts = self.webpackChunklexical_editor_ts || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        }(),
        function() {
            "use strict";
            var e = n(2791),
                t = n(1250);

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                if (e) {
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                }
            }

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return r(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || o(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var a = n(5224),
                l = n(5528),
                u = n(6010),
                s = n(7022),
                c = n(3527);
            var f = n.p + "static/media/manglish.e3d611740f2735029db83fec11f4146f.svg",
                d = n(184);

            function p(e) {
                var t = e.children,
                    n = e.className;
                return (0, d.jsx)("div", {
                    className: n || "Placeholder__root",
                    children: t
                })
            }
            var h = n(4588);

            function g(e) {
                var t = e.className;
                return (0, d.jsx)(h.ContentEditable, {
                    className: t || "ContentEditable__root"
                })
            }
            var v = {
                    characterLimit: "PlaygroundEditorTheme__characterLimit",
                    code: "PlaygroundEditorTheme__code",
                    codeHighlight: {
                        atrule: "PlaygroundEditorTheme__tokenAttr",
                        attr: "PlaygroundEditorTheme__tokenAttr",
                        boolean: "PlaygroundEditorTheme__tokenProperty",
                        builtin: "PlaygroundEditorTheme__tokenSelector",
                        cdata: "PlaygroundEditorTheme__tokenComment",
                        char: "PlaygroundEditorTheme__tokenSelector",
                        class: "PlaygroundEditorTheme__tokenFunction",
                        "class-name": "PlaygroundEditorTheme__tokenFunction",
                        comment: "PlaygroundEditorTheme__tokenComment",
                        constant: "PlaygroundEditorTheme__tokenProperty",
                        deleted: "PlaygroundEditorTheme__tokenProperty",
                        doctype: "PlaygroundEditorTheme__tokenComment",
                        entity: "PlaygroundEditorTheme__tokenOperator",
                        function: "PlaygroundEditorTheme__tokenFunction",
                        important: "PlaygroundEditorTheme__tokenVariable",
                        inserted: "PlaygroundEditorTheme__tokenSelector",
                        keyword: "PlaygroundEditorTheme__tokenAttr",
                        namespace: "PlaygroundEditorTheme__tokenVariable",
                        number: "PlaygroundEditorTheme__tokenProperty",
                        operator: "PlaygroundEditorTheme__tokenOperator",
                        prolog: "PlaygroundEditorTheme__tokenComment",
                        property: "PlaygroundEditorTheme__tokenProperty",
                        punctuation: "PlaygroundEditorTheme__tokenPunctuation",
                        regex: "PlaygroundEditorTheme__tokenVariable",
                        selector: "PlaygroundEditorTheme__tokenSelector",
                        string: "PlaygroundEditorTheme__tokenSelector",
                        symbol: "PlaygroundEditorTheme__tokenProperty",
                        tag: "PlaygroundEditorTheme__tokenProperty",
                        url: "PlaygroundEditorTheme__tokenOperator",
                        variable: "PlaygroundEditorTheme__tokenVariable"
                    },
                    embedBlock: {
                        base: "PlaygroundEditorTheme__embedBlock",
                        focus: "PlaygroundEditorTheme__embedBlockFocus"
                    },
                    hashtag: "PlaygroundEditorTheme__hashtag",
                    heading: {
                        h1: "PlaygroundEditorTheme__h1",
                        h2: "PlaygroundEditorTheme__h2",
                        h3: "PlaygroundEditorTheme__h3",
                        h4: "PlaygroundEditorTheme__h4",
                        h5: "PlaygroundEditorTheme__h5",
                        h6: "PlaygroundEditorTheme__h6"
                    },
                    image: "editor-image",
                    link: "PlaygroundEditorTheme__link",
                    list: {
                        listitem: "PlaygroundEditorTheme__listItem",
                        listitemChecked: "PlaygroundEditorTheme__listItemChecked",
                        listitemUnchecked: "PlaygroundEditorTheme__listItemUnchecked",
                        nested: {
                            listitem: "PlaygroundEditorTheme__nestedListItem"
                        },
                        olDepth: ["PlaygroundEditorTheme__ol1", "PlaygroundEditorTheme__ol2", "PlaygroundEditorTheme__ol3", "PlaygroundEditorTheme__ol4", "PlaygroundEditorTheme__ol5"],
                        ul: "PlaygroundEditorTheme__ul"
                    },
                    ltr: "PlaygroundEditorTheme__ltr",
                    mark: "PlaygroundEditorTheme__mark",
                    markOverlap: "PlaygroundEditorTheme__markOverlap",
                    paragraph: "PlaygroundEditorTheme__paragraph",
                    quote: "PlaygroundEditorTheme__quote",
                    rtl: "PlaygroundEditorTheme__rtl",
                    table: "PlaygroundEditorTheme__table",
                    tableCell: "PlaygroundEditorTheme__tableCell",
                    tableCellHeader: "PlaygroundEditorTheme__tableCellHeader",
                    text: {
                        bold: "PlaygroundEditorTheme__textBold",
                        code: "PlaygroundEditorTheme__textCode",
                        italic: "PlaygroundEditorTheme__textItalic",
                        strikethrough: "PlaygroundEditorTheme__textStrikethrough",
                        subscript: "PlaygroundEditorTheme__textSubscript",
                        superscript: "PlaygroundEditorTheme__textSuperscript",
                        underline: "PlaygroundEditorTheme__textUnderline",
                        underlineStrikethrough: "PlaygroundEditorTheme__textUnderlineStrikethrough"
                    }
                },
                m = n(6868),
                y = n(9473);

            function _(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        _(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function k(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function C(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function S(e, t, n) {
                return t && C(e.prototype, t), n && C(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function N(e) {
                return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, N(e)
            }

            function E(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = N(e)););
                return e
            }

            function w() {
                return w = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                    var r = E(e, t);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value
                    }
                }, w.apply(this, arguments)
            }

            function T(e, t) {
                return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, T(e, t)
            }

            function O(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && T(e, t)
            }

            function M(e) {
                return M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, M(e)
            }

            function P(e, t) {
                if (t && ("object" === M(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function R(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = N(e);
                    if (t) {
                        var o = N(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return P(this, n)
                }
            }
            var D = n(5523),
                A = function(e) {
                    O(n, e);
                    var t = R(n);

                    function n(e, r, o) {
                        var i;
                        return k(this, n), (i = t.call(this, r, o)).__className = void 0, i.__className = e, i
                    }
                    return S(n, [{
                        key: "createDOM",
                        value: function(e) {
                            var t = document.createElement("span"),
                                r = w(N(n.prototype), "createDOM", this).call(this, e);
                            return t.className = this.__className, r.className = "emoji-inner", t.appendChild(r), t
                        }
                    }, {
                        key: "updateDOM",
                        value: function(e, t, r) {
                            var o = t.firstChild;
                            return null === o || (w(N(n.prototype), "updateDOM", this).call(this, e, o, r), !1)
                        }
                    }, {
                        key: "exportJSON",
                        value: function() {
                            return x(x({}, w(N(n.prototype), "exportJSON", this).call(this)), {}, {
                                className: this.getClassName(),
                                type: "emoji"
                            })
                        }
                    }, {
                        key: "getClassName",
                        value: function() {
                            return this.getLatest().__className
                        }
                    }], [{
                        key: "getType",
                        value: function() {
                            return "emoji"
                        }
                    }, {
                        key: "clone",
                        value: function(e) {
                            return new n(e.__className, e.__text, e.__key)
                        }
                    }, {
                        key: "importJSON",
                        value: function(e) {
                            var t = L(e.className, e.text);
                            return t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t
                        }
                    }]), n
                }(D.TextNode);

            function L(e, t) {
                return new A(e, t).setMode("token")
            }

            function I(e) {
                var t, n = e.textContent;
                return null !== n ? {
                    node: F(null !== (t = e.getAttribute("data-transliteration-original")) && void 0 !== t ? t : "", n)
                } : null
            }
            var $ = function(e) {
                O(n, e);
                var t = R(n);

                function n(e, r, o, i) {
                    var a;
                    return k(this, n), (a = t.call(this, null !== o && void 0 !== o ? o : r, i)).__originalWord = void 0, a.__convertedWord = void 0, a.__originalWord = e, a.__convertedWord = r, a
                }
                return S(n, [{
                    key: "exportJSON",
                    value: function() {
                        return x(x({}, w(N(n.prototype), "exportJSON", this).call(this)), {}, {
                            originalWord: this.__originalWord,
                            convertedWord: this.__convertedWord,
                            type: "transliteration",
                            version: 1
                        })
                    }
                }, {
                    key: "createDOM",
                    value: function(e) {
                        var t = w(N(n.prototype), "createDOM", this).call(this, e);
                        return t.className = "transliteration", t
                    }
                }, {
                    key: "exportDOM",
                    value: function() {
                        var e = document.createElement("span");
                        return e.setAttribute("data-transliteration", "true"), e.setAttribute("data-transliteration-original", this.__originalWord), e.setAttribute("data-transliteration-converted", this.__convertedWord), e.textContent = this.__text, {
                            element: e
                        }
                    }
                }, {
                    key: "canInsertTextBefore",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "canInsertTextAfter",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "isTextEntity",
                    value: function() {
                        return !0
                    }
                }], [{
                    key: "getType",
                    value: function() {
                        return "transliteration"
                    }
                }, {
                    key: "clone",
                    value: function(e) {
                        return new n(e.__originalWord, e.__convertedWord, e.__text, e.__key)
                    }
                }, {
                    key: "importJSON",
                    value: function(e) {
                        var t = F(e.originalWord, e.convertedWord);
                        return t.setTextContent(e.text), t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t
                    }
                }, {
                    key: "importDOM",
                    value: function() {
                        return {
                            span: function(e) {
                                return e.hasAttribute("data-transliteration") ? {
                                    conversion: I,
                                    priority: 1
                                } : null
                            }
                        }
                    }
                }]), n
            }(D.TextNode);

            function F(e, t) {
                var n = new $(e, t);
                return n.setMode("normal"), n
            }

            function j(e) {
                var t = e.textContent;
                return null !== t ? {
                    node: B(t)
                } : null
            }
            var z = function(e) {
                O(n, e);
                var t = R(n);

                function n(e, r, o) {
                    var i;
                    return k(this, n), (i = t.call(this, null !== r && void 0 !== r ? r : e, o)).__originalWord = void 0, i.__originalWord = e, i
                }
                return S(n, [{
                    key: "exportJSON",
                    value: function() {
                        return x(x({}, w(N(n.prototype), "exportJSON", this).call(this)), {}, {
                            originalWord: this.__originalWord,
                            type: "transliteration-pending",
                            version: 1
                        })
                    }
                }, {
                    key: "createDOM",
                    value: function(e) {
                        var t = w(N(n.prototype), "createDOM", this).call(this, e);
                        return t.style.setProperty("font-style", "italic"), t.style.setProperty("color", "rgba(0,0,0,0.6)"), t.className = "transliteration-pending", t
                    }
                }, {
                    key: "exportDOM",
                    value: function() {
                        var e = document.createElement("span");
                        return e.setAttribute("data-transliteration-pending", "true"), e.setAttribute("data-transliteration-original", this.__originalWord), e.textContent = this.__text, {
                            element: e
                        }
                    }
                }, {
                    key: "canInsertTextBefore",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "canInsertTextAfter",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "isTextEntity",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "getOriginalWord",
                    value: function() {
                        return this.__originalWord
                    }
                }], [{
                    key: "getType",
                    value: function() {
                        return "transliteration-pending"
                    }
                }, {
                    key: "clone",
                    value: function(e) {
                        return new n(e.__originalWord, e.__text, e.__key)
                    }
                }, {
                    key: "importJSON",
                    value: function(e) {
                        var t = B(e.originalWord);
                        return t.setTextContent(e.text), t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t
                    }
                }, {
                    key: "importDOM",
                    value: function() {
                        return {
                            span: function(e) {
                                return e.hasAttribute("data-transliteration-pending") ? {
                                    conversion: j,
                                    priority: 1
                                } : null
                            }
                        }
                    }
                }]), n
            }(D.TextNode);

            function B(e) {
                var t = new z(e);
                return t.setMode("normal"), t
            }

            function U(e) {
                return e instanceof z
            }
            var W = [y.HeadingNode, m.ListNode, m.ListItemNode, y.QuoteNode, A, $, z];

            function K(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                        } catch (u) {
                            l = !0, o = u
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || o(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var H = n(1665),
                V = n(9689),
                Y = n(4140),
                Q = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
                q = Q && "documentMode" in document ? document.documentMode : null,
                J = Q && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
            Q && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), !(!Q || !("InputEvent" in window) || q) && new window.InputEvent("input"), Q && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Q && /iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream;

            function G(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var X = n(4164),
                Z = e.createContext(null);

            function ee(t) {
                var n = t.children,
                    r = t.className,
                    o = t.onClick,
                    i = t.title,
                    a = (0, e.useRef)(null),
                    l = e.useContext(Z);
                if (null === l) throw new Error("DropDownItem must be used within a DropDown");
                var u = l.registerItem;
                return (0, e.useEffect)((function() {
                    a && a.current && u(a)
                }), [a, u]), (0, d.jsx)("button", {
                    className: r,
                    onClick: o,
                    ref: a,
                    title: i,
                    children: n
                })
            }

            function te(t) {
                var n = t.children,
                    r = t.dropDownRef,
                    o = t.onClose,
                    a = K((0, e.useState)(), 2),
                    l = a[0],
                    u = a[1],
                    s = K((0, e.useState)(), 2),
                    c = s[0],
                    f = s[1],
                    p = (0, e.useCallback)((function(e) {
                        u((function(t) {
                            return t ? [].concat(i(t), [e]) : [e]
                        }))
                    }), [u]),
                    h = (0, e.useMemo)((function() {
                        return {
                            registerItem: p
                        }
                    }), [p]);
                return (0, e.useEffect)((function() {
                    l && !c && f(l[0]), c && c.current && c.current.focus()
                }), [l, c]), (0, d.jsx)(Z.Provider, {
                    value: h,
                    children: (0, d.jsx)("div", {
                        className: "dropdown",
                        ref: r,
                        onKeyDown: function(e) {
                            if (l) {
                                var t = e.key;
                                ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(t) && e.preventDefault(), "Escape" === t || "Tab" === t ? o() : "ArrowUp" === t ? f((function(e) {
                                    if (!e) return l[0];
                                    var t = l.indexOf(e) - 1;
                                    return l[-1 === t ? l.length - 1 : t]
                                })) : "ArrowDown" === t && f((function(e) {
                                    return e ? l[l.indexOf(e) + 1] : l[0]
                                }))
                            }
                        },
                        children: n
                    })
                })
            }

            function ne(t) {
                var n = t.buttonLabel,
                    r = t.buttonAriaLabel,
                    o = t.buttonClassName,
                    i = t.buttonIconClassName,
                    a = t.children,
                    l = t.stopCloseOnClickSelf,
                    u = (0, e.useRef)(null),
                    s = (0, e.useRef)(null),
                    c = K((0, e.useState)(!1), 2),
                    f = c[0],
                    p = c[1];
                return (0, e.useEffect)((function() {
                    var e = s.current,
                        t = u.current;
                    if (f && null !== e && null !== t) {
                        var n = e.getBoundingClientRect(),
                            r = n.top,
                            o = n.left;
                        t.style.top = "".concat(r + 40, "px"), t.style.left = "".concat(Math.min(o, window.innerWidth - t.offsetWidth - 20), "px")
                    }
                }), [u, s, f]), (0, e.useEffect)((function() {
                    var e = s.current;
                    if (null !== e && f) {
                        var t = function(t) {
                            var n = t.target;
                            l && u.current && u.current.contains(n) || e.contains(n) || p(!1)
                        };
                        return document.addEventListener("click", t),
                            function() {
                                document.removeEventListener("click", t)
                            }
                    }
                }), [u, s, f, l]), (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsxs)("button", {
                        "aria-label": r || n,
                        className: o,
                        onClick: function() {
                            return p(!f)
                        },
                        ref: s,
                        children: [i && (0, d.jsx)("span", {
                            className: i
                        }), n && (0, d.jsx)("span", {
                            className: "text dropdown-button-text",
                            children: n
                        }), (0, d.jsx)("i", {
                            className: "chevron-down"
                        })]
                    }), f && (0, X.createPortal)((0, d.jsx)(te, {
                        dropDownRef: u,
                        onClose: function() {
                            p(!1), s && s.current && s.current.focus()
                        },
                        children: a
                    }), document.body)]
                })
            }

            function re(e) {
                var t = e.label,
                    n = e.value,
                    r = e.onChange,
                    o = e.placeholder,
                    i = void 0 === o ? "" : o,
                    a = e["data-test-id"];
                return (0, d.jsxs)("div", {
                    className: "Input__wrapper",
                    children: [(0, d.jsx)("label", {
                        className: "Input__label",
                        children: t
                    }), (0, d.jsx)("input", {
                        type: "text",
                        className: "Input__input",
                        placeholder: i,
                        value: n,
                        onChange: function(e) {
                            r(e.target.value)
                        },
                        "data-test-id": a
                    })]
                })
            }
            var oe = ["color", "children", "onChange"],
                ie = ["#d0021b", "#f5a623", "#f8e71c", "#8b572a", "#7ed321", "#417505", "#bd10e0", "#9013fe", "#4a90e2", "#50e3c2", "#b8e986", "#000000", "#4a4a4a", "#9b9b9b", "#ffffff"],
                ae = 214;

            function le(t) {
                var n = t.color,
                    r = t.children,
                    o = t.onChange,
                    i = G(t, oe),
                    a = K((0, e.useState)(he("hex", n)), 2),
                    l = a[0],
                    u = a[1],
                    s = K((0, e.useState)(n), 2),
                    c = s[0],
                    f = s[1],
                    p = (0, e.useRef)(null),
                    h = (0, e.useMemo)((function() {
                        return {
                            x: l.hsv.s / 100 * ae,
                            y: (100 - l.hsv.v) / 100 * 150
                        }
                    }), [l.hsv.s, l.hsv.v]),
                    g = (0, e.useMemo)((function() {
                        return {
                            x: l.hsv.h / 360 * ae
                        }
                    }), [l.hsv]);
                return (0, e.useEffect)((function() {
                    null !== p.current && o && (o(l.hex), f(l.hex))
                }), [l, o]), (0, e.useEffect)((function() {
                    if (void 0 !== n) {
                        var e = he("hex", n);
                        u(e), f(e.hex)
                    }
                }), [n]), (0, d.jsxs)(ne, x(x({}, i), {}, {
                    stopCloseOnClickSelf: !0,
                    children: [(0, d.jsxs)("div", {
                        className: "color-picker-wrapper",
                        style: {
                            width: ae
                        },
                        ref: p,
                        children: [(0, d.jsx)(re, {
                            label: "Hex",
                            onChange: function(e) {
                                if (f(e), /^#[0-9A-Fa-f]{6}$/i.test(e)) {
                                    var t = he("hex", e);
                                    u(t)
                                }
                            },
                            value: c
                        }), (0, d.jsx)("div", {
                            className: "color-picker-basic-color",
                            children: ie.map((function(e) {
                                return (0, d.jsx)("button", {
                                    className: e === l.hex ? " active" : "",
                                    style: {
                                        backgroundColor: e
                                    },
                                    onClick: function() {
                                        f(e), u(he("hex", e))
                                    }
                                }, e)
                            }))
                        }), (0, d.jsx)(ue, {
                            className: "color-picker-saturation",
                            style: {
                                backgroundColor: "hsl(".concat(l.hsv.h, ", 100%, 50%)")
                            },
                            onChange: function(e) {
                                var t = e.x,
                                    n = e.y,
                                    r = he("hsv", x(x({}, l.hsv), {}, {
                                        s: t / ae * 100,
                                        v: 100 - n / 150 * 100
                                    }));
                                u(r), f(r.hex)
                            },
                            children: (0, d.jsx)("div", {
                                className: "color-picker-saturation_cursor",
                                style: {
                                    backgroundColor: l.hex,
                                    left: h.x,
                                    top: h.y
                                }
                            })
                        }), (0, d.jsx)(ue, {
                            className: "color-picker-hue",
                            onChange: function(e) {
                                var t = e.x,
                                    n = he("hsv", x(x({}, l.hsv), {}, {
                                        h: t / ae * 360
                                    }));
                                u(n), f(n.hex)
                            },
                            children: (0, d.jsx)("div", {
                                className: "color-picker-hue_cursor",
                                style: {
                                    backgroundColor: "hsl(".concat(l.hsv.h, ", 100%, 50%)"),
                                    left: g.x
                                }
                            })
                        }), (0, d.jsx)("div", {
                            className: "color-picker-color",
                            style: {
                                backgroundColor: l.hex
                            }
                        })]
                    }), r]
                }))
            }

            function ue(t) {
                var n = t.className,
                    r = t.style,
                    o = t.onChange,
                    i = t.children,
                    a = (0, e.useRef)(null),
                    l = function(e) {
                        if (a.current) {
                            var t = a.current.getBoundingClientRect(),
                                n = t.width,
                                r = t.height,
                                i = t.left,
                                l = t.top,
                                u = se(e.clientX - i, n, 0),
                                s = se(e.clientY - l, r, 0);
                            o({
                                x: u,
                                y: s
                            })
                        }
                    };
                return (0, d.jsx)("div", {
                    ref: a,
                    className: n,
                    style: r,
                    onMouseDown: function(e) {
                        if (0 === e.button) {
                            l(e);
                            var t = function(e) {
                                l(e)
                            };
                            document.addEventListener("mousemove", t, !1), document.addEventListener("mouseup", (function e(n) {
                                document.removeEventListener("mousemove", t, !1), document.removeEventListener("mouseup", e, !1), l(n)
                            }), !1)
                        }
                    },
                    children: i
                })
            }

            function se(e, t, n) {
                return e > t ? t : e < n ? n : e
            }

            function ce(e) {
                if (!e.startsWith("#")) {
                    var t = document.createElement("canvas").getContext("2d");
                    if (!t) throw new Error("2d context not supported or canvas already initialized");
                    return t.fillStyle = e, t.fillStyle
                }
                return 4 === e.length || 5 === e.length ? e = e.split("").map((function(e, t) {
                    return t ? e + e : "#"
                })).join("") : 7 === e.length || 9 === e.length ? e : "#000000"
            }

            function fe(e) {
                var t = (e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, n, r) {
                    return "#" + t + t + n + n + r + r
                })).substring(1).match(/.{2}/g) || []).map((function(e) {
                    return parseInt(e, 16)
                }));
                return {
                    b: t[2],
                    g: t[1],
                    r: t[0]
                }
            }

            function de(e) {
                var t = e.r,
                    n = e.g,
                    r = e.b;
                t /= 255, n /= 255, r /= 255;
                var o = Math.max(t, n, r),
                    i = o - Math.min(t, n, r);
                return {
                    h: i ? 60 * (o === t ? (n - r) / i + (n < r ? 6 : 0) : o === n ? 2 + (r - t) / i : 4 + (t - n) / i) : 0,
                    s: o ? i / o * 100 : 0,
                    v: 100 * o
                }
            }

            function pe(e) {
                var t = e.b,
                    n = e.g;
                return "#" + [e.r, n, t].map((function(e) {
                    return e.toString(16).padStart(2, "0")
                })).join("")
            }

            function he(e, t) {
                var n = ce("#121212"),
                    r = fe(n),
                    o = de(r);
                if ("hex" === e) o = de(r = fe(n = ce(t)));
                else if ("rgb" === e) {
                    n = pe(r = t), o = de(r)
                } else if ("hsv" === e) {
                    n = pe(r = function(e) {
                        var t = e.h,
                            n = e.s,
                            r = e.v,
                            o = ~~(t / 60),
                            i = t / 60 - o,
                            a = (r /= 100) * (1 - (n /= 100)),
                            l = r * (1 - n * i),
                            u = r * (1 - n * (1 - i)),
                            s = o % 6,
                            c = Math.round(255 * [r, l, a, a, u, r][s]),
                            f = Math.round(255 * [u, r, r, l, a, a][s]);
                        return {
                            b: Math.round(255 * [a, a, u, r, r, l][s]),
                            g: f,
                            r: c
                        }
                    }(o = t))
                }
                return {
                    hex: n,
                    hsv: o,
                    rgb: r
                }
            }
            var ge = {
                bullet: "Bulleted List",
                check: "Check List",
                code: "Code Block",
                h1: "Heading 1",
                h2: "Heading 2",
                h3: "Heading 3",
                h4: "Heading 4",
                h5: "Heading 5",
                h6: "Heading 6",
                number: "Numbered List",
                paragraph: "Normal",
                quote: "Quote"
            };

            function ve(e) {
                return e ? "active dropdown-item-active" : ""
            }

            function me(e) {
                var t = e.editor,
                    n = e.blockType,
                    r = function(e) {
                        n !== e && t.update((function() {
                            var t = (0, D.$getSelection)();
                            (0, D.$isRangeSelection)(t) && (0, V.$wrapLeafNodesInElements)(t, (function() {
                                return (0, y.$createHeadingNode)(e)
                            }))
                        }))
                    };
                return (0, d.jsxs)(ne, {
                    buttonClassName: "toolbar-item block-controls",
                    buttonIconClassName: "icon block-type " + n,
                    buttonLabel: ge[n],
                    buttonAriaLabel: "Formatting options for text style",
                    children: [(0, d.jsxs)(ee, {
                        className: "item " + ve("paragraph" === n),
                        onClick: function() {
                            "paragraph" !== n && t.update((function() {
                                var e = (0, D.$getSelection)();
                                (0, D.$isRangeSelection)(e) && (0, V.$wrapLeafNodesInElements)(e, (function() {
                                    return (0, D.$createParagraphNode)()
                                }))
                            }))
                        },
                        children: [(0, d.jsx)("i", {
                            className: "icon paragraph"
                        }), (0, d.jsx)("span", {
                            className: "text",
                            children: "Normal"
                        })]
                    }), (0, d.jsxs)(ee, {
                        className: "item " + ve("h1" === n),
                        onClick: function() {
                            return r("h1")
                        },
                        children: [(0, d.jsx)("i", {
                            className: "icon h1"
                        }), (0, d.jsx)("span", {
                            className: "text",
                            children: "Heading 1"
                        })]
                    }), (0, d.jsxs)(ee, {
                        className: "item " + ve("h2" === n),
                        onClick: function() {
                            return r("h2")
                        },
                        children: [(0, d.jsx)("i", {
                            className: "icon h2"
                        }), (0, d.jsx)("span", {
                            className: "text",
                            children: "Heading 2"
                        })]
                    }), (0, d.jsxs)(ee, {
                        className: "item " + ve("h3" === n),
                        onClick: function() {
                            return r("h3")
                        },
                        children: [(0, d.jsx)("i", {
                            className: "icon h3"
                        }), (0, d.jsx)("span", {
                            className: "text",
                            children: "Heading 3"
                        })]
                    }), (0, d.jsxs)(ee, {
                        className: "item " + ve("bullet" === n),
                        onClick: function() {
                            "bullet" !== n ? t.dispatchCommand(m.INSERT_UNORDERED_LIST_COMMAND, void 0) : t.dispatchCommand(m.REMOVE_LIST_COMMAND, void 0)
                        },
                        children: [(0, d.jsx)("i", {
                            className: "icon bullet-list"
                        }), (0, d.jsx)("span", {
                            className: "text",
                            children: "Bullet List"
                        })]
                    }), (0, d.jsxs)(ee, {
                        className: "item " + ve("number" === n),
                        onClick: function() {
                            "number" !== n ? t.dispatchCommand(m.INSERT_ORDERED_LIST_COMMAND, void 0) : t.dispatchCommand(m.REMOVE_LIST_COMMAND, void 0)
                        },
                        children: [(0, d.jsx)("i", {
                            className: "icon numbered-list"
                        }), (0, d.jsx)("span", {
                            className: "text",
                            children: "Numbered List"
                        })]
                    }), (0, d.jsxs)(ee, {
                        className: "item " + ve("quote" === n),
                        onClick: function() {
                            "quote" !== n && t.update((function() {
                                var e = (0, D.$getSelection)();
                                (0, D.$isRangeSelection)(e) && (0, V.$wrapLeafNodesInElements)(e, (function() {
                                    return (0, y.$createQuoteNode)()
                                }))
                            }))
                        },
                        children: [(0, d.jsx)("i", {
                            className: "icon quote"
                        }), (0, d.jsx)("span", {
                            className: "text",
                            children: "Quote"
                        })]
                    })]
                })
            }

            function ye() {
                return (0, d.jsx)("div", {
                    className: "divider"
                })
            }

            function _e(e) {
                var t = e.onChange,
                    n = e.className,
                    r = e.options,
                    o = e.value;
                return (0, d.jsx)("select", {
                    className: n,
                    onChange: t,
                    value: o,
                    children: r.map((function(e) {
                        var t = K(e, 2),
                            n = t[0],
                            r = t[1];
                        return (0, d.jsx)("option", {
                            value: n,
                            children: r
                        }, n)
                    }))
                })
            }

            function be() {
                var t = K((0, H.useLexicalComposerContext)(), 1)[0],
                    n = K((0, e.useState)(t), 2),
                    r = n[0],
                    o = n[1],
                    i = K((0, e.useState)("paragraph"), 2),
                    a = i[0],
                    l = i[1],
                    u = K((0, e.useState)("15px"), 2),
                    s = u[0],
                    c = u[1],
                    f = K((0, e.useState)("#000"), 2),
                    p = f[0],
                    h = f[1],
                    g = K((0, e.useState)("#fff"), 2),
                    v = g[0],
                    _ = g[1],
                    b = K((0, e.useState)("Arial"), 2),
                    x = b[0],
                    k = b[1],
                    C = K((0, e.useState)(!1), 2),
                    S = C[0],
                    N = C[1],
                    E = K((0, e.useState)(!1), 2),
                    w = E[0],
                    T = E[1],
                    O = K((0, e.useState)(!1), 2),
                    M = O[0],
                    P = O[1],
                    R = K((0, e.useState)(!1), 2),
                    A = R[0],
                    L = R[1],
                    I = K((0, e.useState)(!1), 2),
                    $ = I[0],
                    F = I[1],
                    j = K((0, e.useState)(!1), 2),
                    z = j[0],
                    B = j[1],
                    U = K((0, e.useState)(!1), 2),
                    W = U[0],
                    Q = U[1],
                    q = (0, e.useCallback)((function() {
                        var e = (0, D.$getSelection)();
                        if ((0, D.$isRangeSelection)(e)) {
                            var t = e.anchor.getNode(),
                                n = "root" === t.getKey() ? t : t.getTopLevelElementOrThrow(),
                                o = n.getKey(),
                                i = r.getElementByKey(o);
                            if (N(e.hasFormat("bold")), T(e.hasFormat("italic")), P(e.hasFormat("underline")), L(e.hasFormat("strikethrough")), Q((0, V.$isParentElementRTL)(e)), null !== i)
                                if ((0, m.$isListNode)(n)) {
                                    var a = (0, Y.$getNearestNodeOfType)(t, m.ListNode),
                                        u = a ? a.getListType() : n.getListType();
                                    l(u)
                                } else {
                                    var s = (0, y.$isHeadingNode)(n) ? n.getTag() : n.getType();
                                    s in ge && l(s)
                                } c((0, V.$getSelectionStyleValueForProperty)(e, "font-size", "15px")), h((0, V.$getSelectionStyleValueForProperty)(e, "color", "#000")), _((0, V.$getSelectionStyleValueForProperty)(e, "background-color", "#fff")), k((0, V.$getSelectionStyleValueForProperty)(e, "font-family", "Arial"))
                        }
                    }), [r]);
                (0, e.useEffect)((function() {
                    return t.registerCommand(D.SELECTION_CHANGE_COMMAND, (function(e, t) {
                        return q(), o(t), !1
                    }), D.COMMAND_PRIORITY_CRITICAL)
                }), [t, q]), (0, e.useEffect)((function() {
                    return (0, Y.mergeRegister)(r.registerUpdateListener((function(e) {
                        e.editorState.read((function() {
                            q()
                        }))
                    })), r.registerCommand(D.CAN_UNDO_COMMAND, (function(e) {
                        return F(e), !1
                    }), D.COMMAND_PRIORITY_CRITICAL), r.registerCommand(D.CAN_REDO_COMMAND, (function(e) {
                        return B(e), !1
                    }), D.COMMAND_PRIORITY_CRITICAL))
                }), [r, q]);
                var G = (0, e.useCallback)((function(e) {
                        r.update((function() {
                            var t = (0, D.$getSelection)();
                            (0, D.$isRangeSelection)(t) && (0, V.$patchStyleText)(t, e)
                        }))
                    }), [r]),
                    X = (0, e.useCallback)((function(e) {
                        G({
                            "font-size": e.target.value
                        })
                    }), [G]),
                    Z = (0, e.useCallback)((function(e) {
                        G({
                            color: e
                        })
                    }), [G]),
                    te = (0, e.useCallback)((function(e) {
                        G({
                            "background-color": e
                        })
                    }), [G]),
                    re = (0, e.useCallback)((function(e) {
                        G({
                            "font-family": e.target.value
                        })
                    }), [G]);
                return (0, d.jsxs)("div", {
                    className: "toolbar",
                    children: [(0, d.jsx)("button", {
                        disabled: !$,
                        onClick: function() {
                            r.dispatchCommand(D.UNDO_COMMAND, void 0)
                        },
                        title: J ? "Undo (\u2318Z)" : "Undo (Ctrl+Z)",
                        className: "toolbar-item spaced",
                        "aria-label": "Undo",
                        children: (0, d.jsx)("i", {
                            className: "format undo"
                        })
                    }), (0, d.jsx)("button", {
                        disabled: !z,
                        onClick: function() {
                            r.dispatchCommand(D.REDO_COMMAND, void 0)
                        },
                        title: J ? "Redo (\u2318Y)" : "Undo (Ctrl+Y)",
                        className: "toolbar-item",
                        "aria-label": "Redo",
                        children: (0, d.jsx)("i", {
                            className: "format redo"
                        })
                    }), (0, d.jsx)(ye, {}), a in ge && r === t && (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(me, {
                            blockType: a,
                            editor: t
                        }), (0, d.jsx)(ye, {})]
                    }), (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(_e, {
                                className: "toolbar-item font-family",
                                onChange: re,
                                options: [
                                    ["Arial", "Arial"],
                                    ["Courier New", "Courier New"],
                                    ["Georgia", "Georgia"],
                                    ["Times New Roman", "Times New Roman"],
                                    ["Trebuchet MS", "Trebuchet MS"],
                                    ["Verdana", "Verdana"]
                                ],
                                value: x
                            }), (0, d.jsx)("i", {
                                className: "chevron-down inside"
                            })]
                        }), (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(_e, {
                                className: "toolbar-item font-size",
                                onChange: X,
                                options: [
                                    ["10px", "10px"],
                                    ["11px", "11px"],
                                    ["12px", "12px"],
                                    ["13px", "13px"],
                                    ["14px", "14px"],
                                    ["15px", "15px"],
                                    ["16px", "16px"],
                                    ["17px", "17px"],
                                    ["18px", "18px"],
                                    ["19px", "19px"],
                                    ["20px", "20px"]
                                ],
                                value: s
                            }), (0, d.jsx)("i", {
                                className: "chevron-down inside"
                            })]
                        }), (0, d.jsx)(ye, {}), (0, d.jsx)("button", {
                            onClick: function() {
                                r.dispatchCommand(D.FORMAT_TEXT_COMMAND, "bold")
                            },
                            className: "toolbar-item spaced " + (S ? "active" : ""),
                            title: J ? "Bold (\u2318B)" : "Bold (Ctrl+B)",
                            "aria-label": "Format text as bold. Shortcut: ".concat(J ? "\u2318B" : "Ctrl+B"),
                            children: (0, d.jsx)("i", {
                                className: "format bold"
                            })
                        }), (0, d.jsx)("button", {
                            onClick: function() {
                                r.dispatchCommand(D.FORMAT_TEXT_COMMAND, "italic")
                            },
                            className: "toolbar-item spaced " + (w ? "active" : ""),
                            title: J ? "Italic (\u2318I)" : "Italic (Ctrl+I)",
                            "aria-label": "Format text as italics. Shortcut: ".concat(J ? "\u2318I" : "Ctrl+I"),
                            children: (0, d.jsx)("i", {
                                className: "format italic"
                            })
                        }), (0, d.jsx)("button", {
                            onClick: function() {
                                r.dispatchCommand(D.FORMAT_TEXT_COMMAND, "underline")
                            },
                            className: "toolbar-item spaced " + (M ? "active" : ""),
                            title: J ? "Underline (\u2318U)" : "Underline (Ctrl+U)",
                            "aria-label": "Format text to underlined. Shortcut: ".concat(J ? "\u2318U" : "Ctrl+U"),
                            children: (0, d.jsx)("i", {
                                className: "format underline"
                            })
                        }), (0, d.jsx)("button", {
                            onClick: function() {
                                r.dispatchCommand(D.FORMAT_TEXT_COMMAND, "strikethrough")
                            },
                            className: "toolbar-item spaced " + (A ? "active" : ""),
                            title: "Strikethrough",
                            "aria-label": "Format text with a strikethrough",
                            children: (0, d.jsx)("i", {
                                className: "format strikethrough"
                            })
                        }), (0, d.jsx)(le, {
                            buttonClassName: "toolbar-item color-picker",
                            buttonAriaLabel: "Formatting text color",
                            buttonIconClassName: "icon font-color",
                            color: p,
                            onChange: Z,
                            title: "text color"
                        }), (0, d.jsx)(le, {
                            buttonClassName: "toolbar-item color-picker",
                            buttonAriaLabel: "Formatting background color",
                            buttonIconClassName: "icon bg-color",
                            color: v,
                            onChange: te,
                            title: "bg color"
                        })]
                    }), (0, d.jsx)(ye, {}), (0, d.jsxs)(ne, {
                        buttonLabel: "Align",
                        buttonIconClassName: "icon left-align",
                        buttonClassName: "toolbar-item spaced alignment",
                        buttonAriaLabel: "Formatting options for text alignment",
                        children: [(0, d.jsxs)(ee, {
                            onClick: function() {
                                r.dispatchCommand(D.FORMAT_ELEMENT_COMMAND, "left")
                            },
                            className: "item",
                            children: [(0, d.jsx)("i", {
                                className: "icon left-align"
                            }), (0, d.jsx)("span", {
                                className: "text",
                                children: "Left Align"
                            })]
                        }), (0, d.jsxs)(ee, {
                            onClick: function() {
                                r.dispatchCommand(D.FORMAT_ELEMENT_COMMAND, "center")
                            },
                            className: "item",
                            children: [(0, d.jsx)("i", {
                                className: "icon center-align"
                            }), (0, d.jsx)("span", {
                                className: "text",
                                children: "Center Align"
                            })]
                        }), (0, d.jsxs)(ee, {
                            onClick: function() {
                                r.dispatchCommand(D.FORMAT_ELEMENT_COMMAND, "right")
                            },
                            className: "item",
                            children: [(0, d.jsx)("i", {
                                className: "icon right-align"
                            }), (0, d.jsx)("span", {
                                className: "text",
                                children: "Right Align"
                            })]
                        }), (0, d.jsxs)(ee, {
                            onClick: function() {
                                r.dispatchCommand(D.FORMAT_ELEMENT_COMMAND, "justify")
                            },
                            className: "item",
                            children: [(0, d.jsx)("i", {
                                className: "icon justify-align"
                            }), (0, d.jsx)("span", {
                                className: "text",
                                children: "Justify Align"
                            })]
                        }), (0, d.jsx)(ye, {}), (0, d.jsxs)(ee, {
                            onClick: function() {
                                r.dispatchCommand(D.OUTDENT_CONTENT_COMMAND, void 0)
                            },
                            className: "item",
                            children: [(0, d.jsx)("i", {
                                className: "icon " + (W ? "indent" : "outdent")
                            }), (0, d.jsx)("span", {
                                className: "text",
                                children: "Outdent"
                            })]
                        }), (0, d.jsxs)(ee, {
                            onClick: function() {
                                r.dispatchCommand(D.INDENT_CONTENT_COMMAND, void 0)
                            },
                            className: "item",
                            children: [(0, d.jsx)("i", {
                                className: "icon " + (W ? "outdent" : "indent")
                            }), (0, d.jsx)("span", {
                                className: "text",
                                children: "Indent"
                            })]
                        })]
                    })]
                })
            }
            var xe = new Map([
                [":)", ["emoji happysmile", "\ud83d\ude42"]],
                [":D", ["emoji veryhappysmile", "\ud83d\ude00"]],
                [":(", ["emoji unhappysmile", "\ud83d\ude41"]],
                ["<3", ["emoji heart", "\u2764"]],
                ["\ud83d\ude42", ["emoji happysmile", "\ud83d\ude42"]],
                ["\ud83d\ude00", ["emoji veryhappysmile", "\ud83d\ude00"]],
                ["\ud83d\ude41", ["emoji unhappysmile", "\ud83d\ude41"]],
                ["\u2764", ["emoji heart", "\u2764"]]
            ]);

            function ke(e) {
                for (var t = e.getTextContent(), n = 0; n < t.length; n++) {
                    var r = xe.get(t[n]) || xe.get(t.slice(n, n + 2));
                    if (void 0 !== r) {
                        var o = K(r, 2),
                            i = o[0],
                            a = o[1],
                            l = void 0;
                        if (0 === n) l = K(e.splitText(n + 2), 1)[0];
                        else l = K(e.splitText(n, n + 2), 2)[1];
                        var u = L(i, a);
                        return l.replace(u), u
                    }
                }
                return null
            }

            function Ce(e) {
                for (var t = e; null !== t;) {
                    if (!t.isSimpleText()) return;
                    t = ke(t)
                }
            }

            function Se() {
                return function(t) {
                    (0, e.useEffect)((function() {
                        if (!t.hasNodes([A])) throw new Error("EmojisPlugin: EmojiNode not registered on editor");
                        return t.registerNodeTransform(D.TextNode, Ce)
                    }), [t])
                }(K((0, H.useLexicalComposerContext)(), 1)[0]), null
            }

            function Ne(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = o(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, l = !0,
                    u = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        u = !0, a = e
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                }
            }
            var Ee = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? e.useLayoutEffect : e.useEffect,
                we = n(4569),
                Te = n.n(we),
                Oe = new RegExp("(^|\\s)(((?:" + "\\b[a-zA-Z]+\\b" + "){1," + 100 + "}))$"),
                Me = new Map,
                Pe = {
                    controller: null,
                    string: ""
                },
                Re = function(e, t, n) {
                    Pe.controller && 0 === e.indexOf(Pe.string) && Pe.controller.abort(), Pe.controller = new AbortController, Pe.string = e, Te().get("https://inputtools.google.com/request?text=".concat(e, "&itc=ml-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8"), {
                        signal: Pe.controller.signal
                    }).then((function(n) {
                        var r, o, a = n.data;
                        if ((null === (r = a[1]) || void 0 === r || null === (o = r[0]) || void 0 === o ? void 0 : o[1].length) > 0) {
                            var l = [].concat(i(a[1][0][1].slice(0, 5)), [e]);
                            t(l)
                        } else t(null)
                    })).catch((function() {
                        n()
                    }))
                };

            function De(t) {
                var n = t.index,
                    r = t.isSelected,
                    o = t.onClick,
                    i = t.onMouseEnter,
                    a = t.result,
                    l = (0, e.useRef)(null),
                    u = "item";
                return r && (u += " selected"), (0, d.jsx)("li", {
                    tabIndex: -1,
                    className: u,
                    ref: l,
                    role: "option",
                    "aria-selected": r,
                    id: "typeahead-item-" + n,
                    onMouseEnter: i,
                    onClick: o,
                    children: a
                }, a)
            }

            function Ae(t) {
                var n = t.close,
                    r = t.editor,
                    o = t.resolution,
                    i = (0, e.useRef)(null),
                    a = o.match,
                    l = K((0, e.useState)(null), 2),
                    u = l[0],
                    s = l[1],
                    c = K((0, e.useState)(null), 2),
                    f = c[0],
                    p = c[1],
                    h = K((0, e.useState)(!0), 2),
                    g = h[0],
                    v = h[1],
                    m = (0, e.useCallback)((function(e) {
                        p(e), r.update((function() {
                            var e = r.getEditorState();
                            if (!e.isEmpty()) {
                                var t, n = Ne(e._nodeMap);
                                try {
                                    for (n.s(); !(t = n.n()).done;) {
                                        var o = K(t.value, 2)[1];
                                        U(o) && o.markDirty()
                                    }
                                } catch (i) {
                                    n.e(i)
                                } finally {
                                    n.f()
                                }
                            }
                        }))
                    }), [p, r]),
                    y = function(t, n) {
                        var r = K((0, e.useState)(null), 2),
                            o = r[0],
                            i = r[1];
                        return (0, e.useEffect)((function() {
                            var e = Me.get(t);
                            if (null !== e) {
                                if (void 0 !== e) return i(e), void n(t);
                                Me.set(t, null), Re(t, (function(e) {
                                    Me.set(t, e), i(e), n(t)
                                }), (function() {
                                    Me.delete(t)
                                }))
                            }
                        }), [t, n]), o
                    }(a.matchingString, m);
                (0, e.useEffect)((function() {
                    var e = i.current,
                        t = r.getRootElement();
                    if (null !== y && null !== e && null !== t) {
                        var n = o.range.getBoundingClientRect(),
                            a = n.left,
                            l = n.top,
                            u = n.height;
                        return e.style.top = "".concat(l + u + 2, "px"), e.style.left = "".concat(a - 14, "px"), e.style.display = "block", t.setAttribute("aria-controls", "transliterations-typeahead"),
                            function() {
                                e.style.display = "none", t.removeAttribute("aria-controls")
                            }
                    }
                }), [r, o, y]);
                var _ = (0, e.useCallback)((function() {
                        if (null !== y && null !== u) {
                            var e = y[u];
                            n(),
                                function(e, t, n) {
                                    e.update((function() {
                                        var e = (0, D.$getSelection)();
                                        if ((0, D.$isRangeSelection)(e) && e.isCollapsed()) {
                                            var r = e.anchor;
                                            if ("text" === r.type) {
                                                var o = r.getNode();
                                                if (o.isSimpleText()) {
                                                    var i = r.offset,
                                                        a = o.getTextContent().slice(0, i),
                                                        l = n.replaceableString.length,
                                                        u = i - Ie(a, t, l);
                                                    if (!(u < 0)) {
                                                        var s;
                                                        if (0 === u) s = K(o.splitText(i), 1)[0];
                                                        else s = K(o.splitText(u, i), 2)[1];
                                                        var c = F(n.replaceableString, t);
                                                        c.setFormat(s.getFormat()), c.setStyle(s.getStyle()), s.replace(c);
                                                        var f = (0, D.$createTextNode)(" ");
                                                        f.setFormat(s.getFormat()), f.setStyle(s.getStyle()), c.insertAfter(f), f.select()
                                                    }
                                                }
                                            }
                                        }
                                    }))
                                }(r, e, a)
                        }
                    }), [n, a, r, y, u]),
                    b = (0, e.useCallback)((function() {
                        n(),
                            function(e, t) {
                                e.update((function() {
                                    var e = t.matchingString,
                                        n = (0, D.$getSelection)();
                                    if ((0, D.$isRangeSelection)(n) && n.isCollapsed()) {
                                        var r = n.anchor;
                                        if ("text" === r.type) {
                                            var o = r.getNode();
                                            if (o.isSimpleText()) {
                                                var i = r.offset,
                                                    a = i - Ie(o.getTextContent().slice(0, i), e, t.replaceableString.length);
                                                if (!(a < 0)) {
                                                    var l;
                                                    if (0 === a) l = K(o.splitText(i), 1)[0];
                                                    else l = K(o.splitText(a, i), 2)[1];
                                                    var u = B(t.replaceableString);
                                                    u.setFormat(l.getFormat()), u.setStyle(l.getStyle()), l.replace(u);
                                                    var s = (0, D.$createTextNode)(" ");
                                                    s.setFormat(l.getFormat()), s.setStyle(l.getStyle()), u.insertAfter(s), s.select()
                                                }
                                            }
                                        }
                                    }
                                }))
                            }(r, a)
                    }), [n, r, a]),
                    x = (0, e.useCallback)((function(e) {
                        var t = r.getRootElement();
                        null !== t && (t.setAttribute("aria-activedescendant", "typeahead-item-" + e), s(e))
                    }), [r]);
                return (0, e.useEffect)((function() {
                    return function() {
                        var e = r.getRootElement();
                        null !== e && e.removeAttribute("aria-activedescendant")
                    }
                }), [r]), Ee((function() {
                    null === y ? s(null) : null === u && x(0)
                }), [y, u, x]), (0, e.useEffect)((function() {
                    return (0, Y.mergeRegister)(r.registerCommand(D.KEY_ARROW_DOWN_COMMAND, (function(e) {
                        var t = e;
                        return null !== y && null !== u && (u < 5 && u !== y.length - 1 && x(u + 1), t.preventDefault(), t.stopImmediatePropagation()), !0
                    }), D.COMMAND_PRIORITY_LOW), r.registerCommand(D.KEY_ARROW_UP_COMMAND, (function(e) {
                        var t = e;
                        return null !== y && null !== u && (0 !== u && x(u - 1), t.preventDefault(), t.stopImmediatePropagation()), !0
                    }), D.COMMAND_PRIORITY_LOW), r.registerCommand(D.KEY_ESCAPE_COMMAND, (function(e) {
                        var t = e;
                        return null !== y && null !== u && (t.preventDefault(), t.stopImmediatePropagation(), n(), !0)
                    }), D.COMMAND_PRIORITY_LOW), r.registerCommand(D.KEY_TAB_COMMAND, (function(e) {
                        var t = e;
                        return null !== y && null !== u && (t.preventDefault(), t.stopImmediatePropagation(), _(), !0)
                    }), D.COMMAND_PRIORITY_LOW), r.registerCommand(D.KEY_ENTER_COMMAND, (function(e) {
                        return null !== y && null !== u && (null !== e && (e.preventDefault(), e.stopImmediatePropagation()), _(), !0)
                    }), D.COMMAND_PRIORITY_LOW), r.registerCommand(D.KEY_SPACE_COMMAND, (function(e) {
                        return null !== e && (e.preventDefault(), e.stopImmediatePropagation()), a.matchingString !== f ? b() : _(), !0
                    }), D.COMMAND_PRIORITY_LOW))
                }), [_, b, n, r, y, u, x, a.matchingString, f]), null === y ? null : (0, d.jsx)("div", {
                    "aria-label": "Suggested transliterations",
                    id: "transliterations-typeahead",
                    ref: i,
                    role: "listbox",
                    onMouseMove: function() {
                        v(!1)
                    },
                    children: (0, d.jsx)("ul", {
                        children: y.slice(0, 6).map((function(e, t) {
                            return (0, d.jsx)(De, {
                                index: t,
                                isSelected: t === u,
                                onClick: function() {
                                    s(t), _()
                                },
                                onMouseEnter: function() {
                                    !g && s(t)
                                },
                                result: e
                            }, e)
                        }))
                    })
                })
            }

            function Le(e) {
                return function(e) {
                    var t = Oe.exec(e);
                    if (null !== t) {
                        var n = t[1],
                            r = t[3];
                        return {
                            leadOffset: t.index + n.length,
                            matchingString: r,
                            replaceableString: t[2]
                        }
                    }
                    return null
                }(e)
            }

            function Ie(e, t, n) {
                for (var r = n, o = r; o <= t.length; o++) e.substr(-o) === t.substr(0, o) && (r = o);
                return r
            }

            function $e(e) {
                var t = e.getOriginalWord(),
                    n = function(e) {
                        var t = Me.get(e);
                        return null !== t && void 0 !== t ? t : null
                    }(t);
                if (n && n.length > 0) {
                    var r = F(t, n[0]);
                    return r.setFormat(e.getFormat()), r.setStyle(e.getStyle()), e.replace(r), r
                }
                if (e.__originalWord !== e.getTextContent()) {
                    var o = (0, D.$createTextNode)(e.getTextContent());
                    return o.setFormat(e.getFormat()), o.setStyle(e.getStyle()), e.replace(o), o
                }
                return null
            }

            function Fe(e) {
                if (e.__convertedWord !== e.getTextContent()) {
                    var t = (0, D.$createTextNode)(e.getTextContent());
                    return t.setFormat(e.getFormat()), t.setStyle(e.getStyle()), e.replace(t), t
                }
                return null
            }

            function je(t) {
                var n = K((0, e.useState)(null), 2),
                    r = n[0],
                    o = n[1];
                (0, e.useEffect)((function() {
                    if (!t.hasNodes([$])) throw new Error("TransliterationsPlugin: TransliterationNode not registered on editor")
                }), [t]), (0, e.useEffect)((function() {
                    var n = document.createRange(),
                        r = null,
                        i = t.registerUpdateListener((function() {
                            var i = n,
                                a = function(e) {
                                    var t = null;
                                    return e.getEditorState().read((function() {
                                        var e = (0, D.$getSelection)();
                                        (0, D.$isRangeSelection)(e) && (t = function(e) {
                                            var t = e.anchor;
                                            if ("text" !== t.type) return null;
                                            var n = t.getNode();
                                            if (!n.isSimpleText()) return null;
                                            var r = t.offset;
                                            return n.getTextContent().slice(0, r)
                                        }(e))
                                    })), t
                                }(t);
                            if (a !== r && null !== i && (r = a, null !== a)) {
                                var l = Le(a);
                                if (null !== l && ! function(e, t) {
                                        return 0 === t && e.getEditorState().read((function() {
                                            var e = (0, D.$getSelection)();
                                            if ((0, D.$isRangeSelection)(e)) {
                                                var t = e.anchor.getNode().getPreviousSibling();
                                                return (0, D.$isTextNode)(t) && t.isTextEntity()
                                            }
                                            return !1
                                        }))
                                    }(t, l.leadOffset)) {
                                    var u = function(e, t) {
                                        var n = window.getSelection();
                                        if (null === n || !n.isCollapsed) return !1;
                                        var r = n.anchorNode,
                                            o = e.leadOffset,
                                            i = n.anchorOffset;
                                        try {
                                            r && (t.setStart(r, o), t.setEnd(r, i))
                                        } catch (a) {
                                            return !1
                                        }
                                        return !0
                                    }(l, i);
                                    if (null !== u) return void(0, e.startTransition)((function() {
                                        return o({
                                            match: l,
                                            range: i
                                        })
                                    }))
                                }(0, e.startTransition)((function() {
                                    return o(null)
                                }))
                            }
                        }));
                    return function() {
                        n = null, i()
                    }
                }), [t]);
                var i = (0, e.useCallback)((function() {
                    o(null)
                }), []);
                return (0, e.useEffect)((function() {
                    return t.registerNodeTransform(z, $e)
                }), [t]), (0, e.useEffect)((function() {
                    return t.registerNodeTransform($, Fe)
                }), [t]), null === r || null === t ? null : (0, X.createPortal)((0, d.jsx)(Ae, {
                    close: i,
                    resolution: r,
                    editor: t
                }), document.body)
            }

            function ze() {
                return je(K((0, H.useLexicalComposerContext)(), 1)[0])
            }
            var Be = function() {
                var e = document.getElementById("report-container");
                return null === e && ((e = document.createElement("div")).id = "report-container", e.style.position = "fixed", e.style.top = "50%", e.style.left = "50%", e.style.fontSize = "32px", e.style.transform = "translate(-50%, -50px)", e.style.padding = "20px", e.style.background = "rgba(240, 240, 240, 0.4)", e.style.borderRadius = "20px", document.body && document.body.appendChild(e)), e
            };
            var Ue = window.chrome,
                We = window.navigator,
                Ke = We.vendor,
                He = "undefined" !== typeof window.opr,
                Ve = We.userAgent.indexOf("Edg") > -1,
                Ye = We.userAgent.match("CriOS");
            var Qe = (0, D.createCommand)(),
                qe = {
                    "\n": function(e) {
                        e.selection.insertParagraph()
                    },
                    redo: function(e) {
                        e.editor.dispatchCommand(D.REDO_COMMAND, void 0)
                    },
                    undo: function(e) {
                        e.editor.dispatchCommand(D.UNDO_COMMAND, void 0)
                    }
                },
                Je = ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) && !Ye && null !== Ue && "undefined" !== typeof Ue && "Google Inc." === Ke && !1 === He && !1 === Ve;
            var Ge = Je ? function() {
                var t = K((0, H.useLexicalComposerContext)(), 1)[0],
                    n = K((0, e.useState)(!1), 2),
                    r = n[0],
                    o = n[1],
                    i = window.SpeechRecognition || window.webkitSpeechRecognition,
                    a = (0, e.useRef)(null),
                    l = function() {
                        var t = (0, e.useRef)(null),
                            n = (0, e.useCallback)((function() {
                                null !== t && clearTimeout(t.current), document.body && document.body.removeChild(Be())
                            }), []);
                        return (0, e.useEffect)((function() {
                            return n
                        }), [n]), (0, e.useCallback)((function(e) {
                            console.log(e);
                            var r = Be();
                            return clearTimeout(t.current), r.innerHTML = e, t.current = setTimeout(n, 1e3), t.current
                        }), [n])
                    }();
                return (0, e.useEffect)((function() {
                    return r && null === a.current && (a.current = new i, a.current.continuous = !0, a.current.interimResults = !0, a.current.lang = "ml", a.current.addEventListener("result", (function(e) {
                            var n = e.results.item(e.resultIndex),
                                r = n.item(0).transcript;
                            l(r), n.isFinal && t.update((function() {
                                var e = (0, D.$getSelection)();
                                if ((0, D.$isRangeSelection)(e)) {
                                    var n = qe[r.toLowerCase().trim()];
                                    n ? n({
                                        editor: t,
                                        selection: e
                                    }) : r.match(/\s*\n\s*/) ? e.insertParagraph() : e.insertText(r)
                                }
                            }))
                        }))), a.current && (r ? a.current.start() : a.current.stop()),
                        function() {
                            null !== a.current && a.current.stop()
                        }
                }), [i, t, r, l]), (0, e.useEffect)((function() {
                    return t.registerCommand(Qe, (function(e) {
                        return o(e), !0
                    }), D.COMMAND_PRIORITY_EDITOR)
                }), [t]), null
            } : function() {
                return null
            };

            function Xe(e) {
                var t = (0, D.$getSelection)();
                if (!(0, D.$isRangeSelection)(t)) return !1;
                var n, r = function(e) {
                        var t = e.getNodes();
                        return 0 === t.length ? new Set([e.anchor.getNode().getParentOrThrow(), e.focus.getNode().getParentOrThrow()]) : new Set(t.map((function(e) {
                            return (0, D.$isElementNode)(e) ? e : e.getParentOrThrow()
                        })))
                    }(t),
                    o = 0,
                    i = Ne(r);
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        var a = n.value;
                        if ((0, m.$isListNode)(a)) o = Math.max((0, m.$getListDepth)(a) + 1, o);
                        else if ((0, m.$isListItemNode)(a)) {
                            var l = a.getParent();
                            if (!(0, m.$isListNode)(l)) throw new Error("ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent.");
                            o = Math.max((0, m.$getListDepth)(l) + 1, o)
                        }
                    }
                } catch (u) {
                    i.e(u)
                } finally {
                    i.f()
                }
                return o <= e
            }

            function Ze(t) {
                var n = t.maxDepth,
                    r = K((0, H.useLexicalComposerContext)(), 1)[0];
                return (0, e.useEffect)((function() {
                    return r.registerCommand(D.INDENT_CONTENT_COMMAND, (function() {
                        return !Xe(null !== n && void 0 !== n ? n : 7)
                    }), D.COMMAND_PRIORITY_CRITICAL)
                }), [r, n]), null
            }

            function et() {
                var t = K((0, H.useLexicalComposerContext)(), 1)[0],
                    n = K((0, e.useState)(!1), 2),
                    r = n[0],
                    o = n[1],
                    i = K((0, e.useState)(!1), 2),
                    a = i[0],
                    l = i[1];
                return (0, d.jsxs)("div", {
                    className: "actions",
                    children: [(0, d.jsxs)("button", {
                        className: "action-button action-button-clipboard " + (a ? "active" : ""),
                        onClick: function() {
                            t.getEditorState().read((function() {
                                var e = (0, D.$getRoot)().getTextContent();
                                navigator.clipboard && navigator.clipboard.writeText(e).then((function() {
                                    l(!0), setTimeout((function() {
                                        l(!1)
                                    }), 1e3)
                                }), (function(e) {
                                    console.error("Error copying to clipboard", e)
                                }))
                            }))
                        },
                        title: "Copy Text",
                        "aria-label": "Copy text to clipboard",
                        children: [(0, d.jsx)("i", {
                            className: "clipboard"
                        }), " Copy Text"]
                    }), Je && (0, d.jsxs)("button", {
                        onClick: function() {
                            t.dispatchCommand(Qe, !r), o(!r)
                        },
                        className: "action-button action-button-mic " + (r ? "active" : ""),
                        title: "Speech To Text",
                        "aria-label": "".concat(r ? "Enable" : "Disable", " speech to text"),
                        children: [(0, d.jsx)("i", {
                            className: "mic"
                        }), " Voice Typing"]
                    })]
                })
            }

            function tt(e) {
                console.error(e)
            }

            function nt() {
                var e = {
                    namespace: "MyEditor",
                    theme: v,
                    onError: tt,
                    nodes: i(W)
                };
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsxs)(a.LexicalComposer, {
                        initialConfig: e,
                        children: [(0, d.jsx)("header", {
                            children: (0, d.jsx)("img", {
                                src: f,
                                alt: "Manglish"
                            })
                        }), (0, d.jsxs)("div", {
                            className: "editor-shell",
                            children: [(0, d.jsx)(be, {}), (0, d.jsxs)("div", {
                                className: "editor-container",
                                children: [(0, d.jsx)(s.AutoFocusPlugin, {}), (0, d.jsx)(Se, {}), (0, d.jsx)(ze, {}), (0, d.jsx)(Ge, {}), (0, d.jsx)(l.RichTextPlugin, {
                                    contentEditable: (0, d.jsx)(g, {}),
                                    placeholder: (0, d.jsx)(p, {
                                        children: "\u0d07\u0d35\u0d3f\u0d1f\u0d46 \u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 \u0d0e\u0d34\u0d41\u0d24\u0d3e\u0d02..."
                                    })
                                }), (0, d.jsx)(u.ListPlugin, {}), (0, d.jsx)(Ze, {
                                    maxDepth: 7
                                }), (0, d.jsx)(et, {}), (0, d.jsx)(c.HistoryPlugin, {})]
                            })]
                        })]
                    }), (0, d.jsxs)("footer", {
                        children: [(0, d.jsxs)("p", {
                            children: ["", " ", (0, d.jsx)("a", {
                                href: "",
                                children: ""
                            }), "."]
                        }), (0, d.jsx)("p", {
                            className: "",
                            children: ""
                        })]
                    })]
                })
            }
            var rt = function() {
                    return (0, d.jsx)("div", {
                        className: "App",
                        children: (0, d.jsx)(nt, {})
                    })
                },
                ot = function(e) {
                    e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((function(t) {
                        var n = t.getCLS,
                            r = t.getFID,
                            o = t.getFCP,
                            i = t.getLCP,
                            a = t.getTTFB;
                        n(e), r(e), o(e), i(e), a(e)
                    }))
                };
            t.createRoot(document.getElementById("root")).render((0, d.jsx)(e.StrictMode, {
                children: (0, d.jsx)(rt, {})
            })), ot()
        }()
}();
//# sourceMappingURL=main.bc1e5b09.js.map
