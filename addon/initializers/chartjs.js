/* global Chart */

import { getWithDefault, getProperties } from '@ember/object';
import { isPresent } from '@ember/utils';

export function initialize (app) {
  const ENV = app.resolveRegistration ('config:environment');
  const config = getWithDefault (ENV, 'ember-cli-chartjs', {});

  const {
    defaultFontColor,
    defaultFontFamily,
    defaultFontSize,
    defaultFontStyle
  } = getProperties (config, ['defaultFontColor', 'defaultFontFamily', 'defaultFontSize', 'defaultFontStyle']);

  if (isPresent (defaultFontColor)) {
    Chart.defaults.global.defaultFontColor = defaultFontColor;
  }

  if (isPresent (defaultFontFamily)) {
    Chart.defaults.global.defaultFontFamily = defaultFontFamily;
  }

  if (isPresent (defaultFontSize)) {
    Chart.defaults.global.defaultFontSize = defaultFontSize;
  }

  if (isPresent (defaultFontStyle)) {
    Chart.defaults.global.defaultFontStyle = defaultFontStyle;
  }
}

export default {
  initialize
};
