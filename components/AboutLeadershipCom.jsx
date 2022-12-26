import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AboutLeaderShipCard from "./AboutLeaderShipCard";
import { GetAboutTeam } from "../redux/reducers/AboutTeampReducer";

const AboutLeadershipCom = (props) => {
  const dispatch = useDispatch();
  const {
    AboutTeam: { AboutTeam },
  } = useSelector((state) => state);

  useEffect(() => {
    // get about two  sections  data
    dispatch(GetAboutTeam())
      .unwrap()
      .then(() => {})
      .catch(() => {
        console.log("Error");
      });
  }, []);

  return (
    <>
      <div className="leadership my-20">
        <h1 className=" text-center lg:text-start sm:text-center md:text-center  sm:mx-40  text-[25px] sm:text-[34px]">
          Leadership Team
        </h1>
        <div className=" lg:mx-40 sm:mx-20">
          <div className="mx-3 sm:mx-auto  sm:gap-10 lg:gap-20  grid lg:grid-cols-3 sm:grid-cols-2  md:grid-cols-2   my-10">
            {AboutTeam?.map((cardText, index) => (
              <div key={index}>
                <AboutLeaderShipCard
                  image={cardText.imgUrl}
                  title={cardText.title}
                  text={cardText.text}
                  profileLink={cardText.profileLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLeadershipCom;
