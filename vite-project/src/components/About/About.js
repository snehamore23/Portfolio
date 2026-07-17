import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
  Hello! My name is <strong>Sneha More</strong>, and I am a passionate
  <strong> Full Stack MERN Developer</strong> who enjoys building modern,
  responsive, and user-friendly web applications. I specialize in
  <strong> MongoDB, Express.js, React.js, and Node.js</strong>, creating
  scalable applications with clean and efficient code.
  <br />
  <br />
  I also have experience with <strong>Java, JavaScript, SQL, Git, GitHub</strong>,
  and developing RESTful APIs. I enjoy solving real-world problems, learning
  new technologies, and continuously improving my development skills.
  <br />
  <br />
  Currently, I am seeking opportunities to contribute to innovative projects,
  grow as a software developer, and build impactful digital solutions.
</div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
