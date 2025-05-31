import PortfolioImg from "../assests/ProjectImages/Portfolio.jpg";
import TransformerImg from "../assests/ProjectImages/Transformer.jpg";
import PlantDiseaseImg from "../assests/ProjectImages/PlantDisease.jpg";
import DiabetesPredictionImg from "../assests/ProjectImages/DiabetesPrediction.jpeg";
import CelebMatchImg from "../assests/ProjectImages/CelebMatch.jpeg";
import RiversideCloneImg from "../assests/ProjectImages/RiversideCloneImg.jpg";
import Mini2DMetaverseImg from "../assests/ProjectImages/MIni2DMetaverse.jpg";

const projects = [
   {
    name: "Riverside Clone – Real-Time Video Calling Platform",
    image: RiversideCloneImg,
    technologies: ["Java", "Spring Boot", "WebRTC", "WebSocket", "Google Cloud", "MySQL", "Docker"],
    description: "A browser-based video calling platform enabling real-time peer-to-peer video/audio communication using WebRTC. Features include local media recording with MediaRecorder API and Google Cloud Storage upload, STOMP over WebSockets for real-time signaling, Spring Security for authentication, and Dockerized backend deployed on Google Cloud Run.",
    github: "https://github.com/PawanMugalihalli/riverside-clone?tab=readme-ov-file",
    deployed: "https://riverside-clone-818192772083.us-central1.run.app/",
    category: ["Full-Stack", "Backend", "Cloud"],
  },
  {
    name: "Mini2DMetaverse",
    image: Mini2DMetaverseImg,
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
  },
 

];


export default projects;
