<template>
    <div class="container mt-5">
      <div class="text-center mt-2 mb-4">
        <h2>Login</h2>
      </div>
      <form @submit.prevent="login">
        <div class="mb-3">
          <span class="p-input-icon-left">
            <i class="pi pi-envelope" />
            <InputText
              class="mt-2"
              name="email"
              placeholder="Email"
              v-model="user.email"
              type="email"
            />
          </span>
        </div>
  
        <div class="mb-3">
          <span class="p-input-icon-left">
            <i class="pi pi-lock" />
            <InputText
            class="mt-2"
            name="password"
            placeholder="Password"
            v-model="user.password"
            type="password"
          />
          </span>
          
        </div>
        <div class="text-center">
          <!-- toast-->
          <Toast />
          <Button type="submit" label="Sign In"  @click="handleLogin"/>
        </div>
      </form>
    </div>
  </template>
  
  
  <script setup>
  import InputText from "primevue/inputtext";
  import Button from "primevue/button";
  import axios from "axios";
  //import router
  import { useRouter } from 'vue-router';
  const router = useRouter();
  
  
  const user = {
    name: "",
    email: "",
    password: "",
  };
  

  const handleLogin=async()=> {
axios.post('http://localhost:8000/api/login/', user  )
.then((response) => {
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('user_id', response.data.user.id )
  localStorage.setItem('name', response.data.user.name);
  localStorage.setItem('email', response.data.user.email);
  localStorage.setItem('role', response.data.user.role)
  localStorage.setItem('isLoggedIn', true);

  router.push({ name: 'Home' });
})
    
  }

  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh; /* Adjust the height as needed */
  }
  </style>