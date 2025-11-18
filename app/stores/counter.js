import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useCounterStore = defineStore('counter', () => {
    const serverUrlDomainRequest = ref('http://rent-car.gearsdpz.beget.tech')

    const domainUrlCurrent = ref('http://rent-car.gearsdpz.beget.tech')

    const optionsData = ref(null)

    const popupCurrent = ref(null)

    const popupPayLoadData = ref(null)

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




    return {
        serverUrlDomainRequest,
        optionsData,
        popupCurrent,
        popupPayLoadData,

        changeOptionData,
        changePopupCurrent,

    }
})