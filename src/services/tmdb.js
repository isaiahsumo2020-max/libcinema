export function getImageUrl(path) {
  if (!path) {
    return 'https://via.placeholder.com/500x750?text=No+Image'
  }
  return `${IMAGE_BASE}${path}`
}


export async function fetchPopularMovies(page = 1) {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
  return await res.json()
}

export async function fetchMovieDetails(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  return await res.json()
}

export async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  )
  return await res.json()
}


export async function fetchMovieVideos(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
  return await res.json()
}


export async function fetchAfricanMovies() {
  const nigeriaRes = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=en&region=NG`
  )
  const liberiaRes = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=en&region=LR`
  )

  const nigeriaMovies = await nigeriaRes.json()
  const liberiaMovies = await liberiaRes.json()

  return {
    results: [...nigeriaMovies.results, ...liberiaMovies.results]
  }
}




