import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { getAuthData } from "../../../../entities/User";

type TRequireAuthProps = {
    children: any
}

const RequireAuth = ({ children }: TRequireAuthProps) => {
    const auth = useSelector(getAuthData);
    const location = useLocation();
    
    if(!auth) {
        return <Navigate
            to="/"
            state={{
                from:location
            }}
            replace
        />;
    }
    
         
    return children;
};

export default RequireAuth;