import React from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import CursorFollower from "./components/CursorFollower";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Resume from "./pages/Resume";
import BlogPostLayout from "./pages/BlogPostLayout";

const MainContent = () => (
  <>
    <Home />
    <Projects />
    <Blogs />
    <Resume />
  </>
);

function App() {
  return (
    <Layout>
      <CursorFollower />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/blog/:id" element={<BlogPostLayout />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
