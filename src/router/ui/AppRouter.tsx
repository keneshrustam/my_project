import React, { useCallback } from 'react';
import { Route, Routes } from "react-router-dom";

import { AppRouteProps, routerConfig } from "../config/routerConfig";

const AppRouter = () => {
    const render = useCallback((route : AppRouteProps) => {
        return (
            <Route
                path={route.path}
                element={route.element}
            />
        );
    },[]);

    return (
        <Routes>
            {Object.values(routerConfig).map(render)}
        </Routes>
    );
};

export default AppRouter;