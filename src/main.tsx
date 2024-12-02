import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Timetable from "./components/Timetable";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Body />
    <Timetable />
  </StrictMode>
);
