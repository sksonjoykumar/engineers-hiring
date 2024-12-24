import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import FilterButton from "../filterButton/FilterButton";

function AllEngineers() {
  const { engineers } = useContext(StoreContext);
  const [showFlitter, setShowFlitter] = useState(false);
  const [filterDoc, setFilterDoc] = useState([]);
  const { speciality } = useParams();

  const navigate = useNavigate();

  // applyFilterDoc
  const applyFilterDoc = () => {
    if (speciality) {
      setFilterDoc(engineers.filter((eng) => eng.speciality === speciality));
    } else {
      setFilterDoc(engineers);
    }
  };

  useEffect(() => {
    applyFilterDoc();
  }, [engineers, speciality]);

  // filterOptions
  const filterOptions = [
    "Civil Engineering",
    "Chemical Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Environmental Engineering",
    "Industrial Engineering",
  ];

  return (
    <div className="px-4 md:px-20">
      <h1 className="font-outfit mt-4 text-base text-gray-800 dark:text-gray-200">
        Browse through the Engineers specialist.
      </h1>
      <div className="mt-4 block md:hidden">
        <button
          onClick={() => setShowFlitter(!showFlitter)}
          type="button"
          className="border dark:border-gray-600 px-3 py-1 font-outfit rounded-sm text-sm hover:bg-[#EAEFFF] bg-white dark:bg-gray-700 transition-all duration-200"
        >
          Flitter
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-7 mt-7">
        <div className=" hidden md:block">
          {filterOptions.map((option, index) => (
            <div className="w-[180px]" key={index}>
              <FilterButton
                key={option}
                label={option}
                isActive={speciality === option}
                onClick={() =>
                  speciality === option
                    ? navigate("/engineers")
                    : navigate(`/engineers/${option}`)
                }
              />
            </div>
          ))}
        </div>
        {/* showFlitter */}
        {showFlitter && (
          <div className=" block md:hidden mb-4">
            {filterOptions.map((option) => (
              <FilterButton
                key={option}
                label={option}
                isActive={speciality === option}
                onClick={() =>
                  speciality === option
                    ? navigate("/engineers")
                    : navigate(`/engineers/${option}`)
                }
              />
            ))}
          </div>
        )}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filterDoc.map((item, index) => (
            <Link
              to={`/hiring/${item._id}`}
              key={index}
              className="border dark:border-gray-700 shadow-sm  rounded-lg cursor-pointer hover:scale-175 transition-all duration-300"
            >
              <img
                src={item.image}
                alt=""
                className="bg-[#EAEFFF] dark:bg-gray-800 w-full object-cover"
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
      </div>
    </div>
  );
}

export default AllEngineers;
