import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

Vue.config.productionTip = false

// 服务器会调用createApp，传递一个上下文进来
export function createApp (context) {
  // 创建一个路由器实例
  const router = createRouter()
  // 创建vue实例
  const app = new Vue({
    router,
    context,
    render: h => h(App),
  }).$mount('#app')
  return { app, router }
}

