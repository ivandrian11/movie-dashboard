class SideFilm extends HTMLElement {
  set item (item) {
    this._item = item
    this.render()
  }

  render () {
    this.innerHTML = `<article class="flex items-center gap-x-4 cursor-pointer">
        <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${
          this._item.poster_path
        }"
            alt="${this._item.title}" class="h-32 rounded">
        <div class="space-y-2">
            <h3 class="text-sm font-semibold xl:text-base">${
              this._item.title
            } (${this._item.release_date.slice(0, 4)})</h3>
            <p class="text-xs xl:text-sm text-gray-2">${this._item.genres.join(
              ', '
            )}</p>
        </div>
    </article>`
  }
}

customElements.define('side-film', SideFilm)
