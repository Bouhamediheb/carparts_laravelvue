<template>
    <div class="card">
        <DataTable :value="$state.store.Articlestore.cart" :paginator="true" :rows="5" :rowsPerPageOptions="[5,10,20]" :paginatorTemplate="paginatorLeftTemplate">
            <Column field="name" header="Name"></Column>
            <Column field="Description" header="Description"></Column>
            <Column field="Price" header="Price"></Column>
            <Column field="Stock" header="Stock"></Column>
            <Column field="Rating" header="Rating"></Column>
            <Column field="Category" header="Category"></Column>
            <Column field="Actions" header="Actions">
                <template #body="slotProps">
                    <Button label="Add To Cart" @click="addToCart(slotProps.data)"/>
                </template>
            </Column>

        </DataTable>
    </div>
</template>
<script setup>
import axios from "axios";
import store from '../../../store';
import { ref, onMounted } from 'vue';
import Card from 'primevue/card';
import 'primeicons/primeicons.css'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';

const Articles = ref([]);
const isLoading=ref(true)

const columns = [
    { field: 'Name', header: 'Name' },
    { field: 'Description', header: 'Description' },
    { field: 'Price', header: 'Price' },
    { field: 'Stock', header: 'Stock' },
    { field: 'Rating', header: 'Rating' },
    { field: 'Category', header: 'Category' },
    { field: 'Actions', header: 'Actions' }
    
];


const Produits = ref([]);
onMounted(() => {

    getProduits();
   
}

);



const clearCart = () => {
    store.commit("Articlestore/clearCart");
}
const removeFromCart = (item) => {
    store.commit("Articlestore/removeFromCart", item);
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

</script>
<style>
.error-template {
    padding: 40px 15px;
    text-align: center;



}

.error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
}

.error-actions .btn {
    margin-right: 10px;
}

.bag-quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: yellow;
    font-size: 14px;
    font-weight: 700;
    color: black;
    margin-left: 5px;
}

/* Home */
.home-container {
    padding: 2rem 4rem;
}

.home-container h2 {
    font-size: 40px;
    font-weight: 400;
    text-align: center;
}

.products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 15px;
    width: 250px;
    max-width: 100%;
    height: 400px;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),

        13 2px 2px 5px rgba(94, 104, 121, 0.3);
}

.product h3 {
    font-size: 25px;
    font-weight: 400;
}

.product img {
    width: 80%;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
}

.product .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product .details .price {
    font-size: 20px;
    font-weight: 700;
}

.product button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin-top: 2rem;
    font-weight: 400;
    letter-spacing: 1.15px;
    background-color: #4b70e2;
    color: #f9f9f9;
    border: none;
    outline: none;
    cursor: pointer;
}

/* Cart */
.cart-container {
    padding: 2rem 4rem;
}

.cart-container h2 {
    font-weight: 400;
    font-size: 30px;
    text-align: center;
}

.cart-container .titles {
    margin: 2rem 0 1rem 0;
}

.cart-container .titles h3 {
    font-size: 14px;

    font-weight: 400;
    text-transform: uppercase;
}

.cart-item,
.cart-container .titles {
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    column-gap: 0.5rem;
}

.cart-item {
    border-top: 1px solid rgb(187, 187, 187);
    padding: 1rem 0;
}

.cart-container .titles .product-title {
    padding-left: 0.5rem;
}

.cart-container .titles .total {
    padding-right: 0.5rem;
    justify-self: right;
}

.cart-item .cart-product {
    display: flex;
}

.cart-item .cart-product img {
    width: 100px;
    max-width: 100%;
    margin-right: 1rem;
}

.cart-item .cart-product h3 {
    font-weight: 400;
}

.cart-item .cart-product button {
    border: none;
    outline: none;
    margin-top: 0.7rem;
    cursor: pointer;
    background: none;
    color: gray;
}

.cart-item .cart-product button:hover {
    color: black;
}

.cart-item .cart-product-quantity {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 130px;

    max-width: 100%;
    border: 0.5px solid rgb(177, 177, 177);
    border-radius: 5px;
}

.cart-item .cart-product-quantity button {
    border: none;
    outline: none;
    background: none;
    padding: 0.7rem 1.5rem;
    cursor: pointer;
}

.cart-item .cart-product-quantity .count {
    padding: 0.7rem 0;
}

.cart-item .cart-product-total-price {
    padding-right: 0.5rem;
    justify-self: right;
    font-weight: 700;
}

/* cart summary */
.cart-summary {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid rgb(187, 187, 187);
    padding-top: 2rem;
}

.cart-summary .clear-btn {
    width: 130px;
    height: 40px;
    border-radius: 5px;
    font-weight: 400;
    letter-spacing: 1.15px;
    border: 0.5px solid rgb(177, 177, 177);
    color: gray;
    background: none;
    outline: none;
    cursor: pointer;
}

.cart-checkout {
    width: 270px;
    max-width: 100%;
}

.cart-checkout .subtotal {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
}



.cart-checkout .amount {
    font-weight: 700;
}

.cart-checkout p {
    font-size: 14px;
    font-weight: 200;
    margin: 0.5rem 0;
}

.cart-checkout button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    font-weight: 400;
    letter-spacing: 1.15px;
    background-color: #4b70e2;
    color: #f9f9f9;
    border: none;
    outline: none;
    cursor: pointer;
}

.continue-shopping,
.start-shopping {
    margin-top: 1rem;
}

.continue-shopping a,
.start-shopping a {
    color: gray;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.continue-shopping a span,
.start-shopping a span {
    margin-left: 0.5rem;
}

.cart-empty {
    font-size: 20px;
    margin-top: 2rem;
    color: rgb(84, 84, 84);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.drag {
    margin-top: 70px;
}</style>