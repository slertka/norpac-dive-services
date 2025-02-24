import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ContactMe from './components/ContactMe.vue'

const app = createApp(App)
app.component('ContactMe', ContactMe);

app.use(router)

app.mount('#app')
