const { AutoresModel } = require("../models/Autores");

const nuevoAutor = async (req, res) => {
  try {
    const { nombreAutores } = req.body;

    const existiente = await AutoresModel.findOne({
      nombreAutores,
    });

    if (existiente) throw new Error("Este Autor ya existe");

    const doc = await AutoresModel.create({
      nombreAutores,
    });

    res.status(201).json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = nuevoAutor;
