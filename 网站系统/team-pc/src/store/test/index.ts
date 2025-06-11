import {defineStore} from 'pinia'
//定义store
// 第一个参数是你的应用中 Store 的唯一 ID
export const testSotre = defineStore('testSotre',{
    state:()=>{
        return{
            count:0
        }
    },
    getters:{
        //获取count值
        getCount(state){
            return state.count
        }
    },
    actions:{
        //设置值
        setCount(count:number){
            this.count = count;
        }
    }
})