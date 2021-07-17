import React, { useState } from "react";
import styles from "./styles/preCard.module.css";

const CartaPersona = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.preCardDiv}>
      <h1>Functional component:</h1>
      <h1>
        {props.firstName},{props.lastName}
      </h1>
      <p>Age: {props.age}</p>
      <p>Hair Color:{props.hairColor}</p>
      <div>
        <button
          className={styles.buttonPreCard}
          onClick={() => setCount(count + 1)}
        >
          Birthday Button For {props.firstName}
          {props.lastName}
        </button>
      </div>
    </div>
  );
};

export default CartaPersona;
