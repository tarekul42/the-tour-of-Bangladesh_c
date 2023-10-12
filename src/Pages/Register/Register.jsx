import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OtherRegisterSystem from '../../Shared/otherRegisterSystem/OtherRegisterSystem';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/places/1';

    
    const handlePassword = event =>{
        const password = event.target.value;
        // password validation
        setError('')
        if (password.length < 8) {
            setError('Your Password should at least 8 character.');
            return;
        }
        else if (!/(?=.*[a-zA-Z])/.test(password)) {
            setError('Your Password should contain at least 1 alphabetic character.');
            return;
        }
        else if (!/(?=.*[@^*!#\$%&\?].*)/.test(password)) {
            setError('Your password should contain at least 1 special characters.');
            return;
        }
        else if (!/(?=.*[1-9])/.test(password)) {
            setError('Your password should contain at least 1 digit.');
            return;
        }
        else {
            setError('')
        }
    }


    const handleRegisterWithEmailPass = event => {
        event.preventDefault();
        const form = event.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(firstname, lastname, email, password, confirm);

        // confirm password validation
        if(password !== confirm){
            setError("Your Password doesn't matched");
            return;
        }
        else{
            setError('')
        }

        // create a new user
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                event.target.reset();
                setSuccess('Your registration in successful');
                setError('')

            })
            .catch(error => {
                setError(error.message);
                setSuccess('')
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
                            <input onChange={handlePassword} type="password" name='password' placeholder="Password" className="input input-bordered" required />
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
                        {
                            error ?
                            <p className='text-danger'>{error}</p> :
                            <p className='text-info'>{success}</p>
                        }
                    </form>
                    <OtherRegisterSystem />
                </div>
            </div>
        </div>
    );
};

export default Register;