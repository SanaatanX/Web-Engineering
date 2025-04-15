<template>
  <div style="color: red;"> 社团管理系统</div>
  <el-button type="primary" icon="Plus" size="default" >新增</el-button>
  <el-icon :size="20">
    <Edit />
  </el-icon>
  <el-button type="primary" size=""defa
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { testStore } from '@/store/test';
import { Edit } from '@element-plus/icons-vue/dist/types';
//获取Store
const store = testStore()
defineProps<{ msg: string }>()

const count = ref(0)
</script>



<style scoped>
.read-the-docs {
  color: #888;
}
</style>
