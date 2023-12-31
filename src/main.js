import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import Toast from "vue-toastification";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

import vue3GoogleLogin from 'vue3-google-login'

import VueDisqus from 'vue-disqus'

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

app.use(vue3GoogleLogin, {
    clientId: '591421090928-osqp5idar7ptthq1ud9g2prqmcic2hc8.apps.googleusercontent.com'
})

app.use(pinia)
app.use(router)
app.use(Toast, { timeout: 3000 })
app.use(VueDisqus, { shortname: 'serene-reads' })

app.mount('#app')
