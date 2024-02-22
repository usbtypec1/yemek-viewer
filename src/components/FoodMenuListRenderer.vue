<template>
  <div class="flex flex-col items-center gap-y-16 mt-4 mb-16">
    <FoodMenuItemRenderer
      v-for="(foodMenu, index) in foodMenus"
      :at="foodMenu.at"
      :items="foodMenu.items"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
import FoodMenuItemRenderer from './FoodMenuItemRenderer.vue'

interface FoodMenuItem {
  photo_url: string,
  name: string,
  calories_count: number,
}

interface FoodMenu {
  items: FoodMenuItem[],
  at: string,
}

defineProps<{
  foodMenus: FoodMenu[],
}>()
</script>
