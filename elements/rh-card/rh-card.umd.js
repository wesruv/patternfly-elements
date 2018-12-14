(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../rhelement/rhelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../rhelement/rhelement.umd'], factory) :
  (global.RhCard = factory(global.RHElement));
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

  var RhCard = function (_RHElement) {
    inherits(RhCard, _RHElement);
    createClass(RhCard, [{
      key: "html",
      get: function get$$1() {
        return "\n<style>\n:host {\n  --rh-card--padding:                          calc(var(--rh-theme--container-spacer, 1rem) * 2);\n  --rh-card_header--size:                      var(--rh-theme--font-size--heading--gamma, 21px);\n  --rh-card--bg:                               var(--rh-theme--color--surface--base, #dfdfdf);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--base--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--base--link, #00538c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--base--link--visited, #7551a6);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--base--link--hover, #00305b);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--base--link--focus, #00305b);\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  padding: var(--rh-card--padding);\n  border: var(--rh-theme--surface--border-width, 1px) var(--rh-theme--surface--border-style, solid) transparent;\n  border-radius: var(--rh-theme--surface--border-radius, 0);\n  background: var(--rh-card--bg);\n  color: var(--rh-broadcasted--color--text); }\n\na {\n  color: var(--rh-broadcasted--color--ui-link); }\n\na:visited {\n  color: var(--rh-broadcasted--color--ui-link--visited); }\n\na:hover {\n  color: var(--rh-broadcasted--color--ui-link--hover); }\n\na:focus {\n  color: var(--rh-broadcasted--color--ui-link--focus); }\n\n:host([color=\"dark\"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--darker, #464646);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--darker--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--darker--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--darker--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--darker--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--darker--link--focus, #cce6ff); }\n\n:host([color=\"darkest\"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--darkest, #131313);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--darkest--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--darkest--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--darkest--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--darkest--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--darkest--link--focus, #cce6ff); }\n\n:host([color=\"light\"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--lighter, #ececec);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--lighter--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--lighter--link, #06c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--lighter--link--visited, rebeccapurple);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--lighter--link--hover, #003366);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--lighter--link--focus, #003366); }\n\n:host([color=\"lightest\"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--lightest, #fff);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--lightest--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--lightest--link, #06c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--lightest--link--visited, rebeccapurple);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--lightest--link--hover, #003366);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--lightest--link--focus, #003366); }\n\n:host([color=\"complement\"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--complement, #0477a4);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--complement--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--complement--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--complement--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--complement--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--complement--link--focus, #cce6ff); }\n\n:host([color=\"accent\"]) {\n  --rh-card--bg:                               var(--rh-theme--color--surface--accent, #fe460d);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--accent--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--accent--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--accent--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--accent--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--accent--link--focus, #cce6ff); }\n\n:host([size=\"small\"]) {\n  --rh-card--padding:        var(--rh-theme--container-spacer, 1rem); }\n\n.rh-card__header,\n.rh-card__body,\n.rh-card__footer {\n  display: block;\n  margin: 0; }\n\n.rh-card__header::slotted(h1:first-child),\n.rh-card__header::slotted(h2:first-child),\n.rh-card__header::slotted(h3:first-child),\n.rh-card__header::slotted(h4:first-child),\n.rh-card__header::slotted(h5:first-child),\n.rh-card__header::slotted(h6:first-child) {\n  margin-top: 0 !important;\n  font-size: var(--rh-card_header--size); }\n\n.rh-card__body::slotted(*:nth-child(2)) {\n  margin-top: 0 !important; }\n\n.rh-card__footer {\n  margin-top: auto;\n  justify-self: flex-end; }\n</style>\n<slot class=\"rh-card__header\" name=\"header\"></slot>\n<slot class=\"rh-card__body\"></slot>\n<slot class=\"rh-card__footer\" name=\"footer\"></slot>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rh-card.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rh-card.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "rh-card";
      }
    }]);

    function RhCard() {
      classCallCheck(this, RhCard);
      return possibleConstructorReturn(this, (RhCard.__proto__ || Object.getPrototypeOf(RhCard)).call(this, RhCard));
    }

    return RhCard;
  }(RHElement);

  RHElement.create(RhCard);

  return RhCard;

})));
//# sourceMappingURL=rh-card.umd.js.map
