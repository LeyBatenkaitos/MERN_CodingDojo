const { Router } = require("express");

const router = Router();

router.use("/test", (req, res) => res.json({ message: "end-to-end funciona" }));
router.use("/producto", require("./productos"));

module.exports = router;
