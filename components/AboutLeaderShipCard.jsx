import React from "react";
import Image from "next/image";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";

const AboutLeaderShipCard = ({ image, title, text, profileLink }) => {
  return (
    <div className="leadership-card">
      <div className="sm:mx-2 w-full">
        <Image
          src={image}
          width={50}
          height={50}
          alt="card-image"
          className="w-full"
        />
        <div className="flex justify-between  my-5  items-center card-bottom">
          <div>
            <h4>{title}</h4>
            <p className="capitalize text-[#0F615F]">{text}</p>
          </div>
          <div className="icon sm:mr-1 ">
            <Link href={`${profileLink}`}>
              <AiOutlineLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeaderShipCard;
