import React from 'react';
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            {t("Неизвестная страница")}
        </div>
    );
};

export default NotFoundPage;