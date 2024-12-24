import React from "react";
import { engineersData } from "../../assets/engineers-pics/engineers";
import { Link } from "react-router-dom";

function FindSpecialty() {
  return (
    <div className="px-4 md:px-20">
      <div className="mt-12 flex flex-col justify-center items-center font-outfit">
        <div className="text-center">
          <h1 className=" text-4xl text-gray-900 dark:text-gray-200">
            Find by Engineers
          </h1>
          <p className="max-w-96 mt-3 font-base text-gray-700 dark:text-gray-200 leading-tight">
            Simply browse through our extensive list of experience Engineers,
            schedule your appointment hassle-free.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 font-outfit mt-10 cursor-pointer">
        {engineersData.map((item, index) => (
          <Link to={`/engineers/${item.speciality}`} key={index}>
            <img
              src={item.image}
              alt=""
              className=" w-24 h-24 rounded-full hover:scale-105 transition-all duration-200 shadow-md "
            />
            <p className="text-sm text-center mt-1 text-gray-800 dark:text-gray-200">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FindSpecialty;
