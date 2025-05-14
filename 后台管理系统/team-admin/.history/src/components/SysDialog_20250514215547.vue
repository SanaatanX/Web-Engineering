<template>
    <el-dialog
      :title="title"
      :model-value="visible"
      :before-close="onClose"
      append-to-body
      :width="width + 'px'"
      :close-on-click-modal="false"
    >
      <div class="container" :style="{ height: height + 'px' }">
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
  interface DialogProps{
      title:string,
      visible:boolean,
      width:number,
      height:number
  }
  const props = withDefaults(defineProps<DialogProps>(), {
    title: '标题',
    visible:false,
    width:630,
    height:280
  });
  const emit = defineEmits(["onClose", "onConfirm"]);
  //定义弹框的关闭
  const onClose = () => {
    emit("onClose");
  };
  //定义弹框的确定
  const onConfirm = () => {
    emit("onConfirm");
  };

  </script>
  <style lang="scss" scope>
  .container {
    overflow-x: initial;
    overflow-y: auto;
  }
  .el-dialog {
  // 移除 .el-dialog 自身的左右内边距，让 header 的深色背景可以触及边缘
  padding-left: 0 !important;
  padding-right: 0 !important;
  
  // .el-dialog 自身的上下内边距可以保留 Element Plus 的默认值，或者根据需要自定义。
  // 例如:
  // padding-top: 20px; 
  // padding-bottom: 20px;

  // 确保 .el-dialog 本身的背景色是浅色（通常是 Element Plus 的默认白色或浅灰色）
  // 如果有其他全局样式影响了它，可以在这里明确指定
  // background-color: #fff; // 示例：确保弹框主体是白色

  border-top-left-radius: 7px !important; // 弹框本身的顶部圆角
  border-top-right-radius: 7px !important;

  .el-dialog__header {
    background-color: #17223b !important; // **仅头部设置此深色背景**
    border-top-left-radius: 7px !important; // 与 .el-dialog 的顶部圆角保持一致
    border-top-right-radius: 7px !important; // 与 .el-dialog 的顶部圆角保持一致

    // 为 header 内部的内容（标题、关闭按钮）设置内边距。
    // 这个左右内边距值建议与 Element Plus 中 .el-dialog 或 .el-dialog__header 默认的左右 padding 值一致。
    // 您可以通过浏览器开发者工具检查这些默认值（通常是 20px 或 30px）。
    // 示例：上下 20px，左右 20px (请根据实际情况调整)
    padding: 20px 20px; 
    
    .el-dialog__title {
      color: #fff; // 深色背景配白色文字
      font-size: 16px;
      font-weight: 600;
    }
  }

  .el-dialog__headerbtn {
    // 关闭按钮的位置，top 和 right 的值应与 header 的上下和左右 padding 对应
    top: 2cqw; // 对应 header 的 padding-top
    right: 20px; // 对应 header 的 padding-right
    .el-dialog__close {
      color: #fff; // 关闭按钮图标在深色背景下应为白色
    }
  }

  .el-dialog__body {
    // background-color: #fff; // 确保 body 背景是浅色 (通常 Element Plus 默认就是)
    // color: #303133; // 浅色背景配深色文字 (Element Plus 默认)

    // 为 body 内容区设置内边距。
    // 用户原有的上下 padding 是 10px。
    // 左右内边距应与 header 的左右内边距保持一致，以确保内容垂直对齐。
    padding: 10px 20px; // 示例：左右 20px (请根据实际情况调整)
  }

  .el-dialog__footer {
    // background-color: #fff; // 确保 footer 背景是浅色 (通常 Element Plus 默认就是)
    // border-top: 1px solid #e8eaec !important; // 如果是浅色背景，使用原来的浅色分隔线

    // 为 footer 内容区设置内边距。
    // 用户原有的上下 padding 是 10px。
    // 左右内边距应与 header 的左右内边距保持一致。
    padding: 10px 20px; // 示例：左右 20px (请根据实际情况调整)

    .dialog-footer {
      // 按钮将保持其默认样式，适合浅色背景
    }
  }
}
  </style>