/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-chartjs',

  included: function (app) {
    this._super.included.apply (this, arguments);

    app.import ({
      development: bowerDirectory + '/chart.js/dist/Chart.js',
      production:  bowerDirectory + '/chart.js/dist/Chart.min.js'
    });
  }
};
