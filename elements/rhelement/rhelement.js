class Rhelement extends HTMLElement {
  constructor(id) {
    super();

    this.template = document.createElement("template");
    this.template.innerHTML = this.html;

    if (window.ShadyCSS && this.html) {
      ShadyCSS.prepareTemplate(this.template, id);
    }

    this.attachShadow({ mode: "open" });

    if (this.html) {
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
