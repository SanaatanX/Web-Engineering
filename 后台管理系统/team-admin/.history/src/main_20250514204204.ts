import { createApp } from 'vue'
import router from './router/index'
//记得注释
// import './style.css'
import App from './App.vue'
// createApp(App).mount('#app')
const app = createApp(App);
app.use(router).mount('#app')