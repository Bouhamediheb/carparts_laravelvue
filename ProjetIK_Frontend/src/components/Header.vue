
<script setup>
import Menubar from 'primevue/menubar';
import 'primevue/resources/themes/lara-light-green/theme.css';
import Button from 'primevue/button';
import Badge from 'primevue/badge';


const items = [
  { label: 'Home', icon: 'pi pi-fw pi-home' },
  { label: 'Categories', icon: 'pi pi-fw pi-list' },
  { label: 'Products', icon: 'pi pi-fw pi-tag' ,route: '/addproduct'},
  { label: 'Cart', icon: 'pi pi-fw pi-shopping-cart', badge: 3 }, // Example with a badge
  { label: 'Profile', icon: 'pi pi-fw pi-user' , },
];

const signIn = () => {
  // Placeholder for sign-in logic
  console.log('Sign In button clicked');
};

const signUp = () => {
  // Placeholder for sign-up logic
  console.log('Sign Up button clicked');
};
const navigateTo = (route) => {
    // navigate to route
    $router.push(route);


};

</script>
<template>
  <Menubar :model="items">
    <template #start>
      <svg
        width="35"
        height="40"
        viewBox="0 0 35 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-2rem"
      >
        <!-- ... (your SVG paths) ... -->
      </svg>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <Button
        v-ripple
        class="flex align-items-center p-button-text"
        v-bind="props.action" @click="navigateTo(item.route)"
        
      >
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge
          v-if="item.badge"
          :class="{ 'ml-auto': !root, 'ml-2': root }"
          :value="item.badge"
        />
        <span
          v-if="item.shortcut"
          class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
        >
          {{ item.shortcut }}
        </span>
        <i
          v-if="hasSubmenu"
          :class="['pi pi-angle-down text-primary', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"
        ></i>
      </Button>
    </template>
    <template #end>
      <div class="flex align-items-center gap-2 ml-auto">
        <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
        <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
        <!-- Sign In and Sign Up buttons with added spacing -->
        <Button label="Sign In" class="p-button-text" @click="signIn" style="margin-right: 10px;" />
        <Button label="Sign Up" class="p-button-text" @click="signUp" />
      </div>
    </template>
  </Menubar>
</template>

