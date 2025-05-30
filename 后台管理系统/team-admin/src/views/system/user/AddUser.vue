const commit = ()=>{
  //验证表单
  addFormRef.value?.validate(async(valid)=>{
    console.log(valid)
    //valid返回true的时候才是验证通过
    if(valid){
      //提交表单
      //await:等待数据返回，才执行下面的代码
      let res = null
      if(tags.value == EditType.ADD){
        // 添加用户时，不设置user_id，让后端自动生成
        const { userId, ...addData } = addModel
        res = await addUserApi(addData)
      }else{
        res = await editUserApi(addModel)
      }
      if(res && res.code == 200){
        //信息提示
        ElMessage.success(res.msg)
        //刷新表格
        emits('onFresh')
        onClose()
      }
    }
  })
} 