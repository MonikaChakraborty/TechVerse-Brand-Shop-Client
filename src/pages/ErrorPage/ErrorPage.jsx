import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-8xl font-bold">404</h1>
      <br />
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      
      
      <Link to="/">
        <button className="mt-10 normal-case btn bg-slate-500 text-white text-lg hover:bg-slate-700">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};


export default ErrorPage;
