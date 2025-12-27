export function getWatchlist() {
  return JSON.parse(localStorage.getItem('watchlist')) || []
}

export function addToWatchlist(movie) {
  const list = getWatchlist()
  if (!list.find(m => m.id === movie.id)) {
    list.push(movie)
    localStorage.setItem('watchlist', JSON.stringify(list))
  }
}

export function removeFromWatchlist(id) {
  const list = getWatchlist().filter(m => m.id !== id)
  localStorage.setItem('watchlist', JSON.stringify(list))
}
