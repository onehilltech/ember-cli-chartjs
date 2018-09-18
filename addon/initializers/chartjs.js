/* global Chart */

import { getWithDefault, getProperties } from '@ember/object';

export function initialize (app) {
  const ENV = app.resolveRegistration ('config:environment');
  const config = getWithDefault (ENV, 'ember-cli-chartjs', {});

  const {
    defaultFontColor,
    defaultFontFamily,
    defaultFontSize,
    defaultFontStyle
  } = getProperties (config, ['defaultFontColor', 'defaultFontFamily', 'defaultFontSize', 'defaultFontStyle']);

  Chart.defaults.global.defaultFontColor = defaultFontColor;
  Chart.defaults.global.defaultFontFamily = defaultFontFamily;
  Chart.defaults.global.defaultFontSize = defaultFontSize;
  Chart.defaults.global.defaultFontStyle = defaultFontStyle;}

export default {
  initialize
};
