<template>
    <el-row :gutter="10">
      <el-col :span="20"
        ><div class="grid-content ep-bg-purple-light" />
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
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
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
      <el-pagination
      style="margin-top: 15px"
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="parm.currentPage"
      :page-sizes="[20, 40, 80, 100]"
      :page-size="parm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parm.total"
      background
    >
    </el-pagination>
    </el-row>
  </template>

  <script setup lang="ts">
  import { ref, reactive } from "vue";
  import img1 from "@/assets/1.png";
  import img2 from "@/assets/2.png";
  import img3 from "@/assets/3.png";
  import img4 from "@/assets/4.png";
  const category = ref([
    {
      name: "个人中心",
      id: "1",
    },
    {
      name: "我的社团",
      id: "1",
    },
    {
      name: "我的活动",
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
  const parm = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 10,
  });
  const sizeChange = (size: number) => {};
  const currentChange = (page: number) => {};
  </script>

  <style scoped>
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
