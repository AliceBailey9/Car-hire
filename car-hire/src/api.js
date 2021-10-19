import axios from "axios";
const carsApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllCars = () => {
  return carsApi.get("./cars").then((res) => {
    return res.data;
  });
};

export const getCar = (car_id) => {
  return carsApi.get(`./cars/${car_id}`).then((res) => {
    return res.data;
  });
};

export const sellCar = (car) => {
  return carsApi.post("./cars/addCar", car).then((res) => {
    return res.data;
  });
};
