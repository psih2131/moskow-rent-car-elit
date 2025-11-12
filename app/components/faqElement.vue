<template>

    <div class="faq-element" :class="{'active': show}">
        <div class="faq-element__header" >
            <div class="faq-element__counter">{{counter}}</div>
            <p class="faq-element__title">{{ title }}</p>
            <div class="faq-element__btn" @click="show = !show">
                <span class="faq-element__btn-el faq-element__btn-el1"></span>
                <span class="faq-element__btn-el faq-element__btn-el2"></span>
            </div>
        </div>

         <Vue3SlideUpDown v-model="show">
            <div class="faq-element__body">
                <p class="faq-element__text">
                    Мерседес всегда был эталоном автомобилей класса премиум, а Мерседес Гелендваген особенно. Сила, мощь, агрессивный дизайн, черный цвет, грубые, но притягивающие черты, мощность в 571 л.с. и разгон до 100 км за 5,4 секунды – все это Гелендваген (или Гелик, как чаще всего его называют), чем все сказано. Любой праздник превратится в яркое событие, если вы возьмете в аренду Мерседес в Москве. Забудьте о серых и невзрачных праздниках без задора. 
                </p>
            </div>
        </Vue3SlideUpDown>
    </div>

   
    
</template>


<script setup>
    //IMPORT

    import { useCounterStore } from '@/stores/counter'

    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

    import { Vue3SlideUpDown } from "vue3-slide-up-down";

    const show = ref(false);


    //DATA
    defineProps({
    title: String,
    counter: String,
    })



</script>