import { createRouter , createWebHistory , RouteRecordRaw } from "vue-router"
// import Layout from "@/components/HelloWorld.vue"
import Layout from "@/layout/index.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/home/index.vue"),
                meta: { title: "首页" }
            },
            {
                path: "/user",
                name: "user",
                component: () => import("@/views/user/index.vue"),
                meta: { title: "用户管理" },
                children:[]
            },
            {
                path: "/menu",
                name: "menu",
                component: () => import("@/views/menu/index.vue"),
                meta: { title: "菜单管理" },
                children:[]
            },
            {
                path: "/member",
                name: "member",
                component: () => import("@/views/member/index.vue"),
                meta: { title: "团员管理" },
                children:[]
            },
            {
                path: "/category",
                name: "category",
                component: () => import("@/views/category/index.vue"),
                meta: { title: "社团管理" },
                children:[]
            },
            {
                path: "/team",
                name: "team",
                component: () => import("@/views/team/index.vue"),
                meta: { title: "社团管理" },
                children:[]
            },
            {
                path: "/activity",
                name: "activity",
                component: () => import("@/views/activity/index.vue"),
                meta: { title: "活动管理" },
                children:[]
            },
            {
                path: "/news",
                name: "news",
                component: () => import("@/views/news/index.vue"),
                meta: { title: "新闻管理" },
                children:[]
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router