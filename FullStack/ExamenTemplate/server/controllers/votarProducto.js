const { ProductoModel } = require("../models/Producto");

const votarProducto = async (req, res) => {
  try {
    const { productoID } = req.params;
    const { ratingNuevo } = req.body;

    const doc = await ProductoModel.findById(productoID);
    if (!doc) return res.status(404).json({ message: "No se pudó encontrar" });
    const ratingPromedio = doc.ratingPromedio;

    const cantidadDeVotos = doc.cantidadDeVotos;

    const nuevoRatingPromedio =
      (ratingPromedio * cantidadDeVotos + ratingNuevo) / (cantidadDeVotos + 1);

    doc.ratingPromedio = nuevoRatingPromedio;
    doc.cantidadDeVotos = doc.cantidadDeVotos + 1;

    //ratingNuevo no deveria ser menor que 0

    //await ProductoModel.findByIdAndUpdate(productoID, { doc });

    await doc.save();

    res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = votarProducto;
