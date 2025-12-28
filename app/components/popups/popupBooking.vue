<template>

    <Transition name="slide-fade">
        <div v-if="show" class="popup-booking popup">
            <div class="popup__close" @click="closePopup()">
                <svg width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3279 19.3284C19.995 18.6612 21.0767 18.6612 21.7438 19.3284L28.9917 26.5762L36.2395 19.3284C36.9066 18.6613 37.9883 18.6613 38.6554 19.3284C39.3226 19.9955 39.3226 21.0772 38.6554 21.7443L31.4076 28.9922L38.6554 36.24C39.3226 36.9072 39.3226 37.9888 38.6554 38.656C37.9883 39.3231 36.9066 39.3231 36.2395 38.656L28.9917 31.4081L21.7438 38.656C21.0767 39.3231 19.995 39.3231 19.3279 38.656C18.6607 37.9888 18.6607 36.9072 19.3279 36.24L26.5757 28.9922L19.3279 21.7443C18.6607 21.0772 18.6607 19.9955 19.3279 19.3284Z" fill="white"/>
                </svg>

            </div>

            <div class="popup-booking__wrapper">
                <p class="popup-booking__title"><b>БРОНИРЫВАНИЕ</b> АВТО</p>
                <p class="popup-booking__subtitle">Выберите дату бронирывания, укажт номер телефона, отправте заявку и нажи специалисты свяжутся с вами</p>

                <div class="popup-booking__form">
                    <div class="booking-widget__date">
                        <VueDatePicker 
                        v-model="date" 
                        range 
                       
                        dark 
                        :locale="ru"
                        :placeholder="'Дата аренды'"
                        :formats="{ input: 'dd.MM.yyyy' }"
                        class="dp__theme_dark"
                        ></VueDatePicker>
                    </div>

                    <div class="booking-widget__input">
                        <input 
                        class="booking-widget__input-inp" 
                        placeholder="Номер телефона"
                        type="tel"
                        v-model="phone"
                        @input="onInput"
                        @keydown="onKeydown"
                        :class="{'validation-error': formPhoneValidStatus == false}"
                        >
                    </div>

                    <button class="home-hero-sec__btn btnV1 btnV1--big btnV1--blick" @click="validationForm">
                        <span class="btnV1__circle btnV1__circle-1"></span>
                        <span class="btnV1__circle btnV1__circle-2"></span>
                        <span class="btnV1__title">ЗАБРОНИРЫВАТЬ</span>

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


import { VueDatePicker } from '@vuepic/vue-datepicker';

import { format } from 'date-fns'

import { ru } from 'date-fns/locale'

import '@vuepic/vue-datepicker/dist/main.css'


//DATA
const show = ref(false)

const store = useCounterStore()

const route = useRoute()

const date = ref();

const phone = ref('')

const formPhoneValidStatus = ref(null)

let isDeleting = false


//METHODS 
function closePopup(){
    show.value = false
    setTimeout(()=>{
        store.changePopupCurrent(null)
    },800)

}

function onKeydown(e) {
  isDeleting = e.key === 'Backspace' || e.key === 'Delete'
}

function onInput(e) {
  const input = e.target

  if (isDeleting) {
    phone.value = input.value
    isDeleting = false
    return
  }

  let digits = input.value.replace(/\D/g, '')

  if (digits.length === 0) {
    phone.value = ''
    return
  }

  if (digits.startsWith('8')) digits = '7' + digits.slice(1)
  if (!digits.startsWith('7')) digits = '7' + digits

  digits = digits.slice(0, 11)

  let formatted = '+7'

  if (digits.length > 1) formatted += ' (' + digits.slice(1, 4)
  if (digits.length >= 4) formatted += ') ' + digits.slice(4, 7)
  if (digits.length >= 7) formatted += '-' + digits.slice(7, 9)
  if (digits.length >= 9) formatted += '-' + digits.slice(9, 11)

  phone.value = formatted
}


function validationForm(){

    validPhone(phone.value)

    if(formPhoneValidStatus.value == true){
        
        sendForm()
    }
    
}

function validPhone(phone) {

  if (phone?.length > 17) {
    formPhoneValidStatus.value = true
  } else {
    formPhoneValidStatus.value = false
  }
}


//send request to telegram
const sendForm = async () => {
  try {
    const response = await $fetch('/api/send-form-widget', {
      method: 'POST',
      body: {
        date: date.value,
        phone: phone.value,
        // politConfirm: formPolitCheckbox.value,
        // spamConfirm: formSpamCheckbox.value,
        currentUrl: store.domainUrlCurrent + route.fullPath,
        currentPlase: 'Форма бронирывания на странице авто'
      },
    })

    // Теперь response содержит ответ с сервера
    console.log('Ответ от сервера:', response)

    // sendFormAmmo()
    openFormDonePopup()


  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
    alert('Произошла ошибка при отправке заявки')
  }
}



//open form popup 
function openFormDonePopup(){
    store.changePopupCurrent('popup-done')
    store.changeTrigerButtonForm(null)

    date.value = null
phone.value = null
}




//HOOKS
watch(() => store.popupCloseAll,(newVal, oldVal) => {
    closePopup()
    console.log('gg')
  }
)

onMounted(() => {
  // Добавляем обработчик события scroll
    show.value = true

    let socialwidget = document.querySelector('.social-widget')

    if(socialwidget){
        socialwidget.classList.add('hide-widget')
    }

});

onBeforeUnmount(()=>{

    let socialwidget = document.querySelector('.social-widget')

    if(socialwidget){
        socialwidget.remove('hide-widget')
    }
})

</script>


<style scoped>
:deep(.dp__theme_dark) {
  --dp-background-color: #151D24;
  --dp-text-color: #CFCFCF;
  --dp-hover-color: #3F4F4F;
  --dp-hover-text-color: #fff;
  --dp-hover-icon-color: #CFCFCF;
  --dp-primary-color: #5D736E;
  --dp-primary-disabled-color: #F1BD81;
  --dp-primary-text-color: #fff;
  --dp-secondary-color: #a9a9a9;
  --dp-border-color: #2d2d2d;
  --dp-menu-border-color: #2d2d2d;
  --dp-border-color-hover: #aaaeb7;
  --dp-border-color-focus: #aaaeb7;
  --dp-disabled-color: #737373;
  --dp-disabled-color-text: #d0d0d0;
  --dp-scroll-bar-background: #151D24;
  --dp-scroll-bar-color: #484848;
  --dp-success-color: #00701a;
  --dp-success-color-disabled: #428f59;
  --dp-icon-color: #959595;
  --dp-danger-color: #e53935;
  --dp-marker-color: #e53935;
  --dp-tooltip-color: #3e3e3e;
  --dp-highlight-color: rgb(0 92 178 / 20%);
  --dp-range-between-dates-background-color: var(--dp-hover-color);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color);
  --dp-range-between-border-color: var(--dp-hover-color);
}
</style>