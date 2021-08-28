const { AutoresModel } = require("../models/Autores");

const editarAutor = async (req, res) => {
  try {
    const { autorID } = req.params;
    const { nombreAutores } = req.body;

    const doc = await AutoresModel.findByIdAndUpdate(autorID, {
      nombreAutores,
    });

    if (!doc)
      return res
        .status(404)
        .json({ message: "No se encontró ni se eliminó el Autor deseado" });

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = editarAutor;
