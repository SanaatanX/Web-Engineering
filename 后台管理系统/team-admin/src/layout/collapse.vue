<template>
    <el-icon :size="30" style="cursor: pointer;" 
    @click="iconClick">
    <!-- 动态组件：来回切换 -->
    <component :is="status ? Expand : Fold"></component>

  </el-icon>
</template>

<script setup lang="ts">
    import { Expand,Fold } from '@element-plus/icons-vue';
    import { menuStore } from '@/store/menu';
    import { computed } from 'vue';
    const store = menuStore();
    const status = computed(() => { return store.getCollapse });

    const iconClick = () => {
        store.setCollapse();
    }
</script>

<style scoped>

</style>