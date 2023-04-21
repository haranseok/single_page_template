import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Router from '@/router/index'

const app = createApp(App);
const pinia = createPinia();

loadFonts()
  app.use(pinia)
  app.use(vuetify)
  app.use(Router)
  app.mount('#app')
