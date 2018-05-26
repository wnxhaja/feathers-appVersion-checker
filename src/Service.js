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

  async find(params) {
    const { query } = params;

    if (query.version) return [this.versions[query.version]];

    if ((Object.keys(query).length === 0) && (query.constructor === Object)) {
      return this.versions.map(item => item);
    }

    return [];
  }
}

module.exports = function createService(options) {
  return new Service(options);
};

module.exports.Service = Service;
