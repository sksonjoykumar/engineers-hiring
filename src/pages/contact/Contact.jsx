import React from "react";
import contactImg from "../../assets/engineers-pics/eng-11.jpg";
function Contact() {
  return (
    <div className="px-4 md:px-20">
      <div className="m-10 font-outfit">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-200 uppercase">
          Contact us
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-6 gap-6 lg:gap-10  justify-center">
          <img
            src={contactImg}
            className=" w-full md:w-[50%] lg:w-[30%] rounded-md h-auto"
            alt=""
          />
          <div className="font-outfit mt-5 text-center md:text-left">
            <h1 className="font-semibold text-2xl text-gray-600 dark:text-gray-200">
              OUR OFFICE
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              00000 Willms Station
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Suite 000, Washington, USA
            </p>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              Tel: (000) 000-0000
            </p>
            <p className=" text-base text-gray-600 dark:text-gray-300">
              Email: e.hiring@gmail.com
            </p>

            <p className="mt-4 mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
              CAREERS AT PRESCRIPTO
            </p>
            <p className=" text-base text-gray-600 dark:text-gray-300">
              Learn more about our teams and job openings.
            </p>
            <button
              className="mt-5 border dark:border-gray-600  px-8 py-3 rounded-md text-base text-gray-700 dark:text-gray-200 hover:bg-[#5F6FFF] hover:text-white cursor-pointer transition-all duration-300"
              type="button"
            >
              Explore Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
