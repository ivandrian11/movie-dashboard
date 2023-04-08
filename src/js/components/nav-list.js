import './nav-item.js'
import menus from '../data/data-static.js'

class NavList extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    menus.forEach((menu, index) => {
      const container = document.createElement('div')
      if (index !== 0) {
        container.classList.add('mt-8')
      }
      const title = document.createElement('h2')
      title.innerText = menu.title
      title.classList.add(
        'text-sm',
        'uppercase',
        'text-gray-1',
        'tracking-[4px]'
      )
      container.appendChild(title)

      menu.items.forEach((item, i) => {
        const navItemElement = document.createElement('nav-item')
        navItemElement.item = item
        navItemElement.index = i
        container.appendChild(navItemElement)
      })
      this.appendChild(container)
    })
  }
}

customElements.define('nav-list', NavList)
