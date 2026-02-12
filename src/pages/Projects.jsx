import React from "react";
import Project from "../components/Project";
import useScrollReveal from "../hooks/useScrollReveal";

const Projects = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

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
        "AES-256",
        "PBKDF2",
      ],
    },
    {
      name: "Transformer based Language Model",
      description: `Implemented a GPT-style transformer in PyTorch from scratch (self-attention, autoregressive decoding), scaled it to 100M parameters trained on the 1B-token Cosmopedia dataset, and fine-tuned it with SmolTalk and synthetic tech-focused instruction data.`,
      gitHubLink: "https://github.com/Viraj2313/gpt-model",
      livePreview: "",
      techStack: [
        "Python",
        "PyTorch",
        "NumPy",
        "BPE Tokenizer",
        "Transformers",
        "FastAPI",
        "React",
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
  ];

  return (
    <div className="min-h-screen py-8 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-text-heading mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            featured{" "}
            <span className="text-accent">projects</span>
          </h1>
          <div className={`w-32 h-[2px] bg-accent mx-auto rounded-full mb-6 ${headerVisible ? 'animate-draw-line' : 'opacity-0'}`}></div>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            some things i've built recently
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-bg-card hover:bg-white rounded-xl border border-[rgba(0,0,0,0.06)] hover:border-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-md group"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <svg
              className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-text-body group-hover:text-text-heading text-sm">
              more on github
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
