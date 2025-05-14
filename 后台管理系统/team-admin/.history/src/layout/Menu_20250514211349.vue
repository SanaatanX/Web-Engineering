<template>
  <MenuLogo></MenuLogo>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    active-text-color="#f07810"
    background-color="#0e1f37"
  >
  <el-menu-item index="0">
      <el-icon><House /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="1">
      <el-icon><Avatar /></el-icon>
      <template #title>用户管理</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Menu /></el-icon>
      <template #title>菜单管理</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Operation /></el-icon>
      <template #title>社团分类</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Histogram /></el-icon>
      <template #title>社团管理</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><UserFilled /></el-icon>
      <template #title>团员管理</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><Postcard /></el-icon>
      <template #title>活动管理</template>
    </el-menu-item>
    <el-menu-item index="7">
      <el-icon><setting /></el-icon>
      <template #title>新闻管理</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MenuLogo from "./MenuLogo.vue";
import Menu
const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
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
/* 鼠标移动菜单的颜色 */

:deep(.el-menu-item:hover) {
  background-color: #001528 !important;
}
</style>
