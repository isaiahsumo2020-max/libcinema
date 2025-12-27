<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)   

function signin() {
  const savedUser = JSON.parse(localStorage.getItem('user'))

  if (!savedUser || savedUser.email !== email.value || savedUser.password !== password.value) {
    alert('Invalid credentials')
    return
  }

  localStorage.setItem('session', JSON.stringify({
    loggedIn: true,
    name: savedUser.name,
    email: savedUser.email
  }))

  router.push('/')
}
</script>

<template>
  <div class="container mx-auto px-4 pt-28 max-w-md">
    <h1 class="text-2xl font-bold mb-6 text-center">Sign In</h1>

    <form @submit.prevent="signin" class="space-y-4">
      <input v-model="email" placeholder="Email" class="input" />

      <!-- Password the with Eye -->
      <div class="relative">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          class="input pr-10"
        />
        <button
          type="button"
          @click="showPassword = !showPassword"
          class="absolute right-3 top-2 text-gray-500 hover:text-orange-500"
        >
          <!-- eye should Open -->
          <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>

          <!-- Eye Closed -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.97 9.97 0 012.042-3.362m3.362-2.042A9.97 9.97 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.97 9.97 0 01-2.042 3.362M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 3l18 18"/>
          </svg>
        </button>
      </div>

      <button class="btn-primary w-full">Sign In</button>
    </form>
  </div>
</template>

<style scoped>
.input { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px }
.btn-primary { background: rgb(3, 3, 93); color: white; padding: 10px; border-radius: 6px }
</style>
