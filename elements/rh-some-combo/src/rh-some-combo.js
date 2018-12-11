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

import RHElement from "../rhelement/rhelement.js";

class RhSomeCombo extends RHElement {
  static get tag() {
    return "rh-some-combo";
  }

  get templateUrl() {
    return "rh-some-combo.html";
  }

  get styleUrl() {
    return "rh-some-combo.scss";
  }

  get isTab() {
    return this.parentNode.offsetWidth > 768;
  }

  constructor() {
    super(RhSomeCombo, {
      delayRender: true
    });

    this.groupings = [];

    this._observer = new MutationObserver(() => {
      this.groupings = [];

      const tempGrouping = [...this.querySelectorAll("rh-some-combo-grouping")];
      tempGrouping.forEach(group => {
        const tempGroup = {
          heading: group.querySelector('[heading="heading"]'),
          body: group.querySelector('[foo="body"]')
        };

        this.groupings.push(tempGroup);
      });

      this.render();
    });

    this._observer.observe(this, {
      attributes: true,
      childList: true
    });
  }
}

RHElement.create(RhSomeCombo);
