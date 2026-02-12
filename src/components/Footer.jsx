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
        <FaGithub className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/virajmahajan/",
      icon: (
        <FaLinkedin className="w-5 h-5 text-text-muted group-hover:text-accent-teal transition-colors" />
      ),
    },
    {
      name: "Email",
      url: "mailto:virajmm231@gmail.com",
      icon: (
        <FaEnvelope className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
      ),
    },
  ];

  return (
    <footer className="border-t border-[rgba(0,0,0,0.06)]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div>
            <h3
              className="text-2xl font-light text-text-heading mb-3 tracking-wide"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              got an idea?{" "}
              <span className="text-accent font-medium">let's talk</span>
            </h3>
            <p className="text-text-muted max-w-md mx-auto leading-relaxed">
              always down to chat about new projects, interesting tech,
              or anything in between
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-bg-card rounded-xl border border-[rgba(0,0,0,0.06)] hover:border-accent/30 transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[rgba(0,0,0,0.06)]">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p
                className="text-text-muted text-sm"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                © {currentYear} viraj
              </p>
              <div className="flex space-x-6 text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                <Link
                  to="home"
                  className="text-text-muted hover:text-accent transition-colors cursor-pointer"
                >
                  home
                </Link>

                <Link
                  to="projects"
                  className="text-text-muted hover:text-accent transition-colors cursor-pointer"
                >
                  projects
                </Link>

                <Link
                  to="resume"
                  className="text-text-muted hover:text-accent transition-colors cursor-pointer"
                >
                  resume
                </Link>

                <a
                  href="mailto:virajmm231@gmail.com"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  contact
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
