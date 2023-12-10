import React from "react";
import { logo } from "../assets/img/index";
import { navLinks } from "../constants";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="flex justify-center flex-row bg-white shadow-xl items-center h-[70px] py-3">
        <div className=" w-full xl:w-[1366px]  items-center grid grid-cols-6  font-lato px-3 ">
          <div className="dk col-span-1 h-fit w-full lg:w-[200px] w-[220px ] md:w-[140px] max-sm:col-span-3 flex items-center pr">
            <span className="j text-3xl hidden max-sm:block pr-2">
              <FiMenu />
            </span>
            <a href="#">
              <img src={logo} alt="logo" className=" w-[100%]" />
            </a>
          </div>

          <nav className="grid col-span-3 h-[100%] lg:w-full grow md:h-2/3 items-center max-sm:hidden justify-center px-1">
            <ul className="flex flex-row gap-5 md:gap-3 md:text-base lg:text-[17px] lg:gap-7 xl:gap-10  lg:w-[100%]">
              {navLinks.map((link) => (
                <li
                  className="k font-bold text-gray-700 hover:text-primary transition-all"
                  key={link.label}
                >
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-row justify-center items-center col-span-2 mx-2 w-full max-sm:col-span-3 ">
            <div className="flex flex-row  items-center max-md:w-2/5 md:w-[50%] lg:w-5/5 bg-gray-100 h-fit justify-center border border-black max-md:hidden">
              <input
                type="text"
                placeholder="Search Cars"
                className="s p-2 h-[100%] w-[100%] bg-transparent outline-none text-black "
              />
              <div className="j text-3xl p-1 h-[100%] bg-black text-white cursor-pointer flex items-center justify-center">
                <CiSearch />
              </div>
            </div>

            <div className="k flex flex-row items-center justify-around px-3 text-2xl gap-2 max-sm:gap-4">
              <CiSearch className="text-black cursor-pointer hidden max-md:block" />
              <IoLocationOutline className="text-black cursor-pointer" />
              <FaRegUserCircle className="j cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
