const ProjectCard = ({ logosrc, imgsrc, title, date, body, myref, mode = "light"}) => {
  return (
    <div className="projectcard" style={{backgroundImage:`url(${imgsrc})`, color: (mode == "dark")? "white" : "black"}} ref={myref}>
      <div id={`anchor${title}`} style={{position:"absolute", top:"-100px", left:"0"}}></div>
      <h1 className="projectcardtitle" >
        {title}
      </h1>
      <h2 className="projectcardsubtitle">{date}</h2>
      <div className="projectcardlogo" style={{backgroundImage:`url(${logosrc})`}}></div>
    </div>
  );
};

export default ProjectCard;
