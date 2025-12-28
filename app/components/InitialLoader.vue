<template>
     <div class="initial-loader">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.initial-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white; /* фон можно поменять */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #eee;
  border-top: 4px solid #42b983; /* цвет спиннера */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>