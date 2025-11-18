<template>

    <Transition name="slide-fade">
        <div v-if="show" class="popup-form popup">
            <div class="popup__close" @click="closePopup()">
                <svg width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3279 19.3284C19.995 18.6612 21.0767 18.6612 21.7438 19.3284L28.9917 26.5762L36.2395 19.3284C36.9066 18.6613 37.9883 18.6613 38.6554 19.3284C39.3226 19.9955 39.3226 21.0772 38.6554 21.7443L31.4076 28.9922L38.6554 36.24C39.3226 36.9072 39.3226 37.9888 38.6554 38.656C37.9883 39.3231 36.9066 39.3231 36.2395 38.656L28.9917 31.4081L21.7438 38.656C21.0767 39.3231 19.995 39.3231 19.3279 38.656C18.6607 37.9888 18.6607 36.9072 19.3279 36.24L26.5757 28.9922L19.3279 21.7443C18.6607 21.0772 18.6607 19.9955 19.3279 19.3284Z" fill="white"/>
                </svg>

            </div>

            <div class="popup-form__wrapper">
                <div class="header-row-sec-v2">            
                    <h2 class="home-our-client-sec__title sec-title sec-title--center-mod"><b>ОСТАВТЕ </b> ЗАЯВКУ</h2>
                </div>
                <p class="contacts-sec__form-subtitle">Наши менеджеры свяжутся с вами и ответят на все вопросы</p>

                <div class="popup-form__fields-wrapper">

                    <div class="contacts-sec__form-inp-wrapper">
                        <input type="text" placeholder="Ваше имя">
                    </div>

                    <div class="contacts-sec__form-inp-wrapper">
                        <input type="text" placeholder="Номер телефона или telegram">
                    </div>

                    <div class="contacts-sec__form-inp-wrapper">
                        <input type="text" placeholder="Что вас интересует?">
                    </div>

                    <div class="contacts-sec__form-btn-wrapper">
                        <button class="btnV2" @click="openTargetPopupDone()">
                            <div class="btnV2__wrapper">
                                Отправить заявку
                            </div>
                        </button>
                    </div>

                </div>

                <div class="popup-form__contacts-wrapper">
                    <p class="popup-form__contacts-wrapper-title">Или свяжитесь нам сами</p>

                    <div class="popup-form__contacts-wrapper-row">

                        <a class="form-sec__contact social-contact-def" v-for="item in formSecData.sekcziya_obratnoj_svyazi.kontakty" :href="item.ssylka">
                            <div class="social-contact-def__icon">
                                <div class="social-contact-def__icon-wrapper">
                                    <img :src="item.ikonka.url" :alt="item.ikonka.alt">

                                </div>
                            </div>

                            <div class="social-contact-def__info">
                                <p class="social-contact-def__value" v-html="item.zagolovok"></p>
                                <p class="social-contact-def__subvalue" v-html="item.podzagolovok"></p>
                                <p class="social-contact-def__extream" v-if="item.snoska" v-html="item.snoska"></p>
                            </div>

                        </a>

                    </div>
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

const formSecData = ref(null)


//METHODS 
function closePopup(){
    show.value = false
    setTimeout(()=>{
        store.changePopupCurrent(null)
    },800)

}

const openTargetPopupDone = ()=>{
  store.changePopupCurrent('popup-done')
}

//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll
    show.value = true
    formSecData.value = store.optionsData

   
  
  
});

onBeforeUnmount(() => {

})

</script>