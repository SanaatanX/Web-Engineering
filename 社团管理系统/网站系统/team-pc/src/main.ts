import { createApp } from 'vue'
import router from './router/index'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

/* import './style.css' */
import App from './App.vue'

//引入pinia构造函数
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//实例化Pinia
const pinia = createPinia() 
pinia.use(piniaPluginPersistedstate)

/* createApp(App).mount('#app') */
const app = createApp(App);
app.use(router).use(ElementPlus,{
    locale: zhCn,
    }).use(pinia).mount('#app')
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

export default pinia