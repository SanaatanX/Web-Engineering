import { reactive } from "vue"
export default function useUserTable() {
    //搜索表单绑定的对象
    const searchParm = reactive({
        nickName: ''
    })
    //获取列表
    const getList = ()=>{

    }
    //搜索按钮
    const searchBtn = () => {

    }
    //重置按钮
    const resetBtn = () => {

    }
    return{
        searchParm,
        getList,
        searchBtn,
        resetBtn
    }
}