<template>
    <section class="autopark-cars-sec">
        <div class="container">
            <div class="header-row-sec-v2">

                <div class="header-row-sec-v2__decor-wrapper"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 50,
                  duration: 0.5,
                  delay: 0.1,
                    start: "top 100%",
                }'>
                <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
                </div>
                
                <h2 class="home-our-client-sec__title sec-title sec-title--center-mod" 
                v-if="pageData[0]?.acf?.zagolovok" v-html="pageData[0].acf.zagolovok"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 50,
                  duration: 0.5,
                  delay: 0.2,
                    start: "top 100%",
                }'></h2>
            </div>

          <div class="autopark-cars-sec__nav">
            <div class="autopark-cars-sec__slider-naw-wrapper">
                <ClientOnly>
                <swiper-container 
                ref="catRefSlider" 
                @swiperslidechange="onSlideChange"
                class="home-cat-slider-swiper"
        
                >

                    <swiper-slide class="swipe-home-cat" @click="loadCurrentCut('all',999)"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 200,
                    duration: 0.5,
                    delay: 0.1,
                    start: "top 100%",
                  }'>
                        <div class="swipe-home-cat__wrapper" :class="{'active': currentCutIndex == 999}">
                            <div class="swipe-home-cat__img-wprapper">
                                <img src="@/assets/images/img/catAll.png" alt="" class="swipe-home-cat__img">
                            </div>
                            <div class="swipe-home-cat__title-row">
                                <p class="swipe-home-cat__title">Все авто</p>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide class="swipe-home-cat" v-for="(item,index) in carsCategoryes" @click="loadCurrentCut(item.id,index)"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 200,
                    duration: 0.5,
                    delay: (0.1 * (+index + 1)),
                    start: "top 100%",
                  }'>
                        <div class="swipe-home-cat__wrapper" :class="{'active': currentCutIndex == index}">
                            <div class="swipe-home-cat__img-wprapper">
                                <img :src="item.acf.izobrazhenie_kategorii.url" :alt="item.acf.izobrazhenie_kategorii.alt" class="swipe-home-cat__img">
                            </div>
                            <div class="swipe-home-cat__title-row">
                                <p class="swipe-home-cat__title">{{ item.name}}</p>
                            </div>
                        </div>
                    </swiper-slide>

                </swiper-container>
                </ClientOnly>

              <div class="home-cat-slider-swiper-button-prev  swiper-def-ar swiper-def-ar--next swiper-button" 
              @click="catRefSliderGallery.prev()"
              v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 50,
                  duration: 0.5,
                  delay: 0.2,
                start: "top 100%",
                }'>
                  <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
                    </svg>
                    <div class="swiper-def-ar__circle"></div>
              </div>
              <div class="home-cat-slider-swiper-button-next swiper-def-ar swiper-def-ar--next swiper-button" 
              @click="catRefSliderGallery.next()"
              v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 50,
                  duration: 0.5,
                  delay: 0.2,
                start: "top 100%",
                }'
              >
                    <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
                    </svg>

                    <div class="swiper-def-ar__circle"></div>
                </div>

            </div>


            <div class="autopark-cars-sec__filtrs-row" 
            v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 50,
                  duration: 0.5,
                  delay: 0.3,
                  start: "top 100%",
                }'>
                <div class="autopark-cars-sec__filtrs-wrapper">

                    <div class="autopark-cars-sec__filtrs-mob-btn" @click="show = !show">
                        Все фильтры

                        <svg v-if="show == false" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.4987 4.16667C7.03846 4.16667 6.66536 4.53976 6.66536 5C6.66536 5.46024 7.03846 5.83333 7.4987 5.83333C7.95894 5.83333 8.33203 5.46024 8.33203 5C8.33203 4.53976 7.95894 4.16667 7.4987 4.16667ZM5.14095 4.16667C5.48415 3.19567 6.41018 2.5 7.4987 2.5C8.58721 2.5 9.51325 3.19567 9.85644 4.16667H15.832C16.2923 4.16667 16.6654 4.53976 16.6654 5C16.6654 5.46024 16.2923 5.83333 15.832 5.83333H9.85644C9.51325 6.80433 8.58721 7.5 7.4987 7.5C6.41018 7.5 5.48415 6.80433 5.14095 5.83333H4.16536C3.70513 5.83333 3.33203 5.46024 3.33203 5C3.33203 4.53976 3.70513 4.16667 4.16536 4.16667H5.14095ZM12.4987 9.16667C12.0385 9.16667 11.6654 9.53976 11.6654 10C11.6654 10.4602 12.0385 10.8333 12.4987 10.8333C12.9589 10.8333 13.332 10.4602 13.332 10C13.332 9.53976 12.9589 9.16667 12.4987 9.16667ZM10.141 9.16667C10.4841 8.19567 11.4102 7.5 12.4987 7.5C13.5872 7.5 14.5132 8.19567 14.8564 9.16667H15.832C16.2923 9.16667 16.6654 9.53976 16.6654 10C16.6654 10.4602 16.2923 10.8333 15.832 10.8333H14.8564C14.5132 11.8043 13.5872 12.5 12.4987 12.5C11.4102 12.5 10.4841 11.8043 10.141 10.8333H4.16536C3.70513 10.8333 3.33203 10.4602 3.33203 10C3.33203 9.53976 3.70513 9.16667 4.16536 9.16667H10.141ZM7.4987 14.1667C7.03846 14.1667 6.66536 14.5398 6.66536 15C6.66536 15.4602 7.03846 15.8333 7.4987 15.8333C7.95894 15.8333 8.33203 15.4602 8.33203 15C8.33203 14.5398 7.95894 14.1667 7.4987 14.1667ZM5.14095 14.1667C5.48415 13.1957 6.41018 12.5 7.4987 12.5C8.58721 12.5 9.51325 13.1957 9.85644 14.1667H15.832C16.2923 14.1667 16.6654 14.5398 16.6654 15C16.6654 15.4602 16.2923 15.8333 15.832 15.8333H9.85644C9.51325 16.8043 8.58721 17.5 7.4987 17.5C6.41018 17.5 5.48415 16.8043 5.14095 15.8333H4.16536C3.70513 15.8333 3.33203 15.4602 3.33203 15C3.33203 14.5398 3.70513 14.1667 4.16536 14.1667H5.14095Z" fill="#5D736E"/>
                        </svg>

                        <svg v-else width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="17.5703" width="1.65714" height="24.8571" rx="0.828571" transform="rotate(44.6384 17.5703 0)" fill="#F3C884"/>
                        <rect y="1.28125" width="1.65714" height="24.8571" rx="0.828571" transform="rotate(-45.3616 0 1.28125)" fill="#F3C884"/>
                        </svg>


                    </div>


                    <Vue3SlideUpDown v-model="show">
                        <div class="autopark-cars-sec__filtrs">
                            
                            <div class="autopark-cars-sec__filtr-wrapper autopark-cars-sec__filtr-wrapper--power">
                                <customSelect :placeholder="'Мощьность'" :dopPlaceholder="'л.с'" :typeSelect="'two'" @sendData="getFiltrPover"/>
                            </div>

                            <div class="autopark-cars-sec__filtr-wrapper autopark-cars-sec__filtr-wrapper--power">
                                <customSelect :placeholder="'Тип привода'" :typeSelect="'one'" :valuesVariants="filtrTransValues" @sendData="getFiltrTransmision"/>
                            </div>

                            <div class="autopark-cars-sec__filtr-wrapper autopark-cars-sec__filtr-wrapper--seat-places">
                                <customSelect :placeholder="'К-во мест'" :typeSelect="'one'" :valuesVariants="filtrPlacesValues" @sendData="getFiltrPasangers"/>
                            </div>

                            <div class="autopark-cars-sec__filtr-wrapper autopark-cars-sec__filtr-wrapper--price">
                                <customSelect :placeholder="'Стоимость'" :dopPlaceholder="'₽'" :typeSelect="'two'" @sendData="getFiltrCost"/>
                            </div>

                            <div class="autopark-cars-sec__filtr-clear" @click="clearFiltr">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="17.5703" width="1.65714" height="24.8571" rx="0.828571" transform="rotate(44.6384 17.5703 0)" fill="#F3C884"/>
                                <rect y="1.28125" width="1.65714" height="24.8571" rx="0.828571" transform="rotate(-45.3616 0 1.28125)" fill="#F3C884"/>
                                </svg>
                            </div>
                            
                        </div>
                    </Vue3SlideUpDown>

                </div>

                <div class="autopark-cars-sec__view-mod-row">
                    <div class="autopark-cars-sec__view-btn " :class="{'active': viewMod == false}" @click="viewMod = false">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.15778 20.2721C9.15778 18.8273 7.98656 17.6561 6.54178 17.6561C5.097 17.6561 3.92578 18.8273 3.92578 20.2721C3.92578 21.7169 5.097 22.8881 6.54178 22.8881C7.98656 22.8881 9.15778 21.7169 9.15778 20.2721Z" fill="#5D736E"/>
                        <path d="M18.3138 20.2721C18.3138 18.8273 17.1426 17.6561 15.6978 17.6561C14.253 17.6561 13.0818 18.8273 13.0818 20.2721C13.0818 21.7169 14.253 22.8881 15.6978 22.8881C17.1426 22.8881 18.3138 21.7169 18.3138 20.2721Z" fill="#5D736E"/>
                        <path d="M24.8538 17.6561C26.2985 17.6561 27.4698 18.8273 27.4698 20.2721C27.4698 21.7169 26.2985 22.8881 24.8538 22.8881C23.409 22.8881 22.2378 21.7169 22.2378 20.2721C22.2378 18.8273 23.409 17.6561 24.8538 17.6561Z" fill="#5D736E"/>
                        <path d="M9.15778 11.1161C9.15778 9.67131 7.98656 8.50008 6.54178 8.50008C5.097 8.50008 3.92578 9.67131 3.92578 11.1161C3.92578 12.5609 5.097 13.7321 6.54178 13.7321C7.98656 13.7321 9.15778 12.5609 9.15778 11.1161Z" fill="#5D736E"/>
                        <path d="M15.6978 8.50008C17.1426 8.50008 18.3138 9.67131 18.3138 11.1161C18.3138 12.5609 17.1426 13.7321 15.6978 13.7321C14.253 13.7321 13.0818 12.5609 13.0818 11.1161C13.0818 9.67131 14.253 8.50008 15.6978 8.50008Z" fill="#5D736E"/>
                        <path d="M27.4698 11.1161C27.4698 9.67131 26.2985 8.50008 24.8538 8.50008C23.409 8.50008 22.2378 9.67131 22.2378 11.1161C22.2378 12.5609 23.409 13.7321 24.8538 13.7321C26.2985 13.7321 27.4698 12.5609 27.4698 11.1161Z" fill="#5D736E"/>
                        </svg>
                    </div>

                    <div class="autopark-cars-sec__view-btn" :class="{'active': viewMod == true}" @click="viewMod = true">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.23047 7.84706C5.23047 7.12467 5.81608 6.53906 6.53847 6.53906H24.8505C25.5728 6.53906 26.1585 7.12467 26.1585 7.84706C26.1585 8.56945 25.5728 9.15506 24.8505 9.15506H6.53847C5.81608 9.15506 5.23047 8.56945 5.23047 7.84706ZM5.23047 13.0791C5.23047 12.3567 5.81608 11.7711 6.53847 11.7711H24.8505C25.5728 11.7711 26.1585 12.3567 26.1585 13.0791C26.1585 13.8014 25.5728 14.3871 24.8505 14.3871H6.53847C5.81608 14.3871 5.23047 13.8014 5.23047 13.0791ZM5.23047 18.3111C5.23047 17.5887 5.81608 17.0031 6.53847 17.0031H24.8505C25.5728 17.0031 26.1585 17.5887 26.1585 18.3111C26.1585 19.0334 25.5728 19.6191 24.8505 19.6191H6.53847C5.81608 19.6191 5.23047 19.0334 5.23047 18.3111ZM5.23047 23.5431C5.23047 22.8207 5.81608 22.2351 6.53847 22.2351H24.8505C25.5728 22.2351 26.1585 22.8207 26.1585 23.5431C26.1585 24.2654 25.5728 24.8511 24.8505 24.8511H6.53847C5.81608 24.8511 5.23047 24.2654 5.23047 23.5431Z" fill="#5D736E"/>
                        </svg>
                    </div>
                </div>
            </div>

          </div>


          <div class="autopark-cars-sec__cars  cars-wrapper-rv" :class="{'table-mod': viewMod == false}"
          v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 50,
                  duration: 0.5,
                  delay: 0.3,
                start: "top 100%",
                }'>
            
            <template v-if="allCarsSave?.length > 0">

                <carCard v-for="(item, index) in allCarsSave" :key="index" :carData="item" :allCats="carsCategoryes"  />

            </template>

            <template v-else>
                <div class="autopark-cars-sec__cars-empty-search cars-empty-searc">
                    <div class="cars-empty-searc__wrapper">
                        <p class="cars-empty-searc__title"><b>АВТОМОБИЛЕЙ</b> НЕ НАЙДЕНО</p>
                        <p class="cars-empty-searc__subtitle">Выберите другую категорию или попробуйте сбросить фильтр</p>
                    </div>
                    
                </div>
            </template>

          </div>

          <!-- <div class="autopark-cars-sec__load-more-row">
            <button class="home-hero-sec__btn btnV1 btnV1--big">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">ЗАГРУЗИТЬ ЕЩЕ АВТО</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </button>
          </div> -->


        </div>
    </section>
    

    <formSec :formSecData="optionsData"  />

    <section class="autopark-seo-sec" v-if="pageData[0]?.acf?.seo_sekcziya?.zagolovok_h1">
        <div class="container">
            <div class="autopark-seo-sec__images-claster">

              <div class="autopark-seo-sec__images-claster-col  autopark-seo-sec__images-claster-col--left">

                <template v-for="(item, index) in getCurrentImg(pageData[0].acf.seo_sekcziya.izobrazheniya, 1)">
                    <img 
                    :src="item.img.url" 
                    :alt="item.img.alt" 
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.1,
                    start: "top 80%",
                    }'
                    class="autopark-seo-sec__images-element"
                    >
           
                </template>
                
              </div>
              
              <div class="autopark-seo-sec__images-claster-col autopark-seo-sec__images-claster-col--right">
                <template v-for="(item, index) in getCurrentImg(pageData[0].acf.seo_sekcziya.izobrazheniya, 2)">
                    <img 
                    :src="item.img.url" 
                    :alt="item.img.alt"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.2,
                    start: "top 80%",
                    }' 
                    class="autopark-seo-sec__images-element"
                    >
           
                </template>
              </div>

            </div>

            <div class="autopark-seo-sec__data">
                <h2 class="clients-about-us__title sec-title sec-title--left-mod" 
                v-html="pageData[0].acf.seo_sekcziya.zagolovok_h1"
                v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.1,
                    start: "top 80%",
                    }'></h2>
                <div class="autopark-seo-sec__text-wrapper" v-if="pageData[0]?.acf?.seo_sekcziya.tekst">
                    <div class="wp-editor autopark-seo-sec__pc-text" 
                    v-html="pageData[0].acf.seo_sekcziya.tekst"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.1,
                    start: "top 80%",
                    }'></div>

                    <div class="seo-sec-type-1__text-container autopark-seo-sec__ipad-text" 
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.1,
                    start: "top 80%",
                    }'>
                        <div
                            class="seo-sec-type-1__text-wrapper"
                            :style="{ maxHeight: expanded ? `${textHeight}px` : '215px', overflow: 'hidden',  }"
                            ref="wrapper"
                        >
                            <div class="wp-editor seo-sec-type-1__editor" ref="editor" v-html="pageData[0].acf.seo_sekcziya.tekst"></div>
                        </div>

                        <div
                            v-if="showReadMore"
                            class="seo-sec-type-1__read-more"
                            :class="{'active': expanded}"
                            @click="toggleReadMore"
                            v-gsap.whenVisible.once.from='{
                            autoAlpha: 0,
                            y: 50,
                            duration: 0.5,
                            delay: 0.1,
                            start: "top 80%",
                            }'
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
            </div>
        </div>
    </section>

    
