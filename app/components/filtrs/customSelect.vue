<template>

   <!-- <Teleport to="body" v-if="show == true"> -->
    <Transition name="bg-fade-select">
        <div v-if="show == true" class="custom-select__wrapper-dark"></div>
    </Transition>
    <!-- </Teleport> -->

    <div class="custom-select" ref="box" :class="{'active': show == true}">
        
       <div class="custom-select__header" @click="openElement()" >
        <div class="custom-select__result">{{ totalValue }}</div>
        <div class="custom-select__ar">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292893 0.291664C0.683417 -0.0972213 1.31658 -0.0972213 1.70711 0.291664L7 5.56234L12.2929 0.291664C12.6834 -0.0972213 13.3166 -0.0972213 13.7071 0.291664C14.0976 0.680549 14.0976 1.31106 13.7071 1.69994L7.70711 7.67476C7.31658 8.06365 6.68342 8.06365 6.29289 7.67476L0.292893 1.69994C-0.0976311 1.31106 -0.0976311 0.680549 0.292893 0.291664Z" fill="#3F4F4F"/>
            </svg>
        </div>
       </div>

       <div class="custom-select__body" v-if="typeSelect && typeSelect == 'two'">
            <Vue3SlideUpDown v-model="show">
            <div class="custom-select__body-wrapper">
                <div class="custom-select__inp-value">
                    <input type="text" placeholder="От" v-model="value1" @input="onInput">
                </div>
                <span>-</span>
                <div class="custom-select__inp-value">
                    <input type="text" placeholder="До" v-model="value2" @input="onInput2">
                </div>

                <div class="custom-select__aprove" @click="selectValue()">
                   <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6644 0.252601C18.0772 0.619519 18.1143 1.25159 17.7474 1.66437L7.08075 13.6644C6.89099 13.8779 6.61898 14 6.33334 14C6.04771 14 5.7757 13.8779 5.58593 13.6644L0.252601 7.66437C-0.114317 7.25159 -0.077136 6.61952 0.335647 6.2526C0.74843 5.88568 1.3805 5.92286 1.74742 6.33565L6.33334 11.4948L16.2526 0.335647C16.6195 -0.077136 17.2516 -0.114317 17.6644 0.252601Z" fill="#F3C884"/>
                    </svg>


                </div>
            </div>
            </Vue3SlideUpDown>
       </div>

       <div class="custom-select__body custom-select__body-one" v-else-if="typeSelect && typeSelect == 'one'">
            <Vue3SlideUpDown v-model="show">
            <div class="custom-select__body-wrapper">
                <ul class="custom-select__list">
                    <li class="custom-select__list-element" v-for="(item,index) in valuesVariants" :key="index" @click="selectValueOne(index)">
                        {{item}}
                    </li>
                </ul>
            </div>
            </Vue3SlideUpDown>
       </div>
       
    </div>
</template>

<script setup>
    //IMPORT



    import { ref, onMounted, onBeforeUnmount, watch  } from 'vue';

    import { Vue3SlideUpDown } from "vue3-slide-up-down";

    import { useCounterStore } from '@/stores/counter'

    import { useNuxtApp } from '#app'


    const nuxtApp = useNuxtApp()

    const store = useCounterStore(nuxtApp.$pinia)


    const emit = defineEmits(['sendData'])

    const props = defineProps({
        placeholder: String,
        dopPlaceholder: String,
        typeSelect: String,
        valuesVariants: Array,
    })

    const box = ref(null)

    const show = ref(false);

    const textValue = ref(null)

    const value1 = ref(null)

    const value2 = ref(null)

    const totalValue = ref(props.placeholder)

    const activeIndex = ref(null)

    
    const onInput = (e) => {
        value1.value = e.target.value.replace(/\D/g, '')
    }

    const onInput2 = (e) => {
        value2.value = e.target.value.replace(/\D/g, '')
    }

    function openElement(){
        show.value = !show.value

        if(show.value == true){
            document.querySelector('.autopark-cars-sec__filtrs-row').style.transform = 'none'
        }
        else{
            document.querySelector('.autopark-cars-sec__filtrs-row').style.transform = 'translate(0px, 0px)'
        }
    }
    
    function selectValue(){
        if(value1.value || value2.value){
            
            if(!value1.value && value2.value){
                totalValue.value = `До ${value2.value} ${props.dopPlaceholder}`

                emit('sendData', {
                    'min': null,
                    'max': value2.value
                })
            }

            else if(value1.value && !value2.value){
                totalValue.value = `От ${value1.value} ${props.dopPlaceholder}`
                emit('sendData', {
                    'min': value1.value,
                    'max': null
                })
            }
            else{
                totalValue.value = `${value1.value} ${props.dopPlaceholder} - ${value2.value} ${props.dopPlaceholder}`

                emit('sendData', {
                    'min': value1.value,
                    'max': value2.value
                })
            }

            

        }
        else{
            totalValue.value = props.placeholder

            emit('sendData', {
                'min': null,
                'max': null
            })
        }

        

        show.value = false
    }

    function handleClickOutside(event) {
        if (box.value && !box.value.contains(event.target)) {
            console.log('Клик ВНЕ компонента')
            show.value = false
            
        }
    }

    function selectValueOne(index){
        activeIndex.value = index

        if(activeIndex.value || activeIndex.value == 0){
            totalValue.value = props.valuesVariants[+activeIndex.value]
        }
        else{
            totalValue.value = props.placeholder
        }

        emit('sendData', totalValue.value)
        console.log(index)
        show.value = false
    }

   watch(() => store.clearFiltrStatus, (newValue, oldValue) => {
    console.log('newValue', newValue)
    if(newValue == true){
        show.value = false
        value1.value = null
        value2.value = null
        totalValue.value = null
        activeIndex.value = null
        totalValue.value = props.placeholder
    }

  }
)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>


<style scoped  lang="scss">

@import "@/assets/scss/components/custom-select.scss";

</style>