import React from "react";
import Project from "../components/Project";

const Projects = () => {
  const projects = [
    {
      name: "PortableEncryptor",
      description: `PortableEncryptor is a secure folder encryption tool that combines CLI encryption with browser-based decryption. Encrypt folders locally, upload to cloud drives safely, and decrypt on any device without installing software. Perfect for secure cloud storage with cross-device access.`,
      gitHubLink: "https://github.com/Viraj2313/portable-encryptor",
      livePreview: "",
      techStack: [
        "Python",
        "Cryptography",
        "JavaScript",
        "Web Crypto API",
        "AES-256-GCM",
        "PBKDF2",
      ],
    },
    {
      name: "Movie Pedia",
      description: `Movie Pedia is a React and ASP.NET Core app for exploring movies, viewing IMDb ratings, and getting AI-powered recommendations. It features a wishlist, like/dislike system, direct chat for sharing movies, a comments section for discussions, Google Social Login, and custom login.`,
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
      description: `Crypto Dashboard is a website featuring live details of cryptocurrencies with respective graphs and analytics. It is built using React, Tailwind CSS, and Chart.js.`,
      gitHubLink: "https://github.com/Viraj2313/cyrpto-dashboard",
      livePreview: "",
      techStack: ["React", "Tailwind CSS", "Chart.js", "REST API"],
    },
    {
      name: "Code Editor",
      description: `Code Editor, A code editor to compile your code right from your browser.`,
      gitHubLink: "https://github.com/Viraj2313/code-editor",
      livePreview: "",
      techStack: ["JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <div
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-white"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
              Projects
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            A showcase of my recent work, featuring full-stack applications and
            innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center">
              <Project
                name={project.name}
                description={project.description}
                gitHubLink={project.gitHubLink}
                livePreview={project.livePreview || ""}
                techStack={project.techStack || []}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/Viraj2313"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-gray-700 group-hover:text-gray-900 font-medium">
              View All Projects on GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
