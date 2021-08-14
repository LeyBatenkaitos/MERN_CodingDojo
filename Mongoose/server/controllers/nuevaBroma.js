const {BromaModel} = require("../models/modeloBroma");

const nuevaBroma = async (req,res) => {
    try{
        const {setup,punchline} = req.body;
        const broma = new BromaModel({setup,punchline});
        await broma.save();
        res.json(broma);

    } catch (e) {
        console.error(e);
        res.status(500).json({message:e.message});

    }
};
module.exports = nuevaBroma;
