// import Tableros from "./componentes/Tableros";
import "./App.css";
// import PokeAPI from "./componentes/PokeAPI";
import { Router } from "@reach/router";
import Numeros from "./componentes/Numeros";
import Palabra from "./componentes/Palabra";
import Home from "./componentes/Home";
import PalabraColores from "./componentes/PalabraColores";

// const dataBase = [
//   { heading: "contenido 1", html: "<p>contenido importante</p>" },
//   { heading: "contenido 2", html: "<p>contenido importante</p>" },
//   { heading: "contenido 3", html: "<p>contenido importante</p>" },
// ];
function App() {
  return (
    <div>
      <Router>
        {/* <div>
          <Tableros tabs={dataBase} />
        </div>
        <div>
          <PokeAPI />
        </div> */}
        <Home path="/" />
        <Palabra path="/:palabra" />
        <Numeros path="/:numero" />
        <PalabraColores path="/:palabra/:color/:fondo" />
      </Router>
    </div>
  );
}
export default App;
