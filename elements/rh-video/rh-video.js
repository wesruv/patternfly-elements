import RHElement from "../rhelement/rhelement.js";
import "../rh-cta/rh-cta.js";

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

class RhVideo extends RHElement {
  get html() {
    return `
<style>
.rh-video-band {
  position: relative;
  padding-top: calc( var(--rh-theme--container-spacer, 1rem) * 4);
  padding-bottom: calc( var(--rh-theme--container-spacer, 1rem) * 4); }

.rh-video-band-container {
  margin: 0 auto;
  padding: 0 15px; }
  @media (min-width: 768px) {
    .rh-video-band-container {
      padding: 0;
      width: calc(var(--rh-theme--grid-breakpoint--sm, 576px) - 60px); } }
  @media (min-width: 992px) {
    .rh-video-band-container {
      width: calc(var(--rh-theme--grid-breakpoint--md, 768px) - 60px); } }
  @media (min-width: 1200px) {
    .rh-video-band-container {
      width: calc(var(--rh-theme--grid-breakpoint--lg, 992px) - 60px); } }

.rh-video-band-iframe-container {
  width: 100%; }
  .rh-video-band-iframe-container > * {
    height: auto; }
  @supports (--custom: property) {
    .rh-video-band-iframe-container {
      position: relative; }
      .rh-video-band-iframe-container::before {
        content: "";
        display: block;
        padding-bottom: calc(100% / (var(--aspect-ratio))); }
      .rh-video-band-iframe-container > :first-child {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%; } }

:host {
  display: block;
  --aspect-ratio: 16/9; }

:host([hidden]) {
  display: none; }

:host {
  background: black;
  color: white; }

.rh-video-band-cta {
  display: flex;
  align-items: center;
  justify-content: center; }

.rh-video-band-play-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px white;
  border-radius: 100%;
  padding: 0.49em;
  margin-right: 0.7em;
  height: 1.75em;
  width: 1.75em; }
  .rh-video-band-play-icon::before {
    display: inline-block;
    margin-left: calc(var(--rh-theme--content-spacer, 1rem) * 0.25);
    vertical-align: middle;
    border-style: solid;
    border-width: 0.84em 0.7em 0;
    border-color: transparent;
    border-top-color: white;
    transform: rotate(-90deg);
    display: inline-block;
    content: ""; }

.rh-video-band-details {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; }

.rh-video-band-iframe-container {
  border: 1px solid #555;
  margin-bottom: var(--rh-theme--container-spacer, 1rem); }

::slotted(*) {
  text-transform: uppercase; }

@keyframes growBand {
  0% {
    opacity: 1;
    z-index: 1;
    min-height: 0; }
  50% {
    opacity: 0;
    z-index: 1;
    min-height: 550px; }
  100% {
    opacity: 0;
    z-index: -1;
    min-height: 550px; } }

@keyframes shrinkBand {
  0% {
    opacity: 1;
    z-index: 1;
    max-height: 550px; }
  50% {
    opacity: 0;
    z-index: -1;
    max-height: 550px; }
  100% {
    opacity: 0;
    z-index: -1;
    max-height: 50px; } }

@keyframes opacity {
  50% {
    opacity: 0;
    z-index: -1; }
  100% {
    opacity: 1;
    z-index: 1; } }
</style>
<section class="rh-video-band">
  <div class="rh-video-band-container" >
      <div class="rh-video-band-details" data-rh-state="hidden">
          <div class="rh-video-band-iframe-container" >
                    <iframe slot="video" width="560" height="315"  src="//www.youtube.com/embed/4qCabv819Iw?autoplay=0" frameborder="0"allowfullscreen></iframe>
          </div>
          <rh-cta priority="secondary" on="dark">
            <a class="rh-cta-link" data-rh-cta-type="ghost" data-rh-action="video-close">Close</a>
          </rh-cta>
   </div>
</section>`;
  }

  static get tag() {
    return "rh-video";
  }

  get templateUrl() {
    return "rh-video.html";
  }

  get styleUrl() {
    return "rh-video.scss";
  }

  // static get observedAttributes() {
  //   return [];
  // }

  constructor() {
    super(RhVideo.tag);
  }

  // connectedCallback() {
  //   super.connectedCallback();
  // }

  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}
}

RHElement.create(RhVideo);

export default RhVideo;
//# sourceMappingURL=rh-video.js.map
