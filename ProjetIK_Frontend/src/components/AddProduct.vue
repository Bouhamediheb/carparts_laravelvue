<template>
    <div class ="add-product-page">
        <form @submit.prevent="submit" class="card">
          <h2>Add Product</h2>

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" v-model="form.name" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea id="description" v-model="form.description" class="form-control"></textarea>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" id="price" v-model="form.price" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="category_id" class="form-label">Category</label>
                <select id="category_id" v-model="form.category_id" class="form-select" required>
                    <option value="">Select a category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="stock" class="form-label">Stock</label>
                <input type="number" id="stock" v-model="form.stock" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="part_number" class="form-label">Part Number</label>
                <input type="text" id="part_number" v-model="form.part_number" class="form-control">
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


<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                name: '',
                description: '',
                price: '',
                category_id: '',
                stock: '',
                part_number: '',
            },
            categories: [],
        };
    },
    async created() {
        const response = await axios.get('/api/categories');
        this.categories = response.data;
    },
    methods: {
        async submit() {
            try {
                const response = await axios.post('/api/products', this.form);
                this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product added', life: 3000});
                this.$router.push('/');
            } catch (error) {
                this.$toast.add({severity:'error', summary: 'Error', detail: 'Product not added', life: 3000});
            }
        },
    },
};
</script>