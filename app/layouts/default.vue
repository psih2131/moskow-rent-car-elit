<template>
  
    <div class="app-wrapper">
        <componentHeader />
        
        <slot/>
    
        <componentFooter />

    </div>
  
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
import componentHeader from '@/components/header.vue'
import componentFooter from '@/components/footer.vue'


//DATA



//METHODS 







onMounted(() => {

  
});

onBeforeUnmount(() => {

});




</script>