<template>
  <p v-if="!foodMenus">Loading...</p>
  <food-menu-list-renderer v-else :food-menus="foodMenus"/>
</template>

<script setup>
import {ref, onMounted} from "vue";
import FoodMenuListRenderer from "./FoodMenuListRenderer.vue";

const foodMenus = ref(null)

onMounted(async () => {
    const response = await fetch('https://yemek-api.vercel.app')
    foodMenus.value = await response.json()
})
</script>
