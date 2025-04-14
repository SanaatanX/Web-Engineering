<template>
  <div style="color: red;"> 社团管理系统</div>
  <el-button type="primary" icon="Plus" size="default" >新增</el-button>
  <el-icon :size="20">
    <Edit />
  </el-icon>
  <div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { testStore } from '@/store/test';
import { Edit } from '@element-plus/icons-vue/dist/types';
//获取Store
const store = testStore()
//获取count值
const count = computed(()=> {return store.getCount})

</script>



<style scoped>
.read-the-docs {
  color: #888;
}
</style>
