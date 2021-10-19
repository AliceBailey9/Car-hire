import React, { Component } from "react";
import { Link } from "@reach/router";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Cars">Cars</Link>
        <Link to="/SellCar">Sell Your Car</Link>
      </nav>
    );
  }
}

export default Nav;
