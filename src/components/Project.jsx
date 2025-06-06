const Project = ({ name, description, gitHubLink, livePreview }) => {
  return (
    <>
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
              Github
            </a>
            {livePreview ? (
              <a
                href={livePreview}
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </>
  );
};
export default Project;
