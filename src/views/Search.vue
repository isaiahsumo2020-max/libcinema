<template>
  <div class="container mx-auto px-4 pt-28 pb-10">
    <SearchBar @search="handleSearch" />

    <div v-if="loading" class="text-center py-10">Searching...</div>

    <div
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8"
    >
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import MovieCard from '@/components/MovieCard.vue'
import { searchMovies } from '@/services/tmdb'

const movies = ref([])
const loading = ref(false)

async function handleSearch(query) {
  loading.value = true
  try {
    const data = await searchMovies(query)
    movies.value = data.results
  } finally {
    loading.value = false
  }
}
</script>
