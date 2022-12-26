import React from "react";

const HiringSingle = ({ count, heading, paragraph }) => {
  return (
    <>
      <div className="single-hiring ">
        <div className="flex justify-center mb-5  ">
          <div className="circle my-3  ">
            <h1 className="text-[40px] text-[#114043]">{count}</h1>
          </div>
        </div>

        <div className="circle-bottom">
          <h1 className="text-center text-[18px]">{heading}</h1>
          <p className="text-center my-2 font-[400]">{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default HiringSingle;
