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
  <section class="relative w-full bg-bg-dark overflow-hidden">

    <!-- Mobile: natural aspect ratio so all 4 artists are visible -->
    <!-- Desktop: full screen height -->
    <div class="relative w-full pt-[72px] md:pt-0 md:h-screen md:min-h-[500px]">

      <!-- Hero Image -->
      <div
        :class="[
          'transition-opacity duration-[1400ms] ease-expo-out',
          'relative md:absolute md:inset-0 md:top-[84px]',
          isLoaded || prefersReducedMotion ? 'opacity-100' : 'opacity-0'
        ]"
      >
        <img
          src="/images/hero.jpeg"
          alt="Karimi Entertainment — Live Concerts in Europe"
          class="w-full h-auto md:h-full md:object-cover md:object-top"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <!-- Bottom fade — desktop only -->
      <div class="hidden md:block absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-dark to-transparent pointer-events-none" />

      <!-- Scroll Indicator — desktop only -->
      <div
        :class="[
          'hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 transition-all duration-1000 delay-[1800ms] ease-expo-out',
          isLoaded || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        ]"
      >
        <span class="text-[9px] tracking-[0.3em] uppercase font-sans text-ink-light/40">Scroll</span>
        <div class="w-px h-10 bg-gradient-to-b from-ink-light/40 to-transparent animate-pulse" />
      </div>

    </div>

  </section>
</template>
