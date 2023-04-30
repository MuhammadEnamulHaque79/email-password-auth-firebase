import React, { createContext, useEffect, useState} from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


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

const logOut=()=>{
   return signOut(auth);
}

useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    return()=>{
        unsubscribe();  
    } 
},[]);


const userInfo={
    user,
    createUser,
    signIn,
    logOut,
    setUser
}

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
