import { createApp } from 'vue'
import router from './router/index'
// import './style.css'
import App from './App.vue'
import myConfirm from './utils/myConfirm'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

//引入pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App);
app.use(ElementPlus,{
    locale: zhCn,
}).use(router).use(pinia).mount('#app');

// createApp(App).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.config.globalProperties.$myconfirm = myConfirm;
