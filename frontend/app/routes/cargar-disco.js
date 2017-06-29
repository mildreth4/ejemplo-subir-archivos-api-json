import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("disco");
  },

  actions: {
    regresar() {
      this.transitionTo("index");
    },
    willTransition: function() {
      if (this.currentModel.get("isNew")) {
        this.get("currentModel").deleteRecord();
      }
    }
  }
});
