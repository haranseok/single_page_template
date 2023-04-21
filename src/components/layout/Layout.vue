<template>
    <div>
        pinia
        <h3>{{ counter.name }}</h3>
        <p>{{ counter.count }}</p>
        <p>{{ counter.doubleCount }}</p>
        <v-btn @click="counter.increment">increment</v-btn>
        <v-btn @click="counter.$reset()">reset</v-btn>
    </div>
</template>

<script setup lang="ts">
import { useCouterStore } from '@/store/counter'
import { ref } from 'vue'

const counter = ref(useCouterStore());



</script>

<style lang="scss" scoped>

</style>