function disableCtrlZ(e) {
    if ((e.ctrlKey || e.metaKey) && e.keyCode == 90) {
        e.preventDefault();
        return false;
    }
}
$("body").keyup(disableCtrlZ).keydown(disableCtrlZ);
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

!(function (t, e) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define([], e)
        : "object" == typeof exports
        ? (exports["transliteration-input-tools"] = e())
        : (t["transliteration-input-tools"] = e());
})(window, function () {
    return (function (t) {
        var e = {};
        function n(i) {
            if (e[i]) return e[i].exports;
            var r = (e[i] = { i: i, l: !1, exports: {} });
            return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, i) {
                n.o(t, e) ||
                    Object.defineProperty(t, e, { enumerable: !0, get: i });
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var i = Object.create(null);
                if (
                    (n.r(i),
                    Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: t,
                    }),
                    2 & e && "string" != typeof t)
                )
                    for (var r in t)
                        n.d(
                            i,
                            r,
                            function (e) {
                                return t[e];
                            }.bind(null, r)
                        );
                return i;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 0))
        );
    })([
        function (t, e, n) {
            "use strict";
            e.__esModule = !0;
            var i = n(1);
            function r(t, e) {
                new i.TransliterationProvider(t, e);
            }
            function o(t) {
                var e = t.cloneNode(!0);
                t.parentNode.replaceChild(e, t);
            }
            n(6),
                (e.enableTransliteration = r),
                (e.disableTransliteration = o),
                window &&
                    ((window.enableTransliteration = r),
                    (window.disableTransliteration = o));
        },
        function (t, e, n) {
            "use strict";
            e.__esModule = !0;
            var i = n(2),
                r = n(3),
                o = n(5),
                s = (function () {
                    return function (t, e) {
                        void 0 === e && (e = "ne"),
                            (this.inputArea = t),
                            (this.eventHandler = new i.EventHandler(this)),
                            (this.suggestionBox = new r.SuggestionBox(this)),
                            (this.apiClient = new o.ApiClient(this, e));
                    };
                })();
            e.TransliterationProvider = s;
        },
        function (t, e, n) {
            "use strict";
            e.__esModule = !0;
            var i = (function () {
                function t(t) {
                    (this.transliterationProvider = t),
                        this.registerListeners();
                }
                return (
                    (t.prototype.registerListeners = function () {
                        this.transliterationProvider.inputArea.addEventListener(
                            isMobile ? "input" : "keypress",
                            this.handleKeyPress()
                        );
                    }),
                    (t.prototype.handleKeyPress = function () {
                        var t =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
                                ""
                            );
                        return function (e) {
                            if (isMobile) {
                                const text =
                                    this.transliterationProvider.inputArea
                                        .value;

                                if (-1 !== t.indexOf(e.data)) {
                                    this.transliterationProvider.inputArea.value =
                                        text.slice(0, -1);
                                    this.transliterationProvider.suggestionBox.startSuggestions(
                                        e.data
                                    );
                                } else if (
                                    e.inputType === "insertText" &&
                                    -1 === t.indexOf(e.data)
                                ) {
                                    this.transliterationProvider.suggestionBox.endSuggestions();
                                    this.transliterationProvider.inputArea.value =
                                        text.slice(0, -1) + e.data;
                                } else if (e.inputType === "insertLineBreak") {
                                    this.transliterationProvider.inputArea.value =
                                        text + "\n";
                                } else if (
                                    e.inputType === "deleteContentBackward"
                                ) {
                                    this.transliterationProvider.inputArea.value =
                                        text.slice(0, -1);
                                }
                            } else {
                                -1 !== t.indexOf(e.key) &&
                                    (this.transliterationProvider.suggestionBox.startSuggestions(
                                        e.key
                                    ),
                                    e.preventDefault());
                            }
                        }.bind(this);
                    }),
                    t
                );
            })();
            e.EventHandler = i;
        },
        function (t, e, n) {
            "use strict";
            var i =
                    (this && this.__awaiter) ||
                    function (t, e, n, i) {
                        return new (n || (n = Promise))(function (r, o) {
                            function s(t) {
                                try {
                                    u(i.next(t));
                                } catch (t) {
                                    o(t);
                                }
                            }
                            function a(t) {
                                try {
                                    u(i.throw(t));
                                } catch (t) {
                                    o(t);
                                }
                            }
                            function u(t) {
                                t.done
                                    ? r(t.value)
                                    : new n(function (e) {
                                          e(t.value);
                                      }).then(s, a);
                            }
                            u((i = i.apply(t, e || [])).next());
                        });
                    },
                r =
                    (this && this.__generator) ||
                    function (t, e) {
                        var n,
                            i,
                            r,
                            o,
                            s = {
                                label: 0,
                                sent: function () {
                                    if (1 & r[0]) throw r[1];
                                    return r[1];
                                },
                                trys: [],
                                ops: [],
                            };
                        return (
                            (o = { next: a(0), throw: a(1), return: a(2) }),
                            "function" == typeof Symbol &&
                                (o[Symbol.iterator] = function () {
                                    return this;
                                }),
                            o
                        );
                        function a(o) {
                            return function (a) {
                                return (function (o) {
                                    if (n)
                                        throw new TypeError(
                                            "Generator is already executing."
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                i &&
                                                    (r =
                                                        2 & o[0]
                                                            ? i.return
                                                            : o[0]
                                                            ? i.throw ||
                                                              ((r = i.return) &&
                                                                  r.call(i),
                                                              0)
                                                            : i.next) &&
                                                    !(r = r.call(i, o[1])).done)
                                            )
                                                return r;
                                            switch (
                                                ((i = 0),
                                                r && (o = [2 & o[0], r.value]),
                                                o[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    r = o;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: o[1],
                                                            done: !1,
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (i = o[1]),
                                                        (o = [0]);
                                                    continue;
                                                case 7:
                                                    (o = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !(r =
                                                            (r = s.trys)
                                                                .length > 0 &&
                                                            r[r.length - 1]) &&
                                                        (6 === o[0] ||
                                                            2 === o[0])
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === o[0] &&
                                                        (!r ||
                                                            (o[1] > r[0] &&
                                                                o[1] < r[3]))
                                                    ) {
                                                        s.label = o[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === o[0] &&
                                                        s.label < r[1]
                                                    ) {
                                                        (s.label = r[1]),
                                                            (r = o);
                                                        break;
                                                    }
                                                    if (r && s.label < r[2]) {
                                                        (s.label = r[2]),
                                                            s.ops.push(o);
                                                        break;
                                                    }
                                                    r[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            o = e.call(t, s);
                                        } catch (t) {
                                            (o = [6, t]), (i = 0);
                                        } finally {
                                            n = r = 0;
                                        }
                                    if (5 & o[0]) throw o[1];
                                    return {
                                        value: o[0] ? o[1] : void 0,
                                        done: !0,
                                    };
                                })([o, a]);
                            };
                        }
                    };
            e.__esModule = !0;
            var o = n(4),
                s = (function () {
                    function t(t) {
                        (this.transliterationProvider = t),
                            this.renderInitial();
                    }
                    return (
                        (t.prototype.renderInitial = function () {
                            (this.suggestionInputBox =
                                document.createElement("input")),
                                (this.suggestionWrapper =
                                    document.createElement("div")),
                                (this.suggestionsList =
                                    document.createElement("div")),
                                (this.suggestionInputBox.className =
                                    "suggestion-input"),
                                (this.suggestionWrapper.className =
                                    "ks-input-suggestions"),
                                (this.suggestionsList.className =
                                    "suggestion-list"),
                                (this.loadingBox =
                                    document.createElement("div")),
                                this.loadingBox.classList.add("loading-box"),
                                this.loadingBox.classList.add("hidden");
                            for (
                                var t = document.createElement("div"), e = 0;
                                e <= 3;
                                e++
                            ) {
                                var n = document.createElement("div");
                                t.appendChild(n);
                            }
                            this.suggestionWrapper.appendChild(
                                this.suggestionInputBox
                            ),
                                this.suggestionWrapper.appendChild(
                                    this.suggestionsList
                                ),
                                this.suggestionWrapper.appendChild(
                                    this.loadingBox
                                ),
                                this.transliterationProvider.inputArea
                                    .parentElement
                                    ? this.transliterationProvider.inputArea.parentElement.appendChild(
                                          this.suggestionWrapper
                                      )
                                    : document.body.appendChild(
                                          this.suggestionWrapper
                                      ),
                                this.postInit();
                        }),
                        (t.prototype.postInit = function () {
                            this.suggestionInputBox.addEventListener(
                                "keyup",
                                this.handleKeyUp()
                            );
                            this.suggestionInputBox.addEventListener(
                                "input",
                                this.handleMobileKeyPress()
                            );
                            this.updateDisplayState();
                        }),
                        (t.prototype.handleKeyUp = function () {
                            return function (t) {
                                return i(this, void 0, void 0, function () {
                                    var e;
                                    return r(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                switch (t.key) {
                                                    case "Escape":
                                                        return [3, 1];
                                                    case " ":
                                                        return [3, 2];
                                                    case "Enter":
                                                        return [3, 3];
                                                    case "ArrowDown":
                                                        return [3, 4];
                                                    case "ArrowUp":
                                                        return [3, 5];
                                                }
                                                return [3, 6];
                                            case 1:
                                                return (
                                                    this.suggestionWrapper.classList.add(
                                                        "hidden"
                                                    ),
                                                    this.transliterationProvider.inputArea.focus(),
                                                    [3, 8]
                                                );
                                            case 2:
                                            case 3:
                                                return (
                                                    this.endSuggestions(),
                                                    [3, 8]
                                                );
                                            case 4:
                                                return (
                                                    this.selectedSuggestion < 5
                                                        ? this
                                                              .selectedSuggestion++
                                                        : (this.selectedSuggestion = 0),
                                                    this.renderSuggestions(),
                                                    [3, 8]
                                                );
                                            case 5:
                                                return (
                                                    this.selectedSuggestion > 0
                                                        ? this
                                                              .selectedSuggestion--
                                                        : (this.selectedSuggestion = 5),
                                                    this.renderSuggestions(),
                                                    [3, 8]
                                                );
                                            case 6:
                                                return (
                                                    this.updateDisplayState(),
                                                    this.loadingBox.classList.remove(
                                                        "hidden"
                                                    ),
                                                    this.updateSuggestions([
                                                        this.suggestionInputBox
                                                            .value,
                                                    ]),
                                                    [
                                                        4,
                                                        this.transliterationProvider.apiClient.getSuggestions(
                                                            this
                                                                .suggestionInputBox
                                                                .value
                                                        ),
                                                    ]
                                                );
                                            case 7:
                                                return (
                                                    (e = n.sent()) &&
                                                        e.apiCallDate ===
                                                            this
                                                                .transliterationProvider
                                                                .lastApiUpdate &&
                                                        (this.updateSuggestions(
                                                            e.values
                                                        ),
                                                        this.loadingBox.classList.add(
                                                            "hidden"
                                                        )),
                                                    [3, 8]
                                                );
                                            case 8:
                                                return [2];
                                        }
                                    });
                                });
                            }.bind(this);
                        }),
                        (t.prototype.handleMobileKeyPress = function () {
                            return function (e) {
                                if (isMobile) {
                                    if (e.data.includes(" ")) {
                                        const e = new KeyboardEvent("keyup", {
                                            key: " ",
                                        });
                                        this.suggestionInputBox.dispatchEvent(
                                            e
                                        );
                                    }
                                }
                            }.bind(this);
                        }),
                        (t.prototype.endSuggestions = function () {
                            if (
                                this.suggestions &&
                                this.suggestions.length > 0
                            ) {
                                var t =
                                    this.suggestions[
                                        this.selectedSuggestion
                                    ].trim();
                                (this.suggestionInputBox.value = ""),
                                    (this.suggestions = []),
                                    (this.suggestionsList.innerHTML = ""),
                                    this.updateDisplayState();
                                var e =
                                        this.transliterationProvider.inputArea
                                            .value,
                                    n = e.substring(
                                        0,
                                        this.initialSelectionStart
                                    ),
                                    i = e.substring(this.initialSelectionEnd);
                                (i = i.trim()),
                                    (this.transliterationProvider.inputArea.value =
                                        n + t.replace(" ", "") + " " + i),
                                    (this.transliterationProvider.inputArea.selectionEnd =
                                        this.initialSelectionStart +
                                        t.length +
                                        1);
                            }
                        }),
                        (t.prototype.updateSuggestions = function (t) {
                            (this.suggestions = t),
                                (this.selectedSuggestion = 0),
                                this.renderSuggestions();
                        }),
                        (t.prototype.renderSuggestions = function () {
                            var t = this;
                            (this.suggestionsList.innerHTML = ""),
                                this.suggestions &&
                                    this.suggestions.forEach(function (e, n) {
                                        var i = document.createElement("div");
                                        (i.innerHTML = e),
                                            (i.id = "suggestion" + n),
                                            i.classList.add("suggestion-div"),
                                            i.addEventListener(
                                                "click",
                                                function () {
                                                    t.selectSuggestion(n);
                                                }
                                            ),
                                            n === t.selectedSuggestion &&
                                                i.classList.add("active"),
                                            t.suggestionsList.appendChild(i);
                                    });
                        }),
                        (t.prototype.selectSuggestion = function (t) {
                            t >= 0 &&
                                t <= 5 &&
                                ((this.selectedSuggestion = t),
                                this.endSuggestions());
                        }),
                        (t.prototype.startSuggestions = function (t) {
                            this.suggestionInputBox.value = t;
                            var e = this.transliterationProvider.inputArea,
                                n = o(e, e.selectionStart),
                                i = this.transliterationProvider.inputArea
                                    .parentElement
                                    ? this.transliterationProvider.inputArea.parentElement.getBoundingClientRect()
                                    : this.transliterationProvider.inputArea.getBoundingClientRect();
                            (this.initialSelectionStart =
                                this.transliterationProvider.inputArea.selectionStart),
                                (this.initialSelectionEnd =
                                    this.transliterationProvider.inputArea.selectionEnd);
                            var r = n.top + 10,
                                s = n.left + 10;
                            r > i.height - 250 && (r = i.height - 250),
                                s > i.width - 250 && (s = i.width - 250),
                                (this.suggestionWrapper.style.position =
                                    "absolute"),
                                (this.suggestionWrapper.style.top = r + "px"),
                                (this.suggestionWrapper.style.left = s + "px"),
                                this.updateDisplayState();
                        }),
                        (t.prototype.updateDisplayState = function () {
                            void 0 === this.suggestionInputBox.value ||
                            "" === this.suggestionInputBox.value
                                ? (this.suggestionWrapper.classList.add(
                                      "hidden"
                                  ),
                                  this.transliterationProvider.inputArea.focus())
                                : (this.suggestionWrapper.classList.remove(
                                      "hidden"
                                  ),
                                  this.suggestionInputBox.focus());
                        }),
                        t
                    );
                })();
            e.SuggestionBox = s;
        },
        function (t, e, n) {
            !(function () {
                var e = [
                        "direction",
                        "boxSizing",
                        "width",
                        "height",
                        "overflowX",
                        "overflowY",
                        "borderTopWidth",
                        "borderRightWidth",
                        "borderBottomWidth",
                        "borderLeftWidth",
                        "borderStyle",
                        "paddingTop",
                        "paddingRight",
                        "paddingBottom",
                        "paddingLeft",
                        "fontStyle",
                        "fontVariant",
                        "fontWeight",
                        "fontStretch",
                        "fontSize",
                        "fontSizeAdjust",
                        "lineHeight",
                        "fontFamily",
                        "textAlign",
                        "textTransform",
                        "textIndent",
                        "textDecoration",
                        "letterSpacing",
                        "wordSpacing",
                        "tabSize",
                        "MozTabSize",
                    ],
                    n = "undefined" != typeof window,
                    i = n && null != window.mozInnerScreenX;
                function r(t, r, o) {
                    if (!n)
                        throw new Error(
                            "textarea-caret-position#getCaretCoordinates should only be called in a browser"
                        );
                    var s = (o && o.debug) || !1;
                    if (s) {
                        var a = document.querySelector(
                            "#input-textarea-caret-position-mirror-div"
                        );
                        a && a.parentNode.removeChild(a);
                    }
                    var u = document.createElement("div");
                    (u.id = "input-textarea-caret-position-mirror-div"),
                        document.body.appendChild(u);
                    var l = u.style,
                        d = window.getComputedStyle
                            ? window.getComputedStyle(t)
                            : t.currentStyle,
                        c = "INPUT" === t.nodeName;
                    (l.whiteSpace = "pre-wrap"),
                        c || (l.wordWrap = "break-word"),
                        (l.position = "absolute"),
                        s || (l.visibility = "hidden"),
                        e.forEach(function (t) {
                            if (c && "lineHeight" === t)
                                if ("border-box" === d.boxSizing) {
                                    var e = parseInt(d.height),
                                        n =
                                            parseInt(d.paddingTop) +
                                            parseInt(d.paddingBottom) +
                                            parseInt(d.borderTopWidth) +
                                            parseInt(d.borderBottomWidth),
                                        i = n + parseInt(d.lineHeight);
                                    l.lineHeight =
                                        e > i
                                            ? e - n + "px"
                                            : e === i
                                            ? d.lineHeight
                                            : 0;
                                } else l.lineHeight = d.height;
                            else l[t] = d[t];
                        }),
                        i
                            ? t.scrollHeight > parseInt(d.height) &&
                              (l.overflowY = "scroll")
                            : (l.overflow = "hidden"),
                        (u.textContent = t.value.substring(0, r)),
                        c &&
                            (u.textContent = u.textContent.replace(/\s/g, "Â "));
                    var p = document.createElement("span");
                    (p.textContent = t.value.substring(r) || "."),
                        u.appendChild(p);
                    var f = {
                        top: p.offsetTop + parseInt(d.borderTopWidth),
                        left: p.offsetLeft + parseInt(d.borderLeftWidth),
                        height: parseInt(d.lineHeight),
                    };
                    return (
                        s
                            ? (p.style.backgroundColor = "#aaa")
                            : document.body.removeChild(u),
                        f
                    );
                }
                void 0 !== t.exports
                    ? (t.exports = r)
                    : n && (window.getCaretCoordinates = r);
            })();
        },
        function (t, e, n) {
            "use strict";
            var i =
                    (this && this.__awaiter) ||
                    function (t, e, n, i) {
                        return new (n || (n = Promise))(function (r, o) {
                            function s(t) {
                                try {
                                    u(i.next(t));
                                } catch (t) {
                                    o(t);
                                }
                            }
                            function a(t) {
                                try {
                                    u(i.throw(t));
                                } catch (t) {
                                    o(t);
                                }
                            }
                            function u(t) {
                                t.done
                                    ? r(t.value)
                                    : new n(function (e) {
                                          e(t.value);
                                      }).then(s, a);
                            }
                            u((i = i.apply(t, e || [])).next());
                        });
                    },
                r =
                    (this && this.__generator) ||
                    function (t, e) {
                        var n,
                            i,
                            r,
                            o,
                            s = {
                                label: 0,
                                sent: function () {
                                    if (1 & r[0]) throw r[1];
                                    return r[1];
                                },
                                trys: [],
                                ops: [],
                            };
                        return (
                            (o = { next: a(0), throw: a(1), return: a(2) }),
                            "function" == typeof Symbol &&
                                (o[Symbol.iterator] = function () {
                                    return this;
                                }),
                            o
                        );
                        function a(o) {
                            return function (a) {
                                return (function (o) {
                                    if (n)
                                        throw new TypeError(
                                            "Generator is already executing."
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                i &&
                                                    (r =
                                                        2 & o[0]
                                                            ? i.return
                                                            : o[0]
                                                            ? i.throw ||
                                                              ((r = i.return) &&
                                                                  r.call(i),
                                                              0)
                                                            : i.next) &&
                                                    !(r = r.call(i, o[1])).done)
                                            )
                                                return r;
                                            switch (
                                                ((i = 0),
                                                r && (o = [2 & o[0], r.value]),
                                                o[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    r = o;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: o[1],
                                                            done: !1,
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (i = o[1]),
                                                        (o = [0]);
                                                    continue;
                                                case 7:
                                                    (o = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !(r =
                                                            (r = s.trys)
                                                                .length > 0 &&
                                                            r[r.length - 1]) &&
                                                        (6 === o[0] ||
                                                            2 === o[0])
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === o[0] &&
                                                        (!r ||
                                                            (o[1] > r[0] &&
                                                                o[1] < r[3]))
                                                    ) {
                                                        s.label = o[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === o[0] &&
                                                        s.label < r[1]
                                                    ) {
                                                        (s.label = r[1]),
                                                            (r = o);
                                                        break;
                                                    }
                                                    if (r && s.label < r[2]) {
                                                        (s.label = r[2]),
                                                            s.ops.push(o);
                                                        break;
                                                    }
                                                    r[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            o = e.call(t, s);
                                        } catch (t) {
                                            (o = [6, t]), (i = 0);
                                        } finally {
                                            n = r = 0;
                                        }
                                    if (5 & o[0]) throw o[1];
                                    return {
                                        value: o[0] ? o[1] : void 0,
                                        done: !0,
                                    };
                                })([o, a]);
                            };
                        }
                    };
            e.__esModule = !0;
            var o = (function () {
                function t(t, e) {
                    (this.apiUrl =
                        "https://inputtools.google.com/request?text="),
                        (this.language = "ne"),
                        (this.transliterationProvider = t),
                        (this.language = e);
                }
                return (
                    (t.prototype.getSuggestions = function (t) {
                        return i(this, void 0, void 0, function () {
                            var e, n, i, o;
                            return r(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return (
                                            (e = new Date()),
                                            this.transliterationProvider &&
                                                (this.transliterationProvider.lastApiUpdate =
                                                    e),
                                            "" === t
                                                ? [3, 3]
                                                : ((n =
                                                      this.apiUrl +
                                                      t +
                                                      "&itc=" +
                                                      this.language +
                                                      "-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8"),
                                                  [4, fetch(n)])
                                        );
                                    case 1:
                                        return [4, r.sent().json()];
                                    case 2:
                                        if (
                                            (i = r.sent()).length > 0 &&
                                            i[1].length > 0 &&
                                            i[1][0].length > 0 &&
                                            i[1][0][1].length > 0
                                        )
                                            return (
                                                ((o = i[1][0][1])[5] = t),
                                                [
                                                    2,
                                                    {
                                                        values: o,
                                                        apiCallDate: e,
                                                    },
                                                ]
                                            );
                                        r.label = 3;
                                    case 3:
                                        return [2];
                                }
                            });
                        });
                    }),
                    t
                );
            })();
            e.ApiClient = o;
        },
        function (t, e, n) {
            var i = n(7);
            "string" == typeof i && (i = [[t.i, i, ""]]);
            var r = { hmr: !0, transform: void 0, insertInto: void 0 };
            n(9)(i, r);
            i.locals && (t.exports = i.locals);
        },
        function (t, e, n) {
            (t.exports = n(8)(!1)).push([
                t.i,
                '.lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px; }\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: white; }\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px; }\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px; }\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px; }\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px; }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(19px, 0); } }\n\n.ks-input-suggestions {\n  background-color: white;\n  color: #525252;\n  padding: 5px;\n  border-radius: 5px;\n  border-style: solid;\n  border-color: #91bf86;\n  border-width: 0.5px;\n  overflow: auto;\n  box-shadow: 0px 2px 4px #91bf86; }\n  .ks-input-suggestions .suggestion-list {\n    padding: 5px;\n    padding-top: 15px; }\n    .ks-input-suggestions .suggestion-list div {\n      padding: 5px;\n      padding-left: 10px; }\n    .ks-input-suggestions .suggestion-list .suggestion-div.active {\n      background-color: #daf2d4;\n      border-radius: 5px;\n      color: black; }\n    .ks-input-suggestions .suggestion-list .suggestion-div:hover {\n      background-color: #daf2d4;\n      color: black;\n      cursor: pointer; }\n  .ks-input-suggestions .suggestion-input {\n    color: #131415;\n    font-family: "Open Sans", sans-serif;\n    font-weight: 700;\n    font-size: 17px;\n    background-color: white;\n    border: 0px;\n    margin-left: 12px; }\n  .ks-input-suggestions .suggestion-input:focus {\n    outline-width: 0; }\n  .ks-input-suggestions .loading-box {\n    text-align: center;\n    height: 20px;\n    position: absolute;\n    right: 10px;\n    left: 10px;\n    top: -5px; }\n\n.hidden {\n  display: none; }\n',
                "",
            ]);
        },
        function (t, e, n) {
            "use strict";
            t.exports = function (t) {
                var e = [];
                return (
                    (e.toString = function () {
                        return this.map(function (e) {
                            var n = (function (t, e) {
                                var n = t[1] || "",
                                    i = t[3];
                                if (!i) return n;
                                if (e && "function" == typeof btoa) {
                                    var r =
                                            ((s = i),
                                            "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                                                btoa(
                                                    unescape(
                                                        encodeURIComponent(
                                                            JSON.stringify(s)
                                                        )
                                                    )
                                                ) +
                                                " */"),
                                        o = i.sources.map(function (t) {
                                            return (
                                                "/*# sourceURL=" +
                                                i.sourceRoot +
                                                t +
                                                " */"
                                            );
                                        });
                                    return [n].concat(o).concat([r]).join("\n");
                                }
                                var s;
                                return [n].join("\n");
                            })(e, t);
                            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
                        }).join("");
                    }),
                    (e.i = function (t, n) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        for (var i = {}, r = 0; r < this.length; r++) {
                            var o = this[r][0];
                            null != o && (i[o] = !0);
                        }
                        for (r = 0; r < t.length; r++) {
                            var s = t[r];
                            (null != s[0] && i[s[0]]) ||
                                (n && !s[2]
                                    ? (s[2] = n)
                                    : n &&
                                      (s[2] = "(" + s[2] + ") and (" + n + ")"),
                                e.push(s));
                        }
                    }),
                    e
                );
            };
        },
        function (t, e, n) {
            var i,
                r,
                o = {},
                s =
                    ((i = function () {
                        return (
                            window && document && document.all && !window.atob
                        );
                    }),
                    function () {
                        return (
                            void 0 === r && (r = i.apply(this, arguments)), r
                        );
                    }),
                a = (function (t) {
                    var e = {};
                    return function (t, n) {
                        if ("function" == typeof t) return t();
                        if (void 0 === e[t]) {
                            var i = function (t, e) {
                                return e
                                    ? e.querySelector(t)
                                    : document.querySelector(t);
                            }.call(this, t, n);
                            if (
                                window.HTMLIFrameElement &&
                                i instanceof window.HTMLIFrameElement
                            )
                                try {
                                    i = i.contentDocument.head;
                                } catch (t) {
                                    i = null;
                                }
                            e[t] = i;
                        }
                        return e[t];
                    };
                })(),
                u = null,
                l = 0,
                d = [],
                c = n(10);
            function p(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n],
                        r = o[i.id];
                    if (r) {
                        r.refs++;
                        for (var s = 0; s < r.parts.length; s++)
                            r.parts[s](i.parts[s]);
                        for (; s < i.parts.length; s++)
                            r.parts.push(y(i.parts[s], e));
                    } else {
                        var a = [];
                        for (s = 0; s < i.parts.length; s++)
                            a.push(y(i.parts[s], e));
                        o[i.id] = { id: i.id, refs: 1, parts: a };
                    }
                }
            }
            function f(t, e) {
                for (var n = [], i = {}, r = 0; r < t.length; r++) {
                    var o = t[r],
                        s = e.base ? o[0] + e.base : o[0],
                        a = { css: o[1], media: o[2], sourceMap: o[3] };
                    i[s]
                        ? i[s].parts.push(a)
                        : n.push((i[s] = { id: s, parts: [a] }));
                }
                return n;
            }
            function h(t, e) {
                var n = a(t.insertInto);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                    );
                var i = d[d.length - 1];
                if ("top" === t.insertAt)
                    i
                        ? i.nextSibling
                            ? n.insertBefore(e, i.nextSibling)
                            : n.appendChild(e)
                        : n.insertBefore(e, n.firstChild),
                        d.push(e);
                else if ("bottom" === t.insertAt) n.appendChild(e);
                else {
                    if ("object" != typeof t.insertAt || !t.insertAt.before)
                        throw new Error(
                            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                        );
                    var r = a(t.insertAt.before, n);
                    n.insertBefore(e, r);
                }
            }
            function g(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = d.indexOf(t);
                e >= 0 && d.splice(e, 1);
            }
            function v(t) {
                var e = document.createElement("style");
                if (
                    (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                    void 0 === t.attrs.nonce)
                ) {
                    var i = (function () {
                        0;
                        return n.nc;
                    })();
                    i && (t.attrs.nonce = i);
                }
                return b(e, t.attrs), h(t, e), e;
            }
            function b(t, e) {
                Object.keys(e).forEach(function (n) {
                    t.setAttribute(n, e[n]);
                });
            }
            function y(t, e) {
                var n, i, r, o;
                if (e.transform && t.css) {
                    if (
                        !(o =
                            "function" == typeof e.transform
                                ? e.transform(t.css)
                                : e.transform.default(t.css))
                    )
                        return function () {};
                    t.css = o;
                }
                if (e.singleton) {
                    var s = l++;
                    (n = u || (u = v(e))),
                        (i = w.bind(null, n, s, !1)),
                        (r = w.bind(null, n, s, !0));
                } else
                    t.sourceMap &&
                    "function" == typeof URL &&
                    "function" == typeof URL.createObjectURL &&
                    "function" == typeof URL.revokeObjectURL &&
                    "function" == typeof Blob &&
                    "function" == typeof btoa
                        ? ((n = (function (t) {
                              var e = document.createElement("link");
                              return (
                                  void 0 === t.attrs.type &&
                                      (t.attrs.type = "text/css"),
                                  (t.attrs.rel = "stylesheet"),
                                  b(e, t.attrs),
                                  h(t, e),
                                  e
                              );
                          })(e)),
                          (i = function (t, e, n) {
                              var i = n.css,
                                  r = n.sourceMap,
                                  o = void 0 === e.convertToAbsoluteUrls && r;
                              (e.convertToAbsoluteUrls || o) && (i = c(i));
                              r &&
                                  (i +=
                                      "\n/*# sourceMappingURL=data:application/json;base64," +
                                      btoa(
                                          unescape(
                                              encodeURIComponent(
                                                  JSON.stringify(r)
                                              )
                                          )
                                      ) +
                                      " */");
                              var s = new Blob([i], { type: "text/css" }),
                                  a = t.href;
                              (t.href = URL.createObjectURL(s)),
                                  a && URL.revokeObjectURL(a);
                          }.bind(null, n, e)),
                          (r = function () {
                              g(n), n.href && URL.revokeObjectURL(n.href);
                          }))
                        : ((n = v(e)),
                          (i = function (t, e) {
                              var n = e.css,
                                  i = e.media;
                              i && t.setAttribute("media", i);
                              if (t.styleSheet) t.styleSheet.cssText = n;
                              else {
                                  for (; t.firstChild; )
                                      t.removeChild(t.firstChild);
                                  t.appendChild(document.createTextNode(n));
                              }
                          }.bind(null, n)),
                          (r = function () {
                              g(n);
                          }));
                return (
                    i(t),
                    function (e) {
                        if (e) {
                            if (
                                e.css === t.css &&
                                e.media === t.media &&
                                e.sourceMap === t.sourceMap
                            )
                                return;
                            i((t = e));
                        } else r();
                    }
                );
            }
            t.exports = function (t, e) {
                if (
                    "undefined" != typeof DEBUG &&
                    DEBUG &&
                    "object" != typeof document
                )
                    throw new Error(
                        "The style-loader cannot be used in a non-browser environment"
                    );
                ((e = e || {}).attrs =
                    "object" == typeof e.attrs ? e.attrs : {}),
                    e.singleton ||
                        "boolean" == typeof e.singleton ||
                        (e.singleton = s()),
                    e.insertInto || (e.insertInto = "head"),
                    e.insertAt || (e.insertAt = "bottom");
                var n = f(t, e);
                return (
                    p(n, e),
                    function (t) {
                        for (var i = [], r = 0; r < n.length; r++) {
                            var s = n[r];
                            (a = o[s.id]).refs--, i.push(a);
                        }
                        t && p(f(t, e), e);
                        for (r = 0; r < i.length; r++) {
                            var a;
                            if (0 === (a = i[r]).refs) {
                                for (var u = 0; u < a.parts.length; u++)
                                    a.parts[u]();
                                delete o[a.id];
                            }
                        }
                    }
                );
            };
            var m,
                x =
                    ((m = []),
                    function (t, e) {
                        return (m[t] = e), m.filter(Boolean).join("\n");
                    });
            function w(t, e, n, i) {
                var r = n ? "" : i.css;
                if (t.styleSheet) t.styleSheet.cssText = x(e, r);
                else {
                    var o = document.createTextNode(r),
                        s = t.childNodes;
                    s[e] && t.removeChild(s[e]),
                        s.length ? t.insertBefore(o, s[e]) : t.appendChild(o);
                }
            }
        },
        function (t, e) {
            t.exports = function (t) {
                var e = "undefined" != typeof window && window.location;
                if (!e) throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t) return t;
                var n = e.protocol + "//" + e.host,
                    i = n + e.pathname.replace(/\/[^\/]*$/, "/");
                return t.replace(
                    /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                    function (t, e) {
                        var r,
                            o = e
                                .trim()
                                .replace(/^"(.*)"$/, function (t, e) {
                                    return e;
                                })
                                .replace(/^'(.*)'$/, function (t, e) {
                                    return e;
                                });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                            o
                        )
                            ? t
                            : ((r =
                                  0 === o.indexOf("//")
                                      ? o
                                      : 0 === o.indexOf("/")
                                      ? n + o
                                      : i + o.replace(/^\.\//, "")),
                              "url(" + JSON.stringify(r) + ")");
                    }
                );
            };
        },
    ]);
});