import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import Toast from "vue-toastification";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

pinia.use(({ store }) => {
    store.$router = markRaw(router)
})

pinia.use(({ store }) => {
    store.$toast = markRaw(useToast())
})

app.use(pinia)
app.use(router)
app.use(Toast, { timeout: 2000 })

app.mount('#app')
