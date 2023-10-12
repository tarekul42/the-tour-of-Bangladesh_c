import React, { useContext } from 'react';
import fb from '../../assets/images/icons/fb.png'
import google from '../../assets/images/icons/google.png'
import { AuthContext } from '../../Providers/AuthProviders';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

const OtherRegisterSystem = () => {

    const {signInGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/places/1';

    const signInWithGooglePopup = () =>{
        signInGoogle( provider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true })
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="flex flex-col w-full border-opacity-50 px-8">
            <div className="divider">OR</div>
            <div className="btn h-10 border-gray-100 border rounded-3xl place-items-center mb-2 flex cursor-pointer">
                <div className='grow-0'>
                    <img className='w-9 h-9 p-1' src={fb} alt="" />
                </div>
                <div className='grow'>
                    <p className='text-center'>Continue with Facebook</p>
                </div>
            </div>
            <div onClick={signInWithGooglePopup} className="btn h-10 border-gray-100 border rounded-3xl place-items-center mb-2 flex cursor-pointer">
                <div className='flex-none'>
                    <img className='w-9 h-9 p-1' src={google} alt="" />
                </div>
                <div className='flex-1'>
                    <p className='text-center'>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default OtherRegisterSystem;