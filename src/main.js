import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import skewedC from './components/reusable/skewedC.vue';
import './assets/main.css'

const app = createApp(App)

app.component('skewedC', skewedC)

app.use(router)


app.mount('#app')
