import CarSlider from "../Components/CarSlider";
import { PremiumCars } from "../constants/index";
import React from "react";

const LuxuriousCars = ({ allinfo }) => {
  return (
    <CarSlider allinfo={allinfo} carOBJ={{ tab1: PremiumCars, tabON: false }} />
  );
};

export default LuxuriousCars;
