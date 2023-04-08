import './side-film.js'

class TrendMovie extends HTMLElement {
  set item (item) {
    this._item = item
    this.render()
  }

  render () {
    this.innerHTML = `
    <article class="h-64 bg-blue-300 rounded-lg w-72">
        <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${
          this._item.backdrop_path
        }"
            alt="${this._item.title}" class="object-fill h-64 rounded-lg w-72">
        <header class="absolute bottom-0 w-[264px] m-3 glass-effect p-3 rounded-lg">
            <h4 class="font-semibold whitespace-nowrap overflow-clip">
                ${this._item.title}
            </h4>
            <p class="text-xs text-gray-2 whitespace-nowrap overflow-clip">
            ${this._item.release_date.slice(0, 4)} • ${this._item.genres.join(
      ', '
    )}</p>
        </header>
    </article>
    `
  }
}

customElements.define('trend-movie', TrendMovie)
