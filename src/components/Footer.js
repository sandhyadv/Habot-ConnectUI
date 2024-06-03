import React from 'react';
import habotLogo2 from '../assets/habot-logo2.svg';
import linkedinLogo from '../assets/linkedinLogo.svg';
import instagramLogo from '../assets/instagramLogo.svg';
import twitterLogo from '../assets/twitterLogo.svg';
import facebookLogo from '../assets/facebookLogo.svg';

const Footer = () => {
  return (
    <div className="w-full h-[200px] bg-[#123557] mt-10 flex md:flex-row flex-col justify-center items-center">
      <div className="border-t border-b border-t-white border-b-white border-opacity-20 max-w-screen-lg w-full lg:px-10 p-3 flex justify-evenly items-center">
        <div className="flex flex-col">
          <img src={habotLogo2} alt="habotLogo" className="lg:h-[35px] lg:w-[180px] h-[20px] w-[120px]" />
          <h1 className="text-[#FFFFFF] lg:text-[12px] text-[6px] font-light mt-2">
            © R Singhania
          </h1>
        </div>

        <div className="text-[#FFFFFF] lg:ml-10 ml-2 lg:text-[12px] text-[6px]">
          <h1 className="font-semibold">Company</h1>
          <h1 className="font-light mt-2">About</h1>
          <h1 className=" font-light">FAQ</h1>
        </div>

        <div className="text-[#FFFFFF] lg:ml-10 ml-2 mt-3 lg:text-[12px] text-[6px]">
          <h1 className="font-semibold">Terms</h1>
          <h1 className="font-light mt-2">Data privacy</h1>
          <h1 className=" font-light">Terms</h1>
          <h1 className="font-light">Accessibility</h1>
        </div>

        <div className="text-[#FFFFFF] lg:ml-10 ml-2 lg:text-[12px] text-[6px]">
          <h1 className="font-semibold">Related</h1>
          <h1 className="font-light mt-2">Find Buyer</h1>
          <h1 className="font-light">Feedback</h1>
        </div>

        <div className="flex md:flex-row flex-wrap lg:gap-3 gap-2 lg:ml-auto ml-5">
          <img src={linkedinLogo} alt="linkedinLogo" className="h-6 w-6" />
          <img src={twitterLogo} alt="twitterLogo" className="h-6 w-6" />
          <img src={facebookLogo} alt="facebookLogo" className="h-6 w-6" />
          <img src={instagramLogo} alt="instagramLogo" className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
