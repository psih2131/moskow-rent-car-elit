<template>
  <div class="app-container">
    
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
   

      
  </div>
</template>


<script setup>
import { ref, onMounted  } from 'vue';

onMounted(() => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
})


useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>