import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('demo-disco', 'Integration | Component | demo disco', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{demo-disco}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#demo-disco}}
      template block text
    {{/demo-disco}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
