import React, { FC } from 'react';
import { useTranslation } from "react-i18next";

import { AppLink } from "../../../../shared/ui/AppLink/AppLink";
import { TSidebarItem } from "../../model/types/sidebar";

interface ISidebarItemProps {
    item: TSidebarItem;
    isCollapsed: boolean;
    className: string;
}

const SidebarItem: FC<ISidebarItemProps> = (props) => {
    const { t } = useTranslation();

    const { item, isCollapsed, className } = props;

    return (
        <AppLink className={className} to={item.href}>
            <item.Icon />
            {!isCollapsed && t(item.title)}
        </AppLink>
    );
};

export default SidebarItem;