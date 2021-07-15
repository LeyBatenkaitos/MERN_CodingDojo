import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
      age: this.props.age,
    };
  }
  incrementarEdad = () => {
    this.setState({ clicks: this.state.clicks + 1, age: this.state.age + 1 });
  };
  render() {
    return (
      <div>
        <h1>
          {this.props.firstName},{this.props.lastName}
        </h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color:{this.props.hairColor}</p>
        <div>
          <button onClick={this.incrementarEdad}>
            Birthday Button For {this.props.firstName}
            {this.props.lastName}
          </button>
        </div>
      </div>
    );
  }
}

export default PersonCard;
