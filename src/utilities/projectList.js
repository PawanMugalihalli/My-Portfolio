import PortfolioImg from "../assests/ProjectImages/Portfolio.jpg";
import CollegeClubsImg from "../assests/ProjectImages/ClubManagement.png";
import TransformerImg from "../assests/ProjectImages/Transformer.jpg";
import PlantDiseaseImg from "../assests/ProjectImages/PlantDisease.jpg";
import DiabetesPredictionImg from "../assests/ProjectImages/DiabetesPrediction.jpeg";
import CelebMatchImg from "../assests/ProjectImages/CelebMatch.jpeg";

const projects = [
  {
    name: "Mini2DMetaverse",
    image: CollegeClubsImg,
    technologies: ["JAVA", "SpringBoot", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
    description: "A real-time Spring Boot-based web application that combines a chat system with an interactive 2D Tic Tac Toe game. Users can create or join public and private rooms, each featuring integrated live chat and game functionality. The project focuses on seamless real-time communication and multiplayer interaction, delivering an engaging mini metaverse experience.",
    github: "https://github.com/PawanMugalihalli/Mini2DMetaverse/",
    deployed: "https://mini2dmetaverse.onrender.com/",
    category: ["Backend", "Full-Stack"],
  },
  {
    name: "Portfolio Website",
    image: PortfolioImg,
    technologies: ["HTML", "ReactJS", "CSS", "JavaScript", "Bootstrap"],
    description: "A personal portfolio website to showcase my projects and skills.",
    github: "https://github.com/pawanmugalihalli/portfolio",
    deployed: "https://my-portfolio-pi-blond-59.vercel.app/",
    category: ["Frontend"],
  },
  {
    name: "Transformer Network Implementation",
    image: TransformerImg,
    technologies: ["Python", "PyTorch"],
    description: "Implemented a Transformer architecture from scratch using PyTorch, inspired by the 'Attention Is All You Need' paper.",
    github: "https://github.com/PawanMugalihalli/TransformerFromScratch",
    deployed: "",
    category: ["ML/AI"],
  },
  {
    name: "Plant Disease Prediction",
    image: PlantDiseaseImg,
    technologies: ["Python", "TensorFlow", "Keras", "ResNet-18", "Data Augmentation"],
    description: "Developed a deep learning model for plant disease classification using a labeled dataset of tomato crop leaf images.",
    github: "https://github.com/PawanMugalihalli/PlantDiseasePrediction1",
    deployed: "",
    category: ["ML/AI"],
  },
  {
    name: "College Clubs Management System",
    image: CollegeClubsImg,
    technologies: ["Python", "Django", "SQLite", "Bootstrap", "JavaScript", "jQuery"],
    description: "A full-stack web application for managing 4 clubs and 12+ sub-clubs with features like user authentication, announcements, and messaging.",
    github: "https://github.com/pawanmugalihalli/college-clubs-management",
    deployed: "https://college-clubs-management.herokuapp.com/",
    category: ["Backend", "Full-Stack"],
  },
  {
    name: "Celebrity Look-Alike Finder",
    image: CelebMatchImg, 
    technologies: ["Python", "Flask", "OpenCV", "Face Recognition", "HTML", "CSS", "JavaScript"],
    description: "Upload your photo to find your celebrity look-alike\n Uses facial recognition technology for accurate matching\n Displays matching results with similarity scores\n Fast and responsive web interface built with Flask.",
    github: "https://github.com/PawanMugalihalli/CelebMatch.in", 
    deployed: "",
    category: ["ML/AI"],
  },
  {
    name: "Diabetes Prediction System",
    image: DiabetesPredictionImg, 
    technologies: ["Python", "Flask", "Pandas", "Scikit-learn", "HTML", "CSS"],
    description: "Predicts the likelihood of diabetes using user input data\nTrained using a Logistic Regression model on a real diabetes dataset\nWeb interface built with Flask for easy interaction",
    github: "https://github.com/PawanMugalihalli/Diabetes-Prediction-ML",
    deployed: "https://your-deployment-link.com",
    category: ["ML/AI"],
  }

];


export default projects;
