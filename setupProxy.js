const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/', {
          target: 'https://gonggam.toast.paas-ta.com',
          changeOrigin: true
      })
  )
};