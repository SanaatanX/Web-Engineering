import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router/index'
 //引入element plus
 import ElementPlus from 'element-plus'
 import 'element-plus/dist/index.css'
 import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//createApp(App).mount('#app')
const app = createApp(App);
app.use(router).mount('#app')