<template>
    <div class="popups-wrapper">
        <Transition name="bg-fade">
          <div v-if="show" class="popups-wrapper__bg"></div>
        </Transition>


        <popupPriceTable v-if="store.popupCurrent == 'popup-price-table'" />

        <popupVideo v-if="store.popupCurrent == 'popup-video'" />

        <popupForm v-if="store.popupCurrent == 'popup-form'" />

        <popupDone v-if="store.popupCurrent == 'popup-done'" />

        <popupFullReview v-if="store.popupCurrent == 'popup-full-review'" />

        <popupBooking v-if="store.popupCurrent == 'popup-booking'" />
        
    </div>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import popupPriceTable from '@/components/popups/popupPriceTable.vue'

import popupVideo from '@/components/popups/popupVideo.vue'

import popupForm from '@/components/popups/popupForm.vue'

import popupDone from '@/components/popups/popupDone.vue'

import popupFullReview from '@/components/popups/popupFullReview.vue'

import popupBooking from '@/components/popups/popupBooking.vue'

//DATA
const show = ref(false)

const store = useCounterStore()


//METHODS 



//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll
  show.value = true

  
});

onBeforeUnmount(() => {
  show.value = false
});

 const props = defineProps({
//   mainData: Object,
      // postAllCategory: Object,
  })

</script>