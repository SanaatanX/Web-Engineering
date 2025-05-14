<template>
  <SysDialog
    :title="dialog.title"
    :visible="dialog.visible"
    :width="dialog.width"   
    :height="dialog.height"  
    @onClose="onClose"
    @onConfirm="onConfirm"
  >
    <template v-slot:content> 弹框内容 </template>
  </SysDialog>
</template>

<script setup lang="ts">
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
//弹框属性
const { dialog, onClose, onConfirm, onShow } = useDialog();
//显示弹框
const show = ()=>{
  onShow()
}
//暴露组件里面的方法，给外部组件使用
defineExpose({
  show
})
</script>

<style scoped></style>
