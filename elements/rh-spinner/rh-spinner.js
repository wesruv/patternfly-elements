import RHElement from "../rhelement/rhelement.js";

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

class RhSpinner extends RHElement {
  get html() {
    return `
<style>
:host([hidden]) {
  display: none; }

.rh-spinner__body {
  animation: spin 1s linear infinite;
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  border-bottom: 4px solid rgba(0, 0, 0, 0.25);
  border-left: 4px solid rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  border-right: 4px solid rgba(0, 0, 0, 0.25);
  border-top: 4px solid rgba(0, 0, 0, 0.75);
  display: inline-block;
  height: 2rem;
  margin: 0 auto;
  position: relative;
  width: 2rem;
  vertical-align: middle;
  visibility: visible; }

@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg); }
  to {
    -ms-transform: rotate(360deg); } }

@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg); }
  to {
    -moz-transform: rotate(360deg); } }

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg); } }

@keyframes spin {
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(360deg); } }

.rh-spinner__description {
  visibility: hidden; }
</style>
<slot class="rh-spinner__body" name="spinner"></slot>
<slot class="rh-spinner__description" name="description"></slot>`;
  }

  static get tag() {
    return "rh-spinner";
  }

  get templateUrl() {
    return "rh-spinner.html";
  }

  get styleUrl() {
    return "rh-spinner.scss";
  }

  // static get observedAttributes() {
  //   return [];
  // }

  constructor() {
    super(RhSpinner);
  }

  // connectedCallback() {
  //   super.connectedCallback();
  // }

  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}
}

RHElement.create(RhSpinner);

export default RhSpinner;
//# sourceMappingURL=rh-spinner.js.map
