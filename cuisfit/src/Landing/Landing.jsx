import React from "react";
// import { Rectangle } from "./Rectangle";
import "./Landing.css";

export default function Frame() {
  return (
    <div className="frame">
      <div className="landingContent">
      <img className="hhfood" alt="Hhfood" src="hhfood 1.png" />
      </div>
      <div className="landingContent2">
        <h1>Cuisfit</h1>
      <p className="text-wrapper">Where Culture Meets Fitness, Harmony Prevails</p>
      <div className="div-wrapper">
        <a href="/signUp" className="text-wrapper-2">Get Started Today</a>
      </div>
    </div>
    </div>
  );
};