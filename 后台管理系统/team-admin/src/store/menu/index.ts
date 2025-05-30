import {defineStore} from "pinia"
//定义store
//第一个参数是store的唯一标识，第二个参数是一个对象，对象中包含state、getters、actions
export const menuStore = defineStore('menuStore',{
    //存储count的地方，，初始化值为0
    state: () => {
        return{ 
            isCollapse: false
        }
    },
    //获取state里面count的值
    getters: {
        getCollapse(state) {return state.isCollapse}
    },

    //修改state里面count的值
    actions: {
        setCollapse() {this.isCollapse = ! this.isCollapse}
        }
})