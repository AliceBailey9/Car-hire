import React, { Component } from "react";
import { sellCar } from "../api";

class SellCar extends Component {
  state = {
    make: "",
    model: "",
    cost: "",
    img: "",
    description: "",
    colour: "",
  };

  handleChange = (infoLabel, data) => {
    this.setState({ [infoLabel]: data });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    sellCar(this.state).then((res) => {
      let id = res.length - 1;
      alert(
        `Thanks for selling your ${res[id].make} ${res[id].model} with Al's Motors`
      );
      this.setState({
        make: "",
        model: "",
        cost: "",
        img: "",
        description: "",
        colour: "",
      });
    });
  };

  render() {
    const { make, model, cost, img, description, colour } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Model*"
            name="name"
            value={model}
            onChange={(event) => this.handleChange("model", event.target.value)}
          ></input>

          <input
            type="text"
            placeholder="make*"
            name="name"
            value={make}
            onChange={(event) => this.handleChange("make", event.target.value)}
          ></input>

          <input
            type="text"
            placeholder="cost*"
            name="name"
            value={cost}
            onChange={(event) => this.handleChange("cost", event.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Upload images*"
            name="name"
            value={img}
            onChange={(event) => this.handleChange("img", event.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Description of car*"
            name="name"
            value={description}
            onChange={(event) =>
              this.handleChange("description", event.target.value)
            }
          ></input>
          <input
            type="text"
            placeholder="colour*"
            name="name"
            value={colour}
            onChange={(event) =>
              this.handleChange("colour", event.target.value)
            }
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SellCar;
