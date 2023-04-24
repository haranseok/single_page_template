<template>
  <v-app>
    <v-main>
        <MainLayout />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '@/components/layout/MainLayout.vue'

export default defineComponent({
  name: 'App',
  data () {
    return {
      //
    }
  },
  components:{
    MainLayout
  }
})
</script>
