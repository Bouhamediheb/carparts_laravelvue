<template>
    <div class="list-products-page">
      <!-- Banner Component -->
      <Banner />
  
      <!-- Split Screen: Manufacturer and Product List -->
      <div class="split-screen">
        <div class="dropdown-section">
          <ManufacturerDropdown />
        </div>
        <div class="product-list-section">
          <ProductList />
        </div>
      </div>
  
        <!-- Top Selling Products Component -->
        <TopSellingProducts />
      <!-- Newsletter Subscription Component -->
      <NewsletterSubscription />
    </div>
  </template>
  
  <style scoped>
  .list-products-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .banner {
    width: 100%;
    background-color: #007bff; /* Adjust the background color */
    color: #fff;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .split-screen {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  
  .dropdown-section,
  .product-list-section {
    width: 48%; /* Adjust the width as needed */
    margin: 10px;
  }
  
  .product-list-section {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
  }
  
  .newsletter-section {
    width: 100%;
    background-color: #f8f9fa; /* Adjust the background color */
    padding: 20px;
    text-align: center;
  }

  
  </style>
  
  <script setup>
  import Banner from './Banner.vue'; // Create a separate Banner component
  import ManufacturerDropdown from './ManufacturerDropdown.vue'; // Create a separate ManufacturerDropdown component
  import ProductList from './ProductList.vue'; // Create a separate ProductList component
  import NewsletterSubscription from './NewsletterSubscription.vue'; // Create a separate NewsletterSubscription component
  import TopSellingProducts from './TopSellingProducts.vue';

  </script>
  