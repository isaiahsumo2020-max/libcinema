<template>
  <div class="container mx-auto px-4 pt-28">
    <h1 class="text-2xl font-bold mb-6">My Watchlist</h1>

    <div v-if="movies.length === 0">No movies saved.</div>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '@/components/MovieCard.vue'
import { getWatchlist } from '@/services/watchlist'

const movies = ref([])

onMounted(() => {
  movies.value = getWatchlist()
})
</script>
