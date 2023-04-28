<template>
    <v-main>
        <Headers @language_change="langChange"/>
        <BreadCrumbsItem />
        <router-view></router-view>
    </v-main>
</template>

<script setup>
import Headers from '@/components/layout/Header.vue'
import BreadCrumbsItem from '@/components/item/BreadCrumbsItem.vue'

const langChange = () => {
    console.log('test')
}
</script>

<style lang="scss" scoped>
.v-main{
    width: 100%;
    background: rgb(138, 149, 138);
}
</style>