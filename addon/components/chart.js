import Component from '@ember/component';
import layout from '../templates/components/chart';

import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

import { transform, set, isEqual, isObjectLike, isEmpty, merge } from 'lodash';

export default Component.extend({
  layout,

  tagName: 'canvas',

  classNames: ['chartjs-chart'],

  attributeBindings: ['height', 'width'],

  mergedProperties: ['chartOptionsMapping'],

  chartOptionsMapping: {
    // options.layout.padding
    layoutPaddingLeft: 'layout.padding.left',
    layoutPaddingTop: 'layout.padding.top',
    layoutPaddingRight: 'layout.padding.right',
    layoutPaddingBottom: 'layout.padding.bottom',

    // options.title
    titleDisplay: 'title.display',
    titlePosition: 'title.position',
    titleFontSize: 'title.fontSize',
    titleFontFamily: 'title.fontFamily',
    titleFontColor: 'title.fontColor',
    titleFontStyle: 'title.fontStyle',
    titlePadding: 'title.padding',
    titleText: 'title.text',

    // options.legend
    legendDisplay: 'legend.display',
    legendPosition: 'legend.position',
    legendFullWidth: 'legend.fullWidth',
    legendReverse: 'legend.reverse',
    legendLabelsBoxWidth: 'legend.labels.boxWidth',
    legendLabelsFontSize: 'legend.labels.fontSize',
    legendLabelsFontStyle: 'legend.labels.fontStyle',
    legendLabelsFontColor: 'legend.labels.fontColor',
    legendLabelsFontFamily: 'legend.labels.fontFamily',
    legendLabelsPadding: 'legend.labels.padding',
    legendLabelsUsePointStyle: 'legend.labels.usePointStyle',
  },

  chartOptionsKeys: computed ('chartOptionsMapping', function () {
    return Object.keys (this.get ('chartOptionsMapping'));
  }),

  /**
   * The options for the chart. Right now, we are going to recomputed the options
   * each time the attributes are updated. Unfortunately, this is our only option
   * since we do not have an easy way to define the dependencies for this computed
   * property.
   */
  options: computed (function () {
    const { chartOptionsKeys, chartOptionsMapping } = this.getProperties (['chartOptionsKeys', 'chartOptionsMapping']);
    const values = this.getProperties (chartOptionsKeys);

    return transform (values, (options, value, name) => value !== undefined ? set (options, chartOptionsMapping[name], value) : options, {});
  }).volatile (),

  _chart: null,

  didInsertElement () {
    this._super (...arguments);

    let { type, data, options, is2d } = this.getProperties (['type','data','_data','options','is2d']);
    let ctx = this.element;

    if (is2d) {
      ctx = ctx.getContext ('2d');
    }

    this._chart = new Chart (ctx, {type, data, options});
  },

  didUpdateAttrs () {
    this._super (...arguments);

    const { options, data } = this.getProperties (['options', 'data']);

    // Merge the options with the chart options, and set the data.
    merge (this._chart.config.options, options);
    this._chart.config.data = data;

    // Update the chart.
    this._chart.update ();
  },

  willDestroyElement () {
    this._super (...arguments);

    let chart = this.get ('chart');

    if (isPresent (chart)) {
      chart.destroy ();
    }
  }
});
