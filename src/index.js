import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Basic from "./Basic/Basic";
import Section from "./Section/Section";
import Small from "./Small/Small";
import Review from "./Review/Review";
import Gradient from "./Gradient/Gradient";
import Two from "./Two/Two";
import Three from "./Three/Three";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Basic" element={<Basic />} />
        <Route path="/Section" element={<Section />} />
        <Route path="/Small" element={<Small />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Gradient" element={<Gradient />} />
        <Route path="/Two" element={<Two />} />
        <Route path="/Three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
