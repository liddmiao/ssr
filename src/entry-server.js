// 1、导航到首屏


import { createApp } from './main'

export default context => {
  // 导航过程可能是异步的，所以返回一个promise
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context)
    // 首屏
    router.push(context.url)
    router.onReady(() => {
      // 路由就绪后可能会有异步请求
      resolve(app)
    }, reject)
  })
}