<template>
    <div>
        <el-button type="primary" size="default" @click="addBtn">新增</el-button>
        <!-- 弹框组件 -->
         <SysDialog
         :title="dialog.title"
         :visible="dialog.visible"
         :width="dialog.width"
         :height="dialog.height"
         @onClose="onClose"
         @onConfirm="onConfirm" >
         <template v-slot:content>弹框测试</template>
        </SysDialog>
    </div>
</template>

<script setup lang="ts">
import SysDialog from '@/components/SysDialog.vue';
import { reactive } from 'vue';
import useDialog from '@/hook/useDialog';

//获取弹窗属性
const { dialog, onClose, onConfirm } = useDialog();

/* //弹框属性
const dialog = reactive({
    title: '新增', //标题
    visible: false, //是否显示
    width: 630, //宽度
    height: 280, //高度
}); */
const addBtn = () => {
    dialog.visible = true;
};
/* const onClose = () => {
    dialog.visible = false;
};
const onConfirm = () => {
    dialog.visible = false; 
};
 */

</script>

<style scoped>

</style>