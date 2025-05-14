
import React , {useContext}from "react";
import placeholder from "../assests/placeholder.jpeg";
import Timeline from "./Timeline"; 
import "../Css/Education.css";
import { ThemeContext } from "./ThemeContext";

const Education = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const timelineData = [
    {
      type: "right-container",
      img: placeholder,
      title: "Bachelors of Technology in Computer Science",
      institute: "Indian Institute of Information Technology Kottayam",
      duration: "2022-2026",
      description: "Currently pursuing my B.Tech with a focus on software development, programming languages, and data structures. I have an CGPA of 8.95 up to semester 5 and have actively participated in coding contests, hackathons, and technical workshops.",
    },
    
    {
      type: "left-container",
      img: placeholder,
      title: "Intermediate",
      duration: "2021-2022",
      institute: "Tirumala Engineering College , Vizag",
      description: "Achieved a percentage of 96.2%, excelling in mathematics and science. This period helped me decide to pursue computer science as a career path, laying the groundwork for my engineering studies.",
    },

  ];


  return (
    <div className={`education-timeline-section ${isDarkMode ? "dark" : "light"}`}>
    <h1 >The Road to Knowledge: My Education Timeline</h1>
    <Timeline timelineData={timelineData} />
    
  </div>
  );
};

export default Education;


