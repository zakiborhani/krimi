<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useReducedMotion } from '~/composables/useReducedMotion'

const { prefersReducedMotion } = useReducedMotion()
const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <section class="relative w-full h-screen min-h-[500px] overflow-hidden bg-bg-dark">

    <!-- Hero Image -->
    <div
      :class="[
        'absolute left-0 right-0 bottom-0 top-[72px] md:top-[84px] transition-opacity duration-[1400ms] ease-expo-out',
        isLoaded || prefersReducedMotion ? 'opacity-100' : 'opacity-0'
      ]"
    >
      <img
        src="/images/hero.jpeg"
        alt="Karimi Entertainment — Live Concerts in Europe"
        class="w-full h-full object-contain object-top"
        loading="eager"
        fetchpriority="high"
      />
    </div>

    <!-- Bottom fade to bg color — blends into next section -->
    <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-dark to-transparent pointer-events-none" />

    <!-- Scroll Indicator -->
    <div
      :class="[
        'absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-[1800ms] ease-expo-out',
        isLoaded || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      ]"
    >
      <span class="text-[9px] tracking-[0.3em] uppercase font-sans text-ink/40">Scroll</span>
      <div class="w-px h-10 bg-gradient-to-b from-ink/40 to-transparent animate-pulse" />
    </div>

  </section>
</template>
