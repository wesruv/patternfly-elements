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

:host {
  display: block; }

:host([hidden]) {
  display: none; }

:host {
  background: gray; }

.rh-video-band-embed {
  position: relative;
  width: 90%; }
  @media (min-width: var(--rh-theme--grid-breakpoint--xs, 0)) {
    .rh-video-band-embed {
      width: 100%; } }

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
<section class="rh-video-band" data-rh-theme="dark" data-rh-align="both" data-rh-band-grow="both">
  <div class="rh-video-band-container" data-rh-layout="9" data-rh-align="horizontal">
     <div class="rh-video-band-embed" data-rh-text-align="center">
       <div class="rh-video-band-embed-details" data-rh-state="visible">
         <slot name="video-play-icon">
          <div class="rh-cta">
            <a class="rh-cta-link" data-rh-cta-type="video-play" data-rh-action="video-play" href="//www.youtube.com/watch?4qCabv819Iw">The
              Red Hat story</a>
          </div>
        </slot>
       </div>
       <div class="rh-video-embed-details" data-rh-state="hidden">
        <div class="rh-video-embed-media-container">
          <slot class="rh-video-embed-iframe-container" name="video"></slot>
        </div>
         <div class="rh-cta">
          <a class="rh-cta-link" data-rh-cta-type="ghost" data-rh-action="video-close">close</a>
      </div>
       </div>
    </div>
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
