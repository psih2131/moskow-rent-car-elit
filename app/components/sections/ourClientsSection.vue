<template>
  <section class="home-our-client-sec" v-if="sectionData?.zagolovok">
    <div class="container">
      <div class="header-row-sec-v2">
        <div
          class="header-row-sec-v2__decor-wrapper"
          v-gsap.whenVisible.once.from='{
            autoAlpha: 0,
            y: 100,
            duration: 0.5,
            delay: 0,
            start: "top 80%",
          }'
        >
          <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor" />
        </div>

        <h2
          class="home-our-client-sec__title sec-title sec-title--center-mod"
          v-gsap.whenVisible.once.from='{
            autoAlpha: 0,
            y: 100,
            duration: 0.5,
            delay: 0,
            start: "top 80%",
          }'
          v-html="sectionData.zagolovok"
        ></h2>
      </div>

      <div
        ref="sliderWrapperEl"
        class="home-our-client-sec__slider-wrapper"
        v-if="sectionData.klienty?.length > 0"
      >
        <ClientOnly>
          <swiper-container ref="ourClientsSlider" class="our-client-slider">
            <swiper-slide
              class="our-client-slider__slide"
              v-for="(item, index) in sectionData.klienty"
              :key="index"
              v-gsap.whenVisible.once.from='{
                autoAlpha: 0,
                y: 200,
                duration: 0.8,
                delay: (0.1 * (+index + 1)),
                start: "top 80%",
              }'
            >
              <div class="our-client-slider__slide-wrapper">
                <img
                  :src="item.foto.url"
                  :alt="item.foto.alt"
                  class="our-client-slider__slide-img"
                />
                <div class="our-client-slider__slide-data">
                  <p class="our-client-slider__slide-name" v-html="item.imya"></p>
                  <p
                    class="our-client-slider__slide-description"
                    v-html="item.opisanie"
                  ></p>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>

        <div class="home-news-sec__slider-row-control-wrapper">
          <div
            class="home-cat-slider-swiper-button-prev swiper-def-ar swiper-def-ar--prev swiper-button"
            @click="swiperClients.prev()"
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0.1,
              start: "top 96%",
            }'
          >
            <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
            </svg>
            <div class="swiper-def-ar__circle"></div>
          </div>

          <div
            class="home-cat-slider-swiper-button-next swiper-def-ar swiper-def-ar--next swiper-button"
            @click="swiperClients.next()"
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0.1,
              start: "top 96%",
            }'
          >
            <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
            </svg>
            <div class="swiper-def-ar__circle"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue';

defineProps({
  /** Данные секции: { zagolovok, klienty[] } — с главной (pageData.acf) или с options (для авто) */
  sectionData: {
    type: Object,
    default: null,
  },
});

const ourClientsSlider = ref(null);
const sliderWrapperEl = ref(null);

function equalizeSlideHeights() {
  const wrapper = sliderWrapperEl.value;
  if (!wrapper) return;
  const slides = wrapper.querySelectorAll('.our-client-slider__slide-wrapper');
  if (!slides.length) return;
  slides.forEach(s => { s.style.height = ''; });
  const heights = Array.from(slides).map(s => s.offsetHeight);
  const maxHeight = Math.max(...heights);
  slides.forEach(s => { s.style.height = maxHeight + 'px'; });
}

let resizeObserver = null;

onMounted(async () => {
  const run = () => setTimeout(equalizeSlideHeights, 150);
  await nextTick();
  run();
  const wrapper = sliderWrapperEl.value;
  if (wrapper) {
    resizeObserver = new ResizeObserver(run);
    resizeObserver.observe(wrapper);
  }
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
});

const swiperClients = useSwiper(ourClientsSlider, {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 800,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  breakpoints: {
    100: {
      slidesPerView: 1.15,
      spaceBetween: 12,
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
</script>
