const config = require('./webpack.common.config');

config.output = {
  filename: 'client-bundle.js',
  path: '../app/assets/javascripts/generated'
};

module.exports = config;


