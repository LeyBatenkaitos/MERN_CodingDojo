import React, { useState } from "react";

const FormularioUsuario = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const crearUsuario = (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    console.log("Welcome", nuevoUsuario);
  };
  return (
    <form onSubmit={crearUsuario}>
      <div>
        <label>Nombre:</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label>Correo:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirmar Contraseña:</label>
        <input
          type="text"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <p>tu Formulario de Datos:</p>
        <ul>
          <li>{firstName}</li>
          <li>{lastName}</li>
          <li>{email}</li>
          <li>{password}</li>
          <li>{confirmPassword}</li>
        </ul>
      </div>
    </form>
  );
};

export default FormularioUsuario;
