import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#001530", 
        "secondary-container": "#ff8928", 
        "background": "#f8fafc",
        "surface": "#ffffff",
        "surface-container-low": "#f1f5f9",
        "outline-variant": "#cbd5e1",
        "on-surface": "#0f172a",
        "on-surface-variant": "#475569",
        "hero-overlay": "rgba(0, 23, 54, 0.85)",
        "surface-container-lowest": "#f8fafc",
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem"
      },
      spacing: {
        "margin-mobile": "20px",
        "margin-desktop": "80px",
        "section-padding": "128px",
        "container-max": "1440px"
      },
      fontFamily: {
        "ibm-thai": ["IBM Plex Sans Thai", "sans-serif"],
        "google-thai": ["Google Sans", "sans-serif"],
      }
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      // สร้าง variant th: สำหรับตรวจสอบภาษาไทย
      addVariant('th', 'html[lang="th"] &')
    })
  ]
}