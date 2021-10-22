import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import sunglass from "../img/sunglass.jpg";

const Landing = ({ executeScroll }) => {
  const [view, setView] = useState("");

  const handlePullNav = (e) => {
    var wheel = document.getElementById("wheel");
    // var landingpage = document.getElementById("landingpage");
    // var greeting = document.getElementById("greeting");
    // var spinarm = document.getElementById("spinarm");
    // document.querySelectorAll(".quarter").forEach((elem) => {
    //   elem.style.width = "25vw";
    //   elem.style.height = "6vh";
    //   elem.style.animation = "none";
    // });
    // spinarm.style.display = "none";
    // greeting.style.display = "none";
    // landingpage.style.height = "10vh";
    wheel.classList = "changetonav";
    // wheel.style.display = "flex";
    // wheel.style.overflow = "initial";
    // wheel.style.transform = "rotate(0deg)";
    // wheel.style.transition = "all 1s";
    // wheel.style.animation = "none";
    // wheel.style.width = "auto";
    // wheel.style.height = "auto";
  };

  //shift view, change colours
  const handleSliceClick = (e) => {
    var wheel = document.getElementById("wheel");
    var landingpage = document.getElementById("landingpage");
    var greeting = document.getElementById("greeting");
    var spinarm = document.getElementById("spinarm");
    var pullnav = document.getElementById("pulltonav");

    if (e.target.id === "q2") {
      wheel.style.transform = "rotate(315deg)";
      landingpage.style.backgroundColor = "var(--color2l)";
      pullnav.style.backgroundColor = "var(--color2l)";

      spinarm.style.backgroundColor = "var(--color2)";
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
      <div id="landingpage" styles={{ backgroundImage: `url(${sunglass})` }}>
        <div id="greeting">
          <h1>Hello! I'm Huayin.</h1>
          <p>👋 Welcome to my {view}</p>
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
    </div>
  );
};

export default Landing;
