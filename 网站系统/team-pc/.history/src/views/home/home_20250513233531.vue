<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span class="moretitle">推荐社团</span>
            <el-button class="button" text>更多
                <el-icon>
                    <ArrowRight></ArrowRight>
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
</template>

<script setup lang="ts">
import swipper1 from "./swipper1.vue";

</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.moreactivity {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.text {
  font-size: 14px;
}
.moretitle{
  color: #F3AF28;
  font-weight: 600;
}
</style>
