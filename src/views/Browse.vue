<template>
  <div class="container mx-auto px-4 pt-28 pb-10">
    <h1 class="text-4xl font-bold mb-6 text-blue-900 text-center">Browse Movies</h1>

    <div v-if="loading" class="text-center py-20">Loading movies...</div>

    <div v-else>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>

      <!-- Pagination Controls -->
      <div class="flex justify-center mt-8 gap-4">
        <button
          @click="prevPage"
          :disabled="page === 1"
          class="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span class="px-4 py-2 font-medium">{{ page }}</span>

        <button
          @click="nextPage"
          class="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import MovieCard from '@/components/MovieCard.vue'
import { fetchPopularMovies } from '@/services/tmdb'

const movies = ref([])
const loading = ref(true)
const page = ref(1)

async function loadMovies() {
  loading.value = true
  try {
    const data = await fetchPopularMovies(page.value)
    movies.value = data.results
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}

function nextPage() {
  page.value++
}

function prevPage() {
  if (page.value > 1) page.value--
}

// Watch page changes
watch(page, () => loadMovies())

// Initial load
onMounted(loadMovies)
</script>
