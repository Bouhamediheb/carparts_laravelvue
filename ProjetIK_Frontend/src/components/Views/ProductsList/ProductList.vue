<template>
    <Card>
      <template #title>
        <h2>Products</h2>
      </template>
  
      <template #content>
        <div class="p-grid">
          <div class="p-col-12 p-md-6 p-lg-4" v-for="product in products" :key="product.id">
            <Card>
              <template #title>
                <h3>{{ product.name }}</h3>
              </template>
  
              <template #content>
                <p>{{ product.description }}</p>
                <p>{{ product.price }}</p>
                <p>{{ product.category_id }}</p>
                <p>{{ product.marque_id }}</p>
                <p>{{ product.stock }}</p>
                <p>{{ product.part_number }}</p>
              </template>

                <template #footer>
                    <Button type="button" icon="pi pi-search" class="p-button-rounded p-button-success p-mr-2" />
                    <Button type="button" icon="pi pi-pencil" class="p-button-rounded p-button-warning p-mr-2" />
                    <Button type="button" icon="pi pi-trash" class="p-button-rounded p-button-danger" />
                </template>
            </Card>
          </div>
        </div>
      </template>

    </Card>
    </template>


  
  <style scoped>






</style>

  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Card from 'primevue/card';
  import 'primeicons/primeicons.css'
    import Button from 'primevue/button';

  
  const products = ref([]);
  
  onMounted(() => {
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
  