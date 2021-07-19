import React, { useState } from "react";
import styles from "./styles/preCard.module.css";

const CartaPersona = (props) => {
  const [estado, setEdad] = useState({ age: props.age });
  const aumentarEdad = () => {
    console.log(estado);
    setEdad({ age: estado.age + 1 });
  };

  return (
    <div className={styles.preCardDiv}>
      <h1>
        {props.firstName},{props.lastName}
      </h1>
      <p>Age: {estado.age}</p>
      <p>Hair Color:{props.hairColor}</p>
      <div>
        <button className={styles.buttonPreCard} onClick={aumentarEdad}>
          Birthday Button For {props.firstName}
          {props.lastName}
        </button>
      </div>
    </div>
  );
};

export default CartaPersona;
