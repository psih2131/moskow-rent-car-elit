<template>
  <div v-if="!accepted" class="cookie-banner">
    <div class="cookie-banner__wrapper">
           <p>
            Используя наш сайт, вы соглашаетесь с обработкой персональных данных и использованием cookie. 
            Подробнее читайте в 
            <NuxtLink to="/docs/politika-konfidenczialnosti" class="cookie-link">
                Политике конфиденциальности
            </NuxtLink>.
            </p>

            <div class="cookie-banner__btn-wrapper">
                <button @click="accept" class="cookie-btn">
                Согласен
                </button>
            </div>
       
    </div>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      accepted: true
    }
  },
  mounted() {
    if (!localStorage.getItem('cookieAccepted')) {
      this.accepted = false
    }
  },
  methods: {
    accept() {
      localStorage.setItem('cookieAccepted', 'true')
      this.accepted = true
    }
  }
}
</script>


<style scoped  lang="scss">

@import "@/assets/scss/components/cookie-widget.scss";

</style>
