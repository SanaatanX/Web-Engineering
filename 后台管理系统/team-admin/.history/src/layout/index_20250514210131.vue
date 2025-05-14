<template>
  <el-container class="mycontainer">
    <el-aside class="myaside" width="auto">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header class="myheader">
        <collapse></collapse>
      </el-header>
      <el-main class="mymain">Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
import collapse from './collapse.vue';
</script>

<style scoped lang="scss">
.mycontainer{
    height: 100%;
    .myaside{
      background-color: #0e1f37;
    }
    .myheader{
      display: flex;
      align-items: center;
      background-color: #0e1f37;
      color: #FFF;
      padding: 0px 10px;
    }
    .mymain{
        // background-color: goldenrod;
    }
}
</style>
