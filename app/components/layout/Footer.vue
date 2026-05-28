<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Events', to: '#events' },
  { label: 'Artists', to: '#artists' },
  { label: 'About', to: '#about' },
  { label: 'Contact', to: '#contact' },
]

const socials = [
  { label: 'Instagram', url: '#' },
  { label: 'Facebook', url: '#' },
  { label: 'YouTube', url: '#' },
  { label: 'TikTok', url: '#' },
]
</script>

<template>
  <footer class="relative bg-bg-dark text-ink-light overflow-hidden">

    <!-- Top gold line -->
    <div class="w-full h-px bg-gold/30" />

    <!-- Main Footer Content -->
    <div class="max-w-site mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        <!-- Col 1 — Brand -->
        <div class="flex flex-col gap-5">
          <div>
            <p class="font-display text-3xl md:text-4xl font-light tracking-[0.12em] text-ink-light uppercase leading-none">
              Karimi
            </p>
            <p class="text-[9px] tracking-[0.4em] text-gold uppercase font-sans font-light mt-1">
              Entertainment
            </p>
          </div>
          <p class="text-sm font-sans font-light text-ink-light-muted leading-relaxed max-w-xs">
            Bringing the finest Afghan & Iranian artists to stages across Europe.
          </p>
          <a
            href="#events"
            class="footer-cta self-start text-[10px] tracking-[0.25em] uppercase font-sans font-light px-5 py-2.5 border border-gold/50 text-gold"
          >
            Get Tickets
          </a>
        </div>

        <!-- Col 2 — Navigation -->
        <div class="flex flex-col gap-4">
          <p class="text-[9px] tracking-[0.35em] uppercase font-sans text-ink-light/30 mb-2">
            Navigate
          </p>
          <ul class="flex flex-col gap-3">
            <li v-for="link in navLinks" :key="link.label">
              <a
                :href="link.to"
                class="text-sm font-sans font-light text-ink-light/50 hover:text-gold transition-colors duration-300 tracking-wide"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3 — Social & Contact -->
        <div class="flex flex-col gap-4">
          <p class="text-[9px] tracking-[0.35em] uppercase font-sans text-ink-light/30 mb-2">
            Follow Us
          </p>
          <ul class="flex flex-col gap-3">
            <li v-for="social in socials" :key="social.label">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-sans font-light text-ink-light/50 hover:text-gold transition-colors duration-300 tracking-wide"
              >
                {{ social.label }}
              </a>
            </li>
          </ul>
          <div class="mt-4 pt-4 border-t border-ink-light/8">
            <p class="text-[10px] tracking-[0.15em] font-sans text-ink-light/30">
              info@karimientertainment.com
            </p>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-ink-light/8">
      <div class="max-w-site mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-[10px] tracking-[0.15em] font-sans text-ink-light/20">
          © {{ currentYear }} Karimi Entertainment. All rights reserved.
        </p>
        <p class="text-[10px] tracking-[0.15em] font-sans text-ink-light/15">
          Premium Concerts Across Europe
        </p>
      </div>
    </div>

  </footer>
</template>

<style scoped>
.footer-cta {
  transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.footer-cta:hover {
  background-color: #C9A450;
  color: #1C0810;
}
</style>
