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
      <span className={`curr-title ${isDarkMode ? "dark" : "light"}`}>4⭐ CodeChef | IIITK'26 | DSA Enthusiast </span></h1>
   

                   <p className= {`intro-subheading ${isDarkMode ? "dark" : "light"}`}>
                   Currently, I am working on Spring Boot projects, combining cutting-edge technology with real-world applications. 
                   As a 4⭐ CodeChef coder, I possess a deep understanding of Data Structures and Algorithms in C++, 
                   which enables me to solve complex problems efficiently. 
                   I'm actively seeking internship opportunities where I can leverage my skills to drive impactful innovation and contribute to meaningful projects.
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
      

    //   <div className="wrap-landing-page">
    //   <div className={`landing-page-main ${isDarkMode ? "dark" : "light"}`}>
    //     <div className="intro" >
    //       {/* Heading and Subheading */}
    //       <h1 className= {`intro-heading ${isDarkMode ? "dark" : "light"}`}>
    //         Hi, I'm <span className="my-name">Pawan Kumar</span>  <span role="img" className="wave" aria-label="waving hand">
    //    👋
    //  </span> 
    //  <br/>
    //  <span className="curr-title">AI/ML Enthusiast | 4-Star CodeChef Coder | Problem Solver</span>
   

    //       </h1>
    //       <p className= {`intro-subheading ${isDarkMode ? "dark" : "light"}`}>
    //       I’m an AI/ML enthusiast focused on creating innovative solutions to real-world problems.
    //       Currently, I'm working on machine learning projects that blend technology with practical applications. 
    //       As a 4-star CodeChef coder, I have a strong command of Data Structures and Algorithms in C++. 
    //       I’m seeking internships where I can apply my skills and drive impactful change.
    //       </p>

    //       {/* Download button with conditional classes */}
    //       {/* <button
    //         className={`download-button ${isDarkMode ? "dark" : "light"}`}
    //         onClick={handleDownloadResume}
    //       >
    //         Download Resume
    //       </button> */}
    //     </div>

    //     <div className="img-home-main">
    //       <div className="my-pic">
    //         <Lottie animationData={animationData} loop={true} />
    //       </div>
    //     </div>
    //   </div>
    //   </div>