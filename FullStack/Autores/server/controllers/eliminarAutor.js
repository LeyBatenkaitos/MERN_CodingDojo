const { AutoresModel } = require("../models/Autores");

const eliminarAutor = async (req, res) => {
  try {
    const { autorID } = req.params;

    const doc = await AutoresModel.findByIdAndDelete(autorID);

    if (!doc)
      return res
        .status(404)
        .json({ message: "No se encontro ni elimino el Autor" });

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = eliminarAutor;
