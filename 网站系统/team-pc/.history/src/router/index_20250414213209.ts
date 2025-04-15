import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router' 
import Layout from '@/views/layout/index.vue' //引入layout组件
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect:'/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: Layout,
                meta:{
                    title:'首页'
          }
        }
      ]
    }
   ]
   const router = createRouter({
    history: createWebHistory(),
    routes
   })
   export default router
  