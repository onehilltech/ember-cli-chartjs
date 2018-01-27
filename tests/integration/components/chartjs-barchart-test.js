import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chartjs-barchart', 'Integration | Component | chartjs barchart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chartjs-barchart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chartjs-barchart}}
      template block text
    {{/chartjs-barchart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
