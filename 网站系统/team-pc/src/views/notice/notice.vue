<template>
  <view @click="toDetail(item)" class="news-item" v-for="(item, index) in newList" :key="index">
    <view v-if="item['image']">
      <el-image class="images" :src="item['image']" />
    </view>
    <view class="news-intr">
      <view class="news-title">
        <text>{{ item['title'] }}</text>
      </view>
      <view class="news-info">
        <view class="news-time"
          ><text>{{ item['createTime'] }}</text></view
        >
        <!-- <view class="news-type"
            ><text>{{ item.real_num }}浏览</text></view
          > -->
      </view>
    </view>
  </view>
  <el-pagination
    style="margin-top: 15px"
    @size-change="sizeChange"
    @current-change="currentChange"
    :current-page.sync="parm.currentPage"
    :page-sizes="[1, 10, 20, 40, 80, 100]"
    :page-size="parm.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="parm.total"
    background
  >
  </el-pagination>
</template>

<script setup lang="ts">
import { ref, reactive,computed } from "vue";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import { newsSotre } from "@/store/news";
import { useRouter } from "vue-router";
const router = useRouter()
const nstore = newsSotre();
//活动列表
const newList = computed(() => {
  return nstore.newsList;
});
//活动列表
// const newList = ref([
//   {
//     create_time: "2021-12-01",
//     image: img1,
//     real_num: "2004",
//     name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
//   },
//   {
//     create_time: "2021-12-01",
//     image: img2,
//     real_num: "2004",
//     name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
//   },
//   {
//     create_time: "2021-12-01",
//     image: img3,
//     real_num: "2004",
//     name: "学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的十九届六中全会",
//   },
// ]);
//分页参数
const parm = computed(() => {
  return nstore.parm;
});
//页容量改变时触发
const sizeChange = (size: number) => {
  //设置分页容量
  nstore.parm.pageSize = size;
  nstore.getNewsList();
};
//页数改变时触发
const currentChange = (page: number) => {
  //设置分页容量
  nstore.parm.currentPage = page;
  nstore.getNewsList();
};
//跳转详情
const toDetail = (item:any)=>{
  console.log(item)
  router.push({path:`/noticeDetails/${item.id}`})
}
</script>
<style scoped lang="scss">
.news-item {
  display: flex;
  height: 110px;
  padding: 30px 0px;
  border-bottom: 1px solid #e4e7ed;
  cursor: pointer;
  .images {
    height: 100px;
    width: 200px;
    border-radius: 10px;
  }
  .news-intr {
    margin-left: 15px;
    .news-info {
      display: flex;
      font-size: 28rpx;
      color: #999999;
      margin-left: 16rpx;
      .news-time {
        text-align: left;
      }
      .news-type {
        text-align: right;
        flex: 2;
      }
    }
  }
}
</style>
