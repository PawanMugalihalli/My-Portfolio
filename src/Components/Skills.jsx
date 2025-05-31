// import React, { useContext } from "react";
// import { useSpring, useTrail, animated } from "@react-spring/web";
// import "../Css/Skills.css";
// import { ThemeContext } from "./ThemeContext.js";

// const Skills = () => {
//   const { isDarkMode } = useContext(ThemeContext);

//   const rows = [
//     {
//       title: "Languages",
//       items: ["C++", "Python", "Java", "JavaScript"],
//     },
//     {
//       title: "Libraries",
//       items: ["TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
//     },
//     {
//       title: "Applications",
//       items: ["Classification", "Regression", "Image Processing"],
//     },
//     {
//       title: "DSA & Algorithms",
//       items: ["Sorting", "Graph Algorithms", "DP", "Backtracking", "Heaps", "Tries"],
//     },
//     {
//       title: "Coding Profiles",
//       items: [
//         { name: "LeetCode", url: "https://leetcode.com/u/thisispawankumar/" },
//         { name: "Codechef", url: "https://www.codechef.com/users/itspawankumar/" },
//         { name: "Codeforces", url: "https://codeforces.com/profile/thisispawankumar" },
//         // { name: "Coding Ninjas", url: "https://www.naukri.com/code360/profile/SurabhiSinha" },
//         // { name: "GeeksForGeeks", url: "https://www.geeksforgeeks.org/user/surabhith43jv/" },
//       ],
//     },
//   ];

//   const trail = useTrail(rows.length, {
//     from: { opacity: 0, transform: "translateY(20px)" },
//     to: { opacity: 1, transform: "translateY(0px)" },
//     delay: 200,
//     config: { tension: 200, friction: 15 },
//   });

//   const spring = useSpring({
//     from: { opacity: 0, transform: "scale(0.9)" },
//     to: { opacity: 1, transform: "scale(1)" },
//     config: { tension: 200, friction: 20 },
//   });

//   return (
//     <div className={`skills-container ${isDarkMode ? "dark" : "light"}`}>
//       <animated.h2 style={spring}>My Skills</animated.h2>
//       <div className={`skills-content ${isDarkMode ? "dark" : "light"}`}>
//         {trail.map((animation, index) => (
//           <animated.div
//             key={index}
//             style={animation}
//             className={`skill-row ${isDarkMode ? "dark" : "light"}`}
//           >
//             <div className={`skill-items ${isDarkMode ? "dark" : "light"}`}>
//               <h3>{rows[index].title}</h3>
//               <div
//                 className={`skill-item-place ${isDarkMode ? "dark" : "light"}`}
//               >
//                 {rows[index].title === "Coding Profiles"
//                   ? rows[index].items.map((profile, idx) => (
//                       <a
//                         key={idx}
//                         href={profile.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`skill-item ${
//                           isDarkMode ? "dark" : "light"
//                         }`}
//                       >
//                         {profile.name}
//                       </a>
//                     ))
//                   : rows[index].items.map((item, idx) => (
//                       <div
//                         key={idx}
//                         className={`skill-item ${
//                           isDarkMode ? "dark" : "light"
//                         }`}
//                       >
//                         {item}
//                       </div>
//                     ))}
//               </div>
//             </div>
//           </animated.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React, { useContext } from "react";
import { Flip } from "react-awesome-reveal";  // Import Flip animation
import "../Css/Skills.css";
import { ThemeContext } from "./ThemeContext.js";

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

const rows = [
  {
    title: "Languages",
    items: [
      "C++",
      "C",
      "Python",
      "Java",
      "JavaScript",
      "SQL",
      "R-Programming",
      "Assembly (x86)",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "Spring Boot",
      "TensorFlow",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "OpenCV",
      "Hibernate",
    ],
  },
  {
    title: "Operating Systems",
    items: ["Unix/Linux", "Windows"],
  },
  {
    title: "Distributed Systems & Parallel Computing",
    items: ["OpenMP", "MPI", "Multi-threading"],
  },
  {
    title: "Applications",
    items: [
      "RESTful APIs",
      "Database Integration",
      "Microservices",
      "Classification",
      "Regression",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    title: "DSA & Algorithms",
    items: [
      "Sorting",
      "Graph Algorithms",
      "DP",
      "Backtracking",
      "Heaps",
      "Tries",
      "Segment Tree",
      "Stack",
      "Queue",
      "Linked List",
    ],
  },
  {
    title: "Coding Profiles",
    items: [
      { name: "LeetCode", url: "https://leetcode.com/u/thisispawankumar/" },
      { name: "Codechef", url: "https://www.codechef.com/users/itspawankumar/" },
      { name: "Codeforces", url: "https://codeforces.com/profile/thisispawankumar" },
    ],
  },
];


  return (
    <div className={`skills-container ${isDarkMode ? "dark" : "light"}`}>
      {/* <Flip direction="horizontal" triggerOnce> */}
        <h2>My Skills</h2>
      {/* </Flip> */}
      <Flip direction="vertical"  duration={2000} cascade triggerOnce >
      <div className={`skills-content ${isDarkMode ? "dark" : "light"}`}>
        {rows.map((row, index) => (
       
            <div className={`skill-row ${isDarkMode ? "dark" : "light"}`}>
              <div className={`skill-items ${isDarkMode ? "dark" : "light"}`}>
                <h3>{row.title}</h3>
                <div className={`skill-item-place ${isDarkMode ? "dark" : "light"}`}>
                  {row.title === "Coding Profiles"
                    ? row.items.map((profile, idx) => (
                        <a
                          key={idx}
                          href={profile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`skill-item ${isDarkMode ? "dark" : "light"}`}
                        >
                          {profile.name}
                        </a>
                      ))
                    : row.items.map((item, idx) => (
                        <div
                          key={idx}
                          className={`skill-item ${isDarkMode ? "dark" : "light"}`}
                        >
                          {item}
                        </div>
                      ))}
                </div>
              </div>
            </div>
         
        ))}
      </div>
      </Flip>
    </div>
  );
};

export default Skills;
