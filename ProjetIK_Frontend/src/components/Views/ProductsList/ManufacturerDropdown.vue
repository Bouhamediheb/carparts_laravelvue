<template>
    <div class="manufacturer-dropdown">
       <div class="p-field">
         <label for="manufacturer">Manufacturer:</label>
         <Dropdown
           id="manufacturer"
           v-model="selectedManufacturer"
           :options="manufacturers"
           optionLabel="name"
           optionValue="id"
           placeholder="Select a Manufacturer"
         />
       </div>
   
       <div class="p-field">
         <label for="category">Category:</label>
         <Dropdown
           id="category"
           v-model="selectedCategory"
           :options="categories"
           optionLabel="name"
           optionValue="id"
           placeholder="Select a Category"
         />
       </div>
       
    </div>
   </template>
   
   <script setup>
   import { ref, onMounted } from 'vue';
   import axios from 'axios';
   import Dropdown from 'primevue/dropdown';

   import 'primevue/resources/themes/saga-blue/theme.css';
   import 'primevue/resources/primevue.min.css';
   import 'primeicons/primeicons.css';
   
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