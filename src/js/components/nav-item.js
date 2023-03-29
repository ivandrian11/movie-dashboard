class NavItem extends HTMLElement {
  set item (item) {
    this._item = item
    this.render()
  }

  set index (index) {
    this._index = index
    this.render()
  }

  render () {
    this.innerHTML = `<div class="flex items-center py-4 cursor-pointer gap-x-3 ${
      this._index === 0 ? 'mt-4' : ''
    }">
        ${this._item.icon}
        <p class="font-medium text-white">${this._item.label}</p>
        ${
          this._item.active
            ? `
        <div class="absolute left-0 w-2 h-4 rounded-r-full bg-red">
            <div class="absolute w-2 h-4 rounded-r-full left-1 bg-red tick-blur"></div>
        </div>`
            : ''
        }
    </div>`
  }
}

customElements.define('nav-item', NavItem)
