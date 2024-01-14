import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-amber/theme.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToastService from 'primevue/toastservice';
import App from './App.vue';
import router from './router/router.js';
import store from './store';


const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(ToastService);
app.use(store);

app.mount('#app');
