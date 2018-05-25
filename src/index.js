const createService = require('./Service');

module.exports = function feathersAppVersionChecker(app) {
  const versioning = app.get('versioning');
  if (!versioning) throw new Error('Versioning is not set');

  const { servicePath, versions } = versioning;

  const serviceOptions = {
    versions,
  };

  app.use(servicePath, createService(serviceOptions));

  app.service(servicePath);
};
