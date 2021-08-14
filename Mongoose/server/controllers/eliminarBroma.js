const { BromaModel } = require("../models/modeloBroma");
const eliminarBroma = async (req, res) => {
  try {
    const { bromaId } = req.params;
    const broma = await BromaModel.findByIdAndDelete(bromaId);
    res.json(broma);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = eliminarBroma;
