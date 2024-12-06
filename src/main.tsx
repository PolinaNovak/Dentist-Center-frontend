import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Timetable from "./components/Timetable";
import Services from "./components/Services";
import OrthodontistBanner from "./components/OrthodontistBanner";
import PeopleOpinions from "./components/PeopleOpinions";
import Discount from "./components/Discount";
import SpecialistTypes from "./components/SpecialistTypes";
import ExpertsMenu from "./components/ExpertsMenu";
import RequestBanner from "./components/RequestBanner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Body />
    <Timetable />
    <Services />
    <OrthodontistBanner />
    <PeopleOpinions />
    <Discount />
    <SpecialistTypes />
    <ExpertsMenu />
    <RequestBanner />
  </StrictMode>
);
