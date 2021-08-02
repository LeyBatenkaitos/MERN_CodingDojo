import React, { useState } from "react";
import fetchPokemon from "../Actions/fetchPokemon";

const PokeAPI = () => {
  const [pokeLista, setPokelista] = useState([]);

  const elementosLista = pokeLista.map((pokemon, index) => (
    <li key={index}>{pokemon.name}</li>
  ));
  const contenido = pokeLista.length ? elementosLista : "...";

  const onClick = async () => {
    const lista = await fetchPokemon();
    setPokelista(lista);
  };
  return (
    <div>
      <button onClick={onClick}>Fetch Pokemon</button>
      <ul>{contenido}</ul>
    </div>
  );
};

export default PokeAPI;
