<template>
    <Transition name="blureffect" @click.self="show = false">
        <div class="blur-wrapper" v-if="show"></div>
    </Transition>

    <header class="header" :class="{'hide-logo': isActive, 'header--fixed': fixedStatus, 'header--show': isScrollingTop}">
        <div class="header__container header__container-main">

            <div class="header__left">
                <NuxtLink to="/" class="header__logo">
                    <img :src="store.optionsData.header_logo.url" :alt="store.optionsData.header_logo.alt" class="header__logo-img">
                </NuxtLink>
                <p 
                v-if="store.optionsData.header_rezhim_raboty"
                class="header__time-work" 
                v-html="store.optionsData.header_rezhim_raboty"></p>
            </div>

            <nav class="header__nav">
                <ul class="header__nav-list">
                    <li class="header__nav-list-element">
                        <NuxtLink to="/" class="header__nav-list-link">
                            Главная
                        </NuxtLink>
                    </li>
                    <li class="header__nav-list-element">
                        <NuxtLink to="/autopark" class="header__nav-list-link">
                            Автопарк
                        </NuxtLink>
                    </li>
                    <li class="header__nav-list-element">
                        <NuxtLink to="/rules" class="header__nav-list-link">
                            Условия
                        </NuxtLink>
                    </li>
                    <li class="header__nav-list-element">
                        <NuxtLink to="/contacts" class="header__nav-list-link">
                            Контакты
                        </NuxtLink>
                    </li>
                    <li class="header__nav-list-element">
                        <NuxtLink to="/certificates" class="header__nav-list-link">
                            Сертификаты
                        </NuxtLink>
                    </li>
                    <li class="header__nav-list-element">
                        <NuxtLink to="/partners" class="header__nav-list-link">
                            Зарабатывай с нами
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="header__right">
                <a :href="store.optionsData.header_yandeks_ssylka" class="header__yandex-rait" v-if="store.optionsData.header_rejting_yandeks">
                    <svg width="36" height="58" viewBox="0 0 36 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 54.661L34.9924 54.8792C34.8424 57.0424 32.4817 58.5059 30.2219 57.8364L29.9965 57.7623L18.2698 53.5246C17.7755 53.3459 17.2245 53.3459 16.7302 53.5246L5.0035 57.7623L4.77801 57.8364C2.51834 58.5059 0.157541 57.0424 0.00765216 54.8792L0 54.661V15.9649C3.70904e-07 7.14772 7.83502 0 17.5 0C27.165 0 35 7.14772 35 15.9649V54.661Z" fill="white"/>
                    <path d="M16.5378 53.0815C17.1557 52.8581 17.8442 52.8581 18.4621 53.0815L30.1887 57.3193C32.2461 58.0628 34.4774 56.6798 34.4776 54.661V15.9649C34.4776 7.41091 26.8764 0.476563 17.5 0.476563C8.12352 0.476563 0.522387 7.41091 0.522387 15.9649V54.661C0.522534 56.6798 2.75382 58.0628 4.81117 57.3193L16.5378 53.0815ZM35 54.661L34.9923 54.8792C34.8424 57.0424 32.4817 58.5059 30.2219 57.8364L29.9965 57.7623L18.2697 53.5244C17.7755 53.3459 17.2246 53.3459 16.7302 53.5244L5.00349 57.7623L4.77801 57.8364C2.51833 58.5059 0.157541 57.0424 0.00765273 54.8792L0 54.661V15.9649C0 7.14772 7.835 0 17.5 0C27.165 0 35 7.14772 35 15.9649V54.661Z" fill="#ECECEC"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8016 29.8751C21.1653 30.556 19.4114 30.9066 17.6401 30.9066C14.0629 30.9066 10.6323 29.4787 8.1028 26.9371C5.57336 24.3954 4.15234 20.9482 4.15234 17.3536C4.15234 13.7593 5.57336 10.312 8.1028 7.77035C10.6323 5.22868 14.0629 3.80078 17.6401 3.80078C19.4114 3.80078 21.1653 4.15135 22.8016 4.83245C24.438 5.51355 25.925 6.51184 27.1774 7.77035C28.43 9.02886 29.4233 10.5229 30.1012 12.1673C30.7791 13.8115 31.1279 15.5739 31.1279 17.3536C31.1279 19.1335 30.7791 20.8959 30.1012 22.5401C29.4233 24.1845 28.43 25.6785 27.1774 26.9371C25.925 28.1955 24.438 29.1939 22.8016 29.8751ZM22.6917 25.8272H19.7566L19.7502 25.8208H19.7437V11.1708H18.4269C16.0185 11.1708 14.7531 12.3905 14.7531 14.1912C14.7531 16.2434 15.6331 17.1857 17.4315 18.412L18.9215 19.4058L14.644 25.8208H11.4519L15.2992 20.0899C13.0897 18.5087 11.8502 16.9534 11.8502 14.359C11.8502 11.0934 14.111 8.87327 18.4142 8.87327H22.6917V25.8272Z" fill="#FC3F1D"/>
                    </svg>

                    <p class="header__yandex-rait-value" v-html="store.optionsData.header_rejting_yandeks"></p>
                </a>

                <div class="header__contacts" v-if="store.optionsData.header_socz_seti?.length > 0">
                    
                    <a :href="value.ssylka" class="contact-link" v-for="value in store.optionsData.header_socz_seti">
                        <div class="contact-link__wrapper">
                            <img :src="value.ikonka.url" :alt="value.ikonka.alt">
                        </div>
                    </a>
                    
                </div>

                <div class="header__burger burger-meny" @click="show = !show" :class="{'active': show}">
                    <div class="burger-meny__line burger-meny__line--nb-1"></div>
                    <div class="burger-meny__line burger-meny__line--nb-2"></div>
                </div>
            </div>
        </div>


        <Transition name="mobact">
            <div class="header__mob-wrapper mob-menu" v-if="show" >
                <div class="mob-menu__wrapper">

                    <nav class="mob-menu__nav">
                        <ul class="mob-menu__nav-list">
                            <li class="mob-menu__nav-list-element">
                                <NuxtLink to="/" class="mob-menu__nav-list-link" @click="show = false">
                                    Главная
                                </NuxtLink>
                            </li>
                            <li class="mob-menu__nav-list-element">
                                <NuxtLink to="/autopark" class="mob-menu__nav-list-link" @click="show = false">
                                    Автопарк
                                </NuxtLink>
                            </li>
                            <li class="mob-menu__nav-list-element">
                                <NuxtLink to="/rules" class="mob-menu__nav-list-link" @click="show = false">
                                    Условия
                                </NuxtLink>
                            </li>
                            <li class="mob-menu__nav-list-element">
                                <NuxtLink to="/contacts" class="mob-menu__nav-list-link" @click="show = false">
                                    Контакты
                                </NuxtLink>
                            </li>
                            <li class="mob-menu__nav-list-element">
                                <NuxtLink to="/certificates" class="mob-menu__nav-list-link" @click="show = false">
                                    Сертификаты
                                </NuxtLink>
                            </li>
                            <li class="mob-menu__nav-list-element">
                                <NuxtLink to="/partners" class="mob-menu__nav-list-link" @click="show = false">
                                    Зарабатывай с нами
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>

                    <div class="mob-menu__down-row">
                        

                        <div class="header__contacts" v-if="store.optionsData.header_socz_seti?.length > 0">
                            
                            <a :href="value.ssylka" class="contact-link" v-for="value in store.optionsData.header_socz_seti">
                                <div class="contact-link__wrapper">
                                    <img :src="value.ikonka.url" :alt="value.ikonka.alt">
                                </div>
                            </a>
                            
                        </div>

                        <a :href="store.optionsData.header_yandeks_ssylka" class="header__yandex-rait" v-if="store.optionsData.header_rejting_yandeks">
                            <svg width="36" height="58" viewBox="0 0 36 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35 54.661L34.9924 54.8792C34.8424 57.0424 32.4817 58.5059 30.2219 57.8364L29.9965 57.7623L18.2698 53.5246C17.7755 53.3459 17.2245 53.3459 16.7302 53.5246L5.0035 57.7623L4.77801 57.8364C2.51834 58.5059 0.157541 57.0424 0.00765216 54.8792L0 54.661V15.9649C3.70904e-07 7.14772 7.83502 0 17.5 0C27.165 0 35 7.14772 35 15.9649V54.661Z" fill="white"/>
                            <path d="M16.5378 53.0815C17.1557 52.8581 17.8442 52.8581 18.4621 53.0815L30.1887 57.3193C32.2461 58.0628 34.4774 56.6798 34.4776 54.661V15.9649C34.4776 7.41091 26.8764 0.476563 17.5 0.476563C8.12352 0.476563 0.522387 7.41091 0.522387 15.9649V54.661C0.522534 56.6798 2.75382 58.0628 4.81117 57.3193L16.5378 53.0815ZM35 54.661L34.9923 54.8792C34.8424 57.0424 32.4817 58.5059 30.2219 57.8364L29.9965 57.7623L18.2697 53.5244C17.7755 53.3459 17.2246 53.3459 16.7302 53.5244L5.00349 57.7623L4.77801 57.8364C2.51833 58.5059 0.157541 57.0424 0.00765273 54.8792L0 54.661V15.9649C0 7.14772 7.835 0 17.5 0C27.165 0 35 7.14772 35 15.9649V54.661Z" fill="#ECECEC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8016 29.8751C21.1653 30.556 19.4114 30.9066 17.6401 30.9066C14.0629 30.9066 10.6323 29.4787 8.1028 26.9371C5.57336 24.3954 4.15234 20.9482 4.15234 17.3536C4.15234 13.7593 5.57336 10.312 8.1028 7.77035C10.6323 5.22868 14.0629 3.80078 17.6401 3.80078C19.4114 3.80078 21.1653 4.15135 22.8016 4.83245C24.438 5.51355 25.925 6.51184 27.1774 7.77035C28.43 9.02886 29.4233 10.5229 30.1012 12.1673C30.7791 13.8115 31.1279 15.5739 31.1279 17.3536C31.1279 19.1335 30.7791 20.8959 30.1012 22.5401C29.4233 24.1845 28.43 25.6785 27.1774 26.9371C25.925 28.1955 24.438 29.1939 22.8016 29.8751ZM22.6917 25.8272H19.7566L19.7502 25.8208H19.7437V11.1708H18.4269C16.0185 11.1708 14.7531 12.3905 14.7531 14.1912C14.7531 16.2434 15.6331 17.1857 17.4315 18.412L18.9215 19.4058L14.644 25.8208H11.4519L15.2992 20.0899C13.0897 18.5087 11.8502 16.9534 11.8502 14.359C11.8502 11.0934 14.111 8.87327 18.4142 8.87327H22.6917V25.8272Z" fill="#FC3F1D"/>
                            </svg>

                            <p class="header__yandex-rait-value" v-html="store.optionsData.header_rejting_yandeks"></p>
                        </a>
                    </div>

                </div>
            </div>
        </Transition>
    </header>
    
    
</template>

<script setup>

//IMPORT

import { ref, onMounted, onBeforeUnmount, onUnmounted, computed, watch  } from 'vue';

import { useCounterStore } from '@/stores/counter'

import { useNuxtApp } from '#app'


//DATA

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const show = ref(false)

const isActive = ref(false)

const fixedStatus = ref(false)

const isScrollingTop = ref(false)

const lastScrollY = ref(null)


//METHODS
function handleScroll() {
  isActive.value = window.scrollY > 50
  fixedStatus.value = window.scrollY > 50
}



const onScroll = () => {
  const currentScrollY = window.scrollY

  isScrollingTop.value = currentScrollY < lastScrollY.value

  lastScrollY.value = currentScrollY
}



onMounted(() => {
  window.addEventListener('scroll', handleScroll)
window.addEventListener('scroll', onScroll,)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', onScroll)
})

</script>


