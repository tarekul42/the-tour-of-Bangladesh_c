import React from 'react';
import Navigation2 from '../../Shared/Navigation2/Navigation2';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navigation2/>
            <Outlet/>
        </div>
    );
};

export default LoginLayout;