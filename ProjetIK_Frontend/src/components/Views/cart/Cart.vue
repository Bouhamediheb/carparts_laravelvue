<template>
    <div class="cart">
      <DataTable :value="cart" :paginator="true" :rows="5" :rowsPerPageOptions="[5, 10, 20]" :paginatorTemplate="paginatorLeftTemplate">
        <Column field="product.name" header="Name"></Column>
        <Column field="qty" header="Quantity"></Column>
        <Column field="product.price" header="Price"></Column>
        <Column field="product.image" header="Image">
          <template #body="slotProps">
            <img :src="'http://localhost:8000/images/' + slotProps.data.product.image" alt="Product Image" style="max-width: 100px; max-height: 100px;" />
          </template>
        </Column>
        <Column header="Total">
          <template #body="slotProps">
            <span class="total">{{ slotProps.data.product.price * slotProps.data.qty }}</span>
          </template>
        </Column>
        <Toast />
        <Column field="Actions" header="Actions">
          <template #body="slotProps">
            <Button severity="danger" label="Remove" @click="removeFromCart(slotProps.data)"/>
          </template>
        </Column>
      </DataTable>
      <div class="cart-summary">
        <div class="cart-total">Total: {{ cartTotal }}</div>
        <router-link :to="{name: 'Paiement'}" > 
            <Button label="CHECKOUT" /> 
</router-link>     
 </div>
    </div>
  </template>
  
  
<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import Card from 'primevue/card';
import 'primeicons/primeicons.css'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';
import store from '../../../store';
import { useRouter } from 'vue-router';
import { useToast } from "primevue/usetoast";

const router = useRouter();
const toast = useToast();



const Articles = ref([]);
const isLoading=ref(true)

const columns = [

    { field: 'Name', header: 'Name' },
    { field: 'Description', header: 'Description' },
    { field: 'Price', header: 'Price' },
    { field: 'Category', header: 'Category' },
    
];


const Produits = ref([]);
const cart = ref([]);
const cartTotal = ref(0);
const lineTotal = ref(0);

onMounted(() => {
    cart.value = store.state.Articlestore.cart;
    cart.value.forEach(item => {
        console.log('Product Name:', item.product.name, 'Quantity:', item.qty, 'Total:', item.product.price * item.qty);
    });
    cartTotal.value = store.state.Articlestore.cartTotal;

    getProduits();
});



const clearCart = () => {
    store.commit("Articlestore/clearCart");
}
const removeFromCart = (item) => {
    toast.add({ severity: 'error', summary: 'Panier', detail: `${item.product.part_number}` + ' Supprimé du Panier', life: 3000 });
    store.commit("Articlestore/removeFromCart", item);
    cart.value = store.state.Articlestore.cart;
    cartTotal.value = store.state.Articlestore.cartTotal;
}
const plus = (item) => {
    Produits.value.map((pro) => {
        if (pro.id == item.product.id) {
            if (item.qty < pro.qtestock) {
                store.commit("Articlestore/plusCart", item);
            }
            else
                alert("Quantité stock indisponible")
        }
    });
}
const minus = (item) => {

    if (item.qty < 1) {
        alert("Quantité stock non valable")
    }
    else
        store.commit("Articlestore/minusCart", item);
}

const getProduits = () => {

    axios.get('http://localhost:8000/api/products').then(res => {
        Produits.value = res.data;
    }).catch(error => {
        console.log(error)
    });
}
const getSeverity = (product) => {
    if (product.stock > '10') {
        return 'success';
    }
    else if (product.stock <'10') {
        return 'warning';
    }
    
}

const calculateTotal = (rowData) => {
  lineTotal.value = rowData.product.price * rowData.qty;
};


</script>

<style scoped>
.cart {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: justify;
}

.total {
  font-weight: bold;
  font-size: 16px;
}

.remove-button {
  background-color: #ff3333; /* Red color for remove button */
  color: white;
  font-size: 14px;
}

.cart-summary {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.cart-total {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.checkout-button {
  background-color: #4CAF50; /* Green color for checkout button */
  color: white;
  font-size: 16px;
}
</style>