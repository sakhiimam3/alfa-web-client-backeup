import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutComponentHeader from "../../components/AboutComponentHeader";
import AboutHiringCom from "../../components/AboutHiringCom";
import AboutLeadershipCom from "../../components/AboutLeadershipCom";
import AboutServicesCom from "../../components/AboutServicesCom";
import cardImage from "../../public/assets/leadercard.png";
import { GetAboutHeaders } from "../../redux/reducers/AboutHeaderReducers";

const index = () => {
  const dispatch = useDispatch();
  const {
    AboutHeader: { AboutHeader },
  } = useSelector((state) => state);

  useEffect(() => {
    // get about two  sections  data
    dispatch(GetAboutHeaders())
      .unwrap()
      .then(() => {})
      .catch(() => {
        console.log("Error");
      });
  }, []);
  const cardData = [
    { image: cardImage, name: "Alexender", position: "chief excutive" },
    { image: cardImage, name: "Alexender", position: "chief excutive" },
    { image: cardImage, name: "Alexender", position: "chief excutive" },
    { image: cardImage, name: "Alexender", position: "chief excutive" },
    { image: cardImage, name: "Alexender", position: "chief excutive" },
    { image: cardImage, name: "Alexender", position: "chief excutive" },
  ];

  const HiringData = [
    {
      count: "01",
      heading: "Talk to One of Our Experts",
      paragraph:
        "A specialist on our team will work with you to comprehend your objectives, technical needs, and team dynamics.",
    },
    {
      count: "02",
      heading: "Work With Hand-Selected Talent",
      paragraph:
        "Our managers can help you to find the right talent for your project. The average time to match is under 24 hours.",
    },
    {
      count: "03",
      heading: "The Right Fit",
      paragraph:
        "Work with your new team member on a trial basis, ensuring you hire the right people for the job.",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1280px] px-[15px] mx-auto ">
        <AboutComponentHeader data={AboutHeader[0]} />
        <AboutServicesCom data={AboutHeader[0]} />
        <AboutLeadershipCom cardData={cardData} />
        <AboutHiringCom hiringData={HiringData} />
      </div>
    </div>
  );
};

export default index;
