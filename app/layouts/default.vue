<template>
  
    <div class="app-wrapper">



       <div class="initial-loader" id="initialLoader">
          <div class="initial-loader__logo">
            <div class="initial-loader__logo-row">
              <span>R</span>
              <span>E</span>
              <span>D</span>
              <span class="space-logo"></span>
              <span>A</span>
              <span>N</span>
              <span>G</span>
              <span>E</span>
              <span>L</span>
              <span>S</span>
            </div>
          </div>
        </div>


       
        <componentHeader />
        
        <slot/>
    
        <componentFooter />



        <ClientOnly>

              <popupsPlagin v-if="store.popupCurrent != null" />

              <preloader v-if="store.preloaderStatus == true" />

              <socialContactWidget v-if="showWidget" />

              <cookieWidget />

              <customCursor />

        </ClientOnly>

        

        

        <!-- <routerAnim v-if="store.routerAnimStatus == true" /> -->
                   
        

        

    </div>
  
</template>


<script setup>
//IMPORT

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import componentHeader from '@/components/header.vue'

import componentFooter from '@/components/footer.vue'

import popupsPlagin from '@/components/popups/popups-parent.vue'

import preloader from '@/components/preloader.vue'

import socialContactWidget from '@/components/widgets/socialContactWidget.vue'

// import routerAnim from '@/components/routerAnim.vue'

import customCursor from '@/components/customCursor.vue'

import cookieWidget from '@/components/widgets/cookieWidget.vue'




import { useCounterStore } from '@/stores/counter'

import { useNuxtApp } from '#app'


//DATA

const nuxtApp = useNuxtApp()

const store = useCounterStore(nuxtApp.$pinia)

const router = useRouter()

const route = useRoute()

const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

const showClientsComponentsStatus = ref(false)

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


watch(() => store.routerChangeStatus, 
  async (newVal, oldVal) => {
    if(newVal == false){
      setTimeout(()=>{
        store.changePreloaderStatus(false)
      },200)
        
    }
    else{
      store.changePreloaderStatus(true)
    }

  
  }
)


router.beforeEach((to, from) => {
  store.changeRouterChangeStatus(true)
  store.changeRouterAnimStatus(true)
  console.log('начало перехода к роуту')
  store.changePreloaderStatus(true)
})

router.afterEach((to, from) => {
  
  console.log('конец перехода к роуту')
   
  

})

// Проверка: показывать виджет только если путь не равен /autopark/test и не начинается с /autopark/
const showWidget = computed(() => {
  // route.path — это текущий путь, например: /autopark/123
  return !route.path.startsWith('/autopark')
})

onMounted(async () => {
  requestAnimationFrame(() => {
    const loader = document.getElementById('initialLoader')
    if (loader) loader.classList.add('hidden')
  })


});

</script>

