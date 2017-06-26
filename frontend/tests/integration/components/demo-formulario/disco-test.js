import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('demo-formulario/disco', 'Integration | Component | demo formulario/disco', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{demo-formulario/disco}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#demo-formulario/disco}}
      template block text
    {{/demo-formulario/disco}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
