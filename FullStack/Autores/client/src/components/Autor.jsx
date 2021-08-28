import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "@reach/router";
import fetchAutorPorId from "../actions/fetchAutorPorId";
import Nav from "./Nav";
import BotonDeEliminar from "./BotonDeEliminar";

const Autor = () => {
  const [autorProps, setAutorProps] = useState(null);
  const [siExiste, setSiExiste] = useState(true);
  const { autorID } = useParams();
  const navigate = useNavigate();

  const onDelete = () => {
    window.alert(`Se Elimino el Autor exitosamente`);
    navigate("/");
  };

  useEffect(() => {
    fetchAutorPorId(autorID).then((res) => {
      const { success } = res;
      if (success) setAutorProps(res.data);
      else setSiExiste(false);
    });
  }, [autorID]);

  if (!autorProps && siExiste) return <h1 className="">Espera...</h1>;
  else if (!siExiste) return <h1 className="">No existe</h1>;
  else
    return (
      <>
        <Nav />
        <div className=" ">
          <div className="">
            <h1 className="">Detalles sobre: {autorProps.nombreProducto}</h1>
            <BotonDeEliminar _id={autorID} onSuccess={onDelete} className=" ">
              Eliminar Autor
            </BotonDeEliminar>
          </div>
        </div>
      </>
    );
};

export default Autor;
