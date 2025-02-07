
import React, { useContext } from "react";
import Lottie from "lottie-react";
// import animationData from "../assests/Main Scene.json";
import { ThemeContext } from "./ThemeContext";
import animationData from "../assests/about-animation.json";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const highlight_class = `highlight ${isDarkMode ? "dark" : "light"}`;
  return (
    <div className="about-section">
      <div className="about-animation">
        <Lottie animationData={animationData} ></Lottie>
      </div>
      {/* <div className="about-text">
        <h2>Get to Know Me</h2>
        <p>
          My name is <span className={highlight_class}>Surabhi Sinha</span>, and
          I am proficient in both backend and frontend technologies, including{" "}
          <span className={highlight_class}>HTML</span>,{" "}
          <span className={highlight_class}>JavaScript</span>,{" "}
          <span className={highlight_class}>CSS</span>,{" "}
          <span className={highlight_class}>Bootstrap</span>,{" "}
          <span className={highlight_class}>React</span>,{" "}
          <span className={highlight_class}>Python</span>,{" "}
          <span className={highlight_class}>Django</span>, and{" "}
          <span className={highlight_class}>SQLite</span>.
        </p>
        <p>
          I also have a strong command of programming languages such as{" "}
          <span className={highlight_class}>C</span>,{" "}
          <span className={highlight_class}>C++</span>,{" "}
          <span className={highlight_class}>Java</span>, and{" "}
          <span className={highlight_class}>Python</span>. Additionally, I actively
          participate in{" "}
          <span className={highlight_class}>coding contests</span>.
        </p>
        <p>
          I enjoy{" "}
          <span className={highlight_class}>learning new technologies</span> and
          aspire to become a{" "}
          <span className={highlight_class}>software engineer</span> to
          contribute meaningfully to the{" "}
          <span className={highlight_class}>tech industry</span>.
        </p>
      </div> */}
       {/* <div className="about-text">
        <h2>Get to Know Me</h2>
        <p>
          I am an <span className={highlight_class}>AI/ML enthusiast</span>,
          passionate about leveraging technology to solve real-world problems
          and create a positive impact on society. I’m actively working on{" "}
          <span className={highlight_class}>machine learning projects</span> that
          integrate innovation with practical solutions.
        </p>
        <p>
          Alongside my AI/ML journey, I am a{" "}
          <span className={highlight_class}>4-star CodeChef coder</span> with a
          strong command of <span className={highlight_class}>Data Structures</span> and{" "}
          <span className={highlight_class}>Algorithms</span>, continuously pushing
          my competitive programming skills using{" "}
          <span className={highlight_class}>C++</span>.
        </p>
        <p>
          I am seeking internships that align with my passion for{" "}
          <span className={highlight_class}>AI/ML</span> and allow me to combine
          technical expertise with creative problem-solving. If you’re looking for
          someone who brings strong coding abilities and a focus on impactful
          projects, let’s connect and collaborate!
        </p>
      </div> */}
      <div className="about-text">
  <h2>Get to Know Me</h2>
  <p>
    I am <span className={highlight_class}>Pawan Mugalihalli</span> from Karnataka, currently pursuing my <span className={highlight_class}>BTech in Computer Science and Engineering</span> from the <span className={highlight_class}>Indian Institute of Information Technology, Kottayam</span>. As a third-year student with a CGPA of <span className={highlight_class}>8.95</span> up to the 5th semester, I have a solid academic foundation.
  </p>
  <p>
    I have worked on various <span className={highlight_class}>AI/ML projects</span> and am currently focusing on enhancing my skills in <span className={highlight_class}>backend development</span> with <span className={highlight_class}>Spring Boot</span>. I am passionate about using technology to solve real-world problems and create innovative, practical solutions.
  </p>
  <p>
    I am also a <span className={highlight_class}>4-star CodeChef coder</span> with a strong command of <span className={highlight_class}>Data Structures</span> and <span className={highlight_class}>Algorithms</span>, continuously refining my problem-solving abilities, particularly in <span className={highlight_class}>C++</span>. My passion for competitive programming drives me to tackle complex problems and improve my coding skills.
  </p>
  <p>
    I am actively seeking <span className={highlight_class}>internship opportunities</span> where I can apply my technical expertise in <span className={highlight_class}>AI/ML</span> and <span className={highlight_class}>backend development</span> to impactful projects. If you're looking for someone with strong coding abilities and a commitment to innovation, let's connect and collaborate!
  </p>
</div>

    </div>
  );
};

export default About;



// import React, { useEffect, useContext, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// import Lottie from "lottie-react";
// import animationData from "../assests/about-animation.json";
// import { ThemeContext } from "./ThemeContext";
// import "../Css/About.css";

// const About = () => {
//   const { isDarkMode } = useContext(ThemeContext);
//   const highlight_class = `highlight ${isDarkMode ? "dark" : "light"}`;

//   // Toggle animation direction (flip-up or flip-down)
//   const [flipDirection, setFlipDirection] = useState("flip-up");

//   useEffect(() => {
//     AOS.init({
//       duration: 2000, // Slow animation (2 seconds)
//       easing: "ease-in-out",
//       mirror: true,
//     });
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const aboutSection = document.getElementById("about-section");
//       if (aboutSection) {
//         const rect = aboutSection.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//           setFlipDirection((prev) => (prev === "flip-up" ? "flip-down" : "flip-up"));
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div id="about-section" className="about-section" data-aos={flipDirection}>
//       <div className="about-animation">
//         <div className="about-lottie-animation">
//           <Lottie animationData={animationData} />
//         </div>
//       </div>
//       <div className="about-text">
//         <h2>Get to Know Me</h2>
//         <p>
//           I am an <span className={highlight_class}>AI/ML enthusiast</span>,
//           passionate about leveraging technology to solve real-world problems
//           and create a positive impact on society. I’m actively working on{" "}
//           <span className={highlight_class}>machine learning projects</span> that
//           integrate innovation with practical solutions.
//         </p>
//         <p>
//           Alongside my AI/ML journey, I am a{" "}
//           <span className={highlight_class}>4-star CodeChef coder</span> with a
//           strong command of <span className={highlight_class}>Data Structures</span> and{" "}
//           <span className={highlight_class}>Algorithms</span>, continuously pushing
//           my competitive programming skills using{" "}
//           <span className={highlight_class}>C++</span>.
//         </p>
//         <p>
//           I am seeking internships that align with my passion for{" "}
//           <span className={highlight_class}>AI/ML</span> and allow me to combine
//           technical expertise with creative problem-solving. If you’re looking for
//           someone who brings strong coding abilities and a focus on impactful
//           projects, let’s connect and collaborate!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
