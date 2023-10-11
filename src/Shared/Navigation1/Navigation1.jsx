import React from 'react';
import ResponsiveNav from '../responsiveNav/ResponsiveNav';
import CommonNav from '../CommonNav/CommonNav';
import { FaSearch } from 'react-icons/fa';

const Navigation1 = () => {
    return (
        <div className="navbar justify-around">
            <ResponsiveNav/>
            <div className="hidden lg:flex">
                <div className="form-control px-2 text-white relative">
                    <input type="text" id='search' placeholder={`Search your Destination...`} className="input input-ghost w-96 h-11 px-8 py-3 max-w-xs border-2 border-slate-100" />
                    <FaSearch className='absolute top-4 bottom-4 left-5' />
                </div>
                <CommonNav/>
            </div>
        </div>
    );
};

export default Navigation1;