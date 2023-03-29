import axios from 'axios'

class DataSource {
  static async getGenres () {
    const response = await axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=b2c5dc9df2dcb70b0c1cf24683addc85&language=en-US'
    )

    return response.data
  }

  static async getTrendingMovies () {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=b2c5dc9df2dcb70b0c1cf24683addc85'
    )

    return response.data
  }
}

export default DataSource
