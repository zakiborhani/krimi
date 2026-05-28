import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts,tsx}',
    './components/**/*.{vue,ts,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#FAF5EE',
          surface: '#F2EBE0',
          elevated: '#EDE4D6',
          dark: '#1C0810',
          'dark-surface': '#260D16',
          'dark-elevated': '#30121C',
        },
        gold: {
          DEFAULT: '#C9A450',
          light: '#DDB96A',
          dim: '#8C7035',
        },
        crimson: {
          DEFAULT: '#8B1F2A',
          light: '#B02535',
          dim: '#5C1520',
        },
        ink: {
          DEFAULT: '#1A0D10',
          muted: '#7A6B65',
          faint: '#C4B8B0',
          light: '#F2EBE0',
          'light-muted': '#9B8E88',
        },
      },
      spacing: {
        section: '6rem',
        'section-sm': '4rem',
        'section-lg': '10rem',
      },
      fontSize: {
        'display-sm': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(4.5rem, 11vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(5rem, 14vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'power2-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'power3-out': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
  plugins: [],
} satisfies Config
