import myPicture from "../assets/IMG_3481.jpg";

const AboutMe = () => {
  return (
    <div title="aboutMe" className="aboutMe">
      <div className="aboutMeSection">
        <div className="aboutMeContent">
          <p>
            I'm an enthusiastic Full Stack Developer with a passion for building appealing and
            stable mobile and web applications.
            </p>

          <p>
            I love being involved in the entire app lifecycle. Including
            initial conceptualization and planning, development, 
            and following through until
            development and delivery.
          </p>
          <p>
            Experienced in working in a team setting following Agile
            methodology requiring great communication and time management
            skills.
          </p>
          {/* <p>
            I am a fast learner, and love learning new technologies and expanding my skillset.
          </p> */}
          <p>
            When I am not developing, I enjoy vegetable gardening, hiking, and
            creating plant-based recipes.
            </p>
        </div>
        <img src={myPicture} className="myPicture" alt="logo" />
      </div>
    </div>
  )
}

export default AboutMe;