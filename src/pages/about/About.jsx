import React from "react";
import aboutImg from "../../assets/engineers-pics/eng-3.jpg";

function About() {
  return (
    <div className="px-4 md:px-20 font-outfit">
      <div className="mt-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-600 dark:text-gray-200 uppercase">
            About Us
          </h1>
        </div>
        <div className="flex gap-10 flex-col md:flex-row mt-8">
          <div className=" w-auto 2xl:w-4/5">
            <img
              src={aboutImg}
              alt=""
              className="2xl:w-full w-auto  2xl:h-96 h-auto  object-cover rounded-md"
            />
          </div>
          <div className="">
            <p className=" mt-6 text-base text-gray-600  dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              optio necessitatibus voluptates amet. Inventore aspernatur odio
              eius officiis nihil aliquid earum dignissimos fugiat laudantium
              architecto ducimus quia impedit ullam id maxime, dolore nesciunt
              voluptatum fuga dolorem officia dolor optio? Sunt.
            </p>

            <p className=" mt-6 text-base text-gray-600  dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur iure accusantium consectetur maiores praesentium ut,
              iusto error et molestias totam quod temporibus at corrupti porro
              eum. Dicta sint sunt itaque fuga laudantium natus doloremque
              quaerat.
            </p>

            <h4 className="text-lg font-semibold my-3 text-gray-700 dark:text-gray-200">
              Our Vision
            </h4>

            <p className=" mt-6 text-base text-gray-600  dark:text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus porro consequatur voluptatibus corrupti officia illo
              fuga, ratione ipsa dolorum maxime enim dignissimos necessitatibus
              culpa totam ea ullam, esse assumenda aperiam.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold  text-gray-600 dark:text-gray-200">
            WHY CHOOSE US
          </h2>
          <div className="mt-4 flex gap-8 flex-wrap lg:flex-nowrap justify-center items-center ">
            <div className="border dark:border-gray-600 shadow-sm cursor-pointer hover:bg-[#5F6FFF] text-gray-600 hover:text-gray-200 transition-all duration-200 p-16  rounded-md mt-2 text-left">
              <h3 className="  font-2xl font-semibold mb-4 ">EFFICIENCY:</h3>
              <p className="text-base ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam, ab. Asperiores, numquam.
              </p>
            </div>
            <div className="border dark:border-gray-600 shadow-sm cursor-pointer hover:bg-[#5F6FFF] text-gray-600 hover:text-gray-200 transition-all duration-200 p-16  rounded-md mt-2 text-left">
              <h3 className="  font-2xl font-semibold mb-4 ">CONVENIENCE:</h3>
              <p className="text-base ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolore, rem.
              </p>
            </div>
            <div className="border dark:border-gray-600 shadow-sm cursor-pointer hover:bg-[#5F6FFF] text-gray-600 hover:text-gray-200 transition-all duration-200 p-16  rounded-md mt-2 text-left">
              <h3 className="  font-2xl font-semibold mb-4 ">
                PERSONALIZATION:
              </h3>
              <p className="text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                adipisci?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
