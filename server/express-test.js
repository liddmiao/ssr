// 导入express
const express = require('express')

// 获取express实例
const server = express()

server.get('/', (req, res) => {
  res.send('<strong>hello world</strong>')
})

server.listen(8000, () => {
  console.log('running!')
})