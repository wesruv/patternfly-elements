!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("../pfelement/pfelement.umd"),require("numeral")):"function"==typeof define&&define.amd?define(["../pfelement/pfelement.umd","numeral"],e):e(t.PFElement,t.numeral)}(this,function(e,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),i=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(n):void 0},u={abbrev:"0a",ordinal:"0o",percent:"0%",bytes:"0[.][00] ib",e:"0[.00]e+0",thousands:"0,0[.][00]"};r.locales.en.delimiters.thousands=" ";var t=function(t){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),o(n,[{key:"html",get:function(){return"\n<style>\n:host {\n  display: inline;\n  white-space: nowrap; }\n</style>\n<span></span>"}},{key:"styleUrl",get:function(){return"pfe-number.scss"}},{key:"templateUrl",get:function(){return"pfe-number.html"}}],[{key:"tag",get:function(){return"pfe-number"}},{key:"observedAttributes",get:function(){return["number","format","type"]}}]),o(n,[{key:"connectedCallback",value:function(){i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.connected=!0,this._determineFormat(),this._setInitialNumber()}},{key:"attributeChangedCallback",value:function(t,e,r){switch(i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).apply(this,arguments),t){case"type":this._determineFormat();break;case"format":this._updateNumber(this.getAttribute("number"),r);break;case"number":this._updateNumber(r,this.getAttribute("format"))}}},{key:"_setInitialNumber",value:function(){var t=!Number.isNaN(parseFloat(this.getAttribute("number"))),e=!Number.isNaN(parseFloat(this.textContent));t?this.setAttribute("number",this.getAttribute("number")):e&&this.setAttribute("number",this.textContent)}},{key:"_determineFormat",value:function(){var t=this.getAttribute("type");t&&u[t]?this.setAttribute("format",u[t]):this.setAttribute("format",this.getAttribute("format")||"0")}},{key:"_updateNumber",value:function(t,e){this.shadowRoot.querySelector("span").textContent=this._format(t,e)}},{key:"_format",value:function(t,e){return r(t).format(e)}}]),n}();e.create(t)});
//# sourceMappingURL=pfe-number.umd.js.map