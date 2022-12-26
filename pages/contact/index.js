import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactHeaderCom from "../../components/ContactHeaderCom";
import ContactMap from "../../components/ContactMap";
import { GetcontactInfo } from "../../redux/reducers/ContactInfo";

const index = () => {
  const dispatch = useDispatch();
  const {
    contactInfo: { contactInfo },
  } = useSelector((state) => state);

  useEffect(() => {
    // get about two  sections  data
    dispatch(GetcontactInfo())
      .unwrap()
      .then(() => {})
      .catch(() => {
        console.log("Error");
      });
  }, []);

  return (
    <>
      <div>
        <ContactHeaderCom data={contactInfo[0]} />
        <div className="mx-auto w-[1200px] my-10">
          <ContactMap />
        </div>
      </div>
    </>
  );
};

export default index;