</template>


<script setup>
    //IMPORT
    import { ref, onMounted  } from 'vue';

    import customSelect from '@/components/filtrs/customSelect.vue'

    import carCard from '@/components/carCard.vue'

    import formSec from '@/components/sections/formSec.vue'

    import { Vue3SlideUpDown } from "vue3-slide-up-down";
    
    import { useCounterStore } from '@/stores/counter'

    import { useNuxtApp } from '#app'


    //DATA
    const nuxtApp = useNuxtApp()

    const store = useCounterStore(nuxtApp.$pinia)

    const route = useRoute()

    const currentCutIndex = ref(999)

    const allCarsSave = ref(null)

    const show = ref(true)

    const expanded = ref(false)

    const showReadMore = ref(false)

    const textHeight = ref(0)

    const editor = ref(null)

    const { data: allCars } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/cars`)

    const { data: carsCategoryes } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/categories-cars`)

    const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=avtopark`)

    const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)



    allCarsSave.value = allCars.value
    console.log('allCars',allCars)
    console.log('carsCategoryes',carsCategoryes)
    console.log('pageData', pageData)
    console.log('optionsData', optionsData)

    

    const catRefSlider = ref(null)

    const filtrTransValues = [
        'Передний',
        'Задний',
        'Полный',
    ]

     const filtrPlacesValues = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
    ]

    const viewMod = ref(true)

    const filtrsObject = ref({
        'power':{
            'min':null,
            'max':null
        },
        'privod': null,
        'passengers': null,
        'cost': {
            'min':null,
            'max': null,
        }
    })

    //categoryes gallery
    const  catRefSliderGallery  = useSwiper(catRefSlider, {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,   
    speed: 800,
    freeMode: "true",  
    freeMode: true,
    slidesPerView: "auto",
    scrollbar:{ draggable: true },
    //  centeredSlides: 'auto',
    breakpoints: {
        100: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: false,
        },
        760: {
        slidesPerView: 4,
        spaceBetween: 20,
        },
        990: {
        slidesPerView: 4,
        spaceBetween: 20,
        },
        1380: {
        slidesPerView: 5,
        spaceBetween: 20,
        },
        1580: {
        slidesPerView: 6,
        spaceBetween: 20,
        },
    },

    })

   

function onSlideChange(data){
  // console.log(catRefSliderGallery)
}

async function loadCurrentCut(id,index){

    store.changePreloaderStatus(true)

    if(index){
        currentCutIndex.value = index
    }
    else{
        currentCutIndex.value = carsCategoryes.value.findIndex(cat => +cat.id === +id)
    }
    console.log('currentCutIndex.value', currentCutIndex.value)

    let url 

    if(id != 'all'){
        url = `${store.serverUrlDomainRequest}/wp-json/wp/v2/cars?categories-cars=${id}`
    }
    else{
        url = `${store.serverUrlDomainRequest}/wp-json/wp/v2/cars`
    }

    

    let res = await fetch(url)

    let newDataCars = await res.json()

    allCars.value = newDataCars
    allCarsSave.value = newDataCars

    console.log('newDataCars', newDataCars)

    setTimeout(()=>{
        store.changePreloaderStatus(false)
    },500)

    clearFiltr()

}



function getFiltrPover(data){
    console.log('pover filtr data:', data)
    filtrsObject.value.power.min = data.min
    filtrsObject.value.power.max = data.max
    applyFiltrs()
}

function getFiltrTransmision(data){
    console.log('Transmision filtr data:', data)
    filtrsObject.value.privod = data
    applyFiltrs()
}

function getFiltrPasangers(data){
    console.log('Pasangers filtr data:', data)
    filtrsObject.value.passengers = data
    applyFiltrs()
}

function getFiltrCost(data){
    console.log('Cost filtr data:', data)
    filtrsObject.value.cost.min = data.min
    filtrsObject.value.cost.max = data.max
    applyFiltrs()
}

function applyFiltrs(){

    console.log('filtrsObject.value',filtrsObject.value)

    let newArray = allCars.value

    let carsAfterFiltrs = newArray.filter(car => {
    const f = filtrsObject.value
    const char = car.acf.harakteristiki

    // Фильтр по мощности
    if (f.power.min !== null && +char.moshhnost_ls < +f.power.min) return false
    if (f.power.max !== null && +char.moshhnost_ls > +f.power.max) return false

    // Коробка передач
    if (f.privod !== null && char.tip_privoda !== f.privod) return false

    // Кол-во пассажиров
    if (f.passengers !== null && +char.kolichestvo_mest < +f.passengers){
        return false
    } 

    // Цена
    if (f.cost.min !== null && +car.acf.stoimost_avto_v_sutki < +f.cost.min) return false
    if (f.cost.max !== null && +car.acf.stoimost_avto_v_sutki > +f.cost.max) return false

    return true
  })

  console.log('carsAfterFiltrs', carsAfterFiltrs)

  allCarsSave.value = [] 
  allCarsSave.value = carsAfterFiltrs

}

const clearFiltr = () =>{
    store.changeClearFiltrStatus(true)

    filtrsObject.value = {
        'power':{
            'min':null,
            'max':null
        },
        'transmission': null,
        'passengers': null,
        'cost': {
            'min':null,
            'max': null,
        }
    }
    
    allCarsSave.value = allCars.value
    console.log('filtrsObject.value',filtrsObject.value)

}

function getCurrentImg(ar, indexList){
    console.log(ar)

    if(indexList == 1){
        return ar.slice(0,2)
    }

    if(indexList == 2){
        return ar.slice(2,4)
    }
    
}


function checkGetParametrs(){
    let currentCut = route.query.id

    if(currentCut){
        loadCurrentCut(currentCut)
    }
}


const toggleReadMore = () => {
  expanded.value = !expanded.value
}


onMounted(()=>{
    console.log('catRefSliderGallery', catRefSlider)
    checkGetParametrs()

    setTimeout(()=>{
        store.changeRouterChangeStatus(false)
    },200)


    const editorHeight = editor.value.scrollHeight
    textHeight.value = editorHeight

    if (editorHeight > 215) {
        showReadMore.value = true
    }


    const media = window.matchMedia('(max-width: 1380px)');

    if (media.matches) {
        show.value = false
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
        { property: 'og:image', content: pageData.value?.[0]?.acf?.og_image?.url || store.defaultUrlOgImage },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pageData.value[0].acf.seo_title },
        { name: 'twitter:description', content: pageData.value[0].acf.seo_description },
        { name: 'twitter:image', content: pageData.value?.[0]?.acf?.og_image?.url || store.defaultUrlOgImage },

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