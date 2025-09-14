import React from "react";

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
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
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
