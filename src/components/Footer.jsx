import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Viraj2313",
      icon: (
        <FaGithub className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/virajmahajan/",
      icon: (
        <FaLinkedin className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
      ),
    },
    {
      name: "Email",
      url: "mailto:virajmm231@gmail.com",
      icon: (
        <FaEnvelope className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
      ),
    },
  ];

  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide">
              Let's Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 font-medium">
                {" "}
                Amazing
              </span>
            </h3>
            <p className="text-gray-600 font-light max-w-md mx-auto leading-relaxed">
              Always open to discussing new opportunities and interesting
              projects
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 font-light text-sm">
                © {currentYear} Viraj. Crafted with passion and precision.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="home">
                  <a className="text-gray-500 hover:text-gray-700 transition-colors font-light">
                    Home
                  </a>
                </Link>
                <Link to="projects">
                  <a className="text-gray-500 hover:text-gray-700 transition-colors font-light">
                    Projects
                  </a>
                </Link>
                <Link to="resume">
                  <a className="text-gray-500 hover:text-gray-700 transition-colors font-light">
                    Resume
                  </a>
                </Link>
                <a
                  href="mailto:virajmm231@gmail.com"
                  className="text-gray-500 hover:text-gray-700 transition-colors font-light"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
