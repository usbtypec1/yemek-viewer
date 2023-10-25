<template>
  <img id="spinner" src="../../assets/spinner.svg" v-if="!foodMenus" alt="Loading..."/>
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

<style>
#spinner {
    margin: 20px;
    width: 100px;
    height: 100px;
    -webkit-animation-name: spin;
    -webkit-animation-duration: 2000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 2000ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 2000ms;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@-ms-keyframes spin {
    from {
        -ms-transform: rotate(0deg);
    }
    to {
        -ms-transform: rotate(360deg);
    }
}

@-moz-keyframes spin {
    from {
        -moz-transform: rotate(0deg);
    }
    to {
        -moz-transform: rotate(360deg);
    }
}

@-webkit-keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>