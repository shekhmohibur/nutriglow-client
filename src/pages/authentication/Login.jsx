import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "../../components/shared/GoogleLogin";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        navigate(from, { replace: true });
      })

      .catch((err) => alert(err.message));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
        {/* heading */}
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Login to your account
        </p>

        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* email */}
          <div>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-purple-300"
            />

            {errors.email && (
              <p className="text-xs text-red-500 mt-1">Email is required</p>
            )}
          </div>

          {/* password */}
          <div>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-purple-300"
            />

            {errors.password && (
              <p className="text-xs text-red-500 mt-1">Password is required</p>
            )}
          </div>

          {/* login button */}
          <button className="w-full py-2 rounded-lg bg-purple-500 hover:bg-purple-600/90 text-white cursor-pointer transition font-medium outline-none">
            Login
          </button>
        </form>

        {/* register redirect */}
        <p className="text-sm text-center mt-6 text-gray-500">
          Don't have an account?
          <Link to="/register" className="ml-1 text-purple-500 hover:underline">
            Register
          </Link>
        </p>
        <div className="my-2">
          <GoogleLogin />
        </div>
      </div>
    </section>
  );
};

export default Login;
