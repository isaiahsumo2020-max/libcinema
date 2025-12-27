<template>
  <footer class="bg-blue-950 text-gray-300 mt-16">
    <div class="container mx-auto px-4 md:px-8 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

      <!-- Brand -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-3">LibCinema <span class="ml-1 text-red-800">🇱🇷</span></h2>
        <p class="text-gray-400 text-sm">
          Explore movies, discover hidden gems, and stay up-to-date with the latest releases. Created by Isaiah N. Sumo &
          Pastorankin.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold text-red-800 mb-3">Quick Links</h3>
        <ul class="space-y-2">
          <li><router-link to="/" class="hover:text-orange-400 transition">Home</router-link></li>
          <li><router-link to="/browse" class="hover:text-orange-400 transition">Browse Movies</router-link></li>
          <li><router-link to="/search" class="hover:text-orange-400 transition">Search</router-link></li>
          <li><router-link to="/signup" class="hover:text-orange-400 transition">Sign Up</router-link></li>
        </ul>
      </div>

      <!-- Browse Categories -->
      <div>
        <h3 class="text-lg font-semibold text-red-800 mb-3">Categories</h3>
        <ul class="space-y-2">
          <li><router-link to="/browse?genre=action" class="hover:text-orange-400 transition">Action</router-link></li>
          <li><router-link to="/browse?genre=comedy" class="hover:text-orange-400 transition">Comedy</router-link></li>
          <li><router-link to="/browse?genre=drama" class="hover:text-orange-400 transition">Drama</router-link></li>
          <li><router-link to="/browse?genre=african" class="hover:text-orange-400 transition">African Movies</router-link></li>
        </ul>
      </div>

      <!-- Contact & Social -->
      <div>
        <h3 class="text-lg font-semibold text-red-800 mb-3">Contact & Social</h3>

        <!-- Email -->
        <p class="text-gray-400 text-sm mb-1">
          📧 <a href="mailto:isaiahsumo2020@gmail.com" class="hover:text-orange-400 transition">support@libcinema.com</a>
        </p>

        <!-- Phone -->
        <p class="text-gray-400 text-sm mb-1">
          📱 <a href="tel:https://wa.me/message/KSGR7ZMWDQTYI1" class="hover:text-orange-400 transition">+231 776 750 865</a>
        </p>

        <!-- Platform -->
        <p class="text-gray-400 text-sm mb-3">
          🌐 <a href="https://libcinema.netlify.app" target="_blank" class="hover:text-orange-400 transition">Visit LibCinema</a>
        </p>

        <!-- Social Icons -->
        <div class="flex items-center gap-4 mt-2">
          <Facebook />
          <TwitterIcon />
        </div>

      </div>
    </div>

    <div class="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-sm">
      <div class="mb-1">&copy; {{ currentYear }} LibCinema. All rights reserved.</div>
      <div class="text-gray-400 text-xs">
        Powered by <a href="https://www.themoviedb.org/" target="_blank"
          class="hover:text-orange-400 transition">TMDB</a>
      </div>
    </div>
    <!-- Tagline below navbar -->
<div class="fixed top-20 left-0 right-0 z-40 bg-red-700 text-center py-2">
  <p class="text-white text-lg font-semibold"></p>
</div>

  </footer>
</template>

<script setup>
import { computed } from 'vue'
const currentYear = computed(() => new Date().getFullYear())
</script>
