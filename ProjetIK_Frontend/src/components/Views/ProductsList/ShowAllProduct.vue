<template>
  <div class="list-products-page">
    <!-- Banner Component -->
    <Banner />

    <!-- Split Screen: Manufacturer and Product List -->
    <Card>
      <template #title>
        <div class="dropdown-section ">
        <ManufacturerDropdown @manufacturer-selected = "handleManufacturerSelected"/>
      </div>
    </template>
    <template #content>
        <div>
        <ProductList :manufacturer="selectedManufacturer"/>
      </div>
      </template>
    </Card>
      <!-- Top Selling Products Component -->
    <TopSellingProducts />  
    <!-- Newsletter Subscription Component -->
    <NewsletterSubscription />
  </div>
</template>

<style scoped>
.split-screen {
  display: flex;
  width: 100%;
}

.dropdown-section,
.product-list-section {
  width: 50%; /* Set each section to 50% initially */
  box-sizing: border-box;
}

.dropdown-section {
  align-self: center; /* Adjust to 30% of the parent .split-screen */
}

.product-list-section {
   /* Adjust to 70% of the parent .split-screen */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
}
</style>


<script setup>
import Banner from './Banner.vue'; // Create a separate Banner component
import ManufacturerDropdown from './ManufacturerDropdown.vue'; // Create a separate ManufacturerDropdown component
import ProductList from './ProductList.vue'; // Create a separate ProductList component
import NewsletterSubscription from './NewsletterSubscription.vue'; // Create a separate NewsletterSubscription component
import TopSellingProducts from './TopSellingProducts.vue';
import {ref} from 'vue';

const selectedManufacturer = ref();

const handleManufacturerSelected = (manufacturer) => {
  selectedManufacturer.value = manufacturer;
  console.log(manufacturer);
};

</script>
