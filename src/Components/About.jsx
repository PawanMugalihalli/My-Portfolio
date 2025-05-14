// import React, { useContext } from "react";
// import Lottie from "lottie-react";
// import { ThemeContext } from "./ThemeContext";
// import animationData from "../assests/about-animation.json";

// const About = () => {
//   const { isDarkMode } = useContext(ThemeContext);
//   const highlight_class = `highlight ${isDarkMode ? "dark" : "light"}`;
//   return (
//     <div className={`about-section ${isDarkMode ? "dark" : "light"}`}>

//       <div className="about-animation">
//         <Lottie animationData={animationData} ></Lottie>
//       </div>

//       <div className="about-text">
//   <h2>Get to Know Me</h2>
//   <p>
//     I am <span className={highlight_class}>Pawan Mugalihalli</span> from Karnataka, currently pursuing my <span className={highlight_class}>BTech in Computer Science and Engineering</span> from the <span className={highlight_class}>Indian Institute of Information Technology, Kottayam</span>. As a third-year student with a CGPA of <span className={highlight_class}>8.95</span> up to the 5th semester, I have a solid academic foundation.
//   </p>
//   <p>
//     I have worked on various <span className={highlight_class}>AI/ML projects</span> and am currently focusing on enhancing my skills in <span className={highlight_class}>backend development</span> with <span className={highlight_class}>Spring Boot</span>. I am passionate about using technology to solve real-world problems and create innovative, practical solutions.
//   </p>
//   <p>
//     I am also a <span className={highlight_class}>4-star CodeChef coder</span> with a strong command of <span className={highlight_class}>Data Structures</span> and <span className={highlight_class}>Algorithms</span>, continuously refining my problem-solving abilities, particularly in <span className={highlight_class}>C++</span>. My passion for competitive programming drives me to tackle complex problems and improve my coding skills.
//   </p>
//   <p>
//     I am actively seeking <span className={highlight_class}>internship opportunities</span> where I can apply my technical expertise in <span className={highlight_class}>AI/ML</span> and <span className={highlight_class}>backend development</span> to impactful projects. If you're looking for someone with strong coding abilities and a commitment to innovation, let's connect and collaborate!
//   </p>
// </div>

//     </div>
//   );
// };

// export default About;

import React, { useContext } from "react";
import Lottie from "lottie-react";
import animationData from "../assests/about-animation.json";
import { ThemeContext } from "./ThemeContext";
import "../Css/About.css";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const highlight_class = `highlight ${isDarkMode ? "dark" : "light"}`;
  return (
    <div className={`about-section ${isDarkMode ? "dark" : "light"}`}>
      <div className="about-animation">
        <Lottie animationData={animationData}></Lottie>
      </div>

      <div className="about-text">
        <h2>Get to Know Me</h2>
        <p>
          I am <span className={highlight_class}>Pawan Mugalihalli</span> from
          Karnataka, currently pursuing my{" "}
          <span className={highlight_class}>
            BTech in Computer Science and Engineering
          </span>{" "}
          from the{" "}
          <span className={highlight_class}>
            Indian Institute of Information Technology, Kottayam
          </span>
          . As a third-year student with a CGPA of{" "}
          <span className={highlight_class}>8.95</span> up to the 5th semester,
          I have a solid academic foundation.
        </p>
        <p>
          I have worked on various{" "}
          <span className={highlight_class}>AI/ML projects</span> and am
          currently focusing on enhancing my skills in{" "}
          <span className={highlight_class}>backend development</span> with{" "}
          <span className={highlight_class}>Spring Boot</span>. I am passionate
          about using technology to solve real-world problems and create
          innovative, practical solutions.
        </p>
        <p>
          I am also a{" "}
          <span className={highlight_class}>4-star CodeChef coder</span> with a
          strong command of{" "}
          <span className={highlight_class}>Data Structures</span> and{" "}
          <span className={highlight_class}>Algorithms</span>, continuously
          refining my problem-solving abilities, particularly in{" "}
          <span className={highlight_class}>C++</span>. My passion for
          competitive programming drives me to tackle complex problems and
          improve my coding skills.
        </p>
        <p>
          I am actively seeking{" "}
          <span className={highlight_class}>internship opportunities</span>{" "}
          where I can apply my technical expertise in{" "}
          <span className={highlight_class}>AI/ML</span> and{" "}
          <span className={highlight_class}>backend development</span> to
          impactful projects. If you're looking for someone with strong coding
          abilities and a commitment to innovation, let's connect and
          collaborate!
        </p>
      </div>
    </div>
  );
};

export default About;
