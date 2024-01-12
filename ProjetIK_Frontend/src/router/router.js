// router.js
import { createRouter, createWebHistory } from 'vue-router';
import AddProduct from '../components/AddProduct.vue';
import Register from '../components/Views/User/Register.vue';
import Login from '../components/Views/User/Login.vue';
import AddCategory from '../components/AddCategory.vue';
import AddManufact from '../components/AddManufact.vue';
import ShowAllProduct from '../components/Views/ProductsList/ShowAllProduct.vue';
import Header from '../components/Header.vue';

const routes = [
  { path: '/addproduct', component: AddProduct },
  { path: '/register', component : Register },
  { path: '/login', component : Login },
  {path :'/addcategory', component : AddCategory},
{ path: '/addmanufact', component: AddManufact },
{ path: '/listproduct', component: ShowAllProduct },   

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
