<template>
    <main class="main" v-if="pageData && pageData.length > 0">
      <section class="home-hero-sec">
        <div class="home-hero-sec__header-shadow"></div>
        <img src="@/assets/images/img/home-hero-bg.jpg" alt="" class="home-hero-sec__bg-img">
        <div class="home-hero-sec__content">
          <div class="container">

            <div class="home-hero-sec__title-wrapper">
              <div class="home-hero-sec__decor">
                <img src="@/assets/images/img/decor.png" alt="" class="home-hero-sec__decor-img">
              </div>
              <div class="home-hero-sec__title-row">
                <div class="home-hero-sec__decor-line"></div>
                <h1 class="home-hero-sec__title">АРЕНДА <b>ЛЮКСОВЫХ</b> АВТО В <b>МОСКВЕ</b></h1>
                <div class="home-hero-sec__decor-line"></div>
              </div>
            </div>

            <div class="home-hero-sec__play">
              <div class="home-hero-sec__play-wrapper">
              </div>
               <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.875 23.5013V37.1452C5.875 41.6674 10.8381 44.526 14.8767 42.3297L21.1492 38.9187M5.875 15.668V9.8574C5.875 5.33517 10.8381 2.47667 14.8767 4.67287L39.9668 18.3168C44.1222 20.5765 44.1222 26.4261 39.9668 28.6858L27.4218 35.5078" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </div>

            <div class="home-hero-sec__text-wrapper">
              <p class="home-hero-sec__text">
                Высший уровень надёжности, безупречное качество сервиса и несравненный престиж на дороге.
              </p>

              <div class="home-hero-sec__btn-row">
                <button class="home-hero-sec__btn btnV1">
                  <span class="btnV1__circle btnV1__circle-1"></span>
                  <span class="btnV1__circle btnV1__circle-2"></span>
                  <span class="btnV1__title">ВЫБРАТЬ АВТОМОБИЛЬ</span>

                  <div class="btnV1__line btnV1__line-1"></div>
                  <div class="btnV1__line btnV1__line-2"></div>
                  <div class="btnV1__line btnV1__line-3"></div>
                  <div class="btnV1__line btnV1__line-4"></div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="home-category-sec" v-if="pageData[0].acf.sekcziya_2_kategorii.zagolovok">
        <div class="container">
          <div class="header-row-sec">
            <h2 class="home-category-sec__title sec-title sec-title--left-mod" v-html="pageData[0].acf.sekcziya_2_kategorii.zagolovok"></h2>

            <NuxtLink to="/autopark" class="home-hero-sec__btn btnV1 btnV1--big">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">ПЕРЕЙТИ В КАТАЛОГ</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </NuxtLink>
          </div>

          <div class="home-news-sec__slider-row" v-if="carsCategoryes?.length > 0">
           <ClientOnly>
              <swiper-container 
              ref="catRefSlider" 
              @swiperslidechange="onSlideChange"
              class="home-cat-slider-swiper"
       
              >
                  <swiper-slide class="swipe-home-cat" v-for="item in carsCategoryes">
                     <NuxtLink :to="`/autopark?id=${item.id}`" class="swipe-home-cat__wrapper">
                      <div class="swipe-home-cat__img-wprapper">
                        <img 
                        :src="item.acf.izobrazhenie_kategorii.url" 
                        :alt="item.acf.izobrazhenie_kategorii.alt" 
                        class="swipe-home-cat__img">
                      </div>
                      <div class="swipe-home-cat__title-row">
                        <p class="swipe-home-cat__title" v-html="item.name"></p>
                      </div>
                     </NuxtLink>
                  </swiper-slide>

              </swiper-container>
            </ClientOnly>

              <!-- <div class="home-cat-slider-swiper-button-prev swiper-def-ar swiper-def-ar--prev swiper-button" @click="swiperRecomend.prev()">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.15429 13.7071C8.53841 13.3166 8.53841 12.6834 8.15429 12.2929L2.94817 7L8.15429 1.70711C8.53841 1.31658 8.53841 0.683417 8.15429 0.292893C7.77017 -0.0976315 7.14738 -0.0976315 6.76326 0.292893L0.861622 6.29289C0.4775 6.68342 0.4775 7.31658 0.861622 7.70711L6.76326 13.7071C7.14738 14.0976 7.77017 14.0976 8.15429 13.7071Z" fill="#5D736E"/>
                  </svg>
              </div> -->
              <div class="home-news-sec__slider-row-control-wrapper">

                <div class="slider-counter">
                  <span class="slider-counter__current">{{ getRealIndex(catRefSliderGallery.realIndex) }}</span>
                  <span class="slider-counter__total">/{{ getTotalSlides(catRefSliderGallery.slides) }}</span>
          
                </div>
               
                <div class="home-cat-slider-swiper-button-next swiper-def-ar swiper-def-ar--next swiper-button" @click="catRefSliderGallery.next()">
                    <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
                    </svg>

                    <div class="swiper-def-ar__circle"></div>
                </div>
              </div>

          </div>
        </div>
      </section>

      <section class="home-cars-sec" v-if="pageData[0].acf.sekcziya_3_populyarnye_modeli.zagolovok"> 
        <div class="container">
          <div class="header-row-sec">
            <h2 class="header-row-sec__title sec-title sec-title--left-mod" v-html="pageData[0].acf.sekcziya_3_populyarnye_modeli.zagolovok"></h2>

            <NuxtLink to="/autopark" class="home-hero-sec__btn btnV1 btnV1--big">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">CМОТРЕТЬ ВСЕ АВТО</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </NuxtLink>
          </div>

          <div class="header-row-sec__cars-wrapper">
            
            <template v-if="recomendCars?.length > 0">

                <carCard v-for="(item, index) in recomendCars" :key="index" :carData="item" :allCats="carsCategoryes" />

            </template>
            
          </div>
        </div>
      </section>

      <section class="home-our-client-sec" v-if="pageData[0].acf.sekcziya_4_nashi_klienty.zagolovok">
        <div class="container">
          <div class="header-row-sec-v2">

            <div class="header-row-sec-v2__decor-wrapper">
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
            
            <h2 class="home-our-client-sec__title sec-title sec-title--center-mod" v-html="pageData[0].acf.sekcziya_4_nashi_klienty.zagolovok"></h2>
          </div>

          <div class="home-our-client-sec__slider-wrapper" v-if="pageData[0].acf.sekcziya_4_nashi_klienty.klienty?.length > 0">
            <ClientOnly>
              <swiper-container 
              ref="ourClientsSlider" 
              class="our-client-slider"
              >
                  <swiper-slide class="our-client-slider__slide" v-for="item in pageData[0].acf.sekcziya_4_nashi_klienty.klienty">
                    <div class="our-client-slider__slide-wrapper">
                      <img :src="item.foto.url" :alt="item.foto.alt" class="our-client-slider__slide-img">
                      <div class="our-client-slider__slide-data">
                        <p class="our-client-slider__slide-name" v-html="item.imya"></p>
                        <p class="our-client-slider__slide-description" v-html="item.opisanie"></p>
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

                <div class="slider-counter">
                  <span class="slider-counter__current">{{ getRealIndex(swiperClients.realIndex) }}</span>
                  <span class="slider-counter__total">/{{ getTotalSlides(swiperClients.slides) }}</span>
          
                </div>
               
                <div class="home-cat-slider-swiper-button-next swiper-def-ar swiper-def-ar--next swiper-button" @click="swiperClients.next()">
                    <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
                    </svg>

                    <div class="swiper-def-ar__circle"></div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section class="clients-about-us" v-if="pageData[0].acf.sekcziya_5_otzyvy.zagolovok">
        <div class="container">
          <div class="header-row-sec-v2">

            <div class="header-row-sec-v2__decor-wrapper">
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
            
            <h2 class="clients-about-us__title sec-title sec-title--center-mod" v-html="pageData[0].acf.sekcziya_5_otzyvy.zagolovok"></h2>
          </div>

          <div class="clients-about-us__slider-wrapper">
            <ClientOnly>
              <swiper-container 
              ref="clientsAboutUsSlider" 
              class="clients-about-us-slider"
              >
                  <swiper-slide class="clients-about-us-slider__slide" v-for="(item, index) in pageData[0].acf.sekcziya_5_otzyvy.otzyvy">
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
                        <p class="clients-about-us-slider__slide-client-name" v-if="item.imya_avtora" v-html="item.imya_avtora"></p>
                        <p class="clients-about-us-slider__slide-client-description" v-if="item.podzagolovok" v-html="item.podzagolovok"></p>
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

                <div class="slider-counter">
                  <span class="slider-counter__current">{{ getRealIndex(swiperClientsAbout.realIndex) }}</span>
                  <span class="slider-counter__total">/{{ getTotalSlides(swiperClientsAbout.slides) }}</span>
          
                </div>
               
                <div class="home-cat-slider-swiper-button-next swiper-def-ar swiper-def-ar--next swiper-button" @click="swiperClientsAbout.next()">
                    <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
                    </svg>

                    <div class="swiper-def-ar__circle"></div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section class="home-about-sec" v-if="pageData[0].acf.sekcziya_6_o_kompanii.zagolovok">
        <div class="container">
          <div class="home-about-sec__info">
             <h2 class="clients-about-us__title sec-title sec-title--left-mod" v-html="pageData[0].acf.sekcziya_6_o_kompanii.zagolovok"></h2>
             <div class="home-about-sec__adv-wrapper">

              <div class="home-about-sec__adv adv-element" v-for="item in pageData[0].acf.sekcziya_6_o_kompanii.tezisy">
                <div class="adv-element__icon-wrapper">
                  <div class="adv-element__icon-wrapper-contaier">
                  <img :src="item.ikonka.url" :alt="item.ikonka.alt" class="adv-element__icon">
                  </div>
                </div>
                <div class="adv-element__data">
                  <p class="adv-element__title" v-html="item.zagolovok"></p>
                  <p class="adv-element__subtitle" v-html="item.opisanie"></p>
                </div>
              </div>

             </div>
          </div>
          
          <div class="home-about-sec__images">
            <div class="home-about-sec__images-claster">

              <div class="home-about-sec__images-claster-col  home-about-sec__images-claster-col--left">
                <img v-for="item in pageData[0].acf.sekcziya_6_o_kompanii.izobrazheniya.slice(0,2)" 
                :src="item.kartinka.url" 
                :alt="item.kartinka.alt" class="home-about-sec__images-element">

              </div>
              
              <div class="home-about-sec__images-claster-col home-about-sec__images-claster-col--right">
                 <img v-for="item in pageData[0].acf.sekcziya_6_o_kompanii.izobrazheniya.slice(2,4)" 
                :src="item.kartinka.url" 
                :alt="item.kartinka.alt" class="home-about-sec__images-element">

              </div>

            </div>

            <div class="home-about-sec__images-contacts-row">

              <template v-if="pageData[0].acf.sekcziya_6_o_kompanii.kontakty?.length > 0">
                <a v-for="item in pageData[0].acf.sekcziya_6_o_kompanii.kontakty" 
                :href="item.ssylka" class="home-about-sec__images-contact-element">{{ item.tekst }}</a>
              </template>
     
              <div class="home-about-sec__images-social-row" v-if="pageData[0].acf.sekcziya_6_o_kompanii.socz_seti?.length > 0">
                <a v-for="item in pageData[0].acf.sekcziya_6_o_kompanii.socz_seti" 
                :href="item.ssylka" class="contact-link">
                    <div class="contact-link__wrapper">
                        <img :src="item.ikonka.url" :alt="item.ikonka.alt">
                    </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="home-faq-sec" v-if="pageData[0].acf.sekcziya_7_chastye_voprosy.zagolovok">
        <div class="container">
          <div class="header-row-sec">
            <h2 class="header-row-sec__title sec-title sec-title--left-mod" v-html="pageData[0].acf.sekcziya_7_chastye_voprosy.zagolovok"></h2>

            <button class="home-hero-sec__btn btnV1 btnV1--big" @click="openTargetPopupForm()">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">ЗАДАТЬ СВОЙ ВОПРОС</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </button>
          </div>

          <div class="faq-wrapper">

            <template v-for="(item,index) in pageData[0].acf.sekcziya_7_chastye_voprosy.voprosy">
              <faqElement :title="item.vopros" :counter="+index+1" :description="item.otvet"/>
            </template>

          </div>
        </div>
      </section>

      <formSec />

      <section class="home-seo-sec seo-sec-type-1" v-if="pageData[0].acf.sekcziya_10_seo_blok.zagolovok_h1">
        <div class="container">
          <div class="seo-sec-type-1__data">
             <h1 class="seo-sec-type-1__title sec-title sec-title--left-mod" v-html="pageData[0].acf.sekcziya_10_seo_blok.zagolovok_h1"></h1>

             <div class="seo-sec-type-1__text-container">
              <div
                class="seo-sec-type-1__text-wrapper"
                :style="{ maxHeight: expanded ? `${textHeight}px` : '215px', overflow: 'hidden',  }"
                ref="wrapper"
              >
                <div class="wp-editor seo-sec-type-1__editor" ref="editor" v-html="pageData[0].acf.sekcziya_10_seo_blok.seo_opisanie"></div>
              </div>

              <div
                v-if="showReadMore"
                class="seo-sec-type-1__read-more"
                :class="{'active': expanded}"
                @click="toggleReadMore"
              >
                <span class="seo-sec-type-1__read-more-text" >
                  Читать полностью
                </span>
                <div class="seo-sec-type-1__read-more-icon">
                  <div class="seo-sec-type-1__read-more-icon-line seo-sec-type-1__read-more-icon--line-1"></div>
                  <div class="seo-sec-type-1__read-more-icon-line seo-sec-type-1__read-more-icon--line-2"></div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="seo-sec-type-1__images">
            <img v-for="item in pageData[0].acf.sekcziya_10_seo_blok.izobrazheniya"
            :src="item.kartirka.url" 
            :alt="item.kartirka.alt" 
            class="seo-sec-type-1__img">
          </div>
        </div>
      </section>

    </main>
    
