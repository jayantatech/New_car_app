import React from "react";
import { brandLogo } from "../constants/index";
const BrandsShow = () => {
  return (
    <>
      <div className="j w-full h-full  flex justify-center items-center my-10">
        <div className="w-full h-full xl:w-[1080px] px-4 max-md:px-2 py-6">
          <h1 className="j text-2xl font-lato font-bold mb-4 ">All Brands</h1>
          <div className="j border border-gray-300 py-4 rounded-t-lg px-4 xl:px-0">
            <ul className="j grid items-center justify-center grid-cols-4 max-md:grid-cols-2 max-xl:grid-cols-4 gap-3">
              {brandLogo.map((item, index) => (
                <li
                  key={item.brand}
                  className="w-full h-full lg:w-5/6  bg-white p-3 rounded-lg flex flex-col justify-center items-center shadow-lg hover:shadow-2xl border-2 border-gray-300 cursor-pointer transition-all mx-auto"
                >
                  <img
                    src={item.img}
                    alt={item.brand}
                    className="w-full h-full"
                  />
                  <span className="text-gray-600 font-semibold pt-2 text-md max-md:text-sm">
                    {item.brand}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full h-10 xl:h-10 text-lg border-b border-x max-md:h-10 border-gray-300 rounded-b-lg hover:text-blue-500 font-medium">
            View All Brands
          </button>
        </div>
      </div>
    </>
  );
};

export default BrandsShow;
