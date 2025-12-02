<template>
  
    <div class="app-wrapper">
        <componentHeader />
        
        <slot/>
    
        <componentFooter />

        <popupsPlagin v-if="store.popupCurrent != null" />

        <preloader v-if="store.preloaderStatus == true" />

    </div>
  
</template>

<script setup>
//IMPORT

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import componentHeader from '@/components/header.vue'

import componentFooter from '@/components/footer.vue'

import popupsPlagin from '@/components/popups/popups-parent.vue'

import preloader from '@/components/preloader.vue'

import { useCounterStore } from '@/stores/counter'

import { useNuxtApp } from '#app'


//DATA

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

store.changeOptionData(optionsData.value)



//METHODS 



//HOOKS
watch(() => store.popupCurrent,  
  (newVal, oldVal) => {
    console.log('Значение изменилось:', oldVal, '→', newVal)
  }
)


watch(() => store.preloaderStatus, 
  (newVal, oldVal) => {
    console.log('Значение изменилось:', oldVal, '→', newVal)
  }
)


onMounted(() => {

  
});

onBeforeUnmount(() => {

});




</script>