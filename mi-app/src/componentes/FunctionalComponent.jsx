import React, { useState } from "react";
import BotonFuncional from "./botones/BotonFuncional";

const FunctionalComponent = () => {
  const [hambre, setHambre] = useState(false);

  // const handlerTemperature = () => setTemperatura(!temperature);

  return (
    <div>
      <h1>Hoy tengo hambre de... {!hambre ? "Pizza" : "Chorrillana"}</h1>
      <BotonFuncional hambre={hambre} setHambre={setHambre} />
    </div>
  );
};

export default FunctionalComponent;
