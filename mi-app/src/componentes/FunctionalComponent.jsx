import React, { useState } from "react";
import BotonFuncional from "./botones/BotonFuncional";
import styles from "./styles/functionalComponent.module.css";

const FunctionalComponent = () => {
  const [hambre, setHambre] = useState(false);

  // const handlerTemperature = () => setTemperatura(!temperature);

  return (
    <div className={styles.functionalDiv}>
      <h1>Functional component:</h1>
      <h1>Hoy tengo hambre de... {!hambre ? "Pizza" : "Chorrillana"}</h1>
      <BotonFuncional hambre={hambre} setHambre={setHambre} />
    </div>
  );
};

export default FunctionalComponent;
