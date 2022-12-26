import React from "react";
import Image from "next/image";
import ComImage from "../public/assets/services-header.png";
import keyboardImage from "../public/assets/services-Keyboard.png";

const Projectheadercom = () => {
  return (
    <>
      <div className="services-header">
        <div className="grid   md:mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2   ">
          <div className=" mt-20 sm:mt-40 pl-5 sm:pl-20  services-header-text">
            <h1 className=" text-[18px] sm:text-start md:text-[24px]   sm:leading-[68px] uppercase">
              Label Innovations
            </h1>
            <p className=" my-4 sm:my-2  sm:pr-4 text-[#122E34] sm:leading-[22px] mx-2 sm:mx-3 lg:mx-0 text-start ">
              The Internet is developing rapidly, and with it the world of
              Social Media and Influencers. Recently, the Influencer Marketing
              and Management Agency of Internet creators has become our client.
              Our tasks included, among others, building a modern and responsive
              website based on the WordPress content management system with the
              possibility of self-administration by the client.
            </p>

            <div className="sm:mt-20 contact-bottom-text">
              <h2 className="uppercase sm:mt-6 font-bold  mt-10 mb-3 text-[#0B998F] sm:mb-2 sm:text-[24px]">
                Client
              </h2>
              <p className="text-[#122E34] mt-[-12px]">
                One Aim - Influencer and Digital Marketing Agency
              </p>
            </div>
            <div className="sm:mt-2 contact-bottom-text">
              <h2 className="uppercase sm:mt-6  mt-10 mb-3 text-[#0B998F] font-bold  sm:mb-2 sm:text-[24px]">
                Scope of work
              </h2>
              <p className="text-[#122E34]  mt-[-12px]">
                dedicated website graphic design,a set of dedicated
                graphics,administration panel,advertising campaign in Google Ads
              </p>
            </div>
          </div>
          <div className="mt-20  sm:mt-20 text-start ">
            <Image
              src={ComImage}
              alt="services-header"
              className=" md:h-[462.19px] w-[600px] m-auto"
            />
            <Image
              src={keyboardImage}
              alt="services-header-keybord"
              className="md:h-[15.27px] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectheadercom;
