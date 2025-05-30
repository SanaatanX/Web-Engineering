<template>
    <div class="mylogo">
        <img class="logo" :src="logo" />
        <span v-if="!show" class="title">西电社团管理系统</span>
    </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png';
import { menuStore } from '@/store/menu';
import { computed } from 'vue';
const store = menuStore();
const show = computed(() => { return store.getCollapse });
</script>

<style scoped lang="scss">
.mylogo {
    height: 60px;
    background-color: #0f2542;
    color: #FFF;
    display: flex;
    align-items: center;

    .logo {
        height: 44px;
        width: 44px;
        margin-left: 10px;
        margin-right: 5px;
    }
    .title {
    font-size: 16px;
    font-weight: 300;         // 中等粗细
    white-space: nowrap;      // 防止文字换行
  }
}
</style>