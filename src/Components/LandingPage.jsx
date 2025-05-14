import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";
import "../Css/LandingPage.css";
import animationData from "../assests/landing-page-pawan.json";
          
      const LandingPage = () => {
        const { isDarkMode } = useContext(ThemeContext);
      
        // Handle resume download
        const handleDownloadResume = () => {
          const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
          const link = document.createElement("a");
          link.href = resumeUrl;
          link.download = "Pawan_Mugalihalli_Resume.pdf";
          link.click();
        };
      
        return (
          <Fade>
            <div className="wrap-landing-page">
            <div className={`landing-page-main ${isDarkMode ? "dark" : "light"}`}>
              <div className="intro" >
                {/* Heading and Subheading */}
                {/* <h1 className= {`intro-heading ${isDarkMode ? "dark" : "light"}`}>
                  Hi, I'm <span className="my-name">Surabhi Sinha</span>  <span role="img" className="wave" aria-label="waving hand">
             👋
           </span> */}
                {/* </h1> */}
                <h1 className= {`intro-heading ${isDarkMode ? "dark" : "light"}`}>
            Hi, I'm <span className="my-name">Pawan Mugalihalli</span><span role="img" className="wave" aria-label="waving hand">
        👋
      </span> 
      <br/>
      <span className={`curr-title ${isDarkMode ? "dark" : "light"}`}>Backend Developer | IIITK'26 | DSA Enthusiast </span></h1>
   

                   <p className= {`intro-subheading ${isDarkMode ? "dark" : "light"}`}>
                   I'm a backend developer skilled in Spring Boot, building scalable and secure applications with RESTful APIs, WebSockets, and real-time systems. As a 4⭐ CodeChef coder and LeetCode Knight (1885+, Top 4.85%), I bring strong DSA and C++ competitive programming skills. I also have experience integrating ML/DL solutions into real-world apps. Actively seeking backend-focused internships that blend system design with AI innovation. 
           </p>
                {/* Download button with conditional classes */}
                <button
                  className={`download-button ${isDarkMode ? "dark" : "light"}`}
                  onClick={handleDownloadResume}
                >
                  Download Resume
                </button>
              </div>
      
              <div className="img-home-main">
                <div className="my-pic">
                  <Lottie animationData={animationData} loop={true} />
                </div>
              </div>
            </div>
            </div>
          </Fade>
        );
      };
      
      export default LandingPage;
    