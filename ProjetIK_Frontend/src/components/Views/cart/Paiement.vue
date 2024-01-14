<template>
    <form @submit.prevent="handleSubmit">
        <div class="card" style="width: 50rem;">
            <div class="card-body">
                <h5 class="card-title">Montant à payer : {{ amount }} TND</h5>
                <br />
                <div class="card-text">
                    <div class="form-group">

                        <input type="email" class="form-control" placeholder="email" v-model="email" />

                    </div>
                    <br />
                </div>
                <div id="card-element"></div>
                <br />
                <button type="submit" class="btn btn-success">Procéder au
                    payement</button>
            </div>
        </div>
    </form>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import store from '../../../store';
import { useRouter } from 'vue-router';
import axios from "axios";
const router = useRouter();



const stripePromise =
    loadStripe('pk_test_51OYStbBeZ19mXMZySR5s5pSivF8PZYzJKuJ9qLa5Pxe8iMy7kntFGd9tu3kIZZ9V0NCFslioSXNT63OB46IN8kZZ00HMJyQDoQ');
const stripe = ref(null);
let cardElement; // Déclarer cardElement comme variable globale
let amount = ref(0);
let email = ref("");
onMounted(async () => {
    amount.value = store.state.Articlestore.cartTotal;
    stripe.value = await stripePromise;
    const elements = stripe.value.elements();
    cardElement = elements.create('card'); // Affecter cardElement
    cardElement.mount('#card-element');
    //log api key
    console.log(stripe.value._apiKey);
});
const handleSubmit = async () => {
    const { token, error } = await stripe.value.createToken(cardElement);
    if (error) {
        console.error(error);
    } else {
        // Envoie le token au serveur pour traiter le paiement
        const response = await axios.post('http://localhost:8000/api/createpayment', {
  token: token.id,
  //api key
    api_key: stripe.value._apiKey,

  amount: amount.value * 100,
  email: email.value
}).catch(error => {
  console.error('Error:', error.response.data);
});
        if (response.data.message) {
            console.log(response.data.message);
            // Le paiement est réussi
            alert(response.data.message);
            //Vider le cart
            store.commit('Articlestore/clearCart')
            //Redirection
            router.push('/cart')
        } else {
            console.error(response.data.error);
        }
    }
};
</script>