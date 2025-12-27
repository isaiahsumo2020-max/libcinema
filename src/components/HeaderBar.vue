<template>
  <nav class="fixed h-23 top-0 left-0 right-0 z-50 bg-blue-950 backdrop-blur-md transition-all duration-300"
    :class="scrolled ? 'shadow-lg bg-blue-950' : ''">
    <div class="container mx-auto px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between">

      <!-- Logo -->
      <!-- <router-link to="/" class="text-[52px] font-bold md:text-3xl text-white hover:text-white transition-colors"> -->
       <router-link to="/" class="flex items-center">
      <img
        src="@/assets/libcinema-logo.png"
        alt="LibCinema Logo"
        class="h-[3vh] md:h-25 w-[300px] transition-transform duration-200 hover:scale-105"
      />
    </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8 text-white font-medium text-[30px]">
        <router-link to="/" class="hover:text-orange-400 transition">Home</router-link>
        <router-link to="/browse" class="hover:text-orange-400 transition">Browse</router-link>
        <router-link to="/search" class="hover:text-orange-400 transition">Search</router-link>
      </div>

      <!-- Auth & Mobile Hamburger -->
      <div class="flex items-center gap-4">
        <!-- Desktop Auth Buttons -->
        <div class="hidden md:flex gap-3">
          <router-link v-if="!isLoggedIn" to="/signin"
            class="px-4 py-1 border border-gray-400 rounded text-white hover:bg-red-800 hover:text-white transition">Sign
            In</router-link>

          <router-link v-if="!isLoggedIn" to="/signup"
            class="px-4 py-1  bg-red-800 rounded hover:bg-red-700 text-white transition">Sign Up</router-link>
          <div v-if="isLoggedIn" class="flex items-center gap-2">
            <span class="text-white">{{ userName }}</span>
            <button @click="handleLogout"
              class="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 transition text-sm">Sign Out</button>
          </div>
        </div>

        <!-- Mobile Hamburger -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white">
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="md:hidden ml-60  bg-blue-950  text-white p-4 space-y-2 rounded-b shadow-lg">
        <router-link @click="closeMenu" to="/" class="block py-2 hover:text-orange-400 transition">Home</router-link>
        <router-link @click="closeMenu" to="/browse"
          class="block py-2 hover:text-orange-400 transition">Browse</router-link>
        <router-link @click="closeMenu" to="/search"
          class="block py-2 hover:text-orange-400 transition">Search</router-link>

        <div class="mt-4 space-y-2">
          <router-link v-if="!isLoggedIn" @click="closeMenu" to="/signin"
            class="block py-2 border border-gray-600 rounded hover:bg-orange-500 hover:text-white transition">Sign
            In</router-link>
          <router-link v-if="!isLoggedIn" @click="closeMenu" to="/signup"
            class="block py-2 bg-orange-500 rounded hover:bg-orange-400 text-white transition">Sign Up</router-link>
          <button v-if="isLoggedIn" @click="handleLogout"
            class="block w-full py-2 bg-gray-800 rounded hover:bg-gray-700 transition">Sign Out</button>
        </div>
      </div>
    </transition>
  </nav>
  <!-- Tagline below navbar -->
<div class="fixed top-20 left-0 right-0 z-40 bg-white text-center py-2">
  <p class="text-white text-lg font-semibold"></p>
</div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const router = useRouter()
const route = useRoute()

const isLoggedIn = computed(() => {
  const session = localStorage.getItem('session')
  return session ? JSON.parse(session).loggedIn : false
})

const userName = computed(() => {
  const session = localStorage.getItem('session')
  return session ? JSON.parse(session).name : ''
})

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

watch(() => route.path, () => mobileMenuOpen.value = false)

function closeMenu() { mobileMenuOpen.value = false }

function handleLogout() {
  localStorage.removeItem('session')
  mobileMenuOpen.value = false
  router.push('/')
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
