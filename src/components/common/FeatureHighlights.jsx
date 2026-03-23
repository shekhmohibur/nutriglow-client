import { FaMoon, FaLeaf, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const FeatureBar = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-4">

        <div
          className="
            flex items-center gap-3
            px-5 py-4
            bg-white
            border border-gray-200
            rounded-2xl
            shadow-sm
            min-w-65
          "
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-500 text-sm">
            <FaMoon />
          </div>

          <div className="leading-tight">
            <h4 className="text-sm font-semibold text-gray-800">
              Better Sleep
            </h4>
            <p className="text-xs text-gray-500 mt-0.5">
              Wake up feeling refreshed
            </p>
          </div>
        </div>

        <div
          className="
            flex-1
            bg-gray-50
            border border-gray-200
            rounded-2xl
            overflow-hidden
            grid
            grid-cols-1
            sm:grid-cols-3
          "
        >
          {/* Item */}
          <div className="flex items-center gap-3 px-5 py-4 border-b sm:border-b-0 sm:border-r border-gray-200 hover:bg-white transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-500 text-sm">
              <FaLeaf />
            </div>
            <div className="leading-tight">
              <h4 className="text-sm font-semibold text-gray-800">
                Natural Formula
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Made with clean ingredients
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-4 border-b sm:border-b-0 sm:border-r border-gray-200 hover:bg-white transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 text-sm">
              <FaShieldAlt />
            </div>
            <div className="leading-tight">
              <h4 className="text-sm font-semibold text-gray-800">
                Doctor Approved
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Recommended by experts
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex items-center gap-3 px-5 py-4 hover:bg-white transition">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-sm">
              <FaCheckCircle />
            </div>
            <div className="leading-tight">
              <h4 className="text-sm font-semibold text-gray-800">
                30-day risk-free trial
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureBar;