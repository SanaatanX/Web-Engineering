import {defineStore} from "pinia"
//定义store
//第一个参数是store的唯一标识，第二个参数是一个对象，对象中包含state、getters、actions
export const testStore = defineStore('testStore',{
    //存储count的地方，，初始化值为0
    state: () => {
        return{ 
            count: 0 
        }
    },
    //获取state里面count的值
    getters: {
        getCount(state) {return state.count}
    },

    //修改state里面count的值
    actions: {
        setCount(count: number) {this.count = count;}
        }
})