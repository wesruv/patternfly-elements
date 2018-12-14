(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../rhelement/rhelement.umd'), require('../rh-icon/rh-icon.umd')) :
  typeof define === 'function' && define.amd ? define(['../rhelement/rhelement.umd', '../rh-icon/rh-icon.umd'], factory) :
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

  var RhIconPanel = function (_RHElement) {
    inherits(RhIconPanel, _RHElement);
    createClass(RhIconPanel, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  display: flex;\n  align-content: flex-start;\n  flex-direction: column; }\n  @media (min-width: 576px) {\n    :host {\n      flex-direction: row; } }\n\n:host rh-icon {\n  --rh-icon--spacing:                 var(--rh-theme--container-spacer, 1rem);\n  --rh-icon--size:                    var(--rh-theme--icon-size, 64px);\n  margin-right: var(--rh-icon--spacing);\n  font-size: var(--rh-icon--size);\n  line-height: var(--rh-icon--size);\n  padding: 0.05em;\n  min-width: var(--rh-icon--size);\n  max-width: var(--rh-icon--size); }\n\n:host ::slotted([slot=\"header\"]),\n:host ::slotted([slot=\"footer\"]) {\n  display: block; }\n\n:host ::slotted([slot=\"footer\"]) {\n  margin-top: 1em; }\n\n:host([stacked]) {\n  flex-direction: column !important; }\n\n:host([stacked][centered]) {\n  align-items: center;\n  text-align: center; }\n</style>\n<rh-icon></rh-icon>\n<div class=\"content\">\n  <slot class=\"header\" name=\"header\"></slot>\n  <slot class=\"body\"></slot>\n  <slot class=\"footer\" name=\"footer\"></slot>\n</div>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-icon-panel.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-icon-panel.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-icon-panel";
      }
    }, {
      key: "observedAttributes",
      get: function get$$1() {
        return ["icon", "circled"];
      }
    }, {
      key: "cascadingAttributes",
      get: function get$$1() {
        return {
          icon: "rh-icon",
          circled: "rh-icon"
        };
      }
    }]);

    function RhIconPanel() {
      classCallCheck(this, RhIconPanel);
      return possibleConstructorReturn(this, (RhIconPanel.__proto__ || Object.getPrototypeOf(RhIconPanel)).call(this, RhIconPanel));
    }

    return RhIconPanel;
  }(RHElement);

  RHElement.create(RhIconPanel);

})));
//# sourceMappingURL=rh-icon-panel.umd.js.map
