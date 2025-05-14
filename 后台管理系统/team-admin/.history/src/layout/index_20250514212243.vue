<template>
    <el-container class="mycontainer" >
      <el-aside width="auto" class="myaside">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header class="myheader">
          <collapse></collapse>
          <BreadCrumb></BreadCrumb>
        </el-header>
        <el-main class="mymain">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
import collapse from './collapse.vue';
import BreadCrumb from './BreadCrumb.vue';
</script>

<style scoped lang="scss">
.mycontainer{
  height: 100%;
  .myaside{
    background-color: #0e1f37;
  }
  .myheader{
    padding: 0px 10px;
    display: flex;
    align-items: center;
    background-color: #0e1f37;
    color: #FFF;
  }
  .mymain{
    // background-color: aquamarine;
  }
}
</style>