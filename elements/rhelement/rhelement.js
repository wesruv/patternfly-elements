class Rhelement extends HTMLElement {
  static create(rhe) {
    window.customElements.define(rhe.tag, rhe);
  }

  constructor(tag) {
    super();

    const html = this.html();

    this.tag = tag;

    this.template = document.createElement("template");
    this.template.innerHTML = html;

    if (window.ShadyCSS && html) {
      ShadyCSS.prepareTemplate(this.template, this.tag);
    }

    this.attachShadow({ mode: "open" });

    if (html) {
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
  }

  connectedCallback() {
    if (window.ShadyCSS) {
      ShadyCSS.styleElement(this);
    }
  }
}

export default Rhelement;
