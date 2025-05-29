<template>
    <swiper
      :modules="modules"
      :initial-slide="1"
      :slides-per-view="3"
      :centeredSlides="true"
      :space-between="20"
      :autoplay ="{ disableOnInteraction: false }"
      loop
      class ="mySwiper"
      @swiper="setSwiperRef"
    >
      <swiper-slide class="teacher_li" v-for="(item, index) in list" :key="index">
        <el-image
          style="height: 250px; width: 100%; object-fit: cover"
          :src="item.url"
        />
      </swiper-slide>
    </swiper>
  </template>

  <script setup lang="ts">
    import { ref } from 'vue';
    import img1 from '@/assets/1.png';
    import img2 from '@/assets/2.png';
    import img3 from '@/assets/3.png';
    import img4 from '@/assets/4.png';
  
    // 引入swiper组件
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // 引入swiper样式
    import 'swiper/css';
    import 'swiper/css/navigation';    //轮播图底面的小圆点
    import 'swiper/css/pagination';    //轮播图的左右箭头
    import'swiper/css/scrollbar';     //轮播图的滚动条

    // 引入swiper核心和所需模块
    import { Autoplay, Pagination, Navigation, Virtual } from "swiper/modules";
  
    // 在modules中注册模块
    const modules = [Pagination, Navigation, Virtual, Autoplay];
    let swiperRef = null;
    const setSwiperRef = (swiper:any) => {
      swiperRef = swiper; 
    };
    const list = ref([ {url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }]); 
  </script>

  <style scoped></style>