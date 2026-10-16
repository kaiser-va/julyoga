export default defineNuxtConfig({
  compatibilityDate: '2026-10-16',
  ssr: false,
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  ui: { fonts: false, colorMode: false },
  icon: { serverBundle: { collections: ['lucide'] }, clientBundle: { scan: true } },
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'JulYoga · Kinder- & Familien-Yoga in Kiel',
      meta: [{ name: 'description', content: 'Yoga mit Ronja in Kiel: spielerisches Kinder-Yoga, Eltern-Kind-Yoga und Workshops für Erwachsene. Bewegung, Fantasie und Gemeinsamkeit.' }]
    }
  }
})
