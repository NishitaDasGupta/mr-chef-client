import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Loader from '../components/Shared/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    else {
        return (
            <Navigate to="/login" replace={true}
                state={{ from: location }}
            ></Navigate>
        );
    }
};

export default PrivateRoute;