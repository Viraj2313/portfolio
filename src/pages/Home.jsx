import React from "react";

const Home = () => {
  const skills = {
    languages: ["C++", "C#", "JavaScript", "Python", "SQL"],
    frameworks: [
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "React",
      "Tailwind CSS",
    ],
    databases: ["MySQL", "MSSQL"],
    other: ["CI/CD (GitHub Actions)", "Azure", "Docker", "Nginx", "Linux"],
  };

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-3 leading-tight">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Viraj
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-light mb-6">
              Full Stack Developer
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting scalable web applications with modern
            technologies. I bring ideas to life through clean code and
            innovative solutions.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Technical <span className="text-blue-600">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600 flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-600 flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
                Databases
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.databases.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 rounded-full border border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Other Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.other.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 text-green-700 rounded-full border border-green-200 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Let's Connect
          </h3>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/Viraj2313"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg
                className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/virajmahajan/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg
                className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
