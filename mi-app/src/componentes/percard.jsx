import React, { useState } from "react";

const CartaPersona = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>
        {props.firstName},{props.lastName}
      </h1>
      <p>Age: {props.age}</p>
      <p>Hair Color:{props.hairColor}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Birthday Button For {props.firstName}
          {props.lastName}
        </button>
      </div>
    </div>
  );
};

export default CartaPersona;
