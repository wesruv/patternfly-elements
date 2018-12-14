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

  var templateId = "rh-icon-head";
  if (!document.getElementById(templateId)) {
    var cpRHIconTemplate = document.createElement("div");

    cpRHIconTemplate.setAttribute("style", "display: none;");
    cpRHIconTemplate.setAttribute("id", templateId);

    cpRHIconTemplate.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>";
    document.head.appendChild(cpRHIconTemplate);
  }

  var RhIcon = function (_RHElement) {
    inherits(RhIcon, _RHElement);
    createClass(RhIcon, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  --rh-icon--spacing:                 var(--rh-theme--container-spacer, 1rem);\n  --rh-icon--size:                    var(--rh-theme--icon-size, 1em);\n  --rh-icon--color--bg:               transparent;\n  --rh-icon--color--border:           transparent;\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 50%;\n  background: var(--rh-icon--color--bg);\n  border: var(--rh-icon--color--border); }\n  :host,\n  :host svg {\n    width: 1em;\n    height: 1em; }\n  :host svg {\n    fill: var(--rh-broadcasted--color--text); }\n  :host([data-block]) {\n    display: block;\n    margin-bottom: var(--rh-icon--spacing);\n    margin-top: var(--rh-icon--spacing); }\n    :host([data-block]):first-child {\n      margin-top: 0; }\n\n:host([size=\"2x\"]),\n:host([size=\"2x\"]) svg {\n  width: 2em;\n  height: 2em; }\n\n:host([size=\"3x\"]),\n:host([size=\"3x\"]) svg {\n  width: 3em;\n  height: 3em; }\n\n:host([size=\"4x\"]),\n:host([size=\"4x\"]) svg {\n  width: 4em;\n  height: 4em; }\n\n:host([size=\"xl\"]),\n:host([size=\"xl\"]) svg {\n  width: 100px;\n  height: 100px; }\n\n:host([size=\"lg\"]),\n:host([size=\"lg\"]) svg {\n  width: 64px;\n  height: 64px; }\n\n:host([size=\"md\"]),\n:host([size=\"md\"]) svg {\n  width: 32px;\n  height: 32px; }\n\n:host([size=\"sm\"]),\n:host([size=\"sm\"]) svg {\n  width: 14px;\n  height: 14px; }\n\n:host([color=\"base\"]) {\n  --rh-broadcasted--color--text:      var(--rh-theme--color--ui-base, #0477a4); }\n\n:host([color=\"complement\"]) {\n  --rh-broadcasted--color--text:      var(--rh-theme--color--ui-complement, #464646); }\n\n:host([color=\"accent\"]) {\n  --rh-broadcasted--color--text:      var(--rh-theme--color--ui-accent, #fe460d); }\n\n:host([color=\"critical\"]) {\n  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--critical, #990000); }\n\n:host([color=\"important\"]) {\n  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--important, #d73401); }\n\n:host([color=\"moderate\"]) {\n  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--moderate, #ffc024); }\n\n:host([color=\"success\"]) {\n  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--success, #2e7d32); }\n\n:host([color=\"info\"]) {\n  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--info, #0277bd); }\n\n:host([color=\"default\"]) {\n  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--default, #606060); }\n\n:host([circled]) {\n  --rh-icon--color--bg:               transparent;\n  --rh-icon--color--border:           var(--rh-theme--color--surface--border, #dfdfdf);\n  padding: 0.05em; }\n\n:host([circled=\"base\"]) {\n  --rh-icon--color--bg:               var(--rh-theme--color--surface--base, #dfdfdf);\n  --rh-icon--color--border:           transparent;\n  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--base--text, #333); }\n\n:host([circled=\"lightest\"]) {\n  --rh-icon--color--bg:               var(--rh-theme--color--surface--lightest, #fff);\n  --rh-icon--color--border:           transparent;\n  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--lightest--text, #333); }\n\n:host([circled=\"light\"]) {\n  --rh-icon--color--bg:               var(--rh-theme--color--surface--lighter, #ececec);\n  --rh-icon--color--border:           transparent;\n  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--lighter--text, #333); }\n\n:host([circled=\"dark\"]) {\n  --rh-icon--color--bg:               var(--rh-theme--color--surface--darker, #464646);\n  --rh-icon--color--border:           transparent;\n  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--darker--text, #fff); }\n\n:host([circled=\"darkest\"]) {\n  --rh-icon--color--bg:               var(--rh-theme--color--surface--darkest, #131313);\n  --rh-icon--color--border:           transparent;\n  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--darkest--text, #fff); }\n\n:host([circled=\"complement\"]) {\n  --rh-icon--color--bg:               var(--rh-theme--color--surface--complement, #0477a4);\n  --rh-icon--color--border:           transparent;\n  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--complement--text, #fff); }\n\n:host([circled=\"accent\"]) {\n  --rh-icon--color--bg:               var(--rh-theme--color--surface--accent, #fe460d);\n  --rh-icon--color--border:           transparent;\n  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--accent--text, #fff); }\n</style>\n<svg viewBox=\"0 0 32 32\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" style=\"pointer-events: none; display: block; width: 100%; height: 100%\">\n  <g>\n    <path d=\"\"></path>\n  </g>\n</svg>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-icon.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-icon.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-icon";
      }
    }, {
      key: "observedAttributes",
      get: function get$$1() {
        return ["icon"];
      }
    }]);

    function RhIcon() {
      classCallCheck(this, RhIcon);
      return possibleConstructorReturn(this, (RhIcon.__proto__ || Object.getPrototypeOf(RhIcon)).call(this, RhIcon));
    }

    createClass(RhIcon, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "icon") {
          if (!newVal) {
            console.warn("rh-icon: no icon name provided");
            return;
          }

          var svgPath = this.ownerDocument.head.querySelector("#" + newVal + " path");

          if (!svgPath) {
            console.warn("rh-icon: unable to find svg path for " + newVal);
            return;
          }

          this.shadowRoot.querySelector("svg g path").setAttribute("d", svgPath.getAttribute("d"));
        }
      }
    }]);
    return RhIcon;
  }(RHElement);

  RHElement.create(RhIcon);

})));
//# sourceMappingURL=rh-icon.umd.js.map
