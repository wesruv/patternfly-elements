(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../rhelement/rhelement.umd'), require('numeral')) :
  typeof define === 'function' && define.amd ? define(['../rhelement/rhelement.umd', 'numeral'], factory) :
  (factory(global.RHElement,global.numeral));
}(this, (function (RHElement,numeral) { 'use strict';

  RHElement = RHElement && RHElement.hasOwnProperty('default') ? RHElement['default'] : RHElement;
  numeral = numeral && numeral.hasOwnProperty('default') ? numeral['default'] : numeral;

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

  // easy aliases for common format strings
  var types = {
    abbrev: "0a", // or 'approx'?
    ordinal: "0o",
    percent: "0%",
    bytes: "0[.][00] ib",
    e: "0[.00]e+0",
    thousands: "0,0[.][00]"
  };

  // use thin spaces to separate thousands chunks
  // debugger;
  numeral.locales.en.delimiters.thousands = " ";

  var RhNumber = function (_RHElement) {
    inherits(RhNumber, _RHElement);
    createClass(RhNumber, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  display: inline;\n  white-space: nowrap; }\n</style>\n<span></span>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-number.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-number.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-number";
      }
    }, {
      key: "observedAttributes",
      get: function get$$1() {
        return ["number", "format", "type"];
      }
    }]);

    function RhNumber() {
      classCallCheck(this, RhNumber);
      return possibleConstructorReturn(this, (RhNumber.__proto__ || Object.getPrototypeOf(RhNumber)).call(this, RhNumber));
    }

    createClass(RhNumber, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(RhNumber.prototype.__proto__ || Object.getPrototypeOf(RhNumber.prototype), "connectedCallback", this).call(this);
        this.connected = true;

        this._determineFormat();
        this._setInitialNumber();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldVal, newVal) {
        get(RhNumber.prototype.__proto__ || Object.getPrototypeOf(RhNumber.prototype), "attributeChangedCallback", this).apply(this, arguments);
        switch (attr) {
          case "type":
            this._determineFormat();
            break;
          case "format":
            this._updateNumber(this.getAttribute("number"), newVal);
            break;
          case "number":
            this._updateNumber(newVal, this.getAttribute("format"));
        }
      }
    }, {
      key: "_setInitialNumber",
      value: function _setInitialNumber() {
        var numberAttrDefined = !Number.isNaN(parseFloat(this.getAttribute("number")));
        var numberContentDefined = !Number.isNaN(parseFloat(this.textContent));

        if (numberAttrDefined) {
          this.setAttribute("number", this.getAttribute("number"));
        } else if (numberContentDefined) {
          this.setAttribute("number", this.textContent);
        }
      }
    }, {
      key: "_determineFormat",
      value: function _determineFormat() {
        var type = this.getAttribute("type");

        if (type && types[type]) {
          this.setAttribute("format", types[type]);
        } else {
          this.setAttribute("format", this.getAttribute("format") || "0");
        }
      }
    }, {
      key: "_updateNumber",
      value: function _updateNumber(num, type) {
        this.shadowRoot.querySelector("span").textContent = this._format(num, type);
      }
    }, {
      key: "_format",
      value: function _format(num, type) {
        return numeral(num).format(type);
      }
    }]);
    return RhNumber;
  }(RHElement);

  RHElement.create(RhNumber);

})));
//# sourceMappingURL=rh-number.umd.js.map
