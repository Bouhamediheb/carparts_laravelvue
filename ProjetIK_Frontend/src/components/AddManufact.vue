<template>
    <div class="add-manufacturer-page">
      <form @submit.prevent="addManufacturer" class="card">
        <h2>Add Manufacturer</h2>
  
        <div class="mb-3">
          <label for="name" class="form-label">Manufacturer Name</label>
          <input type="text" id="name" v-model="manufacturer.name" class="form-control" required>
        </div>
  
        <div class="mb-3">
          <label for="image" class="form-label">Manufacturer Image</label>
          <input type="file" id="image" @change="handleImageUpload" class="form-control" accept="image/*" required>
        </div>
  
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <style scoped>
  .add-manufacturer-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .card {
    width: 400px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
  }
  
  .form-field {
    margin-bottom: 20px;
  }
  </style>
  
  <script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  
  onMounted(() => {
    
  });
  
  const manufacturer = {
    name: "",
    image: null,
  };
  
  const addManufacturer = () => {
    const formData = new FormData();
    formData.append("name", manufacturer.name);
    formData.append("image", manufacturer.image);
  
    axios.post("http://localhost:8000/api/marques", formData)
      .then((response) => {
        console.log(response);
        // Handle success or redirection if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };
  
  const handleImageUpload = (event) => {
    manufacturer.image = event.target.files[0];
  };
  </script>
  