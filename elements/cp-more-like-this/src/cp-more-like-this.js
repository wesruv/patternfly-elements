import Rhelement from "../rhelement/rhelement.js";
import "../rh-card/rh-card.js";
import "../rh-datetime/rh-datetime.js";
import "../../whatwg-fetch/fetch.js";

class CpMoreLikeThis extends Rhelement {
  static get tag() {
    return "cp-more-like-this";
  }

  get styleUrl() {
    return "cp-more-like-this.scss";
  }

  get templateUrl() {
    return "cp-more-like-this.html";
  }

  static get observedAttributes() {
    return ["api-url", "content-type"];
  }

  constructor() {
    super(CpMoreLikeThis.tag);

    this.handleResponse = this.handleResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;

    if (!this["api-url"] || !this["content-type"]) {
      return;
    }

    this.loading = true;

    fetch(this["api-url"])
      .then(res => res.json())
      .then(this.handleResponse, this.handleError);
  }

  handleResponse(data) {
    this.loading = false;

    if (!data.response.docs.length) {
      console.warn("No docs found");
      this.dispatchNoDataEvent();
    }

    this.data = {
      contentType: this["content-type"],
      results: data.response.docs
    };

    this.render();
  }

  handleError(err) {
    console.warn("Error in retrieving data", err);
    this.dispatchNoDataEvent();
  }

  dispatchNoDataEvent() {
    this.dispatchEvent(
      new CustomEvent("cp-more-like-this:no-data", {
        bubbles: true
      })
    );
  }

  render() {
    const template = bindTemplate(this.data);

    if (window.ShadyCSS) {
      ShadyCSS.prepareTemplate(template, CpMoreLikeThis.tag);
    }

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    if (window.ShadyCSS) {
      ShadyCSS.styleElement(this);
    }
  }
}

Rhelement.create(CpMoreLikeThis);
