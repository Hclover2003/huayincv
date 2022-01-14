import b4 from "../img/camper.jpg";

const About = ({ myRef }) => {
  return (
    <div className="about" ref={myRef}>
      <div
        className="projectsdescription"
        style={{ backgroundColor: "#c95e4e" }}
      >
        <h1>Reflecting</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        delectus excepturi porro, deserunt consequatur provident repudiandae
        voluptatum, illum sequi ipsum, dolore sit hic reiciendis nemo. Minima
        nihil quam tempore placeat?
      </div>
      <img
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          display: "block",
        }}
        src={b4}
        alt=""
      />
      <div
        className="projectsdescription"
        style={{ backgroundColor: "#802F23" }}
      >
        <h1>Exploring</h1>
        <p
          style={{
            fontFamily: "League Baskerville",
            fontWeight: "300",
            lineHeight: "1.3",
          }}
        >
          At school, the last day was often a somewhat wistful and mostly hyper
          gateway to a nice, lazy summer. At the community pool, despite the
          blowing snow outside, it was not that different. The last day of my
          first full session as a swim instructor, I was super proud. It was my
          first job, I was looking forward to a nice winter break, and above
          all, it was incredibly heartwarming to see the progress of both my
          students and I. <br /> <br />
          When I was younger, stepping into a pool was enough to make me wheeze,
          cry, cough, and run towards the nearest door. I was a definite land
          animal, and until the age of 12, despised anyone who tried to convince
          me otherwise. As a swim instructor, I had the chance to interact with
          many people with similar experiences, and also those with vastly
          different ones. Toddlers, seniors, competitive swimmers, and those
          learning for the first time; swimming is in no way my favourite sport,
          even today, but the experience was truly rewarding. It taught me
          different ways to lead and interact with people, and also to
          appreciate the joy and privilege of being a part of someone’s journey.
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="projectsdescription"
          style={{ backgroundColor: "#D19086" }}
        >
          <h1>Creating</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          delectus excepturi porro, deserunt consequatur provident repudiandae
          voluptatum, illum sequi ipsum, dolore sit hic reiciendis nemo. Minima
          nihil quam tempore placeat?
        </div>
        <img
          style={{
            objectFit: "cover",
            maxWidth: "50%",
          }}
          src="https://i.pinimg.com/564x/4d/3e/f9/4d3ef908f4fa0e88e67d6f90c341201a.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
