import Ember from 'ember';
import layout from '../templates/components/chart';

export default Ember.Component.extend({
  layout,

  tagName: 'canvas',

  attributeBindings: ['height', 'width'],

  mergedProperties: ['chartOptionsMapping'],

  chartOptionsMapping: {
    // options.padding
    paddingLeft: 'padding.left',
    paddingTop: 'padding.top',
    paddingRight: 'padding.right',
    paddingBottom: 'padding.bottom',

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

  didReceiveAttrs (changeSet) {
    this._super (...arguments);

    let redrawChart = false;

    // This determine if we need to redraw the chart. We redraw the chart if the
    // data has changed, or one of the chart options has changed.
    let attrs = Object.keys (this.attrs);

    for (let i = 0, len = attrs.length; i < len; ++ i) {
      let attr = attrs[i];
      let targetChartOption = this.get ('chartOptionsMapping')[attr];

      if (Ember.isPresent (targetChartOption)) {
        // If this is a nested option, make sure the parent option exists.
        let targetChartOptionParts = targetChartOption.split ('.');

        if (targetChartOptionParts.length > 1) {
          // Remove the last element in the array, which is the leaf option
          // that we are setting.
          targetChartOptionParts.pop ();

          let parentOptionKey = 'options';

          targetChartOptionParts.forEach ((part) => {
            parentOptionKey += `.${part}`;

            let option = this.get (parentOptionKey);

            if (Ember.isNone (option)) {
              this.set (parentOptionKey, {});
            }
          });
        }

        // Now, we can set the value on the options.
        let value = this.get (attr);
        let optionKey = `options.${targetChartOption}`;

        this.set (optionKey, value);

        redrawChart = true;
      }

      if (redrawChart)
        this.set ('chart', null);
    }
  },

  didRender () {
    this._super (...arguments);

    let chart = this.get ('chart');

    if (Ember.isNone (chart)) {
      let ctx = this.$ ()[0];

      if (this.get ('is2d')) {
        ctx = ctx.getContext ('2d');
      }

      chart = new Chart (ctx, {
        type: this.get ('type'),
        data: this.get ('data'),
        options: this.get ('options')
      });

      this.set ('chart', chart);
    }
  }
});
