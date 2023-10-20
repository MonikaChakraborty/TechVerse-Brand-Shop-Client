import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import LoginMedia from "../Login/LoginMedia";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  
  const {createUser} = useAuth();
  
    const handleSubmit = (e) => {
        e.preventDefault();

        // getting the field values from the form
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // try{
        //     if (password.length < 6){
        //         throw new Error("Password is less than 6 characters");
        //     }
        // } catch(error){
        //     toast.error(error.message)
        // }

        if(password.length < 6){
          toast.error('Password is less than 6 characters')
          return;
        }

        // create new user
        createUser(email, password)
        .then(res => console.log(res.user))
        .catch(error => console.log(error))

    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:mt-4 mb-4 lg:mr-4">


            <form onSubmit={handleSubmit} className="card-body">

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text" name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text" name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

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
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center mb-6">Already have an account? <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
            <LoginMedia></LoginMedia>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
