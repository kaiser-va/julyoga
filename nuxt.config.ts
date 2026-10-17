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
      title: 'JulYoga · Wartungsarbeiten',
      meta: [{ name: 'description', content: 'JulYoga wird derzeit überarbeitet. Wir sind bald wieder da.' }]
    }
  }
})
