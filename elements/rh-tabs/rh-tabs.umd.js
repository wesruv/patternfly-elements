(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../rhelement/rhelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../rhelement/rhelement.umd'], factory) :
  (factory(global.RHElement));
}(this, (function (RHElement) { 'use strict';

  RHElement = RHElement && RHElement.hasOwnProperty('default') ? RHElement['default'] : RHElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /*
   * Copyright 2018 Red Hat, Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */

  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
      value: function value(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== "function") {
          throw new TypeError("predicate must be a function");
        }

        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];

        // 5. Let k be 0.
        var k = 0;

        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          // e. Increase k by 1.
          k++;
        }

        // 7. Return undefined.
        return undefined;
      },
      configurable: true,
      writable: true
    });
  }

  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, "findIndex", {
      value: function value(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== "function") {
          throw new TypeError("predicate must be a function");
        }

        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];

        // 5. Let k be 0.
        var k = 0;

        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return k.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return k;
          }
          // e. Increase k by 1.
          k++;
        }

        // 7. Return -1.
        return -1;
      },
      configurable: true,
      writable: true
    });
  }

  var KEYCODE = {
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    HOME: 36,
    END: 35
  };

  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  var RhTabs = function (_RHElement) {
    inherits(RhTabs, _RHElement);
    createClass(RhTabs, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  display: block; }\n\n.tabs {\n  --rh-tabs--border-color:          var(--rh-theme--color--surface--border, #dfdfdf);\n  display: flex;\n  border: 0;\n  border-bottom: var(--rh-theme--ui--border-width, 1px) var(--rh-theme--ui--border-style, solid) var(--rh-tabs--border-color); }\n\n.panels {\n  padding: 0;\n  padding-top: var(--rh-theme--container-padding, 1rem); }\n\n:host([vertical]) {\n  display: flex; }\n\n:host([vertical]) .tabs {\n  flex-direction: column;\n  width: 25%;\n  border: 0;\n  border-right: var(--rh-theme--ui--border-width, 1px) var(--rh-theme--ui--border-style, solid) var(--rh-tabs--border-color); }\n\n:host([vertical]) .tabs ::slotted(rh-tab) {\n  margin: 0 -1px 0 0;\n  border: var(--rh-theme--ui--border-width, 1px) var(--rh-theme--ui--border-style, solid) transparent;\n  border-right: 0; }\n\n:host([vertical]) .tabs ::slotted(rh-tab[aria-selected=\"true\"]) {\n  border-color: var(--rh-tabs--border-color);\n  border-right: 0; }\n\n:host([vertical]) .panels {\n  padding: 0;\n  padding-right: var(--rh-theme--container-padding, 1rem);\n  padding-left: calc(var(--rh-theme--container-padding, 1rem) * 2); }\n</style>\n<div class=\"tabs\">\n  <slot name=\"tab\"></slot>\n</div>\n<div class=\"panels\">\n  <slot name=\"panel\"></slot>\n</div>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-tabs.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-tabs.html";
      }
    }, {
      key: "selectedIndex",
      get: function get$$1() {
        return this.getAttribute("selected-index");
      },
      set: function set$$1(value) {
        this.setAttribute("selected-index", value);
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-tabs";
      }
    }, {
      key: "observedAttributes",
      get: function get$$1() {
        return ["vertical", "selected-index"];
      }
    }]);

    function RhTabs() {
      classCallCheck(this, RhTabs);

      var _this = possibleConstructorReturn(this, (RhTabs.__proto__ || Object.getPrototypeOf(RhTabs)).call(this, RhTabs));

      _this._linked = false;

      _this._onSlotChange = _this._onSlotChange.bind(_this);

      _this._tabSlot = _this.shadowRoot.querySelector('slot[name="tab"]');
      _this._panelSlot = _this.shadowRoot.querySelector('slot[name="panel"]');

      _this._tabSlot.addEventListener("slotchange", _this._onSlotChange);
      _this._panelSlot.addEventListener("slotchange", _this._onSlotChange);
      return _this;
    }

    createClass(RhTabs, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        get(RhTabs.prototype.__proto__ || Object.getPrototypeOf(RhTabs.prototype), "connectedCallback", this).call(this);

        this.addEventListener("keydown", this._onKeyDown);
        this.addEventListener("click", this._onClick);

        if (!this.hasAttribute("role")) {
          this.setAttribute("role", "tablist");
        }

        if (!this.hasAttribute("selected-index")) {
          this.selectedIndex = 0;
        }

        Promise.all([customElements.whenDefined(RhTab.tag), customElements.whenDefined(RhTabPanel.tag)]).then(function () {
          return _this2._linkPanels();
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener("keydown", this._onKeyDown);
        this.removeEventListener("click", this._onClick);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        var _this3 = this;

        switch (attr) {
          case "vertical":
            if (this.hasAttribute("vertical")) {
              this.setAttribute("aria-orientation", "vertical");
              this._allPanels().forEach(function (panel) {
                return panel.setAttribute("vertical", "");
              });
              this._allTabs().forEach(function (tab) {
                return tab.setAttribute("vertical", "");
              });
            } else {
              this.removeAttribute("aria-orientation");
              this._allPanels().forEach(function (panel) {
                return panel.removeAttribute("vertical");
              });
              this._allTabs().forEach(function (tab) {
                return tab.removeAttribute("vertical");
              });
            }
            break;

          case "selected-index":
            Promise.all([customElements.whenDefined(RhTab.tag), customElements.whenDefined(RhTabPanel.tag)]).then(function () {
              _this3._linkPanels();
              _this3.selectIndex(newValue);
            });
        }
      }
    }, {
      key: "select",
      value: function select(newTab) {
        if (!newTab) {
          return;
        }

        if (newTab.tagName.toLowerCase() !== "rh-tab") {
          console.warn(RhTabs.tag + ": the tab must be a rh-tab element");
          return;
        }

        this.selectedIndex = this._getTabIndex(newTab);
      }
    }, {
      key: "selectIndex",
      value: function selectIndex(_index) {
        if (_index === undefined) {
          return;
        }

        var index = parseInt(_index, 10);
        var tabs = this._allTabs();
        var tab = tabs[index];

        if (!tab) {
          console.warn(RhTabs.tag + ": tab " + _index + " does not exist");
          return;
        }

        this._selectTab(tab);
      }
    }, {
      key: "_onSlotChange",
      value: function _onSlotChange() {
        this._linked = false;
        this._linkPanels();
      }
    }, {
      key: "_linkPanels",
      value: function _linkPanels() {
        if (this._linked) {
          return;
        }

        var tabs = this._allTabs();

        tabs.forEach(function (tab) {
          var panel = tab.nextElementSibling;
          if (panel.tagName.toLowerCase() !== "rh-tab-panel") {
            console.warn(RhTabs.tag + ": tab #" + tab.id + " is not a sibling of a <rh-tab-panel>");
            return;
          }

          tab.setAttribute("aria-controls", panel.id);
          panel.setAttribute("aria-labelledby", tab.id);
        });

        this._linked = true;
      }
    }, {
      key: "_allPanels",
      value: function _allPanels() {
        return [].concat(toConsumableArray(this.querySelectorAll("rh-tab-panel")));
      }
    }, {
      key: "_allTabs",
      value: function _allTabs() {
        return [].concat(toConsumableArray(this.querySelectorAll("rh-tab")));
      }
    }, {
      key: "_panelForTab",
      value: function _panelForTab(tab) {
        var panelId = tab.getAttribute("aria-controls");
        return this.querySelector("#" + panelId);
      }
    }, {
      key: "_prevTab",
      value: function _prevTab() {
        var tabs = this._allTabs();
        var newIdx = tabs.findIndex(function (tab) {
          return tab.selected;
        }) - 1;
        return tabs[(newIdx + tabs.length) % tabs.length];
      }
    }, {
      key: "_firstTab",
      value: function _firstTab() {
        var tabs = this._allTabs();
        return tabs[0];
      }
    }, {
      key: "_lastTab",
      value: function _lastTab() {
        var tabs = this._allTabs();
        return tabs[tabs.length - 1];
      }
    }, {
      key: "_nextTab",
      value: function _nextTab() {
        var tabs = this._allTabs();
        var newIdx = tabs.findIndex(function (tab) {
          return tab.selected;
        }) + 1;
        return tabs[newIdx % tabs.length];
      }
    }, {
      key: "_getTabIndex",
      value: function _getTabIndex(_tab) {
        var tabs = this._allTabs();
        var index = tabs.findIndex(function (tab) {
          return tab.id === _tab.id;
        });
        return index;
      }
    }, {
      key: "reset",
      value: function reset() {
        var tabs = this._allTabs();
        var panels = this._allPanels();

        tabs.forEach(function (tab) {
          return tab.selected = false;
        });
        panels.forEach(function (panel) {
          return panel.hidden = true;
        });
      }
    }, {
      key: "_selectTab",
      value: function _selectTab(newTab) {
        this.reset();

        var newPanel = this._panelForTab(newTab);
        var newTabSelected = false;

        if (!newPanel) {
          throw new Error("No panel with id " + newPanel.id);
        }

        if (this.selected && this.selected !== newTab) {
          newTabSelected = true;

          this.dispatchEvent(new CustomEvent(RhTabs.tag + ":hidden-tab", {
            bubbles: true,
            detail: {
              tab: this.selected
            }
          }));
        }

        newTab.selected = true;
        newPanel.hidden = false;

        if (this._setFocus) {
          newTab.focus();
          this._setFocus = false;
        }

        var tabs = this._allTabs();
        var newIdx = tabs.findIndex(function (tab) {
          return tab.selected;
        });

        this.selected = newTab;

        if (newTabSelected) {
          this.dispatchEvent(new CustomEvent(RhTabs.tag + ":shown-tab", {
            bubbles: true,
            detail: {
              tab: this.selected
            }
          }));
        }
      }
    }, {
      key: "_onKeyDown",
      value: function _onKeyDown(event) {
        if (event.target.getAttribute("role") !== "tab") {
          return;
        }

        if (event.altKey) {
          return;
        }

        var newTab = void 0;

        switch (event.keyCode) {
          case KEYCODE.LEFT:
          case KEYCODE.UP:
            newTab = this._prevTab();
            break;

          case KEYCODE.RIGHT:
          case KEYCODE.DOWN:
            newTab = this._nextTab();
            break;

          case KEYCODE.HOME:
            newTab = this._firstTab();
            break;

          case KEYCODE.END:
            newTab = this._lastTab();
            break;

          default:
            return;
        }

        event.preventDefault();

        this.selectedIndex = this._getTabIndex(newTab);
        this._setFocus = true;
      }
    }, {
      key: "_onClick",
      value: function _onClick(event) {
        if (event.target.getAttribute("role") !== "tab") {
          return;
        }

        this.selectedIndex = this._getTabIndex(event.target);
      }
    }]);
    return RhTabs;
  }(RHElement);

  var RhTab = function (_RHElement2) {
    inherits(RhTab, _RHElement2);
    createClass(RhTab, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  --rh-tabs--main:         transparent;\n  --rh-tabs--aux:          var(--rh-theme--color--surface--lightest--text, #333);\n  --rh-tabs--link:         var(--rh-theme--color--surface--lightest--link, #06c);\n  --rh-tabs--focus:        var(--rh-theme--color--surface--lightest--link--focus, #003366);\n  position: relative;\n  display: block;\n  margin: 0 0 -1px;\n  padding-top: var(--rh-theme--container-padding, 1rem);\n  padding-right: calc(var(--rh-theme--container-padding, 1rem) * 3.375);\n  padding-bottom: calc(var(--rh-theme--container-padding, 1rem) * 1.5);\n  padding-left: var(--rh-theme--container-padding, 1rem);\n  border: var(--rh-theme--ui--border-width, 1px) var(--rh-theme--ui--border-style, solid) transparent;\n  border-bottom: 0;\n  background-color: var(--rh-tabs--main);\n  color: var(--rh-tabs--aux);\n  text-transform: var(--rh-tabs__tab--TextTransform, none);\n  font-weight: var(--rh-theme--font-weight--normal, 500);\n  white-space: nowrap;\n  cursor: pointer; }\n\n:host([aria-selected=\"true\"]) {\n  --rh-tabs--main:         var(--rh-theme--color--surface--lightest, #fff);\n  border-color: var(--rh-theme--color--surface--border, #dfdfdf);\n  border-bottom: 0; }\n\n.indicator {\n  position: absolute;\n  bottom: 12px;\n  left: auto;\n  display: var(--rh-tabs__indicator--Display, block);\n  height: var(--rh-tabs__indicator--Height, 4px);\n  width: var(--rh-tabs__indicator--Width, 22px);\n  background-color: var(--rh-theme--color--surface--border--darkest, #464646); }\n\n:host(:hover) .indicator {\n  background-color: var(--rh-tabs--link); }\n\n:host([aria-selected=\"true\"]) .indicator,\n:host([aria-selected=\"true\"]:hover) .indicator {\n  background-color: var(--rh-tabs--link); }\n\n:host(:focus),\n:host(:focus-visible) {\n  outline: var(--rh-theme--ui--focus-outline-width, 1px) var(--rh-theme--ui--focus-outline-style, solid) var(--rh-tabs--focus); }\n</style>\n<slot></slot>\n<div class=\"indicator\"></div>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-tab.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-tab.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-tab";
      }
    }, {
      key: "observedAttributes",
      get: function get$$1() {
        return ["aria-selected"];
      }
    }]);

    function RhTab() {
      classCallCheck(this, RhTab);

      var _this4 = possibleConstructorReturn(this, (RhTab.__proto__ || Object.getPrototypeOf(RhTab)).call(this, RhTab));

      if (!_this4.id) {
        _this4.id = RhTab.tag + "-" + generateId();
      }
      return _this4;
    }

    createClass(RhTab, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(RhTab.prototype.__proto__ || Object.getPrototypeOf(RhTab.prototype), "connectedCallback", this).call(this);

        this.setAttribute("role", "tab");
        this.setAttribute("aria-selected", "false");
        this.setAttribute("tabindex", -1);

        if (this.parentNode.hasAttribute("vertical")) {
          this.setAttribute("vertical", "");
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        var value = Boolean(this.selected);
        this.setAttribute("tabindex", value ? 0 : -1);
      }
    }, {
      key: "selected",
      set: function set$$1(value) {
        value = Boolean(value);
        this.setAttribute("aria-selected", value);
      },
      get: function get$$1() {
        return this.getAttribute("aria-selected") === "true" ? true : false;
      }
    }]);
    return RhTab;
  }(RHElement);

  var RhTabPanel = function (_RHElement3) {
    inherits(RhTabPanel, _RHElement3);
    createClass(RhTabPanel, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }\n</style>\n<slot></slot>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-tab-panel.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-tab-panel.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-tab-panel";
      }
    }]);

    function RhTabPanel() {
      classCallCheck(this, RhTabPanel);

      var _this5 = possibleConstructorReturn(this, (RhTabPanel.__proto__ || Object.getPrototypeOf(RhTabPanel)).call(this, RhTabPanel));

      if (!_this5.id) {
        _this5.id = RhTabPanel.tag + "-" + generateId();
      }
      return _this5;
    }

    createClass(RhTabPanel, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(RhTabPanel.prototype.__proto__ || Object.getPrototypeOf(RhTabPanel.prototype), "connectedCallback", this).call(this);

        this.setAttribute("role", "tabpanel");
        this.setAttribute("tabindex", 0);
      }
    }]);
    return RhTabPanel;
  }(RHElement);

  RHElement.create(RhTab);
  RHElement.create(RhTabPanel);
  RHElement.create(RhTabs);

})));
//# sourceMappingURL=rh-tabs.umd.js.map
