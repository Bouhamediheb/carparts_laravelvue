<template>
   <div class="centeredDiv">
      <h2>You can add new categories here</h2>
      <p>Categories are used to classify products.</p>
    </div>
    
    <div class ="add-category-page">
        <form @submit.prevent="addcategory" class="card">
          <h2>Add Category</h2>

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <br>
                <InputText type="text" v-model="category.name" required/>
            </div>
            
            <Button type="submit" label="Submit"/>
        </form>
    </div>

</template>

<style scoped>
.add-category-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
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

.centeredDiv {
  text-align: center;
}
</style>


<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from 'axios';

const category = {
    name: "",
};

const addcategory = () => {
    axios
    .post("http://localhost:8000/api/categories", category)
    .then((response) => {
      console.log(response);
      router.push("/home");
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>