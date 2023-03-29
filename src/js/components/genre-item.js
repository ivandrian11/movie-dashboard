class GenreItem extends HTMLElement {
  set label (label) {
    this._label = label
    this.render()
  }

  render () {
    this.innerHTML = `<div class="genre-item rounded-[30px] border border-gray-1 py-1 px-2.5">${this._label}</div>`
  }
}

customElements.define('genre-item', GenreItem)
