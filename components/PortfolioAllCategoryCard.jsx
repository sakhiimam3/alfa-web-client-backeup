import React from "react";
import allCard1 from "../public/assets/allCard1.png";
import allCard2 from "../public/assets/allCard2.png";
import allCard3 from "../public/assets/allCard3.png";
import allCard4 from "../public/assets/allCard4.png";
import allCard5 from "../public/assets/allCard5.png";

import Image from "next/image";
import Link from "next/link";
const Portfoliocard = () => {
  const allcardData = [
    {
      image: allCard1,
      heading: "Modular Homes",
      paragraph: "Website with an automatic configurator of modular homes",
    },
    {
      image: allCard2,
      heading: "Modular Homes",
      paragraph: "Website with an automatic configurator of modular homes",
    },
    {
      image: allCard3,
      heading: "Modular Homes",
      paragraph: "Website with an automatic configurator of modular homes",
    },
    {
      image: allCard4,
      heading: "Modular Homes",
      paragraph: "Website with an automatic configurator of modular homes",
    },
    {
      image: allCard5,
      heading: "Modular Homes",
      paragraph: "Website with an automatic configurator of modular homes",
    },
    {
      image: allCard4,
      heading: "Modular Homes",
      paragraph: "Website with an automatic configurator of modular homes",
    },
    {
      image: allCard2,
      heading: "Modular Homes",
      paragraph: "Website with an automatic configurator of modular homes",
    },
    {
      image: allCard3,
      heading: "Modular Homes",
      paragraph: "Website with an automatic configurator of modular homes",
    },
    {
      image: allCard4,
      heading: "Modular Homes",
      paragraph: "Website with an automatic configurator of modular homes",
    },
  ];

  return (
    <>
      <div className="mx-auto   sm:gap-10 lg:gap-5  grid lg:grid-cols-3 sm:grid-cols-2  md:grid-cols-2   mt-10">
        {allcardData?.map((cardText, index) => (
          <div key={index} className="mt-5">
            <div>
              <Image src={cardText.image} alt="card-image" />
            </div>
            <div className="portfollio-card-bottom">
              <h1 className=" text-[20px] sm:text-[24px]">
                {cardText.heading}
              </h1>
              <p className="mb-2 text-[16px] sm:text-[18px] text-[#0F615F] leading-[20px]">
                {cardText.paragraph}
              </p>
            </div>
            <Link
              href="/"
              className="text-[14px] leading-[16px] text-[#0F615F] opacity-50 capitalize underline mt-2"
            >
              read more
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfoliocard;
