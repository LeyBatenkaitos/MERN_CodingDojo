const { Router } = require("express");

const router = Router();
router.use("/bromas", require("./bromas"));
module.exports = router;
