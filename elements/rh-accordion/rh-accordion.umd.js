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
      }
    });
  }

  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  var RhAccordion = function (_RHElement) {
    inherits(RhAccordion, _RHElement);
    createClass(RhAccordion, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  margin: 0; }\n</style>\n<slot></slot>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-accordion.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-accordion.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-accordion";
      }
    }, {
      key: "observedAttributes",
      get: function get$$1() {
        return ["theme", "color"];
      }
    }, {
      key: "cascadingAttributes",
      get: function get$$1() {
        return {
          color: "rh-accordion-header"
        };
      }
    }]);

    function RhAccordion() {
      classCallCheck(this, RhAccordion);
      return possibleConstructorReturn(this, (RhAccordion.__proto__ || Object.getPrototypeOf(RhAccordion)).call(this, RhAccordion));
    }

    createClass(RhAccordion, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(RhAccordion.prototype.__proto__ || Object.getPrototypeOf(RhAccordion.prototype), "connectedCallback", this).call(this);

        this.setAttribute("role", "presentation");
        this.setAttribute("defined", "");

        this.addEventListener(RhAccordion.tag + ":change", this._changeHandler);
        this.addEventListener("keydown", this._keydownHandler);

        Promise.all([customElements.whenDefined(RhAccordionHeader.tag), customElements.whenDefined(RhAccordionPanel.tag)]).then(this._linkPanels());
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener(RhAccordion.tag + ":change", this._changeHandler);
        this.removeEventListener("keydown", this._keydownHandler);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldVal, newVal) {
        get(RhAccordion.prototype.__proto__ || Object.getPrototypeOf(RhAccordion.prototype), "attributeChangedCallback", this).call(this, attr, oldVal, newVal);

        if (attr === "color") {
          var headers = this.querySelectorAll(RhAccordionHeader.tag);

          if (newVal === "striped") {
            [].concat(toConsumableArray(headers)).forEach(function (header, index) {
              var headerClass = index % 2 ? "even" : "odd";
              header.classList.add(headerClass);
            });
          } else {
            [].concat(toConsumableArray(headers)).forEach(function (header, index) {
              header.classList.remove("even", "odd");
            });
          }
        }
      }
    }, {
      key: "toggle",
      value: function toggle(index) {
        var headers = this._allHeaders();
        var panels = this._allPanels();
        var header = headers[index];
        var panel = panels[index];

        if (!header || !panel) {
          return;
        }

        if (!header.expanded) {
          this._expandHeader(header);
          this._expandPanel(panel);
        } else {
          this._collapseHeader(header);
          this._collapsePanel(panel);
        }
      }
    }, {
      key: "expand",
      value: function expand(index) {
        var headers = this._allHeaders();
        var panels = this._allPanels();
        var header = headers[index];
        var panel = panels[index];

        if (!header || !panel) {
          return;
        }

        this._expandHeader(header);
        this._expandPanel(panel);
      }
    }, {
      key: "expandAll",
      value: function expandAll() {
        var _this2 = this;

        var headers = this._allHeaders();
        var panels = this._allPanels();

        headers.forEach(function (header) {
          return _this2._expandHeader(header);
        });
        panels.forEach(function (panel) {
          return _this2._expandPanel(panel);
        });
      }
    }, {
      key: "collapse",
      value: function collapse(index) {
        var headers = this._allHeaders();
        var panels = this._allPanels();
        var header = headers[index];
        var panel = panels[index];

        if (!header || !panel) {
          return;
        }

        this._collapseHeader(header);
        this._collapsePanel(panel);
      }
    }, {
      key: "collapseAll",
      value: function collapseAll() {
        var _this3 = this;

        var headers = this._allHeaders();
        var panels = this._allPanels();

        headers.forEach(function (header) {
          return _this3._collapseHeader(header);
        });
        panels.forEach(function (panel) {
          return _this3._collapsePanel(panel);
        });
      }
    }, {
      key: "_linkPanels",
      value: function _linkPanels() {
        var _this4 = this;

        var headers = this._allHeaders();
        headers.forEach(function (header) {
          var panel = _this4._panelForHeader(header);

          header.setAttribute("aria-controls", panel.id);
          panel.setAttribute("aria-labelledby", header.id);
        });
      }
    }, {
      key: "_changeHandler",
      value: function _changeHandler(evt) {
        if (this.classList.contains("animating")) {
          return;
        }

        var header = evt.target;
        var panel = evt.target.nextElementSibling;

        if (evt.detail.expanded) {
          this._expandHeader(header);
          this._expandPanel(panel);
        } else {
          this._collapseHeader(header);
          this._collapsePanel(panel);
        }
      }
    }, {
      key: "_toggle",
      value: function _toggle(header, panel) {}
    }, {
      key: "_expandHeader",
      value: function _expandHeader(header) {
        header.expanded = true;
      }
    }, {
      key: "_expandPanel",
      value: function _expandPanel(panel) {
        if (panel.expanded) {
          return;
        }

        panel.expanded = true;

        var height = panel.getBoundingClientRect().height;
        this._animate(panel, 0, height);
      }
    }, {
      key: "_collapseHeader",
      value: function _collapseHeader(header) {
        header.expanded = false;
      }
    }, {
      key: "_collapsePanel",
      value: function _collapsePanel(panel) {
        if (!panel.expanded) {
          return;
        }

        var height = panel.getBoundingClientRect().height;
        panel.expanded = false;

        this._animate(panel, height, 0);
      }
    }, {
      key: "_animate",
      value: function _animate(panel, start, end) {
        var _this5 = this;

        panel.classList.add("animating");
        panel.style.height = start + "px";

        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            panel.style.height = end + "px";
            panel.classList.add("animating");
            panel.addEventListener("transitionend", _this5._transitionEndHandler);
          });
        });
      }
    }, {
      key: "_keydownHandler",
      value: function _keydownHandler(evt) {
        var currentHeader = evt.target;

        if (!this._isHeader(currentHeader)) {
          return;
        }

        var newHeader = void 0;

        switch (evt.key) {
          case "ArrowDown":
          case "Down":
          case "ArrowRight":
          case "Right":
            newHeader = this._nextHeader();
            break;
          case "ArrowUp":
          case "Up":
          case "ArrowLeft":
          case "Left":
            newHeader = this._previousHeader();
            break;
          case "Home":
            newHeader = this._firstHeader();
            break;
          case "End":
            newHeader = this._lastHeader();
            break;
          default:
            return;
        }

        newHeader.shadowRoot.querySelector("button").focus();
      }
    }, {
      key: "_transitionEndHandler",
      value: function _transitionEndHandler(evt) {
        evt.target.style.height = "";
        evt.target.classList.remove("animating");
        evt.target.removeEventListener("transitionend", this._transitionEndHandler);
      }
    }, {
      key: "_allHeaders",
      value: function _allHeaders() {
        return [].concat(toConsumableArray(this.querySelectorAll(RhAccordionHeader.tag)));
      }
    }, {
      key: "_allPanels",
      value: function _allPanels() {
        return [].concat(toConsumableArray(this.querySelectorAll(RhAccordionPanel.tag)));
      }
    }, {
      key: "_panelForHeader",
      value: function _panelForHeader(header) {
        var next = header.nextElementSibling;

        if (next.tagName.toLowerCase() !== RhAccordionPanel.tag) {
          console.error(RhAccordion.tag + ": Sibling element to a header needs to be a panel");
          return;
        }

        return next;
      }
    }, {
      key: "_previousHeader",
      value: function _previousHeader() {
        var headers = this._allHeaders();
        var newIndex = headers.findIndex(function (header) {
          return header === document.activeElement;
        }) - 1;
        return headers[(newIndex + headers.length) % headers.length];
      }
    }, {
      key: "_nextHeader",
      value: function _nextHeader() {
        var headers = this._allHeaders();
        var newIndex = headers.findIndex(function (header) {
          return header === document.activeElement;
        }) + 1;
        return headers[newIndex % headers.length];
      }
    }, {
      key: "_firstHeader",
      value: function _firstHeader() {
        var headers = this._allHeaders();
        return headers[0];
      }
    }, {
      key: "_lastHeader",
      value: function _lastHeader() {
        var headers = this._allHeaders();
        return headers[headers.length - 1];
      }
    }, {
      key: "_isHeader",
      value: function _isHeader(element) {
        return element.tagName.toLowerCase() === RhAccordionHeader.tag;
      }
    }]);
    return RhAccordion;
  }(RHElement);

  var RhAccordionHeader = function (_RHElement2) {
    inherits(RhAccordionHeader, _RHElement2);
    createClass(RhAccordionHeader, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  --rh-accordion--main:         var(--rh-theme--color--surface--lighter, #ececec);\n  --rh-accordion--aux:          var(--rh-theme--color--surface--lighter--text, #333);\n  --rh-accordion--focus:        var(--rh-theme--color--surface--lighter--link--focus, #003366);\n  display: block;\n  background: var(--rh-accordion--main);\n  color: var(--rh-accordion--aux); }\n  :host button {\n    padding: calc(var(--rh-theme--container-spacer, 1rem) * 0.75);\n    margin: 0;\n    width: 100%;\n    height: auto;\n    border: 1px solid transparent;\n    font-family: inherit;\n    font-size: var(--rh-theme--font-size, 16px);\n    line-height: 1.5;\n    text-align: left;\n    background: none;\n    cursor: pointer;\n    color: var(--rh-accordion--aux); }\n    :host button:focus {\n      outline: 1px solid var(--rh-accordion--focus); }\n    :host button::-moz-focus-inner {\n      border: 0; }\n    :host button[aria-expanded] {\n      position: relative;\n      display: block;\n      font-weight: normal;\n      padding-left: calc(var(--rh-theme--container-spacer, 1rem) * 2.5); }\n    :host button[aria-expanded=\"false\"]::before {\n      content: \"\";\n      position: absolute;\n      left: var(--rh-theme--container-spacer, 1rem);\n      top: calc((var(--rh-theme--container-spacer, 1rem) * 0.75) + 0.5935em);\n      display: block;\n      border-style: solid;\n      border-width: 0.15em 0.15em 0 0;\n      height: 0.313em;\n      width: 0.313em;\n      text-align: center;\n      transition: transform 0.15s;\n      transform: rotate(45deg); }\n    :host button[aria-expanded=\"true\"]::before {\n      content: \"\";\n      position: absolute;\n      left: var(--rh-theme--container-spacer, 1rem);\n      top: calc((var(--rh-theme--container-spacer, 1rem) * 0.75) + 0.5935em);\n      display: block;\n      width: 0.313em;\n      height: 0.313em;\n      border-style: solid;\n      border-width: 0.15em 0.15em 0 0;\n      text-align: center;\n      transition: all 0.15s;\n      transform: rotate(135deg); }\n\n:host(.animating) {\n  transition: transform 0.3s var(--rh-theme--animation-timing, cubic-bezier(0.465, 0.183, 0.153, 0.946)); }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 1px; }\n\n:host([color=\"lightest\"]),\n:host([color=\"striped\"].even) {\n  --rh-accordion--main:         var(--rh-theme--color--surface--lightest, #fff);\n  --rh-accordion--aux:          var(--rh-theme--color--surface--lightest--text, #333);\n  --rh-accordion--focus:        var(--rh-theme--color--surface--lightest--link--focus, #003366); }\n  :host([color=\"lightest\"]) button[aria-expanded=\"true\"],\n  :host([color=\"striped\"].even) button[aria-expanded=\"true\"] {\n    border-top-color: var(--rh-theme--color--surface--border--lightest, #ececec);\n    border-left-color: var(--rh-theme--color--surface--border--lightest, #ececec);\n    border-right-color: var(--rh-theme--color--surface--border--lightest, #ececec); }\n\n:host([color=\"base\"]) {\n  --rh-accordion--main:         var(--rh-theme--color--surface--base, #dfdfdf);\n  --rh-accordion--aux:          var(--rh-theme--color--surface--base--text, #333);\n  --rh-accordion--focus:        var(--rh-theme--color--surface--base--link--focus, #00305b); }\n\n:host([color=\"dark\"]) {\n  --rh-accordion--main:         var(--rh-theme--color--surface--darker, #464646);\n  --rh-accordion--aux:          var(--rh-theme--color--surface--darker--text, #fff);\n  --rh-accordion--focus:        var(--rh-theme--color--surface--darker--link--focus, #cce6ff); }\n\n:host([color=\"darkest\"]) {\n  --rh-accordion--main:         var(--rh-theme--color--surface--darkest, #131313);\n  --rh-accordion--aux:          var(--rh-theme--color--surface--darkest--text, #fff);\n  --rh-accordion--focus:        var(--rh-theme--color--surface--darkest--link--focus, #cce6ff); }\n\n:host([color=\"accent\"]) {\n  --rh-accordion--main:         var(--rh-theme--color--surface--accent, #fe460d);\n  --rh-accordion--aux:          var(--rh-theme--color--surface--accent--text, #fff);\n  --rh-accordion--focus:        var(--rh-theme--color--surface--accent--link--focus, #cce6ff); }\n\n:host([color=\"complement\"]) {\n  --rh-accordion--main:         var(--rh-theme--color--surface--complement, #0477a4);\n  --rh-accordion--aux:          var(--rh-theme--color--surface--complement--text, #fff);\n  --rh-accordion--focus:        var(--rh-theme--color--surface--complement--link--focus, #cce6ff); }\n</style>\n<button aria-expanded=\"false\" role=\"tab\"></button>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-accordion-header.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-accordion-header.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-accordion-header";
      }
    }, {
      key: "observedAttributes",
      get: function get$$1() {
        return ["aria-expanded"];
      }
    }]);

    function RhAccordionHeader() {
      classCallCheck(this, RhAccordionHeader);

      var _this6 = possibleConstructorReturn(this, (RhAccordionHeader.__proto__ || Object.getPrototypeOf(RhAccordionHeader)).call(this, RhAccordionHeader));

      _this6._clickHandler = _this6._clickHandler.bind(_this6);
      return _this6;
    }

    createClass(RhAccordionHeader, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(RhAccordionHeader.prototype.__proto__ || Object.getPrototypeOf(RhAccordionHeader.prototype), "connectedCallback", this).call(this);

        if (!this.hasAttribute("role")) {
          this.setAttribute("role", "header");
        }

        if (!this.id) {
          this.id = RhAccordionHeader.tag + "-" + generateId();
        }

        this.button = this.shadowRoot.querySelector("button");

        var child = this.children[0];
        var isHeaderTag = false;

        if (child) {
          switch (child.tagName) {
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
              isHeaderTag = true;
              break;
          }

          var wrapperTag = document.createElement(child.tagName);
          this.button.innerText = child.innerText;

          wrapperTag.appendChild(this.button);
          this.shadowRoot.appendChild(wrapperTag);
        } else {
          this.button.innerText = this.textContent.trim();
        }

        if (!isHeaderTag) {
          console.warn(RhAccordionHeader.tag + ": The first child in the light DOM must be a Header level tag (h1, h2, h3, h4, h5, or h6)");
        }

        this.addEventListener("click", this._clickHandler);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener("click", this._clickHandler);
      }
    }, {
      key: "_clickHandler",
      value: function _clickHandler(event) {
        this.dispatchEvent(new CustomEvent(RhAccordion.tag + ":change", {
          detail: { expanded: !this.expanded },
          bubbles: true
        }));
      }
    }, {
      key: "expanded",
      get: function get$$1() {
        return this.hasAttribute("aria-expanded");
      },
      set: function set$$1(val) {
        val = Boolean(val);

        if (val) {
          this.setAttribute("aria-expanded", true);
          this.button.setAttribute("aria-expanded", true);
        } else {
          this.removeAttribute("aria-expanded");
          this.button.setAttribute("aria-expanded", false);
        }
      }
    }]);
    return RhAccordionHeader;
  }(RHElement);

  var RhAccordionPanel = function (_RHElement3) {
    inherits(RhAccordionPanel, _RHElement3);
    createClass(RhAccordionPanel, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  display: none;\n  overflow: hidden;\n  background: var(--rh-theme--color--surface--lightest, #fff);\n  will-change: height; }\n\n:host([expanded]) {\n  display: block;\n  position: relative; }\n\n:host(.animating) {\n  display: block;\n  transition: height 0.3s ease-in-out; }\n\n.container {\n  margin: 0 1px;\n  border: 1px solid var(--rh-theme--color--surface--border--lightest, #ececec);\n  border-top: none;\n  padding: var(--rh-theme--container-spacer, 1rem); }\n</style>\n<div tabindex=\"-1\" role=\"tabpanel\">\n  <div class=\"container\">\n    <slot></slot>\n  </div>\n</div>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-accordion-panel.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-accordion-panel.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-accordion-panel";
      }
    }]);

    function RhAccordionPanel() {
      classCallCheck(this, RhAccordionPanel);
      return possibleConstructorReturn(this, (RhAccordionPanel.__proto__ || Object.getPrototypeOf(RhAccordionPanel)).call(this, RhAccordionPanel));
    }

    createClass(RhAccordionPanel, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(RhAccordionPanel.prototype.__proto__ || Object.getPrototypeOf(RhAccordionPanel.prototype), "connectedCallback", this).call(this);

        if (!this.hasAttribute("role")) {
          this.setAttribute("role", "region");
        }

        if (!this.id) {
          this.id = RhAccordionPanel.tag + "-" + generateId();
        }
      }
    }, {
      key: "expanded",
      get: function get$$1() {
        return this.hasAttribute("expanded");
      },
      set: function set$$1(val) {
        var value = Boolean(val);

        if (value) {
          this.setAttribute("expanded", "");
        } else {
          this.removeAttribute("expanded");
        }
      }
    }]);
    return RhAccordionPanel;
  }(RHElement);

  RHElement.create(RhAccordionHeader);
  RHElement.create(RhAccordionPanel);
  RHElement.create(RhAccordion);

})));
//# sourceMappingURL=rh-accordion.umd.js.map
