export async function handler(event) {
  const API_KEY = process.env.VITE_TMDB_API_KEY
  const BASE_URL = 'https://api.themoviedb.org/3'

  // Example: /tmdb?path=/movie/123&extra=videos
  const path = event.queryStringParameters.path || '/movie/popular'
  const page = event.queryStringParameters.page || 1
  const query = new URLSearchParams(event.queryStringParameters)

  const url = `${BASE_URL}${path}?api_key=${API_KEY}&${query.toString()}`
  const response = await fetch(url)
  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
