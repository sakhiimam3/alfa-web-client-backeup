import Image from "next/image";
import React from "react";
import GroupImage from "../public/assets/HomeGroup.png";
const HomeSecondComponent = ({ data }) => {
  return (
    <div className="sm:flex w-full sm:mt-20">
      <div className="sm:ml-[150px] sm:w-[40%] sm:mt-10 p-4 sm:p-0">
        <h1 className="Home-Header2-Heading ">{data?.title}</h1>
        <p className="text-[#0F615F]">
          <b>{data?.text}</b>
        </p>
        <div className="d-flex align-center mt-2">
          <button
            className="sm:mt-[10px] h-[27px]  capitalize w-[170px] hover:bg-[#faffff] 
           hover:text-[#fff] rounded
           bg-[#122E34]
           text-[#fff]
           border-solid border-2 border-[#0F615F] "
          >
            Contact us
          </button>
          <button
            className="sm:mt-[10px] h-[27px]  capitalize w-[170px] hover:bg-[#0F615F] 
        hover:text-[#fff] rounded  bg-white text-[#122E34] 
        border-solid border-2 border-[#0F615F]  ml-3"
          >
            Our Team
          </button>
        </div>
      </div>
      <div className="justify-end sm:ml-20 p-4">
        <Image src={GroupImage} width={500} height={600} />
      </div>
    </div>
  );
};

export default HomeSecondComponent;
