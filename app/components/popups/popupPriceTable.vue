<template>
    <Transition name="slide-fade">
    <div v-if="show" class="form-popup-price-table popup">
        <div class="popup__close" @click="closePopup()">
            <svg width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3279 19.3284C19.995 18.6612 21.0767 18.6612 21.7438 19.3284L28.9917 26.5762L36.2395 19.3284C36.9066 18.6613 37.9883 18.6613 38.6554 19.3284C39.3226 19.9955 39.3226 21.0772 38.6554 21.7443L31.4076 28.9922L38.6554 36.24C39.3226 36.9072 39.3226 37.9888 38.6554 38.656C37.9883 39.3231 36.9066 39.3231 36.2395 38.656L28.9917 31.4081L21.7438 38.656C21.0767 39.3231 19.995 39.3231 19.3279 38.656C18.6607 37.9888 18.6607 36.9072 19.3279 36.24L26.5757 28.9922L19.3279 21.7443C18.6607 21.0772 18.6607 19.9955 19.3279 19.3284Z" fill="white"/>
            </svg>

        </div>

        <div class="form-popup-price-table__wrapper">
            <div class="header-row-sec-v2">            
                <h2 class="home-our-client-sec__title sec-title sec-title--center-mod"><b>СТОИМОСТЬ </b> АРЕНДЫ</h2>
            </div>

            <div class="form-popup-price-table__table popup-table-price">

                <template v-if="tableData?.list?.length > 0">
                    <div class="popup-table-price__row" v-for="item in tableData.list">
                        <div class="popup-table-price__col">
                            <p class="popup-table-price__name"><span v-html="item.period"></span></p>
                        </div>
                        <div class="popup-table-price__col">
                            <div class="popup-table-price__value"><span v-html="item.czena"></span> ₽/сутки</div>
                        </div>
                    </div>
                </template>


                <template v-if="tableData?.list2?.length > 0">
                    <div class="popup-table-price__row" v-for="item in tableData.list2">
                        <div class="popup-table-price__col">
                            <p class="popup-table-price__name"><span v-html="item.period"></span></p>
                        </div>
                        <div class="popup-table-price__col">
                            <div class="popup-table-price__value"><span v-html="item.czena"></span> ₽/мес.</div>
                        </div>
                    </div>
                </template>
                
            </div>


            <div class="car-price-sec__dop-services dop-services-price"  v-if="tableData?.dop?.length > 0">

                <div class="dop-services-price__row" v-for="item in tableData.dop" >
                    <p class="dop-services-price__name"><span v-html="item.nazvanie_uslugi"></span>:</p>
                    <p class="dop-services-price__value" ><span v-html="item.stoimost"></span></p>
                </div>

            </div>

            <div class="form-popup-price-table__booking-car-row" v-if="tableData?.title">
                <p class="form-popup-price-table__car-title" v-html="addGoldGlimer(tableData.title)"></p>

                <button  class="home-hero-sec__btn btnV1 btnV1--big" @click="openTargetPopupForm('Кнопка забронирывать авто внутри развернутой таблицы с ценами внутри авто')">
                    <span class="btnV1__circle btnV1__circle-1"></span>
                    <span class="btnV1__circle btnV1__circle-2"></span>
                    <span class="btnV1__title">ЗАБРОНИРЫВАТЬ АВТО</span>

                    <div class="btnV1__line btnV1__line-1"></div>
                    <div class="btnV1__line btnV1__line-2"></div>
                    <div class="btnV1__line btnV1__line-3"></div>
                    <div class="btnV1__line btnV1__line-4"></div>
                </button>
            </div>

        </div>
        
    </div>
    </Transition>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
// import popupForm from '@/components/popups/popup__form.vue'


//DATA
const show = ref(false)

const store = useCounterStore()

const tableData = ref(null)

//METHODS 
function closePopup(){
     show.value = false
    setTimeout(()=>{
        store.changePopupCurrent(null)
    },800)
}

function addGoldGlimer(str){
   if (!str) return ''
  const words = str.split(' ')
  if (words.length === 0) return ''
  words[0] = `<b>${words[0]}</b>`
  return words.join(' ')
}


const openTargetPopupForm = (data = null)=>{
  store.changePopupCurrent('popup-form')
  store.changeTrigerButtonForm(data)
}


//HOOKS
onMounted(() => {
    show.value = true
  // Добавляем обработчик события scroll
    tableData.value = store.popupPayLoadData
  
});

onBeforeUnmount(() => {

});

</script>