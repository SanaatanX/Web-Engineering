<template>
    <el-dialog
    :title="title"
    :model-value="visible"
    :before-close="onClose"
    append-to-body
    :width="width + 'px'"
    :close-on-click-modal="false">
    
    <div class="container" :style="{height: height + 'px'}">
        <!-- 内容展示到插槽里面 -->
        <slot name="content"></slot>
    </div>
    <template #footer>
        <span class="dialog-footer">
            <el-button type="danger" @click="onClose">取消</el-button>
            <el-button type="primary" @click="onConfirm">确定</el-button>
        </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">

//定义弹框属性的数据类型
interface DialogProps { // 接口通常用来定义数据类型
    title: string; // 标题
    visible: boolean; // 控制弹窗的显示和隐藏
    width?:number; // 宽度  问号该字段不是必须的
    height?:number; // 高度
}

//接收父组件传递过来的值
const props = withDefaults(defineProps<DialogProps>(),{
    title:'标题',
    visible:false,
    width:630,
    height:280,
}); 
const emit = defineEmits(['onClose','onConfirm']); // 定义事件
//关闭弹窗
const onClose = () => {
    emit('onClose'); // 触发事件
}
//确定
const onConfirm = () => {
    emit('onConfirm'); // 触发事件 
}
</script>

<style scoped lang="scss">
.container {
   overflow-x: initial;
   overflow-y: auto; 
}
.el-dialog {
  border-top-left-radius: 7px !important; // 左上圆角 ;
  border-top-right-radius: 7px!important; // 右上圆角 ; 
  .el-dialog__header {
   margin-right: 0px;
   border-top-left-radius: 7px!important; // 左上圆角 ;
   border-top-right-radius: 7px!important; // 右上圆角 ;
   background-color: #17223b !important; // 背景颜色
   .el-dialog__title {
    color: #FFF; // 标题颜色
    font-size: 16px; // 标题字体大小 
    font-weight: 600;
   } 
  }
  .el-dialog__headerbtn { // 关闭按钮
   .el-dialog__close { // 关闭按钮
   color: #FFF; // 关闭按钮颜色
   }
  }
 .el-dialog__body { // 内容
    padding: 10px;
}
 .el-dialog__footer { // 底部
    border-top: 1px solid #e8eaec !important;
    padding: 10px;
 }
}
</style>