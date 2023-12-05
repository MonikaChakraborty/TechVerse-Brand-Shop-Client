
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const LoginMedia = () => {

    const { user, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location on login media', location);


    const handleLoginMedia = (media) => {
        media()
        .then(res => {
            console.log(res)

            // navigate after login
            navigate(location?.state ? location.state : '/');

        })
        .catch(error => console.log(error))

    }

    return (
       <div>
         <div className="divider">
            <h1>Continue with</h1>
            </div>
            <div className="flex justify-around mb-5">

                {/* <button onClick={handleLoginMedia (googleLogin)} className="btn normal-case"><FcGoogle></FcGoogle>Google</button> */}

                <button onClick={() => handleLoginMedia (googleLogin)} className="btn normal-case"><FcGoogle></FcGoogle>Google</button>

                <button onClick={() => handleLoginMedia(githubLogin)}  className="btn normal-case"><BsGithub></BsGithub>GitHub</button>
            </div>
            
        
       </div>
    );
};

export default LoginMedia;