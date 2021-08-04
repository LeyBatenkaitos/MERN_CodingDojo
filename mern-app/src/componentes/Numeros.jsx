import { Redirect, useParams } from "@reach/router";
import React from "react";

const Numeros = () => {
  const parametros = useParams();
  const numero = parametros.numero;
  const intiger = Number(numero);
  if (isNaN(intiger)) return <Redirect to="/:palabra" />;
  return (
    <div>
      <h1>El Numero es {numero}</h1>
    </div>
  );
};

export default Numeros;
