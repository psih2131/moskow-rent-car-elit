<template>
    <main class="main" v-if="pageData?.length > 0">

        <section class="hero-partners-sec" v-if="partnersChield?.length > 0">
            <div class="container">

                <div class="hero-partners-sec__row" v-for="value in partnersChield">
                    
                    <div class="seo-sec-type-1__images">
                        <img v-for="item in value.acf.izobrazheniya_kartochki"
                        :src="item.kartinka.url" :alt="item.kartinka.alt" class="seo-sec-type-1__img" >
                    </div>

                    <div class="seo-sec-type-1__data">
                        <h1 class="hero-partners-sec__title sec-title sec-title--left-mod sec-title--capitalize-mod" v-if="value.acf.zagolovok" v-html="value.acf.zagolovok"></h1>

                        <div class="seo-sec-type-1__text-container">
                        <div v-if="value.acf.korotkoe_opisanie"
                            class="seo-sec-type-1__text-wrapper">
                            <div class="wp-editor seo-sec-type-1__editor" ref="editor">
                                <p v-html="value.acf.korotkoe_opisanie"></p>
                            </div>
                        </div>

                        <NuxtLink :to="`/partners/${value.slug}`" class="hero-partners-sec__btn btnV1 btnV1--big">
                            <span class="btnV1__circle btnV1__circle-1"></span>
                            <span class="btnV1__circle btnV1__circle-2"></span>
                            <span class="btnV1__title">{{ value.acf.tekst_knopki }}</span>

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

        <section class="partners-exm-sec" v-if="pageData[0].acf['sekcziya_2_-_primery_zarabotka'].zagolovok" >
            <div class="container">
                <div class="header-row-sec">
                    <h2 class="partners-exm-sec__title sec-title sec-title--left-mod" v-html="pageData[0].acf['sekcziya_2_-_primery_zarabotka'].zagolovok"></h2>

                    <button class="home-hero-sec__btn btnV1 btnV1--big" @click="openTargetPopupForm">
                        <span class="btnV1__circle btnV1__circle-1"></span>
                        <span class="btnV1__circle btnV1__circle-2"></span>
                        <span class="btnV1__title">РАСЧИТАТЬ ДОХОД</span>

                        <div class="btnV1__line btnV1__line-1"></div>
                        <div class="btnV1__line btnV1__line-2"></div>
                        <div class="btnV1__line btnV1__line-3"></div>
                        <div class="btnV1__line btnV1__line-4"></div>
                    </button>
                </div>

                <div class="partners-exm-sec__row">

                    <div class="partners-exm-sec__element" v-for="value in pageData[0].acf['sekcziya_2_-_primery_zarabotka'].primery">
                        <div class="partners-exm-sec__element-wrapper">
                        <img 
                        :src="value.kartinka.url" 
                        :alt="value.kartinka.alt" class="partners-exm-sec__element-img">
                        <div class="partners-exm-sec__element-data">
                            <div class="partners-exm-sec__element-header">
                                <p class="partners-exm-sec__element-subtitle" v-html="value.podzagolovok"></p>
                                <p class="partners-exm-sec__element-title" v-html="value.zagolovok_avto"></p>
                            </div>
                            <ul class="partners-exm-sec__element-list">
                                <li class="partners-exm-sec__element-list-element" v-for="item in value.tablicza"
                                :class="{'active':item.tip_stroki == 'active'}">
                                    <span class="partners-exm-sec__element-list-element-name" v-html="item.nazvanite"></span>
                                    <span class="partners-exm-sec__element-list-element-value" v-html="item.znachenie"></span>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section class="partners-how-it-work-sec" v-if="pageData[0].acf['sekcziya_3_-_kak_eto_rabotaet'].zagolovok">
            <div class="container">
                <div class="header-row-sec">
                    <h2 class="partners-how-it-work-sec__title sec-title sec-title--left-mod" v-html="pageData[0].acf['sekcziya_3_-_kak_eto_rabotaet'].zagolovok"></h2>

                    <button class="home-hero-sec__btn btnV1 btnV1--big" @click="openTargetPopupForm()">
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

                    <div class="partners-how-it-work-sec__element" v-for="(value, index) in pageData[0].acf['sekcziya_3_-_kak_eto_rabotaet'].shagi">
                        <div class="partners-how-it-work-sec__element-counter">
                            0{{ index + 1 }}
                        </div>
                        <p class="partners-how-it-work-sec__element-title" v-html="value.zagolovok"></p>
                        <p class="partners-how-it-work-sec__element-description" v-html="value.tekst"></p>
                    </div>

                </div>
            </div>
        </section>

        <section class="partners-adv-sec" v-if="pageData[0].acf['sekcziya_4_preimushhestva'].zagolovok">
            <div class="container">
                <div class="header-row-sec-v2">
                    <div class="header-row-sec-v2__decor-wrapper">
                    <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
                    </div>
                    
                    <h2 class="car-adv-sec__title sec-title sec-title--center-mod" v-html="pageData[0].acf['sekcziya_4_preimushhestva'].zagolovok"></h2>
                </div>

                <div class="car-adv-sec__wrapper adv-row-v2">
                    <div class="adv-element-v2" v-for="value in pageData[0].acf['sekcziya_4_preimushhestva'].preimushhestva">
                        <div class="adv-element__icon-wrapper-v2">
                            <img :src="value.ikonka.url" :alt="value.ikonka.alt" class="adv-element__icon-v2">
                        </div>

                        <p class="dv-element-v2__title" v-html="value.zagolovok"></p>
                        <p class="dv-element-v2__subtitle" v-html="value.podzagolovok"></p>
                    </div>
                </div>
            </div>
        </section>

        <section class="partners-how-start-sec" v-if="pageData[0].acf.sekcziya_5_kak_nachat.zagolovok">
            <div class="container">
                <div class="header-row-sec">
                    <h2 class="partners-how-start-sec__title sec-title sec-title--left-mod" v-html="pageData[0].acf.sekcziya_5_kak_nachat.zagolovok"></h2>

                    <button class="home-hero-sec__btn btnV1 btnV1--big" @click="openTargetPopupForm()">
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
                    <div class="partners-how-start-sec__element" v-for="(value,index) in pageData[0].acf.sekcziya_5_kak_nachat.shagi">
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

        <section class="partners-faq-sec car-faq-sec" v-if="pageData[0].acf.sekcziya_6_voprosy.zagolovok">
            <div class="container">
            <div class="header-row-sec">
                <h2 class="header-row-sec__title sec-title sec-title--left-mod" v-html="pageData[0].acf.sekcziya_6_voprosy.zagolovok"></h2>

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

                <template v-for="(item,index) in pageData[0].acf.sekcziya_6_voprosy.voprosy">
                    <faqElement :title="item.vopros" :counter="+index+1" :description="item.otvet"/>
                </template>

            </div>
            </div>
        </section>

        <formSec :formSecData="optionsData" />

    </main>

</template>


<script setup >

//IMPORT

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import faqElement from '@/components/faqElement.vue';

import formSec from '@/components/sections/formSec.vue';

import { useCounterStore } from '@/stores/counter';

import { useNuxtApp } from '#app';



//DATA

const nuxtApp = useNuxtApp();

const store = useCounterStore(nuxtApp.$pinia);

const route = useRoute()

const partnersChield = ref(null)

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=partnerstvo`)

const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

if(pageData.value[0].acf?.sekcziya_1_tipy_partnerstva?.length >0){

// получаем рекомендованные посты
try {
  const mainPost = pageData.value?.[0]
  const chitatTakzhe = mainPost?.acf?.sekcziya_1_tipy_partnerstva

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/partnership?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    partnersChield.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}

console.log('partnersChield', partnersChield)
}


console.log('pageData', pageData)

console.log('optionsData', optionsData)



//METHODS

//Open form popup
const openTargetPopupForm = ()=>{
  store.changePopupCurrent('popup-form')
}


//HOOKS
onMounted(() => {

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