<template>
 <footer
          class="text-center text-lg-start text-dark pb-5"
          style="background-color: #ECEFF1">
    <div>
    <div style = "background-color: rgba(246, 246, 246, 1);">
        <div class = "row text-center">
            <div class="col-sm mt-3">
            <Avatar icon="pi pi-car" class="mr-2" size="xlarge" shape="circle" style = "background-color: white; color : #4CAF50" />
            <div>
                <h6>Free Shipping</h6>
                <p>On all orders over 99 TND</p>
            </div>
            </div>
            <div class="col-sm mt-3">
            <Avatar icon="pi pi-sync" class="mr-2" size="xlarge" shape="circle" style = "background-color: white; color : #4CAF50" />
            <div>
                <h6>30 Days Return</h6>
                <p>You have 30 days to return</p>
            </div>
            </div>
            <div class="col-sm mt-3">
            <Avatar icon="pi pi-lock" class="mr-2" size="xlarge" shape="circle" style = "background-color: white; color : #4CAF50" />
            <div>
                <h6>Safe Shopping</h6>
                <p>Payment 100% secure</p>
            </div>
            </div>
            <div class="col-sm mt-3">
            <Avatar icon="pi pi-users" class="mr-2" size="xlarge" shape="circle" style = "background-color: white; color : #4CAF50" />
            <div>
                <h6>Online Support</h6>
                <p>Contact Us 24 hours a day</p>
            </div>
            </div>
        </div>
    </div>
    <div class = "row text-center">
        <div class = "col-sm d-flex">
            
        </div>
        
        
    </div>



    <!-- Remove the container if you want to extend the Footer to full width. -->

 
   
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold">KI Garage</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              We are a company in Tunisia that sells car parts and accessories and we are proud to be the best in the country.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            
                <p v-for="category in visibleCategories" :key="category.id">
      <a href="#" class="text-dark">  {{ category.name }}</a>
    </p>

            
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Manufacturers</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />

                <p v-for="marque in visibleMarques" :key="marque.id">
      <a href="#" class="text-dark">  {{ marque.name }}</a>
    </p>


           
            
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="fas fa-home mr-3"></i> Sfax, TUNISIA</p>
            <p><i class="fas fa-envelope mr-3"></i> contact@KIgarage.tn</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->

    <!-- Copyright -->
 
</div>
</footer>
  <!-- Footer -->

<!-- End of .container -->
</template>

<script>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token ? true : false;
};

export default {
  setup() {
    const categories = ref([]);
    const visibleCategories = computed(() => categories.value.slice(0, 2));

    const marques = ref([]);
    const visibleMarques = computed(() => marques.value.slice(0, 2));

    const fetchCategories = () => {
      axios
        .get('http://localhost:8000/api/categories')
        .then((response) => {
          categories.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const fetchMarques = () => {
      axios
        .get('http://localhost:8000/api/marques')
        .then((response) => {
          marques.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    onMounted(() => {
      fetchCategories();
      fetchMarques();
      isAuthenticated();
    });

    return {
      categories,
      visibleMarques,
      visibleCategories,
    };
  },
};
</script>