<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="container">
                <div class="footer__top-left">
                    <NuxtLink to="/" class="footer__logo">
                        <img :src="store.optionsData.footer_logo.url" 
                        :alt="store.optionsData.footer_logo.alt" 
                        class="footer__logo-img">
                    </NuxtLink>

                    <div 
                    class="footer__firm-text"
                    v-if="store.optionsData.footer_kody" 
                    v-html="store.optionsData.footer_kody"></div>
                </div>
                <div class="footer__top-right">

                    <div class="footer__col">
                        <p class="footer__col-title">Навигация</p>
                        <nav class="footer__nav">
                            <ul class="footer__nav-ul">

                                <li class="footer__nav-ul-element">
                                    <NuxtLink to="/" class="footer__nav-link">
                                        Главная
                                    </NuxtLink>
                                </li>
                                <li class="footer__nav-ul-element">
                                    <NuxtLink to="/autopark" class="footer__nav-link">
                                        Автопарк
                                    </NuxtLink>
                                </li>
                                <li class="footer__nav-ul-element">
                                    <NuxtLink to="/rules" class="footer__nav-link">
                                        Условия
                                    </NuxtLink>
                                </li>
                                <li class="footer__nav-ul-element">
                                    <NuxtLink to="/contacts" class="footer__nav-link">
                                        Контакты
                                    </NuxtLink>
                                </li>
                                <li class="footer__nav-ul-element">
                                    <NuxtLink to="/certificates" class="footer__nav-link">
                                        Сертификаты
                                    </NuxtLink>
                                </li>
                                <li class="footer__nav-ul-element">
                                    <NuxtLink to="/partners" class="footer__nav-link">
                                        Зарабатывай с нами
                                    </NuxtLink>
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <div class="footer__col">
                        <p class="footer__col-title">Контакты</p>

                        <div class="footer__contacts-list">
                            <a :href="value.ssylka" aria-label="Ссылка на контакт" class="footer__contacts-element" v-for="value in store.optionsData.footer_kontakty">
                                <div class="contact-link">
                                    <div class="contact-link__wrapper">
                                        <img :src="value.ikonka.url" :alt="value.ikonka.alt">
                                    </div>
                                </div>
                                <div class="footer__contacts-element-value">
                                    <span class="footer__contacts-element-value-main" v-html="value.znachenie"></span>
                                </div>
                            </a>
                        </div>
                    </div>


                    <div class="footer__col footer__col--help">
                        <p class="footer__col-title">Нужна помощь?</p>

                        <div class="footer__contacts-list" v-if="store.optionsData.footer_svyaz">
                         
                            <a :href="value.ssylka" aria-label="Ссылка на социальную сеть" class="footer__contacts-element" v-for="value in store.optionsData.footer_svyaz">
                                <div class="contact-link">
                                    <div class="contact-link__wrapper">
                                        <img :src="value.ikonka.url" :alt="value.ikonka.alt">
                                    </div>
                                </div>
                                <div class="footer__contacts-element-value">
                                    <span class="footer__contacts-element-value-main" v-html="value.zagolovok"></span>
                                    <span class="footer__contacts-element-value-main-dop" v-if="value.podzagolovok" v-html="value.podzagolovok"></span>
                                    
                                </div>
                            </a>
                          
                        </div>

                        <div class="footer__social-wrapper">
                            <p class="footer__social-title">Мы в соц сетях</p>
                            <div class="footer__social-row">

                                <a :href="value.ssylka" class="contact-link" v-for="value in store.optionsData.footer_socz_seti">
                                    <div class="contact-link__wrapper">
                                        <img :src="value.ikonka.url" :alt="value.ikonka.alt">
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
        <div class="footer__down">
            <div class="container">
                <nav class="footer__down-nav">
                    <ul class="footer__down-nav-ul">
                        <li class="footer__down-nav-list-element" v-for="value in docsPageData">
                            <NuxtLink :to="`/docs/${value.slug}`" class="footer__down-nav-link">
                                {{ value.title.rendered }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <p class="footer__developer">
                    Дизайн и разработка:
                    <a href="https://t.me/roman_dev_space">Roman Kuzmych</a>
                </p>
            </div>
        </div>
    </footer>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter';

import { useNuxtApp } from '#app';


//DATA

const nuxtApp = useNuxtApp();

const store = useCounterStore(nuxtApp.$pinia);

const { data: docsPageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/docs?_fields=id,slug,title`)

// console.log("docsPageData", docsPageData)

</script>