const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const versionChecker = require('./src/index.js');
const expect = require('chai').expect;


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
    app.configure(versionChecker);
    const service = app.service(options.servicePath);

    it('should add the service', () => {
      expect(service).to.be.ok;
    });
  });
});
