<template>
    <div>
        page1
        <v-btn :to="{
            name: 'Page2',
            params: {
                paramToPage1 : route.params.paramToPage1,
            }
        }"></v-btn>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style lang="scss" scoped>

</style>