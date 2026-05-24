<template>
  <select
    v-model="model"
    class="w-full p-4 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-lg font-medium bg-white"
  >
    <option value="gold">✨ Or Royal</option>
    <option value="dark">🌙 Nuit Étoilée</option>
    <option value="green">🕌 Vert Islamique</option>
    <option value="blue">💫 Bleu Mystique</option>
    <option value="sunset">🌅 Coucher de Soleil</option>
  </select>
</template>

<script setup>
const model = defineModel()
</script>