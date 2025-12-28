// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },

      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true,
  css: ['~/assets/scss/main.scss'],

  yandexMaps: {
    apikey: '3f39c994-7cf5-46f9-9a95-ead825d2a02c',
  },

  vgsap: {
    presets: [
      {
        name: 'stagger-up-800',
        modifiers: 'whenVisible.stagger.once.from',
        value: {
          autoAlpha: 0,
          y: 200,
          duration: 0.8,
          delay: 0,
          opacity: 0,
          start: "top 70%",
        }
      },

      {
        name: 'stagger-up',
        modifiers: 'whenVisible.stagger.once.from',
        value: {
          autoAlpha: 0,
          y: 100,
          duration: 0.5,
          delay: 0,
          opacity: 0,
          start: "top 70%",
        }
      }
    ],
    breakpoint: 768,
    scroller: '',
    composable: true
  },

  modules: [
    '@pinia/nuxt',
    'nuxt-swiper',
    'vue-yandex-maps/nuxt',
    'nuxt-easy-lightbox',
    'v-gsap-nuxt',
    'nuxt-locomotive-scroll'
  ],



  swiper: {
    bundled: true, // или вообще убрать — true по умолчанию
  },

  build: {
    transpile: ['@vuepic/vue-datepicker']
  }



})