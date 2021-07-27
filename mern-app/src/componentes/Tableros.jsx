import React, { useState } from "react";
import Contenido from "./Contenido";
import Etiqueta from "./Etiqueta";

const Tableros = (props) => {
  const { tabs } = props;
  /* const tableros = tabs.map(({ heading }, index) => {
    const isSelected = index === 0;
  });*/
  const [seleccionado, setSeleccionado] = useState(0);
  const etiquetas = tabs.map(({ heading }, index) => {
    const isSelected = index === seleccionado;
    return (
      <Etiqueta
        texto={heading}
        isSelected={isSelected}
        index={index}
        setSeleccionado={setSeleccionado}
      />
    );
  });
  const contenidos = tabs.map(({ heading, info }, index) => {
    const isSelected = index === seleccionado;
    return (
      <Contenido heading={heading} isSelected={isSelected}>
        <p>{info}</p>
      </Contenido>
    );
  });

  return (
    <div className="tab-section">
      <div>{etiquetas}</div>
      <div>{contenidos}</div>
    </div>
  );
};

export default Tableros;
