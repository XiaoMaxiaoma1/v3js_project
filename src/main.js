import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入pinia持久化插件
import persist from 'pinia-plugin-persistedstate'

//导入element-plus组件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
// import router from './router'

import '@/style/reset.scss'

const app = createApp(App)
//use pinia插件并添加持久化
app.use(createPinia().use(persist))
//use路由
// app.use(router)
//use element-plus
app.use(ElementPlus)

//注册所有element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
