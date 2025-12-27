<template>
  <div class="pt-20">
    <!-- HERO SECTION -->
    <section class="relative bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 text-white">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center ">
          Trending Movies 🔥
        </h1>
        <p class="text-lg text-gray-200 max-w-xl mx-auto ">
          Discover what everyone is watching right now on LibFlix Hub.
        </p>
      </div>
    </section>

    <!-- MOVIE GRID -->
    <section class="container mx-auto px-4 py-10">
      <div v-if="loading" class="text-center py-20 text-gray-600">
        Loading trending movies...
      </div>

      <div
        v-else
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '@/components/MovieCard.vue'
import { fetchPopularMovies } from '@/services/tmdb'

const movies = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const data = await fetchPopularMovies()
    movies.value = data.results
  } catch (err) {
    console.error('Failed to fetch trending movies:', err)
  } finally {
    loading.value = false
  }
})
</script>
