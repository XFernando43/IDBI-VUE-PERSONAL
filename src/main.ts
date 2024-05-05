import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import './style.css';
// import 'primevue/resources/themes/aura-light-teal/theme.css';
// import 'primevue/resources/themes/lara-dark-pink/theme.css'
// import 'primevue/resources/themes/md-light-indigo/theme.css'
// import 'primevue/resources/themes/lara-dark-purple/theme.css'
// import 'primevue/resources/themes/lara-dark-teal/theme.css'
// import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/themes/lara-dark-green/theme.css';
import 'primeicons/primeicons.css';


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(PrimeVue)

app.use(router)
app.mount('#app')

