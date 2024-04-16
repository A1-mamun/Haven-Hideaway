import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl text-center">404</h2>
      <h3 className="text-3xl my-5">Page Not Found</h3>
      <h4 className="text-2xl mb-5">Back to Home</h4>
      <Link to="/">
        <button className="btn btn-error">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
