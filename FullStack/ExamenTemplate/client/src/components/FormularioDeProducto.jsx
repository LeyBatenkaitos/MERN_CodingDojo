import React from "react";

const FormularioDeProducto = (props) => {
  const {
    onSubmit = () => {},
    textoDeBotón = "Añadir Producto",
    defaultValues = {
      nombreProducto: "",
      precio: "",
      descripcion: "",
      colores: [],
    },
  } = props;

  console.log({ propsDeFormulario: props });

  const _onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = { colores: formData.getAll("color").filter(Boolean) };
    for (const [campo, val] of formData.entries()) payload[campo] = val;
    console.log({ payload });
    onSubmit(payload, form);
  };

  return (
    <form className="formulario-de-nuevo-producto" onSubmit={_onSubmit}>
      <label htmlFor="nombreProducto">Título</label>
      <input
        type="text"
        id="nombreProducto"
        name="nombreProducto"
        defaultValue={defaultValues.nombreProducto}
        required
      />
      <label htmlFor="precio">Precio</label>
      <input
        type="number"
        id="precio"
        name="precio"
        defaultValue={defaultValues.precio}
        required
      />
      <label htmlFor="descripcion">Descripción</label>
      <input
        type="text"
        id="descripcion"
        name="descripcion"
        defaultValue={defaultValues.descripcion}
        required
      />
      <label htmlFor="color-1">Color 1</label>
      <input
        type="text"
        id="color-1"
        name="color"
        defaultValue={defaultValues.colores[0]}
      />
      <label htmlFor="color-2">Color 2</label>
      <input
        type="text"
        id="color-2"
        name="color"
        defaultValue={defaultValues.colores[1]}
      />
      <label htmlFor="color-3">Color 3</label>
      <input
        type="text"
        id="color-3"
        name="color"
        defaultValue={defaultValues.colores[2]}
      />
      <input type="submit" value={textoDeBotón} />
    </form>
  );
};

export default FormularioDeProducto;
