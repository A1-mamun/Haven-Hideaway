import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [error, setError] = useState("");
  const [succes, setSucces] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const { name, photo, email, password } = data;

    // reset error
    setError("");
    setSucces("");

    // password validation
    if (password.length < 6) {
      setError("password should be at least 6 characters");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      setError("password should have at least one Uppercase letter");
      return;
    } else if (!/^(?=.*[a-z])/.test(password)) {
      setError("password should have at least one Lowercase letter");
      return;
    }
    createUser(email, password)
      .then((result) => setSucces("User created Successfully"))
      .catch((error) => {
        const fullError = error.message;
        const shortError = fullError.slice(22, fullError.length - 2);
        setError(shortError);
      });
  };

  return (
    <div className="hero h-full py-10 rounded-xl bg-base-200">
      <Helmet>
        <title>HavenHideaway | Register</title>
      </Helmet>
      <div className="hero-content ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-3xl text-center pt-5">Register your account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your Photo URL"
                className="input input-bordered"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-700">This field is required</span>
              )}
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
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-700">This field is required</span>
              )}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[52px] right-4"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {error && <p className="text-red-700 text-center">{error}</p>}
          {succes && <p className="text-green-600 text-center">{succes}</p>}
          <h2 className="text-center pb-5">
            Already Have An Account ?
            <Link to="/login" className="text-orange-700 font-medium">
              LogIn
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
