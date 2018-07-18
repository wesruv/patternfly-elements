import Rhelement from "../rhelement/rhelement.js";
import "../rh-card/rh-card.js";
import "../rh-datetime/rh-datetime.js";
import "../../whatwg-fetch/fetch.js";

class CpMoreLikeThis extends Rhelement {
  html(data) {
    return `
<style>
:host {
  display: block; }

rh-card {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px; }
  rh-card h4 {
    margin-top: 0;
    flex: 1 1 auto; }
  rh-card a {
    color: #06c;
    text-decoration: none;
    font-weight: 700; }
  rh-card span {
    font-size: .9rem;
    font-weight: 400; }

@media (min-width: 768px) {
  .card-container {
    display: flex; }
    .card-container rh-card {
      width: 33%;
      margin: 16px;
      margin-top: 8px; }
      .card-container rh-card:first-child {
        margin-left: 0; }
      .card-container rh-card:last-child {
        margin-right: 0; } }
</style>

<h3>People who viewed this ${data.contentType} also viewed</h3>
<div class="card-container">
  ${data.results
    .map(
      result => `
    <rh-card theme="light">
      <h4 slot="header"><a href="${result.view_uri}">${result.allTitle}</a></h4>
      <span>
        ${result.documentKind} - <rh-datetime
          datetime="${result.lastModifiedDate}"
          type="local"
          day="numeric"
          month="short"
          year="numeric">
          ${result.lastModifiedDate}
        </rh-datetime>
      </span>
    </rh-card>
  `
    )
    .join("\n")}
</div>`;
  }

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
