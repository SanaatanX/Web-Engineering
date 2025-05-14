<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div style="color: red;">社团管理系统</div>
  <el-button type="primary" icon="Plus" size="default">新增</el-button>
  <el-icon :size="20">
    <Edit />
  </el-icon>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
