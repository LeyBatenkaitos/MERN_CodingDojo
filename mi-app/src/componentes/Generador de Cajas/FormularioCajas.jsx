import React from "react";

const FormularioCajas = (props) => {
  const { cajaNueva } = props;
  const submitData = (e) => {
    e.preventDefault();
    const rawForm = e.target;
    const formData = new FormData(rawForm);
    const datosUtiles = {};
    for (const [key, valor] of formData.entries()) datosUtiles[key] = valor;
    if (datosUtiles["color"].trim() === "")
      return alert("Tienes que colocar un color!!!");

    if (datosUtiles["tamaño"].trim() === "")
      return alert("Tienes que colocar un Tamaño!!!");
    cajaNueva(datosUtiles);
    rawForm
      .querySelectorAll('input:not([type="submit"])')
      .forEach((input, index) => {
        input.value = "";
        if (index === 0) input.focus();
      });
  };
  return (
    <form onSubmit={submitData}>
      <label>Color</label>
      <input type="text" name="color" placeholder="Ingrese Color" />
      <label htmlFor="tamaño">Tamaño</label>
      <input type="number" name="tamaño" placeholder="Ingrese un tamaño" />
      <input type="submit" value="Agregar" />
    </form>
  );
};

export default FormularioCajas;
