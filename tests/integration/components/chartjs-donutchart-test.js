import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | chartjs donutchart', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{chartjs-donutchart}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#chartjs-donutchart}}
        template block text
      {{/chartjs-donutchart}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
