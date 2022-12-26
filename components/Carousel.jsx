import React from "react";
import Carousel from "react-multi-carousel";
import planning from "../public/assets/planning.png";
import "react-multi-carousel/lib/styles.css";
import Uncle from "../public/assets/Rectangle.png";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
const MyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      className="Carousel_main"
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
    >
      <div className="case_right_box">
        <div className="case_right_image">
          <Image src={Uncle} width={320} />
        </div>
        <div className="case_right_detail">
          <h1>Title of case study</h1>
          <p>
            Enterprises and startups trust frontend developers at Tinloof to
            deliver performance-focused and usable interfaces for the web and
            mobile apps.
          </p>
          <div className="case_right_button">
            <button>
              Read more <BsArrowUpRight />
            </button>
          </div>
        </div>
      </div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
      <div>Item 7</div>
      <div>Item 8</div>
      <div>Item 9</div>
      <div>Item 10</div>
    </Carousel>

    //  <Carousel responsive={responsive}>
    //
    //   <div className="case_right_box">
    //     <div className="case_right_image">
    //       <Image src={Uncle} width={320} />
    //     </div>
    //     <div className="case_right_detail">
    //       <h1>Title of case study</h1>
    //       <p>
    //         Enterprises and startups trust frontend developers at Tinloof to
    //         deliver performance-focused and usable interfaces for the web and
    //         mobile apps.
    //       </p>
    //       <div className="case_right_button">
    //         <button>
    //           Read more <BsArrowUpRight />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="case_right_box">
    //     <div className="case_right_image">
    //       <Image src={Uncle} width={320} />
    //     </div>
    //     <div className="case_right_detail">
    //       <h1>Title of case study</h1>
    //       <p>
    //         Enterprises and startups trust frontend developers at Tinloof to
    //         deliver performance-focused and usable interfaces for the web and
    //         mobile apps.
    //       </p>
    //       <div className="case_right_button">
    //         <button>
    //           Read more <BsArrowUpRight />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //    <div>Item 7</div>
    //    <div>Item 8</div>
    //    <div>Item 9</div>
    //    <div>Item 10</div>
    //  </Carousel>
  );
};

export default MyCarousel;
