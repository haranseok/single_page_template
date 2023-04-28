<template>
    <div>
        <v-icon class="cp" @click="arrowDown">mdi-chevron-down</v-icon>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['moveContent']);
const arrowDown = () => {
    emit('moveContent')
}
</script>

<style lang="scss" scoped>
.v-icon{
    font-size: 3rem;
    animation: motion 0.5s linear 0s infinite alternate; //linear 일정 속도 진행 , infinite alternate 무한반복
}

@keyframes motion {
    0% {margin-top: 0px;}
    100% {margin-top: 10px}
}
</style>