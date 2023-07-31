<template>
  <div>
    <MainView @moveContent="move" />
    <About ref="comp" />
    <History />
    <ProvideInject />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MainView from "@/pages/contentPage/Main.vue";
import About from "@/pages/contentPage/About.vue";
import History from "@/pages/contentPage/History.vue";
import ProvideInject from "./contentPage/ProvideInject.vue";
const comp = ref(null);

function move() {
  comp.value.$el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
