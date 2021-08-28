const { AutoresModel } = require("../models/Autores");

const todosLosAutores = async (req, res) => {
  try {
    const autores = await AutoresModel.find();

    res.json(autores);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = todosLosAutores;
