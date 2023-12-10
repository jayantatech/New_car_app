import React from "react";

import { Carbrand, BrandBG, BrandBGfilter, logo } from "../assets/img/index";

const ShowCars = () => {
  return (
    <>
      <div className="h-full max-w-[1008px] m-auto w-full  my-10 relative overflow-hidden max-sm:flex  max-sm:h-[400px] max-md:flex-col max-md:px-2 max-lg:h-[300px]">
        <div className="w-full h-full max-md:h-[300px]">
          <img src={`${BrandBG}`} alt="carCircle" className="w-full h-full" />
        </div>
        <div className="j h-[650px] w-[550px] bg-gray-500 absolute top-[-200px] right-[-30px] rotate-6 max-md:bottom-0 max-md:right-0 max-md:rotate-0 max-md:w-full max-md:h-full max-md:invisible max-lg:w-[450px]"></div>
        <div className="md:w-2/4 h-full md:absolute top-0 right-0 pt-14 px-4 z-10 max-md:pt-3 max-md:px-3 max-md:bg-gray-500 max-lg:pt-2">
          <h2 className="text-3xl font-lato font-semibold text-white max-md:text-2xl">
            Finally, it's Easy.
          </h2>
          <h2 className=" text-2xl font-medium text-white pt-2 max-md:text-lg">
            Easy, Stress-Free, and On Your Terms.
          </h2>
          <p className="j text-lg font-medium text-white py-4 max-md:text-base">
            Tell us your needs, budget, and preferences, and we'll curate a
            perfect selection just for you.
          </p>
          <button className="px-7 py-2 rounded-md bg-primary text-white border-primary font-medium">
            Find Your Next Car
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowCars;
