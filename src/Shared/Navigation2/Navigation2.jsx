import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navigation2 = () => {
    return (
        <div>
            <div className="navbar bg-base-100 justify-around">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>News</Link></li>
                        <li><Link>Destination</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                        <li><button className='bg-amber-400 text-white'>Login</button></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className='w-32 h-14' src={logo} alt="" />
                </a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='px-2'><Link>News</Link></li>
                    <li className='px-2'><Link>Destination</Link></li>
                    <li className='px-2'><Link>Blog</Link></li>
                    <li className='px-2'><Link>Contact</Link></li>
                    <li className='px-2'><button className='bg-amber-400 text-white'>Login</button></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navigation2;