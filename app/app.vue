<template>
  <div class="app-container">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <cursor />

      
  </div>
</template>


<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>