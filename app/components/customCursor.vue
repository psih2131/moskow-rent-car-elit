<template>
    <div v-if="readyStatus" class="animate-cursor" :class="{'hover': hoverClassStatus == true}" ref="anomCursor">
      <div class="animate-cursor__white-dot"></div>
    </div>

    <div v-if="readyStatus" class="animate-cursor-dop" :class="{'hover': hoverClassStatus == true}" ref="anomCursorDop">
      <div class="animate-cursor-dop__circle"></div>
    </div>

    
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'
const readyStatus = ref(false)
const anomCursor = ref(null)
const anomCursorDop = ref(null)

const hoverClassStatus = ref(false)

let mouseX = 0
let mouseY = 0
let rafId = null

function moveCursor(e) {
  mouseX = e.clientX
  mouseY = e.clientY

const hoverTargets = [
  '.swipe-home-cat',
  '.btnV1',
  '.header__nav-list-link',
  '.car-card__wrapper',
  '.clients-about-us-slider__slide-read-more-btn',
  '.swiper-def-ar',
  '.faq-element__header',
  '.seo-sec-type-1__read-more',
  '.social-contact-def',
  '.footer__nav-link',
  '.footer__contacts-element',
  '.home-about-sec__images-contact-element',
  '.contact-link',
  '.btnV2',
  '.checkbox-item-custom__wrapper',
  '.popup__close',
  '.single-car-swiper-button',
  '.price-switch__btn',
  '.btnV1',
  '.btnV1',
  '.clients-about-us-slider__slide-client-data-resources',
  '.pulse',
  '.social-widget__link',
  '.footer__down-nav-link',
  '.footer__developer a',
  '.checkbox-item-custom__text a'
]

hoverClassStatus.value = hoverTargets.some(selector =>
  e.target.closest(selector)
)

  if (!rafId) {
    rafId = requestAnimationFrame(updateCursor)
  }
}

function updateCursor() {
  if (!anomCursor.value || !anomCursorDop.value) return

  anomCursor.value.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
  anomCursorDop.value.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`

  rafId = null
}

onMounted(() => {
  readyStatus.value = true
  document.addEventListener('mousemove', moveCursor)
  
})

onUnmounted(() => {
  document.removeEventListener('mousemove', moveCursor)
})
</script>

<style  lang="scss">
  * {
    cursor: none !important; 
  }
  body, html, button, a, input, textarea, select, img, svg {
    cursor: none;
  }
  .animate-cursor{
    position: fixed;
    z-index: 999999;
    width: 0;
    height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    // transition: all linear 0.01s;
    transition: all ease 0.05s;
    
    pointer-events: none;

    &.hover{
      .animate-cursor__white-dot{
        transform: scale(0.6);
      }
    }
  }

  .animate-cursor-dop{
    position: fixed;
    z-index: 999999;
    width: 0;
    height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    // transition: all linear 0.01s;
    transition: all ease 0.1s;
    
    pointer-events: none;

    &.hover{
      .animate-cursor-dop__circle{
        border: solid 2px #F1BD81;
        transform: scale(1.3);
      }
    }
  }
  .animate-cursor__white-dot{
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background: #fff; 
    transition: all ease 0.2s;
    
  }
  .animate-cursor-dop__circle{
    width: 50px; 
    position: absolute;
    height: 50px;
    border-radius: 100px;
    border: solid 2px #fff;
    transition: all ease 0.2s;
  }

  @media only screen and (max-width: 1380px) {
    .animate-cursor{
      display: none;
    }
     .animate-cursor-dop{
      display: none;
     }
       * {
    cursor: default !important; 
  }
  body, html, button, a, input, textarea, select, img, svg {
    cursor: default;
  }
  }
</style>
