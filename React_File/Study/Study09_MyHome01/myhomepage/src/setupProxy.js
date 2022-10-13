const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://api.instantwebtools.net/v1",      
      changeOrigin: true,
    })
  );
};