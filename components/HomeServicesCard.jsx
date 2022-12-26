import Image from "next/image";
import React from "react";
import vector from "../public/assets/vector1.png";
const HomeServicesCard = ({ img, title, text }) => {
  return (
    <div className="home-services-card ">
      <Image src={img} className="p-2" width={60} height={50} />
      <div className="pt-5 p-3">
        <h1 className="text-lg font-bold home-services-card-heading">
          {title}
        </h1>
        <p className="text-[#0F615F]">{text}</p>
      </div>
    </div>
  );
};

export default HomeServicesCard;
