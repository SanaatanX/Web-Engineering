<template>
    <!-- 新增弹框 -->
          <SysDialog
            :title="dialog.title" 
            :visible="dialog.visible" 
            :width="dialog.width" 
            :height="dialog.height" 
            @onClose="onClose" 
            @onConfirm="commit">
            <template v-slot:content>
                <el-form 
                :model="addModel" 
                ref="addFromRef" 
                :rules="rules" 
                :inline="false" 
                label-width="80px"
                size="default">
                    <el-form-item prop="nickName" label="姓名">
                        <el-input v-model=" addModel.nickName"></el-input>
                    </el-form-item>
                    <el-form-item prop="sex" label="性别">
                        <el-radio-group v-model="addModel.sex">
                            <el-radio :value="0">男</el-radio>
                            <el-radio :value="1">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item prop="phone" label="电话">
                        <el-input v-model=" addModel.phone"></el-input>
                    </el-form-item>
                    <el-form-item prop="userName" label="登录账号">
                        <el-input v-model=" addModel.userName"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="密码">
                        <el-input v-model=" addModel.password"></el-input>
                    </el-form-item>
                    <el-form-item prop="status" label="状态">
                        <el-radio-group v-model="addModel.status">
                            <el-radio :value="0">启用</el-radio>
                            <el-radio :value="1">停用</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </template>
          </SysDialog>
</template>

<script setup lang="ts">
    import { reactive, defineExpose } from 'vue';
    import SysDialog from '@/components/SysDialog.vue';
    import useDialog from '@/hook/useDialog';
    import { User} from '@/api/user/UserModel'; // 导入用户模型
    import { ref } from 'vue';
    import { ElMessage, FormInstance} from "element-plus";
    import { addUserApi, editUserApi } from '@/api/user/index';
import { EditType, Title } from '@/type/BaseType';
    const { dialog, onConfirm, onClose, onShow } = useDialog(); // 定义弹框

    // 表单ref属性
    const addFromRef = ref<FormInstance>();

    // 表单绑定的数据对象
    const addModel = reactive<User>({ // 定义用户模型
        userId: '', // 用户ID
        userName: '', // 用户名
        password: '', // 密码
        nickName: '', // 昵称
        phone: '',
        sex: '',
        status:''
    });

    // 表单验证规则
    // 1.el-form-item的prop属性的值必须和rules对象的属性名一致
    // 2.rules对象的属性值是一个数组，数组里面是一个对象，对象里面是验证规则
    // 3.绑定 :rules="rules"
    const rules = reactive({ 
        userName: [ { required: true, message: '请输入登录账号', trigger: 'blur' },],
        password: [ { required: true, message: '请输入密码', trigger: 'blur' },],
        nickName: [ { required: true, message: '请输入姓名', trigger: 'blur' },],
        phone: [ { required: true, message: '请输入电话', trigger: 'blur' },],
        sex: [ { required: true, message: '请输入性别', trigger: 'blur' },],
        status: [ { required: true, message: '请选择状态', trigger: 'blur' },],       
    });

    // 新增和编辑的标识
    const tags = ref('')

    // 显示弹框
    const show = (type:string,row:User) => {
        tags.value == type;
        type == EditType.ADD ? dialog.title = Title.ADD : dialog.title = Title.EDIT; // 新增或编辑
        dialog.height = 300; // 弹框高度
        onShow(); 
        addFromRef.value?.resetFields(); // 清空表单验证
        // 编辑回显
        if (EditType.EDIT == type && row)  { // 编辑
            Object.assign(addModel,row); // 回显数据
        }
        dialog.height = 300; // 弹框高度
        onShow(); 
        addFromRef.value?.resetFields(); // 清空表单验证
    }
    // 暴露组件里面的方法，给外部组件使用
    defineExpose({
        show, // 显示弹框
    })

    // 注册事件
    const edits = defineEmits(['onFresh']); // 定义事件

    // 表单提交
    const commit = () => {
        // 验证表单
        addFromRef.value?.validate(async(valid) => {
           console.log(valid); // 打印验证结果
           console.log(addModel); // 打印表单数据
           // 验证通过，提交表单
           if (valid) { 
              let res = await addUserApi(addModel); // 调用接口
              if (res && res.code == 200) { // 成功
                ElMessage.success(res.msg); // 提示消息
                // 刷新表格数据
                edits('onFresh'); // 触发事件
                onClose(); // 关闭弹框
           }
        }
    })
}
</script>

<style scoped>

</style>