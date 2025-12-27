export function getWatchList() {
  return JSON.parse(localStorage.getItem('watchlist')) || []
}

export function addToWatchList(movie) {
  const list = getWatchList()
  if (!list.find(m => m.id === movie.id)) {
    list.push(movie)
    localStorage.setItem('watchlist', JSON.stringify(list))
  }
}

export function removeFromWatchList(id) {
  const list = getWatchList().filter(m => m.id !== id)
  localStorage.setItem('watchlist', JSON.stringify(list))
}
