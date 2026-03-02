<template>
    <main class="main">

        <section class="contacts-sec" v-if="pageData && pageData.length > 0">
            <div class="container">

                <div class="header-row-sec-v2" v-if="pageData[0].acf.zagolovok">
                    <div class="header-row-sec-v2__decor-wrapper"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.1,
                
                    }'
                    >
                        <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
                    </div>
                    <h2 
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.2,
                
                    }'
                    class="contacts-sec__title sec-title sec-title--center-mod" v-html="pageData[0].acf.zagolovok"></h2>
                </div>

                <div class="contacts-sec__row">

                    <a 
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.3,
                
                    }'
                    :href="pageData[0].acf.telefon.ssylka" class="contacts-sec__contact social-contact-def social-contact-def--phone" v-if="pageData[0].acf?.telefon?.znachenie">
                        <div class="social-contact-def__icon">
                            <div class="social-contact-def__icon-wrapper">
                                <img :src="pageData[0].acf.telefon.ikonka.url" :alt="pageData[0].acf.telefon.ikonka.alt">
                            </div>
                        </div>

                        <div class="social-contact-def__info">
                            <p class="social-contact-def__value" v-html="pageData[0].acf.telefon.znachenie"></p>
                            <p class="social-contact-def__subvalue" 
                            v-if="pageData[0].acf.telefon.podzagolovok"
                            v-html="pageData[0].acf.telefon.podzagolovok"></p>
                        </div>
                    </a>

                    <a 
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.4,
                
                    }'
                    :href="pageData[0].acf.pochta.ssylka" class="contacts-sec__contact social-contact-def" v-if="pageData[0].acf?.pochta?.znachenie">
                        <div class="social-contact-def__icon">
                            <div class="social-contact-def__icon-wrapper">
                                <img :src="pageData[0].acf.pochta.ikonka.url" :alt="pageData[0].acf.pochta.ikonka.alt">
                            </div>
                        </div>

                        <div class="social-contact-def__info">
                            <p class="social-contact-def__value" v-html="pageData[0].acf.pochta.znachenie"></p>
                            <p class="social-contact-def__subvalue" 
                            v-if="pageData[0].acf.pochta.podzagolovok"
                            v-html="pageData[0].acf.pochta.podzagolovok"></p>
                        </div>
                    </a>

                    <div 
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.5,
                
                    }'
                    :href="pageData[0].acf.adres.ssylka" class="contacts-sec__contact social-contact-def social-contact-def--map" 
                    v-if="pageData[0].acf?.adres?.znachenie">
                        <div class="social-contact-def__icon">
                            <div class="social-contact-def__icon-wrapper">
                                <img :src="pageData[0].acf.adres.ikonka.url" :alt="pageData[0].acf.adres.ikonka.alt">
                            </div>
                        </div>

                        <div class="social-contact-def__info">
                            <p class="social-contact-def__value" v-html="pageData[0].acf.adres.znachenie"></p>
                            <p class="social-contact-def__worktime">Работаем круглосуточно</p>
                        </div>
                        
                    </div>

                    <div class="contacts-sec__social-row" v-if="pageData[0].acf.socz_seti?.length > 0">

                        <a 
                        v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.5 + ((index + 1) / 10),
                
                    }'
                        :href="item.ssylka" class="contacts-sec__contact social-contact-def" v-for="(item, index) in pageData[0].acf.socz_seti">
                            <div class="social-contact-def__icon">
                                <div class="social-contact-def__icon-wrapper">
                                    <img :src="item.ikonka.url" :alt="item.ikonka.alt">
                                </div>
                            </div>

                            <div class="social-contact-def__info" v-if="item.snoska">
                                <p class="social-contact-def__subvalue" v-html="item.snoska"></p>
                            </div>
                        </a>

                    </div>

                </div>

            </div>
            <div class="container contacts-sec__map-container">
                <div class="contacts-sec__map-wrapper" v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.8,
                
                    }'>
                    <div class="contacts-sec__map-wrapper-box">
                        <div class="contacts-sec__map" >
                    
                                <mapYandex 
                                v-if="pageData?.length > 0"
                                :mapData="pageData[0].acf" />
        
                        </div>

                        <div class="contacts-sec__form">
                            <div class="contacts-sec__form-wrapper">
                                <h2 class="contacts-sec__form-title sec-title" 
                                v-if="pageData[0].acf.zagolovok_formy" 
                                v-html="pageData[0].acf.zagolovok_formy"></h2>

                                <p class="contacts-sec__form-subtitle" 
                                v-if="pageData[0].acf.podzagolovok_formy"
                                v-html="pageData[0].acf.podzagolovok_formy"></p>

                                <formSecContacts />
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

    </main>
</template>





<script setup >
import {onMounted} from 'vue';

import formSecContacts from '@/components/forms/formContacts.vue'

import mapYandex from '@/components/maps/contactsPageMap.vue'

import { useNuxtApp } from '#app'


//DATA

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const route = useRoute()

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=kontakty`)

console.log('pageData', pageData)


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


<style scoped  lang="scss">

@import "@/assets/scss/contacts-page.scss";

</style>
