<template>
  <SysDialog
    :title="dialog.title"
    :visible="dialog.visible"
    :width="dialog.width"   
    :height="dialog.height"  
    @onClose="onClose"
  >
    <template v-slot:content>
      <el-form
        :model="addModel"
        ref="addFormRef"
        :rules="rules"
        :inline="false"
        label-width="80px"
        size="normal"
      >
        <el-form-item prop="nickName" label="姓名">
          <el-input v-model="addModel.nickName"></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="性别">
          <el-radio-group v-model="addModel.sex">
            <el-radio :label="'0'">男</el-radio>
            <el-radio :label="'1'">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="phone" label="电话">
          <el-input v-model="addModel.phone"></el-input>
        </el-form-item>
        <el-form-item prop="username" label="登录账户">
          <el-input v-model="addModel.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="addModel.password"></el-input>
        </el-form-item>
        <el-form-item prop="status" label="状态">
          <el-radio-group v-model="addModel.status">
            <el-radio :label="'0'">启用</el-radio>
            <el-radio :label="'1'">停用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import {} from "@/api/u"
import { reactive,ref } from "vue";
import { FormInstance } from "element-plus";
//表单ref属性
const addFormRef = ref<FormInstance>();
//弹框属性
const { dialog, onClose, onShow } = useDialog();
//表单绑定的数据对象
const addModel = reactive<User>({
  userId: "",
  username: "",
  password: "",
  nickName: "",
  phone: "",
  sex: "",
  status:""
});
//表单验证规则
//1.el-form-item加prop属性
//2.编写表单验证规则 rules
//3.表单要绑定 :rules="rules"
const rules = reactive({
  username:[{ required: true, message: '请输入登录账号', trigger: 'blur' }],
  password:[{ required: true, message: '请输入登录密码', trigger: 'blur' }],
  nickName:[{ required: true, message: '请输入姓名', trigger: 'blur' }],
  phone:[{ required: true, message: '请输入电话', trigger: 'blur' }],
  sex:[{ required: true, message: '请输入性别', trigger: 'blur' }]
});
//显示弹框
const show = () => {
  onShow();
};
//暴露组件里面的方法，给外部组件使用
defineExpose({
  show,
});
//表单提交
const commit = ()=>{
  //验证表单
  addFormRef.value?.validate((valid)=>{
    console.log(valid)
    console.log(addModel)
    if(valid){
      onClose()
    }
  })
}
</script>

<style scoped></style>
