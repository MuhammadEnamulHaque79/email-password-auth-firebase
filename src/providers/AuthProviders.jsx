import React, { createContext, useState} from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
const[user,setUser] = useState(null);

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)

}

const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

const userInfo={
    user,
    createUser,
    signIn
}

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
