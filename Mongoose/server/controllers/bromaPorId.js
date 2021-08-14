const { BromaModel } = require("../models/modeloBroma");
const bromaPorID = async (req, res) => {
  try {
    const { bromaId } = req.params;
    const broma = await BromaModel.findById(bromaId);
    //tambien puede ser const broma = await BromaModel.findOne({_id:jokeId});
    res.json(broma);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = bromaPorID;
