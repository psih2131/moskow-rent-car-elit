<template>
    <section class="car-hero-sec">
        <div class="container">
            <div class="header-row-sec">
                <h2 class="car-hero-sec__title sec-title sec-title--left-mod"><b>ROLLS </b> ROYCE PHANTOM</h2>

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

          
        </div>

        <div class="car-hero-sec__slider-wrapper">

            <div class="car-hero-sec__slider-row">


           <ClientOnly>
              <swiper-container 
              ref="singleCarSlider" 
              class="single-car-swiper"
              >

                <swiper-slide class="single-car-swiper__slide" >
                    <div class="single-car-swiper__slide-wrapper">
                      <img src="@/assets/images/img/car1-v2.jpg" alt="" class="single-car-swiper__slide-img">

                      <div class="single-car-swiper__slide-zoom">
                        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.375 2.75391C22.6156 2.75391 22 3.37018 22 4.1304C22 4.89062 22.6156 5.5069 23.375 5.5069L25.5555 5.5069L19.6527 11.4161C19.1158 11.9536 19.1158 12.8252 19.6527 13.3627C20.1897 13.9003 21.0603 13.9003 21.5973 13.3627L27.5 7.45356L27.5 9.63639C27.5 10.3966 28.1156 11.0129 28.875 11.0129C29.6344 11.0129 30.25 10.3966 30.25 9.63639L30.25 4.1304C30.25 3.37018 29.6344 2.75391 28.875 2.75391H23.375ZM5.5 25.5842L5.5 23.4013C5.5 22.6411 4.88439 22.0248 4.125 22.0248C3.36561 22.0248 2.75 22.6411 2.75 23.4013L2.75 28.9073C2.75001 29.6676 3.36561 30.2838 4.125 30.2838H9.625C10.3844 30.2838 11 29.6676 11 28.9073C11 28.1471 10.3844 27.5308 9.625 27.5308H7.44454L13.3473 21.6217C13.8842 21.0841 13.8842 20.2126 13.3473 19.675C12.8103 19.1375 11.9397 19.1375 11.4027 19.675L5.5 25.5842Z" fill="#CFCFCF"/>
                        </svg>
                      </div>
                        
                    </div>
                </swiper-slide>

                <swiper-slide class="single-car-swiper__slide" >
                    <div class="single-car-swiper__slide-wrapper">
                        <img src="@/assets/images/img/single-car-1.jpg" alt="" class="single-car-swiper__slide-img">

                        <div class="home-hero-sec__play">
                          <div class="home-hero-sec__play-wrapper">
                          </div>
                          <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.875 23.5013V37.1452C5.875 41.6674 10.8381 44.526 14.8767 42.3297L21.1492 38.9187M5.875 15.668V9.8574C5.875 5.33517 10.8381 2.47667 14.8767 4.67287L39.9668 18.3168C44.1222 20.5765 44.1222 26.4261 39.9668 28.6858L27.4218 35.5078" stroke="white" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </div>

                        
                        <div class="single-car-swiper__slide-zoom">
                        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.375 2.75391C22.6156 2.75391 22 3.37018 22 4.1304C22 4.89062 22.6156 5.5069 23.375 5.5069L25.5555 5.5069L19.6527 11.4161C19.1158 11.9536 19.1158 12.8252 19.6527 13.3627C20.1897 13.9003 21.0603 13.9003 21.5973 13.3627L27.5 7.45356L27.5 9.63639C27.5 10.3966 28.1156 11.0129 28.875 11.0129C29.6344 11.0129 30.25 10.3966 30.25 9.63639L30.25 4.1304C30.25 3.37018 29.6344 2.75391 28.875 2.75391H23.375ZM5.5 25.5842L5.5 23.4013C5.5 22.6411 4.88439 22.0248 4.125 22.0248C3.36561 22.0248 2.75 22.6411 2.75 23.4013L2.75 28.9073C2.75001 29.6676 3.36561 30.2838 4.125 30.2838H9.625C10.3844 30.2838 11 29.6676 11 28.9073C11 28.1471 10.3844 27.5308 9.625 27.5308H7.44454L13.3473 21.6217C13.8842 21.0841 13.8842 20.2126 13.3473 19.675C12.8103 19.1375 11.9397 19.1375 11.4027 19.675L5.5 25.5842Z" fill="#CFCFCF"/>
                        </svg>
                      </div>

                    </div>
                </swiper-slide>

                <swiper-slide class="single-car-swiper__slide" >
                    <div class="single-car-swiper__slide-wrapper">
                        <img src="@/assets/images/img/car1-v3.jpg" alt="" class="single-car-swiper__slide-img">

                        <div class="single-car-swiper__slide-zoom">
                        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.375 2.75391C22.6156 2.75391 22 3.37018 22 4.1304C22 4.89062 22.6156 5.5069 23.375 5.5069L25.5555 5.5069L19.6527 11.4161C19.1158 11.9536 19.1158 12.8252 19.6527 13.3627C20.1897 13.9003 21.0603 13.9003 21.5973 13.3627L27.5 7.45356L27.5 9.63639C27.5 10.3966 28.1156 11.0129 28.875 11.0129C29.6344 11.0129 30.25 10.3966 30.25 9.63639L30.25 4.1304C30.25 3.37018 29.6344 2.75391 28.875 2.75391H23.375ZM5.5 25.5842L5.5 23.4013C5.5 22.6411 4.88439 22.0248 4.125 22.0248C3.36561 22.0248 2.75 22.6411 2.75 23.4013L2.75 28.9073C2.75001 29.6676 3.36561 30.2838 4.125 30.2838H9.625C10.3844 30.2838 11 29.6676 11 28.9073C11 28.1471 10.3844 27.5308 9.625 27.5308H7.44454L13.3473 21.6217C13.8842 21.0841 13.8842 20.2126 13.3473 19.675C12.8103 19.1375 11.9397 19.1375 11.4027 19.675L5.5 25.5842Z" fill="#CFCFCF"/>
                        </svg>
                      </div>

                    </div>
                </swiper-slide>

                <swiper-slide class="single-car-swiper__slide" >
                    <div class="single-car-swiper__slide-wrapper">
                        <img src="@/assets/images/img/car2.jpg" alt="" class="single-car-swiper__slide-img">

                        <div class="single-car-swiper__slide-zoom">
                        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.375 2.75391C22.6156 2.75391 22 3.37018 22 4.1304C22 4.89062 22.6156 5.5069 23.375 5.5069L25.5555 5.5069L19.6527 11.4161C19.1158 11.9536 19.1158 12.8252 19.6527 13.3627C20.1897 13.9003 21.0603 13.9003 21.5973 13.3627L27.5 7.45356L27.5 9.63639C27.5 10.3966 28.1156 11.0129 28.875 11.0129C29.6344 11.0129 30.25 10.3966 30.25 9.63639L30.25 4.1304C30.25 3.37018 29.6344 2.75391 28.875 2.75391H23.375ZM5.5 25.5842L5.5 23.4013C5.5 22.6411 4.88439 22.0248 4.125 22.0248C3.36561 22.0248 2.75 22.6411 2.75 23.4013L2.75 28.9073C2.75001 29.6676 3.36561 30.2838 4.125 30.2838H9.625C10.3844 30.2838 11 29.6676 11 28.9073C11 28.1471 10.3844 27.5308 9.625 27.5308H7.44454L13.3473 21.6217C13.8842 21.0841 13.8842 20.2126 13.3473 19.675C12.8103 19.1375 11.9397 19.1375 11.4027 19.675L5.5 25.5842Z" fill="#CFCFCF"/>
                        </svg>
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

              <div class="single-car-swiper-button single-car-swiper-button-prev " @click="swiperCarSingle.prev()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="white"/>
                </svg>
            </div>
              <div class="single-car-swiper-button single-car-swiper-button-next " @click="swiperCarSingle.next()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="white"/>
                </svg>
            </div>

          </div>


          </div>
    </section>


    <section class="car-char-sec">
      <div class="container">

        <div class="char-full">
          <div class="char-full__icon-wrapper">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.94791 8.23903H3.32039V4.62654H8.51502C7.16087 5.28225 5.92665 6.16104 4.86398 7.22612C4.54189 7.54825 4.23616 7.88631 3.94791 8.23903ZM27.969 2.72656C27.7658 2.72679 27.5709 2.80761 27.4272 2.9513C27.2835 3.095 27.2027 3.28982 27.2024 3.49304V9.37253C27.2042 9.57468 27.2857 9.76796 27.4293 9.91029C27.5728 10.0526 27.7668 10.1325 27.969 10.1325C28.1711 10.1325 28.3651 10.0526 28.5086 9.91029C28.6522 9.76796 28.7337 9.57468 28.7355 9.37253V3.49304C28.7352 3.2898 28.6544 3.09495 28.5107 2.95125C28.3669 2.80755 28.1721 2.72674 27.9688 2.72656H27.969ZM2.75505 5.27227H1.26172V7.59313H2.75511L2.75505 5.27227ZM17.2362 9.56463C18.656 10.1423 19.8716 11.1297 20.7279 12.4011C21.5842 13.6724 22.0425 15.17 22.0442 16.7028C22.0442 20.9506 18.5884 24.4064 14.3406 24.4064C10.0929 24.4064 6.6372 20.9506 6.6372 16.7028C6.6372 12.4551 10.093 8.99929 14.3407 8.99929H26.6368V3.86605H14.3407C7.26247 3.86611 1.50396 9.62461 1.50396 16.7028C1.50396 23.781 7.26247 29.5396 14.3407 29.5396C21.4189 29.5396 27.1775 23.781 27.1775 16.7028C27.1819 14.1606 26.427 11.675 25.0097 9.56463H17.2362ZM18.5683 14.95C18.2021 15.3136 17.7899 15.6277 17.3422 15.8843C17.3834 16.0353 17.413 16.1891 17.4308 16.3446C17.8036 16.4599 18.1915 16.5187 18.5817 16.5189H18.6107C19.5037 16.5122 20.3778 16.2609 21.138 15.7922L21.3986 15.6288C21.5097 16.3665 21.5053 17.1169 21.3856 17.8532C20.5122 18.2449 19.5665 18.4492 18.6094 18.4532H18.5714C18.0546 18.4515 17.5403 18.3821 17.0415 18.2468C16.9639 18.3824 16.8762 18.512 16.7791 18.6344C16.961 18.9796 17.1937 19.2954 17.4696 19.5714C18.1037 20.2125 18.9063 20.6611 19.7846 20.8654L20.0865 20.9336C19.6436 21.5333 19.1103 22.0607 18.5055 22.4967C17.5997 22.1513 16.7776 21.6174 16.0937 20.9303C15.7302 20.5642 15.4162 20.1521 15.1596 19.7044C15.0087 19.7455 14.8548 19.7751 14.6994 19.793C14.5841 20.1657 14.5253 20.5537 14.525 20.9439C14.5259 21.8468 14.7774 22.7318 15.2515 23.5002L15.4146 23.7603C14.6771 23.872 13.9267 23.8678 13.1905 23.7479C12.7931 22.8623 12.5887 21.9023 12.5907 20.9317C12.5925 20.4155 12.6619 19.9018 12.7971 19.4037C12.6615 19.3261 12.5319 19.2384 12.4095 19.1413C12.0643 19.3232 11.7484 19.556 11.4725 19.8318C10.8313 20.4659 10.3827 21.2685 10.1785 22.1468L10.1102 22.4484C9.5104 22.0055 8.98308 21.4722 8.54708 20.8674C8.89246 19.9616 9.42635 19.1395 10.1134 18.4556C10.4796 18.0921 10.8917 17.778 11.3394 17.5214C11.2982 17.3705 11.2686 17.2167 11.2507 17.0613C10.878 16.9459 10.4901 16.8872 10.0999 16.8869H10.0766C9.18171 16.8931 8.30557 17.1444 7.54344 17.6135L7.28338 17.7766C7.1718 17.0391 7.176 16.2887 7.29582 15.5525C8.16922 15.1609 9.11495 14.9566 10.0721 14.9526H10.1095C10.6265 14.9543 11.141 15.0236 11.64 15.159C11.7176 15.0234 11.8053 14.8938 11.9023 14.7714C11.7205 14.4262 11.4877 14.1103 11.2119 13.8344C10.5778 13.1933 9.77516 12.7446 8.89685 12.5404L8.5953 12.472C9.03815 11.8723 9.57148 11.345 10.1762 10.909C11.082 11.2544 11.904 11.7883 12.5878 12.4754C12.9514 12.8415 13.2654 13.2537 13.522 13.7013C13.6729 13.6601 13.8268 13.6305 13.9821 13.6127C14.0975 13.2399 14.1562 12.852 14.1566 12.4619C14.1557 11.5589 13.9042 10.6739 13.4302 9.90541L13.2671 9.64536C13.6224 9.59157 13.9813 9.56459 14.3406 9.56463H15.4474C15.873 10.4753 16.0927 11.4686 16.0908 12.4739C16.0891 12.9901 16.0198 13.5038 15.8846 14.0019C16.0201 14.0796 16.1496 14.1673 16.2721 14.2643C16.6172 14.0824 16.9331 13.8496 17.209 13.5738C17.85 12.9397 18.2985 12.1371 18.5028 11.2588L18.5718 10.9543C19.173 11.3947 19.7013 11.9268 20.1374 12.5312C19.7921 13.4398 19.2571 14.2643 18.5683 14.95ZM16.1034 16.7025C16.1034 16.3539 16 16.0131 15.8063 15.7232C15.6126 15.4333 15.3373 15.2073 15.0152 15.0739C14.693 14.9405 14.3386 14.9056 13.9966 14.9736C13.6547 15.0416 13.3406 15.2095 13.094 15.4561C12.8475 15.7026 12.6796 16.0167 12.6116 16.3587C12.5436 16.7006 12.5785 17.0551 12.7119 17.3772C12.8454 17.6993 13.0713 17.9746 13.3612 18.1683C13.6511 18.362 13.992 18.4654 14.3406 18.4654C14.8079 18.4648 15.256 18.279 15.5865 17.9486C15.9169 17.6182 16.1029 17.1701 16.1035 16.7028L16.1034 16.7025Z" fill="#F1BD81"/>
            </svg>

          </div>
          <div class="char-full__data">
            <p class="char-full__title">Мощьность</p>
            <p class="char-full__value">256 л.с</p>
          </div>
        </div>

        <div class="char-full">
          <div class="char-full__icon-wrapper">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.67969 2.15625V5.34375L7.71172 5.20541C6.88177 5.08675 6.27344 4.47123 6.27344 3.75C6.27344 3.0324 6.8776 2.41383 7.71172 2.29459L8.67969 2.15625ZM21.4396 1.9998V5.50019C21.4396 6.60345 20.3958 7.49999 19.1065 7.49999C18.7654 7.49999 18.4708 7.70273 18.397 7.98808L17.4297 11.7187H13.7834L12.8161 7.98808C12.7435 7.708 12.4545 7.49999 12.1065 7.49999C10.818 7.49999 9.77344 6.60468 9.77344 5.50019V1.9998C9.77344 0.895312 10.818 0 12.1065 0H19.1065C20.3951 0 21.4396 0.895312 21.4396 1.9998ZM17.3565 13.5937V16.5C17.3565 17.3285 16.5731 18 15.6065 18C14.6399 18 13.8565 17.3286 13.8565 16.5V13.5937H17.3565ZM20.3459 23.2476C20.3459 23.9764 19.6559 24.5625 18.8119 24.5625H12.4012C11.5549 24.5625 10.8672 23.9724 10.8672 23.2476C10.8672 23.0395 10.7944 23.3825 12.1564 18.1295C13.6422 20.4487 17.5507 20.4619 19.0559 18.126C20.4198 23.387 20.3459 23.0397 20.3459 23.2476Z" fill="#F1BD81"/>
            <path d="M27.2752 19.0002V25.9998C27.2752 28.2094 25.1861 30 22.6083 30H8.6083C6.03047 30 3.94141 28.2094 3.94141 25.9998V19.0002C3.94141 16.7906 6.03047 15 8.6083 15H11.1848C10.7514 15.5127 10.4444 16.0975 10.2817 16.7256C8.66353 22.967 8.68144 22.7502 8.68144 23.2477C8.68144 25.0066 10.3508 26.4375 12.4029 26.4375H18.8137C20.8703 26.4375 22.5351 25.01 22.5351 23.2477C22.5351 22.7649 22.5853 23.0882 20.9349 16.7256C20.7722 16.0969 20.4652 15.5127 20.0311 15H22.6083C25.1861 15 27.2752 16.7906 27.2752 19.0002Z" fill="#F1BD81"/>
            </svg>

          </div>
          <div class="char-full__data">
            <p class="char-full__title">Трансмиссия</p>
            <p class="char-full__value">Автомат</p>
          </div>
        </div>

        <div class="char-full">
          <div class="char-full__icon-wrapper">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.832 24.5455H5.37749C4.24763 24.5455 3.33203 25.4613 3.33203 26.5909C3.33203 28.4738 4.85813 29.9999 6.74104 29.9999H24.4682C26.3511 29.9999 27.8775 28.4738 27.8775 26.5909C27.8775 25.4613 26.9617 24.5455 25.832 24.5455ZM9.80398 12.2268C9.82444 10.7372 11.0402 9.5416 12.5298 9.54538H18.6797C20.1853 9.5471 21.4053 10.7671 21.407 12.2727L22.1174 23.1819H25.1149L24.4682 10.9092C24.4657 8.65074 22.6358 6.82076 20.3773 6.81827H19.6957V5.45446H21.0592C21.812 5.4537 22.422 4.8437 22.4228 4.09091V2.72736C22.4211 1.22171 21.2011 0.00178977 19.6957 0H11.5139C10.0082 0.00172585 8.78829 1.22171 8.7865 2.72736V4.09091C8.78726 4.8437 9.39726 5.4537 10.15 5.45446H11.5139V6.81827H10.832C8.58598 6.81603 6.75926 8.62722 6.74232 10.8732L6.09461 23.1819H9.05893L9.80398 12.2268ZM12.8774 5.45446H18.3319V6.81827H12.8774V5.45446Z" fill="#F1BD81"/>
            <path d="M18.6834 10.9082H12.5336C11.7808 10.909 11.1708 11.519 11.17 12.2718L10.4297 23.1809H20.7546L20.0483 12.3157C20.0524 12.1333 20.0202 11.952 19.9536 11.7821C19.887 11.6123 19.7873 11.4574 19.6603 11.3264C19.5333 11.1954 19.3816 11.091 19.2139 11.0192C19.0462 10.9474 18.8658 10.9097 18.6834 10.9082Z" fill="#F1BD81"/>
            </svg>

          </div>
          <div class="char-full__data">
            <p class="char-full__title">К-во мест</p>
            <p class="char-full__value">4 места</p>
          </div>
        </div>

        <div class="char-full">
          <div class="char-full__icon-wrapper">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6396 25.9629L7.78809 23.1138H5.8252C5.13916 23.1138 4.57764 22.5522 4.57764 21.8662V19.7422H3.38867V22.2275C3.38867 22.7573 2.9541 23.1919 2.42432 23.1919H0.964355C0.43457 23.1919 0 22.7573 0 22.2275V13.8047C0 13.2749 0.43457 12.8403 0.964355 12.8403H2.42432C2.9541 12.8403 3.38867 13.2749 3.38867 13.8047V16.29H4.57764V14.0049C4.57764 13.3188 5.13916 12.7573 5.8252 12.7573H7.91016L10.8569 9.625C11.1987 9.32715 11.6528 9.22217 12.1826 9.24414H24.3237C24.7437 9.29053 25.0635 9.45166 25.2588 9.75439C25.4541 10.0522 25.4224 10.2207 25.4224 10.5552V16.29H26.6113V13.8047C26.6113 13.2749 27.0459 12.8403 27.5757 12.8403H29.0356C29.5654 12.8403 30 13.2749 30 13.8047V22.2275C30 22.7573 29.5654 23.1919 29.0356 23.1919H27.5757C27.0459 23.1919 26.6113 22.7573 26.6113 22.2275V19.7422H25.4224V19.9668C25.4224 20.6333 25.4419 21.0361 25.0171 21.5879C24.9365 21.6929 24.8462 21.793 24.7461 21.8857L20.3931 26.1484C20.1758 26.3901 19.8462 26.522 19.4116 26.5464H11.9897C11.4355 26.522 10.9839 26.3315 10.6396 25.9629ZM15.5542 18.5361L12.4683 18.2456L15.0269 12.6401H18.5254L16.5405 15.8555L20.1099 16.251L13.5571 24.1172L15.5542 18.5361ZM12.6904 3.45312H21.1133C21.6431 3.45312 22.0776 3.8877 22.0776 4.41748V5.87744C22.0776 6.40723 21.6431 6.8418 21.1133 6.8418H18.6279V8.06982H15.1758V6.8418H12.6904C12.1606 6.8418 11.7261 6.40723 11.7261 5.87744V4.41748C11.7261 3.8877 12.1606 3.45312 12.6904 3.45312Z" fill="#F1BD81"/>
            </svg>
          </div>
          <div class="char-full__data">
            <p class="char-full__title">Обьем двигателя</p>
            <p class="char-full__value">4.5 литра</p>
          </div>
        </div>

        <div class="char-full">
          <div class="char-full__icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
              <path d="M27.8147 5.41922L27.8368 5.39275L21.5211 0.347266L19.5316 2.76723L22.7953 5.37406C21.9856 5.85929 21.3428 6.57353 20.9502 7.42392C20.5577 8.27431 20.4336 9.2215 20.5942 10.1424C20.8311 11.5423 21.8084 12.7523 23.0732 13.4297C24.4863 14.1881 25.7258 14.118 26.8279 13.7318L26.8042 23.3587C26.8061 23.6166 26.7428 23.8708 26.62 24.0985C26.4972 24.3261 26.3188 24.52 26.1009 24.6625C25.883 24.8051 25.6326 24.8918 25.3721 24.9148C25.1117 24.9379 24.8496 24.8965 24.6095 24.7945C24.4214 24.7152 24.2508 24.6004 24.1074 24.4566C23.9614 24.3123 23.8457 24.1411 23.7669 23.9527C23.688 23.7644 23.6476 23.5625 23.6479 23.3587L23.6842 20.2442C23.6858 19.6313 23.5643 19.024 23.3266 18.4577C23.0889 17.8913 22.7398 17.377 22.2995 16.9444C21.8596 16.5096 21.3371 16.1647 20.7619 15.9293C20.1867 15.6938 19.5701 15.5726 18.9474 15.5725H17.3684V3.11449C17.3684 2.28848 17.0357 1.4963 16.4435 0.912214C15.8513 0.328133 15.0481 0 14.2105 0H3.15789C2.32037 0 1.51715 0.328133 0.924926 0.912214C0.332706 1.4963 0 2.28848 0 3.11449V24.916C0 25.742 0.332706 26.5342 0.924926 27.1182C1.51715 27.7023 2.32037 28.0305 3.15789 28.0305H14.2105C15.0481 28.0305 15.8513 27.7023 16.4435 27.1182C17.0357 26.5342 17.3684 25.742 17.3684 24.916V18.687H18.9474C19.1621 18.687 19.3689 18.729 19.5647 18.8084C19.9405 18.9707 20.2401 19.2672 20.4032 19.6384C20.4851 19.8302 20.527 20.0362 20.5263 20.2442L20.4884 23.3587C20.4884 23.991 20.6132 24.6029 20.8611 25.1776C21.0995 25.7366 21.4421 26.2365 21.8732 26.6585C22.3115 27.0954 22.8336 27.4417 23.4092 27.6773C23.9847 27.9128 24.6021 28.0329 25.2253 28.0305C25.8663 28.0305 26.4853 27.909 27.0695 27.6629C27.6347 27.4294 28.1432 27.0914 28.5711 26.6647C29.0131 26.2318 29.3636 25.7167 29.6024 25.1492C29.8412 24.5817 29.9634 23.9731 29.9621 23.3587L30 9.34348C29.9984 8.56115 29.7975 7.79176 29.4156 7.10604C29.0338 6.42032 28.4833 5.84027 27.8147 5.41922ZM14.2105 7.78624H3.15789V3.11449H14.2105V7.78624ZM25.2632 10.9007C24.8444 10.9007 24.4428 10.7367 24.1467 10.4446C23.8506 10.1526 23.6842 9.75649 23.6842 9.34348C23.6842 8.93048 23.8506 8.53438 24.1467 8.24234C24.4428 7.9503 24.8444 7.78624 25.2632 7.78624C25.6819 7.78624 26.0835 7.9503 26.3796 8.24234C26.6758 8.53438 26.8421 8.93048 26.8421 9.34348C26.8421 9.75649 26.6758 10.1526 26.3796 10.4446C26.0835 10.7367 25.6819 10.9007 25.2632 10.9007Z" fill="#F1BD81"/>
              </svg>
          </div>
          <div class="char-full__data">
            <p class="char-full__title">Тип топлива</p>
            <p class="char-full__value">Бензин</p>
          </div>
        </div>

        <div class="char-full">
          <div class="char-full__icon-wrapper">
            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5938 2.8944C11.3398 3.15025 9.20203 4.03113 7.42125 5.43779L8.9625 6.98259C9.2109 7.24946 9.34613 7.60244 9.3397 7.96715C9.33327 8.33186 9.18569 8.67983 8.92804 8.93776C8.67039 9.19569 8.32279 9.34344 7.95848 9.34987C7.59417 9.35631 7.24158 9.22093 6.975 8.97226L5.42625 7.4237C4.10996 9.07653 3.25353 11.0483 2.94375 13.1393H6.09375C6.46671 13.1393 6.8244 13.2876 7.08812 13.5516C7.35184 13.8156 7.5 14.1737 7.5 14.5471C7.5 14.9204 7.35184 15.2785 7.08812 15.5425C6.8244 15.8065 6.46671 15.9549 6.09375 15.9549H2.85938C3.1513 18.9673 4.52662 21.771 6.72938 23.8441C6.99505 24.101 7.14909 24.4522 7.15822 24.8219C7.16734 25.1915 7.03081 25.5499 6.77813 25.8196C6.52545 26.0894 6.17691 26.2487 5.80783 26.2633C5.43874 26.2779 5.07874 26.1465 4.80563 25.8975C1.91813 23.189 0 19.1946 0 14.9093C0 6.66537 6.72563 0 15 0C23.2744 0 30 6.6635 30 14.9093C29.9963 16.9667 29.5745 19.0019 28.7603 20.8909C27.946 22.7799 26.7564 24.4833 25.2638 25.8975C24.9906 26.1465 24.6306 26.2779 24.2615 26.2633C23.8925 26.2487 23.5439 26.0894 23.2912 25.8196C23.0386 25.5499 22.902 25.1915 22.9112 24.8219C22.9203 24.4522 23.0743 24.101 23.34 23.8441C25.5275 21.7675 26.88 18.9613 27.1425 15.9549H23.9062C23.5333 15.9549 23.1756 15.8065 22.9119 15.5425C22.6482 15.2785 22.5 14.9204 22.5 14.5471C22.5 14.1737 22.6482 13.8156 22.9119 13.5516C23.1756 13.2876 23.5333 13.1393 23.9062 13.1393H27.0563C26.2613 7.75969 21.8944 3.51945 16.4062 2.8944V5.16187C16.4062 5.53523 16.2581 5.89331 15.9944 6.15732C15.7306 6.42133 15.373 6.56965 15 6.56965C14.627 6.56965 14.2694 6.42133 14.0056 6.15732C13.7419 5.89331 13.5938 5.53523 13.5938 5.16187V2.8944ZM21.4669 7.1459C21.6373 7.01043 21.8494 6.93851 22.067 6.94246C22.2845 6.94642 22.4939 7.026 22.6593 7.16758C22.8246 7.30915 22.9356 7.50389 22.9733 7.71843C23.0109 7.93297 22.9729 8.15393 22.8656 8.34345L22.6594 8.71135C21.9054 10.0442 21.1466 11.3745 20.3831 12.7019C19.7728 13.7642 19.154 14.8217 18.5269 15.8741C18.2919 16.2701 18.0518 16.6631 17.8069 17.0529C17.6194 17.3476 17.4356 17.6273 17.3006 17.785C16.8163 18.353 16.1264 18.7051 15.3827 18.7639C14.639 18.8227 13.9024 18.5833 13.335 18.0984C12.7676 17.6136 12.4159 16.9229 12.3571 16.1784C12.2984 15.4339 12.5375 14.6965 13.0219 14.1285C13.1569 13.9708 13.4025 13.7437 13.665 13.5128C13.9462 13.2632 14.3081 12.9572 14.715 12.6137C15.5325 11.9305 16.5563 11.0933 17.5538 10.2862C18.7435 9.32269 19.9373 8.36414 21.135 7.41056L21.4669 7.14778V7.1459Z" fill="#F3C884"/>
            </svg>

          </div>
          <div class="char-full__data">
            <p class="char-full__title">Разгон до 100</p>
            <p class="char-full__value">6.2 секунды</p>
          </div>
        </div>

      </div>
    </section>


    <section class="car-price-sec">
      <div class="container">
        <div class="header-row-sec">
                <h2 class="car-price-sec__title sec-title sec-title--left-mod"><b>СТОИМОСТЬ </b> АРЕНДЫ</h2>

                <button class="home-hero-sec__btn btnV1 btnV1--big">
                    <span class="btnV1__circle btnV1__circle-1"></span>
                    <span class="btnV1__circle btnV1__circle-2"></span>
                    <span class="btnV1__title">ПОСМОТРЕТЬ ВСЕ ЦЕНЫ</span>

                    <div class="btnV1__line btnV1__line-1"></div>
                    <div class="btnV1__line btnV1__line-2"></div>
                    <div class="btnV1__line btnV1__line-3"></div>
                    <div class="btnV1__line btnV1__line-4"></div>
                </button>
          </div>

          <div class="car-price-sec__table price-table">
            <div class="price-table__col">
              <div class="price-table__el price-table__el-header">1 день</div>
              <div class="price-table__el price-table__el-value active">50000 руб./сутки</div>
            </div>

            <div class="price-table__col">
              <div class="price-table__el price-table__el-header">2 - 3 дня</div>
              <div class="price-table__el price-table__el-value">47000 руб./сутки</div>
            </div>

            <div class="price-table__col">
              <div class="price-table__el price-table__el-header">4 - 6 дней</div>
              <div class="price-table__el price-table__el-value">45000 руб./сутки</div>
            </div>

            <div class="price-table__col">
              <div class="price-table__el price-table__el-header">7 - 15 дней</div>
              <div class="price-table__el price-table__el-value">40000 руб./сутки</div>
            </div>
          </div>

          <div class="car-price-sec__dop-services dop-services-price">
            <div class="dop-services-price__row">
              <p class="dop-services-price__name">Обязательный страховой взнос:</p>
              <p class="dop-services-price__value">150 000 руб.</p>
            </div>

            <div class="dop-services-price__row">
              <p class="dop-services-price__name">Личный водитель:</p>
              <p class="dop-services-price__value">По запросу</p>
            </div>
          </div>
      </div>
    </section>


    <section class="car-about-sec">
      <div class="container">
        <h2 class="car-price-sec__title sec-title sec-title--left-mod"><b>ПРО </b> АВТОМОБИЛЬ</h2>

        <div class="car-about-sec__info-wrapper">
            <div class="info-data-row">
            <div class="info-data-row__data">
              <div class="wp-editor">
                <p><b>Мерседес</b> всегда был <b>эталоном</b> автомобилей класса премиум, а Мерседес Гелендваген особенно. Сила, мощь, агрессивный дизайн, черный цвет, грубые, но притягивающие черты, мощность в 571 л.с. и разгон до 100 км за 5,4 секунды – все это Гелендваген (или Гелик, как чаще всего его называют), чем все сказано. Любой праздник превратится в яркое событие, если вы возьмете в аренду Мерседес в Москве. Забудьте о серых и невзрачных праздниках без задора. Аренда Mercedes G63, автомобиля-внедорожника – это ваш шанс выйти за пределы шаблона и по-настоящему почувствовать себя живым ш шанс выйти за пределы шаблона и по-настоящему почувствовать себя живым</p>
              </div>
            </div>
            <div class="info-data-row__img-wrapper">
              <img src="@/assets/images/img/ab-car-1.jpg" alt="" class="info-data-row__img">
              <img src="@/assets/images/img/ab-car-2.jpg" alt="" class="info-data-row__img">
            </div>
          </div>


          <div class="info-data-row">
            <div class="info-data-row__data">
              <div class="wp-editor">
              <p> Несмотря на грубые и даже брутальные черты, данный автомобиль является чрезвычайно популярным среди людей различных возрастов. Он станет полноценным атрибутом вашего праздника, а фото на его фоне не оставят равнодушными никого. Диски на 22 дюйма, изящный цвет с отливом и стильный вид будут смотреться на любой фотографии просто изумительно. </p>
                <p>С данной машиной можно устроить праздник как себе, так и своим друзьям. Такой подарок по достоинству оценят виновники торжества.С данной машиной можно устроить праздник как себе, так и своим друзьям. Такой подарок по достоинству оценят виновники торжества.</p>
              </div>
            </div>
            <div class="info-data-row__img-wrapper">
              <img src="@/assets/images/img/ab-car-3.jpg" alt="" class="info-data-row__img">
              <img src="@/assets/images/img/ab-car-4.jpg" alt="" class="info-data-row__img">
            </div>
          </div>

        </div>
        

      </div>
    </section>


    <section class="car-char-full-sec">
      <div class="container">
        <div class="header-row-sec-v2">

            <div class="header-row-sec-v2__decor-wrapper">
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
            
            <h2 class="car-char-full-sec__title sec-title sec-title--center-mod"><b>ХАРАКТЕРИСТИКИ </b> АВТО</h2>
          </div>

          <div class="car-char-full-sec__wrapper">

            <div class="car-char-full-sec__row">
              <div class="car-char-full-sec__row-name">
                <span class="car-char-full-sec__row-counter">01</span>
                <span class="car-char-full-sec__row-name-text">Страна производства</span>
              </div>
              <div class="car-char-full-sec__value">Германия</div>
            </div>

            <div class="car-char-full-sec__row">
              <div class="car-char-full-sec__row-name">
                <span class="car-char-full-sec__row-counter">02</span>
                <span class="car-char-full-sec__row-name-text">Тип привода</span>
              </div>
              <div class="car-char-full-sec__value">Полный привод</div>
            </div>

            <div class="car-char-full-sec__row">
              <div class="car-char-full-sec__row-name">
                <span class="car-char-full-sec__row-counter">03</span>
                <span class="car-char-full-sec__row-name-text">Год производства</span>
              </div>
              <div class="car-char-full-sec__value">2019 год</div>
            </div>

            <div class="car-char-full-sec__row">
              <div class="car-char-full-sec__row-name">
                <span class="car-char-full-sec__row-counter">04</span>
                <span class="car-char-full-sec__row-name-text">Пробег</span>
              </div>
              <div class="car-char-full-sec__value">55000 тыс./км</div>
            </div>

            <div class="car-char-full-sec__row">
              <div class="car-char-full-sec__row-name">
                <span class="car-char-full-sec__row-counter">05</span>
                <span class="car-char-full-sec__row-name-text">Длинна корпуса</span>
              </div>
              <div class="car-char-full-sec__value">5.6 метра</div>
            </div>

            <div class="car-char-full-sec__row">
              <div class="car-char-full-sec__row-name">
                <span class="car-char-full-sec__row-counter">06</span>
                <span class="car-char-full-sec__row-name-text">Запас хода </span>
              </div>
              <div class="car-char-full-sec__value">560 километров</div>
            </div>

          </div>
      </div>
    </section>

    <section class="car-adv-sec">
      <div class="container">
        <div class="header-row-sec-v2">

            <div class="header-row-sec-v2__decor-wrapper">
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
            
            <h2 class="car-adv-sec__title sec-title sec-title--center-mod"><b>НАШИ </b> ПРЕИМУЩЕСТВА</h2>
        </div>

        <div class="car-adv-sec__wrapper adv-row-v2">
          <div class="adv-element-v2">
            <div class="adv-element__icon-wrapper-v2">
              <img src="@/assets/images/img/ad1.svg" alt="" class="adv-element__icon-v2">
            </div>

            <p class="dv-element-v2__title">КОМФОРТ</p>
            <p class="dv-element-v2__subtitle">Оформление и доставка авто до нужного адреса за 3 часа.</p>
          </div>

          <div class="adv-element-v2">
            <div class="adv-element__icon-wrapper-v2">
              <img src="@/assets/images/img/ad2.svg" alt="" class="adv-element__icon-v2">
            </div>

            <p class="dv-element-v2__title">ПОДГОТОВКА</p>
            <p class="dv-element-v2__subtitle">Каждый клиент получает чистый внутри и снаружи автомобиль.</p>
          </div>


          <div class="adv-element-v2">
            <div class="adv-element__icon-wrapper-v2">
              <img src="@/assets/images/img/ad3.svg" alt="" class="adv-element__icon-v2">
            </div>

            <p class="dv-element-v2__title">СТРАХОВКА</p>
            <p class="dv-element-v2__subtitle">Не о чем волноваться: автомобиль застрахован по КАСКО и ОСАГО.</p>
          </div>

          <div class="adv-element-v2">
            <div class="adv-element__icon-wrapper-v2">
              <img src="@/assets/images/img/ad4.svg" alt="" class="adv-element__icon-v2">
            </div>

            <p class="dv-element-v2__title">БЕЗОПАСНОСТЬ</p>
            <p class="dv-element-v2__subtitle">Предоставляем услуги сопровождения: охрана для важных и больших сделок.</p>
          </div>

        </div>
      </div>
    </section>


    <section class="home-faq-sec car-faq-sec">
        <div class="container">
          <div class="header-row-sec">
            <h2 class="header-row-sec__title sec-title sec-title--left-mod"><b>УСЛОВИЯ </b> АРЕНДЫ АВТО</h2>

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


    <section class="car-simmilar-sec">
      <div class="container">
        <div class="header-row-sec">
            <h2 class="car-simmilar-sec__title sec-title sec-title--left-mod"><b>ПОХОЖИЕ </b> АВТОМОБИЛИ</h2>

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

          <div class="car-simmilar-sec__cars-wrapper">

            <carCard />

            <carCard />

        </div>
        
      </div>

    </section>

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

const singleCarSlider = ref(null)


//recomend gallery
const  swiperCarSingle  = useSwiper(singleCarSlider, {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,   
   speed: 1100,
   freeMode: "true",  
  //  freeMode: true,
   slidesPerView: "auto",
   pagination: true,

  //  centeredSlides: 'auto',
   breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    1220: {
       slidesPerView: 3,
      spaceBetween: 50,
    },
  },

})



onMounted(() => {

})

</script>


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