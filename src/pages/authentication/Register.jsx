import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import useAuth from "../../hooks/useAuth";
import GoogleLogin from "../../components/shared/GoogleLogin";


const Register = () => {

  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();


  const password = watch("password");


  const onSubmit = (data) => {

    const userData = {

      displayName: data.name,

      email: data.email,

      password: data.password,

      role: "user",

      createdAt: new Date()

    };


    registerUser(userData.email, userData.password, userData.displayName)

      .then(() => {

        // send user to database later

        console.log("Save to DB:", userData);

        navigate("/dashboard");

      })

      .catch(err => alert(err.message));

  };


  return (

    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">

        <h2 className="text-2xl font-bold text-center mb-2">

          Create Account

        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">

          Start your wellness journey

        </p>



        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >


          {/* full name */}
          <div>

            <input
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-purple-300"
            />

            {errors.name && (

              <p className="text-xs text-red-500 mt-1">

                Name is required

              </p>

            )}

          </div>



          {/* email */}
          <div>

            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-purple-300"
            />

            {errors.email && (

              <p className="text-xs text-red-500 mt-1">

                Email is required

              </p>

            )}

          </div>



          {/* password */}
          <div className="relative">

            <input
              {...register("password", {
                required: true,
                minLength: 6
              })}
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-purple-300"
            />


            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 text-gray-400"
            >

              {showPass ? <FaEyeSlash /> : <FaEye />}

            </button>


            {errors.password && (

              <p className="text-xs text-red-500 mt-1">

                Password must be 6 characters

              </p>

            )}

          </div>



          {/* confirm password */}
          <div className="relative">

            <input
              {...register("confirmPassword", {
                required: true,
                validate: value =>
                  value === password || "Passwords do not match"
              })}
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-purple-300"
            />


            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-3 text-gray-400"
            >

              {showConfirm ? <FaEyeSlash /> : <FaEye />}

            </button>


            {errors.confirmPassword && (

              <p className="text-xs text-red-500 mt-1">

                {errors.confirmPassword.message}

              </p>

            )}

          </div>



          {/* submit */}
          <button className="w-full py-2 rounded-lg bg-purple-300 hover:bg-purple-400 transition font-medium outline-none">

            Register

          </button>

        </form>



        {/* login redirect */}
        <p className="text-sm text-center mt-6 text-gray-500">

          Already have an account?

          <Link
            to="/login"
            className="ml-1 text-purple-500 hover:underline"
          >

            Login

          </Link>

        </p>
        {/* google login */}
        <div className="my-2">
          <GoogleLogin text="Sign Up with google" />
        </div>
      </div>

    </section>

  );

};

export default Register;