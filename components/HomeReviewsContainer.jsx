import Image from "next/image";
import React from "react";
import tectCrunch from "../public/assets/techCrunch.png";
import forbes from "../public/assets/forbes.png";
import apartment from "../public/assets/apartment.png";
import ReviewCard from "./ReviewCard";

const HomeReviewsContainer = () => {
  const dataArr = [0, 1, 2, 3];
  return (
    <div className="relative sm:flex  sm:my-[30px] sm:p-20 p-2 w-full ">
      <div className="sm:w-[50%] py-4 sm:ml-20">
        <h1 className="home-review-heading text-xl font-bold">
          Loved by teams, remote <br /> workers & press.
        </h1>
        <p className="text-[#0F615F] w-[80%] font-bold mt-5">
          "Branch is now selling directly to individuals. as well as working
          With Google. Shopfy and other companies to outfit home offices for
          employees who may never work in an office five days a week again.-
        </p>
        <div className="flex mt-10">
          <div>
            <Image src={tectCrunch} />
          </div>
          <div>
            <Image src={forbes} />
          </div>
          <div>
            <Image src={apartment} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {dataArr.map((v, i) => {
          return (
            <div key={i}>
              <ReviewCard />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeReviewsContainer;
