import { ref, onMounted } from 'vue'

export const useReducedMotion = () => {
  const prefersReducedMotion = ref(false)

  onMounted(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mq.matches
    mq.addEventListener('change', (e) => {
      prefersReducedMotion.value = e.matches
    })
  })

  return { prefersReducedMotion }
}
