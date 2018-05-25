const createService = require('./Service');

module.exports = function feathersAppVersionChecker(app) {
  const versioning = app.get('versioning');
  if (!versioning) throw new Error('Versioning is not set');

  const serviceOptions = {
    versions: versioning.versions,
  };

  app.use(versioning.servicePath, createService(serviceOptions));

  app.service(versioning.servicePath);
};
