import React, { Component } from "react";
import { getAllCars } from "../api";
import { Link } from "@reach/router";
class AllCars extends Component {
  state = {
    cars: [],
  };

  componentDidMount = () => {
    getAllCars().then((cars) => {
      this.setState({ cars: cars });
    });
  };

  render() {
    return (
      <div>
        {this.state.cars.map(({ id, make, model, colour, cost, img }) => {
          return (
            <div key={id}>
              <Link key={id}>
                <h1>{make}</h1>

                <h2>{model}</h2>
              </Link>
              <img className="carImages" src={img} alt={model} />
              <p>{cost}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllCars;
