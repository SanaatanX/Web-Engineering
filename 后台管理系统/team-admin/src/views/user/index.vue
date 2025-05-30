<template>
    <el-main height="">
        <!-- 搜索栏 -->
         <el-form :model="searchParm" :inline="true" size="default">
            <el-form-item label="">
                <el-input placeholder="请输入姓名" v-model="searchParm.nickName"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button icon="Search" @click="searchBtn">搜索</el-button>
                <el-button icon="Close" type="danger" @click="resetBtn">重置</el-button>
                <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
            </el-form-item>
         </el-form>
         <!-- 表格 -->
          <el-table :height="tableHeight" :data="tableList"  border stripe>
            <el-table-column label="姓名" prop="nickName">
            </el-table-column>
            <el-table-column label="性别" prop="sex">
                <template #default="scope">
                    <el-tag v-if="scope.row.sex == 1" type="danger" size="default">女</el-tag>
                    <el-tag v-if="scope.row.sex == 0" size="default">男</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="电话" prop="phone">
            </el-table-column>
            <el-table-column label="操作" width="220" align="center">
                <template #default="scope">
                    <el-button icon="Edit" type="primary" size="default" @click="editBtn(scope.row)">编辑</el-button>
                    <el-button icon="Delete" type="danger"  size="default" @click="deleteBtn(scope.row)">删除</el-button>
                </template>
            </el-table-column>
          </el-table>
          
          <!-- 分页 -->
          <el-pagination
            @size-change="sizeChange"
            @current-change="currentChange"
            :current-page.sync="searchParm.currentPage"
            :page-sizes="[10, 20, 40, 80, 100]"
            :page-size="searchParm.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="searchParm.total"
            background>
        </el-pagination>

          <!-- 新增弹框 -->
         <AddUser ref="addUserRef" @onFresh="getList"></AddUser>
    </el-main>
    
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import useUser from '@/composable/user/useUser'
import AddUser from './AddUser.vue';
import useUserTable from '@/composable/user/useUserTable';
// 表格相关的操作
const { searchParm, getList,searchBtn, resetBtn, tableList, sizeChange, currentChange, tableHeight} = useUserTable();
// 新增、编辑、删除
const { addBtn, editBtn, deleteBtn, addUserRef } = useUser(getList);

</script>

<style scoped>

</style>