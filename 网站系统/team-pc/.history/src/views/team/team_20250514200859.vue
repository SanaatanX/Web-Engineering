<template>
  <el-row :gutter="10" style="margin-top: 10px">
    <el-col :span="4">
      <el-card class="box-card" :body-style="{ padding: '5px' }">
        <div v-for="item in category" :key="item.id" class="text item cateitem">
          {{ item.name }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="20">
      <el-card class="box-card">
        <div class="text item">
          <el-row>
            <el-col
              :xs="12"
              :sm="8"
              :md="7"
              v-for="item in tabledata"
              :key="item.teamId"
              :offset="1"
            >
              <div style="margin-top: 15px">
                <el-card :body-style="{ padding: '5px' }" shadow="hover">
                  <img :src="item.images" class="image" />
                  <div>
                    <strong style="font-size: 12px"
                      >{{ item.classGrade }}级{{ item.classMajor }}系{{
                        item.classNumber
                      }}班</strong
                    ><br />
                    <div class="bottom clearfix">
                      <time class="time"
                        ><span>创建时间:</span>{{ item.classCreatetime }}</time
                      >
                      <el-button class="button">查看</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
//分类数据
const category = ref([
  {
    name: "书画协会",
    id: "1",
  },
  {
    name: "文体社团",
    id: "1",
  },
  {
    name: "学术社团",
    id: "1",
  },
  {
    name: "公益社团",
    id: "1",
  },
]);
const tabledata = ref([
  {
    teamId: "1",
    classGrade: "2022",
    classMajor: "机械工程",
    images: img1,
    classNumber: "机械自动化",
    classCreatetime: "2022-10-10",
  },
  {
    teamId: "2",
    classGrade: "2022",
    images: img2,
    classMajor: "机械工程",
    classNumber: "机械自动化",
    classCreatetime: "2022-10-10",
  },
  {
    teamId: "3",
    classGrade: "2022",
    classMajor: "机械工程",
    images: img3,
    classNumber: "机械自动化",
    classCreatetime: "2022-10-10",
  },
  {
    teamId: "4",
    classGrade: "2022",
    classMajor: "机械工程",
    images: img4,
    classNumber: "机械自动化",
    classCreatetime: "2022-10-10",
  },
  {
    teamId: "5",
    classGrade: "2022",
    classMajor: "机械工程",
    images: img3,
    classNumber: "机械自动化",
    classCreatetime: "2022-10-10",
  },
  {
    teamId: "6",
    classGrade: "2022",
    images: img1,
    classMajor: "机械工程",
    classNumber: "机械自动化",
    classCreatetime: "2022-10-10",
  },
]);
</script>

<style scoped lang="scss">
.time {
  font-size: 10px;
  color: #999;
}
.cateitem {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #e4e7ed;
  text-align: center;
  cursor: pointer;
}
.bottom {
  margin-top: 5px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image {
  width: 100%;
  display: block;
}
</style>