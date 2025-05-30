import { ref } from "vue";
import { User } from "@/api/user/UserModel";
import { EditType,FuncList } from "@/type/BaseType";
import useInstance from "@/hook/useInstance";
import { deleteUserApi } from "@/api/user";
import { ElMessage } from "element-plus";
export default function useUser(getList:()=>FuncList) {
    const {global} = useInstance()
    // 弹框的ref属性
    const addUserRef = ref<{ show: (type:string,row?:User)=>void}>();
    //新增
    const addBtn = () => {
        addUserRef.value?.show(EditType.ADD);
    }
    //编辑
    const editBtn = (row:User) => {
        addUserRef.value?.show(EditType.EDIT,row);
    }
    //删除
    const deleteBtn = async(row:User) => {
        //信息提示
        console.log(global)
        const confirm = await global.$myconfirm('确定删除该数据吗?')
        console.log(confirm)
        if(confirm){
            let res = await deleteUserApi(row)
            if(res && res.code == 200){
                //信息提示
                ElMessage.success(res.msg)
                //刷新表格
                getList()
            }
        }
    }
    return { addUserRef, addBtn, editBtn, deleteBtn }
}