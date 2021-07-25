import Home from "./componentes/home";
import React from "react";
import PersonCard from "./componentes/PersonCard";
import FunctionalComponent from "./componentes/FunctionalComponent";
import CartaPersona from "./componentes/percard";
import FormularioUsuario from "./componentes/formularioHooks";
import "./App.css";
import FormularioFormData from "./componentes/formularioFormData";
import FormularioCajas from "./componentes/Generador de Cajas/FormularioCajas";
import Caja from "./componentes/Generador de Cajas/Caja";

function App() {
  return (
    <div className="app">
      <h1 className="appDojo">Hola Dojo!</h1>
      <div>
        <Home />
      </div>
      <PersonCard
        firstName="Doe"
        lastName="Jane"
        age={45}
        hairColor="Black"
      ></PersonCard>
      <PersonCard
        firstName="Smith"
        lastName="John"
        age={88}
        hairColor="Brown"
      ></PersonCard>
      <PersonCard
        firstName="Fillmore"
        lastName="Millard"
        age={50}
        hairColor="Brown"
      ></PersonCard>
      <PersonCard
        firstName="Smith"
        lastName="Maria"
        age={62}
        hairColor="Brown"
      ></PersonCard>
      <div>
        <CartaPersona
          firstName="Smith"
          lastName="Maria"
          age={62}
          hairColor="Brown"
        />
      </div>
      <div>
        <FunctionalComponent></FunctionalComponent>
      </div>
      <div>
        <FormularioUsuario></FormularioUsuario>
      </div>
      <div>
        <h3>Formulario con FormData:</h3>
        <FormularioFormData></FormularioFormData>
      </div>
      <div>
        <FormularioCajas />
        <Caja />
      </div>
    </div>
  );
}
export default App;
