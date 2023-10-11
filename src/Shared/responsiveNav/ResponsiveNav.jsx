import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const ResponsiveNav = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
                    <li><Link to='/'>News</Link></li>
                    <li><Link to='/destination'>Destination</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li>
                    {
                    user?.displayName ?
                        <h1 className='font-bold'>{user.displayName}</h1> :

                        <Link className='bg-amber-400' to='/login'>
                            <button className='text-white'>Login</button>
                        </Link>
                }
                    </li>
                </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
                <img className='w-32 h-14' src={logo} alt="" />
            </a>
        </div>
    );
};

export default ResponsiveNav;