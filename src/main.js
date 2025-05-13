import { createApp } from 'vue'
import './style.css' // 
import App from './App.vue'

import { router } from './data/router'

// Crea l'app Vue e usa il router
const app = createApp(App)
app.use(router)  // Qui registri il router
app.mount('#app')  // Monti l'app nel DOM
