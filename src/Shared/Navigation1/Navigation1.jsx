import React from 'react';
import ResponsiveNav from '../responsiveNav/ResponsiveNav';
import CommonNav from '../CommonNav/CommonNav';

const Navigation1 = () => {
    return (
        <div className="navbar bg-base-100 justify-around">
            <ResponsiveNav/>
            <div className="hidden lg:flex">
                <div className="form-control px-2">
                    <input type="text" placeholder={` Search your Destination...`} className="input input-bordered w-96 h-11 p-3" />
                </div>
                <CommonNav/>
            </div>
        </div>
    );
};

export default Navigation1;