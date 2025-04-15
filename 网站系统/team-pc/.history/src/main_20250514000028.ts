import { createApp } from 'vue'
import router from './router/index'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import piniaPersist from 'pinia-plugin-persist'
//记得注释
// import './style.css'
import App from './App.vue'
//引入Pinia构造函数
import { createPinia } from 'pinia'
// 实例化 Pinia
const pinia = createPinia()
// createApp(App).mount('#app')
const app = createApp(App);
app.use(ElementPlus, {
    locale: zhCn,
  }).use(router).use(pinia).mount('#app')
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 实例化 Pi
//使用持久化插件
pinia.use(piniaPersist)