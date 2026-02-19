class FullPageEmbed extends HTMLElement {
  static get observedAttributes() {
    return ["src", "height"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.iframe = document.createElement("iframe");
    this.iframe.style.width = "100%";
    this.iframe.style.height = "100%";
    this.iframe.style.border = "0";
    this.shadowRoot.appendChild(this.iframe);
  }

  connectedCallback() {
    this._render();
  }

  attributeChangedCallback() {
    this._render();
  }

  _render() {
    const src = this.getAttribute("src") || "";
    const height = this.getAttribute("height") || "7000px";

    this.style.display = "block";
    this.style.width = "100%";
    this.style.height = height;

    if (src) this.iframe.src = src;
  }
}

customElements.define("fullpage-embed", FullPageEmbed);
