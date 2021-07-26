import React, { useState } from "react";
import ErrorDeFormulario from "./ErrorDeFormulario";

const FormularioFormData = () => {
  const [errorFormulario, setErrorFormulario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
  });
  const obtenerFormData = (form) => {
    const formData = new FormData(form);
    const datos = {};
    for (const [nombre, valor] of formData.entries()) datos[nombre] = valor;
    return datos;
  };

  const verificador = (inputs) => {
    const { nombre, apellido, correo, contraseña, confirmarContraseña } =
      inputs;
    const errors = {};

    if (nombre.length < 2) errors.nombre = "Tiene que ser Mayor a 2 Caracteres";
    if (apellido.length < 2)
      errors.apellido = "Tiene que tener mas de 2 Caracteres";
    if (correo.length < 5)
      errors.correo = "El correo tiene que tener mas de 5 caracteres";
    if (contraseña.length < 8)
      errors.contraseña = "Tiene que tener mas de 8 Caracteres";
    if (contraseña !== confirmarContraseña);
    errors.confirmarContraseña = "Las contraseñas no coinciden, Verifiquelas";

    setErrorFormulario(errors);
    return !Object.keys(errors).length;
  };
  const onChange = (e) => {
    const form = e.target.closest("form");
    const data = obtenerFormData(form);
    const esValida = verificador(data);
    console.log(esValida);
  };
  const registrar = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = obtenerFormData(form);
    const esValida = verificador(data);
    if (esValida) {
      console.log(`%cExito en Registro!!!`, `font-size: 1.5rem; color:green`, {
        data,
      });
    } else window.alert("Faltan Campos por llenar, Verifique.");
  };
  return (
    <form onSubmit={registrar} onChange={onChange}>
      <label htmlFor="nombre">Nombre:</label>
      <input name="nombre" id="nombre" />
      <ErrorDeFormulario mensaje={errorFormulario.nombre} name="formName" />
      <label htmlFor="apellido">Apellido:</label>
      <input name="apellido" id="apellido" />
      <ErrorDeFormulario
        mensaje={errorFormulario.apellido}
        name="formApellido"
      />
      <label htmlFor="correo">Correo Electronico:</label>
      <input name="correo" id="correo" type="email" />
      <ErrorDeFormulario mensaje={errorFormulario.correo} name="formCorreo" />
      <label htmlFor="contraseña">Contraseña:</label>
      <input name="contraseña" id="contraseña" type="password" />
      <ErrorDeFormulario
        mensaje={errorFormulario.contraseña}
        name="formContraseña"
      />
      <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
      <input
        name="confirmarContraseña"
        id="confirmarContraseña"
        type="password"
      />
      <ErrorDeFormulario
        mensaje={errorFormulario.confirmarContraseña}
        name="formConfirmarContra"
      />
      <input type="submit" value="Registrar" />
    </form>
  );
};

export default FormularioFormData;
