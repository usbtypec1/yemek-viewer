<template>
  <div class="flex flex-col items-center gap-y-16 my-8">
    <food-menu-renderer
      v-for="(foodMenu, index) in props.foodMenus"
      :items="foodMenu.items"
      :at="foodMenu.at"
      :key="index"
    />
  </div>
</template>

<script setup>
import FoodMenuRenderer from "./FoodMenuRenderer.vue";

const props = defineProps({
    foodMenus: Array,
})
</script>
