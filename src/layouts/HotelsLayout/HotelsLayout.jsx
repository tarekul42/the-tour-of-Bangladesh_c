import React from 'react';
import Navigation2 from '../../Shared/Navigation2/Navigation2';
import { Outlet } from 'react-router-dom';

const HotelsLayout = () => {
    return (
        <>
            <Navigation2/>
            <Outlet/>
        </>
    );
};

export default HotelsLayout;