<template v-if="pageData && pageData.length > 0">

    <section class="certificates-hero-sec" v-if="pageData[0].acf['sekcziya_1_-_hero'].zagolvok">
        <div class="container">
            <div class="hero-partners-sec__row">
                
                <div class="seo-sec-type-1__images">

                    <img v-for="value in pageData[0].acf['sekcziya_1_-_hero'].izobrazheniya"
                    :src="value.kartinka.url" 
                    :alt="value.kartinka.alt" 
                    class="seo-sec-type-1__img">
            
                </div>

                <div class="seo-sec-type-1__data">
                    <h1 class="hero-partners-sec__title sec-title sec-title--left-mod sec-title--capitalize-mod" v-html="pageData[0].acf['sekcziya_1_-_hero'].zagolvok"></h1>

                    <div class="seo-sec-type-1__text-container">
                        <div class="seo-sec-type-1__text-wrapper">
                            <div class="wp-editor seo-sec-type-1__editor" ref="editor" v-html="pageData[0].acf['sekcziya_1_-_hero'].tekst"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="certificates-catalog-sec" v-if="pageData[0].acf.sekcziya_2_dostupnye_sertefikaty.zagolovok">
        <div class="container">
            <div class="header-row-sec">
                <h2 class="certificates-catalog-sec__title sec-title sec-title--left-mod" v-html="pageData[0].acf.sekcziya_2_dostupnye_sertefikaty.zagolovok"></h2>

                <button class="home-hero-sec__btn btnV1 btnV1--big" @click="openTargetPopupForm">
                    <span class="btnV1__circle btnV1__circle-1"></span>
                    <span class="btnV1__circle btnV1__circle-2"></span>
                    <span class="btnV1__title">ЗАКАЗАТЬ СЕРТИФИКАТ</span>

                    <div class="btnV1__line btnV1__line-1"></div>
                    <div class="btnV1__line btnV1__line-2"></div>
                    <div class="btnV1__line btnV1__line-3"></div>
                    <div class="btnV1__line btnV1__line-4"></div>
                </button>
            </div>

            <div class="certificates-catalog-sec__wrapper">
                
                <div class="certificates-catalog-sec__element certeficat-card"
                v-for="value in pageData[0].acf.sekcziya_2_dostupnye_sertefikaty.sertefikaty">
                    <div class="certeficat-card__wrapper">
                        <img src="@/assets/images/img/certeficat-logo.png" alt="" class="certeficat-card__logo">
                        <p class="certeficat-card__value" v-if="value.znachenie" v-html="value.znachenie"></p>
                        <p class="certeficat-card__title" v-if="value.podpis" v-html="value.podpis"></p>
                    </div>

                    <div class="certeficat-card__btn-wrapper" @click="openTargetPopupForm">
                        <button class="certeficat-card__btn btnV1 btnV1--big">
                            <span class="btnV1__circle btnV1__circle-1"></span>
                            <span class="btnV1__circle btnV1__circle-2"></span>
                            <span class="btnV1__title">ЗАКАЗАТЬ СЕРТИФИКАТ</span>

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

    <section class="certificates-about-sec" v-if="pageData[0].acf.sekcziya_3_o_sertifikate.zagolovok">
        <div class="container">
            <div class="header-row-sec">
                <h2 class="certificates-about-sec__title sec-title sec-title--left-mod" v-html="pageData[0].acf.sekcziya_3_o_sertifikate.zagolovok"></h2>
            </div>

            <div class="certificates-about-sec__row">

                <div class="certificates-about-sec__col" v-for="value in pageData[0].acf.sekcziya_3_o_sertifikate.tekstovye_bloki">
                    <div class="certificates-about-sec__text wp-editor" v-html="value.tekst"></div>
                </div>

            </div>
        </div>
    </section>

    <section class="partners-how-it-work-sec" v-if="pageData[0].acf.sekcziya_4_kak_poluchit.zagolovok">
        <div class="container">
            <div class="header-row-sec">
                <h2 class="partners-how-it-work-sec__title sec-title sec-title--left-mod" v-html="pageData[0].acf.sekcziya_4_kak_poluchit.zagolovok"></h2>

                <button class="home-hero-sec__btn btnV1 btnV1--big" @click="openTargetPopupForm">
                    <span class="btnV1__circle btnV1__circle-1"></span>
                    <span class="btnV1__circle btnV1__circle-2"></span>
                    <span class="btnV1__title">ЗАКАЗАТЬ СЕРТИФИКАТ</span>

                    <div class="btnV1__line btnV1__line-1"></div>
                    <div class="btnV1__line btnV1__line-2"></div>
                    <div class="btnV1__line btnV1__line-3"></div>
                    <div class="btnV1__line btnV1__line-4"></div>
                </button>

            </div>

            <div class="partners-how-it-work-sec__row" >
                <div class="partners-how-it-work-sec__element" v-for="(value, index) in pageData[0].acf.sekcziya_4_kak_poluchit.shagi">
                    <div class="partners-how-it-work-sec__element-counter">
                        0{{ index + 1 }}
                    </div>
                    <p class="partners-how-it-work-sec__element-title" v-html="value.zagolovok"></p>
                    <p class="partners-how-it-work-sec__element-description" v-html="value.opisanie"></p>
                </div>
            </div>
        </div>
    </section>


    <section class="partners-faq-sec car-faq-sec" v-if="pageData[0].acf.sekcziya_5_usloviya.zagolovok">
        <div class="container">
          <div class="header-row-sec">
            <h2 class="header-row-sec__title sec-title sec-title--left-mod" v-if="pageData[0].acf.sekcziya_5_usloviya.zagolovok"></h2>

            <button class="home-hero-sec__btn btnV1 btnV1--big" @click="openTargetPopupForm">
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

            <template v-for="(item,index) in pageData[0].acf.sekcziya_5_usloviya.spisok_uslovij">
              <faqElement :title="item.zagolovok" :counter="+index+1" :description="item.opisanie"/>
            </template>

          </div>
        </div>
    </section>

    <formSec :formSecData="optionsData" />

</template>



<script setup>

//IMPORT

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import faqElement from '@/components/faqElement.vue'

import formSec from '@/components/sections/formSec.vue'

import { useCounterStore } from '@/stores/counter'

import { useNuxtApp } from '#app'


//DATA

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const route = useRoute()

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=sertifikaty`)

const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

console.log('pageData', pageData)

console.log('optionsData', optionsData)



//METHODS

//Open form popup
const openTargetPopupForm = ()=>{
  store.changePopupCurrent('popup-form')
}



//HOOKS
onMounted(() => {
setTimeout(()=>{
    store.changeRouterChangeStatus(false)
  },200)
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