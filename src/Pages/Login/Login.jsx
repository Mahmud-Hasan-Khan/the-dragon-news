import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { UserContext } from "../../Providers/AuthProviders";


const Login = () => {
    const { loginUser } = useContext(UserContext);
    const location = useLocation();
    // console.log('location in the login page', location);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        //login User
        loginUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedUser = userCredential.user;
                // console.log(loggedUser);
                navigate(location?.state ? location.state : "/");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                // console.log(errorMessage);
            });

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero">
                <div className="px-24 py-10 max-w-[752px] shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-semibold text-center">Login your account</h1>
                    <div className="divider pt-4"></div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3] " required />
                        </div>
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 max-w-[558px]">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="font-semibold text-center">Don’t Have An Account ? <Link to='/register' className="text-red-500">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;