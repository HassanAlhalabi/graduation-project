const proxy = require('http-proxy-middleware');
const server_port = require('../../config/glob-config');

module.exports = function(app) {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
  app.use(proxy('/auth/facebook', { target: 'http://localhost:5000' }));
  app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
  app.use(
    proxy('/api/products/product/*', {
      target: 'http://localhost:5000',
    }),
  );
  app.use(
    proxy('/api/products/product/images/upload', {
      target: 'http://localhost:5000',
    }),
  );
  app.use(
    proxy('/api/products/user/*', {
      target: 'http://localhost:5000' + server_port,
    }),
  );
};
