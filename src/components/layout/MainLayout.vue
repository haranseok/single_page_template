<template>
  <v-main>
    <Headers />
    <BreadCrumbsItem v-if="isBreadCrumbs" />
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { ref } from "vue";
import Headers from "@/components/layout/TheHeader.vue";
import BreadCrumbsItem from "@/components/item/BreadCrumbsItem.vue";
const isBreadCrumbs = ref(false);
</script>

<style lang="scss" scoped>
.v-main {
  width: 100%;
}
</style>
