const { Router } = require("express");

const router = Router();

router.use("/test", (req, res) => res.json({ message: "end-to-end funciona" }));
router.use("/autores", require("./Autores"));

module.exports = router;
