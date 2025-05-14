import React , {useContext}from "react";
import Timeline from "./Timeline";
import "../Css/Experiences.css";
import { ThemeContext } from "./ThemeContext";

const Experiences = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const timelineData = [
    {
      "type": "right-container",
      "img": "placeholder",
      "title": "Parallel and Distributed Computing Lab Manual, Team Leader",
      "duration": "Nov 2024 – Dec 2024",
      "description": 
        "Led a team of 9 members to create a comprehensive lab manual for the 'Parallel and Distributed Computing' course, covering all labs and exercises relevant to the curriculum. Successfully delivered a well-structured manual used for future course iterations."
    },
  ];

  return (
    <div className={`experience-timeline-section ${isDarkMode ? "dark" : "light"}`}>
    <h1 style={{ textAlign: "center" }}>My Journey So Far</h1>
    <Timeline timelineData={timelineData} />
  </div>
  );
};

export default Experiences;


