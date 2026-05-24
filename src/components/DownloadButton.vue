<template>
  <button
    @click="downloadCard"
    :disabled="isDownloading"
    class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
  >
    <svg v-if="!isDownloading" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
    </svg>
    <div v-else class="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    {{ isDownloading ? 'Téléchargement...' : 'Télécharger la carte' }}
  </button>
</template>

<script setup>
import { ref } from 'vue'
import html2canvas from 'html2canvas'

const isDownloading = ref(false)

async function downloadCard() {
  try {
    isDownloading.value = true
    
    const card = document.getElementById('eid-card')
    
    if (!card) {
      alert('Carte non trouvée!')
      return
    }

    // Attendre un peu pour que tout soit bien rendu
    await new Promise(resolve => setTimeout(resolve, 300))

    const canvas = await html2canvas(card, {
      scale: 2, // Meilleure qualité
      backgroundColor: null,
      logging: false,
      useCORS: true,
      allowTaint: true,
      imageTimeout: 0,
      removeContainer: true
    })

    // Convertir en blob puis télécharger
    canvas.toBlob((blob) => {
      if (!blob) {
        alert('Erreur lors de la création de l\'image')
        return
      }
      
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = `eid-mubarak-${Date.now()}.png`
      link.href = url
      link.click()
      
      // Nettoyer après un court délai
      setTimeout(() => URL.revokeObjectURL(url), 100)
    }, 'image/png', 1.0)

  } catch (error) {
    console.error('Erreur lors du téléchargement:', error)
    alert('Erreur lors du téléchargement de la carte. Veuillez réessayer.')
  } finally {
    isDownloading.value = false
  }
}
</script>