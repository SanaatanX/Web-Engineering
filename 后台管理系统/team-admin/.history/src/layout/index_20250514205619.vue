<template>
  <el-container class="mycontainer">
    <el-aside class="myaside" width="230px">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header class="myheader">Header</el-header>
      <el-main class="mymain">Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
</script>

<style scoped lang="scss">
.mycontainer{
    height: 100%;
    .myaside{
      background-color: #0e1f37;
    }
    .myheader{
      background-color: #0e1f37;
      color: #FFF;
    }
    .mymain{
        // background-color: goldenrod;
    }
}
</style>
