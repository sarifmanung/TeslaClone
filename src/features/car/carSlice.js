import { createSlice } from "@reduxjs/toolkit";

const url = "https://www.tesla.com/drive?selectedModel=";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
  carsUrl: [url + "models", url + "model3", url + "modelx", url + "modely"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;
export const selectCarsUrl = (state) => state.car.carsUrl;

export default carSlice.reducer;
