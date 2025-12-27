<template >
  <div class="max-w-2xl mx-auto">
    <!-- Title -->
    <p
      class="mb-4 text-center font-extrabold transition-all duration-300"
      :class="searchText ? 'opacity-40 scale-95' : 'opacity-100 scale-100'"
      style="font-size: 1.75rem"
    >
      <span class="text-blue-600 text-[42px] font-bold">LibCinema</span>
      <span class="ml-1">🇱🇷</span>,
      <span class="text-gray-700">Search Movies here</span>
    </p>

    <!-- Search Box -->
    <div class="relative">
      <div
        class="flex items-center px-5 py-3 bg-white rounded-full shadow-md border focus-within:ring-2 focus-within:ring-blue-500 transition"
      >
        <input
          v-model="searchText"
          @focus="open = true"
          @keydown.enter="submitSearch"
          type="text"
          placeholder="Search movies..."
          class="flex-1 outline-none text-gray-700 pr-3"
        />

        <!-- Voice Search -->
        <button
          @click="startVoice"
          class="mr-3 text-gray-500 hover:text-orange-400 transition"
          title="Voice search"
        >
          🎤
        </button>

        <!-- Search Button -->
        <button
          @click="submitSearch"
          class="text-gray-500 hover:text-blue-600 transition"
          title="Search"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <!-- Recent Searches -->
      <Transition name="dropdown">
        <div
          v-if="open && recentSearches.length"
          class="absolute w-full mt-3 bg-white rounded-xl shadow-lg border z-50"
        >
          <div class="px-4 py-2 text-sm text-gray-500">
            Recent searches
          </div>

          <ul>
            <li
              v-for="(item, index) in recentSearches"
              :key="index"
              @click="selectSearch(item)"
              class="px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
            >
              ⏱ <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>

          <button
            @click="clearHistory"
            class="w-full text-sm text-red-500 py-2 hover:bg-red-50 rounded-b-xl"
          >
            Clear search history
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['search'])

const searchText = ref('')
const recentSearches = ref([])
const open = ref(false)

onMounted(() => {
  recentSearches.value =
    JSON.parse(localStorage.getItem('recent-searches')) || []
})

function submitSearch() {
  if (!searchText.value.trim()) return
  saveSearch(searchText.value)
  emit('search', searchText.value)
  open.value = false
}

function selectSearch(value) {
  searchText.value = value
  emit('search', value)
  open.value = false
}

function saveSearch(value) {
  recentSearches.value = [
    value,
    ...recentSearches.value.filter(v => v !== value)
  ].slice(0, 5)

  localStorage.setItem(
    'recent-searches',
    JSON.stringify(recentSearches.value)
  )
}

function clearHistory() {
  recentSearches.value = []
  localStorage.removeItem('recent-searches')
}

/* 🎤 Voice Search */
function startVoice() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition

  if (!SpeechRecognition) {
    alert('Voice search not supported in this browser')
    return
  }

  const recognition = new SpeechRecognition()
  recognition.lang = 'en-US'
  recognition.start()

  recognition.onresult = (event) => {
    searchText.value = event.results[0][0].transcript
    submitSearch()
  }
}
</script>

<style>
/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.25s ease;
}
.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
