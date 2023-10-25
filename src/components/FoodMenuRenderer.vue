<template>
  <div class="bg-emerald-300 rounded-xl shadow-md px-6 py-3 flex flex-col gap-y-5">
    <p class="mt-3">{{ props.at }}</p>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="text-center"
    >
      <img class="rounded shadow-md" :src="item.photo_url" width="300" height="200">
      <p class="text-lg font-semibold">{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    items: Array,
    at: String,
})
</script>