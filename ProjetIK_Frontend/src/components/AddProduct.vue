<template>
  <div class="container">
    <div class="input-container">
      <label for="textInput">Product Name:</label>
      <InputText v-model="value1" type="text" size="small" id="textInput" placeholder="Small" />
    </div>

    <div class="input-container">
      <label for="textArea">Product Description:</label>
      <Textarea v-model="value" autoResize rows="5" cols="30" id="textArea" />
    </div>

    <div class="input-container">
      <label for="numberInput">Product Price:</label>
      <InputNumber v-model="value2" mode="currency" currency="TND" locale="Fr-fr" id="numberInput" />
    </div>
    <div class="input-container">
      <label for="colorSelection">Color Selection:</label>
      <MultiSelect
        v-model="selectedColors"
        :options="colorOptions"
        optionLabel="label"
        placeholder="Select colors"
      />
      <div class="selected-colors">
        <div v-for="color in selectedColors" :key="color.value" class="color-square" :style="{ backgroundColor: color.value }"></div>
      </div>
    </div>
    <div class="button-container">
      <Button label="Add Product" @click="submitForm"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import MultiSelect from 'primevue/multiselect';

const value1 = ref('');
const value = ref('');
const value2 = ref(0);
const selectedColors = ref([]);
const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'black', label: 'Black' },
  { value: 'white', label: 'White' },
  // Add more color options as needed
];

const submitForm = () => {
  console.log('Form values:', {
    textInput: value1,
    textArea: value,
    numberInput: value2,
    colorSelection: selectedColors.value.map(color => color.label),
  });
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Adjust the height as needed */
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  text-align: center;
}

label {
  margin-bottom: 5px;
}

.button-container {
  margin-top: 15px;
}
</style>
