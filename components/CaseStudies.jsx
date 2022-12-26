import React, { useCallback, useEffect, useRef } from "react";
import planning from "../public/assets/planning.png";
import Uncle from "../public/assets/Rectangle.png";
import Image from "next/image";
import { BsArrowUpRight, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Carousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux";
import { GetCaseStudyData } from "../redux/reducers/caseStudyReducer";

const CaseStudies = () => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const {
    caseStudyData: { caseStudyData },
  } = useSelector((state) => state);

  console.log(caseStudyData, "<<<");

  useEffect(() => {
    // get about two  sections  data
    dispatch(GetCaseStudyData())
      .unwrap()
      .then(() => {})
      .catch(() => {
        console.log("Error");
      });
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <div className="case">
        <div className="case_wrapper">
          <div className="case_left">
            <div className="case_left_box">
              <div className="case_left_box_Icon">
                <Image
                  src={planning}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <h1>Case Studies</h1>
              <p>
                Enterprises and startups trust frontend developers at Tinloof to
                deliver performance-focused and usable interfaces for the web
                and mobile apps.
              </p>
              <button>
                View ALL <BsArrowUpRight />
              </button>
            </div>
          </div>

          <div className="case_right">
            {/* <div className="case_right_box"> 
              <div className="case_right_image">
                <Image src={Uncle} width={320} />
              </div>
              <div className="case_right_detail">
                <h1>Title of case study</h1>
                <p>
                  Enterprises and startups trust frontend developers at Tinloof
                  to deliver performance-focused and usable interfaces for the
                  web and mobile apps.
                </p>
                <div className="case_right_button">
                  <button>
                    Read more <BsArrowUpRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="case_right_box ">
              <div className="case_right_image">
                <Image src={Uncle} width={320} />
              </div>
              <div className="case_right_detail">
                <h1>
                  Nestlé captures early advertisement feedback for prelaunch
                  optimization
                </h1>
                <p>
                  Enterprises and startups trust frontend developers at Tinloof
                  to deliver performance-focused and usable interfaces for the
                  web and mobile apps.
                </p>
                <div className="case_right_button">
                  <button>
                    Read more <BsArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="swiperbtn">
              <BsArrowUpRight />
              <BsArrowLeft />
            </div> */}
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
