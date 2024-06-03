import React from 'react'
import rightArrow from "../assets/rightArrow.svg";

const PlacesSection = () => {
  return (
<>
<div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center py-[2rem] px-[4rem]">
        <div className="lg:w-1/2 w-full lg:items-start items-center">
          <h1 className="text-[37px] font-bold lg:text-start text-center">
            Ready to dive into HABOT?
          </h1>
          <h1 className=" text-[17.16px] font-light my-[15px] lg:text-start text-center">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </h1>

            <button className="lg:text-[18px] bg-[#00732F] text-[14px] text-center flex items-center justify-center relative font-bold text-white lg:w-[317px] w-[200px] h-[54px] cursor-pointer">
              Sign up Today !
            <img
              src={rightArrow}
              alt="rightArrow"
              className="lg:h-6 lg:w-6 h-4 w-4 cursor-pointer absolute right-4"
            />
            </button>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col lg:items-end items-center text-[#3E3E3E] font-inter">
        <div className="flex flex-wrap gap-3">
            <h1 className="border border-[#E7760D] px-3 py-1 mt-3 w-[220px] h-[50px] flex justify-center items-center">
              Abu Dhabi
            </h1>
            <h1 className="border border-[#E7760D] px-3 py-1 mt-3 w-[220px] h-[50px] flex justify-center items-center">
              Dubai
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <h1 className="border border-[#E7760D] px-3 py-1 mt-3 w-[220px] h-[50px] flex justify-center items-center">
              Sharjah & Ajman
            </h1>
            <h1 className="border border-[#E7760D] px-3 py-1 mt-3 w-[220px] h-[50px] flex justify-center items-center">
              Fujairah
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <h1 className="border border-[#E7760D] px-3 py-1 mt-3 w-[220px] h-[50px] flex justify-center items-center">
              Ras Al Khaimah
            </h1>
            <h1 className="border border-[#E7760D] px-3 py-1 mt-3 w-[220px] h-[50px] flex justify-center items-center">
              Umm Al Quwain
            </h1>
          </div>
        </div>
      </div>
</>
  )
}

export default PlacesSection