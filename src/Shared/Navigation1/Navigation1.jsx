import React from 'react';
import ResponsiveNav from '../responsiveNav/ResponsiveNav';
import CommonNav from '../CommonNav/CommonNav';

const Navigation1 = () => {
    return (
        <div className="navbar justify-around">
            <ResponsiveNav/>
            <div className="hidden lg:flex">
                <div className="form-control px-2 text-white">
                    {/* <input type="text" placeholder={` Search your Destination...`} className="input input-bordered w-96 h-11 p-3 bg-none" /> */}
                    <input type="text" id='search' placeholder={` Search your Destination...`} className="input input-ghost w-96 h-11 p-3 max-w-xs border-2 border-slate-100" />
                </div>
                <CommonNav/>
            </div>
        </div>
    );
};

export default Navigation1;