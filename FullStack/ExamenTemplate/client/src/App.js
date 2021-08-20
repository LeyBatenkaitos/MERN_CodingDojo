import React from "react";
import { Router } from "@reach/router";
import "./normalize.css";
import "./App.css";
import Producto from "./components/Producto";
import EditarProducto from "./components/EditarProducto";
import Home from "./views/Home";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Router>
        {/* <Nav path="/" /> */}
        <Home path="/" />
        <EditarProducto path="/:productoID/editar" />
        <Producto path="/:productoID" />
      </Router>
    </>
  );
};

export default App;
