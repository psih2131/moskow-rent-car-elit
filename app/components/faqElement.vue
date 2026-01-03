<template>

    <div class="faq-element" :class="{'active': show}">
        <div class="faq-element__header" @click="show = !show">
            <div class="faq-element__counter" v-if="counter">{{(getCurrentCounter(counter))}}</div>
            <p class="faq-element__title" v-if="title">{{ title }}</p>
            <div class="faq-element__btn" >
                <span class="faq-element__btn-el faq-element__btn-el1"></span>
                <span class="faq-element__btn-el faq-element__btn-el2"></span>
            </div>
        </div>

         <Vue3SlideUpDown v-model="show">
            <div class="faq-element__body">
                <p class="faq-element__text" v-if="description" v-html="description"></p>
            </div>
        </Vue3SlideUpDown>
    </div>

</template>


<script setup>
//IMPORT

import { ref } from 'vue';

import { Vue3SlideUpDown } from "vue3-slide-up-down";

const show = ref(false);


//DATA
defineProps({
title: String,
description: String,
counter: Number,
})

const getCurrentCounter = (data) =>{
    if(+data < 10){
        return '0' + data
    }
    else{
        return data
    }
}

</script>


<style scoped  lang="scss">

@import "@/assets/scss/components/faq-element.scss";

</style>