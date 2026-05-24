<template>
  <div
    id="eid-card"
    :class="themeClass"
    class="relative rounded-3xl overflow-hidden shadow-2xl transition-all card-container"
    style="width: 800px; height: 1000px;"
  >
    <!-- Animated Gradient Overlay -->
    <div class="absolute inset-0 opacity-20 animated-gradient"></div>

    <!-- Islamic Geometric Pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-star" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <!-- 8-point Islamic star -->
            <path d="M60 20 L70 50 L100 50 L75 70 L85 100 L60 80 L35 100 L45 70 L20 50 L50 50 Z" 
                  fill="currentColor" opacity="0.4"/>
            <circle cx="60" cy="60" r="8" fill="currentColor" opacity="0.6"/>
            <!-- Smaller decorative elements -->
            <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3"/>
            <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.3"/>
            <circle cx="20" cy="100" r="3" fill="currentColor" opacity="0.3"/>
            <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star)"/>
      </svg>
    </div>

    <!-- Floating Particles -->
    <div class="particles">
      <div class="particle" style="left: 10%; animation-delay: 0s;">✨</div>
      <div class="particle" style="left: 20%; animation-delay: 1s;">⭐</div>
      <div class="particle" style="left: 30%; animation-delay: 2s;">✨</div>
      <div class="particle" style="left: 40%; animation-delay: 0.5s;">💫</div>
      <div class="particle" style="left: 50%; animation-delay: 1.5s;">⭐</div>
      <div class="particle" style="left: 60%; animation-delay: 2.5s;">✨</div>
      <div class="particle" style="left: 70%; animation-delay: 0.8s;">💫</div>
      <div class="particle" style="left: 80%; animation-delay: 1.8s;">⭐</div>
      <div class="particle" style="left: 90%; animation-delay: 2.2s;">✨</div>
    </div>

    <!-- Decorative Light Rays -->
    <div class="light-rays"></div>

    <!-- Main Content -->
    <div class="relative z-10 h-full flex flex-col items-center justify-center p-16">
      
      <!-- Top Ornament -->
      <div class="ornament-top mb-12">
        <svg width="300" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40 Q 40 20, 70 40 T 130 40 T 190 40 T 250 40 T 290 40" 
                stroke="currentColor" stroke-width="3" opacity="0.6"/>
          <circle cx="70" cy="40" r="6" fill="currentColor" opacity="0.8"/>
          <circle cx="150" cy="40" r="6" fill="currentColor" opacity="0.8"/>
          <circle cx="230" cy="40" r="6" fill="currentColor" opacity="0.8"/>
          <!-- Decorative crescents -->
          <path d="M 150 15 Q 160 25, 150 35 Q 155 25, 150 15" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>

      <!-- Crescent Moon with Glow -->
      <div class="mb-10 relative moon-container">
        <div class="moon-glow"></div>
        <div class="text-9xl animate-float moon-emoji">🌙</div>
        <div class="absolute -top-6 -right-6 text-6xl animate-twinkle">✨</div>
        <div class="absolute -bottom-4 -left-4 text-4xl animate-twinkle" style="animation-delay: 0.5s">⭐</div>
      </div>

      <!-- Main Title with 3D Effect -->
      <h1 class="text-8xl font-bold mb-8 tracking-wide title-3d relative">
        <span class="title-layer">Eid Mubarak</span>
      </h1>

      <!-- Decorative Divider -->
      <div class="flex items-center gap-4 mb-10 divider-animate">
        <div class="divider-line"></div>
        <div class="text-4xl rotate-45 star-spin">✦</div>
        <div class="divider-line"></div>
      </div>

      <!-- Recipient Name with Elegant Frame -->
      <div class="name-frame mb-12">
        <div class="frame-decoration frame-top"></div>
        <h2 class="text-6xl mb-2 font-serif italic name-elegant px-8 py-4">
          {{ name || 'Dear Friend' }}
        </h2>
        <div class="frame-decoration frame-bottom"></div>
      </div>

      <!-- Message in Elegant Box -->
      <div class="message-box max-w-xl mb-10">
        <div class="message-border"></div>
        <p class="text-2xl leading-relaxed text-center font-light message-elegant px-6 py-4">
          {{ message || 'May this blessed occasion bring you joy, peace, and prosperity.' }}
        </p>
      </div>

      <!-- Bottom Ornament -->
      <div class="ornament-bottom mt-8">
        <svg width="300" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40 Q 40 60, 70 40 T 130 40 T 190 40 T 250 40 T 290 40" 
                stroke="currentColor" stroke-width="3" opacity="0.6"/>
          <circle cx="70" cy="40" r="6" fill="currentColor" opacity="0.8"/>
          <circle cx="150" cy="40" r="6" fill="currentColor" opacity="0.8"/>
          <circle cx="230" cy="40" r="6" fill="currentColor" opacity="0.8"/>
        </svg>
      </div>

      <!-- Islamic Icons -->
      <div class="flex gap-8 text-5xl opacity-90 icons-float">
        <span class="icon-bounce">🕌</span>
        <span class="icon-bounce" style="animation-delay: 0.2s">🌙</span>
        <span class="icon-bounce" style="animation-delay: 0.4s">⭐</span>
        <span class="icon-bounce" style="animation-delay: 0.6s">🕌</span>
      </div>

    </div>

    <!-- Corner Ornaments with Animation -->
    <div class="corner-ornament corner-tl"></div>
    <div class="corner-ornament corner-tr"></div>
    <div class="corner-ornament corner-bl"></div>
    <div class="corner-ornament corner-br"></div>

    <!-- Border Glow Effect -->
    <div class="border-glow"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  message: String,
  theme: String
})

