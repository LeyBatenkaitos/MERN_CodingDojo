const { BromaModel } = require("../models/modeloBroma");
const bromaRandom = async (req, res) => {
  try {
    const count = await BromaModel.countDocuments().exec();
    const random = Math.floor(Math.random() * count);
    const documento = await BromaModel.findOne().skip(random).exec();
    res.json(documento);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};
module.export = bromaRandom;
