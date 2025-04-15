<template>
  <el-carousel>
    <el-carousel-item v-for="item in swipperList" :key="item">
        <el-image style="height:250px;width: 100%;object-fit:cover;" :src="item.url" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
const swipperList = ref([
    {url:img1},
    {url:img3},
    {url:img4},
    {url:img2}
])
</script>

<style scoped></style>
