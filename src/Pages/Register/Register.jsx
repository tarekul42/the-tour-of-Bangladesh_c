import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OtherRegisterSystem from '../../Shared/otherRegisterSystem/OtherRegisterSystem';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/places/1';

    const handleRegisterWithEmailPass = event => {
        event.preventDefault();
        const form = event.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(firstname, lastname, email, password, confirm);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
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
                    <form onSubmit={handleRegisterWithEmailPass} className="card-body border border-gray-100 rounded">
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold">Create an account</h1>
                        </div>
                        <div className="form-control">
                            <input type="test" placeholder="First Name" name='firstname' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Last Name" name='lastname' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
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