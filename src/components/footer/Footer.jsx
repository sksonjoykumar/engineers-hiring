import React from "react";
import { FaEnvira } from "react-icons/fa";
import { SiAsciidoctor } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="px-4 md:px-20 mt-14 border-t dark:border-t-gray-700">
      <div className="mt-8 flex gap-6 flex-col md:flex-row text-center md:text-left justify-between">
        <div className=" w-auto lg:w-[450px] font-outfit">
          <Link to={"/"} className="logo flex gap-1">
            <FaEnvira size={26} className="text-[#5F6FFF] " />
            <h1 className="font-outfit font-semibold text-xl text-[#000B6D] dark:text-gray-200">
              E.Hiring{" "}
            </h1>
          </Link>
          <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            debitis? Officia, ea saepe deserunt consequatur ex eveniet inventore
            placeat iste. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Adipisci, debitis? Officia.
          </p>
        </div>

        <div className="">
          <div className="font-outfit">
            <h1 className="font-semibold text-base text-gray-700 dark:text-gray-200">
              COMPANY
            </h1>
            <ul className="mt-1">
              <li className="text-sm cursor-pointer text-gray-800 dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 ">
                <a href="#">Home</a>
              </li>
              <li className="text-sm cursor-pointer text-gray-800 dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 ">
                <a href="#">Contact Us</a>
              </li>
              <li className="text-sm cursor-pointer text-gray-800 dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 ">
                <a href="#">Devilry</a>
              </li>
              <li className="text-sm cursor-pointer text-gray-800 dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 ">
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-1">
          <div className="">
            <h1 className="font-semibold text-base text-gray-700 dark:text-gray-200">
              GET IN TOUCH
            </h1>
            <p className="mt-1 font-outfit text-sm text-gray-700 dark:text-gray-200">
              +109494-5294315
            </p>
            <p className="mt-1 font-outfit text-sm text-gray-700 dark:text-gray-200">
              e-hiring.info@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="font-outfit text-center pt-6 pb-4 ">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Copyright 2024 @ e.hiring.com- All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
