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
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
          {name}
        </h2>
        <div className="flex gap-4">
          <a
            href={gitHubLink}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} color="#333" />
            <span className="text-sm font-medium">Code</span>
          </a>
          {livePreview && (
            <a
              href={livePreview}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
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
              <span className="text-sm font-medium">Live</span>
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-6 font-light">
        {description}
      </p>

      {techStack.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-800 mb-3 tracking-wide uppercase">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm border border-gray-200 hover:border-gray-300 transition-colors font-light"
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
