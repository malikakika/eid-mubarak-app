<template>
  <main class="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
    
    <!-- Back Button -->
    <button
      @click="goBack"
      class="fixed top-6 left-6 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 font-semibold z-50"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
      </svg>
      Retour
    </button>

    <div class="space-y-8 w-full max-w-4xl">
      
      <!-- Card Preview Container -->
      <div class="flex justify-center">
        <CardPreview
          :name="name"
          :message="message"
          :theme="theme"
        />
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-4 justify-center flex-wrap">
        <DownloadButton />
        <ShareButtons :message="message" />
      </div>

      <!-- Info Text -->
      <p class="text-center text-gray-600 text-sm">
        Téléchargez votre carte ou partagez-la directement ! 🎉
      </p>
    </div>
  </main>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

import CardPreview from '../components/CardPreview.vue'
import DownloadButton from '../components/DownloadButton.vue'
import ShareButtons from '../components/ShareButtons.vue'

const route = useRoute()
const router = useRouter()

const name = route.query.name
const message = route.query.message
const theme = route.query.theme

function goBack() {
  router.push('/')
}
</script>