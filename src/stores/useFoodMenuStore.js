import { defineStore } from 'pinia'
import { getFoodMenus } from '../services/api.js'

export default defineStore('foodMenu', {
  state: () => ({
    foodMenus: [],
    isLoading: false,
    isError: false,
  }),
  actions: {
    async fetch() {
      try {
        this.isLoading = true
        this.foodMenus = await getFoodMenus()
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
  },
  getters: {
    forToday(state) {
      return state.foodMenus.slice(0, 1)
    },
    forThreeDays(state) {
      return state.foodMenus.slice(0, 3)
    },
    forNextWeek(state) {
      return state.foodMenus.slice(0, 7)
    },
    forAllTime(state) {
      return state.foodMenus
    },
  },
})