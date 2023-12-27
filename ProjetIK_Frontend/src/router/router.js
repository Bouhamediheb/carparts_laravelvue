// router.js
import { createRouter, createWebHistory } from 'vue-router';
import AddProduct from '../components/AddProduct.vue';
import Register from '../components/Views/User/Register.vue';
import Login from '../components/Views/User/Login.vue';

const routes = [
  { path: '/addproduct', component: AddProduct },
  { path: '/register', component : Register },
  { path: '/login', component : Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
