import PFElement from "../../@patternfly/pfelement/pfelement.js";

let session;

class RhEdmundAbbott extends PFElement {
  static get tag() {
    return "rh-edmund-abbott";
  }

  get templateUrl() {
    return "rh-edmund-abbott.html";
  }

  get styleUrl() {
    return "rh-edmund-abbott.css";
  }

  static get observedAttributes() {
    return ["product", "version"];
  }

  get version() {
    return this.getAttribute("version");
  }

  set version(val) {
    return this.setAttribute("version", val);
  }

  get product() {
    return this.getAttribute("product");
  }

  set product(val) {
    return this.setAttribute("product", val);
  }

  constructor() {
    super(RhEdmundAbbott);

    this.loading = false;
  }

  connectedCallback() {
    super.connectedCallback();

    this.shadowRoot
      .querySelector("#x")
      .addEventListener("click", () => this.hide());
  }

  getKnownVulnUrl() {
    return `${location.protocol}//${location.hostname}${
      location.port ? `:${location.port}` : ""
    }/hydra/rest/ion/diag/eaas/edmundabbott`;
    // return `https://api.access.redhat.com/hydra/rest/ion/diag/eaas/edmundabbott`;
  }

  getKnownVuln() {
    this.loading = true;
    const url = this.getKnownVulnUrl();
    const body = JSON.stringify({
      product: this.product,
      version: this.version
    });

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.getEncodedToken()}`
    };

    fetch(url, {
      method: "POST",
      credentials: "omit",
      headers,
      body
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        this.loading = false;
        return res.json();
      })
      .then(response => this.resultsSuccess(response))
      .catch(err => this.resultsFail(err));
  }

  resultsSuccess(response) {
    if (response.description && response.title && response.cta) {
      this.show();

      // this.shadowRoot.querySelector("pre").textContent = JSON.stringify(response);
      this.shadowRoot.querySelector("p").textContent = response.description;
      this.shadowRoot.querySelector("a").textContent = response.title;
      this.shadowRoot.querySelector("a").href = response.cta;
    }
  }

  resultsFail(error) {
    this.hide();

    // without showing any warning or error, silently we only show error
    // message in console
    console.log("Known vulnerability call failed - " + error);
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    // if we're not currently loading, and there is both a product and a version
    const shouldFetch =
      session.isAuthenticated() &&
      !this.loading &&
      this.product &&
      this.version;

    if (shouldFetch) {
      this.getKnownVuln();
    }
  }

  show() {
    this.shadowRoot.querySelector("#results").classList.add("active");
  }

  hide() {
    this.shadowRoot.querySelector("#results").classList.remove("active");
  }
}

window.require(["session"], function(sessionImport) {
  session = sessionImport;

  session.onInit(() => {
    PFElement.create(RhEdmundAbbott);
  });
});

export default RhEdmundAbbott;
