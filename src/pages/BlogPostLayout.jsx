import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendar, FaArrowLeft } from "react-icons/fa";
import { blogPosts } from "../data/posts";

const BlogPostLayout = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="bg-[#FDFBF7] rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-500 font-medium">
              <FaCalendar className="w-4 h-4 text-blue-500" />
              <span>{post.date}</span>
            </div>
          </header>

          <article
            className="prose prose-lg prose-blue max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostLayout;
