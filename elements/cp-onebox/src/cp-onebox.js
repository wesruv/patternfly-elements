import RhOnebox from "../rh-onebox/rh-onebox.js";
import Rhelement from "../rhelement/rhelement.js";

class CpOnebox extends RhOnebox {
  static get tag() {
    return "cp-onebox";
  }

  get styleUrl() {
    return "cp-onebox.scss";
  }

  get templateUrl() {
    return "cp-onebox.html";
  }

  constructor() {
    super(CpOnebox.tag, {
      arrayName: "rules",
      matchArrayName: "keywords"
    });

    this.expandButton = null;
    this.expanded = false;
    this.expandButtonHandler = this.expandButtonHandler.bind(this);
  }

  render() {
    super.render();

    this.expandButton = this.shadowRoot.querySelector("#expandButton");
    this.expandButton.addEventListener("click", this.expandButtonHandler);
  }

  expandButtonHandler() {
    this.expanded = !this.expanded;

    if (this.expanded) {
      this.setAttribute("expanded", "");
    } else {
      this.removeAttribute("expanded");
    }
  }
}

Rhelement.create(CpOnebox);
