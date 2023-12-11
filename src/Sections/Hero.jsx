import React from "react";
import { HeroIMG } from "../assets/img";

import Searchbar from "../Components/Searchbar";

const Hero = () => {
  return (
    <>
      <div>
        <div
          className={`max-w-full w-full h-[400px]  bg-no-repeat bg-center md:h-[400px] md:bg-center object-fill object-scale-down `}
          style={{ backgroundImage: `url(${HeroIMG})` }}
        >
          <div>
            {" "}
            {/* <div className="w-full h-full flex justify-center items-center relative">
            <div className="flex flex-row justify-center items-center w-full max-w-[1008px] absolute bottom-12">
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
          </div> */}
          </div>
          <Searchbar title={"Find The Right Car"} />
        </div>
      </div>
    </>
  );
};

export default Hero;
