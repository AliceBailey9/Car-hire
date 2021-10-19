import React from "react";
import { buyCar } from "../api";

function BuyCar(props) {
  const handleClick = (car_id) => {
    buyCar(car_id).then((res) => {
      console.log(res);
    });
  };
  return (
    <button
      onClick={() => {
        handleClick(props.car_id);
      }}
    >
      Buy Now!
    </button>
  );
}

export default BuyCar;
