import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import headerOne from "../../assets/engineers-pics/eng-17-removebg-preview.png";
import headerTwo from "../../assets/engineers-pics/eng-15-removebg-preview.png";
import headerThree from "../../assets/engineers-pics/eng-14-removebg-preview.png";
import groupPic from "../../assets/engineers-pics/group_profiles.png";

function Banner() {
  return (
    <div className="mt-4 px-4 md:px-20">
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        useKeyboardArrows={true}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        showThumbs={false}
      >
        {/* banner 1 */}
        <div className="w-full h-auto md:h-[500px] bg-[#6793C4] dark:bg-[#2f3466] rounded-md shadow-md">
          <div className="flex font-outfit flex-col md:flex-row justify-between items-center h-full px-6">
            {/* Left Section */}
            <div className="text-white space-y-3 md:w-1/2 mt-7 ">
              <h1 className=" text-3xl md:text-5xl font-bold leading-7">
                Book Appointment
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                With Experience Engineers
              </h1>
              <div className="flex text-center md:text-left flex-col lg:flex-row items-center gap-4 2xl:pl-24">
                <p>
                  {" "}
                  <img
                    src={groupPic}
                    alt="Profiles"
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </p>

                <p className="text-base ">
                  Simply browse through our extensive list of experience
                  engineers, schedule your appointment hassle-free.
                </p>
              </div>
              <div className=" 2xl:pl-24 flex justify-center md:justify-start">
                <button className="mt-4 bg-white text-[#5F6FFF] font-semibold py-2 px-4 rounded-full flex items-center shadow-lg hover:bg-gray-200">
                  <a href="#booking">
                    {" "}
                    Book appointment <span className="ml-2">&rarr;</span>
                  </a>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="">
              <img
                src={headerOne}
                alt="Doctor Image"
                className="rounded-lg w-auto xl:w-[300px] h-auto xl:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
        {/* banner 2  */}
        <div className="w-full h-auto md:h-[500px] bg-[#6793C4] dark:bg-[#2f3466] rounded-md shadow-md">
          <div className="flex font-outfit flex-col md:flex-row justify-between items-center h-full px-6">
            {/* Left Section */}
            <div className="text-white space-y-3 md:w-1/2 mt-7 ">
              <h1 className=" text-3xl md:text-5xl font-bold leading-7">
                Book Appointment
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                With Experience Engineers
              </h1>
              <div className="flex text-center md:text-left flex-col lg:flex-row items-center gap-4 2xl:pl-24">
                <p>
                  {" "}
                  <img
                    src={groupPic}
                    alt="Profiles"
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </p>

                <p className="text-base ">
                  Simply browse through our extensive list of experience
                  engineers, schedule your appointment hassle-free.
                </p>
              </div>
              <div className=" 2xl:pl-24 flex justify-center md:justify-start">
                <button className="mt-4 bg-white text-[#5F6FFF] font-semibold py-2 px-4 rounded-full flex items-center shadow-lg hover:bg-gray-200">
                  <a href="#booking">
                    {" "}
                    Book appointment <span className="ml-2">&rarr;</span>
                  </a>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="">
              <img
                src={headerThree}
                alt="Doctor Image"
                className="rounded-lg w-auto xl:w-[300px] h-auto xl:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
        {/* banner 3  */}
        <div className="w-full h-auto md:h-[500px] bg-[#6793C4] dark:bg-[#2f3466] rounded-md shadow-md">
          <div className="flex font-outfit flex-col md:flex-row justify-between items-center h-full px-6">
            {/* Left Section */}
            <div className="text-white space-y-3 md:w-1/2 mt-7 ">
              <h1 className=" text-3xl md:text-5xl font-bold leading-7">
                Book Appointment
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                With Experience Engineers
              </h1>
              <div className="flex text-center md:text-left flex-col lg:flex-row items-center gap-4 2xl:pl-24">
                <p>
                  {" "}
                  <img
                    src={groupPic}
                    alt="Profiles"
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </p>

                <p className="text-base ">
                  Simply browse through our extensive list of experience
                  engineers, schedule your appointment hassle-free.
                </p>
              </div>
              <div className=" 2xl:pl-24 flex justify-center md:justify-start">
                <button className="mt-4 bg-white text-[#5F6FFF] font-semibold py-2 px-4 rounded-full flex items-center shadow-lg hover:bg-gray-200">
                  <a href="#booking">
                    {" "}
                    Book appointment <span className="ml-2">&rarr;</span>
                  </a>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex">
              <img
                src={headerTwo}
                alt="Doctor Image"
                className="rounded-lg w-auto xl:w-[300px] h-auto xl:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
