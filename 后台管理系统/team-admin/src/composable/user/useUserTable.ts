import { ref,reactive, onMounted, nextTick } from "vue";
import { getListApi } from "@/api/user";
import { ListParm } from "@/api/user/UserModel";
export default function useUserTable() {
    // 表格数据
    const tableList = ref([]);
    // 表格高度
    const tableHeight = ref(0);
    // 绑定表单绑定的对象
    const searchParm = reactive<ListParm>({
        nickName: '', // 昵称
        pageSize: 10, // 每页显示条数
        currentPage: 1, // 当前页码
        total: 0, // 总条数
    }); // 定义搜索参数

    // 获取列表
    const getList = async() => {
        let res = await getListApi(searchParm);
        if(res && res.code == 200) {
            searchParm.total = res.data.total; // 总条数
            console.log(res);
            tableList.value = res.data.records; // 表格数据
            // 设置总条数
            searchParm.total = res.data.total;
        }
    }

    // 搜索按钮
    const searchBtn = () => { 
        getList(); // 获取列表
    }
    // 重置按钮
    const resetBtn = () => {
        searchParm.nickName = ''; // 昵称
        searchParm.currentPage = 1; // 当前页码
        getList(); // 获取列表
    }

    // 页容量改变时触发
    const sizeChange = (size: number) => {
        searchParm.pageSize = size; // 设置每页显示条数
        getList(); // 获取列表 
    }

    // 页数改变时触发
    const currentChange = (page: number) => {
        searchParm.currentPage = page; // 设置当前页码
        getList(); // 获取列表

    }

    const updateTableHeight = async () => {
        await nextTick();
        tableHeight.value = window.innerHeight - 200;
    };

    onMounted(() => {
        getList(); 
        updateTableHeight();
    })
    return { searchParm, getList,searchBtn, resetBtn, tableList, sizeChange, currentChange, tableHeight }
}