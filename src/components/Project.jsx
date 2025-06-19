const Project = ({
  name,
  description,
  gitHubLink,
  livePreview,
  techStack = [],
}) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-left">{name}</h2>
        <div className="space-x-4">
          <a
            href={gitHubLink}
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {livePreview && (
            <a
              href={livePreview}
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </a>
          )}
        </div>
      </div>

      <p className="mt-2 text-gray-600">{description}</p>

      {techStack.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium text-gray-800 mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
