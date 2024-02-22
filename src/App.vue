<template>
  <TabsNavbar/>
  <div class="container w-full flex flex-col justify-items mx-auto">
    <InlineMessage v-if="isError" severity="error">
      Произошла ошибка при загрузке меню
    </InlineMessage>
    <ProgressSpinner v-if="isLoading"/>
    <ScrollTop/>
  </div>
</template>
<script setup>
import { getColorScheme } from './services/telegram.js'
import { usePrimeVue } from 'primevue/config'
import { onMounted } from 'vue'
import useFoodMenuStore from './stores/useFoodMenuStore.js'
import TabsNavbar from './components/TabsNavbar.vue'
import { storeToRefs } from 'pinia'
import InlineMessage from 'primevue/inlinemessage'
import ProgressSpinner from 'primevue/progressspinner'
import ScrollTop from 'primevue/scrolltop'

const PrimeVue = usePrimeVue()

const colorScheme = getColorScheme()

if (colorScheme === 'dark') {
  PrimeVue.changeTheme(
    'aura-light-green',
    'aura-dark-green',
    'primevue-theme',
    () => {
    },
  )
}

const foodMenuStore = useFoodMenuStore()

onMounted(foodMenuStore.fetch)

const { isError, isLoading } = storeToRefs(foodMenuStore)
</script>