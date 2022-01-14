import * as myconsts from "../constants"
import "../css/Projects.css"
import ProjectCard from "./ProjectCard"
import logo1 from "../img/1logo.png";
import logo2 from "../img/2logo.png";
import logo3 from "../img/3logo.png";
import logo4 from "../img/4logo.png";
import qdfitness from "../img/projectcard/qdfitness.jpg";
import instawriter from "../img/projectcard/instawriter.png";
import pludose from "../img/projectcard/pludose.jpg";
import img4 from "../img/tvs.jpg";


const Blog = () => {
  return (
    <div className="projects">
      <ProjectCard imgsrc={pludose} logosrc = {logo1} title = "Evolution of Covid-19" date="June 2021" body="A blog" mode="dark" />
      <ProjectCard imgsrc={qdfitness} logosrc = {logo2} title = "Psoriasis, Crohn's Disease, & Stelara" date="September 2021" body="A blog" mode = "dark" />
      <ProjectCard imgsrc={instawriter} logosrc = {logo3} title = "Organelles: Mini Organs?" date="December 2021" body="A blog" />
      <ProjectCard imgsrc={img4} logosrc = {logo4} title = "AI in Medicine" date="December 2021" body="A blog" mode="dark" />
      <ProjectCard imgsrc={img4} logosrc = {logo4} title = "Perks and Falls of Online Schooling" date="December 2021" body="A blog" mode="dark" />
      <ProjectCard imgsrc={img4} logosrc = {logo4} title = "All According to Plan: How " date="December 2021" body="A blog" mode="dark" />

      <div className="scrolldown"></div>
    </div>
  );
};

export default Blog;
