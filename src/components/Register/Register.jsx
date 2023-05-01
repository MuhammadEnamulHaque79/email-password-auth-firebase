import React, {useContext, useState } from 'react';
import './Register.css';
import app from '../../firebase/firebase.config';
// import {getAuth } from "firebase/auth";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {
    const {user,createUser} = useContext(AuthContext);
    // console.log(createUser);

    // const auth = getAuth(app)
    const [email, setEmil] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);

        createUser(email, password)
        
            .then((result) => {
                const LoggedUser = result.user;
                setEmil(email);
                console.log(LoggedUser);
                event.target.reset();//to clear input field;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold font-mono">Please Register</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                                
                                <Link to="/login" className="label-text-alt link link-hover link-success font-semibold from-neutral-focus font-mono">Already have an account? Please Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Register;