import Ember from 'ember';
import layout from '../templates/components/chart';

export default Ember.Component.extend({
  layout,

  tagName: 'canvas',

  didInsertElement () {
    this._super (...arguments);

    let ctx = this.$ ()[0];

    if (this.get ('is2d')) {
      ctx = ctx.getContext ('2d');
    }

    let chart = new Chart (ctx, {
      type: this.get ('type'),
      data: this.get ('data'),
      options: this.get ('options')
    });

    this.set ('chart', chart);
  }
});
