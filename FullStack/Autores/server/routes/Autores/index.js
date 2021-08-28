const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => res.json({ productos: "Conexion Optima" }));
router.put("/:autorID", require("../../controllers/editarAutor"));
router.delete("/:autorID", require("../../controllers/eliminarAutor"));
router.post("/nuevo", require("../../controllers/nuevoAutor"));
router.get("/:autorID", require("../../controllers/autorPorId"));
router.get("/", require("../../controllers/todosLosAutores"));

module.exports = router;
