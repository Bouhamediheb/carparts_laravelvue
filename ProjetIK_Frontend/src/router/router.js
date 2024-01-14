// router.js
import { createRouter, createWebHistory } from 'vue-router';
import AddProduct from '../components/AddProduct.vue';
import Register from '../components/Views/User/Register.vue';
import Login from '../components/Views/User/Login.vue';
import AddCategory from '../components/AddCategory.vue';
import AddManufact from '../components/AddManufact.vue';
import ShowAllProduct from '../components/Views/ProductsList/ShowAllProduct.vue';
import HomeCart from '../components/Views/cart/HomeCart.vue';
import Cart from  '../components/Views/cart/Cart.vue';
import Paiement from '../components/Views/cart/Paiement.vue';
const routes = [
  { path: '/addproduct', component: AddProduct  , name:'AddProduct',meta:{isAuth:true}},
  { path: '/register', component: Register , name:'Register',meta:{isAuth:false}},
  { path: '/login', component: Login , name:'Login',},
  { path: '/addcategory', component: AddCategory, name:'AddCategory',meta:{isAuth:true} },
  { path: '/addmanufact', component: AddManufact, name:'AddManufact',meta:{isAuth:true} },
  { path: '/listproduct', component: ShowAllProduct, name:'ShowAllProduct',meta:{isAuth:true} },
  { path: '/homecart', component: HomeCart , name:'HomeCart',meta:{isAuth:true}},
  { path: '/cart', component: Cart, name:'Cart' , meta:{isAuth:true}},
  { path: '/paiement', component: Paiement , name:'Paiement',meta:{isAuth:true}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
