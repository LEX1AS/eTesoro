class Nav extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
    <div id="sidebar">
      <a href="index.html">Home</a>
      <a href="#">About</a>
      <a href="#">Controller</a>
      <a href="configuration.html">Configuration</a>
    </div>
    `
  }
}
customElements.define('custom-nav', Nav);