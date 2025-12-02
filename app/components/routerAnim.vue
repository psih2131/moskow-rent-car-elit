<template>
    <div class="router-change" >
       <div class="router-change__stap2" ref="elementStap2"></div>
    </div>
</template>

<script setup>
//IMPORT

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import { useCounterStore } from '@/stores/counter'

import { useNuxtApp } from '#app'


//DATA

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const stapValue = ref(0)

const elementStap2 = ref(null)

let timeAnim = 500;

//METHODS

async function animAction() {
  return new Promise((resolve) => {
    stapValue.value = 1;
    
    setTimeout(() => {
      elementStap2.value.style.transition = `all ease ${timeAnim / 1000}s`;
      elementStap2.value.style.height = '100%';

      setTimeout(() => {
        elementStap2.value.style.bottom = 'auto';
        elementStap2.value.style.top = '0';

        resolve();
      }, timeAnim);

    }, 200);
  });
};

const animEnd = () => {
    timeAnim = 1000
  return new Promise(resolve => {
    elementStap2.value.style.transition = `all ease ${timeAnim / 1000}s`;
    elementStap2.value.style.height = '0%';

    setTimeout(() => {
      store.changeRouterAnimStatus(false)
      resolve();
    }, +timeAnim);
  });
}


watch(() => store.routerChangeStatus, 
  async (newVal, oldVal) => {
    if(newVal == false){

        await animAction()

        await animEnd()

        console.log('ggg')
    }

  
  }
)

onMounted(() => {
  animAction()
});
</script>