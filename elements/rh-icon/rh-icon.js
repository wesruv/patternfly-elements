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

const templateId = "rh-icon-head";
if (!document.getElementById(templateId)) {
  const cpRHIconTemplate = document.createElement("div");

  cpRHIconTemplate.setAttribute("style", "display: none;");
  cpRHIconTemplate.setAttribute("id", templateId);

  cpRHIconTemplate.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"></svg>`;
  document.head.appendChild(cpRHIconTemplate);
}

class RhIcon extends RHElement {
  get html() {
    return `
<style>
:host {
  --rh-icon--spacing:                 var(--rh-theme--container-spacer, 1rem);
  --rh-icon--size:                    var(--rh-theme--icon-size, 1em);
  --rh-icon--color--bg:               transparent;
  --rh-icon--color--border:           transparent;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  background: var(--rh-icon--color--bg);
  border: var(--rh-icon--color--border); }
  :host,
  :host svg {
    width: 1em;
    height: 1em; }
  :host svg {
    fill: var(--rh-broadcasted--color--text); }
  :host([data-block]) {
    display: block;
    margin-bottom: var(--rh-icon--spacing);
    margin-top: var(--rh-icon--spacing); }
    :host([data-block]):first-child {
      margin-top: 0; }

:host([size="2x"]),
:host([size="2x"]) svg {
  width: 2em;
  height: 2em; }

:host([size="3x"]),
:host([size="3x"]) svg {
  width: 3em;
  height: 3em; }

:host([size="4x"]),
:host([size="4x"]) svg {
  width: 4em;
  height: 4em; }

:host([size="xl"]),
:host([size="xl"]) svg {
  width: 100px;
  height: 100px; }

:host([size="lg"]),
:host([size="lg"]) svg {
  width: 64px;
  height: 64px; }

:host([size="md"]),
:host([size="md"]) svg {
  width: 32px;
  height: 32px; }

:host([size="sm"]),
:host([size="sm"]) svg {
  width: 14px;
  height: 14px; }

:host([color="base"]) {
  --rh-broadcasted--color--text:      var(--rh-theme--color--ui-base, #0477a4); }

:host([color="complement"]) {
  --rh-broadcasted--color--text:      var(--rh-theme--color--ui-complement, #464646); }

:host([color="accent"]) {
  --rh-broadcasted--color--text:      var(--rh-theme--color--ui-accent, #fe460d); }

:host([color="critical"]) {
  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--critical, #990000); }

:host([color="important"]) {
  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--important, #d73401); }

:host([color="moderate"]) {
  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--moderate, #ffc024); }

:host([color="success"]) {
  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--success, #2e7d32); }

:host([color="info"]) {
  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--info, #0277bd); }

:host([color="default"]) {
  --rh-broadcasted--color--text:      var(--rh-theme--color--feedback--default, #606060); }

:host([circled]) {
  --rh-icon--color--bg:               transparent;
  --rh-icon--color--border:           var(--rh-theme--color--surface--border, #dfdfdf);
  padding: 0.05em; }

:host([circled="base"]) {
  --rh-icon--color--bg:               var(--rh-theme--color--surface--base, #dfdfdf);
  --rh-icon--color--border:           transparent;
  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--base--text, #333); }

:host([circled="lightest"]) {
  --rh-icon--color--bg:               var(--rh-theme--color--surface--lightest, #fff);
  --rh-icon--color--border:           transparent;
  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--lightest--text, #333); }

:host([circled="light"]) {
  --rh-icon--color--bg:               var(--rh-theme--color--surface--lighter, #ececec);
  --rh-icon--color--border:           transparent;
  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--lighter--text, #333); }

:host([circled="dark"]) {
  --rh-icon--color--bg:               var(--rh-theme--color--surface--darker, #464646);
  --rh-icon--color--border:           transparent;
  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--darker--text, #fff); }

:host([circled="darkest"]) {
  --rh-icon--color--bg:               var(--rh-theme--color--surface--darkest, #131313);
  --rh-icon--color--border:           transparent;
  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--darkest--text, #fff); }

:host([circled="complement"]) {
  --rh-icon--color--bg:               var(--rh-theme--color--surface--complement, #0477a4);
  --rh-icon--color--border:           transparent;
  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--complement--text, #fff); }

:host([circled="accent"]) {
  --rh-icon--color--bg:               var(--rh-theme--color--surface--accent, #fe460d);
  --rh-icon--color--border:           transparent;
  --rh-broadcasted--color--text:      var(--rh-theme--color--surface--accent--text, #fff); }
</style>
<svg viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%">
  <g>
    <path d=""></path>
  </g>
</svg>`;
  }

  static get tag() {
    return "rh-icon";
  }

  get styleUrl() {
    return "rh-icon.scss";
  }

  get templateUrl() {
    return "rh-icon.html";
  }

  static get observedAttributes() {
    return ["icon"];
  }

  constructor() {
    super(RhIcon);
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "icon") {
      if (!newVal) {
        console.warn(`rh-icon: no icon name provided`);
        return;
      }

      const svgPath = this.ownerDocument.head.querySelector(`#${newVal} path`);

      if (!svgPath) {
        console.warn(`rh-icon: unable to find svg path for ${newVal}`);
        return;
      }

      this.shadowRoot
        .querySelector("svg g path")
        .setAttribute("d", svgPath.getAttribute("d"));
    }
  }
}

RHElement.create(RhIcon);
//# sourceMappingURL=rh-icon.js.map
