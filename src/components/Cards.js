import React from 'react'
import picture1 from "../assets/picture1.svg";
import picture2 from "../assets/picture2.svg";
import picture3 from "../assets/picture3.svg";
import picture4 from "../assets/picture4.svg";
import picture5 from "../assets/picture5.svg";
import picture6 from "../assets/picture6.svg";

const Cards = () => {
    const data = [
        {
          imgSrc: picture1,
          alt: "picture1",
          bgColor: "#E8FBFF",
          text: "Select Your Role and Sign Up",
        },
        {
          imgSrc: picture2,
          alt: "picture2",
          text: "Buyers Post Your Requirements",
        },
        {
          imgSrc: picture3,
          alt: "picture3",
          bgColor: "#E8FBFF",
          text: "Review, Select, and Contact the Best Suppliers",
        },
        {
          imgSrc: picture4,
          alt: "picture4",
          text: "Suppliers Complete your profile and get notified for opportunities",
        },
        {
          imgSrc: picture5,
          alt: "picture5",
          bgColor: "#E8FBFF",
          text: "Contact to Buyers and Share your Quote for the service",
        },
        {
          imgSrc: picture6,
          alt: "picture6",
          text: "Both the Parties can Connect and Make Business Leave a Feedback",
        },
      ];

  return (
    <>
      <div className="flex flex-col justify-center items-center lg:px-[150px] px-[50px]">
        <h1 className=" font-bold text-center text-nowrap text-[37.34px]">How it works?</h1>
        <div className=" text-center lg:text-[17.16px] text-[14px] font-normal mt-3">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 my-14">
  {data?.map((item, index) => (
    <div key={index} className="lg:col-span-1 col-span-1">
      <div
        className="w-full h-[200px] lg:w-[300px] flex flex-col gap-2 justify-center items-center p-10"
        style={{ backgroundColor: item.bgColor || "transparent" }}
      >
        <img
          src={item.imgSrc}
          alt={item.alt}
          className="h-[56px] w-[56px]"
        />
        <span className="font-medium text-[16px] text-center max-w-[203px]">
          {item.text}
        </span>
      </div>
    </div>
  ))}
</div>


      </div>
    </>
  )
}

export default Cards