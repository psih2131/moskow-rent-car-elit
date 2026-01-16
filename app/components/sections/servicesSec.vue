<template>

<section class="partners-exm-sec services-car-sec"  v-if="sectionData" >
        <div class="container">

            <div class="header-row-sec-v2">

                <div class="header-row-sec-v2__decor-wrapper"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.1,
                    start: "top 70%",
                    }'>
                    <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
                </div>
                
                <h2 class="car-adv-sec__title sec-title sec-title--center-mod" 
                v-html="sectionData.zagolovok"
                v-gsap.whenVisible.once.from='{
                autoAlpha: 0,
                y: 50,
                duration: 0.5,
                delay: 0.1,
                start: "top 70%",
                }'></h2>
            </div>


            <div class=" partners-exm-sec__row-slider">

                <ClientOnly>
                    <swiper-container 
                    ref="servicerSliderRef" 
                    class="partners-exm-sec__slider"
                    >
                        <swiper-slide 
                        class="swipe-home-cat" v-for="(value,index) in sectionData.usluga" v-gsap.preset="'stagger-up'">
                            <div>
                                <div class="partners-exm-sec__element-wrapper">
                                    <img 
                                    :src="value.kartinka.sizes.medium_large" 
                                    :alt="value.kartinka.alt" class="partners-exm-sec__element-img">
                                    <div class="partners-exm-sec__element-data">
                                        <div class="partners-exm-sec__element-header">
                                            <p class="partners-exm-sec__element-subtitle" v-html="value.podzagolovok"></p>
                                            <p class="partners-exm-sec__element-title" v-html="value.zagolovok"></p>
                                        </div>
                                        <ul class="partners-exm-sec__element-list">
                                            <li class="partners-exm-sec__element-list-element" v-for="item in value.tablicza"
                                            :class="{'active':item.tip_stroki == 'active'}">
                                                <span class="partners-exm-sec__element-list-element-name" v-html="item.nazvanite"></span>
                                                <span class="partners-exm-sec__element-list-element-value" v-html="item.znachenie"></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          
                        </swiper-slide>

                    </swiper-container>
                    </ClientOnly>

                
                
            </div>




        </div>
    </section>

</template>

<script setup>

import { ref, onMounted } from 'vue';

import { useCounterStore } from '@/stores/counter';

import { useNuxtApp } from '#app';

defineProps({
    sectionData: Object
})

const nuxtApp = useNuxtApp();

const store = useCounterStore(nuxtApp.$pinia);

const route = useRoute()

const servicerSliderRef = ref(null)

const  servicerSliderGalery  = useSwiper(servicerSliderRef, {
   loop: false,
   slidesPerView: 4,
   spaceBetween: 30,   
   speed: 1100,
   freeMode: {
    enabled: true,
    sticky: true,
  },
   slidesPerView: "auto",
   scrollbar:{ draggable: true },
  //  centeredSlides: 'auto',
   breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1380: {
       slidesPerView: 3,
      spaceBetween: 25,
    },
    1500: {
       slidesPerView: 3,
      spaceBetween: 45,
    },
  },

})

function equalizeHeights(elements) {
  if (!elements || elements.length === 0) return;

  // Сбрасываем высоту перед вычислением
  elements.forEach(el => el.style.height = 'auto');

  // Превращаем NodeList в массив
  const arr = Array.from(elements);

  // Находим максимальную высоту
  const maxHeight = Math.max(...arr.map(el => el.offsetHeight));

  // Проставляем всем одинаковую
  arr.forEach(el => {
    el.style.height = maxHeight + 'px';
  });
}


//HOOKS
onMounted(() => {
    setTimeout(()=>{
    //   let elements = document.querySelectorAll('.partners-exm-sec__element-wrapper')
    //     equalizeHeights(elements)
  },200)


})


</script>


<style scoped  lang="scss">

@import "@/assets/scss/components/service-sec.scss";

</style>


