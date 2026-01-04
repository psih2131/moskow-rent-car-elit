<template>

    <template v-if="animStatusDisable == true">
        <section class="home-form-sec form-sec" v-if="formSecData">
            <div class="container">

                <div class="form-sec__data">
                    <div 
                    class="header-row-sec-v2__decor-wrapper">
                    <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
                    </div>
                    <h2 class="form-sec__title sec-title sec-title--left-mod" 
                    v-html="formSecData.sekcziya_obratnoj_svyazi.zagolovok"></h2>
                    <div class="form-sec__body">
                    <p 
                    class="form-sec__subtitle" 
                    v-html="formSecData.sekcziya_obratnoj_svyazi.podzagolovok"></p>
                    
                    <div class="form-sec__contacts">

                        <a class="form-sec__contact social-contact-def" 
                        v-for="(item,index) in formSecData.sekcziya_obratnoj_svyazi.kontakty" 
                        :href="item.ssylka">
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

    <template v-else>
        <section class="home-form-sec form-sec" v-if="formSecData">
            <div class="container">

                <div class="form-sec__data">
                    <div 
                    class="header-row-sec-v2__decor-wrapper"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 100,
                    duration: 0.5,
                    delay: 0,
                    start: "top 70%",
                    }'>
                    <img src="@/assets/images/img/decor.png" alt="" class="header-row-sec-v2__decor"></img>
                    </div>
                    <h2 class="form-sec__title sec-title sec-title--left-mod" 
                    v-html="formSecData.sekcziya_obratnoj_svyazi.zagolovok"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0,
                    start: "top 70%",
                    }'
                    ></h2>
                    <div class="form-sec__body">
                    <p 
                    class="form-sec__subtitle" 
                    v-html="formSecData.sekcziya_obratnoj_svyazi.podzagolovok"
                    v-gsap.whenVisible.once.from='{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0,
                    start: "top 70%",
                    }'></p>
                    
                    <div class="form-sec__contacts">

                        <a class="form-sec__contact social-contact-def" 
                        v-for="(item,index) in formSecData.sekcziya_obratnoj_svyazi.kontakty" 
                        :href="item.ssylka"
                            v-gsap.whenVisible.once.from='{
                            autoAlpha: 0,
                            y: 50,
                            duration: 1,
                            delay: (0.1 * (+index + 1)),
                            start: "top 70%",
                        }'>
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

                <div class="form-sec__img-wrapper"
                v-gsap.whenVisible.once.from='{
                autoAlpha: 0,
                y: 50,
                duration: 0.5,
                delay: 0.4,
                start: "top 70%",
                }'
                >
                <img :src="formSecData.sekcziya_obratnoj_svyazi.izobrazhenie.url" :alt="formSecData.sekcziya_obratnoj_svyazi.izobrazhenie.alt" class="form-sec__img">
                </div>
            </div>
        </section>
    </template>
    
</template>


<script setup>
    defineProps({
        formSecData: Object,
        animStatusDisable: Boolean,
    })
</script>


<style scoped  lang="scss">

@import "@/assets/scss/components/form-sec.scss";

</style>