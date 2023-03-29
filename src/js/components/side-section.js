import './side-film.js'

class SideSection extends HTMLElement {
  set films (films) {
    this._films = films
    this.render()
  }

  render () {
    this.innerHTML = `
        <h3 class="text-xl font-semibold">Continue watching</h3>
        <div id="history" class="flex flex-col mt-5 gap-y-4"></div>
        <button class="w-full p-3 mt-6 border rounded-full bg-background border-gray-1">See All</button>
        <hr class="w-full my-6 border border-gray-1">
        <h3 class="text-xl font-semibold">Wishlist</h3>
        <div id="wishlist" class="flex flex-col mt-5 gap-y-4"></div>
    `

    const historyEement = document.getElementById('history')
    const wishlistEement = document.getElementById('wishlist')
    this._films.forEach((film, index) => {
      const sideFilmElement = document.createElement('side-film')
      sideFilmElement.item = film
      if (index < 2) {
        historyEement.appendChild(sideFilmElement)
      } else {
        wishlistEement.appendChild(sideFilmElement)
      }
    })
  }
}

customElements.define('side-section', SideSection)
