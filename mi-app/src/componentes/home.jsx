import React, { Component } from "react";

class Home extends Component {
  render() {
    const msg = "Bienvenido :3";

    const bg = "red";
    console.log("hola soy las props", this.props);
    return (
      <div className="container">
        <div style={{ background: bg }}>This is our first class component.</div>
        <div>Hola {msg}</div>
      </div>
    );
  }
}

export default Home;
