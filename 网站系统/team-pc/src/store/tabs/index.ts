import { defineStore } from 'pinia'
import { ref } from 'vue'

export const tabsStore = defineStore('tabsStore', () => {
    const fatabs = ref('home')
    const mineTabs = ref('/mine/mycenter')
   return {
      fatabs,mineTabs }},
    { 
        persist: {
        storage: localStorage,
        pick: ['fatabs', 'mineTabs'], // 需要持久化的字段
      }
  }
)