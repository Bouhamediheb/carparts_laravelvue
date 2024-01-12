<template>
    <div class ="add-category-page">
        <form @submit.prevent="submit" class="card">
          <h2>Add Category</h2>

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" v-model="form.name" class="form-control" required>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<style scoped>
.add-category-page {
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
            },
        };
    },
    methods: {
        submit() {
            axios.post('http://localhost:8000/api/categories', this.form)
                .then(() => {
                    this.$router.push({ name: 'Categories' });
                });
        },
    },
    
};
</script>