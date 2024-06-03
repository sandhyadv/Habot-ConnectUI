
import React from 'react';
import habotLogo from "../../assets/habot-logo.svg";
import downArrow from "../../assets/downArrow.svg";

const DesktopHeader = () => {
  return (
    <>
      <div className="px-5 flex mt-[-30px]">
        <img
          src={habotLogo}
          alt="Habot Logo"
          className="h-[160px] w-[130px]"
        />
        <div className="ml-auto flex items-center gap-3">
          <h1>Find Suppliers</h1>
          <div className="flex items-center gap-1.5">
            <h1>Find Service Tags</h1>
            <img src={downArrow} alt="Down Arrow" className="h-3 w-3 cursor-pointer" />
          </div>
          <h1 className=" rounded-md border-2 border-[#00732F] px-6 py-2 cursor-pointer">
            Login / Sign Up
          </h1>
        </div>
      </div>
    </>
  );
};

export default DesktopHeader;
