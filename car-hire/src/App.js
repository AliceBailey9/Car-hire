import "./App.css";
import { Router } from "@reach/router";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AllCars from "./Components/AllCars";
import SellCar from "./Components/SellCar";
import Car from "./Components/Car";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Home path="/" />
        <AllCars path="/Cars" />
        <Car path="/Cars/:car_id" />
        <SellCar path="/SellCar" />
      </Router>
    </div>
  );
}

export default App;
