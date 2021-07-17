import React from "react";
import styles from "./botonFuncional.module.css";

const BotonFuncional = (props) => {
  const { hambre, setHambre } = props;

  return (
    <div>
      <button
        className={styles.BotonFuncional}
        onClick={() => setHambre(!hambre)}
      >
        Cambiar Comida
      </button>
    </div>
  );
};

export default BotonFuncional;
