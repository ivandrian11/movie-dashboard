import './my-logo.js'
import './nav-list.js'

class Sidebar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class="min-h-screen h-full px-10 py-6 bg-black w-64">
        <my-logo></my-logo>
        <nav class="mt-12">
            <nav-list></nav-list>
        </nav>
    </div>
      `
  }
}

customElements.define('side-bar', Sidebar)
