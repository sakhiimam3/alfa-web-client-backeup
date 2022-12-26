import React from "react";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
const ContactHeaderCom = ({ data }) => {
  return (
    <>
      <div className="contact-header ">
        <div className="grid mt-10 w-full sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          <div className=" mt-20 sm:mt-28 pl-5 sm:pl-20 lg:mx-[50px]  contact-header-text">
            <h1 className=" text-[40px]  sm:text-start md:text-[60px]   sm:leading-[68px] uppercase">
              {data?.title}
            </h1>
            <p className=" my-4 text-[16px] text-[#122E34] sm:leading-[24px] mx-2 sm:mx-3 lg:mx-0 sm:my-3 text-start  lg:w-full sm:text-justify  md:text-[18px]  lg:text-[20px]">
              {data?.text}
            </p>

            <div className="sm:mt-2  contact-bottom-text">
              <h1 className="uppercase sm:mt-6 mb-3 sm:mb-2 sm:text-[24px]">
                contact
              </h1>
              <table>
                <tbody>
                  <tr>
                    <td className="contact-icons">
                      <GoLocation />
                    </td>
                    <td className="pl-3">{data?.location}</td>
                  </tr>
                  <tr>
                    <td className="contact-icons">
                      <BiPhoneCall />
                    </td>
                    <td className="pl-3">{data?.phone}</td>
                  </tr>
                  <tr>
                    <td className="contact-icons">
                      <MdOutlineEmail />
                    </td>
                    <td className="pl-3">{data?.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=" mt-10  sm:mt-28  flex flex-col items-center contact-right-form">
            <form className="form  w-[80%] sm:w-full sm:px-20 lg:px-20">
              <div class="user-input-wrp">
                <br />
                <input type="text" class="inputText" required />
                <span class="floating-label">First & last name *</span>
              </div>
              <div class="user-input-wrp">
                <br />
                <input type="email" class="inputText" required />
                <span class="floating-label">Email *</span>
              </div>
              <div class="user-input-wrp">
                <br />
                <input type="text" class="inputText" required />
                <span class="floating-label">No. Telephone*</span>
              </div>
              <div class="user-input-wrp">
                <br />
                <textarea class="inputText" required />
                <span class="floating-label">Message Content* </span>
              </div>

              <button className=" w-full   mt-10  sm:mx-0 h-[48px] bg-[#122E34] border-radius-[5px] text-[#fff] sm:mt-5">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeaderCom;
