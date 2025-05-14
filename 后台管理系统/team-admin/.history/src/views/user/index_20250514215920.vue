<template>
    <el-main>
        <!-- 搜索栏 -->
        <el-form :model="searchParm"  :inline="true" size="normal">
            <el-form-item>
                <el-input placeholder="请输入姓名" v-model="searchParm.nickName"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button icon="Search" @click="searchBtn">搜索</el-button>
                <el-button type="danger" plain icon="Close" @click="resetBtn">重置</el-button>
                <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
            </el-form-item>
        </el-form>
        <!-- 新增弹框 -->
        <SysDialog
        :title="dialog.title"
        :visible="dialog.visible"
        @on-close="onClose"
        @on-confirm="onConfirm"
        >
            <template v-slot:content>
                弹框内容
            </template>
        </SysDialog>
    </el-main>


</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SysDialog from '@/components/SysDialog.vue';
import useDialog from '@/hooks/useDialog';
//弹框属性
const {dialog,onClose,onConfirm,onShow}= useDialog()
//搜索表单绑定的对象
const searchParm = reactive({
    nickName:''
})
//新增按钮
const addBtn = ()=>{
    onShow()
}
//搜索按钮
const searchBtn = ()=>{

}
//重置按钮
const resetBtn = ()=>{

}
</script>

<style scoped>

</style>