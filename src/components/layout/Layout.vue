<template>
    <div>
        pinia
        <h3>{{ counter.name }}</h3>
        <p>{{ counter.count }}</p>
        <p>{{ counter.doubleCount }}</p>
        <v-btn @click="counter.increment">increment</v-btn>
        <v-btn @click="counter.$reset()">reset</v-btn>
        
        언어팩사용
        <section>
            <div class="message">
                <p>{{ $t('message') }}</p>
                <v-btn @click="$i18n.locale='ko'">ko</v-btn>
                <v-btn @click="$i18n.locale='en'">en</v-btn>
            </div>
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