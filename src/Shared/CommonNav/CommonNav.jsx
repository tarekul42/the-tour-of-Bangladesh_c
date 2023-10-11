import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const CommonNav = () => {
    const { user } = useContext(AuthContext);
    return (
        <ul className="menu menu-horizontal px-1 text-white">
            <li className='px-2'><Link to='/'>News</Link></li>
            <li className='px-2'><Link to='/destination'>Destination</Link></li>
            <li className='px-2'><Link to='/blog'>Blog</Link></li>
            <li className='px-2'><Link to='/contact'>Contact</Link></li>
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
    );
};

export default CommonNav;