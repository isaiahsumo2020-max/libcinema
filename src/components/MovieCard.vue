<template>
  <router-link :to="`/movie/${movie.id}`"
    class="group relative block cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10">
    <div class="relative overflow-hidden rounded bg-gray-600 shadow-lg">
      <!-- Movie Poster -->
      <div class="relative aspect-[2/3] overflow-hidden bg-gray-600">
        <img :src="posterUrl" :alt="movie.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          @error="handleImageError" />

        <!-- Rating Badge -->
        <div class="absolute top-2 right-2 bg-white/60 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
          <svg class="w-3.5 h-3.5 text-blue-800 fill-current" viewBox="0 0 20 20">
            <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <span class="text-red-500 text-xs font-semibold">{{ rating }}</span>
        </div>
      </div>
      <div class="p-3 bg-gray-700">
        <h3 class="text-sm font-semibold text-white truncate">
          {{ movie.title || movie.name }}
        </h3>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { getImageUrl } from '@/services/tmdb'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const posterUrl = computed(() => getImageUrl(props.movie.poster_path))
const rating = computed(() => props.movie.vote_average?.toFixed(1) || 'N/A')

function handleImageError(event) {
  event.target.src = 'https://via.placeholder.com/500x750?text=No+Image'
}
</script>