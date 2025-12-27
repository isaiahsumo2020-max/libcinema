export function getImageUrl(path) {
  if (!path) {
    return 'https://via.placeholder.com/500x750?text=No+Image'
  }
  return `https://image.tmdb.org/t/p/w500${path}`
}

export async function fetchPopularMovies(page = 1) {
  const res = await fetch(`/.netlify/functions/tmdb?path=/movie/popular&page=${page}`)
  return await res.json()
}

export async function fetchMovieDetails(id) {
  const res = await fetch(`/.netlify/functions/tmdb?path=/movie/${id}`)
  return await res.json()
}

export async function searchMovies(query) {
  const res = await fetch(`/.netlify/functions/tmdb?path=/search/movie&query=${query}`)
  return await res.json()
}

export async function fetchMovieVideos(id) {
  const res = await fetch(`/.netlify/functions/tmdb?path=/movie/${id}/videos`)
  return await res.json()
}

export async function fetchAfricanMovies() {
  const nigeriaRes = await fetch(
    `/.netlify/functions/tmdb?path=/discover/movie&with_original_language=en&region=NG`
  )
  const liberiaRes = await fetch(
    `/.netlify/functions/tmdb?path=/discover/movie&with_original_language=en&region=LR`
  )

  const nigeriaMovies = await nigeriaRes.json()
  const liberiaMovies = await liberiaRes.json()

  return {
    results: [...nigeriaMovies.results, ...liberiaMovies.results]
  }
}
