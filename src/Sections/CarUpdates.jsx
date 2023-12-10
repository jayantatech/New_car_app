import CarSlider from "../Components/CarSlider";
import { carNews, youtubeVideos } from "../constants/index";
import React from "react";

const CarUpdates = ({ allinfo }) => {
  return (
    <CarSlider
      allinfo={allinfo}
      carOBJ={{
        tab1: carNews,
        tab2: youtubeVideos,
        tabON: true,
        carslide: "NO",
      }}
    />
  );
};

export default CarUpdates;
