import React from "react";
import BlogListItem from "../components/BlogListItem";
import { blogPosts } from "../data/posts";

const Blogs = () => {
  return (
    <div className="py-20 px-4 bg-white" id="blogs">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blogs</h1>
          <p className="text-lg text-gray-600 font-light">
            Thoughts on software engineering, architecture, machine learning.
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
