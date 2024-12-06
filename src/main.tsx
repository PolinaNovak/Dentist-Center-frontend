import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Timetable from "./components/Timetable";
import Services from "./components/Services";
import OrthodontistBanner from "./components/OrthodontistBanner";
import PeopleOpinions from "./components/PeopleOpinions";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Body />
    <Timetable />
    <Services />
    <OrthodontistBanner />
    <PeopleOpinions />
  </StrictMode>
);
