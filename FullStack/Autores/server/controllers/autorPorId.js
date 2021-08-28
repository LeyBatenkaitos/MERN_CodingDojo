const { AutoresModel } = require("../models/Autores");

const nuevoAutor = async (req, res) => {
  try {
    const { autorID } = req.params;

    const doc = await AutoresModel.findById(autorID);

    if (!doc) return res.status(404).json({ message: "El Autor no Existe" });

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = nuevoAutor;
