import React from "react";
import Portfoliotabs from "./Portfoliotabs";
const PortfolioHeader = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280px] px-[15px] mx-auto ">
          <div className="portfolio-header ">
            <div className="grid grid-cols-1 ">
              <div className="mt-20 sm:mt-28 lg:mt-60 pl-5 sm:pl-20 lg:mx-[50px] max-w-[630px]">
                <span className="text-[20px]  text-center sm:text-start leading-[20px] text-[#122E34] block">
                  PORTFOLIO
                </span>
                <h1 className="uppercase text-center sm:text-start text-[30px] mx-auto sm:mx-0 sm:text-[50px]  sm:leading-[61px]  ">
                  see what we <br /> can do
                </h1>
              </div>
            </div>
            <Portfoliotabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioHeader;
