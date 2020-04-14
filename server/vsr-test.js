const Vue = require('vue')

// 创建vue实例
const app = new Vue({
  template: '<div>hello world</div>'
})

// 获取渲染器实例
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()

// 渲染vue实例
renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => {
  console.log(err)
})
