<template>
  <div>
    <el-button type="primary" icon="Plus" size="default" @click="addBtn"
      >新增</el-button
    >
  </div>
  <SysDialog
    :title="dialog.title"
    :visible="dialog.visible"
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
  width: 700, // 确保提供了 width
  height: 450, // 确保提供了 height
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
  dialog.visible = true;
};
</script>

<style scoped></style>
