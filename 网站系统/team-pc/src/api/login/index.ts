import http from "@/http";
//注册参数类型
export type RegisterType = {
    sutId?:string,
    name: string,
    phone: string,
    grade: string,
    major: string,
    classes: string,
    username: string,
    password?: string
    sex: string
}
//登录参数类型
export type LoginType = {
    username: string,
    password: string,
    code:string
}
export type UpdateType = {
    sutId: string,
    oldPassword: string,
    newPassword:string
}
//获取验证码
export const getImgApi = () => {
    return http.post("/api/student/image")
}
//注册
export const registerApi = (parm:RegisterType) => {
    return http.post("/api/student/register",parm)
}
//登录
export const loginApi = (parm:LoginType) => {
    return http.post("/api/student/login",parm)
}
//修改用户信息
export const updateApi = (parm:RegisterType) => {
    return http.put("/api/student/updateInfo",parm)
}
//修改密码
export const updatePasswordApi = (parm:UpdateType) => {
    console.log(parm)
    return http.put("/api/student/updatePassword",parm)
}