import React from "react";
import styles from "./caja.module.css";

const Caja = (props) => {
  //ingresa el color como propiedad
  const { color, tamaño } = props;
  const pixeladoParaCajas = tamaño + "px";
  return (
    <div
      className={styles.caja}
      style={{
        backgroundColor: color,
        height: pixeladoParaCajas,
        width: pixeladoParaCajas,
      }}
    ></div>
  );
};

export default Caja;
