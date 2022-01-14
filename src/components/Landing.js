import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";
import sunglass from "../img/sunglass.jpg";
import float1 from "../img/1.png";
import float2 from "../img/2.png";
import Navbar from "./Navbar";

const Landing = ({ executeScroll }) => {
  const titleRef = useRef();
  const [view, setView] = useState("");
  const handlePullNav = (e) => {
    executeScroll();
  };

  //shift view, change colours
  const handleSliceClick = (e) => {
    var landingpage = document.getElementById("landingpage");
    var greeting = document.getElementById("greeting");
    var wheel = document.getElementById("wheel");
    var spinarm = document.getElementById("spinarm");
    var pullnav = document.getElementById("pulltonav");
    var imgbtm = document.querySelector(".openimgbtm");
    var imgtop = document.querySelector(".openimgtop");
    var sub = document.querySelector("#opensubtitle");

    sub.classList = "linearwipe";
    if (e.target.id === "q2") {
      wheel.style.transform = "rotate(315deg)";
      landingpage.style.backgroundColor = "var(--color2l)";
      pullnav.style.backgroundColor = "var(--color2l)";
      spinarm.style.backgroundColor = "var(--color2)";
      setTimeout(() => {
        imgbtm.style.display = "block";
      }, 200);
      setTimeout(() => {
        imgtop.style.display = "block";
      }, 500);
      setView("PROJECTS");
    } else if (e.target.id === "q3") {
      wheel.style.transform = "rotate(135deg)";
      landingpage.style.backgroundColor = "var(--color3l)";
      pullnav.style.backgroundColor = "var(--color3l)";
      spinarm.style.backgroundColor = "var(--color3)";
      setView("ABOUT");
    } else if (e.target.id === "q4") {
      wheel.style.transform = "rotate(225deg)";
      landingpage.style.backgroundColor = "var(--color4l)";
      pullnav.style.backgroundColor = "var(--color4l)";
      spinarm.style.backgroundColor = "var(--color4)";
      setView("BLOG");
    } else {
      // landingpage.style.backgroundImage = `url(${b1})`;
      wheel.style.transform = "rotate(45deg)";
      landingpage.style.backgroundColor = "var(--color1l)";
      pullnav.style.backgroundColor = "var(--color1l)";
      spinarm.style.backgroundColor = "var(--color1)";
      setView("CURRENT");
    }
    wheel.classList = "selected";
    spinarm.classList = "selected";
    greeting.classList = "selected";
    pullnav.style.display = "flex";
  };

  return (
    <div className="landing">
      <Navbar />
      <div id="landingpage" styles={{ backgroundImage: `url(${sunglass})` }}>
        <img className="openimgtop" src={float1} alt="" />
        <img className="openimgbtm" src={float2} alt="" />
        <div id="greeting">
          <h1>Hi! I'm Huayin.</h1>
          <h2
            id="opensubtitle"
            onTransitionEnd={(e) => (e.target.classList = "")}
          >
            Welcome to my <i>{view.toLowerCase()}</i>
          </h2>
        </div>
        <div id="spinarm"></div>
        <div id="wheel" style={{ transform: "rotate(45deg)" }}>
          <Link to="/current">
            <span
              id="q1"
              className="quarter selectedslice"
              onClick={handleSliceClick}
            ></span>
          </Link>
          <Link to="/projects">
            <span id="q2" className="quarter" onClick={handleSliceClick}></span>
          </Link>
          <Link to="/about">
            <span id="q3" className="quarter" onClick={handleSliceClick}></span>
          </Link>
          <Link to="/blog">
            <span id="q4" className="quarter" onClick={handleSliceClick}></span>
          </Link>
        </div>
      </div>
      <div id="pulltonav" onClick={handlePullNav}>
        <hr />
        <hr />
      </div>
      <div ref={titleRef}></div>
    </div>
  );
};

export default Landing;
