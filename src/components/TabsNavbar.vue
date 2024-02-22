<template>
  <TabView scrollable>
    <TabPanel header="Сегодня">
      <FoodMenuListRenderer :food-menus="forToday"/>
    </TabPanel>
    <TabPanel header="Три дня">
      <FoodMenuListRenderer :food-menus="forThreeDays"/>
    </TabPanel>
    <TabPanel header="Неделя">
      <FoodMenuListRenderer :food-menus="forNextWeek"/>
    </TabPanel>
    <TabPanel header="Месяц">
      <FoodMenuListRenderer :food-menus="forAllTime"/>
    </TabPanel>
  </TabView>
</template>

<script setup>
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import useFoodMenuStore from '../stores/useFoodMenuStore.js'
import { storeToRefs } from 'pinia'
import FoodMenuListRenderer from './FoodMenuListRenderer.vue'

const foodMenuStore = useFoodMenuStore()

const { forToday, forThreeDays, forNextWeek, forAllTime } = storeToRefs(foodMenuStore)
</script>