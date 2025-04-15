import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router' 
import Layout from '@/views/layout/index.vue' //引入layout组件
const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        component: Layout
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router