<template>
  <div class="add-manufacturer-page">
    <form @submit.prevent="addManufacturer" class="card" enctype="multipart/form-data">
      <h2>Add Manufacturer</h2>

      <div class="mb-3">
        <label for="name" class="form-label">Manufacturer Name</label>
        <InputText id="name" v-model="manufacturer.name" class="form-control" required/>
      </div>

      <div class="mb-3">
        <label for="image" class="form-label">Manufacturer Image</label>
        <input type="file" id="image" @change="handleImageUpload" class="form-control" />
      </div>

      <Button type="submit" label="Submit" />
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
import InputText  from 'primevue/inputtext';
import Button  from 'primevue/button';
import FileUpload  from 'primevue/fileupload';

onMounted(() => {
  
});

const manufacturer = ref({
  image: null,
  name: "",
});

const handleImageUpload = async (event) => {
  const selectedFile = event.target.files[0];
  manufacturer.value.image = selectedFile;
};

const addManufacturer = () => {
  const formData = new FormData();
  formData.append("name", manufacturer.value.name);
  formData.append("image", manufacturer.value.image);
  console.log(manufacturer.value);
  axios.post("http://localhost:8000/api/marques", manufacturer.value , {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response);
      // Handle success or redirection if needed
    })
    .catch((error) => {
      console.error(error);
      // Handle error
    });
};


</script>