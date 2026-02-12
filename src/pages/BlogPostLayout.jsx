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
        <h1 className="text-2xl text-text-muted">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-8"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}
        >
          <FaArrowLeft /> back home
        </Link>

        <div className="bg-bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-[rgba(0,0,0,0.06)]">
          <header className="mb-10 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-text-heading mb-6 leading-tight"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-text-muted">
              <FaCalendar className="w-4 h-4 text-accent" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>{post.date}</span>
            </div>
          </header>

          <article
            className="prose prose-lg max-w-none prose-headings:text-text-heading prose-p:text-text-body prose-p:leading-relaxed prose-li:text-text-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostLayout;
