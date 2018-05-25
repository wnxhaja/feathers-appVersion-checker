const createService = require('./Service');

module.exports = function(app) {
  const { versions, servicePath } = app.get('versioning');

  if (!versions) throw new Error('Versions is requied');
  if (!servicePath) throw new Error('Service path is required');

  const serviceOptions = {
    name: servicePath,
    versions,
  };

  app.use(servicePath, createService(serviceOptions));

  app.service(servicePath);
};
