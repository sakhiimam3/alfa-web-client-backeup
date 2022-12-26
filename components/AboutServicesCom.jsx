import React from "react";

const AboutServicesCom = ({ data }) => {
  return (
    <>
      <div className="">
        <div className="services-text my-20">
          <p className="text-center text-[18px] my-20 sm:text-[23px] lg:text-[30px]  gradient-text">
            {data?.subtitle}
          </p>

          <div className="flex  sm:flex-nowrap   flex-wrap  mx-3 justify-between sm:mx-10 md:mx-15 lg:mx-40 sm:gap-20  gap-10">
            <div>
              <p className="text-[#0F615F] text-[14px] text-justify sm:text-[16px]">
                {data?.subText}
              </p>
            </div>
            <div>
              <p className="text-[#0F615F] text-[14px] text-justify sm:text-[16px]">
                {data?.subText2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutServicesCom;