const themeClass = computed(() => {
  // Utiliser des classes personnalisées sans Tailwind pour éviter les problèmes oklch
  if (props.theme === 'dark') {
    return 'theme-dark'
  }

  if (props.theme === 'green') {
    return 'theme-green'
  }

  if (props.theme === 'blue') {
    return 'theme-blue'
  }

  if (props.theme === 'sunset') {
    return 'theme-sunset'
  }

  // Gold theme (default)
  return 'theme-gold'
})
</script>

<style scoped>
/* Thèmes avec couleurs RGB compatibles html2canvas */
.theme-gold {
  background: linear-gradient(135deg, rgb(234, 179, 8) 0%, rgb(245, 158, 11) 50%, rgb(251, 191, 36) 100%);
  color: rgb(17, 24, 39);
}

.theme-dark {
  background: linear-gradient(135deg, rgb(17, 24, 39) 0%, rgb(88, 28, 135) 50%, rgb(29, 78, 216) 100%);
  color: rgb(254, 243, 199);
}

.theme-green {
  background: linear-gradient(135deg, rgb(6, 95, 70) 0%, rgb(21, 128, 61) 50%, rgb(5, 150, 105) 100%);
  color: rgb(254, 252, 232);
}

.theme-blue {
  background: linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(67, 56, 202) 50%, rgb(124, 58, 237) 100%);
  color: rgb(254, 249, 195);
}

.theme-sunset {
  background: linear-gradient(135deg, rgb(234, 88, 12) 0%, rgb(239, 68, 68) 50%, rgb(168, 85, 247) 100%);
  color: rgb(255, 255, 255);
}

.card-container {
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Animated Gradient Overlay */
.animated-gradient {
  background: linear-gradient(45deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.3) 50%, 
    rgba(255, 255, 255, 0.1) 100%);
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Floating Particles */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  font-size: 24px;
  opacity: 0;
  animation: particleFloat 8s infinite;
}

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Light Rays */
.light-rays {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  transform: translate(-50%, -50%);
  background: radial-gradient(ellipse at center, 
    rgba(255, 255, 255, 0.1) 0%, 
    transparent 70%);
  animation: pulse 4s ease-in-out infinite;
}

/* Moon Container with Glow */
.moon-container {
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
}

.moon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
}

.moon-emoji {
  position: relative;
  z-index: 2;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

.animate-twinkle {
  animation: twinkle 2s ease-in-out infinite;
}

/* 3D Title Effect */
.title-3d {
  perspective: 1000px;
  text-shadow: 
    2px 2px 0px rgba(0, 0, 0, 0.1),
    4px 4px 0px rgba(0, 0, 0, 0.08),
    6px 6px 0px rgba(0, 0, 0, 0.06),
    0 0 40px rgba(255, 255, 255, 0.4),
    0 0 80px rgba(255, 255, 255, 0.2);
  animation: titleFloat 3s ease-in-out infinite;
}

@keyframes titleFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

/* Decorative Divider */
.divider-animate {
  animation: dividerExpand 2s ease-in-out infinite;
}

@keyframes dividerExpand {
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(1.1); }
}

.divider-line {
  width: 80px;
  height: 2px;
  background: currentColor;
  opacity: 0.5;
  border-radius: 2px;
}

.star-spin {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Name Frame */
.name-frame {
  position: relative;
}

.frame-decoration {
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    currentColor 20%, 
    currentColor 80%, 
    transparent 100%);
  opacity: 0.4;
  margin: 0 auto;
  width: 300px;
}

.frame-top {
  margin-bottom: 12px;
}

.frame-bottom {
  margin-top: 12px;
}

.name-elegant {
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: nameGlow 3s ease-in-out infinite;
}

@keyframes nameGlow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.1); }
}

/* Message Box */
.message-box {
  position: relative;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
}

.message-border {
  position: absolute;
  inset: -2px;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(45deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.3) 50%, 
    transparent 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.6;
}

.message-elegant {
  line-height: 1.8;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Corner Ornaments */
.corner-ornament {
  position: absolute;
  width: 100px;
  height: 100px;
  border-width: 3px;
  border-style: solid;
  border-color: currentColor;
  opacity: 0.3;
}

.corner-tl {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
  border-top-left-radius: 24px;
  animation: cornerPulse 3s ease-in-out infinite;
}

.corner-tr {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
  border-top-right-radius: 24px;
  animation: cornerPulse 3s ease-in-out infinite 0.5s;
}

.corner-bl {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
  border-bottom-left-radius: 24px;
  animation: cornerPulse 3s ease-in-out infinite 1s;
}

.corner-br {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
  border-bottom-right-radius: 24px;
  animation: cornerPulse 3s ease-in-out infinite 1.5s;
}

@keyframes cornerPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

/* Border Glow */
.border-glow {
  position: absolute;
  inset: -4px;
  border-radius: 24px;
  background: linear-gradient(45deg, 
    rgba(255, 255, 255, 0.2), 
    rgba(255, 255, 255, 0.1), 
    rgba(255, 255, 255, 0.2));
  filter: blur(8px);
  opacity: 0.5;
  animation: borderRotate 10s linear infinite;
  z-index: -1;
}

@keyframes borderRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.icons-float {
  animation: iconsHover 4s ease-in-out infinite;
}

@keyframes iconsHover {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.icon-bounce {
  display: inline-block;
  animation: iconBounce 2s ease-in-out infinite;
}

@keyframes iconBounce {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.1); }
}

/* Ornaments */
.ornament-top, .ornament-bottom {
  opacity: 0.8;
  animation: ornamentFloat 5s ease-in-out infinite;
}

@keyframes ornamentFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}
</style>