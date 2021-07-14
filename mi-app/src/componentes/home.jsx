import React, { Component } from "react";

class Home extends Component {
  render() {
    const msg = "Bienvenido :3";

    console.log("hola soy las props", this.props);
    return (
      <div className="container">
        <div>This is our first class component.</div>
        <div>Hola Dojo {msg}</div>
        <div>
          <h2>Cosas que necesito hacer:</h2>
          <ul>
            <li>Aprender React</li>
            <li>Escalar el Monte Everest</li>
            <li>Correr una Maraton</li>
            <li>Alimentar los perros</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
