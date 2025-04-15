import {defineStore} from 'pinia'
//定义store
// 第一个参数是你的应用中 Store 的唯一 ID
export const tabsSotre = defineStore('tabsSotre',{
    state:()=>{
        return{
            fatabs:'home',
            mineTabs:'/mine/mycenter'
        }
    },
    persist: {
        enabled: true,
        strategies: [
            { storage: localStorage, paths: ['fatabs','mineTabs'] },
        ],
    }
})