<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'

interface Event {
  id: string
  date: string
  month: string
  year: string
  artist: string
  subtitle?: string
  city: string
  country: string
  venue: string
  image: string | null
  isSoldOut: boolean
  ticketUrl: string
}

const events: Event[] = [
  {
    id: '1',
    date: '04',
    month: 'Sep',
    year: '2025',
    artist: 'Aryana',
    subtitle: 'Ladies Only · Unstoppable World Tour',
    city: 'Rotterdam',
    country: 'Netherlands',
    venue: 'Laurenskerk Rotterdam',
    image: '/images/rotterdam.jpeg',
    isSoldOut: false,
    ticketUrl: 'https://www.aryanatour.com',
  },
  {
    id: '2',
    date: '05',
    month: 'Sep',
    year: '2025',
    artist: 'Aryana',
    subtitle: 'Ladies Only · Unstoppable World Tour',
    city: 'Stockholm',
    country: 'Sweden',
    venue: 'Fryshuset Arenan',
    image: '/images/stockholm.jpeg',
    isSoldOut: false,
    ticketUrl: 'https://www.aryanatour.com',
  },
  {
    id: '3',
    date: '11',
    month: 'Dec',
    year: '2026',
    artist: 'Kabura Cruise',
    subtitle: 'Habib Qaderi · Farhad Darya · Aryana · Valy',
    city: 'Stockholm → Tallinn',
    country: '40 Hours, 2 Nights',
    venue: 'The Biggest Afghan Concert Ever',
    image: '/images/stockholm-talinn.jpeg',
    isSoldOut: false,
    ticketUrl: 'https://www.karimientertainment.com',
  },
]

const sectionRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])

const setCardRef = (el: HTMLElement | null, index: number) => {
  if (el) cardRefs.value[index] = el
}

const hoveredCard = ref<number | null>(null)
const perimeterMap = ref<Record<number, number>>({})
const snakeReady = ref(false)

const snakeStyle = (index: number, type: 'body' | 'head') => {
  const p = perimeterMap.value[index] || 9999
  const active = hoveredCard.value === index
  const offset = active ? 0 : 9999
  const transition = !snakeReady.value
    ? 'none'
    : active
      ? 'stroke-dashoffset 16s linear'
      : 'stroke-dashoffset 0.12s ease'

  if (type === 'body') {
    return { strokeDasharray: `${p} ${p}`, strokeDashoffset: offset, transition, strokeOpacity: 0.45 }
  }
  return {
    strokeDasharray: `55 ${Math.max(p - 55, 1)}`,
    strokeDashoffset: offset,
    transition,
    filter: 'drop-shadow(0 0 5px #C9A450) drop-shadow(0 0 12px rgba(201,164,80,0.6))',
  }
}

onMounted(async () => {
  if (process.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        headerRef.value,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
        }
      )
      gsap.fromTo(
        cardRefs.value,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.value, start: 'top 70%' },
        }
      )
    })

    await nextTick()
    cardRefs.value.forEach((el, i) => {
      if (el) {
        const r = el.getBoundingClientRect()
        perimeterMap.value[i] = Math.ceil(2 * (r.width + r.height))
      }
    })
    snakeReady.value = true
  }
})
</script>

