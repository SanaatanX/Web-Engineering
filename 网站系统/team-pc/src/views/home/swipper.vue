<template>
  <el-carousel>
    <el-carousel-item  v-for="item in swipperList" :key="item" >
        <el-image @click="toDetail(item)" style="height:250px;width: 100%;object-fit:cover;" :src="item['image']" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getTopActivityApi } from "@/api/home";
import { useRouter } from "vue-router";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
const swipperList = ref([])
const router = useRouter()
//获取活动数据
const getTopActivity = async()=>{
  let res = await getTopActivityApi()
  if(res && res.code == 200){
    swipperList.value = res.data;
  }
}
//跳转详情
const toDetail = (item:any)=>{
  console.log(item)
  router.push({path:`/activityDetails/${item.id}`})
}
onMounted(()=>{
  getTopActivity()
})
</script>

<style scoped></style>
