import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import { getAuthData, getAuthDataInited, userActions } from "../entities/User";
import { classNames } from "../shared/lib/classNames/classNames";
import { useAppDispatch } from "../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Sidebar } from "../widgets/Sidebar";
import "../shared/config/i18n/i18n";


const App = () => {
    const dispatch = useAppDispatch();
    const { theme } = useTheme();
    const inited = useSelector(getAuthDataInited);
    const user = useSelector(getAuthData);

    useEffect(() => {
        if (!inited) {
            dispatch(userActions.initAuthData());
        }
    }, [dispatch, inited, user]);
    
    return (
        <div className={classNames("app", {}, [theme])}>
            <div className="content_page">
                <Sidebar />
                <div className="content">
                    <AppRouter />
                </div>
            </div>
        </div>
    );
};

export default App;