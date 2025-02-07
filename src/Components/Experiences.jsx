import React from "react";
import placeholder from "../assests/placeholder.jpeg";
import Timeline from "./Timeline";
import "../Css/Experiences.css";

const Experiences = () => {
  const timelineData = [
    {
      "type": "right-container",
      "img": "placeholder",
      "title": "Parallel and Distributed Computing Lab Manual, Team Leader",
      "duration": "Nov 2024 – Dec 2024",
      "description": 
        "Led a team of 9 members to create a comprehensive lab manual for the 'Parallel and Distributed Computing' course, covering all labs and exercises relevant to the curriculum. Successfully delivered a well-structured manual used for future course iterations."
    },
    {
      "type": "left-container",
      "img": "placeholder",
      "title": "Content Writing Volunteer (AI and ML)",
      "duration": "May 2024 – June 2024",
      "description": 
        "Volunteered with Earth5R to research and create content on sustainability in AI and machine learning. Delivered insightful articles focused on the intersection of AI advancements and environmental impact."
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Journey So Far</h1>
      <Timeline timelineData={timelineData} />
    </div>
  );
};

export default Experiences;
