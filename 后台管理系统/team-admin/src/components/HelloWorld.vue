<template>
  <div>
    <el-button type="primary" size="default">新增</el-button>
    <el-icon :size="20">
      <Edit/>
    </el-icon>
    <div>{{ store.count }}</div>
  </div>
</template>

<script setup lang="ts">
  import { testStore } from '@/store/test';
  const store = testStore();
</script>

<style scoped>

</style>\