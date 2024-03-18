import React from 'react';
import { useTranslation } from "react-i18next";
import { BiAdjust } from "react-icons/bi";

import { Theme, useTheme } from "../../../app/providers/ThemeProvider";
import { Button } from "../../../shared/ui/Button/Button";

const ThemeSwitcher = ({ isCollapsed }: { isCollapsed: boolean }) => {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();

    const title = theme === Theme.DARK
        ? t("Темная")
        : t("Светлая");
    
    return (
        <Button
            onClick={toggleTheme}
        >
            {
                isCollapsed
                    ? <BiAdjust />
                    : title
            }
        </Button>
    );
};

export default ThemeSwitcher;