import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { Link, useParams } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";
import RelatedEngineers from "../related-doctors/RelatedEngineers";

function EngineerHiring() {
  const { engineers } = useContext(StoreContext);
  const [engineerInfo, setEngineerInfo] = useState(null);
  const { id } = useParams();
  const [engSlots, setEngSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // fetchEngineerInfo function
  const fetchEngineerInfo = async () => {
    const engInfo = engineers.find((eng) => eng._id === id);
    setEngineerInfo(engInfo);
  };

  useEffect(() => {
    fetchEngineerInfo();
  }, [engineers, id]);

  // getAvailableSlots
  const getAvailableSlots = async () => {
    setEngSlots([]);

    // getting current date
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slot to array
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        // increment currentTime by 30 minute
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setEngSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailableSlots();
  }, [engineerInfo]);

  // Loading
  if (!engineerInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="px-4 md:px-20">
      <div className="mt-10">
        <div className="flex gap-6 flex-col md:flex-row justify-center md:justify-start">
          <div className="">
            <img
              src={engineerInfo.image}
              alt="doc-img"
              className="bg-[#5F6FFF] dark:bg-gray-800 rounded-md h-auto w-[550px] border dark:border-gray-800"
            />
          </div>
          <div className="font-outfit border dark:border-gray-800 bg-white dark:bg-gray-800 rounded-md py-5 px-6 ">
            <p className="font-semibold text-3xl text-gray-700 dark:text-gray-200">
              {engineerInfo.name}
            </p>

            <div className="flex items-center gap-2 text-base mt-1 text-gray-700 dark:text-gray-200">
              <p>{engineerInfo.degree} -</p>
              <p>{engineerInfo.speciality}</p>
              <p className="border dark:border-gray-800 px-1.5 cursor-pointer rounded-md text-sm">
                {engineerInfo.experience}
              </p>
            </div>
            <div className="flex gap-1.5 items-center mt-1">
              <p className="text-gray-700 dark:text-gray-200 font-semibold">
                About
              </p>
              <BsExclamationCircle
                size={14}
                className="text-gray-700 dark:text-gray-200"
              />
            </div>
            <p className=" text-base text-gray-600 dark:text-gray-300">
              {engineerInfo.about}
            </p>

            <h3 className="mt-5 font-semibold text-lg text-gray-600 dark:text-gray-200">
              Appointment fee:{" "}
              <span className="text-gray-800 dark:text-gray-200">
                ${engineerInfo.fees}
              </span>
            </h3>
          </div>
        </div>

        {/* Booking slots */}
        <div className="mt-6">
          <div className=" md:ml-36 lg:ml-52 xl:ml-60 2xl:ml-72">
            <h3 className="font-outfit text-gray-800 text-lg dark:text-gray-200">
              Booking slots
            </h3>

            <div className=" flex gap-3 items-center w-full overflow-x-scroll no-scrollbar">
              {engSlots.length &&
                engSlots.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSlotIndex(index)}
                    className={`mt-3 text-sm font-outfit text-center py-5 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-[#5F6FFF] text-white" : "border dark:border-gray-700 border-gray-200"}`}
                  >
                    <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                    <p>{item[0] && item[0].dateTime.getDate()}</p>
                  </div>
                ))}
            </div>

            <div className="flex gap-3 items-center font-outfit text-sm mt-3 overflow-x-scroll no-scrollbar ">
              {engSlots.length &&
                engSlots[slotIndex].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSlotTime(item.time)}
                    className={`mt-3 flex-shrink-0 text-sm font-outfit text-center px-5 py-2 rounded-3xl cursor-pointer ${item.time === slotTime ? "bg-[#5F6FFF] text-white" : "border dark:border-gray-700 border-gray-200"}`}
                  >
                    <p>{item.time.toUpperCase()}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className=" md:ml-36 lg:ml-52 xl:ml-60 2xl:ml-72 mt-6">
            <Link
              to={`/my-appointment/${id}`}
              type="button"
              className="px-6 py-2.5 text-sm font-outfit text-white rounded-3xl  bg-[#5F6FFF]"
            >
              BooK an appointment
            </Link>
          </div>
        </div>

        <RelatedEngineers id={id} speciality={engineerInfo.speciality} />
      </div>
    </div>
  );
}

export default EngineerHiring;
