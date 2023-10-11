import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-spinner loading-lg text-error"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>
};

export default PrivetRoute;