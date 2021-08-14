const { BromaModel } = require("../models/modeloBroma");
const actualizarBroma = async (req, res) => {
  try {
    const { bromaId } = req.params;
    const { setup, punchline } = req.body;

    const broma = await BromaModel.findByIdAndUpdate(bromaId, {
      setup,
      punchline,
    });
    res.json(broma);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message,
    });
  }
};
module.exports = actualizarBroma;
