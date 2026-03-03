<template>
    
    <div class="booking-widget">
        <div class="container">

          <div class="checkbox-item-custom">

                <label class="checkbox-item-custom__wrapper">
                    <input type="checkbox" v-model="formPolitCheckbox">
                    <span class="checkbox-item-custom__box"></span>
                </label>

                  <p class="checkbox-item-custom__text">Я согласен на <NuxtLink to="/docs/obrabotka-personalnyh-dannyh">обработку персональных данных</NuxtLink> 
                    и <NuxtLink to="/docs/politika-konfidenczialnosti">политику конфиденциальности</NuxtLink>   
                    <span v-if="formPolitCheckbox == false && sendStatus == false" class="form-valid-error">Подтвердите согласие</span></p>  

                
            </div>

            <div class="booking-widget__form">
                <div class="booking-widget__date">

                  <ClientOnly placeholder="">
                    <div>
                      <VueDatePicker 
                    v-model="date" 
                    range 
                    multi-calendars
                    dark 
                    :locale="ru"
                    :placeholder="'Дата аренды'"
                    :formats="{ input: 'dd.MM.yyyy' }"
                    class="dp__theme_dark"
                    ></VueDatePicker>
                    </div>
                  </ClientOnly>
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
                    <span class="btnV1__title">ЗАБРОНИРОВАТЬ</span>

                    <div class="btnV1__line btnV1__line-1"></div>
                    <div class="btnV1__line btnV1__line-2"></div>
                    <div class="btnV1__line btnV1__line-3"></div>
                    <div class="btnV1__line btnV1__line-4"></div>
                </button>

                
            </div>

            <button class="home-hero-sec__btn btnV1 btnV1--big booking-widget__ipad btnV1--blick" @click="openPopupBooking">
                <span class="btnV1__circle btnV1__circle-1"></span>
                <span class="btnV1__circle btnV1__circle-2"></span>
                <span class="btnV1__title">ЗАБРОНИРОВАТЬ</span>

                <div class="btnV1__line btnV1__line-1"></div>
                <div class="btnV1__line btnV1__line-2"></div>
                <div class="btnV1__line btnV1__line-3"></div>
                <div class="btnV1__line btnV1__line-4"></div>
            </button>

            <div class="booking-widget__social-row" v-if="formSecData">

                <p class="booking-widget__social-row-text">
                    Или напишите нам:
                </p>

                <a class="form-sec__contact social-contact-def" v-for="item in formSecData.sekcziya_obratnoj_svyazi.kontakty" :href="item.ssylka">
                    <div class="social-contact-def__icon">
                        <div class="social-contact-def__icon-wrapper">
                            <img :src="item.ikonka.url" :alt="item.ikonka.alt">

                        </div>
                    </div>

                    <!-- <div class="social-contact-def__info">
                        <p class="social-contact-def__value" v-html="item.zagolovok"></p>
                        <p class="social-contact-def__subvalue" v-html="item.podzagolovok"></p>
                        <p class="social-contact-def__extream" v-if="item.snoska" v-html="item.snoska"></p>
                    </div> -->

                </a>

            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted,onUnmounted  } from 'vue';

import { VueDatePicker } from '@vuepic/vue-datepicker';

import { format } from 'date-fns'

import { ru } from 'date-fns/locale'

import '@vuepic/vue-datepicker/dist/main.css'

import { useCounterStore } from '@/stores/counter'


const store = useCounterStore()

const route = useRoute()

const formSecData = ref(null)

const date = ref();

const phone = ref('')

const formPolitCheckbox = ref(false)

const formPhoneValidStatus = ref(null)

const sendStatus = ref(null)

let isDeleting = false

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

         if(formPhoneValidStatus.value == true && formPolitCheckbox.value == true){
            sendStatus.value = true
            
            sendForm()
        }
        else{
            sendStatus.value = false
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

function openPopupBooking(){
    store.changePopupCurrent('popup-booking')
    store.changeTrigerButtonForm('форма бронирывание на сранице авто')
}



//HOOKS
onMounted(() => {
    formSecData.value = store.optionsData

    let socialwidget = document.querySelector('.social-widget')

    if(socialwidget){
        socialwidget.classList.add('hide-widget')
    }
    
});

onUnmounted(()=>{

    let socialwidget = document.querySelector('.social-widget')

    if(socialwidget){
        socialwidget.classList.remove('hide-widget')
    }
})

</script>





