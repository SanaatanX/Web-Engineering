<template>
  <div>
    <el-button type="primary" icon="Plus" size="default" @click="addBtn"
      >新增</el-button
    >
  </div>
  <SysDialog
    :title="dialog.title"
    :visible="dialog.visible"
    :width="dialog.width"   
    :height="dialog.height"  
    @onClose="onClose"
    @onConfirm="onConfirm"
  >
    <template v-slot:content> 
        弹框测试
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import SysDialog from "@/components/SysDialog.vue";
//弹框属性
const dialog = reactive({
  title: "新增",
  visible: false,
  width: 630,
  height: 280,
});
//弹框关闭
const onClose = () => {
  dialog.visible = false;
};
//弹框确定
const onConfirm = () => {
  dialog.visible = false;
};
//按钮点击事件
const addBtn = () => {
  dialog.title = "新增数据"; 
  dialog.visible = true;
};
</script>

<style scoped></style>
