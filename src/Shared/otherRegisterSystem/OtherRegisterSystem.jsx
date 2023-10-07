import React from 'react';
import fb from '../../assets/images/icons/fb.png'
import google from '../../assets/images/icons/google.png'

const OtherRegisterSystem = () => {
    return (
        <div className="flex flex-col w-full border-opacity-50 px-8">
            <div className="divider">OR</div>
            <div className="h-10 border-gray-100 border rounded-3xl place-items-center mb-2 flex">
                <div className='grow-0'>
                    <img className='w-9 h-9 p-1' src={fb} alt="" />
                </div>
                <div className='grow'>
                    <p className='text-center'>Continue with Facebook</p>
                </div>
            </div>
            <div className="h-10 border-gray-100 border rounded-3xl place-items-center mb-2 flex">
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