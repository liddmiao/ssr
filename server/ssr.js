// 导入express、vue、createRenderer
const express = require('express')
const Vue = require('vue')
const { createRenderer } = require('vue-server-renderer')

// 获取express实例
const server = express()

// 获取渲染器实例
const renderer = createRenderer()

server.get('/', (req, res) => {

  // 创建vue实例
  const app = new Vue({
    template: '<div>{{msg}}</div>',
    data () {
      return {
        msg: 'vue ssr test'
      }
    }
  })

  // 渲染vue实例
  renderer.renderToString(app).then(html => {
    res.send(html)
  }).catch(err => {
    res.status = 500
    res.send(err)
  })

})

server.listen(8000, () => {
  console.log('running!')
})