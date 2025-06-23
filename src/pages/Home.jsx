import React from "react";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="mt-40 m-10 p-8 rounded-3xl shadow-lg bg-white text-gray-900 w-full max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-semibold text-center mb-6 text-gray-800">
          Hello, I'm Viraj, Full Stack Developer
        </h1>
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-700">Skills -</h1>
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl text-gray-600">
              <span className="font-semibold">Languages:</span> C++, C#,
              JavaScript, Python, SQL
            </h3>
            <h3 className="text-xl md:text-2xl text-gray-600">
              <span className="font-semibold">Frameworks:</span> .NET, ASP.NET
              Core, Entity Framework Core, React, Tailwind CSS
            </h3>
            <h3 className="text-xl md:text-2xl text-gray-600">
              <span className="font-semibold">Databases:</span> MySQL, MSSQL
            </h3>
            <h3 className="text-xl md:text-2xl text-gray-600">
              <span className="font-semibold">Other:</span> CI/CD (GitHub
              Actions), Azure, Docker, Nginx, Linux
            </h3>
          </div>

          <div className="text-2xl font-semibold text-gray-700">Socials -</div>
          <div className="flex justify-center gap-16 p-4 rounded-4xl m-6 mx-4 md:mx-28 shadow-lg">
            <a
              className="hover:scale-105 text-2xl transform duration-300 ease-in-out hover:text-blue-700 text-blue-500"
              href="https://github.com/Viraj2313"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="hover:scale-105 text-2xl transform duration-300 ease-in-out hover:text-blue-700 text-blue-500"
              href="https://www.linkedin.com/in/virajmahajan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
