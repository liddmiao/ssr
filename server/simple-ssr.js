// 导入express、Vue
const express = require('express')

// 获取express实例
const server = express()


// 获取文件的绝对路径
const resolve = dir => require('path').resolve(__dirname, dir)

// 静态目录开放 dist/client
server.use(express.static(resolve('../dist/client'), { index: false }))

// 获取bundleRenderer
const { createBundleRenderer } = require('vue-server-renderer')
const bundle = resolve('../dist/server/vue-ssr-server-bundle.json')
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: require('fs').readFileSync(resolve('../public/index.html'), 'utf-8'),
  clientManifest: require(resolve('../dist/client/vue-ssr-client-manifest.json'))
})

server.get('/', async function (req, res) {

  try {
    // 将vm渲染成为html字符串
    const html = await renderer.renderToString({
      url: req.url
    })
    // 返回给前端
    res.send(html)
  } catch (error) {
    res.status(500).send('服务端渲染错误！请重试！')
  }

})

server.listen(3000, () => {
  console.log('running!')
})