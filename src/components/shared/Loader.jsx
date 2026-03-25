const Loader = ({ fullScreen = true }) => {
  return (
    <div
      className={`
        flex items-center justify-center
        ${fullScreen ? "min-h-screen" : "py-20"}
      `}
    >
      <div className="relative">
        {/* outer ring */}
        <div className="w-20 h-20 border-4 border-primary/20 rounded-full"></div>

        {/* spinning ring */}
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>

        {/* center logo dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
