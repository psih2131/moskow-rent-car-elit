<template>
    <main class="main" v-if="currentPartnershipData?.length > 0">

        <section class="singl-partner-about-sec" v-if="currentPartnershipData[0].acf.sekcziya_1_opisanie?.zagolovok">
            <div class="container">
                <div class="header-row-sec">
                    <h2 
                    class="singl-partner-about-sec__title sec-title sec-title--left-mod"
                    v-html="currentPartnershipData[0].acf.sekcziya_1_opisanie.zagolovok"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 2,
                    start: "top 70%",
                    }'></h2>

                    <button 
                    class="home-hero-sec__btn btnV1 btnV1--big" 
                    @click="openTargetPopupForm()"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 2.1,
                    start: "top 70%",
                    }'>
                        <span class="btnV1__circle btnV1__circle-1"></span>
                        <span class="btnV1__circle btnV1__circle-2"></span>
                        <span class="btnV1__title">ОСТАВИТЬ ЗАЯВКУ</span>

                        <div class="btnV1__line btnV1__line-1"></div>
                        <div class="btnV1__line btnV1__line-2"></div>
                        <div class="btnV1__line btnV1__line-3"></div>
                        <div class="btnV1__line btnV1__line-4"></div>
                    </button>
                </div>

                <div class="singl-partner-about-sec__wrapper">

                    <template v-for="(value, index) in currentPartnershipData[0].acf.sekcziya_1_opisanie.tekstovye_bloki">
                        <div 
                        class="info-data-row" 
                        v-if="index == 0" >
                            <div class="info-data-row__data">
                            <div class="wp-editor" 
                            v-html="value.tekst"
                            v-gsap.whenVisible.once.from='{
                            autoAlpha: 0,
                            y: 50,
                            duration: 0.5,
                            delay: 2.4,
                            start: "top 80%",
                            }'></div>
                            </div>
                            <div class="info-data-row__img-wrapper">
                            <img 
                            v-for="(item, inx) in value.kartinki"
                            :src="item.kartinka.url" 
                            :alt="item.kartinka.alt" 
                            class="info-data-row__img"
                            v-gsap.whenVisible.once.from='{
                            autoAlpha: 0,
                            y: 100,
                            duration: 0.5,
                            delay: 2.1 + ((inx + 1) / 10),
                            start: "top 80%",
                            }'>
                            </div>
                        </div>


                        <div 
                        class="info-data-row" 
                        v-else >
                            <div class="info-data-row__data">
                            <div class="wp-editor" 
                            v-html="value.tekst"
                            v-gsap.whenVisible.once.from='{
                            autoAlpha: 0,
                            y: 50,
                            duration: 0.5,
                            delay: 0.4,
                            start: "top 80%",
                            }'></div>
                            </div>
                            <div class="info-data-row__img-wrapper">
                            <img 
                            v-for="(item, inx) in value.kartinki"
                            :src="item.kartinka.url" 
                            :alt="item.kartinka.alt" 
                            class="info-data-row__img"
                            v-gsap.whenVisible.once.from='{
                            autoAlpha: 0,
                            y: 100,
                            duration: 0.5,
                            delay: 0.1 + ((inx + 1) / 10),
                            start: "top 80%",
                            }'>
                            </div>
                        </div>

                        
                    </template>
                    

                </div>
            </div>
        </section>

        <section class="singl-partner-how-it-work-sec" v-if="currentPartnershipData[0].acf['sekcziya_2_kak_eto_rabotaet']?.zagolovok">
            <div class="container">
                <div class="header-row-sec">
                    <h2 class="partners-how-it-work-sec__title sec-title sec-title--left-mod" 
                    v-html="currentPartnershipData[0].acf['sekcziya_2_kak_eto_rabotaet'].zagolovok"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.1,
                    start: "top 80%",
                    }'></h2>

                    <button class="home-hero-sec__btn btnV1 btnV1--big" 
                    @click="openTargetPopupForm()"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.2,
                    start: "top 80%",
                    }'>
                        <span class="btnV1__circle btnV1__circle-1"></span>
                        <span class="btnV1__circle btnV1__circle-2"></span>
                        <span class="btnV1__title">ОСТАВИТЬ ЗАЯВКУ</span>

                        <div class="btnV1__line btnV1__line-1"></div>
                        <div class="btnV1__line btnV1__line-2"></div>
                        <div class="btnV1__line btnV1__line-3"></div>
                        <div class="btnV1__line btnV1__line-4"></div>
                    </button>
                </div>

                <div class="partners-how-it-work-sec__row">

                    <div class="partners-how-it-work-sec__element" 
                    v-for="(value, index) in currentPartnershipData[0].acf['sekcziya_2_kak_eto_rabotaet'].shagi"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.1 + ((index + 1) / 10),
                    start: "top 80%",
                    }'>
                        <div class="partners-how-it-work-sec__element-counter">
                            0{{ index + 1 }}
                        </div>
                        <p class="partners-how-it-work-sec__element-title" v-html="value.zagolovok"></p>
                        <p class="partners-how-it-work-sec__element-description" v-html="value.tekst"></p>
                    </div>

                </div>
            </div>
        </section>

        <section class="singl-partner-how-start-sec" v-if="currentPartnershipData[0].acf.sekcziya_3_kak_nachat?.zagolovok">
            <div class="container">
                <div class="header-row-sec">
                    <h2 class="partners-how-start-sec__title sec-title sec-title--left-mod" 
                    v-html="currentPartnershipData[0].acf.sekcziya_3_kak_nachat.zagolovok"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.1,
                    start: "top 80%",
                    }'></h2>

                    <button class="home-hero-sec__btn btnV1 btnV1--big" 
                    @click="openTargetPopupForm()"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.2,
                    start: "top 80%",
                    }'>
                        <span class="btnV1__circle btnV1__circle-1"></span>
                        <span class="btnV1__circle btnV1__circle-2"></span>
                        <span class="btnV1__title">ОСТАВИТЬ ЗАЯВКУ</span>

                        <div class="btnV1__line btnV1__line-1"></div>
                        <div class="btnV1__line btnV1__line-2"></div>
                        <div class="btnV1__line btnV1__line-3"></div>
                        <div class="btnV1__line btnV1__line-4"></div>
                    </button>

                </div>

                <div class="partners-how-start-sec__row">
                    <div class="partners-how-start-sec__element" 
                    v-for="(value,index) in currentPartnershipData[0].acf.sekcziya_3_kak_nachat.shagi"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.1 + ((index + 1) / 10),
                    start: "top 80%",
                    }'>
                        <div class="partners-how-start-sec__element-header">
                            <div class="partners-how-start-sec__element-header-counter">0{{ index + 1 }}</div>
                            <p class="partners-how-start-sec__element-header-title" v-html="value.zagolovok"></p>
                        </div>
                        <div class="partners-how-start-sec__element-body">
                            <p class="partners-how-start-sec__element-body-description" v-html="value.tekst"></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <formSec :formSecData="optionsData" />

    </main>


