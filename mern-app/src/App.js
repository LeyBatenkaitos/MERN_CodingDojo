import Tableros from "./componentes/Tableros";
import "./App.css";

const dataBase = [
  { heading: "contenido 1", html: "<p>contenido importante</p>" },
  { heading: "contenido 2", html: "<p>contenido importante</p>" },
  { heading: "contenido 3", html: "<p>contenido importante</p>" },
];
function App() {
  return (
    <div>
      <Tableros tabs={dataBase} />
    </div>
  );
}
export default App;
//minuto 1:50:00
