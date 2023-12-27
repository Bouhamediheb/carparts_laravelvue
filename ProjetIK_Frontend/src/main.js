import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-amber/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.vue';
import router from './router/router.js';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.mount('#app');
