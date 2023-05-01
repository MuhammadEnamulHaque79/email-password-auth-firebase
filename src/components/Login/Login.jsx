import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
// import app from '../../firebase/firebase.config';
// import {getAuth } from "firebase/auth";

// const auth = getAuth(app);
const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogIn =()=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        event.target.reset();

        signIn(email, password)
            .then((result)=>{
                const loggedInUser = result.user;
                console.log(loggedInUser)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return (
       
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold font-mono">Please Login</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/register" className="label-text-alt link link-hover link-success font-semibold from-neutral-focus font-mono">New to Hey Man? Please Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
      
    );
};

export default Login;