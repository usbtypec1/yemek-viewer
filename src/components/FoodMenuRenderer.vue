<template>
  <div class="tg-primary-bg rounded-xl shadow-md px-6 py-3 flex flex-col gap-y-5">
    <p class="mt-3 tg-primary-text">{{ formatDate(at) }}</p>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="text-center"
    >
      <img class="rounded shadow-md" :src="item.photo_url" width="300" height="200" alt="food item photo">
      <p class="text-lg font-semibold tg-primary-text" >{{ item.name }}</p>
      <p class="text-xs tg-hint">{{ item.calories_count }} калорий</p>
    </div>
    <div class="text-center">
      <p class="text-xl font-semibold tg-primary-text">Всего калорий: {{ computeTotalCaloriesCount(items) }}</p>
    </div>
  </div>
</template>

<script setup>
import {formatDate} from "../services/dateHelpers.js";
import {computeTotalCaloriesCount} from "../services/foodMenu.js";

const props = defineProps({
    items: Array,
    at: String,
})
</script>