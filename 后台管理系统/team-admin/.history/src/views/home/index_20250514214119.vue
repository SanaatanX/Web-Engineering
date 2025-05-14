<template>
  <div>
    <div style="text-align: left;">
    <!-- 弹框组件 -->
    <SysDialog
      :title="dialog.title"
      :visible="dialog.visible"
      :width="dialog.width"   
      :height="dialog.height"  
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <template v-slot:content> 弹框测试 </template>
    </SysDialog>
  </div>
</template>

<script setup lang="ts">
import SysDialog from "@/components/SysDialog.vue";
import { reactive } from "vue";
import  useDialog  from "@/hooks/useDialog";
//获取弹框属性
const {dialog,onClose,onConfirm,onShow} = useDialog()
// //弹框属性
// const dialog = reactive({
//   title: "新增",
//   visible: false,
// });
//新增按钮点击事件
// const addBtn = () => {
//     dialog.visible = true
// };
// const onClose = () => {
//     dialog.visible = false
// };
// const onConfirm = () => {
//     dialog.visible = false
// };
</script>

<style scoped></style>
