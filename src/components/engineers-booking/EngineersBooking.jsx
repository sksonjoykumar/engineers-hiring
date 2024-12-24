import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { StoreContext } from "../../global-context/GlobalContext";

function EngineersBooking() {
  const { engineers } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div id="booking" className="px-4 md:px-20 mt-14">
      <div>
        <div className="font-outfit text-center">
          <h3 className="text-3xl text-gray-800 dark:text-gray-200">
            Top Engineers to Book
          </h3>
          <p className="mt-2 text-gray-800 dark:text-gray-200 text-base">
            Simply browse through our extensive list of experience Engineers
          </p>
        </div>

        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {engineers.map((item, index) => (
            <Link
              to={`/hiring/${item._id}`}
              key={index}
              className="border dark:border-gray-700 shadow-sm  rounded-lg cursor-pointer hover:scale-175 transition-all duration-300 "
            >
              <img
                src={item.image}
                alt=""
                className="bg-[#EAEFFF] dark:bg-gray-800 h-60 w-full object-cover rounded-sm"
              />
              <div className="px-4 py-3 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <GoDotFill size={20} color="#22C55E" />
                  <p className="font-outfit text-sm text-[#22C55E]">
                    Available
                  </p>
                </div>
                <p className="font-outfit text-base font-semibold text-gray-700 dark:text-gray-300 mt-1">
                  {item.name}
                </p>
                <p className="font-outfit text-sm text-gray-600 dark:text-gray-400">
                  {item.speciality}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 pb-4 flex justify-center ">
          <button
            onClick={() => navigate("engineers")}
            type="button"
            className="bg-[#5F6FFF] w-28 shadow-md text-sm px-3 py-2 font-semibold rounded-3xl  text-white hover:bg-[#5f6fffe6] transition-all duration-200"
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default EngineersBooking;
