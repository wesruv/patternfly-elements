import Rhelement from "../rhelement/rhelement.js";

class RhCard extends Rhelement {
  static get observedAttributes() {
    return ["theme"];
  }

  constructor() {
    super("rh-card");
  }

  connectedCallback() {
    super.connectedCallback();
  }
}

window.customElements.define("rh-card", RhCard);
