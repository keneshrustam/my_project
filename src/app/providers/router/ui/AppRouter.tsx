import React, { useCallback } from 'react';
import { Route, Routes } from "react-router-dom";

import RequireAuth from "./RequireAuth";
import { AppRouteProps, routerConfig } from "../config/routerConfig";

const AppRouter = () => {
    
    const render = useCallback((route: AppRouteProps) => {
        
        const { path, element, authOnly } = route;
        

        return (
            <Route 
                path={path}
                element={authOnly 
                    ? <RequireAuth>{element}</RequireAuth>
                    : element
                }
            />
        );
    }, []);
    
    return (
        <Routes>
            {Object.values(routerConfig).map(render)}
        </Routes>
    );
};

export default AppRouter;