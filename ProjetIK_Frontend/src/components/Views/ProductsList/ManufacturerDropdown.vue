<template>
    <div class="manufacturer-dropdown">
      <label for="manufacturer" class="dropdown-label">Manufacturer:</label>
      <select v-model="selectedManufacturer" id="manufacturer" class="dropdown-select">
        <option value="">Select a Manufacturer</option>
        <option v-for="manufacturer in manufacturers" :key="manufacturer.id" :value="manufacturer.id">
          {{ manufacturer.name }}
        </option>
      </select>
  
      <label for="category" class="dropdown-label">Category:</label>
      <select v-model="selectedCategory" id="category" class="dropdown-select">
        <option value="">Select a Category</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>
  </template>
  
  <style scoped>
  .manufacturer-dropdown {
    margin-bottom: 20px;
  }
  
  .dropdown-label {
    display: block;
    margin-bottom: 5px;
  }
  
  .dropdown-select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  </style>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const selectedManufacturer = ref('');
  const selectedCategory = ref('');
  const manufacturers = ref([]);
  const categories = ref([]);
  
  onMounted(() => {
    fetchManufacturers();
    fetchCategories();
  });
  
  const fetchManufacturers = () => {
    axios
      .get('http://localhost:8000/api/marques')
      .then((response) => {
        manufacturers.value = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const fetchCategories = () => {
    axios
      .get('http://localhost:8000/api/categories')
      .then((response) => {
        categories.value = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  </script>
  