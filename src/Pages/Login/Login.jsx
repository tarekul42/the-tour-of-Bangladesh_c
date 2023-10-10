import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OtherRegisterSystem from '../../Shared/otherRegisterSystem/OtherRegisterSystem';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/places/1';

    const handleSignInEmailPass = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-row lg:w-2/5 md:w-3/5 w-11/12">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSignInEmailPass} className="card-body border border-gray-100 rounded">
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold">Login</h1>
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                            <div className='flex justify-between'>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="label-text ps-2">Remember me</span>
                                    </label>
                                </div>

                                <label className="label">
                                    <a href="#" className="underline text-xs link link-hover text-amber-300">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-amber-400 text-black text-base">Login</button>
                        </div>
                        <p className='text-xs text-center'>
                            Don't have an Account? <Link to='/register' className='text-amber-300 underline'>Create an account</Link>
                        </p>
                    </form>
                    <OtherRegisterSystem />
                </div>
            </div>
        </div>
    );
};

export default Login;