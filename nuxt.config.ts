// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15', // รองรับฟีเจอร์ใหม่ของระบบ Nuxt
  devtools: { enabled: true }, // เปิดใช้งาน DevTools สำหรับการพัฒนา
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'OMEGA PETROTECH | Premium Energy Trading & Strategic Sourcing',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Omega Petrotech is a leading international energy trading house specializing in premium-grade fuel distribution, LNG, and sustainable energy solutions with a commitment to operational excellence and global compliance.' },
        { name: 'keywords', content: 'Energy Trading, Premium Diesel EN590, LNG Supply, Sustainable Energy, Global Supply Chain, Omega Petrotech' },
        { property: 'og:title', content: 'OMEGA PETROTECH | Premium Energy Trading & Strategic Sourcing' },
        { property: 'og:description', content: 'Global leader in energy sourcing and distribution. Providing high-standard diesel, LNG, and renewable energy solutions for industrial partners worldwide.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/hero-vessel.jpg' } // ใส่ path รูปภาพของคุณ
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/omega_logo.png' },
        { rel: 'apple-touch-icon', href: '/images/omega_logo.png' },
        { rel: 'canonical', href: 'https://www.omegapetrotech.com' }, // ใส่ URL เว็บไซต์จริงของคุณ
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Hanken+Grotesk:wght@300;400;600&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' 
        }
      ]
    }
  },

  // 1. Localization Setup
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'th', iso: 'th-TH', file: 'th.json', name: 'ภาษาไทย' }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },

  // 2. Color Mode Setup (Dark/Light)
  colorMode: {
    classSuffix: '', // เพื่อให้ทำงานร่วมกับ class 'dark' ของ Tailwind ได้อย่างสมบูรณ์
    preference: 'system',
    fallback: 'light'
  },

  // 3. Typography & Performance
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700], // ใช้แทน Google Sans สำหรับงาน Corporate
    },
    display: 'swap',
    prefetch: true,
  },

  image: {
    format: ['webp'], // บังคับแปลงภาพเป็น webp อัตโนมัติเพื่อโหลดไวขึ้น
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  }
})