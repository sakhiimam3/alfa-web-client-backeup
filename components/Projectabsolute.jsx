import React from "react";
import Image from "next/image";
import ImageAbsolute1 from "../public/assets/services1.png";
import ImageAbsolute2 from "../public/assets/services2.png";

const Projectabsolute = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="w-[1280px]  Projectabsolute-main h-[1550px] px-4 mx-auto pt-20 relative overflow-hidden">
          <div className="w-full h-full  absolute Projectabsolute_images_box">
            <Image
              src={ImageAbsolute1}
              alt="Projectabsolute-absolute-img"
              className="absolute w-[500px] top-[60px] right-[230px] "
            />
            <Image
              src={ImageAbsolute2}
              alt="Projectabsolute-absolute-img-2"
              className="absolute w-[500px] top-0 left-[250px]"
            />
          </div>

          <div className="bg-[#0F615F]  w-[100vw] h-[1100px] mt-60  flex flex-col justify-end items-center  pb-5 Projectabsolute_textbox rounded-[10px]">
            <p className="text-[12px] sm:text-[24px] leading-[27px] text-[#76FFF2] ">
              Content is fire. Social media is gasoline. They only work
              together.
            </p>
            <p className="font-bold text-[12px]  sm:text-[24px] leading-[27px] text-[#76FFF2] ">
              ~Jay Baer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectabsolute;
