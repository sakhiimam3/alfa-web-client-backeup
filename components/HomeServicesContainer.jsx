import React, { useEffect } from "react";
import HomeServicesCard from "./HomeServicesCard";

import { useDispatch, useSelector } from "react-redux";
import { GetHomeServices } from "../redux/reducers/homeServicesReducer";
import Link from "next/link";
const HomeServicesContainer = () => {
  const dispatch = useDispatch();
  const {
    HomeServices: { HomeServices },
  } = useSelector((state) => state);

  useEffect(() => {
    // home services  2 dispatch
    dispatch(GetHomeServices())
      .unwrap()
      .then(() => {})
      .catch(() => {
        console.log("Error");
      });
  }, []);

  const data = [
    {
      heading: "Branding",
      text: "From logo creation to visual identity, we establish brand guidelines to help you grow and connect with your customers.",
    },
    {
      heading: "UX and UI design",
      text: "We build beautiful and functional interfaces, to help craft the best user experiences for your target audience on both web and mobile.",
    },
    {
      heading: "Web development",
      text: "Tinloof is a web development agency that designs and builds fast and user-friendly marketing websites, e-commerce, and web applications.",
    },
    {
      heading: "Frontend development",
      text: "Enterprises and startups trust frontend developers at Tinloof to deliver performance-focused and usable interfaces for the web and mobile apps.",
    },
    {
      heading: "Performance Optimization",
      text: "Slow speed is poison to a business. We test, audit, and improve the performance of web sites and apps, making sure both users and search crawlers are satisfied.",
    },
    {
      heading: "Technical SEO",
      text: "You may have excellent content and a fast website, but if it's not configured with SEO in mind, the chances to rank are slim. We help businesses audit and configure their site to rank better on search engines.",
    },
  ];

  return (
    <div className="py-24 ">
      <div className="home-servcies-gradiant-strip mt-10"></div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 justify-center mt-[-180px]">
        {HomeServices?.slice(0, 6).map((v, i) => {
          return (
            <div className="flex mt-20 justify-center gap-1" key={i}>
              <span className="flex items-end text-5xl text-[#05F2DB] pr-1 font-light">
                {i}
              </span>
              <HomeServicesCard
                title={v.title}
                text={v.text}
                img={v.imgUrl}
                key={i}
              />
            </div>
          );
        })}
      </div>
      <div className="visit_btn_box">
        <Link href={`/services`}>
          <button>Visit</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServicesContainer;
