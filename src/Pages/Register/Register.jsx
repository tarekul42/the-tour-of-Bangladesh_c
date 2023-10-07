import React from 'react';
import { Link } from 'react-router-dom';
import OtherRegisterSystem from '../../Shared/otherRegisterSystem/OtherRegisterSystem';

const Register = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-row lg:w-2/5 md:w-3/5 w-11/12">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form className="card-body border border-gray-100 rounded">
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold">Create an account</h1>
                        </div>
                        <div className="form-control">
                            <input type="test" placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Confirm password" name='confirm' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-amber-400 text-black text-base">Create an account</button>
                        </div>
                        <p className='text-xs text-center'>
                            Already have an account? <Link to='/login' className='text-amber-300 underline'>Login</Link>
                        </p>
                    </form>
                    <OtherRegisterSystem/>
                </div>
            </div>
        </div>
    );
};

export default Register;