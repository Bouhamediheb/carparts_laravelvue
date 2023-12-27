import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-amber/theme.css';
import 'primevue/resources/primevue.min.css';
import App from './App.vue';
import 'primeicons/primeicons.css';
import { createApp } from 'vue';

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
