import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

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
    { to: "blogs", label: "Blogs" },
    { to: "resume", label: "Resume" },
  ];

  const handleNavClick = (to) => {
    setActiveSection(to);
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-4xl mx-auto px-2 md:px-6">
        <nav
          className={`transition-all duration-300 border ${
            isScrolled || !isHomePage
              ? "rounded-2xl py-2 md:py-3"
              : "rounded-3xl py-3 md:py-4"
          } 
          bg-white/80 backdrop-blur-xl shadow-lg border-white/20 supports-[backdrop-filter]:bg-white/30`}
        >
          <div className="flex justify-center items-center space-x-2 sm:space-x-6 md:space-x-12">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.to;
              const commonClasses = `relative px-2 md:px-4 py-2 text-sm sm:text-sm md:text-base font-medium tracking-wide cursor-pointer 
                  transition-all duration-300 transform hover:scale-110 ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`;

              if (isHomePage) {
                return (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    spy={true}
                    onSetActive={() => setActiveSection(item.to)}
                    className={commonClasses}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] md:h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full" />
                    )}
                  </ScrollLink>
                );
              } else {
                return (
                  <div
                    key={item.to}
                    onClick={() => handleNavClick(item.to)}
                    className={commonClasses}
                  >
                    {item.label}
                  </div>
                );
              }
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
