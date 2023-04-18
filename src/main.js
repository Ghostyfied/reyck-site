import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import skewedC from './components/reusable/skewedC.vue';
import './assets/main.css'

import InstagramFeed from "vue3-instagram-feed";
import "vue3-instagram-feed/dist/style.css";

const app = createApp(App)

app.component('skewedC', skewedC)

app.use(router)

app.use(InstagramFeed)

app.mount('#app')
