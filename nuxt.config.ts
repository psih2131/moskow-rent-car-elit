// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/scss/main.scss'],
  modules: ['@pinia/nuxt', 'nuxt-swiper', 'vue-yandex-maps/nuxt'],
  yandexMaps: {
    apikey: '3f39c994-7cf5-46f9-9a95-ead825d2a02c',
  },



})