import React from "react";
import { Link } from "react-router-dom";

const BlogListItem = ({ title, date, id }) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="group block py-6 border-b border-gray-200 hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-lg"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 md:gap-8">
        <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors decoration-blue-600/0 underline underline-offset-4 group-hover:decoration-blue-600/30">
          {title}
        </h3>

        <span className="text-gray-500 font-light shrink-0 text-sm md:text-base whitespace-nowrap">
          {date}
        </span>
      </div>
    </Link>
  );
};

export default BlogListItem;
