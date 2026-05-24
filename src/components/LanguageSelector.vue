<template>
  <select
    v-model="model"
    class="w-full p-4 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-lg font-medium bg-white"
  >
    <option value="fr">🇫🇷 Français</option>
    <option value="en">🇬🇧 English</option>
    <option value="ar">🇸🇦 العربية</option>
  </select>
</template>

<script setup>
const model = defineModel()
</script>