<template>
  <section
    id="events"
    ref="sectionRef"
    class="relative bg-bg-dark py-section px-6 md:px-10 lg:px-16"
  >
    <div class="max-w-site mx-auto">

      <!-- Section Header -->
      <div ref="headerRef" class="flex items-center justify-between mb-12 md:mb-16">
        <div class="flex items-center gap-6">
          <div class="w-8 h-px bg-gold" />
          <span class="text-[10px] tracking-[0.35em] uppercase font-sans text-gold">
            Upcoming Events
          </span>
        </div>
        <span class="hidden md:block text-[10px] tracking-[0.2em] uppercase font-sans text-ink-light/25">
          2026 Season
        </span>
      </div>

      <!-- Cards Grid — left to right -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="(event, index) in events"
          :key="event.id"
          :ref="(el) => setCardRef(el as HTMLElement, index)"
          class="group relative flex flex-col bg-bg-dark-surface overflow-hidden"
          @mouseenter="hoveredCard = index"
          @mouseleave="hoveredCard = null"
        >

          <!-- Snake border SVG -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none z-10" style="overflow:visible">
            <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)"
              fill="none" stroke="#C9A450" stroke-width="1"
              :style="snakeStyle(index, 'body')"
            />
            <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)"
              fill="none" stroke="#C9A450" stroke-width="2"
              :style="snakeStyle(index, 'head')"
            />
          </svg>

          <!-- Image -->
          <div class="relative w-full aspect-[2/3] overflow-hidden bg-bg-dark-elevated p-2">

            <!-- Real image -->
            <img
              v-if="event.image"
              :src="event.image"
              :alt="event.artist"
              class="w-full h-full object-cover object-center transition-transform duration-700 ease-expo-out group-hover:scale-[1.03]"
            />

            <!-- Placeholder for missing images -->
            <div
              v-else
              class="w-full h-full flex items-center justify-center"
            >
              <span class="font-display text-4xl font-light text-ink/10 tracking-widest uppercase">
                {{ event.artist.charAt(0) }}
              </span>
            </div>

            <!-- Dark overlay on hover -->
            <div class="absolute inset-0 bg-bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <!-- Sold Out badge -->
            <div
              v-if="event.isSoldOut"
              class="absolute top-4 left-4 text-[9px] tracking-[0.25em] uppercase font-sans text-ink-light/60 bg-bg-dark/80 px-3 py-1.5 backdrop-blur-sm"
            >
              Sold Out
            </div>

            <!-- Date badge -->
            <div class="absolute top-4 right-4 flex flex-col items-center bg-bg-dark/80 backdrop-blur-sm px-3 py-2 min-w-[48px]">
              <span class="font-display text-xl font-light text-gold leading-none">{{ event.date }}</span>
              <span class="text-[9px] tracking-[0.2em] uppercase font-sans text-ink-light/50 mt-0.5">{{ event.month }}</span>
            </div>

          </div>

          <!-- Card Body -->
          <div class="flex flex-col flex-1 p-4 md:p-5">

            <!-- Artist Name -->
            <h3 class="font-display text-xl md:text-2xl font-light text-ink-light group-hover:text-gold transition-colors duration-300 leading-tight mb-1.5">
              {{ event.artist }}
            </h3>

            <!-- Subtitle -->
            <p v-if="event.subtitle" class="text-[10px] tracking-[0.18em] uppercase font-sans text-ink-light-muted/60 mb-2">
              {{ event.subtitle }}
            </p>

            <!-- Location -->
            <div class="flex items-center gap-2 mb-4">
              <span class="text-[10px] tracking-[0.15em] uppercase font-sans text-ink-light/35">
                {{ event.city }}, {{ event.country }}
              </span>
              <span class="text-ink-light/15">·</span>
              <span class="text-[10px] tracking-[0.12em] font-sans text-ink-light/25">
                {{ event.venue }}
              </span>
            </div>

            <!-- CTA -->
            <div class="mt-auto">
              <span
                v-if="event.isSoldOut"
                class="inline-block text-[10px] tracking-[0.25em] uppercase font-sans text-ink-light/20 line-through"
              >
                Sold Out
              </span>
              <a
                v-else
                :href="event.ticketUrl"
                class="inline-flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-sans text-gold border-b border-gold/30 pb-0.5 hover:border-gold transition-colors duration-300"
              >
                <span>Get Tickets</span>
                <span class="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </div>

          </div>

          <!-- Bottom gold line on hover -->
          <div class="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-expo-out origin-left" />

        </div>
      </div>

    </div>
  </section>
</template>
