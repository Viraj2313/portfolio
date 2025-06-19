import React from "react";
import Project from "../components/Project";
const Projects = () => {
  const projects = [
    {
      name: "Movie Pedia",
      description: `Movie Pedia is a React and ASP.NET Core app for exploring movies, 
    viewing IMDb ratings, and getting AI-powered recommendations. It features a wishlist, 
    like/dislike system, direct chat for sharing movies, a comments section for discussions, 
    Google Social Login, and custom login.`,
      gitHubLink: "https://github.com/Viraj2313/Movie-Pedia",
      livePreview: "https://moviepedia.virajdeveloper.online",
      techStack: [
        "React",
        "ASP.NET Core",
        "MySQL",
        "Python",
        "OMDB API",
        "Vite",
        "Docker",
        "Mantine",
      ],
    },
    {
      name: "Password Manager",
      description:
        "A secure and modern password manager built to help users safely store and manage their credentials. This project focuses on clean design and robust security principles.",
      gitHubLink: "https://github.com/Viraj2313/password-manager",
      livePreview: "https://passwordmanager.virajdeveloper.online",
      techStack: [
        "React",
        "ASP.NET Core",
        "MySQL",
        "Docker",
        "Nginx",
        "Ubuntu",
        "GitHub Actions",
      ],
    },
    {
      name: "Crypto Dashboard",
      description: `Crypto Dashboard is a website featuring live details of cryptocurrencies 
      with respective graphs and analytics. It is built using React, Tailwind CSS, and Chart.js.`,
      gitHubLink: "https://github.com/Viraj2313/cyrpto-dashboard",
      livePreview: "",
      techStack: ["React", "Tailwind CSS", "Chart.js", "REST API"],
    },
    {
      name: "Code editor",
      description: `Code Editor, A code editor to compile your code right from your browser.`,
      gitHubLink: "https://github.com/Viraj2313/code-editor",
      livePreview: "",
    },
  ];

  return (
    <>
      <div className="mt-40 mb-10" id="projects">
        <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
        <div className="flex flex-col items-center justify-center space-y-6">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              description={project.description}
              gitHubLink={project.gitHubLink}
              livePreview={project.livePreview || ""}
              techStack={project.techStack || ""}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
