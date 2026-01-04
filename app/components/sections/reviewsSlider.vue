<template>

    <div class="clients-about-us__slider-wrapper" v-if="sliderData?.length > 0">
            <ClientOnly>
              <swiper-container 
              ref="clientsAboutUsSlider" 
              class="clients-about-us-slider"
              >
                  <swiper-slide class="clients-about-us-slider__slide" 
                  v-for="(item, index) in sliderData"
                  v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 200,
                    duration: 0.8,
                    delay: (0.1 * (+index + 1)),
                    start: "top 70%",
                  }'>
                    <div class="clients-about-us-slider__slide-wrapper">
                      <img :src="item.foto_klienta.url" :alt="item.foto_klienta.alt" class="clients-about-us-slider__slide-photo">
                      <div class="clients-about-us-slider__slide-data">
                        <div class="clients-about-us-slider__slide-text-wrapper">
                          <p class="clients-about-us-slider__slide-text" v-html="trimString(item.tekst_otzyva)"></p>
                        </div>
                        <div class="clients-about-us-slider__slide-read-more-btn" 
                        v-if="item.tekst_otzyva.length > 350" 
                        @click="openTargetPopupFullReview(item.imya_avtora,item.tekst_otzyva)">
                          <span>читать полностью</span>
                          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.23013 0.21967C0.536971 -0.0732233 1.03446 -0.0732233 1.3413 0.21967L5.5 4.18934L9.6587 0.21967C9.96554 -0.0732233 10.463 -0.0732233 10.7699 0.21967C11.0767 0.512563 11.0767 0.987437 10.7699 1.28033L6.05558 5.78033C5.74874 6.07322 5.25126 6.07322 4.94442 5.78033L0.23013 1.28033C-0.0767101 0.987437 -0.0767101 0.512563 0.23013 0.21967Z" fill="#707070"/>
                          </svg>
                        </div>
                      </div>

                      <div class="clients-about-us-slider__slide-client-data">
                        <div class="clients-about-us-slider__slide-client-data-info">
                           <p class="clients-about-us-slider__slide-client-name" v-if="item.imya_avtora" v-html="item.imya_avtora"></p>
                          <p class="clients-about-us-slider__slide-client-description" v-if="item.podzagolovok" v-html="item.podzagolovok"></p>
                        </div>
                        <a :href="item.ssylka_na_original" v-if="item.ssylka_na_original" target="_blank" class="clients-about-us-slider__slide-client-data-resources">
                          <span class="clients-about-us-slider__slide-client-data-resources-text">
                            читать оригинал
                          </span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M12 21V3M4.46 7.5H19.67M11.69 3.00001C11.69 3.00001 7.3 4.90001 7.3 12C7.3 19.1 11.69 21 11.69 21M12.31 3.00001C12.31 3.00001 16.7 4.90001 16.7 12C16.7 19.1 12.31 21 12.31 21M4.46 16.5H19.67M3.56 12H20.56" stroke="#3F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </a>
                       
                      </div>

                    </div>
                  </swiper-slide>

              </swiper-container>
            </ClientOnly>

              <!-- <div class="home-cat-slider-swiper-button-prev swiper-def-ar swiper-def-ar--prev swiper-button" @click="swiperRecomend.prev()">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.15429 13.7071C8.53841 13.3166 8.53841 12.6834 8.15429 12.2929L2.94817 7L8.15429 1.70711C8.53841 1.31658 8.53841 0.683417 8.15429 0.292893C7.77017 -0.0976315 7.14738 -0.0976315 6.76326 0.292893L0.861622 6.29289C0.4775 6.68342 0.4775 7.31658 0.861622 7.70711L6.76326 13.7071C7.14738 14.0976 7.77017 14.0976 8.15429 13.7071Z" fill="#5D736E"/>
                  </svg>
              </div> -->
              <div class="home-news-sec__slider-row-control-wrapper">

                <div 
                class="slider-counter"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.5,
                  delay: 0,
                  start: "top 70%",
                }'>
                  <span class="slider-counter__current">{{ getRealIndex(swiperClientsAbout.realIndex) }}</span>
                  <span class="slider-counter__total">/{{ getTotalSlides(swiperClientsAbout.slides) }}</span>
          
                </div>
               
                <div 
                class="home-cat-slider-swiper-button-next swiper-def-ar swiper-def-ar--next swiper-button" 
                @click="swiperClientsAbout.next()"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.5,
                  delay: 0.3,
                  start: "top 70%",
                }'>
                    <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
                    </svg>

                    <div class="swiper-def-ar__circle"></div>
                </div>
              </div>
          </div>

</template>


<script setup>

import { ref, onMounted } from 'vue';

import { useCounterStore } from '@/stores/counter'

import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const route = useRoute()

const clientsAboutUsSlider = ref(null)


defineProps({
    sliderData: Array,
})




  //reviews gallery
const  swiperClientsAbout  = useSwiper(clientsAboutUsSlider, {
   loop: true,
   slidesPerView: 4,
   spaceBetween: 30,   
   speed: 1100,
   freeMode: "true",  
   freeMode: true,
   slidesPerView: "auto",
  //  centeredSlides: 'auto',
   breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1380: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1580: {
       slidesPerView: 2,
      spaceBetween: 70,
    },
  },

})

function getRealIndex(data){
  console.log(data.value)
  return data.value + 1
}

function getTotalSlides(data){
  console.log(data.value)
  return data.value.length
}



//Cut string for long review text
function trimString(str) {
  if (str.length > 350) {
    return str.slice(0, 347) + '...';
  }
  return str;
}

//Open review popup
const openTargetPopupFullReview = (title,text)=>{
  store.changePopupCurrent('popup-full-review')

  let ojj = {
    'title':title,
    'text': text
  }
  store.changeReviewTextPopup(ojj)
}

</script>


<style scoped  lang="scss">

@import "@/assets/scss/components/reviewsSlider.scss";

</style>