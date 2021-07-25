import React from "react";
import styles from "./caja.module.css";

const Caja = (props) => {
  //ingresa el color como propiedad
  const { color } = props;
  return <div className={styles.caja} style={{ backgroundColor: color }}></div>;
};

export default Caja;
