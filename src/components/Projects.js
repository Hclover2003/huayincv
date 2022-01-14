import * as myconsts from "../constants";
import "../css/Projects.css";
import ProjectCard from "./ProjectCard";
import logo1 from "../img/1logo.png";
import logo2 from "../img/2logo.png";
import logo3 from "../img/3logo.png";
import logo4 from "../img/4logo.png";
import qdfitness from "../img/projectcard/qdfitness.jpg";
import instawriter from "../img/projectcard/instawriter.png";
import pludose from "../img/projectcard/pludose.jpg";
import img4 from "../img/tvs.jpg";

const Projects = ({ myRef }) => {
  return (
    <div className="projects">
      <div className="projectsdescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        delectus excepturi porro, deserunt consequatur provident repudiandae
        voluptatum, illum sequi ipsum, dolore sit hic reiciendis nemo. Minima
        nihil quam tempore placeat?
      </div>
      <ProjectCard
        imgsrc={pludose}
        logosrc={logo1}
        title="Pludose"
        date="June 2021"
        body="A blog"
        myref={myRef}
        mode="dark"
      />
      <ProjectCard
        imgsrc={qdfitness}
        logosrc={logo2}
        title="QD Food Diary"
        date="September 2021"
        body="A blog"
        mode="dark"
      />
      <ProjectCard
        imgsrc={instawriter}
        logosrc={logo3}
        title="InstaWriter"
        date="December 2021"
        body="A blog"
      />
      <ProjectCard
        imgsrc={img4}
        logosrc={logo4}
        title="News in Another Tongue"
        date="December 2021"
        body="A blog"
        mode="dark"
      />

      <ProjectCard
        imgsrc="https://i.pinimg.com/564x/db/6d/37/db6d37078bb254923e8b56b1e179fb52.jpg"
        logosrc="https://i.pinimg.com/564x/db/6d/37/db6d37078bb254923e8b56b1e179fb52.jpg"
        title="News in Another Tongue"
        date="December 2021"
        body="A blog"
        mode="dark"
      />

      {/* <div className="scrolldown"></div> */}
    </div>
  );
};

export default Projects;
