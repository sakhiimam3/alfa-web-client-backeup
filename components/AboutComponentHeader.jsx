import React from "react";

const AboutComponentHeader = ({ data }) => {
  return (
    <>
      <div className="banner pb-10">
        <div className="grid grid-cols-1 ">
          <div className=" mt-20 sm:mt-40 pl-5 sm:pl-20 lg:mx-[50px] max-w-[630px]">
            <h1 className=" text-[30px] sm:text-[50px]  leading-normal sm:leading-tight uppercase">
              {data?.title}
            </h1>
            <p className="text-[16px] sm:text-[20px]">{data?.text}</p>

            <button
              className="mt-5 sm:mt-[30px]  px-1  capitalize w-[170px] h-10 bg-[#122E34] 
               text-[#fff] rounded  hover:bg-white hover:text-[#122E34] 
           hover:border-solid hover:border-2 hover:border-[#122E34]"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponentHeader;
