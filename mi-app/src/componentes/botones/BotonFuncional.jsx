import React from "react";

const BotonFuncional = (props) => {
  const { hambre, setHambre } = props;

  return (
    <div>
      <button onClick={() => setHambre(!hambre)}>Cambiar Comida</button>
    </div>
  );
};

export default BotonFuncional;
