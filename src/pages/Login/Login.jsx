import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import LoginMedia from "./LoginMedia";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";



const Login = () => {

  const {signIn} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location:" , location);

  const handleSubmit = (e) => {
    e.preventDefault();

    // getting the field values from the form
    const email = e.target.email.value;
    const password = e.target.password.value;


    // create new user
    signIn(email, password)
    .then(res => {
      toast.success('Login Successful');
      // console.log(res.user);


      // after login
      navigate(location?.state ? location.state : '/')
    })


    .catch(error => {

      toast.error('email or password does not match');
      // console.log(error);
    })

}

  
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero p-12 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  lg:mr-4">
            <form onSubmit={handleSubmit} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email" name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password" name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-6">New here? <Link className="text-blue-600 font-bold" to='/register'>Create an account</Link></p>

            <LoginMedia></LoginMedia>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
