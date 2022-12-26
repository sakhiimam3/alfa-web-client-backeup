import React from "react";

const HomeComponentHeader = ({ data }) => {
  return (
    <div className="Home-Head-Background w-full sm:h-[500px] m-auto sm:mt-10 mb-15 flex justify-center ">
      <div className="relative z-[4] sm:mt-24 mt-[150px] text-left sm:ml-[-550px] max-w-[500px]">
        <h1 className="Home-Header-Heading">{data?.title} </h1>
        <h2 className="Home-Header-Heading2">{data?.subtitle}</h2>
        <p className="font-bold py-2 text-[#122E34] ">{data?.text}</p>
        <button
          className="sm:mt-[10px] py-[5px] px-1  capitalize w-[170px]   bg-[#122E34] 
        text-[#fff] rounded  hover:bg-white hover:text-[#122E34] 
        hover:border-solid hover:border-2 hover:border-[#122E34]"
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default HomeComponentHeader;
