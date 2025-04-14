import { createApp } from 'vue'
 import router from './router/index'
 //引入element plus
 import ElementPlus from 'element-plus'
 import 'element-plus/dist/index.css'
 import * as ElementPlusIconsVue from '@element-plus/icons-vue'
 //记得注释
// import './style.css'
 import App from './App.vue'
 //引入Pinia构造函数
import { createPinia } from 'pinia'
// 实例化 Pinia
const pinia = createPinia()
// createApp(App).mount('#app')
const app = createApp(App);
app.use(ElementPlus).use(router).use(pinia).mount('#app')
 //全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}