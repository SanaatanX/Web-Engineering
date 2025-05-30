<template>
    <view class="news-item" v-for="(item,index) in newList" :key="index">
        <view v-if="item.image">
            <el-image :src="item.image" class="images"></el-image>
        </view>
        <view class="news-intr">
            <view class="news-title">
                <text> {{item.name}} </text>
            </view>
            <view class="news-info">
              <view class="news-time">
                <text> {{item.create_time}} </text>
              </view>
              <view class="news-type">
                <text> {{item.real_num}}浏览</text>
              </view>
            </view>
        </view>
    </view>

    <el-pagination style="margin-top: 15px;"
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="parm.currentPage"
      :page-sizes="[10, 20, 40, 80, 100]"
      :page-size="parm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parm.total"
      background>
    </el-pagination>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import img1 from '@/assets/1.png';
import img2 from '@/assets/2.png';
import img3 from '@/assets/3.png';
import img4 from '@/assets/4.png';

//活动列表
const newList = ref([
    {
     create_time: '2024-08-12 12:00:00', 
     image: img1,
     real_num: '2004',
     name: '学党史向未来从中华民族伟大复兴视角解读党的第十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的第十九届六中全会',
    },
    {
     create_time: '2024-08-12 12:00:00', 
     image: img2,
     real_num: '2004',
     name: '学党史向未来从中华民族伟大复兴视角解读党的第十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的第十九届六中全会',
    },
    {
     create_time: '2024-08-12 12:00:00', 
     image: img3,
     real_num: '2004',
     name: '学党史向未来从中华民族伟大复兴视角解读党的第十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的第十九届六中全会',
    },
    {
     create_time: '2024-08-12 12:00:00', 
     image: img4,
     real_num: '2004',
     name: '学党史向未来从中华民族伟大复兴视角解读党的第十九届六中全会学党史向未来从中华民族伟大复兴视角解读党的第十九届六中全会',
    }
]);

//分页参数
const parm = reactive({
    currentPage: 1, // 当前页码
    pageSize: 10, // 页容量
    total: 4, // 总记录数
  });

//页容量改变时触发
const sizeChange = (size: number) => {

  };

//页数改变时触发
const currentChange = (page: number) => {
      
  }
  // 分页大小改变时触发
</script>

<style scoped lang="scss">
.news-item {
    display: flex;
    height: 110px;
    padding: 30px 0px;
    border-bottom: 1px solid #e4e7ed;
    cursor: pointer;
    .images {
        width: 200px;
        height: 100px;
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