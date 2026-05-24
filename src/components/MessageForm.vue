<template>
  <div class="message-form-container">
    <textarea
      v-model="model"
      rows="5"
      class="message-textarea"
      :class="{ 'has-content': model }"
      placeholder="✍️ Personnalisez votre message ici..."
    />
    <div v-if="model" class="char-count">
      {{ model.length }} caractères
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'

const model = defineModel()

// Animation quand le message change
watch(model, (newVal, oldVal) => {
  if (newVal !== oldVal && newVal) {
    // Le textarea aura une animation grâce à la classe has-content
  }
})
</script>

<style scoped>
.message-form-container {
  position: relative;
}

.message-textarea {
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(167, 139, 250, 0.2);
  background: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  resize: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  font-family: inherit;
  line-height: 1.6;
}

.message-textarea:focus {
  outline: none;
  border-color: rgba(167, 139, 250, 0.6);
  box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.1),
              0 8px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.message-textarea.has-content {
  animation: messageAppear 0.5s ease-out;
  border-color: rgba(139, 92, 246, 0.4);
}

@keyframes messageAppear {
  0% {
    opacity: 0.5;
    transform: scale(0.98);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.char-count {
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 0.75rem;
  color: rgb(139, 92, 246);
  background: rgba(255, 255, 255, 0.95);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  pointer-events: none;
}
</style>