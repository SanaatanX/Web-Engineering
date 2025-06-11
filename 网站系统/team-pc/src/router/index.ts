import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import('@/views/login/login.vue'),
    name: "login"
  },
  {
    path: "/register",
    component: () => import('@/views/register/register.vue'),
    name: "register"
  },
  {
    path: '/',
    component: Layout,
    redirect:'/home',
    children: [
      {
        path: '/teamDetails/:id',
        name: 'teamDetails',
        component: () => import('@/views/team/details.vue'),
        meta:{
          title:'团队详情'
        }
      },
      {
        path: '/activityDetails/:id',
        name: 'activityDetails',
        component: () => import('@/views/activity/details.vue'),
        meta:{
          title:'活动详情'
        }
      },
      {
        path: '/newsDetails/:id',
        name: 'newsDetails',
        component: () => import('@/views/news/details.vue'),
        meta:{
          title:'新闻详情'
        }
      },
      {
        path: '/noticeDetails/:id',
        name: 'noticeDetails',
        component: () => import('@/views/notice/details.vue'),
        meta:{
          title:'公告详情'
        }
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta:{
          title:'首页'
        }
      },
      {
        path: '/team',
        name: 'team',
        component: () => import('@/views/team/team.vue'),
        meta: {
          title: '社团'
        },
        children: []
      },
      {
        path: '/activity',
        name: 'activity',
        component: () => import('@/views/activity/activity.vue'),
        meta: {
          title: '活动'
        }
      },
      {
        path: '/news',
        name: 'news',
        component: () => import('@/views/news/news.vue'),
        meta: {
          title: '新闻'
        }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/mine.vue'),
        meta: {
          title: '个人中心'
        },
        redirect:'/mine/mycenter',
        children: [
          {
            path: '/mine/mycenter',
            name: 'mycenter',
            component: () => import('@/views/mine/mycenter.vue'),
            meta: {
              title: '个人中心'
            }
          },
          {
            path: '/mine/myteam',
            name: 'myteam',
            component: () => import('@/views/mine/myteam.vue'),
            meta: {
              title: '我的社团'
            }
          },
          {
            path: '/mine/myactivity',
            name: 'myactivity',
            component: () => import('@/views/mine/myactivity.vue'),
            meta: {
              title: '我的活动'
            }
          }
        ]
      },
      {
        path: '/notice',
        name: 'notice',
        component: () => import('@/views/notice/notice.vue'),
        meta: {
          title: '公告列表'
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