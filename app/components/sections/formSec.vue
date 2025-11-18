<template>

    <section class="home-form-sec form-sec" v-if="formSecData">
        <div class="container">

            <div class="form-sec__data">
                <h2 class="form-sec__title sec-title sec-title--left-mod" v-html="formSecData.sekcziya_obratnoj_svyazi.zagolovok"></h2>
                <div class="form-sec__body">
                <p class="form-sec__subtitle" v-html="formSecData.sekcziya_obratnoj_svyazi.podzagolovok"></p>
                
                <div class="form-sec__contacts">

                    <a class="form-sec__contact social-contact-def" v-for="item in formSecData.sekcziya_obratnoj_svyazi.kontakty" :href="item.ssylka">
                        <div class="social-contact-def__icon">
                            <div class="social-contact-def__icon-wrapper">
                                <img :src="item.ikonka.url" :alt="item.ikonka.alt">

                            </div>
                        </div>

                        <div class="social-contact-def__info">
                            <p class="social-contact-def__value" v-html="item.zagolovok"></p>
                            <p class="social-contact-def__subvalue" v-html="item.podzagolovok"></p>
                            <p class="social-contact-def__extream" v-if="item.snoska" v-html="item.snoska"></p>
                        </div>

                    </a>



                </div>
                </div>
            </div>

            <div class="form-sec__img-wrapper">
            <img :src="formSecData.sekcziya_obratnoj_svyazi.izobrazhenie.url" :alt="formSecData.sekcziya_obratnoj_svyazi.izobrazhenie.alt" class="form-sec__img">
            </div>
        </div>
    </section>
    
</template>


<script setup>
    defineProps({
        formSecData: Object,
    })
</script>