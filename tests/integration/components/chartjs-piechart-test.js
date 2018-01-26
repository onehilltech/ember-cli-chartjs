import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chartjs-piechart', 'Integration | Component | chartjs piechart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chartjs-piechart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chartjs-piechart}}
      template block text
    {{/chartjs-piechart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
