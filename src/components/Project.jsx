import React from "react";
import { FaGithub } from "react-icons/fa";

const Project = ({
  name,
  description,
  gitHubLink,
  livePreview,
  techStack = [],
}) => {
  return (
    <div className="bg-bg-card rounded-2xl p-8 border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex justify-between items-start mb-6">
        <h2
          className="text-2xl font-semibold text-text-heading group-hover:text-accent transition-colors"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {name}
        </h2>
        <div className="flex gap-4">
          <a
            href={gitHubLink}
            className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
            <span className="text-sm font-medium" style={{ fontFamily: "var(--font-mono)" }}>Code</span>
          </a>
          {livePreview && (
            <a
              href={livePreview}
              className="flex items-center gap-2 text-text-muted hover:text-accent-teal transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span className="text-sm font-medium" style={{ fontFamily: "var(--font-mono)" }}>Live</span>
            </a>
          )}
        </div>
      </div>

      <p className="text-text-body leading-relaxed mb-6">
        {description}
      </p>

      {techStack.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-bg-primary text-text-body rounded-md text-xs border border-[rgba(0,0,0,0.06)] hover:border-accent/40 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
