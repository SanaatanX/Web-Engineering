<template>
    <el-container class="mycontainer">
        <el-aside class="myaside" width="auto">
        <Menu></Menu>
        </el-aside>
    <el-container>
        <el-header class="myheader">
        <collapse></collapse>
        <BreadCrumb></BreadCrumb>
        </el-header>
        <el-main class="mymain">
        <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
    import Menu from './Menu.vue';
    import collapse from './collapse.vue';
    import BreadCrumb from './BreadCrumb.vue';
    import SysDialog from '@/components/SysDialog.vue';
    import useDialog from '@/hook/useDialog';
    //弹框属性
    const {dialog , onClose, onConfirm, onShow} = useDialog();
</script>

<style scoped lang="scss">
.mycontainer {
    height: 100%;
    .myaside {
    background-color: #0e1f37;
  }
  .myheader {
    background-color: #0e1f37;
    color: #FFF;
    display: flex;
    align-items: center;
    padding: 0px 10px;
  }
 .mymain {
    // background-color: #232633;
    padding: 0px;
  } 
 }
</style>