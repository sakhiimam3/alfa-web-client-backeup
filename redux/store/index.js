import { configureStore } from "@reduxjs/toolkit";
import HeaderSecOne from "../reducers/homeHeaderReducers";
import HomeServices from "../reducers/homeServicesReducer";
import AboutHeader from "../reducers/AboutHeaderReducers";
import AboutTeam from "../reducers/AboutTeampReducer";
import footerData from "../reducers/footerReducer";
import caseStudyData from "../reducers/caseStudyReducer";
import contactInfo from "../reducers/ContactInfo";
export const store = configureStore({
  reducer: {
    headerSecOne: HeaderSecOne,
    HomeServices: HomeServices,
    AboutHeader: AboutHeader,
    AboutTeam: AboutTeam,
    footerData: footerData,
    caseStudyData: caseStudyData,
    contactInfo: contactInfo,
  },
});
