import React, { Component } from "react";
import { getCar } from "../api";
import BuyCar from "./BuyCar";

class Car extends Component {
  state = {
    car: {},
    wantToBuy: false,
    creditScore: 0,
  };

  componentDidMount = () => {
    getCar(this.props.car_id).then((car) => {
      this.setState({ car: car });
    });
  };

  onClick = () => {
    if (this.state.wantToBuy === false) {
      this.setState({ wantToBuy: true });
    } else {
      this.setState({ wantToBuy: false });
    }
  };

  creditCheck = (event) => {
    event.preventDefault();

    let randomScore = Math.floor(Math.random() * 700);
    if (this.state.creditScore > 700) {
      alert("Your credit score can't be more than 700 silly");
    } else if (this.state.creditScore < randomScore) {
      alert(
        `Your credit score must be more that ${randomScore} to buy this car`
      );
    } else {
      alert(
        "congratulation your credit score is high enough to purchase this car"
      );
    }
  };

  handleChange = (data) => {
    this.setState({ creditScore: data });
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
        <button onClick={this.onClick}>Find out more!</button>
        {this.state.wantToBuy ? (
          <div>
            <p>
              So you want to buy this car, first lets check your credit score{" "}
            </p>
            <form onSubmit={this.creditCheck}>
              <input
                type="text"
                placeholder="Credit score*"
                name="name"
                value={this.state.creditScore}
                onChange={(event) => this.handleChange(event.target.value)}
              ></input>
              <button>Submit Credit Score</button>
            </form>
            <button>Buy Car</button>
          </div>
        ) : null}
        {/* <BuyCar car_id={this.props.car_id} /> */}
      </div>
    );
  }
}
export default Car;
