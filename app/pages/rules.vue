<template v-if="pageData && pageData.length > 0">

    <section class="rules-hero-sec" v-if="pageData[0].acf.sekcziya_1_usloviya.zagolovok">
      <div class="container">
        <div class="header-row-sec-v2">

            <div class="header-row-sec-v2__decor-wrapper"
            v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 50,
                  duration: 0.5,
                  delay: 0.1,
            
                }'>
              <img 
              
              src="@/assets/images/img/decor.png" 
              alt="" 
              class="header-row-sec-v2__decor"></img>
            </div>
            
            <h2
             v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 50,
                  duration: 0.5,
                  delay: 0.1,
            
                }'
              class="car-adv-sec__title sec-title sec-title--center-mod" v-html="pageData[0].acf.sekcziya_1_usloviya.zagolovok"></h2>
        </div>

        <div class="car-adv-sec__wrapper adv-row-v2">
          <div class="adv-element-v2" 
           v-gsap.whenVisible.once.from='{
              autoAlpha: 0,
              y: 50,
              duration: 0.5,
              delay: 0.1 + ((index + 1) / 10),
        
            }'
          v-for="(item, index) in pageData[0].acf.sekcziya_1_usloviya.usloviya">
            <div class="adv-element__icon-wrapper-v2">
              <img :src="item.ikonka.url" :alt="item.ikonka.alt" class="adv-element__icon-v2">
            </div>

            <p class="dv-element-v2__title" v-html="item.zagolovok"></p>
            <p class="dv-element-v2__subtitle" v-html="item.opisanie"></p>
          </div>

        </div>
      </div>
    </section>


    <section class="rules-faq-sec" v-if="pageData[0].acf.sekcziya_2_voprosy.zagolovok">
        <div class="container">
            <div class="container">
            <div class="header-row-sec">
                <h2 class="header-row-sec__title sec-title sec-title--left-mod"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 50,
                  duration: 0.5,
                  delay: 0.1,
            
                }' 
                v-html="pageData[0].acf.sekcziya_2_voprosy.zagolovok"></h2>

                <button class="home-hero-sec__btn btnV1 btnV1--big btnV1--blick"
                v-gsap.whenVisible.once.from='{
                  autoAlpha: 0,
                  y: 50,
                  duration: 0.5,
                  delay: 0.2,
            
                }'
                  @click="openTargetPopupForm()">
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

                <template v-for="(item,index) in pageData[0].acf.sekcziya_2_voprosy.spisok_voprosov"
                >
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
        </div>
    </section>


    <formSec :formSecData="optionsData" />


</template>



<script setup>

//IMPORT

import { ref, onMounted  } from 'vue';

import faqElement from '@/components/faqElement.vue'

import formSec from '@/components/sections/formSec.vue'

import { useCounterStore } from '@/stores/counter'

import { useNuxtApp } from '#app'



//DATA

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const route = useRoute()

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=usloviya-arendy`)

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