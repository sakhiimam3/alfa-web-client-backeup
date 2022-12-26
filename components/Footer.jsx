import React, { useEffect } from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { GetFooter } from "../redux/reducers/footerReducer";
const Footer = () => {
  const dispatch = useDispatch();
  const {
    footerData: { footerData },
  } = useSelector((state) => state);

  useEffect(() => {
    // get  footer  sections  data
    dispatch(GetFooter())
      .unwrap()
      .then(() => {})
      .catch(() => {
        console.log("Error");
      });
  }, []);

  return (
    <div className="mt-[10px] left-0 bottom-0 w-full z-10 bg-[#F7F7F7]">
      <div className="w-full sm:h-[150px]  bg-white">
        <div className="footer-background justify-center align-center sm:w-[500px] h-full sm:h-[150px] m-auto">
          <div style={{ textAlign: "center" }} className="sm:mt-2">
            <span className="footer-text ">
              A Desire? A project? <br />
              Participate in the draft
            </span>
            <br />
            <b> ALPHA ACCOMPANIES YOU.</b> <br />
            <Link href="/" className="flex m-auto justify-center sm:mt-2 ">
              <span className="underline mr-1 "> LET'S </span> GO{" "}
              <BsArrowUpRight size={20} className="sm:ml-2 text-[#05F2DB]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto sm:flex justify-between items-center sm:p-6 text-[#14193D]-400 w-[100%]">
        <div className="flex px-4 py-3 sm:ml-20">
          <div>
            <b className="text-[#14193d]-400">{footerData[0]?.email}</b>
            <div className="sm:mt-4">(c) Rights Reserved</div>
          </div>
          <div className="sm:ml-20 sm:mt-[0.5] ml-5">
            <b>{footerData[0]?.phone}</b>
          </div>
        </div>
        <div className="p-4 w-half sm:mr-10">
          <b> Back to top</b>
          <div className="flex sm:justify-between justify-start mt-4">
            <Link
              href={`${footerData[0]?.linkedInUrl}`}
              className="sm:mr-0 mr-4"
            >
              <GrLinkedinOption size={18} />
            </Link>
            <Link href={`${footerData[0]?.instaUrl}`} className="sm:mr-0 mr-4">
              <AiFillInstagram size={18} />
            </Link>
            <Link
              to={footerData[0]?.facebookUrl}
              href={`${footerData[0]?.facebookUrl}`}
            >
              <FaFacebookF size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
