// 用户的数据类型
export type User = {
    userId: string;
    userName: string;
    password: string;
    nickName: string;
    phone: string;
    sex: string;
    status: string;
}

// 表格查询参数
export type ListParm = {
    currentPage: number;
    pageSize: number;
    nickName: string;
    total?: number;
}