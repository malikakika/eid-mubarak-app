<template>
  <main class="main-container">
    
    <!-- Animated Background Gradient -->
    <div class="bg-gradient-animation"></div>
    
    <!-- Floating Orbs Background -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    
    <!-- Decorative Background Elements with parallax -->
    <div class="deco-emoji deco-1">🌙</div>
    <div class="deco-emoji deco-2" style="animation-delay: 1s">✨</div>
    <div class="deco-emoji deco-3" style="animation-delay: 2s">⭐</div>
    <div class="deco-emoji deco-4" style="animation-delay: 1.5s">🕌</div>
    
    <!-- Glassmorphism Card -->
    <div class="glass-card">

      <!-- Shimmer Effect -->
      <div class="shimmer"></div>

      <!-- Decorative corner accents with glow -->
      <div class="corner-glow corner-tl"></div>
      <div class="corner-glow corner-tr"></div>
      <div class="corner-glow corner-bl"></div>
      <div class="corner-glow corner-br"></div>

      <!-- Header with animation -->
      <div class="header-section">
        <div class="moon-container">
          <div class="moon-glow-bg"></div>
          <div class="moon-icon">🌙</div>
        </div>
        <h1 class="title-gradient">
          Eid Mubarak Generator
        </h1>
        <div class="divider-container">
          <div class="divider-line-header"></div>
          <span class="divider-emoji">✨</span>
          <div class="divider-line-header"></div>
        </div>
        <p class="subtitle">Créez une carte magnifique et personnalisée</p>
      </div>

      <div class="form-container">

        <!-- Name Input with Icon and Glow -->
        <div class="input-group">
          <label class="input-label">👤 Destinataire</label>
          <div class="input-wrapper">
            <div class="input-icon">👤</div>
            <input
              v-model="name"
              type="text"
              placeholder="Entrez le nom du destinataire"
              class="input-field"
            />
          </div>
        </div>

        <!-- Language Selector -->
        <div class="input-group">
          <label class="input-label">
            🌍 Langue du message
            <span class="badge-info">{{ wishes[lang]?.length || 0 }} vœux disponibles</span>
          </label>
          <LanguageSelector v-model="lang" />
        </div>

        <!-- Theme Selector -->
        <div class="input-group">
          <label class="input-label">🎨 Thème de la carte</label>
          <ThemeSelector v-model="theme" />
        </div>

        <!-- Generate Button with Gradient Animation -->
        <button
          @click="generateMessage"
          class="btn-generate"
        >
          <span class="btn-shine"></span>
          <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span class="btn-text">{{ message ? ' Générer un autre message' : '✨ Générer un message' }}</span>
          <div class="btn-particles">
            <span class="particle-btn">✨</span>
            <span class="particle-btn">⭐</span>
            <span class="particle-btn">✨</span>
          </div>
        </button>

        <!-- Helper text -->
        <p v-if="message" class="helper-text">
          💡 Cliquez à nouveau pour découvrir d'autres vœux !
        </p>

        <!-- Message Form -->
        <div class="input-group">
          <label class="input-label">💌 Votre message personnalisé</label>
          <MessageForm v-model="message" />
        </div>

        <!-- View Card Button with Magic Effect -->
        <button
          @click="goToCard"
          :disabled="!name || !message"
          class="btn-primary"
          :class="{ 'btn-disabled': !name || !message }"
        >
          <span class="btn-shine"></span>
          <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
          <span class="btn-text">Voir ma carte ✨</span>
        </button>

      </div>

    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import LanguageSelector from '../components/LanguageSelector.vue'
import ThemeSelector from '../components/ThemeSelector.vue'
import MessageForm from '../components/MessageForm.vue'

import { wishes } from '../data/wishes'

const router = useRouter()

const name = ref('')
const lang = ref('fr')
const theme = ref('gold')
const message = ref('')
const messageKey = ref(0) // Pour l'animation de changement

function generateMessage() {
  const availableMessages = wishes[lang.value]
  
  // Éviter de générer le même message deux fois de suite
  let newMessage
  do {
    newMessage = availableMessages[Math.floor(Math.random() * availableMessages.length)]
  } while (newMessage === message.value && availableMessages.length > 1)
  
  message.value = newMessage
  messageKey.value++ // Trigger animation
}

function goToCard() {
  if (!name.value || !message.value) {
    alert('Veuillez remplir le nom et le message')
    return
  }
  
  router.push({
    path: '/card',
    query: {
      name: name.value,
      message: message.value,
      theme: theme.value
    }
  })
}
</script>

<style scoped>
/* Main Container */
.main-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow: hidden;
  position: relative;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-animation {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(237, 100, 166, 0.3), transparent 50%),
              radial-gradient(circle at 40% 90%, rgba(121, 159, 245, 0.3), transparent 50%);
  animation: gradientMove 20s ease infinite;
}

@keyframes gradientMove {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

/* Floating Orbs */
.orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: orbFloat 20s infinite ease-in-out;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, #ff6b9d, #c06bff);
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  bottom: -100px;
  right: -100px;
  animation-delay: 7s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #ffd89b, #19547b);
  top: 50%;
  left: 50%;
  animation-delay: 14s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -50px) scale(1.1); }
  66% { transform: translate(-50px, 50px) scale(0.9); }
}

