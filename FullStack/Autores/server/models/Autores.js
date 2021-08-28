const mongoose = require("mongoose");

const AutoresSchema = new mongoose.Schema({
  nombreAutores: {
    type: String,
    required: [true, "El Autor necesita un nombre"],
    minLength: [
      3,
      "El nombre del Autor debe tener por lo menos 3 caracateres, se ingresó {VALUE}",
    ],
  },
});

const AutoresModel = mongoose.model("producto", AutoresSchema);

module.exports = { ProductoSchema: AutoresSchema, AutoresModel };
