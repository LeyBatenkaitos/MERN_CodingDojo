import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import fetchProductos from "../actions/fetchProductos";
import EliminarBoton from "./EliminarBoton";

const ListaDeProductos = (props) => {
  const { ingresarNuevoProducto, onActualizar } = props;
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetchProductos().then(({ data }) => {
      const elementos = data
        .sort(({ nombreProducto: ta }, { nombreProducto: tb }) => {
          if (ta < tb) return -1;
          if (ta > tb) return 1;
          return 0;
        })
        .map(({ nombreProducto, _id }) => (
          <li key={_id}>
            <Link to={`/${_id}`}>{nombreProducto}</Link>
            <Link to={`/${_id}/editar`}>Editar</Link>
            <EliminarBoton _id={_id} onSuccess={onActualizar} />
          </li>
        ));
      setLista(elementos);
    });
  }, [ingresarNuevoProducto, onActualizar]);

  return (
    <div className="lista-de-productos">
      <h1>Lista de Productos</h1>
      <ul>{lista}</ul>
    </div>
  );
};

export default ListaDeProductos;
