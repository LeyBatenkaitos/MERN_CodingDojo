import React from "react";

const contenido = (props) => {
  const { isSelected, children, heading } = props;
  return (
    <section className={"contenido" + (isSelected ? "selected" : "")}>
      <h1>{heading}</h1>
      {children}
    </section>
  );
};

export default contenido;
