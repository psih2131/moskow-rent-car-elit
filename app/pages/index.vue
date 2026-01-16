<template>
    <main class="main" v-if="pageData && pageData.length > 0">

      <section class="home-hero-sec"v-if="pageData[0].acf.sekcziya_1_hero.zagolovok">
        <div class="home-hero-sec__header-shadow"></div>

        <picture class="home-hero-sec__bg-img-picture">
          <source 
          v-if="pageData[0].acf.sekcziya_1_hero.fonovoe_izobrazhenie?.sizes?.medium_large"
          media="(max-width: 450px)" 
          :srcset="pageData[0].acf.sekcziya_1_hero.fonovoe_izobrazhenie.sizes.medium_large">

          <source 
          v-if="pageData[0].acf.sekcziya_1_hero.fonovoe_izobrazhenie?.sizes?.medium_large"
          media="(max-width: 760px)" 
          :srcset="pageData[0].acf.sekcziya_1_hero.fonovoe_izobrazhenie.sizes.medium_large">
          
          <source 
          v-if="pageData[0].acf.sekcziya_1_hero.fonovoe_izobrazhenie?.sizes['1536x1536']"
          media="(max-width: 990px)" 
          :srcset="pageData[0].acf.sekcziya_1_hero.fonovoe_izobrazhenie.sizes['1536x1536']">
          
          <img 
          :src="pageData[0].acf.sekcziya_1_hero.fonovoe_izobrazhenie.url" 
          :alt="pageData[0].acf.sekcziya_1_hero.fonovoe_izobrazhenie.alt" 
          class="home-hero-sec__bg-img"
          >
      </picture>

        <div class="home-hero-sec__content">
          <div class="container">

            <div class="home-hero-sec__title-wrapper">
              <div class="home-hero-sec__decor"
              v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  delay: 0.1,
                  duration: 0.5,
              
                }'>

                <img src="@/assets/images/img/decor.png" alt="" class="home-hero-sec__decor-img">
              </div>
              <div class="home-hero-sec__title-row">
                <div 
                class="home-hero-sec__decor-line"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  x: -50,
                  duration: 0.5,
                  delay: 0.2,
            
                }'></div>

                <h1 class="home-hero-sec__title" 
                v-html="pageData[0].acf.sekcziya_1_hero.zagolovok"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  delay: 0.2,
                  duration: 0.5,
              
                }'
                ></h1>

                <div 
                class="home-hero-sec__decor-line"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  x: 50,
                  duration: 0.5,
                  delay: 0.2,
            
                }'></div>
              </div>
            </div>

            <div class="home-hero-sec__play"
            v-if="pageData[0].acf.sekcziya_1_hero.video" 
            @click="openTargetPopupVider(pageData[0].acf.sekcziya_1_hero.video)"
            >
              <div class="home-hero-sec__play-wrapper">
              </div>
               <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.875 23.5013V37.1452C5.875 41.6674 10.8381 44.526 14.8767 42.3297L21.1492 38.9187M5.875 15.668V9.8574C5.875 5.33517 10.8381 2.47667 14.8767 4.67287L39.9668 18.3168C44.1222 20.5765 44.1222 26.4261 39.9668 28.6858L27.4218 35.5078" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </div>

            <div class="home-hero-sec__text-wrapper">

              <p class="home-hero-sec__text" 
              v-html="pageData[0].acf.sekcziya_1_hero.podzagolovok"
              v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  delay: 0.3,
                  duration: 0.5,
            
                }'
              ></p>

              <div class="home-hero-sec__btn-row" 
              v-if="pageData[0].acf.sekcziya_1_hero.tekst_knopki"
               v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  delay: 0.4,
                  duration: 0.5,
                  start: "top 99%"
            
                }'>
              
                <NuxtLink to="/autopark" class="home-hero-sec__btn btnV1 btnV1--blick">
                  <span class="btnV1__circle btnV1__circle-1"></span>
                  <span class="btnV1__circle btnV1__circle-2"></span>
                  <span class="btnV1__title">{{ pageData[0].acf.sekcziya_1_hero.tekst_knopki }}</span>

                  <div class="btnV1__line btnV1__line-1"></div>
                  <div class="btnV1__line btnV1__line-2"></div>
                  <div class="btnV1__line btnV1__line-3"></div>
                  <div class="btnV1__line btnV1__line-4"></div>
                </NuxtLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="home-category-sec"  v-if="pageData[0].acf.sekcziya_2_kategorii.zagolovok" >
        <div class="container">
          <div class="header-row-sec">
            <h2
             v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              start: "top 99%",
            }' 
            class="home-category-sec__title sec-title sec-title--left-mod" 
            v-html="pageData[0].acf.sekcziya_2_kategorii.zagolovok"></h2>

            <NuxtLink
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0.2,
              start: "top 99%",
            }' 
            to="/autopark" 
            class="home-hero-sec__btn btnV1 btnV1--big btnV1--blick">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">ПЕРЕЙТИ В КАТАЛОГ</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </NuxtLink>
          </div>

          <div class="home-news-sec__slider-row" 
          v-if="carsCategoryes?.length > 0"
          v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0.2,
              start: "top 99%",
            }' 
            >
           <ClientOnly>
              <swiper-container 
              ref="catRefSlider" 
              class="home-cat-slider-swiper">
                  <swiper-slide 
                  class="swipe-home-cat" v-for="(item, index) in carsCategoryes">
                     <NuxtLink 
                     :to="`/autopark?id=${item.id}`" 
                     class="swipe-home-cat__wrapper" >
                      <div  class="swipe-home-cat__img-wprapper">
                        <img v-if="item.acf.izobrazhenie_kategorii.sizes?.medium"
                        :src="item.acf.izobrazhenie_kategorii.sizes.medium" 
                        :alt="item.acf.izobrazhenie_kategorii.alt" 
                        class="swipe-home-cat__img">

                        <img v-else
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

              <div class="home-news-sec__slider-row-control-wrapper">

                <div 
                class="home-cat-slider-swiper-button-prev swiper-def-ar swiper-def-ar--prev swiper-button" 
                @click="catRefSliderGallery.prev()"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.5,
                  delay: 0.3,
                  start: "top 70%",
                }'
                >
                    <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
                    </svg>

                    <div class="swiper-def-ar__circle"></div>
                </div>

                <!-- <div class="slider-counter"
                  v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.5,
                  start: "top 70%",
                }' >
                  <span class="slider-counter__current">{{ getRealIndex(catRefSliderGallery.realIndex) }}</span>
                  <span class="slider-counter__total">/{{ getTotalSlides(catRefSliderGallery.slides) }}</span>
          
                </div> -->
               
                <div 
                class="home-cat-slider-swiper-button-next swiper-def-ar swiper-def-ar--next swiper-button" 
                @click="catRefSliderGallery.next()"
                v-gsap.whenVisible.once.from='{
                autoAlpha: 0,
                y: 100,
                duration: 0.5,
                start: "top 70%",
                }' >
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

            <h2 
            class="header-row-sec__title sec-title sec-title--left-mod"
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0,
              start: "top 70%",
            }' 
            v-html="pageData[0].acf.sekcziya_3_populyarnye_modeli.zagolovok"></h2>

            <NuxtLink
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0.2,
              start: "top 70%",
            }' 
            to="/autopark" 
            class="home-hero-sec__btn btnV1 btnV1--big btnV1--blick">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">CМОТРЕТЬ ВСЕ АВТО</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </NuxtLink>
          </div>

          <div class="header-row-sec__cars-wrapper cars-wrapper-rv" >
            
            <template v-if="recomendCars?.length > 0" >

                <carCard v-for="(item, index) in recomendCars" :key="index" :carData="item" :allCats="carsCategoryes" v-gsap.preset="'stagger-up-800'" />

                <!-- <template v-for="(item, index) in recomendCars" :key="index">
                  <carCard  v-if="index % 2 === 0" :carData="item" :allCats="carsCategoryes" v-gsap.preset="'stagger-left-800'" />
                  <carCard  v-else :carData="item" :allCats="carsCategoryes" v-gsap.preset="'stagger-right-800'" />
                </template> -->

            </template>

            <NuxtLink
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0.2,
              start: "top 70%",
            }' 
            to="/autopark" 
            class="home-hero-sec__btn btnV1 btnV1--big home-cars-sec__btn-all-cars-mob btnV1--blick">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">CМОТРЕТЬ ВСЕ АВТО</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </NuxtLink>
            
          </div>
        </div>
      </section>

      <section class="home-our-client-sec" v-if="pageData[0].acf.sekcziya_4_nashi_klienty.zagolovok">
        <div class="container">
          <div class="header-row-sec-v2">

            <div 
            class="header-row-sec-v2__decor-wrapper"
             v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0,
              start: "top 70%",
            }' >
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
            
            <h2 
            class="home-our-client-sec__title sec-title sec-title--center-mod"
             v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0,
              start: "top 70%",
            }'  
            v-html="pageData[0].acf.sekcziya_4_nashi_klienty.zagolovok"></h2>
          </div>

          <div class="home-our-client-sec__slider-wrapper" v-if="pageData[0].acf.sekcziya_4_nashi_klienty.klienty?.length > 0">
            <ClientOnly>
              <swiper-container 
              ref="ourClientsSlider" 
              class="our-client-slider"
              >
                  <swiper-slide 
                  class="our-client-slider__slide" 
                  v-for="(item, index) in pageData[0].acf.sekcziya_4_nashi_klienty.klienty"
                  v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 200,
                    duration: 0.8,
                    delay: (0.1 * (+index + 1)),
                    start: "top 70%",
                  }' 
                  >
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

                

                <div 
                class="home-cat-slider-swiper-button-prev swiper-def-ar swiper-def-ar--prev swiper-button" 
                @click="swiperClients.prev()"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.5,
                  delay: 0.3,
                  start: "top 70%",
                }'
                >
                    <svg width="153" height="15" viewBox="0 0 153 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152.71 8.07039C153.101 7.67986 153.101 7.0467 152.71 6.65617L146.346 0.292213C145.956 -0.0983109 145.323 -0.0983109 144.932 0.292213C144.542 0.682738 144.542 1.3159 144.932 1.70643L150.589 7.36328L144.932 13.0201C144.542 13.4107 144.542 14.0438 144.932 14.4343C145.323 14.8249 145.956 14.8249 146.346 14.4343L152.71 8.07039ZM0 7.36328V8.36328H152.003V7.36328V6.36328H0V7.36328Z" fill="#F1BD81"/>
                    </svg>

                    <div class="swiper-def-ar__circle"></div>
                </div>

                <!-- <div class="slider-counter" 
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.5,
                  delay: 0,
                  start: "top 70%",
                }'>
                  <span class="slider-counter__current">{{ getRealIndex(swiperClients.realIndex) }}</span>
                  <span class="slider-counter__total">/{{ getTotalSlides(swiperClients.slides) }}</span>
          
                </div> -->
               
                <div 
                class="home-cat-slider-swiper-button-next swiper-def-ar swiper-def-ar--next swiper-button" 
                @click="swiperClients.next()"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.5,
                  delay: 0.3,
                  start: "top 70%",
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

      <section class="clients-about-us" v-if="pageData[0].acf.sekcziya_5_otzyvy.zagolovok">
        <div class="container">
          <div class="header-row-sec-v2">

            <div 
            class="header-row-sec-v2__decor-wrapper"
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0,
              start: "top 70%",
            }'>
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
            
            <h2 
            class="clients-about-us__title sec-title sec-title--center-mod" 
            v-html="pageData[0].acf.sekcziya_5_otzyvy.zagolovok"
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0,
              start: "top 70%",
            }'></h2>
          </div>

          <reviewSlider :sliderData="pageData[0].acf.sekcziya_5_otzyvy.otzyvy" />

        </div>
      </section>

      <section class="home-about-sec" v-if="pageData[0].acf.sekcziya_6_o_kompanii.zagolovok">
        <div class="container">
          <div class="home-about-sec__info">
            <div 
            class="header-row-sec-v2__decor-wrapper"
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0,
              start: "top 70%",
            }'>
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
             <h2 
             class="clients-about-us__title sec-title sec-title--left-mod" 
             v-html="pageData[0].acf.sekcziya_6_o_kompanii.zagolovok"
             v-gsap.whenVisible.once.from='{
                autoAlpha: 0,
                y: 100,
                duration: 0.5,
                delay: 0,
                start: "top 70%",
              }'></h2>
             <div class="home-about-sec__adv-wrapper">

              <div class="home-about-sec__adv adv-element" 
              v-for="(item,index) in pageData[0].acf.sekcziya_6_o_kompanii.tezisy"
              v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.5,
                  delay: 0,
                  start: "top 70%",
                }'>
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
                 v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.5,
                  delay: 0,
                  start: "top 70%",
                }'
                :src="item.kartinka.sizes.medium_large" 
                :alt="item.kartinka.alt" class="home-about-sec__images-element">

              </div>
              
              <div class="home-about-sec__images-claster-col home-about-sec__images-claster-col--right">
                 <img v-for="item in pageData[0].acf.sekcziya_6_o_kompanii.izobrazheniya.slice(2,4)"
                 v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.5,
                  delay: 0.2,
                  start: "top 70%",
                }' 
                :src="item.kartinka.sizes.medium_large" 
                :alt="item.kartinka.alt" class="home-about-sec__images-element">

              </div>

            </div>

            <div class="home-about-sec__images-contacts-row"
            
            v-gsap.whenVisible.once.from='{
                autoAlpha: 0,
                y: 100,
                duration: 0.5,
                delay: 0,
                start: "top 70%",
              }'
              >

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
            <div 
            class="header-row-sec-v2__decor-wrapper header-row-sec-v2__decor-wrapper--mob"
             v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0,
              start: "top 70%",
            }' >
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
            <h2 class="header-row-sec__title sec-title sec-title--left-mod" 
            v-html="pageData[0].acf.sekcziya_7_chastye_voprosy.zagolovok"
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0,
              start: "top 70%",
            }'
            ></h2>

            <button class="home-hero-sec__btn btnV1 btnV1--big btnV1--blick" 
            @click="openTargetPopupForm()"
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0.3,
              start: "top 70%",
            }'>
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
              <faqElement :title="item.vopros" :counter="+index+1" :description="item.otvet" v-gsap.preset="'stagger-up'"/>
            </template>

          </div>

          <button
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0.2,
              start: "top 70%",
            }' 
            @click="openTargetPopupForm()"
            class="home-hero-sec__btn btnV1 btnV1--big home-faq-sec__btn-mob btnV1--blick">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">ЗАДАТЬ СВОЙ ВОПРОС</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </button>
        </div>
      </section>

      <formSec :formSecData="store.optionsData" />

      <section class="home-seo-sec seo-sec-type-1" v-if="pageData[0].acf.sekcziya_10_seo_blok.zagolovok_h1">
        <div class="container">
          <div class="seo-sec-type-1__data">
             <h1 
             class="seo-sec-type-1__title sec-title sec-title--left-mod" 
             v-html="pageData[0].acf.sekcziya_10_seo_blok.zagolovok_h1"
             v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 50,
              duration: 0.5,
              delay: 0,
              start: "top 70%",
              }'
              ></h1>

             <div class="seo-sec-type-1__text-container" 
              v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              delay: 0,
              start: "top 70%",
              }'>
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
            <img v-for="(item,index) in pageData[0].acf.sekcziya_10_seo_blok.izobrazheniya"
            :src="item.kartirka.sizes.medium_large" 
            :alt="item.kartirka.alt" 
            v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 200,
              duration: 1,
              delay: (0.2 * (+index + 1)),
              start: "top 70%",
            }'
            
            class="seo-sec-type-1__img">
          </div>
        </div>
      </section>

    </main>
    
