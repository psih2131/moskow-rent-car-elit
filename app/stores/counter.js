import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const serverUrlDomainRequest = ref('https://red-angels-server.ru')

    const domainUrlCurrent = ref('http://red-angels.ru')

    const optionsData = ref(null)

    const popupCurrent = ref(null)

    const routerAnimStatus = ref(false)

    const routerChangeStatus = ref(false)

    const popupPayLoadData = ref(null)

    const preloaderStatus = ref(null)

    const clearFiltrStatus = ref(null)

    const reviewTextPopup = ref(null)

    const trigerButtonForm = ref(null)

    const changeOptionData = (newData) => {
        optionsData.value = newData
        console.log('new value store', optionsData.value)
    }

    const changeRouterAnimStatus = (newData) => {
        routerAnimStatus.value = newData
        console.log('new value store', routerAnimStatus.value)
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

    const changeReviewTextPopup = (newData) => {
        reviewTextPopup.value = newData
        console.log('new value store', reviewTextPopup.value)
    }

    const changeRouterChangeStatus = (newData) => {
        routerChangeStatus.value = newData
        console.log('new value store', routerChangeStatus.value)
    }

    const changeTrigerButtonForm = (newData) => {
        trigerButtonForm.value = newData
        console.log('new value store', trigerButtonForm.value)
    }

    return {
        serverUrlDomainRequest,
        domainUrlCurrent,
        optionsData,
        popupCurrent,
        popupPayLoadData,
        preloaderStatus,
        clearFiltrStatus,
        reviewTextPopup,
        routerAnimStatus,
        routerChangeStatus,
        trigerButtonForm,


        changeOptionData,
        changePopupCurrent,
        changePreloaderStatus,
        changeClearFiltrStatus,
        changeReviewTextPopup,
        changeRouterAnimStatus,
        changeRouterChangeStatus,
        changeTrigerButtonForm,

    }
})