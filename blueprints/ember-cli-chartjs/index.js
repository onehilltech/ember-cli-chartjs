const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  packages: [
    {name: 'chart.js', target: '2.7.2'},
    {name: 'hammerjs', target: '2.0.8'}
  ],

  addons: [
    {name: 'ember-cli-moment-shim', target: '3.4.0'},
  ]
});
