<template>
  <el-container class="mycontainer">
    <el-aside class="myaside" width="200px">Aside</el-aside>
    <el-container>
      <el-header class="myheader">Header</el-header>
      <el-main class="mymain">Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.mycontainer{
    height: 100%;
    .myaside{
        background-color: rebeccapurple;
    }
    .myheader{
        background-color: brown;
    }
    .mymain{
        background-color: goldenrod;
    }
}
</style>
