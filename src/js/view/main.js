import '../components/side-bar.js'
import '../components/side-section.js'
import '../components/headline.js'
import '../components/trend-movie.js'
import DataSource from '../data/data-source.js'

const main = async () => {
  let data = await DataSource.getGenres()
  const genres = data.genres.reduce(
    (acc, item) => ({ ...acc, [item.id]: item.name }),
    {}
  )

  data = await DataSource.getTrendingMovies()
  const trendMovies = data.results.map(movie => ({
    ...movie,
    genres: movie.genre_ids.map(id => genres[id])
  }))

  const sideSectionElement = document.querySelector('side-section')
  sideSectionElement.films = trendMovies.slice(-4)

  const headlineElement = document.querySelector('head-line')
  headlineElement.film = trendMovies[0]

  const sliderContainer = document.querySelector('#slider-container')
  const innerSlider = document.querySelector('#inner-slider')

  trendMovies.slice(1, 6).forEach(movie => {
    const trendMovieElement = document.createElement('trend-movie')
    trendMovieElement.item = movie
    innerSlider.appendChild(trendMovieElement)
  })

  let pressed = false
  let startX
  let x

  const checkBoundary = () => {
    const outer = sliderContainer.getBoundingClientRect()
    const inner = innerSlider.getBoundingClientRect()

    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = '0px'
    }

    if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`
    }
  }

  sliderContainer.addEventListener('mousedown', e => {
    pressed = true
    startX = e.offsetX - innerSlider.offsetLeft
    sliderContainer.style.cursor = 'grabbing'
  })

  sliderContainer.addEventListener('mouseenter', () => {
    sliderContainer.style.cursor = 'grab'
  })

  sliderContainer.addEventListener('mouseup', () => {
    sliderContainer.style.cursor = 'grab'
    pressed = false
  })

  sliderContainer.addEventListener('mousemove', e => {
    if (!pressed) return
    e.preventDefault()

    x = e.offsetX

    innerSlider.style.left = `${x - startX}px`
    checkBoundary()
  })
}

export default main
