class Service {
  constructor(options) {
    const {
      versions,
    } = options;

    this.versions = versions;
  }

  async setup(app) {
    this.app = app;
  }

  find(params) {
    const { query } = params;

    if (query.version) return this.versions[query.version];
    if ((Object.keys(query).length === 0) && (query.constructor === Object)) return this.versions;

    return null;
  }
}

module.exports = function versionChecker(app) {
  const { versions, servicePath } = app.get('versioning');

  if (!versions) throw new Error('Versions is requied');
  if (!servicePath) throw new Error('Service path is required');

  const serviceOptions = {
    name: servicePath,
    versions,
  };

  app.use(servicePath, new Service(serviceOptions));

  app.service(servicePath);
};
