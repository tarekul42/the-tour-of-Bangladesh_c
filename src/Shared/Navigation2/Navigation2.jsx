import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveNav from '../responsiveNav/ResponsiveNav';
import CommonNav from '../CommonNav/CommonNav';

const Navigation2 = () => {
    return (
        <div>
            <div className="navbar bg-base-100 justify-around">
            <ResponsiveNav/>
            <div className="hidden lg:flex">
                <CommonNav/>
            </div>
        </div>
        </div>
    );
};

export default Navigation2;