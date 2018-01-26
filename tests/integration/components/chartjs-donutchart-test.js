import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chartjs-donutchart', 'Integration | Component | chartjs donutchart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chartjs-donutchart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chartjs-donutchart}}
      template block text
    {{/chartjs-donutchart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
