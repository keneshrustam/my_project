import React, { useCallback, useMemo, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { IoLogoNpm } from "react-icons/io";
import { useSelector } from "react-redux";

import cls from './Sidebar.module.scss';
import { getAuthData, userActions } from "../../../../entities/User";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Dropdown } from "../../../../shared/ui/Popups/components/Dropdown/Dropdown";
import { LangSwitcher } from "../../../LangSwitcher";
import { ThemeSwitcher } from "../../../ThemeSwitcher";
import { getDropdownItems } from "../../model/selectors/getDropdownItems";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import SidebarItem from "../SidebarItem/SidebarItem";

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const auth = useSelector(getAuthData);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggle = () => {
        setIsCollapsed(prev => !prev);
    };
    
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    
    const items = useMemo(() => getSidebarItems(), []);
    
    const dropdownItems = useMemo(() => {
        return getDropdownItems({ 
            isAuth: !!auth,
            onLogout });
    },[auth, onLogout]);

    return (
        <aside className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed })}>
            <div className={cls.logo}>
                <IoLogoNpm size={40}/>
            </div>
            <div className={cls.profile}>
                <Dropdown
                    items={dropdownItems}
                    trigger={<CgProfile color="white"/>}/>
            </div>
            <nav className={cls.list}>
                {items.map((item) => (
                    <SidebarItem
                        className={cls.item}
                        isCollapsed={isCollapsed}
                        key={item.href}
                        item={item}
                    />
                ))}
            </nav>
            <div
                className={cls.collapsedBtn}
                onClick={toggle}
            >
                {isCollapsed ? ">" : "<"}
            </div>
            <div className={cls.switchers}>
                <LangSwitcher isCollapsed={isCollapsed}/>
                <ThemeSwitcher isCollapsed={isCollapsed}/>
            </div>
        </aside>
    );
};

export default Sidebar;