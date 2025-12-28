<template>
    
    <div class="social-widget" ref="box" v-if="store.optionsData.socz_seti_dlya_vidzheta?.length > 0">
        <div class="pulse-anim"></div>
        <div class="pulse" @click="show = !show">
            <svg v-if="show == false" xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">  
                <path fill="#fff" d="M20.612 0H9.505C4.565 0 .56 4.433.56 9.895c0 4.368 2.558 8.064 6.105 9.38L10.916 24l3.803-4.206h5.893c4.942 0 8.947-4.43 8.947-9.899C29.559 4.433 25.553 0 20.612 0ZM8.154 11.998c-1.096 0-1.985-.98-1.985-2.195 0-1.211.889-2.196 1.985-2.196s1.985.984 1.985 2.196c0 1.214-.889 2.195-1.985 2.195Zm6.905 0c-1.096 0-1.985-.98-1.985-2.195 0-1.211.888-2.196 1.985-2.196 1.096 0 1.985.984 1.985 2.196 0 1.214-.89 2.195-1.985 2.195Zm6.905 0c-1.097 0-1.986-.98-1.986-2.195 0-1.211.889-2.196 1.986-2.196 1.096 0 1.985.984 1.985 2.196 0 1.214-.89 2.195-1.985 2.195Z"></path> 
            </svg>

            <svg v-else width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.61612 6.61612C7.10427 6.12796 7.89573 6.12796 8.38388 6.61612L15 13.2322L21.6161 6.61612C22.1043 6.12796 22.8957 6.12796 23.3839 6.61612C23.872 7.10427 23.872 7.89573 23.3839 8.38388L16.7678 15L23.3839 21.6161C23.872 22.1043 23.872 22.8957 23.3839 23.3839C22.8957 23.872 22.1043 23.872 21.6161 23.3839L15 16.7678L8.38388 23.3839C7.89573 23.872 7.10427 23.872 6.61612 23.3839C6.12796 22.8957 6.12796 22.1043 6.61612 21.6161L13.2322 15L6.61612 8.38388C6.12796 7.89573 6.12796 7.10427 6.61612 6.61612Z" fill="white"/>
            </svg>

        </div>

        <Vue3SlideUpDown v-model="show">
            <div class="social-widget__list">

                <a 
                v-for="value in store.optionsData.socz_seti_dlya_vidzheta"
                :href="value.ssylka" 
                class="social-widget__link" 
                target="_blank"
                >
                    <img :src="value.ikonka.url" :alt="value.ikonka.alt">
                </a>

            </div>
        </Vue3SlideUpDown>
    </div>
  
</template>

<script setup>

//IMPORT

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import { Vue3SlideUpDown } from "vue3-slide-up-down";

import { useCounterStore } from '@/stores/counter'

import { useNuxtApp } from '#app'


//DATA
const show = ref(false);

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const box = ref(null)


function handleClickOutside(event) {
    if (box.value && !box.value.contains(event.target)) {
        console.log('Клик ВНЕ компонента')
        show.value = false
        
    }
}


onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>