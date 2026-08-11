import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiVercel,
  SiRender,
  SiJsonwebtokens,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { MdOutlineArchitecture, MdOutlineDevices } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";

export const skillsData = {
  Frontend: [
    {
      name: "HTML5",
      icon: FaHtml5,
      level: 95,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      level: 90,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      level: 90,
      color: "#F7DF1E",
    },
    {
      name: "React.js",
      icon: FaReact,
      level: 92,
      color: "#61DAFB",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 93,
      color: "#06B6D4",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      level: 85,
      color: "#7952B3",
    },
  ],

  Backend: [
    {
      name: "Node.js",
      icon: FaNodeJs,
      level: 88,
      color: "#339933",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      level: 87,
      color: "#ffffff",
    },
  ],

  Database: [
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: 88,
      color: "#47A248",
    },
    {
      name: "Mongoose",
      icon: SiMongoose,
      level: 85,
      color: "#880000",
    },
  ],

  Tools: [
    {
      name: "Git",
      icon: FaGitAlt,
      level: 90,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      level: 90,
      color: "#ffffff",
    },
    {
      name: "Postman",
      icon: SiPostman,
      level: 88,
      color: "#FF6C37",
    },
    {
      name: "VS Code",
      icon: VscVscode,
      level: 95,
      color: "#007ACC",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      level: 85,
      color: "#ffffff",
    },
    {
      name: "Render",
      icon: SiRender,
      level: 85,
      color: "#46E3B7",
    },
  ],

  Concepts: [
    {
      name: "REST API",
      icon: TbApi,
      level: 90,
      color: "#3B82F6",
    },
    {
      name: "JWT Authentication",
      icon: SiJsonwebtokens,
      level: 85,
      color: "#8B5CF6",
    },
    {
      name: "MVC Architecture",
      icon: MdOutlineArchitecture,
      level: 85,
      color: "#06B6D4",
    },
    {
      name: "CRUD Operations",
      icon: BsArrowRepeat,
      level: 92,
      color: "#3B82F6",
    },
    {
      name: "Responsive Design",
      icon: MdOutlineDevices,
      level: 93,
      color: "#8B5CF6",
    },
  ],
};