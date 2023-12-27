<template>
  <div class="container mt-5">
    <div class="text-center mt-2 mb-4">
      <h2>Register</h2>
    </div>
    <form @submit.prevent="register">
      <div class="mb-3">
        <span class="p-input-icon-left">
          <i class="pi pi-user" />
          <InputText
            class="mt-2"
            name="name"
            placeholder="Full Name"
            v-model="user.name"
            type="text"
          />
        </span>
      </div>

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
        <Button type="submit" label="Sign Up" />
      </div>
    </form>
  </div>
</template>


<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import axios from "axios";

const user = {
  name: "",
  email: "",
  password: "",
};

const register = () => {
  console.log(user);
  axios
    .post("http://localhost:8000/api/register", user)
    .then((response) => {
      console.log(response);
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
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