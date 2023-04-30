import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       
            <div className="navbar bg-neutral text-neutral-content">
                <div className='right-nav-link'>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Hey Man</Link>
                </div>
                <div className='left-nav-link'>
                    <Link className="btn btn-ghost normal-case text-xl font-thin from-neutral-focus font-mono" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl font-thin from-neutral-focus font-mono" to='/login'>Login</Link>
                    <Link className="btn btn-ghost normal-case text-xl font-thin from-neutral-focus font-mono" to='/register'>Register</Link>
                </div>
            </div>
       
    );
};

export default Header;