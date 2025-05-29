<template>
    <MenuLogo></MenuLogo>
    <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"  
    background-color="#0e1f37"
    router
  >
    
    <el-menu-item index="/home">
      <el-icon><House /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon><Avatar /></el-icon>
      <template #title>用户管理</template>
    </el-menu-item>
    <el-menu-item index="/menu">
      <el-icon><Menu /></el-icon>
      <template #title>菜单管理</template>
    </el-menu-item>
    <el-menu-item index="/category">
      <el-icon><Operation /></el-icon>
      <template #title>社团分类</template>
    </el-menu-item>
    <el-menu-item index="/team">
      <el-icon><Histogram /></el-icon>
      <template #title>社团管理</template>
    </el-menu-item>
    <el-menu-item index="/member">
      <el-icon><UserFilled /></el-icon>
      <template #title>团员管理</template>
    </el-menu-item>
    <el-menu-item index="/activity">
      <el-icon><Postcard /></el-icon>
      <template #title>活动管理</template>
    </el-menu-item>
    <el-menu-item index="/news">
      <el-icon><Setting /></el-icon>
      <template #title>新闻管理</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MenuLogo from './MenuLogo.vue';
import { menuStore } from '@/store/menu';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const store = menuStore();
const isCollapse = computed(() => { return store.getCollapse });

//获取当前激活的菜单：当前路由
const defaultActive = computed(() => { return route.path });

import {
    Avatar,
  Document,
  Histogram,
  Menu as IconMenu,
  Location,
  Operation,
  Postcard,
  Setting,
  UserFilled,
} from '@element-plus/icons-vue'


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px; 
}
.el-menu {
  border-right: none;
}
.el-menu .el-menu-item {
  color: #bfcbd9;
  font-size: 15px;
  font-weight: bold;
}
.el-menu-item.is-active {
  color: #f07810 !important;
  background-color: #1f2d3d !important;
}

:deep(.el-menu-item:hover) {
    background-color: #001528 !important;
}
</style>