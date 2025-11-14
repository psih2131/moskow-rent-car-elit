<template>

  <section class="error-404-sec">
    <div class="container">
      <div class="error-404-sec__img-wrapper">
        <img src="@/assets/images/img/404.png" alt="" class="error-404-sec__img">
      </div>


      <div class="header-row-sec-v2">

          <div class="header-row-sec-v2__decor-wrapper">
            <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
          </div>
          
          <h2 class=" sec-title sec-title--center-mod"><b>СТРНИЦА </b> НЕ НАЙДЕНА</h2>

          <div class="error-404-sec__btn-row">
              <NuxtLink  to="/" class="home-hero-sec__btn btnV1 btnV1--big">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">ВЕРНУТСЯ НА ГЛАВНУЮ</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </NuxtLink>
          </div>
        
        </div>

    </div>
  </section>

</template>

<script setup>
// Этот код выполняется только при SSR (на сервере)
// Он указывает браузеру и поисковикам, что страница действительно не найдена
const event = useRequestEvent()
if (event) {
  setResponseStatus(event, 404)
}
</script>