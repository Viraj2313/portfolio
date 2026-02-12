import useScrollReveal from "../hooks/useScrollReveal";

const Resume = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      id="resume"
      ref={ref}
      className={`mb-4 px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <h2
        className="text-3xl font-bold text-center mb-8 text-text-heading"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        resume
      </h2>
      <div className="flex justify-center">
        <img
          src="/resume.jpg"
          alt="Viraj Mahajan Resume"
          className="w-full max-w-4xl rounded-lg shadow-sm border border-[rgba(0,0,0,0.06)]"
        />
      </div>
    </div>
  );
};

export default Resume;
