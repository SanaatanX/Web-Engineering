import http from "@/http";
import { ListParm, User } from "./UserModel";
//新增
export const addUserApi = (parm:User)=>{
    return http.post("/api/user",parm)
}
//列表
export const getListApi = (parm:ListParm)=>{
    return http.get("/api/user/list",parm)
}
//编辑
export const editUserApi = (parm:User)=>{
    return http.put("/api/user",parm)
}
//删除
export const deleteUserApi = (parm:User)=>{
    return http.delete(`/api/user/${parm.userId}`)
}