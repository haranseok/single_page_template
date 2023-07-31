<template>
  <div>
    최상위 component
    <Parent />
  </div>
</template>

<script lang="ts" setup>
import Parent from "./Parent.vue";
import { provide, ref } from "vue";

const message = ref("Hello world");
provide("msg", message.value);
</script>

<style lang="scss" scoped></style>
