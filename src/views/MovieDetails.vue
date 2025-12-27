<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchMovieDetails, fetchMovieVideos, getImageUrl } from '@/services/tmdb'

const route = useRoute()
const movie = ref(null)
const loading = ref(true)
const posterUrl = ref('')
const trailerKey = ref('')

onMounted(async () => {
  const id = route.params.id
  try {
    const data = await fetchMovieDetails(id)
    movie.value = data
    posterUrl.value = getImageUrl(data.poster_path)

    // Fetch trailer
    const videos = await fetchMovieVideos(id)
    const trailer = videos.results.find(v => v.type === 'Trailer' && v.site === 'YouTube')
    if (trailer) trailerKey.value = trailer.key
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container mx-auto px-4 pt-28 pb-10">
    <div v-if="loading" class="text-center py-20">Loading movie details...</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Poster -->
      <div class="rounded overflow-hidden shadow-lg">
        <img :src="posterUrl" :alt="movie.title" class="w-full h-full object-cover" />
      </div>

      <!-- Movie Info -->
      <div class="md:col-span-2">
        <h1 class="text-3xl font-bold mb-4 text-blue-900">{{ movie.title }}</h1>
        <p class="text-gray-600 mb-2"><strong>Release Date:</strong> {{ movie.release_date }}</p>
        <p class="text-gray-600 mb-2"><strong>Rating:</strong> {{ movie.vote_average.toFixed(1) }}/10</p>
        <p class="text-gray-700 mt-4">{{ movie.overview }}</p>

        <!-- Genres -->
        <div class="mt-6 flex flex-wrap gap-2">
          <span v-for="genre in movie.genres" :key="genre.id"
                class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {{ genre.name }}
          </span>
        </div>

        <!-- Trailer Player -->
        <div v-if="trailerKey" class="mt-8">
          <iframe
            :src="`https://www.youtube.com/embed/${trailerKey}`"
            class="w-full h-64 md:h-96 rounded shadow-lg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
