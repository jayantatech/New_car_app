import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { logo } from "../assets/img/index";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-slate-300 mt-10">
        <div className="w-full max-w-[1008px] h-full px-5 py-2 max-md:px-3">
          <div className="j flex justify-around py-7 font-medium">
            <a
              href="https://github.com/jayantatech"
              target="_blank"
              className="j flex justify-center items-center w-[140px] h-[50px] bg-red-500 text-white hover:text-red-500 hover:bg-white transaition-all duration-500 hover:shadow-xl hover:scale-105 gap-3 text-2xl rounded-lg p-2 cursor-pointer max-md:w-[110px] max-md:text-lg max-md:gap-1 max-md:h-[40px]"
            >
              <FaGithub />
              <span>Github</span>
            </a>
            <a
              href="https://twitter.com/_Jayantabiswas "
              target="_blank"
              className="j flex justify-center items-center w-[140px] h-[50px] bg-red-500 text-white hover:text-red-500 hover:bg-white transaition-all duration-500 hover:shadow-xl hover:scale-105 gap-3 text-2xl rounded-lg p-2 cursor-pointer max-md:w-[110px] max-md:text-lg max-md:gap-1 max-md:h-[40px]"
            >
              <FaXTwitter />
              <span>Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jayanta--biswas/"
              target="_blank"
              className="j flex justify-center items-center w-[140px] h-[50px] bg-red-500 text-white hover:text-red-500 hover:bg-white transaition-all duration-500 hover:shadow-xl hover:scale-105 gap-3 text-2xl rounded-lg p-2 cursor-pointer max-md:w-[110px] max-md:text-lg max-md:gap-1 max-md:h-[40px]"
            >
              <FaLinkedin />
              <span>Linkedin</span>
            </a>
          </div>
          <div className="j flex justify-around py-5 text-primary font-medium text-lg bg-white rounded-xl ">
            <a href="" className="cursor-pointer  hover:text-black">
              Home
            </a>
            <a href="" className="cursor-pointer hover:text-black">
              Contact Us
            </a>
            <a href="" className="cursor-pointer hover:text-black">
              New Cars
            </a>
            <a href="" className="cursor-pointer  hover:text-black">
              Review Pags
            </a>
          </div>
          <div className="j flex items-center justify-center gap-8 py-8 font-medium text-lg">
            <div className=" w-[180px] p-2 bg-white rounded-lg">
              <img src={logo} alt="" className="j w-full h-full" />
            </div>
            <span>
              <p>
                © 2023 Created By{" "}
                <span className="j text-red-500 font-semibold">
                  Jayanta Biswas{" "}
                </span>{" "}
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
