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
        <AddUser ref="addUserRef"></AddUser>
    </el-main>


</template>

<script setup lang="ts">
import { reactive,ref } from 'vue';
import useUser from '@/composable/useUser.ts'
import useUserTable from '@/composable/user/useUserTable.ts'
import AddUser from '@/views/user/AddUser.vue'
//新增、编辑、删除
const {addBtn,editBtn,deleteBtn,addUserRef} = useUser()

//表格相关的操作
const {searchBtn,searchParm,resetBtn} = useUserTable()
</script>

<style scoped>

</style>