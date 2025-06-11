import http from "@/http";
//查询分类列表
export const getWebListApi = ()=>{
    return http.get("/api/category/getWebList")
}
//查询社团列表
export const getTeamByCategoryIdApi = (categoryId:string)=>{
    return http.get("/api/team/getTeamByCategoryId",{categoryId:categoryId})
}
//根据id查询
export const getTeamByIdApi = (parm:string)=>{
    return http.get("/api/team/getById",{id:parm})
}