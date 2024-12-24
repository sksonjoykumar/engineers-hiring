import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../global-context/GlobalContext";
import { BsExclamationCircle } from "react-icons/bs";

function MyAppointment() {
  const { engineers } = useContext(StoreContext);
  const [engineerInfo, setEngineerInfo] = useState(null);
  const { id } = useParams();

  // fetchDocInfo function
  const fetchEngInfo = async () => {
    const engInfo = engineers.find((doc) => doc._id === id);
    setEngineerInfo(engInfo);
  };

  useEffect(() => {
    fetchEngInfo();
  }, [engineers, id]);

  // Loading
  if (!engineerInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="px-4 md:px-20">
      <div className="mt-10">
        <div className="border-b pb-3 dark:border-gray-700">
          <h1 className="font-outfit text-2xl text-gray-700 dark:text-gray-200">
            My appointments
          </h1>
        </div>
        <div className="flex justify-between mt-6 ">
          <div className="flex gap-7 flex-col md:flex-row justify-center md:justify-start">
            <div className="">
              <img
                src={engineerInfo.image}
                alt="doc-img"
                className="bg-[#EAEFFF] dark:bg-gray-800 rounded-md h-auto w-[200px] border dark:border-gray-800"
              />
            </div>
            <div className="font-outfit ">
              <p className="font-semibold text-xl text-gray-700 dark:text-gray-200">
                {engineerInfo.name}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {engineerInfo.speciality}
              </p>

              <div>
                <h3 className="text-gray-800 text-base">Address:</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {engineerInfo.address.line1}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {engineerInfo.address.line2}
                </p>
              </div>
              <div className="flex items-center gap-2 text-base mt-1 text-gray-700 dark:text-gray-200">
                <p>{engineerInfo.degree} -</p>
                <p>{engineerInfo.address.line1}</p>
                <p className="border dark:border-gray-800 px-1.5 cursor-pointer rounded-md text-sm">
                  {engineerInfo.experience}
                </p>
              </div>
            </div>
          </div>

          <div className="w-64">
            <p>
              <button
                type="button"
                className="text-sm font-outfit border dark:border-gray-600 px-2 py-2.5 w-full rounded-md hover:bg-[#5F6FFF] transition-all duration-300 hover:text-white"
              >
                Pay Online
              </button>
            </p>
            <p>
              <button
                className=" mt-3 text-sm font-outfit border dark:border-gray-600 px-2 py-2.5 w-full rounded-md hover:bg-orange-700 transition-all duration-300 hover:text-white"
                type="button"
              >
                Cancel appointment
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAppointment;
