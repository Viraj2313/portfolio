import React from "react";
import BlogListItem from "../components/BlogListItem";
import { blogPosts } from "../data/posts";
import useScrollReveal from "../hooks/useScrollReveal";

const Blogs = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div className="py-8 px-4 bg-bg-primary" id="blogs">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="mb-4 border-b border-[rgba(0,0,0,0.06)] pb-8">
          <h1
            className="text-4xl font-bold text-text-heading mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            blogs
          </h1>
          <p className="text-lg text-text-muted">
            thoughts on software engineering, architecture, machine learning
          </p>
        </div>

        <div className="flex flex-col">
          {blogPosts.map((post, index) => (
            <BlogListItem key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
