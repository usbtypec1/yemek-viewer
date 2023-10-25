<template>
  <div>
    <div v-for="(index, item) in items" :key="index">
      <p>{{ item.name }}</p>
      <img :src="item.photo_url" alt="photo">
    </div>
  </div>
</template>

<script>
export default {
    name: "FoodMenu",
    props: {
        items: Array,
        at: String,
    },
    mounted() {
        console.log(this.items)
    }
}
</script>

<style scoped>

</style>