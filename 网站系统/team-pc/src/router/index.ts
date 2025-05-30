import { createRouter , createWebHistory , RouteRecordRaw } from "vue-router"
import Layout from "@/views/layout/index.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/home/home.vue"),
                meta: { title: "首页" }
            },
            {
                path: "/team",
                name: "team",
                component: () => import("@/views/team/team.vue"),
                meta: { title: "社团列表" },
                children:[]
            },
            {
                path: "/activity",
                name: "activity",
                component: () => import("@/views/activity/activity.vue"),
                meta: { title: "活动列表" },
                children:[]
            },
            {
                path: "/news",
                name: "news",
                component: () => import("@/views/news/news.vue"),
                meta: { title: "新闻列表" },
                children:[]
            },
            {
                path: "/notice",
                name: "notice",
                component: () => import("@/views/notice/notice.vue"),
                meta: { title: "公告列表" },
                children:[]
            },
            {
                path: "/mine",
                name: "mine",
                component: () => import("@/views/mine/mine.vue"),
                meta: { title: "个人中心" },
                children:[
                    {
                        path: "/mine/mycenter",
                        name: "mycenter",
                        component: () => import("@/views/mine/mycenter.vue"), 
                        meta: { title: "个人中心" }
                    },
                    {
                        path: "/mine/myteam",
                        name: "myteam",
                        component: () => import("@/views/mine/myteam.vue"),
                        meta: { title: "我的社团" } 
                    },
                    {
                        path: "/mine/myactivity",
                        name: "myactivity",
                        component: () => import("@/views/mine/myactivity.vue"),
                        meta: { title: "我的活动" } 
                    }
                ]
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router