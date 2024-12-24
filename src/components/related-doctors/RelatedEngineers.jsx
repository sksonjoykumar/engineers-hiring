import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

function RelatedEngineers({ speciality, id }) {
  const { engineers } = useContext(StoreContext);
  const [relatedEng, setRelatedEng] = useState([]);

  useEffect(() => {
    if (engineers.length > 0 && speciality) {
      const engineerData = engineers.filter(
        (eng) => eng.speciality === speciality && eng._id !== id
      );
      setRelatedEng(engineerData);
    }
  }, [speciality, id, engineers]);

  return (
    <div className="mt-14 border-t dark:border-gray-700">
      <div className="mt-5">
        <div className="text-center font-outfit">
          <h1 className="text-3xl text-gray-800 dark:text-gray-200">
            Related Engineers
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Simply browse through our extensive list of experience Engineers.
          </p>
        </div>

        <div className="mt-8">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {relatedEng.map((item, index) => (
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
    </div>
  );
}

export default RelatedEngineers;
