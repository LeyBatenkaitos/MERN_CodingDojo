const { BromaModel } = require("../models/modeloBroma");

const todasLasBromas = async (req, res) => {
  try {
    const broma = await BromaModel.find();
    res.json(broma);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};
module.export = todasLasBromas;
