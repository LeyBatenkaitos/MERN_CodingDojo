const { Router } = require("express");

const router = Router();

router.get("/", require("../controllers/allJokes"));
router.get("/random", require("../controllers/bromaRandom"));
router.get("/:bromaId", require("../controllers/bromaPorId"));
router.post("/nueva", require("../controllers/nuevaBroma"));
router.put("/update/:bromaId", require("../controllers/actualizarBroma"));
router.delete("/delete/:bromaId", require("../controllers/eliminarBroma"));

module.exports = router;
