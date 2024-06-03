import React from 'react'
import suitcase from "../assets/suitcase.svg";
import location from "../assets/location.svg";

const HeroSection = () => {
  return (
   <>
   <div className="bg-bgImage bg-no-repeat h-[28rem] mt-[-40px] w-full text-center">

<div className="flex flex-col justify-center items-center py-[5rem]">
  <h1 className="text-white font-bold lg:text-[45px] text-[20px]">Are You a Supplier?</h1>
  <h2 className="text-white font-normal lg:text-[45px] text-[20px]">Explore Matching Opportunities.</h2>

  <div className=" lg:flex-row flex-col flex gap-2 mt-8">
    <div className="flex items-center border border-gray-300 rounded-md bg-white">
      <img src={suitcase} alt="Suitcase" className="h-5 w-5 ml-2" />
      <input
        type="text"
        placeholder="Search your required service here"
        className="flex-1 px-2.5 py-2 focus:outline-none lg:h-[45px] w-[300px] h-[30px]  text-[15px] font-light placeholder-[#6B7280]"
      />
    </div>

    <div className="flex items-center border border-gray-300 rounded-md bg-white">
      <img src={location} alt="Location" className="h-5 w-5 ml-2" />
      <input
        type="text"
        placeholder="Search your desired location here"
        className="flex-1 px-2 py-2 focus:outline-none placeholder-[#6B7280]  text-[15px] font-light lg:h-[45px] w-[300px] h-[30px]"
      />
    </div>

    <button className="bg-[#00732F] text-white px-6 py-2 rounded-md font-bold text-[13px] font-inter">
      Search
    </button>
  </div>

  <div className=" flex flex-col lg:flex-row mt-9 text-white gap-2">
    <h1 className="font-bold text-[18px]">Are you a buyer?</h1>
    <h1 className=" underline font-normal text-[18px]">
      Click here if you are looking to post a requirements
    </h1>
  </div>
</div>
</div>
   </>
  )
}

export default HeroSection