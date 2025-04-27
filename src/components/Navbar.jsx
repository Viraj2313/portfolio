import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed top-6 left-6 right-6 p-4 mx-auto bg-white shadow-xl z-50 rounded-3xl">
      <div className="flex justify-center items-center max-w-6xl mx-auto space-x-5 md:space-x-16">
        <Link
          to="home"
          smooth={true}
          offset={-120}
          duration={500}
          className="text-lg hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          <h1>Home</h1>
        </Link>
        <Link
          to="projects"
          smooth={true}
          offset={-120}
          duration={500}
          className="text-lg hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          <h1>Projects</h1>
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={-120}
          duration={500}
          className="text-lg hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          <h1>Contact</h1>
        </Link>
        <Link
          to="resume"
          smooth={true}
          offset={-120}
          duration={500}
          className="text-lg hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          <h1>Resume</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
