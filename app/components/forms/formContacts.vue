<template>
    <div class="contacts-sec__form-cont">
        <div class="contacts-sec__form-inp-wrapper" :class="{'form-error-field': formNameValidStatus == false}">
            <input v-model="formName" type="text" placeholder="Ваше имя">
            <p v-if="formNameValidStatus == false" class="form-valid-error">Проверьте правильность введенных данных</p>
        </div>

        <div class="contacts-sec__form-inp-wrapper" :class="{'form-error-field': formPhoneValidStatus == false}">
            <input v-model="formPhone" type="text" placeholder="Номер телефона" >
            <p v-if="formPhoneValidStatus == false" class="form-valid-error">Проверьте правильность введенных данных</p>
        </div>

        <div class="contacts-sec__form-inp-wrapper" >
            <input v-model="fotmText" type="text" placeholder="Что вас интересует?">
        </div>


        <div class="form-popup__checkbox-wrapper">

            <div class="checkbox-item-custom">

                <label class="checkbox-item-custom__wrapper">
                    <input type="checkbox" v-model="formPolitCheckbox">
                    <span class="checkbox-item-custom__box"></span>
                </label>

                <p class="checkbox-item-custom__text">Я согласен на <NuxtLink to="/docs/soglasie-na-obrabotku-personalnyh-dannyh">обработку персональных данных</NuxtLink> ,
                    <NuxtLink to="/system/soglashenie">пользовательское соглашение</NuxtLink> и <NuxtLink to="/docs/politika-konfidenczialnosti">политику конфиденциальности</NuxtLink> </p> 

                <p v-if="formPolitCheckbox == false && sendStatus == false" class="form-valid-error">Подтвердите согласие</p>
            </div>

        </div>

        <div class="contacts-sec__form-btn-wrapper">
            <button class="btnV2" @click="validationForm()">
                <div class="btnV2__wrapper">
                    Отправить заявку
                </div>
            </button>
        </div>

        <p v-if="sendStatus == false" class="form-valid-error-main">Ошибка, проверьте правильность введенных данных</p>
    </div>
</template>

<script setup>

//IMPORT
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';



//DATA
const show = ref(false)

const store = useCounterStore()

const formSecData = ref(null)

const formName = ref(null)

const formEmail = ref(null)

const formPhone = ref(null)

const fotmText = ref(null)

const formPolitCheckbox = ref(false)

// const formSpamCheckbox = ref(false)

const route = useRoute()

const formNameValidStatus = ref(null)

const formEmailValidStatus = ref(null)

const formPhoneValidStatus = ref(null)

const sendStatus = ref(null)



//METHODS 

function validationForm(){
    console.log(formName.value, formEmail.value, formPhone.value)

    validName(formName.value)

    // validEmail(formEmail.value)

    validPhone(formPhone.value)

    if(formNameValidStatus.value == true && formPhoneValidStatus.value == true && formPolitCheckbox.value == true){
        sendStatus.value = true
        
        sendForm()
    }
    else{
         sendStatus.value = false
    }
    
}

function validName(element) {
  if (element && element.length >= 3) {
    formNameValidStatus.value = true
  } else {
    formNameValidStatus.value = false
  }
}



function validPhone(phone) {
  // пример простой регулярки: только цифры, может начинаться с +, длина 10-15 символов
  const re = /^\+?\d{10,15}$/
  if (phone && re.test(phone)) {
    formPhoneValidStatus.value = true
  } else {
    formPhoneValidStatus.value = false
  }
}



//send request to telegram
const sendForm = async () => {
  try {
    const response = await $fetch('/api/send-form', {
      method: 'POST',
      body: {
        name: formName.value,
        text: fotmText.value,
        phone: formPhone.value,
        politConfirm: formPolitCheckbox.value,
        // spamConfirm: formSpamCheckbox.value,
        currentUrl: store.domainUrlCurrent + route.fullPath,
        currentPlase: store.trigerButtonForm || 'Не получилось оприделить точное положение'
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

    formName.value = null
    formPhone.value = null
    fotmText.value = null
    formPolitCheckbox.value = false

}



//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll
    show.value = true
    formSecData.value = store.optionsData

});



</script>