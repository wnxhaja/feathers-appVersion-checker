# feathers-appVersion-checker
Feathersjs service for app versions

[![Build Status](https://travis-ci.org/wnxhaja/feathers-appVersion-checker.svg?branch=master)](https://travis-ci.org/wnxhaja/feathers-appVersion-checker)
[![Coverage Status](https://coveralls.io/repos/github/wnxhaja/feathers-appVersion-checker/badge.svg?branch=master)](https://coveralls.io/github/wnxhaja/feathers-appVersion-checker?branch=master)

## Installation

```
npm install feathers-appversion-checker --save
```

## Quick example

```js
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const versionChecker = require('feathers-appVersion-checker');
const app = express(feathers());

const options = {
      versions: { web: '1.2.3' },
      servicePath: 'versions',
    };

app.set('versioning', options);

app.configure(versionChecker);

app.service('versions').hooks({
 before: {
  ...
 },
 after: {
  ...
 },
 error: {
  ...
 }
});
```
