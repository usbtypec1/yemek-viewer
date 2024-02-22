import { createApp } from 'vue'
import './output.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'

createApp(App)
  .use(createPinia())
  .use(PrimeVue)
  .mount('#app')
