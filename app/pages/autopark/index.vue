<template>
    <section class="autopark-cars-sec">
        <div class="container">
            <div class="header-row-sec-v2">

                <div class="header-row-sec-v2__decor-wrapper">
                <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
                </div>
                
                <h2 class="home-our-client-sec__title sec-title sec-title--center-mod"><b>НАШ </b> АВТОПАРК</h2>
            </div>

          <div class="autopark-cars-sec__nav">
            <div class="autopark-cars-sec__slider-naw-wrapper">
                <ClientOnly>
                <swiper-container 
                ref="catRefSlider" 
                @swiperslidechange="onSlideChange"
                class="home-cat-slider-swiper"
        
                >

                    <swiper-slide class="swipe-home-cat" >
                        <NuxtLink to="/about" class="swipe-home-cat__wrapper active">
                        <div class="swipe-home-cat__img-wprapper">
                            <img src="@/assets/images/img/catAll.png" alt="" class="swipe-home-cat__img">
                        </div>
                        <div class="swipe-home-cat__title-row">
                            <p class="swipe-home-cat__title">Все авто</p>
                        </div>
                        </NuxtLink>
                    </swiper-slide>

                    <swiper-slide class="swipe-home-cat" >
                        <NuxtLink to="/about" class="swipe-home-cat__wrapper">
                        <div class="swipe-home-cat__img-wprapper">
                            <img src="@/assets/images/img/cat1.png" alt="" class="swipe-home-cat__img">
                        </div>
                        <div class="swipe-home-cat__title-row">
                            <p class="swipe-home-cat__title">Премиум Купе</p>
                        </div>
                        </NuxtLink>
                    </swiper-slide>

                    <swiper-slide class="swipe-home-cat" >
                        <NuxtLink to="/about" class="swipe-home-cat__wrapper">
                        <div class="swipe-home-cat__img-wprapper">
                            <img src="@/assets/images/img/cat2.png" alt="" class="swipe-home-cat__img">
                        </div>
                        <div class="swipe-home-cat__title-row">
                            <p class="swipe-home-cat__title">Кабриолет</p>
                        </div>
                        </NuxtLink>  
                    </swiper-slide>

                    <swiper-slide class="swipe-home-cat" >
                    <NuxtLink to="/about" class="swipe-home-cat__wrapper">
                        <div class="swipe-home-cat__img-wprapper">
                            <img src="@/assets/images/img/cat3.png" alt="" class="swipe-home-cat__img">
                        </div>
                        <div class="swipe-home-cat__title-row">
                            <p class="swipe-home-cat__title">Премиуи Седан</p>
                        </div>
                        </NuxtLink>  
                    </swiper-slide>

                    <swiper-slide class="swipe-home-cat" >
                        <NuxtLink to="/about" class="swipe-home-cat__wrapper">
                        <div class="swipe-home-cat__img-wprapper">
                            <img src="@/assets/images/img/cat4.png" alt="" class="swipe-home-cat__img">
                        </div>
                        <div class="swipe-home-cat__title-row">
                            <p class="swipe-home-cat__title">Внедорожник</p>
                        </div>
                        </NuxtLink>  
                    </swiper-slide>

                    <swiper-slide class="swipe-home-cat" >
                        <NuxtLink to="/about" class="swipe-home-cat__wrapper">
                        <div class="swipe-home-cat__img-wprapper">
                            <img src="@/assets/images/img/cat5.png" alt="" class="swipe-home-cat__img">
                        </div>
                        <div class="swipe-home-cat__title-row">
                            <p class="swipe-home-cat__title">V-class</p>
                        </div>
                        </NuxtLink>
                    </swiper-slide>

                    <swiper-slide class="swipe-home-cat" >
                        <NuxtLink to="/about" class="swipe-home-cat__wrapper">
                        <div class="swipe-home-cat__img-wprapper">
                            <img src="@/assets/images/img/cat2.png" alt="" class="swipe-home-cat__img">
                        </div>
                        <div class="swipe-home-cat__title-row">
                            <p class="swipe-home-cat__title">V-class</p>
                        </div>
                        </NuxtLink>
                    </swiper-slide>

                    <!-- <swiper-slide v-for="item in recomendDevelopersList" :key="item">

                        <div class="recomend-slider-developers__wrapper" ref="itemWrappers">
                            
                            <componentDeveloperSmall :mainData="item" />
                        </div>
                        
                    </swiper-slide> -->


                </swiper-container>
                </ClientOnly>

              <!-- <div class="home-cat-slider-swiper-button-prev swiper-def-ar swiper-def-ar--prev swiper-button" @click="swiperRecomend.prev()">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.15429 13.7071C8.53841 13.3166 8.53841 12.6834 8.15429 12.2929L2.94817 7L8.15429 1.70711C8.53841 1.31658 8.53841 0.683417 8.15429 0.292893C7.77017 -0.0976315 7.14738 -0.0976315 6.76326 0.292893L0.861622 6.29289C0.4775 6.68342 0.4775 7.31658 0.861622 7.70711L6.76326 13.7071C7.14738 14.0976 7.77017 14.0976 8.15429 13.7071Z" fill="#5D736E"/>
                  </svg>
              </div> -->
              <div class="home-cat-slider-swiper-button-next swiper-def-ar swiper-def-ar--next swiper-button" @click="catRefSliderGallery.next()">
                    <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
                    </svg>

                    <div class="swiper-def-ar__circle"></div>
                </div>

            </div>


            <div class="autopark-cars-sec__filtrs-row">
                <div class="autopark-cars-sec__filtrs">
                    
                    <div class="autopark-cars-sec__filtr-wrapper autopark-cars-sec__filtr-wrapper--power">
                        <customSelect :placeholder="'Мощьность'" :dopPlaceholder="'л.с'" :typeSelect="'two'"/>
                    </div>

                    <div class="autopark-cars-sec__filtr-wrapper autopark-cars-sec__filtr-wrapper--power">
                        <customSelect :placeholder="'Тип трансмиссии'" :typeSelect="'one'" :valuesVariants="filtrTransValues"/>
                    </div>

                    <div class="autopark-cars-sec__filtr-wrapper autopark-cars-sec__filtr-wrapper--seat-places">
                        <customSelect :placeholder="'К-во мест'" :typeSelect="'one'" :valuesVariants="filtrPlacesValues"/>
                    </div>

                    <div class="autopark-cars-sec__filtr-wrapper autopark-cars-sec__filtr-wrapper--price">
                        <customSelect :placeholder="'Стоимость'" :dopPlaceholder="'₽'" :typeSelect="'two'"/>
                    </div>

                    <div class="autopark-cars-sec__filtr-clear">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="17.5703" width="1.65714" height="24.8571" rx="0.828571" transform="rotate(44.6384 17.5703 0)" fill="#F3C884"/>
                        <rect y="1.28125" width="1.65714" height="24.8571" rx="0.828571" transform="rotate(-45.3616 0 1.28125)" fill="#F3C884"/>
                        </svg>


                    </div>
                    
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


          <div class="autopark-cars-sec__cars" :class="{'table-mod': viewMod == false}">

            <carCard />

            <carCard />

            <carCard />

            <carCard />

            <carCard />

            <carCard />

          </div>

          <div class="autopark-cars-sec__load-more-row">
            <button class="home-hero-sec__btn btnV1 btnV1--big">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">ЗАГРУЗИТЬ ЕЩЕ АВТО</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </button>
          </div>


        </div>
    </section>
    

    <formSec />

    <section class="autopark-seo-sec">
        <div class="container">
            <div class="autopark-seo-sec__images-claster">

              <div class="autopark-seo-sec__images-claster-col  autopark-seo-sec__images-claster-col--left">
                <img src="@/assets/images/img/seo-catalog-1.jpg" alt="" class="autopark-seo-sec__images-element">
                <img src="@/assets/images/img/seo-catalog-2.jpg" alt="" class="autopark-seo-sec__images-element">
              </div>
              
              <div class="autopark-seo-sec__images-claster-col autopark-seo-sec__images-claster-col--right">
                <img src="@/assets/images/img/seo-catalog-3.jpg" alt="" class="autopark-seo-sec__images-element">
                <img src="@/assets/images/img/seo-catalog-4.jpg" alt="" class="autopark-seo-sec__images-element">
              </div>

            </div>

            <div class="autopark-seo-sec__data">
                <h2 class="clients-about-us__title sec-title sec-title--left-mod"><b>ЗАГОЛОВОК </b> СЕО ТЕКСТА ДЛЯ СТРАНИЦЫ КАТАЛОГА</h2>
                <div class="autopark-seo-sec__text-wrapper">
                    <div class="wp-editor">
                        <p>В <b>Red Angels</b> мы верим, что роскошь — это не просто скорость и мощность. Это чувство свободы, уверенности и стиля, которое остаётся с вами даже после остановки двигателя.</p>

                        <p>Мы создаём сервис, в котором каждый момент продуман до совершенства — от идеального состояния автомобилей до безупречного обслуживания. Наши клиенты выбирают не просто аренду, а опыт, где каждый выезд становится событием.</p>

                        <p>Red Angels — это команда, объединённая страстью к автомобилям и вниманием к деталям. Мы стремимся превзойти ожидания, чтобы каждая поездка стала отражением вашего статуса и вкуса.</p>

                        <p>В Red Angels мы верим, что роскошь — это не просто скорость и мощность. Это чувство свободы, уверенности и стиля, которое остаётся с вами даже после остановки двигателя.</p>

                        <p>Мы создаём сервис, в котором каждый момент продуман до совершенства — от идеального состояния автомобилей до безупречного обслуживания. Наши клиенты выбирают не просто аренду, а опыт, где каждый выезд становится событием.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
</template>


<script setup>
    //IMPORT

    import { useCounterStore } from '@/stores/counter'

    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

    import customSelect from '@/components/filtrs/customSelect.vue'

    import carCard from '@/components/carCard.vue'

    import formSec from '@/components/sections/formSec.vue'

    const catRefSlider = ref(null)

    const filtrTransValues = [
        'Автомат',
        'Механика'
    ]

     const filtrPlacesValues = [
        '2',
        '3',
        '4',
        '5',
        'более 5'
    ]

    const viewMod = ref(true)

    //categoryes gallery
    const  catRefSliderGallery  = useSwiper(catRefSlider, {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,   
    speed: 800,
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
        slidesPerView: 6,
        spaceBetween: 20,
        },
    },

    })

function onSlideChange(data){
  // console.log(catRefSliderGallery)
}

</script>