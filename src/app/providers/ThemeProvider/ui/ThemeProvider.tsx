import React, { useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    
    const value = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;