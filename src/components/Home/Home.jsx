import React, { useContext } from 'react';
import './Home.css';
import { AuthContext } from '../../providers/AuthProviders';



const Home = ({children}) => {
 const user = useContext(AuthContext);
 console.log(user);
    
    return (
        <div>
            <h4 className='text-center font-bold font-mono mt-5'>This is home : {user && <span>{user.displayName}</span>} </h4>
        </div>
    );
};

export default Home;