</template>

<script setup>

//IMPORT

import { ref, onMounted } from 'vue';

import carCard from '@/components/carCard.vue'

import faqElement from '@/components/faqElement.vue'

import formSec from '@/components/sections/formSec.vue'

import reviewSlider from '@/components/sections/reviewsSlider.vue'

import { useCounterStore } from '@/stores/counter'

import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const route = useRoute()



//DATA

const recomendCars = ref(null)

const { data: pageData } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=glavnaya&_fields=id,name,acf,slug,title`
);

console.log('pageData', pageData)

// Ждём, пока данные загружены и есть что брать
const categoriesIds = pageData.value?.[0]?.acf?.sekcziya_2_kategorii?.kategorii || [];

const urlCat = `/wp-json/wp/v2/categories-cars?include=${categoriesIds.join(',')}&_fields=id,name,acf,slug`;

const { data: carsCategoryes } = await useFetch(
  `${store.serverUrlDomainRequest}${urlCat}`
);

console.log('carsCategoryes', carsCategoryes)


if(pageData?.value?.length > 0 && pageData.value[0].acf?.sekcziya_3_populyarnye_modeli?.modeli?.length >0){

// получаем рекомендованные посты
try {
  const mainPost = pageData.value?.[0]
  const chitatTakzhe = mainPost?.acf?.sekcziya_3_populyarnye_modeli?.modeli

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/cars?slug=${slug}&_fields=id,name,acf,slug`)
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