</template>


<script setup>

//IMPORT

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import formSec from '@/components/sections/formSec.vue'

import { useCounterStore } from '@/stores/counter';

import { useNuxtApp } from '#app';



//DATA

const nuxtApp = useNuxtApp();

const store = useCounterStore(nuxtApp.$pinia);

const route = useRoute()

const { data: currentPartnershipData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/partnership?slug=${route.params.id}`)

const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

console.log('currentPartnershipData', currentPartnershipData)

console.log('optionsData', optionsData)



//METHODS

//Open form popup
const openTargetPopupForm = ()=>{
  store.changePopupCurrent('popup-form')
}


onMounted(() => {
setTimeout(()=>{
    store.changeRouterChangeStatus(false)
  },200)
})



//SEO
useHead({
    title: currentPartnershipData.value[0].acf.seo_title || currentPartnershipData.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: currentPartnershipData.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: currentPartnershipData.value[0].acf.klyuchevaya_fraza || 'Авто' },

        // OpenGraph
        { property: 'og:title', content: currentPartnershipData.value[0].acf.seo_title },
        { property: 'og:description', content: currentPartnershipData.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: currentPartnershipData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: currentPartnershipData.value[0].acf.seo_title },
        { name: 'twitter:description', content: currentPartnershipData.value[0].acf.seo_description },
        { name: 'twitter:image', content: currentPartnershipData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            currentPartnershipData.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/partners/${currentPartnershipData.value[0].acf.canonical || route.params.id}` }
    ]
})


</script>