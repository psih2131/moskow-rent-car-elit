<template>
<ClientOnly>
<swiper-container
ref="priceCarSlider"
class="price-car-swiper">

<swiper-slide
v-for="(item, index) in dataSlider"
:key="index"
class="price-car-swiper__slide"
>
<div class="price-car-swiper__slide-wrapper"
v-gsap.whenVisible.once.from='{
autoAlpha: 0,
y: 50,
duration: 0.5,
delay: 0.1 + ((index + 1) / 10),
start: "top 80%",
}'
>

<div class="price-car-swiper__slide-period" v-html="item.period"></div>

<div class="price-car-swiper__el-value-new-price-sale-procent" v-if="item.skidka_v_proczentah">-{{item.skidka_v_proczentah}}%</div>
<div class="price-car-swiper__slide-row">

    <template v-if="item.skidka && item.skidka != ' '">
        <p class="price-car-swiper__el-value-new-price">
            <span class="price-car-swiper__el-value-num" v-html="item.skidka"></span> 
            <span class="price-car-swiper__text-name"> руб.<span v-if="noDayText != true">/сутки</span></span>
        </p>

    <p class="price-car-swiper__el-value-old-price">
        <span class="price-car-swiper__el-value-num" v-html="item.czena"></span> 
        <span class="price-car-swiper__text-name"> руб.<span v-if="noDayText != true">/сутки</span></span>
    </p>
    </template>

    <template v-else>
        <span class="price-car-swiper__el-value-new-price">
        <span class="price-car-swiper__el-value-num" v-html="item.czena"></span> 
        <span class="price-car-swiper__text-name"> руб.<span v-if="noDayText != true">/сутки</span></span>
    </span>
    </template>
    
</div>

</div>

</swiper-slide>
</swiper-container>
</ClientOnly>
</template>


<script setup> 
import { ref, onMounted } from 'vue';

defineProps({
    dataSlider: Array,
    noDayText: Boolean
})

const priceCarSlider = ref(null)

let swiperCarPrice = null

 swiperCarPrice = useSwiper(priceCarSlider, {
  loop: false,
  spaceBetween: 0,   
  speed: 600,
  freeMode: true,  
  slidesPerView: "auto",
  pagination: true,
  slidesOffsetBefore: Math.max((window.innerWidth - 360) / 2, 0),
  slidesOffsetAfter: Math.max((window.innerWidth - 360) / 2, 0),
  // watchSlidesProgress: true,
  // observer: true,
  // observeParents: true,

  
  breakpoints: {
    100: { 
        slidesPerView: 'auto', spaceBetween: 10 ,
        slidesOffsetBefore: Math.max((window.innerWidth - 310) / 2, 0),
        slidesOffsetAfter: Math.max((window.innerWidth - 310) / 2, 0),
    },
    370: { 
        slidesPerView: 'auto', spaceBetween: 15 ,
        slidesOffsetBefore: Math.max((window.innerWidth - 360) / 2, 0),
        slidesOffsetAfter: Math.max((window.innerWidth - 360) / 2, 0),
    },
    760: { 
        slidesPerView: 'auto', spaceBetween: 20,
        slidesOffsetBefore: Math.max((window.innerWidth - 680) / 2, 0),
        slidesOffsetAfter: Math.max((window.innerWidth - 680) / 2, 0), 
    },
    800: { 
        slidesPerView: 'auto', spaceBetween: 20,
        slidesOffsetBefore: Math.max((window.innerWidth - 750) / 2, 0),
        slidesOffsetAfter: Math.max((window.innerWidth - 750) / 2, 0), 
    },
    1380: { 
        slidesPerView: 'auto', spaceBetween: 20 
    },
    1500: { 
        slidesPerView: 'auto', spaceBetween: 20 

    },
  },
})


</script>


<style scoped  lang="scss">


@import "@/assets/scss/components/price-slider.scss";


</style>


<style scoped>
  swiper-container::part(pagination) {
  display: none;
  }

  swiper-container::part(bullet) {
    background-color:rgba(255, 255, 255, 0.40);
    opacity: 1;
    width: 6px;
    height: 6px;
    margin: 0 4px;
    border-radius: 50%;
    transition: background-color 0.3s;
    cursor: pointer;transform: scale(1);
  }

  swiper-container::part(bullet-active) {
    background-color: #F1BD81;
    width: 8px;
    height: 8px;
  }
</style>
