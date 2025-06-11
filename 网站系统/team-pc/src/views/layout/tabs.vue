<template>
  <div class="tabs">
    <div
    @click="tabClick(item)"
      class="item"
      :class="{ 'active-item': item.value == activeName }"
      v-for="(item, index) in tabs"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref,watch } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import {tabsSotre} from '@/store/tabs/index'
import { newsSotre } from "@/store/news";
const nstore = newsSotre();
const store = tabsSotre()
const router = useRouter()
const route = useRoute()
const has = ref(['home','team','activity','news','notice','mine'])
const activeName = computed(()=>{
  let result = has.value.some(item => item === route.name)
    if(result){
      return route.name
    }else{
      return store.fatabs
    }
})
const tabs = ref([
  {
    title: "首页",
    value: "home",
  },
  {
    title: "社团列表",
    value: "team",
  },
  {
    title: "活动列表",
    value: "activity",
  },
  {
    title: "新闻列表",
    value: "news",
  },
  {
    title: "公告列表",
    value: "notice",
  },
  {
    title: "个人中心",
    value: "mine",
  },
]);
const tabClick = (item:any)=>{
    // activeName.value = item.value
    //清空列表数据
    nstore.newsList = [];
    nstore.parm.currentPage = 1
    nstore.parm.pageSize = 10
    if(item.value =='activity'){
      nstore.parm.type = '0'
      nstore.parm.status = '1'
      //获取数据
      nstore.getNewsList()
    }
    if(item.value =='news'){
      nstore.parm.type = '1'
      nstore.parm.status = ''
      //获取数据
      nstore.getNewsList()
    }
    if(item.value =='notice'){
      nstore.parm.type = '2'
      nstore.parm.status = ''
      //获取数据
      nstore.getNewsList()
    }
    store.setFatabs(item.value)
    console.log(item.value)
    if(item.value === 'mine'){
      router.push({path:store.mineTabs})
    }else{
      router.push({name:item.value})
    }
    
}
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  flex-grow: 1;
  font-weight: 600;
  margin-left: 50px;
  .item {
    padding: 0px 25px;
    text-align: center;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
  }
  .active-item {
    padding: 0px 20px;
    text-align: center;
    color: #f3af28;
    font-size: 1rem;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #f3af28;
  }
}
</style>
