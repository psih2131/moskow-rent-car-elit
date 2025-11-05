<template>
    <main class="main">

    </main>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

// import productCard from '@/components/component__producr-card.vue'





//DATA
// const store = useCounterStore()

// const route = useRoute()


</script>


<style >
/* swiper custom styles */
@media only screen and (min-width: 760px) {
   swiper-container::part(pagination) {
    opacity: 0;
   }
}
@media only screen and (max-width: 760px) {

  swiper-container::part(pagination) {
    bottom: 0px; 
  }

  swiper-container::part(bullet) {
    background-color:rgba(27, 55, 98, 0.20);
    opacity: 1;
    width: 8px;
    height: 8px;
    margin: 0 2px;
    border-radius: 50%;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  swiper-container::part(bullet-active) {
    background-color: #4471B4;
    width: 8px;
    height: 8px;
  }
  
}
</style>
