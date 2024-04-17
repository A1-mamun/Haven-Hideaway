import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [error, setError] = useState("");
  const [succes, setSucces] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signInGoogle, singInGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("log in location", location);
  const handleLogIn = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    // reset eror
    setError("");
    setSucces("");
    signIn(email, password)
      .then((result) => {
        setSucces("Loged in successfully");
        // navigate after sign in
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const fullError = error.message;
        const shortError = fullError.slice(22, fullError.length - 2);
        setError(shortError);
      });
  };

  const handleLogInWithGoogle = (e) => {
    e.preventDefault();
    // console.log("google clicked");
    signInGoogle()
      .then((result) => {
        setSucces("Loged in successfully");
        // navigate after sign in
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };
  const handleLogInWithGithub = (e) => {
    e.preventDefault();
    // console.log("github clicked");
    singInGithub()
      .then((result) => {
        setSucces("Loged in successfully");
        // navigate after sign in
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero h-full bg-base-200 py-10 rounded-xl">
      <Helmet>
        <title>HavenHideaway | Login</title>
      </Helmet>
      <div className="hero-content">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-3xl text-center">Login your account</h2>
          <form onSubmit={handleLogIn} className="card-body pb-0 pt-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[52px] right-4"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {error && <p className="text-red-700">{error}</p>}
          {succes && <p className="text-green-600">{succes}</p>}

          <div className="card-body pt-2">
            <div className="flex justify-between items-center">
              <div className="border border-gray-500 h-[1px] grow"></div>
              <h4 className="mx-2">or</h4>
              <div className="border border-gray-500 h-[1px] grow"></div>
            </div>
            <div className="">
              <button
                onClick={handleLogInWithGoogle}
                className="btn btn-outline w-full"
              >
                <FcGoogle />
                Login with Google
              </button>
            </div>
            <div className="mt-3">
              <button
                onClick={handleLogInWithGithub}
                className="btn btn-outline w-full"
              >
                <FaGithub />
                Login with Github
              </button>
            </div>
          </div>
          <h2 className="text-center">
            Do not Have An Account ?
            <Link to="/register" className="text-orange-700 font-medium">
              Register
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
