import React from 'react';
import { useTranslation } from "react-i18next";

import { Button } from "../../../shared/ui/Button/Button";

const LangSwitcher = ({ isCollapsed }: { isCollapsed: boolean }) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    
    return (
        <Button
            onClick={toggle}
        >
            {isCollapsed ? t("Короткий язык") : t("Язык")}
        </Button>
    );
};

export default LangSwitcher;