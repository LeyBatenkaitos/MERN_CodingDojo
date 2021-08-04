import { useParams } from "@reach/router";
import React from "react";

const Palabra = () => {
  const parametros = useParams();
  return (
    <div>
      <h1>La Palabra colocada es: {parametros.palabra}</h1>
    </div>
  );
};

export default Palabra;
