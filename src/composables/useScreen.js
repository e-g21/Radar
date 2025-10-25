// src/composables/useScreen.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useScreen() {
  const width = ref(window.innerWidth)

  const updateWidth = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  // breakpoints según Tailwind
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  }

  function screen(size) {
    return width.value >= breakpoints[size]
  }

  return { width, screen }
}
