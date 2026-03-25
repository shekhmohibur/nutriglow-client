import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = ({ text = "Continue with Google" }) => {

  const { googleLogin } = useAuth();
  const navigate = useNavigate();


  const handleGoogle = () => {

    googleLogin()

      .then(res => {

        const user = res.user;

        const userData = {

          displayName: user.displayName,

          email: user.email,

          photoURL: user.photoURL,

          role: "user",

          createdAt: new Date()

        };


        // later send to DB
        console.log("save google user:", userData);


        navigate("/dashboard");

      })

      .catch(err => alert(err.message));

  };


  return (

    <button
      onClick={handleGoogle}
      className="w-full cursor-pointer flex items-center justify-center gap-3 border rounded-lg py-2 hover:bg-base-200 transition outline-none"
    >

      <FcGoogle size={20} />

      <span className="text-sm font-medium">

        {text}

      </span>

    </button>

  );

};

export default GoogleLogin;