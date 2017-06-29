import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("disco");
  },

  actions: {
    regresar() {
      this.transitionTo("index");
    }
  }
});
