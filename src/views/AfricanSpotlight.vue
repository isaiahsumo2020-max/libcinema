<template>
  <div class="container mx-auto px-4 pt-28">
    <h1 class="text-2xl font-bold mb-6 text-center">
      African Movie Spotlight 🇳🇬 🇱🇷
    </h1>

    <div v-if="loading" class="text-center py-20">Loading African movies...</div>

    <div v-else class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '@/components/MovieCard.vue'
import { fetchAfricanMovies } from '@/services/tmdb'

const movies = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const data = await fetchAfricanMovies()
    movies.value = data.results
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>
