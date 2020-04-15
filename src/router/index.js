import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 导出一个工厂函数
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: {
          template: '<div>index Page</div>'
        }
      },
      {
        path: '/detail',
        component: {
          template: '<div>detail Page</div>'
        }
      },
      {
        path: '*',
        component: {
          template: '<div>error Page</div>'
        }
      }
    ]
  })
}