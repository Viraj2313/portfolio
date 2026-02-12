import React from "react";
import AnimatedBackground from "./AnimatedBackground";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg-primary relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
