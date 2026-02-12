import React from "react";
import { Link } from "react-router-dom";

const BlogListItem = ({ title, date, id }) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="group block py-6 border-b border-[rgba(0,0,0,0.06)] hover:bg-accent-light/20 transition-colors px-4 -mx-4 rounded-lg"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 md:gap-8">
        <h3 className="text-xl font-medium text-text-heading group-hover:text-accent transition-colors decoration-accent/0 underline underline-offset-4 group-hover:decoration-accent/30">
          {title}
        </h3>

        <span
          className="text-text-muted shrink-0 text-sm md:text-base whitespace-nowrap"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {date}
        </span>
      </div>
    </Link>
  );
};

export default BlogListItem;
