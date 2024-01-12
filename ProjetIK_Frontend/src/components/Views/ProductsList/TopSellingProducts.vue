<template>
    <div class="top-selling-products">
      <h2>Top Selling Products</h2>
      <div class="card-deck">
        <div v-for="product in topSellingProducts" :key="product.id" class="card">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">Price: ${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .top-selling-products {
    width: 100%;
    padding: 20px;
    text-align: center;
    background-color: #f8f9fa; /* Adjust the background color */
  }
  
  .card-deck {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .card {
    width: 30%;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  </style>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  //dark primevue
    import 'primevue/resources/themes/saga-green/theme.css';
    
   import 'primevue/resources/primevue.min.css';
   import 'primeicons/primeicons.css';
   
  
  const topSellingProducts = ref([]);
  
  onMounted(() => {
    fetchTopSellingProducts();
  });
  
  const fetchTopSellingProducts = () => {
    axios
      .get('http://localhost:8000/api/products')
      .then((response) => {
        topSellingProducts.value = response.data.slice(0, 5); 
      })
      .catch((error) => {
        console.error(error);
      });
  };
  </script>
  