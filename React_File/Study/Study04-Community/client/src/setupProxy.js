// 프록시 설정.
// 클라이언트와 서버쪽이 포트가 다를 때 사용한다.
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:"http://localhost:5050",
      changeOrigin: true
    })
  )
}