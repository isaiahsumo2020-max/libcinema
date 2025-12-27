<template>
  <div class="min-h-screen bg-white text-black">
    <!-- Global Header -->
    <HeaderBar />

    <!-- Main content rendered via routing -->
    <main class="transition-all duration-300 pt-10 bg-gray-400">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- Global Footer -->
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
import { RouterView } from 'vue-router'
</script>

<style>
/* Fade transition for page changes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Smooth scroll globally */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #08114d;
}
::-webkit-scrollbar-thumb {
  background: #0d3a52;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #59697d;
}
</style>
