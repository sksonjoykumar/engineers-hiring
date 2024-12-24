import React, { useState } from "react";
import { SiAsciidoctor } from "react-icons/si";
import { FaMoon } from "react-icons/fa";
import { LiaSunSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaEnvira } from "react-icons/fa6";
import "./navbar.css";

function Navbar() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  // toggleDarkMode function
  const toggleDarkMode = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark", !dark);
  };

  //   toggleMenu function
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="px-4 md:px-20 py-3 sticky top-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="flex justify-between items-center font-outfit">
        {/* logo */}
        <Link to={"/"} className="logo flex gap-1">
          <FaEnvira size={26} className="text-[#5F6FFF] " />
          <h1 className="font-outfit font-semibold text-xl text-[#000B6D] dark:text-gray-200">
            E.Hiring{" "}
          </h1>
        </Link>
        {/* navbar item */}
        <ul className="hidden sm:flex gap-4 lg:gap-8 ">
          <li className=" text-sm text-[#000B6D] dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 uppercase font-semibold ">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className=" text-sm text-[#000B6D] dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 uppercase font-semibold">
            <NavLink to={"engineers"}>All Engineers</NavLink>
          </li>
          <li className=" text-sm text-[#000B6D] dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 uppercase font-semibold">
            <NavLink to={"about"}>About</NavLink>
          </li>
          <li className=" text-sm text-[#000B6D] dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 uppercase font-semibold">
            <NavLink to={"contact"}>Contact</NavLink>
          </li>
        </ul>
        <ul className="hidden sm:flex items-center gap-2 lg:gap-3">
          <li>
            <button
              className="bg-[#0f925c] px-4 md:px-5 py-2 rounded-3xl shadow-sm text-white text-sm  md:text-base"
              type="button"
            >
              Sign In
            </button>
          </li>

          <li className=" text-gray-600 hover:text-black  dark:text-gray-300 dark:hover:text-white transition-all duration-200 cursor-pointer">
            {dark ? (
              <button type="button">
                <LiaSunSolid size={26} onClick={toggleDarkMode} />
              </button>
            ) : (
              <button type="button">
                <FaMoon size={24} onClick={toggleDarkMode} />
              </button>
            )}
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="block sm:hidden">
          {menu ? (
            <IoClose
              size={35}
              className=" cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <HiOutlineBars3BottomLeft
              size={35}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          )}

          {/* responsive menu item */}
          {menu && (
            <div className=" border-l dark:border-l dark:border-gray-600 bg-white dark:bg-gray-900 pt-10 block md:hidden absolute right-0 top-[3.8rem] z-10 w-[200px] h-screen">
              <ul className="flex flex-col items-center gap-4">
                <li className=" text-sm text-[#000B6D] dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 uppercase font-semibold ">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className=" text-sm text-[#000B6D] dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 uppercase font-semibold">
                  <NavLink to={"doctors"}>All Engineers</NavLink>
                </li>
                <li className=" text-sm text-[#000B6D] dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 uppercase font-semibold">
                  <NavLink to={"about"}>About</NavLink>
                </li>
                <li className=" text-sm text-[#000B6D] dark:text-gray-200 hover:text-[#5F6FFF] transition-all duration-200 uppercase font-semibold">
                  <NavLink to={"contact"}>Contact</NavLink>
                </li>
              </ul>
              <ul className="flex flex-col mt-4 items-center gap-4 lg:gap-6">
                <li className=" order-2 text-gray-600 hover:text-black  dark:text-gray-300 dark:hover:text-white transition-all duration-200 cursor-pointer">
                  {dark ? (
                    <button type="button">
                      <LiaSunSolid size={26} onClick={toggleDarkMode} />
                    </button>
                  ) : (
                    <button type="button">
                      <FaMoon size={24} onClick={toggleDarkMode} />
                    </button>
                  )}
                </li>
                <li>
                  <button
                    className=" order-1 bg-[#0f925c] px-4 md:px-5 py-2 rounded-3xl shadow-sm text-white text-sm  md:text-base"
                    type="button"
                  >
                    Sign In
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
