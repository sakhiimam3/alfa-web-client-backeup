import Image from "next/image";
import React from "react";
import Ellipse from "../public/assets/Ellipse.png";

const ReviewCard = () => {
  return (
    <div className="home-review-card w-[180px] h-[180px] flex justify-center ">
      <div className="p-1 justify-center align-center text-center">
      <Image src={Ellipse} className="h-[40px] w-[40px] mt-5 m-auto" />
        <h1 className="font-bold text-[#0F615F]">Thomas A.</h1>
        <h2 className="text-xs mt-[-8px] text-bold">Solutions Engineer</h2>
        <p className="text-xs p-1 text-bold">
          "As an engineer I spent an absurd amount of time reviewing
          chairs...doesn't get better than!”
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
