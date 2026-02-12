import React, { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLightbulb,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import HeroScene from "../components/HeroScene";
import useScrollReveal from "../hooks/useScrollReveal";

const TypewriterText = ({ text, delay = 0, onComplete, className = "" }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (visibleCount < text.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timer);
    } else {
      setComplete(true);
      onComplete?.();
    }
  }, [started, visibleCount, text.length, onComplete]);

  return (
    <span className={`relative inline ${className}`}>
      <style>{`
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      {text.split("").map((char, index) => {
        if (index < visibleCount) {
          return (
            <span key={index} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          );
        }
        return null;
      })}
      {started && !complete && (
        <span
          className="inline-block w-[2px] bg-accent"
          style={{
            height: '0.85em',
            animation: 'cursorBlink 1s step-end infinite',
            verticalAlign: 'baseline',
            position: 'relative',
            top: '0.1em'
          }}
        />
      )}
    </span>
  );
};

const MagneticButton = ({ children, href, className = "" }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    const btn = buttonRef.current;
    if (!btn) return;
    btn.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </a>
  );
};

const Home = () => {
  const [line1Done, setLine1Done] = useState(false);
  const [line2Done, setLine2Done] = useState(false);
  const [line3Done, setLine3Done] = useState(false);

  const [skillsRef, skillsVisible] = useScrollReveal();
  const [connectRef, connectVisible] = useScrollReveal();

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

  const allSkills = [
    { category: "Languages", icon: FaCode, items: skills.languages, color: "accent" },
    { category: "Frameworks", icon: FaServer, items: skills.frameworks, color: "accent-teal" },
    { category: "Databases", icon: FaDatabase, items: skills.databases, color: "accent" },
    { category: "Tools", icon: FaLightbulb, items: skills.other, color: "accent-teal" },
  ];

  let globalIndex = 0;

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-28"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-10 relative">
          <HeroScene />
          <div className="mb-8 relative z-10">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-heading mb-3 leading-tight"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <TypewriterText
                text="Hello, I'm"
                delay={0.3}
                onComplete={() => setLine1Done(true)}
              />
              <br />
              <span className="relative inline-block text-accent">
                <span className="invisible">Viraj Mahajan</span>
                <span className="absolute top-0 left-0 w-full">
                  {line1Done && (
                    <TypewriterText
                      text="Viraj Mahajan"
                      delay={0}
                      onComplete={() => setLine2Done(true)}
                    />
                  )}
                </span>
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-text-muted font-light mb-6">
              <span className="relative inline-block whitespace-nowrap">
                <span className="invisible">Software Engineer</span>
                <span className="absolute top-0 left-0 w-full">
                  {line2Done && (
                    <TypewriterText
                      text="Software Engineer"
                      delay={0.2}
                      onComplete={() => setLine3Done(true)}
                    />
                  )}
                </span>
              </span>
            </h2>

            <div
              className={`w-32 h-[2px] bg-accent mx-auto rounded-full mb-8 transition-all duration-700 ${line3Done ? 'opacity-100 animate-draw-line' : 'opacity-0'}`}
            ></div>
          </div>

          <p
            className={`text-lg md:text-xl text-text-body max-w-2xl mx-auto leading-relaxed transition-opacity duration-700 relative z-10 ${line3Done ? 'opacity-100' : 'opacity-0'}`}
          >
            Passionate about crafting scalable software with modern technologies. I bring ideas to life through clean code and innovative solutions.
          </p>
        </div>

        <div
          ref={skillsRef}
          className={`bg-bg-card rounded-2xl p-8 md:p-12 border border-[rgba(0,0,0,0.06)] shadow-sm mb-12 transition-all duration-700 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-text-heading mb-12"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            what i <span className="text-accent">work with</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allSkills.map((group) => (
              <div key={group.category} className="space-y-4">
                <h3 className={`text-xl font-semibold text-${group.color} flex items-center`}>
                  <group.icon className="w-5 h-5 mr-3" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const idx = globalIndex++;
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 bg-bg-primary text-text-heading rounded-lg text-sm border border-[rgba(0,0,0,0.06)] hover:border-accent hover:shadow-sm transition-all duration-300 cursor-default ${skillsVisible ? `animate-fade-in-up stagger-${Math.min(idx + 1, 12)}` : 'opacity-0'}`}
                        style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={connectRef}
          className={`text-center transition-all duration-700 ${connectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h3
            className="text-2xl font-semibold text-text-heading mb-8"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            find me here
          </h3>
          <div className="flex justify-center gap-6">
            <MagneticButton
              href="https://github.com/Viraj2313"
              className="group p-4 bg-bg-card rounded-xl border border-[rgba(0,0,0,0.06)] hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <FaGithub className="w-6 h-6 text-text-muted group-hover:text-accent transition-colors" />
            </MagneticButton>

            <MagneticButton
              href="https://www.linkedin.com/in/virajmahajan/"
              className="group p-4 bg-bg-card rounded-xl border border-[rgba(0,0,0,0.06)] hover:border-accent-teal hover:shadow-lg transition-all duration-300"
            >
              <FaLinkedin className="w-6 h-6 text-text-muted group-hover:text-accent-teal transition-colors" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
