<template>
<div>content</div>
</template>

<script setup lang="ts">
import { useCouterStore } from '@/store/counter'
import { ref } from 'vue'

const counter = ref(useCouterStore());

</script>

<style lang="scss" scoped>

</style>