<template>
    <div class ="add-product-page">
        <form @submit.prevent="addproduct" class="card">
          <h2>Add Product</h2>
          <div class="mb-3">
                <label for="part_number" class="form-label">Part Number</label>
                <input type="text" id="part_number" v-model="product.part_number" class="form-control">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" v-model="product.name" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea id="description" v-model="product.description" class="form-control"></textarea>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" id="price" v-model="product.price" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="category_id" class="form-label">Category</label>
                <select id="category_id" v-model="product.category_id" class="form-select" required>
                    <option value="">Select a category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="marque_id" class="form-label">Manufacturer</label>
                <select id="marque_id" v-model="product.marque_id" class="form-select" required>
                    <option value="">Select a category</option>
                    <option v-for="marque in marques" :key="marque.id" :value="marque.id">
                        {{ marque.name }}
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="stock" class="form-label">Stock</label>
                <input type="number" id="stock" v-model="product.stock" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<style scoped>
.add-product-page {
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
  getCategories();
  getMarques();
});

const categories = ref([]);
const marques = ref([]);
const product = {
    name: "",
    description: "",
    price : "",
    category_id : "",
    marque_id : "",
    stock : "",
    part_number : "",

};

const getMarques = () => {
  axios
    .get("http://localhost:8000/api/marques")
    .then((res) => {
      marques.value = res.data;
    })

    .catch((error) => {
      console.log(error);
    });
};

const getCategories = () => {
  axios
    .get("http://localhost:8000/api/categories")
    .then((res) => {
      categories.value = res.data;
    })

    .catch((error) => {
      console.log(error);
    });
};

const addproduct = () => {
    console.log(product)
  axios
    .post("http://localhost:8000/api/products", product)
    .then((response) => {
      console.log(response);
      router.push("/home");
    })
    .catch((error) => {
      console.log(error);
    });
};

</script>