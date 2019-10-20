const proxy = require('http-proxy-middleware');
//const PORT = env.process.PORT;

module.exports = function(app) {
  app.use(proxy('/auth/google', { target: `http://localhost:4000/` }));
  app.use(proxy('/auth/facebook', { target: `http://localhost:4000/` }));
  app.use(proxy('/api/*', { target: `http://localhost:4000/` }));
  app.use(
    proxy('/api/products/product/*', { target: `http://localhost:4000/` }),
  );
  app.use(
    proxy('/api/products/product/images/upload', {
      target: `http://localhost:4000/`,
    }),
  );
  app.use(proxy('/api/products/user/*', { target: `http://localhost:4000` }));
};
