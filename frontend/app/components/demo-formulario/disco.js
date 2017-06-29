import Ember from "ember";

export default Ember.Component.extend({
  errors: [],

  guardarErrores(erroresDelAdaptador) {
    let erroresConvertidos = erroresDelAdaptador.errors.map(error => {
      return {
        detalle: error.detail,
        campo: error.source.pointer.split("/").pop()
      };
    });

    this.set("errors", erroresConvertidos);
  },

  actions: {
    submit(model) {
      model
        .save()
        .then(() => {
          this.sendAction("cuandoGuarda");
        })
        .catch(error => this.guardarErrores(error));
    },

    onUpload(file, extraArgumentForUpload) {
      extraArgumentForUpload.update({
        nombre: file.name,
        contenido: file.result
      });
    }
  }
});
