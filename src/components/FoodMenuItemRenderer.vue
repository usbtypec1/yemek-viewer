<template>
  <Card class="rounded-xl shadow-md px-1">
    <template #title>
      <span>{{ formattedDate }}</span>
    </template>
    <template #content>
      <div class="flex flex-col gap-y-5">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="text-center"
        >
          <Image
            class="shadow-md"
            :src="item.photo_url"
            :alt="item.name"
            preview
          />
          <p class="text-lg font-semibold">
            {{ item.name }}
          </p>
          <p class="text-xs tg-hint">
            {{ item.calories_count }} калорий
          </p>
        </div>
      </div>
    </template>
    <template #footer>
      <p class="text-xl font-semibold text-center">
        Всего калорий: {{ totalCaloriesCount }}
      </p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { formatDate } from "../services/dateHelpers.js"
import { computed } from 'vue'
import Card from 'primevue/card';
import Image from "primevue/image";

interface FoodMenuItem {
  photo_url: string,
  name: string,
  calories_count: number,
}

const props = defineProps<{
  items: FoodMenuItem[],
  at: string,
}>()

const totalCaloriesCount = computed<number>(() => {
  const itemsCaloriesCount = props.items.map(item => item.calories_count)
  return itemsCaloriesCount.reduce((a, b) => a + b, 0)
})

const formattedDate = computed<string>(() => formatDate(props.at))

const responsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]
</script>