<template>
    <div class="tabs">
        <div 
        @click="$event => tabClick(item)"
        class="item" 
        :class="{ 'active-item':item.value == activeName }" 
        v-for="(item,index) in tabs">
            {{ item.title }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import { tabsStore } from '@/store/tabs/index';
const store = tabsStore();
const activeName = computed (()=> {
    return store.fatabs;
})
const tabs = ref([
    {
        title: '首页',
        value: 'home',
    },
    { 
        title: '社团列表',
        value: 'team',
    }, 
    { 
        title: '活动列表', 
        value: 'activity' 
    }, 
    { 
        title: '新闻列表', 
        value: 'news',
    },
    {
        title: '公告列表',
        value: 'notice',
    },
    {
        title: '个人中心',
        value: 'mine'
    }
    ]);
const tabClick = (item:any) => {
    // activeName.value = item.value;
    store.fatabs = item.value;
    router.push({name:item.value})
}
</script>

<style scoped lang="scss">
.tabs {
    display: flex;
    flex-grow: 1;
    font-weight: 600;
    margin-left: 80px;
    .item {
    padding: 0px 30px;
    color: white;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
    }
    .active-item {
    padding: 0px 30px;
    color: #F3AF28;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #F3AF28;
    }
}


</style>