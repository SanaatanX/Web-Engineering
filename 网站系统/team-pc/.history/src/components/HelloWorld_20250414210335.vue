<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div style="color: red;"> 社团管理系统</div>
  <el-button type="primary" iconsize="default" >新增</el-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
