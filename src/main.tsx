import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Head from "./components/Head";
import Body from "./components/Body";
import Timetable from "./components/Timetable";
import Services from "./components/Services";
import OrthodontistBanner from "./components/OrthodontistBanner";
import PeopleOpinions from "./components/PeopleOpinions";
import Discount from "./components/Discount";
import SpecialistTypes from "./components/SpecialistTypes";
import ExpertsMenu from "./components/ExpertsMenu";
import RequestBanner from "./components/RequestBanner";
import News from "./components/News";
import Footer from "./components/Footer";
import Container from "./components/Container";
import ContainerSmall from "./components/ContainerSmall";
import ContainerInner from "./components/ContainerInner";
import NavBar from "./components/NavBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <Head />
      <NavBar />
      <Body />
      <ContainerSmall>
        <Timetable />
      </ContainerSmall>
      <ContainerSmall>
        <Services />
      </ContainerSmall>
      <OrthodontistBanner />
      <PeopleOpinions />
      <Discount />
      <ContainerSmall>
        <SpecialistTypes />
      </ContainerSmall>
      <ExpertsMenu />
      <RequestBanner />
      <ContainerSmall>
        <News />
      </ContainerSmall>
      <Footer />
    </Container>
  </StrictMode>
);
