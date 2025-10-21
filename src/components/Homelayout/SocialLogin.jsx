import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import app from "../../firebase/fire-base";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authcontext";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SocialLogin = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="text-center w-full mt-4 sm:mt-6">
      <h2 className="font-semibold mb-4 text-base sm:text-lg md:text-xl">
        Login with
      </h2>

      {/* Responsive button layout */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-secondary flex-1 py-3 flex items-center justify-center gap-2 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          <FcGoogle className="text-xl md:text-2xl" />
          <span className="text-sm sm:text-base md:text-lg">Google</span>
        </button>

        {/* Github */}
        <button
          onClick={handleGithubLogin}
          className="btn btn-outline btn-primary flex-1 py-3 flex items-center justify-center gap-2 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          <FaGithub className="text-xl md:text-2xl" />
          <span className="text-sm sm:text-base md:text-lg">Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
