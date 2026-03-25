import { Link, useNavigate } from "react-router";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const ErrorPage = () => {

  const navigate = useNavigate();

  return (

    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="text-center max-w-xl">

        {/* big 404 */}
        <h1 className="text-7xl font-bold text-primary mb-4">
          404
        </h1>


        {/* title */}
        <h2 className="text-2xl font-semibold mb-3">

          Page not found

        </h2>


        {/* description */}
        <p className="text-gray-500 mb-8">

          Sorry, the page you are looking for does not exist or has been moved.

        </p>


        {/* buttons */}
        <div className="flex gap-4 justify-center flex-wrap">

          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline flex items-center gap-2"
          >
            <FaArrowLeft />
            Go Back
          </button>


          <Link
            to="/"
            className="btn btn-primary flex items-center gap-2"
          >
            <FaHome />
            Go Home
          </Link>

        </div>

      </div>

    </section>

  );

};

export default ErrorPage;