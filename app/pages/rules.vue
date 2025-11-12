<template>
    <section class="rules-hero-sec">
      <div class="container">
        <div class="header-row-sec-v2">

            <div class="header-row-sec-v2__decor-wrapper">
              <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
            </div>
            
            <h2 class="car-adv-sec__title sec-title sec-title--center-mod"><b>УСЛОВИЯ </b> АРЕНДЫ АВТО</h2>
        </div>

        <div class="car-adv-sec__wrapper adv-row-v2">
          <div class="adv-element-v2">
            <div class="adv-element__icon-wrapper-v2">
              <img src="@/assets/images/img/ad1.svg" alt="" class="adv-element__icon-v2">
            </div>

            <p class="dv-element-v2__title">ВОЗРАСТ</p>
            <p class="dv-element-v2__subtitle">Водитель должен быть старше 20 лет </p>
          </div>

          <div class="adv-element-v2">
            <div class="adv-element__icon-wrapper-v2">
              <img src="@/assets/images/img/ad2.svg" alt="" class="adv-element__icon-v2">
            </div>

            <p class="dv-element-v2__title">СТАЖ</p>
            <p class="dv-element-v2__subtitle">Минимальный опыт вождения состовляет 2 года</p>
          </div>


          <div class="adv-element-v2">
            <div class="adv-element__icon-wrapper-v2">
              <img src="@/assets/images/img/ad3.svg" alt="" class="adv-element__icon-v2">
            </div>

            <p class="dv-element-v2__title">ДЛЯ ГРАЖДАН РФ</p>
            <p class="dv-element-v2__subtitle">Гражданский паспорт Водительское удостоверение</p>
          </div>

          <div class="adv-element-v2">
            <div class="adv-element__icon-wrapper-v2">
              <img src="@/assets/images/img/ad4.svg" alt="" class="adv-element__icon-v2">
            </div>

            <p class="dv-element-v2__title">ДЛЯ ИНОСТРАНЦЕВ</p>
            <p class="dv-element-v2__subtitle">Паспорт;<br>Водительское удостоверение;<br>Перевод документов и Регистрация на территории РФ.</p>
          </div>

        </div>
      </div>
    </section>


    <section class="rules-faq-sec">
        <div class="container">
            <div class="container">
            <div class="header-row-sec">
                <h2 class="header-row-sec__title sec-title sec-title--left-mod"><b>САМЫЕ </b> ЧАСТЫЕ ВОПРОСЫ</h2>

                <button class="home-hero-sec__btn btnV1 btnV1--big">
                    <span class="btnV1__circle btnV1__circle-1"></span>
                    <span class="btnV1__circle btnV1__circle-2"></span>
                    <span class="btnV1__title">ЗАДАТЬ СВОЙ ВОПРОС</span>

                    <div class="btnV1__line btnV1__line-1"></div>
                    <div class="btnV1__line btnV1__line-2"></div>
                    <div class="btnV1__line btnV1__line-3"></div>
                    <div class="btnV1__line btnV1__line-4"></div>
                </button>
            </div>

            <div class="faq-wrapper">

                <faqElement :title="'Нужен ли для аренды страховой депозит?'" :counter="'01'"/>

                <faqElement :title="'Где я могу эксплуатировать автомобиль?'" :counter="'02'"/>
                
                <faqElement :title="'Возможно ли оформить дополнительного водителя?'" :counter="'03'"/>
                
                <faqElement :title="'Как можно получить скидку на аренду автомобиля?'" :counter="'04'"/>

            </div>
            </div>
        </div>
    </section>


    <formSec />


</template>



<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

// import productCard from '@/components/component__producr-card.vue'

import carCard from '@/components/carCard.vue'

import faqElement from '@/components/faqElement.vue'

import formSec from '@/components/sections/formSec.vue'




//DATA
// const store = useCounterStore()

// const route = useRoute()





onMounted(() => {

})

</script>