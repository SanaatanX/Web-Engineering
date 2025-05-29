<template>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in tabs">
        {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { Ref,ref,watch,onMounted } from 'vue';
import { RouteLocationMatched, useRoute } from 'vue-router';
const route = useRoute();

//定义面包屑导航的数据类型
//Ref：定义类型，ref：定义响应式数据
const tabs: Ref<RouteLocationMatched[]> = ref([]);
watch (
    () => route.path,
    () =>getBredcrumb()
)
//获取面包屑导航的数据
const getBredcrumb = () => {
    let matched = route.matched.filter((item) => item.meta && item.meta.title);
    const first = matched[0];
    if (first.path !== '/home') {
        matched = [{path: '/home',meta: {title: '首页'}} as any].concat(matched);
    }
    tabs.value = matched;
}

onMounted(() => {
    getBredcrumb(); 
})
</script>

<style scoped lang="scss">
//修改字体颜色
:deep(.el-breadcrumb__inner) {
  color: #fff !important;
}
.bred {
 margin-left: 20px; 
}
//修改字体大小
:deep(.el-breadcrumb__item) {
  font-size: 15px !important; 
}
</style>