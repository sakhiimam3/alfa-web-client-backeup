import React, { useState } from "react";
import PortfolioAllCategoryCard from "./PortfolioAllCategoryCard";

const Tab = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className="bg-transparent mt-10 mx-auto  mb-20 sm:mx-28 sm:mt-5 ">
      <ul className="tab-list">
        <li
          className={`tabs ${getActiveClass(
            1,
            "active-tabs"
          )} text-[10px] sm:text-[15px] md:text-[18px]  lg:text-[16px]`}
          onClick={() => toggleTab(1)}
        >
          all
        </li>
        <li
          className={`tabs ${getActiveClass(
            2,
            "active-tabs"
          )}  text-[12px] sm:text-[14px]`}
          onClick={() => toggleTab(2)}
        >
          graphics
        </li>
        <li
          className={`tabs ${getActiveClass(
            3,
            "active-tabs"
          )}  text-[12px]  sm:text-[15px]`}
          onClick={() => toggleTab(3)}
        >
          internet shops
        </li>
        <li
          className={`tabs ${getActiveClass(
            4,
            "active-tabs"
          )}  text-[12px] sm:text-[16px]`}
          onClick={() => toggleTab(4)}
        >
          websites
        </li>
      </ul>
      <div className="content-container bg-transparent ">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <PortfolioAllCategoryCard />
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <PortfolioAllCategoryCard />
        </div>
        <div className={`content ${getActiveClass(3, "active-content")}`}>
          <PortfolioAllCategoryCard />
        </div>
        <div className={`content ${getActiveClass(4, "active-content")}`}>
          <PortfolioAllCategoryCard />
        </div>
      </div>
    </div>
  );
};

export default Tab;
