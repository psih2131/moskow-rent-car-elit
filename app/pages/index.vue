<template>
    <main class="main">
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

      <section class="home-category-sec">
        <div class="container">
          <div class="header-row-sec">
            <h2 class="home-category-sec__title sec-title sec-title--left-mod"><b>КАТЕГОРИИ </b> АВТОМОБИЛЕЙ</h2>

            <button class="home-hero-sec__btn btnV1 btnV1--big">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">ПЕРЕЙТИ В КАТАЛОГ</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </button>
          </div>

          <div class="home-news-sec__slider-row">
           <ClientOnly>
              <swiper-container 
              ref="catRefSlider" 
              @swiperslidechange="onSlideChange"
              class="home-cat-slider-swiper"
       
              >

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
                        <img src="@/assets/images/img/cat4.png" alt="" class="swipe-home-cat__img">
                      </div>
                      <div class="swipe-home-cat__title-row">
                        <p class="swipe-home-cat__title">Внедорожник</p>
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

      <section class="home-cars-sec"> 
        <div class="container">
          <div class="header-row-sec">
            <h2 class="header-row-sec__title sec-title sec-title--left-mod"><b>ПОПУЛЯРНЫЕ </b> МОДЕЛИ</h2>

            <button class="home-hero-sec__btn btnV1 btnV1--big">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">CМОТРЕТЬ ВСЕ АВТО</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </button>
          </div>

          <div class="header-row-sec__cars-wrapper">
            
            <carCard/>

            <carCard/>

            <carCard/>
            
          </div>
        </div>
      </section>

      <section class="home-our-client-sec">
        <div class="container">
          <div class="header-row-sec-v2">

            <div class="header-row-sec-v2__decor-wrapper">
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
            
            <h2 class="home-our-client-sec__title sec-title sec-title--center-mod"><b>НАШИ </b> КЛИЕНТЫ</h2>
          </div>

          <div class="home-our-client-sec__slider-wrapper">
            <ClientOnly>
              <swiper-container 
              ref="ourClientsSlider" 
              class="our-client-slider"
              >
                  <swiper-slide class="our-client-slider__slide" >
                    <div class="our-client-slider__slide-wrapper">
                      <img src="@/assets/images/img/cl1.jpg" alt="" class="our-client-slider__slide-img">
                      <div class="our-client-slider__slide-data">
                        <p class="our-client-slider__slide-name">Wylsacom</p>
                        <p class="our-client-slider__slide-description">Видеоблогер. Создатель и владелец одноимённого YouTube-канала «Wylsacom», с аудиторией более 10 миллионов подписчиков.</p>
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="our-client-slider__slide" >
                    <div class="our-client-slider__slide-wrapper">
                      <img src="@/assets/images/img/cl2.jpg" alt="" class="our-client-slider__slide-img">
                      <div class="our-client-slider__slide-data">
                        <p class="our-client-slider__slide-name">Wylsacom</p>
                        <p class="our-client-slider__slide-description">Видеоблогер. Создатель и владелец одноимённого YouTube-канала «Wylsacom», с аудиторией более 10 миллионов подписчиков.</p>
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="our-client-slider__slide" >
                    <div class="our-client-slider__slide-wrapper">
                      <img src="@/assets/images/img/cl3.jpg" alt="" class="our-client-slider__slide-img">
                      <div class="our-client-slider__slide-data">
                        <p class="our-client-slider__slide-name">Wylsacom</p>
                        <p class="our-client-slider__slide-description">Видеоблогер. Создатель и владелец одноимённого YouTube-канала «Wylsacom», с аудиторией более 10 миллионов подписчиков.</p>
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="our-client-slider__slide" >
                    <div class="our-client-slider__slide-wrapper">
                      <img src="@/assets/images/img/cl4.jpg" alt="" class="our-client-slider__slide-img">
                      <div class="our-client-slider__slide-data">
                        <p class="our-client-slider__slide-name">Wylsacom</p>
                        <p class="our-client-slider__slide-description">Видеоблогер. Создатель и владелец одноимённого YouTube-канала «Wylsacom», с аудиторией более 10 миллионов подписчиков.</p>
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="our-client-slider__slide" >
                    <div class="our-client-slider__slide-wrapper">
                      <img src="@/assets/images/img/cl2.jpg" alt="" class="our-client-slider__slide-img">
                      <div class="our-client-slider__slide-data">
                        <p class="our-client-slider__slide-name">Wylsacom</p>
                        <p class="our-client-slider__slide-description">Видеоблогер. Создатель и владелец одноимённого YouTube-канала «Wylsacom», с аудиторией более 10 миллионов подписчиков.</p>
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

      <section class="clients-about-us">
        <div class="container">
          <div class="header-row-sec-v2">

            <div class="header-row-sec-v2__decor-wrapper">
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
            
            <h2 class="clients-about-us__title sec-title sec-title--center-mod"><b>КЛИЕНТЫ </b> О НАШЕЙ РАБОТЕ</h2>
          </div>

          <div class="clients-about-us__slider-wrapper">
            <ClientOnly>
              <swiper-container 
              ref="clientsAboutUsSlider" 
              class="clients-about-us-slider"
              >
                  <swiper-slide class="clients-about-us-slider__slide" >
                    <div class="clients-about-us-slider__slide-wrapper">
                      <img src="@/assets/images/img/rv1.jpg" alt="" class="clients-about-us-slider__slide-photo">
                      <div class="clients-about-us-slider__slide-data">
                        <div class="clients-about-us-slider__slide-text-wrapper">
                          <p class="clients-about-us-slider__slide-text">
                            Делюсь опытом аренды машины. Долго выбирала, где можно взять автомобиль в определенной комплектации. Нужна была BMW x4 M40i. Обратилась в эту компанию и осталась довольна. Машину предоставили оперативно, условия по аренде объяснили детально. Условия по приемке автомобиля также выполнены чётко
                          </p>
                        </div>
                        <div class="clients-about-us-slider__slide-read-more-btn">
                          <span>читать полностью</span>
                          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.23013 0.21967C0.536971 -0.0732233 1.03446 -0.0732233 1.3413 0.21967L5.5 4.18934L9.6587 0.21967C9.96554 -0.0732233 10.463 -0.0732233 10.7699 0.21967C11.0767 0.512563 11.0767 0.987437 10.7699 1.28033L6.05558 5.78033C5.74874 6.07322 5.25126 6.07322 4.94442 5.78033L0.23013 1.28033C-0.0767101 0.987437 -0.0767101 0.512563 0.23013 0.21967Z" fill="#707070"/>
                          </svg>

                        </div>
                      </div>

                      <div class="clients-about-us-slider__slide-client-data">
                        <p class="clients-about-us-slider__slide-client-name">Елена Бабинцева</p>
                        <p class="clients-about-us-slider__slide-client-description">Rolls Royce Phantom </p>

                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="clients-about-us-slider__slide" >
                    <div class="clients-about-us-slider__slide-wrapper">
                      <img src="@/assets/images/img/rv2.jpg" alt="" class="clients-about-us-slider__slide-photo">
                      <div class="clients-about-us-slider__slide-data">
                        <div class="clients-about-us-slider__slide-text-wrapper">
                          <p class="clients-about-us-slider__slide-text">
                            Делюсь опытом аренды машины. Долго выбирала, где можно взять автомобиль в определенной комплектации. Нужна была BMW x4 M40i. Обратилась в эту компанию и осталась довольна. Машину предоставили оперативно, условия по аренде объяснили детально. Условия по приемке автомобиля также выполнены чётко
                          </p>
                        </div>
                        <div class="clients-about-us-slider__slide-read-more-btn">
                          <span>читать полностью</span>
                          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.23013 0.21967C0.536971 -0.0732233 1.03446 -0.0732233 1.3413 0.21967L5.5 4.18934L9.6587 0.21967C9.96554 -0.0732233 10.463 -0.0732233 10.7699 0.21967C11.0767 0.512563 11.0767 0.987437 10.7699 1.28033L6.05558 5.78033C5.74874 6.07322 5.25126 6.07322 4.94442 5.78033L0.23013 1.28033C-0.0767101 0.987437 -0.0767101 0.512563 0.23013 0.21967Z" fill="#707070"/>
                          </svg>

                        </div>
                      </div>

                      <div class="clients-about-us-slider__slide-client-data">
                        <p class="clients-about-us-slider__slide-client-name">Елена Бабинцева</p>
                        <p class="clients-about-us-slider__slide-client-description">Rolls Royce Phantom </p>

                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="clients-about-us-slider__slide" >
                    <div class="clients-about-us-slider__slide-wrapper">
                      <img src="@/assets/images/img/cl2.jpg" alt="" class="clients-about-us-slider__slide-photo">
                      <div class="clients-about-us-slider__slide-data">
                        <div class="clients-about-us-slider__slide-text-wrapper">
                          <p class="clients-about-us-slider__slide-text">
                            Делюсь опытом аренды машины. Долго выбирала, где можно взять автомобиль в определенной комплектации. Нужна была BMW x4 M40i. Обратилась в эту компанию и осталась довольна. Машину предоставили оперативно, условия по аренде объяснили детально. Условия по приемке автомобиля также выполнены чётко
                          </p>
                        </div>
                        <div class="clients-about-us-slider__slide-read-more-btn">
                          <span>читать полностью</span>
                          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.23013 0.21967C0.536971 -0.0732233 1.03446 -0.0732233 1.3413 0.21967L5.5 4.18934L9.6587 0.21967C9.96554 -0.0732233 10.463 -0.0732233 10.7699 0.21967C11.0767 0.512563 11.0767 0.987437 10.7699 1.28033L6.05558 5.78033C5.74874 6.07322 5.25126 6.07322 4.94442 5.78033L0.23013 1.28033C-0.0767101 0.987437 -0.0767101 0.512563 0.23013 0.21967Z" fill="#707070"/>
                          </svg>

                        </div>
                      </div>

                      <div class="clients-about-us-slider__slide-client-data">
                        <p class="clients-about-us-slider__slide-client-name">Елена Бабинцева</p>
                        <p class="clients-about-us-slider__slide-client-description">Rolls Royce Phantom </p>

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

      <section class="home-about-sec">
        <div class="container">
          <div class="home-about-sec__info">
             <h2 class="clients-about-us__title sec-title sec-title--left-mod"><b>ФИЛОСОФИЯ </b> НАШЕЙ КОМПАНИИ</h2>
             <div class="home-about-sec__adv-wrapper">

              <div class="home-about-sec__adv adv-element">
                <div class="adv-element__icon-wrapper">
                  <div class="adv-element__icon-wrapper-contaier">
                  <img src="@/assets/images/img/ad1.svg" alt="" class="adv-element__icon">
                  </div>
                </div>
                <div class="adv-element__data">
                  <p class="adv-element__title">КОМФОРТ</p>
                  <p class="adv-element__subtitle">Мы создаём сервис, в котором каждый момент продуман до совершенства — от идеального состояния автомобилей до безупречного обслуживания</p>
                </div>
              </div>

              <div class="home-about-sec__adv adv-element">
                <div class="adv-element__icon-wrapper">
                  <div class="adv-element__icon-wrapper-contaier">
                  <img src="@/assets/images/img/ad2.svg" alt="" class="adv-element__icon">
                  </div>
                </div>
                <div class="adv-element__data">
                  <p class="adv-element__title">ПОДГОТОВКА</p>
                  <p class="adv-element__subtitle">от идеального состояния автомобилей до безупречного обслуживания. Наши клиенты выбирают не просто аренду, а опыт, где каждый выезд</p>
                </div>
              </div>

              <div class="home-about-sec__adv adv-element">
                <div class="adv-element__icon-wrapper">
                  <div class="adv-element__icon-wrapper-contaier">
                  <img src="@/assets/images/img/ad3.svg" alt="" class="adv-element__icon">
                  </div>
                </div>
                <div class="adv-element__data">
                  <p class="adv-element__title">СТРАХОВКА</p>
                  <p class="adv-element__subtitle">Мы стремимся превзойти ожидания, чтобы каждая поездка стала отражением вашего статуса и вкуса.</p>
                </div>
              </div>

              <div class="home-about-sec__adv adv-element">
                <div class="adv-element__icon-wrapper">
                  <div class="adv-element__icon-wrapper-contaier">
                  <img src="@/assets/images/img/ad4.svg" alt="" class="adv-element__icon">
                  </div>
                </div>
                <div class="adv-element__data">
                  <p class="adv-element__title">БЕЗОПАСНОСТЬ</p>
                  <p class="adv-element__subtitle">Мы создаём сервис, в котором каждый момент продуман до совершенства — от идеального состояния автомобилей до безупречного обслуживания</p>
                </div>
              </div>

             </div>
          </div>
          <div class="home-about-sec__images">
            <div class="home-about-sec__images-claster">

              <div class="home-about-sec__images-claster-col  home-about-sec__images-claster-col--left">
                <img src="@/assets/images/img/ab1.jpg" alt="" class="home-about-sec__images-element">
                <img src="@/assets/images/img/ab3.jpg" alt="" class="home-about-sec__images-element">
              </div>
              
              <div class="home-about-sec__images-claster-col home-about-sec__images-claster-col--right">
                <img src="@/assets/images/img/ab2.jpg" alt="" class="home-about-sec__images-element">
                <img src="@/assets/images/img/ab4.jpg" alt="" class="home-about-sec__images-element">
              </div>

            </div>

            <div class="home-about-sec__images-contacts-row">
              <a href="" class="home-about-sec__images-contact-element">+370(633)-78-041</a>
              <a href="" class="home-about-sec__images-contact-element">redAngels@yandex.com</a>
              <div class="home-about-sec__images-social-row">
                <a href="" class="contact-link">
                    <div class="contact-link__wrapper">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_669_336)">
                        <path d="M9.39453 0C14.583 0 18.789 4.20606 18.7891 9.39453C18.7891 14.5831 14.5831 18.7891 9.39453 18.7891C4.20606 18.789 0 14.583 0 9.39453C0.000111324 4.20612 4.20612 0.000111327 9.39453 0ZM13.2363 5.65527C12.883 5.6615 12.3404 5.85038 9.73145 6.93555C8.81768 7.31561 6.99161 8.1027 4.25293 9.2959C3.80829 9.47272 3.575 9.64531 3.55371 9.81445C3.51299 10.1393 3.98099 10.2404 4.56934 10.4316C5.04898 10.5875 5.69394 10.7701 6.0293 10.7773C6.33347 10.7839 6.67306 10.6587 7.04785 10.4014C9.60437 8.67565 10.9256 7.80263 11.0107 7.78223C11.0692 7.76895 11.1501 7.75205 11.2051 7.80078C11.26 7.84961 11.2548 7.94199 11.249 7.9668C11.2016 8.16588 8.79847 10.3515 8.66016 10.4951C8.1316 11.0441 7.53072 11.3801 8.45801 11.9912C9.26057 12.5201 9.72791 12.8575 10.5547 13.3994C11.0831 13.7458 11.4974 14.1566 12.043 14.1064C12.294 14.0833 12.5529 13.8474 12.6846 13.1436C12.9958 11.4797 13.6076 7.8742 13.749 6.38867C13.7613 6.25869 13.7459 6.09267 13.7334 6.01953C13.7209 5.94641 13.6947 5.84177 13.5996 5.76465C13.4872 5.6737 13.3142 5.65398 13.2363 5.65527Z" fill="#F1BD81"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_669_336">
                        <rect width="18.7895" height="18.7895" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                </a>

                <a href="" class="contact-link">
                    <div class="contact-link__wrapper">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_669_342)">
                        <path d="M15.6043 3.15029C14.0248 1.5708 11.8429 0.59375 9.43255 0.59375C4.61247 0.59375 0.704256 4.50137 0.704256 9.32205C0.704256 10.9262 1.137 12.4288 1.89152 13.7205L1.8692 13.6794L0.630859 18.2018L5.25718 16.9882C6.46147 17.6569 7.89828 18.0503 9.42727 18.0503H9.43079C14.2509 18.0486 18.1573 14.1404 18.1573 9.32029C18.1573 6.91112 17.1814 4.73037 15.6037 3.15088L15.6043 3.15029ZM9.43079 16.576H9.42786C8.06621 16.576 6.79146 16.2002 5.70343 15.5466L5.73631 15.5649L5.4715 15.4081L2.72647 16.1285L3.45868 13.4516L3.28605 13.1774C2.59025 12.0841 2.17688 10.7518 2.17688 9.32264C2.17688 5.31695 5.42452 2.06931 9.43021 2.06931C13.4359 2.06931 16.6835 5.31695 16.6835 9.32264C16.6835 13.3283 13.4371 16.576 9.43079 16.576ZM13.4095 11.144C13.1916 11.0348 12.1194 10.5081 11.9198 10.4347C11.7196 10.3619 11.574 10.3261 11.4283 10.5445C11.2839 10.7624 10.8658 11.2533 10.7384 11.3989C10.6116 11.5451 10.4836 11.5627 10.2657 11.4541C9.5905 11.1804 9.01038 10.8158 8.506 10.3666L8.51187 10.3719C8.04272 9.9374 7.64051 9.44007 7.3158 8.89165L7.29936 8.86112C7.17253 8.64328 7.28586 8.52526 7.39448 8.41663C7.49254 8.31916 7.61291 8.1618 7.72154 8.03497C7.80726 7.92987 7.88066 7.8095 7.93644 7.68032L7.93996 7.67034C7.96521 7.61925 7.97989 7.55995 7.97989 7.49653C7.97989 7.41961 7.95817 7.34798 7.92059 7.28691L7.92176 7.28867C7.86657 7.17946 7.43089 6.10611 7.24945 5.66926C7.07213 5.24414 6.89186 5.30227 6.75858 5.29523C6.63175 5.28936 6.48613 5.28818 6.34051 5.28818C6.10858 5.29405 5.90248 5.39857 5.76039 5.56004L5.7598 5.56122C5.28889 6.00805 4.99648 6.63809 4.99648 7.33624C4.99648 7.3515 4.99648 7.36736 4.99706 7.38262V7.38027C5.07398 8.24165 5.39693 9.01496 5.89367 9.64499L5.88663 9.63618C6.82845 11.0331 8.08382 12.1505 9.55703 12.9032L9.61223 12.9285C9.934 13.0741 10.3462 13.2297 10.7678 13.363L10.8553 13.387C11.1148 13.4692 11.4137 13.5168 11.7237 13.5168C11.9016 13.5168 12.0766 13.5009 12.2457 13.471L12.2275 13.4733C12.8552 13.3424 13.376 12.9637 13.6937 12.4464L13.6989 12.4364C13.7958 12.2215 13.8522 11.9708 13.8522 11.7071C13.8522 11.5985 13.8428 11.4922 13.8246 11.3889L13.8264 11.4C13.7723 11.309 13.6267 11.255 13.4083 11.1452L13.4095 11.144Z" fill="#F1BD81"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_669_342">
                        <rect width="18.7895" height="18.7895" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="home-faq-sec">
        <div class="container">
          <div class="header-row-sec">
            <h2 class="header-row-sec__title sec-title sec-title--left-mod"><b>САМЫЕ </b> ЧАСТЫЕ ВОПРОСЫ</h2>

            <button class="home-hero-sec__btn btnV1 btnV1--big">
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

            <faqElement :title="'Нужен ли для аренды страховой депозит?'" :counter="'01'"/>

            <faqElement :title="'Где я могу эксплуатировать автомобиль?'" :counter="'02'"/>
            
            <faqElement :title="'Возможно ли оформить дополнительного водителя?'" :counter="'03'"/>
            
            <faqElement :title="'Как можно получить скидку на аренду автомобиля?'" :counter="'04'"/>

          </div>
        </div>
      </section>

      <formSec />


      <section class="home-seo-sec seo-sec-type-1">
        <div class="container">
          <div class="seo-sec-type-1__data">
             <h1 class="seo-sec-type-1__title sec-title sec-title--left-mod"><b>СЕО</b> ЗАГОЛОВОК ДЛЯ ГЛАВНОЙ</h1>

             <div class="seo-sec-type-1__text-container">
              <div
                class="seo-sec-type-1__text-wrapper"
                :style="{ maxHeight: expanded ? `${textHeight}px` : '215px', overflow: 'hidden',  }"
                ref="wrapper"
              >
                <div class="wp-editor seo-sec-type-1__editor" ref="editor">
                  <p><b>Мерседес</b> всегда был эталоном автомобилей класса премиум, а Мерседес Гелендваген особенно. Сила, мощь, агрессивный дизайн, черный цвет, грубые, но притягивающие черты, мощность в 571 л.с. и <b>разгон до 100 км за 5,4 секунды</b> – все это Гелендваген (или Гелик, как чаще всего его называют), чем все сказано. Любой праздник превратится в яркое событие, если вы возьмете в аренду Мерседес в Москве. Забудьте о серых и невзрачных праздниках без задора.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo ratione a adipisci reiciendis iste magni quasi ut sed accusantium est quam velit modi quaerat, unde hic consequuntur at libero.</p>
                
                </div>
              </div>

              <div
                v-if="showReadMore"
                class="seo-sec-type-1__read-more"
                :class="{'active': expanded}"
                @click="toggleReadMore"
              >
                <span class="seo-sec-type-1__read-more-text">
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
            <img src="@/assets/images/img/seo1.jpg" alt="" class="seo-sec-type-1__img">
            <img src="@/assets/images/img/seo2.jpg" alt="" class="seo-sec-type-1__img">
          </div>
        </div>
      </section>

    </main>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

// import productCard from '@/components/component__producr-card.vue'
import carCard from '@/components/carCard.vue'

import faqElement from '@/components/faqElement.vue'

import formSec from '@/components/sections/formSec.vue'





//DATA
// const store = useCounterStore()

// const route = useRoute()

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

</script>


<style >
/* swiper custom styles */

</style>
