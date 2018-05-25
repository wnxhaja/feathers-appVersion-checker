const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const { expect } = require('chai');
const versionChecker = require('./src/index.js');

describe('Service', () => {
  describe('Failed setup', () => {
    const app = express(feathers());
    it('should fail if options is not set', () => {
      try {
        app.configure(versionChecker);
      } catch (err) {
        expect(err.message).to.be.equal(err.message);
      }
    });
  });

  describe('Correct setup', () => {
    const app = express(feathers());
    const options = {
      versions: { web: '1.2.3' },
      servicePath: 'versions',
    };
    app.set('versioning', options);

    it('should add the service', () => {
      app.configure(versionChecker);

      const service = app.service(options.servicePath);

      expect(service).to.be.ok;
    });
  });
});
