// 通用函数类型
export type FuncList =() =>any;
// 弹框标题
export enum Title{
    ADD ='新增',
    EDIT = '编辑'
}
// 新增和编辑的状态
export enum EditType{
    ADD = '0',
    EDIT = '1'
}
// 图片上传的数据类型
export type NewTyoe ={
    newImgUrl:Array<{url:string}>,//图片的地址
    deleteUrl:Array<{url:string}> 
}

