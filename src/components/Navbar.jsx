import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "projects", label: "Projects" },
    { to: "resume", label: "Resume" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <nav
          className={`transition-all duration-300 border ${
            isScrolled ? "rounded-2xl py-3" : "rounded-3xl py-4"
          } 
          bg-white/30 backdrop-blur-xl shadow-lg border-white/20`}
        >
          <div className="flex justify-center items-center space-x-8 md:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                offset={-120}
                duration={500}
                spy={true}
                onSetActive={() => setActiveSection(item.to)}
                className={`relative px-4 py-2 text-md font-medium tracking-wide cursor-pointer 
                  transition-all duration-300 transform hover:scale-110 ${
                    activeSection === item.to
                      ? "text-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
              >
                {item.label}
                {activeSection === item.to && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
