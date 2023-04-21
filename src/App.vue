<template>
  <v-app>
    <v-main>
        <BreadCrumbs></BreadCrumbs>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BreadCrumbs from '@/components/item/BreadCrumbs.vue';


export default defineComponent({
  name: 'App',
  data () {
    return {
      //
    }
  },
  components:{
    BreadCrumbs
  }
})
</script>
