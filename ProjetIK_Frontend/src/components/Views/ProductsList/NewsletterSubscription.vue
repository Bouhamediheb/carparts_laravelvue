<template>
    <div class="newsletter-subscription">
      <h2>Subscribe to Our Newsletter</h2>
      <form @submit.prevent="subscribeNewsletter" class="subscription-form">
        <label for="email" class="form-label">Email:</label>
        <input type="email" v-model="email" id="email" class="form-control" required>
        <button type="submit" class="btn btn-primary">Subscribe</button>
      </form>
    </div>
  </template>
  
  <style scoped>
  .newsletter-subscription {
    width: 100%;
    background-color: #f8f9fa; /* Adjust the background color */
    padding: 20px;
    text-align: center;
  }
  
  .subscription-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-control {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #007bff; /* Adjust the background color */
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  
  const subscribeNewsletter = () => {
    // Handle the subscription logic here (e.g., send the email to your server)
    console.log('Subscribed with email:', email.value);
    // Reset the email input after submission
    email.value = '';
  };
  </script>
  