import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLightbulb,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

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
      className="min-h-screen flex items-center justify-center px-4 pt-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-3 leading-tight">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Viraj Mahajan
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-light mb-6">
              Software Engineer
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting scalable software with modern
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
                <FaCode className="w-6 h-6 mr-3" />
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
                <FaServer className="w-6 h-6 mr-3" />
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
                <FaDatabase className="w-6 h-6 mr-3" />
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
                <FaLightbulb className="w-6 h-6 mr-3" />
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
              <FaGithub className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
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
              <FaLinkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
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
