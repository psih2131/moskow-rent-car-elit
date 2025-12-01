<template>
    <main class="main" v-if="currentDocsData?.length > 0">
        <section class="doc-sec">
            <div class="container">
                <div class="header-row-sec-v2">

                    <div class="header-row-sec-v2__decor-wrapper">
                    <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
                    </div>
                    
                    <h2 class="doc-sec__title sec-title sec-title--center-mod" v-html="currentDocsData[0].title.rendered"></h2>
                </div>

                <div class="doc-sec__text-wrapper wp-editor" v-html="currentDocsData[0].content.rendered"></div>
            </div>
        </section>
    </main>
</template>

<script setup>

//IMPORT

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import { useCounterStore } from '@/stores/counter';

import { useNuxtApp } from '#app';



//DATA

const nuxtApp = useNuxtApp();

const store = useCounterStore(nuxtApp.$pinia);

const route = useRoute()

const { data: currentDocsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/docs?slug=${route.params.id}`)

console.log('currentDocsData', currentDocsData)






//SEO
useHead({
    title: currentDocsData.value[0].acf.seo_title || currentDocsData.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: currentDocsData.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: currentDocsData.value[0].acf.klyuchevaya_fraza || 'Авто' },

        // OpenGraph
        { property: 'og:title', content: currentDocsData.value[0].acf.seo_title },
        { property: 'og:description', content: currentDocsData.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: currentDocsData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: currentDocsData.value[0].acf.seo_title },
        { name: 'twitter:description', content: currentDocsData.value[0].acf.seo_description },
        { name: 'twitter:image', content: currentDocsData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            currentDocsData.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/docs/${currentDocsData.value[0].acf.canonical || route.params.id}` }
    ]
})


</script>