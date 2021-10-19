import React, { Component } from "react";
import { getCar } from "../api";

class Car extends Component {
  state = {
    car: {},
  };

  componentDidMount = () => {
    getCar(this.props.car_id).then((car) => {
      this.setState({ car: car });
    });
  };

  render() {
    const { make, model, colour, cost, description, img } = this.state.car;

    return (
      <div>
        <h1>{make}</h1>
        <h2>{model}</h2>
        <img src={img} alt={model}></img>
        <p>
          {description}, {cost}, {colour}
        </p>
      </div>
    );
  }
}
export default Car;
