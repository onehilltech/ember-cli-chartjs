/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-chartjs',

  included: function (app) {
    this._super.included.apply (this, arguments);

    app.import ({
      development: app.bowerDirectory + '/chart.js/dist/Chart.js',
      production:  app.bowerDirectory + '/chart.js/dist/Chart.min.js'
    });

    app.import ({
      development: app.bowerDirectory + '/hammerjs/hammer.js',
      production:  app.bowerDirectory + '/hammerjs/hammer.min.js'
    });

    app.import ({
      development: app.bowerDirectory + '/chartjs-plugin-zoom/chartjs-plugin-zoom.js',
      production:  app.bowerDirectory + '/chartjs-plugin-zoom/chartjs-plugin-zoom.min.js'
    });
  }
};
