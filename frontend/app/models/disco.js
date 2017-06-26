import DS from "ember-data";
import { validatePresence } from "ember-changeset-validations/validators";

export default DS.Model.extend({
  titulo: DS.attr("string"),
  artista: DS.attr("string"),
  portada: DS.attr("string"),

  validaciones: {
    titulo: [validatePresence(true)],
    artista: [validatePresence(true)]
  }
});
