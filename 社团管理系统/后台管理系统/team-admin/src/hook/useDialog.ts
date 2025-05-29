import { reactive } from "vue";
export default function useDialog(){
    //弹框属性
const dialog = reactive({
    title: '新增', //标题
    visible: false, //是否显示
    width: 630, //宽度
    height: 280, //高度
});
//弹窗关闭
const onClose = () => {
    dialog.visible = false;
};
//弹窗确认
const onConfirm = () => {
    dialog.visible = false; 
};
//弹窗打开
const onShow = () => {
    dialog.visible = true;
};
return { dialog, onClose, onConfirm, onShow };
}