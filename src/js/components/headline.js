import './genre-item.js'

class Headline extends HTMLElement {
  set film (film) {
    this._film = film
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="relative" >
        <img src="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this._film.backdrop_path}"
        class="h-[30rem] object-cover w-full pointer-events-none" />
        <div class="absolute top-0 w-96 headline-blur h-[30rem]"></div>
        <div class="absolute right-0 top-0 rotate-180 w-96 headline-blur h-[30rem]"></div>
        <div class="absolute p-8 top-[20%]">
            <h1 class="text-3xl font-semibold">${this._film.title}</h1>
            <div id="genre-list" class="flex mt-5 gap-x-2"></div>
            <button
                class="flex items-center justify-center py-3 mt-8 text-lg font-semibold rounded-full w-44 bg-red gap-x-2">Watch
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M12 2C6.48001 2 2 6.48 2 12C2 17.52 6.48001 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.10001 15.38 9.10001 13.48L9.10001 12L9.10001 10.52C9.10001 8.61 10.45 7.84 12.1 8.79L13.38 9.53L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73Z"
                        fill-rule="evenodd" fill="#FFFFFF" />
                </svg>
            </button>
        </div>
      </div>
    `

    const genreListElement = document.getElementById('genre-list')
    this._film.genres.forEach(genre => {
      const genreItemElement = document.createElement('genre-item')
      genreItemElement.label = genre
      genreListElement.appendChild(genreItemElement)
    })
  }
}

customElements.define('head-line', Headline)
