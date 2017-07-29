/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-chart.js',

  included: function (app) {
    this._super.included.apply (this, arguments);

    app.import (app.bowerDirectory + '/chart.js/dist/Chart.min.js');
  }
};
