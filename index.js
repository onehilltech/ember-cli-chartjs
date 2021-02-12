/* eslint-env node */
'use strict';

module.exports = {
<<<<<<< HEAD
  name: '@onehilltech/ember-cli-chartjs',

  included: function (app) {
    this._super (...arguments);

    app.import ({
      development: 'node_modules/chart.js/dist/Chart.js',
      production:  'node_modules/chart.js/dist/Chart.min.js'
    });
  }
=======
  name: require('./package').name
>>>>>>> 1fe2476... v3.3.0...v3.18.0
};
