import { defineStore } from 'pinia'
//定义store
// 第一个参数是你的应用中 Store 的唯一 ID
export const userSotre = defineStore('userSotre', {
    state: () => {
        return {
            userInfo: {
                sutId: '',
                username: '',
                phone: '',
                name: '',
                major: "",
                grade: '',
                classes: '',
                sex: ''
            }
        }
    },
    actions: {
        setUserInfo(user: any) {
            this.userInfo = user;
        }
    },
    persist: {
        enabled: true,
        strategies: [
            { storage: sessionStorage, paths: ['userInfo'] },
        ],
    }
})