/* eslint-env node */
'use strict';

module.exports = {
  name: '@onehilltech/ember-cli-chartjs',

  included: function (app) {
    this._super (...arguments);

    app.import ({
      development: 'node_modules/chart.js/dist/Chart.js',
      production:  'node_modules/chart.js/dist/Chart.min.js'
    });
  }
};
