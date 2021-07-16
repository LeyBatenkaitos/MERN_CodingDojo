import React from "react";

const BotonFuncional = (props) => {
  const { hambre, setHambre } = props;

  return (
    <div>
      <h3>{!hambre ? "Pizza" : "Chorrillana"}</h3>
      <button onClick={() => setHambre(!hambre)}>Cambiar Comida</button>
    </div>
  );
};

export default BotonFuncional;
