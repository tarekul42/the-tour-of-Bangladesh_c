import React from 'react';
import { Link } from 'react-router-dom';
import OtherRegisterSystem from '../../Shared/otherRegisterSystem/OtherRegisterSystem';

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-row lg:w-2/5 md:w-3/5 w-11/12">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form className="card-body border border-gray-100 rounded">
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
                    <OtherRegisterSystem/>
                </div>
            </div>
        </div>
    );
};

export default Login;