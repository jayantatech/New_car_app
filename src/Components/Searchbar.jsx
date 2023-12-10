import React from "react";
import { HeroImg } from "../assets/img/index";
import { IoIosSearch } from "react-icons/io";
import Button from "../Components/Button";
const Searchbar = ({ title }) => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="flex flex-col justify-center items-center w-full max-w-[1008px] absolute bottom-12">
        <h1 className="j text-3xl font-lato font-bold mb-4 text-white">
          {title}
        </h1>

        <div className="j flex flex-row gap-1 items-center w-[50%] h-[50px] justify-center bg-white px-3 rounded-sm max-sm:w-[90%]">
          <span className="text-4xl max-sm:text-2xl">
            <IoIosSearch />
          </span>
          <input
            type="text"
            placeholder="Find The Right Car"
            className="p-2 w-[100%] h-[100%]   outline-none text-black text"
          />
          <Button label="Search" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
