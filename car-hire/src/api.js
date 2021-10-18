import axios from "axios";
const carsApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllCars = () => {
  return carsApi.get("./cars").then((res) => {
    return res.data;
  });
};
