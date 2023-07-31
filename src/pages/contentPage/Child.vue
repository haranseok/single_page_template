<template>
  <div>
    Child
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from "vue";

let message = ref(inject("msg"));
</script>

<style lang="scss" scoped></style>
