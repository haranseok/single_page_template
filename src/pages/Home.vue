<template>
    <div>    
        <MainView @moveContent="move"/>
        <TestContent ref="comp"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MainView  from '@/pages/contentPage/Main.vue';
import TestContent from '@/pages/contentPage/TestContent.vue';
const comp = ref(null);
console.log("test" + comp.value)
function move() {
    comp.value.$el.scrollIntoView({behavior:'smooth'})
}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
}
</style>