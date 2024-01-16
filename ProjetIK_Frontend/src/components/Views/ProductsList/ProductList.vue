<template>
  <div class="product-list">
    <div class="product-row" v-for="(product) in products" :key="product.id">
      <Card class="product-card" style="width: 350px; height: 500px; border-radius: 5%; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <template v-slot:title>
          <img :src="'http://localhost:8000/images/' +  product.image" alt="Product Image" style="width: 70%; height: 150px; object-fit: cover;">
          <hr style="border-top: 1px solid #ddd; margin: 10px 0;">
          <h3>{{ product.name }}</h3>
        </template>
        <template v-slot:content>
          <div class="ellipsis" style="height: 120px;">{{ product.description }}</div>
          <p>Price: {{ product.price }}</p>
        </template>
        <template v-slot:footer>
          <Toast />
          <Button label="Add To Cart" @click="addToCart(product)"/>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-row {
  flex: 0 0 calc(33.333% - 100px); /* Adjust the width and margin as needed */
  margin: 10px;
}

.product-card {
  overflow: hidden;
}

.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import store from '../../../store';
  import Card from 'primevue/card';
  import 'primeicons/primeicons.css'
  import Button from 'primevue/button';
  import { useToast } from 'primevue/usetoast';

  const toast = useToast();

  
  const products = ref([]);
  
  onMounted(() => {
    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('email'));
    fetchProducts();
  });
  const fetchProducts = () => {
  axios
    .get('http://localhost:8000/api/products')
    .then((response) => {
      products.value = response.data;
      console.log(products.value); // Log the products array
    })
    .catch((error) => {
      console.error(error);
    });
};


const addToCart = (prod) => {
    store.commit("Articlestore/addCart", { product: prod, qty: 1 });
    toast.add({ severity: 'success', summary: 'Panier', detail:  `${prod.part_number}` + ' Ajouté au Panier', life: 3000 });
}


  </script>
  