import React from 'react';
import Navigation1 from '../../Shared/Navigation1/Navigation1';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navigation1/>
            <Outlet/>
        </div>
    );
};

export default Home;