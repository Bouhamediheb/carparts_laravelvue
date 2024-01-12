<template>
    <div class="product-list">
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          <strong>{{ product.name }}</strong>
          <p>{{ product.description }}</p>
          <p>Price: ${{ product.price }}</p>
          <p>Stock: {{ product.stock }}</p>
          <!-- Add more details as needed -->
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .product-list {
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const products = ref([]);
  
  onMounted(() => {
    // Fetch products when the component is mounted
    fetchProducts();
  });
  
  const fetchProducts = () => {
    axios
      .get('http://localhost:8000/api/products')
      .then((response) => {
        products.value = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  </script>
  