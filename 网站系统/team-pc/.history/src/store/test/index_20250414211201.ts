import { count } from 'console'
import {defineStore} from 'pinia'
// 第一个参数表示store的唯一id
export const testStore = defineStore('testStore', {
    state: () => {
        return{
            count: 0
        }
    },
    getters
})