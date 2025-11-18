<template>
  
    <div class="app-wrapper">
        <componentHeader />
        
        <slot/>
    
        <componentFooter />

         <popupsPlagin v-if="store.popupCurrent != null" />

    </div>
  
</template>

<script setup>

    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

    
    import componentHeader from '@/components/header.vue'
    import componentFooter from '@/components/footer.vue'
    import popupsPlagin from '@/components/popups/popups-parent.vue'



    import { useCounterStore } from '@/stores/counter'
    import { useNuxtApp } from '#app'

    const nuxtApp = useNuxtApp()
    const store = useCounterStore(nuxtApp.$pinia)

    const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

    store.changeOptionData(optionsData.value)


    // const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)
    // console.log('optionsData', optionsData)
    // store.changeOptionData(optionsData)



//DATA



//METHODS 




//HOOKS
watch(() => store.popupCurrent,  // отслеживаемое значение
  (newVal, oldVal) => {
    console.log('Значение изменилось:', oldVal, '→', newVal)
  }
)


onMounted(() => {

  
});

onBeforeUnmount(() => {

});




</script>