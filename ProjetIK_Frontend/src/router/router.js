// router.js
import { createRouter, createWebHistory } from 'vue-router';
import AddProduct from '../components/AddProduct.vue';

const routes = [
  { path: '/addproduct', component: AddProduct },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