/* Decorative Elements */
.deco-emoji {
  position: fixed;
  font-size: 3.75rem;
  opacity: 0.2;
  animation: float-slow 8s ease-in-out infinite;
  pointer-events: none;
}

.deco-1 { top: 2.5rem; left: 2.5rem; }
.deco-2 { top: 5rem; right: 5rem; font-size: 3rem; }
.deco-3 { bottom: 5rem; left: 5rem; font-size: 3rem; }
.deco-4 { bottom: 2.5rem; right: 2.5rem; }

@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Glassmorphism Card */
.glass-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  animation: cardEntrance 0.8s ease-out;
  width: 100%;
  max-width: 42rem;
  z-index: 10;
}

@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Shimmer Effect */
.shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.4), 
    transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Corner Glows */
.corner-glow {
  position: absolute;
  width: 100px;
  height: 100px;
  opacity: 0.4;
  animation: cornerPulse 3s ease-in-out infinite;
}

.corner-tl {
  top: -50px;
  left: -50px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent);
}

.corner-tr {
  top: -50px;
  right: -50px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent);
  animation-delay: 1s;
}

.corner-bl {
  bottom: -50px;
  left: -50px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent);
  animation-delay: 2s;
}

.corner-br {
  bottom: -50px;
  right: -50px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.4), transparent);
  animation-delay: 1.5s;
}

@keyframes cornerPulse {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.2); opacity: 0.6; }
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 3rem;
  animation: headerSlide 1s ease-out;
}

@keyframes headerSlide {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.moon-container {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.moon-glow-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.4), transparent);
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
}

.moon-icon {
  position: relative;
  z-index: 2;
  font-size: 4.5rem;
  filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.5));
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(-5deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

.title-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleShine 3s ease-in-out infinite;
  font-size: 3.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

@keyframes titleShine {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.2); }
}

.divider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.divider-line-header {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #667eea, transparent);
  border-radius: 2px;
}

.divider-emoji {
  font-size: 1.5rem;
}

.subtitle {
  color: rgb(55, 65, 81);
  font-size: 1.125rem;
  font-weight: 500;
}

/* Form Container */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Input Group */
.input-group {
  animation: inputSlide 0.6s ease-out backwards;
}

.input-group:nth-child(1) { animation-delay: 0.1s; }
.input-group:nth-child(2) { animation-delay: 0.2s; }
.input-group:nth-child(3) { animation-delay: 0.3s; }
.input-group:nth-child(4) { animation-delay: 0.4s; }
.input-group:nth-child(5) { animation-delay: 0.5s; }
.input-group:nth-child(6) { animation-delay: 0.6s; }

@keyframes inputSlide {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.input-label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 0.5rem;
  margin-left: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.badge-info {
  font-size: 0.75rem;
  font-weight: 500;
  color: rgb(139, 92, 246);
  background: rgba(139, 92, 246, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  z-index: 10;
  pointer-events: none;
}

.input-field {
  width: 100%;
  padding: 1rem 1rem 1rem 3.5rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(167, 139, 250, 0.2);
  background: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.input-field:focus {
  outline: none;
  border-color: rgba(167, 139, 250, 0.6);
  box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.1),
              0 8px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Button Styles */
.btn-generate,
.btn-primary {
  position: relative;
  width: 100%;
  padding: 1.25rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  overflow: hidden;
  border: none;
  cursor: pointer;
}

.btn-generate {
  background: linear-gradient(135deg, #fbbf24, #f59e0b, #f97316);
  color: #1f2937;
  box-shadow: 0 10px 25px rgba(251, 191, 36, 0.3);
}

.btn-generate:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(251, 191, 36, 0.4);
}

.btn-generate:active {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6, #a855f7, #ec4899);
  color: white;
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
}

.btn-primary:hover:not(.btn-disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(139, 92, 246, 0.5);
}

.btn-primary:active:not(.btn-disabled) {
  transform: translateY(-1px);
}

.btn-disabled {
  background: linear-gradient(135deg, #9ca3af, #6b7280);
  cursor: not-allowed;
  box-shadow: 0 4px 10px rgba(107, 114, 128, 0.2);
}

.btn-icon {
  width: 1.75rem;
  height: 1.75rem;
  transition: transform 0.3s ease;
}

.btn-generate:hover .btn-icon {
  transform: rotate(12deg);
}

.btn-primary:hover .btn-icon {
  transform: scale(1.1);
}

.btn-text {
  font-weight: 700;
}

.helper-text {
  text-align: center;
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  margin-top: -0.75rem;
  animation: fadeInBounce 0.5s ease-out;
}

@keyframes fadeInBounce {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.3), 
    transparent);
  transition: left 0.5s ease;
}

.btn-generate:hover .btn-shine,
.btn-primary:hover .btn-shine {
  left: 100%;
}

.btn-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle-btn {
  position: absolute;
  opacity: 0;
  font-size: 1.5rem;
}

.btn-generate:hover .particle-btn {
  animation: particleBurst 1s ease-out;
}

.particle-btn:nth-child(1) {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.particle-btn:nth-child(2) {
  top: 50%;
  right: 20%;
  animation-delay: 0.1s;
}

.particle-btn:nth-child(3) {
  bottom: 20%;
  left: 50%;
  animation-delay: 0.2s;
}

@keyframes particleBurst {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(20px, -20px) scale(1.5);
  }
}
</style>