const catRefSlider = ref(null)

const ourClientsSlider = ref(null)



const editor = ref(null)

const wrapper = ref(null)

const showReadMore = ref(false)

const expanded = ref(false)

const textHeight = ref(0)



//METHODS

//categoryes gallery
const  catRefSliderGallery  = useSwiper(catRefSlider, {
   loop: false,
   slidesPerView: 4,
   spaceBetween: 30,   
   speed: 600,
   freeMode: {
    enabled: true,
    sticky: true,
  },
   slidesPerView: "auto",
   scrollbar:{ draggable: true },
  //  centeredSlides: 'auto',
   breakpoints: {
    100: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false,
      speed: 300,
      
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false,
      speed: 600,
    },
    1380: {
       slidesPerView: 4,
      spaceBetween: 30,
      loop: false,
      speed: 600,
    },
  },

})


//clients gallery
const  swiperClients  = useSwiper(ourClientsSlider, {
   loop: false,
   slidesPerView: 4,
   spaceBetween: 30,   
   speed: 800,
   freeMode: {
    enabled: true,
    sticky: true,
  },

  
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
    1500: {
       slidesPerView: 4,
      spaceBetween: 30,
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

const toggleReadMore = () => {
  expanded.value = !expanded.value
}



//Open form popup
const openTargetPopupForm = ()=>{
  store.changePopupCurrent('popup-form')
  store.changeTrigerButtonForm('Секция вопрос - ответ | Кнопка "Задать вопрос"')
}



//open video popup
const openTargetPopupVider = (data) =>{
  let payloadData = data.url
    store.changePopupCurrent('popup-video',payloadData)
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


  setTimeout(()=>{
    store.changeRouterChangeStatus(false)
  },200)


})



//SEO
useHead({
    title: pageData.value[0].acf.seo_title || pageData.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: pageData.value[0].acf.seo_description || 'Luxury rental moskow' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: pageData.value[0].acf.klyuchevaya_fraza || 'Rent car' },

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

