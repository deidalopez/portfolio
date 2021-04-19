import myPicture from "../assets/IMG_3481.jpg";

const AboutMe = () => {
  return (
    <div title="aboutMe" className="aboutMe">
      <div className="aboutMeSection">
        <div className="aboutMeContent">
          <p>
            I'm a Full Stack Developer with a passion for building appealing, and
            stable mobile and web applications. I enjoy being involved in the
            initial conceptualization of an app, and following through until
            development, and delivery.
            </p>
          <p>
            Experienced in working in a team setting following Agile
            methodology, requiring good communication, and time management
            skills.
            </p>
          <p>
            When I am not developing, I enjoy vegetable gardening, hiking, and
            creating new plant-based recipes.
            </p>
        </div>
        <img src={myPicture} className="myPicture" alt="logo" />
      </div>
    </div>
  )
}

export default AboutMe;