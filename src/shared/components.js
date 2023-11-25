class Nav extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
    <div id="sidebar">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
    `
  }
}
customElements.define('custom-nav', Nav);