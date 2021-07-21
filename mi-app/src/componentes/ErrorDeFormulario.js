import React from "react";

const ErrorDeFormulario = (props) => {
  const { mensaje } = props;
  return (
    <div className="errorFormulario" input-name="name">
      {mensaje}
    </div>
  );
};

export default ErrorDeFormulario;
