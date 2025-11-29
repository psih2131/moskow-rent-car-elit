import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useCounterStore = defineStore('counter', () => {
    const serverUrlDomainRequest = ref('http://rent-car.gearsdpz.beget.tech')

    const domainUrlCurrent = ref('http://rent-car.gearsdpz.beget.tech')

    const optionsData = ref(null)

    const popupCurrent = ref(null)

    const popupPayLoadData = ref(null)

    const preloaderStatus = ref(null)

    const clearFiltrStatus = ref(null)

    const changeOptionData = (newData) => {
        optionsData.value = newData
        console.log('new value store', optionsData.value)
    }

    function changePopupCurrent(newValue, payloadData) {
        popupCurrent.value = newValue

        if (payloadData) {
            popupPayLoadData.value = payloadData
        }

        console.log('popupCurrent', popupCurrent.value)
    }


    const changePreloaderStatus = (newData) => {
        preloaderStatus.value = newData
        console.log('new value store', preloaderStatus.value)
    }


    const changeClearFiltrStatus = (newData) => {
        clearFiltrStatus.value = newData
        console.log('new value store', clearFiltrStatus.value)
        setTimeout(() => {
            clearFiltrStatus.value = false
        }, 300)
    }



    return {
        serverUrlDomainRequest,
        optionsData,
        popupCurrent,
        popupPayLoadData,
        preloaderStatus,
        clearFiltrStatus,

        changeOptionData,
        changePopupCurrent,
        changePreloaderStatus,
        changeClearFiltrStatus,

    }
})