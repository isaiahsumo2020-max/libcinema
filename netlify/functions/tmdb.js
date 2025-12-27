// netlify functions 
export async function handler(event, context) {
  const API_KEY = process.env.VITE_TMDB_API_KEY
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
