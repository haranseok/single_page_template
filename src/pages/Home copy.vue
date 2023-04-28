<template>
    <div>
        <v-icon size="x-large">mdi-home</v-icon> <br>
        pinia
        <h3>{{ counter.name }}</h3>
        <p>{{ counter.count }}</p>
        <p>{{ counter.doubleCount }}</p>
        <v-btn @click="counter.increment">increment</v-btn>
        <v-btn @click="counter.$reset()">reset</v-btn>
        <br>
        언어팩사용
        <section>
            <div class="message">
                <p>{{ $t('message') }}</p>
                <v-btn @click="$i18n.locale='ko'">ko</v-btn>
                <v-btn @click="$i18n.locale='en'">en</v-btn>
            </div>
        </section>
        <section>
            <h2>breadCrumbs</h2>
            <br>
            <v-btn :to="{
                name:'Page1', 
                params: {
                    paramToPage1: 'page1'        
                }
            }">page1</v-btn>
            <v-btn :to="{
                name:'Page2', 
                params: {
                    paramToPage1: 'page2'        
                }
            }">page2</v-btn>

        </section>
    </div>
</template>

<script setup lang="ts">
import { useCouterStore } from '@/store/counter'
import { ref } from 'vue'

const counter = ref(useCouterStore());

</script>

<style lang="scss" scoped>

</style>