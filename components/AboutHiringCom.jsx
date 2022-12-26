import React from "react";
import HiringSingle from "./HiringSingle";

const AboutHiringCom = ({ hiringData }) => {
  return (
    <>
      <div className="hiring my-20">
        <h1 className="text-center text-[24px] my-10">Hiring Made Easy</h1>
        <div className=" lg:mx-40 sm:mx-20">
          <div className="mx-3 sm:mx-auto  sm:gap-10 lg:gap-10  grid lg:grid-cols-3 sm:grid-cols-2  md:grid-cols-2   my-10">
            {hiringData?.map((hiringText, index) => (
              <div key={index}>
                <HiringSingle
                  count={hiringText.count}
                  heading={hiringText.heading}
                  paragraph={hiringText.paragraph}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHiringCom;
