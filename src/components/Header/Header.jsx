import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const { user,logOut} = useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
            .then(()=>{
                console.log('Sign-out successful.')
            })
            .catch(()=>{
                console.log('An error happened.')
            })
    }

    return (

        <div className="navbar bg-neutral text-neutral-content">
            <div className='right-nav-link'>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Hey Man</Link>
                {/* {
                    user ?
                        <span>{user.email}
                            <button onClick={handleLogOut} className="btn btn-sm">Sign Out</button>
                        </span>
                        :
                        <span>
                            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                        </span>
                } */}
            </div>

            <div className='left-nav-link'>
                <Link className="btn btn-ghost normal-case text-xl font-thin from-neutral-focus font-mono" to='/'>Home</Link>
                {/* <Link className="btn btn-ghost normal-case text-xl font-thin from-neutral-focus font-mono" to='/login'>Login</Link> */}
                {
                    user ? 
                    <span><button onClick={handleLogOut} className="btn btn-sm">Sign Out</button></span> 
                    : 
                    <span><Link className="btn btn-ghost normal-case text-xl font-thin from-neutral-focus font-mono" to='/login'>Login</Link></span>
                }
                <Link className="btn btn-ghost normal-case text-xl font-thin from-neutral-focus font-mono" to='/register'>Register</Link>
            </div>
        </div>

    );
};

export default Header;