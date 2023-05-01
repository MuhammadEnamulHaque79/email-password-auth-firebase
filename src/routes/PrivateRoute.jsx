import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    //loader setup;
    if (loading) {
        return <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <div className="text-gray-600 text-xs">Loading</div>
                <div className="text-right text-gray-600 text-xs">
                    100%
                </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div
                    style={{ width: "100%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
            </div>
        </div>
    }

    //navigate setup;
    if (user) {
        return children;
    }
    return <Navigate to='/login' replace={true}>Login</Navigate>
        ;
};

export default PrivateRoute;