import React from "react";

const Projects = () => {
  return (
    <>
      <div className="mt-40 mb-10" id="projects">
        <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <div className="flex justify-between items-center">
              {/* 1 */}
              <h2 className="text-xl font-semibold text-left">Movie Pedia</h2>
              <div className="space-x-4">
                <a
                  href="https://github.com/Viraj2313/Movie-Pedia"
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href="https://moviepedia.virajdeveloper.online/"
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
              </div>
            </div>
            <p className="mt-2 text-gray-600">
              Movie Pedia is a React and ASP.NET Core app for exploring movies,
              viewing IMDb ratings, and getting AI-powered recommendations. It
              features a wishlist, like/dislike system, direct chat for sharing
              movies, a comments section for discussions, Google Social Login,
              and custom login.
            </p>
          </div>
          {/* 2 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-left">
                Crypto Dashboard
              </h2>
              <div className="space-x-4">
                <a
                  href="https://github.com/Viraj2313/cyrpto-dashboard"
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
            <p className="mt-2 text-gray-600">
              Crypto Dashboard is a website featuring live details of
              cryptocurrencies with respective graphs and analytics. It is built
              using React, Tailwind CSS, and Chart.js.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