</template>

<script setup>

//IMPORT


import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

// import productCard from '@/components/component__producr-card.vue'
import carCard from '@/components/carCard.vue'

import faqElement from '@/components/faqElement.vue'

import formSec from '@/components/sections/formSec.vue'

import { useCounterStore } from '@/stores/counter'

import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const route = useRoute()



//DATA
const recomendCars = ref(null)


const { data: pageData } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=glavnaya`
);

// Ждём, пока данные загружены и есть что брать
const categoriesIds = pageData.value?.[0]?.acf?.sekcziya_2_kategorii?.kategorii || [];

const urlCat = `/wp-json/wp/v2/categories-cars?include=${categoriesIds.join(',')}`;

const { data: carsCategoryes } = await useFetch(
  `${store.serverUrlDomainRequest}${urlCat}`
);


if(pageData.value[0].acf?.sekcziya_3_populyarnye_modeli?.modeli?.length >0){



// получаем рекомендованные посты
try {
  const mainPost = pageData.value?.[0]
  const chitatTakzhe = mainPost?.acf?.sekcziya_3_populyarnye_modeli?.modeli

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/cars?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    recomendCars.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}


console.log('recomendCars', recomendCars)
}

console.log('pageData', pageData)

console.log('carsCategoryes', carsCategoryes)


const catRefSlider = ref(null)

const ourClientsSlider = ref(null)

const clientsAboutUsSlider = ref(null)


const editor = ref(null)
const wrapper = ref(null)
const showReadMore = ref(false)
const expanded = ref(false)
const textHeight = ref(0)


//categoryes gallery
const  catRefSliderGallery  = useSwiper(catRefSlider, {
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
    760: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1220: {
       slidesPerView: 4,
      spaceBetween: 30,
    },
  },

})

function onSlideChange(data){
  // console.log(catRefSliderGallery)
}




//clients gallery
const  swiperClients  = useSwiper(ourClientsSlider, {
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
    760: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1220: {
       slidesPerView: 4,
      spaceBetween: 30,
    },
  },

})



//clients gallery
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
    760: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1220: {
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


  // const currentSlideIndex = ref(2);
  // const onIndexChange = () => {
  //   console.log('index changed', e);
  //   currentSlideIndex.value = e;
  // };



const toggleReadMore = () => {
  expanded.value = !expanded.value
}

//cut string for long review text
function trimString(str) {
  if (str.length > 350) {
    return str.slice(0, 347) + '...';
  }
  return str;
}

//Open form popup
const openTargetPopupForm = ()=>{
  store.changePopupCurrent('popup-form')
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

onMounted(() => {
 // Альтернативно, через DOM событие
  if (catRefSlider.value) {
    catRefSlider.value.addEventListener('slidechange', (event) => {
      console.log('Слайд изменился! (DOM событие)')
      console.log('Текущий индекс:', event.target.swiper.activeIndex)
    })
  }



  const editorHeight = editor.value.scrollHeight
  textHeight.value = editorHeight

  if (editorHeight > 215) {
    showReadMore.value = true
  }
})



//SEO
useHead({
    title: pageData.value[0].acf.seo_title || pageData.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: pageData.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: pageData.value[0].acf.klyuchevaya_fraza || 'test' },

        // OpenGraph
        { property: 'og:title', content: pageData.value[0].acf.seo_title },
        { property: 'og:description', content: pageData.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: pageData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pageData.value[0].acf.seo_title },
        { name: 'twitter:description', content: pageData.value[0].acf.seo_description },
        { name: 'twitter:image', content: pageData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            pageData.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/${pageData.value[0].acf.canonical || route.name}` }
    ]
})



</script>


<style >
/* swiper custom styles */

</style>
