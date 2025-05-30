<template>
    <!-- 推荐社团 -->
    <el-row>
        <el-col :span="24">
    <el-card class="box-card" :body-style="{ height:'250px',padding:'10px'}">
    <template #header>
      <div class="card-header">
        <span class="moretitle">推荐社团</span>
        <el-button class="button" text>更多
            <el-icon>
                <ArrowRight />
            </el-icon>
        </el-button>
      </div>
    </template>
    <div>
        <swipper1></swipper1>
    </div>
  </el-card>
    </el-col>
    </el-row>

    <!-- 活动推荐 -->
    <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="8" :offset="0">
           <el-card class="box-card":body-style="{ height:'250px',padding:'10px'}">
            <template #header>
              <div class="card-header">
                <span class="moretitle">推荐社团</span>
              <el-button class="button" text>更多
                <el-icon>
                <ArrowRight />
                </el-icon>
              </el-button>
              </div>
            </template>
    <div class="text item">
        <swipper></swipper>
    </div>
    </el-card>
    </el-col>

    <!-- 最新公告 -->
        <el-col :span="16" :offset="0">
            <el-card class="box-card":body-style="{ height:'250px',padding:'10px'}">
            <template #header>
              <div class="card-header">
                <span class="moretitle">最新公告</span>
              <el-button class="button" text>更多
                <el-icon>
                <ArrowRight />
                </el-icon>
              </el-button>
              </div>
            </template>
        <div>
            <div  class="notice" v-for="(item,index) in noticeList">
                <div class="title" >{{index+1 + "、" +item.title }}</div>
                <div class="date" >{{ item.createTime }}</div>
            </div>
        </div>
        </el-card>
        </el-col>
    </el-row>

    <!-- 活动列表 -->
     <el-row style="margin-top: 30px;">   
        <el-col :span="24" :offset="0">
            <el-card class="box-card":body-style="{ height:'250px',padding:'10px'}">
            <template #header>
              <div class="card-header">
                <span class="moretitle">最新活动</span>
              <el-button class="button" text>更多
                <el-icon>
                <ArrowRight />
                </el-icon>
              </el-button>
              </div>
            </template>
        <div>
            <div  class="notice" v-for="(item,index) in noticeList">
                <div class="title" >{{index+1 + "、" +item.title }}</div>
                <div class="date" >{{ item.createTime }}</div>
            </div>
        </div>
        </el-card>
        </el-col>
     </el-row>

     <!-- 新闻列表 -->
     <el-row style="margin-top: 30px;">   
        <el-col :span="24" :offset="0">
            <el-card class="box-card":body-style="{ height:'250px',padding:'10px'}">
            <template #header>
              <div class="card-header">
                <span class="moretitle">最新新闻</span>
              <el-button class="button" text>更多
                <el-icon>
                <ArrowRight />
                </el-icon>
              </el-button>
              </div>
            </template>
        <div>
            <div  class="notice" v-for="(item,index) in noticeList">
                <div class="title" >{{index+1 + "、" +item.title }}</div>
                <div class="date" >{{ item.createTime }}</div>
            </div>
        </div>
        </el-card>
        </el-col>
     </el-row>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import swipper1 from './swipper1.vue';
import swipper from './swipper.vue';
const noticeList = ref([
       {
        title:'书法社最新招新公告',
        createTime:'2025-05-08'
       },
       {
        title:'世界气象日',
        createTime:'2025-05-09'
       },
       {
        title:'世界湿地日',
        createTime:'2025-05-10'
       },
       {
        title:'书法社最新招新公告',
        createTime:'2025-05-08'
       },
       {
        title:'世界气象日',
        createTime:'2025-05-09'
       },
       {
        title:'世界湿地日',
        createTime:'2025-05-10'
       },
])
</script>

<style scoped lang="scss">
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    } 
    .moreactivity{
        display: flex;
        align-items: center; 
        cursor: pointer;
    }
   .text{
          font-size: 14px; 
   }
   .moretitle{
           color: #F3AF28;
           font-weight: 600;
   }
   .notice{
           cursor: pointer;
           display: flex;
           height: 30px;
           line-height: 30px;
           .title {
               font-size: 14px;
               color: #666666;
               font-weight: 600;
           }
   }
   .date {
       font-size: 14px;
       margin-left: 20px;
   }
</style>